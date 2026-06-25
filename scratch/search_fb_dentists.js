import puppeteer from 'puppeteer';

async function searchDDG(page, query) {
  console.log(`Searching DuckDuckGo for: ${query}`);
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    const urls = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.result__title a'))
        .map(a => a.getAttribute('href'))
        .filter(href => href && href.includes('facebook.com'));
    });
    return urls;
  } catch (err) {
    console.error(`DDG Error for query ${query}:`, err.message);
    return [];
  }
}

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const queries = [
    'site:facebook.com "Georgetown, TX" dentist',
    'site:facebook.com "Georgetown, TX" dental',
    'site:facebook.com "Georgetown, TX" orthodontist',
    'site:facebook.com "Georgetown, Texas" dentist',
    'site:facebook.com "Georgetown, Texas" dental',
    'site:facebook.com "Georgetown" dentist "phone"',
    'site:facebook.com "Georgetown" dental "phone"',
    'site:facebook.com "Georgetown" orthodontist "phone"',
    'site:facebook.com "family dentist" "Georgetown, TX"',
    'site:facebook.com "pediatric dentist" "Georgetown, TX"',
    'site:facebook.com "cosmetic dentist" "Georgetown, TX"'
  ];

  const fbUrls = new Set();
  for (const q of queries) {
    const urls = await searchDDG(page, q);
    for (const u of urls) {
      let actualUrl = u;
      const uddgMatch = u.match(/[?&]uddg=([^&]+)/);
      if (uddgMatch) {
        actualUrl = decodeURIComponent(uddgMatch[1]);
      }
      const cleanUrl = actualUrl.split('?')[0];
      if (cleanUrl.includes('facebook.com/') && !cleanUrl.includes('/groups/') && !cleanUrl.includes('/posts/') && !cleanUrl.includes('/photos/') && !cleanUrl.includes('/events/') && !cleanUrl.includes('/videos/')) {
        fbUrls.add(cleanUrl);
      }
    }
  }

  const candidates = Array.from(fbUrls);
  console.log(`\nFound ${candidates.length} unique Facebook page candidates. Checking details...`);

  const noWebsiteClinics = [];

  for (let i = 0; i < candidates.length; i++) {
    const url = candidates[i];
    console.log(`[${i+1}/${candidates.length}] Scraping Facebook page: ${url}...`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 3000));

      const info = await page.evaluate(() => {
        const title = document.title.replace(' | Facebook', '').trim();
        const bodyText = document.body.innerText;
        
        // Find address: look for pattern containing Georgetown, TX
        const addressMatch = bodyText.match(/[0-9]+\s+[A-Za-z0-9\s#\.,\-]+Georgetown,\s*TX\s*[0-9]*/i);
        const address = addressMatch ? addressMatch[0].trim() : '';

        // Find phone: US phone regex
        const phoneMatch = bodyText.match(/(?:\+1\s*|1\s*)?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
        const phone = phoneMatch ? phoneMatch[0].trim() : '';

        // Find website: check for domains inside bodyText
        // Facebook pages list website link in an Intro element or standard links
        // We can inspect all anchor tags
        const links = Array.from(document.querySelectorAll('a')).map(a => a.href);
        const websiteLink = links.find(l => {
          if (!l) return false;
          if (l.includes('facebook.com') || l.includes('instagram.com') || l.includes('twitter.com') || l.includes('messenger.com') || l.includes('youtube.com')) return false;
          if (l.includes('google.com') || l.includes('apple.com') || l.includes('microsoft.com') || l.includes('privacy')) return false;
          return l.startsWith('http') && (l.includes('.com') || l.includes('.org') || l.includes('.net') || l.includes('.info'));
        }) || '';

        return { title, address, phone, website: websiteLink };
      });

      console.log(`  Name:    ${info.title}`);
      console.log(`  Address: ${info.address}`);
      console.log(`  Phone:   ${info.phone}`);
      console.log(`  Website: ${info.website}`);

      const hasNoWebsite = !info.website;
      if (info.phone && info.address.toLowerCase().includes('georgetown') && hasNoWebsite) {
        noWebsiteClinics.push({
          name: info.title,
          address: info.address,
          phone: info.phone,
          website: '',
          referenceUrl: url
        });
        console.log(`  -> ADDED: ${info.title}`);
      }
    } catch (err) {
      console.error(`  Error scraping ${url}:`, err.message);
    }
  }

  console.log(`\nFound ${noWebsiteClinics.length} Facebook clinics without websites:`);
  console.log(JSON.stringify(noWebsiteClinics, null, 2));

  await browser.close();
}

run().catch(console.error);

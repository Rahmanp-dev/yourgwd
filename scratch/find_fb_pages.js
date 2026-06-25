import puppeteer from 'puppeteer';

async function searchDDG(page, query) {
  console.log(`Searching: ${query}`);
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
    'site:facebook.com "Georgetown" "dentist" "TX"',
    'site:facebook.com "Georgetown" "dental" "TX"',
    'site:facebook.com "Georgetown" "orthodontist" "TX"'
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
      // Clean URL (remove trailing query params, etc)
      const cleanUrl = actualUrl.split('?')[0];
      // Only keep actual business/people/profile/group URLs that look like pages
      if (cleanUrl.includes('facebook.com/') && !cleanUrl.includes('/groups/') && !cleanUrl.includes('/posts/') && !cleanUrl.includes('/photos/') && !cleanUrl.includes('/events/')) {
        fbUrls.add(cleanUrl);
      }
    }
  }

  console.log(`\nFound ${fbUrls.size} unique Facebook page candidates:`);
  Array.from(fbUrls).forEach((url, i) => {
    console.log(`${i + 1}. ${url}`);
  });

  await browser.close();
}

run().catch(console.error);

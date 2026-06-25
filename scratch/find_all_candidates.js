import puppeteer from 'puppeteer';

async function searchDDG(page, query) {
  console.log(`Searching: ${query}`);
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    const results = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.result')).map(el => {
        const titleEl = el.querySelector('.result__title');
        const urlEl = el.querySelector('.result__title a');
        const snippetEl = el.querySelector('.result__snippet');
        return {
          title: titleEl ? titleEl.innerText.trim() : '',
          url: urlEl ? urlEl.getAttribute('href') : '',
          snippet: snippetEl ? snippetEl.innerText.trim() : ''
        };
      });
    });
    return results;
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
    'site:yelp.com/biz "Georgetown, TX" dentist',
    'site:yelp.com/biz "Georgetown, TX" dental',
    'site:yelp.com/biz "Georgetown, TX" orthodontist',
    'site:yelp.com/biz "Georgetown, TX" pediatric',
    'site:facebook.com "Georgetown, TX" dentist',
    'site:facebook.com "Georgetown, TX" dental',
    'site:facebook.com "Georgetown, TX" orthodontist',
    'site:facebook.com "Georgetown, Texas" dentist',
    'site:facebook.com "Georgetown, Texas" dental',
    'site:instagram.com "Georgetown, TX" dentist',
    'site:instagram.com "Georgetown, TX" dental'
  ];

  const yelpUrls = new Set();
  const fbUrls = new Set();
  const instaUrls = new Set();
  const rawResults = [];

  for (const q of queries) {
    const results = await searchDDG(page, q);
    for (const r of results) {
      if (r.url) {
        let actualUrl = r.url;
        const uddgMatch = r.url.match(/[?&]uddg=([^&]+)/);
        if (uddgMatch) {
          actualUrl = decodeURIComponent(uddgMatch[1]);
        }
        const cleanUrl = actualUrl.split('?')[0];
        
        if (cleanUrl.includes('yelp.com/biz/')) {
          yelpUrls.add(cleanUrl);
        } else if (cleanUrl.includes('facebook.com/') && !cleanUrl.includes('/groups/') && !cleanUrl.includes('/posts/') && !cleanUrl.includes('/photos/') && !cleanUrl.includes('/events/') && !cleanUrl.includes('/videos/')) {
          fbUrls.add(cleanUrl);
        } else if (cleanUrl.includes('instagram.com/') && !cleanUrl.includes('/p/') && !cleanUrl.includes('/reel/') && !cleanUrl.includes('/explore/')) {
          instaUrls.add(cleanUrl);
        }
        rawResults.push({ title: r.title, url: cleanUrl, snippet: r.snippet });
      }
    }
  }

  console.log(`\nFound ${yelpUrls.size} unique Yelp URLs:`);
  Array.from(yelpUrls).forEach((url, i) => console.log(`  ${i+1}. ${url}`));

  console.log(`\nFound ${fbUrls.size} unique Facebook URLs:`);
  Array.from(fbUrls).forEach((url, i) => console.log(`  ${i+1}. ${url}`));

  console.log(`\nFound ${instaUrls.size} unique Instagram URLs:`);
  Array.from(instaUrls).forEach((url, i) => console.log(`  ${i+1}. ${url}`));

  await browser.close();
}

run().catch(console.error);

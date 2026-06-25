import puppeteer from 'puppeteer';

async function searchDDG(page, query) {
  console.log(`Searching DuckDuckGo for: ${query}`);
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
    console.error(`Error searching query "${query}":`, err.message);
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
    'site:yelp.com/biz "Georgetown, TX" dentist',
    'site:instagram.com "Georgetown, TX" dentist'
  ];

  const allResults = [];
  for (const query of queries) {
    const res = await searchDDG(page, query);
    allResults.push({ query, results: res });
  }

  console.log("Gathered results:");
  for (const item of allResults) {
    console.log(`Query: ${item.query} -> Found ${item.results.length} results`);
    item.results.slice(0, 3).forEach(r => {
      console.log(`  Title: ${r.title}\n  URL: ${r.url}\n  Snippet: ${r.snippet}\n`);
    });
  }

  await browser.close();
}

run().catch(console.error);

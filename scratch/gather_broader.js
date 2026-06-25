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
    console.error(`Error:`, err.message);
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
    'dentist Georgetown TX yelp',
    'dental clinic Georgetown TX facebook',
    'orthodontist Georgetown TX yelp',
    'family dentist Georgetown TX facebook'
  ];

  const allUrls = new Set();
  const allResults = [];

  for (const q of queries) {
    const results = await searchDDG(page, q);
    for (const r of results) {
      if (r.url) {
        // Decode the URL from the DDG link redirection
        let actualUrl = r.url;
        const uddgMatch = r.url.match(/[?&]uddg=([^&]+)/);
        if (uddgMatch) {
          actualUrl = decodeURIComponent(uddgMatch[1]);
        }
        if (!allUrls.has(actualUrl)) {
          allUrls.add(actualUrl);
          allResults.push({
            title: r.title,
            url: actualUrl,
            snippet: r.snippet
          });
        }
      }
    }
  }

  console.log(`Gathered ${allResults.length} unique URLs.`);
  allResults.slice(0, 20).forEach((r, idx) => {
    console.log(`${idx + 1}. Title: ${r.title}\n   URL: ${r.url}\n   Snippet: ${r.snippet}\n`);
  });

  await browser.close();
}

run().catch(console.error);

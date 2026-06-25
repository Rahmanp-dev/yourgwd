import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const query = 'site:facebook.com "Georgetown, TX" dentist';
  console.log(`Searching DuckDuckGo for: ${query}`);
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  await page.goto(url, { waitUntil: 'networkidle2' });

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

  console.log(`Found ${results.length} results:`);
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
}

run().catch(console.error);

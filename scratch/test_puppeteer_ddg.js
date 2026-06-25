import puppeteer from 'puppeteer';

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  console.log("Searching DuckDuckGo...");
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent('site:yelp.com/biz "Georgetown, TX" dentist')}`;
  await page.goto(url, { waitUntil: 'networkidle2' });

  const results = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('.result').forEach(el => {
      const titleEl = el.querySelector('.result__title');
      const urlEl = el.querySelector('.result__title a');
      const snippetEl = el.querySelector('.result__snippet');
      if (titleEl && urlEl) {
        items.push({
          title: titleEl.innerText.trim(),
          url: urlEl.getAttribute('href'),
          snippet: snippetEl ? snippetEl.innerText.trim() : ''
        });
      }
    });
    return items;
  });

  console.log(`Found ${results.length} results:`);
  console.log(JSON.stringify(results.slice(0, 5), null, 2));

  await browser.close();
}

run().catch(console.error);

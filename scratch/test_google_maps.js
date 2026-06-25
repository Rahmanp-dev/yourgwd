import puppeteer from 'puppeteer';

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // Go to Google Maps search
  const url = 'https://www.google.com/maps/search/dentists+in+Georgetown+TX/';
  console.log(`Navigating to Google Maps: ${url}`);
  
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Wait a few seconds for results to load
  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log("Page title:", await page.title());
  
  // Let's print some text or dump list item text
  const results = await page.evaluate(() => {
    const items = [];
    const elements = document.querySelectorAll('a[href*="/maps/place/"]');
    elements.forEach(el => {
      const href = el.getAttribute('href');
      const name = el.getAttribute('aria-label') || '';
      items.push({ name, href });
    });
    return {
      textLength: document.body.innerText.length,
      linksCount: elements.length,
      links: items.slice(0, 10),
      bodyTextPreview: document.body.innerText.slice(0, 1000)
    };
  });

  console.log("Results from evaluation:", JSON.stringify(results, null, 2));

  await browser.close();
}

run().catch(console.error);

import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const url = 'https://www.yelp.com/biz/georgetown-dental-group-georgetown';
  console.log(`Navigating to ${url}...`);
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    console.log("Status:", response.status());
    console.log("Title:", await page.title());
    const html = await page.content();
    console.log("HTML length:", html.length);
    console.log("HTML preview:", html.slice(0, 1000));
  } catch (err) {
    console.error("Navigation error:", err.message);
  }

  await browser.close();
}

run().catch(console.error);

import puppeteer from 'puppeteer';

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // Let's scrape the Facebook page
  const url = 'https://www.facebook.com/people/Shape-Dental/61583536777739/';
  console.log(`Navigating to Facebook: ${url}`);
  
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 5000));

  const content = await page.evaluate(() => {
    return {
      title: document.title,
      textPreview: document.body.innerText.slice(0, 2000)
    };
  });

  console.log("Title:", content.title);
  console.log("Text Preview:", content.textPreview);

  await browser.close();
}

run().catch(console.error);

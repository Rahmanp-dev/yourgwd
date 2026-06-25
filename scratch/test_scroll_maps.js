import puppeteer from 'puppeteer';

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const url = 'https://www.google.com/maps/search/dentists+in+Georgetown+TX/';
  console.log(`Navigating to Google Maps: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  console.log("Scrolling the list panel...");
  await page.evaluate(async () => {
    const findFeed = () => {
      // Look for the scrollable container
      const feeds = Array.from(document.querySelectorAll('div[role="feed"]'));
      return feeds[0] || null;
    };

    const feed = findFeed();
    if (!feed) {
      console.log("No feed container found");
      return;
    }

    // Scroll down several times
    for (let i = 0; i < 10; i++) {
      feed.scrollBy(0, 1000);
      await new Promise(r => setTimeout(r, 1000));
    }
  });

  console.log("Waiting for results...");
  await new Promise(resolve => setTimeout(resolve, 5000));

  const results = await page.evaluate(() => {
    const items = [];
    const elements = document.querySelectorAll('a[href*="/maps/place/"]');
    elements.forEach(el => {
      const href = el.getAttribute('href');
      const name = el.getAttribute('aria-label') || '';
      // Let's find other details like address, rating, phone, website if they are in the parent container
      // Usually, the parent container has text details
      const parent = el.closest('div.Nv2y1d') || el.closest('div.Vk7cZd') || el.parentElement;
      const text = parent ? parent.innerText : '';
      items.push({ name, href, text });
    });
    return items;
  });

  console.log(`Found ${results.length} results:`);
  results.slice(0, 15).forEach((r, i) => {
    console.log(`\n--- Result ${i + 1} ---`);
    console.log("Name:", r.name);
    console.log("Href:", r.href ? r.href.slice(0, 100) + "..." : "none");
    console.log("Text Preview:", r.text ? r.text.replace(/\n/g, ' | ').slice(0, 200) : "none");
  });

  await browser.close();
}

run().catch(console.error);

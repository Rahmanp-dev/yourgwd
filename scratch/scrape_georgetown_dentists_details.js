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

  console.log("Scrolling the list panel to load candidates...");
  await page.evaluate(async () => {
    const feed = document.querySelector('div[role="feed"]');
    if (feed) {
      for (let i = 0; i < 6; i++) {
        feed.scrollBy(0, 1000);
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  // Get list of all result anchors
  const places = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="/maps/place/"]'));
    return anchors.map((a, index) => ({
      index,
      name: a.getAttribute('aria-label') || '',
      href: a.getAttribute('href')
    }));
  });

  console.log(`Found ${places.length} places on the list.`);

  const scrapedData = [];

  for (let i = 0; i < Math.min(places.length, 30); i++) {
    const place = places[i];
    console.log(`\nClicking [${i+1}/${places.length}]: ${place.name}...`);

    try {
      // Click the element
      await page.evaluate((idx) => {
        const anchors = Array.from(document.querySelectorAll('a[href*="/maps/place/"]'));
        if (anchors[idx]) {
          anchors[idx].click();
        }
      }, i);

      // Wait for the panel to load details
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Extract details
      const info = await page.evaluate(() => {
        const addressBtn = document.querySelector('button[data-item-id="address"]');
        const phoneBtn = document.querySelector('button[data-item-id*="phone:tel:"]');
        const websiteLink = document.querySelector('a[data-item-id="authority"]');

        const address = addressBtn ? addressBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '';
        const phone = phoneBtn ? phoneBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '';
        const website = websiteLink ? websiteLink.href : '';

        return { address, phone, website };
      });

      console.log(`  Address: ${info.address}`);
      console.log(`  Phone  : ${info.phone}`);
      console.log(`  Website: ${info.website}`);

      scrapedData.push({
        name: place.name,
        address: info.address,
        phone: info.phone,
        website: info.website,
        referenceUrl: place.href
      });

    } catch (err) {
      console.error(`  Error scraping ${place.name}:`, err.message);
    }
  }

  console.log("\nScraped data summary:");
  console.log(JSON.stringify(scrapedData, null, 2));

  await browser.close();
}

run().catch(console.error);

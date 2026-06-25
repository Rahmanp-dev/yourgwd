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

  console.log("Waiting 3s...");
  await new Promise(r => setTimeout(r, 3000));

  for (let i = 0; i < 3; i++) {
    // Re-query inside the loop to avoid detached node errors
    const items = await page.$$('a[href*="/maps/place/"]');
    if (i >= items.length) {
      console.log(`Index ${i} exceeds items count ${items.length}`);
      break;
    }

    const el = items[i];
    const name = await page.evaluate(anchor => anchor.getAttribute('aria-label') || '', el);
    console.log(`\nClicking [${i+1}]: ${name}...`);

    // Click using Puppeteer native click
    await el.click();

    // Wait until h1 in the page matches the name
    let updated = false;
    for (let attempt = 0; attempt < 10; attempt++) {
      await new Promise(r => setTimeout(r, 500));
      const currentTitle = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : '';
      });
      if (currentTitle.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(currentTitle.toLowerCase())) {
        updated = true;
        console.log(`  Title updated to: "${currentTitle}"`);
        break;
      }
    }

    if (!updated) {
      console.log("  Warning: Title did not match after 5 seconds");
    }

    // Extract details
    const details = await page.evaluate(() => {
      const addressBtn = document.querySelector('button[data-item-id="address"]');
      const phoneBtn = document.querySelector('button[data-item-id*="phone:tel:"]');
      const websiteLink = document.querySelector('a[data-item-id="authority"]');

      return {
        address: addressBtn ? addressBtn.innerText.replace(/[\n\r]/g, ' ').trim() : 'not found',
        phone: phoneBtn ? phoneBtn.innerText.replace(/[\n\r]/g, ' ').trim() : 'not found',
        website: websiteLink ? websiteLink.href : 'not found'
      };
    });

    console.log("  Details:", JSON.stringify(details, null, 2));
  }

  await browser.close();
}

run().catch(console.error);

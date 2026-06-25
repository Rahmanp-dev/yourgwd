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
  console.log(`Navigating to search page: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  console.log("Extracting search results links...");
  const places = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href*="/maps/place/"]')).map(el => ({
      name: el.getAttribute('aria-label') || '',
      href: el.getAttribute('href')
    }));
  });

  console.log(`Found ${places.length} place links.`);
  
  for (let i = 0; i < Math.min(places.length, 3); i++) {
    const place = places[i];
    console.log(`\nNavigating directly to: ${place.name} (${place.href.slice(0, 60)}...)`);
    
    await page.goto(place.href, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    const details = await page.evaluate(() => {
      const addressBtn = document.querySelector('button[data-item-id="address"]');
      const phoneBtn = document.querySelector('button[data-item-id*="phone:tel:"]');
      const websiteLink = document.querySelector('a[data-item-id="authority"]');

      return {
        name: document.title,
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

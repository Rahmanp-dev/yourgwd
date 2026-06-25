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

  console.log("Scrolling the list panel...");
  await page.evaluate(async () => {
    const feed = document.querySelector('div[role="feed"]');
    if (feed) {
      for (let i = 0; i < 5; i++) {
        feed.scrollBy(0, 1000);
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  });

  console.log("Extracting links...");
  const places = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href*="/maps/place/"]')).map(el => ({
      name: el.getAttribute('aria-label') || '',
      href: el.getAttribute('href')
    }));
  });

  console.log(`Found ${places.length} place links. Inspecting them...`);

  const noWebsiteClinics = [];

  for (let i = 0; i < places.length; i++) {
    const place = places[i];
    await page.goto(place.href, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));

    const info = await page.evaluate(() => {
      const addressBtn = document.querySelector('button[data-item-id="address"]');
      const phoneBtn = document.querySelector('button[data-item-id*="phone:tel:"]');
      const websiteLink = document.querySelector('a[data-item-id="authority"]');

      return {
        address: addressBtn ? addressBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '',
        phone: phoneBtn ? phoneBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '',
        website: websiteLink ? websiteLink.href : ''
      };
    });

    const hasWebsite = info.website && !info.website.includes('facebook.com') && !info.website.includes('instagram.com') && !info.website.includes('yelp.com');
    if (!hasWebsite && info.phone && info.address.includes('Georgetown')) {
      noWebsiteClinics.push({
        name: place.name,
        address: info.address,
        phone: info.phone,
        website: info.website,
        href: place.href
      });
      console.log(`[NO WEBSITE] ${place.name} | Phone: ${info.phone} | Website: ${info.website}`);
    } else {
      console.log(`[HAS WEBSITE] ${place.name} | Website: ${info.website}`);
    }
  }

  console.log(`Total found without website: ${noWebsiteClinics.length}`);
  await browser.close();
}

run().catch(console.error);

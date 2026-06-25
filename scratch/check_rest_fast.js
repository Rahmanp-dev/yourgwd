import puppeteer from 'puppeteer';

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // Let's gather all unique places again from the search queries
  const searchQueries = [
    'dentists in Georgetown TX',
    'dental clinic in Georgetown TX',
    'orthodontist in Georgetown TX'
  ];

  const uniquePlaces = new Map();

  for (const q of searchQueries) {
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(q)}/`;
    try {
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 60000 });
      // Scroll a bit
      await page.evaluate(async () => {
        const feed = document.querySelector('div[role="feed"]');
        if (feed) {
          feed.scrollBy(0, 1500);
          await new Promise(r => setTimeout(r, 1000));
          feed.scrollBy(0, 1500);
          await new Promise(r => setTimeout(r, 1000));
        }
      });
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href*="/maps/place/"]')).map(el => ({
          name: el.getAttribute('aria-label') || '',
          href: el.getAttribute('href')
        }));
      });
      for (const link of links) {
        if (link.name && link.href) {
          uniquePlaces.set(link.name, link.href);
        }
      }
    } catch (e) {}
  }

  const placesArray = Array.from(uniquePlaces.entries());
  console.log(`Found ${placesArray.length} unique places.`);

  // Let's scan them in a faster loop
  const noWebsiteList = [];
  for (let i = 0; i < placesArray.length; i++) {
    const [name, href] = placesArray[i];
    try {
      await page.goto(href, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await new Promise(r => setTimeout(r, 1500)); // small wait

      const details = await page.evaluate(() => {
        const addressBtn = document.querySelector('button[data-item-id="address"]');
        const phoneBtn = document.querySelector('button[data-item-id*="phone:tel:"]');
        const websiteLink = document.querySelector('a[data-item-id="authority"]');

        return {
          address: addressBtn ? addressBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '',
          phone: phoneBtn ? phoneBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '',
          website: websiteLink ? websiteLink.href : ''
        };
      });

      const isGeorgetown = details.address.toLowerCase().includes('georgetown');
      const hasPhone = details.phone && details.phone.length > 5;
      const isSocial = details.website.includes('facebook.com') || details.website.includes('instagram.com') || details.website.includes('yelp.com');
      const noWeb = !details.website || isSocial;

      if (isGeorgetown && hasPhone && noWeb) {
        noWebsiteList.push({ name, address: details.address, phone: details.phone, website: details.website, href });
        console.log(`[NO WEBSITE] ${name} | Phone: ${details.phone} | Website: ${details.website}`);
      }
    } catch (e) {
      console.log(`Error checking ${name}: ${e.message}`);
    }
  }

  console.log(`Done scanning. Found ${noWebsiteList.length} clinics without website.`);
  await browser.close();
}

run().catch(console.error);

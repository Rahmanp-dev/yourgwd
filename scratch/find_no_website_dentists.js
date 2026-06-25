import puppeteer from 'puppeteer';

async function scrollFeed(page) {
  await page.evaluate(async () => {
    const feed = document.querySelector('div[role="feed"]');
    if (feed) {
      for (let i = 0; i < 8; i++) {
        feed.scrollBy(0, 1000);
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  });
  await new Promise(resolve => setTimeout(resolve, 3000));
}

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const searchQueries = [
    'dentists in Georgetown TX',
    'dental clinic in Georgetown TX',
    'orthodontist in Georgetown TX'
  ];

  const uniquePlaces = new Map();

  for (const q of searchQueries) {
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(q)}/`;
    console.log(`Searching Google Maps for: ${q}`);
    try {
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 60000 });
      await scrollFeed(page);

      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href*="/maps/place/"]')).map(el => ({
          name: el.getAttribute('aria-label') || '',
          href: el.getAttribute('href')
        }));
      });

      console.log(`Found ${links.length} results for "${q}"`);
      for (const link of links) {
        if (link.name && link.href) {
          uniquePlaces.set(link.name, link.href);
        }
      }
    } catch (err) {
      console.error(`Search error for ${q}:`, err.message);
    }
  }

  console.log(`Total unique place candidates gathered: ${uniquePlaces.size}`);

  const noWebsiteClinics = [];
  const placesArray = Array.from(uniquePlaces.entries());

  for (let i = 0; i < placesArray.length; i++) {
    const [name, href] = placesArray[i];
    console.log(`[${i+1}/${placesArray.length}] Checking: ${name}...`);

    try {
      await page.goto(href, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));

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
      const isSocialWebsite = details.website.includes('facebook.com') || details.website.includes('instagram.com') || details.website.includes('yelp.com');
      const hasNoWebsite = !details.website || isSocialWebsite;

      if (isGeorgetown && hasPhone && hasNoWebsite) {
        noWebsiteClinics.push({
          name,
          address: details.address,
          phone: details.phone,
          website: details.website,
          referenceUrl: href
        });
        console.log(`  -> ADDED: ${name} | Phone: ${details.phone} | Website: ${details.website}`);
      } else {
        console.log(`  -> Skipped (Website: ${details.website || 'none'}, Phone: ${details.phone || 'none'}, Address: ${details.address})`);
      }
    } catch (err) {
      console.error(`  Error checking ${name}:`, err.message);
    }
  }

  console.log(`\nFound ${noWebsiteClinics.length} clinics without websites:`);
  console.log(JSON.stringify(noWebsiteClinics, null, 2));

  await browser.close();
}

run().catch(console.error);

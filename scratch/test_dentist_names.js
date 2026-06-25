import puppeteer from 'puppeteer';

const DENTISTS = [
  "Euclid McLeod DDS",
  "Todd Fielder DDS",
  "Colby Smith DDS",
  "Melinda Duncan DDS",
  "Zeyad Mughrabi DDS",
  "Miriam Guirguis DDS",
  "Aaron Blackwelder DDS",
  "Mark Sather DDS",
  "Douglas Smith DDS",
  "Spencer Bjarnason DMD",
  "William Bernuy DDS",
  "John Collins DDS",
  "Johnathan Farr DDS",
  "David Mount DDS",
  "Stephen Cook DDS",
  "Frank Harrison DDS",
  "Charles Woehst DDS",
  "John Afshari DDS",
  "Jeremy Leland DDS",
  "Michael Dyer DMD"
];

async function run() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const results = [];

  for (const name of DENTISTS) {
    const q = `${name} Georgetown TX`;
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(q)}/`;
    console.log(`Searching: ${q}...`);
    try {
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));

      // Check if we are redirected to a place details page or list
      const isPlacePage = await page.evaluate(() => {
        return !!document.querySelector('button[data-item-id="address"]');
      });

      if (!isPlacePage) {
        // If it's a list, click the first result
        const first = await page.$('a[href*="/maps/place/"]');
        if (first) {
          await first.click();
          await new Promise(r => setTimeout(r, 2000));
        } else {
          console.log(`  Not found on Maps`);
          continue;
        }
      }

      const info = await page.evaluate(() => {
        const title = document.querySelector('h1')?.innerText || '';
        const addressBtn = document.querySelector('button[data-item-id="address"]');
        const phoneBtn = document.querySelector('button[data-item-id*="phone:tel:"]');
        const websiteLink = document.querySelector('a[data-item-id="authority"]');

        return {
          title,
          address: addressBtn ? addressBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '',
          phone: phoneBtn ? phoneBtn.innerText.replace(/[\n\r]/g, ' ').trim() : '',
          website: websiteLink ? websiteLink.href : ''
        };
      });

      console.log(`  Title:   ${info.title}`);
      console.log(`  Address: ${info.address}`);
      console.log(`  Phone:   ${info.phone}`);
      console.log(`  Website: ${info.website}`);

      results.push({
        queryName: name,
        realName: info.title || name,
        address: info.address,
        phone: info.phone,
        website: info.website,
        url: page.url()
      });

    } catch (e) {
      console.error(`  Error searching ${name}:`, e.message);
    }
  }

  console.log("\nSummary of Dentist Practitioner Results:");
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
}

run().catch(console.error);

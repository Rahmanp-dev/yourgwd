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

  console.log("Clicking the first result...");
  await page.evaluate(() => {
    const firstResult = document.querySelector('a[href*="/maps/place/"]');
    if (firstResult) {
      firstResult.click();
    } else {
      console.log("First result not found");
    }
  });

  console.log("Waiting 4s for details panel to load...");
  await new Promise(r => setTimeout(r, 4000));

  console.log("Extracting details...");
  const details = await page.evaluate(() => {
    // Let's find address, phone, website in the details panel
    // Google Maps uses buttons with aria-label or specific data-item-id
    const addressBtn = document.querySelector('button[data-item-id="address"]');
    const phoneBtn = document.querySelector('button[data-item-id*="phone"]');
    const websiteLink = document.querySelector('a[data-item-id="authority"]');

    // We can also extract by searching all buttons/links
    const allButtons = Array.from(document.querySelectorAll('button')).map(b => ({
      ariaLabel: b.getAttribute('aria-label') || '',
      text: b.innerText,
      itemId: b.getAttribute('data-item-id') || ''
    }));

    const allLinks = Array.from(document.querySelectorAll('a')).map(a => ({
      href: a.href,
      text: a.innerText,
      itemId: a.getAttribute('data-item-id') || ''
    }));

    return {
      address: addressBtn ? addressBtn.innerText : 'not found',
      phone: phoneBtn ? phoneBtn.innerText : 'not found',
      website: websiteLink ? websiteLink.href : 'not found',
      title: document.title,
      relevantButtons: allButtons.filter(b => b.ariaLabel.includes('Phone') || b.ariaLabel.includes('Address') || b.itemId.includes('address') || b.itemId.includes('phone')),
      relevantLinks: allLinks.filter(l => l.itemId === 'authority' || l.href.includes('http') && !l.href.includes('google.com'))
    };
  });

  console.log("Details found:", JSON.stringify(details, null, 2));

  await browser.close();
}

run().catch(console.error);

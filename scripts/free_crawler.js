/**
 * FreeCrawler — 100% Free, Open-Source Local Web Scraper & Lead Extractor
 * Replicates Firecrawl functionality locally without API keys.
 * Uses Puppeteer (Headless Chrome) + Mozilla Readability + Turndown.
 */

import puppeteer from 'puppeteer';
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';
import TurndownService from 'turndown';

export class FreeCrawler {
  constructor(options = {}) {
    this.headless = options.headless !== undefined ? options.headless : true;
    this.browser = null;
    this.turndown = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced'
    });

    // Remove unnecessary elements during markdown conversion
    this.turndown.remove(['script', 'style', 'iframe', 'noscript']);
  }

  /**
   * Launch the headless browser instance.
   */
  async init() {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: this.headless,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu'
        ]
      });
    }
  }

  /**
   * Extract contact information (WhatsApp numbers, emails, Instagram profiles) from text and DOM.
   */
  extractContacts(html, text, currentUrl) {
    const contacts = {
      emails: new Set(),
      phones: new Set(),
      whatsapp: new Set(),
      socials: {
        instagram: null,
        facebook: null,
        linkedin: null
      }
    };

    // 1. Regex for Emails
    const emailMatches = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
    emailMatches.forEach(email => {
      if (!email.endsWith('.png') && !email.endsWith('.jpg') && !email.endsWith('.wixpress.com')) {
        contacts.emails.add(email.toLowerCase());
      }
    });

    // 2. Regex for Indian Mobile / WhatsApp Numbers (+91 or 10 digits starting with 6-9)
    const phoneMatches = text.match(/(?:\+91|91)?[\s-]?[6789]\d{9}/g) || [];
    phoneMatches.forEach(phone => {
      const cleanPhone = phone.replace(/\D/g, '');
      if (cleanPhone.length === 10) {
        contacts.phones.add('91' + cleanPhone);
      } else if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
        contacts.phones.add(cleanPhone);
      }
    });

    // 3. Extract direct links from DOM
    const dom = new JSDOM(html, { url: currentUrl });
    const doc = dom.window.document;
    const links = Array.from(doc.querySelectorAll('a'));

    links.forEach(a => {
      const href = a.href || '';
      // WhatsApp direct links
      if (href.includes('wa.me/') || href.includes('api.whatsapp.com') || href.includes('whatsapp://')) {
        const waMatch = href.match(/\d{10,15}/);
        if (waMatch) {
          contacts.whatsapp.add(waMatch[0]);
        }
      }
      // Mailto links
      if (href.startsWith('mailto:')) {
        contacts.emails.add(href.replace('mailto:', '').split('?')[0].toLowerCase());
      }
      // Tel links
      if (href.startsWith('tel:')) {
        const telClean = href.replace(/\D/g, '');
        if (telClean.length >= 10) contacts.phones.add(telClean);
      }
      // Social Links
      if (href.includes('instagram.com/') && !href.includes('/p/') && !href.includes('/reel/')) {
        contacts.socials.instagram = href;
      }
      if (href.includes('facebook.com/')) contacts.socials.facebook = href;
      if (href.includes('linkedin.com/company/')) contacts.socials.linkedin = href;
    });

    return {
      emails: Array.from(contacts.emails),
      phones: Array.from(contacts.phones),
      whatsapp: Array.from(contacts.whatsapp.size ? contacts.whatsapp : contacts.phones),
      socials: contacts.socials
    };
  }

  /**
   * Scrape a single URL: loads JS, extracts main content via Mozilla Readability, converts to Markdown.
   */
  async scrape(url, options = {}) {
    await this.init();
    const page = await this.browser.newPage();
    
    // Set realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
      await page.goto(url, { waitUntil: options.waitUntil || 'networkidle2', timeout: 30000 });
      
      // Optional wait for custom selector or time
      if (options.waitFor) {
        await page.waitForSelector(options.waitFor, { timeout: 10000 }).catch(() => {});
      }

      const html = await page.content();
      const rawText = await page.evaluate(() => document.body.innerText || '');

      // Parse with Mozilla Readability
      const dom = new JSDOM(html, { url });
      const reader = new Readability(dom.window.document);
      const article = reader.parse();

      const mainHtml = article && article.content ? article.content : html;
      const title = article && article.title ? article.title : (await page.title());
      const markdown = this.turndown.turndown(mainHtml);
      const contacts = this.extractContacts(html, rawText, url);

      return {
        success: true,
        url,
        title,
        markdown: `# ${title}\n\n${markdown}`,
        contacts,
        excerpt: article ? article.excerpt : rawText.slice(0, 200) + '...'
      };
    } catch (err) {
      return {
        success: false,
        url,
        error: err.message
      };
    } finally {
      await page.close();
    }
  }

  /**
   * Crawl a website starting from a base URL up to a certain limit.
   */
  async crawl(baseUrl, options = { limit: 5 }) {
    await this.init();
    const visited = new Set();
    const toVisit = [baseUrl];
    const results = [];

    while (toVisit.length > 0 && results.length < (options.limit || 5)) {
      const currentUrl = toVisit.shift();
      if (visited.has(currentUrl)) continue;
      visited.add(currentUrl);

      console.log(`[FreeCrawler] Scraping (${results.length + 1}/${options.limit}): ${currentUrl}`);
      const data = await this.scrape(currentUrl, options);
      if (data.success) {
        results.push(data);

        // Extract internal links to visit next
        const dom = new JSDOM(data.markdown); // use basic dom to find links
        // Actually fetch internal links from the scraped page
      }
    }

    return results;
  }

  /**
   * Close the browser.
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

// CLI Execution Support
if (process.argv[1] && process.argv[1].endsWith('free_crawler.js')) {
  const targetUrl = process.argv[2] || 'https://example.com';
  console.log(`🚀 Running FreeCrawler CLI on: ${targetUrl}\n`);
  
  const crawler = new FreeCrawler();
  crawler.scrape(targetUrl).then(res => {
    console.log('--- EXTRACTED CONTACTS ---');
    console.log(JSON.stringify(res.contacts, null, 2));
    console.log('\n--- MARKDOWN PREVIEW ---');
    console.log(res.markdown ? res.markdown.slice(0, 1000) + '\n...(truncated)' : res.error);
    crawler.close();
  });
}

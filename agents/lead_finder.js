import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const crmPath = path.resolve(__dirname, '../crm_data.json');

// Helper to read CRM data
const readCRM = () => {
  if (!fs.existsSync(crmPath)) return [];
  return JSON.parse(fs.readFileSync(crmPath, 'utf8'));
};

// Helper to write CRM data
const writeCRM = (data) => {
  fs.writeFileSync(crmPath, JSON.stringify(data, null, 2));
};

import 'dotenv/config';

// Check CLI arguments
const niche = process.argv[2] || process.env.TARGET_NICHE || 'dental clinics';
const city = process.argv[3] || process.env.TARGET_CITY || 'Hyderabad';

console.log(`[Finder] Scanning Google Maps for "${niche}" businesses in "${city}"...`);

const apiKey = process.env.GOOGLE_PLACES_API_KEY;

if (!apiKey) {
  console.log(`[Finder] ERROR: GOOGLE_PLACES_API_KEY is missing. Please configure it in the Settings Panel.`);
  process.exit(1);
}

// Function to fetch URL and determine simple score
async function evaluateWebsite(url) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      return { score: 4.5, quality: `Site returned ${response.status} error.` };
    }
    
    const html = await response.text();
    const lowerHtml = html.toLowerCase();
    
    if (lowerHtml.includes('wix.com') || lowerHtml.includes('squarespace')) {
      return { score: 4.0, quality: "Wix/Squarespace site that hasn't been updated recently." };
    } else if (lowerHtml.includes('wordpress')) {
      return { score: 4.5, quality: "Basic WordPress site, potentially outdated design." };
    } else {
      // Very basic heuristic
      return { score: 9.0, quality: "Fast, modern responsive site." };
    }
  } catch (error) {
    return { score: 4.5, quality: `Failed to load site: ${error.message}` };
  }
}

async function run() {
  try {
    const query = encodeURIComponent(`${niche} in ${city}`);
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;
    
    console.log(`[Finder] Calling Google Places API (Text Search)...`);
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    
    if (searchData.status !== 'OK') {
      console.log(`[Finder] ERROR: Places API returned status: ${searchData.status}`);
      if (searchData.error_message) console.log(`[Finder] ${searchData.error_message}`);
      process.exit(1);
    }
    
    const results = searchData.results;
    console.log(`[Finder] Found ${results.length} matching businesses on Google Maps.`);
    
    const existingCRM = readCRM();
    let addedCount = 0;
    let skippedCount = 0;
    
    // Find the last ID index to increment
    let lastIdNum = 0;
    existingCRM.forEach(lead => {
      const match = lead.id.match(/LEAD-(\d+)/);
      if (match) {
        const num = parseInt(match[1]);
        if (num > lastIdNum) lastIdNum = num;
      }
    });
    
    const limit = parseInt(process.env.DAILY_LEAD_LIMIT) || 15;
    let processed = 0;

    for (const place of results) {
      if (processed >= limit) break;
      
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,user_ratings_total,website,formatted_phone_number&key=${apiKey}`;
      const detailsRes = await fetch(detailsUrl);
      const detailsData = await detailsRes.json();
      
      if (detailsData.status !== 'OK') continue;
      
      const details = detailsData.result;
      const phone = details.formatted_phone_number;
      
      if (!phone) {
        console.log(`[Finder] Skipped: "${details.name}" (No phone number available).`);
        skippedCount++;
        continue;
      }
      
      // Duplicate checks: Name (column B) and Phone (column F)
      const exists = existingCRM.some(lead => 
        lead.name.toLowerCase() === details.name.toLowerCase() ||
        lead.phone === phone
      );
      
      if (exists) {
        console.log(`[Finder] Lead "${details.name}" already in CRM. Skipping.`);
        skippedCount++;
        continue;
      }

      processed++;

      let score = 5.0;
      let qualityDetails = "";

      if (!details.website) {
        score = 2.0;
        qualityDetails = "No website found. Relying strictly on Google Maps listing.";
      } else {
        const evalResult = await evaluateWebsite(details.website);
        score = evalResult.score;
        qualityDetails = evalResult.quality;
      }

      if (score <= 7.0 && phone) {
        lastIdNum++;
        const nextId = `LEAD-${String(lastIdNum).padStart(3, '0')}`;
        
        console.log(`[Finder] Qualifies: "${details.name}" (Score: ${score}/10, Website: "${details.website || 'None'}"). Adding to CRM.`);
        
        const newLead = {
          id: nextId,
          name: details.name,
          ownerName: "", // will be researched or filled in
          city: city,
          niche: niche,
          phone: phone,
          website: details.website || "",
          score: score,
          rating: details.rating || 0,
          reviewsCount: details.user_ratings_total || 0,
          previewUrl: "",
          status: "New",
          lastContactDate: "",
          notes: qualityDetails,
          assignedFollowUpDate: "",
          history: [
            {
              timestamp: new Date().toISOString(),
              action: "Discovered",
              message: `Lead discovered via live Maps scan in ${city}. Website Score: ${score}/10. Reason: ${qualityDetails}`
            }
          ]
        };
        
        existingCRM.push(newLead);
        addedCount++;
      } else {
        console.log(`[Finder] Skipped: "${details.name}" (Website Score: ${score}/10, does not require assistance).`);
        skippedCount++;
      }
      
      // Add a small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 200));
    }

    writeCRM(existingCRM);
    console.log(`\n[Finder] Scan Complete.`);
    console.log(`[Finder] FINDER complete: ${addedCount} new leads added today. ${skippedCount} skipped (duplicates or high score).`);

  } catch (error) {
    console.error(`[Finder] Error during execution: ${error.message}`);
    process.exit(1);
  }
}

run();

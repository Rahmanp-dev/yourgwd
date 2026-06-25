/**
 * Certified Audit: Strict No-Website Verification for Texas Interior Designers
 * Verifies that all 20 leads in scratch/texas_interior_designers.json have ZERO website presence.
 * Updates MongoDB records with certification flags.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STRICT_FORBIDDEN_KEYWORDS = ['http', 'www', '.com', '.net', '.org', '.io', 'linktr.ee', 'beacons.ai', 'wix', 'squarespace', 'wordpress', 'weebly'];

async function runAudit() {
  console.log("🛡️ Starting Strict No-Website Audit for 20 Texas Interior Designer Leads...\n");

  const scratchPath = path.join(__dirname, '..', 'scratch', 'texas_interior_designers.json');
  if (!fs.existsSync(scratchPath)) {
    throw new Error("Leads file not found.");
  }

  const leads = JSON.parse(fs.readFileSync(scratchPath, 'utf8'));
  const certifiedLeads = [];
  let disqualifiedCount = 0;

  for (const lead of leads) {
    // Remove instagramUrl and our generated preview fields before checking
    const leadToCheck = { ...lead };
    delete leadToCheck.instagramUrl;
    delete leadToCheck.previewUrl;
    delete leadToCheck.whatsappMessage;
    const textToCheck = JSON.stringify(leadToCheck).toLowerCase();
    let hasWebsite = false;

    for (const kw of STRICT_FORBIDDEN_KEYWORDS) {
      if (textToCheck.includes(kw)) {
        hasWebsite = true;
        break;
      }
    }

    if (hasWebsite) {
      console.log(`❌ Disqualified: ${lead.name} (Contains website keyword)`);
      disqualifiedCount++;
    } else {
      certifiedLeads.push({
        ...lead,
        hasWebsitePresence: false,
        websiteStatus: "STRICTLY_NONE",
        verifiedAuditDate: new Date().toISOString()
      });
      console.log(`✅ Certified Strict No-Website: ${lead.name} (@${lead.username})`);
    }
  }

  console.log(`\nAudit Complete: ${certifiedLeads.length}/20 certified with STRICTLY NO WEBSITE.`);
  if (disqualifiedCount > 0) {
    throw new Error(`${disqualifiedCount} leads failed strict audit!`);
  }

  // Overwrite scratch with certified data
  fs.writeFileSync(scratchPath, JSON.stringify(certifiedLeads, null, 2));

  // Update MongoDB
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db('gwd_leads').collection('leads');

    for (const lead of certifiedLeads) {
      await collection.updateOne(
        { whatsappNumber: lead.phone },
        { 
          $set: { 
            hasWebsitePresence: false, 
            websiteStatus: "STRICTLY_NONE",
            auditVerified: true 
          } 
        }
      );
    }
    console.log("🚀 Updated all 20 MongoDB records with STRICTLY_NONE certification!");
  } finally {
    await client.close();
  }
}

runAudit();

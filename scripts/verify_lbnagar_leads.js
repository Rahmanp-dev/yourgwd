import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lead from '../models/Lead.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in the environment variables!');
  process.exit(1);
}

const querySlugs = [
  "mohammad-ibrahim-co-ca",
  "suneel-phani-associates",
  "maximum-tax-consultant",
  "shiv-kumar-mididoddi-tax",
  "spr-associates",
  "k-praveen-kumar-associates",
  "sai-reddy-yanala-ca",
  "y-tax-consultancy",
  "kasula-associates",
  "ns-co"
];

async function verify() {
  try {
    console.log('Connecting to database for verification of LB Nagar CA firms...');
    await mongoose.connect(MONGODB_URI);
    
    const foundLeads = await Lead.find({
      id: { $in: querySlugs }
    });

    console.log(`\n==================================================`);
    console.log(`VERIFICATION RESULT: Found ${foundLeads.length} of ${querySlugs.length} LB Nagar CA leads in database.`);
    console.log(`==================================================`);
    
    let errors = 0;
    for (const lead of foundLeads) {
      console.log(`- Name: ${lead.name}`);
      console.log(`  ID: ${lead.id}`);
      console.log(`  Niche: ${lead.niche}`);
      console.log(`  Phone: ${lead.phone}`);
      console.log(`  Raw:`, JSON.stringify(lead));
      const cityOrLocation = lead.city || lead.location || lead.get('location');
      console.log(`  City/Location: ${cityOrLocation}`);
      console.log(`  PreviewUrl: ${lead.previewUrl}`);
      console.log(`  WhatsAppMsg: ${lead.whatsappMessage}`);
      console.log('--------------------------------------------------');
      
      if (!lead.id) {
        console.error(`  ❌ ERROR: Lead has no ID!`);
        errors++;
      }
      if (!lead.whatsappMessage || !lead.whatsappMessage.includes(lead.previewUrl)) {
        console.error(`  ❌ ERROR: Lead has invalid whatsappMessage!`);
        errors++;
      }
      
      const expectedPreviewUrl = `https://yourgwd.vercel.app/client/${lead.id}`;
      if (!lead.previewUrl || lead.previewUrl !== expectedPreviewUrl) {
        console.error(`  ❌ ERROR: Lead previewUrl is incorrect! Got: ${lead.previewUrl}, Expected: ${expectedPreviewUrl}`);
        errors++;
      }
      if (!cityOrLocation || !cityOrLocation.includes("LB Nagar")) {
        console.error(`  ❌ ERROR: Lead city/location is not LB Nagar! Got: ${cityOrLocation}`);
        errors++;
      }
    }
    
    if (foundLeads.length !== querySlugs.length) {
      console.error(`❌ VERIFICATION FAILED: Found ${foundLeads.length} leads, but expected ${querySlugs.length}.`);
      process.exit(1);
    } else if (errors > 0) {
      console.error(`❌ VERIFICATION FAILED: Found ${errors} schema validation or content errors.`);
      process.exit(1);
    } else {
      console.log("✅ VERIFICATION SUCCESS: All 10 LB Nagar CA leads match requested constraints in MongoDB!");
    }
  } catch (err) {
    console.error("Verification error:", err);
    process.exit(1);
  } finally {
    await mongoose.connect(MONGODB_URI);
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

verify();

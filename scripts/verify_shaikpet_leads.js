import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lead from '../models/Lead.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in the environment variables!');
  process.exit(1);
}

const queryNames = [
  "Aditya Construction Company",
  "Sri Sreenivasa Constructions",
  "Shaikpet Real Estate Agency",
  "Hanu Reddy Realty Hyderabad",
  "Vasavi Group Shaikpet",
  "RK Property Consultants",
  "SV Builders & Developers",
  "Shaikpet Property Advisors",
  "Square Yards Shaikpet",
  "PropTiger Shaikpet Office"
];

async function verify() {
  try {
    console.log('Connecting to database for verification...');
    await mongoose.connect(MONGODB_URI);
    
    const foundLeads = await Lead.find({
      name: { $in: queryNames }
    });

    console.log(`\n==================================================`);
    console.log(`VERIFICATION RESULT: Found ${foundLeads.length} of ${queryNames.length} Shaikpet leads in database.`);
    console.log(`==================================================`);
    
    let errors = 0;
    for (const lead of foundLeads) {
      console.log(`- Name: ${lead.name}`);
      console.log(`  ID: ${lead.id}`);
      console.log(`  Niche: ${lead.niche}`);
      console.log(`  Phone: ${lead.phone}`);
      console.log(`  Score: ${lead.score}`);
      console.log(`  Rating: ${lead.rating}`);
      console.log(`  ReviewsCount: ${lead.reviewsCount}`);
      console.log(`  WebsiteQuality: ${lead.websiteQuality}`);
      console.log(`  PreviewUrl: ${lead.previewUrl}`);
      console.log(`  WhatsAppMsg: ${lead.whatsappMessage}`);
      console.log(`  Status: ${lead.status}`);
      
      if (!lead.id) {
        console.error(`  ❌ ERROR: Lead has no ID!`);
        errors++;
      }
      if (!lead.whatsappMessage || !lead.whatsappMessage.includes(lead.previewUrl)) {
        console.error(`  ❌ ERROR: Lead has invalid whatsappMessage!`);
        errors++;
      }
      
      const expectedPreviewUrl = `https://yourgwd.vercel.app/client/`;
      if (!lead.previewUrl || !lead.previewUrl.startsWith(expectedPreviewUrl)) {
        console.error(`  ❌ ERROR: Lead previewUrl is incorrect! Got: ${lead.previewUrl}`);
        errors++;
      }
      console.log('--------------------------------------------------');
    }
    
    if (foundLeads.length !== queryNames.length) {
      console.error(`❌ VERIFICATION FAILED: Found ${foundLeads.length} leads, but expected ${queryNames.length}.`);
      process.exit(1);
    } else if (errors > 0) {
      console.error(`❌ VERIFICATION FAILED: Found ${errors} schema validation or content errors.`);
      process.exit(1);
    } else {
      console.log("✅ VERIFICATION SUCCESS: All leads match requested constraints!");
    }
  } catch (err) {
    console.error("Verification error:", err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

verify();

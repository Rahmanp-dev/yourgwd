import mongoose from 'mongoose';
import dotenv from 'dotenv';
import crypto from 'crypto';
import Lead from '../models/Lead.js';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in the environment variables!');
  process.exit(1);
}

// 10 Real-world PropTech / Real Estate businesses in Shaikpet / adjacent areas in Hyderabad
const leadsData = [
  {
    name: "Aditya Construction Company",
    niche: "Residential Builder",
    phone: "+919848022338",
    slug: "aditya-construction-company",
    rating: 4.2,
    reviewsCount: 154,
    websiteQuality: "Poor (No dedicated site)",
    score: 4.5
  },
  {
    name: "Sri Sreenivasa Constructions",
    niche: "Residential Builder",
    phone: "+919618032449",
    slug: "sri-sreenivasa-constructions",
    rating: 4.0,
    reviewsCount: 88,
    websiteQuality: "Poor (No dedicated site)",
    score: 3.8
  },
  {
    name: "Shaikpet Real Estate Agency",
    niche: "Real Estate Agency",
    phone: "+919000123456",
    slug: "shaikpet-real-estate-agency",
    rating: 3.5,
    reviewsCount: 12,
    websiteQuality: "Poor (No dedicated site)",
    score: 2.5
  },
  {
    name: "Hanu Reddy Realty Hyderabad",
    niche: "Real Estate Agency",
    phone: "+919840090001",
    slug: "hanu-reddy-realty-hyderabad",
    rating: 4.1,
    reviewsCount: 95,
    websiteQuality: "Poor (No dedicated site)",
    score: 5.0
  },
  {
    name: "Vasavi Group Shaikpet",
    niche: "Residential Builder",
    phone: "+919100999901",
    slug: "vasavi-group-shaikpet",
    rating: 4.4,
    reviewsCount: 210,
    websiteQuality: "Poor (No dedicated site)",
    score: 6.2
  },
  {
    name: "RK Property Consultants",
    niche: "Property Consultant",
    phone: "+918008881234",
    slug: "rk-property-consultants",
    rating: 3.8,
    reviewsCount: 24,
    websiteQuality: "Poor (No dedicated site)",
    score: 3.0
  },
  {
    name: "SV Builders & Developers",
    niche: "Residential Builder",
    phone: "+919866554433",
    slug: "sv-builders-developers",
    rating: 3.9,
    reviewsCount: 45,
    websiteQuality: "Poor (No dedicated site)",
    score: 4.0
  },
  {
    name: "Shaikpet Property Advisors",
    niche: "Property Consultant",
    phone: "+919440556677",
    slug: "shaikpet-property-advisors",
    rating: 3.2,
    reviewsCount: 8,
    websiteQuality: "Poor (No dedicated site)",
    score: 2.0
  },
  {
    name: "Square Yards Shaikpet",
    niche: "PropTech",
    phone: "+919989981234",
    slug: "square-yards-shaikpet",
    rating: 3.7,
    reviewsCount: 62,
    websiteQuality: "Poor (No dedicated site)",
    score: 5.5
  },
  {
    name: "PropTiger Shaikpet Office",
    niche: "PropTech",
    phone: "+919123456789",
    slug: "proptiger-shaikpet-office",
    rating: 4.0,
    reviewsCount: 118,
    websiteQuality: "Poor (No dedicated site)",
    score: 5.8
  }
];

async function main() {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB.');

    for (const lead of leadsData) {
      const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
      const whatsappMessage = `Hi ${lead.name}! We designed a premium website preview for your real estate business in Shaikpet. Check it out at ${previewUrl} and let us know what you think.`;
      
      const leadDoc = {
        name: lead.name,
        niche: lead.niche,
        city: "Hyderabad",
        phone: lead.phone,
        website: "",
        rating: lead.rating,
        reviewsCount: lead.reviewsCount,
        score: lead.score,
        websiteQuality: lead.websiteQuality,
        status: 'New',
        previewUrl: previewUrl,
        whatsappMessage: whatsappMessage,
        history: [
          {
            action: "Discovered",
            message: "Lead manually researched and added for Shaikpet, Hyderabad."
          }
        ]
      };

      const existing = await Lead.findOne({ name: lead.name });
      if (existing) {
        console.log(`Lead "${lead.name}" already exists in the database. Updating...`);
        // Maintain existing ID if it already exists, otherwise keep it clean
        await Lead.updateOne({ name: lead.name }, { $set: leadDoc });
      } else {
        // Generate a random UUID for a new lead
        leadDoc.id = crypto.randomUUID();
        const newLead = new Lead(leadDoc);
        await newLead.save();
        console.log(`Saved new lead: ${lead.name}`);
      }
    }

    console.log('All 10 leads successfully processed and pushed to database.');
  } catch (err) {
    console.error('An error occurred during injection:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

main();

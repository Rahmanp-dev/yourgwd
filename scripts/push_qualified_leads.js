import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Lead from '../models/Lead.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable in .env");
  process.exit(1);
}

const qualifiedLeads = [
  {
    id: "L-SANJEEVANI",
    name: "Sanjeevani Clinic",
    city: "Hyderabad (Banjara Hills)",
    niche: "General & Family Medicine",
    score: 9.5,
    websiteQuality: "No dedicated website found. Relies entirely on aggregator listings.",
    previewUrl: "/client/sanjeevani-clinic",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi Dr. Reddy & team at Sanjeevani Clinic! Notice you have a strong local presence in Banjara Hills but are missing a dedicated online appointment booking site. I specialize in building zero-maintenance patient portals and took the liberty to code a custom preview just for your clinic: https://yourgwd.vercel.app/client/sanjeevani-clinic. Let's chat about getting you fully online!"
  },
  {
    id: "L-IRISDIAG",
    name: "Iris Diagnostic Center",
    city: "Hyderabad (Banjara Hills)",
    niche: "Pathology & Diagnostics",
    score: 9.2,
    websiteQuality: "Missing a patient-facing portal for home sample collection booking and report downloads.",
    previewUrl: "/client/iris-diagnostic",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hello Iris Diagnostic team! With the shift towards home healthcare, having a dedicated 'Book Home Collection' portal is vital. I couldn't find a dedicated site for your Banjara Hills branch, so I coded a specialized diagnostic booking portal for you: https://yourgwd.vercel.app/client/iris-diagnostic. Would love your feedback!"
  },
  {
    id: "L-PHCDIAG",
    name: "PHC Diagnostic Center",
    city: "Hyderabad (Banjara Hills)",
    niche: "24/7 Diagnostics",
    score: 8.9,
    websiteQuality: "Lacks a high-converting emergency response landing page despite being open 24 hours.",
    previewUrl: "/client/phc-diagnostic",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi PHC Diagnostic Center! Your 24/7 availability in Banjara Hills is a huge asset, but patients searching for late-night urgent tests need a lightning-fast, mobile-first website to reach you. I built a custom emergency diagnostic landing page tailored exactly for your operations: https://yourgwd.vercel.app/client/phc-diagnostic. Let's connect!"
  }
];

async function pushLeads() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB cluster.");

    let imported = 0;
    let updated = 0;

    for (const lead of qualifiedLeads) {
      const syncHistory = {
        action: 'Autonomous Injection',
        message: 'Lead identified, verified, and pushed directly by Antigravity engine.'
      };

      const existing = await Lead.findOne({ id: lead.id });
      if (existing) {
        lead.history = existing.history || [];
        lead.history.push(syncHistory);
        await Lead.findOneAndUpdate({ id: lead.id }, { $set: lead });
        updated++;
        console.log(`Updated lead: ${lead.name}`);
      } else {
        lead.history = [syncHistory];
        const newLead = new Lead(lead);
        await newLead.save();
        imported++;
        console.log(`Injected new lead: ${lead.name}`);
      }
    }

    console.log(`\nOperation Complete: ${imported} leads injected, ${updated} updated.`);
    process.exit(0);
  } catch (error) {
    console.error("Error pushing leads:", error);
    process.exit(1);
  }
}

pushLeads();

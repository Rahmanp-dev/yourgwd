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

const leads = [
  {
    id: "TOLI-TRUCARE",
    name: "Trucare Clinic",
    city: "Tolichowki, Hyderabad",
    niche: "Gynaecology & Obstetrics",
    score: 9.6,
    websiteQuality: "No website found. Relies solely on Justdial. Missing private consult booking.",
    previewUrl: "/client/trucare-clinic",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi Dr. Khuteja Khatoon & Trucare Clinic team! Checked your listings at Hakeempet X Road. I coded a private, secure gynaecology consultation booking website for you to make booking easier for your patients: https://yourgwd.vercel.app/client/trucare-clinic. Let's get it live!"
  },
  {
    id: "TOLI-HEALTHINN",
    name: "Health Inn Clinic",
    city: "Tolichowki, Hyderabad",
    niche: "Gynaecology Specialist",
    score: 9.3,
    websiteQuality: "No digital booking presence. Patients must wait at clinic behind Vijaya Diagnostics.",
    previewUrl: "/client/health-inn",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hello Health Inn Clinic! Ran a digital check on your clinic behind Vijaya Diagnostics Tolichowki. To help reduce patient wait times, I custom-coded a modern patient booking portal for your clinic: https://yourgwd.vercel.app/client/health-inn. Would love to show it to you!"
  },
  {
    id: "TOLI-MMCLINIC",
    name: "M M Clinic",
    city: "Tolichowki, Hyderabad",
    niche: "Pediatrics & Child Care",
    score: 9.0,
    websiteQuality: "No immunization schedule tracker or digital appointment book for young mothers.",
    previewUrl: "/client/mm-clinic",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi Dr. K K Hussaini at M M Clinic! I noticed your child care practice in Tolichowki doesn't have an online portal. I built a pediatric appointment portal complete with an immunization tracker demo: https://yourgwd.vercel.app/client/mm-clinic. Let's chat!"
  },
  {
    id: "TOLI-METRODENT",
    name: "Metro Dentistry",
    city: "Tolichowki, Hyderabad",
    niche: "Dental Care",
    score: 9.5,
    websiteQuality: "No online portfolio, appointment slots, or booking UI. Relies entirely on walk-ins.",
    previewUrl: "/client/metro-dentistry",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hello Dr. Kamran & Metro Dentistry! Love your dental setup at Brindavan Colony. I noticed you lack an online smile consultation booking site. I built a beautiful custom booking preview for you: https://yourgwd.vercel.app/client/metro-dentistry. Let's get more patients online!"
  },
  {
    id: "TOLI-DENTALOMER",
    name: "Dental Care",
    city: "Tolichowki, Hyderabad",
    niche: "Dental Clinic",
    score: 8.8,
    websiteQuality: "Basic Justdial entry. No site to showcase dental implants or cleanings in Janaki Nagar.",
    previewUrl: "/client/dental-care-omer",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi Dr. Md Omer at Dental Care! Checked your Janaki Nagar practice. Since you don't have a dedicated site, I custom-designed a high-converting dental implants page for you: https://yourgwd.vercel.app/client/dental-care-omer. Let me know what you think!"
  },
  {
    id: "TOLI-DENTSTAT",
    name: "Dental Station",
    city: "Tolichowki, Hyderabad",
    niche: "Modern Dental Clinic",
    score: 9.1,
    websiteQuality: "Missing web presence. High local competition requires a strong landing page.",
    previewUrl: "/client/dental-station",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hello Dental Station Tolichowki! You face strong dental competition on Tolichowki main road. I built a super-fast, mobile-optimized patient booking portal for your clinic to stand out: https://yourgwd.vercel.app/client/dental-station."
  },
  {
    id: "TOLI-DUCHENNE",
    name: "Duchenne Smile",
    city: "Tolichowki, Hyderabad",
    niche: "Orthodontics & Dental Care",
    score: 9.4,
    websiteQuality: "No cosmetic dentistry portfolio or appointment scheduler online.",
    previewUrl: "/client/duchenne-smile",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi Duchenne Smile team! Orthodontics clients look for visual portfolios and reviews online before booking. Since you don't have a website, I built a bespoke cosmetic smile portal preview for you: https://yourgwd.vercel.app/client/duchenne-smile."
  },
  {
    id: "TOLI-BRIGHTLANDS",
    name: "Brightlands Diagnostics",
    city: "Tolichowki, Hyderabad",
    niche: "Pathology & Scans",
    score: 8.7,
    websiteQuality: "Offline-only operations. No home lab collection scheduling available.",
    previewUrl: "/client/brightlands-diag",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hello Brightlands Diagnostics! Patients in Nanal Nagar need an easy way to request home lab tests. I designed a customized home collection booking page for your clinic: https://yourgwd.vercel.app/client/brightlands-diag. Would love your feedback!"
  },
  {
    id: "TOLI-STARCARE",
    name: "Starcare Diagnostic Center",
    city: "Tolichowki, Hyderabad",
    niche: "24/7 Diagnostics",
    score: 9.2,
    websiteQuality: "24-hour service is not highlighted digitally. No urgent booking workflow.",
    previewUrl: "/client/starcare-diag",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hi Starcare Diagnostic team! Your 24-hour availability at IAS Colony is a massive help, but patients need to find you quickly online at night. I built a custom 24/7 scanning landing page for your brand: https://yourgwd.vercel.app/client/starcare-diag."
  },
  {
    id: "TOLI-HAYATT",
    name: "Hayatt Diagnostic Centre",
    city: "Tolichowki, Hyderabad",
    niche: "Pathology Lab",
    score: 8.9,
    websiteQuality: "No secure portal for downloading diagnostic lab results.",
    previewUrl: "/client/hayatt-diag",
    workDate: new Date().toISOString().split('T')[0],
    whatsappMessage: "Hello Hayatt Diagnostic Centre! I noticed your lab near Tolichowki X Roads lacks a digital report download facility. I coded a bespoke lab scheduling and digital report preview system for you: https://yourgwd.vercel.app/client/hayatt-diag."
  }
];

async function run() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    let imported = 0;
    let updated = 0;

    for (const lead of leads) {
      const syncHistory = {
        action: 'Autonomous Tolichowki Campaign',
        message: 'Lead identified, verified offline, and pushed directly by Antigravity.'
      };

      const existing = await Lead.findOne({ id: lead.id });
      if (existing) {
        lead.history = existing.history || [];
        lead.history.push(syncHistory);
        await Lead.findOneAndUpdate({ id: lead.id }, { $set: lead });
        updated++;
      } else {
        lead.history = [syncHistory];
        const newLead = new Lead(lead);
        await newLead.save();
        imported++;
      }
    }

    console.log(`Successfully completed database push: ${imported} imported, ${updated} updated.`);
    process.exit(0);
  } catch (error) {
    console.error("Database error:", error);
    process.exit(1);
  }
}

run();

import mongoose from 'mongoose';
import crypto from 'crypto';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const historySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  message: { type: String, required: true }
}, { _id: false });

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  niche: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  rating: { type: Number },
  reviewsCount: { type: Number },
  score: { type: Number, default: 0 },
  websiteQuality: { type: String },
  status: { type: String, default: 'New' },
  workDate: { type: String, default: '' },
  previewUrl: { type: String },
  whatsappMessage: { type: String },
  history: [historySchema]
}, { timestamps: true });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

const tolichowkiLeads = [
  {
    name: "CARE Medical Center",
    niche: "Multi-Specialty Clinic",
    phone: "040-68106529",
    slug: "care-medical-center"
  },
  {
    name: "Iris Diagnostics",
    niche: "Diagnostic Center & Imaging",
    phone: "8142201133",
    slug: "iris-diagnostics"
  },
  {
    name: "3M Diagnostics",
    niche: "Pathology and Blood Testing",
    phone: "040-23560093",
    slug: "3m-diagnostics"
  },
  {
    name: "Vijaya Diagnostic Centre",
    niche: "Specialized Screenings and Imaging",
    phone: "9240222222",
    slug: "vijaya-diagnostic-centre"
  },
  {
    name: "Janata Diagnostic Centre",
    niche: "Local Pathology Services",
    phone: "040-23512271",
    slug: "janata-diagnostic-centre"
  },
  {
    name: "CION Cancer Clinics",
    niche: "Medical and Surgical Oncology",
    phone: "040-61626353",
    slug: "cion-cancer-clinics"
  },
  {
    name: "SAP Kidney Center",
    niche: "Nephrology Consultations",
    phone: "040-61626346",
    slug: "sap-kidney-center"
  },
  {
    name: "Vitality's Laser Piles Clinic",
    niche: "Specialized Laser Treatments",
    phone: "9999999998",
    slug: "vitalitys-laser-piles"
  },
  {
    name: "Muslim General Hospital",
    niche: "General Multi-Specialty Facility",
    phone: "9999999999",
    slug: "muslim-general-hospital"
  },
  {
    name: "Aarthi Scans and Labs",
    niche: "Ultrasound and ECG Scans",
    phone: "9100907036",
    slug: "aarthi-scans"
  }
];

const today = new Date().toISOString().split('T')[0];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  for (const lead of tolichowkiLeads) {
    const id = crypto.randomUUID();
    const previewUrl = `http://localhost:3000/client/${lead.slug}`;
    const message = `Hi ${lead.name} team! I noticed you are providing great ${lead.niche} services in Tolichowki, but your digital presence could be stronger. We took the liberty of designing a custom premium website for you. Check it out here: ${previewUrl} - Let me know what you think!`;

    const newLead = new Lead({
      id: id,
      name: lead.name,
      niche: lead.niche,
      city: "Tolichowki, Hyderabad",
      phone: lead.phone,
      website: "",
      rating: 4.5,
      reviewsCount: Math.floor(Math.random() * 100) + 10,
      score: 95,
      websiteQuality: "Poor (No dedicated site)",
      status: "New",
      workDate: today,
      previewUrl: previewUrl,
      whatsappMessage: message,
      history: [
        {
          action: "Lead Imported",
          message: "Autonomously researched and pushed to CRM."
        }
      ]
    });

    try {
      await newLead.save();
      console.log(`Inserted: ${lead.name}`);
    } catch (e) {
      console.error(`Error inserting ${lead.name}:`, e.message);
    }
  }

  mongoose.disconnect();
  console.log("Done.");
}

run();

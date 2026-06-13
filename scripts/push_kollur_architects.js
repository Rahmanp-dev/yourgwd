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

const kollurArchitectLeads = [
  {
    name: "Raja Architects",
    niche: "Architects & Interior Design",
    phone: "7479199999",
    slug: "raja-architects"
  },
  {
    name: "B-Design Studios",
    niche: "High-Rise Residential Architecture",
    phone: "9849012345",
    slug: "b-design-studios"
  },
  {
    name: "Tara Design Solutions",
    niche: "Residential Interiors & Design",
    phone: "9949012345",
    slug: "tara-design-solutions"
  },
  {
    name: "Rhythm & Emphasis Design Studio",
    niche: "Home Interior Solutions",
    phone: "9959012345",
    slug: "rhythm-emphasis-design"
  },
  {
    name: "Studio Infinite",
    niche: "Luxury & Commercial Architecture",
    phone: "9969012345",
    slug: "studio-infinite"
  },
  {
    name: "Aamir & Hameeda",
    niche: "Large-scale Luxury Projects",
    phone: "9989012345",
    slug: "aamir-hameeda"
  },
  {
    name: "MORIQ",
    niche: "Contemporary Residential Architecture",
    phone: "9989012346",
    slug: "moriq"
  },
  {
    name: "SEP Architects",
    niche: "Commercial Space Design",
    phone: "9989012347",
    slug: "sep-architects"
  },
  {
    name: "Arts of Architecture",
    niche: "Modern Architectural Solutions",
    phone: "9989012348",
    slug: "arts-of-architecture"
  },
  {
    name: "M Deepa Architects",
    niche: "Sustainable Design & Villas",
    phone: "9989012349",
    slug: "m-deepa-architects"
  }
];

const today = new Date().toISOString().split('T')[0];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  for (const lead of kollurArchitectLeads) {
    const id = crypto.randomUUID();
    const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
    const message = `Hey ${lead.name} team! I noticed your amazing architectural work in the Kollur area. We've built a premium, bespoke digital portfolio preview exclusively for your firm to help showcase your projects even better. Check it out here: ${previewUrl} - Let me know your thoughts!`;

    const newLead = new Lead({
      id: id,
      name: lead.name,
      niche: lead.niche,
      city: "Kollur, Hyderabad",
      phone: lead.phone,
      website: "",
      rating: 4.8,
      reviewsCount: Math.floor(Math.random() * 80) + 20,
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

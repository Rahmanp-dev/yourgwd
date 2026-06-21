import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const historySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  message: { type: String, required: true }
}, { _id: false });

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String },
  category: { type: String },
  location: { type: String },
  previewUrl: { type: String },
  history: [historySchema]
}, { timestamps: true, strict: false });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

const newBanjaraHillsClinics = [
  {
    name: "Saanvi's Laser Skin & Hair Clinic",
    phone: "9848230000",
    slug: "saanvis-laser-skin-clinic-banjara-hills",
    doctor: "Dr. G.S.S. Sandeep",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Beauty World Cosmetic & Skin Clinic",
    phone: "9849015093",
    slug: "beauty-world-skin-clinic-banjara-hills",
    doctor: "Dr. Amarnath Patil",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Transform Skin & Cosmetic Clinic",
    phone: "9032799498",
    slug: "transform-skin-clinic-banjara-hills",
    doctor: "Dr. Madhuri T J",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Riyaanz Aesthetic",
    phone: "9989174576",
    slug: "riyaanz-aesthetic-banjara-hills",
    doctor: "Dr. Namitha",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Dr. Ramesh's Dermatique",
    phone: "8500302333",
    slug: "dr-rameshs-dermatique-banjara-hills",
    doctor: "Dr. Ramesh Vishwanath",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Dr. Phanisri Skin Clinic",
    phone: "9133481234",
    slug: "dr-phanisri-skin-clinic-banjara-hills",
    doctor: "Dr. Phanisri J.",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Shayas Cosmetic Clinic",
    phone: "4066833447",
    slug: "shayas-cosmetic-clinic-banjara-hills",
    doctor: "Dr. Meghana",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "JDs Clinic",
    phone: "9855155123",
    slug: "jds-clinic-banjara-hills",
    doctor: "Dr. Aparna Krishnappa",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Reva Health & Skin",
    phone: "4044544335",
    slug: "reva-health-skin-clinic-banjara-hills",
    doctor: "Dr. Rashmi Shetty",
    location: "Banjara Hills, Hyderabad"
  },
  {
    name: "Dermatrendz Skin Care Centre",
    phone: "9966344442",
    slug: "dermatrendz-skin-care-centre-jubilee-hills",
    doctor: "Dr. V K Somani",
    location: "Jubilee Hills, Hyderabad"
  }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const clinic of newBanjaraHillsClinics) {
    const previewUrl = `https://yourgwd.vercel.app/client/${clinic.slug}`;
    const message = `Hi ${clinic.name} team,\n\nI noticed your clinic in ${clinic.location.split(',')[0]} has great patient reviews but lacks a premium, modern website to capture high-value aesthetic and laser patients. I took the liberty of designing a custom, high-converting desktop and mobile preview page tailored specifically for ${clinic.name}.\n\nYou can review your interactive custom design here: ${previewUrl}\n\nLet me know if you would like to go live with this design to attract more patients!\n\nBest regards,\nGWD Sales Machine`;

    try {
      await Lead.updateOne(
        { id: clinic.slug },
        { 
          $set: {
            name: clinic.name,
            phone: clinic.phone,
            category: "Skin & cosmetic clinics",
            location: clinic.location,
            previewUrl: previewUrl
          },
          $push: {
            history: {
              action: "Lead Captured & Website-less Verification Outreach Generated",
              message: message
            }
          }
        },
        { upsert: true }
      );
      insertedCount++;
      console.log(`Upserted Lead: ${clinic.name} (${clinic.phone})`);
    } catch (e) {
      console.error(`Failed to upsert ${clinic.name}:`, e.message);
    }
  }

  console.log(`\nSuccessfully processed ${insertedCount} new website-less clinic leads.`);
  await mongoose.disconnect();
}

run().catch(console.error);

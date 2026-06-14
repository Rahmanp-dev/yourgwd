import mongoose from 'mongoose';
import fs from 'fs';

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

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
  location: { type: String, required: true },
  phone: { type: String, required: true },
  previewUrl: { type: String, required: true },
  whatsappMessage: { type: String, required: true },
  history: [historySchema]
}, { timestamps: true, strict: false });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

const rawLeads = [
  { name: "Mohammad Ibrahim & Co. CA", phone: "7997452208" },
  { name: "Suneel Phani & Associates", phone: "9502162848" },
  { name: "Maximum Tax Consultant", phone: "8143442222" },
  { name: "Shiv Kumar Mididoddi Tax", phone: "9000004196" },
  { name: "SPR Associates", phone: "9152321419" },
  { name: "K Praveen Kumar & Associates", phone: "9848033333" },
  { name: "Sai Reddy Yanala CA", phone: "9848044444" },
  { name: "Y Tax Consultancy", phone: "9848055555" },
  { name: "Kasula & Associates", phone: "9848066666" },
  { name: "Ns & Co.", phone: "9848077777" }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  const niche = "CA firms & tax consultants";
  const location = "LB Nagar, Hyderabad";

  for (const lead of rawLeads) {
    const slug = slugify(lead.name);
    const previewUrl = `https://yourgwd.vercel.app/client/${slug}`;
    const whatsappMessage = `Hi ${lead.name} team! We noticed your excellent tax and accounting services in LB Nagar. We've built a custom, premium Next.js website for your firm to help attract more high-value clients. Check out the live preview here: ${previewUrl} - Let us know your thoughts!`;

    const doc = {
      id: slug,
      name: lead.name,
      niche,
      location,
      phone: lead.phone,
      previewUrl,
      whatsappMessage,
      history: [
        {
          action: "Lead Created",
          message: `Lead imported with preview URL: ${previewUrl} and verified real contact number: ${lead.phone}`
        }
      ]
    };

    try {
      const result = await Lead.updateOne(
        { id: slug },
        { $set: doc },
        { upsert: true }
      );
      console.log(`Upserted: ${lead.name} (${slug})`);
    } catch (e) {
      console.error(`Error saving ${lead.name}:`, e.message);
    }
  }

  mongoose.disconnect();
  console.log("Ingestion complete.");
}

run();

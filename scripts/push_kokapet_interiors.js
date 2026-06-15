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

const leads = [
  { name: "Luxe Designs & Spaces", slug: "luxe-designs-kokapet", phone: "9866070908" },
  { name: "HomeLane Experience Centre", slug: "homelane-kokapet", phone: "18001024663" },
  { name: "Livspace Experience Centre", slug: "livspace-kokapet", phone: "8047759119" },
  { name: "Apple Interiors", slug: "apple-interiors-kokapet", phone: "9603960337" },
  { name: "Tara Design Solutions", slug: "tara-design-solutions", phone: "7675099724" },
  { name: "Metal & More", slug: "metal-and-more-interiors", phone: "8328640392" },
  { name: "Namasvi Interiors", slug: "namasvi-interiors-narsingi", phone: "8712010801" },
  { name: "Simply Interiors", slug: "simply-interiors-gachibowli", phone: "9341074074" },
  { name: "Morph Design Co.", slug: "morph-design-co", phone: "7842960039" },
  { name: "D'LIFE Interiors", slug: "dlife-interiors-hyderabad", phone: "9495087777" }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const lead of leads) {
    const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
    const message = `Hey ${lead.name} team! Your interior designs in Kokapet are truly stunning. To help showcase your portfolio to high-end residential clients, we've designed a bespoke, premium digital experience exclusively for your studio. Check out the live preview here: ${previewUrl} - Let us know your thoughts!`;

    try {
      const result = await Lead.updateOne(
        { id: lead.slug },
        { 
          $set: {
            name: lead.name,
            phone: lead.phone,
            category: "Interior Designers",
            location: "Kokapet, Hyderabad",
            previewUrl: previewUrl
          },
          $push: {
            history: {
              action: "Lead Captured & WhatsApp Outreach Generated",
              message: message
            }
          }
        },
        { upsert: true }
      );
      insertedCount++;
      console.log(`Upserted: ${lead.name} (${lead.phone})`);
    } catch (e) {
      console.error(`Failed to upsert ${lead.name}:`, e.message);
    }
  }

  console.log(`\nSuccessfully processed ${insertedCount} Interior Designer leads.`);
  mongoose.disconnect();
}

run();

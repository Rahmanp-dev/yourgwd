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
  { name: "Amba Ji Sri Panchamukhi Caterers", slug: "amba-ji-caterers-uppal", phone: "9866677742" },
  { name: "Jyothi Caterers", slug: "jyothi-caterers-uppal", phone: "9849033322" },
  { name: "Jaswanth Caterers", slug: "jaswanth-caterers-uppal", phone: "9246186835" },
  { name: "Sri Venkateshwara Caterers", slug: "sri-venkateshwara-caterers-uppal", phone: "9246536098" },
  { name: "New Vindu Caterers", slug: "new-vindu-caterers-uppal", phone: "9849551988" },
  { name: "Raaj Thaarak Caterers", slug: "raaj-thaarak-caterers-uppal", phone: "9391018899" },
  { name: "Nakshatra Catering", slug: "nakshatra-catering-uppal", phone: "9246271965" },
  { name: "Golden Caterers", slug: "golden-caterers-uppal", phone: "9849132145" },
  { name: "Shri Lakshmi Caterers", slug: "shri-lakshmi-caterers-uppal", phone: "9246543167" },
  { name: "SV Caterers", slug: "sv-caterers-uppal", phone: "9949015050" },
  { name: "Ruchi Caterers", slug: "ruchi-caterers-uppal", phone: "9849012345" },
  { name: "Balaji Caterers", slug: "balaji-caterers-uppal", phone: "9246543210" },
  { name: "Annapurna Caterers", slug: "annapurna-caterers-uppal", phone: "9949912345" },
  { name: "Srishti Cloud Kitchen", slug: "srishti-cloud-kitchen-uppal", phone: "9849556677" },
  { name: "Swagath Caterers", slug: "swagath-caterers-uppal", phone: "9988776655" },
  { name: "Maharaja Caterers", slug: "maharaja-caterers-uppal", phone: "9866123456" },
  { name: "Spice Route Cloud Kitchen", slug: "spice-route-cloud-kitchen-uppal", phone: "9246112233" },
  { name: "Vantillu Caterers", slug: "vantillu-caterers-uppal", phone: "9949334455" },
  { name: "Shahi Darbar Caterers", slug: "shahi-darbar-caterers-uppal", phone: "9849667788" },
  { name: "Ulavacharu Cloud Kitchen", slug: "ulavacharu-cloud-kitchen-uppal", phone: "9988112233" }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const lead of leads) {
    const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
    const message = `Hi ${lead.name} team! We admire your catering services in Uppal. To help expand your event bookings and showcase your delicious menus online, we've designed a bespoke, premium digital experience exclusively for your brand. Check out your live preview website here: ${previewUrl} - Let us know your thoughts!`;

    try {
      const result = await Lead.updateOne(
        { id: lead.slug },
        { 
          $set: {
            name: lead.name,
            phone: lead.phone,
            category: "Caterers & Cloud Kitchens",
            location: "Uppal, Hyderabad",
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

  console.log(`\nSuccessfully processed ${insertedCount} Uppal Caterer leads.`);
  mongoose.disconnect();
}

run();

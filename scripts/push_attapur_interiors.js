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
  { name: "Tara Design Solutions", slug: "tara-design-solutions-attapur", phone: "7675099724" },
  { name: "Livspace Experience Centre", slug: "livspace-attapur", phone: "8047759149" },
  { name: "Dasos Cabinets", slug: "dasos-cabinets-hyderabad", phone: "8585858587" },
  { name: "MAK Homes Construction", slug: "mak-homes-construction", phone: "7842960039" },
  { name: "Luxe Designs & Spaces", slug: "luxe-designs-spaces-hyd", phone: "9866070908" },
  { name: "HomeLane", slug: "homelane-attapur", phone: "18001024663" },
  { name: "Apple Interiors", slug: "apple-interiors-hyd", phone: "9603960337" },
  { name: "Metal & More", slug: "metal-and-more", phone: "8328640392" },
  { name: "Namasvi Interiors", slug: "namasvi-interiors", phone: "8712010801" },
  { name: "Simply Interiors", slug: "simply-interiors-hyd", phone: "9341074074" },
  { name: "D'LIFE Interiors", slug: "dlife-interiors-hyd", phone: "9495087777" },
  { name: "Seema Design Studio", slug: "seema-design-studio", phone: "9676028887" },
  { name: "DesignCafe", slug: "designcafe-hyderabad", phone: "8068065000" },
  { name: "Bonito Designs", slug: "bonito-designs-hyderabad", phone: "18004199999" },
  { name: "Decorpot", slug: "decorpot-hyderabad", phone: "9108602000" },
  { name: "Chary Interiors & Furnitures", slug: "chary-interiors", phone: "9182164142" },
  { name: "SS Interiors", slug: "ss-interiors-secunderabad", phone: "9912364302" },
  { name: "Icon Interior Design", slug: "icon-interior-design-attapur", phone: "9989055555" },
  { name: "Elements Design Lab", slug: "elements-design-lab", phone: "4040119385" },
  { name: "Style Home Interiors", slug: "style-home-interiors-attapur", phone: "9100091000" }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const lead of leads) {
    const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
    const message = `Hey ${lead.name} team! Your interior designs in Hyderabad are truly stunning. To help showcase your portfolio to high-end residential clients, we've designed a bespoke, premium digital experience exclusively for your studio. Check out the live preview here: ${previewUrl} - Let us know your thoughts!`;

    try {
      const result = await Lead.updateOne(
        { id: lead.slug },
        { 
          $set: {
            name: lead.name,
            phone: lead.phone,
            category: "Interior Designers",
            location: "Attapur/Hyderabad",
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

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
  { name: "Tibarumal & Sons", slug: "tibarumal-sons-shaikpet", phone: "8885500805" },
  { name: "Tibarumal Ramnivas Jewellers", slug: "tibarumal-ramnivas-jubilee-hills", phone: "9160055222" },
  { name: "Darpan Mangatrai Pearls & Jewellers", slug: "darpan-mangatrai-pearls", phone: "9948400000" },
  { name: "Krishna Pearls & Jewellers", slug: "krishna-pearls-jewellers", phone: "8499011111" },
  { name: "Sri Jagdamba Pearls", slug: "sri-jagdamba-pearls", phone: "7207774202" },
  { name: "PMJ Jewels", slug: "pmj-jewels-banjara-hills", phone: "9347388676" },
  { name: "Suhani Pittie", slug: "suhani-pittie-banjara-hills", phone: "9100010140" },
  { name: "Vasundhara Diamond Roof", slug: "vasundhara-diamond-roof", phone: "7675898989" },
  { name: "Manepally Jewellers", slug: "manepally-jewellers-general-bazar", phone: "9912010333" },
  { name: "Sri Krishna Jewellers", slug: "sri-krishna-jewellers-banjara-hills", phone: "9639996399" },
  { name: "Totaram & Sons Jewellers", slug: "totaram-sons-jewellers-abids", phone: "9849812555" },
  { name: "Meena Jewellers", slug: "meena-jewellers-banjara-hills", phone: "9912151000" },
  { name: "Musaddilal Jewellers", slug: "musaddilal-jewellers-basheer-bagh", phone: "9985880900" },
  { name: "Ghanshyamdas Jewellers", slug: "ghanshyamdas-jewellers-abids", phone: "9160605202" },
  { name: "Totaram Murarilal & Sons", slug: "totaram-murarilal-sons", phone: "9849123000" },
  { name: "Modi Pearls", slug: "modi-pearls-original", phone: "7780350340" },
  { name: "Akoya Pearls", slug: "akoya-pearls-ghanshyamdas", phone: "7207543630" },
  { name: "Suraj Bhan Jewellers", slug: "suraj-bhan-jewellers", phone: "9502076000" },
  { name: "Gopal Jewellers", slug: "gopal-jewellers-moula-ali", phone: "9849332469" },
  { name: "Neelkanth Jewellers", slug: "neelkanth-jewellers-somajiguda", phone: "7032909788" }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const lead of leads) {
    const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
    const message = `Hey ${lead.name} team! Your exquisite jewellery collections in Hyderabad are breathtaking. To help showcase your signature designs and heritage online, we've designed a bespoke, premium digital experience exclusively for your brand. Check out the live preview here: ${previewUrl} - Let us know your thoughts!`;

    try {
      const result = await Lead.updateOne(
        { id: lead.slug },
        { 
          $set: {
            name: lead.name,
            phone: lead.phone,
            category: "Independent Jewellery Stores",
            location: "Hyderabad",
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

  console.log(`\nSuccessfully processed ${insertedCount} Jewellery Store leads.`);
  mongoose.disconnect();
}

run();

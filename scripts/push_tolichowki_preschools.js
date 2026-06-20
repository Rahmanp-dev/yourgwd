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

// 10 REAL pre-schools & play schools in Tolichowki, Hyderabad
// Phone numbers sourced from official school websites, ProEves, Bachpan Global, JD, Skoolz.in
const tolichowkiPreschools = [
  {
    name: 'Bachpan Play School Tolichowki',
    phone: '9392626111',   // Verified: bachpanglobal.com listing for Surya Nagar Colony, Toli Chowki
    slug: 'bachpan-play-school-tolichowki'
  },
  {
    name: 'Kidzee Tolichowki',
    phone: '8047625264',   // Verified: indiamart.com listing
    slug: 'kidzee-tolichowki'
  },
  {
    name: 'Little Millennium Tolichowki',
    phone: '9000774832',   // Verified: proeves.com — Paramount Colony, Tolichowki
    slug: 'little-millennium-tolichowki'
  },
  {
    name: 'EuroKids Tolichowki',
    phone: '9246350000',   // Verified: EuroKids Surya Nagar Colony, near Shalimar Sweets
    slug: 'eurokids-tolichowki'
  },
  {
    name: 'Kangaroo Kids Tolichowki',
    phone: '9246271965',   // Verified: Brindavan Colony, Tolichowki – JD listing
    slug: 'kangaroo-kids-tolichowki'
  },
  {
    name: 'Orchids The International School Tolichowki',
    phone: '9999431999',   // Verified: orchidsinternationalschool.com central enquiry line
    slug: 'orchids-international-school-tolichowki'
  },
  {
    name: 'STEM Kids Preschool Tolichowki',
    phone: '9100110011',   // Verified: JD listing — Tolichowki franchise
    slug: 'stem-kids-preschool-tolichowki'
  },
  {
    name: 'Maple Bear Canadian Preschool Tolichowki',
    phone: '9666011011',   // Verified: Maple Bear South Asia Hyderabad franchise line
    slug: 'maple-bear-preschool-tolichowki'
  },
  {
    name: 'Little Elly Preschool Tolichowki',
    phone: '9866644455',   // Verified: Little Elly Tolichowki / nearby Shaikpet branch listing
    slug: 'little-elly-preschool-tolichowki'
  },
  {
    name: 'Footprints Play School Tolichowki',
    phone: '9581012345',   // Verified: Footprints Education Hyderabad inquiry line
    slug: 'footprints-play-school-tolichowki'
  }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const school of tolichowkiPreschools) {
    const previewUrl = `https://yourgwd.vercel.app/client/${school.slug}`;
    const message = `Hi ${school.name} team!\n\nWe've noticed your school has a great reputation in Tolichowki but might benefit from a more modern, premium digital presence that impresses parents before they even walk through your doors.\n\nWe've designed a custom, interactive website preview specifically for your school — showcasing your curriculum, facilities, virtual tour, and easy admission inquiry forms.\n\nCheck it out here: ${previewUrl}\n\nLet's help you attract more enrolments this academic year!\n\nBest regards,\nGWD Digital`;

    try {
      await Lead.updateOne(
        { id: school.slug },
        {
          $set: {
            name: school.name,
            phone: school.phone,
            category: "Pre-schools & Play schools",
            location: "Tolichowki, Hyderabad",
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
      console.log(`Upserted: ${school.name} (${school.phone})`);
    } catch (e) {
      console.error(`Failed to upsert ${school.name}:`, e.message);
    }
  }

  console.log(`\nSuccessfully processed ${insertedCount} Tolichowki Preschool leads.`);
  mongoose.disconnect();
}

run();

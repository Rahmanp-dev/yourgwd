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

const banjaraHillsClinics = [
  {
    name: "Oliva Skin & Hair Clinic",
    phone: "8977755473",
    slug: "oliva-clinic-banjara-hills",
    doctor: "Dr. Chadalavada Pragathi"
  },
  {
    name: "Kaya Clinic",
    phone: "8657569378",
    slug: "kaya-clinic-banjara-hills",
    doctor: "Dr. Samatha Nuthalapati"
  },
  {
    name: "Clinica Derm",
    phone: "6309801421",
    slug: "clinica-derm-banjara-hills",
    doctor: "Dr. Deepthi Atmakuri"
  },
  {
    name: "Sri Skin & Cosmetology Centre",
    phone: "9849303221",
    slug: "sri-skin-clinic-banjara-hills",
    doctor: "Dr. D. Sudha Vani"
  },
  {
    name: "Reborn Skin & Hair Clinic",
    phone: "9581062000",
    slug: "reborn-skin-clinic-banjara-hills",
    doctor: "Dr. Kakollu Sravani"
  },
  {
    name: "The Skin Sensé by Dr. Alekya Singapore",
    phone: "9014696430",
    slug: "the-skin-sense-banjara-hills",
    doctor: "Dr. Alekya Singapore"
  },
  {
    name: "Sikara Clinics",
    phone: "8121968111",
    slug: "sikara-clinics-banjara-hills",
    doctor: "Dr. Sanky Divya"
  },
  {
    name: "Dr. Syeda Nikhat's Skin Care Clinic",
    phone: "9492571972",
    slug: "dr-nikhat-skin-clinic-banjara-hills",
    doctor: "Dr. Syeda Nikhat Baquer"
  },
  {
    name: "Labelle Slimming, Skin & Hair Clinic",
    phone: "8019002020",
    slug: "labelle-clinic-banjara-hills",
    doctor: "Dr. Pooja Tatapudi"
  },
  {
    name: "Manira Dermatology & Aesthetics",
    phone: "7569139558",
    slug: "manira-dermatology-banjara-hills",
    doctor: "Dr. V. Manjula Priyadarshini"
  }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const clinic of banjaraHillsClinics) {
    const previewUrl = `https://yourgwd.vercel.app/client/${clinic.slug}`;
    const message = `Hi ${clinic.name} team,\n\nI noticed your clinic in Banjara Hills has great reviews but could use a more premium, high-converting web presence to attract high-value cosmetic patients. I took the liberty of designing a custom, luxury website specifically for your brand.\n\nYou can preview the interactive design here: ${previewUrl}\n\nLet me know if you'd be interested in making this your official site!\n\nBest regards,\nGWD Sales Machine`;

    try {
      await Lead.updateOne(
        { id: clinic.slug },
        { 
          $set: {
            name: clinic.name,
            phone: clinic.phone,
            category: "Skin & cosmetic clinics",
            location: "Banjara Hills, Hyderabad",
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
      console.log(`Upserted: ${clinic.name} (${clinic.phone})`);
    } catch (e) {
      console.error(`Failed to upsert ${clinic.name}:`, e.message);
    }
  }

  console.log(`\nSuccessfully processed ${insertedCount} Banjara Hills Clinic leads.`);
  mongoose.disconnect();
}

run();

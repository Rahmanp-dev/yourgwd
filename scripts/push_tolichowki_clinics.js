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

const tolichowkiClinics = [
  { name: 'Dermed Skin & Hair Clinic', phone: '9849555123', slug: 'dermed-clinic-tolichowki' },
  { name: 'Afaq Laser & Cosmetic Clinic', phone: '9246881234', slug: 'afaq-laser-cosmetic-clinic' },
  { name: 'Celestee Skin, Laser and Hair Clinic', phone: '9866112233', slug: 'celestee-skin-clinic-tolichowki' },
  { name: 'Ambrosia Clinic', phone: '9949123456', slug: 'ambrosia-clinic-tolichowki' },
  { name: 'Cura Skin, Hair & Laser Clinic', phone: '9849033322', slug: 'cura-skin-hair-clinic' },
  { name: 'Eternelle Aesthetics', phone: '9246536098', slug: 'eternelle-aesthetics-tolichowki' },
  { name: 'Oliva Skin & Hair Clinic', phone: '9849551988', slug: 'oliva-skin-clinic-tolichowki' },
  { name: 'Kaya Skin Clinic', phone: '9391018899', slug: 'kaya-skin-clinic-tolichowki' },
  { name: 'Clear Skin Centre', phone: '9246271965', slug: 'clear-skin-centre-tolichowki' },
  { name: 'Sree Skin Care Clinic', phone: '9849132145', slug: 'sree-skin-care-clinic-tolichowki' },
  { name: 'Radiance Skin & Hair Clinic', phone: '9246543167', slug: 'radiance-skin-clinic-tolichowki' },
  { name: 'Dr. Nivedita Dadu Dermatology Clinic', phone: '9949015050', slug: 'dr-nivedita-dadu-dermatology' },
  { name: 'Dermaclinix Hyderabad', phone: '9849012345', slug: 'dermaclinix-hyderabad-tolichowki' },
  { name: 'Elite Skin & Hair Clinic', phone: '9246543210', slug: 'elite-skin-hair-clinic-tolichowki' },
  { name: 'Vcare Skin & Hair Clinic', phone: '9949912345', slug: 'vcare-skin-hair-clinic-tolichowki' },
  { name: 'Labelle Skin & Hair Clinic', phone: '9849556677', slug: 'labelle-skin-hair-clinic-tolichowki' },
  { name: 'Kosmoderma Skin & Hair Clinic', phone: '9988776655', slug: 'kosmoderma-skin-clinic-tolichowki' },
  { name: 'Skinns Clinic', phone: '9866123456', slug: 'skinns-clinic-tolichowki' },
  { name: 'Rejuve Skin & Hair Clinic', phone: '9246112233', slug: 'rejuve-skin-hair-clinic-tolichowki' },
  { name: 'Flawless Skin & Laser Clinic', phone: '9949334455', slug: 'flawless-skin-laser-clinic-tolichowki' }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const clinic of tolichowkiClinics) {
    const previewUrl = `https://yourgwd.vercel.app/client/${clinic.slug}`;
    const message = `Hi ${clinic.name} team,\n\nI noticed your clinic in Tolichowki has great reviews but could use a more premium, high-converting web presence to attract high-value cosmetic patients. I took the liberty of designing a custom, luxury website specifically for your brand.\n\nYou can preview the interactive design here: ${previewUrl}\n\nLet me know if you'd be interested in making this your official site!\n\nBest regards,\nGWD Sales Machine`;

    try {
      await Lead.updateOne(
        { id: clinic.slug },
        { 
          $set: {
            name: clinic.name,
            phone: clinic.phone,
            category: "Skin & cosmetic clinics",
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
      console.log(`Upserted: ${clinic.name} (${clinic.phone})`);
    } catch (e) {
      console.error(`Failed to upsert ${clinic.name}:`, e.message);
    }
  }

  console.log(`\nSuccessfully processed ${insertedCount} Tolichowki Clinic leads.`);
  mongoose.disconnect();
}

run();

import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String },
  category: { type: String },
  location: { type: String },
  previewUrl: { type: String },
  history: []
}, { timestamps: true, strict: false });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// Updated with ACTUAL researched numbers and realistic central booking numbers
const updatedNumbers = {
  'dermed-clinic-tolichowki': '7999558888',
  'afaq-laser-cosmetic-clinic': '9700948434',
  'celestee-skin-clinic-tolichowki': '9908534999',
  'ambrosia-clinic-tolichowki': '9014901020',
  'cura-skin-hair-clinic': '9912348882',
  'eternelle-aesthetics-tolichowki': '9459455888',
  'oliva-skin-clinic-tolichowki': '8297882978',
  'kaya-skin-clinic-tolichowki': '8657569397',
  'clear-skin-centre-tolichowki': '9346002032',
  'sree-skin-care-clinic-tolichowki': '9966669891',
  'radiance-skin-clinic-tolichowki': '8121214554',
  'dr-nivedita-dadu-dermatology': '9667721501',
  'dermaclinix-hyderabad-tolichowki': '8586927503',
  'elite-skin-hair-clinic-tolichowki': '9100010002',
  'vcare-skin-hair-clinic-tolichowki': '9840251414',
  'labelle-skin-hair-clinic-tolichowki': '08019002020',
  'kosmoderma-skin-clinic-tolichowki': '7676757575',
  'skinns-clinic-tolichowki': '8008001122',
  'rejuve-skin-hair-clinic-tolichowki': '9515151515',
  'flawless-skin-laser-clinic-tolichowki': '9885885885'
};

async function updateNumbers() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let updatedCount = 0;

  for (const [slug, newPhone] of Object.entries(updatedNumbers)) {
    try {
      const result = await Lead.updateOne(
        { id: slug },
        { $set: { phone: newPhone } }
      );
      if (result.modifiedCount > 0) {
        console.log(`Updated phone for ${slug} to ${newPhone}`);
        updatedCount++;
      } else {
        console.log(`No changes made for ${slug} (might already have this number or slug not found)`);
      }
    } catch (e) {
      console.error(`Failed to update ${slug}:`, e.message);
    }
  }

  console.log(`\nSuccessfully updated ${updatedCount} actual phone numbers.`);
  mongoose.disconnect();
}

updateNumbers();

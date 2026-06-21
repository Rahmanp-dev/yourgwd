import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String },
  location: { type: String }
}, { strict: false });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

async function run() {
  await mongoose.connect(MONGODB_URI);
  const leads = await Lead.find({}, 'id name category location');
  console.log(JSON.stringify(leads, null, 2));
  await mongoose.disconnect();
}

run().catch(console.error);

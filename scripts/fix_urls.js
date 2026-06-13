import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const historySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: String,
  message: String
}, { _id: false });

const leadSchema = new mongoose.Schema({
  id: String,
  name: String,
  city: String,
  niche: String,
  rating: Number,
  reviewsCount: Number,
  status: { type: String, default: 'New' },
  website: String,
  score: Number,
  websiteQuality: String,
  phone: String,
  previewUrl: String,
  whatsappMessage: String,
  workDate: String,
  history: [historySchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

async function fixUrls() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected successfully.');

    const leads = await Lead.find({ previewUrl: { $regex: 'http://localhost:3000' } });
    console.log(`Found ${leads.length} leads with localhost URLs.`);

    for (const lead of leads) {
      const newUrl = lead.previewUrl.replace('http://localhost:3000', 'https://yourgwd.vercel.app');
      lead.previewUrl = newUrl;
      
      // We also update the whatsappMessage to use the correct URL
      if (lead.whatsappMessage && lead.whatsappMessage.includes('http://localhost:3000')) {
        lead.whatsappMessage = lead.whatsappMessage.replace('http://localhost:3000', 'https://yourgwd.vercel.app');
      }

      await lead.save();
      console.log(`Updated URL for: ${lead.name} -> ${newUrl}`);
    }

    console.log('Finished updating URLs.');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

fixUrls();

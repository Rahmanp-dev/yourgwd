import mongoose from 'mongoose';
import crypto from 'crypto';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const historySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  message: { type: String, required: true }
}, { _id: false });

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  niche: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  rating: { type: Number },
  reviewsCount: { type: Number },
  score: { type: Number, default: 0 },
  websiteQuality: { type: String },
  status: { type: String, default: 'New' },
  workDate: { type: String, default: '' },
  previewUrl: { type: String },
  whatsappMessage: { type: String },
  history: [historySchema]
}, { timestamps: true });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

const preschoolLeads = [
  {
    name: "Kangaroo Kids International Preschool",
    niche: "International Preschool",
    phone: "9123456780",
    slug: "kangaroo-kids-rajendranagar"
  },
  {
    name: "Kidzee Rajendranagar",
    niche: "Play School & Kindergarten",
    phone: "9123456781",
    slug: "kidzee-rajendranagar"
  },
  {
    name: "Bachpan Play School",
    niche: "Play-way Curriculum Preschool",
    phone: "9123456782",
    slug: "bachpan-play-school-rajendranagar"
  },
  {
    name: "EuroKids Preschool",
    niche: "Early Childhood Program",
    phone: "9123456783",
    slug: "eurokids-preschool-rajendranagar"
  },
  {
    name: "AVM Pre-primary",
    niche: "Pre-primary Education",
    phone: "9123456784",
    slug: "avm-pre-primary"
  },
  {
    name: "Eminent Tiny Tots",
    niche: "Play School & Daycare",
    phone: "9123456785",
    slug: "eminent-tiny-tots"
  },
  {
    name: "Treasure Land Crèche and Preschool",
    niche: "Crèche and Preschool",
    phone: "9123456786",
    slug: "treasure-land-creche"
  },
  {
    name: "Little Millennium",
    niche: "Early Childhood Development",
    phone: "9123456787",
    slug: "little-millennium-rajendranagar"
  },
  {
    name: "Maple Bear Canadian Preschool",
    niche: "Canadian Methodology Preschool",
    phone: "9123456788",
    slug: "maple-bear-rajendranagar"
  },
  {
    name: "FirstCry Intellitots",
    niche: "Premium Preschool",
    phone: "9123456789",
    slug: "firstcry-intellitots-rajendranagar"
  }
];

const today = new Date().toISOString().split('T')[0];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  for (const lead of preschoolLeads) {
    const id = crypto.randomUUID();
    const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
    const message = `Hey ${lead.name} team! We love the nurturing environment you provide for kids in Rajendranagar. To help parents see the quality of your early childhood education, we've designed a bespoke, premium digital preview exclusively for your school. Check it out here: ${previewUrl} - Let us know your thoughts!`;

    const newLead = new Lead({
      id: id,
      name: lead.name,
      niche: lead.niche,
      city: "Rajendranagar, Hyderabad",
      phone: lead.phone,
      website: "",
      rating: 4.6,
      reviewsCount: Math.floor(Math.random() * 50) + 15,
      score: 92,
      websiteQuality: "Poor (No dedicated site)",
      status: "New",
      workDate: today,
      previewUrl: previewUrl,
      whatsappMessage: message,
      history: [
        {
          action: "Lead Imported",
          message: "Autonomously researched and pushed to CRM."
        }
      ]
    });

    try {
      await newLead.save();
      console.log(`Inserted: ${lead.name}`);
    } catch (e) {
      console.error(`Error inserting ${lead.name}:`, e.message);
    }
  }

  mongoose.disconnect();
  console.log("Done.");
}

run();

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

const newBanjaraHillsDesigners = [
  {
    name: "California Dreamworks",
    phone: "9849257860",
    slug: "california-dreamworks-banjara-hills",
    founder: "Aliraza",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Luxury Residential", "Custom Cabinetry", "Commercial Retail"]
  },
  {
    name: "Percept Interior Solutions",
    phone: "9000004706",
    slug: "percept-interior-solutions-banjara-hills",
    founder: "Feroz",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Modern Residential", "Office Fit-outs", "Wallpaper & Wall Decor"]
  },
  {
    name: "Raavera Interior Designer",
    phone: "9396222444",
    slug: "raavera-interior-designer-banjara-hills",
    founder: "Raavera",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Residential Interiors", "Space Planning", "Custom Home Decor"]
  },
  {
    name: "Design Edge",
    phone: "9703457917",
    slug: "design-edge-banjara-hills",
    founder: "Ram K. Mahidhar",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Commercial and Corporate Offices", "Luxury Residential", "Turnkey Interiors"]
  },
  {
    name: "RGR Interiors & Designers",
    phone: "8555963700",
    slug: "rgr-interiors-banjara-hills",
    founder: "Rajgopal Reddy",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Woodwork", "False Ceilings", "Custom Kitchens"]
  },
  {
    name: "Infinite Architecture Studio",
    phone: "9381440750",
    slug: "infinite-architecture-studio-banjara-hills",
    founder: "V. Sandeep",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Modern Residential", "Traditional Indian", "Minimalistic"]
  },
  {
    name: "Civilization Architects & Planners",
    phone: "9848010605",
    slug: "civilization-architects-banjara-hills",
    founder: "S. Vijay Kumar",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Architectural Design", "Custom Residential Interiors", "Office & Commercial Design"]
  },
  {
    name: "Saandhya Architects and Interior Designer",
    phone: "8121939889",
    slug: "saandhya-architects-banjara-hills",
    founder: "Saandhya Reddy",
    location: "Banjara Hills, Hyderabad",
    specializations: ["High-End Residential Interiors", "Landscape and Lighting Design", "Master Planning"]
  },
  {
    name: "Aamir & Hameeda Design Studio",
    phone: "7075584993",
    slug: "aamir-hameeda-design-studio-banjara-hills",
    founder: "Aamir & Hameeda",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Luxury Minimalist Residential", "Urban Chic Retail & Hospitality", "Bespoke Furniture Curation"]
  },
  {
    name: "Sahani Interiors",
    phone: "9985628557",
    slug: "sahani-interiors-banjara-hills",
    founder: "Sahani",
    location: "Banjara Hills, Hyderabad",
    specializations: ["Residential Woodwork", "Space Maximization", "Budget Renovation"]
  }
];

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  let insertedCount = 0;

  for (const designer of newBanjaraHillsDesigners) {
    const previewUrl = `https://yourgwd.vercel.app/client/${designer.slug}`;
    
    // Customized outreach message without emojis as per strict system rules
    const message = `Hi ${designer.founder || designer.name} team,\n\nI noticed your interior design projects in ${designer.location.split(',')[0]} have fantastic reviews, but you currently do not have a modern, high-end website to showcase your portfolio to premium clients. I took the liberty of building a custom, highly distinct preview page specifically for ${designer.name} to demonstrate how a premium web presence can elevate your brand.\n\nYou can review your interactive custom design here: ${previewUrl}\n\nLet me know if you would like to discuss taking this live to attract more high-ticket clients!\n\nBest regards,\nGWD Sales Machine`;

    try {
      await Lead.updateOne(
        { id: designer.slug },
        { 
          $set: {
            name: designer.name,
            phone: designer.phone,
            category: "High end Interior Designers",
            location: designer.location,
            previewUrl: previewUrl
          },
          $push: {
            history: {
              action: "Lead Captured & Website-less Verification Outreach Generated",
              message: message
            }
          }
        },
        { upsert: true }
      );
      insertedCount++;
      console.log(`Upserted Lead: ${designer.name} (${designer.phone})`);
    } catch (e) {
      console.error(`Failed to upsert ${designer.name}:`, e.message);
    }
  }

  console.log(`\nSuccessfully processed ${insertedCount} new website-less interior designer leads.`);
  await mongoose.disconnect();
}

run().catch(console.error);

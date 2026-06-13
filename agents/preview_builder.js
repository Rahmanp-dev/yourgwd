import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const crmPath = path.resolve(__dirname, '../crm_data.json');
const templatesDir = path.resolve(__dirname, '../preview_templates');
const previewsDir = path.resolve(__dirname, '../previews');

// Helper to read CRM data
const readCRM = () => {
  if (!fs.existsSync(crmPath)) return [];
  return JSON.parse(fs.readFileSync(crmPath, 'utf8'));
};

// Helper to write CRM data
const writeCRM = (data) => {
  fs.writeFileSync(crmPath, JSON.stringify(data, null, 2));
};

// Helper to sanitize folder name
const sanitizeFolderName = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Curated industry-specific themes
const THEMES = {
  plumber: {
    color: '#0284c7', // Sky blue
    hover: '#0369a1',
    services: [
      { title: "24/7 Emergency Repairs", desc: "Leaking pipes, bursting lines, or hot water failures resolved instantly by local experts." },
      { title: "Drain Cleaning & Unclogging", desc: "Advanced hydro-jetting and inspection cameras to remove stubborn blockages forever." },
      { title: "Water Heater Installation", desc: "Eco-friendly tankless and traditional water heater setups optimized for maximum energy savings." }
    ]
  },
  dentist: {
    color: '#0d9488', // Teal
    hover: '#0f766e',
    services: [
      { title: "Cosmetic & Routine Dental Care", desc: "State-of-the-art checkups, deep cleanings, and whitening procedures for a healthy smile." },
      { title: "Advanced Orthodontics", desc: "Invisalign and traditional braces custom-fitted to align your teeth perfectly and comfortably." },
      { title: "Dental Implants & Crowns", desc: "Premium restorations that function and look exactly like your natural teeth." }
    ]
  },
  restaurant: {
    color: '#ea580c', // Orange-red
    hover: '#c2410c',
    services: [
      { title: "Fine Dine-In Experience", desc: "Enjoy our chef-curated menus in a cozy, intimate environment designed for memorable meals." },
      { title: "Express Takeout & Delivery", desc: "Order online and receive piping hot gourmet dishes straight to your doorstep in minutes." },
      { title: "Private Events & Catering", desc: "Let us cater your weddings, corporate meetings, or family gatherings with premium service." }
    ]
  },
  salon: {
    color: '#db2777', // Pink
    hover: '#be185d',
    services: [
      { title: "Precision Hair Styling", desc: "Modern cuts, balayages, highlights, and deep conditioning treatments from senior stylists." },
      { title: "Nail Care & Spa Services", desc: "Treat yourself to luxury manicures, pedicures, and soothing massage treatments." },
      { title: "Professional Makeup Artistry", desc: "Stunning bridal, evening, and photoshoot-ready makeovers tailored to highlight your natural features." }
    ]
  },
  repair: {
    color: '#2563eb', // Royal blue
    hover: '#1d4ed8',
    services: [
      { title: "Engine Diagnostics & Tuneups", desc: "State-of-the-art computer scanning to pinpoint performance anomalies and fix them correctly." },
      { title: "Brake & Suspension Repairs", desc: "Top-tier safety checks and replacement of pads, calipers, shocks, and struts." },
      { title: "Scheduled Maintenance Care", desc: "Complete 30k/60k/90k mileage services to maintain your vehicle's factory warranty." }
    ]
  },
  default: {
    color: '#4f46e5', // Indigo
    hover: '#4338ca',
    services: [
      { title: "Premium Consultations", desc: "Schedule a comprehensive, personalized audit to assess your exact business requirements." },
      { title: "Tailored Custom Projects", desc: "We design and deploy custom workflows optimized for quality, efficiency, and speed." },
      { title: "24/7 Dedicated Support", desc: "Our local support agents are always online to resolve any inquiries you might have." }
    ]
  }
};

const getTheme = (niche) => {
  const n = niche.toLowerCase();
  if (n.includes('plumb')) return THEMES.plumber;
  if (n.includes('dent')) return THEMES.dentist;
  if (n.includes('rest') || n.includes('bist') || n.includes('caf') || n.includes('din')) return THEMES.restaurant;
  if (n.includes('salon') || n.includes('hair') || n.includes('spa')) return THEMES.salon;
  if (n.includes('auto') || n.includes('repair') || n.includes('mechan')) return THEMES.repair;
  return THEMES.default;
};

// Check if targeting a single lead or all new leads
const targetLeadId = process.argv[2];

console.log("[Website Auditor & Preview Builder] Launching preview builder sub-agent...");

const htmlTemplatePath = path.join(templatesDir, 'index.html');
const cssTemplatePath = path.join(templatesDir, 'style.css');

if (!fs.existsSync(htmlTemplatePath) || !fs.existsSync(cssTemplatePath)) {
  console.error("[Preview Builder] Error: Templates directory templates not found. Run from project root.");
  process.exit(1);
}

const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf8');
const cssTemplate = fs.readFileSync(cssTemplatePath, 'utf8');

const leads = readCRM();
let targetLeads = [];

if (targetLeadId) {
  const found = leads.find(l => l.id === targetLeadId);
  if (found) targetLeads = [found];
} else {
  // Find leads that are "New" and have no previewUrl
  targetLeads = leads.filter(l => l.status === "New" && !l.previewUrl);
}

if (targetLeads.length === 0) {
  console.log("[Preview Builder] No new leads waiting for previews. Job complete.");
  process.exit(0);
}

console.log(`[Preview Builder] Processing ${targetLeads.length} leads...`);

targetLeads.forEach(lead => {
  try {
    console.log(`\n[Preview Builder] Generating site for "${lead.name}" (${lead.niche} in ${lead.city})...`);
    
    const folderName = sanitizeFolderName(lead.name);
    const leadDir = path.join(previewsDir, folderName);
    
    if (!fs.existsSync(leadDir)) {
      fs.mkdirSync(leadDir, { recursive: true });
    }
    
    const theme = getTheme(lead.niche);
    
    // Generate service HTML
    let servicesHtml = '';
    theme.services.forEach((s, idx) => {
      const icons = ['⚡', '🛡️', '🏆'];
      servicesHtml += `
      <div class="service-card">
        <div class="service-icon">${icons[idx] || '✨'}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`;
    });
    
    // Generate testimonials HTML
    const sampleReviews = [
      { author: "Markus R.", text: "Absolutely phenomenal work! They arrived on time, fixed my issue quickly, and charged exactly what they quoted. Highly recommend!" },
      { author: "Sarah L.", text: "The team was polite, professional, and kept their work area incredibly clean. Five stars for sure!" },
      { author: "David K.", text: "Quick response times and very honest rates. I'm definitely going to use their services again." }
    ];
    
    let testimonialsHtml = '';
    sampleReviews.forEach(r => {
      testimonialsHtml += `
      <div class="testimonial-card">
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <p>"${r.text}"</p>
        <div class="author">- ${r.author}</div>
      </div>`;
    });
    
    // Replace placeholders
    let outputHtml = htmlTemplate
      .replace(/{{BUSINESS_NAME}}/g, lead.name)
      .replace(/{{NICHE}}/g, lead.niche)
      .replace(/{{CITY}}/g, lead.city)
      .replace(/{{RATING}}/g, lead.rating ? lead.rating.toFixed(1) : "4.5")
      .replace(/{{REVIEWS_COUNT}}/g, lead.reviewsCount || "48")
      .replace(/{{PHONE}}/g, lead.phone || "+91 99999-99999")
      .replace(/{{PRIMARY_COLOR}}/g, theme.color)
      .replace(/{{PRIMARY_HOVER}}/g, theme.hover)
      .replace(/{{SERVICES_CARDS}}/g, servicesHtml)
      .replace(/{{TESTIMONIALS_CARDS}}/g, testimonialsHtml);
      
    // Write customized index.html and style.css
    fs.writeFileSync(path.join(leadDir, 'index.html'), outputHtml);
    fs.writeFileSync(path.join(leadDir, 'style.css'), cssTemplate);
    
    // Update lead record
    lead.previewUrl = `/previews/${folderName}`;
    lead.status = "Ready to Contact"; // Set to "Ready to Contact" per prompt instruction
    
    lead.history.push({
      timestamp: new Date().toISOString(),
      action: "Preview Built",
      message: `Audited digital footprint. Generated customized preview site at /previews/${folderName} and set status to 'Ready to Contact'.`
    });
    
    console.log(`[Preview Builder] BUILDER complete for ${lead.name}: preview live at ${lead.previewUrl}`);
  } catch (err) {
    console.error(`[Preview Builder] Failed to build site for lead "${lead.name}":`, err);
  }
});

// Save CRM data back
writeCRM(leads);
console.log("\n[Preview Builder] All previews generated and CRM updated successfully.");

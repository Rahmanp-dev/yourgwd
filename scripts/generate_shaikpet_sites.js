import fs from 'fs';
import path from 'path';

const leadsData = [
  { slug: "aditya-construction-company", name: "Aditya Construction Company", style: "dark-glass", color: "blue" },
  { slug: "sri-sreenivasa-constructions", name: "Sri Sreenivasa Constructions", style: "neumorphism", color: "indigo" },
  { slug: "shaikpet-real-estate-agency", name: "Shaikpet Real Estate Agency", style: "modern-flat", color: "emerald" },
  { slug: "hanu-reddy-realty-hyderabad", name: "Hanu Reddy Realty", style: "brutalism", color: "rose" },
  { slug: "vasavi-group-shaikpet", name: "Vasavi Group", style: "dark-glass", color: "cyan" },
  { slug: "rk-property-consultants", name: "RK Property Consultants", style: "neumorphism", color: "violet" },
  { slug: "sv-builders-developers", name: "SV Builders & Developers", style: "modern-flat", color: "orange" },
  { slug: "shaikpet-property-advisors", name: "Shaikpet Property Advisors", style: "minimalist", color: "slate" },
  { slug: "square-yards-shaikpet", name: "Square Yards Shaikpet", style: "dark-glass", color: "teal" },
  { slug: "proptiger-shaikpet-office", name: "PropTiger Shaikpet Office", style: "neumorphism", color: "fuchsia" }
];

const clientsDir = path.join(process.cwd(), 'app', 'client');

function generatePageContent(lead) {
  let bgClass, cardClass, textPrimary, textSecondary, btnClass;

  switch(lead.style) {
    case 'dark-glass':
      bgClass = `bg-gray-900 bg-gradient-to-br from-gray-900 to-${lead.color}-900`;
      cardClass = `bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]`;
      textPrimary = `text-white`;
      textSecondary = `text-${lead.color}-200`;
      btnClass = `bg-gradient-to-r from-${lead.color}-500 to-${lead.color}-600 text-white shadow-lg shadow-${lead.color}-500/30 hover:scale-105 transition-all`;
      break;
    case 'neumorphism':
      bgClass = `bg-gray-100`;
      cardClass = `bg-gray-100 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]`;
      textPrimary = `text-gray-800`;
      textSecondary = `text-${lead.color}-600`;
      btnClass = `bg-${lead.color}-500 text-white shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),_5px_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] transition-all`;
      break;
    case 'brutalism':
      bgClass = `bg-yellow-400`;
      cardClass = `bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`;
      textPrimary = `text-black font-black uppercase tracking-tighter`;
      textSecondary = `text-black font-bold`;
      btnClass = `bg-${lead.color}-500 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`;
      break;
    case 'minimalist':
      bgClass = `bg-white`;
      cardClass = `bg-white border border-gray-100 shadow-sm rounded-xl`;
      textPrimary = `text-gray-900 font-light`;
      textSecondary = `text-gray-500`;
      btnClass = `bg-black text-white hover:bg-gray-800 transition-colors rounded-none`;
      break;
    default: // modern-flat
      bgClass = `bg-slate-50`;
      cardClass = `bg-white rounded-2xl shadow-xl shadow-${lead.color}-100/50 border border-${lead.color}-50`;
      textPrimary = `text-slate-900 font-semibold`;
      textSecondary = `text-${lead.color}-600`;
      btnClass = `bg-${lead.color}-600 text-white rounded-full hover:bg-${lead.color}-700 transition-colors px-8 py-3 font-medium`;
  }

  return `"use client";
import React from 'react';
import { Home, Key, MapPin, Building, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RealEstatePreview() {
  return (
    <div className={\`min-h-screen \${"${bgClass}"} font-sans overflow-hidden\`}>
      {/* Navigation */}
      <nav className="p-6 md:px-12 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <div className={\`w-12 h-12 flex items-center justify-center rounded-xl \${"${cardClass}"}\`}>
            <Building className={\`\${"${textSecondary}"}\`} size={24} />
          </div>
          <span className={\`text-xl font-bold \${"${textPrimary}"}\`}>${lead.name}</span>
        </div>
        <button className={\`px-6 py-2.5 rounded-lg font-semibold \${"${btnClass}"}\`}>
          Client Portal Login
        </button>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-16 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className={\`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold \${"${cardClass}"} \${"${textSecondary}"}\`}>
            <MapPin size={16} /> Shaikpet's Premier PropTech Platform
          </div>
          <h1 className={\`text-5xl md:text-7xl leading-tight \${"${textPrimary}"}\`}>
            Modern Real Estate <br/>
            <span className={\`\${"${textSecondary}"}\`}>Digitized.</span>
          </h1>
          <p className={\`text-lg md:text-xl max-w-lg opacity-80 \${"${textPrimary}"}\`}>
            Welcome to the new digital home of ${lead.name}. We've integrated VR tours, smart CRM, and advanced listing management directly into your operations.
          </p>
          <div className="flex gap-4">
            <button className={\`px-8 py-4 rounded-xl font-bold flex items-center gap-2 \${"${btnClass}"}\`}>
              View Smart Listings <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Decorative element */}
          <div className={\`absolute -inset-4 rounded-[3rem] \${"${cardClass}"} opacity-50 -z-10 transform rotate-3\`}></div>
          
          <div className={\`p-8 rounded-2xl \${"${cardClass}"} space-y-4\`}>
            <div className={\`w-12 h-12 rounded-full flex items-center justify-center \${"${textPrimary}"} bg-black/5\`}>
              <Home size={24} />
            </div>
            <h3 className={\`text-xl font-bold \${"${textPrimary}"}\`}>VR Property Tours</h3>
            <p className={\`\${"${textPrimary}"} opacity-70\`}>Immersive 360° walkthroughs for remote buyers.</p>
          </div>
          
          <div className={\`p-8 rounded-2xl \${"${cardClass}"} space-y-4 transform md:translate-y-12\`}>
            <div className={\`w-12 h-12 rounded-full flex items-center justify-center \${"${textPrimary}"} bg-black/5\`}>
              <Key size={24} />
            </div>
            <h3 className={\`text-xl font-bold \${"${textPrimary}"}\`}>Smart Contracts</h3>
            <p className={\`\${"${textPrimary}"} opacity-70\`}>Digital signatures and secure cloud storage.</p>
          </div>

          <div className={\`p-8 rounded-2xl \${"${cardClass}"} space-y-4\`}>
            <div className={\`w-12 h-12 rounded-full flex items-center justify-center \${"${textPrimary}"} bg-black/5\`}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={\`text-xl font-bold \${"${textPrimary}"}\`}>Verified Leads</h3>
            <p className={\`\${"${textPrimary}"} opacity-70\`}>Automated AI-driven buyer qualification.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
`;
}

function generateLayoutContent(lead) {
  return `export const metadata = {
  title: '${lead.name} - Official Real Estate Platform',
  description: 'Welcome to the new premium digital platform for ${lead.name}. Explore smart listings and VR tours in Shaikpet.',
  openGraph: {
    title: '${lead.name} - Official Real Estate Platform',
    description: 'Welcome to the new premium digital platform for ${lead.name}. Explore smart listings and VR tours in Shaikpet.',
    siteName: '${lead.name}'
  }
};

export default function Layout({ children }) {
  return children;
}
`;
}

leadsData.forEach(lead => {
  const dirPath = path.join(clientsDir, lead.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pagePath = path.join(dirPath, 'page.jsx');
  const layoutPath = path.join(dirPath, 'layout.jsx');

  fs.writeFileSync(pagePath, generatePageContent(lead), 'utf-8');
  fs.writeFileSync(layoutPath, generateLayoutContent(lead), 'utf-8');
  
  console.log(`Generated UI & metadata for: ${lead.slug} (Style: ${lead.style})`);
});

console.log('All 10 Real Estate / PropTech preview sites generated successfully.');

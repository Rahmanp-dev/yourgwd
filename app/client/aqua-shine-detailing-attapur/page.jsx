"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Droplet, 
  Star, 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Check, 
  ChevronDown, 
  Award, 
  Eye, 
  MessageSquare, 
  Info,
  Menu,
  X,
  RefreshCw,
  Layers,
  Activity,
  Wind
} from 'lucide-react';

export default function AquaShineDetailingAttapur() {
  const [contactAngle, setContactAngle] = useState(115); // slider 70 to 120
  const [activeGalleryTab, setActiveGalleryTab] = useState('all'); // 'all', 'beading', 'ppf'
  const [galleryCompare, setGalleryCompare] = useState({}); // id -> 'before' or 'after'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activePackageToggle, setActivePackageToggle] = useState('sedan'); // 'sedan', 'suv'

  const services = [
    {
      title: "Hydro-Wash & Clay Restore",
      desc: "Advanced pH-neutral foam bathing paired with a synthetic polymer clay run. Removes iron filings, tar spots, and industrial fall-out, prepping the surface for ultimate hydrodynamic smooth feel.",
      highlight: "Decontamination Spa",
      price: { sedan: "₹2,499", suv: "₹3,499" },
      icon: <Wind className="w-6 h-6 text-sky-600" />
    },
    {
      title: "Nanoceramic Hydro Shield",
      desc: "Liquid silica glass coating that cures into a 9H sacrificial layer. Raises the water contact angle to 115 degrees, forcing mud, grime, and acid rain to bead and roll off without sticking.",
      highlight: "Super-Hydrophobic Base",
      price: { sedan: "₹19,999", suv: "₹24,999" },
      icon: <Droplet className="w-6 h-6 text-sky-600" />
    },
    {
      title: "Hydrophobic TPU PPF",
      desc: "Hydrodynamic paint protection film with self-cleaning properties. Features a slick topcoat that resists water spotting, bird droppings, and UV oxidation. Wrap once, protect for 10 years.",
      highlight: "Hydro-TPU | 10 Yr Warranty",
      price: { sedan: "₹79,999", suv: "₹89,999" },
      icon: <Shield className="w-6 h-6 text-sky-600" />
    },
    {
      title: "Hydro-Glass Armor",
      desc: "Fluorinated glass protection that repels rainwater instantly at speeds above 40 km/h. Essential for monsoon safety in Attapur, reducing wiper wear and eliminating glass scaling.",
      highlight: "12 Months Water Shedding",
      price: { sedan: "₹2,999", suv: "₹3,999" },
      icon: <Eye className="w-6 h-6 text-sky-600" />
    },
    {
      title: "Interior Leather Hydrophobing",
      desc: "Breathable leather and alcantara barrier protection. Spill coffee, milk, or juices - the coating repels the liquid, allowing you to wipe it off with zero staining.",
      highlight: "Anti-Stain Protection",
      price: { sedan: "₹4,999", suv: "₹6,499" },
      icon: <Layers className="w-6 h-6 text-sky-600" />
    }
  ];

  const packages = [
    {
      name: "Aqua HydroShield",
      warranty: "1 Year Shield",
      price: { sedan: "₹14,999", suv: "₹17,999" },
      features: [
        "1 Layer of SiO2 Nanoceramic Coating",
        "Water Contact Angle up to 105°",
        "Deep Gloss Paint Enhancement",
        "Front Windshield Glass Protection",
        "1 Complementary Maintenance Wash"
      ]
    },
    {
      name: "Aqua Shine Premium",
      warranty: "3 Years Shield",
      price: { sedan: "₹24,999", suv: "₹28,999" },
      popular: true,
      features: [
        "2 Layers of 9H Nanoceramic Coating",
        "Water Contact Angle up to 115°",
        "Full Exterior Glass Armor Rain Protection",
        "Alloy Wheels & Calipers Hydrophobic Shield",
        "Multi-Stage Paint Correction & Swirl Clear",
        "2 Free Hydro-Boost Maintenance Audits"
      ]
    },
    {
      name: "Hydro-Science Pro",
      warranty: "5 Years Shield",
      price: { sedan: "₹39,999", suv: "₹44,999" },
      features: [
        "3 Layers of Certified Graphene Ceramic Shield",
        "Water Contact Angle up to 120° (Bead-roll limit)",
        "Self-Healing Micro-scratch Polymer Top Coat",
        "Full Interior Leather & Fabric Hydrophobing",
        "Premium Trim Restoration & Engine Room Detail",
        "Unconditional 5-Year Gloss Guarantee"
      ]
    }
  ];

  const galleryItems = [
    {
      id: 1,
      car: "BMW 3 Series Gran Limousine",
      service: "Aqua Shine Premium (3 Yrs)",
      tag: "beading",
      beforeImg: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      car: "Hyundai Tucson (Starry Night)",
      service: "Hydro-Science Pro (5 Yrs)",
      tag: "beading",
      beforeImg: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      car: "Mercedes GLC (Polar White)",
      service: "Hydrophobic TPU PPF Wrap",
      tag: "ppf",
      beforeImg: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1611245801312-513407274399?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredGallery = activeGalleryTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === activeGalleryTab);

  const testimonials = [
    {
      name: "Sandeep Kumar",
      car: "Audi A6 owner",
      area: "Happy Homes Colony, Attapur",
      rating: 5,
      comment: "Superb hydrophobic effect! I got the Hydro-Science Pro package on my dark grey A6. Yesterday it rained heavily, and after driving back, the car looked completely dry. All water beads just rolled away. Recommended!"
    },
    {
      name: "Pranati Rao",
      car: "Creta owner",
      area: "Rambagh Main Road, Attapur",
      rating: 5,
      comment: "Aqua Shine Detailers are magicians. The metallic shine they pulled out of my white Creta is incredible. The surface feels super slick, like glass, and dust doesn't settle at all. High-end tactile showroom in Attapur."
    },
    {
      name: "Syed Ibrahim",
      car: "Thar owner",
      area: "Inner Ring Road, Attapur",
      rating: 5,
      comment: "Clean professional work. Best detailing place near Pillar 130-140. Got the Hydro TPU film on my Thar. Extremely happy with how mud slides right off during washing."
    }
  ];

  const faqs = [
    {
      q: "What is the water contact angle and why does it matter?",
      a: "The water contact angle is the angle at which a water droplet meets a solid surface. Uncoated paint has an angle of around 70° (water sits flat and spreads). Nanoceramic coatings raise this angle to 115°-120°, forcing the water to form a tight, spherical bead. This reduces the contact area, allowing gravity to easily roll the water away, carrying dust and dirt with it."
    },
    {
      q: "Does the coating prevent water spots in Hyderabad's hard water?",
      a: "Hyderabad water is rich in calcium and minerals. While no coating can completely stop mineral deposits from evaporating, our super-hydrophobic barrier significantly reduces water staying on the panel, preventing 90% of water-spot scaling."
    },
    {
      q: "How long does the hydrophobic beading effect last?",
      a: "The chemical hydrophobic topcoat lasts between 12 to 18 months, depending on maintenance. We recommend our annual booster wash, where we apply a fresh silica topper to recharge the contact angle back to its peak 115°."
    },
    {
      q: "Is clay bar restoration safe for brand-new cars?",
      a: "Yes, even new cars accumulate industrial fall-out during transport. We use an ultra-fine, non-abrasive clay bar with specialized lubricants to clean the clearcoat without creating swirls."
    },
    {
      q: "How can I book a slot at the Attapur center?",
      a: "You can book directly using the contact form on this preview page. We will contact you on WhatsApp to confirm your vehicle type and reserve the climate-controlled bay."
    }
  ];

  return (
    <div className="min-h-screen bg-[#E6EEF8] text-slate-700 font-sans antialiased selection:bg-sky-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#E6EEF8] border-b border-[#D1DCEE] shadow-[0_4px_20px_rgba(184,201,220,0.35)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E6EEF8] shadow-[-3px_-3px_8px_white,3px_3px_8px_#B8C9DC] flex items-center justify-center">
                <Droplet className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-slate-800">
                  AQUA<span className="text-sky-600">SHINE</span>
                </span>
                <span className="text-[9px] block font-mono text-slate-500 tracking-[0.2em] uppercase">
                  HYDRODYNAMIC DETAIL • ATTAPUR
                </span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Home</a>
              <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Hydro-Restores</a>
              <a href="#simulator" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Science Lab</a>
              <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Cost Sheets</a>
              <a href="#gallery" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Beading Gallery</a>
              <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">FAQ</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href="#contact" 
                className="px-6 py-2.5 rounded-full bg-[#E6EEF8] text-sky-700 font-bold text-sm shadow-[-4px_-4px_10px_white,4px_4px_10px_#B8C9DC] active:shadow-[inset_-2px_-2px_6px_white,inset_2px_2px_6px_#B8C9DC] transition-all duration-150"
              >
                Book Water-Runoff Test
              </a>
            </div>

            {/* Mobile Menu Btn */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] text-slate-600 active:shadow-[inset_-1px_-1px_3px_white,inset_1px_1px_3px_#B8C9DC]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-[#E6EEF8] border-b border-[#D1DCEE]">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-slate-700">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-slate-700">Hydro-Restores</a>
            <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-slate-700">Science Lab</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-slate-700">Cost Sheets</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-slate-700">Beading Gallery</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-slate-700">FAQ</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-center py-3 bg-sky-600 text-white rounded-2xl font-bold shadow-md shadow-sky-500/20"
            >
              Book Service
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF8] shadow-[inset_-2px_-2px_5px_white,inset_2px_2px_5px_#B8C9DC] text-sky-600 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                Science of Liquid Shedding
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
                Hydrodynamic Coating. <br />
                <span className="text-sky-600">Ultimate Wet Reflection.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                Pioneering surface physics on paint. Aqua Shine Attapur delivers nanoceramic and self-healing TPU treatments with extreme contact angles. Water mud rolls off instantly.
              </p>

              {/* Landmark indicators */}
              <div className="flex flex-wrap items-center gap-6 py-2 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>Attapur Bypass Main Road</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-600" />
                  <span>Certified Graphene Lab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>09:00 AM - 08:30 PM</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-sky-600 text-white font-bold text-base shadow-[4px_4px_12px_rgba(14,165,233,0.3),-4px_-4px_12px_white] hover:bg-sky-500 active:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] transition-all duration-150"
                >
                  Book Water-Bead Demo
                  <Droplet className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#pricing" 
                  className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-[#E6EEF8] text-slate-700 font-bold text-base shadow-[-4px_-4px_10px_white,4px_4px_10px_#B8C9DC] active:shadow-[inset_-2px_-2px_6px_white,inset_2px_2px_6px_#B8C9DC] transition-all duration-150"
                >
                  Inspect Custom Rates
                </a>
              </div>
            </div>

            {/* Hero Interactive Water Bead widget */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-[2.5rem] bg-[#E6EEF8] shadow-[12px_12px_24px_#B8C9DC,-12px_-12px_24px_white] p-8 border border-white/40 flex flex-col justify-between aspect-square">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-slate-500 uppercase">Beading Indicator</span>
                    <span className="text-xs font-bold text-sky-600">Active Test</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Hydrophobic Contact State</h3>
                  <p className="text-xs text-slate-500 mt-1">Water tension behavior under direct clearcoat treatment.</p>
                </div>

                {/* Hydrodynamic graphic display */}
                <div className="my-6 flex flex-col items-center justify-center">
                  <div className="w-full h-32 bg-[#E6EEF8] shadow-[inset_-3px_-3px_6px_white,inset_3px_3px_6px_#B8C9DC] rounded-2xl flex items-center justify-center overflow-hidden relative">
                    {/* Water drop simulation */}
                    <div className="absolute bottom-0 w-full h-[3px] bg-slate-400"></div>
                    
                    <svg className="w-48 h-24" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Car paint line */}
                      <line x1="10" y1="90" x2="190" y2="90" stroke="#475569" strokeWidth="2" />
                      
                      {/* Contact angle reference */}
                      <path 
                        d="M100 90 A 40 40 0 0 0 60 90" 
                        stroke="#0EA5E9" 
                        strokeWidth="1.5" 
                        strokeDasharray="4"
                        opacity="0.6"
                      />
                      
                      {/* Droplet outline morphing */}
                      <path 
                        d={
                          contactAngle < 85
                            ? "M60 90 C60 50, 140 50, 140 90 Z" // Flat wet drop
                            : contactAngle < 105
                            ? "M70 90 C70 35, 130 35, 130 90 Z" // Rounder drop
                            : "M80 90 C65 25, 135 25, 120 90 Z" // Spherical bead
                        } 
                        fill="rgba(14, 165, 233, 0.2)" 
                        stroke="#0EA5E9" 
                        strokeWidth="3.5" 
                        className="transition-all duration-300"
                      />
                      
                      {/* Reflection shine inside droplet */}
                      <circle cx="100" cy="55" r="4" fill="white" opacity="0.6" />
                    </svg>
                  </div>
                  
                  {/* Slider control */}
                  <div className="w-full mt-5 space-y-2">
                    <div className="flex justify-between text-xs font-bold text-slate-600">
                      <span>Hydrophilic (Uncoated)</span>
                      <span className="text-sky-600">State: {contactAngle}°</span>
                    </div>
                    <input 
                      type="range" 
                      min="70" 
                      max="120" 
                      value={contactAngle}
                      onChange={(e) => setContactAngle(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-sky-600" 
                    />
                  </div>
                </div>

                <div className="text-center text-xs font-semibold text-slate-500">
                  {contactAngle < 90 
                    ? "Normal flat surface pooling. Severe water spotting." 
                    : contactAngle < 110 
                    ? "Coated beading. Safe run-off velocity." 
                    : "Super-hydrophobic bead release. Self-cleaning active."}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Scientific verification stats */}
      <section className="py-12 bg-[#E6EEF8] border-y border-[#D1DCEE] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-sky-600 mb-1">115°</div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Contact Release Angle</span>
            </div>
            <div className="text-center border-l border-[#D1DCEE]">
              <div className="text-4xl font-extrabold text-sky-600 mb-1">80+ km/h</div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Water Runoff Speed</span>
            </div>
            <div className="text-center border-l border-[#D1DCEE]">
              <div className="text-4xl font-extrabold text-sky-600 mb-1">9H / 10H</div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Cured Silica Hardness</span>
            </div>
            <div className="text-center border-l border-[#D1DCEE]">
              <div className="text-4xl font-extrabold text-sky-600 mb-1">100%</div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Decontamination Clean</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Chemical Technology</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800">Hydrophobic Interventions</h2>
            <p className="text-slate-600">Bespoke detailing solutions leveraging molecular chemistry to shield clearcoats and interior fabrics from Hyderabad dirt.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="rounded-3xl bg-[#E6EEF8] shadow-[8px_8px_16px_#B8C9DC,-8px_-8px_16px_white] p-8 border border-white/50 flex flex-col justify-between hover:shadow-[12px_12px_20px_#B8C9DC,-12px_-12px_20px_white] transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#E6EEF8] shadow-[-3px_-3px_8px_white,3px_3px_8px_#B8C9DC] flex items-center justify-center mb-6">
                    {svc.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-1">{svc.title}</h3>
                  <span className="text-xs font-mono text-sky-600 block mb-4">{svc.highlight}</span>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-300/40 flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-bold">Sedan / SUV</span>
                  <span className="font-extrabold text-slate-800 text-sm">{svc.price.sedan} / {svc.price.suv}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Signature Hydrodynamic Science Lab (Interactive Demo) */}
      <section id="simulator" className="py-24 bg-[#E6EEF8] border-y border-[#D1DCEE] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Interactive Science Lab</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">Hydrodynamic Angle Simulator</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Adjust the water droplet contact angle. Witness the structural physics of how high surface tension beads liquids, preventing chemical bonding and keeping your vehicle clean.
              </p>

              <div className="p-5 rounded-2xl bg-[#E6EEF8] shadow-[inset_-3px_-3px_6px_white,inset_3px_3px_6px_#B8C9DC] space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">Hydrophobic Coefficient</span>
                  <span className="text-sky-600 font-black">{(contactAngle * 0.95).toFixed(1)} N/m</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">Runoff Velocity</span>
                  <span className="text-sky-600 font-black">{contactAngle > 105 ? "Fast (Freeflow)" : contactAngle > 90 ? "Medium" : "Stagnant Pooling"}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">Swirl Repellency Index</span>
                  <span className="text-sky-600 font-black">{contactAngle > 100 ? "98% Protection" : "Baseline"}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Big Interactive Render Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full aspect-video rounded-[2.5rem] bg-[#E6EEF8] shadow-[12px_12px_24px_#B8C9DC,-12px_-12px_24px_white] border border-white/50 p-8 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-500">AQUA LAB RENDER ENGINE</span>
                  <span className="font-bold text-sky-600 tracking-widest uppercase">10H Molecular Angle</span>
                </div>

                {/* Big morphing droplet simulation */}
                <div className="my-6 h-48 flex items-center justify-center relative">
                  {/* Paint panel represent */}
                  <div className="absolute bottom-6 w-5/6 h-4 rounded bg-[#E6EEF8] shadow-[-2px_-2px_4px_white,2px_2px_4px_#B8C9DC]"></div>
                  
                  {/* Morphing Droplets */}
                  <svg className="w-64 h-32 relative z-10" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Droplet */}
                    <path 
                      d={
                        contactAngle < 85
                          ? "M40 86 C40 30, 160 30, 160 86 Z"
                          : contactAngle < 105
                          ? "M60 86 C65 20, 135 20, 140 86 Z"
                          : "M75 86 C60 0, 140 0, 125 86 Z"
                      } 
                      fill="url(#droplet-gradient)" 
                      stroke="#0EA5E9" 
                      strokeWidth="4" 
                      className="transition-all duration-500"
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="droplet-gradient" x1="100" y1="10" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>

                    {/* Small shine dots */}
                    <circle cx="100" cy="40" r="6" fill="white" opacity="0.7" />
                    <circle cx="90" cy="35" r="3" fill="white" opacity="0.5" />
                  </svg>

                  {/* Contact Angle Angle Indicator line overlay */}
                  <div className="absolute right-12 top-6 p-3 rounded-xl bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] text-center text-xs">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Contact Angle</span>
                    <span className="text-lg font-black text-sky-600">{contactAngle}°</span>
                  </div>
                </div>

                {/* Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                    <span>Pool wash (70°)</span>
                    <span>Aqua Shield Bead Limit (120°)</span>
                  </div>
                  <input 
                    type="range" 
                    min="70" 
                    max="120" 
                    value={contactAngle}
                    onChange={(e) => setContactAngle(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Transparent Estimation</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800">Detailing Menu Rates</h2>
            <p className="text-slate-600">Select your vehicle segment toggle to see custom premium rates. Graphene and Silica warranty values listed.</p>

            {/* Segment Selector Toggle */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#E6EEF8] shadow-[inset_-3px_-3px_6px_white,inset_3px_3px_6px_#B8C9DC] mt-8">
              <button
                onClick={() => setActivePackageToggle('sedan')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                  activePackageToggle === 'sedan' 
                    ? 'bg-sky-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Sedans / Hatchbacks
              </button>
              <button
                onClick={() => setActivePackageToggle('suv')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                  activePackageToggle === 'suv' 
                    ? 'bg-sky-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                SUVs / Crossovers
              </button>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-stretch pt-6">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col justify-between p-8 rounded-[2.5rem] bg-[#E6EEF8] ${
                  pkg.popular 
                    ? 'shadow-[12px_12px_24px_#B8C9DC,-12px_-12px_24px_white,inset_0_0_0_2px_#0ea5e9]' 
                    : 'shadow-[8px_8px_16px_#B8C9DC,-8px_-8px_16px_white]'
                } border border-white/40 transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sky-600 text-white text-[10px] tracking-wider uppercase font-black shadow-md">
                    Bay Standard
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">{pkg.warranty}</span>
                    <h3 className="text-2xl font-extrabold text-slate-800 mt-1">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-3xl font-black text-slate-800">
                      {activePackageToggle === 'sedan' ? pkg.price.sedan : pkg.price.suv}
                    </span>
                    <span className="text-xs text-slate-500">/ All-inclusive estimate</span>
                  </div>

                  <ul className="space-y-4 pt-4 border-t border-slate-300/40 text-sm">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-slate-600">
                        <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-300/40">
                  <a 
                    href="#contact"
                    className={`w-full py-4 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-150 ${
                      pkg.popular 
                        ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/20 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)]' 
                        : 'bg-[#E6EEF8] text-slate-700 shadow-[-3px_-3px_8px_white,3px_3px_8px_#B8C9DC] active:shadow-[inset_-2px_-2px_5px_white,inset_2px_2px_5px_#B8C9DC] hover:text-slate-900'
                    }`}
                  >
                    Select Slot & Save
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Before / After Beading Gallery */}
      <section id="gallery" className="py-24 bg-[#E6EEF8] border-y border-[#D1DCEE] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Beading Verification</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-2">Hydrophobic Proofs</h2>
              <p className="text-slate-600 max-w-xl mt-2">Real paint correction results showing water runoff differences on client cars before and after ceramic seal.</p>
            </div>
            
            {/* Tabs */}
            <div className="flex p-1.5 rounded-xl bg-[#E6EEF8] shadow-[inset_-2px_-2px_5px_white,inset_2px_2px_5px_#B8C9DC] self-start md:self-auto">
              {['all', 'beading', 'ppf'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-5 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    activeGalleryTab === tab 
                      ? 'bg-sky-600 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => {
              const showAfter = galleryCompare[item.id] === 'after' || !galleryCompare[item.id];
              return (
                <div key={item.id} className="bg-[#E6EEF8] shadow-[8px_8px_16px_#B8C9DC,-8px_-8px_16px_white] border border-white/50 rounded-[2rem] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-base">{item.car}</h4>
                        <span className="text-xs text-slate-500">{item.service}</span>
                      </div>
                      <span className="text-[10px] font-bold text-sky-600 uppercase bg-[#E6EEF8] shadow-[inset_-2px_-2px_4px_white,inset_2px_2px_4px_#B8C9DC] px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>

                    {/* Image comparison */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 shadow-[inset_2px_2px_5px_#B8C9DC]">
                      <img 
                        src={showAfter ? item.afterImg : item.beforeImg} 
                        alt={`${item.car} comparison`} 
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-slate-900/80 text-[10px] font-mono text-white tracking-widest uppercase">
                        {showAfter ? 'Aqua Wet Beading' : 'Pre-decontaminated'}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Controls */}
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <button
                      onClick={() => setGalleryCompare(prev => ({ ...prev, [item.id]: 'before' }))}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        !showAfter 
                          ? 'bg-sky-600 text-white shadow-md' 
                          : 'bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Show Before
                    </button>
                    <button
                      onClick={() => setGalleryCompare(prev => ({ ...prev, [item.id]: 'after' }))}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        showAfter 
                          ? 'bg-sky-600 text-white shadow-md' 
                          : 'bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Show After
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Local Trust Proofs</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800">Hydrophobic Reviews</h2>
            <p className="text-slate-600">Attapur car owners verify the dirt and rain shedding qualities of our nanoceramic coatings.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#E6EEF8] shadow-[8px_8px_16px_#B8C9DC,-8px_-8px_16px_white] border border-white/50 p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sky-600 text-sky-600" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic mb-8">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-slate-300/40">
                  <div className="w-10 h-10 rounded-full bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] flex items-center justify-center font-bold text-sky-600">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{t.name}</h4>
                    <span className="text-[10px] text-slate-500 block">{t.car} • {t.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 bg-[#E6EEF8] border-y border-[#D1DCEE] shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Chemical FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">Hydrophobic Answers</h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#E6EEF8] shadow-[6px_6px_12px_#B8C9DC,-6px_-6px_12px_white] border border-white/50 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50/40 transition-colors"
                  >
                    <span className="font-bold text-slate-800 text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-sky-600 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-96 border-t border-slate-300/40' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#E6EEF8] shadow-[12px_12px_28px_#B8C9DC,-12px_-12px_28px_white] border border-white/60 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              
              {/* Left Column info */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Reserve Slot</span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-2 leading-tight">
                    Visit our <br />
                    <span className="text-sky-600">Hydro-Science Hub</span>
                  </h2>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
                  Operating in custom clean-room settings in Attapur. Drop by to examine contact angle bead tests on real painted steel samples.
                </p>

                {/* Details */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-bold text-sm">Station Address</h4>
                      <p className="text-slate-600 text-xs mt-1">Survey No. 42, Attapur Bypass Main Road, Near Ring Road Junction, Hyderabad - 500048</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-bold text-sm">Laboratory Line</h4>
                      <p className="text-slate-600 text-xs mt-1">+91 88888 77777 (Support & slot updates)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6EEF8] shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-bold text-sm">Bays Active</h4>
                      <p className="text-slate-600 text-xs mt-1">Daily: 09:00 AM - 08:30 PM (All-weather climate chambers)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column form card */}
              <div className="bg-[#E6EEF8] shadow-[8px_8px_20px_#B8C9DC,-8px_-8px_20px_white] border border-white/60 p-8 rounded-3xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#E6EEF8] shadow-[inset_-2px_-2px_5px_white,inset_2px_2px_5px_#B8C9DC] flex items-center justify-center mx-auto text-sky-600">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Hydro-Slot Logged!</h3>
                    <p className="text-slate-600 text-xs max-w-xs mx-auto leading-relaxed">
                      We have logged your vehicle segment details. Our laboratory technician will WhatsApp your slot confirmation details within 15 minutes.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-[#E6EEF8] text-xs font-bold text-slate-600 shadow-[-2px_-2px_5px_white,2px_2px_5px_#B8C9DC] active:shadow-[inset_-1px_-1px_3px_white,inset_1px_1px_3px_#B8C9DC] rounded-xl mt-4"
                    >
                      Log Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Reserve Hydro-Chamber Slot</h3>
                    <p className="text-xs text-slate-500 mb-4">Complementary water water-spot mineral test included.</p>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Owner Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Sandeep" 
                        className="w-full px-4 py-3 rounded-xl bg-[#E6EEF8] border border-white/30 shadow-[inset_2px_2px_5px_#B8C9DC,inset_-2px_-2px_5px_white] focus:outline-none text-slate-800 text-sm" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. +91 99999 99999" 
                        className="w-full px-4 py-3 rounded-xl bg-[#E6EEF8] border border-white/30 shadow-[inset_2px_2px_5px_#B8C9DC,inset_-2px_-2px_5px_white] focus:outline-none text-slate-800 text-sm" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">Car Model</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Audi A6" 
                          className="w-full px-4 py-3 rounded-xl bg-[#E6EEF8] border border-white/30 shadow-[inset_2px_2px_5px_#B8C9DC,inset_-2px_-2px_5px_white] focus:outline-none text-slate-800 text-sm" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">Segment</label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl bg-[#E6EEF8] border border-white/30 shadow-[inset_2px_2px_5px_#B8C9DC,inset_-2px_-2px_5px_white] focus:outline-none text-slate-600 text-sm"
                        >
                          <option>Sedan / Coupe</option>
                          <option>SUV / Crossover</option>
                          <option>Hatchback / EV</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 rounded-xl bg-sky-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(14,165,233,0.25)] hover:bg-sky-500 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)] transition-all duration-150 mt-4"
                    >
                      Book Free Diagnostic
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E6EEF8] py-16 border-t border-[#D1DCEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 md:col-span-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-800">
                AQUA<span className="text-sky-600">SHINE</span>
              </span>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Certified premium paint restoration using hydrophobic molecular polymers. Custom paint protection and water shedding coatings in Attapur, Hyderabad.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Detailing</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><a href="#services" className="hover:text-sky-600 transition-colors">Hydro-Restoration</a></li>
                <li><a href="#services" className="hover:text-sky-600 transition-colors">Nanoceramic Quartz</a></li>
                <li><a href="#services" className="hover:text-sky-600 transition-colors">Self-Cleaning PPF</a></li>
                <li><a href="#services" className="hover:text-sky-600 transition-colors">Glass waterproofing</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Stations</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><span className="text-slate-800 font-bold">Attapur (Main Station)</span></li>
                <li><span>Kondapur Lab</span></li>
                <li><span>Begumpet Center</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#D1DCEE] flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Aqua Shine Detailing Attapur. Official Website Preview. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sky-600">Privacy Policy</a>
              <a href="#" className="hover:text-sky-600">Terms of Use</a>
              <a href="#" className="hover:text-sky-600">Warranty Registry</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

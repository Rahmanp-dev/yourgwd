"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, Check, ChevronDown, ChevronUp, Grid, 
  Layers, MapPin, Phone, Mail, Menu, X, ArrowUpRight, 
  HelpCircle, Sparkles, Sliders, Shield, Compass, Heart
} from 'lucide-react';

export default function DecorpotMinimalist() {
  const [activeTab, setActiveTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({});
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', location: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Estimator States
  const [homeSize, setHomeSize] = useState('3bhk'); // 2bhk, 3bhk, villa
  const [designTier, setDesignTier] = useState('premium'); // essential, premium, luxury
  const [addons, setAddons] = useState({
    falseCeiling: false,
    smartHome: false,
    premiumQuartz: false,
    softClose: false
  });

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCheckboxChange = (addonKey) => {
    setAddons(prev => ({ ...prev, [addonKey]: !prev[addonKey] }));
  };

  // Estimator calculation values
  const basePrices = {
    '2bhk': 450000,
    '3bhk': 650000,
    'villa': 950000
  };

  const tierMultipliers = {
    'essential': 1.0,
    'premium': 1.3,
    'luxury': 1.6
  };

  const addonPrices = {
    falseCeiling: 80000,
    smartHome: 150000,
    premiumQuartz: 60000,
    softClose: 75000
  };

  const calculateCost = () => {
    const base = basePrices[homeSize];
    const multiplier = tierMultipliers[designTier];
    const baseTotal = base * multiplier;

    let addonTotal = 0;
    Object.keys(addons).forEach(key => {
      if (addons[key]) {
        addonTotal += addonPrices[key];
      }
    });

    const subtotal = baseTotal + addonTotal;
    const designFee = subtotal * 0.10;
    const gst = subtotal * 0.18;
    const grandTotal = subtotal + designFee + gst;

    return {
      subtotal,
      designFee,
      gst,
      grandTotal
    };
  };

  const { subtotal, designFee, gst, grandTotal } = calculateCost();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', phone: '', email: '', location: '', message: '' });
    }, 1500);
  };

  const tabsData = {
    living: {
      title: "LIVING SPACES",
      subtitle: "Uncluttered sanctuaries that speak through volume and light.",
      description: "Our living room designs emphasize spatial flow, clean structural lines, and custom integrated furniture that merges seamlessly with the architectural envelope. We utilize premium low-sheen lacquers, concealed LED warm wash systems, and architectural concrete finishes to craft absolute serenity.",
      features: ["Flush-to-wall pivot doors", "Integrated acoustic media consoles", "Floor-to-ceiling shadow gap skirting", "Concealed climate control diffusers"],
      timeline: "4 Weeks",
      materials: "Imported engineered oak, raw microcement, matte powder-coated steel",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800&h=500"
    },
    kitchen: {
      title: "CULINARY STUDIOS",
      subtitle: "Precision engineering tailored for minimalist workflows.",
      description: "A kitchen should feel like an architectural monolith. We install custom handle-less cabinetry, flush induction hobs, and raw quartz waterfall islands. Every drawer and mechanism is selected for quiet, effortless linear motion, hiding utility behind pristine surfaces.",
      features: ["Flush-fit pocket appliance cupboards", "Continuous linear finger-pull channels", "Under-counter integrated refuse management", "Solid-core composite anti-fingerprint surfaces"],
      timeline: "5 Weeks",
      materials: "Quartzite surfaces, polymer matte panels, Blum Legrabox drawer systems",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800&h=500"
    },
    wardrobes: {
      title: "WARDROBES & STORAGE",
      subtitle: "Bespoke organizational architecture behind flush panels.",
      description: "Storage should be felt, never seen. Our full-height wardrobes align perfectly with your ceiling line, featuring custom aluminum frame glass doors or lacquer-finished fronts. Internally, warm leatherette pullouts and automatic linear LED arrays illuminate your wardrobe with absolute precision.",
      features: ["Ceiling-flush 2.8m wardrobe doors", "Internal leather-lined drawer dividers", "Integrated humidor and watch-winder modules", "Silent structural sliding gear"],
      timeline: "3 Weeks",
      materials: "Anodized aluminum, grey tinted tempered glass, textured linen laminates",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800&h=500"
    },
    bedroom: {
      title: "MASTER SUITE",
      subtitle: "Restorative retreat centered on natural textures and quiet acoustics.",
      description: "The modern master suite prioritizes quiet luxury. We implement custom padded fabric headboard paneling, floating platforms with hidden under-lighting, and architectural acoustic treatments to isolate external noises. The design invites tranquility through tactile warmth.",
      features: ["Floating platform bed with warm under-glow", "Integrated bedside wireless charge bays", "Acoustical wall panel treatments", "Concealed master safe systems"],
      timeline: "4 Weeks",
      materials: "Bouclé fabrics, natural brushed veneer, warm sand-finish plasters",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=500"
    },
    balcony: {
      title: "OUTDOOR BALCONIES",
      subtitle: "Seamless indoor-outdoor transitions framing Hyderabad views.",
      description: "Extend your minimalist home into the open air. Designed for high-rise apartments in Attapur and Gachibowli, we install weather-resistant structural decking, custom perimeter green screens, and integrated concrete bench elements that echo the interior palette.",
      features: ["Zero-level flush slider thresholds", "Concealed drainage timber composite decking", "Integrated minimalist steel planters", "Dimmable exterior wash lighting"],
      timeline: "2 Weeks",
      materials: "Teak-composite decking, marine-grade stainless steel, fair-face concrete",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800&h=500"
    }
  };

  const faqs = [
    {
      q: "What defines Decorpot's Modern Minimalist philosophy?",
      a: "Our Modern Minimalist style focuses on spatial clarity, raw material integrity, and the elimination of unnecessary decoration. We build with premium architectural features like shadow gaps instead of traditional beadings/skirtings, and clean integrated storage rather than heavy external units. It is an investment in pristine architectural alignment."
    },
    {
      q: "Do you have an office/experience center near Attapur?",
      a: "Yes, our central design studio serves Attapur, Hyderguda, and Rajendranagar directly, with full material experience galleries showcasing our modular systems, quartz worktops, and custom sliding partitions. Site meetings can be arranged directly at your property."
    },
    {
      q: "How do you achieve the flush, seamless finishes in your projects?",
      a: "We deploy dedicated alignment technicians who coordinate with civil plasterers. We use hidden aluminum frames for doors, custom floor-to-ceiling structural channels, and laser levels for all carpentry. Every joint features a deliberate 5mm shadow-line gap rather than overlapping cover trims."
    },
    {
      q: "What is your project warranty and service contract?",
      a: "All our custom modular units and cabinet structural frames carry a 10-year comprehensive warranty. Hardware mechanisms from Blum and Hettich carry lifetime performance warranties. We also include two complimentary maintenance visits during the first 12 months."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#111111] selection:text-white antialiased">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 px-6 sm:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-[#111111] flex items-center justify-center">
            <span className="text-white font-mono font-bold text-sm">D</span>
          </div>
          <div>
            <span className="text-sm font-bold tracking-widest uppercase block">DECORPOT</span>
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 block uppercase">HYDERABAD // ATTAPUR</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest">
          <a href="#about" className="hover:text-neutral-500 transition-colors">Philosophy</a>
          <a href="#portfolio" className="hover:text-neutral-500 transition-colors">Portfolio</a>
          <a href="#estimator" className="hover:text-neutral-500 transition-colors">Estimator</a>
          <a href="#testimonials" className="hover:text-neutral-500 transition-colors">Clients</a>
          <a href="#faq" className="hover:text-neutral-500 transition-colors">FAQ</a>
        </nav>

        <div>
          <a 
            href="#contact" 
            className="border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] px-5 py-2.5 text-[10px] font-mono uppercase tracking-widest transition-all"
          >
            Request Call
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-6 sm:px-12 py-20 lg:py-32 border-b border-neutral-150">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-[10px] font-mono uppercase tracking-widest">
              <Compass size={12} />
              Attapur Interior Studio
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-[#111111]">
              Space is luxury. <br />
              <span className="font-normal">Keep it absolute.</span>
            </h1>

            <p className="text-neutral-500 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              We design and construct premium minimalist homes in Attapur, Hyderabad. By stripping away visual clutter, we highlight pristine geometry, natural light, and the honest texture of premium materials.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#estimator" 
                className="bg-[#111111] hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest px-8 py-4 flex items-center justify-between gap-4 transition-all"
              >
                Launch Price Configurator
                <ArrowRight size={16} />
              </a>
              <a 
                href="#portfolio" 
                className="border border-neutral-200 hover:border-[#111111] text-[#111111] font-mono text-xs uppercase tracking-widest px-8 py-4 text-center transition-all"
              >
                Browse Works
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-neutral-50 overflow-hidden border border-neutral-150">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Minimalist Living Space Hyderabad" 
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-neutral-150 p-6 max-w-xs hidden sm:block">
              <span className="text-[10px] font-mono text-neutral-400 block uppercase mb-1">PROJECT TARGET</span>
              <span className="text-xs font-bold uppercase tracking-wider block">Rajapushpa Atria Villa</span>
              <span className="text-[11px] text-neutral-500 mt-1 block">Full-house custom minimalist conversion completed in 2026.</span>
            </div>
          </div>

        </div>
      </section>

      {/* METRICS & PHILOSOPHY */}
      <section id="about" className="px-6 sm:px-12 py-20 bg-neutral-50 border-b border-neutral-150">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">STUDIO INDEX // 01</span>
              <h3 className="text-lg font-medium tracking-tight uppercase">LINEAR DISCIPLINE</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Every line has an origin and a purpose. We configure spaces around a strict grid system, ensuring flush doors, hidden drawers, and recess tracks line up perfectly to create structural peace.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">STUDIO INDEX // 02</span>
              <h3 className="text-lg font-medium tracking-tight uppercase">TACTILE INTEGRITY</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Minimalism requires premium textures. We work with raw engineered timber, cool matte lacquer, microcement plasters, and solid-core composites that hold their elegance over decades of touch.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">STUDIO INDEX // 03</span>
              <h3 className="text-lg font-medium tracking-tight uppercase">LOCAL CRAFT</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Constructed by hand. Our custom millwork and modular assemblies are built in our dedicated Attapur workshop bays, utilizing European precision machinery and local expert installers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE PORTFOLIO TABS */}
      <section id="portfolio" className="px-6 sm:px-12 py-24 border-b border-neutral-150">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">PORTFOLIO BLUEPRINT</span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight mt-2 text-[#111111]">
                DESIGN OVERVIEW BY <span className="font-normal">SEGMENT</span>
              </h2>
            </div>
            
            {/* TAB SELECTOR */}
            <div className="flex flex-wrap border border-neutral-200 p-1 bg-white">
              {Object.keys(tabsData).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all ${
                    activeTab === tabKey 
                      ? 'bg-[#111111] text-white' 
                      : 'text-neutral-500 hover:text-[#111111]'
                  }`}
                >
                  {tabKey}
                </button>
              ))}
            </div>
          </div>

          {/* TAB CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-neutral-50 p-6 sm:p-12 border border-neutral-150">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[9px] font-mono bg-[#111111] text-white px-2.5 py-1 uppercase tracking-widest inline-block">
                {activeTab} blueprint
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-light text-[#111111]">
                {tabsData[activeTab].title}
              </h3>
              
              <p className="text-xs text-neutral-400 font-mono italic -mt-2">
                {tabsData[activeTab].subtitle}
              </p>
              
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
                {tabsData[activeTab].description}
              </p>
              
              <div className="border-t border-neutral-200 pt-6 space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block uppercase">KEY FEATURES:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {tabsData[activeTab].features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-neutral-600">
                      <Check size={12} className="text-[#111111]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 text-[11px] font-mono">
                <div>
                  <span className="text-neutral-400 block uppercase">TIMELINE</span>
                  <span className="text-[#111111] font-semibold">{tabsData[activeTab].timeline}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase">MATERIALS</span>
                  <span className="text-[#111111] font-semibold block truncate" title={tabsData[activeTab].materials}>
                    {tabsData[activeTab].materials}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] bg-neutral-200 overflow-hidden border border-neutral-200">
                <img 
                  src={tabsData[activeTab].image} 
                  alt={tabsData[activeTab].title} 
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE COST CONFIGURATOR */}
      <section id="estimator" className="px-6 sm:px-12 py-24 bg-neutral-50 border-b border-neutral-150">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">LIVE SIMULATION</span>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#111111]">
              BUDGET & SCOPE <span className="font-normal">CONFIGURATOR</span>
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-light">
              Calibrate your interior layout. Select size, choose styling specifications, and toggle custom add-ons to simulate your estimated cost breakdown in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* CONFIGURATION PANEL */}
            <div className="lg:col-span-7 bg-white border border-neutral-250 p-6 sm:p-10 space-y-8">
              
              {/* Size Select */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block uppercase">01 // SELECT SPACE SIZE</span>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: '2bhk', label: '2 BHK', size: 'Avg 900-1100 sft' },
                    { id: '3bhk', label: '3 BHK', size: 'Avg 1300-1700 sft' },
                    { id: 'villa', label: '4 BHK / VILLA', size: '2500+ sft' }
                  ].map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setHomeSize(size.id)}
                      className={`p-4 border text-left flex flex-col justify-between transition-all ${
                        homeSize === size.id 
                          ? 'border-[#111111] bg-neutral-50' 
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <span className="text-xs font-bold font-mono uppercase tracking-wider">{size.label}</span>
                      <span className="text-[9px] text-neutral-400 mt-2 font-mono">{size.size}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Design Specification Tier */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block uppercase">02 // SELECT DESIGN SPECIFICATION TIER</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'essential', label: 'Essential Minimalist', desc: 'Premium laminates, basic shadow gaps, standard handles' },
                    { id: 'premium', label: 'Signature Modern', desc: 'Matte lacquer, Blum systems, custom veneer, concealed channels' },
                    { id: 'luxury', label: 'Avant-Garde Architectural', desc: 'Microcement coatings, fully integrated custom metal accents, solid wood imports' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setDesignTier(tier.id)}
                      className={`p-4 border text-left flex flex-col justify-between transition-all ${
                        designTier === tier.id 
                          ? 'border-[#111111] bg-neutral-50' 
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <span className="text-xs font-bold font-mono uppercase tracking-wider block">{tier.label}</span>
                      <span className="text-[9px] text-neutral-400 mt-2 leading-relaxed block">{tier.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block uppercase">03 // ARCHITECTURAL UPGRADES</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'falseCeiling', label: 'Concealed Drywall Ceiling', price: '₹80,000', desc: 'Includes dual shadow gap plaster alignments' },
                    { id: 'smartHome', label: 'Smart Home Integration', price: '₹1,50,000', desc: 'Concealed smart relays and automated wall panels' },
                    { id: 'premiumQuartz', label: 'Premium Quartz Countertops', price: '₹60,000', desc: 'Molded seamless double sink transition' },
                    { id: 'softClose', label: 'Soft-Close Kitchen Upgrade', price: '₹75,000', desc: 'Premium Blum Legrabox soft-close sliders' }
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`p-4 border flex items-start gap-3 cursor-pointer transition-all ${
                        addons[item.id] 
                          ? 'border-[#111111] bg-neutral-50' 
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={addons[item.id]}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="mt-1 accent-[#111111] cursor-pointer"
                      />
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider block">{item.label}</span>
                          <span className="text-[10px] font-mono text-[#111111] bg-neutral-100 px-2 py-0.5">{item.price}</span>
                        </div>
                        <span className="text-[9px] text-neutral-400 block mt-1">{item.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* ESTIMATE REPORT */}
            <div className="lg:col-span-5 bg-white border border-neutral-250 p-6 sm:p-10 flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block uppercase mb-4">SPECIFICATION BREAKDOWN</span>
                
                <h3 className="text-xl font-medium uppercase tracking-wider mb-6">ESTIMATION SUMMARY</h3>

                <div className="space-y-4 text-xs font-mono">
                  
                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-400 uppercase">SPACE SELECTION</span>
                    <span className="text-[#111111] font-bold uppercase">{homeSize}</span>
                  </div>

                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-400 uppercase">DESIGN SPEC TIER</span>
                    <span className="text-[#111111] font-bold uppercase">{designTier}</span>
                  </div>

                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-400 uppercase">BASE HARDWARE & TIMBER</span>
                    <span className="text-[#111111] font-bold">₹{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-400 uppercase">ARCHITECTURAL DESIGN FEE (10%)</span>
                    <span className="text-[#111111] font-bold">₹{designFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-400 uppercase">REGULATORY GST (18%)</span>
                    <span className="text-[#111111] font-bold">₹{gst.toLocaleString()}</span>
                  </div>

                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-200">
                <span className="text-[10px] font-mono text-neutral-400 block uppercase">ESTIMATED TOTAL</span>
                <span className="text-4xl font-light tracking-tight text-[#111111] block my-2 font-mono">
                  ₹{Math.round(grandTotal).toLocaleString()}
                </span>
                <p className="text-[10px] text-neutral-400 leading-relaxed uppercase mb-6 font-mono">
                  *This estimate is calculated automatically based on active rates in Hyderabad. Final quote is subject to sight survey.
                </p>

                <a 
                  href="#contact"
                  className="w-full block text-center bg-[#111111] hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest py-4 transition-all"
                >
                  LOCK ESTIMATE & CONSULT
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section id="testimonials" className="px-6 sm:px-12 py-24 border-b border-neutral-150">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">ATTESTATIONS</span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight mt-2 text-[#111111]">
                TRUSTED IN <span className="font-normal">HYDERABAD</span>
              </h2>
            </div>
            <span className="text-[11px] font-mono text-neutral-400 uppercase">
              Average Client Rating: 4.93 / 5.0 (210+ Projects)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              {
                name: "Ananya Deshmukh",
                location: "Appa Junction, Attapur",
                role: "Senior UX Architect",
                text: "Being a designer myself, I was highly specific about alignment, shadow gaps, and clean margins. Decorpot team delivered absolute mathematical precision. The flush pantry cabinets are an absolute engineering marvel.",
                project: "3 BHK Apartment"
              },
              {
                name: "Vikram R. Reddy",
                location: "Rajapushpa Atria, Attapur",
                role: "Infrastructure Director",
                text: "Minimalist execution is difficult because mistakes have nowhere to hide. Decorpot's alignment team did a stellar job with microcement wall plasters and flush-fitting doors. A seamless execution experience.",
                project: "4 BHK Villa"
              },
              {
                name: "Dr. Syed Mushtaq",
                location: "Hyderguda, Attapur",
                role: "Consultant Cardiologist",
                text: "The clutter-free design has completely transformed my rest cycles. The acoustical headboards and concealed warm lighting in the bedroom feel incredibly therapeutic. Absolute value for money.",
                project: "Penthouse Suite"
              }
            ].map((test, i) => (
              <div key={i} className="border border-neutral-200 p-8 flex flex-col justify-between space-y-6">
                <p className="text-neutral-600 text-xs sm:text-sm italic leading-relaxed font-light">
                  "{test.text}"
                </p>
                <div>
                  <span className="text-xs font-bold block">{test.name}</span>
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase mt-0.5">
                    {test.role} // {test.location}
                  </span>
                  <span className="inline-block text-[9px] font-mono text-[#111111] bg-neutral-100 px-2 py-0.5 mt-3 uppercase">
                    {test.project}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ COLLAPSIBLE ACCORDION */}
      <section id="faq" className="px-6 sm:px-12 py-24 bg-neutral-50 border-b border-neutral-150">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">SUPPORT SERVICES</span>
            <h2 className="text-3xl font-light uppercase tracking-tight text-[#111111]">
              FREQUENTLY ASKED <span className="font-normal">QUESTIONS</span>
            </h2>
          </div>

          <div className="border border-neutral-200 bg-white">
            {faqs.map((faq, i) => {
              const isOpen = !!faqOpen[i];
              return (
                <div key={i} className="border-b border-neutral-100 last:border-0">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between text-left p-6 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800">
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-neutral-100 bg-neutral-50/55">
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="px-6 sm:px-12 py-24 border-b border-neutral-150">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">TRANSMISSION CHANNEL</span>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#111111]">
              COMMISSION A <span className="font-normal">SPACE</span>
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
              Are you planning to build or renovate your apartment in Attapur, Hyderabad? Drop your details here. Our design directors will schedule an initial spatial alignment review call within 12 business hours.
            </p>

            <div className="space-y-4 pt-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-neutral-400" />
                <span className="text-neutral-600">Pillar 110, PVNR Expressway, Main Road, Attapur, Hyderabad 500048</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neutral-400" />
                <span className="text-neutral-600">+91 98480 22338 / +91 40 4220 5K5K</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neutral-400" />
                <span className="text-neutral-600">hyderabad@decorpot.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-150 p-6 sm:p-10">
            {submitSuccess ? (
              <div className="bg-white border border-neutral-200 p-8 text-center space-y-4">
                <Sparkles className="size-10 mx-auto text-[#111111]" />
                <h4 className="font-bold text-sm uppercase tracking-wider">Transmission Completed</h4>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-sm mx-auto">
                  Thank you. Your layout coordinates and contact information have been registered. A design director will contact you via WhatsApp shortly.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="text-xs font-bold underline font-mono uppercase text-[#111111] hover:text-neutral-500 mt-4 block mx-auto"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-2">FULL NAME *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Reddy"
                      className="w-full bg-white border border-neutral-200 focus:border-[#111111] outline-none px-4 py-3 text-xs text-[#111111] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-2">MOBILE NUMBER *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98480 XXXXX"
                      className="w-full bg-white border border-neutral-200 focus:border-[#111111] outline-none px-4 py-3 text-xs text-[#111111] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-2">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. vikram@gmail.com"
                      className="w-full bg-white border border-neutral-200 focus:border-[#111111] outline-none px-4 py-3 text-xs text-[#111111] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-2">PROPERTY LOCATION IN HYD *</label>
                    <input 
                      type="text" 
                      name="location" 
                      required
                      value={formState.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Attapur, Gachibowli, Kokapet"
                      className="w-full bg-white border border-neutral-200 focus:border-[#111111] outline-none px-4 py-3 text-xs text-[#111111] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-2">PROJECT DETAILS & OUTLINE</label>
                  <textarea 
                    name="message" 
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe your site status, key design preference (minimalist colors, false ceiling requirements) and budget constraints."
                    className="w-full bg-white border border-neutral-200 focus:border-[#111111] outline-none p-4 text-xs text-[#111111] transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] hover:bg-neutral-800 disabled:bg-neutral-400 text-white font-mono text-xs uppercase tracking-widest py-4 transition-all"
                >
                  {isSubmitting ? 'INITIATING ALIGNMENT TRANSMISSION...' : 'TRANSMIT PROJECT BRIEF'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-neutral-400 px-6 sm:px-12 py-16 text-xs font-mono border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">DECORPOT HYDERABAD</span>
            <p className="text-neutral-500 leading-relaxed">
              Design studio configuring premium residences. Modern, functional, absolute minimalism.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">COORDINATES</span>
            <p className="text-neutral-500 leading-relaxed">
              Attapur Studio, PVNR Expressway,<br />
              Pillar 110, Attapur, Hyderabad, TS 500048
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">CHANNELS</span>
            <a href="mailto:hyderabad@decorpot.com" className="text-neutral-500 hover:text-white transition-colors block">hyderabad@decorpot.com</a>
            <a href="tel:+919848022338" className="text-neutral-500 hover:text-white transition-colors block">+91 98480 22338</a>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">SYSTEM STATUS</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-800 text-emerald-400 border border-neutral-700 text-[10px] uppercase font-bold rounded-full">
              <span className="size-1.5 bg-emerald-400 rounded-full animate-ping"></span>
              Live & Secure
            </span>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-neutral-850 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-neutral-500 gap-4">
          <span>© 2026 DECORPOT HYDERABAD. REGISTERED B2B PARTNER PREVIEW.</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">PHILOSOPHY</a>
            <a href="#portfolio" className="hover:text-white transition-colors">PORTFOLIO</a>
            <a href="#estimator" className="hover:text-white transition-colors">ESTIMATOR</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

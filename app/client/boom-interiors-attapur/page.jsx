"use client";

import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Sliders, 
  Home, 
  Menu, 
  X, 
  ChevronDown, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Star, 
  Lightbulb, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Tv,
  Utensils,
  Briefcase,
  Layers
} from 'lucide-react';

export default function BoomInteriorsAttapurPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('kitchen');
  const [openFaq, setOpenFaq] = useState(null);

  // Budget Calculator States
  const [roomCount, setRoomCount] = useState('3bhk'); // 2bhk | 3bhk | 4bhk
  const [materialTier, setMaterialTier] = useState('premium'); // essential | premium | elite
  const [addons, setAddons] = useState({
    lighting: true,
    motorized: false,
    smartLocks: false,
    smartChimney: true,
    quartz: false
  });
  const [calculatorSaved, setCalculatorSaved] = useState(false);

  // Contact Form States
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    possessDate: 'Within 30 Days',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const services = {
    kitchen: {
      title: "Smart Aero-Kitchens",
      desc: "Superbly organized culinary stations that merge glassmorphic materials with smart appliance ecosystems. Push-to-open touchless cabinets, integrated voice-controlled chimney hoods, frosted-glass open display shelves, and customized deep organizer drawers.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      icon: Utensils,
      highlights: [
        "Smart gesture-controlled lighting",
        "Frosted glass wall cabinetry with LED backlighting",
        "Telescopic pull-out corner utility shelves",
        "Anti-microbial quartz splash guard"
      ]
    },
    living: {
      title: "Fluid Entertainment Zones",
      desc: "High-comfort lounge environments utilizing floating wall partitions and hidden wire channeling. Integrated smart color-changing LED backdrops, frosted acrylic cabinet dividers, and custom-molded media consoles designed for gaming and cinema setups.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      icon: Tv,
      highlights: [
        "Translucent acrylic floating shelves",
        "Soundbar-optimized media console alignment",
        "Smartphone-controlled ambient color scenes",
        "Anti-dust hidden ventilation channels"
      ]
    },
    chambers: {
      title: "IoT Master Chambers",
      desc: "Cozy bedrooms with modern glass panels and integrated smart controls. Wireless charging pads carved directly into oak wood bedside tables, automatic sensor-lit wardrobes, and motorized smart curtain assemblies.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      icon: Home,
      highlights: [
        "Wardrobe drawers with biometric lock boxes",
        "Dual side wireless phone charging docks",
        "Under-bed warm proximity sensors",
        "Sound-dampening soft acoustic board overlays"
      ]
    },
    workspaces: {
      title: "Ergonomic Zen Studios",
      desc: "Sound-isolated homeworking pods featuring modular floating desks and magnetic organizers. Glass whiteboard backdrops, cable organizers, and height-adjustable desk frameworks to boost focus and comfort.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      icon: Briefcase,
      highlights: [
        "Sound-proofing felt wall inserts",
        "Magnetic metal pegboards for devices",
        "Adjustable warm task lighting controls",
        "Sleek modular open book shelving"
      ]
    }
  };

  const calculatorBases = {
    '2bhk': { name: "2 BHK Smart Apartment", price: 290000 },
    '3bhk': { name: "3 BHK Premium Apartment", price: 410000 },
    '4bhk': { name: "4 BHK Luxury Villa", price: 580000 }
  };

  const calculatorTiers = {
    essential: { name: "Essential Smart", multiplier: 1.0, desc: "Standard premium laminates and soft-close hardware." },
    premium: { name: "Premium Glassmorphic", multiplier: 1.25, desc: "Frosted acrylic, smart strip lights, anti-fingerprint layers." },
    elite: { name: "Elite IoT Luxury", multiplier: 1.55, desc: "High-gloss glass cabinets, voice-controlled lifts, maximum tech." }
  };

  const calculatorAddons = [
    { key: 'lighting', name: 'Smart Mood Lighting Package', price: 24000, desc: 'Alexa-connected RGBWW ceiling trim strips & cabinet LEDs.' },
    { key: 'motorized', name: 'Motorized Closet Hangers', price: 35000, desc: 'Sensor-activated automated slide-down wardrobe rails.' },
    { key: 'smartLocks', name: 'Integrated Biometric Furniture Locks', price: 18000, desc: 'Fingerprint-activated drawers and jewelry safe bins.' },
    { key: 'smartChimney', name: 'Voice & Gesture Kitchen Chimney', price: 28000, desc: 'Filterless high-suction smart exhaust hood.' },
    { key: 'quartz', name: 'Premium Calacatta Quartz Counter', price: 45000, desc: 'Scratch and stain resistant engineered quartz.' }
  ];

  // Pricing math
  const baseCost = calculatorBases[roomCount].price;
  const tierMultiplier = calculatorTiers[materialTier].multiplier;
  const addonsCost = calculatorAddons.reduce((sum, item) => {
    return sum + (addons[item.key] ? item.price : 0);
  }, 0);
  const totalCost = Math.round((baseCost * tierMultiplier) + addonsCost);

  const toggleAddon = (key) => {
    setAddons({
      ...addons,
      [key]: !addons[key]
    });
    setCalculatorSaved(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const faqs = [
    {
      q: "What defines the Pastel Glassmorphism style at Boom Interiors?",
      a: "Pastel Glassmorphism is a fresh, futuristic interior trend combining frosted translucent surfaces with rounded corners and colorful soft-glow lighting. We utilize glowing pastel color accents (pinks, blues, and purples) behind premium glass panels, creating a modern, airy space that feels lighter, larger, and highly advanced."
    },
    {
      q: "How does the smart home integration work?",
      a: "We integrate smart controllers, voice assistant compatibility (Google Home / Alexa), and sensors directly into the carpentry phase. This includes motion-activated drawer lights, touch-controlled kitchen backsplashes, built-in wireless charging stations, and automated ambient lighting scenes pre-programmed to your preferences."
    },
    {
      q: "Is the 45-day delivery promise applicable in Attapur, Hyderabad?",
      a: "Yes. Boom Interiors guarantees delivery and installation within 45 days of design sign-off. If we miss this date, we pay you a daily delay penalty. All modular furniture is manufactured at our high-precision automated factory and assembled quickly on-site to minimize mess."
    },
    {
      q: "Do you offer a warranty on modular elements?",
      a: "Yes, we provide an industry-leading 10-year warranty on all modular woodwork, including bubble resistance, moisture seals, and structural hinge wear. Standard electrical components carry their respective brand warranties."
    },
    {
      q: "Can we experience this live at the Attapur Experience Center?",
      a: "Yes. Our Attapur studio is located right on the main road near Pillar 125, featuring interactive kitchen setups, wardrobe motion systems, and smart lighting rooms where you can test the technology and select finishes."
    }
  ];

  return (
    <div className="bg-[#0b0c16] text-[#e0e2ee] font-sans selection:bg-purple-600 selection:text-white relative min-h-screen">
      
      {/* Background Glowing Blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-pink-500/15 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 rounded-full bg-blue-500/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-40 left-1/3 w-80 h-80 rounded-full bg-purple-500/15 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-[180vh] right-[10%] w-80 h-80 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute top-[280vh] left-[5%] w-96 h-96 rounded-full bg-pink-500/10 blur-[120px] pointer-events-none z-0"></div>

      {/* Top Banner */}
      <div className="relative z-50 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 backdrop-blur-md text-[#f1f3f9] py-2.5 px-6 text-center text-xs tracking-wider font-semibold border-b border-white/10">
        ⚡ 45-Day Delivery SLA & 10-Year Warranty Guaranteed in Attapur, Hyderabad
      </div>

      {/* Navbar */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 py-5 lg:px-12 flex justify-between items-center bg-[#0b0c16]/80 backdrop-blur-lg border-b border-white/5 sticky top-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-[#0b0c16]">
            <Cpu className="h-5.5 w-5.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white font-jakarta">
              Boom Interiors
            </span>
            <span className="text-[9px] tracking-widest text-pink-400 uppercase font-bold">Attapur Smart Studio</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-[#b8bccc]">
          <a href="#about" className="hover:text-purple-300 transition-colors">Our Ethos</a>
          <a href="#solutions" className="hover:text-purple-300 transition-colors">Smart Solutions</a>
          <a href="#calculator" className="hover:text-purple-300 transition-colors">Budget Lab</a>
          <a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-purple-300 transition-colors">Faq</a>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 hover:border-pink-400/50 font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Claim Free Smart Plan</span>
            <ArrowRight className="h-4 w-4 text-pink-400" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-2 text-white hover:text-pink-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[81px] z-40 bg-[#0b0c16]/95 backdrop-blur-xl p-6 border-t border-white/5 flex flex-col justify-between shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-5 text-base font-semibold text-[#e0e2ee] pt-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 py-2 border-b border-white/5">Our Ethos</a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 py-2 border-b border-white/5">Smart Solutions</a>
            <a href="#calculator" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 py-2 border-b border-white/5">Budget Lab</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 py-2 border-b border-white/5">Testimonials</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-400 py-2 border-b border-white/5">Faq</a>
          </div>
          <div className="pb-8">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-4 rounded-full font-bold text-sm shadow-xl"
            >
              Claim Free Smart Plan
            </a>
          </div>
        </div>
      )}

      {/* Section 1: Hero (Futuristic Frosted Hero) */}
      <section className="relative z-10 py-16 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold w-fit">
              <Sparkles className="h-4.5 w-4.5 text-pink-400 animate-pulse" />
              <span>Next-Gen Glassmorphic Interiors</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7.5xl font-extrabold tracking-tight text-white leading-tight font-jakarta">
              Futuristic Form.<br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Smart Ergonomics.
              </span>
            </h1>

            <p className="text-sm lg:text-base text-[#b8bccc] leading-relaxed max-w-xl">
              Boom Interiors designs fluid residential spaces configured with frosted translucent panels, 
              soft-glow gradients, and pre-integrated IoT home automation. Elevate your everyday living.
            </p>

            {/* Frosted Translucent Value Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl">
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-lg">
                <span className="text-pink-400 text-xl font-bold block font-jakarta">45 Days</span>
                <span className="text-xs text-[#a0a5b5] mt-1 block">Delivery Guarantee</span>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-lg">
                <span className="text-purple-400 text-xl font-bold block font-jakarta">10 Yrs</span>
                <span className="text-xs text-[#a0a5b5] mt-1 block">Woodwork Warranty</span>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-lg">
                <span className="text-blue-400 text-xl font-bold block font-jakarta">100%</span>
                <span className="text-xs text-[#a0a5b5] mt-1 block">IoT Compatibility</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#calculator" 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 text-white font-bold text-sm px-8 py-4 rounded-full text-center transition-all duration-300 shadow-xl"
              >
                Estimate In Budget Lab
              </a>
              <a 
                href="#contact" 
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-sm font-bold text-center transition-all duration-300"
              >
                Book Free Consultation
              </a>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Image in Frosted Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.2] rounded-[32px] overflow-hidden p-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=1000&q=80" 
                  alt="Glassmorphic Smart living room in Attapur" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/50 via-transparent to-transparent"></div>
              </div>

              {/* Float overlays */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#0b0c16]/70 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0"></div>
                  <span className="text-[11px] text-[#e0e2ee] font-semibold">Active Experience Lounge, Attapur</span>
                </div>
                <span className="text-[10px] text-pink-400 uppercase font-bold tracking-wider">Pillar 125</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 2: About / Vision */}
      <section id="about" className="relative z-10 py-20 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center text-[#0b0c16] shadow-lg">
            <Cpu className="h-6 w-6" />
          </div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-pink-400 font-bold">The Smart Home Evolution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl font-jakarta leading-tight">
            Interiors that respond to your voice, light up on your arrival, and ease your routine.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full my-2"></div>
          <p className="text-sm lg:text-base text-[#b8bccc] leading-relaxed max-w-2xl font-sans">
            Boom Interiors is shifting the paradigm of interior fit-outs. We bypass outdated, chunky laminates 
            and heavy wooden blocks. Instead, we use sleek, frosted glass structures, 
            rounded panels that diffuse light softly, and integrated smart sensors. 
            Designed for busy tech professionals, families, and modern urban spaces in Hyderabad.
          </p>
        </div>
      </section>

      {/* Section 3: Smart Solutions Portfolio (using active tab state) */}
      <section id="solutions" className="relative z-10 py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-purple-400 font-bold">Smart Compartments</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-jakarta">
              Smart Home Modular Solutions
            </h2>
            <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
          </div>

          {/* Glassmorphic Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {Object.keys(services).map((tabKey) => {
              const TabIcon = services[tabKey].icon;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`flex items-center space-x-2.5 px-6 py-3.5 rounded-full border text-xs tracking-wider uppercase font-bold transition-all duration-300 ${
                    activeTab === tabKey 
                      ? "bg-gradient-to-r from-pink-500/20 to-blue-500/20 border-pink-400/50 text-white shadow-lg shadow-pink-500/5" 
                      : "bg-white/5 border-white/5 text-[#a0a5b5] hover:bg-white/10 hover:border-white/10 hover:text-white"
                  }`}
                >
                  <TabIcon className="h-4.5 w-4.5" />
                  <span>{tabKey === 'kitchen' ? 'Kitchens' : tabKey === 'living' ? 'Living' : tabKey === 'chambers' ? 'Chambers' : 'Workspaces'}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-[32px] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            
            {/* Details Left */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-300">
                {React.createElement(services[activeTab].icon, { className: "h-6 w-6" })}
              </div>
              <h3 className="text-2xl lg:text-3.5xl font-extrabold text-white font-jakarta">
                {services[activeTab].title}
              </h3>
              <p className="text-sm text-[#b8bccc] leading-relaxed">
                {services[activeTab].desc}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                <span className="block text-[11px] tracking-wider uppercase text-pink-400 font-bold">Integrated Innovation</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#d1d5db]">
                  {services[activeTab].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tab CTA */}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase font-bold text-pink-400 hover:text-white transition-colors"
                >
                  <span>Explore modular finishes</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl relative group">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0c16]/40 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Interactive Budget Calculator */}
      <section id="calculator" className="relative z-10 py-20 lg:py-28 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-blue-400 font-bold">Interactive Budgeting</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-jakarta">
              Smart Home Budget Lab
            </h2>
            <p className="text-xs lg:text-sm text-[#b8bccc] max-w-xl leading-relaxed font-sans">
              Estimate your smart home interior budget in real-time. Pick your floor plan size, materials tier, and pre-integrated IoT accessories.
            </p>
            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Controls Box (Left) */}
            <div className="lg:col-span-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
              <div className="space-y-6">
                
                {/* 1. Room Count */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-pink-400 font-bold mb-3">1. Select Floor Plan</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {Object.keys(calculatorBases).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setRoomCount(key);
                          setCalculatorSaved(false);
                        }}
                        className={`text-xs py-3.5 rounded-xl border font-bold text-center transition-all ${
                          roomCount === key 
                            ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-400 text-white" 
                            : "bg-white/5 border-white/5 text-[#a0a5b5] hover:bg-white/10 hover:border-white/10"
                        }`}
                      >
                        {key === '2bhk' && "2 BHK"}
                        {key === '3bhk' && "3 BHK"}
                        {key === '4bhk' && "4 BHK Villa"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Material Tier */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-purple-400 font-bold mb-3">2. Select Design & Tech Tier</label>
                  <div className="space-y-2">
                    {Object.keys(calculatorTiers).map((tierKey) => (
                      <button
                        key={tierKey}
                        onClick={() => {
                          setMaterialTier(tierKey);
                          setCalculatorSaved(false);
                        }}
                        className={`w-full flex flex-col items-start p-3.5 rounded-xl border text-left transition-all ${
                          materialTier === tierKey 
                            ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400 text-white" 
                            : "bg-white/5 border-white/5 text-[#a0a5b5] hover:bg-white/10 hover:border-white/10"
                        }`}
                      >
                        <span className="text-xs font-bold uppercase">{calculatorTiers[tierKey].name}</span>
                        <span className="text-[11px] text-[#a0a5b5] mt-1">{calculatorTiers[tierKey].desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Smart Addons */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-blue-400 font-bold mb-3">3. Integrated IoT & Utility Addons</label>
                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {calculatorAddons.map((addon) => (
                      <button
                        key={addon.key}
                        onClick={() => toggleAddon(addon.key)}
                        className={`w-full flex items-start justify-between p-3 rounded-xl border text-left transition-all ${
                          addons[addon.key] 
                            ? "bg-white/10 border-blue-400 text-white" 
                            : "bg-white/5 border-white/5 text-[#a0a5b5] hover:bg-white/10 hover:border-white/10"
                        }`}
                      >
                        <div className="max-w-[75%]">
                          <span className="text-xs font-bold block">{addon.name}</span>
                          <span className="text-[10px] text-[#9095a5] mt-0.5 block leading-relaxed">{addon.desc}</span>
                        </div>
                        <div className="flex flex-col items-end shrink-0 pl-3">
                          <span className="text-xs font-semibold text-blue-300">+₹{(addon.price/1000)}k</span>
                          <div className={`w-4 h-4 rounded-full mt-1.5 flex items-center justify-center ${
                            addons[addon.key] ? "bg-blue-400 text-[#0b0c16]" : "border border-white/20"
                          }`}>
                            {addons[addon.key] && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => setCalculatorSaved(true)}
                  className={`w-full text-center py-4 rounded-full text-xs tracking-wider uppercase font-bold transition-all duration-300 ${
                    calculatorSaved 
                      ? "bg-emerald-600 text-white" 
                      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
                  }`}
                >
                  {calculatorSaved ? "✓ Configuration Locked" : "Save Estimate to Consultation"}
                </button>
              </div>

            </div>

            {/* Cost Breakdown & Visuals (Right) */}
            <div className="lg:col-span-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Subtle glass graphic backdrop */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#9095a5] font-semibold mb-4">Cost Lab Summary</span>
                
                <div className="space-y-4">
                  
                  {/* Base Line */}
                  <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
                    <span className="text-[#a0a5b5] font-semibold">{calculatorBases[roomCount].name}</span>
                    <span>₹{baseCost.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Tier Multiplier Line */}
                  <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
                    <span className="text-[#a0a5b5] font-semibold">
                      Tech Tier: <strong className="text-purple-300 font-normal">{calculatorTiers[materialTier].name}</strong>
                    </span>
                    <span>x{tierMultiplier}</span>
                  </div>

                  {/* Addons List */}
                  <div className="pb-3 border-b border-white/5">
                    <span className="text-xs text-[#a0a5b5] font-semibold block mb-2">Selected Addons:</span>
                    <ul className="space-y-1.5">
                      {calculatorAddons.filter(item => addons[item.key]).map(item => (
                        <li key={item.key} className="flex justify-between items-center text-[11px] text-[#d1d5db]">
                          <span>• {item.name}</span>
                          <span>₹{item.price.toLocaleString('en-IN')}</span>
                        </li>
                      ))}
                      {calculatorAddons.filter(item => addons[item.key]).length === 0 && (
                        <li className="text-[11px] text-[#707585] italic">No optional addons selected.</li>
                      )}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Massive Total Price Display */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <span className="block text-[11px] tracking-widest text-[#a0a5b5] uppercase font-bold mb-1">Estimated Grand Total</span>
                <div className="flex items-baseline space-x-2 text-white">
                  <span className="text-4xl sm:text-5xl font-extrabold font-jakarta tracking-tight">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#9095a5] font-semibold">Turnkey Estimate*</span>
                </div>
                <p className="text-[10px] text-[#707585] mt-3 leading-relaxed font-sans">
                  *This dynamic quote covers factory-finish precision modular woodwork, core Smart IoT hardware, standard wiring fittings, assembly, design layout consultations, and delivery in Attapur. Tax, custom plumbing, and non-standard layout changes extra.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase text-pink-400 font-bold">Client Success Stories</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-jakarta">
              Client Attestations
            </h2>
            <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between shadow-xl shadow-[#0b0c16]/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-pink-400 fill-pink-400" />
                  ))}
                </div>
                <p className="text-sm text-[#e0e2ee] leading-relaxed italic font-sans">
                  "Our 3 BHK apartment near the Attapur PVNR Expressway was fitted out in exactly 43 days. The glassmorphic panels and soft pink LED backlighting behind our media console look incredible. The integration with our Google Home works perfectly. Boom Interiors's budget transparency is outstanding."
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 mt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wider uppercase">Rahul & Swetha K.</h4>
                  <span className="text-[10px] text-pink-400 block mt-0.5 uppercase font-bold">Apartment Owner, Attapur</span>
                </div>
                <span className="text-xs text-[#a0a5b5] font-mono">Commission #5209</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between shadow-xl shadow-[#0b0c16]/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-pink-400 fill-pink-400" />
                  ))}
                </div>
                <p className="text-sm text-[#e0e2ee] leading-relaxed italic font-sans">
                  "I absolute love the Aero-Kitchen. The motion sensors are super responsive and the touchless trash bins are so hygienic. The glass cabinets with internal glowing LEDs make my kitchen feel twice as large. Excellent design expertise and prompt execution!"
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 mt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wider uppercase">Dr. Priya Murthy</h4>
                  <span className="text-[10px] text-pink-400 block mt-0.5 uppercase font-bold">Villa Owner, Happy Homes</span>
                </div>
                <span className="text-xs text-[#a0a5b5] font-mono">Commission #4972</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="relative z-10 py-20 lg:py-28 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-purple-400 font-bold">Got Questions?</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.08] transition-colors"
                >
                  <span className="text-xs sm:text-sm tracking-wider font-bold text-white uppercase pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-4.5 w-4.5 text-purple-400 transition-transform duration-300 shrink-0 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b8bccc] leading-relaxed border-t border-white/5 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: Contact Form */}
      <section id="contact" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="text-[11px] tracking-[0.3em] uppercase text-pink-400 font-bold">Let's Connect</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-jakarta">
              Book Your Free Consultation
            </h2>
            <p className="text-xs lg:text-sm text-[#b8bccc] leading-relaxed max-w-md">
              Register for a complimentary 3D design mapping and smart home layout planning with our design leads in Attapur.
            </p>
            <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[32px] shadow-2xl backdrop-blur-md">
            {formStatus === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-scaleUp">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wider uppercase font-jakarta">Consultation Session Booked!</h3>
                <p className="text-xs text-[#b8bccc] leading-relaxed max-w-sm mx-auto font-sans">
                  Success. A Smart Home Designer from Boom Interiors will call you shortly to confirm your booking and pre-arrange your 3D design mapping.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {calculatorSaved && (
                  <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-2xl flex items-start space-x-3">
                    <Sparkles className="h-4.5 w-4.5 text-pink-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-white uppercase">Budget Lab Setup Attached</span>
                      <span className="block text-[11px] text-[#b8bccc] mt-0.5">
                        We have automatically attached your custom config: <strong>{calculatorBases[roomCount].name}</strong> with <strong>{calculatorTiers[materialTier].name}</strong> material specifications. Estimated price: <strong>₹{totalCost.toLocaleString('en-IN')}</strong>.
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#a0a5b5] mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl focus:border-pink-400 px-4 py-3 text-xs tracking-wider outline-none text-white transition-colors"
                      placeholder="e.g. Swetha Rao"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#a0a5b5] mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl focus:border-pink-400 px-4 py-3 text-xs tracking-wider outline-none text-white transition-colors"
                      placeholder="e.g. +91 81255 13400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#a0a5b5] mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl focus:border-pink-400 px-4 py-3 text-xs tracking-wider outline-none text-white transition-colors"
                      placeholder="e.g. swetha@example.com"
                    />
                  </div>

                  {/* Posession date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#a0a5b5] mb-2">Possession Timeline</label>
                    <select
                      value={formState.possessDate}
                      onChange={(e) => setFormState({...formState, possessDate: e.target.value})}
                      className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl focus:border-pink-400 px-4 py-3 text-xs tracking-wider outline-none text-white transition-colors"
                    >
                      <option value="Within 30 Days">Immediate (Within 30 Days)</option>
                      <option value="1-3 Months">1 to 3 Months</option>
                      <option value="3-6 Months">3 to 6 Months</option>
                      <option value="6+ Months">More than 6 Months</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#a0a5b5] mb-2">Specific Requirements (Optional)</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl focus:border-pink-400 px-4 py-3 text-xs tracking-wider outline-none text-white transition-colors resize-none"
                    placeholder="Tell us about your property in Attapur, Happy Homes, or special automation requirements..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-95 text-white py-4 rounded-full text-xs tracking-widest uppercase font-bold transition-all duration-300 disabled:opacity-50 shadow-xl"
                >
                  {formStatus === 'submitting' ? 'Booking consultation...' : 'Secure My Free Smart Plan'}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* Section 8: Footer */}
      <footer className="relative z-10 bg-[#06070c] text-[#a0a5b5]/90 border-t border-white/5 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
            
            {/* Branding Column */}
            <div className="md:col-span-5 flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center text-[#0b0c16]">
                  <Cpu className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold tracking-tight text-white font-jakarta">
                    Boom Interiors
                  </span>
                  <span className="text-[8px] tracking-widest text-pink-400 uppercase font-bold">Attapur Smart Studio</span>
                </div>
              </div>
              <p className="text-xs text-[#808595] leading-relaxed max-w-sm">
                Next-generation modular interiors with integrated smart tech ecosystems. 
                Delivering high-polish, functional comfort across Hyderabad.
              </p>
              <div className="flex space-x-4">
                <span className="text-[10px] tracking-widest text-[#a0a5b5] uppercase font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5">EST. 2014</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex flex-col space-y-4">
              <h4 className="text-xs tracking-wider uppercase text-white font-bold">Studio Map</h4>
              <ul className="space-y-2 text-xs text-[#808595]">
                <li><a href="#about" className="hover:text-white transition-colors">Our Ethos</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Smart Solutions</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">Budget Lab</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Consultation Booking</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-4 flex flex-col space-y-4">
              <h4 className="text-xs tracking-wider uppercase text-white font-bold">Studio Hub</h4>
              <ul className="space-y-3 text-xs text-[#808595]">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4.5 w-4.5 text-pink-400 shrink-0 mt-0.5" />
                  <span>1st Floor, Smart Tower, Near Pillar 125, Attapur Main Road, Hyderabad, Telangana 500048</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4.5 w-4.5 text-pink-400 shrink-0" />
                  <span>+91 81255 13400 / +91 40 6789 0123</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4.5 w-4.5 text-pink-400 shrink-0" />
                  <span>boominteriors.in@gmail.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#606575] tracking-wider uppercase">
            <span>© {new Date().getFullYear()} Boom Interiors. All Rights Reserved.</span>
            <span className="mt-4 sm:mt-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">Smart Home & Glassmorphic Codes v2.0</span>
          </div>

        </div>
      </footer>

    </div>
  );
}

"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Gem, Crown, Sliders, 
  MessageSquare, Heart, Share2, Instagram, ArrowRight, Shield, 
  Check, Calendar, User, Eye, ShieldCheck, Info, HeartPulse
} from 'lucide-react';

export default function TotaramMurarilalPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('Platinum');
  const [gemstone, setGemstone] = useState('Diamond');
  const [metalWeight, setMetalWeight] = useState(18); // in grams
  const [gemCount, setGemCount] = useState(4); // carats/units

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7250,
    '18K Rose Gold': 6150,
    'Platinum': 4100
  };

  const gemstonePrices = {
    'Diamond': 98000,
    'Emerald': 52000,
    'Ruby': 42000,
    'Pearl': 14000
  };

  const calculatePrice = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const premiumCharges = subtotal * 0.15; // 15% contemporary craft & design premium
    return Math.round(subtotal + premiumCharges);
  };

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '', selectedStyle: 'Contemporary' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Client name is required';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,12}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Enter a valid 10-12 digit phone number';
    }
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.date) {
      errs.date = 'Preferred consultation date is required';
    }
    return errs;
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: `TMS-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Neumorphic Styling Variables (Cool Slate/Gray System)
  const bgMain = 'bg-[#F0F3F6]';
  const textDark = 'text-[#1E293B]';
  
  // Shadows (outset, inset, active)
  const neumorphicOutset = 'shadow-[8px_8px_16px_#c8ccd0,-8px_-8px_16px_#ffffff]';
  const neumorphicInset = 'shadow-[inset_6px_6px_12px_#c8ccd0,inset_-6px_-6px_12px_#ffffff]';
  const neumorphicActive = 'active:shadow-[inset_4px_4px_8px_#c8ccd0,inset_-4px_-4px_8px_#ffffff]';

  // Customizer Visual Colors
  const metalColors = {
    '22K Gold': '#C5A059',
    '18K Rose Gold': '#CC8E8E',
    'Platinum': '#94A3B8'
  };

  const gemColors = {
    'Diamond': '#E0F2FE',
    'Emerald': '#34D399',
    'Ruby': '#F43F5E',
    'Pearl': '#FFFFFF'
  };

  return (
    <div className={`min-h-screen ${bgMain} ${textDark} font-sans selection:bg-[#E11D48]/20 antialiased pb-1`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-serif-tms { font-family: 'Playfair Display', serif; }
        .font-sans-tms { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full bg-[#F0F3F6]/95 backdrop-blur-md border-b border-[#FAF9F6]/10`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col items-start">
              <span className="font-serif-tms text-xl lg:text-2xl tracking-[0.15em] uppercase text-[#1E293B] font-bold">
                Totaram Murarilal & Sons
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase font-semibold text-slate-400 font-sans-tms mt-1">
                Elite Diamond Jewellers • Abids Road
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10 font-sans-tms text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
              <a href="#about" className="hover:text-[#9F1239] transition-colors py-1">Philosophy</a>
              <a href="#workshop" className="hover:text-[#9F1239] transition-colors py-1">Atelier Customizer</a>
              <a href="#showcase" className="hover:text-[#9F1239] transition-colors py-1">Imperial Showcase</a>
              <a href="#intake" className="hover:text-[#9F1239] transition-colors py-1">Booking</a>
            </div>

            <div className="hidden md:block">
              <a 
                href="#intake" 
                className={`inline-flex items-center px-5 py-3 ${neumorphicOutset} ${neumorphicActive} border border-white/50 text-[#1E293B] hover:text-[#9F1239] transition-all text-[10px] uppercase tracking-[0.15em] font-bold rounded-lg`}
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section - Asymmetrical modern layout */}
      <header className="relative pt-16 pb-28 overflow-hidden">
        {/* Background vertical decorative lines */}
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#1E293B]/5 hidden md:block"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#1E293B]/5 translate-x-4 hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Asymmetrical Typography block */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 border border-white/50 rounded-full ${neumorphicInset} text-[#9F1239] text-[9px] font-sans-tms uppercase tracking-[0.15em] w-fit font-bold`}>
                <Sparkles size={10} className="animate-spin" />
                <span>Pioneering Avant-Garde Diamond Designs</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-serif-tms leading-[1.05] tracking-tight text-[#1E293B] font-bold">
                Sculpting <br />
                <span className="italic font-light text-[#9F1239]">Modern Luxury</span>
              </h1>
              
              <p className="text-xs lg:text-sm text-slate-500 font-sans-tms leading-relaxed max-w-xl">
                Totaram Murarilal & Sons represents a dramatic evolution of fine jewellery on Abids Road. We discard heavy gold ornamentation in favor of structural precision: pairing raw platinum, solid rose gold, and certified brilliant-cut solitaires.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4 font-sans-tms">
                <a 
                  href="#workshop" 
                  className="inline-flex justify-center items-center px-6 py-4 bg-[#9F1239] hover:bg-[#881337] text-white font-bold text-[10px] uppercase tracking-[0.25em] rounded-xl transition-all shadow-md active:scale-95"
                >
                  Configure Customizer
                  <ArrowRight size={12} className="ml-2" />
                </a>
                
                <a 
                  href="#showcase" 
                  className={`inline-flex justify-center items-center px-6 py-4 ${neumorphicOutset} ${neumorphicActive} border border-white/50 text-[#1E293B] font-bold text-[10px] uppercase tracking-[0.25em] rounded-xl transition-all`}
                >
                  Browse Showcase
                </a>
              </div>
            </div>

            {/* Right Column: Double-framed abstract Neumorphic visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Decorative outset backframe */}
                <div className={`absolute -inset-4 border border-white/30 translate-x-2 translate-y-2 rounded-2xl ${neumorphicOutset}`}></div>
                
                <div className={`relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] ${neumorphicOutset} p-4 bg-[#F0F3F6] rounded-2xl border border-white/50`}>
                  <div className={`w-full h-full ${neumorphicInset} rounded-xl flex flex-col justify-between p-6 bg-[#F0F3F6]`}>
                    
                    <div className="text-[9px] tracking-[0.2em] uppercase font-sans-tms font-bold text-slate-400">
                      Studio Blueprint / Spec 408
                    </div>

                    {/* Geometrical diamond SVG graphic */}
                    <div className="w-full flex justify-center my-auto">
                      <svg className="w-48 h-48" viewBox="0 0 120 120">
                        {/* Overlapping platinum loops */}
                        <circle cx="60" cy="50" r="28" fill="none" stroke="#94A3B8" strokeWidth="1" />
                        <circle cx="50" cy="65" r="22" fill="none" stroke="#1E293B" strokeWidth="0.75" />
                        <line x1="20" y1="20" x2="100" y2="100" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 3" />
                        
                        {/* Geometrical Diamond center */}
                        <polygon points="60,28 72,40 60,52 48,40" fill="url(#crestGlow)" stroke="#9F1239" strokeWidth="0.5" />
                        <polygon points="50,55 58,63 50,71 42,63" fill="#FAF9F6" stroke="#94A3B8" strokeWidth="0.5" />
                        
                        <defs>
                          <radialGradient id="crestGlow" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F43F5E" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <span className="font-serif-tms text-sm text-[#1E293B] block font-bold">Interlocking Solitaire Hoop</span>
                      <span className="text-[9px] uppercase tracking-widest text-[#9F1239] font-sans-tms font-bold">Platinum & D-Flawless Diamond</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Brand Philosophy Section */}
      <section id="about" className={`py-24 border-t border-[#c8ccd0]/40 bg-[#FAF9F6]/20`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            
            <div className="md:col-span-5">
              <span className="text-[10px] font-bold text-[#9F1239] uppercase tracking-[0.25em] font-sans-tms">The Philosophy</span>
              <h2 className="text-3xl font-serif-tms text-[#1E293B] mt-3 font-bold leading-tight">Design as Structure, Craft as Science</h2>
              <div className="w-12 h-[2px] bg-[#9F1239] mt-6"></div>
            </div>
            
            <div className="md:col-span-7 space-y-6 font-sans-tms text-xs text-slate-500 leading-relaxed">
              <p>
                At Totaram Murarilal & Sons, we treat jewellery as structural engineering. Stripping away heavy cladding, our designs focus on the purity of light refraction within natural diamonds, natural emeralds, and natural rubies.
              </p>
              <p>
                Our Abids Road atelier is a hub of innovative metallurgy. We combine the strength of platinum and the warmth of rose gold, constructing geometric rings, necklaces, and bangles designed for individuals who require distinctive, artistic jewelry.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="workshop" className={`py-24 border-t border-[#c8ccd0]/40`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-[#9F1239] uppercase tracking-[0.25em] font-sans-tms">Atelier Workshop</span>
            <h2 className="text-3xl lg:text-4xl font-serif-tms text-[#1E293B] mt-3 font-bold">Avant-Garde Jewelry Customizer</h2>
            <p className="text-slate-500 text-xs font-sans-tms mt-2">Create your bespoke geometric layout. Dynamically configure metals, highlight diamonds and gems, adjust volume ratios, and check pricing.</p>
            <div className="w-12 h-[2px] bg-[#9F1239] mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Realtime Graphic Representation */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className={`p-8 ${neumorphicOutset} bg-[#F0F3F6] flex flex-col items-center justify-center relative rounded-3xl border border-white/50 min-h-[380px]`}>
                
                <div className="absolute top-4 left-4 text-[9px] tracking-widest uppercase text-slate-400 font-sans-tms font-bold">
                  Bespoke Matrix
                </div>

                {/* SVG Visualizer */}
                <div className="w-52 h-52 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <defs>
                      <radialGradient id="gemMatrix" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={gemColors[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Geometrical structure gridlines */}
                    <line x1="20" y1="60" x2="100" y2="60" stroke="#94A3B8" strokeWidth="0.25" strokeDasharray="3 3" />
                    <line x1="60" y1="20" x2="60" y2="100" stroke="#94A3B8" strokeWidth="0.25" strokeDasharray="3 3" />

                    {/* Structural metal bands */}
                    <path
                      d="M 25,45 L 60,15 L 95,45"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="2.8"
                    />

                    <path
                      d="M 35,65 L 60,95 L 85,65 Z"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="1.5"
                    />

                    {/* Dynamic gemstone points */}
                    {[...Array(Math.min(gemCount, 6))].map((_, idx) => {
                      const coords = [
                        { x: 60, y: 15 },
                        { x: 25, y: 45 },
                        { x: 95, y: 45 },
                        { x: 60, y: 95 },
                        { x: 35, y: 65 },
                        { x: 85, y: 65 }
                      ];
                      const pos = coords[idx % coords.length];
                      return (
                        <circle
                          key={idx}
                          cx={pos.x}
                          cy={pos.y}
                          r="4"
                          fill="url(#gemMatrix)"
                          stroke={metalColors[metalType]}
                          strokeWidth="0.6"
                        />
                      );
                    })}

                    {/* Center Core Floating Gem */}
                    <circle cx="60" cy="55" r="8" fill="none" stroke={metalColors[metalType]} strokeWidth="1" />
                    <circle cx="60" cy="55" r="4.5" fill="url(#gemMatrix)" />
                  </svg>
                </div>

                <div className="text-center font-sans-tms mt-6">
                  <span className="text-[9px] uppercase tracking-widest text-[#9F1239] font-bold">Atelier ID: TMS-GEOM-9</span>
                  <p className="text-sm font-serif-tms text-[#1E293B] mt-1 font-bold">
                    Custom {metalType} {gemstone} Loop
                  </p>
                </div>
              </div>

              <a 
                href="#intake" 
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    notes: `Bespoke Avant-Garde Request: Custom ${metalType} sculptured piece with ${gemCount} ${gemstone}(s) (approx ${metalWeight}g). Studio Quote: ₹${calculatePrice().toLocaleString('en-IN')}`
                  }));
                }}
                className="w-full text-center py-4 bg-[#9F1239] hover:bg-[#881337] text-white font-sans-tms text-[10px] uppercase tracking-[0.2em] font-bold rounded-xl transition-all shadow-md active:scale-95"
              >
                Incorporate Blueprint in Booking Form
              </a>
            </div>

            {/* Customizer Controls Panel */}
            <div className={`lg:col-span-7 p-8 md:p-10 ${neumorphicOutset} bg-[#F0F3F6] rounded-3xl border border-white/50`}>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#c8ccd0]/40">
                <Sliders className="text-[#9F1239]" size={16} />
                <h3 className="font-serif-tms text-xl text-[#1E293B] font-bold">Configuration</h3>
              </div>

              <div className="space-y-8 font-sans-tms text-xs">
                
                {/* Metal Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                    1. Metal Base Selection
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                      <button
                        key={metal}
                        onClick={() => setMetalType(metal)}
                        className={`py-3 px-4 text-center border border-white/40 text-[10px] uppercase tracking-[0.15em] font-bold rounded-xl transition-all ${neumorphicActive} ${
                          metalType === metal
                            ? 'bg-[#9F1239] text-white shadow-inner border-[#9F1239]'
                            : `${neumorphicOutset} text-[#1E293B] hover:text-[#9F1239]`
                        }`}
                      >
                        {metal}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Metal Weight Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">
                      2. Metal Weight (Grams)
                    </label>
                    <span className="font-mono font-bold text-[#1E293B] text-sm">{metalWeight}g</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={metalWeight}
                    onChange={(e) => setMetalWeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#9F1239] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>10g</span>
                    <span>35g</span>
                    <span>60g</span>
                  </div>
                </div>

                {/* Gemstone Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                    3. Highlight Gemstone
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((gem) => (
                      <button
                        key={gem}
                        onClick={() => setGemstone(gem)}
                        className={`py-3 px-2 text-center border border-white/40 text-[10px] uppercase tracking-[0.15em] font-bold rounded-xl transition-all ${neumorphicActive} ${
                          gemstone === gem
                            ? 'bg-[#9F1239] text-white shadow-inner border-[#9F1239]'
                            : `${neumorphicOutset} text-[#1E293B] hover:text-[#9F1239]`
                        }`}
                      >
                        {gem}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gemstone Quantity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">
                      4. Gemstone Volume ({gemstone === 'Pearl' ? 'Units' : 'Carats'})
                    </label>
                    <span className="font-mono font-bold text-[#1E293B] text-sm">
                      {gemCount} {gemstone === 'Pearl' ? 'Pearls' : 'Ct'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={gemCount}
                    onChange={(e) => setGemCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#9F1239] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>1</span>
                    <span>5</span>
                    <span>10</span>
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className={`pt-6 mt-6 border border-white/40 ${neumorphicInset} p-5 rounded-2xl`}>
                  <div className="space-y-2 text-[11px] text-slate-500 font-medium">
                    <div className="flex justify-between">
                      <span>Sculpted base ({metalType} @ ₹{metalPrices[metalType]}/g):</span>
                      <span className="font-mono text-slate-700">₹{(metalWeight * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gemstone ({gemstone} @ ₹{gemstonePrices[gemstone]}/{gemstone === 'Pearl' ? 'unit' : 'ct'}):</span>
                      <span className="font-mono text-slate-700">₹{(gemCount * gemstonePrices[gemstone]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Design Premium & Studio Charges (15%):</span>
                      <span className="font-mono text-slate-700">
                        ₹{Math.round((metalWeight * metalPrices[metalType] + gemCount * gemstonePrices[gemstone]) * 0.15).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="h-[1px] bg-white/40 my-2"></div>
                    <div className="flex justify-between items-end text-xs text-[#1E293B] font-bold">
                      <span className="uppercase tracking-[0.15em]">TOTAL DESIGN ESTIMATE:</span>
                      <span className="font-mono text-base text-[#9F1239]">
                        ₹{calculatePrice().toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Showcase Grid */}
      <section id="showcase" className={`py-24 border-t border-[#c8ccd0]/40 bg-[#FAF9F6]/10`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-[#9F1239] uppercase tracking-[0.25em] font-sans-tms">The Catalog</span>
            <h2 className="text-3xl lg:text-4xl font-serif-tms text-[#1E293B] mt-3 font-bold">Imperial Diamond Showcase</h2>
            <div className="w-12 h-[2px] bg-[#9F1239] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 font-sans-tms">
            {[
              {
                title: "Imperial Solitaire Ring",
                desc: "Certified D-Flawless brilliant-cut solitaire diamond mounted on a sleek double-layered platinum band.",
                price: "₹4,20,000",
                material: "1.5ct Diamond, Platinum Band",
                icon: <Crown size={28} className="text-[#9F1239]/60" />
              },
              {
                title: "Stellar Diamond Choker",
                desc: "Contemporary interlocking geometric loops encrusted with micro-pavé diamonds and ruby drops.",
                price: "₹15,50,000",
                material: "Platinum, VVS1 Diamonds, Ruby",
                icon: <Gem size={28} className="text-[#9F1239]/60" />
              },
              {
                title: "Crimson Ruby Drops",
                desc: "Dangling architectural earrings featuring torched rose gold segments with oval-cut rubies.",
                price: "₹3,80,000",
                material: "18K Rose Gold, Natural Ruby",
                icon: <Sparkles size={28} className="text-[#9F1239]/60" />
              },
              {
                title: "Rose Gold Infinity Band",
                desc: "A continuous loop of floating baguette diamonds claw-set in structured 18K rose gold.",
                price: "₹1,95,000",
                material: "18K Rose Gold, Baguette Diamonds",
                icon: <Award size={28} className="text-[#9F1239]/60" />
              }
            ].map((art, idx) => (
              <div 
                key={idx} 
                className={`bg-[#F0F3F6] p-6 flex flex-col justify-between hover:shadow-[10px_10px_20px_#c8ccd0,-10px_-10px_20px_#ffffff] transition-all duration-300 rounded-2xl border border-white/50 group`}
              >
                <div>
                  <div className={`w-full h-44 ${neumorphicInset} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden bg-[#F0F3F6]`}>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {art.icon}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-white/40 text-[8px] font-bold uppercase tracking-widest bg-[#F0F3F6] rounded text-[#9F1239]">
                      IGI Certified
                    </div>
                  </div>
                  
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#9F1239] font-bold block mb-2">{art.material}</span>
                  <h3 className="font-serif-tms text-sm text-[#1E293B] mb-3 font-semibold group-hover:text-[#9F1239] transition-colors">{art.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6">{art.desc}</p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/40">
                  <span className="font-mono text-xs font-bold text-[#1E293B]">{art.price}</span>
                  <a 
                    href="#intake" 
                    onClick={() => setForm(prev => ({ ...prev, notes: `Inquiry regarding: ${art.title} (${art.price})` }))}
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-[#1E293B] hover:text-[#9F1239] transition-colors"
                  >
                    Discuss <ChevronRight size={10} className="ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Consultation Intake Section */}
      <section id="intake" className={`py-24 border-t border-[#c8ccd0]/40`}>
        <div className="max-w-2xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#9F1239] uppercase tracking-[0.25em] font-sans-tms">The Boutique</span>
            <h2 className="text-3xl font-serif-tms text-[#1E293B] mt-3 font-bold">Virtual Design Consultation</h2>
            <p className="text-slate-500 text-xs font-sans-tms mt-2">Connect virtually with Totaram Murarilal & Sons&apos; curators or organize a private tour at our Abids Road boutique.</p>
            <div className="w-12 h-[2px] bg-[#9F1239] mx-auto mt-6"></div>
          </div>

          <div className={`p-8 md:p-10 ${neumorphicOutset} bg-[#F0F3F6] rounded-3xl border border-white/50`}>
            {submittedData ? (
              <div className="text-center py-6 space-y-6 font-sans-tms">
                <div className={`w-12 h-12 ${neumorphicInset} text-green-600 rounded-full flex items-center justify-center mx-auto border border-white/40`}>
                  <Check size={20} />
                </div>
                <h3 className="font-serif-tms text-xl text-slate-800 font-bold">Session Reserved</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your session reservation is registered. A showroom representative will contact you within 1 hour.
                </p>
                <div className={`bg-[#F0F3F6] ${neumorphicInset} p-5 rounded-2xl max-w-xs mx-auto text-left text-[10px] space-y-2 border border-white/30`}>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">ID:</span> <span className="font-mono font-bold text-slate-700">{submittedData.id}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">DATE:</span> <span className="font-bold text-slate-700">{submittedData.date}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">STYLE SELECT:</span> <span className="font-bold text-slate-700">{submittedData.selectedStyle}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">BOUTIQUE:</span> <span className="font-bold text-slate-700">Abids Road, Hyderabad</span></div>
                </div>
                
                <button
                  onClick={() => setSubmittedData(null)}
                  className={`px-5 py-3 ${neumorphicOutset} ${neumorphicActive} text-[#9F1239] font-bold text-[9px] uppercase tracking-widest rounded-xl transition-all border border-white/40`}
                >
                  Schedule Another Consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-sans-tms text-[10px] tracking-wide">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">CLIENT NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-[#F0F3F6] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all`}
                      placeholder="e.g. Swetha Reddy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">PHONE *</label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-[#F0F3F6] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all`}
                      placeholder="e.g. +91 40 2320 2200"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-3 bg-[#F0F3F6] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all`}
                      placeholder="e.g. swetha@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">CONSULTATION DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-3 bg-[#F0F3F6] border border-white/40 ${neumorphicInset} rounded-xl text-slate-700 focus:outline-none transition-all`}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">DESIGN CATEGORY INTENT</label>
                  <select
                    className={`w-full p-3 bg-[#F0F3F6] border border-white/40 ${neumorphicInset} rounded-xl text-slate-700 focus:outline-none transition-all`}
                    value={form.selectedStyle}
                    onChange={(e) => setForm({ ...form, selectedStyle: e.target.value })}
                  >
                    <option value="Contemporary">Contemporary Minimalist (Platinum & Diamond)</option>
                    <option value="Avant-Garde">Raw Avant-Garde (Asymmetric Gold)</option>
                    <option value="Classic Fusion">Classic Fusion (Ruby & Emerald Sets)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">PROJECT NOTES</label>
                  <textarea
                    rows="4"
                    className={`w-full p-3 bg-[#F0F3F6] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all resize-none`}
                    placeholder="Provide details of specific collections or metal art concepts you wish to co-design during the session..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#9F1239] hover:bg-[#881337] text-white font-sans-tms uppercase tracking-[0.2em] font-bold rounded-xl transition-all shadow-md active:scale-[0.98] disabled:opacity-50 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={12} className="animate-spin" />
                      SUBMITTING ATELIER REQUEST...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      SCHEDULE BOUTIQUE SESSION
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className={`py-24 bg-[#FAF9F6]/20 border-t border-[#c8ccd0]/40`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#9F1239] uppercase tracking-[0.25em] font-sans-tms">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-serif-tms text-[#1E293B] mt-3 font-bold">Collector Reviews</h2>
            <div className="w-12 h-[2px] bg-[#9F1239] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-sans-tms text-xs">
            {[
              {
                text: "Totaram Murarilal & Sons designs are wearable fine art. The asymmetric rose gold and ruby cuffs look incredibly clean yet bold. It is our first choice when shopping on Abids Road.",
                author: "Swetha Reddy",
                location: "Banjara Hills, Hyderabad",
                rating: 5
              },
              {
                text: "The abstract platinum ring collections represent a clean departure from traditional Indian bridal gold. Their design team helped me customise a floating diamond necklace that gets noticed at every event.",
                author: "Nandini Rao",
                location: "Gachibowli, Hyderabad",
                rating: 5
              },
              {
                text: "Exquisite craftsmanship and client support. I co-designed a custom solitaire band through their remote video atelier. The finished diamond has a magnificent brilliance.",
                author: "Kavitha Naidu",
                location: "Hitech City, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div 
                key={i} 
                className={`p-8 bg-[#F0F3F6] flex flex-col justify-between hover:shadow-[10px_10px_20px_#c8ccd0,-10px_-10px_20px_#ffffff] transition-all rounded-2xl border border-white/50`}
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={11} className="text-[#9F1239] fill-[#9F1239]" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/40 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${neumorphicInset} flex items-center justify-center text-xs font-serif-tms font-bold text-[#9F1239] border border-white/40`}>
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#1E293B]">{review.author}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F0F3F6] text-[#1E293B] py-16 border-t border-[#c8ccd0]/40 font-sans-tms text-xs">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid md:grid-cols-3 gap-12">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-serif-tms text-lg uppercase tracking-[0.1em] font-bold">Totaram Murarilal & Sons</h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Contemporary metal art, architectural contours, and certified diamonds. Crafted by hand on Abids Road, Hyderabad.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-serif-tms text-sm uppercase tracking-[0.15em] font-bold text-[#9F1239]">Flagship Atelier</h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#9F1239] shrink-0 mt-0.5" />
                <span>Abids Road, Hyderabad, Telangana 500001.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#9F1239] shrink-0" />
                <span className="font-mono">+91 40 2320 2200</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#9F1239] shrink-0" />
                <span>contact@totarammurarilal.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-serif-tms text-sm uppercase tracking-[0.15em] font-bold text-[#9F1239]">Studio Scheduling</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex justify-between max-w-xs"><span>Monday – Saturday:</span> <span>10:30 AM – 8:30 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-[#9F1239] font-bold">By Appointment Only</span></li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a href="#" className={`p-2 rounded-full ${neumorphicOutset} hover:text-[#9F1239] transition-all`}><Instagram size={14} /></a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-12 pt-8 border-t border-[#c8ccd0]/20 text-center text-[10px] text-slate-400 tracking-wider">
          <p>© {new Date().getFullYear()} TOTARAM MURARILAL & SONS. DESIGNS REGISTERED UNDER INDIAN PATENT AND DESIGNS ACT. ESTIMATES RENDERED DO NOT CONSTITUTE A FORMAL SHOWROOM QUOTE.</p>
        </div>
      </footer>
    </div>
  );
}

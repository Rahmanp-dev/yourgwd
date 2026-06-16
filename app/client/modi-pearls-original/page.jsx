"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Gem, Crown, Sliders, MessageSquare, 
  Heart, Share2, Instagram, ArrowRight, Shield, Check, Calendar, 
  User, CheckCircle2, ChevronDown, Eye, Filter, ShieldCheck, ShoppingBag,
  Maximize2, Orbit, Disc, ToggleLeft
} from 'lucide-react';

export default function ModiPearlsPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('Platinum');
  const [gemstone, setGemstone] = useState('Pearl');
  const [metalWeight, setMetalWeight] = useState(25); // in grams
  const [gemCount, setGemCount] = useState(15); // carats/units

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7300,
    '18K Rose Gold': 6200,
    'Platinum': 4000
  };

  const gemstonePrices = {
    'Pearl': 14000,
    'Diamond': 90000,
    'Emerald': 48000,
    'Ruby': 38000
  };

  const calculatePrice = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const makingCharges = subtotal * 0.12; // 12% making charges
    return Math.round(subtotal + makingCharges);
  };

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-12 digit phone number';
    }
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!form.date) errs.date = 'Preferred consultation date is required';
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
        id: `MP-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Color mappings for visualizer
  const metalColors = {
    '22K Gold': '#F59E0B',
    '18K Rose Gold': '#F472B6',
    'Platinum': '#94A3B8'
  };

  const gemColors = {
    'Pearl': '#F8FAFC',
    'Diamond': '#38BDF8',
    'Emerald': '#34D399',
    'Ruby': '#F87171'
  };

  return (
    <div className="min-h-screen bg-[#02050d] text-slate-200 font-sans selection:bg-teal-500/20 antialiased overflow-x-hidden">
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display-mp { font-family: 'Cinzel', serif; }
        .font-tech-mp { font-family: 'Space Grotesk', sans-serif; }
        .font-body-mp { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Grid backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[550px] h-[550px] bg-slate-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#02050d]/80 border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col">
              <span className="font-display-mp text-2xl lg:text-3xl tracking-widest uppercase text-slate-100">
                Modi Pearls
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-teal-400 font-tech-mp mt-0.5">
                Charminar Heritage // Est 1992
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10 font-tech-mp text-xs uppercase tracking-widest font-semibold text-slate-400">
              <a href="#heritage" className="hover:text-teal-400 transition-colors py-1 relative group">
                Heritage
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all group-hover:w-full" />
              </a>
              <a href="#customizer" className="hover:text-teal-400 transition-colors py-1 relative group">
                Bespoke Lab
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all group-hover:w-full" />
              </a>
              <a href="#collections" className="hover:text-teal-400 transition-colors py-1 relative group">
                Collections
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all group-hover:w-full" />
              </a>
              <a href="#consultation" className="hover:text-teal-400 transition-colors py-1 relative group">
                Reserve
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all group-hover:w-full" />
              </a>
            </div>

            <div className="hidden md:block">
              <a 
                href="#consultation" 
                className="inline-flex items-center px-6 py-3 border border-teal-500/30 text-teal-400 bg-teal-950/20 hover:bg-teal-400 hover:text-[#02050d] hover:border-teal-400 transition-all text-xs uppercase tracking-widest font-bold font-tech-mp active:scale-[0.97]"
              >
                Book Virtual Suite
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative pt-20 pb-28 border-b border-teal-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/20 border border-teal-500/20 text-teal-400 text-xs font-tech-mp tracking-wider w-fit mx-auto md:mx-0">
                <Orbit size={12} className="animate-spin duration-10000" />
                <span>ORBITAL PEARL INITIATIVE // EST-1992</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display-mp leading-tight text-white tracking-widest">
                Liquid Platinum <br />
                <span className="text-teal-400 font-sans italic font-light">&amp; Radiant Pearls</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-400 font-body-mp leading-relaxed max-w-lg mx-auto md:mx-0">
                Located near the historic Charminar in Laad Bazar, Modi Pearls crafts a new perspective on classic basra and south sea pearls. Embodying our Cyber-Platinum layout, we fuse smooth platinum frames with clean teal-glowing parameters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 font-tech-mp">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-teal-500 text-[#02050d] hover:bg-teal-400 font-bold text-xs uppercase tracking-widest transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                >
                  Configure Custom Strand
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#collections" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-teal-500/30 hover:bg-teal-950/20 text-teal-400 font-semibold text-xs uppercase tracking-widest transition-all active:scale-[0.97]"
                >
                  View Collections
                </a>
              </div>
            </div>

            {/* Glowing Symmetrical Constellation Layout */}
            <div className="relative flex justify-center">
              <div className="relative w-[340px] h-[440px] md:w-[400px] md:h-[500px] border border-teal-500/20 p-4 bg-[#03081a]/80 shadow-[0_0_30px_rgba(20,184,166,0.05)] rounded-full">
                <div className="w-full h-full border border-teal-500/10 flex flex-col justify-between items-center p-8 relative overflow-hidden bg-[#02040d] rounded-full">
                  <div className="absolute top-4 left-4 text-[9px] font-tech-mp text-teal-500/30">ORBITAL // ACTIVE</div>
                  <div className="absolute bottom-4 right-4 text-[9px] font-tech-mp text-teal-500/30">MODI_PEARLS_HQ</div>
                  
                  {/* Concentric spinning rings */}
                  <div className="absolute inset-0 border border-teal-500/5 rounded-full animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-10 border border-teal-500/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

                  <div className="w-full flex justify-between items-center text-[10px] text-slate-500 font-tech-mp tracking-widest uppercase">
                    <span>LAAD_BAZAR</span>
                    <span>1992</span>
                  </div>

                  {/* Symmetrical Pearl Constellation Graphic */}
                  <div className="my-auto flex flex-col items-center relative z-10">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Core Orbit Line */}
                        <circle cx="50" cy="50" r="32" fill="none" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-40" />
                        <circle cx="50" cy="50" r="22" fill="none" stroke="#94a3b8" strokeWidth="0.5" className="opacity-30" />
                        
                        {/* Outer Glow Ring */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#14b8a6" strokeWidth="0.25" className="opacity-25" />

                        {/* Pearls on the orbital path */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 360) / 8;
                          const r = 32;
                          const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                          const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                          return (
                            <g key={i}>
                              <circle cx={x} cy={y} r="2.5" fill="#f8fafc" stroke="#14b8a6" strokeWidth="0.25" />
                              <circle cx={x} cy={y} r="1.5" fill="#ffffff" />
                            </g>
                          );
                        })}

                        {/* Inner glowing core */}
                        <circle cx="50" cy="50" r="6" fill="#38bdf8" className="animate-pulse" />
                        <circle cx="50" cy="50" r="4" fill="#ffffff" />
                      </svg>
                    </div>
                    
                    <span className="font-display-mp text-lg text-white mt-6 tracking-widest text-center">Orbital Basra Collar</span>
                    <span className="text-[9px] uppercase tracking-widest text-teal-400 font-tech-mp mt-1">HERITAGE CYBER LABS</span>
                  </div>

                  <div className="w-full flex justify-center gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" />
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 border-b border-teal-500/10 bg-[#04081c]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-mp">// THE CHRONICLES OF LUSTER</span>
            <h2 className="text-3xl lg:text-4xl font-display-mp text-white mt-3">Historic Charminar Pearls Refined via Technology</h2>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 font-body-mp">
            <div className="flex flex-col items-center text-center space-y-4 p-6 border border-teal-500/5 bg-[#02050d]/80 hover:border-teal-500/20 transition-all">
              <div className="w-16 h-16 border border-teal-500/20 flex items-center justify-center text-teal-400 bg-teal-950/20 rounded-full">
                <Award size={24} />
              </div>
              <h3 className="font-tech-mp text-lg text-white tracking-widest uppercase font-semibold">Historic Location</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Situated in the shadows of the iconic Charminar in Laad Bazar since 1992, we have served global patrons with pure Basra pearl strings.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 border border-teal-500/5 bg-[#02050d]/80 hover:border-teal-500/20 transition-all">
              <div className="w-16 h-16 border border-teal-500/20 flex items-center justify-center text-teal-400 bg-teal-950/20 rounded-full">
                <Crown size={24} />
              </div>
              <h3 className="font-tech-mp text-lg text-white tracking-widest uppercase font-semibold">Cybernetic Alignment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                By infusing classical organic pearl strings with space-age gray platinum spacers and electric teal glowing accents, we define modern luxury.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 border border-teal-500/5 bg-[#02050d]/80 hover:border-teal-500/20 transition-all">
              <div className="w-16 h-16 border border-teal-500/20 flex items-center justify-center text-teal-400 bg-teal-950/20 rounded-full">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-tech-mp text-lg text-white tracking-widest uppercase font-semibold">Laboratory Assurance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each natural pearl is scientifically verified via custom digital assays, ensuring maximum reflection index and heirloom-grade longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-24 border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-mp">// BESPOKE ORBIT CONFIGURATOR</span>
            <h2 className="text-3xl lg:text-4xl font-display-mp text-white mt-3">Interactive Pearl &amp; Metal Lab</h2>
            <p className="text-slate-400 text-xs font-body-mp mt-2">Interact with precious metal bases, scale premium gemstones, and compute dynamic cost metrics instantly.</p>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Control Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 border border-teal-500/20 bg-[#04091f] shadow-lg rounded-none relative">
              <div className="absolute top-2 right-2 text-[8px] font-tech-mp text-teal-400/40">ENGINE_MP_v2.1 // ON</div>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-teal-500/10 font-tech-mp">
                <Sliders className="text-teal-400" size={18} />
                <h3 className="text-lg text-white font-bold tracking-wider uppercase">Interactive Specs</h3>
              </div>

              <div className="space-y-8 font-tech-mp text-xs">
                {/* Metal Selection */}
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-slate-400 mb-4">
                    [1] SELECT BASE ALLOY MATERIAL
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                      <button
                        key={metal}
                        onClick={() => setMetalType(metal)}
                        className={`py-3 px-4 text-center border text-xs uppercase tracking-wider font-bold transition-all active:scale-[0.95] ${
                          metalType === metal
                            ? 'border-teal-400 bg-teal-950/40 text-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.3)]'
                            : 'border-teal-500/10 bg-[#02050d]/85 text-slate-300 hover:border-teal-400/40'
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
                    <label className="uppercase tracking-wider font-semibold text-slate-400">
                      [2] ALLOY CONFIGURATION (GRAMS)
                    </label>
                    <span className="font-mono font-bold text-teal-400 text-sm">{metalWeight} g</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={metalWeight}
                    onChange={(e) => setMetalWeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 accent-teal-400 cursor-pointer rounded-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>10g</span>
                    <span>45g</span>
                    <span>80g</span>
                  </div>
                </div>

                {/* Gemstone Selection */}
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-slate-400 mb-4">
                    [3] PRIMARY CORE GEMSTONE
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {['Pearl', 'Diamond', 'Emerald', 'Ruby'].map((gem) => (
                      <button
                        key={gem}
                        onClick={() => setGemstone(gem)}
                        className={`py-3 px-2 text-center border text-[10px] uppercase tracking-wider font-bold transition-all active:scale-[0.95] ${
                          gemstone === gem
                            ? 'border-teal-400 bg-teal-950/40 text-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.3)]'
                            : 'border-teal-500/10 bg-[#02050d]/85 text-slate-300 hover:border-teal-400/40'
                        }`}
                      >
                        {gem}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gemstone quantity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="uppercase tracking-wider font-semibold text-slate-400">
                      [4] GEMSTONE MULTIPLIER ({gemstone === 'Pearl' ? 'STRAND UNITS' : 'CARATS'})
                    </label>
                    <span className="font-mono font-bold text-teal-400 text-sm">
                      {gemCount} {gemstone === 'Pearl' ? 'Pearls' : 'Ct'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="40"
                    value={gemCount}
                    onChange={(e) => setGemCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 accent-teal-400 cursor-pointer rounded-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>2</span>
                    <span>21</span>
                    <span>40</span>
                  </div>
                </div>

                {/* Live Estimator Summary */}
                <div className="pt-6 mt-6 border-t border-teal-500/20 bg-[#02050d]/90 p-5 border shadow-inner">
                  <div className="space-y-2 text-[11px] text-slate-400 font-medium">
                    <div className="flex justify-between">
                      <span>Metal base ({metalType} @ ₹{metalPrices[metalType]}/g):</span>
                      <span className="font-mono text-slate-200">₹{(metalWeight * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gemstone base ({gemstone} @ ₹{gemstonePrices[gemstone]}/{gemstone === 'Pearl' ? 'unit' : 'ct'}):</span>
                      <span className="font-mono text-slate-200">₹{(gemCount * gemstonePrices[gemstone]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Refining &amp; Making Charges (12%):</span>
                      <span className="font-mono text-slate-200">
                        ₹{Math.round((metalWeight * metalPrices[metalType] + gemCount * gemstonePrices[gemstone]) * 0.12).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="h-[1px] bg-teal-500/10 my-2" />
                    <div className="flex justify-between items-end text-xs text-white pt-2">
                      <span className="uppercase tracking-widest text-teal-400">ESTIMATED VALUATION:</span>
                      <span className="font-mono text-base text-teal-300 shadow-[0_0_10px_rgba(20,184,166,0.3)] px-2 bg-teal-950/30 border border-teal-500/20">
                        ₹{calculatePrice().toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Realtime Mock Visual */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-36">
              <div className="p-8 border border-teal-500/20 bg-[#02050d] flex flex-col items-center justify-center relative shadow-lg min-h-[380px] rounded-none">
                <div className="absolute top-3 left-3 text-[9px] tracking-widest uppercase text-teal-400/50 font-tech-mp">
                  CYBERNETIC_RENDER // GRID_A2
                </div>

                {/* SVG Visualizer */}
                <div className="w-56 h-56 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="necklaceMetalMp" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="80%" stopColor={metalColors[metalType]} />
                        <stop offset="100%" stopColor="#02050d" />
                      </radialGradient>
                      <radialGradient id="jewelGlowMp" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="100%" stopColor={gemColors[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Concentric telemetry lines */}
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#14b8a6" strokeWidth="0.1" strokeDasharray="2 6" className="opacity-30" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#14b8a6" strokeWidth="0.2" className="opacity-25" />

                    {/* Double Orbital Path */}
                    <path
                      d="M 24,30 A 26,28 0 0,0 76,30"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Symmetrical Gemstones aligned on orbital lines */}
                    {[...Array(Math.min(gemCount, 14))].map((_, idx) => {
                      const pct = idx / (Math.min(gemCount, 14) - 1 || 1);
                      const angle = Math.PI + 0.15 + pct * (Math.PI - 0.3); // spread around lower arc
                      const rX = 23;
                      const rY = 25;
                      const x = 50 + rX * Math.cos(angle);
                      const y = 30 - rY * Math.sin(angle);
                      return (
                        <g key={idx}>
                          <line x1="50" y1="30" x2={x} y2={y} stroke="#14b8a6" strokeWidth="0.1" className="opacity-20" />
                          <circle
                            cx={x}
                            cy={y}
                            r={gemstone === 'Pearl' ? '2.8' : '1.8'}
                            fill="url(#jewelGlowMp)"
                            stroke={metalColors[metalType]}
                            strokeWidth="0.3"
                          />
                        </g>
                      );
                    })}

                    {/* Center Cluster */}
                    <circle cx="50" cy="58" r="5" fill="none" stroke={metalColors[metalType]} strokeWidth="1" />
                    <circle cx="50" cy="58" r="3" fill="url(#jewelGlowMp)" stroke="#FFFFFF" strokeWidth="0.2" />
                  </svg>
                </div>

                <div className="text-center font-tech-mp mt-6">
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Telemetry Specs</h4>
                  <p className="text-sm font-display-mp text-white mt-1">
                    Custom {metalType} // {gemstone} Unit
                  </p>
                </div>
              </div>

              <a 
                href="#consultation" 
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    notes: `Bespoke Customizer Specification: Custom ${metalType} set loaded with ${gemCount} ${gemstone}(s), weighing ${metalWeight}g. Quote Estimate: ₹${calculatePrice().toLocaleString('en-IN')}`
                  }));
                }}
                className="w-full text-center py-4 bg-teal-500 hover:bg-teal-400 text-[#02050d] font-tech-mp text-xs uppercase tracking-widest font-bold transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              >
                Apply Telemetry To Consultation Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-24 border-b border-teal-500/10 bg-[#04081c]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-mp">// CLASS-A ARCHIVES</span>
            <h2 className="text-3xl lg:text-4xl font-display-mp text-white mt-3">Signature Pearl Collections</h2>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 font-body-mp">
            {[
              {
                title: "Chronos Basra Pearl String",
                desc: "An incredible triple-strand basra pearl necklace coupled with structured gray platinum links and laser-carved spacers.",
                price: "₹3,50,000",
                spec: "Natural Basra Pearls, Platinum"
              },
              {
                title: "Cyber-Orbital Tahitian Collar",
                desc: "Rare iridescent dark Tahitian pearls mounted on a sleek geometric teal-anodized 18K rose gold collar.",
                price: "₹5,10,000",
                spec: "Tahitian Pearls, 18K Rose Gold"
              },
              {
                title: "Radiant Nizam Pearl Choker",
                desc: "Classic Nizami choker incorporating four rows of select micro-pearls and a center ruby plate with teal glowing accents.",
                price: "₹4,20,000",
                spec: "Nizam Micro-Pearls, 22K Gold"
              },
              {
                title: "Neural Pearl Drop Earrings",
                desc: "Symmetrical drop earrings containing natural white pearls suspended from geometric platinum links.",
                price: "₹1,80,000",
                spec: "Premium Natural Pearls, Platinum"
              }
            ].map((col, idx) => (
              <div key={idx} className="bg-[#02050d]/90 border border-teal-500/10 p-6 flex flex-col justify-between hover:border-teal-400/40 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)] transition-all rounded-none group">
                <div>
                  <div className="w-full h-48 bg-[#04081c] border border-teal-500/5 mb-6 flex items-center justify-center relative overflow-hidden">
                    <Gem size={36} className="text-teal-500/40 group-hover:scale-110 group-hover:text-teal-400 transition-all duration-300" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-teal-500/20 text-[9px] font-tech-mp uppercase tracking-wider bg-[#02050d] text-teal-400">
                      SECURE_LAB
                    </div>
                  </div>
                  <span className="text-[10px] font-tech-mp uppercase tracking-widest text-teal-400 font-bold block mb-2">{col.spec}</span>
                  <h3 className="font-display-mp text-base text-white mb-3 group-hover:text-teal-300 transition-colors">{col.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">{col.desc}</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-teal-500/5">
                  <span className="font-mono text-sm font-bold text-teal-300">{col.price}</span>
                  <a 
                    href="#consultation" 
                    onClick={() => setForm(prev => ({ ...prev, notes: `Inquiry regarding Class-A item: ${col.title} (${col.price})` }))}
                    className="inline-flex items-center text-[10px] font-tech-mp font-bold uppercase tracking-widest text-teal-400 group-hover:text-teal-300 active:scale-[0.95]"
                  >
                    INQUIRE <ChevronRight size={10} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Design Consultation Section */}
      <section id="consultation" className="py-24 border-b border-teal-500/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-mp">// VIDEO CONSOLE SYSTEMS</span>
            <h2 className="text-3xl lg:text-4xl font-display-mp text-white mt-3">Virtual Design Consultation</h2>
            <p className="text-slate-400 text-xs font-body-mp mt-2">Request an encrypted video call or schedule a private viewing in our historical Laad Bazar showroom near Charminar.</p>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="p-8 md:p-12 border border-teal-500/20 bg-[#04091f] shadow-lg rounded-none">
            {submittedData ? (
              <div className="text-center py-8 space-y-6 font-tech-mp">
                <div className="w-16 h-16 bg-teal-950 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                  <Check size={28} />
                </div>
                <h3 className="font-display-mp text-2xl text-white">Consultation Reserved</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed font-body-mp">
                  Secure conference code generated for <strong className="text-slate-200">{submittedData.name}</strong>. A Modi Pearls designer will contact you to verify details in 2 hours.
                </p>
                <div className="bg-[#02050d]/90 border border-teal-500/20 p-5 rounded-none max-w-sm mx-auto text-left text-xs space-y-2">
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">SECURE ID:</span> <span className="font-mono font-bold text-teal-400">{submittedData.id}</span></div>
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">RESERVED DATE:</span> <span className="font-bold text-slate-300">{submittedData.date}</span></div>
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">CLIENT TEL:</span> <span className="font-mono font-bold text-slate-300">{submittedData.phone}</span></div>
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">HQ SHOWROOM:</span> <span className="font-bold text-slate-300">Near Charminar, Laad Bazar</span></div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-3 border border-teal-500/30 text-teal-400 hover:bg-teal-950/20 uppercase text-xs tracking-widest font-bold font-tech-mp transition-all active:scale-[0.95]"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-tech-mp text-xs">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 font-semibold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-[#02050d] border ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-200`}
                      placeholder="e.g. Ananya Rao"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[10px] font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-400 font-semibold uppercase tracking-wider mb-2">PHONE NUMBER *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-[#02050d] border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-200`}
                      placeholder="e.g. +91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[10px] font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 font-semibold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-3.5 bg-[#02050d] border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-200`}
                      placeholder="e.g. ananya@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[10px] font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-400 font-semibold uppercase tracking-wider mb-2">PREFERRED CONSULTATION DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-3.5 bg-[#02050d] border ${errors.date ? 'border-red-500' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-300`}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p className="text-red-500 mt-1 text-[10px] font-medium">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold uppercase tracking-wider mb-2">NOTES &amp; BESPOKE REQUESTS</label>
                  <textarea
                    rows="4"
                    className="w-full p-3.5 bg-[#02050d] border border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)] rounded-none focus:outline-none transition-all resize-none text-slate-300"
                    placeholder="Provide specific pearl string layouts, platinum clasp requirements, or details..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-[#02050d] font-bold uppercase tracking-widest transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      ESTABLISHING CRYPTO CONSOLE...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      RESERVE SECURE SESSION
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 border-b border-teal-500/10 bg-[#04081c]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-mp">// VERIFIED REPUTATION DATA</span>
            <h2 className="text-3xl lg:text-4xl font-display-mp text-white mt-3">Hyderabad Client Stories</h2>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-body-mp">
            {[
              {
                text: "Absolutely beautiful. Modi Pearls at Laad Bazar has managed to bring Nizami pearls into the 21st century. Their cyber-platinum collection is stunning.",
                author: "Ayesha Khan",
                location: "Charminar, Hyderabad",
                rating: 5
              },
              {
                text: "The custom pearl calculator was very helpful. I designed a custom gold and Tahitian pearl choker online, booked a session, and picked it up in pristine condition.",
                author: "Sneha Naidu",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "Their remote consultation over high-def video showed the luster of the pearls beautifully. Highly secure delivery to Hitec City.",
                author: "Rahul Deshmukh",
                location: "Hitec City, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border border-teal-500/10 bg-[#02050d]/90 flex flex-col justify-between hover:border-teal-400/30 transition-all rounded-none">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={12} className="text-teal-400 fill-teal-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic font-light font-body-mp">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-teal-500/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-teal-950 border border-teal-500/25 flex items-center justify-center text-xs font-tech-mp font-bold text-teal-400">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-tech-mp">{review.author}</h4>
                    <span className="text-[10px] text-slate-500 font-tech-mp">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#01030a] text-slate-400 py-16 border-t border-teal-500/20 font-tech-mp text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1: Store Bio */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-display-mp text-lg uppercase tracking-wider text-white">Modi Pearls</h3>
            <p className="text-slate-400 leading-relaxed max-w-sm font-body-mp text-xs font-light">
              Crafting premium certified natural pearls, liquid-metal chains, and contemporary cyber-platinum strings near the iconic Charminar since 1992.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-teal-400 uppercase tracking-widest font-bold text-xs">// CONSOLE CONTACTS</h3>
            <ul className="space-y-3 font-light">
              <li className="flex justify-center md:justify-start items-start gap-2.5">
                <MapPin size={14} className="text-teal-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">Near Charminar, Laad Bazar, Hyderabad, Telangana 500002.</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <Phone size={14} className="text-teal-400 shrink-0" />
                <span className="font-mono text-[11px]">+91 44 6694 9292</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <Mail size={14} className="text-teal-400 shrink-0" />
                <span className="text-[11px]">support@modipearls.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & System Status */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-teal-400 uppercase tracking-widest font-bold text-xs">// SECURE STATUS</h3>
            <ul className="space-y-3 text-slate-400 font-light">
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <Clock size={14} className="text-teal-400" />
                <span className="text-[11px]">Daily: 10:00 AM - 9:00 PM IST</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                <span className="text-teal-400 font-bold text-[10px]">ALL SYSTEMS OPERATIONAL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-teal-500/5 text-center text-[10px] text-slate-600">
          <p>© 2026 Modi Pearls. All rights reserved. Encryption standard TLS 1.3 // Charminar Division.</p>
        </div>
      </footer>
    </div>
  );
}

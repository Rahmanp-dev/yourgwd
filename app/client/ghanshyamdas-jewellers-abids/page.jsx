"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, HelpCircle, RefreshCw, Gem, Crown, Sliders, MessageSquare, 
  Heart, Share2, Instagram, ArrowRight, Shield, Check, Calendar, 
  User, CheckCircle2, ChevronDown, Eye, Filter, ShieldCheck, ShoppingBag, 
  Maximize2, Laptop, HardDrive, Cpu
} from 'lucide-react';

export default function GhanshyamdasJewellersPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Diamond');
  const [metalWeight, setMetalWeight] = useState(30); // in grams
  const [gemCount, setGemCount] = useState(5); // carats/units

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7500,
    '18K Rose Gold': 6400,
    'Platinum': 4200
  };

  const gemstonePrices = {
    'Diamond': 95000,
    'Emerald': 50000,
    'Ruby': 40000,
    'Pearl': 15000
  };

  const calculatePrice = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const makingCharges = subtotal * 0.15; // 15% making charges
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
        id: `GDJ-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Color mappings for visualizer
  const metalColors = {
    '22K Gold': '#F59E0B',
    '18K Rose Gold': '#F472B6',
    'Platinum': '#CBD5E1'
  };

  const gemColors = {
    'Diamond': '#22D3EE',
    'Emerald': '#10B981',
    'Ruby': '#EF4444',
    'Pearl': '#F8FAFC'
  };

  return (
    <div className="min-h-screen bg-[#060814] text-slate-100 font-sans selection:bg-teal-500/20 antialiased overflow-x-hidden">
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-display-gdj { font-family: 'Prata', serif; }
        .font-tech-gdj { font-family: 'Space Grotesk', sans-serif; }
        .font-body-gdj { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Cyber/Grid backgrounds */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060814]/80 border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col">
              <span className="font-display-gdj text-2xl lg:text-3xl tracking-wider uppercase text-slate-100 flex items-center gap-2">
                Ghanshyamdas
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-teal-400 font-tech-gdj mt-0.5">
                Abids Road Showroom // Est 1982
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10 font-tech-gdj text-xs uppercase tracking-widest font-semibold text-slate-400">
              <a href="#heritage" className="hover:text-teal-400 transition-colors py-1 relative group">
                Heritage
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all group-hover:w-full" />
              </a>
              <a href="#customizer" className="hover:text-teal-400 transition-colors py-1 relative group">
                Bespoke Engine
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all group-hover:w-full" />
              </a>
              <a href="#collections" className="hover:text-teal-400 transition-colors py-1 relative group">
                Vault
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
                className="inline-flex items-center px-6 py-3 border border-teal-500/30 text-teal-400 bg-teal-950/20 hover:bg-teal-400 hover:text-[#060814] hover:border-teal-400 transition-all text-xs uppercase tracking-widest font-bold font-tech-gdj active:scale-[0.97]"
              >
                Secure Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative pt-16 pb-28 border-b border-teal-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-teal-950/20 border border-teal-500/20 text-teal-400 text-xs font-tech-gdj tracking-widest w-fit mx-auto md:mx-0">
                <Cpu size={12} className="animate-pulse" />
                <span>CYBER-PLATINUM DESIGN DIVISION // AT-109</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display-gdj leading-tight text-white tracking-wide">
                Futuristic Metal <br />
                <span className="text-teal-400 font-sans italic font-light">&amp; Royal Basra Pearls</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-400 font-body-gdj leading-relaxed max-w-lg mx-auto md:mx-0">
                Ghanshyamdas Jewellers merges the high-contrast aesthetic of Cyber-Platinum with legendary Abids Road craftsmanship. Experience sharp, precision-cut teal borders, silver/teal glowing gems, and holographic Nizam heritage jewelry designed for the next era of legacy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 font-tech-gdj">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-teal-500 text-[#060814] hover:bg-teal-400 font-bold text-xs uppercase tracking-widest transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                >
                  Launch Customizer Engine
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#collections" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-teal-500/30 hover:bg-teal-950/20 text-teal-400 font-semibold text-xs uppercase tracking-widest transition-all active:scale-[0.97]"
                >
                  Explore The Vault
                </a>
              </div>
            </div>

            {/* Futuristic Hologram Frame */}
            <div className="relative flex justify-center">
              <div className="relative w-[340px] h-[440px] md:w-[400px] md:h-[500px] border border-teal-500/20 p-4 bg-[#0a0f26]/80 shadow-[0_0_30px_rgba(20,184,166,0.05)] rounded-none">
                <div className="w-full h-full border border-teal-500/10 flex flex-col justify-between items-center p-8 relative overflow-hidden bg-[#050816]">
                  {/* Digital crosshairs/grids */}
                  <div className="absolute top-2 left-2 text-[9px] font-tech-gdj text-teal-500/30">SYS.ON // GRID_ACTIVE</div>
                  <div className="absolute bottom-2 right-2 text-[9px] font-tech-gdj text-teal-500/30">REF. GD-1982</div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-teal-500/5 pointer-events-none" />
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-teal-500/5 pointer-events-none" />

                  <div className="w-full flex justify-between items-center text-[10px] text-slate-500 font-tech-gdj tracking-widest uppercase">
                    <span>SECURE METRIC</span>
                    <span>ABIDS_RD</span>
                  </div>

                  {/* Central Diamond Choker Graphic */}
                  <div className="my-auto flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Target Grid */}
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-30" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#14b8a6" strokeWidth="0.25" className="opacity-25" />
                        
                        {/* Necklace Curve */}
                        <path d="M 20,30 A 30,30 0 0,0 80,30" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                        
                        {/* Symmetrical Gem Nodes */}
                        {[...Array(12)].map((_, i) => {
                          const pct = i / 11;
                          const angle = Math.PI + pct * Math.PI; // 180 to 360 deg
                          const r = 30;
                          const x = 50 + r * Math.cos(angle);
                          const y = 30 - r * Math.sin(angle);
                          return (
                            <g key={i}>
                              <circle cx={x} cy={y} r="1.5" fill="#22D3EE" className="animate-pulse" />
                              <line x1="50" y1="30" x2={x} y2={y} stroke="#14b8a6" strokeWidth="0.1" className="opacity-20" />
                            </g>
                          );
                        })}

                        {/* Floating Pendant */}
                        <polygon points="50,60 55,67 50,74 45,67" fill="#22D3EE" stroke="#cbd5e1" strokeWidth="0.5" />
                        <line x1="50" y1="30" x2="50" y2="60" stroke="#cbd5e1" strokeWidth="1" />
                      </svg>

                      {/* Laser pointer / scan effect */}
                      <div className="absolute left-0 right-0 h-[2px] bg-teal-400/50 shadow-[0_0_10px_rgba(20,184,166,0.8)] animate-[bounce_4s_infinite]" />
                    </div>
                    
                    <span className="font-display-gdj text-lg text-white mt-6 tracking-wider text-center">Cyber-Polki Rani Haar</span>
                    <span className="text-[9px] uppercase tracking-widest text-teal-400 font-tech-gdj mt-1">HOLOGRAPHIC SPEC SHEET</span>
                  </div>

                  <div className="w-full flex justify-center gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-none animate-ping" />
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-none" />
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 border-b border-teal-500/10 bg-[#080d21]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-gdj">// THE HERITAGE MANIFESTO</span>
            <h2 className="text-3xl lg:text-4xl font-display-gdj text-white mt-3">Abids Road Legacy Meets Space-Age Design</h2>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 font-body-gdj">
            <div className="flex flex-col items-center text-center space-y-4 p-6 border border-teal-500/5 bg-[#060814]/80 hover:border-teal-500/20 transition-all">
              <div className="w-16 h-16 border border-teal-500/20 flex items-center justify-center text-teal-400 bg-teal-950/20">
                <Award size={24} />
              </div>
              <h3 className="font-tech-gdj text-lg text-white tracking-widest uppercase font-semibold">44 Years of Trust</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Founded in Abids Road, Hyderabad in 1982, Ghanshyamdas has catered to generations of local royalty, setting benchmarks in metal purity.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 border border-teal-500/5 bg-[#060814]/80 hover:border-teal-500/20 transition-all">
              <div className="w-16 h-16 border border-teal-500/20 flex items-center justify-center text-teal-400 bg-teal-950/20">
                <Crown size={24} />
              </div>
              <h3 className="font-tech-gdj text-lg text-white tracking-widest uppercase font-semibold">Teal &amp; Platinum Infusion</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our design division reimagines ancient Nizam polki styles using sleek silver/platinum metals and striking electric teal borders and glows.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 border border-teal-500/5 bg-[#060814]/80 hover:border-teal-500/20 transition-all">
              <div className="w-16 h-16 border border-teal-500/20 flex items-center justify-center text-teal-400 bg-teal-950/20">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-tech-gdj text-lg text-white tracking-widest uppercase font-semibold">Tech-Integrated Authenticity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every customized diamond and gem is backed by blockchain certification and strict laboratory assays, merging pure value with state-of-the-art security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-24 border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-gdj">// BESPOKE CAD STATIONS</span>
            <h2 className="text-3xl lg:text-4xl font-display-gdj text-white mt-3">Interactive Cyber-Platinum Engine</h2>
            <p className="text-slate-400 text-xs font-body-gdj mt-2">Adjust metal base alloys, select premium gemstones, and review instant telemetry-based price estimates below.</p>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Control Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 border border-teal-500/20 bg-[#090e24] shadow-lg rounded-none relative">
              <div className="absolute top-2 right-2 text-[8px] font-tech-gdj text-teal-400/40">SYS_V1.0.9 // ONLINE</div>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-teal-500/10 font-tech-gdj">
                <Sliders className="text-teal-400" size={18} />
                <h3 className="text-lg text-white font-bold tracking-wider uppercase">Interactive Settings</h3>
              </div>

              <div className="space-y-8 font-tech-gdj text-xs">
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
                            : 'border-teal-500/10 bg-[#060814]/85 text-slate-300 hover:border-teal-400/40'
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
                      [2] BASE ALLOY VOLUME (GRAMS)
                    </label>
                    <span className="font-mono font-bold text-teal-400 text-sm">{metalWeight} g</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={metalWeight}
                    onChange={(e) => setMetalWeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 accent-teal-400 cursor-pointer rounded-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>10g</span>
                    <span>55g</span>
                    <span>100g</span>
                  </div>
                </div>

                {/* Gemstone Selection */}
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-slate-400 mb-4">
                    [3] ACCENT GEMSTONE CORE
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((gem) => (
                      <button
                        key={gem}
                        onClick={() => setGemstone(gem)}
                        className={`py-3 px-2 text-center border text-[10px] uppercase tracking-wider font-bold transition-all active:scale-[0.95] ${
                          gemstone === gem
                            ? 'border-teal-400 bg-teal-950/40 text-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.3)]'
                            : 'border-teal-500/10 bg-[#060814]/85 text-slate-300 hover:border-teal-400/40'
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
                      [4] GEMSTONE CONCENTRATION ({gemstone === 'Pearl' ? 'UNITS' : 'CARATS'})
                    </label>
                    <span className="font-mono font-bold text-teal-400 text-sm">
                      {gemCount} {gemstone === 'Pearl' ? 'Units' : 'Ct'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={gemCount}
                    onChange={(e) => setGemCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 accent-teal-400 cursor-pointer rounded-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1</span>
                    <span>15</span>
                    <span>30</span>
                  </div>
                </div>

                {/* Live Estimator Summary */}
                <div className="pt-6 mt-6 border-t border-teal-500/20 bg-[#060814]/90 p-5 border shadow-inner">
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
                      <span>Interactive Making Charges (15%):</span>
                      <span className="font-mono text-slate-200">
                        ₹{Math.round((metalWeight * metalPrices[metalType] + gemCount * gemstonePrices[gemstone]) * 0.15).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="h-[1px] bg-teal-500/10 my-2" />
                    <div className="flex justify-between items-end text-xs text-white font-bold pt-2">
                      <span className="uppercase tracking-widest text-teal-400">TELEMETRY PRICE ESTIMATE:</span>
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
              <div className="p-8 border border-teal-500/20 bg-[#060814] flex flex-col items-center justify-center relative shadow-lg min-h-[380px] rounded-none">
                <div className="absolute top-3 left-3 text-[9px] tracking-widest uppercase text-teal-400/50 font-tech-gdj">
                  CAD ENGINE // OVERLAY_04
                </div>

                {/* SVG Visualizer */}
                <div className="w-56 h-56 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="necklaceGold" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="80%" stopColor={metalColors[metalType]} />
                        <stop offset="100%" stopColor="#1e293b" />
                      </radialGradient>
                      <radialGradient id="jewelGlow" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor={gemColors[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Cad Grid background lines */}
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#14b8a6" strokeWidth="0.1" strokeDasharray="1 9" className="opacity-40" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#14b8a6" strokeWidth="0.1" strokeDasharray="1 9" className="opacity-40" />

                    {/* Main Necklace Band */}
                    <path
                      d="M 22,25 A 28,32 0 0,0 78,25"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    
                    {/* Metal Glow Path */}
                    <path
                      d="M 22,25 A 28,32 0 0,0 78,25"
                      fill="none"
                      stroke="url(#necklaceGold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    {/* Gemstone Nodes hanging */}
                    {[...Array(Math.min(gemCount, 12))].map((_, idx) => {
                      const pct = idx / (Math.min(gemCount, 12) - 1 || 1);
                      const angle = Math.PI + 0.1 + pct * (Math.PI - 0.2); // spread around lower arc
                      const rX = 25;
                      const rY = 28;
                      const x = 50 + rX * Math.cos(angle);
                      const y = 25 - rY * Math.sin(angle);
                      return (
                        <g key={idx}>
                          {/* Anchor line */}
                          <line x1={x} y1={y} x2={50 + 28 * Math.cos(angle)} y2={25 - 28 * Math.sin(angle)} stroke={metalColors[metalType]} strokeWidth="0.5" />
                          <circle
                            cx={x}
                            cy={y}
                            r={gemstone === 'Pearl' ? '2.5' : '1.8'}
                            fill="url(#jewelGlow)"
                            stroke={metalColors[metalType]}
                            strokeWidth="0.3"
                            className="shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                          />
                        </g>
                      );
                    })}

                    {/* Central Pendant */}
                    <line x1="50" y1="53" x2="50" y2="68" stroke={metalColors[metalType]} strokeWidth="1" />
                    <rect x="47" y="68" width="6" height="6" fill="url(#jewelGlow)" stroke={metalColors[metalType]} strokeWidth="0.5" transform="rotate(45 50 71)" />
                  </svg>
                </div>

                <div className="text-center font-tech-gdj mt-6">
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Live CAD Spec</h4>
                  <p className="text-sm font-display-gdj text-white mt-1">
                    Bespoke {metalType} // {gemstone} Edition
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
                className="w-full text-center py-4 bg-teal-500 hover:bg-teal-400 text-[#060814] font-tech-gdj text-xs uppercase tracking-widest font-bold transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              >
                Sync Blueprint With Consultation Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-24 border-b border-teal-500/10 bg-[#080d21]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-gdj">// THE ARCHIVAL VAULT</span>
            <h2 className="text-3xl lg:text-4xl font-display-gdj text-white mt-3">Signature Cyber-Platinum Series</h2>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 font-body-gdj">
            {[
              {
                title: "Cyber-Platinum Temple Necklace",
                desc: "Intricately detailed 22K gold temple motifs welded onto a structured silver-gray platinum collar with emerald inlay.",
                price: "₹4,80,000",
                spec: "22K Gold & Platinum, Emeralds"
              },
              {
                title: "Neo-Nizam Diamond Choker",
                desc: "A stunning dual-tier choker plate crafted in pure platinum. Boasts laser-certified VVS diamonds and electric teal accents.",
                price: "₹6,90,000",
                spec: "Platinum Base, VVS Diamonds"
              },
              {
                title: "Holographic Pearl String",
                desc: "A dense single strand of premium Basra pearls woven with electric-blue titanium spacer rings and a platinum clip.",
                price: "₹3,10,000",
                spec: "Premium Basra Pearls, Titanium"
              },
              {
                title: "Quantum Princess Cut Haar",
                desc: "A cascading high-end rani haar set with alternating ruby beads and custom-cut diamond spacers in a heavy platinum cage.",
                price: "₹8,50,000",
                spec: "Platinum, Rubies & Diamonds"
              }
            ].map((col, idx) => (
              <div key={idx} className="bg-[#060814]/90 border border-teal-500/10 p-6 flex flex-col justify-between hover:border-teal-400/40 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)] transition-all rounded-none group">
                <div>
                  <div className="w-full h-48 bg-[#090d22] border border-teal-500/5 mb-6 flex items-center justify-center relative overflow-hidden">
                    <Gem size={36} className="text-teal-500/40 group-hover:scale-110 group-hover:text-teal-400 transition-all duration-300" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-teal-500/20 text-[9px] font-tech-gdj uppercase tracking-wider bg-[#060814] text-teal-400">
                      SECURE_SPEC
                    </div>
                  </div>
                  <span className="text-[10px] font-tech-gdj uppercase tracking-widest text-teal-400 font-bold block mb-2">{col.spec}</span>
                  <h3 className="font-display-gdj text-base text-white mb-3 group-hover:text-teal-300 transition-colors">{col.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">{col.desc}</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-teal-500/5">
                  <span className="font-mono text-sm font-bold text-teal-300">{col.price}</span>
                  <a 
                    href="#consultation" 
                    onClick={() => setForm(prev => ({ ...prev, notes: `Inquiry regarding Archival Vault item: ${col.title} (${col.price})` }))}
                    className="inline-flex items-center text-[10px] font-tech-gdj font-bold uppercase tracking-widest text-teal-400 group-hover:text-teal-300 active:scale-[0.95]"
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
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-gdj">// RESERVATION SYSTEMS</span>
            <h2 className="text-3xl lg:text-4xl font-display-gdj text-white mt-3">Virtual Design Consultation</h2>
            <p className="text-slate-400 text-xs font-body-gdj mt-2">Book an encrypted live-video review or schedule a private showing at our flagship Abids Road showroom.</p>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="p-8 md:p-12 border border-teal-500/20 bg-[#090e24] shadow-lg rounded-none">
            {submittedData ? (
              <div className="text-center py-8 space-y-6 font-tech-gdj">
                <div className="w-16 h-16 bg-teal-950 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                  <Check size={28} />
                </div>
                <h3 className="font-display-gdj text-2xl text-white">Consultation Reserved</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed font-body-gdj">
                  Encryption link generated for <strong className="text-slate-200">{submittedData.name}</strong>. A design specialist will reach out to verify your credentials within 2 hours.
                </p>
                <div className="bg-[#060814]/90 border border-teal-500/20 p-5 rounded-none max-w-sm mx-auto text-left text-xs space-y-2">
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">BOOKING ID:</span> <span className="font-mono font-bold text-teal-400">{submittedData.id}</span></div>
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">SECURE DATE:</span> <span className="font-bold text-slate-300">{submittedData.date}</span></div>
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">CLIENT TELEPHONE:</span> <span className="font-mono font-bold text-slate-300">{submittedData.phone}</span></div>
                  <div><span className="text-slate-500 font-bold uppercase tracking-wider">HQ SHOWROOM:</span> <span className="font-bold text-slate-300">Abids Road, Hyderabad</span></div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-3 border border-teal-500/30 text-teal-400 hover:bg-teal-950/20 uppercase text-xs tracking-widest font-bold font-tech-gdj transition-all active:scale-[0.95]"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-tech-gdj text-xs">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 font-semibold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-[#060814] border ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-200`}
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
                      className={`w-full p-3.5 bg-[#060814] border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-200`}
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
                      className={`w-full p-3.5 bg-[#060814] border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-200`}
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
                      className={`w-full p-3.5 bg-[#060814] border ${errors.date ? 'border-red-500' : 'border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)]'} rounded-none focus:outline-none transition-all text-slate-300`}
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
                    className="w-full p-3.5 bg-[#060814] border border-teal-500/20 focus:border-teal-400 focus:shadow-[0_0_10px_rgba(20,184,166,0.3)] rounded-none focus:outline-none transition-all resize-none text-slate-300"
                    placeholder="Provide specific diamond shapes, gold configurations, or custom sizes desired..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-[#060814] font-bold uppercase tracking-widest transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      CONNECTING SECURE CHANNEL...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      INITIATE CONSULTATION
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 border-b border-teal-500/10 bg-[#080d21]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] font-tech-gdj">// CLIENT FEEDBACK TELEMETRY</span>
            <h2 className="text-3xl lg:text-4xl font-display-gdj text-white mt-3">Hyderabad Client Stories</h2>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-body-gdj">
            {[
              {
                text: "Ghanshyamdas's new cyber-platinum showroom in Abids is breathtaking. Being able to custom-configure and view CAD mockups of my wedding necklace was an elite experience.",
                author: "Dr. Priya Reddy",
                location: "Begumpet, Hyderabad",
                rating: 5
              },
              {
                text: "The fusion of legacy gold with sharp, futuristic platinum lines is incredibly unique. Highly recommend their virtual design consultation.",
                author: "Vikram Malhotra",
                location: "Banjara Hills, Hyderabad",
                rating: 5
              },
              {
                text: "Fantastic customer service. The custom-designed diamond choker is a work of art. The digital estimates were spot-on with no hidden fees.",
                author: "Shrinivas Rao",
                location: "Gachibowli, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border border-teal-500/10 bg-[#060814]/90 flex flex-col justify-between hover:border-teal-400/30 transition-all rounded-none">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={12} className="text-teal-400 fill-teal-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic font-light">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-teal-500/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-teal-950 border border-teal-500/25 flex items-center justify-center text-xs font-tech-gdj font-bold text-teal-400">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-tech-gdj">{review.author}</h4>
                    <span className="text-[10px] text-slate-500 font-tech-gdj">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#050714] text-slate-400 py-16 border-t border-teal-500/20 font-tech-gdj text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1: Store Bio */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-display-gdj text-lg uppercase tracking-wider text-white">Ghanshyamdas Jewellers</h3>
            <p className="text-slate-400 leading-relaxed max-w-sm font-body-gdj text-xs font-light">
              Pioneering cyber-platinum aesthetics, high-end diamond designs, and premium Basra pearls at Abids Road since 1982.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-teal-400 uppercase tracking-widest font-bold text-xs">// SHOWROOM CHANNELS</h3>
            <ul className="space-y-3 font-light">
              <li className="flex justify-center md:justify-start items-start gap-2.5">
                <MapPin size={14} className="text-teal-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">Abids Road, Hyderabad, Telangana 500001.</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <Phone size={14} className="text-teal-400 shrink-0" />
                <span className="font-mono text-[11px]">+91 40 2320 2320</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <Mail size={14} className="text-teal-400 shrink-0" />
                <span className="text-[11px]">customercare@ghanshyamdas.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & System Status */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-teal-400 uppercase tracking-widest font-bold text-xs">// OPERATIONAL STATUS</h3>
            <ul className="space-y-3 text-slate-400 font-light">
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <Clock size={14} className="text-teal-400" />
                <span className="text-[11px]">Daily: 10:30 AM - 8:30 PM IST</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2.5">
                <span className="w-2 h-2 rounded-none bg-teal-400 animate-ping" />
                <span className="text-teal-400 font-bold text-[10px]">ALL SYSTEMS OPERATIONAL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-teal-500/5 text-center text-[10px] text-slate-600">
          <p>© 2026 Ghanshyamdas Jewellers. All rights reserved. Encryption standard TLS 1.3 // CAD division.</p>
        </div>
      </footer>
    </div>
  );
}

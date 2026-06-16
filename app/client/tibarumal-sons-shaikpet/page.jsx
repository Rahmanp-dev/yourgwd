"use client";
import React, { useState } from 'react';
import { 
  Sparkles, Shield, Award, Calendar, Phone, Mail, MapPin, 
  Check, ChevronRight, Star, Clock, Compass, Send, Loader2, Info, Gem, Hammer, Heart
} from 'lucide-react';

export default function TibarumalSonsShaikpet() {
  // Navigation active state
  const [navActive, setNavActive] = useState('home');
  
  // Customizer States
  const [metal, setMetal] = useState('22k-gold');
  const [gemstone, setGemstone] = useState('emerald');
  const [metalWeight, setMetalWeight] = useState(30); // in grams
  const [gemCarat, setGemCarat] = useState(2.0); // in carats
  const [customizerType, setCustomizerType] = useState('necklace'); // necklace or ring
  
  // Consultation Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'morning',
    collectionInterest: 'polki-heritage',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Metal Rates & Gem Rates (Simulated pricing in INR)
  const METAL_RATES = {
    '22k-gold': { label: '22K Traditional Gold', pricePerGram: 7380, color: '#d4af37', bgClass: 'bg-[#d4af37]' },
    '18k-rose-gold': { label: '18K Rose Gold', pricePerGram: 6250, color: '#e5a9a9', bgClass: 'bg-[#e5a9a9]' },
    'platinum': { label: 'Platinum 950', pricePerGram: 4620, color: '#cbd5e1', bgClass: 'bg-[#cbd5e1]' }
  };

  const GEMSTONE_RATES = {
    'diamond': { label: 'De Beers Solitaire Diamond', pricePerCarat: 130000, color: '#cbd5e1', gemColorClass: 'bg-sky-100 shadow-[0_0_15px_rgba(56,189,248,0.5)]' },
    'emerald': { label: 'Zambian Emerald', pricePerCarat: 95000, color: '#059669', gemColorClass: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' },
    'ruby': { label: 'Burmese Ruby', pricePerCarat: 110000, color: '#dc2626', gemColorClass: 'bg-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.5)]' },
    'pearl': { label: 'Basra Pearl', pricePerCarat: 35000, color: '#fef3c7', gemColorClass: 'bg-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.4)]' }
  };

  // Pricing Logic
  const calculateEstimate = () => {
    const metalVal = metalWeight * METAL_RATES[metal].pricePerGram;
    const gemVal = gemCarat * GEMSTONE_RATES[gemstone].pricePerCarat;
    const makingPercent = metal === 'platinum' ? 0.16 : 0.13; // 16% for platinum, 13% for gold/rose gold
    const makingCharges = metalVal * makingPercent;
    const subtotal = metalVal + gemVal + makingCharges;
    const gst = subtotal * 0.03; // 3% GST
    const total = subtotal + gst;
    
    return {
      metalVal,
      gemVal,
      makingCharges,
      gst,
      total
    };
  };

  const pricing = calculateEstimate();

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Form Validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      tempErrors.phone = "Provide a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Provide a valid email address";
    }
    if (!formData.date) tempErrors.date = "Preferred appointment date is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          timeSlot: 'morning',
          collectionInterest: 'polki-heritage',
          notes: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#020503] text-[#e2e8f0] font-sans selection:bg-[#cca43b] selection:text-black antialiased">
      {/* Import Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      <style>{`
        .font-display {
          font-family: 'Prata', serif;
        }
        .font-body {
          font-family: 'Inter', sans-serif;
        }
        .gold-glow-text {
          background: linear-gradient(135deg, #fef08a 0%, #d4af37 50%, #cca43b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass-panel {
          background: rgba(6, 25, 14, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(212, 175, 55, 0.12);
        }
        .glass-panel-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-panel-hover:hover {
          background: rgba(6, 25, 14, 0.35);
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.08);
        }
        .emerald-glow {
          box-shadow: 0 0 40px rgba(5, 150, 105, 0.1);
        }
      `}</style>

      {/* Hero Header */}
      <header className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden border-b border-[#cca43b]/10">
        {/* Glow Spheres */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(5,150,105,0.08)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020503]/20 via-[#020503]/80 to-[#020503]"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display text-2xl tracking-[0.2em] text-[#fef08a] font-medium">TIBARUMAL & SONS</span>
            <span className="text-[10px] font-body tracking-[0.35em] text-emerald-400 -mt-1 font-semibold uppercase">Shaikpet, Hyderabad</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-xs tracking-widest font-body font-medium uppercase text-slate-300">
            {['heritage', 'customizer', 'collections', 'consultation'].map((tab) => (
              <a 
                key={tab} 
                href={`#${tab}`}
                onClick={() => setNavActive(tab)}
                className={`transition-all duration-300 py-1 hover:text-[#fef08a] active:scale-95 ${navActive === tab ? 'text-[#fef08a] font-bold border-b border-[#cca43b]' : ''}`}
              >
                {tab}
              </a>
            ))}
          </div>

          <a 
            href="#consultation" 
            className="px-5 py-2.5 rounded glass-panel text-[#fef08a] hover:bg-emerald-950/40 font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 border border-[#cca43b]/30"
          >
            Request Suite
          </a>
        </nav>

        {/* Central Hero Body */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-grow py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-xs font-body tracking-wider text-emerald-400 mb-6">
            <Sparkles size={13} className="text-[#cca43b] animate-pulse" />
            <span>Nizami Craftsmanship Since 1920</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-none tracking-tight">
            Legendary Gold.<br/>
            <span className="gold-glow-text">Imperial Heritage.</span>
          </h1>

          <p className="font-body text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-8 leading-relaxed">
            Preserving the rare jewelry arts of the Deccan. Explore bespoke polki, royal temple chokers, and certified diamonds, handcrafted near Shaikpet Flyover for Hyderabad's most discerning families.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a 
              href="#customizer" 
              className="px-8 py-4 rounded border border-[#cca43b]/40 hover:bg-[#cca43b]/5 text-[#fef08a] font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95"
            >
              Customizer Studio
            </a>
            <a 
              href="#consultation" 
              className="px-8 py-4 rounded bg-gradient-to-r from-amber-500 to-[#cca43b] hover:from-amber-400 hover:to-[#cca43b] text-black font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Hero Footer Stats */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#cca43b]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "Century+", label: "Of Royal Trust" },
            { value: "Handcrafted", label: "No Mass Production" },
            { value: "100% Hallmarked", label: "22K Gold & Polki" },
            { value: "Shaikpet", label: "Hyderabad Atelier" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display text-2xl lg:text-3xl text-[#fef08a] font-medium">{stat.value}</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-emerald-500/80 mt-1 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-28 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center items-center">
          {/* Emerald Glass Card Displaying Heritage Emblem */}
          <div className="relative w-full max-w-md aspect-square glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden emerald-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-amber-500/5 pointer-events-none"></div>
            
            <div className="flex justify-between items-start">
              <Award className="text-[#cca43b] size-10" />
              <span className="font-body text-[10px] tracking-widest text-[#cca43b] font-semibold uppercase">Imperial Atelier</span>
            </div>

            <div className="my-10 flex justify-center">
              {/* Nizam Filigree Motif in SVG */}
              <svg width="160" height="160" viewBox="0 0 100 100" className="text-[#cca43b]">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                {/* Mandala shape */}
                <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="currentColor" strokeWidth="1" />
                <polygon points="50,22 78,50 50,78 22,50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <circle cx="50" cy="50" r="10" fill="rgba(5,150,105,0.2)" stroke="currentColor" strokeWidth="1" />
                <Gem className="size-6 text-[#fef08a] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </svg>
            </div>

            <div className="border-t border-[#cca43b]/20 pt-4 flex justify-between items-center">
              <div>
                <span className="font-display text-[#fef08a] text-lg block">Deccan Filigree Art</span>
                <span className="font-body text-[11px] text-emerald-400 font-medium">100% Certified Hand-Carved Ornaments</span>
              </div>
              <Shield className="text-emerald-500 size-6" />
            </div>
          </div>
          {/* Blurred background glow */}
          <div className="absolute -z-10 w-80 h-80 rounded-full bg-emerald-950/20 blur-[100px]"></div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-body tracking-widest text-emerald-400 font-bold uppercase">
            <Compass size={14} className="text-[#cca43b]" />
            <span>THE LEGACY OF TIBARUMAL</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-white font-medium leading-tight">
            Guardians of the Nizami Goldsmith Guild
          </h2>

          <div className="h-[1px] w-24 bg-[#cca43b]"></div>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            The name Tibarumal has been synonymous with Hyderabad's high jewelry culture for over a century. Operating from our Shaikpet suite, Tibarumal & Sons continues this unbroken heritage, combining antique gold engraving techniques with unmatched gemstone curation.
          </p>

          <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
            Our master craftsmen work with fine 22-karat yellow gold, hand-setting uncut polki diamonds, vibrant emeralds, and authentic Basra pearls in configurations inspired by the historic durbar archives of the Nizam.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs font-body uppercase tracking-wider text-slate-300">
            <div className="flex items-center gap-3 glass-panel p-4 rounded">
              <Check className="text-[#cca43b] size-4" />
              <span>Authentic Jadau Kundan work</span>
            </div>
            <div className="flex items-center gap-3 glass-panel p-4 rounded">
              <Check className="text-[#cca43b] size-4" />
              <span>Ethical Basra Pearl sourcing</span>
            </div>
            <div className="flex items-center gap-3 glass-panel p-4 rounded">
              <Check className="text-[#cca43b] size-4" />
              <span>Traditional Chintak & Karanphool</span>
            </div>
            <div className="flex items-center gap-3 glass-panel p-4 rounded">
              <Check className="text-[#cca43b] size-4" />
              <span>Lifetime purity guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer */}
      <section id="customizer" className="py-24 border-y border-[#cca43b]/10 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-body tracking-widest text-emerald-400 font-bold uppercase mb-3">
              <Hammer size={14} className="text-[#cca43b]" />
              <span>DESIGN STUDIO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-medium">
              Bespoke Jewelry Customizer
            </h2>
            <p className="font-body text-slate-400 text-sm mt-4">
              Indulge your creative vision. Select your precious metal base, choosing between heavy gold or modern platinum, and pair with legendary gemstones to see simulated price estimates and mock visuals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Preview (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <div className="w-full max-w-sm aspect-square glass-panel rounded-3xl p-6 relative flex flex-col justify-between items-center overflow-hidden">
                <div className="absolute top-4 left-4 text-[9px] font-body tracking-wider text-slate-500 uppercase">
                  Live Preview Mode
                </div>
                
                {/* Type Selection inside preview */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setCustomizerType('necklace')}
                    className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider font-body font-bold transition-all duration-300 active:scale-95 ${customizerType === 'necklace' ? 'bg-[#cca43b] text-black' : 'bg-emerald-950/40 text-slate-400'}`}
                  >
                    Necklace
                  </button>
                  <button 
                    onClick={() => setCustomizerType('ring')}
                    className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider font-body font-bold transition-all duration-300 active:scale-95 ${customizerType === 'ring' ? 'bg-[#cca43b] text-black' : 'bg-emerald-950/40 text-slate-400'}`}
                  >
                    Ring
                  </button>
                </div>

                <div className="flex-grow flex items-center justify-center relative w-full my-8">
                  {/* Dynamic Graphic */}
                  {customizerType === 'necklace' ? (
                    <svg width="220" height="220" viewBox="0 0 100 100" className="transition-all duration-500">
                      {/* Necklace Band */}
                      <path 
                        d="M 20,30 C 20,70 80,70 80,30" 
                        fill="none" 
                        stroke={METAL_RATES[metal].color} 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                      {/* Smaller inner band */}
                      <path 
                        d="M 30,32 C 30,62 70,62 70,32" 
                        fill="none" 
                        stroke={METAL_RATES[metal].color} 
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                        className="transition-all duration-500"
                        opacity="0.7"
                      />
                      {/* Pendants */}
                      <circle cx="50" cy="62" r="5" fill={GEMSTONE_RATES[gemstone].color} className="transition-all duration-500 shadow-lg" stroke={METAL_RATES[metal].color} strokeWidth="1" />
                      <circle cx="40" cy="57" r="3" fill={GEMSTONE_RATES[gemstone].color} className="transition-all duration-500" stroke={METAL_RATES[metal].color} strokeWidth="0.8" />
                      <circle cx="60" cy="57" r="3" fill={GEMSTONE_RATES[gemstone].color} className="transition-all duration-500" stroke={METAL_RATES[metal].color} strokeWidth="0.8" />
                      {/* Hanging pearls */}
                      <circle cx="50" cy="71" r="2.5" fill="#fef3c7" className="animate-bounce" />
                      <line x1="50" y1="67" x2="50" y2="69.5" stroke={METAL_RATES[metal].color} strokeWidth="0.8" />
                    </svg>
                  ) : (
                    <svg width="220" height="220" viewBox="0 0 100 100" className="transition-all duration-500">
                      {/* Ring Band */}
                      <circle 
                        cx="50" 
                        cy="55" 
                        r="20" 
                        fill="none" 
                        stroke={METAL_RATES[metal].color} 
                        strokeWidth="4"
                        className="transition-all duration-500"
                      />
                      <circle 
                        cx="50" 
                        cy="55" 
                        r="18" 
                        fill="none" 
                        stroke="#020503" 
                        strokeWidth="1"
                      />
                      {/* Crown Setting */}
                      <path 
                        d="M 42,35 L 58,35 L 55,42 L 45,42 Z" 
                        fill={METAL_RATES[metal].color} 
                        className="transition-all duration-500"
                      />
                      {/* Center Gemstone */}
                      <polygon 
                        points="50,22 57,29 54,35 46,35 43,29" 
                        fill={GEMSTONE_RATES[gemstone].color}
                        stroke={METAL_RATES[metal].color}
                        strokeWidth="0.5"
                        className="transition-all duration-500"
                      />
                      <circle cx="50" cy="29" r="2" fill="white" opacity="0.8" />
                    </svg>
                  )}
                </div>

                <div className="w-full text-center border-t border-[#cca43b]/10 pt-4">
                  <div className="text-xs font-body text-slate-400">Estimated Weight Setup</div>
                  <div className="text-sm font-body font-semibold text-[#fef08a] mt-1">
                    {metalWeight}g {METAL_RATES[metal].label} / {gemCarat} Carat {GEMSTONE_RATES[gemstone].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Configurations (Right) */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-8 flex flex-col gap-8">
              {/* Metal Selection */}
              <div>
                <label className="block text-xs font-body tracking-wider uppercase text-slate-300 font-bold mb-3">
                  1. Select Metal Base
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(METAL_RATES).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setMetal(key)}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 active:scale-95 ${metal === key ? 'border-[#cca43b] bg-emerald-950/40 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-slate-800 bg-transparent text-slate-400 hover:border-slate-700'}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${data.bgClass} border border-black`}></span>
                        <span className="font-body text-xs font-bold uppercase tracking-wider">{key === '22k-gold' ? '22K Gold' : key === '18k-rose-gold' ? '18K Rose' : 'Platinum'}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-body mt-1">{formatCurrency(data.pricePerGram)} / gram</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gemstone Selection */}
              <div>
                <label className="block text-xs font-body tracking-wider uppercase text-slate-300 font-bold mb-3">
                  2. Choose Primary Gemstone
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(GEMSTONE_RATES).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setGemstone(key)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 active:scale-95 ${gemstone === key ? 'border-[#cca43b] bg-emerald-950/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-slate-800 bg-transparent text-slate-400 hover:border-slate-700'}`}
                    >
                      <Gem className="size-5 mx-auto mb-2" style={{ color: data.color }} />
                      <span className="block font-body text-xs font-bold uppercase tracking-wider">{key}</span>
                      <span className="block text-[9px] text-slate-500 font-body mt-0.5">{formatCurrency(data.pricePerCarat)}/ct</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Adjust Sizes (Sliders) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between text-xs font-body text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                    <span>Metal weight</span>
                    <span className="text-[#fef08a]">{metalWeight} Grams</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    step="5"
                    value={metalWeight} 
                    onChange={(e) => setMetalWeight(Number(e.target.value))}
                    className="w-full accent-[#cca43b] bg-slate-800 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-body mt-1">
                    <span>10g</span>
                    <span>100g</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-body text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                    <span>Gemstone Carats</span>
                    <span className="text-[#fef08a]">{gemCarat} Carats</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="10.0" 
                    step="0.5"
                    value={gemCarat} 
                    onChange={(e) => setGemCarat(Number(e.target.value))}
                    className="w-full accent-[#cca43b] bg-slate-800 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-body mt-1">
                    <span>0.5 ct</span>
                    <span>10.0 ct</span>
                  </div>
                </div>
              </div>

              {/* Estimate Calculations */}
              <div className="border-t border-[#cca43b]/20 pt-6">
                <div className="flex items-center gap-2 text-xs font-body tracking-wider text-slate-400 uppercase mb-4">
                  <Info size={14} className="text-[#cca43b]" />
                  <span>Transparent Price Breakdown</span>
                </div>
                
                <div className="space-y-2 text-xs font-body text-slate-400">
                  <div className="flex justify-between">
                    <span>Metal Base Price ({metalWeight}g):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.metalVal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gemstone Value ({gemCarat} ct):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.gemVal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Handcrafting & Making ({metal === 'platinum' ? '15%' : '12%'}):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.makingCharges)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Government Tax (3% GST):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.gst)}</span>
                  </div>
                  
                  <div className="flex justify-between text-base font-display text-white border-t border-dashed border-[#cca43b]/20 pt-4 mt-2">
                    <span className="text-[#fef08a]">Estimated Total Price:</span>
                    <span className="font-bold text-[#fef08a]">{formatCurrency(pricing.total)}</span>
                  </div>
                </div>
              </div>

              {/* Proceed Action Button */}
              <a 
                href="#consultation" 
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    notes: `Bespoke configuration: ${METAL_RATES[metal].label} (${metalWeight}g) with ${GEMSTONE_RATES[gemstone].label} (${gemCarat} Carats). Estimated quote: ${formatCurrency(pricing.total)}.`
                  }));
                }}
                className="w-full py-4 text-center rounded-xl bg-gradient-to-r from-amber-500 to-[#cca43b] hover:from-amber-400 hover:to-[#cca43b] text-black font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95"
              >
                Request Custom Quotation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-body tracking-widest text-emerald-400 font-bold uppercase block mb-3">ROYAL GALLERY</span>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-medium">
            Signature Collections
          </h2>
          <p className="font-body text-slate-400 text-sm mt-4">
            Curated masterpieces representing our finest Deccan metal carving, polki setting, and authentic heritage diamond curation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Imperial Nizam Choker",
              description: "Featuring heavy 22K yellow gold filigree, set with uncut polki and drop Zambian emeralds, recreating the classic Nizam bridal chokers.",
              features: ["22K Yellow Gold", "Ethical Polki Diamonds", "Premium Emerald Beads"],
              priceRange: "₹8,50,000 - ₹15,00,000"
            },
            {
              title: "Vaikunta Temple Necklace",
              description: "A traditional South Indian masterpiece carved with divine miniature motifs, offset by hand-woven pearl strings and rubies.",
              features: ["Nakshi Hand Carving", "Basra Seed Pearls", "Cabochon Rubies"],
              priceRange: "₹12,00,000 - ₹22,00,000"
            },
            {
              title: "Gachibowli Royal Pearl Strings",
              description: "Elite multiple strings of authentic round pearls, finished with an intricate diamond and gold floral heritage clasp.",
              features: ["AAA Grade Basra Pearls", "Brilliant Cut Diamonds", "18K Gold Clasp"],
              priceRange: "₹4,50,000 - ₹8,00,000"
            }
          ].map((col, index) => (
            <div key={index} className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] transition-all duration-300"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-950/40 rounded-xl border border-[#cca43b]/10 text-[#cca43b]">
                    <Gem size={20} />
                  </div>
                  <span className="text-[10px] font-body tracking-wider text-slate-500 font-bold uppercase">Suite Selection</span>
                </div>

                <h3 className="font-display text-2xl text-white group-hover:text-[#fef08a] transition-all duration-300 mb-3">
                  {col.title}
                </h3>
                <p className="font-body text-slate-400 text-xs leading-relaxed mb-6">
                  {col.description}
                </p>

                <div className="space-y-2 border-t border-[#cca43b]/10 pt-4 mb-6">
                  {col.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-body text-slate-300">
                      <Check className="text-emerald-500 size-3" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] font-body uppercase text-slate-500">Range Est:</span>
                <span className="text-xs font-body font-bold text-[#cca43b]">{col.priceRange}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Design Consultation */}
      <section id="consultation" className="py-24 border-t border-[#cca43b]/10 bg-[radial-gradient(ellipse_at_center,rgba(5,150,105,0.03)_0%,transparent_80%)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-body tracking-widest text-[#cca43b] font-bold uppercase block mb-3">EXCLUSIVE BOOKING</span>
            <h2 className="font-display text-4xl text-white font-medium">
              Virtual Design Consultation
            </h2>
            <p className="font-body text-slate-400 text-sm mt-3">
              Schedule an exclusive layout walkthrough or custom design ideation with our head jewelry specialists from the comfort of your home.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
            {/* Submit Loader Cover */}
            {isSubmitting && (
              <div className="absolute inset-0 bg-[#020503]/85 backdrop-blur-sm z-20 flex flex-col justify-center items-center gap-3">
                <Loader2 className="animate-spin text-[#cca43b] size-10" />
                <span className="font-body text-xs tracking-wider text-slate-300 uppercase font-semibold">Reserving Consultation Suite...</span>
              </div>
            )}

            {/* Success Screen */}
            {submitSuccess ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="size-8" />
                </div>
                <h3 className="font-display text-2xl text-white">Consultation Requested</h3>
                <p className="font-body text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                  Our private client relationship manager will review your request and reach out to you within the next 3 business hours. A verification text message has been sent to your phone.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded glass-panel text-[#fef08a] font-body text-xs uppercase tracking-wider font-bold transition-all duration-300 active:scale-95"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Ananya Rao"
                      className={`w-full px-4 py-3 rounded-lg bg-emerald-950/10 border font-body text-xs text-white focus:outline-none focus:border-[#cca43b] transition-all ${errors.name ? 'border-red-500' : 'border-slate-800'}`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 font-body mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                      10-Digit Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="e.g. 9848022338"
                      className={`w-full px-4 py-3 rounded-lg bg-emerald-950/10 border font-body text-xs text-white focus:outline-none focus:border-[#cca43b] transition-all ${errors.phone ? 'border-red-500' : 'border-slate-800'}`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-400 font-body mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. ananya@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg bg-emerald-950/10 border font-body text-xs text-white focus:outline-none focus:border-[#cca43b] transition-all ${errors.email ? 'border-red-500' : 'border-slate-800'}`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 font-body mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                      Preferred Date *
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 rounded-lg bg-emerald-950/10 border font-body text-xs text-white focus:outline-none focus:border-[#cca43b] transition-all ${errors.date ? 'border-red-500' : 'border-slate-800'}`}
                    />
                    {errors.date && <span className="text-[10px] text-red-400 font-body mt-1 block">{errors.date}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                      Preferred Time Slot
                    </label>
                    <select 
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#020503] border border-slate-800 font-body text-xs text-white focus:outline-none focus:border-[#cca43b]"
                    >
                      <option value="morning">Morning (10:30 AM - 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 7:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                      Collection Interest
                    </label>
                    <select 
                      name="collectionInterest"
                      value={formData.collectionInterest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#020503] border border-slate-800 font-body text-xs text-white focus:outline-none focus:border-[#cca43b]"
                    >
                      <option value="polki-heritage">Nizami Polki & Jadau</option>
                      <option value="temple-nakshi">Temple Nakshi Gold</option>
                      <option value="solitaires">Bespoke Solitaire Diamonds</option>
                      <option value="pearl-strings">Basra Pearl Strings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-body tracking-wider uppercase text-slate-400 font-bold mb-2">
                    Consultation Notes
                  </label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleFormChange}
                    rows="3"
                    placeholder="Describe any design requirements, custom weights, or themes you have in mind..."
                    className="w-full px-4 py-3 rounded-lg bg-emerald-950/10 border border-slate-800 font-body text-xs text-white focus:outline-none focus:border-[#cca43b] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-body">
                  <Shield size={12} className="text-emerald-500" />
                  <span>Your confidential data is protected by End-to-End Encryption rules.</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-[#cca43b] hover:from-amber-400 hover:to-[#cca43b] text-black font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Reserve Consultation Slot</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-body tracking-widest text-emerald-400 font-bold uppercase block mb-3">CLIENT VOICES</span>
          <h2 className="font-display text-4xl text-white font-medium">
            Customer Stories
          </h2>
          <p className="font-body text-slate-400 text-sm mt-3">
            Real experiences from families in Hyderabad who trust Tibarumal & Sons for their bridal celebrations and landmark moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "The bridal choker they handcrafted for my daughter's wedding near Jubilee Hills was a true masterpiece. The polki work represents traditional Nizam elegance at its best. Truly exceptional custom support.",
              author: "Rajini Reddy",
              location: "Gachibowli, Hyderabad",
              rating: 5
            },
            {
              quote: "Tibarumal & Sons near Shaikpet Flyover has been our family jewellery provider for three generations. Their Basra pearls and traditional Kundan work cannot be matched in term of precision.",
              author: "N. Lakshmi Rao",
              location: "Banjara Hills, Hyderabad",
              rating: 5
            },
            {
              quote: "I used the customizer to set up a preliminary design estimate for a bespoke emerald ring, and their online response was highly prompt. The final product was exactly like the design walkthrough.",
              author: "Srinivas K.",
              location: "Kondapur, Hyderabad",
              rating: 5
            }
          ].map((story, i) => (
            <div key={i} className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#cca43b]">
                  {[...Array(story.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-body text-slate-300 text-xs italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
              <div className="border-t border-[#cca43b]/10 pt-4 mt-6">
                <span className="font-body text-xs font-bold text-white block">{story.author}</span>
                <span className="font-body text-[10px] text-emerald-400 uppercase tracking-widest font-semibold mt-0.5 block">{story.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010302] border-t border-[#cca43b]/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Identity */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-display text-2xl tracking-[0.2em] text-[#fef08a] font-medium">TIBARUMAL & SONS</span>
            <span className="text-[10px] font-body tracking-[0.35em] text-emerald-400 uppercase font-semibold">Shaikpet, Hyderabad</span>
            <p className="font-body text-xs text-slate-500 leading-relaxed max-w-sm">
              Carrying forward the rich goldsmithing traditions of the Deccan with uncompromised trust, premium gemstones, and custom design suites.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col gap-4 font-body text-xs text-slate-400">
            <span className="font-display text-base text-white tracking-wider">Store Location</span>
            
            <div className="flex gap-3 items-start mt-2">
              <MapPin size={16} className="text-[#cca43b] shrink-0 mt-0.5" />
              <span>Near Shaikpet Flyover, Shaikpet, Hyderabad, Telangana 500008.</span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={16} className="text-[#cca43b] shrink-0" />
              <span>+91 40 2354 7788</span>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={16} className="text-[#cca43b] shrink-0" />
              <span>shaikpet@tibarumalsons.com</span>
            </div>
          </div>

          {/* Hours & Assurance */}
          <div className="md:col-span-3 flex flex-col gap-4 font-body text-xs text-slate-400">
            <span className="font-display text-base text-white tracking-wider">Hours & Security</span>
            
            <div className="flex gap-3 items-start mt-2">
              <Clock size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span>Tuesday - Sunday</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">10:30 AM - 8:30 PM (Mondays Closed)</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Shield size={16} className="text-emerald-500 shrink-0" />
              <span>CCTV Secured Premium Suite</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-body text-slate-600 gap-4">
          <span>&copy; 2026 Tibarumal & Sons Shaikpet. All Rights Reserved.</span>
          <span className="tracking-widest uppercase text-[#cca43b]/70 font-semibold">100% Certified Hallmark Jeweller</span>
        </div>
      </footer>
    </div>
  );
}

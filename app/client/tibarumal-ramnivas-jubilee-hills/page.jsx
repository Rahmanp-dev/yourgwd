"use client";
import React, { useState } from 'react';
import { 
  Sparkles, Shield, Award, Calendar, Phone, Mail, MapPin, 
  Check, ChevronRight, Star, Clock, Compass, Send, Loader2, Info, Gem, Hammer, Heart
} from 'lucide-react';

export default function TibarumalRamnivasJubileeHills() {
  // Navigation active state
  const [navActive, setNavActive] = useState('home');
  
  // Customizer States
  const [metal, setMetal] = useState('18k-rose-gold');
  const [gemstone, setGemstone] = useState('diamond');
  const [metalWeight, setMetalWeight] = useState(15); // in grams
  const [gemCarat, setGemCarat] = useState(1.8); // in carats
  const [customizerType, setCustomizerType] = useState('earrings'); // earrings or ring
  
  // Consultation Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'afternoon',
    collectionInterest: 'diamond-solitaire',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Metal Rates & Gem Rates (Simulated pricing in INR)
  const METAL_RATES = {
    '22k-gold': { label: '22K Standard Gold', pricePerGram: 7420, color: '#d4af37', bgClass: 'bg-[#d4af37]' },
    '18k-rose-gold': { label: '18K Premium Rose Gold', pricePerGram: 6300, color: '#e5a9a9', bgClass: 'bg-[#e5a9a9]' },
    'platinum': { label: 'Solid Platinum 950', pricePerGram: 4580, color: '#cbd5e1', bgClass: 'bg-[#cbd5e1]' }
  };

  const GEMSTONE_RATES = {
    'diamond': { label: 'Elite Solitaire Diamond', pricePerCarat: 125000, color: '#93c5fd', gemColorClass: 'bg-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.5)]' },
    'emerald': { label: 'Premium Colombian Emerald', pricePerCarat: 90000, color: '#10b981', gemColorClass: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' },
    'ruby': { label: 'Burmese Pigeon Blood Ruby', pricePerCarat: 100000, color: '#ef4444', gemColorClass: 'bg-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.5)]' },
    'pearl': { label: 'South Sea Cultured Pearl', pricePerCarat: 30000, color: '#fffbeb', gemColorClass: 'bg-amber-50 shadow-[0_0_15px_rgba(251,191,36,0.3)]' }
  };

  // Pricing Logic
  const calculateEstimate = () => {
    const metalVal = metalWeight * METAL_RATES[metal].pricePerGram;
    const gemVal = gemCarat * GEMSTONE_RATES[gemstone].pricePerCarat;
    const makingPercent = metal === 'platinum' ? 0.15 : 0.12; // 15% for platinum, 12% for gold
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
      tempErrors.phone = "Provide a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Provide a valid email address";
    }
    if (!formData.date) tempErrors.date = "Preferred consultation date is required";
    
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
          timeSlot: 'afternoon',
          collectionInterest: 'diamond-solitaire',
          notes: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#030611] text-[#f1f5f9] font-sans selection:bg-[#e5a9a9] selection:text-black antialiased">
      {/* Import Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />

      <style>{`
        .font-display {
          font-family: 'Cinzel', serif;
        }
        .font-body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .rose-gold-gradient {
          background: linear-gradient(135deg, #fce7f3 0%, #e5a9a9 50%, #b87a7a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sapphire-glass {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(59, 130, 246, 0.12);
        }
        .sapphire-glass-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sapphire-glass-hover:hover {
          background: rgba(15, 23, 42, 0.55);
          border: 1px solid rgba(59, 130, 246, 0.25);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
        }
        .sapphire-glow {
          box-shadow: 0 0 40px rgba(30, 58, 138, 0.3);
        }
      `}</style>

      {/* Hero Header */}
      <header className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden border-b border-blue-950/40">
        {/* Glow Spheres */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-25%] right-[-15%] w-[65%] h-[65%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-[-20%] left-[-15%] w-[75%] h-[75%] rounded-full bg-[radial-gradient(circle,rgba(229,169,169,0.08)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/10 via-[#030611]/80 to-[#030611]"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display text-2xl tracking-[0.25em] text-white font-medium">TIBARUMAL RAMNIVAS</span>
            <span className="text-[9px] font-body tracking-[0.45em] text-[#e5a9a9] -mt-1 font-semibold uppercase">Jubilee Hills</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-xs tracking-widest font-body font-medium uppercase text-slate-300">
            {['heritage', 'customizer', 'collections', 'consultation'].map((tab) => (
              <a 
                key={tab} 
                href={`#${tab}`}
                onClick={() => setNavActive(tab)}
                className={`transition-all duration-300 py-1 hover:text-[#e5a9a9] active:scale-95 ${navActive === tab ? 'text-[#e5a9a9] font-bold border-b border-[#e5a9a9]' : ''}`}
              >
                {tab}
              </a>
            ))}
          </div>

          <a 
            href="#consultation" 
            className="px-5 py-2.5 rounded bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 border border-blue-500/20"
          >
            Book Suite
          </a>
        </nav>

        {/* Central Hero Body */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-grow py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/20 text-xs font-body tracking-wider text-blue-400 mb-6">
            <Sparkles size={13} className="text-[#e5a9a9] animate-pulse" />
            <span>Curators of Fine Solitaire Diamonds & Rose Gold</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-none tracking-tight">
            Modern Luxury.<br/>
            <span className="rose-gold-gradient">Sought-after Brilliance.</span>
          </h1>

          <p className="font-body text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-8 leading-relaxed">
            Welcome to Road No. 36, Jubilee Hills. Handcrafting bespoke platinum solitaire rings, contemporary cocktail chokers, and premium bridal necklaces for Hyderabad's cosmopolitan elite.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a 
              href="#customizer" 
              className="px-8 py-4 rounded border border-blue-500/30 hover:bg-blue-950/20 text-[#e5a9a9] font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95"
            >
              Interactive Studio
            </a>
            <a 
              href="#consultation" 
              className="px-8 py-4 rounded bg-[#e5a9a9] hover:bg-[#b87a7a] text-black font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(229,169,169,0.15)]"
            >
              Request Consultation
            </a>
          </div>
        </div>

        {/* Hero Footer Stats */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-blue-950/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "Jubilee Hills", label: "Flagship Showroom" },
            { value: "Bespoke", label: "Contemporary Design" },
            { value: "IGI / GIA", label: "Certified Solitaires" },
            { value: "Platinum & Gold", label: "Premium Hallmarked" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display text-2xl lg:text-3xl text-white font-medium">{stat.value}</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#e5a9a9] mt-1 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-28 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center items-center">
          {/* Sapphire Glass Card Displaying Heritage Emblem */}
          <div className="relative w-full max-w-md aspect-square sapphire-glass rounded-3xl p-8 flex flex-col justify-between overflow-hidden sapphire-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-pink-500/5 pointer-events-none"></div>
            
            <div className="flex justify-between items-start">
              <Award className="text-[#e5a9a9] size-10" />
              <span className="font-body text-[10px] tracking-widest text-[#e5a9a9] font-semibold uppercase">Elite Atelier</span>
            </div>

            <div className="my-10 flex justify-center">
              {/* Modern Geometrics SVG */}
              <svg width="160" height="160" viewBox="0 0 100 100" className="text-blue-400">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M 15,15 L 85,85 M 15,85 L 85,15" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                {/* Solitaire Faceting geometry */}
                <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <polygon points="50,18 82,50 50,82 18,50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <circle cx="50" cy="50" r="14" fill="rgba(30,58,138,0.3)" stroke="#e5a9a9" strokeWidth="1" />
                <Gem className="size-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </svg>
            </div>

            <div className="border-t border-blue-500/20 pt-4 flex justify-between items-center">
              <div>
                <span className="font-display text-white text-lg block">Modern Facet Science</span>
                <span className="font-body text-[11px] text-blue-400 font-medium">Bespoke GIA Diamond Calibration</span>
              </div>
              <Shield className="text-[#e5a9a9] size-6" />
            </div>
          </div>
          {/* Blurred background glow */}
          <div className="absolute -z-10 w-80 h-80 rounded-full bg-blue-900/10 blur-[100px]"></div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-body tracking-widest text-blue-400 font-bold uppercase">
            <Compass size={14} className="text-[#e5a9a9]" />
            <span>ATELIER OF DISTINCTION</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-white font-medium leading-tight">
            A Masterclass in Contemporary High Jewellery
          </h2>

          <div className="h-[1px] w-24 bg-blue-500/30"></div>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Tibarumal Ramnivas Jewellers is renowned for bringing a cosmopolitan flair to traditional Hyderabad bridal craftsmanship. Nestled on the prestigious Road No. 36, Jubilee Hills, our boutique features clean-cut diamonds, lightweight rose gold filigree, and modern fusion masterpieces.
          </p>

          <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
            Every creation is calibrated for balance, leveraging the highest standards of diamond certification (GIA and IGI). We specialize in custom-engineered luxury, crafting unique suites tailored to the specific lifestyles of modern brides and collectors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs font-body uppercase tracking-wider text-slate-300">
            <div className="flex items-center gap-3 sapphire-glass p-4 rounded">
              <Check className="text-[#e5a9a9] size-4" />
              <span>Laser-calibrated diamond settings</span>
            </div>
            <div className="flex items-center gap-3 sapphire-glass p-4 rounded">
              <Check className="text-[#e5a9a9] size-4" />
              <span>GIA certified solitaire curation</span>
            </div>
            <div className="flex items-center gap-3 sapphire-glass p-4 rounded">
              <Check className="text-[#e5a9a9] size-4" />
              <span>Fluid light-weight rose gold design</span>
            </div>
            <div className="flex items-center gap-3 sapphire-glass p-4 rounded">
              <Check className="text-[#e5a9a9] size-4" />
              <span>Private bridal consultation suite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer */}
      <section id="customizer" className="py-24 border-y border-blue-950/40 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-body tracking-widest text-blue-400 font-bold uppercase mb-3">
              <Hammer size={14} className="text-[#e5a9a9]" />
              <span>THE DESIGN LAB</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-medium">
              Bespoke Jewelry Customizer
            </h2>
            <p className="font-body text-slate-400 text-sm mt-4">
              Calibrate your custom ornament. Select from standard 22K Gold, modern 18K Rose Gold, or Solid Platinum. Pair with rare gemstones to preview pricing and design drafts instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Preview (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <div className="w-full max-w-sm aspect-square sapphire-glass rounded-3xl p-6 relative flex flex-col justify-between items-center overflow-hidden">
                <div className="absolute top-4 left-4 text-[9px] font-body tracking-wider text-slate-500 uppercase">
                  Rendering Mode
                </div>
                
                {/* Type Selection inside preview */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setCustomizerType('earrings')}
                    className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider font-body font-bold transition-all duration-300 active:scale-95 ${customizerType === 'earrings' ? 'bg-[#e5a9a9] text-black' : 'bg-blue-950/40 text-slate-400'}`}
                  >
                    Earrings
                  </button>
                  <button 
                    onClick={() => setCustomizerType('ring')}
                    className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider font-body font-bold transition-all duration-300 active:scale-95 ${customizerType === 'ring' ? 'bg-[#e5a9a9] text-black' : 'bg-blue-950/40 text-slate-400'}`}
                  >
                    Ring
                  </button>
                </div>

                <div className="flex-grow flex items-center justify-center relative w-full my-8">
                  {/* Dynamic Graphic */}
                  {customizerType === 'earrings' ? (
                    <svg width="220" height="220" viewBox="0 0 100 100" className="transition-all duration-500">
                      {/* Left Earring */}
                      <g transform="translate(-15, 0)">
                        <circle cx="45" cy="25" r="3" fill={METAL_RATES[metal].color} />
                        <line x1="45" y1="25" x2="45" y2="45" stroke={METAL_RATES[metal].color} strokeWidth="2" />
                        <path d="M 38,45 L 52,45 L 45,60 Z" fill={GEMSTONE_RATES[gemstone].color} stroke={METAL_RATES[metal].color} strokeWidth="0.5" />
                        <circle cx="45" cy="65" r="2" fill="#fffbeb" />
                      </g>
                      
                      {/* Right Earring */}
                      <g transform="translate(15, 0)">
                        <circle cx="55" cy="25" r="3" fill={METAL_RATES[metal].color} />
                        <line x1="55" y1="25" x2="55" y2="45" stroke={METAL_RATES[metal].color} strokeWidth="2" />
                        <path d="M 48,45 L 62,45 L 55,60 Z" fill={GEMSTONE_RATES[gemstone].color} stroke={METAL_RATES[metal].color} strokeWidth="0.5" />
                        <circle cx="55" cy="65" r="2" fill="#fffbeb" />
                      </g>
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
                        strokeWidth="3.5"
                        className="transition-all duration-500"
                      />
                      <circle 
                        cx="50" 
                        cy="55" 
                        r="18.5" 
                        fill="none" 
                        stroke="#030611" 
                        strokeWidth="0.5"
                      />
                      {/* Modern Facet Setting */}
                      <path 
                        d="M 43,36 L 57,36 L 53,42 L 47,42 Z" 
                        fill={METAL_RATES[metal].color} 
                      />
                      {/* Center Solitaire Gem */}
                      <polygon 
                        points="50,20 58,28 54,36 46,36 42,28" 
                        fill={GEMSTONE_RATES[gemstone].color}
                        stroke={METAL_RATES[metal].color}
                        strokeWidth="0.5"
                        className="transition-all duration-500"
                      />
                      <circle cx="50" cy="28" r="2" fill="white" opacity="0.9" />
                    </svg>
                  )}
                </div>

                <div className="w-full text-center border-t border-blue-500/20 pt-4">
                  <div className="text-xs font-body text-slate-400">Calibration Profile</div>
                  <div className="text-sm font-body font-semibold text-white mt-1">
                    {metalWeight}g {METAL_RATES[metal].label} / {gemCarat} Carats {GEMSTONE_RATES[gemstone].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Configurations (Right) */}
            <div className="lg:col-span-7 sapphire-glass rounded-3xl p-8 flex flex-col gap-8">
              {/* Metal Selection */}
              <div>
                <label className="block text-xs font-body tracking-wider uppercase text-slate-300 font-bold mb-3">
                  1. Select Precious Metal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(METAL_RATES).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setMetal(key)}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 active:scale-95 ${metal === key ? 'border-[#e5a9a9] bg-slate-900/60 shadow-[0_0_15px_rgba(229,169,169,0.1)]' : 'border-slate-800 bg-transparent text-slate-400 hover:border-slate-700'}`}
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
                  2. Select Gemstone Cut
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(GEMSTONE_RATES).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setGemstone(key)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 active:scale-95 ${gemstone === key ? 'border-[#e5a9a9] bg-slate-900/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-slate-800 bg-transparent text-slate-400 hover:border-slate-700'}`}
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
                    <span>Metal Weight</span>
                    <span className="text-[#e5a9a9]">{metalWeight} Grams</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    step="5"
                    value={metalWeight} 
                    onChange={(e) => setMetalWeight(Number(e.target.value))}
                    className="w-full accent-[#e5a9a9] bg-slate-800 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-body mt-1">
                    <span>5g</span>
                    <span>60g</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-body text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                    <span>Gemstone Carats</span>
                    <span className="text-[#e5a9a9]">{gemCarat} Carats</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.2" 
                    max="8.0" 
                    step="0.2"
                    value={gemCarat} 
                    onChange={(e) => setGemCarat(Number(e.target.value))}
                    className="w-full accent-[#e5a9a9] bg-slate-800 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-body mt-1">
                    <span>0.2 ct</span>
                    <span>8.0 ct</span>
                  </div>
                </div>
              </div>

              {/* Estimate Calculations */}
              <div className="border-t border-blue-500/20 pt-6">
                <div className="flex items-center gap-2 text-xs font-body tracking-wider text-slate-400 uppercase mb-4">
                  <Info size={14} className="text-[#e5a9a9]" />
                  <span>Itemized Price Estimate</span>
                </div>
                
                <div className="space-y-2 text-xs font-body text-slate-400">
                  <div className="flex justify-between">
                    <span>Metal Base Price ({metalWeight}g):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.metalVal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gemstone Cut Value ({gemCarat} ct):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.gemVal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Handcrafting & Finishing ({metal === 'platinum' ? '15%' : '12%'}):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.makingCharges)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Government Tax (3% GST):</span>
                    <span className="text-slate-200">{formatCurrency(pricing.gst)}</span>
                  </div>
                  
                  <div className="flex justify-between text-base font-display text-white border-t border-dashed border-blue-500/20 pt-4 mt-2">
                    <span className="text-[#e5a9a9]">Estimated Total Price:</span>
                    <span className="font-bold text-[#e5a9a9]">{formatCurrency(pricing.total)}</span>
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
                className="w-full py-4 text-center rounded-xl bg-[#e5a9a9] hover:bg-[#b87a7a] text-black font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95"
              >
                Inquire With Atelier
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-body tracking-widest text-blue-400 font-bold uppercase block mb-3">SIGNATURE EDITIONS</span>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-medium">
            Signature Collection
          </h2>
          <p className="font-body text-slate-400 text-sm mt-4">
            Contemporary designs incorporating laser-cut solitaire diamonds, minimalist platinum, and delicate rose gold alignments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Jubilee Hills Solitaire Ring",
              description: "A signature classic setting, utilizing a solid platinum band holding a brilliant round-cut GIA-certified diamond solitaire.",
              features: ["Solid Platinum 950", "GIA Certified Solitaire", "Six-Prong Crown Setting"],
              priceRange: "₹4,00,000 - ₹9,50,000"
            },
            {
              title: "Rose-Gold Chandelier Choker",
              description: "Delicate mesh pattern of 18K rose gold holding a cascade of brilliant diamonds, creating a fluid contemporary fit.",
              features: ["18K Rose Gold", "Chandelier Drop Diamonds", "Fluid Mesh Framework"],
              priceRange: "₹9,00,000 - ₹16,00,000"
            },
            {
              title: "Madhapur Cocktail Strings",
              description: "Sleek contemporary stringing combining alternating white diamonds and premium Colombian emerald blocks with platinum dividers.",
              features: ["Alternating Princess Cuts", "Colombian Emerald Blocks", "Platinum Spacers"],
              priceRange: "₹6,50,000 - ₹11,00,000"
            }
          ].map((col, index) => (
            <div key={index} className="sapphire-glass sapphire-glass-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(229,169,169,0.06)_0%,transparent_70%)] transition-all duration-300"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-blue-500/10 text-[#e5a9a9]">
                    <Gem size={20} />
                  </div>
                  <span className="text-[10px] font-body tracking-wider text-slate-500 font-bold uppercase">Modern Edition</span>
                </div>

                <h3 className="font-display text-2xl text-white group-hover:rose-gold-gradient transition-all duration-300 mb-3">
                  {col.title}
                </h3>
                <p className="font-body text-slate-400 text-xs leading-relaxed mb-6">
                  {col.description}
                </p>

                <div className="space-y-2 border-t border-blue-500/10 pt-4 mb-6">
                  {col.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-body text-slate-300">
                      <Check className="text-blue-400 size-3" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] font-body uppercase text-slate-500">Price Guide:</span>
                <span className="text-xs font-body font-bold text-[#e5a9a9]">{col.priceRange}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Design Consultation */}
      <section id="consultation" className="py-24 border-t border-blue-950/40 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.02)_0%,transparent_80%)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-body tracking-widest text-[#e5a9a9] font-bold uppercase block mb-3">PRIVATE BOOKINGS</span>
            <h2 className="font-display text-4xl text-white font-medium">
              Virtual Design Consultation
            </h2>
            <p className="font-body text-slate-400 text-sm mt-3">
              Book a digital video layout review or custom styling preview with our Lead Designer inside the Jubilee Hills bridal suite.
            </p>
          </div>

          <div className="sapphire-glass rounded-3xl p-8 relative overflow-hidden">
            {/* Submit Loader Cover */}
            {isSubmitting && (
              <div className="absolute inset-0 bg-[#030611]/85 backdrop-blur-sm z-20 flex flex-col justify-center items-center gap-3">
                <Loader2 className="animate-spin text-[#e5a9a9] size-10" />
                <span className="font-body text-xs tracking-wider text-slate-300 uppercase font-semibold">Reserving Exclusive Session...</span>
              </div>
            )}

            {/* Success Screen */}
            {submitSuccess ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-900/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Check className="size-8" />
                </div>
                <h3 className="font-display text-2xl text-white">Consultation Suite Booked</h3>
                <p className="font-body text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                  Our customer relationship representative has received your request. We will contact you at your email or phone number in the next 3 business hours to finalize the schedule.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded sapphire-glass text-[#e5a9a9] font-body text-xs uppercase tracking-wider font-bold transition-all duration-300 active:scale-95"
                >
                  Book New Session
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
                      placeholder="e.g. Shalini Reddy"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/20 border font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9] transition-all ${errors.name ? 'border-red-500' : 'border-slate-800'}`}
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
                      placeholder="e.g. 9963011229"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/20 border font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9] transition-all ${errors.phone ? 'border-red-500' : 'border-slate-800'}`}
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
                      placeholder="e.g. shalini.r@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/20 border font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9] transition-all ${errors.email ? 'border-red-500' : 'border-slate-800'}`}
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
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/20 border font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9] transition-all ${errors.date ? 'border-red-500' : 'border-slate-800'}`}
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
                      className="w-full px-4 py-3 rounded-lg bg-[#030611] border border-slate-800 font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9]"
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
                      className="w-full px-4 py-3 rounded-lg bg-[#030611] border border-slate-800 font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9]"
                    >
                      <option value="diamond-solitaire">Calibrated Solitaire Diamonds</option>
                      <option value="rose-gold-bridal">Rose Gold Bridal Mesh</option>
                      <option value="cocktail-collection">Madhapur Cocktail Strings</option>
                      <option value="pearl-luxury">South Sea Pearl Strings</option>
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
                    placeholder="Provide any custom dimensions, diamond cuts, or specific references you wish to review..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/20 border border-slate-800 font-body text-xs text-white focus:outline-none focus:border-[#e5a9a9] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-body">
                  <Shield size={12} className="text-blue-500" />
                  <span>Your luxury portfolio details are completely secure and private.</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#e5a9a9] hover:bg-[#b87a7a] text-black font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Reserve Suite Appointment</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-body tracking-widest text-blue-400 font-bold uppercase block mb-3">EXPERIENCES</span>
          <h2 className="font-display text-4xl text-white font-medium">
            Client Testimonials
          </h2>
          <p className="font-body text-slate-400 text-sm mt-3">
            What Hyderabad's elite designers and collectors say about their experience with Tibarumal Ramnivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "The GIA certified diamond rings at their Jubilee Hills suite are breathtaking. I designed my custom wedding band using their studio layout, and the outcome exceeded expectations.",
              author: "Pooja Hegde",
              location: "Jubilee Hills, Hyderabad",
              rating: 5
            },
            {
              quote: "Their contemporary rose gold choker is a conversation starter at every event. They offer a refined, light-weight cosmopolitan aesthetic that stands out in Hyderabad.",
              author: "Anitha R.",
              location: "Madhapur, Hyderabad",
              rating: 5
            },
            {
              quote: "Remarkable service. They coordinated a private video consultation for my family in Secunderabad, guiding us step-by-step through diamond color and clarity classifications.",
              author: "Dr. K. Raghavan",
              location: "Secunderabad, Hyderabad",
              rating: 5
            }
          ].map((story, i) => (
            <div key={i} className="sapphire-glass rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#e5a9a9]">
                  {[...Array(story.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-body text-slate-300 text-xs italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
              <div className="border-t border-blue-500/10 pt-4 mt-6">
                <span className="font-body text-xs font-bold text-white block">{story.author}</span>
                <span className="font-body text-[10px] text-[#e5a9a9] uppercase tracking-widest font-semibold mt-0.5 block">{story.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010206] border-t border-blue-950/40 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Identity */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-display text-2xl tracking-[0.25em] text-white font-medium">TIBARUMAL RAMNIVAS</span>
            <span className="text-[10px] font-body tracking-[0.45em] text-[#e5a9a9] uppercase font-semibold">Jubilee Hills, Hyderabad</span>
            <p className="font-body text-xs text-slate-505 leading-relaxed max-w-sm">
              Elite designers of contemporary diamond ornaments, custom platinum wedding configurations, and certified solitaire jewelry.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col gap-4 font-body text-xs text-slate-400">
            <span className="font-display text-base text-white tracking-wider">Atelier Suite</span>
            
            <div className="flex gap-3 items-start mt-2">
              <MapPin size={16} className="text-[#e5a9a9] shrink-0 mt-0.5" />
              <span>Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033.</span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={16} className="text-[#e5a9a9] shrink-0" />
              <span>+91 40 4004 9999</span>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={16} className="text-[#e5a9a9] shrink-0" />
              <span>info@tibarumalramnivas.com</span>
            </div>
          </div>

          {/* Hours & Assurance */}
          <div className="md:col-span-3 flex flex-col gap-4 font-body text-xs text-slate-400">
            <span className="font-display text-base text-white tracking-wider">Showroom Hours</span>
            
            <div className="flex gap-3 items-start mt-2">
              <Clock size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span>Monday - Saturday</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">10:30 AM - 8:30 PM (Sundays Closed)</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Shield size={16} className="text-blue-400 shrink-0" />
              <span>Secured Premium Valet Available</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-body text-slate-600 gap-4">
          <span>&copy; 2026 Tibarumal Ramnivas Jewellers Jubilee Hills. All Rights Reserved.</span>
          <span className="tracking-widest uppercase text-[#e5a9a9]/70 font-semibold">GIA & IGI Certified Diamonds Only</span>
        </div>
      </footer>
    </div>
  );
}

"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Gem, Crown, Sliders, 
  MessageSquare, Heart, Share2, Instagram, ArrowRight, Shield, 
  Check, Calendar, User, Eye, ShieldCheck, Info
} from 'lucide-react';

export default function TotaramSonsPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Pearl');
  const [metalWeight, setMetalWeight] = useState(25); // in grams
  const [gemCount, setGemCount] = useState(12); // carats/units

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7100,
    '18K Rose Gold': 6000,
    'Platinum': 3900
  };

  const gemstonePrices = {
    'Diamond': 95000,
    'Emerald': 48000,
    'Ruby': 38000,
    'Pearl': 15000
  };

  const calculatePrice = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const makingCharges = subtotal * 0.12; // 12% traditional making charges
    return Math.round(subtotal + makingCharges);
  };

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full name is required';
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
      errs.date = 'Preferred date is required';
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
        id: `TSJ-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Neumorphic Styling Variables
  const bgMain = 'bg-[#FAF6EE]';
  const textDark = 'text-[#3E2723]';
  const accentGold = '#C5A880';
  
  // Shadows (outset, inset, active)
  const neumorphicOutset = 'shadow-[8px_8px_16px_#e5dfd5,-8px_-8px_16px_#ffffff]';
  const neumorphicInset = 'shadow-[inset_6px_6px_12px_#e5dfd5,inset_-6px_-6px_12px_#ffffff]';
  const neumorphicActive = 'active:shadow-[inset_4px_4px_8px_#e5dfd5,inset_-4px_-4px_8px_#ffffff]';

  // Customizer Visual Colors
  const metalColors = {
    '22K Gold': '#D4AF37',
    '18K Rose Gold': '#E0115F',
    'Platinum': '#E5E4E2'
  };

  const gemColors = {
    'Diamond': '#E0F2FE',
    'Emerald': '#10B981',
    'Ruby': '#EF4444',
    'Pearl': '#FDFBF7'
  };

  return (
    <div className={`min-h-screen ${bgMain} ${textDark} font-sans selection:bg-[#C5A880]/20 antialiased pb-1`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-serif-ts { font-family: 'Prata', serif; }
        .font-sans-ts { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#FAF6EE]/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col items-start">
              <span className="font-serif-ts text-xl lg:text-2xl tracking-widest uppercase text-[#5D4037] font-semibold">
                Totaram & Sons Jewellers
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-light text-slate-500 font-sans-ts mt-1">
                Heritage Artistry Since 1901 • Abids
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 font-sans-ts text-[10px] uppercase tracking-widest font-semibold text-slate-600">
              <a href="#heritage" className="hover:text-[#8D6E63] transition-colors py-1">Heritage</a>
              <a href="#customizer" className="hover:text-[#8D6E63] transition-colors py-1">Interactive Customizer</a>
              <a href="#collections" className="hover:text-[#8D6E63] transition-colors py-1">Signature Collections</a>
              <a href="#consultation" className="hover:text-[#8D6E63] transition-colors py-1">Consultation</a>
            </div>

            <div className="hidden md:block">
              <a 
                href="#consultation" 
                className={`inline-flex items-center px-5 py-3 ${neumorphicOutset} ${neumorphicActive} border border-white/50 text-[#5D4037] hover:text-[#8D6E63] transition-all text-[10px] uppercase tracking-widest font-bold rounded-lg`}
              >
                Book Showroom Tour
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Info Column */}
            <div className="flex flex-col space-y-8 text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${neumorphicInset} border border-white/40 text-[#5D4037] text-[10px] font-sans-ts tracking-wider w-fit font-semibold`}>
                <Crown size={12} className="text-[#C5A880]" />
                <span>Nizam Imperial Gold & Certified Basra Pearls</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif-ts leading-tight text-[#3E2723]">
                Centuries of Trust, <br />
                <span className="italic font-light text-[#8D6E63]">Woven in Traditional Gold</span>
              </h1>
              
              <p className="text-xs lg:text-sm text-slate-600 font-sans-ts leading-relaxed max-w-lg">
                For over a century, Totaram & Sons has defined the golden standard of jewellery in Jagdish Market, Abids. Our signature temple necklaces, solid chokers, and certified Basra pearl strings are heirloom artifacts handcrafted with ancient Nizami techniques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4 font-sans-ts">
                <a 
                  href="#customizer" 
                  className={`inline-flex justify-center items-center px-6 py-4 bg-[#8D6E63] text-white hover:bg-[#5D4037] font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95`}
                >
                  Customise Heirloom Art
                  <ArrowRight size={12} className="ml-2" />
                </a>
                
                <a 
                  href="#collections" 
                  className={`inline-flex justify-center items-center px-6 py-4 ${neumorphicOutset} ${neumorphicActive} border border-white/50 text-[#5D4037] font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all`}
                >
                  Explore Collection
                </a>
              </div>
            </div>

            {/* Right Frame Visual Column */}
            <div className="relative flex justify-center">
              <div className={`relative w-[340px] h-[440px] md:w-[400px] md:h-[500px] ${neumorphicOutset} p-4 bg-[#FAF6EE] rounded-3xl border border-white/60`}>
                <div className={`w-full h-full ${neumorphicInset} rounded-2xl flex flex-col justify-between items-center p-8 relative overflow-hidden bg-[#FAF6EE]`}>
                  {/* Decorative corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#8D6E63]/40"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#8D6E63]/40"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#8D6E63]/40"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#8D6E63]/40"></div>
                  
                  <div className="w-full flex justify-between items-center text-[9px] text-[#8D6E63] font-sans-ts tracking-widest uppercase font-semibold">
                    <span>Authentic</span>
                    <span>EST. 1901</span>
                  </div>

                  {/* Central Medallion */}
                  <div className="my-auto flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <svg className="w-full h-full animate-[spin_50s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="3 3" />
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 360) / 12;
                          const r = 38;
                          const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                          const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                          return (
                            <circle key={i} cx={x} cy={y} r="2.5" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="1" />
                          );
                        })}
                      </svg>
                      
                      {/* Inner gold crest */}
                      <div className={`absolute w-24 h-24 rounded-full ${neumorphicOutset} flex items-center justify-center bg-[#FAF6EE] border border-white/50`}>
                        <Crown size={28} className="text-[#D4AF37] animate-pulse" />
                      </div>
                    </div>
                    
                    <span className="font-serif-ts text-lg text-[#3E2723] mt-6 tracking-wide text-center">Nizami Temple Haar</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#8D6E63] font-sans-ts font-semibold mt-1">22K Antique Gold & Ruby</span>
                  </div>

                  <div className="w-full flex justify-center gap-1.5 items-center">
                    <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 border-t border-[#e5dfd5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-semibold text-[#8D6E63] uppercase tracking-[0.25em] font-sans-ts">Golden Legacy</span>
            <h2 className="text-3xl lg:text-4xl font-serif-ts text-[#3E2723] mt-3">Heritage of Hyderabad Court Artistry</h2>
            <div className="w-12 h-[1px] bg-[#8D6E63] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center font-sans-ts">
            
            <div className={`flex flex-col items-center space-y-4 p-8 bg-[#FAF6EE] ${neumorphicOutset} border border-white/40 rounded-2xl`}>
              <div className={`w-16 h-16 rounded-full ${neumorphicInset} flex items-center justify-center text-[#8D6E63] border border-white/40`}>
                <Award size={22} />
              </div>
              <h3 className="font-serif-ts text-xl text-[#3E2723] font-semibold">125 Years of Purity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Founded in 1901 in Abids, we are among the oldest certified gold merchants of Hyderabad, retaining original Nizami custom design registers.
              </p>
            </div>

            <div className={`flex flex-col items-center space-y-4 p-8 bg-[#FAF6EE] ${neumorphicOutset} border border-white/40 rounded-2xl`}>
              <div className={`w-16 h-16 rounded-full ${neumorphicInset} flex items-center justify-center text-[#8D6E63] border border-white/40`}>
                <Crown size={22} />
              </div>
              <h3 className="font-serif-ts text-xl text-[#3E2723] font-semibold">Nizami Mastercraft</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We employ generational Karigars who specialise in traditional Chinchada pearl alignment and hand-beaten gold sheet ornamentation.
              </p>
            </div>

            <div className={`flex flex-col items-center space-y-4 p-8 bg-[#FAF6EE] ${neumorphicOutset} border border-white/40 rounded-2xl`}>
              <div className={`w-16 h-16 rounded-full ${neumorphicInset} flex items-center justify-center text-[#8D6E63] border border-white/40`}>
                <Sparkles size={22} />
              </div>
              <h3 className="font-serif-ts text-xl text-[#3E2723] font-semibold">Genuine Certifications</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every gemstone and pearl is individually laboratory tested with BIS Hallmarked 22K Gold and formal certificate reports.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-24 border-t border-[#e5dfd5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-semibold text-[#8D6E63] uppercase tracking-[0.25em] font-sans-ts">Bespoke Workshop</span>
            <h2 className="text-3xl lg:text-4xl font-serif-ts text-[#3E2723] mt-3">Interactive Antique Jewelry Customizer</h2>
            <p className="text-slate-500 text-xs font-sans-ts mt-2">Design your signature heirloom piece. Choose precious metals, pick raw gemstones, adjust gold weights, and check estimations in real-time.</p>
            <div className="w-12 h-[1px] bg-[#8D6E63] mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Customizer Controls Panel */}
            <div className={`lg:col-span-7 p-8 md:p-10 ${neumorphicOutset} bg-[#FAF6EE] rounded-3xl border border-white/50`}>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#8D6E63]/20">
                <Sliders className="text-[#8D6E63]" size={16} />
                <h3 className="font-serif-ts text-xl text-[#3E2723]">Customizer Settings</h3>
              </div>

              <div className="space-y-8 font-sans-ts text-xs">
                
                {/* Metal Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-600 mb-4">
                    1. Precious Metal Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                      <button
                        key={metal}
                        onClick={() => setMetalType(metal)}
                        className={`py-3 px-4 text-center border border-white/40 text-[10px] uppercase tracking-wider font-bold rounded-xl transition-all ${neumorphicActive} ${
                          metalType === metal
                            ? 'bg-[#8D6E63] text-white shadow-inner border-[#8D6E63]'
                            : `${neumorphicOutset} text-[#3E2723] hover:text-[#8D6E63]`
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
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-600">
                      2. Metal Weight (Grams)
                    </label>
                    <span className="font-mono font-bold text-[#8D6E63] text-sm">{metalWeight}g</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={metalWeight}
                    onChange={(e) => setMetalWeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#8D6E63] cursor-pointer rounded-lg"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>15g</span>
                    <span>58g</span>
                    <span>100g</span>
                  </div>
                </div>

                {/* Gemstone Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-600 mb-4">
                    3. Highlight Gemstone
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {['Pearl', 'Diamond', 'Emerald', 'Ruby'].map((gem) => (
                      <button
                        key={gem}
                        onClick={() => setGemstone(gem)}
                        className={`py-3 px-2 text-center border border-white/40 text-[10px] uppercase tracking-wider font-bold rounded-xl transition-all ${neumorphicActive} ${
                          gemstone === gem
                            ? 'bg-[#8D6E63] text-white shadow-inner border-[#8D6E63]'
                            : `${neumorphicOutset} text-[#3E2723] hover:text-[#8D6E63]`
                        }`}
                      >
                        {gem}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gemstone Volume Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-600">
                      4. Gemstone Volume ({gemstone === 'Pearl' ? 'Units' : 'Carats'})
                    </label>
                    <span className="font-mono font-bold text-[#8D6E63] text-sm">
                      {gemCount} {gemstone === 'Pearl' ? 'Pearls' : 'Ct'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={gemCount}
                    onChange={(e) => setGemCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#8D6E63] cursor-pointer rounded-lg"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>2</span>
                    <span>16</span>
                    <span>30</span>
                  </div>
                </div>

                {/* Pricing Summary Box */}
                <div className={`pt-6 mt-6 border border-white/40 ${neumorphicInset} p-5 rounded-2xl`}>
                  <div className="space-y-3 text-xs text-slate-600 font-medium">
                    <div className="flex justify-between">
                      <span>Metal base ({metalType} @ ₹{metalPrices[metalType]}/g):</span>
                      <span className="font-mono text-slate-800">₹{(metalWeight * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gemstone ({gemstone} @ ₹{gemstonePrices[gemstone]}/{gemstone === 'Pearl' ? 'unit' : 'ct'}):</span>
                      <span className="font-mono text-slate-800">₹{(gemCount * gemstonePrices[gemstone]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Making Charges (12%):</span>
                      <span className="font-mono text-slate-800">
                        ₹{Math.round((metalWeight * metalPrices[metalType] + gemCount * gemstonePrices[gemstone]) * 0.12).toLocaleString('en-IN')}
                      </span>
                    </div>
                    
                    <div className="h-[1px] bg-white/40 my-2"></div>
                    
                    <div className="flex justify-between items-end text-sm text-[#3E2723] font-bold">
                      <span className="uppercase tracking-wider">Estimated Showroom Quote:</span>
                      <span className="font-mono text-base text-[#8D6E63]">
                        ₹{calculatePrice().toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Customizer Realtime Mock Visual */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-32">
              <div className={`p-8 ${neumorphicOutset} bg-[#FAF6EE] flex flex-col items-center justify-center relative rounded-3xl border border-white/60 min-h-[380px]`}>
                
                <div className="absolute top-4 left-4 text-[9px] tracking-widest uppercase text-slate-400 font-sans-ts font-bold">
                  Bespoke Preview
                </div>

                {/* SVG Visualizer */}
                <div className="w-56 h-56 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="goldBase" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="85%" stopColor={metalColors[metalType]} />
                        <stop offset="100%" stopColor="#5D4037" />
                      </radialGradient>
                      <radialGradient id="gemGlow" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={gemColors[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Temple Arch Backdrop */}
                    <path 
                      d="M 15,90 A 35,45 0 0,1 85,90" 
                      fill="none" 
                      stroke="#FAF6EE" 
                      strokeWidth="2.5" 
                    />
                    <path 
                      d="M 20,85 A 30,40 0 0,1 80,85" 
                      fill="none" 
                      stroke="#E5DFD5" 
                      strokeWidth="0.5" 
                      strokeDasharray="2 2"
                    />

                    {/* Main heavy gold necklace collar */}
                    <path
                      d="M 22,25 A 28,32 0 0,0 78,25"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />

                    {/* Detailed inner gold band */}
                    <path
                      d="M 26,27 A 24,28 0 0,0 74,27"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      opacity="0.8"
                    />

                    {/* Render gems aligned on the necklace collar */}
                    {[...Array(Math.min(gemCount, 16))].map((_, idx) => {
                      const count = Math.min(gemCount, 16);
                      const pct = count > 1 ? idx / (count - 1) : 0.5;
                      const angle = Math.PI + pct * Math.PI; // arcs from left to right (180 deg to 360 deg)
                      const rX = 26;
                      const rY = 30;
                      const x = 50 + rX * Math.cos(angle);
                      const y = 25 - rY * Math.sin(angle);
                      return (
                        <circle
                          key={idx}
                          cx={x}
                          cy={y}
                          r={gemstone === 'Pearl' ? '2.5' : '1.8'}
                          fill="url(#gemGlow)"
                          stroke={metalColors[metalType]}
                          strokeWidth="0.3"
                        />
                      );
                    })}

                    {/* Symmetrical Nizam Traditional Pendant */}
                    <line x1="50" y1="56" x2="50" y2="72" stroke={metalColors[metalType]} strokeWidth="2" />
                    
                    {/* Pendant Crest */}
                    <polygon 
                      points="50,65 58,74 50,83 42,74" 
                      fill="url(#goldBase)" 
                      stroke={metalColors[metalType]} 
                      strokeWidth="0.5" 
                    />

                    {/* Gem inside the pendant */}
                    <circle cx="50" cy="74" r="4.5" fill="url(#gemGlow)" stroke="#FFFFFF" strokeWidth="0.4" />
                  </svg>
                </div>

                <div className="text-center font-sans-ts mt-6">
                  <span className="text-[9px] uppercase tracking-widest text-[#8D6E63] font-bold">Heirloom Configurator</span>
                  <p className="text-sm font-serif-ts text-[#3E2723] mt-1 font-bold">
                    Custom {metalType} {gemstone} Ornament
                  </p>
                </div>
              </div>

              <a 
                href="#consultation" 
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    notes: `Bespoke Customizer Specification: Custom ${metalType} base with ${gemCount} ${gemstone}(s), weighing ${metalWeight}g. Quote estimate: ₹${calculatePrice().toLocaleString('en-IN')}`
                  }));
                }}
                className={`w-full text-center py-4 bg-[#8D6E63] text-white hover:bg-[#5D4037] font-sans-ts font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95`}
              >
                Apply Customizer Spec to Appointment
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-24 border-t border-[#e5dfd5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-semibold text-[#8D6E63] uppercase tracking-[0.25em] font-sans-ts">The Vault</span>
            <h2 className="text-3xl lg:text-4xl font-serif-ts text-[#3E2723] mt-3">Signature Collections</h2>
            <div className="w-12 h-[1px] bg-[#8D6E63] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 font-sans-ts">
            {[
              {
                title: "Nizami Basra Pearl Haar",
                desc: "Triple layered strand of authentic hand-certified Basra pearls with a floral ruby pendant.",
                price: "₹6,50,000",
                material: "Basra Pearls, 22K Gold, Ruby",
                icon: <Crown size={30} className="text-[#C5A880]/60" />
              },
              {
                title: "Abids Antique Girdle",
                desc: "Handcrafted 22K temple-motif waist belt studded with flat diamonds and natural emerald drops.",
                price: "₹12,80,000",
                material: "22K Yellow Gold, Polki, Emerald",
                icon: <Award size={30} className="text-[#C5A880]/60" />
              },
              {
                title: "Royal Heritage Polki Choker",
                desc: "Ancient Jadau setting using un-cut diamonds and red meenakari inlay work on reverse.",
                price: "₹8,20,000",
                material: "22K Gold, Polki Diamonds, Ruby",
                icon: <Gem size={30} className="text-[#C5A880]/60" />
              },
              {
                title: "Gulabi Meenakari Jhumkas",
                desc: "Symmetrical royal earrings in classical pink enamel, outlined in pearls and seed rubies.",
                price: "₹2,50,000",
                material: "22K Gold, Freshwater Pearls",
                icon: <Sparkles size={30} className="text-[#C5A880]/60" />
              }
            ].map((col, idx) => (
              <div 
                key={idx} 
                className={`bg-[#FAF6EE] p-6 flex flex-col justify-between hover:shadow-[10px_10px_20px_#e5dfd5,-10px_-10px_20px_#ffffff] transition-all duration-300 rounded-2xl border border-white/50 group`}
              >
                <div>
                  <div className={`w-full h-44 ${neumorphicInset} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden bg-[#FAF6EE]`}>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {col.icon}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-white/40 text-[8px] font-bold uppercase tracking-wider bg-[#FAF6EE] rounded text-[#8D6E63]">
                      BIS Hallmark
                    </div>
                  </div>
                  
                  <span className="text-[9px] uppercase tracking-widest text-[#8D6E63] font-bold block mb-2">{col.material}</span>
                  <h3 className="font-serif-ts text-sm text-[#3E2723] mb-3 group-hover:text-[#8D6E63] transition-colors font-semibold">{col.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6">{col.desc}</p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/40">
                  <span className="font-mono text-xs font-bold text-[#3E2723]">{col.price}</span>
                  <a 
                    href="#consultation" 
                    onClick={() => setForm(prev => ({ ...prev, notes: `Inquiry regarding: ${col.title} (${col.price})` }))}
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest text-[#8D6E63] group-hover:translate-x-1 transition-all"
                  >
                    Inquire <ChevronRight size={10} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Virtual Design Consultation Section */}
      <section id="consultation" className="py-24 border-t border-[#e5dfd5]">
        <div className="max-w-2xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-semibold text-[#8D6E63] uppercase tracking-[0.25em] font-sans-ts">Showroom Consultation</span>
            <h2 className="text-3xl lg:text-4xl font-serif-ts text-[#3E2723] mt-3">Virtual Design Consultation</h2>
            <p className="text-slate-500 text-xs font-sans-ts mt-2">Reserve a private high-definition video call or catalog tour. Our third-generation jewellery curators will assist you.</p>
            <div className="w-12 h-[1px] bg-[#8D6E63] mx-auto mt-6"></div>
          </div>

          <div className={`p-8 md:p-10 ${neumorphicOutset} bg-[#FAF6EE] rounded-3xl border border-white/50`}>
            {submittedData ? (
              <div className="text-center py-6 space-y-6 font-sans-ts">
                <div className={`w-14 h-14 ${neumorphicInset} text-green-600 rounded-full flex items-center justify-center mx-auto border border-white/40`}>
                  <Check size={22} />
                </div>
                <h3 className="font-serif-ts text-xl text-slate-800 font-semibold">Consultation Scheduled</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. We have registered your reservation. A showroom coordinator from Jagdish Market will contact you shortly.
                </p>
                <div className={`bg-[#FAF6EE] ${neumorphicInset} p-5 rounded-2xl max-w-xs mx-auto text-left text-[10px] space-y-2 border border-white/30`}>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider">BOOKING ID:</span> <span className="font-mono font-bold text-slate-700">{submittedData.id}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider">DATE SELECTED:</span> <span className="font-bold text-slate-700">{submittedData.date}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider">PHONE NUMBER:</span> <span className="font-mono font-bold text-slate-700">{submittedData.phone}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider">SHOWROOM:</span> <span className="font-bold text-slate-700">Jagdish Market, Abids</span></div>
                </div>
                
                <button
                  onClick={() => setSubmittedData(null)}
                  className={`px-5 py-3 ${neumorphicOutset} ${neumorphicActive} text-[#8D6E63] font-bold text-[9px] uppercase tracking-widest rounded-xl transition-all border border-white/40`}
                >
                  Schedule Another Consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-sans-ts text-[10px] tracking-wide">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-[#FAF6EE] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all`}
                      placeholder="e.g. Swaroop Sen"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-wider mb-2">PHONE NUMBER *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-[#FAF6EE] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all`}
                      placeholder="e.g. +91 40 2320 1909"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-3.5 bg-[#FAF6EE] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all`}
                      placeholder="e.g. swaroop@totaramsons.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-wider mb-2">PREFERRED DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-3.5 bg-[#FAF6EE] border border-white/40 ${neumorphicInset} rounded-xl text-slate-700 focus:outline-none transition-all`}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p className="text-red-500 mt-1 text-[9px] font-semibold">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold uppercase tracking-wider mb-2">PROJECT DESIGN NOTES</label>
                  <textarea
                    rows="4"
                    className={`w-full p-3.5 bg-[#FAF6EE] border border-white/40 ${neumorphicInset} rounded-xl text-slate-800 focus:outline-none transition-all resize-none`}
                    placeholder="Specify initial necklace lengths, gold gram ranges, basra pearl sizes, or Nizam style options you wish to discuss..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#8D6E63] text-white hover:bg-[#5D4037] font-sans-ts font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-md flex justify-center items-center gap-2 active:scale-95 disabled:opacity-50`}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={12} className="animate-spin" />
                      Requesting Appointment...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Request Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 border-t border-[#e5dfd5] bg-[#FAF6EE]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-semibold text-[#8D6E63] uppercase tracking-[0.25em] font-sans-ts">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-serif-ts text-[#3E2723] mt-3">Abids Client Testimonials</h2>
            <div className="w-12 h-[1px] bg-[#8D6E63] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-sans-ts text-xs">
            {[
              {
                text: "Totaram & Sons Jewellers is where our family has purchased wedding gold since my grandmother's time. The traditional craftsmanship of their Jadau chokers is unmatched in all of Abids.",
                author: "Anitha Reddy",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "The interactive customizer here helped me configure a 22K gold pearl string proposal before visiting the Jagdish Market showroom. Absolute trust and transparency in Basra pearl certificate records.",
                author: "Rakesh Agarwal",
                location: "Begumpet, Hyderabad",
                rating: 5
              },
              {
                text: "Exquisite temple work and very welcoming staff. They conducted a remote design consult via Zoom for my daughter's bridal haar, showing us the detailed certificate weight breakdown.",
                author: "Padmaja Chary",
                location: "Secunderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div 
                key={i} 
                className={`p-8 bg-[#FAF6EE] flex flex-col justify-between hover:shadow-[10px_10px_20px_#e5dfd5,-10px_-10px_20px_#ffffff] transition-all rounded-2xl border border-white/50`}
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/40 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${neumorphicInset} flex items-center justify-center text-xs font-serif-ts font-bold text-[#8D6E63] border border-white/40`}>
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#3E2723]">{review.author}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF6EE] text-[#3E2723] py-16 border-t border-[#e5dfd5] font-sans-ts text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <h3 className="font-serif-ts text-lg uppercase tracking-wider text-[#5D4037]">Totaram & Sons</h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Handcrafting traditional Nizam-inspired heirloom gold and certified Basra pearl strings in Abids since 1901. Passed down through three generations of master goldsmiths.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h3 className="font-serif-ts text-sm uppercase tracking-widest text-[#8D6E63] font-bold">Showroom Details</h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#8D6E63] shrink-0 mt-0.5" />
                <span>Jagdish Market, Abids, Hyderabad, Telangana 500001.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#8D6E63] shrink-0" />
                <span className="font-mono">+91 40 2320 1909</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#8D6E63] shrink-0" />
                <span>totaram@totaramsons.com</span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h3 className="font-serif-ts text-sm uppercase tracking-widest text-[#8D6E63] font-bold">Showroom Hours</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex justify-between max-w-xs"><span>Monday – Saturday:</span> <span>11:00 AM – 8:00 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-[#8D6E63] font-semibold">Closed</span></li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a href="#" className={`p-2 rounded-full ${neumorphicOutset} hover:text-[#8D6E63] transition-all`}><Instagram size={14} /></a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#FAF6EE]/50 text-center text-[10px] text-slate-400 tracking-wider">
          <p>© {new Date().getFullYear()} TOTARAM & SONS JEWELLERS. ALL RIGHTS RESERVED. BIS HALLMARK 22K/916 AND NATURAL GEMSTONE CERTIFICATIONS ESCROWED IN THE ABIDS SHOWROOM.</p>
        </div>
      </footer>
    </div>
  );
}

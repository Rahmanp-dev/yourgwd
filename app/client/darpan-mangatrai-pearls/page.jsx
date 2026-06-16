"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ChevronRight, 
  Star, 
  ArrowRight,
  Gem,
  Award,
  ShieldCheck,
  Clock,
  Loader2,
  Calendar,
  User,
  Compass,
  Heart,
  Menu,
  X
} from 'lucide-react';

export default function DarpanMangatraiPearlsPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Pearl');
  const [strands, setStrands] = useState('Double Strand');
  const [pearlQuality, setPearlQuality] = useState('Royal Basra');

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7400,
    '18K Rose Gold': 6300,
    'Platinum': 4200
  };

  const metalWeights = {
    'Single Strand': 12,
    'Double Strand': 25,
    'Triple Strand': 38
  };

  const gemstonePrices = {
    'Pearl': 15000,
    'Diamond': 95000,
    'Emerald': 65000,
    'Ruby': 55000
  };

  const pearlBasePrices = {
    'Royal Basra': 3200,     // per pearl (say 40 pearls per strand)
    'Premium South Sea': 2200,
    'Fine Tahitian': 2600
  };

  const calculatePrice = () => {
    const goldCost = metalWeights[strands] * metalPrices[metalType];
    const numPearls = strands === 'Single Strand' ? 40 : strands === 'Double Strand' ? 80 : 120;
    const pearlCost = numPearls * pearlBasePrices[pearlQuality];
    const gemCost = gemstonePrices[gemstone];
    const subtotal = goldCost + pearlCost + gemCost;
    const makingCharges = subtotal * 0.12; // 12% making charges
    return Math.round(subtotal + makingCharges);
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    const errs = {};
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

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: `DM-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  const applyCustomizerToNotes = () => {
    const estimatedPrice = calculatePrice();
    const customConfigStr = `Bespoke Customizer Configuration:\n- Metal: ${metalType}\n- Strands: ${strands}\n- Gemstone: ${gemstone}\n- Pearl Quality: ${pearlQuality}\n- Estimated Quote: ₹${estimatedPrice.toLocaleString('en-IN')}`;
    setForm(prev => ({
      ...prev,
      notes: customConfigStr
    }));
    // Scroll to consultation form
    const formElement = document.getElementById('consultation-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Visual helper mappings
  const metalColorMap = {
    '22K Gold': '#D4AF37',       // Gold
    '18K Rose Gold': '#E0A899',  // Rose Gold
    'Platinum': '#E5E4E2'        // Platinum (Silver/Grey)
  };

  const gemstoneColorMap = {
    'Pearl': '#F3F4F6',
    'Diamond': '#E0F2FE',
    'Emerald': '#10B981',
    'Ruby': '#EF4444'
  };

  const pearlColorMap = {
    'Royal Basra': '#FFFFFF',          // Pure Basra Creamy White
    'Premium South Sea': '#FBE3B5',    // Soft Golden Hue
    'Fine Tahitian': '#4A5568'         // Dark Shimmering Charcoal
  };

  return (
    <div className="bg-[#FAF6EE] text-[#1F1A1B] font-sans selection:bg-[#7A0C1E]/20 selection:text-[#7A0C1E] antialiased min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-24">
          <div className="flex flex-col">
            <span className="font-display text-xl lg:text-2xl font-bold tracking-wider text-[#7A0C1E]">
              DARPAN MANGATRAI
            </span>
            <span className="text-[10px] tracking-[0.3em] font-body uppercase font-semibold text-[#D4AF37] mt-0.5">
              PEARLS & JEWELLERS
            </span>
          </div>

          <div className="hidden md:flex space-x-8 font-body text-xs uppercase tracking-widest font-semibold">
            <a href="#heritage" className="text-[#1F1A1B] hover:text-[#7A0C1E] transition-colors py-1 relative group">
              Heritage
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7A0C1E] transition-all group-hover:w-full"></span>
            </a>
            <a href="#customizer" className="text-[#1F1A1B] hover:text-[#7A0C1E] transition-colors py-1 relative group">
              Bespoke Customizer
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7A0C1E] transition-all group-hover:w-full"></span>
            </a>
            <a href="#collections" className="text-[#1F1A1B] hover:text-[#7A0C1E] transition-colors py-1 relative group">
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7A0C1E] transition-all group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-[#1F1A1B] hover:text-[#7A0C1E] transition-colors py-1 relative group">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7A0C1E] transition-all group-hover:w-full"></span>
            </a>
          </div>

          <a 
            href="#consultation-form-section" 
            className="px-6 py-3 border border-[#7A0C1E] text-[#7A0C1E] hover:bg-[#7A0C1E] hover:text-[#FAF6EE] text-xs uppercase tracking-widest font-bold font-body transition-all active:scale-95 shadow-sm"
          >
            Private Booking
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-16 pb-24 border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] overflow-hidden">
        {/* Cultural Background Details */}
        <div className="absolute top-10 left-10 w-48 h-48 border border-[#D4AF37]/10 rounded-full flex items-center justify-center pointer-events-none">
          <div className="w-36 h-36 border border-dashed border-[#D4AF37]/15 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 w-72 h-72 border border-[#D4AF37]/10 rounded-full flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 border border-dashed border-[#D4AF37]/15 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Context & Typography */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A0C1E]/5 border border-[#7A0C1E]/20 text-[#7A0C1E] text-xs font-body tracking-wider font-semibold mx-auto lg:mx-0">
                <Sparkles size={12} className="text-[#D4AF37]" />
                <span>Nizami Basra Pearl Heritage Showroom</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight text-[#7A0C1E] font-bold">
                The Royal Pearl <br />
                <span className="italic font-normal text-[#D4AF37]">Legacy of Hyderabad</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to Darpan Mangatrai Pearls & Jewellers, the custodians of Nizam pearl artistry on Road No. 2, Banjara Hills. For over fifty years, we have hand-selected basra seed pearls and curated heavy kundan settings for royal families and modern connoisseurs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-body text-xs font-bold uppercase tracking-widest">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#7A0C1E] hover:bg-[#600018] text-[#FAF6EE] transition-all active:scale-95 shadow-md"
                >
                  Bespoke Pearl Designer
                  <ArrowRight size={14} className="ml-2 text-[#D4AF37]" />
                </a>
                <a 
                  href="#collections" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#D4AF37] hover:bg-[#7A0C1E]/5 text-[#7A0C1E] transition-all active:scale-95"
                >
                  View Royal Catalog
                </a>
              </div>
            </div>

            {/* Right Column: Premium Symmetrical Ornate Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-4 bg-white border border-[#D4AF37]/30 shadow-2xl rounded-sm max-w-sm w-full relative">
                {/* Double Border Frame */}
                <div className="border-4 border-double border-[#D4AF37] p-6 flex flex-col justify-between items-center bg-[#FFFDF9] min-h-[420px] relative">
                  {/* Decorative corner brackets */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#7A0C1E]"></div>
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#7A0C1E]"></div>
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#7A0C1E]"></div>
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#7A0C1E]"></div>

                  <div className="w-full flex justify-between items-center text-[10px] text-slate-400 font-body tracking-widest uppercase font-semibold">
                    <span>Estd 1975</span>
                    <span>Banjara Hills</span>
                  </div>

                  {/* Elegant Central Medallion */}
                  <div className="my-auto flex flex-col items-center py-6">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      {/* Mandala Style SVG background */}
                      <svg className="absolute w-full h-full text-[#D4AF37]/15 animate-[spin_80s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <path d="M 50,0 Q 55,25 50,50 Q 45,25 50,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 50,50 Q 55,75 50,100 Q 45,75 50,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 0,50 Q 25,55 50,50 Q 25,45 0,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 50,50 Q 75,55 100,50 Q 75,45 50,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                      
                      {/* Interactive Visual Base Pearl Ring Graphic */}
                      <svg className="w-32 h-32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="32" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 360) / 12;
                          const r = 32;
                          const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                          const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                          return (
                            <circle key={i} cx={x} cy={y} r="2.5" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="0.5" />
                          );
                        })}
                      </svg>
                      <div className="absolute w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center bg-white shadow-md">
                        <Gem size={20} className="text-[#7A0C1E]" />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-base text-[#7A0C1E] mt-4 tracking-wide text-center font-bold">
                      Nizami Royal Haar
                    </h3>
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-body mt-1 font-bold">
                      Certified Basra Pearls
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage */}
      <section id="heritage" className="py-24 border-b border-[#D4AF37]/20 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.25em] font-body">Our Legacy</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#7A0C1E] font-bold">Crafting Nizam Heritage</h2>
            <div className="w-20 h-[1.5px] bg-[#7A0C1E] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Explore the core principles that establish our legacy as Hyderabad&apos;s premier jeweler for Nizam ornaments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 font-body text-center">
            {/* Heritage Pillar 1 */}
            <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-[#D4AF37]/20 shadow-sm rounded-sm hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#7A0C1E]">
                <Award size={24} />
              </div>
              <h3 className="font-display text-lg text-[#7A0C1E] font-bold">Nizami Vaults</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We draw from ancient designs archived from Nizam court jewelers, replicating complex gold engravings and gemstone arrangements with perfection.
              </p>
            </div>

            {/* Heritage Pillar 2 */}
            <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-[#D4AF37]/20 shadow-sm rounded-sm hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#7A0C1E]">
                <Gem size={24} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-lg text-[#7A0C1E] font-bold">Pure Basra Selections</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                As the direct importers of raw gems, our specialty lies in certified Basra seed pearls, renowned globally for their unique shape, natural color, and premium luster.
              </p>
            </div>

            {/* Heritage Pillar 3 */}
            <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-[#D4AF37]/20 shadow-sm rounded-sm hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#7A0C1E]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-display text-lg text-[#7A0C1E] font-bold">Purity Guarantee</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every customized necklace comes with official laboratory reports, a hallmark card detailing metal purity, and certification of origin for precious pearls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer */}
      <section id="customizer" className="py-24 border-b border-[#D4AF37]/20 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.25em] font-body">Heritage Atelier</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#7A0C1E] font-bold">Interactive Pearl Haar Builder</h2>
            <div className="w-20 h-[1.5px] bg-[#7A0C1E] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Design your custom heirloom. Dynamically choose metal weights, string counts, pearl qualities, and precious gemstones to preview estimates.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Control Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 border border-[#D4AF37]/30 bg-white shadow-lg rounded-sm space-y-8 font-body text-xs">
              {/* Metal Selection */}
              <div>
                <label className="block text-slate-600 font-bold uppercase tracking-wider mb-4">
                  1. Select Precious Metal
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      onClick={() => setMetalType(metal)}
                      className={`py-3 px-4 border text-center font-bold tracking-widest uppercase transition-all active:scale-95 ${
                        metalType === metal
                          ? 'border-[#7A0C1E] bg-[#7A0C1E] text-[#FAF6EE] shadow-md'
                          : 'border-slate-200 bg-[#FAF6EE]/40 text-slate-700 hover:border-[#7A0C1E]'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pearl Quality Selection */}
              <div>
                <label className="block text-slate-600 font-bold uppercase tracking-wider mb-4">
                  2. Select Pearl Collection
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Royal Basra', 'Premium South Sea', 'Fine Tahitian'].map((quality) => (
                    <button
                      key={quality}
                      type="button"
                      onClick={() => setPearlQuality(quality)}
                      className={`py-3 px-2 border text-center font-bold tracking-widest uppercase transition-all active:scale-95 ${
                        pearlQuality === quality
                          ? 'border-[#7A0C1E] bg-[#7A0C1E] text-[#FAF6EE] shadow-md'
                          : 'border-slate-200 bg-[#FAF6EE]/40 text-slate-700 hover:border-[#7A0C1E]'
                      }`}
                    >
                      {quality}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strands Selection */}
              <div>
                <label className="block text-slate-600 font-bold uppercase tracking-wider mb-4">
                  3. Haar Strands (Layering)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Single Strand', 'Double Strand', 'Triple Strand'].map((strand) => (
                    <button
                      key={strand}
                      type="button"
                      onClick={() => setStrands(strand)}
                      className={`py-3 px-4 border text-center font-bold tracking-widest uppercase transition-all active:scale-95 ${
                        strands === strand
                          ? 'border-[#7A0C1E] bg-[#7A0C1E] text-[#FAF6EE] shadow-md'
                          : 'border-slate-200 bg-[#FAF6EE]/40 text-slate-700 hover:border-[#7A0C1E]'
                      }`}
                    >
                      {strand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Pendant Gemstone Selection */}
              <div>
                <label className="block text-slate-600 font-bold uppercase tracking-wider mb-4">
                  4. Center Pendant Gemstone
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['Pearl', 'Diamond', 'Emerald', 'Ruby'].map((gem) => (
                    <button
                      key={gem}
                      type="button"
                      onClick={() => setGemstone(gem)}
                      className={`py-3 px-1 border text-center font-bold tracking-widest uppercase transition-all active:scale-95 ${
                        gemstone === gem
                          ? 'border-[#7A0C1E] bg-[#7A0C1E] text-[#FAF6EE] shadow-md'
                          : 'border-slate-200 bg-[#FAF6EE]/40 text-slate-700 hover:border-[#7A0C1E]'
                      }`}
                    >
                      {gem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Sheet */}
              <div className="pt-6 border-t border-[#D4AF37]/30 bg-[#FAF6EE]/35 p-5 border shadow-inner">
                <div className="space-y-2 text-xs text-slate-500 font-semibold font-body">
                  <div className="flex justify-between">
                    <span>Base Metal ({metalType} - {metalWeights[strands]}g):</span>
                    <span className="font-mono text-slate-800">₹{(metalWeights[strands] * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pearls ({pearlQuality} x {strands === 'Single Strand' ? 40 : strands === 'Double Strand' ? 80 : 120} units):</span>
                    <span className="font-mono text-slate-800">
                      ₹{((strands === 'Single Strand' ? 40 : strands === 'Double Strand' ? 80 : 120) * pearlBasePrices[pearlQuality]).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Central Pendant ({gemstone}):</span>
                    <span className="font-mono text-slate-800">₹{gemstonePrices[gemstone].toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Making & Setting Charges (12%):</span>
                    <span className="font-mono text-slate-800">
                      ₹{Math.round((metalWeights[strands] * metalPrices[metalType] + (strands === 'Single Strand' ? 40 : strands === 'Double Strand' ? 80 : 120) * pearlBasePrices[pearlQuality] + gemstonePrices[gemstone]) * 0.12).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="h-[1.5px] bg-[#D4AF37]/20 my-3"></div>
                  <div className="flex justify-between items-end text-sm text-[#7A0C1E] font-bold">
                    <span className="uppercase tracking-wider">Estimated Valuation (excl. GST):</span>
                    <span className="font-mono text-lg text-[#7A0C1E]">
                      ₹{calculatePrice().toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Visual & Direct Action */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-36">
              <div className="p-8 border border-[#D4AF37]/30 bg-white flex flex-col items-center justify-center relative shadow-lg rounded-sm min-h-[380px]">
                <div className="absolute top-4 left-4 text-[9px] tracking-widest uppercase text-slate-400 font-body font-semibold">
                  Live Workshop Blueprint
                </div>

                {/* SVG Visualizer that updates based on selection */}
                <div className="w-56 h-56 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="metalGrad" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="60%" stopColor={metalColorMap[metalType]} />
                        <stop offset="100%" stopColor="#2D1D13" />
                      </radialGradient>
                      <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={gemstoneColorMap[gemstone]} />
                      </radialGradient>
                      <radialGradient id="pearlGrad" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="85%" stopColor={pearlColorMap[pearlQuality]} />
                        <stop offset="100%" stopColor="#718096" />
                      </radialGradient>
                    </defs>

                    {/* Concentric pearl strands based on selection */}
                    {/* Inner strand (always present) */}
                    <path
                      d="M 28,25 A 22,28 0 0,0 72,25"
                      fill="none"
                      stroke={metalColorMap[metalType]}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    {[...Array(14)].map((_, idx) => {
                      const pct = idx / 13;
                      const angle = Math.PI + pct * Math.PI;
                      const rX = 22;
                      const rY = 26;
                      const x = 50 + rX * Math.cos(angle);
                      const y = 25 - rY * Math.sin(angle);
                      return (
                        <circle
                          key={`strand1-${idx}`}
                          cx={x}
                          cy={y}
                          r="2.2"
                          fill="url(#pearlGrad)"
                          stroke="#E2E8F0"
                          strokeWidth="0.25"
                        />
                      );
                    })}

                    {/* Middle strand (present in Double and Triple) */}
                    {(strands === 'Double Strand' || strands === 'Triple Strand') && (
                      <>
                        <path
                          d="M 23,25 A 27,33 0 0,0 77,25"
                          fill="none"
                          stroke={metalColorMap[metalType]}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        {[...Array(18)].map((_, idx) => {
                          const pct = idx / 17;
                          const angle = Math.PI + pct * Math.PI;
                          const rX = 27;
                          const rY = 31;
                          const x = 50 + rX * Math.cos(angle);
                          const y = 25 - rY * Math.sin(angle);
                          return (
                            <circle
                              key={`strand2-${idx}`}
                              cx={x}
                              cy={y}
                              r="2.2"
                              fill="url(#pearlGrad)"
                              stroke="#E2E8F0"
                              strokeWidth="0.25"
                            />
                          );
                        })}
                      </>
                    )}

                    {/* Outer strand (present in Triple only) */}
                    {strands === 'Triple Strand' && (
                      <>
                        <path
                          d="M 18,25 A 32,38 0 0,0 82,25"
                          fill="none"
                          stroke={metalColorMap[metalType]}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        {[...Array(22)].map((_, idx) => {
                          const pct = idx / 21;
                          const angle = Math.PI + pct * Math.PI;
                          const rX = 32;
                          const rY = 36;
                          const x = 50 + rX * Math.cos(angle);
                          const y = 25 - rY * Math.sin(angle);
                          return (
                            <circle
                              key={`strand3-${idx}`}
                              cx={x}
                              cy={y}
                              r="2.2"
                              fill="url(#pearlGrad)"
                              stroke="#E2E8F0"
                              strokeWidth="0.25"
                            />
                          );
                        })}
                      </>
                    )}

                    {/* Pendant Connector/Prongs */}
                    <line x1="50" y1="52" x2="50" y2="62" stroke={metalColorMap[metalType]} strokeWidth="2" />
                    
                    {/* Pendant Frame */}
                    <path
                      d="M 42,62 L 58,62 L 50,75 Z"
                      fill="url(#metalGrad)"
                      stroke={metalColorMap[metalType]}
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />

                    {/* Main Pendant Gemstone */}
                    {gemstone === 'Pearl' ? (
                      <circle cx="50" cy="67" r="4.5" fill="url(#gemGrad)" stroke="#CBD5E1" strokeWidth="0.25" />
                    ) : gemstone === 'Diamond' ? (
                      <polygon points="50,61 55,67 50,73 45,67" fill="url(#gemGrad)" stroke={metalColorMap[metalType]} strokeWidth="0.5" />
                    ) : gemstone === 'Emerald' ? (
                      <rect x="46" y="63" width="8" height="8" rx="1" fill="url(#gemGrad)" stroke={metalColorMap[metalType]} strokeWidth="0.5" />
                    ) : (
                      <polygon points="50,61 55,65 54,71 46,71 45,65" fill="url(#gemGrad)" stroke={metalColorMap[metalType]} strokeWidth="0.5" />
                    )}
                  </svg>
                </div>

                <div className="text-center font-body mt-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">Active Customization</h4>
                  <p className="text-sm font-display text-[#7A0C1E] mt-0.5 font-bold">
                    {strands} with {pearlQuality} & {gemstone}
                  </p>
                </div>
              </div>

              <button 
                type="button"
                onClick={applyCustomizerToNotes}
                className="w-full text-center py-4 bg-[#7A0C1E] hover:bg-[#600018] text-[#FAF6EE] font-body text-xs uppercase tracking-widest font-bold transition-all active:scale-95 shadow-md"
              >
                Apply Details to Consultation Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-24 border-b border-[#D4AF37]/20 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.25em] font-body">Signature Pieces</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#7A0C1E] font-bold">The Heritage Collection</h2>
            <div className="w-20 h-[1.5px] bg-[#7A0C1E] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Explore our highly coveted, hand-certified signature pearl and gold creations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Nizam Basra Pearl Rani Haar",
                desc: "Three strands of matched Basra seed pearls coupled with an antique gold nakshi pendant featuring real rubies.",
                price: "₹5,80,000",
                spec: "Basra Pearls, 22K Gold, Ruby",
                icon: <Gem size={32} />
              },
              {
                title: "Banjara Hills Emerald Choker",
                desc: "Seven rows of micro seed pearls tied with an ornate 22K gold center-plate studded with pristine Zambian emeralds.",
                price: "₹3,50,000",
                spec: "Freshwater Seed Pearls, Gold, Emerald",
                icon: <Sparkles size={32} />
              },
              {
                title: "Classic Basra Pearl Studs",
                desc: "Rare paired spherical basra pearls set in micro-engraved 22K gold floral prongs.",
                price: "₹1,20,000",
                spec: "Pure Basra Pearls, 22K Gold Base",
                icon: <Award size={32} />
              },
              {
                title: "Nizam Polki Kundan Haar",
                desc: "Royal collar layout showcasing large uncut diamonds set in dark antique gold, accented by south sea pearl drops.",
                price: "₹7,20,000",
                spec: "Polki Diamonds, South Sea Pearls, 22K Gold",
                icon: <Gem size={32} className="text-[#D4AF37]" />
              }
            ].map((col, idx) => (
              <div key={idx} className="bg-white border border-[#D4AF37]/20 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 rounded-sm hover:-translate-y-1 group">
                <div>
                  <div className="w-full h-44 bg-[#FAF6EE] border border-[#D4AF37]/10 mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                      {col.icon}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-[#D4AF37]/35 text-[9px] font-body uppercase tracking-wider bg-white text-[#7A0C1E] font-bold">
                      Certified
                    </div>
                  </div>
                  <span className="text-[10px] font-body uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
                    {col.spec}
                  </span>
                  <h3 className="font-display text-base text-[#7A0C1E] font-bold mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-body leading-relaxed mb-6">
                    {col.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100 font-body">
                  <span className="font-mono text-sm font-bold text-[#7A0C1E]">{col.price}</span>
                  <button 
                    type="button"
                    onClick={() => {
                      setForm(prev => ({
                        ...prev,
                        notes: `Inquiry regarding Signature Piece: ${col.title} (${col.price})`
                      }));
                      const formElement = document.getElementById('consultation-form-section');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#7A0C1E] hover:text-[#D4AF37] transition-all group-hover:translate-x-1"
                  >
                    Inquire <ChevronRight size={10} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Design Consultation */}
      <section id="consultation-form-section" className="py-24 border-b border-[#D4AF37]/20 bg-[#FFFDF9]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.25em] font-body">Showroom Booking</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#7A0C1E] font-bold">Virtual Design Consultation</h2>
            <div className="w-20 h-[1.5px] bg-[#7A0C1E] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Book a video call or scheduler an in-person viewing at our Road No. 2, Banjara Hills showroom. Our head designers will guide you.
            </p>
          </div>

          <div className="p-8 md:p-12 border border-[#D4AF37]/35 bg-[#FAF6EE] shadow-xl rounded-sm relative">
            <div className="absolute top-4 right-4 flex gap-1 pointer-events-none">
              <Sparkles size={16} className="text-[#D4AF37]/20" />
            </div>

            {submittedData ? (
              <div className="text-center py-8 space-y-6 font-body">
                <div className="w-16 h-16 bg-[#7A0C1E]/10 border border-[#7A0C1E]/20 text-[#7A0C1E] rounded-full flex items-center justify-center mx-auto">
                  <Check size={28} className="stroke-[2.5]" />
                </div>
                <h3 className="font-display text-2xl text-[#7A0C1E] font-bold">Consultation Scheduled</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your royal consultation request has been logged. A pearl consultant will connect with you via phone within 2 hours.
                </p>
                <div className="bg-white border border-[#D4AF37]/30 p-5 rounded-sm max-w-sm mx-auto text-left text-xs space-y-2.5 shadow-sm">
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block text-[9px]">Booking Reference:</span>
                    <span className="font-mono font-bold text-slate-800 text-sm">{submittedData.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block text-[9px]">Preferred Date:</span>
                    <span className="font-bold text-slate-700">{submittedData.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block text-[9px]">Registered Details:</span>
                    <span className="text-slate-700">{submittedData.phone} | {submittedData.email}</span>
                  </div>
                  {submittedData.notes && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-slate-400 font-bold uppercase tracking-wider block text-[9px]">Configuration Notes:</span>
                      <pre className="text-[10px] text-slate-600 whitespace-pre-wrap font-sans mt-1 bg-slate-50 p-2 border border-slate-100 rounded-sm">
                        {submittedData.notes}
                      </pre>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-3 border border-[#7A0C1E] text-[#7A0C1E] hover:bg-[#7A0C1E] hover:text-[#FAF6EE] uppercase text-xs tracking-widest font-bold font-body transition-all active:scale-95"
                >
                  Schedule New Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-body text-xs">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-3.5 text-[#D4AF37]" />
                      <input
                        type="text"
                        className={`w-full pl-10 pr-4 py-3.5 bg-white border ${
                          errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D4AF37]/40 focus:border-[#7A0C1E]'
                        } rounded-sm focus:outline-none transition-all`}
                        placeholder="Ananya Reddy"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    {errors.name && <p className="text-red-600 mt-1 text-[10px] font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">WHATSAPP PHONE *</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3.5 top-3.5 text-[#D4AF37]" />
                      <input
                        type="tel"
                        className={`w-full pl-10 pr-4 py-3.5 bg-white border ${
                          errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D4AF37]/40 focus:border-[#7A0C1E]'
                        } rounded-sm focus:outline-none transition-all`}
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    {errors.phone && <p className="text-red-600 mt-1 text-[10px] font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-3.5 text-[#D4AF37]" />
                      <input
                        type="email"
                        className={`w-full pl-10 pr-4 py-3.5 bg-white border ${
                          errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D4AF37]/40 focus:border-[#7A0C1E]'
                        } rounded-sm focus:outline-none transition-all`}
                        placeholder="care@darpanmangatrai.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    {errors.email && <p className="text-red-600 mt-1 text-[10px] font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">PREFERRED DATE *</label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3.5 top-3.5 text-[#D4AF37]" />
                      <input
                        type="date"
                        className={`w-full pl-10 pr-4 py-3.5 bg-white border ${
                          errors.date ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D4AF37]/40 focus:border-[#7A0C1E]'
                        } rounded-sm focus:outline-none transition-all text-slate-700`}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                      />
                    </div>
                    {errors.date && <p className="text-red-600 mt-1 text-[10px] font-semibold">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2 font-semibold">CUSTOM REQUIREMENTS & NOTES</label>
                  <textarea
                    rows="4"
                    className="w-full p-4 bg-white border border-[#D4AF37]/40 focus:border-[#7A0C1E] rounded-sm focus:outline-none transition-all resize-none text-slate-700 text-xs"
                    placeholder="Enter details of custom length strings, seed pearl arrangements, or specific wedding dates you wish to design for..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#7A0C1E] hover:bg-[#600018] text-[#FAF6EE] font-bold uppercase tracking-widest transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Assigning Pearl Curator...
                    </>
                  ) : (
                    <>
                      <span>Secure Booking Window</span>
                      <ChevronRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 border-b border-[#D4AF37]/20 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.25em] font-body">Client Diaries</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#7A0C1E] font-bold">Hyderabad Client Stories</h2>
            <div className="w-20 h-[1.5px] bg-[#7A0C1E] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Read real-looking testimonials from Hyderabad collectors who trust us with their custom bridal orders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-body">
            {[
              {
                text: "The South Sea pearls at Darpan Mangatrai are unmatched. I designed my heavy layered Rani Haar here. They verified the origin of every Basra bead and offered absolute pricing transparency.",
                author: "Ananya Rao",
                location: "Banjara Hills, Hyderabad",
                rating: 5
              },
              {
                text: "My wedding chokers were crafted here using ancient Nakshi gold embossing. The head jeweler sat with me to match basra seed pearls. Absolute royal grade service and purity certifications.",
                author: "Divya Reddy",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "We booked a private virtual design consultation for a family heirloom. The high-definition video showcase and swift, secure courier to our residence made the experience perfect.",
                author: "Shreya Naidu",
                location: "Gachibowli, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border border-[#D4AF37]/20 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#D4AF37]/30 flex items-center justify-center text-xs font-display font-bold text-[#7A0C1E]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#1F1A1B]">{review.author}</h4>
                    <span className="text-[10px] text-slate-400 block">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF6EE] text-[#1F1A1B] py-16 border-t border-[#D4AF37]/30 font-body text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-display text-lg uppercase tracking-wider text-[#7A0C1E] font-bold">DARPAN MANGATRAI</h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Fine Nizam jewellery, certified Basra pearls, and bespoke diamond settings. Crafted by hand in Banjara Hills, Hyderabad, preserving generations of royal Indian design.
            </p>
          </div>

          {/* Column 2: Showroom Details */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-display text-sm uppercase tracking-widest text-[#7A0C1E] font-bold">Flagship Showroom</h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex justify-center md:justify-start items-start gap-2">
                <MapPin size={14} className="text-[#7A0C1E] shrink-0 mt-0.5" />
                <span>Road No. 2, Banjara Hills, Hyderabad, Telangana 500034.</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone size={14} className="text-[#7A0C1E] shrink-0" />
                <span className="font-mono">+91 40 2335 1222</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail size={14} className="text-[#7A0C1E] shrink-0" />
                <span>care@darpanmangatrai.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Socials */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-display text-sm uppercase tracking-widest text-[#7A0C1E] font-bold">Hours & Appointments</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Monday – Saturday:</span>
                <span>10:30 AM – 8:30 PM</span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Sunday:</span>
                <span className="text-[#7A0C1E] font-semibold">Closed</span>
              </li>
            </ul>
            <div className="pt-2 text-slate-400 text-[10px]">
              * Secure digital vault certifications accompany every diamond and pearl purchase.
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#D4AF37]/20 text-center text-[10px] text-slate-400 tracking-wider">
          <p>© {new Date().getFullYear()} DARPAN MANGATRAI PEARLS & JEWELLERS. ALL RIGHTS RESERVED. ALL STONE VALUES SUBJECT TO PHYSICAL SELECTION IN SHOWROOM.</p>
        </div>
      </footer>
    </div>
  );
}

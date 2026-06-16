"use client";

import React, { useState } from 'react';
import { Sparkles, Calendar, Mail, MapPin, Phone, Star, Send, Check, Loader2, ArrowRight, ShieldCheck, Gem, Layers } from 'lucide-react';

export default function NeelkanthJewellersPreview() {
  // Customizer State
  const [selectedMetal, setSelectedMetal] = useState('Platinum');
  const [selectedGem, setSelectedGem] = useState('Diamond');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collection: 'Somajiguda Starburst Choker',
    date: '',
    type: 'In-Store Private Lounge'
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Customizer Configurations
  const metals = {
    '22K Gold': { 
      name: '22K Architectural Gold', 
      color: '#DAA520', 
      secondaryColor: '#B8860B',
      basePrice: 190000, 
      description: 'Luminous, dense traditional gold alloy. Hand-burnished to create a velvet matte finish.' 
    },
    '18K Rose Gold': { 
      name: '18K Retro Rose Gold', 
      color: '#E5A995', 
      secondaryColor: '#C48B79',
      basePrice: 165000, 
      description: 'Blushed, high-tensile gold with copper infusions. Reflects a warm, nostalgic candlelight glow.' 
    },
    'Platinum': { 
      name: 'Imperial Platinum 950', 
      color: '#E5E7EB', 
      secondaryColor: '#9CA3AF',
      basePrice: 260000, 
      description: 'Pure, hypoallergenic noble metal. The signature of the 1920s machine age, dense and highly polished.' 
    }
  };

  const gemstones = {
    'Diamond': { 
      name: 'VVS1 Starburst Diamond', 
      color: '#FFFFFF', 
      facetColor: '#E2E8F0',
      glow: 'rgba(255, 255, 255, 0.4)', 
      price: 140000, 
      description: 'Superbly cut geometric step solitaire diamond with supreme fire, scintillation, and structural integrity.' 
    },
    'Emerald': { 
      name: 'Colombian Step-Cut Emerald', 
      color: '#10B981', 
      facetColor: '#047857',
      glow: 'rgba(16, 185, 129, 0.4)', 
      price: 95000, 
      description: 'Deep, vivid green step-cut emerald of remarkable saturation, highlighting structural symmetry.' 
    },
    'Ruby': { 
      name: 'Mozambique Crimson Ruby', 
      color: '#EF4444', 
      facetColor: '#B91C1C',
      glow: 'rgba(239, 68, 68, 0.4)', 
      price: 105000, 
      description: 'Bold pigeon-blood red ruby. Expertly faceted to reflect retro geometric configurations.' 
    },
    'Pearl': { 
      name: 'Basra Saltwater Pearl', 
      color: '#FDFBF7', 
      facetColor: '#F3EFE0',
      glow: 'rgba(253, 251, 247, 0.3)', 
      price: 50000, 
      description: 'A round, naturally formed Basra pearl with a silky, pearlescent surface of high luster.' 
    }
  };

  // Pricing calculations
  const metalBase = metals[selectedMetal].basePrice;
  const gemPrice = gemstones[selectedGem].price;
  const subtotal = metalBase + gemPrice;
  const makingCharges = Math.round(subtotal * 0.14); // 14% making charges
  const gst = Math.round((subtotal + makingCharges) * 0.03); // 3% GST
  const totalPrice = subtotal + makingCharges + gst;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your mobile number.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.date) {
      errors.date = 'Please select a date.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past.';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        collection: 'Somajiguda Starburst Choker',
        date: '',
        type: 'In-Store Private Lounge'
      });
      // Clear success banner after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1800);
  };

  const prefillInquiry = (collectionName) => {
    setFormData(prev => ({
      ...prev,
      collection: collectionName
    }));
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-[#E4E6EB] font-body antialiased selection:bg-[#E2A62C]/30 selection:text-white">
      {/* Import Google Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .font-display { font-family: 'Prata', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        /* Custom Retro Art Deco Border Pattern */
        .deco-border-thick {
          border: 6px double #E2A62C;
        }

        .deco-border-thin {
          border: 1px solid rgba(226, 166, 44, 0.4);
        }

        /* Fan pattern clipping or shape */
        .deco-fan-clip {
          clip-path: polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%);
        }

        /* Sunburst Background Pattern */
        .bg-sunburst-mustard {
          background-image: radial-gradient(circle at center, rgba(226, 166, 44, 0.1) 0%, transparent 65%);
        }

        /* Fan/Peacock pattern using CSS repeating gradients */
        .bg-deco-fans {
          background-size: 60px 60px;
          background-image: 
            radial-gradient(circle at 30px 0px, transparent 0, transparent 28px, rgba(226, 166, 44, 0.03) 29px, rgba(226, 166, 44, 0.03) 30px, transparent 31px),
            radial-gradient(circle at 30px 30px, transparent 0, transparent 28px, rgba(226, 166, 44, 0.03) 29px, rgba(226, 166, 44, 0.03) 30px, transparent 31px);
        }
      ` }} />

      {/* Hero Header / Nav */}
      <nav className="sticky top-0 z-50 w-full bg-[#060D1A]/90 backdrop-blur-md border-b border-[#E2A62C]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center border-2 border-[#E2A62C] rounded-full bg-[#0F1B2F] overflow-hidden">
                <span className="font-display text-xl font-bold text-[#E2A62C] relative z-10">NK</span>
                {/* Deco radiating lines inside logo */}
                <div className="absolute inset-0 bg-sunburst-mustard opacity-50"></div>
              </div>
              <div>
                <span className="font-display text-xl font-black tracking-widest uppercase block leading-none text-white">
                  Neelkanth
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2A62C] font-semibold block mt-1">
                  Jewellers • Somajiguda
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#origin" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#E2A62C] transition-colors duration-150 active:scale-95">Origin</a>
              <a href="#customizer" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#E2A62C] transition-colors duration-150 active:scale-95">Atelier</a>
              <a href="#masterpieces" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#E2A62C] transition-colors duration-150 active:scale-95">Masterpieces</a>
              <a href="#reviews" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#E2A62C] transition-colors duration-150 active:scale-95">Reviews</a>
            </div>

            {/* CTA */}
            <div>
              <a 
                href="#consultation" 
                className="inline-block px-6 py-3 bg-[#E2A62C] text-[#060D1A] font-display font-bold text-xs uppercase tracking-widest hover:bg-[#F2B63C] active:scale-95 transition-all duration-150 shadow-md shadow-[#E2A62C]/10"
              >
                Book Showing
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-sunburst-mustard bg-deco-fans border-b-2 border-[#E2A62C]/30 bg-[#E2A62C]/5">
        
        {/* Radiating geometry frames */}
        <div className="absolute top-1/2 left-5 w-40 h-40 border border-[#E2A62C]/10 rounded-full pointer-events-none hidden lg:block transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-5 w-56 h-56 border border-[#E2A62C]/10 rounded-full pointer-events-none hidden lg:block transform -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content - Stepped Layout */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E2A62C]/40 bg-[#0F1B2F] text-xs uppercase tracking-widest font-semibold text-[#E2A62C]">
                <Layers size={12} className="text-[#E2A62C]" />
                <span>Bespoke Diamonds & Platinum</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-wide uppercase">
                Architectures <br/>
                <span className="text-[#E2A62C]">of Desire</span>
              </h1>

              <div className="h-0.5 w-40 bg-[#E2A62C] mx-auto lg:mx-0"></div>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Neelkanth Jewellers reinvents the grandeur of 1920s high-jewelry. From our flagship showroom on Somajiguda Main Road, we produce clean mathematical layouts, heavy bezel settings, and pristine platinum rings.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="#customizer" 
                  className="px-8 py-4 bg-[#E2A62C] text-[#060D1A] font-display font-black text-sm uppercase tracking-widest hover:bg-[#F2B63C] transition-colors duration-150 active:scale-[0.97] shadow-lg shadow-[#E2A62C]/15 flex items-center justify-center gap-2"
                >
                  Configure Ring
                  <ArrowRight size={16} />
                </a>
                <a 
                  href="#masterpieces" 
                  className="px-8 py-4 bg-transparent text-white border border-[#E2A62C] font-display font-semibold text-sm uppercase tracking-widest hover:bg-[#E2A62C]/10 transition-colors duration-150 active:scale-[0.97] flex items-center justify-center"
                >
                  Explore Masterpieces
                </a>
              </div>
            </div>

            {/* Right Column Cocktail Ring Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-1 bg-[#0F1B2F] border-2 border-[#E2A62C] shadow-2xl max-w-sm w-full rounded-3xl overflow-hidden">
                <div className="relative overflow-hidden aspect-square bg-[#060D1A] flex items-center justify-center">
                  
                  {/* Rotating lines background */}
                  <div className="absolute inset-4 border border-[#E2A62C]/10 rounded-full flex items-center justify-center">
                    <div className="w-full h-0.5 bg-[#E2A62C]/5 absolute"></div>
                    <div className="h-full w-0.5 bg-[#E2A62C]/5 absolute"></div>
                  </div>

                  {/* SVG Illustration of The Imperial Octagon Ring */}
                  <svg width="220" height="220" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 15px 30px rgba(0,0,0,0.7))">
                    
                    {/* Concentric Deco Rings Background */}
                    <circle cx="50" cy="48" r="28" fill="none" stroke="#E2A62C" strokeWidth="0.25" opacity="0.3" />
                    <circle cx="50" cy="48" r="24" fill="none" stroke="#E2A62C" strokeWidth="0.25" opacity="0.2" />

                    {/* Ring Band (Shank) */}
                    <ellipse cx="50" cy="68" rx="20" ry="12" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                    <ellipse cx="50" cy="68" rx="20" ry="12" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                    
                    {/* Stepped Ring Shoulder detailing */}
                    <polygon points="30,68 34,58 38,58 30,68" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5" />
                    <polygon points="70,68 66,58 62,58 70,68" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5" />

                    {/* Bezel Ring Head (Art Deco stepped design) */}
                    <polygon points="50,22 68,34 60,56 40,56 32,34" fill="#0F1B2F" stroke="#E2A62C" strokeWidth="1.5" />
                    <polygon points="50,26 63,35 57,51 43,51 37,35" fill="none" stroke="#E2A62C" strokeWidth="0.75" />

                    {/* Surrounding Accent Diamonds */}
                    <circle cx="39" cy="35" r="1.5" fill="#FFFFFF" />
                    <circle cx="61" cy="35" r="1.5" fill="#FFFFFF" />
                    <circle cx="43" cy="51" r="1.5" fill="#FFFFFF" />
                    <circle cx="57" cy="51" r="1.5" fill="#FFFFFF" />
                    
                    {/* Main Octagonal Center Gemstone (Ruby) */}
                    <polygon points="50,30 58,35 58,43 50,48 42,43 42,35" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
                    
                    {/* Facet Lines */}
                    <line x1="50" y1="30" x2="50" y2="48" stroke="#B91C1C" strokeWidth="0.5" />
                    <line x1="42" y1="39" x2="58" y2="39" stroke="#B91C1C" strokeWidth="0.5" />

                  </svg>
                  
                  {/* Subtle caption */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-[10px] font-display uppercase tracking-widest text-[#E2A62C]">
                      The Imperial Octagon Ring
                    </p>
                    <p className="text-[8px] uppercase tracking-wider text-gray-400 mt-1 font-mono">
                      Mozambique Ruby & Platinum
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="origin" className="py-20 lg:py-28 bg-[#0F1B2F] relative border-b border-[#E2A62C]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Origin Text */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E2A62C]">Heritage & Vision</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider">
                  The Blueprint of Eternal Luxury
                </h2>
                <div className="h-0.5 w-24 bg-[#E2A62C]"></div>
              </div>

              <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  Neelkanth Jewellers was established in 1992 as a boutique jewelry house in Somajiguda, Hyderabad, with a clear focus: breaking away from organic, amorphous designs to honor structural beauty. Our pieces are blueprints of architectural precision.
                </p>
                <p>
                  Inspired by the 1925 Exposition Internationale des Arts Décoratifs in Paris, we incorporate strict geometric shapes—octagons, chevrons, step-cut curves—into high-carat gold and platinum jewelry. We believe luxury is found in the weight of raw noble metal and the clean math of precise gem cuts.
                </p>
                <p className="border-l border-[#E2A62C] pl-6 italic text-gray-300 font-normal">
                  "A gemstone is a crystal structure of mathematical perfection. Our work is simply to frame that math in the most striking metal arrangements."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-800">
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#E2A62C]">34+</h4>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">Years of Craft</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#E2A62C]">Pt950</h4>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">Certified Platinum</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#E2A62C]">7k+</h4>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">Bespoke Clients</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Peacock/Fan Frame */}
            <div className="lg:col-span-5">
              <div className="relative p-2 border border-[#E2A62C]/40 bg-[#060D1A] rounded-full">
                <div className="aspect-square rounded-full bg-[#060D1A] relative border border-[#E2A62C]/20 flex flex-col justify-between p-10 overflow-hidden">
                  
                  {/* Fan graphics background */}
                  <div className="absolute inset-0 bg-deco-fans opacity-30 pointer-events-none"></div>

                  <div className="flex justify-between items-start z-10">
                    <span className="text-2xl font-display font-bold text-[#E2A62C] opacity-40">1992</span>
                    <Sparkles size={22} className="text-[#E2A62C] opacity-40" />
                  </div>

                  <div className="space-y-4 text-center z-10">
                    <div className="inline-block px-3 py-1 bg-[#E2A62C]/10 border border-[#E2A62C]/30 text-[9px] uppercase tracking-widest font-bold text-[#E2A62C]">
                      Somajiguda Flagship
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white uppercase tracking-wider">
                      The Atelier
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Fusing the rigid, clean mathematical blueprints of European design with Hyderabad's timeless love for fine diamonds.
                    </p>
                  </div>

                  <div className="flex justify-center border-t border-[#E2A62C]/20 pt-4 z-10">
                    <span className="text-[9px] uppercase tracking-widest text-[#E2A62C] font-semibold">100% GIA Certified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-20 lg:py-28 bg-deco-fans relative border-b-2 border-[#E2A62C]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E2A62C]">Bespoke Configuration</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-wider">
              The Atelier Customizer
            </h2>
            <div className="h-0.5 w-20 bg-[#E2A62C] mx-auto"></div>
            <p className="text-sm text-gray-400 font-light">
              Select your structural base metal and center gemstone. Observe the color variables change dynamically on our digital ring canvas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Grid: Configurator Tabs */}
            <div className="lg:col-span-7 space-y-8 bg-[#0F1B2F] p-8 border border-[#E2A62C]/30 rounded-2xl shadow-xl">
              
              {/* Metal Selector */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-black text-[#E2A62C] border-b border-gray-800 pb-2">
                  1. Structural Metal Base
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {Object.keys(metals).map((mKey) => (
                    <button
                      key={mKey}
                      onClick={() => setSelectedMetal(mKey)}
                      className={`py-3 px-2 rounded-lg text-center transition-all duration-150 active:scale-95 text-xs font-bold uppercase tracking-wider ${
                        selectedMetal === mKey 
                        ? 'bg-[#E2A62C] text-[#060D1A]' 
                        : 'bg-[#060D1A] text-gray-300 hover:bg-[#E2A62C]/10 border border-[#E2A62C]/20'
                      }`}
                    >
                      {mKey}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light mt-2 italic">
                  {metals[selectedMetal].description}
                </p>
              </div>

              {/* Gemstone Selector */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-black text-[#E2A62C] border-b border-gray-800 pb-2">
                  2. Center Gemstone
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.keys(gemstones).map((gKey) => (
                    <button
                      key={gKey}
                      onClick={() => setSelectedGem(gKey)}
                      className={`py-3 px-2 rounded-lg text-center transition-all duration-150 active:scale-95 text-xs font-bold uppercase tracking-wider ${
                        selectedGem === gKey 
                        ? 'bg-[#E2A62C] text-[#060D1A]' 
                        : 'bg-[#060D1A] text-gray-300 hover:bg-[#E2A62C]/10 border border-[#E2A62C]/20'
                      }`}
                    >
                      {gKey}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light mt-2 italic">
                  {gemstones[selectedGem].description}
                </p>
              </div>

              {/* Price Breakdown Panel */}
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#E2A62C] mb-4">
                  Estimate Breakdown
                </h4>
                <div className="space-y-3 font-mono text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-sans">Base Alloy ({metals[selectedMetal].name}):</span>
                    <span>{formatCurrency(metalBase)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans">Cut Stone ({gemstones[selectedGem].name}):</span>
                    <span>{formatCurrency(gemPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans">Polishing & Making Charges (14%):</span>
                    <span>{formatCurrency(makingCharges)}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-800">
                    <span className="font-sans">GST (3%):</span>
                    <span>{formatCurrency(gst)}</span>
                  </div>
                  <div className="flex justify-between text-white font-black text-lg pt-2">
                    <span className="font-display uppercase tracking-widest text-[#E2A62C] text-sm">Estimated Total:</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => prefillInquiry(`Customized ${selectedMetal} & ${selectedGem} Cocktail Ring`)}
                    className="flex-1 py-4 bg-[#E2A62C] text-[#060D1A] font-display font-black text-xs uppercase tracking-widest hover:bg-[#F2B63C] active:scale-95 transition-all duration-150 rounded-lg text-center"
                  >
                    Request Build Quotation
                  </button>
                </div>
              </div>

            </div>

            {/* Right Grid: Live SVG Preview */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-full relative p-2 bg-[#0F1B2F] border border-[#E2A62C]/40 shadow-2xl rounded-2xl overflow-hidden">
                <div className="aspect-square bg-[#060D1A] relative flex flex-col justify-between p-6 rounded-xl">
                  
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-[#E2A62C]/60 font-mono">
                    <span>Model: NK-DECO-RING</span>
                    <span>ATELIER CANVAS</span>
                  </div>

                  {/* SVG Canvas displaying the customized cocktail ring */}
                  <div className="flex justify-center items-center flex-grow">
                    <svg width="220" height="220" viewBox="0 0 100 100" className="filter drop-shadow(0 15px 25px rgba(0,0,0,0.7))">
                      <defs>
                        <filter id="gem-glow-nk" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* Backdrop alignment rings */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#E2A62C" strokeWidth="0.25" strokeDasharray="2 2" opacity="0.3" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="#E2A62C" strokeWidth="0.25" strokeDasharray="2 2" opacity="0.3" />

                      {/* Ring Band (Shank) - dynamic color */}
                      <ellipse 
                        cx="50" 
                        cy="68" 
                        rx="20" 
                        ry="12" 
                        fill="none" 
                        stroke={metals[selectedMetal].color} 
                        strokeWidth="3.2" 
                      />
                      <ellipse 
                        cx="50" 
                        cy="68" 
                        rx="20" 
                        ry="12" 
                        fill="none" 
                        stroke={metals[selectedMetal].secondaryColor} 
                        strokeWidth="1" 
                      />

                      {/* Shoulders - dynamic color */}
                      <polygon points="30,68 34,58 38,58 30,68" fill={metals[selectedMetal].color} />
                      <polygon points="70,68 66,58 62,58 70,68" fill={metals[selectedMetal].color} />

                      {/* Bezel Ring Head - dynamic color */}
                      <polygon 
                        points="50,22 68,34 60,56 40,56 32,34" 
                        fill="#0F1B2F" 
                        stroke={metals[selectedMetal].color} 
                        strokeWidth="1.5" 
                      />

                      {/* Accent stones */}
                      <circle cx="39" cy="35" r="1.5" fill="#FFFFFF" />
                      <circle cx="61" cy="35" r="1.5" fill="#FFFFFF" />
                      <circle cx="43" cy="51" r="1.5" fill="#FFFFFF" />
                      <circle cx="57" cy="51" r="1.5" fill="#FFFFFF" />

                      {/* Main Octagonal Gemstone (Dynamic) */}
                      <polygon 
                        points="50,30 58,35 58,43 50,48 42,43 42,35" 
                        fill={gemstones[selectedGem].color} 
                        stroke={gemstones[selectedGem].facetColor} 
                        strokeWidth="1" 
                        style={{ filter: `drop-shadow(0 0 5px ${gemstones[selectedGem].glow})` }}
                      />

                      {/* Diamond facet lines */}
                      <line x1="50" y1="30" x2="50" y2="48" stroke={gemstones[selectedGem].facetColor} strokeWidth="0.5" />
                      <line x1="42" y1="39" x2="58" y2="39" stroke={gemstones[selectedGem].facetColor} strokeWidth="0.5" />

                    </svg>
                  </div>

                  {/* Bottom details display */}
                  <div className="border-t border-[#E2A62C]/20 pt-3 text-center space-y-1">
                    <p className="text-xs font-display font-bold text-white uppercase tracking-widest">
                      {metals[selectedMetal].name}
                    </p>
                    <p className="text-[10px] text-[#E2A62C] font-semibold uppercase tracking-wider">
                      with {gemstones[selectedGem].name}
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Collection Section */}
      <section id="masterpieces" className="py-20 lg:py-28 bg-[#0F1B2F] relative border-b border-[#E2A62C]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E2A62C]">Curated Masterpieces</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider">
                Signature Catalogues
              </h2>
              <div className="h-0.5 w-24 bg-[#E2A62C]"></div>
            </div>
            <p className="text-sm text-gray-400 font-light max-w-md">
              A select representation of our geometric collections, representing pure symmetries, heavy alloys, and flawless diamond settings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group relative p-2 bg-[#060D1A] border border-[#E2A62C]/20 hover:border-[#E2A62C]/80 transition-all duration-300 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="aspect-square w-full bg-[#0F1B2F] relative rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-deco-fans opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-4 border border-[#E2A62C]/10 rounded-lg flex items-center justify-center"></div>

                  <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 8px 16px rgba(0,0,0,0.5))">
                    {/* Concentric circles radiating */}
                    <circle cx="50" cy="50" r="28" fill="none" stroke="#E2A62C" strokeWidth="1" />
                    <circle cx="50" cy="50" r="24" fill="none" stroke="#E2A62C" strokeWidth="0.5" strokeDasharray="2 2" />
                    
                    {/* Radials */}
                    <line x1="50" y1="22" x2="50" y2="78" stroke="#E2A62C" strokeWidth="0.5" />
                    <line x1="22" y1="50" x2="78" y2="50" stroke="#E2A62C" strokeWidth="0.5" />
                    
                    {/* Center Diamond Cluster */}
                    <polygon points="50,38 58,46 50,54 42,46" fill="#FFFFFF" stroke="#E2A62C" strokeWidth="0.75" />
                    <polygon points="50,41 55,46 50,51 45,46" fill="#E2E8F0" />
                  </svg>
                  
                  <span className="absolute bottom-4 left-4 px-2 py-1 bg-[#060D1A] text-[9px] font-mono tracking-widest text-[#E2A62C] border border-[#E2A62C]/20 font-bold rounded">
                    EST. ₹4,90,000
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    Somajiguda Starburst Choker
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Featuring a radiating central starburst medallion in platinum and 22K gold, set with brilliant VVS1 solitaire diamonds and a detailed geometric step collar.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => prefillInquiry('Somajiguda Starburst Choker')}
                  className="w-full py-3 bg-[#E2A62C]/10 border border-[#E2A62C]/30 text-[#E2A62C] hover:bg-[#E2A62C] hover:text-[#060D1A] font-display font-bold text-xs uppercase tracking-widest transition-all duration-150 rounded-lg"
                >
                  Request Salon Booking
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-2 bg-[#060D1A] border border-[#E2A62C]/20 hover:border-[#E2A62C]/80 transition-all duration-300 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="aspect-square w-full bg-[#0F1B2F] relative rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-deco-fans opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-4 border border-[#E2A62C]/10 rounded-lg flex items-center justify-center"></div>

                  <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 8px 16px rgba(0,0,0,0.5))">
                    {/* Fan pattern */}
                    <path d="M 50 20 C 35 20, 20 35, 20 50 C 20 65, 35 80, 50 80 C 65 80, 80 65, 80 50 C 80 35, 65 20, 50 20 Z" fill="none" stroke="#E2A62C" strokeWidth="0.75" />
                    
                    {/* Inner fan lines */}
                    <path d="M 50 80 C 40 60, 40 40, 50 20" fill="none" stroke="#E2A62C" strokeWidth="0.5" />
                    <path d="M 50 80 C 60 60, 60 40, 50 20" fill="none" stroke="#E2A62C" strokeWidth="0.5" />
                    <path d="M 20 50 C 40 40, 60 40, 80 50" fill="none" stroke="#E2A62C" strokeWidth="0.5" />
                    
                    {/* Emerald center */}
                    <circle cx="50" cy="50" r="4" fill="#10B981" />
                  </svg>
                  
                  <span className="absolute bottom-4 left-4 px-2 py-1 bg-[#060D1A] text-[9px] font-mono tracking-widest text-[#E2A62C] border border-[#E2A62C]/20 font-bold rounded">
                    EST. ₹2,60,000
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    Deco Peacock Fan Earrings
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Symmetrical peacock fan earrings in pure platinum, structured with radiating steps and centered with fine Colombian green emerald cabochons.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => prefillInquiry('Deco Peacock Fan Earrings')}
                  className="w-full py-3 bg-[#E2A62C]/10 border border-[#E2A62C]/30 text-[#E2A62C] hover:bg-[#E2A62C] hover:text-[#060D1A] font-display font-bold text-xs uppercase tracking-widest transition-all duration-150 rounded-lg"
                >
                  Request Salon Booking
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-2 bg-[#060D1A] border border-[#E2A62C]/20 hover:border-[#E2A62C]/80 transition-all duration-300 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="aspect-square w-full bg-[#0F1B2F] relative rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-deco-fans opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-4 border border-[#E2A62C]/10 rounded-lg flex items-center justify-center"></div>

                  <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 8px 16px rgba(0,0,0,0.5))">
                    {/* Ring Band */}
                    <circle cx="50" cy="55" r="20" fill="none" stroke="#E2A62C" strokeWidth="2.5" />
                    {/* Stepped Head */}
                    <polygon points="50,15 65,25 65,38 50,48 35,38 35,25" fill="#EF4444" stroke="#E2A62C" strokeWidth="1" />
                    <polygon points="50,19 61,27 61,36 50,44 39,36 39,27" fill="#B91C1C" />
                  </svg>
                  
                  <span className="absolute bottom-4 left-4 px-2 py-1 bg-[#060D1A] text-[9px] font-mono tracking-widest text-[#E2A62C] border border-[#E2A62C]/20 font-bold rounded">
                    EST. ₹3,80,000
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    The Imperial Octagon Ring
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    A prominent step-cut Mozambique ruby secured in a heavy octagonal platinum bezel setting, supported by an 18K rose gold chevron-style shank.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => prefillInquiry('The Imperial Octagon Ring')}
                  className="w-full py-3 bg-[#E2A62C]/10 border border-[#E2A62C]/30 text-[#E2A62C] hover:bg-[#E2A62C] hover:text-[#060D1A] font-display font-bold text-xs uppercase tracking-widest transition-all duration-150 rounded-lg"
                >
                  Request Salon Booking
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Virtual Design Consultation Form Section */}
      <section id="consultation" className="py-20 lg:py-28 bg-[#060D1A] relative border-b border-[#E2A62C]/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="p-8 sm:p-12 bg-[#0F1B2F] border-2 border-[#E2A62C] rounded-3xl shadow-2xl relative">
            <div className="absolute top-4 right-4 text-[#E2A62C]/10">
              <Gem size={48} className="stroke-[1]" />
            </div>

            <div className="space-y-8">
              
              {/* Header inside the panel */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#E2A62C]/30 bg-[#060D1A] text-[#E2A62C] mb-2">
                  <Calendar size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-widest">
                  Secure Your Atelier Consultation
                </h2>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  Private Lounge (Somajiguda) or Virtual Session
                </p>
                <div className="h-0.5 w-16 bg-[#E2A62C] mx-auto"></div>
              </div>

              {/* Success Notification */}
              {submitSuccess && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-200 text-sm rounded-xl flex items-start gap-3 animate-fade-in">
                  <div className="p-1 bg-emerald-500 text-slate-950 rounded-full mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-400 uppercase tracking-wider text-xs">Request Deposited Successfully</h5>
                    <p className="text-xs text-emerald-300/80 mt-1 font-light">
                      A representative from our Somajiguda flagship lounge will contact you within 2 hours to confirm your private calendar block.
                    </p>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#E2A62C] font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priyanka Sen"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#060D1A] border border-[#E2A62C]/30 focus:border-[#E2A62C] focus:ring-1 focus:ring-[#E2A62C] text-sm text-white px-4 py-3 outline-none rounded-lg transition-all"
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#E2A62C] font-mono">
                      Indian Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#060D1A] border border-[#E2A62C]/30 focus:border-[#E2A62C] focus:ring-1 focus:ring-[#E2A62C] text-sm text-white px-4 py-3 outline-none rounded-lg transition-all"
                    />
                    {formErrors.phone && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.phone}</p>
                    )}
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#E2A62C] font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. priyanka@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#060D1A] border border-[#E2A62C]/30 focus:border-[#E2A62C] focus:ring-1 focus:ring-[#E2A62C] text-sm text-white px-4 py-3 outline-none rounded-lg transition-all"
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#E2A62C] font-mono">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full bg-[#060D1A] border border-[#E2A62C]/30 focus:border-[#E2A62C] focus:ring-1 focus:ring-[#E2A62C] text-sm text-white px-4 py-3 outline-none rounded-lg transition-all"
                    />
                    {formErrors.date && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.date}</p>
                    )}
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Collection of Interest */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#E2A62C] font-mono">
                      Design of Interest
                    </label>
                    <select
                      value={formData.collection}
                      onChange={(e) => setFormData(prev => ({ ...prev, collection: e.target.value }))}
                      className="w-full bg-[#060D1A] border border-[#E2A62C]/30 focus:border-[#E2A62C] focus:ring-1 focus:ring-[#E2A62C] text-sm text-white px-4 py-3 outline-none rounded-lg transition-all"
                    >
                      <option value="Somajiguda Starburst Choker">Somajiguda Starburst Choker</option>
                      <option value="Deco Peacock Fan Earrings">Deco Peacock Fan Earrings</option>
                      <option value="The Imperial Octagon Ring">The Imperial Octagon Ring</option>
                      <option value="Bespoke Architectural Band">Bespoke Architectural Band</option>
                    </select>
                  </div>

                  {/* Session Format */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#E2A62C] font-mono">
                      Session Format
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full bg-[#060D1A] border border-[#E2A62C]/30 focus:border-[#E2A62C] focus:ring-1 focus:ring-[#E2A62C] text-sm text-white px-4 py-3 outline-none rounded-lg transition-all"
                    >
                      <option value="In-Store Private Lounge">In-Store Private Lounge (Somajiguda)</option>
                      <option value="Virtual Video Session">Virtual Video Session (Zoom/GMeet)</option>
                    </select>
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#E2A62C] text-[#060D1A] hover:bg-[#F2B63C] active:scale-[0.98] transition-all duration-150 font-display font-black text-sm uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#E2A62C]/10"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin text-[#060D1A]" size={16} />
                        <span>Verifying Calendar Blocks...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Book Secure Session</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* Customer Stories Section */}
      <section id="reviews" className="py-20 lg:py-28 bg-[#0F1B2F] relative border-b border-[#E2A62C]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E2A62C]">Client Attestations</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider">
              Customer Stories
            </h2>
            <div className="h-0.5 w-20 bg-[#E2A62C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Story 1 */}
            <div className="p-8 bg-[#060D1A] border border-[#E2A62C]/20 rounded-2xl flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-[#E2A62C]/15 font-display text-4xl font-bold">01</div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#E2A62C] text-[#E2A62C]" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                  "Neelkanth's interactive customizer was a revelation. We designed our engagement band online, selecting Platinum and Diamond. The estimated price breakdown was 100% transparent. When we visited their Somajiguda showroom, the physical ring was even more breathtaking. Absolute elite service."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Priyanka Sen</p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-mono">Somajiguda, Hyderabad</p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-8 bg-[#060D1A] border border-[#E2A62C]/20 rounded-2xl flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-[#E2A62C]/15 font-display text-4xl font-bold">02</div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#E2A62C] text-[#E2A62C]" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                  "Their Peacock Fan earrings are an absolute masterpiece of retro Art Deco. The lines are clean and heavy, capturing that authentic 1920s architecture. Getting our pieces custom-engraved at their local salon was an incredibly high-touch experience. High recommendation."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Mrs. Lakshmi Rao</p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-mono">Banjara Hills, Hyderabad</p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-8 bg-[#060D1A] border border-[#E2A62C]/20 rounded-2xl flex flex-col justify-between relative md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4 text-[#E2A62C]/15 font-display text-4xl font-bold">03</div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#E2A62C] text-[#E2A62C]" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                  "A highly professional jeweler. We booked a virtual video session from Gachibowli to discuss resizing a legacy choker. The team used high-res 3D renders to show structural modifications. Having their physical storefront in Somajiguda for over 30 years provides immense peace of mind."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Vikram Dev</p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-mono">Gachibowli, Telangana</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Store Details Section */}
      <footer className="bg-[#060D1A] text-gray-400 border-t border-[#E2A62C]/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Column 1: Store Intro */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#E2A62C]/50 rounded-full flex items-center justify-center bg-[#0F1B2F]">
                  <span className="font-display text-xs font-bold text-[#E2A62C]">NK</span>
                </div>
                <div>
                  <span className="font-display text-lg font-black tracking-widest uppercase block text-white">
                    Neelkanth
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E2A62C] font-semibold block mt-0.5 font-mono">
                    Somajiguda, Hyderabad
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed font-light">
                Committed to the structural geometry of luxury. Creating heavy platinum and gold Art Deco bridal jewelry, designed and hand-polished at our flagship Somajiguda workshop.
              </p>
              <div className="text-xs text-gray-500 font-mono">
                © {new Date().getFullYear()} Neelkanth Jewellers. All rights reserved.
              </div>
            </div>

            {/* Column 2: Hours */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#E2A62C]">
                Salon Hours
              </h4>
              <ul className="text-xs space-y-2.5 font-light">
                <li className="flex justify-between">
                  <span>Monday – Saturday:</span>
                  <span className="text-white font-medium">10:30 AM – 8:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday Private Showings:</span>
                  <span className="text-white font-medium">1:00 PM – 6:00 PM</span>
                </li>
                <li className="flex justify-between text-yellow-500/80">
                  <span>Holiday Closures:</span>
                  <span>National Holidays</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Address & Contact */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#E2A62C]">
                Store Details
              </h4>
              
              <ul className="space-y-3.5 text-xs font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#E2A62C] shrink-0 mt-0.5" />
                  <span>Somajiguda Main Road, Hyderabad, Telangana 500082.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E2A62C] shrink-0" />
                  <a href="tel:+914023415566" className="hover:text-white transition-colors">+91 40 2341 5566</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E2A62C] shrink-0" />
                  <a href="mailto:care@neelkanthjewellers.com" className="hover:text-white transition-colors">care@neelkanthjewellers.com</a>
                </li>
              </ul>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2A62C]/10 border border-[#E2A62C]/30 text-[9px] uppercase tracking-widest font-bold text-[#E2A62C] rounded-lg">
                  <ShieldCheck size={12} />
                  <span>BIS Hallmarked • GIA Solitaires</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

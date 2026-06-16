"use client";

import React, { useState } from 'react';
import { Sparkles, Calendar, Mail, MapPin, Phone, Star, Send, Check, Loader2, ArrowRight, ShieldCheck, Compass, HelpCircle } from 'lucide-react';

export default function GopalJewellersPreview() {
  // Customizer State
  const [selectedMetal, setSelectedMetal] = useState('22K Gold');
  const [selectedGem, setSelectedGem] = useState('Diamond');
  const [inquiryProduct, setInquiryProduct] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collection: 'Deco-Temple Choker',
    date: '',
    type: 'Virtual Video Session'
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Customizer Configurations
  const metals = {
    '22K Gold': { 
      name: '22K Traditional Antique Gold', 
      color: '#DAA520', 
      secondaryColor: '#B8860B',
      basePrice: 180000, 
      description: 'The legendary deep-warm hue of Deccani royalty. Finished with a rich, hand-rubbed antique patina.' 
    },
    '18K Rose Gold': { 
      name: '18K Retro Rose Gold', 
      color: '#E5A995', 
      secondaryColor: '#C48B79',
      basePrice: 150000, 
      description: 'A romantic, vintage alloy of copper and gold. Recalls the warm, rose-tinted glamour of the late 1920s.' 
    },
    'Platinum': { 
      name: 'Imperial Platinum 950', 
      color: '#E5E7EB', 
      secondaryColor: '#9CA3AF',
      basePrice: 240000, 
      description: 'Lustrous, pure, and heavy. The ultimate noble metal of the machine age, providing stark, geometric contrast.' 
    }
  };

  const gemstones = {
    'Diamond': { 
      name: 'VVS1 Ethically Sourced Diamond', 
      color: '#FFFFFF', 
      facetColor: '#E2E8F0',
      glow: 'rgba(255, 255, 255, 0.4)', 
      price: 120000, 
      description: 'Hand-selected brilliant cut solitaire with flawless geometric symmetry and high dispersion.' 
    },
    'Emerald': { 
      name: 'Zambian Deep Emerald', 
      color: '#10B981', 
      facetColor: '#047857',
      glow: 'rgba(16, 185, 129, 0.4)', 
      price: 85000, 
      description: 'A deep, velvet green gemstone. Contains unique natural garden patterns ("jardin") within.' 
    },
    'Ruby': { 
      name: 'Burmese Pigeon-Blood Ruby', 
      color: '#EF4444', 
      facetColor: '#B91C1C',
      glow: 'rgba(239, 68, 68, 0.4)', 
      price: 95000, 
      description: 'Vibrant, crimson-red ruby offering a high-contrast vintage statement of passion and power.' 
    },
    'Pearl': { 
      name: 'Basra Saltwater Pearl', 
      color: '#FDFBF7', 
      facetColor: '#F3EFE0',
      glow: 'rgba(253, 251, 247, 0.3)', 
      price: 45000, 
      description: 'An organic, highly-coveted Basra saltwater pearl with an iridescent, satiny lustre.' 
    }
  };

  // Pricing calculations
  const metalBase = metals[selectedMetal].basePrice;
  const gemPrice = gemstones[selectedGem].price;
  const subtotal = metalBase + gemPrice;
  const makingCharges = Math.round(subtotal * 0.12); // 12% making charges
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
      errors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
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
        collection: 'Deco-Temple Choker',
        date: '',
        type: 'Virtual Video Session'
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
    <div className="min-h-screen bg-[#070D1D] text-[#ECEFF1] font-body antialiased selection:bg-[#DAA520]/30 selection:text-white">
      {/* Import Google Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-display { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        /* Custom Retro Art Deco Border Pattern */
        .art-deco-border {
          border: 4px double #DAA520;
          position: relative;
        }

        .art-deco-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border: 2px solid #DAA520;
          background-color: #070D1D;
        }

        /* Stepped geometric button shapes */
        .deco-stepped {
          clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
        }

        /* Sunburst Background Pattern */
        .bg-sunburst {
          background-image: radial-gradient(circle at center, rgba(218, 165, 32, 0.08) 0%, transparent 70%);
        }

        /* Geometric zig zag grid background */
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(45deg, rgba(218, 165, 32, 0.02) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(218, 165, 32, 0.02) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(218, 165, 32, 0.02) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(218, 165, 32, 0.02) 75%);
        }

        .active-ring {
          box-shadow: 0 0 0 2px #070D1D, 0 0 0 4px #DAA520;
        }
      ` }} />

      {/* Hero Header / Nav */}
      <nav className="sticky top-0 z-50 w-full bg-[#070D1D]/90 backdrop-blur-md border-b-2 border-[#DAA520]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center border-2 border-[#DAA520] deco-stepped bg-[#0A192F]">
                <span className="font-display text-xl font-bold text-[#DAA520]">G</span>
                <div className="absolute inset-0.5 border border-[#DAA520]/40 deco-stepped pointer-events-none"></div>
              </div>
              <div>
                <span className="font-display text-xl font-black tracking-widest uppercase block leading-none text-white">
                  Gopal Jewellers
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#DAA520] font-semibold block mt-1">
                  Moula Ali • Estd 1978
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#heritage" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#DAA520] transition-colors duration-150 active:scale-95">Heritage</a>
              <a href="#customizer" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#DAA520] transition-colors duration-150 active:scale-95">Customizer</a>
              <a href="#collections" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#DAA520] transition-colors duration-150 active:scale-95">Collections</a>
              <a href="#testimonials" className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#DAA520] transition-colors duration-150 active:scale-95">Stories</a>
            </div>

            {/* CTA */}
            <div>
              <a 
                href="#consultation" 
                className="inline-block px-5 py-2.5 bg-[#DAA520] text-[#070D1D] font-display font-bold text-xs uppercase tracking-widest border border-white/20 deco-stepped hover:bg-[#F4D068] active:scale-95 transition-all duration-150"
              >
                Private Lounge
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-sunburst bg-grid-pattern border-b-4 border-double border-[#DAA520]/40">
        
        {/* Decorative Art Deco Geometric Ornaments */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-[#DAA520]/20 pointer-events-none hidden lg:block transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-double border-[#DAA520]/15 pointer-events-none hidden lg:block deco-stepped"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#DAA520] bg-[#0A192F] text-xs uppercase tracking-widest font-semibold text-[#DAA520] deco-stepped">
                <Compass size={14} className="animate-spin text-[#DAA520]" />
                <span>Legacy Deccani Masterpieces</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wider uppercase">
                Geometries <br/>
                <span className="text-[#DAA520]">of Pure Grace</span>
              </h1>

              <div className="h-1.5 w-32 bg-[#DAA520] mx-auto lg:mx-0 relative">
                <div className="absolute -top-1 -bottom-1 left-1/2 -ml-2.5 w-5 bg-[#070D1D] border border-[#DAA520]"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                For over four decades, Gopal Jewellers has handcrafted bespoke bridal heirlooms. We forge the rigid, striking symmetries of 1920s French Art Deco with the golden warmth of South Indian Temple craftsmanship. 
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="#customizer" 
                  className="px-8 py-4 bg-[#DAA520] text-[#070D1D] font-display font-black text-sm uppercase tracking-widest hover:bg-[#F4D068] transition-colors duration-150 active:scale-[0.97] deco-stepped shadow-lg shadow-[#DAA520]/10 flex items-center justify-center gap-2"
                >
                  Configure Custom Design
                  <ArrowRight size={16} />
                </a>
                <a 
                  href="#collections" 
                  className="px-8 py-4 bg-transparent text-white border-2 border-[#DAA520] font-display font-semibold text-sm uppercase tracking-widest hover:bg-[#DAA520]/10 transition-colors duration-150 active:scale-[0.97] deco-stepped flex items-center justify-center"
                >
                  View Heirloom Catalog
                </a>
              </div>
            </div>

            {/* Right Column Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-3 bg-[#0A192F] border-4 border-double border-[#DAA520] shadow-2xl max-w-md w-full deco-stepped">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#DAA520] -mt-1 -ml-1"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#DAA520] -mt-1 -mr-1"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#DAA520] -mb-1 -ml-1"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#DAA520] -mb-1 -mr-1"></div>

                <div className="relative overflow-hidden aspect-[4/5] bg-[#070D1D] border border-[#DAA520]/30 flex items-center justify-center">
                  {/* Decorative golden geometric lines */}
                  <div className="absolute inset-0 border border-[#DAA520]/10 m-4 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent absolute"></div>
                    <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-[#DAA520]/20 to-transparent absolute"></div>
                  </div>

                  {/* SVG Mockup Jewelry */}
                  <svg width="220" height="220" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 10px 20px rgba(0,0,0,0.6))">
                    {/* Stepped chevron background lines */}
                    <path d="M 50 15 L 20 40 H 80 Z" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.3" />
                    <path d="M 50 10 L 15 42 H 85 Z" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.2" />
                    
                    {/* Necklace chain */}
                    <path d="M 25 20 C 35 45, 65 45, 75 20" fill="none" stroke="#DAA520" strokeWidth="1.5" strokeDasharray="3 2" />
                    <path d="M 20 18 C 32 50, 68 50, 80 18" fill="none" stroke="#DAA520" strokeWidth="0.75" />

                    {/* Stepped Art Deco Centerpiece */}
                    <polygon points="50,32 68,45 60,65 40,65 32,45" fill="#0A192F" stroke="#DAA520" strokeWidth="1.25" />
                    <polygon points="50,36 62,45 56,58 44,58 38,45" fill="none" stroke="#DAA520" strokeWidth="0.75" />
                    
                    {/* Ziggurat Stepped base */}
                    <rect x="42" y="65" width="16" height="3" fill="#DAA520" />
                    <rect x="44" y="68" width="12" height="3" fill="#DAA520" />
                    <rect x="47" y="71" width="6" height="3" fill="#DAA520" />
                    
                    {/* Gemstone settings */}
                    <circle cx="50" cy="48" r="7" fill="#EF4444" stroke="#ffffff" strokeWidth="0.75" />
                    <polygon points="50,42 55,48 50,54 45,48" fill="#B91C1C" />
                    
                    {/* Dangling pearls */}
                    <circle cx="50" cy="80" r="2.5" fill="#FDFBF7" stroke="#DAA520" strokeWidth="0.5" />
                    <line x1="50" y1="74" x2="50" y2="77.5" stroke="#DAA520" strokeWidth="0.75" />

                    <circle cx="43" cy="74" r="2" fill="#FDFBF7" stroke="#DAA520" strokeWidth="0.5" />
                    <line x1="43" y1="68" x2="43" y2="72" stroke="#DAA520" strokeWidth="0.75" />

                    <circle cx="57" cy="74" r="2" fill="#FDFBF7" stroke="#DAA520" strokeWidth="0.5" />
                    <line x1="57" y1="68" x2="57" y2="72" stroke="#DAA520" strokeWidth="0.75" />
                  </svg>
                  
                  {/* Subtle caption */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-[10px] font-display uppercase tracking-[0.2em] text-[#DAA520]">
                      The Moula Ali Empress Necklace
                    </p>
                    <p className="text-[8px] uppercase tracking-wider text-gray-400 mt-1">
                      Available for Private Viewing
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-20 lg:py-28 bg-[#0A192F] relative border-b-2 border-[#DAA520]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Traditional Deccan Workshop Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative p-2 border-2 border-[#DAA520] deco-stepped bg-[#070D1D]">
                <div className="aspect-square bg-[#070D1D] relative border border-[#DAA520]/20 flex flex-col justify-between p-8 overflow-hidden">
                  
                  {/* Watermark grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

                  <div className="flex justify-between items-start z-10">
                    <span className="text-3xl font-display font-bold text-[#DAA520] opacity-40">1978</span>
                    <Sparkles size={24} className="text-[#DAA520] opacity-50" />
                  </div>

                  <div className="space-y-4 z-10">
                    <div className="inline-block px-3 py-1 bg-[#DAA520]/15 border border-[#DAA520]/40 text-[9px] uppercase tracking-widest font-black text-[#DAA520]">
                      Hyderabad Heritage
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-white uppercase tracking-wider">
                      The Moula Ali <br/>Hand-Forge
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      Every mold, filigree line, and gemstone setting is forged by master karigars whose lineages trace back to the royal courts of the Deccan. We preserve the heavy, tactile weight of classic gold.
                    </p>
                  </div>

                  {/* Geometric Deco elements */}
                  <div className="flex justify-between border-t border-[#DAA520]/20 pt-4 z-10">
                    <span className="text-[10px] uppercase tracking-widest text-[#DAA520] font-semibold">Genuine Gold</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">22K / 18K / Pt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heritage Text */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DAA520]">Our Golden Lineage</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider">
                  Where Nizam Splendour Meets Machine Age Symmetries
                </h2>
                <div className="h-1 w-24 bg-[#DAA520]"></div>
              </div>

              <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  Founded by Sri Gopal Agarwal in 1978 on the historic main road of Moula Ali, our atelier was built with a singular premise: jewelry should command the space it occupies. Rather than delicate, ephemeral trinkets, we crafts bold statements that stand as sculptures of personal history.
                </p>
                <p>
                  Our hallmark design system infuses classical temple elements—the stepped arches of Deccani temples, the heavy gadrooned gold beads, the mythological representations—with the clean, uncompromising lines of the European Art Deco movement of the 1920s. 
                </p>
                <p className="border-l-2 border-[#DAA520] pl-6 italic text-gray-300 font-normal">
                  "We do not merely melt gold; we architect heirlooms. A Gopal Jewellers piece represents a covenant of design, built to outlast generations of fashion."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-800">
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#DAA520]">45+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Years of Legacy</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#DAA520]">100%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Hallmarked Gold</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#DAA520]">12k+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Heirlooms Created</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-20 lg:py-28 bg-grid-pattern relative border-b-4 border-double border-[#DAA520]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DAA520]">The Atelier Dashboard</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-wider">
              Interactive Jewelry Customizer
            </h2>
            <div className="h-1 w-20 bg-[#DAA520] mx-auto"></div>
            <p className="text-sm text-gray-400 font-light">
              Architect your heirloom. Choose from our certified metals and precious gemstones to preview the custom configuration and receive a live estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Grid: Configurator Tabs */}
            <div className="lg:col-span-7 space-y-8 bg-[#0A192F]/90 p-8 border-2 border-[#DAA520] deco-stepped shadow-xl">
              
              {/* Metal Selector */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-black text-[#DAA520] border-b border-gray-800 pb-2">
                  1. Select Metal Base
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {Object.keys(metals).map((mKey) => (
                    <button
                      key={mKey}
                      onClick={() => setSelectedMetal(mKey)}
                      className={`py-3.5 px-3 deco-stepped text-center transition-all duration-150 active:scale-95 text-xs font-bold uppercase tracking-wider ${
                        selectedMetal === mKey 
                        ? 'bg-[#DAA520] text-[#070D1D]' 
                        : 'bg-[#070D1D] text-gray-300 hover:bg-[#DAA520]/10 border border-[#DAA520]/30'
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
                <label className="block text-xs uppercase tracking-widest font-black text-[#DAA520] border-b border-gray-800 pb-2">
                  2. Select Center Gemstone
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.keys(gemstones).map((gKey) => (
                    <button
                      key={gKey}
                      onClick={() => setSelectedGem(gKey)}
                      className={`py-3.5 px-2 deco-stepped text-center transition-all duration-150 active:scale-95 text-xs font-bold uppercase tracking-wider ${
                        selectedGem === gKey 
                        ? 'bg-[#DAA520] text-[#070D1D]' 
                        : 'bg-[#070D1D] text-gray-300 hover:bg-[#DAA520]/10 border border-[#DAA520]/30'
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
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#DAA520] mb-4">
                  Pricing Breakdown
                </h4>
                <div className="space-y-3 font-mono text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-sans">Metal Base ({metals[selectedMetal].name}):</span>
                    <span>{formatCurrency(metalBase)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans">Center Gem ({gemstones[selectedGem].name}):</span>
                    <span>{formatCurrency(gemPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans">Karigar Hand-Making Fee (12%):</span>
                    <span>{formatCurrency(makingCharges)}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-800">
                    <span className="font-sans">GST (3%):</span>
                    <span>{formatCurrency(gst)}</span>
                  </div>
                  <div className="flex justify-between text-white font-black text-lg pt-2">
                    <span className="font-display uppercase tracking-widest text-[#DAA520] text-sm">Estimated Total:</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => prefillInquiry(`Customized ${selectedMetal} & ${selectedGem} Pendant`)}
                    className="flex-1 py-4 bg-[#DAA520] text-[#070D1D] font-display font-black text-xs uppercase tracking-widest hover:bg-[#F4D068] active:scale-95 transition-all duration-150 deco-stepped text-center"
                  >
                    Inquire For This Build
                  </button>
                  <button 
                    onClick={() => alert(`Design saved: ${selectedMetal} with ${selectedGem}. Ref: GJ-${Math.floor(1000 + Math.random()*9000)}`)}
                    className="px-6 py-4 bg-transparent border border-[#DAA520] text-[#DAA520] font-display font-semibold text-xs uppercase tracking-widest hover:bg-[#DAA520]/10 active:scale-95 transition-all duration-150 deco-stepped"
                  >
                    Save Build
                  </button>
                </div>
              </div>

            </div>

            {/* Right Grid: Live SVG Preview */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-full relative p-4 bg-[#0A192F] border-4 border-double border-[#DAA520] shadow-2xl deco-stepped">
                
                {/* Vintage Frame Corner brackets */}
                <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-[#DAA520]/60"></div>
                <div className="absolute top-1 right-1 w-6 h-6 border-t border-r border-[#DAA520]/60"></div>
                <div className="absolute bottom-1 left-1 w-6 h-6 border-b border-l border-[#DAA520]/60"></div>
                <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-[#DAA520]/60"></div>

                <div className="aspect-square bg-[#070D1D] relative border border-[#DAA520]/30 flex flex-col justify-between p-6">
                  
                  {/* Top design indicators */}
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-[#DAA520]/60 font-mono">
                    <span>Model: GJ-DECO-PNDT</span>
                    <span>Live Canvas</span>
                  </div>

                  {/* SVG Canvas displaying the customized necklace/pendant */}
                  <div className="flex justify-center items-center flex-grow">
                    <svg width="220" height="220" viewBox="0 0 100 100" className="filter drop-shadow(0 15px 25px rgba(0,0,0,0.7))">
                      <defs>
                        <filter id="gem-glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* Backdrop alignment lines */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#DAA520" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.3" />
                      <line x1="50" y1="5" x2="50" y2="95" stroke="#DAA520" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.3" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke="#DAA520" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.3" />

                      {/* Chain loops (Colored depending on selected metal) */}
                      <path 
                        d="M 15 20 C 30 42, 70 42, 85 20" 
                        fill="none" 
                        stroke={metals[selectedMetal].color} 
                        strokeWidth="1.2" 
                      />
                      <path 
                        d="M 18 18 C 31 38, 69 38, 82 18" 
                        fill="none" 
                        stroke={metals[selectedMetal].secondaryColor} 
                        strokeWidth="0.6" 
                      />

                      {/* Connecting loop */}
                      <rect 
                        x="48" 
                        y="33" 
                        width="4" 
                        height="6" 
                        fill="none" 
                        stroke={metals[selectedMetal].color} 
                        strokeWidth="1.2" 
                      />

                      {/* Main Art Deco Octagonal Shield Outer Ring */}
                      <polygon 
                        points="50,38 68,48 68,68 50,78 32,68 32,48" 
                        fill="#0A192F" 
                        stroke={metals[selectedMetal].color} 
                        strokeWidth="1.5" 
                      />

                      {/* Inner geometric steps */}
                      <polygon 
                        points="50,42 63,49 63,65 50,72 37,65 37,49" 
                        fill="none" 
                        stroke={metals[selectedMetal].secondaryColor} 
                        strokeWidth="0.8" 
                      />

                      {/* Stepped chevron bar at bottom of shield */}
                      <polygon 
                        points="40,68 50,72 60,68 50,78" 
                        fill={metals[selectedMetal].color} 
                      />

                      {/* Main Gemstone (Colored depending on selected gemstone) */}
                      <polygon 
                        points="50,45 60,53 50,61 40,53" 
                        fill={gemstones[selectedGem].color} 
                        stroke={gemstones[selectedGem].facetColor} 
                        strokeWidth="0.75" 
                        style={{ filter: `drop-shadow(0 0 4px ${gemstones[selectedGem].glow})` }}
                      />

                      {/* Diamond facets */}
                      <line x1="50" y1="45" x2="50" y2="61" stroke={gemstones[selectedGem].facetColor} strokeWidth="0.4" />
                      <line x1="40" y1="53" x2="60" y2="53" stroke={gemstones[selectedGem].facetColor} strokeWidth="0.4" />

                      {/* Dangling gold spheres */}
                      <circle cx="50" cy="84" r="2.5" fill={metals[selectedMetal].color} />
                      <line x1="50" y1="78" x2="50" y2="81.5" stroke={metals[selectedMetal].color} strokeWidth="1" />

                      <circle cx="38" cy="74" r="1.8" fill={metals[selectedMetal].secondaryColor} />
                      <line x1="38" y1="68" x2="38" y2="72" stroke={metals[selectedMetal].secondaryColor} strokeWidth="0.75" />

                      <circle cx="62" cy="74" r="1.8" fill={metals[selectedMetal].secondaryColor} />
                      <line x1="62" y1="68" x2="62" y2="72" stroke={metals[selectedMetal].secondaryColor} strokeWidth="0.75" />

                    </svg>
                  </div>

                  {/* Bottom details display */}
                  <div className="border-t border-[#DAA520]/20 pt-3 text-center space-y-1">
                    <p className="text-xs font-display font-bold text-white uppercase tracking-widest">
                      {metals[selectedMetal].name}
                    </p>
                    <p className="text-[10px] text-[#DAA520] font-semibold uppercase tracking-wider">
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
      <section id="collections" className="py-20 lg:py-28 bg-[#0A192F] relative border-b-2 border-[#DAA520]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DAA520]">Exquisite Catalogues</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider">
                The Signature Heirlooms
              </h2>
              <div className="h-1 w-24 bg-[#DAA520]"></div>
            </div>
            <p className="text-sm text-gray-400 font-light max-w-md">
              A curated showcase of our most renowned designs. Each piece is crafted in limited numbers, accompanied by certificates of heritage and gold hallmark certification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group relative p-2 bg-[#070D1D] border border-[#DAA520]/30 hover:border-[#DAA520] transition-all duration-300 deco-stepped flex flex-col justify-between">
              <div>
                <div className="aspect-square w-full bg-[#0A192F] relative border border-[#DAA520]/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  {/* Decorative Geometric Outline */}
                  <div className="absolute inset-4 border border-[#DAA520]/15 flex items-center justify-center"></div>

                  <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 8px 16px rgba(0,0,0,0.5))">
                    {/* Metal framework */}
                    <circle cx="50" cy="50" r="28" fill="none" stroke="#DAA520" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#DAA520" strokeWidth="0.5" strokeDasharray="2 2" />
                    {/* Stepped chevron border inside */}
                    <polygon points="50,26 62,38 62,62 50,74 38,62 38,38" fill="none" stroke="#DAA520" strokeWidth="0.8" />
                    {/* Heavy rubies set along border */}
                    <circle cx="50" cy="26" r="2.5" fill="#EF4444" stroke="#DAA520" strokeWidth="0.5" />
                    <circle cx="50" cy="74" r="2.5" fill="#EF4444" stroke="#DAA520" strokeWidth="0.5" />
                    <circle cx="38" cy="38" r="2" fill="#EF4444" stroke="#DAA520" strokeWidth="0.5" />
                    <circle cx="62" cy="38" r="2" fill="#EF4444" stroke="#DAA520" strokeWidth="0.5" />
                    <circle cx="38" cy="62" r="2" fill="#EF4444" stroke="#DAA520" strokeWidth="0.5" />
                    <circle cx="62" cy="62" r="2" fill="#EF4444" stroke="#DAA520" strokeWidth="0.5" />
                    {/* Core Gold Medallion */}
                    <polygon points="50,38 58,45 58,55 50,62 42,55 42,45" fill="#DAA520" />
                    <circle cx="50" cy="50" r="3" fill="#FDFBF7" />
                  </svg>
                  
                  <span className="absolute bottom-4 left-4 px-2 py-1 bg-[#070D1D] text-[9px] font-mono tracking-widest text-[#DAA520] border border-[#DAA520]/30 font-bold">
                    EST. ₹2,85,000
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    The Moula Ali Empress Necklace
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    A heavy 22K gold heritage medallion featuring detailed Nizam-inspired engraving inside a stepped Art Deco octagonal shield, set with selected Burmese rubies and pearls.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => prefillInquiry('The Moula Ali Empress Necklace')}
                  className="w-full py-3 bg-[#DAA520]/10 border border-[#DAA520]/40 text-[#DAA520] hover:bg-[#DAA520] hover:text-[#070D1D] font-display font-bold text-xs uppercase tracking-widest transition-all duration-150 active:scale-95 deco-stepped"
                >
                  Request Lounge Inquiry
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-2 bg-[#070D1D] border border-[#DAA520]/30 hover:border-[#DAA520] transition-all duration-300 deco-stepped flex flex-col justify-between">
              <div>
                <div className="aspect-square w-full bg-[#0A192F] relative border border-[#DAA520]/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="absolute inset-4 border border-[#DAA520]/15 flex items-center justify-center"></div>

                  <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 8px 16px rgba(0,0,0,0.5))">
                    {/* Stepped chevron choker frame */}
                    <path d="M 20 40 C 35 60, 65 60, 80 40" fill="none" stroke="#DAA520" strokeWidth="2" />
                    <path d="M 15 38 C 32 63, 68 63, 85 38" fill="none" stroke="#DAA520" strokeWidth="0.8" />
                    
                    {/* Chevron teeth */}
                    <path d="M 30 48 L 30 54 L 35 50" fill="#DAA520" />
                    <path d="M 40 52 L 40 58 L 45 54" fill="#DAA520" />
                    <path d="M 50 53 L 50 60 L 55 55" fill="#DAA520" />
                    <path d="M 60 52 L 60 58 L 65 54" fill="#DAA520" />
                    <path d="M 70 48 L 70 54 L 75 50" fill="#DAA520" />

                    {/* Central Emerald drop */}
                    <polygon points="50,60 55,68 50,76 45,68" fill="#10B981" stroke="#DAA520" strokeWidth="0.75" />
                  </svg>
                  
                  <span className="absolute bottom-4 left-4 px-2 py-1 bg-[#070D1D] text-[9px] font-mono tracking-widest text-[#DAA520] border border-[#DAA520]/30 font-bold">
                    EST. ₹3,40,000
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    Deco-Temple Choker
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    A neck-hugging architectural choker with repeating stepped chevrons in heavy 22K antique gold, supporting a prominent, central Zambian emerald drop.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => prefillInquiry('Deco-Temple Choker')}
                  className="w-full py-3 bg-[#DAA520]/10 border border-[#DAA520]/40 text-[#DAA520] hover:bg-[#DAA520] hover:text-[#070D1D] font-display font-bold text-xs uppercase tracking-widest transition-all duration-150 active:scale-95 deco-stepped"
                >
                  Request Lounge Inquiry
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-2 bg-[#070D1D] border border-[#DAA520]/30 hover:border-[#DAA520] transition-all duration-300 deco-stepped flex flex-col justify-between">
              <div>
                <div className="aspect-square w-full bg-[#0A192F] relative border border-[#DAA520]/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="absolute inset-4 border border-[#DAA520]/15 flex items-center justify-center"></div>

                  <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 filter drop-shadow(0 8px 16px rgba(0,0,0,0.5))">
                    {/* Double strand pearl loops */}
                    <path d="M 15 25 C 30 50, 70 50, 85 25" fill="none" stroke="#FDFBF7" strokeWidth="2.5" strokeDasharray="3.5 1.5" />
                    <path d="M 10 20 C 28 58, 72 58, 90 20" fill="none" stroke="#FDFBF7" strokeWidth="3.2" strokeDasharray="4 2" />

                    {/* Geometric Clasp */}
                    <rect x="42" y="40" width="16" height="8" fill="#DAA520" stroke="#070D1D" strokeWidth="0.5" />
                    <circle cx="50" cy="44" r="2" fill="#EF4444" />
                  </svg>
                  
                  <span className="absolute bottom-4 left-4 px-2 py-1 bg-[#070D1D] text-[9px] font-mono tracking-widest text-[#DAA520] border border-[#DAA520]/30 font-bold">
                    EST. ₹2,10,000
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-wider">
                    Geometric Basra Pearl Strands
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Double strands of hand-selected Basra saltwater pearls of exceptional luster, secured by a custom, geometric 18K gold clasp inlaid with micro-rubies.
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => prefillInquiry('Geometric Basra Pearl Strands')}
                  className="w-full py-3 bg-[#DAA520]/10 border border-[#DAA520]/40 text-[#DAA520] hover:bg-[#DAA520] hover:text-[#070D1D] font-display font-bold text-xs uppercase tracking-widest transition-all duration-150 active:scale-95 deco-stepped"
                >
                  Request Lounge Inquiry
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Virtual Design Consultation Form Section */}
      <section id="consultation" className="py-20 lg:py-28 bg-grid-pattern relative border-b-4 border-double border-[#DAA520]/40">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="p-1.5 bg-[#0A192F] border-4 border-double border-[#DAA520] deco-stepped shadow-2xl relative">
            
            {/* Corner Decorative Dots */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#DAA520] deco-stepped"></div>
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#DAA520] deco-stepped"></div>
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-[#DAA520] deco-stepped"></div>
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-[#DAA520] deco-stepped"></div>

            <div className="border border-[#DAA520]/30 p-8 sm:p-12 space-y-8 bg-[#070D1D]/95">
              
              {/* Header inside the panel */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#DAA520]/30 bg-[#0A192F] text-[#DAA520] mb-2">
                  <Calendar size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-widest">
                  Secure Your Consultation
                </h2>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  In-Store private lounge or virtual design session
                </p>
                <div className="h-0.5 w-16 bg-[#DAA520] mx-auto"></div>
              </div>

              {/* Success Notification */}
              {submitSuccess && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-200 text-sm deco-stepped flex items-start gap-3 animate-fade-in">
                  <div className="p-1 bg-emerald-500 text-slate-950 rounded-full mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-400 uppercase tracking-wider text-xs">Request Deposited Successfully</h5>
                    <p className="text-xs text-emerald-300/80 mt-1 font-light">
                      A representative from our Moula Ali salon will contact you within 2 hours to confirm your private viewing calendar block.
                    </p>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#DAA520] font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#0A192F] border border-[#DAA520]/30 focus:border-[#DAA520] focus:ring-1 focus:ring-[#DAA520] text-sm text-white px-4 py-3 outline-none deco-stepped transition-all"
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#DAA520] font-mono">
                      Indian Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#0A192F] border border-[#DAA520]/30 focus:border-[#DAA520] focus:ring-1 focus:ring-[#DAA520] text-sm text-white px-4 py-3 outline-none deco-stepped transition-all"
                    />
                    {formErrors.phone && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.phone}</p>
                    )}
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#DAA520] font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#0A192F] border border-[#DAA520]/30 focus:border-[#DAA520] focus:ring-1 focus:ring-[#DAA520] text-sm text-white px-4 py-3 outline-none deco-stepped transition-all"
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#DAA520] font-mono">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full bg-[#0A192F] border border-[#DAA520]/30 focus:border-[#DAA520] focus:ring-1 focus:ring-[#DAA520] text-sm text-white px-4 py-3 outline-none deco-stepped transition-all"
                    />
                    {formErrors.date && (
                      <p className="text-red-400 text-xs mt-1 font-light">{formErrors.date}</p>
                    )}
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Collection of Interest */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#DAA520] font-mono">
                      Collection of Interest
                    </label>
                    <select
                      value={formData.collection}
                      onChange={(e) => setFormData(prev => ({ ...prev, collection: e.target.value }))}
                      className="w-full bg-[#0A192F] border border-[#DAA520]/30 focus:border-[#DAA520] focus:ring-1 focus:ring-[#DAA520] text-sm text-white px-4 py-3 outline-none deco-stepped transition-all"
                    >
                      <option value="The Moula Ali Empress Necklace">The Moula Ali Empress Necklace</option>
                      <option value="Deco-Temple Choker">Deco-Temple Choker</option>
                      <option value="Geometric Basra Pearl Strands">Geometric Basra Pearl Strands</option>
                      <option value="Bespoke Architectural Ring">Bespoke Architectural Ring</option>
                    </select>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-[#DAA520] font-mono">
                      Session Format
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full bg-[#0A192F] border border-[#DAA520]/30 focus:border-[#DAA520] focus:ring-1 focus:ring-[#DAA520] text-sm text-white px-4 py-3 outline-none deco-stepped transition-all"
                    >
                      <option value="Virtual Video Session">Virtual Video Session (Zoom/GMeet)</option>
                      <option value="In-Store Private Lounge">In-Store Private Lounge (Moula Ali)</option>
                    </select>
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#DAA520] text-[#070D1D] hover:bg-[#F4D068] active:scale-[0.98] transition-all duration-150 font-display font-black text-sm uppercase tracking-widest deco-stepped flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#DAA520]/10"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin text-[#070D1D]" size={16} />
                        <span>Verifying Calendar Blocks...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Reserve Secure Block</span>
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
      <section id="testimonials" className="py-20 lg:py-28 bg-[#0A192F] relative border-b-2 border-[#DAA520]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DAA520]">Deccan Attestations</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider">
              Customer Stories
            </h2>
            <div className="h-1 w-20 bg-[#DAA520] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Story 1 */}
            <div className="p-8 bg-[#070D1D] border border-[#DAA520]/20 deco-stepped flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-[#DAA520]/20 font-display text-4xl font-bold">01</div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#DAA520] text-[#DAA520]" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                  "Gopal Jewellers crafted a custom version of the Moula Ali Empress Necklace for my wedding. The marriage of traditional temple work with strict geometric Art Deco lines was visually stunning. I received endless compliments on the heavy weight and authenticity of the 22K antique gold."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Ananya Reddy</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Jubilee Hills, Hyderabad</p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-8 bg-[#070D1D] border border-[#DAA520]/20 deco-stepped flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-[#DAA520]/20 font-display text-4xl font-bold">02</div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#DAA520] text-[#DAA520]" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                  "I was looking for a platinum band that wasn't standard or plain. Their designers in Moula Ali suggested a stepped Art Deco profile with miniature rubies. The client-side customizer on their page is incredibly accurate to the physical pieces. The private lounge showing felt extremely secure and premium."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Aditya Shastry</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Secunderabad, Telangana</p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-8 bg-[#070D1D] border border-[#DAA520]/20 deco-stepped flex flex-col justify-between relative md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4 text-[#DAA520]/20 font-display text-4xl font-bold">03</div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#DAA520] text-[#DAA520]" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                  "A legacy jeweler that understands modern client needs. The virtual consultation was seamless—they showed me high-resolution sketch variants of the Basra Pearl Strands. Having a physical storefront on Moula Ali Main Road since the 70s gives you complete trust in the authenticity of their materials."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Dr. K. Srinivas</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Moula Ali, Hyderabad</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Store Details Section */}
      <footer className="bg-[#070D1D] text-gray-400 border-t-2 border-[#DAA520]/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Column 1: Store Intro */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#DAA520] deco-stepped flex items-center justify-center bg-[#0A192F]">
                  <span className="font-display text-base font-bold text-[#DAA520]">G</span>
                </div>
                <div>
                  <span className="font-display text-lg font-black tracking-widest uppercase block text-white">
                    Gopal Jewellers
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#DAA520] font-semibold block mt-0.5">
                    Moula Ali, Hyderabad
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed font-light">
                Dedicated to crafting architectural, high-weight gold and diamond jewelry inspired by the heritage of the Deccan. Merging vintage 1920s Art Deco with South Indian temple filigree.
              </p>
              <div className="text-xs text-gray-500 font-mono">
                © {new Date().getFullYear()} Gopal Jewellers. All rights reserved.
              </div>
            </div>

            {/* Column 2: Hours */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#DAA520]">
                Salon Hours
              </h4>
              <ul className="text-xs space-y-2.5 font-light">
                <li className="flex justify-between">
                  <span>Tuesday – Saturday:</span>
                  <span className="text-white font-medium">11:00 AM – 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday Private Lounge:</span>
                  <span className="text-white font-medium">12:00 PM – 6:00 PM</span>
                </li>
                <li className="flex justify-between text-yellow-500/80">
                  <span>Monday:</span>
                  <span>Store Closed</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Address & Contact */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#DAA520]">
                Store Details
              </h4>
              
              <ul className="space-y-3.5 text-xs font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#DAA520] shrink-0 mt-0.5" />
                  <span>Moula Ali Main Road, Hyderabad, Telangana 500040.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#DAA520] shrink-0" />
                  <a href="tel:+914027121122" className="hover:text-white transition-colors">+91 40 2712 1122</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#DAA520] shrink-0" />
                  <a href="mailto:sales@gopaljewellers.com" className="hover:text-white transition-colors">sales@gopaljewellers.com</a>
                </li>
              </ul>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DAA520]/10 border border-[#DAA520]/30 text-[9px] uppercase tracking-widest font-bold text-[#DAA520] deco-stepped">
                  <ShieldCheck size={12} />
                  <span>BIS Hallmarked • 100% Certified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

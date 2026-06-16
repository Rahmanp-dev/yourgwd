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

export default function KrishnaPearlsPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Diamond');
  const [motifStyle, setMotifStyle] = useState('Lakshmi Antique');
  const [gemWeight, setGemWeight] = useState(2); // carats

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7500,
    '18K Rose Gold': 6400,
    'Platinum': 4000
  };

  const motifWeights = {
    'Kundan Flower': 20,
    'Ganesha Medallion': 30,
    'Royal Peacock': 45,
    'Lakshmi Antique': 60
  };

  const gemstonePrices = {
    'Diamond': 90000,
    'Emerald': 50000,
    'Ruby': 40000,
    'Pearl': 12000
  };

  const calculatePrice = () => {
    const goldCost = motifWeights[motifStyle] * metalPrices[metalType];
    const gemCost = gemWeight * gemstonePrices[gemstone];
    const subtotal = goldCost + gemCost;
    const makingCharges = subtotal * 0.15; // 15% Temple design craft premium
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
        id: `KP-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  const applyCustomizerToNotes = () => {
    const estimatedPrice = calculatePrice();
    const customConfigStr = `Bespoke Temple Customizer Blueprint:\n- Metal: ${metalType}\n- Motif: ${motifStyle}\n- Gemstone: ${gemstone} (${gemWeight}ct)\n- Estimated Quote: ₹${estimatedPrice.toLocaleString('en-IN')}`;
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
    '22K Gold': '#C5A059',       // Antique Gold
    '18K Rose Gold': '#CC8E8E',  // Muted Rose Gold
    'Platinum': '#CBD5E1'        // Slate Platinum
  };

  const gemstoneColorMap = {
    'Diamond': '#E0F2FE',
    'Emerald': '#34D399',
    'Ruby': '#F87171',
    'Pearl': '#F8FAFC'
  };

  return (
    <div className="bg-[#FAF7F2] text-[#181515] font-sans selection:bg-[#630D1A]/20 selection:text-[#630D1A] antialiased min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Prata', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#C5A059]/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-24">
          <div className="flex flex-col">
            <span className="font-display text-xl lg:text-2xl font-black tracking-widest text-[#630D1A]">
              KRISHNA PEARLS
            </span>
            <span className="text-[9px] tracking-[0.25em] font-body uppercase font-bold text-[#C5A059] mt-0.5">
              & JEWELLERS • HYDERABAD
            </span>
          </div>

          <div className="hidden md:flex space-x-10 font-body text-[11px] uppercase tracking-widest font-bold text-slate-700">
            <a href="#heritage" className="hover:text-[#630D1A] transition-colors py-1">
              Our Heritage
            </a>
            <a href="#customizer" className="hover:text-[#630D1A] transition-colors py-1">
              Temple Customizer
            </a>
            <a href="#collections" className="hover:text-[#630D1A] transition-colors py-1">
              Signature Vault
            </a>
            <a href="#testimonials" className="hover:text-[#630D1A] transition-colors py-1">
              Client Stories
            </a>
          </div>

          <a 
            href="#consultation-form-section" 
            className="px-5 py-3 border-2 border-[#181515] hover:border-[#C5A059] hover:text-[#C5A059] text-[10px] uppercase tracking-widest font-black font-body transition-all active:scale-95"
          >
            Request Atelier Visit
          </a>
        </div>
      </nav>

      {/* Hero Header - Editorial Staggered Layout */}
      <header className="relative pt-12 pb-24 overflow-hidden border-b-2 border-[#C5A059]/20">
        {/* Ornate Side Lines representing Temple Pillars */}
        <div className="absolute top-0 left-12 w-[1px] h-full bg-[#C5A059]/10 hidden lg:block"></div>
        <div className="absolute top-0 left-16 w-[1px] h-full bg-[#C5A059]/10 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Title Column */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[#C5A059] text-[#C5A059] text-[9px] font-body uppercase tracking-[0.2em] w-fit font-bold">
                <Award size={10} className="text-[#630D1A]" />
                <span>Award-winning Temple Gold & Fine South Sea Pearls</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-display leading-[1.05] tracking-tight text-[#181515] font-extrabold">
                Sculpting <br />
                <span className="italic font-light text-[#630D1A] drop-shadow-sm">Sacred Gold</span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-500 font-body leading-relaxed max-w-xl">
                Krishna Pearls & Jewellers blends the ancient grandeur of South Indian temple motifs with the refined elegance of certified South Sea pearls. Located near Jubilee Hills Metro Station, our flagship store features masterfully carved Nakshi collections designed to stand as sacred heirlooms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 font-body text-[10px] uppercase tracking-widest font-black">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#181515] hover:bg-[#630D1A] text-white transition-all active:scale-95 shadow-lg"
                >
                  Enter Temple Atelier
                  <ArrowRight size={12} className="ml-2 text-[#C5A059]" />
                </a>
                <a 
                  href="#collections" 
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-[#C5A059] hover:bg-[#FAF2DF] text-[#181515] transition-all active:scale-95"
                >
                  Browse Sacred Vault
                </a>
              </div>
            </div>

            {/* Asymmetrical Double Border Box Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Offset Gold Backdrop */}
                <div className="absolute -inset-4 border-2 border-[#C5A059]/30 translate-x-3 translate-y-3 pointer-events-none"></div>
                <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[440px] border-2 border-[#181515] p-5 bg-[#FAF7F2] shadow-xl">
                  <div className="w-full h-full border border-dashed border-[#C5A059] flex flex-col justify-between p-6">
                    <div className="text-[9px] tracking-widest uppercase font-body font-black text-slate-400">
                      Showroom Concept #910 / Temple Haram
                    </div>

                    {/* Elegant Temple Gold Medallion SVG */}
                    <div className="w-full flex justify-center my-auto">
                      <svg className="w-44 h-44" viewBox="0 0 120 120">
                        {/* Antique gold circles */}
                        <circle cx="60" cy="55" r="38" fill="none" stroke="#C5A059" strokeWidth="1.25" />
                        <circle cx="60" cy="55" r="28" fill="none" stroke="#630D1A" strokeWidth="0.75" strokeDasharray="3 3" />
                        
                        {/* Hanging ruby bead vectors */}
                        {[...Array(8)].map((_, i) => {
                          const angle = 30 + (i * 120) / 7; // arc at the bottom half
                          const rad = (angle * Math.PI) / 180;
                          const r = 38;
                          const x = 60 + r * Math.cos(rad);
                          const y = 55 + r * Math.sin(rad);
                          return (
                            <g key={i}>
                              <line x1={60 + 35 * Math.cos(rad)} y1={55 + 35 * Math.sin(rad)} x2={x} y2={y} stroke="#C5A059" strokeWidth="0.75" />
                              <circle cx={x} cy={y} r="2.5" fill="#F87171" stroke="#C5A059" strokeWidth="0.25" />
                            </g>
                          );
                        })}

                        {/* Central Lakshmi Motif box representation */}
                        <rect x="52" y="47" width="16" height="16" rx="2" fill="#FAF2DF" stroke="#C5A059" strokeWidth="1" />
                        {/* Core Diamond */}
                        <polygon points="60,49 65,55 60,61 55,55" fill="#E0F2FE" />
                      </svg>
                    </div>

                    <div className="space-y-1 font-body">
                      <span className="font-display text-sm text-[#181515] block font-bold leading-tight">
                        Antique Guttapusalu Medallion
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-[#C5A059] block font-black">
                        Jubilee Hills Limited Release
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage - Asymmetrical Columns */}
      <section id="heritage" className="py-24 bg-[#FAF2DF]/30 border-b-2 border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.25em] font-body">Atelier Philosophy</span>
              <h2 className="text-3xl font-display text-[#181515] mt-3 font-bold leading-tight">
                Preserving Sacred Ornaments
              </h2>
              <div className="w-16 h-1 bg-[#630D1A] mt-6"></div>
            </div>
            
            <div className="md:col-span-7 space-y-6 font-body text-xs text-slate-600 leading-relaxed">
              <p>
                Krishna Pearls & Jewellers is renowned for reviving the lost art of Nakshi gold carving. Stripping away modern mass-production techniques, we work exclusively with hereditary artisans in South India who hand-emboss motifs onto pure gold sheets.
              </p>
              <p>
                Our showroom at Jubilee Hills Checkpost serves as both a gallery and design workspace. Here, customizers pair temple deities, royal peacocks, and floral gold clusters with authenticated South Sea and Basra pearls to deliver designs of timeless cultural prestige.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Customizer */}
      <section id="customizer" className="py-24 border-b-2 border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.25em] font-body">Bespoke Configurator</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#181515] mt-3 font-bold">
              The Temple Gold Haram Designer
            </h2>
            <div className="w-20 h-[1.5px] bg-[#630D1A] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Interact with classical temple layouts, select metal types and gemstones, and calculate instantaneous pricing for your custom heirloom piece.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Visual Preview */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-36">
              <div className="p-8 border-2 border-[#181515] bg-[#FAF2DF]/40 flex flex-col items-center justify-center relative shadow-sm rounded-none min-h-[380px]">
                <div className="absolute top-4 left-4 text-[9px] tracking-widest uppercase text-slate-400 font-body font-black">
                  Temple Blueprint
                </div>

                {/* SVG Visualizer that updates based on selection */}
                <div className="w-52 h-52 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <defs>
                      <radialGradient id="suhaniGem" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={gemstoneColorMap[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Geometrical structure background lines */}
                    <line x1="20" y1="60" x2="100" y2="60" stroke="#C5A059" strokeWidth="0.25" strokeDasharray="3 3" />
                    <line x1="60" y1="20" x2="60" y2="100" stroke="#C5A059" strokeWidth="0.25" strokeDasharray="3 3" />

                    {/* Gold Haram arches */}
                    <path
                      d="M 30,35 L 60,15 L 90,35"
                      fill="none"
                      stroke={metalColorMap[metalType]}
                      strokeWidth="2.5"
                    />

                    <path
                      d="M 40,50 L 60,85 L 80,50 Z"
                      fill="none"
                      stroke={metalColorMap[metalType]}
                      strokeWidth="1.5"
                    />

                    {/* Gemstones placed at corners based on gem weight */}
                    {[...Array(Math.min(gemWeight + 2, 6))].map((_, idx) => {
                      const coords = [
                        { x: 60, y: 15 },
                        { x: 30, y: 35 },
                        { x: 90, y: 35 },
                        { x: 60, y: 85 },
                        { x: 40, y: 50 },
                        { x: 80, y: 50 }
                      ];
                      const pos = coords[idx % coords.length];
                      return (
                        <circle
                          key={idx}
                          cx={pos.x}
                          cy={pos.y}
                          r="4"
                          fill="url(#suhaniGem)"
                          stroke={metalColorMap[metalType]}
                          strokeWidth="0.5"
                        />
                      );
                    })}

                    {/* Inner core temple structure representing motif style */}
                    <circle cx="60" cy="48" r="8" fill="none" stroke={metalColorMap[metalType]} strokeWidth="1" />
                    <circle cx="60" cy="48" r="4" fill="url(#suhaniGem)" />
                  </svg>
                </div>

                <div className="text-center font-body mt-4">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">sacred blueprint ID</h4>
                  <p className="text-sm font-display text-[#181515] mt-0.5 font-bold">
                    {metalType} {motifStyle} with {gemstone}
                  </p>
                </div>
              </div>

              <button 
                type="button"
                onClick={applyCustomizerToNotes}
                className="w-full text-center py-4 bg-[#181515] hover:bg-[#630D1A] text-white font-body text-[10px] uppercase tracking-[0.2em] font-black transition-all active:scale-95 shadow-sm"
              >
                Apply Customization to Consultation Form
              </button>
            </div>

            {/* Customizer Controls Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 border-2 border-[#C5A059]/40 bg-white shadow-md rounded-none space-y-8 font-body text-xs">
              {/* Metal Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                  1. Precious Metal Base
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      onClick={() => setMetalType(metal)}
                      className={`py-3 px-4 border-2 text-center text-[10px] uppercase tracking-[0.15em] font-bold transition-all active:scale-95 ${
                        metalType === metal
                          ? 'border-[#181515] bg-[#181515] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-[#181515]'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motif Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                  2. Sacred Motif Style
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['Kundan Flower', 'Ganesha Medallion', 'Royal Peacock', 'Lakshmi Antique'].map((motif) => (
                    <button
                      key={motif}
                      type="button"
                      onClick={() => setMotifStyle(motif)}
                      className={`py-3 px-1 border-2 text-center text-[9px] uppercase tracking-[0.1em] font-bold transition-all active:scale-95 ${
                        motifStyle === motif
                          ? 'border-[#181515] bg-[#181515] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-[#181515]'
                      }`}
                    >
                      {motif.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gemstone Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                  3. Primary Gemstone
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((gem) => (
                    <button
                      key={gem}
                      type="button"
                      onClick={() => setGemstone(gem)}
                      className={`py-3 px-2 border-2 text-center text-[10px] uppercase tracking-[0.15em] font-bold transition-all active:scale-95 ${
                        gemstone === gem
                          ? 'border-[#181515] bg-[#181515] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-[#181515]'
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
                    4. Gemstone Volume (Carats)
                  </label>
                  <span className="font-mono font-bold text-[#181515]">{gemWeight} Ct</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={gemWeight}
                  onChange={(e) => setGemWeight(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 accent-[#181515] cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                  <span>1 Ct</span>
                  <span>5 Ct</span>
                  <span>10 Ct</span>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="pt-6 border-t-2 border-[#C5A059]/30 bg-[#FAF7F2]/50 p-5 border shadow-inner">
                <div className="space-y-2 text-[11px] text-slate-500 font-semibold">
                  <div className="flex justify-between">
                    <span>Base Gold Cost ({motifStyle} - {motifWeights[motifStyle]}g):</span>
                    <span className="font-mono text-slate-800">₹{(motifWeights[motifStyle] * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gemstone Inclusions ({gemstone} - {gemWeight}ct):</span>
                    <span className="font-mono text-slate-800">₹{(gemWeight * gemstonePrices[gemstone]).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Temple Craft Premium & Making (15%):</span>
                    <span className="font-mono text-slate-800">
                      ₹{Math.round((motifWeights[motifStyle] * metalPrices[metalType] + gemWeight * gemstonePrices[gemstone]) * 0.15).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="h-[1.5px] bg-slate-200 my-3"></div>
                  <div className="flex justify-between items-end text-xs text-[#181515] font-black">
                    <span className="uppercase tracking-[0.15em]">Sacred Estimation:</span>
                    <span className="font-mono text-base text-[#630D1A]">
                      ₹{calculatePrice().toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-24 bg-[#FAF2DF]/20 border-b-2 border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.25em] font-body">The Sacred Vault</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#181515] mt-3 font-bold">
              Signature Temple Collections
            </h2>
            <div className="w-20 h-[1.5px] bg-[#630D1A] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Explore our highly coveted, hand-sculpted temple and polki gold masterpieces.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Traditional Guttapusalu Haram",
                desc: "An ornate 22K gold necklace completely lined with bunched freshwater pearls and rubies representing ancient deities.",
                price: "₹3,95,000",
                material: "22K Gold, Pearls, Ruby"
              },
              {
                title: "Royal Polki Temple Choker",
                desc: "Uncut polki diamonds set in a heavy gold frame, accented by hand-carved Ganesha medallions and emerald drops.",
                price: "₹5,20,000",
                material: "22K Gold, Polki, Emerald"
              },
              {
                title: "Antique Kasula String Haar",
                desc: "Layered gold coins stamped with Laxmi iconography, connected by fine basra pearls.",
                price: "₹2,65,000",
                material: "22K Gold, Basra Pearls"
              },
              {
                title: "Floral Kundan Pearl Kada",
                desc: "Intricately detailed thick openable bangle studded with flat-cut kundan crystals and pearls.",
                price: "₹1,85,000",
                material: "22K Gold, Kundan, Pearls"
              }
            ].map((art, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-200 hover:border-[#C5A059] p-6 flex flex-col justify-between hover:shadow-md transition-all rounded-none group">
                <div>
                  <div className="w-full h-44 bg-[#FAF2DF]/30 mb-6 flex items-center justify-center relative border border-dashed border-[#C5A059]/30">
                    <Gem size={28} className="text-[#C5A059] group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-[#C5A059]/30 text-[8px] font-body uppercase tracking-widest bg-white text-[#181515] font-black">
                      Sacred Craft
                    </div>
                  </div>
                  <span className="text-[9px] font-body uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-2">
                    {art.material}
                  </span>
                  <h3 className="font-display text-sm text-[#181515] mb-3 font-semibold group-hover:text-[#630D1A] transition-colors leading-tight">
                    {art.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-body leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 font-body">
                  <span className="font-mono text-xs font-black text-[#181515]">{art.price}</span>
                  <button 
                    type="button"
                    onClick={() => {
                      setForm(prev => ({
                        ...prev,
                        notes: `Inquiry: ${art.title} (${art.price})`
                      }));
                      const formElement = document.getElementById('consultation-form-section');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-[#181515] hover:text-[#C5A059] transition-colors"
                  >
                    Inquire <ChevronRight size={10} className="ml-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Request */}
      <section id="consultation-form-section" className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.25em] font-body">The Atelier</span>
            <h2 className="text-3xl font-display text-[#181515] mt-3 font-bold">
              Virtual Design Consultation
            </h2>
            <div className="w-16 h-1 bg-[#630D1A] mx-auto mt-2"></div>
            <p className="text-slate-500 text-xs font-body leading-relaxed">
              Connect virtually with Krishna Pearls&apos; master designers or schedule a private showing at our Jubilee Hills showroom.
            </p>
          </div>

          <div className="p-8 md:p-10 border-2 border-[#C5A059] bg-[#FAF7F2] shadow-sm rounded-none">
            {submittedData ? (
              <div className="text-center py-6 space-y-6 font-body">
                <div className="w-12 h-12 border-2 border-green-600 text-green-600 rounded-none flex items-center justify-center mx-auto">
                  <Check size={24} className="stroke-[2.5]" />
                </div>
                <h3 className="font-display text-xl text-[#181515] font-bold">Session Reserved</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your private viewing session request has been registered. An atelier representative will coordinate within 1 hour.
                </p>
                <div className="bg-white border-2 border-[#C5A059]/30 p-5 rounded-none max-w-xs mx-auto text-left text-[10px] space-y-2 shadow-sm">
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-widest block text-[8px]">Reference Number:</span>
                    <span className="font-mono font-bold text-slate-800 text-xs">{submittedData.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-widest block text-[8px]">Preferred Date:</span>
                    <span className="font-bold text-slate-700">{submittedData.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-widest block text-[8px]">Contact Info:</span>
                    <span className="text-slate-700">{submittedData.phone} | {submittedData.email}</span>
                  </div>
                  {submittedData.notes && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-slate-400 font-bold uppercase tracking-widest block text-[8px]">Atelier Notes:</span>
                      <pre className="text-[9px] text-slate-600 whitespace-pre-wrap font-sans mt-1 bg-slate-50 p-2 border border-slate-100">
                        {submittedData.notes}
                      </pre>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="px-5 py-3 border-2 border-[#181515] text-[#181515] hover:bg-[#FAF2DF] uppercase text-[9px] tracking-widest font-black font-body transition-all active:scale-95"
                >
                  Schedule Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-body text-[10px] tracking-wide">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-white border-2 ${
                        errors.name ? 'border-red-500' : 'border-slate-200 focus:border-[#181515]'
                      } rounded-none focus:outline-none transition-all`}
                      placeholder="e.g. Pranati Reddy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-600 mt-1 text-[9px] font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">MOBILE NUMBER *</label>
                    <input
                      type="tel"
                      className={`w-full p-3 bg-white border-2 ${
                        errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-[#181515]'
                      } rounded-none focus:outline-none transition-all`}
                      placeholder="e.g. +91 93902 60000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-600 mt-1 text-[9px] font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-3 bg-white border-2 ${
                        errors.email ? 'border-red-500' : 'border-slate-200 focus:border-[#181515]'
                      } rounded-none focus:outline-none transition-all`}
                      placeholder="e.g. support@krishnapearls.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-600 mt-1 text-[9px] font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">PREFERRED DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-3 bg-white border-2 ${
                        errors.date ? 'border-red-500' : 'border-slate-200 focus:border-[#181515]'
                      } rounded-none focus:outline-none transition-all text-slate-600`}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p className="text-red-600 mt-1 text-[9px] font-semibold">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">SPECIAL INSTRUCTIONS</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 bg-white border-2 border-slate-200 focus:border-[#181515] rounded-none focus:outline-none transition-all resize-none text-slate-600"
                    placeholder="Describe specific gold weight, diamond quality preferences, or style references for Laxmi / Ganesha figurines..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#181515] hover:bg-[#630D1A] text-white font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={12} className="animate-spin" />
                      Contacting Atelier Representative...
                    </>
                  ) : (
                    <>
                      <span>Secure Private Consultation Window</span>
                      <ArrowRight size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section id="testimonials" className="py-24 bg-[#FAF2DF]/20 border-t-2 border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.25em] font-body">Collector Diaries</span>
            <h2 className="text-3xl lg:text-4xl font-display text-[#181515] mt-3 font-bold">
              Jubilee Hills Collector Stories
            </h2>
            <div className="w-20 h-[1.5px] bg-[#630D1A] mx-auto mt-2"></div>
            <p className="text-xs text-slate-500 font-body leading-relaxed">
              Discover real-looking customer reviews from fine jewelry collectors in Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-body">
            {[
              {
                text: "The traditional gold Kasula haram I purchased at Krishna Pearls is a masterpiece. The heavy gold Laxmi motifs have absolute depth. Their design team matched certified South Sea pearls perfectly.",
                author: "Kiranmayi Reddy",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "The customizer tool gave me a baseline idea of gold weight and diamond price, and the showroom staff at Jubilee Hills Road 36 matched it down to a rupee. Excellent service and transparency.",
                author: "Sandhya Naidu",
                location: "Madhapur, Hyderabad",
                rating: 5
              },
              {
                text: "Their virtual consultation was highly responsive. They showcased certified Guttapusalu pieces over video. The final piece was securely delivered to my Hitech City address.",
                author: "Meera Sen",
                location: "Hitech City, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border-2 border-slate-200 bg-white flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={10} className="text-[#C5A059] fill-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FAF2DF] border border-[#C5A059]/30 flex items-center justify-center text-[10px] font-display font-black text-[#181515]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#181515]">{review.author}</h4>
                    <span className="text-[9px] text-slate-400 block">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF2DF]/40 text-[#181515] py-16 border-t-2 border-[#C5A059]/40 font-body text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-display text-base uppercase tracking-[0.2em] font-bold text-[#630D1A]">
              KRISHNA PEARLS
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Temple Nakshi gold collections, certified Basra seed strings, and luxury diamond ornaments. Built by hand in Jubilee Hills, Hyderabad.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-[#630D1A]">
              Showroom Location
            </h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span>Road No. 36, Near Metro Station, Jubilee Hills, Hyderabad, Telangana 500033.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-[#C5A059] shrink-0" />
                <span className="font-mono">+91 93902 60000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-[#C5A059] shrink-0" />
                <span>support@krishnapearls.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-[#630D1A]">
              Showroom Hours
            </h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex justify-between max-w-xs">
                <span>Monday – Saturday:</span>
                <span>10:30 AM – 8:30 PM</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span>Sunday:</span>
                <span className="text-[#630D1A] font-bold">11:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#C5A059]/20 text-center text-[9px] text-slate-400 tracking-[0.25em]">
          <p>© {new Date().getFullYear()} KRISHNA PEARLS & JEWELLERS. DESIGN REGISTERED UNDER INDIAN PATENT AND DESIGNS ACT. ESTIMATES Blueprints DO NOT CONSTITUTE A FORMAL SHOWROOM CONTRACT.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import DermedClinicPage from '../dermed-clinic-tolichowki/page';
import AfaqClinicPage from '../afaq-laser-cosmetic-clinic/page';
import RgrInteriorsPage from '../rgr-interiors-banjara-hills/page';
import InfiniteArchitectureStudioPage from '../infinite-architecture-studio-banjara-hills/page';
import RaaveraInteriorDesignerPage from '../raavera-interior-designer-banjara-hills/page';
import DesignEdgePage from '../design-edge-banjara-hills/page';
import CivilizationArchitectsPage from '../civilization-architects-banjara-hills/page';
import SaandhyaArchitectsPage from '../saandhya-architects-banjara-hills/page';
import CaliforniaDreamworksPage from '../california-dreamworks-banjara-hills/page';
import PerceptInteriorSolutionsPage from '../percept-interior-solutions-banjara-hills/page';
import AamirHameedaDesignStudioPage from '../aamir-hameeda-design-studio-banjara-hills/page';
import SahaniInteriorsPage from '../sahani-interiors-banjara-hills/page';

import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Scissors, Gem, Crown, 
  Sliders, MessageSquare, Heart, Share2, Instagram, ArrowRight,
  Shield, Check, ArrowLeft, Video, Calendar, UserCircle, Activity,
  HeartPulse, CheckCircle2, ChevronDown, Eye, Filter, ShieldCheck,
  ShoppingBag, Menu, X
} from 'lucide-react';

// ==========================================
// 1. SRI JAGDAMBA PEARLS PAGE (MG Road)
// ==========================================

function SriJagdambaPearlsPage() {
  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Pearl');
  const [metalWeight, setMetalWeight] = useState(24); // in grams
  const [gemCount, setGemCount] = useState(12); // carats/units

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7200,
    '18K Rose Gold': 6100,
    'Platinum': 3800
  };

  const gemstonePrices = {
    'Diamond': 85000,
    'Emerald': 45000,
    'Ruby': 35000,
    'Pearl': 12000
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
        id: `SJP-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Theme Constants (Sri Jagdamba Pearls: Symmetrical Luxury, Cream background, gold/bronze highlights)
  const bgMain = 'bg-[#FDFBF7]';
  const textDark = 'text-[#2A2421]';
  const borderBronze = 'border-[#C5A880]';
  const bgCard = 'bg-[#FAF6EE]';
  
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
    'Pearl': '#F3F4F6'
  };

  return (
    <div className={`min-h-screen ${bgMain} ${textDark} font-sans selection:bg-[#C5A880]/20 antialiased`}>
      {/* Import Serif and Sans pair fonts specifically for Jagdamba */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-serif-jagdamba { font-family: 'Prata', serif; }
        .font-sans-jagdamba { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full backdrop-blur-md bg-[#FDFBF7]/90 border-b ${borderBronze}/30`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col items-center mx-auto md:mx-0">
              <span className="font-serif-jagdamba text-2xl lg:text-3xl tracking-widest uppercase text-[#8C6239] transition-all">
                Sri Jagdamba Pearls
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-light text-slate-500 font-sans-jagdamba mt-1">
                Secunderabad Legacy since 1975
              </span>
            </div>
            <div className="hidden md:flex space-x-10 font-sans-jagdamba text-xs uppercase tracking-widest font-medium">
              <a href="#heritage" className="hover:text-[#8C6239] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8C6239] hover:after:w-full after:transition-all">Heritage</a>
              <a href="#customizer" className="hover:text-[#8C6239] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8C6239] hover:after:w-full after:transition-all">Bespoke Customizer</a>
              <a href="#collections" className="hover:text-[#8C6239] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8C6239] hover:after:w-full after:transition-all">Collections</a>
              <a href="#consultation" className="hover:text-[#8C6239] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8C6239] hover:after:w-full after:transition-all">Consultation</a>
            </div>
            <div className="hidden md:block">
              <a 
                href="#consultation" 
                className={`inline-flex items-center px-6 py-3 border border-[#8C6239] text-[#8C6239] hover:bg-[#8C6239] hover:text-white transition-all text-xs uppercase tracking-widest font-semibold font-sans-jagdamba active:scale-95`}
              >
                Book Private Visit
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative pt-12 pb-24 overflow-hidden border-b border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] border border-[#C5A880]/30 text-[#8C6239] text-xs font-sans-jagdamba tracking-wider w-fit mx-auto md:mx-0">
                <Crown size={12} />
                <span>Nizami & Royal Heritage jeweler</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif-jagdamba leading-tight text-[#593E1A]">
                The Royal Pearl <br />
                <span className="italic font-light opacity-90 text-[#8C6239]">Legacy of Hyderabad</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-600 font-sans-jagdamba leading-relaxed max-w-lg mx-auto md:mx-0">
                For over five decades, Sri Jagdamba Pearls has stood as a beacon of luxury on MG Road. We bring you the finest hand-selected South Sea pearls, classical Nizami sets, and modern heirloom jewelry designed to capture the elegance of royalty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#8C6239] hover:bg-[#593E1A] text-white font-sans-jagdamba text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 shadow-md"
                >
                  Design Bespoke Pearl Art
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#collections" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#C5A880] hover:bg-[#FAF6EE] text-[#8C6239] font-sans-jagdamba text-xs uppercase tracking-widest font-semibold transition-all active:scale-95"
                >
                  View Royal Collections
                </a>
              </div>
            </div>

            {/* Symmetrical Classical Frame Visual */}
            <div className="relative flex justify-center">
              <div className={`relative w-[340px] h-[440px] md:w-[400px] md:h-[500px] border ${borderBronze} p-3 bg-white shadow-xl rounded-sm`}>
                <div className={`w-full h-full border ${borderBronze} flex flex-col justify-between items-center p-8 relative overflow-hidden bg-[#FAF6EE]`}>
                  {/* Decorative corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#8C6239]"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#8C6239]"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#8C6239]"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#8C6239]"></div>
                  
                  <div className="w-full flex justify-between items-center text-xs text-slate-400 font-sans-jagdamba tracking-widest uppercase">
                    <span>Authentic</span>
                    <span>1975</span>
                  </div>

                  {/* Elegant Central Pearl Graphic */}
                  <div className="my-auto flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      {/* Stylized circle of pearls */}
                      <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="3 3" />
                        {[...Array(16)].map((_, i) => {
                          const angle = (i * 360) / 16;
                          const r = 38;
                          const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                          const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                          return (
                            <circle key={i} cx={x} cy={y} r="3" fill="url(#pearlGradient)" stroke="#E5E4E2" strokeWidth="0.25" />
                          );
                        })}
                        <defs>
                          <radialGradient id="pearlGradient" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="70%" stopColor="#F3F4F6" />
                            <stop offset="100%" stopColor="#D1D5DB" />
                          </radialGradient>
                        </defs>
                      </svg>
                      {/* Center Ruby Pendant */}
                      <div className="absolute w-12 h-12 rounded-full border border-[#C5A880] flex items-center justify-center bg-white shadow-md">
                        <Gem size={22} className="text-[#EF4444] animate-pulse" />
                      </div>
                    </div>
                    <span className="font-serif-jagdamba text-lg text-[#593E1A] mt-6 tracking-wide text-center">Nizami Pearl Haar</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C6239] font-sans-jagdamba mt-1">Limited Royal Edition</span>
                  </div>

                  <div className="w-full flex justify-center gap-1.5 items-center">
                    <Star size={10} className="text-[#C5A880] fill-[#C5A880]" />
                    <Star size={10} className="text-[#C5A880] fill-[#C5A880]" />
                    <Star size={10} className="text-[#C5A880] fill-[#C5A880]" />
                    <Star size={10} className="text-[#C5A880] fill-[#C5A880]" />
                    <Star size={10} className="text-[#C5A880] fill-[#C5A880]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 border-b border-[#C5A880]/20 bg-[#FAF6EE]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-[0.25em] font-sans-jagdamba">Our Heritage</span>
            <h2 className="text-3xl lg:text-4xl font-serif-jagdamba text-[#593E1A] mt-3">Sustaining the Craft of Nizami Adornment</h2>
            <div className="w-16 h-[1px] bg-[#8C6239] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full border border-[#C5A880] flex items-center justify-center text-[#8C6239]">
                <Award size={24} />
              </div>
              <h3 className="font-serif-jagdamba text-xl text-[#593E1A]">50 Years of trust</h3>
              <p className="text-xs text-slate-500 font-sans-jagdamba leading-relaxed">
                Established on the historic MG Road of Secunderabad, we have remained Hyderabad&apos;s primary destination for pure basra and south sea pearls.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full border border-[#C5A880] flex items-center justify-center text-[#8C6239]">
                <Crown size={24} />
              </div>
              <h3 className="font-serif-jagdamba text-xl text-[#593E1A]">Nizami Aesthetics</h3>
              <p className="text-xs text-slate-500 font-sans-jagdamba leading-relaxed">
                Our designs draw inspiration from the regal vaults of the Nizams, pairing pure pearls with un-cut diamonds (Polki) and fine gold work.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full border border-[#C5A880] flex items-center justify-center text-[#8C6239]">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif-jagdamba text-xl text-[#593E1A]">Unmatched Purity</h3>
              <p className="text-xs text-slate-500 font-sans-jagdamba leading-relaxed">
                Every purchase is accompanied by official laboratory certifications of pearl authenticity, ensuring value that endures for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-24 border-b border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-[0.25em] font-sans-jagdamba">Bespoke Workshop</span>
            <h2 className="text-3xl lg:text-4xl font-serif-jagdamba text-[#593E1A] mt-3">Interactive Pearl & Gold Customizer</h2>
            <p className="text-slate-500 text-xs font-sans-jagdamba mt-2">Design your signature piece, dynamically calculate weights, choose metals and gemstones, and request a personalized quote.</p>
            <div className="w-16 h-[1px] bg-[#8C6239] mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Customizer Configuration Panel */}
            <div className={`lg:col-span-7 p-8 md:p-10 border ${borderBronze} bg-[#FAF6EE] shadow-sm rounded-sm`}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#C5A880]/30">
                <Sliders className="text-[#8C6239]" size={18} />
                <h3 className="font-serif-jagdamba text-xl text-[#593E1A]">Customizer Controls</h3>
              </div>

              <div className="space-y-8 font-sans-jagdamba text-sm">
                {/* Metal Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-600 mb-4">
                    1. Choose Precious Metal
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                      <button
                        key={metal}
                        onClick={() => setMetalType(metal)}
                        className={`py-3 px-4 text-center border text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 ${
                          metalType === metal
                            ? 'border-[#8C6239] bg-[#8C6239] text-white shadow-sm'
                            : 'border-[#C5A880]/40 bg-white text-slate-700 hover:border-[#8C6239]'
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
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-600">
                      2. Metal Weight (Grams)
                    </label>
                    <span className="font-mono font-bold text-[#8C6239]">{metalWeight}g</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={metalWeight}
                    onChange={(e) => setMetalWeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#8C6239] cursor-pointer rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>10g</span>
                    <span>45g</span>
                    <span>80g</span>
                  </div>
                </div>

                {/* Gemstone Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-600 mb-4">
                    3. Choose Primary Gemstone
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {['Pearl', 'Diamond', 'Emerald', 'Ruby'].map((gem) => (
                      <button
                        key={gem}
                        onClick={() => setGemstone(gem)}
                        className={`py-3 px-2 text-center border text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 ${
                          gemstone === gem
                            ? 'border-[#8C6239] bg-[#8C6239] text-white shadow-sm'
                            : 'border-[#C5A880]/40 bg-white text-slate-700 hover:border-[#8C6239]'
                        }`}
                      >
                        {gem}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gemstone Quantity/Carats Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-600">
                      4. Gemstone Volume ({gemstone === 'Pearl' ? 'Units' : 'Carats'})
                    </label>
                    <span className="font-mono font-bold text-[#8C6239]">
                      {gemCount} {gemstone === 'Pearl' ? 'Pearls' : 'Ct'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="40"
                    value={gemCount}
                    onChange={(e) => setGemCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#8C6239] cursor-pointer rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>2</span>
                    <span>21</span>
                    <span>40</span>
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className="pt-6 mt-6 border-t border-[#C5A880]/30 bg-white p-5 border shadow-sm">
                  <div className="space-y-2 text-xs text-slate-500 font-medium">
                    <div className="flex justify-between">
                      <span>Metal base ({metalType} @ ₹{metalPrices[metalType]}/g):</span>
                      <span className="font-mono text-slate-700">₹{(metalWeight * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gemstone base ({gemstone} @ ₹{gemstonePrices[gemstone]}/unit):</span>
                      <span className="font-mono text-slate-700">₹{(gemCount * gemstonePrices[gemstone]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Making Charges (12%):</span>
                      <span className="font-mono text-slate-700">
                        ₹{Math.round((metalWeight * metalPrices[metalType] + gemCount * gemstonePrices[gemstone]) * 0.12).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="h-[1px] bg-slate-100 my-2"></div>
                    <div className="flex justify-between items-end text-sm text-[#593E1A] font-bold">
                      <span className="uppercase tracking-wider">Estimated Price (Excl. Tax):</span>
                      <span className="font-mono text-lg text-[#8C6239]">
                        ₹{calculatePrice().toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Realtime Mock Visual */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-36">
              <div className={`p-8 border ${borderBronze} bg-white flex flex-col items-center justify-center relative shadow-md rounded-sm min-h-[360px]`}>
                <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-slate-400 font-sans-jagdamba">
                  Dynamic Mockup
                </div>

                {/* SVG Visualizer that updates based on selection */}
                <div className="w-56 h-56 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="necklaceMetal" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="80%" stopColor={metalColors[metalType]} />
                        <stop offset="100%" stopColor="#4A3B32" />
                      </radialGradient>
                      <radialGradient id="gemGradient" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={gemColors[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Chain/Base representation */}
                    <path
                      d="M 25,25 A 30,35 0 0,0 75,25"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Pearls lining the chain if Pearl selected */}
                    {gemstone === 'Pearl' && [...Array(Math.min(gemCount, 16))].map((_, idx) => {
                      const pct = idx / (Math.min(gemCount, 16) - 1);
                      const angle = Math.PI + pct * Math.PI; // from 180 to 360 degrees
                      const rX = 25;
                      const rY = 32;
                      const x = 50 + rX * Math.cos(angle);
                      const y = 25 - rY * Math.sin(angle);
                      return (
                        <circle
                          key={idx}
                          cx={x}
                          cy={y}
                          r="2"
                          fill="url(#gemGradient)"
                          stroke="#E5E4E2"
                          strokeWidth="0.2"
                        />
                      );
                    })}

                    {/* Symmetrical Gemstones hanging if not Pearl */}
                    {gemstone !== 'Pearl' && [...Array(Math.min(gemCount, 8))].map((_, idx) => {
                      const pct = (idx + 1) / (Math.min(gemCount, 8) + 1);
                      const angle = Math.PI + pct * Math.PI;
                      const rX = 25;
                      const rY = 32;
                      const x = 50 + rX * Math.cos(angle);
                      const y = 25 - rY * Math.sin(angle);
                      return (
                        <polygon
                          key={idx}
                          points={`${x},${y-1.5} ${x+1.5},${y} ${x},${y+1.5} ${x-1.5},${y}`}
                          fill="url(#gemGradient)"
                          stroke={metalColors[metalType]}
                          strokeWidth="0.2"
                        />
                      );
                    })}

                    {/* Symmetrical central luxury pendant structure */}
                    <line x1="50" y1="58" x2="50" y2="70" stroke={metalColors[metalType]} strokeWidth="1.5" />
                    <circle cx="50" cy="70" r="6" fill="none" stroke={metalColors[metalType]} strokeWidth="1" />
                    <path
                      d="M 44,70 C 44,76 56,76 56,70"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="1"
                    />

                    {/* Centered Gemstone */}
                    <circle cx="50" cy="70" r="4" fill="url(#gemGradient)" stroke="#FFFFFF" strokeWidth="0.3" />
                  </svg>
                </div>

                <div className="text-center font-sans-jagdamba mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Selected Blueprint</h4>
                  <p className="text-sm font-serif-jagdamba text-[#593E1A] mt-1 font-bold">
                    Custom {metalType} {gemstone} Set
                  </p>
                </div>
              </div>

              <a 
                href="#consultation" 
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    notes: `Bespoke Customizer Order Request: Custom ${metalType} set with ${gemCount} ${gemstone}(s), weighing approx ${metalWeight}g. Estimate: ₹${calculatePrice().toLocaleString('en-IN')}`
                  }));
                }}
                className="w-full text-center py-4 bg-[#8C6239] hover:bg-[#593E1A] text-white font-sans-jagdamba text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 shadow-md"
              >
                Apply Blueprint to Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-24 border-b border-[#C5A880]/20 bg-[#FAF6EE]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-[0.25em] font-sans-jagdamba">The Vault</span>
            <h2 className="text-3xl lg:text-4xl font-serif-jagdamba text-[#593E1A] mt-3">Signature Royal Collections</h2>
            <div className="w-16 h-[1px] bg-[#8C6239] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Classic Nizami Pearl Choker",
                desc: "Triple strand basra pearls with a stunning raw gold and ruby-encrusted center plate.",
                price: "₹1,85,000",
                spec: "Basra Pearls, 22K Gold, Ruby"
              },
              {
                title: "Royal South Sea Pearl String",
                desc: "An elegant, heavy string of rare gold-tinged South Sea pearls with a platinum clasp.",
                price: "₹2,45,000",
                spec: "South Sea Pearls, Platinum Clasp"
              },
              {
                title: "Secunderabad Temple Necklace",
                desc: "Heritage temple motif crafted in dense 22K gold, lined with premium freshwater pearls.",
                price: "₹3,95,000",
                spec: "22K Gold, Freshwater Pearls"
              },
              {
                title: "Nizam Emerald & Pearl Rani Haar",
                desc: "Exquisite long layered haar featuring large emerald beads coupled with tiny seed pearl bunches.",
                price: "₹5,20,000",
                spec: "22K Gold, Emerald, Basra Seed Pearls"
              }
            ].map((col, idx) => (
              <div key={idx} className={`bg-white border ${borderBronze} p-6 flex flex-col justify-between hover:shadow-lg transition-all rounded-sm hover:-translate-y-1 group`}>
                <div>
                  <div className="w-full h-48 bg-[#FAF6EE] border border-[#C5A880]/20 mb-6 flex items-center justify-center relative overflow-hidden">
                    <Gem size={36} className="text-[#C5A880]/60 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-[#C5A880]/40 text-[9px] font-sans-jagdamba uppercase tracking-wider bg-white text-[#8C6239]">
                      Certified
                    </div>
                  </div>
                  <span className="text-[10px] font-sans-jagdamba uppercase tracking-widest text-[#8C6239] font-semibold block mb-2">{col.spec}</span>
                  <h3 className="font-serif-jagdamba text-base text-[#593E1A] mb-3 group-hover:text-[#8C6239] transition-colors">{col.title}</h3>
                  <p className="text-xs text-slate-500 font-sans-jagdamba leading-relaxed mb-6">{col.desc}</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="font-mono text-sm font-bold text-[#593E1A]">{col.price}</span>
                  <a 
                    href="#consultation" 
                    onClick={() => setForm(prev => ({ ...prev, notes: `Inquiry regarding: ${col.title} (${col.price})` }))}
                    className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest text-[#8C6239] group-hover:translate-x-1 transition-all"
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
      <section id="consultation" className="py-24 border-b border-[#C5A880]/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-[0.25em] font-sans-jagdamba">Private Viewing</span>
            <h2 className="text-3xl lg:text-4xl font-serif-jagdamba text-[#593E1A] mt-3">Virtual Design Consultation</h2>
            <p className="text-slate-500 text-xs font-sans-jagdamba mt-2">Book a private video consultation or an in-store viewing at our MG Road showroom. Our senior design curators will assist you.</p>
            <div className="w-16 h-[1px] bg-[#8C6239] mx-auto mt-6"></div>
          </div>

          <div className={`p-8 md:p-12 border ${borderBronze} bg-[#FAF6EE] shadow-md rounded-sm`}>
            {submittedData ? (
              <div className="text-center py-8 space-y-6 font-sans-jagdamba">
                <div className="w-16 h-16 bg-green-100 border border-green-300 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <Check size={28} />
                </div>
                <h3 className="font-serif-jagdamba text-2xl text-slate-800">Consultation Scheduled</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your consultation has been logged. Our Senior Pearl Specialist will reach out to you within 2 hours.
                </p>
                <div className="bg-white border border-[#C5A880]/30 p-5 rounded-sm max-w-sm mx-auto text-left text-xs space-y-2">
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider">Booking ID:</span> <span className="font-mono font-bold text-slate-700">{submittedData.id}</span></div>
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider">Scheduled Date:</span> <span className="font-bold text-slate-700">{submittedData.date}</span></div>
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider">Contact Phone:</span> <span className="font-mono font-bold text-slate-700">{submittedData.phone}</span></div>
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider">Showroom:</span> <span className="font-bold text-slate-700">MG Road, Secunderabad</span></div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-3 border border-[#8C6239] text-[#8C6239] hover:bg-[#FAF6EE] uppercase text-xs tracking-widest font-semibold font-sans-jagdamba transition-all active:scale-95"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-sans-jagdamba text-xs">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 font-semibold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-white border ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-[#C5A880]/40 focus:border-[#8C6239]'} rounded-sm focus:outline-none transition-all`}
                      placeholder="e.g. Ananya Rao"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-600 font-semibold uppercase tracking-wider mb-2">PHONE NUMBER *</label>
                    <input
                      type="text"
                      className={`w-full p-3.5 bg-white border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-[#C5A880]/40 focus:border-[#8C6239]'} rounded-sm focus:outline-none transition-all`}
                      placeholder="e.g. +91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 font-semibold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-3.5 bg-white border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-[#C5A880]/40 focus:border-[#8C6239]'} rounded-sm focus:outline-none transition-all`}
                      placeholder="e.g. ananya@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-600 font-semibold uppercase tracking-wider mb-2">PREFERRED DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-3.5 bg-white border ${errors.date ? 'border-red-500' : 'border-[#C5A880]/40 focus:border-[#8C6239]'} rounded-sm focus:outline-none transition-all text-slate-700`}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold uppercase tracking-wider mb-2">NOTES & CUSTOM REQUIREMENTS</label>
                  <textarea
                    rows="4"
                    className="w-full p-3.5 bg-white border border-[#C5A880]/40 focus:border-[#8C6239] rounded-sm focus:outline-none transition-all resize-none text-slate-700"
                    placeholder="Describe specific diamond shapes, length of pearl strings, or custom Nizami jewelry designs you wish to inspect..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#8C6239] hover:bg-[#593E1A] text-white font-sans-jagdamba uppercase tracking-widest font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      Processing Appointment...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Request Viewing Session
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 border-b border-[#C5A880]/20 bg-[#FAF6EE]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-[0.25em] font-sans-jagdamba">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-serif-jagdamba text-[#593E1A] mt-3">Hyderabad Client Stories</h2>
            <div className="w-16 h-[1px] bg-[#8C6239] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The selection of South Sea pearls at Sri Jagdamba is unparalleled. I designed my wedding chokers here using the interactive customizer as a starting concept. The craftsmanship is true Nizami heritage.",
                author: "Ananya Rao",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "My family has been purchasing heritage jewelry from their MG Road Secunderabad showroom since 1985. The transparency in pearl certification and their timeless designs are why they have our complete trust.",
                author: "Kiranmayi Reddy",
                location: "Secunderabad",
                rating: 5
              },
              {
                text: "A beautiful, premium purchase experience. I booked a virtual consultation, and they showcased multiple basra necklaces over live video. The shipment was securely delivered to Gachibowli with certification.",
                author: "Meera Sen",
                location: "Gachibowli, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className={`p-8 border ${borderBronze} bg-white flex flex-col justify-between shadow-sm rounded-sm`}>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={12} className="text-[#C5A880] fill-[#C5A880]" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 font-sans-jagdamba leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#C5A880]/30 flex items-center justify-center text-xs font-serif-jagdamba font-bold text-[#8C6239]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#593E1A] font-sans-jagdamba">{review.author}</h4>
                    <span className="text-[10px] text-slate-400 font-sans-jagdamba">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#FAF6EE] text-[#593E1A] py-16 border-t border-[#C5A880]/30 font-sans-jagdamba text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1: Store Bio */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif-jagdamba text-lg uppercase tracking-wider text-[#8C6239]">Sri Jagdamba Pearls</h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Authentic heritage, royal aesthetics, and certified pearls. Serving Secunderabad and Hyderabad with distinct pearl artistry since 1975.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif-jagdamba text-sm uppercase tracking-widest text-[#8C6239] font-bold">Contact Showroom</h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex justify-center md:justify-start items-start gap-2">
                <MapPin size={14} className="text-[#8C6239] shrink-0 mt-0.5" />
                <span>MG Road, Secunderabad, Telangana 500003.</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone size={14} className="text-[#8C6239] shrink-0" />
                <span className="font-mono">+91 40 2784 0969</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail size={14} className="text-[#8C6239] shrink-0" />
                <span>help@jagdamba.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Socials */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif-jagdamba text-sm uppercase tracking-widest text-[#8C6239] font-bold">Showroom Hours</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex justify-between max-w-xs mx-auto md:mx-0"><span>Monday – Saturday:</span> <span>10:30 AM – 8:30 PM</span></li>
              <li className="flex justify-between max-w-xs mx-auto md:mx-0"><span>Sunday:</span> <span className="text-[#8C6239] font-semibold">Closed</span></li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a href="#" className="p-2 border border-[#C5A880]/40 rounded-full hover:bg-white text-[#8C6239] hover:border-[#8C6239] transition-all"><Instagram size={14} /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#C5A880]/20 text-center text-[10px] text-slate-400 tracking-wider">
          <p>© {new Date().getFullYear()} SRI JAGDAMBA PEARLS. ALL RIGHTS RESERVED. ALL CERTIFICATIONS AND ESTIMATES ARE SUBJECT TO THE SPECIFIC PHYSICAL GEMSTONES SELECTED IN THE SHOWROOM.</p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// 2. SUHANI PITTIE PAGE (Banjara Hills)
// ==========================================

function SuhaniPittiePage() {
  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Diamond');
  const [metalWeight, setMetalWeight] = useState(15); // grams
  const [gemCount, setGemCount] = useState(3); // carats/units

  // Pricing configuration
  const metalPrices = {
    '22K Gold': 7500,
    '18K Rose Gold': 6400,
    'Platinum': 4000
  };

  const gemstonePrices = {
    'Diamond': 90000,
    'Emerald': 50000,
    'Ruby': 40000,
    'Pearl': 10000
  };

  const calculatePrice = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const premiumCharges = subtotal * 0.22; // 22% Design premium / making charges
    return Math.round(subtotal + premiumCharges);
  };

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '', selectedStyle: 'Contemporary' });
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
    if (!form.date) errs.date = 'Consultation date is required';
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
        id: `SPP-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Theme Constants (Suhani Pittie: Asymmetrical contemporary minimal, double lines, patina bronze)
  const bgMain = 'bg-[#FAF9F6]'; // Bone/Warm gray cream
  const textDark = 'text-[#3D3028]'; // Deep bronze-brown
  const borderBronze = 'border-[#9E7A5A]'; // Patina Bronze
  const bgCard = 'bg-[#F5F2EC]';

  const metalColors = {
    '22K Gold': '#C5A059',
    '18K Rose Gold': '#CC8E8E',
    'Platinum': '#CBD5E1'
  };

  const gemColors = {
    'Diamond': '#E0F2FE',
    'Emerald': '#34D399',
    'Ruby': '#F87171',
    'Pearl': '#F3F4F6'
  };

  return (
    <div className={`min-h-screen ${bgMain} ${textDark} font-sans selection:bg-[#9E7A5A]/20 antialiased`}>
      {/* Import Serif and Sans pair fonts specifically for Suhani Pittie */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-serif-suhani { font-family: 'Cinzel', serif; }
        .font-sans-suhani { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF9F6]/95 border-b-2 ${borderBronze}/40`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col items-start">
              <span className="font-serif-suhani text-xl lg:text-2xl tracking-[0.2em] uppercase text-[#3D3028] font-bold">
                Suhani Pittie
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase font-medium text-slate-400 font-sans-suhani mt-1">
                Banjara Hills Flagship
              </span>
            </div>
            <div className="hidden md:flex space-x-12 font-sans-suhani text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-600">
              <a href="#artistry" className="hover:text-[#9E7A5A] transition-colors relative py-1">Artistry</a>
              <a href="#studio" className="hover:text-[#9E7A5A] transition-colors relative py-1">Studio Customizer</a>
              <a href="#sculptures" className="hover:text-[#9E7A5A] transition-colors relative py-1">Metal Art</a>
              <a href="#booking" className="hover:text-[#9E7A5A] transition-colors relative py-1">Private Session</a>
            </div>
            <div className="hidden md:block">
              <a 
                href="#booking" 
                className={`inline-flex items-center px-5 py-3 border-2 border-[#3D3028] hover:border-[#9E7A5A] hover:text-[#9E7A5A] transition-all text-[10px] uppercase tracking-[0.2em] font-black font-sans-suhani active:scale-95`}
              >
                Book Design Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section - Asymmetrical layout */}
      <header className="relative pt-16 pb-28 overflow-hidden">
        {/* Abstract contemporary double border lines as background */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#9E7A5A]/10 hidden md:block"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#9E7A5A]/10 translate-x-3 hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#9E7A5A] text-[#9E7A5A] text-[9px] font-sans-suhani uppercase tracking-[0.2em] w-fit font-bold">
                <Scissors size={10} />
                <span>Contemporary Metal Sculptor</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-serif-suhani leading-[1.05] tracking-tight text-[#3D3028] font-bold">
                Sculpting <br />
                <span className="italic font-light text-[#9E7A5A]">Modernity</span>
              </h1>
              <p className="text-xs lg:text-sm text-slate-500 font-sans-suhani leading-relaxed max-w-xl">
                Recognized by the World Gold Council for pioneering avant-garde jewelry design, Suhani Pittie breaks the limits of traditional form. Handcrafted in Banjara Hills, our collections merge raw structural metal sculpture with refined, elegant minimalism.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#studio" 
                  className="inline-flex justify-center items-center px-6 py-4 bg-[#3D3028] hover:bg-[#9E7A5A] text-white font-sans-suhani text-[10px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95"
                >
                  Enter Studio Customizer
                  <ArrowRight size={12} className="ml-2" />
                </a>
                <a 
                  href="#sculptures" 
                  className="inline-flex justify-center items-center px-6 py-4 border-2 border-[#9E7A5A] hover:bg-[#F5F2EC] text-[#3D3028] font-sans-suhani text-[10px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95"
                >
                  Explore Structural Art
                </a>
              </div>
            </div>

            {/* Asymmetrical Double Border Box Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Offset decorative box */}
                <div className={`absolute -inset-4 border border-[#9E7A5A]/30 translate-x-2 translate-y-2`}></div>
                <div className={`relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] border-2 ${borderBronze} p-4 bg-[#FAF9F6]`}>
                  <div className="w-full h-full border border-dashed border-[#9E7A5A]/60 flex flex-col justify-between p-6">
                    <div className="text-[9px] tracking-[0.25em] uppercase font-sans-suhani font-bold text-slate-400">
                      Concept #204 / Metal Art
                    </div>

                    {/* Geometrical Abstract Wireframe representation */}
                    <div className="w-full flex justify-center my-auto">
                      <svg className="w-48 h-48" viewBox="0 0 120 120">
                        {/* Overlapping bronze wire circles */}
                        <circle cx="60" cy="50" r="30" fill="none" stroke="#9E7A5A" strokeWidth="1" />
                        <circle cx="50" cy="65" r="25" fill="none" stroke="#3D3028" strokeWidth="0.75" />
                        <line x1="20" y1="20" x2="100" y2="100" stroke="#9E7A5A" strokeWidth="0.5" strokeDasharray="2 2" />
                        
                        {/* Angular metal spikes */}
                        <polygon points="60,20 62,50 58,50" fill="#3D3028" />
                        <polygon points="35,65 60,67 60,63" fill="#9E7A5A" />
                        
                        {/* Geometric gems */}
                        <rect x="75" y="45" width="6" height="6" transform="rotate(45 78 48)" fill="#E0F2FE" stroke="#9E7A5A" strokeWidth="0.5" />
                        <circle cx="50" cy="65" r="3" fill="#34D399" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <span className="font-serif-suhani text-sm text-[#3D3028] block font-semibold">Molten Brass & Solitaire</span>
                      <span className="text-[9px] uppercase tracking-widest text-[#9E7A5A] font-sans-suhani block">Banjara Hills Limited Release</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section - Editorial structure */}
      <section id="artistry" className="py-24 bg-[#F5F2EC]/50 border-y-2 border-[#9E7A5A]/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold text-[#9E7A5A] uppercase tracking-[0.25em] font-sans-suhani">The Philosophy</span>
              <h2 className="text-3xl font-serif-suhani text-[#3D3028] mt-3 font-bold leading-tight">Craft as Sculpture, Art as Adornment</h2>
              <div className="w-16 h-1 bg-[#3D3028] mt-6"></div>
            </div>
            
            <div className="md:col-span-7 space-y-6 font-sans-suhani text-xs text-slate-500 leading-relaxed">
              <p>
                Suhani Pittie is globally recognized for rewriting the rules of Indian jewelry design. Stripping away heavy decorative cladding, we focus on the raw essence of metals: brass, copper, sterling silver, and pure gold, treated as canvas for structural art.
              </p>
              <p>
                Our studio in Road No. 4, Banjara Hills serves as a gallery and laboratory. Here, artisans apply contemporary metallurgy techniques like torching, melting, and geometric fracturing to create collections that speak directly to individuals of independent taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="studio" className="py-24 border-b border-[#9E7A5A]/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#9E7A5A] uppercase tracking-[0.25em] font-sans-suhani">Studio Workshop</span>
            <h2 className="text-3xl lg:text-4xl font-serif-suhani text-[#3D3028] mt-3 font-bold">Avant-Garde Customizer</h2>
            <p className="text-slate-500 text-xs font-sans-suhani mt-2">Interact with structural geometries, pick refined metals and gemstones, and calculate an instantaneous quote for your custom design concept.</p>
            <div className="w-16 h-1 bg-[#3D3028] mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Realtime Graphic Representation */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className={`p-8 border-2 ${borderBronze} bg-[#F5F2EC] flex flex-col items-center justify-center relative shadow-sm rounded-none min-h-[360px]`}>
                <div className="absolute top-4 left-4 text-[9px] tracking-widest uppercase text-slate-400 font-sans-suhani font-bold">
                  Studio Blueprint
                </div>

                {/* SVG Visualizer that updates based on selection */}
                <div className="w-52 h-52 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <defs>
                      <radialGradient id="suhaniGem" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={gemColors[gemstone]} />
                      </radialGradient>
                    </defs>

                    {/* Geometrical structure background */}
                    <line x1="20" y1="60" x2="100" y2="60" stroke="#9E7A5A" strokeWidth="0.25" strokeDasharray="3 3" />
                    <line x1="60" y1="20" x2="60" y2="100" stroke="#9E7A5A" strokeWidth="0.25" strokeDasharray="3 3" />

                    {/* Structural metal cuffs/pieces */}
                    <path
                      d="M 25,45 L 60,15 L 95,45"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="2.5"
                    />

                    {/* Angular frame segments */}
                    <path
                      d="M 35,65 L 60,95 L 85,65 Z"
                      fill="none"
                      stroke={metalColors[metalType]}
                      strokeWidth="1.5"
                    />

                    {/* Gemstones placed at corners of the structure */}
                    {[...Array(Math.min(gemCount, 6))].map((_, idx) => {
                      // Placement coordinates along the geometric outline
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
                          r="3.5"
                          fill="url(#suhaniGem)"
                          stroke={metalColors[metalType]}
                          strokeWidth="0.5"
                        />
                      );
                    })}

                    {/* Inner core metal sphere */}
                    <circle cx="60" cy="55" r="8" fill="none" stroke={metalColors[metalType]} strokeWidth="1" />
                    <circle cx="60" cy="55" r="4" fill="url(#suhaniGem)" />
                  </svg>
                </div>

                <div className="text-center font-sans-suhani mt-6">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Design ID: SP-STRUCT-10</h4>
                  <p className="text-sm font-serif-suhani text-[#3D3028] mt-1 font-bold">
                    {metalType} & {gemstone} Fragment
                  </p>
                </div>
              </div>

              <a 
                href="#booking" 
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    notes: `Bespoke Avant-Garde Request: Custom ${metalType} sculptured piece with ${gemCount} ${gemstone}(s) (approx ${metalWeight}g). Studio Quote: ₹${calculatePrice().toLocaleString('en-IN')}`
                  }));
                }}
                className="w-full text-center py-4 bg-[#3D3028] hover:bg-[#9E7A5A] text-white font-sans-suhani text-[10px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95 shadow-sm"
              >
                Incorporate Design in Consult
              </a>
            </div>

            {/* Customizer Controls Panel */}
            <div className={`lg:col-span-7 p-8 md:p-10 border-2 ${borderBronze} bg-[#FAF9F6] shadow-sm rounded-none`}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#9E7A5A]/30">
                <Sliders className="text-[#3D3028]" size={18} />
                <h3 className="font-serif-suhani text-lg text-[#3D3028] font-bold">Configuration</h3>
              </div>

              <div className="space-y-8 font-sans-suhani text-xs">
                {/* Metal Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                    Metal Base Selection
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                      <button
                        key={metal}
                        onClick={() => setMetalType(metal)}
                        className={`py-3 px-4 text-center border-2 text-[10px] uppercase tracking-[0.15em] font-bold transition-all active:scale-95 ${
                          metalType === metal
                            ? 'border-[#3D3028] bg-[#3D3028] text-white shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#3D3028]'
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
                      Sculpture Volume (Grams)
                    </label>
                    <span className="font-mono font-bold text-[#3D3028]">{metalWeight}g</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="60"
                    value={metalWeight}
                    onChange={(e) => setMetalWeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#3D3028] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>8g</span>
                    <span>34g</span>
                    <span>60g</span>
                  </div>
                </div>

                {/* Gemstone Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4">
                    Gemstone Inclusions
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((gem) => (
                      <button
                        key={gem}
                        onClick={() => setGemstone(gem)}
                        className={`py-3 px-2 text-center border-2 text-[10px] uppercase tracking-[0.15em] font-bold transition-all active:scale-95 ${
                          gemstone === gem
                            ? 'border-[#3D3028] bg-[#3D3028] text-white shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#3D3028]'
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
                      Gemstone Count
                    </label>
                    <span className="font-mono font-bold text-[#3D3028]">{gemCount} Units</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={gemCount}
                    onChange={(e) => setGemCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 accent-[#3D3028] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>1</span>
                    <span>8</span>
                    <span>15</span>
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className="pt-6 mt-6 border-t-2 border-[#9E7A5A]/30 bg-white p-5 border shadow-sm">
                  <div className="space-y-2 text-[11px] text-slate-500 font-medium">
                    <div className="flex justify-between">
                      <span>Sculpted base ({metalType} @ ₹{metalPrices[metalType]}/g):</span>
                      <span className="font-mono text-slate-700">₹{(metalWeight * metalPrices[metalType]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gemstone inclusions ({gemstone} @ ₹{gemstonePrices[gemstone]}/unit):</span>
                      <span className="font-mono text-slate-700">₹{(gemCount * gemstonePrices[gemstone]).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Design Premium & Studio Charges (22%):</span>
                      <span className="font-mono text-slate-700">
                        ₹{Math.round((metalWeight * metalPrices[metalType] + gemCount * gemstonePrices[gemstone]) * 0.22).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="h-[1px] bg-slate-100 my-2"></div>
                    <div className="flex justify-between items-end text-xs text-[#3D3028] font-black">
                      <span className="uppercase tracking-[0.15em]">TOTAL DESIGN ESTIMATE:</span>
                      <span className="font-mono text-base text-[#9E7A5A]">
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

      {/* Signature Collection Grid */}
      <section id="sculptures" className="py-24 bg-[#F5F2EC]/40 border-y-2 border-[#9E7A5A]/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#9E7A5A] uppercase tracking-[0.25em] font-sans-suhani">The Catalog</span>
            <h2 className="text-3xl lg:text-4xl font-serif-suhani text-[#3D3028] mt-3 font-bold">Signature Sculptural Pieces</h2>
            <div className="w-16 h-1 bg-[#3D3028] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Structural Brass & Gold Collar",
                desc: "Hand-hammered brass segments layered in 22K gold plating, creating an architectural collar structure.",
                price: "₹85,000",
                material: "Brass, Gold Plating"
              },
              {
                title: "Molten Gold Asymmetric Cuff",
                desc: "An organic, melting metal form wrap-around cuff featuring raw textures and an raw diamond highlight.",
                price: "₹1,20,000",
                material: "22K Gold, Raw Diamond"
              },
              {
                title: "Fragmented Bronze Choker",
                desc: "Fractured sheets of bronze arranged in overlapping asymmetrical steps with champagne diamonds.",
                price: "₹95,000",
                material: "Bronze, Champagne Diamonds"
              },
              {
                title: "Abstract Solitaire Pendant",
                desc: "Avant-garde interlocking wireframe loops in platinum surrounding a floating brilliant-cut solitaire.",
                price: "₹2,10,000",
                material: "Platinum, 1.2ct Solitaire"
              }
            ].map((art, idx) => (
              <div key={idx} className={`bg-white border-2 border-slate-200 hover:border-[#9E7A5A] p-6 flex flex-col justify-between hover:shadow-md transition-all rounded-none group`}>
                <div>
                  <div className="w-full h-44 bg-[#F5F2EC] mb-6 flex items-center justify-center relative border border-dashed border-[#9E7A5A]/30">
                    <Scissors size={28} className="text-[#9E7A5A]/50 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 border border-[#9E7A5A]/30 text-[8px] font-sans-suhani uppercase tracking-widest bg-white text-[#3D3028]">
                      Designer Art
                    </div>
                  </div>
                  <span className="text-[9px] font-sans-suhani uppercase tracking-[0.2em] text-[#9E7A5A] font-bold block mb-2">{art.material}</span>
                  <h3 className="font-serif-suhani text-sm text-[#3D3028] mb-3 font-semibold group-hover:text-[#9E7A5A] transition-colors">{art.title}</h3>
                  <p className="text-[11px] text-slate-500 font-sans-suhani leading-relaxed mb-6">{art.desc}</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="font-mono text-xs font-black text-[#3D3028]">{art.price}</span>
                  <a 
                    href="#booking" 
                    onClick={() => setForm(prev => ({ ...prev, notes: `Inquiry: ${art.title} (${art.price})` }))}
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-[#3D3028] hover:text-[#9E7A5A] transition-colors"
                  >
                    Discuss <ChevronRight size={10} className="ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Request Form */}
      <section id="booking" className="py-24">
        <div className="max-w-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#9E7A5A] uppercase tracking-[0.25em] font-sans-suhani">The Atelier</span>
            <h2 className="text-3xl font-serif-suhani text-[#3D3028] mt-3 font-bold">Virtual Design Consultation</h2>
            <p className="text-slate-500 text-xs font-sans-suhani mt-2">Connect virtually with Suhani Pittie&apos;s designers or coordinate a private studio tour at our Banjara Hills workshop.</p>
            <div className="w-16 h-1 bg-[#3D3028] mx-auto mt-6"></div>
          </div>

          <div className={`p-8 md:p-10 border-2 ${borderBronze} bg-[#FAF9F6] shadow-sm rounded-none`}>
            {submittedData ? (
              <div className="text-center py-6 space-y-6 font-sans-suhani">
                <div className="w-12 h-12 border-2 border-green-500 text-green-600 rounded-none flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="font-serif-suhani text-xl text-slate-800 font-bold">Appointment Confirmed</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your session booking has been cataloged. A studio representative will verify your time within 1 hour.
                </p>
                <div className="bg-white border-2 border-[#9E7A5A]/30 p-5 rounded-none max-w-xs mx-auto text-left text-[10px] space-y-2">
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">ID:</span> <span className="font-mono font-bold text-slate-700">{submittedData.id}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">DATE:</span> <span className="font-bold text-slate-700">{submittedData.date}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">STYLE INTENT:</span> <span className="font-bold text-slate-700">{submittedData.selectedStyle}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-widest">ATELIER:</span> <span className="font-bold text-slate-700">Road No. 4, Banjara Hills</span></div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-5 py-3 border-2 border-[#3D3028] text-[#3D3028] hover:bg-[#F5F2EC] uppercase text-[9px] tracking-widest font-black font-sans-suhani transition-all active:scale-95"
                >
                  Schedule Another Consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-sans-suhani text-[10px] tracking-wide">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">CLIENT NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-white border-2 ${errors.name ? 'border-red-500' : 'border-slate-200 focus:border-[#3D3028]'} rounded-none focus:outline-none transition-all`}
                      placeholder="e.g. Pranati G."
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[9px] font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">PHONE *</label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-white border-2 ${errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-[#3D3028]'} rounded-none focus:outline-none transition-all`}
                      placeholder="e.g. 40 6462 8200"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[9px] font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-3 bg-white border-2 ${errors.email ? 'border-red-500' : 'border-slate-200 focus:border-[#3D3028]'} rounded-none focus:outline-none transition-all`}
                      placeholder="e.g. care@suhanipittie.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[9px] font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">CONSULTATION DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-3 bg-white border-2 ${errors.date ? 'border-red-500' : 'border-slate-200 focus:border-[#3D3028]'} rounded-none focus:outline-none transition-all text-slate-600`}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p className="text-red-500 mt-1 text-[9px] font-medium">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">DESIGN CATEGORY INTENT</label>
                  <select
                    className="w-full p-3 bg-white border-2 border-slate-200 focus:border-[#3D3028] rounded-none focus:outline-none transition-all text-slate-700"
                    value={form.selectedStyle}
                    onChange={(e) => setForm({ ...form, selectedStyle: e.target.value })}
                  >
                    <option value="Contemporary">Contemporary Minimalist (Brass & Gold)</option>
                    <option value="Raw Avant-Garde">Raw Avant-Garde (Torched & Fractured)</option>
                    <option value="Classic Fusion">Classic Fusion (Platinum & Pearls)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold uppercase tracking-[0.15em] mb-2">PROJECT NOTES</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 bg-white border-2 border-slate-200 focus:border-[#3D3028] rounded-none focus:outline-none transition-all resize-none text-slate-600"
                    placeholder="Provide details of specific collections or metal art concepts you wish to co-design during the session..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#3D3028] hover:bg-[#9E7A5A] text-white font-sans-suhani uppercase tracking-[0.2em] font-black transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={12} className="animate-spin" />
                      SUBMITTING ATELIER REQUEST...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      SCHEDULE PRIVATE APPOINTMENT
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials */}
      <section className="py-24 bg-[#F5F2EC]/30 border-t-2 border-[#9E7A5A]/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#9E7A5A] uppercase tracking-[0.25em] font-sans-suhani">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-serif-suhani text-[#3D3028] mt-3 font-bold">Collector Reviews</h2>
            <div className="w-16 h-1 bg-[#3D3028] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Suhani Pittie's pieces are not just jewelry; they are miniature wearable sculptures. The asymmetrical brass designs are incredibly light yet bold. A mandatory visit when shopping in Banjara Hills.",
                author: "Pranati G.",
                location: "Banjara Hills, Hyderabad",
                rating: 5
              },
              {
                text: "The abstract platinum loop collections represent a clean departure from heavy bridal jewelry. The design team helped me customize a molten solitaire collar that gets noticed at every single gallery opening.",
                author: "Shreya Reddy",
                location: "Begumpet, Hyderabad",
                rating: 5
              },
              {
                text: "Exquisite craftsmanship and client support. I co-designed a custom cuff through a virtual workshop. The final piece has a raw, fractured texture that captures light beautifully.",
                author: "Divya Naidu",
                location: "Hitech City, Hyderabad",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className={`p-8 border-2 border-slate-200 bg-white flex flex-col justify-between shadow-sm`}>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={10} className="text-[#9E7A5A] fill-[#9E7A5A]" />
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans-suhani leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F5F2EC] border border-[#9E7A5A]/30 flex items-center justify-center text-[10px] font-serif-suhani font-black text-[#3D3028]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#3D3028] font-sans-suhani">{review.author}</h4>
                    <span className="text-[9px] text-slate-400 font-sans-suhani">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F2EC] text-[#3D3028] py-16 border-t-2 border-[#9E7A5A]/40 font-sans-suhani text-[11px] tracking-wide">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-serif-suhani text-base uppercase tracking-[0.2em] font-bold">Suhani Pittie</h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Contemporary metal art, architectural contours, and award-winning Indian design. Crafted by hand in Banjara Hills, Hyderabad.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-serif-suhani text-[10px] uppercase tracking-[0.2em] font-bold">Flagship Atelier</h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-[#9E7A5A] shrink-0 mt-0.5" />
                <span>Road No. 4, Banjara Hills, Hyderabad, Telangana 500034.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-[#9E7A5A] shrink-0" />
                <span className="font-mono">+91 40 6462 8200</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-[#9E7A5A] shrink-0" />
                <span>care@suhanipittie.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-serif-suhani text-[10px] uppercase tracking-[0.2em] font-bold">Studio Scheduling</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex justify-between max-w-xs"><span>Monday – Saturday:</span> <span>10:00 AM – 7:30 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-[#9E7A5A] font-bold">By Appointment Only</span></li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 border border-slate-300 hover:border-[#3D3028] text-[#3D3028] transition-all"><Instagram size={12} /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-12 pt-8 border-t border-[#9E7A5A]/20 text-center text-[9px] text-slate-400 tracking-[0.25em]">
          <p>© {new Date().getFullYear()} SUHANI PITTIE. DESIGN REGISTERED UNDER INDIAN PATENT AND DESIGNS ACT. ESTIMATES RENDERED IN LAB BLUEPRINTS DO NOT CONSTITUTE A FORMAL SHOWROOM QUOTE.</p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// 3. FALLBACK HEALTHTECH PREVIEW (Original)
// ==========================================

function HealthtechPreview({ slug }) {
  const rawName = slug || 'Healthcare Provider';
  const clientName = rawName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [booking, setBooking] = useState(false);

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1e293b', background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #0284c7, #0ea5e9)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
            <Activity size={24} />
          </div>
          {clientName}
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', fontWeight: 500, display: 'none' }} className="nav-link">Specialties</span>
          <span style={{ cursor: 'pointer', fontWeight: 500, display: 'none' }} className="nav-link">Telemedicine</span>
          <span style={{ cursor: 'pointer', fontWeight: 500, display: 'none' }} className="nav-link">Patient Portal</span>
          <button style={{ background: '#0ea5e9', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '100px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)' }}>
            <Phone size={16} /> Emergency
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ position: 'relative', padding: '80px 5%', background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(2,132,199,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: '#e0f2fe', color: '#0369a1', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', zIndex: 1 }}>
          <HeartPulse size={16} /> Next-Generation Patient Care
        </div>
        
        <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, maxWidth: '900px', zIndex: 1, letterSpacing: '-1px' }}>
          World-Class Healthcare, <br/>
          <span style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Available Anywhere.
          </span>
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '700px', lineHeight: 1.6, zIndex: 1 }}>
          {clientName} introduces a seamless telemedicine and patient management portal. Consult top specialists from the comfort of your home.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', zIndex: 1 }}>
          <button 
            onClick={() => setBooking(true)}
            style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '16px 32px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.3)' }}
          >
            <Video size={20} /> Book Video Consult
          </button>
          <button style={{ background: '#fff', color: '#0f172a', border: '2px solid #e2e8f0', padding: '16px 32px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <Calendar size={20} /> In-Person Visit
          </button>
        </div>

        {/* Feature Pills */}
        <div style={{ display: 'flex', gap: '32px', marginTop: '40px', zIndex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: <Shield size={18} color="#10b981"/>, text: "HIPAA Compliant" },
            { icon: <CheckCircle2 size={18} color="#0ea5e9"/>, text: "Zero Wait Times" },
            { icon: <UserCircle size={18} color="#8b5cf6"/>, text: "Digital Prescriptions" }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500, color: '#334155' }}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </header>

      {/* Services Dashboard Mockup */}
      <section style={{ padding: '80px 5%', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', textAlign: 'center' }}>Seamless Digital Health</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px', marginBottom: '60px' }}>
          Our new portal integrates everything from health records to instant specialty triage.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', width: '100%', maxWidth: '1200px' }}>
          {[
            { title: "24/7 Telemedicine", desc: "Connect instantly with on-call physicians via HD video without leaving your living room.", icon: <Video size={32} /> },
            { title: "Smart Scheduling", desc: "AI-driven appointment routing ensures you see the right specialist at the earliest available time.", icon: <Calendar size={32} /> },
            { title: "Secure Health Vault", desc: "Access all your lab reports, prescriptions, and radiology scans in one encrypted dashboard.", icon: <Shield size={32} /> }
          ].map((service, i) => (
            <div key={i} style={{ padding: '40px 32px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }} className="hover-card">
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#e0f2fe', color: '#0284c7', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal Mockup */}
      {booking && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }} onClick={() => setBooking(false)}>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', animation: 'slideUp 0.3s ease-out' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>Remote Triage</h3>
                <p style={{ color: '#64748b', marginTop: '8px' }}>Select an available specialty to begin.</p>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Video size={24} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['General Physician', 'Pediatrics', 'Cardiology Consult'].map((spec, i) => (
                <div key={i} style={{ padding: '16px 20px', border: '2px solid #e2e8f0', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} className="hover-border">
                  <span style={{ fontWeight: 600 }}>{spec}</span>
                  <span style={{ fontSize: '0.85rem', color: '#0ea5e9', fontWeight: 600, background: '#f0f9ff', padding: '4px 12px', borderRadius: '100px' }}>Available Now</span>
                </div>
              ))}
            </div>

            <button style={{ width: '100%', padding: '16px', background: '#0284c7', color: '#fff', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 600, marginTop: '32px', border: 'none', cursor: 'pointer' }}>
              Continue to Intake
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for hover states */}
      <style>{`
        @media (min-width: 768px) {
          .nav-link { display: block !important; color: #475569; transition: color 0.2s; }
          .nav-link:hover { color: #0284c7; }
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
          border-color: #cbd5e1 !important;
        }
        .hover-border:hover {
          border-color: #0284c7 !important;
          background: #f8fafc;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ==========================================
// MAIN DYNAMIC CLIENT ROUTE DISPATCHER
// ==========================================

export default function DynamicClientPage() {
  const params = useParams();
  const slug = params?.slug;

  if (slug === 'sri-jagdamba-pearls') {
    return <SriJagdambaPearlsPage />;
  }
  if (slug === 'suhani-pittie-banjara-hills') {
    return <SuhaniPittiePage />;
  }
  if (slug === 'dermed-clinic-tolichowki') {
    return <DermedClinicPage />;
  }
  if (slug === 'afaq-laser-cosmetic-clinic') {
    return <AfaqClinicPage />;
  }
  if (slug === 'rgr-interiors-banjara-hills') {
    return <RgrInteriorsPage />;
  }
  if (slug === 'infinite-architecture-studio-banjara-hills') {
    return <InfiniteArchitectureStudioPage />;
  }
  if (slug === 'civilization-architects-banjara-hills') {
    return <CivilizationArchitectsPage />;
  }
  if (slug === 'saandhya-architects-banjara-hills') {
    return <SaandhyaArchitectsPage />;
  }
  if (slug === 'raavera-interior-designer-banjara-hills') {
    return <RaaveraInteriorDesignerPage />;
  }
  if (slug === 'design-edge-banjara-hills') {
    return <DesignEdgePage />;
  }
  if (slug === 'california-dreamworks-banjara-hills') {
    return <CaliforniaDreamworksPage />;
  }
  if (slug === 'percept-interior-solutions-banjara-hills') {
    return <PerceptInteriorSolutionsPage />;
  }
  if (slug === 'aamir-hameeda-design-studio-banjara-hills') {
    return <AamirHameedaDesignStudioPage />;
  }
  if (slug === 'sahani-interiors-banjara-hills') {
    return <SahaniInteriorsPage />;
  }

  // Fallback to Healthtech Preview
  return <HealthtechPreview slug={slug} />;
}

"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Gem, Crown, Sliders, 
  MessageSquare, Heart, Share2, Instagram, ArrowRight, Shield, Check, 
  ArrowLeft, Video, Calendar, UserCircle, CheckCircle2, ChevronDown, 
  Eye, ShieldCheck, ShoppingBag, Menu, X 
} from 'lucide-react';

export default function SriKrishnaJewellersPage() {
  // Navigation Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Customizer State
  const [metalType, setMetalType] = useState('Platinum');
  const [gemstone, setGemstone] = useState('Diamond');
  const [metalWeight, setMetalWeight] = useState(12); // in grams (typical ring weight)
  const [gemCount, setGemCount] = useState(3); // carats (typical solitaire weight)

  // Pricing configuration for Sri Krishna (Premium Couture Solitaire rates)
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

  // Metal colors for rendering
  const metalHex = {
    '22K Gold': '#d6b052',
    '18K Rose Gold': '#e0988e',
    'Platinum': '#cbd5e1'
  };

  // Gem colors for rendering
  const gemHex = {
    'Diamond': '#e0f2fe',
    'Emerald': '#047857',
    'Ruby': '#dc2626',
    'Pearl': '#f8fafc'
  };

  const calculatePricing = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const makingCharges = Math.round(subtotal * 0.15); // 15% making charges for couture diamond setters
    const gst = Math.round((subtotal + makingCharges) * 0.03); // 3% GST
    const grandTotal = subtotal + makingCharges + gst;
    return { metalCost, gemCost, subtotal, makingCharges, gst, grandTotal };
  };

  const pricing = calculatePricing();

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', interest: 'Couture Solitaires', notes: '' });
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
    if (!form.date) errs.date = 'Preferred date is required';
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

    // Simulate API call with 1.5s delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: `SKJ-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
      // Clear form
      setForm({ name: '', phone: '', email: '', date: '', interest: 'Couture Solitaires', notes: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF2] text-[#142421] font-sans antialiased selection:bg-[#CCA43B]/20">
      {/* Import Serif and Sans fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;500;600;700;800&display=swap');
        .font-serif-srikrishna { font-family: 'Prata', serif; }
        .font-sans-srikrishna { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Header Announcement */}
      <div className="w-full bg-[#03221C] text-[#FCFAF2] py-2.5 px-4 border-b border-[#CCA43B]/30 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-light font-sans-srikrishna flex items-center justify-center gap-2">
          <Sparkles size={12} className="text-[#CCA43B]" />
          <span>EXPERIENCE COUTURE SOLITAIRES & RARE GEMSTONES IN BANJARA HILLS</span>
          <Sparkles size={12} className="text-[#CCA43B]" />
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#FCFAF2]/95 backdrop-blur-md border-b border-[#CCA43B]/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <span className="font-serif-srikrishna text-2xl sm:text-3xl font-normal tracking-[0.1em] text-[#03221C]">
                SRI KRISHNA
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase font-semibold text-[#CCA43B] font-sans-srikrishna mt-0.5">
                JEWELLERS • BANJARA HILLS
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-12 font-sans-srikrishna text-[10px] uppercase tracking-[0.25em] font-semibold text-[#142421]/90">
              <a href="#heritage" className="hover:text-[#CCA43B] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CCA43B] hover:after:w-full after:transition-all active:scale-95">Our Story</a>
              <a href="#customizer" className="hover:text-[#CCA43B] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CCA43B] hover:after:w-full after:transition-all active:scale-95">Diamond Customizer</a>
              <a href="#collections" className="hover:text-[#CCA43B] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CCA43B] hover:after:w-full after:transition-all active:scale-95">Couture Grid</a>
              <a href="#consultation" className="hover:text-[#CCA43B] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CCA43B] hover:after:w-full after:transition-all active:scale-95">Private Lounge</a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center px-8 py-3 bg-[#03221C] text-[#FCFAF2] hover:bg-[#CCA43B] hover:text-[#03221C] transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold active:scale-95"
              >
                Request Consultation
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#03221C] hover:text-[#CCA43B] transition-colors p-2 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-[#FCFAF2] border-b border-[#CCA43B]/20 shadow-lg px-6 py-8 flex flex-col space-y-6 font-sans-srikrishna text-xs uppercase tracking-[0.2em] font-semibold">
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#CCA43B] transition-colors py-2 border-b border-[#CCA43B]/10">Our Story</a>
            <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#CCA43B] transition-colors py-2 border-b border-[#CCA43B]/10">Diamond Customizer</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#CCA43B] transition-colors py-2 border-b border-[#CCA43B]/10">Couture Grid</a>
            <a href="#consultation" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#CCA43B] transition-colors py-2 border-b border-[#CCA43B]/10">Private Lounge</a>
            <a 
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full py-4 bg-[#03221C] text-[#FCFAF2] hover:bg-[#CCA43B] hover:text-[#03221C] transition-all text-xs uppercase tracking-widest font-bold active:scale-95"
            >
              Request Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero Header Section */}
      <header className="relative bg-[#03221C] text-[#FCFAF2] py-20 lg:py-28 overflow-hidden">
        {/* Abstract luxury glowing elements */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#047857]/15 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#CCA43B]/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Asymmetric Bold Typography */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FCFAF2]/5 border border-[#CCA43B]/30 text-[#CCA43B] text-[10px] font-sans-srikrishna tracking-[0.2em] w-fit font-bold">
                <Crown size={12} />
                <span>ELITE COUTURE DESIGNERS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif-srikrishna font-normal leading-none tracking-tight text-[#FCFAF2]">
                Architects of <br />
                <span className="italic text-[#CCA43B] font-light block mt-3">Elite Solitaires</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#FCFAF2]/80 font-sans-srikrishna leading-relaxed max-w-lg font-light">
                Positioned in the luxury district of Road No. 1, Banjara Hills, Sri Krishna Jewellers represents the cutting edge of contemporary diamond design. We select only the highest color and clarity solitaires, framing them in architectural platinum settings that balance traditional luxury with bold geometric modernity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#CCA43B] text-[#03221C] font-sans-srikrishna text-[10px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95 shadow-md shadow-[#CCA43B]/10"
                >
                  Enter Bespoke Customizer
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#consultation" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#FCFAF2]/30 hover:bg-[#FCFAF2]/5 text-[#FCFAF2] font-sans-srikrishna text-[10px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95"
                >
                  Schedule Private Viewing
                </a>
              </div>

              <div className="pt-8 flex flex-wrap gap-8 text-[#FCFAF2]/60 font-sans-srikrishna text-[10px] font-semibold uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#CCA43B]" />
                  <span>GIA Certified Solitaires</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#CCA43B]" />
                  <span>Bespoke Hand-Sketching</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Solitaire Schematic Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-[1px] bg-gradient-to-br from-[#CCA43B] to-[#03221C] shadow-2xl w-full max-w-[380px]">
                <div className="bg-[#042620] p-8 flex flex-col justify-between items-center aspect-[4/5] relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-[10px] font-sans-srikrishna tracking-[0.25em] text-[#CCA43B]/60 uppercase">
                    SKJ ARCHIVES
                  </div>
                  
                  {/* Central Ring Visual */}
                  <div className="my-auto flex flex-col items-center">
                    <div className="w-56 h-56 relative flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#CCA43B]/40 fill-none stroke-[1]">
                        {/* Blueprint grid lines */}
                        <line x1="100" y1="10" x2="100" y2="190" strokeDasharray="2,4" />
                        <line x1="10" y1="100" x2="190" y2="100" strokeDasharray="2,4" />
                        
                        {/* Solitaire ring band */}
                        <circle cx="100" cy="115" r="42" stroke="#cbd5e1" strokeWidth="2.5" />
                        <circle cx="100" cy="115" r="46" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2,2" />
                        
                        {/* Prongs */}
                        <line x1="84" y1="72" x2="90" y2="82" stroke="#CCA43B" strokeWidth="1.5" />
                        <line x1="116" y1="72" x2="110" y2="82" stroke="#CCA43B" strokeWidth="1.5" />
                        
                        {/* Diamond Gemstone Blueprint */}
                        <g transform="translate(100, 70) scale(0.95)" className="stroke-[#CCA43B] stroke-[1.2]">
                          {/* Crown */}
                          <polygon points="-24,0 24,0 16,-12 -16,-12" fill="#03221C" />
                          <line x1="-16" y1="-12" x2="0" y2="0" />
                          <line x1="16" y1="-12" x2="0" y2="0" />
                          {/* Pavilion */}
                          <polygon points="-24,0 24,0 0,24" fill="#03221C" />
                          <line x1="-24" y1="0" x2="0" y2="24" />
                          <line x1="24" y1="0" x2="0" y2="24" />
                          {/* Sparkle lines */}
                          <line x1="-30" y1="-20" x2="-22" y2="-12" strokeDasharray="1,2" />
                          <line x1="30" y1="-20" x2="22" y2="-12" strokeDasharray="1,2" />
                        </g>
                      </svg>
                    </div>
                    
                    <span className="font-serif-srikrishna text-lg tracking-[0.1em] text-[#FCFAF2] uppercase mt-2">
                      The Hope Solitaire
                    </span>
                    <span className="text-[9px] tracking-[0.3em] text-[#CCA43B] uppercase font-sans-srikrishna mt-1 font-semibold">
                      3.5 Carat Brilliant Oval
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center text-[10px] font-sans-srikrishna tracking-[0.2em] text-[#FCFAF2]/50 uppercase">
                    <span>SPECIFICATION: SEC-H</span>
                    <span>CAD 1.25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-20 bg-[#FCFAF2] text-[#142421]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Heritage Copy: Left 7 Columns */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="flex items-center gap-2 text-[#CCA43B] text-[10px] font-bold uppercase tracking-[0.25em]">
                <div className="w-8 h-[1px] bg-[#CCA43B]"></div>
                <span>LEGACY OF DIAMOND MASTERY</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-srikrishna font-normal leading-tight tracking-wide">
                Honoring the Purity <br />
                <span className="italic text-[#C5A880] font-light">of Solitary Light</span>
              </h2>

              <div className="space-y-6 text-[#142421]/80 font-sans-srikrishna text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Sri Krishna Jewellers was founded on a simple, singular obsession: to capture the absolute peak of diamond light. From our flagship showroom in Banjara Hills, we have spent four decades selecting stones that register superior brilliance, fire, and scintillation.
                </p>
                <p>
                  We are one of the few jewelers in Hyderabad with direct access to global diamond mines, ensuring that every solitaire above 0.50 carats is accompanied by a GIA certificate and an conflict-free pedigree. Our legacy is built on structural precision — crafting micro-pave claws that disappear, allowing the gemstone to float above the platinum ring.
                </p>
              </div>

              {/* Specs List */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#CCA43B]/20">
                <div className="space-y-1">
                  <h4 className="font-serif-srikrishna text-lg font-bold text-[#03221C]">D-FL Grade Only</h4>
                  <p className="text-[10px] text-slate-500 font-sans-srikrishna uppercase tracking-wider leading-relaxed">
                    We source diamonds only from colorless D to F ranges, maintaining flawless clarity.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-srikrishna text-lg font-bold text-[#03221C]">Platinum Purity</h4>
                  <p className="text-[10px] text-slate-500 font-sans-srikrishna uppercase tracking-wider leading-relaxed">
                    Our metal alloys are alloyed at PT950 standard, ensuring lifetime strength and luster.
                  </p>
                </div>
              </div>
            </div>

            {/* Asymmetric Graphic Block: Right 5 Columns */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[3/4] border-l border-b border-[#CCA43B] p-6 flex flex-col justify-end bg-gradient-to-tr from-[#FCFAF2] to-[#FAF6EE] relative">
                {/* Visual Accent */}
                <div className="absolute top-8 right-8 w-24 h-24 border border-[#CCA43B]/20 flex items-center justify-center rounded-full">
                  <Award size={24} className="text-[#CCA43B]/40" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] tracking-[0.3em] text-[#CCA43B] uppercase font-bold block">
                    FOUNDED IN HYDERABAD
                  </span>
                  <h3 className="font-serif-srikrishna text-xl text-[#03221C] leading-snug">
                    "Every diamond carries a code of light, and our role is to unlock it."
                  </h3>
                  <div className="w-10 h-[1px] bg-[#CCA43B]"></div>
                  <span className="text-[9px] tracking-[0.1em] text-slate-400 font-bold uppercase font-sans-srikrishna">
                    Sri Krishna Design Studio, Banjara Hills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Customizer */}
      <section id="customizer" className="py-20 bg-[#03221C] text-[#FCFAF2] border-t border-b border-[#CCA43B]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Sliders size={24} className="text-[#CCA43B] mb-4" />
            <h2 className="text-3xl lg:text-5xl font-serif-srikrishna text-[#FCFAF2] tracking-wide">
              Couture Solitaire Customizer
            </h2>
            <p className="text-[10px] sm:text-xs text-[#FCFAF2]/70 font-sans-srikrishna uppercase tracking-[0.25em] mt-3">
              Configure precious metals, diamond carats, and stone cuts in real time
            </p>
            <div className="w-12 h-[1px] bg-[#CCA43B] mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Customizer selectors: Left 7 Columns */}
            <div className="lg:col-span-7 bg-[#042620] p-8 border border-[#CCA43B]/30 shadow-2xl flex flex-col space-y-8">
              
              {/* Metal Selection */}
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#FCFAF2]/80 mb-4 font-sans-srikrishna">
                  1. Choose Ring Alloy
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {['Platinum', '18K Rose Gold', '22K Gold'].map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setMetalType(metal)}
                      className={`py-3 px-4 border text-center transition-all uppercase text-[9px] tracking-widest font-bold font-sans-srikrishna duration-200 active:scale-95 ${
                        metalType === metal 
                          ? 'bg-[#CCA43B] text-[#03221C] border-[#CCA43B]' 
                          : 'bg-transparent text-[#FCFAF2]/80 border-[#FCFAF2]/20 hover:border-[#CCA43B]'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gemstone Selection */}
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#FCFAF2]/80 mb-4 font-sans-srikrishna">
                  2. Choose Solitaire Gemstone
                </span>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((gem) => (
                    <button
                      key={gem}
                      onClick={() => setGemstone(gem)}
                      className={`py-3 px-2 text-center transition-all uppercase text-[9px] tracking-widest font-bold font-sans-srikrishna duration-200 active:scale-95 ${
                        gemstone === gem 
                          ? 'bg-[#CCA43B] text-[#03221C] border-[#CCA43B]' 
                          : 'bg-transparent text-[#FCFAF2]/80 border-[#FCFAF2]/20 hover:border-[#CCA43B]'
                      }`}
                    >
                      {gem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Proportions Sliders */}
              <div className="space-y-6">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#FCFAF2]/80 font-sans-srikrishna">
                  3. Customize Proportions
                </span>
                
                {/* Weight slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold font-sans-srikrishna">
                    <span>Metal Band Weight: <strong className="text-[#CCA43B]">{metalWeight}g</strong></span>
                    <span className="text-[#FCFAF2]/60">{formatCurrency(metalPrices[metalType])}/g</span>
                  </div>
                  <input 
                    type="range" 
                    min="6" 
                    max="30" 
                    value={metalWeight} 
                    onChange={(e) => setMetalWeight(Number(e.target.value))}
                    className="w-full accent-[#CCA43B] h-1 bg-[#FCFAF2]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FCFAF2]/40 font-sans-srikrishna font-semibold">
                    <span>Min (6g)</span>
                    <span>Max (30g)</span>
                  </div>
                </div>

                {/* Carat/Unit size slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold font-sans-srikrishna">
                    <span>Solitaire Carats: <strong className="text-[#CCA43B]">{gemCount}ct</strong></span>
                    <span className="text-[#FCFAF2]/60">{formatCurrency(gemstonePrices[gemstone])}/ct</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={gemCount} 
                    onChange={(e) => setGemCount(Number(e.target.value))}
                    className="w-full accent-[#CCA43B] h-1 bg-[#FCFAF2]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FCFAF2]/40 font-sans-srikrishna font-semibold">
                    <span>Min (1ct)</span>
                    <span>Max (10ct)</span>
                  </div>
                </div>
              </div>

              {/* Detailed Pricing Breakdown */}
              <div className="pt-6 border-t border-[#FCFAF2]/15 space-y-3 font-sans-srikrishna text-xs">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#FCFAF2]/80 mb-2">
                  Pricing Matrix Estimates
                </span>
                <div className="flex justify-between text-[#FCFAF2]/70">
                  <span>Alloy Cost ({metalWeight}g {metalType})</span>
                  <span className="font-semibold text-[#FCFAF2]">{formatCurrency(pricing.metalCost)}</span>
                </div>
                <div className="flex justify-between text-[#FCFAF2]/70">
                  <span>Solitaire Stone Cost ({gemCount}ct {gemstone})</span>
                  <span className="font-semibold text-[#FCFAF2]">{formatCurrency(pricing.gemCost)}</span>
                </div>
                <div className="flex justify-between text-[#FCFAF2]/70">
                  <span>Design & Making (15% Couture Craft)</span>
                  <span className="font-semibold text-[#FCFAF2]">{formatCurrency(pricing.makingCharges)}</span>
                </div>
                <div className="flex justify-between text-[#FCFAF2]/70">
                  <span>GST (3%)</span>
                  <span className="font-semibold text-[#FCFAF2]">{formatCurrency(pricing.gst)}</span>
                </div>
                <div className="flex justify-between text-base font-serif-srikrishna font-normal border-t border-[#CCA43B] pt-4 mt-2">
                  <span>Estimated Total</span>
                  <span className="text-[#CCA43B]">{formatCurrency(pricing.grandTotal)}</span>
                </div>
              </div>
            </div>

            {/* Visual Preview Card: Right 5 Columns */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="border border-[#CCA43B]/30 bg-[#042620] p-8 aspect-square relative flex items-center justify-center shadow-xl">
                {/* SVG Solitaire Visual Model */}
                <div className="w-full h-full relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full transition-all duration-300">
                    {/* Metal Shank Circle */}
                    <path 
                      d="M 60,120 A 40,40 0 1,0 140,120" 
                      fill="none" 
                      stroke={metalHex[metalType]} 
                      strokeWidth="5" 
                      className="transition-all duration-300"
                    />
                    
                    {/* Inner highlight */}
                    <path 
                      d="M 62,120 A 38,38 0 1,0 138,120" 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="1" 
                      opacity="0.3" 
                    />

                    {/* Ring Crown Base Prongs */}
                    <polygon 
                      points="92,76 108,76 105,86 95,86" 
                      fill={metalHex[metalType]} 
                      className="transition-all duration-300"
                    />

                    {/* Prongs tips */}
                    <line x1="88" y1="62" x2="94" y2="76" stroke={metalHex[metalType]} strokeWidth="2" className="transition-all duration-300" />
                    <line x1="112" y1="62" x2="106" y2="76" stroke={metalHex[metalType]} strokeWidth="2" className="transition-all duration-300" />

                    {/* DYNAMIC SOLITAIRE STONE RENDERING */}
                    {gemstone === 'Diamond' && (
                      <g className="transition-all duration-300">
                        {/* Diamond geometric facets */}
                        <polygon points="100,40 120,55 100,78 80,55" fill={gemHex.Diamond} stroke="#0284c7" strokeWidth="0.75" />
                        <polygon points="100,40 106,55 100,78 94,55" fill="#ffffff" opacity="0.6" stroke="#0284c7" strokeWidth="0.5" />
                        <polygon points="80,55 94,55 100,40" fill="#e0f2fe" opacity="0.7" stroke="#0284c7" strokeWidth="0.5" />
                        <polygon points="120,55 106,55 100,40" fill="#e0f2fe" opacity="0.7" stroke="#0284c7" strokeWidth="0.5" />
                        
                        {/* Facet lines */}
                        <line x1="100" y1="40" x2="100" y2="78" stroke="#38bdf8" strokeWidth="0.5" />
                      </g>
                    )}

                    {gemstone === 'Emerald' && (
                      <g className="transition-all duration-300">
                        {/* Emerald emerald-cut facets */}
                        <polygon points="86,42 114,42 122,50 122,68 114,76 86,76 78,68 78,50" fill={gemHex.Emerald} stroke="#064e3b" strokeWidth="1" />
                        <polygon points="90,46 110,46 116,52 116,64 110,70 90,70 84,64 84,52" fill="#059669" opacity="0.6" stroke="#064e3b" strokeWidth="0.5" />
                      </g>
                    )}

                    {gemstone === 'Ruby' && (
                      <g className="transition-all duration-300">
                        {/* Ruby teardrop facets */}
                        <path d="M 100,38 C 114,50 118,74 100,74 C 82,74 86,50 100,38 Z" fill={gemHex.Ruby} stroke="#450a0a" strokeWidth="1" />
                        <path d="M 100,44 C 108,52 110,68 100,68 C 90,68 92,52 100,44 Z" fill="#dc2626" opacity="0.6" stroke="#450a0a" strokeWidth="0.5" />
                      </g>
                    )}

                    {gemstone === 'Pearl' && (
                      <g className="transition-all duration-300">
                        {/* Pure white pearl */}
                        <circle cx="100" cy="58" r="16" fill="url(#pearlGrad)" stroke="#cbd5e1" strokeWidth="1" />
                        <circle cx="95" cy="52" r="3" fill="#ffffff" opacity="0.7" />
                      </g>
                    )}
                    
                    {/* Size scale marker */}
                    <line x1="145" y1="40" x2="145" y2="78" stroke="#CCA43B" strokeWidth="0.75" strokeDasharray="2,2" />
                    <text x="150" y="62" fill="#CCA43B" fontSize="8" fontFamily="sans-serif" className="font-bold">
                      {gemCount} CT
                    </text>
                  </svg>
                </div>
              </div>
              <div className="bg-[#CCA43B] text-[#03221C] p-4 text-center text-[10px] uppercase tracking-[0.25em] font-bold font-sans-srikrishna">
                Interactive Solitaire Vector Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-20 bg-[#FCFAF2] text-[#142421]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Gem size={24} className="text-[#CCA43B] mb-4" />
            <h2 className="text-3xl lg:text-5xl font-serif-srikrishna text-[#03221C] tracking-wide">
              The Couture Collections
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-500 font-sans-srikrishna uppercase tracking-[0.25em] mt-3">
              Contemporary Diamond Masterpieces of Banjara Hills
            </p>
            <div className="w-12 h-[1px] bg-[#CCA43B] mt-6"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "The Solitaire Hope Ring",
                category: "Couture Rings",
                price: "₹6,40,000",
                desc: "An architectural PT950 platinum ring mounting a brilliant D-color FL solitaire diamond of 3.5 carats, detailed with micro-pave shank stones.",
                img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Banjara Hills Royal Choker",
                category: "Couture Necklaces",
                price: "₹24,50,000",
                desc: "High-contrast 18K white gold choker studded with 24 carats of brilliant baguette diamonds and dangling pear-shaped Zambian emeralds.",
                img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Nizam\'s Star Ear-studs",
                category: "Solitaire Studs",
                price: "₹4,10,000",
                desc: "Classic round-cut solitaire diamonds surrounded by a delicate double halo of brilliant micro-gems, designed for understated nobility.",
                img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "The Jubilee Emerald Loop",
                category: "Modern Necklaces",
                price: "₹14,90,000",
                desc: "Asymmetrical platinum necklet featuring looping diamond ribbons accented by a single rare oval rubellite and large pear emerald drop.",
                img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600"
              }
            ].map((prod, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-[#FCFAF2] border border-[#CCA43B]/20 hover:border-[#03221C] transition-all duration-300 hover:shadow-lg rounded-sm"
              >
                {/* Mock Image Placeholder */}
                <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-[#03221C]/5 mix-blend-multiply z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-[#03221C] text-[#FCFAF2] text-[8px] uppercase tracking-widest px-3 py-1 font-sans-srikrishna font-semibold">
                    {prod.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif-srikrishna text-lg text-[#03221C] leading-snug group-hover:text-[#CCA43B] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans-srikrishna leading-relaxed line-clamp-3">
                      {prod.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-[#CCA43B]/20 flex items-center justify-between mt-6">
                    <span className="text-sm font-serif-srikrishna font-bold text-[#03221C]">{prod.price}</span>
                    <a 
                      href="#consultation" 
                      className="inline-flex items-center text-[9px] uppercase tracking-widest font-bold text-[#CCA43B] hover:text-[#03221C] transition-colors active:scale-95"
                    >
                      Inquire
                      <ChevronRight size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#03221C] text-[#FCFAF2] border-t border-[#CCA43B]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <MessageSquare size={24} className="text-[#CCA43B] mb-4" />
            <h2 className="text-3xl lg:text-5xl font-serif-srikrishna text-[#FCFAF2] tracking-wide">
              Patron Testimonials
            </h2>
            <p className="text-[10px] sm:text-xs text-[#FCFAF2]/70 font-sans-srikrishna uppercase tracking-[0.25em] mt-3">
              Couture reviews from our Banjara Hills clientele
            </p>
            <div className="w-12 h-[1px] bg-[#CCA43B] mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                review: "The solitaire selection at Sri Krishna is unmatched in Hyderabad. We customized an 18K rose gold ring with a flawless VVS1 emerald-cut diamond. The clarity and sparkle are otherworldly.",
                author: "Preethi Rao",
                loc: "Banjara Hills, Hyderabad"
              },
              {
                review: "I visited their Banjara Hills lounge for my wedding jewelry. The designer sat down with us and sketched a custom diamond choker from scratch. Exceptional premium service.",
                author: "K. Rajeshwar",
                loc: "Jubilee Hills, Hyderabad"
              },
              {
                review: "Having bought gold from them for years, I tried their virtual design consultation recently. The level of detail in their CAD models and pricing transparency is wonderful. A truly premium experience.",
                author: "Srimanthi Devi",
                loc: "Gachibowli, Hyderabad"
              }
            ].map((test, idx) => (
              <div 
                key={idx}
                className="p-8 border border-[#CCA43B]/20 bg-[#042620] rounded-sm flex flex-col justify-between space-y-6 hover:border-[#CCA43B] transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#CCA43B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#CCA43B" stroke="none" />)}
                </div>
                <p className="text-xs sm:text-sm text-[#FCFAF2]/80 font-sans-srikrishna italic leading-relaxed font-light">
                  "{test.review}"
                </p>
                <div className="flex flex-col border-t border-[#CCA43B]/20 pt-4 font-sans-srikrishna">
                  <span className="text-xs font-bold text-[#FCFAF2]">{test.author}</span>
                  <span className="text-[9px] text-[#FCFAF2]/50 font-medium">{test.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Consultation Form */}
      <section id="consultation" className="py-20 bg-[#FCFAF2] text-[#142421]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border border-[#CCA43B]/30 p-8 sm:p-12 bg-[#FCFAF2] shadow-xl relative">
            
            {/* Corner styling brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#03221C]"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#03221C]"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#03221C]"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#03221C]"></div>

            <div className="text-center mb-10 flex flex-col items-center">
              <Calendar size={28} className="text-[#CCA43B] mb-2" />
              <h2 className="text-2xl sm:text-3xl font-serif-srikrishna text-[#03221C] tracking-wide">
                Virtual Design Consultation
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mt-2">
                Connect with our head designer in Banjara Hills
              </p>
            </div>

            {submittedData ? (
              <div className="p-8 bg-[#03221C]/5 border border-[#03221C]/25 text-center space-y-6">
                <CheckCircle2 size={48} className="text-[#03221C] mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-serif-srikrishna text-xl font-bold">Lounge Consultation Scheduled</h3>
                  <p className="text-xs text-slate-500 font-sans-srikrishna">
                    Your luxury advisory session has been booked. A dedicated designer will reach out shortly.
                  </p>
                </div>
                <div className="p-4 bg-[#FCFAF2] border border-[#CCA43B]/20 inline-block font-sans-srikrishna text-xs text-left space-y-1">
                  <div><strong>Booking ID:</strong> <span className="text-[#CCA43B] font-bold">{submittedData.id}</span></div>
                  <div><strong>Patron Name:</strong> {submittedData.name}</div>
                  <div><strong>Preferred Date:</strong> {submittedData.date}</div>
                  <div><strong>Collection:</strong> {submittedData.interest}</div>
                </div>
                <div>
                  <button 
                    onClick={() => setSubmittedData(null)}
                    className="px-6 py-2 border border-[#03221C] hover:bg-[#03221C] hover:text-[#FCFAF2] text-[#03221C] text-[9px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95"
                  >
                    Book Another Lounge Slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-sans-srikrishna text-xs">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block uppercase tracking-[0.15em] font-bold text-[#03221C]">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#FCFAF2] border border-[#CCA43B]/30 focus:border-[#03221C] p-4 text-[#03221C] outline-none transition-all text-xs"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-600 font-semibold mt-1">{errors.name}</p>}
                </div>

                {/* Phone & Email Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block uppercase tracking-[0.15em] font-bold text-[#03221C]">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#FCFAF2] border border-[#CCA43B]/30 focus:border-[#03221C] p-4 text-[#03221C] outline-none transition-all text-xs"
                      placeholder="e.g. +91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-600 font-semibold mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block uppercase tracking-[0.15em] font-bold text-[#03221C]">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#FCFAF2] border border-[#CCA43B]/30 focus:border-[#03221C] p-4 text-[#03221C] outline-none transition-all text-xs"
                      placeholder="patron@example.com"
                    />
                    {errors.email && <p className="text-red-600 font-semibold mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Date & Interest Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block uppercase tracking-[0.15em] font-bold text-[#03221C]">
                      Preferred Date *
                    </label>
                    <input 
                      type="date" 
                      id="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-[#FCFAF2] border border-[#CCA43B]/30 focus:border-[#03221C] p-4 text-[#03221C] outline-none transition-all text-xs"
                    />
                    {errors.date && <p className="text-red-600 font-semibold mt-1">{errors.date}</p>}
                  </div>

                  {/* Interest */}
                  <div className="space-y-2">
                    <label htmlFor="interest" className="block uppercase tracking-[0.15em] font-bold text-[#03221C]">
                      Collection of Interest
                    </label>
                    <select 
                      id="interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-[#FCFAF2] border border-[#CCA43B]/30 focus:border-[#03221C] p-4 text-[#03221C] outline-none transition-all text-xs appearance-none cursor-pointer"
                    >
                      <option>Couture Solitaires</option>
                      <option>Zambian Emerald Rings</option>
                      <option>Diamond Halo Studs</option>
                      <option>Custom Bridal Layouts</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block uppercase tracking-[0.15em] font-bold text-[#03221C]">
                    Design Requests / Custom Notes
                  </label>
                  <textarea 
                    id="notes"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows="4"
                    className="w-full bg-[#FCFAF2] border border-[#CCA43B]/30 focus:border-[#03221C] p-4 text-[#03221C] outline-none transition-all text-xs resize-none"
                    placeholder="Describe custom diamond specifications, carat sizes, metal profiles..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#03221C] text-[#FCFAF2] hover:bg-[#CCA43B] hover:text-[#03221C] disabled:bg-[#03221C]/50 uppercase tracking-[0.2em] font-bold transition-all active:scale-95 duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={14} className="animate-spin text-[#CCA43B]" />
                        <span>Verifying Availability...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} className="text-[#CCA43B]" />
                        <span>Request Couture Consultation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#03221C] text-[#FCFAF2] border-t border-[#CCA43B]/30 pt-16 pb-12 font-sans-srikrishna">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 border-b border-[#CCA43B]/20 pb-12">
          {/* Brand Info */}
          <div className="space-y-4 text-left">
            <h3 className="font-serif-srikrishna text-xl font-normal tracking-[0.1em] text-[#FCFAF2]">
              SRI KRISHNA JEWELLERS
            </h3>
            <p className="text-xs text-[#FCFAF2]/60 leading-relaxed font-light">
              Pioneers of GIA certified solitaires and couture jewelry design. Our Banjara Hills showroom houses Hyderabad's most exclusive private viewing lounge.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[#CCA43B]/30 flex items-center justify-center text-[#CCA43B] hover:bg-[#CCA43B] hover:text-[#03221C] transition-colors active:scale-95">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#CCA43B]/30 flex items-center justify-center text-[#CCA43B] hover:bg-[#CCA43B] hover:text-[#03221C] transition-colors active:scale-95">
                <MapPin size={14} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-[#CCA43B]">
              Banjara Hills Lounge
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#CCA43B] shrink-0 mt-0.5" />
                <span className="text-[#FCFAF2]/80 leading-relaxed">
                  Road No. 1, Banjara Hills, Hyderabad, Telangana 500034.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#CCA43B]" />
                <a href="tel:+914066250001" className="text-[#FCFAF2]/80 hover:text-[#CCA43B] transition-colors">
                  +91 40 6625 0001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#CCA43B]" />
                <a href="mailto:service@srikrishna.com" className="text-[#FCFAF2]/80 hover:text-[#CCA43B] transition-colors">
                  service@srikrishna.com
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-[#CCA43B]">
              Lounge Timings
            </h4>
            <ul className="space-y-3 text-xs text-[#FCFAF2]/80 font-light">
              <li className="flex items-center justify-between border-b border-[#CCA43B]/10 pb-2">
                <span>Monday - Saturday:</span>
                <span className="font-semibold">10:30 AM - 8:00 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#CCA43B]/10 pb-2">
                <span>Sunday:</span>
                <span className="font-semibold">11:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center gap-2 text-[10px] text-[#FCFAF2]/50 pt-2 uppercase tracking-wide">
                <Clock size={12} />
                <span>Private viewings strictly by reservation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#FCFAF2]/40 uppercase tracking-widest gap-4">
          <span>© 2026 Sri Krishna Jewellers. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#CCA43B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#CCA43B] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

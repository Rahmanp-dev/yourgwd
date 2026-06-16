"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Gem, Crown, Sliders, 
  MessageSquare, Heart, Share2, Instagram, ArrowRight, Shield, Check, 
  ArrowLeft, Video, Calendar, UserCircle, CheckCircle2, ChevronDown, 
  Eye, ShieldCheck, ShoppingBag, Menu, X 
} from 'lucide-react';

export default function ManepallyJewellersPage() {
  // Navigation Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Customizer State
  const [metalType, setMetalType] = useState('22K Gold');
  const [gemstone, setGemstone] = useState('Emerald');
  const [metalWeight, setMetalWeight] = useState(32); // in grams
  const [gemCount, setGemCount] = useState(6); // carats/units

  // Pricing configuration for Manepally (Heritage Indian Jewelry rates)
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
    '22K Gold': '#d4af37',
    '18K Rose Gold': '#e0a39a',
    'Platinum': '#e5e4e2'
  };

  // Gem colors for rendering
  const gemHex = {
    'Diamond': '#e0f2fe',
    'Emerald': '#047857',
    'Ruby': '#dc2626',
    'Pearl': '#f1f5f9'
  };

  const calculatePricing = () => {
    const metalCost = metalWeight * metalPrices[metalType];
    const gemCost = gemCount * gemstonePrices[gemstone];
    const subtotal = metalCost + gemCost;
    const makingCharges = Math.round(subtotal * 0.12); // 12% making charges
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
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', interest: 'Temple Necklaces', notes: '' });
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
        id: `MNP-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
      // Clear form
      setForm({ name: '', phone: '', email: '', date: '', interest: 'Temple Necklaces', notes: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#063B30] font-sans antialiased selection:bg-[#D4AF37]/20">
      {/* Import Serif and Sans fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-serif-manepally { font-family: 'Cinzel', serif; }
        .font-sans-manepally { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Header Announcement */}
      <div className="w-full bg-[#063B30] text-[#FDFBF7] py-2 px-4 border-b border-[#D4AF37]/30 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light font-sans-manepally flex items-center justify-center gap-2">
          <Sparkles size={12} className="text-[#D4AF37]" />
          <span>Exquisite Nizami Craftsmanship — Secunderabad Legacy Since 1890</span>
          <Sparkles size={12} className="text-[#D4AF37]" />
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#C5A880]/30 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <span className="font-serif-manepally text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-[0.15em] text-[#063B30]">
                MANEPALLY
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium text-[#C5A880] font-sans-manepally mt-0.5">
                JEWELLERS • GENERAL BAZAR
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-10 font-sans-manepally text-xs uppercase tracking-widest font-semibold text-[#063B30]/90">
              <a href="#heritage" className="hover:text-[#D4AF37] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all active:scale-95">Heritage</a>
              <a href="#customizer" className="hover:text-[#D4AF37] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all active:scale-95">Bespoke Design</a>
              <a href="#collections" className="hover:text-[#D4AF37] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all active:scale-95">Collections</a>
              <a href="#consultation" className="hover:text-[#D4AF37] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all active:scale-95">Consultation</a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center px-6 py-3 border border-[#063B30] text-[#063B30] hover:bg-[#063B30] hover:text-[#FDFBF7] transition-all duration-300 text-xs uppercase tracking-widest font-bold active:scale-95"
              >
                Book Private Viewing
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#063B30] hover:text-[#D4AF37] transition-colors p-2 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-[#FDFBF7] border-b border-[#C5A880]/30 shadow-lg px-6 py-8 flex flex-col space-y-6 font-sans-manepally text-sm uppercase tracking-widest font-semibold">
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors py-2 border-b border-[#C5A880]/10">Heritage</a>
            <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors py-2 border-b border-[#C5A880]/10">Bespoke Design</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors py-2 border-b border-[#C5A880]/10">Collections</a>
            <a href="#consultation" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors py-2 border-b border-[#C5A880]/10">Consultation</a>
            <a 
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full py-4 bg-[#063B30] text-[#FDFBF7] hover:bg-[#063B30]/90 transition-all text-xs uppercase tracking-widest font-bold active:scale-95"
            >
              Book Private Viewing
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 lg:py-24 overflow-hidden border-b border-[#C5A880]/20 bg-[#fbf9f4]">
        {/* Subtle decorative background watermark */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] border-4 border-[#063B30] rounded-full flex items-center justify-center">
            <div className="w-[600px] h-[600px] border border-[#063B30] rounded-full flex items-center justify-center">
              <span className="font-serif-manepally text-9xl tracking-[0.1em]">M</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#063B30]/5 border border-[#C5A880]/40 text-[#063B30] text-xs font-sans-manepally tracking-widest w-fit mx-auto lg:mx-0 font-medium">
                <Crown size={12} className="text-[#D4AF37]" />
                <span>NIZAMI BRIDAL SAVOIR-FAIRE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif-manepally font-semibold leading-tight text-[#063B30] tracking-wide">
                The Heritage <br />
                <span className="italic font-light text-[#C5A880] block mt-1">of Royal Kundan</span>
              </h1>
              <p className="text-sm sm:text-base text-[#2E4E47] font-sans-manepally leading-relaxed max-w-xl mx-auto lg:mx-0">
                Deep within the bustling lanes of General Bazar, Secunderabad, lies a legacy of gold and gems. For generations, Manepally has dressed brides in rare Basra pearls, antique Nakshi craft, and hand-chiseled temple necklaces that capture the majesty of the Nizam's golden age.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#063B30] hover:bg-[#0d3a2e] text-[#FDFBF7] font-sans-manepally text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 shadow-md shadow-[#063B30]/10"
                >
                  Configure Custom Bridal Set
                  <ArrowRight size={14} className="ml-2 text-[#D4AF37]" />
                </a>
                <a 
                  href="#consultation" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#C5A880] hover:bg-[#063B30]/5 text-[#063B30] font-sans-manepally text-xs uppercase tracking-widest font-semibold transition-all active:scale-95"
                >
                  Virtual Consultation
                </a>
              </div>

              <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-[#C5A880] font-sans-manepally text-xs font-semibold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#D4AF37]" />
                  <span>NABL Hallmark Gold</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#D4AF37]" />
                  <span>Insured Secure Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Double-Border Visual Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-4 border-double border-4 border-[#C5A880] bg-[#FDFBF7] shadow-xl w-full max-w-[420px]">
                <div className="border border-[#C5A880]/30 p-6 flex flex-col justify-between items-center bg-[#fbf9f4] aspect-[3/4] relative overflow-hidden">
                  {/* Classical Dome Arch Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg viewBox="0 0 100 130" className="w-full h-full fill-none stroke-[#063B30] stroke-[0.5]">
                      <path d="M 10 120 L 10 50 C 10 20, 90 20, 90 50 L 90 120" />
                    </svg>
                  </div>
                  
                  {/* Mughal arch framing accents */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#D4AF37]"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#D4AF37]"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#D4AF37]"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#D4AF37]"></div>
                  
                  <div className="w-full flex justify-between items-center text-[10px] text-[#C5A880] tracking-widest uppercase font-semibold font-sans-manepally">
                    <span>Authentic Craft</span>
                    <span>Est. 1890</span>
                  </div>

                  {/* Central Jewelry Line Art Silhouette */}
                  <div className="my-auto flex flex-col items-center py-6">
                    <div className="w-48 h-48 relative flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#063B30] fill-none stroke-[1.5]">
                        {/* Necklace arch base */}
                        <path d="M 40,70 A 60,60 0 0,0 160,70" />
                        <path d="M 50,70 A 50,50 0 0,0 150,70" strokeDasharray="3,3" />
                        
                        {/* Hanging pearls */}
                        <circle cx="100" cy="130" r="10" fill="#FDFBF7" className="stroke-[#063B30] stroke-[1]" />
                        <circle cx="75" cy="118" r="8" fill="#FDFBF7" className="stroke-[#063B30] stroke-[1]" />
                        <circle cx="125" cy="118" r="8" fill="#FDFBF7" className="stroke-[#063B30] stroke-[1]" />
                        <circle cx="58" cy="98" r="6" fill="#FDFBF7" className="stroke-[#063B30] stroke-[1]" />
                        <circle cx="142" cy="98" r="6" fill="#FDFBF7" className="stroke-[#063B30] stroke-[1]" />
                        
                        {/* Intricate royal drop elements */}
                        <path d="M 100,140 L 100,165 L 95,160 Z" fill="#D4AF37" className="stroke-[#063B30] stroke-[1]" />
                        <path d="M 75,126 L 75,145 L 71,141 Z" fill="#D4AF37" className="stroke-[#063B30] stroke-[1]" />
                        <path d="M 125,126 L 125,145 L 129,141 Z" fill="#D4AF37" className="stroke-[#063B30] stroke-[1]" />
                      </svg>
                    </div>
                    <span className="font-serif-manepally text-lg tracking-[0.2em] uppercase text-[#063B30] text-center mt-4">
                      The Empress Choker
                    </span>
                    <span className="text-[10px] tracking-[0.1em] text-slate-500 uppercase font-sans-manepally mt-1">
                      Kundan & Uncut Emeralds
                    </span>
                  </div>

                  <div className="w-full text-center">
                    <span className="text-xs font-serif-manepally italic text-[#C5A880]">
                      General Bazar Showroom Collection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-20 bg-[#063B30] text-[#FDFBF7] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Architectural Mughal Arch Visual */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[450px] aspect-[4/5] border border-[#D4AF37]/40 p-4 bg-[#0a3a2f]">
                <div className="w-full h-full border border-[#D4AF37]/20 flex flex-col justify-center items-center p-8 relative overflow-hidden bg-gradient-to-b from-[#063B30] to-[#04261f]">
                  {/* Clip-path Mughal Arch inside */}
                  <div className="absolute inset-0 bg-[#062c23] opacity-50" style={{
                    clipPath: 'polygon(50% 0%, 85% 15%, 85% 100%, 15% 100%, 15% 15%)'
                  }}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <Crown size={32} className="text-[#D4AF37] animate-pulse" />
                    <h3 className="font-serif-manepally text-2xl tracking-wider text-[#FDFBF7]">The Royal Vault</h3>
                    <p className="text-xs text-[#FDFBF7]/70 font-sans-manepally leading-relaxed max-w-xs">
                      Witness our archival collections dating back to the late 19th century, preserved in Secunderabad's most iconic showroom.
                    </p>
                    <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
                    <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-bold">
                      SINCE 1890
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Heritage Copy */}
            <div className="flex flex-col space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-[#C5A880] text-xs font-semibold uppercase tracking-widest">
                <div className="w-6 h-[1px] bg-[#C5A880]"></div>
                <span>Secunderabad\'s Golden Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-manepally text-[#FDFBF7] tracking-wider leading-snug">
                Custodians of <br />
                <span className="italic font-light text-[#D4AF37]">Nizami Craftsmanship</span>
              </h2>
              <div className="space-y-6 text-[#FDFBF7]/80 font-sans-manepally text-sm sm:text-base leading-relaxed">
                <p>
                  Passed down through three generations of master goldsmiths, Manepally has preserved the precise ancient methodologies of Kundan setting, Nakshi engraving, and Jadau embedding. Each design is conceived from raw 22-karat gold, hand-burnished to retrieve the authentic deep glow of historical jewelry.
                </p>
                <p>
                  Our workshop in Secunderabad brings together the finest karigars (craftsmen) who have spent decades perfecting the intricate deities of Nakshi art and the delicate floral meshwork of traditional Hyderabadi chokers.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#D4AF37]/20">
                <div>
                  <h4 className="font-serif-manepally text-2xl lg:text-3xl font-bold text-[#D4AF37]">135+</h4>
                  <p className="text-[10px] text-[#FDFBF7]/60 tracking-wider uppercase font-sans-manepally mt-1">Years of Legacy</p>
                </div>
                <div>
                  <h4 className="font-serif-manepally text-2xl lg:text-3xl font-bold text-[#D4AF37]">22K</h4>
                  <p className="text-[10px] text-[#FDFBF7]/60 tracking-wider uppercase font-sans-manepally mt-1">Guaranteed Purity</p>
                </div>
                <div>
                  <h4 className="font-serif-manepally text-2xl lg:text-3xl font-bold text-[#D4AF37]">15k+</h4>
                  <p className="text-[10px] text-[#FDFBF7]/60 tracking-wider uppercase font-sans-manepally mt-1">Bridal Heirlooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Customizer */}
      <section id="customizer" className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Sliders size={24} className="text-[#C5A880] mb-4" />
            <h2 className="text-3xl lg:text-5xl font-serif-manepally text-[#063B30] tracking-wide">
              Bespoke Jewelry Customizer
            </h2>
            <p className="text-xs sm:text-sm text-[#2E4E47] font-sans-manepally uppercase tracking-widest mt-3">
              Configure metal, gemstone, and proportions to visualize your royal bridal design
            </p>
            <div className="w-12 h-[1px] bg-[#C5A880] mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Selectors and Pricing: Left 7 Columns */}
            <div className="lg:col-span-7 bg-[#fbf9f4] p-8 border border-[#C5A880]/30 shadow-sm flex flex-col space-y-8">
              
              {/* Metal Selection */}
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold text-[#063B30] mb-4 font-sans-manepally">
                  1. Select Precious Metal
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {['22K Gold', '18K Rose Gold', 'Platinum'].map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setMetalType(metal)}
                      className={`py-3 px-4 border text-center transition-all uppercase text-[10px] tracking-widest font-bold font-sans-manepally duration-200 active:scale-95 ${
                        metalType === metal 
                          ? 'bg-[#063B30] text-[#FDFBF7] border-[#063B30]' 
                          : 'bg-[#FDFBF7] text-[#063B30]/75 border-[#C5A880]/40 hover:border-[#063B30]'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gemstone Selection */}
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold text-[#063B30] mb-4 font-sans-manepally">
                  2. Select Center Gemstone
                </span>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((gem) => (
                    <button
                      key={gem}
                      onClick={() => setGemstone(gem)}
                      className={`py-3 px-2 text-center transition-all uppercase text-[10px] tracking-widest font-bold font-sans-manepally duration-200 active:scale-95 ${
                        gemstone === gem 
                          ? 'bg-[#063B30] text-[#FDFBF7] border-[#063B30]' 
                          : 'bg-[#FDFBF7] text-[#063B30]/75 border-[#C5A880]/40 hover:border-[#063B30]'
                      }`}
                    >
                      {gem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Proportions Sliders */}
              <div className="space-y-6">
                <span className="block text-xs uppercase tracking-widest font-bold text-[#063B30] font-sans-manepally">
                  3. Adjust Proportions
                </span>
                
                {/* Weight slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold font-sans-manepally">
                    <span>Metal Weight: <strong className="text-[#D4AF37]">{metalWeight}g</strong></span>
                    <span className="text-[#C5A880]">{formatCurrency(metalPrices[metalType])}/g</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={metalWeight} 
                    onChange={(e) => setMetalWeight(Number(e.target.value))}
                    className="w-full accent-[#063B30] h-1 bg-[#C5A880]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-sans-manepally font-medium">
                    <span>Min (10g)</span>
                    <span>Max (100g)</span>
                  </div>
                </div>

                {/* Carat/Unit size slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold font-sans-manepally">
                    <span>Gemstone Carats: <strong className="text-[#D4AF37]">{gemCount}ct</strong></span>
                    <span className="text-[#C5A880]">{formatCurrency(gemstonePrices[gemstone])}/ct</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={gemCount} 
                    onChange={(e) => setGemCount(Number(e.target.value))}
                    className="w-full accent-[#063B30] h-1 bg-[#C5A880]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-sans-manepally font-medium">
                    <span>Min (1ct)</span>
                    <span>Max (20ct)</span>
                  </div>
                </div>
              </div>

              {/* Detailed Pricing Breakdown */}
              <div className="pt-6 border-t border-[#C5A880]/30 space-y-3 font-sans-manepally text-xs">
                <span className="block text-xs uppercase tracking-widest font-bold text-[#063B30] mb-2">
                  Estimated Pricing Details
                </span>
                <div className="flex justify-between">
                  <span className="text-slate-500">Base Metal Cost ({metalWeight}g {metalType})</span>
                  <span className="font-semibold text-[#063B30]">{formatCurrency(pricing.metalCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gemstone Cost ({gemCount}ct {gemstone})</span>
                  <span className="font-semibold text-[#063B30]">{formatCurrency(pricing.gemCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Making Charges (12% Antique Karigari)</span>
                  <span className="font-semibold text-[#063B30]">{formatCurrency(pricing.makingCharges)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">GST (3%)</span>
                  <span className="font-semibold text-[#063B30]">{formatCurrency(pricing.gst)}</span>
                </div>
                <div className="flex justify-between text-base font-serif-manepally font-bold border-t border-double border-[#C5A880] pt-4 mt-2">
                  <span>Grand Total (Est.)</span>
                  <span className="text-[#D4AF37]">{formatCurrency(pricing.grandTotal)}</span>
                </div>
              </div>
            </div>

            {/* Visual Preview Card: Right 5 Columns */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="border border-[#C5A880]/30 bg-[#fbf9f4] p-8 aspect-square relative flex items-center justify-center shadow-lg">
                {/* SVG Visual Model */}
                <div className="w-full h-full relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full transition-all duration-300">
                    <defs>
                      <radialGradient id="pearlGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#cbd5e1" />
                      </radialGradient>
                    </defs>
                    
                    {/* Metal Neck Loop base */}
                    <path 
                      d="M 40,60 A 65,65 0 0,0 160,60" 
                      fill="none" 
                      stroke={metalHex[metalType]} 
                      strokeWidth="6" 
                      className="transition-all duration-300" 
                    />
                    
                    {/* Inner gold chain highlights */}
                    <path 
                      d="M 50,60 A 55,55 0 0,0 150,60" 
                      fill="none" 
                      stroke={metalType === '22K Gold' ? '#f59e0b' : '#ffffff'} 
                      strokeWidth="1.5" 
                      strokeDasharray="4,4" 
                      className="transition-all duration-300"
                    />

                    {/* Pendant hanging link */}
                    <rect 
                      x="97" 
                      y="110" 
                      width="6" 
                      height="12" 
                      fill={metalHex[metalType]} 
                      className="transition-all duration-300"
                    />

                    {/* DYNAMIC GEMSTONE RENDERING */}
                    {gemstone === 'Diamond' && (
                      <g className="transition-all duration-300">
                        {/* Diamond Gem */}
                        <polygon 
                          points="100,122 118,135 100,158 82,135" 
                          fill={gemHex.Diamond} 
                          stroke="#cbd5e1" 
                          strokeWidth="1" 
                        />
                        <polygon 
                          points="100,122 106,135 100,158 94,135" 
                          fill="#ffffff" 
                          opacity="0.6" 
                        />
                        {/* Sparkle icons */}
                        <path d="M 75,140 L 77,143 L 80,140 L 77,137 Z" fill="#e0f2fe" />
                        <path d="M 125,145 L 127,148 L 130,145 L 127,142 Z" fill="#e0f2fe" />
                      </g>
                    )}

                    {gemstone === 'Emerald' && (
                      <g className="transition-all duration-300">
                        {/* Emerald Octagon Gem */}
                        <polygon 
                          points="92,122 108,122 118,132 118,146 108,156 92,156 82,146 82,132" 
                          fill={gemHex.Emerald} 
                          stroke="#022c22" 
                          strokeWidth="1.5" 
                        />
                        {/* Inner reflection facets */}
                        <polygon 
                          points="95,127 105,127 112,134 112,144 105,151 95,151 88,144 88,134" 
                          fill="#059669" 
                          opacity="0.5" 
                        />
                      </g>
                    )}

                    {gemstone === 'Ruby' && (
                      <g className="transition-all duration-300">
                        {/* Ruby teardrop shape */}
                        <path 
                          d="M 100,120 C 115,135 118,158 100,158 C 82,158 85,135 100,120 Z" 
                          fill={gemHex.Ruby} 
                          stroke="#450a0a" 
                          strokeWidth="1.5" 
                        />
                        {/* Inner facet */}
                        <path 
                          d="M 100,125 C 109,136 110,151 100,151 C 90,151 91,136 100,125 Z" 
                          fill="#f87171" 
                          opacity="0.4" 
                        />
                      </g>
                    )}

                    {gemstone === 'Pearl' && (
                      <g className="transition-all duration-300">
                        {/* Basra Pearl Spherical Gem */}
                        <circle 
                          cx="100" 
                          cy="138" 
                          r="18" 
                          fill="url(#pearlGrad)" 
                          stroke="#94a3b8" 
                          strokeWidth="1" 
                        />
                        <circle cx="94" cy="132" r="3" fill="#ffffff" opacity="0.6" />
                      </g>
                    )}

                    {/* Decorative gold micro-stones along necklace arch */}
                    <circle cx="58" cy="67" r="3" fill="#C5A880" />
                    <circle cx="72" cy="76" r="3" fill="#C5A880" />
                    <circle cx="88" cy="83" r="3" fill="#C5A880" />
                    <circle cx="100" cy="85" r="4" fill={gemHex[gemstone]} />
                    <circle cx="112" cy="83" r="3" fill="#C5A880" />
                    <circle cx="128" cy="76" r="3" fill="#C5A880" />
                    <circle cx="142" cy="67" r="3" fill="#C5A880" />
                  </svg>
                </div>
              </div>
              <div className="bg-[#063B30] text-[#FDFBF7] p-4 text-center text-xs uppercase tracking-widest font-bold font-sans-manepally">
                Dynamic Specimen Visualization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collections" className="py-20 bg-[#fbf9f4] border-t border-b border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Gem size={24} className="text-[#C5A880] mb-4" />
            <h2 className="text-3xl lg:text-5xl font-serif-manepally text-[#063B30] tracking-wide">
              The Signature Collections
            </h2>
            <p className="text-xs sm:text-sm text-[#2E4E47] font-sans-manepally uppercase tracking-widest mt-3">
              Imperial Masterpieces from our Secunderabad Vaults
            </p>
            <div className="w-12 h-[1px] bg-[#C5A880] mt-6"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "The Nizam\'s Empress Choker",
                category: "Bridal Jadau",
                price: "₹18,50,000",
                desc: "An elaborate choker of 22K gold encrusted with uncut diamonds (polki) and deep green Colombian cabochon emeralds, inspired by Nizami royal portraiture.",
                img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Devi Temple Nakshi Necklace",
                category: "Antique Nakshi",
                price: "₹12,40,000",
                desc: "Handcrafted Nakshi gold work representing Goddess Lakshmi, adorned with deep-hued rubies, raw diamonds, and South Sea hanging pearl clusters.",
                img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Basra Pearl Panchlada String",
                category: "Heritage Pearls",
                price: "₹8,90,000",
                desc: "Five rows of perfectly matched Basra seed pearls, anchored by custom gold side-scroll clasps detailed in fine red enamel (meenakari).",
                img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Kundan Peacock Kada",
                category: "Handcrafted Bangles",
                price: "₹5,20,000",
                desc: "Stiff gold kadas showcasing peacock motifs encrusted with white kundan glass stones and finished with delicate ruby pave work.",
                img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600"
              }
            ].map((prod, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-[#FDFBF7] border border-[#C5A880]/30 hover:border-[#063B30] transition-all duration-300 hover:shadow-lg rounded-sm"
              >
                {/* Mock Image Placeholder */}
                <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-[#063B30]/5 mix-blend-multiply z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-[#063B30] text-[#FDFBF7] text-[9px] uppercase tracking-widest px-3 py-1 font-sans-manepally font-semibold">
                    {prod.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif-manepally text-lg font-bold text-[#063B30] leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#2E4E47] font-sans-manepally leading-relaxed line-clamp-3">
                      {prod.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-[#C5A880]/20 flex items-center justify-between mt-6">
                    <span className="text-sm font-serif-manepally font-bold text-[#063B30]">{prod.price}</span>
                    <a 
                      href="#consultation" 
                      className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] hover:text-[#063B30] transition-colors active:scale-95"
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
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <MessageSquare size={24} className="text-[#C5A880] mb-4" />
            <h2 className="text-3xl lg:text-5xl font-serif-manepally text-[#063B30] tracking-wide">
              Customer Stories
            </h2>
            <p className="text-xs sm:text-sm text-[#2E4E47] font-sans-manepally uppercase tracking-widest mt-3">
              True accounts from our Hyderabad patrons
            </p>
            <div className="w-12 h-[1px] bg-[#C5A880] mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                review: "We bought my daughter's bridal choker from the General Bazar showroom. The craftsmanship of the antique kundan and emerald setting is incomparable. It felt like owning a piece of the Nizam's treasury.",
                author: "Ananya Reddy",
                loc: "Jubilee Hills, Hyderabad"
              },
              {
                review: "Manepally has been our family jeweler for three generations. The custom service we received for the 22K gold temple necklace was exemplary. They listened to our design preferences patiently.",
                author: "Venkat Ramana",
                loc: "Secunderabad"
              },
              {
                review: "The virtual design consultation was surprisingly seamless. I could choose the ruby size and metal options from home before coming in for the final fitting. Highly recommend their bespoke services.",
                author: "Dr. Srinivas Rao",
                loc: "Madhapur, Hyderabad"
              }
            ].map((test, idx) => (
              <div 
                key={idx}
                className="p-8 border border-[#C5A880]/30 bg-[#fbf9f4] rounded-sm flex flex-col justify-between space-y-6 hover:border-[#063B30] transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" stroke="none" />)}
                </div>
                <p className="text-xs sm:text-sm text-[#2E4E47] font-sans-manepally italic leading-relaxed">
                  "{test.review}"
                </p>
                <div className="flex flex-col border-t border-[#C5A880]/20 pt-4 font-sans-manepally">
                  <span className="text-xs font-bold text-[#063B30]">{test.author}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{test.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Consultation Form */}
      <section id="consultation" className="py-20 bg-[#fbf9f4] border-t border-[#C5A880]/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border border-[#C5A880]/40 p-8 sm:p-12 bg-[#FDFBF7] shadow-xl relative">
            
            {/* Corner styling brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#063B30]"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#063B30]"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#063B30]"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#063B30]"></div>

            <div className="text-center mb-10 flex flex-col items-center">
              <Calendar size={28} className="text-[#C5A880] mb-2" />
              <h2 className="text-2xl sm:text-3xl font-serif-manepally text-[#063B30] tracking-wide">
                Virtual Design Consultation
              </h2>
              <p className="text-[10px] sm:text-xs text-[#2E4E47] uppercase tracking-widest font-bold mt-2">
                Connect with our head designer in Secunderabad
              </p>
            </div>

            {submittedData ? (
              <div className="p-8 bg-[#063B30]/5 border border-[#063B30]/20 text-center space-y-6">
                <CheckCircle2 size={48} className="text-[#063B30] mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-serif-manepally text-xl font-bold">Consultation Scheduled</h3>
                  <p className="text-xs text-slate-500 font-sans-manepally">
                    Your appointment has been registered successfully. A client advisor will contact you within 2 hours.
                  </p>
                </div>
                <div className="p-4 bg-[#FDFBF7] border border-[#C5A880]/30 inline-block font-sans-manepally text-xs text-left space-y-1">
                  <div><strong>Booking ID:</strong> <span className="text-[#D4AF37] font-bold">{submittedData.id}</span></div>
                  <div><strong>Patron Name:</strong> {submittedData.name}</div>
                  <div><strong>Preferred Date:</strong> {submittedData.date}</div>
                  <div><strong>Collection:</strong> {submittedData.interest}</div>
                </div>
                <div>
                  <button 
                    onClick={() => setSubmittedData(null)}
                    className="px-6 py-2 border border-[#063B30] hover:bg-[#063B30] hover:text-[#FDFBF7] text-[#063B30] text-[10px] uppercase tracking-widest font-bold transition-all active:scale-95"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6 font-sans-manepally text-xs">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block uppercase tracking-widest font-bold text-[#063B30]">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#fbf9f4] border border-[#C5A880]/30 focus:border-[#063B30] p-4 text-[#063B30] outline-none transition-all text-xs"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-600 font-semibold mt-1">{errors.name}</p>}
                </div>

                {/* Phone & Email Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block uppercase tracking-widest font-bold text-[#063B30]">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#fbf9f4] border border-[#C5A880]/30 focus:border-[#063B30] p-4 text-[#063B30] outline-none transition-all text-xs"
                      placeholder="e.g. +91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-600 font-semibold mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block uppercase tracking-widest font-bold text-[#063B30]">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#fbf9f4] border border-[#C5A880]/30 focus:border-[#063B30] p-4 text-[#063B30] outline-none transition-all text-xs"
                      placeholder="patron@example.com"
                    />
                    {errors.email && <p className="text-red-600 font-semibold mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Date & Interest Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block uppercase tracking-widest font-bold text-[#063B30]">
                      Preferred Date *
                    </label>
                    <input 
                      type="date" 
                      id="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-[#fbf9f4] border border-[#C5A880]/30 focus:border-[#063B30] p-4 text-[#063B30] outline-none transition-all text-xs"
                    />
                    {errors.date && <p className="text-red-600 font-semibold mt-1">{errors.date}</p>}
                  </div>

                  {/* Interest */}
                  <div className="space-y-2">
                    <label htmlFor="interest" className="block uppercase tracking-widest font-bold text-[#063B30]">
                      Collection of Interest
                    </label>
                    <select 
                      id="interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-[#fbf9f4] border border-[#C5A880]/30 focus:border-[#063B30] p-4 text-[#063B30] outline-none transition-all text-xs appearance-none cursor-pointer"
                    >
                      <option>Temple Necklaces</option>
                      <option>Nizami Chokers</option>
                      <option>Basra Pearl Strings</option>
                      <option>Diamond Solitaires</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block uppercase tracking-widest font-bold text-[#063B30]">
                    Design Requests / Custom Notes
                  </label>
                  <textarea 
                    id="notes"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows="4"
                    className="w-full bg-[#fbf9f4] border border-[#C5A880]/30 focus:border-[#063B30] p-4 text-[#063B30] outline-none transition-all text-xs resize-none"
                    placeholder="Describe custom design preferences or metal details..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#063B30] text-[#FDFBF7] hover:bg-[#0d3a2e] disabled:bg-[#063B30]/50 uppercase tracking-widest font-bold transition-all active:scale-95 duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={14} className="animate-spin text-[#D4AF37]" />
                        <span>Verifying & Securing Slot...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} className="text-[#D4AF37]" />
                        <span>Request Customization Consult</span>
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
      <footer className="bg-[#063B30] text-[#FDFBF7] border-t border-[#D4AF37]/30 pt-16 pb-12 font-sans-manepally">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 border-b border-[#D4AF37]/20 pb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif-manepally text-xl font-bold tracking-[0.1em] text-[#FDFBF7]">
              MANEPALLY JEWELLERS
            </h3>
            <p className="text-xs text-[#FDFBF7]/60 leading-relaxed">
              Serving royal bridal elegance for over a century. Our Secunderabad General Bazar branch remains the epicentre of heirloom craftsmanship.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#063B30] transition-colors active:scale-95">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#063B30] transition-colors active:scale-95">
                <MapPin size={14} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
              Showroom Inquiries
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#FDFBF7]/80 leading-relaxed">
                  General Bazar, Secunderabad, Telangana 500003.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37]" />
                <a href="tel:+914027813209" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  +91 40 2781 3209
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4AF37]" />
                <a href="mailto:customercare@manepally.com" className="text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors">
                  customercare@manepally.com
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
              Showroom Timings
            </h4>
            <ul className="space-y-3 text-xs text-[#FDFBF7]/80">
              <li className="flex items-center justify-between border-b border-[#C5A880]/10 pb-2">
                <span>Monday - Saturday:</span>
                <span className="font-semibold">11:00 AM - 8:30 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#C5A880]/10 pb-2">
                <span>Sunday:</span>
                <span className="text-[#D4AF37] font-semibold">Closed</span>
              </li>
              <li className="flex items-center gap-2 text-[10px] text-[#FDFBF7]/50 pt-2 uppercase tracking-wide">
                <Clock size={12} />
                <span>Appointments Recommended</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#FDFBF7]/40 uppercase tracking-widest gap-4">
          <span>© 2026 Manepally Jewellers. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

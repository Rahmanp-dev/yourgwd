"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Mail, 
  MapPin, 
  Phone, 
  Star, 
  Send, 
  Check, 
  Loader2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  UtensilsCrossed, 
  Clock, 
  Award,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export default function ShahiDarbarPage() {
  // Curator State
  const [occasion, setOccasion] = useState('Wedding Shehnai');
  const [guests, setGuests] = useState(150);
  const [packageTier, setPackageTier] = useState('Nizami Darbar');
  const [silverware, setSilverware] = useState(false);
  const [themeDecor, setThemeDecor] = useState(true);
  const [saffronUpgrade, setSaffronUpgrade] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Packages Configuration
  const packages = {
    'Deccani Heritage': {
      price: 1200,
      description: 'Traditional wood-fired cooking featuring Deccani spices and popular Hyderabad favorites.',
      starters: ['Chicken Luqmi', 'Veg Cutlet', 'Paneer Tikka'],
      mains: ['Sufiyani Chicken Biryani', 'Bagara Baingan', 'Tomato Kut', 'Mirchi ka Salan & Raita'],
      desserts: ['Kaddu ki Kheer', 'Double ka Meetha']
    },
    'Nizami Darbar': {
      price: 1800,
      description: 'Our most sought-after banquet selection. Showcases slow-cooked lamb, aromatic signature kebabs, and authentic sweet reductions.',
      starters: ['Shahi Shikampur Kebab', 'Tandoori Murg Lazeez', 'Hariyali Paneer Tikka', 'Dahi ke Kabab'],
      mains: ['Dum Pukht Mutton Biryani', 'Murg Sufiyani Korma', 'Paneer Kundan Kalian', 'Assorted Naan & Kulcha', 'Mirchi ka Salan & Garlic Raita'],
      desserts: ['Khubani Malai Cup (Traditional)', 'Sheer Khurma']
    },
    'Shahi Signature': {
      price: 2700,
      description: 'A luxurious culinary adventure. Rare heritage recipes like Lassan ki Kheer, butler-guided service, and hand-ground spice blends.',
      starters: ['Mutton Patthar ka Gosht', 'Gold Leaf Galouti Kebab', 'Tandoori Lobster Tail', 'Bharwan Mushroom Achari'],
      mains: ['Shahi Darbar Lamb Biryani', 'Nalli Nihari with Bakarkhani Roti', 'Sufiyani Murg Biryani (White Saffron)', 'Paneer Khazana', 'Dal Shahi Darbar (Slow-simmered 24h)'],
      desserts: ['Lassan ki Kheer (Heritage Recipe)', 'Zafrani Shahi Tukda', 'Warm Badam Halwa with Gold Vark']
    }
  };

  // Calculations
  const basePrice = packages[packageTier].price;
  let addOnPrice = 0;
  if (silverware) addOnPrice += 200;
  if (themeDecor) addOnPrice += 150;
  if (saffronUpgrade) addOnPrice += 120;

  const totalPerPlate = basePrice + addOnPrice;
  const rawSubtotal = totalPerPlate * guests;

  // Volume discounts
  let discountPercent = 0;
  if (guests >= 750) discountPercent = 10;
  else if (guests >= 300) discountPercent = 5;

  const discountVal = Math.round(rawSubtotal * (discountPercent / 100));
  const preTaxSubtotal = rawSubtotal - discountVal;
  const gstVal = Math.round(preTaxSubtotal * 0.05); // 5% GST
  const netTotal = preTaxSubtotal + gstVal;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Event date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past';
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
      const randomVal = Math.floor(1000 + Math.random() * 9000);
      setConfirmationCode(`SHAHI-2026-${randomVal}`);
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        notes: ''
      });
    }, 1500);
  };

  const prefillCuratedProposal = () => {
    const details = `Curator proposal: ${occasion} with ${guests} guests on ${packageTier}. Extras chosen: ${
      [
        silverware ? 'Silverware Dining' : null,
        themeDecor ? 'Royal Theme Decor' : null,
        saffronUpgrade ? 'Premium Saffron Upgrade' : null
      ].filter(Boolean).join(', ') || 'None'
    }. Total Estimate: ${formatCurrency(netTotal)}`;

    setFormData(prev => ({
      ...prev,
      notes: details
    }));

    document.getElementById('reserve-feast')?.scrollIntoView({ behavior: 'smooth' });
  };

  const prefillSignatureDish = (dish) => {
    setFormData(prev => ({
      ...prev,
      notes: `Interested in booking Shahi Darbar for a banquet event, specifically highlighting the signature dish: ${dish}.`
    }));

    document.getElementById('reserve-feast')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E3A8A] font-body selection:bg-[#D4AF37]/30 selection:text-[#1E3A8A] relative overflow-x-hidden">
      
      {/* Font imports & Art Deco CSS styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .font-display { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        .shahi-border-deco {
          border: 4px solid #1E3A8A;
          outline: 2px solid #D4AF37;
          outline-offset: -6px;
        }

        .shahi-border-double {
          border: 4px double #D4AF37;
        }

        .shahi-pattern-bg {
          background-color: #FDFBF7;
          background-image: 
            radial-gradient(circle at 0% 0%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(30, 58, 138, 0.03) 0%, transparent 50%);
        }

        .shahi-button-active {
          box-shadow: 0 0 10px rgba(30, 58, 138, 0.3);
          transform: scale(0.98);
        }
      ` }} />

      {/* Top Banner decoration */}
      <div className="w-full h-3 bg-gradient-to-r from-[#D4AF37] via-[#1E3A8A] to-[#D4AF37]" />

      {/* Navigation Header */}
      <header className="py-6 px-4 md:px-8 border-b border-[#D4AF37]/25 bg-[#FDFBF7]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="shahi-border-double p-1 bg-[#1E3A8A] rounded-sm">
              <UtensilsCrossed className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <span className="font-display text-2xl font-black tracking-widest text-[#1E3A8A] block">SHAHI DARBAR</span>
              <span className="font-display text-[9px] font-bold tracking-[0.3em] text-[#D4AF37] block -mt-1">CULINARY ARTISTRY</span>
            </div>
          </div>
          
          <nav className="flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-[#1E3A8A]/90">
            <a href="#heritage" className="hover:text-[#D4AF37] transition-colors">Our History</a>
            <a href="#curator" className="hover:text-[#D4AF37] transition-colors">Bespoke Planner</a>
            <a href="#signature" className="hover:text-[#D4AF37] transition-colors">Signatures</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
          </nav>

          <a 
            href="#reserve-feast"
            className="font-display px-6 py-2.5 bg-transparent text-[#1E3A8A] font-bold text-xs tracking-widest border-2 border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-[#FDFBF7] transition-all duration-300 active:scale-95"
          >
            RESERVE FEAST
          </a>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative py-16 md:py-28 px-4 md:px-8 shahi-pattern-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (left 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-sm w-max text-[10px] font-bold uppercase tracking-widest text-[#1E3A8A]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Luxury Catering & Banqueting Services
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#1E3A8A] leading-tight tracking-tight">
              CULINARY <span className="text-[#D4AF37]">ARTISTRY</span> & NIZAMI GRANDEUR
            </h1>

            <p className="text-sm sm:text-base text-[#1E3A8A]/80 leading-relaxed font-semibold max-w-xl">
              Tracing the culinary heritage of the royal Asaf Jahi Dynasty. We orchestrate magnificent fine dining experiences in Uppal and across Hyderabad with absolute prestige.
            </p>

            {/* Quick credentials */}
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-4 py-2 border border-[#1E3A8A]/20 bg-[#FDFBF7] text-xs font-bold text-[#1E3A8A]/80 flex items-center gap-2 shadow-sm">
                <Award className="w-4 h-4 text-[#D4AF37]" /> Asaf Jahi Recipes
              </span>
              <span className="px-4 py-2 border border-[#1E3A8A]/20 bg-[#FDFBF7] text-xs font-bold text-[#1E3A8A]/80 flex items-center gap-2 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> White-Glove Hospitality
              </span>
              <span className="px-4 py-2 border border-[#1E3A8A]/20 bg-[#FDFBF7] text-xs font-bold text-[#1E3A8A]/80 flex items-center gap-2 shadow-sm">
                <Clock className="w-4 h-4 text-[#D4AF37]" /> Precision Timing
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="#curator" 
                className="inline-flex items-center justify-center gap-2 font-display px-8 py-4 bg-[#1E3A8A] text-[#FDFBF7] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A8A] font-extrabold tracking-widest text-xs transition-all duration-300 active:scale-95"
              >
                Curate Bespoke Estimate <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#reserve-feast" 
                className="inline-flex items-center justify-center font-display px-8 py-4 bg-transparent text-[#1E3A8A] border border-[#1E3A8A]/30 hover:border-[#1E3A8A] hover:bg-[#1E3A8A]/5 font-extrabold tracking-widest text-xs transition-all duration-300 active:scale-95"
              >
                Request Tasting
              </a>
            </div>
          </div>

          {/* Hero Images Grid (right 5 columns) */}
          <div className="lg:col-span-5 relative">
            
            {/* Elegant Double Art Deco Border Frame */}
            <div className="shahi-border-deco p-3 bg-[#FDFBF7] shadow-2xl relative z-10">
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" 
                  alt="Dum Pukht Mutton Biryani" 
                  className="w-full h-32 object-cover col-span-3 border border-[#D4AF37]/30"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" 
                  alt="Shahi Kebab Platter" 
                  className="w-full h-24 object-cover col-span-2 border border-[#D4AF37]/30"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" 
                  alt="Bespoke Dessert" 
                  className="w-full h-24 object-cover col-span-1 border border-[#D4AF37]/30"
                />
              </div>
            </div>

            {/* Geometric line decoration */}
            <div className="absolute top-4 -right-4 w-full h-full border border-[#D4AF37]/30 pointer-events-none -z-0" />
            <div className="absolute -top-4 right-4 w-full h-full border border-[#1E3A8A]/10 pointer-events-none -z-0" />

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* History / Heritage Story */}
      <section id="heritage" className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-12 bg-[#D4AF37]" />
              <span className="font-display text-xs font-bold tracking-[0.2em] text-[#D4AF37]">ASAF JAHI LEGACY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1E3A8A]">
              Tracing the Imperial Culinary Archives
            </h2>

            <p className="text-sm sm:text-base text-[#1E3A8A]/90 leading-relaxed">
              Shahi Darbar Caterers was founded to preserve the historic court cooking techniques of royal Hyderabad. Our chefs trace their lineage back to the master cooks of the Asaf Jah dynasty, operating with recipes recorded in century-old Urdu manuscripts. We honor the art of slow-cooking over charcoal embers inside traditional copper handis.
            </p>

            <p className="text-sm text-[#1E3A8A]/85 leading-relaxed">
              From our modern, sanitation-first kitchen hub in Uppal, we elevate these complex tastes into beautiful presentations suited for contemporary corporate galas and premier weddings. We implement ISO 9001 quality audits on every single ingredient batch, marrying imperial flavors with strict hygiene assurance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="p-4 border border-[#D4AF37]/40 bg-[#FAF7EE] rounded-sm text-center">
                <span className="font-display text-xl font-black text-[#1E3A8A] block">CHARCOAL</span>
                <span className="text-[10px] text-[#1E3A8A]/60 uppercase tracking-wider font-semibold block mt-1">Slow Dum Cooked</span>
              </div>
              <div className="p-4 border border-[#D4AF37]/40 bg-[#FAF7EE] rounded-sm text-center">
                <span className="font-display text-xl font-black text-[#1E3A8A] block">24K SAFFRON</span>
                <span className="text-[10px] text-[#1E3A8A]/60 uppercase tracking-wider font-semibold block mt-1">Purest Grade Only</span>
              </div>
              <div className="p-4 border border-[#D4AF37]/40 bg-[#FAF7EE] rounded-sm text-center">
                <span className="font-display text-xl font-black text-[#1E3A8A] block">BUTLER</span>
                <span className="text-[10px] text-[#1E3A8A]/60 uppercase tracking-wider font-semibold block mt-1">White-Glove Service</span>
              </div>
            </div>

          </div>

          {/* Story Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative shahi-border-double p-2 bg-[#FDFBF7] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" 
                alt="Shahi copper handi dum cooking" 
                className="w-full max-w-sm h-80 object-cover border border-[#D4AF37]/50"
              />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#1E3A8A]" />
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#1E3A8A]" />
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Bespoke Menu Curator & Estimator */}
      <section id="curator" className="py-16 px-4 md:px-8 bg-[#FAF7EE] border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-[#D4AF37]">SHAHI MENU PLANNER</span>
            <h2 className="font-display text-3xl font-black text-[#1E3A8A]">The Bespoke Menu Curator</h2>
            <p className="text-xs sm:text-sm text-[#1E3A8A]/75">
              Select your event occasion, choose a historical banquet tier, and select luxury silver dining upgrades to see custom price estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Curator Settings Panel (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-[#FDFBF7] p-6 md:p-8 border border-[#D4AF37]/50 shadow-lg flex flex-col gap-6">
              
              {/* Step 1: Occasion */}
              <div className="flex flex-col gap-2.5">
                <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">Step 1: Event Occasion</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Wedding Shehnai', 'Corporate Elite', 'Birthday Jubilations'].map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setOccasion(occ)}
                      className={`py-3 px-4 border-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        occasion === occ 
                          ? 'bg-[#1E3A8A] text-[#FDFBF7] border-[#D4AF37] shahi-button-active' 
                          : 'bg-[#FDFBF7] text-[#1E3A8A] border-[#1E3A8A]/20 hover:border-[#1E3A8A]/50'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Guest volume */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">Step 2: Guest Count</label>
                  <span className="font-display text-sm font-black text-[#D4AF37] border-b border-[#D4AF37] pb-0.5">{guests} PAX</span>
                </div>
                
                {/* Guest Quick Chips */}
                <div className="flex gap-2 flex-wrap">
                  {[50, 100, 200, 500, 1000].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-1.5 px-3 border text-xs font-bold ${
                        guests === num 
                          ? 'bg-[#1E3A8A] text-[#FDFBF7] border-[#D4AF37]' 
                          : 'bg-[#FDFBF7] text-[#1E3A8A] border-[#1E3A8A]/15 hover:bg-[#1E3A8A]/5'
                      }`}
                    >
                      {num} Pax
                    </button>
                  ))}
                  
                  {/* Manual input */}
                  <input 
                    type="number"
                    min="25"
                    max="2000"
                    placeholder="Other count..."
                    onChange={(e) => setGuests(Math.max(25, Math.min(2000, Number(e.target.value) || 25)))}
                    className="py-1 px-3 border border-[#1E3A8A]/15 text-xs text-[#1E3A8A] outline-none max-w-[120px]"
                  />
                </div>
              </div>

              {/* Step 3: Package Tier */}
              <div className="flex flex-col gap-2.5">
                <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">Step 3: Culinary Packages</label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.keys(packages).map((tierName) => (
                    <button
                      key={tierName}
                      type="button"
                      onClick={() => setPackageTier(tierName)}
                      className={`p-4 border flex flex-col sm:flex-row justify-between sm:items-center gap-3 transition-all duration-200 ${
                        packageTier === tierName 
                          ? 'bg-[#1E3A8A]/5 border-[#D4AF37] ring-1 ring-[#D4AF37]' 
                          : 'bg-[#FDFBF7] border-[#1E3A8A]/10 hover:border-[#D4AF37]'
                      }`}
                    >
                      <div className="text-left max-w-md">
                        <span className="font-display text-sm font-black tracking-wider block text-[#1E3A8A]">{tierName}</span>
                        <span className="text-xs text-[#1E3A8A]/75 leading-relaxed block mt-1">
                          {packages[tierName].description}
                        </span>
                      </div>
                      <span className="font-display text-base font-black text-[#D4AF37] whitespace-nowrap">
                        {formatCurrency(packages[tierName].price)} <span className="text-[10px] font-sans font-normal text-[#1E3A8A]/60">/ plate</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Premium Toggles */}
              <div className="flex flex-col gap-2.5">
                <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">Step 4: Premium Dining Upgrades</label>
                
                <div className="flex flex-col gap-2">
                  {/* Silverware */}
                  <label className="p-3 border border-[#1E3A8A]/10 flex items-center justify-between cursor-pointer hover:border-[#D4AF37]/50 select-none bg-[#FDFBF7]">
                    <div className="flex flex-col max-w-sm">
                      <span className="text-xs font-bold text-[#1E3A8A]">Silverware Dining Service</span>
                      <span className="text-[10px] text-[#1E3A8A]/70 mt-0.5">We serve dishes in authentic silver plated platters and high-end glassware.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-bold text-[#D4AF37]">+₹200/plate</span>
                      <input 
                        type="checkbox"
                        checked={silverware}
                        onChange={(e) => setSilverware(e.target.checked)}
                        className="w-4 h-4 accent-[#1E3A8A] cursor-pointer"
                      />
                    </div>
                  </label>

                  {/* Theme decor */}
                  <label className="p-3 border border-[#1E3A8A]/10 flex items-center justify-between cursor-pointer hover:border-[#D4AF37]/50 select-none bg-[#FDFBF7]">
                    <div className="flex flex-col max-w-sm">
                      <span className="text-xs font-bold text-[#1E3A8A]">Royal Canopy Theme Styling</span>
                      <span className="text-[10px] text-[#1E3A8A]/70 mt-0.5">Bespoke buffet layouts matching classic Mughal / Art Deco design themes.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-bold text-[#D4AF37]">+₹150/plate</span>
                      <input 
                        type="checkbox"
                        checked={themeDecor}
                        onChange={(e) => setThemeDecor(e.target.checked)}
                        className="w-4 h-4 accent-[#1E3A8A] cursor-pointer"
                      />
                    </div>
                  </label>

                  {/* Saffron upgrade */}
                  <label className="p-3 border border-[#1E3A8A]/10 flex items-center justify-between cursor-pointer hover:border-[#D4AF37]/50 select-none bg-[#FDFBF7]">
                    <div className="flex flex-col max-w-sm">
                      <span className="text-xs font-bold text-[#1E3A8A]">Imperial Saffron & Truffle Upgrade</span>
                      <span className="text-[10px] text-[#1E3A8A]/70 mt-0.5">Use of grade-A Kashmiri saffron and premium black truffle seasoning.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-bold text-[#D4AF37]">+₹120/plate</span>
                      <input 
                        type="checkbox"
                        checked={saffronUpgrade}
                        onChange={(e) => setSaffronUpgrade(e.target.checked)}
                        className="w-4 h-4 accent-[#1E3A8A] cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Proposal Invoice Card (Right 5 Columns) */}
            <div className="lg:col-span-5 bg-[#FDFBF7] p-6 border-2 border-[#1E3A8A] shadow-xl relative sticky top-28 shahi-border-deco">
              
              <div className="flex flex-col gap-6">
                
                {/* Header */}
                <div className="text-center border-b border-[#D4AF37]/30 pb-4">
                  <span className="font-display text-[9px] font-bold tracking-[0.25em] text-[#D4AF37] block mb-1">PROPOSAL MEMORANDUM</span>
                  <h3 className="font-display text-lg font-black text-[#1E3A8A] tracking-wider">SHAHI DARBAR FEAST</h3>
                  <p className="text-[11px] font-semibold text-[#1E3A8A]/60 uppercase mt-1">
                    {occasion} &bull; {guests} PAX
                  </p>
                </div>

                {/* Menu Highlight */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase">Menu Preview</span>
                  <div className="space-y-3 max-h-44 overflow-y-auto pr-1 scrollbar-thin text-xs">
                    <div>
                      <span className="font-bold text-[#1E3A8A] block">Royal Hors d&apos;oeuvres</span>
                      <p className="text-[#1E3A8A]/80 mt-0.5">{packages[packageTier].starters.join(', ')}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#1E3A8A] block">Imperial Mains</span>
                      <p className="text-[#1E3A8A]/80 mt-0.5">{packages[packageTier].mains.join(', ')}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#1E3A8A] block">Exquisite Confections</span>
                      <p className="text-[#1E3A8A]/80 mt-0.5">{packages[packageTier].desserts.join(', ')}</p>
                    </div>
                    {(silverware || themeDecor || saffronUpgrade) && (
                      <div>
                        <span className="font-bold text-[#D4AF37] block">Selected Upgrades</span>
                        <p className="text-[#1E3A8A]/80 mt-0.5">
                          {[
                            silverware ? 'Silverware Dining' : null,
                            themeDecor ? 'Canopy Decor' : null,
                            saffronUpgrade ? 'Imperial Saffron' : null
                          ].filter(Boolean).join(', ') || 'None'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bill details */}
                <div className="border-t border-[#D4AF37]/30 pt-4 flex flex-col gap-2 text-xs">
                  <div className="flex justify-between font-medium">
                    <span>Base package price</span>
                    <span>{formatCurrency(basePrice)} / pax</span>
                  </div>
                  {addOnPrice > 0 && (
                    <div className="flex justify-between font-medium">
                      <span>Dining upgrades</span>
                      <span>+{formatCurrency(addOnPrice)} / pax</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold border-b border-[#D4AF37]/20 pb-2 text-sm">
                    <span>Total plate cost</span>
                    <span className="text-[#D4AF37]">{formatCurrency(totalPerPlate)} / pax</span>
                  </div>

                  <div className="flex justify-between mt-1">
                    <span>Raw subtotal</span>
                    <span>{formatCurrency(rawSubtotal)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Volume discount ({discountPercent}%)</span>
                      <span>-{formatCurrency(discountVal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Catering GST (5%)</span>
                    <span>{formatCurrency(gstVal)}</span>
                  </div>

                  <div className="flex justify-between items-end border-t border-[#1E3A8A]/30 pt-3 mt-1">
                    <span className="font-display text-sm font-bold text-[#1E3A8A]">Net Proposal Cost</span>
                    <span className="font-display text-2xl font-black text-[#D4AF37] leading-none">
                      {formatCurrency(netTotal)}
                    </span>
                  </div>
                </div>

                {/* Pre-fill Form CTA */}
                <button
                  type="button"
                  onClick={prefillCuratedProposal}
                  className="font-display w-full py-3 bg-[#1E3A8A] text-[#FDFBF7] font-extrabold text-xs tracking-widest hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition-all duration-300 active:scale-95 text-center mt-2 shadow-md border border-[#D4AF37]"
                >
                  APPLY TO BOOKING INQUIRY
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Signature Dishes Grid */}
      <section id="signature" className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-[#D4AF37]">SHAHI SIGNATURE KITCHEN</span>
            <h2 className="font-display text-3xl font-black text-[#1E3A8A]">Heritage Dishes From Royal Archives</h2>
            <p className="text-xs sm:text-sm text-[#1E3A8A]/75">
              Each recipe has been carefully revived from archival court documents and slow-cooked in Uppal, Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dish 1 */}
            <div className="shahi-border-double p-5 bg-[#FDFBF7] shadow-md flex flex-col justify-between group hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/35 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" 
                    alt="Dum Pukht Mutton Biryani" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#1E3A8A] text-[#D4AF37] text-[8px] font-bold tracking-widest px-2 py-0.5 border border-[#D4AF37]">
                    IMPERIAL RECIPE
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4">Dum Pukht Mutton Biryani</h3>
                <p className="text-xs text-[#1E3A8A]/75 leading-relaxed mt-2">
                  Choice cuts of young lamb shoulder marinated in spices and slow-cooked in heavy dough-sealed copper pots with premium basmati rice, mint leaves, and pure ghee.
                </p>
              </div>
              <button
                type="button"
                onClick={() => prefillSignatureDish('Dum Pukht Mutton Biryani')}
                className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Curate for Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 2 */}
            <div className="shahi-border-double p-5 bg-[#FDFBF7] shadow-md flex flex-col justify-between group hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/35 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" 
                    alt="Shahi Shikampur Kebab" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#1E3A8A] text-[#D4AF37] text-[8px] font-bold tracking-widest px-2 py-0.5 border border-[#D4AF37]">
                    SHAHI SPECIALTY
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4">Shahi Shikampur Kebab</h3>
                <p className="text-xs text-[#1E3A8A]/75 leading-relaxed mt-2">
                  Minced lamb patties filled with sour hung curd, green chillies, mint, and toasted almond slivers, shallow-fried on a traditional iron tawa.
                </p>
              </div>
              <button
                type="button"
                onClick={() => prefillSignatureDish('Shahi Shikampur Kebab')}
                className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Curate for Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 3 */}
            <div className="shahi-border-double p-5 bg-[#FDFBF7] shadow-md flex flex-col justify-between group hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/35 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" 
                    alt="Lassan ki Kheer" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#1E3A8A] text-[#D4AF37] text-[8px] font-bold tracking-widest px-2 py-0.5 border border-[#D4AF37]">
                    HERITAGE ARCHIVE
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4">Lassan ki Kheer</h3>
                <p className="text-xs text-[#1E3A8A]/75 leading-relaxed mt-2">
                  A legendary dessert. Blanched garlic slivers slow-boiled in cardamon milk until they lose all pungency and taste like rich almond flakes. A fascinating dessert.
                </p>
              </div>
              <button
                type="button"
                onClick={() => prefillSignatureDish('Lassan ki Kheer')}
                className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Curate for Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 4 */}
            <div className="shahi-border-double p-5 bg-[#FDFBF7] shadow-md flex flex-col justify-between group hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/35 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600" 
                    alt="Sufiyani Biryani" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#1E3A8A] text-[#D4AF37] text-[8px] font-bold tracking-widest px-2 py-0.5 border border-[#D4AF37]">
                    WHITE SAFFRON
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4">Murg Sufiyani Biryani</h3>
                <p className="text-xs text-[#1E3A8A]/75 leading-relaxed mt-2">
                  A delicate, white-colored chicken biryani seasoned with almond milk paste, cardamom, cashew cream, and kewra water. Mild yet incredibly deep flavor profile.
                </p>
              </div>
              <button
                type="button"
                onClick={() => prefillSignatureDish('Murg Sufiyani Biryani')}
                className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Curate for Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 5 */}
            <div className="shahi-border-double p-5 bg-[#FDFBF7] shadow-md flex flex-col justify-between group hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/35 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" 
                    alt="Khubani Malai Cup" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#1E3A8A] text-[#D4AF37] text-[8px] font-bold tracking-widest px-2 py-0.5 border border-[#D4AF37]">
                    TRADITIONAL SWEET
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4">Khubani Malai Cup</h3>
                <p className="text-xs text-[#1E3A8A]/75 leading-relaxed mt-2">
                  Puréed stewed dried apricots from Turkey layered with double-boiled cold malai cream, served in individual hand-thrown clay cups.
                </p>
              </div>
              <button
                type="button"
                onClick={() => prefillSignatureDish('Khubani Malai Cup')}
                className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Curate for Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 6 */}
            <div className="shahi-border-double p-5 bg-[#FDFBF7] shadow-md flex flex-col justify-between group hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/35 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" 
                    alt="Mirchi ka Salan" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#1E3A8A] text-[#D4AF37] text-[8px] font-bold tracking-widest px-2 py-0.5 border border-[#D4AF37]">
                    NIZAMI SIDE
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4">Heritage Mirchi ka Salan</h3>
                <p className="text-xs text-[#1E3A8A]/75 leading-relaxed mt-2">
                  Mild green chilies simmered in a dense, velvety gravy of slow-roasted peanuts, sesame seeds, dried tamarind, desiccated coconut, and mustard seed tempering.
                </p>
              </div>
              <button
                type="button"
                onClick={() => prefillSignatureDish('Heritage Mirchi ka Salan')}
                className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Curate for Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Consultation Request Form */}
      <section id="reserve-feast" className="py-16 px-4 md:px-8 bg-[#FAF7EE] border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center flex flex-col gap-3 mb-10">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">SECURE YOUR FEAST DATE</span>
            <h2 className="font-display text-3xl font-extrabold text-[#1E3A8A]">Request a Shahi Tasting & consultation</h2>
            <p className="text-xs sm:text-sm text-[#1E3A8A]/70 leading-relaxed max-w-lg mx-auto">
              Allow us to orchestrate your banquet. Fill in the details below to receive a custom digital draft menu and schedule a tasting panel.
            </p>
          </div>

          <div className="shahi-border-deco p-6 md:p-8 bg-[#FDFBF7] shadow-xl relative">
            
            {submitSuccess ? (
              <div className="py-10 px-4 flex flex-col items-center justify-center text-center gap-4 relative z-10">
                <div className="p-3 bg-emerald-50 border border-emerald-500 rounded-sm">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#1E3A8A]">Consultation Registered</h3>
                <p className="text-xs sm:text-sm text-[#1E3A8A]/80 max-w-md">
                  Your details have been recorded in the royal Shahi registry. Our catering director will contact you via email and phone to confirm tasting availability.
                </p>
                <div className="p-4 bg-[#FAF7EE] border border-[#D4AF37]/40 w-full max-w-xs font-mono text-xs flex flex-col items-center gap-1.5 mt-2">
                  <span className="text-[#1E3A8A]/60 uppercase tracking-widest font-bold font-sans text-[9px]">Shahi Reference Number</span>
                  <span className="text-base font-black text-[#1E3A8A] tracking-wider">{confirmationCode}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="font-display mt-6 text-xs font-black tracking-widest text-[#D4AF37] hover:text-[#1E3A8A] border-b border-[#D4AF37] transition-all"
                >
                  SUBMIT A NEW REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.name ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.name && <span className="text-[10px] text-red-500 font-semibold">{formErrors.name}</span>}
                </div>

                {/* Mobile number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Mobile Number</label>
                  <input 
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.phone ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.phone && <span className="text-[10px] text-red-500 font-semibold">{formErrors.phone}</span>}
                </div>

                {/* Email address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email"
                    placeholder="yourname@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.email ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.email && <span className="text-[10px] text-red-500 font-semibold">{formErrors.email}</span>}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Preferred Event Date</label>
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.date ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.date && <span className="text-[10px] text-red-500 font-semibold">{formErrors.date}</span>}
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Banquet Specifications & Message</label>
                  <textarea 
                    rows="4"
                    placeholder="Please enter custom dietary requests, preferred items, or layout instructions..."
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="p-3 bg-[#FDFBF7] border border-[#1E3A8A]/20 focus:border-[#D4AF37] text-sm outline-none resize-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-display w-full py-4 bg-[#1E3A8A] text-[#FDFBF7] border border-[#D4AF37] font-extrabold text-xs tracking-widest hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> DISPATCHING SHAHI INQUIRY...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> SUBMIT RESERVATION REQUEST
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-[#D4AF37]">PATRON RECOLLECTIONS</span>
            <h2 className="font-display text-3xl font-black text-[#1E3A8A]">Memorable Dinings Curated by Shahi Darbar</h2>
            <p className="text-xs sm:text-sm text-[#1E3A8A]/70">
              Read recommendations from real banquets and social gatherings organized in Secunderabad, Gachibowli, and Uppal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="shahi-border-double p-6 bg-[#FDFBF7] shadow-sm relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] border-none" />)}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-display text-5xl font-bold text-[#D4AF37]/20 leading-none">&ldquo;</span>
                <p className="text-xs sm:text-sm text-[#1E3A8A]/95 leading-relaxed italic -mt-6 font-medium">
                  &ldquo;The Lassan ki Kheer was the ultimate highlight. None of our guests believed it was made of garlic! The mutton dum biryani was tender and perfectly spiced. Pure elite class catering.&rdquo;
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4 mt-6">
                <p className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Begum Shahana Yasmeen</p>
                <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">Begumpet, Hyderabad</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="shahi-border-double p-6 bg-[#FDFBF7] shadow-sm relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] border-none" />)}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-display text-5xl font-bold text-[#D4AF37]/20 leading-none">&ldquo;</span>
                <p className="text-xs sm:text-sm text-[#1E3A8A]/95 leading-relaxed italic -mt-6 font-medium">
                  &ldquo;We hired them for a corporate dinner of 350 executives in Gachibowli. Their team was professional, the butler service was swift, and the presentation in silver pans was breathtaking.&rdquo;
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4 mt-6">
                <p className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Srinivas Reddy</p>
                <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">Corporate Event Manager, Secunderabad</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="shahi-border-double p-6 bg-[#FDFBF7] shadow-sm relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] border-none" />)}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-display text-5xl font-bold text-[#D4AF37]/20 leading-none">&ldquo;</span>
                <p className="text-xs sm:text-sm text-[#1E3A8A]/95 leading-relaxed italic -mt-6 font-medium">
                  &ldquo;A perfect experience. The Sufiyani Biryani was seasoned beautifully and the live shikampur kebab station kept our wedding guests delighted. Highly recommend their Uppal office!&rdquo;
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4 mt-6">
                <p className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Kavitha Raghavan</p>
                <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">Uppal, Hyderabad</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Store Details */}
      <footer className="bg-[#1E3A8A] text-[#FDFBF7] border-t border-[#D4AF37]/40 py-12 px-4 md:px-8 relative">
        <div className="absolute inset-1 border border-[#D4AF37]/15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="shahi-border-double p-1 bg-[#FDFBF7]">
                <UtensilsCrossed className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <div>
                <span className="font-display text-lg font-black tracking-widest text-[#D4AF37] block">SHAHI DARBAR</span>
                <span className="font-display text-[8px] font-bold tracking-[0.3em] text-[#FDFBF7] block -mt-1">IMPERIAL CULINARY HOUSE</span>
              </div>
            </div>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed max-w-sm">
              Reviving court recipes from Urdu archival scrolls. We cater premium weddings, high-end receptions, and elite corporate dinners in Telangana with signature butler service.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-xs font-bold tracking-widest text-[#D4AF37] uppercase">KITCHEN HEADQUARTERS</span>
            <ul className="flex flex-col gap-2 text-xs text-[#FDFBF7]/85">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Sree Hemdurga Complex, Uppal Main Road, Uppal, Hyderabad, Telangana 500039
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Operating Hours: 09:00 AM - 09:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-xs font-bold tracking-widest text-[#D4AF37] uppercase">CONTACT REGISTRY</span>
            <ul className="flex flex-col gap-2 text-xs text-[#FDFBF7]/85">
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+919908054321" className="hover:text-[#D4AF37] transition-colors font-bold">+91 99080 54321</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:contact@shahidarbar.in" className="hover:text-[#D4AF37] transition-colors">contact@shahidarbar.in</a>
              </li>
              <li className="flex gap-2 items-center">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>FSSAI License: #13620021000987</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-[#D4AF37]/15 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#FDFBF7]/50 font-bold uppercase tracking-wider relative z-10">
          <span>&copy; 2026 Shahi Darbar Caterers. All Rights Reserved.</span>
          <span>Preserving Royal Gastronomy</span>
        </div>
      </footer>

    </div>
  );
}

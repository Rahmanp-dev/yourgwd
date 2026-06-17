"use client";

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, RefreshCw, Sliders, ArrowRight, Shield, Check, 
  Calendar, Users, Utensils, X, Heart, Share2, Instagram, CheckCircle2,
  Leaf, Waves, ShieldAlert
} from 'lucide-react';

export default function UlavacharuCloudKitchenPage() {
  // Customizer State
  const [mealStyle, setMealStyle] = useState('Coastal Seafood Feast Box');
  const [boxes, setBoxes] = useState(50);
  const [mealTier, setMealTier] = useState('Premium');
  const [selectedAddons, setSelectedAddons] = useState({
    crabBowl: false,
    gonguraPickle: false
  });

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
  const [submittedData, setSubmittedData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Constants
  const baseBoxRates = {
    'Premium Corporate Lunch Box': 280,
    'Coastal Seafood Feast Box': 390,
    'Family Weekend Curry Combo': 320
  };

  const tierMultipliers = {
    'Standard': 1.0,
    'Premium': 1.35,
    'Royal Seafood Combo': 1.8
  };

  const addonPrices = {
    crabBowl: 120,
    gonguraPickle: 50
  };

  // Calculations
  const baseBoxPrice = Math.round(baseBoxRates[mealStyle] * tierMultipliers[mealTier]);
  const baseCost = baseBoxPrice * boxes;
  
  const crabCost = selectedAddons.crabBowl ? addonPrices.crabBowl * boxes : 0;
  const pickleCost = selectedAddons.gonguraPickle ? addonPrices.gonguraPickle * boxes : 0;
  const totalAddonsCost = crabCost + pickleCost;

  const packagingFee = boxes * 15;
  const deliveryCharge = boxes < 30 ? 500 : boxes < 100 ? 1200 : 2500;
  
  const subtotal = baseCost + totalAddonsCost + packagingFee + deliveryCharge;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  // Mock Menu items based on tier
  const getMenuPreview = () => {
    if (mealTier === 'Standard') {
      return [
        { category: "Coastal Curries", items: ["Andhra Royyala Eguru (Prawn Curry)", "Tomato Pappu (Lentils)"] },
        { category: "Rice Station", items: ["Steamed Sona Masuri Rice", "Rasam / Sambhar Bowl"] },
        { category: "Snacks", items: ["Mirapakaya Bajji (1 pc)", "Onion Pakoda"] },
        { category: "Accompaniments", items: ["Avakaya Pachadi", "Homemade Papad", "Fresh Curd Cup"] },
        { category: "Traditional Sweet", items: ["Elaneer Payasam (Tender Coconut Dessert)"] }
      ];
    } else if (mealTier === 'Premium') {
      return [
        { category: "Coastal Curries", items: ["Nellore Chepala Pulusu (Gourmet Fish)", "Bhimavaram Royyala Vepudu (Prawn Fry)", "Gongura Chicken Curry"] },
        { category: "Rice Station", items: ["Signature Ulavacharu Rice", "Jeera Rice Bowl", "Charu (Andhra Rasam)"] },
        { category: "Starters", items: ["Mokkajonna Garelu (2 pcs)", "Andhra Fish Cutlet"] },
        { category: "Accompaniments", items: ["Special Gongura Pachadi", "Ulavacharu Paste", "Roti / Puri (2 pcs)"] },
        { category: "Dessert Specialty", items: ["Elaneer Payasam with Pistachio", "Apricot Halwa Double"] }
      ];
    } else {
      return [
        { category: "Royal Seafood Starters", items: ["Bhimavaram Royyala Vepudu (Premium Prawns)", "Coastal Crab Fry Bowl (Soft Shell)", "Tandoori Pomfret (1 pc)"] },
        { category: "Coastal Curries Royale", items: ["Konaseema Chepala Eguru (Premium Fish)", "Natu Kodi Pulusu (Country Chicken)", "Mutton Iguru (Thick Roast)"] },
        { category: "Signature Rice & Pulav", items: ["Authentic Ulavacharu Mutton Pulav", "Zafrani Bagara Rice", "Gongura Chicken Pulav"] },
        { category: "Breads", items: ["Ulta Tawa Paratha (2 pcs)", "Rumali Roti (1 pc)"] },
        { category: "Accompaniments & Dips", items: ["Artisanal Mango Pickle", "Ulavacharu Butter Sauce", "Papad & Raitha"] },
        { category: "Gourmet Desserts", items: ["Chilled Elaneer Payasam with Fresh Almond Shavings", "Double Ka Meetha Saffron Special"] }
      ];
    }
  };

  const handleAddonClick = (addon) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addon]: !prev[addon]
    }));
  };

  const handleApplyBlueprint = () => {
    const addonDetails = [];
    if (selectedAddons.crabBowl) addonDetails.push("Crab Fry Bowl");
    if (selectedAddons.gonguraPickle) addonDetails.push("Gongura Pickle Jar");

    const notesText = `Locked Delivery Box Blueprint:
- Meal Style: ${mealStyle}
- Box Count: ${boxes} Boxes
- Tier: ${mealTier} Tier (₹${baseBoxPrice}/box)
- Add-ons: ${addonDetails.length > 0 ? addonDetails.join(", ") : "None"}
- Estimated Delivery Quote: ₹${grandTotal.toLocaleString('en-IN')}`;

    setFormData(prev => ({
      ...prev,
      notes: notesText
    }));

    showToast("Estimator blueprint applied to your delivery form!");
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Validations
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '').replace(/^\+91/, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      errors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Delivery date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Delivery date must be today or in the future';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please correct the errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        bookingId: `UK-${Math.floor(10000 + Math.random() * 90000)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        mealStyle,
        boxes,
        mealTier,
        grandTotal
      });
      showToast("Gourmet box delivery booking registered successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5EBE6] text-[#2E2522] selection:bg-[#0D9488]/20 selection:text-[#0D9488]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#2E2522] text-[#F5EBE6] py-3 px-5 rounded-xl shadow-2xl flex items-center gap-3 border-l-4 border-[#0D9488] animate-fade-in transition-all">
          <Sparkles size={18} className="text-[#0D9488] shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-[#F5EBE6]/95 backdrop-blur-md border-b border-[#E3D4C9] py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Waves logo custom SVG */}
            <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488]">
              <Waves size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-[#0D9488]">
                Ulavacharu <span className="text-[#2E2522]">Kitchen</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                Premium Coastal Andhra Box Deliveries — Uppal
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#heritage" className="text-slate-600 hover:text-[#0D9488] transition-all">Our Story</a>
            <a href="#estimator" className="text-slate-600 hover:text-[#0D9488] transition-all">Box Estimator</a>
            <a href="#dishes" className="text-slate-600 hover:text-[#0D9488] transition-all">Signature Curries</a>
            <a href="#testimonials" className="text-slate-600 hover:text-[#0D9488] transition-all">Reviews</a>
            <a 
              href="#booking" 
              className="px-5 py-2.5 rounded-lg bg-[#0D9488] text-white shadow-md hover:bg-[#0A7369] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Order Online
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold w-fit mx-auto lg:mx-0">
              <Award size={14} />
              <span>Gourmet Packaging & Sanitized Kitchen Standards</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#2E2522] leading-[1.12]">
              Coastal Andhra Seafood & <span className="text-[#0D9488]">Gourmet Curry Boxes</span>
            </h1>
            <p className="text-sm lg:text-base text-slate-700 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Ulavacharu Cloud Kitchen brings the authentic taste of Konaseema and Nellore to Uppal, Hyderabad. Enjoy freshly cooked spicy prawn fries, classic Ulavacharu mutton pulavs, and fish curries delivered in premium leak-proof boxes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#estimator"
                className="px-8 py-4 bg-[#0D9488] hover:bg-[#0A7369] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Configure Curry Boxes</span>
                <ArrowRight size={14} />
              </a>
              <a 
                href="#booking"
                className="px-8 py-4 bg-white/70 hover:bg-white text-slate-800 border border-[#E3D4C9] font-bold text-xs uppercase tracking-widest rounded-lg active:scale-95 transition-all flex items-center justify-center"
              >
                Book Catering / Order Bulk
              </a>
            </div>
          </div>

          {/* Premium Seafood/Bento Grid collage */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[300px] h-[360px] sm:w-[360px] sm:h-[420px] bg-[#FAF5F0] rounded-2xl p-4 border border-[#E3D4C9] shadow-lg">
              <div className="absolute top-4 left-4 w-[70%] h-[70%] rounded-xl overflow-hidden border-2 border-white shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=500" 
                  alt="Coastal Curry dish" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-[65%] h-[60%] rounded-xl overflow-hidden border-2 border-white shadow-lg z-10">
                <img 
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400" 
                  alt="Traditional Spicy Indian Seafood Fry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 right-4 w-12 h-12 rounded-full bg-[#C2593F] text-white flex items-center justify-center shadow-md animate-bounce">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Story / Cloud Kitchen Heritage */}
      <section id="heritage" className="bg-[#FAF5F0] border-y border-[#E3D4C9] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#FAF6F2] p-8 rounded-2xl border border-[#E3D4C9] shadow-inner flex flex-col justify-center space-y-6">
              <h3 className="font-display font-bold text-xl text-[#0D9488] flex items-center gap-2">
                <Waves size={20} />
                Bhimavaram & Konaseema Recipe Legacies
              </h3>
              <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                The heart of our kitchen lies in the traditional horsegram broth (Ulavacharu) simmered for over 18 hours. Sourced directly from local farmers in Guntur, our horsegram yields a rich, earthy soup base which we blend into our signature slow-steamed mutton pulav. Our seafood is sourced fresh daily from the Bay of Bengal, ensuring that fish and prawns are cooked with zero freezing to preserve natural moisture and texture.
              </p>
              <div className="p-4 rounded-xl bg-[#0D9488]/5 border-l-4 border-[#0D9488] text-xs text-[#0D9488] italic">
                "We operate with modern cloud kitchen precision in Uppal, but our recipes remain rooted in the coastal households of Bhimavaram."
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <span className="text-[#C2593F] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Leaf size={14} className="text-[#C2593F]" />
                Premium Cloud Kitchen & Delivery Standards
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522]">
                Freshly Prepared, Thermally Insulated, Delivered Hot
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Ulavacharu Cloud Kitchen has pioneered meal boxes that lock in thermal energy and freshness. Our eco-friendly bento containers have separate compartments to prevent curries from mixing, maintaining distinct flavor bounds. From our ISO-certified kitchen in Uppal, we serve corporations, family gatherings, and home dinners with complete sanitation, bio-degradable cutlery, and contactless dispatch protocols.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2E2522]">Leak-Proof Bento Boxes</h4>
                    <p className="text-xs text-slate-500">Perfect compartment division, heat-insulated, and completely bio-degradable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C2593F]/10 text-[#C2593F] flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2E2522]">Fresh Caught Daily Seafood</h4>
                    <p className="text-xs text-slate-500">No preservatives, no artificial thickeners, absolute natural flavor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Estimator / Customizer */}
      <section id="estimator" className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0D9488] font-bold text-xs uppercase tracking-widest">Delivery Estimator</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522] mt-2">
            Configure Your Curry Box Order
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Choose box formats, select quantities (for small offices or large get-togethers), choose a menu tier, and get instant price projections.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Customizer Controls */}
          <div className="lg:col-span-7 bg-[#FAF5F0] rounded-2xl border border-[#E3D4C9] p-6 sm:p-8 shadow-sm flex flex-col space-y-6">
            
            {/* Box Style selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                1. Choose Meal Box Format
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {Object.keys(baseBoxRates).map((style) => (
                  <button
                    key={style}
                    onClick={() => setMealStyle(style)}
                    className={`py-3 px-4 rounded-lg text-xs font-bold border transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 ${
                      mealStyle === style
                        ? 'bg-[#0D9488] text-white border-[#0D9488] shadow-sm'
                        : 'bg-white text-slate-700 border-[#E3D4C9] hover:bg-slate-50'
                    }`}
                  >
                    <span className="line-clamp-2">{style}</span>
                    <span className="text-[10px] opacity-75 font-normal">₹{baseBoxRates[style]}/box</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Box Count Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  2. Number of Meal Boxes
                </label>
                <span className="text-sm font-bold text-[#0D9488] px-3 py-1 rounded bg-[#0D9488]/10">
                  {boxes} Boxes
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={boxes}
                  onChange={(e) => setBoxes(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-[#E3D4C9] rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                />
                <input
                  type="number"
                  min="10"
                  max="200"
                  value={boxes}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setBoxes(isNaN(val) ? 10 : val);
                  }}
                  className="w-20 px-2 py-1.5 rounded-lg border border-[#E3D4C9] bg-white text-xs font-bold text-center focus:outline-none focus:border-[#0D9488]"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Min order: 10 boxes | Max: 200 boxes. Contact for larger corporate event setups.</p>
            </div>

            {/* Menu Tier */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                3. Menu Tier & Seafood Options
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {Object.keys(tierMultipliers).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setMealTier(tier)}
                    className={`py-3 px-4 rounded-lg text-xs font-bold border transition-all text-center flex flex-col justify-center gap-1 active:scale-95 ${
                      mealTier === tier
                        ? 'bg-[#C2593F] text-white border-[#C2593F] shadow-sm'
                        : 'bg-white text-slate-700 border-[#E3D4C9] hover:bg-slate-50'
                    }`}
                  >
                    <span>{tier}</span>
                    <span className="text-[10px] opacity-75 font-normal">
                      {tier === 'Standard' ? 'Classic Chicken' : tier === 'Premium' ? 'Fish & Prawn Mix' : 'Royal Seafood'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                4. Premium Curry Extra Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div 
                  onClick={() => handleAddonClick('crabBowl')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center select-none active:scale-98 ${
                    selectedAddons.crabBowl 
                      ? 'bg-[#0D9488]/5 border-[#0D9488]' 
                      : 'bg-white border-[#E3D4C9] hover:border-slate-400'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#2E2522]">Coastal Crab Fry Bowl</span>
                    <span className="text-[10px] text-slate-500">Thick spiced pepper crab (+₹120/box)</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedAddons.crabBowl ? 'bg-[#0D9488] border-[#0D9488] text-white' : 'border-slate-300'
                  }`}>
                    {selectedAddons.crabBowl && <Check size={12} />}
                  </div>
                </div>

                <div 
                  onClick={() => handleAddonClick('gonguraPickle')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center select-none active:scale-98 ${
                    selectedAddons.gonguraPickle 
                      ? 'bg-[#0D9488]/5 border-[#0D9488]' 
                      : 'bg-white border-[#E3D4C9] hover:border-slate-400'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#2E2522]">Spicy Gongura Pickle Jar</span>
                    <span className="text-[10px] text-slate-500">Artisanal Guntur sorrel jar (+₹50/box)</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedAddons.gonguraPickle ? 'bg-[#0D9488] border-[#0D9488] text-white' : 'border-slate-300'
                  }`}>
                    {selectedAddons.gonguraPickle && <Check size={12} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Apply button */}
            <button
              onClick={handleApplyBlueprint}
              className="w-full py-4 rounded-lg bg-[#2E2522] hover:bg-[#1C1715] text-[#F5EBE6] text-xs uppercase tracking-widest font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Sliders size={14} className="text-[#0D9488]" />
              <span>Apply Blueprint to Delivery Form</span>
            </button>
          </div>

          {/* Estimates Display */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white border border-[#E3D4C9] rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C2593F]/10 rounded-full blur-xl"></div>
              <h3 className="font-display font-extrabold text-xl text-[#2E2522] mb-6 border-b border-[#E3D4C9] pb-4">
                Delivery Cost Breakdown
              </h3>
              
              <div className="flex flex-col space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Box Style:</span>
                  <span className="font-bold text-[#2E2522]">{mealStyle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tier Unit Price:</span>
                  <span className="font-bold text-[#2E2522]">₹{baseBoxPrice} / box</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Base Cost ({boxes} Boxes):</span>
                  <span className="font-bold text-[#2E2522]">₹{baseCost.toLocaleString('en-IN')}</span>
                </div>
                {selectedAddons.crabBowl && (
                  <div className="flex justify-between text-[#0D9488]">
                    <span>+ Extra Crab Fry Bowls:</span>
                    <span className="font-bold">₹{crabCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {selectedAddons.gonguraPickle && (
                  <div className="flex justify-between text-[#0D9488]">
                    <span>+ Gongura Pickle Jars:</span>
                    <span className="font-bold">₹{pickleCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Thermal Packing & Cutlery Fee:</span>
                  <span className="font-bold text-[#2E2522]">₹{packagingFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Logistics:</span>
                  <span className="font-bold text-[#2E2522]">₹{deliveryCharge.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t border-[#E3D4C9] my-2 pt-2 flex justify-between">
                  <span className="text-slate-500">Subtotal:</span>
                  <span className="font-bold text-[#2E2522]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>GST (18%):</span>
                  <span className="font-semibold text-[#2E2522]">₹{gst.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t-2 border-dashed border-[#E3D4C9] my-3 pt-3 flex justify-between items-end">
                  <span className="font-bold text-slate-800 text-sm">Grand Total (Insured Delivery):</span>
                  <span className="font-display font-extrabold text-2xl text-[#0D9488]">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Menu preview box */}
            <div className="bg-[#FAF5F0] border border-[#E3D4C9] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h4 className="font-bold text-sm text-[#2E2522] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Utensils size={16} className="text-[#C2593F]" />
                Box Contents: {mealTier} Tier
              </h4>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {getMenuPreview().map((cat, idx) => (
                  <div key={idx} className="border-b border-[#E3D4C9]/40 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9488] block mb-1">
                      {cat.category}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {cat.items.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section id="dishes" className="bg-[#FAF5F0] border-y border-[#E3D4C9] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C2593F] font-bold text-xs uppercase tracking-widest">Regional Specialties</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522] mt-2">
              Our Signature Coastal Curries
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              We bring the deep, complex flavors of coastal Andhra home kitchens straight to your doorstep. Fresh, rich, and highly aromatic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Curry 1 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500" 
                  alt="Ulavacharu Mutton Dum Biryani" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Signature
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Ulavacharu Mutton Dum Biryani</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Slow-cooked mutton biryani layered with long basmati grains marinated in pure regional horsegram soup (Ulavacharu). Creamy, spicy, and extremely authentic.
                </p>
              </div>
            </div>

            {/* Curry 2 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=500" 
                  alt="Bhimavaram Royyala Vepudu" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C2593F] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Coastal Classic
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Bhimavaram Royyala Vepudu</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Juicy, medium-sized coastal prawns tossed in a fiery dry masala of crushed coriander, black pepper, caramelized onions, slit green chillies, and fresh curry leaves.
                </p>
              </div>
            </div>

            {/* Curry 3 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=500" 
                  alt="Konaseema Chepala Eguru" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Fresh Catch
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Konaseema Chepala Eguru</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tender river fish steaks simmered in a heavy, highly spiced gravy of tamarind, fresh garlic paste, raw green mangoes, and red chilli powder. A classic delta recipe.
                </p>
              </div>
            </div>

            {/* Curry 4 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500" 
                  alt="Gongura Chicken Pulav" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C2593F] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Tangy & Spicy
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Gongura Chicken Pulav</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Steaming hot basmati rice tossed with spiced pan-fried chicken cubes and infused with high-tang sorrel leaf (Gongura) paste. Served with cool onion raitha.
                </p>
              </div>
            </div>

            {/* Curry 5 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=500" 
                  alt="Coastal Crab Iguru" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Spicy Hot
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Coastal Crab Iguru</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fresh sea crabs slow-simmered in a thick roasted coconut and sesame paste, heavily spiced with black pepper and dry red chillies. Best enjoyed with hot rice.
                </p>
              </div>
            </div>

            {/* Curry 6 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=500" 
                  alt="Elaneer Payasam" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C2593F] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Coastal Sweet
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Elaneer Payasam</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chilled, sweetened condensed milk infused with grated pulp of fresh tender coconuts, flavored with green cardamom, and loaded with roasted almond flakes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Delivery Form */}
      <section id="booking" className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Context */}
          <div className="lg:col-span-5 bg-[#2E2522] text-[#F5EBE6] p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#0D9488]/10 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col space-y-6">
              <span className="text-[#0D9488] font-bold text-xs uppercase tracking-widest">Order Dispatch</span>
              <h2 className="text-3xl font-display font-bold leading-tight">
                Schedule Your Gourmet Meal Box Delivery
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Order bulk bento boxes for corporate lunches, family gatherings, or weekend events. Our delivery fleet covers Uppal, Gachibowli, Secunderabad, and outer rings. Insulated transport ensures food is delivered piping hot.
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-10 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#0D9488]" />
                <span>+91 91540 88220</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#0D9488]" />
                <span>orders@ulavacharu-cloudkitchen.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#0D9488]" />
                <span>Phase 2, HMT Nagar, Near Uppal Depot, Hyderabad - 500039</span>
              </div>
            </div>
          </div>

          {/* Form Component */}
          <div className="lg:col-span-7 bg-[#FAF5F0] border border-[#E3D4C9] rounded-2xl p-6 sm:p-10 shadow-md">
            {submittedData ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-8">
                <div className="w-16 h-16 rounded-full bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-[#2E2522]">Delivery Scheduled!</h3>
                  <p className="text-xs text-[#0D9488] font-bold">Order Reference ID: {submittedData.bookingId}</p>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Namaskar, <strong>{submittedData.name}</strong>. Your gourmet box order has been booked for dispatch on <strong>{submittedData.date}</strong>. Our kitchen lead will call you on <strong>{submittedData.phone}</strong> to confirm the exact delivery slot.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E3D4C9] text-xs max-w-sm text-left flex flex-col space-y-2">
                  <span className="font-bold text-slate-700">Order Style:</span>
                  <p className="text-slate-600">{submittedData.mealStyle} ({boxes} boxes) - {mealTier} Tier</p>
                  <span className="font-bold text-slate-700">Estimated Invoice:</span>
                  <p className="text-[#0D9488] font-bold text-sm">₹{submittedData.grandTotal.toLocaleString('en-IN')}</p>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-2.5 rounded-lg border border-[#0D9488] text-[#0D9488] text-xs font-bold hover:bg-[#0D9488] hover:text-white active:scale-95 transition-all"
                >
                  Configure Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-[#2E2522] mb-2">Book Your Box Delivery</h3>
                <p className="text-xs text-slate-500 mb-6">Fields marked with (*) are required.</p>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Kumar"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#0D9488] ${
                        formErrors.name ? 'border-red-500' : 'border-[#E3D4C9]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-semibold">
                        <ShieldAlert size={10} />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98480 54321"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#0D9488] ${
                        formErrors.phone ? 'border-red-500' : 'border-[#E3D4C9]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-semibold">
                        <ShieldAlert size={10} />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. anand@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#0D9488] ${
                        formErrors.email ? 'border-red-500' : 'border-[#E3D4C9]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-semibold">
                        <ShieldAlert size={10} />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Delivery Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#0D9488] ${
                        formErrors.date ? 'border-red-500' : 'border-[#E3D4C9]'
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-semibold">
                        <ShieldAlert size={10} />
                        {formErrors.date}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Delivery Address & Blueprint Details
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Enter delivery address, location details, or click 'Apply Blueprint' above to fill estimator calculations."
                    className="w-full px-4 py-3 rounded-lg border border-[#E3D4C9] bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-[#0D9488] hover:bg-[#0A7369] text-white text-xs uppercase tracking-widest font-bold active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      <span>Scheduling Dispatch...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Confirm Delivery Booking</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="bg-[#FAF5F0] border-y border-[#E3D4C9] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0D9488] font-bold text-xs uppercase tracking-widest">Client Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522] mt-2">
              Loved by Foodies in Hyderabad
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              Read how our premium box deliveries have transformed office lunches and family reunions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white border border-[#E3D4C9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative">
              <div className="flex flex-col space-y-4">
                <div className="flex text-[#0D9488] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#0D9488" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "Ordered 45 Coastal Seafood boxes from Ulavacharu Cloud Kitchen for our corporate branch lunch near Uppal. Every box was clean, hot, and leak-proof. The Konaseema Chepala Eguru had the perfect spiciness and the Ulavacharu rice was superb. Exceptional kitchen service!"
                </p>
              </div>
              <div className="border-t border-[#E3D4C9] mt-6 pt-4 flex flex-col">
                <span className="font-bold text-xs text-[#2E2522]">Vikram K.</span>
                <span className="text-[10px] text-slate-400">Team Lead — Uppal, Hyderabad</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#E3D4C9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative">
              <div className="flex flex-col space-y-4">
                <div className="flex text-[#0D9488] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#0D9488" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "For my husband's birthday reunion in Secunderabad, we ordered the Royal Seafood Combo box. The crab fry bowl was fresh and the prawns fry was incredibly tasty. Our guests from Gachibowli were thoroughly impressed. Excellent packaging!"
                </p>
              </div>
              <div className="border-t border-[#E3D4C9] mt-6 pt-4 flex flex-col">
                <span className="font-bold text-xs text-[#2E2522]">Sireesha P.</span>
                <span className="text-[10px] text-slate-400">Homemaker — Secunderabad</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-[#E3D4C9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative">
              <div className="flex flex-col space-y-4">
                <div className="flex text-[#0D9488] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#0D9488" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "The Ulavacharu Mutton Pulav box was pure perfection. Sourced fresh, hot, and rich. Ordered 15 boxes for a Sunday family reunion in Uppal. The Elaneer Payasam dessert is out of this world. Ulavacharu is our go-to cloud kitchen!"
                </p>
              </div>
              <div className="border-t border-[#E3D4C9] mt-6 pt-4 flex flex-col">
                <span className="font-bold text-xs text-[#2E2522]">Dr. Srinivas Reddy</span>
                <span className="text-[10px] text-slate-400">Customer — Uppal, Hyderabad</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-[#2E2522] text-[#F5EBE6] pt-16 pb-12 border-t border-[#E3D4C9]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#E3D4C9]/10">
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#0D9488]">
              Ulavacharu <span className="text-[#F5EBE6]">Kitchen</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Premium coastal Andhra curries and gourmet bento box deliveries cooked with raw local ingredients. Delivered hot across Hyderabad.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">Navigation</h4>
            <a href="#heritage" className="text-xs text-slate-300 hover:text-[#0D9488] transition-all">Heritage Story</a>
            <a href="#estimator" className="text-xs text-slate-300 hover:text-[#0D9488] transition-all">Box Estimator</a>
            <a href="#dishes" className="text-xs text-slate-300 hover:text-[#0D9488] transition-all">Signature Curries</a>
            <a href="#testimonials" className="text-xs text-slate-300 hover:text-[#0D9488] transition-all">Client Reviews</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">Contact Details</h4>
            <p className="text-xs text-slate-300 flex items-center gap-2">
              <Phone size={14} className="text-[#0D9488] shrink-0" />
              <span>+91 91540 88220</span>
            </p>
            <p className="text-xs text-slate-300 flex items-center gap-2">
              <Mail size={14} className="text-[#0D9488] shrink-0" />
              <span>orders@ulavacharu-cloudkitchen.com</span>
            </p>
            <p className="text-xs text-slate-300 flex items-start gap-2">
              <MapPin size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
              <span>Phase 2, HMT Nagar, Near Uppal Depot, Hyderabad, Telangana 500039</span>
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">Delivery Hours</h4>
            <p className="text-xs text-slate-300 flex items-center gap-2">
              <Clock size={14} className="text-[#0D9488] shrink-0" />
              <span>Mon - Sun: 11:00 AM - 11:00 PM</span>
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0D9488] text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} Ulavacharu Cloud Kitchen. All Rights Reserved.</span>
          <span className="flex items-center gap-1 mt-2 sm:mt-0">
            Design grounded in Telugu Culinary Pride <Heart size={10} className="text-[#C2593F]" /> Uppal, Hyderabad.
          </span>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, RefreshCw, Sliders, ArrowRight, Shield, Check, 
  Calendar, Users, Utensils, X, Heart, Share2, Instagram, CheckCircle2,
  Flame, Leaf, ShieldAlert
} from 'lucide-react';

export default function VantilluCaterersPage() {
  // Customizer State
  const [eventType, setEventType] = useState('Grand Telugu Wedding');
  const [guests, setGuests] = useState(300);
  const [menuTier, setMenuTier] = useState('Premium');
  const [selectedAddons, setSelectedAddons] = useState({
    biryaniPot: false,
    sweetCounter: false
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
  const baseRates = {
    'Grand Telugu Wedding': 900,
    'Nizami Sangeet Feast': 850,
    'Traditional Gruhapravesam': 650
  };

  const tierMultipliers = {
    'Standard': 1.0,
    'Premium': 1.4,
    'Royal Heritage': 1.9
  };

  const addonPrices = {
    biryaniPot: 150,
    sweetCounter: 80
  };

  // Calculations
  const basePlatePrice = Math.round(baseRates[eventType] * tierMultipliers[menuTier]);
  const baseCost = basePlatePrice * guests;
  
  const biryaniPotCost = selectedAddons.biryaniPot ? addonPrices.biryaniPot * guests : 0;
  const sweetCounterCost = selectedAddons.sweetCounter ? addonPrices.sweetCounter * guests : 0;
  const totalAddonsCost = biryaniPotCost + sweetCounterCost;

  const serviceFee = guests < 200 ? 10000 : guests < 500 ? 18000 : 30000;
  const subtotal = baseCost + totalAddonsCost + serviceFee;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  // Mock Menu items based on tier
  const getMenuPreview = () => {
    if (menuTier === 'Standard') {
      return [
        { category: "Welcome Coolers", items: ["Spiced Pudina Buttermilk", "Sweet Saffron Shambala"] },
        { category: "Traditional Starters", items: ["Gobi Kempu", "Aloo Bonda Live", "Mirchi Bajji Counter"] },
        { category: "Signature Main Course", items: ["Gongura Pappu (Sorrel Leaf Dal)", "Gutthi Vankaya Kura", "Mamidikaya Pappu", "Sona Masuri Rice"] },
        { category: "Biryani & Rice Special", items: ["Nizami Veg Dum Biryani", "Mirchi Ka Salan", "Traditional Raita"] },
        { category: "Accompaniments", items: ["Avakaya Pickle", "Gongura Pachadi", "Appadams & Curd"] },
        { category: "Traditional Desserts", items: ["Chakkera Pongali", "Double Ka Meetha (Traditional)"] }
      ];
    } else if (menuTier === 'Premium') {
      return [
        { category: "Welcome Drinks", items: ["Elaneer Payasam (Tender Coconut)", "Ragi Ambali with Buttermilk", "Spiced Mango Mojito"] },
        { category: "Gourmet Live Starters", items: ["Kodi Vepudu (Spicy Andhra Chicken)", "Gongura Royyala Vepudu (Prawns)", "Mokkajonna Garelu (Corn Vada)", "Paneer Tikka Nizami"] },
        { category: "Heritage Main Course", items: ["Gongura Mutton Curry", "Nellore Chepala Pulusu (Fish)", "Gutthi Vankaya Kura (Stuffed Eggplant)", "Mamidikaya Paneer Veg"] },
        { category: "Biryani Grand Station", items: ["Authentic Mutton Dum Biryani", "Kaju Veg Biryani", "Bagara Rice with Dalcha"] },
        { category: "Accompaniments", items: ["Homemade Mango Pickle (Avakaya)", "Ulavacharu Paste", "Puri & Rumali Roti"] },
        { category: "Premium Sweets & Desserts", items: ["Zafrani Qubani Ka Meetha with Vanilla Bean Ice Cream", "Garam Moong Dal Halwa", "Apricot Delight"] }
      ];
    } else {
      return [
        { category: "Royal Welcome Nectars", items: ["Rose Lassi with Edible Gold", "Nannari Sharbath with Basil Seeds", "Nitrogen Tender Coconut Coolers"] },
        { category: "Grand Royal Starters", items: ["Kodi Rekhala Vepudu (Crispy Wings)", "Pathar Ka Gosht Live Counter", "Tandoori Pomfret", "Crispy Lotus Stem in Spicy Chilli Sauce", "Stuffed Mushroom Galouti"] },
        { category: "Royal Main Course", items: ["Nizami Mutton Korma", "Nellore Chepala Pulusu (Clay-pot simmered)", "Natu Kodi Pulusu (Country Chicken)", "Ulavacharu Biryani Paneer", "Exotic Cashew Korma"] },
        { category: "Grand Biryani & Haleem Station", items: ["Royal Zafrani Mutton Biryani (Saffron infused)", "Special Hyderabadi Mutton Haleem with Pure Ghee, Cashews & Mint", "Vantillu Special Bamboo Biryani"] },
        { category: "Breads & Roti Station", items: ["Live Stuffed Kulchas", "Garlic Butter Naan", "Ulta Tawa Paratha", "Traditional Rumali Roti"] },
        { category: "Heritage Desserts Live", items: ["Live Rabdi Malpua Counter", "Royal Apricot Delight with Fresh Cream", "Baked Double Ka Meetha", "Traditional Pootharekulu (Live Preparation)"] }
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
    if (selectedAddons.biryaniPot) addonDetails.push("Clay-pot Slow Cooked Biryani");
    if (selectedAddons.sweetCounter) addonDetails.push("Traditional Sweet Counter");

    const notesText = `Locked Menu Blueprint Details:
- Event: ${eventType}
- Guests: ${guests}
- Menu Tier: ${menuTier} Tier (₹${basePlatePrice}/plate)
- Add-ons: ${addonDetails.length > 0 ? addonDetails.join(", ") : "None"}
- Estimated Total: ₹${grandTotal.toLocaleString('en-IN')}`;

    setFormData(prev => ({
      ...prev,
      notes: notesText
    }));

    showToast("Estimator blueprint applied to your consultation form!");
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
      errors.date = 'Event date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Event date must be today or in the future';
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
        bookingId: `VT-${Math.floor(10000 + Math.random() * 90000)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        eventType,
        guests,
        menuTier,
        grandTotal
      });
      showToast("Your consultation has been successfully requested!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5EBE6] text-[#2E2522] selection:bg-[#C2593F]/20 selection:text-[#C2593F]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#2E2522] text-[#F5EBE6] py-3 px-5 rounded-xl shadow-2xl flex items-center gap-3 border-l-4 border-[#C2593F] animate-fade-in transition-all">
          <Sparkles size={18} className="text-[#C2593F] shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-[#F5EBE6]/95 backdrop-blur-md border-b border-[#E3D4C9] py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Clay pot custom SVG icon */}
            <div className="w-10 h-10 rounded-full bg-[#C2593F]/10 flex items-center justify-center text-[#C2593F]">
              <Flame size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-[#C2593F]">
                Vantillu <span className="text-[#2E2522]">Caterers</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                Heritage Telugu Culinary Art — Uppal
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#heritage" className="text-slate-600 hover:text-[#C2593F] transition-all">Our Legacy</a>
            <a href="#estimator" className="text-slate-600 hover:text-[#C2593F] transition-all">Menu Customizer</a>
            <a href="#dishes" className="text-slate-600 hover:text-[#C2593F] transition-all">Signature Feasts</a>
            <a href="#testimonials" className="text-slate-600 hover:text-[#C2593F] transition-all">Reviews</a>
            <a 
              href="#booking" 
              className="px-5 py-2.5 rounded-lg bg-[#C2593F] text-white shadow-md hover:bg-[#A94931] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C2593F]/10 text-[#C2593F] text-xs font-semibold w-fit mx-auto lg:mx-0">
              <Award size={14} />
              <span>HACCP Food Safety Certified & 100% Traditional Prep</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#2E2522] leading-[1.12]">
              Grand Feasts Simmered in <span className="text-[#C2593F]">Telugu Heritage</span>
            </h1>
            <p className="text-sm lg:text-base text-slate-700 max-w-xl leading-relaxed mx-auto lg:mx-0">
              From grand Telugu weddings to elegant housewarmings in Uppal and across Hyderabad. We specialize in authentic wood-fired slow cooking, traditional copper-pot Biryanis, and royal Nizami banquets crafted by master chefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#estimator"
                className="px-8 py-4 bg-[#C2593F] hover:bg-[#A94931] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Customize Menu Plan</span>
                <ArrowRight size={14} />
              </a>
              <a 
                href="#booking"
                className="px-8 py-4 bg-white/70 hover:bg-white text-slate-800 border border-[#E3D4C9] font-bold text-xs uppercase tracking-widest rounded-lg active:scale-95 transition-all flex items-center justify-center"
              >
                Book Date / Taste Test
              </a>
            </div>
          </div>

          {/* Premium Food Grid collage */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[300px] h-[360px] sm:w-[360px] sm:h-[420px] bg-[#FAF5F0] rounded-2xl p-4 border border-[#E3D4C9] shadow-lg">
              <div className="absolute top-4 left-4 w-[70%] h-[70%] rounded-xl overflow-hidden border-2 border-white shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=500" 
                  alt="Heritage Andhra Feast" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-[65%] h-[60%] rounded-xl overflow-hidden border-2 border-white shadow-lg z-10">
                <img 
                  src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=400" 
                  alt="Traditional Clay pot Slow Cooked Spices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 right-4 w-12 h-12 rounded-full bg-[#0D9488] text-white flex items-center justify-center shadow-md animate-pulse">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Story / Heritage Section */}
      <section id="heritage" className="bg-[#FAF5F0] border-y border-[#E3D4C9] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <span className="text-[#0D9488] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Leaf size={14} className="text-[#0D9488]" />
                Our Cooking Legacy
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522]">
                Crafting Culinary Masterpieces with Time-Honored Recipes
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Vantillu means "The Kitchen" in Telugu, and we hold that sacred. Started as a family kitchen in HMT Nagar, Uppal, we have spent over 15 years preserving traditional wood-fired slow cooking processes. We reject modern shortcuts, choosing instead to slow-cook our dishes using seasoned dry firewood and brass utensils, which allows the natural flavors of coriander, poppy seeds, and fresh curry leaves to fully blossom.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C2593F]/10 text-[#C2593F] flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2E2522]">ISO & HACCP Certified</h4>
                    <p className="text-xs text-slate-500">Strictest sanitation checks, organic sourcing, and sterilized kitchen stations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2E2522]">Master Nizami Chefs</h4>
                    <p className="text-xs text-slate-500">Heritage chefs specialized in authentic dum recipes, slow-stewed kormas and traditional halwas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF6F2] p-8 rounded-2xl border border-[#E3D4C9] shadow-inner flex flex-col justify-center space-y-6">
              <h3 className="font-display font-bold text-xl text-[#C2593F] flex items-center gap-2">
                <Flame size={20} />
                Wood-Fired Slow Cooking Philosophy
              </h3>
              <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                For our signature <strong>Gongura Mutton Biryani</strong> and <strong>Nellore Chepala Pulusu</strong>, we cook inside heavy earthen pots over charcoal embers. This maintains temperature stability and locks in pure taste without burning the delicate spices. Our masalas are freshly stone-ground every morning, and we use cold-pressed sesame and groundnut oil sourced directly from regional mills.
              </p>
              <div className="p-4 rounded-xl bg-[#C2593F]/5 border-l-4 border-[#C2593F] text-xs text-[#C2593F] italic">
                "No artificial colorings, no MSG, no compromise. Only raw ingredients simmered to premium Nizami perfection."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Estimator / Customizer */}
      <section id="estimator" className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C2593F] font-bold text-xs uppercase tracking-widest">Pricing Calculator</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522] mt-2">
            Build Your Own Feast
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Select your event profile, adjust guest counts, choose a menu tier, and get an instant cost projection. Apply the blueprint directly to lock it down.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Customizer Controls */}
          <div className="lg:col-span-7 bg-[#FAF5F0] rounded-2xl border border-[#E3D4C9] p-6 sm:p-8 shadow-sm flex flex-col space-y-6">
            
            {/* Event selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Event Style
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {Object.keys(baseRates).map((event) => (
                  <button
                    key={event}
                    onClick={() => setEventType(event)}
                    className={`py-3 px-4 rounded-lg text-xs font-bold border transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 ${
                      eventType === event
                        ? 'bg-[#C2593F] text-white border-[#C2593F] shadow-sm'
                        : 'bg-white text-slate-700 border-[#E3D4C9] hover:bg-slate-50'
                    }`}
                  >
                    <span>{event}</span>
                    <span className="text-[10px] opacity-75 font-normal">₹{baseRates[event]}/plate</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  2. Number of Guests
                </label>
                <span className="text-sm font-bold text-[#C2593F] px-3 py-1 rounded bg-[#C2593F]/10">
                  {guests} Guests
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-[#E3D4C9] rounded-lg appearance-none cursor-pointer accent-[#C2593F]"
                />
                <input
                  type="number"
                  min="100"
                  max="1500"
                  value={guests}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setGuests(isNaN(val) ? 100 : val);
                  }}
                  className="w-20 px-2 py-1.5 rounded-lg border border-[#E3D4C9] bg-white text-xs font-bold text-center focus:outline-none focus:border-[#C2593F]"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Min: 100 | Max: 1500 guests. Contact for larger gatherings.</p>
            </div>

            {/* Menu Tier */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                3. Menu Tier & Culinary Quality
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {Object.keys(tierMultipliers).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setMenuTier(tier)}
                    className={`py-3 px-4 rounded-lg text-xs font-bold border transition-all text-center flex flex-col justify-center gap-1 active:scale-95 ${
                      menuTier === tier
                        ? 'bg-[#0D9488] text-white border-[#0D9488] shadow-sm'
                        : 'bg-white text-slate-700 border-[#E3D4C9] hover:bg-slate-50'
                    }`}
                  >
                    <span>{tier} Tier</span>
                    <span className="text-[10px] opacity-75 font-normal">
                      {tier === 'Standard' ? 'Classic Telugu' : tier === 'Premium' ? 'Andhra & Nizami Mix' : 'Royal Feast'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                4. Live Counters Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div 
                  onClick={() => handleAddonClick('biryaniPot')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center select-none active:scale-98 ${
                    selectedAddons.biryaniPot 
                      ? 'bg-[#C2593F]/5 border-[#C2593F]' 
                      : 'bg-white border-[#E3D4C9] hover:border-slate-400'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#2E2522]">Live Clay-Pot Dum Station</span>
                    <span className="text-[10px] text-slate-500">Traditional wood fire smoke aroma (+₹150/plate)</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedAddons.biryaniPot ? 'bg-[#C2593F] border-[#C2593F] text-white' : 'border-slate-300'
                  }`}>
                    {selectedAddons.biryaniPot && <Check size={12} />}
                  </div>
                </div>

                <div 
                  onClick={() => handleAddonClick('sweetCounter')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center select-none active:scale-98 ${
                    selectedAddons.sweetCounter 
                      ? 'bg-[#C2593F]/5 border-[#C2593F]' 
                      : 'bg-white border-[#E3D4C9] hover:border-slate-400'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#2E2522]">Live Telugu Sweet Counter</span>
                    <span className="text-[10px] text-slate-500">Hot Pootharekulu & Jalebi counter (+₹80/plate)</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedAddons.sweetCounter ? 'bg-[#C2593F] border-[#C2593F] text-white' : 'border-slate-300'
                  }`}>
                    {selectedAddons.sweetCounter && <Check size={12} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Apply button */}
            <button
              onClick={handleApplyBlueprint}
              className="w-full py-4 rounded-lg bg-[#2E2522] hover:bg-[#1C1715] text-[#F5EBE6] text-xs uppercase tracking-widest font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Sliders size={14} className="text-[#C2593F]" />
              <span>Apply Blueprint to Booking Request</span>
            </button>
          </div>

          {/* Estimates Display */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white border border-[#E3D4C9] rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D9488]/10 rounded-full blur-xl"></div>
              <h3 className="font-display font-extrabold text-xl text-[#2E2522] mb-6 border-b border-[#E3D4C9] pb-4">
                Estimated Plan Summary
              </h3>
              
              <div className="flex flex-col space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Event Style:</span>
                  <span className="font-bold text-[#2E2522]">{eventType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tier Plate Rate:</span>
                  <span className="font-bold text-[#2E2522]">₹{basePlatePrice} / guest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Base Catering ({guests} Guests):</span>
                  <span className="font-bold text-[#2E2522]">₹{baseCost.toLocaleString('en-IN')}</span>
                </div>
                {selectedAddons.biryaniPot && (
                  <div className="flex justify-between text-[#C2593F]">
                    <span>+ Live Pot Dum Station:</span>
                    <span className="font-bold">₹{biryaniPotCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {selectedAddons.sweetCounter && (
                  <div className="flex justify-between text-[#C2593F]">
                    <span>+ Live Sweet Station:</span>
                    <span className="font-bold">₹{sweetCounterCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Professional Service & Logistics:</span>
                  <span className="font-bold text-[#2E2522]">₹{serviceFee.toLocaleString('en-IN')}</span>
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
                  <span className="font-bold text-slate-800 text-sm">Grand Total (Estimated):</span>
                  <span className="font-display font-extrabold text-2xl text-[#C2593F]">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Menu preview box */}
            <div className="bg-[#FAF5F0] border border-[#E3D4C9] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h4 className="font-bold text-sm text-[#2E2522] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Utensils size={16} className="text-[#0D9488]" />
                Preview Menu: {menuTier} Tier
              </h4>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {getMenuPreview().map((cat, idx) => (
                  <div key={idx} className="border-b border-[#E3D4C9]/40 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C2593F] block mb-1">
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
            <span className="text-[#0D9488] font-bold text-xs uppercase tracking-widest">Master Chef Specialties</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522] mt-2">
              Our Signature Culinary Crafts
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              These dishes have made Vantillu famous in Hyderabad. Every dish is seasoned with cold-pressed oils and local Uppal garden greens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dish 1 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500" 
                  alt="Gongura Mutton Dum Biryani" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C2593F] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Legendary
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Gongura Mutton Dum Biryani</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Slow charcoal-dum long-grain basmati layers with native sorrel leaves (Gongura) and tender baby goat mutton marinated in rock salt. Spicy, tangy, and deeply traditional.
                </p>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=500" 
                  alt="Nellore Chepala Pulusu" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Clay-pot Special
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Nellore Chepala Pulusu</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Freshly caught river fish simmered in a dark, fiery red gravy of Nellore tamarind paste, tempered with mustard seeds, fenugreek, and slices of raw sour green mangoes.
                </p>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500" 
                  alt="Natu Kodi Pulusu" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C2593F] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Traditional
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Natu Kodi Pulusu & Ragi Sankati</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Country chicken stew simmered for hours in dry coconut, coriander seeds, and caramelized onions, paired alongside hot steamed finger-millet balls (Ragi Sankati) and home ghee.
                </p>
              </div>
            </div>

            {/* Dish 4 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500" 
                  alt="Gutthi Vankaya Kura" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Vegetarian Pride
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Nellore Gutthi Vankaya Kura</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Baby brinjals slit fourways and stuffed with a roasted blend of peanuts, sesame seeds, coriander seeds, and dry red chillies, simmered until butter-soft in thin oil gravy.
                </p>
              </div>
            </div>

            {/* Dish 5 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500" 
                  alt="Mokkajonna Garelu" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C2593F] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  High Demand
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Mokkajonna Garelu</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Golden, crispy fritters made of crushed tender yellow corn, green chillies, ginger paste, and fresh coriander, served hot with roasted garlic tomato chutney.
                </p>
              </div>
            </div>

            {/* Dish 6 */}
            <div className="bg-white border border-[#E3D4C9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500" 
                  alt="Royal Zafrani Qubani" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-[#F5EBE6] text-[10px] font-bold uppercase tracking-wider">
                  Dessert Royal
                </div>
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <h3 className="font-display font-bold text-lg text-[#2E2522]">Zafrani Qubani Ka Meetha</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Imported sun-dried apricots slow-stewed into a rich marmalade infused with pure Kashmiri saffron threads and crushed almond kernels, finished with a dollop of fresh milk cream.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="booking" className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Context */}
          <div className="lg:col-span-5 bg-[#2E2522] text-[#F5EBE6] p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C2593F]/10 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col space-y-6">
              <span className="text-[#C2593F] font-bold text-xs uppercase tracking-widest">Get in Touch</span>
              <h2 className="text-3xl font-display font-bold leading-tight">
                Schedule a Consultation & Taste Testing
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Consult with our menu designers to construct the perfect feast for your special occasion. We invite host families to our kitchen at Uppal, Hyderabad for private tasting sessions prior to final booking.
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-10 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C2593F]" />
                <span>+91 98480 22338</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C2593F]" />
                <span>reservations@vantillu-catering.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C2593F]" />
                <span>Plot No. 42, HMT Nagar, Uppal, Hyderabad - 500039</span>
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
                  <h3 className="font-display font-extrabold text-2xl text-[#2E2522]">Consultation Requested!</h3>
                  <p className="text-xs text-[#0D9488] font-bold">Booking Ticket ID: {submittedData.bookingId}</p>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Namaskar, <strong>{submittedData.name}</strong>. Our events manager will call you within 2 hours on <strong>{submittedData.phone}</strong> to confirm your date ({submittedData.date}) and coordinate your taste-testing session.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E3D4C9] text-xs max-w-sm text-left flex flex-col space-y-2">
                  <span className="font-bold text-slate-700">Planned Event:</span>
                  <p className="text-slate-600">{submittedData.eventType} ({guests} guests) - {menuTier} Tier</p>
                  <span className="font-bold text-slate-700">Estimated Quote:</span>
                  <p className="text-[#C2593F] font-bold text-sm">₹{submittedData.grandTotal.toLocaleString('en-IN')}</p>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-2.5 rounded-lg border border-[#C2593F] text-[#C2593F] text-xs font-bold hover:bg-[#C2593F] hover:text-white active:scale-95 transition-all"
                >
                  Request Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-[#2E2522] mb-2">Book Your Slot</h3>
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
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#C2593F] ${
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
                      placeholder="e.g. +91 98480 12345"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#C2593F] ${
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
                      placeholder="e.g. ramesh@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#C2593F] ${
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
                      Preferred Event Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#C2593F] ${
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
                    Custom Requests & Menu Blueprint
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Provide menu requests, allergen preferences, or click 'Apply Blueprint' above to fill estimator data."
                    className="w-full px-4 py-3 rounded-lg border border-[#E3D4C9] bg-white text-xs text-[#2E2522] focus:outline-none focus:ring-1 focus:ring-[#C2593F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-[#C2593F] hover:bg-[#A94931] text-white text-xs uppercase tracking-widest font-bold active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      <span>Sending Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Book Free Tasting & Consult</span>
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
            <span className="text-[#C2593F] font-bold text-xs uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2E2522] mt-2">
              Loved by Hyderabad Families
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              Read how Vantillu delivered flawless culinary management at landmark venues across Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white border border-[#E3D4C9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative">
              <div className="flex flex-col space-y-4">
                <div className="flex text-[#C2593F] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C2593F" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "For my daughter's wedding at a major convention hall near Uppal, we contracted Vantillu for 800 guests. The wood-fired Gongura Mutton Biryani was the talk of the night! Even guests from Gachibowli were asking for the caterer's card. Sincere and clean service throughout."
                </p>
              </div>
              <div className="border-t border-[#E3D4C9] mt-6 pt-4 flex flex-col">
                <span className="font-bold text-xs text-[#2E2522]">Anirudh Reddy</span>
                <span className="text-[10px] text-slate-400">Wedding Host — Uppal, Hyderabad</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#E3D4C9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative">
              <div className="flex flex-col space-y-4">
                <div className="flex text-[#C2593F] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C2593F" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "We booked Vantillu for our corporate sangeet party. The live preparation of hot Pootharekulu and Jalebis was spectacular. Their kitchen crew maintained complete hygiene standards. Strongly recommend their Premium menu tier."
                </p>
              </div>
              <div className="border-t border-[#E3D4C9] mt-6 pt-4 flex flex-col">
                <span className="font-bold text-xs text-[#2E2522]">Meenakshi S.</span>
                <span className="text-[10px] text-slate-400">HR Director — Secunderabad</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-[#E3D4C9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative">
              <div className="flex flex-col space-y-4">
                <div className="flex text-[#C2593F] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C2593F" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "For our housewarming ceremony (Gruhapravesam) in HMT Nagar, Vantillu provided traditional Satyanarayana Vratham prashad and a classic vegetarian buffet. Spotless execution, warm family-like staff, and authentic, non-greasy taste."
                </p>
              </div>
              <div className="border-t border-[#E3D4C9] mt-6 pt-4 flex flex-col">
                <span className="font-bold text-xs text-[#2E2522]">P. Venkat Rao</span>
                <span className="text-[10px] text-slate-400">Home Owner — Uppal, Hyderabad</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-[#2E2522] text-[#F5EBE6] pt-16 pb-12 border-t border-[#E3D4C9]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#E3D4C9]/10">
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#C2593F]">
              Vantillu <span className="text-[#F5EBE6]">Caterers</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Crafting premium Telugu traditional food and royal Nizami banquets since 2011. Sourced organically and cooked with love.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#C2593F]">Navigation</h4>
            <a href="#heritage" className="text-xs text-slate-300 hover:text-[#C2593F] transition-all">Heritage Story</a>
            <a href="#estimator" className="text-xs text-slate-300 hover:text-[#C2593F] transition-all">Menu Planner</a>
            <a href="#dishes" className="text-xs text-slate-300 hover:text-[#C2593F] transition-all">Signature Recipes</a>
            <a href="#testimonials" className="text-xs text-slate-300 hover:text-[#C2593F] transition-all">Client Reviews</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#C2593F]">Contact Details</h4>
            <p className="text-xs text-slate-300 flex items-center gap-2">
              <Phone size={14} className="text-[#C2593F] shrink-0" />
              <span>+91 98480 22338</span>
            </p>
            <p className="text-xs text-slate-300 flex items-center gap-2">
              <Mail size={14} className="text-[#C2593F] shrink-0" />
              <span>reservations@vantillu-catering.com</span>
            </p>
            <p className="text-xs text-slate-300 flex items-start gap-2">
              <MapPin size={14} className="text-[#C2593F] shrink-0 mt-0.5" />
              <span>Plot No. 42, HMT Nagar, Near Uppal Metro, Hyderabad, Telangana 500039</span>
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#C2593F]">Kitchen Hours</h4>
            <p className="text-xs text-slate-300 flex items-center gap-2">
              <Clock size={14} className="text-[#C2593F] shrink-0" />
              <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C2593F] text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} Vantillu Caterers. All Rights Reserved.</span>
          <span className="flex items-center gap-1 mt-2 sm:mt-0">
            Design grounded in Telugu Culinary Pride <Heart size={10} className="text-[#C2593F]" /> Uppal, Hyderabad.
          </span>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, RefreshCw, Gem, Crown, Sliders, ArrowRight, Shield, Check, 
  Calendar, Users, Utensils, Menu, X, Heart, Share2, Instagram, CheckCircle2
} from 'lucide-react';

export default function SriVenkateshwaraCaterersPage() {
  // Menu Customizer State
  const [eventType, setEventType] = useState('Traditional Kalyanam (Wedding)');
  const [guests, setGuests] = useState(350);
  const [menuTier, setMenuTier] = useState('Venkateshwara Special Buffet');

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [toast, setToast] = useState(null);

  // Customizer config
  const platePrices = {
    'Traditional Kalyanam (Wedding)': {
      'Traditional Elai (Banana Leaf)': 650,
      'Venkateshwara Special Buffet': 950,
      'Grand Royal Veg Spread': 1450
    },
    'Corporate Satyanarayana Vratam': {
      'Traditional Elai (Banana Leaf)': 550,
      'Venkateshwara Special Buffet': 800,
      'Grand Royal Veg Spread': 1200
    },
    'Upanayanam / Housewarming': {
      'Traditional Elai (Banana Leaf)': 500,
      'Venkateshwara Special Buffet': 750,
      'Grand Royal Veg Spread': 1100
    }
  };

  const getPriceBreakdown = () => {
    const baseRate = platePrices[eventType][menuTier];
    const baseCost = guests * baseRate;
    const gheeSweetsSurcharge = menuTier === 'Traditional Elai (Banana Leaf)' ? guests * 50 : menuTier === 'Venkateshwara Special Buffet' ? guests * 80 : 0;
    const setupAndTransport = menuTier === 'Traditional Elai (Banana Leaf)' ? 10000 : menuTier === 'Venkateshwara Special Buffet' ? 8000 : 15000;
    const subtotal = baseCost + gheeSweetsSurcharge + setupAndTransport;
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    return {
      baseRate,
      baseCost,
      gheeSweetsSurcharge,
      setupAndTransport,
      gst,
      total
    };
  };

  const { baseRate, baseCost, gheeSweetsSurcharge, setupAndTransport, gst, total } = getPriceBreakdown();

  const getMockMenu = () => {
    if (menuTier === 'Traditional Elai (Banana Leaf)') {
      return [
        { category: "Welcome Drinks", items: ["Traditional Panakam", "Fresh Coconut Water"] },
        { category: "Mandapam Sweets", items: ["Purnam Boorelu with Pure Ghee", "Ghee Mysore Pak"] },
        { category: "Rice & Ghee", items: ["Steamed Sona Masuri Rice", "Pure Buffalo Ghee (Neyyi)"] },
        { category: "Traditional curries & Dal", items: ["Tomato Pappu", "Gutti Vankaya Kura (Stuffed Eggplant)", "Chikkudukaya Kobbari Kura (Broad Beans Fry)"] },
        { category: "Pickles & Powders", items: ["Mamidikaya Avakaya", "Gongura Pickle", "Kandi Podi with Ghee"] },
        { category: "Sambar & Rasam", items: ["Traditional Kalyana Sambar", "Tomato Rasam", "Majjiga Pulusu"] },
        { category: "Accompaniments", items: ["Appadam (Papad)", "Vadiyalu", "Ripe Banana"] },
        { category: "Finishers", items: ["Traditional Sweet Curd", "Betel Leaf & Areca Nut (Meetha Pan)"] }
      ];
    } else if (menuTier === 'Venkateshwara Special Buffet') {
      return [
        { category: "Welcome Drinks", items: ["Almond Pistachio Badam Milk", "Mint Lemon Sparkler"] },
        { category: "Sweets & Desserts", items: ["Hot Kaju Katli", "Garam Moong Dal Halwa", "Angoori Rabdi"] },
        { category: "Starters (Live Counters)", items: ["Paneer Tikka Angaar", "Veg Manchurian Dry", "Gobi 65"] },
        { category: "Main Course (Curries)", items: ["Paneer Butter Masala", "Gutti Vankaya (Stuffed Eggplant)", "Malai Kofta", "Dal Makhani"] },
        { category: "Rice Specials", items: ["Bagara Baingan with Veg Pulav", "Jeera Rice", "Sambar Rice with Ghee"] },
        { category: "Breads", items: ["Butter Naan", "Tandoori Roti", "Rumali Roti"] },
        { category: "Salads & Accompaniments", items: ["Boondi Raita", "Green Salad", "Assorted Pickles & Papads"] },
        { category: "Desserts", items: ["Traditional Apricot Delight with Ice Cream", "Vanilla Kulfi"] }
      ];
    } else {
      return [
        { category: "Royal Welcome Mocktails", items: ["Thandai", "Mango Lassi with Saffron", "Spiced Rose Cooler"] },
        { category: "Grand Sweets", items: ["Live Garam Jalebi with Rabdi Counter", "Dry Fruit Halwa", "Kaju Pista Roll"] },
        { category: "Gourmet Starters (Live)", items: ["Live Roomali Naan Roll Counter", "Paneer Malai Tikka", "Baby Corn Manchuria", "Stuffed Mushroom Kebabs", "Crispy Aloo Tikki"] },
        { category: "Grand Main Course", items: ["Royal Paneer Pasanda", "Gutti Vankaya Kura", "Kadhai Veg Special", "Yellow Dal Fry with Double Tadka"] },
        { category: "Rice Heritage", items: ["Hyderabadi Veg Dum Biryani", "Mirchi Ka Salan", "Saffron Jeera Rice", "Curd Rice with Pomegranate & Grapes"] },
        { category: "Live Tandoor Breads", items: ["Stuffed Amritsari Kulcha", "Garlic Butter Naan", "Missi Roti"] },
        { category: "Dessert & Pan Royale", items: ["Baked Apricot Halwa (Specialty)", "Moti Choor Rabdi Parfait", "Live Matka Kulfi Counter", "Royal Meetha Pan Counter"] }
      ];
    }
  };

  const handleApplyBlueprint = () => {
    setForm(prev => ({
      ...prev,
      notes: `Vegetarian Menu Blueprint locked:\n- Event: ${eventType}\n- Guest Count: ${guests}\n- Service Tier: ${menuTier} (₹${baseRate}/plate)\n- Estimated Grand Total: ₹${total.toLocaleString('en-IN')}`
    }));
    showToast("Traditional menu blueprint copied to booking notes below!");
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    
    const cleanPhone = form.phone.replace(/[\s-]/g, '');
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && !/^\+91[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) errs.date = 'Event date is required';

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast("Please fix the validation errors in the form.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: `SVC-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form,
        eventType,
        guests,
        menuTier,
        totalCost: total
      });
      showToast("Traditional consultation booked successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F1] text-[#2C2C28] font-sans selection:bg-[#FF9F1C]/20 selection:text-[#FF9F1C] antialiased pb-16">
      {/* Dynamic Font and Traditional Neumorphic Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        .shadow-neu-outset {
          box-shadow: 9px 9px 18px #e2e2dd, -9px -9px 18px #ffffff;
        }
        .shadow-neu-inset {
          box-shadow: inset 8px 8px 16px #dfdfda, inset -8px -8px 16px #ffffff;
        }
        .shadow-neu-outset-sm {
          box-shadow: 4px 4px 10px #e2e2dd, -4px -4px 10px #ffffff;
        }
        .shadow-neu-inset-sm {
          box-shadow: inset 4px 4px 8px #dfdfda, inset -4px -4px 8px #ffffff;
        }
        .shadow-neu-gold-outset {
          box-shadow: 4px 4px 12px #dfdfda, -4px -4px 12px #ffffff;
        }
      `}</style>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#2C2C28] text-white py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
          <Sparkles size={16} className="text-[#FF9F1C]" />
          <span className="text-xs font-semibold">{toast}</span>
        </div>
      )}

      {/* Header / Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-[#F4F4F1]/90 backdrop-blur-md border-b border-[#EBEBE6] py-5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight text-[#2C2C28]">
              Sri Venkateshwara <span className="text-[#FF9F1C]">Caterers</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-bold text-slate-500 mt-0.5">
              Pure Vegetarian Heritage Catering — Uppal
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-body uppercase tracking-widest font-bold">
            <a href="#heritage" className="text-slate-600 hover:text-[#FF9F1C] transition-colors">Legacy</a>
            <a href="#estimator" className="text-slate-600 hover:text-[#FF9F1C] transition-colors">Menu Customizer</a>
            <a href="#dishes" className="text-slate-600 hover:text-[#FF9F1C] transition-colors">Heritage Dishes</a>
            <a href="#testimonials" className="text-slate-600 hover:text-[#FF9F1C] transition-colors">Testimonials</a>
            <a href="#booking" className="px-5 py-3 rounded-full bg-[#F4F4F1] text-[#FF9F1C] shadow-neu-outset-sm hover:shadow-neu-inset-sm transition-all active:scale-95">
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F4F1] shadow-neu-inset-sm text-[#FF9F1C] text-xs font-body font-bold w-fit mx-auto lg:mx-0">
              <Award size={14} />
              <span>100% Pure Vegetarian Kitchen Since 1998</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#2C2C28] leading-[1.15]">
              A Legacy of Pure <br />
              <span className="text-[#FF9F1C]">Vegetarian Gastronomy</span> & Royal Spreads.
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light font-body">
              Crafting sacred wedding feasts, Satyanarayana Vrata Prasadam, and grand corporate vegeterian buffets in Uppal, Gachibowli and Secunderabad. We source premium stone-ground spices and pure cow ghee to deliver authentic tastes of tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-body">
              <a 
                href="#estimator"
                className="px-8 py-4 bg-[#FF9F1C] hover:bg-[#E08A12] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-neu-gold-outset hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Design Veg Buffet</span>
                <ArrowRight size={14} />
              </a>
              <a 
                href="#booking"
                className="px-8 py-4 bg-[#F4F4F1] text-slate-700 font-bold text-xs uppercase tracking-widest rounded-full shadow-neu-outset hover:shadow-neu-inset transition-all active:scale-95 flex items-center justify-center"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Symmetrical Framed Neumorphic Collage */}
          <div className="lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[440px] p-4 bg-[#F4F4F1] shadow-neu-outset rounded-3xl border-2 border-[#FF9F1C]/20">
              <div className="w-full h-full border border-[#FF9F1C]/30 rounded-2xl p-3 flex flex-col justify-between items-center relative overflow-hidden bg-[#F4F4F1]">
                {/* Traditional corner gold lines */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#FF9F1C]"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#FF9F1C]"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#FF9F1C]"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#FF9F1C]"></div>

                <span className="text-[9px] uppercase tracking-widest font-body font-bold text-slate-400">Authentic Veg</span>
                
                <div className="my-auto flex flex-col items-center">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-neu-inset-sm p-2 bg-[#F4F4F1] border border-[#EBEBE6]">
                    <img 
                      src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Traditional South Indian feast" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-[#2C2C28] mt-4 font-bold">Banana Leaf Kalyanam</h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#FF9F1C] font-body font-bold mt-1">Heritage Banquet</span>
                </div>

                <div className="flex gap-1.5 items-center">
                  <Star size={10} className="text-[#FF9F1C] fill-[#FF9F1C]" />
                  <Star size={10} className="text-[#FF9F1C] fill-[#FF9F1C]" />
                  <Star size={10} className="text-[#FF9F1C] fill-[#FF9F1C]" />
                  <Star size={10} className="text-[#FF9F1C] fill-[#FF9F1C]" />
                  <Star size={10} className="text-[#FF9F1C] fill-[#FF9F1C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Story / Legacy Section */}
      <section id="heritage" className="bg-[#EBEBE6]/40 py-20 border-y border-[#E2E2DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Legacy Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-body uppercase tracking-[0.2em] font-extrabold text-[#FF9F1C]">Our Legacy</span>
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28]">
                25 Years of Sacred Taste & <br />
                Pristine Brahmin-Supervised Hygiene
              </h2>
              <div className="w-16 h-1 bg-[#FF9F1C] rounded-full"></div>
              <p className="text-sm text-slate-600 leading-relaxed font-light font-body">
                Founded in Uppal Cross Roads in 1998, Sri Venkateshwara Caterers is built on the foundation of purity and hospitality. We cater exclusively to vegetarian gatherings, upholding age-old culinary processes. We do not use artificial colors, preservatives, or taste enhancers.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-light font-body">
                From classical banana leaf spreads where food is served in a specific sequence to modern luxury buffet spreads, our team handles setup, logistics, and hospitality. Every single ingredient is quality checked by our senior kitchen head to maintain the legacy of trust.
              </p>
            </div>

            {/* Metrics cards grid (Neumorphic) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 font-body">
              <div className="bg-[#F4F4F1] p-6 rounded-3xl shadow-neu-outset text-center flex flex-col justify-center items-center">
                <Utensils size={28} className="text-[#FF9F1C] mb-3" />
                <span className="text-3xl font-extrabold text-[#2C2C28]">25+ Years</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Culinary Legacy</span>
              </div>
              <div className="bg-[#F4F4F1] p-6 rounded-3xl shadow-neu-outset text-center flex flex-col justify-center items-center">
                <Users size={28} className="text-[#FF9F1C] mb-3" />
                <span className="text-3xl font-extrabold text-[#2C2C28]">5,000+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Sacred Events</span>
              </div>
              <div className="bg-[#F4F4F1] p-6 rounded-3xl shadow-neu-outset text-center col-span-2 flex items-center justify-around">
                <div className="flex items-center gap-3">
                  <Shield size={24} className="text-[#FF9F1C]" />
                  <div className="text-left font-body">
                    <div className="text-lg font-bold text-[#2C2C28]">100% Vegetarian Kitchen</div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Brahmin Cooks & Pure Ghee Only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Estimator Customizer Section */}
      <section id="estimator" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-body uppercase tracking-[0.25em] font-extrabold text-[#FF9F1C]">Custom Spread Estimator</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
            Calculate Traditional Veg Buffet
          </h2>
          <p className="text-slate-500 text-xs font-body mt-2 font-medium">
            Toggle event type, guest count slider, and vegetarian menu tiers to calculate dynamic packages.
          </p>
          <div className="w-12 h-1 bg-[#FF9F1C] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start font-body">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-[#F4F4F1] p-8 rounded-3xl shadow-neu-outset space-y-8 border border-[#EBEBE6]/60">
            <div className="flex items-center gap-3 pb-4 border-b border-[#EBEBE6]">
              <Sliders size={20} className="text-[#FF9F1C]" />
              <h3 className="text-lg font-bold text-[#2C2C28]">Estimator Dashboard</h3>
            </div>

            {/* Event Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-extrabold text-slate-500 block">
                1. Select Event Ceremony
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Traditional Kalyanam (Wedding)', 'Corporate Satyanarayana Vratam', 'Upanayanam / Housewarming'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    className={`py-3 px-3 rounded-2xl text-[10px] uppercase tracking-wider font-bold transition-all active:scale-95 ${
                      eventType === type 
                        ? 'bg-[#FF9F1C] text-white shadow-neu-gold-outset' 
                        : 'bg-[#F4F4F1] text-slate-700 shadow-neu-outset-sm hover:text-[#FF9F1C]'
                    }`}
                  >
                    {type.split(" (")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Input & Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                  2. Projected Guests
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number"
                    min="50"
                    max="2000"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(50, Math.min(2000, parseInt(e.target.value) || 50)))}
                    className="w-20 p-2 text-center text-xs font-bold text-slate-700 bg-[#F4F4F1] rounded-xl shadow-neu-inset-sm border-none outline-none focus:ring-1 focus:ring-[#FF9F1C]"
                  />
                  <span className="text-xs text-slate-400">Guests</span>
                </div>
              </div>
              <input 
                type="range"
                min="50"
                max="1500"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-300 accent-[#FF9F1C] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>50 Guests</span>
                <span>750 Guests</span>
                <span>1500+ Guests</span>
              </div>
            </div>

            {/* Menu Tier */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-extrabold text-slate-500 block">
                3. Choose Vegetarian Catering Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Traditional Elai (Banana Leaf)', 'Venkateshwara Special Buffet', 'Grand Royal Veg Spread'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setMenuTier(tier)}
                    className={`py-3 px-2 rounded-2xl text-[10px] uppercase tracking-wider font-bold transition-all active:scale-95 ${
                      menuTier === tier 
                        ? 'bg-[#FF9F1C] text-white shadow-neu-gold-outset' 
                        : 'bg-[#F4F4F1] text-slate-700 shadow-neu-outset-sm hover:text-[#FF9F1C]'
                    }`}
                  >
                    {tier.split(" (")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Locked summary pricing */}
            <div className="pt-6 border-t border-[#EBEBE6] space-y-3 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Base plate cost ({guests} × ₹{baseRate}):</span>
                <span className="font-bold text-slate-800">₹{baseCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Pure Ghee Sweet Surcharge ({menuTier === 'Grand Royal Veg Spread' ? 'Inclusive' : `₹${menuTier === 'Traditional Elai (Banana Leaf)' ? '50' : '80'}/guest`}):</span>
                <span className="font-bold text-slate-800">₹{gheeSweetsSurcharge.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Banana Leaf Sourcing & Traditional Setup fee:</span>
                <span className="font-bold text-slate-800">₹{setupAndTransport.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>GST (18%):</span>
                <span className="font-bold text-slate-800">₹{gst.toLocaleString('en-IN')}</span>
              </div>
              <div className="h-[1px] bg-[#EBEBE6] my-2"></div>
              <div className="flex justify-between items-center text-sm font-extrabold text-[#2C2C28]">
                <span className="uppercase tracking-wide">Grand Estimate:</span>
                <span className="text-xl text-[#FF9F1C] font-extrabold">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleApplyBlueprint}
              className="w-full py-4 bg-[#F4F4F1] hover:bg-[#FF9F1C] text-[#FF9F1C] hover:text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-neu-outset hover:shadow-neu-gold-outset transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} />
              <span>Copy Veg Menu Blueprint to Booking Notes</span>
            </button>
          </div>

          {/* Dynamic Menu Preview */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#F4F4F1] p-8 rounded-3xl shadow-neu-outset border border-[#EBEBE6]/60">
              <div className="text-center pb-4 border-b border-[#EBEBE6]">
                <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Catering Items</h4>
                <div className="text-lg font-bold text-[#2C2C28] mt-1 font-display">
                  {menuTier.split(" (")[0]} List
                </div>
              </div>

              {/* Dynamic items container */}
              <div className="mt-6 space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                {getMockMenu().map((sect, idx) => (
                  <div key={idx} className="space-y-1.5 text-left">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block">
                      {sect.category}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {sect.items.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#EBEBE6] text-center text-[10px] text-slate-400 font-light">
                *Strictly vegetarian cooking. All garlic-free options available on demand.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section id="dishes" className="bg-[#EBEBE6]/40 py-20 border-y border-[#E2E2DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-body uppercase tracking-[0.25em] font-extrabold text-[#FF9F1C]">Royal Vegetarian</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
              Signature Traditional Dishes
            </h2>
            <div className="w-12 h-1 bg-[#FF9F1C] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Purnam Boorelu with Ghee",
                desc: "Sacred sweet dumplings stuffed with sweet chana dal, cardamom, and coconut, deep-fried to a golden crisp and served warm with pure cow ghee.",
                image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Heritage Sweet"
              },
              {
                title: "Gutti Vankaya Kura",
                desc: "Tender local eggplants stuffed with a rich, roasted paste of peanuts, sesame seeds, coconut, and traditional Andhra spices, slow simmered to thick perfection.",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Andhra Classic"
              },
              {
                title: "Jalebi & Rabdi Live Counter",
                desc: "Crispy hot jalebis prepared live in pure ghee, soaked in saffron syrup, served with thick chilled overnight-simmered rabdi.",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Live Theater"
              },
              {
                title: "Grand Curd Rice",
                desc: "Soft steamed rice blended with chilled fresh yogurt, tempered with mustard seeds, curry leaves, ginger, and topped with fresh sweet pomegranate seeds.",
                image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Banquet Finisher"
              }
            ].map((dish, i) => (
              <div key={i} className="bg-[#F4F4F1] rounded-3xl p-4 shadow-neu-outset hover:scale-[1.01] transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden relative shadow-neu-inset-sm">
                    <img 
                      src={dish.image} 
                      alt={dish.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2.5 right-2.5 px-3 py-1 bg-[#F4F4F1] shadow-neu-outset-sm rounded-full text-[9px] uppercase tracking-wider font-extrabold text-[#FF9F1C] font-body">
                      {dish.badge}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#2C2C28] mt-4 mb-2">{dish.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed font-body">{dish.desc}</p>
                </div>
                <button 
                  onClick={() => {
                    setForm(prev => ({ ...prev, notes: `Inquiry regarding traditional dish: ${dish.title}` }));
                    showToast(`Applied ${dish.title} inquiry to booking notes!`);
                  }}
                  className="mt-4 py-2 text-center text-[10px] uppercase font-bold tracking-widest text-[#FF9F1C] hover:text-[#E08A12] flex items-center justify-center gap-1 border-t border-[#EBEBE6] pt-3 font-body"
                >
                  <span>Inquire Dish</span>
                  <ChevronRight size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="max-w-3xl mx-auto px-6 py-20 font-body">
        <div className="text-center mb-12">
          <span className="text-xs font-body uppercase tracking-[0.25em] font-extrabold text-[#FF9F1C]">Request Quote</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
            Schedule Catering Consultation
          </h2>
          <p className="text-slate-500 text-xs mt-2 font-medium">
            Book a call or showroom visit to lock your wedding date and customize your menu spreads.
          </p>
          <div className="w-12 h-1 bg-[#FF9F1C] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-[#F4F4F1] rounded-3xl p-8 md:p-12 shadow-neu-outset border border-[#EBEBE6]/60">
          {submittedData ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-neu-outset-sm">
                <Check size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-800">Booking Scheduled!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your consultation has been logged. Our traditional catering expert will contact you within 2 hours.
              </p>
              <div className="bg-[#F4F4F1] border border-[#EBEBE6]/50 shadow-neu-inset-sm p-5 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-2 font-mono">
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Reference ID:</span> <span className="font-bold text-slate-700">{submittedData.id}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Ceremony:</span> <span className="font-bold text-slate-700">{submittedData.eventType}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Spread Tier:</span> <span className="font-bold text-slate-700">{submittedData.menuTier}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Date:</span> <span className="font-bold text-slate-700">{submittedData.date}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Guests:</span> <span className="font-bold text-slate-700">{submittedData.guests}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Kitchen:</span> <span className="font-bold text-[#FF9F1C]">Sri Venkateshwara Catering</span></div>
              </div>
              <button
                onClick={() => setSubmittedData(null)}
                className="px-6 py-3 bg-[#F4F4F1] text-[#FF9F1C] font-bold text-xs uppercase tracking-widest rounded-full shadow-neu-outset hover:shadow-neu-inset transition-all active:scale-95"
              >
                Schedule Another Event
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ramesh Ananth"
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF9F1C] outline-none text-slate-700 transition-all font-medium ${errors.name ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 9440048291"
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF9F1C] outline-none text-slate-700 transition-all font-medium ${errors.phone ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. ramesh@domain.com"
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF9F1C] outline-none text-slate-700 transition-all font-medium ${errors.email ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Event Date *</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF9F1C] outline-none text-slate-700 transition-all font-medium ${errors.date ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.date && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.date}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Notes & Special Requirements</label>
                <textarea
                  rows="4"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Paste locked menu blueprint, or specify details like garlic-free options, custom ghee sweets, or service staff styling..."
                  className="w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF9F1C] outline-none text-slate-700 transition-all font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#FF9F1C] hover:bg-[#E08A12] text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-neu-gold-outset transition-all active:scale-[0.98] disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    <span>Booking Consultation...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Schedule Appointment</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-[#EBEBE6]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-body uppercase tracking-[0.25em] font-extrabold text-[#FF9F1C]">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
            Praise From Sincere Celebrations
          </h2>
          <div className="w-12 h-1 bg-[#FF9F1C] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "We hired Sri Venkateshwara Caterers for my daughter's wedding in Secunderabad. The Traditional Banana Leaf feast was executed with incredible authenticity. The servers wore pristine traditional dhotis, and every curry was rich in taste and pure ghee.",
              author: "Ranganathan Iyer",
              location: "Secunderabad",
              rating: 5
            },
            {
              text: "Our housewarming (Grihapravesham) in Gachibowli was a grand success. Their live Jalebi & Rabdi counter was the highlight. Sincere team, punctual delivery from their Uppal kitchen, and outstanding cleanliness.",
              author: "Hima Bindu",
              location: "Gachibowli, Hyderabad",
              rating: 5
            },
            {
              text: "For pure vegetarian wedding catering, they are simply the best in Uppal. The guest count calculations on their website estimator were very accurate. Outstanding taste without any artificial additives.",
              author: "K. Satish Kumar",
              location: "Uppal, Hyderabad",
              rating: 5
            }
          ].map((review, i) => (
            <div key={i} className="bg-[#F4F4F1] p-8 rounded-3xl shadow-neu-outset border border-[#EBEBE6]/60 flex flex-col justify-between">
              <div className="space-y-4 font-body">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, rIdx) => (
                    <Star key={rIdx} size={12} className="text-[#FF9F1C] fill-[#FF9F1C]" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic font-light font-display">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EBEBE6] flex items-center gap-3 font-body">
                <div className="w-9 h-9 rounded-full bg-[#F4F4F1] shadow-neu-inset-sm flex items-center justify-center text-xs font-bold text-[#FF9F1C]">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2C28]">{review.author}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Store Details */}
      <footer className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 border-t border-[#EBEBE6] font-body text-xs">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Col 1 */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-extrabold text-[#2C2C28]">
              Sri Venkateshwara <span className="text-[#FF9F1C]">Caterers</span>
            </h3>
            <p className="text-slate-500 leading-relaxed font-light">
              Hyderabad's premier vegetarian catering legacy. Serving authentic South & North Indian culinary masterpieces with strict adherence to traditional processes and modern hygiene standards.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4 md:pl-10">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Catering Kitchen</h4>
            <ul className="space-y-3 text-slate-500 font-light">
              <li className="flex justify-center md:justify-start items-start gap-2">
                <MapPin size={14} className="text-[#FF9F1C] shrink-0 mt-0.5" />
                <span>Door No. 12-4/A, Saraswathi Nagar, Uppal Cross Roads, Hyderabad, Telangana 500039</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone size={14} className="text-[#FF9F1C] shrink-0" />
                <span className="font-mono font-medium">+91 94400 48291, +91 40 2720 4455</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail size={14} className="text-[#FF9F1C] shrink-0" />
                <span className="font-mono">bookings@srivenkateshwaracaterers.com</span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Office Hours</h4>
            <div className="text-slate-500 space-y-1.5 font-light">
              <div>Monday — Sunday: 8:00 AM — 9:30 PM</div>
              <div>Consultations: Showcase bookings by prior reservation</div>
              <div className="pt-2 flex justify-center md:justify-start gap-3">
                <a href="#" className="p-2 bg-[#F4F4F1] rounded-xl shadow-neu-outset-sm hover:text-[#FF9F1C]">
                  <Instagram size={14} />
                </a>
                <a href="#" className="p-2 bg-[#F4F4F1] rounded-xl shadow-neu-outset-sm hover:text-[#FF9F1C]">
                  <Share2 size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#EBEBE6] text-center text-slate-400 font-light text-[10px]">
          © {new Date().getFullYear()} Sri Venkateshwara Caterers Uppal. All rights reserved. Upholding culinary purity.
        </div>
      </footer>
    </div>
  );
}

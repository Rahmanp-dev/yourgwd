"use client";

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, RefreshCw, Gem, Crown, Sliders, ArrowRight, Shield, Check, 
  Calendar, Users, Utensils, Menu, X, Heart, Share2, Instagram, CheckCircle2
} from 'lucide-react';

export default function JaswanthCaterersPage() {
  // Menu Customizer State
  const [eventType, setEventType] = useState('Wedding Gala');
  const [guests, setGuests] = useState(250);
  const [menuTier, setMenuTier] = useState('Premium');

  // Consultation Form State
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [toast, setToast] = useState(null);

  // Customizer calculations
  const platePrices = {
    'Wedding Gala': { Standard: 950, Premium: 1350, Royal: 1950 },
    'Corporate Buffet': { Standard: 800, Premium: 1100, Royal: 1600 },
    'Celebration/Birthday': { Standard: 650, Premium: 900, Royal: 1300 }
  };

  const getPriceBreakdown = () => {
    const baseRate = platePrices[eventType][menuTier];
    const baseCost = guests * baseRate;
    const liveCountersCost = menuTier === 'Standard' ? 0 : menuTier === 'Premium' ? guests * 120 : guests * 250;
    const serviceStaffCharge = guests < 100 ? 6000 : guests < 300 ? 12000 : 20000;
    const subtotal = baseCost + liveCountersCost + serviceStaffCharge;
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    return {
      baseRate,
      baseCost,
      liveCountersCost,
      serviceStaffCharge,
      gst,
      total
    };
  };

  const { baseRate, baseCost, liveCountersCost, serviceStaffCharge, gst, total } = getPriceBreakdown();

  const getMockMenu = () => {
    if (menuTier === 'Standard') {
      return [
        { category: "Welcome Drinks", items: ["Spiced Mint Mojito", "Fresh Watermelon Cooler"] },
        { category: "Starters (Live)", items: ["Veg Manchurian", "Paneer Tikka Angaar", "Chilli Soya Sticks"] },
        { category: "Main Course", items: ["Vegetable Dum Pulav", "Paneer Butter Masala", "Aloo Gobhi Adraki", "Dal Tadka"] },
        { category: "Hyderabadi Special", items: ["Chicken Dum Biryani (Or Shahi Veg Biryani)", "Mirchi Ka Salan", "Dahi Ki Chatni"] },
        { category: "Breads", items: ["Butter Naan", "Tandoori Roti", "Rumali Roti"] },
        { category: "Desserts", items: ["Double Ka Meetha (Traditional)", "Vanilla Ice Cream with Chocolate Sauce"] }
      ];
    } else if (menuTier === 'Premium') {
      return [
        { category: "Welcome Drinks", items: ["Rose Lassi with Pistachio", "Blue Lagoon mocktail", "Assorted Soft Drinks"] },
        { category: "Starters (Live)", items: ["Chicken Seekh Kebab", "Fish Amritsari", "Hariyali Paneer Tikka", "Lasagna Bites"] },
        { category: "Main Course", items: ["Mutton Rogan Josh", "Butter Chicken Boneless", "Kadhai Veg Special", "Dal Makhani (Overnight Simmered)"] },
        { category: "Hyderabadi Special", items: ["Gourmet Mutton Dum Biryani", "Zafrani Paneer Biryani", "Mirchi Ka Salan", "Bagara Baingan"] },
        { category: "Breads", items: ["Garlic Naan", "Rumali Roti", "Lachha Paratha"] },
        { category: "Desserts", items: ["Shahi Qubani Ka Meetha with Vanilla Ice Cream", "Garam Moong Dal Halwa", "Angoori Rabdi"] }
      ];
    } else {
      return [
        { category: "Welcome & Live Mocktails", items: ["Royal Saffron Almond Shake", "Kiwi Mint Sparkler", "Nitrogen Smoke Mocktails"] },
        { category: "Royal Starters (Pathar Counter)", items: ["Live Pathar Ka Gosht", "Tandoori Garlic Butter Prawns", "Stuffed Malai Broccoli", "Cheese Jalapeno Poppers"] },
        { category: "Main Course Royale", items: ["Nizami Mutton Korma", "Shahi Butter Chicken", "Avocado & Pomegranate Salad", "Paneer Pasanda", "Exotic Veg Jalfrezi"] },
        { category: "Grand Biryani & Haleem", items: ["Authentic Zafrani Mutton Dum Biryani", "Royal Chicken Biryani", "Special Hyderabadi Mutton Haleem with Ghee & Cashews"] },
        { category: "Live Bakery", items: ["Assorted Stuffed Kulchas", "Garlic Butter Naan", "Khamiri Roti"] },
        { category: "Signature Desserts", items: ["Gourmet Apricot Delight (Special)", "Baked Double Ka Meetha", "Traditional Rabdi Kulfi Live Counter", "Assorted French Macarons"] }
      ];
    }
  };

  const handleApplyBlueprint = () => {
    setForm(prev => ({
      ...prev,
      notes: `Estimated menu blueprint locked:\n- Event: ${eventType}\n- Guest Count: ${guests}\n- Menu Tier: ${menuTier} Tier (₹${baseRate}/plate)\n- Projected Total: ₹${total.toLocaleString('en-IN')}`
    }));
    showToast("Menu customizer blueprint applied to booking notes below!");
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
        id: `JC-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form,
        eventType,
        guests,
        menuTier,
        totalCost: total
      });
      showToast("Consultation booked successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F1] text-[#2C2C28] font-sans selection:bg-[#FF5E36]/20 selection:text-[#FF5E36] antialiased pb-16">
      {/* Dynamic Font and Custom Neumorphic Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-accent { font-family: 'Outfit', sans-serif; }

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
        .shadow-neu-orange-outset {
          box-shadow: 4px 4px 12px #dfdfda, -4px -4px 12px #ffffff;
        }
      `}</style>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#2C2C28] text-white py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
          <Sparkles size={16} className="text-[#FF5E36]" />
          <span className="text-xs font-semibold">{toast}</span>
        </div>
      )}

      {/* Header / Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-[#F4F4F1]/90 backdrop-blur-md border-b border-[#EBEBE6] py-5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight text-[#2C2C28]">
              Jaswanth <span className="text-[#FF5E36]">Caterers</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-accent font-semibold text-slate-500 mt-0.5">
              Modern Fusion & Nizami Cuisine — Uppal
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-accent uppercase tracking-widest font-bold">
            <a href="#heritage" className="text-slate-600 hover:text-[#FF5E36] transition-colors">Heritage</a>
            <a href="#estimator" className="text-slate-600 hover:text-[#FF5E36] transition-colors">Menu Customizer</a>
            <a href="#dishes" className="text-slate-600 hover:text-[#FF5E36] transition-colors">Signature Dishes</a>
            <a href="#testimonials" className="text-slate-600 hover:text-[#FF5E36] transition-colors">Reviews</a>
            <a href="#booking" className="px-5 py-3 rounded-full bg-[#F4F4F1] text-[#FF5E36] shadow-neu-outset-sm hover:shadow-neu-inset-sm transition-all active:scale-95">
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F4F1] shadow-neu-inset-sm text-[#FF5E36] text-xs font-accent font-bold w-fit mx-auto lg:mx-0">
              <Award size={14} />
              <span>HACCP Certified Food Safety & Quality</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#2C2C28] leading-[1.15]">
              The Art of Fusion & Feast. <br />
              <span className="text-[#FF5E36]">Bespoke Catering</span> for Grand Events.
            </h1>
            <p className="text-sm lg:text-base text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light">
              Crafting unforgettable gourmet memories in Uppal and across Hyderabad since 2011. We specialize in live food theater, authentic wood-fired Hyderabadi Biryani, and global fusion recipes styled to perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-accent">
              <a 
                href="#estimator"
                className="px-8 py-4 bg-[#FF5E36] hover:bg-[#E54D27] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-neu-orange-outset hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Design Custom Menu</span>
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

          {/* Neumorphic Food Collage */}
          <div className="lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[440px]">
              {/* Image 1: Main */}
              <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-[#F4F4F1] rounded-3xl p-3 shadow-neu-outset overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Premium catering spread" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Image 2: Overlay Top Right */}
              <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-[#F4F4F1] rounded-3xl p-2.5 shadow-neu-outset overflow-hidden z-10 hover:translate-y-[-8px] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Chef plating food" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Small Floating badge */}
              <div className="absolute top-1/2 left-[-16px] bg-[#F4F4F1] shadow-neu-outset p-4 rounded-2xl z-20 flex flex-col items-center justify-center border border-[#EBEBE6]">
                <Crown size={22} className="text-[#FF5E36] animate-pulse" />
                <span className="text-[9px] font-accent uppercase tracking-wider font-bold mt-1 text-[#2C2C28]">Royal Taste</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Story Section */}
      <section id="heritage" className="bg-[#EBEBE6]/40 py-20 border-y border-[#E2E2DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-accent uppercase tracking-[0.2em] font-extrabold text-[#FF5E36]">Our Heritage</span>
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28]">
                Uppal's Culinary Pride: <br />
                Spiced with Heritage, Styled with Passion
              </h2>
              <div className="w-16 h-1 bg-[#FF5E36] rounded-full"></div>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                From a small specialty cloud kitchen in Uppal, Jaswanth Caterers has flourished into one of Hyderabad's most sought-after full-service caterers. Our chefs bring a decade of expertise, mastering both traditional wood-fired Dum Biryani cooking and delicate, continental catering layouts.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We follow a strict zero-compromise hygiene standard. With top-tier HACCP certification, sanitised kitchens, and fresh organic produce sourced from local farms in Rangareddy district, your guests are served nothing but premium perfection.
              </p>
            </div>

            {/* Metrics cards grid (Neumorphic) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 font-accent">
              <div className="bg-[#F4F4F1] p-6 rounded-3xl shadow-neu-outset text-center flex flex-col justify-center items-center">
                <Users size={28} className="text-[#FF5E36] mb-3" />
                <span className="text-3xl font-extrabold text-[#2C2C28]">1,200+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Events Catered</span>
              </div>
              <div className="bg-[#F4F4F1] p-6 rounded-3xl shadow-neu-outset text-center flex flex-col justify-center items-center">
                <Utensils size={28} className="text-[#FF5E36] mb-3" />
                <span className="text-3xl font-extrabold text-[#2C2C28]">50+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Master Chefs</span>
              </div>
              <div className="bg-[#F4F4F1] p-6 rounded-3xl shadow-neu-outset text-center col-span-2 flex items-center justify-around">
                <div className="flex items-center gap-3">
                  <Shield size={24} className="text-[#FF5E36]" />
                  <div className="text-left">
                    <div className="text-lg font-bold text-[#2C2C28]">HACCP Certified</div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">100% Hygiene Standard</div>
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
          <span className="text-xs font-accent uppercase tracking-[0.25em] font-extrabold text-[#FF5E36]">Bespoke Customizer</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
            Build Your Event Feast & Estimate Price
          </h2>
          <p className="text-slate-500 text-xs font-accent mt-2 font-medium">
            Tweak event parameters in real time. Dynamic plate calculations, staff, live counters, and GST estimate.
          </p>
          <div className="w-12 h-1 bg-[#FF5E36] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start font-accent">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-[#F4F4F1] p-8 rounded-3xl shadow-neu-outset space-y-8 border border-[#EBEBE6]/60">
            <div className="flex items-center gap-3 pb-4 border-b border-[#EBEBE6]">
              <Sliders size={20} className="text-[#FF5E36]" />
              <h3 className="text-lg font-bold text-[#2C2C28]">Estimator Dashboard</h3>
            </div>

            {/* Event Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-extrabold text-slate-500 block">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Wedding Gala', 'Corporate Buffet', 'Celebration/Birthday'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    className={`py-3 px-4 rounded-2xl text-xs uppercase tracking-wider font-bold transition-all active:scale-95 ${
                      eventType === type 
                        ? 'bg-[#FF5E36] text-white shadow-neu-orange-outset' 
                        : 'bg-[#F4F4F1] text-slate-700 shadow-neu-outset-sm hover:text-[#FF5E36]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Input & Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                  2. Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number"
                    min="20"
                    max="1500"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(20, Math.min(1500, parseInt(e.target.value) || 20)))}
                    className="w-20 p-2 text-center text-xs font-bold text-slate-700 bg-[#F4F4F1] rounded-xl shadow-neu-inset-sm border-none outline-none focus:ring-1 focus:ring-[#FF5E36]"
                  />
                  <span className="text-xs text-slate-400">Guests</span>
                </div>
              </div>
              <input 
                type="range"
                min="20"
                max="1000"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-300 accent-[#FF5E36] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>20 Guests</span>
                <span>500 Guests</span>
                <span>1000+ Guests</span>
              </div>
            </div>

            {/* Menu Tier */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-extrabold text-slate-500 block">
                3. Choose Menu Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Standard', 'Premium', 'Royal'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setMenuTier(tier)}
                    className={`py-3 px-4 rounded-2xl text-xs uppercase tracking-wider font-bold transition-all active:scale-95 ${
                      menuTier === tier 
                        ? 'bg-[#FF5E36] text-white shadow-neu-orange-outset' 
                        : 'bg-[#F4F4F1] text-slate-700 shadow-neu-outset-sm hover:text-[#FF5E36]'
                    }`}
                  >
                    {tier}
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
                <span>Live Counter Charges ({menuTier === 'Standard' ? 'None' : `₹${menuTier === 'Premium' ? '120' : '250'}/guest`}):</span>
                <span className="font-bold text-slate-800">₹{liveCountersCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Service staff & Transport:</span>
                <span className="font-bold text-slate-800">₹{serviceStaffCharge.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>GST (18%):</span>
                <span className="font-bold text-slate-800">₹{gst.toLocaleString('en-IN')}</span>
              </div>
              <div className="h-[1px] bg-[#EBEBE6] my-2"></div>
              <div className="flex justify-between items-center text-sm font-extrabold text-[#2C2C28]">
                <span className="uppercase tracking-wide">Grand Estimate (Total):</span>
                <span className="text-xl text-[#FF5E36] font-extrabold">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleApplyBlueprint}
              className="w-full py-4 bg-[#F4F4F1] hover:bg-[#FF5E36] text-[#FF5E36] hover:text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-neu-outset hover:shadow-neu-orange-outset transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} />
              <span>Lock & Copy Blueprint to Form</span>
            </button>
          </div>

          {/* Dynamic Menu Preview */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#F4F4F1] p-8 rounded-3xl shadow-neu-outset border border-[#EBEBE6]/60">
              <div className="text-center pb-4 border-b border-[#EBEBE6]">
                <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF5E36]">Dynamic Preview</h4>
                <div className="text-lg font-bold text-[#2C2C28] mt-1 font-display">
                  {menuTier} Tier Selection
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
                *Menu items are customisable based on dietary requirements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section id="dishes" className="bg-[#EBEBE6]/40 py-20 border-y border-[#E2E2DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-accent uppercase tracking-[0.25em] font-extrabold text-[#FF5E36]">Chef Specials</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
              Signature Premium Dishes
            </h2>
            <div className="w-12 h-1 bg-[#FF5E36] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Dum Ka Mutton Biryani",
                desc: "Wood-fired classic cooked over 6 hours with long-grain Basmati rice, premium tender goat meat, and house-ground spices.",
                image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Hyderabadi Classic"
              },
              {
                title: "Pathar Ka Gosht",
                desc: "Thin lamb fillets marinated in raw papaya, black pepper, and stone spices, cooked live on heated granite stones.",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Live counter best"
              },
              {
                title: "Avocado Dahi Puri",
                desc: "Modern fusion street food. Crispy hollow semolina puries filled with hass avocado chunks, spiced yogurt, and sweet tamarind glaze.",
                image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Fusion Starter"
              },
              {
                title: "Gourmet Apricot Delight",
                desc: "Stuffed apricots slow-stewed, layered with fresh whipped vanilla cream custard, crispy crumbles, and topped with dry fruits.",
                image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                badge: "Signature Dessert"
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
                    <div className="absolute top-2.5 right-2.5 px-3 py-1 bg-[#F4F4F1] shadow-neu-outset-sm rounded-full text-[9px] uppercase tracking-wider font-extrabold text-[#FF5E36] font-accent">
                      {dish.badge}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#2C2C28] mt-4 mb-2">{dish.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{dish.desc}</p>
                </div>
                <button 
                  onClick={() => {
                    setForm(prev => ({ ...prev, notes: `Inquiry regarding Signature Dish: ${dish.title}` }));
                    showToast(`Applied ${dish.title} inquiry to booking notes!`);
                  }}
                  className="mt-4 py-2 text-center text-[10px] uppercase font-bold tracking-widest text-[#FF5E36] hover:text-[#E54D27] flex items-center justify-center gap-1 border-t border-[#EBEBE6] pt-3 font-accent"
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
      <section id="booking" className="max-w-3xl mx-auto px-6 py-20 font-accent">
        <div className="text-center mb-12">
          <span className="text-xs font-accent uppercase tracking-[0.25em] font-extrabold text-[#FF5E36]">Reserve Date</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
            Schedule Private Consultation
          </h2>
          <p className="text-slate-500 text-xs mt-2 font-medium">
            Lock your date, submit event requirements, and our senior catering planner will call you back.
          </p>
          <div className="w-12 h-1 bg-[#FF5E36] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-[#F4F4F1] rounded-3xl p-8 md:p-12 shadow-neu-outset border border-[#EBEBE6]/60">
          {submittedData ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-neu-outset-sm">
                <Check size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-800">Booking Confirmed!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your consultation has been logged. Our culinary designer will reach out to you within 2 hours.
              </p>
              <div className="bg-[#F4F4F1] border border-[#EBEBE6]/50 shadow-neu-inset-sm p-5 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-2 font-mono">
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Reference ID:</span> <span className="font-bold text-slate-700">{submittedData.id}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Event:</span> <span className="font-bold text-slate-700">{submittedData.eventType} ({submittedData.menuTier} Menu)</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Date:</span> <span className="font-bold text-slate-700">{submittedData.date}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Guests:</span> <span className="font-bold text-slate-700">{submittedData.guests}</span></div>
                <div><span className="text-slate-400 uppercase tracking-wider font-extrabold">Caterer:</span> <span className="font-bold text-[#FF5E36]">Jaswanth Caterers Uppal</span></div>
              </div>
              <button
                onClick={() => setSubmittedData(null)}
                className="px-6 py-3 bg-[#F4F4F1] text-[#FF5E36] font-bold text-xs uppercase tracking-widest rounded-full shadow-neu-outset hover:shadow-neu-inset transition-all active:scale-95"
              >
                Book Another Event
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
                    placeholder="e.g. Jaswanth Rao"
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF5E36] outline-none text-slate-700 transition-all font-medium ${errors.name ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 9849028172"
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF5E36] outline-none text-slate-700 transition-all font-medium ${errors.phone ? 'ring-1 ring-red-500' : ''}`}
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
                    placeholder="e.g. jaswanth@domain.com"
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF5E36] outline-none text-slate-700 transition-all font-medium ${errors.email ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Event Date *</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF5E36] outline-none text-slate-700 transition-all font-medium ${errors.date ? 'ring-1 ring-red-500' : ''}`}
                  />
                  {errors.date && <p className="text-red-500 mt-1 text-[10px] font-bold">{errors.date}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-slate-500 font-extrabold uppercase tracking-wider">Notes & Custom Menu Preferences</label>
                <textarea
                  rows="4"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Paste locked menu blueprint, or specify dietary preferences, dessert choices, or live counter customization..."
                  className="w-full p-4 bg-[#F4F4F1] border-none rounded-2xl shadow-neu-inset-sm focus:ring-1 focus:ring-[#FF5E36] outline-none text-slate-700 transition-all font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#FF5E36] hover:bg-[#E54D27] text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-neu-orange-outset transition-all active:scale-[0.98] disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    <span>Booking Consultation...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Request Callback</span>
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
          <span className="text-xs font-accent uppercase tracking-[0.25em] font-extrabold text-[#FF5E36]">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#2C2C28] mt-2">
            Loved By Hyderabad Families
          </h2>
          <div className="w-12 h-1 bg-[#FF5E36] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "We booked Jaswanth Caterers for our reception in Gachibowli. The live Pathar Ka Gosht counter was a massive hit. Absolute hygiene, polite staff, and outstanding presentation. The menu customizer helped us stay in budget!",
              author: "Nikhil Reddy",
              location: "Gachibowli, Hyderabad",
              rating: 5
            },
            {
              text: "Gourmet food at its best. Their cloud kitchen in Uppal delivered a heavy corporate lunch spread for 150 guests. The Fusion Avocado Dahi Puri was discussed by everyone for days. Exceptional cleanliness.",
              author: "Pooja Sharma",
              location: "Uppal, Hyderabad",
              rating: 5
            },
            {
              text: "A truly premium wedding banquet experience. From the nitrogen mocktails to the traditional Zafrani Mutton Biryani, the culinary execution was flawless. Highly recommend their Royal Tier package.",
              author: "Sridhar Rao",
              location: "Secunderabad",
              rating: 5
            }
          ].map((review, i) => (
            <div key={i} className="bg-[#F4F4F1] p-8 rounded-3xl shadow-neu-outset border border-[#EBEBE6]/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, rIdx) => (
                    <Star key={rIdx} size={12} className="text-[#FF5E36] fill-[#FF5E36]" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic font-light font-display">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EBEBE6] flex items-center gap-3 font-accent">
                <div className="w-9 h-9 rounded-full bg-[#F4F4F1] shadow-neu-inset-sm flex items-center justify-center text-xs font-bold text-[#FF5E36]">
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
      <footer className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 border-t border-[#EBEBE6] font-accent text-xs">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Col 1 */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-extrabold text-[#2C2C28]">
              Jaswanth <span className="text-[#FF5E36]">Caterers</span>
            </h3>
            <p className="text-slate-500 leading-relaxed font-light">
              Premium catering services bringing fusion mocktails, hot live kitchen counters, and authentic wood-fired Hyderabadi Dum Biryani straight to your grand celebration in Hyderabad.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4 md:pl-10">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF5E36]">Catering Showroom</h4>
            <ul className="space-y-3 text-slate-500 font-light">
              <li className="flex justify-center md:justify-start items-start gap-2">
                <MapPin size={14} className="text-[#FF5E36] shrink-0 mt-0.5" />
                <span>Plot 42, Kalyan Nagar Colony, Near Metro Station, Uppal, Hyderabad, Telangana 500039</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone size={14} className="text-[#FF5E36] shrink-0" />
                <span className="font-mono font-medium">+91 98490 28172</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail size={14} className="text-[#FF5E36] shrink-0" />
                <span className="font-mono">bookings@jaswanthcaterers.com</span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF5E36]">Business Hours</h4>
            <div className="text-slate-500 space-y-1.5 font-light">
              <div>Monday — Sunday: 9:00 AM — 9:00 PM</div>
              <div>Consultations: Prior Appointment Recommended</div>
              <div className="pt-2 flex justify-center md:justify-start gap-3">
                <a href="#" className="p-2 bg-[#F4F4F1] rounded-xl shadow-neu-outset-sm hover:text-[#FF5E36]">
                  <Instagram size={14} />
                </a>
                <a href="#" className="p-2 bg-[#F4F4F1] rounded-xl shadow-neu-outset-sm hover:text-[#FF5E36]">
                  <Share2 size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#EBEBE6] text-center text-slate-400 font-light text-[10px]">
          © {new Date().getFullYear()} Jaswanth Caterers Uppal. All rights reserved. Designed for Premium Taste.
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Utensils, 
  ChefHat, 
  Calendar, 
  Users, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

// Menu categories and items based on tier
const MENU_TIERS = {
  standard: {
    name: "Nizam's Standard Feast",
    price: 550,
    description: "A gorgeous compilation of classic Telugu staples and local favorites, crafted with wood-fired authenticity.",
    items: {
      starters: ["Purnam Boorelu (Traditional sweet lentil dumplings)", "Gobi Kempu (Crisp spiced cauliflower)", "Chilli Baby Corn Fry"],
      mains: ["Guntur Gongura Pappu with hot ghee rice", "Ulavacharu Chicken Biryani (or Paneer Biryani)", "Guthi Vankaya Kura (Stuffed baby eggplant)", "Natu Kodi Pulusu (Country chicken stew)"],
      sides: ["Sambar & Rasam", "Perugu Pachadi", "Appadam & Vadiyalu"],
      desserts: ["Traditional Bellam Pootharekulu", "Apricot Delight with vanilla cream"]
    }
  },
  premium: {
    name: "Royal Kakatiya Banquet",
    price: 850,
    description: "An elevated dining experience featuring royal Telangana recipes and exquisite slow-cooked delicacies.",
    items: {
      starters: ["Kodi Kura Chitti Gaare (Mini vadas with chicken curry shot)", "Mirapakaya Bajji with peanut chutney fill", "Paneer Tikka Khas"],
      mains: ["Royal Mutton Pulasa Curry / Kakatiya Mutton Pulao", "Special Avakaya Chicken Biryani", "Mamidikaya Pappu (Mango dal)", "Kaju Kothimira Vankaya (Cashew eggplant)"],
      sides: ["Pachi Pulusu (Traditional cold tamarind rasam)", "Dondakaya Kaju Fry", "Majjiga Pulusu"],
      desserts: ["Shahi Tukda with saffron rabri", "Warm Bellam Jalebi with live counter"]
    }
  },
  royal: {
    name: "Chola Emperor's Maha Rajabhojanam",
    price: 1450,
    description: "The ultimate culinary odyssey. Imperial silver-service plating with premium signature recipes and live gourmet stations.",
    items: {
      starters: ["Gongura Royyala Veepudu (Sorrel-spiced prawns)", "Vellulli Mamsam Seekh (Garlic-infused lamb)", "Mokkajonna Gaarelu (Crisp sweetcorn patties)"],
      mains: ["Nellore Chepala Pulusu (Heritage fish curry)", "Nalli Boti Zafrani Biryani", "Panasa Pandu Pulao (Jackfruit pulao)", "Ulavacharu Mutton Biryani", "Gongura Mamsam (Slow-cooked mutton in sorrel)"],
      sides: ["Mulakkada Tomato Curry (Drumstick tomato)", "Kobbari Pachadi (Fresh coconut chutney)", "Saffron Curd Rice"],
      desserts: ["Traditional Gold-leaf Pootharekulu", "Annamayya Sakkera Pongali (Ghee-rich rice pudding)", "Live Apricot Halwa with vanilla bean gelato"]
    }
  }
};

const EVENT_TYPES = [
  { id: 'wedding', name: 'Grand Telugu Wedding / Reception', multiplier: 1.0 },
  { id: 'half-saree', name: 'Traditional Half-Saree Ceremony', multiplier: 0.95 },
  { id: 'housewarming', name: 'Festive Gruhapravesam (Housewarming)', multiplier: 0.9 },
  { id: 'corporate', name: 'Corporate Silver Jubilee Banquet', multiplier: 1.05 }
];

const ADDONS = [
  { id: 'live_jalebi', name: 'Live Hot Bellam Jalebi Station', price: 45 },
  { id: 'mocktail_bar', name: 'Royal Telugu Mocktail Bar (Tamarind & Rose)', price: 35 },
  { id: 'silver_service', name: 'Premium Brass & Silver Serve-ware Layout', price: 65 }
];

export default function NewVinduCaterersPage() {
  // Customizer State
  const [selectedEvent, setSelectedEvent] = useState('wedding');
  const [guestCount, setGuestCount] = useState(250);
  const [selectedTier, setSelectedTier] = useState('premium');
  const [selectedAddons, setSelectedAddons] = useState(['live_jalebi']);
  const [customizerSaved, setCustomizerSaved] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing Calculations
  const pricingSummary = useMemo(() => {
    const tierInfo = MENU_TIERS[selectedTier];
    const eventInfo = EVENT_TYPES.find(e => e.id === selectedEvent);
    
    const basePlateRate = Math.round(tierInfo.price * (eventInfo?.multiplier || 1));
    const addonsRate = selectedAddons.reduce((sum, addonId) => {
      const addon = ADDONS.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
    
    const platePrice = basePlateRate + addonsRate;
    const subtotal = platePrice * guestCount;
    const gst = Math.round(subtotal * 0.18); // 18% GST for catering
    const grandTotal = subtotal + gst;

    return {
      basePlateRate,
      addonsRate,
      platePrice,
      subtotal,
      gst,
      grandTotal
    };
  }, [selectedTier, selectedEvent, guestCount, selectedAddons]);

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  // Form Validations
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit mobile number starting with 6-9';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.eventDate) {
      errors.eventDate = 'Event date is required';
    } else {
      const dateVal = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (dateVal < today) {
        errors.eventDate = 'Date cannot be in the past';
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
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventDate: '',
      notes: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF5EC] text-[#800020] selection:bg-[#800020] selection:text-[#FAF5EC]">
      
      {/* Telugu Mandala Graphic Accent top border */}
      <div className="h-2 bg-gradient-to-r from-[#D4AF37] via-[#800020] to-[#D4AF37]" />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-20 pb-28 px-6 lg:px-8 border-b border-[#D4AF37]/35 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]">
        {/* Decorative SVG borders */}
        <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37] opacity-60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37] opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#800020]/5 border border-[#800020]/20 rounded-full text-xs font-semibold tracking-widest uppercase text-[#800020] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              ESTABLISHED IN UPPAL &bull; LEGENDARY FEASTS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-[#800020] leading-none">
              New Vindu Caterers
            </h1>
            <p className="text-xl md:text-2xl font-[family-name:var(--font-display)] text-[#D4AF37] italic font-medium">
              Vindhu Bhojanam — Recreating the Grand Feasts of Telugu Royals
            </p>
            <p className="text-base md:text-lg text-[#800020]/80 max-w-2xl font-[family-name:var(--font-body)] leading-relaxed">
              We bring the rustic, aromatic grandeur of traditional Andhra and Telangana wood-fired catering to your weddings, housewarmings, and celebrations. Crafted with local hand-ground spices and time-honored techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#customizer" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#800020] hover:bg-[#600018] text-[#FAF5EC] text-sm font-semibold tracking-widest uppercase rounded shadow-lg transition-all duration-200 active:scale-95 border border-transparent hover:border-[#D4AF37]"
              >
                Estimate Feast Price
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#consultation" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#800020] text-[#800020] hover:bg-[#800020]/5 text-sm font-semibold tracking-widest uppercase rounded transition-all duration-200 active:scale-95"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-lg overflow-hidden border-2 border-[#D4AF37] shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600" 
                    alt="Traditional South Indian Wedding Feast" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-lg overflow-hidden border border-[#D4AF37]/50 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" 
                    alt="Traditional Telugu Sweets" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-40 rounded-lg overflow-hidden border border-[#D4AF37]/50 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600" 
                    alt="Wood-Fired Pots Biryani Cooking" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-lg overflow-hidden border-2 border-[#D4AF37] shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600" 
                    alt="Authentic Spicy Curries" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Background Decorative Gold Halo */}
            <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Brand Story / Heritage */}
      <section id="heritage" className="py-24 px-6 lg:px-8 bg-[#800020] text-[#FAF5EC] relative overflow-hidden">
        {/* Subtle gold pattern background overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <ChefHat className="w-12 h-12 text-[#D4AF37] mx-auto animate-bounce" />
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] tracking-wider">
            Our Heritage & Culinary Legacy
          </h2>
          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto" />
          
          <div className="space-y-6 text-lg text-[#FAF5EC]/95 font-[family-name:var(--font-body)] leading-relaxed text-justify md:text-center">
            <p>
              Born from a legacy of backyard culinary festivals in Uppal, Hyderabad, <strong>New Vindu Caterers</strong> was founded on the belief that a wedding feast is not just food, but a sacred covenant of hospitality. Over three decades, we have refined the art of cooking Telugu banquets, maintaining the rigorous traditions of <em>Vindhu Bhojanam</em>.
            </p>
            <p>
              Our master chefs originate from the coastal districts of Andhra and the rustic kitchens of Telangana, bringing authentic spice profiles to life. We utilize slow, wood-fired clay ovens (<em>Kattaipoyyi</em>) for our legendary Ulavacharu Biryanis, imparting a smoky complexity that cannot be replicated in modern gas kitchens.
            </p>
            <p>
              Every ingredient is handpicked. We procure our Gongura leaves fresh daily from local Uppal farms, and our ghee is churned in-house from high-fat dairy sourced directly from rural cooperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-6 border border-[#D4AF37]/35 rounded bg-[#800020]/30 backdrop-blur">
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-[#D4AF37] text-lg font-bold mb-2">100% Raw Spices</h3>
              <p className="text-sm text-[#FAF5EC]/80">Zero industrial pre-mixes. All spice masalas are stone-ground in our central kitchen.</p>
            </div>
            <div className="p-6 border border-[#D4AF37]/35 rounded bg-[#800020]/30 backdrop-blur">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-[#D4AF37] text-lg font-bold mb-2">ISO 22000 Certified</h3>
              <p className="text-sm text-[#FAF5EC]/80">Rigorous microbiological screening of ingredients. State-of-the-art sterile packing.</p>
            </div>
            <div className="p-6 border border-[#D4AF37]/35 rounded bg-[#800020]/30 backdrop-blur">
              <Clock className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-[#D4AF37] text-lg font-bold mb-2">Flawless Timings</h3>
              <p className="text-sm text-[#FAF5EC]/80">Dedicated logistics and insulation ensure piping hot food delivery within minutes of cooking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Customizer & Estimator */}
      <section id="customizer" className="py-24 px-6 lg:px-8 border-b border-[#D4AF37]/35 relative bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.1),transparent_40%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] text-[#800020] font-semibold">
              The Vindhu Feast Planner
            </h2>
            <p className="text-[#800020]/75 font-[family-name:var(--font-body)]">
              Customize your event scale, select a royal tier, and choose live food stations. See real-time price estimations and visual menus immediately.
            </p>
            <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Customizer Controls */}
            <div className="lg:col-span-7 bg-white/60 backdrop-blur border border-[#D4AF37]/40 p-8 rounded-lg shadow-md space-y-8">
              {/* Event type picker */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold tracking-wider uppercase text-[#800020] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  1. Select Occasion
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EVENT_TYPES.map((evt) => (
                    <button
                      key={evt.id}
                      onClick={() => {
                        setSelectedEvent(evt.id);
                        setCustomizerSaved(false);
                      }}
                      className={`text-left p-4 rounded border text-xs font-semibold tracking-wider uppercase transition-all active:scale-[0.98] ${
                        selectedEvent === evt.id
                          ? 'bg-[#800020] text-[#FAF5EC] border-[#800020] shadow-md'
                          : 'bg-[#FAF5EC]/30 text-[#800020] border-[#D4AF37]/40 hover:bg-[#800020]/5'
                      }`}
                    >
                      {evt.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold tracking-wider uppercase text-[#800020] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    2. Guest Capacity
                  </label>
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold bg-[#800020]/5 px-3 py-1 rounded border border-[#800020]/10">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={guestCount}
                  onChange={(e) => {
                    setGuestCount(parseInt(e.target.value));
                    setCustomizerSaved(false);
                  }}
                  className="w-full accent-[#800020] cursor-pointer h-2 bg-[#D4AF37]/20 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-xs text-[#800020]/60 font-semibold font-[family-name:var(--font-body)]">
                  <span>Min: 50</span>
                  <span>Recommended: 250 - 800</span>
                  <span>Max: 1500</span>
                </div>
              </div>

              {/* Menu Tier Select */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold tracking-wider uppercase text-[#800020] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#D4AF37]" />
                  3. Select Culinary Tier
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(MENU_TIERS).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedTier(key);
                        setCustomizerSaved(false);
                      }}
                      className={`text-left p-4 rounded border transition-all active:scale-[0.98] flex flex-col justify-between ${
                        selectedTier === key
                          ? 'bg-[#800020] text-[#FAF5EC] border-[#800020] shadow-md'
                          : 'bg-[#FAF5EC]/30 text-[#800020] border-[#D4AF37]/40 hover:bg-[#800020]/5'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold tracking-widest uppercase mb-1">
                          {value.name.split(" ")[0]}
                        </span>
                        <span className="text-[10px] opacity-80 block line-clamp-2 leading-tight">
                          {value.name}
                        </span>
                      </div>
                      <span className={`text-base font-bold font-[family-name:var(--font-display)] mt-3 block ${
                        selectedTier === key ? 'text-[#D4AF37]' : 'text-[#800020]'
                      }`}>
                        ₹{value.price}/plate
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Checklist */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold tracking-wider uppercase text-[#800020] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  4. Royal Experience Addons
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {ADDONS.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        onClick={() => {
                          toggleAddon(addon.id);
                          setCustomizerSaved(false);
                        }}
                        className={`flex items-center justify-between p-4 rounded border cursor-pointer select-none transition-all active:scale-[0.99] ${
                          isChecked
                            ? 'bg-[#800020]/10 border-[#800020] text-[#800020]'
                            : 'bg-[#FAF5EC]/30 border-[#D4AF37]/40 text-[#800020]/80 hover:bg-[#800020]/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="w-4 h-4 accent-[#800020]"
                          />
                          <span className="text-xs font-bold uppercase tracking-wider">{addon.name}</span>
                        </div>
                        <span className="text-xs font-bold text-[#D4AF37] font-[family-name:var(--font-display)]">
                          +₹{addon.price}/plate
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Quick Quote Info Button */}
              <div className="flex items-start gap-2 bg-[#FAF5EC] border border-[#D4AF37]/30 p-3.5 rounded text-xs leading-normal">
                <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#800020]/80 font-medium font-[family-name:var(--font-body)]">
                  Estimates are based on live seasonal sourcing in Uppal, Hyderabad. Dynamic adjustments apply for events during premium wedding dates.
                </span>
              </div>
            </div>

            {/* Live Pricing Breakdown & Mock Menu Items */}
            <div className="lg:col-span-5 space-y-6">
              {/* Pricing Invoice card */}
              <div className="bg-[#FAF5EC] border-2 border-[#D4AF37] p-8 rounded-lg shadow-lg relative overflow-hidden">
                {/* Traditional motif background badge */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#D4AF37]/10 rounded-full" />
                
                <h3 className="text-xl font-[family-name:var(--font-display)] text-[#800020] border-b border-[#D4AF37]/35 pb-4 mb-4 font-bold tracking-wide uppercase flex items-center justify-between">
                  <span>Feast Estimate</span>
                  <span className="text-xs text-[#D4AF37]">Live Quote</span>
                </h3>

                <div className="space-y-4 font-[family-name:var(--font-body)] text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#800020]/80">Base Rate ({MENU_TIERS[selectedTier].name}):</span>
                    <span className="font-semibold text-right">₹{pricingSummary.basePlateRate}/plate</span>
                  </div>
                  {pricingSummary.addonsRate > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[#800020]/80">Selected Addons:</span>
                      <span className="font-semibold text-right">+₹{pricingSummary.addonsRate}/plate</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-[#D4AF37]/20 pt-2 font-bold text-[#800020]">
                    <span>Plate Price Subtotal:</span>
                    <span>₹{pricingSummary.platePrice}/plate</span>
                  </div>
                  <div className="flex justify-between text-base border-t border-[#D4AF37]/20 pt-2 font-bold text-[#800020]">
                    <span>Subtotal ({guestCount} Guests):</span>
                    <span>₹{pricingSummary.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#800020]/75 border-b border-[#D4AF37]/20 pb-4">
                    <span>GST (18% for Catering services):</span>
                    <span className="font-semibold">₹{pricingSummary.gst.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Grand Estimated Total</span>
                      <span className="text-xs text-[#800020]/60">(Inclusive of all Taxes)</span>
                    </div>
                    <span className="text-3xl font-bold font-[family-name:var(--font-display)] text-[#800020]">
                      ₹{pricingSummary.grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button 
                    onClick={() => {
                      setCustomizerSaved(true);
                      const customizerSection = document.getElementById('consultation');
                      if (customizerSection) {
                        customizerSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#800020] text-[#FAF5EC] hover:bg-[#600018] rounded text-xs font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
                  >
                    Confirm Menu & Request Customization
                  </button>
                  {customizerSaved && (
                    <div className="bg-[#D4AF37]/15 border border-[#D4AF37] text-[#800020] text-xs font-semibold py-2 px-3 rounded text-center animate-fade-in">
                      Menu configuration synced to booking form below!
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Menu Preview Card */}
              <div className="bg-white border border-[#D4AF37]/35 rounded-lg shadow-md p-6">
                <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Dynamic Menu Preview</h4>
                <h3 className="text-lg font-[family-name:var(--font-display)] text-[#800020] font-bold border-b border-[#FAF5EC] pb-2 mb-4">
                  {MENU_TIERS[selectedTier].name}
                </h3>
                
                <div className="space-y-4 text-xs font-[family-name:var(--font-body)]">
                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Imperial Starters
                    </h5>
                    <ul className="pl-5 list-disc text-[#800020]/80 space-y-0.5">
                      {MENU_TIERS[selectedTier].items.starters.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Royal Heritage Mains
                    </h5>
                    <ul className="pl-5 list-disc text-[#800020]/80 space-y-0.5">
                      {MENU_TIERS[selectedTier].items.mains.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Sides & Condiments
                    </h5>
                    <ul className="pl-5 list-disc text-[#800020]/80 space-y-0.5">
                      {MENU_TIERS[selectedTier].items.sides.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Traditional Sweet Endings
                    </h5>
                    <ul className="pl-5 list-disc text-[#800020]/80 space-y-0.5">
                      {MENU_TIERS[selectedTier].items.desserts.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAF5EC] border-b border-[#D4AF37]/35">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] text-[#800020] font-semibold">
              Signature Creations
            </h2>
            <p className="text-[#800020]/75 font-[family-name:var(--font-body)]">
              Our iconic wood-fired delicacies and heritage dessert designs that are sought-after in premium Hyderabad events.
            </p>
            <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dish 1 */}
            <div className="bg-white border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400" 
                  alt="Ulavacharu Chicken Biryani" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#800020] text-[#FAF5EC] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  Signature
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#800020]">
                  Ulavacharu Biryani
                </h3>
                <p className="text-xs text-[#800020]/70 font-[family-name:var(--font-body)] leading-relaxed">
                  Basmati rice slow-cooked with spiced horse-gram soup, loaded with tender country chicken or fresh paneer.
                </p>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-white border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" 
                  alt="Bellam Pootharekulu" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#800020] text-[#FAF5EC] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  Heritage
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#800020]">
                  Bellam Pootharekulu
                </h3>
                <p className="text-xs text-[#800020]/70 font-[family-name:var(--font-body)] leading-relaxed">
                  Lacy paper wafers made of rice starch, stuffed with organic liquid jaggery, crushed cashews, and aromatic cardamom.
                </p>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-white border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400" 
                  alt="Mutton Pulasa Curry" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#800020] text-[#FAF5EC] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  Royal Specialty
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#800020]">
                  Mutton Pulasa Curry
                </h3>
                <p className="text-xs text-[#800020]/70 font-[family-name:var(--font-body)] leading-relaxed">
                  Premium lamb stewed in a spicy, wood-fired iron skillet with native tamarind paste, coriander root, and sesame oils.
                </p>
              </div>
            </div>

            {/* Dish 4 */}
            <div className="bg-white border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400" 
                  alt="Guntur Gongura Pappu" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#800020] text-[#FAF5EC] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  Classic
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#800020]">
                  Gongura Pappu & Ghee
                </h3>
                <p className="text-xs text-[#800020]/70 font-[family-name:var(--font-body)] leading-relaxed">
                  Slow-simmered split pigeon peas boiled with Guntur sour Gongura leaves, tempered with mustard seeds and hot cow ghee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="consultation" className="py-24 px-6 lg:px-8 border-b border-[#D4AF37]/35 bg-[#FAF5EC]/50">
        <div className="max-w-3xl mx-auto bg-white border border-[#D4AF37]/45 rounded-lg shadow-xl overflow-hidden">
          <div className="bg-[#800020] text-[#FAF5EC] p-8 text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-wide uppercase">
              Schedule Your Banquet Audit
            </h2>
            <p className="text-xs tracking-widest uppercase text-[#D4AF37] font-semibold">
              Meet our master chef & sample the heritage flavors
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto" />
                <h3 className="text-2xl font-[family-name:var(--font-display)] text-[#800020] font-bold">
                  Consultation Requested Successfully!
                </h3>
                <p className="text-[#800020]/80 text-sm max-w-md mx-auto font-[family-name:var(--font-body)]">
                  Thank you, <strong>{formData.name}</strong>. Our booking manager will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 4 hours to confirm your chef tasting session.
                </p>
                
                {customizerSaved && (
                  <div className="bg-[#FAF5EC] border border-[#D4AF37]/50 p-4 rounded text-left max-w-md mx-auto text-xs space-y-1.5 text-[#800020]">
                    <span className="font-bold block uppercase tracking-wider border-b border-[#D4AF37]/25 pb-1">Saved Customization:</span>
                    <div><strong>Occasion:</strong> {EVENT_TYPES.find(e => e.id === selectedEvent)?.name}</div>
                    <div><strong>Guests:</strong> {guestCount} guests</div>
                    <div><strong>Menu Tier:</strong> {MENU_TIERS[selectedTier].name}</div>
                    <div><strong>Addons:</strong> {selectedAddons.length > 0 ? selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).join(', ') : 'None'}</div>
                    <div className="font-bold pt-1.5 border-t border-[#D4AF37]/20 flex justify-between">
                      <span>Total Estimated Cost:</span>
                      <span className="text-[#D4AF37]">₹{pricingSummary.grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#800020] text-[#FAF5EC] text-xs font-bold tracking-widest uppercase rounded transition-transform active:scale-95"
                >
                  Request Another Date
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Customizer Sticky Alert */}
                {customizerSaved && (
                  <div className="bg-[#FAF5EC] border border-[#D4AF37] p-3.5 rounded text-xs text-[#800020] flex items-center justify-between">
                    <span>Menu setup ({guestCount} Guests, {MENU_TIERS[selectedTier].name}) will be submitted.</span>
                    <span className="font-bold text-[#D4AF37]">Est: ₹{pricingSummary.grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Your Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded border bg-white text-[#800020] outline-none text-sm transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.name ? 'border-red-500' : 'border-[#D4AF37]/50'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-600 text-xs font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9849012345"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded border bg-white text-[#800020] outline-none text-sm transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.phone ? 'border-red-500' : 'border-[#D4AF37]/50'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-600 text-xs font-medium">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. ramesh.reddy@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded border bg-white text-[#800020] outline-none text-sm transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.email ? 'border-red-500' : 'border-[#D4AF37]/50'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-600 text-xs font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Date field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Preferred Event Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded border bg-white text-[#800020] outline-none text-sm transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.eventDate ? 'border-red-500' : 'border-[#D4AF37]/50'
                      }`}
                    />
                    {formErrors.eventDate && (
                      <p className="text-red-600 text-xs font-medium">{formErrors.eventDate}</p>
                    )}
                  </div>
                </div>

                {/* Notes/Custom requests */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#800020]">
                    Special Requests / Dietary Needs
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="e.g. Traditional welcome drinks, specific regional spice adjustments, or Guntur dosa live counter requests..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full p-3.5 rounded border border-[#D4AF37]/50 bg-white text-[#800020] outline-none text-sm focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#800020] hover:bg-[#600018] text-[#FAF5EC] text-sm font-semibold tracking-widest uppercase rounded shadow-lg transition-all duration-200 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Details...' : 'Request Consultation & Secure Date'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#FAF5EC] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] text-[#800020] font-semibold">
              Client Commendations
            </h2>
            <p className="text-[#800020]/75 font-[family-name:var(--font-body)]">
              Discover stories from elegant Telugu family celebrations and elite corporate affairs across Hyderabad.
            </p>
            <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-[#FAF5EC]/30 border border-[#D4AF37]/30 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex text-[#D4AF37] gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm italic text-[#800020]/95 font-[family-name:var(--font-body)] leading-relaxed mb-6">
                "We engaged New Vindu for my daughter's wedding in Uppal with 1200 guests. The wood-fired Ulavacharu Biryani and live Bellam Pootharekulu counters were spectacular. Our relatives from Guntur said the spice and authenticity was unmatched."
              </p>
              <div className="border-t border-[#D4AF37]/25 pt-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#800020]">Ananth Reddy</span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold font-[family-name:var(--font-body)]">Wedding Host &bull; Uppal</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#FAF5EC]/30 border border-[#D4AF37]/30 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex text-[#D4AF37] gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm italic text-[#800020]/95 font-[family-name:var(--font-body)] leading-relaxed mb-6">
                "For our corporate silver jubilee dinner in Gachibowli, we wanted a traditional Telugu buffet presentation with high sanitary standards. New Vindu delivered flawless execution. Impressive setup and very courteous service team."
              </p>
              <div className="border-t border-[#D4AF37]/25 pt-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#800020]">Radhika Rao</span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold font-[family-name:var(--font-body)]">HR Lead &bull; Gachibowli</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#FAF5EC]/30 border border-[#D4AF37]/30 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex text-[#D4AF37] gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm italic text-[#800020]/95 font-[family-name:var(--font-body)] leading-relaxed mb-6">
                "Our Gruhapravesam ceremony in Secunderabad was extremely successful. The Gongura Pappu and live hot Gaare counter made our breakfast unforgettable. Extremely hygienic, punctual, and helpful kitchen logistics."
              </p>
              <div className="border-t border-[#D4AF37]/25 pt-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#800020]">Satish Kumar</span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold font-[family-name:var(--font-body)]">House Owner &bull; Secunderabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#800020] text-[#FAF5EC] border-t-2 border-[#D4AF37] pt-16 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#FAF5EC]/10 pb-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-[#FAF5EC] font-semibold tracking-wide">
              New Vindu Caterers
            </h3>
            <p className="text-sm text-[#FAF5EC]/70 max-w-sm font-[family-name:var(--font-body)] leading-relaxed">
              Curators of authentic Telugu royal banquets, serving traditional Andhra & Telangana delicacies across Hyderabad since 1996.
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm font-[family-name:var(--font-body)]">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href="tel:+919849023456" className="hover:text-[#D4AF37] transition-colors">+91 98490 23456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href="mailto:info@newvinducaterers.com" className="hover:text-[#D4AF37] transition-colors">info@newvinducaterers.com</a>
              </li>
            </ul>
          </div>

          {/* Address Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Central Office
            </h4>
            <p className="text-sm font-[family-name:var(--font-body)] flex items-start gap-3 text-[#FAF5EC]/85 leading-normal">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Metro Pillar 724, Main Road,<br />
                Near Uppal Metro Station,<br />
                Uppal, Hyderabad, 500039
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[#FAF5EC]/50 font-[family-name:var(--font-body)] gap-4">
          <span>&copy; {new Date().getFullYear()} New Vindu Caterers. All Rights Reserved.</span>
          <span>Bespoke Design &bull; Royal Telugu Heritage Style</span>
        </div>
      </footer>
    </div>
  );
}

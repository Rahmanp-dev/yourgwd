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
  ChevronDown,
  Activity,
  Heart
} from 'lucide-react';

const MENU_TIERS = {
  silver: {
    name: "Shubhamaya Silver Collection",
    price: 750,
    description: "Bespoke plated starters and traditional Telugu delicacies presented with modern elegance.",
    items: {
      starters: ["Purnam Boorelu with saffron honey drizzle", "Mirapakaya Bajji with peanut emulsion", "Crispy Lotus Stem in curry leaf rub"],
      mains: ["Mamidikaya Pappu (Raw mango lentil mash)", "Natu Kodi Pulusu (Wood-fired village chicken curry)", "Panasa Pandu Pulao (Fragrant jackfruit pulao)", "Guthi Vankaya Kura (Stuffed baby eggplants)"],
      sides: ["Allam Pachadi (Ginger relish)", "Challa Charu (Traditional spiced buttermilk soup)"],
      desserts: ["Apricot Halwa with fresh cream", "Elachi Kheer topped with pistachios"]
    }
  },
  gold: {
    name: "Svarnamaya Golden Collection",
    price: 1250,
    description: "An aristocratic dining experience blending rare regional recipes with curated gold-standard hospitality.",
    items: {
      starters: ["Kodi Kura Chitti Gaare (Mini vadas with country chicken curry shots)", "Kakatiya Fish Tikka with mint yoghurt foam", "Panner Pasanda with Gongura glaze"],
      mains: ["Nellore Chepala Pulusu (Tangy heritage fish stew)", "Kakatiya Mutton Pulao", "Kaju Kothimira Vankaya (Cashew baby eggplant)", "Gongura Mamsam (Lamb slow-braised in sorrel leaves)"],
      sides: ["Pachi Pulusu (Chilled tamarind herb broth)", "Dondakaya Kaju Fry"],
      desserts: ["Khubani Ka Meetha with saffron rabri", "Warm Bellam Jalebi with cardamom ice cream"]
    }
  },
  diamond: {
    name: "Vajramaya Diamond Imperial Banquet",
    price: 1950,
    description: "The peak of luxury hospitality. Silver-plated table service, custom live counter layouts, and royal recipes.",
    items: {
      starters: ["Gongura Royyala Veepudu (Sorrel-spiced tiger prawns)", "Vellulli Mamsam Seekh (Garlic wood-fired lamb skewers)", "Crisp Corn Gaarelu with wild honey drizzle", "Tandoori Broccoli in cream cheese marinade"],
      mains: ["Royal Mutton Pulasa (Rare local fish or tender lamb in vintage gravy)", "Nalli Boti Zafrani Biryani", "Stuffed Malai Kofta in cashew saffron curry", "Bhimavaram Prawn Curry (Coastal prawn classic)", "Traditional Tomato Pappu with golden tempered ghee"],
      sides: ["In-house Avakaya Pachadi (Mango pickle)", "Saffron-infused Curd Rice with pomegranate pearls"],
      desserts: ["Royal Apricot Delight with 24K Gold Foil", "Shahi Tukda with almond-cardamom rabri", "Warm Badam Halwa with silver leaf decoration"]
    }
  }
};

const EVENT_TYPES = [
  { id: 'plated', name: 'VVIP Plated Reception / Dinner', multiplier: 1.1 },
  { id: 'engagement', name: 'Royal Engagement Gala', multiplier: 1.0 },
  { id: 'corporate', name: 'Elite Corporate Banquet', multiplier: 1.05 },
  { id: 'seemantham', name: 'Traditional Seemantham (Baby Shower)', multiplier: 0.95 }
];

const ADDONS = [
  { id: 'mocktail_lounge', name: 'Royal Saffron & Tamarind Mocktail Lounge', price: 75 },
  { id: 'gold_foil', name: '24K Gold Foil Dessert Presentation', price: 110 },
  { id: 'shehnai_band', name: 'Live Carnatic Classical / Shehnai Musicians', price: 80 }
];

export default function RaajThaarakCaterersPage() {
  // Customizer State
  const [selectedEvent, setSelectedEvent] = useState('plated');
  const [guestCount, setGuestCount] = useState(150);
  const [selectedTier, setSelectedTier] = useState('gold');
  const [selectedAddons, setSelectedAddons] = useState(['mocktail_lounge']);
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
    <div className="min-h-screen bg-[#FAF5EC] text-[#800020] selection:bg-[#800020] selection:text-[#FAF5EC] font-sans antialiased">
      
      {/* Decorative Gold Filigree Border Ribbon */}
      <div className="bg-[#800020] text-[#FAF5EC] text-center py-2 border-b border-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
        Aristocratic Dining &bull; Bespoke Plated Service &bull; Pure Satvik & Royal Kitchens
      </div>

      {/* Hero Header */}
      <section className="relative pt-24 pb-32 px-6 lg:px-8 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_60%)] overflow-hidden">
        {/* Subtle Frame borders to reflect Plated Luxury Vibe */}
        <div className="absolute inset-8 border border-[#D4AF37]/25 pointer-events-none rounded-sm hidden lg:block" />
        <div className="absolute inset-10 border-2 border-[#D4AF37]/10 pointer-events-none rounded-sm hidden lg:block" />

        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded text-[11px] font-bold tracking-[0.2em] uppercase text-[#800020]">
            IMPERIAL CATERING IN HYDERABAD
          </div>

          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold tracking-wide text-[#800020] leading-none uppercase">
            Raaj Thaarak
          </h1>
          <p className="text-lg md:text-xl font-[family-name:var(--font-display)] text-[#D4AF37] tracking-[0.25em] uppercase font-semibold">
            Caterers &bull; Banquet Designers
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-[#800020]/85 font-[family-name:var(--font-body)] leading-relaxed">
              Curators of fine-plated Telugu heritage dining. Celebrating the aristocratic recipes of the Deccan and the southern kingdoms, designed with contemporary artistic presentations.
            </p>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Uppal Depot, Hyderabad, Telangana
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#customizer" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#800020] hover:bg-[#600018] text-[#FAF5EC] text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all active:scale-95 border border-transparent hover:border-[#D4AF37]"
            >
              Estimate Royal Banquet
            </a>
            <a 
              href="#heritage" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#800020] text-[#800020] hover:bg-[#800020]/5 text-xs font-bold tracking-widest uppercase rounded-sm transition-all active:scale-95"
            >
              The Story
            </a>
          </div>
        </div>

        {/* Floating food design snapshots */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 relative z-10 px-4">
          <div className="h-48 border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md transform hover:-translate-y-1 transition-transform">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Plated Chicken Appetizer" />
          </div>
          <div className="h-48 border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md transform hover:-translate-y-1 transition-transform pt-4 md:pt-0">
            <img src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Saffron Biryani Platter" />
          </div>
          <div className="h-48 border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md transform hover:-translate-y-1 transition-transform">
            <img src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Curried Eggplant Dish" />
          </div>
          <div className="h-48 border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-md transform hover:-translate-y-1 transition-transform pt-4 md:pt-0">
            <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Pootharekulu Sweet Presentation" />
          </div>
        </div>
      </section>

      {/* Brand Story / Heritage */}
      <section id="heritage" className="py-24 px-6 lg:px-8 border-t border-b border-[#D4AF37]/35 bg-white relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="border border-[#D4AF37] p-4 rounded bg-[#FAF5EC]/30">
              <div className="h-[380px] rounded overflow-hidden relative shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600" 
                  alt="Elite plating layout" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#D4AF37]/10 -z-10 rounded-full" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <ChefHat className="w-8 h-8" />
              <span className="h-[1px] w-12 bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-widest font-bold">Aristocratic Dining Philosophy</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[#800020] font-bold uppercase tracking-wide">
              Flawless Presentation. Authentic Culinary Roots.
            </h2>
            
            <div className="space-y-4 text-base text-[#800020]/80 font-[family-name:var(--font-body)] leading-relaxed">
              <p>
                <strong>Raaj Thaarak Caterers</strong> operates at the junction where traditional Telugu cooking methods meet VVIP silver service. Established in Uppal, Hyderabad, we design bespoke banquets specifically for high-end families who require both absolute flavor precision and luxury visual presentations.
              </p>
              <p>
                We maintain strictly segregated, ISO-compliant kitchens for our Vegetarian (Satvik) and Non-Vegetarian offerings. We never use artificial colors or industrial flavor boosters—flavor profiles are built using freshly-ground spices, natural saffron strands, and slow braising over hardwood charcoal.
              </p>
              <p>
                From hand-pressed mini vadas served with premium country chicken shots to golden sheets of Pootharekulu wrapped in organic forest honey, we elevate local street and household classics into royal banquet staples.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 font-[family-name:var(--font-body)]">
              <div className="border-l-2 border-[#D4AF37] pl-4 space-y-1">
                <h4 className="text-sm font-bold text-[#800020] uppercase tracking-wider">Separate Kitchens</h4>
                <p className="text-xs text-[#800020]/70">Isolated facilities to guarantee absolute purity for Satvik preparations.</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-4 space-y-1">
                <h4 className="text-sm font-bold text-[#800020] uppercase tracking-wider">Premium Service</h4>
                <p className="text-xs text-[#800020]/70">Uniformed, English-speaking servers trained for plating and silver-service banqueting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Customizer & Estimator */}
      <section id="customizer" className="py-24 px-6 lg:px-8 border-b border-[#D4AF37]/35 bg-[#FAF5EC]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[#800020] font-bold uppercase tracking-wider">
              Royal Banquet Designer
            </h2>
            <p className="text-[#800020]/75 font-[family-name:var(--font-body)] text-sm">
              Design your signature banquet scale, choose VVIP menu tiers, and see immediate cost calculations.
            </p>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 bg-white border border-[#D4AF37]/35 p-8 rounded shadow-md space-y-8">
              {/* Event Occasion */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#800020] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  1. Occasion
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EVENT_TYPES.map(evt => (
                    <button
                      key={evt.id}
                      onClick={() => {
                        setSelectedEvent(evt.id);
                        setCustomizerSaved(false);
                      }}
                      className={`text-left p-4 rounded-sm border text-xs font-semibold tracking-wider uppercase transition-all active:scale-[0.98] ${
                        selectedEvent === evt.id
                          ? 'bg-[#800020] text-[#FAF5EC] border-[#800020]'
                          : 'bg-[#FAF5EC]/20 text-[#800020] border-[#D4AF37]/45 hover:bg-[#800020]/5'
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
                  <label className="text-xs font-bold uppercase tracking-widest text-[#800020] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    2. Intended Guest Count
                  </label>
                  <span className="font-[family-name:var(--font-display)] text-base font-bold bg-[#800020]/5 px-3 py-1 rounded border border-[#800020]/10">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => {
                    setGuestCount(parseInt(e.target.value));
                    setCustomizerSaved(false);
                  }}
                  className="w-full accent-[#800020] cursor-pointer h-2 bg-[#D4AF37]/20 rounded appearance-none"
                />
                <div className="flex justify-between text-[10px] text-[#800020]/60 font-semibold font-[family-name:var(--font-body)]">
                  <span>Min: 20</span>
                  <span>Recommended for Plating: 50 - 300</span>
                  <span>Max: 1000</span>
                </div>
              </div>

              {/* Menu Tiers */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#800020] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#D4AF37]" />
                  3. Banquet Menu Collection
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(MENU_TIERS).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedTier(key);
                        setCustomizerSaved(false);
                      }}
                      className={`text-left p-4 border transition-all active:scale-[0.98] flex flex-col justify-between rounded-sm ${
                        selectedTier === key
                          ? 'bg-[#800020] text-[#FAF5EC] border-[#800020] shadow'
                          : 'bg-[#FAF5EC]/20 text-[#800020] border-[#D4AF37]/45 hover:bg-[#800020]/5'
                      }`}
                    >
                      <div>
                        <span className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                          {value.name.split(" ")[0]} Collection
                        </span>
                        <span className="text-[10px] opacity-85 block leading-tight">
                          {value.name}
                        </span>
                      </div>
                      <span className={`text-base font-bold font-[family-name:var(--font-display)] mt-4 block ${
                        selectedTier === key ? 'text-[#D4AF37]' : 'text-[#800020]'
                      }`}>
                        ₹{value.price}/plate
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#800020] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  4. Signature Fine-Plated Upgrades
                </label>
                <div className="space-y-2.5">
                  {ADDONS.map(addon => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => {
                          toggleAddon(addon.id);
                          setCustomizerSaved(false);
                        }}
                        className={`flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-all active:scale-[0.99] ${
                          isChecked
                            ? 'bg-[#800020]/5 border-[#800020] text-[#800020]'
                            : 'bg-[#FAF5EC]/20 border-[#D4AF37]/45 text-[#800020]/80 hover:bg-[#800020]/5'
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
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quote Invoicing Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF5EC] border border-[#D4AF37] p-8 rounded shadow-md relative overflow-hidden">
                <h3 className="text-lg font-[family-name:var(--font-display)] text-[#800020] border-b border-[#D4AF37]/30 pb-4 mb-4 font-bold tracking-widest uppercase flex justify-between items-center">
                  <span>Banquet Quote</span>
                  <span className="text-[10px] bg-[#800020] text-[#FAF5EC] px-2 py-0.5 rounded-sm">VVIP</span>
                </h3>

                <div className="space-y-3.5 font-[family-name:var(--font-body)] text-xs text-[#800020]/90">
                  <div className="flex justify-between">
                    <span>Menu Base Rate:</span>
                    <span className="font-semibold">₹{pricingSummary.basePlateRate}/plate</span>
                  </div>
                  {pricingSummary.addonsRate > 0 && (
                    <div className="flex justify-between">
                      <span>Plated Upgrades:</span>
                      <span className="font-semibold">+₹{pricingSummary.addonsRate}/plate</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-[#D4AF37]/20 pt-2 font-bold">
                    <span>Individual Plate Rate:</span>
                    <span>₹{pricingSummary.platePrice}/plate</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-[#D4AF37]/20 pt-2 font-bold">
                    <span>Subtotal ({guestCount} guests):</span>
                    <span>₹{pricingSummary.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#800020]/70 border-b border-[#D4AF37]/20 pb-4">
                    <span>GST (18% Catering Service Tax):</span>
                    <span>₹{pricingSummary.gst.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Estimated Grand Total</span>
                      <span className="text-[10px] text-[#800020]/50 font-medium">(All inclusive pricing)</span>
                    </div>
                    <span className="text-2xl font-bold font-[family-name:var(--font-display)] text-[#800020]">
                      ₹{pricingSummary.grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button 
                    onClick={() => {
                      setCustomizerSaved(true);
                      const contactSection = document.getElementById('consultation');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#800020] text-[#FAF5EC] hover:bg-[#600018] rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
                  >
                    Lock Menu Configuration
                  </button>
                  {customizerSaved && (
                    <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[#800020] text-[11px] font-bold py-2 rounded text-center uppercase tracking-wider">
                      Configuration synced to consultation form below
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Menu items list card */}
              <div className="bg-white border border-[#D4AF37]/35 p-6 rounded">
                <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2">Curated Tasting Selections</h4>
                <div className="space-y-4 text-xs font-[family-name:var(--font-body)]">
                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider border-b border-[#D4AF37]/15 pb-1 mb-1.5">Plated Entrées</h5>
                    <div className="flex flex-wrap gap-2">
                      {MENU_TIERS[selectedTier].items.starters.map((item, index) => (
                        <span key={index} className="bg-[#FAF5EC] border border-[#D4AF37]/30 text-[#800020] px-2.5 py-1 rounded text-[10px] font-medium">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider border-b border-[#D4AF37]/15 pb-1 mb-1.5">Royal Mains</h5>
                    <div className="flex flex-wrap gap-2">
                      {MENU_TIERS[selectedTier].items.mains.map((item, index) => (
                        <span key={index} className="bg-[#FAF5EC] border border-[#D4AF37]/30 text-[#800020] px-2.5 py-1 rounded text-[10px] font-medium">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#800020] uppercase tracking-wider border-b border-[#D4AF37]/15 pb-1 mb-1.5">Traditional Sweets</h5>
                    <div className="flex flex-wrap gap-2">
                      {MENU_TIERS[selectedTier].items.desserts.map((item, index) => (
                        <span key={index} className="bg-[#FAF5EC] border border-[#D4AF37]/30 text-[#800020] px-2.5 py-1 rounded text-[10px] font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid - Inline List style layout for Asymmetry */}
      <section className="py-24 px-6 lg:px-8 bg-white border-b border-[#D4AF37]/35">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[#800020] font-bold uppercase tracking-wider">
              Signature Plates
            </h2>
            <p className="text-[#800020]/75 font-[family-name:var(--font-body)] text-xs">
              Every dish is styled with gold foil, saffron, and fresh organic herbs to ensure a memorable visual presentation.
            </p>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
          </div>

          <div className="space-y-12">
            {/* Dish 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#FAF5EC] pb-12">
              <div className="lg:col-span-4 h-48 border border-[#D4AF37]/30 rounded overflow-hidden relative shadow">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Kodi Kura Chitti Gaare" />
              </div>
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#800020] uppercase tracking-wide">Kodi Kura Chitti Gaare</h3>
                  <span className="text-[10px] bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#800020] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">Award Winning</span>
                </div>
                <p className="text-sm text-[#800020]/80 font-[family-name:var(--font-body)] leading-relaxed">
                  Piping-hot, miniature lentil vadas served on handcrafted brass shot-glasses containing a highly-spiced, wood-fired country chicken gravy. Designed to be consumed in a single, flavorful bite.
                </p>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#FAF5EC] pb-12">
              <div className="lg:col-span-4 h-48 border border-[#D4AF37]/30 rounded overflow-hidden relative shadow order-first lg:order-last">
                <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Nizamia Khubani ka Meetha" />
              </div>
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#800020] uppercase tracking-wide">Nizamia Khubani ka Meetha</h3>
                  <span className="text-[10px] bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#800020] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">Royal Signature</span>
                </div>
                <p className="text-sm text-[#800020]/80 font-[family-name:var(--font-body)] leading-relaxed">
                  Slow-simmered Turkish apricots poached in saffron nectar, layered with cold, hand-churned almond-saffron rabri, decorated with pure 24K gold foil and raw almond slivers.
                </p>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#FAF5EC] pb-12">
              <div className="lg:col-span-4 h-48 border border-[#D4AF37]/30 rounded overflow-hidden relative shadow">
                <img src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Kaju Kothimira Vankaya" />
              </div>
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#800020] uppercase tracking-wide">Kaju Kothimira Vankaya</h3>
                  <span className="text-[10px] bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#800020] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">Vegetarian Delight</span>
                </div>
                <p className="text-sm text-[#800020]/80 font-[family-name:var(--font-body)] leading-relaxed">
                  Baby brinjals stuffed with roasted cashew and coconut butter, slow-roasted with green chilies, finished with fresh coriander emulsion oil and fried split cashews.
                </p>
              </div>
            </div>

            {/* Dish 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 h-48 border border-[#D4AF37]/30 rounded overflow-hidden relative shadow order-first lg:order-last">
                <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Gongura Royyala Veepudu" />
              </div>
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#800020] uppercase tracking-wide">Gongura Royyala Veepudu</h3>
                  <span className="text-[10px] bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#800020] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">Spicy Classic</span>
                </div>
                <p className="text-sm text-[#800020]/80 font-[family-name:var(--font-body)] leading-relaxed">
                  Jumbo tiger prawns stir-fried in cast-iron skillets with sour sorrel leaves (Gongura paste), Guntur red chili flakes, crushed garlic cloves, and sesame oil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="consultation" className="py-24 px-6 lg:px-8 bg-[#FAF5EC]/40 relative">
        <div className="max-w-3xl mx-auto bg-white border border-[#D4AF37] p-8 rounded shadow-xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] text-[#800020] font-bold uppercase tracking-wider">
              Request Chef Tasting Session
            </h2>
            <p className="text-xs tracking-widest text-[#D4AF37] font-bold uppercase">
              Schedule an exclusive consultation and review custom plate designs
            </p>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto" />
                <h3 className="text-2xl font-[family-name:var(--font-display)] text-[#800020] font-bold uppercase tracking-wide">
                  Tasting Session Scheduled
                </h3>
                <p className="text-[#800020]/80 text-sm max-w-md mx-auto font-[family-name:var(--font-body)] leading-relaxed">
                  A verification confirmation has been sent to <strong>{formData.email}</strong>. Chef Raaj’s booking team will contact you at <strong>{formData.phone}</strong> within 3 hours.
                </p>

                {customizerSaved && (
                  <div className="bg-[#FAF5EC] border border-[#D4AF37]/50 p-5 rounded text-left max-w-md mx-auto text-xs space-y-1.5 text-[#800020] font-[family-name:var(--font-body)]">
                    <span className="font-bold block uppercase tracking-widest border-b border-[#D4AF37]/25 pb-1 text-[#D4AF37]">Selected Configuration:</span>
                    <div><strong>Occasion:</strong> {EVENT_TYPES.find(e => e.id === selectedEvent)?.name}</div>
                    <div><strong>Guests:</strong> {guestCount} guests</div>
                    <div><strong>Culinary Tier:</strong> {MENU_TIERS[selectedTier].name}</div>
                    <div><strong>Upgrades:</strong> {selectedAddons.length > 0 ? selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).join(', ') : 'None'}</div>
                    <div className="font-bold pt-2 border-t border-[#D4AF37]/20 flex justify-between text-[#800020]">
                      <span>Estimated Total:</span>
                      <span className="text-sm text-[#D4AF37]">₹{pricingSummary.grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#800020] text-[#FAF5EC] text-xs font-bold tracking-widest uppercase transition-transform active:scale-95"
                >
                  Book Another Occasion
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {customizerSaved && (
                  <div className="bg-[#FAF5EC] border border-[#D4AF37]/40 p-3 rounded text-xs text-[#800020] flex items-center justify-between font-[family-name:var(--font-body)]">
                    <span>Active configuration: {guestCount} guests, {MENU_TIERS[selectedTier].name}</span>
                    <span className="font-bold text-[#D4AF37]">Est: ₹{pricingSummary.grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#800020]">
                      Host Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Anand Sastry"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded-sm border bg-white text-[#800020] outline-none text-xs transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.name ? 'border-red-500' : 'border-[#D4AF37]/45'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-600 text-[10px] font-bold">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#800020]">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9989512345"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded-sm border bg-white text-[#800020] outline-none text-xs transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.phone ? 'border-red-500' : 'border-[#D4AF37]/45'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-600 text-[10px] font-bold">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#800020]">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. anand.sastry@outlook.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded-sm border bg-white text-[#800020] outline-none text-xs transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.email ? 'border-red-500' : 'border-[#D4AF37]/45'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-600 text-[10px] font-bold">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#800020]">
                      Preferred Date of Tasting <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded-sm border bg-white text-[#800020] outline-none text-xs transition-all focus:border-[#800020] focus:ring-1 focus:ring-[#800020] ${
                        formErrors.eventDate ? 'border-red-500' : 'border-[#D4AF37]/45'
                      }`}
                    />
                    {formErrors.eventDate && (
                      <p className="text-red-600 text-[10px] font-bold">{formErrors.eventDate}</p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#800020]">
                    Specific tasting requests (e.g. Vegetarian only, allergy details, specific spice constraints)
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="Describe any special dietary protocols, choice of silver platings, or menu customizations required..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full p-3.5 rounded-sm border border-[#D4AF37]/45 bg-white text-[#800020] outline-none text-xs focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#800020] hover:bg-[#600018] text-[#FAF5EC] text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Requesting Tasting Session...' : 'Confirm Request & Reserve Slot'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-[#FAF5EC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[#800020] font-bold uppercase tracking-wider">
              Patron Reviews
            </h2>
            <p className="text-[#800020]/75 font-[family-name:var(--font-body)] text-xs">
              Hear from our hosts about our meticulous plated service layouts and authentic Deccan flavors.
            </p>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-[family-name:var(--font-body)]">
            {/* Patron 1 */}
            <div className="border border-[#D4AF37]/30 p-8 rounded-sm bg-[#FAF5EC]/10 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs italic text-[#800020]/90 leading-relaxed">
                  "For my son's engagement in Gachibowli, we wanted plated fine dining rather than typical buffet service. Raaj Thaarak designed a spectacular menu. The 24K gold foil Khubani ka Meetha and Natu Kodi vadas were outstanding."
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4">
                <span className="block text-xs font-bold text-[#800020] uppercase tracking-wider">Harsha Vardhan</span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Engagement Host &bull; Gachibowli</span>
              </div>
            </div>

            {/* Patron 2 */}
            <div className="border border-[#D4AF37]/30 p-8 rounded-sm bg-[#FAF5EC]/10 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs italic text-[#800020]/90 leading-relaxed">
                  "Our corporate team award banquet in Uppal was hosted by Raaj Thaarak. They set up separate vegetarian and non-vegetarian kitchens with micro-hygiene seals. Extremely polished, polite service staff."
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4">
                <span className="block text-xs font-bold text-[#800020] uppercase tracking-wider">Meenakshi S.</span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Corporate Admin &bull; Uppal</span>
              </div>
            </div>

            {/* Patron 3 */}
            <div className="border border-[#D4AF37]/30 p-8 rounded-sm bg-[#FAF5EC]/10 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs italic text-[#800020]/90 leading-relaxed">
                  "During our daughter's Seemantham in Secunderabad, we served the Silver collection. The food was extremely traditional, cooked with zero artificial colors or flavors. Our elderly guests loved the digestibility."
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4">
                <span className="block text-xs font-bold text-[#800020] uppercase tracking-wider">V. K. Sastry</span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Grandparent &bull; Secunderabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#800020] text-[#FAF5EC] border-t-2 border-[#D4AF37] pt-16 pb-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#FAF5EC]/10 pb-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-[#FAF5EC] font-bold tracking-widest uppercase">
              Raaj Thaarak
            </h3>
            <p className="text-xs text-[#FAF5EC]/70 max-w-sm font-[family-name:var(--font-body)] leading-relaxed">
              Curators of fine plated heritage Telugu dining and royal silver-plated banquets across Hyderabad since 2004.
            </p>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-[family-name:var(--font-body)]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href="tel:+919989512345" className="hover:text-[#D4AF37] transition-colors">+91 99895 12345</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href="mailto:events@raajthaarak.com" className="hover:text-[#D4AF37] transition-colors">events@raajthaarak.com</a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
              Royal Office
            </h4>
            <p className="text-xs font-[family-name:var(--font-body)] flex items-start gap-2.5 text-[#FAF5EC]/80 leading-normal">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Plot No. 84, Survey No. 9,<br />
                Peerzadiguda Road, near Uppal Depot,<br />
                Uppal, Hyderabad, 500039
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-[#FAF5EC]/50 font-[family-name:var(--font-body)] gap-4 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Raaj Thaarak Caterers. All Rights Reserved.</span>
          <span>Bespoke Design &bull; Royal Telugu Fine Dining</span>
        </div>
      </footer>
    </div>
  );
}

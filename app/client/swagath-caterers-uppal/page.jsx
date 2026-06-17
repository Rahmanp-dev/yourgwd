"use client";

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, CheckCircle2, Users, Calendar, Calculator, Check, 
  ArrowRight, ShieldCheck, Heart, Coffee, UtensilsCrossed, RefreshCw,
  Plus, CheckCircle, Zap, ShieldAlert
} from 'lucide-react';

export default function SwagathCaterers() {
  // Menu Customizer States
  const [eventType, setEventType] = useState('Wedding');
  const [guestCount, setGuestCount] = useState(150);
  const [menuTier, setMenuTier] = useState('Premium');
  const [selectedAddon, setSelectedAddon] = useState({
    liveMocktails: false,
    butlerService: false,
    dessertFountain: false
  });

  // Pricing configuration for Swagath (Modern Fusion focus)
  const tierPrices = {
    'Standard': 550,
    'Premium': 1100,
    'Royal': 2100
  };

  const addonPrices = {
    liveMocktails: 80,
    butlerService: 120,
    dessertFountain: 150
  };

  const getTierMenu = (tier) => {
    switch (tier) {
      case 'Standard':
        return {
          mocktails: ['Blue Lagoon Cooler', 'Fresh Lime Soda'],
          starters: ['Pesto Paneer Satay', 'Crispy Chilli Mushrooms', 'Hunan Sesame Babycorn'],
          mains: ['Dal Bukhara', 'Paneer Butter Masala', 'Veg Diwani Handi'],
          biryanis: ['Nizami Veg Dum Biryani'],
          desserts: ['Classic Gulab Jamun', 'Vanilla Bean Ice Cream']
        };
      case 'Premium':
        return {
          mocktails: ['Watermelon Mint Spritzer', 'Mango Jalapeno Mojito', 'Cold Brew Shake'],
          starters: ['Rosemary Malai Paneer', 'Avocado Crostini', 'Spiced Mutton Seekh Kebab', 'Fiery Peri Peri Wings'],
          mains: ['Slow-Cooked Mutton Rogan Josh', 'Murgh Makhani', 'Paneer Khada Masala', 'Veg Jalfrezi'],
          biryanis: ['Special Zafrani Mutton Biryani', 'Deharaduni Chicken Dum Biryani'],
          desserts: ['Gourmet Qubani Ka Meetha', 'Rose Gold Velvet Panna Cotta', 'Live Jalebi Station']
        };
      case 'Royal':
        return {
          mocktails: ['Lotus Elixir Splash', 'Smoked Rosemary Fig Tonic', 'Hibiscus Passionfruit Craft Soda'],
          starters: ['Gold-Leaf Galouti Kebab', 'Wasabi Butter Garlic Prawns', 'Truffle-Infused Mushroom Kebabs', 'Stuffed Paneer Hilltop'],
          mains: ['Chef\'s Special Royal Nalli Nihari', 'Kashmiri Lamb Shank', 'Avocado Kofta Curry', 'Truffle Makhani Paneer'],
          biryanis: ['Royal Mutton Dum Biryani (Kachhe Gosht)', 'Saffron Sufiyani Chicken Biryani', 'Exotic Wild Mushroom Biryani'],
          desserts: ['Rose Gold Luxury Chocolate Fountain', 'Signature Baked Alaska', 'Saffron Rabri with Gilded Malpua']
        };
      default:
        return {};
    }
  };

  const calculateTotal = () => {
    let costPerPlate = tierPrices[menuTier];
    
    // Addons calculation
    if (selectedAddon.liveMocktails) costPerPlate += addonPrices.liveMocktails;
    if (selectedAddon.butlerService) costPerPlate += addonPrices.butlerService;
    if (selectedAddon.dessertFountain) costPerPlate += addonPrices.dessertFountain;

    let subtotal = costPerPlate * guestCount;
    
    // Event specific multipliers
    if (eventType === 'Corporate') {
      subtotal *= 0.90; // 10% weekday corporate discount
    } else if (eventType === 'Birthday') {
      subtotal *= 0.95; // 5% birthday discount
    }

    // Volume discount
    if (guestCount >= 300) {
      subtotal *= 0.92; // 8% discount for large parties
    }

    return Math.round(subtotal);
  };

  // Booking Consultation Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '150',
    tier: 'Premium',
    addons: []
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successRef, setSuccessRef] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    
    const cleanPhone = form.phone.replace(/[\s-()]/g, '');
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-12 digit phone number';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.date) newErrors.date = 'Event date is required';

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSuccessRef(`SWC-${Math.floor(100000 + Math.random() * 900000)}`);
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        guests: guestCount.toString(),
        tier: menuTier,
        addons: []
      });
    }, 1800);
  };

  // Modern Fusion Dishes Data
  const signatureDishes = [
    {
      name: 'Rosemary Malai Paneer Tikka',
      desc: 'Infusion of European rosemary into traditional Punjabi malai marinade, grilled over pine-wood embers for a subtle botanical smoke flavor.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
      tag: 'Botanical Fusion'
    },
    {
      name: 'Truffle-Infused Galouti Kebab',
      desc: 'Ultra-tender minced lamb kebab slow-cooked with ghee, Hyderabad spices, and finished with a rich drizzle of Italian black truffle oil.',
      image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
      tag: 'Luxury Fusion'
    },
    {
      name: 'Gold Leaf Avocado Bhel',
      desc: 'Crisp puffed rice combined with Hass avocado chunks, fresh pomegranate seeds, tangy tamarind reduction, and topped with 24k gold leaf.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
      tag: 'Artisanal Starter'
    },
    {
      name: 'Peri Peri Mutton Keema Sliders',
      desc: 'Spicy South African peri-peri flavored minced mutton, cooked with caramelized onions, served on warm toasted brioche sliders.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
      tag: 'Bite-Size Gourmet'
    },
    {
      name: 'Rose Gold Panna Cotta',
      desc: 'Elegant chilled cream dessert flavored with fresh rose hydrosol, vanilla beans, and styled with edible rose gold flakes.',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=600',
      tag: 'Signature Dessert'
    },
    {
      name: 'Watermelon-Mint Smoked Gazpacho',
      desc: 'Chilled watermelon and mint soup, applewood-smoked at the table, served in custom rose gold rimmed glassware.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600',
      tag: 'Molecular Drink'
    }
  ];

  return (
    <div className="font-sans antialiased text-[#473E3B] bg-[#FFFDFD]">
      {/* Custom Styles specific to Swagath */}
      <style>{`
        .font-display-modern {
          font-family: var(--font-outfit), sans-serif;
        }
        .font-body-inter {
          font-family: var(--font-inter), sans-serif;
        }
      `}</style>

      {/* Top Banner */}
      <div className="bg-[#FFF0EE] text-[#B76E79] text-xs font-semibold py-2 px-4 text-center tracking-widest uppercase border-b border-[#FFF0EE]">
        <span className="inline-flex items-center gap-2">
          <Zap size={14} className="text-[#B76E79]" /> Next-Gen Live Counter Food Stations & Gourmet Catering in Uppal
        </span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FFFDFD]/90 backdrop-blur-md border-b border-[#FFF0EE]/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            {/* Logo */}
            <div className="flex flex-col py-3">
              <span className="font-display-modern text-2xl lg:text-3xl font-black text-[#B76E79] tracking-tight">
                Swagath
              </span>
              <span className="text-[9px] font-body-inter tracking-[0.25em] text-[#A68F8A] uppercase font-bold">
                Caterers &bull; Fusion Kitchen
              </span>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-[#73605B]">
              <a href="#about" className="hover:text-[#B76E79] transition-colors">Legacy & Story</a>
              <a href="#estimator" className="hover:text-[#B76E79] transition-colors">Gourmet Estimator</a>
              <a href="#signature" className="hover:text-[#B76E79] transition-colors">Specialties</a>
              <a href="#testimonials" className="hover:text-[#B76E79] transition-colors">Reviews</a>
            </div>

            {/* Quote CTA */}
            <div>
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#B76E79] text-white hover:bg-[#a35e68] transition-all text-xs font-bold uppercase tracking-widest active:scale-95 duration-150 rounded-xl"
              >
                Plan An Event
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-tr from-[#FFF0EE]/40 via-[#FFFDFD] to-[#FFF0EE]/20 border-b border-[#FFF0EE]/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-12 -left-12 w-96 h-96 bg-[#FFF0EE] rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#B76E79]/5 rounded-full filter blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (Hero copy) */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EE] text-[#B76E79] text-xs font-bold uppercase tracking-wider mb-6">
                <Coffee size={14} /> Modern Catering & Live Stations
              </div>
              <h1 className="font-display-modern text-4xl sm:text-6xl font-black text-[#332C2A] leading-[1.1] mb-6">
                Artisanal Fusion <br />
                <span className="text-[#B76E79]">Gourmet Food</span> <br />
                For Modern Hosts.
              </h1>
              <p className="font-body-inter text-base text-[#73605B] mb-8 leading-relaxed max-w-lg">
                Crafting customized global fusion menus, interactive live counters, and high-end banquet experiences in Uppal, Hyderabad. Merging tradition with modern culinary techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#estimator" 
                  className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold text-white bg-[#B76E79] hover:bg-[#a35e68] rounded-xl shadow-lg shadow-[#B76E79]/20 transition-all active:scale-98"
                >
                  Gourmet Estimator
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="#consultation" 
                  className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold text-[#73605B] bg-white border border-[#FFF0EE] hover:bg-[#FFF0EE]/30 rounded-xl transition-all active:scale-98"
                >
                  Request Proposal
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-8 text-[#73605B] font-bold text-xs pt-8 border-t border-[#FFF0EE]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#B76E79]" />
                  <span>ISO 22000 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#B76E79]" />
                  <span>24/7 Setup Support</span>
                </div>
              </div>
            </div>

            {/* Right Column (Gourmet Card) */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-[#FFF0EE] rounded-[2.5rem] transform -rotate-3 opacity-30 blur-lg"></div>
              
              <div className="relative bg-white border border-[#FFF0EE] p-6 rounded-[2rem] shadow-xl">
                {/* Main Image */}
                <div className="rounded-[1.5rem] overflow-hidden mb-6 h-64 bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1530101121896-274f02f5a844?auto=format&fit=crop&q=80&w=800" 
                    alt="Artisanal Live counter setup" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Info Pill */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FFF0EE]/55 p-4 rounded-xl border border-[#FFF0EE]/50 text-left">
                    <h3 className="text-xs font-bold text-[#B76E79] uppercase tracking-wider">Molecular Mixology</h3>
                    <p className="text-[11px] text-[#73605B] mt-1 leading-relaxed">Liquid nitrogen welcome mocktails cooked live.</p>
                  </div>
                  <div className="bg-[#FFF0EE]/55 p-4 rounded-xl border border-[#FFF0EE]/50 text-left">
                    <h3 className="text-xs font-bold text-[#B76E79] uppercase tracking-wider">Global Tapas</h3>
                    <p className="text-[11px] text-[#73605B] mt-1 leading-relaxed">Mini sliders, truffle-infused kebabs, and avocado crostinis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Story & Heritage Section */}
      <section id="about" className="py-24 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story text (Left) */}
            <div className="text-left order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B76E79]">Culinary Philosophy</span>
              <h2 className="font-display-modern text-3xl sm:text-4xl font-extrabold text-[#332C2A] mt-3 mb-6 leading-tight">
                Pioneering the Art of Modern Food Gastronomy in Uppal.
              </h2>
              
              <div className="space-y-6 font-body-inter text-sm text-[#73605B] leading-relaxed">
                <p>
                  At <strong className="text-[#332C2A]">Swagath Caterers</strong>, we have redefined how private celebrations and corporate functions dine. Operating a state-of-the-art cloud kitchen and luxury catering service in Uppal, Hyderabad, we bridge the gap between historic recipes and global fusion presentation.
                </p>
                <p>
                  Our kitchen maintains a spotless culinary environment. Every chef is fully trained in modern molecular gastronomy, food styling, and strict safety procedures. We believe that guest interaction is key to an amazing celebration — which is why our trademark **"Artisanal Live Stations"** showcase chefs assembling personalized gourmet plates right before your guests.
                </p>
                <p>
                  From gold-leaf infused galouti kebabs cooked on custom brass tawa counters to smoking rosemary craft mocktails, we bring high-editorial restaurant culinary styling directly to your banquet tables.
                </p>
              </div>

              {/* USP stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#FFF0EE]">
                <div>
                  <div className="font-display-modern text-2xl font-black text-[#B76E79]">12+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A68F8A] font-bold mt-1">Live counters</div>
                </div>
                <div>
                  <div className="font-display-modern text-2xl font-black text-[#B76E79]">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A68F8A] font-bold mt-1">Zero artificials</div>
                </div>
                <div>
                  <div className="font-display-modern text-2xl font-black text-[#B76E79]">4.9 / 5</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A68F8A] font-bold mt-1">Guest rating</div>
                </div>
              </div>
            </div>

            {/* Story Image (Right) */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0EE] to-transparent rounded-[2rem] transform -rotate-2 opacity-50 blur-md"></div>
              
              <div className="relative bg-[#FFF0EE]/30 p-4 rounded-[2rem] border border-[#FFF0EE]">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" 
                  alt="Swagath Chef at work" 
                  className="rounded-[1.5rem] w-full h-[400px] object-cover shadow-lg"
                />
                <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-[#FFF0EE] shadow-md">
                  <div className="text-xs font-bold text-[#B76E79] flex items-center gap-1.5">
                    <Award size={14} /> Master Chef Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Estimator Section */}
      <section id="estimator" className="py-24 bg-[#FFF0EE]/20 border-y border-[#FFF0EE]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3.5 py-1 rounded-full">
              Dynamic Pricing
            </span>
            <h2 className="font-display-modern text-3xl md:text-5xl font-black text-[#332C2A] mt-4 mb-4">
              Gourmet Menu Estimator
            </h2>
            <p className="font-body-inter text-sm text-[#73605B]">
              Configure your guest list and select live food add-ons to see our transparent menu pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Customizer Controls (Col-span 6) */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#FFF0EE] shadow-sm">
              <h3 className="font-display-modern text-lg font-bold text-[#332C2A] mb-6 flex items-center gap-2">
                <Calculator className="text-[#B76E79]" size={20} /> Configure Event Spread
              </h3>

              {/* Event Type select */}
              <div className="mb-6">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2.5">
                  1. Event Category
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Wedding', 'Corporate', 'Birthday'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setEventType(type)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wide border transition-all active:scale-95 ${
                        eventType === type
                          ? 'bg-[#B76E79] text-white border-[#B76E79]'
                          : 'bg-white text-[#73605B] border-[#FFF0EE] hover:bg-[#FFF0EE]/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Input Box + Range Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#A68F8A]">
                    2. Guest Count
                  </label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Math.max(50, parseInt(e.target.value) || 50))}
                      className="w-20 px-2.5 py-1 text-center font-bold text-[#B76E79] bg-[#FFF0EE] rounded-lg border border-[#FFF0EE] outline-none text-xs"
                    />
                    <span className="text-xs font-semibold text-[#73605B]">Guests</span>
                  </div>
                </div>
                <input 
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full accent-[#B76E79] h-2 bg-[#FFF0EE] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Menu Tier Select */}
              <div className="mb-6">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-3">
                  3. Select Dining Spread
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(tierPrices).map(([tier, price]) => (
                    <button
                      key={tier}
                      onClick={() => setMenuTier(tier)}
                      className={`p-3.5 rounded-xl border flex flex-col justify-between items-center transition-all text-center active:scale-95 ${
                        menuTier === tier
                          ? 'bg-[#FFF0EE] border-[#B76E79] shadow-sm'
                          : 'bg-white border-[#FFF0EE] hover:bg-[#FFF0EE]/20'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#332C2A]">{tier}</span>
                      <span className="text-sm font-extrabold text-[#B76E79] mt-2 font-body-inter">₹{price}</span>
                      <span className="text-[9px] text-[#A68F8A] mt-0.5">/ plate</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Counters Addons (Unique Customizer Signature) */}
              <div className="mb-8">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-3">
                  4. Premium Chef Addons
                </label>
                <div className="space-y-2.5">
                  {[
                    { key: 'liveMocktails', label: 'Molecular Live Mocktail Counter', price: 80 },
                    { key: 'butlerService', label: 'Premium White-Glove Butler Service', price: 120 },
                    { key: 'dessertFountain', label: 'Rose Gold Chocolate Dessert Fountain', price: 150 }
                  ].map((addon) => (
                    <label 
                      key={addon.key} 
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                        selectedAddon[addon.key]
                          ? 'bg-[#FFF0EE]/60 border-[#B76E79]/80'
                          : 'bg-white border-[#FFF0EE] hover:bg-[#FFF0EE]/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox"
                          checked={selectedAddon[addon.key]}
                          onChange={() => setSelectedAddon(prev => ({ ...prev, [addon.key]: !prev[addon.key] }))}
                          className="accent-[#B76E79] rounded w-4 h-4 cursor-pointer"
                        />
                        <span className="text-xs font-bold text-[#73605B]">{addon.label}</span>
                      </div>
                      <span className="text-xs font-extrabold text-[#B76E79] font-body-inter">+₹{addon.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Total Card */}
              <div className="p-4 rounded-2xl bg-[#FFF0EE]/40 border border-[#FFF0EE]">
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#A68F8A]">Estimated Budget</span>
                    <div className="text-[10px] text-[#A68F8A] mt-0.5">Includes setup & travel</div>
                  </div>
                  <div className="text-right">
                    <span className="font-display-modern text-3xl font-black text-[#B76E79]">
                      ₹{calculateTotal().toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Link */}
              <button
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    guests: guestCount.toString(),
                    tier: menuTier
                  }));
                  const formSec = document.getElementById('consultation');
                  if (formSec) formSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-4 bg-[#B76E79] text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-[#a35e68] transition-all active:scale-95"
              >
                Apply parameters to booking form
              </button>
            </div>

            {/* Customizer Menu Output (Col-span 6) */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#FFF0EE] shadow-sm min-h-[500px] text-left">
              <h3 className="font-display-modern text-xl font-bold text-[#332C2A] pb-4 border-b border-[#FFF0EE]">
                Customized Gourmet Menu Composition
              </h3>

              <div className="mt-6 space-y-6">
                {/* Mocktails */}
                <div>
                  <h4 className="text-xs font-bold text-[#B76E79] uppercase tracking-wider mb-2.5">Mocktails & Beverages</h4>
                  <div className="flex flex-wrap gap-2">
                    {getTierMenu(menuTier).mocktails?.map((item, idx) => (
                      <span key={idx} className="bg-[#FFF0EE]/50 border border-[#FFF0EE] text-[#73605B] text-xs font-semibold px-3 py-1.5 rounded-lg">
                        {item}
                      </span>
                    ))}
                    {selectedAddon.liveMocktails && (
                      <span className="bg-[#B76E79] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Sparkles size={12} /> Molecular Live Bar
                      </span>
                    )}
                  </div>
                </div>

                {/* Starters */}
                <div>
                  <h4 className="text-xs font-bold text-[#B76E79] uppercase tracking-wider mb-2.5">Signature Fusion Starters</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {getTierMenu(menuTier).starters?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#73605B]">
                        <Check size={14} className="text-[#B76E79] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Biryanis & Mains */}
                <div>
                  <h4 className="text-xs font-bold text-[#B76E79] uppercase tracking-wider mb-2.5">Exotic Main Course & Biryani</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {getTierMenu(menuTier).mains?.concat(getTierMenu(menuTier).biryanis || []).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#73605B]">
                        <Check size={14} className="text-[#B76E79] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desserts */}
                <div>
                  <h4 className="text-xs font-bold text-[#B76E79] uppercase tracking-wider mb-2.5">Desserts & Delicacies</h4>
                  <div className="flex flex-wrap gap-2">
                    {getTierMenu(menuTier).desserts?.map((item, idx) => (
                      <span key={idx} className="bg-[#FFF0EE]/50 border border-[#FFF0EE] text-[#73605B] text-xs font-semibold px-3 py-1.5 rounded-lg">
                        {item}
                      </span>
                    ))}
                    {selectedAddon.dessertFountain && (
                      <span className="bg-[#B76E79] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Sparkles size={12} /> Rose Gold Chocolate Fountain
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Grid Section */}
      <section id="signature" className="py-24 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3 py-1 rounded-full border border-[#FFF0EE]">
              Chef Creations
            </span>
            <h2 className="font-display-modern text-3xl md:text-5xl font-black text-[#332C2A] mt-4 mb-4">
              Gourmet Fusion Specialties
            </h2>
            <p className="font-body-inter text-sm text-[#73605B]">
              Browse our handcrafted gourmet specialties, merging international plating styles with local Hyderabadi ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <div 
                key={i} 
                className="group bg-white border border-[#FFF0EE] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-xl text-[10px] font-bold text-[#B76E79] uppercase tracking-wider border border-[#FFF0EE]">
                    {dish.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="font-display-modern text-lg font-bold text-[#332C2A] group-hover:text-[#B76E79] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="font-body-inter text-xs text-[#73605B] mt-2.5 leading-relaxed">
                    {dish.desc}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#FFF0EE] flex items-center justify-between text-xs font-bold">
                    <span className="text-[#B76E79]">Contemporary Plating</span>
                    <span className="text-[#A68F8A]">100% Homemade</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="consultation" className="py-24 bg-[#FFF0EE]/20 border-y border-[#FFF0EE]/40 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-[#FFF0EE] rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFF0EE] rounded-full opacity-50 filter blur-2xl z-0"></div>

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3.5 py-1 rounded-full">
                  Lock Dates
                </span>
                <h2 className="font-display-modern text-3xl font-extrabold text-[#332C2A] mt-3 mb-2">
                  Request Private Tasting
                </h2>
                <p className="font-body-inter text-xs text-[#73605B]">
                  Lock in your celebration date and coordinate a gourmet sampling session with our executive sous chef in Uppal.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-[#FFF0EE] border border-[#B76E79]/30 text-center animate-fade-in">
                  <CheckCircle className="mx-auto text-[#B76E79] mb-4" size={48} />
                  <h3 className="font-display-modern text-xl font-bold text-[#332C2A] mb-2">
                    Consultation Requested!
                  </h3>
                  <p className="font-body-inter text-xs text-[#73605B] max-w-md mx-auto mb-6">
                    Our event manager has received your menu configurations. We will call you within the next 4 business hours to lock in your date.
                  </p>
                  <div className="inline-block bg-white border border-[#FFF0EE] px-4 py-2 rounded-lg text-xs font-mono text-[#73605B] mb-6">
                    Confirmation Code: <span className="font-bold text-[#B76E79]">{successRef}</span>
                  </div>
                  <div>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-[#B76E79] hover:bg-[#a35e68] text-white text-xs font-bold uppercase tracking-wider rounded-xl active:scale-95 transition-all"
                    >
                      <RefreshCw size={12} className="mr-2" /> Book Another Spread
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="text-left">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full p-3.5 bg-white border rounded-xl text-sm outline-none font-medium transition-all ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#FFF0EE] focus:border-[#B76E79]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">{errors.name}</span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="text-left">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="10-12 digit mobile"
                        className={`w-full p-3.5 bg-white border rounded-xl text-sm outline-none font-medium transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#FFF0EE] focus:border-[#B76E79]'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="text-left">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="e.g. ramesh@gmail.com"
                        className={`w-full p-3.5 bg-white border rounded-xl text-sm outline-none font-medium transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#FFF0EE] focus:border-[#B76E79]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* Event Date */}
                    <div className="text-left">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                        Event Date *
                      </label>
                      <input 
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className={`w-full p-3.5 bg-white border rounded-xl text-sm outline-none font-medium transition-all ${
                          errors.date ? 'border-red-400 bg-red-50/20' : 'border-[#FFF0EE] focus:border-[#B76E79]'
                        }`}
                      />
                      {errors.date && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">{errors.date}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Guests Count (Prefilled/Linked) */}
                    <div className="text-left">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                        Estimated Guest Count
                      </label>
                      <input 
                        type="number"
                        name="guests"
                        value={form.guests}
                        onChange={handleInputChange}
                        className="w-full p-3.5 bg-white border border-[#FFF0EE] rounded-xl text-sm focus:border-[#B76E79] outline-none font-medium"
                      />
                    </div>

                    {/* Selected Dining Tier (Prefilled/Linked) */}
                    <div className="text-left">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                        Preferred Dining Tier
                      </label>
                      <select 
                        name="tier"
                        value={form.tier}
                        onChange={handleInputChange}
                        className="w-full p-3.5 bg-white border border-[#FFF0EE] rounded-xl text-sm focus:border-[#B76E79] outline-none font-semibold text-[#73605B]"
                      >
                        <option value="Standard">Standard Spread (₹550/plate)</option>
                        <option value="Premium">Premium Spread (₹1100/plate)</option>
                        <option value="Royal">Royal Spread (₹2100/plate)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#B76E79] text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-[#a35e68] transition-all active:scale-98 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Requesting Tasting...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Request Private Tasting
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3.5 py-1 rounded-full">
              Host Feedback
            </span>
            <h2 className="font-display-modern text-3xl md:text-5xl font-black text-[#332C2A] mt-4 mb-4">
              Praise From Hyderabad hosts
            </h2>
            <p className="font-body-inter text-sm text-[#73605B]">
              Real-world feedback from families and event coordinators in Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The live counters managed by Swagath Caterers for our cocktail party in Gachibowli was the highlight of the night. The Rosemary Malai Paneer was incredible, cooked right on spot. Highly recommended for modern layouts!",
                author: "Vikram Sen",
                role: "Host",
                location: "Gachibowli, Hyderabad"
              },
              {
                quote: "We utilized their premium cloud kitchen catering services for our office inaugural lunch in Uppal. The interactive menu customizer on their site helped us lock in our choices. Outstanding taste and hygiene compliance.",
                author: "Ananya Reddy",
                role: "Director of Operations",
                location: "Uppal, Hyderabad"
              },
              {
                quote: "The molecular mixology mocktail bar was a huge hit at our family celebration in Secunderabad. Very distinct design and styling of food counters. They made our event feel extremely luxury.",
                author: "Praveen Kumar",
                role: "Host",
                location: "Secunderabad, Hyderabad"
              }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="bg-[#FFF0EE]/10 border border-[#FFF0EE] rounded-3xl p-8 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-[#B76E79] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-body-inter text-xs text-[#73605B] italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#FFF0EE]/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0EE] flex items-center justify-center text-[#B76E79] font-bold text-sm font-display-modern">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#332C2A]">{test.author}</h4>
                    <p className="text-[10px] text-[#A68F8A] font-semibold mt-0.5">{test.role} &bull; {test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Details Footer Section */}
      <footer className="bg-white border-t border-[#FFF0EE] py-16 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div className="md:col-span-2">
              <span className="font-display-modern text-xl font-black text-[#B76E79]">Swagath Caterers</span>
              <p className="font-body-inter text-xs text-[#73605B] mt-4 leading-relaxed max-w-sm">
                Artisanal cloud kitchen & premium event catering services. Delivering high-quality global fusion spreads, molecular welcome bars, and custom live counters for weddings and corporate gatherings in Hyderabad.
              </p>
              <div className="flex gap-4 mt-6">
                <span className="w-8 h-8 rounded-full bg-[#FFF0EE] flex items-center justify-center text-[#B76E79] cursor-pointer hover:bg-[#B76E79] hover:text-white transition-all">
                  <Heart size={14} />
                </span>
                <span className="w-8 h-8 rounded-full bg-[#FFF0EE] flex items-center justify-center text-[#B76E79] cursor-pointer hover:bg-[#B76E79] hover:text-white transition-all">
                  <Coffee size={14} />
                </span>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#A68F8A] mb-4">Navigations</h4>
              <ul className="space-y-2.5 font-body-inter text-xs font-semibold text-[#73605B]">
                <li><a href="#about" className="hover:text-[#B76E79]">Legacy & Story</a></li>
                <li><a href="#estimator" className="hover:text-[#B76E79]">Gourmet Estimator</a></li>
                <li><a href="#signature" className="hover:text-[#B76E79]">Specialties</a></li>
                <li><a href="#testimonials" className="hover:text-[#B76E79]">Reviews</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#A68F8A] mb-4">Store Details</h4>
              <ul className="space-y-3 font-body-inter text-xs font-semibold text-[#73605B]">
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#B76E79] shrink-0 mt-0.5" />
                  <span>
                    Plot No 28, Phase-II, Rajeev Gandhi Nagar Colony, Uppal Main Road, Hyderabad, Telangana 500039
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-[#B76E79] shrink-0" />
                  <span>+91 91211 44533</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#B76E79] shrink-0" />
                  <span>booking@swagathcaterersuppal.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#FFF0EE]/85 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#A68F8A] font-bold">
            <div>
              &copy; {new Date().getFullYear()} Swagath Caterers Hyderabad. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <span>FSSAI License: 13622014000389</span>
              <span>&bull;</span>
              <span>ISO 9001 & 22000 Certified Kitchen</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

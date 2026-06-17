"use client";

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, CheckCircle2, Users, Calendar, Calculator, Check, 
  ArrowRight, ShieldCheck, Heart, Coffee, UtensilsCrossed, RefreshCw 
} from 'lucide-react';

export default function AnnapurnaCaterers() {
  // Menu Customizer States
  const [eventType, setEventType] = useState('Wedding');
  const [guestCount, setGuestCount] = useState(250);
  const [menuTier, setMenuTier] = useState('Premium');

  // Pricing configuration for Annapurna (Traditional focus)
  const tierPrices = {
    'Standard': 450,
    'Premium': 900,
    'Royal': 1600
  };

  const getTierFeatures = (tier) => {
    switch (tier) {
      case 'Standard':
        return [
          '2 Welcome Mocktails',
          '3 Traditional Starters (e.g. Gobi 65, Paneer Tikka)',
          '1 Signature Biryani (Veg/Non-Veg)',
          '2 Indian Main Course Gravies',
          'Tandoori Roti & Naan Assortment',
          '1 Royal Indian Dessert (Double Ka Meetha)'
        ];
      case 'Premium':
        return [
          '4 Welcome Mocktails & Live Shakes',
          '5 Premium Starters (e.g. Koti Kebab, Hariyali Tikka)',
          '2 Signature Biryanis (Zafrani Mutton & Veg Dum)',
          '3 Main Courses (Mughlai & Telangana Regional)',
          'Exotic Bread Basket (Naan, Kulcha, Rumali Roti)',
          '2 Premium Desserts (Qubani Ka Meetha with Ice cream)',
          'Live Chaat & Dosa Counters included'
        ];
      case 'Royal':
        return [
          'Unlimited Specialty Welcome Drinks & Craft Elixirs',
          '8 Gourmet Starters (Seafood, Mutton, Paneer, Veg)',
          '3 Royal Biryanis (Kachhe Goshth ki Biryani, Premium Veg)',
          '4 Chef-Special Main Courses',
          'Artisanal Bread Station with Live Tandoors',
          '3 Luxury Desserts & Live Jalebi/Rabri Station',
          'Rose Gold Signature Dessert Counter & Mocktail Bar',
          'Premium White-Glove Table Butler Service'
        ];
      default:
        return [];
    }
  };

  const calculateTotal = () => {
    const costPerPlate = tierPrices[menuTier];
    let subtotal = costPerPlate * guestCount;
    
    // Apply event factor
    if (eventType === 'Corporate') {
      subtotal *= 0.95; // 5% corporate weekday discount
    } else if (eventType === 'Wedding') {
      subtotal *= 1.02; // 2% premium setup/decor fee
    }
    
    // Volume discount
    if (guestCount >= 500) {
      subtotal *= 0.90; // 10% volume discount for large events
    } else if (guestCount >= 200) {
      subtotal *= 0.95; // 5% discount
    }

    return Math.round(subtotal);
  };

  // Booking Consultation Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '250',
    tier: 'Premium',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successRef, setSuccessRef] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    
    // Phone validation (10 to 12 digits)
    const cleanPhone = form.phone.replace(/[\s-()]/g, '');
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-12 digit phone number';
    }

    // Email validation
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

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSuccessRef(`APC-${Math.floor(100000 + Math.random() * 900000)}`);
      // Reset form but preserve customizer defaults if preferred
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        guests: guestCount.toString(),
        tier: menuTier,
        message: ''
      });
    }, 1800);
  };

  // Traditional Dishes Data
  const signatureDishes = [
    {
      name: 'Zafrani Mutton Dum Biryani',
      desc: 'True Hyderabadi classic cooked with long-grain Basmati rice, tender local mutton, saffron, and traditional spices, slow-steamed over woodfire.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
      tag: 'Heritage Signature'
    },
    {
      name: 'Rose Gold Shahi Tukda',
      desc: 'Crisp bread slices soaked in cardamom-flavored milk syrup, topped with rich rabri, roasted pistachios, and pure edible silver foil.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
      tag: 'Royal Dessert'
    },
    {
      name: 'Koti Malai Paneer Tikka',
      desc: 'Large cubes of fresh organic cottage cheese marinated in cardamom-spiced cream, cashew paste, and chargrilled in a traditional clay oven.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
      tag: 'Vegetarian Delight'
    },
    {
      name: 'Shadi ka Red Chicken',
      desc: 'Hyderabadi wedding favorite chicken slow-cooked in a rich paste of cashew nuts, almonds, yoghurt, and signature red dry chilies.',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
      tag: 'Banquet Classic'
    },
    {
      name: 'Gilded Shikampuri Kebab',
      desc: 'Delicate pan-fried patties of finely minced lamb and chana dal, stuffed with spiced hung curd and fresh mint leaves.',
      image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
      tag: 'Starter Special'
    },
    {
      name: 'Double Rabri Qubani',
      desc: 'Slow-simmered dried apricots imported from Turkey, served warm with a thick double-layered drizzle of sweet pistachio rabri.',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=600',
      tag: 'Hyderabad Special'
    }
  ];

  return (
    <div className="font-sans antialiased text-[#4A3F3B] bg-[#FFFDFD]">
      {/* Dynamic Font Styling specific to Annapurna */}
      <style>{`
        .font-display-serif {
          font-family: var(--font-playfair), Georgia, serif;
        }
        .font-body-sans {
          font-family: var(--font-plus-jakarta), sans-serif;
        }
      `}</style>

      {/* Top Bar / Mini Header */}
      <div className="bg-[#FFF0EE] text-[#B76E79] text-xs font-semibold py-2 px-4 text-center tracking-widest uppercase border-b border-[#FFF0EE]">
        <span className="inline-flex items-center gap-2">
          <Award size={14} /> Traditional Royal Banquets & Elite Catering in Hyderabad
        </span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FFFDFD]/90 backdrop-blur-md border-b border-[#FFF0EE]/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            {/* Logo / Brand Name */}
            <div className="flex flex-col py-3">
              <span className="font-display-serif text-2xl lg:text-3xl font-extrabold text-[#B76E79] tracking-wide">
                Annapurna
              </span>
              <span className="text-[9px] font-body-sans tracking-[0.3em] text-[#A68F8A] uppercase font-bold">
                Caterers &bull; Uppal Heritage
              </span>
            </div>

            {/* Menu Links */}
            <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-[#73605B]">
              <a href="#about" className="hover:text-[#B76E79] transition-colors">Heritage</a>
              <a href="#customizer" className="hover:text-[#B76E79] transition-colors">Menu Customizer</a>
              <a href="#signature" className="hover:text-[#B76E79] transition-colors">Signature Dishes</a>
              <a href="#testimonials" className="hover:text-[#B76E79] transition-colors">Reviews</a>
            </div>

            {/* Action CTA */}
            <div>
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center px-5 py-3 border border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all text-xs font-bold uppercase tracking-widest active:scale-95 duration-150 rounded-full"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#FFF0EE]/50 via-[#FFFDFD] to-[#FFFDFD] border-b border-[#FFF0EE]/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFF0EE] rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B76E79]/5 rounded-full filter blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0EE] border border-[#FFF0EE] text-[#B76E79] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="animate-spin-slow" />
                Pure Ingredients & Heritage Cooking
              </div>
              <h1 className="font-display-serif text-4xl sm:text-6xl font-extrabold text-[#332C2A] leading-[1.15] mb-6">
                The Royal Feast <br />
                <span className="text-[#B76E79]">For Your Life’s</span> <br />
                Grandest Moments.
              </h1>
              <p className="font-body-sans text-base lg:text-lg text-[#73605B] mb-8 leading-relaxed max-w-xl">
                Serving authentic Hyderabadi banquets and traditional Indian delicacies in Uppal and across Hyderabad since 1996. Crafted by master chefs under uncompromising hygiene standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#customizer" 
                  className="inline-flex items-center px-7 py-4 text-sm font-bold text-white bg-[#B76E79] hover:bg-[#a35e68] rounded-full shadow-lg shadow-[#B76E79]/20 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
                >
                  Customize Menu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="#consultation" 
                  className="inline-flex items-center px-7 py-4 text-sm font-bold text-[#73605B] bg-[#FFF0EE] hover:bg-[#FFE5E2] rounded-full transition-all active:scale-98"
                >
                  Book Consultation
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-[#FFF0EE]/80 max-w-lg">
                <div>
                  <div className="font-display-serif text-2xl font-bold text-[#B76E79]">100%</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A68F8A] font-bold mt-1">ISO Sanitized</div>
                </div>
                <div>
                  <div className="font-display-serif text-2xl font-bold text-[#B76E79]">25+ Yrs</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A68F8A] font-bold mt-1">Chef Experience</div>
                </div>
                <div>
                  <div className="font-display-serif text-2xl font-bold text-[#B76E79]">1,500+</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A68F8A] font-bold mt-1">Events Served</div>
                </div>
              </div>
            </div>

            {/* Hero Right Images (Gourmet Collage) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0EE] to-transparent rounded-[2rem] transform rotate-3 scale-102 opacity-40 blur-lg"></div>
              
              <div className="grid grid-cols-12 gap-4 relative">
                {/* Main large image */}
                <div className="col-span-8 rounded-[1.5rem] overflow-hidden border-4 border-[#FFFDFD] shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800" 
                    alt="Traditional Indian Spread" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Secondary top image */}
                <div className="col-span-4 rounded-[1.5rem] overflow-hidden border-4 border-[#FFFDFD] shadow-lg transform translate-y-8 hover:translate-y-4 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800" 
                    alt="Starter" 
                    className="w-full h-32 object-cover"
                  />
                </div>

                {/* Secondary bottom image */}
                <div className="col-span-5 rounded-[1.5rem] overflow-hidden border-4 border-[#FFFDFD] shadow-lg transform -translate-y-4 hover:translate-y-0 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800" 
                    alt="Mutton Biryani" 
                    className="w-full h-36 object-cover"
                  />
                </div>

                {/* Third bottom image */}
                <div className="col-span-7 rounded-[1.5rem] overflow-hidden border-4 border-[#FFFDFD] shadow-lg transform translate-x-2 translate-y-2 hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800" 
                    alt="Traditional Desserts" 
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Story / Heritage Section */}
      <section id="about" className="py-24 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Image Section */}
            <div className="relative">
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-[#B76E79]/30 rounded-2xl z-0"></div>
              <div className="bg-[#FFF0EE] rounded-2xl p-6 relative z-10 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" 
                  alt="Chef cooking with expertise" 
                  className="rounded-xl w-full h-[400px] object-cover shadow-md"
                />
                <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#FFF0EE] max-w-[200px]">
                  <div className="flex items-center gap-2 text-[#B76E79] font-bold text-sm">
                    <ShieldCheck size={18} /> Verified Hygiene
                  </div>
                  <p className="text-[11px] text-[#73605B] mt-1">
                    Every chef & helper holds certified food handling clearances.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text Section */}
            <div className="text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#B76E79] mb-3">Our Culinary Roots</h2>
              <h3 className="font-display-serif text-3xl sm:text-4xl font-extrabold text-[#332C2A] mb-6 leading-tight">
                Crafting Culinary Masterpieces with Heritage Standards.
              </h3>
              
              <div className="space-y-6 font-body-sans text-sm text-[#73605B] leading-relaxed">
                <p>
                  At <strong className="text-[#332C2A]">Annapurna Caterers</strong>, we believe that food is not just sustenance; it is a sacred custom of hospitality. Established in Uppal, Hyderabad, our kitchen was founded with a singular commitment: to preserve the pristine flavors of traditional regional catering while implementing state-of-the-art hygienic infrastructure.
                </p>
                <p>
                  Our senior chefs carry over twenty-five years of experience in the delicate art of slow wood-fire cooking, royal tandoori roasting, and authentic spice grinding. We source all raw items and local ingredients from verified organic farms in Telangana, ensuring that every plate served is nutrient-rich and free from synthetic additives.
                </p>
                <p>
                  Whether handling an intimate dinner for fifty close friends or coordinating a royal wedding banquet with two thousand guests at grand convention centers, our precision service, elegant presentation, and strict safety guidelines remain consistently outstanding.
                </p>
              </div>

              {/* USP Icons */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#FFF0EE]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF0EE] flex items-center justify-center text-[#B76E79] shrink-0">
                    <UtensilsCrossed size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#332C2A]">Wood-fire Cooking</h4>
                    <p className="text-[11px] text-[#A68F8A] mt-0.5">Authentic deep flavors</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF0EE] flex items-center justify-center text-[#B76E79] shrink-0">
                    <Coffee size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#332C2A]">Live Food Counters</h4>
                    <p className="text-[11px] text-[#A68F8A] mt-0.5">Cooked fresh in real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Customizer Section */}
      <section id="customizer" className="py-24 bg-[#FFF0EE]/30 border-y border-[#FFF0EE]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3 py-1 rounded-full border border-[#FFF0EE]">
              Bespoke Planner
            </span>
            <h2 className="font-display-serif text-3xl md:text-5xl font-extrabold text-[#332C2A] mt-4 mb-4">
              Interactive Menu Customizer
            </h2>
            <p className="font-body-sans text-sm text-[#73605B]">
              Configure your event parameters to receive an instant premium budget estimate and browse the curated menu selections prepared by our head chef.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Customizer Controls (Col-span 5) */}
            <div className="lg:col-span-5 bg-[#FFFDFD] p-8 rounded-2xl border border-[#FFF0EE] shadow-sm">
              <h3 className="font-display-serif text-xl font-bold text-[#332C2A] mb-6 flex items-center gap-2">
                <Calculator className="text-[#B76E79]" size={20} /> Event Estimation
              </h3>

              {/* Event Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A68F8A] mb-3">
                  1. Event Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Wedding', 'Corporate', 'Birthday'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setEventType(type)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wide border transition-all active:scale-95 ${
                        eventType === type
                          ? 'bg-[#B76E79] text-white border-[#B76E79]'
                          : 'bg-[#FFFDFD] text-[#73605B] border-[#FFF0EE] hover:bg-[#FFF0EE]/45'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A68F8A]">
                    2. Guest Count
                  </label>
                  <span className="text-sm font-bold text-[#B76E79] bg-[#FFF0EE] px-2.5 py-0.5 rounded-full font-body-sans">
                    {guestCount} Guests
                  </span>
                </div>
                <input 
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full accent-[#B76E79] h-2 bg-[#FFF0EE] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#A68F8A] font-semibold mt-1">
                  <span>50 guests</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>1,500+</span>
                </div>
              </div>

              {/* Menu Tier */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A68F8A] mb-3">
                  3. Select Dining Tier
                </label>
                <div className="space-y-3">
                  {Object.entries(tierPrices).map(([tier, price]) => (
                    <button
                      key={tier}
                      onClick={() => setMenuTier(tier)}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all active:scale-98 ${
                        menuTier === tier
                          ? 'bg-[#FFF0EE] border-[#B76E79] shadow-sm'
                          : 'bg-[#FFFDFD] border-[#FFF0EE] hover:bg-[#FFF0EE]/10'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-display-serif text-sm font-bold text-[#332C2A]">{tier} Spread</div>
                        <div className="text-[11px] text-[#A68F8A] mt-0.5">Authentic multi-course dining</div>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-extrabold text-[#B76E79] font-body-sans">₹{price}</span>
                        <span className="text-[10px] text-[#A68F8A]"> / plate</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant Total */}
              <div className="p-4 rounded-xl bg-[#FFF0EE]/40 border border-[#FFF0EE] text-center">
                <div className="text-xs uppercase tracking-wider font-bold text-[#A68F8A]">Estimated Total Budget</div>
                <div className="font-display-serif text-3xl font-extrabold text-[#B76E79] mt-1 font-body-sans">
                  ₹{calculateTotal().toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-[#A68F8A] mt-1">
                  *Excludes applicable GST. Includes custom layout setup.
                </div>
              </div>

              {/* Set customizer value to form */}
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
                className="w-full mt-6 py-4 bg-[#B76E79] text-white font-bold rounded-xl hover:bg-[#a35e68] transition-all text-xs uppercase tracking-widest active:scale-95"
              >
                Apply Details To Booking Form
              </button>
            </div>

            {/* Customizer Menu Output (Col-span 7) */}
            <div className="lg:col-span-7 bg-[#FFFDFD] p-8 rounded-2xl border border-[#FFF0EE] shadow-sm min-h-[480px]">
              <div className="flex justify-between items-center pb-4 border-b border-[#FFF0EE]">
                <div>
                  <h3 className="font-display-serif text-xl font-bold text-[#332C2A]">
                    Included {menuTier} Menu Items
                  </h3>
                  <p className="text-[11px] text-[#A68F8A] mt-0.5">
                    Traditional recipes served at premium standard
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#B76E79] bg-[#FFF0EE] px-3 py-1 rounded-full uppercase tracking-wider">
                    {eventType} Mode
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {getTierFeatures(menuTier).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-[#FFF0EE]/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#FFF0EE] border border-[#FFF0EE] flex items-center justify-center text-[#B76E79] shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#73605B]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Chef Notes banner */}
              <div className="mt-8 p-4 rounded-xl border border-dashed border-[#B76E79]/40 bg-[#FFF0EE]/10 flex gap-3">
                <Award className="text-[#B76E79] shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-[#332C2A]">Head Chef’s Note</h4>
                  <p className="text-[11px] text-[#73605B] mt-0.5 leading-relaxed">
                    Custom adjustments like gluten-free breads, completely vegetarian spreads, or additional regional stations (North-Indian, Italian) can be arranged during the personal menu consultation.
                  </p>
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
              Royal Creations
            </span>
            <h2 className="font-display-serif text-3xl md:text-5xl font-extrabold text-[#332C2A] mt-4 mb-4">
              Our Signature Specialties
            </h2>
            <p className="font-body-sans text-sm text-[#73605B]">
              Handcrafted delicacies prepared with freshly ground spices and age-old culinary techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <div 
                key={i} 
                className="group bg-[#FFFDFD] border border-[#FFF0EE] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Wrap */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#B76E79] uppercase tracking-wider border border-[#FFF0EE]">
                    {dish.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="font-display-serif text-lg font-bold text-[#332C2A] group-hover:text-[#B76E79] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="font-body-sans text-xs text-[#73605B] mt-2 leading-relaxed">
                    {dish.desc}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#FFF0EE] flex items-center justify-between text-xs font-bold">
                    <span className="text-[#B76E79]">Traditional Prep</span>
                    <span className="text-[#A68F8A]">100% Homemade</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Consultation Form Section */}
      <section id="consultation" className="py-24 bg-[#FFF0EE]/30 border-y border-[#FFF0EE]/40 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#FFFDFD] border border-[#FFF0EE] rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFF0EE] rounded-full opacity-60 filter blur-2xl z-0"></div>

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3 py-1 rounded-full">
                  Secure Dates
                </span>
                <h2 className="font-display-serif text-3xl font-extrabold text-[#332C2A] mt-3 mb-2">
                  Request Culinary Consultation
                </h2>
                <p className="font-body-sans text-xs text-[#73605B]">
                  Plan your bespoke banquet menu. Fill in the parameters below, and our event coordinator will reach out to lock in dates and orchestrate your gourmet sampling.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-[#FFF0EE] border border-[#B76E79]/30 text-center animate-fade-in">
                  <CheckCircle2 className="mx-auto text-[#B76E79] mb-4" size={48} />
                  <h3 className="font-display-serif text-xl font-bold text-[#332C2A] mb-2">
                    Consultation Requested Successfully!
                  </h3>
                  <p className="font-body-sans text-xs text-[#73605B] max-w-md mx-auto mb-6">
                    Thank you. Our executive manager has received your menu outline and event specifications. We will call you within the next 4 business hours to verify.
                  </p>
                  <div className="inline-block bg-[#FFFDFD] border border-[#FFF0EE] px-4 py-2 rounded-lg text-xs font-mono text-[#73605B] mb-6">
                    Reference ID: <span className="font-bold text-[#B76E79]">{successRef}</span>
                  </div>
                  <div>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-[#B76E79] hover:bg-[#a35e68] text-white text-xs font-bold uppercase tracking-wider rounded-full active:scale-95 transition-all"
                    >
                      <RefreshCw size={12} className="mr-2" /> Book Another Event
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
                        className={`w-full p-3.5 bg-[#FFFDFD] border rounded-xl text-sm outline-none font-medium transition-all ${
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
                        className={`w-full p-3.5 bg-[#FFFDFD] border rounded-xl text-sm outline-none font-medium transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#FFF0EE] focus:border-[#B76E79]'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email Address */}
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
                        className={`w-full p-3.5 bg-[#FFFDFD] border rounded-xl text-sm outline-none font-medium transition-all ${
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
                        Preferred Event Date *
                      </label>
                      <input 
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className={`w-full p-3.5 bg-[#FFFDFD] border rounded-xl text-sm outline-none font-medium transition-all ${
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
                        className="w-full p-3.5 bg-[#FFFDFD] border border-[#FFF0EE] rounded-xl text-sm focus:border-[#B76E79] outline-none font-medium"
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
                        className="w-full p-3.5 bg-[#FFFDFD] border border-[#FFF0EE] rounded-xl text-sm focus:border-[#B76E79] outline-none font-semibold text-[#73605B]"
                      >
                        <option value="Standard">Standard Spread (₹450/plate)</option>
                        <option value="Premium">Premium Spread (₹900/plate)</option>
                        <option value="Royal">Royal Spread (₹1600/plate)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="text-left">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A68F8A] mb-2">
                      Special requests / Spice preferences
                    </label>
                    <textarea 
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="e.g. Vegetarian only, custom welcome mocktail bar, specific regional live food counters..."
                      className="w-full p-3.5 bg-[#FFFDFD] border border-[#FFF0EE] rounded-xl text-sm focus:border-[#B76E79] outline-none font-medium transition-all"
                    ></textarea>
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
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Submit Request
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
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#FFF0EE] px-3 py-1 rounded-full border border-[#FFF0EE]">
              Client Reviews
            </span>
            <h2 className="font-display-serif text-3xl md:text-5xl font-extrabold text-[#332C2A] mt-4 mb-4">
              Praise From Local Hosts
            </h2>
            <p className="font-body-sans text-sm text-[#73605B]">
              Read how we orchestrated grand feasts and wedding spreads across Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Annapurna Caterers managed the vegetarian and non-vegetarian menus for our wedding of 1,200 guests in Gachibowli. Their Zafrani Mutton Biryani was phenomenal. Guests are still talking about the taste three months later. Outstanding presentation!",
                author: "Ananth Reddy",
                role: "Groom\'s Father",
                location: "Gachibowli, Hyderabad"
              },
              {
                quote: "We hired them for our corporate annual gala at Uppal. From prompt live counter setup to ISO sanitation standards, everything was managed perfectly. The Koti Paneer Tikka was absolute cream. Extremely professional staff.",
                author: "Srividya Rao",
                role: "Senior HR Specialist",
                location: "Uppal, Hyderabad"
              },
              {
                quote: "Perfect wood-fire cooking! The authentic local spices and Qubani ka Meetha served at our daughter\'s housewarming party was amazing. The estimating widget was completely accurate with pricing details.",
                author: "Mohammad Fareed",
                role: "Home Owner",
                location: "Secunderabad, Hyderabad"
              }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="bg-[#FFF0EE]/20 border border-[#FFF0EE] rounded-2xl p-8 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-[#B76E79] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-body-sans text-xs text-[#73605B] italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#FFF0EE]/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0EE] flex items-center justify-center text-[#B76E79] font-bold text-sm">
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
      <footer className="bg-[#FFFDFD] border-t border-[#FFF0EE] py-16 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Column 1: Brand Info */}
            <div className="md:col-span-2">
              <span className="font-display-serif text-xl font-extrabold text-[#B76E79]">Annapurna Caterers</span>
              <p className="font-body-sans text-xs text-[#73605B] mt-4 leading-relaxed max-w-sm">
                Authentic traditional Indian banquets, wedding catering, and gourmet live counters. Servicing grand celebrations in Uppal, Secunderabad, Gachibowli, and across Hyderabad with strict hygiene and pure ingredients.
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

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#A68F8A] mb-4">Navigations</h4>
              <ul className="space-y-2.5 font-body-sans text-xs font-semibold text-[#73605B]">
                <li><a href="#about" className="hover:text-[#B76E79]">Heritage</a></li>
                <li><a href="#customizer" className="hover:text-[#B76E79]">Menu Estimator</a></li>
                <li><a href="#signature" className="hover:text-[#B76E79]">Signature Dishes</a></li>
                <li><a href="#testimonials" className="hover:text-[#B76E79]">Reviews</a></li>
              </ul>
            </div>

            {/* Column 3: Store Details */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#A68F8A] mb-4">Store Details</h4>
              <ul className="space-y-3 font-body-sans text-xs font-semibold text-[#73605B]">
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#B76E79] shrink-0 mt-0.5" />
                  <span>
                    H.No 4-12/1A, Survey No. 42, Raghavendra Nagar Colony, Uppal, Hyderabad, Telangana 500039
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-[#B76E79] shrink-0" />
                  <span>+91 98490 23411</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#B76E79] shrink-0" />
                  <span>info@annapurnacaterersuppal.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="mt-12 pt-8 border-t border-[#FFF0EE]/85 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#A68F8A] font-bold">
            <div>
              &copy; {new Date().getFullYear()} Annapurna Caterers Hyderabad. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <span>FSSAI License: 13621012000214</span>
              <span>&bull;</span>
              <span>ISO 22000 Certified Kitchen</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

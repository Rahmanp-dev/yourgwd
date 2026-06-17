'use client';

import React, { useState } from 'react';
import { 
  Utensils, 
  ChefHat, 
  Users, 
  Calendar, 
  DollarSign, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Check, 
  AlertCircle,
  Menu,
  X
} from 'lucide-react';

export default function RuchiCaterersPage() {
  // Navigation Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estimator State
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(150);
  const [menuTier, setMenuTier] = useState('premium');

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '150',
    tierPreference: 'premium',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Menu Options Mapping
  const menuTiers = {
    standard: {
      name: 'Standard Feast',
      price: 450,
      description: 'Traditional Telugu feast focusing on home-style authentic flavors and hygiene.',
      items: {
        welcome: ['Nimmakaya Sharbath (Lemon Mint)', 'Sweet Lassi'],
        starters: ['Veg Manchuria', 'Paneer 65'],
        mains: ['Gutti Vankaya Kura', 'Tomato Pappu', 'Bagara Rice', 'Sambar', 'Special Curd'],
        sweets: ['Rava Kesari', 'Gulab Jamun']
      }
    },
    premium: {
      name: 'Premium Banquet',
      price: 750,
      description: 'An elegant multi-cuisine buffet featuring premium traditional and contemporary dishes.',
      items: {
        welcome: ['Badam Milk (Chilled)', 'Aromatic Spiced Jaljeera'],
        starters: ['Gongura Chicken Roast', 'Double Spiced Paneer Tikka', 'Chilli Fish fry'],
        mains: ['Authentic Chicken Dum Biryani', 'Mughlai Paneer Masala', 'Ulavacharu Biryani', 'Mirchi Ka Salan', 'Raita', 'Butter Naan'],
        sweets: ['Double Ka Meetha (Royal Saffron)', 'Angoori Rasmalai']
      }
    },
    royal: {
      name: 'Royal Heritage',
      price: 1200,
      description: 'A grand luxury feast showcasing traditional Nizami and royal Andhra culinary heritage.',
      items: {
        welcome: ['Zafrani Thandai', 'Fresh Watermelon-Mint Cooler'],
        starters: ['Shahi Mutton Seekh Kebab', 'Kasuri Methi Fish Kebab', 'Gold-Edged Paneer Malai Kebab', 'Crispy Golden Prawns'],
        mains: ['Shahi Hyderabadi Mutton Biryani', 'Nellore Chepala Pulusu', 'Royal Gongura Mutton Roast', 'Nawabi Kaju Paneer', 'Rumali Roti', 'Special Bagara Rice', 'Pappu Charu'],
        sweets: ['Double Ka Meetha with Edible Gold Leaf', 'Qubani Ka Meetha with Vanilla Ice Cream', 'Elaneer Payasam']
      }
    }
  };

  // Estimator Calculations
  const selectedTier = menuTiers[menuTier];
  const baseCost = selectedTier.price * guests;
  const serviceCharge = Math.round(baseCost * 0.05); // 5% service & logistics
  const totalCost = baseCost + serviceCharge;

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error on change
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.eventDate) errors.eventDate = 'Event date is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAFAF7] text-[#2C2C2C] selection:bg-[#097969] selection:text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#097969] rounded-full flex items-center justify-center bg-[#FAFAF7] shadow-sm">
              <span className="font-serif text-xl font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>R</span>
            </div>
            <div>
              <span className="font-serif text-lg font-bold uppercase tracking-wider text-[#097969] block leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>
                Ruchi Caterers
              </span>
              <span className="text-[10px] tracking-widest text-[#C5A059] font-medium block mt-1 uppercase">
                Classic Telugu & Nizami Feasts
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-[#5A5A5A]">
            <a href="#about" className="hover:text-[#097969] transition-colors">Heritage</a>
            <a href="#menu-estimator" className="hover:text-[#097969] transition-colors">Estimator</a>
            <a href="#signature" className="hover:text-[#097969] transition-colors">Signature Dishes</a>
            <a href="#testimonials" className="hover:text-[#097969] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#097969] transition-colors">Book Feasts</a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:block">
            <a 
              href="#menu-estimator" 
              className="bg-[#097969] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#075f52] transition-colors border border-[#097969] active:scale-[0.98] transition-transform duration-100 shadow-sm"
            >
              Get Custom Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#2C2C2C] hover:text-[#097969] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAFAF7] border-b border-[#C5A059]/20 px-6 py-4 flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#5A5A5A] py-1 border-b border-[#2C2C2C]/5"
            >
              Heritage
            </a>
            <a 
              href="#menu-estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#5A5A5A] py-1 border-b border-[#2C2C2C]/5"
            >
              Estimator
            </a>
            <a 
              href="#signature" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#5A5A5A] py-1 border-b border-[#2C2C2C]/5"
            >
              Signature Dishes
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#5A5A5A] py-1 border-b border-[#2C2C2C]/5"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#5A5A5A] py-1 border-b border-[#2C2C2C]/5"
            >
              Book Feasts
            </a>
            <a 
              href="#menu-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#097969] text-white py-3 text-center text-xs uppercase tracking-widest font-semibold hover:bg-[#075f52] transition-colors"
            >
              Get Custom Quote
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#C5A059]/20 bg-gradient-to-b from-[#FAFAF7] via-[#FAFAF7] to-[#F3F3ED]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 border border-[#097969]/30 bg-[#097969]/5 px-3 py-1 text-xs uppercase tracking-wider text-[#097969] rounded-full mb-6 font-semibold w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Premium Event & Wedding Catering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Art of Grand <span className="text-[#097969]">Banquets</span> & <br className="hidden md:inline"/>
              <span className="border-b-2 border-[#C5A059] pb-1">Royal Telugu</span> Feasts.
            </h1>
            
            <p className="text-base md:text-lg text-[#5A5A5A] max-w-xl font-light leading-relaxed mb-8">
              Bespoke culinary catering for Hyderabad\'s elite weddings and corporate galas. We bring centuries of royal culinary wisdom, strict safety compliance, and unparalleled guest service straight to your events in Uppal.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#menu-estimator" 
                className="bg-[#097969] text-white px-7 py-4 text-xs uppercase tracking-wider font-bold hover:bg-[#075f52] transition-colors active:scale-[0.98] transition-transform duration-100 shadow-md flex items-center gap-2"
              >
                <span>Launch Menu Estimator</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border border-[#097969]/40 text-[#097969] px-7 py-4 text-xs uppercase tracking-wider font-bold hover:bg-[#097969]/5 transition-colors active:scale-[0.98] transition-transform duration-100"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Right Image Layout - Asymmetric Collage */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-[#C5A059]/5 rounded-3xl -m-4 rotate-2 pointer-events-none border border-[#C5A059]/10"></div>
            
            <div className="col-span-8 overflow-hidden rounded-2xl border border-[#C5A059]/30 shadow-lg aspect-[4/3] group relative">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80" 
                alt="Royal Biryani Feast" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#097969]/10 mix-blend-multiply"></div>
            </div>

            <div className="col-span-4 overflow-hidden rounded-2xl border border-[#C5A059]/30 shadow-lg aspect-square group relative self-end">
              <img 
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" 
                alt="Traditional Indian Sweets" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#097969]/10 mix-blend-multiply"></div>
            </div>

            <div className="col-span-4 overflow-hidden rounded-2xl border border-[#C5A059]/30 shadow-lg aspect-square group relative">
              <img 
                src="https://images.unsplash.com/photo-1545247181-516773cae76d?auto=format&fit=crop&w=600&q=80" 
                alt="Traditional Indian Curry Platter" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#097969]/10 mix-blend-multiply"></div>
            </div>

            <div className="col-span-8 overflow-hidden rounded-2xl border border-[#C5A059]/30 shadow-lg aspect-[4/3] group relative">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Catering Setup" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#097969]/10 mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </section>

      {/* METRIC RIBBON */}
      <section className="bg-[#097969] text-white py-8 border-y border-[#C5A059]/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-3xl md:text-4xl font-extrabold text-[#FAFAF7]" style={{ fontFamily: 'var(--font-playfair)' }}>30+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C5A059] font-bold block mt-1">Years of Cooking Legacy</span>
          </div>
          <div className="border-l border-[#FAFAF7]/20">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#FAFAF7]" style={{ fontFamily: 'var(--font-playfair)' }}>5,000+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C5A059] font-bold block mt-1">Banquets Orchestrated</span>
          </div>
          <div className="border-l border-[#FAFAF7]/20">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#FAFAF7]" style={{ fontFamily: 'var(--font-playfair)' }}>100%</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C5A059] font-bold block mt-1">FSSAI Certified Kitchens</span>
          </div>
          <div className="border-l border-[#FAFAF7]/20">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#FAFAF7]" style={{ fontFamily: 'var(--font-playfair)' }}>25+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C5A059] font-bold block mt-1">Master Chefs & Specialists</span>
          </div>
        </div>
      </section>

      {/* BRAND STORY & HERITAGE */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6 border-b border-[#C5A059]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#097969]/5 rounded-3xl pointer-events-none -rotate-3 border border-[#C5A059]/10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/30 aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" 
                alt="Executive Chef preparing Indian feast" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAFAF7]/95 p-6 border border-[#C5A059]/40 shadow-lg rounded-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#097969] block" style={{ fontFamily: 'var(--font-playfair)' }}>Chef Narasimha Rao</span>
                <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-bold block mt-1">3 Decades of Traditional Catering Mastery</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#097969] font-semibold text-xs uppercase tracking-widest">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>Three Decades of Culinary Royalty</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Legacy Cooked in Passion. <br />
              Served with Classic Elegance.
            </h2>
            
            <p className="text-sm md:text-base text-[#5A5A5A] font-light leading-relaxed">
              Established in 1996 in the historic enclave of Uppal, Ruchi Caterers was founded on a simple principle: to prepare food that honors legacy, using ingredients that are unconditionally fresh. Over the years, we have grown from a local kitchen into Hyderabad\'s trusted catering brand for luxury weddings, high-powered corporate conferences, and warm family reunions.
            </p>
            
            <p className="text-sm md:text-base text-[#5A5A5A] font-light leading-relaxed">
              Our state-of-the-art kitchen in Uppal enforces the highest international standards of cleanliness. Every vegetable is ozonated, water is triple-filtered, and our chefs undergo rigorous medical checkups and food safety training. We blend these modern hygiene protocols with secret traditional spice formulations handed down through generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center text-[#097969] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#2C2C2C] uppercase tracking-wider">Uncompromised Hygiene</h3>
                  <p className="text-xs text-[#5A5A5A] mt-1 leading-relaxed">
                    Strict FSSAI-compliant daily audits, thermal screening, and protective equipment at every step of prep and service.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center text-[#097969] shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#2C2C2C] uppercase tracking-wider">Farm-To-Tava Sourcing</h3>
                  <p className="text-xs text-[#5A5A5A] mt-1 leading-relaxed">
                    We source vegetables directly from local Telangana farms daily and grind all spices in-house to retain essential oils.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE MENU CUSTOMIZER / ESTIMATOR */}
      <section id="menu-estimator" className="py-20 bg-[#F3F3ED]/50 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#097969] font-bold block">Interactive Pricing Tool</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Orchestrate Your Custom Feast
            </h2>
            <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-2"></div>
            <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
              Select your wedding, corporate or family event details, slide your guest count, and toggle our culinary tiers to calculate estimated budgets instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form & Sliders */}
            <div className="lg:col-span-7 bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-2xl shadow-sm space-y-8">
              
              {/* Event Type Select */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]">
                  Step 1: Select Event Occasion
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['wedding', 'corporate', 'birthday'].map((evt) => (
                    <button
                      key={evt}
                      onClick={() => setEventType(evt)}
                      className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-[0.98] border ${
                        eventType === evt 
                          ? 'bg-[#097969] text-white border-[#097969] shadow-sm' 
                          : 'bg-transparent text-[#2C2C2C] border-[#C5A059]/40 hover:bg-[#097969]/5'
                      }`}
                    >
                      {evt === 'wedding' ? 'Wedding' : evt === 'corporate' ? 'Corporate' : 'Birthday/Family'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]">
                    Step 2: Expected Guest Count
                  </label>
                  <span className="font-serif text-2xl font-extrabold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {guests} <span className="text-xs font-sans text-[#5A5A5A] font-normal uppercase tracking-wider">Guests</span>
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="50" 
                  max="1500" 
                  step="25"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#097969]"
                />
                
                <div className="flex justify-between text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest">
                  <span>Min: 50</span>
                  <span>Mid: 750</span>
                  <span>Max: 1500+</span>
                </div>
              </div>

              {/* Menu Tiers Select */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]">
                  Step 3: Select Culinary Feast Tier
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.keys(menuTiers).map((tierKey) => {
                    const tier = menuTiers[tierKey];
                    return (
                      <button
                        key={tierKey}
                        onClick={() => setMenuTier(tierKey)}
                        className={`p-5 text-left border transition-all flex flex-col justify-between active:scale-[0.98] h-full ${
                          menuTier === tierKey 
                            ? 'bg-[#FAFAF7] border-[#097969] border-2 shadow-md ring-1 ring-[#097969]/20' 
                            : 'bg-transparent border-[#C5A059]/30 hover:border-[#097969]/50'
                        }`}
                      >
                        <div>
                          <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ${
                            menuTier === tierKey ? 'bg-[#097969]/10 text-[#097969]' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {tierKey === 'royal' ? 'Exclusive' : 'Popular'}
                          </span>
                          <h4 className="font-serif text-lg font-bold text-[#2C2C2C] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {tier.name}
                          </h4>
                          <p className="text-[11px] text-[#5A5A5A] mt-1 leading-normal font-light">
                            {tier.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100 w-full flex justify-between items-end">
                          <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">Per Plate</span>
                          <span className="font-serif text-xl font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            ₹{tier.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Calculations & Sample Menu Preview */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Cost Box */}
              <div className="bg-[#097969] text-white p-8 rounded-2xl shadow-lg border border-[#C5A059]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 blur-2xl rounded-full pointer-events-none"></div>
                
                <h3 className="font-serif text-xl font-bold text-[#FAFAF7] border-b border-[#FAFAF7]/20 pb-4 mb-4 flex justify-between items-center" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <span>Quote Estimate</span>
                  <span className="text-xs uppercase font-sans tracking-widest text-[#C5A059]">Hyderabad Division</span>
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between font-light">
                    <span className="text-white/80">Menu Choice:</span>
                    <span className="font-semibold text-[#FAFAF7]">{selectedTier.name}</span>
                  </div>
                  <div className="flex justify-between font-light">
                    <span className="text-white/80">Guests Count:</span>
                    <span className="font-semibold text-[#FAFAF7]">{guests} Plates</span>
                  </div>
                  <div className="flex justify-between font-light">
                    <span className="text-white/80">Price Per Plate:</span>
                    <span className="font-semibold text-[#FAFAF7]">₹{selectedTier.price}</span>
                  </div>
                  <div className="flex justify-between font-light">
                    <span className="text-white/80">Base Catering Cost:</span>
                    <span className="font-semibold text-[#FAFAF7]">₹{baseCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-light">
                    <span className="text-white/80">Service & Transport (5%):</span>
                    <span className="font-semibold text-[#FAFAF7]">₹{serviceCharge.toLocaleString('en-IN')}</span>
                  </div>
                  
                  <div className="border-t border-[#FAFAF7]/20 pt-4 mt-2 flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#C5A059] block font-semibold">Estimated Budget</span>
                      <span className="text-[10px] text-white/60 block">*Inclusive of layout service</span>
                    </div>
                    <span className="font-serif text-3xl font-extrabold text-[#FAFAF7]" style={{ fontFamily: 'var(--font-playfair)' }}>
                      ₹{totalCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <a 
                  href="#contact"
                  className="bg-[#FAFAF7] text-[#097969] font-bold uppercase tracking-wider text-xs py-4 px-6 rounded-sm w-full block text-center mt-8 hover:bg-[#C5A059] hover:text-white transition-colors active:scale-[0.98] transition-transform duration-100"
                >
                  Lock-In This Estimate
                </a>
              </div>

              {/* Menu Preview Card */}
              <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-6 rounded-2xl shadow-sm space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#2C2C2C] border-b border-gray-100 pb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <Utensils className="w-5 h-5 text-[#097969]" />
                  <span>Interactive Menu Preview</span>
                </h4>
                
                <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1 text-xs scrollbar">
                  
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#097969] tracking-wider block mb-1">Welcome Refreshments</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedTier.items.welcome.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm border border-gray-200/50">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#097969] tracking-wider block mb-1">Signature Starters</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedTier.items.starters.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm border border-gray-200/50">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#097969] tracking-wider block mb-1">Main Entrées & Accompaniments</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedTier.items.mains.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm border border-gray-200/50">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#097969] tracking-wider block mb-1">Royal Confections & Desserts</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedTier.items.sweets.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm border border-gray-200/50">{item}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SIGNATURE DISHES GRID */}
      <section id="signature" className="py-20 max-w-7xl mx-auto px-6 border-b border-[#C5A059]/20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#097969] font-bold block">Artisanal Masterpieces</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Signature Creations
          </h2>
          <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-2"></div>
          <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
            Our master chefs specialize in heritage dishes crafted from decades-old recipe cards. Experience the culinary jewels of Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#FAFAF7] border border-[#C5A059]/30 rounded-2xl overflow-hidden shadow-sm group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80" 
                alt="Shahi Hyderabadi Mutton Biryani" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <span className="absolute top-4 right-4 bg-[#FAFAF7] border border-[#C5A059] text-[#097969] text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-1 shadow-sm rounded-sm">
                Nizami Classic
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#2C2C2C] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                Shahi Hyderabadi Mutton Biryani
              </h3>
              <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                Tender pasture-raised lamb marinated for 18 hours in raw papaya paste, proprietary spices, and thick cream, layered with aged basmati rice and slow-cooked over firewood coals.
              </p>
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest">
                <span>Cooking Time: 4 Hours</span>
                <span className="text-[#C5A059] font-extrabold">Royal Tier Exclusive</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAFAF7] border border-[#C5A059]/30 rounded-2xl overflow-hidden shadow-sm group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1545247181-516773cae76d?auto=format&fit=crop&w=600&q=80" 
                alt="Nellore Chepala Pulusu" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <span className="absolute top-4 right-4 bg-[#FAFAF7] border border-[#C5A059] text-[#097969] text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-1 shadow-sm rounded-sm">
                Andhra Specialty
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#2C2C2C] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                Nellore Chepala Pulusu
              </h3>
              <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                Freshwater catch simmered in a rich, tangy gravy made from country tamarind pulp, freshly ground mustard, fenugreek, and home-churned cold-pressed groundnut oil.
              </p>
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest">
                <span>Medium Spice</span>
                <span className="text-[#C5A059] font-extrabold">Traditional Favorite</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAFAF7] border border-[#C5A059]/30 rounded-2xl overflow-hidden shadow-sm group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" 
                alt="Double Ka Meetha (Gold Leaf)" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <span className="absolute top-4 right-4 bg-[#FAFAF7] border border-[#C5A059] text-[#097969] text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-1 shadow-sm rounded-sm">
                Royal Dessert
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#2C2C2C] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                Double Ka Meetha (Edible Gold Leaf)
              </h3>
              <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                Crispy fried bread slices soaked in thickened cardamon-infused milk syrup, garnished with hand-crushed almonds, pistachios, Iranian saffron, and covered with pure edible gold vark.
              </p>
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest">
                <span>Sweet Index: High</span>
                <span className="text-[#C5A059] font-extrabold">Signature Sweet</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-[#F3F3ED]/50 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#097969] font-bold block">Verified Gastronomic Delight</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Accolades from Hyderabad Hosts
            </h2>
            <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-[#5A5A5A] font-light leading-relaxed italic">
                  "Ruchi Caterers made our daughter\'s wedding at Uppal Convention Hall a legendary affair. The Mutton Dum Biryani and the Double Ka Meetha were the talk of Gachibowli for weeks! Pristine hospitality and layout."
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center font-serif text-lg font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  K
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C2C2C] block">Krishna Prasad Reddy</span>
                  <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider block mt-0.5">Wedding Host • Uppal</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-[#5A5A5A] font-light leading-relaxed italic">
                  "For our annual leadership banquets in Secunderabad, we always trust Ruchi Caterers. Their attention to food temperature hygiene, server dress code, and corporate taste palettes is outstanding."
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center font-serif text-lg font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  S
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C2C2C] block">Srinivas Rao</span>
                  <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider block mt-0.5">HR Director, TechCorp • Secunderabad</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-[#5A5A5A] font-light leading-relaxed italic">
                  "We ordered their Premium Veg Buffet for a housewarming ceremony. Exceptional hospitality. The Gutti Vankaya curry was prepared exactly like rural Andhra traditions. Highly recommended!"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center font-serif text-lg font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  P
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C2C2C] block">Priya Madhavan</span>
                  <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider block mt-0.5">Home Owner • Gachibowli</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BOOKING CONSULTATION FORM */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-[#FAFAF7] border-2 border-[#C5A059] p-8 md:p-12 rounded-2xl shadow-md space-y-8 relative">
          <div className="absolute top-4 right-4 text-[10px] text-[#C5A059] border border-[#C5A059] px-2 py-0.5 uppercase tracking-widest font-extrabold">
            Secure Form
          </div>
          
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Schedule Feast Consultation
            </h2>
            <p className="text-xs text-[#5A5A5A] font-light uppercase tracking-wider">
              Enquire now to lock-in seasonal pricing and sample tasting slots.
            </p>
            <div className="w-16 h-0.5 bg-[#097969] mx-auto mt-2"></div>
          </div>

          {formSubmitted ? (
            <div className="bg-[#097969]/5 border border-[#097969] p-8 text-center rounded-xl space-y-4 animate-scaleUp">
              <div className="w-16 h-16 bg-[#097969] rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Consultation Request Submitted!
              </h3>
              <p className="text-xs text-[#5A5A5A] max-w-md mx-auto leading-relaxed">
                Thank you for choosing Ruchi Caterers. Chef Narasimha Rao and our event coordinators will call you at <strong className="text-[#2C2C2C]">{formData.phone}</strong> within 3 hours to configure your customized sample tasting. A copy has been drafted to <strong className="text-[#2C2C2C]">{formData.email}</strong>.
              </p>
              <button 
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    eventDate: '',
                    guestCount: '150',
                    tierPreference: 'premium',
                    notes: ''
                  });
                }}
                className="bg-transparent border border-[#097969] text-[#097969] hover:bg-[#097969] hover:text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-150 mt-4"
              >
                Submit New Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="fullName">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full bg-white border ${formErrors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-[#C5A059]/40 focus:border-[#097969]'} px-4 py-3 text-xs outline-none transition-all`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@domain.com"
                    className={`w-full bg-white border ${formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-[#C5A059]/40 focus:border-[#097969]'} px-4 py-3 text-xs outline-none transition-all`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.email}
                    </span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="phone">
                    10-Digit Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 text-xs text-gray-400 font-bold border-r border-gray-200 pr-2">+91</span>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="9849012345"
                      className={`w-full bg-white border ${formErrors.phone ? 'border-red-500 focus:ring-red-200' : 'border-[#C5A059]/40 focus:border-[#097969]'} pl-14 pr-4 py-3 text-xs outline-none transition-all`}
                    />
                  </div>
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="eventDate">
                    Expected Event Date <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className={`w-full bg-white border ${formErrors.eventDate ? 'border-red-500 focus:ring-red-200' : 'border-[#C5A059]/40 focus:border-[#097969]'} px-4 py-3 text-xs outline-none transition-all`}
                  />
                  {formErrors.eventDate && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.eventDate}
                    </span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Guest Count */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="guestCount">
                    Expected Guests Count
                  </label>
                  <input 
                    type="number" 
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    min="50"
                    placeholder="150"
                    className="w-full bg-white border border-[#C5A059]/40 focus:border-[#097969] px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>

                {/* Feast Tier */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="tierPreference">
                    Feast Tier Preference
                  </label>
                  <select 
                    id="tierPreference"
                    name="tierPreference"
                    value={formData.tierPreference}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#C5A059]/40 focus:border-[#097969] px-4 py-3 text-xs outline-none transition-all cursor-pointer"
                  >
                    <option value="standard">Standard Feast (₹450/plate)</option>
                    <option value="premium">Premium Banquet (₹750/plate)</option>
                    <option value="royal">Royal Heritage (₹1200/plate)</option>
                  </select>
                </div>

              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A5A5A]" htmlFor="notes">
                  Dietary Restrictions or Special Requests
                </label>
                <textarea 
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="E.g., require pure veg separate kitchens, live jalebi counters, etc."
                  className="w-full bg-white border border-[#C5A059]/40 focus:border-[#097969] px-4 py-3 text-xs outline-none transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#097969] text-white hover:bg-[#075f52] py-4 px-6 font-bold uppercase tracking-widest text-xs transition-colors shadow-md active:scale-[0.99] transition-transform duration-100"
              >
                Initiate Consultation
              </button>

            </form>
          )}

        </div>
      </section>

      {/* STORE DETAILS FOOTER */}
      <footer className="bg-[#FAFAF7] border-t border-[#C5A059]/30 py-16 text-[#5A5A5A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#097969] rounded-full flex items-center justify-center bg-[#FAFAF7]">
                <span className="font-serif text-xl font-bold text-[#097969]" style={{ fontFamily: 'var(--font-playfair)' }}>R</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold uppercase tracking-wider text-[#097969] block leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Ruchi Caterers
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A059] font-medium block mt-1 uppercase">
                  Classic Telugu & Nizami Feasts
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-sm font-light">
              Crafting premium banquets and traditional feasts across Hyderabad since 1996. Emphasizing absolute hygiene, authentic spice blends, and royal culinary presentation.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#2C2C2C] uppercase tracking-wider" style={{ fontFamily: 'var(--font-playfair)' }}>
              Location & Details
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-[#097969] shrink-0" />
                <span className="font-light">
                  Plot 89, Ramanthapur Main Road,<br/>
                  Near Uppal Metro Station,<br/>
                  Uppal, Hyderabad - 500039
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-[#097969] shrink-0" />
                <span className="font-light">Kitchen Hours: 08:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#2C2C2C] uppercase tracking-wider" style={{ fontFamily: 'var(--font-playfair)' }}>
              Direct Contacts
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-[#097969] shrink-0" />
                <a href="tel:+919849012345" className="hover:text-[#097969] transition-colors font-bold">+91 98490 12345</a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-[#097969] shrink-0" />
                <a href="mailto:info@ruchicaterers.in" className="hover:text-[#097969] transition-colors font-light">info@ruchicaterers.in</a>
              </div>
            </div>
            
            <div className="border-t border-[#C5A059]/20 pt-4 mt-4 text-[10px] tracking-wider uppercase font-semibold text-[#A0A0A0]">
              © 2026 Ruchi Caterers. All Rights Reserved.
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

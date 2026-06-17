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
  X,
  Plus,
  Compass
} from 'lucide-react';

export default function BalajiCaterersPage() {
  // Navigation Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estimator State
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(200);
  const [menuTier, setMenuTier] = useState('premium');
  
  // Custom Addons
  const [addons, setAddons] = useState({
    liveChaat: false,
    mocktailBar: false,
    royalDesserts: false,
    premiumStyling: false
  });

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '200',
    tierPreference: 'premium',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Pure Veg Menu Mapping
  const menuTiers = {
    standard: {
      name: 'Standard Heritage',
      price: 380,
      description: 'Traditional South Indian & North Indian pure vegetarian classics.',
      items: [
        'Aromatic Tomato Soup',
        'Veg Gold Coins',
        'Traditional Avakaya Annam',
        'Pappu Pappucharu',
        'Kadhai Paneer Masala',
        'Butter Naan & Roti',
        'Steamed Rice & Curd',
        'Hot Badam Halwa'
      ]
    },
    premium: {
      name: 'Gourmet Veg Banquet',
      price: 600,
      description: 'Signature fusion dishes, premium tandoor selections, and regional veg favorites.',
      items: [
        'Fresh Kiwi & Mint Mocktail',
        'Deccani Avakaya Wada',
        'Paneer Tikka Angara',
        'Royal Paneer Pasanda',
        'Zafrani Pulao with Gold-Dust Cashews',
        'Methi Chaman Masala',
        'Stuffed Kulcha & Laccha Paratha',
        'Elaneer Payasam',
        'Warm Gajar Halwa'
      ]
    },
    royal: {
      name: 'Royal Vegetarian Feast',
      price: 950,
      description: 'Top-tier luxury dining including exotic starters, organic greens, and royal dessert bars.',
      items: [
        'Rose & Cardamom Sherbet',
        'Gold-Edged Malai Kebab',
        'Stuffed Mushrooms in Truffle Oil',
        'Avadh Dum Paneer Kofta',
        'Kashmiri Pulao with Saffron Threads',
        'Nawabi Kaju Paneer',
        'Assorted Gourmet Breads',
        'Gourmet Baked Rasgulla Tart',
        'Shahi Rabdi Angoori',
        'Kulfi Dry-Fruit Platter'
      ]
    }
  };

  const addonPrices = {
    liveChaat: { name: 'Live Delhi Chaat Counter', price: 60 },
    mocktailBar: { name: 'Artisanal Mocktail Bar', price: 50 },
    royalDesserts: { name: 'Flambé Sweet Stations', price: 80 },
    premiumStyling: { name: 'Royal Brass Chafing Styling', price: 40 }
  };

  // Estimator Calculations
  const selectedTier = menuTiers[menuTier];
  let pricePerPlate = selectedTier.price;
  
  // Add addon prices
  Object.keys(addons).forEach(key => {
    if (addons[key]) {
      pricePerPlate += addonPrices[key].price;
    }
  });

  const baseCost = pricePerPlate * guests;
  const serviceCharge = Math.round(baseCost * 0.05); // 5% setup & logistics
  const totalCost = baseCost + serviceCharge;

  // Toggle Addon
  const toggleAddon = (key) => {
    setAddons({
      ...addons,
      [key]: !addons[key]
    });
  };

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
    <div className="bg-[#FAFAF7] text-[#2D2D2D] selection:bg-[#097969] selection:text-white" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#C5A059]/25">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#C5A059] bg-[#097969] rounded-sm flex items-center justify-center shadow-sm">
              <span className="font-serif text-xl font-bold text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>B</span>
            </div>
            <div>
              <span className="font-serif text-lg font-bold uppercase tracking-wider text-[#097969] block leading-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Balaji Caterers
              </span>
              <span className="text-[9px] tracking-widest text-[#C5A059] font-semibold block mt-1 uppercase">
                100% Pure Vegetarian Gourmet
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-bold text-[#555555]">
            <a href="#story" className="hover:text-[#097969] transition-colors">Philosophy</a>
            <a href="#menu-builder" className="hover:text-[#097969] transition-colors">Menu Builder</a>
            <a href="#dishes" className="hover:text-[#097969] transition-colors">Plated Gallery</a>
            <a href="#reviews" className="hover:text-[#097969] transition-colors">Guest Reviews</a>
            <a href="#enquire" className="hover:text-[#097969] transition-colors">Enquiries</a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:block">
            <a 
              href="#menu-builder" 
              className="bg-transparent border border-[#097969] text-[#097969] px-6 py-2.5 text-xs uppercase tracking-wider font-bold hover:bg-[#097969] hover:text-white transition-all active:scale-[0.98] transition-transform duration-100 shadow-sm"
            >
              Build Menu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#2D2D2D] hover:text-[#097969] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAFAF7] border-b border-[#C5A059]/25 px-6 py-5 flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-wider text-[#555555] py-2 border-b border-[#2D2D2D]/5"
            >
              Philosophy
            </a>
            <a 
              href="#menu-builder" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-wider text-[#555555] py-2 border-b border-[#2D2D2D]/5"
            >
              Menu Builder
            </a>
            <a 
              href="#dishes" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-wider text-[#555555] py-2 border-b border-[#2D2D2D]/5"
            >
              Plated Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-wider text-[#555555] py-2 border-b border-[#2D2D2D]/5"
            >
              Guest Reviews
            </a>
            <a 
              href="#enquire" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-wider text-[#555555] py-2 border-b border-[#2D2D2D]/5"
            >
              Enquiries
            </a>
            <a 
              href="#menu-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#097969] text-white py-3 text-center text-xs uppercase tracking-widest font-bold hover:bg-[#075f52] transition-colors"
            >
              Build Menu
            </a>
          </div>
        )}
      </header>

      {/* SPLIT HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#C5A059]/20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 min-h-[600px] gap-12 items-stretch py-12 lg:py-0">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left py-8 lg:py-24 pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 border border-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 text-[10px] uppercase tracking-widest text-[#097969] font-extrabold mb-6 w-fit rounded-sm">
              <Compass className="w-3.5 h-3.5 text-[#097969]" />
              <span>100% Pure Vegetarian Fine Dining</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 text-[#2D2D2D] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Gourmet Vegetarian <br/>
              Catering Styled with <span className="text-[#097969] italic">Classic Elegance</span>.
            </h1>
            
            <p className="text-sm md:text-base text-[#5A5A5A] max-w-lg font-light leading-relaxed mb-8">
              Pioneering custom plant-based banquets, interactive street food counters, and royal fusion sweets in Uppal, Hyderabad. Prepared in absolute scriptural purity and served with gold-standard hospitality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#menu-builder" 
                className="bg-[#097969] text-white px-8 py-4 text-xs uppercase tracking-wider font-bold hover:bg-[#075f52] transition-colors active:scale-[0.98] transition-transform duration-100 shadow-md"
              >
                Launch Menu Builder
              </a>
              <a 
                href="#enquire" 
                className="bg-[#FAFAF7] border border-[#C5A059] text-[#2D2D2D] px-8 py-4 text-xs uppercase tracking-wider font-bold hover:bg-[#FAFAF7]/50 hover:border-[#097969] transition-colors active:scale-[0.98] transition-transform duration-100"
              >
                Schedule consultation
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Mosaic Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 py-8 lg:py-16 self-center h-full">
            
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-md border border-[#C5A059]/30 aspect-[3/4] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" 
                  alt="Fine Veg Starters Platter" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#097969]/10"></div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md border border-[#C5A059]/30 aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
                  alt="Grand Veg Buffet setup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#097969]/10"></div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden shadow-md border border-[#C5A059]/30 aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80" 
                  alt="Vegetarian Curry Plating" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#097969]/10"></div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md border border-[#C5A059]/30 aspect-[3/4] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" 
                  alt="Saffron Sweet Kheer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#097969]/10"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* METRIC ROW */}
      <section className="bg-[#FAFAF7] border-y border-[#C5A059]/30 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block text-3xl font-extrabold text-[#097969] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>100%</span>
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">Strict Vegetarian Kitchens</span>
          </div>
          <div className="border-l border-gray-200 space-y-1">
            <span className="block text-3xl font-extrabold text-[#097969] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>20+ Years</span>
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">Legacy in Hyderabad</span>
          </div>
          <div className="border-l border-gray-200 space-y-1">
            <span className="block text-3xl font-extrabold text-[#097969] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>100%</span>
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">Organic Oil & Spices</span>
          </div>
          <div className="border-l border-gray-200 space-y-1">
            <span className="block text-3xl font-extrabold text-[#097969] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>4,000+</span>
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">Grand Veg Events Served</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & STORY */}
      <section id="story" className="py-20 max-w-7xl mx-auto px-6 border-b border-[#C5A059]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#097969] font-bold text-xs uppercase tracking-widest">
              <ChefHat className="w-4 h-4 text-[#C5A059]" />
              <span>Sacred Kitchen Principles</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-normal text-[#2D2D2D] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Where Taste Meets Purity. <br />
              Gourmet Vegetarian Innovations.
            </h2>
            
            <p className="text-sm md:text-base text-[#5A5A5A] font-light leading-relaxed">
              At Balaji Caterers, vegetarianism is not just a menu category—it is our sole dedication. Established in 2004, we designed our central kitchens in Uppal with layout segregation that strictly forbids any non-vegetarian preparation, ingredients, or personnel. This absolute discipline guarantees peace of mind for traditional family occasions.
            </p>
            
            <p className="text-sm md:text-base text-[#5A5A5A] font-light leading-relaxed">
              Our culinary focus centers around clean, modern presentations. We combine traditional wedding flavors from Telangana, Andhra, and Rajasthan with interactive culinary food theater, such as live dry-ice dessert tables, organic wood-fire tandoor grills, and molecular chaat bars.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div className="border-l-2 border-[#C5A059] pl-4 space-y-1">
                <span className="font-bold text-xs uppercase text-[#2D2D2D] tracking-wider block">Zero Frozen Preservatives</span>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  We prepare our paneer and ghee in-house daily. All gravies are made from scratch with zero artificial coloring.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A059] pl-4 space-y-1">
                <span className="font-bold text-xs uppercase text-[#2D2D2D] tracking-wider block">Interactive Live Theaters</span>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  Gourmet live counters with trained artisans making hot piping jalebis, stone-griddle papdi chaat, and fusion appetizers.
                </p>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 relative self-center">
            <div className="absolute top-0 right-0 w-full h-full bg-[#097969]/5 rounded-xl pointer-events-none rotate-3 border border-[#C5A059]/10"></div>
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#C5A059]/30 aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80" 
                alt="Chef plating vegetarian dishes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAFAF7]/95 p-6 border-l-4 border-[#097969] shadow-md rounded-sm">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#097969] block">Purity Attestation</span>
                <p className="text-xs text-[#5A5A5A] mt-2 font-light leading-relaxed">
                  "Our spice mixtures are ground under sanitary surveillance, using hand-sorted cardamom, organic cumin, and premium saffron."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE MENU CUSTOMIZER (MODULAR BUILDER) */}
      <section id="menu-builder" className="py-20 bg-[#FAFAF7] border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#097969] font-bold block">Custom Veg Menu Builder</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D2D2D] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Design Your Custom Veg Banquet
            </h2>
            <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
              Select guest count, choose a baseline culinary tier, and add interactive food stations to configure your personalized estimated quote.
            </p>
            <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Menu Selections */}
            <div className="lg:col-span-7 bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-xl shadow-sm space-y-8">
              
              {/* Event Type */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-bold text-[#555555]">
                  1. Event Occasion
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['wedding', 'corporate', 'birthday'].map((evt) => (
                    <button
                      key={evt}
                      onClick={() => setEventType(evt)}
                      className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border rounded-sm transition-all duration-150 active:scale-[0.98] ${
                        eventType === evt 
                          ? 'bg-[#097969] text-white border-[#097969] shadow-sm' 
                          : 'bg-transparent text-[#2D2D2D] border-[#C5A059]/40 hover:bg-[#097969]/5'
                      }`}
                    >
                      {evt === 'wedding' ? 'Wedding' : evt === 'corporate' ? 'Corporate' : 'Social/Birthday'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#555555]">
                    2. Plates Needed
                  </label>
                  <span className="font-serif text-2xl font-bold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {guests} <span className="text-xs font-sans text-gray-500 font-normal uppercase tracking-wider">Plates</span>
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="25"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#097969]"
                />
              </div>

              {/* Baseline Menu Select */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-bold text-[#555555]">
                  3. Baseline Menu Style
                </label>
                <div className="space-y-3">
                  {Object.keys(menuTiers).map((tierKey) => {
                    const tier = menuTiers[tierKey];
                    return (
                      <button
                        key={tierKey}
                        onClick={() => setMenuTier(tierKey)}
                        className={`w-full p-4 border rounded-sm transition-all flex justify-between items-center active:scale-[0.99] text-left ${
                          menuTier === tierKey 
                            ? 'bg-[#FAFAF7] border-[#097969] border-2 shadow-sm' 
                            : 'bg-transparent border-[#C5A059]/30 hover:border-[#097969]/50'
                        }`}
                      >
                        <div className="pr-4">
                          <h4 className="font-serif text-base font-bold text-[#2D2D2D]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {tier.name}
                          </h4>
                          <p className="text-[11px] text-[#5A5A5A] mt-0.5 font-light">
                            {tier.description}
                          </p>
                        </div>
                        <span className="font-serif text-lg font-bold text-[#097969] shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          ₹{tier.price}/plate
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Addons Checklist */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-bold text-[#555555]">
                  4. Optional Gourmet Food Counters
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.keys(addonPrices).map((key) => {
                    const addon = addonPrices[key];
                    return (
                      <button
                        key={key}
                        onClick={() => toggleAddon(key)}
                        className={`p-4 border rounded-sm flex justify-between items-center text-left transition-all active:scale-[0.98] ${
                          addons[key] 
                            ? 'bg-[#097969]/5 border-[#097969]' 
                            : 'bg-transparent border-[#C5A059]/30 hover:border-[#097969]/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 border flex items-center justify-center rounded-sm shrink-0 ${
                            addons[key] ? 'bg-[#097969] border-[#097969] text-white' : 'border-[#C5A059]/60 bg-white'
                          }`}>
                            {addons[key] && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold text-[#2D2D2D] leading-none">{addon.name}</span>
                        </div>
                        <span className="text-[11px] font-serif font-bold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          +₹{addon.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Estimations */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#FAFAF7] border-2 border-[#C5A059] p-8 rounded-xl shadow-md space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#097969] border-b border-gray-100 pb-4 flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  <span>Custom Estimate</span>
                  <span className="text-[9px] uppercase font-sans tracking-widest text-[#C5A059] border border-[#C5A059]/40 px-2 py-0.5">Balaji Pure Veg</span>
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Baseline Plate Price:</span>
                    <span className="font-bold text-[#2D2D2D]">₹{selectedTier.price}</span>
                  </div>
                  
                  {/* List active addons */}
                  {Object.keys(addons).some(key => addons[key]) && (
                    <div className="border-t border-dashed border-gray-200 pt-3 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#A0A0A0] tracking-wider block">Gourmet Add-ons:</span>
                      {Object.keys(addons).map(key => {
                        if (addons[key]) {
                          return (
                            <div key={key} className="flex justify-between text-[11px] text-gray-600 pl-2">
                              <span>• {addonPrices[key].name}</span>
                              <span className="font-semibold text-[#097969]">+₹{addonPrices[key].price}</span>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-3 flex justify-between text-gray-600 font-bold">
                    <span>Final Price Per Plate:</span>
                    <span className="text-[#097969] text-base font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>₹{pricePerPlate}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 flex justify-between text-gray-600">
                    <span>Base Catering Cost ({guests} guests):</span>
                    <span>₹{baseCost.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Setup, Logistics & Service (5%):</span>
                    <span>₹{serviceCharge.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="border-t-2 border-[#C5A059] pt-4 mt-2 flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold block">Estimated Total</span>
                      <span className="text-[10px] text-gray-400 block">*Excludes government taxes</span>
                    </div>
                    <span className="font-serif text-3xl font-extrabold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      ₹{totalCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <a 
                  href="#enquire"
                  className="bg-[#097969] text-white font-bold uppercase tracking-wider text-xs py-4 px-6 rounded-sm w-full block text-center mt-6 hover:bg-[#075f52] transition-colors active:scale-[0.98] transition-transform duration-100 shadow-md"
                >
                  Consult on this Menu
                </a>
              </div>

              {/* Sample Menu Outline */}
              <div className="bg-[#F3F3ED]/40 border border-[#C5A059]/20 p-6 rounded-xl space-y-4">
                <h4 className="font-serif text-sm font-bold text-[#2D2D2D] uppercase tracking-wider border-b border-gray-200/50 pb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Included Dishes Overview
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedTier.items.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-gray-700">
                      <Check className="w-3.5 h-3.5 text-[#097969] shrink-0" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PLATED GALLERY (SIGNATURE DISHES) */}
      <section id="dishes" className="py-20 max-w-7xl mx-auto px-6 border-b border-[#C5A059]/20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#097969] font-bold block">Modern Vegetarian Aesthetics</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D2D2D] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Plated Collection
          </h2>
          <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Item 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-12 border border-[#C5A059]/35 bg-[#FAFAF7] rounded-xl overflow-hidden shadow-sm group">
            <div className="sm:col-span-5 aspect-square sm:aspect-auto overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" 
                alt="Royal Paneer Pasanda" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-extrabold block">Gourmet Mains</span>
                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Royal Paneer Pasanda
                </h3>
                <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                  Twin layers of hand-pressed cottage cheese sandwiching a rich, sweet stuffing of dry plums, pistachios, and fresh cream, simmered gently in a silky cashew-tomato gravy.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3 text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest block">
                Allergen: Contains Nuts & Dairy
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-12 border border-[#C5A059]/35 bg-[#FAFAF7] rounded-xl overflow-hidden shadow-sm group">
            <div className="sm:col-span-5 aspect-square sm:aspect-auto overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80" 
                alt="Zafrani Pulao" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-extrabold block">Basmati Confections</span>
                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Zafrani Pulao with Gold-Dust Cashews
                </h3>
                <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                  Long-grain Basmati rice simmered in warm milk infused with premium Kashmiri saffron, cardamom pods, and star anise, topped with ghee-roasted cashews wrapped in pure silver and gold leaf.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3 text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest block">
                Infused with Pure Saffron Threads
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-12 border border-[#C5A059]/35 bg-[#FAFAF7] rounded-xl overflow-hidden shadow-sm group">
            <div className="sm:col-span-5 aspect-square sm:aspect-auto overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
                alt="Deccani Avakaya Wada" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-extrabold block">Appetizers</span>
                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Deccani Avakaya Wada
                </h3>
                <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                  Crispy, golden-fried black gram lentil donuts infused with spicy seasonal Hyderabad mango pickle (Avakaya) and minced ginger, served with creamy coconut-mint chutney.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3 text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest block">
                Traditional Fusion Appetizer
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-12 border border-[#C5A059]/35 bg-[#FAFAF7] rounded-xl overflow-hidden shadow-sm group">
            <div className="sm:col-span-5 aspect-square sm:aspect-auto overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" 
                alt="Elaneer Payasam" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-extrabold block">Sweet Endings</span>
                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] group-hover:text-[#097969] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Elaneer Payasam
                </h3>
                <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                  A delicate, refreshing pudding prepared from fresh tender coconut meat pulp and sweet coconut water, simmered with condensed milk, cardamom, and garnished with roasted pistachios.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3 text-[10px] text-[#A0A0A0] uppercase font-bold tracking-widest block">
                Served Chilled
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section id="reviews" className="py-20 bg-[#F3F3ED]/40 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#097969] font-bold block">Honest Gastronomic Attestations</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D2D2D] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Lauded by Hosts in Hyderabad
            </h2>
            <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-[#5A5A5A] font-light italic leading-relaxed">
                  "Balaji Caterers managed our housewarming banquet in Uppal. The purity of the vegetarian kitchen setup is highly authentic. Our Gachibowli relatives were raving about the Paneer Pasanda and the live chaat counters for days!"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center font-serif text-lg font-bold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  A
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2D2D2D] block">Ananthakrishnan S.</span>
                  <span className="text-[9px] text-[#A0A0A0] uppercase tracking-wider block">Home Owner • Uppal</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-[#5A5A5A] font-light italic leading-relaxed">
                  "We hired Balaji for our company anniversary buffet in Gachibowli. Exceptionally polished setup. The brass chafing layouts, organic ingredients, and professional crew uniform standards were extremely high quality."
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center font-serif text-lg font-bold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  V
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2D2D2D] block">Venkatesh Murthy</span>
                  <span className="text-[9px] text-[#A0A0A0] uppercase tracking-wider block">Operations Lead • Gachibowli</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FAFAF7] border border-[#C5A059]/30 p-8 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-[#5A5A5A] font-light italic leading-relaxed">
                  "For a pure veg family banquet in Secunderabad, we chose their Royal Tier. Absolute culinary masterclass! The Elaneer Payasam and Kaju Paneer were cooked to perfection. Truly premium catering."
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#097969]/10 border border-[#097969]/30 flex items-center justify-center font-serif text-lg font-bold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  R
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2D2D2D] block">Radha Krishnan</span>
                  <span className="text-[9px] text-[#A0A0A0] uppercase tracking-wider block">Family Occasion • Secunderabad</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ASYMMETRICAL CONTACT / ENQUIRY SECTION */}
      <section id="enquire" className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Info Details */}
          <div className="lg:col-span-5 bg-[#097969] text-white p-8 md:p-12 rounded-xl flex flex-col justify-between border border-[#C5A059]/40 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 blur-3xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <span className="text-[9px] uppercase tracking-widest text-[#C5A059] border border-[#C5A059] px-2 py-0.5 font-bold w-fit block">
                Direct Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-normal text-white font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Let\'s Discuss Your Culinary Vision.
              </h2>
              <p className="text-xs text-[#FAFAF7]/80 leading-relaxed font-light">
                Our team is ready to host a tasting session and walk you through physical layouts, live griddle specifications, and copper-chafing styling options for your premium events.
              </p>
            </div>

            <div className="space-y-4 pt-12 border-t border-[#FAFAF7]/20 mt-12 text-xs">
              <div className="flex gap-3 items-center">
                <Phone className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <a href="tel:+919246543210" className="hover:text-[#C5A059] transition-colors font-bold">+91 92465 43210</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <a href="mailto:bookings@balajicaterersuppal.com" className="hover:text-[#C5A059] transition-colors">bookings@balajicaterersuppal.com</a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <span>
                  Shop 12, Survey No. 45,<br/>
                  Beside Uppal Metro Station,<br/>
                  Uppal, Hyderabad - 500039
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Booking Form Card */}
          <div className="lg:col-span-7 bg-[#FAFAF7] border border-[#C5A059]/35 p-8 md:p-12 rounded-xl shadow-sm space-y-6">
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#2D2D2D] font-serif" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Request Custom Quotation
              </h3>
              <p className="text-xs text-[#5A5A5A] uppercase tracking-wider font-semibold">
                Submit details below to block your booking dates.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[#097969]/5 border border-[#097969]/60 p-8 text-center rounded-lg space-y-4 animate-scaleUp">
                <div className="w-12 h-12 bg-[#097969] rounded-full flex items-center justify-center mx-auto text-white shadow-sm">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#097969]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Enquiry Transmitted Successfully
                </h4>
                <p className="text-xs text-[#5A5A5A] max-w-sm mx-auto leading-relaxed font-light">
                  A culinary coordinator has received your menu choice. We will reach you at <strong className="text-[#2D2D2D]">{formData.phone}</strong> shortly to book a tasting slot at our Uppal demo kitchen.
                </p>
                <button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      eventDate: '',
                      guestCount: '200',
                      tierPreference: 'premium',
                      notes: ''
                    });
                  }}
                  className="bg-transparent border border-[#097969] text-[#097969] hover:bg-[#097969] hover:text-white px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-150 mt-2 rounded-sm"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="fullName">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={`w-full bg-white border ${formErrors.fullName ? 'border-red-500' : 'border-[#C5A059]/40 focus:border-[#097969]'} px-3.5 py-3 text-xs outline-none transition-all rounded-sm`}
                    />
                    {formErrors.fullName && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@domain.com"
                      className={`w-full bg-white border ${formErrors.email ? 'border-red-500' : 'border-[#C5A059]/40 focus:border-[#097969]'} px-3.5 py-3 text-xs outline-none transition-all rounded-sm`}
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.email}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="phone">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-xs text-gray-400 font-bold border-r border-gray-200 pr-2">+91</span>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9246543210"
                        className={`w-full bg-white border ${formErrors.phone ? 'border-red-500' : 'border-[#C5A059]/40 focus:border-[#097969]'} pl-14 pr-3.5 py-3 text-xs outline-none transition-all rounded-sm`}
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.phone}
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="eventDate">
                      Event Date <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date" 
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className={`w-full bg-white border ${formErrors.eventDate ? 'border-red-500' : 'border-[#C5A059]/40 focus:border-[#097969]'} px-3.5 py-3 text-xs outline-none transition-all rounded-sm`}
                    />
                    {formErrors.eventDate && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.eventDate}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Guests */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="guestCount">
                      Guests Count
                    </label>
                    <input 
                      type="number" 
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      min="50"
                      className="w-full bg-white border border-[#C5A059]/40 focus:border-[#097969] px-3.5 py-3 text-xs outline-none transition-all rounded-sm"
                    />
                  </div>

                  {/* Tier */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="tierPreference">
                      Menu Style Tier
                    </label>
                    <select 
                      id="tierPreference"
                      name="tierPreference"
                      value={formData.tierPreference}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#C5A059]/40 focus:border-[#097969] px-3.5 py-3 text-xs outline-none transition-all rounded-sm cursor-pointer"
                    >
                      <option value="standard">Standard Heritage (₹380/plate)</option>
                      <option value="premium">Gourmet Veg Banquet (₹600/plate)</option>
                      <option value="royal">Royal Vegetarian Feast (₹950/plate)</option>
                    </select>
                  </div>

                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500" htmlFor="notes">
                    Dietary Requirements or Special Requests
                  </label>
                  <textarea 
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="E.g., live paneer tandoor, pure vegan preferences, onion-garlic restrictions, etc."
                    className="w-full bg-white border border-[#C5A059]/40 focus:border-[#097969] px-3.5 py-3 text-xs outline-none transition-all rounded-sm"
                  ></textarea>
                </div>

                {/* Submit */}
                <button 
                  type="submit"
                  className="w-full bg-[#097969] text-white hover:bg-[#075f52] py-3.5 px-6 font-bold uppercase tracking-widest text-xs transition-colors rounded-sm shadow-md active:scale-[0.99] transition-transform duration-100"
                >
                  Send Quotation Request
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FAFAF7] border-t border-[#C5A059]/25 py-12 text-[#5A5A5A] text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#097969] rounded-sm flex items-center justify-center shadow-sm">
              <span className="font-serif text-base font-bold text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>B</span>
            </div>
            <div>
              <span className="font-serif text-sm font-bold uppercase tracking-wider text-[#097969] block leading-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Balaji Caterers
              </span>
              <span className="text-[9px] tracking-widest text-[#C5A059] font-semibold block mt-0.5 uppercase">
                100% Pure Vegetarian Gourmet
              </span>
            </div>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#story" className="hover:text-[#097969] transition-colors">Philosophy</a>
            <a href="#menu-builder" className="hover:text-[#097969] transition-colors">Menu Builder</a>
            <a href="#dishes" className="hover:text-[#097969] transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-[#097969] transition-colors">Reviews</a>
          </div>

          <div className="text-[10px] text-gray-400">
            © 2026 Balaji Caterers. 100% Pure Vegetarian Legacy.
          </div>
        </div>
      </footer>

    </div>
  );
}

"use client";

import React, { useState, useMemo } from 'react';
import { 
  Compass, ShieldCheck, Heart, Award, Phone, Mail, 
  MapPin, Calendar, Clock, ArrowRight, Check, Sparkles, 
  Info, CheckSquare, Square, ChevronRight, X
} from 'lucide-react';

export default function GoldenCaterersPage() {
  // Estimator State
  const [eventType, setEventType] = useState('gala');
  const [guests, setGuests] = useState(80);
  const [tier, setTier] = useState('plated');
  const [addons, setAddons] = useState({
    woodfireTandoor: false,
    seafoodGrill: false,
    cheeseBoard: false
  });

  // Contact Form State
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '80',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Constants for Estimator
  const eventMultipliers = {
    gala: 1.3,
    corporate: 1.1,
    soiree: 1.0
  };

  const tierPrices = {
    buffet: 800,
    plated: 1500,
    feast: 3000
  };

  const addonPrices = {
    woodfireTandoor: 60,
    seafoodGrill: 120,
    cheeseBoard: 150
  };

  const tierMenus = {
    buffet: {
      title: "Classic Buffet Structure",
      courses: [
        "Welcome Mocktails (2 Varieties)",
        "3 Artisanal Appetizers (2 Veg, 1 Non-Veg)",
        "4 Main Courses (including Paneer & Chicken specialties)",
        "Dal Maharani & Fragrant Basmati Pulao",
        "Assorted Indian Breads (Naan, Kulcha, Roti)",
        "2 Desserts (Traditional & Ice Cream)"
      ]
    },
    plated: {
      title: "Artisanal Plated Course Menu",
      courses: [
        "Saffron-Infused Welcome Drinks & Herb Crusted Crostini",
        "4 Gourmet Appetizers (e.g., Smoked Beetroot Galouti Kebab, Charcoal Malai Murgh)",
        "Amuse-Bouche: Cleansing Lemon-Ginger Granita",
        "5 Main Courses (e.g., Truffle Scented Zafrani Pulao, Slow-Roasted Deccani Lamb)",
        "Fresh Hand-Stretched Sheermal & Butter Naans",
        "3 Exquisite Desserts (including Golden Elixir Trio)"
      ]
    },
    feast: {
      title: "The Golden Feast Experiential Menu",
      courses: [
        "Champagne Glass Mocktails & Saffron Infused Nectars",
        "6 Premium Starters (served individually with custom smoke dome presentation)",
        "Mid-Course: Cold-Pressed Melon Gazpacho",
        "7 Main Courses (including Coastal Prawn Masala, Wild Mushroom Korma, Royal Lamb Kuzi)",
        "Artisanal Bread Basket (Bakarkhani, Olive Naan, Laccha Paratha)",
        "Live Liquid Nitrogen Ice Cream & Smoke Sorbet Station",
        "Assorted Hyd Dessert Platter topped with edible 24K Gold Foil",
        "Meetha Paan & Mint Infusions Bar"
      ]
    }
  };

  // Math for Estimation
  const pricingSummary = useMemo(() => {
    const basePlatePrice = tierPrices[tier];
    const multiplier = eventMultipliers[eventType];
    const platePriceAdjusted = Math.round(basePlatePrice * multiplier);
    
    let addonPlateCost = 0;
    if (addons.woodfireTandoor) addonPlateCost += addonPrices.woodfireTandoor;
    if (addons.seafoodGrill) addonPlateCost += addonPrices.seafoodGrill;
    if (addons.cheeseBoard) addonPlateCost += addonPrices.cheeseBoard;

    const finalPerPlate = platePriceAdjusted + addonPlateCost;
    const subtotal = finalPerPlate * guests;
    const tax = Math.round(subtotal * 0.05); // 5% Service Tax/GST
    const grandTotal = subtotal + tax;

    return {
      perPlate: finalPerPlate,
      subtotal,
      tax,
      grandTotal
    };
  }, [eventType, guests, tier, addons]);

  const handleAddonToggle = (key) => {
    setAddons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Active validation checks
  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.length < 3) error = 'Name must be at least 3 characters';
    }
    if (name === 'email') {
      if (!value) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'phone') {
      if (!value) error = 'Phone number is required';
      else if (!/^[6-9]\d{9}$/.test(value)) error = 'Must be a valid 10-digit Indian phone number';
    }
    if (name === 'date') {
      if (!value) error = 'Event date is required';
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    Object.keys(formValues).forEach(key => {
      const error = validateField(key, formValues[key]);
      if (error) errors[key] = error;
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form
        setFormValues({
          name: '',
          email: '',
          phone: '',
          date: '',
          guests: '80',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2C2C] font-sans selection:bg-[#A3704C] selection:text-[#FAF8F5] antialiased">
      
      {/* Decorative top hairline rule */}
      <div className="h-[1px] bg-[#A3704C]/30" />

      {/* Hero Header - Modernist Editorial Layout */}
      <header className="relative pt-20 pb-24 md:py-36 border-b border-[#A3704C]/15 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A3704C] font-semibold block">
                Bespoke Gastronomy // Uppal, Hyderabad
              </span>
              
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-[#2C2C2C] leading-none">
                Art on a plate.<br />
                <span className="font-light italic text-[#A3704C]">Memories in a bite.</span>
              </h1>
              
              <div className="h-[1px] w-24 bg-[#A3704C]" />

              <p className="text-sm md:text-base text-[#5A5A5A] font-light max-w-lg leading-relaxed">
                Golden Caterers elevates event dining into an unforgettable sensory experience. We specialize in curating high-end artisanal catering and plated multi-course dinners for discerning hosts across Hyderabad.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#architect" 
                  className="px-8 py-3.5 border border-[#A3704C] bg-[#A3704C] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-transparent hover:text-[#A3704C] active:scale-95"
                >
                  Architect Menu
                </a>
                <a 
                  href="#heritage" 
                  className="px-8 py-3.5 border border-[#2C2C2C]/20 bg-transparent text-[#2C2C2C] text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:border-[#A3704C] hover:text-[#A3704C] active:scale-95"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            {/* Asymmetrical visual wireframe for food layout */}
            <div className="lg:col-span-5 w-full space-y-6 lg:pl-6">
              <div className="border border-[#A3704C]/30 p-8 space-y-6 bg-[#FAF8F5]">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#7A7A7A] border-b border-[#2C2C2C]/10 pb-4">
                  <span>Golden Fine Dining Layout</span>
                  <span className="font-mono text-[#A3704C]">No. 04</span>
                </div>
                
                {/* Visual plate design mockup */}
                <div className="aspect-square w-full max-w-[280px] mx-auto border border-dashed border-[#A3704C]/40 rounded-full flex items-center justify-center relative p-6">
                  <div className="absolute inset-4 border border-[#A3704C]/25 rounded-full flex items-center justify-center">
                    <div className="absolute inset-8 border border-dashed border-[#A3704C]/15 rounded-full flex items-center justify-center">
                      <Compass className="w-8 h-8 text-[#A3704C] stroke-[1] animate-[spin_60s_linear_infinite]" />
                    </div>
                  </div>
                  
                  {/* Floating elements describing a plate */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF8F5] px-2 text-[8px] uppercase tracking-widest text-[#7A7A7A]">
                    Truffle Pulao
                  </span>
                  <span className="absolute bottom-1/3 -left-6 bg-[#FAF8F5] px-2 text-[8px] uppercase tracking-widest text-[#7A7A7A] whitespace-nowrap">
                    Smoked Beetroot
                  </span>
                  <span className="absolute bottom-1/4 -right-8 bg-[#FAF8F5] px-2 text-[8px] uppercase tracking-widest text-[#7A7A7A] whitespace-nowrap">
                    Gold-Foil Elixir
                  </span>
                </div>

                <div className="text-center pt-2 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2C] block font-semibold">The Table Sequence</span>
                  <p className="text-[11px] text-[#7A7A7A] italic">"Every course curated as an independent masterwork of taste and balance."</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Brand Story / Philosophy Section */}
      <section id="heritage" className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#A3704C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3704C] font-semibold block">Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] leading-tight">
                The Golden Standard of Catering.
              </h2>
              <div className="h-[1px] w-16 bg-[#A3704C] my-4" />
              <p className="text-xs text-[#7A7A7A] leading-relaxed uppercase tracking-wider">
                Locally sourced // Organically grown // Cleanly executed
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#5A5A5A] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  At Golden Caterers, we do not believe in mass-produced culinary options. We serve selectively. Based in Uppal, Hyderabad, our team has built a reputation for treating catering not as a logistical task, but as a fine art. We reject commercial taste enhancers, synthetic colors, and pre-packaged masalas.
                </p>
                <p>
                  Instead, our kitchen features custom dry-age rooms, stone-ground paste grinders, and slow-cooking wood tandoors. Our executive culinary designers work directly with organic farms on the outskirts of Secunderabad to secure fresh heirloom herbs and vegetables.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Hygiene is our foundation. Our food laboratory in Uppal strictly monitors bacteriological counts, maintains active sanitization cycles, and operates a 100% traceably sourced pantry. From corporate dinners in Gachibowli to elite weddings in Uppal, we execute clean, gourmet excellence.
                </p>
                <div className="pt-4 border-t border-[#A3704C]/20 space-y-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#A3704C] shrink-0" />
                    <span className="text-xs uppercase tracking-wider text-[#2C2C2C] font-semibold">Zero-Bacterial Cross Operation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#A3704C] shrink-0" />
                    <span className="text-xs uppercase tracking-wider text-[#2C2C2C] font-semibold">Accredited Food Designers</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Menu Estimator */}
      <section id="architect" className="py-24 md:py-32 bg-[#F3EFEA] border-b border-[#A3704C]/15">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3704C] font-semibold block">Investment Calculator</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Golden <span className="font-light italic text-[#A3704C]">Course Architect</span>
            </h2>
            <p className="text-sm text-[#5A5A5A] font-light max-w-xl">
              Determine your plates, guest count, and optional culinary displays to preview your bespoke budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Input fields */}
            <div className="lg:col-span-7 space-y-8 bg-[#FAF8F5] p-8 border border-[#2C2C2C]/10 rounded">
              
              {/* Event format */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                  Step 1: Select Event Format
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'gala', label: 'Galas & Weddings', desc: 'Bespoke Plated Luxury' },
                    { key: 'corporate', label: 'Corporate Gatherings', desc: 'Sleek Corporate Dining' },
                    { key: 'soiree', label: 'Intimate Soirees', desc: 'Fine Plated Experience' }
                  ].map((evt) => (
                    <button
                      key={evt.key}
                      type="button"
                      onClick={() => setEventType(evt.key)}
                      className={`text-left p-4 border transition-all duration-200 active:scale-95 ${
                        eventType === evt.key 
                          ? 'border-[#A3704C] bg-[#FAF8F5] ring-[0.5px] ring-[#A3704C]' 
                          : 'border-[#2C2C2C]/15 bg-transparent hover:border-[#A3704C]/45'
                      }`}
                    >
                      <span className={`block text-xs font-bold uppercase tracking-wider ${eventType === evt.key ? 'text-[#A3704C]' : 'text-[#2C2C2C]'}`}>
                        {evt.label}
                      </span>
                      <span className="block text-[9px] text-[#7A7A7A] mt-1">{evt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Scale */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="guests-slider-gold" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C]">
                    Step 2: Guest Scale: <span className="text-[#A3704C] font-mono text-sm">{guests}</span>
                  </label>
                  <input 
                    type="number" 
                    value={guests} 
                    onChange={(e) => setGuests(Math.max(20, Math.min(500, Number(e.target.value) || 20)))}
                    className="w-20 px-2 py-1 text-center text-xs border border-[#2C2C2C]/15 rounded bg-[#FAF8F5] focus:outline-none focus:border-[#A3704C]"
                    min="20"
                    max="500"
                  />
                </div>
                <input
                  id="guests-slider-gold"
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full h-1 bg-[#2C2C2C]/10 rounded appearance-none cursor-pointer accent-[#A3704C]"
                />
                <span className="text-[9px] text-[#7A7A7A] block">Designed for intimate sizes (Min: 20 | Max: 500 guests)</span>
              </div>

              {/* Culinary Tier */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                  Step 3: Select Culinary Tier
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { key: 'buffet', label: 'Classic Buffet', price: '₹800', desc: 'Premium buffet options' },
                    { key: 'plated', label: 'Artisanal Plated', price: '₹1,500', desc: 'Elegant plated course' },
                    { key: 'feast', label: 'The Golden Feast', price: '₹3,000', desc: 'Experiential luxury dining' }
                  ].map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setTier(t.key)}
                      className={`text-left p-4 border transition-all duration-200 active:scale-95 ${
                        tier === t.key 
                          ? 'border-[#A3704C] bg-[#FAF8F5] ring-[0.5px] ring-[#A3704C]' 
                          : 'border-[#2C2C2C]/15 bg-transparent hover:border-[#A3704C]/45'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-bold uppercase tracking-wider ${tier === t.key ? 'text-[#A3704C]' : 'text-[#2C2C2C]'}`}>
                          {t.label}
                        </span>
                        <span className="text-xs font-mono text-[#A3704C] font-semibold">{t.price}</span>
                      </div>
                      <span className="block text-[9px] text-[#7A7A7A] mt-1">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom culinary modules */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                  Step 4: Custom Culinary Modules
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'woodfireTandoor', label: 'Woodfire Live Tandoor', price: '₹60 / guest', desc: 'Live mud oven producing hot zafrani sheermal.' },
                    { key: 'seafoodGrill', label: 'Signature Seafood Grill Stalls', price: '₹120 / guest', desc: 'Charcoal grilled tiger prawns and pomfrets.' },
                    { key: 'cheeseBoard', label: 'Artisanal Charcuterie & Cheese', price: '₹150 / guest', desc: 'Imported cheeses, dry berries, organic honey board.' }
                  ].map((addon) => (
                    <label 
                      key={addon.key} 
                      className={`flex items-center justify-between p-3 border cursor-pointer transition-all ${
                        addons[addon.key] 
                          ? 'border-[#A3704C] bg-[#A3704C]/5' 
                          : 'border-[#2C2C2C]/15 hover:border-[#A3704C]/35'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={addons[addon.key]}
                          onChange={() => handleAddonToggle(addon.key)}
                          className="mt-1 rounded text-[#A3704C] focus:ring-[#A3704C] border-gray-300 w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-[#2C2C2C] uppercase tracking-wide">{addon.label}</span>
                          <span className="block text-[10px] text-[#7A7A7A] mt-0.5">{addon.desc}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#A3704C] ml-4">+{addon.price}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimates */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#FAF8F5] border border-[#2C2C2C]/15 rounded p-6 space-y-6">
                
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#7A7A7A] block">
                  Estimation Summary
                </span>
                
                <div className="space-y-1">
                  <span className="text-xs text-[#7A7A7A] uppercase tracking-wider block">Bespoke Price Per Plate</span>
                  <span className="text-4xl font-serif text-[#A3704C]">
                    ₹{pricingSummary.perPlate.toLocaleString('en-IN')}
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7A7A7A] ml-2">/ Guest</span>
                  </span>
                </div>

                <div className="border-t border-[#2C2C2C]/10 pt-4 space-y-2.5 text-xs text-[#2C2C2C]">
                  <div className="flex justify-between">
                    <span className="text-[#5A5A5A]">Base Subtotal ({guests} guests):</span>
                    <span className="font-semibold">₹{pricingSummary.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5A5A5A]">Taxes & Hygiene Services (5%):</span>
                    <span className="font-semibold">₹{pricingSummary.tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t border-dashed border-[#A3704C]/35 pt-2 flex justify-between text-sm font-semibold">
                    <span className="text-[#A3704C] font-serif italic">Grand Total Investment:</span>
                    <span className="text-[#A3704C] font-mono">₹{pricingSummary.grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <p className="text-[10px] text-[#7A7A7A] italic leading-relaxed">
                  *All prices calculated represent a premium editorial dining framework. Precise logistical surveys of venues in Uppal will finalize setup budgets.
                </p>

                <a 
                  href="#book" 
                  className="w-full text-center block px-6 py-3.5 border border-[#A3704C] bg-[#A3704C] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-transparent hover:text-[#A3704C]"
                >
                  Book Private Tasting
                </a>
              </div>

              {/* Dynamic Course structure preview */}
              <div className="border border-[#2C2C2C]/10 p-6 bg-[#FAF8F5]/40 rounded space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A3704C]">
                  <span>{tierMenus[tier].title}</span>
                </div>
                
                <ol className="space-y-3">
                  {tierMenus[tier].courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-[#5A5A5A] leading-relaxed">
                      <span className="font-mono text-[#A3704C] font-bold text-[10px] mt-0.5">0{idx + 1}.</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Signature Dishes Grid - Modernist Editorial Grid */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        
        <div className="max-w-xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3704C] font-semibold block">The Selection</span>
          <h2 className="text-4xl font-serif text-[#2C2C2C]">
            Crafted <span className="font-light italic text-[#A3704C]">Signatures</span>
          </h2>
          <p className="text-sm text-[#5A5A5A] font-light">
            We present our four highly demanded masterworks, prepared under precise thermal parameters.
          </p>
        </div>

        {/* Asymmetrical Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          <div className="md:col-span-7 border border-[#2C2C2C]/10 p-8 space-y-4 bg-[#FAF8F5] hover:border-[#A3704C] transition-all">
            <span className="text-[9px] font-mono tracking-widest text-[#A3704C] uppercase font-semibold">Signature Course I</span>
            <h3 className="text-2xl font-serif text-[#2C2C2C]">Deccani Slow-Roasted Lamb</h3>
            <div className="h-[1px] w-12 bg-[#A3704C] my-2" />
            <p className="text-xs text-[#5A5A5A] leading-relaxed font-light">
              Mutton shoulder slow-cooked for 12 hours under constant wood embers. Finished with charcoal-infused smoke, dehydrated coriander seeds, and caramelized local spring shallots.
            </p>
            <div className="text-[10px] text-[#7A7A7A] uppercase tracking-widest pt-4 font-semibold">
              Time: 12hr slow-ember // Palette: Savory Smoked
            </div>
          </div>

          <div className="md:col-span-5 border border-[#2C2C2C]/10 p-8 space-y-4 bg-[#F3EFEA] hover:border-[#A3704C] transition-all">
            <span className="text-[9px] font-mono tracking-widest text-[#A3704C] uppercase font-semibold">Signature Course II</span>
            <h3 className="text-2xl font-serif text-[#2C2C2C]">Truffle Zafrani Pulao</h3>
            <div className="h-[1px] w-12 bg-[#A3704C] my-2" />
            <p className="text-xs text-[#5A5A5A] leading-relaxed font-light">
              Premium long-grain Basmati rice cooked with hand-pressed almond milk, whole green cardamom, pure saffron, and finished with a fine mist of white truffle oil.
            </p>
            <div className="text-[10px] text-[#7A7A7A] uppercase tracking-widest pt-4 font-semibold">
              Fragrance: Saffron-Truffle // Palette: Delicate Warm
            </div>
          </div>

          <div className="md:col-span-5 border border-[#2C2C2C]/10 p-8 space-y-4 bg-[#F3EFEA] hover:border-[#A3704C] transition-all">
            <span className="text-[9px] font-mono tracking-widest text-[#A3704C] uppercase font-semibold">Signature Course III</span>
            <h3 className="text-2xl font-serif text-[#2C2C2C]">Smoked Beetroot Galouti</h3>
            <div className="h-[1px] w-12 bg-[#A3704C] my-2" />
            <p className="text-xs text-[#5A5A5A] leading-relaxed font-light">
              Organic red beetroots simmered and smoked with sandalwood shavings, mashed into ultra-delicate melting patties, served on a crisp disc of saffron khameeri roti.
            </p>
            <div className="text-[10px] text-[#7A7A7A] uppercase tracking-widest pt-4 font-semibold">
              Texture: Melting // Palette: Sweet Smoked Wood
            </div>
          </div>

          <div className="md:col-span-7 border border-[#2C2C2C]/10 p-8 space-y-4 bg-[#FAF8F5] hover:border-[#A3704C] transition-all">
            <span className="text-[9px] font-mono tracking-widest text-[#A3704C] uppercase font-semibold">Signature Course IV</span>
            <h3 className="text-2xl font-serif text-[#2C2C2C]">The Golden Elixir Dessert</h3>
            <div className="h-[1px] w-12 bg-[#A3704C] my-2" />
            <p className="text-xs text-[#5A5A5A] leading-relaxed font-light">
              A contemporary interpretation of Hyderabadi Qubani ka Meetha: apricot reductions combined with a cold white chocolate mousse, almond praline crust, and real 24K gold foil.
            </p>
            <div className="text-[10px] text-[#7A7A7A] uppercase tracking-widest pt-4 font-semibold">
              Sweetness: Gourmet Balanced // Palette: Rich Fruit Custard
            </div>
          </div>

        </div>
      </section>

      {/* Customer Testimonials - Editorial layout */}
      <section className="py-24 md:py-32 bg-[#F3EFEA] border-t border-[#A3704C]/15">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3704C] font-semibold block">Critiques & Feedback</span>
            <h2 className="text-4xl font-serif text-[#2C2C2C]">
              Client <span className="font-light italic text-[#A3704C]">Endorsements</span>
            </h2>
            <p className="text-sm text-[#5A5A5A] font-light">
              Read review comments from prominent hosts and organizations we served in Hyderabad.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                text: "Golden Caterers redefined what wedding food could be. The Truffle Zafrani Pulao and slow-roasted Deccani lamb were outstanding. Every course was delivered as an art piece, completely cleanly.",
                author: "Karthik Chawla",
                loc: "Uppal, Hyderabad"
              },
              {
                text: "The artisanal plated dinner for our executive team was flawless. The sandalwood smoked beetroot kebabs were highly praised. Spacing, presentation, and taste were top tier.",
                author: "Shreya Sen",
                loc: "Gachibowli, Hyderabad"
              },
              {
                text: "Flawless service, immaculate hygiene. Their staff operates with extreme discipline, leaving our kitchen cleaner than they found it! The presentation felt like a luxury hotel.",
                author: "Mohammed Ali",
                loc: "Secunderabad, Hyderabad"
              }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="border-l border-[#A3704C] pl-6 md:pl-10 py-2 max-w-4xl space-y-3"
              >
                <blockquote className="text-base md:text-lg text-[#2C2C2C] font-serif font-light leading-relaxed">
                  "{test.text}"
                </blockquote>
                <cite className="text-xs uppercase tracking-widest text-[#7A7A7A] block font-semibold not-italic">
                  &mdash; {test.author}, {test.loc}
                </cite>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="book" className="py-24 md:py-32 max-w-4xl mx-auto px-6">
        <div className="border border-[#A3704C]/35 p-8 md:p-16 bg-[#FAF8F5] space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3704C] block font-semibold">Tasting Request</span>
            <h2 className="text-3xl font-serif text-[#2C2C2C]">
              Request an <span className="font-light italic text-[#A3704C]">Artisanal Proposal</span>
            </h2>
            <p className="text-xs text-[#7A7A7A] max-w-lg leading-relaxed">
              Kindly outline your event parameters. Our lead food designer will review your requests and contact you to arrange a private tasting session in Uppal.
            </p>
          </div>

          {submitSuccess ? (
            <div className="border border-green-600/30 p-6 text-center space-y-4 bg-[#FAF8F5]">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-[#2C2C2C]">Proposal Slot Reserved</h3>
              <p className="text-xs text-[#5A5A5A] max-w-sm mx-auto">
                Your request has been filed under ID {Math.floor(Math.random()*100000)}. Our concierge team will reach out to you within one business day.
              </p>
              <button 
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="mt-2 text-xs text-[#A3704C] underline hover:text-[#8F5F3E] uppercase tracking-widest font-bold"
              >
                File another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="gold-name" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                    Your Full Name
                  </label>
                  <input
                    id="gold-name"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Karthik Chawla"
                    className={`w-full px-3 py-2.5 border-b bg-[#FAF8F5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#A3704C] transition-colors ${
                      formErrors.name ? 'border-red-500' : 'border-[#2C2C2C]/20'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.name}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="gold-email" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                    Email Address
                  </label>
                  <input
                    id="gold-email"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={`w-full px-3 py-2.5 border-b bg-[#FAF8F5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#A3704C] transition-colors ${
                      formErrors.email ? 'border-red-500' : 'border-[#2C2C2C]/20'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.email}</span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Contact Phone */}
                <div className="space-y-2">
                  <label htmlFor="gold-phone" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                    Phone Number
                  </label>
                  <input
                    id="gold-phone"
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile"
                    className={`w-full px-3 py-2.5 border-b bg-[#FAF8F5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#A3704C] transition-colors ${
                      formErrors.phone ? 'border-red-500' : 'border-[#2C2C2C]/20'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.phone}</span>
                  )}
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label htmlFor="gold-date" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                    Date of Event
                  </label>
                  <input
                    id="gold-date"
                    type="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 border-b bg-[#FAF8F5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#A3704C] transition-colors ${
                      formErrors.date ? 'border-red-500' : 'border-[#2C2C2C]/20'
                    }`}
                  />
                  {formErrors.date && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.date}</span>
                  )}
                </div>

                {/* Guest Scale */}
                <div className="space-y-2">
                  <label htmlFor="gold-guests" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                    Approx. Guest Count
                  </label>
                  <input
                    id="gold-guests"
                    type="number"
                    name="guests"
                    value={formValues.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border-b border-[#2C2C2C]/20 bg-[#FAF8F5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#A3704C]"
                    min="20"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="gold-message" className="text-[10px] uppercase tracking-widest font-semibold text-[#2C2C2C] block">
                  Describe Your Culinary Theme
                </label>
                <textarea
                  id="gold-message"
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Outline any special course alignment, live station needs, or dietary restrictions..."
                  className="w-full px-3 py-2 border border-[#2C2C2C]/15 rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:border-[#A3704C]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-[#A3704C] bg-[#A3704C] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-transparent hover:text-[#A3704C] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-3 w-3 border-b-2 border-[#FAF8F5]" />
                    Sending Tasting Proposal...
                  </span>
                ) : (
                  "Request Artisanal Proposal"
                )}
              </button>

            </form>
          )}

        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="border-t border-[#A3704C]/25 bg-[#FAF8F5] py-20 text-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-5 space-y-6">
            <span className="text-xl font-serif text-[#A3704C] tracking-[0.2em] font-semibold block">
              GOLDEN CATERERS
            </span>
            <p className="text-xs text-[#5A5A5A] font-light leading-relaxed max-w-sm">
              Artisanal course dining and premium organic catering services. Operating high-fidelity laboratory-clean cloud kitchen operations in Hyderabad, India.
            </p>
            <div className="text-[10px] text-[#7A7A7A] font-mono tracking-widest uppercase">
              ESTD. 2011 // IDA UPPAL HQ
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-[#A3704C]">The Atelier Address</h4>
            <div className="flex items-start gap-2.5 text-xs text-[#5A5A5A]">
              <MapPin className="w-4.5 h-4.5 text-[#A3704C] shrink-0 mt-0.5 stroke-[1.5]" />
              <address className="not-italic leading-relaxed">
                Sector 2, IDA Uppal,<br />
                Near Metro Station, Uppal,<br />
                Hyderabad - 500039, India
              </address>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-[#A3704C]">Communications</h4>
            <div className="space-y-3 text-xs text-[#5A5A5A]">
              <a href="tel:+919000155667" className="flex items-center gap-2.5 hover:text-[#A3704C] transition-colors">
                <Phone className="w-4 h-4 text-[#A3704C]" />
                <span>+91 90001 55667</span>
              </a>
              <a href="mailto:curate@goldencaterers.co" className="flex items-center gap-2.5 hover:text-[#A3704C] transition-colors">
                <Mail className="w-4 h-4 text-[#A3704C]" />
                <span>curate@goldencaterers.co</span>
              </a>
              <div className="flex items-center gap-2.5 text-[9px] text-[#7A7A7A] uppercase tracking-widest font-mono pt-2">
                <Clock className="w-3.5 h-3.5 text-[#A3704C]" />
                <span>Every Day: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#A3704C]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-[#7A7A7A] uppercase tracking-widest font-mono">
          <span>&copy; {new Date().getFullYear()} Golden Caterers. All Rights Reserved.</span>
          <div className="flex gap-6">
            <span>Organic Kitchens</span>
            <span>Artisanal Plating</span>
            <span>Uppal, HYD</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

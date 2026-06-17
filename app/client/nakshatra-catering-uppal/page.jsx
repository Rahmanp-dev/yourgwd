"use client";

import React, { useState, useMemo } from 'react';
import { 
  Star, Shield, ChefHat, Users, Utensils, Phone, Mail, 
  MapPin, Calendar, Clock, ArrowRight, Check, Sparkles, 
  Info, Award, CheckCircle2, ChevronRight, X
} from 'lucide-react';

export default function NakshatraCateringPage() {
  // Calculator State
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(150);
  const [tier, setTier] = useState('premium');
  const [addons, setAddons] = useState({
    rotiStation: false,
    tableDecor: false,
    nizamiDesserts: false
  });

  // Contact Form State
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '150',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Constants for Calculator
  const eventMultipliers = {
    wedding: 1.2,
    corporate: 1.0,
    birthday: 0.9
  };

  const tierPrices = {
    standard: 650,
    premium: 1200,
    royal: 2200
  };

  const addonPrices = {
    rotiStation: 50,
    tableDecor: 100,
    nizamiDesserts: 80
  };

  const tierMenus = {
    standard: {
      title: "Nakshatra Standard Feast",
      items: [
        "Welcome Drink: Mint Jaljeera / Fresh Nimbu Paani",
        "Appetizers: Veg Spring Rolls, Hara Bhara Kebab",
        "Mains: Paneer Butter Masala, Veg Diwani Handi, Dal Tadka",
        "Rice: Jeera Rice, Steamed Basmati Rice",
        "Breads: Butter Naan, Tandoori Roti",
        "Dessert: Double Ka Meetha / Gulab Jamun",
        "Accompaniments: Raita, Salad, Papad, Pickle"
      ]
    },
    premium: {
      title: "Nakshatra Celestial Gourmet",
      items: [
        "Welcome Drink: Saffron Almond Milk / Virgin Mojito",
        "Appetizers: Nizami Murgh Tikka, Paneer Achari Tikka, Fish Amritsari",
        "Mains: Nakshatra Special Mutton Biryani, Butter Chicken, Kadai Paneer, Dal Makhani",
        "Rice: Zafrani Pulao, Steamed Rice",
        "Breads: Assorted Kulchas, Laccha Paratha, Rumali Roti",
        "Dessert: Qubani Ka Meetha with Ice Cream, Shahi Tukda",
        "Accompaniments: Burhani Raita, Green Salad, Mirchi Ka Salan"
      ]
    },
    royal: {
      title: "Nakshatra Royal Imperial",
      items: [
        "Welcome Drink: Royal Rose Sherbet, Pistachio Almond Shake, Fresh Fruit Mocktails",
        "Appetizers: Gosht Seekh Kebab, Patthar Ka Gosht, Zafrani Paneer Kebab, Lotus Stem Crispy",
        "Mains: Royal Mutton Dum Biryani, Hyderabad Dum Ka Murgh, Gongura Prawn Curry, Paneer Pasanda, Dal Sultani",
        "Rice: Shahjahani Pulao, Curd Rice Station",
        "Breads: Bakarkhani, Sheermal, Stuffed Naan, Rumali Roti",
        "Live Station: Galouti Kebab Station, Live Roomali Roti Counter",
        "Desserts: Apricot Delight with Gold Foil, Kheer Khas, Baked Kaddu Halwa",
        "Digesting: Organic Meetha Paan Counter, Premium Mukhwas Board"
      ]
    }
  };

  // Math for Estimation
  const pricingSummary = useMemo(() => {
    const basePlatePrice = tierPrices[tier];
    const multiplier = eventMultipliers[eventType];
    const platePriceAdjusted = Math.round(basePlatePrice * multiplier);
    
    let addonPlateCost = 0;
    if (addons.rotiStation) addonPlateCost += addonPrices.rotiStation;
    if (addons.tableDecor) addonPlateCost += addonPrices.tableDecor;
    if (addons.nizamiDesserts) addonPlateCost += addonPrices.nizamiDesserts;

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
          guests: '150',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2C2C] font-sans selection:bg-[#A3704C] selection:text-[#FAF8F5] antialiased">
      
      {/* Decorative Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-[#FAF8F5] via-[#A3704C] to-[#FAF8F5]" />

      {/* Hero Header */}
      <header className="relative overflow-hidden pt-12 pb-20 md:py-32 border-b border-[#A3704C]/10 bg-[radial-gradient(circle_at_top_right,_#F5EFEB_0%,_transparent_60%)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A3704C]/25 bg-[#FAF8F5] text-xs font-semibold tracking-wider text-[#A3704C] uppercase animate-pulse">
              <Star className="w-3.5 h-3.5 fill-[#A3704C]" />
              Stellar Gastronomy in Hyderabad
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-[#2C2C2C] leading-[1.1]">
              Celestial Flavors,<br />
              <span className="font-normal italic text-[#A3704C]">Curated For Grand Celebrations</span>
            </h1>
            
            <p className="text-base md:text-lg text-[#5A5A5A] font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nakshatra Catering crafts exquisite culinary moments in Uppal, Hyderabad. Where heritage royal Nizami recipes merge seamlessly with modern fine-dining aesthetics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#estimator" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded bg-[#A3704C] text-[#FAF8F5] text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-[#8F5F3E] active:scale-95 shadow-md shadow-[#A3704C]/10"
              >
                Estimate Event Cost
              </a>
              <a 
                href="#story" 
                className="inline-flex items-center justify-center px-6 py-3 border border-[#A3704C]/30 rounded bg-transparent text-[#2C2C2C] text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-[#A3704C]/5 active:scale-95"
              >
                Our Heritage
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0 border-t border-[#A3704C]/15">
              <div>
                <p className="text-2xl font-serif font-light text-[#A3704C]">25+</p>
                <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Years Legacy</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-light text-[#A3704C]">10K+</p>
                <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Events Served</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-light text-[#A3704C]">5-Star</p>
                <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Hygiene Certified</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Food Pictures Layout - Symmetrical Contemporary Minimalist */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer bronze thin ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#A3704C]/30 animate-[spin_100s_linear_infinite]" />
              
              {/* Inner bronze ring */}
              <div className="absolute inset-6 rounded-full border border-[#A3704C]/15" />
              
              {/* Centered Image Circle */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-[#A3704C] bg-[#FAF8F5] flex flex-col items-center justify-center p-8 text-center shadow-xl">
                <Utensils className="w-12 h-12 text-[#A3704C] mb-3 stroke-[1]" />
                <span className="text-xs uppercase tracking-widest text-[#7A7A7A] block">Signature dish</span>
                <span className="text-lg font-serif italic text-[#2C2C2C] mt-1 font-medium leading-tight">Shahi Nizami Mutton Biryani</span>
                <div className="w-8 h-[1px] bg-[#A3704C] my-3" />
                <span className="text-[10px] text-[#A3704C] font-mono tracking-widest uppercase">Pure Saffron & Spice</span>
              </div>

              {/* Orbiting item 1 */}
              <div className="absolute -top-3 left-12 w-20 h-20 rounded-full bg-[#FAF8F5] border border-[#A3704C]/25 shadow-md flex flex-col items-center justify-center p-2 text-center">
                <Sparkles className="w-4 h-4 text-[#A3704C] mb-1" />
                <span className="text-[8px] font-mono tracking-widest uppercase font-semibold text-[#2C2C2C]">Appetizers</span>
              </div>

              {/* Orbiting item 2 */}
              <div className="absolute bottom-6 -right-2 w-24 h-24 rounded-full bg-[#FAF8F5] border border-[#A3704C]/25 shadow-md flex flex-col items-center justify-center p-2 text-center">
                <Award className="w-5 h-5 text-[#A3704C] mb-1" />
                <span className="text-[8px] font-mono tracking-widest uppercase font-semibold text-[#2C2C2C]">Gourmet Desserts</span>
              </div>

              {/* Orbiting item 3 */}
              <div className="absolute bottom-4 left-2 w-22 h-22 rounded-full bg-[#FAF8F5] border border-[#A3704C]/25 shadow-md flex flex-col items-center justify-center p-2 text-center">
                <Shield className="w-5 h-5 text-[#A3704C] mb-1" />
                <span className="text-[8px] font-mono tracking-widest uppercase font-semibold text-[#2C2C2C]">100% Hygiene</span>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* Brand Story / Heritage Section */}
      <section id="story" className="py-20 md:py-28 bg-[#FAF8F5] max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative space-y-6">
            <div className="p-8 border border-[#A3704C]/20 rounded-lg bg-[#F5EFEB] space-y-6">
              <ChefHat className="w-12 h-12 text-[#A3704C] stroke-[1]" />
              <h3 className="text-2xl font-serif text-[#2C2C2C]">An Astral Pursuit of Flavor</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">
                Founded in Uppal, Hyderabad, Nakshatra Catering began with a singular promise: to bring the stellar heritage of authentic Nizami royal courts directly to modern celebrations. 
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#A3704C]" />
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2C]">Slow-cooked hand-pounded spices</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#A3704C]" />
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2C]">ISO 22000 hygiene rated operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#A3704C]" />
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2C]">Expert Telugu & Mughlai Culinary Chefs</span>
                </div>
              </div>
            </div>
            
            {/* Elegant floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-[#A3704C] text-[#FAF8F5] px-4 py-3 rounded shadow-lg text-xs uppercase tracking-widest font-semibold">
              Uppal Kitchen HQ
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3704C] block font-semibold">The Cooking Legacy</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2C2C2C]">
              We craft each recipe with the <span className="font-normal italic text-[#A3704C]">utmost reverence</span> for Hyderabadi tradition.
            </h2>
            <div className="w-12 h-[1px] bg-[#A3704C]" />
            <p className="text-[#5A5A5A] font-light leading-relaxed">
              Hyderabad is a city that breathes culinary art. At Nakshatra Catering, our master chefs operate from our state-of-the-art cloud kitchen in IDA Uppal. Every batch of biryani is slow-cooked over firewood (Dum style), using premium long-grain Basmati rice, genuine Kashmir saffron, and hand-selected local mutton.
            </p>
            <p className="text-[#5A5A5A] font-light leading-relaxed">
              Beyond taste, we believe in spotless operations. Our staff undergoes daily temperature screening, wear double-masks, and work in medical-grade sanitized stainless-steel preparation zones. We guarantee that your event dining will be completely safe, incredibly flavorful, and remembered for years.
            </p>
          </div>

        </div>
      </section>

      {/* Interactive Menu Customizer/Estimator */}
      <section id="estimator" className="py-20 md:py-28 bg-[#FAF8F5] border-y border-[#A3704C]/10 bg-[radial-gradient(circle_at_bottom_left,_#F5EFEB_0%,_transparent_55%)]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3704C] block font-semibold">Instant Quote Generator</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2C2C2C]">
              Celestial <span className="font-normal italic text-[#A3704C]">Menu Curator</span>
            </h2>
            <p className="text-sm text-[#5A5A5A] font-light">
              Customize your menu tier, event scale, and add-on requirements to receive a real-time price estimation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Interactive Inputs */}
            <div className="lg:col-span-7 space-y-8 bg-[#FAF8F5] p-8 border border-[#A3704C]/15 rounded-lg shadow-sm">
              
              {/* Event Type */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                  1. Select Event Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'wedding', label: 'Wedding', desc: 'Premium Royal Focus' },
                    { key: 'corporate', label: 'Corporate', desc: 'Elite Business Buffet' },
                    { key: 'birthday', label: 'Birthday', desc: 'Intimate Gathering' }
                  ].map((evt) => (
                    <button
                      key={evt.key}
                      type="button"
                      onClick={() => setEventType(evt.key)}
                      className={`text-left p-3 border rounded transition-all duration-200 active:scale-95 ${
                        eventType === evt.key 
                          ? 'border-[#A3704C] bg-[#FAF8F5] ring-1 ring-[#A3704C]/30' 
                          : 'border-[#2C2C2C]/10 bg-transparent hover:border-[#A3704C]/50'
                      }`}
                    >
                      <span className={`block text-sm font-medium ${eventType === evt.key ? 'text-[#A3704C]' : 'text-[#2C2C2C]'}`}>
                        {evt.label}
                      </span>
                      <span className="block text-[9px] text-[#7A7A7A] mt-0.5">{evt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="guests-range" className="text-xs uppercase tracking-wider font-semibold text-[#2C2C2C]">
                    2. Approximate Guests: <span className="text-[#A3704C] font-serif text-sm">{guests}</span>
                  </label>
                  <input 
                    type="number" 
                    value={guests} 
                    onChange={(e) => setGuests(Math.max(50, Math.min(1000, Number(e.target.value) || 50)))}
                    className="w-20 px-2 py-1 text-center text-sm border border-[#2C2C2C]/15 rounded bg-[#FAF8F5] focus:outline-none focus:border-[#A3704C]"
                    min="50"
                    max="1000"
                  />
                </div>
                <input
                  id="guests-range"
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full h-1 bg-[#2C2C2C]/10 rounded-lg appearance-none cursor-pointer accent-[#A3704C]"
                />
                <span className="text-[10px] text-[#7A7A7A] block">Min: 50 | Max: 1000 guests</span>
              </div>

              {/* Menu Tiers */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                  3. Select Menu Tier
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { key: 'standard', label: 'Standard Feast', price: '₹650', desc: 'Delicious essential spread' },
                    { key: 'premium', label: 'Premium Gourmet', price: '₹1,200', desc: 'Lavish traditional & global' },
                    { key: 'royal', label: 'Royal Imperial', price: '₹2,200', desc: 'Exquisite slow-cooked luxury' }
                  ].map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setTier(t.key)}
                      className={`text-left p-3 border rounded transition-all duration-200 active:scale-95 ${
                        tier === t.key 
                          ? 'border-[#A3704C] bg-[#FAF8F5] ring-1 ring-[#A3704C]/30' 
                          : 'border-[#2C2C2C]/10 bg-transparent hover:border-[#A3704C]/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-sm font-semibold ${tier === t.key ? 'text-[#A3704C]' : 'text-[#2C2C2C]'}`}>
                          {t.label}
                        </span>
                        <span className="text-xs font-mono text-[#A3704C] font-semibold">{t.price}/p</span>
                      </div>
                      <span className="block text-[9px] text-[#7A7A7A] mt-1">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Signature Add-Ons */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                  4. Optional Signature Enhancements
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'rotiStation', label: 'Live Fire-Roti Counter', price: '₹50 / plate', desc: 'Fresh tandoori breads baked live on-site.' },
                    { key: 'tableDecor', label: 'Artisanal Bronze Table Setups', price: '₹100 / plate', desc: 'Premium linen, bronze-rimmed plates, custom styling.' },
                    { key: 'nizamiDesserts', label: 'Mughlai Sweet Indulgence', price: '₹80 / plate', desc: 'Baked Kaddu Halwa & Apricot Delights topped with pure silver/gold leaf.' }
                  ].map((addon) => (
                    <label 
                      key={addon.key} 
                      className={`flex items-center justify-between p-3 border rounded cursor-pointer transition-all ${
                        addons[addon.key] 
                          ? 'border-[#A3704C] bg-[#A3704C]/5' 
                          : 'border-[#2C2C2C]/10 hover:border-[#A3704C]/25'
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
                          <span className="text-sm font-medium text-[#2C2C2C]">{addon.label}</span>
                          <span className="block text-[10px] text-[#7A7A7A]">{addon.desc}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#A3704C] whitespace-nowrap ml-4">+{addon.price}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimation Summary & Menu Preview */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Cost Estimator Box */}
              <div className="bg-[#FAF8F5] border border-[#A3704C] rounded-lg p-6 space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#A3704C]/5 rounded-bl-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#A3704C] absolute top-3 right-3" />
                </div>
                
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#7A7A7A]">Estimated Investment</h3>
                
                <div className="space-y-1">
                  <span className="text-sm text-[#5A5A5A] block">Estimated Rate Per Plate:</span>
                  <span className="text-3xl md:text-4xl font-serif text-[#A3704C] font-light">
                    ₹{pricingSummary.perPlate.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7A7A7A]">/ Guest</span>
                  </span>
                </div>

                <div className="border-t border-[#A3704C]/20 pt-4 space-y-2 text-sm text-[#2C2C2C]">
                  <div className="flex justify-between">
                    <span className="text-[#5A5A5A]">Subtotal ({guests} guests):</span>
                    <span className="font-semibold">₹{pricingSummary.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5A5A5A]">Estimated Taxes & Service Fees (5%):</span>
                    <span className="font-semibold">₹{pricingSummary.tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t border-dashed border-[#A3704C]/20 pt-2 flex justify-between text-base font-semibold">
                    <span className="text-[#A3704C] font-serif italic font-normal">Grand Total Estimate:</span>
                    <span className="text-[#A3704C] font-mono">₹{pricingSummary.grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <p className="text-[10px] text-[#7A7A7A] italic leading-tight">
                  *This is a ballpark calculation. Final pricing is subject to custom item choices, logistical setups in Uppal, and catering helper requirements.
                </p>

                <a 
                  href="#contact" 
                  className="w-full text-center block px-6 py-3 border border-transparent rounded bg-[#A3704C] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[#8F5F3E]"
                >
                  Book Consultation
                </a>
              </div>

              {/* Dynamic Menu Preview Box */}
              <div className="border border-[#2C2C2C]/10 rounded-lg p-6 bg-[#FAF8F5]/50 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A3704C] uppercase">
                  <Utensils className="w-4 h-4" />
                  {tierMenus[tier].title} Included Items
                </div>
                
                <ul className="space-y-2.5">
                  {tierMenus[tier].items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5A5A5A] leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A3704C] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3704C] block font-semibold">Our Culinary Artworks</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2C2C2C]">
            Signature <span className="font-normal italic text-[#A3704C]">Royal Platters</span>
          </h2>
          <p className="text-sm text-[#5A5A5A] font-light">
            Indulge your guests with these premium culinary creations, crafted with local Hyderabadi elements and gourmet finesse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Royal Nizami Dum Biryani",
              desc: "Traditional slow-cooked lamb marinated in high-altitude yogurt, fresh mint, and hand-ground spices, cooked layered with fine saffron basmati rice.",
              spice: "Medium Spice",
              badge: "Crowd Favorite"
            },
            {
              title: "Golden Apricot Delight",
              desc: "Slow-stewed dried apricots from Turkey (Qubani ka Meetha), served on a bed of heavy vanilla custard cream, layered with toasted almond slivers and real gold leaf.",
              spice: "Traditional Sweet",
              badge: "Royal Sweet"
            },
            {
              title: "Stellar Paneer Tikka Anardari",
              desc: "Cubes of house-made fresh cottage cheese, marinated in spiced pomegranate reduction and hung curd, skewered over organic clay charcoal tandoor.",
              spice: "Subtle Tangy",
              badge: "Vegetarian Premium"
            },
            {
              title: "Coastal Prawn Iguru",
              desc: "Juicy wild-caught prawns simmered in an aromatic reduction of freshly extracted coconut cream, green chilies, and flash-fried local curry leaves.",
              spice: "High Spice",
              badge: "Coastal Taste"
            }
          ].map((dish, idx) => (
            <div 
              key={idx} 
              className="group p-6 border border-[#2C2C2C]/10 rounded bg-[#FAF8F5] space-y-4 transition-all duration-300 hover:border-[#A3704C] hover:shadow-md relative"
            >
              <span className="text-[9px] font-mono tracking-widest text-[#A3704C] uppercase font-semibold block">{dish.badge}</span>
              <h3 className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#A3704C] transition-colors">{dish.title}</h3>
              <p className="text-xs text-[#5A5A5A] leading-relaxed font-light">{dish.desc}</p>
              
              <div className="pt-2 flex items-center justify-between border-t border-[#2C2C2C]/5 text-[10px] text-[#7A7A7A]">
                <span className="uppercase tracking-widest">{dish.spice}</span>
                <span className="font-mono text-[#A3704C]">★ Exclusive</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#A3704C]/10 bg-[radial-gradient(circle_at_right,_#F5EFEB_0%,_transparent_50%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3704C] block font-semibold">Verified Experiences</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2C2C2C]">
              What Our <span className="font-normal italic text-[#A3704C]">Patrons Say</span>
            </h2>
            <p className="text-sm text-[#5A5A5A] font-light">
              We take immense pride in being the preferred caterer for landmark celebrations across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "We hired Nakshatra Catering for my daughter's wedding in Uppal. The Nizami Biryani was the talk of the night! Absolutely stellar hygiene and impeccable service. The setup looked gorgeous and completely clean.",
                author: "Ananya Reddy",
                role: "Mother of the Bride",
                loc: "Uppal, Hyderabad"
              },
              {
                quote: "Outstanding corporate luncheon service. Everything was punctual, clean, and the setups looked like modern art. The standard of presentation with their bronze cutlery was beautiful.",
                author: "Vikram Dev",
                role: "HR Director, Tech Labs",
                loc: "Gachibowli, Hyderabad"
              },
              {
                quote: "The custom dessert station was a major showstopper at our anniversary. Highly recommend their Royal tier for any milestone celebration. The Gold Foil Apricot Delight is must try!",
                author: "Dr. Srinivas Rao",
                role: "Consultant Cardiologist",
                loc: "Secunderabad, Hyderabad"
              }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="p-8 border border-[#A3704C]/20 rounded bg-[#FAF8F5] space-y-6 flex flex-col justify-between shadow-sm relative"
              >
                {/* Visual quote indicator */}
                <div className="text-4xl text-[#A3704C]/20 font-serif absolute top-3 left-4 select-none">“</div>
                
                <p className="text-sm text-[#5A5A5A] italic leading-relaxed font-light relative z-10">
                  {test.quote}
                </p>

                <div className="pt-6 border-t border-[#A3704C]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A3704C]/10 border border-[#A3704C]/30 flex items-center justify-center font-serif text-[#A3704C] font-semibold text-sm">
                    {test.author[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C2C2C]">{test.author}</h4>
                    <p className="text-[10px] text-[#7A7A7A] uppercase tracking-wider">{test.role} • {test.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="contact" className="py-20 md:py-28 max-w-3xl mx-auto px-6">
        <div className="border border-[#A3704C]/30 rounded-lg p-8 md:p-12 bg-[#FAF8F5] shadow-lg space-y-8 relative overflow-hidden">
          
          {/* Subtle gold decoration in background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-[#A3704C]/10 to-transparent pointer-events-none" />
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3704C] block font-semibold">Initiate a Conversation</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C]">
              Book Your <span className="font-normal italic text-[#A3704C]">Culinary Consultation</span>
            </h2>
            <p className="text-xs text-[#7A7A7A] max-w-md mx-auto">
              Fill in your details below and our gourmet planning coordinator will get in touch with you within 24 hours.
            </p>
          </div>

          {submitSuccess ? (
            <div className="bg-[#FAF8F5] border border-green-600/30 rounded p-6 text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif text-[#2C2C2C]">Inquiry Received Successfully!</h3>
              <p className="text-xs text-[#5A5A5A] max-w-sm mx-auto">
                Thank you for reaching out to Nakshatra Catering. Our event supervisor will call you shortly on the provided phone number.
              </p>
              <button 
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="mt-2 text-xs text-[#A3704C] underline hover:text-[#8F5F3E] uppercase tracking-wider font-semibold"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-[10px] uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Srinivas Reddy"
                    className={`w-full px-3 py-2 border rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:ring-1 focus:ring-[#A3704C]/50 ${
                      formErrors.name ? 'border-red-500' : 'border-[#2C2C2C]/15 focus:border-[#A3704C]'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.name}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-[10px] uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="name@gmail.com"
                    className={`w-full px-3 py-2 border rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:ring-1 focus:ring-[#A3704C]/50 ${
                      formErrors.email ? 'border-red-500' : 'border-[#2C2C2C]/15 focus:border-[#A3704C]'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.email}</span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Contact Phone */}
                <div className="space-y-1">
                  <label htmlFor="phone-input" className="text-[10px] uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                    Contact Phone
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit number"
                    className={`w-full px-3 py-2 border rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:ring-1 focus:ring-[#A3704C]/50 ${
                      formErrors.phone ? 'border-red-500' : 'border-[#2C2C2C]/15 focus:border-[#A3704C]'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.phone}</span>
                  )}
                </div>

                {/* Event Date */}
                <div className="space-y-1">
                  <label htmlFor="date-input" className="text-[10px] uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                    Event Date
                  </label>
                  <input
                    id="date-input"
                    type="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:ring-1 focus:ring-[#A3704C]/50 ${
                      formErrors.date ? 'border-red-500' : 'border-[#2C2C2C]/15 focus:border-[#A3704C]'
                    }`}
                  />
                  {formErrors.date && (
                    <span className="text-[10px] text-red-500 block mt-0.5">{formErrors.date}</span>
                  )}
                </div>

                {/* Guest Count */}
                <div className="space-y-1">
                  <label htmlFor="guests-input" className="text-[10px] uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                    Guests count
                  </label>
                  <input
                    id="guests-input"
                    type="number"
                    name="guests"
                    value={formValues.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#2C2C2C]/15 rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:border-[#A3704C]"
                    min="50"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message-input" className="text-[10px] uppercase tracking-wider font-semibold text-[#2C2C2C] block">
                  Catering Request Details
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about the event layout, custom taste preference, or live stall requests..."
                  className="w-full px-3 py-2 border border-[#2C2C2C]/15 rounded text-sm bg-[#FAF8F5] text-[#2C2C2C] focus:outline-none focus:border-[#A3704C] focus:ring-1 focus:ring-[#A3704C]/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded bg-[#A3704C] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[#8F5F3E] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-3 w-3 border-b-2 border-[#FAF8F5]" />
                    Locking Inquiry...
                  </span>
                ) : (
                  "Submit Catering Request"
                )}
              </button>

            </form>
          )}

        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="border-t border-[#A3704C]/25 bg-[#FAF8F5] py-16 text-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-serif text-[#A3704C] font-semibold tracking-wide">
              NAKSHATRA CATERING
            </span>
            <p className="text-xs text-[#5A5A5A] font-light leading-relaxed max-w-sm">
              Premium astronomical catering services tailored to absolute perfection. Operating high-end hygienically certified kitchens in Hyderabad, India.
            </p>
            <div className="text-[10px] text-[#7A7A7A] font-mono tracking-widest uppercase">
              ESTD. 2001 • Uppal Cloud Kitchen HQ
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#A3704C]">Our Location</h4>
            <div className="flex items-start gap-2.5 text-xs text-[#5A5A5A]">
              <MapPin className="w-4 h-4 text-[#A3704C] shrink-0 mt-0.5 stroke-[1.5]" />
              <address className="not-italic leading-relaxed">
                Plot 42, Survey No. 118, Inner Ring Road,<br />
                IDA Uppal, Uppal, Hyderabad - 500039,<br />
                Telangana, India
              </address>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#A3704C]">Contact Details</h4>
            <div className="space-y-2.5 text-xs text-[#5A5A5A]">
              <a href="tel:+919848022334" className="flex items-center gap-2.5 hover:text-[#A3704C] transition-colors">
                <Phone className="w-4 h-4 text-[#A3704C] stroke-[1.5]" />
                <span>+91 98480 22334</span>
              </a>
              <a href="mailto:celebrations@nakshatracatering.in" className="flex items-center gap-2.5 hover:text-[#A3704C] transition-colors">
                <Mail className="w-4 h-4 text-[#A3704C] stroke-[1.5]" />
                <span>celebrations@nakshatracatering.in</span>
              </a>
              <div className="flex items-center gap-2.5 text-[10px] text-[#7A7A7A] uppercase tracking-wider font-mono mt-2">
                <Clock className="w-3.5 h-3.5 text-[#A3704C] stroke-[1.5]" />
                <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#A3704C]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#7A7A7A] uppercase tracking-wider font-mono">
          <span>&copy; {new Date().getFullYear()} Nakshatra Catering. All Rights Reserved.</span>
          <div className="flex gap-6">
            <span>Cleanliness First</span>
            <span>Taste Uncompromised</span>
            <span>Uppal, HYD</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

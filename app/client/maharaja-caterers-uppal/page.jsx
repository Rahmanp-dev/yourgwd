"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Mail, 
  MapPin, 
  Phone, 
  Star, 
  Send, 
  Check, 
  Loader2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  UtensilsCrossed, 
  Clock, 
  Award,
  ChevronRight,
  Info
} from 'lucide-react';

export default function MaharajaCaterersPage() {
  // Customizer State
  const [eventType, setEventType] = useState('Wedding Banquet');
  const [guestCount, setGuestCount] = useState(250);
  const [menuTier, setMenuTier] = useState('Gold Durbar');
  const [addOns, setAddOns] = useState({
    liveHaleem: true,
    royalDesserts: false,
    mocktailLounge: true,
    chaiPaan: false
  });

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    comments: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Menu Configurations
  const menuTiers = {
    'Silver Maharaja': {
      price: 1100,
      description: 'A stately feast featuring timeless Hyderabadi culinary classics, crafted for elegant gatherings.',
      starters: ['Mutton Luqmi (Traditional)', 'Paneer Tikka Lazeez', 'Veg Spring Roll'],
      mains: ['Sufiyani Chicken Biryani', 'Mirchi ka Salan', 'Dahi ki Chutney', 'Bagara Baingan'],
      desserts: ['Double ka Meetha (Pure Ghee)', 'Fruit Rabdi Salad']
    },
    'Gold Durbar': {
      price: 1650,
      description: 'An elevated royal spread showcasing premium slow-cooked meats, rich gravies, and artisan breads.',
      starters: ['Shahi Shikampur Kebab', 'Chicken Hariyali Tikka', 'Tandoori Gobi Pataka', 'Subz Seekh Kebab'],
      mains: ['Zafrani Mutton Dum Biryani', 'Murg Khatta Pyaaz', 'Dum ka Paneer', 'Roomali Roti & Butter Naan', 'Mirchi ka Salan & Raita'],
      desserts: ['Qubani ka Meetha with Rich Rabdi', 'Kaddu ki Kheer']
    },
    'Royal Platinum': {
      price: 2450,
      description: 'The ultimate royal banquet dining experience. Features rare heritage recipes, rare spices, and butler-served delicacies.',
      starters: ['Patthar ka Gosht (Granite Grilled)', 'Tandoori Jhinga (Prawns)', 'Galouti Kebab with Mini Sheermal', 'Paneer Sufiyani Tikka'],
      mains: ['Maharaja Special Zafrani Lamb Biryani', 'Nalli Nihari with Khameeri Roti', 'Shahi Paneer Lazeez', 'Dal Bukhara (Slow cooked overnight)', 'Assorted Gourmet Rotis'],
      desserts: ['Shahi Zafrani Kheer', 'Badam Halwa (Warm)', 'Basra Khubani Tart with Saffron Ice Cream']
    }
  };

  const addOnDetails = {
    liveHaleem: { name: 'Live Mutton Haleem Stall', price: 150, desc: 'Slow-churned wheat & meat stew with ghee, served hot with lime and fried onions.' },
    royalDesserts: { name: 'Artisanal Ice Cream & Rabdi Counter', price: 100, desc: 'Live stone ice cream parlor paired with traditional sweet reductions.' },
    mocktailLounge: { name: 'Premium Mocktail & Sherbet Bar', price: 80, desc: 'Fascinating dry-ice infused mocktails including Shahi Rose Sherbet and Mint Mojitos.' },
    chaiPaan: { name: 'Deccani Irani Chai & Meetha Paan Stall', price: 40, desc: 'Hot wood-fired Irani chai paired with authentic Banarasi & Calcutta sweet paan.' }
  };

  // Calculations
  const basePricePerPlate = menuTiers[menuTier].price;
  const addOnPricePerPlate = Object.keys(addOns)
    .filter(key => addOns[key])
    .reduce((sum, key) => sum + addOnDetails[key].price, 0);
  
  const pricePerPlate = basePricePerPlate + addOnPricePerPlate;
  const rawTotal = pricePerPlate * guestCount;

  // Tiered discount based on guest volume
  let discountPercent = 0;
  if (guestCount >= 1000) discountPercent = 10;
  else if (guestCount >= 500) discountPercent = 5;

  const discountAmount = Math.round(rawTotal * (discountPercent / 100));
  const subtotal = rawTotal - discountAmount;
  const gstAmount = Math.round(subtotal * 0.05); // 5% GST on catering services
  const finalTotal = subtotal + gstAmount;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Event date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = 'Event date cannot be in the past';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setConfirmationCode(`MAH-2026-${randomId}`);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        comments: ''
      });
    }, 1500);
  };

  const prefillFromCustomizer = () => {
    const summaryText = `Inquiry for ${eventType} on ${menuTier} tier for ${guestCount} guests. Selected Add-ons: ${
      Object.keys(addOns).filter(k => addOns[k]).map(k => addOnDetails[k].name).join(', ') || 'None'
    }. Estimated price: ${formatCurrency(finalTotal)}`;
    
    setFormData(prev => ({
      ...prev,
      comments: summaryText
    }));

    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const prefillDish = (dishName) => {
    setFormData(prev => ({
      ...prev,
      comments: `Highly interested in booking custom catering featuring your signature: ${dishName}.`
    }));

    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E3A8A] font-body selection:bg-[#D4AF37]/30 selection:text-[#1E3A8A] relative overflow-x-hidden">
      
      {/* Font imports & Art Deco CSS styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .font-display { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        .deco-border-double {
          border: 6px double #D4AF37;
        }
        .deco-border-thick {
          border: 4px solid #D4AF37;
        }
        .deco-pattern-bg {
          background-color: #FDFBF7;
          background-image: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 80%),
                            linear-gradient(rgba(30, 58, 138, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(30, 58, 138, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 24px 24px, 24px 24px;
        }
        .deco-button-active {
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.6);
          transform: translateY(1px);
        }
      ` }} />

      {/* Top Banner decoration */}
      <div className="w-full h-3 bg-gradient-to-r from-[#1E3A8A] via-[#D4AF37] to-[#1E3A8A]" />

      {/* Navigation Header */}
      <header className="py-6 px-4 md:px-8 border-b-2 border-[#D4AF37]/30 bg-[#FDFBF7]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="deco-border-thick p-1.5 bg-[#1E3A8A]">
              <UtensilsCrossed className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <span className="font-display text-2xl font-black tracking-widest text-[#1E3A8A] block">MAHARAJA</span>
              <span className="font-display text-xs font-bold tracking-[0.25em] text-[#D4AF37] block -mt-1.5">CATERERS &bull; UPPAL</span>
            </div>
          </div>
          
          <nav className="flex items-center gap-6 text-sm font-semibold tracking-wider uppercase text-[#1E3A8A]/90">
            <a href="#heritage" className="hover:text-[#D4AF37] transition-colors">Our Legacy</a>
            <a href="#menu-customizer" className="hover:text-[#D4AF37] transition-colors">Menu Planner</a>
            <a href="#signature-dishes" className="hover:text-[#D4AF37] transition-colors">Signature Grid</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
          </nav>

          <a 
            href="#booking-form"
            className="font-display px-6 py-2.5 bg-[#1E3A8A] text-[#FDFBF7] font-bold text-xs tracking-widest border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition-all duration-300 active:scale-95 deco-border-button"
          >
            BOOK CONSULTATION
          </a>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative py-12 md:py-24 px-4 md:px-8 deco-pattern-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (left 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 rounded-full w-max text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
              <Sparkles className="w-4.5 h-4.5 text-[#D4AF37]" />
              Premium B2B & Event Catering in Hyderabad
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#1E3A8A] leading-tight tracking-tight">
              THE ROYAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#D4AF37] to-[#1E3A8A]">BANQUET</span> OF HYDERABAD
            </h1>

            <p className="text-lg text-[#1E3A8A]/80 leading-relaxed font-medium max-w-2xl">
              Elevate your corporate galas, high-society weddings, and grand milestones in Uppal with authentic Nizami heritage cooking and unmatched 5-star service standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-[#FDFBF7] border-l-4 border-[#D4AF37] shadow-sm flex flex-col">
                <span className="font-display text-2xl font-black text-[#1E3A8A]">40+ YRS</span>
                <span className="text-xs uppercase tracking-wider text-[#1E3A8A]/60 font-bold mt-1">Nizami Cooking Legacy</span>
              </div>
              <div className="p-4 bg-[#FDFBF7] border-l-4 border-[#1E3A8A] shadow-sm flex flex-col">
                <span className="font-display text-2xl font-black text-[#D4AF37]">ISO 22000</span>
                <span className="text-xs uppercase tracking-wider text-[#1E3A8A]/60 font-bold mt-1">Certified Food Hygiene</span>
              </div>
              <div className="p-4 bg-[#FDFBF7] border-l-4 border-[#D4AF37] shadow-sm flex flex-col">
                <span className="font-display text-2xl font-black text-[#1E3A8A]">5-STAR</span>
                <span className="text-xs uppercase tracking-wider text-[#1E3A8A]/60 font-bold mt-1">Culinary Execution</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="#menu-customizer" 
                className="inline-flex items-center justify-center gap-2 font-display px-8 py-4 bg-[#1E3A8A] text-[#FDFBF7] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A8A] font-extrabold tracking-widest text-sm transition-all duration-300 shadow-md active:scale-95"
              >
                Curate Menu Estimate <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#heritage" 
                className="inline-flex items-center justify-center font-display px-8 py-4 bg-transparent text-[#1E3A8A] border-2 border-[#1E3A8A] hover:bg-[#1E3A8A]/5 font-extrabold tracking-widest text-sm transition-all duration-300 active:scale-95"
              >
                Discover Story
              </a>
            </div>
          </div>

          {/* Hero Images Grid (right 5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="deco-border-double p-2 bg-[#FDFBF7] shadow-xl relative z-10">
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600" 
                  alt="Royal Saffron Dum Biryani" 
                  className="w-full h-40 md:h-52 object-cover border border-[#D4AF37]/50"
                />
                <img 
                  src="https://images.unsplash.com/photo-1603360946369-fa9902f357f5?auto=format&fit=crop&q=80&w=600" 
                  alt="Grill Kebabs Platter" 
                  className="w-full h-40 md:h-52 object-cover border border-[#D4AF37]/50"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600" 
                  alt="Royal Event Banqueting Table" 
                  className="w-full h-40 md:h-52 object-cover border border-[#D4AF37]/50"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" 
                  alt="Ghee Roast Indian Sweets" 
                  className="w-full h-40 md:h-52 object-cover border border-[#D4AF37]/50"
                />
              </div>
              
              {/* Art Deco geometric badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#1E3A8A] text-[#FDFBF7] p-4 deco-border-thick shadow-lg hidden sm:block max-w-xs">
                <p className="font-display text-sm font-bold text-[#D4AF37] tracking-wider mb-0.5">THE MAJESTIC STANDARD</p>
                <p className="text-[11px] text-[#FDFBF7]/80 leading-relaxed font-medium">Every ingredient sourced fresh, slow-cooked in traditional clay & copper ovens in Uppal, Hyderabad.</p>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-[#D4AF37]/20 rotate-45 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-[#1E3A8A]/10 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Heritage Story Section */}
      <section id="heritage" className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Art Deco Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative p-3 border-4 border-[#1E3A8A] bg-[#FDFBF7] shadow-xl">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-[#D4AF37]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-[#D4AF37]" />
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" 
                alt="Executive Chef preparing heritage food" 
                className="w-full max-w-sm h-96 object-cover border-2 border-[#D4AF37]/60"
              />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="font-display text-sm font-bold tracking-widest text-[#D4AF37]">AUTHENTIC COOKING LEGACY</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1E3A8A]">
              A Culinary Dynasty Rooted in Uppal, Hyderabad
            </h2>

            <p className="text-base text-[#1E3A8A]/90 leading-relaxed font-medium">
              For over four decades, Maharaja Caterers has curated the authentic flavors of the Deccan. Tracing our roots back to heritage Nizami royal kitchens, our recipes are guarded family secrets passed down through generations. Our executive chefs bring together traditional copper-handi slow-cooking (&apos;Dum&apos;) techniques and modern, cutting-edge food safety standards.
            </p>

            <p className="text-base text-[#1E3A8A]/80 leading-relaxed">
              Operating out of our state-of-the-art 12,000 sq. ft. central kitchen in Uppal, we serve high-profile weddings, corporate galas, and intimate celebrations with equal finesse and uncompromised hygiene. Every menu is personalized, ensuring that from spice levels to styling themes, your event mirrors your standard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-[#D4AF37]/10 rounded border border-[#D4AF37]">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#1E3A8A]">Legacy Master Chefs</h4>
                  <p className="text-xs text-[#1E3A8A]/70 leading-relaxed mt-0.5">Trained in traditional wood-fired slow cooking, bringing raw authenticity.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-[#1E3A8A]/10 rounded border border-[#1E3A8A]">
                  <ShieldCheck className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#1E3A8A]">200-Point Food Safety Protocol</h4>
                  <p className="text-xs text-[#1E3A8A]/70 leading-relaxed mt-0.5">From sourcing ingredients to serving, we adhere to strict ISO compliance.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Interactive Menu Planner & Estimator */}
      <section id="menu-customizer" className="py-16 px-4 md:px-8 bg-[#FAF7EE] border-y-2 border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#D4AF37]">GRAND FEAST ESTIMATOR</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1E3A8A]">Curate Your Custom Royal Banquet</h2>
            <p className="text-sm sm:text-base text-[#1E3A8A]/70 leading-relaxed">
              Design a menu package tailored to your guest size, preferred budget tier, and luxury live counters. Get real-time transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Planner Inputs (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-[#FDFBF7] p-6 md:p-8 border-4 border-[#1E3A8A] shadow-md flex flex-col gap-6">
              
              {/* Step 1: Event Type */}
              <div className="flex flex-col gap-3">
                <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">1. Event Occasion</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Wedding Banquet', 'Corporate Gala', 'Elite Soiree', 'Birthday Jubilee'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`py-2 px-3 border text-xs font-bold tracking-wider transition-all duration-200 active:scale-95 ${
                        eventType === type 
                          ? 'bg-[#1E3A8A] text-[#FDFBF7] border-[#D4AF37] deco-button-active' 
                          : 'bg-[#FDFBF7] text-[#1E3A8A] border-[#1E3A8A]/20 hover:border-[#D4AF37]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Guest Count Slider & Input */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">2. Guest Volume</label>
                  <div className="flex items-center gap-2 border border-[#1E3A8A]/30 bg-[#FDFBF7] px-3 py-1">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    <input 
                      type="number" 
                      min="100" 
                      max="2000" 
                      value={guestCount}
                      onChange={(e) => setGuestCount(Math.max(100, Math.min(2000, Number(e.target.value) || 100)))}
                      className="w-16 bg-transparent outline-none font-display font-black text-right text-sm text-[#1E3A8A]" 
                    />
                    <span className="text-xs font-bold text-[#1E3A8A]/60">PAX</span>
                  </div>
                </div>
                
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="50"
                  value={guestCount} 
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] h-2 bg-[#1E3A8A]/10 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-[#1E3A8A]/60 font-bold uppercase tracking-wider">
                  <span>Min: 100 guests</span>
                  <span>500+ (5% Discount)</span>
                  <span>1000+ (10% Discount)</span>
                  <span>Max: 2000 guests</span>
                </div>
              </div>

              {/* Step 3: Menu Tiers */}
              <div className="flex flex-col gap-3">
                <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">3. Culinary Tier Selection</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.keys(menuTiers).map((tierName) => (
                    <button
                      key={tierName}
                      type="button"
                      onClick={() => setMenuTier(tierName)}
                      className={`p-4 border-2 text-left flex flex-col justify-between h-32 transition-all duration-200 active:scale-95 ${
                        menuTier === tierName 
                          ? 'bg-[#1E3A8A] text-[#FDFBF7] border-[#D4AF37] deco-button-active' 
                          : 'bg-[#FDFBF7] text-[#1E3A8A] border-[#1E3A8A]/20 hover:border-[#D4AF37]'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-display text-xs font-black tracking-wider uppercase">{tierName}</span>
                        <span className="text-[10px] opacity-75 mt-1 line-clamp-2 leading-relaxed">
                          {menuTiers[tierName].description}
                        </span>
                      </div>
                      <span className="font-display text-sm font-bold text-[#D4AF37] mt-2 block">
                        {formatCurrency(menuTiers[tierName].price)} <span className="text-[9px] font-sans opacity-70">/ plate</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Add-on Live counters */}
              <div className="flex flex-col gap-3">
                <label className="font-display text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">4. Shahi Live Counters & Stations</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.keys(addOnDetails).map((key) => (
                    <label 
                      key={key} 
                      className={`p-3 border flex items-start gap-3 cursor-pointer select-none transition-all duration-200 ${
                        addOns[key] 
                          ? 'bg-[#1E3A8A]/5 border-[#D4AF37] shadow-sm' 
                          : 'bg-[#FDFBF7] border-[#1E3A8A]/15 hover:border-[#1E3A8A]/35'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={addOns[key]}
                        onChange={(e) => setAddOns(prev => ({ ...prev, [key]: e.target.checked }))}
                        className="mt-1 w-4 h-4 accent-[#D4AF37] cursor-pointer"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#1E3A8A] flex justify-between gap-1">
                          {addOnDetails[key].name} 
                          <span className="text-[#D4AF37] font-display">+{formatCurrency(addOnDetails[key].price)}</span>
                        </span>
                        <span className="text-[10px] text-[#1E3A8A]/75 mt-0.5 leading-relaxed">
                          {addOnDetails[key].desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Planner Output Card (Right 5 Columns) */}
            <div className="lg:col-span-5 bg-[#1E3A8A] text-[#FDFBF7] p-6 border-4 border-[#D4AF37] shadow-xl relative sticky top-28">
              
              {/* Art deco inner border line */}
              <div className="absolute inset-1.5 border border-[#D4AF37]/30 pointer-events-none" />

              <div className="relative flex flex-col gap-6">
                
                {/* Scroll Heading */}
                <div className="text-center border-b border-[#D4AF37]/30 pb-4">
                  <span className="font-display text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] block mb-1">PROPOSAL OVERVIEW</span>
                  <h3 className="font-display text-xl font-bold tracking-wide">MAHARAJA ROYAL FEAST</h3>
                  <div className="mt-2 text-xs font-semibold text-[#FDFBF7]/80 flex justify-center gap-4">
                    <span>{eventType}</span>
                    <span>&bull;</span>
                    <span>{guestCount} Guests</span>
                  </div>
                </div>

                {/* Live Menu Preview */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-display text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Curated Menu Highlights
                  </h4>
                  
                  <div className="max-h-48 overflow-y-auto space-y-3 pr-2 text-xs text-[#FDFBF7]/90 scrollbar-thin">
                    <div>
                      <span className="font-bold text-[#D4AF37] block mb-1">Starters</span>
                      <ul className="list-disc list-inside pl-1 space-y-0.5 text-[#FDFBF7]/80">
                        {menuTiers[menuTier].starters.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-[#D4AF37] block mb-1">Royal Main Course</span>
                      <ul className="list-disc list-inside pl-1 space-y-0.5 text-[#FDFBF7]/80">
                        {menuTiers[menuTier].mains.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-[#D4AF37] block mb-1">Exquisite Desserts</span>
                      <ul className="list-disc list-inside pl-1 space-y-0.5 text-[#FDFBF7]/80">
                        {menuTiers[menuTier].desserts.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                    {Object.keys(addOns).some(k => addOns[k]) && (
                      <div>
                        <span className="font-bold text-[#D4AF37] block mb-1">Live Counters</span>
                        <ul className="list-disc list-inside pl-1 space-y-0.5 text-[#FDFBF7]/80">
                          {Object.keys(addOns)
                            .filter(k => addOns[k])
                            .map((k, idx) => <li key={idx} className="font-medium text-[#FDFBF7]">{addOnDetails[k].name}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Estimate Calculation */}
                <div className="border-t border-[#D4AF37]/30 pt-4 flex flex-col gap-2.5 text-xs">
                  <div className="flex justify-between font-medium">
                    <span>Base Tier Plate Cost</span>
                    <span>{formatCurrency(basePricePerPlate)}</span>
                  </div>
                  {addOnPricePerPlate > 0 && (
                    <div className="flex justify-between font-medium">
                      <span>Add-ons Plate Cost</span>
                      <span>+{formatCurrency(addOnPricePerPlate)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-sm text-[#D4AF37] border-b border-[#D4AF37]/15 pb-2">
                    <span>Cost Per Plate</span>
                    <span>{formatCurrency(pricePerPlate)} / guest</span>
                  </div>

                  <div className="flex justify-between mt-1">
                    <span>Subtotal ({guestCount} guests)</span>
                    <span>{formatCurrency(rawTotal)}</span>
                  </div>
                  
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Volume Discount ({discountPercent}%)</span>
                      <span>-{formatCurrency(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span>{formatCurrency(gstAmount)}</span>
                  </div>

                  <div className="flex justify-between items-end border-t border-[#D4AF37]/30 pt-3 mt-1">
                    <span className="font-display text-sm font-bold text-[#D4AF37]">Total Estimate</span>
                    <span className="font-display text-2xl font-black text-[#D4AF37] leading-none">
                      {formatCurrency(finalTotal)}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  type="button"
                  onClick={prefillFromCustomizer}
                  className="font-display w-full py-3 bg-[#D4AF37] text-[#1E3A8A] font-extrabold text-xs tracking-widest hover:bg-[#FDFBF7] hover:text-[#1E3A8A] transition-all duration-300 active:scale-95 text-center mt-2 shadow-lg"
                >
                  PREFILL CONSULTATION FORM
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Signature Dishes Grid */}
      <section id="signature-dishes" className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#D4AF37]">THE CULINARY CROWN JEWELS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1E3A8A]">Signature Dishes Crafted in Uppal</h2>
            <p className="text-sm sm:text-base text-[#1E3A8A]/70">
              Each recipe represents deep mastership, refined over decades for high-profile gatherings across Telangana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dish 1 */}
            <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#FDFBF7] shadow-md hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600" 
                    alt="Zafrani Dum Biryani" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#1E3A8A] text-[#D4AF37] font-display text-[9px] font-bold px-2 py-0.5 border border-[#D4AF37] uppercase tracking-wider">
                    ROYAL SIGNATURE
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4 flex items-center justify-between">
                  Zafrani Dum Biryani
                </h3>
                <p className="text-xs text-[#1E3A8A]/75 mt-2 leading-relaxed">
                  Slow-cooked for 6 hours in sealed copper handis with Basmati rice, premium Iranian saffron, and tender choice cuts of baby lamb. A majestic heritage delicacy.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => prefillDish('Zafrani Dum Biryani')}
                className="mt-6 flex items-center justify-center gap-2 font-display text-[10px] font-bold tracking-widest text-[#1E3A8A] border-t border-[#D4AF37]/30 pt-3 w-full group-hover:text-[#D4AF37] transition-colors uppercase"
              >
                Inquire For Feast <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 2 */}
            <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#FDFBF7] shadow-md hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1603360946369-fa9902f357f5?auto=format&fit=crop&q=80&w=600" 
                    alt="Shahi Patthar ka Gosht" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#1E3A8A] text-[#D4AF37] font-display text-[9px] font-bold px-2 py-0.5 border border-[#D4AF37] uppercase tracking-wider">
                    GRANITE GRILLED
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4 flex items-center justify-between">
                  Patthar ka Gosht
                </h3>
                <p className="text-xs text-[#1E3A8A]/75 mt-2 leading-relaxed">
                  Prime rib ribbons marinated overnight in royal spices, green papaya paste, and black cardamom, slow-seared on dry granite stones imported from Deccani hills.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => prefillDish('Patthar ka Gosht')}
                className="mt-6 flex items-center justify-center gap-2 font-display text-[10px] font-bold tracking-widest text-[#1E3A8A] border-t border-[#D4AF37]/30 pt-3 w-full group-hover:text-[#D4AF37] transition-colors uppercase"
              >
                Inquire For Feast <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 3 */}
            <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#FDFBF7] shadow-md hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" 
                    alt="Maharaja Haleem" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#1E3A8A] text-[#D4AF37] font-display text-[9px] font-bold px-2 py-0.5 border border-[#D4AF37] uppercase tracking-wider">
                    FESTIVAL STAR
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4 flex items-center justify-between">
                  Royal Mutton Haleem
                </h3>
                <p className="text-xs text-[#1E3A8A]/75 mt-2 leading-relaxed">
                  Rich, hand-pounded wheat, barley, and tender mutton cooked for 12 hours with structural spices, and garnished with fried cashew nuts, crisp onions, and ghee.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => prefillDish('Royal Mutton Haleem')}
                className="mt-6 flex items-center justify-center gap-2 font-display text-[10px] font-bold tracking-widest text-[#1E3A8A] border-t border-[#D4AF37]/30 pt-3 w-full group-hover:text-[#D4AF37] transition-colors uppercase"
              >
                Inquire For Feast <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 4 */}
            <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#FDFBF7] shadow-md hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600" 
                    alt="Shikampur Kebabs" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#1E3A8A] text-[#D4AF37] font-display text-[9px] font-bold px-2 py-0.5 border border-[#D4AF37] uppercase tracking-wider">
                    APPETIZER DELIGHT
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4 flex items-center justify-between">
                  Shikampur Kebab
                </h3>
                <p className="text-xs text-[#1E3A8A]/75 mt-2 leading-relaxed">
                  Finely minced lamb patties stuffed with sour-hung curd, fresh green chillies, mint leaves, and light lemon zest, pan-seared to a melt-in-mouth texture.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => prefillDish('Shikampur Kebab')}
                className="mt-6 flex items-center justify-center gap-2 font-display text-[10px] font-bold tracking-widest text-[#1E3A8A] border-t border-[#D4AF37]/30 pt-3 w-full group-hover:text-[#D4AF37] transition-colors uppercase"
              >
                Inquire For Feast <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 5 */}
            <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#FDFBF7] shadow-md hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" 
                    alt="Qubani ka Meetha" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#1E3A8A] text-[#D4AF37] font-display text-[9px] font-bold px-2 py-0.5 border border-[#D4AF37] uppercase tracking-wider">
                    NIZAMI DESSERT
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4 flex items-center justify-between">
                  Qubani with Saffron Rabdi
                </h3>
                <p className="text-xs text-[#1E3A8A]/75 mt-2 leading-relaxed">
                  Sun-dried apricots from Turkey, slow-cooked in sugar syrup and almond kernels, layered with thick, stone-cold boiled milk reduction flavored with pure saffron.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => prefillDish('Qubani with Saffron Rabdi')}
                className="mt-6 flex items-center justify-center gap-2 font-display text-[10px] font-bold tracking-widest text-[#1E3A8A] border-t border-[#D4AF37]/30 pt-3 w-full group-hover:text-[#D4AF37] transition-colors uppercase"
              >
                Inquire For Feast <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dish 6 */}
            <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#FDFBF7] shadow-md hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border border-[#D4AF37]/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600" 
                    alt="Paneer Sufiyani Tikka" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[#1E3A8A] text-[#D4AF37] font-display text-[9px] font-bold px-2 py-0.5 border border-[#D4AF37] uppercase tracking-wider">
                    VEGETARIAN ELITE
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-[#1E3A8A] mt-4 flex items-center justify-between">
                  Paneer Sufiyani Tikka
                </h3>
                <p className="text-xs text-[#1E3A8A]/75 mt-2 leading-relaxed">
                  Chunks of fresh cottage cheese, marinated in cashew paste, cream, and dry spices, char-grilled over charcoal to achieve a rich smoky flavor with soft interior.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => prefillDish('Paneer Sufiyani Tikka')}
                className="mt-6 flex items-center justify-center gap-2 font-display text-[10px] font-bold tracking-widest text-[#1E3A8A] border-t border-[#D4AF37]/30 pt-3 w-full group-hover:text-[#D4AF37] transition-colors uppercase"
              >
                Inquire For Feast <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 px-4 md:px-8 bg-[#FAF7EE] border-y-2 border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center flex flex-col gap-3 mb-10">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">SCHEDULE A CONSULTATION</span>
            <h2 className="font-display text-3xl font-extrabold text-[#1E3A8A]">Book Your Royal Tasting & consultation</h2>
            <p className="text-xs sm:text-sm text-[#1E3A8A]/75 leading-relaxed max-w-xl mx-auto">
              Our catering director will design a customized proposal and schedule a private tasting session at our kitchen facility in Uppal.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-[#FDFBF7] border-4 border-[#D4AF37] shadow-xl relative">
            
            {/* Art Deco Inner Box Lines */}
            <div className="absolute inset-1 border border-[#D4AF37]/20 pointer-events-none" />

            {submitSuccess ? (
              <div className="py-12 px-4 flex flex-col items-center justify-center text-center gap-4 relative z-10">
                <div className="p-3 bg-emerald-50 border-2 border-emerald-400 rounded-full">
                  <Check className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#1E3A8A]">Request Submitted Successfully</h3>
                <p className="text-sm text-[#1E3A8A]/80 max-w-md">
                  Thank you for choosing Maharaja Caterers. Our Event Director has received your request and will contact you within the next 4 hours.
                </p>
                <div className="p-4 bg-[#1E3A8A]/5 border border-[#D4AF37]/40 w-full max-w-xs font-mono text-xs flex flex-col items-center gap-1.5 mt-2">
                  <span className="text-[#1E3A8A]/60 uppercase tracking-widest font-bold font-sans text-[10px]">Your Booking Reference</span>
                  <span className="text-base font-black text-[#1E3A8A] tracking-wider">{confirmationCode}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="font-display mt-6 text-xs font-black tracking-widest text-[#D4AF37] hover:text-[#1E3A8A] border-b border-[#D4AF37] transition-all"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.name ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.name && <span className="text-[11px] text-red-500 font-semibold">{formErrors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Mobile Number</label>
                  <input 
                    type="tel"
                    placeholder="e.g. 9849012345"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.phone ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.phone && <span className="text-[11px] text-red-500 font-semibold">{formErrors.phone}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.email ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.email && <span className="text-[11px] text-red-500 font-semibold">{formErrors.email}</span>}
                </div>

                {/* Event Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Event Date</label>
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className={`p-3 bg-[#FDFBF7] border text-sm outline-none transition-colors ${
                      formErrors.date ? 'border-red-500' : 'border-[#1E3A8A]/20 focus:border-[#D4AF37]'
                    }`}
                  />
                  {formErrors.date && <span className="text-[11px] text-red-500 font-semibold">{formErrors.date}</span>}
                </div>

                {/* Comments / Details */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Catering Requirements & Details</label>
                  <textarea 
                    rows="4"
                    placeholder="Describe your layout requirements, dietary needs, or selected menu options..."
                    value={formData.comments}
                    onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                    className="p-3 bg-[#FDFBF7] border border-[#1E3A8A]/20 focus:border-[#D4AF37] text-sm outline-none resize-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-display w-full py-4 bg-[#1E3A8A] text-[#FDFBF7] border-2 border-[#D4AF37] font-extrabold text-sm tracking-widest hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> SENDING ROYAL REQUEST...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> SECURE CONSULTATION SLOT
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center my-4 gap-4">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="rotate-45">
          <rect x="6" y="6" width="12" height="12" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
        <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#D4AF37]">PATRON TESTIMONIALS</span>
            <h2 className="font-display text-3xl font-black text-[#1E3A8A]">Endorsed by Hyderabad’s Elite Circles</h2>
            <p className="text-sm text-[#1E3A8A]/70">
              Read authentic feedback from families and business managers who have experienced our signature royal hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="p-6 border-2 border-[#D4AF37]/30 bg-[#FDFBF7] shadow-sm relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-[#D4AF37]" />)}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-display text-5xl font-bold text-[#D4AF37]/20 leading-none">&ldquo;</span>
                <p className="text-sm text-[#1E3A8A] leading-relaxed italic -mt-6 font-medium">
                  &ldquo;The Royal Platinum menu was the highlight of our daughter&apos;s wedding at the Marriott. The live Haleem stall was a massive hit! People from Gachibowli are still talking about the Biryani.&rdquo;
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4 mt-6">
                <p className="text-sm font-bold text-[#1E3A8A]">Dr. Anirudh Rao</p>
                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">HMT Nagar, Uppal</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 border-2 border-[#D4AF37]/30 bg-[#FDFBF7] shadow-sm relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-[#D4AF37]" />)}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-display text-5xl font-bold text-[#D4AF37]/20 leading-none">&ldquo;</span>
                <p className="text-sm text-[#1E3A8A] leading-relaxed italic -mt-6 font-medium">
                  &ldquo;We hired Maharaja Caterers for our corporate annual gala (800 pax) in Secunderabad. Impeccable hygiene, prompt service, and the food was served steaming hot. 10/10.&rdquo;
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4 mt-6">
                <p className="text-sm font-bold text-[#1E3A8A]">Meenakshi Krishnan</p>
                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">HR Director, Gachibowli</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 border-2 border-[#D4AF37]/30 bg-[#FDFBF7] shadow-sm relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-[#D4AF37]" />)}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-display text-5xl font-bold text-[#D4AF37]/20 leading-none">&ldquo;</span>
                <p className="text-sm text-[#1E3A8A] leading-relaxed italic -mt-6 font-medium">
                  &ldquo;Outstanding taste and pure royal hospitality. Their team in Uppal managed the entire event flawlessly. The Patthar ka Gosht was melt-in-the-mouth.&rdquo;
                </p>
              </div>
              <div className="border-t border-[#D4AF37]/20 pt-4 mt-6">
                <p className="text-sm font-bold text-[#1E3A8A]">Mirza Yusuf Ali</p>
                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">Jubilee Hills, Hyderabad</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Store Details */}
      <footer className="bg-[#1E3A8A] text-[#FDFBF7] border-t-4 border-[#D4AF37] py-12 px-4 md:px-8 relative">
        <div className="absolute inset-1 border border-[#D4AF37]/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="deco-border-thick p-1 bg-[#FDFBF7]">
                <UtensilsCrossed className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <div>
                <span className="font-display text-xl font-black tracking-widest text-[#D4AF37] block">MAHARAJA</span>
                <span className="font-display text-[9px] font-bold tracking-[0.25em] text-[#FDFBF7] block -mt-1">ROYAL CATERERS</span>
              </div>
            </div>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed max-w-sm">
              Providing premium catering services for corporate meetings, luxury weddings, and festive banquets across Hyderabad since 1986. Certified hygiene, traditional woodfired kitchens.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-xs font-bold tracking-widest text-[#D4AF37] uppercase">STORE LOCATIONS</span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#FDFBF7]/85">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4.5 h-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Plot 45, Survey No. 12, HMT Nagar Main Road, Uppal, Hyderabad, Telangana 500039
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                <span>Office: 10:00 AM - 08:00 PM Daily</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-xs font-bold tracking-widest text-[#D4AF37] uppercase">SECURE DIRECT LINE</span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#FDFBF7]/85">
              <li className="flex gap-2 items-center">
                <Phone className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                <a href="tel:+919849012345" className="hover:text-[#D4AF37] transition-colors font-semibold">+91 98490 12345</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                <a href="mailto:events@maharajacaterers.in" className="hover:text-[#D4AF37] transition-colors">events@maharajacaterers.in</a>
              </li>
              <li className="flex gap-2 items-center">
                <ShieldCheck className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                <span>FSSAI License: #13621012000456</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-[#D4AF37]/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#FDFBF7]/50 font-bold uppercase tracking-wider relative z-10">
          <span>&copy; 2026 Maharaja Caterers Hyderabad. All Rights Reserved.</span>
          <span>Designed with Bold Art Deco Standards</span>
        </div>
      </footer>

    </div>
  );
}

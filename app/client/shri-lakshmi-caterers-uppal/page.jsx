"use client";

import React, { useState } from 'react';
import { 
  Leaf, 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Star, 
  Loader2,
  Clock,
  ChevronRight,
  User,
  Coffee,
  Heart,
  Award,
  Utensils
} from 'lucide-react';

// Menu configs
const MENU_TIERS = {
  utsav: {
    name: 'Utsav (Standard Spread)',
    platePrice: 450,
    desc: 'An authentic traditional spread capturing the essence of classic Telugu festival feasts.',
    dishes: [
      { name: 'Mamidikaya Pappu', desc: 'Slow-simmered lentils tempered with sour green raw mangoes and ghee.' },
      { name: 'Gutti Vankaya Masala', desc: 'Tender baby brinjals stuffed with a roasted peanut-sesame spice blend.' },
      { name: 'Steaming Bagara Rice', desc: 'Aromatic basmati rice cooked with whole spices, mint, and fresh coriander.' },
      { name: 'Tomato Shahi Paneer', desc: 'Fresh cottage cheese cubes cooked in a rich, mild tomato-cashew gravy.' },
      { name: 'Kakinada Kaja', desc: 'Traditional layered pastry sweet soaked in saffron-infused warm syrup.' },
      { name: 'Elaneer Payasam', desc: 'Lighter milk pudding cooked with fresh tender coconut water and scrapings.' }
    ]
  },
  vaibhav: {
    name: 'Vaibhav (Premium Feast)',
    platePrice: 750,
    desc: 'An elevated feast showcasing rich delicacies, live kitchen counters, and legacy recipes.',
    dishes: [
      { name: 'Live Dosa & Pesarattu Counter', desc: 'Crisp green moong dal crepes served with fiery ginger chutney.' },
      { name: 'Awadhi Veg Dum Biryani', desc: 'Slow-dum-cooked basmati rice layered with garden vegetables and saffron milk.' },
      { name: 'Kaju Butter Masala', desc: 'Plump cashews simmered in a velvet tomato gravy finished with organic cream.' },
      { name: 'Zafrani Paneer Tikka', desc: 'Clay oven roasted cottage cheese marinated with Kashmiri saffron and yogurt.' },
      { name: 'Mouth-melting Double Ka Meetha', desc: 'Traditional fried bread pudding soaked in cardamom syrup and Rabri.' },
      { name: 'Rich Badam Halwa', desc: 'Decadent almond paste slow-cooked with organic ghee and crushed pistachios.' }
    ]
  },
  rajasa: {
    name: 'Rajasa (Royal Banquet)',
    platePrice: 1250,
    desc: 'A grand royal Telugu banquet featuring gourmet multi-cuisine options, signature mocktails, and decadent desserts.',
    dishes: [
      { name: 'Pomegranate Ginger Mojito', desc: 'Refreshing signature welcome drink with fresh pomegranate seeds and mint.' },
      { name: 'Live Appam with Sweet Coconut Milk', desc: 'Lacy rice crepes with a soft spongy center, made live to order.' },
      { name: 'Avakaya Dum Biryani', desc: 'Bespoke basmati rice layered with tangy home-made mango pickle and local paneer.' },
      { name: 'Imperial Gutti Vankaya Kura', desc: 'Our legendary stuffed brinjal cooked in a premium wood-fired copper cauldron.' },
      { name: 'Legendary Apricot Delight', desc: 'Layers of slow-stewed apricots, fresh cream, and vanilla sponge cake.' },
      { name: 'Saffron Mango Rabri', desc: 'Thickened milk sweet flavored with fresh Alphonso pulp and real saffron strands.' }
    ]
  }
};

const EVENT_TYPES = [
  { id: 'wedding', name: 'Grand Wedding Feast' },
  { id: 'housewarming', name: 'Traditional Housewarming' },
  { id: 'birthday', name: 'Milestone Celebration' },
  { id: 'corporate', name: 'Premium Corporate Buffet' }
];

export default function ShriLakshmiCaterers() {
  // Customizer state
  const [guestCount, setGuestCount] = useState(150);
  const [selectedTier, setSelectedTier] = useState('vaibhav');
  const [selectedEvent, setSelectedEvent] = useState('wedding');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Math variables
  const tierInfo = MENU_TIERS[selectedTier];
  const plateCost = tierInfo.platePrice;
  const baseCost = guestCount * plateCost;
  
  // Dynamic service staff calculation: 1 server per 25 guests, base charge of 800 per server
  const serverCount = Math.max(2, Math.ceil(guestCount / 25));
  const serviceStaffCost = serverCount * 1200;
  
  // Biophilic organic farm levy (supporting Ranga Reddy farmers) - 2%
  const farmLevy = Math.round(baseCost * 0.02);
  
  // Tax (GST 5%)
  const subtotal = baseCost + serviceStaffCost + farmLevy;
  const gst = Math.round(subtotal * 0.05);
  const totalCost = subtotal + gst;

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Select your event date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      notes: ''
    });
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#1E3F20]/15 selection:text-[#1E3F20]">
      {/* Announcement Bar */}
      <div className="bg-[#1E3F20] text-[#FCFBF9] text-center py-2 px-4 text-xs tracking-wider uppercase font-semibold font-[family-name:var(--font-plus-jakarta)] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        <span>Booking for marriages & corporate events in Hyderabad for late 2026</span>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#FCFBF9]/90 backdrop-blur-md border-b border-[#E8EFE9] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#E8EFE9] flex items-center justify-center text-[#1E3F20] shadow-inner">
              <Leaf className="w-5.5 h-5.5 text-[#1E3F20] fill-[#1E3F20]/10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-[family-name:var(--font-playfair)] tracking-wide text-[#1E3F20]">
                Shri Lakshmi
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#556B2F] uppercase -mt-1 font-[family-name:var(--font-plus-jakarta)]">
                Caterers & Cloud Kitchen
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1E3F20]/85 font-[family-name:var(--font-plus-jakarta)]">
            <a href="#heritage" className="hover:text-[#1E3F20] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E3F20] hover:after:w-full after:transition-all">Our Legacy</a>
            <a href="#customizer" className="hover:text-[#1E3F20] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E3F20] hover:after:w-full after:transition-all">Menu Builder</a>
            <a href="#signature" className="hover:text-[#1E3F20] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E3F20] hover:after:w-full after:transition-all">Signature Grid</a>
            <a href="#testimonials" className="hover:text-[#1E3F20] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E3F20] hover:after:w-full after:transition-all">Client Love</a>
          </nav>

          <div>
            <a 
              href="#booking"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1E3F20] hover:bg-[#2c582f] text-[#FCFBF9] text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95 font-[family-name:var(--font-plus-jakarta)]"
            >
              Book Tasting
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#FCFBF9] via-[#E8EFE9]/40 to-[#FCFBF9]">
        {/* Leaf Graphic Background elements */}
        <div className="absolute top-10 right-[-10%] w-96 h-96 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#1E3F20]">
            <path d="M50,0 C75,25 75,75 50,100 C25,75 25,25 50,0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 opacity-15 pointer-events-none rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#556B2F]">
            <path d="M50,0 C75,25 75,75 50,100 C25,75 25,25 50,0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE9] border border-[#1E3F20]/10 text-[#1E3F20] text-[10px] tracking-widest uppercase font-bold mb-6 font-[family-name:var(--font-plus-jakarta)]">
                <Leaf className="w-3.5 h-3.5 text-[#1E3F20] fill-[#1E3F20]/20" />
                <span>Wood-fired traditional catering</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20] leading-[1.15] mb-6">
                Legacy of Taste.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3F20] to-[#556B2F]">Traditional Feasts</span>
              </h1>
              
              <p className="text-[#1E3F20]/75 text-sm sm:text-base leading-relaxed max-w-xl mb-10 font-[family-name:var(--font-plus-jakarta)] mx-auto lg:mx-0">
                For over three decades, Shri Lakshmi Caterers has curated legendary culinary experiences in Uppal, Hyderabad. Indulge your guests with wood-fired recipes, home-ground spices, and local organic farm-to-table ingredients that tell a stories of heritage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-[family-name:var(--font-plus-jakarta)]">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#1E3F20] hover:bg-[#2c582f] text-[#FCFBF9] text-xs font-bold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 group"
                >
                  <span>Estimate Menu Cost</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#booking"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#E8EFE9] hover:border-[#1E3F20] text-[#1E3F20] text-xs font-bold tracking-widest uppercase rounded-full shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <span>Book Free Consultation</span>
                </a>
              </div>

              {/* Accolades */}
              <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-[#1E3F20]/65 text-xs font-[family-name:var(--font-plus-jakarta)] border-t border-[#E8EFE9] pt-8">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <span>35+ Years of Legacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1E3F20]" />
                  <span>100% ISO-Certified Kitchen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-700 fill-red-700/20" />
                  <span>800+ Weddings Hosted</span>
                </div>
              </div>
            </div>

            {/* Hero Images Grid */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="grid grid-cols-12 gap-4 items-center">
                
                {/* Image 1 - Large Arch */}
                <div className="col-span-7 relative">
                  <div className="rounded-[40px] rounded-br-[120px] overflow-hidden border-4 border-[#FCFBF9] shadow-xl aspect-[4/5] bg-[#E8EFE9]">
                    <img 
                      src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600" 
                      alt="Traditional South Indian Banquet Feast on Banana Leaf"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Decorative tag overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md py-3 px-4 rounded-2xl shadow-lg border border-[#E8EFE9] flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#1E3F20]" />
                    <span className="text-[10px] font-bold text-[#1E3F20] tracking-wider uppercase font-[family-name:var(--font-plus-jakarta)]">Banana Leaf Authentic</span>
                  </div>
                </div>

                {/* Left block for smaller stacked images */}
                <div className="col-span-5 flex flex-col gap-4">
                  {/* Image 2 */}
                  <div className="rounded-[60px] rounded-tl-none overflow-hidden border-3 border-[#FCFBF9] shadow-lg aspect-square bg-[#E8EFE9]">
                    <img 
                      src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400" 
                      alt="Traditional sweets kaja sweet table"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Image 3 */}
                  <div className="rounded-[30px] rounded-br-[60px] overflow-hidden border-3 border-[#FCFBF9] shadow-lg aspect-[4/3] bg-[#E8EFE9]">
                    <img 
                      src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400" 
                      alt="Aromatic bagara rice clay pot cooked"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>

              {/* Float Badge */}
              <div className="absolute top-[20%] right-[5%] bg-white py-4 px-5 rounded-full shadow-2xl border border-[#E8EFE9] text-center w-28 h-28 flex flex-col justify-center items-center pointer-events-none animate-bounce">
                <span className="text-2xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20] leading-none">100%</span>
                <span className="text-[8px] font-bold text-[#556B2F] tracking-widest uppercase font-[family-name:var(--font-plus-jakarta)] mt-1">Pure Ghee Feasts</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Story / Legacy Section */}
      <section id="heritage" className="py-20 bg-[#FCFBF9] border-t border-b border-[#E8EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual element */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative p-8 rounded-[48px] bg-[#E8EFE9]/40 border border-[#E8EFE9] overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Leaf className="w-8 h-8 text-[#1E3F20]/15" />
                </div>
                
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#1E3F20] mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1E3F20] text-[#FCFBF9] flex items-center justify-center text-xs font-bold">✓</span>
                  Why Uppal Prefers Shri Lakshmi
                </h3>

                <ul className="space-y-6 font-[family-name:var(--font-plus-jakarta)]">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8EFE9] flex items-center justify-center shrink-0">
                      <Coffee className="w-5 h-5 text-[#556B2F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1E3F20]">Wood-Fired Copper Cauldron preparation</h4>
                      <p className="text-xs text-[#1E3F20]/70 mt-1 leading-relaxed">We slowly cook our signature biryanis and curries over real wood fire, locking in deep natural smoke aroma and rich heritage flavor.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8EFE9] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#556B2F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1E3F20]">Triple-Tier Kitchen Safety Systems</h4>
                      <p className="text-xs text-[#1E3F20]/70 mt-1 leading-relaxed">RO water plants installed inside our facility. Daily sanitization logs, medical check certifications for our staff, and strict zero-touch handling rules.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8EFE9] flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-[#556B2F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1E3F20]">Ranga Reddy Farm Partnerships</h4>
                      <p className="text-xs text-[#1E3F20]/70 mt-1 leading-relaxed">We source vegetables on contract from local organic farms in Ranga Reddy district. Fresh harvest leaves the soil at 4 AM to be in our kitchens by 6 AM.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[#556B2F] text-xs tracking-[0.25em] uppercase font-bold block mb-4 font-[family-name:var(--font-plus-jakarta)]">OUR COOKING LEGACY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20] mb-6 leading-tight">
                Authentic Telugu Heritage in Every Cauldron.
              </h2>
              
              <div className="space-y-5 text-[#1E3F20]/80 text-sm sm:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                <p>
                  Founded in 1991 by Sri Venkatachari in the heart of Uppal, Shri Lakshmi Caterers began as a small boutique catering kitchen serving local wedding venues. Our philosophy was simple: never compromise on spices, and respect the ancient cooking laws of Telugu culinary tradition.
                </p>
                <p>
                  Today, while we host grand events of up to 5,000 guests, our kitchen’s core remains unchanged. We roast and grind all masala blends manually in stone pestles. Every batch of ghee is melted fresh from farm butter, and we avoid all artificial preservatives or taste enhancers.
                </p>
                <p className="border-l-4 border-[#1E3F20] pl-4 italic text-[#1E3F20]/90 text-sm py-1 bg-[#E8EFE9]/20 rounded-r-lg">
                  "For a true feast, the food must not only satisfy the tongue but bless the soul. That is why we begin our morning kitchen batches with traditional prayers." <br/>
                  <span className="block text-right font-bold text-xs mt-2 not-italic">— Chef Sri Venkatachari, Founder</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Estimator / Customizer */}
      <section id="customizer" className="py-20 bg-gradient-to-b from-[#FCFBF9] to-[#E8EFE9]/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#556B2F] text-xs tracking-[0.25em] uppercase font-bold block mb-4 font-[family-name:var(--font-plus-jakarta)]">BUILD YOUR FEAST</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20] mb-4">
              Interactive Menu customizer & Estimator
            </h2>
            <p className="text-xs sm:text-sm text-[#1E3F20]/70 font-[family-name:var(--font-plus-jakarta)] leading-relaxed">
              Plan your grand event. Select the occasion, tier, and guest count to view instant price estimates and curated traditional menu selections.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Customizer Panel */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[32px] border border-[#E8EFE9] shadow-sm">
              <div className="space-y-8">
                
                {/* 1. Event Type Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] block mb-4 font-[family-name:var(--font-plus-jakarta)]">
                    Step 1: Select Occasion
                  </label>
                  <div className="grid grid-cols-2 gap-3 font-[family-name:var(--font-plus-jakarta)]">
                    {EVENT_TYPES.map((evt) => (
                      <button
                        key={evt.id}
                        type="button"
                        onClick={() => setSelectedEvent(evt.id)}
                        className={`p-3 text-xs font-bold tracking-wide uppercase border text-center rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
                          selectedEvent === evt.id 
                            ? 'bg-[#1E3F20] text-[#FCFBF9] border-[#1E3F20] shadow-md shadow-[#1E3F20]/10' 
                            : 'bg-white border-[#E8EFE9] text-[#1E3F20]/75 hover:border-[#1E3F20]/30 hover:bg-[#FCFBF9]'
                        }`}
                      >
                        {selectedEvent === evt.id && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                        <span>{evt.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Menu Tier Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] block mb-4 font-[family-name:var(--font-plus-jakarta)]">
                    Step 2: Choose Feast Tier
                  </label>
                  <div className="grid md:grid-cols-3 gap-4 font-[family-name:var(--font-plus-jakarta)]">
                    {Object.entries(MENU_TIERS).map(([key, value]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedTier(key)}
                        className={`p-4 text-left border rounded-2xl transition-all active:scale-95 flex flex-col justify-between h-40 ${
                          selectedTier === key 
                            ? 'bg-[#FCFBF9] border-[#1E3F20] shadow-md ring-2 ring-[#1E3F20]/15' 
                            : 'bg-white border-[#E8EFE9] text-[#1E3F20]/75 hover:border-[#1E3F20]/30 hover:bg-[#FCFBF9]'
                        }`}
                      >
                        <div className="w-full">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-[10px] tracking-wider uppercase font-extrabold text-[#556B2F]">
                              {key === 'rajasa' ? 'Royal' : key === 'vaibhav' ? 'Premium' : 'Standard'}
                            </span>
                            {selectedTier === key && <Check className="w-4 h-4 text-[#1E3F20] fill-[#1E3F20]/10" />}
                          </div>
                          <span className="text-sm font-bold text-[#1E3F20] block mt-1 leading-tight">
                            {value.name.split(' (')[0]}
                          </span>
                          <span className="text-[10px] text-[#1E3F20]/65 mt-1 block leading-normal line-clamp-2">
                            {value.desc}
                          </span>
                        </div>
                        <div className="mt-4">
                          <span className="text-lg font-extrabold text-[#1E3F20]">₹{value.platePrice}</span>
                          <span className="text-[9px] text-[#1E3F20]/60 uppercase ml-1">/ plate</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Guest Count Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3 font-[family-name:var(--font-plus-jakarta)]">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1E3F20]">
                      Step 3: Guest Count
                    </label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number"
                        min="50"
                        max="1500"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Math.min(1500, Math.max(50, Number(e.target.value))))}
                        className="w-20 px-2 py-1 text-center font-bold text-sm border border-[#E8EFE9] bg-[#FCFBF9] text-[#1E3F20] rounded-lg focus:outline-none focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20]"
                      />
                      <span className="text-xs text-[#1E3F20]/60 uppercase font-semibold">Guests</span>
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <input 
                      type="range"
                      min="50"
                      max="1500"
                      step="25"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#E8EFE9] rounded-lg appearance-none cursor-pointer accent-[#1E3F20]"
                    />
                    <div className="flex justify-between text-[10px] text-[#1E3F20]/50 font-bold uppercase mt-2.5 font-[family-name:var(--font-plus-jakarta)]">
                      <span>50 Guests</span>
                      <span>500</span>
                      <span>1000</span>
                      <span>1500 Guests</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Output Invoice / Estimator Breakdown */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Proposal Breakdown */}
              <div className="bg-[#1E3F20] text-[#FCFBF9] p-6 sm:p-8 rounded-[32px] border border-[#1E3F20]/20 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path d="M50,0 C75,25 75,75 50,100 C25,75 25,25 50,0 Z" />
                  </svg>
                </div>

                <div className="border-b border-white/10 pb-4 mb-5">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#E8EFE9]">ESTIMATE INVOICE</span>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-white mt-1">Feast Proposal</h3>
                </div>

                <div className="space-y-4 text-xs font-[family-name:var(--font-plus-jakarta)] border-b border-white/10 pb-5 mb-5">
                  <div className="flex justify-between text-[#FCFBF9]/80">
                    <span>Base Menu Cost ({guestCount} guests × ₹{plateCost})</span>
                    <span className="font-bold text-white">₹{baseCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#FCFBF9]/80">
                    <span>Traditional Servers ({serverCount} staff)</span>
                    <span className="font-bold text-white">₹{serviceStaffCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#FCFBF9]/80">
                    <span>Farmer Support Levy (2%)</span>
                    <span className="font-bold text-white">₹{farmLevy.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#FCFBF9]/80">
                    <span>Service Tax & GST (5%)</span>
                    <span className="font-bold text-white">₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline font-[family-name:var(--font-plus-jakarta)] mb-6">
                  <span className="text-sm font-bold text-[#E8EFE9]">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#FCFBF9]">₹{totalCost.toLocaleString('en-IN')}</span>
                    <span className="block text-[9px] text-[#E8EFE9]/65 mt-0.5 tracking-wider uppercase font-bold">Inclusive of taxes</span>
                  </div>
                </div>

                <a 
                  href="#booking"
                  className="w-full inline-flex justify-center items-center py-3.5 px-6 bg-white hover:bg-[#FCFBF9] text-[#1E3F20] text-xs font-bold tracking-widest uppercase rounded-full shadow transition-all duration-200 active:scale-95 font-[family-name:var(--font-plus-jakarta)]"
                >
                  <span>Lock in this Estimate</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Menu Preview */}
              <div className="bg-[#E8EFE9]/40 p-6 rounded-[24px] border border-[#E8EFE9] flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] mb-4 font-[family-name:var(--font-plus-jakarta)] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#1E3F20]" />
                  <span>Curated Menu Preview ({tierInfo.name.split(' (')[0]})</span>
                </h4>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                  {tierInfo.dishes.map((dish, i) => (
                    <div key={i} className="flex gap-2.5 pb-3 border-b border-[#E8EFE9] last:border-b-0 font-[family-name:var(--font-plus-jakarta)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3F20] shrink-0 mt-1.5" />
                      <div>
                        <h5 className="text-xs font-bold text-[#1E3F20]">{dish.name}</h5>
                        <p className="text-[10px] text-[#1E3F20]/70 leading-normal mt-0.5">{dish.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Signature Dishes Grid */}
      <section id="signature" className="py-20 bg-[#FCFBF9] border-t border-b border-[#E8EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[#556B2F] text-xs tracking-[0.25em] uppercase font-bold block mb-4 font-[family-name:var(--font-plus-jakarta)]">CULINARY MASTERPIECES</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20]">
                Signature Banquet Delicacies
              </h2>
            </div>
            <p className="font-[family-name:var(--font-plus-jakarta)] text-xs sm:text-sm text-[#1E3F20]/70 max-w-sm mt-4 md:mt-0 leading-relaxed">
              Dishes crafted by Chef Sri Venkatachari that have become legends across weddings in Uppal and Secunderabad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-[family-name:var(--font-plus-jakarta)]">
            
            {/* Dish 1 */}
            <div className="bg-white rounded-[24px] border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden bg-[#E8EFE9] relative">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400"
                  alt="Gutti Vankaya Kura"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 z-10 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-full">
                  Heritage Icon
                </span>
              </div>
              <div className="p-5">
                <span className="text-[9px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Entree</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-playfair)]">Gutti Vankaya Kura</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Baby brinjals cooked in a slow copper cauldron with stone-ground roasted peanuts, sesame, and fresh dry chillies.
                </p>
                <div className="text-[10px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5 fill-[#556B2F]/10" />
                  <span>Sourced from Ranga Reddy Organic Farm</span>
                </div>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-white rounded-[24px] border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden bg-[#E8EFE9] relative">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400"
                  alt="Avakaya Dum Biryani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 z-10 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-full">
                  House Special
                </span>
              </div>
              <div className="p-5">
                <span className="text-[9px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Main Course</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-playfair)]">Avakaya Dum Biryani</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Aromatic basmati rice layered with tangy home-made mango pickle, fresh garden vegetables, and soft local cottage cheese.
                </p>
                <div className="text-[10px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5 fill-[#556B2F]/10" />
                  <span>Wood-fired preparation</span>
                </div>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-white rounded-[24px] border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden bg-[#E8EFE9] relative">
                <img 
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400"
                  alt="Elaneer Payasam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 z-10 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-full">
                  Guest Favorite
                </span>
              </div>
              <div className="p-5">
                <span className="text-[9px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Dessert</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-playfair)]">Elaneer Payasam</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Decadent chilled milk dessert sweetened naturally and cooked with fresh tender coconut water scrapings and saffron.
                </p>
                <div className="text-[10px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5 fill-[#556B2F]/10" />
                  <span>Contains Zero Artificial Sugar</span>
                </div>
              </div>
            </div>

            {/* Dish 4 */}
            <div className="bg-white rounded-[24px] border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden bg-[#E8EFE9] relative">
                <div className="w-full h-full bg-[#E8EFE9] flex items-center justify-center text-[#1E3F20]/45">
                  <Utensils className="w-12 h-12" />
                </div>
                <span className="absolute top-4 left-4 z-10 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-full">
                  New Addition
                </span>
              </div>
              <div className="p-5">
                <span className="text-[9px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Dessert</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-playfair)]">Gold Saffron Kaja</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Traditional layered pastry, hand-rolled in local ghee, fried crisp and soaked in saffron syrup decorated with silver varq.
                </p>
                <div className="text-[10px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5 fill-[#556B2F]/10" />
                  <span>100% pure organic ghee</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FCFBF9] via-[#E8EFE9]/30 to-[#FCFBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#556B2F] text-xs tracking-[0.25em] uppercase font-bold block mb-4 font-[family-name:var(--font-plus-jakarta)]">CLIENT HEARTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20]">
              Loved Across Hyderabad
            </h2>
            <p className="text-xs sm:text-sm text-[#1E3F20]/70 font-[family-name:var(--font-plus-jakarta)] mt-2">
              Don’t take our word for it. Read the experiences of families and organizations in Uppal, Gachibowli, and Secunderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 font-[family-name:var(--font-plus-jakarta)]">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#E8EFE9] shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1E3F20]/80 leading-relaxed mb-6 italic">
                  "We booked Shri Lakshmi Caterers for my daughter's wedding at Uppal. The guest list was 800+ and every single person was talking about the Gutti Vankaya and Apricot Delight. Impeccable hygiene and service!"
                </p>
              </div>
              <div className="border-t border-[#E8EFE9] pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1E3F20]">Raghavendra Rao</h4>
                  <span className="text-[10px] text-[#556B2F] uppercase font-bold tracking-wider">Uppal, Hyderabad</span>
                </div>
                <span className="text-[10px] text-[#1E3F20]/50 font-medium">Wedding client</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#E8EFE9] shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1E3F20]/80 leading-relaxed mb-6 italic">
                  "For our housewarming in Gachibowli, they provided a fully customized traditional spread. The live appam counter was the highlight. Pure, authentic ghee taste that took me back to my childhood."
                </p>
              </div>
              <div className="border-t border-[#E8EFE9] pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1E3F20]">Ananya Reddy</h4>
                  <span className="text-[10px] text-[#556B2F] uppercase font-bold tracking-wider">Gachibowli, Hyd</span>
                </div>
                <span className="text-[10px] text-[#1E3F20]/50 font-medium">Housewarming client</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#E8EFE9] shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1E3F20]/80 leading-relaxed mb-6 italic">
                  "Corporate lunch for 200 delegates in Secunderabad. They were super organized. Extremely clean setup, professional servers, and the food was outstanding. Highly recommend the Biryani."
                </p>
              </div>
              <div className="border-t border-[#E8EFE9] pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1E3F20]">Karthik Ram</h4>
                  <span className="text-[10px] text-[#556B2F] uppercase font-bold tracking-wider">Secunderabad</span>
                </div>
                <span className="text-[10px] text-[#1E3F20]/50 font-medium">HR Director</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking / Consultation Form */}
      <section id="booking" className="py-20 bg-[#FCFBF9] border-t border-[#E8EFE9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[40px] border border-[#E8EFE9] shadow-sm overflow-hidden p-6 sm:p-10 relative">
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
              <Leaf className="w-12 h-12 text-[#1E3F20] fill-[#1E3F20]/15" />
            </div>

            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#556B2F] text-[10px] tracking-[0.25em] uppercase font-bold block mb-2 font-[family-name:var(--font-plus-jakarta)]">SECURE YOUR DATE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-playfair)] text-[#1E3F20]">
                Schedule Tasting & Consultation
              </h2>
              <p className="text-xs text-[#1E3F20]/70 mt-2 font-[family-name:var(--font-plus-jakarta)] leading-normal">
                Let us know your event size and date. Our event curator will call you back within 24 hours to schedule a complimentary tasting.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-[#E8EFE9]/50 border border-[#E8EFE9] p-8 rounded-3xl text-center flex flex-col items-center gap-4 py-12 animate-fade-in font-[family-name:var(--font-plus-jakarta)]">
                <div className="w-12 h-12 rounded-full bg-[#1E3F20] text-[#FCFBF9] flex items-center justify-center shadow-md shadow-[#1E3F20]/10">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E3F20]">Namaste! Your Consultation Request is Saved</h3>
                  <p className="text-xs text-[#1E3F20]/75 mt-2 leading-relaxed max-w-sm mx-auto">
                    We have successfully received your request. An event manager from Shri Lakshmi will call you at <strong className="text-[#1E3F20]">{formData.phone}</strong> shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 px-6 py-2.5 border border-[#1E3F20] text-[#1E3F20] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#1E3F20] hover:text-white transition-all active:scale-95"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-[family-name:var(--font-plus-jakarta)]">
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1E3F20] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E3F20]/40">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Sri Venkat"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-xl focus:outline-none focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] transition-colors ${
                          errors.name ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[10px] text-red-600 mt-1.5 font-semibold flex items-center gap-1">
                        <span>●</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1E3F20] mb-2">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E3F20]/40">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9848022131"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-xl focus:outline-none focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] transition-colors ${
                          errors.phone ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-red-600 mt-1.5 font-semibold flex items-center gap-1">
                        <span>●</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1E3F20] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E3F20]/40">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="venkat@gwd.com"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-xl focus:outline-none focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] transition-colors ${
                          errors.email ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] text-red-600 mt-1.5 font-semibold flex items-center gap-1">
                        <span>●</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="date" className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1E3F20] mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E3F20]/40">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-xl focus:outline-none focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] transition-colors ${
                          errors.date ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[10px] text-red-600 mt-1.5 font-semibold flex items-center gap-1">
                        <span>●</span> {errors.date}
                      </p>
                    )}
                  </div>

                </div>

                {/* Notes Input */}
                <div>
                  <label htmlFor="notes" className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1E3F20] mb-2">
                    Event Notes / Special Requests (Optional)
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="E.g., Onion-garlic free requests, traditional Brahmin style serving, specific live counter requirements..."
                    className="w-full px-4 py-3 bg-[#FCFBF9] border border-[#E8EFE9] text-xs text-[#1E3F20] rounded-xl focus:outline-none focus:border-[#1E3F20] focus:ring-1 focus:ring-[#1E3F20] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center items-center px-10 py-4 bg-[#1E3F20] hover:bg-[#2c582f] disabled:bg-[#1E3F20]/50 text-[#FCFBF9] text-xs font-bold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        <span>Reserving Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#1E3F20] text-[#FCFBF9] pt-16 pb-8 border-t border-[#1E3F20]/30 font-[family-name:var(--font-plus-jakarta)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-[#E8EFE9] fill-[#E8EFE9]/10" />
              <span className="text-lg font-bold font-[family-name:var(--font-playfair)] tracking-wide text-white">Shri Lakshmi Caterers</span>
            </div>
            <p className="text-xs text-[#E8EFE9]/70 leading-relaxed max-w-xs">
              Uppal’s trusted traditional B2B/B2C event catering partner. We bring authenticity, hygiene, and wood-fired flavor to weddings and celebrations in Hyderabad.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Connect With Us</h4>
            <ul className="space-y-3 text-xs text-[#E8EFE9]/75">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href="tel:+919848022131" className="hover:text-white transition-colors">+91 98480 22131</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href="tel:+914027204545" className="hover:text-white transition-colors">+91 40 2720 4545</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href="mailto:blessings@shrilakshmicaterers.com" className="hover:text-white transition-colors">blessings@shrilakshmicaterers.com</a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Our Kitchen Location</h4>
            <div className="flex items-start gap-2 text-xs text-[#E8EFE9]/75">
              <MapPin className="w-4.5 h-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Plot No. 42, Raghavendra Nagar, <br />
                Near Uppal Metro Station, <br />
                Uppal, Hyderabad, Telangana - 500039
              </p>
            </div>
            <p className="text-[10px] text-[#E8EFE9]/60 italic pl-6">
              Visitors welcome by prior appointment for tasting sessions.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#E8EFE9]/60">
          <p>© 2026 Shri Lakshmi Caterers Uppal. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0 font-bold uppercase tracking-wider">
            <a href="#heritage" className="hover:text-white transition-colors">Legacy</a>
            <a href="#customizer" className="hover:text-white transition-colors">Menu Customizer</a>
            <a href="#booking" className="hover:text-white transition-colors">Book Consultation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

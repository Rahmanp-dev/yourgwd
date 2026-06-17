"use client";

import React, { useState } from 'react';
import { 
  ChefHat, 
  ShieldCheck, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Check, 
  Utensils, 
  Flame, 
  Award, 
  Sparkles,
  Calendar,
  DollarSign,
  ArrowRight,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

export default function JyothiCaterersPage() {
  // Menu Customizer / Estimator State
  const [eventType, setEventType] = useState('Corporate');
  const [guestCount, setGuestCount] = useState(200);
  const [menuTier, setMenuTier] = useState('Premium');

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '200',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Pricing Logic
  const tierPrices = {
    Standard: 500,
    Premium: 800,
    Royal: 1350
  };

  const eventMultipliers = {
    Corporate: 1.1,
    Birthday: 1.0,
    Wedding: 1.25
  };

  const getPricePerPlate = () => {
    const base = tierPrices[menuTier] || 500;
    const mult = eventMultipliers[eventType] || 1.0;
    return Math.round(base * mult);
  };

  const getEstimatedTotal = () => {
    return getPricePerPlate() * guestCount;
  };

  // Mock Menu Items
  const menuOptions = {
    Standard: {
      name: "Executive Platter Choice",
      drinks: ["Kiwi Mint Cooler", "Traditional Spiced Buttermilk"],
      appetizers: ["Paneer Majestic", "Crispy Veg Spring Rolls", "Spiced Corn Kernel Fry"],
      mains: ["Yellow Dal Tadka", "Classic Paneer Butter Masala", "Gourmet Veg Fried Rice", "Butter Naan & Roti", "Steamed Basmati Rice"],
      desserts: ["Traditional Kaddu Ka Kheer", "Vanilla Ice Cream with Hot Fudge Sauce"]
    },
    Premium: {
      name: "Signature Fusion Feast",
      drinks: ["Cranberry Spritzer", "Fresh Sweet Lime Juice", "Chilled Badam Thandai"],
      appetizers: ["Paneer Satay with Peanut Dip", "Special Veg Galouti Kabab", "Crispy Honey Chilli Lotus Stem", "Smoky Chilli Garlic Mushroom"],
      mains: ["Kashmiri Dum Aloo", "Paneer Tikka Masala", "Nizami Vegetable Handi", "Aromatic Jeera Rice", "Hyderabadi Veg Dum Biryani", "Assorted Premium Naan, Roti & Stuffed Kulcha"],
      desserts: ["Signature Apricot Delight with Ice Cream", "Sweet Angoori Rabdi", "Warm Carrot Halwa"]
    },
    Royal: {
      name: "Royal Gourmet Banquet",
      drinks: ["Rose Petal Mojito", "Blue Curacao Fizz", "Royal Saffron Pista Lassi"],
      appetizers: ["Truffle Charcoal Grilled Paneer", "Avocado Beetroot Tikki", "Exotic Mushroom Croquettes", "Jyothi Signature Veg Kebab Platter", "Crispy Sesame Babycorn"],
      mains: ["Rich Paneer Pasanda", "Kofta Dil Khush in Cashew Gravy", "Slow Cooked Dal Bukhara", "Zafrani Kashmiri Pulao", "Jyothi Signature Royal Veg Dum Biryani", "Assorted Artisanal Breads Basket", "Mirchi Ka Salan & Cucumber Raita"],
      desserts: ["Classic Shahi Tukda with Rabdi", "Baked Gulab Jamun Tart", "Gourmet Fresh Fruit Skewers with Chocolate Fountain"]
    }
  };

  const currentMenu = menuOptions[menuTier];

  // Signature Dishes
  const signatureDishes = [
    {
      name: "Paneer Satay with Peanut Dip",
      type: "Veg",
      desc: "Skewered cottage cheese strips grilled with fusion spices, accompanied by a rich roasted peanut dipping sauce.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jyothi Elite Dum Biryani",
      type: "Veg",
      desc: "Fragrant basmati rice cooked with fresh seasonal vegetables, cardamoms, and saffron, under traditional dough seal.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Avocado Beetroot Tikki",
      type: "Veg",
      desc: "Healthy and delicious cutlets made of fresh avocado, beetroots, and hand-crushed spices, pan-fried to crisp perfection.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Baked Gulab Jamun Tart",
      type: "Veg",
      desc: "A contemporary fusion dessert comprising warm mini gulab jamuns baked inside a buttery shortcrust pastry shell with rabdi.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Chaitanya K.",
      location: "Uppal, Hyderabad",
      text: "Jyothi Caterers handled our annual corporate celebration in Uppal. Outstanding fusion appetizers and very neat setup. Highly recommend their Signature Fusion package!",
      rating: 5
    },
    {
      name: "Aishwarya M.",
      location: "Gachibowli, Hyderabad",
      text: "We hired them for a premium birthday party. The guest count slider on their preview site gave us an exact budget. The Avocado Tikki and dessert tarts were fantastic.",
      rating: 5
    },
    {
      name: "Nikhil G.",
      location: "Secunderabad, Hyderabad",
      text: "Impeccable service and staff! Professional, punctual, and the food was delicious. Live counters were the highlight of the wedding.",
      rating: 4
    }
  ];

  // Form Validation and Submit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    else if (formData.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit Indian phone number';
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

    if (!formData.guests || parseInt(formData.guests) < 10) {
      errors.guests = 'Guest count must be at least 10';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '200',
        message: ''
      });
      // Auto-hide success notification after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen font-sans bg-[#F4F8FC] text-[#2C3E50] overflow-hidden selection:bg-[#3498DB]/20 selection:text-[#2980B9]">
      
      {/* Decorative Pastel Blur Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-[#D6EAF8]/40 to-[#EBF5FB]/60 rounded-full blur-[110px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[-15%] w-[650px] h-[650px] bg-gradient-to-bl from-[#FDEDEC]/30 to-[#E8F8F5]/40 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-br from-[#FCF3CF]/30 to-[#EAFAF1]/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10">
        
        {/* Header/Navbar */}
        <header className="border-b border-white/40 bg-white/40 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3498DB] to-[#1ABC9C] flex items-center justify-center shadow-lg shadow-[#3498DB]/20">
                <ChefHat className="text-white" size={20} />
              </div>
              <div>
                <span className="font-outfit font-black text-lg tracking-tight block text-[#2C3E50]">JYOTHI</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#1ABC9C] block mt-[-2px]">Caterers & Kitchen</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500">
              <a href="#about" className="hover:text-[#3498DB] transition-colors">Our Story</a>
              <a href="#estimator" className="hover:text-[#3498DB] transition-colors">Customizer</a>
              <a href="#signatures" className="hover:text-[#3498DB] transition-colors">Signatures</a>
              <a href="#testimonials" className="hover:text-[#3498DB] transition-colors">Reviews</a>
            </nav>

            <div>
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#3498DB] to-[#1ABC9C] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#3498DB]/20 hover:shadow-lg hover:shadow-[#3498DB]/30 hover:translate-y-[-1px] active:scale-95 transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2980B9] text-xs font-bold">
                <Sparkles size={14} />
                <span>Modern Multi-Cuisine Catering in Hyderabad</span>
              </div>
              
              <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-black text-[#2C3E50] leading-[1.15]">
                Crafting Culinary <br />
                <span className="bg-gradient-to-r from-[#3498DB] to-[#1ABC9C] bg-clip-text text-transparent">
                  Fusion & Elegance
                </span>
              </h1>
              
              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
                Elevate your special moments. Jyothi Caterers brings contemporary gourmet setups, live live counters, and high hygiene standards directly to your events in Uppal.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#estimator" 
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#3498DB] to-[#1ABC9C] text-white font-bold text-sm shadow-lg shadow-[#3498DB]/20 hover:shadow-xl hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Configure Menu <ArrowRight size={16} />
                </a>
                <a 
                  href="#consultation" 
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/70 hover:bg-white/95 text-gray-700 font-bold text-sm border border-gray-200/80 hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                </a>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200/50 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-[#2C3E50] font-outfit">15+</span>
                  <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Years Exp</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-[#2C3E50] font-outfit">1,200+</span>
                  <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Events Served</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-[#2C3E50] font-outfit">4.8★</span>
                  <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Rating</span>
                </div>
              </div>
            </div>

            {/* Hero Right Images Grid - Geometric Frosted Panels */}
            <div className="lg:col-span-5 relative">
              <div className="relative p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-2xl shadow-blue-900/5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-3 pt-6">
                    <div className="rounded-2xl overflow-hidden shadow-md h-52 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Gourmet Buffet" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Signature Setup</span>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Catering Service" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden shadow-md h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Gourmet Dish" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md h-52">
                      <img 
                        src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Desserts Selection" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Frosted Pill */}
                <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md border border-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block leading-none uppercase">Certified</span>
                    <span className="text-xs font-black text-gray-800 leading-none">Hygiene Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story / Heritage */}
        <section id="about" className="py-20 bg-gradient-to-b from-transparent to-[#EBF3FB]/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Frosted Badge Gallery */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/60 shadow-xl relative bg-white/30 backdrop-blur-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern Chef Assembling Dishes" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#EBF3FB] via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Absolute Badge */}
                  <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-xl max-w-[200px] text-center">
                    <Award className="mx-auto text-[#3498DB] mb-2" size={32} />
                    <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest block">Quality First</span>
                    <p className="text-[11px] text-gray-600 font-semibold mt-1">Farm-to-Table Fresh Ingredients Daily</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs tracking-widest uppercase font-extrabold text-[#3498DB] block">Modern Cooking Legacy</span>
                
                <h2 className="font-outfit text-3xl md:text-4xl font-black text-[#2C3E50] leading-snug">
                  Elite Multi-Cuisine Catering Reimagined in Uppal
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  Jyothi Caterers represents the vanguard of modern catering in Hyderabad. With over 15 years of culinary expertise, we fuse traditional Hyderabadi culinary heritage with global cuisines. Our service systems are designed to deliver warm, flavorful, and beautiful dining options.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We pride ourselves on our client-focused customizer, transparent pricing, and spotless operations. Whether it is a boutique wedding in Gachibowli, corporate lunches in Madhapur, or grand family functions in Uppal, our team is equipped to host up to 2,500 guests with flawless hospitality.
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Elite Live Counters</h4>
                      <p className="text-xs text-gray-500">Interactive dining setups for appetizers & mocktails.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Dynamic Menu Selection</h4>
                      <p className="text-xs text-gray-500">Easily swap dishes to fit themes and preferences.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Clean Food Pledge</h4>
                      <p className="text-xs text-gray-500">Strict vegetable washing & water purification systems.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Professional Staff</h4>
                      <p className="text-xs text-gray-500">Uniformed, trained hospitality servers and managers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Customizer / Estimator */}
        <section id="estimator" className="py-20 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs tracking-widest uppercase font-extrabold text-[#3498DB] block">Interactive Estimator</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-black text-[#2C3E50]">Menu Planner & Cost Calculator</h2>
            <p className="text-gray-500">Choose your event layout, size, and cuisine configuration. Adjust the options below to get an instant cost projection.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Estimator Controls (Glass Card) */}
            <div className="lg:col-span-7 bg-white/50 backdrop-blur-md border border-white/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              
              {/* Event Type */}
              <div className="space-y-3">
                <label className="text-xs uppercase font-extrabold text-gray-500 tracking-wider block">1. Choose Event Format</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Corporate', 'Birthday', 'Wedding'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`py-3 px-4 text-xs font-extrabold rounded-xl border text-center transition-all duration-200 active:scale-95 ${
                        eventType === type
                          ? 'bg-gradient-to-tr from-[#3498DB] to-[#1ABC9C] text-white border-transparent shadow-md shadow-[#3498DB]/20'
                          : 'bg-white/60 text-gray-600 border-gray-200/80 hover:bg-white/90'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase font-extrabold text-gray-500 tracking-wider">2. Guest Count Scale</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Math.max(10, Math.min(3000, parseInt(e.target.value) || 0)))}
                      className="w-20 px-2.5 py-1 text-center font-mono font-bold text-sm bg-white/70 border border-gray-200/80 rounded-lg text-gray-800 outline-none focus:border-[#3498DB]"
                      min="10"
                      max="3000"
                    />
                    <span className="text-xs font-bold text-gray-400">Guests</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-400">50</span>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200/60 rounded-lg appearance-none cursor-pointer accent-[#3498DB]"
                  />
                  <span className="text-xs font-bold text-gray-400">1500+</span>
                </div>
              </div>

              {/* Menu Tier */}
              <div className="space-y-3 pt-2">
                <label className="text-xs uppercase font-extrabold text-gray-500 tracking-wider block">3. Select Menu Tier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'Standard', title: 'Executive Platters', price: 500, badge: 'Daily corporate' },
                    { id: 'Premium', title: 'Signature Fusion', price: 800, badge: 'Highly recommended' },
                    { id: 'Royal', title: 'Royal Gourmet', price: 1350, badge: 'Lavish events' }
                  ].map(tier => (
                    <div
                      key={tier.id}
                      onClick={() => setMenuTier(tier.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        menuTier === tier.id
                          ? 'bg-[#3498DB]/5 border-[#3498DB] shadow-md shadow-[#3498DB]/5'
                          : 'bg-white/40 border-gray-200/80 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[9px] uppercase font-black px-1.5 py-0.5 rounded ${
                          menuTier === tier.id ? 'bg-[#3498DB]/20 text-[#2980B9]' : 'bg-gray-200/60 text-gray-500'
                        }`}>
                          {tier.badge}
                        </span>
                        {menuTier === tier.id && <div className="w-2 h-2 rounded-full bg-[#3498DB]"></div>}
                      </div>
                      <h4 className="text-xs font-black text-gray-800 block">{tier.title}</h4>
                      <div className="mt-2 flex items-baseline gap-0.5">
                        <span className="text-sm font-black text-gray-800 font-mono">₹{tier.price}</span>
                        <span className="text-[9px] text-gray-400 font-bold">/ plate</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Summary */}
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/40 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-extrabold text-[#2980B9] tracking-wider block">Estimated Price / Plate</span>
                  <span className="text-2xl font-black font-mono text-[#2C3E50]">₹{getPricePerPlate()}</span>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-[10px] uppercase font-extrabold text-[#2980B9] tracking-wider block">Estimated Total Cost</span>
                  <span className="text-3xl font-black font-mono text-[#3498DB]">
                    ₹{getEstimatedTotal().toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Menu Items Preview (Glass Card) */}
            <div className="lg:col-span-5 bg-white/60 backdrop-blur-md border border-white/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-[#3498DB] tracking-wider block">Real-time Custom Menu Preview</span>
                <h3 className="font-outfit text-xl font-black text-gray-800 mt-1">{currentMenu.name}</h3>
              </div>

              {/* Drinks */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-teal-700 tracking-widest flex items-center gap-1.5">
                  <Flame size={12} /> Welcome Drinks
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.drinks.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1ABC9C]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Appetizers */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-teal-700 tracking-widest flex items-center gap-1.5">
                  <Utensils size={12} /> Appetizers
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.appetizers.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1ABC9C]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mains */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-teal-700 tracking-widest flex items-center gap-1.5">
                  <ChefHat size={12} /> Main Course
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.mains.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1ABC9C]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desserts */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-teal-700 tracking-widest flex items-center gap-1.5">
                  <Star size={12} /> Sweet Indulgences
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.desserts.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1ABC9C]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a 
                  href="#consultation" 
                  className="w-full py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs shadow-md hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Apply Menu Settings
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Dishes Grid */}
        <section id="signatures" className="py-20 bg-gradient-to-t from-transparent to-[#EBF3FB]/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs tracking-widest uppercase font-extrabold text-[#3498DB] block">Chef Curated</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-black text-[#2C3E50]">Popular Signature Dishes</h2>
              <p className="text-gray-500">Explore the signature multi-cuisine recipes that define our reputation in Hyderabad.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signatureDishes.map((dish, index) => (
                <div 
                  key={index} 
                  className="group bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-[#1ABC9C] text-white px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      {dish.type}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-outfit text-lg font-bold text-gray-800 leading-snug">{dish.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Consultation Form */}
        <section id="consultation" className="py-20 max-w-3xl mx-auto px-6">
          <div className="bg-white/50 backdrop-blur-md border border-white/60 p-6 sm:p-10 rounded-3xl shadow-xl space-y-8 relative">
            
            {/* Form Header */}
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-700 mx-auto flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-gray-800">Schedule Virtual Consult</h2>
              <p className="text-sm text-gray-500">Lock in your event dates. Receive customized estimates from our banquet coordinators.</p>
            </div>

            {submitSuccess && (
              <div className="p-4 rounded-xl bg-green-50/70 border border-green-200/50 flex items-start gap-3 text-green-800 animate-slide-up">
                <ThumbsUp className="mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold">Booking Request Logged!</h4>
                  <p className="text-xs text-green-700 mt-1">We will contact you via email and phone with a complete custom invoice proposal shortly.</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="name">Full Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/70 border rounded-xl text-sm text-gray-800 outline-none transition-all ${
                      formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#3498DB]'
                    }`}
                    placeholder="Enter full name"
                  />
                  {formErrors.name && (
                    <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                      <AlertCircle size={12} />
                      <span>{formErrors.name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="email">Email Address *</label>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/70 border rounded-xl text-sm text-gray-800 outline-none transition-all ${
                        formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#3498DB]'
                      }`}
                      placeholder="email@domain.com"
                    />
                    {formErrors.email && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        <span>{formErrors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="phone">Phone Number *</label>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/70 border rounded-xl text-sm text-gray-800 outline-none transition-all ${
                        formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#3498DB]'
                      }`}
                      placeholder="10-digit mobile number"
                    />
                    {formErrors.phone && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        <span>{formErrors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Row: Date & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="date">Event Date *</label>
                  <div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/70 border rounded-xl text-sm text-gray-800 outline-none transition-all ${
                        formErrors.date ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#3498DB]'
                      }`}
                    />
                    {formErrors.date && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        <span>{formErrors.date}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Guest Count */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="guests">Approx Guests *</label>
                  <div>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/70 border rounded-xl text-sm text-gray-800 outline-none transition-all ${
                        formErrors.guests ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#3498DB]'
                      }`}
                      min="10"
                    />
                    {formErrors.guests && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        <span>{formErrors.guests}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="message">Catering Preferences / Notes</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#3498DB] transition-all"
                  placeholder="Describe your theme, live counter requirements, or general menu questions..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3498DB] to-[#1ABC9C] text-white font-bold text-sm shadow-lg shadow-[#3498DB]/20 hover:shadow-xl hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Proposal...</span>
                    </>
                  ) : (
                    <span>Submit Consultation Booking</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-transparent to-[#EBF3FB]/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs tracking-widest uppercase font-extrabold text-[#3498DB] block">Client Reviews</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-black text-[#2C3E50]">What Our Guests Say</h2>
              <p className="text-gray-500">Read the experiences of hosts and organizations across major locations in Hyderabad.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/50 backdrop-blur-sm border border-white/60 p-6 rounded-2xl shadow-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex gap-1 text-[#3498DB]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < test.rating ? 'currentColor' : 'none'} 
                          className={i < test.rating ? '' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 italic leading-relaxed">&quot;{test.text}&quot;</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200/50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3498DB]/10 flex items-center justify-center text-[#2980B9] font-bold text-xs">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-800">{test.name}</h4>
                      <span className="text-[10px] text-gray-400 font-bold block">{test.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Details Footer */}
        <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200/50 pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-200/50">
            
            {/* Branding Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3498DB] flex items-center justify-center text-white">
                  <ChefHat size={16} />
                </div>
                <div>
                  <span className="font-outfit font-black text-sm text-gray-800 block">JYOTHI CATERERS</span>
                  <span className="text-[9px] tracking-wider uppercase font-bold text-[#1ABC9C] block mt-[-2px]">Multi-Cuisine Specialists</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                Premium multi-cuisine catering solutions with contemporary live counter designs and high standards of cleanliness. Providing catering throughout Hyderabad since 2011.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-500">
                <li><a href="#about" className="hover:text-[#3498DB] transition-colors">Our Legacy</a></li>
                <li><a href="#estimator" className="hover:text-[#3498DB] transition-colors">Menu Planner</a></li>
                <li><a href="#signatures" className="hover:text-[#3498DB] transition-colors">Gourmet Curations</a></li>
                <li><a href="#consultation" className="hover:text-[#3498DB] transition-colors">Book Consult</a></li>
              </ul>
            </div>

            {/* Address / Contact Details */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest">Office & Catering Hub</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Location */}
                <div className="flex gap-2.5 items-start">
                  <MapPin className="text-[#3498DB] flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">Address</span>
                    <p className="text-xs text-gray-600 font-semibold leading-relaxed mt-0.5">
                      Plot No. 110, Ramanthapur Main Road,<br />
                      Opp. Little Flower Junior College,<br />
                      Uppal, Hyderabad - 500013
                    </p>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <Phone className="text-[#3498DB] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Customer Hotline</span>
                      <a href="tel:+919866122450" className="text-xs text-gray-600 font-semibold hover:text-[#3498DB] block mt-0.5">
                        +91 98661 22450
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 items-start">
                    <Mail className="text-[#3498DB] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Enquiry Inbox</span>
                      <a href="mailto:info@jyothicaterers.com" className="text-xs text-gray-600 font-semibold hover:text-[#3498DB] block mt-0.5">
                        info@jyothicaterers.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="max-w-6xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} Jyothi Caterers.</span>
            <span>B2B Client Preview Model</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

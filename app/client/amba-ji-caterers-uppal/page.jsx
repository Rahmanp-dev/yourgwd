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

export default function AmbaJiCaterersPage() {
  // Menu Customizer / Estimator State
  const [eventType, setEventType] = useState('Wedding');
  const [guestCount, setGuestCount] = useState(150);
  const [menuTier, setMenuTier] = useState('Premium');

  // Booking Form State
  const [formData, setFormData] = useState({
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

  // Pricing Logic
  const tierPrices = {
    Standard: 450,
    Premium: 750,
    Royal: 1250
  };

  const eventMultipliers = {
    Birthday: 1.0,
    Corporate: 1.15,
    Wedding: 1.25
  };

  const getPricePerPlate = () => {
    const base = tierPrices[menuTier] || 450;
    const mult = eventMultipliers[eventType] || 1.0;
    return Math.round(base * mult);
  };

  const getEstimatedTotal = () => {
    return getPricePerPlate() * guestCount;
  };

  // Mock Menu Items
  const menuOptions = {
    Standard: {
      name: "Utsav Standard Feast",
      drinks: ["Mint Lime Cooler", "Traditional Spiced Masala Chaas"],
      appetizers: ["Crispy Paneer Tikka", "Gobi 65", "Schezwan Veg Manchurian"],
      mains: ["Dal Makhani (Slow Cooked)", "Paneer Butter Masala", "Veg Dum Biryani", "Assorted Tandoori Bread Roti & Naan", "Steamed Basmati Rice"],
      desserts: ["Warm Gulab Jamun with Vanilla Ice Cream", "Hyderabadi Double Ka Meetha"]
    },
    Premium: {
      name: "Traditional Gold Banquet",
      drinks: ["Kesar Mango Lassi", "Tropical Fresh Fruit Punch", "Fresh Sweet Coconut Water"],
      appetizers: ["Amba Ji Khas Hara Bhara Kabab", "Achari Veg Mushroom Tikka", "Golden Fried Babycorn", "Tandoori Paneer Angara"],
      mains: ["Shahi Paneer Butter Masala", "Methi Chaman Korma", "Traditional Bagara Baingan", "Awadhi Dum Veg Biryani", "Mirchi Ka Salan & Raitha", "Assorted Butter Naan & Laccha Paratha"],
      desserts: ["Royal Qubani Ka Meetha with Fresh Custard", "Rich Moong Dal Halwa", "Kesaria Rasmalai"]
    },
    Royal: {
      name: "Panchamukhi Royal Grand Feast",
      drinks: ["Zafrani Badam Milk", "Signature Citrus Mocktail Bar", "Tender Coconut & Aloe Cooler"],
      appetizers: ["Royal Paneer Sufiyana Tikka", "Smoky Truffle Mushroom Galouti", "Charcoal Grilled Malai Broccoli", "Panchamukhi Shahi Seekh Kabab", "Crispy Amritsari Paneer Pakoda"],
      mains: ["Nawabi Paneer Lababdar", "Mughlai Kaju Veg Kofta", "Dal Pancharatna Ghee Tadka", "Shahi Kashmiri Saffron Pulao", "Hyderabadi Zafrani Dum Biryani (Long Grain)", "Gourmet Bread Basket (Tandoori, Roti, Naan, Paratha)", "Royal Cucumber Mint Raitha"],
      desserts: ["Classic Elaneer Payasam", "Baked Mihidana Tart with Rabdi", "Exotic Seasonal Cut Fruits Counter"]
    }
  };

  const currentMenu = menuOptions[menuTier];

  // Signature Dishes
  const signatureDishes = [
    {
      name: "Panchamukhi Special Dum Biryani",
      type: "Veg",
      desc: "Slow-cooked saffron basmati rice layered with garden vegetables and dry fruits in sealed handis.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Tandoori Paneer Angara",
      type: "Veg",
      desc: "Fresh cottage cheese chunks marinated in special spices and chargrilled to smoky perfection.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Royal Qubani Ka Meetha",
      type: "Veg",
      desc: "Traditional Hyderabadi stewed apricot dessert served with dollops of fresh dairy cream.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Panchamukhi Shahi Kaju Curry",
      type: "Veg",
      desc: "Whole cashew nuts cooked in a rich, velvety onion-tomato gravy with local spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajeshwar Rao",
      location: "Uppal, Hyderabad",
      text: "We booked Amba Ji Sri Panchamukhi Caterers for our daughter's wedding at a convention hall in Uppal. The food was outstanding! Especially the Dum Biryani and the Zafrani Badam Milk. Highly recommended for premium pure vegetarian traditional catering.",
      rating: 5
    },
    {
      name: "Sowmya Reddy",
      location: "Gachibowli, Hyderabad",
      text: "The hygiene standards maintained by their team during our housewarming ceremony were top-notch. From neat uniforms to eco-friendly serving layouts, they were absolute professionals. The Qubani Ka Meetha was a huge hit!",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      location: "Secunderabad, Hyderabad",
      text: "Authentic taste and incredible presentation. We ordered corporate lunch boxes for our leadership meet. The paneer and subzis were exceptionally fresh. The estimators on their site helped us budget precisely.",
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
        guests: '150',
        message: ''
      });
      // Auto-hide success notification after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen font-sans bg-[#FCFBF9] text-[#2C2C2C] overflow-hidden selection:bg-[#E5A93B]/20 selection:text-[#B8860B]">
      
      {/* Decorative Pastel Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#FCD5CE]/20 to-[#FAE1CF]/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#FFE5EC]/30 to-[#E8F0FE]/40 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-[#FCF3CF]/30 to-[#E6F4EA]/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10">
        
        {/* Header/Navbar */}
        <header className="border-b border-white/40 bg-white/40 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E5A93B] to-[#F1C40F] flex items-center justify-center shadow-lg shadow-[#E5A93B]/20">
                <ChefHat className="text-white" size={20} />
              </div>
              <div>
                <span className="font-serif font-black text-lg tracking-tight block text-[#1B1B1B]">AMBA JI</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-amber-700 block mt-[-2px]">Sri Panchamukhi</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
              <a href="#heritage" className="hover:text-[#E5A93B] transition-colors">Heritage</a>
              <a href="#estimator" className="hover:text-[#E5A93B] transition-colors">Menu Custome</a>
              <a href="#signatures" className="hover:text-[#E5A93B] transition-colors">Signatures</a>
              <a href="#testimonials" className="hover:text-[#E5A93B] transition-colors">Reviews</a>
            </nav>

            <div>
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5A93B] to-[#F1C40F] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#E5A93B]/20 hover:shadow-lg hover:shadow-[#E5A93B]/30 hover:translate-y-[-1px] active:scale-95 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#B8860B] text-xs font-bold">
                <Sparkles size={14} />
                <span>Premium Traditional Catering in Uppal</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#1B1B1B] leading-[1.15]">
                Grand Culinary <br />
                <span className="bg-gradient-to-r from-[#B8860B] to-[#E5A93B] bg-clip-text text-transparent">
                  Feasts of Heritage
                </span>
              </h1>
              
              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
                Honoring generational recipes under the sacred light of Panchamukhi tradition. We deliver authentic South and North Indian catering experiences customized to your celebrations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#estimator" 
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E5A93B] to-[#F1C40F] text-white font-bold text-sm shadow-lg shadow-[#E5A93B]/20 hover:shadow-xl hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Customize Menu <ArrowRight size={16} />
                </a>
                <a 
                  href="#consultation" 
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/70 hover:bg-white/95 text-gray-700 font-bold text-sm border border-gray-200/80 hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Free Consultation
                </a>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200/50 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-[#1B1B1B] font-serif">25+</span>
                  <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Years Legacy</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-[#1B1B1B] font-serif">10k+</span>
                  <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Happy Guests</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-[#1B1B1B] font-serif">100%</span>
                  <span className="text-[10px] uppercase font-extrabold text-gray-500 tracking-wider">Veg/Pure Ghee</span>
                </div>
              </div>
            </div>

            {/* Hero Right Images Grid - Asymmetrical Glassmorphic Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-2xl shadow-amber-900/5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden shadow-md h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Authentic Biryani" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md h-52 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Indian Feasts" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Grand Catering</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-6">
                    <div className="rounded-2xl overflow-hidden shadow-md h-52">
                      <img 
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Premium Platter" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="Indian Desserts" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Frosted Pill */}
                <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md border border-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block leading-none uppercase">Certified</span>
                    <span className="text-xs font-black text-gray-800 leading-none">FSSAI Hygiene Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story / Heritage */}
        <section id="heritage" className="py-20 bg-gradient-to-b from-transparent to-[#F7F4EC]/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Frosted Badge Gallery */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/60 shadow-xl relative bg-white/30 backdrop-blur-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Traditional Master Chef Cooking" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EC] via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Absolute Badge */}
                  <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-xl max-w-[200px] text-center">
                    <Award className="mx-auto text-[#E5A93B] mb-2" size={32} />
                    <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest block">Signature</span>
                    <p className="text-[11px] text-gray-600 font-semibold mt-1">Made with Pure Desi Ghee & Premium Spices</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs tracking-widest uppercase font-extrabold text-[#B8860B] block">Our Cooking Legacy</span>
                
                <h2 className="font-serif text-3xl md:text-4xl font-black text-[#1B1B1B] leading-snug">
                  Nourishing Generations in Uppal with Pure Flavors
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  Established with the vision of preserving ancient culinary arts, Amba Ji Sri Panchamukhi Caterers has been the heart of festive celebrations in Hyderabad. The name &apos;Panchamukhi&apos; symbolizes our commitment to five key values: purity, taste, authentic ingredients, impeccable hygiene, and warm hospitality.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our master chefs specialize in authentic Vedic cooking, offering menus rich with local ingredients sourced directly from farmers. From the bustling residential layouts of Uppal to the large convention hubs across Secunderabad, we bring the royal kitchen to your event.
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">ISO 22000 Certified</h4>
                      <p className="text-xs text-gray-500">Highest compliance standards in food safety.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Custom Recipe Drafting</h4>
                      <p className="text-xs text-gray-500">Every menu tailored to family custom requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Eco-Friendly Serving</h4>
                      <p className="text-xs text-gray-500">Biodegradable clay/leaf tableware options.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Bespoke Cookware</h4>
                      <p className="text-xs text-gray-500">Slow cooking in traditional brass & copper vessels.</p>
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
            <span className="text-xs tracking-widest uppercase font-extrabold text-[#B8860B] block">Interactive Estimator</span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-[#1B1B1B]">Bespoke Menu Architect</h2>
            <p className="text-gray-500">Select event format, scale, and catering style to craft a custom budget estimate and see your tailored menu items.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Estimator Controls (Glass Card) */}
            <div className="lg:col-span-7 bg-white/50 backdrop-blur-md border border-white/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              
              {/* Event Type */}
              <div className="space-y-3">
                <label className="text-xs uppercase font-extrabold text-gray-500 tracking-wider block">1. Select Event Style</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Wedding', 'Corporate', 'Birthday'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`py-3 px-4 text-xs font-extrabold rounded-xl border text-center transition-all duration-200 active:scale-95 ${
                        eventType === type
                          ? 'bg-gradient-to-tr from-[#E5A93B] to-[#F1C40F] text-white border-transparent shadow-md shadow-[#E5A93B]/20'
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
                  <label className="text-xs uppercase font-extrabold text-gray-500 tracking-wider">2. Guest Count</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Math.max(10, Math.min(2500, parseInt(e.target.value) || 0)))}
                      className="w-20 px-2.5 py-1 text-center font-mono font-bold text-sm bg-white/70 border border-gray-200/80 rounded-lg text-gray-800 outline-none focus:border-[#E5A93B]"
                      min="10"
                      max="2500"
                    />
                    <span className="text-xs font-bold text-gray-400">Guests</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-400">50</span>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200/60 rounded-lg appearance-none cursor-pointer accent-[#E5A93B]"
                  />
                  <span className="text-xs font-bold text-gray-400">1000+</span>
                </div>
              </div>

              {/* Menu Tier */}
              <div className="space-y-3 pt-2">
                <label className="text-xs uppercase font-extrabold text-gray-500 tracking-wider block">3. Select Menu Tier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'Standard', title: 'Utsav Standard', price: 450, badge: 'Classic Feasts' },
                    { id: 'Premium', title: 'Traditional Gold', price: 750, badge: 'Popular choice' },
                    { id: 'Royal', title: 'Royal Grand', price: 1250, badge: 'Exquisite luxury' }
                  ].map(tier => (
                    <div
                      key={tier.id}
                      onClick={() => setMenuTier(tier.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        menuTier === tier.id
                          ? 'bg-[#E5A93B]/5 border-[#E5A93B] shadow-md shadow-[#E5A93B]/5'
                          : 'bg-white/40 border-gray-200/80 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[9px] uppercase font-black px-1.5 py-0.5 rounded ${
                          menuTier === tier.id ? 'bg-[#E5A93B]/20 text-amber-800' : 'bg-gray-200/60 text-gray-500'
                        }`}>
                          {tier.badge}
                        </span>
                        {menuTier === tier.id && <div className="w-2 h-2 rounded-full bg-[#E5A93B]"></div>}
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
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-extrabold text-amber-800 tracking-wider block">Est. Cost Per Plate</span>
                  <span className="text-2xl font-black font-mono text-[#1B1B1B]">₹{getPricePerPlate()}</span>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-[10px] uppercase font-extrabold text-amber-800 tracking-wider block">Total Estimated Quote</span>
                  <span className="text-3xl font-black font-mono text-[#B8860B]">
                    ₹{getEstimatedTotal().toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Menu Items Preview (Glass Card) */}
            <div className="lg:col-span-5 bg-white/60 backdrop-blur-md border border-white/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-[#B8860B] tracking-wider block">Real-time Custom Menu Preview</span>
                <h3 className="font-serif text-xl font-black text-gray-800 mt-1">{currentMenu.name}</h3>
              </div>

              {/* Drinks */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-amber-700 tracking-widest flex items-center gap-1.5">
                  <Flame size={12} /> Welcome Drinks
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.drinks.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93B]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Appetizers */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-amber-700 tracking-widest flex items-center gap-1.5">
                  <Utensils size={12} /> Appetizers
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.appetizers.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93B]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mains */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-amber-700 tracking-widest flex items-center gap-1.5">
                  <ChefHat size={12} /> Main Course
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.mains.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93B]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desserts */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-amber-700 tracking-widest flex items-center gap-1.5">
                  <Star size={12} /> Sweet Indulgences
                </span>
                <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                  {currentMenu.desserts.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93B]"></div>
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
                  Lock In This Menu Choice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Dishes Grid */}
        <section id="signatures" className="py-20 bg-gradient-to-t from-transparent to-[#F7F4EC]/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs tracking-widest uppercase font-extrabold text-[#B8860B] block">Chef Curations</span>
              <h2 className="font-serif text-3xl md:text-4xl font-black text-[#1B1B1B]">Our Signature Creations</h2>
              <p className="text-gray-500">A visual showcase of the premium masterpieces highly demanded in Uppal grand feasts.</p>
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
                    <div className="absolute top-3 left-3 bg-green-600/95 text-white px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      {dish.type}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-lg font-bold text-gray-800 leading-snug">{dish.name}</h3>
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
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-700 mx-auto flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-gray-800">Secure Your Consultation</h2>
              <p className="text-sm text-gray-500">Plan your custom culinary experience. Our team responds within 2 business hours.</p>
            </div>

            {submitSuccess && (
              <div className="p-4 rounded-xl bg-green-50/70 border border-green-200/50 flex items-start gap-3 text-green-800 animate-slide-up">
                <ThumbsUp className="mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold">Request Logged Successfully!</h4>
                  <p className="text-xs text-green-700 mt-1">Our banquet coordinator will call you back on your registered phone shortly.</p>
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
                      formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#E5A93B]'
                    }`}
                    placeholder="Enter your name"
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
                        formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#E5A93B]'
                      }`}
                      placeholder="name@example.com"
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
                        formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#E5A93B]'
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
                        formErrors.date ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#E5A93B]'
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
                        formErrors.guests ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#E5A93B]'
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
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block" htmlFor="message">Special Requests / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#E5A93B] transition-all"
                  placeholder="Tell us about special dietary needs, menu themes, or specific arrangements..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E5A93B] to-[#F1C40F] text-white font-bold text-sm shadow-lg shadow-[#E5A93B]/20 hover:shadow-xl hover:translate-y-[-1px] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying Availability...</span>
                    </>
                  ) : (
                    <span>Request Callback & Pricing Quote</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-transparent to-[#F7F4EC]/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs tracking-widest uppercase font-extrabold text-[#B8860B] block">Client Voices</span>
              <h2 className="font-serif text-3xl md:text-4xl font-black text-[#1B1B1B]">Appreciations from Hyderabad</h2>
              <p className="text-gray-500">Hear directly from host families and event coordinators who entrusted their dining to us.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/50 backdrop-blur-sm border border-white/60 p-6 rounded-2xl shadow-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex gap-1 text-[#E5A93B]">
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
                    <div className="w-8 h-8 rounded-full bg-[#E5A93B]/10 flex items-center justify-center text-[#B8860B] font-bold text-xs">
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
                <div className="w-8 h-8 rounded-lg bg-[#E5A93B] flex items-center justify-center text-white">
                  <ChefHat size={16} />
                </div>
                <div>
                  <span className="font-serif font-black text-sm text-gray-800 block">AMBA JI CATERERS</span>
                  <span className="text-[9px] tracking-wider uppercase font-bold text-amber-700 block mt-[-2px]">Sri Panchamukhi</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                Premium Pure Vegetarian traditional catering and grand feasts. Bringing sacred tastes and modern service systems to celebrations in Hyderabad since 2001.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-500">
                <li><a href="#heritage" className="hover:text-[#E5A93B] transition-colors">Our Story</a></li>
                <li><a href="#estimator" className="hover:text-[#E5A93B] transition-colors">Catering Estimator</a></li>
                <li><a href="#signatures" className="hover:text-[#E5A93B] transition-colors">Signature Curations</a></li>
                <li><a href="#consultation" className="hover:text-[#E5A93B] transition-colors">Book Consultation</a></li>
              </ul>
            </div>

            {/* Address / Contact Details */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest">Catering Hub & Contacts</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Location */}
                <div className="flex gap-2.5 items-start">
                  <MapPin className="text-[#E5A93B] flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">Address</span>
                    <p className="text-xs text-gray-600 font-semibold leading-relaxed mt-0.5">
                      Plot No. 42, HMT Nagar Colony,<br />
                      Near Uppal Metro Station,<br />
                      Uppal, Hyderabad - 500039
                    </p>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <Phone className="text-[#E5A93B] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Booking Helpline</span>
                      <a href="tel:+919848022338" className="text-xs text-gray-600 font-semibold hover:text-[#E5A93B] block mt-0.5">
                        +91 98480 22338
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 items-start">
                    <Mail className="text-[#E5A93B] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Email Enquiry</span>
                      <a href="mailto:bookings@ambajicaterers.com" className="text-xs text-gray-600 font-semibold hover:text-[#E5A93B] block mt-0.5">
                        bookings@ambajicaterers.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="max-w-6xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} Amba Ji Sri Panchamukhi Caterers.</span>
            <span>Made for B2B Client Preview</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

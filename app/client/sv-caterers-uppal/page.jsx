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
  Utensils,
  Plus,
  Trash2
} from 'lucide-react';

const MENU_TIERS = {
  artisan: {
    name: 'Artisan Selection',
    platePrice: 550,
    desc: 'Contemporary farm-to-table Indian and continental staples, perfect for elegant private gatherings.',
    dishes: [
      { name: 'Pistachio Crust Paneer Tikka', desc: 'Grilled house-made cottage cheese coated with crushed pistachios and garden herbs.' },
      { name: 'Wild Mushroom Galouti', desc: 'Smoked mushroom patties served on mini saffron sheermal bread.' },
      { name: 'Eucalyptus Tempered Dal', desc: 'Slow-simmered black lentils smoked with eucalyptus leaves and raw butter.' },
      { name: 'Einkorn Wheat Flatbreads', desc: 'Fresh oven-baked flatbreads made from organic ancient grains.' },
      { name: 'Deconstructed Double-Ka-Meetha', desc: 'Hyderabadi classic with vanilla bean diplomat cream and organic honey syrup.' }
    ]
  },
  gourmet: {
    name: 'Gourmet Fusion',
    platePrice: 950,
    desc: 'Exquisite multi-cuisine delicacies, live chef-stations, and clean organic pan-Asian favorites.',
    dishes: [
      { name: 'Vietnamese Rice Paper Rolls', desc: 'Crunchy farm vegetables and Thai basil wrapped in rice paper with a spicy peanut dip.' },
      { name: 'Water-Chestnut & Asparagus Dim Sums', desc: 'Translucent steamed crystal dim sums infused with organic lemongrass oil.' },
      { name: 'Truffle Oil Infused Paneer Pasanda', desc: 'Stuffed cottage cheese sheets simmered in a royal almond-truffle curry.' },
      { name: 'Lemongrass Jasmine Rice', desc: 'Steamed premium jasmine rice cooked with freshly harvested lemongrass stalks.' },
      { name: 'Matcha Tres Leches Cake', desc: 'Sponge cake soaked in three milks infused with premium Japanese Uji matcha.' }
    ]
  },
  signature: {
    name: 'Signature Masterpiece',
    platePrice: 1600,
    desc: 'The ultimate bespoke experience. Rare organic ingredients, molecular gastronomy touches, and craft plating.',
    dishes: [
      { name: 'Compressed Melon & Feta Skewers', desc: 'Compressed local watermelon cubes with fresh mint emulsion and goat feta.' },
      { name: 'Avocado Carpaccio on Ragi Crisps', desc: 'Silky sliced avocado topped with organic microgreens and cold-pressed olive oil.' },
      { name: 'Blueberry Balsamic Shahi Tukda', desc: 'Toasted brioche soaked in cardamom milk, topped with wild blueberry reduction.' },
      { name: 'Hand-rolled Artichoke Ravioli', desc: 'Fresh eggless pasta stuffed with roasted artichoke hearts and pine-nut pesto cream.' },
      { name: 'Saffron Smoked Biryani Pot', desc: 'Organic jackfruit and basmati rice slow-dum-cooked inside individually sealed clay pots.' }
    ]
  }
};

const ADD_ONS = {
  mixologist: { name: 'Live Craft Mixologist Bar', price: 18000, type: 'flat', desc: 'Artisanal syrups, fresh botanicals, and zero-sugar premium mocktails.' },
  biodegradable: { name: 'Zero-Waste Tableware', price: 50, type: 'per-guest', desc: 'Stunning organic wheat-straw plates and compostable bamboo cutlery.' },
  hibachi: { name: 'Charcoal Hibachi Counter', price: 25000, type: 'flat', desc: 'Live interaction station featuring grilled skewers and hand-tossed noodles.' },
  grazing: { name: 'Dessert Grazing Canopy', price: 140, type: 'per-guest', desc: 'An artistic forest-themed table of mini pastries, fresh berries, and artisanal chocolates.' }
};

const EVENT_TYPES = [
  { id: 'corporate', name: 'Corporate Gala' },
  { id: 'private', name: 'Intimate Soiree' },
  { id: 'cocktail', name: 'Cocktail Reception' },
  { id: 'wedding', name: 'Bespoke Wedding' }
];

export default function SVCaterers() {
  // Customizer state
  const [guestCount, setGuestCount] = useState(80);
  const [selectedTier, setSelectedTier] = useState('gourmet');
  const [selectedEvent, setSelectedEvent] = useState('corporate');
  const [selectedAddOns, setSelectedAddOns] = useState(['biodegradable']);

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

  // Pricing calculations
  const tierInfo = MENU_TIERS[selectedTier];
  const plateCost = tierInfo.platePrice;
  const baseMenuCost = guestCount * plateCost;

  // Add-ons cost calculation
  const addOnsCost = selectedAddOns.reduce((total, id) => {
    const item = ADD_ONS[id];
    if (item.type === 'flat') {
      return total + item.price;
    } else {
      return total + (item.price * guestCount);
    }
  }, 0);

  // Organic microgreens fee - flat ₹1500
  const microgreensFee = 1500;

  const subtotal = baseMenuCost + addOnsCost + microgreensFee;
  const gst = Math.round(subtotal * 0.05);
  const totalCost = subtotal + gst;

  // Handlers
  const handleAddOnToggle = (id) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

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
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Select event date';
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
    <div className="min-h-screen selection:bg-[#1E3F20]/10 selection:text-[#1E3F20] font-[family-name:var(--font-inter)]">
      {/* Top Banner */}
      <div className="bg-[#1E3F20]/5 text-[#1E3F20] text-center py-2.5 px-4 text-xs font-semibold tracking-wider uppercase border-b border-[#E8EFE9] flex items-center justify-center gap-2">
        <Leaf className="w-3.5 h-3.5 text-[#1E3F20]" />
        <span>ECO-CONSCIOUS ARTISANAL CATERING IN HYDERABAD</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FCFBF9]/80 backdrop-blur-lg border-b border-[#E8EFE9] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-[family-name:var(--font-cormorant)] tracking-widest text-[#1E3F20] uppercase">
              SV CATERERS
            </span>
            <span className="h-4 w-[1px] bg-[#E8EFE9] hidden sm:block" />
            <span className="text-[10px] tracking-wider text-[#556B2F] uppercase hidden sm:block font-bold">
              Artisanal Culinary Lab
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1E3F20]/80">
            <a href="#lab" className="hover:text-[#1E3F20] transition-colors">The Kitchen Lab</a>
            <a href="#customizer" className="hover:text-[#1E3F20] transition-colors">Menu Customizer</a>
            <a href="#masterpieces" className="hover:text-[#1E3F20] transition-colors">Dishes</a>
            <a href="#reviews" className="hover:text-[#1E3F20] transition-colors">Testimonials</a>
          </nav>

          <div>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1E3F20] hover:bg-[#2c582f] text-[#FCFBF9] text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm transition-all duration-300 active:scale-95"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 bg-[#FCFBF9]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E8EFE9] text-[#1E3F20] text-[9px] tracking-widest uppercase font-extrabold mb-8">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>HACCP Certified Cloud Kitchen in Uppal</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-[family-name:var(--font-cormorant)] text-[#1E3F20] leading-[1.1] tracking-wide mb-8">
                Modern Gastronomy.<br/>
                <span className="font-semibold italic text-[#556B2F]">Conscious Plating.</span>
              </h1>
              
              <p className="text-[#1E3F20]/75 text-sm sm:text-base leading-relaxed max-w-lg mb-10">
                SV Caterers merges state-of-the-art cloud kitchen hygiene with luxury event design. Serving Hyderabad’s corporate innovators and modern hosts with hand-crafted global-fusion menus, clean eating alternatives, and zero-waste presentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a 
                  href="#customizer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#1E3F20] hover:bg-[#2c582f] text-[#FCFBF9] text-[11px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300 active:scale-95 shadow-sm"
                >
                  <span>Interactive Estimator</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#contact"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#E8EFE9] hover:border-[#1E3F20] text-[#1E3F20] text-[11px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300 active:scale-95"
                >
                  <span>Book Tasting Call</span>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#E8EFE9] pt-8 max-w-md">
                <div>
                  <span className="block text-2xl font-extrabold font-[family-name:var(--font-cormorant)] text-[#1E3F20] tracking-wide">0%</span>
                  <span className="block text-[8px] font-bold text-[#556B2F] tracking-wider uppercase mt-1">Single-use Plastic</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold font-[family-name:var(--font-cormorant)] text-[#1E3F20] tracking-wide">40+</span>
                  <span className="block text-[8px] font-bold text-[#556B2F] tracking-wider uppercase mt-1">Gourmet Chefs</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold font-[family-name:var(--font-cormorant)] text-[#1E3F20] tracking-wide">100%</span>
                  <span className="block text-[8px] font-bold text-[#556B2F] tracking-wider uppercase mt-1">Hygienic Cloud Kitchen</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual (Leaf-shape Masked Frame) */}
            <div className="lg:col-span-6 relative flex justify-center">
              
              {/* Circular leaf ornament layout */}
              <div className="relative w-full max-w-[460px] aspect-square rounded-[100px] rounded-tl-none rounded-br-none overflow-hidden border border-[#E8EFE9] shadow-2xl bg-[#E8EFE9]/30">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800" 
                  alt="Premium culinary plating and service layout"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 bg-[#FCFBF9] p-4 rounded-sm border border-[#E8EFE9] shadow-lg max-w-[200px]">
                  <span className="text-[8px] font-bold text-[#556B2F] tracking-widest uppercase block mb-1">Culinary Theme</span>
                  <p className="text-xs font-semibold text-[#1E3F20] leading-snug">Artisanal herbs, organic edible flowers, and curated global palettes.</p>
                </div>
              </div>

              {/* Leaf background icon decor */}
              <div className="absolute top-[-20px] right-[-20px] text-[#E8EFE9] pointer-events-none">
                <Leaf className="w-20 h-20 opacity-30 rotate-12" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Kitchen Lab Story */}
      <section id="lab" className="py-24 bg-[#E8EFE9]/20 border-t border-b border-[#E8EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Story Image */}
            <div className="relative">
              <div className="rounded-sm overflow-hidden aspect-[4/3] bg-[#E8EFE9] border border-[#E8EFE9] shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800" 
                  alt="SV state of the art Cloud Kitchen Hygiene"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-6 right-6 bg-white py-2 px-3 border border-[#E8EFE9] rounded-sm text-[9px] font-extrabold uppercase text-[#1E3F20] tracking-widest shadow">
                ISO 22000 Certified
              </div>
            </div>

            {/* Story Text */}
            <div>
              <span className="text-[#556B2F] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">THE MODERN CLOUD KITCHEN</span>
              <h2 className="text-3xl sm:text-4xl font-light font-[family-name:var(--font-cormorant)] text-[#1E3F20] mb-6 leading-snug">
                Where Food Safety Meets <strong className="font-semibold italic text-[#556B2F]">Artistic Expression.</strong>
              </h2>
              
              <div className="space-y-6 text-[#1E3F20]/75 text-sm leading-relaxed">
                <p>
                  SV Caterers operates out of a state-of-the-art, 8,000 sq. ft. commercial cloud kitchen in IDA Uppal, Hyderabad. Designed from the ground up to support high-capacity corporate banquets and private event catering, our facility adheres strictly to HACCP and ISO food safety layouts.
                </p>
                <p>
                  We believe that modern catering must be responsible. We harvest fresh organic microgreens daily from our vertical indoor hydroponic garden inside the kitchen. By partnering with local farming collectives in neighboring Rangareddy district, we guarantee premium ingredients that support local ecosystems.
                </p>
                <p>
                  Our kitchen staff uses smart monitoring systems to track holding temperatures, cook cycles, and ingredient freshness. This scientific approach guarantees that the 200th plate served at your event tastes identical to the first.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E8EFE9] pt-6 text-xs font-semibold text-[#1E3F20]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#556B2F]" />
                  <span>Zero Single-use Plastics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#556B2F]" />
                  <span>Hydroponic Microgreens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#556B2F]" />
                  <span>HACCP Temp Controlled Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#556B2F]" />
                  <span>Zero-waste Kitchen operations</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Menu Customizer & Estimator */}
      <section id="customizer" className="py-24 bg-[#FCFBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#556B2F] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">ESTIMATION LAB</span>
            <h2 className="text-3xl sm:text-4xl font-light font-[family-name:var(--font-cormorant)] text-[#1E3F20]">
              Build Your Custom <strong className="font-semibold italic">Artisanal Buffet</strong>
            </h2>
            <p className="text-xs text-[#1E3F20]/75 mt-2 leading-relaxed">
              Plan your corporate or private gathering dynamically. Adjust guest count, choose culinary tiers, and toggle premium add-on services to see real-time price calculations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Customizer Panel */}
            <div className="lg:col-span-7 bg-[#FCFBF9] p-6 sm:p-8 rounded-sm border border-[#E8EFE9] shadow-sm">
              <div className="space-y-8">
                
                {/* 1. Event Type Selector */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#1E3F20] block mb-4">
                    Step 1: Choose Occasion Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {EVENT_TYPES.map((evt) => (
                      <button
                        key={evt.id}
                        type="button"
                        onClick={() => setSelectedEvent(evt.id)}
                        className={`p-3 text-[10px] font-bold tracking-wider uppercase border text-center rounded-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${
                          selectedEvent === evt.id 
                            ? 'bg-[#1E3F20] text-[#FCFBF9] border-[#1E3F20] shadow-sm' 
                            : 'bg-white border-[#E8EFE9] text-[#1E3F20]/70 hover:border-[#1E3F20]/45 hover:bg-[#FCFBF9]'
                        }`}
                      >
                        {selectedEvent === evt.id && <Check className="w-3 h-3 text-[#E8EFE9]" />}
                        <span>{evt.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Menu Tier Selector */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#1E3F20] block mb-4">
                    Step 2: Choose Culinary Tier
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(MENU_TIERS).map(([key, value]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedTier(key)}
                        className={`p-4 text-left border rounded-sm transition-all active:scale-95 flex flex-col justify-between h-44 ${
                          selectedTier === key 
                            ? 'bg-white border-[#1E3F20] shadow-sm ring-1 ring-[#1E3F20]/10' 
                            : 'bg-[#FCFBF9] border-[#E8EFE9] text-[#1E3F20]/70 hover:border-[#1E3F20]/30 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center w-full">
                            <span className="text-[9px] tracking-wider uppercase font-bold text-[#556B2F]">
                              {key === 'signature' ? 'Royal Signature' : key === 'gourmet' ? 'Gourmet' : 'Artisan'}
                            </span>
                            {selectedTier === key && <Check className="w-4 h-4 text-[#1E3F20]" />}
                          </div>
                          <span className="text-xs font-bold text-[#1E3F20] block mt-1 leading-tight">
                            {value.name}
                          </span>
                          <span className="text-[9px] text-[#1E3F20]/65 mt-1 block leading-relaxed line-clamp-3">
                            {value.desc}
                          </span>
                        </div>
                        <div className="mt-4">
                          <span className="text-lg font-bold text-[#1E3F20]">₹{value.platePrice}</span>
                          <span className="text-[9px] text-[#1E3F20]/60 uppercase ml-0.5">/ guest</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Guest Count Input */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1E3F20]">
                      Step 3: Enter Guest Volume
                    </label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number"
                        min="20"
                        max="500"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Math.min(500, Math.max(20, Number(e.target.value))))}
                        className="w-20 px-2 py-1 text-center font-bold text-xs border border-[#E8EFE9] bg-white text-[#1E3F20] rounded-sm focus:outline-none focus:border-[#1E3F20]"
                      />
                      <span className="text-[9px] text-[#1E3F20]/60 uppercase font-bold">Attendees</span>
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <input 
                      type="range"
                      min="20"
                      max="500"
                      step="10"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full h-1 bg-[#E8EFE9] rounded-sm appearance-none cursor-pointer accent-[#1E3F20]"
                    />
                    <div className="flex justify-between text-[9px] text-[#1E3F20]/50 font-bold uppercase mt-2.5">
                      <span>20 Guests</span>
                      <span>250</span>
                      <span>500 Guests</span>
                    </div>
                  </div>
                </div>

                {/* 4. Add-on Services Checklist */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#1E3F20] block mb-4">
                    Step 4: Premium Event Add-ons (Optional)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries(ADD_ONS).map(([key, item]) => {
                      const isSelected = selectedAddOns.includes(key);
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleAddOnToggle(key)}
                          className={`p-3 text-left border rounded-sm transition-all active:scale-95 flex items-start gap-3 ${
                            isSelected 
                              ? 'bg-white border-[#1E3F20] shadow-sm' 
                              : 'bg-white border-[#E8EFE9] text-[#1E3F20]/75 hover:border-[#1E3F20]/25'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-sm border shrink-0 mt-0.5 flex items-center justify-center ${
                            isSelected ? 'bg-[#1E3F20] border-[#1E3F20] text-white' : 'border-[#E8EFE9]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#1E3F20] block">{item.name}</span>
                            <span className="text-[9px] text-[#1E3F20]/65 mt-0.5 block leading-normal">{item.desc}</span>
                            <span className="text-[10px] font-bold text-[#556B2F] block mt-1.5">
                              +₹{item.price.toLocaleString('en-IN')} {item.type === 'per-guest' ? '/ guest' : 'flat fee'}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Price Estimator Invoice Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Proposal Costing Card */}
              <div className="bg-[#FCFBF9] border border-[#1E3F20]/30 p-6 sm:p-8 rounded-sm shadow-sm relative">
                <div className="border-b border-[#E8EFE9] pb-4 mb-5">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-[#556B2F]">CULINARY LAB ESTIMATE</span>
                  <h3 className="text-base font-bold text-[#1E3F20] mt-1 font-[family-name:var(--font-cormorant)] uppercase tracking-wider">Proposal Breakdown</h3>
                </div>

                <div className="space-y-4 text-xs border-b border-[#E8EFE9] pb-5 mb-5 text-[#1E3F20]/80">
                  
                  {/* Menu Base */}
                  <div className="flex justify-between">
                    <span>Base Menu Cost ({guestCount} guests × ₹{plateCost})</span>
                    <span className="font-semibold text-[#1E3F20]">₹{baseMenuCost.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Add-ons list */}
                  {selectedAddOns.map(id => {
                    const item = ADD_ONS[id];
                    const cost = item.type === 'flat' ? item.price : item.price * guestCount;
                    return (
                      <div key={id} className="flex justify-between pl-3 border-l-2 border-[#E8EFE9] text-xs">
                        <span>{item.name}</span>
                        <span>₹{cost.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}

                  {/* Microgreens flat */}
                  <div className="flex justify-between">
                    <span>In-House Hydroponic Garnish Fee</span>
                    <span className="font-semibold text-[#1E3F20]">₹{microgreensFee.toLocaleString('en-IN')}</span>
                  </div>

                  {/* GST */}
                  <div className="flex justify-between">
                    <span>Service Tax & GST (5%)</span>
                    <span className="font-semibold text-[#1E3F20]">₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E3F20]">Total Investment</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#1E3F20]">₹{totalCost.toLocaleString('en-IN')}</span>
                    <span className="block text-[8px] text-[#556B2F] tracking-wider uppercase font-bold mt-0.5">All taxes included</span>
                  </div>
                </div>

                <a 
                  href="#contact"
                  className="w-full inline-flex justify-center items-center py-3.5 px-6 bg-[#1E3F20] hover:bg-[#2c582f] text-[#FCFBF9] text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm transition-all duration-300 active:scale-95"
                >
                  <span>Submit Estimate & Reserve</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>

              {/* Selected Dishes Box */}
              <div className="bg-[#E8EFE9]/30 p-6 rounded-sm border border-[#E8EFE9]">
                <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#1E3F20] mb-4 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#1E3F20]" />
                  <span>Culinary Menu Preview ({tierInfo.name})</span>
                </h4>
                <div className="space-y-4 max-h-[260px] overflow-y-auto pr-1">
                  {tierInfo.dishes.map((dish, i) => (
                    <div key={i} className="pb-3 border-b border-[#E8EFE9] last:border-b-0">
                      <h5 className="text-xs font-bold text-[#1E3F20]">{dish.name}</h5>
                      <p className="text-[10px] text-[#1E3F20]/70 leading-normal mt-0.5">{dish.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Signature Masterpieces */}
      <section id="masterpieces" className="py-24 bg-[#E8EFE9]/20 border-t border-b border-[#E8EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[#556B2F] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">GASTRONOMY GALLERY</span>
              <h2 className="text-3xl sm:text-4xl font-light font-[family-name:var(--font-cormorant)] text-[#1E3F20]">
                Artisanal Signature <strong className="font-semibold italic text-[#556B2F]">Plates</strong>
              </h2>
            </div>
            <p className="text-[#1E3F20]/70 text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
              Curated chef specialties designed for exquisite culinary aesthetics and organic farm-fresh depth.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            
            {/* Plate 1 */}
            <div className="bg-white rounded-sm border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-56 overflow-hidden bg-[#E8EFE9] relative">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400"
                  alt="Wild Mushroom Galouti"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-sm">
                  Artisanal Kebab
                </span>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Entree</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-cormorant)] uppercase tracking-wider">Wild Mushroom Galouti</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Delicately smoked forest mushroom patties, slow-cooked in butter and seasoned with 18 signature hand-ground spices. Served on saffron-infused mini bread.
                </p>
                <div className="text-[9px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Wood smoke finish</span>
                </div>
              </div>
            </div>

            {/* Plate 2 */}
            <div className="bg-white rounded-sm border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-56 overflow-hidden bg-[#E8EFE9] relative">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400"
                  alt="Pistachio Crust Paneer Tikka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-sm">
                  Gourmet Star
                </span>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Live Counter</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-cormorant)] uppercase tracking-wider">Pistachio Paneer Tikka</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Cottage cheese squares marinated in cold-pressed mustard oil, green chillies, fresh mint paste, and wrapped in dynamic toasted pistachio crumble.
                </p>
                <div className="text-[9px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Crust made from premium Iranian green nuts</span>
                </div>
              </div>
            </div>

            {/* Plate 3 */}
            <div className="bg-white rounded-sm border border-[#E8EFE9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-56 overflow-hidden bg-[#E8EFE9] relative">
                <div className="w-full h-full bg-[#E8EFE9]/40 flex items-center justify-center text-[#1E3F20]/30">
                  <Utensils className="w-12 h-12" />
                </div>
                <span className="absolute top-4 left-4 bg-[#1E3F20] text-[#FCFBF9] text-[8px] tracking-widest font-bold uppercase py-1 px-2.5 rounded-sm">
                  Classic Revived
                </span>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-widest text-[#556B2F] uppercase font-bold block mb-1">Dessert</span>
                <h3 className="text-base font-bold text-[#1E3F20] mb-2 font-[family-name:var(--font-cormorant)] uppercase tracking-wider">Deconstructed Shahi Tukda</h3>
                <p className="text-xs text-[#1E3F20]/75 leading-relaxed mb-4">
                  Crisp toasted artisanal bread layers soaked in cardamom-infused reduction, glazed with fresh wild blueberries and organic edible gold foil.
                </p>
                <div className="text-[9px] font-bold text-[#556B2F] flex items-center gap-1 border-t border-[#E8EFE9] pt-3">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Prepared with 0% refined cane sugar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="reviews" className="py-24 bg-[#FCFBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#556B2F] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">CLIENT LOVE</span>
            <h2 className="text-3xl sm:text-4xl font-light font-[family-name:var(--font-cormorant)] text-[#1E3F20]">
              The SV Dining <strong className="font-semibold italic">Experience</strong>
            </h2>
            <p className="text-xs text-[#1E3F20]/75 mt-2">
              Discover what corporate clients and private hosts in Hyderabad’s prime hubs say about our catering events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#FCFBF9] p-6 sm:p-8 rounded-sm border border-[#E8EFE9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-5 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1E3F20]/80 leading-relaxed mb-6 italic">
                  "We hired SV Caterers for our annual corporate banquet (250 attendees) in Gachibowli. The clean plating, eco-friendly tableware, and the Dim Sum station were highly appreciated. Zero plastic was a huge brand match for us."
                </p>
              </div>
              <div className="border-t border-[#E8EFE9] pt-4">
                <h4 className="text-xs font-bold text-[#1E3F20]">Vikram Malhotra</h4>
                <span className="text-[8px] text-[#556B2F] uppercase font-bold tracking-widest block mt-0.5">Corporate client, Gachibowli</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#FCFBF9] p-6 sm:p-8 rounded-sm border border-[#E8EFE9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-5 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1E3F20]/80 leading-relaxed mb-6 italic">
                  "For my child’s first birthday in Uppal, we wanted something premium but clean. Their Artisan Selection was incredible. The Paneer Tikka was fresh and delicious. Impeccable service staff hygiene."
                </p>
              </div>
              <div className="border-t border-[#E8EFE9] pt-4">
                <h4 className="text-xs font-bold text-[#1E3F20]">Srikanth Varma</h4>
                <span className="text-[8px] text-[#556B2F] uppercase font-bold tracking-widest block mt-0.5">Private Host, Uppal</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#FCFBF9] p-6 sm:p-8 rounded-sm border border-[#E8EFE9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-5 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1E3F20]/80 leading-relaxed mb-6 italic">
                  "SV Caterers organized an intimate cocktail gala at our residence in Secunderabad. The live craft mixology counter was an absolute showstopper! Very professional setup and culinary execution."
                </p>
              </div>
              <div className="border-t border-[#E8EFE9] pt-4">
                <h4 className="text-xs font-bold text-[#1E3F20]">Meera Sen</h4>
                <span className="text-[8px] text-[#556B2F] uppercase font-bold tracking-widest block mt-0.5">Home Owner, Secunderabad</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="contact" className="py-24 bg-[#E8EFE9]/20 border-t border-[#E8EFE9]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-sm border border-[#E8EFE9] shadow-sm overflow-hidden p-6 sm:p-10">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#556B2F] text-[9px] tracking-[0.3em] uppercase font-bold block mb-2">DATE BOOKING</span>
              <h2 className="text-2xl sm:text-3xl font-light font-[family-name:var(--font-cormorant)] text-[#1E3F20] uppercase tracking-wider">
                Schedule Tasting Consultation
              </h2>
              <p className="text-xs text-[#1E3F20]/75 mt-2 leading-relaxed">
                Provide your event details. A culinary artist from SV Caterers will reach out within 24 hours to schedule an in-person menu customizer tasting session.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-[#E8EFE9]/40 border border-[#E8EFE9] p-8 rounded-sm text-center flex flex-col items-center gap-4 py-12 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#1E3F20] text-white flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1E3F20] uppercase tracking-wider font-[family-name:var(--font-cormorant)]">Consultation Request Logged</h3>
                  <p className="text-xs text-[#1E3F20]/70 mt-2 leading-relaxed max-w-sm mx-auto">
                    Thank you. We have saved your event details. Our events manager will contact you at <strong className="text-[#1E3F20]">{formData.phone}</strong> shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 px-6 py-2.5 border border-[#1E3F20] text-[#1E3F20] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#1E3F20] hover:text-[#FCFBF9] transition-all active:scale-95"
                >
                  Create another proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs text-[#1E3F20]">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-[9px] font-bold uppercase tracking-wider text-[#1E3F20] mb-2">
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
                        placeholder="Aditya Varma"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-sm focus:outline-none focus:border-[#1E3F20] transition-colors ${
                          errors.name ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[9px] text-red-600 mt-1.5 font-bold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-[9px] font-bold uppercase tracking-wider text-[#1E3F20] mb-2">
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
                        placeholder="9121298765"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-sm focus:outline-none focus:border-[#1E3F20] transition-colors ${
                          errors.phone ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[9px] text-red-600 mt-1.5 font-bold">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-[9px] font-bold uppercase tracking-wider text-[#1E3F20] mb-2">
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
                        placeholder="aditya@corporate.com"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-sm focus:outline-none focus:border-[#1E3F20] transition-colors ${
                          errors.email ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[9px] text-red-600 mt-1.5 font-bold">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="date" className="block text-[9px] font-bold uppercase tracking-wider text-[#1E3F20] mb-2">
                      Event Date *
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
                        className={`w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border text-xs text-[#1E3F20] rounded-sm focus:outline-none focus:border-[#1E3F20] transition-colors ${
                          errors.date ? 'border-red-500/50' : 'border-[#E8EFE9]'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[9px] text-red-600 mt-1.5 font-bold">
                        {errors.date}
                      </p>
                    )}
                  </div>

                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-[9px] font-bold uppercase tracking-wider text-[#1E3F20] mb-2">
                    Event Logistics / Dietary preferences
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Specify if vegetarian, vegan, lactose-free, or if you need bespoke live cooking setups..."
                    className="w-full px-4 py-3 bg-[#FCFBF9] border border-[#E8EFE9] text-xs text-[#1E3F20] rounded-sm focus:outline-none focus:border-[#1E3F20] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center items-center px-10 py-4 bg-[#1E3F20] hover:bg-[#2c582f] disabled:bg-[#1E3F20]/50 text-[#FCFBF9] text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm transition-all duration-300 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        <span>Logging Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal Details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* Store Footer */}
      <footer className="bg-[#1E3F20] text-[#FCFBF9] pt-16 pb-8 border-t border-[#E8EFE9]/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1 */}
          <div>
            <span className="text-xl font-bold font-[family-name:var(--font-cormorant)] tracking-widest text-white uppercase block mb-4">
              SV CATERERS
            </span>
            <p className="text-xs text-[#E8EFE9]/70 leading-relaxed max-w-xs">
              Premium cloud-kitchen operations and custom event catering in Hyderabad. Focused on zero-waste packaging, sustainable farm contracts, and cutting-edge gastronomy.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="space-y-3 text-xs text-[#E8EFE9]/75">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8EFE9]" />
                <a href="tel:+919121298765" className="hover:text-white transition-colors">+91 91212 98765</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8EFE9]" />
                <a href="tel:+914048556789" className="hover:text-white transition-colors">+91 40 4855 6789</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8EFE9]" />
                <a href="mailto:hello@svcaterers.co" className="hover:text-white transition-colors">hello@svcaterers.co</a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Cloud Kitchen Address</h4>
            <div className="flex items-start gap-2 text-xs text-[#E8EFE9]/75">
              <MapPin className="w-4 h-4 text-[#E8EFE9] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Survey No. 112, IDA Uppal, <br />
                Near Ramanthapur Lake, <br />
                Uppal, Hyderabad, Telangana - 500039
              </p>
            </div>
            <p className="text-[10px] text-[#E8EFE9]/60 italic pl-6">
              HACCP Facility. Operations open 24/7 for event prep.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#E8EFE9]/60">
          <p>© 2026 SV Caterers Uppal. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0 font-bold uppercase tracking-wider">
            <a href="#lab" className="hover:text-white transition-colors">The Kitchen</a>
            <a href="#customizer" className="hover:text-white transition-colors">Menu Customizer</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

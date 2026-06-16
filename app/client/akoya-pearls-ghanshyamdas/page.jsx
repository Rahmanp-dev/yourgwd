"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Star, 
  RefreshCw, 
  Layers, 
  Compass, 
  Loader2,
  Clock
} from 'lucide-react';

const METALS = {
  gold: { name: '22K Yellow Gold', color: '#D4AF37', border: '#B89024', rate: 6600, percent: 0.14 },
  rose: { name: '18K Rose Gold', color: '#C58F80', border: '#A87162', rate: 5800, percent: 0.15 },
  platinum: { name: 'Platinum 950', color: '#E5E7EB', border: '#9CA3AF', rate: 4800, percent: 0.12 }
};

const GEMSTONES = {
  pearl: { name: 'Akoya Cultured Pearl', color: '#FAF5FF', rate: 18000, desc: 'Luminous cream pearl with high iridescence.' },
  diamond: { name: 'VVS Solitaire Diamond', color: '#E0F2FE', rate: 125000, desc: 'Brilliant cut diamonds reflecting pristine purity.' },
  emerald: { name: 'Zambian Emerald', color: '#059669', rate: 85000, desc: 'Deep forest green, capturing raw biophilic elegance.' },
  ruby: { name: 'Burmese Ruby', color: '#DC2626', rate: 75000, desc: 'Fiery crimson gemstone representing deep passion.' }
};

const ITEMS = {
  necklace: { name: 'Lagoon Flora Necklace', baseWeight: 28, gemCarats: 3.5, basePrice: 45000 },
  ring: { name: 'Jasmine Bud Ring', baseWeight: 6, gemCarats: 1.2, basePrice: 15000 },
  earrings: { name: 'Petal Cascade Earrings', baseWeight: 14, gemCarats: 2.2, basePrice: 25000 }
};

export default function AkoyaPearlsPage() {
  // Customizer State
  const [selectedItem, setSelectedItem] = useState('necklace');
  const [selectedMetal, setSelectedMetal] = useState('gold');
  const [selectedGemstone, setSelectedGemstone] = useState('pearl');
  const [engraving, setEngraving] = useState('');
  const [customizerSaved, setCustomizerSaved] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'morning',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Price Calculation
  const item = ITEMS[selectedItem];
  const metal = METALS[selectedMetal];
  const gem = GEMSTONES[selectedGemstone];

  const metalCost = item.baseWeight * metal.rate;
  const gemCost = item.gemCarats * gem.rate;
  const subtotalBeforeMaking = metalCost + gemCost + item.basePrice;
  const makingCharges = Math.round(subtotalBeforeMaking * metal.percent);
  const subtotal = subtotalBeforeMaking + makingCharges;
  const gst = Math.round(subtotal * 0.03);
  const finalPrice = subtotal + gst;

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Date must be today or in the future';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: 'morning',
      notes: ''
    });
    setFormSubmitted(false);
  };

  // SVGs for the Customizer Visualizer
  const renderVisualizerSVG = () => {
    const metalHex = metal.color;
    const gemHex = gem.color;

    if (selectedItem === 'necklace') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-h-[320px] mx-auto text-[#2D3A31]">
          <defs>
            <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.6} />
              <stop offset="60%" stopColor={metalHex} />
              <stop offset="100%" stopColor={metal.border} />
            </radialGradient>
            <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor={gemHex} />
              <stop offset="100%" stopColor={selectedGemstone === 'pearl' ? '#E9D5FF' : '#064E3B'} />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Biophilic Leaf Arches in Background */}
          <path d="M40,150 C70,120 130,120 160,150" fill="none" stroke="#E5E0D8" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M30,140 C65,100 135,100 170,140" fill="none" stroke="#E5E0D8" strokeWidth="1" />

          {/* Leaf motifs along the arch */}
          <path d="M50,132 C48,125 53,120 58,124 C60,128 56,133 50,132 Z" fill="#8EA393" opacity="0.4" />
          <path d="M150,132 C152,125 147,120 142,124 C140,128 144,133 150,132 Z" fill="#8EA393" opacity="0.4" />
          
          {/* Main Necklace Chain */}
          <path d="M50,40 C50,120 150,120 150,40" fill="none" stroke="url(#metalGrad)" strokeWidth="4" strokeLinecap="round" />
          
          {/* Symmetrical Pearls/Beads along the neckband */}
          {[
            { cx: 58, cy: 55 }, { cx: 68, cy: 70 }, { cx: 80, cy: 83 },
            { cx: 94, cy: 92 }, { cx: 106, cy: 92 }, { cx: 120, cy: 83 },
            { cx: 132, cy: 70 }, { cx: 142, cy: 55 }
          ].map((pt, i) => (
            <circle key={i} cx={pt.cx} cy={pt.cy} r="3.5" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="0.5" />
          ))}

          {/* Cascade Filigree Pendant Structure (Leaf shaped) */}
          <path d="M100,90 C85,115 100,155 100,155 C100,155 115,115 100,90 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="2" />
          <path d="M100,102 C93,115 100,130 100,130 C100,130 107,115 100,102 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="1.5" />

          {/* Gemstones embedded */}
          {/* Main Dangling Gemstone */}
          <circle cx="100" cy="148" r="7" fill="url(#gemGrad)" stroke={selectedGemstone === 'pearl' ? '#D8B4FE' : metalHex} strokeWidth="1" filter="url(#glow)" />
          {/* Secondary Gems */}
          <circle cx="100" cy="115" r="4.5" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" />
          <circle cx="88" cy="108" r="3" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" />
          <circle cx="112" cy="108" r="3" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" />

          {/* Sparkling Stars */}
          <path d="M140,95 L142,99 L146,100 L142,101 L140,105 L138,101 L134,100 L138,99 Z" fill="#D4B26F" opacity="0.8" />
          <path d="M60,95 L61,98 L64,99 L61,100 L60,103 L59,100 L56,99 L59,98 Z" fill="#D4B26F" opacity="0.8" />
        </svg>
      );
    } else if (selectedItem === 'ring') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-h-[320px] mx-auto text-[#2D3A31]">
          <defs>
            <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.6} />
              <stop offset="60%" stopColor={metalHex} />
              <stop offset="100%" stopColor={metal.border} />
            </radialGradient>
            <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor={gemHex} />
              <stop offset="100%" stopColor={selectedGemstone === 'pearl' ? '#E9D5FF' : '#064E3B'} />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ring Band */}
          <circle cx="100" cy="115" r="40" fill="none" stroke="url(#metalGrad)" strokeWidth="6" />
          <circle cx="100" cy="115" r="37" fill="none" stroke="#FAF8F4" strokeWidth="1" opacity="0.3" />

          {/* Jasmine Bud basket mount (Organic leaf shaped prongs) */}
          <path d="M75,80 C85,82 92,72 100,72 C108,72 115,82 125,80 C115,90 85,90 75,80 Z" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="1" />
          <path d="M90,75 L100,55 L110,75 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="1.5" />

          {/* Secondary small leaf details flanking the main basket */}
          <path d="M68,82 C65,75 72,70 75,75 Z" fill="url(#metalGrad)" />
          <path d="M132,82 C135,75 128,70 125,75 Z" fill="url(#metalGrad)" />

          {/* Center Solitaire Gemstone */}
          <circle cx="100" cy="62" r="11" fill="url(#gemGrad)" stroke={selectedGemstone === 'pearl' ? '#F3E8FF' : metalHex} strokeWidth="1.5" filter="url(#glow)" />
          
          {/* Small accent stones on band shoulders */}
          <circle cx="78" cy="85" r="2.5" fill="url(#gemGrad)" />
          <circle cx="122" cy="85" r="2.5" fill="url(#gemGrad)" />
          <circle cx="70" cy="92" r="2" fill="url(#gemGrad)" />
          <circle cx="130" cy="92" r="2" fill="url(#gemGrad)" />

          {/* Sparkle */}
          <path d="M125,40 L127,43 L131,44 L127,45 L125,48 L123,45 L119,44 L123,43 Z" fill="#D4B26F" />
        </svg>
      );
    } else {
      // Earrings
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-h-[320px] mx-auto text-[#2D3A31]">
          <defs>
            <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.6} />
              <stop offset="60%" stopColor={metalHex} />
              <stop offset="100%" stopColor={metal.border} />
            </radialGradient>
            <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor={gemHex} />
              <stop offset="100%" stopColor={selectedGemstone === 'pearl' ? '#E9D5FF' : '#064E3B'} />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Earring 1 (Left) */}
          <g transform="translate(-10, 0)">
            {/* Stud */}
            <circle cx="65" cy="50" r="5" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="1" />
            <circle cx="65" cy="50" r="7" fill="none" stroke="url(#metalGrad)" strokeWidth="1" />

            {/* Connecting leaf link */}
            <path d="M65,57 C62,65 68,75 65,85" fill="none" stroke="url(#metalGrad)" strokeWidth="2.5" />
            <path d="M60,68 C57,65 60,60 63,64 C65,68 62,70 60,68 Z" fill="#8EA393" opacity="0.5" />

            {/* Chandelier Leaf Frame */}
            <path d="M65,85 C50,105 65,145 65,145 C65,145 80,105 65,85 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="1.5" />
            
            {/* Hanging Gems */}
            <circle cx="65" cy="100" r="4.5" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" />
            <circle cx="65" cy="138" r="6" fill="url(#gemGrad)" stroke={selectedGemstone === 'pearl' ? '#FFF' : metalHex} strokeWidth="1" filter="url(#glow)" />
          </g>

          {/* Earring 2 (Right) */}
          <g transform="translate(80, 0)">
            {/* Stud */}
            <circle cx="55" cy="50" r="5" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="1" />
            <circle cx="55" cy="50" r="7" fill="none" stroke="url(#metalGrad)" strokeWidth="1" />

            {/* Connecting leaf link */}
            <path d="M55,57 C52,65 58,75 55,85" fill="none" stroke="url(#metalGrad)" strokeWidth="2.5" />
            <path d="M50,68 C47,65 50,60 53,64 C55,68 52,70 50,68 Z" fill="#8EA393" opacity="0.5" />

            {/* Chandelier Leaf Frame */}
            <path d="M55,85 C40,105 55,145 55,145 C55,145 70,105 55,85 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="1.5" />
            
            {/* Hanging Gems */}
            <circle cx="55" cy="100" r="4.5" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" />
            <circle cx="55" cy="138" r="6" fill="url(#gemGrad)" stroke={selectedGemstone === 'pearl' ? '#FFF' : metalHex} strokeWidth="1" filter="url(#glow)" />
          </g>
        </svg>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#2D3A31] selection:bg-[#E5DBC9] selection:text-[#2D3A31]">
      
      {/* Top Banner */}
      <div className="bg-[#2D3A31] text-[#FAF8F4] text-center py-2.5 px-4 text-xs tracking-widest font-[family-name:var(--font-plus-jakarta)] uppercase font-semibold border-b border-[#3E4E42]">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4B26F] animate-pulse" />
          Complimentary Insured Delivery Across India &bull; Showroom Appointments in Banjara Hills
        </span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#FAF8F4]/90 backdrop-blur-md border-b border-[#EBE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-[family-name:var(--font-prata)] tracking-[0.25em] text-[#2D3A31] font-normal leading-tight">
              AKOYA PEARLS
            </span>
            <span className="text-[10px] tracking-[0.4em] text-[#8EA393] uppercase font-bold pl-0.5">
              by ghanshyamdas
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 font-[family-name:var(--font-plus-jakarta)] text-xs tracking-widest uppercase font-semibold text-[#2D3A31]/80">
            <a href="#heritage" className="hover:text-[#D4B26F] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1px] after:bg-[#D4B26F] hover:after:w-full after:transition-all">Heritage</a>
            <a href="#collection" className="hover:text-[#D4B26F] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1px] after:bg-[#D4B26F] hover:after:w-full after:transition-all">Signature</a>
            <a href="#customizer" className="hover:text-[#D4B26F] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1px] after:bg-[#D4B26F] hover:after:w-full after:transition-all">Customizer</a>
            <a href="#consultation" className="hover:text-[#D4B26F] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1px] after:bg-[#D4B26F] hover:after:w-full after:transition-all">Book Consultation</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+914023351200"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D3A31]/80 hover:text-[#2D3A31]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4B26F]" />
              +91 40 2335 1200
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2D3A31] hover:bg-[#1D2A21] text-[#FAF8F4] text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-transparent hover:border-[#D4B26F]"
            >
              Reserve Slot
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6">
        {/* Organic Background Blobs & Botanical Graphics */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#8EA393]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#E5DBC9]/30 blur-3xl pointer-events-none"></div>
        
        {/* Soft Organic Leaf SVG Drawings as background overlay */}
        <div className="absolute top-10 right-10 w-80 h-80 text-[#8EA393]/10 opacity-30 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="0.5">
            <path d="M10,90 C30,70 40,40 90,10 M50,50 C40,42 45,30 55,38 M60,40 C55,28 62,22 70,32 M70,30 C65,18 75,10 82,22" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-80 h-80 text-[#8EA393]/10 opacity-30 pointer-events-none rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="0.5">
            <path d="M10,90 C30,70 40,40 90,10 M50,50 C40,42 45,30 55,38 M60,40 C55,28 62,22 70,32 M70,30 C65,18 75,10 82,22" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8EA393]/10 border border-[#8EA393]/20 text-[#2D3A31] text-[10px] tracking-widest uppercase font-bold mb-8">
              <Sparkles className="w-3 h-3 text-[#D4B26F]" />
              The Sovereign Collection &bull; Hyderabad
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-prata)] font-normal text-[#2D3A31] tracking-wide leading-tight mb-8">
              Where Nature Whispers in <br className="hidden sm:inline" />
              <span className="italic text-[#D4B26F] relative">
                Luminous Pearls
                <svg className="absolute left-0 bottom-[-10px] w-full h-[6px] text-[#8EA393]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 C30,2 70,8 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h1>

            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm sm:text-base text-[#2D3A31]/75 leading-relaxed max-w-xl mb-10">
              For generations, the Ghanshyamdas lineage has curated Hyderabad’s most legendary sea pearls. Our custom biophilic designs blend soft organic leaf silhouettes with flawless Akoya pearl strings to deliver understated luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="#customizer"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#2D3A31] hover:bg-[#1D2A21] text-[#FAF8F4] text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg hover:shadow-xl transition-all active:scale-95 border border-transparent hover:border-[#D4B26F] group"
              >
                Design Bespoke
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#collection"
                className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#EBE6DD] hover:border-[#2D3A31] text-[#2D3A31] text-xs font-bold tracking-widest uppercase rounded-sm shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                Explore Signature
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-[#2D3A31]/60 font-[family-name:var(--font-plus-jakarta)] text-xs tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4B26F]" />
                100% Certified Authentic Pearls
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D4B26F]" />
                Bespoke Design House Since 1928
              </div>
            </div>
          </div>

          {/* Premium Hero Image Frame with Asymmetric Botanical Border */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-tl-[6rem] rounded-br-[6rem] overflow-hidden border border-[#EBE6DD] shadow-2xl p-3 bg-white">
              <div className="w-full h-full rounded-tl-[5.5rem] rounded-br-[5.5rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" 
                  alt="Fine Akoya Pearl Necklace on display"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A31]/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] tracking-widest uppercase text-[#FAF8F4]/80 block mb-1">Akoya Signature</span>
                  <span className="font-[family-name:var(--font-prata)] text-lg">The Botanical Garland</span>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-8 -left-6 bg-white/95 backdrop-blur-md border border-[#EBE6DD] rounded-lg p-4 shadow-xl flex items-center gap-3.5 max-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F4] flex items-center justify-center text-[#D4B26F] border border-[#EBE6DD]">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <span className="text-[10px] tracking-wider text-[#8EA393] uppercase font-bold block">Accredited by</span>
                <span className="text-xs font-bold text-[#2D3A31] uppercase">Gemological Lab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 px-6 bg-[#2D3A31] text-[#FAF8F4] relative overflow-hidden">
        {/* Soft botanical vector divider in background */}
        <div className="absolute top-0 right-0 w-96 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="0.3">
            <path d="M0,0 C30,30 70,10 100,50 C70,60 90,90 50,100" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="80" cy="30" r="4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4B26F] text-xs tracking-[0.3em] uppercase font-bold block mb-4">THE GHANSHYAMDAS LEGACY</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-prata)] font-normal tracking-wide text-[#FAF8F4] mb-6">
              Cultivated in Serenity, Crafted in Hyderabad
            </h2>
            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm sm:text-base text-[#FAF8F4]/75 leading-relaxed">
              For close to a century, Ghanshyamdas has served as the custodian of luxury pearl curation in the historic city of Hyderabad. Our brand represents the seamless intersection of organic marine beauty and refined traditional metallurgy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-8 rounded-tr-[3rem] bg-[#1D2A21] border border-[#3E4E42] flex flex-col justify-between aspect-square">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4B26F] font-bold">CHAPTER I</span>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-prata)] text-[#FAF8F4] mb-3">Marine Perfection</h3>
                <p className="text-xs sm:text-sm text-[#FAF8F4]/70 leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                  Every Akoya pearl is hand-selected from pure coastal nurseries, chosen for its immaculate spherical shape, pinkish-white overtone, and deep mirror-like luster.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#1D2A21] border border-[#3E4E42] flex flex-col justify-between aspect-square">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4B26F] font-bold">CHAPTER II</span>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-prata)] text-[#FAF8F4] mb-3">Biophilic Artistry</h3>
                <p className="text-xs sm:text-sm text-[#FAF8F4]/70 leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                  We design from nature. The soft fluid curve of a branch, the gentle swell of a fresh jasmine bud, the asymmetry of wild ivy leaves—all replicated in precious metals.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-bl-[3rem] bg-[#1D2A21] border border-[#3E4E42] flex flex-col justify-between aspect-square">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4B26F] font-bold">CHAPTER III</span>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-prata)] text-[#FAF8F4] mb-3">Nizami Craftsmanship</h3>
                <p className="text-xs sm:text-sm text-[#FAF8F4]/70 leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                  Rooted in Banjara Hills, our master artisans bring decades of high-jewelry experience. Every clasp, pin, and micro-setting is executed with historic Nizam-inspired meticulousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left mb-6 md:mb-0">
            <span className="text-[#8EA393] text-xs tracking-[0.35em] uppercase font-bold block mb-3">CURATED MASTERPIECES</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-prata)] font-normal text-[#2D3A31]">
              The Signature Collections
            </h2>
          </div>
          <p className="font-[family-name:var(--font-plus-jakarta)] text-xs sm:text-sm text-[#2D3A31]/70 max-w-md text-left md:text-right leading-relaxed">
            Discover a selection of our finest works, showcasing the organic biophilic theme. Delicate floral settings meeting premium grade white and gold pearls.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "The Jasmine Blossom Choker",
              category: "Chokers & Neckbands",
              price: "₹4,80,000",
              desc: "Five strings of hand-matched Akoya pearls linked with a handcrafted 22K yellow gold floral jasmine center clasp containing fine emerald leaves.",
              image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
              badge: "Best Seller"
            },
            {
              title: "Dewdrop Cascade Earrings",
              category: "Earrings & Drops",
              price: "₹2,40,000",
              desc: "A cascade of platinum leaves framing selected teardrop pearls, embedded with VVS micro-diamonds that catch light with every movement.",
              image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
              badge: "Rare Edition"
            },
            {
              title: "The Nizam's Lagoon Pearl String",
              category: "Heritage Strings",
              price: "₹6,50,000",
              desc: "A singular long string of premium 9-10mm Akoya pearls. Anchored with an antique rose gold leaf filigree lock holding a brilliant cut central ruby.",
              image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600",
              badge: "Heritage Masterpiece"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-[#EBE6DD] rounded-tr-[3.5rem] rounded-bl-[3.5rem] p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative"
            >
              {item.badge && (
                <span className="absolute top-6 left-6 z-10 bg-[#2D3A31] text-[#FAF8F4] text-[9px] tracking-widest font-bold uppercase py-1 px-3 rounded-full">
                  {item.badge}
                </span>
              )}
              
              <div className="overflow-hidden rounded-tr-[3.2rem] rounded-bl-[3.2rem] aspect-square w-full mb-6 relative bg-[#FAF8F4]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-2 text-left flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-wider text-[#8EA393] uppercase font-bold block mb-1">{item.category}</span>
                  <h3 className="text-lg font-[family-name:var(--font-prata)] text-[#2D3A31] mb-3">{item.title}</h3>
                  <p className="text-xs text-[#2D3A31]/70 leading-relaxed font-[family-name:var(--font-plus-jakarta)] mb-6">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#FAF8F4] bg-[#FAF8F4]/30 -mx-2 px-2 rounded-bl-[2rem]">
                  <span className="text-base font-bold font-[family-name:var(--font-plus-jakarta)] text-[#2D3A31]">{item.price}</span>
                  <a 
                    href="#consultation" 
                    className="text-xs font-bold tracking-widest text-[#D4B26F] hover:text-[#2D3A31] uppercase transition-colors inline-flex items-center gap-1 active:scale-95"
                  >
                    Inquire
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Jewelry Customizer */}
      <section id="customizer" className="py-24 px-6 bg-[#FAF6EE] border-y border-[#EBE6DD] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#8EA393] text-xs tracking-[0.3em] uppercase font-bold block mb-3">BESPOKE WORKSHOP</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-prata)] font-normal text-[#2D3A31] mb-4">
              Bespoke Jewelry Visualizer
            </h2>
            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-[#2D3A31]/75">
              Select your item silhouette, choice of precious metal, and central organic gemstone. Instantly preview your creation and see custom price estimations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Visualizer Panel (Left) */}
            <div className="lg:col-span-6 bg-white border border-[#EBE6DD] rounded-tr-[4rem] rounded-bl-[4rem] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[9px] tracking-widest font-bold uppercase text-[#8EA393] border border-[#EBE6DD] py-1 px-3 rounded-full">
                Interactive Preview
              </div>
              
              <div className="flex-grow flex items-center justify-center py-6 min-h-[300px]">
                {renderVisualizerSVG()}
              </div>

              <div className="border-t border-[#EBE6DD]/60 pt-6">
                <span className="text-[10px] tracking-wider text-[#8EA393] uppercase font-bold block mb-1">Configuration Overview</span>
                <span className="font-[family-name:var(--font-prata)] text-lg text-[#2D3A31]">
                  {ITEMS[selectedItem].name} &bull; {metal.name}
                </span>
                <p className="text-xs text-[#2D3A31]/70 font-[family-name:var(--font-plus-jakarta)] mt-1.5 leading-relaxed">
                  {gem.desc} Gold and platinum weight calibrated specifically for organic comfort.
                </p>
              </div>
            </div>

            {/* Selection & Price Calculation Panel (Right) */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-8">
              
              {/* Selector Cards */}
              <div className="bg-white border border-[#EBE6DD] p-8 rounded-tr-[2rem] rounded-bl-[2rem] shadow-sm space-y-6">
                
                {/* 1. Item Type */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A31] block mb-3.5">
                    1. Select Jewelry Style
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {Object.entries(ITEMS).map(([key, details]) => (
                      <button
                        key={key}
                        onClick={() => { setSelectedItem(key); setCustomizerSaved(false); }}
                        className={`py-3 px-2 text-[10px] sm:text-xs font-bold tracking-wider uppercase border transition-all active:scale-95 rounded-sm ${
                          selectedItem === key 
                            ? 'bg-[#2D3A31] text-[#FAF8F4] border-transparent' 
                            : 'border-[#EBE6DD] text-[#2D3A31]/80 hover:border-[#2D3A31]'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Metal Choice */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A31] block mb-3.5">
                    2. Select Precious Metal
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {Object.entries(METALS).map(([key, details]) => (
                      <button
                        key={key}
                        onClick={() => { setSelectedMetal(key); setCustomizerSaved(false); }}
                        className={`py-3 px-2 text-[10px] sm:text-xs font-bold tracking-wider uppercase border transition-all active:scale-95 rounded-sm flex items-center justify-center gap-2 ${
                          selectedMetal === key 
                            ? 'bg-[#2D3A31] text-[#FAF8F4] border-transparent' 
                            : 'border-[#EBE6DD] text-[#2D3A31]/80 hover:border-[#2D3A31]'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: details.color }}></span>
                        {key === 'rose' ? 'Rose Gold' : key === 'gold' ? 'Yellow Gold' : 'Platinum'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Gemstone Choice */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A31] block mb-3.5">
                    3. Select Central Gemstone
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {Object.entries(GEMSTONES).map(([key, details]) => (
                      <button
                        key={key}
                        onClick={() => { setSelectedGemstone(key); setCustomizerSaved(false); }}
                        className={`py-3 px-1 text-[10px] font-bold tracking-wider uppercase border transition-all active:scale-95 rounded-sm ${
                          selectedGemstone === key 
                            ? 'bg-[#2D3A31] text-[#FAF8F4] border-transparent' 
                            : 'border-[#EBE6DD] text-[#2D3A31]/80 hover:border-[#2D3A31]'
                        }`}
                      >
                        {details.name.split(' ')[details.name.split(' ').length - 1]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Engraving (Optional input) */}
                <div>
                  <label htmlFor="engraving" className="text-xs font-bold uppercase tracking-wider text-[#2D3A31] block mb-2">
                    4. Bespoke Engraving (Optional)
                  </label>
                  <input
                    id="engraving"
                    type="text"
                    maxLength={15}
                    placeholder="E.g. A & R 2026"
                    value={engraving}
                    onChange={(e) => setEngraving(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#EBE6DD] focus:border-[#2D3A31] focus:ring-0 text-xs tracking-wider outline-none text-[#2D3A31] placeholder-[#8EA393]/60 transition-colors"
                  />
                  <span className="text-[10px] text-[#8EA393] block mt-1 text-right">Max 15 characters</span>
                </div>

              </div>

              {/* Price Breakdown Panel */}
              <div className="bg-[#2D3A31] text-[#FAF8F4] p-8 rounded-tr-[2rem] rounded-bl-[2rem] shadow-lg flex flex-col justify-between">
                <div className="border-b border-[#3E4E42] pb-4 mb-4">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4B26F] font-bold mb-1">DESIGN ESTIMATION RECEIPT</h4>
                  <p className="text-[10px] text-[#FAF8F4]/60 font-[family-name:var(--font-plus-jakarta)]">
                    Calculated in real-time based on live bullion index and gem sizing.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-[family-name:var(--font-plus-jakarta)] border-b border-[#3E4E42] pb-4 mb-4 tabular-nums">
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F4]/70">Base Silhouette & Curation ({item.name})</span>
                    <span>₹{item.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F4]/70">Precious Metal ({metal.name} &bull; {item.baseWeight}g)</span>
                    <span>₹{metalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F4]/70">Selected Gemstone ({gem.name} &bull; {item.gemCarats}ct)</span>
                    <span>₹{gemCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F4]/70">Artisan Making & Setting Charges ({metal.percent * 100}%)</span>
                    <span>₹{makingCharges.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#D4B26F] font-semibold">
                    <span>GST (3%)</span>
                    <span>₹{gst.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-6 tabular-nums">
                  <span className="text-xs uppercase tracking-widest font-bold">Estimated Total</span>
                  <span className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#D4B26F]">
                    ₹{finalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => setCustomizerSaved(true)}
                  className={`w-full py-4 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                    customizerSaved 
                      ? 'bg-[#FAF8F4] text-[#2D3A31] border border-transparent' 
                      : 'bg-[#D4B26F] hover:bg-[#C5A15F] text-[#2D3A31] border border-transparent'
                  }`}
                >
                  {customizerSaved ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      Design Saved to Inquiry
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4" />
                      Lock in Design & Estimate
                    </>
                  )}
                </button>
                {customizerSaved && (
                  <p className="text-[10px] text-[#FAF8F4]/70 text-center mt-2.5">
                    Your custom configuration will be pre-filled when you submit the consultation form below.
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Virtual Design Consultation Form */}
      <section id="consultation" className="py-24 px-6 relative overflow-hidden">
        {/* Soft biophilic background ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#8EA393]/10 opacity-40 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-12">
            <span className="text-[#8EA393] text-xs tracking-[0.3em] uppercase font-bold block mb-3">PRIVATE BOOKING</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-prata)] font-normal text-[#2D3A31] mb-4">
              Schedule a Virtual Design Consultation
            </h2>
            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-[#2D3A31]/75 max-w-xl mx-auto">
              Collaborate live with our creative director to design your bespoke heirloom. Select your preferred date, time, and tell us about your vision.
            </p>
          </div>

          <div className="bg-white border border-[#EBE6DD] p-8 md:p-12 rounded-tr-[4rem] rounded-bl-[4rem] shadow-xl text-left">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#2D3A31] text-[#D4B26F] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-prata)] text-[#2D3A31]">Consultation Secured</h3>
                <p className="text-sm font-[family-name:var(--font-plus-jakarta)] text-[#2D3A31]/75 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#2D3A31]">{formData.name}</strong>. A dedicated curator will reach out to you within 2 hours at <strong className="text-[#2D3A31]">{formData.phone}</strong> to confirm your slot for <strong className="text-[#2D3A31]">{new Date(formData.date).toLocaleDateString()}</strong>.
                </p>
                {customizerSaved && (
                  <div className="p-4 bg-[#FAF8F4] rounded-md max-w-md mx-auto text-xs text-[#2D3A31]/70 border border-[#EBE6DD]">
                    <span className="font-bold text-[#2D3A31] block mb-1">Attached Configuration:</span>
                    {ITEMS[selectedItem].name} in {metal.name} with {gem.name} {engraving && `(Engraving: "${engraving}")`}.
                  </div>
                )}
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase border border-[#2D3A31] text-[#2D3A31] hover:bg-[#2D3A31] hover:text-[#FAF8F4] transition-all rounded-sm active:scale-95"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-[#2D3A31] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF8F4] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-[#EBE6DD] focus:border-[#2D3A31]'
                      }`}
                      placeholder="Ananya Rao"
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-[#2D3A31] mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF8F4] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#EBE6DD] focus:border-[#2D3A31]'
                      }`}
                      placeholder="+91 98480 22338"
                    />
                    {formErrors.phone && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-[#2D3A31] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF8F4] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-[#EBE6DD] focus:border-[#2D3A31]'
                      }`}
                      placeholder="ananya.rao@gmail.com"
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold tracking-wider uppercase text-[#2D3A31] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF8F4] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.date ? 'border-red-500 focus:border-red-500' : 'border-[#EBE6DD] focus:border-[#2D3A31]'
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.date}</p>
                    )}
                  </div>
                </div>

                {/* Prefered Time Slot & Consultation type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="time" className="block text-xs font-bold tracking-wider uppercase text-[#2D3A31] mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#EBE6DD] focus:border-[#2D3A31] rounded-sm outline-none text-xs text-[#2D3A31]"
                    >
                      <option value="morning">Morning (10:00 AM - 12:30 PM)</option>
                      <option value="afternoon">Afternoon (02:00 PM - 04:30 PM)</option>
                      <option value="evening">Evening (05:00 PM - 07:30 PM)</option>
                    </select>
                  </div>

                  <div className="flex flex-col justify-end">
                    {customizerSaved ? (
                      <div className="p-3 bg-[#FAF8F4] border border-dashed border-[#8EA393]/50 text-[10px] text-[#2D3A31]/80 rounded-sm">
                        <span className="font-bold text-[#D4B26F] uppercase tracking-wider block mb-0.5">Customizer Attached</span>
                        {ITEMS[selectedItem].name} in {metal.name} with {gem.name} and engraving: "{engraving || 'None'}".
                      </div>
                    ) : (
                      <div className="p-3 bg-[#FAF8F4] border border-[#EBE6DD] text-[10px] text-[#8EA393] rounded-sm">
                        Pro tip: You can configure custom jewelry in the section above and it will be saved with this booking!
                      </div>
                    )}
                  </div>
                </div>

                {/* Consultation Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold tracking-wider uppercase text-[#2D3A31] mb-2">
                    Design Vision & Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#EBE6DD] focus:border-[#2D3A31] rounded-sm outline-none text-xs text-[#2D3A31] placeholder-[#8EA393]/60 transition-colors"
                    placeholder="Describe any particular theme, setting preference, or heirloom context you would like our curators to know."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#2D3A31] hover:bg-[#1D2A21] text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 border border-transparent hover:border-[#D4B26F]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D4B26F]" />
                      Securing Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#D4B26F]" />
                      Schedule Virtual Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-24 px-6 bg-[#FAF6EE] border-t border-[#EBE6DD]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#8EA393] text-xs tracking-[0.3em] uppercase font-bold block mb-3">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-prata)] font-normal text-[#2D3A31]">
              Heirloom Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "The Jasmine Blossom choker we designed for my daughter's wedding is a masterclass in organic luxury. Our designer at Banjara Hills took time to choose pearls of identical hue. The emerald leaves are stunning.",
                author: "Ananya Reddy",
                role: "Heirloom Collector",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "Ghanshyamdas Akoya pearls have an iridescent luster that catches light beautifully. I booked a virtual consultation to design custom pearl and diamond dewdrop earrings. The CAD sketches and finalized product exceeded my high expectations.",
                author: "Dr. Sameera Khan",
                role: "Consultant Cardiologist",
                location: "Banjara Hills, Hyderabad",
                rating: 5
              },
              {
                text: "The customizer tool made it easy to experiment with gemstone combinations. I chose a platinum jasmine bud ring with a central Zambian emerald. The quality is flawless, and the packaging was pure luxury.",
                author: "Rohan Kapoor",
                role: "Entrepreneur",
                location: "Gachibowli, Hyderabad",
                rating: 5
              }
            ].map((review, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#EBE6DD] p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4B26F] text-[#D4B26F]" />
                    ))}
                  </div>

                  <p className="font-[family-name:var(--font-plus-jakarta)] text-xs sm:text-sm text-[#2D3A31]/85 italic leading-relaxed text-left">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#FAF6EE] mt-6 flex flex-col items-start text-left">
                  <span className="font-bold text-xs text-[#2D3A31]">{review.author}</span>
                  <span className="text-[10px] text-[#8EA393] uppercase font-semibold mt-0.5">
                    {review.role} &bull; {review.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D2A21] text-[#FAF8F4] border-t border-[#2D3A31] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-left mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-[family-name:var(--font-prata)] tracking-widest text-[#FAF8F4] block">
              AKOYA PEARLS
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#D4B26F] uppercase font-bold block pl-0.5">
              by ghanshyamdas
            </span>
            <p className="text-xs text-[#FAF8F4]/60 max-w-sm leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
              Crafting premium organic pearl jewelry and bespoke biophilic designs since 1928. Certified craftsmanship for discerning patrons in Hyderabad and beyond.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase text-[#D4B26F]">THE SHOWROOM</h4>
            <div className="space-y-2.5 text-xs text-[#FAF8F4]/70 font-[family-name:var(--font-plus-jakarta)]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4B26F] flex-shrink-0" />
                <span>Road No. 2, Banjara Hills,<br />Hyderabad, Telangana 500034.</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4B26F]" />
                <a href="tel:+914023351200" className="hover:text-[#D4B26F] transition-colors">+91 40 2335 1200</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4B26F]" />
                <a href="mailto:akoyapearls@ghanshyamdas.com" className="hover:text-[#D4B26F] transition-colors">akoyapearls@ghanshyamdas.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase text-[#D4B26F]">SHOWROOM HOURS</h4>
            <div className="space-y-2 text-xs text-[#FAF8F4]/70 font-[family-name:var(--font-plus-jakarta)]">
              <p className="flex items-center justify-between">
                <span>Monday - Saturday:</span>
                <span>11:00 AM - 8:00 PM</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Sunday:</span>
                <span className="text-[#D4B26F] italic">By Private Appointment</span>
              </p>
              <p className="flex items-start gap-2 mt-4 text-[10px] text-[#FAF8F4]/50 border-t border-[#3E4E42]/40 pt-3">
                <Clock className="w-3.5 h-3.5 text-[#D4B26F] flex-shrink-0" />
                <span>Private valuation and bespoke consultations can be booked in advance.</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#3E4E42] flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#FAF8F4]/40 font-[family-name:var(--font-plus-jakarta)]">
          <p>&copy; {new Date().getFullYear()} Akoya Pearls by Ghanshyamdas. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#FAF8F4] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF8F4] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FAF8F4] transition-colors">Certificate Authenticity</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

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
  Layers, 
  Loader2,
  Clock,
  Award
} from 'lucide-react';

const METALS = {
  antiqueGold: { name: '22K Antique Gold', color: '#C59B4B', border: '#9B742B', rate: 6700, percent: 0.15 },
  yellowGold: { name: '18K Fine Gold', color: '#D4AF37', border: '#B89024', rate: 5800, percent: 0.14 },
  platinum: { name: 'Platinum 950', color: '#E5E7EB', border: '#9CA3AF', rate: 4800, percent: 0.12 }
};

const GEMSTONES = {
  ruby: { name: 'Burmese Ruby', color: '#BE123C', rate: 75000, desc: 'Fiery crimson gemstone of royal lineage.' },
  emerald: { name: 'Zambian Emerald', color: '#047857', rate: 85000, desc: 'Luminous green capturing floral biophilia.' },
  diamond: { name: 'Polki Cut Diamond', color: '#FEF08A', rate: 110000, desc: 'Traditional raw diamond uncut styling.' },
  pearl: { name: 'Basra Seed Pearl', color: '#FFFDF9', rate: 22000, desc: 'Rare antique Persian Gulf seed pearls.' }
};

const ITEMS = {
  choker: { name: 'Lotus Garland Choker', baseWeight: 42, gemCarats: 5.0, basePrice: 65000 },
  ring: { name: 'Royal Peacock Ring', baseWeight: 9, gemCarats: 1.5, basePrice: 20000 },
  jhumkas: { name: 'Floral Petal Jhumkas', baseWeight: 22, gemCarats: 3.2, basePrice: 35000 }
};

export default function SurajBhanPage() {
  // Customizer State
  const [selectedItem, setSelectedItem] = useState('choker');
  const [selectedMetal, setSelectedMetal] = useState('antiqueGold');
  const [selectedGemstone, setSelectedGemstone] = useState('ruby');
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

  // SVG Visualizer for Suraj Bhan Jewellers
  const renderVisualizerSVG = () => {
    const metalHex = metal.color;
    const gemHex = gem.color;

    if (selectedItem === 'choker') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-h-[320px] mx-auto text-[#27352B]">
          <defs>
            <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
              <stop offset="70%" stopColor={metalHex} />
              <stop offset="100%" stopColor={metal.border} />
            </radialGradient>
            <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor={gemHex} />
              <stop offset="100%" stopColor="#3F2B04" />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Traditional Temple Arch outline in BG */}
          <path d="M50,160 C50,60 150,60 150,160" fill="none" stroke="#EBE6DD" strokeWidth="2" />
          <path d="M40,160 C40,50 160,50 160,160" fill="none" stroke={metalHex} strokeWidth="0.5" opacity="0.3" />
          
          {/* Main Gold Band */}
          <path d="M50,70 C50,130 150,130 150,70" fill="none" stroke="url(#metalGrad)" strokeWidth="6" strokeLinecap="round" />
          <path d="M55,75 C55,125 145,125 145,75" fill="none" stroke="#FFF" strokeWidth="1" opacity="0.3" />

          {/* Nizami Filigree Temple Arches along collar */}
          {[
            { cx: 70, cy: 92 }, { cx: 85, cy: 104 }, { cx: 100, cy: 108 }, 
            { cx: 115, cy: 104 }, { cx: 130, cy: 92 }
          ].map((pt, i) => (
            <g key={i} transform={`translate(${pt.cx - 10}, ${pt.cy - 10})`}>
              <path d="M10,2 C4,6 4,14 10,18 C16,14 16,6 10,2 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="1" />
              <circle cx="10" cy="10" r="3.5" fill="url(#gemGrad)" />
            </g>
          ))}

          {/* Main Center Lotus Medallion */}
          <g transform="translate(80, 108)">
            {/* Outer golden lotus petals */}
            <path d="M20,0 C32,-15 8,-25 20,-40 C32,-25 8,-15 20,0" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="1" />
            <path d="M20,0 C8,-15 32,-25 20,-40 C8,-25 32,-15 20,0" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="1" opacity="0.8" />
            
            {/* Center Gemstone in Lotus */}
            <circle cx="20" cy="-20" r="8" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="1" filter="url(#glow)" />
            
            {/* Small Hanging Basra Pearls */}
            <circle cx="20" cy="-2" r="3" fill="#FFFDF9" stroke="#EBE6DD" strokeWidth="0.5" />
            <circle cx="8" cy="-8" r="2.5" fill="#FFFDF9" stroke="#EBE6DD" strokeWidth="0.5" />
            <circle cx="32" cy="-8" r="2.5" fill="#FFFDF9" stroke="#EBE6DD" strokeWidth="0.5" />
          </g>
        </svg>
      );
    } else if (selectedItem === 'ring') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-h-[320px] mx-auto text-[#27352B]">
          <defs>
            <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
              <stop offset="70%" stopColor={metalHex} />
              <stop offset="100%" stopColor={metal.border} />
            </radialGradient>
            <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor={gemHex} />
              <stop offset="100%" stopColor="#3F2B04" />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Heavy Gold Band */}
          <circle cx="100" cy="120" r="38" fill="none" stroke="url(#metalGrad)" strokeWidth="8" />
          
          {/* Filigree Carvings on Band */}
          <path d="M68,103 C60,110 70,120 66,130" fill="none" stroke={metal.border} strokeWidth="1" />
          <path d="M132,103 C140,110 130,120 134,130" fill="none" stroke={metal.border} strokeWidth="1" />

          {/* Dome shape Mount (Nizami dome) */}
          <path d="M70,85 C75,70 125,70 130,85 L70,85 Z" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="1.5" />

          {/* Gemstone Cluster (Flower arrangement) */}
          {/* Center Gem */}
          <circle cx="100" cy="72" r="9" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="1" filter="url(#glow)" />
          
          {/* Flanking Halo Gems */}
          {[
            { cx: 86, cy: 72 }, { cx: 114, cy: 72 }, { cx: 100, cy: 58 }, { cx: 100, cy: 86 },
            { cx: 90, cy: 62 }, { cx: 110, cy: 62 }, { cx: 90, cy: 82 }, { cx: 110, cy: 82 }
          ].map((g, i) => (
            <circle key={i} cx={g.cx} cy={g.cy} r="3" fill="#FFFDF9" stroke={metalHex} strokeWidth="0.5" />
          ))}
        </svg>
      );
    } else {
      // Jhumkas
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-h-[320px] mx-auto text-[#27352B]">
          <defs>
            <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
              <stop offset="70%" stopColor={metalHex} />
              <stop offset="100%" stopColor={metal.border} />
            </radialGradient>
            <radialGradient id="gemGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor={gemHex} />
              <stop offset="100%" stopColor="#3F2B04" />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Jhumka Left */}
          <g transform="translate(-5, 0)">
            {/* Stud (Flower shape) */}
            <circle cx="60" cy="50" r="7" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="1" filter="url(#glow)" />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 60 + Math.cos(rad) * 11;
              const cy = 50 + Math.sin(rad) * 11;
              return <circle key={i} cx={cx} cy={cy} r="3" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="0.5" />;
            })}

            {/* Connecting Chain Link */}
            <path d="M60,63 L60,82" fill="none" stroke="url(#metalGrad)" strokeWidth="3" />

            {/* Umbrella Dome (The Jhumka Cup) */}
            <path d="M40,105 C40,82 80,82 80,105 Z" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="1.5" />
            <path d="M40,105 L80,105" fill="none" stroke="url(#metalGrad)" strokeWidth="3" />

            {/* Small Hanging Ruby/Emerald drops at bottom of cup */}
            <circle cx="45" cy="115" r="2.5" fill="url(#gemGrad)" />
            <circle cx="52.5" cy="118" r="2.5" fill="url(#gemGrad)" />
            <circle cx="60" cy="120" r="3" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" filter="url(#glow)" />
            <circle cx="67.5" cy="118" r="2.5" fill="url(#gemGrad)" />
            <circle cx="75" cy="115" r="2.5" fill="url(#gemGrad)" />
          </g>

          {/* Jhumka Right */}
          <g transform="translate(85, 0)">
            {/* Stud (Flower shape) */}
            <circle cx="60" cy="50" r="7" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="1" filter="url(#glow)" />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 60 + Math.cos(rad) * 11;
              const cy = 50 + Math.sin(rad) * 11;
              return <circle key={i} cx={cx} cy={cy} r="3" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="0.5" />;
            })}

            {/* Connecting Chain Link */}
            <path d="M60,63 L60,82" fill="none" stroke="url(#metalGrad)" strokeWidth="3" />

            {/* Umbrella Dome (The Jhumka Cup) */}
            <path d="M40,105 C40,82 80,82 80,105 Z" fill="url(#metalGrad)" stroke={metal.border} strokeWidth="1.5" />
            <path d="M40,105 L80,105" fill="none" stroke="url(#metalGrad)" strokeWidth="3" />

            {/* Small Hanging Ruby/Emerald drops at bottom of cup */}
            <circle cx="45" cy="115" r="2.5" fill="url(#gemGrad)" />
            <circle cx="52.5" cy="118" r="2.5" fill="url(#gemGrad)" />
            <circle cx="60" cy="120" r="3" fill="url(#gemGrad)" stroke={metalHex} strokeWidth="0.5" filter="url(#glow)" />
            <circle cx="67.5" cy="118" r="2.5" fill="url(#gemGrad)" />
            <circle cx="75" cy="115" r="2.5" fill="url(#gemGrad)" />
          </g>
        </svg>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#27352B] selection:bg-[#EBE6DD] selection:text-[#27352B]">
      
      {/* Top Banner */}
      <div className="bg-[#27352B] text-[#FAF9F6] text-center py-2 px-4 text-xs tracking-widest font-[family-name:var(--font-inter)] uppercase font-semibold border-b border-[#36473B]">
        <span className="inline-flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#C59B4B] animate-pulse" />
          Master Craftsmanship Since 1952 &bull; Historic Charminar Showroom
        </span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-[family-name:var(--font-cinzel)] tracking-[0.2em] text-[#27352B] font-semibold leading-tight">
              SURAJ BHAN
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#C59B4B] uppercase font-bold pl-0.5">
              jewellers &bull; charminar
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase font-bold text-[#27352B]/85">
            <a href="#heritage" className="hover:text-[#C59B4B] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C59B4B] hover:after:w-full after:transition-all">Heritage</a>
            <a href="#collection" className="hover:text-[#C59B4B] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C59B4B] hover:after:w-full after:transition-all">Signature</a>
            <a href="#customizer" className="hover:text-[#C59B4B] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C59B4B] hover:after:w-full after:transition-all">Workshop</a>
            <a href="#consultation" className="hover:text-[#C59B4B] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C59B4B] hover:after:w-full after:transition-all">Virtual Session</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+914024520151"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#27352B]/80 hover:text-[#27352B]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B4B]" />
              +91 40 2452 0151
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#27352B] hover:bg-[#1C281F] text-[#FAF9F6] text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C59B4B]/30 hover:border-[#C59B4B]"
            >
              Book Inquiry
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6">
        <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-[#728475]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#C59B4B]/10 blur-3xl pointer-events-none"></div>
        
        {/* Nizam Arch SVG as decorative frame */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full max-w-[800px] text-[#27352B] fill-none stroke-current" strokeWidth="1">
            <path d="M200,40 C120,40 40,120 40,240 L40,360 L360,360 L360,240 C360,120 280,40 200,40 Z" />
            <path d="M200,60 C130,60 60,130 60,240 L60,340 L340,340 L340,240 C340,130 270,60 200,60 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B4B]/15 border border-[#C59B4B]/30 text-[#27352B] text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
              <Award className="w-3 h-3 text-[#C59B4B]" />
              Generations of Royal Nizami Jewelry
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-cinzel)] font-semibold text-[#27352B] tracking-wide leading-tight mb-8">
              Immortalizing Nizami <br className="hidden sm:inline" />
              <span className="text-[#C59B4B]">Temple Heritage</span>
            </h1>

            <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-[#27352B]/80 leading-relaxed max-w-xl mb-10">
              Steeped in the cultural tapestry of Charminar since 1952, Suraj Bhan Jewellers translates traditional Hindu temple motifs and Nizami courtly splendor into heavy, masterfully chiseled 22K gold heirlooms.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="#customizer"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#27352B] hover:bg-[#1C281F] text-[#FAF9F6] text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg hover:shadow-xl transition-all active:scale-95 border border-[#C59B4B]/40 group"
              >
                Design Heirloom
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#collection"
                className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#EAE3D5] hover:border-[#27352B] text-[#27352B] text-xs font-bold tracking-widest uppercase rounded-sm shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                View Collections
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-[#27352B]/60 font-[family-name:var(--font-inter)] text-xs tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C59B4B]" />
                Bureau of Indian Standards (BIS) Hallmarked
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C59B4B]" />
                70+ Years Legacy in Old City
              </div>
            </div>
          </div>

          {/* Premium Image Frame with Nizami Arch Silhouette */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] overflow-hidden border border-[#EAE3D5] shadow-2xl p-3 bg-white rounded-t-[10rem] rounded-b-md">
              <div className="w-full h-full overflow-hidden relative rounded-t-[9.5rem] rounded-b-sm">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600" 
                  alt="Gold temple necklace with rubies and pearls"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27352B]/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] tracking-widest uppercase text-[#FAF9F6]/85 block mb-1">Old City Couture</span>
                  <span className="font-[family-name:var(--font-cinzel)] text-lg">The Lotus Temple Garland</span>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-8 -right-6 bg-white/95 backdrop-blur-md border border-[#EAE3D5] rounded-sm p-4 shadow-xl flex items-center gap-3.5 max-w-[210px]">
              <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C59B4B] border border-[#EAE3D5]">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <span className="text-[10px] tracking-wider text-[#728475] uppercase font-bold block">Highly Rated</span>
                <span className="text-xs font-bold text-[#27352B] uppercase">Premium Bridal Choice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 px-6 bg-[#27352B] text-[#FAF9F6] relative overflow-hidden">
        {/* Soft floral lotus motif SVG in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.02] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M50,10 C55,25 70,25 75,40 C65,45 60,35 50,45 C40,35 35,45 25,40 C30,25 45,25 50,10 Z" />
            <path d="M50,45 C55,60 70,60 75,75 C65,80 60,70 50,80 C40,70 35,80 25,75 C30,60 45,60 50,45 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C59B4B] text-xs tracking-[0.3em] uppercase font-bold block mb-4">ESTABLISHED 1952</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-normal tracking-wide text-[#FAF9F6] mb-6">
              Custodian of Nizami Splendor
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-[#FAF9F6]/80 leading-relaxed">
              Situated in the historic shadow of Charminar, Suraj Bhan Jewellers has defined royal wedding trousseaus for generations. Our hand-beaten gold, deep crimson rubies, and traditional Basra seed pearls invoke the royal archives of the Nizam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-8 rounded-t-[2rem] bg-[#1C281F] border border-[#36473B] flex flex-col justify-between aspect-square">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C59B4B] font-bold">THE INCEPTION</span>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] text-[#FAF9F6] mb-3">Charminar Roots</h3>
                <p className="text-xs sm:text-sm text-[#FAF9F6]/75 leading-relaxed font-[family-name:var(--font-inter)]">
                  Founded in Pathergatti near Charminar, the store began as a bespoke goldsmithing guild servicing royal families of the Deccan.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#1C281F] border border-[#36473B] flex flex-col justify-between aspect-square">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C59B4B] font-bold">THE MOTIF</span>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] text-[#FAF9F6] mb-3">Temple Flora</h3>
                <p className="text-xs sm:text-sm text-[#FAF9F6]/75 leading-relaxed font-[family-name:var(--font-inter)]">
                  Our designs celebrate the sacred flora of South Indian temple arches—the lotus petals, divine peacocks, and cascading floral wreaths detailed in solid metal.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-b-[2rem] bg-[#1C281F] border border-[#36473B] flex flex-col justify-between aspect-square">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C59B4B] font-bold">THE SAVOIR-FAIRE</span>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] text-[#FAF9F6] mb-3">Nakshi Metalwork</h3>
                <p className="text-xs sm:text-sm text-[#FAF9F6]/75 leading-relaxed font-[family-name:var(--font-inter)]">
                  Mastery in Nakshi (embossing) and Kundan settings. Every single gemstone is wrapped in gold leaf borders to lock down details that endure centuries.
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
            <span className="text-[#728475] text-xs tracking-[0.3em] uppercase font-bold block mb-3">ROYAL ARCHIVES</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-semibold text-[#27352B]">
              The Heritage Masterpieces
            </h2>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-xs sm:text-sm text-[#27352B]/75 max-w-md text-left md:text-right leading-relaxed">
            A showcase of heavy bridal jewelry, utilizing deep carvings, Basra seed pearls, and rich rubies in 22K antique gold.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "The Charminar Polki Choker",
              category: "Bridal Necklaces",
              price: "₹6,80,000",
              desc: "A majestic choker embedded with flat-cut Polki diamonds, Burmese rubies, and micro-engraved lotus motifs, with Basra pearl hangings.",
              image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600",
              badge: "Royal Speciality"
            },
            {
              title: "Peacock Garland Jhumkas",
              category: "Temple Earrings",
              price: "₹2,90,000",
              desc: "Traditional heavy dangling Jhumkas featuring symmetrical peacocks sipping floral nectar, micro-set in 22K hand-beaten gold.",
              image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
              badge: "Signature Nakshi"
            },
            {
              title: "Nizami Navaratna Kada",
              category: "Handcrafted Bangles",
              price: "₹4,20,000",
              desc: "A pair of heavy gold bangles holding the nine sacred gemstones, framed by floral vine borders carved directly into the metal.",
              image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
              badge: "Limited Edition"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-[#EAE3D5] rounded-t-[3.5rem] rounded-b-sm p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative"
            >
              {item.badge && (
                <span className="absolute top-6 left-6 z-10 bg-[#C59B4B] text-white text-[9px] tracking-widest font-bold uppercase py-1 px-3 rounded-sm">
                  {item.badge}
                </span>
              )}
              
              <div className="overflow-hidden rounded-t-[3.2rem] rounded-b-sm aspect-square w-full mb-6 relative bg-[#FAF9F6]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-2 text-left flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-wider text-[#C59B4B] uppercase font-bold block mb-1">{item.category}</span>
                  <h3 className="text-lg font-[family-name:var(--font-cinzel)] text-[#27352B] font-semibold mb-3">{item.title}</h3>
                  <p className="text-xs text-[#27352B]/75 leading-relaxed font-[family-name:var(--font-inter)] mb-6">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#FAF9F6] bg-[#FAF9F6]/30 -mx-2 px-2 rounded-b-sm">
                  <span className="text-base font-bold font-[family-name:var(--font-inter)] text-[#27352B]">{item.price}</span>
                  <a 
                    href="#consultation" 
                    className="text-xs font-bold tracking-widest text-[#C59B4B] hover:text-[#27352B] uppercase transition-colors inline-flex items-center gap-1 active:scale-95"
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
      <section id="customizer" className="py-24 px-6 bg-[#FAF6EE] border-y border-[#EAE3D5] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#728475] text-xs tracking-[0.3em] uppercase font-bold block mb-3">BESPOKE ANVIL</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-normal text-[#27352B] mb-4">
              Traditional Customizer
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#27352B]/75">
              Select your temple silhouette, heavy metal setting, and central royal gemstone. Instantly preview your creation and receive custom price estimations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Visualizer Panel (Left) */}
            <div className="lg:col-span-6 bg-white border border-[#EAE3D5] rounded-t-[5rem] rounded-b-sm p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[9px] tracking-widest font-bold uppercase text-[#C59B4B] border border-[#EAE3D5] py-1 px-3 rounded-sm">
                Heritage Render
              </div>
              
              <div className="flex-grow flex items-center justify-center py-6 min-h-[300px]">
                {renderVisualizerSVG()}
              </div>

              <div className="border-t border-[#EAE3D5] pt-6">
                <span className="text-[10px] tracking-wider text-[#C59B4B] uppercase font-bold block mb-1">Configuration Overview</span>
                <span className="font-[family-name:var(--font-cinzel)] text-lg text-[#27352B] font-semibold">
                  {ITEMS[selectedItem].name} &bull; {metal.name}
                </span>
                <p className="text-xs text-[#27352B]/75 font-[family-name:var(--font-inter)] mt-1.5 leading-relaxed">
                  {gem.desc} Embossed by hand using traditional Nizami jewelry techniques.
                </p>
              </div>
            </div>

            {/* Selection & Price Calculation Panel (Right) */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-8">
              
              {/* Selector Cards */}
              <div className="bg-white border border-[#EAE3D5] p-8 rounded-t-[2rem] rounded-b-sm shadow-sm space-y-6">
                
                {/* 1. Item Type */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#27352B] block mb-3.5">
                    1. Select Temple Silhouette
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {Object.entries(ITEMS).map(([key, details]) => (
                      <button
                        key={key}
                        onClick={() => { setSelectedItem(key); setCustomizerSaved(false); }}
                        className={`py-3 px-2 text-[10px] sm:text-xs font-bold tracking-wider uppercase border transition-all active:scale-95 rounded-sm ${
                          selectedItem === key 
                            ? 'bg-[#27352B] text-[#FAF9F6] border-transparent' 
                            : 'border-[#EAE3D5] text-[#27352B]/85 hover:border-[#27352B]'
                        }`}
                      >
                        {key === 'jhumkas' ? 'Jhumkas' : key}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Metal Choice */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#27352B] block mb-3.5">
                    2. Select Heavy Gold Base
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {Object.entries(METALS).map(([key, details]) => (
                      <button
                        key={key}
                        onClick={() => { setSelectedMetal(key); setCustomizerSaved(false); }}
                        className={`py-3 px-2 text-[10px] sm:text-xs font-bold tracking-wider uppercase border transition-all active:scale-95 rounded-sm flex items-center justify-center gap-2 ${
                          selectedMetal === key 
                            ? 'bg-[#27352B] text-[#FAF9F6] border-transparent' 
                            : 'border-[#EAE3D5] text-[#27352B]/85 hover:border-[#27352B]'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: details.color }}></span>
                        {key === 'antiqueGold' ? '22K Antique' : key === 'yellowGold' ? '18K Yellow' : 'Platinum'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Gemstone Choice */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#27352B] block mb-3.5">
                    3. Select Central Gemstone
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {Object.entries(GEMSTONES).map(([key, details]) => (
                      <button
                        key={key}
                        onClick={() => { setSelectedGemstone(key); setCustomizerSaved(false); }}
                        className={`py-3 px-1 text-[10px] font-bold tracking-wider uppercase border transition-all active:scale-95 rounded-sm ${
                          selectedGemstone === key 
                            ? 'bg-[#27352B] text-[#FAF9F6] border-transparent' 
                            : 'border-[#EAE3D5] text-[#27352B]/85 hover:border-[#27352B]'
                        }`}
                      >
                        {key === 'antiqueGold' ? 'Polki' : details.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Engraving (Optional input) */}
                <div>
                  <label htmlFor="engraving" className="text-xs font-bold uppercase tracking-wider text-[#27352B] block mb-2">
                    4. Heritage Stamp / Engraving (Optional)
                  </label>
                  <input
                    id="engraving"
                    type="text"
                    maxLength={15}
                    placeholder="E.g. S & V 1952"
                    value={engraving}
                    onChange={(e) => setEngraving(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAE3D5] focus:border-[#27352B] focus:ring-0 text-xs tracking-wider outline-none text-[#27352B] placeholder-[#728475]/60 transition-colors"
                  />
                  <span className="text-[10px] text-[#728475] block mt-1 text-right">Max 15 characters</span>
                </div>

              </div>

              {/* Price Breakdown Panel */}
              <div className="bg-[#27352B] text-[#FAF9F6] p-8 rounded-t-[2rem] rounded-b-sm shadow-lg flex flex-col justify-between border border-[#C59B4B]/20">
                <div className="border-b border-[#36473B] pb-4 mb-4">
                  <h4 className="text-xs tracking-[0.25em] uppercase text-[#C59B4B] font-bold mb-1">REAL-TIME BULLION INVOICE</h4>
                  <p className="text-[10px] text-[#FAF9F6]/60 font-[family-name:var(--font-inter)]">
                    Calculated in real-time using current gold bullion market rates.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-[family-name:var(--font-inter)] border-b border-[#36473B] pb-4 mb-4 tabular-nums">
                  <div className="flex justify-between">
                    <span className="text-[#FAF9F6]/70">Base Silhouette & Curation ({item.name})</span>
                    <span>₹{item.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF9F6]/70">Precious Metal ({metal.name} &bull; {item.baseWeight}g)</span>
                    <span>₹{metalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF9F6]/70">Selected Gemstone ({gem.name} &bull; {item.gemCarats}ct)</span>
                    <span>₹{gemCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF9F6]/70">Nakshi Embossing & Making Charges ({metal.percent * 100}%)</span>
                    <span>₹{makingCharges.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#C59B4B] font-semibold">
                    <span>GST (3%)</span>
                    <span>₹{gst.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-6 tabular-nums">
                  <span className="text-xs uppercase tracking-widest font-bold">Estimated Cost</span>
                  <span className="text-2xl font-bold font-[family-name:var(--font-inter)] text-[#C59B4B]">
                    ₹{finalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => setCustomizerSaved(true)}
                  className={`w-full py-4 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                    customizerSaved 
                      ? 'bg-[#FAF9F6] text-[#27352B] border border-transparent' 
                      : 'bg-[#C59B4B] hover:bg-[#B48B3D] text-[#27352B] border border-transparent'
                  }`}
                >
                  {customizerSaved ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      Inquiry Configuration Saved
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4" />
                      Lock in Design & Estimate
                    </>
                  )}
                </button>
                {customizerSaved && (
                  <p className="text-[10px] text-[#FAF9F6]/70 text-center mt-2.5">
                    Your design config will be attached when you submit the booking below.
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Virtual Design Consultation Form */}
      <section id="consultation" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C59B4B]/10 opacity-30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-12">
            <span className="text-[#728475] text-xs tracking-[0.3em] uppercase font-bold block mb-3">PRIVATE SUITE</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-normal text-[#27352B] mb-4">
              Schedule a Virtual Design Consultation
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#27352B]/75 max-w-xl mx-auto">
              Collaborate live with our master designers to outline your royal wedding trousseau. Select your preferred date, time, and specify details.
            </p>
          </div>

          <div className="bg-white border border-[#EAE3D5] p-8 md:p-12 rounded-t-[4rem] rounded-b-sm shadow-xl text-left">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#27352B] text-[#C59B4B] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-[#27352B] font-semibold">Consultation Secured</h3>
                <p className="text-sm font-[family-name:var(--font-inter)] text-[#27352B]/75 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#27352B]">{formData.name}</strong>. A Suraj Bhan curator will reach out to you within 2 hours at <strong className="text-[#27352B]">{formData.phone}</strong> to confirm your slot for <strong className="text-[#27352B]">{new Date(formData.date).toLocaleDateString()}</strong>.
                </p>
                {customizerSaved && (
                  <div className="p-4 bg-[#FAF9F6] rounded-sm max-w-md mx-auto text-xs text-[#27352B]/80 border border-[#EAE3D5]">
                    <span className="font-bold text-[#C59B4B] block mb-1">Customizer Settings:</span>
                    {ITEMS[selectedItem].name} in {metal.name} with {gem.name} {engraving && `(Stamp: "${engraving}")`}.
                  </div>
                )}
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase border border-[#27352B] text-[#27352B] hover:bg-[#27352B] hover:text-[#FAF9F6] transition-all rounded-sm active:scale-95"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-[#27352B] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF9F6] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-[#EAE3D5] focus:border-[#27352B]'
                      }`}
                      placeholder="Sravanthi Rao"
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-[#27352B] mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF9F6] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#EAE3D5] focus:border-[#27352B]'
                      }`}
                      placeholder="+91 91770 44552"
                    />
                    {formErrors.phone && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-[#27352B] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF9F6] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-[#EAE3D5] focus:border-[#27352B]'
                      }`}
                      placeholder="sravanthi@gmail.com"
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold tracking-wider uppercase text-[#27352B] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#FAF9F6] border rounded-sm outline-none text-xs transition-colors ${
                        formErrors.date ? 'border-red-500 focus:border-red-500' : 'border-[#EAE3D5] focus:border-[#27352B]'
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
                    <label htmlFor="time" className="block text-xs font-bold tracking-wider uppercase text-[#27352B] mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAE3D5] focus:border-[#27352B] rounded-sm outline-none text-xs text-[#27352B]"
                    >
                      <option value="morning">Morning (10:00 AM - 12:30 PM)</option>
                      <option value="afternoon">Afternoon (02:00 PM - 04:30 PM)</option>
                      <option value="evening">Evening (05:00 PM - 07:30 PM)</option>
                    </select>
                  </div>

                  <div className="flex flex-col justify-end">
                    {customizerSaved ? (
                      <div className="p-3 bg-[#FAF9F6] border border-dashed border-[#C59B4B] text-[10px] text-[#27352B] rounded-sm">
                        <span className="font-bold text-[#C59B4B] uppercase tracking-wider block mb-0.5">Customizer Configuration Attached</span>
                        {ITEMS[selectedItem].name} in {metal.name} with {gem.name} {engraving && `(Stamp: "${engraving}")`}.
                      </div>
                    ) : (
                      <div className="p-3 bg-[#FAF9F6] border border-[#EAE3D5] text-[10px] text-[#728475] rounded-sm">
                        Pro tip: You can customize a jewelry design above to automatically attach it to this consultation request!
                      </div>
                    )}
                  </div>
                </div>

                {/* Consultation Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold tracking-wider uppercase text-[#27352B] mb-2">
                    Bespoke Vision & Heirloom Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAE3D5] focus:border-[#27352B] rounded-sm outline-none text-xs text-[#27352B] placeholder-[#728475]/60 transition-colors"
                    placeholder="Describe any particular style family (Nakshi, Guttapusalu, Polki), metal weight expectations, or wedding theme context."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#27352B] hover:bg-[#1C281F] text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 border border-transparent hover:border-[#C59B4B]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C59B4B]" />
                      Securing Schedule Slot...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#C59B4B]" />
                      Confirm Schedule Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-24 px-6 bg-[#FAF6EE] border-t border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#728475] text-xs tracking-[0.3em] uppercase font-bold block mb-3">PATRON STORIES</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-semibold text-[#27352B]">
              Liturgy of Luster
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "The peacock Jhumkas are a marvel. Sourced for my granddaughter's engagement, they possess a weight and richness of antique gold that modern jewellers simply cannot replicate. The Charminar staff was incredibly hospitable.",
                author: "Ranganayaki Devulapalli",
                role: "Traditional Patron",
                location: "Jubilee Hills, Hyderabad",
                rating: 5
              },
              {
                text: "Suraj Bhan is our family jeweler since my wedding in 1978. For my daughter's wedding, we customized the Lotus Temple Garland necklace with Burmese rubies. The Nakshi embossed leaf pattern is pristine.",
                author: "Suhasini Rao",
                role: "Trousseau Curator",
                location: "Begumpet, Hyderabad",
                rating: 5
              },
              {
                text: "The Polki diamond ring we customized via their design consultation is a showstopper. The raw, uncut flat diamond captures candlelight in an incredibly traditional way. The Basra pearl drop accents are flawless.",
                author: "Dr. Vaishnavi Reddy",
                role: "Orthopedic Surgeon",
                location: "Charminar, Hyderabad",
                rating: 5
              }
            ].map((review, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#EAE3D5] p-8 rounded-t-[3rem] rounded-b-sm shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59B4B] text-[#C59B4B]" />
                    ))}
                  </div>

                  <p className="font-[family-name:var(--font-inter)] text-xs sm:text-sm text-[#27352B]/90 italic leading-relaxed text-left">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#FAF6EE] mt-6 flex flex-col items-start text-left">
                  <span className="font-bold text-xs text-[#27352B]">{review.author}</span>
                  <span className="text-[10px] text-[#728475] uppercase font-semibold mt-0.5">
                    {review.role} &bull; {review.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C281F] text-[#FAF9F6] border-t border-[#27352B] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-left mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-[family-name:var(--font-cinzel)] tracking-widest text-[#FAF9F6] font-semibold block">
              SURAJ BHAN
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#C59B4B] uppercase font-bold block pl-0.5">
              jewellers &bull; charminar
            </span>
            <p className="text-xs text-[#FAF9F6]/60 max-w-sm leading-relaxed font-[family-name:var(--font-inter)]">
              Preserving traditional Hindu temple gold-work and Nizami courtly masterpieces since 1952. Certified Bis-Hallmarked heritage jewellery.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase text-[#C59B4B]">THE SHOWROOM</h4>
            <div className="space-y-2.5 text-xs text-[#FAF9F6]/70 font-[family-name:var(--font-inter)]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B4B] flex-shrink-0" />
                <span>Pathergatti, Near Charminar,<br />Hyderabad, Telangana 500002.</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B4B]" />
                <a href="tel:+914024520151" className="hover:text-[#C59B4B] transition-colors">+91 40 2452 0151</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B4B]" />
                <a href="mailto:info@surajbhan.com" className="hover:text-[#C59B4B] transition-colors">info@surajbhan.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase text-[#C59B4B]">SHOWROOM HOURS</h4>
            <div className="space-y-2 text-xs text-[#FAF9F6]/70 font-[family-name:var(--font-inter)]">
              <p className="flex items-center justify-between">
                <span>Monday - Saturday:</span>
                <span>11:00 AM - 8:30 PM</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Sunday Showroom:</span>
                <span className="text-[#C59B4B]">Closed</span>
              </p>
              <p className="flex items-start gap-2 mt-4 text-[10px] text-[#FAF9F6]/50 border-t border-[#36473B] pt-3">
                <Clock className="w-3.5 h-3.5 text-[#C59B4B] flex-shrink-0" />
                <span>Private showroom slots and wedding trousseau consultation can be arranged.</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#36473B] flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#FAF9F6]/40 font-[family-name:var(--font-inter)]">
          <p>&copy; {new Date().getFullYear()} Suraj Bhan Jewellers. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#FAF9F6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF9F6] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FAF9F6] transition-colors">BIS Hallmarking</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Mail, 
  MapPin, 
  Phone, 
  Star, 
  Send, 
  ChevronRight, 
  Check, 
  Loader2, 
  Calendar, 
  Clock, 
  User, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Info
} from 'lucide-react';

export default function SriJagdambaPearlsPage() {
  // Customizer State
  const [selectedMetal, setSelectedMetal] = useState('22K Gold');
  const [selectedGem, setSelectedGem] = useState('Pearl');
  const [customizerSaved, setCustomizerSaved] = useState(false);
  const [likedItems, setLikedItems] = useState({});

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collection: 'Classic Basra Pearl String',
    date: '',
    timeSlot: '11:00 AM - 1:00 PM',
    type: 'In-Store Private Lounge (Secunderabad)'
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Design config constants
  const metals = {
    '22K Gold': {
      name: '22K Traditional Yellow Gold',
      color: '#D4AF37', // Yellow gold hex
      gradient: 'from-[#D4AF37] via-[#FFF3A8] to-[#AA7C11]',
      basePrice: 180000,
      description: 'Luminous 91.6% pure Indian gold, offering a rich warm luster preferred for royal heritage settings.'
    },
    '18K Rose Gold': {
      name: '18K Premium Rose Gold',
      color: '#B76E79', // Rose gold hex
      gradient: 'from-[#B76E79] via-[#E5C2C6] to-[#8C4A54]',
      basePrice: 145000,
      description: 'An elegant blend of pure gold and fine copper, providing a delicate blush tone that complements pearls beautifully.'
    },
    'Platinum': {
      name: 'Imperial Platinum 950',
      color: '#E5E4E2', // Platinum hex
      gradient: 'from-[#E5E4E2] via-[#FFFFFF] to-[#B3B2B0]',
      basePrice: 210000,
      description: 'Precious, dense, and naturally white metal that secures gemstones with unparalleled strength and modern grace.'
    }
  };

  const gemstones = {
    'Pearl': {
      name: 'Royal Basra Saltwater Pearl',
      color: '#FFFDF9',
      glow: 'rgba(255, 253, 249, 0.7)',
      price: 40000,
      description: 'Exceedingly rare, natural saltwater Basra pearls renowned for their brilliant iridescence and classic cream hue.'
    },
    'Diamond': {
      name: 'Uncut Syndicate Polki Diamond',
      color: '#E0F2FE',
      glow: 'rgba(224, 242, 254, 0.6)',
      price: 120000,
      description: 'Hand-selected flat-cut diamonds with natural inclusions, echoing the royal heritage of Deccani nobles.'
    },
    'Emerald': {
      name: 'Flawless Zambian Emerald',
      color: '#10B981',
      glow: 'rgba(16, 185, 129, 0.5)',
      price: 85000,
      description: 'Deep green emeralds of exceptional clarity, meticulously faceted to capture ambient light.'
    },
    'Ruby': {
      name: 'Vibrant Burmese Ruby',
      color: '#EF4444',
      glow: 'rgba(239, 68, 68, 0.5)',
      price: 95000,
      description: 'Highly saturated pigeon-blood red ruby, symbolizing royal passion and legacy.'
    }
  };

  const collectionItems = [
    {
      id: 'basra-classic',
      name: 'The Nizam Basra String',
      category: 'Heritage Pearl Strings',
      price: 245000,
      imageDesc: 'Five-string natural Basra pearl necklace with a 22K yellow gold clasp encrusted with uncut diamonds.',
      specs: 'Basra Saltwater Pearls (6.5mm), 22K Gold Clasp',
      visualClass: 'bg-gradient-to-br from-[#FAF5EF] to-[#E5DCD0]'
    },
    {
      id: 'secunderabad-choker',
      name: 'The Secunderabad Royal Choker',
      category: 'Antique Chokers',
      price: 380000,
      imageDesc: 'Broad heritage choker combining rows of south sea pearls with central floral gold motifs set with rubies.',
      specs: 'Burmese Rubies, South Sea Pearls, 22K Antique Gold',
      visualClass: 'bg-gradient-to-br from-[#EAE1D4] to-[#C8B8A3]'
    },
    {
      id: 'temple-vaikunta',
      name: 'Vaikunta Temple Necklace',
      category: 'Temple Jewellery',
      price: 420000,
      imageDesc: 'Intricately hand-sculpted temple necklace depicting deities, framed with tiny seed pearls and emerald drops.',
      specs: 'Zambian Emeralds, Basra Seed Pearls, 22K Sculpted Gold',
      visualClass: 'bg-gradient-to-br from-[#F5EFE6] to-[#DDD2C4]'
    },
    {
      id: 'pearl-kada',
      name: 'Imperial Pearl Kada Set',
      category: 'Heritage Bangles',
      price: 195000,
      imageDesc: 'A pair of hinged gold bangles, detailed with internal floral work, capped with premium freshwater pearls.',
      specs: 'Freshwater Button Pearls, 22K Gold, Hand-chased Engravings',
      visualClass: 'bg-gradient-to-br from-[#EFEAE2] to-[#D5C7B7]'
    }
  ];

  // Price Calculations
  const basePrice = metals[selectedMetal].basePrice;
  const gemPrice = gemstones[selectedGem].price;
  const craftCharges = Math.round((basePrice + gemPrice) * 0.12); // 12% making charges
  const gst = Math.round((basePrice + gemPrice + craftCharges) * 0.03); // 3% GST
  const totalPrice = basePrice + gemPrice + craftCharges + gst;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleLike = (id) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Enter a valid email address.';
    }

    if (!formData.date) {
      errors.date = 'Preferred date is required.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past.';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        collection: 'Classic Basra Pearl String',
        date: '',
        timeSlot: '11:00 AM - 1:00 PM',
        type: 'In-Store Private Lounge (Secunderabad)'
      });
      // Dismiss success screen after 8 seconds
      setTimeout(() => setSubmitSuccess(false), 8000);
    }, 1500);
  };

  const selectCollectionForConsultation = (itemName) => {
    setFormData(prev => ({ ...prev, collection: itemName }));
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#231F1C] font-sans antialiased selection:bg-[#C8A275]/30 selection:text-[#231F1C]">
      {/* Google Fonts Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-prata { font-family: 'Prata', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      ` }} />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#B58A55]/40 flex items-center justify-center bg-[#FDFBF7]">
                <Sparkles size={18} className="text-[#B58A55]" />
              </div>
              <div>
                <span className="font-prata text-xl tracking-wider text-[#231F1C] block">SRI JAGDAMBA</span>
                <span className="text-[10px] tracking-[0.25em] text-[#9C7A53] uppercase block font-inter -mt-1">Pearl Jewellers</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a href="#heritage" className="text-xs tracking-widest uppercase text-[#5C534C] hover:text-[#B58A55] transition-colors font-medium">Heritage</a>
              <a href="#customizer" className="text-xs tracking-widest uppercase text-[#5C534C] hover:text-[#B58A55] transition-colors font-medium">Customizer</a>
              <a href="#collections" className="text-xs tracking-widest uppercase text-[#5C534C] hover:text-[#B58A55] transition-colors font-medium">Collections</a>
              <a href="#testimonials" className="text-xs tracking-widest uppercase text-[#5C534C] hover:text-[#B58A55] transition-colors font-medium">Stories</a>
            </nav>

            {/* Header Action Button with Tap Feedback */}
            <div>
              <a 
                href="#consultation-form" 
                className="inline-flex items-center justify-center px-6 py-3 border border-[#B58A55] text-xs font-semibold uppercase tracking-widest text-[#B58A55] hover:bg-[#B58A55] hover:text-[#FDFBF7] transition-all duration-300 active:scale-95 rounded-none"
              >
                Virtual Consult
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden border-b border-[#EAE3D5]">
        {/* Background decorative elements - clean contemporary lines */}
        <div className="absolute inset-y-0 left-1/3 w-[1px] bg-[#EAE3D5]/40 hidden md:block"></div>
        <div className="absolute inset-y-0 right-1/3 w-[1px] bg-[#EAE3D5]/40 hidden md:block"></div>
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-[#C8A275]/5 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#B58A55]/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B58A55]/30 bg-[#F7F4EF] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58A55]"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase font-inter text-[#9C7A53] font-semibold">ESTD. 1924 • MG Road Secunderabad</span>
          </div>

          <h1 className="font-prata text-4xl sm:text-6xl md:text-7xl text-[#231F1C] tracking-tight leading-[1.15] mb-8">
            Pearls of the Deccan.<br />
            <span className="text-[#B58A55] italic">Crafted for Eternity.</span>
          </h1>

          <p className="font-inter text-sm md:text-base text-[#5C534C] max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            As the legendary purveyors of authentic Basra pearls to the Nizams of Hyderabad, Sri Jagdamba Pearls unites timeless Indian royalty with clean, contemporary minimalist geometry.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#customizer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B58A55] text-xs font-bold uppercase tracking-widest text-[#FDFBF7] hover:bg-[#856542] transition-all duration-300 active:scale-95 shadow-md"
            >
              Design Your Piece
              <ArrowRight size={14} className="ml-2" />
            </a>
            <a 
              href="#collections" 
              className="inline-flex items-center justify-center px-8 py-4 border border-[#EAE3D5] bg-[#FFFDFB] text-xs font-bold uppercase tracking-widest text-[#231F1C] hover:bg-[#F7F4EF] hover:border-[#B58A55]/50 transition-all duration-300 active:scale-95"
            >
              Browse Signature Collection
            </a>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 border-b border-[#EAE3D5] bg-[#F7F4EF]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Editorial Heritage Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-[11px] tracking-[0.25em] text-[#9C7A53] uppercase font-bold block font-inter">OUR CENTURY-OLD LEGACY</span>
              <h2 className="font-prata text-3xl sm:text-4xl md:text-5xl text-[#231F1C] tracking-tight leading-tight">
                From the Royal Courts of Secunderabad to Modern Icons
              </h2>
              
              <div className="h-[2px] w-20 bg-[#B58A55]"></div>
              
              <div className="font-inter text-sm text-[#5C534C] space-y-6 leading-relaxed font-light">
                <p>
                  Founded in 1924 along the historic MG Road of Secunderabad, Sri Jagdamba Pearls began as a dedicated atelier specializing in sorting, evaluating, and setting Basra saltwater pearls — the absolute gold standard of royal gems.
                </p>
                <p>
                  For over a century, our master artisans have preserved the delicate art of pearl-stringing, blending classic South Sea pearls, uncut diamonds (Polki), and vibrant gemstones with minimalist structural lines that speak to the modern aesthetic.
                </p>
                <p>
                  Every string, necklet, and ring created in our workshops is catalogued and certified, preserving Hyderabad’s legendary Nizam craftsmanship for generational handover.
                </p>
              </div>

              {/* Stat callouts */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#EAE3D5]">
                <div>
                  <span className="block font-prata text-2xl sm:text-3xl text-[#B58A55]">100+</span>
                  <span className="block text-[10px] tracking-widest text-[#5C534C] uppercase font-medium mt-1">Years of Trust</span>
                </div>
                <div>
                  <span className="block font-prata text-2xl sm:text-3xl text-[#B58A55]">Basra</span>
                  <span className="block text-[10px] tracking-widest text-[#5C534C] uppercase font-medium mt-1">Certified Origin</span>
                </div>
                <div>
                  <span className="block font-prata text-2xl sm:text-3xl text-[#B58A55]">4th Gen</span>
                  <span className="block text-[10px] tracking-widest text-[#5C534C] uppercase font-medium mt-1">Family Jewellers</span>
                </div>
              </div>
            </div>

            {/* Visual Heritage Grid (Contemporary collage) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 border border-[#B58A55]/20 transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="bg-[#FFFDFB] border border-[#EAE3D5] p-8 md:p-12 space-y-6">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#FAF5EF] to-[#E5DCD0] flex items-center justify-center relative overflow-hidden group">
                  {/* Abstract representation of pearl sorting */}
                  <div className="absolute inset-0 bg-[#231F1C]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 rounded-full border border-[#B58A55]/30 flex items-center justify-center bg-[#FDFBF7] shadow-lg">
                    <Sparkles size={20} className="text-[#B58A55] animate-pulse" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-[10px] uppercase font-semibold tracking-wider text-[#9C7A53] bg-[#FDFBF7] px-2 py-1">MG Road Archive 1930s</span>
                </div>
                <div className="border-l-2 border-[#B58A55] pl-4">
                  <p className="font-prata text-base text-[#231F1C] italic">
                    "A Basra pearl does not merely reflect light; it absorbs and radiates the history of the Indian Ocean trading routes that converged in Hyderabad."
                  </p>
                  <span className="block text-[10px] uppercase tracking-widest text-[#5C534C] font-semibold mt-2">— Secunderabad Master Appraiser</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jewelry Customizer Section */}
      <section id="customizer" className="py-24 border-b border-[#EAE3D5] bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.25em] text-[#9C7A53] uppercase font-bold block font-inter mb-3">EXPERIENCE BESPOKE DESIGN</span>
            <h2 className="font-prata text-3xl sm:text-4xl text-[#231F1C] tracking-tight">Interactive Pearl & Gold Customizer</h2>
            <div className="h-[2px] w-12 bg-[#B58A55] mx-auto mt-4 mb-6"></div>
            <p className="font-inter text-xs sm:text-sm text-[#5C534C] font-light leading-relaxed">
              Select your metal alloy and center gemstone to view our real-time estimated valuation and generate a custom visual concept representation.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Visualizer Panel */}
            <div className="lg:col-span-7 bg-[#FFFDFB] border border-[#EAE3D5] p-6 sm:p-10 flex flex-col justify-between relative">
              <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#9C7A53] bg-[#F7F4EF] px-2 py-1 font-semibold border border-[#EAE3D5]">
                <Info size={10} />
                Live Conceptual Model
              </div>

              {/* Dynamic SVG Visualizer Container */}
              <div className="flex-1 min-h-[320px] sm:min-h-[400px] flex items-center justify-center relative">
                
                {/* SVG Visualizer */}
                <svg className="w-full max-w-[320px] sm:max-w-[360px] h-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stand / Neck outline */}
                  <path d="M100 380 C100 280, 140 220, 200 220 C260 220, 300 280, 300 380" stroke="#EAE3D5" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M120 380 L80 380 L100 340 Z" fill="#F7F4EF" stroke="#EAE3D5" strokeWidth="1" />
                  <path d="M280 380 L320 380 L300 340 Z" fill="#F7F4EF" stroke="#EAE3D5" strokeWidth="1" />

                  {/* Definition for gradients depending on metal type */}
                  <defs>
                    {/* Metal Colors */}
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#AA7C11" />
                      <stop offset="50%" stopColor="#FFF3A8" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8C4A54" />
                      <stop offset="50%" stopColor="#E5C2C6" />
                      <stop offset="100%" stopColor="#B76E79" />
                    </linearGradient>
                    <linearGradient id="platGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B3B2B0" />
                      <stop offset="50%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#E5E4E2" />
                    </linearGradient>

                    {/* Gemstone Glow Gradients */}
                    <radialGradient id="pearlRad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="40%" stopColor="#FFFDF5" />
                      <stop offset="100%" stopColor="#E6DFD3" />
                    </radialGradient>
                    <radialGradient id="emeraldRad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#6EE7B7" />
                      <stop offset="70%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#047857" />
                    </radialGradient>
                    <radialGradient id="rubyRad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#FCA5A5" />
                      <stop offset="70%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#B91C1C" />
                    </radialGradient>
                    <radialGradient id="diamondRad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="30%" stopColor="#E0F2FE" />
                      <stop offset="80%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </radialGradient>
                  </defs>

                  {/* Dynamic Metal Chains */}
                  <path 
                    d="M130 150 C 130 260, 270 260, 270 150" 
                    stroke={`url(#${selectedMetal === '22K Gold' ? 'goldGrad' : selectedMetal === '18K Rose Gold' ? 'roseGrad' : 'platGrad'})`} 
                    strokeWidth="4" 
                    fill="none" 
                  />
                  <path 
                    d="M140 135 C 140 230, 260 230, 260 135" 
                    stroke={`url(#${selectedMetal === '22K Gold' ? 'goldGrad' : selectedMetal === '18K Rose Gold' ? 'roseGrad' : 'platGrad'})`} 
                    strokeWidth="2.5" 
                    fill="none" 
                  />

                  {/* Pearl Necklace Beads (arranged along path) */}
                  {Array.from({ length: 15 }).map((_, idx) => {
                    // Approximate coordinate points mapping the lower arc
                    const t = (idx + 1) / 16;
                    const cx = 130 + (270 - 130) * t;
                    // Parabolic arc for Y coordinate
                    const cy = 150 + 110 * Math.sin(Math.PI * t);
                    
                    return (
                      <circle 
                        key={idx} 
                        cx={cx} 
                        cy={cy} 
                        r="6.5" 
                        fill="url(#pearlRad)" 
                        stroke="#D5C7B7" 
                        strokeWidth="0.5" 
                        filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.08))"
                      />
                    );
                  })}

                  {/* Main Central Pendant Hanger */}
                  <rect 
                    x="196" 
                    y="250" 
                    width="8" 
                    height="12" 
                    fill={`url(#${selectedMetal === '22K Gold' ? 'goldGrad' : selectedMetal === '18K Rose Gold' ? 'roseGrad' : 'platGrad'})`} 
                    stroke="#231F1C" 
                    strokeWidth="0.5" 
                  />

                  {/* Selected Gemstone Drop */}
                  {selectedGem === 'Pearl' && (
                    <circle 
                      cx="200" 
                      cy="274" 
                      r="16" 
                      fill="url(#pearlRad)" 
                      stroke="#C8B8A3" 
                      strokeWidth="1.5"
                      style={{ filter: `drop-shadow(0 0 10px ${gemstones.Pearl.glow})` }}
                    />
                  )}
                  {selectedGem === 'Diamond' && (
                    <polygon 
                      points="200,258 216,272 208,290 192,290 184,272" 
                      fill="url(#diamondRad)" 
                      stroke="#93C5FD" 
                      strokeWidth="1"
                      style={{ filter: `drop-shadow(0 0 10px ${gemstones.Diamond.glow})` }}
                    />
                  )}
                  {selectedGem === 'Emerald' && (
                    <rect 
                      x="186" 
                      y="260" 
                      width="28" 
                      height="24" 
                      rx="2"
                      fill="url(#emeraldRad)" 
                      stroke="#34D399" 
                      strokeWidth="1.5"
                      style={{ filter: `drop-shadow(0 0 10px ${gemstones.Emerald.glow})` }}
                    />
                  )}
                  {selectedGem === 'Ruby' && (
                    <path 
                      d="M200,256 C200,256 216,275 216,282 C216,291 209,294 200,294 C191,294 184,291 184,282 C184,275 200,256 200,256 Z" 
                      fill="url(#rubyRad)" 
                      stroke="#F87171" 
                      strokeWidth="1.5"
                      style={{ filter: `drop-shadow(0 0 10px ${gemstones.Ruby.glow})` }}
                    />
                  )}

                  {/* Subtle highlights */}
                  <circle cx="200" cy="20" r="1.5" fill="#B58A55" />
                  <line x1="200" y1="21.5" x2="200" y2="40" stroke="#B58A55" strokeWidth="0.5" />
                </svg>

              </div>

              {/* Dynamic specs display */}
              <div className="pt-6 border-t border-[#EAE3D5] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[10px] tracking-widest text-[#9C7A53] uppercase font-bold block">Current Combination Specs</span>
                  <span className="font-prata text-base text-[#231F1C] block mt-1">
                    {metals[selectedMetal].name} & {gemstones[selectedGem].name}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    setCustomizerSaved(true);
                    setTimeout(() => setCustomizerSaved(false), 4000);
                  }}
                  className="px-4 py-2 border border-[#B58A55]/40 text-[10px] tracking-widest uppercase font-semibold text-[#B58A55] hover:bg-[#B58A55] hover:text-[#FDFBF7] active:scale-95 transition-all"
                >
                  {customizerSaved ? 'Saved to Consult' : 'Save Setup'}
                </button>
              </div>
            </div>

            {/* Customizer Control Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* Metal Alloy Selector */}
              <div className="bg-[#FFFDFB] border border-[#EAE3D5] p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#9C7A53] uppercase font-bold block">STEP 1</span>
                  <h3 className="font-prata text-lg text-[#231F1C] mt-1">Select Metal Base</h3>
                </div>
                
                <div className="space-y-3">
                  {Object.keys(metals).map((mKey) => (
                    <button 
                      key={mKey}
                      onClick={() => setSelectedMetal(mKey)}
                      className={`w-full text-left p-4 border transition-all duration-300 active:scale-[0.98] ${
                        selectedMetal === mKey 
                          ? 'border-[#B58A55] bg-[#F7F4EF]/50 shadow-sm' 
                          : 'border-[#EAE3D5] bg-[#FFFDFB] hover:border-[#B58A55]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-4 h-4 rounded-full border border-black/10 inline-block shadow-inner" 
                            style={{ backgroundColor: metals[mKey].color }} 
                          />
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#231F1C] font-inter">
                            {mKey}
                          </span>
                        </div>
                        {selectedMetal === mKey && <Check size={12} className="text-[#B58A55]" />}
                      </div>
                      <p className="text-[11px] text-[#5C534C] font-light mt-2 leading-relaxed">
                        {metals[mKey].description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gemstone Selector */}
              <div className="bg-[#FFFDFB] border border-[#EAE3D5] p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#9C7A53] uppercase font-bold block">STEP 2</span>
                  <h3 className="font-prata text-lg text-[#231F1C] mt-1">Select Core Gemstone</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(gemstones).map((gKey) => (
                    <button
                      key={gKey}
                      onClick={() => setSelectedGem(gKey)}
                      className={`text-center p-4 border transition-all duration-300 active:scale-95 flex flex-col items-center justify-center gap-2 ${
                        selectedGem === gKey
                          ? 'border-[#B58A55] bg-[#F7F4EF]/50 shadow-sm'
                          : 'border-[#EAE3D5] bg-[#FFFDFB] hover:border-[#B58A55]/50'
                      }`}
                    >
                      <span 
                        className="w-6 h-6 rounded-full border border-black/10 block shadow-inner" 
                        style={{ backgroundColor: gemstones[gKey].color, boxShadow: `0 0 8px ${gemstones[gKey].glow}` }} 
                      />
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#231F1C] font-inter">
                        {gKey}
                      </span>
                    </button>
                  ))}
                </div>
                
                <p className="text-[11px] text-[#5C534C] font-light leading-relaxed mt-2 border-t border-[#EAE3D5] pt-3">
                  {gemstones[selectedGem].description}
                </p>
              </div>

              {/* Real-time Pricing Summary Box */}
              <div className="bg-[#FAF7F2] border border-[#B58A55] p-6 sm:p-8 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#EAE3D5]">
                  <span className="text-xs uppercase tracking-widest text-[#5C534C] font-semibold">Price Estimate Summary</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#9C7A53] bg-[#FFFDFB] px-1.5 py-0.5 border border-[#EAE3D5]">INR</span>
                </div>
                
                <div className="space-y-2 text-xs text-[#5C534C] font-inter">
                  <div className="flex justify-between">
                    <span>Metal Alloy ({selectedMetal})</span>
                    <span className="font-medium text-[#231F1C]">{formatCurrency(basePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Gem ({selectedGem})</span>
                    <span className="font-medium text-[#231F1C]">{formatCurrency(gemPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Artisanal Making Charges (12%)</span>
                    <span className="font-medium text-[#231F1C]">{formatCurrency(craftCharges)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (3%)</span>
                    <span className="font-medium text-[#231F1C]">{formatCurrency(gst)}</span>
                  </div>
                </div>

                <div className="h-[1px] bg-[#EAE3D5] my-2"></div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-xs uppercase tracking-widest text-[#231F1C] font-bold">Total Estimated Price</span>
                  <span className="font-prata text-xl sm:text-2xl text-[#B58A55] font-semibold">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => selectCollectionForConsultation(`Customized ${selectedMetal} ${selectedGem} Royal Set`)}
                    className="w-full py-3 bg-[#B58A55] text-xs font-bold uppercase tracking-widest text-[#FDFBF7] hover:bg-[#856542] active:scale-95 transition-all"
                  >
                    Discuss This Design
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Signature Collection Grid Section */}
      <section id="collections" className="py-24 border-b border-[#EAE3D5] bg-[#F7F4EF]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] tracking-[0.25em] text-[#9C7A53] uppercase font-bold block font-inter mb-3">CURATED MASTERWORKS</span>
              <h2 className="font-prata text-3xl sm:text-4xl text-[#231F1C] tracking-tight">The Signature Collections</h2>
              <div className="h-[2px] w-12 bg-[#B58A55] mt-4"></div>
            </div>
            <p className="font-inter text-xs sm:text-sm text-[#5C534C] max-w-md font-light leading-relaxed">
              Explore our landmark historic items. Each masterwork is individually serialized and can be fully customized for private commissions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-[#FFFDFB] border border-[#EAE3D5] flex flex-col justify-between h-full hover:border-[#B58A55]/50 transition-all duration-300"
              >
                <div>
                  {/* Visual block */}
                  <div className={`aspect-square w-full ${item.visualClass} relative flex items-center justify-center p-8 overflow-hidden`}>
                    
                    {/* Like Button */}
                    <button 
                      onClick={() => handleLike(item.id)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFFDFB]/80 hover:bg-[#FFFDFB] flex items-center justify-center text-[#231F1C] border border-[#EAE3D5] active:scale-90 transition-all shadow-sm z-10"
                    >
                      <Heart 
                        size={14} 
                        className={`transition-colors ${likedItems[item.id] ? 'fill-[#EF4444] text-[#EF4444]' : 'text-[#5C534C]'}`} 
                      />
                    </button>

                    {/* Conceptual necklace graphics */}
                    <svg className="w-full max-w-[120px] h-auto opacity-80 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="30" stroke="#B58A55" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M30 40 C 30 70, 70 70, 70 40" stroke="#B58A55" strokeWidth="1.5" fill="none" />
                      {/* Central hanging element representing category */}
                      {item.id === 'basra-classic' && (
                        <>
                          <circle cx="50" cy="65" r="5" fill="#FFFDF9" stroke="#9C7A53" strokeWidth="0.5" />
                          <circle cx="50" cy="74" r="3" fill="#FFFDF9" stroke="#9C7A53" strokeWidth="0.5" />
                        </>
                      )}
                      {item.id === 'secunderabad-choker' && (
                        <rect x="44" y="58" width="12" height="12" rx="1" fill="#EF4444" stroke="#9C7A53" strokeWidth="0.5" />
                      )}
                      {item.id === 'temple-vaikunta' && (
                        <polygon points="50,56 60,72 40,72" fill="#10B981" stroke="#9C7A53" strokeWidth="0.5" />
                      )}
                      {item.id === 'pearl-kada' && (
                        <circle cx="50" cy="62" r="8" stroke="#B58A55" strokeWidth="3" fill="none" />
                      )}
                    </svg>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-[#9C7A53] font-bold block font-inter">{item.category}</span>
                    <h3 className="font-prata text-base text-[#231F1C] tracking-tight group-hover:text-[#B58A55] transition-colors">{item.name}</h3>
                    <p className="text-[11px] text-[#5C534C] font-light leading-relaxed line-clamp-3">
                      {item.imageDesc}
                    </p>
                    <div className="text-[10px] text-[#9C7A53] font-mono mt-2 bg-[#F7F4EF] p-2 border border-[#EAE3D5]/60 font-light">
                      Specs: {item.specs}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#EAE3D5] flex justify-between items-center bg-[#FDFBF7]/50 mt-4">
                  <span className="font-prata text-sm font-semibold text-[#B58A55]">{formatCurrency(item.price)}</span>
                  
                  <button 
                    onClick={() => selectCollectionForConsultation(item.name)}
                    className="text-[10px] tracking-widest uppercase font-semibold text-[#231F1C] hover:text-[#B58A55] flex items-center gap-1 active:scale-95 transition-all"
                  >
                    Inquire
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Virtual Design Consultation form Section */}
      <section id="consultation-form" className="py-24 border-b border-[#EAE3D5] bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#FFFDFB] border border-[#C4A482] p-8 md:p-12 relative">
            
            {/* Fine border accents */}
            <div className="absolute inset-2 border border-[#EAE3D5] pointer-events-none"></div>

            <div className="text-center space-y-4 mb-10 relative z-10">
              <span className="text-[10px] tracking-[0.25em] text-[#9C7A53] uppercase font-bold block font-inter">PRIVATE SESSION</span>
              <h2 className="font-prata text-2xl sm:text-3xl text-[#231F1C]">Virtual Design Consultation</h2>
              <p className="font-inter text-xs text-[#5C534C] font-light max-w-md mx-auto leading-relaxed">
                Schedule a one-on-one session with our master pearl appraisers at Secunderabad or via secure HD video link.
              </p>
              <div className="h-[1px] w-20 bg-[#B58A55] mx-auto"></div>
            </div>

            {submitSuccess ? (
              <div className="bg-[#FAF7F2] border border-[#B58A55] p-8 text-center space-y-4 relative z-10 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#B58A55]/10 flex items-center justify-center mx-auto text-[#B58A55]">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-prata text-xl text-[#231F1C]">Request Lodged Successfully</h3>
                <p className="text-xs text-[#5C534C] leading-relaxed max-w-sm mx-auto font-light">
                  Thank you. An invitation to our private digital showroom along with scheduling confirmation has been sent to your email. Our representative will contact you on your mobile shortly.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 border border-[#B58A55] text-[10px] uppercase font-semibold tracking-widest text-[#B58A55] hover:bg-[#B58A55] hover:text-[#FDFBF7] transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <User size={12} className="text-[#B58A55]" />
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Anirudh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full bg-[#FAF8F5] border px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none transition-colors ${
                        formErrors.name ? 'border-red-400' : 'border-[#EAE3D5]'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-500 font-medium block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <Phone size={12} className="text-[#B58A55]" />
                      Indian Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className={`w-full bg-[#FAF8F5] border px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none transition-colors ${
                        formErrors.phone ? 'border-red-400' : 'border-[#EAE3D5]'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[10px] text-red-500 font-medium block">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <Mail size={12} className="text-[#B58A55]" />
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full bg-[#FAF8F5] border px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none transition-colors ${
                        formErrors.email ? 'border-red-400' : 'border-[#EAE3D5]'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-500 font-medium block">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Selected Collection */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#B58A55]" />
                      Selected Collection / Design ID
                    </label>
                    <input 
                      type="text"
                      value={formData.collection}
                      onChange={(e) => setFormData(prev => ({ ...prev, collection: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D5] px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none text-[#5C534C]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#B58A55]" />
                      Preferred Date *
                    </label>
                    <input 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className={`w-full bg-[#FAF8F5] border px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none transition-colors ${
                        formErrors.date ? 'border-red-400' : 'border-[#EAE3D5]'
                      }`}
                    />
                    {formErrors.date && (
                      <span className="text-[10px] text-red-500 font-medium block">{formErrors.date}</span>
                    )}
                  </div>

                  {/* Time Slot Select */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <Clock size={12} className="text-[#B58A55]" />
                      Time Slot
                    </label>
                    <select 
                      value={formData.timeSlot}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeSlot: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D5] px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none text-[#5C534C]"
                    >
                      <option>11:00 AM - 1:00 PM</option>
                      <option>1:30 PM - 3:30 PM</option>
                      <option>4:00 PM - 6:00 PM</option>
                      <option>6:30 PM - 8:30 PM</option>
                    </select>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#5C534C] flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#B58A55]" />
                      Session Mode
                    </label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D5] px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A55] rounded-none text-[#5C534C]"
                    >
                      <option>In-Store Private Lounge (Secunderabad)</option>
                      <option>Virtual Private HD Video Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#B58A55] text-xs font-bold uppercase tracking-widest text-[#FDFBF7] hover:bg-[#856542] disabled:bg-[#B58A55]/60 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Securing Private Connection...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Book Design Consultation
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Customer Stories / Testimonials Section */}
      <section id="testimonials" className="py-24 border-b border-[#EAE3D5] bg-[#F7F4EF]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.25em] text-[#9C7A53] uppercase font-bold block font-inter mb-3">CLIENT STORIES</span>
            <h2 className="font-prata text-3xl sm:text-4xl text-[#231F1C] tracking-tight">Voices of Trust</h2>
            <div className="h-[2px] w-12 bg-[#B58A55] mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Sri Jagdamba Pearls has been our family’s trusted jeweller for four generations. The Basra pearl string we customized for my daughter’s wedding was absolute perfection. The color matching of the beads is unmatched in Hyderabad.",
                client: "Ananya Reddy",
                location: "Jubilee Hills",
                date: "March 2026",
                rating: 5
              },
              {
                text: "The virtual design session was so seamless. They showed us multiple custom clasps in 18K rose gold and natural pearl grades via video. The final piece arrived in secure armored logistics directly to our gated community.",
                client: "Dr. Srinivas Rao",
                location: "Begumpet",
                date: "May 2026",
                rating: 5
              },
              {
                text: "Highly professional service. I love their contemporary minimalist pearl collection. It is so elegant for daily board meetings. Their pricing breakdown (gold weight, pearl rarity, making charge) is fully transparent.",
                client: "Meera Sen",
                location: "Gachibowli",
                date: "June 2026",
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#FFFDFB] border border-[#EAE3D5] p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="space-y-6">
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, sIdx) => (
                      <Star key={sIdx} size={14} className="fill-[#B58A55] text-[#B58A55]" />
                    ))}
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-[#5C534C] italic leading-relaxed font-light">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-[#EAE3D5]/60 mt-6 flex justify-between items-center text-[11px]">
                  <div>
                    <span className="block font-semibold text-[#231F1C]">{t.client}</span>
                    <span className="block text-[#9C7A53]">{t.location}, Hyderabad</span>
                  </div>
                  <span className="text-[#5C534C]/60">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#231F1C] text-[#FAF8F5] pt-16 pb-12 border-t border-[#B58A55]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-[#FAF8F5]/10">
            {/* Brand Block */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2 text-[#FAF8F5]">
                <Sparkles size={18} className="text-[#B58A55]" />
                <span className="font-prata text-lg tracking-wider">SRI JAGDAMBA</span>
              </div>
              <p className="font-inter text-[11px] text-[#FAF8F5]/60 font-light leading-relaxed">
                Nizam-era heritage jewellers crafting premium pearl strings and antique necklaces on MG Road since 1924.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full border border-[#FAF8F5]/20 flex items-center justify-center text-[#FAF8F5]/60 hover:text-[#B58A55] hover:border-[#B58A55] transition-colors active:scale-90">
                  <Instagram size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-[#FAF8F5]/20 flex items-center justify-center text-[#FAF8F5]/60 hover:text-[#B58A55] hover:border-[#B58A55] transition-colors active:scale-90">
                  <Facebook size={14} />
                </a>
              </div>
            </div>

            {/* Address / Locations */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-widest text-[#B58A55] font-bold">Secunderabad Store</span>
              <div className="space-y-3 font-inter text-[11px] text-[#FAF8F5]/70 font-light">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#B58A55] shrink-0 mt-0.5" />
                  <span>
                    MG Road, Secunderabad,<br />
                    Telangana 500003.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-[#B58A55] shrink-0" />
                  <span>+91 40 2784 0969</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#B58A55] shrink-0" />
                  <span>help@jagdamba.com</span>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-widest text-[#B58A55] font-bold">Hours of Salon</span>
              <div className="space-y-2 font-inter text-[11px] text-[#FAF8F5]/70 font-light">
                <div className="flex justify-between">
                  <span>Monday — Saturday</span>
                  <span>11:00 AM — 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#B58A55] font-semibold">Private Appt Only</span>
                </div>
                <div className="h-[1px] bg-[#FAF8F5]/10 my-2"></div>
                <p className="text-[10px] text-[#FAF8F5]/40 leading-relaxed font-light">
                  * Prior scheduling is highly recommended for bridal consultation lounges.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-widest text-[#B58A55] font-bold">Showroom Links</span>
              <ul className="space-y-2 font-inter text-[11px] text-[#FAF8F5]/70 font-light">
                <li><a href="#heritage" className="hover:text-[#B58A55] transition-colors">Our 1924 Story</a></li>
                <li><a href="#customizer" className="hover:text-[#B58A55] transition-colors">Bespoke Design Tool</a></li>
                <li><a href="#collections" className="hover:text-[#B58A55] transition-colors">Signature Pearl Catalogs</a></li>
                <li><a href="#consultation-form" className="hover:text-[#B58A55] transition-colors">Schedule Private Viewing</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#FAF8F5]/40 font-inter font-light">
            <p>© {new Date().getFullYear()} Sri Jagdamba Pearls Jewellers. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#B58A55] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#B58A55] transition-colors">Terms of Heritage Certification</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

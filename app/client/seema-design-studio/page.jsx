"use client";

import React, { useState } from 'react';
import { 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Check, 
  Loader2, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Layers, 
  Eye, 
  ArrowRight, 
  Sliders,
  Plus,
  Minus,
  Info,
  ShieldCheck,
  Heart
} from 'lucide-react';

export default function SeemaDesignStudioPage() {
  // Boutique Designs Tabs State
  const [activeTab, setActiveTab] = useState('japandi');

  // Cost Calculator State
  const [areaSqFt, setAreaSqFt] = useState(1500); // 1000 to 4000
  const [fitoutLevel, setFitoutLevel] = useState('premium'); // standard | premium | bespoke
  const [designerTier, setDesignerTier] = useState('partner'); // partner | principal

  // FAQ Collapsible State
  const [openFaq, setOpenFaq] = useState(null);

  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', serviceType: 'Japandi Minimal', message: '' });
  const [formSubmitState, setFormSubmitState] = useState('idle'); // idle | loading | success

  // Boutique Designs Data
  const designStyles = {
    japandi: {
      title: "Japandi Minimalist Fusion",
      tagline: "Warm Japanese simplicity meets Scandinavian utility",
      description: "A harmonious marriage of Japanese 'Wabi-Sabi' and Scandinavian simplicity. We prioritize clean low-profile oak furniture, warm textured off-white walls, and natural linen drapes that filter light softly.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      materials: [
        "Light Solid White Oak detailing",
        "Textured Clay-plaster wall treatments",
        "Woven Tatami accent rugs",
        "Low-profile handcrafted ash wood platform sofas"
      ],
      timeframe: "10-12 Weeks"
    },
    scandinavian: {
      title: "Modern Scandinavian Sanctuary",
      tagline: "Functional brilliance, high-contrast, airy design",
      description: "Crisp white backdrops contrasting with matte black accents and warm wool textures. Maximizes light reflection, clean functional storage, and comfort for modern families in Attapur.",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      materials: [
        "White-washed pine flooring",
        "Matte black architectural metal fixtures",
        "Bouclé upholstery fabrics",
        "Modular floating wall shelving arrays"
      ],
      timeframe: "8-10 Weeks"
    },
    wabisabi: {
      title: "Rustic Wabi-Sabi Lounge",
      tagline: "Finding beauty in impermanence and raw textures",
      description: "Embracing natural asymmetry, rough-hewn stone columns, live-edge wood counters, and microcement floors. Crafted for clients looking to escape the synthetic gloss of typical apartments.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      materials: [
        "Seamless grey microcement flooring",
        "Raw, hand-sculpted stone vessel sinks",
        "Reclaimed teakwood timber doors",
        "Linen drapery in organic earth tones"
      ],
      timeframe: "12-14 Weeks"
    },
    chic: {
      title: "Minimalist Industrial Loft",
      tagline: "Stripped-back luxury, metal-framed layout",
      description: "Bold steel partitions, exposed structural brick details, high ceilings, and plush leather accent seating. Perfectly scaled down for modern boutique villas and luxury apartments in Attapur.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      materials: [
        "Polished concrete surfaces",
        "Black powder-coated aluminum framing",
        "Cognac full-grain Italian leather",
        "Warm filament ambient spot fixtures"
      ],
      timeframe: "9-11 Weeks"
    }
  };

  // Cost Calculator Math
  const getFitoutRate = () => {
    switch (fitoutLevel) {
      case 'standard': return 1600; // per sq ft
      case 'premium': return 2500;
      case 'bespoke': return 4200;
      default: return 2500;
    }
  };

  const getDesignerFee = () => {
    return designerTier === 'partner' ? 150000 : 350000;
  };

  const calculatedMaterials = areaSqFt * getFitoutRate();
  const calculatedTotal = calculatedMaterials + getDesignerFee();

  // Toggle FAQ
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitState('loading');
    setTimeout(() => {
      setFormSubmitState('success');
      setFormData({ name: '', email: '', phone: '', serviceType: 'Japandi Minimal', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-[#F0F0F3] text-[#3A3A3C] font-sans selection:bg-[#00D2FF]/20 selection:text-[#1A1A1A] py-2">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#F0F0F3]/90 backdrop-blur-md px-4 lg:px-12 py-5 flex items-center justify-between border-b border-[#E0E0E5]">
        <div className="flex items-center gap-3">
          {/* Logo with Soft Neumorphic Shadow */}
          <div className="w-10 h-10 rounded-xl bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.5),_-4px_-4px_8px_rgba(255,255,255,0.8)] flex items-center justify-center">
            <Compass className="w-5 h-5 text-[#00D2FF]" />
          </div>
          <div>
            <span className="font-montserrat font-black text-base lg:text-lg tracking-wider text-[#1A1A1C] block">SEEMA</span>
            <span className="font-sans text-[8px] uppercase tracking-widest text-[#8A8A93] block">DESIGN STUDIO</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#5C5C5E]">
          <a href="#philosophy" className="hover:text-[#00D2FF] transition-colors">Philosophy</a>
          <a href="#styles" className="hover:text-[#00D2FF] transition-colors">Boutique Tabs</a>
          <a href="#calculator" className="hover:text-[#00D2FF] transition-colors">Shadow Calculator</a>
          <a href="#reviews" className="hover:text-[#00D2FF] transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-[#00D2FF] transition-colors">FAQ</a>
        </nav>

        <div>
          {/* Neumorphic Tappable Button */}
          <a 
            href="#contact" 
            className="inline-block bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.5),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),_inset_-2px_-2px_5px_rgba(255,255,255,0.8)] text-[#1A1A1C] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
          >
            Connect
          </a>
        </div>
      </header>

      <main>
        
        {/* SOFT NEUMORPHIC HERO */}
        <section id="philosophy" className="px-4 lg:px-12 py-20 lg:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Pill Accent */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Boutique Minimalists
              </div>

              <h1 className="font-montserrat text-4xl lg:text-6xl font-black text-[#1A1A1C] leading-[1.15] mb-8">
                Spaces designed to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#00A8FF] to-[#00D2FF]">
                  Breathe & Flow.
                </span>
              </h1>

              <p className="font-sans text-[#5C5C5E] text-base lg:text-lg font-normal leading-relaxed max-w-xl mb-10">
                Seema Design Studio is a boutique sanctuary in Attapur, Hyderabad. We craft quiet luxury, prioritizing light, air, and soft neumorphic shadow hierarchies over distracting visual noise.
              </p>

              <div className="flex flex-wrap gap-5">
                <a 
                  href="#styles" 
                  className="bg-[#F0F0F3] shadow-[6px_6px_12px_rgba(163,177,198,0.5),_-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] text-[#1A1A1C] font-bold text-xs uppercase tracking-wider px-8 py-4 flex items-center gap-3 transition-all duration-200"
                >
                  Explore Styles <ArrowRight className="w-4 h-4 text-[#00D2FF]" />
                </a>
                <a 
                  href="#calculator" 
                  className="bg-[#F0F0F3] border border-[#E0E0E5]/60 shadow-[3px_3px_6px_rgba(163,177,198,0.3)] text-[#5C5C5E] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none hover:text-[#00D2FF] transition-all"
                >
                  Estimate Budget
                </a>
              </div>

            </div>

            {/* Right Neumorphic Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[400px] bg-[#F0F0F3] shadow-[12px_12px_24px_rgba(163,177,198,0.5),_-12px_-12px_24px_rgba(255,255,255,0.85)] p-6 rounded-3xl relative">
                
                {/* Embedded Frame */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#E6E6E9] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.4),_inset_-6px_-6px_12px_rgba(255,255,255,0.8)] p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                    alt="Boutique Japandi Interior" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Accent Detail Widget */}
                <div className="mt-6 p-4 rounded-xl bg-[#F0F0F3] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#8A8A93] uppercase font-bold tracking-wider block">Currently Viewing</span>
                    <span className="text-xs font-bold text-[#1A1A1C] block">The Japandi Parlour</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F0F0F3] shadow-[3px_3px_6px_rgba(163,177,198,0.4),_-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500/10" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* METRIC RIBBON */}
        <section className="bg-[#F0F0F3] py-10 border-t border-b border-[#E0E0E5]">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4 bg-[#F0F0F3] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-center">
              <span className="font-montserrat text-3xl font-black text-[#00D2FF] block">75+</span>
              <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] font-bold block mt-1">Bespoke Homes</span>
            </div>
            <div className="p-4 bg-[#F0F0F3] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-center">
              <span className="font-montserrat text-3xl font-black text-[#00D2FF] block">100%</span>
              <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] font-bold block mt-1">Light Optimized</span>
            </div>
            <div className="p-4 bg-[#F0F0F3] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-center">
              <span className="font-montserrat text-3xl font-black text-[#00D2FF] block">10+</span>
              <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] font-bold block mt-1">Years Warranty</span>
            </div>
            <div className="p-4 bg-[#F0F0F3] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-center">
              <span className="font-montserrat text-3xl font-black text-[#00D2FF] block">Zero</span>
              <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] font-bold block mt-1">Clutter Policy</span>
            </div>
          </div>
        </section>

        {/* BOUTIQUE DESIGNS TABS - SERVICES PORTFOLIO */}
        <section id="styles" className="px-4 lg:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mb-3">
              <Layers className="w-3.5 h-3.5" /> Soft Shadows
            </div>
            <h2 className="font-montserrat text-3xl lg:text-4xl font-black text-[#1A1A1C] uppercase mb-4">
              Boutique Design Portfolios
            </h2>
            <p className="font-sans text-[#5C5C5E] text-sm max-w-md mx-auto">
              We focus strictly on minimalist niches. Click below to toggle styles and view materials and execution timeframes.
            </p>
          </div>

          {/* Neumorphic Tab Container */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-5 mb-12">
            {Object.keys(designStyles).map((styleKey) => (
              <button
                key={styleKey}
                onClick={() => setActiveTab(styleKey)}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === styleKey 
                    ? 'bg-[#F0F0F3] text-[#00D2FF] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)]'
                    : 'bg-[#F0F0F3] text-[#5C5C5E] shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.2),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]'
                }`}
              >
                {styleKey} style
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#F0F0F3] shadow-[8px_8px_20px_rgba(163,177,198,0.4),_-8px_-8px_20px_rgba(255,255,255,0.8)] p-6 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Tab Image Frame */}
              <div className="lg:col-span-6">
                <div className="p-3 bg-[#F0F0F3] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img 
                      src={designStyles[activeTab].image} 
                      alt={designStyles[activeTab].title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                </div>
              </div>

              {/* Tab Details */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[#00D2FF] text-xs uppercase tracking-widest font-bold mb-2 block">
                  {designStyles[activeTab].tagline}
                </span>
                <h3 className="font-montserrat text-2xl lg:text-3xl font-black text-[#1A1A1C] uppercase mb-5">
                  {designStyles[activeTab].title}
                </h3>
                <p className="font-sans text-[#5C5C5E] text-sm leading-relaxed mb-6 font-light">
                  {designStyles[activeTab].description}
                </p>

                {/* Highlight Info Box */}
                <div className="bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.3),_inset_-3px_-3px_6px_rgba(255,255,255,0.7)] p-4 mb-6 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[#8A8A93] uppercase font-bold block mb-0.5">Execution Period</span>
                    <span className="text-[#1A1A1C] font-extrabold">{designStyles[activeTab].timeframe}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#8A8A93] uppercase font-bold block mb-0.5">Fitout Spacing</span>
                    <span className="text-[#1A1A1C] font-extrabold">Highly Custom</span>
                  </div>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1C] mb-3 flex items-center gap-2">
                  <Check className="w-4.5 h-4.5 text-[#00D2FF]" /> Core Material Spec:
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5C5C5E] font-light">
                  {designStyles[activeTab].materials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00D2FF] rounded-full shrink-0"></span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a 
                    href="#contact" 
                    onClick={() => setFormData({...formData, message: `Interested in: ${designStyles[activeTab].title}`})}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF] hover:text-[#00A8FF] transition-colors"
                  >
                    Brief Studio about this style <ArrowRight className="w-4 h-4 animate-pulse" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* SOFT-SHADOW COST CALCULATOR (INTERACTIVE CONFIGURATOR) */}
        <section id="calculator" className="bg-[#F0F0F3] border-t border-b border-[#E0E0E5] py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mb-3">
                <Sliders className="w-3.5 h-3.5" /> Budget Planning
              </div>
              <h2 className="font-montserrat text-3xl lg:text-4xl font-black text-[#1A1A1C] uppercase mb-4">
                Soft-shadow cost calculator
              </h2>
              <p className="font-sans text-[#5C5C5E] text-sm">
                Interact with variables to compute live residential estimations, transparently mapped to Attapur design rates.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Slider Inputs Column */}
              <div className="lg:col-span-7 space-y-10">
                
                {/* Variable 1: Area size */}
                <div className="bg-[#F0F0F3] shadow-[5px_5px_15px_rgba(163,177,198,0.4),_-5px_-5px_15px_rgba(255,255,255,0.8)] p-6">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#1A1A1C]">1. Floor Area (Sq Ft)</label>
                    <span className="font-montserrat text-sm font-black text-[#00D2FF] bg-[#F0F0F3] px-3 py-1 shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)]">
                      {areaSqFt} Sq Ft
                    </span>
                  </div>

                  {/* Incremental Selector */}
                  <div className="flex items-center justify-between gap-4">
                    <button 
                      onClick={() => setAreaSqFt(Math.max(1000, areaSqFt - 500))}
                      className="w-12 h-12 bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4)] flex items-center justify-center font-bold text-[#3A3A3C] transition-all"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    {/* Range input styled with neumorphic colors */}
                    <input 
                      type="range" 
                      min="1000" 
                      max="4000" 
                      step="500"
                      value={areaSqFt}
                      onChange={(e) => setAreaSqFt(parseInt(e.target.value))}
                      className="w-full h-2 bg-[#E0E0E5] rounded-lg appearance-none cursor-pointer accent-[#00D2FF] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3)]"
                    />

                    <button 
                      onClick={() => setAreaSqFt(Math.min(4000, areaSqFt + 500))}
                      className="w-12 h-12 bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4)] flex items-center justify-center font-bold text-[#3A3A3C] transition-all"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Variable 2: Material Level */}
                <div className="bg-[#F0F0F3] shadow-[5px_5px_15px_rgba(163,177,198,0.4),_-5px_-5px_15px_rgba(255,255,255,0.8)] p-6">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#1A1A1C] block mb-4">2. Select Fitout Spec</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    
                    {/* Level 1 */}
                    <div 
                      onClick={() => setFitoutLevel('standard')}
                      className={`p-4 cursor-pointer text-center transition-all ${
                        fitoutLevel === 'standard'
                          ? 'shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-[#00D2FF]/20 text-[#00D2FF]'
                          : 'shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.2)] text-[#5C5C5E]'
                      }`}
                    >
                      <span className="text-xs font-black uppercase block">Minimal Standard</span>
                      <span className="text-[10px] text-[#8A8A93] block mt-1">₹1,600 / Sq Ft</span>
                    </div>

                    {/* Level 2 */}
                    <div 
                      onClick={() => setFitoutLevel('premium')}
                      className={`p-4 cursor-pointer text-center transition-all ${
                        fitoutLevel === 'premium'
                          ? 'shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-[#00D2FF]/20 text-[#00D2FF]'
                          : 'shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.2)] text-[#5C5C5E]'
                      }`}
                    >
                      <span className="text-xs font-black uppercase block">Boutique Premium</span>
                      <span className="text-[10px] text-[#8A8A93] block mt-1">₹2,500 / Sq Ft</span>
                    </div>

                    {/* Level 3 */}
                    <div 
                      onClick={() => setFitoutLevel('bespoke')}
                      className={`p-4 cursor-pointer text-center transition-all ${
                        fitoutLevel === 'bespoke'
                          ? 'shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-[#00D2FF]/20 text-[#00D2FF]'
                          : 'shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.2)] text-[#5C5C5E]'
                      }`}
                    >
                      <span className="text-xs font-black uppercase block">Bespoke Couture</span>
                      <span className="text-[10px] text-[#8A8A93] block mt-1">₹4,200 / Sq Ft</span>
                    </div>

                  </div>
                </div>

                {/* Variable 3: Design Fee */}
                <div className="bg-[#F0F0F3] shadow-[5px_5px_15px_rgba(163,177,198,0.4),_-5px_-5px_15px_rgba(255,255,255,0.8)] p-6">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#1A1A1C] block mb-4">3. Design Supervision Level</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div 
                      onClick={() => setDesignerTier('partner')}
                      className={`p-4 cursor-pointer text-center transition-all ${
                        designerTier === 'partner'
                          ? 'shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-[#00D2FF]/20 text-[#00D2FF]'
                          : 'shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.2)] text-[#5C5C5E]'
                      }`}
                    >
                      <span className="text-xs font-black uppercase block">Studio Partner</span>
                      <span className="text-[10px] text-[#8A8A93] block mt-1">₹1,50,000 Flat Fee</span>
                    </div>

                    <div 
                      onClick={() => setDesignerTier('principal')}
                      className={`p-4 cursor-pointer text-center transition-all ${
                        designerTier === 'principal'
                          ? 'shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-[#00D2FF]/20 text-[#00D2FF]'
                          : 'shadow-[4px_4px_8px_rgba(163,177,198,0.4),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.2)] text-[#5C5C5E]'
                      }`}
                    >
                      <span className="text-xs font-black uppercase block">Principal Seema</span>
                      <span className="text-[10px] text-[#8A8A93] block mt-1">₹3,50,000 Flat Fee</span>
                    </div>

                  </div>
                </div>

              </div>

              {/* Right Output Panel Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="bg-[#F0F0F3] shadow-[8px_8px_20px_rgba(163,177,198,0.5),_-8px_-8px_20px_rgba(255,255,255,0.85)] p-6 lg:p-8">
                  
                  <div className="text-center pb-6 border-b border-[#E0E0E5]">
                    <span className="text-xs uppercase tracking-widest text-[#8A8A93] font-bold block mb-1">Calculator Output</span>
                    <h3 className="font-montserrat text-lg font-black uppercase text-[#1A1A1C]">Project Valuation</h3>
                  </div>

                  <div className="py-6 space-y-4 text-xs">
                    
                    <div className="flex justify-between items-center text-[#5C5C5E]">
                      <span>Area Size Selection:</span>
                      <span className="font-bold text-[#1A1A1C]">{areaSqFt} Sq Ft</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[#5C5C5E]">
                      <span>Material Selection Rate:</span>
                      <span className="font-bold text-[#1A1A1C]">₹{getFitoutRate().toLocaleString('en-IN')} / Sq Ft</span>
                    </div>

                    <div className="flex justify-between items-center text-[#5C5C5E]">
                      <span>Computed Fitout Cost:</span>
                      <span className="font-bold text-[#1A1A1C]">₹{calculatedMaterials.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex justify-between items-center text-[#5C5C5E]">
                      <span>Design Supervision Fee:</span>
                      <span className="font-bold text-[#1A1A1C]">₹{getDesignerFee().toLocaleString('en-IN')}</span>
                    </div>

                    <div className="pt-6 border-t border-[#E0E0E5] flex justify-between items-baseline">
                      <span className="font-bold uppercase tracking-wider text-[#1A1A1C] text-xs">Total Valuation:</span>
                      <span className="font-montserrat text-2xl lg:text-3xl font-black text-[#00D2FF]">
                        ₹{calculatedTotal.toLocaleString('en-IN')}
                      </span>
                    </div>

                  </div>

                  {/* Informational Accent Box */}
                  <div className="p-4 rounded-xl bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.3),_inset_-3px_-3px_6px_rgba(255,255,255,0.7)] flex gap-3 items-start mb-6">
                    <Info className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#5C5C5E] font-light leading-relaxed">
                      This calculation includes full design blueprints, local zoning alignment checks in Attapur, modular cabinetry fabrication, premium lighting execution, and standard site visits.
                    </p>
                  </div>

                  <a 
                    href="#contact"
                    onClick={() => setFormData({
                      ...formData,
                      message: `Budget Calculator Lock: ${areaSqFt} Sq Ft area with ${fitoutLevel} fitout level and ${designerTier} supervision tier. Total estimated: ₹${calculatedTotal.toLocaleString('en-IN')}`
                    })}
                    className="w-full text-center block bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.5),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4)] text-[#00D2FF] font-bold text-xs uppercase tracking-wider py-4 transition-all duration-200"
                  >
                    Lock in calculation
                  </a>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="px-4 lg:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mb-3">
              <Star className="w-3.5 h-3.5" /> Client Reviews
            </div>
            <h2 className="font-montserrat text-3xl lg:text-4xl font-black text-[#1A1A1C] uppercase mb-4">
              True Minimalist Stories
            </h2>
            <p className="font-sans text-[#5C5C5E] text-sm">
              Read how our focus on spacing and clutter elimination created calm homes for clients in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#F0F0F3] shadow-[6px_6px_12px_rgba(163,177,198,0.4),_-6px_-6px_12px_rgba(255,255,255,0.8)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00D2FF] fill-[#00D2FF]" />
                  ))}
                </div>
                <p className="font-sans text-xs lg:text-sm font-light text-[#5C5C5E] leading-relaxed mb-6">
                  "Seema and her team completely decluttered our lives. The Japandi kitchen and living space are absolute therapy after a long day at the office. We never knew shadow styling could feel this soothing."
                </p>
              </div>
              <div className="pt-4 border-t border-[#E0E0E5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] flex items-center justify-center font-montserrat font-bold text-xs text-[#00D2FF]">
                  RS
                </div>
                <div>
                  <span className="font-bold text-xs text-[#1A1A1C] block">Rohan Shastry</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] block">Apartment Owner, Attapur</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#F0F0F3] shadow-[6px_6px_12px_rgba(163,177,198,0.4),_-6px_-6px_12px_rgba(255,255,255,0.8)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00D2FF] fill-[#00D2FF]" />
                  ))}
                </div>
                <p className="font-sans text-xs lg:text-sm font-light text-[#5C5C5E] leading-relaxed mb-6">
                  "Most designers in Hyderabad just dump colors and gold everywhere. Seema Design Studio's microcement walls and minimalist Scandinavian styling are exceptionally elegant. The cost calculator matched our actual quote perfectly."
                </p>
              </div>
              <div className="pt-4 border-t border-[#E0E0E5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] flex items-center justify-center font-montserrat font-bold text-xs text-[#00D2FF]">
                  MK
                </div>
                <div>
                  <span className="font-bold text-xs text-[#1A1A1C] block">Meera K.</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] block">Villa Owner, Rajendra Nagar</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#F0F0F3] shadow-[6px_6px_12px_rgba(163,177,198,0.4),_-6px_-6px_12px_rgba(255,255,255,0.8)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00D2FF] fill-[#00D2FF]" />
                  ))}
                </div>
                <p className="font-sans text-xs lg:text-sm font-light text-[#5C5C5E] leading-relaxed mb-6">
                  "Boutique approach in its truest sense. They only take on 3 projects per quarter. That meant Seema supervised our layout edits herself. The attention to detail on the custom white oak carpentry is flawless."
                </p>
              </div>
              <div className="pt-4 border-t border-[#E0E0E5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] flex items-center justify-center font-montserrat font-bold text-xs text-[#00D2FF]">
                  AK
                </div>
                <div>
                  <span className="font-bold text-xs text-[#1A1A1C] block">Abhishek Kapoor</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8A93] block">Duplex Owner, Attapur</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="bg-[#F0F0F3] border-t border-b border-[#E0E0E5] py-24">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mb-3">
                <ShieldCheck className="w-3.5 h-3.5" /> Clear FAQ
              </div>
              <h2 className="font-montserrat text-3xl lg:text-4xl font-black text-[#1A1A1C] uppercase mb-4">
                Studio FAQ
              </h2>
              <p className="font-sans text-[#5C5C5E] text-sm">
                Answers regarding our strict boutique project capacity limit and design methodology.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* FAQ 1 */}
              <div className="bg-[#F0F0F3] shadow-[4px_4px_10px_rgba(163,177,198,0.3),_-4px_-4px_10px_rgba(255,255,255,0.8)]">
                <button 
                  onClick={() => toggleFaq(0)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-[#1A1A1C] focus:outline-none"
                >
                  <span className="font-montserrat font-bold text-xs lg:text-sm uppercase tracking-wider">
                    What does 'Boutique Project Capacity' mean?
                  </span>
                  {openFaq === 0 ? <ChevronUp className="w-4 h-4 text-[#00D2FF]" /> : <ChevronDown className="w-4 h-4 text-[#00D2FF]" />}
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-6 pt-1 text-xs lg:text-sm font-light text-[#5C5C5E] leading-relaxed">
                    To maintain rigorous site supervision and high artisan alignment, we limit our intake to strictly 3 home fitouts per quarter. This ensures Principal Seema personally reviews all material selections, layout alignments, and structural inspections in Attapur.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-[#F0F0F3] shadow-[4px_4px_10px_rgba(163,177,198,0.3),_-4px_-4px_10px_rgba(255,255,255,0.8)]">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-[#1A1A1C] focus:outline-none"
                >
                  <span className="font-montserrat font-bold text-xs lg:text-sm uppercase tracking-wider">
                    Can we customize the wood and fabric profiles?
                  </span>
                  {openFaq === 1 ? <ChevronUp className="w-4 h-4 text-[#00D2FF]" /> : <ChevronDown className="w-4 h-4 text-[#00D2FF]" />}
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6 pt-1 text-xs lg:text-sm font-light text-[#5C5C5E] leading-relaxed">
                    Absolutely. All wood elements are customized, allowing choice between light white oak, ash wood, or raw teak. Upholstery features premium bouclé, organic linens, or genuine leather profiles sourced from direct importer networks in Hyderabad.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-[#F0F0F3] shadow-[4px_4px_10px_rgba(163,177,198,0.3),_-4px_-4px_10px_rgba(255,255,255,0.8)]">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-[#1A1A1C] focus:outline-none"
                >
                  <span className="font-montserrat font-bold text-xs lg:text-sm uppercase tracking-wider">
                    How do you ensure zero-clutter execution?
                  </span>
                  {openFaq === 2 ? <ChevronUp className="w-4 h-4 text-[#00D2FF]" /> : <ChevronDown className="w-4 h-4 text-[#00D2FF]" />}
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6 pt-1 text-xs lg:text-sm font-light text-[#5C5C5E] leading-relaxed">
                    Our layouts integrate concealed flush doors, flush handle wardrobes, custom cable management bays, and hidden utility panels. We design specific designated niches for vacuum loaders, routers, keys, and appliances, ensuring surfaces remain visually clean.
                  </div>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* INTERACTIVE NEUMORPHIC CONTACT FORM */}
        <section id="contact" className="px-4 lg:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Info */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0F0F3] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.3),_inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mb-6">
                <MapPin className="w-3.5 h-3.5" /> Attapur Studio
              </div>
              <h2 className="font-montserrat text-3xl lg:text-4xl font-black text-[#1A1A1C] uppercase mb-6">
                Initiate collaboration
              </h2>
              <p className="font-sans text-[#5C5C5E] text-sm leading-relaxed mb-8 max-w-md font-light">
                Submit your spatial details below. Our design team will set up a quiet initial video consult to discuss layouts and spatial goals.
              </p>

              <div className="space-y-4 text-xs font-light text-[#5C5C5E] w-full">
                
                <div className="flex items-center gap-4 p-4 bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.3),_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                  <MapPin className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1A1A1C] block">Seema Design Lounge</span>
                    <span className="block mt-0.5 text-[#8A8A93]">Level 2, Shadow Arcade, Attapur, Hyderabad - 500048</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.3),_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                  <Phone className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1A1A1C] block">Direct Studio Ring</span>
                    <span className="block mt-0.5 text-[#8A8A93]">+91 96760 28887</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.3),_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                  <Mail className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1A1A1C] block">General Desk</span>
                    <span className="block mt-0.5 text-[#8A8A93]">studioseemadesign@gmail.com</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Actual Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F0F0F3] shadow-[12px_12px_24px_rgba(163,177,198,0.5),_-12px_-12px_24px_rgba(255,255,255,0.85)] p-6 lg:p-10 rounded-3xl">
                
                {formSubmitState === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),_inset_-3px_-3px_6px_rgba(255,255,255,0.7)] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-8 h-8 text-[#00D2FF]" />
                    </div>
                    <h3 className="font-montserrat text-xl font-bold uppercase text-[#1A1A1C] mb-3">Collaboration Brief Received</h3>
                    <p className="font-sans text-xs text-[#5C5C5E] font-light max-w-sm mx-auto leading-relaxed">
                      Thank you. We have recorded your parameters. An architect from our Attapur studio will contact you via WhatsApp shortly to coordinate.
                    </p>
                    <button 
                      onClick={() => setFormSubmitState('idle')}
                      className="mt-8 bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.5),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4)] text-[#00D2FF] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    >
                      Reset Form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <h3 className="font-montserrat text-lg font-black text-[#1A1A1C] uppercase border-b border-[#E0E0E5] pb-4 mb-4">
                      Brief Submission
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-2">FullName *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Sanjay Sen" 
                          className="w-full bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border-none text-[#1A1A1C] p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-2">WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. +91 96760 28887" 
                          className="w-full bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border-none text-[#1A1A1C] p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-2">Email Address</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. studioseemadesign@gmail.com" 
                          className="w-full bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border-none text-[#1A1A1C] p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-2">Boutique Niche Choice</label>
                        <select 
                          value={formData.serviceType}
                          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                          className="w-full bg-[#F0F0F3] shadow-[4px_4px_8px_rgba(163,177,198,0.3),_-4px_-4px_8px_rgba(255,255,255,0.7)] text-[#3A3A3C] p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-all border-none"
                        >
                          <option value="Japandi Minimal">Japandi Minimal Fusion</option>
                          <option value="Scandinavian Sanctuary">Scandinavian Sanctuary</option>
                          <option value="Wabi-Sabi Lounge">Rustic Wabi-Sabi Lounge</option>
                          <option value="Industrial Loft">Minimalist Industrial Loft</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-2">Spatial Requirements & Space Details</label>
                      <textarea 
                        rows="4" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Mention area size, layout challenges, ventilation goals, or specific wood selection ideas..."
                        className="w-full bg-[#F0F0F3] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border-none text-[#1A1A1C] p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formSubmitState === 'loading'}
                      className="w-full bg-[#F0F0F3] shadow-[6px_6px_12px_rgba(163,177,198,0.5),_-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5)] text-[#00D2FF] font-bold text-xs uppercase tracking-wider py-4 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {formSubmitState === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Brief...
                        </>
                      ) : (
                        <>
                          Submit Briefing Document <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[9px] text-center text-[#8A8A93] font-light">
                      * Strictly for clients based in Hyderabad. We review data confidentiality at first contact.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#F0F0F3] border-t border-[#E0E0E5] py-16 px-4 lg:px-12 text-[#5C5C5E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-xs font-light">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F0F0F3] shadow-[3px_3px_6px_rgba(163,177,198,0.4),_-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#00D2FF]" />
              </div>
              <div>
                <span className="font-montserrat font-black text-sm tracking-wider text-[#1A1A1C] block">SEEMA</span>
                <span className="font-sans text-[7px] uppercase tracking-widest text-[#8A8A93] block">DESIGN STUDIO</span>
              </div>
            </div>
            <p className="leading-relaxed text-[#8A8A93] mt-2">
              Bespoke minimalist boutique interiors that balance functional geometry, ventilation, and soft shadow palettes. Based in Attapur, Hyderabad.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-xs text-[#1A1A1C] uppercase tracking-widest mb-6">Design Niches</h4>
            <ul className="space-y-3">
              <li><a href="#styles" onClick={() => setActiveTab('japandi')} className="hover:text-[#00D2FF] transition-colors">Japandi Minimal</a></li>
              <li><a href="#styles" onClick={() => setActiveTab('scandinavian')} className="hover:text-[#00D2FF] transition-colors">Scandinavian Sanctuary</a></li>
              <li><a href="#styles" onClick={() => setActiveTab('wabisabi')} className="hover:text-[#00D2FF] transition-colors">Wabi-Sabi Lounge</a></li>
              <li><a href="#styles" onClick={() => setActiveTab('chic')} className="hover:text-[#00D2FF] transition-colors">Industrial Loft</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-xs text-[#1A1A1C] uppercase tracking-widest mb-6">Concierge desk</h4>
            <p className="leading-relaxed text-[#8A8A93] mb-3">
              Level 2, Shadow Arcade,<br />
              Attapur, Hyderabad - 500048
            </p>
            <p className="hover:text-[#00D2FF] transition-colors">+91 96760 28887</p>
            <p className="hover:text-[#00D2FF] transition-colors mt-1">studioseemadesign@gmail.com</p>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-xs text-[#1A1A1C] uppercase tracking-widest mb-6">Studio Policy</h4>
            <p className="leading-relaxed text-[#8A8A93] mb-4">
              We operate exclusively on three residential assignments per quarter to guarantee absolute detail alignment and structural quality.
            </p>
            <div className="flex gap-4 font-bold text-[#00D2FF]">
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>Behance</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E0E0E5] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#8A8A93]">
          <span>&copy; {new Date().getFullYear()} Seema Design Studio. All rights reserved.</span>
          <span className="mt-2 sm:mt-0 uppercase tracking-widest text-[#00D2FF]">Quiet Boutique Interiors</span>
        </div>
      </footer>

    </div>
  );
}

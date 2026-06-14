"use client";

import React, { useState } from 'react';
import { 
  Sparkles, Palette, HelpCircle, ChevronDown, Check, Menu, X, 
  ArrowRight, Home, LayoutGrid, Clock, Users, ArrowUpRight, 
  Compass, Sun, Eye, Shield, RefreshCw, Mail, Phone, MapPin
} from 'lucide-react';

export default function SimplyInteriorsGachibowli() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePalette, setActivePalette] = useState('sunset'); // sunset, ocean, orchid
  const [selectedService, setSelectedService] = useState('living');
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [faqOpen, setFaqOpen] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '10-15 Lakhs',
    timeline: 'Within 2 Months',
    message: ''
  });

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: '10-15 Lakhs',
      timeline: 'Within 2 Months',
      message: ''
    });
  };

  // Color mappings for glowing background blobs based on activePalette
  const getBlobColors = () => {
    switch (activePalette) {
      case 'ocean':
        return {
          blob1: 'bg-cyan-400/25',
          blob2: 'bg-teal-400/20',
          blob3: 'bg-emerald-400/20',
          textGradient: 'from-cyan-200 via-teal-200 to-emerald-300',
          accentBorder: 'border-cyan-500/30',
          accentText: 'text-cyan-300',
          accentBg: 'bg-cyan-500/10 hover:bg-cyan-500/20'
        };
      case 'orchid':
        return {
          blob1: 'bg-fuchsia-400/25',
          blob2: 'bg-purple-400/20',
          blob3: 'bg-violet-400/20',
          textGradient: 'from-fuchsia-200 via-purple-200 to-violet-300',
          accentBorder: 'border-fuchsia-500/30',
          accentText: 'text-fuchsia-300',
          accentBg: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20'
        };
      case 'sunset':
      default:
        return {
          blob1: 'bg-pink-400/25',
          blob2: 'bg-rose-400/20',
          blob3: 'bg-purple-400/20',
          textGradient: 'from-pink-200 via-rose-200 to-purple-300',
          accentBorder: 'border-pink-500/30',
          accentText: 'text-pink-300',
          accentBg: 'bg-pink-500/10 hover:bg-pink-500/20'
        };
    }
  };

  const designTokens = getBlobColors();

  const services = {
    living: {
      title: "Frosted Glass Living Rooms",
      desc: "Plush organic curves offset by sharp, minimal design features. We use floating acrylic media consoles, soft pastel wall treatments, and indirect neon-diffused cove panels to create an airy, dreamlike environment.",
      specs: [
        { label: "Veneers", value: "White ash matte finish" },
        { label: "Lighting", value: "Diffused pastel color cove lighting" },
        { label: "Console", value: "Frosted acrylic floating unit" }
      ],
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    },
    kitchen: {
      title: "Translucent Pastel Kitchens",
      desc: "Kitchens look spectacular with pastel colors. We integrate soft pink or powder blue glass-front overhead cabinets, seamless Corian white stone worktops, and gold-trimmed modular layouts that maximize corner spacing.",
      specs: [
        { label: "Shutters", value: "Frosted lacquer glass panels" },
        { label: "Counters", value: "Pure white seamless Corian stone" },
        { label: "Gola", value: "Anodized champagne gold gola profiles" }
      ],
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    },
    wardrobes: {
      title: "Glowing Sliding Wardrobes",
      desc: "Maximizing storage while maintaining a clean silhouette. Our wardrobes utilize floor-to-ceiling tinted glass sliding panels, hidden warm lighting sensors, and high-gloss soft-closing pastel drawers.",
      specs: [
        { label: "Doors", value: "Tinted translucent reflection glass" },
        { label: "Sensors", value: "Integrated motion-trigger LED strips" },
        { label: "Structure", value: "Durable marine grade birch ply" }
      ],
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    },
    lighting: {
      title: "Ambient Fluid Illumination",
      desc: "Perfect lighting establishes visual layers. We customize glowing glass pendant fixtures, subtle recessed downlights, and custom color panels that adapt seamlessly from working focus to lounging hours.",
      specs: [
        { label: "Pendants", value: "Mouthblown frosted pastel orb lamps" },
        { label: "Control", value: "Dimmable multi-channel app modules" },
        { label: "Accents", value: "Low-voltage edge glow silicone strips" }
      ],
      img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80"
    }
  };

  const processSteps = [
    {
      title: "Pastel Mood Boarding",
      subtitle: "Virtual Consultation",
      detail: "We coordinate with you online or at Gachibowli, laying out soft canvas hues, metal trim accents, and translucent textures matching your style criteria."
    },
    {
      title: "Glassmorphic 3D Renders",
      subtitle: "Bespoke Design",
      detail: "Our design studio creates immersive virtual renders. You can inspect how natural sunlight reflects through our customized frosted cabinet screens and pastel partitions."
    },
    {
      title: "Precision Assembly",
      subtitle: "Execution & Fitout",
      detail: "Our certified carpenters manufacture all modular cabinetry at our high-tech factory and deliver a clean, dust-free installation at your Gachibowli site."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c16] text-[#e0e2ee] font-sans selection:bg-[#f472b6] selection:text-black overflow-x-hidden relative">
      
      {/* Dynamic Floating Background Blobs */}
      <div className={`absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full ${designTokens.blob1} blur-[120px] pointer-events-none transition-colors duration-1000 z-0`} />
      <div className={`absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full ${designTokens.blob2} blur-[150px] pointer-events-none transition-colors duration-1000 z-0`} />
      <div className={`absolute bottom-[10%] left-[10%] w-[45vw] h-[45vw] rounded-full ${designTokens.blob3} blur-[130px] pointer-events-none transition-colors duration-1000 z-0`} />
      
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-400 to-indigo-500 p-[1.5px] shadow-lg shadow-pink-500/20">
                <div className="w-full h-full rounded-[10px] bg-[#0b0c16] flex items-center justify-center font-black text-xs text-white">
                  S.I.
                </div>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  SIMPLY INTERIORS
                </span>
                <span className="text-[9px] tracking-widest text-[#f472b6] uppercase font-bold block leading-none">
                  Gachibowli Studio
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#process" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Our Process</a>
              <a href="#faq" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>

            {/* CTA Nav Button */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold tracking-wider hover:bg-white/20 transition-all shadow-md"
              >
                REQUEST CALLBACK
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-[#0b0c16]/95 border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              Services
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              Our Process
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-4 py-3 mt-4 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-sm font-bold text-white shadow-lg"
            >
              REQUEST CALLBACK
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-36 px-4 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Palette Customizer Capsule */}
            <div className="inline-flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg justify-center lg:justify-start">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 pl-3">Customize Theme:</span>
              <div className="flex items-center gap-1.5 pr-2">
                <button 
                  onClick={() => setActivePalette('sunset')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activePalette === 'sunset' ? 'bg-pink-500 text-white shadow-md' : 'bg-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Sunset Pastel
                </button>
                <button 
                  onClick={() => setActivePalette('ocean')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activePalette === 'ocean' ? 'bg-cyan-500 text-black shadow-md' : 'bg-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Ocean Breeze
                </button>
                <button 
                  onClick={() => setActivePalette('orchid')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activePalette === 'orchid' ? 'bg-fuchsia-500 text-white shadow-md' : 'bg-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Orchid Dream
                </button>
              </div>
            </div>
            
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Bespoke Spaces, <br />
              <span className={`bg-gradient-to-r ${designTokens.textGradient} bg-clip-text text-transparent transition-all duration-1000`}>
                Simply Designed.
              </span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              We design modular, translucent glass and pastel-shaded premium interiors for modern apartments in Gachibowli. Enjoy dust-free factory finish setup and stress-free execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-purple-500/25"
              >
                <span>Get Free Design Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <span>Explore Concepts</span>
              </a>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-extrabold text-2xl text-white">45 Days</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Speed Delivery</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-extrabold text-2xl text-white">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Factory Machine Cut</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-extrabold text-2xl text-white">Zero</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Budget Escalations</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Panel */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Glassmorphic Card Overlay */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl z-0" />
            
            <div className="relative z-10 rounded-3xl overflow-hidden p-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                  alt="Pastel-themed modern glassmorphic living room setup"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Interactive Stat Panel */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-lg bg-black/40 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-[#f472b6] uppercase font-bold tracking-widest block">Featured Concept</span>
                    <span className="text-xs text-white font-medium block">Pink Orchid Sunset Suite</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-white/10 text-[10px] text-white font-bold border border-white/10">
                    Live Render
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 relative max-w-7xl mx-auto z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Graphic Blocks */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg text-center space-y-2">
                  <LayoutGrid className={`w-8 h-8 ${designTokens.accentText} mx-auto`} />
                  <h4 className="text-sm font-bold text-white">Modular Elegance</h4>
                  <p className="text-[11px] text-slate-400 font-light">Custom cupboards, wall frames & partition screens.</p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80" 
                    alt="Living area detailing"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=300&q=80" 
                    alt="Smart wardrobe layout"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg text-center space-y-2">
                  <Clock className={`w-8 h-8 ${designTokens.accentText} mx-auto`} />
                  <h4 className="text-sm font-bold text-white">45-Day Delivery</h4>
                  <p className="text-[11px] text-slate-400 font-light">Fast execution backed by digital site tracking.</p>
                </div>
              </div>
            </div>

            {/* Narrative Context */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <Compass className={`w-4 h-4 ${designTokens.accentText}`} />
                <span>Modern Interior Design Ethos</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Crafting premium spaces with a touch of <span className={`bg-gradient-to-r ${designTokens.textGradient} bg-clip-text text-transparent`}>translucent art.</span>
              </h2>
              
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Simply Interiors Gachibowli represents the cutting edge of urban apartment aesthetics. We move away from heavy, bulky traditional cabinetry in favor of light-reflecting pastel surfaces, soft frosted glass partitions, and floating modular panels.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Our materials are pre-cut with absolute millimetric precision at our high-speed factory using German CNC equipment, guaranteeing a clean setup on site without local sawing noise or lingering chemical odors.
              </p>

              {/* Three Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className={`w-5 h-5 rounded-full ${designTokens.accentBg} flex items-center justify-center ${designTokens.accentText} flex-shrink-0 mt-0.5`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-white">Pastel Color Balance</strong>
                    <span className="text-[11px] text-slate-400">Soft palettes designed to visually expand small rooms.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className={`w-5 h-5 rounded-full ${designTokens.accentBg} flex items-center justify-center ${designTokens.accentText} flex-shrink-0 mt-0.5`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-white">Frosted Glass Screens</strong>
                    <span className="text-[11px] text-slate-400">Maintains natural lighting flow while creating privacy boundaries.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Services Portfolio Section */}
      <section id="services" className="py-24 px-4 relative max-w-7xl mx-auto z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f472b6]">THE PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Premium Interior Offerings</h2>
          <p className="text-slate-300 text-sm font-light">
            Toggle our interactive zones to see specifications, designs, and materials.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'living', label: 'Living Rooms' },
            { id: 'kitchen', label: 'Modular Kitchens' },
            { id: 'wardrobes', label: 'Wardrobes' },
            { id: 'lighting', label: 'Ambient Lighting' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedService(tab.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedService === tab.id
                  ? `bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20`
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Graphic Grid */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-light">
            
            {/* Info */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {services[selectedService].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {services[selectedService].desc}
              </p>

              {/* Specifications Table */}
              <div className="bg-black/20 rounded-2xl p-6 border border-white/5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300">Technical Details:</h4>
                <div className="divide-y divide-white/5 text-xs">
                  {services[selectedService].specs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-2">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="#contact" 
                  className={`inline-flex items-center gap-2 text-xs font-bold tracking-wider ${designTokens.accentText} hover:opacity-80 transition-opacity`}
                >
                  <span>REQUEST LAYOUT FOR THIS SPACE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Screen */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-xl group">
                <img 
                  src={services[selectedService].img} 
                  alt={services[selectedService].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/50 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] text-white border border-white/10 uppercase tracking-widest font-bold">
                  Gachibowli Custom
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Design Process Section */}
      <section id="process" className="py-24 px-4 relative max-w-7xl mx-auto z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">DESIGN PIPELINE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Three-Step Process</h2>
          <p className="text-slate-300 text-sm font-light">
            We simplify the complexity of home styling into a clear, transparent journey.
          </p>
        </div>

        {/* Process Steps Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              onClick={() => setActiveProcessStep(index)}
              className={`cursor-pointer text-left p-8 rounded-3xl backdrop-blur-lg border transition-all duration-300 ${
                activeProcessStep === index 
                  ? 'bg-white/10 border-pink-500/40 shadow-xl shadow-pink-500/5'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className={`text-xs font-bold uppercase tracking-widest ${activeProcessStep === index ? 'text-pink-300' : 'text-slate-400'}`}>
                  {step.subtitle}
                </span>
                <span className="font-mono text-3xl font-extrabold text-white/20">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Interactive progress visualization bar */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Interactive Pipeline Progress:</span>
          <div className="flex-1 max-w-lg bg-white/10 h-2 rounded-full overflow-hidden relative">
            <div 
              className="bg-gradient-to-r from-pink-500 to-indigo-500 h-full transition-all duration-500" 
              style={{ width: `${((activeProcessStep + 1) / 3) * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-bold text-white">Step {activeProcessStep + 1} of 3</span>
        </div>

      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 relative max-w-7xl mx-auto z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f472b6]">CLIENT OPINIONS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Loved by Gachibowli Families</h2>
          <p className="text-slate-300 text-sm font-light">
            Discover why our clients recommend Simply Interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex flex-col justify-between space-y-6">
            <p className="italic text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              "We wanted a clean, bright aesthetic for our flat in Gachibowli. Simply Interiors did an outstanding job using soft pink panels in the bedroom and frosted white glass overhead units in the kitchen. Very neat execution!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                SR
              </div>
              <div>
                <strong className="block text-xs font-bold text-white">Suhasini Rao</strong>
                <span className="text-[10px] text-slate-400">3 BHK Penthouse, Gachibowli</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex flex-col justify-between space-y-6">
            <p className="italic text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              "Absolutely zero budget hikes. We locked down the custom 45-day package, and they delivered exactly on day 44. The CNC machine finish on the sliding wardrobes is excellent, and the ambient lighting looks incredibly high-end."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                NV
              </div>
              <div>
                <strong className="block text-xs font-bold text-white">Nikhil Verma</strong>
                <span className="text-[10px] text-slate-400">3 BHK Owner, Gachibowli</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex flex-col justify-between space-y-6">
            <p className="italic text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              "Excellent design sense! The frosted glass screens they built between our living room and dining room divide the space beautifully without cutting off the afternoon light. Highly recommend their Gachibowli team."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                PP
              </div>
              <div>
                <strong className="block text-xs font-bold text-white">Preeti Patel</strong>
                <span className="text-[10px] text-slate-400">Villa Owner, Nanakramguda</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 relative max-w-4xl mx-auto z-10">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f472b6]">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What makes your modular cabinets high-end?",
              a: "We only use premium water-resistant boiling-water-proof (BWP) marine ply for structures, combined with premium accessories. All boards are machine-banded at our automated factory to guarantee zero edge peeling."
            },
            {
              q: "Can I choose my own custom pastel colors?",
              a: "Absolutely! We provide custom lacquered glass and laminates across 200+ distinct pastel colors, including soft roses, lavenders, sage greens, and cool mint blues."
            },
            {
              q: "How does the 45-day delivery policy function?",
              a: "Once you approve the final 3D design renders and pay the initialization deposit, we count 45 working days. If we delay, we pay you a penalty per day until execution is complete."
            },
            {
              q: "Do you offer physical consultations at the apartment site?",
              a: "Yes! We run site consultations and measurements for flats in Gachibowli, Nanakramguda, Kokapet, and Financial District free of charge."
            },
            {
              q: "What warranty options do you provide?",
              a: "We provide a solid 10-year warranty on modular cupboards and hardware components, covering all structural alignment and mechanical failures."
            }
          ].map((faq, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex justify-between items-center p-6 text-left text-white font-medium hover:text-pink-300 focus:outline-none transition-colors"
              >
                <span className="text-base font-bold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${faqOpen[i] ? 'rotate-180' : ''}`} />
              </button>
              
              {faqOpen[i] && (
                <div className="px-6 pb-6 text-slate-300 text-xs sm:text-sm font-light border-t border-white/5 pt-4 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* Interactive Contact Form Section */}
      <section id="contact" className="py-24 px-4 relative max-w-7xl mx-auto z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400">GET IN TOUCH</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Design Your Dream</h2>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Connect with our Gachibowli design consultants. Book a site measurement or plan a visit to our materials library.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-300 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Direct Line</span>
                  <span className="text-white text-sm font-semibold">+91 87654 32109</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-300 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Design Inquiries</span>
                  <span className="text-white text-sm font-semibold">hello@simplyinteriors.in</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-300 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Gachibowli Office</span>
                  <span className="text-white text-xs block leading-relaxed font-semibold">
                    4th Floor, Oval Square Building, Gachibowli Main Rd, Hyderabad - 500032
                  </span>
                </div>
              </div>

            </div>

            {/* Operating Times */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">WORKING HOURS</h4>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                Tuesday to Sunday: 11:00 AM – 8:00 PM <br />
                Mondays: Closed
              </p>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl">
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300 mx-auto animate-pulse">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">Application Received</h3>
                    <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you! A lead planner from our Gachibowli office will call you within 24 hours to schedule your layout consultation.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl border border-white/20 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-bold transition-all"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-white mb-2">Book Free Consultation</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Suhasini Rao"
                        className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Mobile Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 XXXXX"
                        className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="suhasini@gmail.com"
                        className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Target Budget *</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-pink-500/60 transition-all"
                      >
                        <option>6-10 Lakhs</option>
                        <option>10-15 Lakhs</option>
                        <option>15-20 Lakhs</option>
                        <option>20+ Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Expected Handover Timeline</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-pink-500/60 transition-all"
                    >
                      <option>Immediate (Within 1 Month)</option>
                      <option>Within 2 Months</option>
                      <option>Within 3-6 Months</option>
                      <option>Planning Stage (6+ Months)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Additional details (BHK, society name, special styling cues)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="E.g. 3 BHK flat at My Home Avatar, Gachibowli. Possession in 30 days. Looking for pastel mint modular kitchen and glass partition walls..."
                      className="w-full bg-[#0b0c16]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>PROCESSING BOOKING...</span>
                      </>
                    ) : (
                      <span>SUBMIT CALLBACK REQUEST</span>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-16 px-4 text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-pink-400 to-indigo-500 flex items-center justify-center font-bold text-[8px]">SI</div>
              <span className="font-extrabold text-sm tracking-tight">SIMPLY INTERIORS</span>
            </div>
            <p className="text-xs font-light leading-relaxed">
              Pioneers of frosted glassmorphic and pastel-infused modular interiors in Gachibowli, Hyderabad. Speed, precision, and zero-headache execution.
            </p>
            <div className="text-xs text-[#f472b6] font-semibold">
              © {new Date().getFullYear()} Simply Interiors. All Rights Reserved.
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 font-extrabold">Services</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Frosted Glass Living Rooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pastel Modular Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Modular Sliding Wardrobes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ambient Illumination</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 font-extrabold">Contact Info</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>Studio: Gachibowli, Hyderabad</li>
              <li>Phone: +91 87654 32109</li>
              <li>Email: hello@simplyinteriors.in</li>
              <li>Service Coverage: Gachibowli, Kondapur, Madhapur, Nanakramguda</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 font-extrabold">Why Simply?</h4>
            <p className="text-xs font-light leading-relaxed">
              We eliminate traditional carpentry clutter. Every cabinet is manufactured inside our automated unit and assembled on-site with zero dust, noise, or delay.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

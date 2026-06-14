"use client";

import React, { useState } from 'react';
import { 
  Leaf, Sun, Compass, Sparkles, ChevronRight, CheckCircle2, 
  ChevronDown, Menu, X, ArrowRight, Award, Heart, MessageSquare, 
  Phone, MapPin, Mail, RefreshCw, Eye, Shield, TreePine, 
  Sliders, Calendar, DollarSign
} from 'lucide-react';

export default function NamasviInteriorsNarsingi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState('living');
  const [estimateBhk, setEstimateBhk] = useState('3bhk');
  const [estimateTier, setEstimateTier] = useState('grove');
  const [faqOpen, setFaqOpen] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Living Room Design',
    consultDate: '',
    message: ''
  });

  // FAQ toggle helper
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
      service: 'Living Room Design',
      consultDate: '',
      message: ''
    });
  };

  // Estimator logic
  const calculateEstimate = () => {
    const bhkFactors = { '2bhk': 1.0, '3bhk': 1.4, '4bhk': 1.8, 'villa': 2.5 };
    const tierPrices = {
      canopy: { base: 650000, label: 'Eco-Minimalist Canopy', materials: 'FSC Teak, Recycled Cotton Fabrics, Low-VOC Tints' },
      grove: { base: 1100000, label: 'Premium Nature Grove', materials: 'Live-Edge Oak, Preserve Moss Walls, Smart Biodynamic Lights' },
      forest: { base: 1850000, label: 'Ultra-Luxury Forest Estate', materials: 'Imported Marble, Custom Water Wall, Antique Gold Inlays, Hand-spun Silk' }
    };

    const factor = bhkFactors[estimateBhk];
    const tier = tierPrices[estimateTier];
    const finalPrice = Math.round(tier.base * factor);
    const duration = Math.round(45 + (factor * 10));

    return {
      price: finalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }),
      materials: tier.materials,
      label: tier.label,
      duration: duration
    };
  };

  const estimate = calculateEstimate();

  const services = {
    living: {
      title: "Nature-Fused Living Rooms",
      description: "Our living rooms are designed around natural light, fresh air circulation, and organic focal points. We integrate bespoke indoor garden beds, natural slate feature walls, and curved seating layouts to foster conversation and tranquility.",
      features: [
        "Preserved moss feature wall with brass framing",
        "Curved solid wood custom sofa sets in natural fibers",
        "Biodynamic mood lighting that aligns with your circadian rhythm",
        "Sunken botanical lounge or built-in indoor planters"
      ],
      materials: "Polished sandstones, raw linen fabrics, gold leaf inlay accents, and reclaimed teak wood.",
      timeframe: "4-6 Weeks",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      title: "Organic Modular Kitchens",
      description: "A kitchen should feel grounded and highly functional. We combine state-of-the-art kitchen mechanics with warm, tactile materials like stone countertops, natural clay tile backsplashes, and custom timber cabinetry.",
      features: [
        "Quartzite countertops with subtle organic veining",
        "Herb garden window bays with integrated micro-watering systems",
        "Concealed high-end matte gold hardware and premium brass faucets",
        "Soft curved cabinet corners and organic fluted glass panels"
      ],
      materials: "Waterproof marine ply, porcelain stone slabs, brushed gold accents, and anti-fingerprint organic veneers.",
      timeframe: "5-7 Weeks",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    wardrobes: {
      title: "Bespoke Botanical Wardrobes",
      description: "Storage that functions as an extension of the room's architecture. Our wardrobes use sustainable eucalyptus frameworks, woven cane door panels for natural ventilation, and built-in cedar linings to preserve garments naturally.",
      features: [
        "Woven rattan and cane doors for airflow and texture",
        "Integrated warm LED wardrobe lighting (2700K sunset hue)",
        "Premium full-length gold-rimmed dressing mirrors",
        "Soft-close hidden drawer organizers lined with velvet"
      ],
      materials: "Cedar wood interior, cane panels, luxury leather pull tabs, and gold powder-coated frames.",
      timeframe: "3-5 Weeks",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    lighting: {
      title: "Circadian & Bio-lighting",
      description: "Light affects well-being. We curate custom lighting designs that mimic daylight changes—stimulating energy in the morning with cool tones, and easing you into restorative sleep at night with deep, warm amber hues.",
      features: [
        "Smart automated dimming schedules linked to sun patterns",
        "Handcrafted paper and wicker pendant lights for organic shadows",
        "Recessed low-glare architectural spot fixtures",
        "Warm gold accent wall sconces with botanical leafy motifs"
      ],
      materials: "Brushed brass, handblown amber glass, woven bamboo, and dimmable smart modules.",
      timeframe: "2-3 Weeks",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    }
  };

  return (
    <div className="min-h-screen bg-[#071910] text-[#e2f0d9] font-sans overflow-x-hidden selection:bg-[#d4af37] selection:text-[#071910]">
      
      {/* Botanical Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#0f3a24] via-[#0b2b1a] to-transparent pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#1e5436]/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#133c24]/30 blur-[150px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#071910]/95 backdrop-blur-md border-b border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center bg-[#0d2f1f] text-[#d4af37] shadow-lg">
                <Leaf className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-white block">
                  NAMASVI
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
                  Interiors • Narsingi
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-[#a8c69f] hover:text-[#d4af37] transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-[#a8c69f] hover:text-[#d4af37] transition-colors">Portfolio</a>
              <a href="#process" className="text-sm font-medium text-[#a8c69f] hover:text-[#d4af37] transition-colors">Our Process</a>
              <a href="#estimator" className="text-sm font-medium text-[#a8c69f] hover:text-[#d4af37] transition-colors">Estimator</a>
              <a href="#faq" className="text-sm font-medium text-[#a8c69f] hover:text-[#d4af37] transition-colors">FAQ</a>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#d4af37] text-xs font-semibold tracking-wider text-[#d4af37] hover:bg-[#d4af37] hover:text-[#071910] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                BOOK CONSULTATION
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#a8c69f] hover:text-[#d4af37] focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a2719] border-b border-[#d4af37]/20 px-4 pt-4 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c69f] hover:bg-[#133c24] hover:text-white"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c69f] hover:bg-[#133c24] hover:text-white"
            >
              Portfolio
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c69f] hover:bg-[#133c24] hover:text-white"
            >
              Our Process
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c69f] hover:bg-[#133c24] hover:text-white"
            >
              Estimator
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c69f] hover:bg-[#133c24] hover:text-white"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-4 py-3 mt-4 rounded-full border border-[#d4af37] text-sm font-semibold text-[#d4af37] hover:bg-[#d4af37] hover:text-[#071910] transition-colors"
            >
              BOOK CONSULTATION
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-36 px-4 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#133c24] border border-[#d4af37]/35 text-[#d4af37] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NARSINGI’S LUXURY INTERIOR BOUTIQUE</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Living Spaces, <br className="hidden sm:inline" />
              Reimagined with the <br />
              <span className="font-serif italic text-[#d4af37]">Soul of Nature.</span>
            </h1>
            
            <p className="text-[#a8c69f] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Namasvi blends biophilic principles, warm sustainable timbers, and bespoke gold-leaf elegance. Discover premium interior luxury designed to elevate indoor wellness, comfort, and state-of-the-art utility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#071910] font-bold text-sm hover:opacity-90 transition-all shadow-xl hover:shadow-[#d4af37]/10 transform hover:-translate-y-0.5"
              >
                <span>Begin Your Design Journey</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0d2f1f] border border-[#a8c69f]/30 text-white font-semibold text-sm hover:bg-[#133c24] transition-all"
              >
                <span>Explore Portfolio</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#d4af37]/15 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block font-serif text-3xl text-white">120+</span>
                <span className="text-[11px] text-[#a8c69f] uppercase tracking-wider">Luxe Homes Done</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-white">100%</span>
                <span className="text-[11px] text-[#a8c69f] uppercase tracking-wider">Natural Timber</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-white">10Yr</span>
                <span className="text-[11px] text-[#a8c69f] uppercase tracking-wider">Solid Warranty</span>
              </div>
            </div>

          </div>

          {/* Hero Premium Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#d4af37] to-emerald-500 opacity-30 blur-lg pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                alt="Luxurious biophilic living room design with plants and warm lights"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Leaf Capsule */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#071910]/75 border border-[#d4af37]/20 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400">
                  <TreePine className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#d4af37] uppercase tracking-widest font-bold block">Biophilic Design Ethos</span>
                  <span className="text-xs text-white/95">Integrating indoor plants & air-purifying layouts.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-[#f2f6f0] text-[#071910] py-24 px-4 relative">
        <div className="absolute top-0 inset-x-0 h-10 bg-[#071910] rounded-b-[3rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visuals */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-emerald-900/10 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80" 
                    alt="Sustainable furniture detailing"
                    className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden bg-[#071910] p-6 text-white border border-[#d4af37]/20 flex flex-col justify-between aspect-[4/5] shadow-lg">
                  <Leaf className="w-10 h-10 text-[#d4af37]" />
                  <div>
                    <h4 className="font-serif text-xl mb-1 text-white">Eco-Luxe Materials</h4>
                    <p className="text-xs text-[#a8c69f] leading-relaxed">We source certified FSC timbers, non-toxic organic paints, and wool textiles.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden bg-emerald-950 p-6 text-white border border-emerald-500/20 flex flex-col justify-between aspect-[4/5] shadow-lg">
                  <Award className="w-10 h-10 text-emerald-400" />
                  <div>
                    <h4 className="font-serif text-xl mb-1 text-white">Wellness Spaces</h4>
                    <p className="text-xs text-emerald-300 leading-relaxed">Designs crafted to reduce mental stress, increase concentration, and improve sleep cycles.</p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden border border-emerald-900/10 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80" 
                    alt="Green plants indoor decor"
                    className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Context Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-xs tracking-wider uppercase">
                <Compass className="w-4 h-4 text-[#d4af37]" />
                <span>Our Design Philosophy</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#071910] leading-tight">
                Where high-end interior luxury meets the <span className="font-serif italic text-emerald-800">restorative power</span> of plants.
              </h2>
              
              <p className="text-gray-700 text-base leading-relaxed font-light">
                At Namasvi Interiors Narsingi, we believe your home should be your personal sanctuary. Our design team focuses on biophilia—the innate connection between humans and nature. We replace cold, synthetic modern interiors with warm timber joinery, organic curved architectural elements, and lush integrated plant environments.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#071910]">Breathe Pure & Live Fresh</strong>
                    <span className="text-xs text-gray-600 block">We build with non-VOC sealants and incorporate oxygen-rich vegetation layouts.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#071910]">Custom Artisanal Craftsmanship</strong>
                    <span className="text-xs text-gray-600 block">Our Narsingi-based carpentry workshop manufactures furniture tailored exclusively to your layouts.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-[#071910]">Gold-Accented Sophistication</strong>
                    <span className="text-xs text-gray-600 block">We balance green, organic elements with rich brushed gold leaf, brass details, and polished stonework.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <blockquote className="border-l-4 border-[#d4af37] pl-4 italic text-sm text-gray-600">
                  "A home is not just a place to sleep; it's a breathing habitat that shapes your mood, health, and family dynamics." — Namasvi Design Founders
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section id="services" className="py-24 px-4 bg-[#0a2719]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">THE PORTFOLIO</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">Our Signature Services</h2>
            <p className="text-[#a8c69f] text-sm font-light">
              Explore how we apply our organic green design philosophy across different zones of your residence.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'living', label: 'Living Rooms' },
              { id: 'kitchen', label: 'Modular Kitchens' },
              { id: 'wardrobes', label: 'Wardrobes' },
              { id: 'lighting', label: 'Lighting Design' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedServiceTab(tab.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  selectedServiceTab === tab.id
                    ? 'bg-[#d4af37] text-[#071910] shadow-lg shadow-[#d4af37]/10'
                    : 'bg-[#133c24]/50 text-[#a8c69f] hover:text-white border border-transparent hover:border-[#a8c69f]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="bg-[#071910] rounded-[2.5rem] border border-[#d4af37]/20 p-6 sm:p-8 lg:p-12 shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Tab Info */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {services[selectedServiceTab].title}
                </h3>
                <p className="text-[#a8c69f] text-sm leading-relaxed font-light">
                  {services[selectedServiceTab].description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Key Design Elements:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                    {services[selectedServiceTab].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#d4af37]/15 pt-6 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-[#a8c69f] uppercase tracking-wider text-[10px] mb-1">Premium Materials Used</span>
                    <span className="text-white font-medium">{services[selectedServiceTab].materials}</span>
                  </div>
                  <div>
                    <span className="block text-[#a8c69f] uppercase tracking-wider text-[10px] mb-1">Timeline to Complete</span>
                    <span className="text-[#d4af37] font-semibold">{services[selectedServiceTab].timeframe}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-bold tracking-wider hover:opacity-85 transition-opacity"
                  >
                    <span>REQUEST DESIGN PRICING FOR THIS SPACE</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Tab Graphic */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#d4af37]/25 shadow-xl group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={services[selectedServiceTab].image} 
                    alt={services[selectedServiceTab].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#071910]/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] text-[#d4af37] uppercase font-bold tracking-wider border border-[#d4af37]/20 z-20">
                    Bespoke Concept
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-24 px-4 bg-[#f2f6f0] text-[#071910] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">THE TIMELINE</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal">Our Organic Design Process</h2>
            <p className="text-gray-600 text-sm font-light">
              Crafting luxury interiors requires absolute care. Here is how we transform your empty structure into a breathing, biophilic haven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-900/10 shadow-lg space-y-6 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#071910] text-[#d4af37] flex items-center justify-center font-serif text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-normal text-[#071910]">Consult & Survey</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light">
                We perform an on-site audit at Narsingi or surrounding areas, assessing your property's natural daylight angles, cross-ventilation potentials, and discussing your layout requirements.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Daylight & ventilation analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Interactive material board mood setups</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-900/10 shadow-lg space-y-6 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#071910] text-[#d4af37] flex items-center justify-center font-serif text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-normal text-[#071910]">3D Biophilic Proposal</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light">
                We generate virtual walk-through renders mapping out custom furniture placements, green partitions, custom modular fittings, and exact smart ambient lighting schemes.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Virtual 3D rendering walkthroughs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Transparent itemized estimation</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-900/10 shadow-lg space-y-6 relative group hover:border-[#d4af37]/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#071910] text-[#d4af37] flex items-center justify-center font-serif text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-normal text-[#071910]">Bespoke Execution</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light">
                Our artisanal team initiates carpentry production and coordinates physical site works, integrating custom storage, stone fixtures, preserved botanicals, and finishes.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Supervised on-site installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Handover with botanical setup guide</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-16 bg-[#071910] text-white rounded-[2rem] p-8 lg:p-12 border border-[#d4af37]/35 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <h4 className="font-serif text-2xl text-[#d4af37]">Ready to plant the seeds of comfort?</h4>
              <p className="text-xs text-[#a8c69f] font-light max-w-xl">
                Get connected with Namasvi’s principal architect for a physical layout session in Narsingi.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#d4af37] text-[#071910] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
            >
              <span>Schedule On-Site Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-24 px-4 bg-[#071910] border-t border-b border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">INTERACTIVE TOOL</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">Project Cost Estimator</h2>
            <p className="text-[#a8c69f] text-sm font-light">
              Get an instant baseline price estimate for your space configuration and select biophilic design tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0d2f1f] rounded-[2.5rem] border border-[#d4af37]/25 p-8 sm:p-12 shadow-2xl items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* BHK Select */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  1. Select Apartment Configuration
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: '2bhk', label: '2 BHK' },
                    { id: '3bhk', label: '3 BHK' },
                    { id: '4bhk', label: '4 BHK' },
                    { id: 'villa', label: 'Luxury Villa' }
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => setEstimateBhk(option.id)}
                      className={`py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                        estimateBhk === option.id
                          ? 'bg-[#d4af37] text-[#071910] shadow-md'
                          : 'bg-[#071910] text-[#a8c69f] border border-[#a8c69f]/20 hover:border-[#d4af37]/45'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Design Tiers Select */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  2. Choose Biophilic Design Theme Tier
                </label>
                <div className="space-y-3">
                  {[
                    { id: 'canopy', title: 'Eco-Minimalist Canopy', desc: 'Sustainably sourced woods, basic air-purifying plants, non-toxic organic tints.' },
                    { id: 'grove', title: 'Premium Nature Grove', desc: 'Live-edge hardwood accents, automated dimming lights, premium preserved moss panels.' },
                    { id: 'forest', title: 'Ultra-Luxury Forest Estate', desc: 'Custom moss waterfall, heavy gold leaf details, imported marble, bespoke circadian illumination.' }
                  ].map(tier => (
                    <button
                      key={tier.id}
                      onClick={() => setEstimateTier(tier.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                        estimateTier === tier.id
                          ? 'bg-[#133c24] border-[#d4af37] text-white'
                          : 'bg-[#071910] border-[#a8c69f]/15 text-[#a8c69f] hover:border-[#d4af37]/35'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center flex-shrink-0 ${
                        estimateTier === tier.id ? 'border-[#d4af37]' : 'border-slate-500'
                      }`}>
                        {estimateTier === tier.id && <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                      </div>
                      <div>
                        <strong className="block text-sm font-bold text-white">{tier.title}</strong>
                        <span className="block text-xs font-light mt-1 text-[#a8c69f]">{tier.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Price Outputs */}
            <div className="lg:col-span-5 bg-[#071910] rounded-3xl p-6 sm:p-8 border border-[#d4af37]/25 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-full blur-2xl" />
              
              <div className="space-y-1">
                <span className="text-[10px] text-[#a8c69f] uppercase tracking-[0.25em] font-bold block">ESTIMATED INVESTMENT</span>
                <span className="block font-serif text-4xl sm:text-5xl text-white font-bold text-[#d4af37]">
                  {estimate.price}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">(Inclusive of materials, carpentry & design consultation)</span>
              </div>

              <div className="border-t border-[#d4af37]/15 pt-6 text-left space-y-4 text-xs">
                <div>
                  <span className="text-[#a8c69f] font-bold block mb-1">SELECTED LEVEL:</span>
                  <span className="text-white font-medium block">{estimate.label}</span>
                </div>
                <div>
                  <span className="text-[#a8c69f] font-bold block mb-1">KEY MATERIALS INCLUDED:</span>
                  <span className="text-slate-300 font-light block leading-relaxed">{estimate.materials}</span>
                </div>
                <div>
                  <span className="text-[#a8c69f] font-bold block mb-1">ESTIMATED COMPLETION:</span>
                  <span className="text-white font-medium block">{estimate.duration} Working Days</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#071910] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
                >
                  Lock In Estimate & Consultation
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-[#f2f6f0] text-[#071910]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">THE FEEDBACK</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal">Stories of Nature & Luxury</h2>
            <p className="text-gray-600 text-sm font-light">
              See how families in Hyderabad have transformed their mental clarity and comfort levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 border border-emerald-900/10 shadow-lg flex flex-col justify-between space-y-6">
              <p className="italic text-gray-700 text-sm leading-relaxed font-light">
                "Our living room in Narsingi felt dark and rectangular. Namasvi added an organic curved timber partition and a stunning live moss wall. It has completely changed how our family spends evenings. We feel so much closer to nature."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold font-serif text-sm">
                  AR
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-[#071910]">Ananya Reddy</strong>
                  <span className="text-[11px] text-gray-500">3 BHK Owner, Narsingi</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 border border-emerald-900/10 shadow-lg flex flex-col justify-between space-y-6">
              <p className="italic text-gray-700 text-sm leading-relaxed font-light">
                "The lighting design that adjusts to sun patterns is an absolute game-changer. I work from home, and the biophilic home office they built is bright, calming, and keeps me sharp. Worth every rupee."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold font-serif text-sm">
                  VK
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-[#071910]">Vikram Kanth</strong>
                  <span className="text-[11px] text-gray-500">Villa Owner, Kokapet</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 border border-emerald-900/10 shadow-lg flex flex-col justify-between space-y-6">
              <p className="italic text-gray-700 text-sm leading-relaxed font-light">
                "Simply premium! We selected the Forest Estate tier for our penthouse. The modular kitchen is beautifully organic with natural marble worktops and cane wardrobe fittings that smell wonderfully like fresh cedar."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold font-serif text-sm">
                  SN
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-[#071910]">Suresh Naidu</strong>
                  <span className="text-[11px] text-gray-500">4 BHK Penthouse, Puppalaguda</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-[#0a2719]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">COMMON INQUIRIES</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What exactly is 'Biophilic Interior Design'?",
                a: "Biophilic design is the practice of incorporating natural materials, living plants, optimized natural sunlight, and organic colors into built environments. The goal is to support physical health, ease mental fatigue, and establish visual connections to nature indoors."
              },
              {
                q: "How do you maintain the integrated indoor plants?",
                a: "For living plant beds, we install low-maintenance automated drip irrigation and UV growth lighting. We also specialize in premium preserved moss feature walls, which require zero watering, sunlight, or pruning while maintaining their lush green feel for years."
              },
              {
                q: "Do you have a physical studio or carpentry workshop in Narsingi?",
                a: "Yes! We run our exclusive timber joinery workshop close to Narsingi. Clients are welcome to visit by appointment to inspect raw materials, wood samples, and see custom modular kitchens in assembly."
              },
              {
                q: "Is there a material/structural warranty on your cabinetry?",
                a: "We offer a comprehensive 10-year warranty on modular wardrobe shutters, internal plywood structural integrity, and premium drawer runner mechanisms."
              },
              {
                q: "What is your typical project timeline from consultation to handover?",
                a: "Depending on size, a standard 3 BHK takes approximately 50-60 working days to manufacture and install. Villa projects take roughly 70-85 days."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-[#071910] border border-[#d4af37]/20 rounded-3xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left text-white font-medium hover:text-[#d4af37] focus:outline-none transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 ${faqOpen[i] ? 'rotate-180' : ''}`} />
                </button>
                
                {faqOpen[i] && (
                  <div className="px-6 pb-6 text-[#a8c69f] text-xs sm:text-sm font-light border-t border-[#d4af37]/10 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Contact Form Section */}
      <section id="contact" className="py-24 px-4 bg-[#071910] relative">
        
        {/* Floating details overlay */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">GET IN TOUCH</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">Begin Your Biophilic Haven</h2>
                <p className="text-[#a8c69f] text-xs sm:text-sm leading-relaxed font-light">
                  Plan a physical site audit or meet our design team at our Narsingi workspace. Fill out the form or reach out to us directly.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#133c24] border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a8c69f] uppercase tracking-wider block">Call / WhatsApp</span>
                    <span className="text-white text-sm font-semibold">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#133c24] border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a8c69f] uppercase tracking-wider block">Email Inquiries</span>
                    <span className="text-white text-sm font-semibold">design@namasvi.interiors</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#133c24] border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a8c69f] uppercase tracking-wider block">Narsingi Studio</span>
                    <span className="text-white text-xs block leading-relaxed font-medium">
                      Opp. Outer Ring Road Exit 1, Main Road, Narsingi, Hyderabad - 500075
                    </span>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="p-6 bg-[#0d2f1f] rounded-3xl border border-[#d4af37]/15">
                <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-2">STUDIO VISITATION</h4>
                <p className="text-slate-300 text-xs font-light leading-relaxed">
                  Monday to Saturday: 10:30 AM – 7:30 PM <br />
                  Sunday: By prior appointment only
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0a2719] rounded-[2.5rem] border border-[#d4af37]/25 p-8 sm:p-12 shadow-2xl relative">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-950 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-white">Your Request Has Seeded</h3>
                      <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                        Thank you! A lead design coordinator from our Narsingi office will call you within 24 business hours to book your physical site assessment.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-full border border-[#d4af37] text-[#d4af37] text-xs font-bold hover:bg-[#d4af37] hover:text-[#071910] transition-all"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif text-2xl text-white font-normal mb-2">Request On-Site Audit</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-[#a8c69f] uppercase tracking-wider font-bold">Your Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ananya Reddy"
                          className="w-full bg-[#071910] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-[#a8c69f] uppercase tracking-wider font-bold">Contact Number *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 XXXXX"
                          className="w-full bg-[#071910] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-[#a8c69f] uppercase tracking-wider font-bold">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ananya@example.com"
                          className="w-full bg-[#071910] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-[#a8c69f] uppercase tracking-wider font-bold">Primary Space *</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-[#071910] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-all"
                        >
                          <option>Living Room Design</option>
                          <option>Modular Kitchen Design</option>
                          <option>Wardrobes & Storage</option>
                          <option>Full Home Remodeling</option>
                          <option>Circadian Lighting Upgrade</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#a8c69f] uppercase tracking-wider font-bold">Preferred Site Visit Date *</label>
                      <input 
                        type="date" 
                        name="consultDate"
                        required
                        value={formData.consultDate}
                        onChange={handleInputChange}
                        className="w-full bg-[#071910] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#a8c69f] uppercase tracking-wider font-bold">About Your Space (Sq Ft, site condition, style preferences)</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="E.g., 3 BHK apartment in Narsingi, 1800 sq ft, possession next month. Interested in vertical garden wall and custom kitchen cabinets..."
                        className="w-full bg-[#071910] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#071910] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>SENDING APPLICATION...</span>
                        </>
                      ) : (
                        <span>SUBMIT CONSULTATION REQUEST</span>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040f0a] text-slate-400 py-16 px-4 border-t border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Leaf className="w-5 h-5 text-[#d4af37]" />
              <span className="font-serif text-lg font-bold tracking-wide">NAMASVI INTERIORS</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Premium biophilic design firm crafting luxurious, nature-integrated interior spaces that cultivate tranquility, health, and comfort.
            </p>
            <div className="text-xs text-[#d4af37] font-semibold">
              © {new Date().getFullYear()} Namasvi. All Rights Reserved.
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Design Portfolio</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Nature-Fused Living Rooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Organic Modular Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bespoke Wardrobes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Circadian & Bio-Lighting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Contact Info</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>Studio: Narsingi, Hyderabad</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: design@namasvi.interiors</li>
              <li>Site Audits: Narsingi, Puppalaguda, Kokapet, Manikonda</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Our Core Philosophy</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Biophilic spaces are proven to lower cortisol levels, foster calm atmospheres, and enhance physical health through oxygen-rich environments and natural light mapping.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

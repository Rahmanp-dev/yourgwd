"use client";

import React, { useState } from 'react';
import { 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Layers, 
  Eye, 
  Heart, 
  Info,
  Maximize2,
  Minimize2,
  Sliders,
  DollarSign
} from 'lucide-react';

export default function TaraDesignSolutionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({});
  
  // Budget Estimator State
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [woodFinish, setWoodFinish] = useState('Natural Oak');
  const [automation, setAutomation] = useState('Light Mood Control');
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '3 BHK',
    preferredFinish: 'Natural Oak',
    message: '',
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // FAQ Toggle
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Budget Calculator Logic
  const calculateEstimate = () => {
    let basePrice = 450000;
    if (propertyType === '3 BHK') basePrice = 650000;
    else if (propertyType === '4 BHK') basePrice = 900000;
    else if (propertyType === 'Villa') basePrice = 1500000;

    let finishMultiplier = 1.0;
    if (woodFinish === 'Natural Oak') finishMultiplier = 1.2;
    else if (woodFinish === 'Solid Ashwood') finishMultiplier = 1.35;
    else if (woodFinish === 'Premium Teak Veneer') finishMultiplier = 1.5;

    let automationCost = 0;
    if (automation === 'Light Mood Control') automationCost = 45000;
    else if (automation === 'Full Smart Home Integration') automationCost = 125000;

    const totalMin = Math.round(basePrice * finishMultiplier + automationCost);
    const totalMax = Math.round((basePrice * finishMultiplier + automationCost) * 1.12);

    return {
      min: totalMin.toLocaleString('en-IN'),
      max: totalMax.toLocaleString('en-IN')
    };
  };

  const currentEstimate = calculateEstimate();

  const applyConfigToForm = () => {
    setFormData(prev => ({
      ...prev,
      propertyType: propertyType,
      preferredFinish: woodFinish,
      message: `Hi Tara Design Solutions, I configured a ${propertyType} with ${woodFinish} finish and ${automation} automation. Please share a detailed design proposal.`
    }));
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill in your name, email, and phone number.');
      return;
    }
    setFormError('');
    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '3 BHK',
        preferredFinish: 'Natural Oak',
        message: '',
      });
    }, 1500);
  };

  const portfolioData = {
    living: {
      title: "The Silent Sanctuary Living Room",
      concept: "Minimalist lines, low-profile custom seating, and structured plaster finish backdrop.",
      materials: "Textured lime plaster, solid white oak slats, linen drapery, and rough-hewn limestone accent tables.",
      dimensions: "24 ft x 16 ft open plan",
      estimate: "₹2.8L - ₹4.2L",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      features: [
        "Floor-integrated low-height solid oak lounge deck",
        "Textured plaster focus wall with concealed warm lighting coves",
        "Concealed storage behind hand-planed slide panels",
        "Woven tatami corner with single bonsai showcase"
      ]
    },
    dining: {
      title: "The Gathering Hearth Dining Space",
      concept: "Delicate organic details paired with heavy geometric solids. Intimate and calming.",
      materials: "Sustainable bamboo veneers, matte slate tabletop, textured paper lanterns, and structural steel support.",
      dimensions: "18 ft x 12 ft",
      estimate: "₹1.9L - ₹3.1L",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80",
      features: [
        "Bespoke Japanese jointed ash wood dining table",
        "Floating slate-surfaced sideboard with subtle shadow-gap details",
        "Suspended washi-paper double dome light fixture",
        "Built-in bamboo stem screen dividing the dry kitchen area"
      ]
    },
    bedroom: {
      title: "The Floating Rest Bedchamber",
      concept: "A master suite stripped of noise, designed to induce deep recovery and peace.",
      materials: "Treated ash wood, raw unbleached cottons, grass-cloth wallcoverings, and soft dimmable warm back-lights.",
      dimensions: "16 ft x 15 ft",
      estimate: "₹2.4L - ₹3.8L",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      features: [
        "Cantilevered platform bed frame with integrated bedside ledges",
        "Rice-paper panel sliding wardrobe doors (Shoji style)",
        "Dimmable reading accent spots with zero glare index",
        "Integrated soundproofing felt panels behind the bedhead fabric"
      ]
    }
  };

  const philosophies = [
    {
      title: "Shibui (Simplicity in Quiet Details)",
      desc: "Our design is characterized by quiet, understated elegance. We avoid loud statements, focusing instead on structural integrity, clean geometry, and high-texture tactile materials."
    },
    {
      title: "Wabi-Sabi (Beauty in Imperfection)",
      desc: "We celebrate natural materials that age gracefully over time. Hand-worked plasters, natural stone fissures, and raw wood grains give each home a unique, organic identity."
    },
    {
      title: "Hygge (Cozy Warmth & Comfort)",
      desc: "The Scandinavian component of our fusion ensures the space feels warm and lived-in. Soft, tactile textiles, ambient warm lighting, and intimate corners keep the home welcoming."
    },
    {
      title: "Lagom (Perfect Balance)",
      desc: "Neither too little, nor too much. Every storage cabinet, shelf, and light fixture has a precise functional purpose, leaving maximum breathing space to clear the mind."
    }
  ];

  const faqs = [
    {
      q: "What makes Japandi Fusion distinct from general minimalist design?",
      a: "While traditional minimalism can sometimes feel cold or clinical, Japandi Fusion infuses warmth through the Scandinavian 'Hygge' concepts (soft linen, warm woods, cozy seating) and depth through the Japanese 'Wabi-Sabi' (handcrafted ceramics, textured plaster, rustic finishes). It is minimal yet deeply comforting."
    },
    {
      q: "How does the budget estimator translate to real project costs?",
      a: "The interactive estimator provides an accurate benchmark cost range for materials, carpentry, and basic installation based on recent Hyderabad market rates. It covers premium wood veneers, custom structural carpentry, and professional lime-plaster wall applications. Final quotes are provided post site-measurement."
    },
    {
      q: "Where do you source your wood finishes and plaster materials?",
      a: "We source our premium sustainable bamboo and ashwood directly from certified eco-plantings. Our lime plaster is imported premium mineral plaster, hand-troweled by skilled artisans to achieve the perfect textured, non-reflective, stone-like plaster wall finish."
    },
    {
      q: "What is your typical turnaround timeline for an Attapur residence?",
      a: "Our typical timeline ranges between 10 to 14 weeks. This includes 3 weeks of architectural drafting and mockups, 6 weeks of off-site modular fabrication in our dust-controlled workshop, and 3-5 weeks of precision on-site assembly, painting, and smart integration."
    },
    {
      q: "Do you offer post-installation maintenance for plaster and wood surfaces?",
      a: "Yes. All our bespoke woodwork carries a 10-year structural warranty. For the textured lime plaster, we provide a touch-up kit and a complimentary maintenance scan at the end of Year 1 to ensure the surfaces look pristine as they settle."
    }
  ];

  return (
    <div className="selection:bg-[#2F3E46] selection:text-[#F5F2EB] text-[#2F3E46] bg-[#FDFDFD]" style={{
      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
    }}>
      {/* Top Banner for Premium Feeling */}
      <div className="bg-[#2F3E46] text-[#F5F2EB] text-xs uppercase tracking-[0.25em] text-center py-2.5 px-4 font-medium">
        Bespoke Japandi Fusion Studio • Serving Luxury Residences in Attapur, Hyderguda & Gachibowli
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-[#2F3E46]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-[#2F3E46] flex items-center justify-center rounded-sm transition-colors group-hover:bg-[#2F3E46]">
              <Compass className="w-5 h-5 text-[#2F3E46] transition-colors group-hover:text-[#F5F2EB]" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-semibold text-lg tracking-[0.15em] uppercase block">Tara</span>
              <span className="text-[10px] text-[#2F3E46]/60 tracking-[0.25em] uppercase block -mt-1">Design Solutions</span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider uppercase">
            <a href="#about" className="hover:text-[#2F3E46]/70 transition-colors font-medium">Philosophy</a>
            <a href="#portfolio" className="hover:text-[#2F3E46]/70 transition-colors font-medium">Portfolio</a>
            <a href="#estimator" className="hover:text-[#2F3E46]/70 transition-colors font-medium">Budget Planner</a>
            <a href="#faqs" className="hover:text-[#2F3E46]/70 transition-colors font-medium">Insights</a>
            <a href="#contact" className="bg-[#2F3E46] text-[#F5F2EB] px-6 py-2.5 rounded-sm hover:bg-[#2F3E46]/95 transition-colors font-medium">
              Consult Studio
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden p-2 text-[#2F3E46]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#FDFDFD] border-b border-[#2F3E46]/10 py-6 px-6 flex flex-col gap-6 shadow-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-wider uppercase font-medium">Philosophy</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-wider uppercase font-medium">Portfolio</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-wider uppercase font-medium">Budget Planner</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-wider uppercase font-medium">Insights</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#2F3E46] text-[#F5F2EB] px-6 py-3 rounded-sm text-center text-sm tracking-wider uppercase font-medium">
              Consult Studio
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-4 block">
              Japandi Fusion Architecture
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] mb-6">
              Create a refuge of <br />
              <span className="font-semibold text-[#2F3E46]">silent elegance</span> and organic warmth.
            </h1>
            <p className="text-lg text-[#2F3E46]/80 font-light leading-relaxed mb-8 max-w-lg">
              We design residences in Attapur that elevate daily living. Our approach fuses Japanese minimalist spatial restraint with warm Scandinavian materials, yielding spaces built for focus, recovery, and quiet joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#estimator" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2F3E46] text-[#F5F2EB] hover:bg-[#2F3E46]/95 transition-all text-sm uppercase tracking-wider font-semibold rounded-sm shadow-sm group">
                Estimate Your Space
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3.5 border border-[#2F3E46]/30 text-[#2F3E46] hover:bg-[#F5F2EB]/40 transition-all text-sm uppercase tracking-wider font-semibold rounded-sm">
                View Portfolios
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[#2F3E46]/10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <span className="block text-2xl font-light">120+</span>
                <span className="block text-xs uppercase tracking-wider text-[#2F3E46]/60 mt-1">Homes Curated</span>
              </div>
              <div>
                <span className="block text-2xl font-light">100%</span>
                <span className="block text-xs uppercase tracking-wider text-[#2F3E46]/60 mt-1">Bespoke Layouts</span>
              </div>
              <div>
                <span className="block text-2xl font-light">10 Yr</span>
                <span className="block text-xs uppercase tracking-wider text-[#2F3E46]/60 mt-1">Timber Warranty</span>
              </div>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden border border-[#2F3E46]/10 rounded-sm shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80" 
                alt="Japandi Living Area by Tara Design Solutions" 
                className="w-full h-[450px] md:h-[550px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-[#FDFDFD]/90 backdrop-blur-md py-4 px-6 border border-[#2F3E46]/10 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#2F3E46]/60 font-medium">Featured Residence</p>
                <p className="text-sm font-semibold tracking-wider text-[#2F3E46] mt-0.5">Janapriya Utopia, Attapur</p>
              </div>
            </div>
            
            {/* Background decorative shapes */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#F5F2EB] rounded-sm -z-10 border border-[#2F3E46]/5"></div>
            <div className="absolute top-10 -left-6 w-24 h-24 border border-[#2F3E46]/10 rounded-sm -z-10"></div>
          </div>
        </div>
      </section>

      {/* Japandi Design Philosophy */}
      <section id="about" className="py-20 md:py-28 bg-[#F5F2EB]/30 border-y border-[#2F3E46]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-3 block">
              Our Foundations
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              The Japandi Philosophy
            </h2>
            <p className="text-[#2F3E46]/70 font-light leading-relaxed">
              We do not chase trends. Instead, we work with the core principles of East Asian aesthetic restraint and Northern European functional comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((ph, idx) => (
              <div key={idx} className="bg-[#FDFDFD] p-8 border border-[#2F3E46]/10 rounded-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-sm bg-[#F5F2EB] flex items-center justify-center text-xs font-semibold mb-6 border border-[#2F3E46]/10">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold tracking-wide mb-3">{ph.title}</h3>
                  <p className="text-sm text-[#2F3E46]/80 font-light leading-relaxed">{ph.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2F3E46]/5 flex justify-end">
                  <span className="text-[10px] uppercase tracking-widest text-[#2F3E46]/40">Core Tenet</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Tabs Section */}
      <section id="portfolio" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-3 block">
                Bespoke Showcases
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                Explore Crafted Rooms
              </h2>
            </div>

            {/* Tabs Selector */}
            <div className="flex bg-[#F5F2EB]/50 p-1 border border-[#2F3E46]/10 rounded-sm mt-6 md:mt-0 max-w-sm self-start md:self-auto">
              {Object.keys(portfolioData).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActivePortfolioTab(tabKey)}
                  className={`flex-1 px-6 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all ${
                    activePortfolioTab === tabKey
                      ? 'bg-[#2F3E46] text-[#F5F2EB]'
                      : 'text-[#2F3E46]/70 hover:text-[#2F3E46]'
                  }`}
                >
                  {tabKey}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch transition-opacity duration-300">
            {/* Left Description */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 border border-[#2F3E46]/10 rounded-sm bg-[#F5F2EB]/10">
              <div>
                <span className="text-xs uppercase tracking-wider bg-[#F5F2EB] px-3 py-1 rounded-sm border border-[#2F3E46]/10 font-semibold">
                  {activePortfolioTab} Showcase
                </span>
                <h3 className="text-2xl font-light tracking-tight mt-6 mb-4">
                  {portfolioData[activePortfolioTab].title}
                </h3>
                <p className="text-sm text-[#2F3E46]/80 font-light leading-relaxed mb-6">
                  {portfolioData[activePortfolioTab].concept}
                </p>

                <div className="space-y-4 border-t border-[#2F3E46]/10 pt-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2F3E46]/50 block">Primary Materials</span>
                    <span className="text-sm font-medium">{portfolioData[activePortfolioTab].materials}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2F3E46]/50 block">Reference Size</span>
                    <span className="text-sm font-medium">{portfolioData[activePortfolioTab].dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2F3E46]/50 block">Design Value Benchmark</span>
                    <span className="text-sm font-semibold">{portfolioData[activePortfolioTab].estimate}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2F3E46]/10">
                <a href="#estimator" className="text-xs uppercase tracking-widest text-[#2F3E46] hover:text-[#2F3E46]/70 font-semibold flex items-center gap-2">
                  Configure In Budget Planner <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Middle Image */}
            <div className="lg:col-span-4 relative overflow-hidden border border-[#2F3E46]/10 rounded-sm">
              <img 
                src={portfolioData[activePortfolioTab].image} 
                alt={portfolioData[activePortfolioTab].title} 
                className="w-full h-full min-h-[350px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Right Features Checklist */}
            <div className="lg:col-span-3 border border-[#2F3E46]/10 rounded-sm p-8 bg-[#FDFDFD] flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#2F3E46]/60 border-b border-[#2F3E46]/10 pb-4 mb-6">
                  Key Specifications
                </h4>
                <ul className="space-y-5">
                  {portfolioData[activePortfolioTab].features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full border border-[#2F3E46]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-[#2F3E46]" />
                      </div>
                      <span className="text-[#2F3E46]/85 font-light leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F2EB]/50 p-4 border border-[#2F3E46]/10 rounded-sm mt-8">
                <p className="text-[11px] leading-relaxed text-[#2F3E46]/70 font-light">
                  <Info className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5 text-[#2F3E46]/70" />
                  Every element is customizable in dimension, wood color tone, and texture roughness to align with your personal light preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Estimator Section */}
      <section id="estimator" className="py-20 md:py-28 bg-[#F5F2EB]/40 border-y border-[#2F3E46]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-3 block">
              Transparency First
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Japandi Budget Estimator
            </h2>
            <p className="text-[#2F3E46]/70 font-light leading-relaxed">
              Design is a process of balancing aesthetics with resources. Configure your space parameters below to calculate a reliable cost range for premium execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Control Panel */}
            <div className="lg:col-span-7 bg-[#FDFDFD] p-8 border border-[#2F3E46]/10 rounded-sm shadow-sm space-y-8">
              
              {/* Parameter 1: Property Layout */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#2F3E46]/60 mb-4">
                  1. Residence Layout
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['2 BHK', '3 BHK', '4 BHK', 'Villa'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-3 text-xs tracking-wider uppercase font-semibold border rounded-sm transition-all ${
                        propertyType === type
                          ? 'border-[#2F3E46] bg-[#2F3E46]/5 text-[#2F3E46] font-bold'
                          : 'border-[#2F3E46]/15 hover:border-[#2F3E46]/40 text-[#2F3E46]/70'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Wood Finish & Carpenter Grade */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#2F3E46]/60 mb-4">
                  2. Sustainable Wood Finish & Carpentry Grade
                </label>
                <div className="space-y-3">
                  {[
                    { name: 'Bamboo Veneer', desc: 'Sustainable, ultra-light color tones, minimal grain patterning' },
                    { name: 'Natural Oak', desc: 'Scandinavian standard, warm wheat hues, robust texture feel (Recommended)' },
                    { name: 'Solid Ashwood', desc: 'Highly structural, wavy organic grains, ideal for low-profile platform systems' },
                    { name: 'Premium Teak Veneer', desc: 'Rich golden-brown tones, classic oil finish, premium hand-polished face' }
                  ].map((wood) => (
                    <button
                      key={wood.name}
                      type="button"
                      onClick={() => setWoodFinish(wood.name)}
                      className={`w-full text-left p-4 border rounded-sm flex items-start justify-between transition-all ${
                        woodFinish === wood.name
                          ? 'border-[#2F3E46] bg-[#2F3E46]/5'
                          : 'border-[#2F3E46]/15 hover:border-[#2F3E46]/40'
                      }`}
                    >
                      <div>
                        <span className={`block text-xs uppercase tracking-wider font-semibold ${woodFinish === wood.name ? 'text-[#2F3E46]' : 'text-[#2F3E46]/80'}`}>
                          {wood.name}
                        </span>
                        <span className="block text-[11px] text-[#2F3E46]/60 font-light mt-1">
                          {wood.desc}
                        </span>
                      </div>
                      {woodFinish === wood.name && (
                        <div className="w-4 h-4 rounded-full bg-[#2F3E46] flex items-center justify-center mt-1">
                          <Check className="w-2.5 h-2.5 text-[#F5F2EB]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Lighting & Space Automation */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#2F3E46]/60 mb-4">
                  3. Lighting & Space Automation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Ambient Control', label: 'None', desc: 'Standard physical toggle switches' },
                    { name: 'Light Mood Control', label: 'Smart Lighting', desc: 'Zigbee dimmers & circadian mood cycles' },
                    { name: 'Full Smart Home Integration', label: 'Total Integration', desc: 'Touch panels, blinds, climate & lighting sync' }
                  ].map((auto) => (
                    <button
                      key={auto.name}
                      type="button"
                      onClick={() => setAutomation(auto.name)}
                      className={`p-4 border rounded-sm text-left flex flex-col justify-between h-32 transition-all ${
                        automation === auto.name
                          ? 'border-[#2F3E46] bg-[#2F3E46]/5'
                          : 'border-[#2F3E46]/15 hover:border-[#2F3E46]/40'
                      }`}
                    >
                      <div>
                        <span className={`block text-xs uppercase tracking-wider font-semibold ${automation === auto.name ? 'text-[#2F3E46]' : 'text-[#2F3E46]/80'}`}>
                          {auto.label}
                        </span>
                        <span className="block text-[10px] text-[#2F3E46]/60 font-light mt-1 leading-snug">
                          {auto.desc}
                        </span>
                      </div>
                      {automation === auto.name && (
                        <div className="w-4 h-4 rounded-full bg-[#2F3E46] flex items-center justify-center self-end">
                          <Check className="w-2.5 h-2.5 text-[#F5F2EB]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimate Result Panel */}
            <div className="lg:col-span-5 bg-[#2F3E46] text-[#F5F2EB] p-8 border border-[#2F3E46]/15 rounded-sm flex flex-col justify-between h-full min-h-[500px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5F2EB]/60 font-semibold mb-2 block">
                  Interactive Calculation
                </span>
                <h3 className="text-2xl font-light tracking-tight border-b border-[#FDFDFD]/10 pb-6 mb-8 text-[#FDFDFD]">
                  Estimated Design Proposal
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#F5F2EB]/50 block">Selected Layout</span>
                    <span className="text-lg font-light tracking-wider uppercase text-[#FDFDFD]">{propertyType} Residence</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#F5F2EB]/50 block">Carpentry & Finish</span>
                    <span className="text-lg font-light tracking-wider text-[#FDFDFD]">{woodFinish}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#F5F2EB]/50 block">Automation Level</span>
                    <span className="text-lg font-light tracking-wider text-[#FDFDFD]">{automation}</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#FDFDFD]/10 text-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#F5F2EB]/50 block mb-2">Estimated Investment Range</span>
                  <span className="text-4xl md:text-5xl font-light text-[#FDFDFD] tracking-tight">
                    ₹{currentEstimate.min} - ₹{currentEstimate.max}
                  </span>
                  <span className="block text-[11px] text-[#F5F2EB]/40 font-light mt-3 leading-relaxed">
                    *Includes architectural mockups, material sourcing, on-site assembly, custom micro-plaster painting, and modular assembly warranties.
                  </span>
                </div>
              </div>

              <div className="mt-12 pt-6">
                <button
                  type="button"
                  onClick={applyConfigToForm}
                  className="w-full py-4 bg-[#FDFDFD] text-[#2F3E46] font-semibold text-xs uppercase tracking-widest hover:bg-[#F5F2EB] transition-colors rounded-sm shadow-sm flex items-center justify-center gap-2"
                >
                  Apply Configuration to Form <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-3 block">
              Verified Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Stories of Restored Balance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Tara completely transformed our duplex in Attapur. The quietness of the space is indescribable. By clearing the visual clutter and using premium mineral plaster walls, they turned our home into a serene gallery. Every corner feels intentional.",
                author: "Ananya Reddy",
                sub: "Duplex Owner, Attapur",
                date: "March 2026"
              },
              {
                quote: "The budget transparency was a breath of fresh air. They kept to the exact estimates generated by their budget planner. The craftsmanship on the natural white oak panels and shoji wardrobe sliders is absolute perfection. Five stars.",
                author: "Vikram Malhotra",
                sub: "3 BHK Residence, Hyderguda",
                date: "January 2026"
              },
              {
                quote: "We wanted a home that would help us disconnect from our high-stress tech jobs. Tara's Japandi philosophy achieved exactly that. The combination of warm lighting coves, organic cotton curtains, and raw ashwood frames creates a soothing cocoon.",
                author: "Dr. Sandeep & Priya",
                sub: "4 BHK Apartment, Rajendranagar",
                date: "November 2025"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#F5F2EB]/20 p-8 border border-[#2F3E46]/10 rounded-sm flex flex-col justify-between h-full">
                <p className="text-sm font-light leading-relaxed italic text-[#2F3E46]/85 mb-8">
                  "{t.quote}"
                </p>
                <div>
                  <div className="border-t border-[#2F3E46]/10 pt-4">
                    <span className="font-semibold text-sm block">{t.author}</span>
                    <span className="text-[11px] text-[#2F3E46]/60 block mt-0.5">{t.sub} • {t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faqs" className="py-20 md:py-28 bg-[#F5F2EB]/30 border-t border-[#2F3E46]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-3 block">
              Common Inquiries
            </span>
            <h2 className="text-3xl font-light tracking-tight">
              Design Studio Insights
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#2F3E46]/10 rounded-sm bg-[#FDFDFD]">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-sm md:text-base pr-4 text-[#2F3E46]">{faq.q}</span>
                  {faqOpen[idx] ? (
                    <ChevronUp className="w-4 h-4 text-[#2F3E46] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#2F3E46] flex-shrink-0" />
                  )}
                </button>
                {faqOpen[idx] && (
                  <div className="px-6 pb-6 text-sm text-[#2F3E46]/80 font-light leading-relaxed border-t border-[#2F3E46]/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-28 border-t border-[#2F3E46]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#2F3E46]/70 font-semibold mb-3 block">
                Connect With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Begin Your Path to Silence
              </h2>
              <p className="text-sm text-[#2F3E46]/70 font-light leading-relaxed max-w-sm">
                We work with a selective roster of clients each quarter to guarantee undivided attention to detailing and sourcing. Reserve your initial blueprint session today.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#2F3E46]/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#2F3E46]/70 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#2F3E46]/50 block">Design Studio</span>
                  <span className="text-sm font-medium">Pillar No 143, Inner Ring Road, Attapur, Hyderabad - 500048</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#2F3E46]/70 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#2F3E46]/50 block">Call Inquiries</span>
                  <span className="text-sm font-medium">+91 76750 99724</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#2F3E46]/70 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#2F3E46]/50 block">Direct Email</span>
                  <span className="text-sm font-medium">info@taradesignsolutions.com</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F2EB] p-6 border border-[#2F3E46]/10 rounded-sm">
              <span className="text-[10px] uppercase tracking-widest font-semibold block text-[#2F3E46]/70 mb-2">Workspace Visits</span>
              <p className="text-xs font-light text-[#2F3E46]/80 leading-relaxed">
                Our materials showroom is open by appointment only from Tuesday to Sunday, 11:00 AM to 7:00 PM. Experience physical lime-plaster panels, bamboo veneers, and low-voltage lighting systems in-person.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#FDFDFD] p-8 border border-[#2F3E46]/10 rounded-sm shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#2F3E46] text-[#F5F2EB] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium">Consultation Request Received</h3>
                <p className="text-sm text-[#2F3E46]/70 font-light max-w-md mx-auto">
                  Thank you for sharing details of your space. An architectural consultant from our Attapur studio will reach out to you within 24 hours to schedule your preliminary floorplan triage.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#2F3E46] text-[#F5F2EB] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2F3E46]/95 transition-colors"
                >
                  Submit Another Configuration
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide border-b border-[#2F3E46]/10 pb-4">
                  Schedule Blueprint Session
                </h3>

                {formError && (
                  <p className="text-xs text-red-600 font-medium bg-red-50 p-3 rounded-sm border border-red-200">
                    {formError}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F3E46]/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#2F3E46]/20 rounded-sm text-sm focus:outline-none focus:border-[#2F3E46] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F3E46]/60 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 76750 99724"
                      className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#2F3E46]/20 rounded-sm text-sm focus:outline-none focus:border-[#2F3E46] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F3E46]/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. info@taradesignsolutions.com"
                    className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#2F3E46]/20 rounded-sm text-sm focus:outline-none focus:border-[#2F3E46] transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F3E46]/60 mb-2">
                      Property Layout
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#2F3E46]/20 rounded-sm text-sm focus:outline-none focus:border-[#2F3E46] transition-colors"
                    >
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Apartment</option>
                      <option value="4 BHK">4 BHK Apartment</option>
                      <option value="Villa">Independent Villa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F3E46]/60 mb-2">
                      Preferred Finish
                    </label>
                    <select
                      value={formData.preferredFinish}
                      onChange={(e) => setFormData({ ...formData, preferredFinish: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#2F3E46]/20 rounded-sm text-sm focus:outline-none focus:border-[#2F3E46] transition-colors"
                    >
                      <option value="Bamboo Veneer">Bamboo Veneer</option>
                      <option value="Natural Oak">Natural Oak</option>
                      <option value="Solid Ashwood">Solid Ashwood</option>
                      <option value="Premium Teak Veneer">Premium Teak Veneer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F3E46]/60 mb-2">
                    Message or Space Configuration Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your design objectives or paste your budget planner settings..."
                    className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#2F3E46]/20 rounded-sm text-sm focus:outline-none focus:border-[#2F3E46] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#2F3E46] text-[#F5F2EB] hover:bg-[#2F3E46]/95 transition-all text-xs uppercase tracking-widest font-semibold rounded-sm shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formLoading}
                  >
                    {formLoading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-[#F5F2EB] border-t-transparent"></span>
                        Contacting Studio...
                      </>
                    ) : (
                      <>
                        Request Studio Blueprint Consultation
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F3E46] text-[#F5F2EB] pt-16 pb-12 border-t border-[#F5F2EB]/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#F5F2EB] flex items-center justify-center rounded-sm">
                <Compass className="w-5 h-5 text-[#FDFDFD]" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-semibold text-lg tracking-[0.15em] uppercase block text-[#FDFDFD]">Tara</span>
                <span className="text-[10px] text-[#F5F2EB]/60 tracking-[0.25em] uppercase block -mt-1">Design Solutions</span>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed text-[#F5F2EB]/70 max-w-sm">
              We create silent spaces and organic architecture. By removing noise, we give residences room to breathe, live, and gracefully age.
            </p>
            <p className="text-[10px] text-[#F5F2EB]/40 tracking-wider">
              © {new Date().getFullYear()} Tara Design Solutions Private Limited. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#FDFDFD]">Studio Navigation</h4>
            <ul className="space-y-2.5 text-sm font-light text-[#F5F2EB]/70">
              <li><a href="#hero" className="hover:text-[#FDFDFD] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FDFDFD] transition-colors">Philosophy</a></li>
              <li><a href="#portfolio" className="hover:text-[#FDFDFD] transition-colors">Portfolio</a></li>
              <li><a href="#estimator" className="hover:text-[#FDFDFD] transition-colors">Budget Estimator</a></li>
              <li><a href="#faqs" className="hover:text-[#FDFDFD] transition-colors">Insights FAQ</a></li>
            </ul>
          </div>

          {/* Locations & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#FDFDFD]">Hyderabad Showcase Location</h4>
            <p className="text-sm font-light leading-relaxed text-[#F5F2EB]/70">
              Pillar No 143, Inner Ring Road,<br />
              Attapur, Hyderabad, Telangana - 500048
            </p>
            <p className="text-xs text-[#F5F2EB]/60 font-light">
              T: +91 76750 99724<br />
              E: info@taradesignsolutions.com
            </p>
            
            <div className="pt-4 flex gap-4 text-xs font-light text-[#F5F2EB]/50">
              <span className="border-r border-[#F5F2EB]/20 pr-4">Instagram</span>
              <span className="border-r border-[#F5F2EB]/20 pr-4">LinkedIn</span>
              <span>Pinterest</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

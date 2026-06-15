"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Eye, 
  Layers, 
  Settings, 
  ShieldCheck, 
  Loader2,
  Lock,
  Zap,
  Gem,
  Award
} from 'lucide-react';

export default function BonitoDesignsHyderabadPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState('penthouse');
  const [faqOpen, setFaqOpen] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false
  });

  // Premium Configurer States
  const [selectedMaterial, setSelectedMaterial] = useState('Obsidian Marble');
  const [selectedLighting, setSelectedLighting] = useState('Ambient Cove LED');
  const [selectedLayout, setSelectedLayout] = useState('Bespoke Walk-in Closet');

  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    materialChoice: 'Obsidian Marble',
    lightingChoice: 'Ambient Cove LED',
    layoutChoice: 'Bespoke Walk-in Closet'
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Toggle FAQ Accordion
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Cost Calculator Logic
  const calculateCost = () => {
    let basePrice = 1200000; // Base package for luxury rooms

    // Material multipliers
    let materialCost = 0;
    if (selectedMaterial === 'Obsidian Marble') materialCost += 350000;
    else if (selectedMaterial === 'Matte Titanium') materialCost += 280000;
    else if (selectedMaterial === 'Smoked Glass') materialCost += 180000;
    else if (selectedMaterial === 'Brushed Gold Trim') materialCost += 220000;

    // Lighting costs
    let lightingCost = 0;
    if (selectedLighting === 'Spotlight Arrays') lightingCost += 120000;
    else if (selectedLighting === 'Grand Chandelier Accent') lightingCost += 280000;
    else if (selectedLighting === 'Ambient Cove LED') lightingCost += 95000;
    else if (selectedLighting === 'Backlit Onyx Panels') lightingCost += 320000;

    // Layout costs
    let layoutCost = 0;
    if (selectedLayout === 'Bespoke Walk-in Closet') layoutCost += 450000;
    else if (selectedLayout === 'Gourmet Kitchen Island') layoutCost += 600000;
    else if (selectedLayout === 'Floating Lounge Panel') layoutCost += 380000;
    else if (selectedLayout === 'Spa Washroom') layoutCost += 550000;

    const minEstimate = basePrice + materialCost + lightingCost + layoutCost;
    const maxEstimate = Math.round((basePrice + materialCost + lightingCost + layoutCost) * 1.15);

    // Luxury Index Score
    let luxuryIndex = 75;
    if (selectedMaterial === 'Obsidian Marble' || selectedMaterial === 'Matte Titanium') luxuryIndex += 10;
    if (selectedLighting === 'Grand Chandelier Accent' || selectedLighting === 'Backlit Onyx Panels') luxuryIndex += 10;
    if (selectedLayout === 'Gourmet Kitchen Island' || selectedLayout === 'Spa Washroom') luxuryIndex += 5;

    return {
      min: minEstimate.toLocaleString('en-IN'),
      max: maxEstimate.toLocaleString('en-IN'),
      luxuryIndex
    };
  };

  const currentCost = calculateCost();

  // Apply Config to Form
  const applyConfigToForm = () => {
    setFormData(prev => ({
      ...prev,
      materialChoice: selectedMaterial,
      lightingChoice: selectedLighting,
      layoutChoice: selectedLayout,
      message: `Hi Bonito Designs, I configured a premium luxury space. Selected Specifications: Material: [${selectedMaterial}], Lighting: [${selectedLighting}], Layout: [${selectedLayout}]. Please share custom architectural blueprints and budget details.`
    }));

    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }

    setFormLoading(true);

    // Simulate API call
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        materialChoice: 'Obsidian Marble',
        lightingChoice: 'Ambient Cove LED',
        layoutChoice: 'Bespoke Walk-in Closet'
      });
    }, 1800);
  };

  // Luxury Portfolios
  const portfolioTabs = {
    penthouse: {
      title: 'Obsidian Penthouse Lounges',
      subtitle: 'Seamless Italian marbles meeting bespoke gold detailing',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      description: 'An immersive dark-mode lounge designed for panoramic residential high-rises. Features include bookmatched Nero Marquina marble slab wall facings, recessed warm spotlight strips that outline the structural geometry, brushed titanium profiles, and floating leather daybeds.',
      details: ['Bookmatched Italian Nero Marquina Marble', 'Polished obsidian panel walls (#0B0C10)', 'Integrated 24k gold leaf accent lines', 'Automated architectural cove tracks']
    },
    dining: {
      title: 'Midas Dining Rooms',
      subtitle: 'Smoked oak tables beneath gold-halo light frames',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'A theatrical space focused on high-contrast luxury dining. Immersive dark charcoal walls frame a custom solid smoked oak dining table with polished gold pedestal bases. Dual ambient ceiling ring lights throw warm focus pools down onto the seating layout.',
      details: ['Custom Smoked Oak table slabs', 'Brushed titanium gold accent frames', 'Translucent amber glass cupboards', 'Dual-ring halo chandeliers']
    },
    lounge: {
      title: 'Chronos Media Lounges',
      subtitle: 'Acoustic suede panelling and concealed lighting grids',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      description: 'The ultimate entertainment environment designed with dark acoustic paneling. Soft spotlights wash down micro-suede walls, while motorized sliding smoked glass screens reveal integrated professional audio racks and custom bar bays.',
      details: ['Soundproof charcoal suede paneling', 'Smart home automation systems', 'Concealed fiber-optic starlight ceiling', 'Under-counter gold leaf bar trim']
    },
    closet: {
      title: 'Aurelia Walk-in Closets',
      subtitle: 'Smart illuminated showcases for premium wardrobes',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      description: 'A boutique-style wardrobe room featuring dust-free smoked glass doors and warm LED cabinet backlights. Every drawer is lined in premium microsuede and finished with titanium gold pull tabs, establishing unmatched tactile luxury.',
      details: ['Warm LED illuminated hanging bars', 'Premium smoked glass cabinet fronts', 'Micro-suede lined jewelry bays', 'Titanium gold edge profiles']
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#EAEAEA] font-sans antialiased selection:bg-[#C5A059]/20 selection:text-[#C5A059]">
      
      {/* Spotlight Ambient Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-1/4 w-[600px] h-[600px] bg-[#C5A059]/3 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0B0C10]/90 backdrop-blur-md border-b border-[#C5A059]/15 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1F2833] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <Gem className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-widest text-[#EAEAEA]">BONITO</span>
              <span className="text-[9px] block text-[#C5A059] font-bold tracking-widest uppercase -mt-1">Designs • Hyderabad</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <a href="#about" className="hover:text-[#C5A059] transition-colors">The Brand</a>
            <a href="#portfolio" className="hover:text-[#C5A059] transition-colors">Portfolios</a>
            <a href="#configurer" className="hover:text-[#C5A059] transition-colors">Configurer</a>
            <a href="#testimonials" className="hover:text-[#C5A059] transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">FAQ</a>
            <a 
              href="#contact" 
              className="bg-[#C5A059] text-zinc-950 px-6 py-2.5 rounded-sm hover:bg-[#B38D46] transition-all duration-300 font-bold shadow-lg shadow-[#C5A059]/10 hover:shadow-[#C5A059]/20 flex items-center gap-2"
            >
              Book Premium Tour <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-[#EAEAEA] hover:bg-[#1F2833] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0C10] border-b border-[#C5A059]/25 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#1F2833] transition-colors font-medium tracking-wide"
            >
              The Brand
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#1F2833] transition-colors font-medium tracking-wide"
            >
              Portfolios
            </a>
            <a 
              href="#configurer" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#1F2833] transition-colors font-medium tracking-wide"
            >
              Configurer
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#1F2833] transition-colors font-medium tracking-wide"
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#1F2833] transition-colors font-medium tracking-wide"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#C5A059] text-zinc-950 py-3 rounded-sm hover:bg-[#B38D46] transition-colors font-bold shadow-md"
            >
              Book Premium Tour
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Luxury Dark Obsidian Accent */}
      <section id="about" className="relative overflow-hidden pt-16 pb-28 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Bespoke Dark Mode Interior Design
              </div>
              
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white font-extrabold tracking-tight leading-tight">
                  High-End <span className="text-[#C5A059] italic block sm:inline">Obsidian</span> Interiors for Attapur
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                  Bonito Designs crafts luxury residential spaces centered around obsidian marble walls, titanium gold detailing, and warm, theatrical spotlighting configurations. Made for individuals who demand bold, premium aesthetics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#configurer" 
                  className="bg-[#C5A059] text-zinc-950 text-center px-8 py-4 rounded-sm hover:bg-[#B38D46] transition-all font-bold tracking-wider uppercase text-sm shadow-xl shadow-[#C5A059]/10 hover:shadow-[#C5A059]/30 flex items-center justify-center gap-2"
                >
                  Configure Luxury Space
                </a>
                <a 
                  href="#portfolio" 
                  className="border border-[#C5A059]/40 text-[#C5A059] text-center px-8 py-4 rounded-sm hover:bg-[#C5A059]/5 transition-all font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2"
                >
                  View Design Grids
                </a>
              </div>

              {/* Trust markers */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-800">
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-[#C5A059]">350+</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Premium Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-[#C5A059]">ISO</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Certified Factory</div>
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-[#C5A059]">100%</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Bespoke Customization</div>
                </div>
              </div>
            </div>

            {/* Right Graphic/Image Column - High-End Spotlight Photo */}
            <div className="md:col-span-5 flex justify-center relative">
              {/* Radial Spotlight glow effect behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-[80px] -z-10"></div>
              
              <div className="relative border border-[#C5A059]/35 p-2 bg-zinc-950 shadow-2xl">
                <div className="overflow-hidden bg-zinc-900 aspect-[4/5] w-full min-w-[280px] max-w-[360px] relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=100" 
                    alt="Luxury obsidian dark living room design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Spotlight focus visual ring */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="text-[9px] font-bold text-[#C5A059] uppercase tracking-widest block mb-1">Signature Living</span>
                    <h4 className="font-serif text-lg text-white font-bold">Nero Marquina Suite</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Luxury Designs Grid Section (Tabs) */}
      <section id="portfolio" className="py-24 bg-[#0F1015] border-y border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Luxury <span className="text-[#C5A059]">Interior Designs</span> Portfolio
            </h2>
            <p className="text-base text-zinc-400">
              Browse signature interior packages customized for residences in Attapur and neighboring upscale enclaves in Hyderabad.
            </p>

            {/* Portfolio Tab Selectors */}
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              {Object.keys(portfolioTabs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePortfolioTab(key)}
                  className={`px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#C5A059] ${
                    activePortfolioTab === key 
                      ? 'bg-[#C5A059] text-zinc-950 border-[#C5A059] shadow-md shadow-[#C5A059]/10' 
                      : 'bg-[#0B0C10] text-[#EAEAEA] border-[#C5A059]/20 hover:border-[#C5A059]/50'
                  }`}
                >
                  {portfolioTabs[key].title.split(' ')[0]} {portfolioTabs[key].title.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content Display */}
          <div className="bg-zinc-950 rounded-lg p-6 sm:p-10 lg:p-12 border border-[#C5A059]/15 shadow-2xl transition-all duration-500 relative">
            <div className="absolute top-0 left-10 w-28 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent"></div>
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Tab Image display */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden border border-[#C5A059]/20 aspect-[4/3] bg-zinc-900 shadow-xl relative">
                  <img 
                    src={portfolioTabs[activePortfolioTab].image} 
                    alt={portfolioTabs[activePortfolioTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-zinc-950/80 border border-[#C5A059]/30 text-[#C5A059] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm">
                    <Award className="w-3.5 h-3.5" /> Handcrafted Selection
                  </div>
                </div>
              </div>

              {/* Tab Details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest block">{portfolioTabs[activePortfolioTab].subtitle}</span>
                <h3 className="font-serif text-3xl font-extrabold text-white">
                  {portfolioTabs[activePortfolioTab].title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {portfolioTabs[activePortfolioTab].description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059]/70">Premium Material Specs:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {portfolioTabs[activePortfolioTab].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-medium text-zinc-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="#configurer"
                    className="text-[#C5A059] font-bold text-xs uppercase tracking-wider hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 duration-300"
                  >
                    Configure materials in real-time <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Premium Configurer (Materials, Lighting, Layout) */}
      <section id="configurer" className="py-24 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <Settings className="w-3.5 h-3.5" /> Interactive Specification Console
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Configure Your Premium Space
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Interact with our material configurations, light maps, and luxury layout patterns. Instantly observe changes in the Luxury Index and cost calculations designed for Hyderabad's high-end properties.
              </p>

              <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-lg space-y-3">
                <h5 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" /> High-End Quality Attestation
                </h5>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  All components use marine-grade waterproof blockboards, customized titanium-alloy hinges, and custom PU anti-fingerprint lacquers that retain high gloss and velvet matte properties permanently.
                </p>
              </div>
            </div>

            {/* Right side interactive console */}
            <div className="lg:col-span-7 bg-zinc-950 border border-[#C5A059]/20 rounded-lg p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 right-10 w-24 h-px bg-[#C5A059]/30"></div>
              
              <div className="space-y-6">
                
                {/* 1. Materials Selection */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block">1. Core Material Finish</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Obsidian Marble', 'Matte Titanium', 'Smoked Glass', 'Brushed Gold Trim'].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`p-3 rounded text-center text-xs font-bold transition-all focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          selectedMaterial === mat
                            ? 'bg-[#C5A059] text-zinc-950'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Lighting Setup */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block">2. Bespoke Lighting Layout</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Spotlight Arrays', 'Grand Chandelier Accent', 'Ambient Cove LED', 'Backlit Onyx Panels'].map((light) => (
                      <button
                        key={light}
                        onClick={() => setSelectedLighting(light)}
                        className={`p-3 rounded text-center text-xs font-bold transition-all focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          selectedLighting === light
                            ? 'bg-[#C5A059] text-zinc-950'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                        }`}
                      >
                        {light.replace(' Accent', '').replace(' Panels', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Structural Layout */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block">3. Premium Layout Additions</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Bespoke Walk-in Closet', 'Gourmet Kitchen Island', 'Floating Lounge Panel', 'Spa Washroom'].map((lay) => (
                      <button
                        key={lay}
                        onClick={() => setSelectedLayout(lay)}
                        className={`p-3 rounded text-center text-xs font-bold transition-all focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          selectedLayout === lay
                            ? 'bg-[#C5A059] text-zinc-950'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                        }`}
                      >
                        {lay.replace(' Bespoke', '').replace(' Gourmet', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Output Console */}
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded mt-4 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Luxury Index Score</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xl font-bold font-serif text-white">{currentCost.luxuryIndex}%</span>
                        <div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className="bg-[#C5A059] h-full transition-all duration-500" 
                            style={{ width: `${currentCost.luxuryIndex}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Estimated Pricing (INR)</span>
                      <div className="text-xl sm:text-2xl font-bold text-[#C5A059] mt-0.5">
                        ₹{currentCost.min} - ₹{currentCost.max}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <p className="text-[10px] text-zinc-500">Estimates are calibrated to premium Attapur showroom rates.</p>
                    <button
                      onClick={applyConfigToForm}
                      className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#B38D46] text-zinc-950 px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                    >
                      Lock Config & Consult <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-24 bg-[#0F1015] border-y border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Bespoke <span className="text-[#C5A059]">Client Chronicles</span>
            </h2>
            <p className="text-base text-zinc-400">
              Read how Hyderabad's premium homeowners experience our dark-mode interior engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {[
              {
                name: 'Vikram & Shwetha Sen',
                location: 'Royal Palms Villa, Attapur',
                quote: 'Standard white interiors felt monotonous. Bonito created an absolute masterpiece with their Obsidian Penthouse look. The nero marquina slab wall is a visual anchor and the concealed gold LEDs make our evenings feel incredibly luxurious.',
                rating: 5,
                tag: 'Luxury Villa'
              },
              {
                name: 'Rahul K. Chowdary',
                location: 'Hyderguda Highrises, Hyderabad',
                quote: 'I wanted a high-tech media room that doubled as a luxury lounge. Bonito Designs executed the acoustic suede profiling and backlit panels flawlessly. The final finish matches the 3D renders with millimeter accuracy.',
                rating: 5,
                tag: '4 BHK Penthouse'
              },
              {
                name: 'Nisha & Sameer Patel',
                location: 'PBEL City, Peerancheru',
                quote: 'The premium materials configurator was very helpful in deciding finishes. We combined brushed gold trims and smoked glass wardrobes for our walk-in closet. The quality of their soft-close titanium hinges is outstanding.',
                rating: 5,
                tag: '3 BHK Premium'
              }
            ].map((story, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-950 border border-zinc-800 hover:border-[#C5A059]/30 transition-all rounded p-8 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif font-bold text-white text-sm">{story.name}</h5>
                    <p className="text-[10px] text-zinc-500 font-medium">{story.location}</p>
                  </div>
                  <span className="text-[9px] font-bold bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] px-2.5 py-1 uppercase tracking-widest">
                    {story.tag}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Bespoke Design <span className="text-[#C5A059]">Inquiries</span>
            </h2>
            <p className="text-sm text-zinc-400">
              Technical facts regarding our materials, dark-themed aesthetics, and site deliveries.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Why does Bonito specialize in luxury dark-themed interior architecture?',
                a: 'Dark-themed spaces, when engineered correctly with titanium golds and obsidian black surfaces, create an atmosphere of safety, privacy, and high-end sophistication. By focusing on theatrical lighting (glows and spotlights) rather than flat floodlights, we create spaces with visual depth that elevate normal residential spaces.'
              },
              {
                q: 'Where can we review material samples in Attapur?',
                a: 'Our flagship Hyderabad design gallery is located on the Attapur Ring Road, close to Pillar 138. You can inspect physical samples of Nero Marquina marble, Smoked Glass sheets, Matte Titanium panels, and view our customized LED spotlight installations.'
              },
              {
                q: 'How does your material configurer price calculations work?',
                a: 'The calculations are tied to real-time custom fabrication rates in Hyderabad. Material upgrades like solid bookmatched marble or backlit onyx panels have custom fabrication charges factored in. Final quotes are locked following a laser layout site measurement by our engineering team.'
              },
              {
                q: 'What is the durability expectation of dark-colored modular surfaces?',
                a: 'Our dark panels use anti-fingerprint PU lacquers with nano-coatings that prevent grease accumulation, micro-scratches, and fading. All wood structures are made of marine-grade plywood with anti-pest treatments carrying a 10-year warranty.'
              },
              {
                q: 'Do you offer custom acoustic profiling for private lounge/theater rooms?',
                a: 'Yes. We design and install soundproof structural wall panels using density-rated acoustic wool, covered in premium micro-suede or leatherette fabrics. We coordinate with home theater audio engineers to ensure correct sound absorption coefficients.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-950 border border-zinc-800 rounded overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-1 focus:ring-[#C5A059] font-bold text-sm sm:text-base text-white hover:text-[#C5A059]"
                >
                  <span>{item.q}</span>
                  {faqOpen[idx] ? (
                    <ChevronUp className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                  )}
                </button>
                
                {faqOpen[idx] && (
                  <div className="p-5 pt-0 border-t border-zinc-800 text-xs sm:text-sm text-zinc-400 leading-relaxed bg-[#0F1015]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-[#0F1015] border-t border-[#C5A059]/15">
        <div id="contact-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Col */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold border border-[#C5A059]/30 text-[#C5A059] px-3.5 py-1.5 rounded-sm uppercase tracking-widest">Private Showcase</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Initiate Private Design Commission
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Schedule a private walk-through at our Attapur showroom gallery. Our senior architects will draft custom layout concepts based on your residence blueprints.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F2833] border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-zinc-500 uppercase tracking-widest">Direct Commission Line</h5>
                    <p className="text-sm font-bold text-white">+91 91000 87654</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F2833] border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-zinc-500 uppercase tracking-widest">Architectural Registry</h5>
                    <p className="text-sm font-bold text-white">commission@bonitohyderabad.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F2833] border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-zinc-500 uppercase tracking-widest">Showroom Gallery</h5>
                    <p className="text-xs font-bold text-white">Pillar No. 138, Ring Road, Attapur, Hyderabad - 500048</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Col */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-10 w-28 h-px bg-[#C5A059]/30"></div>
              
              {formSuccess ? (
                <div className="text-center py-12 space-y-4 animate-scale-up">
                  <div className="w-16 h-16 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Commission Initiated</h3>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Your luxury configuration has been registered in our database. A senior architectural director from the Attapur Gallery will contact you to coordinate a private showroom tour and layout consultation.
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="bg-[#C5A059] text-zinc-950 px-6 py-2.5 rounded-sm font-bold hover:bg-[#B38D46] transition-colors text-xs uppercase tracking-wider"
                  >
                    Adjust Configuration Specs
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white border-b border-zinc-900 pb-4">
                    Architectural Commission Request
                  </h3>

                  {formError && (
                    <div className="p-4 bg-red-950/40 border-l-2 border-red-500 text-red-400 text-xs sm:text-sm font-medium rounded-r">
                      {formError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Vikram Sen"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white placeholder-zinc-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 91000 87654"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white placeholder-zinc-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. vikram.sen@outlook.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white placeholder-zinc-500 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="materialChoice" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Material</label>
                      <select 
                        id="materialChoice"
                        value={formData.materialChoice}
                        onChange={(e) => setFormData({...formData, materialChoice: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white transition-all"
                      >
                        <option value="Obsidian Marble">Obsidian Marble</option>
                        <option value="Matte Titanium">Matte Titanium</option>
                        <option value="Smoked Glass">Smoked Glass</option>
                        <option value="Brushed Gold Trim">Brushed Gold Trim</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lightingChoice" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Lighting</label>
                      <select 
                        id="lightingChoice"
                        value={formData.lightingChoice}
                        onChange={(e) => setFormData({...formData, lightingChoice: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white transition-all"
                      >
                        <option value="Spotlight Arrays">Spotlight Arrays</option>
                        <option value="Grand Chandelier Accent">Chandelier Accent</option>
                        <option value="Ambient Cove LED">Ambient Cove LED</option>
                        <option value="Backlit Onyx Panels">Backlit Onyx</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="layoutChoice" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Layout</label>
                      <select 
                        id="layoutChoice"
                        value={formData.layoutChoice}
                        onChange={(e) => setFormData({...formData, layoutChoice: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white transition-all"
                      >
                        <option value="Bespoke Walk-in Closet">Walk-in Closet</option>
                        <option value="Gourmet Kitchen Island">Kitchen Island</option>
                        <option value="Floating Lounge Panel">Lounge Panel</option>
                        <option value="Spa Washroom">Spa Washroom</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Custom Requirements / Blueprint notes</label>
                    <textarea 
                      id="message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="e.g. Special space dimensions, home theater integration, specific project location in Attapur."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none text-white placeholder-zinc-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#C5A059] hover:bg-[#B38D46] disabled:bg-[#C5A059]/60 text-zinc-950 py-4 rounded font-bold transition-all text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {formLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Commission...
                      </>
                    ) : (
                      <>
                        Request Design Commission & Consultation
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-center text-zinc-500">
                    By submitting, you agree to receive professional callback schedules from Bonito Designs Gallery.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-zinc-950 text-zinc-500 py-16 border-t border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1F2833] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Gem className="w-4 h-4" />
                </div>
                <span className="font-serif text-lg font-bold tracking-widest text-white">BONITO</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Bonito Designs creates customized dark-mode interior environments. Engineered in our automated production facility to match architectural models perfectly.
              </p>
              <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">
                © 2026 Bonito Designs. All rights reserved.
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-[#C5A059]">Signature Collections</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Obsidian Penthouse Lounges</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Midas Dining Rooms</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Chronos Media Lounges</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Aurelia Walk-in Closets</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-[#C5A059]">Luxury Standards</h5>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A059]" /> Nero Marquina Marble</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A059]" /> Custom Titanium Profile trims</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A059]" /> PU Fingerprint-Resistant Lacquer</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A059]" /> Concealed LED Track Lights</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-[#C5A059]">Design Gallery</h5>
              <p className="text-xs leading-normal">
                <strong>Attapur Gallery:</strong> Near Pillar 138, Ring Road, Attapur, Hyderabad.
              </p>
              <p className="text-xs leading-normal">
                <strong>Jubilee Hills Gallery:</strong> Road No. 36, Opp. Metro Station, Jubilee Hills, Hyderabad.
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

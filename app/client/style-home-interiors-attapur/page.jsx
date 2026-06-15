"use client";

import React, { useState, useEffect } from 'react';
import {
  Sun,
  Wind,
  Compass,
  Layers,
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
  Settings,
  RefreshCw,
  AlertTriangle,
  Send,
  Sparkles
} from 'lucide-react';

export default function StyleHomeInteriorsPage() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('living');
  
  // Collapsible FAQ state
  const [faqOpen, setFaqOpen] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
  });

  // Configurator / Build Estimator state
  const [propertyType, setPropertyType] = useState('3_BHK'); // 2_BHK, 3_BHK, VILLA
  const [woodFinish, setWoodFinish] = useState('WHITEPEND'); // WHITEPEND (Whitewashed Driftwood), SANDYASH (Sandy Ash Wood), LIGHTOAK (Natural Light Oak)
  const [upholstery, setUpholstery] = useState('FLAX_LINEN'); // FLAX_LINEN (Natural Flax Linen), COTTON_CANV (Cotton Canvas), SOFT_VELVET (Soft Velvet)
  const [accents, setAccents] = useState({
    juteRope: true,
    seaGlass: false,
    wovenCane: true,
  });

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    selectedLayout: '3_BHK',
    selectedWood: 'WHITEPEND',
    customNotes: ''
  });
  
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [logLines, setLogLines] = useState([]);

  // Mock server status updates
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle FAQ
  const toggleFaq = (key) => {
    setFaqOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Toggle accents
  const toggleAccent = (key) => {
    setAccents(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate project specs dynamically
  const calculateSpecs = () => {
    let basePrice = 720000; // 3 BHK
    let layoutLabel = "3 BHK Apartment";
    if (propertyType === '2_BHK') {
      basePrice = 520000;
      layoutLabel = "2 BHK Apartment";
    } else if (propertyType === 'VILLA') {
      basePrice = 1450000;
      layoutLabel = "Premium Coastal Villa";
    }

    let woodMultiplier = 1.0;
    let woodLabel = "Whitewashed Driftwood Finish";
    if (woodFinish === 'SANDYASH') {
      woodMultiplier = 1.1;
      woodLabel = "Sandy Ash Hardwood";
    } else if (woodFinish === 'LIGHTOAK') {
      woodMultiplier = 1.25;
      woodLabel = "Bespoke Natural White Oak";
    }

    let upholsteryCost = 0;
    let upholsteryLabel = "Pure Flax Linen";
    if (upholstery === 'COTTON_CANV') {
      upholsteryCost = 30000;
      upholsteryLabel = "Heavy-Duty Cotton Canvas";
    } else if (upholstery === 'SOFT_VELVET') {
      upholsteryCost = 85000;
      upholsteryLabel = "Luxurious Coastal Soft Velvet";
    }

    let accentCost = 0;
    let accentCount = 0;
    if (accents.juteRope) { accentCost += 25000; accentCount++; }
    if (accents.seaGlass) { accentCost += 35000; accentCount++; }
    if (accents.wovenCane) { accentCost += 55000; accentCount++; }

    const estMin = Math.round((basePrice * woodMultiplier) + upholsteryCost + accentCost);
    const estMax = Math.round(((basePrice * woodMultiplier) + upholsteryCost + accentCost) * 1.12);

    // Harmony Rating (out of 10)
    let harmonyScore = 8.8;
    if (woodFinish === 'WHITEPEND') harmonyScore += 0.4;
    if (upholstery === 'FLAX_LINEN') harmonyScore += 0.5;
    if (accents.wovenCane) harmonyScore += 0.3;
    if (harmonyScore > 10) harmonyScore = 10;

    // Timeline weeks
    let timelineWeeks = 6;
    if (harmonyScore > 9) timelineWeeks = 8;
    if (propertyType === 'VILLA') timelineWeeks = 12;

    return {
      min: estMin.toLocaleString('en-IN'),
      max: estMax.toLocaleString('en-IN'),
      harmony: harmonyScore.toFixed(1),
      timeline: timelineWeeks,
      layoutLabel,
      woodLabel,
      upholsteryLabel
    };
  };

  const currentSpecs = calculateSpecs();

  // Send config payload to form
  const applyConfigToForm = () => {
    const activeAccents = Object.keys(accents)
      .filter(k => accents[k])
      .map(k => k.toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      selectedLayout: propertyType,
      selectedWood: woodFinish,
      message: `I configured: ${propertyType} layout with ${woodFinish} finishes, ${upholstery} fabrics, and accents: [${activeAccents || 'None'}]. Please schedule a coastal theme material review at my Attapur site.`
    }));

    const formElement = document.getElementById('estimator-intake-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Form Submit with simulated design consultation log
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please enter your Name, Email, and Phone number to proceed.');
      return;
    }
    setFormError('');
    setFormLoading(true);
    setLogLines([]);

    const logSequence = [
      "Scheduling design consultation...",
      "Analyzing natural lighting directions for Attapur...",
      "Allocating driftwood and linen material samples...",
      "Connecting with Coastal Chic Lead Designer...",
      "Project registered successfully. Dispatching design brief!"
    ];

    logSequence.forEach((line, index) => {
      setTimeout(() => {
        setLogLines(prev => [...prev, line]);
        if (index === logSequence.length - 1) {
          setFormLoading(false);
          setFormSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            selectedLayout: '3_BHK',
            selectedWood: 'WHITEPEND',
            customNotes: ''
          });
        }
      }, (index + 1) * 400);
    });
  };

  // Services layout dataset
  const servicesData = {
    living: {
      name: "SUNLIT LIVING SANCTUARIES",
      tagline: "Airy, open spaces celebrating daylight and gentle breezes.",
      description: "Our signature living rooms feature custom whitewashed driftwood paneling, low-profile seating wrapped in pure flax linen, and dynamic sheer curtain tracks designed to filter the bright Hyderabad sun into a gentle, relaxing glow.",
      harmony: "9.8 / 10",
      timeframe: "6 Weeks",
      materials: [
        { item: "Whitewashed Driftwood Planks", texture: "Rough-sawn, light mineral wash", source: "Coastal Reclaimed Woods", application: "Feature accent walls" },
        { item: "Pure Flax Linen Upholstery", texture: "Coarse weave, breathable oatmeal tone", source: "Natural Textiles India", application: "Custom deep sofas" },
        { item: "Sea-Glass Pendant Lamps", texture: "Frosted translucent turquoise", source: "Bespoke Glass Works", application: "Ambient dining lighting" },
        { item: "Woven Jute Rugs", texture: "Heavy double-braided organic fiber", source: "Kerala Weaving Co-op", application: "Main floor covering" }
      ],
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      name: "BREEZEWAY COOKING LABS",
      tagline: "Lightweight cabinets & functional open shelving.",
      description: "Reject the heavy, dark cabinets of standard modular kitchens. We design cooking areas with light sand beige paneling, open floating shelves in whitewashed ash, and beautiful sea-glass drawer pulls that evoke the ocean shoreline.",
      harmony: "9.5 / 10",
      timeframe: "7 Weeks",
      materials: [
        { item: "Whitewashed Ash Cabinets", texture: "Flat panel, soft grain reveal", source: "Premium Joinery Labs", application: "Overhead cabinetry" },
        { item: "Sandy Quartz Worktops", texture: "Fine grain matte cream quartz", source: "Rajasthan Stone Yards", application: "Cooking island & counters" },
        { item: "Sea-Glass Cabinet Knobs", texture: "Frosted ocean teal, solid brass post", source: "Artisanal Hardware", application: "Drawer pulls" },
        { item: "Cane Webbing Panel Inserts", texture: "Natural woven breathable mesh", source: "Handicrafts India", application: "Pantry doors" }
      ],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    bedroom: {
      name: "DRIFTWOOD SLEEP CHAMBERS",
      tagline: "Serene, low-contrast rooms for deep seaside relaxation.",
      description: "Designed with a warm sand and crisp white palette. Featuring custom headboards crafted from weathered timber boards, woven cane closet doors, and integrated dimmable warm LED strips that outline soft architectural niches.",
      harmony: "9.6 / 10",
      timeframe: "5 Weeks",
      materials: [
        { item: "Weathered Cedar Headboard", texture: "Driftwood grey, natural oil finish", source: "Reclaimed Lumber Yards", application: "Platform bed wall" },
        { item: "Woven Cane Closet Doors", texture: "Octagonal cane weave, light pine frame", source: "Local Cane Weavers", application: "Wardrobe doors" },
        { item: "Flax Linen Hanging Drapes", texture: "Lightweight off-white sheer linen", source: "Linen House India", application: "Floor-to-ceiling windows" },
        { item: "Warm Terracotta Accent Pots", texture: "Matte porous clay, soft sand finish", source: "Local Pottery Yards", application: "Plants & decor" }
      ],
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
    },
    balcony: {
      name: "AL-FRESCO BREEZEWAY DECKS",
      tagline: "Relaxed outdoor niches to capture the sunset breeze.",
      description: "Optimized for high-rise balconies in Attapur. We utilize weather-resistant composite teak decking, suspended jute swings, custom structural planter grids, and warm overhead festoon lights to replicate a beachfront porch.",
      harmony: "9.9 / 10",
      timeframe: "3 Weeks",
      materials: [
        { item: "Composite Teak Decking", texture: "Embossed wood grain, weather-proof", source: "EcoDeck Solutions", application: "Balcony flooring" },
        { item: "Suspended Jute Macrame Swing", texture: "Hand-knotted triple strand rope", source: "Artisans of Bengal", application: "Lounge seating" },
        { item: "Wall-Mounted Trellis Grids", texture: "Whitewashed cedar lattice", source: "Style Woodworks", application: "Vertical creepers & ivy" },
        { item: "Brushed Brass Sconces", texture: "Anti-tarnish matte finish, warm glow", source: "Craft Lighting Co.", application: "Wall illumination" }
      ],
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-zinc-800 min-h-screen font-sans selection:bg-[#008080] selection:text-white">
      
      {/* Top Banner Ticker */}
      <div className="bg-[#008080] text-white text-[11px] font-medium py-2 px-4 flex justify-between items-center tracking-wider border-b border-[#008080]/20 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Sun size={12} className="animate-spin text-[#F4A460]" />
            LIGHT-FILLED INSPIRATION
          </span>
          <span>|</span>
          <span>ATTAPUR COOPERATIVE BLUEPRINTS</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LOCAL TIME: {currentTime || "LOADING..."}</span>
          <span>|</span>
          <span className="text-[#F4A460] font-bold">STUDIO ACTIVE</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="border-b border-zinc-200/50 bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#008080] text-white p-2.5 rounded-full flex items-center justify-center shadow-md">
              <Compass size={22} className="text-[#FAF9F6] animate-pulse" />
            </div>
            <div>
              <span className="font-serif font-extrabold tracking-tight text-xl text-zinc-900 block">STYLE HOME</span>
              <span className="text-[9px] text-[#008080] font-bold tracking-widest block -mt-1 uppercase">INTERIORS ATTAPUR</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-650">
            <a href="#hero" className="hover:text-[#008080] transition-colors">HOME</a>
            <a href="#portfolio" className="hover:text-[#008080] transition-colors">SHOWCASE</a>
            <a href="#configurator" className="hover:text-[#008080] transition-colors">ESTIMATOR</a>
            <a href="#reviews" className="hover:text-[#008080] transition-colors">REVIEWS</a>
            <a href="#faq" className="hover:text-[#008080] transition-colors">FAQ</a>
            <a href="#contact" className="bg-[#008080] text-[#FAF9F6] px-5 py-2.5 rounded-full hover:bg-[#006666] hover:shadow-lg transition-all flex items-center gap-2 font-bold text-xs">
              <Sparkles size={14} className="text-[#F4A460]" />
              <span>CONSULT EXPERT</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-650 hover:text-zinc-900 p-2"
            aria-label="Toggle Mobile Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-150 bg-white py-4 px-6 flex flex-col gap-4 text-xs tracking-wider font-semibold shadow-inner">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 hover:text-[#008080] transition-colors">HOME</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 hover:text-[#008080] transition-colors">LIVING SHOWCASE</a>
            <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 hover:text-[#008080] transition-colors">BUILD ESTIMATOR</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 hover:text-[#008080] transition-colors">REVIEWS</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 hover:text-[#008080] transition-colors">FAQ</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-2 bg-[#008080] text-white text-center py-3 font-bold rounded-full flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles size={14} className="text-[#F4A460]" />
              <span>CONSULT EXPERT</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#edf4f4] py-16 overflow-hidden border-b border-zinc-200/40">
        
        {/* Decorative soft glowing spots */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#008080]/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F4A460]/10 rounded-full filter blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#008080]/10 border border-[#008080]/30 text-[#008080] px-3.5 py-1 text-xs rounded-full font-bold uppercase tracking-wider">
              <Wind size={14} className="text-[#F4A460]" />
              <span>AIRY & LIGHT-FILLED CREATIONS</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-zinc-900 leading-tight">
              Bring the <br />
              <span className="text-[#008080] italic">Ocean Breeze</span> <br />
              Into Your Home.
            </h1>

            <p className="text-base text-zinc-650 max-w-xl leading-relaxed">
              Premium coastal interior design for villas and premium apartments in Attapur, Hyderabad. We specialize in merging whitewashed wood textures, sandy beige palettes, and airy layout frameworks that make any space feel open and light-filled.
            </p>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-zinc-200/80">
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase block">DESIGN STYLE</span>
                <span className="text-zinc-900 text-sm font-semibold">Coastal Chic</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase block">MATERIAL BASE</span>
                <span className="text-zinc-900 text-sm font-semibold">Driftwood & Linen</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase block">TIMELINE</span>
                <span className="text-zinc-900 text-sm font-semibold">6 - 8 Weeks</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#configurator" className="bg-[#008080] hover:bg-[#006666] text-white px-7 py-3.5 rounded-full font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md transition-all">
                <span>ESTIMATE YOUR BUILD</span>
                <ArrowRight size={14} />
              </a>
              <a href="#portfolio" className="border border-[#008080]/30 hover:border-[#008080]/60 text-[#008080] px-7 py-3.5 rounded-full font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all">
                <span>EXPLORE SHOWCASE</span>
              </a>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="md:col-span-6 relative">
            <div className="relative p-2 bg-white rounded-3xl shadow-xl border border-zinc-100">
              <div className="rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" 
                  alt="Coastal Chic light-filled living room" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#008080]/5 mix-blend-overlay"></div>
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-md border border-zinc-150/50 max-w-[220px]">
                  <span className="text-[9px] text-[#008080] font-black uppercase tracking-wider block">ATTAPUR SHOWROOM MODEL</span>
                  <span className="text-xs text-zinc-900 font-semibold mt-0.5 block leading-tight">Light Ash Oak & Natural Jute fibers</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Portfolio - Showcase */}
      <section id="portfolio" className="py-20 bg-white border-b border-zinc-200/30">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#008080] block mb-2 tracking-widest uppercase">// LIGHT-FILLED LIVING SHOWCASE</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-zinc-900">AIRY LIVING SPACES</h2>
            </div>
            <p className="text-zinc-500 text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
              Explore our light-filled design solutions. Click the tabs below to view curated driftwood material lists, finishes, and implementation details.
            </p>
          </div>

          {/* Elegant Round Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-start">
            {[
              { key: 'living', name: 'Living Sanctuary' },
              { key: 'kitchen', name: 'Breeze Kitchens' },
              { key: 'bedroom', name: 'Sunlit Bedrooms' },
              { key: 'balcony', name: 'Al-Fresco Decks' }
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-3 px-6 rounded-full font-semibold transition-all text-xs tracking-wider border ${
                    isActive 
                      ? 'bg-[#008080] border-[#008080] text-white shadow-md' 
                      : 'bg-[#FAF9F6] border-zinc-200 text-zinc-600 hover:border-zinc-400'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#FAF9F6] rounded-3xl border border-zinc-200/50 p-6 md:p-10 shadow-sm relative">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: text */}
              <div className="md:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[#008080] text-xs font-bold shadow-sm border border-zinc-150">
                  <Layers size={14} className="text-[#F4A460]" />
                  <span>MATERIAL COMPOSITION</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-zinc-900">
                  {servicesData[activeTab].name}
                </h3>
                <p className="text-sm text-[#008080] font-semibold">
                  {servicesData[activeTab].tagline}
                </p>
                <p className="text-xs md:text-sm text-zinc-650 leading-relaxed">
                  {servicesData[activeTab].description}
                </p>

                {/* Performance stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200/80">
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-bold">HARMONY SCORE</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-zinc-900 text-base font-extrabold">{servicesData[activeTab].harmony}</span>
                      <span className="text-[10px] text-[#008080] font-bold">OPTIMAL</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-bold">ESTIMATED ERECT_TIME</span>
                    <span className="text-zinc-900 text-base font-extrabold mt-0.5 block">{servicesData[activeTab].timeframe}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a href="#configurator" className="inline-flex items-center gap-2 text-xs font-bold text-[#008080] hover:underline">
                    <span>BUILD A SIMILAR LOOK WITH OUR ESTIMATOR</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: table & image */}
              <div className="md:col-span-6 space-y-6">
                
                <div className="rounded-2xl overflow-hidden shadow-md h-56 w-full border border-zinc-150">
                  <img 
                    src={servicesData[activeTab].image} 
                    alt={servicesData[activeTab].name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Driftwood Table */}
                <div className="space-y-2">
                  <div className="text-[11px] text-[#008080] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sun size={14} className="text-[#F4A460]" />
                    <span>DRIFTWOOD & ORGANIC COMPONENT REGISTRY</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="bg-zinc-55 border-b border-zinc-200 text-zinc-500 font-semibold">
                          <th className="py-2.5 px-3 uppercase text-[10px]">MATERIAL</th>
                          <th className="py-2.5 px-3 uppercase text-[10px]">TEXTURE_PROFILE</th>
                          <th className="py-2.5 px-3 uppercase text-[10px]">SOURCE_ORIGIN</th>
                          <th className="py-2.5 px-3 uppercase text-[10px]">APPLICATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {servicesData[activeTab].materials.map((mat, i) => (
                          <tr key={i} className="border-b border-zinc-150 hover:bg-[#FAF9F6] transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-zinc-900">{mat.item}</td>
                            <td className="py-2.5 px-3 text-zinc-600 text-[11px]">{mat.texture}</td>
                            <td className="py-2.5 px-3 text-zinc-650 text-[11px]">{mat.source}</td>
                            <td className="py-2.5 px-3 text-[#008080] text-[11px] font-semibold">{mat.application}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Estimator Section */}
      <section id="configurator" className="py-20 bg-[#edf4f4] border-b border-zinc-200/30 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#008080] tracking-widest block uppercase">// MATERIALS & BUILD ESTIMATOR</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-zinc-900">CURATE YOUR COASTAL SPACE</h2>
            <p className="text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">
              Customize your layout sizes, natural wood finishes, and soft drapery options. See estimated costs and spatial harmony indexes calculated in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Options Selection */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 space-y-8 flex flex-col justify-between border border-zinc-150 shadow-sm">
              
              <div className="space-y-6">
                
                {/* 1. Layout size */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-500 font-bold block uppercase tracking-wider">
                    01 / Select Property Layout Scale
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: '2_BHK', label: '2 BHK Space', desc: 'Compact coastal sanctuary.' },
                      { value: '3_BHK', label: '3 BHK Sanctuary', desc: 'Light-filled luxury.' },
                      { value: 'VILLA', label: 'Premium Villa', desc: 'Generous spatial breeze.' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setPropertyType(item.value)}
                        className={`p-3 text-left border rounded-xl transition-all flex flex-col justify-between ${
                          propertyType === item.value 
                            ? 'border-[#008080] bg-[#008080]/5 text-[#008080] shadow-sm' 
                            : 'border-zinc-200 bg-white text-zinc-650 hover:border-zinc-350'
                        }`}
                      >
                        <span className="text-xs font-extrabold block">{item.label}</span>
                        <span className="text-[10px] text-zinc-500 block mt-1 leading-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Driftwood / Hardwood finish */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-500 font-bold block uppercase tracking-wider">
                    02 / Curate Wood & Driftwood Finishes
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'WHITEPEND', label: 'Whitewashed Driftwood', desc: 'Opaque matte light gray wash.' },
                      { value: 'SANDYASH', label: 'Sandy Ash Hardwood', desc: 'Warm sand beige timber tint.' },
                      { value: 'LIGHTOAK', label: 'Natural White Oak', desc: 'Elegant, premium raw hardwood.' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setWoodFinish(item.value)}
                        className={`p-3 text-left border rounded-xl transition-all flex flex-col justify-between ${
                          woodFinish === item.value 
                            ? 'border-[#008080] bg-[#008080]/5 text-[#008080] shadow-sm' 
                            : 'border-zinc-200 bg-white text-zinc-650 hover:border-zinc-350'
                        }`}
                      >
                        <span className="text-xs font-extrabold block">{item.label}</span>
                        <span className="text-[10px] text-zinc-500 block mt-1 leading-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Upholstery fabrics */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-500 font-bold block uppercase tracking-wider">
                    03 / Premium Coastal Upholstery Selection
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'FLAX_LINEN', label: 'Natural Flax Linen', desc: 'Highly breathable, textured weave.' },
                      { value: 'COTTON_CANV', label: 'Heavy Cotton Canvas', desc: 'Extremely durable sandy color.' },
                      { value: 'SOFT_VELVET', label: 'Luxurious Coastal Velvet', desc: 'Plush velvet, ocean-fog blue.' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setUpholstery(item.value)}
                        className={`p-3 text-left border rounded-xl transition-all flex flex-col justify-between ${
                          upholstery === item.value 
                            ? 'border-[#008080] bg-[#008080]/5 text-[#008080] shadow-sm' 
                            : 'border-zinc-200 bg-white text-zinc-650 hover:border-zinc-350'
                        }`}
                      >
                        <span className="text-xs font-extrabold block">{item.label}</span>
                        <span className="text-[10px] text-zinc-500 block mt-1 leading-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Accents */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-500 font-bold block uppercase tracking-wider">
                    04 / Activate Accent Additions
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { key: 'juteRope', label: 'Jute Rope Paneling', cost: '+₹25k' },
                      { key: 'seaGlass', label: 'Sea-glass Pulls', cost: '+₹35k' },
                      { key: 'wovenCane', label: 'Woven Cane Inserts', cost: '+₹55k' }
                    ].map((item) => {
                      const isActive = accents[item.key];
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => toggleAccent(item.key)}
                          className={`p-3 text-left border rounded-xl transition-all flex items-center justify-between gap-4 ${
                            isActive 
                              ? 'border-[#008080] bg-[#008080]/5 text-[#008080] shadow-sm' 
                              : 'border-zinc-200 bg-white text-zinc-650 hover:border-zinc-350'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold block">{item.label}</span>
                            <span className="text-[10px] text-[#008080] block mt-0.5">{item.cost}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isActive ? 'border-[#008080] bg-[#008080] text-white' : 'border-zinc-400 bg-zinc-100'
                          }`}>
                            {isActive && <Check size={10} strokeWidth={4} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Lock Configuration and Apply */}
              <div className="pt-6 border-t border-zinc-150">
                <button
                  onClick={applyConfigToForm}
                  className="w-full bg-[#008080] hover:bg-[#006666] text-white py-4 rounded-full font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Settings size={14} className="animate-spin text-[#F4A460]" />
                  <span>APPLY & INITIALIZE ESTIMATE INTAKE</span>
                </button>
              </div>

            </div>

            {/* Calculations display */}
            <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              {/* Soft visual stripe on top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008080] to-[#F4A460]"></div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-zinc-150 pb-3">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">PROJECT ESTIMATION METRICS</span>
                  <span className="text-xs text-[#008080] font-bold">EST_V1.3</span>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <span className="text-[10px] text-zinc-550 block font-bold uppercase">Estimated Project Cost</span>
                  <div className="text-3xl font-serif font-black text-zinc-900">
                    ₹ {currentSpecs.min} - ₹ {currentSpecs.max}
                  </div>
                  <span className="text-[10px] text-zinc-500 block leading-tight">
                    *Exclusive of taxes. Under normal site conditions in Attapur. Includes custom driftwood fabrication.
                  </span>
                </div>

                {/* Spatial Harmony Rating */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] text-zinc-550 block font-bold uppercase">
                    <span>COASTAL HARMONY RATING</span>
                    <span className="text-zinc-900 font-extrabold">{currentSpecs.harmony} / 10.0</span>
                  </div>
                  
                  {/* Harmony Rating Bar */}
                  <div className="h-3 bg-zinc-100 border border-zinc-200 p-0.5 rounded-full overflow-hidden flex">
                    {Array.from({ length: 20 }).map((_, idx) => {
                      const fillPercent = (idx / 20) * 10;
                      const isFilled = parseFloat(currentSpecs.harmony) >= fillPercent;
                      return (
                        <div 
                          key={idx}
                          className={`h-full flex-1 mx-[1px] ${
                            isFilled 
                              ? 'bg-[#008080]' 
                              : 'bg-zinc-200'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-400 font-semibold">
                    <span>SEASIDE SIMPLICITY</span>
                    <span>BALANCED COZY</span>
                    <span>COASTAL EXQUISITE</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-550 block font-bold uppercase">PROJECT TIMELINE</span>
                  <div className="text-xl font-bold text-zinc-900">
                    {currentSpecs.timeline} CALENDAR WEEKS
                  </div>
                  <span className="text-[10px] text-zinc-500 block">
                    Driven by pre-curated driftwood supplies in our local Ring Road warehouse.
                  </span>
                </div>

                {/* Integrity Metrics */}
                <div className="border-t border-zinc-150 pt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-zinc-650">
                    <Check size={14} className="text-green-600" />
                    <span>LIGHT AND VENTILATION RATIO: EXCELLENT</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-650">
                    <Check size={14} className="text-green-600" />
                    <span>DRIFTWOOD MATURITY CHECK: PASSED</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-650">
                    <Check size={14} className="text-green-600" />
                    <span>TAILWIND STYLING: FULLY INTEGRATED</span>
                  </div>
                </div>

              </div>

              {/* Log mock box */}
              <div className="mt-8 bg-[#FAF9F6] p-4 rounded-xl border border-zinc-150 text-[10px] text-zinc-500 space-y-1">
                <p className="font-bold text-zinc-700">CURRENT SPECIFICATION CODES:</p>
                <p>● LAYOUT: {currentSpecs.layoutLabel}</p>
                <p>● WOOD FINISH: {currentSpecs.woodLabel}</p>
                <p>● FABRICS: {currentSpecs.upholsteryLabel}</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-white border-b border-zinc-200/30">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold text-[#008080] block mb-2 tracking-widest uppercase">// CLIENT EXPERIENCES</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-zinc-900">CUSTOMER REVIEWS</h2>
            </div>
            <p className="text-zinc-500 text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
              Read how home owners in Attapur recreated their living apartments with our lightweight coastal themes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                client: "Srinivas Prasad",
                role: "Villa Owner",
                location: "Hyderguda Residential Colony, Attapur",
                text: "The sheer daylight design elements they created are phenomenal. Previously, our living room felt dark and cramped. They stripped the heavy walnut panels and replaced them with whitewashed driftwood boards and beige linen sofas. It feels twice as large and incredibly airy.",
                rating: 5,
                tag: "Airy Living Room Build"
              },
              {
                client: "Priya Menon",
                role: "Apartment Resident",
                location: "PVNR Expressway View Block, Attapur",
                text: "We wanted a clean breezeway kitchen that was functional but light. The whitewashed ash cabinets with open floating shelves are a delight to look at, and the custom sea-glass pulls add a touch of turquoise that everyone praises.",
                rating: 5,
                tag: "Breezeway Kitchen Build"
              },
              {
                client: "Rajesh & Anitha",
                role: "Duplex Owners",
                location: "Tejaswi Nagar Phase 2, Attapur",
                text: "They built a lovely deck on our high-rise balcony. The combination of composite teak deck flooring, hanging jute swing, and Vertical Trellis transformed it into our favorite sunset-watching spot. Completed within the promised time frame.",
                rating: 5,
                tag: "Al-Fresco Deck Build"
              }
            ].map((review, i) => (
              <div key={i} className="bg-[#FAF9F6] border border-zinc-200/60 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-3">
                  
                  {/* Stars */}
                  <div className="flex gap-1 text-[#F4A460]">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-zinc-650 text-xs md:text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/80 flex justify-between items-end">
                  <div>
                    <span className="text-zinc-900 text-xs font-bold block">{review.client}</span>
                    <span className="text-[10px] text-zinc-550 block">{review.location}</span>
                  </div>
                  <span className="text-[9px] bg-[#008080]/15 text-[#008080] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 bg-[#FAF9F6] border-b border-zinc-200/30">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-[#008080] tracking-widest block uppercase">// CURATED KNOWLEDGE LOGS</span>
            <h2 className="text-3xl font-serif font-black text-zinc-900">FREQUENT QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                key: 'q1',
                q: "HOW DURABLE ARE DRIFTWOOD FINISHES IN HUMID KITCHENS?",
                a: "Our woodwork is meticulously sealed. We treat whitewashed ash and driftwood timbers with marine-grade water-based polyurethane glazes that shield the grain against steam, moisture, and kitchen grease while preserving the light, raw wood feel."
              },
              {
                key: 'q2',
                q: "CAN NATURAL LINEN FABRICS RESIST SOILING AND DIRT?",
                a: "Yes. All our linen fabrics undergo a high-performance soil-resistant nano-treatment. This prevents coffee, tea, and juice spills from instantly soaking into the fibers, allowing you to wipe off stains easily."
              },
              {
                key: 'q3',
                q: "DO WE NEED LARGE WINDOWS FOR A COASTAL INTERIOR TO WORK?",
                a: "No. While large windows help, we use specialized light-reflecting paints, recessed warm light alcoves, and open-plan modular divisions to maximize light transmission, making even standard rooms feel sunny and spacious."
              },
              {
                key: 'q4',
                q: "WHAT IS THE LIFESPAN OF COMPOSITE BALCONY DECKING?",
                a: "Our composite teak decking is engineered to last over 15 years. It is resistant to UV damage, swelling, insect infestation, and heavy monsoon rains, requiring only a simple wash with soap water once a year."
              },
              {
                key: 'q5',
                q: "HOW INVOLVED IS THE INITIAL DESIGN CONSULTATION?",
                a: "We begin with a site walk-through in Attapur. We measure the angle of sun exposure, note daylight hours, review natural airflow, and bring material sample trays (woods, linens, cane panels) directly to your home."
              }
            ].map((item) => {
              const isOpen = faqOpen[item.key];
              return (
                <div key={item.key} className="border border-zinc-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(item.key)}
                    className="w-full py-4 px-6 text-left hover:bg-[#008080]/5 transition-all flex items-center justify-between gap-4 font-serif text-sm font-extrabold text-zinc-900"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#008080]">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-zinc-600 border-t border-zinc-150 leading-relaxed font-sans">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info details */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#008080] block mb-2 tracking-widest uppercase">// SECURE LIAISON HUB</span>
                <h2 className="text-3xl font-serif font-black text-zinc-900">BEGIN YOUR TRANSFORMATION</h2>
                <p className="text-xs md:text-sm text-zinc-550 mt-3 leading-relaxed">
                  Establish a secure connection with Style Home Interiors. Provide your property parameters and design preferences to schedule a material sample presentation.
                </p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-zinc-650">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#008080]/10 text-[#008080] flex items-center justify-center shadow-inner">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[10px] block font-bold">STUDIO ADRESS</span>
                    <span className="text-zinc-950 font-semibold">Attapur Ring Road, Above Union Bank, Hyderabad - 500048</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#008080]/10 text-[#008080] flex items-center justify-center shadow-inner">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[10px] block font-bold">CONTACT PHONE</span>
                    <span className="text-zinc-950 font-semibold">+91 91212 98450</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#008080]/10 text-[#008080] flex items-center justify-center shadow-inner">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[10px] block font-bold">EMAIL INTAKE</span>
                    <span className="text-zinc-950 font-semibold">studio@stylehomeinteriors.co.in</span>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-[#FAF9F6] border border-zinc-200 p-5 rounded-2xl text-xs text-zinc-650 space-y-2">
                <div className="text-zinc-900 font-bold border-b border-zinc-200 pb-2 flex items-center gap-2">
                  <Sun size={14} className="text-[#F4A460]" />
                  <span>STUDIO SHOWROOM HOURS</span>
                </div>
                <div className="flex justify-between">
                  <span>MONDAY - SATURDAY</span>
                  <span className="text-[#008080] font-semibold">10:00 - 20:00 IST</span>
                </div>
                <div className="flex justify-between">
                  <span>SUNDAY SHOWINGS</span>
                  <span className="text-[#008080] font-semibold">11:00 - 16:00 IST</span>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div id="estimator-intake-form" className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl border border-zinc-200 p-6 md:p-8 relative shadow-sm">
              <h3 className="text-xl font-serif font-black text-zinc-900 mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-[#008080]" />
                <span>DESIGN CONSULTATION DISPATCH</span>
              </h3>

              {formSuccess ? (
                <div className="bg-white border border-green-500/30 p-6 text-center space-y-4 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-550/10 border border-green-500 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-zinc-900 font-serif font-bold text-base">DISPATCH INTAKE COMPLETED</h4>
                  <div className="bg-[#FAF9F6] p-4 text-xs text-left text-zinc-650 rounded-xl space-y-1 font-mono">
                    {logLines.map((line, i) => (
                      <p key={i} className={i === logLines.length - 1 ? "text-[#008080] font-bold" : ""}>
                        ✓ {line}
                      </p>
                    ))}
                  </div>
                  <button 
                    onClick={() => setFormSuccess(false)}
                    className="text-xs text-[#008080] font-bold hover:underline"
                  >
                    [REQUEST ANOTHER INTAKE DISPATCH]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs md:text-sm">
                  
                  {formError && (
                    <div className="bg-red-50 border border-red-500/30 text-red-700 p-3 flex items-center gap-2 rounded-xl text-xs font-mono">
                      <AlertTriangle size={14} className="text-red-500" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-500 font-bold block uppercase">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Anand Sharma"
                        className="w-full bg-white border border-zinc-200 py-3 px-4 text-zinc-900 rounded-xl focus:border-[#008080] focus:outline-none shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-500 font-bold block uppercase">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g. anand@outlook.com"
                        className="w-full bg-white border border-zinc-200 py-3 px-4 text-zinc-900 rounded-xl focus:border-[#008080] focus:outline-none shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-500 font-bold block uppercase">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="e.g. +91 99880 77660"
                        className="w-full bg-white border border-zinc-200 py-3 px-4 text-zinc-900 rounded-xl focus:border-[#008080] focus:outline-none shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-500 font-bold block uppercase">Layout Size</label>
                      <select 
                        value={formData.selectedLayout}
                        onChange={(e) => setFormData(prev => ({ ...prev, selectedLayout: e.target.value }))}
                        className="w-full bg-white border border-zinc-200 py-3 px-4 text-zinc-900 rounded-xl focus:border-[#008080] focus:outline-none shadow-inner"
                      >
                        <option value="2_BHK">2 BHK Apartment</option>
                        <option value="3_BHK">3 BHK Sanctuary</option>
                        <option value="VILLA">Premium Villa</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold block uppercase">Design Brief & Custom Notes</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Detail your space scale, window sizes, or natural wood preference..."
                      className="w-full bg-white border border-zinc-200 py-3 px-4 text-zinc-900 rounded-xl focus:border-[#008080] focus:outline-none shadow-inner"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full bg-[#008080] hover:bg-[#006666] text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
                    >
                      {formLoading ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>SENDING INTAKE DISPATCH...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>REQUEST COASTAL MATERIAL PRESENTATION</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF9F6] border-t border-zinc-250/60 text-zinc-500 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <span className="font-serif font-extrabold text-zinc-900 text-sm block">STYLE HOME INTERIORS</span>
            <p className="text-[11px] leading-relaxed text-zinc-600">
              Chic, light-filled coastal living environments constructed from scratch. We source whitewashed oak, organic canvas linens, and frosted sea-glass highlights.
            </p>
            <span className="text-[10px] text-[#008080] block font-bold uppercase">ATTAPUR CENTRAL BRANCH // HYD</span>
          </div>

          <div>
            <span className="text-zinc-900 font-bold block mb-3 text-[10px] uppercase">DIRECTORY</span>
            <ul className="space-y-2 text-[11px] text-zinc-650">
              <li><a href="#hero" className="hover:text-[#008080] transition-colors">HOME</a></li>
              <li><a href="#portfolio" className="hover:text-[#008080] transition-colors">SHOWCASE</a></li>
              <li><a href="#configurator" className="hover:text-[#008080] transition-colors">ESTIMATOR</a></li>
              <li><a href="#reviews" className="hover:text-[#008080] transition-colors">REVIEWS</a></li>
              <li><a href="#faq" className="hover:text-[#008080] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <span className="text-zinc-900 font-bold block mb-3 text-[10px] uppercase">COASTAL MATRIX</span>
            <ul className="space-y-2 text-[11px] text-zinc-650">
              <li><span className="text-zinc-800 font-medium">DRIFTWOOD OAK</span> // RECLAIMED</li>
              <li><span className="text-zinc-800 font-medium">FLAX LINENS</span> // SOIL RESISTANT</li>
              <li><span className="text-zinc-800 font-medium">SEA GLASS HARDWARE</span> // HAND BLOWN</li>
              <li><span className="text-zinc-800 font-medium">JUTE ACCENTS</span> // DOUBLE BRAIDED</li>
            </ul>
          </div>

          <div>
            <span className="text-zinc-900 font-bold block mb-3 text-[10px] uppercase">STUDIO STATUS</span>
            <div className="space-y-2 text-[11px] bg-white p-4 rounded-2xl border border-zinc-200 leading-normal text-zinc-650">
              <div className="flex justify-between">
                <span>SHOWROOM:</span>
                <span className="text-green-600 font-bold">OPEN TODAY</span>
              </div>
              <div className="flex justify-between">
                <span>SAMPLE DEPOT:</span>
                <span className="text-[#008080] font-bold">READY</span>
              </div>
              <div className="flex justify-between">
                <span>VERIFICATION:</span>
                <span>CHIC-2026-HYD</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500">
          <span>© 2026 STYLE HOME INTERIORS. ALL PROJECT DESIGNS SECURED.</span>
          <span className="text-zinc-400">ATTAPUR // SECURE DEVELOPMENT PREVIEW</span>
        </div>
      </footer>

    </div>
  );
}

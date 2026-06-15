"use client";

import React, { useState, useEffect } from 'react';
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
  Shield, 
  Gem, 
  Crown,
  Grid,
  Heart
} from 'lucide-react';

export default function DLifeInteriorsPage() {
  // Services Portfolio Tab State
  const [activeTab, setActiveTab] = useState('living');

  // Material Visualizer State
  const [selectedRoom, setSelectedRoom] = useState('living');
  const [selectedFlooring, setSelectedFlooring] = useState('marble');
  const [selectedWall, setSelectedWall] = useState('gold');
  const [selectedLighting, setSelectedLighting] = useState('brass');

  // FAQ Collapsible State
  const [openFaq, setOpenFaq] = useState(null);

  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', roomType: 'Full Residence', message: '' });
  const [formSubmitState, setFormSubmitState] = useState('idle'); // idle | loading | success

  // Services Portfolio Data
  const servicesData = {
    living: {
      title: "Royal Living Chambers",
      tagline: "Bold geometry meets unmatched hospitality",
      description: "Designed for grand receptions and intimate evenings. Our living rooms integrate Art Deco symmetry with deep velvet seating, gold-inlay wall paneling, and custom marble fireplaces tailored for luxury residences in Attapur.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      features: [
        "Symmetrical geometric wall trim with 24k gold leaf details",
        "Bespoke velvet and brass lounge seating configurations",
        "Custom marble media console and fireplace hearth",
        "Integrated warm ambient lighting with alabaster fixtures"
      ],
      costRange: "₹12,00,000 - ₹25,00,000"
    },
    bedroom: {
      title: "Imperial Master Suites",
      tagline: "A sanctuary of satin, gold, and deep rest",
      description: "A private retreat featuring custom headboards stretching to the ceiling, geometric mirror arrays, and custom walk-in closets made of hand-selected walnut wood and bronze frames.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      features: [
        "Floor-to-ceiling padded velvet headboards with gold-plated trim",
        "Smart-glass partition walkthrough closets with internal LED detailing",
        "Soundproofed walls with geometric acoustical silk padding",
        "Luxury dresser stations featuring bespoke marble countertops"
      ],
      costRange: "₹8,50,000 - ₹18,00,000"
    },
    kitchen: {
      title: "Gourmet Culinary Spaces",
      tagline: "High-contrast culinary stages for the modern epicurean",
      description: "Where functional culinary precision meets editorial beauty. Emerald green cabinetry paired with gold hardware, Calacatta marble waterfalls, and professional-grade built-in appliance bays.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      features: [
        "Emerald green matte lacquered shutters with brass profile handles",
        "Calacatta gold marble countertops with seamless double-ogee waterfall edges",
        "Dedicated luxury coffee station and concealed walk-in pantry portal",
        "Premium soft-closing hardware with lifetime performance warranty"
      ],
      costRange: "₹10,00,000 - ₹22,00,000"
    },
    lounge: {
      title: "Penthouse Cigar & Wine Lounges",
      tagline: "Editorial moodiness, tailored for connoisseurs",
      description: "High-contrast private entertainment suites featuring deep emerald velvet backdrops, custom back-lit onyx home bar units, brass wine racks, and bespoke luxury seating arrangements.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      features: [
        "Bespoke onyx wet bar with integrated warm ambient backlighting",
        "Solid walnut humidor display cases with brass locks",
        "Custom geometric layout ceiling coffering with metallic gold leaf highlights",
        "Sound-insulated acoustics for private, undisturbed social hosting"
      ],
      costRange: "₹15,00,000 - ₹35,00,000"
    }
  };

  // Materials Prices & Specs
  const materialSpecs = {
    flooring: {
      marble: { name: "Italian Calacatta Gold Marble", price: 950000, desc: "Ultra-premium white marble with signature bold gold veins." },
      hardwood: { name: "Solid Royal Smoked Walnut Wood", price: 650000, desc: "Warm, rich dark-wood boards laid in a perfect herringbone chevron." },
      terrazzo: { name: "Custom Art Deco Brass-Inlay Terrazzo", price: 500000, desc: "Hand-poured emerald and cream stones with customized brass lines." }
    },
    wall: {
      gold: { name: "24k Hand-applied Gold Leaf Gilding", price: 450000, desc: "Genuine metallic brilliance applied flake-by-flake on ceiling & panels." },
      wallpaper: { name: "Bespoke Silk-Woven Geometric Wallpaper", price: 220000, desc: "Custom textured vertical panels with Art Deco geometric patterns." },
      fluted: { name: "Walnut Fluted Panels with Brass Accents", price: 380000, desc: "Vertical architectural wood detailing lined with metallic gold." }
    },
    lighting: {
      brass: { name: "Custom Cascade Chandelier in Brushed Brass", price: 350000, desc: "Multi-tiered geometric crystal and brass center-piece." },
      sconces: { name: "Art Deco Alabaster & Gold Wall Sconces", price: 180000, desc: "Warm glowing translucent stone fixtures flanking portals." },
      cove: { name: "Smart Integrated Multi-Tier LED Cove Lights", price: 120000, desc: "Subtle indirect ceiling lighting creating deep visual layers." }
    }
  };

  // Calculate dynamic visualizer total
  const baseCost = selectedRoom === 'living' ? 800000 : selectedRoom === 'bedroom' ? 600000 : selectedRoom === 'kitchen' ? 750000 : 900000;
  const materialsCost = materialSpecs.flooring[selectedFlooring].price + materialSpecs.wall[selectedWall].price + materialSpecs.lighting[selectedLighting].price;
  const totalEstimatedCost = baseCost + materialsCost;

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
      setFormData({ name: '', email: '', phone: '', roomType: 'Full Residence', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-[#021f1a] text-[#fbf8f3] font-sans selection:bg-[#D4AF37] selection:text-[#021f1a]">
      
      {/* Dynamic Geometric Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] border-[3px] border-[#D4AF37] rotate-45"></div>
        <div className="absolute top-[100px] right-[-100px] w-[500px] h-[500px] border-[3px] border-[#D4AF37] rotate-12"></div>
        <div className="absolute top-[350px] left-[50%] transform -translate-x-[50%] w-[800px] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#021f1a]/95 backdrop-blur-md border-b border-[#D4AF37]/20 px-4 lg:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#053b31]">
            <Crown className="w-5 h-5 text-[#D4AF37] transform -rotate-45" />
          </div>
          <div>
            <span className="font-playfair font-black text-lg lg:text-xl tracking-[0.2em] uppercase text-white block">D'LIFE</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] block">INTERIORS HYD</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbf8f3]/85">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">Philosophy</a>
          <a href="#fitouts" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
          <a href="#visualizer" className="hover:text-[#D4AF37] transition-colors">Material Board</a>
          <a href="#feedback" className="hover:text-[#D4AF37] transition-colors">Accolades</a>
          <a href="#faqs" className="hover:text-[#D4AF37] transition-colors">FAQ</a>
        </nav>

        <div>
          <a href="#contact" className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#021f1a] transition-all px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em]">
            Schedule Visit
          </a>
        </div>
      </header>

      <main>
        
        {/* HERO SECTION - GEOMETRIC ART DECO */}
        <section id="about" className="relative min-h-[90vh] flex items-center px-4 lg:px-12 py-16 overflow-hidden">
          {/* Diagonal geometric background divisions */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute top-0 right-0 bottom-0 left-[60%] bg-[#053b31] transform skew-x-12 origin-top-right border-l-2 border-[#D4AF37]/30"></div>
            <div className="absolute top-0 right-0 bottom-0 left-[75%] bg-[#097969]/30 transform skew-x-12 origin-top-right border-l-2 border-[#D4AF37]/40"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">Attapur's Elite Residential Atelier</span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight uppercase mb-8">
                Bespoke <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f9e79f] to-[#D4AF37]">
                  Art Deco
                </span> <br />
                Masterpieces.
              </h1>

              <p className="font-sans text-[#fbf8f3]/80 text-base lg:text-lg font-light leading-relaxed max-w-xl mb-10 border-l border-[#D4AF37]/40 pl-6">
                Creating luxurious editorial interiors that command attention. D'LIFE Interiors fuses deep emerald green depth, brass accents, and custom marble fitouts into iconic residential canvases.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#fitouts" className="bg-[#D4AF37] text-[#021f1a] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4.5 flex items-center gap-3 hover:bg-white hover:text-[#021f1a] transition-all">
                  Browse Fitouts <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#visualizer" className="border border-[#D4AF37]/50 text-[#fbf8f3] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4.5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                  Configure Materials
                </a>
              </div>

              {/* Accents / Quick Metrics */}
              <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[#D4AF37]/20 w-full max-w-lg">
                <div>
                  <span className="font-playfair text-3xl font-extrabold text-[#D4AF37] block">150+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#fbf8f3]/60">Villas Designed</span>
                </div>
                <div>
                  <span className="font-playfair text-3xl font-extrabold text-[#D4AF37] block">24k</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#fbf8f3]/60">Gold Detailing</span>
                </div>
                <div>
                  <span className="font-playfair text-3xl font-extrabold text-[#D4AF37] block">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#fbf8f3]/60">Tailored Fitout</span>
                </div>
              </div>

            </div>

            {/* Symmetrical Geometric Hero Frame */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/5] p-3 border-2 border-[#D4AF37] bg-[#021f1a]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-[-8px] border border-[#D4AF37]/40 pointer-events-none"></div>
                <div className="w-full h-full overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                    alt="Art Deco Luxury Room" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021f1a] via-transparent to-transparent"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#021f1a]/95 border border-[#D4AF37]/30 p-4 backdrop-blur-sm">
                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-semibold block mb-1">Featured Showcase</span>
                    <span className="font-playfair text-sm text-white font-bold block">The Rajendra Nagar Villa Penthouse</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* REPLICATING DIAGONAL ART DECO PATTERN STRIP */}
        <section className="bg-[#D4AF37] text-[#021f1a] py-6 overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          <div className="flex whitespace-nowrap text-xs font-bold tracking-[0.25em] uppercase animate-pulse">
            <span className="px-8 flex items-center gap-2"><Crown className="w-4.5 h-4.5" /> ITALIAN MARBLE FLOORS</span> • 
            <span className="px-8 flex items-center gap-2"><Sparkles className="w-4.5 h-4.5" /> 24K GOLD LEAF GILDING</span> • 
            <span className="px-8 flex items-center gap-2"><Gem className="w-4.5 h-4.5" /> VELVET ARCHITECTURAL DÉCOR</span> • 
            <span className="px-8 flex items-center gap-2"><Crown className="w-4.5 h-4.5" /> EXPERT CRAFTSMEN IN ATTAPUR</span> • 
            <span className="px-8 flex items-center gap-2"><Sparkles className="w-4.5 h-4.5" /> EXOTIC WOOD VENEERS</span>
          </div>
        </section>

        {/* SERVICES PORTFOLIO - LUXURY FITOUTS WITH ACTIVE TAB STATE */}
        <section id="fitouts" className="px-4 lg:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 bg-[#053b31] border border-[#D4AF37]/30 px-3 py-1">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Tailored Portfolios</span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Luxury Fitout Portfolios
            </h2>
            <p className="font-sans text-[#fbf8f3]/70 font-light text-sm">
              Discover our signature editorial concepts. Switch between rooms below to explore high-end finishes, layouts, and estimated investments.
            </p>
          </div>

          {/* Symmetrical Tabs */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
            {Object.keys(servicesData).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] border transition-all duration-300 ${
                  activeTab === tabKey 
                    ? 'bg-[#D4AF37] text-[#021f1a] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#053b31]/40 text-[#fbf8f3]/70 border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-white'
                }`}
              >
                {tabKey} fitout
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="border border-[#D4AF37]/25 bg-[#021f1a] p-4 lg:p-12 relative overflow-hidden">
            {/* Geometric watermark inside panel */}
            <div className="absolute right-[-80px] bottom-[-80px] w-96 h-96 border border-[#D4AF37]/5 rotate-45 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Tab Image */}
              <div className="lg:col-span-6 relative">
                <div className="border border-[#D4AF37]/40 p-2 relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]"></div>
                  <div className="aspect-[4/3] overflow-hidden bg-emerald-950">
                    <img 
                      src={servicesData[activeTab].image} 
                      alt={servicesData[activeTab].title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-2 block">
                  {servicesData[activeTab].tagline}
                </span>
                <h3 className="font-playfair text-3xl lg:text-4xl font-extrabold uppercase text-white mb-5">
                  {servicesData[activeTab].title}
                </h3>
                <p className="font-sans text-[#fbf8f3]/80 font-light text-sm leading-relaxed mb-6">
                  {servicesData[activeTab].description}
                </p>

                <div className="border-t border-b border-[#D4AF37]/20 py-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.1em] text-[#fbf8f3]/60 block mb-1">Estimated Budget Range</span>
                  <span className="font-playfair text-2xl font-bold text-[#D4AF37]">
                    {servicesData[activeTab].costRange}
                  </span>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Signature Inclusions:
                </h4>
                
                <ul className="space-y-2.5">
                  {servicesData[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#fbf8f3]/75 font-light">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a 
                    href="#contact" 
                    onClick={() => setFormData({...formData, message: `Inquiring about: ${servicesData[activeTab].title}`})}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors"
                  >
                    Discuss this room <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* LUXURY MATERIALS VISUALIZER (INTERACTIVE CONFIGURATOR) */}
        <section id="visualizer" className="bg-[#053b31]/40 border-t border-b border-[#D4AF37]/20 py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Configurator Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-3 bg-[#021f1a] border border-[#D4AF37]/30 px-3 py-1">
                  <Gem className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Interactive Canvas</span>
                </div>
                <h2 className="font-playfair text-4xl lg:text-5xl font-black uppercase text-white mb-6">
                  Luxury Material board
                </h2>
                <p className="font-sans text-[#fbf8f3]/80 font-light text-sm mb-10 max-w-xl">
                  Mix and match ultra-premium finishes. Preview the visual impact and compute real-time cost estimations based on premium pricing metrics in Attapur, Hyderabad.
                </p>

                {/* 1. Room Selection */}
                <div className="mb-8">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-3">1. Select Target Space</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['living', 'bedroom', 'kitchen', 'lounge'].map((room) => (
                      <button
                        key={room}
                        onClick={() => setSelectedRoom(room)}
                        className={`py-3 px-4 border text-[10px] font-bold uppercase tracking-[0.1em] transition-all ${
                          selectedRoom === room
                            ? 'bg-[#D4AF37] text-[#021f1a] border-[#D4AF37]'
                            : 'bg-[#021f1a]/60 text-[#fbf8f3]/85 border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
                        }`}
                      >
                        {room}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Flooring Selection */}
                <div className="mb-8">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-3">2. Premium Flooring</label>
                  <div className="space-y-3">
                    {Object.keys(materialSpecs.flooring).map((key) => {
                      const item = materialSpecs.flooring[key];
                      return (
                        <div 
                          key={key}
                          onClick={() => setSelectedFlooring(key)}
                          className={`p-4 border cursor-pointer transition-all flex justify-between items-center ${
                            selectedFlooring === key 
                              ? 'bg-[#053b31] border-[#D4AF37] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]' 
                              : 'bg-[#021f1a]/40 border-[#D4AF37]/15 hover:border-[#D4AF37]/30'
                          }`}
                        >
                          <div className="pr-4">
                            <span className="font-playfair text-sm font-bold text-white block">{item.name}</span>
                            <span className="text-[11px] text-[#fbf8f3]/60 block mt-0.5 font-light">{item.desc}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-playfair text-[#D4AF37] font-semibold block">+₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Wall Accents */}
                <div className="mb-8">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-3">3. Editorial Wall Finishes</label>
                  <div className="space-y-3">
                    {Object.keys(materialSpecs.wall).map((key) => {
                      const item = materialSpecs.wall[key];
                      return (
                        <div 
                          key={key}
                          onClick={() => setSelectedWall(key)}
                          className={`p-4 border cursor-pointer transition-all flex justify-between items-center ${
                            selectedWall === key 
                              ? 'bg-[#053b31] border-[#D4AF37] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]' 
                              : 'bg-[#021f1a]/40 border-[#D4AF37]/15 hover:border-[#D4AF37]/30'
                          }`}
                        >
                          <div className="pr-4">
                            <span className="font-playfair text-sm font-bold text-white block">{item.name}</span>
                            <span className="text-[11px] text-[#fbf8f3]/60 block mt-0.5 font-light">{item.desc}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-playfair text-[#D4AF37] font-semibold block">+₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Lighting */}
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-3">4. Custom Architectural Lighting</label>
                  <div className="space-y-3">
                    {Object.keys(materialSpecs.lighting).map((key) => {
                      const item = materialSpecs.lighting[key];
                      return (
                        <div 
                          key={key}
                          onClick={() => setSelectedLighting(key)}
                          className={`p-4 border cursor-pointer transition-all flex justify-between items-center ${
                            selectedLighting === key 
                              ? 'bg-[#053b31] border-[#D4AF37] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]' 
                              : 'bg-[#021f1a]/40 border-[#D4AF37]/15 hover:border-[#D4AF37]/30'
                          }`}
                        >
                          <div className="pr-4">
                            <span className="font-playfair text-sm font-bold text-white block">{item.name}</span>
                            <span className="text-[11px] text-[#fbf8f3]/60 block mt-0.5 font-light">{item.desc}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-playfair text-[#D4AF37] font-semibold block">+₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Calculation Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="border-2 border-[#D4AF37] bg-[#021f1a] p-6 lg:p-8 relative">
                  
                  {/* Symmetrical border corner shapes */}
                  <div className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] bg-[#021f1a]"></div>
                  <div className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] bg-[#021f1a]"></div>
                  <div className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] bg-[#021f1a]"></div>
                  <div className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] bg-[#021f1a]"></div>
                  
                  <div className="text-center pb-6 border-b border-[#D4AF37]/20">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">Fitout board Summary</span>
                    <h3 className="font-playfair text-xl font-bold uppercase text-white">Estimated Valuation</h3>
                  </div>

                  <div className="py-6 space-y-4 text-xs font-light text-[#fbf8f3]/80">
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Base Room Fitout ({selectedRoom})</span>
                      <span className="font-semibold text-white">₹{baseCost.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Flooring: {selectedFlooring}</span>
                      <span className="font-semibold text-white">₹{materialSpecs.flooring[selectedFlooring].price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Walls: {selectedWall}</span>
                      <span className="font-semibold text-white">₹{materialSpecs.wall[selectedWall].price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Lighting: {selectedLighting}</span>
                      <span className="font-semibold text-white">₹{materialSpecs.lighting[selectedLighting].price.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="pt-6 border-t border-dashed border-[#D4AF37]/20 flex justify-between items-baseline">
                      <span className="font-bold text-white uppercase tracking-wider text-sm">Total Estimation:</span>
                      <span className="font-playfair text-3xl font-extrabold text-[#D4AF37]">
                        ₹{totalEstimatedCost.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Rendering Preview Block */}
                  <div className="bg-[#053b31]/40 border border-[#D4AF37]/20 p-4 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#D4AF37] flex items-center gap-1.5 mb-2">
                      <Eye className="w-3.5 h-3.5" /> Live Texture Preview Description
                    </span>
                    <p className="text-[11px] font-light text-[#fbf8f3]/80 leading-relaxed">
                      Your space will utilize <strong>{materialSpecs.flooring[selectedFlooring].name}</strong> underfoot, contrasted with <strong>{materialSpecs.wall[selectedWall].name}</strong> along the visual panels, anchored by the gorgeous <strong>{materialSpecs.lighting[selectedLighting].name}</strong> cast in absolute luxury.
                    </p>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => setFormData({
                      ...formData, 
                      message: `Quote Request: ${selectedRoom} Room fitout with ${materialSpecs.flooring[selectedFlooring].name}, ${materialSpecs.wall[selectedWall].name}, and ${materialSpecs.lighting[selectedLighting].name}.`
                    })}
                    className="w-full text-center block bg-[#D4AF37] text-[#021f1a] font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-white hover:text-[#021f1a] transition-all"
                  >
                    Lock in Material Board
                  </a>
                  <p className="text-[10px] text-center text-[#fbf8f3]/50 mt-3 font-light">
                    *Estimated amounts include local logistics and elite installation in Attapur, Hyderabad.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PREMIUM FEEDBACK (TESTIMONIALS) */}
        <section id="feedback" className="px-4 lg:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 bg-[#053b31] border border-[#D4AF37]/30 px-3 py-1">
              <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Accolades</span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-black uppercase text-white mb-4">
              Premium client feedback
            </h2>
            <p className="font-sans text-[#fbf8f3]/70 font-light text-sm">
              Read true accounts of luxury, curated carefully from corporate leaders and royal residence owners in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="border border-[#D4AF37]/25 bg-[#021f1a] p-8 relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-[#D4AF37]/20 font-playfair text-6xl font-bold">“</div>
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-sans text-xs lg:text-sm font-light text-[#fbf8f3]/80 leading-relaxed mb-6">
                  "D'LIFE converted our 5,000 sq ft duplex in Attapur into a luxurious Art Deco sanctuary. The 24k gold leaf details on the ceiling coffering are an absolute masterpiece. Every guest is mesmerized by the symmetry."
                </p>
              </div>
              <div className="pt-4 border-t border-[#D4AF37]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#053b31] border border-[#D4AF37]/30 flex items-center justify-center font-playfair font-bold text-xs text-[#D4AF37]">
                  KR
                </div>
                <div>
                  <span className="font-bold text-xs text-white block">K. Raghavendra Rao</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#fbf8f3]/55 block">Villa Owner, Attapur</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[#D4AF37]/25 bg-[#021f1a] p-8 relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-[#D4AF37]/20 font-playfair text-6xl font-bold">“</div>
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-sans text-xs lg:text-sm font-light text-[#fbf8f3]/80 leading-relaxed mb-6">
                  "The luxury material board configurator isn't just a gimmick. We sat down, locked in the Italian Calacatta gold marble and the solid walnut chevron floors, and they executed it precisely to the rupee. Exemplary ethics."
                </p>
              </div>
              <div className="pt-4 border-t border-[#D4AF37]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#053b31] border border-[#D4AF37]/30 flex items-center justify-center font-playfair font-bold text-xs text-[#D4AF37]">
                  SA
                </div>
                <div>
                  <span className="font-bold text-xs text-white block">Dr. Sarah Anjum</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#fbf8f3]/55 block">Penthouse Owner, Rajendra Nagar</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-[#D4AF37]/25 bg-[#021f1a] p-8 relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-[#D4AF37]/20 font-playfair text-6xl font-bold">“</div>
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-sans text-xs lg:text-sm font-light text-[#fbf8f3]/80 leading-relaxed mb-6">
                  "High contrast editorial styling is their superpower. D'LIFE interiors stood out because they don't do typical boring flat colors. The bold geometric diagonals and rich emerald green tones are phenomenal."
                </p>
              </div>
              <div className="pt-4 border-t border-[#D4AF37]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#053b31] border border-[#D4AF37]/30 flex items-center justify-center font-playfair font-bold text-xs text-[#D4AF37]">
                  PV
                </div>
                <div>
                  <span className="font-bold text-xs text-white block">Praveen Varma</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#fbf8f3]/55 block">MD, Varma Constructions</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* COLLAPSIBLE FAQ SECTION */}
        <section id="faqs" className="bg-[#053b31]/30 border-t border-b border-[#D4AF37]/20 py-24">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-3 bg-[#021f1a] border border-[#D4AF37]/30 px-3 py-1">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Clear Answers</span>
              </div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-black uppercase text-white mb-4">
                Frequently Answered
              </h2>
              <p className="font-sans text-[#fbf8f3]/70 font-light text-sm">
                Understand our execution models, sourcing standards, and timeline commitment in Attapur, Hyderabad.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Question 1 */}
              <div className="border border-[#D4AF37]/20 bg-[#021f1a]/80">
                <button 
                  onClick={() => toggleFaq(0)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white focus:outline-none"
                >
                  <span className="font-playfair font-bold text-sm lg:text-base uppercase tracking-wider">
                    How do you source premium materials?
                  </span>
                  {openFaq === 0 ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#D4AF37]/10 text-xs lg:text-sm font-light text-[#fbf8f3]/75 leading-relaxed">
                    We import Calacatta and Thassos marble slabs directly from Italy and Greece. All hardwoods are sustainably harvested smoked walnut, dried to precision standards. Our gold leaves are 24k genuine metallic foil hand-applied by specialized artists from West Bengal.
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="border border-[#D4AF37]/20 bg-[#021f1a]/80">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white focus:outline-none"
                >
                  <span className="font-playfair font-bold text-sm lg:text-base uppercase tracking-wider">
                    Do you have a physical design lounge in Attapur?
                  </span>
                  {openFaq === 1 ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#D4AF37]/10 text-xs lg:text-sm font-light text-[#fbf8f3]/75 leading-relaxed">
                    Yes, we host clients by prior appointment at our luxurious design lounge located in Attapur. Here, you can visually inspect material boards, touch physical gold leaf finishes, and experience fully constructed sample vignettes.
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="border border-[#D4AF37]/20 bg-[#021f1a]/80">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white focus:outline-none"
                >
                  <span className="font-playfair font-bold text-sm lg:text-base uppercase tracking-wider">
                    What is your standard design-to-handover timeline?
                  </span>
                  {openFaq === 2 ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#D4AF37]/10 text-xs lg:text-sm font-light text-[#fbf8f3]/75 leading-relaxed">
                    Given the bespoke nature of Art Deco woodwork, marble stonework, and gold gilding, a standard high-end residence takes 12 to 16 weeks. We provide detailed micro-milestone tracking and live CCTV monitoring of key fitout spaces during execution.
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="border border-[#D4AF37]/20 bg-[#021f1a]/80">
                <button 
                  onClick={() => toggleFaq(3)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white focus:outline-none"
                >
                  <span className="font-playfair font-bold text-sm lg:text-base uppercase tracking-wider">
                    Do you offer a post-occupancy service agreement?
                  </span>
                  {openFaq === 3 ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#D4AF37]/10 text-xs lg:text-sm font-light text-[#fbf8f3]/75 leading-relaxed">
                    Yes, all D'LIFE residential fitouts come with an elite 10-year structural warranty, and a dedicated butler-service maintenance crew visits every 6 months during the first 2 years to polish marble, inspect lighting coves, and maintain wood finishes.
                  </div>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* INTERACTIVE CONTACT FORM WITH STATE */}
        <section id="contact" className="px-4 lg:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Info Panel */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-3 bg-[#053b31] border border-[#D4AF37]/30 px-3 py-1">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Atelier Siting</span>
              </div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-black uppercase text-white mb-6">
                Begin your design journey
              </h2>
              <p className="font-sans text-[#fbf8f3]/80 font-light text-sm leading-relaxed mb-8 max-w-md">
                Schedule a private walk-through at our Attapur design gallery. Discuss custom layout requirements, inspect rare marbles, and design your lifestyle alongside our elite architects.
              </p>

              <div className="space-y-5 text-xs text-[#fbf8f3]/80 font-light w-full">
                <div className="flex items-center gap-4 p-4 border border-[#D4AF37]/15 bg-[#053b31]/10">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Attapur Design Atelier</span>
                    <span className="text-[#fbf8f3]/60 block mt-0.5">Pillar 143, Main Ring Road, Attapur, Hyderabad - 500048</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 border border-[#D4AF37]/15 bg-[#053b31]/10">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Direct Concierge</span>
                    <span className="text-[#fbf8f3]/60 block mt-0.5">+91 91008 82345 / +91 91008 82346</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-[#D4AF37]/15 bg-[#053b31]/10">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Email Enquiry</span>
                    <span className="text-[#fbf8f3]/60 block mt-0.5">atelier.hyd@dlifeinteriors.com</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Actual Interactive Form */}
            <div className="lg:col-span-7 bg-[#021f1a] border border-[#D4AF37]/35 p-6 lg:p-10 relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#D4AF37]"></div>

              {formSubmitState === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-[#053b31] border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold uppercase text-white mb-3">Enquiry Lodged Successfully</h3>
                  <p className="font-sans text-xs text-[#fbf8f3]/85 font-light max-w-md mx-auto leading-relaxed">
                    An elite concierge specialist has received your design parameters. We will dial you within 4 business hours to schedule your VIP session.
                  </p>
                  <button 
                    onClick={() => setFormSubmitState('idle')}
                    className="mt-8 border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#021f1a] transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="font-playfair text-xl font-bold uppercase text-white border-b border-[#D4AF37]/20 pb-4 mb-4">
                    VIP Briefing Document
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">FullName *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Anand Kumar" 
                        className="w-full bg-[#053b31]/20 border border-[#D4AF37]/30 text-white p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full bg-[#053b31]/20 border border-[#D4AF37]/30 text-white p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. anand@outlook.com" 
                        className="w-full bg-[#053b31]/20 border border-[#D4AF37]/30 text-white p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Niche Selection</label>
                      <select 
                        value={formData.roomType}
                        onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                        className="w-full bg-[#021f1a] border border-[#D4AF37]/30 text-white p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="Full Residence">Full Luxury Residence</option>
                        <option value="Living Room">Living Chambers</option>
                        <option value="Master Bedroom">Master Suite</option>
                        <option value="Kitchen Suite">Gourmet Kitchen</option>
                        <option value="Commercial Lounge">Private Cigar/Wine Lounge</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Design Notes & Special Requests</label>
                    <textarea 
                      rows="4" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share your spatial aspirations, timeline constraints, or material preferences..."
                      className="w-full bg-[#053b31]/20 border border-[#D4AF37]/30 text-white p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formSubmitState === 'loading'}
                    className="w-full bg-[#D4AF37] text-[#021f1a] font-bold text-xs uppercase tracking-[0.25em] py-4.5 hover:bg-white hover:text-[#021f1a] transition-all flex items-center justify-center gap-2"
                  >
                    {formSubmitState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Verifying Credentials...
                      </>
                    ) : (
                      <>
                        Submit VIP Request <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#fbf8f3]/60 font-light">
                    * We treat client data with absolute privacy. No spam. Sited in Attapur, Hyderabad.
                  </p>
                </form>
              )}

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#021f1a] border-t-2 border-[#D4AF37] py-16 px-4 lg:px-12 text-[#fbf8f3]/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-light text-xs">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#053b31]">
                <Crown className="w-4 h-4 text-[#D4AF37] transform -rotate-45" />
              </div>
              <div>
                <span className="font-playfair font-black text-sm tracking-[0.2em] uppercase text-white block">D'LIFE</span>
                <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#D4AF37] block">INTERIORS HYD</span>
              </div>
            </div>
            <p className="leading-relaxed text-[#fbf8f3]/65 mt-2">
              India's most trusted interior designers, specializing in premium bespoke residential fitouts, hand-applied gold leaf gilding, and luxury materials.
            </p>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider mb-6">Curated Portfolios</h4>
            <ul className="space-y-3">
              <li><a href="#fitouts" onClick={() => setActiveTab('living')} className="hover:text-[#D4AF37] transition-colors">Living Chambers</a></li>
              <li><a href="#fitouts" onClick={() => setActiveTab('bedroom')} className="hover:text-[#D4AF37] transition-colors">Imperial Suites</a></li>
              <li><a href="#fitouts" onClick={() => setActiveTab('kitchen')} className="hover:text-[#D4AF37] transition-colors">Culinary Stages</a></li>
              <li><a href="#fitouts" onClick={() => setActiveTab('lounge')} className="hover:text-[#D4AF37] transition-colors">Private Lounges</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider mb-6">Contact Concierge</h4>
            <p className="leading-relaxed text-[#fbf8f3]/70 mb-3">
              Pillar 143, Main Ring Road,<br />
              Attapur, Hyderabad - 500048
            </p>
            <p className="hover:text-[#D4AF37] transition-colors">+91 91008 82345</p>
            <p className="hover:text-[#D4AF37] transition-colors mt-1">enquiry@dlifeinteriors-hyd.com</p>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider mb-6">Design Philosophy</h4>
            <p className="leading-relaxed text-[#fbf8f3]/65 mb-4">
              We stand against the ordinary. Our design language merges Art Deco symmetry with modern residential luxury.
            </p>
            <div className="flex gap-4">
              <span className="text-[#D4AF37] font-semibold">LinkedIn</span>
              <span className="text-[#D4AF37] font-semibold">Instagram</span>
              <span className="text-[#D4AF37] font-semibold">Pinterest</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#fbf8f3]/50">
          <span>&copy; {new Date().getFullYear()} D'LIFE Interiors Hyderabad. All rights reserved.</span>
          <span className="mt-2 sm:mt-0 uppercase tracking-widest text-[#D4AF37]/80">Attapur Niche Elite Design Atelier</span>
        </div>
      </footer>

    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Layers, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Gem, 
  Award, 
  Sliders,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function LuxeDesignsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('salons');
  const [openFaq, setOpenFaq] = useState(null);
  
  // Royal Fitting Room (Paneling Configurator) State
  const [panelStyle, setPanelStyle] = useState('boiserie'); // boiserie | bohemian | versailles
  const [trimAccent, setTrimAccent] = useState('champagne'); // champagne | bronze | ivory | oak
  const [layoutStyle, setLayoutStyle] = useState('multigrid'); // single | multigrid | wainscoting
  const [configuratorSaved, setConfiguratorSaved] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Penthouse',
    timeline: '3 Months',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const services = {
    salons: {
      title: "Grand Salons & Drawing Rooms",
      desc: "Stately drawing rooms designed to command presence. Featuring custom floor-to-ceiling wainscoting, hand-gilded French borders, integrated marble fireplaces, and custom velvet seating arranged in symmetrical classical harmony.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      accentTitle: "La Métropole Drawing Room",
      specs: [
        { label: "Woodwork", val: "Hand-sculpted HDMR plaster composite wainscoting" },
        { label: "Metal Inlays", val: "24k Champagne gold leafing & solid brass junctions" },
        { label: "Stone Focus", val: "Italian Calacatta Oro hearth with custom ogee edge" },
        { label: "Fabrication Time", val: "12 Weeks of artisanal detailing" }
      ]
    },
    chambers: {
      title: "Royal Master Chambers",
      desc: "Immersive private suites that blend French neoclassical panel layouts with premium modern comforts. Custom upholstered high-profile headboards, subtle warm-spectrum lighting, and bronze trims.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      accentTitle: "L'impératrice Master Suite",
      specs: [
        { label: "Headboard", val: "Tufted velvet paneling integrated with bronze sconces" },
        { label: "Wall Accents", val: "Boiserie panels with silk textile wallcoverings" },
        { label: "Storage", val: "Bronze-glass wardrobes with premium leather linings" },
        { label: "Ceiling", val: "Symmetrical plaster tray with hand-applied bronze powder" }
      ]
    },
    kitchens: {
      title: "Epicurean Kitchen & Dining",
      desc: "State-of-the-art culinary studios where neoclassical proportions meet professional German functionality. Double-ogee white marble counter islands, custom classical cabinet panels, and hidden appliance cabinets.",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80",
      accentTitle: "Le Petit Trianon Culinary Studio",
      specs: [
        { label: "Cabinetry", val: "Polyurethane lacquered classical five-piece shaker doors" },
        { label: "Countertops", val: "Polished Bianco Venato marble slabs with anti-stain seal" },
        { label: "Hardware", val: "Solid bronze handles and Blum soft-close mechanisms" },
        { label: "Lighting", val: "Symmetrical crystal drop pendants & warm task LEDs" }
      ]
    },
    closets: {
      title: "Couture Walk-in Wardrobes",
      desc: "Architectural dressing rooms configured to showcase your collection. Tinted bronze glass doors, customized slide-out jewelry trays, automated warm backlighting, and modular leather trim drawer units.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      accentTitle: "Le Dressing Classique",
      specs: [
        { label: "Glass Doors", val: "10mm Tempered glass in slim champagne gold aluminum frames" },
        { label: "Drawers", val: "Soft-touch velvet dividers and saddle-stitched leather faces" },
        { label: "Accessories", val: "Biometric watch-winder safe & pull-out styling mirror" },
        { label: "Wood Finish", val: "Stained French oak internal carcasses with high grain texture" }
      ]
    }
  };

  const configuratorStyles = {
    boiserie: {
      name: "Boiserie Classic",
      desc: "Traditional French double-molded plaster frames with perfect symmetrical proportions. Recreates the high-society salon look of 18th-century Paris.",
      addedCost: 0
    },
    bohemian: {
      name: "Parisian Modern",
      desc: "Slender, single-frame paneling with minimal detailing. A clean, light take on classical proportions suitable for modern high ceilings.",
      addedCost: 15000
    },
    versailles: {
      name: "Versailles Grande",
      desc: "Double plaster frames featuring ornate baroque corner carvings. Crafted for grand scale living rooms and statements of architectural opulence.",
      addedCost: 45000
    }
  };

  const configuratorTrims = {
    champagne: {
      name: "Champagne Gold Leaf",
      colorClass: "border-[#D4AF37]",
      accentBg: "bg-[#D4AF37]",
      costMultiplier: 1.25,
      desc: "Hand-applied 24k gold leafing with a brilliant satin luster."
    },
    bronze: {
      name: "Antique Bronze Trim",
      colorClass: "border-[#8C6D58]",
      accentBg: "bg-[#4A3B32]",
      costMultiplier: 1.15,
      desc: "Artisanal hand-brushed dark copper bronze for a quiet, understated wealth."
    },
    ivory: {
      name: "Ivory Lacquered Wood",
      colorClass: "border-[#F4EFE6]",
      accentBg: "bg-[#F4EFE6]",
      costMultiplier: 1.0,
      desc: "Monochromatic, paint-matched plaster trim providing subtle shadow-line luxury."
    },
    oak: {
      name: "Royal French Oak",
      colorClass: "border-[#B08D65]",
      accentBg: "bg-[#B08D65]",
      costMultiplier: 1.1,
      desc: "Natural-grain micro-trim frame inlay adding rustic French warmth."
    }
  };

  const configuratorLayouts = {
    single: {
      name: "Single Accent Frame",
      structureDesc: "One massive centered frame, ideal for highlighting master artworks, mirrors, or fabric-covered acoustic backdrops.",
      basePrice: 85000
    },
    multigrid: {
      name: "Multi-Grid Symphony",
      structureDesc: "A rhythmic grid of three vertical panels side-by-side. Provides structural depth and balance to long accent walls.",
      basePrice: 135000
    },
    wainscoting: {
      name: "Classic Wainscoting",
      structureDesc: "Split layout: molded horizontal chair-rail divider at 3 feet. Flat neoclassical panel grids below, luxury wallpaper above.",
      basePrice: 110000
    }
  };

  const faqs = [
    {
      q: "What defines the French Luxury & Neo-Classical style by Luxe Designs?",
      a: "Our aesthetic centers on neoclassical symmetry, elegant wall paneling (boiserie), and refined material selection. We steer clear of raw concrete or ultra-cold industrial layouts. Instead, we use warm, luxurious finishes: champagne gold leaf accents, premium marbles (like Calacatta Oro), and rich hand-crafted bronze details offset by marble-white backgrounds."
    },
    {
      q: "Do you offer full turnkey interior services in Attapur, Hyderabad?",
      a: "Yes. Luxe Designs & Spaces handles everything from architectural drawing, custom plaster panel modeling, local and imported furniture sourcing, lighting plans, electrical work, plumbing, and painting, through to custom styling and handovers. You only deal with one expert point of contact."
    },
    {
      q: "Where is your materials studio, and how can we select our stone and trims?",
      a: "Our private design experience lounge is located near Attapur Main Road. We schedule private, one-on-one appointments where clients can touch actual marble slabs, browse metallic leaf samples, and feel custom imported velvet and silk drapery fabrics."
    },
    {
      q: "What is the typical timeline for a luxury project handover?",
      a: "Neoclassical work is highly detailed, requiring artisanal precision. A premium 3 BHK or 4 BHK apartment fit-out in Attapur typically requires 10 to 14 weeks. This includes 3 weeks of custom panel fabrication and detailing in our controlled workshop before on-site assembly."
    },
    {
      q: "Are the custom panels moisture-resistant and durable under Hyderabad weather?",
      a: "Absolutely. We construct our wainscoting frames and panels using premium moisture-resistant high-density fiberboards (HDMR), which are pre-treated and sealed with layers of Italian polyurethane lacquer to prevent cracking, expanding, or peeling."
    }
  ];

  // Calculate pricing based on configurator selections
  const baseCost = configuratorLayouts[layoutStyle].basePrice;
  const styleExtra = configuratorStyles[panelStyle].addedCost;
  const trimMultiplier = configuratorTrims[trimAccent].costMultiplier;
  const calculatedCost = Math.round((baseCost + styleExtra) * trimMultiplier);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAFAFA] text-[#4A3B32] font-sans selection:bg-[#D4AF37] selection:text-white relative overflow-hidden">
      
      {/* Subtle Editorial Grid Lines (Decorative) */}
      <div className="absolute inset-0 grid grid-cols-4 lg:grid-cols-12 pointer-events-none opacity-[0.03] z-0">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-[#4A3B32]"></div>
        ))}
      </div>

      {/* Top Elite Notice Bar */}
      <div className="bg-[#1C1613] text-[#F5F2EB] py-3 px-6 text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase border-b border-[#D4AF37]/20 relative z-50">
        Private Architectural & Interior Commission • Serving Attapur & Jubilee Hills Estates
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#D4AF37]/10 px-6 py-5 lg:px-12 flex justify-between items-center relative z-50">
        <div className="flex flex-col">
          <span 
            className="text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase text-[#1C1613]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Luxe Designs
          </span>
          <span className="text-[9px] tracking-[0.5em] uppercase text-[#D4AF37] font-semibold mt-0.5">& Spaces • Hyderabad</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#4A3B32]">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">The Ethos</a>
          <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
          <a href="#fitting-room" className="hover:text-[#D4AF37] transition-colors">Fitting Room</a>
          <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Commissions</a>
          <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Faq</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] font-bold text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Request Brochure
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-1 text-[#1C1613] hover:text-[#D4AF37] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-30 bg-[#FAFAFA] border-t border-[#D4AF37]/10 flex flex-col justify-between p-8 animate-fadeIn duration-200">
          <div className="flex flex-col space-y-6 text-xs tracking-[0.25em] uppercase font-bold text-[#1C1613] pt-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-[#4A3B32]/10">The Ethos</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-[#4A3B32]/10">Portfolio</a>
            <a href="#fitting-room" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-[#4A3B32]/10">Fitting Room</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-[#4A3B32]/10">Commissions</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-[#4A3B32]/10">Faq</a>
          </div>
          <div className="pb-8">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="block text-center bg-[#D4AF37] text-white py-4 text-xs tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Request Brochure
            </a>
          </div>
        </div>
      )}

      {/* Section 1: Hero (Luxury Editorial Hero) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center border-b border-[#D4AF37]/15 py-12 lg:py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="flex items-center space-x-3">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Neoclassical Architecture & Spaces</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-wide text-[#1C1613] leading-[1.1]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Timeless Symmetry.<br />
              <span className="font-serif italic text-[#D4AF37]">French Luxury.</span>
            </h1>

            <p className="text-sm lg:text-base text-[#6B5A50] leading-relaxed max-w-xl font-sans">
              Luxe Designs & Spaces brings the regal opulence of Parisian salons to Hyderabad. 
              We craft exquisite residential estates in Attapur utilizing custom-molded plaster paneling, 
              champagne gold leaf finishes, and rich bronze hardware. Designed for the high-society lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-[#1C1613] hover:bg-[#D4AF37] text-white hover:text-white px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 text-center shadow-lg"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Secure Private Design Consultation
              </a>
              <a 
                href="#fitting-room" 
                className="border border-[#4A3B32]/30 hover:border-[#D4AF37] text-[#4A3B32] hover:text-[#D4AF37] px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 text-center bg-white/40"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Enter Fitting Room
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#4A3B32]/10 max-w-md">
              <div>
                <span className="block text-xl lg:text-2xl font-semibold text-[#1C1613] font-serif" style={{ fontFamily: 'var(--font-cinzel), serif' }}>80+</span>
                <span className="block text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold mt-1">Estates Handed Over</span>
              </div>
              <div>
                <span className="block text-xl lg:text-2xl font-semibold text-[#1C1613] font-serif" style={{ fontFamily: 'var(--font-cinzel), serif' }}>100%</span>
                <span className="block text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold mt-1">Turn-key Customization</span>
              </div>
              <div>
                <span className="block text-xl lg:text-2xl font-semibold text-[#1C1613] font-serif" style={{ fontFamily: 'var(--font-cinzel), serif' }}>5 Yr</span>
                <span className="block text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold mt-1">Artisanal Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white shadow-[#1C1613]/10">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
                alt="Neoclassical drawing room in Attapur villa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#D4AF37]/30 p-5 shadow-xl max-w-[190px] hidden sm:block">
              <span className="block text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold mb-1">Featured Estate</span>
              <span className="block text-xs font-serif font-semibold text-[#1C1613]">The Happy Homes Grand Residence, Attapur</span>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: About / Ethos */}
      <section id="about" className="py-20 bg-[#F5F2EB] border-b border-[#D4AF37]/15">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center space-y-6">
          <Gem className="h-8 w-8 text-[#D4AF37]" />
          <span className="text-[10px] lg:text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-bold">The French Art of Dwelling</span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1613] max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            "A home must have the elegance of a museum, and the soul of a sanctuary."
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] my-2"></div>
          <p className="text-sm lg:text-base text-[#6B5A50] leading-relaxed max-w-2xl font-sans">
            At Luxe Designs & Spaces, we believe modern minimalism often leaves spaces cold and anonymous. 
            We revive the rich architectural symmetry of French Neo-Classical aesthetics, 
            combining grand wainscoting grids with hand-brushed bronze finishes and luxury marble accents. 
            Every villa and luxury residence we design in Hyderabad is built to be a family legacy.
          </p>
        </div>
      </section>

      {/* Section 3: Services portfolio (using active tab state) */}
      <section id="portfolio" className="py-20 lg:py-28 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Curated Portfolios</span>
            <h2 
              className="text-3xl lg:text-5xl font-light text-[#1C1613]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Elite Residential Portfolios
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>

          {/* Elegant Serif Tabs */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-12 border-b border-[#4A3B32]/10 pb-6 max-w-3xl mx-auto">
            {Object.keys(services).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`text-xs tracking-[0.2em] uppercase font-bold pb-2 transition-all duration-300 ${
                  activeTab === tabKey 
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" 
                    : "text-[#6B5A50] hover:text-[#D4AF37]"
                }`}
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {tabKey === 'salons' && "Salons"}
                {tabKey === 'chambers' && "Chambers"}
                {tabKey === 'kitchens' && "Kitchens"}
                {tabKey === 'closets' && "Closets"}
              </button>
            ))}
          </div>

          {/* Active Tab Panel Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn duration-300">
            {/* Tab Image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#FAF6F0] border border-[#D4AF37]/25 shadow-xl relative group">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1C1613]/10 mix-blend-overlay"></div>
                <div className="absolute top-4 right-4 bg-[#1C1613] text-[#F5F2EB] text-[9px] tracking-[0.2em] uppercase py-1.5 px-3 font-semibold border border-[#D4AF37]/30">
                  {services[activeTab].accentTitle}
                </div>
              </div>
            </div>

            {/* Tab Details */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <h3 
                className="text-2xl lg:text-3.5xl font-light text-[#1C1613]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {services[activeTab].title}
              </h3>
              
              <p className="text-sm text-[#6B5A50] leading-relaxed font-sans">
                {services[activeTab].desc}
              </p>

              {/* Technical Specifications Table */}
              <div className="border-t border-[#4A3B32]/15 pt-4">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-bold mb-3">Artisanal Details</span>
                <dl className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 text-xs">
                  {services[activeTab].specs.map((spec, i) => (
                    <div key={i} className="border-b border-[#4A3B32]/10 pb-2">
                      <dt className="font-semibold text-[#1C1613] uppercase tracking-wider text-[10px]">{spec.label}</dt>
                      <dd className="text-[#6B5A50] mt-0.5">{spec.val}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Tab CTA */}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37] hover:text-[#1C1613] transition-colors"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Royal Fitting Room (bespoke paneling & layout configurator) */}
      <section id="fitting-room" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Visual Customization</span>
            <h2 
              className="text-3xl lg:text-5xl font-light text-[#1C1613]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              The Royal Fitting Room
            </h2>
            <p className="text-xs lg:text-sm text-[#6B5A50] max-w-xl leading-relaxed font-sans">
              Interact with our French Boiserie panel designer. Combine layout formats, molding trims, and metallic finishes to preview your neoclassical accent wall.
            </p>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Options Controls */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white border border-[#D4AF37]/20 p-6 sm:p-8 rounded-sm shadow-xl">
              <div className="space-y-6">
                
                {/* 1. Panel Style */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold mb-3">1. Mold Plaster Style</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.keys(configuratorStyles).map((styleKey) => (
                      <button
                        key={styleKey}
                        onClick={() => {
                          setPanelStyle(styleKey);
                          setConfiguratorSaved(false);
                        }}
                        className={`text-[10px] tracking-widest uppercase py-3 border font-semibold text-center transition-all ${
                          panelStyle === styleKey 
                            ? "border-[#D4AF37] bg-[#D4AF37]/5 text-[#1C1613] font-bold" 
                            : "border-[#4A3B32]/10 text-[#6B5A50] hover:border-[#D4AF37]/50"
                        }`}
                      >
                        {styleKey === 'boiserie' && "Classic"}
                        {styleKey === 'bohemian' && "Modern"}
                        {styleKey === 'versailles' && "Grande"}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#6B5A50] mt-2 leading-relaxed">
                    {configuratorStyles[panelStyle].desc}
                  </p>
                </div>

                {/* 2. Trim Accent */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold mb-3">2. Frame Accents & Trims</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.keys(configuratorTrims).map((trimKey) => (
                      <button
                        key={trimKey}
                        onClick={() => {
                          setTrimAccent(trimKey);
                          setConfiguratorSaved(false);
                        }}
                        className={`flex items-center space-x-2.5 p-2.5 border text-left transition-all ${
                          trimAccent === trimKey 
                            ? "border-[#D4AF37] bg-[#D4AF37]/5 text-[#1C1613] font-bold" 
                            : "border-[#4A3B32]/10 text-[#6B5A50] hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full ${configuratorTrims[trimKey].accentBg} border border-black/10 shrink-0`}></span>
                        <span className="text-[10px] tracking-wide uppercase font-semibold truncate">{configuratorTrims[trimKey].name}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#6B5A50] mt-2 leading-relaxed">
                    {configuratorTrims[trimAccent].desc}
                  </p>
                </div>

                {/* 3. Layout Style */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold mb-3">3. Wall Layout Structure</label>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.keys(configuratorLayouts).map((layoutKey) => (
                      <button
                        key={layoutKey}
                        onClick={() => {
                          setLayoutStyle(layoutKey);
                          setConfiguratorSaved(false);
                        }}
                        className={`flex justify-between items-center px-4 py-3 border text-left transition-all ${
                          layoutStyle === layoutKey 
                            ? "border-[#D4AF37] bg-[#D4AF37]/5 text-[#1C1613] font-bold" 
                            : "border-[#4A3B32]/10 text-[#6B5A50] hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <span className="text-[10px] tracking-widest uppercase font-semibold">{configuratorLayouts[layoutKey].name}</span>
                        <span className="text-[9px] tracking-wider text-[#D4AF37] uppercase font-bold">Base</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#6B5A50] mt-2 leading-relaxed font-sans">
                    {configuratorLayouts[layoutStyle].structureDesc}
                  </p>
                </div>

              </div>

              {/* Pricing & Custom Action */}
              <div className="pt-6 border-t border-[#4A3B32]/15 mt-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6B5A50]">Estimated Cost:</span>
                  <span className="text-lg font-serif font-bold text-[#1C1613]">
                    ₹{calculatedCost.toLocaleString('en-IN')}*
                  </span>
                </div>
                <p className="text-[9px] text-[#8C6D58] mb-4 font-sans leading-relaxed">
                  *Price includes custom plaster modeling, premium HDMR board fabrication, professional installation & hand painting on-site. Taxes extra.
                </p>

                <button
                  onClick={() => setConfiguratorSaved(true)}
                  className={`w-full text-center py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                    configuratorSaved 
                      ? "bg-emerald-800 text-white" 
                      : "bg-[#1C1613] hover:bg-[#D4AF37] text-white"
                  }`}
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {configuratorSaved ? "✓ Design Config Saved" : "Save Design to Consultation"}
                </button>
              </div>

            </div>

            {/* Right Interactive Visual Canvas Mockup */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAFAFA] border border-[#D4AF37]/15 rounded-sm p-6 sm:p-8 shadow-xl">
              
              {/* Visual Container */}
              <div className="flex-1 flex flex-col justify-center items-center py-8">
                
                {/* Simulated Wall */}
                <div className="w-full max-w-[440px] aspect-[16/10] bg-[#FAF8F5] border border-stone-300 rounded-sm shadow-inner relative flex flex-col justify-end p-4 transition-all overflow-hidden">
                  
                  {/* Decorative Baseboard */}
                  <div className="w-full h-4 bg-stone-200 border-t border-stone-300 absolute bottom-0 left-0 z-10 flex items-center justify-center">
                    <span className="text-[7px] text-stone-400 tracking-wider">Classical Baseboard</span>
                  </div>

                  {/* Render Paneling styles inside wall container */}
                  <div className="flex-1 w-full flex items-center justify-center pb-4">
                    
                    {/* Render: Single Panel Accent */}
                    {layoutStyle === 'single' && (
                      <div className={`w-[70%] h-[75%] border-2 ${configuratorTrims[trimAccent].colorClass} shadow-md flex items-center justify-center p-2 transition-all relative`}>
                        {/* If Boiserie or Versailles, double frame */}
                        {(panelStyle === 'boiserie' || panelStyle === 'versailles') && (
                          <div className={`w-[85%] h-[85%] border ${configuratorTrims[trimAccent].colorClass} border-dashed opacity-80 flex items-center justify-center relative`}>
                            {panelStyle === 'versailles' && (
                              <>
                                <span className={`absolute -top-1 -left-1 w-1.5 h-1.5 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                <span className={`absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                <span className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                <span className={`absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                              </>
                            )}
                          </div>
                        )}
                        <span className="text-[8px] text-stone-400 tracking-widest uppercase font-semibold">Art Focal Zone</span>
                      </div>
                    )}

                    {/* Render: Multi-Grid Symphony */}
                    {layoutStyle === 'multigrid' && (
                      <div className="w-full h-[75%] flex justify-center items-center space-x-3.5 px-4 transition-all">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`flex-1 h-full border-2 ${configuratorTrims[trimAccent].colorClass} shadow-sm flex items-center justify-center p-1 relative`}>
                            {(panelStyle === 'boiserie' || panelStyle === 'versailles') && (
                              <div className={`w-[85%] h-[85%] border ${configuratorTrims[trimAccent].colorClass} border-dashed opacity-80 relative`}>
                                {panelStyle === 'versailles' && (
                                  <>
                                    <span className={`absolute -top-0.5 -left-0.5 w-1 h-1 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                    <span className={`absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                    <span className={`absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                    <span className={`absolute -bottom-0.5 -right-0.5 w-1 h-1 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render: Classic Wainscoting */}
                    {layoutStyle === 'wainscoting' && (
                      <div className="w-full h-full flex flex-col justify-end transition-all">
                        {/* Upper Wall Wallpaper zone */}
                        <div className="flex-1 w-full bg-[#EAE3D2]/30 border-b border-stone-300 relative flex items-center justify-center">
                          <span className="text-[7px] text-[#8C6D58] tracking-[0.2em] uppercase font-bold">French Silk Wallpaper</span>
                        </div>
                        {/* Lower panel wainscot zone */}
                        <div className="h-[40%] w-full bg-[#FAF8F5] flex justify-center items-center space-x-3 px-6 py-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className={`flex-1 h-[80%] border ${configuratorTrims[trimAccent].colorClass} shadow-inner relative`}>
                              {panelStyle === 'versailles' && (
                                <span className={`absolute -top-0.5 -left-0.5 w-1 h-1 rounded-full ${configuratorTrims[trimAccent].accentBg}`}></span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>

              {/* Specifications Label */}
              <div className="border-t border-[#4A3B32]/10 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-wider uppercase font-bold text-[#6B5A50] justify-center lg:justify-between">
                <span>Layout: <strong className="text-[#1C1613]">{configuratorLayouts[layoutStyle].name}</strong></span>
                <span>Trim: <strong className="text-[#D4AF37]">{configuratorTrims[trimAccent].name}</strong></span>
                <span>Plaster: <strong className="text-[#1C1613]">{configuratorStyles[panelStyle].name}</strong></span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Signature Testimonials */}
      <section id="testimonials" className="py-20 lg:py-28 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-20">
            <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Client Attestations</span>
            <h2 
              className="text-3xl lg:text-5xl font-light text-[#1C1613]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              The Signature Commissions
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Testimonial 1 */}
            <div className="border border-[#D4AF37]/20 p-8 sm:p-10 bg-[#FAFAFA] flex flex-col justify-between rounded-sm shadow-md hover:shadow-xl transition-all duration-300 relative">
              <span className="text-6xl font-serif text-[#D4AF37]/15 absolute top-4 left-4 pointer-events-none">“</span>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-[#4A3B32] leading-relaxed italic font-serif">
                  "Luxe Designs transformed our penthouse in Attapur into a classical masterpiece. The plaster wainscoting feels so solid and matches the champagne gold detailing perfectly. The level of craftsmanship was astonishing—their carpenters spent two weeks just alignment checking the panels. Absolutely recommend their turn-key package."
                </p>
              </div>
              <div className="border-t border-[#4A3B32]/10 pt-6 mt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-bold text-[#1C1613]">Aditya & Ranjini Reddy</h4>
                  <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-semibold block mt-0.5">Penthouse Owner, Attapur</span>
                </div>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">Commission #4489</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-[#D4AF37]/20 p-8 sm:p-10 bg-[#FAFAFA] flex flex-col justify-between rounded-sm shadow-md hover:shadow-xl transition-all duration-300 relative">
              <span className="text-6xl font-serif text-[#D4AF37]/15 absolute top-4 left-4 pointer-events-none">“</span>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-[#4A3B32] leading-relaxed italic font-serif">
                  "I was initially worried that neoclassical design would look too heavy in a standard villa layout, but their French Boiserie configurator helped us visualize the scale. We chose the Parisian Modern style with custom bronze leafing. The spatial flow is airy and grand. A truly private and professional service."
                </p>
              </div>
              <div className="border-t border-[#4A3B32]/10 pt-6 mt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-bold text-[#1C1613]">Sanjay K. Vardhan</h4>
                  <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-semibold block mt-0.5">Villa Owner, Happy Homes Residence</span>
                </div>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">Commission #4212</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 6: FAQ (collapsible using state) */}
      <section id="faq" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Frequently Addressed Questions</span>
            <h2 
              className="text-3xl lg:text-4.5xl font-light text-[#1C1613]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Inquiries & Details
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#D4AF37]/20 bg-white rounded-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[#FAFAFA]/40 transition-colors"
                >
                  <span className="text-xs sm:text-sm tracking-wider font-bold text-[#1C1613] uppercase pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-4.5 w-4.5 text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B5A50] leading-relaxed border-t border-[#D4AF37]/10 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: Contact form (with loading/success state) */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Commission Dialogue</span>
            <h2 
              className="text-3xl lg:text-4.5xl font-light text-[#1C1613]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Secure Your Consultation
            </h2>
            <p className="text-xs lg:text-sm text-[#6B5A50] leading-relaxed font-sans max-w-lg">
              Begin a collaboration with our design office in Attapur. Please fill out the registry below and our design lead will contact you within 24 hours.
            </p>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>

          <div className="bg-white border border-[#D4AF37]/20 p-8 sm:p-10 shadow-2xl rounded-sm">
            {formStatus === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-scaleUp">
                <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1C1613] tracking-widest uppercase">Consultation Registered</h3>
                <p className="text-xs text-[#6B5A50] leading-relaxed max-w-sm mx-auto font-sans">
                  Thank you. A lead architect from Luxe Designs & Spaces Hyderabad will contact you on the provided number to schedule your private studio walk-through.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {configuratorSaved && (
                  <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/35 p-4 rounded-sm flex items-start space-x-3">
                    <Sparkles className="h-4.5 w-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] tracking-wider uppercase font-bold text-[#D4AF37]">Royal Fitting Room Design Saved</span>
                      <span className="block text-[10px] text-[#6B5A50] mt-0.5">
                        We have automatically attached your custom configuration: <strong>{configuratorLayouts[layoutStyle].name}</strong> in <strong>{configuratorTrims[trimAccent].name}</strong> with <strong>{configuratorStyles[panelStyle].name}</strong> plaster style.
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase font-bold text-[#1C1613] mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-[#FAFAFA] border border-[#4A3B32]/15 focus:border-[#D4AF37] px-4 py-3 text-xs tracking-wider outline-none text-[#1C1613] transition-colors"
                      placeholder="e.g. Sanjay Reddy"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase font-bold text-[#1C1613] mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-[#FAFAFA] border border-[#4A3B32]/15 focus:border-[#D4AF37] px-4 py-3 text-xs tracking-wider outline-none text-[#1C1613] transition-colors"
                      placeholder="e.g. +91 98660 70908"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase font-bold text-[#1C1613] mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-[#FAFAFA] border border-[#4A3B32]/15 focus:border-[#D4AF37] px-4 py-3 text-xs tracking-wider outline-none text-[#1C1613] transition-colors"
                      placeholder="e.g. sanjay@example.com"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase font-bold text-[#1C1613] mb-2">Property Type</label>
                    <select
                      value={formState.propertyType}
                      onChange={(e) => setFormState({...formState, propertyType: e.target.value})}
                      className="w-full bg-[#FAFAFA] border border-[#4A3B32]/15 focus:border-[#D4AF37] px-4 py-3 text-xs tracking-wider outline-none text-[#1C1613] transition-colors"
                    >
                      <option value="Villa">Premium Villa</option>
                      <option value="Penthouse">Elite Penthouse</option>
                      <option value="Luxury Apartment">3/4 BHK Luxury Apartment</option>
                      <option value="Commercial Suite">Bespoke Commercial Suite</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase font-bold text-[#1C1613] mb-2">Spatial Vision & Notes</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-[#FAFAFA] border border-[#4A3B32]/15 focus:border-[#D4AF37] px-4 py-3 text-xs tracking-wider outline-none text-[#1C1613] transition-colors resize-none"
                    placeholder="Tell us about your estate in Attapur, your layout style preferences, or custom requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#1C1613] hover:bg-[#D4AF37] text-white py-4 text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 disabled:opacity-50"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {formStatus === 'submitting' ? 'Submitting Registry...' : 'Submit Consultation Registry'}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* Section 8: Footer */}
      <footer className="bg-[#1C1613] text-[#F5F2EB]/95 border-t border-[#D4AF37]/25 relative z-10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#4A3B32]/35">
            
            {/* Branding Column */}
            <div className="md:col-span-5 flex flex-col space-y-6">
              <div>
                <span 
                  className="text-2xl font-bold tracking-[0.2em] uppercase text-white"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Luxe Designs
                </span>
                <span className="block text-[9px] tracking-[0.5em] uppercase text-[#D4AF37] font-semibold mt-1">& Spaces • Hyderabad</span>
              </div>
              <p className="text-xs text-[#9E8A7E] leading-relaxed max-w-sm">
                Dedicated to classical proportions, neoclassical craftsmanship, and turn-key French luxury. 
                Transforming the finest properties in Hyderabad into historic legacies.
              </p>
              <div className="flex space-x-4">
                <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">EST. 2018</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex flex-col space-y-4">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold">Studio Navigation</h4>
              <ul className="space-y-2 text-xs text-[#9E8A7E]">
                <li><a href="#about" className="hover:text-white transition-colors">The Ethos</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Residential Portfolio</a></li>
                <li><a href="#fitting-room" className="hover:text-white transition-colors">The Fitting Room</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Private Commissions</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Consultation Office</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-4 flex flex-col space-y-4">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold">Experience Lounge</h4>
              <ul className="space-y-3 text-xs text-[#9E8A7E]">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4.5 w-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>2nd Floor, Grand Plaza, Near Pillar 140, Attapur Main Road, Hyderabad, Telangana 500048</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4.5 w-4.5 text-[#D4AF37] shrink-0" />
                  <span>+91 98660 70908 / +91 40 4567 8901</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4.5 w-4.5 text-[#D4AF37] shrink-0" />
                  <span>info@luxedesigns.ltd</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright & Fine Print */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#8C7669] tracking-wider uppercase">
            <span>© {new Date().getFullYear()} Luxe Designs & Spaces. All Rights Reserved.</span>
            <span className="mt-4 sm:mt-0">Crafted under Neo-Classical & French design codes.</span>
          </div>

        </div>
      </footer>

    </div>
  );
}

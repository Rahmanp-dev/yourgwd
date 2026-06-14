'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Hammer, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Check, 
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

export default function MorphDesignPage() {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Living Room',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Active Portfolio Category State
  const [activeCategory, setActiveCategory] = useState('all');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: 'The Great Gatsby Lounge',
      category: 'living-room',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'A symmetrical living room featuring radial brass chandeliers, custom emerald velvet sofas, and black marble statement walls.',
      details: ['Handmade gold leaf ceilings', 'Custom chevron parquet', 'Restored 1920s fireplace']
    },
    {
      id: 2,
      title: 'Emerald Gastronomy Kitchen',
      category: 'modular-kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      description: 'Premium modular kitchen with lacquer-finished emerald cabinetry, ribbed gold handles, and Calacatta marble countertops.',
      details: ['Integrated Gaggenau appliances', 'Hidden pantry door', 'Satin gold faucet fixtures']
    },
    {
      id: 3,
      title: 'Metropolitan Brass Wardrobes',
      category: 'wardrobes',
      image: 'https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80',
      description: 'Floor-to-ceiling walk-in wardrobes with reeded glass panels, polished brass framing, and integrated velvet jewelry drawers.',
      details: ['Auto-sensor LED lighting', 'Aromatic cedar wood lining', 'Leather-wrapped handles']
    },
    {
      id: 4,
      title: 'Linear Art Deco Chandelier',
      category: 'lighting',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
      description: 'Custom lighting installation designed as an avant-garde geometric sculpture, utilizing hand-brushed brass and frosted glass tubes.',
      details: ['Triac dimmable control', '24k gold electroplating', 'Custom suspension height']
    },
    {
      id: 5,
      title: 'Monochromatic Geometric Foyer',
      category: 'living-room',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      description: 'An striking entrance foyer featuring high-contrast black and gold marble inlay flooring, and sunburst brass mirrors.',
      details: ['Polished Nero Marquina marble', 'Sunburst gold leaf detailing', 'Recessed cove illumination']
    },
    {
      id: 6,
      title: 'The Brass Accordion Pantry',
      category: 'modular-kitchen',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      description: 'Cleverly hidden kitchen pantry unit featuring bi-fold pocket doors with brass inlay and rich dark wood inner shelving.',
      details: ['Soft-close German hinges', 'Built-in spice racks', 'Integrated coffee station']
    }
  ];

  // Filtered portfolio
  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // FAQ data
  const faqData = [
    {
      question: 'What defines the Avant-Garde / Art Deco design style at Morph Design Co.?',
      answer: 'Our style is characterized by bold geometric shapes, rich colors like deep emerald green, high-contrast layouts, and luxurious metallic gold or brass details. We blend the historical opulence of the 1920s Art Deco movement with progressive, avant-garde design layouts to create bespoke, editorial-worthy spaces.'
    },
    {
      question: 'Do you offer custom furniture manufacturing?',
      answer: 'Yes, we design and fabricate all our furniture, including modular kitchens, bespoke wardrobes, lighting installations, and signature seating. Everything is crafted at our dedicated luxury carpentry units using premium materials like aromatic cedar, Italian marble, and electroplated gold brass.'
    },
    {
      question: 'What is the typical timeline for a luxury home interior project?',
      answer: 'A comprehensive project takes between 12 to 16 weeks. This includes the initial consultation (1-2 weeks), 3D design and materials selection (3-4 weeks), custom manufacturing in our off-site facility (4-6 weeks), and final installation/styling on-site (3-4 weeks).'
    },
    {
      question: 'How do you ensure quality and durability of the gold and metallic elements?',
      answer: 'We exclusively use PVD (Physical Vapor Deposition) coating and high-grade 24k electroplating for our metallic elements. This ensures they are tarnish-resistant, scratch-resistant, and retain their premium luster for decades without requiring high maintenance.'
    },
    {
      question: 'Can I choose a custom color palette other than emerald green and gold?',
      answer: 'Absolutely. While our signature style features deep emerald green and metallic gold, we customize palettes to fit our clients\' personality. Other favorite Art Deco pairings include rich navy & copper, obsidian black & satin silver, and plum velvet & antique bronze.'
    }
  ];

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Invalid phone number (minimum 10 digits)';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setFormSubmitted(true);
    }
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#04160E] text-[#F3EFE0] selection:bg-[#D4AF37] selection:text-[#04160E] relative overflow-hidden">
      
      {/* Background Geometric Line Art */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="deco-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="30" cy="30" r="15" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#D4AF37" strokeWidth="1" />
              <line x1="30" y1="0" x2="30" y2="60" stroke="#D4AF37" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-grid)" />
        </svg>
      </div>

      {/* Decorative Gold Header Bar */}
      <div className="w-full h-[6px] bg-gradient-to-r from-[#8C6D23] via-[#D4AF37] to-[#8C6D23] relative z-50"></div>

      {/* Header / Navigation */}
      <header className="relative z-40 border-b border-[#D4AF37]/20 bg-[#04160E]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Elegant Art Deco Logo Mark */}
            <div className="w-10 h-10 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center relative">
              <div className="absolute inset-1 border border-[#D4AF37] flex items-center justify-center">
                <span className="font-serif text-[#D4AF37] text-xl font-bold -rotate-45">M</span>
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl tracking-widest font-extrabold text-[#D4AF37] block">MORPH</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A85C] block -mt-1">Design Company</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#about" className="text-[#F3EFE0] hover:text-[#D4AF37] transition-colors relative group py-2">
              The Atelier
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#portfolio" className="text-[#F3EFE0] hover:text-[#D4AF37] transition-colors relative group py-2">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#process" className="text-[#F3EFE0] hover:text-[#D4AF37] transition-colors relative group py-2">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faq" className="text-[#F3EFE0] hover:text-[#D4AF37] transition-colors relative group py-2">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div>
            <a 
              href="#contact" 
              className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 text-xs tracking-widest uppercase font-semibold hover:bg-[#D4AF37] hover:text-[#04160E] transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">Consult Now</span>
              <span className="absolute inset-0 bg-[#D4AF37] scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 -z-0"></span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Bold Diagonal Skew Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 z-10 overflow-hidden">
        {/* Background Decorative Diagonal Panel */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[160%] bg-[#062014] rotate-12 transform origin-top-right border-l-2 border-[#D4AF37]/20 shadow-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#062014]/50 px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.2em] text-[#D4AF37] w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Avant-Garde Architectural Atelier</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
              Bespoke <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3EFE0] to-[#C5A85C]">
                Art Deco
              </span> <br />
              Interiors.
            </h1>

            <p className="text-lg md:text-xl text-[#F3EFE0]/80 font-light max-w-xl mb-10 leading-relaxed border-l-2 border-[#D4AF37] pl-6">
              We orchestrate spaces of dramatic luxury, integrating hand-cast brass geometries, rich emerald velvets, and striking diagonal planes. Made for individuals who view interior design as high art.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio" 
                className="bg-[#D4AF37] text-[#04160E] px-8 py-4 text-xs tracking-widest uppercase font-bold hover:bg-[#F3EFE0] hover:text-[#04160E] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="border border-[#F3EFE0]/40 text-[#F3EFE0] px-8 py-4 text-xs tracking-widest uppercase font-bold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-center"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Hero Image / Geometric Feature Frame */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Elegant Deco frame wrapper */}
            <div className="relative p-3 border border-[#D4AF37]/40">
              {/* Symmetrical corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] -mt-1 -ml-1"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] -mt-1 -mr-1"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] -mb-1 -ml-1"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] -mb-1 -mr-1"></div>

              <div className="aspect-[4/5] bg-emerald-950 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" 
                  alt="Luxurious Art Deco living space" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gold geometric overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04160E] via-transparent to-transparent opacity-65"></div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#062014] border border-[#D4AF37] p-5 hidden md:block">
              <div className="text-center">
                <span className="block font-serif text-3xl font-extrabold text-[#D4AF37]">12+</span>
                <span className="block text-[9px] uppercase tracking-widest text-[#F3EFE0]/60 mt-1">Design Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-[#D4AF37] text-[#04160E] py-4 overflow-hidden border-y border-[#D4AF37] relative z-20">
        <div className="flex whitespace-nowrap text-xs font-black tracking-[0.3em] uppercase animate-marquee">
          <span className="mx-8">Avant-Garde Architecture</span> • 
          <span className="mx-8">Art Deco Inlay</span> • 
          <span className="mx-8">Premium Emerald & Brass Carpentry</span> • 
          <span className="mx-8">Bespoke Modular Kitchens</span> • 
          <span className="mx-8">Custom Wardrobes</span> •
          <span className="mx-8">Luxury Lighting Installations</span> •
          <span className="mx-8">Avant-Garde Architecture</span> • 
          <span className="mx-8">Art Deco Inlay</span> • 
          <span className="mx-8">Premium Emerald & Brass Carpentry</span>
        </div>
      </div>

      {/* Section: About Us (The Atelier) */}
      <section id="about" className="py-24 relative z-10 border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Collage */}
            <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
              <div className="col-span-12 border border-[#D4AF37]/30 p-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                    alt="Luxury Material Palette" 
                    className="w-full h-full object-cover filter brightness-90 contrast-110"
                  />
                </div>
              </div>
              <div className="col-span-6 border border-[#D4AF37]/30 p-2 -mt-8 relative z-20 bg-[#04160E]">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" 
                    alt="Polished Gold Handles" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-6 border border-[#D4AF37]/30 p-2 -mt-4 bg-[#04160E]">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&q=80" 
                    alt="Deco Light fixture detail" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">The Atelier</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-black mb-8 leading-tight">
                Where Geometric Rigor <br />
                Meets Dramatic Elegance
              </h2>

              <div className="space-y-6 text-[#F3EFE0]/80 font-light leading-relaxed text-base">
                <p>
                  Founded on the principles of the early 20th-century French salons, Morph Design Co. rejects standard contemporary minimalism. We believe design should be an experience of absolute theater and grandeur.
                </p>
                <p>
                  Every space we shape features customized carpentry manufactured in our dedicated facility, ensuring perfect alignment of veneers, brass moldings, and velvet paneling.
                </p>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#D4AF37]">Uncompromising Crafts</h4>
                    <p className="text-xs text-[#F3EFE0]/70 mt-1 leading-normal">
                      We utilize age-old lacquer polishing and premium brass PVD coating techniques.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center flex-shrink-0 mt-1">
                    <Compass className="w-5 h-5 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#D4AF37]">Avant-Garde Geometry</h4>
                    <p className="text-xs text-[#F3EFE0]/70 mt-1 leading-normal">
                      Our signature layouts emphasize bold chevrons, diagonal thresholds, and symmetrical frames.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#D4AF37]">Bespoke Furniture</h4>
                    <p className="text-xs text-[#F3EFE0]/70 mt-1 leading-normal">
                      Each wardrobe, lighting system, and modular kitchen is designed entirely from scratch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#D4AF37]">Lifetime Integrity</h4>
                    <p className="text-xs text-[#F3EFE0]/70 mt-1 leading-normal">
                      We offer a 10-year warranty on modular structural hardware and specialized installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: Services Portfolio */}
      <section id="portfolio" className="py-24 bg-[#051c12] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Services Portfolio</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-black">
                Signature Spaces & Furniture
              </h2>
            </div>
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-8 md:mt-0 border-b border-[#D4AF37]/20 pb-2">
              {['all', 'living-room', 'modular-kitchen', 'wardrobes', 'lighting'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300 border ${
                    activeCategory === cat 
                      ? 'bg-[#D4AF37] text-[#04160E] border-[#D4AF37]' 
                      : 'border-transparent text-[#F3EFE0]/60 hover:text-[#D4AF37]'
                  }`}
                >
                  {cat.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id} 
                className="group border border-[#D4AF37]/20 hover:border-[#D4AF37]/65 transition-all duration-500 bg-[#04160E]/50 flex flex-col h-full"
              >
                {/* Image Frame */}
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-[#D4AF37]/20">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-95"
                  />
                  <div className="absolute top-4 right-4 bg-[#04160E] border border-[#D4AF37]/40 px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-[#D4AF37]">
                    {item.category.replace('-', ' ')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#F3EFE0]/70 font-light mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative Deco list */}
                  <ul className="border-t border-[#D4AF37]/20 pt-4 space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-[#C5A85C]">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section: Design Process */}
      <section id="process" className="py-24 relative z-10 overflow-hidden">
        {/* Bold Diagonal Accents inside Process Section */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
          <div className="w-[200%] h-[200%] bg-gradient-to-tr from-[#D4AF37] via-transparent to-transparent -rotate-12 transform -translate-x-1/4 -translate-y-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">The Method</span>
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black">
              The Journey of Creation
            </h2>
            <p className="text-[#F3EFE0]/70 font-light mt-4 text-sm tracking-wide">
              Crafting premium spaces requires strict architectural discipline. Here is how we turn your vision into an editorial legacy.
            </p>
          </div>

          {/* Process Timeline Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="border border-[#D4AF37]/30 p-8 relative bg-[#04160E]/80 backdrop-blur-sm group hover:border-[#D4AF37] transition-all duration-300">
              <div className="absolute -top-12 -left-4 font-serif text-[120px] font-black text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none">
                01
              </div>
              <div className="w-12 h-12 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center mb-8 bg-[#04160E]">
                <Compass className="w-5 h-5 text-[#D4AF37] -rotate-45" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#D4AF37]">Consultation & Plan</h3>
              <p className="text-sm text-[#F3EFE0]/80 font-light leading-relaxed mb-6">
                We sit down at our atelier to understand your structural requirements, palette preferences, and desired aesthetic weight. We establish a custom-tailored blueprint.
              </p>
              <ul className="space-y-2 text-xs text-[#F3EFE0]/60">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span>On-site layout measurements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span>Exclusive mood boards matching your persona</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="border border-[#D4AF37]/30 p-8 relative bg-[#04160E]/80 backdrop-blur-sm group hover:border-[#D4AF37] transition-all duration-300">
              <div className="absolute -top-12 -left-4 font-serif text-[120px] font-black text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none">
                02
              </div>
              <div className="w-12 h-12 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center mb-8 bg-[#04160E]">
                <Layers className="w-5 h-5 text-[#D4AF37] -rotate-45" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#D4AF37]">Bespoke 3D Design</h3>
              <p className="text-sm text-[#F3EFE0]/80 font-light leading-relaxed mb-6">
                Our design architects draft intricate photorealistic renders. You approve every veneer, marble block vein, lighting lumen capacity, and gold inlay layout.
              </p>
              <ul className="space-y-2 text-xs text-[#F3EFE0]/60">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span>360-degree interactive VR walk-throughs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span>Detailed material specification contracts</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="border border-[#D4AF37]/30 p-8 relative bg-[#04160E]/80 backdrop-blur-sm group hover:border-[#D4AF37] transition-all duration-300">
              <div className="absolute -top-12 -left-4 font-serif text-[120px] font-black text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none">
                03
              </div>
              <div className="w-12 h-12 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center mb-8 bg-[#04160E]">
                <Hammer className="w-5 h-5 text-[#D4AF37] -rotate-45" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#D4AF37]">Atelier Execution</h3>
              <p className="text-sm text-[#F3EFE0]/80 font-light leading-relaxed mb-6">
                We manufacture the customized modular layouts in our factory and execute the installation on-site under strict supervision by elite project managers.
              </p>
              <ul className="space-y-2 text-xs text-[#F3EFE0]/60">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span>German machinery-based precision cuts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span>Rigid 150-point final quality audit</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="py-24 bg-[#051c12] relative z-10 border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Attestation</span>
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black">
              Client Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Testimonial 1 */}
            <div className="border border-[#D4AF37]/20 p-8 bg-[#04160E] relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]/40"></div>
              <div className="text-[#D4AF37] text-4xl font-serif mb-4">“</div>
              <p className="text-base text-[#F3EFE0]/95 font-light leading-relaxed mb-6 italic">
                “We wanted a dining hall that felt like high editorial styling and Art Deco grandeur. Morph Design Co. delivered a work of absolute art. The custom gold-inlaid cabinets and deep emerald green walls are a marvel. Our guests are always stunned.”
              </p>
              <div className="border-t border-[#D4AF37]/20 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#D4AF37]">Vikram & Shravya Reddy</h4>
                  <p className="text-xs text-[#F3EFE0]/60 uppercase tracking-wider mt-1">Jubilee Hills, Hyderabad</p>
                </div>
                <div className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                  10,000 Sq.Ft Penthouse
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-[#D4AF37]/20 p-8 bg-[#04160E] relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]/40"></div>
              <div className="text-[#D4AF37] text-4xl font-serif mb-4">“</div>
              <p className="text-base text-[#F3EFE0]/95 font-light leading-relaxed mb-6 italic">
                “Our experience with Morph was seamless. Their custom wardrobes with reeded glass and modular kitchen setups are extremely high performance yet maintain an avant-garde, premium look. The 10-year warranty gives complete peace of mind.”
              </p>
              <div className="border-t border-[#D4AF37]/20 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#D4AF37]">Dr. Ananya Sen</h4>
                  <p className="text-xs text-[#F3EFE0]/60 uppercase tracking-wider mt-1">Gachibowli luxury Villa</p>
                </div>
                <div className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                  Premium Villa Suite
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Inquiries</span>
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-[#D4AF37]/20 bg-[#04160E] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-[#051c12]/50 transition-colors"
                >
                  <span className="font-serif text-lg font-bold text-[#F3EFE0] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#D4AF37] transform transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-[500px] border-t border-[#D4AF37]/20' : 'max-h-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <div className="p-6 text-sm text-[#F3EFE0]/80 font-light leading-relaxed bg-[#051c12]/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section: Contact Form */}
      <section id="contact" className="py-24 bg-[#051c12] relative z-10 border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Initiation</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Commission <br />Our Services
                </h2>
                <p className="text-sm text-[#F3EFE0]/70 font-light leading-relaxed max-w-sm mb-10">
                  Ready to elevate your home? Fill in the consultation sheet, and our chief avant-garde designer will connect with you to plan an exclusive design blueprint.
                </p>
              </div>

              <div className="space-y-6 border-t border-[#D4AF37]/20 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#F3EFE0]/50">The Atelier Location</span>
                    <span className="block text-sm text-[#F3EFE0] font-medium mt-0.5">Jubilee Hills, Road No. 36, Hyderabad</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#F3EFE0]/50">Telephone</span>
                    <span className="block text-sm text-[#F3EFE0] font-medium mt-0.5">+91 98480 22338</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#D4AF37] -rotate-45" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#F3EFE0]/50">Official Email</span>
                    <span className="block text-sm text-[#F3EFE0] font-medium mt-0.5">atelier@morphdesign.co</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7 border border-[#D4AF37]/30 p-8 bg-[#04160E] relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] -mt-1 -mr-1"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] -mb-1 -ml-1"></div>

              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center mb-8 bg-[#051c12]">
                    <Check className="w-8 h-8 text-[#D4AF37] -rotate-45 animate-pulse" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#D4AF37] mb-4">Consultation Registered</h3>
                  <p className="text-sm text-[#F3EFE0]/80 max-w-md leading-relaxed mb-8">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your premium design request is received. Our chief coordinator will dial you at <strong className="text-white">{formData.phone}</strong> within 24 business hours to schedule your VIP session.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Living Room', message: '' });
                    }}
                    className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 text-xs tracking-widest uppercase font-semibold hover:bg-[#D4AF37] hover:text-[#04160E] transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                        Your Full Name
                      </label>
                      <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Reddy"
                        className="w-full bg-[#051c12] border border-[#D4AF37]/35 text-[#F3EFE0] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#F3EFE0]/30"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                        Telephone Number
                      </label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98480 22338"
                        className="w-full bg-[#051c12] border border-[#D4AF37]/35 text-[#F3EFE0] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#F3EFE0]/30"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@reddyholdings.com"
                        className="w-full bg-[#051c12] border border-[#D4AF37]/35 text-[#F3EFE0] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#F3EFE0]/30"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                        Preferred Space / Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#051c12] border border-[#D4AF37]/35 text-[#F3EFE0] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="Living Room">Living Room Interior</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Wardrobes">Walk-in Wardrobes</option>
                        <option value="Lighting">Bespoke Lighting Plan</option>
                        <option value="Full Villa">Full Home Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                      Brief Design Brief / Custom Requirements
                    </label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your requirements (e.g. High-contrast brass trims, emerald velvet panels, Calacatta kitchen counter...)"
                      className="w-full bg-[#051c12] border border-[#D4AF37]/35 text-[#F3EFE0] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#F3EFE0]/30 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#04160E] py-4 text-xs tracking-widest uppercase font-bold hover:bg-[#F3EFE0] transition-all duration-300"
                  >
                    Submit Premium Consultation Request
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 py-12 relative z-10 bg-[#03110a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center relative">
              <span className="font-serif text-[#D4AF37] text-sm font-bold -rotate-45">M</span>
            </div>
            <div>
              <span className="font-serif text-lg tracking-widest font-extrabold text-[#D4AF37] block">MORPH</span>
              <span className="text-[7px] uppercase tracking-[0.3em] text-[#C5A85C] block -mt-1">Design Company</span>
            </div>
          </div>

          <div className="text-center md:text-right font-light text-[#F3EFE0]/50 text-xs">
            <p>© 2026 Morph Design Co. All rights reserved.</p>
            <p className="mt-1">Crafting Avant-Garde legacies globally. All components manufactured in-house.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

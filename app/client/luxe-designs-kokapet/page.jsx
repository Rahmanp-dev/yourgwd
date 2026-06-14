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
  Hammer 
} from 'lucide-react';

export default function LuxeDesignsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Villa',
    budget: '50L - 1Cr',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error

  const services = [
    {
      title: "Grand Living Suites",
      desc: "Stately drawing rooms featuring hand-sculpted French wall paneling, custom-cut Calacatta marble fireplaces, rich bronze crown molding, and bespoke velvet upholstery tailored to classical proportions.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      features: ["Custom French Wall Paneling", "Italian Calacatta Marble Fireplace", "Champagne Gold Inlays", "Handmade Gilt Wood Mirrors"]
    },
    {
      title: "Epicurean Modular Kitchens",
      desc: "State-of-the-art culinary spaces with rich wood cabinetry, integrated bronze handles, custom stone islands, and built-in premium German appliances hidden behind neo-classical panel facades.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      features: ["Solid Oak Carcasses", "Concealed Smart Appliance Bays", "Double-Ogee Marble Countertops", "Solid Brass Hardware"]
    },
    {
      title: "Couture Wardrobes & Closets",
      desc: "Spacious walk-in closets with bronze-tinted glass doors, plush leather drawer fronts, velvet-lined jewelry pullouts, and soft-spectrum LED lighting designed to highlight your collection.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      features: ["Tinted Bronze Temper Glass", "Full-Grain Leather Facing", "Automated Ambient Backlighting", "Biometric Security Safe Integration"]
    },
    {
      title: "Architectural Lighting & Gilt",
      desc: "Curated lighting design integrating high-CRI recessed spotlights, hand-crafted crystal chandeliers from Murano, and rich bronze wall sconces placed to accent neoclassical sculpture niches.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      features: ["Custom Murano Glass Fixtures", "Layered High-CRI System Design", "Champagne Gold Leaf Finishing", "Smart Home Scene Automation"]
    }
  ];

  const processSteps = [
    {
      num: "I",
      title: "Curated Consultation",
      desc: "A private, in-depth architectural dialogue mapping your aesthetic preferences, functional lifestyle requirements, and spatial vision for your Kokapet estate."
    },
    {
      num: "II",
      title: "Bespoke Artistry",
      desc: "Crafting highly detailed 3D spatial models, exact material boards (showcasing marble slabs, metallic gold swatches, and silk textures), and detailed layout blueprints."
    },
    {
      num: "III",
      title: "Flawless Execution",
      desc: "Our master craftsmen, stone masons, and project managers oversee every millimeter of progress, ensuring a precise and seamless turn-key handover."
    }
  ];

  const FAQs = [
    {
      q: "What defines the Neo-Classical Elegance / French Luxury style?",
      a: "Neoclassical interior design emphasizes clean, classical lines, symmetry, and proportional balance, combined with the opulence of French luxury. We utilize champagne gold (#D4AF37) trims, rich bronze fittings, marble floors, and sophisticated wall paneling, avoiding over-cluttered modern aesthetics in favor of a timeless, grand editorial feel."
    },
    {
      q: "Do you offer full turn-key design and execution in Kokapet?",
      a: "Yes. Luxe Designs provides a comprehensive, end-to-end service including site assessment, spatial planning, 3D visualizations, material procurement, master carpentry, electrical planning, and final execution/styling. You only receive the keys to a ready-to-live-in masterpiece."
    },
    {
      q: "Where do you source your luxury marbles and metals from?",
      a: "We directly import our marble slabs (including Calacatta Oro, Carrara, and Emperador Dark) from Italy and Spain. All champagne gold trims and bronze details are custom-extruded and hand-polished by our specialty metallic fabrication partners to guarantee exact color consistency."
    },
    {
      q: "Can we visit current projects under execution in Kokapet?",
      a: "To protect the privacy of our premium clientele, we do not arrange public walkthroughs of occupied residences. However, we can schedule private visits to select villas currently under active fit-out stage in premium Kokapet enclaves."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      // Simulate successful submission
      setFormStatus('success');
    }, 1200);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FCFAF6] text-[#2C2520] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Top Elite Bar */}
      <div className="bg-[#1C1613] text-[#FAF6F0] py-2 px-6 text-center text-xs tracking-[0.25em] uppercase border-b border-[#D4AF37]/20">
        Private Interior Architecture Studio • Serving Kokapet's Finest Estates
      </div>

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-[#D4AF37]/10 px-6 py-5 lg:px-12 flex justify-between items-center transition-all">
        <div className="flex flex-col">
          <span 
            className="text-2xl lg:text-3xl font-bold tracking-[0.15em] uppercase text-[#1C1613]"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Luxe Designs
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mt-0.5">Kokapet</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-medium">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">Our Ethos</a>
          <a href="#services" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-[#D4AF37] transition-colors">The Process</a>
          <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Stories</a>
          <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Faq</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase px-7 py-3 transition-all duration-300"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Secure Consultation
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-1 text-[#1C1613] hover:text-[#D4AF37] transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-[#FCFAF6] border-t border-[#D4AF37]/10 flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex flex-col space-y-6 text-sm tracking-[0.2em] uppercase font-semibold">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-gray-100">Our Ethos</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-gray-100">Portfolio</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-gray-100">The Process</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-gray-100">Stories</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] py-2 border-b border-gray-100">Faq</a>
          </div>
          <div className="pt-6">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="block text-center bg-[#D4AF37] text-white py-4 text-sm tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Secure Consultation
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-[#D4AF37]/15">
        {/* Editorial Grid Backing */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-5">
          <div className="col-span-3 border-r border-[#D4AF37]"></div>
          <div className="col-span-3 border-r border-[#D4AF37]"></div>
          <div className="col-span-3 border-r border-[#D4AF37]"></div>
          <div className="col-span-3"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="flex items-center space-x-3">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              <span className="text-xs lg:text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">French Luxury Interiors</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-[#1C1613] tracking-normal"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Bespoke <span className="text-[#D4AF37] italic font-serif">Neo-Classical</span> Artistry
            </h1>

            <p 
              className="text-lg lg:text-xl text-[#524335] leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Imbue your residence with European symmetry, hand-gilded champagne gold accents, rich bronze carvings, and natural imported marbles. Tailored exclusively for Kokapet's premium enclaves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-[#1C1613] hover:bg-[#D4AF37] text-white px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold text-center transition-all duration-300 shadow-xl"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Request Private View
              </a>
              <a 
                href="#services" 
                className="border border-[#1C1613]/20 hover:border-[#D4AF37] px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold text-center transition-all duration-300 text-[#1C1613] hover:text-[#D4AF37]"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Explore Selected Works
              </a>
            </div>

            {/* Subtle Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#D4AF37]/10 max-w-lg">
              <div>
                <span className="block text-2xl lg:text-3xl font-bold text-[#1C1613]" style={{ fontFamily: 'var(--font-cinzel)' }}>40+</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mt-1">Villas Styled</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-bold text-[#1C1613]" style={{ fontFamily: 'var(--font-cinzel)' }}>Italy</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mt-1">Direct Import</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-bold text-[#1C1613]" style={{ fontFamily: 'var(--font-cinzel)' }}>100%</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mt-1">Bespoke Fit</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden bg-gray-200 border-2 border-[#D4AF37]/30 p-2 bg-[#FCFAF6] shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Neo-Classical living room interior" 
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#1C1613]/90 text-white p-6 border-l-2 border-[#D4AF37] backdrop-blur-sm">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-1">Featured Salon</span>
                <span className="text-sm tracking-wide font-medium block" style={{ fontFamily: 'var(--font-cinzel)' }}>The French Salon at Kokapet Villa 09</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Our Ethos) */}
      <section id="about" className="py-24 bg-[#FAF7F0] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 border border-[#D4AF37]/20 relative">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" 
                  alt="Fine plaster molding detailing" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 border border-[#D4AF37]/20 mt-12 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" 
                  alt="Neoclassical dining details" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="flex items-center space-x-3">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Our Ethos & Heritage</span>
              </div>

              <h2 
                className="text-3xl lg:text-5xl font-bold text-[#1C1613] tracking-normal"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Restoring the Grandeur of <span className="italic font-serif text-[#D4AF37]">Classical Order</span>
              </h2>

              <p 
                className="text-lg text-[#524335] leading-relaxed"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Luxe Designs was founded on a simple realization: modern minimalism often strips homes of their warmth, heritage, and character. We design spaces that honor classical symmetry, rich materials, and intricate artisan detailing.
              </p>

              <p className="text-sm text-[#615349] leading-relaxed font-sans font-light">
                By carefully balancing French neoclassicism with state-of-the-art home automation, our studio creates luxurious, high-end environments. We construct structures in Kokapet that speak of architectural integrity. Every ceiling medallion, bronze molding, and book-matched marble floor is designed individually, sourced globally, and executed flawlessly.
              </p>

              {/* Three Pillared Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col space-y-2 border-t border-[#D4AF37]/20 pt-4">
                  <div className="flex items-center space-x-2 text-[#D4AF37]">
                    <Gem className="h-4 w-4" />
                    <span className="text-xs tracking-[0.15em] uppercase font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>Symmetry</span>
                  </div>
                  <p className="text-xs text-[#7A6C62]">Perfect spatial proportions aligned to historical mathematical order.</p>
                </div>
                <div className="flex flex-col space-y-2 border-t border-[#D4AF37]/20 pt-4">
                  <div className="flex items-center space-x-2 text-[#D4AF37]">
                    <Award className="h-4 w-4" />
                    <span className="text-xs tracking-[0.15em] uppercase font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>Noble Materials</span>
                  </div>
                  <p className="text-xs text-[#7A6C62]">Calacatta gold marble, pure brass, hand-finished bronze, fine silks.</p>
                </div>
                <div className="flex flex-col space-y-2 border-t border-[#D4AF37]/20 pt-4">
                  <div className="flex items-center space-x-2 text-[#D4AF37]">
                    <Hammer className="h-4 w-4" />
                    <span className="text-xs tracking-[0.15em] uppercase font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>Mastery</span>
                  </div>
                  <p className="text-xs text-[#7A6C62]">Craftsmanship that achieves millimetric accuracy in millwork and gilding.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Portfolio (Tabs or Details Showcase) */}
      <section id="services" className="py-24 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Specialized Portfolio</span>
            <h2 
              className="text-3xl lg:text-5xl font-bold text-[#1C1613]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Curated Interior Architectural Offerings
            </h2>
            <p className="text-[#524335] max-w-xl text-sm tracking-wide font-sans font-light">
              Explore our core pillars of luxury custom fabrication and interior design, tailored for upscale properties.
            </p>
          </div>

          {/* Interactive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left selector */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              {services.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`text-left p-6 border-l-2 transition-all ${
                    activeService === idx 
                      ? 'border-[#D4AF37] bg-[#FAF6F0] text-[#1C1613]' 
                      : 'border-transparent text-[#7A6C62] hover:bg-gray-50'
                  }`}
                >
                  <span className="block text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] mb-1 font-semibold">0{idx + 1}. Niche Selection</span>
                  <span 
                    className="text-lg font-bold tracking-wider"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right details with image and animation */}
            <div className="lg:col-span-8 bg-[#FAF7F0] border border-[#D4AF37]/20 p-8 lg:p-12 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[420px]">
              <div className="md:col-span-6 flex flex-col space-y-6">
                <h3 
                  className="text-2xl font-bold text-[#1C1613] tracking-wide"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {services[activeService].title}
                </h3>
                <p 
                  className="text-base text-[#524335] leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {services[activeService].desc}
                </p>
                <ul className="space-y-2.5 pt-2">
                  {services[activeService].features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center space-x-3 text-xs text-[#615349] font-medium font-sans">
                      <Check className="h-4 w-4 text-[#D4AF37]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-6 relative">
                <div className="aspect-[4/3] overflow-hidden border border-[#D4AF37]/10 bg-gray-200">
                  <img 
                    src={services[activeService].image} 
                    alt={services[activeService].title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="process" className="py-24 bg-[#FAF7F0] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">The Blueprint to Perfection</span>
            <h2 
              className="text-3xl lg:text-5xl font-bold text-[#1C1613]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              The Neoclassical Process
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Background connection line */}
            <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-[1px] bg-[#D4AF37]/20 z-0"></div>

            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#FCFAF6] border border-[#D4AF37]/20 p-8 relative z-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="w-16 h-16 rounded-full border border-[#D4AF37] bg-[#FCFAF6] flex items-center justify-center text-xl font-bold text-[#D4AF37] mb-6 shadow-md"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {step.num}
                </div>
                <h3 
                  className="text-lg font-bold text-[#1C1613] tracking-wider mb-4"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#615349] leading-relaxed font-sans font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Elite Appraisals</span>
            <h2 
              className="text-3xl lg:text-5xl font-bold text-[#1C1613]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Stories of Transformed Spaces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-[#FAF7F0] border border-[#D4AF37]/20 p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p 
                  className="text-lg text-[#2C2520] italic leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  "Luxe Designs brought a level of French sophistication that we didn't think possible in Hyderabad. The gold panel gilding and custom Murano chandeliers are spectacular."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/10 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#1C1613] text-[#FAF6F0] flex items-center justify-center font-bold text-xs uppercase" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  SR
                </div>
                <div>
                  <span className="block text-xs tracking-wider uppercase font-bold text-[#1C1613]">Srinivas Rao</span>
                  <span className="block text-[9px] uppercase tracking-widest text-[#D4AF37] mt-0.5">Kokapet Villa Owner</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAF7F0] border border-[#D4AF37]/20 p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p 
                  className="text-lg text-[#2C2520] italic leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  "Their modular kitchen layout represents a perfect synthesis of classical elegance and functional automation. The Calacatta bookmatched marble island is the absolute showpiece of our home."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/10 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#1C1613] text-[#FAF6F0] flex items-center justify-center font-bold text-xs uppercase" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  AP
                </div>
                <div>
                  <span className="block text-xs tracking-wider uppercase font-bold text-[#1C1613]">Ananya Reddy</span>
                  <span className="block text-[9px] uppercase tracking-widest text-[#D4AF37] mt-0.5">Luxury Penthouse Resident</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FAF7F0] border border-[#D4AF37]/20 p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p 
                  className="text-lg text-[#2C2520] italic leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  "We appreciated the transparency of their design timeline. The finished neoclassical wood molding and integrated warm LED lighting schemes make the master suite feel like a Ritz-Carlton hotel."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/10 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#1C1613] text-[#FAF6F0] flex items-center justify-center font-bold text-xs uppercase" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  KV
                </div>
                <div>
                  <span className="block text-xs tracking-wider uppercase font-bold text-[#1C1613]">Karan Varma</span>
                  <span className="block text-[9px] uppercase tracking-widest text-[#D4AF37] mt-0.5">High-end Builder</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FAF7F0] border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Queries Answered</span>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#1C1613]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Frequently Clarified Policies
            </h2>
          </div>

          <div className="space-y-4">
            {FAQs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#D4AF37]/20 bg-[#FCFAF6] shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span 
                    className="text-base font-bold text-[#1C1613] tracking-wide"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-[#D4AF37] transition-transform duration-300 ${openFaq === idx ? 'transform rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#615349] leading-relaxed font-sans font-light animate-slideDown">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form & Studio Info */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Studio Engagement</span>
                </div>
                
                <h2 
                  className="text-3xl lg:text-5xl font-bold text-[#1C1613] tracking-normal"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  Initiate Your Spatial <span className="italic font-serif text-[#D4AF37]">Metamorphosis</span>
                </h2>

                <p 
                  className="text-base text-[#524335] leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Schedule an exclusive, private walkthrough at our design lounge or coordinate a preliminary consultation session directly at your property site in Kokapet.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-4 text-[#615349]">
                    <div className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+91 91234 56789</span>
                  </div>
                  <div className="flex items-center space-x-4 text-[#615349]">
                    <div className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>concierge@luxedesignskokapet.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-[#615349]">
                    <div className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>Gold Pavilion, Narsingi-Kokapet Main Road, Hyderabad, 500075</span>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-[#D4AF37]/10 hidden lg:block">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62]">Office Hours</span>
                <span className="block text-xs font-semibold text-[#1C1613] mt-1">Mon — Sat: 10:00 AM — 07:00 PM (By Appointment Only)</span>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7 bg-[#FAF7F0] border border-[#D4AF37]/20 p-8 lg:p-12 shadow-2xl relative">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] space-y-6">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-[#1C1613] tracking-wide"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    Consultation Scheduled
                  </h3>
                  <p className="text-[#615349] max-w-sm text-sm leading-relaxed">
                    Your request has been registered in our private system. A design concierge will call you on your provided number within 24 business hours to finalize the schedule.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-[#D4AF37] border-b border-[#D4AF37] hover:text-[#1C1613] hover:border-[#1C1613] transition-colors uppercase text-xs tracking-wider font-semibold pt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 
                    className="text-xl lg:text-2xl font-bold text-[#1C1613] tracking-wide border-b border-[#D4AF37]/20 pb-4 mb-8"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    Private Consultation Request
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62] font-semibold">Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="bg-[#FCFAF6] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none p-3 text-sm transition-colors"
                        placeholder="E.g., Raja Shekhar"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62] font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="bg-[#FCFAF6] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none p-3 text-sm transition-colors"
                        placeholder="E.g., rajashekhar@outlook.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62] font-semibold">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        className="bg-[#FCFAF6] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none p-3 text-sm transition-colors"
                        placeholder="E.g., +91 99887 76655"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62] font-semibold">Property Niche</label>
                      <select 
                        value={formState.propertyType}
                        onChange={(e) => setFormState({...formState, propertyType: e.target.value})}
                        className="bg-[#FCFAF6] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none p-3 text-sm transition-colors"
                      >
                        <option value="Villa">Premium Villa</option>
                        <option value="Penthouse">Luxury Penthouse</option>
                        <option value="Duplex">Duplex Residence</option>
                        <option value="Custom Room">Custom Room / Salon</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62] font-semibold">Expected Budget Range</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['25L - 50L', '50L - 1Cr', '1Cr+'].map((budgetOption) => (
                        <button
                          key={budgetOption}
                          type="button"
                          onClick={() => setFormState({...formState, budget: budgetOption})}
                          className={`p-3 text-xs tracking-wider border font-semibold uppercase transition-all ${
                            formState.budget === budgetOption 
                              ? 'bg-[#1C1613] text-white border-[#1C1613]' 
                              : 'bg-[#FCFAF6] text-[#615349] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                          }`}
                        >
                          {budgetOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#7A6C62] font-semibold">Your Vision Details</label>
                    <textarea 
                      rows="4" 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="bg-[#FCFAF6] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none p-3 text-sm transition-colors"
                      placeholder="Outline any design specifics (e.g. wall panels, bronze fittings, modular kitchen needs)..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#1C1613] hover:bg-[#D4AF37] text-[#FAF6F0] py-4 text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-xl flex items-center justify-center space-x-3"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {formStatus === 'submitting' ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Private Request</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1613] text-[#FAF6F0] border-t border-[#D4AF37]/20 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#FAF6F0]/10 pb-12">
          
          <div className="md:col-span-5 flex flex-col space-y-4">
            <span className="text-xl font-bold tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-cinzel)' }}>Luxe Designs</span>
            <span className="text-xs text-[#D4AF37] tracking-[0.3em] uppercase">Neo-Classical French Luxury Interiors</span>
            <p className="text-xs text-[#A29A93] leading-relaxed max-w-sm pt-2">
              Transforming upscale Hyderabad properties with classical balance, handcrafted bronze elements, and champagne gold moldings.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-cinzel)' }}>Navigations</span>
            <div className="flex flex-col space-y-2 text-xs text-[#A29A93]">
              <a href="#about" className="hover:text-white transition-colors">Our Ethos</a>
              <a href="#services" className="hover:text-white transition-colors">Selected Work</a>
              <a href="#process" className="hover:text-white transition-colors">Design Blueprint</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonies</a>
              <a href="#faq" className="hover:text-white transition-colors">Queries</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-cinzel)' }}>Kokapet Lounge</span>
            <p className="text-xs text-[#A29A93] leading-relaxed">
              Gold Pavilion, Narsingi-Kokapet Main Road,<br />
              Hyderabad, Telangana, 500075
            </p>
            <p className="text-xs text-[#A29A93] pt-2">
              Private Lounge Line: +91 91234 56789
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#7A6C62] tracking-wider uppercase">
          <span>&copy; {new Date().getFullYear()} Luxe Designs Studio. All Rights Reserved.</span>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

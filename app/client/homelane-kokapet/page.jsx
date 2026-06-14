"use client";

import React, { useState } from 'react';
import { 
  Leaf, 
  Smile, 
  Heart, 
  Sliders, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Compass, 
  Clock 
} from 'lucide-react';

export default function HomeLanePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('kitchen');
  const [openFaq, setOpenFaq] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: 'Modular Kitchen',
    preferredWood: 'Light White Oak',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error

  const services = {
    kitchen: {
      title: "Sage & Oak Modular Kitchens",
      desc: "An ergonomic culinary workspace designed for peak functionality. Featuring custom modular cabinets in a soft sage green finish, integrated solid white oak open shelving, soft-close hardware, and scratch-resistant quartz countertops.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      features: ["German-engineered soft-close hinges", "Solid light white oak accent shelving", "Spacious pull-out pantry layout", "Anti-fingerprint matte polymer fronts"]
    },
    living: {
      title: "Airy Nordic Living Zones",
      desc: "Light-filled lounge designs focusing on comfortable, organic layouts. Custom oak wood TV backdrops, floating consoles, modular linen sofas, and integrated planters that invite the outdoors inside.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      features: ["Bespoke white oak media console", "Integrated organic indoor planters", "Linen-textured modular furnishings", "Soft ambient hidden LED warm lighting"]
    },
    wardrobe: {
      title: "Hygge Walk-in Closets",
      desc: "Organized storage spaces prioritizing visual quietness. Floor-to-ceiling wardrobes featuring light oak finishes, sliding doors, custom accessory slots, and built-in laundry baskets.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      features: ["Dust-proof sliding door tracks", "Integrated modular accessory drawers", "Premium light oak grain finish", "Pull-out full-length dressing mirrors"]
    },
    lighting: {
      title: "Natural & Layered Lighting",
      desc: "Lighting plans that mimic soft natural light. Combining large paper lanterns, minimalist wooden floor lamps, and high-efficiency dimmable warm ceiling fixtures to create a cozy, welcoming atmosphere.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      features: ["Dimmable architectural spotlights", "FSC-certified wood pendant shades", "Warm 2700K cozy color profile", "Smart home scene controllers"]
    }
  };

  const steps = [
    {
      title: "Collaborative Listening",
      desc: "We host a cozy design session at our Kokapet lounge to discuss your routines, storage needs, and stylistic preferences over hot coffee."
    },
    {
      title: "Interactive Detail Planning",
      desc: "We generate complete 3D layouts, allowing you to walk through your virtual kitchen or wardrobe and select precise oak laminates and sage finishes."
    },
    {
      title: "Precision Modular Fitting",
      desc: "All components are pre-fabricated in our state-of-the-art facility and assembled at your home in Kokapet within 45 days, guaranteed."
    }
  ];

  const faqs = [
    {
      q: "What makes Scandinavian design unique for modern apartments?",
      a: "Scandinavian interior design focuses on minimalism, practicality, and a connection to nature. We utilize warm light oak wood tones, off-white backgrounds (#FAFAFA), and forest green/sage accents. This creates a visually calm, uncluttered home environment that maximizes natural light and space."
    },
    {
      q: "Do you offer a warranty on modular products?",
      a: "Yes, HomeLane Kokapet provides a comprehensive 10-year warranty on all modular woodwork (including kitchens, wardrobes, and living room cabinets) against manufacturing defects, bubbling, and hardware wear."
    },
    {
      q: "Can we mix sage green accents with other wood finishes?",
      a: "Absolutely. While we recommend warm light white oak or natural pine for a true Scandinavian palette, you can choose from a curated range of ash, light beech, or natural maple wood finishes to customize your space."
    },
    {
      q: "Is the 45-day delivery promise applicable to all Kokapet properties?",
      a: "Yes, our 45-day delivery promise is backed by a penalty clause: if we do not complete installation within 45 days of design sign-off, we pay you rent for every day of delay. This applies to all premium apartments and villas in the Kokapet area."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FAFAFA] text-[#2C3330] font-sans selection:bg-[#4E6E58] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#4E6E58] text-[#FAFAFA] py-2 px-6 text-center text-xs tracking-wider font-medium rounded-b-xl max-w-7xl mx-auto">
        🌱 Eco-friendly Materials & 45-Day Delivery Guarantee in Kokapet
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 lg:px-12 flex justify-between items-center sticky top-0 bg-[#FAFAFA]/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#4E6E58] flex items-center justify-center text-white">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span 
              className="text-xl font-bold tracking-tight text-[#2C3330]" 
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              HomeLane
            </span>
            <span className="text-[10px] tracking-widest text-[#4E6E58] uppercase font-semibold">Kokapet Studio</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-[#5A6360]">
          <a href="#about" className="hover:text-[#4E6E58] transition-colors">Our Story</a>
          <a href="#portfolio" className="hover:text-[#4E6E58] transition-colors">Modular Systems</a>
          <a href="#process" className="hover:text-[#4E6E58] transition-colors">The Journey</a>
          <a href="#testimonials" className="hover:text-[#4E6E58] transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-[#4E6E58] transition-colors">Faq</a>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="bg-[#4E6E58] hover:bg-[#2E5A44] text-[#FAFAFA] font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center space-x-2"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            <span>Book Free Design Session</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-2 text-[#2C3330] hover:text-[#4E6E58] transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-[#FAFAFA] p-6 border-t border-gray-100 flex flex-col justify-between shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-5 text-base font-semibold text-[#2C3330]">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#4E6E58] py-2 border-b border-gray-100">Our Story</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-[#4E6E58] py-2 border-b border-gray-100">Modular Systems</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:text-[#4E6E58] py-2 border-b border-gray-100">The Journey</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-[#4E6E58] py-2 border-b border-gray-100">Testimonials</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#4E6E58] py-2 border-b border-gray-100">Faq</a>
          </div>
          <div className="pb-6">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-[#4E6E58] text-[#FAFAFA] py-4 rounded-full font-bold text-sm"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Book Free Design Session
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#EAEFEA] text-[#2E5A44] px-4 py-1.5 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2E5A44] animate-ping"></span>
              <span>Scandinavian Simplicity</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C3330] leading-none"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Functional Beauty.<br />
              <span className="text-[#4E6E58]">Organic Living.</span>
            </h1>

            <p 
              className="text-lg text-[#5A6360] leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              We craft minimalist interior spaces focused on warm light oak wood textures, soothing sage green accents, and modular ergonomics. Tailored for comfort and modern life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact" 
                className="bg-[#4E6E58] hover:bg-[#2E5A44] text-white px-8 py-4 rounded-full text-sm font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Start Your Design Consultation
              </a>
              <a 
                href="#portfolio" 
                className="border border-gray-300 hover:border-[#4E6E58] hover:text-[#4E6E58] px-8 py-4 rounded-full text-sm font-bold text-center transition-all duration-300 text-[#5A6360]"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Browse Modular Ranges
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-md">
              <div>
                <span className="block text-2xl font-bold text-[#2C3330]" style={{ fontFamily: 'var(--font-jakarta)' }}>150+</span>
                <span className="block text-xs text-[#5A6360] mt-1">Homes Fitted</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#2C3330]" style={{ fontFamily: 'var(--font-jakarta)' }}>45 Days</span>
                <span className="block text-xs text-[#5A6360] mt-1">Delivery SLA</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#2C3330]" style={{ fontFamily: 'var(--font-jakarta)' }}>10 Yrs</span>
                <span className="block text-xs text-[#5A6360] mt-1">Wood Warranty</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 border-[10px] border-[#FAF4EE] shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80" 
                alt="Bright minimalist Scandinavian kitchen and dining room" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-xs font-semibold text-[#4E6E58] flex items-center space-x-1.5">
                <Smile className="h-4 w-4" />
                <span>Featured Cozy Space</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Our Story) */}
      <section id="about" className="py-20 bg-[#FAF4EE] rounded-3xl max-w-7xl mx-auto my-12 px-6 lg:px-12 border border-[#E8DCD0]/35">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border-4 border-white shadow-xl max-w-[280px] z-10 relative">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" 
                alt="Light white oak wood cabinet texture" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border-4 border-white shadow-xl max-w-[240px] absolute -right-2 top-24 z-0 opacity-80 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" 
                alt="Cozy Nordic kitchen styling" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#4E6E58]">
              <Heart className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Our Story & Design Values</span>
            </div>

            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#2C3330] tracking-tight"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Making Space for What Matters: <span className="text-[#4E6E58] italic font-medium">Lagom Living</span>
            </h2>

            <p 
              className="text-base text-[#5A6360] leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              In Sweden, 'Lagom' means 'not too little, not too much. Just enough.' We design spaces that honor this philosophy. We create homes that provide practical solutions without cluttering your daily routines.
            </p>

            <p className="text-sm text-[#5A6360] leading-relaxed">
              HomeLane Kokapet brings sustainable, responsibly sourced European oak and pine finishes to local homeowners. By matching high-capacity modular cabinets with warm timber and botanical sage tones, we turn plain flats into tranquil sanctuaries that resist wear and tear.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#2C3330] block" style={{ fontFamily: 'var(--font-jakarta)' }}>Eco-Friendly Wood</span>
                <p className="text-xs text-[#5A6360]">FSC-certified pine and oak with low-VOC emission coatings.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#2C3330] block" style={{ fontFamily: 'var(--font-jakarta)' }}>Ergonomic Flow</span>
                <p className="text-xs text-[#5A6360]">Modular layouts designed for minimum reach and strain.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#2C3330] block" style={{ fontFamily: 'var(--font-jakarta)' }}>Maximum Storage</span>
                <p className="text-xs text-[#5A6360]">Smart pull-outs and hidden corners that utilize every inch.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Portfolio (Tabbed Interface) */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <span className="text-xs tracking-wider uppercase text-[#4E6E58] font-bold">Modular Offerings</span>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#2C3330]"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            Spacious Scandinavian Modules
          </h2>
          <p className="text-[#5A6360] max-w-md text-sm">
            Select a category to preview our design guidelines, features, and materials.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                activeTab === key 
                  ? 'bg-[#4E6E58] text-white shadow-md' 
                  : 'bg-white text-[#5A6360] border border-gray-200 hover:border-gray-300'
              }`}
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {key === 'kitchen' && 'Modular Kitchen'}
              {key === 'living' && 'Living Zone'}
              {key === 'wardrobe' && 'Hygge Wardrobe'}
              {key === 'lighting' && 'Natural Lighting'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#FAF4EE]/70 rounded-3xl p-6 lg:p-10 border border-[#E8DCD0]/30 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[400px]">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 
              className="text-2xl font-bold text-[#2C3330] tracking-tight"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {services[activeTab].title}
            </h3>
            <p 
              className="text-sm text-[#5A6360] leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {services[activeTab].desc}
            </p>
            <div className="space-y-2">
              {services[activeTab].features.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-[#2C3330] font-medium font-sans">
                  <div className="w-5 h-5 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#2E5A44]">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
              <img 
                src={services[activeTab].image} 
                alt={services[activeTab].title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>

      </section>

      {/* Design Process */}
      <section id="process" className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs tracking-wider uppercase text-[#4E6E58] font-bold">The Journey Plan</span>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#2C3330]"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              How We Create Your Scandinavian Home
            </h2>
            <p className="text-sm text-[#5A6360] max-w-sm">
              Our 3-step design-to-build pipeline ensures clear communication and quality checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF4EE]/40 border border-[#E8DCD0]/20 p-8 rounded-2xl flex flex-col space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-[#EAEFEA] text-[#2E5A44] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#4E6E58]">Phase 0{idx + 1}</span>
                </div>
                <h3 
                  className="text-lg font-bold text-[#2C3330]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-[#5A6360] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-xs tracking-wider uppercase text-[#4E6E58] font-bold">Client Joys</span>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#2C3330]"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            Hygge Spaces in Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Testimonial 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative">
            <div className="space-y-4">
              <div className="flex text-[#4E6E58] space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="text-sm text-[#2C3330] leading-relaxed italic">
                "We wanted a clean kitchen with no handles and lots of wood accents. HomeLane Kokapet delivered this. The oak paneling and sage finishes are beautifully calm."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#EAEFEA] text-[#2E5A44] flex items-center justify-center font-bold text-xs uppercase">
                MK
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2C3330]">Madhav Krishnan</span>
                <span className="block text-[10px] text-[#5A6360]">Kokapet Resident</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative">
            <div className="space-y-4">
              <div className="flex text-[#4E6E58] space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="text-sm text-[#2C3330] leading-relaxed italic">
                "The 45-day guarantee was what convinced us. True to their word, the modular cabinets were installed on time. The oak wood textures are outstanding."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#EAEFEA] text-[#2E5A44] flex items-center justify-center font-bold text-xs uppercase">
                SN
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2C3330]">Sanya Nair</span>
                <span className="block text-[10px] text-[#5A6360]">Apartment Owner</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative">
            <div className="space-y-4">
              <div className="flex text-[#4E6E58] space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="text-sm text-[#2C3330] leading-relaxed italic">
                "Their design software is amazing. We adjusted the height of shelves in the pantry, and chose the exact shade of sage green. Highly professional execution."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#EAEFEA] text-[#2E5A44] flex items-center justify-center font-bold text-xs uppercase">
                RR
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2C3330]">Rohan Reddy</span>
                <span className="block text-[10px] text-[#5A6360]">Gated Villa Resident</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FAF4EE]/50 border-t border-b border-[#E8DCD0]/20">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="text-xs tracking-wider uppercase text-[#4E6E58] font-bold">Got Questions?</span>
            <h2 
              className="text-3xl font-bold text-[#2C3330]"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Common Queries Answered
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span 
                    className="text-sm font-bold text-[#2C3330] tracking-tight"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-[#4E6E58] transition-transform duration-300 ${openFaq === idx ? 'transform rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs text-[#5A6360] leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form & Studio Details */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#4E6E58]">
                <Leaf className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Start Co-Designing</span>
              </div>
              
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[#2C3330] tracking-tight"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Plan Your Warm <span className="text-[#4E6E58] italic font-medium">Nordic Sanctuary</span>
              </h2>

              <p 
                className="text-sm text-[#5A6360] leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Stop by our Kokapet design showroom to touch and feel our white oak wood surfaces, check sliding mechanisms, and inspect cabinet hinges in person.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-center space-x-3 text-[#5A6360]">
                  <div className="w-7 h-7 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#4E6E58]">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <span>+91 99887 66554</span>
                </div>
                <div className="flex items-center space-x-3 text-[#5A6360]">
                  <div className="w-7 h-7 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#4E6E58]">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span>kokapet@homelane.com</span>
                </div>
                <div className="flex items-center space-x-3 text-[#5A6360]">
                  <div className="w-7 h-7 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#4E6E58]">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <span>Second Floor, Pine Plaza, Kokapet Circle, Hyderabad, 500075</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs">
              <span className="text-[10px] uppercase font-bold text-[#5A6360]">Studio Timing</span>
              <span className="block font-semibold text-[#2C3330] mt-1">Open Daily: 11:00 AM — 08:30 PM</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#FAF4EE] rounded-3xl p-8 lg:p-12 border border-[#E8DCD0]/35 shadow-xl">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EAEFEA] text-[#2E5A44] flex items-center justify-center text-xl">
                  <Check className="h-6 w-6" />
                </div>
                <h3 
                  className="text-xl font-bold text-[#2C3330]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Consultation Booked!
                </h3>
                <p className="text-xs text-[#5A6360] max-w-xs leading-relaxed">
                  Thank you. A modular consultant from our Kokapet showroom will contact you shortly to schedule your design layout session.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-xs text-[#4E6E58] border-b border-[#4E6E58] hover:text-[#2E5A44] hover:border-[#2E5A44] font-bold tracking-wider uppercase pt-4"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 
                  className="text-lg font-bold text-[#2C3330] border-b border-gray-200 pb-3"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Schedule Your Free Session
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold text-[#5A6360] uppercase">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="bg-white rounded-xl border border-gray-200 focus:border-[#4E6E58] focus:outline-none p-3 text-xs"
                      placeholder="E.g., Arjun K."
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold text-[#5A6360] uppercase">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="bg-white rounded-xl border border-gray-200 focus:border-[#4E6E58] focus:outline-none p-3 text-xs"
                      placeholder="E.g., arjun@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold text-[#5A6360] uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="bg-white rounded-xl border border-gray-200 focus:border-[#4E6E58] focus:outline-none p-3 text-xs"
                      placeholder="E.g., +91 98765 43210"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold text-[#5A6360] uppercase">Modular Interest</label>
                    <select 
                      value={formState.areaOfInterest}
                      onChange={(e) => setFormState({...formState, areaOfInterest: e.target.value})}
                      className="bg-white rounded-xl border border-gray-200 focus:border-[#4E6E58] focus:outline-none p-3 text-xs"
                    >
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Hygge Wardrobe">Walk-in Wardrobe</option>
                      <option value="Living Area">Living Media Zone</option>
                      <option value="Full Home">Full Home Scandinavian Fit-out</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-bold text-[#5A6360] uppercase">Preferred Finish</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Light White Oak', 'Sage Matte', 'Natural Pine'].map((woodOption) => (
                      <button
                        key={woodOption}
                        type="button"
                        onClick={() => setFormState({...formState, preferredWood: woodOption})}
                        className={`py-2 px-3 text-[10px] font-bold rounded-lg border uppercase tracking-wider transition-all ${
                          formState.preferredWood === woodOption 
                            ? 'bg-[#4E6E58] text-white border-[#4E6E58]' 
                            : 'bg-white text-[#5A6360] border-gray-200 hover:border-[#4E6E58]'
                        }`}
                      >
                        {woodOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-bold text-[#5A6360] uppercase">Message / Requirements</label>
                  <textarea 
                    rows="3" 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="bg-white rounded-xl border border-gray-200 focus:border-[#4E6E58] focus:outline-none p-3 text-xs"
                    placeholder="E.g., modular kitchen with sage green cabinets, and two floor-to-ceiling oak wardrobes..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#4E6E58] hover:bg-[#2E5A44] text-[#FAFAFA] py-3.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {formStatus === 'submitting' ? (
                    <span>Scheduling Consultation...</span>
                  ) : (
                    <>
                      <span>Secure Free Session</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3330] text-[#FAFAFA] py-16 px-6 lg:px-12 rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#FAFAFA]/10 pb-12">
          
          <div className="md:col-span-5 flex flex-col space-y-3">
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-jakarta)' }}>HomeLane Kokapet</span>
            <span className="text-xs text-[#4E6E58] font-bold uppercase tracking-wider">Minimalist Scandinavian Living</span>
            <p className="text-xs text-[#A2A9A6] leading-relaxed max-w-sm pt-2">
              Transforming modern apartments with lagom design principles, sustainable white oak woods, and modular green cabinetry.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs tracking-wider uppercase font-bold text-[#4E6E58]" style={{ fontFamily: 'var(--font-jakarta)' }}>Explorer</span>
            <div className="flex flex-col space-y-2 text-xs text-[#A2A9A6]">
              <a href="#about" className="hover:text-white transition-colors">Our Story</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Modular Systems</a>
              <a href="#process" className="hover:text-white transition-colors">The Journey</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-xs tracking-wider uppercase font-bold text-[#4E6E58]" style={{ fontFamily: 'var(--font-jakarta)' }}>Kokapet Showroom</span>
            <p className="text-xs text-[#A2A9A6] leading-relaxed">
              Second Floor, Pine Plaza, Kokapet Circle,<br />
              Hyderabad, Telangana, 500075
            </p>
            <p className="text-xs text-[#A2A9A6] pt-1">
              Contact: +91 99887 66554
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#818985] uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} HomeLane Kokapet Franchise. All Rights Reserved.</span>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Work</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

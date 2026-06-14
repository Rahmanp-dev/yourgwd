"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Droplet, 
  Star, 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Check, 
  ChevronDown, 
  Award, 
  Eye, 
  MessageSquare, 
  Info,
  Menu,
  X,
  Gauge,
  Flame,
  Wrench,
  ThumbsUp
} from 'lucide-react';

export default function DetailingMafiaAttapur() {
  const [activeFinish, setActiveFinish] = useState('stealth'); // 'gloss', 'stealth', 'chrome'
  const [activeGalleryTab, setActiveGalleryTab] = useState('all'); // 'all', 'ppf', 'ceramic'
  const [galleryCompare, setGalleryCompare] = useState({}); // id -> 'before' or 'after'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const finishes = {
    gloss: {
      name: "High-Gloss Mirror PPF",
      tagline: "Ultra-reflective glass shine with advanced self-healing paint protection.",
      color: "from-zinc-900 to-zinc-700",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
      specs: { selfHealing: 85, gloss: 98, hydrophobic: 90, warranty: "10 Years" },
      carColor: "#18181b",
      reflectionGradients: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)"
    },
    stealth: {
      name: "Satin Stealth Matte PPF",
      tagline: "Transform glossy paint into an aggressive, velvet satin matte finish.",
      color: "from-neutral-800 to-zinc-950",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.35)]",
      specs: { selfHealing: 95, gloss: 30, hydrophobic: 95, warranty: "12 Years" },
      carColor: "#09090b",
      reflectionGradients: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(255,255,255,0.02) 60%, rgba(239,68,68,0.15) 100%)"
    },
    chrome: {
      name: "Liquid Metal Ceramic Shield",
      tagline: "Dual-layer 10H Nanoceramic for deep candy-wet reflections.",
      color: "from-purple-950 to-rose-950",
      glow: "shadow-[0_0_25px_rgba(239,68,68,0.35)]",
      specs: { selfHealing: 50, gloss: 100, hydrophobic: 98, warranty: "5 Years" },
      carColor: "#2e1065",
      reflectionGradients: "linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(168,85,247,0.3) 50%, rgba(255,255,255,0.1) 100%)"
    }
  };

  const services = [
    {
      title: "Self-Healing PPF (TPU)",
      desc: "Optically clear, high-elastomer TPU shield that heals micro-scratches under direct heat. Industry-leading resistance to rock chips, swirl marks, road salt, and harsh Hyderabad sun.",
      highlight: "Self-Healing | 10-12 Yrs Warranty",
      price: "From ₹69,999",
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      title: "10H Nanoceramic Coating",
      desc: "Permanent carbon-bond quartz shielding. Super-hydrophobic surface with >110° water contact angle, meaning mud slides right off. Deep, candy-like gloss index that never needs waxing.",
      highlight: "10H Hardness | 3-5 Yrs Warranty",
      price: "From ₹18,999",
      icon: <Droplet className="w-8 h-8 text-rose-500" />
    },
    {
      title: "Mafia Interior Bespoke",
      desc: "Complete deep cabin decontamination. Leather pH stabilization, Alcantara dry shampooing, carbon fiber element polishing, and full HVAC ozone sterilization for a sterile, fresh cabin.",
      highlight: "99.9% Decontamination",
      price: "From ₹5,999",
      icon: <Sparkles className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Windshield & Glass Armor",
      desc: "Extreme weather nanoprotection for front, side, and rear glass. Hydrophobic barrier drastically improves night driving visibility during monsoon rains and prevents hard water scaling.",
      highlight: "Optically Clear | Anti-Glare",
      price: "From ₹3,999",
      icon: <Eye className="w-8 h-8 text-rose-400" />
    },
    {
      title: "Alloy Wheel & Caliper Shield",
      desc: "Ultra-high temperature quartz coating applied to wheel faces and brake calipers. Repels highly corrosive brake dust, asphalt, and grime. Makes washing wheels a breeze.",
      highlight: "800°C Heat Resistance",
      price: "From ₹4,999",
      icon: <Gauge className="w-8 h-8 text-purple-500" />
    }
  ];

  const packages = [
    {
      name: "Mafia Gold Package",
      type: "Ceramic Coating",
      warranty: "3 Years Warranty",
      price: "₹18,999",
      popular: false,
      features: [
        "1 Layer of 9H Nano-Quartz Base",
        "1 Layer of Hydrophobic Gloss Top Coat",
        "Deep Multi-Stage Paint Correction (Eco-wash + Clay Bar + Compound)",
        "Premium Trim & Plastics Protection",
        "1 Free Renewal Inspection at 12 Months"
      ],
      cta: "Book Gold Shield"
    },
    {
      name: "Mafia Executive 10H",
      type: "Ceramic + Glass + Wheels",
      warranty: "5 Years Warranty",
      price: "₹29,999",
      popular: true,
      features: [
        "2 Layers of 10H Certified Nanoceramic Shield",
        "Full Exterior Glass Armor Rain Protection",
        "High-Heat Alloy Wheel & Caliper Ceramic Coating",
        "3-Stage Paint Correction & Swirl Eradication",
        "Ozone Air Sterilization & Complete Interior Dressing",
        "2 Free Annual Inspection Refreshes"
      ],
      cta: "Book Executive Shield"
    },
    {
      name: "Boss Matte/Gloss PPF",
      type: "Full Body Paint Protection Film",
      warranty: "10-12 Years Warranty",
      price: "₹89,999",
      popular: false,
      features: [
        "Full Car Wrap with Premium Self-Healing TPU Film",
        "Choose Matte Satin or Mirror Gloss Finish",
        "Extreme Puncture & Rock Chip Resistance",
        "Zero Yellowing & Edge Lifting Guarantee",
        "Includes Complimentary 10H Wheel & Glass Coating",
        "Complimentary Wash and Maintenance Check-in every 6 Months"
      ],
      cta: "Book Boss TPU Wrap"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      car: "Porsche 911 Carrera S",
      service: "Stealth Matte PPF Wrap",
      tag: "ppf",
      beforeImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1611245801312-513407274399?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      car: "Toyota Fortuner Legender",
      service: "10H Dual Layer Ceramic Coating",
      tag: "ceramic",
      beforeImg: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      car: "BMW 5 Series (Carbon Black)",
      service: "Self-Healing TPU Film",
      tag: "ppf",
      beforeImg: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredGallery = activeGalleryTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === activeGalleryTab);

  const testimonials = [
    {
      name: "Karthik Reddy",
      car: "Mercedes E-Class owner",
      area: "Happy Homes, Attapur",
      rating: 5,
      comment: "Absolutely outstanding work by the Mafia team! Opted for the 5-year Executive 10H ceramic. My dark blue E-Class has a finish that looks wetter than water. They even fixed minor scratches on the bumper that other detailers said were permanent."
    },
    {
      name: "Mirza Ali",
      car: "Kia Seltos owner",
      area: "Rambagh, Attapur",
      rating: 5,
      comment: "The Matte PPF conversion has turned my Seltos into an absolute beast. It looks stealthy, handles dust perfectly, and water slides right off. Best premium studio in Attapur. Near the pillar, very easy to locate."
    },
    {
      name: "Sanjana Rao",
      car: "Jeep Compass owner",
      area: "Hyderguda, Attapur",
      rating: 5,
      comment: "Their customer service is top notch. They did a full pick up and drop of my Compass. The interior was completely sanitised, clean leather smell, and the exterior PPF wrap is completely seamless. Totally worth the premium price."
    }
  ];

  const faqs = [
    {
      q: "What is the difference between PPF and Ceramic Coating?",
      a: "PPF (Paint Protection Film) is a physical, thick polyurethane film that absorbs physical impact like rock chips, scratches, and road debris, and features self-healing properties. Ceramic Coating is a chemical liquid nano-quartz layer that bonds to your paint, providing chemical resistance, extreme gloss, UV protection, and hydrophobic self-cleaning properties, but does not prevent rock chips."
    },
    {
      q: "How long does a full PPF installation take at your Attapur branch?",
      a: "A professional, seamless PPF wrap takes between 3 to 4 days. This allows us to perform thorough multi-stage decontamination, minor paint correction, custom film plotting, wrapping around panels for seamless edges, and a 12-hour final cure check."
    },
    {
      q: "Do you offer pick-up and drop-off in Attapur and surrounding areas?",
      a: "Yes! We offer fully insured, professional flatbed pick-up and drop-off services for our premium package clients across Attapur, Mehdipatnam, Hyderguda, Rajendranagar, and nearby suburbs."
    },
    {
      q: "Can I wash my car normally after a ceramic coating?",
      a: "Yes, but we advise waiting 7 days for the coating to fully chemical-cure. Afterwards, you can wash it using pH-neutral shampoos. Avoid automated brush washes, which cause micro-scratches."
    },
    {
      q: "Is the TPU film safe for the original paint when removed?",
      a: "Absolutely. We only use certified premium TPU films with acrylic adhesives that do not damage factory paint upon professional removal, even after 10 years of use."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans antialiased selection:bg-purple-900 selection:text-white">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse delay-500"></div>
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-fuchsia-600/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#09090b]/80 border-b border-zinc-800/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-rose-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500">
                  MAFIA
                </span>
                <span className="text-[10px] block font-mono text-zinc-500 tracking-[0.25em] uppercase">
                  DETAILING • ATTAPUR
                </span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">Services</a>
              <a href="#visualizer" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">PPF Studio</a>
              <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">Packages</a>
              <a href="#gallery" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">Before/After</a>
              <a href="#faq" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">FAQ</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact" 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-purple-600 to-rose-500 group-hover:from-purple-600 group-hover:to-rose-500 text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#09090b] rounded-[10px] group-hover:bg-opacity-0">
                  Book Mafia Shield
                </span>
              </a>
            </div>

            {/* Mobile Menu Btn */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-zinc-400 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-[#09090b]/95 border-b border-zinc-800/80 backdrop-blur-xl">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-zinc-300">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-zinc-300">Services</a>
            <a href="#visualizer" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-zinc-300">PPF Studio</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-zinc-300">Packages</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-zinc-300">Before/After</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-zinc-300">FAQ</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-rose-600 rounded-xl text-white font-bold"
            >
              Book Inspection
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-28 md:pt-28 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                Attapur's Premier Detailing Fortress
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Uncompromising <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500">
                  Bulletproof Shine.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                Step into a world of hyper-reflective mirror coatings and self-healing armors. We provide elite paint protection film and custom 10H ceramic treatments near PVNR Expressway.
              </p>

              {/* Badges / Location Pin */}
              <div className="flex flex-wrap items-center gap-6 py-2 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rose-500" />
                  <span>Pillar 140, Attapur, Hyd</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span>Certified 10H Installers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <span>Same-Day Inspections</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Free Gloss Test
                  <Sparkles className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#pricing" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-zinc-300 bg-white/5 border border-zinc-800 hover:border-zinc-700 rounded-2xl hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-md"
                >
                  View Pricing List
                </a>
              </div>
            </div>

            {/* Hero Glass Panel Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-rose-500 rounded-[2.5rem] transform rotate-3 scale-105 opacity-25 blur-2xl"></div>
              
              {/* Glass Container */}
              <div className="relative bg-zinc-950/60 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Diagonal highlight stripe */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Live Operations</h3>
                    <p className="text-xs text-zinc-500">Currently in the Attapur bay today</p>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 font-mono text-[10px] tracking-wider uppercase animate-pulse">
                    Live
                  </div>
                </div>

                {/* Queue list */}
                <div className="space-y-4">
                  {[
                    { car: "BMW M3 Competition", status: "Applying Satin PPF", progress: "85%", active: true },
                    { car: "Volvo XC90", status: "Curing 10H Ceramic", progress: "100%", active: false },
                    { car: "Thar RWD", status: "Paint Decontamination", progress: "40%", active: false }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-zinc-800/80 hover:bg-white/10 hover:border-zinc-700/80 transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm text-white">{item.car}</span>
                        <span className="text-[10px] font-mono text-zinc-500">{item.progress}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-purple-500 animate-ping' : 'bg-zinc-600'}`}></span>
                          {item.status}
                        </div>
                        <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Premium Bay</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footnote */}
                <div className="mt-6 text-center text-xs text-zinc-500">
                  All detailing bays are dust-free climate controlled zones.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Counters */}
      <section className="relative py-12 border-y border-zinc-800/80 bg-[#09090b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800/80">
            <div className="text-center px-4 pt-4 lg:pt-0">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 mb-1">450+</div>
              <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Supercars Protected</div>
            </div>
            <div className="text-center px-4 pt-4 lg:pt-0">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 mb-1">100%</div>
              <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Dust-Free Air Bay</div>
            </div>
            <div className="text-center px-4 pt-4 lg:pt-0">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 mb-1">10H</div>
              <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Certified Graphene Hardness</div>
            </div>
            <div className="text-center px-4 pt-4 lg:pt-0">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 mb-1">10 Years</div>
              <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Unconditional TPU Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">Detailing Execution</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Bespoke Protection Craft</h2>
            <p className="text-zinc-400">We isolate each car inside dust-free extraction zones, applying premium coatings and films with micrometer-level precision.</p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#131316]/60 backdrop-blur-md border border-white/5 hover:border-purple-500/30 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/5"
              >
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600/10 group-hover:border-purple-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <span className="text-xs font-mono text-purple-400 block mb-4">{service.highlight}</span>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{service.desc}</p>
                
                {/* Footer price */}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50">
                  <span className="text-xs text-zinc-500">Estimation</span>
                  <span className="text-sm font-extrabold text-white group-hover:text-purple-400 transition-colors">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature PPF Studio Visualizer */}
      <section id="visualizer" className="py-24 bg-[#0a0a0d] border-y border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visualizer Sidebar details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono tracking-widest text-rose-500 uppercase">Signature Studio</span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">PPF Paint Armor Visualizer</h2>
              <p className="text-zinc-400">
                Experience how light reflections, satin textures, and protective polymers alter the appearance of your vehicle. Toggle our premium finish shields below to explore the custom look.
              </p>

              {/* Interactive buttons */}
              <div className="space-y-3 pt-4">
                {Object.keys(finishes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveFinish(key)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl text-left border transition-all duration-300 ${
                      activeFinish === key 
                        ? 'bg-purple-600/10 border-purple-500 text-white shadow-lg shadow-purple-500/5' 
                        : 'bg-[#131316]/30 border-zinc-800/80 text-zinc-400 hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <span className="block font-bold text-sm text-white">{finishes[key].name}</span>
                      <span className="text-xs text-zinc-500">{key === 'stealth' ? 'Aggressive Satin' : key === 'gloss' ? 'Wet Mirror' : 'Liquid Quartz'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-purple-400">{finishes[key].specs.warranty}</span>
                      <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${activeFinish === key ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visualizer Display Box */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className={`relative w-full aspect-video rounded-3xl bg-[#131316] border border-white/10 p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ${finishes[activeFinish].glow}`}>
                {/* Dynamic Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-500" 
                  style={{ backgroundImage: finishes[activeFinish].reflectionGradients }}
                ></div>

                {/* Top bar info */}
                <div className="relative z-10 flex justify-between items-center text-xs">
                  <span className="font-mono text-zinc-500">SIMULATOR V1.2</span>
                  <span className="font-bold text-purple-400 uppercase tracking-widest">{finishes[activeFinish].name}</span>
                </div>

                {/* Interactive Car Chassis Outline SVG */}
                <div className="relative z-10 my-6 flex justify-center items-center h-48 md:h-64">
                  <svg className="w-full max-w-lg h-full" viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background glow shadow under car */}
                    <ellipse cx="300" cy="210" rx="220" ry="15" fill={activeFinish === 'stealth' ? '#a855f7' : '#ef4444'} opacity="0.15" />
                    
                    {/* Schematic Car Chassis */}
                    <path 
                      d="M60 180 C80 180, 110 180, 130 180 C140 160, 170 160, 180 180 C240 180, 360 180, 420 180 C430 160, 460 160, 470 180 C490 180, 520 180, 540 180 C550 170, 560 140, 540 120 C520 100, 440 95, 410 90 C380 70, 310 50, 240 50 C190 50, 170 65, 140 80 C110 85, 80 100, 60 120 C50 130, 50 170, 60 180 Z" 
                      fill={finishes[activeFinish].carColor} 
                      stroke={activeFinish === 'stealth' ? '#c084fc' : activeFinish === 'chrome' ? '#f43f5e' : '#ffffff'} 
                      strokeWidth="2.5" 
                      className="transition-all duration-500"
                    />

                    {/* Windshield */}
                    <path 
                      d="M175 80 L230 58 C240 58, 260 58, 270 70 L285 92 Z" 
                      fill="#1f2937" 
                      stroke="#4b5563" 
                      strokeWidth="1.5" 
                    />

                    {/* Wheels */}
                    <circle cx="155" cy="180" r="28" fill="#09090b" stroke="#3f3f46" strokeWidth="3" />
                    <circle cx="155" cy="180" r="14" fill="#27272a" stroke="#a855f7" strokeWidth="1" />
                    
                    <circle cx="445" cy="180" r="28" fill="#09090b" stroke="#3f3f46" strokeWidth="3" />
                    <circle cx="445" cy="180" r="14" fill="#27272a" stroke="#ef4444" strokeWidth="1" />

                    {/* Neon Underglow lines */}
                    <path 
                      d="M190 200 L410 200" 
                      stroke={activeFinish === 'stealth' ? '#a855f7' : activeFinish === 'chrome' ? '#f43f5e' : '#e4e4e7'} 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      opacity="0.8" 
                      className="transition-all duration-500"
                    />
                  </svg>
                </div>

                {/* Specs bars */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-500 block">Self-Healing</span>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${finishes[activeFinish].specs.selfHealing}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Gloss Reflection</span>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${finishes[activeFinish].specs.gloss}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Hydrophobicity</span>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${finishes[activeFinish].specs.hydrophobic}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">TPU Warranty</span>
                    <span className="block font-bold text-white mt-0.5">{finishes[activeFinish].specs.warranty}</span>
                  </div>
                </div>
              </div>
              
              <span className="text-xs text-zinc-500 mt-4 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-purple-400" />
                Physical film samples are available at our Attapur outlet for verification.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">Transparent Costing</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Detailing Packages</h2>
            <p className="text-zinc-400">No hidden costs. Certified materials and strict warranty registration details are logged directly on the blockchain database.</p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-[#131316]/50 backdrop-blur-md border ${
                  pkg.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/10' 
                    : 'border-zinc-800/80 hover:border-zinc-700'
                } transition-all duration-500`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-rose-500 text-white font-mono text-[10px] tracking-wider uppercase font-black">
                    Most Popular Bay
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-zinc-500 block font-mono">{pkg.type}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{pkg.name}</h3>
                    <span className="inline-block px-3 py-1 rounded bg-white/5 text-purple-400 border border-purple-500/20 text-xs mt-3 font-mono">
                      {pkg.warranty}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">{pkg.price}</span>
                    <span className="text-xs text-zinc-500">/ All inclusive</span>
                  </div>

                  <ul className="space-y-3.5 text-sm">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-zinc-400">
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-zinc-800/60">
                  <a 
                    href="#contact"
                    className={`w-full py-4 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-rose-600 hover:opacity-95 text-white shadow-lg' 
                        : 'bg-white/5 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Gallery */}
      <section id="gallery" className="py-24 bg-[#0a0a0d] border-y border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">Visual Verification</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-2">Before & After Results</h2>
              <p className="text-zinc-400 max-w-xl mt-2">Compare paint restoration results on real client cars completed in our Attapur showroom.</p>
            </div>
            
            {/* Tabs */}
            <div className="flex bg-white/5 p-1 rounded-xl border border-zinc-800 self-start md:self-auto">
              {['all', 'ppf', 'ceramic'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-5 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    activeGalleryTab === tab 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => {
              const showAfter = galleryCompare[item.id] === 'after' || !galleryCompare[item.id];
              return (
                <div key={item.id} className="bg-[#131316]/50 border border-zinc-800/80 rounded-3xl p-5 overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="font-bold text-white text-base">{item.car}</h4>
                        <span className="text-xs text-zinc-500">{item.service}</span>
                      </div>
                      <span className="text-[10px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-0.5 rounded">
                        {item.tag.toUpperCase()}
                      </span>
                    </div>

                    {/* Image comparison viewport */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
                      <img 
                        src={showAfter ? item.afterImg : item.beforeImg} 
                        alt={`${item.car} ${showAfter ? 'After' : 'Before'}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                      
                      {/* Badge indicator on image */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/80 backdrop-blur text-[10px] font-mono text-white tracking-widest uppercase">
                        {showAfter ? 'After Mafia Coat' : 'Before Restoration'}
                      </div>
                    </div>
                  </div>

                  {/* Interactive toggle bar */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button
                      onClick={() => setGalleryCompare(prev => ({ ...prev, [item.id]: 'before' }))}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        !showAfter 
                          ? 'bg-zinc-800 border-zinc-700 text-white' 
                          : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Show Before
                    </button>
                    <button
                      onClick={() => setGalleryCompare(prev => ({ ...prev, [item.id]: 'after' }))}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        showAfter 
                          ? 'bg-purple-600/20 border-purple-500/40 text-purple-400' 
                          : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Show After
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">Attapur Patron Reviews</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">The Mafia Word</h2>
            <p className="text-zinc-400">See what luxury car owners in Hyderabad say about our paint armor and detailing services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#131316]/40 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-sm text-zinc-300 leading-relaxed italic mb-8">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/40">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center font-bold text-white text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <span className="text-[10px] text-zinc-500 block">{t.car} • {t.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 bg-[#0a0a0d] border-y border-zinc-800/80 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">Answering Details</span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#131316]/50 border border-zinc-800/60 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-all"
                  >
                    <span className="font-bold text-white text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-96 border-t border-zinc-800/60' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 text-sm text-zinc-400 leading-relaxed bg-[#0a0a0d]/40">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#131316]/50 border border-zinc-800/80 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
            {/* Absolute accent light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Column Info */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">Get In Touch</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
                    Visit the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">Mafia Headquarters</span>
                  </h2>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                  Located right on the main commercial corridor of Attapur, near Pillar 140 of the PVNR Expressway. Walk-ins are welcome for gloss diagnostics.
                </p>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-zinc-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Location</h4>
                      <p className="text-zinc-400 text-xs mt-1">Pillar No. 140, PVNR Expressway Main Road, Attapur, Hyderabad - 500048</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Direct Phone</h4>
                      <p className="text-zinc-400 text-xs mt-1">+91 99999 88888 (Call or WhatsApp for slots)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Bays Open</h4>
                      <p className="text-zinc-400 text-xs mt-1">Daily: 09:00 AM - 08:30 PM (Sundays open by appointment only)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Booking Form */}
              <div className="bg-[#09090b]/80 border border-zinc-800/80 p-8 rounded-3xl shadow-xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Mafia Slot Reserved!</h3>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                      Your premium slot request has been logged. Our booking manager will WhatsApp you shortly with times and details.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-white/5 border border-zinc-800 text-xs text-zinc-400 hover:text-white rounded-lg"
                    >
                      Book Another Car
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Claim Premium Booking</h3>
                    <p className="text-xs text-zinc-500">Includes free paint thickness gauge audit.</p>
                    
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-500 mb-1">Owner Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Karthik" 
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm text-white" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-500 mb-1">WhatsApp Mobile</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm text-white" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-500 mb-1">Vehicle Model</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Fortuner" 
                          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm text-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-500 mb-1">Required Armor</label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm text-zinc-400"
                        >
                          <option>Bespoke PPF (TPU)</option>
                          <option>10H Ceramic Coating</option>
                          <option>Bespoke Interior spa</option>
                          <option>Alloy & Rim Ceramic</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-sm"
                    >
                      Book Free Gloss Diagnostic
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 md:col-span-2">
              <span className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-rose-500">
                THE DETAILING MAFIA
              </span>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
                Certified premium paint protection installers using premium TPU films. Operating advanced multi-stage correction bays in Attapur, Hyderabad.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-zinc-300 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Paint Protection Film</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">10H Ceramic Coating</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Interior Restoration</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Windshield Coating</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-mono text-zinc-300 uppercase tracking-wider">Branches</h4>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li><span className="text-zinc-300">Attapur (Main Station)</span></li>
                <li><span>Gachibowli</span></li>
                <li><span>Jubilee Hills</span></li>
                <li><span>Secunderabad</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900/60 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
            <p>&copy; {new Date().getFullYear()} The Detailing Mafia Attapur. Official Website Preview. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
              <a href="#" className="hover:text-zinc-400">Warranty System</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

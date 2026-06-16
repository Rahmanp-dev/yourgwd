"use client";

import React, { useState } from 'react';
import {
  Cpu, Shield, Zap, Sparkles, Check, ChevronDown, ChevronUp,
  Star, Phone, Mail, MapPin, Menu, X, ArrowRight, Layers,
  LayoutGrid, Eye, Settings, RefreshCw, AlertTriangle, Play,
  Volume2, Lock, Sun, Sliders
} from 'lucide-react';

export default function AppleInteriorsHydPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({ 0: true });

  // Interactive Smart Configurer State
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [integrations, setIntegrations] = useState({
    circadian: true,
    shading: false,
    biometrics: true,
    av: false,
    climate: true
  });
  const [qualityGrade, setQualityGrade] = useState('Midnight Elite'); // Cyber Standard, Midnight Elite, Sovereign Pro

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    property: '3 BHK',
    grade: 'Midnight Elite',
    details: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  // Toggle FAQ Accordion
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Toggle Smart Integrations
  const toggleIntegration = (key) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate High-Tech Cost
  const calculateCost = () => {
    let basePrice = 700000; // 3 BHK base
    if (propertyType === '2 BHK') basePrice = 500000;
    else if (propertyType === '4 BHK') basePrice = 950000;
    else if (propertyType === 'Luxury Villa') basePrice = 1600000;

    let gradeMultiplier = 1.0; // Cyber Standard
    if (qualityGrade === 'Midnight Elite') gradeMultiplier = 1.3;
    else if (qualityGrade === 'Sovereign Pro') gradeMultiplier = 1.65;

    let integrationCost = 0;
    if (integrations.circadian) integrationCost += 80000;
    if (integrations.shading) integrationCost += 95000;
    if (integrations.biometrics) integrationCost += 45000;
    if (integrations.av) integrationCost += 110000;
    if (integrations.climate) integrationCost += 65000;

    const estMin = Math.round((basePrice * gradeMultiplier) + integrationCost);
    const estMax = Math.round(((basePrice * gradeMultiplier) + integrationCost) * 1.15);

    // Calculate smart score
    let smartScore = 30;
    if (integrations.circadian) smartScore += 15;
    if (integrations.shading) smartScore += 15;
    if (integrations.biometrics) smartScore += 15;
    if (integrations.av) smartScore += 15;
    if (integrations.climate) smartScore += 10;

    // Power savings estimate
    let powerSavings = "10%";
    if (integrations.circadian && integrations.shading) powerSavings = "25%";
    else if (integrations.circadian || integrations.shading) powerSavings = "18%";

    return {
      min: estMin.toLocaleString('en-IN'),
      max: estMax.toLocaleString('en-IN'),
      smartScore,
      powerSavings
    };
  };

  const costResult = calculateCost();

  // Apply Config to Form
  const applyConfigToForm = () => {
    const activeIntegrations = Object.keys(integrations)
      .filter(k => integrations[k])
      .map(k => k.toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      property: propertyType,
      grade: qualityGrade,
      message: `Hi Apple Interiors, I configured: ${propertyType} (${qualityGrade} tier) for my home in Attapur, Hyderabad. Selected Integrations: [${activeIntegrations || 'None'}]. Please share full blueprints and pricing.`
    }));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Required fields: Name, Email, and Phone number.');
      return;
    }
    setFormError('');
    setFormLoading(true);

    // Simulate API submit
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  // Reset after submission
  const resetFormState = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      property: '3 BHK',
      grade: 'Midnight Elite',
      details: ''
    });
  };

  // Services details
  const services = {
    living: {
      title: "Smart Neural Living Rooms",
      tagline: "Adaptive spaces matching your circadian biological rhythm",
      desc: "Our living room architecture integrates dynamic light layers and acoustics. We deploy custom motorized sliding panels, media walls that reveal massive screens at a touch, and linear grid systems that look structural while housing power, sound, and air circulation.",
      features: [
        "Hidden robotic storage panels & smart-app server bays",
        "True circadian led fixtures matching Attapur's solar path",
        "Concealed digital audio channels with spatial calibration",
        "Jet black structural frames and steel-anodized wall cladding"
      ],
      priceRange: "₹4.5L - ₹9.0L",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      title: "Intelligent Modular Culinary Labs",
      tagline: "Hands-free cooking, concealed ducted purifiers & motor lifts",
      desc: "An high-performance kitchen defined by zero-fingerprint matte metallic finishes, heavy-gauge pullouts, and automated spice lifts. Integrates ducted dynamic ventilation to isolate cooking aromas from living areas.",
      features: [
        "Biometric locked safety drawers & sensory cabinets",
        "Seamless quartz countertops with integrated induction pods",
        "Motorized overhead spice racks and smart bin controllers",
        "Exposed metal structures with clear anti-corrosive lacquer"
      ],
      priceRange: "₹6.0L - ₹13.5L",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    lighting: {
      title: "Low-Voltage Magnetic Track Arrays",
      tagline: "Total illumination configurability via linear rail grids",
      desc: "Eliminate fixed lighting restrictions. Our modular magnetic track grids let you clip, slide, and rotate spotlight fixtures, linear diffusers, and hanging pendants along safe-touch 24V tracks embedded in your ceiling.",
      features: [
        "Sleek track channels aligned to clean architectural lines",
        "Tunable white LEDs (2200K firelight to 6500K daylight)",
        "Zero flicker micro-drivers with clean system filtering",
        "Accent glowing channels mapping the room boundaries"
      ],
      priceRange: "₹2.0L - ₹5.0L",
      image: "https://images.unsplash.com/photo-1565538810844-1e1194116c07?auto=format&fit=crop&w=800&q=80"
    },
    automation: {
      title: "Consolidated Automation Node",
      tagline: "Centralized server hubs replacing ugly plastic switchboards",
      desc: "We clear visual noise. No more rows of mismatched plastic switches. We run structural wiring back to a centralized server rack, replacing standard wall switches with bespoke, brushed silver steel multi-scene keypads.",
      features: [
        "Exquisite brushed steel keypads with micro-etched labels",
        "System compatibility: Apple HomeKit, Home Assistant, KNX",
        "Secure local-network server that works without active internet",
        "Automatic humidity, air-quality, and thermal scene adjusters"
      ],
      priceRange: "₹3.5L - ₹8.0L",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    }
  };

  const faqs = [
    {
      q: "Does Apple Interiors integrate third-party automation systems like Lutron or Control4?",
      a: "Yes. Our systems are built on open-protocol standards and are fully compatible. We handle the complete electrical engineering, Cat6 network wiring, and controller setup for Apple HomeKit, Lutron, KNX, Control4, and Home Assistant."
    },
    {
      q: "Do you execute projects on-site in Attapur, Hyderabad?",
      a: "Yes. We design, engineer, and install high-tech residential interiors across Hyderabad, with a dedicated local execution team active in Attapur, Hyderguda, Mehdipatnam, and Rajendranagar."
    },
    {
      q: "What is a LiDAR Site Scan and why is it mandatory for your blueprints?",
      a: "Before fabricating any modular steel framing or custom cabinets, our team performs a terrestrial LiDAR laser-scan. This captures a millimeter-accurate 3D point cloud of your home. It ensures every structural beam, column offset, and wall angle fits without gaps, reducing on-site installation time by 60%."
    },
    {
      q: "Are the low-voltage magnetic track systems safe?",
      a: "Absolutely. Our magnetic tracks run on safe-touch 24V DC current. The internal tracks are engineered such that you can touch, slide, and snap light fixtures in and out while the system is powered on, without any electrical hazard."
    },
    {
      q: "How long is your warranty on smart modules and structural woodwork?",
      a: "We offer a 5-year replacement warranty on all electronics, LED drivers, and smart relays. The underlying moisture-resistant modular timber framework, steel tracks, and hardware hinges carry a separate 10-year comprehensive warranty."
    }
  ];

  return (
    <div className="selection:bg-[#00E5FF] selection:text-black min-h-screen text-[#E0E0E0] bg-[#0A0A0A] overflow-x-hidden font-sans">
      {/* Background Tech Grids & Neon Glows */}
      <div 
        className="absolute top-0 left-0 right-0 h-[900px] pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 250px, rgba(0, 229, 255, 0.08) 0%, rgba(0, 0, 0, 0) 65%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 64px 64px, 64px 64px'
        }}
      ></div>

      {/* Top Status Banner */}
      <div className="w-full bg-black text-[#00E5FF] border-b border-[#00E5FF]/20 py-2 px-4 text-center text-xs font-mono tracking-widest flex justify-between items-center z-50 relative">
        <span className="hidden sm:inline">● SYS_STATUS: OPERATIONAL</span>
        <span className="mx-auto sm:mx-0 uppercase font-semibold">⚡ Apple Interiors - Attapur Hyderabad Hub V2.6</span>
        <span className="hidden sm:inline">SECURE_LINK // ID: 8822</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#E0E0E0]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Group */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#00E5FF] to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              <Cpu size={22} className="text-black" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white block">APPLE INTERIORS</span>
              <span className="text-[9px] text-[#00E5FF] tracking-[0.25em] font-mono block -mt-1">HIGH-TECH MODERN // ATTAPUR</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#hero" className="text-white hover:text-[#00E5FF] transition-colors">/home</a>
            <a href="#portfolio" className="text-zinc-400 hover:text-[#00E5FF] transition-colors">/specs</a>
            <a href="#estimator" className="text-zinc-400 hover:text-[#00E5FF] transition-colors">/neural-configurator</a>
            <a href="#process" className="text-zinc-400 hover:text-[#00E5FF] transition-colors">/precision-blueprint</a>
            <a href="#testimonials" className="text-zinc-400 hover:text-[#00E5FF] transition-colors">/feedback</a>
            <a href="#faqs" className="text-zinc-400 hover:text-[#00E5FF] transition-colors">/faq</a>
          </div>

          {/* Nav CTA */}
          <div className="hidden md:block">
            <a
              href="#estimator"
              className="border border-[#00E5FF] text-[#00E5FF] px-5 py-2 rounded font-mono text-xs font-bold hover:bg-[#00E5FF] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              INITIALIZE_ESTIMATOR
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-b border-[#00E5FF]/20 px-6 py-6 space-y-4 font-mono text-sm">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-[#00E5FF] transition-colors">/home</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-[#00E5FF] transition-colors">/specs</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-[#00E5FF] transition-colors">/neural-configurator</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-[#00E5FF] transition-colors">/precision-blueprint</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-[#00E5FF] transition-colors">/feedback</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-[#00E5FF] transition-colors">/faq</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#00E5FF] text-black font-bold py-2.5 rounded"
            >
              CONTACT_STUDIO
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-24 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono uppercase tracking-wider mb-6">
              <Zap size={12} className="animate-pulse" /> Computational Interior Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-6">
              Midnight Tech Residential Interiors in <span className="bg-gradient-to-r from-[#00E5FF] to-blue-400 bg-clip-text text-transparent">Attapur</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              We design luxury living systems merging stark jet-black architectural structures, steel-silver surfaces, and bespoke home automation. Built with structural precision for premium apartments in Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
              <a
                href="#estimator"
                className="bg-[#00E5FF] text-black font-bold px-8 py-3.5 rounded text-center hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                /LAUNCH_CONFIGURATOR <ArrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="bg-zinc-900 border border-zinc-700 text-white font-bold px-8 py-3.5 rounded text-center hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all"
              >
                /VIEW_SPECS
              </a>
            </div>

            {/* Performance metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-800 font-mono">
              <div>
                <span className="block text-2xl font-black text-white">0.2ms</span>
                <span className="block text-[10px] text-zinc-500 uppercase">Input Latency</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#00E5FF]">150+</span>
                <span className="block text-[10px] text-zinc-500 uppercase">Smart Installs</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">100%</span>
                <span className="block text-[10px] text-zinc-500 uppercase">LiDAR Scanned</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Hologram/Radar Grid Frame */}
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500 to-[#00E5FF] opacity-10 blur z-0"></div>
            <div className="relative border border-[#00E5FF]/20 rounded-lg overflow-hidden bg-zinc-950 p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-scanlines pointer-events-none z-10 opacity-5"></div>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Midnight tech interior design showcase"
                className="w-full h-[320px] sm:h-[400px] object-cover rounded filter grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="mt-3 flex justify-between items-center text-xs font-mono text-zinc-500">
                <span>FILE: ATTAPUR_PENTHOUSE_REF_8.PNG</span>
                <span className="text-[#00E5FF] flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] animate-ping"></span> RADAR ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Active Tabs */}
      <section id="portfolio" className="py-24 bg-black/50 border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase block mb-3">/SYSTEM_SPECIFICATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Our Smart Interiors Catalogue</h2>
            <p className="text-zinc-400 mt-4">
              Select a system node below to review our bespoke high-tech blueprints, materials, and price scopes.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 font-mono text-xs max-w-3xl mx-auto">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveServiceTab(key)}
                className={`px-5 py-3 rounded border font-semibold tracking-wider transition-all uppercase flex items-center gap-2 ${
                  activeServiceTab === key
                    ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {key === 'living' && <LayoutGrid size={14} />}
                {key === 'kitchen' && <Cpu size={14} />}
                {key === 'lighting' && <Sliders size={14} />}
                {key === 'automation' && <Settings size={14} />}
                {key.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-950/80 border border-zinc-800/80 rounded-lg p-6 sm:p-10 items-center">
            {/* Tab Image */}
            <div className="lg:col-span-5 relative">
              <img
                src={services[activeServiceTab].image}
                alt={services[activeServiceTab].title}
                className="w-full h-[280px] sm:h-[350px] object-cover rounded border border-zinc-800"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs rounded">
                ESTIMATED RANGE: {services[activeServiceTab].priceRange}
              </div>
            </div>

            {/* Tab Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-mono text-[#00E5FF] uppercase block mb-1">NODE_ID: {activeServiceTab.toUpperCase()}_SYS</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{services[activeServiceTab].title}</h3>
              <p className="text-zinc-300 font-mono text-xs mt-1 italic text-zinc-400">{services[activeServiceTab].tagline}</p>
              
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                {services[activeServiceTab].desc}
              </p>

              <div className="mt-6 space-y-2">
                <span className="text-xs font-mono text-white block uppercase tracking-wider">System Integration Checklist:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {services[activeServiceTab].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="mt-0.5 text-[#00E5FF]"><Check size={14} /></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">Includes 5-Year Electronics Warranty</span>
                <button
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      details: `Interested in: ${services[activeServiceTab].title}. Please send specifications.`
                    }));
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-zinc-900 border border-zinc-700 text-white hover:border-[#00E5FF] hover:text-[#00E5FF] px-6 py-2.5 rounded font-mono text-xs transition-all"
                >
                  REQUEST_SPEC_PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator & Cost Estimator */}
      <section id="estimator" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase block mb-3">/INTERACTIVE_CALCULATIONS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Neural Cost Configurator</h2>
          <p className="text-zinc-400 mt-4">
            Toggle your floor size, select required hardware integration layers, and get an immediate estimation for your Attapur residence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-8 shadow-2xl">
            {/* Floor size selection */}
            <div>
              <label className="text-xs font-mono text-[#00E5FF] uppercase block mb-3 tracking-wider">01. Select Floor Layout Size</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['2 BHK', '3 BHK', '4 BHK', 'Luxury Villa'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPropertyType(type)}
                    className={`py-3 px-4 rounded border text-xs font-mono font-bold transition-all ${
                      propertyType === type
                        ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.1)]'
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Smart Hardware Toggles */}
            <div>
              <label className="text-xs font-mono text-[#00E5FF] uppercase block mb-3 tracking-wider">02. Toggle Neural System Nodes</label>
              <div className="space-y-3">
                {[
                  { key: 'circadian', title: 'Circadian Light Grid', price: '₹80,000', desc: 'Syncs ceiling LED temperature with daylight cycle.' },
                  { key: 'shading', title: 'Robotic Window Blinds', price: '₹95,000', desc: 'Concealed motorized shade rollers tracking sun coordinates.' },
                  { key: 'biometrics', title: 'Biometric Access Control', price: '₹45,000', desc: 'Smart fingerprint & facial recognition security nodes.' },
                  { key: 'av', title: 'Concealed Multi-Room Audio', price: '₹1,10,000', desc: 'Architecturally hidden flat transducer speakers in ceiling.' },
                  { key: 'climate', title: 'Environmental Climate Node', price: '₹65,000', desc: 'Centralized smart relays for climate control.' }
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleIntegration(item.key)}
                    className={`p-4 rounded border cursor-pointer flex justify-between items-center transition-all ${
                      integrations[item.key]
                        ? 'bg-[#00E5FF]/5 border-[#00E5FF]/50 text-white'
                        : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        integrations[item.key] ? 'bg-[#00E5FF] border-[#00E5FF]' : 'border-zinc-700'
                      }`}>
                        {integrations[item.key] && <Check size={14} className="text-black font-black" />}
                      </div>
                      <div>
                        <span className="text-sm font-bold block text-white">{item.title}</span>
                        <span className="text-xs text-zinc-500 block leading-tight">{item.desc}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00E5FF]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Grade selection */}
            <div>
              <label className="text-xs font-mono text-[#00E5FF] uppercase block mb-3 tracking-wider">03. Material & Component Quality Grade</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { grade: 'Cyber Standard', tag: 'Standard Hardware', multiplier: '1.0x' },
                  { grade: 'Midnight Elite', tag: 'Heavy Matte Finish', multiplier: '1.3x' },
                  { grade: 'Sovereign Pro', tag: 'Pure Acoustic & Carbon', multiplier: '1.65x' }
                ].map((item) => (
                  <div
                    key={item.grade}
                    onClick={() => setQualityGrade(item.grade)}
                    className={`p-4 rounded border cursor-pointer transition-all flex flex-col justify-between ${
                      qualityGrade === item.grade
                        ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.1)]'
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-mono block text-zinc-500 uppercase">{item.multiplier}</span>
                      <span className="text-sm font-bold block text-white mt-1">{item.grade}</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono mt-2 block">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-950 border-2 border-[#00E5FF]/30 rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00E5FF] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00E5FF] pointer-events-none"></div>

              <div className="text-center pb-6 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 uppercase block tracking-widest">CALCULATED_ESTIMATE_RANGE</span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-3 font-mono">
                  ₹{costResult.min} - ₹{costResult.max}
                </div>
                <span className="text-[10px] text-zinc-500 uppercase font-mono block mt-1">Inclusive of GST, installation, and engineering calibration</span>
              </div>

              {/* Dynamic stats */}
              <div className="py-6 space-y-4 border-b border-zinc-800 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">Selected Floor Size:</span>
                  <span className="text-white font-bold">{propertyType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">Execution Grade:</span>
                  <span className="text-[#00E5FF] font-bold">{qualityGrade}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">Neural Integrations:</span>
                  <span className="text-white font-bold">
                    {Object.keys(integrations).filter(k => integrations[k]).length} Nodes Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">Smart Building Score:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#00E5FF] h-full" style={{ width: `${costResult.smartScore}%` }}></div>
                    </div>
                    <span className="text-[#00E5FF] font-bold">{costResult.smartScore}/100</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">Est. Power Efficiency Gain:</span>
                  <span className="text-green-400 font-bold">-{costResult.powerSavings}</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={applyConfigToForm}
                  className="w-full bg-gradient-to-r from-[#00E5FF] to-blue-500 text-black font-black py-4 rounded font-mono text-xs uppercase hover:brightness-110 shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all flex items-center justify-center gap-2"
                >
                  <Sliders size={14} /> /APPLY_CONFIG_TO_CONTACT
                </button>
              </div>
            </div>

            {/* Configurator Notice */}
            <div className="bg-zinc-950/40 border border-zinc-900 rounded p-4 flex gap-3 text-xs text-zinc-500">
              <Shield size={20} className="text-[#00E5FF] shrink-0" />
              <div>
                <span className="font-bold text-zinc-400 block uppercase">Hardware Calibration Notice:</span>
                Pricing is specific to Attapur projects. Final invoice depends on the 3D LiDAR scan of the ceiling concrete slab and exact circuit distances.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technical Process */}
      <section id="process" className="py-24 bg-black/40 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase block mb-3">/ENGINEERING_PIPELINE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">The Precision Integration Process</h2>
            <p className="text-zinc-400 mt-4 font-sans">
              We operate like systems engineers. No guesswork. Every phase of your interior execution is measured, mapped, and monitored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
            {[
              {
                step: "01 / SCAN",
                title: "Terrestrial LiDAR Point Cloud",
                desc: "We scan your bare apartment in Attapur, creating a millimetric 3D point model of every column, bend, and concrete beam."
              },
              {
                step: "02 / CAD",
                title: "Computational Layout Logic",
                desc: "We lay out magnetic track routes, smart keypads, and ventilation pipelines using precise 3D CAD modeling software."
              },
              {
                step: "03 / FABRICATE",
                title: "Modular Cleanroom Prep",
                desc: "Woodwork, steel joints, and electrical rack enclosures are custom fabricated off-site inside our dust-free facility."
              },
              {
                step: "04 / DEPLOY",
                title: "Calibrated Site Assembly",
                desc: "We bolt frames directly to concrete using chemical anchors and plug pre-tested smart control hubs into the main switchboards."
              }
            ].map((phase, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 p-6 rounded relative flex flex-col justify-between hover:border-[#00E5FF]/40 transition-colors group">
                <span className="text-[#00E5FF] font-bold block mb-4 group-hover:animate-pulse">{phase.step}</span>
                <div>
                  <h4 className="text-white font-bold text-sm mb-2">{phase.title}</h4>
                  <p className="text-zinc-400 font-sans leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase block mb-3">/CLIENT_AUDITS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Validated Project Feedback</h2>
          <p className="text-zinc-400 mt-4">
            Hear from home buyers in Hyderabad who migrated from plastic switches to our high-tech modern interior design system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The circadian lighting system completely changed how our apartment feels. The transition from active daylight to soft copper hues in the evening happens automatically. Incredible engineering detail.",
              client: "Dr. Anirudh K. - Radhas Elite, Attapur",
              rating: 5,
              project: "3 BHK Residence"
            },
            {
              quote: "We wanted a clean, jet-black kitchen without the usual messy cabinets. Apple Interiors installed sensor-touch motorized cabinetry and hidden ventilation. The steel track grids look stunning.",
              client: "Priya S. - Janapriya Utopia, Attapur",
              rating: 5,
              project: "4 BHK Penthouse"
            },
            {
              quote: "Outstanding layout precision. Their LiDAR scan caught a 2cm tilt in our brick wall that would have ruined a standard modular fitting. They pre-adjusted the steel frames to fit flush.",
              client: "Vikram Reddy - Rambagh, Attapur",
              rating: 5,
              project: "Luxury Villa"
            }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-950 border border-zinc-800 p-8 rounded-lg relative flex flex-col justify-between shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, starIdx) => (
                  <Star key={starIdx} size={14} className="fill-[#00E5FF] text-[#00E5FF]" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans italic">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-zinc-900 font-mono text-xs">
                <span className="block text-white font-bold">{item.client}</span>
                <span className="text-zinc-500 uppercase block mt-1">Project: {item.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collapsible FAQ Section */}
      <section id="faqs" className="py-24 bg-black/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase block mb-3">/SYSTEM_QUERY_RESOLVER</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Frequently Queried Specifications</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus:ring-1 focus:ring-[#00E5FF]/50"
                  aria-expanded={faqOpen[index] ? 'true' : 'false'}
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</span>
                  <span className="text-[#00E5FF]">
                    {faqOpen[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {faqOpen[index] && (
                  <div className="px-6 pb-5 border-t border-zinc-900/50 pt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Loading/Success states */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto z-10 relative">
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-lg p-6 sm:p-10 relative shadow-2xl">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-zinc-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-zinc-700 pointer-events-none"></div>

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#00E5FF] tracking-[0.2em] uppercase block mb-2">/CONNECT_WITH_STUDIO</span>
            <h2 className="text-3xl font-black text-white">Initialize Your Blueprint</h2>
            <p className="text-zinc-400 mt-2 text-sm">
              Transmit your layout details to our computational design studio. We will verify structural boundaries and prepare a preliminary LiDAR calibration schematic.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#00E5FF]/5 border border-[#00E5FF]/40 rounded-lg p-8 text-center space-y-4 font-mono">
              <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <Check size={32} className="text-[#00E5FF]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Blueprint Initialized</h3>
              <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto">
                Thank you. Your configuration parameters have been registered. Our computational team will contact you to schedule a 3D LiDAR Site Scan of your Attapur property.
              </p>
              <button
                onClick={resetFormState}
                className="mt-6 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-[#00E5FF] hover:text-[#00E5FF] px-6 py-2 rounded text-xs transition-all"
              >
                /TRANSMIT_NEW_FORM
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {formError && (
                <div className="p-4 bg-red-950/50 border border-red-500/30 rounded flex items-center gap-3 text-red-400 text-xs font-mono">
                  <AlertTriangle size={16} />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-[#00E5FF] uppercase block mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Sreenivas Reddy"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] font-sans"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-[#00E5FF] uppercase block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g. aravind.bandaru@appleinteriors.in"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-[#00E5FF] uppercase block mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g. +91 96039 60337"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] font-sans"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-2">Configured Size</label>
                  <select
                    value={formData.property}
                    onChange={(e) => setFormData(prev => ({ ...prev, property: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] font-mono"
                  >
                    {['2 BHK', '3 BHK', '4 BHK', 'Luxury Villa'].map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-2">Quality Tier</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] font-mono"
                  >
                    {['Cyber Standard', 'Midnight Elite', 'Sovereign Pro'].map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-[#00E5FF] uppercase block mb-2">Transmission Message / Custom Requests</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Describe your design intentions or project site details in Attapur..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] font-sans"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full bg-[#00E5FF] text-black font-black py-4 rounded font-mono text-xs uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formLoading ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" /> TRANSMITTING_BLUEPRINT_DATA...
                    </>
                  ) : (
                    <>
                      <Play size={10} fill="#000" /> TRANSMIT_SPECIFICATIONS
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-16 px-6 font-mono text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00E5FF] to-blue-600 flex items-center justify-center">
                <Cpu size={16} className="text-black" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-sm text-white tracking-wider">APPLE INTERIORS</span>
            </div>
            <p className="text-zinc-500 font-sans leading-relaxed">
              Design laboratory building computational home environments in Hyderabad. Merging architectural woodwork with consolidated automation systems.
            </p>
          </div>

          {/* Location details */}
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">/LOCATION_SPECS</span>
            <div className="space-y-2 text-zinc-500 font-sans">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#00E5FF] shrink-0 mt-0.5" />
                <span>
                  Apple Interiors Lab,<br />
                  Beside pillar 128, PV Narasimha Rao Expressway,<br />
                  Attapur, Hyderabad, Telangana - 500048
                </span>
              </div>
              <div className="pt-2">
                <span>COORDINATES: 17.3719° N, 78.4284° E</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">/SYSTEM_PORTALS</span>
            <div className="space-y-2 text-zinc-500 font-sans">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#00E5FF]" />
                <span>+91 96039 60337</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#00E5FF]" />
                <span>aravind.bandaru@appleinteriors.in</span>
              </div>
              <div className="pt-2 font-mono text-[10px] text-zinc-600">
                DAILY LINK STATUS: ACTIVE (09:00 - 19:30)
              </div>
            </div>
          </div>

          {/* System status details */}
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">/SYS_ATTESTATION</span>
            <p className="text-zinc-500 font-sans leading-relaxed">
              All architectural woodwork is dried and treated. Smart microcontrollers are certified and carry BIS registration. Installed components comply with electrical safety norms.
            </p>
            <div className="text-[10px] text-[#00E5FF] font-mono">
              © 2026 APPLE INTERIORS. ALL RIGHTS CODE-LOCKED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

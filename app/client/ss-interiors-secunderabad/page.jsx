"use client";
import React, { useState } from 'react';
import {
  Compass, Sparkles, Check, ChevronDown, ChevronUp,
  Star, Phone, Mail, MapPin, Menu, X, ArrowRight, Layers,
  LayoutGrid, Eye, Settings, Calendar, Info, Clock, CheckCircle2
} from 'lucide-react';

export default function SSInteriorsSecunderabadPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({});

  // Interactive Configurator State
  const [projectScale, setProjectScale] = useState('3 BHK'); // 2 BHK, 3 BHK, 4 BHK, Villa
  const [premiumLevel, setPremiumLevel] = useState('Cozy Premium'); // Minimalist, Cozy Premium, Nordic Luxury
  const [extras, setExtras] = useState({
    smartKitchen: true,
    studyNook: false,
    bioFireplace: false,
    iceBlueTracks: true
  });

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    scale: '3 BHK',
    tier: 'Cozy Premium',
    prefDetails: ''
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

  // Toggle Extras
  const toggleExtra = (key) => {
    setExtras(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate Budget
  const calculateBudget = () => {
    let basePrice = 450000; // 2 BHK
    if (projectScale === '3 BHK') basePrice = 680000;
    else if (projectScale === '4 BHK') basePrice = 950000;
    else if (projectScale === 'Villa') basePrice = 1600000;

    let tierMultiplier = 1.0; // Minimalist
    if (premiumLevel === 'Cozy Premium') tierMultiplier = 1.3;
    else if (premiumLevel === 'Nordic Luxury') tierMultiplier = 1.75;

    let extraCost = 0;
    if (extras.smartKitchen) extraCost += 95000;
    if (extras.studyNook) extraCost += 45000;
    if (extras.bioFireplace) extraCost += 60000;
    if (extras.iceBlueTracks) extraCost += 35000;

    const totalEstimate = Math.round((basePrice * tierMultiplier) + extraCost);
    const minEstimate = Math.round(totalEstimate * 0.95);
    const maxEstimate = Math.round(totalEstimate * 1.1);

    let duration = "6-8 Weeks";
    if (projectScale === 'Villa') duration = "12-16 Weeks";
    else if (projectScale === '4 BHK') duration = "8-12 Weeks";

    let woodRecommendation = "Light Nordic Ash Wood (#E6E6FA)";
    if (premiumLevel === 'Nordic Luxury') {
      woodRecommendation = "Smoked Oak & Light Ash Inlays";
    }

    return {
      min: minEstimate.toLocaleString('en-IN'),
      max: maxEstimate.toLocaleString('en-IN'),
      duration,
      woodRecommendation
    };
  };

  const budgetResult = calculateBudget();

  // Apply Config to Form
  const applyConfigToForm = () => {
    const selectedExtras = Object.keys(extras)
      .filter(k => extras[k])
      .map(k => k.replace(/([A-Z])/g, ' $1').trim().toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      scale: projectScale,
      tier: premiumLevel,
      message: `Hi SS Interiors, I am interested in designing my ${projectScale} with the '${premiumLevel}' Scandinavian Dark design. I also selected these extras: [${selectedExtras || 'None'}]. Please schedule an initial site visit.`
    }));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setFormError('Please fill out Name, Phone, and Email to submit.');
      return;
    }
    setFormError('');
    setFormLoading(true);

    // Simulate API Submission
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      // Keep state filled for confirmation or clear out
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        scale: '3 BHK',
        tier: 'Cozy Premium',
        prefDetails: ''
      });
    }, 1200);
  };

  // Service Details mapping
  const services = {
    living: {
      title: "Cozy Dark Nordic Living Spaces",
      tagline: "High-contrast layouts optimized for warmth and functionality",
      desc: "Designed with deep charcoal structural walls, offset by cool grey micro-cement paneling. We embed subtle vertical light ash wood slats to provide tactile warmth, and use ice blue linear LED tracks along the ceiling borders to elevate visual depth.",
      features: [
        "Concealed space-saving media units with ash wood slider gates",
        "Ice blue accent linear wall trim lighting",
        "Charcoal acoustic felt wall paneling for home cinema acoustics",
        "Integrated cozy window nooks with built-in pullout storage"
      ],
      priceRange: "₹3.5L - ₹6.8L",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      title: "High-Density Minimalist Kitchens",
      tagline: "Ergonomic Scandinavian cooking spaces that hide visual clutter",
      desc: "Featuring matte charcoal cabinet fronts with integrated handless profile channels. Accent walls showcase ice blue textured backsplash tiling, illuminated by under-cabinet lights. Drawers are fully customized with modular wood inserts.",
      features: [
        "Light ash wood corner organizers and cutlery inserts",
        "Concealed double-tiered corner pantry pullouts",
        "Cool grey quartz counter tops with soft anti-scratch sealant",
        "Integrated appliance garage to hide mixers, ovens, and coffee setups"
      ],
      priceRange: "₹5.0L - ₹9.5L",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    bedroom: {
      title: "Tactile Dark Sanctuary Bedrooms",
      tagline: "Calming low-lux sanctuaries for restorative sleep",
      desc: "We combine floor-to-ceiling charcoal fabric bedboards with light ash wood highlight strips. Wardrobes feature custom tinted glass sheets framed in thin metal sliders, lit inside with warm 3000K lights that reveal details elegantly.",
      features: [
        "Biometric security drawers hidden within wardrobes",
        "Floating ash bedside tables with smart charging channels",
        "Soft-glow ice blue night light bars beneath bed frame",
        "Full-height sliding wardrobes with functional layout racks"
      ],
      priceRange: "₹4.2L - ₹8.0L",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    study: {
      title: "Scandinavian Micro-Office Nooks",
      tagline: "High-focus workspace integrated into unused wall areas",
      desc: "Perfect for working from home in Secunderabad apartments. We deploy a compact wall-hung workstation made from premium ash wood, bordered by charcoal pinboards. Ice blue highlight trim defines the work zone.",
      features: [
        "Flip-up ash writing desk with embedded power grommets",
        "Integrated vertical bookshelves with light ash backing",
        "Concealed cabling trays and adapter housing",
        "Soft diffused downlighting for glare-free screens"
      ],
      priceRange: "₹1.2L - ₹2.8L",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
    }
  };

  const FAQs = [
    {
      q: "Why should I choose Scandinavian Dark style for a home in Hyderabad?",
      a: "Hyderabad's sunny climate can create glare in spaces with pure white walls. Scandinavian Dark uses deep charcoal and cool grey bases to absorb bright light, creating a soothing sanctuary. Combined with light ash wood and cozy ice blue lights, it feels cool, relaxing, and premium."
    },
    {
      q: "What materials do you use for the light ash wood highlights (#E6E6FA)?",
      a: "We use authentic white ash wood veneers and premium Birch ply framing, sealed with non-yellowing matte polyurethane coats. The code #E6E6FA represents a faint, calming light wood undertone that offsets the deep charcoal #1C1C1C elements beautifully."
    },
    {
      q: "How does the Budget Estimator calculate project pricing?",
      a: "Our estimator uses actual running-foot costs, design complexities, and material grades standard to Secunderabad residential builds. It gives an accurate 95% confident pricing range based on whether you opt for standard ash veneers or luxury premium smoked oak options."
    },
    {
      q: "Do you offer post-handover warranty on modular wardrobe drawer systems?",
      a: "Yes. All high-density modular drawer systems, soft-close sliders, and cabinet hinges carry a lifetime manufacturer warranty, backed by SS Interiors' direct 5-year workmanship warranty."
    },
    {
      q: "Where is your design studio located, and do you serve all of Secunderabad?",
      a: "Our primary studio is located in Attapur, but we have a boutique showroom near Trimulgherry, Secunderabad. We serve all areas in Hyderabad/Secunderabad, including Sainikpuri, Alwal, Begumpet, Sindhi Colony, and Gachibowli."
    }
  ];

  return (
    <div className="bg-[#1C1C1C] text-gray-200 min-h-screen font-sans selection:bg-[#87CEEB] selection:text-[#1C1C1C]">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#1C1C1C]/95 backdrop-blur-md border-b border-[#A9A9A9]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#87CEEB] text-[#1C1C1C] p-2 rounded-lg font-bold flex items-center justify-center">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">SS INTERIORS</span>
              <span className="text-xs text-[#87CEEB] uppercase tracking-widest font-mono">Secunderabad</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Aesthetic</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Modular Systems</a>
            <a href="#calculator" className="text-gray-300 hover:text-[#87CEEB] transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#87CEEB]" /> Budget Estimator
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Stories</a>
            <a href="#faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
            <a href="#contact" className="bg-[#87CEEB] text-[#1C1C1C] px-5 py-2.5 rounded-lg hover:bg-[#87CEEB]/90 transition-all font-semibold shadow-lg shadow-[#87CEEB]/10">
              Get Started
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1C1C1C] border-b border-[#A9A9A9]/10 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-white">Aesthetic</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-white">Modular Systems</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-[#87CEEB]">Budget Estimator</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-white">Stories</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-white">FAQs</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-[#87CEEB] text-[#1C1C1C] py-3 rounded-lg font-semibold">
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-20 lg:py-32 overflow-hidden border-b border-[#A9A9A9]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87CEEB]/10 border border-[#87CEEB]/20 text-[#87CEEB] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Bespoke Scandinavian Dark Concept
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              A Cozy Sanctuary of <span className="text-[#87CEEB]">Charcoal & Ash Wood</span>
            </h1>
            <p className="text-lg text-[#A9A9A9] max-w-2xl leading-relaxed">
              We design spaces that blend dark Nordic coziness with architectural functionality. Serving Secunderabad & Hyderabad with premium modular storage, acoustic integration, and custom light installations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#calculator" 
                className="bg-[#87CEEB] text-[#1C1C1C] px-8 py-4 rounded-lg hover:bg-[#87CEEB]/90 transition-all font-semibold flex items-center gap-2 shadow-lg shadow-[#87CEEB]/15"
              >
                Estimate Budget <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services" 
                className="border border-[#A9A9A9]/30 text-white px-8 py-4 rounded-lg hover:border-white transition-colors font-semibold"
              >
                View Modular Systems
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#A9A9A9]/10 max-w-xl">
              <div>
                <span className="block text-3xl font-extrabold text-white">120+</span>
                <span className="text-xs text-[#A9A9A9] uppercase font-mono tracking-wider">Homes Delivered</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-white">45 Days</span>
                <span className="text-xs text-[#A9A9A9] uppercase font-mono tracking-wider">Fast Execution</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-white">5 Years</span>
                <span className="text-xs text-[#A9A9A9] uppercase font-mono tracking-wider">Warranty</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#87CEEB]/20 via-transparent to-transparent rounded-2xl filter blur-3xl -z-10" />
            <div className="border border-[#A9A9A9]/20 p-2 rounded-2xl bg-[#1C1C1C] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                alt="Scandinavian Cozy Dark Living Room Mockup" 
                className="rounded-xl w-full h-[400px] object-cover filter brightness-95" 
              />
            </div>
            {/* Overlay interactive snippet */}
            <div className="absolute -bottom-6 -left-6 bg-[#1C1C1C] border border-[#87CEEB]/30 p-4 rounded-xl shadow-lg max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#87CEEB] animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB]">Featured Palette</span>
              </div>
              <div className="text-xs font-semibold text-white">Deep Charcoal & light ash highlights (#E6E6FA)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Tabs (High-Density Modular Systems) */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#A9A9A9]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Density Modular Systems
          </h2>
          <p className="text-base text-[#A9A9A9]">
            Pure Scandinavian form meets absolute functional density. Click through our primary modular segments below to check pricing and layout specifics.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                activeTab === key
                  ? 'bg-[#87CEEB] text-[#1C1C1C] shadow-lg shadow-[#87CEEB]/10'
                  : 'bg-[#1C1C1C] border border-[#A9A9A9]/20 text-[#A9A9A9] hover:text-white hover:border-[#A9A9A9]/40'
              }`}
            >
              {key === 'living' && 'Living Room Systems'}
              {key === 'kitchen' && 'Kitchen Studio'}
              {key === 'bedroom' && 'Bedroom Wardrobes'}
              {key === 'study' && 'Micro-Office Nooks'}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#1C1C1C] border border-[#A9A9A9]/20 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#87CEEB] bg-[#87CEEB]/10 px-3 py-1 rounded-full">
                  {services[activeTab].priceRange} Est. Range
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {services[activeTab].title}
                </h3>
                <p className="text-[#87CEEB]/90 text-sm font-medium italic">
                  "{services[activeTab].tagline}"
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {services[activeTab].desc}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-3 pt-2">
                  {services[activeTab].features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#87CEEB] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#A9A9A9]/10">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#87CEEB] hover:text-white transition-colors"
                >
                  Configure This Segment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full">
              <img 
                src={services[activeTab].image} 
                alt={services[activeTab].title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#1C1C1C] lg:via-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Estimator by Project Scale */}
      <section id="calculator" className="py-24 bg-[#1C1C1C]/40 border-b border-[#A9A9A9]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Input Side */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[#87CEEB] text-xs font-mono uppercase tracking-widest">
                  <Settings className="w-3.5 h-3.5" /> Interactive Calculator
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Scandinavian Dark Budget Estimator
                </h2>
                <p className="text-[#A9A9A9] max-w-xl">
                  Adjust your apartment scale, material finishing tiers, and functional accessories to render a real-time budgetary range for your Secunderabad home.
                </p>
              </div>

              {/* Step 1: Scale */}
              <div className="space-y-4">
                <label className="block text-sm font-mono uppercase tracking-wider text-white">
                  Step 1: Choose Project Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['2 BHK', '3 BHK', '4 BHK', 'Villa'].map((scale) => (
                    <button
                      key={scale}
                      onClick={() => setProjectScale(scale)}
                      className={`py-3.5 px-4 rounded-xl border text-sm font-bold transition-all text-center ${
                        projectScale === scale
                          ? 'border-[#87CEEB] bg-[#87CEEB]/10 text-white shadow-md'
                          : 'border-[#A9A9A9]/20 bg-[#1C1C1C] text-[#A9A9A9] hover:border-[#A9A9A9]/40 hover:text-white'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Premium Tier */}
              <div className="space-y-4">
                <label className="block text-sm font-mono uppercase tracking-wider text-white">
                  Step 2: Finishing Premium Level
                </label>
                <div className="space-y-3">
                  {[
                    {
                      name: 'Minimalist',
                      desc: 'Light ash wood highlights, basic laminate carcasses, focus on clean layout & utility.',
                      multiplier: '1.0x Base'
                    },
                    {
                      name: 'Cozy Premium',
                      desc: 'Smoked cool grey lacquer, full ash ply modular partitions, soft close slides, under-shelf linear lights.',
                      multiplier: '1.3x Base'
                    },
                    {
                      name: 'Nordic Luxury',
                      desc: 'Premium ash veneers, matte charcoal acrylics, remote ice blue light tracks, integrated metal storage racks.',
                      multiplier: '1.75x Base'
                    }
                  ].map((tier) => (
                    <button
                      key={tier.name}
                      onClick={() => setPremiumLevel(tier.name)}
                      className={`w-full text-left p-4 rounded-xl border flex justify-between items-center transition-all ${
                        premiumLevel === tier.name
                          ? 'border-[#87CEEB] bg-[#87CEEB]/10 text-white'
                          : 'border-[#A9A9A9]/20 bg-[#1C1C1C] text-[#A9A9A9] hover:border-[#A9A9A9]/40'
                      }`}
                    >
                      <div className="pr-4">
                        <span className="block text-sm font-extrabold text-white">{tier.name}</span>
                        <span className="text-xs text-[#A9A9A9] block mt-1 leading-relaxed">{tier.desc}</span>
                      </div>
                      <span className="text-xs font-mono bg-[#1C1C1C] border border-[#A9A9A9]/20 px-3 py-1 rounded-md text-white whitespace-nowrap">
                        {tier.multiplier}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Functional Addons */}
              <div className="space-y-4">
                <label className="block text-sm font-mono uppercase tracking-wider text-white">
                  Step 3: Select Custom Modular Modules
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'smartKitchen', title: 'Smart Drawer System', price: '₹95,000', desc: 'Corner slide-outs & lift-ups' },
                    { key: 'studyNook', title: 'Compact Study/Work Nook', price: '₹45,000', desc: 'Fold desk & ash storage shelf' },
                    { key: 'bioFireplace', title: 'Cozy Bio-Ethanol Fireplace', price: '₹60,000', desc: 'Recessed in living room unit' },
                    { key: 'iceBlueTracks', title: 'Ice Blue Ceiling Track Rails', price: '₹35,000', desc: 'Dynamic contrast lighting set' }
                  ].map((addon) => (
                    <button
                      key={addon.key}
                      onClick={() => toggleExtra(addon.key)}
                      className={`p-4 rounded-xl border text-left flex justify-between items-start transition-all ${
                        extras[addon.key]
                          ? 'border-[#87CEEB] bg-[#87CEEB]/10 text-white'
                          : 'border-[#A9A9A9]/20 bg-[#1C1C1C] text-[#A9A9A9] hover:border-[#A9A9A9]/40'
                      }`}
                    >
                      <div>
                        <span className="block text-sm font-bold text-white">{addon.title}</span>
                        <span className="text-xs text-[#A9A9A9] block mt-1">{addon.desc}</span>
                      </div>
                      <span className="text-xs font-mono text-[#87CEEB] whitespace-nowrap ml-2">
                        {addon.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Receipt Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 border border-[#87CEEB]/30 bg-[#1C1C1C] p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#A9A9A9]/10">
                <span className="text-xs font-mono text-[#87CEEB] uppercase tracking-wider">Estimate Receipt</span>
                <span className="text-xs font-mono text-[#A9A9A9]">SS Interiors Ltd.</span>
              </div>

              {/* Dynamic Readout */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Selected Scale:</span>
                  <span className="text-sm font-bold text-white">{projectScale} Layout</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Finishing Tier:</span>
                  <span className="text-sm font-bold text-white">{premiumLevel}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Wood Spec:</span>
                  <span className="text-sm font-bold text-white text-right max-w-[200px]">{budgetResult.woodRecommendation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Est. Timeline:</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#87CEEB]" /> {budgetResult.duration}
                  </span>
                </div>
              </div>

              {/* Price Reveal */}
              <div className="p-6 bg-[#87CEEB]/5 border border-[#87CEEB]/20 rounded-xl space-y-2 text-center">
                <span className="text-xs text-[#87CEEB] uppercase tracking-wider font-mono">Estimated Cost Range</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ₹{budgetResult.min} - ₹{budgetResult.max}
                </div>
                <span className="text-[11px] text-[#A9A9A9] block">Inclusive of design fees, woodwork, execution, & installation.</span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={applyConfigToForm}
                  className="w-full bg-[#87CEEB] text-[#1C1C1C] py-4 rounded-xl hover:bg-[#87CEEB]/90 transition-all font-bold text-center flex items-center justify-center gap-2"
                >
                  Apply & Get Free Blueprints <ArrowRight className="w-4.5 h-4.5" />
                </button>
                <div className="flex items-center gap-2 justify-center text-xs text-[#A9A9A9]">
                  <Info className="w-3.5 h-3.5" />
                  <span>No obligation consultation. Serving Secunderabad.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#A9A9A9]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-[#87CEEB] uppercase tracking-widest bg-[#87CEEB]/10 px-3 py-1 rounded-full">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved in Secunderabad & Hyderabad
          </h2>
          <p className="text-base text-[#A9A9A9]">
            Discover how our custom Scandinavian Dark aesthetic transformed ordinary flats into functional high-contrast masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dr. Anand Rao',
              role: 'Consultant Cardiologist',
              loc: 'Sainikpuri, Secunderabad',
              review: 'SS Interiors completely customized my 3 BHK in Sainikpuri using their Scandinavian Cozy Dark package. The integration of charcoal felt panels and warm ash wood highlights gives my home an incredibly relaxing, hotel-like atmosphere. Exceptional execution.',
              rating: 5,
              scope: '3 BHK Cozy Premium'
            },
            {
              name: 'Priyanka & Rahul',
              role: 'Software Architects',
              loc: 'Maredpally, Secunderabad',
              review: 'The interactive budget estimator was within 5% of our actual cost. We opted for the Nordic Luxury finishing for our 4 BHK. The ice blue lighting tracks along the ceiling receive compliments from every single guest. High density storage is super practical!',
              rating: 5,
              scope: '4 BHK Nordic Luxury'
            },
            {
              name: 'Srinivas Murthy',
              role: 'Retired Banker',
              loc: 'Alwal, Secunderabad',
              review: 'I was skeptical about a dark theme for my retirement villa, but the team balances deep charcoal with ash wood highlights so nicely that it feels spacious. The ergonomic study nook is perfect for my library. Outstanding professional process.',
              rating: 5,
              scope: 'Villa Minimalist Tier'
            }
          ].map((t, i) => (
            <div key={i} className="border border-[#A9A9A9]/10 bg-[#1C1C1C] p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#87CEEB] text-[#87CEEB]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#A9A9A9]/10 flex justify-between items-center">
                <div>
                  <span className="block text-sm font-extrabold text-white">{t.name}</span>
                  <span className="text-xs text-[#A9A9A9] block">{t.role}</span>
                  <span className="text-[10px] text-[#87CEEB] font-mono block mt-1">{t.loc}</span>
                </div>
                <span className="text-[10px] bg-[#87CEEB]/10 text-[#87CEEB] px-2.5 py-1 rounded font-mono uppercase">
                  {t.scope}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 max-w-4xl mx-auto px-6 border-b border-[#A9A9A9]/10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A9A9A9]">
            Everything you need to know about our Scandinavian Dark execution process.
          </p>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, i) => (
            <div key={i} className="border border-[#A9A9A9]/10 rounded-xl overflow-hidden bg-[#1C1C1C]">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-6 text-left font-semibold text-white hover:bg-[#87CEEB]/5 transition-colors"
              >
                <span>{faq.q}</span>
                {faqOpen[i] ? <ChevronUp className="w-5 h-5 text-[#87CEEB]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              {faqOpen[i] && (
                <div className="px-6 pb-6 pt-2 border-t border-[#A9A9A9]/5 text-sm text-[#A9A9A9] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#87CEEB]/15 to-[#1C1C1C] border border-[#87CEEB]/20 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#87CEEB] block">Let's Connect</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Book a Design Consultation
                </h2>
                <p className="text-[#A9A9A9] leading-relaxed">
                  Bring our Scandinavian Dark signature look to your residence. Visit our experience lounge in Attapur or request an in-house evaluation in Secunderabad.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#87CEEB]/10 text-[#87CEEB] p-3 rounded-lg border border-[#87CEEB]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#A9A9A9] font-mono">Call Studio</span>
                    <span className="text-sm font-bold text-white">+91 90009 88721</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#87CEEB]/10 text-[#87CEEB] p-3 rounded-lg border border-[#87CEEB]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#A9A9A9] font-mono">Email Team</span>
                    <span className="text-sm font-bold text-white">design@ss-interiors.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#87CEEB]/10 text-[#87CEEB] p-3 rounded-lg border border-[#87CEEB]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#A9A9A9] font-mono">Studio Address</span>
                    <span className="text-sm font-bold text-white">4th Floor, SS Tower, Attapur Ring Road, Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-[#1C1C1C] border border-[#A9A9A9]/10 p-6 sm:p-10 rounded-2xl shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#87CEEB]/10 text-[#87CEEB] rounded-full flex items-center justify-center mx-auto border border-[#87CEEB]/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Consultation Requested!</h3>
                  <p className="text-[#A9A9A9] max-w-md mx-auto text-sm">
                    Thank you. One of our design engineers will call you within 24 hours to schedule a measurement session and share initial Scandinavian Dark mood boards.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-[#87CEEB] font-bold underline uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && (
                    <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-300 text-sm rounded-lg">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-gray-300 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Vikram Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-[#A9A9A9]/30 focus:border-[#87CEEB] rounded-lg p-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-gray-300 font-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-[#A9A9A9]/30 focus:border-[#87CEEB] rounded-lg p-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase text-gray-300 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., vikram@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-[#A9A9A9]/30 focus:border-[#87CEEB] rounded-lg p-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-gray-300 font-semibold">Property Scale</label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-[#A9A9A9]/30 focus:border-[#87CEEB] rounded-lg p-3 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="2 BHK">2 BHK Apartment</option>
                        <option value="3 BHK">3 BHK Apartment</option>
                        <option value="4 BHK">4 BHK Apartment</option>
                        <option value="Villa">Independent Villa</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-gray-300 font-semibold">Finishing Tier</label>
                      <select
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-[#A9A9A9]/30 focus:border-[#87CEEB] rounded-lg p-3 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="Minimalist">Minimalist (Ash Wood)</option>
                        <option value="Cozy Premium">Cozy Premium (Grey Lacquer)</option>
                        <option value="Nordic Luxury">Nordic Luxury (Smoked Veneers)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase text-gray-300 font-semibold">Tell Us About Your Project</label>
                    <textarea
                      rows="4"
                      placeholder="e.g. Need high density storage and customized wood highlights for my flat in Secunderabad..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-[#A9A9A9]/30 focus:border-[#87CEEB] rounded-lg p-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#87CEEB] text-[#1C1C1C] py-4 rounded-lg font-bold hover:bg-[#87CEEB]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#87CEEB]/10 disabled:opacity-50"
                  >
                    {formLoading ? 'Scheduling Consultation...' : 'Request Site Visit & Consultation'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] border-t border-[#A9A9A9]/10 py-16 text-sm text-[#A9A9A9]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#87CEEB]" />
              <span className="text-xl font-bold tracking-tight text-white">SS INTERIORS</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Premium Scandinavian Cozy Dark interior design for discerning residential and commercial clients across Hyderabad and Secunderabad.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs font-mono">Our Segments</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Cozy Dark Living Rooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">High-Density Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tactile Sanctuary Bedrooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Micro-Office Workstations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs font-mono">Locations</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-[#A9A9A9]">Attapur Studio Lounge</span></li>
              <li><span className="text-[#A9A9A9]">Sainikpuri Project Suite</span></li>
              <li><span className="text-[#A9A9A9]">Trimulgherry Design Room</span></li>
              <li><span className="text-[#A9A9A9]">Secunderabad Central Lounge</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs font-mono">Licensing</h4>
            <p className="text-xs leading-relaxed">
              © {new Date().getFullYear()} SS Interiors Secunderabad. All rights reserved. Registered under Telangana Micro & Small Enterprises Act.
            </p>
            <div className="text-[11px] text-gray-500 font-mono">
              Designed according to Scandinavian Cozy Dark visual standards.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

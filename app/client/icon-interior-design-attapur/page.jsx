"use client";
import React, { useState } from 'react';
import {
  Heart, Sparkles, Check, ChevronDown, ChevronUp,
  Star, Phone, Mail, MapPin, Menu, X, ArrowRight, Palette,
  Clock, Leaf, AlertCircle, CheckCircle
} from 'lucide-react';

export default function IconInteriorDesignAttapurPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({});

  // Configurator State
  const [propertySize, setPropertySize] = useState('1500 SQFT'); // 1000 SQFT, 1500 SQFT, 2000 SQFT, 2500 SQFT
  const [materialSelection, setMaterialSelection] = useState('Premium Acrylic'); // Eco-Bespoke, Premium Acrylic, Elite Matte Veneers
  const [additionalAddons, setAdditionalAddons] = useState({
    ecoMaterials: true,
    curvedFittings: false,
    zenBalcony: false,
    pastelLighting: true
  });

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    size: '1500 SQFT',
    material: 'Premium Acrylic',
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

  // Toggle Addons
  const toggleAddon = (key) => {
    setAdditionalAddons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate Budget
  const calculateBudget = () => {
    let baseRate = 320; // Per SQFT base rate
    let sizeMultiplier = 1000;
    if (propertySize === '1500 SQFT') {
      baseRate = 340;
      sizeMultiplier = 1500;
    } else if (propertySize === '2000 SQFT') {
      baseRate = 360;
      sizeMultiplier = 2000;
    } else if (propertySize === '2500 SQFT') {
      baseRate = 380;
      sizeMultiplier = 2500;
    }

    let materialCostPerSqft = 800; // Eco-Bespoke
    if (materialSelection === 'Premium Acrylic') materialCostPerSqft = 1200;
    else if (materialSelection === 'Elite Matte Veneers') materialCostPerSqft = 1750;

    let addonFlatCost = 0;
    if (additionalAddons.ecoMaterials) addonFlatCost += 40000;
    if (additionalAddons.curvedFittings) addonFlatCost += 75000;
    if (additionalAddons.zenBalcony) addonFlatCost += 50000;
    if (additionalAddons.pastelLighting) addonFlatCost += 30000;

    const baseCost = sizeMultiplier * (baseRate + materialCostPerSqft);
    const totalEstimate = baseCost + addonFlatCost;
    
    const minEstimate = Math.round(totalEstimate * 0.95);
    const maxEstimate = Math.round(totalEstimate * 1.08);

    let duration = "5-7 Weeks";
    if (propertySize === '2000 SQFT' || propertySize === '2500 SQFT') {
      duration = "8-10 Weeks";
    }

    return {
      min: minEstimate.toLocaleString('en-IN'),
      max: maxEstimate.toLocaleString('en-IN'),
      duration,
      materialSpec: materialSelection === 'Elite Matte Veneers' ? 'Natural Ash Veneers + Soft Lacquer' : 'Low-VOC Pastel Laminates'
    };
  };

  const budgetResult = calculateBudget();

  // Apply Config to Form
  const applyConfigToForm = () => {
    const selectedAddons = Object.keys(additionalAddons)
      .filter(k => additionalAddons[k])
      .map(k => k.replace(/([A-Z])/g, ' $1').trim().toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      size: propertySize,
      material: materialSelection,
      message: `Hi Icon Design, I configured my: ${propertySize} using '${materialSelection}' finish. Selected Addons: [${selectedAddons || 'None'}]. Let's discuss planning my pastel minimalist dream home.`
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
      setFormError('Please input your Name, Phone, and Email to proceed.');
      return;
    }
    setFormError('');
    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        size: '1500 SQFT',
        material: 'Premium Acrylic',
        details: ''
      });
    }, 1200);
  };

  const services = {
    living: {
      title: "Zen Pastel Living Lounges",
      tagline: "Serene light-filled layouts that encourage absolute stillness",
      desc: "Created using warm sand `#FAF0E6` backgrounds as a base. We paint gentle accent panels in soft lavender `#E6E6FA` and introduce bespoke soft peach `#FFDAB9` round-edged lounge chairs. All storage units feature soft-touch hidden doors with gently curved profile edges.",
      features: [
        "Curved drywall structures that soften room edges",
        "Diffused cove systems creating zero-glare soft shadows",
        "Concealed low-VOC ash media consoles",
        "Integrated reading nooks bordered by pastel panels"
      ],
      priceRange: "₹3.8L - ₹6.2L",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      title: "Friendly Peach-Tinted Kitchens",
      tagline: "Clean, calming, and functional modular culinary spaces",
      desc: "Ditching clinical steel for warm, inviting pastel minimal aesthetics. Cabinet doors are finished in anti-fingerprint peach acrylic overlays, accented by soft brass hardware. Built-in pantries organize your spice sets and containers cleanly.",
      features: [
        "Soft-closing pullout units with organic beech dividers",
        "Matte sand-toned composite sinks & brass faucets",
        "Recessed warm LED profile rails (3000K daylight sync)",
        "Premium easy-wipe quartz backsplashes in soft white"
      ],
      priceRange: "₹4.5L - ₹8.0L",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    kids: {
      title: "Lavender & Cloud Creative Bedrooms",
      tagline: "Inspiring children's bedrooms with friendly rounded shapes",
      desc: "Designed using our signature calming lavender `#E6E6FA`. We feature custom cloud-shaped bed boards, rounded corner wardrobes to prevent bumps, and soft-closing drawer units. Play spaces integrate interactive chalk and magnetic boards.",
      features: [
        "Rounded corner shelves for books & soft toy storage",
        "Calming lavender & peach accent wall detailing",
        "Concealed under-bed pullout play desks",
        "Soft organic cotton headboard cushioning"
      ],
      priceRange: "₹3.5L - ₹5.8L",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    balcony: {
      title: "Zen Sand Meditation Balconies",
      tagline: "Compact open-air escapes optimized for morning coffee",
      desc: "We transform standard Attapur apartment balconies into peaceful micro-sanctuaries. Incorporating composite wooden floor tiles, sand-colored texturized walls, and integrated planters filled with air-purifying flora.",
      features: [
        "Fold-down wall-hung wooden tea counter",
        "Custom weather-proof peach cushions & storage bench",
        "Soft hanging warm bulbs for evening reading",
        "Vertical planters with drip irrigation trays"
      ],
      priceRange: "₹90,000 - ₹2.2L",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
    }
  };

  const FAQs = [
    {
      q: "What makes Pastel Minimalism different from cold modern minimalism?",
      a: "Traditional minimalism often uses sterile whites, blacks, and sharp angles which can feel uninviting. Pastel Minimalism uses warm sand backgrounds (#FAF0E6) and comforting pastel accents like lavender (#E6E6FA) and soft peach (#FFDAB9), combined with rounded corners and curved profiles to make the home feel calming, friendly, and cozy."
    },
    {
      q: "Are light-colored pastel finishes difficult to clean and maintain?",
      a: "Not at all. We utilize next-generation anti-fingerprint acrylic sheets and thermal laminate materials. They are completely scratch-resistant, repel stains, and can be easily wiped clean with a damp microfiber cloth, making them highly practical for families in Hyderabad."
    },
    {
      q: "Can I customize the color ratios between peach and lavender?",
      a: "Yes. During our initial 3D planning phase, we use a balanced layout scheme (typically 60% Sand background, 30% soft Lavender, and 10% Peach accents). We can adjust this ratio based on your personal preference and the natural light of your rooms."
    },
    {
      q: "Do you offer modular wardrobe layout choices?",
      a: "Absolutely. Our wardrobe structures are highly customizable. You can configure hanging rods, internal accessory pullouts, laundry trays, and biometric locks to fit your individual lifestyle needs perfectly."
    },
    {
      q: "Where in Attapur is your experience center located?",
      a: "Our experience studio is located right on the Attapur Main Road, opposite the Pillar 140 area. We showcase full-scale pastel minimalist living room and kitchen models. You are welcome to visit or request a free site audit."
    }
  ];

  return (
    <div className="bg-[#FAF0E6] text-stone-800 min-h-screen font-sans selection:bg-[#FFDAB9] selection:text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FAF0E6]/95 backdrop-blur-md border-b border-[#E6E6FA]/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#E6E6FA] text-stone-700 p-2.5 rounded-full flex items-center justify-center border border-[#FFDAB9]">
              <Palette className="w-5.5 h-5.5 text-stone-600" />
            </div>
            <div>
              <span className="text-xl font-serif font-bold tracking-tight text-stone-900 block">ICON INTERIORS</span>
              <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-semibold">Attapur / Hyderabad</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#concept" className="text-stone-600 hover:text-stone-900 transition-colors">Philosophy</a>
            <a href="#portfolio" className="text-stone-600 hover:text-stone-900 transition-colors">Soft Galleries</a>
            <a href="#configurator" className="text-stone-600 hover:text-stone-950 transition-colors flex items-center gap-1 bg-[#E6E6FA]/40 px-3 py-1 rounded-full border border-[#E6E6FA]/80">
              <Sparkles className="w-3.5 h-3.5 text-stone-500" /> Configurator
            </a>
            <a href="#stories" className="text-stone-600 hover:text-stone-900 transition-colors">Reviews</a>
            <a href="#faqs" className="text-stone-600 hover:text-stone-900 transition-colors">FAQs</a>
            <a 
              href="#contact" 
              className="bg-[#FFDAB9] text-stone-900 px-6 py-2.5 rounded-full hover:bg-[#FFDAB9]/80 transition-all shadow-md shadow-[#FFDAB9]/20 font-bold"
            >
              Get Consultation
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button 
            className="md:hidden text-stone-600 hover:text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF0E6] border-b border-[#E6E6FA]/60 px-6 py-6 space-y-4">
            <a href="#concept" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-stone-700 hover:text-stone-900">Philosophy</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-stone-700 hover:text-stone-900">Soft Galleries</a>
            <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-stone-800 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-stone-500" /> Configurator
            </a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-stone-700 hover:text-stone-900">Reviews</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-stone-700 hover:text-stone-900">FAQs</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-[#FFDAB9] text-stone-900 py-3 rounded-full font-bold">
              Get Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="concept" className="relative py-20 lg:py-28 overflow-hidden border-b border-[#E6E6FA]/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6E6FA] text-stone-700 text-xs font-mono uppercase tracking-widest border border-[#E6E6FA]">
              <Heart className="w-3.5 h-3.5 text-rose-400" /> Friendly, Calming Interiors
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]">
              Pastel Minimalism for a <span className="text-stone-700">Peaceful Home</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              We design peaceful sanctuaries using soft lavender shadows, warm peach accents, and texturized sand backgrounds. Our layouts embrace rounded corners and tactile comfort, optimized for modern families in Attapur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#configurator" 
                className="bg-[#FFDAB9] text-stone-950 px-8 py-4 rounded-full hover:bg-[#FFDAB9]/90 transition-all font-bold flex items-center gap-2 shadow-md shadow-[#FFDAB9]/35"
              >
                Configure Budget <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#portfolio" 
                className="bg-[#E6E6FA]/50 border border-[#E6E6FA] text-stone-700 px-8 py-4 rounded-full hover:bg-[#E6E6FA] transition-colors font-bold"
              >
                Explore Galleries
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E6E6FA] max-w-xl">
              <div>
                <span className="block text-3xl font-serif font-bold text-stone-900">80+</span>
                <span className="text-[10px] text-stone-500 uppercase font-semibold tracking-wider">Dream Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-stone-900">Eco-Built</span>
                <span className="text-[10px] text-stone-500 uppercase font-semibold tracking-wider">100% Low-VOC</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-stone-900">3 Years</span>
                <span className="text-[10px] text-stone-500 uppercase font-semibold tracking-wider">Care Support</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E6E6FA] via-transparent to-transparent rounded-full filter blur-3xl -z-10" />
            <div className="border-4 border-white p-2.5 rounded-[2.5rem] bg-[#FAF0E6] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" 
                alt="Pastel Minimalist Room Showcase" 
                className="rounded-[2rem] w-full h-[380px] object-cover" 
              />
            </div>
            {/* Float badge */}
            <div className="absolute -top-6 -right-6 bg-white border border-[#E6E6FA] p-4 rounded-2xl shadow-md max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-1.5 mb-1">
                <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider">Child Friendly</span>
              </div>
              <div className="text-xs text-stone-700 leading-snug">No sharp corners, all non-toxic pastel stains.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#E6E6FA]/40">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-[#E6E6FA] px-3.5 py-1.5 rounded-full border border-[#E6E6FA]">
            Soft Galleries
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Explore Pastel Sanctuary Portfolios
          </h2>
          <p className="text-stone-600">
            Click on each tab below to view how we combine sand textures, lavender boards, and rounded curves into functional living zones.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                activeTab === key
                  ? 'bg-[#E6E6FA] border-[#E6E6FA] text-stone-800 shadow-md'
                  : 'bg-white border-[#E6E6FA]/60 text-stone-500 hover:text-stone-800 hover:border-[#E6E6FA]'
              }`}
            >
              {key === 'living' && 'Zen Living Rooms'}
              {key === 'kitchen' && 'Peach Kitchens'}
              {key === 'kids' && 'Lavender Kids Rooms'}
              {key === 'balcony' && 'Zen Balconies'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white border border-[#E6E6FA]/60 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase text-stone-500 bg-[#FAF0E6] px-3.5 py-1.5 rounded-full border border-[#E6E6FA]/60">
                  Est. Cost: {services[activeTab].priceRange}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
                  {services[activeTab].title}
                </h3>
                <p className="text-stone-600 text-xs italic font-medium">
                  "{services[activeTab].tagline}"
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {services[activeTab].desc}
                </p>

                <ul className="space-y-3 pt-2">
                  {services[activeTab].features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <Check className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E6E6FA]/40">
                <a 
                  href="#configurator" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-stone-950 transition-colors"
                >
                  Configure My Space <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full">
              <img 
                src={services[activeTab].image} 
                alt={services[activeTab].title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-24 bg-white/45 border-b border-[#E6E6FA]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Input card */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-widest bg-[#E6E6FA]/60 px-3 py-1 rounded-full">
                  <Palette className="w-3.5 h-3.5" /> Budget Configurator
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                  Design Your Pastel Space
                </h2>
                <p className="text-stone-600 max-w-xl">
                  Adjust your home's square footage size and select premium low-VOC finishes to instantly configure your budget estimation.
                </p>
              </div>

              {/* Size Select */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold">
                  Step 1: Select Property Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['1000 SQFT', '1500 SQFT', '2000 SQFT', '2500 SQFT'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setPropertySize(size)}
                      className={`py-3.5 px-4 rounded-2xl border text-xs font-bold transition-all text-center ${
                        propertySize === size
                          ? 'border-[#E6E6FA] bg-[#E6E6FA]/50 text-stone-900 shadow-sm'
                          : 'border-[#E6E6FA]/40 bg-white text-stone-500 hover:border-[#E6E6FA]/80 hover:text-stone-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Select */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold">
                  Step 2: Material & Carcass Finishing
                </label>
                <div className="space-y-3">
                  {[
                    {
                      name: 'Eco-Bespoke',
                      desc: 'Calming low-VOC MDF carcasses, anti-dust laminate finishes in soft pastel shades.',
                      priceInfo: 'Standard Eco'
                    },
                    {
                      name: 'Premium Acrylic',
                      desc: 'Anti-scratch acrylic surfaces in custom lavender & peach, high-density boiling waterproof cabinets.',
                      priceInfo: 'Durability+ Gloss'
                    },
                    {
                      name: 'Elite Matte Veneers',
                      desc: 'Authentic ash wood veneer paneling with natural grains, custom premium matte lacquer accents.',
                      priceInfo: 'Luxury Bespoke'
                    }
                  ].map((mat) => (
                    <button
                      key={mat.name}
                      onClick={() => setMaterialSelection(mat.name)}
                      className={`w-full text-left p-4 rounded-2xl border flex justify-between items-center transition-all ${
                        materialSelection === mat.name
                          ? 'border-[#E6E6FA] bg-[#E6E6FA]/40 text-stone-900'
                          : 'border-[#E6E6FA]/40 bg-white text-stone-500 hover:border-[#E6E6FA]'
                      }`}
                    >
                      <div className="pr-4">
                        <span className="block text-sm font-bold text-stone-900">{mat.name}</span>
                        <span className="text-xs text-stone-500 block mt-1 leading-relaxed">{mat.desc}</span>
                      </div>
                      <span className="text-xs font-mono bg-[#FAF0E6] border border-[#E6E6FA]/40 px-3 py-1 rounded-full text-stone-700 whitespace-nowrap">
                        {mat.priceInfo}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Select */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold">
                  Step 3: Select Calming Spaces Addons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'ecoMaterials', title: '100% Green Materials', price: '₹40,000', desc: 'Zero VOC organic paints' },
                    { key: 'curvedFittings', title: 'Curved Architectural Profiles', price: '₹75,000', desc: 'Custom rounded wall framing' },
                    { key: 'zenBalcony', title: 'Meditation Zen Balcony', price: '₹50,000', desc: 'Wood tiles & built-in planters' },
                    { key: 'pastelLighting', title: 'Pastel Glow Lighting Package', price: '₹30,000', desc: 'Diffused twilight strip loops' }
                  ].map((addon) => (
                    <button
                      key={addon.key}
                      onClick={() => toggleAddon(addon.key)}
                      className={`p-4 rounded-2xl border text-left flex justify-between items-start transition-all ${
                        additionalAddons[addon.key]
                          ? 'border-[#E6E6FA] bg-[#E6E6FA]/40 text-stone-900'
                          : 'border-[#E6E6FA]/40 bg-white text-stone-500 hover:border-[#E6E6FA]'
                      }`}
                    >
                      <div>
                        <span className="block text-sm font-bold text-stone-900">{addon.title}</span>
                        <span className="text-xs text-stone-500 block mt-1">{addon.desc}</span>
                      </div>
                      <span className="text-xs font-mono text-stone-600 whitespace-nowrap ml-2">
                        {addon.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Receipt Summary Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 border-2 border-[#E6E6FA] bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E6FA]/60">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">Project Specification</span>
                <span className="text-[10px] bg-[#FAF0E6] px-2.5 py-1 rounded-full text-stone-600 border border-[#E6E6FA]">Icon Interior</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-500">Property Size:</span>
                  <span className="font-bold text-stone-900">{propertySize}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-500">Material Standard:</span>
                  <span className="font-bold text-stone-900">{materialSelection}</span>
                </div>
                <div className="flex justify-between items-start text-sm">
                  <span className="text-stone-500">Carcass Spec:</span>
                  <span className="font-bold text-stone-900 text-right max-w-[200px]">{budgetResult.materialSpec}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-500">Work Duration:</span>
                  <span className="font-bold text-stone-900 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-stone-500" /> {budgetResult.duration}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#FAF0E6]/50 border border-[#E6E6FA]/60 rounded-2xl text-center space-y-1.5">
                <span className="text-xs text-stone-500 uppercase font-mono tracking-wider">Estimated Budget Range</span>
                <div className="text-3xl font-serif font-bold text-stone-900">
                  ₹{budgetResult.min} - ₹{budgetResult.max}
                </div>
                <span className="text-[10px] text-stone-500 block">Includes design execution fees and 3D modeling drafts.</span>
              </div>

              <button
                onClick={applyConfigToForm}
                className="w-full bg-[#FFDAB9] text-stone-900 py-4 rounded-full hover:bg-[#FFDAB9]/80 transition-all font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-[#FFDAB9]/25"
              >
                Send Config to Design Team <ArrowRight className="w-4.5 h-4.5 text-stone-700" />
              </button>

              <div className="text-center">
                <span className="text-[11px] text-stone-500">Initial planning consultation is free. Servicing Attapur.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#E6E6FA]/40">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 bg-[#E6E6FA] px-3.5 py-1.5 rounded-full border border-[#E6E6FA]">
            Dream Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Happy Families in Attapur
          </h2>
          <p className="text-stone-600">
            Read how we transformed local apartments into calming, baby-safe pastel sanctuaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dr. Kavitha Reddy',
              role: 'Pediatrician',
              loc: 'Hyderguda, Attapur',
              review: 'I wanted a home that felt like a quiet getaway after long hospital shifts. Icon design team built a lovely lavender-themed master bedroom and a calming sand-textured lounge that is completely soothing. The rounded edges make it very safe for my toddler.',
              rating: 5,
              spec: '1500 SQFT Premium Acrylic'
            },
            {
              name: 'Abhishek & Neha',
              role: 'Product Designers',
              loc: 'Janapriya Heights, Attapur',
              review: 'As designers, we had very high aesthetic expectations. The combination of peach kitchen shutters and soft sand flooring is absolutely stunning. They managed to make a high-density utility area look incredibly tidy and minimalist. We highly recommend them!',
              rating: 5,
              spec: '2000 SQFT Elite Veneers'
            },
            {
              name: 'Mr. & Mrs. Siddiqui',
              role: 'Software Developers',
              loc: 'Fort View Colony, Rajendranagar',
              review: 'The material configurator tool on their website was extremely helpful. The site managers were polite, finished the work 5 days before the deadline, and didn\'t leave a single spot. The Zen mediation balcony has become our favorite spot.',
              rating: 5,
              spec: '1000 SQFT Eco-Bespoke'
            }
          ].map((story, i) => (
            <div key={i} className="border border-[#E6E6FA] bg-white p-8 rounded-[2rem] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(story.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#FFDAB9] text-[#FFDAB9]" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">
                  "{story.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E6E6FA]/60 flex justify-between items-center">
                <div>
                  <span className="block text-sm font-bold text-stone-900">{story.name}</span>
                  <span className="text-xs text-stone-500 block">{story.role}</span>
                  <span className="text-[10px] text-stone-700 font-semibold block mt-1">{story.loc}</span>
                </div>
                <span className="text-[10px] bg-[#E6E6FA] text-stone-700 px-3 py-1 rounded-full font-mono border border-[#E6E6FA]">
                  {story.spec}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 max-w-4xl mx-auto px-6 border-b border-[#E6E6FA]/40">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600">
            Have questions about our calming design philosophy or material safety? Find answers here.
          </p>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, i) => (
            <div key={i} className="border border-[#E6E6FA]/60 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-6 text-left font-semibold text-stone-800 hover:bg-[#FAF0E6] transition-colors"
              >
                <span>{faq.q}</span>
                {faqOpen[i] ? <ChevronUp className="w-5 h-5 text-stone-600" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
              </button>

              {faqOpen[i] && (
                <div className="px-6 pb-6 pt-2 border-t border-[#E6E6FA]/40 text-sm text-stone-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#E6E6FA]/60 via-[#FAF0E6] to-[#FFDAB9]/40 border-2 border-[#E6E6FA] rounded-[3rem] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">Say Hello</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                  Design Your Calming Refuge
                </h2>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  Ready to add soft pastel minimalist beauty to your flat? Schedule an appointment at our showroom Pillar 140, Attapur or book a measurement session.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-stone-700 p-3.5 rounded-full border border-[#E6E6FA] shadow-sm">
                    <Phone className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-stone-500 font-semibold font-mono">Talk to Designer</span>
                    <span className="text-sm font-bold text-stone-900">+91 98667 93847</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white text-stone-700 p-3.5 rounded-full border border-[#E6E6FA] shadow-sm">
                    <Mail className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-stone-500 font-semibold font-mono">Email Studio</span>
                    <span className="text-sm font-bold text-stone-900">info@iconinteriordesign.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white text-stone-700 p-3.5 rounded-full border border-[#E6E6FA] shadow-sm">
                    <MapPin className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-stone-500 font-semibold font-mono">Studio Address</span>
                    <span className="text-sm font-bold text-stone-900">2nd Floor, Icon Heights, Attapur Main Rd, Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-white border border-[#E6E6FA]/80 p-6 sm:p-10 rounded-[2.5rem] shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#E6E6FA] text-stone-700 rounded-full flex items-center justify-center mx-auto border border-[#E6E6FA]">
                    <CheckCircle className="w-8 h-8 text-stone-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">Request Sent Successfully!</h3>
                  <p className="text-stone-500 max-w-md mx-auto text-sm">
                    Thank you. We have received your layout size configuration. Our senior consultant will call you within 24 hours to schedule your free site planning layout.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-stone-600 font-bold underline uppercase tracking-wider hover:text-stone-900 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && (
                    <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-stone-600 font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kavitha Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF0E6]/30 border border-[#E6E6FA] focus:border-[#E6E6FA] focus:ring-1 focus:ring-[#E6E6FA] rounded-xl p-3 text-sm text-stone-800 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-stone-600 font-bold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98667 93847"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF0E6]/30 border border-[#E6E6FA] focus:border-[#E6E6FA] focus:ring-1 focus:ring-[#E6E6FA] rounded-xl p-3 text-sm text-stone-800 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase text-stone-600 font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. info@iconinteriordesign.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF0E6]/30 border border-[#E6E6FA] focus:border-[#E6E6FA] focus:ring-1 focus:ring-[#E6E6FA] rounded-xl p-3 text-sm text-stone-800 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-stone-600 font-bold">Property Size</label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full bg-white border border-[#E6E6FA] focus:border-[#E6E6FA] rounded-xl p-3 text-sm text-stone-800 focus:outline-none"
                      >
                        <option value="1000 SQFT">1000 SQFT Flat</option>
                        <option value="1500 SQFT">1500 SQFT Flat</option>
                        <option value="2000 SQFT">2000 SQFT Flat</option>
                        <option value="2500 SQFT">2500+ SQFT Villa</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase text-stone-600 font-bold">Material standard</label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className="w-full bg-white border border-[#E6E6FA] focus:border-[#E6E6FA] rounded-xl p-3 text-sm text-stone-800 focus:outline-none"
                      >
                        <option value="Eco-Bespoke">Eco-Bespoke Laminates</option>
                        <option value="Premium Acrylic">Premium Acrylic Pastels</option>
                        <option value="Elite Matte Veneers">Elite Veneer + Lacquer</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase text-stone-600 font-bold">Dream Project Details</label>
                    <textarea
                      rows="4"
                      placeholder="e.g. Planning child friendly spaces with soft colors in Attapur..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF0E6]/30 border border-[#E6E6FA] focus:border-[#E6E6FA] focus:ring-1 focus:ring-[#E6E6FA] rounded-xl p-3 text-sm text-stone-800 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#FFDAB9] text-stone-900 py-4 rounded-full font-bold hover:bg-[#FFDAB9]/90 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#FFDAB9]/10 disabled:opacity-50"
                  >
                    {formLoading ? 'Submitting Dream Brief...' : 'Request Free Measurement Visit'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF0E6] border-t border-[#E6E6FA] py-16 text-sm text-stone-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="w-5.5 h-5.5 text-stone-700" />
              <span className="text-xl font-serif font-bold tracking-tight text-stone-900">ICON INTERIORS</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs text-stone-500">
              Calming, safe, and beautiful Pastel Minimalist interior designs for contemporary homes in Hyderabad.
            </p>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-4 uppercase tracking-wider text-xs font-mono">Our Portfolios</h4>
            <ul className="space-y-2.5 text-xs text-stone-500">
              <li><a href="#portfolio" className="hover:text-stone-900 transition-colors">Zen Living Rooms</a></li>
              <li><a href="#portfolio" className="hover:text-stone-900 transition-colors">Peach Culinary Kitchens</a></li>
              <li><a href="#portfolio" className="hover:text-stone-900 transition-colors">Lavender Kids Bedrooms</a></li>
              <li><a href="#portfolio" className="hover:text-stone-900 transition-colors">Zen Meditation Balconies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-4 uppercase tracking-wider text-xs font-mono">Areas Served</h4>
            <ul className="space-y-2.5 text-xs text-stone-500">
              <li><span className="text-stone-600">Attapur Ring Road</span></li>
              <li><span className="text-stone-600">Rajendranagar</span></li>
              <li><span className="text-stone-600">Hyderguda (Attapur)</span></li>
              <li><span className="text-stone-600">Mehdipatnam</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-stone-900 font-bold uppercase tracking-wider text-xs font-mono">Legal & License</h4>
            <p className="text-xs leading-relaxed text-stone-500">
              © {new Date().getFullYear()} Icon Interior Design Attapur. All rights reserved. Custom-made for families in Telangana.
            </p>
            <div className="text-[10px] text-stone-400 font-mono">
              Designed around soft-focused, rounded-edge pastel guidelines.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

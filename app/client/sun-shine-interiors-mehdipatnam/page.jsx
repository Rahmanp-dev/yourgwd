"use client";

import React, { useState } from 'react';
import { 
  Compass, 
  Sun, 
  Home, 
  Ruler, 
  Sparkles, 
  Star, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Calendar, 
  Hammer, 
  ShieldCheck, 
  Info,
  Loader2
} from 'lucide-react';

export default function SunShineInteriorsMehdipatnamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState('tuscan');
  const [faqOpen, setFaqOpen] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false
  });

  // Dynamic Planner States
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [qualityTier, setQualityTier] = useState('Modern Med Select');
  const [finishes, setFinishes] = useState({
    terracottaTiles: true,
    archedNiched: true,
    oliveCabinetry: false,
    woodenBeams: false
  });

  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredProperty: '3 BHK',
    selectedTier: 'Modern Med Select',
    customNotes: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Toggle FAQ Accordion
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Toggle Finishes Toggles
  const toggleFinish = (key) => {
    setFinishes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Cost Calculator Logic
  const calculateEstimate = () => {
    let basePrice = 550000; // 2 BHK base
    if (propertyType === '3 BHK') basePrice = 780000;
    else if (propertyType === '4 BHK') basePrice = 1100000;
    else if (propertyType === 'Villa') basePrice = 1750000;

    let tierMultiplier = 1.0; // Rustica Basic
    if (qualityTier === 'Modern Med Select') tierMultiplier = 1.3;
    else if (qualityTier === 'Sun-Drenched Luxury') tierMultiplier = 1.75;

    let finishesCost = 0;
    if (finishes.terracottaTiles) finishesCost += 65000;
    if (finishes.archedNiched) finishesCost += 45000;
    if (finishes.oliveCabinetry) finishesCost += 80000;
    if (finishes.woodenBeams) finishesCost += 120000;

    const minEstimate = Math.round((basePrice * tierMultiplier) + finishesCost);
    const maxEstimate = Math.round(((basePrice * tierMultiplier) + finishesCost) * 1.12);

    return {
      min: minEstimate.toLocaleString('en-IN'),
      max: maxEstimate.toLocaleString('en-IN')
    };
  };

  const currentEstimate = calculateEstimate();

  // Apply Configurator values to Contact Form
  const applyConfigToForm = () => {
    const selectedFinishes = Object.keys(finishes)
      .filter(k => finishes[k])
      .map(k => k === 'terracottaTiles' ? 'Terracotta Tile Accents' 
                : k === 'archedNiched' ? 'Arched Wall Niches' 
                : k === 'oliveCabinetry' ? 'Olive Green Cabinets' 
                : 'Exposed Wooden Beams')
      .join(', ');

    setFormData(prev => ({
      ...prev,
      preferredProperty: propertyType,
      selectedTier: qualityTier,
      message: `Hi Sun Shine Interiors Hyderabad, I used your Mediterranean Configurator to design my ${propertyType}. I selected the '${qualityTier}' tier and the following finishes: [${selectedFinishes || 'None'}]. Please share a detailed design proposal and floor plans.`
    }));

    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }

    setFormLoading(true);

    // Simulate API Post request
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredProperty: '3 BHK',
        selectedTier: 'Modern Med Select',
        customNotes: ''
      });
    }, 1800);
  };

  // Mediterranean Portfolio Content
  const portfolioTabs = {
    tuscan: {
      title: 'Tuscan Sun Living Rooms',
      subtitle: 'Earth-toned layouts built for modern family gatherings',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Bringing the rustic elegance of Tuscany to Hyderabad. Features include double-arched accent walls, textured plaster finishes in warm cream, exposed hand-finished ceiling beams, and low-profile linen sofas that highlight the spaciousness.',
      details: ['Handmade terracotta hearth accents', 'Travertine-style floor tiling', 'Bespoke walnut arched bookshelves', 'Warm recessed lighting (2700K)']
    },
    grecian: {
      title: 'Santorini Breeze Kitchens',
      subtitle: 'Minimalist white plaster with deep olive-green highlights',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      description: 'A striking blend of cool aesthetics and warm functionality. Clean plaster finishes are paired with customized olive green cabinet frames, integrated brass handles, open shelving, and microcement countertops for an effortless coastal feel.',
      details: ['Olive green matte cabinetry (#808000)', 'Smooth white plaster backsplashes', 'Concealed smart pantry storage', 'Woven rattan pendant lighting']
    },
    spanish: {
      title: 'Spanish Revival Bedrooms',
      subtitle: 'Arched entryways, custom ironwork, and sunlit alcoves',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      description: 'A sanctuary of peace designed with Spanish colonial elements. From heavy carved oak doors to delicate wrought-iron bed frames, detailed alcove vanity desks, and rich clay planter accents that thrive in natural sunlight.',
      details: ['Intricate hand-painted tile borders', 'Arched passage portals', 'Concealed walk-in wardrobes with louvers', 'Dimmable terracotta wall sconces']
    },
    provence: {
      title: 'Provence Country Dining',
      subtitle: 'Sun-drenched dining halls with rustic French flair',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80',
      description: 'Perfect for long family lunches and celebratory dinners. A custom-carved rustic dining table sits beneath exposed distressed wood beams, complemented by built-in arched wine displays and French windows overlooking green balcony spaces.',
      details: ['Distressed oak dining layouts', 'Arched niche stone displays', 'Linen upholstered seating', 'Wrought-iron chandelier accents']
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-sans antialiased selection:bg-[#C04000]/10 selection:text-[#C04000]">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#2C1810]/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#C04000] flex items-center justify-center text-white">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#C04000]">Sun Shine Interiors</span>
              <span className="text-xs block text-[#808000] font-medium tracking-widest uppercase -mt-1">Hyderabad</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="hover:text-[#C04000] transition-colors">About</a>
            <a href="#portfolio" className="hover:text-[#C04000] transition-colors">Portfolios</a>
            <a href="#planner" className="hover:text-[#C04000] transition-colors">Interactive Planner</a>
            <a href="#testimonials" className="hover:text-[#C04000] transition-colors">Stories</a>
            <a href="#faq" className="hover:text-[#C04000] transition-colors">FAQ</a>
            <a 
              href="#contact" 
              className="bg-[#C04000] text-white px-5 py-2.5 rounded-full hover:bg-[#A03500] transition-all duration-300 font-semibold shadow-md shadow-[#C04000]/10 hover:shadow-[#C04000]/20 flex items-center gap-2"
            >
              Consult a Designer <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-[#2C1810] hover:bg-[#2C1810]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C04000]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-[#2C1810]/10 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#2C1810]/5 transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#2C1810]/5 transition-colors font-medium"
            >
              Portfolios
            </a>
            <a 
              href="#planner" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#2C1810]/5 transition-colors font-medium"
            >
              Interactive Planner
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#2C1810]/5 transition-colors font-medium"
            >
              Stories
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-[#2C1810]/5 transition-colors font-medium"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#C04000] text-white py-3 rounded-full hover:bg-[#A03500] transition-colors font-semibold shadow-md"
            >
              Consult a Designer
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Arched Mediterranean Theme */}
      <section id="about" className="relative overflow-hidden pt-12 pb-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(#C04000_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#808000]/10 text-[#808000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <Sun className="w-4 h-4 text-[#C04000] animate-spin-slow" /> Sun-Drenched European Aesthetics in Attapur
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C1810] font-bold tracking-tight leading-tight">
                Modern <span className="text-[#C04000] relative">Mediterranean</span> Living Engineered for Hyderabad
              </h1>
              <p className="text-lg text-[#2C1810]/80 leading-relaxed">
                Sun Shine Interiors brings warm terracotta, arched alcoves, and European coastal breezes directly to Attapur. Experience functional luxury built with 10-year warranties and 51,000+ happy homes across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#planner" 
                  className="bg-[#C04000] text-white text-center px-8 py-3.5 rounded-full hover:bg-[#A03500] transition-all font-semibold shadow-lg shadow-[#C04000]/10 hover:shadow-[#C04000]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Start Dynamic Cost Planner
                </a>
                <a 
                  href="#portfolio" 
                  className="border border-[#2C1810]/20 text-[#2C1810] text-center px-8 py-3.5 rounded-full hover:bg-[#2C1810]/5 transition-all font-semibold flex items-center justify-center gap-2"
                >
                  View Mediterranean Portfolio
                </a>
              </div>

              {/* Trust factors */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#2C1810]/10">
                <div>
                  <div className="font-serif text-3xl font-extrabold text-[#C04000]">51K+</div>
                  <div className="text-xs text-[#808000] font-bold uppercase tracking-wider">Homes Delivered</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-extrabold text-[#C04000]">10 YR</div>
                  <div className="text-xs text-[#808000] font-bold uppercase tracking-wider">Material Warranty</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-extrabold text-[#C04000]">45 Days</div>
                  <div className="text-xs text-[#808000] font-bold uppercase tracking-wider">Delivery Promise</div>
                </div>
              </div>
            </div>

            {/* Right Graphic/Image Column - Arched Terracotta Frame */}
            <div className="md:col-span-6 flex justify-center relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-dashed border-[#808000]/30 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#C04000]/5 -z-10"></div>
              
              {/* Premium Terracotta Arch Frame Container */}
              <div className="relative border-4 border-[#C04000]/30 p-3 rounded-t-full max-w-[420px] shadow-2xl bg-[#FDFBF7]">
                <div className="overflow-hidden rounded-t-full bg-stone-100 aspect-[3/4] shadow-inner relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=1080" 
                    alt="Premium arched interior design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#FDFBF7]/85">Attapur Showroom</p>
                      <h4 className="font-serif text-xl font-bold">The Modern Med Villa Concept</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Portfolio Section with tabs */}
      <section id="portfolio" className="py-24 bg-[#F5EFE6]/60 border-y border-[#2C1810]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
              The Warm <span className="text-[#C04000]">European</span> Portfolio Series
            </h2>
            <p className="text-lg text-[#2C1810]/80">
              Explore custom Mediterranean designs crafted for homes in Attapur, Gachibowli, and across Hyderabad. Click the categories below to view custom specifications.
            </p>

            {/* Tabs Selector */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {Object.keys(portfolioTabs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePortfolioTab(key)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                    activePortfolioTab === key 
                      ? 'bg-[#C04000] text-white shadow-md shadow-[#C04000]/15' 
                      : 'bg-[#FDFBF7] text-[#2C1810] border border-[#2C1810]/10 hover:bg-[#FDFBF7]/80'
                  }`}
                >
                  {portfolioTabs[key].title.split(' ')[0]} {portfolioTabs[key].title.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Showcase */}
          <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#2C1810]/5 transition-all duration-500">
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Tab Image with arched border */}
              <div className="md:col-span-6">
                <div className="overflow-hidden rounded-t-[100px] rounded-b-2xl aspect-[4/3] bg-stone-100 shadow-lg relative">
                  <img 
                    src={portfolioTabs[activePortfolioTab].image} 
                    alt={portfolioTabs[activePortfolioTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#808000] text-[#FDFBF7] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sun className="w-3.5 h-3.5 text-[#FDFBF7] animate-pulse" /> Mediterranean Authentic
                  </div>
                </div>
              </div>

              {/* Tab Text Content */}
              <div className="md:col-span-6 space-y-6">
                <span className="text-[#808000] text-xs font-bold uppercase tracking-widest block">{portfolioTabs[activePortfolioTab].subtitle}</span>
                <h3 className="font-serif text-3xl font-bold text-[#2C1810]">
                  {portfolioTabs[activePortfolioTab].title}
                </h3>
                <p className="text-[#2C1810]/80 leading-relaxed text-base">
                  {portfolioTabs[activePortfolioTab].description}
                </p>

                {/* Features checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-[#2C1810]/60">Design Specifications Included:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {portfolioTabs[activePortfolioTab].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#808000]/10 flex items-center justify-center text-[#808000] flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-[#2C1810]/90">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="#planner"
                    className="text-[#C04000] font-bold hover:text-[#A03500] transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 duration-300"
                  >
                    Configure Mediterranean Spacings <ArrowRight className="w-4.5 h-4.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Interactive Cost Model Planner */}
      <section id="planner" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Planner Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#C04000]/10 text-[#C04000] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <Ruler className="w-4 h-4" /> Live Cost Projection
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
                Mediterranean Cost Model Planner
              </h2>
              <p className="text-[#2C1810]/80 leading-relaxed text-base">
                Calculate an instant estimate for your home project in Attapur. Toggle sizes, choose architectural tiers, and select rustic Mediterranean additions. Our algorithm is calibrated to current material prices in Hyderabad.
              </p>
              
              <div className="space-y-4 p-5 bg-[#F5EFE6] rounded-2xl border border-[#2C1810]/5">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#808000] mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-[#2C1810]">Transparent Estimates</h5>
                    <p className="text-xs text-[#2C1810]/70 leading-relaxed">
                      All estimates include premium waterproof birch plywood, German-engineered soft-close hinges, complete modular fittings, delivery, and professional installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Planner Right Form/Simulator */}
            <div className="lg:col-span-7 bg-[#FDFBF7] border border-[#2C1810]/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#808000]/5 rounded-bl-[100px] pointer-events-none"></div>
              
              <div className="space-y-6">
                
                {/* 1. Property Type */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#808000]">1. Home Layout / Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['2 BHK', '3 BHK', '4 BHK', 'Villa'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setPropertyType(type)}
                        className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                          propertyType === type
                            ? 'bg-[#C04000] text-white shadow-md shadow-[#C04000]/15'
                            : 'bg-[#F5EFE6] text-[#2C1810] hover:bg-[#2C1810]/5'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Quality Tier */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#808000]">2. Aesthetic Finish Tier</label>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {[
                      { name: 'Rustica Basic', desc: 'Standard finishes + partial arches' },
                      { name: 'Modern Med Select', desc: 'Textured walls, olive frames, custom arches' },
                      { name: 'Sun-Drenched Luxury', desc: 'Terracotta tiling, full custom masonry arches, exposed beams' }
                    ].map((tier) => (
                      <button
                        key={tier.name}
                        onClick={() => setQualityTier(tier.name)}
                        className={`p-3.5 rounded-xl text-left transition-all focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                          qualityTier === tier.name
                            ? 'bg-[#C04000] text-white shadow-md shadow-[#C04000]/15'
                            : 'bg-[#F5EFE6] text-[#2C1810] hover:bg-[#2C1810]/5'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{tier.name}</div>
                        <div className={`text-[10px] mt-1 line-clamp-1 leading-normal ${qualityTier === tier.name ? 'text-white/80' : 'text-[#2C1810]/60'}`}>{tier.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Mediterranean Add-ons */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#808000]">3. Mediterranean Special Additions</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    
                    <button
                      onClick={() => toggleFinish('terracottaTiles')}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                        finishes.terracottaTiles 
                          ? 'border-[#C04000] bg-[#C04000]/5 text-[#C04000]' 
                          : 'border-[#2C1810]/15 bg-transparent text-[#2C1810]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">Terracotta Accents</div>
                        <div className="text-[10px] opacity-70">Premium clay tiling & wall trims</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${finishes.terracottaTiles ? 'bg-[#C04000] border-[#C04000] text-white' : 'border-[#2C1810]/30 text-transparent'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <button
                      onClick={() => toggleFinish('archedNiched')}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                        finishes.archedNiched 
                          ? 'border-[#C04000] bg-[#C04000]/5 text-[#C04000]' 
                          : 'border-[#2C1810]/15 bg-transparent text-[#2C1810]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">Arched Wall Niches</div>
                        <div className="text-[10px] opacity-70">Custom recessed plaster niches</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${finishes.archedNiched ? 'bg-[#C04000] border-[#C04000] text-white' : 'border-[#2C1810]/30 text-transparent'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <button
                      onClick={() => toggleFinish('oliveCabinetry')}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                        finishes.oliveCabinetry 
                          ? 'border-[#C04000] bg-[#C04000]/5 text-[#C04000]' 
                          : 'border-[#2C1810]/15 bg-transparent text-[#2C1810]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">Olive Cabinets</div>
                        <div className="text-[10px] opacity-70">Warm matte olive green wood paneling</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${finishes.oliveCabinetry ? 'bg-[#C04000] border-[#C04000] text-white' : 'border-[#2C1810]/30 text-transparent'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <button
                      onClick={() => toggleFinish('woodenBeams')}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#C04000] ${
                        finishes.woodenBeams 
                          ? 'border-[#C04000] bg-[#C04000]/5 text-[#C04000]' 
                          : 'border-[#2C1810]/15 bg-transparent text-[#2C1810]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">Exposed Wooden Beams</div>
                        <div className="text-[10px] opacity-70">Rustic hand-finished distressed beams</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${finishes.woodenBeams ? 'bg-[#C04000] border-[#C04000] text-white' : 'border-[#2C1810]/30 text-transparent'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>

                  </div>
                </div>

                {/* Estimate Result Display */}
                <div className="p-6 bg-[#C04000]/10 rounded-2xl border border-[#C04000]/20 mt-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C04000]">Estimated Price Range (INR)</span>
                      <div className="text-2xl sm:text-3xl font-extrabold font-serif text-[#C04000] mt-1">
                        ₹{currentEstimate.min} - ₹{currentEstimate.max}
                      </div>
                      <p className="text-[10px] text-[#2C1810]/60 mt-1">Inclusive of GST, delivery, and installation in Hyderabad.</p>
                    </div>

                    <button
                      onClick={applyConfigToForm}
                      className="w-full sm:w-auto bg-[#C04000] hover:bg-[#A03500] text-white px-6 py-3 rounded-xl font-bold transition-all text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C04000]"
                    >
                      Apply & Book Consultation <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Stories / Testimonials */}
      <section id="testimonials" className="py-24 bg-[#F5EFE6]/60 border-y border-[#2C1810]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
              Attapur <span className="text-[#C04000]">Client Stories</span> & Journeys
            </h2>
            <p className="text-lg text-[#2C1810]/80">
              Read how homeowners in Attapur, Hyderguda, and Rajendranagar converted their layouts into Mediterranean retreats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {[
              {
                name: 'Kiran & Kavitha Reddy',
                location: 'Maple Town, Attapur',
                quote: 'We wanted a warm home that did not look like standard flat modern boxes. Sun Shine Interiors Mediterranean style was perfect. The terracotta kitchen wall and white plaster living room look beautiful under warm spotlights. Their modular quality is exceptional.',
                rating: 5,
                tag: '3 BHK Apartment'
              },
              {
                name: 'Anirudh Verma',
                location: 'Hyderguda, Hyderabad',
                quote: 'The cost planner tool gave us a very accurate budget target. We chose the Modern Med Select tier with custom plaster arches. Sun Shine Interiors delivered the home in exactly 43 days. Their project managers in Attapur handled all approvals flawlessly.',
                rating: 5,
                tag: '4 BHK Duplex'
              },
              {
                name: 'Dr. Srinivas Rao',
                location: 'Happy Homes, Attapur',
                quote: 'Extremely professional team. We requested olive cabinetry in our kitchen and custom niches for books in the study. Sun Shine Interiors translated our sketches into robust modular products. The 10-year warranty gives complete peace of mind.',
                rating: 5,
                tag: 'Premium Villa'
              }
            ].map((story, idx) => (
              <div 
                key={idx} 
                className="bg-[#FDFBF7] rounded-3xl p-8 border border-[#2C1810]/5 shadow-lg flex flex-col justify-between relative"
              >
                <div className="absolute top-6 right-8 text-[#808000]/10 font-serif text-8xl pointer-events-none font-bold">“</div>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C04000] text-[#C04000]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2C1810]/10 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif font-bold text-[#2C1810]">{story.name}</h5>
                    <p className="text-[11px] font-medium text-[#808000]">{story.location}</p>
                  </div>
                  <span className="text-[10px] font-bold bg-[#808000]/10 text-[#808000] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {story.tag}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810]">
              Frequently Asked <span className="text-[#C04000]">Questions</span>
            </h2>
            <p className="text-base text-[#2C1810]/80">
              Clear answers regarding modular design, warranties, timelines, and architectural styling for Hyderabad.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What distinguishes the Mediterranean style from standard interior packages?',
                a: 'Standard packages rely on flat laminated boards and sharp cubic geometry. Our Modern Mediterranean style features custom curved plaster archways, warm terracotta tiles, textured earthy finishes, and matte olive cabinet fronts that reflect sunlight beautifully, creating a sun-drenched European aesthetic.'
              },
              {
                q: 'Where is your Attapur showroom located and can we view samples?',
                a: 'Yes! Our showroom is situated in Attapur near Pillar 140, Rajendra Nagar road. You can touch and feel our solid wood frameworks, soft-close hardware, and view simulated living spaces displaying various terracotta tile layouts and plaster arches.'
              },
              {
                q: 'How accurate is the Interactive Cost Planner tool?',
                a: 'The planner provides an estimated budget range based on current raw material, logistics, and installation costs in Hyderabad. Standard site variations stay within a 10-12% bracket, which will be confirmed during the final site measurement and blueprint design stage.'
              },
              {
                q: 'What guarantees do you offer on modular cabinetry and finishes?',
                a: 'Sun Shine Interiors offers a 10-year warranty on modular plywood cabinets and kitchen modules. Hardware fittings (like hinges and channels) from partner brands like Hettich and Blum carry individual lifetime functional warranties.'
              },
              {
                q: 'How long does a complete interior project take to deliver?',
                a: 'We offer a 45-day delivery guarantee. Once the 3D blueprints are signed off, modular components are manufactured in our ISO-certified factory, shipped, and assembled at your site within 45 days, or we pay you ₹5,000 per day of delay.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#FDFBF7] border border-[#2C1810]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#C04000] font-semibold text-sm sm:text-base"
                >
                  <span className="text-[#2C1810] pr-4">{item.q}</span>
                  {faqOpen[idx] ? (
                    <ChevronUp className="w-5 h-5 text-[#C04000] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#C04000] flex-shrink-0" />
                  )}
                </button>
                
                {faqOpen[idx] && (
                  <div className="p-5 pt-0 border-t border-[#2C1810]/5 text-sm text-[#2C1810]/75 leading-relaxed bg-[#F5EFE6]/25">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-[#F5EFE6]/60 border-t border-[#2C1810]/5">
        <div id="contact-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Col */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold bg-[#C04000]/10 text-[#C04000] px-3.5 py-1.5 rounded-full uppercase tracking-wider">Book Consultation</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
                Co-Design Your Mediterranean Dream
              </h2>
              <p className="text-[#2C1810]/80 leading-relaxed text-base">
                Book a face-to-face consultation at our Attapur showroom or online. Meet our senior design architects to turn your home layouts into personalized, sunlit spaces.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C04000] flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2C1810]/60 uppercase tracking-wider">Call Our Attapur Studio</h5>
                    <p className="text-base font-semibold text-[#2C1810]">+91 73370 64870</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C04000] flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2C1810]/60 uppercase tracking-wider">Email Support</h5>
                    <p className="text-base font-semibold text-[#2C1810]">sunshineinteriors.hyd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C04000] flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2C1810]/60 uppercase tracking-wider">Showroom Address</h5>
                    <p className="text-sm font-semibold text-[#2C1810]">Pillar No. 140, Rajendra Nagar Road, Attapur, Hyderabad - 500048</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Col */}
            <div className="lg:col-span-7 bg-[#FDFBF7] border border-[#2C1810]/10 rounded-3xl p-6 sm:p-10 shadow-xl">
              
              {formSuccess ? (
                <div className="text-center py-12 space-y-4 animate-scale-up">
                  <div className="w-16 h-16 bg-[#808000]/10 rounded-full flex items-center justify-center text-[#808000] mx-auto">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">Design Request Received!</h3>
                  <p className="text-sm text-[#2C1810]/70 max-w-md mx-auto">
                    Thank you for configuring your Mediterranean home layout. A senior architect from our Attapur studio will call you back within 2 hours to confirm your free showroom consultation.
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="bg-[#C04000] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#A03500] transition-colors text-sm"
                  >
                    Configure Another Space
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C1810] border-b border-[#2C1810]/5 pb-4">
                    Consultation & Blueprint Request
                  </h3>

                  {formError && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs sm:text-sm font-medium rounded-r-lg">
                      {formError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#808000]">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Kavitha Reddy"
                        className="w-full bg-[#F5EFE6]/40 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#C04000] outline-none text-[#2C1810] placeholder-[#2C1810]/40 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#808000]">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 98765 43210"
                        className="w-full bg-[#F5EFE6]/40 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#C04000] outline-none text-[#2C1810] placeholder-[#2C1810]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#808000]">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. sunshineinteriors.hyd@gmail.com"
                      className="w-full bg-[#F5EFE6]/40 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#C04000] outline-none text-[#2C1810] placeholder-[#2C1810]/40 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="preferredProperty" className="text-xs font-bold uppercase tracking-wider text-[#808000]">Home Layout</label>
                      <select 
                        id="preferredProperty"
                        value={formData.preferredProperty}
                        onChange={(e) => setFormData({...formData, preferredProperty: e.target.value})}
                        className="w-full bg-[#F5EFE6]/40 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#C04000] outline-none text-[#2C1810] transition-all"
                      >
                        <option value="2 BHK">2 BHK Apartment</option>
                        <option value="3 BHK">3 BHK Apartment</option>
                        <option value="4 BHK">4 BHK Duplex</option>
                        <option value="Villa">Individual Villa</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="selectedTier" className="text-xs font-bold uppercase tracking-wider text-[#808000]">Budget Tier</label>
                      <select 
                        id="selectedTier"
                        value={formData.selectedTier}
                        onChange={(e) => setFormData({...formData, selectedTier: e.target.value})}
                        className="w-full bg-[#F5EFE6]/40 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#C04000] outline-none text-[#2C1810] transition-all"
                      >
                        <option value="Rustica Basic">Rustica Basic</option>
                        <option value="Modern Med Select">Modern Med Select</option>
                        <option value="Sun-Drenched Luxury">Sun-Drenched Luxury</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#808000]">Project Notes / Custom Requests</label>
                    <textarea 
                      id="message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Specify your preferred timings, specific apartment name (e.g. PBEL City, Maple Town), and any layout challenges."
                      className="w-full bg-[#F5EFE6]/40 border border-[#2C1810]/15 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#C04000] outline-none text-[#2C1810] placeholder-[#2C1810]/40 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#C04000] hover:bg-[#A03500] disabled:bg-[#C04000]/60 text-white py-4 rounded-xl font-bold transition-all text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C04000]"
                  >
                    {formLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generating Your Estimate & Booking Consultation...
                      </>
                    ) : (
                      <>
                        Book Free Showroom Consultation <Calendar className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#2C1810]/50">
                    * By clicking above, you authorize Sun Shine Interiors representatives to call/message you regarding our modular interior services.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#2C1810] text-[#FDFBF7] py-16 border-t border-[#C04000]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#C04000] flex items-center justify-center text-white">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#C04000]">Sun Shine Interiors</span>
              </div>
              <p className="text-xs text-[#FDFBF7]/60 leading-relaxed">
                Sun Shine Interiors builds premium, bespoke homes that blend custom beauty with state-of-the-art modular technology. Made in our ISO-9001 certified manufacturing plant.
              </p>
              <div className="text-xs text-[#808000] font-bold">
                © 2026 Sun Shine Interiors. All rights reserved.
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#808000]">Aesthetic Categories</h5>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/75">
                <li><a href="#portfolio" className="hover:text-[#C04000] transition-colors">Tuscan Sun Living Rooms</a></li>
                <li><a href="#portfolio" className="hover:text-[#C04000] transition-colors">Santorini Breeze Kitchens</a></li>
                <li><a href="#portfolio" className="hover:text-[#C04000] transition-colors">Spanish Revival Bedrooms</a></li>
                <li><a href="#portfolio" className="hover:text-[#C04000] transition-colors">Provence Country Dining</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#808000]">Modular Quality</h5>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/75">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C04000]" /> 10-Year Cabinet Warranty</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C04000]" /> Waterproof BWP Plywood</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C04000]" /> German Soft-Close Fittings</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C04000]" /> Anti-Bubble Lamination</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#808000]">Hyderabad Showrooms</h5>
              <p className="text-xs text-[#FDFBF7]/75 leading-normal">
                <strong>Attapur (Studio Head):</strong> Near Pillar 140, Rajendra Nagar Main Road, Attapur, Hyderabad.
              </p>
              <p className="text-xs text-[#FDFBF7]/75 leading-normal">
                <strong>Gachibowli Showroom:</strong> Opp. Deloitte Campus, Gachibowli Main Rd, Hyderabad.
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

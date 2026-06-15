"use client";

import React, { useState } from 'react';
import { 
  Palette, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Layout, 
  Home, 
  Clock, 
  ShieldCheck, 
  Sliders, 
  Grid
} from 'lucide-react';

export default function LivspaceAttapurPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCatalogCategory, setActiveCatalogCategory] = useState('kitchen');
  const [faqOpen, setFaqOpen] = useState({});

  // Interactive Configurator State
  const [roomType, setRoomType] = useState('3 BHK');
  const [themePalette, setThemePalette] = useState('Classic Teal & Sand');
  const [addons, setAddons] = useState({
    hobChimney: true,
    magicCorner: false,
    cabinetLed: true
  });

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '3 BHK',
    themePalette: 'Classic Teal & Sand',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Toggle FAQ Accordion
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Toggle Configurator Addon
  const toggleAddon = (key) => {
    setAddons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Configurator Cost Logic
  const calculateCost = () => {
    let basePrice = 350000; // 2 BHK
    if (roomType === '3 BHK') basePrice = 550000;
    else if (roomType === '4 BHK') basePrice = 750000;

    let paletteMultiplier = 1.0;
    if (themePalette === 'Warm Terracotta & Oak') paletteMultiplier = 1.15;
    else if (themePalette === 'Autumn Mustard & Walnut') paletteMultiplier = 1.25;

    let addonCost = 0;
    if (addons.hobChimney) addonCost += 35000;
    if (addons.magicCorner) addonCost += 25000;
    if (addons.cabinetLed) addonCost += 15000;

    const estimatedTotal = Math.round(basePrice * paletteMultiplier + addonCost);
    return estimatedTotal.toLocaleString('en-IN');
  };

  const currentCost = calculateCost();

  const applyConfigToForm = () => {
    const selectedAddons = Object.keys(addons)
      .filter(k => addons[k])
      .map(k => k === 'hobChimney' ? 'Hob & Chimney' : k === 'magicCorner' ? 'Magic Corner' : 'Cabinet LED')
      .join(', ');

    setFormData(prev => ({
      ...prev,
      roomType: roomType,
      themePalette: themePalette,
      message: `Hi Livspace Attapur, I configured a ${roomType} using the ${themePalette} theme. Selected add-ons: [${selectedAddons || 'None'}]. Please contact me with a modular design quote.`
    }));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please complete all required fields: Name, Email, and Phone.');
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
        roomType: '3 BHK',
        themePalette: 'Classic Teal & Sand',
        message: ''
      });
    }, 1500);
  };

  const catalogData = {
    kitchen: {
      title: "Geometrical Modular Kitchens",
      tagline: "High-efficiency layouts styled with bold color blocking",
      desc: "Our kitchens feature scratch-resistant laminates, commercial-grade soft close hinges, and customized cutlery organizers. Built with deep teal panel overlays and warm sand counter bases.",
      warranty: "10 Year Modular Warranty",
      delivery: "45 Days Flat Delivery",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Pre-drilled high-density fiberboard structure",
        "Concealed dynamic handleless profile systems",
        "Smart waste management & pull-out spice racks",
        "High-contrast color combos (Teal & Sand finish)"
      ]
    },
    wardrobes: {
      title: "Smart Modular Wardrobes",
      tagline: "Maximized storage density with neat external geometry",
      desc: "Sliding and swing-door wardrobe solutions designed for high-capacity clothes organization. Features solid terracotta metal trim borders, oak finish inserts, and internal sensory LED lighting.",
      warranty: "10 Year Wardrobe Warranty",
      delivery: "45 Days Flat Delivery",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Scratch-free exterior finish with double lamination",
        "Customized tie racks & soft velvet jewelry drawers",
        "PIR motion-detection automatic inside light rods",
        "Heavy-duty top running sliding systems"
      ]
    },
    living: {
      title: "Mid-Century Living Rooms",
      tagline: "Bold textures, low-slung credenzas, and wooden accent grids",
      desc: "Lounge spaces designed to feel bright, airy, and geometrically balanced. Features integrated TV units with sleek rounded-corner walnut panels, tapered wood leg details, and terracotta wall accents.",
      warranty: "5 Year Comprehensive Warranty",
      delivery: "50 Days Flat Delivery",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Tapered-leg console units in dark walnut veneer",
        "Modular floating shelves for display custom configurations",
        "Integrated cable management and device ventilation slots",
        "Durable, stain-protected performance velvet backing"
      ]
    }
  };

  const stories = [
    {
      text: "Livspace made our home interior journey absolutely seamless. The mid-century design suggestions matched our style perfectly, especially the terracotta kitchen accent paneling. Delivery was on the exact day promised!",
      name: "Sreedhar & Lakshmi",
      location: "Happy Homes, Attapur",
      highlight: "Completed in 42 Days"
    },
    {
      text: "The style configurator was extremely accurate! We requested the Autumn Mustard & Walnut theme for our flat. The final physical installation looks exactly like the high-definition preview models. Incredible modular engineering.",
      name: "Karan Johar",
      location: "PBEL City, Hyderabad",
      highlight: "100% Price Protected"
    },
    {
      text: "Excellent detailing on the wardrobes and TV unit. The team handled everything from site measurement to modular factory assembly and final cleanup. The service and warranty packages give complete peace of mind.",
      name: "Nisha Patel",
      location: "My Home Vyoma, Attapur",
      highlight: "10-Year Warranty Validated"
    }
  ];

  const faqs = [
    {
      q: "How does the modular warranty process work?",
      a: "All our modular products, including kitchen cabinets, wardrobes, and modular storage units, are covered by a comprehensive 10-year structural warranty. In case of any hinge alignment issues, edge banding peeling, or slider stiffness, our dedicated Attapur service team visits your property within 48 hours for immediate replacement."
    },
    {
      q: "Can I customize the sizing of the modular cabinets?",
      a: "Yes. While we utilize high-precision modular factory templates to keep production speeds high and costs low, we offer complete customization on height, depth, and modular shelving configurations to fit your exact floor plan specifications."
    },
    {
      q: "What materials do you use for wet areas in kitchens?",
      a: "For the under-sink and high-moisture zones, we exclusively use Boiling Water Resistant (BWR) plywood or High-Density High-Moisture Resistant (HDHMR) boards. This ensures that your modular kitchen resists warping and swelling from water contact."
    },
    {
      q: "How does the flat 45-day delivery guarantee operate?",
      a: "Once you approve the final CAD blueprint drawing and clear the design stage, we initiate automated factory fabrication. If we fail to deliver and install the modular furniture within 45 days, we pay you a penalty per day of delay."
    }
  ];

  return (
    <div className="selection:bg-[#D84B20] selection:text-white text-[#1C1917] bg-[#F9F5F0]" style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      minHeight: '100vh',
    }}>
      {/* Alert Top Banner */}
      <div className="bg-[#006E7F] text-[#F9F5F0] text-center text-xs tracking-wider font-semibold py-2.5 px-4 uppercase">
        ⚡ Attapur Experience Center Open • Flat 45-Day Delivery Guarantee on All Modular Systems
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#F9F5F0]/90 backdrop-blur-md border-b-2 border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo with Bold Mid-Century Geometry */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D84B20] text-white flex items-center justify-center font-black rounded-lg transform -rotate-6 shadow-md border-2 border-[#1C1917]">
              L
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight uppercase block text-[#006E7F]">LIVSPACE</span>
              <span className="text-[10px] text-[#D84B20] tracking-[0.2em] uppercase block font-bold -mt-1">Attapur Studio</span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#services" className="hover:text-[#006E7F] transition-colors">Service Catalog</a>
            <a href="#configurator" className="hover:text-[#006E7F] transition-colors">Style Configurator</a>
            <a href="#stories" className="hover:text-[#006E7F] transition-colors">Customer Stories</a>
            <a href="#faqs" className="hover:text-[#006E7F] transition-colors">FAQs</a>
            <a href="#contact" className="bg-[#D84B20] text-white px-5 py-2.5 rounded-lg border-2 border-[#1C1917] hover:bg-[#D84B20]/95 transition-all shadow-[3px_3px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#1C1917]">
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1917] hover:text-[#006E7F]"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#F9F5F0] border-b-2 border-[#1C1917] py-6 px-6 flex flex-col gap-5 shadow-lg">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider">Service Catalog</a>
            <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider">Style Configurator</a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider">Customer Stories</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider">FAQs</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#D84B20] text-white text-center py-3 rounded-lg border-2 border-[#1C1917] font-bold uppercase tracking-wider">
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b-2 border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#D84B20]/10 border border-[#D84B20]/30 rounded-full px-4 py-1 text-xs uppercase tracking-wider font-extrabold text-[#D84B20]">
              Modular Home Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#006E7F] leading-[1.1]">
              Bold geometry meets <br />
              <span className="text-[#D84B20]">effortless modern</span> living.
            </h1>
            <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-2xl font-medium">
              We design modular interiors that make a statement. Featuring our signature Mid-Century Modern style system—bold teal highlights, warm terracotta finishes, and clean geometric cabinetry tailored for Attapur residences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#configurator" className="inline-flex items-center justify-center px-6 py-4 bg-[#006E7F] text-white border-2 border-[#1C1917] rounded-lg font-bold uppercase tracking-wider shadow-[4px_4px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#1C1917] transition-all">
                Try Style Configurator
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-4 bg-[#FDFDFD] text-[#1C1917] border-2 border-[#1C1917] rounded-lg font-bold uppercase tracking-wider hover:bg-[#F9F5F0] transition-all">
                View Catalog
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-[#1C1917]/10 max-w-md">
              <div className="text-center bg-[#FDFDFD] p-3 border-2 border-[#1C1917] rounded-lg shadow-[2px_2px_0px_#1C1917]">
                <span className="block text-xl md:text-2xl font-black text-[#D84B20]">45 Days</span>
                <span className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-500 mt-1">Flat Delivery</span>
              </div>
              <div className="text-center bg-[#FDFDFD] p-3 border-2 border-[#1C1917] rounded-lg shadow-[2px_2px_0px_#1C1917]">
                <span className="block text-xl md:text-2xl font-black text-[#006E7F]">10 Years</span>
                <span className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-500 mt-1">Modular Warranty</span>
              </div>
              <div className="text-center bg-[#FDFDFD] p-3 border-2 border-[#1C1917] rounded-lg shadow-[2px_2px_0px_#1C1917]">
                <span className="block text-xl md:text-2xl font-black text-stone-900">4.8 ★</span>
                <span className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-500 mt-1">Google Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-[#1C1917] rounded-2xl overflow-hidden shadow-[8px_8px_0px_#1C1917] bg-[#FDFDFD]">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" 
                alt="Mid-Century Living Room" 
                className="w-full h-[380px] md:h-[450px] object-cover"
              />
              <div className="p-5 bg-white border-t-4 border-[#1C1917] flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-sm text-[#006E7F] uppercase tracking-wider">Terracotta Cozy Lounge</h3>
                  <p className="text-xs text-stone-500 font-bold mt-1">Model Studio, Ring Road Attapur</p>
                </div>
                <div className="bg-[#D84B20] text-white px-3 py-1 text-[10px] font-black uppercase rounded border border-[#1C1917]">
                  Best Seller
                </div>
              </div>
            </div>
            {/* Geometric Accent Shapes */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#D84B20] rounded-full -z-10 border-2 border-[#1C1917]"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#006E7F] rounded-lg -z-10 border-2 border-[#1C1917] transform rotate-12"></div>
          </div>

        </div>
      </section>

      {/* Service Catalog Section */}
      <section id="services" className="py-20 md:py-24 bg-white border-b-2 border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#D84B20] block">
              Flexible Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">
              Modular Service Catalog
            </h2>
            <p className="text-sm text-stone-600 font-medium leading-relaxed">
              Explore our core product ranges manufactured using precise computer-aided tools. Pick a module to view its custom details and specifications.
            </p>

            {/* Catalog tab buttons */}
            <div className="flex justify-center gap-2 pt-6">
              {[
                { key: 'kitchen', label: 'Kitchens' },
                { key: 'wardrobes', label: 'Wardrobes' },
                { key: 'living', label: 'Living Units' }
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCatalogCategory(cat.key)}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider font-extrabold rounded-lg border-2 border-[#1C1917] transition-all ${
                    activeCatalogCategory === cat.key
                      ? 'bg-[#006E7F] text-[#F9F5F0] shadow-[3px_3px_0px_#1C1917] -translate-y-[1px]'
                      : 'bg-[#F9F5F0] text-[#1C1917] hover:bg-[#F9F5F0]/65'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
            {/* Catalog Info Card */}
            <div className="lg:col-span-5 bg-[#F9F5F0] border-4 border-[#1C1917] rounded-2xl p-8 shadow-[6px_6px_0px_#1C1917] flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-black text-[#D84B20] bg-white px-3 py-1 border-2 border-[#1C1917] rounded-full inline-block">
                    {activeCatalogCategory.toUpperCase()} MODULE
                  </span>
                  <h3 className="text-2xl font-black text-stone-900 mt-4">
                    {catalogData[activeCatalogCategory].title}
                  </h3>
                  <p className="text-xs font-bold text-[#006E7F] mt-1 uppercase tracking-wide">
                    {catalogData[activeCatalogCategory].tagline}
                  </p>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed font-medium">
                  {catalogData[activeCatalogCategory].desc}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-[#1C1917]/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#006E7F] flex-shrink-0" />
                    <span className="text-[11px] font-extrabold text-stone-700 uppercase leading-tight">
                      {catalogData[activeCatalogCategory].warranty}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#D84B20] flex-shrink-0" />
                    <span className="text-[11px] font-extrabold text-stone-700 uppercase leading-tight">
                      {catalogData[activeCatalogCategory].delivery}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t-2 border-[#1C1917]/10">
                <a href="#configurator" className="inline-flex items-center text-xs uppercase tracking-widest font-black text-[#D84B20] hover:text-[#D84B20]/80">
                  Configure Dimensions Now <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Catalog Image Container */}
            <div className="lg:col-span-4 border-4 border-[#1C1917] rounded-2xl overflow-hidden shadow-[6px_6px_0px_#1C1917] relative bg-[#F9F5F0]">
              <img 
                src={catalogData[activeCatalogCategory].image} 
                alt={catalogData[activeCatalogCategory].title} 
                className="w-full h-full min-h-[350px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Catalog Highlights */}
            <div className="lg:col-span-3 bg-[#F9F5F0] border-4 border-[#1C1917] rounded-2xl p-8 shadow-[6px_6px_0px_#1C1917] flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="text-xs uppercase tracking-widest font-black text-stone-500 border-b-2 border-[#1C1917]/10 pb-3">
                  Technical Specifications
                </h4>
                <ul className="space-y-4">
                  {catalogData[activeCatalogCategory].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-bold text-stone-800">
                      <div className="w-5 h-5 rounded bg-white border-2 border-[#1C1917] flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#006E7F] stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 border-2 border-[#1C1917] rounded-lg mt-6">
                <p className="text-[10px] leading-relaxed text-[#006E7F] font-bold">
                  *All catalog systems are pre-checked in our factory to guarantee zero gaps and clean wood finishes upon site delivery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Style Configurator Section */}
      <section id="configurator" className="py-20 md:py-24 border-b-2 border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#006E7F] block">
              Interactive Design
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">
              Style & Cost Configurator
            </h2>
            <p className="text-sm text-stone-600 font-medium leading-relaxed">
              Mix and match mid-century palettes and functional add-ons below to see your estimated design cost and customize your layout in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Control Panel */}
            <div className="lg:col-span-7 bg-white border-4 border-[#1C1917] rounded-2xl p-8 shadow-[8px_8px_0px_#1C1917] space-y-8">
              
              {/* Option 1: Room Selection */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-black text-stone-500">
                  1. Choose Layout Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['2 BHK', '3 BHK', '4 BHK'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setRoomType(t)}
                      className={`py-3.5 text-xs font-black uppercase tracking-wider rounded-lg border-2 border-[#1C1917] transition-all ${
                        roomType === t
                          ? 'bg-[#006E7F] text-white shadow-[3px_3px_0px_#1C1917] -translate-y-[1px]'
                          : 'bg-[#F9F5F0] hover:bg-[#F9F5F0]/75'
                      }`}
                    >
                      {t} Flat
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Mid-Century Color Palette */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-black text-stone-500">
                  2. Pick Mid-Century Theme Palette
                </label>
                <div className="space-y-3">
                  {[
                    { name: 'Classic Teal & Sand', primary: '#006E7F', accent: '#F9F5F0', desc: 'Classic modular layout featuring cool teal panels and neutral beach-sand cabinet bases.' },
                    { name: 'Warm Terracotta & Oak', primary: '#D84B20', accent: '#F5ECE1', desc: 'Bold burnt-orange finishes combined with rich golden oak veneer frameworks.' },
                    { name: 'Autumn Mustard & Walnut', primary: '#E29578', accent: '#3D312A', desc: 'Deep mustard yellow pop panels paired with dark structural walnut accents.' }
                  ].map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setThemePalette(p.name)}
                      className={`w-full text-left p-4 border-2 border-[#1C1917] rounded-xl flex items-start gap-4 transition-all ${
                        themePalette === p.name
                          ? 'bg-[#F9F5F0] border-[#006E7F] ring-2 ring-[#006E7F]'
                          : 'bg-white hover:bg-[#F9F5F0]/40'
                      }`}
                    >
                      {/* Color dots */}
                      <div className="flex flex-col gap-1.5 mt-1">
                        <div className="w-5 h-5 rounded-full border border-[#1C1917]" style={{ backgroundColor: p.primary }}></div>
                        <div className="w-5 h-5 rounded-full border border-[#1C1917]" style={{ backgroundColor: p.accent }}></div>
                      </div>
                      <div className="flex-1">
                        <span className="block text-xs font-black uppercase tracking-wider text-stone-900">
                          {p.name}
                        </span>
                        <span className="block text-[11px] text-stone-600 font-bold mt-1 leading-snug">
                          {p.desc}
                        </span>
                      </div>
                      {themePalette === p.name && (
                        <div className="w-5 h-5 rounded bg-[#006E7F] flex items-center justify-center self-center border border-[#1C1917]">
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: High-Quality Kitchen Add-ons */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-black text-stone-500">
                  3. Select High-Performance Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: 'hobChimney', label: 'Premium Hob & Chimney', price: '₹35K', desc: 'Integrated 3-burner gas hob and auto-clean filterless chimney' },
                    { key: 'magicCorner', label: 'Soft-Close Magic Corner', price: '₹25K', desc: 'Modular corner unit pullout to optimize dead kitchen corners' },
                    { key: 'cabinetLed', label: 'Cabinet LED Strip Arrays', price: '₹15K', desc: 'Concealed counter-top lighting for high-visibility cooking' }
                  ].map((add) => (
                    <button
                      key={add.key}
                      onClick={() => toggleAddon(add.key)}
                      className={`p-4 border-2 border-[#1C1917] rounded-xl text-left flex flex-col justify-between h-36 transition-all ${
                        addons[add.key]
                          ? 'bg-[#F9F5F0] border-[#D84B20] ring-2 ring-[#D84B20]'
                          : 'bg-white hover:bg-[#F9F5F0]/40'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-900 leading-tight">
                            {add.label}
                          </span>
                          <span className="bg-[#D84B20]/15 text-[#D84B20] text-[10px] px-1.5 py-0.5 rounded font-black border border-[#D84B20]/30">
                            {add.price}
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-600 font-bold mt-1.5 leading-snug">
                          {add.desc}
                        </p>
                      </div>
                      {addons[add.key] && (
                        <div className="w-5 h-5 rounded bg-[#D84B20] flex items-center justify-center self-end border border-[#1C1917]">
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Price & Summary Panel */}
            <div className="lg:col-span-5 bg-white border-4 border-[#1C1917] rounded-2xl p-8 shadow-[8px_8px_0px_#1C1917] flex flex-col justify-between min-h-[500px]">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-stone-400 block">
                    Real-time Estimate
                  </span>
                  <h3 className="text-2xl font-black text-[#006E7F] border-b-2 border-[#1C1917]/10 pb-4 mt-2">
                    Configuration Proposal
                  </h3>
                </div>

                <div className="space-y-4 font-bold text-sm">
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500 uppercase tracking-wider text-xs">Layout Option:</span>
                    <span className="text-stone-950 uppercase">{roomType} Apartment</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500 uppercase tracking-wider text-xs">Style Palette:</span>
                    <span className="text-[#006E7F]">{themePalette}</span>
                  </div>
                  <div className="border-b border-stone-100 pb-2">
                    <span className="text-stone-500 uppercase tracking-wider text-xs block mb-1">Selected Add-ons:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {Object.keys(addons).filter(k => addons[k]).length === 0 ? (
                        <span className="text-xs text-stone-400 italic font-medium">No modular add-ons selected</span>
                      ) : (
                        Object.keys(addons).filter(k => addons[k]).map(k => (
                          <span key={k} className="bg-stone-100 text-stone-800 text-[10px] px-2 py-0.5 rounded border border-[#1C1917]/10">
                            {k === 'hobChimney' ? 'Hob & Chimney' : k === 'magicCorner' ? 'Magic Corner' : 'Cabinet LED'}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-[#F9F5F0] border-2 border-[#1C1917] rounded-xl p-6 text-center shadow-inner space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-stone-500 block">Estimated Investment</span>
                  <span className="text-4xl md:text-5xl font-black text-[#D84B20] tracking-tight">
                    ₹{currentCost}
                  </span>
                  <p className="text-[10px] text-stone-500 font-bold leading-normal">
                    *Includes factory modular carpentry fabrication, soft-close hardware fittings, transportation, and complete floor assembly.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={applyConfigToForm}
                  className="w-full py-4 bg-[#006E7F] text-white border-2 border-[#1C1917] rounded-xl font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#1C1917] transition-all flex items-center justify-center gap-2"
                >
                  Apply Configuration to Form <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section id="stories" className="py-20 md:py-24 bg-white border-b-2 border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#D84B20] block">
              Verified Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">
              Customer Stories in Attapur
            </h2>
            <p className="text-sm text-stone-600 font-medium">
              See how we have delivered price-protected, premium modular home interior setups on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-[#F9F5F0] border-4 border-[#1C1917] rounded-2xl p-8 shadow-[6px_6px_0px_#1C1917] flex flex-col justify-between h-full hover:shadow-[8px_8px_0px_#1C1917] transition-all">
                <p className="text-sm text-stone-700 leading-relaxed font-bold italic">
                  "{story.text}"
                </p>
                <div className="pt-6 mt-6 border-t-2 border-[#1C1917]/15 flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm block text-stone-900">{story.name}</span>
                    <span className="text-[10px] text-stone-500 font-bold block mt-0.5">{story.location}</span>
                  </div>
                  <span className="bg-[#006E7F] text-white text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-wider border border-[#1C1917]">
                    {story.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faqs" className="py-20 md:py-24 border-b-2 border-[#1C1917]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#006E7F] block">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-stone-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border-2 border-[#1C1917] rounded-xl shadow-[3px_3px_0px_#1C1917] overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-extrabold text-sm md:text-base pr-4 text-stone-900">{faq.q}</span>
                  {faqOpen[idx] ? (
                    <ChevronUp className="w-5 h-5 text-[#006E7F] flex-shrink-0 stroke-[3]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#006E7F] flex-shrink-0 stroke-[3]" />
                  )}
                </button>
                {faqOpen[idx] && (
                  <div className="px-6 pb-6 text-sm text-stone-700 font-medium leading-relaxed border-t border-stone-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#D84B20] block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight">
                Let's Build Your Dream Space
              </h2>
              <p className="text-sm text-stone-600 font-medium leading-relaxed mt-3">
                Book a free consultation session with our design architects at the Attapur Experience Center. Let's discuss room-by-room modular drawings and color themes.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t-2 border-[#1C1917]/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#006E7F] mt-1 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-stone-400 block">Experience Studio</span>
                  <span className="text-sm font-bold">Opposite Happy Homes, PVNR Expressway Pillar 130, Attapur, Hyderabad - 500048</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#D84B20] mt-1 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-stone-400 block">Studio Helpline</span>
                  <span className="text-sm font-bold">+91 98765 43210</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#006E7F] mt-1 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-stone-400 block">Official Support</span>
                  <span className="text-sm font-bold">attapur.studio@livspace.com</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F9F5F0] p-6 border-2 border-[#1C1917] rounded-xl shadow-[4px_4px_0px_#1C1917]">
              <span className="text-[10px] uppercase tracking-wider font-black text-[#006E7F] block mb-2">Visitor Working Hours</span>
              <p className="text-xs font-bold text-stone-700 leading-relaxed">
                Open all days except Mondays, from 10:00 AM to 8:30 PM. Secure car parking space is available for visitors directly in front of the Experience Center.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#F9F5F0] border-4 border-[#1C1917] rounded-2xl p-8 shadow-[8px_8px_0px_#1C1917]">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#006E7F] text-white flex items-center justify-center mx-auto border-2 border-[#1C1917]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black text-stone-900">Consultation Booked!</h3>
                <p className="text-sm text-stone-700 font-bold max-w-md mx-auto">
                  Your configuration details and contact request have been logged. A modular space designer from our Attapur hub will phone you inside 60 minutes to confirm your studio visit.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-[#D84B20] text-white border-2 border-[#1C1917] rounded-lg font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_#1C1917]"
                >
                  Configure Another Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <h3 className="text-lg font-black text-stone-950 border-b-2 border-[#1C1917]/10 pb-4">
                  Schedule Free Experience Consultation
                </h3>

                {formError && (
                  <p className="text-xs text-red-700 font-bold bg-red-100 p-3 rounded-lg border-2 border-red-300">
                    {formError}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-stone-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Shalini Roy"
                      className="w-full px-4 py-3 bg-white border-2 border-[#1C1917] rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#006E7F]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-stone-500 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 11111"
                      className="w-full px-4 py-3 bg-white border-2 border-[#1C1917] rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#006E7F]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-extrabold text-stone-500 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. shalini@gmail.com"
                    className="w-full px-4 py-3 bg-white border-2 border-[#1C1917] rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#006E7F]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-stone-500 mb-2">
                      Room Configuration
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-[#1C1917] rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#006E7F]"
                    >
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Apartment</option>
                      <option value="4 BHK">4 BHK Apartment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-stone-500 mb-2">
                      Preferred Color Palette
                    </label>
                    <select
                      value={formData.themePalette}
                      onChange={(e) => setFormData({ ...formData, themePalette: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-[#1C1917] rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#006E7F]"
                    >
                      <option value="Classic Teal & Sand">Classic Teal & Sand</option>
                      <option value="Warm Terracotta & Oak">Warm Terracotta & Oak</option>
                      <option value="Autumn Mustard & Walnut">Autumn Mustard & Walnut</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-extrabold text-stone-500 mb-2">
                    Additional Message or Customization Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide any custom dimensions, layout plans, or note style configurator presets..."
                    className="w-full px-4 py-3 bg-white border-2 border-[#1C1917] rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#006E7F] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D84B20] text-white border-2 border-[#1C1917] rounded-lg font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#1C1917] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formLoading}
                  >
                    {formLoading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                        Booking Consultation...
                      </>
                    ) : (
                      <>
                        Confirm Free Studio Appointment
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1917] text-[#F9F5F0] pt-16 pb-12 border-t-4 border-[#1C1917]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D84B20] text-white flex items-center justify-center font-black rounded-lg border-2 border-[#F9F5F0] transform -rotate-3">
                L
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight uppercase block text-[#F9F5F0]">LIVSPACE</span>
                <span className="text-[10px] text-[#D84B20] tracking-[0.2em] uppercase block font-bold -mt-1">Attapur Studio</span>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed text-stone-400 max-w-sm">
              Premium modular interior design and execution specialists. Delivering high-precision modular furniture layouts with our signature Mid-Century Modern styling on a flat 45-day guaranteed timeline.
            </p>
            <p className="text-[10px] text-stone-500 font-bold tracking-wider">
              © {new Date().getFullYear()} Livspace Attapur Center. Manufactured by Livspace India. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-black text-stone-400">Design Navigation</h4>
            <ul className="space-y-2.5 text-sm font-bold text-stone-300">
              <li><a href="#hero" className="hover:text-[#006E7F] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#006E7F] transition-colors">Service Catalog</a></li>
              <li><a href="#configurator" className="hover:text-[#006E7F] transition-colors">Style Configurator</a></li>
              <li><a href="#stories" className="hover:text-[#006E7F] transition-colors">Customer Stories</a></li>
              <li><a href="#faqs" className="hover:text-[#006E7F] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Location details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-black text-stone-400">Experience Center Address</h4>
            <p className="text-sm font-bold leading-relaxed text-stone-300">
              Opposite Happy Homes, PVNR Expressway Pillar 130,<br />
              Attapur, Hyderabad, Telangana - 500048
            </p>
            <p className="text-xs text-stone-400 font-bold">
              Helpline: +91 98765 43210<br />
              Email: attapur.studio@livspace.com
            </p>
            
            <div className="pt-4 flex gap-4 text-xs font-bold text-stone-500">
              <span className="hover:text-stone-300 transition-colors cursor-pointer">Instagram</span>
              <span className="hover:text-stone-300 transition-colors cursor-pointer">Facebook</span>
              <span className="hover:text-stone-300 transition-colors cursor-pointer">Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

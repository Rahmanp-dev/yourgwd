'use client';

import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Layers, 
  Wrench, 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  Check, 
  ArrowUpRight,
  Maximize2,
  SlidersHorizontal,
  DollarSign,
  Shield,
  Award,
  Sparkles
} from 'lucide-react';

export default function SimplyInteriorsPage() {
  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    possessionDate: '',
    sqFt: 1800,
    finishType: 'High-Gloss German Acrylic',
    hardwareTier: 'Premium Hettich',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Interactive Tab Section for Layout Options
  const [activeLayoutTab, setActiveLayoutTab] = useState('kitchen');
  const [activeKitchenStyle, setActiveKitchenStyle] = useState('l-shape');

  // Calculator Parameters
  const [calcSqFt, setCalcSqFt] = useState(1600);
  const [calcFinish, setCalcFinish] = useState('Acrylic'); // Laminate, Acrylic, PU Lacquer
  const [calcTier, setCalcTier] = useState('Premium'); // Standard, Premium, Elite
  const [calcBreakdown, setCalcBreakdown] = useState({
    woodwork: 280000,
    hardware: 85000,
    countertop: 45000,
    total: 410000
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Recalculate costs based on calculator parameters
  useEffect(() => {
    let ratePerSqFt = 160; // base rate
    
    // Finish adjustment
    let finishMultiplier = 1.0;
    if (calcFinish === 'Laminate') finishMultiplier = 0.85;
    if (calcFinish === 'Acrylic') finishMultiplier = 1.15;
    if (calcFinish === 'PU Lacquer') finishMultiplier = 1.45;

    // Hardware tier adjustment
    let hardwareFlat = 50000;
    if (calcTier === 'Standard') hardwareFlat = 35000;
    if (calcTier === 'Premium') hardwareFlat = 75000;
    if (calcTier === 'Elite') hardwareFlat = 130000;

    const woodworkCost = Math.round(calcSqFt * ratePerSqFt * finishMultiplier);
    const hardwareCost = Math.round(hardwareFlat * (calcSqFt / 1500 + 0.3));
    const countertopCost = Math.round(35000 * (calcSqFt / 1600));
    const totalCost = woodworkCost + hardwareCost + countertopCost;

    setCalcBreakdown({
      woodwork: woodworkCost,
      hardware: hardwareCost,
      countertop: countertopCost,
      total: totalCost
    });
  }, [calcSqFt, calcFinish, calcTier]);

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.possessionDate) errors.possessionDate = 'Possession date is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsSubmitting(true);

      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 1500);
    }
  };

  // Kitchen Styles Data
  const kitchenStyles = {
    'l-shape': {
      title: 'L-Shaped Modular Kitchen',
      desc: 'Optimized for corner efficiency and perfect work triangle flow (sink, stove, fridge). Highly recommended for modern high-rises in Attapur.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      specs: {
        'Min Counter Length': '12 + 8 Feet',
        'Cabinet Surface': 'Calibrated Calite Ply',
        'Hardware System': 'Soft-Close Tandem Boxes',
        'Storage Density': '380 Liters Volume'
      }
    },
    'u-shape': {
      title: 'U-Shaped Kitchen System',
      desc: 'Provides three full walls of modular cabinets. Perfect for families requiring maximum countertop workspace and integrated built-in appliances.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      specs: {
        'Min Counter Length': '10 + 12 + 8 Feet',
        'Cabinet Surface': 'BWP Marine Ply',
        'Hardware System': 'Blum Lift-ups & Drawers',
        'Storage Density': '580 Liters Volume'
      }
    },
    'island': {
      title: 'Island Contemporary Kitchen',
      desc: 'Features a central freestanding prep counter. Serves as a conversational hub combining meal preparation and breakfast dining.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      specs: {
        'Min Counter Length': '14 Feet + 6ft Island',
        'Cabinet Surface': 'Waterproof PU Lacquer',
        'Hardware System': 'Grass Dynapro Soft-close',
        'Storage Density': '460 Liters Volume'
      }
    }
  };

  const faqData = [
    {
      question: 'What defines a Bento Grid interior design system?',
      answer: 'Just like a Bento Box separates culinary items into dense, neat compartments, our Bento Grid design splits your home layouts into structured functional zones. This ensures every square inch of wall space is engineered for maximum storage density without cluttering your walking paths.'
    },
    {
      question: 'What materials are used in your modular kitchens?',
      answer: 'Simply Interiors uses 100% Calibrated Boiled Water Proof (BWP) Marine Plywood for all under-sink and wet areas, and Boiled Water Resistant (BWR) blockboards for dry storage cabinets. The surfaces are hot-pressed with high-gloss German Acrylic or premium anti-fingerprint laminates.'
    },
    {
      question: 'How accurate is the online square footage calculator?',
      answer: 'Our estimator uses real current material rates in Hyderabad for standard modular installations. While the final price may adjust slightly based on actual wall height variations and custom internal accessory choices, the online breakdown is usually accurate within ±7%.'
    },
    {
      question: 'Do you manufacture these modular units locally?',
      answer: 'All modular components are manufactured in our automated factory using German precision edge-banders and boring machines. The items are flat-packed and transported directly to your Attapur residence, ensuring zero sawdust and a clean, 5-day installation.'
    },
    {
      question: 'What warranties do you provide on hardware?',
      answer: 'We provide a 10-year warranty on all wooden cabinetry structures. Additionally, the premium German Hettich and Blum soft-close hinges and drawer sliders carry lifetime functional performance warranties from their respective manufacturers.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E1317] text-[#ECECEC] font-sans selection:bg-[#E67E22] selection:text-white">
      
      {/* HEADER */}
      <header className="border-b border-[#2C3E50]/40 bg-[#0E1317]/95 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E67E22] flex items-center justify-center font-extrabold text-white tracking-tighter text-lg rounded-md">
              SI
            </div>
            <div>
              <span className="font-bold text-lg tracking-wider text-white block uppercase">Simply Interiors</span>
              <span className="text-[9px] uppercase tracking-widest text-[#E67E22] block font-bold -mt-1">Contemporary Bento Grids • Attapur</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#A0A0A0]">
            <a href="#about" className="hover:text-[#E67E22] transition-colors">Philosophy</a>
            <a href="#kitchens" className="hover:text-[#E67E22] transition-colors">Modular Kitchens</a>
            <a href="#calculator" className="hover:text-[#E67E22] transition-colors">Cost Calculator</a>
            <a href="#testimonials" className="hover:text-[#E67E22] transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-[#E67E22] transition-colors">FAQ</a>
          </nav>

          {/* CTA */}
          <div>
            <a 
              href="#contact" 
              className="bg-transparent border border-[#E67E22] text-[#E67E22] px-5 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#E67E22] hover:text-white transition-all rounded-md"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* BENTO GRID HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Hero Bento Box 1: Core Hero Statement (8 cols) */}
          <div className="md:col-span-8 bg-[#151D24] border border-[#2C3E50]/40 p-8 md:p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E67E22]/5 blur-3xl pointer-events-none"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 border border-[#E67E22]/30 bg-[#E67E22]/10 px-3 py-1 text-[10px] uppercase tracking-wider text-[#E67E22] rounded-full mb-6 font-bold">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span>Contemporary Bento Layouts</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 uppercase">
                High-Density <br />
                Modular Woodwork. <br />
                <span className="text-[#E67E22]">Zero Wasted Space</span>.
              </h1>
              
              <p className="text-xs md:text-sm text-[#A0A0A0] max-w-xl leading-relaxed font-light">
                Bespoke interior design engineered for maximum space allocation. We build contemporary bento-grid structures, modular kitchens, and integrated wardrobe consoles in Attapur and greater Hyderabad.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#calculator" 
                className="bg-[#E67E22] hover:bg-[#cf6d19] text-white px-6 py-3.5 text-xs uppercase tracking-wider font-bold transition-all rounded-md flex items-center gap-2 shadow-lg"
              >
                <span>Calculate Cost Instantly</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#kitchens" 
                className="bg-[#1C2630] border border-[#2C3E50]/40 text-white px-6 py-3.5 text-xs uppercase tracking-wider font-bold hover:bg-[#25323E] transition-all rounded-md"
              >
                Explore Kitchen Styles
              </a>
            </div>
          </div>

          {/* Hero Bento Box 2: Structural Quality Card (4 cols) */}
          <div className="md:col-span-4 bg-[#151D24] border border-[#2C3E50]/40 p-8 rounded-2xl flex flex-col justify-between min-h-[400px]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-[#1C2630] flex items-center justify-center border border-[#2C3E50]/40 rounded-lg">
                <Shield className="w-5 h-5 text-[#E67E22]" />
              </div>
              <span className="text-[9px] bg-[#222E3A] border border-[#2C3E50]/40 px-2 py-0.5 uppercase tracking-widest text-[#A0A0A0] rounded-md font-bold">Structural</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="block text-3xl font-extrabold text-white">10 Years</span>
                <span className="block text-xs uppercase tracking-wider text-[#E67E22] mt-1 font-bold">Calibrated Cabinet Warranty</span>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                We manufacture utilizing calibrated BWP plywood frames that reject humidity warping. Covered by a flat, non-prorated decade warranty.
              </p>
            </div>
          </div>

          {/* Hero Bento Box 3: Kitchen Visual Aspect Ratio (4 cols) */}
          <div className="md:col-span-4 aspect-square bg-[#151D24] border border-[#2C3E50]/40 rounded-2xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" 
              alt="Modular Kitchen Detail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#E67E22] block font-bold">Attapur Showroom</span>
                <span className="text-sm font-bold text-white block uppercase">Contemporary Acrylic</span>
              </div>
              <Maximize2 className="w-4 h-4 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Hero Bento Box 4: Efficiency Metrics (8 cols) */}
          <div className="md:col-span-8 bg-[#151D24] border border-[#2C3E50]/40 p-8 rounded-2xl flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="border-r border-[#2C3E50]/30 pr-4 space-y-2">
                <span className="block text-3xl font-extrabold text-white">40 Days</span>
                <span className="block text-xs text-[#E67E22] uppercase font-bold">Delivery Pledge</span>
                <p className="text-[11px] text-[#A0A0A0] leading-normal font-light">
                  From architectural layout signoff to on-site hand-off. Delay penalties paid directly to the customer.
                </p>
              </div>

              <div className="border-r border-[#2C3E50]/30 px-2 sm:px-4 space-y-2">
                <span className="block text-3xl font-extrabold text-white">100%</span>
                <span className="block text-xs text-[#E67E22] uppercase font-bold">Factory Precision</span>
                <p className="text-[11px] text-[#A0A0A0] leading-normal font-light">
                  Machined in our automated facility. Flat packed panels require zero on-site carpenter sawing or mess.
                </p>
              </div>

              <div className="pl-0 sm:pl-4 space-y-2">
                <span className="block text-3xl font-extrabold text-white">Hettich</span>
                <span className="block text-xs text-[#E67E22] uppercase font-bold">Standard Hardware</span>
                <p className="text-[11px] text-[#A0A0A0] leading-normal font-light">
                  Every drawer slide and cabinet hinge comes standard with lifetime functional performance guarantees.
                </p>
              </div>

            </div>

            <div className="border-t border-[#2C3E50]/30 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="text-[11px] text-[#A0A0A0] font-light">
                Consulting layouts daily for apartments & villas near Happy Homes, Rambagh, Hyderguda, and Attapur.
              </span>
              <div className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#E67E22] transition-colors cursor-pointer">
                <span>View Project Specifications</span>
                <ArrowUpRight className="w-4 h-4 text-[#E67E22]" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: PHILOSOPHY */}
      <section id="about" className="py-16 bg-[#121920] border-t border-b border-[#2C3E50]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#E67E22] font-bold">
                <Award className="w-4 h-4" />
                <span>Modern Space Engineering</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">
                Contemporary Bento Grids: <br />
                The Storage Density Revolution
              </h2>

              <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed font-light">
                Traditional home designs frequently waste vertical wall heights and deep corner crevices. At Simply Interiors, we structure custom layouts according to modular grids, allocating designated sections to cabinets, pull-outs, utilities, and task areas. This guarantees high information density and structural order, providing up to 40% more storage space.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                
                <div className="border border-[#2C3E50]/40 p-5 rounded-xl bg-[#172129]">
                  <h3 className="font-bold text-sm text-white uppercase tracking-wide">Structured Dividers</h3>
                  <p className="text-xs text-[#A0A0A0] mt-2 leading-relaxed">Adjustable internal grid shelving that configures precisely to your kitchen vessels and pantry storage sizes.</p>
                </div>

                <div className="border border-[#2C3E50]/40 p-5 rounded-xl bg-[#172129]">
                  <h3 className="font-bold text-sm text-white uppercase tracking-wide">Concealed Channels</h3>
                  <p className="text-xs text-[#A0A0A0] mt-2 leading-relaxed">Integrated custom cable routers and utility pipe channels tucked neatly behind wood backing boards.</p>
                </div>

              </div>
            </div>

            {/* Right Graphic/Stat (5 cols) */}
            <div className="lg:col-span-5 bg-[#151D24] border border-[#2C3E50]/40 p-8 rounded-2xl text-center space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#E67E22] font-bold block">Space Benchmark</span>
              <div className="w-24 h-24 rounded-full border-4 border-[#E67E22] border-t-transparent flex items-center justify-center mx-auto animate-spin-slow">
                <span className="text-2xl font-extrabold text-white">+40%</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase">Storage Density Gain</h3>
              <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
                Calculated on average Attapur high-rise floorplans using modular bento dividers compared to standard local carpentry woodwork.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: MODULAR KITCHENS (TABS FOR LAYOUT OPTIONS) */}
      <section id="kitchens" className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="border-b border-[#2C3E50]/40 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#E67E22] font-bold block mb-1">Interactive Tab Options</span>
              <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Modern Modular Kitchen Styles</h2>
            </div>

            {/* Custom Tab Selector */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(kitchenStyles).map((styleKey) => (
                <button
                  key={styleKey}
                  onClick={() => setActiveKitchenStyle(styleKey)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-bold rounded border transition-all ${
                    activeKitchenStyle === styleKey 
                      ? 'bg-[#E67E22] text-white border-[#E67E22]' 
                      : 'bg-[#151D24] text-[#A0A0A0] border-[#2C3E50]/40 hover:text-white'
                  }`}
                >
                  {styleKey.replace('-', ' ')} Layout
                </button>
              ))}
            </div>
          </div>

          {/* Active Style details */}
          <div className="bg-[#151D24] border border-[#2C3E50]/40 p-6 md:p-10 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left description */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#E67E22] font-bold block mb-1">Layout Configuration</span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{kitchenStyles[activeKitchenStyle].title}</h3>
                  <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed font-light mt-4">
                    {kitchenStyles[activeKitchenStyle].desc}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(kitchenStyles[activeKitchenStyle].specs).map(([specKey, specVal]) => (
                    <div key={specKey} className="bg-[#1E2630] border border-[#2C3E50]/30 p-4 rounded-lg">
                      <span className="block text-[9px] uppercase tracking-wider text-[#A0A0A0]">{specKey}</span>
                      <span className="block text-xs font-bold text-white mt-1">{specVal}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a 
                    href="#contact" 
                    onClick={() => setFormData({ ...formData, finishType: 'High-Gloss German Acrylic', message: `Interested in ${kitchenStyles[activeKitchenStyle].title} setup.` })}
                    className="inline-flex items-center gap-2 text-xs text-[#E67E22] font-bold uppercase hover:text-white transition-colors"
                  >
                    <span>Request specific quote</span>
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="lg:col-span-6 relative border border-[#2C3E50]/40 p-2.5 rounded-xl bg-[#1C2630]">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={kitchenStyles[activeKitchenStyle].image} 
                    alt={kitchenStyles[activeKitchenStyle].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION: INTERACTIVE COST CALCULATOR */}
      <section id="calculator" className="py-16 bg-[#121920] border-t border-b border-[#2C3E50]/40">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#E67E22] font-bold block">Dynamic Estimations</span>
            <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Cost Calculator By Square Footage</h2>
            <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
              Drag the slider to adjust your carpet area and select premium material specs to estimate real-time cabinetry and hardware costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Calculator Selectors */}
            <div className="lg:col-span-7 bg-[#151D24] border border-[#2C3E50]/40 p-6 md:p-8 rounded-2xl space-y-6 flex flex-col justify-between">
              
              {/* Parameter 1: Carpet Area Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase tracking-wider text-[#E67E22] font-bold">1. Carpet Area (Square Footage)</label>
                  <span className="text-lg font-bold text-white bg-[#1E2630] border border-[#2C3E50]/40 px-3 py-1 rounded">
                    {calcSqFt} Sq. Ft.
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#A0A0A0]">1000</span>
                  <input 
                    type="range"
                    min="1000"
                    max="4000"
                    step="100"
                    value={calcSqFt}
                    onChange={(e) => setCalcSqFt(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#1E2630] rounded-lg appearance-none cursor-pointer accent-[#E67E22]"
                  />
                  <span className="text-xs text-[#A0A0A0]">4000</span>
                </div>
              </div>

              {/* Parameter 2: Cabinet finish */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-[#E67E22] font-bold">2. Cabinet Finish Layer</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Laminate', desc: 'Premium Matte or Gloss hot-pressed laminate' },
                    { name: 'Acrylic', desc: 'High-Gloss anti-scratch German Acrylic' },
                    { name: 'PU Lacquer', desc: 'Bespoke hand-sprayed waterproof polyurethane lacquer' }
                  ].map((fin) => (
                    <button
                      key={fin.name}
                      onClick={() => setCalcFinish(fin.name)}
                      className={`px-4 py-3.5 text-left rounded-lg border transition-all flex flex-col justify-between ${
                        calcFinish === fin.name 
                          ? 'bg-[#E67E22] text-white border-[#E67E22]' 
                          : 'bg-transparent text-[#A0A0A0] border-[#2C3E50]/40 hover:border-white'
                      }`}
                    >
                      <span className="font-bold text-xs">{fin.name}</span>
                      <span className="text-[9px] text-[#A0A0A0] mt-1 leading-normal group-hover:text-white/80">{fin.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Hardware Tier */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-[#E67E22] font-bold">3. Hardware & Accessory Tier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Standard', desc: 'Soft-close localized brand cabinetry hardware' },
                    { name: 'Premium', desc: 'Full Hettich Sensys soft-close and drawer sliders' },
                    { name: 'Elite', desc: 'Premium Blum Legrabox soft-close motion drawers' }
                  ].map((tier) => (
                    <button
                      key={tier.name}
                      onClick={() => setCalcTier(tier.name)}
                      className={`px-4 py-3.5 text-left rounded-lg border transition-all flex flex-col justify-between ${
                        calcTier === tier.name 
                          ? 'bg-[#E67E22] text-white border-[#E67E22]' 
                          : 'bg-transparent text-[#A0A0A0] border-[#2C3E50]/40 hover:border-white'
                      }`}
                    >
                      <span className="font-bold text-xs">{tier.name}</span>
                      <span className="text-[9px] text-[#A0A0A0] mt-1 leading-normal">{tier.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Outputs Metrics Card */}
            <div className="lg:col-span-5 bg-[#151D24] border border-[#E67E22]/30 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-[#E67E22]/20 text-[#E67E22] text-[9px] uppercase font-bold px-2 py-0.5 rounded border border-[#E67E22]/40">
                Calculator Spec
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold block mb-1">Estimated Total Cost</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                    ₹{calcBreakdown.total.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#A0A0A0] uppercase font-bold ml-1">Lump Sum</span>
                </div>
                <p className="text-[10px] text-[#A0A0A0] mt-2 leading-relaxed">
                  *Rough project cost is calculated based on current Attapur raw material pricing. Actual quotation is provided after site survey.
                </p>
              </div>

              {/* Dynamic Line-item Breakdown */}
              <div className="border-t border-[#2C3E50]/40 my-6 pt-6 space-y-4">
                <span className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold">Line-item Cost Breakdown:</span>
                
                {/* Woodwork */}
                <div className="flex justify-between items-center bg-[#1E2630] p-3.5 rounded-lg border border-[#2C3E50]/30">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-[#E67E22]" />
                    <div>
                      <span className="block text-xs font-bold text-white uppercase">Modular Cabinetry</span>
                      <span className="block text-[9px] text-[#A0A0A0]">Calibrated wood carcasses</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">₹{calcBreakdown.woodwork.toLocaleString('en-IN')}</span>
                </div>

                {/* Hardware */}
                <div className="flex justify-between items-center bg-[#1E2630] p-3.5 rounded-lg border border-[#2C3E50]/30">
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-[#E67E22]" />
                    <div>
                      <span className="block text-xs font-bold text-white uppercase">Premium Hardware</span>
                      <span className="block text-[9px] text-[#A0A0A0]">Soft-close drawer slides</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">₹{calcBreakdown.hardware.toLocaleString('en-IN')}</span>
                </div>

                {/* Countertop */}
                <div className="flex justify-between items-center bg-[#1E2630] p-3.5 rounded-lg border border-[#2C3E50]/30">
                  <div className="flex items-center gap-3">
                    <Grid className="w-5 h-5 text-[#E67E22]" />
                    <div>
                      <span className="block text-xs font-bold text-white uppercase">Quartz Countertops</span>
                      <span className="block text-[9px] text-[#A0A0A0]">Fittings & install labor</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">₹{calcBreakdown.countertop.toLocaleString('en-IN')}</span>
                </div>

              </div>

              {/* Apply parameters to contact form */}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  onClick={() => setFormData({ ...formData, sqFt: calcSqFt, finishType: `${calcFinish} Finish`, hardwareTier: `${calcTier} Hardware`, message: `Generated estimator configuration: ${calcSqFt} Sq. Ft. with ${calcFinish} finish and ${calcTier} hardware.` })}
                  className="w-full bg-[#E67E22] hover:bg-[#cf6d19] text-white text-center block py-4 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md"
                >
                  Apply Estimate Configuration
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: TESTIMONIALS */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#E67E22] font-bold block">Bento Reviews</span>
            <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Verified Client Testimonials</h2>
            <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
              Read how Simply Interiors delivers precision modular fits and high-density designs for Hyderabad homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-[#151D24] border border-[#2C3E50]/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#E67E22] mb-4 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed italic mb-6">
                  "Simply Interiors did a phenomenal job on our 3BHK at Attapur. The bento grid wardrobe layouts are highly compact. The PU lacquer finish on the kitchen cabinetry has a glassy sheen that feels premium."
                </p>
              </div>
              <div className="border-t border-[#2C3E50]/30 pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-white uppercase">Vikram Reddy</span>
                  <span className="block text-[10px] text-[#A0A0A0]">Attapur Apartment Owner</span>
                </div>
                <span className="text-[10px] bg-[#1E2630] border border-[#2C3E50]/40 px-2 py-0.5 text-[#E67E22] rounded font-semibold">
                  3 BHK Kitchen & Wardrobe
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#151D24] border border-[#2C3E50]/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#E67E22] mb-4 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed italic mb-6">
                  "The factory modular packaging is so clean. The team arrived on day 35 and took exactly 4 days to lock-and-key install the entire kitchen. No messy wood-sawing occurred in the house. Great professional execution!"
                </p>
              </div>
              <div className="border-t border-[#2C3E50]/30 pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-white uppercase">Arpana Sen</span>
                  <span className="block text-[10px] text-[#A0A0A0]">Hyderguda Homeowner</span>
                </div>
                <span className="text-[10px] bg-[#1E2630] border border-[#2C3E50]/40 px-2 py-0.5 text-[#E67E22] rounded font-semibold">
                  Modular Kitchen Package
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#151D24] border border-[#2C3E50]/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#E67E22] mb-4 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed italic mb-6">
                  "Extremely transparent pricing process. The online calculator was within ₹15,000 of the final formal quotation. Hettich soft-close hardware runs flawlessly. Will definitely recommend them to friends!"
                </p>
              </div>
              <div className="border-t border-[#2C3E50]/30 pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-white uppercase">Sanjay Kumar</span>
                  <span className="block text-[10px] text-[#A0A0A0]">Rambagh Resident</span>
                </div>
                <span className="text-[10px] bg-[#1E2630] border border-[#2C3E50]/40 px-2 py-0.5 text-[#E67E22] rounded font-semibold">
                  Wardrobe & Living Consoles
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FAQ ACCORDION COLLAPSIBLE */}
      <section id="faq" className="py-16 bg-[#121920] border-t border-[#2C3E50]/40">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#E67E22] font-bold block">Inquiries</span>
            <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
              Review standard modular timelines, hardware features, and custom planning specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Accordion Questions */}
            <div className="lg:col-span-8 space-y-3">
              {faqData.map((faq, i) => (
                <div 
                  key={i} 
                  className="border border-[#2C3E50]/40 bg-[#151D24] rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-[#1E2630] transition-colors"
                  >
                    <span className="text-sm font-bold text-white uppercase tracking-wide pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#E67E22] transform transition-transform duration-300 flex-shrink-0 ${
                        openFaq === i ? 'rotate-180 text-white' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-[500px] border-t border-[#2C3E50]/40' : 'max-h-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <div className="p-5 text-xs text-[#A0A0A0] leading-relaxed bg-[#0E1317]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-4 bg-[#151D24] border border-[#2C3E50]/40 p-6 rounded-2xl space-y-6">
              <span className="text-[10px] text-[#E67E22] uppercase font-bold tracking-widest block">Hyderabad Support</span>
              
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Want to inspect layouts in person?</h3>
              
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                Visit our Attapur modular gallery. You can open and check soft-close slide motions, inspect internal drawer organizers, and check calibrated plywood cut sections live.
              </p>

              <div className="border-t border-[#2C3E50]/40 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#A0A0A0]">
                  <Clock className="w-4.5 h-4.5 text-[#E67E22]" />
                  <span>10:00 AM - 08:00 PM (Weekly Off: Tuesday)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#A0A0A0]">
                  <Phone className="w-4.5 h-4.5 text-[#E67E22]" />
                  <span className="font-bold text-white">+91 40 4880 7777</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: CONTACT FORM */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#151D24] border border-[#2C3E50]/40 rounded-2xl p-6 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Info panel */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E67E22] font-bold block mb-1">Architectural Consultation</span>
                <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">Request Free Layout Design Session</h2>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-light mt-4">
                  Share your floor parameters and handover dates. Our modular design architect will draft custom layout options sheets and send you a precision quote breakdown.
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-[#2C3E50]/30 mt-6 lg:mt-0">
                <div className="flex items-center gap-3 text-xs text-[#A0A0A0]">
                  <MapPin className="w-4 h-4 text-[#E67E22]" />
                  <span>Simply Design Center, Main Bypass Road, Opposite pillar 110, Attapur, Hyderabad - 500048</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#A0A0A0]">
                  <Mail className="w-4 h-4 text-[#E67E22]" />
                  <span className="font-bold text-white">consulting@simplyinteriorshyd.com</span>
                </div>
              </div>
            </div>

            {/* Form inputs */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="text-center py-16 flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 bg-[#E67E22]/10 border border-[#E67E22]/30 flex items-center justify-center rounded-full">
                    <Check className="w-8 h-8 text-[#E67E22]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Consultation Triggered</h3>
                  <p className="text-xs text-[#A0A0A0] max-w-md leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. We have registered your modular design inquiry. Our showroom architect will contact you on <strong className="text-white">{formData.phone}</strong> before tomorrow evening to finalize your drawing slot.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', possessionDate: '', sqFt: 1800, finishType: 'High-Gloss German Acrylic', hardwareTier: 'Premium Hettich', message: '' });
                    }}
                    className="bg-[#1C2630] border border-[#2C3E50]/40 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Full Name</label>
                      <input 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Srikkanth Reddy"
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md placeholder-zinc-650"
                      />
                      {formErrors.fullName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Phone Number</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9849012345"
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md placeholder-zinc-650"
                      />
                      {formErrors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Email Address</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. srikkanth@gmail.com"
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md placeholder-zinc-650"
                      />
                      {formErrors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Possession Timeline</label>
                      <input 
                        type="date"
                        value={formData.possessionDate}
                        onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md"
                      />
                      {formErrors.possessionDate && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.possessionDate}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Carpet Area</label>
                      <input
                        type="number"
                        value={formData.sqFt}
                        onChange={(e) => setFormData({ ...formData, sqFt: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Cabinet Finish</label>
                      <select
                        value={formData.finishType}
                        onChange={(e) => setFormData({ ...formData, finishType: e.target.value })}
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md"
                      >
                        <option value="Premium Matte Laminate">Matte Laminate</option>
                        <option value="High-Gloss German Acrylic">High-Gloss Acrylic</option>
                        <option value="PU Lacquer Finish">PU Lacquer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Hardware Class</label>
                      <select
                        value={formData.hardwareTier}
                        onChange={(e) => setFormData({ ...formData, hardwareTier: e.target.value })}
                        className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md"
                      >
                        <option value="Standard Soft-Close">Standard Soft-Close</option>
                        <option value="Premium Hettich">Premium Hettich</option>
                        <option value="Elite Blum Motion">Elite Blum Motion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">Custom layout requests</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your floor layout (e.g. U-shape kitchen layout, floor-to-ceiling glass wardrobes...)"
                      className="w-full bg-[#1E2630] border border-[#2C3E50]/30 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E67E22] rounded-md placeholder-zinc-650 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E67E22] hover:bg-[#cf6d19] disabled:bg-[#E67E22]/65 text-white py-4 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md flex items-center justify-center gap-3 border border-[#E67E22]/30 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing modular parameters...</span>
                      </>
                    ) : (
                      <span>Submit Estimate Inquiry</span>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2C3E50]/40 bg-[#0A0E12] py-10 mt-12 text-xs text-[#A0A0A0]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#E67E22] flex items-center justify-center font-extrabold text-white text-xs rounded">
              SI
            </div>
            <span className="font-bold text-white uppercase tracking-wider">Simply Interiors Hyderabad</span>
          </div>

          <div className="md:text-right font-light space-y-1">
            <p>© 2026 Simply Interiors. All rights reserved.</p>
            <p>Modern Space Engineering using Bento Grid Layouts. Precision modular woodwork.</p>
            <p>Attapur Main Road, Near Pillar 110, Hyderabad, Telangana.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, Check, ChevronDown, ChevronUp, Star, MapPin, 
  Phone, Mail, Compass, Award, Heart, CheckCircle2, Hammer, 
  Flame, Brush, UserCheck, Sparkles
} from 'lucide-react';

export default function CharyInteriorsHeritage() {
  const [activeTab, setActiveTab] = useState('woodcraft');
  const [faqOpen, setFaqOpen] = useState({});
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', woodPreference: 'teak', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Estimator States
  const [woodType, setWoodType] = useState('teak'); // teak, sheesham, walnut
  const [complexity, setComplexity] = useState('classical'); // standard, classical, brass-inlay
  const [selections, setSelections] = useState({
    mandir: false,
    sofaSet: false,
    dining: false,
    wallPanels: false,
    wardrobe: false
  });

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSelectionToggle = (key) => {
    setSelections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Estimator rates
  const woodFactors = {
    teak: 1.5,
    sheesham: 1.25,
    walnut: 1.0
  };

  const complexityFactors = {
    standard: 1.0,
    classical: 1.3,
    'brass-inlay': 1.55
  };

  const unitPrices = {
    mandir: 120000,
    sofaSet: 180000,
    dining: 95000,
    wallPanels: 65000,
    wardrobe: 140000
  };

  const calculateEstimate = () => {
    let itemTotal = 0;
    Object.keys(selections).forEach(key => {
      if (selections[key]) {
        itemTotal += unitPrices[key];
      }
    });

    // If nothing is selected, calculate a mock average base of ₹1,00,000 for calculation display
    const activeBase = itemTotal > 0 ? itemTotal : 150000;
    const woodMult = woodFactors[woodType];
    const compMult = complexityFactors[complexity];
    
    const subtotal = activeBase * woodMult * compMult;
    const artisanSurcharge = subtotal * 0.15; // 15% surcharge for traditional handcrafting
    const gst = (subtotal + artisanSurcharge) * 0.18;
    const total = subtotal + artisanSurcharge + gst;

    return {
      activeBase,
      subtotal,
      artisanSurcharge,
      gst,
      total,
      hasSelections: itemTotal > 0
    };
  };

  const { activeBase, subtotal, artisanSurcharge, gst, total, hasSelections } = calculateEstimate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', phone: '', email: '', woodPreference: 'teak', message: '' });
    }, 1500);
  };

  const tabsData = {
    woodcraft: {
      title: "BESPOKE WOODCRAFT",
      subtitle: "Hand-chiseled walnut and teak units built to span generations.",
      description: "True woodcraft requires time, patience, and seasoned timber. Sri Chary and our master artisans handcraft luxury sofas, customized credenzas, and structural arches from premium solid wood. Every joint is assembled using classical mortise-and-tenon framing, eliminating plastic fasteners entirely.",
      hours: "120 Hours",
      timber: "Burma Teak & Indian Sheesham",
      finish: "Natural walnut oil & hand-rubbed shellac",
      image: "https://images.unsplash.com/photo-1611269154363-be938f80949c?auto=format&fit=crop&q=80&w=800&h=500"
    },
    mandir: {
      title: "PUJA MANDIR CREATIONS",
      subtitle: "Sacred architecture blending traditional carving with modern backlit glow.",
      description: "Our signature mandir units are designed according to Vastu Shastra, featuring exquisite traditional hand-carved pillars, custom brass hardware, and integrated LED backlight systems behind intricate jali panels. Available in pure teakwood or warm mahogany.",
      hours: "160 Hours",
      timber: "Sacred Teakwood & Rosewood",
      finish: "Gold leaf accents & lacquer polish",
      image: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=800&h=500"
    },
    living: {
      title: "LIVING ROOM FUSION",
      subtitle: "Warm walnut paneling meets modern structural comforts.",
      description: "Harmonizing rich wood textures with contemporary design elements. We combine floor-to-ceiling wooden fluted panels, custom leather chesterfields, and solid wood coffee tables with sleek metal bases to create cozy, high-character family areas.",
      hours: "95 Hours",
      timber: "American Walnut & Country Teak",
      finish: "Matte polyurethane wood seal",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=500"
    },
    kitchen: {
      title: "TRADITIONAL KITCHENS",
      subtitle: "Solid wood shaker cabinets built for heavy Indian culinary use.",
      description: "Ditch modular particle board for seasoned wood frames that resist moisture and warping. We hand-build cabinet doors in solid wood, paired with state-of-the-art silent drawers and granite countertops, creating kitchens that feel incredibly warm and authentic.",
      hours: "140 Hours",
      timber: "Engineered Walnut & Teak veneers",
      finish: "Waterproof polyurethane protective coating",
      image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=800&h=500"
    },
    paneling: {
      title: "DECORATIVE PANELING",
      subtitle: "Classical grid paneling and ceiling beams framing warm luxury.",
      description: "Transform plain drywall into structural art. We craft custom wall panels, coffered wooden ceilings, and structural column wraps that bring acoustic warmth and timeless heritage elegance into high-rise flats in Hyderabad.",
      hours: "80 Hours",
      timber: "Red Cedar & Indian Rosewood",
      finish: "Classic rosewood stain & satin sealer",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=500"
    }
  };

  const faqs = [
    {
      q: "What types of wood do you use at Chary Interiors?",
      a: "We work exclusively with seasoned, moisture-controlled solid timbers. Our premium projects use imported Burma Teakwood, Indian Rosewood (Sheesham), and rich American Walnut. We ensure all timber is properly kiln-seasoned in our workshop near Attapur to prevent warping or cracking under Hyderabad's weather."
    },
    {
      q: "How does the traditional hand-carving process work?",
      a: "All carving work is overseen by Sri Chary, a master craftsman with over three decades of heritage experience. After confirming the drawing, the motifs are transferred to solid wood blocks and carved by hand using traditional chisels. This preserves a depth of detail that no CNC machine can replicate."
    },
    {
      q: "How do you maintain the wood finishes over time?",
      a: "We apply premium modern protective coatings (like PU and marine sealers) over classical oil finishes. This makes our wooden dining tables and kitchens highly resistant to water spills, heat, and scratches. A simple polish with natural beeswax once a year is all that's needed."
    },
    {
      q: "What is your typical project delivery timeline?",
      a: "Since custom carving and solid wood seasoning require absolute precision, our average home completion takes between 8 to 12 weeks. We mock-assemble all major furniture units in our workshop for client inspections before transporting them to the site in Attapur."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#2C1E15] font-sans selection:bg-[#800020] selection:text-white antialiased">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#DCD0C0] px-6 sm:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-[#800020] flex items-center justify-center rounded-lg shadow-md shadow-red-950/20">
            <span className="text-[#FAF7F0] font-serif font-black text-lg">C</span>
          </div>
          <div>
            <span className="text-sm font-black tracking-wider uppercase block font-serif text-[#800020]">CHARY INTERIORS</span>
            <span className="text-[9px] font-mono tracking-widest text-[#8B5A2B] block uppercase">Sri Chary & Sons // Attapur</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest font-semibold text-[#8B5A2B]">
          <a href="#heritage" className="hover:text-[#800020] transition-colors">Our Heritage</a>
          <a href="#services" className="hover:text-[#800020] transition-colors">Craft Services</a>
          <a href="#estimator" className="hover:text-[#800020] transition-colors">Cost Estimator</a>
          <a href="#testimonials" className="hover:text-[#800020] transition-colors">Attestations</a>
          <a href="#faq" className="hover:text-[#800020] transition-colors">FAQ</a>
        </nav>

        <div>
          <a 
            href="#contact" 
            className="bg-[#800020] hover:bg-[#600018] text-[#FAF7F0] px-5 py-2.5 text-[10px] font-mono uppercase tracking-wider font-bold rounded-lg transition-all shadow-md active:scale-95"
          >
            Consult Master Craftsman
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-6 sm:px-12 py-20 lg:py-32 border-b border-[#DCD0C0] overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5A2B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#800020]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5A2B]/10 border border-[#8B5A2B]/20 text-[#8B5A2B] font-mono text-[10px] uppercase tracking-wider rounded-full font-semibold">
              <Hammer size={12} />
              Heritage Woodcarvers since 1993
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-[1.1] text-[#2C1E15]">
              Bespoke Woodcraft. <br />
              <span className="text-[#800020]">Timeless Heritage.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We design and construct premium walnut and teakwood interiors in Attapur, Hyderabad. Blending traditional Indian hand-carving techniques with modern spatial layouts, we build luxury spaces that tell your family's story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#estimator" 
                className="bg-[#800020] hover:bg-[#600018] text-white font-mono text-xs uppercase tracking-wider font-bold px-8 py-4.5 rounded-xl flex items-center justify-between gap-4 transition-all shadow-lg shadow-red-900/20"
              >
                Estimate Custom Carpentry
                <ArrowRight size={16} />
              </a>
              <a 
                href="#services" 
                className="border border-[#8B5A2B] hover:bg-[#8B5A2B]/5 text-[#8B5A2B] font-mono text-xs uppercase tracking-wider font-bold px-8 py-4.5 text-center rounded-xl transition-all"
              >
                Explore Carpentry Portfolio
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#FAF7F0] overflow-hidden border-4 border-[#8B5A2B] rounded-3xl shadow-xl shadow-stone-900/10">
              <img 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000" 
                alt="Heritage Wooden Bedroom Hyderabad" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#DCD0C0] p-6 max-w-xs rounded-2xl shadow-lg">
              <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase mb-1 font-bold">CRAFT DIALOGUE</span>
              <span className="text-xs font-serif font-black text-[#800020] block">Sri G. Shankara Chary</span>
              <span className="text-[11px] text-neutral-600 mt-1 block italic">"Solid timber is living art. It breaths, ages gracefully, and preserves heritage for your grandchildren."</span>
            </div>
          </div>

        </div>
      </section>

      {/* METRICS & HERITAGE PHILOSOPHY */}
      <section id="heritage" className="px-6 sm:px-12 py-20 bg-[#FAF7F0] border-b border-[#DCD0C0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="space-y-4 bg-white/50 border border-[#DCD0C0]/60 p-8 rounded-2xl">
              <div className="size-10 rounded-xl bg-[#8B5A2B]/10 flex items-center justify-center text-[#8B5A2B]">
                <Flame size={20} />
              </div>
              <h3 className="text-lg font-serif font-black uppercase text-[#2C1E15]">Seasoned Timber Only</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                We avoid composite MDF boards for structural items. We procure natural Burma Teak and Rosewood, seasoning it in solar kilns to reduce moisture content below 10%, ensuring absolute resistance to termites.
              </p>
            </div>

            <div className="space-y-4 bg-white/50 border border-[#DCD0C0]/60 p-8 rounded-2xl">
              <div className="size-10 rounded-xl bg-[#8B5A2B]/10 flex items-center justify-center text-[#8B5A2B]">
                <Flame size={20} />
              </div>
              <h3 className="text-lg font-serif font-black uppercase text-[#2C1E15]">Artisanal Joinery</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Our craftsmen use classical wooden dowels, tenon joints, and half-lap joins that lock together naturally. This creates structural stability that lasts for over a century without failing.
              </p>
            </div>

            <div className="space-y-4 bg-white/50 border border-[#DCD0C0]/60 p-8 rounded-2xl">
              <div className="size-10 rounded-xl bg-[#8B5A2B]/10 flex items-center justify-center text-[#8B5A2B]">
                <Flame size={20} />
              </div>
              <h3 className="text-lg font-serif font-black uppercase text-[#2C1E15]">Polishing Fine Art</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                We use traditional shellac rubbing techniques combined with German oils. This highlights the natural grain swirl of rosewood and walnut, instead of masking it under heavy opaque colors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE PORTFOLIO TABS */}
      <section id="services" className="px-6 sm:px-12 py-24 border-b border-[#DCD0C0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono text-[#8B5A2B] uppercase tracking-widest block font-bold">CRAFT CATALOGUE</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase tracking-tight mt-2 text-[#2C1E15]">
                SPECIALIZED WOODCRAFT <span className="text-[#800020]">PORTFOLIO</span>
              </h2>
            </div>
            
            {/* TAB SELECTOR */}
            <div className="flex flex-wrap border border-[#DCD0C0] p-1 bg-white rounded-xl">
              {Object.keys(tabsData).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider font-bold rounded-lg transition-all ${
                    activeTab === tabKey 
                      ? 'bg-[#800020] text-white' 
                      : 'text-[#8B5A2B] hover:text-[#800020]'
                  }`}
                >
                  {tabKey === 'woodcraft' ? 'WOODCRAFT' : tabKey === 'mandir' ? 'PUJA MANDIR' : tabKey === 'living' ? 'LIVING FUSION' : tabKey === 'kitchen' ? 'KITCHEN' : 'PANELING'}
                </button>
              ))}
            </div>
          </div>

          {/* TAB CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 sm:p-12 border border-[#DCD0C0] rounded-3xl shadow-lg shadow-stone-900/5">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono bg-[#8B5A2B]/10 text-[#8B5A2B] border border-[#8B5A2B]/20 px-3 py-1 rounded-full uppercase tracking-wider inline-block font-bold">
                {activeTab} blueprint
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#2C1E15]">
                {tabsData[activeTab].title}
              </h3>
              
              <p className="text-xs text-[#8B5A2B] font-mono italic -mt-2 font-semibold">
                {tabsData[activeTab].subtitle}
              </p>
              
              <p className="text-neutral-650 text-xs sm:text-sm leading-relaxed">
                {tabsData[activeTab].description}
              </p>
              
              <div className="border-t border-[#FAF7F0] pt-6 space-y-3">
                <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase font-bold">CRAFT DETAIL INCLUDES:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {["100% Solid Timber core", "Traditional carving options", "Vastu-compliant alignments", "Lifetime anti-termite treatment"].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-neutral-600">
                      <Check size={14} className="text-[#800020]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-[#DCD0C0] pt-6 text-[10px] font-mono">
                <div>
                  <span className="text-[#8B5A2B] block uppercase font-bold">CRAFT TIME</span>
                  <span className="text-[#800020] font-bold text-xs">{tabsData[activeTab].hours}</span>
                </div>
                <div>
                  <span className="text-[#8B5A2B] block uppercase font-bold">TIMBER USED</span>
                  <span className="text-[#2C1E15] font-semibold text-xs block truncate" title={tabsData[activeTab].timber}>
                    {tabsData[activeTab].timber}
                  </span>
                </div>
                <div>
                  <span className="text-[#8B5A2B] block uppercase font-bold">POLISH FINISH</span>
                  <span className="text-[#2C1E15] font-semibold text-xs block truncate" title={tabsData[activeTab].finish}>
                    {tabsData[activeTab].finish}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] bg-stone-100 overflow-hidden border-2 border-[#DCD0C0] rounded-2xl">
                <img 
                  src={tabsData[activeTab].image} 
                  alt={tabsData[activeTab].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE COST ESTIMATOR */}
      <section id="estimator" className="px-6 sm:px-12 py-24 bg-[#FAF7F0] border-b border-[#DCD0C0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono text-[#8B5A2B] uppercase tracking-widest block font-bold">TRADITIONAL ESTIMATOR</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase tracking-tight text-[#2C1E15]">
              WOOD & CRAFT <span className="text-[#800020]">CALCULATOR</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm">
              Calibrate your custom wood fabrication requirements. Select premium timber grades, configure unit sizes, and choose traditional ornamentation options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* CONFIGURATION PANEL */}
            <div className="lg:col-span-7 bg-white border border-[#DCD0C0] p-6 sm:p-10 space-y-8 rounded-3xl shadow-lg shadow-stone-900/5">
              
              {/* Wood Type */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase font-bold">01 // SELECT TIMBER GRADE</span>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'teak', label: 'Burma Teak', rate: 'Premium 1.5x', desc: 'Highest grade timber' },
                    { id: 'sheesham', label: 'Sheesham Wood', rate: 'Standard 1.25x', desc: 'Beautiful dark swirls' },
                    { id: 'walnut', label: 'Engineered Walnut', rate: 'Standard 1.0x', desc: 'Modern walnut core' }
                  ].map((wood) => (
                    <button
                      key={wood.id}
                      onClick={() => setWoodType(wood.id)}
                      className={`p-4 border rounded-xl text-left flex flex-col justify-between transition-all ${
                        woodType === wood.id 
                          ? 'border-[#800020] bg-[#800020]/5' 
                          : 'border-stone-200 hover:border-[#8B5A2B]'
                      }`}
                    >
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#2C1E15]">{wood.label}</span>
                      <span className="text-[9px] text-[#8B5A2B] mt-2 font-mono font-bold block">{wood.rate}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Units */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase font-bold">02 // SELECT CARPENTRY UNITS</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'mandir', label: 'Teakwood Puja Mandir', price: '₹1,20,000', desc: 'Custom structural carving & backlit paneling' },
                    { id: 'sofaSet', label: 'Hand-carved Sofa Set', price: '₹1,80,000', desc: 'Traditional wood framing (3+1+1) sofa set' },
                    { id: 'dining', label: 'Bespoke Dining Table', price: '₹95,000', desc: '6-Seater solid teak table with brass inlays' },
                    { id: 'wallPanels', label: 'Decorative Wood Panels', price: '₹65,000', desc: 'Warm walnut panels for living room accent' },
                    { id: 'wardrobe', label: 'Heritage Wood Wardrobe', price: '₹1,40,000', desc: 'Full height modular units with teakwood fronts' }
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`p-4 border rounded-xl flex items-start gap-3 cursor-pointer transition-all ${
                        selections[item.id] 
                          ? 'border-[#800020] bg-[#800020]/5' 
                          : 'border-stone-200 hover:border-[#8B5A2B]'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={selections[item.id]}
                        onChange={() => handleSelectionToggle(item.id)}
                        className="mt-1 accent-[#800020] cursor-pointer"
                      />
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider block text-[#2C1E15]">{item.label}</span>
                          <span className="text-[10px] font-mono text-[#800020] bg-[#800020]/10 px-2 py-0.5 rounded font-bold">{item.price}</span>
                        </div>
                        <span className="text-[9px] text-[#8B5A2B] block mt-1">{item.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Complexity Level */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase font-bold">03 // SELECT CARVING COMPLEXITY</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'standard', label: 'Polished Sleek', desc: 'Modern minimal style wood with clean chamfered edges' },
                    { id: 'classical', label: 'Classical Carving', desc: 'Traditional floral / geometry handcarved border reliefs' },
                    { id: 'brass-inlay', label: 'Brass Inlay Fusion', desc: 'Intricate brass wire hand-inlaid into solid teakwood grain' }
                  ].map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setComplexity(level.id)}
                      className={`p-4 border rounded-xl text-left flex flex-col justify-between transition-all ${
                        complexity === level.id 
                          ? 'border-[#800020] bg-[#800020]/5' 
                          : 'border-stone-200 hover:border-[#8B5A2B]'
                      }`}
                    >
                      <span className="text-xs font-bold font-mono uppercase tracking-wider block text-[#2C1E15]">{level.label}</span>
                      <span className="text-[9px] text-neutral-500 mt-2 leading-relaxed block">{level.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* ESTIMATE REPORT */}
            <div className="lg:col-span-5 bg-white border border-[#DCD0C0] p-6 sm:p-10 flex flex-col justify-between rounded-3xl shadow-lg shadow-stone-900/5">
              
              <div>
                <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase mb-4 font-bold">ESTIMATION SLIP</span>
                
                <h3 className="text-xl font-serif font-black uppercase tracking-wider text-[#2C1E15] mb-6">COST BREAKDOWN</h3>

                <div className="space-y-4 text-xs font-mono">
                  
                  <div className="flex justify-between border-b border-[#FAF7F0] pb-2">
                    <span className="text-neutral-500 uppercase">TIMBER GRADE</span>
                    <span className="text-[#800020] font-bold uppercase">{woodType}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#FAF7F0] pb-2">
                    <span className="text-neutral-500 uppercase">CARVING DEPTH</span>
                    <span className="text-[#800020] font-bold uppercase">{complexity}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#FAF7F0] pb-2">
                    <span className="text-neutral-500 uppercase">TIMBER FABRICATION BASE</span>
                    <span className="text-[#2C1E15] font-bold">₹{Math.round(subtotal).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#FAF7F0] pb-2">
                    <span className="text-neutral-500 uppercase">ARTISAN HANDCRAFT SURCHARGE (15%)</span>
                    <span className="text-[#2C1E15] font-bold">₹{Math.round(artisanSurcharge).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#FAF7F0] pb-2">
                    <span className="text-neutral-500 uppercase">CENTRAL GST TAX (18%)</span>
                    <span className="text-[#2C1E15] font-bold">₹{Math.round(gst).toLocaleString()}</span>
                  </div>

                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#DCD0C0]">
                <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase font-bold">ESTIMATED TOTAL</span>
                <span className="text-4xl font-serif font-black text-[#800020] block my-2">
                  ₹{Math.round(total).toLocaleString()}
                </span>
                {!hasSelections && (
                  <p className="text-[10px] text-[#8B5A2B] leading-relaxed uppercase mb-6 font-mono font-semibold">
                    *Currently showing a standard 1-room teakwood interior base. Toggle units above for custom calculation.
                  </p>
                )}
                {hasSelections && (
                  <p className="text-[10px] text-neutral-400 leading-relaxed uppercase mb-6 font-mono">
                    *Estimate includes seasoning, custom carpentry, artisan wages, tax, and delivery to Attapur.
                  </p>
                )}

                <a 
                  href="#contact"
                  onClick={() => setFormState(prev => ({ ...prev, message: `Auto Estimator Summary: ${woodType.toUpperCase()} Wood, ${complexity.toUpperCase()} Complexity. Configured items cost total estimated: ₹${Math.round(total).toLocaleString()}` }))}
                  className="w-full block text-center bg-[#800020] hover:bg-[#600018] text-[#FAF7F0] font-mono text-xs uppercase tracking-wider font-bold py-4 rounded-xl transition-all shadow-md"
                >
                  RESERVE TIMBER SLOT
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section id="testimonials" className="px-6 sm:px-12 py-24 border-b border-[#DCD0C0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-[#8B5A2B] uppercase tracking-widest block font-bold">CLIENT TESTIMONIES</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase tracking-tight mt-2 text-[#2C1E15]">
                HYDERABAD'S WARMTH <span className="text-[#800020]">IN WORDS</span>
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[#8B5A2B] uppercase font-bold">
              3 Generations of Trusted Carpentry near Attapur
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              {
                name: "Satish K. Reddy",
                location: "PVNR Expressway Road, Attapur",
                role: "Real Estate Developer",
                text: "Chary Interiors built our puja room and a 10-seater teakwood dining set. The quality of Burma teak they used is exceptional, and the hand carving has a depth that modern machines simply cannot match. Highly recommended.",
                project: "Puja Room & Dining"
              },
              {
                name: "V. Lakshmi Devi",
                location: "Hyderguda Extension, Attapur",
                role: "Heritage Art Curator",
                text: "We wanted a fusion theme for our new flat — modern minimalist layouts but traditional walnut wall paneling. Chary Interiors executed this brilliantly. The walnut fluting is smooth, and the wood oil smells incredibly fresh.",
                project: "Fusion Living Spaces"
              },
              {
                name: "M. Narsimha Chary",
                location: "Rambagh, Attapur",
                role: "Retired Central Govt Engineer",
                text: "I know carpentry well, and I checked Chary's joinery personally at their workshop. Outstanding execution of mortise and tenon joints. No loose hinges, solid wood frame kitchens, and impeccable alignment. Absolute masters.",
                project: "Modular Kitchen"
              }
            ].map((test, i) => (
              <div key={i} className="bg-white border border-[#DCD0C0] p-8 flex flex-col justify-between space-y-6 rounded-2xl shadow-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} className="fill-[#8B5A2B] text-[#8B5A2B]" />)}
                </div>
                <p className="text-neutral-700 text-xs sm:text-sm italic leading-relaxed">
                  "{test.text}"
                </p>
                <div className="border-t border-[#FAF7F0] pt-4 mt-2">
                  <span className="text-xs font-serif font-black block text-[#2C1E15]">{test.name}</span>
                  <span className="text-[10px] font-mono text-[#8B5A2B] block uppercase mt-0.5">
                    {test.role} // {test.location}
                  </span>
                  <span className="inline-block text-[9px] font-mono text-[#FAF7F0] bg-[#8B5A2B] px-2 py-0.5 mt-3 uppercase rounded font-bold">
                    {test.project}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ COLLAPSIBLE ACCORDION */}
      <section id="faq" className="px-6 sm:px-12 py-24 bg-[#FAF7F0] border-b border-[#DCD0C0]">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono text-[#8B5A2B] uppercase tracking-widest block font-bold">CRAFT SUPPORT</span>
            <h2 className="text-3xl font-serif font-black uppercase tracking-tight text-[#2C1E15]">
              TIMBER & POLISH <span className="text-[#800020]">RESOURCES</span>
            </h2>
          </div>

          <div className="border border-[#DCD0C0] bg-white rounded-2xl overflow-hidden shadow-md">
            {faqs.map((faq, i) => {
              const isOpen = !!faqOpen[i];
              return (
                <div key={i} className="border-b border-[#DCD0C0] last:border-0">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between text-left p-6 hover:bg-[#FAF7F0] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-serif font-black uppercase tracking-wide text-neutral-800">
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={16} className="text-[#800020]" /> : <ChevronDown size={16} className="text-[#800020]" />}
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-[#DCD0C0] bg-[#FAF7F0]/40">
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="px-6 sm:px-12 py-24 border-b border-[#DCD0C0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-[#8B5A2B] uppercase tracking-widest block font-bold">WORKSHOP INTAKE</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase tracking-tight text-[#2C1E15]">
              DISCUSS YOUR <span className="text-[#800020]">PROJECT</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Ready to construct a heritage wooden home or install bespoke furniture? Sri Chary and our design engineers are available at our Attapur design office. Fill out the project form, and we will contact you via phone or WhatsApp shortly.
            </p>

            <div className="space-y-4 pt-4 text-xs font-mono text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#8B5A2B] shrink-0 mt-0.5" />
                <span>Opposite Shell Fuel Station, PVNR Expressway Pillar 110, Attapur, Hyderabad, TS 500048</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#8B5A2B] shrink-0 mt-0.5" />
                <span>+91 98480 22338 / +91 40 4220 5K5K</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#8B5A2B] shrink-0 mt-0.5" />
                <span>contact@charyinteriors.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#DCD0C0] p-6 sm:p-10 rounded-3xl shadow-lg shadow-stone-900/5">
            {submitSuccess ? (
              <div className="bg-[#FAF7F0] border border-[#DCD0C0] p-8 text-center space-y-4 rounded-2xl">
                <Sparkles className="size-10 mx-auto text-[#800020]" />
                <h4 className="font-serif font-black text-sm uppercase tracking-wider text-[#2C1E15]">Timber Slot Reserved</h4>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                  Thank you for submitting your custom woodcraft requirements. Sri G. Shankara Chary has received your brief and we will reach out within 12 business hours.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="text-xs font-bold underline font-mono uppercase text-[#800020] hover:text-[#8B5A2B] mt-4 block mx-auto"
                >
                  Send Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8B5A2B] mb-2 font-bold">FULL NAME *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Satish Reddy"
                      className="w-full bg-[#FAF7F0]/40 border border-stone-200 focus:border-[#800020] rounded-xl outline-none px-4 py-3 text-xs text-[#2C1E15] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8B5A2B] mb-2 font-bold">CONTACT NUMBER *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98480 XXXXX"
                      className="w-full bg-[#FAF7F0]/40 border border-stone-200 focus:border-[#800020] rounded-xl outline-none px-4 py-3 text-xs text-[#2C1E15] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8B5A2B] mb-2 font-bold">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. satish@outlook.com"
                      className="w-full bg-[#FAF7F0]/40 border border-stone-200 focus:border-[#800020] rounded-xl outline-none px-4 py-3 text-xs text-[#2C1E15] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8B5A2B] mb-2 font-bold">SELECT WOOD GRADE PREFERENCE</label>
                    <select 
                      name="woodPreference" 
                      value={formState.woodPreference}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F0]/40 border border-stone-200 focus:border-[#800020] rounded-xl outline-none px-4 py-3 text-xs text-[#2C1E15] transition-colors font-mono font-semibold"
                    >
                      <option value="teak">Burma Teakwood (Grade A)</option>
                      <option value="sheesham">Indian Sheesham (Rosewood)</option>
                      <option value="walnut">American Walnut Wood</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#8B5A2B] mb-2 font-bold">PROJECT SCOPE & WOOD SPECIFICATION</label>
                  <textarea 
                    name="message" 
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe custom sizes, carving preferences (jalis, brass inlay, floral reliefs) and site coordinates in Hyderabad."
                    className="w-full bg-[#FAF7F0]/40 border border-stone-200 focus:border-[#800020] rounded-xl outline-none p-4 text-xs text-[#2C1E15] transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#800020] hover:bg-[#600018] disabled:bg-stone-400 text-white font-mono text-xs uppercase tracking-wider font-bold py-4.5 rounded-xl transition-all shadow-md"
                >
                  {isSubmitting ? 'TRANSMITTING PROJECT DATA TO ARTISANS...' : 'SUBMIT WORKSHOP BRIEF'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C1E15] text-[#FAF7F0]/70 px-6 sm:px-12 py-16 text-xs font-mono border-t border-[#8B5A2B]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <span className="text-white font-serif font-black text-sm uppercase tracking-wider block">CHARY INTERIORS</span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Master woodwork workshops. Seasons, designs and handcrafts heritage teakwood interiors.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">ATTAPUR WORKSHOP</span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Pillar 110, PVNR Expressway,<br />
              Attapur Main Road, Hyderabad, TS 500048
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">CHANNELS</span>
            <a href="mailto:contact@charyinteriors.com" className="text-stone-400 hover:text-white transition-colors block text-[11px]">contact@charyinteriors.com</a>
            <a href="tel:+919848022338" className="text-stone-400 hover:text-white transition-colors block text-[11px]">+91 98480 22338</a>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">WORKSHOP STATUS</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900 text-amber-500 border border-stone-800 text-[10px] uppercase font-bold rounded-full">
              <span className="size-1.5 bg-amber-500 rounded-full animate-ping"></span>
              Active Bays
            </span>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-stone-800 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-stone-500 gap-4">
          <span>© 2026 CHARY INTERIORS & FURNITURES. REGISTERED B2B PARTNER PREVIEW.</span>
          <div className="flex gap-6">
            <a href="#heritage" className="hover:text-white transition-colors">HERITAGE</a>
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#estimator" className="hover:text-white transition-colors">ESTIMATOR</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

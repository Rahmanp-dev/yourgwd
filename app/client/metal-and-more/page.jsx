"use client";

import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Settings,
  Shield,
  Activity,
  Phone,
  Mail,
  MapPin,
  Check,
  Layers,
  Wrench,
  Eye,
  Hammer,
  Star
} from 'lucide-react';

export default function MetalAndMorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('metal');
  const [faqOpen, setFaqOpen] = useState({ 0: true });

  // Configurator state
  const [selectedMaterial, setSelectedMaterial] = useState('Carbon Steel'); // Carbon Steel, Raw Concrete, Reclaimed Teak, Galvanized Iron
  const [projectSize, setProjectSize] = useState(150); // in sq.ft / running units
  const [treatments, setTreatments] = useState({
    weldExposure: true,
    rustArrest: false,
    plasterPores: true,
    chemicalAnchor: false
  });

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    material: 'Carbon Steel',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleTreatment = (key) => {
    setTreatments(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Raw Material Prices & Multipliers
  const calculateEstimate = () => {
    let baseRate = 2200; // per unit (sq ft / linear ft)
    if (selectedMaterial === 'Raw Concrete') baseRate = 2800;
    else if (selectedMaterial === 'Reclaimed Teak') baseRate = 3500;
    else if (selectedMaterial === 'Galvanized Iron') baseRate = 1800;

    let addOnCost = 0;
    if (treatments.weldExposure) addOnCost += 150 * projectSize;
    if (treatments.rustArrest) addOnCost += 300 * projectSize;
    if (treatments.plasterPores) addOnCost += 200 * projectSize;
    if (treatments.chemicalAnchor) addOnCost += 25000; // flat anchoring charge

    const totalMin = Math.round((baseRate * projectSize) + addOnCost);
    const totalMax = Math.round(((baseRate * projectSize) + addOnCost) * 1.12);

    return {
      min: totalMin.toLocaleString('en-IN'),
      max: totalMax.toLocaleString('en-IN'),
      weightEst: Math.round(projectSize * (selectedMaterial === 'Raw Concrete' ? 8 : 4.5))
    };
  };

  const estimate = calculateEstimate();

  const applyEstimateToForm = () => {
    const activeTreatments = Object.keys(treatments)
      .filter(k => treatments[k])
      .map(k => k.toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      material: selectedMaterial,
      message: `INQUIRY CODE: BRUTALIST-${selectedMaterial.substring(0, 3).toUpperCase()}-${projectSize}\nI want a custom fabrication using ${selectedMaterial} for an estimated size of ${projectSize} units. Applied treatments: [${activeTreatments || 'None'}]. Project location: Attapur, Hyderabad. Send formal quote.`
    }));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({ submitted: false, loading: false, error: 'ERROR: Required fields (Name, Email, Phone) are missing.' });
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: null });

    // Simulate industrial API transmission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        error: null
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormStatus({ submitted: false, loading: false, error: null });
    setFormData({
      name: '',
      email: '',
      phone: '',
      details: '',
      material: 'Carbon Steel',
      message: ''
    });
  };

  // Tab contents
  const services = {
    metal: {
      title: "STRUCTURAL CARBON METALWORK",
      code: "NODE_MTL_FAB",
      desc: "Floating staircases, exposed structural pillars, and heavy angle-iron partitions. We weld carbon steel profiles directly on-site using heavy duty MIG/TIG rigs. The weld seams are left visible but ground flat for physical safety.",
      specs: [
        "12mm thick structural steel steps",
        "Visible heat discoloration at welded joints",
        "Arrested rust oxide layers under satin clear coat",
        "Direct chemical masonry anchoring (Hilti-certified)"
      ],
      price: "From ₹2,200 / sq.ft",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    },
    concrete: {
      title: "MONOLITHIC POURED CONCRETE",
      code: "NODE_CONC_CAST",
      desc: "Solid countertops, structural bench wraps, and exposed wall textures. We cast concrete in custom timber frames on-site. The aggregate layout and raw bubble pores are preserved to highlight material authenticity.",
      specs: [
        "High strength glass-fiber reinforced concrete (GFRC)",
        "Raw bubble pores and exposed sand aggregates",
        "Acid-etched matte sealing treatment",
        "Integrated cellular lightweight cores for tables"
      ],
      price: "From ₹2,800 / sq.ft",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    wood: {
      title: "SCORCHED HARDWOOD ELEMENTS",
      code: "NODE_WOOD_SCORCH",
      desc: "Heavy dining table surfaces, sliding barn doors, and thick structural ceiling beams. We use reclaimed country teak and oak, charred using fire torches to carbonize the surface grain, then sealed under industrial oils.",
      specs: [
        "Reclaimed country teak and heavy structural beams",
        "Traditional fire carbonization for deep grain texture",
        "Zero-VOC natural resin protective oil seal",
        "Exposed black steel lag bolts and framing brackets"
      ],
      price: "From ₹3,500 / sq.ft",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    lighting: {
      title: "EXPOSED CONDUIT LIGHTING RIGS",
      code: "NODE_LGT_RIG",
      desc: "Industrial grade galvanized iron pipes routed directly across brick walls and bare concrete ceilings. We mount heavy ceramic sockets, raw filament bulbs, and steel protective mesh cages.",
      specs: [
        "Exposed galvanized iron conduit routes",
        "Cast-iron junction boxes and physical toggle flips",
        "High-contrast yellow wiring lines",
        "Ceramic bulb sockets with protective wire cages"
      ],
      price: "From ₹1,800 / route",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    }
  };

  const faqs = [
    {
      q: "Do you cover up weld beads and concrete cracks in your designs?",
      a: "Absolutely not. Our design philosophy is rooted in structural honesty. We grind welds flat so they are safe to touch, but we leave the metallic melt marks and heat discoloration. For concrete, we embrace natural surface pores, hairline curing lines, and color shifts. These are not defects; they are the soul of brutalism."
    },
    {
      q: "Do you fabricate and install on-site in Attapur, Hyderabad?",
      a: "Yes. Our fabrication workshop is located close to Attapur. We handle the physical structural installation, welding, concrete pouring, and timber charring directly on-site across Hyderabad, including Attapur, Rajendranagar, and Mehdipatnam."
    },
    {
      q: "How heavy are monolithic concrete countertops and can standard slabs handle them?",
      a: "Solid concrete is heavy (~2.4 tons per cubic meter). For standard apartment units where structural floor loads are limited, we cast thin 20mm GFRC shells wrapped around structural cellular honeycomb cores. This yields the identical monolithic block appearance at 70% less weight."
    },
    {
      q: "How is the raw metal treated to prevent aggressive rust?",
      a: "We clean the raw steel to stop loose scale, apply Owatrol rust-inhibiting penetrating polymers to freeze the metal at its current aesthetic state, and seal it with multiple coats of industrial-grade matte polyurethane. It will not rub off on clothes or rust further."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen selection:bg-black selection:text-[#F97316] font-sans pb-16">
      
      {/* Top Banner Ribbon */}
      <div className="w-full bg-[#FACC15] text-black text-center py-2.5 px-4 text-xs font-black uppercase border-b-4 border-black tracking-widest relative z-50">
        ⚠️ INDUSTRIAL SPECIFICATION PREVIEW // DESIGN SYSTEM: RAW BRUTALISM // FABRICATED FOR METAL & MORE INTERIORS
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#FAF9F6] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Group */}
          <div className="flex items-center gap-3 border-r-4 border-black pr-8 py-1.5">
            <div className="w-10 h-10 bg-[#F97316] text-black font-black text-base flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              M&M
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm uppercase tracking-tighter text-black">METAL & MORE</span>
              <span className="text-[10px] text-[#F97316] uppercase tracking-widest font-black block -mt-1 font-mono">ATTAPUR HUB</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs font-extrabold">
            <a href="#about" className="hover:text-[#F97316] hover:underline decoration-2 transition-all">/ABOUT</a>
            <a href="#showcase" className="hover:text-[#F97316] hover:underline decoration-2 transition-all">/CATALOGUE</a>
            <a href="#estimator" className="hover:text-[#F97316] hover:underline decoration-2 transition-all">/ESTIMATOR</a>
            <a href="#faqs" className="hover:text-[#F97316] hover:underline decoration-2 transition-all">/FAQS</a>
          </div>

          {/* Nav CTA */}
          <div className="hidden md:block">
            <a
              href="#estimator"
              className="bg-[#FACC15] text-black font-black text-xs uppercase px-6 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all block"
            >
              RUN_CALCULATOR
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-2 border-black bg-black text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F6] border-t-2 border-black px-6 py-6 space-y-4 font-mono text-xs font-extrabold">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-black hover:text-[#F97316]">/ABOUT</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="block text-black hover:text-[#F97316]">/CATALOGUE</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-black hover:text-[#F97316]">/ESTIMATOR</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block text-black hover:text-[#F97316]">/FAQS</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#F97316] text-black py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              WELD_INQUIRY
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#F97316] text-black font-black text-xs uppercase px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono">
              ⚠️ DESIGN PRINCIPLE: MATERIAL HONESTY
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none text-black">
              RAW IRON & CONCRETE INTERIORS CAST IN <span className="bg-[#FAF9F6] text-black underline decoration-[#FACC15] decoration-8">ATTAPUR</span>
            </h1>

            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              No veneer skins. No faux plastics. We design brutalist, structural living environments for homes in Hyderabad using heavy carbon steel channels, poured concrete forms, and flame-scorched country teak. Hand-welded and direct-cast.
            </p>

            <div className="flex flex-wrap gap-4 font-mono text-xs font-black pt-4">
              <a
                href="#estimator"
                className="bg-[#F97316] text-black px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-2"
              >
                /RUN_ESTIMATOR <ArrowRight size={16} />
              </a>
              <a
                href="#showcase"
                className="bg-black text-white px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                /VIEW_CATALOGUE
              </a>
            </div>

            {/* Industrial details */}
            <div className="grid grid-cols-3 gap-4 border-4 border-black p-4 bg-[#FAF9F6] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono text-xs mt-12 max-w-lg">
              <div>
                <span className="block font-black text-lg text-black">45 MPa</span>
                <span className="block text-[10px] text-zinc-500 uppercase font-bold">Concrete Strength</span>
              </div>
              <div className="border-x-2 border-black px-4">
                <span className="block font-black text-lg text-[#F97316]">ASTM A36</span>
                <span className="block text-[10px] text-zinc-500 uppercase font-bold">Steel Grade</span>
              </div>
              <div className="pl-4">
                <span className="block font-black text-lg text-black">100%</span>
                <span className="block text-[10px] text-zinc-500 uppercase font-bold">On-Site Weld</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-black bg-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
                alt="Brutalist interior styling"
                className="w-full h-[320px] sm:h-[400px] object-cover border-2 border-black filter grayscale contrast-125"
              />
              <div className="mt-3 flex justify-between items-center text-xs font-mono text-white font-extrabold">
                <span>PLATE: ATTAPUR_SITE_GRID_01.LSD</span>
                <span className="text-[#FACC15]">LOAD_TEST_OK</span>
              </div>
            </div>
            
            {/* Absolute badge */}
            <div className="absolute -top-6 -right-6 bg-[#FACC15] text-black font-mono text-xs font-black px-4 py-3 border-2 border-black rotate-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden sm:block">
              100% RAW BUILD
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white border-y-4 border-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-[#F97316] font-bold block">/STRUCTURAL_STANCE</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase">We Hate Plastic Veneers</h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Most interior designers hide cheap particle boards behind glossy sheets of laminate. We don't. We work with raw materials in their native states. Our structures are built to expose the weight, the grain, and the tool marks.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Based close to Attapur, Hyderabad, we run a custom metallurgic and woodworking yard equipped to bend heavy channel iron, pour concrete sections, and torch hardwood. We bring our fabrication rigs directly to your flat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#1C1C1C] border-2 border-zinc-700 p-4 shadow-[4px_4px_0px_0px_#F97316]">
                <Hammer className="text-[#F97316] mb-3" size={24} />
                <span className="font-black block text-white uppercase">CUSTOM WELDED</span>
                <span className="text-zinc-500 block mt-1 font-sans">No pre-fab joints. Built to fit your exact slab margins.</span>
              </div>
              <div className="bg-[#1C1C1C] border-2 border-zinc-700 p-4 shadow-[4px_4px_0px_0px_#FACC15]">
                <Wrench className="text-[#FACC15] mb-3" size={24} />
                <span className="font-black block text-white uppercase">CAST SITE CONCRETE</span>
                <span className="text-zinc-500 block mt-1 font-sans">Poured directly on-site to build monolithic counters.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Showcase with Active Tabs */}
      <section id="showcase" className="py-24 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#F97316] tracking-[0.3em] uppercase block mb-3">/MATERIAL_SPECIFICATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-black uppercase">Exposed Build Catalogue</h2>
            <p className="text-zinc-600 mt-4 font-sans">
              Choose a design medium to inspect our raw components, weld profiles, and structural pricing tiers.
            </p>
          </div>

          {/* Tabs Nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 font-mono text-xs">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 border-2 font-black transition-all uppercase flex items-center gap-2 ${
                  activeTab === key
                    ? 'bg-[#F97316] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[1px] translate-y-[1px]'
                    : 'bg-[#FAF9F6] text-zinc-600 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]'
                }`}
              >
                {key === 'metal' && <Hammer size={14} />}
                {key === 'concrete' && <Layers size={14} />}
                {key === 'wood' && <Wrench size={14} />}
                {key === 'lighting' && <Settings size={14} />}
                {key.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border-4 border-black p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] items-center">
            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="w-full h-[280px] sm:h-[350px] object-cover border-4 border-black filter grayscale"
              />
              <div className="absolute bottom-4 left-4 bg-black text-white font-mono text-xs font-black px-4 py-2 border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {services[activeTab].price}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center font-mono text-xs text-zinc-500">
                <span>CODE: {services[activeTab].code}</span>
                <span className="bg-[#FACC15] text-black px-2 py-0.5 border border-black font-extrabold uppercase">STARK SPEC</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">{services[activeTab].title}</h3>
              
              <p className="text-zinc-700 text-sm leading-relaxed font-sans">
                {services[activeTab].desc}
              </p>

              <div className="pt-4 border-t-2 border-dashed border-zinc-200">
                <span className="text-xs font-mono text-black font-black uppercase tracking-wider block mb-2">FABRICATION BLUEPRINT RULES:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  {services[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-700">
                      <span className="text-[#F97316] font-bold"><Check size={14} className="stroke-[3]" /></span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      details: `Inquiry on: ${services[activeTab].title}. Please send blueprints.`
                    }));
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FACC15] text-black border-2 border-black font-black px-6 py-3 text-xs font-mono uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
                >
                  ACQUIRE_BLUEPRINT_SCHEMATICS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#F97316] tracking-[0.3em] uppercase block mb-3">/ESTIMATION_CALCULATOR</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase">Material Load & Build Cost Estimator</h2>
          <p className="text-zinc-600 mt-4 font-sans">
            Input your dimensions and material properties to generate an industrial fabrication invoice breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-8">
            {/* Material selector */}
            <div>
              <label className="text-xs font-mono text-black font-black uppercase block mb-3">01. Medium Material Selection</label>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs font-bold">
                {['Carbon Steel', 'Raw Concrete', 'Reclaimed Teak', 'Galvanized Iron'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`py-3.5 px-4 rounded border-2 border-black text-left transition-all ${
                      selectedMaterial === mat
                        ? 'bg-[#FACC15] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-[#FAF9F6] text-zinc-600 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[0.5px] hover:translate-y-[0.5px]'
                    }`}
                  >
                    {mat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-mono text-black font-black uppercase">02. Estimation Scale (Units: Sq.Ft)</label>
                <span className="bg-black text-white font-mono text-xs font-black px-2 py-0.5 border border-black shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,1)]">
                  {projectSize} SQ.FT
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="25"
                value={projectSize}
                onChange={(e) => setProjectSize(parseInt(e.target.value))}
                className="w-full h-3 bg-zinc-200 border-2 border-black appearance-none cursor-pointer accent-black focus:outline-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                <span>MIN: 50 SQ.FT</span>
                <span>MAX: 800 SQ.FT</span>
              </div>
            </div>

            {/* Treatments */}
            <div>
              <label className="text-xs font-mono text-black font-black uppercase block mb-3">03. Treatment Options (Checkbox Nodes)</label>
              <div className="space-y-3 font-mono text-xs font-bold">
                {[
                  { key: 'weldExposure', label: 'EXPOSE WELD SEAMS (+₹150/unit)', desc: 'TIG joints ground flush but metal heat color rings preserved.' },
                  { key: 'rustArrest', label: 'CHEMICAL RUST ARREST & SEAL (+₹300/unit)', desc: 'Stabilizes oxide layer with Owatrol oil, sealed with matte clear coat.' },
                  { key: 'plasterPores', label: 'CONCRETE SURFACE AGGREGATE EXPOSURE (+₹200/unit)', desc: 'Acid washes plaster crust to reveal sand textures and air cavities.' },
                  { key: 'chemicalAnchor', label: 'CHEMICAL EXPANSION ANCHORING (+₹25,000 flat)', desc: 'Heavy masonry anchor bolts for load-bearing staircase fittings.' }
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleTreatment(item.key)}
                    className={`p-4 border-2 border-black cursor-pointer transition-all flex justify-between items-center ${
                      treatments[item.key]
                        ? 'bg-[#F97316]/10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-[#FAF9F6] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${
                        treatments[item.key] ? 'bg-[#F97316]' : 'bg-white'
                      }`}>
                        {treatments[item.key] && <Check size={14} strokeWidth={3} className="text-black" />}
                      </div>
                      <div className="pr-4">
                        <span className="block text-black">{item.label}</span>
                        <span className="block text-[10px] text-zinc-500 font-normal font-sans leading-tight mt-0.5">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Invoice */}
          <div className="lg:col-span-5 bg-black text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative space-y-6">
            <div className="text-center pb-6 border-b-2 border-dashed border-zinc-700">
              <span className="text-[10px] font-mono text-[#F97316] font-bold block uppercase tracking-widest">⚠️ INVOICE_ESTIMATE_RANGE</span>
              <div className="text-3xl sm:text-4xl font-mono font-black text-white mt-3">
                ₹{estimate.min} - ₹{estimate.max}
              </div>
              <span className="text-[10px] text-zinc-500 font-mono block mt-1 uppercase">Attapur Project Index V4.9 // RAW RATES</span>
            </div>

            <div className="space-y-4 font-mono text-xs border-b-2 border-dashed border-zinc-700 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">MATERIAL NODE:</span>
                <span className="text-[#FACC15] font-black">{selectedMaterial.toUpperCase()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">ESTIMATED SCALE:</span>
                <span className="text-white font-black">{projectSize} UNITS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">ESTIMATED COMPONENT WEIGHT:</span>
                <span className="text-white font-black">~{estimate.weightEst} KG</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">ACTIVE TREATMENTS:</span>
                <span className="text-white font-black">
                  {Object.keys(treatments).filter(k => treatments[k]).length} ACTIVE
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={applyEstimateToForm}
                className="w-full bg-[#FACC15] text-black font-black py-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all text-xs font-mono uppercase block"
              >
                /SYNC_ESTIMATE_TO_FORM
              </button>
            </div>

            <p className="text-[10px] text-zinc-500 font-sans leading-tight">
              *Weight estimates are computational. Final load capacity checks are executed on-site using concrete testers prior to steel column welding.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t-4 border-black">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#F97316] tracking-[0.3em] uppercase block mb-3">/WELD_AND_POUR_REVIEWS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase">STRUCTURAL FEEDBACK</h2>
          <p className="text-zinc-600 mt-4 font-sans">
            Physical reviews verified by property owners who decommissioned modular wood boards for raw structural concrete/metal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The steel hanging staircase is absolute perfection. Weld joints are ground flat but the beautiful raw TIG weld lines remain visible. Heavy, rock solid, doesn't shake a millimeter.",
              client: "Karthik Reddy - Happy Valley Homes, Attapur",
              rating: 5,
              scope: "Suspended Staircase & Iron Mesh"
            },
            {
              quote: "Our cast concrete kitchen bar is a massive chunk of industrial design. We love the natural air bubble pores and raw concrete variations. It stands out completely.",
              client: "Niharika M. - Hyderguda Road, Attapur",
              rating: 5,
              scope: "Exposed Concrete Bar Counter"
            },
            {
              quote: "Outstanding metalwork. They bolted a massive reclaimed wood table directly into our masonry wall with raw carbon brackets. Heavy industrial look exactly as wanted.",
              client: "Syed Ahmed - Pillar 140 Area, Attapur",
              rating: 5,
              scope: "Charred Wood Bench & Conduit Lighting"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border-4 border-black p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#F97316]">
                  {[...Array(item.rating)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} className="fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <p className="text-zinc-800 text-sm italic leading-relaxed mb-6 font-sans">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t-2 border-dashed border-zinc-200 font-mono text-xs">
                <span className="block text-black font-black uppercase">{item.client}</span>
                <span className="text-zinc-500 uppercase block mt-1">FABRICATION_SCOPE: {item.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collapsible FAQs */}
      <section id="faqs" className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#F97316] tracking-[0.3em] uppercase block mb-3">/FAQS_RESOLVED</span>
            <h2 className="text-3xl font-black text-white uppercase">MATERIAL & WELD FAQS</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] border-2 border-zinc-700 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  aria-expanded={faqOpen[index] ? 'true' : 'false'}
                >
                  <span className="text-sm sm:text-base font-extrabold text-white pr-4 font-mono uppercase tracking-tight">/ {faq.q}</span>
                  <span className="text-[#F97316]">
                    {faqOpen[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {faqOpen[index] && (
                  <div className="px-6 pb-5 border-t border-zinc-700/50 pt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
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
        <div className="bg-white border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#F97316] tracking-[0.2em] uppercase block mb-2">/CONNECT_FABRICATOR</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-black">SUBMIT WELD INQUIRY</h2>
            <p className="text-zinc-600 mt-2 text-sm font-sans">
              Enter your structural specs. We will review dimensions, calculate expected load metrics, and schedule an on-site testing appointment in Attapur.
            </p>
          </div>

          {formStatus.submitted ? (
            <div className="bg-[#FAF9F6] border-4 border-[#F97316] p-8 text-center space-y-4 font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 rounded-full bg-[#F97316] text-black flex items-center justify-center mx-auto border-2 border-black">
                <Check size={32} className="stroke-[3]" />
              </div>
              <h3 className="text-xl font-black text-black uppercase tracking-wider">SPECIFICATION TRANSMITTED</h3>
              <p className="text-zinc-700 font-sans text-sm max-w-md mx-auto">
                Weld inquiry data logged. Our shop coordinator will contact you shortly to review load calculations and inspect the concrete wall brackets at your Attapur site.
              </p>
              <button
                onClick={resetForm}
                className="mt-6 bg-black text-white font-black px-6 py-2 border-2 border-black text-xs uppercase"
              >
                /TRANSMIT_NEW_FORM
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
              {formStatus.error && (
                <div className="p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded flex items-center gap-3 font-bold">
                  <span>{formStatus.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] text-black font-black uppercase block mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Anand Kumar"
                    className="w-full bg-[#FAF9F6] border-2 border-black rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:bg-white font-sans"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-black font-black uppercase block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. anand@gmail.com"
                    className="w-full bg-[#FAF9F6] border-2 border-black rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:bg-white font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] text-black font-black uppercase block mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 99887 76655"
                    className="w-full bg-[#FAF9F6] border-2 border-black rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:bg-white font-sans"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-zinc-500 font-black uppercase block mb-2">Preferred Base Material</label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF9F6] border-2 border-black rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:bg-white"
                  >
                    {['Carbon Steel', 'Raw Concrete', 'Reclaimed Teak', 'Galvanized Iron'].map(val => (
                      <option key={val} value={val}>{val.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-black font-black uppercase block mb-2">Detailed Message / Custom Fabrication Specifications *</label>
                <textarea
                  rows={4}
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Provide estimated dimensions and structural parameters of the site in Attapur..."
                  className="w-full bg-[#FAF9F6] border-2 border-black rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:bg-white font-sans"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-[#F97316] text-black font-black py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-wider"
                >
                  {formStatus.loading ? 'TRANSMITTING_DATA...' : 'TRANSMIT_WELD_INQUIRY'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-black py-16 px-6 font-mono text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F97316] text-black font-black flex items-center justify-center border border-white">
                M&M
              </div>
              <span className="font-extrabold text-sm tracking-wider uppercase">METAL & MORE</span>
            </div>
            <p className="text-zinc-500 font-sans leading-relaxed">
              Industrial grade spatial fabricators building exposed iron, cast concrete and scorched timber interiors. Raw design systems for custom Hyderabad residencies.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">/PHYSICAL_YARD</span>
            <div className="space-y-2 text-zinc-500 font-sans">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                <span>
                  Metal & More Workshop Yard,<br />
                  Opposite Metro Cash & Carry, Ring Road,<br />
                  Attapur, Hyderabad, Telangana - 500048
                </span>
              </div>
              <div className="pt-2 font-mono">
                COORD: 17.3688° N, 78.4310° E
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">/TRANSMISSION_NODES</span>
            <div className="space-y-2 text-zinc-500 font-sans">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#F97316]" />
                <span>+91 99488 55400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#F97316]" />
                <span>shop@metalandmore.in</span>
              </div>
              <div className="pt-2 font-mono text-[10px] text-zinc-600">
                YARD COMM LINK: ACTIVE (08:00 - 18:00)
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="space-y-4">
            <span className="text-white font-bold uppercase tracking-wider block">/YARD_ATTESTATION</span>
            <p className="text-zinc-500 font-sans leading-relaxed">
              All welding operations comply with AWS structural codes. Cast concrete is cured under wet burlap wraps for 7 days minimum to reach full strength rating.
            </p>
            <div className="text-[10px] text-[#F97316] font-mono">
              © 2026 METAL & MORE. ALL SYSTEM RIGHTS CLAMPED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

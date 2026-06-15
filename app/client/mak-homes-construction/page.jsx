"use client";
import React, { useState } from 'react';
import { 
  Hammer, 
  Wrench, 
  Construction, 
  Compass, 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert, 
  Phone, 
  Mail, 
  MapPin, 
  AlertTriangle,
  HardHat,
  Cpu,
  Info,
  Maximize2
} from 'lucide-react';

export default function MakHomesPage() {
  const [activePortfolioTab, setActivePortfolioTab] = useState('lofts');
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Project Estimator States
  const [projectType, setProjectType] = useState('villa');
  const [areaSqFt, setAreaSqFt] = useState(2500);
  const [steelSpec, setSteelSpec] = useState('heavy-ismb');
  const [finishLevel, setFinishLevel] = useState('raw-industrial');

  // Form States
  const [formState, setFormState] = useState({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    plotLocation: '',
    projectScope: 'new-build',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Estimator Calculations
  const calculateEstimates = () => {
    let ratePerSqFt = 1800;
    if (projectType === 'villa') ratePerSqFt = 2400;
    else if (projectType === 'penthouse') ratePerSqFt = 2800;
    else if (projectType === 'loft') ratePerSqFt = 1900;
    else if (projectType === 'renovation') ratePerSqFt = 1500;

    let steelMultiplier = 1.0;
    if (steelSpec === 'heavy-ismb') steelMultiplier = 1.25;
    else if (steelSpec === 'hybrid-rebar') steelMultiplier = 1.15;
    else if (steelSpec === 'ms-frame') steelMultiplier = 1.05;

    let finishCostPerSqFt = 0;
    if (finishLevel === 'raw-industrial') finishCostPerSqFt = 300;
    else if (finishLevel === 'polished-concrete') finishCostPerSqFt = 500;
    else if (finishLevel === 'exposed-metalwork') finishCostPerSqFt = 450;

    const baseCost = (ratePerSqFt * areaSqFt * steelMultiplier) + (finishCostPerSqFt * areaSqFt);
    const concreteVolume = Math.round(areaSqFt * 0.0929 * 0.15); // Cubic meters approximation
    const steelWeight = Math.round((areaSqFt * 4.5) / 100) / 10; // Tons approximation

    return {
      price: Math.round(baseCost),
      concreteVolume,
      steelWeight,
      daysToShell: Math.round(areaSqFt * 0.08)
    };
  };

  const estimates = calculateEstimates();

  const portfolioData = {
    lofts: {
      title: "STRUCTURAL CONCRETE LOFTS",
      tagline: "Exposed Beams & Architectural Plaster",
      description: "Complete double-height residential structures built using formwork concrete walls, floating steel mezzanines, and high-performance epoxy-coated foundation slabs. No hidden drywall, only raw load-bearing honesty.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      stats: {
        concreteClass: "M35 Grade",
        steelRating: "FE 550D TMT",
        curingTime: "28 Days Strict",
        loadToler: "12.5 kN/Sqm"
      }
    },
    residences: {
      title: "BRUTALIST VILLA STRUCTURES",
      tagline: "Heavy Metal Framing meets Cantilevered Slabs",
      description: "Custom multi-generational villas featuring dramatic 4.5-meter concrete cantilevers, open-flange steel columns, and floor-to-ceiling tempered glass curtain walls engineered specifically for local Hyderabad soil conditions.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      stats: {
        concreteClass: "M40 Self-Compacting",
        steelRating: "ISMB 300 H-Beams",
        curingTime: "30 Days Moist",
        loadToler: "18.0 kN/Sqm"
      }
    },
    steel: {
      title: "HEAVY ARCHITECTURAL METALWORK",
      tagline: "Hand-Welded Structural Steel Framing",
      description: "Custom architectural steel trusses, black steel staircases with floating checkered plate threads, heavy channel railings, and custom structural steel roofs designed and welded directly on-site in Attapur.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      stats: {
        concreteClass: "N/A (Steel Connection)",
        steelRating: "ASTM A36 Carbon Steel",
        curingTime: "Zero (Welded Assembly)",
        loadToler: "22.0 kN/Sqm"
      }
    },
    concrete: {
      title: "POLISHED SILICA FLOORS",
      tagline: "Monolithic Quartz-Infused Floor Plates",
      description: "Seamless power-troweled concrete floors infused with natural green quartz aggregates and lithium silicate densifiers. Ground up to 3000 grit for a mirror-like finish that is dust-proof and indestructible.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      stats: {
        concreteClass: "M30 Fiber-Reinforced",
        steelRating: "6mm Welded Wire Mesh",
        curingTime: "14 Days Wet Curing",
        loadToler: "15.0 kN/Sqm"
      }
    }
  };

  const faqs = [
    {
      q: "WHAT STRUCTURAL STEEL STANDARDS DO YOU ADHERE TO?",
      a: "All our steel fabrication is carried out by certified structural welders following IS 800 (Indian Standard Code of Practice for General Construction in Steel). We utilize premium TATA Tiscon FE 550D reinforcement rebars and structural grade ISMB channel sections."
    },
    {
      q: "IS BRUTALIST CONCRETE SUITABLE FOR HYDERABAD CLIMATE?",
      a: "Yes. Raw concrete has high thermal mass, meaning it absorbs daytime heat and releases it slowly during the cooler Hyderabad nights. We apply high-performance hydrophobic clear sealers (silane-siloxane composites) to prevent water penetration during heavy monsoon downpours."
    },
    {
      q: "HOW DO YOU ENSURE SMOOTH EXPOSED CONCRETE WALLS?",
      a: "We use marine-grade phenolic film-faced plywood formwork reinforced with heavy steel walers. We vibrating-compact the concrete at close intervals and inject custom air-release admixtures to ensure zero honeycombing or surface voids."
    },
    {
      q: "CAN YOU CONSTRUCT A STEEL PENTHOUSE ON MY EXISTING BUILDING?",
      a: "Subject to structural audit. We conduct core-drilling tests and load analysis of your existing columns in Attapur. If certified, we anchor heavy base plates directly using Hilti chemical anchors and construct lightweight structural steel frames that do not overload the primary structure."
    }
  ];

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-black font-mono selection:bg-[#FF7F50] selection:text-black antialiased p-4 sm:p-6 lg:p-8">
      
      {/* HEADER & NAV */}
      <header className="max-w-7xl mx-auto bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] mb-8 sticky top-4 z-50">
        <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <div className="bg-[#FF7F50] border-2 border-black p-2 shadow-[2px_2px_0px_0px_#000000]">
              <HardHat size={24} className="text-black" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter uppercase block">MAK HOMES</span>
              <span className="text-[9px] uppercase tracking-widest text-[#FF7F50] font-bold block -mt-1">BRUTALIST CONSTRUCTORS</span>
            </div>
          </a>

          <nav className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-wider justify-center">
            <a href="#services" className="hover:bg-[#FF7F50] hover:text-black transition-colors px-3 py-1.5 border-2 border-transparent hover:border-black">SERVICES</a>
            <a href="#portfolio" className="hover:bg-[#FF7F50] hover:text-black transition-colors px-3 py-1.5 border-2 border-transparent hover:border-black">PORTFOLIO</a>
            <a href="#estimator" className="hover:bg-[#FF7F50] hover:text-black transition-colors px-3 py-1.5 border-2 border-transparent hover:border-black">ESTIMATOR</a>
            <a href="#faq" className="hover:bg-[#FF7F50] hover:text-black transition-colors px-3 py-1.5 border-2 border-transparent hover:border-black">FAQ</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-[#FF7F50] hover:bg-[#ff6933] text-black font-black uppercase text-xs tracking-wider border-2 border-black px-6 py-3 shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            ORDER BUILD AUDIT
          </a>
        </div>
      </header>

      {/* BRUTALIST HERO */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 bg-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FF7F50] text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-widest">
              <Construction size={14} className="animate-spin-slow" />
              ATTAPUR STRUCTURAL UNIT // ACTIVE
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tighter">
              RAW MATERIAL.<br />
              <span className="text-[#FF7F50]">UNCOMPROMISING</span><br />
              RESIDENTIAL BUILDS.
            </h1>
            
            <p className="text-sm font-semibold text-gray-700 leading-relaxed border-l-4 border-black pl-4">
              We design and construct industrial-chic structures and exposed concrete homes. Heavy structural steel framing, thick poured concrete slabs, and bespoke custom metal fabrication. Engineered to last centuries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t-2 border-black">
            <a 
              href="#estimator" 
              className="bg-[#FF7F50] text-black font-black uppercase text-center py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              RUN BUILD ESTIMATOR
            </a>
            <a 
              href="#contact" 
              className="bg-black text-white hover:bg-neutral-800 font-black uppercase text-center py-4 border-2 border-black shadow-[4px_4px_0px_0px_#FF7F50] hover:shadow-[1px_1px_0px_0px_#FF7F50] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              BOOK SITE MEASURE
            </a>
          </div>
        </div>

        {/* Right Side Visual Block */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-8">
          
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] relative overflow-hidden group">
            <div className="aspect-[4/3] border-4 border-black bg-neutral-200 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" 
                alt="Exposed Structural Steel Frame House" 
                className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2 bg-black text-[#FF7F50] text-[9px] font-bold px-2 py-1 uppercase border border-black">
                VILLA SHELL PROJECT - ATTAPUR
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-xs font-black">
              <span>METRIC SPEC: ISMB-300 BEAMS</span>
              <span className="text-[#FF7F50]">FE 550D REBAR</span>
            </div>
          </div>

          <div className="bg-[#FF7F50] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] text-black flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="text-xs font-black uppercase tracking-wider">PROJECT METADATA // STATUS</span>
              <ShieldAlert size={20} className="text-black" />
            </div>
            
            <div className="my-4 space-y-2 text-xs font-bold">
              <div>&gt; STRUCTURAL STEEL: FE-550D TMT REINFORCEMENT</div>
              <div>&gt; CONCRETE SPECIFICATION: READY-MIX M35 GRADE</div>
              <div>&gt; SOIL CAPACITY: TESTED AT 180 KN/M2 AT SITE</div>
              <div>&gt; ESTIMATED LIFESPAN: 200+ YEARS STRUCTURAL FRAME</div>
            </div>

            <div className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 text-center border-2 border-black">
              COMPLYING WITH IS 456-2000 CODE CONCRETE
            </div>
          </div>

        </div>

      </section>

      {/* HARDCORE BUILD SERVICES */}
      <section id="services" className="max-w-7xl mx-auto bg-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] mb-12">
        <div className="border-b-4 border-black pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#FF7F50]">&gt; CORE EXECUTION ARCHITECTURE</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">STRUCTURAL ENGINEERING CAPABILITIES</h2>
          </div>
          <div className="bg-black text-[#FF7F50] px-4 py-2 font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#FF7F50]">
            NO SLOPPY FINISHES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="border-4 border-black p-6 bg-[#E5E5E5] relative shadow-[4px_4px_0px_0px_#000000]">
            <div className="size-10 bg-black text-white flex items-center justify-center font-bold mb-4 border-2 border-black">
              01
            </div>
            <h3 className="text-lg font-black uppercase mb-2">Exposed Concrete Formwork</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              We cast board-formed concrete load-bearing walls and ceiling plates on site. Using heavy shuttering ply and precise vibration patterns to deliver clean, unplastered brutalist interior architecture.
            </p>
          </div>

          {/* Service 2 */}
          <div className="border-4 border-black p-6 bg-[#E5E5E5] relative shadow-[4px_4px_0px_0px_#000000]">
            <div className="size-10 bg-black text-white flex items-center justify-center font-bold mb-4 border-2 border-black">
              02
            </div>
            <h3 className="text-lg font-black uppercase mb-2">Structural Steel Trusses</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              Heavy structural H-beams, structural steel channels, and custom roof trusses designed to support massive spans. Prefabricated components bolted together on site with high tensile bolts.
            </p>
          </div>

          {/* Service 3 */}
          <div className="border-4 border-black p-6 bg-[#E5E5E5] relative shadow-[4px_4px_0px_0px_#000000]">
            <div className="size-10 bg-black text-white flex items-center justify-center font-bold mb-4 border-2 border-black">
              03
            </div>
            <h3 className="text-lg font-black uppercase mb-2">Indestructible Polished Floors</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              Power-troweled monolithic quartz-infused concrete floor plates ground down to a satin reflection. Dust-proof, scratch-proof, and designed to look better as it ages.
            </p>
          </div>

        </div>
      </section>

      {/* CLIENT PORTFOLIOS (TABBED PORTFOLIO) */}
      <section id="portfolio" className="max-w-7xl mx-auto bg-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] mb-12">
        <div className="border-b-4 border-black pb-6 mb-8 text-center sm:text-left">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7F50]">&gt; REALIZED BLUEPRINTS</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">CLIENT PORTFOLIOS & TECHNICAL VERIFICATION</h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-black pb-4 justify-center sm:justify-start">
          {[
            { id: 'lofts', label: 'CONCRETE LOFTS' },
            { id: 'residences', label: 'BRUTALIST VILLAS' },
            { id: 'steel', label: 'STRUCTURAL STEEL' },
            { id: 'concrete', label: 'POLISHED FLOORS' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePortfolioTab(tab.id)}
              className={`px-4 py-2 border-2 border-black text-xs font-black transition-all ${
                activePortfolioTab === tab.id
                  ? 'bg-black text-[#FF7F50] shadow-[2px_2px_0px_0px_#FF7F50] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-[#E5E5E5] text-black hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col justify-between border-4 border-black p-6 bg-[#E5E5E5] relative shadow-[4px_4px_0px_0px_#000000]">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-[#FF7F50] tracking-widest block">
                // {portfolioData[activePortfolioTab].tagline}
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-black">
                {portfolioData[activePortfolioTab].title}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                {portfolioData[activePortfolioTab].description}
              </p>
            </div>

            <div className="border-t-2 border-black pt-4 mt-6">
              <span className="text-[10px] font-black uppercase text-gray-500 block mb-2">ENGINEERING TOLERANCES</span>
              <div className="grid grid-cols-2 gap-3 text-[11px] font-bold">
                <div>
                  <span className="block text-gray-500">Carcass Spec:</span>
                  <span className="block">{portfolioData[activePortfolioTab].stats.concreteClass}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Steel Class:</span>
                  <span className="block">{portfolioData[activePortfolioTab].stats.steelRating}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Curing Cycle:</span>
                  <span className="block">{portfolioData[activePortfolioTab].stats.curingTime}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Load Toler:</span>
                  <span className="block text-emerald-700">{portfolioData[activePortfolioTab].stats.loadToler}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 border-4 border-black overflow-hidden relative shadow-[4px_4px_0px_0px_#000000]">
            <img 
              src={portfolioData[activePortfolioTab].image} 
              alt={portfolioData[activePortfolioTab].title} 
              className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </section>

      {/* INTERACTIVE PROJECT ESTIMATOR */}
      <section id="estimator" className="max-w-7xl mx-auto bg-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] mb-12">
        
        <div className="border-b-4 border-black pb-6 mb-8 text-center sm:text-left">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7F50]">&gt; REAL-TIME CALCULATOR v2.4</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">INTERACTIVE STRUCTURAL ESTIMATOR</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Project Type */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider">// 1. PROJECT CATEGORY</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'villa', label: 'CUSTOM BRUTALIST VILLA' },
                  { id: 'penthouse', label: 'STEEL-FRAME PENTHOUSE' },
                  { id: 'loft', label: 'CONCRETE LOFT INTERIOR' },
                  { id: 'renovation', label: 'STRUCTURAL RENOVATION' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-3 border-2 border-black text-xs font-black text-left transition-all ${
                      projectType === type.id
                        ? 'bg-black text-[#FF7F50] shadow-[2px_2px_0px_0px_#FF7F50] translate-x-[-2px] translate-y-[-2px]'
                        : 'bg-[#E5E5E5] text-black hover:bg-neutral-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-black">
                <span>// 2. BUILT-UP AREA</span>
                <span className="text-[#FF7F50] font-black">{areaSqFt.toLocaleString()} SQ FT</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="8000" 
                step="250"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(parseInt(e.target.value))}
                className="w-full accent-black h-2 bg-[#E5E5E5] border-2 border-black rounded-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-bold text-gray-500">
                <span>1,000 SQ FT</span>
                <span>4,000 SQ FT</span>
                <span>8,000 SQ FT</span>
              </div>
            </div>

            {/* Steel Spec */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider">// 3. STEEL REINFORCEMENT SPECIFICATION</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'heavy-ismb', name: 'ISMB H-BEAMS', desc: 'Heavy structural frame' },
                  { id: 'hybrid-rebar', name: 'FE 550D TMT REBAR', desc: 'Monolithic concrete frame' },
                  { id: 'ms-frame', name: 'LIGHT MS FRAME', desc: 'Secondary partitions frame' }
                ].map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setSteelSpec(spec.id)}
                    className={`p-3 border-2 border-black text-left text-xs font-black transition-all ${
                      steelSpec === spec.id
                        ? 'bg-black text-[#FF7F50] shadow-[2px_2px_0px_0px_#FF7F50]'
                        : 'bg-[#E5E5E5] text-black hover:bg-neutral-200'
                    }`}
                  >
                    <div>{spec.name}</div>
                    <div className="text-[9px] text-gray-500 font-bold mt-1 uppercase">{spec.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Level */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider">// 4. ARCHITECTURAL SURFACE FINISH</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'raw-industrial', name: 'RAW SHUTTERED PLASTER', desc: 'Exposed structural concrete' },
                  { id: 'polished-concrete', name: 'POLISHED SILICA SLAB', desc: 'Mirror-polished floor plate' },
                  { id: 'exposed-metalwork', name: 'EXPOSED STEEL FINISH', desc: 'Oxidized rust clear coat' }
                ].map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setFinishLevel(finish.id)}
                    className={`p-3 border-2 border-black text-left text-xs font-black transition-all ${
                      finishLevel === finish.id
                        ? 'bg-black text-[#FF7F50] shadow-[2px_2px_0px_0px_#FF7F50]'
                        : 'bg-[#E5E5E5] text-black hover:bg-neutral-200'
                    }`}
                  >
                    <div>{finish.name}</div>
                    <div className="text-[9px] text-gray-500 font-bold mt-1 uppercase">{finish.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output */}
          <div className="lg:col-span-5 border-4 border-black p-6 bg-[#E5E5E5] flex flex-col justify-between shadow-[4px_4px_0px_0px_#000000]">
            <div>
              <span className="text-xs font-black uppercase text-gray-500 block mb-4">// CALCULATED ESTIMATE METRICS</span>
              
              <div className="space-y-3 font-bold text-xs">
                <div className="flex justify-between border-b border-black/20 pb-1.5">
                  <span>Concrete Volume:</span>
                  <span className="font-mono text-black font-black">{estimates.concreteVolume} M³</span>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1.5">
                  <span>Reinforcement Steel:</span>
                  <span className="font-mono text-black font-black">~{estimates.steelWeight} Tons</span>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1.5">
                  <span>Estimated Days to Shell:</span>
                  <span className="font-mono text-black font-black">{estimates.daysToShell} Working Days</span>
                </div>
                <div className="flex justify-between pb-1.5 text-emerald-800">
                  <span>Soil Load Bearing:</span>
                  <span>180 kN/SqM Verified</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-4 border-black">
              <span className="text-[10px] font-black uppercase text-gray-500 block">ESTIMATED DIRECT BUDGET</span>
              <div className="text-2xl sm:text-3xl font-black text-black tracking-tight font-mono mt-1">
                ₹{estimates.price.toLocaleString('en-IN')}
              </div>
              <span className="text-[9px] font-bold text-gray-500 block mt-1 uppercase">
                *ESTIMATE FOR COMPLETED REBAR SHELL & CUSTOM M35 CONCRETE IN ATTAPUR
              </span>

              <a 
                href="#contact" 
                className="w-full bg-[#FF7F50] hover:bg-[#ff6933] text-black text-center py-4 border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black uppercase text-xs tracking-wider block mt-6"
                onClick={() => {
                  setFormState(prev => ({
                    ...prev,
                    plotLocation: `Plot in Attapur - Estimated ${projectType} (${areaSqFt} SqFt)`
                  }));
                }}
              >
                LOCK BUDGET SPEC & ORDER AUDIT
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="max-w-4xl mx-auto bg-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] mb-12">
        <div className="border-b-4 border-black pb-4 mb-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7F50]">&gt; ANATOMY OF A BUILD</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="border-4 border-black bg-[#E5E5E5] overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-black text-xs sm:text-sm tracking-tight text-black hover:bg-neutral-200 transition-all uppercase"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-[#FF7F50] shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-[#FF7F50] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 py-4 bg-white text-xs font-semibold text-gray-700 leading-relaxed border-t-4 border-black animate-in fade-in duration-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Info Column */}
        <div className="lg:col-span-5 bg-black text-[#E5E5E5] border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF7F50]">// INITIAL CONTRACT DATA</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-white">
              COMMISSION A HARDCORE BUILD.
            </h2>
            <p className="text-xs font-semibold text-gray-400 leading-relaxed">
              We do not build generic masonry structures. If you are looking for high-strength steel skeletons, raw exposed concrete walls, and massive cantilevered spans in Attapur or surrounding Hyderabad suburbs, submit your details.
            </p>
          </div>

          <div className="space-y-6 border-t-2 border-neutral-800 pt-8 my-8 text-xs font-bold font-mono">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#FF7F50]" />
              <span>Steel Yard & Office: Outer Ring Service Rd, Attapur, Hyderabad</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#FF7F50]" />
              <span>+91 99630 11994</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#FF7F50]" />
              <span>engineering@makhomes.com</span>
            </div>
          </div>

          <div className="text-[9px] font-black uppercase text-[#FF7F50] tracking-widest">
            MAK HOMES INFRASTRUCTURES LTD • EST. 2012
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000]">
          
          {isSuccess ? (
            <div className="text-center py-12 space-y-6">
              <div className="size-16 rounded-none bg-[#FF7F50] border-4 border-black text-black flex items-center justify-center mx-auto shadow-[4px_4px_0px_0px_#000000]">
                <Check size={36} className="stroke-[3]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight">STRUCTURAL REQUEST RECEIVED</h3>
                <p className="text-xs text-gray-700 font-semibold max-w-md mx-auto leading-relaxed">
                  Thank you, {formState.clientName}. Your plot location coordinates ({formState.plotLocation}) have been logged into our engineering database. Our Senior Civil Auditor will call you within 12 hours.
                </p>
              </div>
              <div className="border-4 border-black p-4 bg-[#E5E5E5] text-left max-w-sm mx-auto text-xs font-bold space-y-2">
                <span className="text-[#FF7F50] block font-black">// STAGE 1 AUDIT CHECKLIST:</span>
                <div>1. Soil composition report request</div>
                <div>2. Column loading limit calculation</div>
                <div>3. Steel frame cost locking</div>
              </div>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setFormState({ clientName: '', clientPhone: '', clientEmail: '', plotLocation: '', projectScope: 'new-build' });
                }}
                className="text-xs font-black uppercase text-black hover:text-[#FF7F50] underline block mx-auto"
              >
                SUBMIT NEW PROJECT REPORT
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-black uppercase">// ENTER SITE DATA FOR ENGINEERING FEASIBILITY</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="clientName" className="block text-xs font-black uppercase tracking-wider text-gray-500">CLIENT NAME *</label>
                  <input 
                    type="text" 
                    id="clientName"
                    name="clientName"
                    required
                    value={formState.clientName}
                    onChange={handleInputChange}
                    placeholder="M. A. KHAN"
                    className="w-full px-4 py-3 rounded-none border-2 border-black focus:bg-[#E5E5E5] focus:outline-none text-xs font-bold text-black"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="clientPhone" className="block text-xs font-black uppercase tracking-wider text-gray-500">PHONE NUMBER (10 DIGITS) *</label>
                  <input 
                    type="tel" 
                    id="clientPhone"
                    name="clientPhone"
                    required
                    pattern="[0-9]{10}"
                    value={formState.clientPhone}
                    onChange={handleInputChange}
                    placeholder="9963012345"
                    className="w-full px-4 py-3 rounded-none border-2 border-black focus:bg-[#E5E5E5] focus:outline-none text-xs font-bold text-black"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="clientEmail" className="block text-xs font-black uppercase tracking-wider text-gray-500">EMAIL ADDRESS *</label>
                <input 
                  type="email" 
                  id="clientEmail"
                  name="clientEmail"
                  required
                  value={formState.clientEmail}
                  onChange={handleInputChange}
                  placeholder="khan@makhomes.com"
                  className="w-full px-4 py-3 rounded-none border-2 border-black focus:bg-[#E5E5E5] focus:outline-none text-xs font-bold text-black"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="plotLocation" className="block text-xs font-black uppercase tracking-wider text-gray-500">PLOT LOCATION / PLOT NUMBER IN ATTAPUR *</label>
                <input 
                  type="text" 
                  id="plotLocation"
                  name="plotLocation"
                  required
                  value={formState.plotLocation}
                  onChange={handleInputChange}
                  placeholder="Plot 88, Near Pillar 104, Rajendranagar Main Rd"
                  className="w-full px-4 py-3 rounded-none border-2 border-black focus:bg-[#E5E5E5] focus:outline-none text-xs font-bold text-black"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="projectScope" className="block text-xs font-black uppercase tracking-wider text-gray-500">PROJECT SCOPE *</label>
                <select 
                  id="projectScope"
                  name="projectScope"
                  value={formState.projectScope}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-none border-2 border-black focus:bg-[#E5E5E5] focus:outline-none text-xs font-bold text-black bg-white cursor-pointer"
                >
                  <option value="new-build">NEW STRUCTURAL SHELL DESIGN & BUILD</option>
                  <option value="renovation">STRUCTURAL RETROFITTING / EXPANSION</option>
                  <option value="interior-concrete">RAW INDUSTRIAL INTERIOR DESIGN & POLISHING</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF7F50] hover:bg-[#ff6933] disabled:bg-[#FF7F50]/50 text-black font-black uppercase py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="size-4 border-2 border-black border-t-transparent animate-spin rounded-full" />
                    SUBMITTING STRUCTURAL CONTRACT DATA...
                  </>
                ) : (
                  <>
                    SUBMIT DATA & ORDER STRUCTURAL AUDIT
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 bg-[#E5E5E5] border-2 border-black p-3 text-[9px] font-bold text-gray-700">
                <AlertTriangle size={16} className="text-[#FF7F50] shrink-0" />
                <span>WARNING: PLOT AUDITS ARE SUBJECT TO STRUCTURAL CODE COMPLIANCE. WE DO NOT DEVIATE FROM DESIGN CODE STANDARDS.</span>
              </div>

            </form>
          )}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto bg-black text-white border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000000] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black uppercase text-[#FF7F50]">// MAK HOMES CONCRETE</span>
            <p className="text-[10px] font-semibold text-gray-400 leading-relaxed uppercase">
              Brutalist design. Real, raw engineering. Heavy-duty custom structural homes and lofts. Built to stay.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-black uppercase text-[#FF7F50]">// INDUSTRIAL AREAS SERVED</span>
            <ul className="text-[10px] font-semibold text-gray-400 space-y-1 uppercase">
              <li>- ATTAPUR HIGHWAY</li>
              <li>- RAJENDRANAGAR PLOTS</li>
              <li>- PVNR EXPRESSWAY SPANS</li>
              <li>- HYDERGUDA RESIDENCES</li>
              <li>- RING ROAD FABRICATION</li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-black uppercase text-[#FF7F50]">// STRUCTURAL COMPLIANCE</span>
            <ul className="text-[10px] font-semibold text-gray-400 space-y-1 uppercase">
              <li>- IS 456 CONCRETE CODE</li>
              <li>- IS 800 STEEL CODE</li>
              <li>- FE 550D TMT SPEC</li>
              <li>- ASTM CARBON CONNECTIONS</li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-black uppercase text-[#FF7F50]">// SITE AUDIT OFFICE</span>
            <p className="text-[10px] font-semibold text-gray-400 leading-relaxed uppercase">
              Plot 112, Service Road,<br />
              Attapur, Hyderabad, India.<br />
              Audits Desk: +91 99630 11994
            </p>
          </div>

        </div>

        <div className="border-t-2 border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold text-gray-500 uppercase tracking-widest gap-4">
          <div>
            © 2026 MAK HOMES CONSTRUCTION LTD. STEEL & CONCRETE ONLY.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">- AUDIT POLICY</a>
            <a href="#" className="hover:text-white">- WELDING CODE</a>
            <a href="#" className="hover:text-white">- LEGAL</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

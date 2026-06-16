"use client";

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Cpu,
  Zap,
  Settings,
  Grid,
  Layers,
  Wrench,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Check,
  RefreshCw,
  AlertTriangle,
  Send,
  Database,
  FileText
} from 'lucide-react';

export default function LinearAdsAttapurPage() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('kitchen');
  
  // Collapsible FAQ state
  const [faqOpen, setFaqOpen] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
  });

  // Interactive Configurator state
  const [propertyScale, setPropertyScale] = useState('MAIN_3BHK'); // CELL_2BHK, MAIN_3BHK, MEGA_VILLA
  const [cyberElements, setCyberElements] = useState({
    exposedDucts: true,
    microcement: true,
    trackLights: false,
    steelFraming: false,
  });
  const [intensity, setIntensity] = useState('MID_CYBER'); // MIN_INDUS, MID_CYBER, FULL_RAW

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    selectedScale: 'MAIN_3BHK',
    selectedIntensity: 'MID_CYBER',
    customNotes: ''
  });
  
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [logLines, setLogLines] = useState([]);

  // Mock server status updates
  const [sysTime, setSysTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSysTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle FAQ
  const toggleFaq = (key) => {
    setFaqOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Toggle cyber elements in configurator
  const toggleCyberElement = (key) => {
    setCyberElements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate project specs dynamically
  const calculateSpecs = () => {
    let basePrice = 650000; // MAIN_3BHK
    let scaleLabel = "3 BHK Mainframe";
    if (propertyScale === 'CELL_2BHK') {
      basePrice = 450000;
      scaleLabel = "2 BHK Cell";
    } else if (propertyScale === 'MEGA_VILLA') {
      basePrice = 1250000;
      scaleLabel = "Mega Structure / Villa";
    }

    let multiplier = 1.0;
    let intensityLabel = "Balanced Technical Cyber";
    if (intensity === 'MIN_INDUS') {
      multiplier = 0.85;
      intensityLabel = "Minimalist Industrial Accent";
    } else if (intensity === 'FULL_RAW') {
      multiplier = 1.35;
      intensityLabel = "Raw Structural Cyberpunk";
    }

    let hardwareCost = 0;
    let elementCount = 0;
    if (cyberElements.exposedDucts) { hardwareCost += 60000; elementCount++; }
    if (cyberElements.microcement) { hardwareCost += 95000; elementCount++; }
    if (cyberElements.trackLights) { hardwareCost += 50000; elementCount++; }
    if (cyberElements.steelFraming) { hardwareCost += 120000; elementCount++; }

    const estMin = Math.round((basePrice * multiplier) + hardwareCost);
    const estMax = Math.round(((basePrice * multiplier) + hardwareCost) * 1.15);

    // Complexity Rating (out of 10)
    let complexityRating = 4.5;
    if (propertyScale === 'CELL_2BHK') complexityRating += 0.5;
    if (propertyScale === 'MAIN_3BHK') complexityRating += 1.5;
    if (propertyScale === 'MEGA_VILLA') complexityRating += 3.0;

    if (intensity === 'MID_CYBER') complexityRating += 1.0;
    if (intensity === 'FULL_RAW') complexityRating += 2.5;

    complexityRating += (elementCount * 0.5);
    if (complexityRating > 10) complexityRating = 10;

    // Days timeline
    let timelineDays = 35;
    if (complexityRating > 5) timelineDays = 45;
    if (complexityRating > 7.5) timelineDays = 60;
    if (complexityRating > 9) timelineDays = 75;

    return {
      min: estMin.toLocaleString('en-IN'),
      max: estMax.toLocaleString('en-IN'),
      complexity: complexityRating.toFixed(1),
      timeline: timelineDays,
      scaleLabel,
      intensityLabel
    };
  };

  const currentSpecs = calculateSpecs();

  // Send config payload to form
  const applyConfigToForm = () => {
    const activeElements = Object.keys(cyberElements)
      .filter(k => cyberElements[k])
      .map(k => k.toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      selectedScale: propertyScale,
      selectedIntensity: intensity,
      message: `[SYS_AUTOLOAD] Space Spec: ${propertyScale} // Intensity Level: ${intensity} // Elements Activated: [${activeElements || 'NONE'}]. Target Budget: INR ${currentSpecs.min} - ${currentSpecs.max}. Please initialize design lab logs for my Attapur site.`
    }));

    const formElement = document.getElementById('configurator-intake-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Form Submit with console animation simulation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('CRITICAL: REQUIRED FIELDS IS_MISSING. Please input valid identifiers.');
      return;
    }
    setFormError('');
    setFormLoading(true);
    setLogLines([]);

    const logSequence = [
      "STATUS: Initiating handshake protocol...",
      "SYSTEM: Connecting to Elements Central Lab Attapur...",
      "DATABASE: Verifying user telemetry...",
      "SECURE_GATEWAY: Encrypting contact packets...",
      "LAB_LOGGER: Storing layout configurations...",
      "STATUS: Transfer successful. Dispatching design engineer to coordinates."
    ];

    logSequence.forEach((line, index) => {
      setTimeout(() => {
        setLogLines(prev => [...prev, line]);
        if (index === logSequence.length - 1) {
          setFormLoading(false);
          setFormSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            selectedScale: 'MAIN_3BHK',
            selectedIntensity: 'MID_CYBER',
            customNotes: ''
          });
        }
      }, (index + 1) * 400);
    });
  };

  // Services layout dataset
  const servicesData = {
    kitchen: {
      name: "INTELLIGENT KITCHEN LABS",
      id: "SRV-KITCHEN-01",
      tagline: "Industrial culinary architecture engineered for durability.",
      description: "Our Kitchen Labs are designed for high-stress daily cooking. We combine architectural steel cladding, heavy-duty soft-close drawers, linear magnetic utility tracks, and high-performance ventilation hoods integrated seamlessly into raw concrete overhangs.",
      complexity: "8.5 / 10",
      timeframe: "25 Days",
      materials: [
        { item: "Cold-Rolled Steel Plate Cabinets", finish: "Oil-rubbed anti-fingerprint black", origin: "Lothukunta Steel Yards", rating: "Extreme Heavy-Duty" },
        { item: "Seamless Concrete Worktops", finish: "Polished hybrid silicate sealant", origin: "Elements ChemLab, Hyd", rating: "Stain & Heat Proof" },
        { item: "Low-Voltage Track Lighting", finish: "Matte anodized black, 24V bus", origin: "Germany Import", rating: "Variable Ambient IP44" },
        { item: "Reinforced Cable Conduits", finish: "Exposed brushed brass piping", origin: "Local Brass Mills", rating: "Technical Utility Grid" }
      ],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    living: {
      name: "EXPOSED METAL LIVING SPACES",
      id: "SRV-LIVING-02",
      tagline: "Volumetric spatial zones wrapped in structural ironwork.",
      description: "A complete overhaul of traditional lounge rooms. We introduce modular suspended technical grid ceilings, exposed electrical conduits, concrete-rendered media hubs, and high-impact hazard yellow layout lines along architectural breaks to showcase true industrial geometry.",
      complexity: "7.8 / 10",
      timeframe: "20 Days",
      materials: [
        { item: "Suspended Steel Ceiling Grid", finish: "Powder-coated textured dark grey", origin: "Secunderabad Foundry", rating: "Structural Class A" },
        { item: "Acid-Etched Microcement Walls", finish: "Triple coat silicate glaze", origin: "Birla Hitech Cement", rating: "Micro-texture Grade 3" },
        { item: "Pivot Monolithic Steel Door", finish: "Raw weld seams left visible", origin: "Bespoke Workshop, Hyd", rating: "Secure Pivot Mechanism" },
        { item: "Concealed LED Cable Trays", finish: "Electro-galvanized mesh basket", origin: "Elements Local Stock", rating: "High-Density Cable Path" }
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    bedroom: {
      name: "RAW CONCRETE SLEEP CELLS",
      id: "SRV-BEDROOM-03",
      tagline: "Sound-damped, low-lux chambers for absolute recovery.",
      description: "Designed as acoustic sanctuaries. The Concrete Sleep Cells feature sound-absorbing technical panels wrapped in raw canvas, heavy concrete wall renderings, recessed low-angle hazard yellow floor guides, and steel-reinforced platform beds that look bolted to the structure.",
      complexity: "6.9 / 10",
      timeframe: "18 Days",
      materials: [
        { item: "Bolted Steel Bed Frame", finish: "Matte zinc coat, raw hex bolt tabs", origin: "Custom Engineered Hyd", rating: "Zero-Vibration Weld" },
        { item: "Acoustic Canvas Panels", finish: "Damped backing, charcoal dye", origin: "Soundtech Labs, India", rating: "NRC 0.85 Absorption" },
        { item: "Recessed Floor Guide Tracks", finish: "Anodized yellow warning tint", origin: "Elements Extrusion", rating: "Safe-Path Low Lux LED" },
        { item: "Exposed Conduit Smart Dimmers", finish: "Cast iron utility junction box", origin: "Retrofit Co.", rating: "Pneumatic Switch Click" }
      ],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    workstation: {
      name: "MODULAR TECH WORKSTATIONS",
      id: "SRV-TECHWORK-04",
      tagline: "High-bandwidth command decks for digital operators.",
      description: "Tailored for remote developers, creative leads, and electronic music producers in Hyderabad. Our command decks integrate heavy cable trays, multi-monitor heavy structural arms, ESD-safe workspace linoleum, and isolated breaker boards.",
      complexity: "9.2 / 10",
      timeframe: "15 Days",
      materials: [
        { item: "Heavy Duty Monitor Steel Beam", finish: "Structural grade cold-rolled", origin: "Hyd Iron Yards", rating: "Supports up to 80kg" },
        { item: "ESD-Safe Worktop Layer", finish: "Dissipative rubber skin", origin: "TechMat India", rating: "10e6 to 10e9 Ohms" },
        { item: "Independent Circuit Breaker Panel", finish: "Powder-coated bright yellow box", origin: "Schneider Electric", rating: "Surge Protection Level V" },
        { item: "Perforated Pegboard Dividers", finish: "Laser-cut 3mm steel sheets", origin: "LaserCraft Hyd", rating: "Modular Magnetic Hooks" }
      ],
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    }
  };

  return (
    <div className="bg-[#1e1e1e] text-zinc-200 min-h-screen font-mono selection:bg-[#FFCC00] selection:text-black">
      
      {/* Top Banner / Technical Grid Ticker */}
      <div className="bg-[#FFCC00] text-black text-[10px] font-bold py-1 px-4 flex justify-between items-center tracking-widest border-b border-black overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-4">
          <span>[WARNING: RAW MATERIAL LAB ACTIVE]</span>
          <span>//</span>
          <span>COORDINATES: 17.3688° N, 78.4410° E (ATTAPUR, HYD)</span>
        </div>
        <div className="flex items-center gap-4">
          <span>SYS_TIME: {sysTime || "LOADING..."}</span>
          <span>//</span>
          <span className="animate-pulse text-red-600">● LIVE CONNECTION</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="border-b border-zinc-800 bg-[#1e1e1e]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#FFCC00] text-black p-2 font-black rounded-sm flex items-center justify-center">
              <Terminal size={20} />
            </div>
            <div>
              <span className="font-extrabold tracking-tighter text-lg text-white block">ELEMENTS</span>
              <span className="text-[10px] text-zinc-500 tracking-widest block -mt-1">DESIGN LAB</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider">
            <a href="#hero" className="hover:text-[#FFCC00] transition-colors">[01/LAUNCH]</a>
            <a href="#portfolio" className="hover:text-[#FFCC00] transition-colors">[02/LAB_LAYOUTS]</a>
            <a href="#configurator" className="hover:text-[#FFCC00] transition-colors">[03/SPEC_BUILDER]</a>
            <a href="#testimonials" className="hover:text-[#FFCC00] transition-colors">[04/LOGS]</a>
            <a href="#faq" className="hover:text-[#FFCC00] transition-colors">[05/DECRYPT]</a>
            <a href="#contact" className="bg-zinc-800 border border-zinc-700 text-[#FFCC00] px-4 py-2 hover:bg-[#FFCC00] hover:text-black transition-all flex items-center gap-2">
              <Wrench size={12} />
              <span>INITIALIZE PROJECT</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            <Grid size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-[#252525] py-4 px-6 flex flex-col gap-4 text-xs tracking-widest font-semibold">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-800 hover:text-[#FFCC00] transition-colors">[01] INTRO</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-800 hover:text-[#FFCC00] transition-colors">[02] SERVICES</a>
            <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-800 hover:text-[#FFCC00] transition-colors">[03] COST ESTIMATOR</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-800 hover:text-[#FFCC00] transition-colors">[04] CLIENT LOGS</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-800 hover:text-[#FFCC00] transition-colors">[05] FAQS</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-2 bg-[#FFCC00] text-black text-center py-3 font-bold rounded-sm flex items-center justify-center gap-2"
            >
              <Wrench size={14} />
              <span>INITIALIZE PROJECT</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center border-b border-zinc-800 overflow-hidden py-16">
        {/* Tech Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:40px_40px] opacity-25"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-[#FFCC00]/10"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-[#FFCC00]/5"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-[#FFCC00]/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 text-[#FFCC00] px-3 py-1 text-[11px] rounded-full font-bold uppercase tracking-wider">
              <Cpu size={12} className="animate-spin" />
              <span>CYBER-INDUSTRIAL LIVING // PROTOCOL-1.9</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              RAW TEXTURE.<br />
              METICULOUS<br />
              <span className="text-[#FFCC00] underline decoration-wavy decoration-[#FFCC00] decoration-2 underline-offset-8">ENGINEERING.</span>
            </h1>

            <p className="text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed font-mono">
              Bespoke interior execution for apartments, workspaces, and lofts in Attapur. We reject lazy plaster finishes. We architect concrete textures, structural hot-rolled steel, and low-voltage magnetic grids to craft hyper-functional physical platforms.
            </p>

            {/* Micro Tech Data Badge */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-zinc-800/80">
              <div>
                <span className="text-[10px] text-zinc-500 block">SYSTEM_LOC</span>
                <span className="text-white text-xs font-bold font-mono">ATTAPUR, HYD</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block">MATERIAL_BASE</span>
                <span className="text-white text-xs font-bold font-mono">CONCRETE & STEEL</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block">PRECISION_TOL</span>
                <span className="text-white text-xs font-bold font-mono">&lt; 0.5MM</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block">WELD_STANDARD</span>
                <span className="text-white text-xs font-bold font-mono">AWS D1.1 CERT</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#configurator" className="bg-[#FFCC00] hover:bg-yellow-400 text-black px-6 py-4 font-bold text-xs tracking-wider flex items-center justify-center gap-3 transition-colors">
                <span>[RUN_SPEC_CONFIGURATOR]</span>
                <ArrowRight size={14} />
              </a>
              <a href="#portfolio" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-6 py-4 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-colors">
                <span>[DECRYPT_SERVICES]</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            {/* Tech Box Framing */}
            <div className="border-2 border-zinc-800 p-3 bg-zinc-900/50 backdrop-blur relative">
              {/* Corner crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FFCC00] -mt-1 -ml-1"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FFCC00] -mt-1 -mr-1"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FFCC00] -mb-1 -ml-1"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FFCC00] -mb-1 -mr-1"></div>
              
              <div className="bg-black/90 p-4 border border-zinc-800 text-zinc-400 text-[10px] leading-relaxed space-y-3 font-mono">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-white font-bold">[LAB DIAGNOSTICS]</span>
                  <span className="text-[#FFCC00]">SYS_STABLE_100%</span>
                </div>
                <div className="space-y-1">
                  <p>&gt; loader.exe --build-mode="attapur_cyber"</p>
                  <p className="text-zinc-500">&gt;&gt; scanning room geometry profiles...</p>
                  <p className="text-[#FFCC00]">&gt;&gt; structural concrete strength: OK</p>
                  <p className="text-[#FFCC00]">&gt;&gt; magnetic track layouts loaded successfully</p>
                  <p>&gt;&gt; ready to execute custom iron frames</p>
                </div>
                
                {/* Tech image inside container */}
                <div className="relative h-48 w-full mt-4 overflow-hidden border border-zinc-800 group">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                    alt="Cyberpunk industrial loft mock rendering"
                    className="object-cover w-full h-full filter grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-[#FFCC00]/10 mix-blend-overlay"></div>
                  {/* Warning strip overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#FFCC00,#FFCC00_10px,#000_10px,#000_20px)]"></div>
                </div>
                
                <div className="pt-2 text-zinc-500 text-center flex justify-between">
                  <span>SCALE: 1:45</span>
                  <span>GRID: ACTIVE</span>
                  <span>DECK: 04_HYD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Tab Section */}
      <section id="portfolio" className="py-20 border-b border-zinc-800 relative bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#FFCC00] block mb-2 tracking-widest">// ARCHITECTURAL MATRIX</span>
              <h2 className="text-3xl font-black tracking-tight text-white uppercase">DESIGN LAB LAYOUTS</h2>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-md mt-4 md:mt-0">
              Select a functional grid cell below to inspect layout blueprints, component material tables, complexity factors, and raw execution specs.
            </p>
          </div>

          {/* Technical Tab Toggles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {Object.keys(servicesData).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-4 px-3 text-left border font-mono transition-all text-xs tracking-tighter ${
                    isActive 
                      ? 'border-[#FFCC00] bg-[#FFCC00]/10 text-white shadow-[0_0_15px_rgba(255,204,0,0.1)]' 
                      : 'border-zinc-800 bg-[#222222] text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="text-[10px] text-zinc-500 mb-1">[{servicesData[key].id}]</div>
                  <div className="font-extrabold text-sm flex items-center gap-2">
                    <span className={isActive ? 'text-[#FFCC00]' : 'text-zinc-600'}>●</span>
                    {servicesData[key].name.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#222222]/50 border border-zinc-800 p-6 md:p-10 relative">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-zinc-600 uppercase tracking-widest hidden md:block">
              ENGINEERED SYSTEM V2.3 // ZONE: {activeTab.toUpperCase()}
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              
              {/* Detailed Description */}
              <div className="md:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 text-[#FFCC00] text-[10px] font-bold border border-zinc-700">
                  <Layers size={12} />
                  <span>SPECIFICATION SHEETS</span>
                </div>
                <h3 className="text-2xl font-black text-white">{servicesData[activeTab].name}</h3>
                <p className="text-sm text-[#FFCC00] font-bold tracking-tight">{servicesData[activeTab].tagline}</p>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  {servicesData[activeTab].description}
                </p>

                {/* Technical Meta Specs */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase">LAYOUT COMPLEXITY</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-black">{servicesData[activeTab].complexity}</span>
                      <span className="text-[10px] text-[#FFCC00]">EXTREME</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase">ESTIMATED ERECT_TIME</span>
                    <span className="text-white text-sm font-black">{servicesData[activeTab].timeframe}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a href="#configurator" className="inline-flex items-center gap-2 text-xs font-bold text-[#FFCC00] hover:underline">
                    <span>[RUN SIMULATION WITH THIS BASE]</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Graphic Mock & Raw Material Table */}
              <div className="md:col-span-6 space-y-6">
                <div className="relative h-60 w-full overflow-hidden border border-zinc-800">
                  <img 
                    src={servicesData[activeTab].image} 
                    alt={servicesData[activeTab].name}
                    className="object-cover w-full h-full filter grayscale contrast-115"
                  />
                  <div className="absolute inset-0 bg-[#FFCC00]/5 mix-blend-overlay"></div>
                  {/* Schematic box overlay */}
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-2 text-[9px] text-[#FFCC00] border border-zinc-800 font-mono">
                    <span className="block font-bold">GRID SCHEMATIC: {servicesData[activeTab].id}</span>
                    <span className="text-zinc-500">ATTAPUR SITE LOGS // VERIFICATION OK</span>
                  </div>
                </div>

                {/* Raw Material Table */}
                <div className="space-y-2">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    <Database size={12} className="text-[#FFCC00]" />
                    <span>RAW MATERIAL LOGISTICS INDEX</span>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-[10px] font-mono text-left border border-zinc-800">
                      <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
                          <th className="py-2 px-3 font-semibold uppercase">MATERIAL_TYPE</th>
                          <th className="py-2 px-3 font-semibold uppercase">SPEC_FINISH</th>
                          <th className="py-2 px-3 font-semibold uppercase">SUPPLY_ORIGIN</th>
                          <th className="py-2 px-3 font-semibold uppercase">STRESS_TOL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {servicesData[activeTab].materials.map((mat, i) => (
                          <tr key={i} className="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
                            <td className="py-2 px-3 font-bold text-white">{mat.item}</td>
                            <td className="py-2 px-3 text-zinc-400">{mat.finish}</td>
                            <td className="py-2 px-3 text-zinc-400">{mat.origin}</td>
                            <td className="py-2 px-3 text-[#FFCC00] font-bold">{mat.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Configurator/Cost Estimator */}
      <section id="configurator" className="py-20 border-b border-zinc-800 relative bg-[#1e1e1e]">
        {/* Background dotted patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold text-[#FFCC00] tracking-widest">// VIRTUAL LAB ENGINE</span>
            <h2 className="text-3xl font-black text-white uppercase">INTERIOR CONFIGURATOR</h2>
            <p className="text-xs text-zinc-500 font-mono">
              Build your cyber-industrial setup. Check out real-time cost projections, complexity ratings, and timeline calculations based on your raw materials selection.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Configuration Controls */}
            <div className="lg:col-span-7 bg-[#222222]/80 border border-zinc-800 p-6 md:p-8 space-y-8 flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* 1. Scale of Structure */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    [01/SPACE_SCALE_UNITS]
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'CELL_2BHK', label: '2 BHK CELL', desc: 'Slightly constrained footprint.' },
                      { value: 'MAIN_3BHK', label: '3 BHK MAINFRAME', desc: 'Optimal layout grid footprint.' },
                      { value: 'MEGA_VILLA', label: 'MEGA VILLA', desc: 'Deep volumetric expansion.' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setPropertyScale(item.value)}
                        className={`p-3 text-left border font-mono transition-all rounded-sm flex flex-col justify-between ${
                          propertyScale === item.value 
                            ? 'border-[#FFCC00] bg-[#FFCC00]/5 text-white' 
                            : 'border-zinc-800 bg-[#252525] text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <span className="text-xs font-extrabold block">{item.label}</span>
                        <span className="text-[9px] text-zinc-500 block mt-1 leading-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Cybernetic Material Packages */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    [02/CYBERNETICS_ELEMENTS_INDEX]
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: 'exposedDucts', label: 'EXPOSED ELECTRICAL & AIR DUCTS', cost: '₹60k base allocation' },
                      { key: 'microcement', label: 'RAW SEAMLESS MICROCEMENT RENDERS', cost: '₹95k base allocation' },
                      { key: 'trackLights', label: 'LOW-VOLTAGE MAGNETIC COVE TRACKS', cost: '₹50k base allocation' },
                      { key: 'steelFraming', label: 'BESPOKE COLD-ROLLED STRUCTURAL METAL', cost: '₹120k base allocation' }
                    ].map((item) => {
                      const isActive = cyberElements[item.key];
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => toggleCyberElement(item.key)}
                          className={`p-3 text-left border font-mono transition-all rounded-sm flex items-center justify-between gap-4 ${
                            isActive 
                              ? 'border-[#FFCC00] bg-[#FFCC00]/5 text-white' 
                              : 'border-zinc-800 bg-[#252525] text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          <div>
                            <span className="text-[10px] font-extrabold block">{item.label}</span>
                            <span className="text-[9px] text-[#FFCC00] block mt-0.5">{item.cost}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                            isActive ? 'border-[#FFCC00] bg-[#FFCC00] text-black' : 'border-zinc-600 bg-zinc-800'
                          }`}>
                            {isActive && <Check size={10} strokeWidth={4} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Intensity */}
                <div className="space-y-3">
                  <label className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    [03/STRUCTURAL_INTENSITY_FACTOR]
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'MIN_INDUS', label: 'LIGHT INDUSTRIAL', desc: 'Subtle steel frames, clean plaster.' },
                      { value: 'MID_CYBER', label: 'BALANCED CYBER', desc: 'Concrete, wiring meshes, yellow marks.' },
                      { value: 'FULL_RAW', label: 'HEAVY INDUSTRIAL', desc: 'Heavy raw concrete plates, full welds.' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setIntensity(item.value)}
                        className={`p-3 text-left border font-mono transition-all rounded-sm flex flex-col justify-between ${
                          intensity === item.value 
                            ? 'border-[#FFCC00] bg-[#FFCC00]/5 text-white' 
                            : 'border-zinc-800 bg-[#252525] text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <span className="text-xs font-extrabold block">{item.label}</span>
                        <span className="text-[9px] text-zinc-500 block mt-1 leading-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-zinc-800/80">
                <button
                  onClick={applyConfigToForm}
                  className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-black py-4 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-colors rounded-sm"
                >
                  <Settings size={14} className="animate-spin" />
                  <span>[LOCK_SPECIFICATIONS_&_INITIALIZE_INTAKE]</span>
                </button>
              </div>

            </div>

            {/* Calculations Panel Display */}
            <div className="lg:col-span-5 bg-black border-2 border-[#FFCC00]/30 p-6 md:p-8 flex flex-col justify-between relative">
              {/* Caution stripes design decoration on right */}
              <div className="absolute top-0 right-0 bottom-0 w-2 bg-[repeating-linear-gradient(45deg,#FFCC00,#FFCC00_5px,#000_5px,#000_10px)]"></div>
              
              <div className="space-y-6 pr-4">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">[PROJECTED CYBER SPECS]</span>
                  <span className="text-xs text-[#FFCC00] font-mono font-bold">CALCULATION_V2.14</span>
                </div>

                {/* Output 1: Cost Estimate */}
                <div className="space-y-2">
                  <span className="text-[10px] text-zinc-400 font-bold block uppercase">[01 / PROJECTED_ESTIMATE_RANGE]</span>
                  <div className="text-2xl md:text-3xl font-black text-white">
                    ₹ {currentSpecs.min} - ₹ {currentSpecs.max}
                  </div>
                  <span className="text-[9px] text-zinc-500 block leading-tight">
                    *Exclusive of GST. Under normal Attapur site parameters. Includes structural framing and lighting tracks.
                  </span>
                </div>

                {/* Output 2: Complexity Rating */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] text-zinc-400 font-bold uppercase">
                    <span>[02 / COMPLEXITY_FACTOR_LEVEL]</span>
                    <span className="text-white font-extrabold">{currentSpecs.complexity} / 10.0</span>
                  </div>
                  
                  {/* Custom Complexity Progress Bar */}
                  <div className="h-3 bg-zinc-900 border border-zinc-800 p-0.5 rounded-sm overflow-hidden flex">
                    {Array.from({ length: 20 }).map((_, idx) => {
                      const fillPercent = (idx / 20) * 10;
                      const isFilled = parseFloat(currentSpecs.complexity) >= fillPercent;
                      return (
                        <div 
                          key={idx}
                          className={`h-full flex-1 mx-[1px] ${
                            isFilled 
                              ? idx > 15 
                                ? 'bg-red-500' 
                                : idx > 10 
                                  ? 'bg-[#FFCC00]' 
                                  : 'bg-green-500'
                              : 'bg-zinc-800'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                    <span>CELL_MODERATE</span>
                    <span>HEAVY_INDUS</span>
                    <span>LIMIT_CYBER</span>
                  </div>
                </div>

                {/* Output 3: Execution Timeline */}
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-400 font-bold block uppercase">[03 / ESTIMATED_ERECT_TIMELINE]</span>
                  <div className="text-xl font-bold text-white">
                    {currentSpecs.timeline} CALENDAR_DAYS
                  </div>
                  <span className="text-[9px] text-zinc-500 block">
                    Fast-track timeline enabled by our local supply line in Ring Road, Attapur.
                  </span>
                </div>

                {/* Diagnostics Checkbox Mock */}
                <div className="border-t border-zinc-800 pt-4 space-y-2 text-[10px]">
                  <div className="flex items-center gap-2 text-[#FFCC00]">
                    <Check size={12} className="text-green-500" />
                    <span>SYSTEM COMPATIBILITY: POSITIVE</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Check size={12} className="text-green-500" />
                    <span>SUPPLY DEPOT ATTAPUR: ONLINE</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Check size={12} className="text-green-500" />
                    <span>LUCIDE ICONS VERIFIED</span>
                  </div>
                </div>

              </div>

              {/* Terminal Code lines inside calculated box */}
              <div className="mt-8 bg-zinc-950 p-3 border border-zinc-800 text-[9px] text-zinc-500 space-y-1 pr-6">
                <p>&gt;&gt; RUNNING CYBERNETIC FEASIBILITY SCANS...</p>
                <p>&gt;&gt; SCALE SET TO: {currentSpecs.scaleLabel.toUpperCase()}</p>
                <p>&gt;&gt; INTENSITY WEIGHT: {currentSpecs.intensityLabel.toUpperCase()}</p>
                <p className="text-white">&gt;&gt; READY FOR DEPLOYMENT LOGS.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 border-b border-zinc-800 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold text-[#FFCC00] block mb-2 tracking-widest">// USER DEPLOYMENT LOGS</span>
              <h2 className="text-3xl font-black text-white uppercase">CLIENT TESTIMONIALS</h2>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-sm mt-4 md:mt-0">
              Verbatim transcripts from clients who commissioned Linear A.D.S. to reconstruct their Hyderabad spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: "LOG_094 // PENTHOUSE",
                client: "Vikram R.",
                location: "Mrugavani Residency, Attapur",
                text: "I was tired of the typical white walls and laminate cabinets. Elements converted my 3 BHK into an absolute technical marvel. The cold-rolled steel cabinets in the kitchen are indestructible, and the custom low-voltage lighting grids make my space feel like a technical command deck.",
                date: "14-FEB-2026",
                verification: "VERIFIED_LOG_094"
              },
              {
                id: "LOG_102 // STUDIO CELL",
                client: "Neha S.",
                location: "Hyderguda Road, Attapur",
                text: "Elements executed the raw concrete Sleep Cell layout in my bedroom. The soundproofing canvas panels block all noise from the main road traffic, and the custom concrete wall glaze is spectacular. It's rare to find an interior builder with this level of mechanical precision.",
                date: "03-APR-2026",
                verification: "VERIFIED_LOG_102"
              },
              {
                id: "LOG_115 // MAINFRAME",
                client: "Aditya K.",
                location: "Attapur High Rise Complex",
                text: "The tech workstation setup they built for my home office is unmatched. Complete ESD protection layers, structured cable conduits, and independent breaker boards. They finished within 15 days, precisely as projected. Excellent engineering mindsets.",
                date: "28-MAY-2026",
                verification: "VERIFIED_LOG_115"
              }
            ].map((log, index) => (
              <div key={index} className="bg-[#222222]/60 border border-zinc-800 p-6 space-y-4 relative">
                {/* Warning border tag */}
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FFCC00]/20"></div>
                
                <div className="pl-4 space-y-3">
                  <div className="flex justify-between items-center text-[9px] font-bold tracking-wider font-mono">
                    <span className="text-[#FFCC00]">{log.id}</span>
                    <span className="text-zinc-500">{log.date}</span>
                  </div>
                  
                  <p className="text-xs text-zinc-300 leading-relaxed font-mono italic">
                    "{log.text}"
                  </p>
                  
                  <div className="pt-3 border-t border-zinc-800/80">
                    <span className="text-white text-xs font-black block">{log.client}</span>
                    <span className="text-[9px] text-zinc-500 block">{log.location}</span>
                  </div>

                  <div className="text-[9px] font-mono text-zinc-600 flex justify-between pt-1">
                    <span>SECURITY: AES_256</span>
                    <span className="text-green-600">{log.verification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 border-b border-zinc-800 bg-[#1e1e1e]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-[#FFCC00] tracking-widest block">// DECRYPTING COMMONLY ASKED LOGS</span>
            <h2 className="text-3xl font-black text-white uppercase">FREQUENTLY ANSWERED</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                key: 'q1',
                q: "DOES ELEMENTS HAND OVER ORIGINAL BLUEPRINTS AND SCHEMATICS?",
                a: "Yes. Every client receives a comprehensive schematic binder containing CAD files, electrical wiring trace sheets, layout grids, raw cement sealant formulas, and millwork blueprints for future maintenance."
              },
              {
                key: 'q2',
                q: "IS RAW CONCRETE DUSTY AND DIFFICULT TO CLEAN?",
                a: "Never. We do not leave concrete completely raw. We apply premium silicate hardeners and non-reactive matte protective glazes that encapsulate the micro cement, making it completely smooth, stain-proof, and dust-free."
              },
              {
                key: 'q3',
                q: "CAN WE RETROFIT MAGTRACK LIGHTING SYSTEMS LATER?",
                a: "Our magnetic low-voltage tracks are modular by design. Once we engineer and install the base track profiles into your ceiling grid, you can slide, swap, or relocate spots and flood modules yourself at any time without tools."
              },
              {
                key: 'q4',
                q: "HOW LONG DOES A CYBER-INDUSTRIAL BUILD TAKE TO CONSTRUCT?",
                a: "A typical 3 BHK Mainframe installation takes between 40 to 60 calendar days depending on the complexity of steel fabrications. We pre-fabricate all structural metal pieces in our Attapur workshop to speed up site assembly."
              },
              {
                key: 'q5',
                q: "CAN THESE RAW METALS RESIST HYDERABAD'S HUMIDITY AND CORROSION?",
                a: "Absolutely. All cold-rolled steel plates are treated with anti-corrosive oil finishes, structural powder coatings, or clear protective layers to prevent oxidation, retaining the rugged raw-industrial appearance permanently."
              }
            ].map((item) => {
              const isOpen = faqOpen[item.key];
              return (
                <div key={item.key} className="border border-zinc-850 bg-[#222222]/40 rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(item.key)}
                    className="w-full py-4 px-6 text-left hover:bg-zinc-800/20 transition-all flex items-center justify-between gap-4 font-mono text-xs md:text-sm font-extrabold text-white"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#FFCC00]">
                      {isOpen ? '[ - ]' : '[ + ]'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-zinc-400 border-t border-zinc-800/50 leading-relaxed font-mono">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-[#1c1c1c] relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#FFCC00] block mb-2 tracking-widest">// SECURE CONTACT CHANNEL</span>
                <h2 className="text-3xl font-black text-white uppercase">INITIALIZE PROJECT</h2>
                <p className="text-xs text-zinc-400 font-mono mt-3 leading-relaxed">
                  Establish a secure connection with Linear A.D.S.. Submit your telemetry logs and structural constraints to queue your site verification.
                </p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-zinc-800 border border-zinc-700 text-[#FFCC00] flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="text-zinc-500 block">LAB_LOCATIONS</span>
                    <span className="text-white font-bold">Ring Road, Attapur, Hyderabad - 500048</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-zinc-800 border border-zinc-700 text-[#FFCC00] flex items-center justify-center">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-zinc-500 block">COMMS_PHONE</span>
                    <span className="text-white font-bold">+91 98498 50348</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-zinc-800 border border-zinc-700 text-[#FFCC00] flex items-center justify-center">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="text-zinc-500 block">SECURE_MAIL</span>
                    <span className="text-white font-bold">linearads@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Lab Hours Console Mock */}
              <div className="bg-black/40 border border-zinc-800 p-4 rounded-sm text-[10px] text-zinc-400 space-y-2 font-mono">
                <div className="text-white font-bold text-xs border-b border-zinc-800 pb-2">LAB_OPERATING_HOURS</div>
                <div className="flex justify-between">
                  <span>MON - FRI</span>
                  <span className="text-[#FFCC00]">09:00 - 19:30 IST</span>
                </div>
                <div className="flex justify-between">
                  <span>SATURDAY</span>
                  <span className="text-[#FFCC00]">10:00 - 17:00 IST</span>
                </div>
                <div className="flex justify-between text-red-500 font-bold">
                  <span>SUNDAY</span>
                  <span>LAB_SHUTDOWN // MAINT</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="configurator-intake-form" className="lg:col-span-7 bg-[#222222]/80 border-2 border-zinc-800 p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-zinc-600">
                INTAKE_PROTOCOL_V1.9
              </div>

              <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-2">
                <FileText size={18} className="text-[#FFCC00]" />
                <span>PROJECT_INTAKE_LOG</span>
              </h3>

              {formSuccess ? (
                <div className="bg-zinc-900 border border-green-500 p-6 text-center space-y-4 rounded-sm">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-white font-bold text-sm">INTAKE PACKET RECEIVED SUCCESSFULLY</h4>
                  <div className="bg-black p-4 text-[10px] text-left text-zinc-400 font-mono space-y-1">
                    {logLines.map((line, i) => (
                      <p key={i} className={i === logLines.length - 1 ? "text-green-500 font-bold" : ""}>
                        &gt; {line}
                      </p>
                    ))}
                  </div>
                  <button 
                    onClick={() => setFormSuccess(false)}
                    className="text-xs text-[#FFCC00] hover:underline"
                  >
                    [SUBMIT_NEW_INTAKE_LOG]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  
                  {formError && (
                    <div className="bg-red-950 border border-red-500 text-red-200 p-3 flex items-center gap-2 rounded-sm font-mono text-[10px]">
                      <AlertTriangle size={14} className="text-red-500" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold block uppercase">[INTAKE_NAME]</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="OPERATOR NAME"
                        className="w-full bg-zinc-900 border border-zinc-800 py-3 px-4 text-white font-mono rounded-sm focus:border-[#FFCC00] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold block uppercase">[INTAKE_EMAIL]</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="linearads@gmail.com"
                        className="w-full bg-zinc-900 border border-zinc-800 py-3 px-4 text-white font-mono rounded-sm focus:border-[#FFCC00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold block uppercase">[INTAKE_PHONE]</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-zinc-900 border border-zinc-800 py-3 px-4 text-white font-mono rounded-sm focus:border-[#FFCC00] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold block uppercase">[PROPERTY_COORD_SCALE]</label>
                      <select 
                        value={formData.selectedScale}
                        onChange={(e) => setFormData(prev => ({ ...prev, selectedScale: e.target.value }))}
                        className="w-full bg-zinc-900 border border-zinc-800 py-3 px-4 text-white font-mono rounded-sm focus:border-[#FFCC00] focus:outline-none"
                      >
                        <option value="CELL_2BHK">2 BHK CELL</option>
                        <option value="MAIN_3BHK">3 BHK MAINFRAME</option>
                        <option value="MEGA_VILLA">MEGA VILLA / STRUCTURE</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-400 font-bold block uppercase">[TELEMETRY_LOGS_MESSAGE]</label>
                    <textarea 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Specify your structural requirements, concrete preferences, or raw design needs..."
                      className="w-full bg-zinc-900 border border-zinc-800 py-3 px-4 text-white font-mono rounded-sm focus:border-[#FFCC00] focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-black py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                    >
                      {formLoading ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>TRANSMITTING INTAKE PACKET...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>SUBMIT PROJECT INTAKE TELEMETRY</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#151515] text-zinc-500 py-12 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <span className="font-extrabold text-white text-sm block">LINEAR A.D.S.</span>
            <p className="text-[10px] leading-relaxed">
              Industrial and cybernetic interior architectures designed and built from scratch. Executing high-tensile concrete, steel frames, and modular layouts.
            </p>
            <span className="text-[9px] text-[#FFCC00] block font-bold">HYDERABAD // ATTAPUR CENTRAL BRANCH</span>
          </div>

          <div>
            <span className="text-white font-bold block mb-3 text-[10px] uppercase">// SITE SECTIONS</span>
            <ul className="space-y-2 text-[10px]">
              <li><a href="#hero" className="hover:text-white transition-colors">[01/LAUNCH_PAD]</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">[02/LAB_LAYOUTS]</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">[03/SPEC_BUILDER]</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">[04/CLIENT_LOGS]</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">[05/DECRYPT_FAQS]</a></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold block mb-3 text-[10px] uppercase">// HARDWARE MATRIX</span>
            <ul className="space-y-2 text-[10px]">
              <li><span className="text-zinc-400">STRUCTURAL STEEL</span> // GRADE A</li>
              <li><span className="text-zinc-400">MICRO CEMENT</span> // 3-COAT GLOSS</li>
              <li><span className="text-zinc-400">MAG TRACKS</span> // low voltage</li>
              <li><span className="text-zinc-400"> ब्लू प्रिंट ब्लूज़ </span> // CAD OUTPUT</li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold block mb-3 text-[10px] uppercase">// DIAGNOSTICS</span>
            <div className="space-y-2 text-[10px] bg-black p-3 border border-zinc-800 leading-normal">
              <div className="flex justify-between">
                <span>SERVER_STATUS:</span>
                <span className="text-green-500 font-bold">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>VERIFICATION:</span>
                <span className="text-[#FFCC00]">SECURE_AES</span>
              </div>
              <div className="flex justify-between">
                <span>LICENSE:</span>
                <span>EDL-2026-IND</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px]">
          <span>© 2026 LINEAR A.D.S.. ALL SYSTEM RIGHTS SECURED.</span>
          <span className="text-zinc-600">ATTAPUR // SECURE PREVIEW VERSION</span>
        </div>
      </footer>

    </div>
  );
}

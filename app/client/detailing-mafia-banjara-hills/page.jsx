"use client";

import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Award, 
  Layers, 
  Wrench, 
  Check, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight,
  Shield,
  Clock,
  CheckCircle,
  Eye,
  Info
} from 'lucide-react';

export default function DetailingMafia() {
  // Layer Visualizer state
  const [selectedLayerType, setSelectedLayerType] = useState('ppf'); // 'paint', 'ceramic', 'ppf'

  // Before/After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      q: "What is the difference between Ceramic Coating and PPF?",
      a: "Ceramic Coating is a liquid nano-glass polymer that bonds chemically with your clear coat to provide hydrophobic self-cleaning, chemical resistance, and intense gloss. Paint Protection Film (PPF) is a physical, 200-micron thick elastic urethane wrap that protects against rock chips, deep road scratches, key marks, and possesses self-healing capabilities."
    },
    {
      q: "Why are your prices higher than regular local car washes?",
      a: "We are a precision detailing lab, not a high-volume wash bay. We employ certified master detailers using professional-grade infrared curing lamps, orbital polishers, and imported compound liquids from Germany. Every vehicle receives up to 30 hours of labor including multi-stage paint decontamination, multi-stage correction, and strict quality checks."
    },
    {
      q: "Do you offer any warranty on PPF wraps?",
      a: "Yes! Our premium TPU PPF wraps (X-Shield Armor Pro) come with a 7-Year or 10-Year warranty that covers yellowing, cracking, bubbling, and lifting. If any panel fails, we replace it completely free of charge."
    },
    {
      q: "How long does Paint Correction take?",
      a: "Depending on the level of scratching and swirls, a thorough correction takes 1 to 2 full days. We map the paint depth of your car using ultrasonic gauges to ensure we safely eliminate swirls without thinning your clear coat."
    },
    {
      q: "Where is The Detailing Mafia located in Banjara Hills?",
      a: "Our studio is located on Road No. 12, Banjara Hills, near the iconic Jagannath Temple, Hyderabad. It is a fully dust-free, temperature-controlled facility with active 24/7 security."
    }
  ];

  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: 'Paint Correction & Ceramic',
    date: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e7eb] font-sans selection:bg-[#ef4444]/30 selection:text-white overflow-hidden">
      
      {/* Background Triangles / Angled Polygons (CSS Clip paths or inline SVGs) */}
      <div className="absolute top-0 right-0 w-[40%] h-[100vh] bg-gradient-to-l from-red-950/10 via-transparent to-transparent pointer-events-none skew-x-12"></div>
      <div className="absolute top-[600px] left-[-100px] w-96 h-96 bg-red-900/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      
      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-[#121212]/90 border-b border-red-500/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Triangulated Angle */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center rotate-45 border border-red-400/30 shadow-[0_0_20px_rgba(239,68,68,0.25)] shrink-0">
                <Flame className="-rotate-45 text-white w-6 h-6" />
              </div>
              <div className="ml-1">
                <span className="font-black text-2xl tracking-tighter text-white block uppercase italic">
                  MAFIA<span className="text-red-600">DETAILING</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-red-500 font-bold block -mt-1">
                  Banjara Hills • Hyderabad
                </span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-semibold tracking-wide uppercase hover:text-red-500 transition-colors">Services</a>
              <a href="#visualizer" className="text-sm font-semibold tracking-wide uppercase hover:text-red-500 transition-colors">Armor Visualizer</a>
              <a href="#before-after" className="text-sm font-semibold tracking-wide uppercase hover:text-red-500 transition-colors">Gallery</a>
              <a href="#pricing" className="text-sm font-semibold tracking-wide uppercase hover:text-red-500 transition-colors">Packages</a>
              <a href="#faq" className="text-sm font-semibold tracking-wide uppercase hover:text-red-500 transition-colors">FAQ</a>
            </div>

            {/* Aggressive Corner Cut Button */}
            <div>
              <a 
                href="#contact" 
                className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-red-600 hover:bg-red-700 transition-all border border-red-500/20 shadow-lg shadow-red-900/30 transform hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-widest shrink-0"
                style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 md:py-32 flex items-center">
        {/* Angled geometric splits */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#161616] pointer-events-none -skew-x-12 origin-top-right border-l border-red-600/10 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/60 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-red-500 animate-pulse"></span>
                Banjara Hills High-End Detailing Lab
              </div>

              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white uppercase italic leading-none">
                PAINT WRAP & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  CERAMIC ARMOR.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                We design bulletproof finishes for elite vehicles. Banjara Hills' exclusive high-performance detailing studio specializes in paint correction, advanced self-healing TPU wraps, and ultra-durable nanotech glass armor.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider text-sm shadow-[0_4px_25px_rgba(220,38,38,0.3)] transition-all flex items-center gap-2"
                  style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
                >
                  Configure Detailing
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </a>
                <a 
                  href="#visualizer" 
                  className="px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
                >
                  Explore Paint Layers
                </a>
              </div>

              {/* Stats Block */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-gray-800 max-w-lg">
                <div>
                  <h4 className="text-2xl font-extrabold text-red-500">200μm</h4>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">PPF Thickness</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-white">9H Gold</h4>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Hardness Shield</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-white">500+</h4>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Supercars Coated</p>
                </div>
              </div>
            </div>

            {/* Right Graphic Panel - Aggressive Dark polygon card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-red-600/10 rounded-3xl filter blur-2xl transform rotate-6 scale-95 pointer-events-none"></div>
              
              <div 
                className="relative bg-[#141414] border-2 border-red-600/20 p-8 shadow-2xl relative"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)' }}
              >
                <div className="flex justify-between items-center mb-6 border-b border-red-500/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-red-500" />
                    <span className="text-xs uppercase font-extrabold tracking-widest text-white">
                      Detailing Spec Sheet
                    </span>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-red-500 uppercase bg-red-950/40 px-3 py-1 border border-red-500/30">
                    STAGE 3 READY
                  </span>
                </div>

                {/* Spec List */}
                <div className="space-y-4">
                  {[
                    { label: "Paint Decontamination", val: "Ultrasonic clay & iron dissolve" },
                    { label: "Paint Correction", val: "Rotary orbital 3-stage refinement" },
                    { label: "Hydrophobic Sheeting", val: "SiO2 bond rating 115° contact angle" },
                    { label: "Curing Phase", val: "60°C Shortwave Infrared Baking" },
                    { label: "Scratch Recovery", val: "TPU Elastomer Thermal Regeneration" }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 p-3.5 bg-gray-950/40 border-l-2 border-red-600">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-500">{spec.label}</span>
                        <span className="block text-sm font-bold text-white mt-0.5">{spec.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 uppercase font-black tracking-widest text-xs">Mafia Arsenal</span>
            <h2 className="text-4xl font-extrabold text-white uppercase italic">Elite Defenses For Auto Paint</h2>
            <p className="text-gray-400 text-sm">
              We execute extreme paint rehabilitation. Scroll through our primary detailing services tailored for sports coupes, supercars, and premium family cruisers.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div 
              className="bg-[#141414] border border-gray-800 hover:border-red-600 p-8 transition-all relative group flex flex-col justify-between"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              <div>
                <div className="w-14 h-14 bg-red-950/50 border border-red-500/20 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase italic text-white mb-3 group-hover:text-red-500 transition-colors">Paint correction</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                   ultrasonic measurement maps. We shave micro-layers of clear coat to delete 99% of paint swirl marks, heavy hazing, acid stains, and bird drop scars.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-gray-300 border-t border-gray-800 pt-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Paint depth calibration</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Rotary compound polish</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Mirror orange-peel elimination</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div 
              className="bg-[#141414] border border-gray-800 hover:border-red-600 p-8 transition-all relative group flex flex-col justify-between"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              <div>
                <div className="w-14 h-14 bg-red-950/50 border border-red-500/20 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase italic text-white mb-3 group-hover:text-red-500 transition-colors">9H Ceramic coating</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Liquid glass nano particles crystalize on your car's surface. High-grade SiO2 formulation protects against oxidation, bird droppings, and Hyderabad's intense UV.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-gray-300 border-t border-gray-800 pt-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Certified 9H Hardness Shield</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Super Hydrophobic bead sheeting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Up to 5 Years Written Warranty</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div 
              className="bg-[#141414] border border-gray-800 hover:border-red-600 p-8 transition-all relative group flex flex-col justify-between"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              <div>
                <div className="w-14 h-14 bg-red-950/50 border border-red-500/20 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase italic text-white mb-3 group-hover:text-red-500 transition-colors">TPU Paint Protection Film</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Urethane armor wrap with self-healing elastic capabilities. Deflects highway stone impacts, parking lot door dings, and key damage instantly.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-gray-300 border-t border-gray-800 pt-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> 200 Micron heavy TPU shield</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> Heat activated self-healing matrix</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500 shrink-0" /> 10 Years lifetime warranty wrap</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SIGNATURE INTERACTIVE LAYER VISUALIZER */}
      <section id="visualizer" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#141414] border border-red-500/20 p-8 md:p-16 shadow-2xl relative overflow-hidden">
            
            {/* Background geometric mesh */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visualizer selection & detail */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <span className="text-red-500 uppercase font-black text-xs tracking-widest block mb-2">Signature Tech</span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase italic leading-tight">
                    Interactive Paint Layer Analyzer
                  </h2>
                  <p className="text-gray-400 text-sm mt-3">
                    Click the coating types below to simulate how our ceramic armor or TPU film creates additional molecular thickness on top of your factory paint to deflect scratch shear forces.
                  </p>
                </div>

                {/* Layer Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setSelectedLayerType('paint')}
                    className={`px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all border ${
                      selectedLayerType === 'paint' 
                        ? 'bg-gray-900 border-red-600 text-white' 
                        : 'bg-black border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    Unprotected Factory Paint
                  </button>
                  <button 
                    onClick={() => setSelectedLayerType('ceramic')}
                    className={`px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all border ${
                      selectedLayerType === 'ceramic' 
                        ? 'bg-gray-900 border-red-600 text-red-500' 
                        : 'bg-black border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    + 9H Ceramic Layer
                  </button>
                  <button 
                    onClick={() => setSelectedLayerType('ppf')}
                    className={`px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all border ${
                      selectedLayerType === 'ppf' 
                        ? 'bg-gray-900 border-red-600 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                        : 'bg-black border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    + TPU Armor PPF Wrap
                  </button>
                </div>

                {/* Specs Box */}
                <div className="p-6 bg-black border border-gray-800 rounded-xl space-y-3">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-xs text-gray-500">Thickness (Added)</span>
                    <span className="text-xs font-bold text-white">
                      {selectedLayerType === 'paint' && '0 Microns'}
                      {selectedLayerType === 'ceramic' && '2 - 3 Microns'}
                      {selectedLayerType === 'ppf' && '180 - 200 Microns'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-xs text-gray-500">Scratch Resistance Rating</span>
                    <span className="text-xs font-bold text-white">
                      {selectedLayerType === 'paint' && '2H Hardness (Dull Swirls)'}
                      {selectedLayerType === 'ceramic' && '9H Chemical Hardness'}
                      {selectedLayerType === 'ppf' && 'Self-Healing TPU Matrix'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Protection Longevity</span>
                    <span className="text-xs font-bold text-white">
                      {selectedLayerType === 'paint' && 'Rapid Oxidation'}
                      {selectedLayerType === 'ceramic' && '3 - 5 Years Shield'}
                      {selectedLayerType === 'ppf' && '7 - 10 Years Armored'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Diagram */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                
                {/* Visual Layers Stack */}
                <div className="space-y-2 border border-gray-800 p-6 bg-black relative">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-500 mb-4">Cross Section Diagram</h4>
                  
                  {/* Selected Protection Layer */}
                  {selectedLayerType === 'ppf' && (
                    <div className="bg-red-950/60 border border-red-500 text-red-500 p-4 font-bold text-center text-xs uppercase tracking-widest animate-pulse relative">
                      TPU Self-Healing Shield (200μm Wrap)
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 text-black px-2 py-0.5 text-[9px] font-black">ACTIVE</span>
                    </div>
                  )}

                  {selectedLayerType === 'ceramic' && (
                    <div className="bg-gradient-to-r from-red-800 to-red-600 border border-red-400 text-white p-3 font-bold text-center text-xs uppercase tracking-widest animate-pulse relative">
                      9H Liquid Glass Ceramic (3μm Bond)
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-0.5 text-[9px] font-black">ACTIVE</span>
                    </div>
                  )}

                  {/* Standard paint clear coat */}
                  <div className="bg-gray-800/80 border border-gray-700 text-gray-300 p-3 text-center text-xs font-bold uppercase">
                    Factory Clear Coat (35μm Acrylic)
                  </div>

                  {/* Base Color paint */}
                  <div className="bg-red-800/30 border border-red-900 text-red-400 p-3 text-center text-xs font-bold uppercase">
                    Base Paint Color Coat (15μm Color)
                  </div>

                  {/* Steel Metal Body */}
                  <div className="bg-gray-900 border border-gray-800 text-gray-500 p-4 text-center text-xs font-bold uppercase">
                    Steel / Carbon Fiber Body Panel
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2.5 text-xs text-gray-500 px-2">
                  <Info className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p>
                    Diagram displays thickness relative scaling. Our studio in Banjara Hills tests clear coat thickness using ultrasonic scanners before compounding.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER GALLERY */}
      <section id="before-after" className="py-24 bg-[#111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 uppercase font-black tracking-widest text-xs">Transformations</span>
            <h2 className="text-4xl font-extrabold text-white uppercase italic">Swirl Defeat & Gloss Victory</h2>
            <p className="text-gray-400 text-sm">
              Use your finger or mouse to slide the center bar. Compare the sun-bleached, swirled black clear coat of a performance car versus our multi-stage corrected, ceramic-sealed finish.
            </p>
          </div>

          {/* Slider Container */}
          <div className="max-w-3xl mx-auto relative">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[400px] overflow-hidden border border-red-500/20 select-none cursor-ew-resize shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              
              {/* After Image (Background) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}
              >
                <div className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-lg">
                  After: 3-Stage Corrected + Ceramic
                </div>
              </div>

              {/* Before Image (Foreground overlay) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-75"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                  width: `${sliderPosition}%`,
                  filter: 'contrast(1.1) brightness(75%) grayscale(30%)'
                }}
              >
                <div className="absolute bottom-6 left-6 bg-black text-white border border-gray-800 px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Before: Heavy Swirls & Grime
                </div>
              </div>

              {/* Slider Divider bar */}
              <div 
                className="absolute top-0 bottom-0 w-[4px] bg-red-600 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handler circle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-red-500 flex items-center justify-center shadow-lg text-red-500">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
              </div>

            </div>

            <div className="text-center mt-4 text-xs text-gray-500">
              <span>Drag or swipe left/right across the surface panel to verify the reflection quality</span>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING PACKAGES SECTION */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 uppercase font-black tracking-widest text-xs">Premium Tariff</span>
            <h2 className="text-4xl font-extrabold text-white uppercase italic">Investment Options For Paint Protection</h2>
            <p className="text-gray-400 text-sm">
              All detailing operations include paint depth inspection and mechanical decontamination. No hidden charges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            {/* Package 1 */}
            <div 
              className="bg-[#141414] border border-gray-800 p-8 flex flex-col justify-between hover:border-red-600/40 transition-all"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              <div>
                <span className="text-xs uppercase font-extrabold text-gray-500">Entry Detail</span>
                <h3 className="text-xl font-bold uppercase italic text-white mt-1">Stage 1 + Wax Seal</h3>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-white">₹7,999</span>
                  <span className="text-xs text-gray-500 ml-2">/ Coupe</span>
                </div>
                <p className="text-xs text-gray-400 mt-4">Restores depth and removes light scratching. Sealed with dual layer SiO2 hybrid wax.</p>
                
                <div className="mt-8 border-t border-gray-800 pt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>Single-stage paint correction</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>SiO2 wax mirror sealant</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>Full interior vacuum & sanitize</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 line-through">
                    <span>Multi-stage compounding</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 line-through">
                    <span>9H Permanent Glass Coating</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-black hover:bg-gray-900 border border-gray-800 rounded-xl transition-all">
                  Request Quote
                </a>
              </div>
            </div>

            {/* Package 2 */}
            <div 
              className="bg-[#1a1a1a] border-2 border-red-600 p-8 flex flex-col justify-between relative shadow-[0_0_35px_rgba(239,68,68,0.15)]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5">
                Mafia Choice
              </div>
              
              <div>
                <span className="text-xs uppercase font-extrabold text-red-500">High-End Shield</span>
                <h3 className="text-xl font-bold uppercase italic text-white mt-1">9H Ceramic Pro Lab</h3>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-black text-white">₹19,999</span>
                  <span className="text-xs text-red-500 ml-2">/ Sedan</span>
                </div>
                <p className="text-xs text-gray-400 mt-4">Full paint correction decontaminating deep swirl marks. Protected by our premium 5-Year 9H ceramic matrix.</p>
                
                <div className="mt-8 border-t border-gray-800 pt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>3-Stage paint decontamination</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>Dual-stage paint refinement correction</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>5-Year certified 9H ceramic coating</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>Alloy rim coating shield</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>5 Years written warranty card</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="block w-full py-4 text-center text-xs font-black text-white bg-red-600 hover:bg-red-700 transition-all">
                  Request Pro Quote
                </a>
              </div>
            </div>

            {/* Package 3 */}
            <div 
              className="bg-[#141414] border border-gray-800 p-8 flex flex-col justify-between hover:border-red-600/40 transition-all"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
            >
              <div>
                <span className="text-xs uppercase font-extrabold text-gray-500">Armored Wrap</span>
                <h3 className="text-xl font-bold uppercase italic text-white mt-1">Armored TPU PPF</h3>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-white">₹1,15,000</span>
                  <span className="text-xs text-gray-500 ml-2">/ Sedan</span>
                </div>
                <p className="text-xs text-gray-400 mt-4">Heavy urethane film wrapping the complete vehicle paint. Invisible shield against rock chip debris.</p>
                
                <div className="mt-8 border-t border-gray-800 pt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>200 Micron heavy TPU self-heal film</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>Complete custom-fit edge wrapping</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>Self-healing heat matrix layer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" /> <span>10 Years written warranty against yellowing</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-black hover:bg-gray-900 border border-gray-800 rounded-xl transition-all">
                  Request PPF Quote
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 uppercase font-black tracking-widest text-xs">Mafia Crew reviews</span>
            <h2 className="text-4xl font-extrabold text-white uppercase italic">Elite Client Testimonials</h2>
            <p className="text-gray-400 text-sm">
              Read how vehicle owners in Hyderabad experience our detailing studio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#141414] border border-gray-800 p-8 relative">
              <div className="flex items-center gap-1 text-red-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
                "The paint correction they did on my Porsche Cayenne was flawless. Swirl marks from years of daily dusting in Banjara Hills are 100% gone. Sealed it with the 9H Ceramic. Worth every rupee."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sanjay K.</h4>
                  <p className="text-xs text-gray-500">Porsche Cayenne Owner • Banjara Hills</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#141414] border border-gray-800 p-8 relative">
              <div className="flex items-center gap-1 text-red-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
                "Got my luxury sedan wrapped in their X-Shield Pro PPF. Last week, a bike scraped my bumper in traffic. I poured warm water on it as instructed, and the scrape literally vanished in seconds! Mind-blowing tech."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Madhav Reddy</h4>
                  <p className="text-xs text-gray-500">Mercedes E-Class Owner • Jubilee Hills</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#141414] border border-gray-800 p-8 relative">
              <div className="flex items-center gap-1 text-red-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
                "Extremely professional lab. They measured clear coat density on my vintage Jaguar before polishing. That level of detailing craft is rare in Hyderabad. Absolutely trust them with premium cars."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Aditya Sen</h4>
                  <p className="text-xs text-gray-500">Jaguar XJ Owner • Road No 10, Banjara Hills</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-red-500 uppercase font-black tracking-widest text-xs">Mafia FAQ</span>
            <h2 className="text-4xl font-extrabold text-white uppercase italic">Detalled Answers</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#141414] border border-gray-800 rounded-lg overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-white hover:bg-gray-900 transition-all"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-red-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="p-6 pt-0 border-t border-gray-800 text-sm text-gray-400 leading-relaxed bg-[#0d0d0d]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & BOOKING FORM SECTION */}
      <section id="contact" className="py-24 bg-[#111] border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-red-500 uppercase font-black tracking-widest text-xs block mb-2">Detalling Lab Booking</span>
                <h2 className="text-4xl font-extrabold text-white uppercase italic">Enter the Detailing Bay</h2>
                <p className="text-gray-400 text-sm mt-3">
                  Schedule your consultation or paint assessment below. Our lead detailer in Banjara Hills will review your car's model and confirm the schedule details.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-950/40 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold">Studio Phone</span>
                    <span className="block font-bold text-white text-base">+91 91234 56789</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-950/40 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold">Studio Email</span>
                    <span className="block font-bold text-white text-base">banjara@detailingmafia.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-950/40 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold">Lab Location</span>
                    <span className="block font-bold text-white text-sm">
                      Road No. 12, Banjara Hills, near Jagannath Temple, Hyderabad, 500034
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulated Map Visual */}
              <div className="border border-gray-800 rounded-3xl overflow-hidden h-64 bg-black relative shadow-lg">
                <div className="absolute inset-0 bg-[#141414]/80 flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <MapPin className="w-10 h-10 text-red-500 mx-auto animate-bounce" />
                    <span className="block text-sm font-bold text-white">Banjara Hills Detailing Lab Map</span>
                    <span className="block text-xs text-gray-500 max-w-xs mx-auto">
                      Easily accessible via Road No. 12 and Jubilee Hills Checkpost. Private secured parking inside the premises.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/5 rounded-3xl filter blur-xl pointer-events-none"></div>
              
              <div 
                className="relative bg-[#141414] border-2 border-red-600/20 p-8 md:p-10 shadow-2xl"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)' }}
              >
                
                {formSubmitted ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="w-20 h-20 bg-red-950 border-2 border-red-500 rounded-full flex items-center justify-center mx-auto text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-white uppercase italic">Assessment Logged!</h3>
                      <p className="text-sm text-gray-400 max-w-sm mx-auto">
                        Hi {formData.name}, your paint consultation request for {formData.carModel || 'your vehicle'} is logged. Our lead compounder will call you at {formData.phone} today.
                      </p>
                    </div>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 bg-black border border-gray-800 hover:border-red-600 text-white font-bold rounded-xl text-xs uppercase transition-all"
                    >
                      Log Another Vehicle
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-gray-800 pb-4 uppercase italic">
                      Request Paint Assessment
                    </h3>
                    
                    <div className="space-y-2">
                      <label className="text-xs uppercase text-gray-500 font-bold block">Owner Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Vikramaditya Reddy"
                        className="w-full bg-black border border-gray-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase text-gray-500 font-bold block">Mobile Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. +91 99000 XXXXX"
                        className="w-full bg-black border border-gray-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs uppercase text-gray-500 font-bold block">Car Model</label>
                        <input 
                          type="text" 
                          name="carModel" 
                          value={formData.carModel}
                          onChange={handleFormChange}
                          placeholder="e.g. Porsche 911"
                          className="w-full bg-black border border-gray-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase text-gray-500 font-bold block">Booking Date</label>
                        <input 
                          type="date" 
                          name="date" 
                          value={formData.date}
                          onChange={handleFormChange}
                          className="w-full bg-black border border-gray-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase text-gray-500 font-bold block">Detailing Service</label>
                      <select 
                        name="service" 
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full bg-black border border-gray-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      >
                        <option value="Paint Correction & Ceramic">Paint Correction + Ceramic Coating (from ₹19,999)</option>
                        <option value="Self-Healing TPU PPF">Self-Healing TPU PPF (from ₹1,15,000)</option>
                        <option value="Stage 1 Polish & Wax">Stage 1 Paint Refinement + Wax (from ₹7,999)</option>
                        <option value="Custom Restoration">Custom Multi-Day Restoration Project</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase text-gray-500 font-bold block">Vehicle Paint State / Imperfections</label>
                      <textarea 
                        name="message" 
                        rows="3"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Mention deep scratches, acid stains, swirl levels, or previous wraps..."
                        className="w-full bg-black border border-gray-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all uppercase tracking-wider text-sm"
                      style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
                    >
                      Book Free Paint Analysis
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold rotate-45 border border-red-500/20">
                <Flame className="-rotate-45 w-4 h-4" />
              </div>
              <span className="font-extrabold text-white">The Detailing Mafia Banjara Hills</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#visualizer" className="hover:text-white transition-colors">Armor Visualizer</a>
              <a href="#pricing" className="hover:text-white transition-colors">Packages</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div>
              <p>© 2026 The Detailing Mafia. Certified Detailing Hub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

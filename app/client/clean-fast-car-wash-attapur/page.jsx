"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Droplet, 
  Sparkles, 
  Clock, 
  Shield, 
  Car, 
  Check, 
  Star, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Zap, 
  Award, 
  CheckCircle, 
  Info,
  Smartphone,
  Gauge
} from 'lucide-react';

export default function CleanFastCarWash() {
  // Calculator state
  const [washesPerMonth, setWashesPerMonth] = useState(4);
  const waterSavedPerWash = 150; // Liters
  const timeSavedPerWash = 45; // Minutes
  const carbonOffsetPerWash = 1.2; // kg of CO2 saved (by not driving to distant traditional bays/water pump runtimes)

  const totalWaterSaved = washesPerMonth * waterSavedPerWash * 12;
  const totalTimeSaved = washesPerMonth * timeSavedPerWash;
  const totalCarbonSaved = (washesPerMonth * carbonOffsetPerWash * 12).toFixed(1);

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
      q: "Does waterless detailing scratch my car's paint?",
      a: "Absolutely not. Our formula utilizes advanced polymers that encapsulate dirt particles, lifting them away from the surface. We use ultra-premium 420GSM microfiber towels, wiping in a single direction to ensure a completely scratch-free, high-gloss finish."
    },
    {
      q: "How fast is your express gloss service?",
      a: "Our signature Clean & Fast wash takes exactly 20-25 minutes. We deploy a coordinated two-detailer crew to handle your vehicle concurrently, getting you back on the Attapur road in record time."
    },
    {
      q: "What eco-friendly chemicals do you use?",
      a: "We use biodegradable, plant-based surfactants and high-tech hydrophobic polymers. They contain zero VOCs, zero harsh petroleum distillates, and require less than 1 liter of water per vehicle."
    },
    {
      q: "Where exactly are you located in Attapur?",
      a: "Our premium detailing bay is conveniently situated on the Attapur Main Road, right near Pillar 118, opposite the RTA office, Hyderabad. We also offer premium doorstep services across Attapur."
    },
    {
      q: "How long does the Ceramic Coating last?",
      a: "Our Nano-Ceramic coatings come with a 3-Year or 5-Year warranty, depending on the package you choose. It provides permanent hydrophobic protection, scratch resistance, and an incredible mirror gloss."
    }
  ];

  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: 'Eco Wash & Gloss',
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
      alert("Please fill in your name and phone number.");
      return;
    }
    setFormSubmitted(true);
  };

  // Pricing Package Active Tab
  const [pricingCategory, setPricingCategory] = useState('wash'); // 'wash', 'ceramic', 'ppf'

  return (
    <div className="min-h-screen bg-[#031114] text-[#e2f1f5] font-sans selection:bg-[#00f5ff]/30 selection:text-white overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00f5ff]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[800px] right-20 w-80 h-80 bg-[#10b981]/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-cyan-950/20 rounded-full filter blur-[130px] pointer-events-none"></div>

      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#031114]/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00f5ff] to-[#10b981] flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.3)]">
                <Zap className="text-[#031114] w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight text-white block">
                  CLEAN<span className="text-[#00f5ff]">&</span>FAST
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#10b981] font-bold block -mt-1">
                  Eco Detailing • Attapur
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-[#c0dce3] hover:text-[#00f5ff] transition-all">Services</a>
              <a href="#calculator" className="text-sm font-medium text-[#c0dce3] hover:text-[#00f5ff] transition-all">Eco Impact</a>
              <a href="#before-after" className="text-sm font-medium text-[#c0dce3] hover:text-[#00f5ff] transition-all">Gallery</a>
              <a href="#pricing" className="text-sm font-medium text-[#c0dce3] hover:text-[#00f5ff] transition-all">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-[#c0dce3] hover:text-[#00f5ff] transition-all">FAQ</a>
            </div>

            {/* CTA Button */}
            <div>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-[#031114] bg-gradient-to-r from-[#00f5ff] to-[#10b981] hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] transition-all transform active:scale-95"
              >
                Book Express Wash
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 md:py-32 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-[#00f5ff]/20 text-[#00f5ff] text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                Waterless Nano-Tech Detailing Hub
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                Ultimate Shine. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#10b981] to-[#00f5ff] bg-size-200">
                  Zero Water Waste.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-[#afd1d9] max-w-xl leading-relaxed">
                Experience Attapur’s premier high-speed detailing studio. Our advanced waterless polymer encapsulation technology lifts grime instantly, leaving a mirror-gloss protective shield in under 20 minutes.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] font-black rounded-2xl shadow-[0_4px_20px_rgba(0,245,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,245,255,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  Book In 60 Seconds
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </a>
                <a 
                  href="#calculator" 
                  className="px-8 py-4 bg-[#052227] hover:bg-[#08343c] border border-cyan-500/20 text-[#00f5ff] font-bold rounded-2xl transition-all"
                >
                  Calculate Eco Savings
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-cyan-500/10 max-w-lg">
                <div>
                  <h4 className="text-2xl font-black text-white">20 Mins</h4>
                  <p className="text-xs text-[#8ab5be]">Average Turnaround</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">10k+ Liters</h4>
                  <p className="text-xs text-[#8ab5be]">Fresh Water Saved</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">4.9/5 ★</h4>
                  <p className="text-xs text-[#8ab5be]">Google Review Rating</p>
                </div>
              </div>
            </div>

            {/* Right Graphic Panel */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f5ff]/20 to-[#10b981]/20 rounded-[2rem] filter blur-2xl transform rotate-3 scale-105 pointer-events-none"></div>
              
              <div className="relative bg-[#051e22]/90 border border-cyan-500/20 p-8 rounded-[2rem] shadow-2xl backdrop-blur-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff4a4a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffb74a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[#00f5ff] uppercase bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/20">
                    Live Diagnostics
                  </span>
                </div>

                {/* Animated Graphic representation of Car polish reflection */}
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/10 flex items-start gap-4">
                    <div className="p-3 bg-[#031114] rounded-xl text-[#00f5ff] border border-[#00f5ff]/20">
                      <Gauge className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Polymer Wax Shell</h4>
                      <p className="text-xs text-[#8ab5be] mt-1">High-tech liquid polymers create a scratch-resistant seal that deflects dirt and mud.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/10 flex items-start gap-4">
                    <div className="p-3 bg-[#031114] rounded-xl text-[#10b981] border border-[#10b981]/20">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Ultra-Gloss Reflective Tech</h4>
                      <p className="text-xs text-[#8ab5be] mt-1">Achieve up to 98% mirror reflection scores without standard abrasive compounds.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/10 flex items-start gap-4">
                    <div className="p-3 bg-[#031114] rounded-xl text-[#00f5ff] border border-[#00f5ff]/20">
                      <Droplet className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Zero Waste Waterless</h4>
                      <p className="text-xs text-[#8ab5be] mt-1">Save 150L of water per wash. Safe for paint, environmentally clean, premium shine.</p>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#10b981] to-[#00f5ff] p-[1px] rounded-2xl shadow-xl hidden sm:block">
                  <div className="bg-[#031114] px-5 py-4 rounded-[15px] flex items-center gap-3">
                    <Award className="w-8 h-8 text-[#00f5ff]" />
                    <div>
                      <span className="block text-[10px] uppercase text-[#8ab5be] font-bold">certified tech</span>
                      <span className="block font-black text-white text-sm">ECO-GLOSS PRO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#051e22]/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00f5ff] uppercase font-bold text-xs tracking-[0.2em]">Our Services</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">High-Speed Professional Car Care</h2>
            <p className="text-[#8ab5be] text-base">
              Explore our range of premium auto care treatments executed with chemical precision, zero-waste principles, and absolute speed.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="group relative bg-[#031114] border border-cyan-500/10 hover:border-[#00f5ff]/40 p-8 rounded-3xl transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f5ff]/5 rounded-bl-[50px] pointer-events-none group-hover:bg-[#00f5ff]/10 transition-all"></div>
              <div className="w-14 h-14 bg-cyan-950/80 rounded-2xl flex items-center justify-center border border-cyan-500/20 text-[#00f5ff] mb-6 group-hover:scale-110 transition-all">
                <Droplet className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f5ff] transition-all">Eco Waterless Detail</h3>
              <p className="text-sm text-[#8ab5be] leading-relaxed mb-6">
                Premium polymer-wash encapsulates and removes surface dirt safely. Includes alloy wipe down, tire dressing, and interior vacuum. Done in 20 minutes.
              </p>
              <ul className="space-y-2.5 text-xs text-[#afd1d9] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981] stroke-[3]" /> Polymer scratch-free wiping
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981] stroke-[3]" /> Hydrophobic wax booster
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981] stroke-[3]" /> Microfiber premium hand dry
                </li>
              </ul>
              <a href="#contact" className="text-xs font-bold text-[#00f5ff] flex items-center gap-2 hover:underline">
                Book Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-[#031114] border border-cyan-500/10 hover:border-[#10b981]/40 p-8 rounded-3xl transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#10b981]/5 rounded-bl-[50px] pointer-events-none group-hover:bg-[#10b981]/10 transition-all"></div>
              <div className="w-14 h-14 bg-cyan-950/80 rounded-2xl flex items-center justify-center border border-[#10b981]/20 text-[#10b981] mb-6 group-hover:scale-110 transition-all">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#10b981] transition-all">Rapid Mirror Gloss</h3>
              <p className="text-sm text-[#8ab5be] leading-relaxed mb-6">
                A dual-stage clean combined with light paint refinement. We eliminate minor swirl marks and apply a deep hybrid SiO2 wax for a brilliant liquid reflection.
              </p>
              <ul className="space-y-2.5 text-xs text-[#afd1d9] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00f5ff] stroke-[3]" /> Light oxidation removal
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00f5ff] stroke-[3]" /> SiO2 Ceramic wax sealant
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00f5ff] stroke-[3]" /> 3 Months premium glow
                </li>
              </ul>
              <a href="#contact" className="text-xs font-bold text-[#10b981] flex items-center gap-2 hover:underline">
                Book Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-[#031114] border border-cyan-500/10 hover:border-[#00f5ff]/40 p-8 rounded-3xl transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f5ff]/5 rounded-bl-[50px] pointer-events-none group-hover:bg-[#00f5ff]/10 transition-all"></div>
              <div className="w-14 h-14 bg-cyan-950/80 rounded-2xl flex items-center justify-center border border-cyan-500/20 text-[#00f5ff] mb-6 group-hover:scale-110 transition-all">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f5ff] transition-all">9H Nano Ceramic Shield</h3>
              <p className="text-sm text-[#8ab5be] leading-relaxed mb-6">
                Multi-layer ceramic coating for long term hardness and paint protection against Attapur traffic dust, UV rays, chemical stains, and acid rain.
              </p>
              <ul className="space-y-2.5 text-xs text-[#afd1d9] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981] stroke-[3]" /> 9H hardness rating certified
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981] stroke-[3]" /> Super hydrophobic water sheeting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981] stroke-[3]" /> Up to 5 years guaranteed warranty
                </li>
              </ul>
              <a href="#contact" className="text-xs font-bold text-[#00f5ff] flex items-center gap-2 hover:underline">
                Book Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SIGNATURE ECO CALCULATOR SECTION */}
      <section id="calculator" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#051e22] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#00f5ff]/5 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: text & slider */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-[#10b981] uppercase font-bold text-xs tracking-[0.2em] block mb-2">Signature Tech</span>
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                    Calculate Your Ecological & Time Savings
                  </h2>
                  <p className="text-[#8ab5be] text-sm mt-3">
                    Did you know? Traditional water-pump car washes consume over 150 liters of fresh drinking water per vehicle. Toggle the slider below to see the yearly conservation value you bring to Hyderabad by going waterless with Clean & Fast.
                  </p>
                </div>

                {/* Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-[#afd1d9]">Washes Per Month</span>
                    <span className="font-black text-[#00f5ff] text-2xl bg-cyan-950 px-4 py-1.5 rounded-xl border border-cyan-500/20">
                      {washesPerMonth} Washes
                    </span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={washesPerMonth}
                    onChange={(e) => setWashesPerMonth(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-cyan-950 rounded-lg appearance-none cursor-pointer accent-[#00f5ff] border border-cyan-500/20"
                  />
                  
                  <div className="flex justify-between text-xs text-[#8ab5be]">
                    <span>1 Wash (Casual)</span>
                    <span>6 Washes (Regular)</span>
                    <span>12 Washes (Showroom Maintenance)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/10 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#00f5ff] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#8ab5be]">
                    Our calculations are based on standard luxury sedan washes compared to water meter flows measured in standard Attapur servicing stations.
                  </p>
                </div>
              </div>

              {/* Right Column: Savings Counter Dashboard */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                
                {/* Stat 1 */}
                <div className="bg-[#031114]/80 border border-cyan-500/10 p-6 rounded-2xl flex items-center gap-5 relative group hover:border-[#00f5ff]/30 transition-all">
                  <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center text-[#00f5ff] border border-cyan-500/20 shrink-0">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#8ab5be]">Water Saved / Year</span>
                    <span className="block text-2xl font-black text-white mt-1">
                      {totalWaterSaved.toLocaleString()} Liters
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-[#031114]/80 border border-cyan-500/10 p-6 rounded-2xl flex items-center gap-5 relative group hover:border-[#10b981]/30 transition-all">
                  <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center text-[#10b981] border border-emerald-500/20 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#8ab5be]">Time Recovered / Year</span>
                    <span className="block text-2xl font-black text-white mt-1">
                      {totalTimeSaved} Hours
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-[#031114]/80 border border-cyan-500/10 p-6 rounded-2xl flex items-center gap-5 relative group hover:border-[#00f5ff]/30 transition-all">
                  <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center text-[#00f5ff] border border-cyan-500/20 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#8ab5be]">CO2 Footprint Reduced</span>
                    <span className="block text-2xl font-black text-white mt-1">
                      {totalCarbonSaved} kg CO₂
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER INTERACTIVE SLIDER GALLERY */}
      <section id="before-after" className="py-24 bg-[#051e22]/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#10b981] uppercase font-bold text-xs tracking-[0.2em]">Visual Evidence</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Witness The Gloss Transformation</h2>
            <p className="text-[#8ab5be] text-sm">
              Drag the center slider handles left or right to compare a daily commuter car coated in heavy Attapur traffic grime versus our premium 20-minute polymer gloss finish.
            </p>
          </div>

          {/* Interactive Slider Container */}
          <div className="max-w-3xl mx-auto relative">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[400px] rounded-[2rem] overflow-hidden border border-cyan-500/20 select-none cursor-ew-resize shadow-2xl"
            >
              
              {/* After Image (Background) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}
              >
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#00f5ff]/80 to-[#10b981]/80 text-[#031114] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg">
                  After: Clean & Fast Ultra Gloss
                </div>
              </div>

              {/* Before Image (Foreground overlay) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-75"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                  width: `${sliderPosition}%`,
                  filter: 'grayscale(20%) brightness(80%) contrast(90%)'
                }}
              >
                <div className="absolute bottom-6 left-6 bg-[#031114]/90 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Before: Dull & Grimy Paint
                </div>
              </div>

              {/* Slider Divider bar */}
              <div 
                className="absolute top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#00f5ff] to-[#10b981] cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handler circle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#031114] border-2 border-[#00f5ff] flex items-center justify-center shadow-lg text-[#00f5ff]">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
              </div>

            </div>

            {/* Mobile swipe help text */}
            <div className="text-center mt-4 text-xs text-[#8ab5be] flex items-center justify-center gap-2">
              <Smartphone className="w-4 h-4 md:hidden text-[#00f5ff]" />
              <span>Tap and slide across the image to explore</span>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING PACKAGES SECTION */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00f5ff] uppercase font-bold text-xs tracking-[0.2em]">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Detailing Packages For Every Car</h2>
            <p className="text-[#8ab5be] text-sm">
              Choose the level of defense and shine your vehicle requires. No hidden costs. Fixed pricing.
            </p>

            {/* Toggle tabs */}
            <div className="inline-flex p-1 bg-[#051e22] border border-cyan-500/20 rounded-2xl mt-6">
              <button 
                onClick={() => setPricingCategory('wash')}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                  pricingCategory === 'wash' ? 'bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] shadow-md' : 'text-[#afd1d9] hover:text-white'
                }`}
              >
                Express Washes
              </button>
              <button 
                onClick={() => setPricingCategory('ceramic')}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                  pricingCategory === 'ceramic' ? 'bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] shadow-md' : 'text-[#afd1d9] hover:text-white'
                }`}
              >
                Ceramic Coating
              </button>
              <button 
                onClick={() => setPricingCategory('ppf')}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                  pricingCategory === 'ppf' ? 'bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] shadow-md' : 'text-[#afd1d9] hover:text-white'
                }`}
              >
                PPF (Paint Wrap)
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            {pricingCategory === 'wash' && (
              <>
                {/* Wash 1 */}
                <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#8ab5be] uppercase">Eco Basic Wash</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">₹499</span>
                      <span className="text-xs text-[#8ab5be] ml-2">/ Hatchback</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Rapid polymer waterless exterior wash and deep tire shine treatment.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Polymer Waterless Spray Wash</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Microfiber scratch-free wipe down</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Tire cleaning & premium dressing</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#8ab5be] line-through">
                        <span>Interior deep vacuuming</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/20 rounded-xl transition-all">
                      Choose Eco Basic
                    </a>
                  </div>
                </div>

                {/* Wash 2 */}
                <div className="bg-[#051e22] border-2 border-[#00f5ff] p-8 rounded-3xl flex flex-col justify-between relative shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase">Express Pro Gloss</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-black text-white">₹999</span>
                      <span className="text-xs text-[#00f5ff] ml-2">/ Sedan</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Full eco wash, glass detail, mirror gloss polish, and interior deep vacuuming.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Polymer Scratch-Free Wash</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Tire polish & Alloy scrub</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>SiO2 gloss enhancer polish</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Interior deep vacuum & sanitize</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Windshield treatment & glaze</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-4 text-center text-xs font-black text-[#031114] bg-gradient-to-r from-[#00f5ff] to-[#10b981] rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all">
                      Choose Express Pro
                    </a>
                  </div>
                </div>

                {/* Wash 3 */}
                <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#8ab5be] uppercase">Full Interior Purge</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">₹1,499</span>
                      <span className="text-xs text-[#8ab5be] ml-2">/ SUV</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Intense interior shampooing, steam sanitization, leather dressing, and AC vent disinfection.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Eco exterior wash included</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>AC Vent steam disinfection</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Dashboard & Door pad scrub</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Premium leather conditioning</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/20 rounded-xl transition-all">
                      Choose Interior Purge
                    </a>
                  </div>
                </div>
              </>
            )}

            {pricingCategory === 'ceramic' && (
              <>
                {/* Ceramic 1 */}
                <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#8ab5be] uppercase">3-Year Gold Shield</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">₹14,999</span>
                      <span className="text-xs text-[#8ab5be] ml-2">/ Sedan</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Dual-stage paint correction and premium 3-Year 9H coating. Extreme water sheeting.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Dual-stage paint correction</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>9H hardness nano-ceramic coat</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>3 Years warranty certificate</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>1 Free maintenance checkup</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/20 rounded-xl transition-all">
                      Book Gold Shield
                    </a>
                  </div>
                </div>

                {/* Ceramic 2 */}
                <div className="bg-[#051e22] border-2 border-[#10b981] p-8 rounded-3xl flex flex-col justify-between relative shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#10b981] to-[#00f5ff] text-[#031114] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
                    Best Protection
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase">5-Year Platinum</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-black text-white">₹24,999</span>
                      <span className="text-xs text-[#10b981] ml-2">/ Sedan</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Three-stage paint correction, double-layer 9H protection, alloy, and glass ceramic coating.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#10b981]" /> <span>Three-stage compounding paint correction</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#10b981]" /> <span>Double layer 9H Nano-ceramic paint coating</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#10b981]" /> <span>Alloy & caliper ceramic shield</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#10b981]" /> <span>Glass hydrophobic wind shield coating</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#10b981]" /> <span>5 Years written warranty & card</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-4 text-center text-xs font-black text-[#031114] bg-gradient-to-r from-[#10b981] to-[#00f5ff] rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                      Book Platinum
                    </a>
                  </div>
                </div>

                {/* Ceramic 3 */}
                <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#8ab5be] uppercase">Matte Ceramic Guard</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">₹28,000</span>
                      <span className="text-xs text-[#8ab5be] ml-2">/ SUV</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Specialized coatings for matte and satin finishes. Preserves the original flat look with deep saturation.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Matte paint-safe compounds</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Sheen-free ceramic polymers</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>4 Years matte paint warranty</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/20 rounded-xl transition-all">
                      Book Matte Guard
                    </a>
                  </div>
                </div>
              </>
            )}

            {pricingCategory === 'ppf' && (
              <>
                {/* PPF 1 */}
                <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#8ab5be] uppercase">TPU Self-Healing Lite</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">₹85,000</span>
                      <span className="text-xs text-[#8ab5be] ml-2">/ Hatchback</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">160-micron TPU film providing excellent chip resistance and basic self-healing properties.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>160 Micron TPU Shield</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Self-healing with heat/hot water</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>3 Years warranty against yellowing</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/20 rounded-xl transition-all">
                      Book TPU Lite
                    </a>
                  </div>
                </div>

                {/* PPF 2 */}
                <div className="bg-[#051e22] border-2 border-[#00f5ff] p-8 rounded-3xl flex flex-col justify-between relative shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
                    Ultimate Shield
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase">X-Shield Armor Pro</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-black text-white">₹1,35,000</span>
                      <span className="text-xs text-[#00f5ff] ml-2">/ Sedan</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">200-micron premium TPU. Extreme puncture resistance, instant self-healing, and lifetime gloss glaze.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>200 Micron heavy armor TPU film</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Instant self-healing (scratches disappear)</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Super hydrophobic stain-proof top layer</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>7 Years written warranty</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-4 text-center text-xs font-black text-[#031114] bg-gradient-to-r from-[#00f5ff] to-[#10b981] rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all">
                      Book X-Shield Pro
                    </a>
                  </div>
                </div>

                {/* PPF 3 */}
                <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#8ab5be] uppercase">Satin Stealth Wrap</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">₹1,50,000</span>
                      <span className="text-xs text-[#8ab5be] ml-2">/ Sedan</span>
                    </div>
                    <p className="text-xs text-[#8ab5be] mt-3">Transforms glossy paint into a gorgeous matte satin finish, while providing full armored protection.</p>
                    <div className="mt-8 border-t border-cyan-500/10 pt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Satin-finish heavy TPU film</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>Converts gloss to matte satin look</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-[#00f5ff]" /> <span>7 Years warranty against lifting/bubbling</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="block w-full py-3 text-center text-xs font-bold text-white bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/20 rounded-xl transition-all">
                      Book Stealth Wrap
                    </a>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#051e22]/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00f5ff] uppercase font-bold text-xs tracking-[0.2em]">Customer Reviews</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Endorsed by Hyderabad Drivers</h2>
            <p className="text-[#8ab5be] text-sm">
              Discover what car owners around Attapur say about our rapid service, eco-friendly approach, and showroom finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl relative">
              <div className="flex items-center gap-1 text-[#00f5ff] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00f5ff]" />
                ))}
              </div>
              <p className="text-[#afd1d9] text-sm italic leading-relaxed mb-6">
                "I was skeptical about a waterless wash at first, thinking it might scratch my brand new Fortuner. But these guys are professionals. The gloss is unbelievable and it was done in 20 minutes while I had tea next door in Attapur! Highly recommended."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#10b981] flex items-center justify-center font-bold text-slate-950">
                  VK
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Vikram K.</h4>
                  <p className="text-xs text-[#8ab5be]">Toyota Fortuner Owner • Attapur</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl relative">
              <div className="flex items-center gap-1 text-[#00f5ff] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00f5ff]" />
                ))}
              </div>
              <p className="text-[#afd1d9] text-sm italic leading-relaxed mb-6">
                "The 9H Platinum ceramic coating they did on my Honda City has been amazing. Dirt just slides right off. With the dust levels on the Ring Road and Attapur traffic, this is a lifesaver. The hydro-beading looks fantastic when it rains!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#10b981] flex items-center justify-center font-bold text-slate-950">
                  AR
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Anirudh Reddy</h4>
                  <p className="text-xs text-[#8ab5be]">Honda City Owner • Hyderguda</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#031114] border border-cyan-500/10 p-8 rounded-3xl relative">
              <div className="flex items-center gap-1 text-[#00f5ff] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00f5ff]" />
                ))}
              </div>
              <p className="text-[#afd1d9] text-sm italic leading-relaxed mb-6">
                "Excellent service! I book their Express Pro gloss wash twice a month. It saves me so much time. They bring their own specialized tools and do everything right in my apartment parking. Truly waterless and extremely clean!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#10b981] flex items-center justify-center font-bold text-slate-950">
                  SR
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Syed Rafiq</h4>
                  <p className="text-xs text-[#8ab5be]">Hyundai Creta Owner • Attapur</p>
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
            <span className="text-[#00f5ff] uppercase font-bold text-xs tracking-[0.2em]">Common Questions</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#051e22]/60 border border-cyan-500/10 rounded-2xl overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-white hover:bg-cyan-950/40 transition-all"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#00f5ff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#00f5ff] shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="p-6 pt-0 border-t border-cyan-500/5 text-sm text-[#afd1d9] leading-relaxed bg-[#031114]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & BOOKING FORM SECTION */}
      <section id="contact" className="py-24 bg-[#051e22]/40 border-t border-cyan-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-[#10b981] uppercase font-bold text-xs tracking-[0.2em] block mb-2">Book Your Visit</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white">Secure Your Detailing Slot</h2>
                <p className="text-[#8ab5be] text-sm mt-3">
                  Schedule your express wash or ceramic treatment today. Enter your details and select a slot. Our service team in Attapur will confirm your booking immediately via WhatsApp.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-950 border border-cyan-500/20 rounded-xl flex items-center justify-center text-[#00f5ff]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#8ab5be] font-bold">Call / WhatsApp Support</span>
                    <span className="block font-black text-white text-base">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-950 border border-cyan-500/20 rounded-xl flex items-center justify-center text-[#00f5ff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#8ab5be] font-bold">Email Detailing Bay</span>
                    <span className="block font-black text-white text-base">wash@cleanfastattapur.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-950 border border-cyan-500/20 rounded-xl flex items-center justify-center text-[#00f5ff]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#8ab5be] font-bold">Detailing Bay Address</span>
                    <span className="block font-black text-white text-sm">
                      Pillar 118, Attapur Main Road, opp. RTA Office, Hyderabad, 500048
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulated Map Visual */}
              <div className="border border-cyan-500/20 rounded-3xl overflow-hidden h-64 bg-[#031114] relative shadow-lg">
                <div className="absolute inset-0 bg-[#041d21]/60 flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <MapPin className="w-10 h-10 text-[#00f5ff] mx-auto animate-bounce" />
                    <span className="block text-sm font-bold text-white">Attapur Detailing Bay Map</span>
                    <span className="block text-xs text-[#8ab5be] max-w-xs mx-auto">
                      Near Ring Road, convenient approach for vehicles coming from Mehdipatnam & Rajendranagar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f5ff]/10 to-[#10b981]/10 rounded-[2.5rem] filter blur-xl pointer-events-none"></div>
              
              <div className="relative bg-[#031114]/95 border border-cyan-500/20 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                
                {formSubmitted ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="w-20 h-20 bg-emerald-950 border-2 border-[#10b981] rounded-full flex items-center justify-center mx-auto text-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-white">Booking Requested!</h3>
                      <p className="text-sm text-[#8ab5be] max-w-sm mx-auto">
                        Hi {formData.name}, we have locked your request for {formData.service}. Our team will reach out to you at {formData.phone} shortly.
                      </p>
                    </div>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 bg-[#052227] hover:bg-[#08343c] border border-cyan-500/20 text-[#00f5ff] font-bold rounded-xl text-xs uppercase transition-all"
                    >
                      New Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-cyan-500/10 pb-4">Request Callback</h3>
                    
                    <div className="space-y-2">
                      <label className="text-xs uppercase text-[#8ab5be] font-bold block">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#051e22]/60 border border-cyan-500/20 focus:border-[#00f5ff] rounded-xl px-4 py-3 text-sm text-white placeholder-cyan-800 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase text-[#8ab5be] font-bold block">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. +91 98765 XXXXX"
                        className="w-full bg-[#051e22]/60 border border-cyan-500/20 focus:border-[#00f5ff] rounded-xl px-4 py-3 text-sm text-white placeholder-cyan-800 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs uppercase text-[#8ab5be] font-bold block">Vehicle Model</label>
                        <input 
                          type="text" 
                          name="carModel" 
                          value={formData.carModel}
                          onChange={handleFormChange}
                          placeholder="e.g. Honda City"
                          className="w-full bg-[#051e22]/60 border border-cyan-500/20 focus:border-[#00f5ff] rounded-xl px-4 py-3 text-sm text-white placeholder-cyan-800 outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase text-[#8ab5be] font-bold block">Preferred Date</label>
                        <input 
                          type="date" 
                          name="date" 
                          value={formData.date}
                          onChange={handleFormChange}
                          className="w-full bg-[#051e22]/60 border border-cyan-500/20 focus:border-[#00f5ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase text-[#8ab5be] font-bold block">Select Detailing Service</label>
                      <select 
                        name="service" 
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full bg-[#051e22] border border-cyan-500/20 focus:border-[#00f5ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      >
                        <option value="Eco Wash & Gloss">Eco Wash & Gloss (₹999)</option>
                        <option value="9H Nano Ceramic Coating">9H Nano Ceramic Coating (from ₹14,999)</option>
                        <option value="Armored PPF Paint Protection">Armored PPF Paint Protection (from ₹85,000)</option>
                        <option value="Full Interior Deep Clean">Full Interior Deep Clean (₹1,499)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase text-[#8ab5be] font-bold block">Special Instructions (Optional)</label>
                      <textarea 
                        name="message" 
                        rows="3"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Mention any specific paint issues or requirements..."
                        className="w-full bg-[#051e22]/60 border border-cyan-500/20 focus:border-[#00f5ff] rounded-xl px-4 py-3 text-sm text-white placeholder-cyan-800 outline-none transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-gradient-to-r from-[#00f5ff] to-[#10b981] text-[#031114] font-black rounded-xl hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] transition-all transform active:scale-[0.98] text-sm uppercase tracking-wider"
                    >
                      Submit Booking Request
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020b0d] border-t border-cyan-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#8ab5be]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#10b981] flex items-center justify-center text-slate-950 font-bold">
                CF
              </div>
              <span className="font-extrabold text-white">Clean & Fast Attapur</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#calculator" className="hover:text-white transition-colors">Eco Calculator</a>
              <a href="#pricing" className="hover:text-white transition-colors">Packages</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div>
              <p>© 2026 Clean & Fast. Premium Detailing Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

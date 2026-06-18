"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Star, 
  Clock, 
  Compass, 
  Loader2, 
  Activity, 
  CheckCircle2, 
  Sliders, 
  Award,
  Shield,
  Zap,
  CheckSquare,
  ChevronRight,
  TrendingUp,
  Percent,
  Search
} from 'lucide-react';

const TREATMENTS = {
  'laser-hair': { name: 'Soprano Ice Platinum Laser', category: 'Hair Reduction', price: 4200, spec: 'Diode+Alex+ND:Yag triple wavelength technology.' },
  'skin-whitening': { name: 'Glutathione & Laser Skin Brightening', category: 'Dermatology', price: 5800, spec: 'Q-Switched Nd:YAG laser with premium skin cocktails.' },
  'prp-hair': { name: 'Autologous Growth Factor Therapy (PRP)', category: 'Hair Restoration', price: 7200, spec: 'Advanced high-concentration double spin centrifugation.' },
  'acne-scar': { name: 'Secret Micro-Needling Fractional RF', category: 'Scar Revision', price: 5200, spec: 'Gold-plated insulated microneedles targeting deep dermis.' },
  'hydrafacial': { name: 'Futuristic Carbon Peel HydraFacial', category: 'Medi-Facial', price: 3500, spec: 'Active charcoal mask combined with high-velocity vortex infusion.' }
};

const AREAS = {
  'face': { name: 'Face & Neck', multiplier: 1.0 },
  'scalp': { name: 'Scalp Area', multiplier: 1.25 },
  'full-arms': { name: 'Full Arms', multiplier: 1.5 },
  'full-legs': { name: 'Full Legs', multiplier: 1.85 },
  'underarms': { name: 'Underarms & Bikini', multiplier: 0.8 }
};

const SESSIONS_OPTIONS = [
  { count: 1, discount: 0, label: 'Single Trial' },
  { count: 3, discount: 0.10, label: '3-Session Pack (10% Off)' },
  { count: 6, discount: 0.20, label: '6-Session Pack (20% Off)' },
  { count: 10, discount: 0.30, label: '10-Session Core (30% Off)' }
];

export default function VcareSkinHairClinic() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState('home');

  // Interactive Estimator States
  const [selectedTreatment, setSelectedTreatment] = useState('laser-hair');
  const [selectedArea, setSelectedArea] = useState('face');
  const [selectedSession, setSelectedSession] = useState(3);

  // Form States
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'morning',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Estimator Calculations
  const treatmentObj = TREATMENTS[selectedTreatment];
  const areaObj = AREAS[selectedArea];
  const sessionObj = SESSIONS_OPTIONS.find(s => s.count === selectedSession) || SESSIONS_OPTIONS[1];

  const baseRate = treatmentObj.price;
  const areaMultiplier = areaObj.multiplier;
  const sessionsCount = sessionObj.count;
  const discountRate = sessionObj.discount;

  const costPerSession = Math.round(baseRate * areaMultiplier);
  const rawSubtotal = costPerSession * sessionsCount;
  const discountAmt = Math.round(rawSubtotal * discountRate);
  const subtotal = rawSubtotal - discountAmt;
  const gstAmt = Math.round(subtotal * 0.18); // 18% clinical aesthetic GST
  const finalEstimate = subtotal + gstAmt;

  // Form Handlers
  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-()]/g, '');
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        errs.phone = 'Enter a valid 10-digit Indian mobile number (e.g. 9949912345)';
      }
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errs.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errs.date = 'Date cannot be in the past';
      }
    }

    return errs;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clinical registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: `VC-TOL-${Math.floor(100000 + Math.random() * 900000)}`,
        name: form.name,
        phone: form.phone,
        email: form.email,
        date: form.date,
        time: form.time,
        treatment: TREATMENTS[selectedTreatment].name,
        area: AREAS[selectedArea].name,
        sessions: selectedSession,
        estimate: finalEstimate
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-slate-800 font-sans antialiased selection:bg-purple-200">
      
      {/* CSS Styles for Grid Background and Futuristic Theme */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .font-cyber-heading {
          font-family: 'Outfit', sans-serif;
        }
        .font-cyber-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        .cyber-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
        }
        
        .holo-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(59, 130, 246, 0.15);
          box-shadow: 
            0 10px 30px -10px rgba(0, 0, 0, 0.04),
            0 1px 1px 0 rgba(255, 255, 255, 0.8) inset,
            0 0 0 1px rgba(139, 92, 246, 0.03) inset;
        }

        .holo-card-hover:hover {
          border-color: rgba(139, 92, 246, 0.35);
          box-shadow: 
            0 20px 40px -15px rgba(139, 92, 246, 0.1),
            0 0 20px 0 rgba(59, 130, 246, 0.05);
          transform: translateY(-2px);
        }

        .cyber-glow-blue {
          box-shadow: 0 0 25px rgba(3b, 82, 246, 0.15);
        }

        .cyber-glow-lavender {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.15);
        }
      `}</style>

      {/* Cyber Grid Background Container */}
      <div className="cyber-grid min-h-screen relative overflow-x-hidden">
        
        {/* Futuristic glowing metallic accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-300/10 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-gradient-to-tr from-purple-300/10 to-transparent blur-[100px] pointer-events-none" />

        {/* TOP BAR / NAVIGATION */}
        <nav className="sticky top-0 z-50 w-full bg-[#F3F4F6]/85 backdrop-blur-md border-b border-blue-100/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Activity size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight font-cyber-heading bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Vcare Clinic
                  </span>
                  <span className="text-[9px] font-cyber-mono tracking-widest text-slate-500 uppercase">
                    Tolichowki Branch • Est. 2012
                  </span>
                </div>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'expertise', 'estimator', 'services', 'testimonials'].map((tab) => (
                  <a
                    key={tab}
                    href={`#${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors duration-250 hover:text-[#8B5CF6] ${
                      activeTab === tab ? 'text-[#8B5CF6] font-semibold border-b-2 border-[#8B5CF6] pb-1' : 'text-slate-500'
                    }`}
                  >
                    {tab}
                  </a>
                ))}
              </div>

              {/* Contact Button */}
              <div className="flex items-center gap-3">
                <a 
                  href="tel:9949912345"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-blue-200/40 hover:bg-slate-50 transition-all text-xs font-cyber-mono font-medium shadow-sm"
                >
                  <Phone size={14} className="text-[#3B82F6]" />
                  <span>99499-12345</span>
                </a>
                
                <a 
                  href="#booking"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-medium text-xs tracking-wider uppercase transition-all duration-200 hover:shadow-md active:scale-95 shadow-sm"
                >
                  Book Consult
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200/50 text-[#3B82F6] text-xs font-cyber-mono w-fit">
                <ShieldCheck size={14} />
                <span>CLINICAL AESTHETICS • US-FDA PROTOCOLS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-cyber-heading">
                Futuristic Skincare <br />
                <span className="bg-gradient-to-r from-[#3B82F6] via-indigo-500 to-[#8B5CF6] bg-clip-text text-transparent">
                  Engineered For Results
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Welcome to Vcare Skin & Hair Clinic Tolichowki. We blend cutting-edge laser technologies, medical-grade diagnostics, and custom-tailored dermatologist regimens to achieve clinical excellence. Experience next-gen care.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200/60 max-w-xl">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 font-cyber-heading">15k+</h4>
                  <p className="text-xs text-slate-500 tracking-wide">Patients Treated</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 font-cyber-heading">99.2%</h4>
                  <p className="text-xs text-slate-500 tracking-wide">Satisfaction Rate</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 font-cyber-heading">12+</h4>
                  <p className="text-xs text-slate-500 tracking-wide">FDA Technologies</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#estimator" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-md active:scale-95"
                >
                  Explore Treatment Calculator
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <a 
                  href="#booking" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-blue-200/60 hover:bg-slate-50 text-slate-800 font-semibold text-sm tracking-wider uppercase transition-all shadow-sm"
                >
                  Consultation Booking
                </a>
              </div>
            </div>

            {/* Right Graphic - Holographic Control Interface */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] p-4 bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-white border border-white/60 shadow-xl overflow-hidden flex flex-col justify-between">
                
                {/* Embedded Tech Grid Decor */}
                <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Top Hologram Status */}
                <div className="relative flex justify-between items-center bg-white/60 backdrop-blur-md rounded-2xl p-3 border border-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-cyber-mono font-semibold tracking-wider text-emerald-600 uppercase">SYS ACTIVE</span>
                  </div>
                  <span className="text-[10px] font-cyber-mono text-slate-400">V.CARE PROTOCOL v3.2</span>
                </div>

                {/* Main Scanning HUD Graphic */}
                <div className="relative my-auto py-8 flex flex-col items-center justify-center text-center">
                  <div className="relative w-44 h-44 rounded-full border border-blue-400/25 flex items-center justify-center p-3">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/20 animate-[spin_40s_linear_infinite]" />
                    <div className="absolute w-[90%] h-[90%] rounded-full border border-blue-300/40 flex items-center justify-center">
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent animate-[pulse_2s_infinite]" />
                    </div>
                    
                    {/* Centered Scan Node */}
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-50 to-purple-50 flex flex-col items-center justify-center border border-white shadow-inner">
                      <Zap size={32} className="text-[#8B5CF6] animate-bounce" />
                      <span className="text-[8px] font-cyber-mono tracking-widest text-[#3B82F6] uppercase font-bold mt-2">Dermal Laser</span>
                    </div>
                  </div>
                  
                  {/* Digital Meter */}
                  <div className="mt-6 font-cyber-mono text-xs text-slate-500 flex items-center gap-4">
                    <span className="px-2 py-0.5 rounded bg-white/70 border border-slate-200">WAVELENGTH: 808nm</span>
                    <span className="px-2 py-0.5 rounded bg-white/70 border border-slate-200">ENERGY: 42J</span>
                  </div>
                </div>

                {/* Footer specs inside card */}
                <div className="relative bg-white/85 rounded-2xl p-3 border border-white/90">
                  <div className="flex items-center gap-3">
                    <Award className="text-[#8B5CF6]" size={18} />
                    <div className="text-left">
                      <h5 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Premium Tech Attainment</h5>
                      <p className="text-[9px] text-slate-500 leading-tight">Authentic Soprano Titanium & Secret RF systems only.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CLINIC EXPERTISE / ABOUT SECTION */}
        <section id="expertise" className="py-20 bg-white/50 border-y border-blue-100/40 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-cyber-mono tracking-widest text-[#3B82F6] uppercase font-bold">ABOUT THE CLINIC</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-cyber-heading mt-2">
                Uncompromising Scientific Skin & Hair Care
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Image Collage Frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-3xl blur-2xl -z-10" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                      alt="Clinical skincare session" 
                      className="rounded-2xl border border-white shadow-md object-cover h-48 w-full"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" 
                      alt="Consultation room" 
                      className="rounded-2xl border border-white shadow-md object-cover h-64 w-full"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600" 
                      alt="Laser treatment system" 
                      className="rounded-2xl border border-white shadow-md object-cover h-64 w-full"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600" 
                      alt="Dermatologist examining patient" 
                      className="rounded-2xl border border-white shadow-md object-cover h-48 w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Textual details */}
              <div className="flex flex-col space-y-6 text-left">
                <h3 className="text-2xl font-bold text-slate-900 font-cyber-heading">
                  Tolichowki’s Signature Center for Non-Invasive Rejuvenation
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  For over a decade, Vcare Skin & Hair Clinic at Tolichowki has served as a center of excellence for patients seeking premium skincare. Under the supervision of our highly qualified medical staff, we devise custom therapeutic programs tailored to your skin type.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We specialize in advanced anti-aging treatments, laser hair removal using authentic multi-wavelength technology, scar treatments, and platelet-rich plasma (PRP) therapies for hair thinning. We prioritize clinical efficacy, patient safety, and zero downtime.
                </p>

                {/* Points List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1 shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Experienced and Certified Clinical Dermatologists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1 shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">US-FDA Cleared Technologies and Sterile Environment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1 shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Transparent Pricing with Zero Hidden Costs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE TREATMENT ESTIMATOR WIDGET */}
        <section id="estimator" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-cyber-mono tracking-widest text-[#8B5CF6] uppercase font-bold">TREATMENT PLANNER</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-cyber-heading mt-2">
              Interactive Estimate Calculator
            </h2>
            <p className="text-sm text-slate-500 mt-2">Configure your preferred clinical treatment plan and receive a real-time estimate instantly.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Card 1: Select Treatment */}
              <div className="holo-card rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Sliders size={18} className="text-[#3B82F6]" />
                  <h3 className="font-cyber-heading font-semibold text-slate-900">1. Select Aesthetic Procedure</h3>
                </div>
                <div className="grid gap-3">
                  {Object.entries(TREATMENTS).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTreatment(key)}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        selectedTreatment === key 
                          ? 'border-[#3B82F6] bg-blue-50/50 shadow-[0_0_15px_rgba(59,130,246,0.08)]' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${selectedTreatment === key ? 'bg-[#3B82F6]' : 'bg-slate-300'}`} />
                          <span className="font-semibold text-slate-800 text-sm">{item.name}</span>
                        </div>
                        <p className="text-xs text-slate-500 pl-4">{item.spec}</p>
                      </div>
                      <span className="text-xs font-cyber-mono font-medium text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded sm:mt-0 mt-2 w-fit">
                        {item.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card 2: Select Body Area */}
              <div className="holo-card rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Compass size={18} className="text-[#3B82F6]" />
                  <h3 className="font-cyber-heading font-semibold text-slate-900">2. Target Body Treatment Zone</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(AREAS).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                        selectedArea === key 
                          ? 'border-[#3B82F6] bg-blue-50/50 shadow-[0_0_15px_rgba(59,130,246,0.08)]' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="text-sm font-semibold text-slate-800">{item.name}</span>
                      <span className="text-[10px] font-cyber-mono text-slate-400 mt-1">Multiplier: {item.multiplier}x</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card 3: Select Sessions */}
              <div className="holo-card rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Percent size={18} className="text-[#8B5CF6]" />
                  <h3 className="font-cyber-heading font-semibold text-slate-900">3. Select Program Sessions</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SESSIONS_OPTIONS.map((item) => (
                    <button
                      key={item.count}
                      onClick={() => setSelectedSession(item.count)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                        selectedSession === item.count 
                          ? 'border-[#8B5CF6] bg-purple-50/50 shadow-[0_0_15px_rgba(139,92,246,0.08)]' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="text-lg font-bold text-slate-800">{item.count}</span>
                      <span className="text-[10px] font-medium text-purple-600 mt-1">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Estimator Receipt Column */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="holo-card rounded-[24px] p-6 border-blue-200/50 shadow-md relative overflow-hidden flex flex-col">
                
                {/* Tech bar design */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500" />
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-cyber-heading font-bold text-slate-900 uppercase tracking-wide">ESTIMATE SUMMARY</h3>
                    <p className="text-[10px] font-cyber-mono text-slate-400">SESSION CONTRACT: ESTIMATE v1.0</p>
                  </div>
                  <div className="px-2 py-1 rounded bg-blue-50 border border-blue-200/50 text-[#3B82F6] font-cyber-mono text-[9px] font-bold">
                    18% GST INCL.
                  </div>
                </div>

                {/* Config List */}
                <div className="space-y-4 border-b border-slate-200/60 pb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Procedure Type:</span>
                    <span className="text-slate-800 font-semibold text-right max-w-[180px] truncate">{treatmentObj.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Target Region:</span>
                    <span className="text-slate-800 font-semibold">{areaObj.name} ({areaObj.multiplier}x)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Program Duration:</span>
                    <span className="text-slate-800 font-semibold">{sessionsCount} Sessions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Rate / Session:</span>
                    <span className="text-slate-800 font-cyber-mono font-medium">₹ {costPerSession}</span>
                  </div>
                </div>

                {/* Subtotal breakdown */}
                <div className="space-y-3 py-6 border-b border-slate-200/60 text-xs font-cyber-mono">
                  <div className="flex justify-between">
                    <span>Base Subtotal:</span>
                    <span>₹ {rawSubtotal}</span>
                  </div>
                  {discountAmt > 0 && (
                    <div className="flex justify-between text-[#8B5CF6] font-semibold">
                      <span>Package Discount ({discountRate * 100}%):</span>
                      <span>- ₹ {discountAmt}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-500">
                    <span>Medical GST (18%):</span>
                    <span>₹ {gstAmt}</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="py-6 flex items-center justify-between">
                  <span className="font-cyber-heading font-extrabold text-slate-900 uppercase">Total Estimate:</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-slate-900 font-cyber-heading">₹ {finalEstimate.toLocaleString('en-IN')}</span>
                    <p className="text-[10px] text-slate-400 font-cyber-mono">No other registration fees</p>
                  </div>
                </div>

                {/* Action CTA */}
                <a 
                  href="#booking"
                  onClick={() => {
                    // pre-fill or guide user to booking
                  }}
                  className="w-full inline-flex items-center justify-center p-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:shadow-md active:scale-95 shadow-sm mt-2"
                >
                  Book Consult for this Plan
                  <ArrowRight size={14} className="ml-2" />
                </a>

                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <ShieldCheck size={14} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[10px] text-slate-500 leading-normal">
                    This estimate represents normal clinical charges. Actual requirements are subject to professional evaluation by a registered dermatologist during consultation.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SERVICES GRID SECTION */}
        <section id="services" className="py-20 bg-white/40 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-cyber-mono tracking-widest text-[#3B82F6] uppercase font-bold">CORE PROCEDURES</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-cyber-heading mt-2">
                Specialized Skin & Hair Expertise
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Service 1 */}
              <div className="holo-card rounded-2xl p-6 shadow-sm holo-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/40 flex items-center justify-center text-[#3B82F6] mb-5">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-lg font-cyber-heading font-bold text-slate-900 mb-2">Laser Hair Reduction</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Soprano Ice triple wavelength laser technology, painless cooling, custom skin type configuration. Safely removes hair follicle clusters with long-lasting reduction.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-cyber-mono text-slate-500">
                  <span>Duration: 45 min</span>
                  <span>Safety: High</span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="holo-card rounded-2xl p-6 shadow-sm holo-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200/40 flex items-center justify-center text-[#8B5CF6] mb-5">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="text-lg font-cyber-heading font-bold text-slate-900 mb-2">Skin Brightening Infusions</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Intravenous glutathione wellness infusions coupled with targeted Q-Switched lasers to reduce hyperpigmentation, uneven tone, and dark spots.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-cyber-mono text-slate-500">
                  <span>Duration: 60 min</span>
                  <span>Safety: High</span>
                </div>
              </div>

              {/* Service 3 */}
              <div className="holo-card rounded-2xl p-6 shadow-sm holo-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/40 flex items-center justify-center text-indigo-500 mb-5">
                    <Activity size={22} />
                  </div>
                  <h3 className="text-lg font-cyber-heading font-bold text-slate-900 mb-2">PRP Hair Restoration</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Growth Factor Concentrate (GFC) and PRP treatments to reactivate dormant hair roots. High-speed double spin centrifugation ensures maximum clinical yield.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-cyber-mono text-slate-500">
                  <span>Duration: 50 min</span>
                  <span>Safety: Autologous</span>
                </div>
              </div>

              {/* Service 4 */}
              <div className="holo-card rounded-2xl p-6 shadow-sm holo-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/40 flex items-center justify-center text-[#3B82F6] mb-5">
                    <Award size={22} />
                  </div>
                  <h3 className="text-lg font-cyber-heading font-bold text-slate-900 mb-2">Fractional Microneedling RF</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Secret RF micro-needling delivers radiofrequency energy into deep skin layers to repair tough acne scars, open pores, and stretch marks with rapid recovery.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-cyber-mono text-slate-500">
                  <span>Duration: 40 min</span>
                  <span>Safety: Clinical</span>
                </div>
              </div>

              {/* Service 5 */}
              <div className="holo-card rounded-2xl p-6 shadow-sm holo-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200/40 flex items-center justify-center text-[#8B5CF6] mb-5">
                    <Clock size={22} />
                  </div>
                  <h3 className="text-lg font-cyber-heading font-bold text-slate-900 mb-2">Anti-Aging Injectables</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Precision Botox, dermal fillers, and thread lifts performed by senior clinical cosmetologists to lift skin, soften fine lines, and reshape jawlines.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-cyber-mono text-slate-500">
                  <span>Duration: 30 min</span>
                  <span>Safety: Professional</span>
                </div>
              </div>

              {/* Service 6 */}
              <div className="holo-card rounded-2xl p-6 shadow-sm holo-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/40 flex items-center justify-center text-indigo-500 mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-lg font-cyber-heading font-bold text-slate-900 mb-2">Advanced Acne Protocols</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Salicylic peels, blue light therapy, and custom dermatologist prescriptions to address hormonal acne, clear active breakouts, and block future outbreaks.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-cyber-mono text-slate-500">
                  <span>Duration: 45 min</span>
                  <span>Safety: Medical</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONSULTATION BOOKING FORM (WITH INPUT VALIDATION) */}
        <section id="booking" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left description text */}
            <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
              <span className="text-xs font-cyber-mono tracking-widest text-[#8B5CF6] uppercase font-bold">SECURE BOOKING</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-cyber-heading">
                Book Your Private Consultation
              </h2>
              <p className="text-slate-600">
                Register below to lock in your preferred date. Our clinical coordinator will verify your information and contact you within 2 hours to confirm your appointment.
              </p>
              
              <div className="space-y-4 pt-4 text-sm font-cyber-mono">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#3B82F6]" />
                  <span>Avg Confirmation: 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-[#3B82F6]" />
                  <span>Secure HIPAA Data Encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#3B82F6]" />
                  <span>Clinical Hotline: 9949912345</span>
                </div>
              </div>
            </div>

            {/* Right Form Container */}
            <div className="lg:col-span-7">
              <div className="holo-card rounded-[28px] p-8 border-blue-200/50 shadow-lg relative">
                
                {/* Form header */}
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="font-cyber-heading font-extrabold text-slate-900 text-lg uppercase tracking-wider">REGISTRATION PORTAL</h3>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>

                {!submittedData ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {/* Two Column Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      
                      {/* Name input */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-700 font-cyber-heading">Full Name</label>
                        <input 
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none transition-all ${
                            errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#3B82F6]'
                          }`}
                        />
                        {errors.name && <span className="text-[11px] text-red-500 font-cyber-mono">{errors.name}</span>}
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="phone" className="text-xs font-semibold text-slate-700 font-cyber-heading">Phone Number</label>
                        <input 
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none transition-all ${
                            errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#3B82F6]'
                          }`}
                        />
                        {errors.phone && <span className="text-[11px] text-red-500 font-cyber-mono">{errors.phone}</span>}
                      </div>

                    </div>

                    {/* Email input */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-700 font-cyber-heading">Email Address</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rahul@gmail.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#3B82F6]'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-500 font-cyber-mono">{errors.email}</span>}
                    </div>

                    {/* Date and Time slots */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      
                      {/* Date input */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="date" className="text-xs font-semibold text-slate-700 font-cyber-heading">Preferred Date</label>
                        <input 
                          type="date"
                          id="date"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none transition-all ${
                            errors.date ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#3B82F6]'
                          }`}
                        />
                        {errors.date && <span className="text-[11px] text-red-500 font-cyber-mono">{errors.date}</span>}
                      </div>

                      {/* Time slot */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="time" className="text-xs font-semibold text-slate-700 font-cyber-heading">Time Slot</label>
                        <select 
                          id="time"
                          name="time"
                          value={form.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#3B82F6]"
                        >
                          <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                        </select>
                      </div>

                    </div>

                    {/* Message / Concerns */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="notes" className="text-xs font-semibold text-slate-700 font-cyber-heading">Medical Concerns (Optional)</label>
                      <textarea 
                        id="notes"
                        name="notes"
                        rows={3}
                        value={form.notes}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your skin/hair type or cosmetic history..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-sm focus:outline-none focus:border-[#3B82F6] resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] disabled:bg-[#8B5CF6]/50 text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Generating Clinical Ticket...</span>
                        </>
                      ) : (
                        <>
                          <span>Verify & Complete Registration</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                  </form>
                ) : (
                  
                  // SUCCESS COMPONENT
                  <div className="py-6 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-cyber-heading font-extrabold text-slate-900 uppercase">Consultation Registered</h4>
                      <p className="text-sm text-slate-500 font-cyber-mono mt-1 text-purple-600 font-semibold">TICKET ID: {submittedData.id}</p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left text-sm space-y-3.5">
                      <div className="flex justify-between border-b border-slate-200/50 pb-2">
                        <span className="text-slate-400 font-cyber-mono text-xs">PATIENT</span>
                        <span className="font-semibold text-slate-800">{submittedData.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/50 pb-2">
                        <span className="text-slate-400 font-cyber-mono text-xs">MOBILE</span>
                        <span className="font-semibold text-slate-800">{submittedData.phone}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/50 pb-2">
                        <span className="text-slate-400 font-cyber-mono text-xs">PROCEDURE</span>
                        <span className="font-semibold text-slate-800">{submittedData.treatment}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/50 pb-2">
                        <span className="text-slate-400 font-cyber-mono text-xs">AREA / COUNT</span>
                        <span className="font-semibold text-slate-800">{submittedData.area} ({submittedData.sessions} Sessions)</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/50 pb-2">
                        <span className="text-slate-400 font-cyber-mono text-xs">DATE & SLOT</span>
                        <span className="font-semibold text-slate-800">{submittedData.date} • {submittedData.time.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-400 font-cyber-mono text-xs">EST. CHARGES</span>
                        <span className="font-bold text-slate-900 font-cyber-heading text-base">₹ {submittedData.estimate.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-cyber-mono font-medium tracking-wide uppercase transition-all"
                    >
                      New Appointment Ticket
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* PATIENT TRANSFORMATIONS / TESTIMONIALS */}
        <section id="testimonials" className="py-20 bg-white/50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-cyber-mono tracking-widest text-[#3B82F6] uppercase font-bold">PATIENT ATTESTATIONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-cyber-heading mt-2">
                Real Clinical Transformations
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="holo-card rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#8B5CF6]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <h4 className="font-cyber-heading font-bold text-slate-900 text-sm">"Incredible Acne Scar Repair"</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    "I took a 6-session Secret RF treatment for my deep ice-pick scars. The results are spectacular. The texture of my face feels refined, and the staff at Tolichowki clinic were incredibly professional during every visit."
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600 text-xs">
                    AS
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-slate-800">Ayesha Siddiqua</h5>
                    <p className="text-[10px] text-[#3B82F6] font-cyber-mono">Secret RF Scar Protocol</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="holo-card rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#8B5CF6]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <h4 className="font-cyber-heading font-bold text-slate-900 text-sm">"Permanent Laser Results"</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    "Laser hair reduction here is completely painless. They use the genuine Soprano Ice machine and sanitize the probe right in front of you. Extremely hygienic environment and highly cost-effective 10-session pack."
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-[#3B82F6] text-xs">
                    MK
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-slate-800">Mohammad Khan</h5>
                    <p className="text-[10px] text-[#3B82F6] font-cyber-mono">Laser Hair Reduction</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="holo-card rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#8B5CF6]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <h4 className="font-cyber-heading font-bold text-slate-900 text-sm">"Noticeable Hair Restoration"</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    "I was suffering from severe male pattern hair loss. Underwent 6 sessions of autologous growth factor PRP at Vcare. The density of my hair has improved considerably. Highly recommend Tolichowki branch!"
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-xs">
                    SR
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-slate-800">Srinivas Rao</h5>
                    <p className="text-[10px] text-[#3B82F6] font-cyber-mono">Hair Growth PRP Protocol</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STORE DETAILS FOOTER */}
        <footer className="bg-[#1F2937] text-[#F9FAFB] border-t border-[#374151] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.02] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="grid md:grid-cols-12 gap-8">
              
              {/* Footer Logo Info */}
              <div className="md:col-span-5 flex flex-col space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    VC
                  </div>
                  <h4 className="text-lg font-bold font-cyber-heading tracking-wide uppercase text-white">Vcare Skin & Hair Clinic</h4>
                </div>
                <p className="text-xs text-[#9CA3AF] max-w-sm leading-normal">
                  Expert dermatology and trichology services, utilizing advanced US-FDA approved technologies. Restoring skin wellness and hair confidence through custom-tailored medical sciences.
                </p>
                <p className="text-[10px] font-cyber-mono text-slate-500 pt-2">
                  © {new Date().getFullYear()} VCARE SKIN & HAIR CLINIC. ALL RIGHTS RESERVED.
                </p>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-3 flex flex-col space-y-4 text-left">
                <h4 className="text-sm font-cyber-heading font-extrabold uppercase text-white tracking-widest">Clinic Links</h4>
                <div className="flex flex-col space-y-2.5 text-xs text-[#9CA3AF]">
                  <a href="#home" className="hover:text-white transition-colors">Home Base</a>
                  <a href="#expertise" className="hover:text-white transition-colors">Clinical Expertise</a>
                  <a href="#estimator" className="hover:text-white transition-colors">Treatment Estimator</a>
                  <a href="#services" className="hover:text-white transition-colors">Specialized Procedures</a>
                  <a href="#booking" className="hover:text-white transition-colors">Portal Booking</a>
                </div>
              </div>

              {/* Address Map Store Details */}
              <div className="md:col-span-4 flex flex-col space-y-4 text-left">
                <h4 className="text-sm font-cyber-heading font-extrabold uppercase text-white tracking-widest">Store Location</h4>
                
                <div className="flex flex-col space-y-3.5 text-xs text-[#D1D5DB]">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>
                      Vcare Skin & Hair Clinic, 2nd Floor, Above HDFC Bank,<br />
                      Tolichowki Road, MD Lines, Tolichowki,<br />
                      Hyderabad, Telangana 500008
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={16} className="text-[#3B82F6] shrink-0" />
                    <a href="tel:9949912345" className="hover:underline">99499-12345</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-[#3B82F6] shrink-0" />
                    <span>tolichowki@vcareclinic.in</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

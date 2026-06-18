"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ChevronRight, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass,
  Zap,
  Activity,
  AlertCircle
} from 'lucide-react';

export default function Page() {
  // Estimator State
  const [treatment, setTreatment] = useState('laser');
  const [area, setArea] = useState('face');
  const [sessions, setSessions] = useState(5);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Laser Hair Free',
    timeSlot: 'Morning (10 AM - 1 PM)'
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Pricing configuration for Kaya Estimator
  const treatmentPrices = {
    laser: { name: 'Laser Hair Free', base: 4500, description: 'Advanced pain-free hair reduction' },
    brightening: { name: 'Advanced Brightening', base: 5500, description: 'Deep pigment reduction & glow' },
    aging: { name: 'Anti-Aging Infusion', base: 8000, description: 'Collagen lift & wrinkle reduction' },
    acne: { name: 'Youth Acne Defense', base: 4000, description: 'Deep pore purification & cure' }
  };

  const areaMultipliers = {
    face: { name: 'Face Only', multiplier: 1.0 },
    faceneck: { name: 'Face & Neck', multiplier: 1.2 },
    limbs: { name: 'Hands & Legs', multiplier: 2.2 },
    fullbody: { name: 'Full Body Care', multiplier: 3.2 }
  };

  const getSessionDiscount = (num) => {
    if (num <= 1) return 1.0;
    if (num <= 4) return 0.90; // 10% discount
    if (num <= 7) return 0.85; // 15% discount
    return 0.80; // 20% discount
  };

  const calculateEstimate = () => {
    const basePrice = treatmentPrices[treatment].base;
    const multiplier = areaMultipliers[area].multiplier;
    const discount = getSessionDiscount(sessions);
    const total = basePrice * multiplier * sessions * discount;
    return Math.round(total).toLocaleString('en-IN');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    // Phone Validation (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    // Email Validation (optional but validated if entered)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FFF5F5] text-[#2D3748] font-sans selection:bg-[#E0A899] selection:text-white min-h-screen">
      
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-[#FFF5F5]/90 backdrop-blur-md border-b border-[#E0A899]/15">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-[#2D3748] uppercase">Kaya</span>
            <span className="h-6 w-[2px] bg-[#E0A899] block"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#E0A899] block mt-0.5">Skin Clinic</span>
          </a>

          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-[#FFF0F5] border border-[#E0A899]/20 rounded-full">
            <a href="#about" className="px-4 py-2 text-[10px] uppercase tracking-wider font-bold text-[#2D3748] hover:text-[#E0A899] rounded-full transition-colors">Clinic</a>
            <a href="#estimator" className="px-4 py-2 text-[10px] uppercase tracking-wider font-bold text-[#2D3748] hover:text-[#E0A899] rounded-full transition-colors">Estimator</a>
            <a href="#services" className="px-4 py-2 text-[10px] uppercase tracking-wider font-bold text-[#2D3748] hover:text-[#E0A899] rounded-full transition-colors">Treatments</a>
            <a href="#testimonials" className="px-4 py-2 text-[10px] uppercase tracking-wider font-bold text-[#2D3748] hover:text-[#E0A899] rounded-full transition-colors">Stories</a>
            <a href="#book" className="px-5 py-2 text-[10px] uppercase tracking-widest font-black bg-[#E0A899] text-white rounded-full hover:bg-[#d49989] transition-all">
              Book Appointment
            </a>
          </nav>

          <a href="tel:+919391018899" className="md:hidden flex items-center gap-1 bg-[#E0A899] px-4 py-2 rounded-full text-white text-[10px] uppercase font-bold tracking-wider shadow-sm">
            <Phone className="w-3 h-3" />
            <span>Call Clinic</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-[#FFF5F5] to-[#FFF0F5] border-b border-[#E0A899]/10">
        {/* Asymmetrical decorative circles */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#FFF0F5] mix-blend-multiply filter blur-3xl opacity-60 animate-pulse pointer-events-none z-0"></div>
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#FFF5F5] mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FFF0F5] border border-[#E0A899]/30 rounded-full text-[10px] font-black uppercase tracking-widest text-[#E0A899]">
              <Compass className="w-3 h-3" />
              <span>Advanced Aesthetic Skin Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2D3748] leading-[1.1]">
              Flawless Skin. <br />
              <span className="text-[#E0A899]">Clinically Proven.</span>
            </h1>
            <p className="text-xs md:text-sm text-[#2D3748]/75 leading-relaxed max-w-lg font-light">
              For over two decades, Kaya Skin Clinic has pioneered advanced dermatology solutions in India. Our Tolichowki branch combines world-class dermatologists with state-of-the-art technologies to deliver life-changing skin transformations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#estimator" className="px-6 py-3.5 text-[10px] uppercase tracking-widest font-black bg-[#E0A899] hover:bg-[#d49989] text-white rounded-2xl transition-all shadow-md">
                Calculate Treatment Cost
              </a>
              <a href="#book" className="px-6 py-3.5 text-[10px] uppercase tracking-widest font-black border-2 border-[#E0A899]/30 hover:border-[#E0A899] text-[#2D3748] rounded-2xl transition-all">
                Schedule Consult
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-[#E0A899]/10 rounded-[3rem] transform rotate-3 z-0"></div>
              <div className="relative p-3 bg-white border border-[#E0A899]/20 rounded-[3rem] shadow-lg z-10">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80" 
                  alt="Kaya Skin Treatment Therapy" 
                  className="w-full h-[320px] md:h-[380px] object-cover rounded-[2.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Expertise/About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#FFF5F5] border border-[#E0A899]/15 rounded-3xl">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" alt="Clinical consultation" className="w-full h-40 object-cover rounded-2xl" />
              </div>
              <div className="p-3 bg-[#FFF0F5] border border-[#E0A899]/15 rounded-3xl mt-6">
                <img src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80" alt="Skin treatment" className="w-full h-40 object-cover rounded-2xl" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#E0A899] block">Skincare Experts</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#2D3748]">Pioneering Personalized Skin Rejuvenation</h2>
            <p className="text-xs md:text-sm text-[#2D3748]/75 leading-relaxed font-light">
              Kaya Skin Clinic in Tolichowki offers highly scientific skincare solutions tailored for Hyderabad's unique climate and demographic factors. With our team of experienced dermatologists, we diagnose your skin condition and design exact treatment matrices for pigmentation, aging, acne scars, and hair thinning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] shrink-0 mt-0.5">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D3748]">Safe Clinical Environment</h4>
                  <p className="text-[11px] text-[#2D3748]/60">Every tool is sterilized, and we utilize strict clinical hygiene protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] shrink-0 mt-0.5">
                  <Zap className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D3748]">US-FDA Approved Equipment</h4>
                  <p className="text-[11px] text-[#2D3748]/60">We utilize top-tier diagnostic tools and international medical lasers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] shrink-0 mt-0.5">
                  <Activity className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D3748]">Continuous Support</h4>
                  <p className="text-[11px] text-[#2D3748]/60">Post-session tracking and specialized homecare routine configuration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 bg-[#FFF0F5] border-y border-[#E0A899]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-black text-[#E0A899]">Interactive Matrix</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#2D3748]">Personalized Treatment Cost Estimator</h2>
            <p className="text-xs text-[#2D3748]/75 max-w-md mx-auto">
              Configure your clinical session parameters and calculate immediate estimates for your targeted skin therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Control Panel */}
            <div className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-[#E0A899]/20 shadow-sm space-y-6">
              
              {/* Step 1: Treatment */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold text-[#2D3748]/60">1. Skincare Treatment Service</label>
                <div className="space-y-2">
                  {Object.entries(treatmentPrices).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setTreatment(key)}
                      className={`w-full p-4 rounded-xl border transition-all text-left flex justify-between items-center ${
                        treatment === key
                          ? 'border-[#E0A899] bg-[#FFF5F5]'
                          : 'border-neutral-100 hover:bg-[#FFF5F5]/30'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-[#2D3748]">{item.name}</span>
                        <span className="text-[10px] text-[#2D3748]/50 block">{item.description}</span>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        treatment === key ? 'border-[#E0A899] bg-[#E0A899]' : 'border-neutral-200'
                      }`}>
                        {treatment === key && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Area */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold text-[#2D3748]/60">2. Targeted Region</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(areaMultipliers).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setArea(key)}
                      className={`py-3.5 px-4 text-xs font-bold rounded-xl border transition-all text-center ${
                        area === key
                          ? 'border-[#E0A899] bg-[#FFF5F5] text-[#2D3748]'
                          : 'border-neutral-100 hover:bg-[#FFF5F5]/30 text-[#2D3748]/60'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Sessions slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs uppercase font-bold text-[#2D3748]/60">
                  <label>3. Number of Sessions</label>
                  <span className="text-[#E0A899] font-extrabold">{sessions} {sessions === 1 ? 'session' : 'sessions'}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={sessions}
                  onChange={e => setSessions(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#FFF5F5] rounded-lg appearance-none cursor-pointer accent-[#E0A899]"
                />
                <div className="flex justify-between text-[9px] text-[#2D3748]/40 font-bold px-1">
                  <span>1 Session</span>
                  <span>5 Sessions</span>
                  <span>10 Sessions</span>
                </div>
              </div>
            </div>

            {/* Calculations Display */}
            <div className="lg:col-span-5 bg-white p-8 rounded-[2rem] border border-[#E0A899]/20 shadow-md flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest font-black text-[#E0A899] block">Price Diagnostics</span>
                <h3 className="text-xl font-extrabold tracking-tight text-[#2D3748]">Kaya Session Plan</h3>

                <div className="space-y-3 text-xs border-y border-[#FFF5F5] py-4">
                  <div className="flex justify-between">
                    <span className="opacity-60">Base Service Rate:</span>
                    <span className="font-semibold">₹{treatmentPrices[treatment].base}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Area Weighting:</span>
                    <span className="font-semibold">x{areaMultipliers[area].multiplier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Session Count:</span>
                    <span className="font-semibold">{sessions}</span>
                  </div>
                  {sessions > 1 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Package Discount:</span>
                      <span>-{Math.round((1 - getSessionDiscount(sessions)) * 100)}%</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 text-center space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#2D3748]/55 block font-bold">Estimated Cost</span>
                <span className="text-4xl font-extrabold text-[#E0A899] block">₹{calculateEstimate()}*</span>
                <p className="text-[9px] text-[#2D3748]/50 italic -mt-2">
                  *GST applicable. Exact clinic pricing subject to dermatologist skin analysis.
                </p>
                <a href="#book" className="w-full block py-4 text-center text-xs uppercase tracking-widest font-black bg-[#E0A899] hover:bg-[#d49989] text-white rounded-2xl transition-all shadow-sm">
                  Request Session Customization
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Asymmetric Bento layout) */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#E0A899]">Clinic Treatments</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#2D3748]">Specialized Aesthetic Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 bg-[#FFF5F5] p-8 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest bg-white border border-[#E0A899]/25 text-[#E0A899] px-2.5 py-1 rounded-full inline-block mb-4">
                  Top Recommended
                </span>
                <h3 className="text-xl font-bold text-[#2D3748] mb-2">Laser Hair Free Treatment</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed max-w-md font-light mb-4">
                  Kaya's legendary laser hair reduction protocol targets hair roots precisely using advanced cooling sapphire tips. Extremely effective, painless, and completely tailored to your skin tone index.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Explore Plan <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="md:col-span-5 bg-[#FFF5F5] p-8 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest bg-white border border-[#E0A899]/25 text-[#E0A899] px-2.5 py-1 rounded-full inline-block mb-4">
                  Pigmentation
                </span>
                <h3 className="text-xl font-bold text-[#2D3748] mb-2">Advanced Brightening</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed font-light mb-4">
                  Involves dermatologist formulated chemical peels, microdermabrasion, and vitamin infusion to target stubborn tan lines and dark spots.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Explore Plan <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="md:col-span-5 bg-[#FFF5F5] p-8 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest bg-white border border-[#E0A899]/25 text-[#E0A899] px-2.5 py-1 rounded-full inline-block mb-4">
                  Anti-Aging
                </span>
                <h3 className="text-xl font-bold text-[#2D3748] mb-2">Anti-Aging Infusion</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed font-light mb-4">
                  Restore skin bounce and youth. Micro-droplet infusion of hydrating agents targets lines around eyes and mouth.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Explore Plan <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="md:col-span-7 bg-[#FFF5F5] p-8 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest bg-white border border-[#E0A899]/25 text-[#E0A899] px-2.5 py-1 rounded-full inline-block mb-4">
                  Acne Cure
                </span>
                <h3 className="text-xl font-bold text-[#2D3748] mb-2">Youth Acne Defense</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed max-w-md font-light mb-4">
                  Cleanses cystic acne blemishes and controls sebum. Includes detailed skin analysis, blackhead extraction, and salicylic acid masks.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Explore Plan <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Transformations / Testimonials */}
      <section id="testimonials" className="py-20 bg-[#FFF0F5] border-t border-[#E0A899]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-black text-[#E0A899]">Testimonial Diaries</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#2D3748]">Patient Success Logs</h2>
            <p className="text-xs text-[#2D3748]/55">Verified medical ratings from Tolichowki area clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-[#E0A899]/15 shadow-sm space-y-4">
              <div className="flex gap-0.5 text-[#E0A899]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-[#2D3748]/75 leading-relaxed italic">
                "Kaya's laser hair reduction has saved me so much time. I completed 6 sessions on my arms and face and the regrowth is basically non-existent. Professional staff and beautiful clean clinics."
              </p>
              <div className="border-t border-[#FFF5F5] pt-3 flex justify-between items-center">
                <div>
                  <span className="font-bold text-xs block text-[#2D3748]">Zeenat Begum</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#2D3748]/50">Tolichowki Road, Hyderabad</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#E0A899]">Laser Care</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E0A899]/15 shadow-sm space-y-4">
              <div className="flex gap-0.5 text-[#E0A899]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-[#2D3748]/75 leading-relaxed italic">
                "I visited Kaya for pigmentation treatment. Their advanced chemical peels and brightening serum infusions cleared out my acne scarring completely. The doctor was highly thorough during checks."
              </p>
              <div className="border-t border-[#FFF5F5] pt-3 flex justify-between items-center">
                <div>
                  <span className="font-bold text-xs block text-[#2D3748]">Kiran Kumar</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#2D3748]/50">Shaikpet, Hyderabad</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#E0A899]">Pigment Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="book" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-black text-[#E0A899] block font-mono">Secure Slot</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#2D3748]">Reserve Your Skincare Diagnosis</h2>
            <p className="text-xs md:text-sm text-[#2D3748]/75 leading-relaxed font-light">
              Submit your details to reserve a private clinical check-up with a certified dermatologist at our Tolichowki clinic. We will phone you inside 30 minutes to confirm your reservation.
            </p>
            <div className="space-y-4 pt-6 border-t border-[#FFF5F5]">
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-5 h-5 shrink-0 text-[#E0A899]" />
                <span>Door No. 8-1-301/A, 2nd Floor, Tolichowki X Roads, Hyderabad - 500008</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-5 h-5 shrink-0 text-[#E0A899]" />
                <a href="tel:+919391018899" className="hover:underline font-semibold">+91 9391018899</a>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-5 h-5 shrink-0 text-[#E0A899]" />
                <a href="mailto:care@kayaclinic.com" className="hover:underline">tolichowki@kayaclinic.com</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#FFF0F5] p-8 rounded-[2rem] border border-[#E0A899]/20 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-emerald-300 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3748]">Reservation Registered</h3>
                  <p className="text-xs text-[#2D3748]/70 max-w-sm mx-auto">
                    Hi {formData.name}, your medical skincare consultation booking for {formData.treatment} is registered. We've queued phone support at +91 {formData.phone} within 30 minutes.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', treatment: 'Laser Hair Free', timeSlot: 'Morning (10 AM - 1 PM)' });
                    }}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-[#E0A899] hover:bg-[#d49989] rounded-xl transition-all"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Full Name *</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Zeenat Begum"
                      className={`w-full p-3.5 text-xs bg-white border ${errors.name ? 'border-red-400' : 'border-[#E0A899]/25'} rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748]`} 
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">WhatsApp Phone *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 9391018899"
                        className={`w-full p-3.5 text-xs bg-white border ${errors.phone ? 'border-red-400' : 'border-[#E0A899]/25'} rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748]`} 
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Email Address</label>
                      <input 
                        type="text" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. zeenat@example.com"
                        className={`w-full p-3.5 text-xs bg-white border ${errors.email ? 'border-red-400' : 'border-[#E0A899]/25'} rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748]`} 
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Treatment Clinic Care</label>
                      <select 
                        value={formData.treatment}
                        onChange={e => setFormData({...formData, treatment: e.target.value})}
                        className="w-full p-3.5 text-xs bg-white border border-[#E0A899]/25 rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748] appearance-none"
                      >
                        <option>Laser Hair Free</option>
                        <option>Advanced Brightening</option>
                        <option>Anti-Aging Infusion</option>
                        <option>Youth Acne Defense</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Preferred Time</label>
                      <select 
                        value={formData.timeSlot}
                        onChange={e => setFormData({...formData, timeSlot: e.target.value})}
                        className="w-full p-3.5 text-xs bg-white border border-[#E0A899]/25 rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748] appearance-none"
                      >
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Afternoon (1 PM - 5 PM)</option>
                        <option>Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 text-xs uppercase tracking-widest font-black mt-2 bg-[#E0A899] hover:bg-[#d49989] text-white rounded-xl transition-all shadow-md">
                    Request Booking Slot
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-[#FFF0F5] border-t border-[#E0A899]/20 py-16 text-center text-[#2D3748]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex justify-center items-center gap-2">
            <span className="font-extrabold text-xl tracking-tight uppercase">Kaya Clinic</span>
            <span className="text-xs text-[#E0A899] font-bold">•</span>
            <span className="text-xs font-semibold tracking-wider text-[#2D3748]/70">Tolichowki Hub</span>
          </div>

          <p className="text-xs text-[#2D3748]/60 max-w-md mx-auto leading-relaxed">
            Door No. 8-1-301/A, 2nd Floor, Tolichowki X Roads, Tolichowki, Hyderabad, Telangana 500008 (Above HDFC Bank)
          </p>

          <div className="flex justify-center gap-6 text-[11px] font-bold text-[#E0A899] uppercase tracking-widest">
            <span>20+ Years Legacy</span>
            <span>•</span>
            <span>US-FDA Safe Technology</span>
            <span>•</span>
            <span>Clinical Skincare Diagnostics</span>
          </div>

          <p className="text-[10px] text-[#2D3748]/50 uppercase tracking-widest pt-4 border-t border-[#E0A899]/10">
            © 2026 Kaya Skin Clinic Hyderabad. All Rights Reserved. Clinic Helpline: +91 9391018899
          </p>
        </div>
      </footer>

    </div>
  );
}

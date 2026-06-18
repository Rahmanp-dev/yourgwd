"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Sparkles, 
  ChevronRight, 
  Sliders, 
  ShieldAlert, 
  TrendingUp, 
  Users, 
  Calendar, 
  User, 
  Mail, 
  MessageSquare, 
  Award, 
  Check, 
  Video, 
  SlidersHorizontal,
  Info
} from 'lucide-react';

export default function AmbrosiaClinic() {
  // Treatment Estimator State
  const [category, setCategory] = useState('laser');
  const [areaSize, setAreaSize] = useState('fullFace');
  const [sessions, setSessions] = useState(4);
  const [firstTimeDiscount, setFirstTimeDiscount] = useState(true);

  // Pricing configuration
  const prices = {
    wrinkle: 9000,    // Anti-Aging/Wrinkle Relaxers (Botox)
    fillers: 19500,   // Advanced Dermal Fillers
    laser: 7500,      // Laser Skin Resurfacing
    hydra: 4800       // Hydrafacial & Medi-Peels
  };

  const areaMultipliers = {
    mini: 0.7,        // E.g. Lips, Chin, or Eyes
    target: 1.2,      // E.g. Forehead, Cheeks
    fullFace: 1.8,    // E.g. Entire Face
    faceNeck: 2.3     // E.g. Face and Neck combined
  };

  const calculateTotal = () => {
    const base = prices[category] || 7000;
    const mult = areaMultipliers[areaSize] || 1.0;
    const costPerSession = base * mult;
    const subtotal = costPerSession * sessions;
    
    // Scale discount based on sessions
    let sessionDiscountRate = 0;
    if (sessions >= 8) sessionDiscountRate = 0.15; // 15% off for 8+ sessions
    else if (sessions >= 4) sessionDiscountRate = 0.10; // 10% off for 4-7 sessions

    const sessionDiscountAmount = subtotal * sessionDiscountRate;
    let runningTotal = subtotal - sessionDiscountAmount;

    // Apply first-time client discount (15% stackable on remaining)
    let firstTimeDiscountAmount = 0;
    if (firstTimeDiscount) {
      firstTimeDiscountAmount = runningTotal * 0.15;
      runningTotal = runningTotal - firstTimeDiscountAmount;
    }

    const gstAmount = runningTotal * 0.18; // 18% medical aesthetic GST
    const grandTotal = runningTotal + gstAmount;

    return {
      perSession: Math.round(costPerSession),
      subtotal: Math.round(subtotal),
      sessionDiscount: Math.round(sessionDiscountAmount),
      sessionDiscountRate: sessionDiscountRate * 100,
      firstTimeDiscount: Math.round(firstTimeDiscountAmount),
      gst: Math.round(gstAmount),
      total: Math.round(grandTotal)
    };
  };

  const estimation = calculateTotal();

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'In-Clinic Consultation',
    category: 'Laser Skin Resurfacing',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full Name is required';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters long';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (!form.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errs.date = 'Appointment Date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errs.date = 'Appointment date cannot be in the past';
      }
    }

    return errs;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        referenceId: `AMB-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Neumorphic Styling Tokens (Sleek Tighter Geometric)
  const bgMain = 'bg-[#F0F4F8]';
  const textDark = 'text-[#1E293B]';
  const outsetCard = 'shadow-[6px_6px_12px_#cbd5e0,-6px_-6px_12px_#ffffff]';
  const insetCard = 'shadow-[inset_4px_4px_8px_#cbd5e0,inset_-4px_-4px_8px_#ffffff]';
  const activeState = 'active:shadow-[inset_2px_2px_4px_#cbd5e0,inset_-2px_-2px_4px_#ffffff]';

  return (
    <div className={`min-h-screen ${bgMain} ${textDark} font-jakarta selection:bg-cyan-100 antialiased`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F0F4F8]/90 backdrop-blur-md border-b border-slate-200/50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${outsetCard} flex items-center justify-center bg-[#F0F4F8] border border-white/80`}>
              <Award className="text-[#06B6D4] w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#1E293B]">
                AMBROSIA
              </span>
              <span className="block text-[8px] tracking-[0.2em] uppercase font-bold text-cyan-600">
                Skin, Hair & Laser Centre
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <a href="#science" className="hover:text-[#06B6D4] transition-colors py-1">Science & Tech</a>
            <a href="#estimator" className="hover:text-[#06B6D4] transition-colors py-1">Price Calculator</a>
            <a href="#procedures" className="hover:text-[#06B6D4] transition-colors py-1">Procedures</a>
            <a href="#clinical-outcomes" className="hover:text-[#06B6D4] transition-colors py-1">Clinical Outcomes</a>
          </div>

          <div>
            <a 
              href="#schedule" 
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${outsetCard} ${activeState} border border-white text-xs font-bold text-[#1E293B] hover:text-[#06B6D4] transition-all bg-[#F0F4F8]`}
            >
              <Phone size={12} className="text-[#06B6D4]" />
              <span>Contact Clinic</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Tagline */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg ${insetCard} text-[#1E293B] text-[10px] uppercase font-bold tracking-wider bg-[#F0F4F8]`}>
                <Sparkles size={12} className="text-[#06B6D4]" />
                <span>FDA-Approved Clinical Protocols</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#1E293B]">
                Precision Aesthetics. <br />
                <span className="text-[#06B6D4]">Clinically Verified.</span>
              </h1>

              <p className="text-xs lg:text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                At Ambrosia Clinic Tolichowki, we reject generic skincare routines. We leverage advanced skin scan mapping and evidence-backed laser therapies to build high-performance, long-lasting aesthetic improvements.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#estimator" 
                  className="px-6 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-95"
                >
                  Configure Procedure Cost
                </a>
                
                <a 
                  href="#schedule" 
                  className={`px-6 py-3.5 ${outsetCard} ${activeState} border border-white text-xs font-bold uppercase tracking-wider rounded-lg text-slate-700 hover:text-[#06B6D4] transition-all bg-[#F0F4F8]`}
                >
                  Book In-Clinic Assessment
                </a>
              </div>
            </div>

            {/* Right Column Neumorphic Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`w-full max-w-[400px] ${outsetCard} p-6 rounded-2xl bg-[#F0F4F8] border border-white/60`}>
                <div className={`p-6 rounded-xl ${insetCard} bg-[#F0F4F8] space-y-5 text-left`}>
                  <div className="pb-3 border-b border-slate-300/40">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Ambrosia By The Numbers</span>
                    <span className="text-xl font-extrabold text-[#1E293B] mt-1 block">Clinical Standards</span>
                  </div>

                  {[
                    { title: "NABL Certified Laboratories", icon: <Check size={14} className="text-[#06B6D4]" /> },
                    { title: "Triple-Wavelength Cooling Lasers", icon: <Check size={14} className="text-[#06B6D4]" /> },
                    { title: "FDA Cleared Injectable Dermal Fillers", icon: <Check size={14} className="text-[#06B6D4]" /> },
                    { title: "Direct Doctor-Led Consultations", icon: <Check size={14} className="text-[#06B6D4]" /> }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                      <div className={`w-6 h-6 rounded-lg ${outsetCard} flex items-center justify-center bg-[#F0F4F8]`}>
                        {feat.icon}
                      </div>
                      <span>{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Clinic Expertise/About */}
      <section id="science" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.25em] block mb-3">
              Scientific Principles
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E293B]">
              Advanced Medical Aesthetics
            </h2>
            <p className="text-xs text-slate-400 mt-2 font-medium">
              Every procedure is executed with high clinical safety standards and absolute precision.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Dermal Scan Analysis",
                desc: "Before touch, we capture sub-surface melanin and vascular maps to ensure laser frequencies are set optimally.",
                metric: "Zero Hypersensitivity"
              },
              {
                num: "02",
                title: "US-FDA Approved Tech",
                desc: "We exclusively source premium machinery from Lutronic, Cynosure, and Candela to provide secure skin treatments.",
                metric: "FDA Gold Standard"
              },
              {
                num: "03",
                title: "Customized Recovery",
                desc: "Receive customized topical creams and medical recovery instructions to reduce skin redness under 24 hours.",
                metric: "Minimal Downtime"
              },
              {
                num: "04",
                title: "Sterile Cleanrooms",
                desc: "All surgical spaces, peel trays, and hair restoration centrifuges undergo automated UV sterilization sweeps daily.",
                metric: "ISO Class 5 Safety"
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${outsetCard} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between`}>
                <div>
                  <div className="text-2xl font-extrabold text-[#06B6D4]/40">{item.num}</div>
                  <h3 className="text-sm font-bold text-[#1E293B] mt-4 mb-2">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
                <div className={`mt-6 py-2 px-3 rounded-lg ${insetCard} text-[10px] font-bold text-center text-slate-600 bg-[#F0F4F8]`}>
                  {item.metric}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 lg:py-28 bg-[#F0F4F8] border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.25em] block mb-3">
              Cost Transparency
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E293B]">
              Treatment Cost Calculator
            </h2>
            <p className="text-xs text-slate-400 mt-2 font-medium">
              Calculate your exact treatment pricing, package discounts, and taxes immediately.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Fields */}
            <div className={`lg:col-span-7 p-6 rounded-xl ${outsetCard} bg-[#F0F4F8] border border-white/60 space-y-6 text-left`}>
              
              {/* Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Select Therapy Category
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { id: 'laser', name: 'Laser Skin Resurfacing', desc: 'Acne scar RF & pigmentation lasers' },
                    { id: 'wrinkle', name: 'Anti-Aging Botox', desc: 'Targeted forehead & eye lines therapy' },
                    { id: 'fillers', name: 'Dermal Fillers (1ml)', desc: 'Cheek, chin & lip volume restoration' },
                    { id: 'hydra', name: 'Hydrafacial & Medi-Peels', desc: 'Clinical deep hydration & organic peels' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`p-3.5 rounded-lg text-left transition-all ${
                        category === cat.id 
                          ? `${insetCard} border border-cyan-400/40 bg-[#F0F4F8]` 
                          : `${outsetCard} hover:bg-slate-50/50 border border-transparent`
                      }`}
                    >
                      <div className="font-bold text-xs text-[#1E293B]">{cat.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{cat.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Select Target Area Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'mini', name: 'Mini (Lips/Chin)' },
                    { id: 'target', name: 'Targeted Zone' },
                    { id: 'fullFace', name: 'Full Face' },
                    { id: 'faceNeck', name: 'Face & Neck' }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      onClick={() => setAreaSize(sz.id)}
                      className={`py-3 px-1.5 rounded-lg text-center text-[11px] font-bold transition-all ${
                        areaSize === sz.id 
                          ? `${insetCard} border border-cyan-400/40 bg-[#F0F4F8]` 
                          : `${outsetCard} hover:bg-slate-50/50 border border-transparent`
                      }`}
                    >
                      {sz.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sessions */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Sessions Package
                  </label>
                  <span className={`px-2.5 py-0.5 rounded-md ${insetCard} text-xs font-bold text-[#06B6D4] bg-[#F0F4F8]`}>
                    {sessions} {sessions === 1 ? 'Session' : 'Sessions'}
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={sessions}
                  onChange={(e) => setSessions(parseInt(e.target.value))}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-slate-300 accent-[#06B6D4] outline-none"
                />
                
                <div className="flex justify-between text-[9px] text-slate-400 font-bold px-0.5 mt-2">
                  <span>1 Session</span>
                  <span>4 Sessions (10% Off)</span>
                  <span>8+ Sessions (15% Off)</span>
                </div>
              </div>

              {/* First-time client toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setFirstTimeDiscount(!firstTimeDiscount)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                    firstTimeDiscount 
                      ? `${insetCard} border-cyan-400/30 bg-[#F0F4F8]` 
                      : `${outsetCard} border-transparent hover:bg-slate-50/50`
                  }`}
                >
                  <div className="text-left">
                    <span className="text-xs font-bold text-[#1E293B] block">First-Time Client Special</span>
                    <span className="text-[9px] text-slate-400">Save an additional 15% on your initial package</span>
                  </div>
                  <div className={`w-8 h-4 rounded-full p-0.5 transition-all ${firstTimeDiscount ? 'bg-[#06B6D4]' : 'bg-slate-300'}`}>
                    <div className={`w-3 h-3 rounded-full bg-white transition-all transform ${firstTimeDiscount ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </div>
                </button>
              </div>

            </div>

            {/* Calculations & Checkout */}
            <div className="lg:col-span-5 space-y-4">
              <div className={`p-6 rounded-xl ${outsetCard} bg-[#F0F4F8] border border-white/60 space-y-4 text-left`}>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-300/40">
                  Cost Breakdown
                </h3>

                <div className="space-y-3 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Session rate:</span>
                    <span>₹{estimation.perSession.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Base subtotal:</span>
                    <span>₹{estimation.subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {estimation.sessionDiscount > 0 && (
                    <div className="flex justify-between text-green-600 bg-green-50/50 p-2 rounded border border-green-100">
                      <span>Package Discount ({estimation.sessionDiscountRate}%):</span>
                      <span>- ₹{estimation.sessionDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {firstTimeDiscount && estimation.firstTimeDiscount > 0 && (
                    <div className="flex justify-between text-cyan-600 bg-cyan-50/50 p-2 rounded border border-cyan-100">
                      <span>First-Time Discount (15%):</span>
                      <span>- ₹{estimation.firstTimeDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">GST / Taxes (18%):</span>
                    <span>₹{estimation.gst.toLocaleString('en-IN')}</span>
                  </div>

                  <div className={`p-4 rounded-lg ${insetCard} bg-[#F0F4F8] flex justify-between items-center mt-4`}>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Grand Total</span>
                      <span className="text-[9px] text-slate-400">All fees included</span>
                    </div>
                    <span className="text-xl font-extrabold text-[#06B6D4]">
                      ₹{estimation.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#F0F4F8] p-2.5 rounded-lg border border-white text-[10px] text-slate-400 font-medium">
                  <Info size={13} className="text-[#06B6D4] shrink-0 mt-0.5" />
                  <span>Ambrosia Clinic provides zero-cost card EMI and UPI payment options at our reception.</span>
                </div>

                <a 
                  href="#schedule"
                  onClick={() => {
                    const selCat = {
                      laser: 'Laser Skin Resurfacing',
                      wrinkle: 'Anti-Aging Botox',
                      fillers: 'Dermal Fillers (1ml)',
                      hydra: 'Hydrafacial & Medi-Peels'
                    }[category];
                    setForm(prev => ({
                      ...prev,
                      category: `${selCat} (${sessions} Sessions)`,
                      message: `Pre-configured via cost calculator. Selected size: ${areaSize}. First time discount: ${firstTimeDiscount ? 'Yes' : 'No'}.`
                    }));
                  }}
                  className="block w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#06B6D4] hover:bg-[#0891B2] rounded-lg transition-all shadow-md active:scale-95"
                >
                  Book procedures package
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="procedures" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.25em] block mb-3">
              Clinical Offerings
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E293B]">
              Advanced Aesthetic Procedures
            </h2>
            <div className="w-12 h-1 bg-[#06B6D4] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Anti-Wrinkle Therapy",
                tech: "Aesthetic Botox Injectables",
                desc: "Target forehead creases, frown furrows, and smile lines. Our micro-dose injection techniques preserve subtle facial expressions.",
                period: "15 mins procedure • 4-6 months results"
              },
              {
                title: "Dermal Sculpting",
                tech: "HA Fillers (Restylane / Juvederm)",
                desc: "Replenish lost facial volume, sculpt jawlines, and augment thin lips with premium hyaluronic acid formulations designed for natural elasticity.",
                period: "30 mins procedure • 9-12 months results"
              },
              {
                title: "Laser Skin Resurfacing",
                tech: "Fractional Erbium YAG / CO2",
                desc: "Eradicate stubborn acne scars, fine lines, and open pores. We utilize cold-pulse laser sweeps to accelerate skin plane recovery.",
                period: "45 mins procedure • Cumulative skin repair"
              },
              {
                title: "Aesthetic Hydrafacial",
                tech: "Vortex-Exfoliation & Serums",
                desc: "Deeply extract clogged blackheads and infuse custom multi-peptide serums. An ideal medical skin brightening treatment before events.",
                period: "60 mins procedure • Immediate skin glow"
              },
              {
                title: "Clinical Acne Peels",
                tech: "Salicylic / Glycolic Peels",
                desc: "Regulate overactive sebaceous glands. Target hormonal acne and pigmentation deposits with medical-grade superficial chemical sweeps.",
                period: "25 mins procedure • Reduces active sebum"
              },
              {
                title: "Platelet Growth Restorer",
                tech: "Autologous Cell PRP Therapy",
                desc: "Harness rich growth factor cytokines from your blood to restore active hair root density and reverse early stage androgenetic hair loss.",
                period: "45 mins procedure • Enhances follicle growth"
              },
              {
                title: "Skin Brightening Peel",
                tech: "Advanced Retinol / Yellow Peels",
                desc: "Target deep dermal pigmentation and severe sun tanning. Promotes uniform exfoliation for an even-toned skin look.",
                period: "30 mins procedure • 7-day cellular cycle"
              },
              {
                title: "Under-Eye Rejuvenation",
                tech: "Teosyal Redensity Injectable",
                desc: "Dramatically diminish dark hollow under-eye circles and tired expressions with specialized light-reflecting dermal gels.",
                period: "20 mins procedure • 12 months longevity"
              }
            ].map((srv, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${outsetCard} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between hover:scale-[1.01] transition-transform`}>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#06B6D4] block">{srv.tech}</span>
                  <h3 className="text-sm font-extrabold text-[#1E293B] mt-2 mb-3">{srv.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-4">{srv.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-300/30">
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wide block">{srv.period}</span>
                  <a 
                    href="#schedule"
                    onClick={() => setForm(prev => ({ ...prev, category: srv.title, message: `Interested in details for: ${srv.title}` }))}
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1E293B] hover:text-[#06B6D4] transition-colors mt-3"
                  >
                    <span>Inquire Now</span>
                    <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Consultation Form Section */}
      <section id="schedule" className="py-20 lg:py-28 bg-[#F0F4F8] border-t border-slate-200/40">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.25em] block mb-3">
              Consultation Form
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E293B]">
              Book Clinical Assessment
            </h2>
            <p className="text-xs text-slate-400 mt-2 font-medium">
              Reserve your slot for a personalized session with our board-certified dermatologists.
            </p>
          </div>

          <div className={`p-6 sm:p-10 rounded-2xl ${outsetCard} bg-[#F0F4F8] border border-white/60 font-jakarta`}>
            
            {submittedData ? (
              <div className="text-center space-y-6 py-6">
                <div className={`w-12 h-12 rounded-xl ${insetCard} flex items-center justify-center text-green-500 mx-auto bg-[#F0F4F8]`}>
                  <Check size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1E293B]">Request Registered Successfully</h3>
                  <p className="text-[11px] text-slate-400">Your tracking number: <span className="font-extrabold text-[#06B6D4]">{submittedData.referenceId}</span></p>
                </div>

                <div className={`max-w-sm mx-auto p-4 rounded-lg ${insetCard} text-left text-[11px] space-y-2 bg-[#F0F4F8]/80 border border-white`}>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Name:</span> <span className="font-extrabold text-[#1E293B]">{submittedData.name}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Phone:</span> <span className="font-extrabold text-[#1E293B]">{submittedData.phone}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Email:</span> <span className="font-extrabold text-[#1E293B]">{submittedData.email}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Consult Type:</span> <span className="font-extrabold text-[#1E293B]">{submittedData.type}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Procedure Selected:</span> <span className="font-extrabold text-[#1E293B]">{submittedData.category}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Date Requested:</span> <span className="font-extrabold text-[#1E293B]">{submittedData.date}</span></div>
                </div>

                <p className="text-[10px] text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Our customer service desk will contact you at <span className="font-extrabold">{submittedData.phone}</span> to confirm your session.
                </p>

                <button
                  onClick={() => setSubmittedData(null)}
                  className={`px-5 py-2.5 rounded-lg ${outsetCard} ${activeState} text-xs font-bold text-[#1E293B] hover:text-[#06B6D4] bg-[#F0F4F8] transition-all`}
                >
                  Schedule Another Consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User size={14} />
                      </div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={form.name}
                        onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.name && <span className="text-[9px] text-red-500 font-bold mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone size={14} />
                      </div>
                      <input
                        type="tel"
                        placeholder="9949123456"
                        value={form.phone}
                        onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.phone && <span className="text-[9px] text-red-500 font-bold mt-1 block">{errors.phone}</span>}
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail size={14} />
                      </div>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.email && <span className="text-[9px] text-red-500 font-bold mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Consult Type */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Consultation Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm(prev => ({ ...prev, type: e.target.value }))}
                      className={`w-full px-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] outline-none focus:ring-1 focus:ring-cyan-300 appearance-none`}
                    >
                      <option>In-Clinic Consultation</option>
                      <option>Video Consultation (Online)</option>
                    </select>
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Procedure Category */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Procedural Interest
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                      className={`w-full px-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] outline-none focus:ring-1 focus:ring-cyan-300`}
                    >
                      <option>Laser Skin Resurfacing</option>
                      <option>Anti-Aging Botox</option>
                      <option>Dermal Fillers (1ml)</option>
                      <option>Hydrafacial & Medi-Peels</option>
                      <option>Chemical Acne Peels</option>
                      <option>Platelet Growth Restorer (PRP)</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar size={14} />
                      </div>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.date && <span className="text-[9px] text-red-500 font-bold mt-1 block">{errors.date}</span>}
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Describe Skin Goals or History
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Provide details of any prior treatment or skin condition..."
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className={`w-full px-3.5 py-3 rounded-lg ${insetCard} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Validating Details...' : 'Request Priority Booking'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Patient Transformations/Testimonials */}
      <section id="clinical-outcomes" className="py-20 lg:py-28 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.25em] block mb-3">
              Patient Outcomes
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E293B]">
              Clinical Case Studies
            </h2>
            <div className="w-12 h-1 bg-[#06B6D4] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Syeda Ruhi Fatima",
                area: "Tolichowki, Hyderabad",
                concern: "Severe Melasma & Post-Pregnancy Tanning",
                therapy: "Laser Skin Resurfacing",
                statement: "I tried multiple chemical peels with no resolution. The doctors at Ambrosia custom-mapped my laser sessions. The melasma patch on my cheek has almost faded away in 4 months.",
                rating: 5,
                outcome: "85% reduction in hyper-pigmentation density."
              },
              {
                name: "K. Raghuvir",
                area: "Friends Colony, Tolichowki",
                concern: "Deep Sagging Lines & Volume Loss",
                therapy: "Aesthetic Dermal Fillers",
                statement: "I wanted a subtle change, not an artificial look. The jawline contouring and cheek filling at Ambrosia was exceptionally precise. Highly skilled medical professionals.",
                rating: 5,
                outcome: "Restored volume definition to nasal-labial folds."
              },
              {
                name: "Mohammad Adnan",
                area: "Galaxy Area, Tolichowki",
                concern: "Severe Active Acne & Scar Pitting",
                therapy: "Salicylic Peels + Microneedling RF",
                statement: "They systematically controlled my active acne before touching the scars. My skin texture has completely cleared, and I feel infinitely more confident.",
                rating: 5,
                outcome: "Eradicated active acne flare-ups & smoothed scar planes."
              }
            ].map((caseStudy, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${outsetCard} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(caseStudy.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#06B6D4] text-[#06B6D4]" />
                    ))}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Patient Diagnosis</span>
                    <span className="text-xs font-extrabold text-[#1E293B] block">{caseStudy.concern}</span>
                  </div>

                  <p className="text-[11px] text-slate-500 italic leading-relaxed">
                    "{caseStudy.statement}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-300/30 space-y-4">
                  <div className={`p-2.5 rounded-lg ${insetCard} bg-[#F0F4F8] text-[10px] font-bold text-slate-600 flex items-center gap-2 border border-white`}>
                    <TrendingUp size={12} className="text-[#06B6D4]" />
                    <span>Outcome: {caseStudy.outcome}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="font-extrabold text-[#1E293B] block">{caseStudy.name}</span>
                      <span className="text-[9px] text-slate-400 block">{caseStudy.area}</span>
                    </div>
                    <span className="text-[9px] font-bold text-[#06B6D4] uppercase tracking-wider bg-cyan-50/50 px-2 py-0.5 rounded border border-cyan-100">
                      {caseStudy.therapy}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#F0F4F8] pt-16 pb-10 border-t border-slate-200/50 font-jakarta">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-300/30">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg ${outsetCard} flex items-center justify-center bg-[#F0F4F8] border border-white text-[#06B6D4]`}>
                <Award size={16} />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#1E293B]">AMBROSIA</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs font-medium">
              World-class clinical skincare, body aesthetics, and laser medicine. Built on evidence, verified by dermatologist outcomes.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E293B]">
              Clinic & Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-500 font-medium">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Ambrosia Clinic, Plot No. 18-A, Friends Colony, Opposite Galaxy Theatre, Tolichowki Main Road, Hyderabad, Telangana 500008.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#06B6D4] shrink-0" />
                <span>+91 9949123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#06B6D4] shrink-0" />
                <span>care@ambrosiaclinic.in</span>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E293B]">
              Operating Details
            </h4>
            <div className="space-y-2.5 text-xs text-slate-500 font-medium">
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <div>Monday - Saturday: 11:00 AM - 08:30 PM</div>
                  <div>Sunday: Closed (Emergency Only)</div>
                </div>
              </div>
              <div className="pt-1 text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">
                • ISO 14001 Sanitation • FDA Approved Tech Only
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[9px] text-slate-400 font-extrabold uppercase tracking-widest gap-3">
          <div>
            © 2026 Ambrosia Clinic. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#06B6D4]">Legal Agreement</a>
            <a href="#" className="hover:text-[#06B6D4]">Privacy Policy</a>
            <a href="#" className="hover:text-[#06B6D4]">Galaxy Branch</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

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
  RefreshCw, 
  Sliders, 
  User, 
  Clock, 
  Activity, 
  ChevronRight, 
  ChevronDown, 
  Info,
  X,
  Menu,
  Heart,
  Camera,
  Scissors
} from 'lucide-react';

// Treatment and tech configuration for Dr. Nivedita Dadu Dermatology Clinic
const DADU_CONCERNS = {
  acne: {
    id: 'acne',
    name: 'Acne Scars & Active Acne',
    tech: 'Pico Laser & Carbon Peel',
    basePrice: 5000,
    recovery: '1 - 2 Days',
    improvement: 85,
    description: 'Combines Pico Laser resurfacing with carbon nano-suspension peels to clear active follicles and level deep scars.'
  },
  pigment: {
    id: 'pigment',
    name: 'Melasma & Pigmentation',
    tech: 'Q-Switched Nd:YAG Laser',
    basePrice: 4500,
    recovery: '0 - 1 Days',
    improvement: 90,
    description: 'Targets excess melanin clusters deep in the dermis, shattering them into micro-particles for natural lymphatic removal.'
  },
  aging: {
    id: 'aging',
    name: 'Wrinkles & Skin Laxity',
    tech: 'High-Frequency Dermal Rejuvenation',
    basePrice: 7000,
    recovery: '2 - 3 Days',
    improvement: 78,
    description: 'Utilizes high-frequency micro-needling and botanical growth factors to lift sagging chin outlines and smooth deep lines.'
  },
  hair: {
    id: 'hair',
    name: 'Androgenic Alopecia / Hair Loss',
    tech: 'Dadu Growth Factor PRP',
    basePrice: 6500,
    recovery: '0 Days (No Downtime)',
    improvement: 80,
    description: 'High-concentration platelet activation derived from patient blood, infused with organic hair vitamins to stimulate density.'
  }
};

const DADU_AREAS = {
  face: { name: 'Face Only', multiplier: 1.0 },
  scalp: { name: 'Scalp Only', multiplier: 1.1 },
  faceNeck: { name: 'Face & Neck', multiplier: 1.3 },
  hands: { name: 'Full Hands', multiplier: 1.4 }
};

export default function DaduClinicPage() {
  // Mobile Nav State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estimator State
  const [selectedConcern, setSelectedConcern] = useState('acne');
  const [selectedArea, setSelectedArea] = useState('face');
  const [sessions, setSessions] = useState(3);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: 'acne',
    date: '',
    timeSlot: '12:00 PM - 02:00 PM',
    firstTime: true,
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Calculations
  const concern = DADU_CONCERNS[selectedConcern];
  const area = DADU_AREAS[selectedArea];
  const pricePerSession = Math.round(concern.basePrice * area.multiplier);
  const rawTotal = pricePerSession * sessions;
  
  // Package Discount: 3 sessions = 12% off, 6+ sessions = 22% off
  let discountPercent = 0;
  if (sessions >= 6) discountPercent = 22;
  else if (sessions >= 3) discountPercent = 12;

  const discountAmount = Math.round(rawTotal * (discountPercent / 100));
  const subtotal = rawTotal - discountAmount;
  const gst = Math.round(subtotal * 0.18);
  const finalPrice = subtotal + gst;

  // Validation
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Patient name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Patient name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[\s-()]/g, '');
      if (!/^\d{10}$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number (e.g. 9949015050)';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be set in the past';
      }
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to clinical examination rules';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium clinical CRM submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setBookingRef(`DADU-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#EAF0EB] text-slate-800 font-sans selection:bg-[#A7F3D0] selection:text-[#065F46] overflow-x-hidden relative">
      {/* Decorative Grid Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#065F46_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Nav bar */}
      <nav className="sticky top-0 z-50 bg-[#EAF0EB]/95 backdrop-blur-md border-b-2 border-[#065F46]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#065F46] flex items-center justify-center border border-emerald-400">
                <Activity className="text-[#A7F3D0] w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold font-sans tracking-tight text-xl leading-tight text-[#065F46]">Dr. Nivedita Dadu</span>
                <span className="text-[10px] uppercase tracking-widest text-[#065F46]/80 font-bold">Dermatology Clinic</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#credentials" className="text-xs font-bold uppercase tracking-wider text-[#065F46]/80 hover:text-[#065F46]">Credentials</a>
              <a href="#estimator" className="text-xs font-bold uppercase tracking-wider text-[#065F46]/80 hover:text-[#065F46]">Estimator</a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wider text-[#065F46]/80 hover:text-[#065F46]">Treatments</a>
              <a href="#testimonials" className="text-xs font-bold uppercase tracking-wider text-[#065F46]/80 hover:text-[#065F46]">Patient Cases</a>
              <a href="#book" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#065F46] hover:bg-[#065F46]/90 border border-emerald-500 transition-all">
                Schedule Session
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#065F46] hover:bg-[#A7F3D0]/30 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EAF0EB] border-b-2 border-[#065F46]/10 px-6 py-6 space-y-4">
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-[#065F46]/80">Credentials</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-[#065F46]/80">Estimator</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-[#065F46]/80">Treatments</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-[#065F46]/80">Patient Cases</a>
            <a href="#book" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#065F46]">
              Schedule Session
            </a>
          </div>
        )}
      </nav>

      {/* Hero Header Section */}
      <header className="relative py-20 lg:py-24 overflow-hidden border-b border-[#065F46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#065F46]/20 text-[#065F46] text-xs font-bold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                Hyderabad's Leading Laser Dermatology Center
              </div>

              <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#065F46] uppercase leading-tight">
                Scientific Skincare <br />
                <span className="text-emerald-800 font-light italic lowercase">guided by</span> clinical research
              </h1>

              <p className="text-base text-slate-700 max-w-xl leading-relaxed">
                Step into a premium dermatological experience. At Dr. Nivedita Dadu's Tolichowki Clinic, we deploy gold-standard laser technology and custom organic barrier-repair treatments to address acne scars, hair thinning, and pigmentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#book" className="inline-flex justify-center items-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#065F46] hover:bg-[#065F46]/90 border border-emerald-500 rounded-lg shadow-sm transition-all">
                  Request Clinical Intake
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="#estimator" className="inline-flex justify-center items-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#065F46] bg-white border border-[#065F46]/20 hover:bg-[#EAF0EB]/50 rounded-lg transition-all">
                  Run Cost Calculator
                </a>
              </div>
            </div>

            {/* Right Bento Card Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#065F46] p-6 rounded-2xl shadow-md space-y-6">
                <div className="flex justify-between items-center border-b-2 border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="text-[#065F46] w-5 h-5" />
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-500">Technology Meter</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-[#A7F3D0] px-2 py-0.5 rounded">US FDA approved</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                      <span>Pico Laser Spot Precision</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-[#EAF0EB] rounded-full h-1.5">
                      <div className="bg-[#065F46] h-1.5 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                      <span>Melanin Disruption Accuracy</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-[#EAF0EB] rounded-full h-1.5">
                      <div className="bg-[#065F46] h-1.5 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>

                {/* Geometric Leaf SVG Frame */}
                <div className="bg-[#EAF0EB] rounded-xl p-4 border border-[#065F46]/10 flex justify-center items-center">
                  <svg className="w-32 h-16 text-[#065F46]" viewBox="0 0 100 50" fill="currentColor">
                    <path d="M10 25 Q30 5, 50 25 T90 25 Q70 45, 50 25 T10 25 Z" fillOpacity={0.1} stroke="currentColor" strokeWidth="1.5" />
                    <line x1="10" y1="25" x2="90" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                    <circle cx="50" cy="25" r="4" fill="currentColor" />
                  </svg>
                </div>

                <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest">
                  Scientific Dermatology Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Doctor Credentials & Expertise */}
      <section id="credentials" className="py-24 bg-white border-b border-[#065F46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Tech Grid (Bento Style) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#EAF0EB] border border-[#065F46]/10 p-5 rounded-xl space-y-2">
                <Clock className="text-[#065F46] w-6 h-6" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Experience</h4>
                <p className="text-lg font-bold text-[#065F46]">18+ Years</p>
              </div>
              <div className="bg-[#EAF0EB] border border-[#065F46]/10 p-5 rounded-xl space-y-2">
                <Sparkles className="text-[#065F46] w-6 h-6" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Derm Procedures</h4>
                <p className="text-lg font-bold text-[#065F46]">30,000+</p>
              </div>
              <div className="bg-[#EAF0EB] border border-[#065F46]/10 p-5 rounded-xl col-span-2 space-y-2">
                <ShieldCheck className="text-[#065F46] w-6 h-6" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Awards & Registrations</h4>
                <p className="text-sm font-semibold text-slate-700">
                  State Medical Council Register. Recipient of "Excellent Clinical Dermatologist" Award.
                </p>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#065F46]">Dermatology Pioneer</h2>
              <h3 className="text-3xl font-bold font-sans tracking-tight text-[#065F46] uppercase">
                Clinical Expertise with a Natural Philosophy
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Dr. Nivedita Dadu Dermatology Clinic represents a unique approach to aesthetic sciences. We focus strictly on skin health, optimizing skin epidermal barriers rather than providing aggressive temporary peeling. Every treatment begins with a medical microscopic evaluation of the skin surface to check sebum levels, pore elasticity, and hydration levels.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our team at Tolichowki, Hyderabad is staffed with highly trained medical staff capable of executing complex clinical interventions. From high-grade Pico lasers to target melasma to custom autologous growth factor serums for androgenic alopecia, we are committed to evidence-based outcomes.
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-6">
                <div>
                  <h4 className="font-bold text-[#065F46] text-lg">Dr. Nivedita Dadu</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">MD, MBBS, DDV (Dermatology)</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <h4 className="font-bold text-slate-700 text-lg">Tolichowki Branch</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Hyderabad, TS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-24 bg-[#EAF0EB] border-b border-[#065F46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#065F46]">Treatment Plan Calculator</h2>
            <h3 className="text-3xl font-black font-sans tracking-tight text-[#065F46] uppercase">Clinical Estimate Matrix</h3>
            <p className="text-slate-600 text-sm">
              Use our live clinical estimator to select your skin or hair concern, set the coverage area, and adjust expected treatment sessions to see estimated recovery times and cost breakdowns.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Control Panel (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#065F46]/10 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
              
              {/* Step 1: Concern Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                  Select Core Concern & Protocol
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {Object.values(DADU_CONCERNS).map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedConcern(c.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        selectedConcern === c.id
                          ? 'border-[#065F46] bg-[#EAF0EB]/40 ring-1 ring-[#065F46]'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{c.name}</h4>
                        <span className="text-[10px] text-emerald-800 font-bold bg-[#A7F3D0] px-2 py-0.5 rounded mt-1.5 inline-block">
                          {c.tech}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{c.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Area Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                  Select Clinical Area Coverage
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(DADU_AREAS).map(([key, a]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`py-3 px-2 rounded-lg text-center border text-xs font-bold transition-all ${
                        selectedArea === key
                          ? 'border-[#065F46] bg-[#065F46] text-white'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {a.name}
                      <span className="block text-[9px] opacity-80 mt-0.5">({a.multiplier}x)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Sessions Range */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                    Set Sessions Protocol
                  </label>
                  <span className="bg-[#065F46] text-[#A7F3D0] font-bold text-xs px-2.5 py-1 rounded">
                    {sessions} {sessions === 1 ? 'Session' : 'Sessions'}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={sessions}
                    onChange={(e) => setSessions(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-[#EAF0EB] rounded-lg appearance-none cursor-pointer accent-[#065F46]"
                  />
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setSessions(prev => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded bg-[#EAF0EB] flex items-center justify-center hover:bg-[#A7F3D0]/40 text-[#065F46] font-bold"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setSessions(prev => Math.min(10, prev + 1))}
                      className="w-8 h-8 rounded bg-[#EAF0EB] flex items-center justify-center hover:bg-[#A7F3D0]/40 text-[#065F46] font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Discount notifications */}
              {sessions >= 6 ? (
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-[11px] text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#065F46]" />
                  <span><strong>Clinical Bundle Active:</strong> 22% package discount applied to final invoice!</span>
                </div>
              ) : sessions >= 3 ? (
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-[11px] text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#065F46]" />
                  <span><strong>Clinical Package Active:</strong> 12% discount applied. Set 6 sessions to unlock 22% off!</span>
                </div>
              ) : null}
            </div>

            {/* Live Receipt & Metrics Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#065F46]/10 p-6 rounded-2xl shadow-md space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Budget Estimate</h4>
                  <span className="text-[10px] font-bold text-[#065F46] bg-[#A7F3D0] px-2 py-0.5 rounded">Live Invoice</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Protocol:</span>
                    <span className="font-bold text-slate-800">{concern.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Technology used:</span>
                    <span className="font-bold text-[#065F46]">{concern.tech}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Area coverage:</span>
                    <span className="font-bold text-slate-800">{area.name}</span>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex justify-between">
                    <span className="text-slate-500">Standard Rate ({sessions}x):</span>
                    <span className="font-bold text-slate-800">₹{rawTotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 bg-emerald-50 p-2 rounded">
                      <span>Package Discount ({discountPercent}%):</span>
                      <span className="font-bold">- ₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-500">Subtotal:</span>
                    <span className="font-bold text-slate-800">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">GST (18% Aesthetic Tax):</span>
                    <span className="font-bold text-slate-800">₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-slate-400 block">Total Est. Cost</span>
                    <span className="text-[10px] text-slate-400 font-semibold">(Incl. all taxes)</span>
                  </div>
                  <span className="text-2xl font-black text-[#065F46]">
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Technical Indicators */}
                <div className="bg-[#EAF0EB]/50 p-4 rounded-xl border border-[#065F46]/5 space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Estimated Recovery Period:</span>
                    <span className="text-[#065F46]">{concern.recovery}</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                      <span>Expected Improvement Index:</span>
                      <span className="text-emerald-700 font-bold">{Math.round(concern.improvement * (0.85 + (sessions * 0.05)))}%</span>
                    </div>
                    <div className="w-full bg-[#EAF0EB] rounded-full h-1.5">
                      <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: `${Math.min(100, Math.round(concern.improvement * (0.85 + (sessions * 0.05))))}%` }} />
                    </div>
                  </div>
                </div>

                <a
                  href="#book"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      concern: selectedConcern
                    }));
                  }}
                  className="w-full inline-flex justify-center items-center py-3 bg-[#065F46] hover:bg-[#065F46]/90 border border-emerald-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all"
                >
                  Proceed with Booking Intake
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white border-b border-[#065F46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#065F46]">Clinical Treatments</h2>
            <h3 className="text-3xl font-black font-sans tracking-tight text-[#065F46] uppercase">Specialized Dermatology Grid</h3>
            <p className="text-slate-500 text-sm">
              We offer advanced scientific skincare protocols managed by certified clinicians and medical therapists in Tolichowki.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Precision Pico Laser Peel',
                tech: 'Picosecond Nd:YAG Laser',
                desc: 'Highly targeted laser pulses designed to target pigmentation blemishes, freckles, and melasma without heat damage.',
                price: '₹5,000',
                downtime: '1-2 Days'
              },
              {
                title: 'Carbon Hollywood Laser Peel',
                tech: 'Carbon Suspension & Q-Switched',
                desc: 'Active carbon paste is applied to the skin, which absorbs sebum and debris. The laser shatters the carbon, clearing pores.',
                price: '₹4,000',
                downtime: '0 Days (Instant)'
              },
              {
                title: 'Dadu Autologous Hair Growth',
                tech: 'Platelet-Activated Growth Factors',
                desc: 'High density growth factor injection sourced directly from your blood, reinforcing hair roots and preventing active loss.',
                price: '₹6,500',
                downtime: '0 Days (No Downtime)'
              },
              {
                title: 'Gold-Standard Acne Subcision',
                tech: 'Sub-epidermal Fiber Release',
                desc: 'Releases the fibrous bands under depressed scars using specialized micro-needles, restoring skin contour uniformity.',
                price: '₹8,000',
                downtime: '3-4 Days'
              },
              {
                title: 'High-Frequency Microneedling',
                tech: 'Radio Frequency Dermal Heating',
                desc: 'Targets deeper skin layers to induce collagen synthesis, ideal for firming lines around mouth and jaw.',
                price: '₹7,000',
                downtime: '2-3 Days'
              },
              {
                title: 'Dermatological Barrier Repair',
                tech: 'Clinical Hydration Serums',
                desc: 'Deep barrier nourishment designed for sensitive or eczema-prone skin types using organic lipids and ceramide infusion.',
                price: '₹3,500',
                downtime: '0 Days'
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#EAF0EB]/30 border border-[#065F46]/10 p-6 rounded-xl hover:bg-slate-50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold text-emerald-800 bg-[#A7F3D0] px-2 py-0.5 rounded uppercase">
                      {s.tech}
                    </span>
                    <Activity className="text-[#065F46] w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">{s.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center text-xs font-bold">
                  <div>
                    <span className="text-slate-400 uppercase tracking-widest block text-[9px]">Downtime</span>
                    <span className="text-slate-700 font-semibold">{s.downtime}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 uppercase tracking-widest block text-[9px]">Starts from</span>
                    <span className="text-[#065F46] font-bold text-sm">{s.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-24 bg-[#EAF0EB] relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border-2 border-[#065F46] p-8 sm:p-12 rounded-2xl shadow-lg relative">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#EAF0EB] flex items-center justify-center mx-auto mb-2 text-[#065F46] border border-[#065F46]/10">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-sans tracking-tight text-[#065F46] uppercase">Clinical Intake Registry</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Tolichowki Branch Appointment Booking
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#EAF0EB]/50 border border-[#065F46]/25 rounded-xl p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-[#065F46] border border-[#065F46]/10">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-[#065F46] uppercase">Intake Registration Confirmed</h4>
                  <p className="text-xs text-slate-600">
                    Your appointment reference has been generated. Our medical desk will contact you to verify patient history.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs font-bold">
                  <div className="flex justify-between">
                    <span className="text-slate-400 uppercase tracking-widest text-[10px]">Reference:</span>
                    <span className="text-slate-800">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 uppercase tracking-widest text-[10px]">Patient Name:</span>
                    <span className="text-slate-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 uppercase tracking-widest text-[10px]">Protocol Focus:</span>
                    <span className="text-slate-800">
                      {DADU_CONCERNS[formData.concern]?.name || formData.concern}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 uppercase tracking-widest text-[10px]">Schedule:</span>
                    <span className="text-slate-800">{formData.date} | {formData.timeSlot}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      concern: 'acne',
                      date: '',
                      timeSlot: '12:00 PM - 02:00 PM',
                      firstTime: true,
                      consent: false
                    });
                  }}
                  className="inline-flex items-center text-xs font-bold text-[#065F46] uppercase tracking-wider hover:underline"
                >
                  <RefreshCw className="w-4 h-4 mr-1.5" />
                  Register New Patient
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      Patient Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-slate-50 outline-none transition-all text-xs font-medium text-slate-800 ${
                          errors.name ? 'border-red-300 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9949015050"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-slate-50 outline-none transition-all text-xs font-medium text-slate-800 ${
                          errors.phone ? 'border-red-300 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="patient@drniveditadadu.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-slate-50 outline-none transition-all text-xs font-medium text-slate-800 ${
                          errors.email ? 'border-red-300 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  {/* Concern Choice */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      Procedure protocol
                    </label>
                    <select
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 outline-none transition-all text-xs font-bold text-slate-600 focus:border-[#065F46] focus:bg-white"
                    >
                      {Object.values(DADU_CONCERNS).map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      Desired Appointment Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-slate-50 outline-none transition-all text-xs font-medium text-slate-800 ${
                          errors.date ? 'border-red-300 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-[11px] mt-1">{errors.date}</p>}
                  </div>

                  {/* Time slot */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      Clinic Hours Slot
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 outline-none transition-all text-xs font-bold text-slate-600 focus:border-[#065F46] focus:bg-white"
                    >
                      <option>10:00 AM - 12:00 PM (Morning Evaluation)</option>
                      <option>12:00 PM - 02:00 PM (Midday Session)</option>
                      <option>03:00 PM - 05:00 PM (Afternoon Resurfacing)</option>
                      <option>05:00 PM - 07:30 PM (Evening Procedures)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Option Toggle */}
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#065F46]">Patient Registry status:</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="firstTime"
                      checked={formData.firstTime}
                      onChange={handleInputChange}
                      className="rounded border-slate-300 text-[#065F46] focus:ring-[#065F46] w-4 h-4"
                    />
                    <span className="text-xs font-semibold text-slate-600">First-time patient at Dadu Clinic</span>
                  </label>
                </div>

                {/* Consent */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-0.5 rounded border-slate-300 text-[#065F46] focus:ring-[#065F46] w-4 h-4 shrink-0"
                    />
                    <span className="text-[11px] text-slate-500 leading-normal select-none">
                      I understand that all diagnostic reviews must occur physically at the Tolichowki Clinic. The final protocol will be confirmed after skin microscopy. I consent to medical registration guidelines.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-[11px] mt-1">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#065F46] hover:bg-[#065F46]/90 border border-emerald-500 text-white font-bold rounded-lg text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Adding Entry to Clinical Registry...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Submit Patient Intake Form
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Patient Transformations/Testimonials */}
      <section id="testimonials" className="py-24 bg-white border-b border-[#065F46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#065F46]">Dermal Cases</h2>
            <h3 className="text-3xl font-black font-sans tracking-tight text-[#065F46] uppercase">Clinical Outcome Records</h3>
            <p className="text-slate-500 text-sm">
              Review genuine treatment metrics verified under the supervision of Dr. Nivedita Dadu at Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Karan Kumar',
                location: 'Shaikpet, Hyderabad',
                protocol: 'Pico Laser scar revision',
                rating: 5,
                metric: '88% scar level reduction',
                comment: 'The subcision combined with Pico Laser completely flattened my deep boxcar acne scars. The treatment spacing suggested was perfect and the healing kit kept the redness down to only 36 hours.',
                period: '3 sessions'
              },
              {
                name: 'Neha Naidu',
                location: 'Jubilee Hills, Hyderabad',
                protocol: 'Q-Switched Pigment Therapy',
                rating: 5,
                metric: '95% melasma fading',
                comment: 'My melasma had flared up due to hormonal changes. Dr. Nivedita analyzed the skin using microscopy first. The laser shattered the pigment beautifully. Highly recommend their professional approach.',
                period: '4 sessions'
              },
              {
                name: 'Zainab Begum',
                location: 'Janaki Nagar Colony, Tolichowki',
                protocol: 'Dadu PRP Hair Therapy',
                rating: 5,
                metric: '72% hair density improvement',
                comment: 'I was losing massive clumps of hair due to severe stress. Their specialized PRP protocol stimulated hair regrowth within 3 months. The new hair strands are thick and have stopped breaking.',
                period: '5 sessions'
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{t.name}</h4>
                      <p className="text-xs text-slate-400 font-bold uppercase">{t.location}</p>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-[#EAF0EB] px-3 py-1 rounded border border-[#065F46]/10 text-xs">
                    <span className="font-bold text-[#065F46]">{t.protocol}</span>
                    <span className="font-bold text-slate-500">{t.period}</span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="bg-emerald-50 p-3 rounded border border-emerald-100 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Verified Outcome</span>
                  <span className="text-[#065F46] font-bold text-sm">{t.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer details */}
      <footer className="bg-[#065F46] text-[#EAF0EB] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="text-[#A7F3D0] w-6 h-6" />
                <span className="font-bold uppercase tracking-wider text-white text-base">Dr. Nivedita Dadu</span>
              </div>
              <p className="text-xs text-[#EAF0EB]/70 leading-relaxed font-medium">
                Providing advanced medical-grade dermatology solutions under certified guidance. Focus on skin recovery and biological moisture barriers.
              </p>
            </div>

            {/* Column 2: Protocol links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Clinical Protocols</h4>
              <ul className="space-y-2 text-xs text-[#EAF0EB]/70 font-semibold">
                <li><a href="#estimator" className="hover:text-[#A7F3D0]">Pico Pigmentation Resurfacing</a></li>
                <li><a href="#estimator" className="hover:text-[#A7F3D0]">Carbon Hollywood Laser Peel</a></li>
                <li><a href="#estimator" className="hover:text-[#A7F3D0]">Autologous Dermal Growth Factors</a></li>
                <li><a href="#estimator" className="hover:text-[#A7F3D0]">High-Frequency Collagen Lift</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Clinical Contact</h4>
              <div className="space-y-3 text-xs text-[#EAF0EB]/70 font-semibold">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                  <span>+91 99490 15050 (Direct Line)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                  <span>hyderabad@drniveditadadu.com</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                  <span>Mon-Sat: 10AM - 7:30PM | Sunday: Closed</span>
                </div>
              </div>
            </div>

            {/* Column 4: Address */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Tolichowki Address</h4>
              <div className="flex items-start gap-2.5 text-xs text-[#EAF0EB]/70 font-semibold leading-relaxed">
                <MapPin className="w-5 h-5 text-[#A7F3D0] shrink-0" />
                <span>
                  Plot No. 12, Janaki Nagar Colony, Tolichowki Main Road, Above Apollo Pharmacy, Hyderabad, Telangana 500008
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/5 text-[10px] text-[#EAF0EB]/60">
                Landmark: Near Tolichowki Main Road Intersection / Above Apollo Pharmacy
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#EAF0EB]/50">
            <p>&copy; {new Date().getFullYear()} Dr. Nivedita Dadu Dermatology Clinic. All rights reserved.</p>
            <p>Accredited Aesthetic Dermatology Service. Hyderabad Branch.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

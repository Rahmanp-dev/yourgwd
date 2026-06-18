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
  Camera
} from 'lucide-react';

// Price and session options for Radiance Skin & Hair Clinic
const RADIANCE_TREATMENTS = {
  skin: {
    id: 'skin',
    name: 'Advanced Laser Acne Scar Revision',
    basePrice: 5500,
    unit: 'session',
    description: 'Fractional CO2 laser paired with organic collagen growth factors to rebuild skin structure.',
    benefits: ['Reduces deep pitted scars', 'Promotes collagen regeneration', 'Refines skin texture']
  },
  hair: {
    id: 'hair',
    name: 'FUE Hair Restoration & PRP',
    basePrice: 8500,
    unit: 'session',
    description: 'Follicular Unit Extraction combined with active biophilic growth factor therapy to reverse thinning.',
    benefits: ['Stimulates dormant follicles', 'Increases hair density', 'Natural hairline restoration']
  },
  hydrafacial: {
    id: 'hydrafacial',
    name: 'Botanical Infused HydraFacial',
    basePrice: 3500,
    unit: 'session',
    description: 'Multi-step clinical exfoliation, vacuum extraction, and infusion of sage and mint hydrating antioxidants.',
    benefits: ['Deep pore detoxification', 'Instant botanical glow', 'Intense moisture lock']
  },
  antiaging: {
    id: 'antiaging',
    name: 'Biomedical Collagen Induction',
    basePrice: 6500,
    unit: 'session',
    description: 'Microneedling therapy using botanical extracts to stimulate cellular turnover and skin firming.',
    benefits: ['Lifts sagging skin contours', 'Softens fine expression lines', 'Restores organic plumpness']
  }
};

const RADIANCE_BODY_AREAS = {
  face: { name: 'Full Face', multiplier: 1.0 },
  neck: { name: 'Neck & Chest', multiplier: 1.2 },
  arms: { name: 'Full Arms', multiplier: 1.5 },
  legs: { name: 'Full Legs', multiplier: 1.8 }
};

export default function RadianceClinicPage() {
  // Mobile Nav State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estimator State
  const [selectedTreatment, setSelectedTreatment] = useState('skin');
  const [selectedArea, setSelectedArea] = useState('face');
  const [sessions, setSessions] = useState(4);
  const [estimatorNotes, setEstimatorNotes] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'skin',
    date: '',
    timeSlot: '11:00 AM - 01:00 PM',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Calculate pricing
  const treatment = RADIANCE_TREATMENTS[selectedTreatment];
  const area = RADIANCE_BODY_AREAS[selectedArea];
  const pricePerSession = Math.round(treatment.basePrice * area.multiplier);
  const rawTotal = pricePerSession * sessions;
  
  // Volume Discount: 3 sessions = 10% off, 6+ sessions = 20% off
  let discountPercent = 0;
  if (sessions >= 6) discountPercent = 20;
  else if (sessions >= 3) discountPercent = 10;
  
  const discountAmount = Math.round(rawTotal * (discountPercent / 100));
  const subtotal = rawTotal - discountAmount;
  const gst = Math.round(subtotal * 0.18); // 18% GST
  const finalPrice = subtotal + gst;

  // Form validation handler
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
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleanedPhone = formData.phone.replace(/[\s-()]/g, '');
      if (!/^\d{10}$/.test(cleanedPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number (e.g. 9246543167)';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        newErrors.date = 'Appointment date cannot be in the past';
      }
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the wellness and treatment guidelines';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium backend booking entry
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setBookingRef(`RAD-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#EAF0EB] text-[#1E293B] font-sans selection:bg-[#A7F3D0] selection:text-[#065F46] overflow-x-hidden relative">
      {/* Decorative leaf shapes inside the page background */}
      <div className="absolute top-24 right-0 w-72 h-72 bg-gradient-to-b from-[#A7F3D0]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1200px] left-0 w-80 h-80 bg-gradient-to-tr from-[#065F46]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <nav className="sticky top-0 z-50 bg-[#EAF0EB]/95 backdrop-blur-md border-b border-[#065F46]/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#065F46] flex items-center justify-center shadow-md shadow-[#065F46]/20">
                <Sparkles className="text-[#A7F3D0] w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight text-[#065F46]">Radiance</span>
                <span className="text-xs uppercase tracking-widest text-[#065F46]/70 font-semibold font-sans">Skin & Hair Clinic</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-semibold text-[#065F46]/80 hover:text-[#065F46] transition-colors">About Us</a>
              <a href="#estimator" className="text-sm font-semibold text-[#065F46]/80 hover:text-[#065F46] transition-colors">Treatment Estimator</a>
              <a href="#services" className="text-sm font-semibold text-[#065F46]/80 hover:text-[#065F46] transition-colors">Our Services</a>
              <a href="#testimonials" className="text-sm font-semibold text-[#065F46]/80 hover:text-[#065F46] transition-colors">Transformations</a>
              <a href="#book" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#065F46] hover:bg-[#065F46]/90 shadow-md shadow-[#065F46]/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Reserve Consultation
              </a>
            </div>

            {/* Mobile Nav Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#065F46] hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EAF0EB] border-b border-[#065F46]/10 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-[#065F46]/80">About Us</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-[#065F46]/80">Treatment Estimator</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-[#065F46]/80">Our Services</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-[#065F46]/80">Transformations</a>
            <a href="#book" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-6 py-3 rounded-full text-base font-semibold text-white bg-[#065F46]">
              Reserve Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Area */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A7F3D0]/30 border border-[#065F46]/10 text-[#065F46] text-xs font-bold uppercase tracking-wider">
                <Activity className="w-4 h-4 text-[#065F46]" />
                Tolichowki's Trusted Skincare Sanctuary
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold font-serif text-[#065F46] leading-tight">
                Embrace your skin's <br />
                <span className="italic font-normal text-emerald-800">natural radiance</span>
              </h1>

              <p className="text-lg text-emerald-950/80 leading-relaxed max-w-xl">
                Experience clinical excellence fused with botanical serenity. Our personalized, advanced dermatological therapies restore, revive, and nourish your skin and hair to their pristine, healthy balance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#book" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#065F46] hover:bg-[#065F46]/90 rounded-full shadow-lg shadow-[#065F46]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                  Book Free Skin Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#estimator" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#065F46] bg-white border border-[#065F46]/20 hover:bg-emerald-50 rounded-full shadow-sm transition-all">
                  Estimate Treatment Cost
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#065F46]/10">
                <div>
                  <h3 className="text-2xl font-bold text-[#065F46] font-serif">12+</h3>
                  <p className="text-xs text-emerald-950/70 font-semibold uppercase tracking-wider">Years Legacy</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#065F46] font-serif">15,000+</h3>
                  <p className="text-xs text-emerald-950/70 font-semibold uppercase tracking-wider">Happy Patients</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#065F46] font-serif">100%</h3>
                  <p className="text-xs text-emerald-950/70 font-semibold uppercase tracking-wider">Light & Safe Tech</p>
                </div>
              </div>
            </div>

            {/* Illustration Graphic Area */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#A7F3D0] rounded-[2.5rem] transform rotate-3 scale-102 opacity-25 blur-lg" />
              <div className="relative bg-white border border-[#065F46]/10 p-8 rounded-[2.5rem] shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[#065F46]/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EAF0EB] flex items-center justify-center">
                      <Heart className="text-[#065F46] w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-slate-800">Hydration Index</h4>
                      <p className="text-xs text-slate-400">Clinical Skin Moisture Analysis</p>
                    </div>
                  </div>
                  <span className="text-[#065F46] font-bold text-sm bg-[#A7F3D0]/40 px-3 py-1 rounded-full">Active</span>
                </div>

                {/* Interactive Leaf Motif SVG */}
                <div className="bg-[#EAF0EB] rounded-2xl p-6 flex justify-center items-center border border-[#065F46]/5">
                  <svg className="w-full max-w-[220px] text-[#065F46]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    {/* Organic leaf pattern showing growth and wellness */}
                    <path d="M50 85 C50 85 80 55 80 35 C80 15 65 15 50 35 C35 15 20 15 20 35 C20 55 50 85 50 85 Z" fill="url(#leafGrad)" strokeWidth="3" />
                    <path d="M50 85 L50 35" strokeDasharray="3,3" />
                    <path d="M50 70 C55 65 65 60 70 62" />
                    <path d="M50 60 C45 55 35 50 30 52" />
                    <path d="M50 50 C55 45 62 40 68 42" />
                    <path d="M50 40 C45 35 38 30 32 32" />
                    <defs>
                      <linearGradient id="leafGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#A7F3D0" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600">Cellular Rejuvenation Rate</span>
                    <span className="font-bold text-[#065F46]">94%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-[#065F46] h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                  <p className="text-xs text-center text-slate-500 italic mt-2">
                    "Clinically proven botanically active skincare."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Clinic Expertise/About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-br from-[#EAF0EB] to-[#A7F3D0]/30 border border-[#065F46]/10 p-4 relative overflow-hidden shadow-md">
                {/* Decorative absolute components */}
                <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#065F46]/5 max-w-[180px] space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Star className="text-amber-500 w-4 h-4 fill-amber-500" />
                    <Star className="text-amber-500 w-4 h-4 fill-amber-500" />
                    <Star className="text-amber-500 w-4 h-4 fill-amber-500" />
                    <Star className="text-amber-500 w-4 h-4 fill-amber-500" />
                    <Star className="text-amber-500 w-4 h-4 fill-amber-500" />
                  </div>
                  <p className="text-xs font-bold text-slate-800">4.9/5 Google Rating</p>
                  <p className="text-[10px] text-slate-500">Based on 2,400+ reviews in Tolichowki</p>
                </div>

                <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#065F46]/5 max-w-[200px] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[#065F46] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">ISO Certified</h4>
                    <p className="text-[10px] text-slate-500">Clinical Hygiene Standards</p>
                  </div>
                </div>

                {/* Large botanical icon sketch in place of image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Heart className="w-32 h-32 text-[#065F46]/10" />
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-sm font-bold text-[#065F46] uppercase tracking-widest">Our Legacy</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#065F46]">
                Where Medical Precision Meets Natural Balance
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                Radiance Skin & Hair Clinic is Tolichowki's premier destination for advanced medical aesthetics. Founded on the principle of minimal-invasive clinical skin correction, we merge state-of-the-art US FDA-approved lasers with bio-inspired soothing formulations.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Our treatments are designed to match your body’s unique genetic recovery processes. Led by expert dermatologists, our team ensures every procedure — from minor acne scar subcisions to high-density hair transplants — is conducted in an environment focused on your health, serenity, and hydration.
              </p>

              {/* Highlights List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  'US FDA-Approved Technologies',
                  'Personalized Hydration Cocktails',
                  'Hyderabad’s Top Dermatologists',
                  'Post-Treatment Organic Care Kits',
                  'Safe & Sterile Clinical Environment',
                  'Transparent Estimations & Packages'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#A7F3D0]/40 flex items-center justify-center shrink-0">
                      <Check className="text-[#065F46] w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-950/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-24 bg-[#EAF0EB] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#065F46] uppercase tracking-widest">Pricing Transparency</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#065F46]">Interactive Price Estimator</h3>
            <p className="text-emerald-950/70">
              Customize your wellness path. Choose your treatment category, specify the body area, and select the number of sessions to get an instant, transparent cost breakdown.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Estimator Controls (Col 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#065F46]/10 shadow-sm space-y-8">
              {/* Step 1: Select Treatment */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-[#065F46] uppercase tracking-wider">
                  Step 1: Select Treatment Category
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {Object.values(RADIANCE_TREATMENTS).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTreatment(t.id)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                        selectedTreatment === t.id
                          ? 'border-[#065F46] bg-[#EAF0EB]/50'
                          : 'border-slate-100 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{t.description}</p>
                      </div>
                      <span className="text-xs font-bold text-[#065F46] mt-3 block">
                        Starts from ₹{t.basePrice} / session
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Area */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-[#065F46] uppercase tracking-wider">
                  Step 2: Select Body Area Coverage
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(RADIANCE_BODY_AREAS).map(([key, a]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`py-3 px-2 rounded-xl text-center border text-sm font-semibold transition-all ${
                        selectedArea === key
                          ? 'border-[#065F46] bg-[#065F46] text-white shadow-sm'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {a.name}
                      <span className="block text-[10px] opacity-85 mt-0.5">({a.multiplier}x multiplier)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Choose Sessions */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-bold text-[#065F46] uppercase tracking-wider">
                    Step 3: Choose Number of Sessions
                  </label>
                  <span className="bg-[#A7F3D0]/60 text-[#065F46] font-bold text-sm px-3 py-1 rounded-full">
                    {sessions} {sessions === 1 ? 'Session' : 'Sessions'}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={sessions}
                    onChange={(e) => setSessions(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#065F46]"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSessions(prev => Math.max(1, prev - 1))}
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 text-[#065F46] font-bold text-lg"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setSessions(prev => Math.min(12, prev + 1))}
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 text-[#065F46] font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Offer Alerts */}
                {sessions >= 6 ? (
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Volume Discount Activated:</strong> 20% OFF package discount applied!</span>
                  </div>
                ) : sessions >= 3 ? (
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Multi-Session Discount:</strong> 10% OFF applied. Add {6 - sessions} more sessions for 20% OFF!</span>
                  </div>
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-xs flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Tip: Book 3 sessions for 10% discount, or 6+ sessions for 20% discount.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Estimator Receipt (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#065F46]/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#A7F3D0] text-[#065F46] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-2xl">
                  Live Estimate
                </div>

                <div className="space-y-6 pt-4">
                  <div className="border-b border-[#065F46]/5 pb-4">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Selected Plan</span>
                    <h4 className="text-lg font-serif font-bold text-[#065F46] mt-1">{treatment.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">Area Coverage: {area.name}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Rate per session</span>
                      <span className="font-semibold text-slate-800">₹{pricePerSession.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Total for {sessions} sessions</span>
                      <span className="font-semibold text-slate-800">₹{rawTotal.toLocaleString('en-IN')}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-sm text-emerald-700 font-semibold bg-emerald-50 p-2 rounded-lg">
                        <span>Discount ({discountPercent}%)</span>
                        <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="font-semibold text-slate-800">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">GST (18% Clinical Services)</span>
                      <span className="font-semibold text-slate-800">₹{gst.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#065F46]/10 pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Estimated Total</span>
                      <span className="text-sm text-slate-400">(Inclusive of tax)</span>
                    </div>
                    <span className="text-3xl font-bold font-serif text-[#065F46]">
                      ₹{finalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <a
                    href="#book"
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        treatment: selectedTreatment
                      }));
                    }}
                    className="w-full inline-flex justify-center items-center py-3 bg-[#065F46] hover:bg-[#065F46]/90 text-white font-bold rounded-2xl shadow-md transition-all text-sm"
                  >
                    Lock Estimate & Book Form
                  </a>
                </div>
              </div>

              {/* Dynamic treatment visualizer simulator */}
              <div className="bg-white rounded-3xl p-6 border border-[#065F46]/10 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-[#065F46] uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Dermal Layer Recovery Preview
                </h4>
                
                {/* Responsive SVG representing deep skin structure */}
                <div className="bg-[#EAF0EB] rounded-2xl p-4 flex justify-center items-center border border-[#065F46]/5">
                  <svg className="w-full max-h-[160px]" viewBox="0 0 200 80" fill="none">
                    {/* Stratum Corneum (Epidermis) */}
                    <path d="M0 15 C20 12, 40 18, 60 15 C80 12, 100 18, 120 15 C140 12, 160 18, 180 15 C200 12, 220 18, 240 15" stroke="#065F46" strokeWidth="1.5" />
                    
                    {/* Dermal Layer Base */}
                    <rect x="0" y="16" width="200" height="64" fill="#A7F3D0" fillOpacity={0.2} />

                    {/* Laser / Treatment effect indicators based on current sessions selected */}
                    {selectedTreatment === 'skin' && (
                      <>
                        {/* Laser beam */}
                        <line x1="100" y1="0" x2="100" y2="40" stroke="#EF4444" strokeWidth="2" strokeDasharray="2,2" />
                        <circle cx="100" cy="40" r="12" fill="#EF4444" fillOpacity={0.2} />
                        {/* Blemishes clearing up with higher sessions */}
                        {sessions < 6 && <circle cx="70" cy="30" r="4" fill="#C2593F" />}
                        {sessions < 3 && <circle cx="130" cy="35" r="5" fill="#C2593F" />}
                        <text x="10" y="70" fill="#065F46" fontSize="8" fontWeight="bold">Laser Revision Mode</text>
                      </>
                    )}

                    {selectedTreatment === 'hair' && (
                      <>
                        {/* Hair follicles growing */}
                        <path d="M60 45 Q55 30 50 20" stroke="#065F46" strokeWidth="1.5" />
                        <path d="M100 50 Q95 30 90 20" stroke="#065F46" strokeWidth="1.5" />
                        <path d="M140 45 Q135 30 130 20" stroke="#065F46" strokeWidth="1.5" />
                        {sessions >= 4 && (
                          <>
                            <path d="M80 47 Q75 32 70 22" stroke="#065F46" strokeWidth="1" />
                            <path d="M120 47 Q115 32 110 22" stroke="#065F46" strokeWidth="1" />
                          </>
                        )}
                        <text x="10" y="70" fill="#065F46" fontSize="8" fontWeight="bold">Hair Density: {sessions >= 6 ? 'Excellent' : 'Moderate'}</text>
                      </>
                    )}

                    {selectedTreatment === 'hydrafacial' && (
                      <>
                        {/* Hydration / Water drops */}
                        <circle cx="60" cy="35" r="3" fill="#3B82F6" fillOpacity={0.7} />
                        <circle cx="100" cy="25" r="4" fill="#3B82F6" fillOpacity={0.7} />
                        <circle cx="140" cy="30" r="3" fill="#3B82F6" fillOpacity={0.7} />
                        {sessions >= 3 && <circle cx="80" cy="40" r="3" fill="#3B82F6" fillOpacity={0.7} />}
                        {sessions >= 6 && <circle cx="120" cy="40" r="3" fill="#3B82F6" fillOpacity={0.7} />}
                        <text x="10" y="70" fill="#065F46" fontSize="8" fontWeight="bold">Botanical Hydration Active</text>
                      </>
                    )}

                    {selectedTreatment === 'antiaging' && (
                      <>
                        {/* Collagen helix representation */}
                        <path d="M40 30 Q50 20 60 30 T80 30 T100 30 T120 30 T140 30" stroke="#EAB308" strokeWidth="2" />
                        <text x="10" y="70" fill="#065F46" fontSize="8" fontWeight="bold">Collagen Network Density: {Math.round(50 + (sessions * 4))}%</text>
                      </>
                    )}

                    {/* Collagen/Elasticity indicators */}
                    <circle cx="180" cy="30" r="2" fill="#065F46" />
                    <circle cx="185" cy="50" r="2" fill="#065F46" />
                  </svg>
                </div>
                
                <p className="text-[11px] text-slate-500 leading-normal">
                  *This simulation estimates average dermal improvement progression based on a clinical package of {sessions} {sessions === 1 ? 'session' : 'sessions'}. Individual results may vary based on skin type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#065F46] uppercase tracking-widest">Dermatology Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#065F46]">Custom Clinical Procedures</h3>
            <p className="text-slate-600">
              Each clinical treatment is customized, pairing active botanicals with gold-standard dermatology technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fractional CO2 Laser Resurfacing',
                description: 'Advanced fractional laser therapy targeting severe acne scarring, surgical scars, and uneven tone.',
                time: '60 mins',
                price: '₹5,500',
                tag: 'Clinical Rebuild'
              },
              {
                title: 'Platelet-Rich Plasma (PRP) Therapy',
                description: 'Growth factors extracted from your own cells injected to reverse hair thinning and rejuvenate skin tone.',
                time: '75 mins',
                price: '₹6,500',
                tag: 'Natural Cell Boost'
              },
              {
                title: 'FUE Hair Transplantation',
                description: 'High-precision micro-grafting for natural, long-lasting hairline restoration and beard framing.',
                time: '4 - 6 hours',
                price: '₹45,000',
                tag: 'Permanent Restoration'
              },
              {
                title: 'Mint & Sage Botanical HydraFacial',
                description: 'Exfoliation, customized peeling, extraction, and deep antioxidant hydration using pure herbal serums.',
                time: '45 mins',
                price: '₹3,500',
                tag: 'Fresh Hydration'
              },
              {
                title: 'Dermatological Chemical Peels',
                description: 'Salicylic, Glycolic, or TCA chemical peels tailored to combat active acne, blemishes, and melasma.',
                time: '30 mins',
                price: '₹2,500',
                tag: 'Skin Renewal'
              },
              {
                title: 'Microneedling Collagen Therapy',
                description: 'Stimulates elastin and collagen fibers via micro-channels, restoring skin density and firmness.',
                time: '60 mins',
                price: '₹6,500',
                tag: 'Volume & Lift'
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#EAF0EB]/40 rounded-3xl p-8 border border-[#065F46]/5 hover:border-[#065F46]/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-[#065F46] bg-[#A7F3D0]/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {s.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#EAF0EB] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#065F46]" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold font-serif text-[#065F46] group-hover:text-emerald-800 transition-colors">
                    {s.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="border-t border-[#065F46]/5 pt-6 mt-6 flex justify-between items-center text-sm font-semibold">
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{s.time}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-normal">Starts from</span>
                    <span className="text-[#065F46] font-bold font-serif text-base">{s.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="book" className="py-24 bg-[#EAF0EB] relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] border border-[#065F46]/10 p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Soft decorative background leaf */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#A7F3D0]/15 to-transparent rounded-full blur-xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0EB] flex items-center justify-center mx-auto mb-2 text-[#065F46]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#065F46]">Schedule Consultation Slot</h3>
              <p className="text-slate-500 text-sm">
                Reserve your clinical assessment with our senior dermatologists. Lock in your session estimate or request a fresh skin diagnosis.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-[#065F46]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#065F46]">Consultation Reserved Successfully!</h4>
                  <p className="text-sm text-slate-600">
                    Your scheduling slot has been secured. Our client coordinator will call you back within 2 hours.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-100 text-left max-w-md mx-auto space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Reference ID:</span>
                    <span className="font-bold text-slate-700">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Patient Name:</span>
                    <span className="font-bold text-slate-700">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Treatment:</span>
                    <span className="font-bold text-slate-700">
                      {RADIANCE_TREATMENTS[formData.treatment]?.name || formData.treatment}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date & Slot:</span>
                    <span className="font-bold text-slate-700">{formData.date} | {formData.timeSlot}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      treatment: 'skin',
                      date: '',
                      timeSlot: '11:00 AM - 01:00 PM',
                      consent: false
                    });
                  }}
                  className="inline-flex items-center text-sm font-bold text-[#065F46] hover:underline"
                >
                  <RefreshCw className="w-4 h-4 mr-1.5" />
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider">
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
                        placeholder="Enter full name"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 outline-none transition-all text-sm text-slate-800 ${
                          errors.name ? 'border-red-300 focus:ring-1 focus:ring-red-400 bg-red-50/10' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider">
                      Contact Phone Number
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
                        placeholder="9246543167"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 outline-none transition-all text-sm text-slate-800 ${
                          errors.phone ? 'border-red-300 focus:ring-1 focus:ring-red-400 bg-red-50/10' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider">
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
                        placeholder="example@radiance.in"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 outline-none transition-all text-sm text-slate-800 ${
                          errors.email ? 'border-red-300 focus:ring-1 focus:ring-red-400 bg-red-50/10' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Treatment Dropdown */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider">
                      Desired Clinical Focus
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none transition-all text-sm text-slate-600 focus:border-[#065F46] focus:bg-white"
                    >
                      {Object.values(RADIANCE_TREATMENTS).map((t) => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider">
                      Preferred Date
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
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 outline-none transition-all text-sm text-slate-800 ${
                          errors.date ? 'border-red-300 focus:ring-1 focus:ring-red-400 bg-red-50/10' : 'border-slate-200 focus:border-[#065F46] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  {/* Time Slot */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider">
                      Preferred Time Slot
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none transition-all text-sm text-slate-600 focus:border-[#065F46] focus:bg-white"
                    >
                      <option>09:00 AM - 11:00 AM (Early Clinical)</option>
                      <option>11:00 AM - 01:00 PM (Mid Morning)</option>
                      <option>02:00 PM - 04:00 PM (Early Afternoon)</option>
                      <option>04:00 PM - 06:00 PM (Evening Rejuvenation)</option>
                      <option>06:00 PM - 08:00 PM (Late Walk-in)</option>
                    </select>
                  </div>
                </div>

                {/* Checkbox Consent */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 rounded border-slate-300 text-[#065F46] focus:ring-[#065F46] w-4 h-4 shrink-0"
                    />
                    <span className="text-xs text-slate-500 leading-normal select-none">
                      I agree to the clinic wellness guidelines. I understand that medical aesthetics require direct evaluation by a certified dermatologist and that the estimate shown is for advisory budgeting purposes only.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#065F46] hover:bg-[#065F46]/90 text-white font-bold rounded-2xl shadow-lg shadow-[#065F46]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Securing Consultation Slot...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Secure Consultation Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Patient Transformations/Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#065F46] uppercase tracking-widest">Client Success</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#065F46]">Dermal Transformations</h3>
            <p className="text-slate-600">
              Verified clinical results from patients living in Tolichowki, Hyderabad and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ananya Reddy',
                location: 'Gachibowli, Hyderabad',
                treatment: 'Laser Acne Scar Revision',
                rating: 5,
                comment: 'The pitted scarring on my cheeks was extremely deep. After 4 sessions of their Fractional CO2 laser combined with the botanical care kit, the depth has reduced by almost 80%. The healing was very fast.',
                before: 'Severe pitted acne scarring',
                after: 'Pores refined, 80% flat texture'
              },
              {
                name: 'Mohammed Sohail',
                location: 'Tolichowki Main Road',
                treatment: 'FUE Hair Transplant',
                rating: 5,
                comment: 'I was skeptical about transplant hair density. Dr. Radiance team mapped out my hairline meticulously. I received 3,500 grafts. Six months down the line, my hair is thick, organic, and the hairline looks completely natural.',
                before: 'Receding hairline, stage 4 thinning',
                after: 'Thick organic hairline restored'
              },
              {
                name: 'Pranitha Rao',
                location: 'Mehdipatnam, Hyderabad',
                treatment: 'Botanical Infused HydraFacial',
                rating: 5,
                comment: 'My skin gets extremely dry and dehydrated. The sage and mint antioxidant facial is incredibly soothing. I book it every month. The hydration feels fresh, and the texture stays plump for weeks.',
                before: 'Dull, flaky, dehydrated skin',
                after: 'Luminous skin texture, moisture-locked'
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#EAF0EB]/40 rounded-3xl p-6 border border-[#065F46]/5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{t.name}</h4>
                      <p className="text-xs text-slate-400">{t.location}</p>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>

                  <span className="inline-block text-xs font-bold text-[#065F46] bg-[#A7F3D0]/60 px-2.5 py-0.5 rounded-full">
                    {t.treatment}
                  </span>

                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-[#065F46]/5 pt-4 text-xs font-semibold">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">Before</span>
                    <span className="text-red-700 mt-1 block">{t.before}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">After</span>
                    <span className="text-emerald-700 mt-1 block">{t.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#065F46] text-[#EAF0EB] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Brand details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#A7F3D0] w-6 h-6" />
                <span className="font-serif font-bold text-xl text-white">Radiance</span>
              </div>
              <p className="text-xs text-[#EAF0EB]/70 leading-relaxed max-w-xs">
                Clinical dermatology combined with premium biophilic wellness. Empowering you to embrace skin health through safe, medical-grade, state-of-the-art procedures.
              </p>
              <div className="flex gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-colors">
                  <Activity className="w-4 h-4 text-[#A7F3D0]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-colors">
                  <Camera className="w-4 h-4 text-[#A7F3D0]" />
                </div>
              </div>
            </div>

            {/* Column 2: Quick links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Treatment Paths</h4>
              <ul className="space-y-2 text-xs text-[#EAF0EB]/70 font-semibold">
                <li><a href="#estimator" className="hover:text-[#A7F3D0] transition-colors">Dermal Scar Revision</a></li>
                <li><a href="#estimator" className="hover:text-[#A7F3D0] transition-colors">Laser Hair Therapy</a></li>
                <li><a href="#estimator" className="hover:text-[#A7F3D0] transition-colors">PRP Hair Growth</a></li>
                <li><a href="#estimator" className="hover:text-[#A7F3D0] transition-colors">Botanical Facials</a></li>
              </ul>
            </div>

            {/* Column 3: Contact details */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Details</h4>
              <div className="space-y-3 text-xs text-[#EAF0EB]/70 font-semibold">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                  <span>+91 92465 43167 (Direct Call)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                  <span>appointments@radianceskinclinic.in</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                  <span>Mon-Sat: 10AM - 8PM | Sun: 11AM - 4PM</span>
                </div>
              </div>
            </div>

            {/* Column 4: Address Map Pin */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Tolichowki Location</h4>
              <div className="flex items-start gap-2.5 text-xs text-[#EAF0EB]/70 font-semibold leading-relaxed">
                <MapPin className="w-5 h-5 text-[#A7F3D0] shrink-0" />
                <span>
                  1st Floor, Royal Plaza, Near Tolichowki Flyover, Above HDFC Bank, Tolichowki, Hyderabad, Telangana 500008
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] text-[#EAF0EB]/60">
                Landmark: Opposite Rumaan Hotel / Flyover Pillar 25
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#EAF0EB]/50">
            <p>&copy; {new Date().getFullYear()} Radiance Skin & Hair Clinic. All rights reserved.</p>
            <p>Designed for premium clinical representation. Tolichowki, Hyderabad.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

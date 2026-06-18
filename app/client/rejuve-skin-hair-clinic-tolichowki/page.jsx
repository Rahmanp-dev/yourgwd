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
  Loader2,
  Clock,
  ChevronRight,
  Award,
  Users,
  AlertCircle,
  Scissors,
  Smile,
  Heart
} from 'lucide-react';

// Estimator Configurations
const TREATMENTS = {
  'laser-hair': { name: 'US-FDA Laser Hair Reduction (Soprano Titanium)', basePrice: 2500, category: 'Laser' },
  'anti-acne': { name: 'Acne Clarifying & Salicylic Peel Therapy', basePrice: 1800, category: 'Skin' },
  'hair-prp': { name: 'Autologous PRP Hair Restoration (Dr. PRP)', basePrice: 4500, category: 'Hair' },
  'skin-brightening': { name: 'Signature Rejuve Radiance Q-Switched Peel', basePrice: 3200, category: 'Skin' },
  'anti-aging': { name: 'Collagen-Boost HIFU Non-Surgical Lift', basePrice: 6000, category: 'Anti-Aging' }
};

const BODY_AREAS = {
  'face': { name: 'Face & Neck', factor: 1.0 },
  'underarms': { name: 'Underarms', factor: 0.8 },
  'arms': { name: 'Full Arms', factor: 1.5 },
  'legs': { name: 'Full Legs', factor: 1.8 },
  'full-body': { name: 'Full Body (Premium)', factor: 3.5 }
};

const SESSION_PACKAGES = [
  { count: 1, label: 'Single Session', discount: 0 },
  { count: 3, label: '3 Sessions (10% Off)', discount: 0.10 },
  { count: 6, label: '6 Sessions (15% Off)', discount: 0.15 },
  { count: 8, label: '8 Sessions (20% Off - Best Value)', discount: 0.20 }
];

export default function RejuveClinicPage() {
  // Estimator State
  const [selectedTreatment, setSelectedTreatment] = useState('laser-hair');
  const [selectedArea, setSelectedArea] = useState('face');
  const [selectedSessionCount, setSelectedSessionCount] = useState(3);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'laser-hair',
    date: '',
    time: 'morning',
    sessions: '3',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Estimator Calculations
  const treatment = TREATMENTS[selectedTreatment];
  const area = BODY_AREAS[selectedArea];
  const sessionPkg = SESSION_PACKAGES.find(p => p.count === selectedSessionCount) || SESSION_PACKAGES[1];

  const singleSessionPrice = Math.round(treatment.basePrice * area.factor);
  const totalBeforeDiscount = singleSessionPrice * selectedSessionCount;
  const discountAmount = Math.round(totalBeforeDiscount * sessionPkg.discount);
  const subtotal = totalBeforeDiscount - discountAmount;
  const gstAmount = Math.round(subtotal * 0.18); // 18% Medical Aesthetics GST
  const finalPrice = subtotal + gstAmount;

  // Sync Estimator to Form
  const applyEstimateToBooking = () => {
    setFormData(prev => ({
      ...prev,
      service: selectedTreatment,
      sessions: selectedSessionCount.toString(),
      notes: `Applied estimate for ${treatment.name} on ${area.name} (${selectedSessionCount} sessions).`
    }));
    // Smooth scroll to form
    const formElement = document.getElementById('booking-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Input Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = 'Date must be today or in the future';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'laser-hair',
      date: '',
      time: 'morning',
      sessions: '3',
      notes: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#4A154B] font-[family-name:var(--font-plus-jakarta)] selection:bg-[#A855F7]/20 selection:text-[#4A154B]">
      
      {/* Top Banner */}
      <div className="bg-[#4A154B] text-[#FAF5FF] text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#A855F7]" />
          Book online today for a complimentary dermatological scan. Call us directly at <a href="tel:+919246112233" className="underline hover:text-[#A855F7] font-bold">+91 92461 12233</a>
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FAF5FF]/95 backdrop-blur-md border-b border-[#4A154B]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col text-left">
            <span className="text-xl font-[family-name:var(--font-cormorant-garamond)] font-bold tracking-widest text-[#4A154B] uppercase">
              REJUVE
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#A855F7] uppercase font-bold pl-0.5 mt-0.5">
              Skin & Hair Clinic
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#4A154B]/80">
            <a href="#expertise" className="hover:text-[#A855F7] transition-colors">Philosophy</a>
            <a href="#estimator" className="hover:text-[#A855F7] transition-colors">Cost Estimator</a>
            <a href="#services" className="hover:text-[#A855F7] transition-colors">Treatments</a>
            <a href="#testimonials" className="hover:text-[#A855F7] transition-colors">Transformations</a>
            <a href="#footer" className="hover:text-[#A855F7] transition-colors">Location</a>
          </nav>

          <div>
            <a 
              href="#booking-section"
              className="bg-[#4A154B] hover:bg-[#A855F7] text-[#FAF5FF] px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32 px-6">
        {/* Soft Floral SVG Border Decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#4A154B]">
            <path d="M100 0C110.833 33.3333 133.333 55.8333 166.667 66.6667C133.333 77.5 110.833 100 100 133.333C89.1667 100 66.6667 77.5 33.3333 66.6667C66.6667 55.8333 89.1667 33.3333 100 0Z" fill="currentColor" />
            <path d="M150 120C155.417 136.667 166.667 147.917 183.333 153.333C166.667 158.75 155.417 170 150 186.667C144.583 170 133.333 158.75 116.667 153.333C133.333 147.917 144.583 136.667 150 120Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#4A154B]">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" />
            <path d="M100 40C100 40 120 70 100 100C80 70 100 40 100 40Z" fill="currentColor" />
            <path d="M100 100C100 100 120 130 100 160C80 130 100 100 100 100Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center text-left relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4A154B]/20 bg-[#4A154B]/5 text-xs font-semibold tracking-wider text-[#A855F7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tolichowki's Premier Aesthetics Clinic</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-[family-name:var(--font-cormorant-garamond)] font-normal text-[#4A154B] leading-[1.08] tracking-tight">
              Science Meets Indulgence.<br />
              <span className="italic font-light text-[#A855F7]">Your Skin, Reimagined.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4A154B]/70 max-w-xl leading-relaxed">
              At Rejuve Clinic, we combine medical-grade dermatological procedures with an exquisite, boutique atmosphere. Reclaim your skin's vibrant glow and your hair's lush fullness under the guidance of Hyderabad's elite aesthetic experts.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="#estimator" 
                className="bg-[#A855F7] hover:bg-[#4A154B] text-[#FAF5FF] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl text-center"
              >
                Estimate Treatment Cost
              </a>
              <a 
                href="tel:+919246112233" 
                className="border border-[#4A154B]/30 hover:border-[#4A154B] hover:bg-[#4A154B]/5 text-[#4A154B] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#A855F7]" />
                <span>+91 92461 12233</span>
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#4A154B]/10 max-w-lg">
              <div>
                <span className="block text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[#A855F7] font-semibold">12K+</span>
                <span className="text-[10px] text-[#4A154B]/60 uppercase tracking-widest font-bold">Happy Patients</span>
              </div>
              <div>
                <span className="block text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[#A855F7] font-semibold">15+</span>
                <span className="text-[10px] text-[#4A154B]/60 uppercase tracking-widest font-bold">Years Expertise</span>
              </div>
              <div>
                <span className="block text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[#A855F7] font-semibold">99.8%</span>
                <span className="text-[10px] text-[#4A154B]/60 uppercase tracking-widest font-bold">Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#A855F7]/10 rounded-[2.5rem] blur-2xl transform rotate-6"></div>
            <div className="relative border-[6px] border-[#4A154B]/10 rounded-[2rem] overflow-hidden bg-[#FAF5FF] p-2 aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <div className="absolute top-4 left-4 z-20 bg-[#FAF5FF] border border-[#4A154B]/10 px-4 py-2.5 rounded-2xl shadow-md flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#4A154B]">Dermatologist In-Clinic Today</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=750" 
                alt="Elegant Skin Treatment Clinic" 
                className="w-full h-full object-cover rounded-[1.5rem]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & About Section */}
      <section id="expertise" className="py-20 bg-white border-y border-[#4A154B]/5 px-6">
        <div className="max-w-7xl mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#A855F7] inline-flex items-center gap-2">
                <Heart className="w-3.5 h-3.5" />
                <span>The Rejuve Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cormorant-garamond)] font-normal text-[#4A154B] leading-tight">
                Refining Clinical Skincare With Artistic Grace
              </h2>
              <p className="text-xs text-[#4A154B]/50 uppercase tracking-widest font-bold">Scientific protocols, premium ingredients.</p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-[#FAF5FF] border border-[#A855F7]/20 rounded-xl text-[#A855F7]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#4A154B]">US-FDA Approved Technology</h4>
                    <p className="text-xs text-[#4A154B]/60 mt-1">We invest exclusively in top-tier medical equipment like Soprano Titanium lasers and premium GFC protocols for maximum safety and efficacy.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-[#FAF5FF] border border-[#A855F7]/20 rounded-xl text-[#A855F7]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#4A154B]">Expert Clinical Dermatologists</h4>
                    <p className="text-xs text-[#4A154B]/60 mt-1">Our treatments are designed, supervised, and conducted by veteran dermatologists registered with national medical boards.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-[#FAF5FF] border border-[#A855F7]/20 rounded-xl text-[#A855F7]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#4A154B]">Tailored Aesthetic Journey</h4>
                    <p className="text-xs text-[#4A154B]/60 mt-1">No two skin profiles are alike. We build detailed customized maps for every patient, tracking collagen levels, moisture indices, and hair densities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              
              <div className="p-8 rounded-3xl bg-[#FAF5FF] border border-[#4A154B]/10 space-y-4 flex flex-col justify-between text-left group hover:border-[#A855F7]/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Advanced Haircare</span>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant-garamond)] text-[#4A154B] font-medium">Hair Restoration & GFC</h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Fight thinning and pattern baldness with high-density Growth Factor Concentrate (GFC) and advanced autologous Platelet-Rich Plasma. Proactive, natural follicular nourishment.
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-[#4A154B] group-hover:text-[#A855F7] transition-colors gap-1">
                  <span>Explore GFC Therapy</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAF5FF] border border-[#4A154B]/10 space-y-4 flex flex-col justify-between text-left group hover:border-[#A855F7]/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Skin Brightening</span>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant-garamond)] text-[#4A154B] font-medium">Q-Switched Laser & Peels</h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Target hyperpigmentation, melasma, and stubborn tanning. Our signature combination of clinical lactic/salicylic peels and precise laser toning reveals even-toned radiance.
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-[#4A154B] group-hover:text-[#A855F7] transition-colors gap-1">
                  <span>Explore Radiance Treatments</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAF5FF] border border-[#4A154B]/10 space-y-4 flex flex-col justify-between text-left group hover:border-[#A855F7]/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Laser Precision</span>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant-garamond)] text-[#4A154B] font-medium">Soprano Laser Hair Reduction</h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Virtually painless hair removal utilizing triple wavelength laser scanning. Tailored specifically for all Indian skin types with ICE cooling technology.
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-[#4A154B] group-hover:text-[#A855F7] transition-colors gap-1">
                  <span>Explore Laser Care</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAF5FF] border border-[#4A154B]/10 space-y-4 flex flex-col justify-between text-left group hover:border-[#A855F7]/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Anti-Aging</span>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant-garamond)] text-[#4A154B] font-medium">HIFU & Collagen Lift</h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Lift, tighten, and contour the jawline and mid-face without surgical downtime. Stimulates natural deep dermal collagen synthesis for organic youthfulness.
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-[#4A154B] group-hover:text-[#A855F7] transition-colors gap-1">
                  <span>Explore Collagen Boost</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#A855F7]">Transparent Pricing</div>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cormorant-garamond)] font-normal text-[#4A154B]">
              Interactive Treatment Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-[#4A154B]/60 max-w-xl mx-auto">
              Select your customized care parameters below. See immediate estimation breakdown, including medical packages and seasonal session savings.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Controls */}
            <div className="lg:col-span-7 bg-white border border-[#4A154B]/10 p-6 sm:p-8 rounded-3xl shadow-sm text-left flex flex-col justify-between space-y-6">
              
              {/* Treatment Type Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                  1. Select Clinical Treatment
                </label>
                <div className="grid gap-2">
                  {Object.entries(TREATMENTS).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTreatment(key)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex justify-between items-center ${
                        selectedTreatment === key
                          ? 'border-[#4A154B] bg-[#FAF5FF] font-semibold text-[#4A154B]'
                          : 'border-[#4A154B]/10 hover:border-[#A855F7]/40 text-[#4A154B]/80'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${selectedTreatment === key ? 'bg-[#A855F7]' : 'bg-[#4A154B]/20'}`}></span>
                        {val.name}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#A855F7] px-2 py-0.5 bg-[#FAF5FF] rounded-md border border-[#4A154B]/5">
                        {val.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Body Area Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                  2. Select Target Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(BODY_AREAS).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold tracking-wide transition-all duration-200 ${
                        selectedArea === key
                          ? 'border-[#4A154B] bg-[#4A154B] text-[#FAF5FF]'
                          : 'border-[#4A154B]/10 hover:border-[#A855F7]/40 bg-[#FAF5FF] text-[#4A154B]'
                      }`}
                    >
                      {val.name} <span className="text-[9px] opacity-75 font-normal">({val.factor}x)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sessions Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                  3. Select Session Package
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SESSION_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.count}
                      onClick={() => setSelectedSessionCount(pkg.count)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all duration-200 text-center ${
                        selectedSessionCount === pkg.count
                          ? 'border-[#A855F7] bg-[#A855F7] text-white'
                          : 'border-[#4A154B]/10 hover:border-[#A855F7]/40 bg-white text-[#4A154B]'
                      }`}
                    >
                      <div className="text-sm font-black">{pkg.count}</div>
                      <div className="text-[8px] tracking-tighter opacity-80 uppercase mt-0.5">{pkg.count === 1 ? 'Session' : 'Sessions'}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Price Report Display */}
            <div className="lg:col-span-5 bg-[#4A154B] text-[#FAF5FF] p-8 rounded-3xl text-left flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl">
              {/* Visual overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">ESTIMATE SUMMARY</div>
                <div className="space-y-1">
                  <h4 className="text-xl font-[family-name:var(--font-cormorant-garamond)] font-medium text-white">{treatment.name}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#FAF5FF]/60">{area.name} &bull; {selectedSessionCount} {selectedSessionCount === 1 ? 'Session' : 'Sessions'}</p>
                </div>

                <div className="pt-4 border-t border-[#FAF5FF]/10 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#FAF5FF]/70">Base Rate per session:</span>
                    <span>₹{treatment.basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF5FF]/70">Area Multiplier ({area.name}):</span>
                    <span>x {area.factor}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FAF5FF]/5 pb-2">
                    <span className="text-[#FAF5FF]/70">Single session cost:</span>
                    <span>₹{singleSessionPrice}</span>
                  </div>
                  
                  <div className="flex justify-between pt-1">
                    <span className="text-[#FAF5FF]/70">Gross price ({selectedSessionCount} sessions):</span>
                    <span>₹{totalBeforeDiscount}</span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Package Discount ({sessionPkg.discount * 100}%):</span>
                      <span>- ₹{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-[#FAF5FF]/70">Subtotal:</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between text-[#FAF5FF]/60 text-[10px]">
                    <span>Medical GST / Cess (18%):</span>
                    <span>₹{gstAmount}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 relative z-10 pt-4 border-t border-[#FAF5FF]/15">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#FAF5FF]/65">Total Est. Price:</span>
                  <span className="text-3xl font-[family-name:var(--font-cormorant-garamond)] font-semibold text-white tracking-wide">
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[9px] text-[#FAF5FF]/50 italic">
                  *Disclaimer: Estimates are subject to direct dermatological scan and physical evaluation of tissue conditions. GST is applicable as per clinical regulation.
                </p>

                <button
                  onClick={applyEstimateToBooking}
                  className="w-full bg-[#A855F7] hover:bg-white hover:text-[#4A154B] text-white py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span>Apply Estimate to Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white border-y border-[#4A154B]/5 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-left max-w-xl space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#A855F7] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Treatment Menu</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cormorant-garamond)] font-normal text-[#4A154B]">
              Advanced Clinical Programs
            </h2>
            <p className="text-xs sm:text-sm text-[#4A154B]/60 leading-relaxed">
              Explore our curated selection of medical aesthetics. Each protocol is executed using elite certified formulations and clinical systems in our sterile luxury cabins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            {/* Service 1 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-6 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/5 border border-[#4A154B]/10 flex items-center justify-center text-[#A855F7]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">
                    Q-Switched Laser Toning
                  </h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    FDA-approved laser sweeps that shatter pigmentation deep within dermal layers. Solves hyperpigmentation, hormonal melasma, and birthmarks without downtime.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#4A154B]/5 grid grid-cols-2 gap-4 text-[10px] text-[#4A154B]/60">
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Downtime</span>
                  <span>None / Same Day</span>
                </div>
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Duration</span>
                  <span>45 Minutes</span>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-6 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/5 border border-[#4A154B]/10 flex items-center justify-center text-[#A855F7]">
                  <Scissors className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">
                    Growth Factor Concentrate (GFC)
                  </h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Next-generation autologous hair therapy. Rich growth factors are isolated from the patient’s own platelets and injected directly into roots to halt hair fall and trigger regrowth.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#4A154B]/5 grid grid-cols-2 gap-4 text-[10px] text-[#4A154B]/60">
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Downtime</span>
                  <span>1-2 Hours</span>
                </div>
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Duration</span>
                  <span>60 Minutes</span>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-6 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/5 border border-[#4A154B]/10 flex items-center justify-center text-[#A855F7]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">
                    Soprano Ice Platinum LHR
                  </h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Super-fast, dual-chill laser hair reduction combining three wavelengths. Completely safe for darker skin and fine hair. Virtually pain-free experience.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#4A154B]/5 grid grid-cols-2 gap-4 text-[10px] text-[#4A154B]/60">
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Downtime</span>
                  <span>None</span>
                </div>
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Duration</span>
                  <span>30-90 Mins</span>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-6 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/5 border border-[#4A154B]/10 flex items-center justify-center text-[#A855F7]">
                  <Smile className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">
                    Salicylic Acid Clarifying Peel
                  </h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Medical exfoliation targeting sebaceous glands. Purges clogged pores, halts active cystic acne, and reduces red post-acne blemishes with botanical skin-comforting agents.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#4A154B]/5 grid grid-cols-2 gap-4 text-[10px] text-[#4A154B]/60">
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Downtime</span>
                  <span>Mild Peeling (2-3 days)</span>
                </div>
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Duration</span>
                  <span>30 Minutes</span>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-6 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/5 border border-[#4A154B]/10 flex items-center justify-center text-[#A855F7]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">
                    HIFU Non-Surgical Face Lift
                  </h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    High-Intensity Focused Ultrasound targeting the SMAS facial layer. Tightens loose neck tissues, defines jawlines, and lifts brows. Safe substitute for surgical facelifts.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#4A154B]/5 grid grid-cols-2 gap-4 text-[10px] text-[#4A154B]/60">
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Downtime</span>
                  <span>None</span>
                </div>
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Duration</span>
                  <span>60-90 Mins</span>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-6 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/5 border border-[#4A154B]/10 flex items-center justify-center text-[#A855F7]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">
                    Polynucleotide Skin Booster
                  </h3>
                  <p className="text-xs text-[#4A154B]/70 leading-relaxed">
                    Ultra-purified DNA fragment micro-injections. Promotes profound cellular recovery, neutralizes free radicals, improves hydration, and restores thin crepey skin under eyes.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#4A154B]/5 grid grid-cols-2 gap-4 text-[10px] text-[#4A154B]/60">
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Downtime</span>
                  <span>1 Day (Micro-bumps)</span>
                </div>
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[#A855F7]">Duration</span>
                  <span>45 Minutes</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Booking Consultation Form Section */}
      <section id="booking-section" className="py-20 px-6 bg-[#FAF5FF]">
        <div className="max-w-4xl mx-auto">
          
          <div className="grid md:grid-cols-12 gap-10 bg-white border border-[#4A154B]/10 rounded-[2.5rem] overflow-hidden shadow-xl">
            
            {/* Form Intro Side */}
            <div className="md:col-span-5 bg-[#4A154B] text-[#FAF5FF] p-8 sm:p-10 text-left flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[#A855F7]/10 opacity-30 pointer-events-none">
                <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M0 100 C 30 70, 70 70, 100 100" stroke="currentColor" strokeWidth="1" />
                  <path d="M0 80 C 30 50, 70 50, 100 80" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">APPOINTMENT BOOKING</div>
                <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-cormorant-garamond)] font-normal text-white leading-tight">
                  Schedule Your Clinical Session
                </h3>
                <p className="text-xs text-[#FAF5FF]/70 leading-relaxed font-light">
                  Complete the request parameters. A clinical coordinator will contact you via Phone or WhatsApp within 60 minutes to confirm your precise consultation window.
                </p>
              </div>

              <div className="space-y-4 pt-8 relative z-10 border-t border-[#FAF5FF]/10 text-xs text-[#FAF5FF]/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                  <span>Tolichowki Main Rd, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                  <span>+91 92461 12233</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                  <span>rejuvetolichowki@gmail.com</span>
                </div>
              </div>

            </div>

            {/* Actual Form */}
            <div className="md:col-span-7 p-8 sm:p-10 text-left">
              
              {formSubmitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12">
                  <div className="w-16 h-16 rounded-full bg-[#FAF5FF] border border-[#A855F7] flex items-center justify-center text-[#A855F7] animate-bounce shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-[family-name:var(--font-cormorant-garamond)] font-bold text-[#4A154B]">Appointment Requested!</h4>
                    <p className="text-xs text-[#4A154B]/60 max-w-sm">
                      Thank you <span className="font-bold text-[#4A154B]">{formData.name}</span>. We have registered your request for <span className="font-bold text-[#4A154B]">{TREATMENTS[formData.service]?.name || formData.service}</span> on <span className="font-bold text-[#4A154B]">{formData.date}</span> ({formData.time === 'morning' ? 'Morning Slot' : 'Afternoon Slot'}).
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="bg-[#4A154B] hover:bg-[#A855F7] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  >
                    Request Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 flex justify-between">
                      <span>Full Name *</span>
                      {formErrors.name && <span className="text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.name}</span>}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Mohammad Adnan"
                      className={`w-full p-3 rounded-xl border text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] ${formErrors.name ? 'border-red-400' : 'border-[#4A154B]/15'}`}
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 flex justify-between">
                        <span>Phone Number *</span>
                        {formErrors.phone && <span className="text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.phone}</span>}
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9246112233"
                        className={`w-full p-3 rounded-xl border text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] ${formErrors.phone ? 'border-red-400' : 'border-[#4A154B]/15'}`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 flex justify-between">
                        <span>Email Address *</span>
                        {formErrors.email && <span className="text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.email}</span>}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. adnan@gmail.com"
                        className={`w-full p-3 rounded-xl border text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] ${formErrors.email ? 'border-red-400' : 'border-[#4A154B]/15'}`}
                      />
                    </div>
                  </div>

                  {/* Service & Sessions Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                        Select Treatment *
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#4A154B]/15 text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] cursor-pointer"
                      >
                        {Object.entries(TREATMENTS).map(([key, val]) => (
                          <option key={key} value={key}>{val.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                        Planned Sessions *
                      </label>
                      <select 
                        name="sessions"
                        value={formData.sessions}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#4A154B]/15 text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] cursor-pointer"
                      >
                        <option value="1">Single Session (Trial)</option>
                        <option value="3">3 Sessions Package</option>
                        <option value="6">6 Sessions Package</option>
                        <option value="8">8 Sessions Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 flex justify-between">
                        <span>Preferred Date *</span>
                        {formErrors.date && <span className="text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.date}</span>}
                      </label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-xl border text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] ${formErrors.date ? 'border-red-400' : 'border-[#4A154B]/15'}`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                        Time Slot Preferred *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: 'morning' }))}
                          className={`p-3 rounded-xl border text-xs font-bold text-center transition-all duration-200 ${
                            formData.time === 'morning'
                              ? 'border-[#4A154B] bg-[#4A154B] text-[#FAF5FF]'
                              : 'border-[#4A154B]/10 hover:border-[#A855F7]/30 bg-[#FAF5FF] text-[#4A154B]'
                          }`}
                        >
                          Morning (10AM - 2PM)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: 'afternoon' }))}
                          className={`p-3 rounded-xl border text-xs font-bold text-center transition-all duration-200 ${
                            formData.time === 'afternoon'
                              ? 'border-[#4A154B] bg-[#4A154B] text-[#FAF5FF]'
                              : 'border-[#4A154B]/10 hover:border-[#A855F7]/30 bg-[#FAF5FF] text-[#4A154B]'
                          }`}
                        >
                          Evening (3PM - 8PM)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A154B]/70 block">
                      Clinical Concerns / History (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Share details about acne severity, previous surgeries, or expectations."
                      rows="3"
                      className="w-full p-3 rounded-xl border border-[#4A154B]/15 text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:ring-1 focus:ring-[#A855F7] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#A855F7] hover:bg-[#4A154B] text-white py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#FAF5FF]" />
                          <span>Validating Credentials...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white border-t border-[#4A154B]/5 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#A855F7]">Patient Transformations</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cormorant-garamond)] font-normal text-[#4A154B]">
              Real Results, Verified Journals
            </h2>
            <p className="text-xs sm:text-sm text-[#4A154B]/60 max-w-xl mx-auto">
              Read authentic feedback detailing the therapeutic progression and skin quality improvements achieved by our Tolichowki patients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-8 text-left space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#A855F7]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-base font-bold text-[#4A154B] leading-tight">
                  "No more thick sideburns! Truly life-changing laser hair removal."
                </h4>
                <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                  I had terrible facial hair growth due to PCOS. Six sessions of Soprano Laser at Rejuve Tolichowki completely cleared it. The cooling head makes it feel like an ice massage. Highly recommend.
                </p>
              </div>
              <div className="pt-6 border-t border-[#4A154B]/5 flex flex-col items-start">
                <span className="font-bold text-xs text-[#4A154B]">Ayesha Fatima</span>
                <span className="text-[10px] text-[#A855F7] uppercase font-bold mt-0.5">
                  Soprano Ice LHR &bull; Paramount Colony
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-8 text-left space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#A855F7]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-base font-bold text-[#4A154B] leading-tight">
                  "My hairfall stopped and fine hairs are thicker now."
                </h4>
                <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                  My scalp was showing due to sudden postpartum hair loss. I completed 4 sessions of Dr. PRP GFC here. The dermatologist was extremely patient, explaining the growth phase science.
                </p>
              </div>
              <div className="pt-6 border-t border-[#4A154B]/5 flex flex-col items-start">
                <span className="font-bold text-xs text-[#4A154B]">Sadaf Begum</span>
                <span className="text-[10px] text-[#A855F7] uppercase font-bold mt-0.5">
                  GFC Hair Therapy &bull; Shaikpet Road
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FAF5FF] border border-[#4A154B]/10 rounded-[2rem] p-8 text-left space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#A855F7]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-base font-bold text-[#4A154B] leading-tight">
                  "My persistent hormonal acne is finally in control."
                </h4>
                <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                  The salicylic chemical peel combined with their medical-grade acne guidelines cleared my active bumps in just 3 weeks. They don't oversell products and focus purely on clinical results.
                </p>
              </div>
              <div className="pt-6 border-t border-[#4A154B]/5 flex flex-col items-start">
                <span className="font-bold text-xs text-[#4A154B]">Zainab Khan</span>
                <span className="text-[10px] text-[#A855F7] uppercase font-bold mt-0.5">
                  Clarifying Peels &bull; MD Colony
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Store Details Footer */}
      <footer id="footer" className="bg-[#4A154B] text-[#FAF5FF] border-t border-[#FAF5FF]/10 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-left mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <span className="text-2xl font-[family-name:var(--font-cormorant-garamond)] tracking-widest text-[#FAF5FF] block">
              REJUVE CLINIC
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#A855F7] uppercase font-bold block pl-0.5">
              Medical Aesthetics & Skin Care
            </span>
            <p className="text-xs text-[#FAF5FF]/60 max-w-sm leading-relaxed font-light">
              Hyderabad's premium clinic specializing in high-end cosmetic dermatology, cellular hair regeneration, and advanced medical-grade aesthetic procedures. Certified clinical excellence since 2012.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-widest font-bold uppercase text-[#A855F7]">THE CLINIC</h4>
            <div className="space-y-3 text-xs text-[#FAF5FF]/70 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                <span>
                  Plot No. 12, First Floor, Paramount Colony Main Road,<br />
                  Tolichowki, Hyderabad,<br />
                  Telangana 500008.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A855F7]" />
                <a href="tel:+919246112233" className="hover:text-[#A855F7] transition-colors font-bold">+91 92461 12233</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A855F7]" />
                <a href="mailto:info@rejuveclinichyd.com" className="hover:text-[#A855F7] transition-colors">info@rejuveclinichyd.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-widest font-bold uppercase text-[#A855F7]">CLINIC HOURS</h4>
            <div className="space-y-2 text-xs text-[#FAF5FF]/70 font-light">
              <p className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="font-semibold text-white">10:00 AM - 8:30 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-red-400 font-semibold italic">Closed</span>
              </p>
              <p className="flex items-start gap-2 mt-4 text-[10px] text-[#FAF5FF]/50 border-t border-[#FAF5FF]/10 pt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                <span>All treatments supervised by State-Registered MD Dermatologists.</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#FAF5FF]/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#FAF5FF]/40 font-light">
          <p>&copy; {new Date().getFullYear()} Rejuve Skin & Hair Clinic. All Rights Reserved. Reg No: HYD/MC/2012/984.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 font-medium">
            <a href="#" className="hover:text-[#FAF5FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF5FF] transition-colors">Terms of Medical Care</a>
            <a href="#" className="hover:text-[#FAF5FF] transition-colors">FDA Certifications</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

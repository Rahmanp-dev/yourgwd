"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Send, 
  Award, 
  ShieldAlert, 
  Calendar, 
  ArrowRight, 
  User, 
  Mail, 
  Info, 
  Sliders, 
  Menu, 
  X,
  Heart
} from 'lucide-react';

export default function LabelleClinicBanjaraHillsPage() {
  // Mobile Nav State
  const [navOpen, setNavOpen] = useState(false);

  // Treatment Selector State
  const [selectedTreatment, setSelectedTreatment] = useState('pigmentation');
  const [selectedArea, setSelectedArea] = useState('face');
  const [selectedSessions, setSelectedSessions] = useState(6);

  // Treatment Estimator Pricing Rules
  const treatmentsConfig = {
    pigmentation: {
      name: 'Pigmentation Treatment',
      basePrice: 6500,
      description: 'Advanced Q-Switched Nd:YAG laser sessions targeting deep melanin deposits and melasma.',
      benefits: ['Fades dark spots & sun spots', 'Safe for all Indian skin types', 'Stimulates collagen renewal'],
      downtime: 'Mild pinkness for 2-4 hours',
      pain: 'Comfortable (cooling air gel applied)',
      interval: '4 weeks gap between sessions'
    },
    lightening: {
      name: 'Skin Lightening',
      basePrice: 5500,
      description: 'Medical-grade glutathione infusions and skin peeling solutions for deep tan removal and brightening.',
      benefits: ['Removes persistent sun tans', 'Evens out patchy skin tones', 'Provides a healthy clinical glow'],
      downtime: 'Zero downtime',
      pain: 'Completely painless & soothing',
      interval: '3 weeks gap between sessions'
    },
    'acne-scar': {
      name: 'Acne Scar Removal',
      basePrice: 7000,
      description: 'Fractional lasers and microneedling radiofrequency (MNRF) combined with clinical subcision.',
      benefits: ['Fills ice-pick and boxcar scars', 'Smoothens uneven skin texture', 'Shrinks enlarged skin pores'],
      downtime: 'Mild flaking for 2-3 days',
      pain: 'Tolerable (numbing cream applied)',
      interval: '6 weeks gap between sessions'
    }
  };

  const areaMultipliers = {
    face: { name: 'Face Only', mult: 1.0 },
    'face-neck': { name: 'Face & Neck', mult: 1.3 },
    'hands-arms': { name: 'Hands & Arms', mult: 1.5 },
    'full-back': { name: 'Full Back', mult: 1.8 }
  };

  const getDiscountRate = (sessions) => {
    if (sessions >= 10) return 0.25;
    if (sessions >= 6) return 0.20;
    if (sessions >= 3) return 0.10;
    return 0.0;
  };

  const calculateTotal = () => {
    const config = treatmentsConfig[selectedTreatment];
    const multiplier = areaMultipliers[selectedArea].mult;
    const pricePerSession = config.basePrice * multiplier;
    const subtotal = pricePerSession * selectedSessions;
    const discountRate = getDiscountRate(selectedSessions);
    const discountAmount = subtotal * discountRate;
    const discountedTotal = subtotal - discountAmount;
    const gst = discountedTotal * 0.18;
    const grandTotal = discountedTotal + gst;

    return {
      perSession: Math.round(pricePerSession),
      subtotal: Math.round(subtotal),
      discountRate: discountRate * 100,
      discount: Math.round(discountAmount),
      gst: Math.round(gst),
      total: Math.round(grandTotal)
    };
  };

  const priceBreakdown = calculateTotal();

  // Skin Assessment Questionnaire State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [answers, setAnswers] = useState({
    concern: '',
    exposure: '',
    sensitivity: ''
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  const handleAssessmentAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (key === 'concern') {
      setAssessmentStep(2);
    } else if (key === 'exposure') {
      setAssessmentStep(3);
    } else if (key === 'sensitivity') {
      // Calculate result
      let recommended = '';
      let tips = '';
      if (newAnswers.concern === 'pigmentation') {
        recommended = 'Labelle Premium Laser Tone Correct (Q-Switched Nd:YAG Laser)';
        tips = 'Ensure strict sun protection. Use a broad-spectrum SPF 50 sunscreen every 3 hours post-treatment. Avoid harsh chemical exfoliants for 5 days.';
      } else if (newAnswers.concern === 'dullness') {
        recommended = 'Labelle Luxe Radiance & Lightening Therapy';
        tips = 'Stay hydrated. A combination of peeling sessions and oral Vitamin C boosters will help secure long-term brightness.';
      } else {
        recommended = 'Labelle Microneedling Radiofrequency & Subcision';
        tips = 'Numbing cream is applied for comfort. Moisturize with ceramides post-session and avoid heavy makeup for 48 hours.';
      }

      setAssessmentResult({
        recommended,
        tips,
        concern: newAnswers.concern
      });
      setAssessmentStep(4);
    }
  };

  const resetAssessment = () => {
    setAnswers({ concern: '', exposure: '', sensitivity: '' });
    setAssessmentResult(null);
    setAssessmentStep(1);
  };

  // Appointment Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Pigmentation Treatment',
    date: '',
    slot: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errors = {};
    if (!form.name.trim()) {
      errors.name = 'Full Name is required';
    } else if (form.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        errors.phone = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (!form.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past';
      }
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        bookingId: `LAB-BH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Pre-fill form from assessment result
  const prefillFromAssessment = () => {
    if (!assessmentResult) return;
    let serviceMap = 'Pigmentation Treatment';
    if (assessmentResult.concern === 'dullness') serviceMap = 'Skin Lightening';
    if (assessmentResult.concern === 'scars') serviceMap = 'Acne Scar Removal';

    setForm(prev => ({
      ...prev,
      service: serviceMap,
      notes: `Based on automated skin assessment recommendation: ${assessmentResult.recommended}`
    }));

    // Scroll to booking form
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C2C2A] font-jakarta selection:bg-[#C5A880]/30 antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}} />

      {/* Header & Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#D1D1C4] transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-playfair text-2xl lg:text-3xl font-bold tracking-wider text-[#2C2C2A]">
              LABELLE
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#5C5C59] font-semibold -mt-1">
              Slimming, Skin & Hair Clinic
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-[#5C5C59]">
            <a href="#about" className="hover:text-[#C5A880] transition-colors py-1">About</a>
            <a href="#estimator" className="hover:text-[#C5A880] transition-colors py-1">Estimator</a>
            <a href="#assessment" className="hover:text-[#C5A880] transition-colors py-1">Assessment</a>
            <a href="#results" className="hover:text-[#C5A880] transition-colors py-1">Results</a>
            <a href="#testimonials" className="hover:text-[#C5A880] transition-colors py-1">Reviews</a>
            <a href="#booking-form" className="px-5 py-2.5 bg-[#2C2C2A] text-white hover:bg-[#C5A880] transition-colors rounded-sm text-xs font-bold">
              Book Visit
            </a>
          </div>

          {/* Mobile Nav Trigger */}
          <button className="lg:hidden text-[#2C2C2A]" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="lg:hidden bg-[#F5F5F0] border-b border-[#D1D1C4] py-6 px-8 flex flex-col space-y-4 text-sm font-bold uppercase tracking-wider text-[#5C5C59]">
            <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-[#C5A880] transition-colors py-1">About</a>
            <a href="#estimator" onClick={() => setNavOpen(false)} className="hover:text-[#C5A880] transition-colors py-1">Estimator</a>
            <a href="#assessment" onClick={() => setNavOpen(false)} className="hover:text-[#C5A880] transition-colors py-1">Assessment</a>
            <a href="#results" onClick={() => setNavOpen(false)} className="hover:text-[#C5A880] transition-colors py-1">Results</a>
            <a href="#testimonials" onClick={() => setNavOpen(false)} className="hover:text-[#C5A880] transition-colors py-1">Reviews</a>
            <a href="#booking-form" onClick={() => setNavOpen(false)} className="inline-block text-center py-3 bg-[#2C2C2A] text-white hover:bg-[#C5A880] transition-colors rounded-sm text-xs font-bold">
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 overflow-hidden bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#C5A880] px-4 py-1.5 rounded-full w-fit bg-[#FAF9F5]">
                <Award size={14} className="text-[#C5A880]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5C5C59]">
                  22 Years of Aesthetic Luxury
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-normal leading-[1.1] text-[#2C2C2A] tracking-tight">
                Timeless Skin. <br />
                <span className="italic font-light text-[#C5A880]">Scientific Precision.</span>
              </h1>

              <p className="text-[#5C5C59] text-base leading-relaxed max-w-xl font-normal">
                Discover Hyderabad's premier skin care destination. Led by the renowned <strong>Dr. Pooja Tatapudi (MBBS, MD, DNB)</strong>, Labelle Clinic Banjara Hills offers bespoke Pigmentation treatments, advanced Skin lightening, and clinically proven Acne scar removal in an elite, spa-like sanctuary.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 font-semibold text-xs tracking-wider uppercase">
                <a 
                  href="#booking-form" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2C2C2A] text-white hover:bg-[#C5A880] transition-all shadow-md active:translate-y-0.5"
                >
                  <span>Request Appointment</span>
                  <ArrowRight size={14} />
                </a>
                <a 
                  href="#assessment" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D1D1C4] text-[#2C2C2A] hover:bg-[#FAF9F5] transition-all active:translate-y-0.5"
                >
                  <span>Free Skin Quiz</span>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-[#D1D1C4] max-w-lg">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-300 border border-[#FAF9F5] flex items-center justify-center text-[10px] font-bold text-slate-800">A</div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border border-[#FAF9F5] flex items-center justify-center text-[10px] font-bold text-slate-800">R</div>
                  <div className="w-8 h-8 rounded-full bg-slate-500 border border-[#FAF9F5] flex items-center justify-center text-[10px] font-bold text-slate-800">M</div>
                </div>
                <div className="text-xs text-[#5C5C59]">
                  <span className="font-bold text-[#2C2C2A]">5,000+ happy clinic reviews</span> in Banjara Hills and MLA Colony area.
                </div>
              </div>
            </div>

            {/* Right Image Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-3 bg-white border border-[#D1D1C4] shadow-xl w-full max-w-[420px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                    alt="Labelle Premium Treatment Room" 
                    className="object-cover w-full h-full grayscale-[15%] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#FAF9F5] border border-[#D1D1C4] p-4 shadow-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#2C2C2A] flex items-center justify-center">
                    <Sparkles className="text-[#C5A880] w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-bold text-[#5C5C59]">Beside HDFC Bank</span>
                    <span className="block text-xs font-bold text-[#2C2C2A]">MLA Colony Branch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-[#FAF9F6] border-y border-[#D1D1C4] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D1D1C4] text-center">
            <div className="pt-4 md:pt-0">
              <span className="block font-playfair text-3xl lg:text-4xl font-bold text-[#C5A880]">23,000+</span>
              <span className="block text-[10px] uppercase tracking-widest text-[#5C5C59] mt-1 font-semibold">Patients Welcomed</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block font-playfair text-3xl lg:text-4xl font-bold text-[#C5A880]">99.3%</span>
              <span className="block text-[10px] uppercase tracking-widest text-[#5C5C59] mt-1 font-semibold">Clinical Success Rate</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block font-playfair text-3xl lg:text-4xl font-bold text-[#C5A880]">22+ Yrs</span>
              <span className="block text-[10px] uppercase tracking-widest text-[#5C5C59] mt-1 font-semibold">Expert Clinical Trust</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block font-playfair text-3xl lg:text-4xl font-bold text-[#C5A880]">35k+</span>
              <span className="block text-[10px] uppercase tracking-widest text-[#5C5C59] mt-1 font-semibold">Procedures Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctor Bio Section */}
      <section id="about" className="py-20 lg:py-32 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Doctor Headshot */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2 bg-white border border-[#D1D1C4] shadow-md w-full max-w-[360px]">
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. Pooja Tatapudi" 
                    className="object-cover w-full h-full hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-6 right-6 bg-[#2C2C2A]/90 backdrop-blur-sm border border-[#C5A880] px-3 py-1.5 text-white">
                  <span className="text-[9px] tracking-widest font-bold uppercase block text-[#C5A880]">Chief Dermatologist</span>
                </div>
              </div>
            </div>

            {/* Doctor Narrative Bio */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Lead Doctor & Visionary</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-playfair font-normal text-[#2C2C2A]">
                Dr. Pooja Tatapudi <br />
                <span className="text-lg lg:text-xl font-sans font-medium text-[#5C5C59] block mt-1">
                  MBBS, MD, DNB (Dermatology, Venereology & Leprosy)
                </span>
              </h2>

              <p className="text-[#5C5C59] text-sm leading-relaxed">
                Dr. Pooja Tatapudi is a highly sought-after medical dermatologist and aesthetic cosmetologist in Hyderabad. Guided by the philosophy of subtle, natural enhancement, she has dedicated over a decade to helping clients uncover healthy, glowing skin through high-precision clinical treatments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-medium text-[#2C2C2A]">
                <div className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Medical Council Registration</span>
                    <span className="text-[#5C5C59]">Telangana State Council No. TS-78322</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Professional Memberships</span>
                    <span className="text-[#5C5C59]">Indian Association of Dermatologists (IADVL)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Laser Expertise</span>
                    <span className="text-[#5C5C59]">USFDA-Certified Q-Switched Laser Specialist</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Honors & Awards</span>
                    <span className="text-[#5C5C59]">Excellence in Aesthetic Dermatology Award</span>
                  </div>
                </div>
              </div>

              <div className="p-5 border-l border-[#C5A880] bg-[#FAF9F5]">
                <span className="italic text-[#5C5C59] text-xs block leading-relaxed">
                  "Every face tells a story, and our mission is to ensure your skin reflects wellness and balance. We combine medical science with customized protocols to deliver beautiful, enduring outcomes safely."
                </span>
                <span className="block font-bold text-xs text-[#2C2C2A] mt-3 font-playfair">— Dr. Pooja Tatapudi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments Selector (Client-side interactive widget) */}
      <section id="estimator" className="py-20 lg:py-32 bg-[#FAF9F6] border-y border-[#D1D1C4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-2">Cost Calculator</span>
            <h2 className="text-3xl lg:text-4xl font-playfair font-normal text-[#2C2C2A]">
              Treatment Cost & Session Estimator
            </h2>
            <p className="text-xs text-[#5C5C59] mt-3">
              Configure your clinical skin plan below to view immediate transparent estimates, package discounts, and detailed procedural guides.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Widget Controls (Left) */}
            <div className="lg:col-span-7 space-y-8 bg-[#F5F5F0] p-6 lg:p-8 border border-[#D1D1C4] shadow-sm">
              {/* Step 1: Choose Treatment */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-3">
                  Step 1: Select Skin Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(treatmentsConfig).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTreatment(key)}
                      className={`p-4 border text-left transition-all ${
                        selectedTreatment === key
                          ? 'border-[#2C2C2A] bg-[#2C2C2A] text-[#F5F5F0]'
                          : 'border-[#D1D1C4] bg-[#FAF9F6] text-[#2C2C2A] hover:border-[#C5A880]'
                      }`}
                    >
                      <span className="block font-playfair font-bold text-sm">{data.name}</span>
                      <span className="block text-[10px] mt-1 opacity-80">Base: ₹{data.basePrice}/sess</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Treatment Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-3">
                  Step 2: Choose Treatment Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(areaMultipliers).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`p-3 border text-center transition-all ${
                        selectedArea === key
                          ? 'border-[#2C2C2A] bg-[#2C2C2A] text-[#F5F5F0]'
                          : 'border-[#D1D1C4] bg-[#FAF9F6] text-[#2C2C2A] hover:border-[#C5A880]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{data.name}</span>
                      <span className="block text-[9px] opacity-75 mt-0.5">({data.mult}x multiplier)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Session Package */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A]">
                    Step 3: Select Package Plan
                  </label>
                  <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider">
                    Save up to 25% with multi-session packs
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[1, 3, 6, 10].map((num) => {
                    const discount = getDiscountRate(num) * 100;
                    return (
                      <button
                        key={num}
                        onClick={() => setSelectedSessions(num)}
                        className={`p-3 border text-center transition-all ${
                          selectedSessions === num
                            ? 'border-[#2C2C2A] bg-[#2C2C2A] text-[#F5F5F0]'
                            : 'border-[#D1D1C4] bg-[#FAF9F6] text-[#2C2C2A] hover:border-[#C5A880]'
                        }`}
                      >
                        <span className="block text-base font-bold">{num} {num === 1 ? 'Session' : 'Sessions'}</span>
                        <span className="block text-[9px] mt-0.5 text-[#C5A880]">
                          {discount > 0 ? `${discount}% Discount` : 'Standard Price'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Service Info Panel */}
              <div className="p-4 border-l-2 border-[#C5A880] bg-[#FAF9F5] text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-[#2C2C2A] font-bold">
                  <Info size={14} className="text-[#C5A880]" />
                  <span>Clinical Procedure Guide</span>
                </div>
                <p className="text-[#5C5C59] leading-relaxed">
                  {treatmentsConfig[selectedTreatment].description}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2 text-[10px] font-semibold text-[#2C2C2A]">
                  <div>
                    <span className="text-[#5C5C59] block uppercase tracking-wider font-bold">Downtime</span>
                    <span>{treatmentsConfig[selectedTreatment].downtime}</span>
                  </div>
                  <div>
                    <span className="text-[#5C5C59] block uppercase tracking-wider font-bold">Comfort Level</span>
                    <span>{treatmentsConfig[selectedTreatment].pain}</span>
                  </div>
                  <div>
                    <span className="text-[#5C5C59] block uppercase tracking-wider font-bold">Interval</span>
                    <span>{treatmentsConfig[selectedTreatment].interval}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Output Display (Right) */}
            <div className="lg:col-span-5 bg-white border border-[#D1D1C4] p-6 lg:p-8 shadow-md">
              <h3 className="font-playfair text-xl font-bold border-b border-[#D1D1C4] pb-4 text-[#2C2C2A]">
                Estimate Summary
              </h3>

              <div className="space-y-4 py-6 text-xs text-[#5C5C59]">
                <div className="flex justify-between items-center">
                  <span>Selected Therapy</span>
                  <span className="font-bold text-[#2C2C2A]">{treatmentsConfig[selectedTreatment].name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Treatment Area</span>
                  <span className="font-bold text-[#2C2C2A]">{areaMultipliers[selectedArea].name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Quantity Ordered</span>
                  <span className="font-bold text-[#2C2C2A]">{selectedSessions} {selectedSessions === 1 ? 'session' : 'sessions'}</span>
                </div>

                <hr className="border-[#D1D1C4]" />

                <div className="flex justify-between items-center">
                  <span>Base Price Per Session</span>
                  <span className="font-semibold text-[#2C2C2A]">₹{treatmentsConfig[selectedTreatment].basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Area Multiplied Rate</span>
                  <span className="font-semibold text-[#2C2C2A]">₹{priceBreakdown.perSession.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Subtotal Cost</span>
                  <span className="font-semibold text-[#2C2C2A]">₹{priceBreakdown.subtotal.toLocaleString('en-IN')}</span>
                </div>

                {priceBreakdown.discount > 0 && (
                  <div className="flex justify-between items-center text-[#C5A880]">
                    <span>Special Package Discount ({priceBreakdown.discountRate}%)</span>
                    <span className="font-bold">-₹{priceBreakdown.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>Clinical GST (18%)</span>
                  <span className="font-semibold text-[#2C2C2A]">₹{priceBreakdown.gst.toLocaleString('en-IN')}</span>
                </div>

                <hr className="border-[#D1D1C4]" />

                <div className="flex justify-between items-center pt-2">
                  <span className="font-playfair text-base font-bold text-[#2C2C2A]">Estimated Grand Total</span>
                  <span className="font-playfair text-2xl font-bold text-[#C5A880]">₹{priceBreakdown.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="bg-[#FAF9F5] border border-[#D1D1C4] p-4 text-[10px] text-[#5C5C59] space-y-1">
                <span className="font-bold block text-[#2C2C2A]">Clinical Estimate Policy:</span>
                <p>This estimate is based on standard treatment guidelines. Final diagnosis and custom treatment modifications will be advised by Dr. Pooja Tatapudi during the physical consultation.</p>
              </div>

              <a 
                href="#booking-form"
                onClick={() => {
                  let mapped = 'Pigmentation Treatment';
                  if (selectedTreatment === 'lightening') mapped = 'Skin Lightening';
                  if (selectedTreatment === 'acne-scar') mapped = 'Acne Scar Removal';
                  setForm(prev => ({
                    ...prev,
                    service: mapped,
                    notes: `Requested estimate: ${selectedSessions} sessions of ${mapped} for ${areaMultipliers[selectedArea].name}. Estimated total: ₹${priceBreakdown.total.toLocaleString('en-IN')}`
                  }));
                }}
                className="mt-6 w-full inline-flex justify-center items-center py-4 bg-[#2C2C2A] text-white hover:bg-[#C5A880] text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
              >
                Pre-book This Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire */}
      <section id="assessment" className="py-20 lg:py-32 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-2">Automated Diagnostic Assistant</span>
            <h2 className="text-3xl lg:text-4xl font-playfair font-normal text-[#2C2C2A]">
              Skin Assessment Questionnaire
            </h2>
            <p className="text-xs text-[#5C5C59] mt-3">
              Answer 3 brief questions to identify your skin needs and receive customized protocol suggestions instantly.
            </p>
          </div>

          <div className="bg-white border border-[#D1D1C4] p-8 md:p-12 shadow-md relative min-h-[300px] flex flex-col justify-between">
            {/* Step 1: Concern */}
            {assessmentStep === 1 && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider block">Question 1 of 3</span>
                <h3 className="font-playfair text-xl font-bold text-[#2C2C2A]">What is your primary clinical skin concern?</h3>
                <div className="grid gap-3 pt-2">
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'pigmentation')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Dark Spots / Melasma / Sun Tan / Hyperpigmentation</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'dullness')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Dull Skin / Tan / Lack of Glow / Uneven Complexion</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'scars')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Acne Scars / Pits / Rough Skin Surface</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Sun Exposure */}
            {assessmentStep === 2 && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider block">Question 2 of 3</span>
                <h3 className="font-playfair text-xl font-bold text-[#2C2C2A]">What is your daily exposure to sun and pollution?</h3>
                <div className="grid gap-3 pt-2">
                  <button 
                    onClick={() => handleAssessmentAnswer('exposure', 'low')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Mostly Indoors (under air-conditioning, minimal sun exposure)</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('exposure', 'moderate')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Moderate (short daily commutes, occasional outdoor events)</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('exposure', 'high')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>High (frequent outdoors, field work, active direct sun exposure)</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Sensitivity */}
            {assessmentStep === 3 && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider block">Question 3 of 3</span>
                <h3 className="font-playfair text-xl font-bold text-[#2C2C2A]">How would you describe your skin sensitivity?</h3>
                <div className="grid gap-3 pt-2">
                  <button 
                    onClick={() => handleAssessmentAnswer('sensitivity', 'resilient')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Resilient (rarely reacts to new creams, acids, or sun)</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('sensitivity', 'moderate')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Occasionally Sensitive (slight tingling with strong formulations)</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('sensitivity', 'high')}
                    className="w-full text-left p-4 border border-[#D1D1C4] hover:border-[#2C2C2A] hover:bg-[#FAF9F5] transition-all text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Very Sensitive (frequent redness, dryness, or stinging)</span>
                    <ChevronRight size={16} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {assessmentStep === 4 && assessmentResult && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Assessment Complete</span>
                <h3 className="font-playfair text-2xl font-bold text-[#2C2C2A]">Your Personalized Recommendation</h3>
                
                <div className="p-6 border border-[#C5A880] bg-[#FAF9F5] space-y-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#5C5C59] block">Recommended Clinical Therapy</span>
                    <span className="text-base font-bold text-[#2C2C2A] flex items-center gap-1.5 mt-1">
                      <Sparkles size={16} className="text-[#C5A880]" />
                      {assessmentResult.recommended}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#5C5C59] block">Dr. Pooja's Custom Skin Care Tip</span>
                    <p className="text-xs text-[#5C5C59] mt-1 leading-relaxed">{assessmentResult.tips}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={prefillFromAssessment}
                    className="flex-1 py-4 bg-[#2C2C2A] text-white hover:bg-[#C5A880] text-xs font-bold uppercase tracking-wider transition-colors text-center"
                  >
                    Pre-fill Booking With This Protocol
                  </button>
                  <button 
                    onClick={resetAssessment}
                    className="px-6 py-4 border border-[#D1D1C4] hover:bg-[#FAF9F5] text-xs font-bold text-[#2C2C2A] transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Results Showcase */}
      <section id="results" className="py-20 lg:py-32 bg-[#FAF9F6] border-t border-[#D1D1C4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-2">Before & After Showcase</span>
            <h2 className="text-3xl lg:text-4xl font-playfair font-normal text-[#2C2C2A]">
              Clinical Case Studies
            </h2>
            <p className="text-xs text-[#5C5C59] mt-3">
              True, non-retouched skincare outcomes documenting progress from selected clients under Dr. Pooja Tatapudi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border border-[#D1D1C4] p-5 shadow-sm space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                  alt="Melasma Clearance Results" 
                  className="object-cover w-full h-full grayscale-[10%]"
                />
                <div className="absolute bottom-3 left-3 bg-[#2C2C2A]/90 text-[#F5F5F0] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1">
                  6 Laser Sessions
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">Case Study #01: Pigmentation</span>
                <h3 className="font-playfair text-base font-bold text-[#2C2C2A]">Hyperpigmentation & Melasma</h3>
                <p className="text-[11px] text-[#5C5C59] leading-relaxed">
                  <strong>Patient Profile:</strong> 34-year-old female with deep epidermal melasma across cheeks and nose bridge.
                </p>
                <p className="text-[11px] text-[#5C5C59] leading-relaxed">
                  <strong>Clinical Result:</strong> 90% pigment reduction achieved using custom Q-Switched Nd:YAG Laser. Tone restored to original symmetry.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-[#D1D1C4] p-5 shadow-sm space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                  alt="Skin Lightening Results" 
                  className="object-cover w-full h-full grayscale-[10%]"
                />
                <div className="absolute bottom-3 left-3 bg-[#2C2C2A]/90 text-[#F5F5F0] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1">
                  4 Peel Sessions
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">Case Study #02: Lightening</span>
                <h3 className="font-playfair text-base font-bold text-[#2C2C2A]">Tan Removal & Skin Brightening</h3>
                <p className="text-[11px] text-[#5C5C59] leading-relaxed">
                  <strong>Patient Profile:</strong> 28-year-old female presenting severe sun tan and uneven facial complexion.
                </p>
                <p className="text-[11px] text-[#5C5C59] leading-relaxed">
                  <strong>Clinical Result:</strong> Complete removal of stubborn tanning and overall evening of skin tone with organic acid peels.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border border-[#D1D1C4] p-5 shadow-sm space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800" 
                  alt="Acne Scar Smoothing Results" 
                  className="object-cover w-full h-full grayscale-[10%]"
                />
                <div className="absolute bottom-3 left-3 bg-[#2C2C2A]/90 text-[#F5F5F0] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1">
                  5 MNRF Sessions
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">Case Study #03: Scar Resurfacing</span>
                <h3 className="font-playfair text-base font-bold text-[#2C2C2A]">Deep Acne Scar Remodeling</h3>
                <p className="text-[11px] text-[#5C5C59] leading-relaxed">
                  <strong>Patient Profile:</strong> 25-year-old male with deep boxcar and ice-pick acne scars on cheeks.
                </p>
                <p className="text-[11px] text-[#5C5C59] leading-relaxed">
                  <strong>Clinical Result:</strong> 75% improvement in skin flatness and tissue thickness using Fractional Microneedle RF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-2">Verified Patient Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-playfair font-normal text-[#2C2C2A]">
              Testimonials from Banjara Hills
            </h2>
            <p className="text-xs text-[#5C5C59] mt-3">
              Read how Dr. Pooja Tatapudi's personalized treatments have helped patients regain skin health and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#FAF9F5] border border-[#D1D1C4] p-8 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#5C5C59] leading-relaxed">
                  "Dr. Pooja Tatapudi is incredibly patient. My melasma had been stubborn for years, but her laser regimen worked wonders. She explains everything so clearly. The clinic beside HDFC Bank in Banjara Hills is extremely clean and welcoming."
                </p>
              </div>
              <div className="border-t border-[#D1D1C4] pt-4 mt-6 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[#2C2C2A]">Kiranmayi S.</span>
                  <span className="block text-[10px] text-[#5C5C59]">Banjara Hills, Hyderabad</span>
                </div>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Verified Patient
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAF9F5] border border-[#D1D1C4] p-8 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#5C5C59] leading-relaxed">
                  "The clinic's spa atmosphere is so serene, and the staff is extremely professional. My skin lightening sessions gave me back my glowing skin. I am highly impressed by Dr. Pooja's clinical approach and soft spoken nature."
                </p>
              </div>
              <div className="border-t border-[#D1D1C4] pt-4 mt-6 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[#2C2C2A]">Nisha Reddy</span>
                  <span className="block text-[10px] text-[#5C5C59]">Jubilee Hills Resident</span>
                </div>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Verified Patient
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FAF9F5] border border-[#D1D1C4] p-8 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#5C5C59] leading-relaxed">
                  "Acne scars are very hard to treat, but Labelle's acne scar removal treatment was precise and highly effective. I see a 75% reduction in depth. Dr. Pooja is hands down the best dermatologist in Hyderabad."
                </p>
              </div>
              <div className="border-t border-[#D1D1C4] pt-4 mt-6 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[#2C2C2A]">Aditya V.</span>
                  <span className="block text-[10px] text-[#5C5C59]">MLA Colony, Hyderabad</span>
                </div>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Verified Patient
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Appointment Booking Form */}
      <section id="booking-form" className="py-20 lg:py-32 bg-[#FAF9F6] border-t border-[#D1D1C4]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#D1D1C4] shadow-md p-8 md:p-12">
            {!submittedData ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="text-center pb-4 border-b border-[#D1D1C4]">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-1">Elite Consultation</span>
                  <h3 className="font-playfair text-2xl font-bold text-[#2C2C2A]">Book Clinic Appointment</h3>
                  <p className="text-[11px] text-[#5C5C59] mt-2">
                    Enter details below to schedule your premium dermatology consultation with Dr. Pooja Tatapudi.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-3.5 text-[#5C5C59]" />
                      <input 
                        type="text" 
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-9 pr-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold"
                      />
                    </div>
                    {formErrors.name && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-3.5 text-[#5C5C59]" />
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-9 pr-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold"
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3.5 text-[#5C5C59]" />
                      <input 
                        type="email" 
                        placeholder="name@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-9 pr-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold"
                      />
                    </div>
                    {formErrors.email && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                      Preferred Treatment
                    </label>
                    <select 
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold text-[#2C2C2A]"
                    >
                      <option value="Pigmentation Treatment">Pigmentation Treatment</option>
                      <option value="Skin Lightening">Skin Lightening</option>
                      <option value="Acne Scar Removal">Acne Scar Removal</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3 top-3.5 text-[#5C5C59]" />
                      <input 
                        type="date" 
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full pl-9 pr-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold text-[#2C2C2A]"
                      />
                    </div>
                    {formErrors.date && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.date}</span>
                    )}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                      Time Slot
                    </label>
                    <select 
                      value={form.slot}
                      onChange={(e) => setForm({ ...form, slot: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold text-[#2C2C2A]"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2A] mb-2">
                    Additional Clinical Notes / Request Description
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Briefly describe your skin history or any questions here..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#D1D1C4] focus:outline-none focus:border-[#C5A880] text-xs font-semibold text-[#2C2C2A]"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#2C2C2A] text-white hover:bg-[#C5A880] transition-colors text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Validating & Scheduling...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Confirm Consultation Booking</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
                  <Check className="text-emerald-600 w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Consultation Requested</span>
                  <h3 className="font-playfair text-2xl font-bold text-[#2C2C2A]">Appointment Confirmed</h3>
                  <p className="text-xs text-[#5C5C59] max-w-md mx-auto">
                    Your appointment has been registered in the Labelle medical scheduling system. Our care coordinator will call you back shortly.
                  </p>
                </div>

                <div className="max-w-md mx-auto bg-[#F5F5F0] border border-[#D1D1C4] p-5 text-left text-xs space-y-3 text-[#5C5C59]">
                  <div className="flex justify-between">
                    <span className="font-bold">Booking ID:</span>
                    <span className="font-bold text-[#2C2C2A]">{submittedData.bookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Patient Name:</span>
                    <span className="text-[#2C2C2A]">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Phone:</span>
                    <span className="text-[#2C2C2A]">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Skin Service:</span>
                    <span className="text-[#2C2C2A]">{submittedData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Date & Slot:</span>
                    <span className="text-[#2C2C2A]">{submittedData.date} ({submittedData.slot})</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#C5A880] uppercase tracking-wider">
                    <Clock size={12} />
                    <span>Please arrive 10 minutes prior</span>
                  </div>
                  <button 
                    onClick={() => setSubmittedData(null)}
                    className="px-6 py-2.5 border border-[#D1D1C4] hover:bg-[#FAF9F5] text-xs font-bold text-[#2C2C2A] transition-colors"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Location & Hours Footer */}
      <footer className="bg-[#2C2C2A] text-[#FAF9F6] pt-16 pb-12 border-t border-[#C5A880]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-[#FAF9F6]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col">
              <span className="font-playfair text-2xl lg:text-3xl font-bold tracking-wider text-[#FAF9F6]">
                LABELLE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Slimming, Skin & Hair Clinic
              </span>
            </div>
            <p className="text-xs text-[#5C5C59] max-w-sm leading-relaxed">
              Experience the harmony of medical dermatological science and high-end aesthetic care at Banjara Hills' top-tier cosmetic hub.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <ShieldAlert size={14} className="text-[#C5A880]" />
              <span className="text-[10px] text-[#5C5C59] uppercase tracking-wider font-semibold">
                Registration No. TS-78322
              </span>
            </div>
          </div>

          {/* Contact Details & Link */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-playfair text-lg font-bold text-[#FAF9F6] border-b border-[#FAF9F6]/10 pb-2">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-[#5C5C59]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C5A880] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  2nd Floor, Survey No. 403, Venkateshwara Co-operative House Building Society, 1 & 102/1, Lane No. 12, beside HDFC Bank, MLA Colony, Banjara Hills, Hyderabad, Telangana 500034
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C5A880]" />
                <a href="tel:+918019002020" className="hover:text-[#FAF9F6] font-bold transition-colors">
                  +91 8019002020
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-playfair text-lg font-bold text-[#FAF9F6] border-b border-[#FAF9F6]/10 pb-2">
              Business Hours
            </h4>
            <div className="space-y-2 text-xs text-[#5C5C59]">
              <div className="flex justify-between border-b border-[#FAF9F6]/5 pb-1">
                <span>Monday - Saturday</span>
                <span className="font-bold text-[#FAF9F6]">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#FAF9F6]/5 pb-1">
                <span>Sunday</span>
                <span className="font-bold text-[#FAF9F6]">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-amber-500 font-semibold pt-1">
                <span>Doctor Consultation</span>
                <span>Prior Appointment Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#5C5C59] space-y-4 md:space-y-0">
          <p>© 2026 Labelle Slimming, Skin & Hair Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-[#FAF9F6] transition-colors">Dermatologist Bio</a>
            <a href="#estimator" className="hover:text-[#FAF9F6] transition-colors">Treatment Estimator</a>
            <a href="#booking-form" className="hover:text-[#FAF9F6] transition-colors">Book Consult</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

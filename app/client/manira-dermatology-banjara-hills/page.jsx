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
  ShieldCheck, 
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

export default function ManiraDermatologyBanjaraHillsPage() {
  // Mobile Navigation Menu State
  const [navOpen, setNavOpen] = useState(false);

  // Treatments Selector State
  const [selectedTreatment, setSelectedTreatment] = useState('botox');
  const [selectedArea, setSelectedArea] = useState('forehead');
  const [selectedSessions, setSelectedSessions] = useState(3);

  // Pricing rules for treatments
  const treatmentsConfig = {
    botox: {
      name: 'Botox & Fillers',
      basePrice: 12000,
      description: 'Premium USFDA-approved injectables targeting fine lines, wrinkles, and volume enhancement.',
      benefits: ['Softens dynamic forehead & brow lines', 'Restores natural facial volume', 'Minimal discomfort, fast action'],
      downtime: 'Mild swelling for 2-3 hours',
      pain: 'Comfortable (numbing ice/cream applied)',
      interval: 'Repeated every 4-6 months'
    },
    peels: {
      name: 'Chemical Peels',
      basePrice: 4000,
      description: 'Advanced clinical peels using glycolic, salicylic, and mandelic acids to clear acne and pigmentation.',
      benefits: ['Clears stubborn facial acne & pimples', 'Exfoliates dead skin cells deeply', 'Reduces dark patches & sun tan'],
      downtime: 'Mild flaking for 2-3 days',
      pain: 'Slight tingling sensation',
      interval: 'Once every 3 weeks'
    },
    gfc: {
      name: 'Hair PRP & GFC Therapy',
      basePrice: 6500,
      description: 'Growth Factor Concentrate (GFC) therapy using your own growth factor extracts to combat pattern baldness.',
      benefits: ['Stops rapid clinical hair fall', 'Increases density & strand thickness', 'Promotes new follicular growth'],
      downtime: 'Zero downtime',
      pain: 'Mild pinpricks (vibrator tool used)',
      interval: 'Once every 4 weeks'
    }
  };

  const areaMultipliers = {
    // Botox & Fillers areas
    forehead: { name: 'Forehead & Crow\'s Feet', mult: 1.0, applicableFor: 'botox' },
    midface: { name: 'Midface & Lips', mult: 1.4, applicableFor: 'botox' },
    jawline: { name: 'Jawline & Neck Sculpting', mult: 1.8, applicableFor: 'botox' },
    
    // Chemical peels areas
    face: { name: 'Face Only', mult: 1.0, applicableFor: 'peels' },
    'face-neck': { name: 'Face & Neck', mult: 1.3, applicableFor: 'peels' },
    'hands-arms': { name: 'Hands & Forearms', mult: 1.6, applicableFor: 'peels' },

    // Hair PRP & GFC areas
    crown: { name: 'Scalp Crown Area', mult: 1.0, applicableFor: 'gfc' },
    fullscalp: { name: 'Full Scalp Area', mult: 1.5, applicableFor: 'gfc' }
  };

  // Helper to get applicable areas for selected treatment
  const getApplicableAreas = () => {
    return Object.entries(areaMultipliers).filter(([_, data]) => data.applicableFor === selectedTreatment);
  };

  // Keep selectedArea in sync with treatment
  const handleTreatmentChange = (treatmentKey) => {
    setSelectedTreatment(treatmentKey);
    // Auto-select first applicable area
    const applicable = Object.entries(areaMultipliers).find(([_, data]) => data.applicableFor === treatmentKey);
    if (applicable) {
      setSelectedArea(applicable[0]);
    }
  };

  const getDiscountRate = (sessions) => {
    if (sessions >= 5) return 0.20;
    if (sessions >= 3) return 0.10;
    return 0.0;
  };

  const calculateEstimate = () => {
    const config = treatmentsConfig[selectedTreatment];
    const multiplier = areaMultipliers[selectedArea]?.mult || 1.0;
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

  const priceBreakdown = calculateEstimate();

  // Skin Assessment Questionnaire State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    downtime: '',
    age: ''
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  const handleAssessmentAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (key === 'goal') {
      setAssessmentStep(2);
    } else if (key === 'downtime') {
      setAssessmentStep(3);
    } else if (key === 'age') {
      // Calculate output
      let recommended = '';
      let tips = '';
      if (newAnswers.goal === 'aging') {
        recommended = 'Manira Advanced Botox / Dermal Fillers Program';
        tips = 'Botox is recommended for smoothing dynamic lines, while Fillers are ideal for structural under-eye hollow correction. Repeat every 5 months.';
      } else if (newAnswers.goal === 'acne') {
        recommended = 'Manira Multi-Stage Chemical Peels Regimen';
        tips = 'Recommended course is 4-6 peeling sessions with glycolic/salicylic acids. Keep skin moisturized and avoid scratching any flaking skin.';
      } else {
        recommended = 'Manira Growth Factor Concentrate (GFC) Therapy';
        tips = 'A scientific, non-surgical solution for hair thinning. We extract pure growth factors from your blood to stimulate dense follicle growth.';
      }

      setAssessmentResult({
        recommended,
        tips,
        goal: newAnswers.goal
      });
      setAssessmentStep(4);
    }
  };

  const resetAssessment = () => {
    setAnswers({ goal: '', downtime: '', age: '' });
    setAssessmentResult(null);
    setAssessmentStep(1);
  };

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Botox & Fillers',
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
        bookingId: `MDR-BH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Pre-fill form from quiz result
  const prefillFromAssessment = () => {
    if (!assessmentResult) return;
    let serviceMap = 'Botox & Fillers';
    if (assessmentResult.goal === 'acne') serviceMap = 'Chemical Peels';
    if (assessmentResult.goal === 'hair') serviceMap = 'Hair PRP & GFC Therapy';

    setForm(prev => ({
      ...prev,
      service: serviceMap,
      notes: `Based on automated skin assessment recommendation: ${assessmentResult.recommended}`
    }));

    // Scroll to form
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-[#1F1133] font-outfit selection:bg-[#A78BFA]/30 antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#FAF8FF]/80 backdrop-blur-md border-b border-purple-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#A78BFA] flex items-center justify-center shadow-md shadow-purple-200">
              <Sparkles className="text-white w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg lg:text-xl tracking-tight text-[#3B1D66]">
                MANIRA
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#7C3AED] font-bold -mt-1">
                Dermatology & Aesthetics
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-[#3B1D66]/80">
            <a href="#about" className="hover:text-[#7C3AED] transition-colors py-1">Doctor</a>
            <a href="#estimator" className="hover:text-[#7C3AED] transition-colors py-1">Estimator</a>
            <a href="#assessment" className="hover:text-[#7C3AED] transition-colors py-1">Assessment</a>
            <a href="#results" className="hover:text-[#7C3AED] transition-colors py-1">Gallery</a>
            <a href="#testimonials" className="hover:text-[#7C3AED] transition-colors py-1">Reviews</a>
            <a href="#booking-form" className="px-5 py-2.5 bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all rounded-xl shadow-lg shadow-purple-200 text-xs font-bold">
              Consult Now
            </a>
          </div>

          {/* Mobile Nav Trigger */}
          <button className="lg:hidden text-[#3B1D66]" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Links */}
        {navOpen && (
          <div className="lg:hidden bg-[#FAF8FF] border-b border-purple-100 py-6 px-8 flex flex-col space-y-4 text-xs font-bold uppercase tracking-wider text-[#3B1D66]/80">
            <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-[#7C3AED] transition-colors py-1">Doctor</a>
            <a href="#estimator" onClick={() => setNavOpen(false)} className="hover:text-[#7C3AED] transition-colors py-1">Estimator</a>
            <a href="#assessment" onClick={() => setNavOpen(false)} className="hover:text-[#7C3AED] transition-colors py-1">Assessment</a>
            <a href="#results" onClick={() => setNavOpen(false)} className="hover:text-[#7C3AED] transition-colors py-1">Gallery</a>
            <a href="#testimonials" onClick={() => setNavOpen(false)} className="hover:text-[#7C3AED] transition-colors py-1">Reviews</a>
            <a href="#booking-form" onClick={() => setNavOpen(false)} className="inline-block text-center py-3 bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-colors rounded-xl shadow-md text-xs font-bold">
              Schedule Appointment
            </a>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative py-16 lg:py-28 overflow-hidden">
        {/* Soft biophilic/orchid background blobs */}
        <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-purple-100/60 filter blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-violet-100/50 filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 border border-purple-200/80 px-4 py-1.5 rounded-full w-fit bg-white/70 backdrop-blur">
                <Award size={14} className="text-[#7C3AED]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7C3AED]">
                  Dermatologist-Led Excellence
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#3B1D66] leading-[1.1]">
                Redefine Your Glow. <br />
                <span className="text-[#7C3AED]">Elevate Your Beauty.</span>
              </h1>

              <p className="text-[#3B1D66]/70 text-sm sm:text-base leading-relaxed max-w-xl">
                Experience clinical aesthetics customized to your genetic profile. Led by <strong>Dr. V. Manjula Priyadarshini (MBBS, DDVL)</strong>, our clinic on Road No. 10, Banjara Hills provides advanced Botox, Fillers, restorative Chemical Peels, and premium Growth Factor Concentrate (GFC) hair therapies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-3 font-bold text-xs tracking-wider uppercase">
                <a 
                  href="#booking-form" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-all rounded-xl shadow-lg shadow-purple-200 active:translate-y-0.5"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} />
                </a>
                <a 
                  href="#estimator" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-purple-50 text-[#7C3AED] border border-purple-200 transition-all rounded-xl shadow-sm active:translate-y-0.5"
                >
                  <span>Explore Pricing</span>
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4 text-xs font-semibold text-[#3B1D66]/70">
                <ShieldCheck className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                <span>USFDA-Approved Protocols • Sterile Glassmorphic Clinic Environment</span>
              </div>
            </div>

            {/* Right Panel with glassmorphic border */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] p-4 bg-white/70 backdrop-blur-md border border-purple-200/60 rounded-3xl shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-purple-50">
                  <img 
                    src="https://images.unsplash.com/photo-1579684389782-64d84b5e901f?auto=format&fit=crop&q=80&w=800" 
                    alt="Manira Aesthetic Treatment Room" 
                    className="object-cover w-full h-full hover:scale-103 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-3 -right-3 bg-white/95 border border-purple-100 rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Phone className="text-[#7C3AED] w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider font-extrabold text-[#7C3AED]">Road No. 10</span>
                    <span className="block text-xs font-extrabold text-[#3B1D66]">+91 7569139558</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-white/70 backdrop-blur-md border-y border-purple-100 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <span className="block text-3xl font-extrabold text-[#7C3AED]">12,000+</span>
              <span className="block text-[9px] uppercase tracking-widest text-[#3B1D66]/70 mt-1 font-bold">Happy Patients</span>
            </div>
            <div className="p-2">
              <span className="block text-3xl font-extrabold text-[#7C3AED]">99.1%</span>
              <span className="block text-[9px] uppercase tracking-widest text-[#3B1D66]/70 mt-1 font-bold">Satisfaction Rate</span>
            </div>
            <div className="p-2">
              <span className="block text-3xl font-extrabold text-[#7C3AED]">12+ Yrs</span>
              <span className="block text-[9px] uppercase tracking-widest text-[#3B1D66]/70 mt-1 font-bold">Clinical Experience</span>
            </div>
            <div className="p-2">
              <span className="block text-3xl font-extrabold text-[#7C3AED]">50+</span>
              <span className="block text-[9px] uppercase tracking-widest text-[#3B1D66]/70 mt-1 font-bold">Aesthetic Protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctor Bio Section */}
      <section id="about" className="py-20 lg:py-28 bg-[#FAF8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Doctor Headshot Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] p-3 bg-white border border-purple-200/50 rounded-3xl shadow-md">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-purple-50">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. V. Manjula Priyadarshini" 
                    className="object-cover w-full h-full hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-6 right-6 bg-[#7C3AED]/95 text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow">
                  Aesthetic Specialist
                </div>
              </div>
            </div>

            {/* Doctor Narrative Bio */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#A78BFA]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Meet the Dermatologist</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#3B1D66]">
                Dr. V. Manjula Priyadarshini <br />
                <span className="text-sm font-medium text-[#7C3AED] uppercase tracking-wider block mt-1">
                  MBBS, DDVL (Telangana Council Reg No. 64239)
                </span>
              </h2>

              <p className="text-[#3B1D66]/70 text-sm leading-relaxed font-normal">
                Dr. V. Manjula Priyadarshini is a distinguished clinical and aesthetic dermatologist in Banjara Hills, Hyderabad. She specializes in advanced anti-aging methods, including targeted Botox and dermal fillers, alongside restorative GFC hair therapy. She holds a strong belief in delivering science-based, safe, and individually tailored treatments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-[#3B1D66]">
                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-purple-100 rounded-xl">
                  <Check size={14} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block">Dermatology Credentials</span>
                    <span className="text-[#3B1D66]/70 font-medium">Diploma in Venereology & Leprosy</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-purple-100 rounded-xl">
                  <Check size={14} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block">Specialist Memberships</span>
                    <span className="text-[#3B1D66]/70 font-medium">Cosmetic Dermatology Society of India</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-purple-100 rounded-xl">
                  <Check size={14} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block">Injectables Expertise</span>
                    <span className="text-[#3B1D66]/70 font-medium">Certified Advanced Injector</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-purple-100 rounded-xl">
                  <Check size={14} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block">GFC & Hair Specialist</span>
                    <span className="text-[#3B1D66]/70 font-medium">Advanced Growth Factor protocols</span>
                  </div>
                </div>
              </div>

              <div className="p-5 border-l-3 border-[#A78BFA] bg-white rounded-r-xl shadow-sm">
                <span className="italic text-[#3B1D66]/80 text-xs block leading-relaxed">
                  "Our aesthetic philosophy is centered around balance, facial symmetry, and skin vitality. We utilize the safest USFDA-certified methods to enhance your natural beauty while protecting your skin's health."
                </span>
                <span className="block font-bold text-xs text-[#7C3AED] mt-3 font-outfit">— Dr. V. Manjula Priyadarshini</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments Selector (Client-side interactive widget) */}
      <section id="estimator" className="py-20 lg:py-28 bg-white border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] block mb-2">Flexible Planner</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#3B1D66]">
              Aesthetic Treatment Customizer
            </h2>
            <p className="text-xs text-[#3B1D66]/60 mt-3 max-w-lg mx-auto">
              Select a procedure, target region, and package volume below to see estimated treatment values and clinical information instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8 bg-[#FAF8FF] p-6 lg:p-8 rounded-3xl border border-purple-100/80 shadow-sm">
              
              {/* Select Therapy */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#3B1D66] mb-3">
                  Step 1: Choose Aesthetic Therapy
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(treatmentsConfig).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => handleTreatmentChange(key)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedTreatment === key
                          ? 'border-[#7C3AED] bg-[#7C3AED] text-white shadow-md'
                          : 'border-purple-200/50 bg-white text-[#3B1D66] hover:border-[#A78BFA]'
                      }`}
                    >
                      <span className="block font-bold text-sm">{data.name}</span>
                      <span className="block text-[9px] mt-1 opacity-80">Base: ₹{data.basePrice}/unit</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Area */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#3B1D66] mb-3">
                  Step 2: Choose Target Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {getApplicableAreas().map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`p-3.5 rounded-xl border text-center transition-all ${
                        selectedArea === key
                          ? 'border-[#7C3AED] bg-[#7C3AED] text-white shadow-md'
                          : 'border-purple-200/50 bg-white text-[#3B1D66] hover:border-[#A78BFA]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{data.name}</span>
                      <span className="block text-[9px] opacity-75 mt-0.5">({data.mult}x multiplier)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Sessions */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#3B1D66]">
                    Step 3: Select Session Pack
                  </label>
                  <span className="text-[9px] font-bold text-[#7C3AED] uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded-full">
                    Package savings active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 3, 5].map((num) => {
                    const discount = getDiscountRate(num) * 100;
                    return (
                      <button
                        key={num}
                        onClick={() => setSelectedSessions(num)}
                        className={`p-3.5 rounded-xl border text-center transition-all ${
                          selectedSessions === num
                            ? 'border-[#7C3AED] bg-[#7C3AED] text-white shadow-md'
                            : 'border-purple-200/50 bg-white text-[#3B1D66] hover:border-[#A78BFA]'
                        }`}
                      >
                        <span className="block text-sm font-extrabold">{num} {num === 1 ? 'Unit/Sess' : 'Units/Sess'}</span>
                        <span className="block text-[9px] mt-0.5 text-[#7C3AED]">
                          {discount > 0 ? `${discount}% Discount` : 'Regular Rate'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Treatment Info Panel */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-[#7C3AED] font-bold">
                  <Info size={14} />
                  <span>Procedural Summary</span>
                </div>
                <p className="text-[#3B1D66]/70 leading-relaxed text-[11px]">
                  {treatmentsConfig[selectedTreatment].description}
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-semibold text-[#3B1D66]">
                  <div>
                    <span className="text-[#3B1D66]/50 block uppercase tracking-wider font-extrabold">Downtime</span>
                    <span>{treatmentsConfig[selectedTreatment].downtime}</span>
                  </div>
                  <div>
                    <span className="text-[#3B1D66]/50 block uppercase tracking-wider font-extrabold">Sensation</span>
                    <span>{treatmentsConfig[selectedTreatment].pain}</span>
                  </div>
                  <div>
                    <span className="text-[#3B1D66]/50 block uppercase tracking-wider font-extrabold">Next Session</span>
                    <span>{treatmentsConfig[selectedTreatment].interval}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Display Panel */}
            <div className="lg:col-span-5 bg-white border border-purple-100 p-6 lg:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-50/70 -mr-6 -mt-6"></div>
              
              <h3 className="text-lg font-bold border-b border-purple-100 pb-4 text-[#3B1D66] relative z-10">
                Estimate Details
              </h3>

              <div className="space-y-4 py-6 text-xs text-[#3B1D66]/70">
                <div className="flex justify-between items-center">
                  <span>Selected Procedure</span>
                  <span className="font-bold text-[#3B1D66]">{treatmentsConfig[selectedTreatment].name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Target Area</span>
                  <span className="font-bold text-[#3B1D66]">{areaMultipliers[selectedArea]?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Package Units</span>
                  <span className="font-bold text-[#3B1D66]">{selectedSessions} {selectedSessions === 1 ? 'unit' : 'units'}</span>
                </div>

                <hr className="border-purple-100" />

                <div className="flex justify-between items-center">
                  <span>Base Unit Price</span>
                  <span className="font-semibold text-[#3B1D66]">₹{treatmentsConfig[selectedTreatment].basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Area Adjust Rate</span>
                  <span className="font-semibold text-[#3B1D66]">₹{priceBreakdown.perSession.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Subtotal Value</span>
                  <span className="font-semibold text-[#3B1D66]">₹{priceBreakdown.subtotal.toLocaleString('en-IN')}</span>
                </div>

                {priceBreakdown.discount > 0 && (
                  <div className="flex justify-between items-center text-[#7C3AED]">
                    <span>Discount Applied ({priceBreakdown.discountRate}%)</span>
                    <span className="font-bold">-₹{priceBreakdown.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>Clinical GST (18%)</span>
                  <span className="font-semibold text-[#3B1D66]">₹{priceBreakdown.gst.toLocaleString('en-IN')}</span>
                </div>

                <hr className="border-purple-100" />

                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-extrabold text-[#3B1D66]">Grand Total Estimate</span>
                  <span className="text-2xl font-extrabold text-[#7C3AED]">₹{priceBreakdown.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="bg-[#FAF8FF] border border-purple-100/50 p-4 rounded-xl text-[10px] text-[#3B1D66]/60 space-y-1">
                <span className="font-bold block text-[#3B1D66]">Estimator Disclaimer:</span>
                <p>Calculations show indicative clinical values. Exact unit requirements vary depending on patient anatomy and will be finalized during your visit with Dr. V. Manjula Priyadarshini.</p>
              </div>

              <a 
                href="#booking-form"
                onClick={() => {
                  let mapped = 'Botox & Fillers';
                  if (selectedTreatment === 'peels') mapped = 'Chemical Peels';
                  if (selectedTreatment === 'gfc') mapped = 'Hair PRP & GFC Therapy';
                  setForm(prev => ({
                    ...prev,
                    service: mapped,
                    notes: `Requested estimate: ${selectedSessions} units of ${mapped} for ${areaMultipliers[selectedArea]?.name}. Estimated total: ₹${priceBreakdown.total.toLocaleString('en-IN')}`
                  }));
                }}
                className="mt-6 w-full inline-flex justify-center items-center py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-xl shadow-lg shadow-purple-200"
              >
                Book This Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire */}
      <section id="assessment" className="py-20 lg:py-28 bg-[#FAF8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] block mb-2">Automated Skincare Advice</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#3B1D66]">
              Interactive Aesthetic Quiz
            </h2>
            <p className="text-xs text-[#3B1D66]/60 mt-3">
              Answer three diagnostic questions to receive immediate expert protocol suggestions based on your skincare goals.
            </p>
          </div>

          <div className="bg-white border border-purple-100 p-8 md:p-12 rounded-3xl shadow-lg relative min-h-[300px] flex flex-col justify-between">
            {/* Step 1 */}
            {assessmentStep === 1 && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-[#A78BFA] uppercase tracking-wider block">Question 1 of 3</span>
                <h3 className="text-lg font-bold text-[#3B1D66]">What is your primary clinical skincare goal?</h3>
                <div className="grid gap-3 pt-2">
                  <button 
                    onClick={() => handleAssessmentAnswer('goal', 'aging')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Smoothing Forehead Lines / Anti-Aging Wrinkle Correction</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('goal', 'acne')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Clearing Active Acne / Pigmented Marks / Sun Tan</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('goal', 'hair')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Restoring Hair Volume / Reducing Rapid Scalp Hair Fall</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {assessmentStep === 2 && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-[#A78BFA] uppercase tracking-wider block">Question 2 of 3</span>
                <h3 className="text-lg font-bold text-[#3B1D66]">How much recovery downtime are you comfortable with?</h3>
                <div className="grid gap-3 pt-2">
                  <button 
                    onClick={() => handleAssessmentAnswer('downtime', 'zero')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Zero Downtime (immediate return to work/events)</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('downtime', 'mild')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Mild (can accept light skin flaking/redness for 2-3 days)</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {assessmentStep === 3 && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-[#A78BFA] uppercase tracking-wider block">Question 3 of 3</span>
                <h3 className="text-lg font-bold text-[#3B1D66]">What is your age category?</h3>
                <div className="grid gap-3 pt-2">
                  <button 
                    onClick={() => handleAssessmentAnswer('age', 'young')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Under 30 Years</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('age', 'mid')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>30 to 45 Years</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('age', 'mature')}
                    className="w-full text-left p-4 border border-purple-100 hover:border-[#7C3AED] hover:bg-purple-50/50 transition-all rounded-xl text-xs font-bold flex justify-between items-center group"
                  >
                    <span>Above 45 Years</span>
                    <ChevronRight size={16} className="text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Results Output */}
            {assessmentStep === 4 && assessmentResult && (
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Diagnostic Summary</span>
                <h3 className="text-xl font-bold text-[#3B1D66]">Your Skin Protocol Recommendation</h3>
                
                <div className="p-6 bg-purple-50/60 border border-purple-100 rounded-2xl space-y-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#7C3AED] block">Recommended Therapy</span>
                    <span className="text-sm font-extrabold text-[#3B1D66] flex items-center gap-1.5 mt-1">
                      <Sparkles size={16} className="text-[#7C3AED]" />
                      {assessmentResult.recommended}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#7C3AED] block">Dr. Manjula's Clinical Tip</span>
                    <p className="text-xs text-[#3B1D66]/70 mt-1 leading-relaxed">{assessmentResult.tips}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={prefillFromAssessment}
                    className="flex-1 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider transition-colors text-center rounded-xl shadow-md"
                  >
                    Pre-fill Booking Form
                  </button>
                  <button 
                    onClick={resetAssessment}
                    className="px-6 py-4 border border-purple-200 hover:bg-purple-50/40 text-xs font-bold text-[#7C3AED] transition-colors rounded-xl"
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
      <section id="results" className="py-20 lg:py-28 bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] block mb-2">Before & After Gallery</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#3B1D66]">
              Clinical Case Reports
            </h2>
            <p className="text-xs text-[#3B1D66]/60 mt-3">
              Documented treatment progression achieved at Manira Dermatology & Aesthetics clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-[#FAF8FF] border border-purple-100 p-5 rounded-2xl space-y-4 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-purple-50">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800" 
                  alt="Botox Treatment outcome representation" 
                  className="object-cover w-full h-full grayscale-[10%]"
                />
                <div className="absolute bottom-3 left-3 bg-[#7C3AED]/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                  1 Session (14 Days)
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-[#7C3AED] uppercase tracking-widest">Case #01: Botox</span>
                <h3 className="text-sm font-bold text-[#3B1D66]">Forehead Lines Softened</h3>
                <p className="text-[11px] text-[#3B1D66]/70 leading-relaxed">
                  <strong>Patient Profile:</strong> 38-year-old female with deep dynamic worry lines on forehead and crow's feet.
                </p>
                <p className="text-[11px] text-[#3B1D66]/70 leading-relaxed">
                  <strong>Clinical Outcome:</strong> Smooth forehead surface achieved with precise unit injectables. Dynamic balance and natural facial expressions maintained.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-[#FAF8FF] border border-purple-100 p-5 rounded-2xl space-y-4 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-purple-50">
                <img 
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800" 
                  alt="Chemical Peel outcome representation" 
                  className="object-cover w-full h-full grayscale-[10%]"
                />
                <div className="absolute bottom-3 left-3 bg-[#7C3AED]/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                  3 Peel Sessions
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-[#7C3AED] uppercase tracking-widest">Case #02: Peels</span>
                <h3 className="text-sm font-bold text-[#3B1D66]">Acne Control & Glow</h3>
                <p className="text-[11px] text-[#3B1D66]/70 leading-relaxed">
                  <strong>Patient Profile:</strong> 29-year-old male presenting persistent blackheads, acne marks, and dull skin texture.
                </p>
                <p className="text-[11px] text-[#3B1D66]/70 leading-relaxed">
                  <strong>Clinical Outcome:</strong> Cleared 85% of active microcomedones and post-acne blemishes using salicylic acid peels.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-[#FAF8FF] border border-purple-100 p-5 rounded-2xl space-y-4 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-purple-50">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                  alt="Hair PRP outcome representation" 
                  className="object-cover w-full h-full grayscale-[10%]"
                />
                <div className="absolute bottom-3 left-3 bg-[#7C3AED]/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                  4 GFC Sessions
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-[#7C3AED] uppercase tracking-widest">Case #03: Restoring Density</span>
                <h3 className="text-sm font-bold text-[#3B1D66]">Pattern Thinning Rejuvenation</h3>
                <p className="text-[11px] text-[#3B1D66]/70 leading-relaxed">
                  <strong>Patient Profile:</strong> 31-year-old female experiencing early-stage pattern thinning around the central scalp.
                </p>
                <p className="text-[11px] text-[#3B1D66]/70 leading-relaxed">
                  <strong>Clinical Outcome:</strong> New follicular growth and thickening of existing hair fibers observed, restoring scalp volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] block mb-2">Patient Feedback</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#3B1D66]">
              Testimonials from Road No. 10
            </h2>
            <p className="text-xs text-[#3B1D66]/60 mt-3">
              Read how Dr. V. Manjula Priyadarshini has helped clients achieve natural results with absolute medical safety.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Review 1 */}
            <div className="bg-white border border-purple-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#7C3AED] text-[#7C3AED]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#3B1D66]/80 leading-relaxed">
                  "Dr. Manjula is a magician with fillers. My under-eye volume loss is completely corrected, and it looks so natural. I was afraid of looking frozen, but she did it perfectly."
                </p>
              </div>
              <div className="border-t border-purple-50 pt-3 mt-4 text-[10px]">
                <span className="block font-bold text-[#3B1D66]">Kavitha P.</span>
                <span className="block text-[#3B1D66]/60">Banjara Hills, Hyderabad</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-purple-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#7C3AED] text-[#7C3AED]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#3B1D66]/80 leading-relaxed">
                  "The clinical peeling sessions worked wonders for my dark marks. The clinic is incredibly clean and chic. The staff is polite and helpful."
                </p>
              </div>
              <div className="border-t border-purple-50 pt-3 mt-4 text-[10px]">
                <span className="block font-bold text-[#3B1D66]">Vikram S.</span>
                <span className="block text-[#3B1D66]/60">Somajiguda Resident</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-purple-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#7C3AED] text-[#7C3AED]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#3B1D66]/80 leading-relaxed">
                  "I was losing hair rapidly, but after 4 sessions of GFC therapy at Manira, my hair fall has completely stopped and I see new hair growth. Extremely happy with the treatment."
                </p>
              </div>
              <div className="border-t border-purple-50 pt-3 mt-4 text-[10px]">
                <span className="block font-bold text-[#3B1D66]">Rahul M.</span>
                <span className="block text-[#3B1D66]/60">MLA Colony Area</span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white border border-purple-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#7C3AED] text-[#7C3AED]" />
                  ))}
                </div>
                <p className="italic text-xs text-[#3B1D66]/80 leading-relaxed">
                  "Elegant clinic, neat maintenance, and highly skilled doctor. Dr. Manjula explains the details of the procedure before starting, which puts you at ease."
                </p>
              </div>
              <div className="border-t border-purple-50 pt-3 mt-4 text-[10px]">
                <span className="block font-bold text-[#3B1D66]">Shalini T.</span>
                <span className="block text-[#3B1D66]/60">Hyderabad Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Appointment Booking Form */}
      <section id="booking-form" className="py-20 lg:py-28 bg-white border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#FAF8FF] border border-purple-100 shadow-md p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-purple-50 -ml-10 -mt-10"></div>
            
            {!submittedData ? (
              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                <div className="text-center pb-4 border-b border-purple-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] block mb-1">Interactive Scheduler</span>
                  <h3 className="text-2xl font-extrabold text-[#3B1D66]">Schedule Clinical Appointment</h3>
                  <p className="text-[11px] text-[#3B1D66]/60 mt-2">
                    Fill in your details below to schedule your aesthetic consultation with Dr. V. Manjula Priyadarshini.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-3.5 text-purple-400" />
                      <input 
                        type="text" 
                        placeholder="Your Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
                      />
                    </div>
                    {formErrors.name && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3.5 top-3.5 text-purple-400" />
                      <input 
                        type="tel" 
                        placeholder="10-Digit Mobile Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-3.5 text-purple-400" />
                      <input 
                        type="email" 
                        placeholder="yourname@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
                      />
                    </div>
                    {formErrors.email && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                      Preferred Aesthetic Therapy
                    </label>
                    <select 
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
                    >
                      <option value="Botox & Fillers">Botox & Fillers</option>
                      <option value="Chemical Peels">Chemical Peels</option>
                      <option value="Hair PRP & GFC Therapy">Hair PRP & GFC Therapy</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3.5 top-3.5 text-purple-400" />
                      <input 
                        type="date" 
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
                      />
                    </div>
                    {formErrors.date && (
                      <span className="text-red-600 text-[10px] mt-1 block font-semibold">{formErrors.date}</span>
                    )}
                  </div>

                  {/* Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                      Time Slot
                    </label>
                    <select 
                      value={form.slot}
                      onChange={(e) => setForm({ ...form, slot: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1D66] mb-2">
                    Procedural Notes / Specific Concerns
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="E.g. facial lines, hair thinning duration, previous treatments..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-purple-100 rounded-xl focus:outline-none focus:border-[#7C3AED] text-xs font-bold text-[#3B1D66]"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl transition-all text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
                  >
                    {isSubmitting ? (
                      <span>Reserving consultation...</span>
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
              /* Glassmorphic Success Card */
              <div className="text-center py-8 space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto shadow-md">
                  <Check className="text-emerald-500 w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Booking Received</span>
                  <h3 className="text-2xl font-extrabold text-[#3B1D66]">Aesthetic Consultation Scheduled!</h3>
                  <p className="text-xs text-[#3B1D66]/70 max-w-md mx-auto">
                    Your appointment request has been recorded. Our clinical supervisor will call you shortly to confirm the appointment.
                  </p>
                </div>

                <div className="max-w-md mx-auto bg-white border border-purple-100 rounded-2xl p-6 text-left text-xs space-y-3 shadow-sm">
                  <div className="flex justify-between">
                    <span className="font-extrabold text-[#3B1D66]/70">Booking ID:</span>
                    <span className="font-extrabold text-[#7C3AED]">{submittedData.bookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-extrabold text-[#3B1D66]/70">Patient Name:</span>
                    <span className="font-bold text-[#3B1D66]">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-extrabold text-[#3B1D66]/70">Phone:</span>
                    <span className="font-bold text-[#3B1D66]">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-extrabold text-[#3B1D66]/70">Selected Therapy:</span>
                    <span className="font-bold text-[#3B1D66]">{submittedData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-extrabold text-[#3B1D66]/70">Date & Slot:</span>
                    <span className="font-bold text-[#3B1D66]">{submittedData.date} ({submittedData.slot})</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider">
                    <Clock size={12} />
                    <span>Prior appointment only • Please bring government ID</span>
                  </div>
                  <button 
                    onClick={() => setSubmittedData(null)}
                    className="px-6 py-3 border border-purple-200 hover:bg-purple-50 text-xs font-bold text-[#7C3AED] transition-colors rounded-xl"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Location & Hours Footer */}
      <footer className="bg-[#1F1133] text-purple-100/90 pt-16 pb-12 border-t border-purple-200/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-purple-200/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED] flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  MANIRA
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#A78BFA] font-bold -mt-1">
                  Dermatology & Aesthetics
                </span>
              </div>
            </div>
            <p className="text-xs text-purple-200/60 max-w-sm leading-relaxed">
              Leading the intersection of science and beauty on Road No. 10, Banjara Hills, Hyderabad. Dedicated to customized anti-aging and hair wellness solutions.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck size={14} className="text-[#A78BFA]" />
              <span className="text-[10px] text-purple-200/50 uppercase tracking-wider font-bold">
                Registration No. 64239
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-extrabold text-white border-b border-purple-200/10 pb-2">
              Location Details
            </h4>
            <div className="space-y-3 text-xs text-purple-200/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  1st Floor, House No. 8-2-601/A, Plot No. 159, Road No. 10, Banjara Hills, Hyderabad, Telangana 500028
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#A78BFA]" />
                <a href="tel:+917569139558" className="hover:text-white font-extrabold transition-colors">
                  +91 7569139558
                </a>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-extrabold text-white border-b border-purple-200/10 pb-2">
              Clinic Timings
            </h4>
            <div className="space-y-2 text-xs text-purple-200/60">
              <div className="flex justify-between border-b border-purple-200/5 pb-1">
                <span>Monday - Saturday</span>
                <span className="font-bold text-white">10:00 AM - 7:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-purple-200/5 pb-1">
                <span>Sunday</span>
                <span className="font-bold text-red-400">Closed</span>
              </div>
              <div className="flex justify-between text-purple-300 font-bold pt-1">
                <span>Doctor Scheduling</span>
                <span>Prior Booking Advised</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-purple-200/40 space-y-4 md:space-y-0">
          <p>© 2026 Manira Dermatology & Aesthetics. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-white transition-colors">Doctor Profile</a>
            <a href="#estimator" className="hover:text-white transition-colors">Aesthetic Estimator</a>
            <a href="#booking-form" className="hover:text-white transition-colors">Request Appointment</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

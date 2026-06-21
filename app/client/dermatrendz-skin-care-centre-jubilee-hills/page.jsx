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
  Heart,
  Compass,
  FileText,
  Activity
} from 'lucide-react';

export default function DermatrendzSkinCareCentrePage() {
  // Mobile Nav State
  const [navOpen, setNavOpen] = useState(false);

  // Treatment Selector State
  const [selectedCategory, setSelectedCategory] = useState('medical');
  const [selectedPlan, setSelectedPlan] = useState('first-time');
  const [selectedSessions, setSelectedSessions] = useState(3);

  // Treatments Configuration
  const treatmentsConfig = {
    medical: {
      name: 'Medical Dermatology',
      basePrice: 1500,
      description: 'Comprehensive clinical evaluation and treatment plans for eczema, psoriasis, chronic hives, and other pathological skin conditions.',
      benefits: ['Evidence-based diagnostic path', 'Targeted prescription mapping', 'Long-term pathology management'],
      downtime: 'Zero downtime',
      pain: 'Painless diagnostic review',
      interval: 'As suggested by Dr. Somani'
    },
    hair: {
      name: 'Trichology & Hair Care',
      basePrice: 6500,
      description: 'Advanced hair growth treatments including scalp dermoscopy, localized nutritional therapy, and clinical PRP/GFC therapy.',
      benefits: ['Stops active follicle miniaturization', 'Improves active hair density', 'Promotes structural scalp health'],
      downtime: 'Mild tenderness for 4-6 hours',
      pain: 'Tolerable (numbing spray applied)',
      interval: '4 weeks gap between sessions'
    },
    acne: {
      name: 'Acne & Allergy Treatments',
      basePrice: 3500,
      description: 'Salicylic/glycolic peeling, extraction, and patch testing to identify allergens and clear chronic active acne.',
      benefits: ['Clears active sebaceous congestion', 'Identifies trigger contact allergens', 'Reduces post-acne pigmentation'],
      downtime: 'Mild flaking for 24-48 hours',
      pain: 'Mild tingling sensation',
      interval: '3 weeks gap recommended'
    }
  };

  const planMultipliers = {
    'first-time': { name: 'First-time Consultation', mult: 1.0 },
    'follow-up': { name: 'Follow-up / Routine Review', mult: 0.8 },
    'procedure-only': { name: 'Procedure Only (No Consult)', mult: 1.2 }
  };

  const getDiscountRate = (sessions) => {
    if (sessions >= 9) return 0.20;
    if (sessions >= 6) return 0.15;
    if (sessions >= 3) return 0.10;
    return 0.0;
  };

  const calculateTotal = () => {
    const config = treatmentsConfig[selectedCategory];
    const multiplier = planMultipliers[selectedPlan].mult;
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

  // Skin Assessment State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [answers, setAnswers] = useState({
    symptom: '',
    duration: '',
    previousConsult: ''
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  const handleAssessmentAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (key === 'symptom') {
      setAssessmentStep(2);
    } else if (key === 'duration') {
      setAssessmentStep(3);
    } else if (key === 'previousConsult') {
      // Analyze results
      let recommended = '';
      let description = '';
      let tips = '';

      if (newAnswers.symptom === 'hair') {
        recommended = 'Trichology & Hair Care Plan';
        description = 'Your symptoms suggest follicle thinning or scalp inflammation. We recommend a comprehensive scalp dermoscopy and customized trichology care.';
        tips = 'Avoid harsh cosmetic shampoos. Use a pH-balanced ketoconazole shampoo if experiencing scaling, and avoid tight hair ties.';
      } else if (newAnswers.symptom === 'acne') {
        recommended = 'Acne & Allergy Therapeutics';
        description = 'Active acne and breakouts require clinical extractions combined with medical-grade salicylic peels to regulate sebum secretion.';
        tips = 'Never squeeze or pick active pustules. Use a non-comedogenic gel moisturizer and apply benzoyl peroxide spot treatment at night.';
      } else {
        recommended = 'Medical Dermatology consultation';
        description = 'Persistent skin rashes, scaling, or itching indicate pathological conditions like eczema, psoriasis, or contact dermatitis.';
        tips = 'Moisturize immediately after bathing while skin is damp. Avoid fragranced soaps and synthetic clothing fabrics.';
      }

      setAssessmentResult({
        recommended,
        description,
        tips
      });
      setAssessmentStep(4);
    }
  };

  const resetAssessment = () => {
    setAnswers({ symptom: '', duration: '', previousConsult: '' });
    setAssessmentResult(null);
    setAssessmentStep(1);
  };

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'Medical Dermatology',
    doctor: 'Dr. V K Somani',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name.trim()) {
      tempErrors.name = 'Patient name is required.';
    } else if (form.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters.';
    }

    if (!form.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        tempErrors.phone = 'Enter a valid 10-digit mobile number.';
      }
    }

    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Enter a valid email address.';
    }

    if (!form.date) {
      tempErrors.date = 'Appointment date is required.';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = 'Appointment date cannot be in the past.';
      }
    }

    if (!form.consent) {
      tempErrors.consent = 'You must accept clinical data storage terms.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const refNumber = 'TRENDZ-' + Math.floor(100000 + Math.random() * 900000);
        setBookingConfirmation({
          refNumber,
          ...form
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const resetBookingForm = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      treatment: 'Medical Dermatology',
      doctor: 'Dr. V K Somani',
      consent: false
    });
    setBookingConfirmation(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0] text-[#3D3B34] font-sans antialiased overflow-x-hidden selection:bg-[#6BAA75]/20 selection:text-[#4F8B59]">
      {/* Import Merriweather & Open Sans */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
        
        /* Font rules */
        .font-serif {
          font-family: 'Merriweather', Georgia, serif;
        }
        .font-sans {
          font-family: 'Open Sans', sans-serif;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
      `}} />

      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-[#FEFAE0]/95 backdrop-blur-sm border-b border-[#D4C9A8]/40 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-[#6BAA75] text-[#FEFAE0]">
              <Activity className="w-5 h-5" />
            </span>
            <div>
              <span className="font-serif font-extrabold text-xl text-[#3D3B34] block">Dermatrendz</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#6BAA75] font-semibold -mt-1 block">Skin Care Centre</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-xs font-bold uppercase tracking-wider hover:text-[#6BAA75] transition-colors">Dr. Somani</a>
            <a href="#treatments" className="text-xs font-bold uppercase tracking-wider hover:text-[#6BAA75] transition-colors">Treatments</a>
            <a href="#assessment" className="text-xs font-bold uppercase tracking-wider hover:text-[#6BAA75] transition-colors">Assessment</a>
            <a href="#results" className="text-xs font-bold uppercase tracking-wider hover:text-[#6BAA75] transition-colors">Clinical Cases</a>
            <a href="#testimonials" className="text-xs font-bold uppercase tracking-wider hover:text-[#6BAA75] transition-colors">Reviews</a>
            <a href="#booking-form" className="text-xs font-bold uppercase tracking-wider hover:text-[#6BAA75] transition-colors">Book Consult</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#booking-form" 
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FEFAE0] bg-[#6BAA75] py-2.5 px-6 rounded hover:bg-[#4F8B59] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Request Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-2 text-[#3D3B34] hover:text-[#6BAA75]"
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {navOpen && (
          <div className="md:hidden mt-4 p-4 rounded bg-[#FFFDF2] border border-[#D4C9A8]/60 space-y-4">
            <a href="#about" onClick={() => setNavOpen(false)} className="block text-xs font-bold uppercase tracking-wider p-2 hover:bg-[#FEFAE0]">Dr. Somani</a>
            <a href="#treatments" onClick={() => setNavOpen(false)} className="block text-xs font-bold uppercase tracking-wider p-2 hover:bg-[#FEFAE0]">Treatments</a>
            <a href="#assessment" onClick={() => setNavOpen(false)} className="block text-xs font-bold uppercase tracking-wider p-2 hover:bg-[#FEFAE0]">Assessment</a>
            <a href="#results" onClick={() => setNavOpen(false)} className="block text-xs font-bold uppercase tracking-wider p-2 hover:bg-[#FEFAE0]">Clinical Cases</a>
            <a href="#testimonials" onClick={() => setNavOpen(false)} className="block text-xs font-bold uppercase tracking-wider p-2 hover:bg-[#FEFAE0]">Reviews</a>
            <a href="#booking-form" onClick={() => setNavOpen(false)} className="block text-xs font-bold uppercase tracking-wider p-2 hover:bg-[#FEFAE0]">Book Consult</a>
            <a 
              href="#booking-form" 
              onClick={() => setNavOpen(false)} 
              className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FEFAE0] bg-[#6BAA75] py-2.5 px-6 w-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Request Appointment</span>
            </a>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 px-6 border-b border-[#D4C9A8]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded bg-[#FFFDF2] border border-[#D4C9A8] text-[#6BAA75] text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>35+ Years of Clinical Integrity</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3D3B34] leading-tight">
              Clinical Skin & Hair Solutions <span className="text-[#6BAA75] italic">Rooted in Science</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[#5A5850] max-w-xl leading-relaxed">
              Step into a space of pure clinical care. Experience expert medical dermatology, advanced hair treatments, and targeted allergy therapeutics led by Dr. V K Somani in Jubilee Hills.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#booking-form" 
                className="bg-[#6BAA75] text-[#FEFAE0] text-xs font-bold uppercase tracking-widest rounded px-8 py-4 text-center hover:bg-[#4F8B59] transition-colors duration-200"
              >
                Request Clinical Consultation
              </a>
              <a 
                href="#treatments" 
                className="inline-flex items-center justify-center space-x-2 text-[#3D3B34] bg-[#FFFDF2] border border-[#D4C9A8] text-xs font-bold uppercase tracking-widest rounded px-8 py-4 hover:bg-[#FEFAE0] transition-colors"
              >
                <span>View Treatments</span>
                <ChevronRight className="w-4 h-4 text-[#6BAA75]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-3 rounded bg-[#FFFDF2] border border-[#D4C9A8]">
              <div className="relative overflow-hidden aspect-[4/5] shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Minimalist Clinical Setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 px-6 border-b border-[#D4C9A8]/40 bg-[#FFFDF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="block font-serif text-3xl md:text-4xl font-bold text-[#6BAA75]">35+</span>
              <span className="block text-[10px] uppercase tracking-wider text-[#5A5850] font-bold">Years of Clinical Experience</span>
            </div>
            <div className="space-y-1">
              <span className="block font-serif text-3xl md:text-4xl font-bold text-[#6BAA75]">40,000+</span>
              <span className="block text-[10px] uppercase tracking-wider text-[#5A5850] font-bold">Diagnosed Cases</span>
            </div>
            <div className="space-y-1">
              <span className="block font-serif text-3xl md:text-4xl font-bold text-[#6BAA75]">100%</span>
              <span className="block text-[10px] uppercase tracking-wider text-[#5A5850] font-bold">Evidence-Based Medicine</span>
            </div>
            <div className="space-y-1">
              <span className="block font-serif text-3xl md:text-4xl font-bold text-[#6BAA75]">30+</span>
              <span className="block text-[10px] uppercase tracking-wider text-[#5A5850] font-bold">Research Publications</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER / HEAD DOCTOR BIO */}
      <section id="about" className="py-24 px-6 border-b border-[#D4C9A8]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="p-3 rounded bg-[#FFFDF2] border border-[#D4C9A8]">
              <div className="relative overflow-hidden aspect-[4/5] shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. V K Somani Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left font-sans">
            <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded bg-[#FEFAE0] border border-[#D4C9A8] text-[#6BAA75] text-[10px] font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Founder & Senior Consultant</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D3B34]">
              Decades of Clinical Integrity: <span className="text-[#6BAA75] italic">Dr. V K Somani</span>
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-[#5A5850] leading-relaxed">
              <p>
                Dr. V K Somani (MBBS, MD) is one of Hyderabad’s most trusted medical dermatologists. With a professional career spanning over 35 years, he has treated thousands of complex dermatological conditions with severe pathologies, establishing a reputation for honest diagnoses and precise treatments.
              </p>
              <p>
                As a respected senior member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL), Dr. Somani has pioneered evidence-based treatment schedules in Telangana. Under his direction, Dermatrendz strictly avoids commercial cosmetic upsells, prioritizing medically necessary, therapeutic interventions for hair loss, eczema, acne vulgaris, and allergic reactions.
              </p>
              <p className="font-serif text-[#4F8B59] font-semibold italic border-l-2 border-[#6BAA75] pl-4">
                "Clinical dermatology is not about cosmetics; it is about restoring skin health, identifying pathology, and building trust through scientific diagnosis."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D4C9A8]/30">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#6BAA75] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-xs text-[#3D3B34]">Pathological Expertise</span>
                  <span className="block text-[11px] text-[#5A5850]">Eczema, severe psoriasis, and localized allergy patch testing.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#6BAA75] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-xs text-[#3D3B34]">Trichology & Hair Growth</span>
                  <span className="block text-[11px] text-[#5A5850]">Evidence-backed PRP and follicular cell rejuvenation therapies.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS & SERVICES SELECTOR */}
      <section id="treatments" className="py-24 px-6 border-b border-[#D4C9A8]/40 bg-[#FFFDF2]">
        <div className="max-w-7xl mx-auto text-center space-y-12 font-sans">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#6BAA75] font-bold block">Scientific Diagnostics</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D3B34]">
              Treatment Cost Estimator
            </h2>
            <p className="text-xs text-[#5A5850]">
              Select a specialized clinical pathway, consultation level, and session plan to calculate approximate therapeutic investments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Control Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded bg-[#FEFAE0] border border-[#D4C9A8]/60 space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#6BAA75] font-bold mb-3">1. Select Clinical Pathway</label>
                <div className="space-y-2">
                  {Object.entries(treatmentsConfig).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`w-full p-4 rounded flex items-center justify-between text-left transition-all duration-200 border ${
                        selectedCategory === key
                          ? 'bg-[#FFFDF2] text-[#3D3B34] border-[#6BAA75] border-l-4'
                          : 'bg-[#FFFDF2] hover:bg-[#FEFAE0] text-[#5A5850] border-[#D4C9A8]/50'
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-xs uppercase tracking-wide">{item.name}</span>
                        <span className="block text-[10px] text-[#6BAA75] mt-0.5">Base from ₹{item.basePrice.toLocaleString()} / session</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-[#6BAA75] transition-transform ${selectedCategory === key ? 'translate-x-1' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#6BAA75] font-bold mb-3">2. Select Consultation Level</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(planMultipliers).map(([key, plan]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      className={`p-3 rounded text-[11px] font-semibold text-center border transition-all duration-200 ${
                        selectedPlan === key
                          ? 'bg-[#FFFDF2] text-[#3D3B34] border-[#6BAA75] font-bold'
                          : 'bg-[#FFFDF2] hover:bg-[#FEFAE0] text-[#5A5850] border-[#D4C9A8]/40'
                      }`}
                    >
                      {plan.name} (x{plan.mult})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#6BAA75] font-bold mb-3">3. Number of Sessions ({selectedSessions})</label>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-[#5A5850]">1 session</span>
                  <span className="text-[10px] font-bold text-[#6BAA75]">
                    {selectedSessions >= 3 ? `${getDiscountRate(selectedSessions)*100}% Pack Discount Applied` : 'Select pack for discount'}
                  </span>
                  <span className="text-[10px] text-[#5A5850]">9 sessions</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="9" 
                  value={selectedSessions}
                  onChange={(e) => setSelectedSessions(parseInt(e.target.value))}
                  className="w-full h-1.5 rounded bg-[#D4C9A8] appearance-none cursor-pointer accent-[#6BAA75] focus:outline-none"
                />
                <div className="flex justify-between text-[9px] text-[#6BAA75] font-bold mt-2">
                  <span>1 session</span>
                  <span>3 sessions (-10%)</span>
                  <span>6 sessions (-15%)</span>
                  <span>9 sessions (-20%)</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded bg-[#FEFAE0] border border-[#D4C9A8]/60 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#D4C9A8]/40 pb-4 gap-2">
                  <div>
                    <h3 className="font-serif font-extrabold text-base text-[#3D3B34]">
                      {treatmentsConfig[selectedCategory].name}
                    </h3>
                    <p className="text-[10px] text-[#6BAA75] uppercase tracking-wide font-bold">{planMultipliers[selectedPlan].name}</p>
                  </div>
                  <span className="px-3 py-1 rounded bg-[#FFFDF2] border border-[#D4C9A8]/40 text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">
                    {selectedSessions} Session{selectedSessions > 1 ? 's' : ''} Plan
                  </span>
                </div>

                <p className="text-xs text-[#5A5850] leading-relaxed">
                  {treatmentsConfig[selectedCategory].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="block text-[9px] uppercase tracking-wider text-[#6BAA75] font-bold">Clinical Benefits</span>
                    <ul className="space-y-1">
                      {treatmentsConfig[selectedCategory].benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-[#5A5850] flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6BAA75] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5 p-4 rounded bg-[#FFFDF2] border border-[#D4C9A8]/30">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#5A5850]">Expected Downtime:</span>
                      <span className="font-bold text-[#3D3B34]">{treatmentsConfig[selectedCategory].downtime}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#5A5850]">Comfort Level:</span>
                      <span className="font-bold text-[#3D3B34]">{treatmentsConfig[selectedCategory].pain}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#5A5850]">Session Frequency:</span>
                      <span className="font-bold text-[#3D3B34]">{treatmentsConfig[selectedCategory].interval}</span>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-[#D4C9A8]/40 pt-4 space-y-2">
                  <div className="flex justify-between items-center text-xs text-[#5A5850]">
                    <span>Rate per session:</span>
                    <span>₹{priceBreakdown.perSession.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#5A5850]">
                    <span>Subtotal ({selectedSessions} sessions):</span>
                    <span>₹{priceBreakdown.subtotal.toLocaleString()}</span>
                  </div>
                  {priceBreakdown.discount > 0 && (
                    <div className="flex justify-between items-center text-xs text-green-700 font-semibold">
                      <span>Package Discount ({priceBreakdown.discountRate}%):</span>
                      <span>-₹{priceBreakdown.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-xs text-[#5A5850]">
                    <span>Clinical GST (18%):</span>
                    <span>₹{priceBreakdown.gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#D4C9A8]/40 pt-2 text-base font-bold text-[#3D3B34]">
                    <span>Estimated Clinical Fee:</span>
                    <span>₹{priceBreakdown.total.toLocaleString()}*</span>
                  </div>
                  <span className="block text-[9px] text-right text-[#6BAA75] italic">*Estimates exclude medication costs. Detailed fee outlined during consultation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SKIN ASSESSMENT QUESTIONNAIRE */}
      <section id="assessment" className="py-24 px-6 border-b border-[#D4C9A8]/40">
        <div className="max-w-4xl mx-auto text-center space-y-8 font-sans">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#6BAA75] font-bold block">Patient Intake</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D3B34]">
              3-Step Clinical Assessment
            </h2>
            <p className="text-xs text-[#5A5850] max-w-lg mx-auto">
              Answer 3 simple questions outlining your pathological symptoms to receive immediate advisory guidelines.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded bg-[#FFFDF2] border border-[#D4C9A8] text-left min-h-[350px] flex flex-col justify-between">
            {assessmentStep === 1 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#D4C9A8]/40 pb-3">
                  <h3 className="font-serif font-bold text-base text-[#3D3B34]">Step 1: Primary Symptom Area</h3>
                  <span className="text-xs font-semibold text-[#6BAA75]">1 of 3</span>
                </div>
                <p className="text-xs text-[#5A5850]">Select the option that matches your current chief complaint:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAssessmentAnswer('symptom', 'hair')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-bold uppercase tracking-wider text-left transition-all text-[#3D3B34]"
                  >
                    Hair thinning, bald patches, or scalp scale
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('symptom', 'acne')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-bold uppercase tracking-wider text-left transition-all text-[#3D3B34]"
                  >
                    Active acne breakouts or deep scarring
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('symptom', 'rash')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-bold uppercase tracking-wider text-left transition-all text-[#3D3B34]"
                  >
                    Persistent skin rash, hives, or eczema spots
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('symptom', 'routine')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-bold uppercase tracking-wider text-left transition-all text-[#3D3B34]"
                  >
                    General consultation for diagnostic check-up
                  </button>
                </div>
              </div>
            )}

            {assessmentStep === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#D4C9A8]/40 pb-3">
                  <h3 className="font-serif font-bold text-base text-[#3D3B34]">Step 2: Duration of Symptoms</h3>
                  <span className="text-xs font-semibold text-[#6BAA75]">2 of 3</span>
                </div>
                <p className="text-xs text-[#5A5850]">How long have you been observing these active symptoms?</p>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => handleAssessmentAnswer('duration', 'short')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-semibold text-left transition-all text-[#3D3B34]"
                  >
                    **Acute**: Less than 4 weeks (recent sudden onset)
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('duration', 'medium')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-semibold text-left transition-all text-[#3D3B34]"
                  >
                    **Subacute**: 1 to 6 months
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('duration', 'chronic')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-semibold text-left transition-all text-[#3D3B34]"
                  >
                    **Chronic**: More than 6 months (recurring or persistent)
                  </button>
                </div>
              </div>
            )}

            {assessmentStep === 3 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#D4C9A8]/40 pb-3">
                  <h3 className="font-serif font-bold text-base text-[#3D3B34]">Step 3: History of Clinical Consultation</h3>
                  <span className="text-xs font-semibold text-[#6BAA75]">3 of 3</span>
                </div>
                <p className="text-xs text-[#5A5850]">Have you consulted a qualified medical doctor (dermatologist) for this before?</p>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => handleAssessmentAnswer('previousConsult', 'yes-ongoing')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-semibold text-left transition-all text-[#3D3B34]"
                  >
                    Yes, currently on prescription but seeking a secondary medical opinion.
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('previousConsult', 'yes-unresolved')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-semibold text-left transition-all text-[#3D3B34]"
                  >
                    Yes, but the treatment plan was stopped due to side effects or lack of efficacy.
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('previousConsult', 'no')}
                    className="p-4 rounded border border-[#D4C9A8]/60 bg-[#FEFAE0] hover:bg-[#FFFDF2] text-xs font-semibold text-left transition-all text-[#3D3B34]"
                  >
                    No, this is my first formal medical evaluation for this skin condition.
                  </button>
                </div>
              </div>
            )}

            {assessmentStep === 4 && assessmentResult && (
              <div className="space-y-6 py-2">
                <div className="flex justify-between items-center border-b border-[#D4C9A8]/40 pb-3">
                  <h3 className="font-serif font-bold text-base text-[#3D3B34] flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-[#6BAA75]" />
                    <span>Clinical Recommendations</span>
                  </h3>
                  <button 
                    onClick={resetAssessment}
                    className="text-[10px] uppercase tracking-wider font-bold text-[#6BAA75] hover:underline"
                  >
                    Restart Quiz
                  </button>
                </div>
                
                <div className="p-6 rounded bg-[#FEFAE0] border border-[#D4C9A8]/40">
                  <span className="text-[9px] uppercase tracking-wider text-[#6BAA75] font-bold block mb-1">Recommended Pathway</span>
                  <span className="block font-serif text-lg font-bold text-[#3D3B34]">{assessmentResult.recommended}</span>
                  <p className="text-xs text-[#5A5850] mt-3 leading-relaxed">
                    {assessmentResult.description}
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FEFAE0] border border-[#D4C9A8] border-l-4 border-l-[#6BAA75]">
                  <span className="block font-bold text-xs text-[#3D3B34] mb-1">Dr. Somani's Advisory Note:</span>
                  <p className="text-xs text-[#5A5850] italic leading-relaxed">
                    "{assessmentResult.tips}"
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <a 
                    href="#booking-form"
                    onClick={() => {
                      setForm({
                        ...form,
                        treatment: assessmentResult.recommended
                      });
                    }}
                    className="bg-[#6BAA75] text-[#FEFAE0] font-bold text-xs uppercase tracking-wider rounded px-6 py-3 hover:bg-[#4F8B59] transition-colors flex items-center space-x-1.5"
                  >
                    <span>Proceed to Book {assessmentResult.recommended}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. RESULTS / BEFORE & AFTER SHOWCASE */}
      <section id="results" className="py-24 px-6 border-b border-[#D4C9A8]/40 bg-[#FFFDF2]">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#6BAA75] font-bold block font-sans">Evidence of Recovery</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D3B34]">Clinical Case Logbook</h2>
            <p className="text-xs text-[#5A5850] font-sans">
              Photographic documentation of patient recoveries following strict diagnostic compliance and prescription cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="p-4 rounded bg-[#FEFAE0] border border-[#D4C9A8]/60 flex flex-col justify-between text-left font-sans">
              <div className="overflow-hidden aspect-[4/3] mb-4 relative border border-[#D4C9A8]/30">
                <img 
                  src="https://images.unsplash.com/photo-1607606324415-c77f0f87afbe?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinical acne recovery progress"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-[#6BAA75] text-[#FEFAE0] text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">6 Weeks Recovery</span>
              </div>
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#FFFDF2] border border-[#D4C9A8]/40 text-[9px] font-bold text-[#6BAA75] uppercase">Acne Vulgaris Management</span>
                <h3 className="font-serif font-extrabold text-sm text-[#3D3B34]">Active pustular clearance</h3>
                <p className="text-[11px] text-[#5A5850] leading-relaxed">
                  Severe inflammatory acne treated with a targeted chemical peel schedule combined with oral retinoic acid prescription.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="p-4 rounded bg-[#FEFAE0] border border-[#D4C9A8]/60 flex flex-col justify-between text-left font-sans">
              <div className="overflow-hidden aspect-[4/3] mb-4 relative border border-[#D4C9A8]/30">
                <img 
                  src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800" 
                  alt="Trichology recovery progress"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-[#6BAA75] text-[#FEFAE0] text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">3 Months Recovery</span>
              </div>
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#FFFDF2] border border-[#D4C9A8]/40 text-[9px] font-bold text-[#6BAA75] uppercase">Trichological GFC therapy</span>
                <h3 className="font-serif font-extrabold text-sm text-[#3D3B34]">Severe vertex hair thinning</h3>
                <p className="text-[11px] text-[#5A5850] leading-relaxed">
                  Autologous growth factor concentrate (GFC) injections targeting active vertex thinning, stimulating density restoration.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="p-4 rounded bg-[#FEFAE0] border border-[#D4C9A8]/60 flex flex-col justify-between text-left font-sans">
              <div className="overflow-hidden aspect-[4/3] mb-4 relative border border-[#D4C9A8]/30">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                  alt="Eczema recovery progress"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-[#6BAA75] text-[#FEFAE0] text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">2 Weeks Recovery</span>
              </div>
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#FFFDF2] border border-[#D4C9A8]/40 text-[9px] font-bold text-[#6BAA75] uppercase">Atopic Dermatitis Care</span>
                <h3 className="font-serif font-extrabold text-sm text-[#3D3B34]">Eczematous plaque healing</h3>
                <p className="text-[11px] text-[#5A5850] leading-relaxed">
                  Identification of triggering washing detergent allergen via patch test, followed by localized topical immunomodulator therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12 font-sans">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#6BAA75] font-bold block">Patient Trust</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D3B34]">Verified Patient Letters</h2>
            <p className="text-xs text-[#5A5850]">
              Read how Dr. Somani's ethical diagnostics have restored skin health for patients across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-6 sm:p-8 rounded bg-[#FFFDF2] border border-[#D4C9A8]/60 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex space-x-1 text-yellow-600">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-[#5A5850] leading-relaxed italic">
                  "Dr. Somani is a diagnostic genius. My chronic scalp itching and hair fall of 3 years stopped within a month of his prescription. Extremely professional and does not recommend unnecessary tests."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#D4C9A8]/30 mt-6">
                <div className="w-8 h-8 rounded-full bg-[#6BAA75] text-[#FEFAE0] flex items-center justify-center font-bold text-xs">SK</div>
                <div>
                  <span className="block font-bold text-xs text-[#3D3B34]">Satish Kumar</span>
                  <span className="block text-[10px] text-[#6BAA75]">Jubilee Hills, Hyderabad</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 sm:p-8 rounded bg-[#FFFDF2] border border-[#D4C9A8]/60 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex space-x-1 text-yellow-600">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-[#5A5850] leading-relaxed italic">
                  "I had severe nodular acne that left deep red scars. The medical peeling treatments suggested here worked wonders without being overly commercial. Dr. Somani explained the science behind it very clearly."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#D4C9A8]/30 mt-6">
                <div className="w-8 h-8 rounded-full bg-[#6BAA75] text-[#FEFAE0] flex items-center justify-center font-bold text-xs">DN</div>
                <div>
                  <span className="block font-bold text-xs text-[#3D3B34]">Divya Naidu</span>
                  <span className="block text-[10px] text-[#6BAA75]">Madhapur, Hyderabad</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 sm:p-8 rounded bg-[#FFFDF2] border border-[#D4C9A8]/60 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex space-x-1 text-yellow-600">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-[#5A5850] leading-relaxed italic">
                  "Unlike other fancy cosmetic clinics in Jubilee Hills, Dermatrendz is focused on real medical science. Extremely ethical and honest treatment. Recommended for anyone with real pathological skin problems."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#D4C9A8]/30 mt-6">
                <div className="w-8 h-8 rounded-full bg-[#6BAA75] text-[#FEFAE0] flex items-center justify-center font-bold text-xs">SB</div>
                <div>
                  <span className="block font-bold text-xs text-[#3D3B34]">Suresh Babu</span>
                  <span className="block text-[10px] text-[#6BAA75]">Kondapur, Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING / ENQUIRY FORM */}
      <section id="booking-form" className="py-24 px-6 bg-[#FFFDF2] border-t border-b border-[#D4C9A8]/40">
        <div className="max-w-3xl mx-auto font-sans">
          <div className="text-center space-y-4 mb-10">
            <span className="text-[10px] uppercase tracking-widest text-[#6BAA75] font-bold block">Secure Intake</span>
            <h2 className="font-serif text-3xl font-extrabold text-[#3D3B34]">Clinical Appointment Request</h2>
            <p className="text-xs text-[#5A5850]">
              Submit your medical details for a confirmed clinical slot. Registrations are vetted directly by the clinic administrator.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded bg-[#FEFAE0] border border-[#D4C9A8]/60">
            {bookingConfirmation ? (
              <div className="text-center space-y-6 py-4">
                <div className="w-12 h-12 rounded bg-[#6BAA75] text-[#FEFAE0] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#3D3B34]">Clinical Booking Registered</h3>
                  <p className="text-xs text-[#5A5850]">
                    Your reference details are compiled below. Our clinic receptionist will contact you shortly to lock the exact timing.
                  </p>
                </div>

                <div className="p-6 rounded bg-[#FFFDF2] border border-[#D4C9A8]/50 max-w-md mx-auto text-left space-y-3">
                  <div className="flex justify-between border-b border-[#D4C9A8]/40 pb-2">
                    <span className="text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Reference ID</span>
                    <span className="text-xs font-bold text-[#3D3B34]">{bookingConfirmation.refNumber}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A5850]">Patient Name:</span>
                    <span className="font-semibold text-[#3D3B34]">{bookingConfirmation.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A5850]">Contact Phone:</span>
                    <span className="font-semibold text-[#3D3B34]">{bookingConfirmation.phone}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A5850]">Doctor:</span>
                    <span className="font-semibold text-[#3D3B34]">{bookingConfirmation.doctor}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A5850]">Target Service:</span>
                    <span className="font-semibold text-[#3D3B34]">{bookingConfirmation.treatment}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A5850]">Requested Date:</span>
                    <span className="font-semibold text-[#3D3B34]">{bookingConfirmation.date}</span>
                  </div>
                </div>

                <button
                  onClick={resetBookingForm}
                  className="bg-[#6BAA75] text-[#FEFAE0] text-xs font-bold uppercase tracking-wider rounded px-6 py-3 hover:bg-[#4F8B59] transition-colors"
                >
                  Book Another Patient
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Child/Adult Patient Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-[#6BAA75]" />
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Patient name"
                        className="w-full bg-[#FFFDF2] rounded border border-[#D4C9A8]/60 pl-11 pr-4 py-3 focus:outline-none focus:border-[#6BAA75] text-xs text-[#3D3B34]"
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-red-700 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Contact Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-[#6BAA75]" />
                      <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className="w-full bg-[#FFFDF2] rounded border border-[#D4C9A8]/60 pl-11 pr-4 py-3 focus:outline-none focus:border-[#6BAA75] text-xs text-[#3D3B34]"
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-700 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-[#6BAA75]" />
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="patient@dermatrendz.com"
                        className="w-full bg-[#FFFDF2] rounded border border-[#D4C9A8]/60 pl-11 pr-4 py-3 focus:outline-none focus:border-[#6BAA75] text-xs text-[#3D3B34]"
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-700 font-medium">{errors.email}</p>}
                  </div>

                  {/* Date */}
                  <div className="space-y-1">
                    <label htmlFor="date" className="block text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Preferred Appointment Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-[#6BAA75]" />
                      <input 
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDF2] rounded border border-[#D4C9A8]/60 pl-11 pr-4 py-3 focus:outline-none focus:border-[#6BAA75] text-xs text-[#3D3B34]"
                      />
                    </div>
                    {errors.date && <p className="text-[10px] text-red-700 font-medium">{errors.date}</p>}
                  </div>

                  {/* Treatment Dropdown */}
                  <div className="space-y-1">
                    <label htmlFor="treatment" className="block text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Treatment Interest</label>
                    <div className="relative">
                      <Sliders className="absolute left-4 top-3.5 w-4 h-4 text-[#6BAA75]" />
                      <select 
                        id="treatment"
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDF2] rounded border border-[#D4C9A8]/60 pl-11 pr-4 py-3 focus:outline-none focus:border-[#6BAA75] text-xs text-[#3D3B34] appearance-none"
                      >
                        <option>Medical Dermatology</option>
                        <option>Trichology & Hair Care</option>
                        <option>Acne & Allergy Therapeutics</option>
                        <option>General Skin Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Doctor Dropdown */}
                  <div className="space-y-1">
                    <label htmlFor="doctor" className="block text-[10px] font-bold text-[#6BAA75] uppercase tracking-wider">Preferred Clinician</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-[#6BAA75]" />
                      <select 
                        id="doctor"
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDF2] rounded border border-[#D4C9A8]/60 pl-11 pr-4 py-3 focus:outline-none focus:border-[#6BAA75] text-xs text-[#3D3B34] appearance-none"
                      >
                        <option>Dr. V K Somani</option>
                        <option>Associate Consultant Dermatologist</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-1">
                  <label className="flex items-start space-x-2 cursor-pointer py-2">
                    <input 
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded bg-[#FFFDF2] border-[#D4C9A8]/60 text-[#6BAA75] focus:ring-[#6BAA75] cursor-pointer mt-0.5"
                    />
                    <span className="text-[11px] text-[#5A5850]">
                      I authorize Dermatrendz Skin Care Centre to record my clinical query and contact me regarding appointment slot availability.
                    </span>
                  </label>
                  {errors.consent && <p className="text-[10px] text-red-700 font-medium">{errors.consent}</p>}
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#6BAA75] text-[#FEFAE0] font-bold text-xs uppercase tracking-widest rounded px-8 py-4 hover:bg-[#4F8B59] transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-[#FEFAE0] border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Clinical Form...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. CLINIC LOCATION & HOURS FOOTER */}
      <footer className="bg-[#FFFDF2] border-t border-[#D4C9A8]/40 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#D4C9A8]/30 pb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left font-sans">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded bg-[#6BAA75] text-[#FEFAE0]">
                <Activity className="w-4 h-4" />
              </span>
              <div>
                <span className="font-serif font-bold text-lg text-[#3D3B34] block">Dermatrendz</span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#6BAA75] font-semibold -mt-1 block font-sans">Skin Care Centre</span>
              </div>
            </div>
            
            <p className="text-xs text-[#5A5850] max-w-sm leading-relaxed">
              Pathology-oriented medical dermatology and trichology centre in Hyderabad. Strictly evidence-based, scientifically validated skin and hair care.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-[#5A5850]">
                <Phone className="w-4 h-4 text-[#6BAA75]" />
                <a href="tel:+919966344442" className="hover:text-[#6BAA75] font-semibold">+91 9966344442</a>
              </div>
              <div className="flex items-start space-x-2 text-[#5A5850]">
                <MapPin className="w-4 h-4 text-[#6BAA75] shrink-0 mt-0.5" />
                <span className="leading-relaxed">1st Floor, Plot 17-A, Journalist Colony, Jubilee Hills, Hyderabad, Telangana - 500033</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="md:col-span-3 space-y-4 text-left font-sans">
            <h3 className="text-xs font-bold text-[#3D3B34] uppercase tracking-wider border-b border-[#D4C9A8]/30 pb-2">Clinical Hours</h3>
            <ul className="space-y-2.5 text-xs text-[#5A5850]">
              <li className="flex justify-between">
                <span>Mon - Sat Morning:</span>
                <span className="font-semibold">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Mon - Sat Evening:</span>
                <span className="font-semibold">4:00 PM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-[#6BAA75] font-bold">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="md:col-span-4 space-y-4 text-left font-sans">
            <h3 className="text-xs font-bold text-[#3D3B34] uppercase tracking-wider border-b border-[#D4C9A8]/30 pb-2">Location Map</h3>
            <div className="p-3 rounded bg-[#FEFAE0] border border-[#D4C9A8]/50 aspect-video flex flex-col items-center justify-center text-center">
              <MapPin className="w-6 h-6 text-[#6BAA75] mb-2" />
              <span className="block text-xs font-bold text-[#3D3B34]">Jubilee Hills, Journalist Colony</span>
              <span className="block text-[9px] text-[#5A5850] mt-0.5">Plot 17-A, Near Journalist Club</span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 inline-flex items-center space-x-1.5 text-[9px] font-bold text-[#3D3B34] px-3.5 py-1.5 rounded border border-[#D4C9A8]/60 bg-[#FFFDF2] hover:bg-[#FEFAE0] transition-colors"
              >
                <span>Google Maps Guide</span>
                <Compass className="w-3 h-3 text-[#6BAA75]" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#6BAA75] font-sans pt-8">
          <span>&copy; 2026 Dermatrendz Skin Care Centre. All rights reserved.</span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Medical Privacy Charter</a>
            <a href="#" className="hover:underline">Patient Rights Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

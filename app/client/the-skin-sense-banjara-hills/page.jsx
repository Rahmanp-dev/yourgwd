"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Clock, 
  Star, 
  ShieldCheck, 
  Check, 
  Calendar, 
  ChevronRight, 
  User, 
  Info, 
  Lock, 
  Menu, 
  X,
  FileText,
  Activity,
  Heart,
  RefreshCw,
  ThumbsUp
} from 'lucide-react';

// Treatments Data
const TREATMENT_CATEGORIES = {
  'biostimulants': {
    name: 'Biostimulants (Sculptra/Radiesse)',
    description: 'Injectable collagen synthesizers designed to naturally restore structural volume, smooth deep creases, and refine skin density.',
    basePrice: 40000,
    options: [
      { id: 'sculptra-face', name: 'Sculptra Face Rejuvenation', multiplier: 1.0 },
      { id: 'radiesse-hands', name: 'Radiesse Hand Restoration', multiplier: 0.8 },
      { id: 'sculptra-neck', name: 'Sculptra Neck & Decolletage', multiplier: 0.9 }
    ]
  },
  'hydrafacials': {
    name: 'HydraFacials',
    description: 'Medical-grade multi-step hydradermabrasion system that extracts, hydrates, and infuses customized peptide serums.',
    basePrice: 6500,
    options: [
      { id: 'signature', name: 'Signature HydraFacial', multiplier: 1.0 },
      { id: 'deluxe', name: 'Deluxe Brightening Facial', multiplier: 1.38 },
      { id: 'platinum', name: 'Platinum Restorative Facial', multiplier: 1.84 }
    ]
  },
  'double-chin': {
    name: 'Double Chin Reduction',
    description: 'Non-surgical targeted lipolysis and high-frequency tightening to contour and define the jawline.',
    basePrice: 15000,
    options: [
      { id: 'injectable', name: 'Deoxycholic Micro-Injections', multiplier: 1.0 },
      { id: 'hifu-tight', name: 'Focused Ultrasound (HIFU)', multiplier: 1.33 },
      { id: 'dual-mode', name: 'Dual Contouring Package', multiplier: 2.0 }
    ]
  }
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your primary aesthetic objective?",
    options: [
      { text: "Restore lost volume, saggy skin, and deep wrinkles", value: "biostimulants" },
      { text: "Congested skin, blackheads, dry texture, or instant radiance", value: "hydrafacials" },
      { text: "Targeted fat reduction and jawline contouring", value: "double-chin" }
    ]
  },
  {
    id: 2,
    question: "What level of downtime is acceptable for you?",
    options: [
      { text: "None. Need a same-day glow (Zero redness)", value: "none" },
      { text: "Minimal. OK with mild soreness or subtle swelling (1-2 days)", value: "minimal" },
      { text: "Open to premium clinical injectables for maximum result", value: "injectable" }
    ]
  },
  {
    id: 3,
    question: "What skin type do you closely identify with?",
    options: [
      { text: "Dehydrated, thin, or mature skin", value: "mature" },
      { text: "Congested, oily, or normal skin", value: "oily" },
      { text: "Highly sensitive or rosacea-prone skin", value: "sensitive" }
    ]
  }
];

export default function TheSkinSenseBanjaraHillsPage() {
  // Mobile Navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selector Widget State
  const [selectedTx, setSelectedTx] = useState('biostimulants');
  const [selectedOpt, setSelectedOpt] = useState('sculptra-face');
  const [sessionsCount, setSessionsCount] = useState(2);
  const [quoteLocked, setQuoteLocked] = useState(false);

  // Skin Quiz State
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Appointment Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'afternoon',
    treatment: 'biostimulants',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // Calculations for Treatment Estimator
  const activeTx = TREATMENT_CATEGORIES[selectedTx] || TREATMENT_CATEGORIES['biostimulants'];
  const activeOpt = activeTx.options.find(o => o.id === selectedOpt) || activeTx.options[0];
  const unitPrice = Math.round(activeTx.basePrice * activeOpt.multiplier);
  const grossSubtotal = unitPrice * sessionsCount;

  // Session Discount Rules
  let discountPercent = 0;
  if (sessionsCount >= 6) discountPercent = 20;
  else if (sessionsCount >= 4) discountPercent = 12;
  else if (sessionsCount >= 2) discountPercent = 5;

  const discountAmount = Math.round((grossSubtotal * discountPercent) / 100);
  const netSubtotal = grossSubtotal - discountAmount;
  const taxAmount = Math.round(netSubtotal * 0.18); // 18% GST
  const estimatedTotal = netSubtotal + taxAmount;

  // Handles updating option if selectedTx changes
  const handleTxChange = (txId) => {
    setSelectedTx(txId);
    const defaults = TREATMENT_CATEGORIES[txId].options[0].id;
    setSelectedOpt(defaults);
    setQuoteLocked(false);
  };

  // Lock quote & copy to notes
  const lockQuoteAndScroll = () => {
    const formattedNotes = `LOCKED ESTIMATE: ${activeTx.name} - ${activeOpt.name}\nSessions: ${sessionsCount}\nPackage Price: ₹${estimatedTotal.toLocaleString('en-IN')} (incl. 18% GST)`;
    setForm(prev => ({
      ...prev,
      treatment: selectedTx,
      notes: formattedNotes
    }));
    setQuoteLocked(true);
    
    // Scroll to form
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quiz Navigation
  const handleQuizAnswer = (value) => {
    const nextAnswers = [...quizAnswers, value];
    setQuizAnswers(nextAnswers);
    if (currentQuizStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizStep(currentQuizStep + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizStep(0);
    setQuizAnswers([]);
    setShowQuizResult(false);
  };

  const getQuizRecommendation = () => {
    const primaryConcern = quizAnswers[0] || 'biostimulants';
    const downtime = quizAnswers[1] || 'none';
    
    let recommendationText = "";
    let recommendedCategory = "biostimulants";

    if (primaryConcern === "biostimulants") {
      recommendedCategory = "biostimulants";
      recommendationText = "Premium Collagen Biostimulants (Sculptra or Radiesse) are recommended. These injectables trigger gradual neocollagenesis to structurally restore youthful density with up to 2 years of longevity.";
    } else if (primaryConcern === "hydrafacials") {
      recommendedCategory = "hydrafacials";
      if (downtime === "none") {
        recommendationText = "Platinum Restorative HydraFacial is recommended. Includes detoxifying lymphatic drainage, custom chemical peeling, painless vacuum extractions, and LED light therapy for a same-day glow.";
      } else {
        recommendationText = "Deluxe Brightening HydraFacial combined with personalized active enzyme boosters to address pigmented cellular debris and enhance clarity.";
      }
    } else {
      recommendedCategory = "double-chin";
      recommendationText = "Non-surgical Double Chin Reduction combining fat-dissolving micro-injections with high-frequency tightening (HIFU) to safely sculpt, trim, and tone the submental area.";
    }

    return {
      category: recommendedCategory,
      text: recommendationText
    };
  };

  // Input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Appointment date cannot be in the past';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium backend booking entry
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmation({
        id: `SENSE-${Math.floor(100000 + Math.random() * 900000)}`,
        name: form.name,
        phone: form.phone,
        email: form.email,
        date: form.date,
        timeSlot: form.timeSlot,
        treatment: TREATMENT_CATEGORIES[form.treatment]?.name || form.treatment,
        notes: form.notes
      });
    }, 1200);
  };

  const handleBookingReset = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: 'afternoon',
      treatment: 'biostimulants',
      notes: ''
    });
    setQuoteLocked(false);
    setBookingConfirmation(null);
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0] text-[#2C2520] selection:bg-[#C05621]/10 font-sans antialiased relative">
      
      {/* Editorial top accent line */}
      <div className="h-1.5 w-full bg-[#C05621]"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FDF6F0]/90 backdrop-blur-md border-b border-[#C05621]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-xl tracking-tight text-[#C05621]">
              The Skin Sensé
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-gray-500 font-semibold -mt-0.5">
              by Dr. Alekya Singapore
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-wider font-semibold text-gray-700">
            <a href="#about" className="hover:text-[#C05621] transition-colors">Philosophy</a>
            <a href="#treatments-widget" className="hover:text-[#C05621] transition-colors">Cost Estimator</a>
            <a href="#assessment" className="hover:text-[#C05621] transition-colors">Skin Quiz</a>
            <a href="#results" className="hover:text-[#C05621] transition-colors">Case Studies</a>
            <a href="#reviews" className="hover:text-[#C05621] transition-colors">Reviews</a>
            <a 
              href="#booking-form" 
              className="ml-4 px-6 py-3 bg-[#C05621] hover:bg-[#A0451A] text-white transition-all duration-300 font-bold tracking-wider"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#C05621] hover:text-[#A0451A] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-[#FDF6F0] border-b border-[#C05621]/20 px-6 py-6 absolute top-20 left-0 flex flex-col space-y-4 shadow-md animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#C05621]">Philosophy</a>
            <a href="#treatments-widget" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#C05621]">Cost Estimator</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#C05621]">Skin Quiz</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#C05621]">Case Studies</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#C05621]">Reviews</a>
            <a 
              href="#booking-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#C05621] text-white font-bold uppercase text-xs tracking-wider"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2 border border-[#C05621]/30 px-3 py-1 bg-[#FFFBF7] text-[11px] font-bold tracking-wider text-[#C05621] w-fit uppercase">
            <Sparkles size={13} />
            <span>Organic Beauty Meets Aesthetic Science</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 leading-tight tracking-tight">
            Reveal Your Skin's <br />
            <span className="font-extrabold text-[#C05621] italic">Natural Sensibility.</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Led by chief dermatologist Dr. Alekya Singapore, The Skin Sensé specializes in premium non-surgical aesthetic enhancements. From advanced Biostimulants (Sculptra and Radiesse) that restore biological volume to signature HydraFacials and targeted Double Chin reduction, we craft customized, organic-looking results with clinical precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#booking-form" 
              className="px-8 py-4 bg-[#C05621] hover:bg-[#A0451A] text-white transition-colors duration-300 font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center space-x-2"
            >
              <span>Request Priority Booking</span>
              <ChevronRight size={14} />
            </a>
            <a 
              href="#treatments-widget" 
              className="px-8 py-4 bg-[#FFFBF7] hover:bg-white text-gray-800 font-bold uppercase tracking-wider text-xs border border-[#C05621]/20 transition-colors text-center flex items-center justify-center"
            >
              <span>Calculate Treatment Costs</span>
            </a>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white border border-[#C05621]/20 p-3 shadow-md rounded-t-[100px]">
            <div className="w-full h-full overflow-hidden relative bg-[#FDF6F0] rounded-t-[90px]">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                alt="Minimalist skin therapy aesthetic setup representing clinical precision" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2520]/25 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 border border-[#C05621]/15 rounded-md">
                <p className="text-[10px] uppercase tracking-widest text-[#C05621] font-bold">Signature Science</p>
                <p className="text-xs font-serif font-bold text-gray-900 mt-0.5">Custom Collagen Synthesis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="bg-[#FFFBF7] border-y border-[#C05621]/10 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center border-r last:border-none border-[#C05621]/10 px-2">
            <span className="block text-3xl font-serif font-extrabold text-[#C05621]">10+ Yrs</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">Dermatology Excellence</span>
          </div>
          <div className="text-center md:border-r last:border-none border-[#C05621]/10 px-2">
            <span className="block text-3xl font-serif font-extrabold text-[#C05621]">5,000+</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">Facial Enhancements</span>
          </div>
          <div className="text-center border-r last:border-none border-[#C05621]/10 px-2">
            <span className="block text-3xl font-serif font-extrabold text-[#C05621]">100%</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">USFDA Injectables</span>
          </div>
          <div className="text-center px-2">
            <span className="block text-3xl font-serif font-extrabold text-[#C05621]">4.9★</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">Patient Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Doctor Bio Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] bg-white border border-[#C05621]/10 p-2 shadow-sm rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800" 
                alt="Portrait of Dr. Alekya Singapore, MBBS, DDVL" 
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-[1px] w-10 bg-[#C05621]"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#C05621]">Dermatologist & Medical Director</span>
            </div>
            
            <h2 className="text-3xl font-serif font-light text-gray-900">
              Meet <span className="font-bold text-[#C05621]">Dr. Alekya Singapore</span>
            </h2>
            
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider -mt-4">
              MBBS, DDVL — Chief Clinical Consultant & Facial Sculpting Expert
            </p>

            <div className="text-gray-600 text-sm leading-relaxed space-y-4 font-sans">
              <p>
                Dr. Alekya Singapore is an acclaimed clinical dermatologist known for pioneering natural, non-overdone aesthetic results. With an MBBS and a Diploma in Dermatology, Venereology, and Leprosy, she has dedicated over a decade to mastering advanced injectables and skincare diagnostics.
              </p>
              <p>
                Dr. Singapore believes in "Sensible Aesthetics"—the practice of enhancing facial volume and structural lines to align with each patient’s natural anatomy. She oversees all treatments at The Skin Sensé, ensuring that sophisticated collagen biostimulants, medically-calibrated HydraFacials, and submental fat-reduction techniques are administered under strict clinical protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#FFFBF7] text-[#C05621] rounded-md">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Advanced Training</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Accredited in Advanced Injectable Biostimulators</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#FFFBF7] text-[#C05621] rounded-md">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Integrative Diagnostics</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Merging pharmaceutical skin repair with advanced tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Selector Section */}
      <section id="treatments-widget" className="py-20 px-6 bg-[#FFFBF7] border-y border-[#C05621]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C05621]">Our Treatments</span>
            <h2 className="text-3xl font-serif font-light text-gray-900 mt-2">
              Interactive <span className="font-bold">Cost Estimator</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 font-sans">
              Choose your clinical therapy, select options, and calculate tailored packaging quotes with instant sync capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Selection Column */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#C05621]/10 shadow-xs flex flex-col justify-between rounded-md">
              <div>
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  1. Choose Treatment Category
                </h3>
                
                {/* Treatment Category Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {Object.keys(TREATMENT_CATEGORIES).map((catId) => (
                    <button
                      key={catId}
                      onClick={() => handleTxChange(catId)}
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider border rounded-md transition-all ${
                        selectedTx === catId 
                          ? 'border-[#C05621] bg-[#C05621] text-white' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-[#C05621]/50 hover:bg-gray-50'
                      }`}
                    >
                      {TREATMENT_CATEGORIES[catId].name}
                    </button>
                  ))}
                </div>

                <div className="bg-[#FDF6F0]/40 p-4 border border-[#C05621]/10 rounded-md mb-8">
                  <p className="text-xs text-gray-600 leading-relaxed italic font-sans">
                    {activeTx.description}
                  </p>
                </div>

                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  2. Select Treatment Option
                </h3>

                {/* Sub Options selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {activeTx.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setSelectedOpt(opt.id); setQuoteLocked(false); }}
                      className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider border rounded-md text-center transition-all ${
                        selectedOpt === opt.id 
                          ? 'border-gray-900 bg-gray-900 text-white' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>

                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  3. Select Session Bundle (Includes Loyalty Discount)
                </h3>

                {/* Sessions Slider */}
                <div className="px-2 mb-4">
                  <div className="flex justify-between text-xs font-bold uppercase text-gray-600 mb-2">
                    <span>Sessions: {sessionsCount}</span>
                    <span className="text-[#C05621]">
                      {discountPercent > 0 ? `-${discountPercent}% Bundle Discount` : 'Single Session'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={sessionsCount}
                    onChange={(e) => { setSessionsCount(parseInt(e.target.value)); setQuoteLocked(false); }}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C05621]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase mt-2">
                    <span>1 Session</span>
                    <span>2 Sessions (-5%)</span>
                    <span>4 Sessions (-12%)</span>
                    <span>6 Sessions (-20%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Estimate Column */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-[#C05621]/10 shadow-xs flex flex-col justify-between relative overflow-hidden rounded-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C05621]/5 rounded-bl-full pointer-events-none"></div>
              
              <div>
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  Estimate Summary
                </h3>

                <div className="space-y-4 font-sans">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Selected Treatment</span>
                    <span className="font-bold text-gray-800">{activeTx.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Option</span>
                    <span className="font-bold text-gray-800">{activeOpt.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Sessions</span>
                    <span className="font-bold text-gray-800">{sessionsCount}</span>
                  </div>
                  
                  <div className="border-t border-dashed border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 uppercase tracking-wider font-semibold">Base Cost (₹{unitPrice}/Session)</span>
                      <span className="font-bold text-gray-800">₹{grossSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-xs text-green-600">
                        <span className="uppercase tracking-wider font-semibold">Bundle Savings ({discountPercent}%)</span>
                        <span className="font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 uppercase tracking-wider font-semibold">Taxable Subtotal</span>
                      <span className="font-bold text-gray-800">₹{netSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 uppercase tracking-wider font-semibold">GST (18%)</span>
                      <span className="font-bold text-gray-800">₹{taxAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-baseline mb-6 font-sans">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Estimated Quote</span>
                  <div className="text-right">
                    <span className="text-2xl font-serif font-extrabold text-gray-900">₹{estimatedTotal.toLocaleString('en-IN')}</span>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Includes GST</p>
                  </div>
                </div>

                <button
                  onClick={lockQuoteAndScroll}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-widest border rounded-md transition-all flex items-center justify-center space-x-2 ${
                    quoteLocked 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'bg-[#C05621] border-[#C05621] text-white hover:bg-[#A0451A] active:scale-[0.98]'
                  }`}
                >
                  {quoteLocked ? (
                    <>
                      <Check size={14} />
                      <span>Estimate Applied</span>
                    </>
                  ) : (
                    <>
                      <Lock size={14} />
                      <span>Lock & Sync With Booking</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Assessment Questionnaire Section */}
      <section id="assessment" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
        <div className="border border-[#C05621]/20 bg-white p-6 sm:p-10 shadow-sm rounded-lg relative">
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#C05621]"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#C05621]"></div>

          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#C05621]">Interactive Diagnostics</span>
            <h2 className="text-2xl font-serif font-light text-gray-900 mt-1">
              Skin Assessment <span className="font-bold">Questionnaire</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1 font-sans">
              Discover which specialized non-surgical treatment is ideal for your skin type and downtime requirements.
            </p>
          </div>

          {!showQuizResult ? (
            <div>
              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-1 mb-8">
                <div 
                  className="bg-[#C05621] h-1 transition-all duration-300"
                  style={{ width: `${((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              <div className="mb-6 font-sans">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Question {currentQuizStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <h3 className="text-base font-bold text-gray-800 mt-1">
                  {QUIZ_QUESTIONS[currentQuizStep].question}
                </h3>
              </div>

              <div className="space-y-3 font-sans">
                {QUIZ_QUESTIONS[currentQuizStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(opt.value)}
                    className="w-full text-left p-4 text-xs font-semibold uppercase tracking-wider border border-gray-200 bg-white hover:border-[#C05621] hover:bg-[#C05621]/5 transition-all text-gray-700 rounded-md"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-[#FDF6F0] p-6 border border-[#C05621]/20 rounded-md font-sans">
              <div className="flex items-center space-x-3 mb-4 text-[#C05621]">
                <Activity size={24} />
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-800">
                  Your Recommended Skincare Protocol
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                  After analyzing your aesthetic preferences:
                </p>
                <div className="p-4 bg-white border border-[#C05621]/10 rounded text-xs text-gray-700 leading-relaxed font-medium">
                  {getQuizRecommendation().text}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      const rec = getQuizRecommendation();
                      setForm(prev => ({
                        ...prev,
                        treatment: rec.category,
                        notes: `PRE-QUIZ DIAGNOSIS:\nRecommended: ${rec.text}`
                      }));
                      const bookingSec = document.getElementById('booking-form');
                      if (bookingSec) {
                        bookingSec.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 py-3 bg-[#C05621] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#A0451A] rounded transition-colors text-center"
                  >
                    Pre-Fill Booking Form
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 border border-gray-300 text-gray-600 text-xs font-bold uppercase tracking-wider hover:bg-white rounded transition-colors flex items-center justify-center space-x-2"
                  >
                    <RefreshCw size={12} />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Showcase Section */}
      <section id="results" className="py-20 px-6 bg-[#FFFBF7] border-y border-[#C05621]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C05621]">Clinical Evidence</span>
            <h2 className="text-3xl font-serif font-light text-gray-900 mt-2">
              Results & <span className="font-bold">Case Studies</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 font-sans">
              Review documented clinical transformations showing volumetric, textural, and submental contouring outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border border-[#C05621]/15 p-6 flex flex-col justify-between rounded-md">
              <div>
                <div className="inline-block bg-[#C05621]/10 text-[#C05621] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4 rounded">
                  Biostimulants
                </div>
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Case #8401: Volumetric Correction
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-sans mb-4">
                  Patient presented with age-related dermal thinning and volume loss. Treated with 2 sessions of Sculptra.
                </p>
                
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mb-4 font-sans">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Protocol</span>
                    <span className="text-xs font-bold text-gray-700">2 Sessions</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Longevity</span>
                    <span className="text-xs font-bold text-green-700">Up to 24 Months</span>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full bg-gray-100 overflow-hidden relative rounded">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Injectable treatment details and clinical prep" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-[#C05621]/15 p-6 flex flex-col justify-between rounded-md">
              <div>
                <div className="inline-block bg-[#C05621]/10 text-[#C05621] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4 rounded">
                  HydraFacials
                </div>
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Case #9021: Congestion & Hydration
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-sans mb-4">
                  Addressed follicular debris and dry patches. Treated with monthly Platinum HydraFacials.
                </p>
                
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mb-4 font-sans">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Timeline</span>
                    <span className="text-xs font-bold text-gray-700">4 Treatments</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Texture</span>
                    <span className="text-xs font-bold text-green-700">Smoother, Radiant</span>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full bg-gray-100 overflow-hidden relative rounded">
                <img 
                  src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800" 
                  alt="Detailed medical skin diagnostics representation" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border border-[#C05621]/15 p-6 flex flex-col justify-between rounded-md">
              <div>
                <div className="inline-block bg-[#C05621]/10 text-[#C05621] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4 rounded">
                  Double Chin Reduction
                </div>
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Case #7109: Submental Sculpting
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-sans mb-4">
                  Patient requested structural jawline definition. Addressed with injectable deoxycholic acid.
                </p>
                
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mb-4 font-sans">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Treatments</span>
                    <span className="text-xs font-bold text-gray-700">3 Sessions</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Contour</span>
                    <span className="text-xs font-bold text-green-700">Significant Profile Lift</span>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full bg-gray-100 overflow-hidden relative rounded">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=800" 
                  alt="Precision aesthetic mapping on patient profile" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C05621]">Reviews</span>
          <h2 className="text-3xl font-serif font-light text-gray-900 mt-2">
            Patient <span className="font-bold">Attestations</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 font-sans">
            Hear from our patients who value subtle, age-defying structural adjustments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="border border-[#C05621]/10 bg-white p-6 shadow-xs flex flex-col justify-between rounded-md">
            <div>
              <div className="flex space-x-1 text-[#C05621] mb-4">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed mb-6 font-sans">
                "The Sculptra treatment by Dr. Alekya is brilliant. I was worried about looking artificial, but the volume returned so gradually. My cheeks look naturally lifted, and skin texture has improved drastically."
              </p>
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-gray-900">Dr. Nandini Rao</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Biostimulant Patient</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="border border-[#C05621]/10 bg-white p-6 shadow-xs flex flex-col justify-between rounded-md">
            <div>
              <div className="flex space-x-1 text-[#C05621] mb-4">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed mb-6 font-sans">
                "HydraFacial here is a luxurious medical experience. The exfoliation step feels highly effective and the nutrient boosters make my skin glow for weeks. A must-do every month!"
              </p>
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-gray-900">Shalini Verma</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">HydraFacial Patient</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="border border-[#C05621]/10 bg-white p-6 shadow-xs flex flex-col justify-between rounded-md">
            <div>
              <div className="flex space-x-1 text-[#C05621] mb-4">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed mb-6 font-sans">
                "I was self-conscious about my double chin. The micro-injection treatments at The Skin Sensé contoured my jawline perfectly. Minimal swelling for 2 days, but the fat-loss result is permanent."
              </p>
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-gray-900">Aditya Roy</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Jawline Contouring Patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form Section */}
      <section id="booking-form" className="py-20 px-6 bg-[#FFFBF7] border-t border-[#C05621]/10 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          {!bookingConfirmation ? (
            <div className="bg-white border border-[#C05621]/15 p-6 sm:p-10 shadow-sm rounded-md relative">
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#C05621]"></div>
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#C05621]"></div>

              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C05621]">Reservations</span>
                <h2 className="text-2xl font-serif font-light text-gray-900 mt-1">
                  Book Your <span className="font-bold">Consultation</span>
                </h2>
                <p className="text-xs text-gray-500 mt-1 font-sans">
                  Register your preferred date and time. Our patient support team will contact you to finalize the session slot.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Shalini Verma"
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-md focus:outline-none focus:border-[#C05621] ${
                        formErrors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-[10px] uppercase tracking-wider mt-1.5 font-bold">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9014696430"
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-md focus:outline-none focus:border-[#C05621] ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-[10px] uppercase tracking-wider mt-1.5 font-bold">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="e.g. shalini@gmail.com"
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-md focus:outline-none focus:border-[#C05621] ${
                        formErrors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[10px] uppercase tracking-wider mt-1.5 font-bold">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Treatment Category */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Primary Aesthetic Therapy *
                    </label>
                    <select
                      name="treatment"
                      value={form.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 text-xs font-semibold tracking-wider bg-white rounded-md focus:outline-none focus:border-[#C05621]"
                    >
                      <option value="biostimulants">Biostimulants (Sculptra/Radiesse)</option>
                      <option value="hydrafacials">HydraFacials</option>
                      <option value="double-chin">Double Chin Reduction</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Appointment Date */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-md focus:outline-none focus:border-[#C05621] ${
                        formErrors.date ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-[10px] uppercase tracking-wider mt-1.5 font-bold">
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Preferred Time Slot *
                    </label>
                    <select
                      name="timeSlot"
                      value={form.timeSlot}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 text-xs font-semibold tracking-wider bg-white rounded-md focus:outline-none focus:border-[#C05621]"
                    >
                      <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes & locked quote details */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
                    Medical History / Locked Quote Notes
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="e.g. List any active skin infections, bleeding disorders, or calculations here..."
                    className="w-full px-4 py-3 border border-gray-200 text-xs font-semibold tracking-wider rounded-md focus:outline-none focus:border-[#C05621] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C05621] hover:bg-[#A0451A] text-white text-xs font-bold uppercase tracking-widest rounded-md border border-[#C05621] hover:border-[#A0451A] transition-all duration-300 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Registering Booking...' : 'Request Priority Appointment'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white border border-[#C05621]/15 p-6 sm:p-10 shadow-md text-center rounded-md">
              {/* Success confirmation card */}
              <div className="w-16 h-16 bg-[#C05621]/10 text-[#C05621] rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp size={28} />
              </div>

              <h2 className="text-2xl font-serif font-light text-gray-900 uppercase mb-2">
                Booking <span className="font-bold text-[#C05621]">Confirmed!</span>
              </h2>
              
              <div className="inline-block bg-[#FDF6F0] text-[#C05621] text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-6 border border-[#C05621]/20 rounded">
                Reference ID: {bookingConfirmation.id}
              </div>

              <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 p-6 text-left space-y-4 mb-8 rounded font-sans">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Patient Name</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Mobile</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.phone}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Date / Slot</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.date} ({bookingConfirmation.timeSlot.toUpperCase()})</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Therapy</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.treatment}</span>
                </div>
                {bookingConfirmation.notes && (
                  <div className="border-t border-gray-200 pt-3">
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold mb-1">Estimate / Special Notes</span>
                    <p className="text-xs text-gray-600 bg-white p-2.5 border border-gray-150 font-mono whitespace-pre-line leading-relaxed">
                      {bookingConfirmation.notes}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto mb-8 font-sans">
                A confirmation SMS containing preparation guidelines has been dispatched. Please avoid active sun exposure 24 hours prior to treatment.
              </p>

              <button
                onClick={handleBookingReset}
                className="px-6 py-3 bg-[#C05621] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#A0451A] transition-colors rounded"
              >
                Register Another Patient
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer / Location Section */}
      <footer className="bg-white border-t border-[#C05621]/15 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-100 pb-12 mb-8">
          
          {/* Logo & Contact details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg tracking-tight text-[#C05621]">
                The Skin Sensé
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-gray-500 font-semibold -mt-0.5">
                by Dr. Alekya Singapore
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-sans">
              Specialized non-surgical aesthetics clinic in Banjara Hills. Sculpting volume, structural contours, and healthy skin barriers.
            </p>
            <div className="space-y-2 pt-2 font-sans">
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <Phone size={13} className="text-[#C05621]" />
                <span className="font-semibold">+91 9014696430</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <Mail size={13} className="text-[#C05621]" />
                <span className="font-semibold">contact@theskinsense.in</span>
              </div>
            </div>
          </div>

          {/* Address & Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-gray-900">
              Clinic Address
            </h4>
            <div className="flex items-start space-x-3 text-xs text-gray-600 font-sans">
              <MapPin size={15} className="text-[#C05621] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Bhavya's Fantastika, 201/208,<br />
                Road No. 12, Banjara Hills,<br />
                Hyderabad, Telangana 500034
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-gray-900">
              Operating Hours
            </h4>
            <div className="space-y-2 text-xs text-gray-600 font-sans">
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>Monday - Saturday</span>
                <span className="font-bold">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>Sunday</span>
                <span className="font-bold text-[#C05621]">Closed</span>
              </div>
              <div className="flex justify-between pb-1">
                <span>Priority Emergency</span>
                <span className="font-bold text-gray-800">Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer and Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider font-semibold font-sans">
          <p>© 2026 The Skin Sensé by Dr. Alekya Singapore. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 text-center md:text-right">
            Disclaimer: Professional assessment required. Treatment options and outcomes differ per individual case.
          </p>
        </div>
      </footer>

    </div>
  );
}

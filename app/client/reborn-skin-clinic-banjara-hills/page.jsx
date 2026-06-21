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
  ChevronLeft,
  RefreshCw,
  ThumbsUp
} from 'lucide-react';

// Treatments Data
const TREATMENT_CATEGORIES = {
  'laser-hair': {
    name: 'Laser Hair Removal',
    description: 'Advanced USFDA-approved triple wavelength cooling laser for painless, permanent hair reduction.',
    basePrice: 2500,
    options: [
      { id: 'face', name: 'Full Face', multiplier: 1.0 },
      { id: 'underarms', name: 'Underarms', multiplier: 0.8 },
      { id: 'arms', name: 'Full Arms', multiplier: 1.5 },
      { id: 'legs', name: 'Full Legs', multiplier: 1.8 },
      { id: 'body', name: 'Full Body', multiplier: 3.8 }
    ]
  },
  'prp-hair': {
    name: 'PRP Hair Therapy',
    description: 'Platelet-rich plasma therapy using growth-factor concentrates (GFC) to stimulate hair follicles.',
    basePrice: 4000,
    options: [
      { id: 'crown', name: 'Crown Area', multiplier: 1.0 },
      { id: 'full-head', name: 'Full Head Restoration', multiplier: 1.6 },
      { id: 'beard', name: 'Beard Density Growth', multiplier: 0.8 }
    ]
  },
  'chemical-peel': {
    name: 'Chemical Peels',
    description: 'Medical-grade dermatological peels to target hyperpigmentation, active acne, and uneven texture.',
    basePrice: 2000,
    options: [
      { id: 'glycolic', name: 'Brightening Glycolic Peel', multiplier: 1.0 },
      { id: 'salicylic', name: 'Clarifying Salicylic Peel', multiplier: 1.2 },
      { id: 'tca', name: 'Anti-Aging TCA Peel', multiplier: 1.6 }
    ]
  }
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your primary concerns today?",
    options: [
      { text: "Unwanted facial/body hair growth", value: "laser-hair" },
      { text: "Hair thinning, receding hairline, or hair fall", value: "prp-hair" },
      { text: "Acne, scars, dark spots, or dull skin tone", value: "chemical-peel" },
      { text: "General skin maintenance and anti-aging", value: "chemical-peel" }
    ]
  },
  {
    id: 2,
    question: "How would you describe your skin sensitivity?",
    options: [
      { text: "Very sensitive (frequent redness, irritation)", value: "sensitive" },
      { text: "Combination/Oily (shiny T-zone, occasional acne)", value: "combination" },
      { text: "Normal/Dry (rarely breaks out, feels tight at times)", value: "normal" }
    ]
  },
  {
    id: 3,
    question: "What is your main priority for the treatment outcome?",
    options: [
      { text: "Quick recovery/No downtime", value: "quick" },
      { text: "Maximum, long-lasting transformation", value: "transform" },
      { text: "Non-invasive, safe preventive care", value: "preventive" }
    ]
  }
];

export default function RebornSkinBanjaraHillsPage() {
  // Mobile Navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selector Widget State
  const [selectedTx, setSelectedTx] = useState('laser-hair');
  const [selectedOpt, setSelectedOpt] = useState('face');
  const [sessionsCount, setSessionsCount] = useState(3);
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
    treatment: 'laser-hair',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // Calculation for treatments selector
  const activeTx = TREATMENT_CATEGORIES[selectedTx] || TREATMENT_CATEGORIES['laser-hair'];
  const activeOpt = activeTx.options.find(o => o.id === selectedOpt) || activeTx.options[0];
  const unitPrice = Math.round(activeTx.basePrice * activeOpt.multiplier);
  const grossSubtotal = unitPrice * sessionsCount;

  // Session Discount Rules
  let discountPercent = 0;
  if (sessionsCount >= 12) discountPercent = 30;
  else if (sessionsCount >= 6) discountPercent = 20;
  else if (sessionsCount >= 3) discountPercent = 10;

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
    const primaryConcern = quizAnswers[0] || 'laser-hair';
    const sensitivity = quizAnswers[1] || 'normal';
    
    let recommendationText = "";
    let recommendedCategory = "laser-hair";

    if (primaryConcern === "laser-hair") {
      recommendedCategory = "laser-hair";
      recommendationText = "Triple Wavelength Painless Laser Hair Reduction is recommended. It is safe for all skin categories, utilizing integrated contact-cooling technology.";
    } else if (primaryConcern === "prp-hair") {
      recommendedCategory = "prp-hair";
      recommendationText = "Autologous PRP Hair Revitalization with Growth-Factor Concentrate (GFC) to stimulate hair bulb nutrient supply and arrest follicular regression.";
    } else {
      recommendedCategory = "chemical-peel";
      if (sensitivity === "sensitive") {
        recommendationText = "Gentle Brightening Glycolic Peels combined with soothing botanical skin-barrier support. Highly recommended for sensitive skin profiles.";
      } else {
        recommendationText = "Clarifying Salicylic Peels or deeper TCA formulations to eliminate dead cellular buildup, balance sebum secretion, and fade stubborn pigmentation.";
      }
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
        id: `REBORN-${Math.floor(100000 + Math.random() * 900000)}`,
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
      treatment: 'laser-hair',
      notes: ''
    });
    setQuoteLocked(false);
    setBookingConfirmation(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2937] selection:bg-[#8B5CF6]/10 font-sans antialiased relative">
      
      {/* Sleek top thin border line */}
      <div className="h-1.5 w-full bg-[#8B5CF6]"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-semibold text-lg sm:text-xl tracking-[0.25em] text-gray-900 uppercase">
              REBORN
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-gray-400 font-bold -mt-0.5">
              Skin & Hair Clinic
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] font-semibold text-gray-600">
            <a href="#about" className="hover:text-[#8B5CF6] transition-colors">About</a>
            <a href="#treatments-widget" className="hover:text-[#8B5CF6] transition-colors">Cost Estimator</a>
            <a href="#assessment" className="hover:text-[#8B5CF6] transition-colors">Skin Quiz</a>
            <a href="#results" className="hover:text-[#8B5CF6] transition-colors">Clinical Cases</a>
            <a href="#reviews" className="hover:text-[#8B5CF6] transition-colors">Reviews</a>
            <a 
              href="#booking-form" 
              className="ml-4 px-6 py-3 rounded-none border border-gray-900 hover:border-[#8B5CF6] text-gray-900 hover:text-white hover:bg-[#8B5CF6] transition-all duration-300 active:scale-95 font-bold"
            >
              Request Booking
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#8B5CF6] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white border-b border-gray-200 px-6 py-6 absolute top-20 left-0 flex flex-col space-y-4 shadow-lg animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#8B5CF6]">About</a>
            <a href="#treatments-widget" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#8B5CF6]">Cost Estimator</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#8B5CF6]">Skin Quiz</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#8B5CF6]">Clinical Cases</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#8B5CF6]">Reviews</a>
            <a 
              href="#booking-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 border border-gray-900 text-gray-900 font-bold uppercase text-xs tracking-wider hover:bg-[#8B5CF6] hover:border-[#8B5CF6] hover:text-white transition-colors"
            >
              Request Booking
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2 border border-[#8B5CF6]/30 px-3 py-1 bg-white text-[11px] font-bold tracking-widest text-[#8B5CF6] w-fit uppercase">
            <Award size={13} />
            <span>Award-Winning Aesthetic Dermatology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight uppercase">
            Precision Dermatological Science. <br />
            <span className="font-extrabold text-[#8B5CF6]">Reborn Confidence.</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Welcome to Reborn Skin & Hair Clinic, Hyderabad's premier destination for advanced laser hair removal, growth-factor trichology (PRP), and customized chemical peels. Guided by board-certified dermatologist Dr. Kakollu Sravani, we integrate world-class USFDA lasers with evidence-based skin restoration protocols.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#booking-form" 
              className="px-8 py-4 bg-gray-900 hover:bg-[#8B5CF6] text-white transition-colors duration-300 font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ChevronRight size={14} />
            </a>
            <a 
              href="#treatments-widget" 
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold uppercase tracking-wider text-xs border border-gray-200 transition-colors text-center flex items-center justify-center"
            >
              <span>Explore Pricing Packages</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white border border-gray-200 p-3 shadow-sm">
            {/* Minimal Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-[1px] bg-[#8B5CF6]"></div>
            <div className="absolute top-0 left-0 w-[1px] h-6 bg-[#8B5CF6]"></div>
            <div className="absolute bottom-0 right-0 w-6 h-[1px] bg-[#8B5CF6]"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-[#8B5CF6]"></div>

            <div className="w-full h-full overflow-hidden relative bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=800" 
                alt="Reborn Skin & Hair Clinic treatment room showing state-of-the-art medical equipment" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 border border-gray-100 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest text-[#8B5CF6] font-bold">Featured Treatment</p>
                <p className="text-xs font-bold text-gray-900 mt-0.5">Triple Wavelength Laser Hair Removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="bg-gray-50 border-y border-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center border-r last:border-none border-gray-200/60 px-2">
            <span className="block text-3xl font-extrabold text-gray-900">12+ Yrs</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Clinical Leadership</span>
          </div>
          <div className="text-center md:border-r last:border-none border-gray-200/60 px-2">
            <span className="block text-3xl font-extrabold text-gray-900">10,000+</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Dermal Procedures</span>
          </div>
          <div className="text-center border-r last:border-none border-gray-200/60 px-2">
            <span className="block text-3xl font-extrabold text-gray-900">100%</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">USFDA Safety Record</span>
          </div>
          <div className="text-center px-2">
            <span className="block text-3xl font-extrabold text-[#8B5CF6]">5.0★</span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Google Patient Rating</span>
          </div>
        </div>
      </section>

      {/* Doctor Bio Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[1/1] bg-white border border-gray-200 p-2 shadow-sm rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Portrait of Dr. Kakollu Sravani, MD (DVL)" 
                className="w-full h-full object-cover rounded-full filter brightness-95"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-[1px] w-10 bg-[#8B5CF6]"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B5CF6]">Lead Dermatologist</span>
            </div>
            
            <h2 className="text-3xl font-light text-gray-900 uppercase">
              Meet <span className="font-extrabold">Dr. Kakollu Sravani</span>
            </h2>
            
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider -mt-4">
              MBBS, MD (DVL) — Chief Aesthetic Dermatologist & Hair Restoration Specialist
            </p>

            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                Dr. Kakollu Sravani is a distinguished dermatologist and trichologist renowned for her clinical expertise and meticulous approach to patient care. Having completed her MBBS and Doctor of Medicine (MD) in Dermatology, Venereology, and Leprosy, she specializes in advanced non-invasive facial aesthetics and follicular science.
              </p>
              <p>
                Under her guidance, Reborn Skin & Hair Clinic has established itself as Hyderabad's signature space for evidence-based treatments. Dr. Sravani ensures that every clinical procedure—whether it is a complex laser hair removal sequence, high-concentration growth factor PRP therapy, or delicate multi-layer chemical peels—is engineered safely to meet individual skin and hair profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-50 text-[#8B5CF6]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Board-Certified Expertise</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Specialized MD in Dermatology and Hair Science</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-50 text-[#8B5CF6]">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Personalized Diagnostics</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Tailored skin protocols for safe, predictable results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Selector Section */}
      <section id="treatments-widget" className="py-20 px-6 bg-gray-50 border-y border-gray-200/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8B5CF6]">Pricing Transparency</span>
            <h2 className="text-3xl font-light text-gray-900 uppercase mt-2">
              Interactive <span className="font-extrabold">Cost Estimator</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Configure your treatment plan below. Lock in premium pricing packages and sync directly to your appointment request.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Selection Column */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  1. Select Clinical Service
                </h3>
                
                {/* Treatment Category Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {Object.keys(TREATMENT_CATEGORIES).map((catId) => (
                    <button
                      key={catId}
                      onClick={() => handleTxChange(catId)}
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider border text-center transition-all ${
                        selectedTx === catId 
                          ? 'border-[#8B5CF6] bg-[#8B5CF6] text-white' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-[#8B5CF6]/50 hover:bg-gray-50'
                      }`}
                    >
                      {TREATMENT_CATEGORIES[catId].name}
                    </button>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 border border-gray-200/50 mb-8">
                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    {activeTx.description}
                  </p>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  2. Select Treatment Area / Peel Formula
                </h3>

                {/* Sub Options selection */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {activeTx.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setSelectedOpt(opt.id); setQuoteLocked(false); }}
                      className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider border text-center transition-all ${
                        selectedOpt === opt.id 
                          ? 'border-gray-900 bg-gray-900 text-white' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  3. Select Session Bundle (Includes Loyalty Discount)
                </h3>

                {/* Sessions Slider */}
                <div className="px-2 mb-4">
                  <div className="flex justify-between text-xs font-bold uppercase text-gray-600 mb-2">
                    <span>Sessions: {sessionsCount}</span>
                    <span className="text-[#8B5CF6]">
                      {discountPercent > 0 ? `-${discountPercent}% Bundle Discount` : 'Single Session'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={sessionsCount}
                    onChange={(e) => { setSessionsCount(parseInt(e.target.value)); setQuoteLocked(false); }}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase mt-2">
                    <span>1 Session</span>
                    <span>3 Sessions (-10%)</span>
                    <span>6 Sessions (-20%)</span>
                    <span>12 Sessions (-30%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Estimate Column */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-gray-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B5CF6]/5 rounded-bl-full pointer-events-none"></div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-100 pb-3 mb-6">
                  Clinical Estimate Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Treatment Category</span>
                    <span className="font-bold text-gray-800">{activeTx.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Selected Detail</span>
                    <span className="font-bold text-gray-800">{activeOpt.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Sessions Selected</span>
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
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Estimated Quote</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-gray-900">₹{estimatedTotal.toLocaleString('en-IN')}</span>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">All Inclusive Pricing</p>
                  </div>
                </div>

                <button
                  onClick={lockQuoteAndScroll}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-widest border transition-all flex items-center justify-center space-x-2 ${
                    quoteLocked 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'bg-[#8B5CF6] border-[#8B5CF6] text-white hover:bg-[#7C3AED] active:scale-[0.98]'
                  }`}
                >
                  {quoteLocked ? (
                    <>
                      <Check size={14} />
                      <span>Quote Locked & Applied</span>
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
        <div className="border border-gray-200 bg-white p-6 sm:p-10 shadow-sm relative">
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#8B5CF6]"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#8B5CF6]"></div>

          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B5CF6]">AI Assisted Diagnostics</span>
            <h2 className="text-2xl font-light text-gray-900 uppercase mt-1">
              Skin & Hair <span className="font-extrabold">Assessment Quiz</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Identify your dermatological requirements in less than 30 seconds for customized treatment recommendations.
            </p>
          </div>

          {!showQuizResult ? (
            <div>
              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-1 mb-8">
                <div 
                  className="bg-[#8B5CF6] h-1 transition-all duration-300"
                  style={{ width: `${((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Question {currentQuizStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <h3 className="text-base font-bold text-gray-800 mt-1">
                  {QUIZ_QUESTIONS[currentQuizStep].question}
                </h3>
              </div>

              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentQuizStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(opt.value)}
                    className="w-full text-left p-4 text-xs font-semibold uppercase tracking-wider border border-gray-200 bg-white hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/5 transition-all text-gray-700"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4 text-[#8B5CF6]">
                <Activity size={24} />
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                  Assessment Diagnosis & Recommendation
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                  Based on your responses:
                </p>
                <div className="p-4 bg-white border border-gray-200 text-xs text-gray-700 leading-relaxed font-medium">
                  {getQuizRecommendation().text}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      const rec = getQuizRecommendation();
                      setForm(prev => ({
                        ...prev,
                        treatment: rec.category,
                        notes: `PRE-QUIZ ASSESSMENT PREFERENCE:\nRecommendation: ${rec.text}`
                      }));
                      const bookingSec = document.getElementById('booking-form');
                      if (bookingSec) {
                        bookingSec.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 py-3 bg-[#8B5CF6] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7C3AED] transition-colors text-center"
                  >
                    Pre-Fill Booking Form
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 border border-gray-300 text-gray-600 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center space-x-2"
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
      <section id="results" className="py-20 px-6 bg-gray-50 border-y border-gray-200/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8B5CF6]">Clinical Evidence</span>
            <h2 className="text-3xl font-light text-gray-900 uppercase mt-2">
              Results <span className="font-extrabold">Showcase</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Real patient case summaries showing actual dermatological parameters and restoration protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border border-gray-200 p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#8B5CF6]/10 text-[#8B5CF6] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4">
                  Laser Hair Removal
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Case #1042: Hirsutism Resolution
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Patient presented with severe facial hair growth due to hormonal imbalance. Treated using triple wavelength cooling laser.
                </p>
                
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mb-4">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Timeline</span>
                    <span className="text-xs font-bold text-gray-700">6 Sessions</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Outcome</span>
                    <span className="text-xs font-bold text-green-600">92% Reduction</span>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinical laser hair treatment details and device laser output" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-gray-200 p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#8B5CF6]/10 text-[#8B5CF6] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4">
                  PRP Hair Therapy
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Case #2091: Male Pattern Alopecia
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Early stage crown thinning stabilized and reversed using growth-factor concentrates (GFC) and micro-needling.
                </p>
                
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mb-4">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Timeline</span>
                    <span className="text-xs font-bold text-gray-700">4 Months</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Density</span>
                    <span className="text-xs font-bold text-green-600">+38% Growth</span>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800" 
                  alt="Microscopic view of hair follicles and clinical diagnostics details" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border border-gray-200 p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#8B5CF6]/10 text-[#8B5CF6] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4">
                  Chemical Peels
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Case #3120: Epidermal Pigmentation
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Patient presented with deep sunspots and melasma. Addressed using sequential Glycolic & Salicylic acid peels.
                </p>
                
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mb-4">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Timeline</span>
                    <span className="text-xs font-bold text-gray-700">5 Sessions</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-semibold">Clearance</span>
                    <span className="text-xs font-bold text-green-600">Significant Brightening</span>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Dermatologist using facial peel applicator on patient skin" 
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
          <span className="text-xs uppercase tracking-widest font-bold text-[#8B5CF6]">Patient Feedback</span>
          <h2 className="text-3xl font-light text-gray-900 uppercase mt-2">
            Clinical <span className="font-extrabold">Reviews</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Read transparent reviews from patients who underwent treatment at our Banjara Hills facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex space-x-1 text-[#8B5CF6] mb-4">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed mb-6">
                "I was skeptical about Laser Hair Removal initially, but Dr. Kakollu Sravani took the time to explain the parameters. The cooling technology made it virtually painless. Highly recommend Reborn!"
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Pooja Reddy</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Laser Hair Removal Patient</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex space-x-1 text-[#8B5CF6] mb-4">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed mb-6">
                "Excellent clinic for hair loss. The GFC PRP therapy has stopped my hair fall completely in just three sessions, and I can see tiny baby hair growing back. The clinic is extremely sterile."
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Vikram K.</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Trichology Patient</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex space-x-1 text-[#8B5CF6] mb-4">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed mb-6">
                "I struggled with dark acne marks on my cheeks. Dr. Sravani prescribed a series of glycolic chemical peels. My skin feels fresh, clear, and glowing. Professional and highly ethical doctor."
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Ananya Sen</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Chemical Peel Patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form Section */}
      <section id="booking-form" className="py-20 px-6 bg-gray-50 border-t border-gray-200/50 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          {!bookingConfirmation ? (
            <div className="bg-white border border-gray-200 p-6 sm:p-10 shadow-xs relative">
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#8B5CF6]"></div>
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#8B5CF6]"></div>

              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B5CF6]">Priority Access</span>
                <h2 className="text-2xl font-light text-gray-900 uppercase mt-1">
                  Book Your <span className="font-extrabold">Appointment</span>
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Submit the consultation request below. We will confirm your slots within 2 hours.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
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
                      placeholder="e.g. Pooja Reddy"
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-none focus:outline-none focus:border-[#8B5CF6] ${
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
                      placeholder="e.g. 9581062000"
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-none focus:outline-none focus:border-[#8B5CF6] ${
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
                      placeholder="e.g. pooja@gmail.com"
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-none focus:outline-none focus:border-[#8B5CF6] ${
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
                      Primary Treatment *
                    </label>
                    <select
                      name="treatment"
                      value={form.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 text-xs font-semibold tracking-wider bg-white rounded-none focus:outline-none focus:border-[#8B5CF6]"
                    >
                      <option value="laser-hair">Laser Hair Removal</option>
                      <option value="prp-hair">PRP Hair Therapy</option>
                      <option value="chemical-peel">Chemical Peels</option>
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
                      className={`w-full px-4 py-3 border text-xs font-semibold tracking-wider rounded-none focus:outline-none focus:border-[#8B5CF6] ${
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
                      className="w-full px-4 py-3 border border-gray-200 text-xs font-semibold tracking-wider bg-white rounded-none focus:outline-none focus:border-[#8B5CF6]"
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
                    Personalized Notes / Locked Price Quote
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="e.g. Any active skin allergies, medication history, or pricing estimates..."
                    className="w-full px-4 py-3 border border-gray-200 text-xs font-semibold tracking-wider rounded-none focus:outline-none focus:border-[#8B5CF6] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gray-900 hover:bg-[#8B5CF6] text-white text-xs font-bold uppercase tracking-widest border border-gray-900 hover:border-[#8B5CF6] transition-all duration-300 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Registering Booking...' : 'Request Confirmed Slot'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 p-6 sm:p-10 shadow-md relative text-center">
              {/* Success confirmation card */}
              <div className="w-16 h-16 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp size={28} />
              </div>

              <h2 className="text-2xl font-light text-gray-900 uppercase mb-2">
                Booking <span className="font-extrabold">Requested!</span>
              </h2>
              
              <div className="inline-block bg-gray-100 text-gray-800 text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-6 border border-gray-200">
                Reference ID: {bookingConfirmation.id}
              </div>

              <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 p-6 text-left space-y-4 mb-8">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Patient Name</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Phone</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.phone}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Date / Slot</span>
                  <span className="font-bold text-gray-800">{bookingConfirmation.date} ({bookingConfirmation.timeSlot.toUpperCase()})</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase tracking-wider font-semibold">Procedure Selected</span>
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

              <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto mb-8">
                A confirmation SMS containing clinic arrival guidelines has been dispatched to your mobile number. Please plan to arrive 10 minutes prior.
              </p>

              <button
                onClick={handleBookingReset}
                className="px-6 py-3 border border-gray-900 text-gray-900 text-xs font-bold uppercase tracking-wider hover:bg-gray-950 hover:text-white transition-colors"
              >
                Register Another Patient
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer / Location Section */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-100 pb-12 mb-8">
          
          {/* Logo & Contact details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-[0.25em] text-gray-900 uppercase">
                REBORN
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase text-gray-400 font-bold -mt-0.5">
                Skin & Hair Clinic
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Hyderabad's premium dermatologist-led aesthetic facility. Specializing in advanced trichology, chemical peels, and laser technologies.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <Phone size={13} className="text-[#8B5CF6]" />
                <span className="font-semibold">+91 9581062000</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <Mail size={13} className="text-[#8B5CF6]" />
                <span className="font-semibold">appointments@rebornskinclinic.com</span>
              </div>
            </div>
          </div>

          {/* Address & Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Clinic Location
            </h4>
            <div className="flex items-start space-x-3 text-xs text-gray-600">
              <MapPin size={15} className="text-[#8B5CF6] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                4th Floor, Brooks Brothers Building,<br />
                Road Number 2, BNR Colony,<br />
                Banjara Hills, Hyderabad,<br />
                Telangana 500034
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Operating Hours
            </h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>Monday - Saturday</span>
                <span className="font-bold">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>Sunday</span>
                <span className="font-bold text-[#8B5CF6]">Closed</span>
              </div>
              <div className="flex justify-between pb-1">
                <span>Emergency Inquiries</span>
                <span className="font-bold text-gray-800">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer and Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
          <p>© 2026 Reborn Skin & Hair Clinic. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 text-center md:text-right">
            Disclaimer: Consultation required. Results may vary between individual patient cases.
          </p>
        </div>
      </footer>

    </div>
  );
}

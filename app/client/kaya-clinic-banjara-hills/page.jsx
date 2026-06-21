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
  User, 
  Mail, 
  Calendar, 
  Award, 
  ShieldCheck, 
  Info,
  Stethoscope,
  Heart,
  ChevronDown
} from 'lucide-react';

export default function KayaClinicBanjaraHillsPage() {
  // Navigation Menu state
  const [activeTab, setActiveTab] = useState('lhr');
  
  // Skin Assessment Questionnaire state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [assessmentResult, setAssessmentResult] = useState(null);

  // Booking Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Laser Hair Reduction',
    date: '',
    slot: 'Morning (10:00 AM - 1:00 PM)',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Treatment Data
  const treatmentsData = {
    lhr: {
      title: 'Laser Hair Reduction',
      tagline: 'Precision laser clearing for permanent smooth skin',
      description: 'Kaya Clinic Banjara Hills offers customized laser hair reduction packages powered by US-FDA approved Nd:YAG and diode laser technologies. Our procedures target dark, coarse hair roots while cooling the surrounding skin to ensure maximum comfort.',
      duration: '30 - 60 Mins',
      downtime: 'No downtime (immediate return to work)',
      sessions: '6 - 8 sessions recommended',
      cost: '₹4,500 onwards per session',
      features: [
        'Advanced skin cooling mechanism for painless sessions',
        'Targeted parameters optimized for dark Indian hair profiles',
        'Performed under strict medical supervision and safety standards',
        'Reduces active razor bumps, ingrown hairs, and shadow texture'
      ]
    },
    scar: {
      title: 'Acne Scar Treatment',
      tagline: 'Scientific skin resurfacing for smooth skin textures',
      description: 'Our clinic uses state-of-the-art MNRF (Microneedling Radiofrequency) and fractional laser technologies to restore scarred tissue. Under Dr. Samatha Nuthalapati, our customized plans work to break fibrous scar tissue and stimulate deep collagen production.',
      duration: '45 - 60 Mins',
      downtime: '2 days (minor redness and swelling)',
      sessions: '4 - 6 sessions recommended',
      cost: '₹6,000 onwards per session',
      features: [
        'Visible improvement in rolling, boxcar, and deep pitted scars',
        'Simultaneously improves skin elasticity and pore size',
        'Safe, controlled micro-injuries to accelerate cell renewal',
        'Post-session soothing repair packs included'
      ]
    },
    peels: {
      title: 'Chemical Peels',
      tagline: 'Exfoliate dead layers for instant glow and texture clearance',
      description: 'We utilize customized, medical-grade chemical peels (Glycolic, Salicylic, and Mandelic) to address superficial pigmentation, mild acne congestion, and dullness. Peels safely dissolve cellular bonds to shed the damaged outer layer.',
      duration: '30 Mins',
      downtime: 'Zero downtime (mild dry sensation for 24 hours)',
      sessions: '3 - 5 sessions recommended',
      cost: '₹3,500 onwards per session',
      features: [
        'Unclogs pores and minimizes active blackhead formation',
        'Lightens superficial sun tan, blemishes, and acne marks',
        'Stimulates rapid cell turnover for a fresh, luminous look',
        'Lunchtime procedure with immediate visual glow'
      ]
    }
  };

  // Questionnaire Data
  const questions = [
    {
      id: 1,
      text: 'Select your primary skin or hair aesthetic goal:',
      options: [
        { label: 'Remove unwanted hair permanently', value: 'hair', nextAction: 'lhr' },
        { label: 'Flatten deep acne scars and craters', value: 'scars', nextAction: 'scar' },
        { label: 'Clear mild acne, whiteheads, or congestion', value: 'acne', nextAction: 'peels' },
        { label: 'Lighten sun spots and dark patches', value: 'pigment', nextAction: 'peels' }
      ]
    },
    {
      id: 2,
      text: 'How would you classify your skin sensitivity?',
      options: [
        { label: 'Normal skin (rarely reacts to new cosmetics)', value: 'normal' },
        { label: 'Oily & breakout-prone skin', value: 'oily' },
        { label: 'Highly reactive skin (gets red, itchy, or dry easily)', value: 'sensitive' },
        { label: 'Dry and flaking skin', value: 'dry' }
      ]
    },
    {
      id: 3,
      text: 'What is your timeline for expecting visible results?',
      options: [
        { label: 'Immediate glow before an event (within a week)', value: 'immediate' },
        { label: 'Gradual, long-term clinical correction (3-6 months)', value: 'gradual' },
        { label: 'Not sure, looking for expert guidance first', value: 'guidance' }
      ]
    }
  ];

  const handleAnswerSelect = (qId, option) => {
    const updatedAnswers = { ...answers, [qId]: option };
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate Recommendation based on Q1
      const primaryConcern = updatedAnswers[1];
      let recommendation = treatmentsData.lhr;
      let treatmentKey = 'Laser Hair Reduction';

      if (primaryConcern.nextAction === 'scar') {
        recommendation = treatmentsData.scar;
        treatmentKey = 'Acne Scar Treatment';
      } else if (primaryConcern.nextAction === 'peels') {
        recommendation = treatmentsData.peels;
        treatmentKey = 'Chemical Peels';
      }

      setAssessmentResult({
        treatmentName: treatmentKey,
        tagline: recommendation.tagline,
        explanation: `Based on your choices, our clinic recommends ${recommendation.title}. Dr. Samatha Nuthalapati will configure the clinical settings based on your skin type (${updatedAnswers[2]?.value || 'standard'}) during your consultation.`,
        downtime: recommendation.downtime,
        sessions: recommendation.sessions,
        price: recommendation.cost
      });
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setAssessmentResult(null);
  };

  const prefillBookingForm = () => {
    if (assessmentResult) {
      setForm(prev => ({
        ...prev,
        treatment: assessmentResult.treatmentName
      }));
      const element = document.getElementById('booking-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Form validation
  const validateForm = () => {
    let err = {};
    if (!form.name.trim()) {
      err.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      err.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      err.phone = 'Phone number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        err.phone = 'Enter a valid 10-digit Indian phone number';
      }
    }

    if (!form.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      err.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        err.date = 'Appointment date cannot be in the past';
      }
    }

    if (!form.consent) {
      err.consent = 'You must accept communication consent';
    }

    return err;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess({
        bookingId: `KAY-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1200);
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      {/* Font Styling for Inter & Plus Jakarta Sans */}
      <style>{`
        .font-inter { font-family: var(--font-inter), sans-serif; }
        .font-jakarta { font-family: var(--font-plus-jakarta), sans-serif; }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 px-6 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
            <Stethoscope className="text-[#10B981] w-5 h-5" />
          </div>
          <div>
            <span className="font-jakarta text-xl font-extrabold tracking-tight text-slate-900">
              KAYA <span className="text-[#10B981]">CLINIC</span>
            </span>
            <span className="block text-[8px] tracking-[0.2em] uppercase font-bold text-slate-400 font-inter">
              Advanced Clinical Skin Care
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider font-inter text-slate-600">
          <a href="#dermatologist" className="hover:text-[#10B981] transition-colors">Dermatologist</a>
          <a href="#services" className="hover:text-[#10B981] transition-colors">Services</a>
          <a href="#quiz" className="hover:text-[#10B981] transition-colors">Skin Quiz</a>
          <a href="#studies" className="hover:text-[#10B981] transition-colors">Case Log</a>
        </nav>

        <div>
          <a 
            href="tel:+918657569378" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10B981] hover:bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider transition-all font-inter shadow-sm"
          >
            <Phone size={12} className="shrink-0" />
            <span>+91 8657569378</span>
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[10px] uppercase font-bold tracking-wider font-inter w-fit">
              <ShieldCheck size={12} />
              <span>US-FDA Approved Skin Tech</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-jakarta font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              Clinical expertise. <br />
              <span className="text-[#10B981]">Scientific precision.</span>
            </h1>

            <p className="text-sm lg:text-base text-slate-500 leading-relaxed max-w-xl font-inter">
              Get scientifically proven dermatological treatments in Banjara Hills under lead doctor <strong>Dr. Samatha Nuthalapati</strong>. We customize every laser and peel treatment to target deep dermal issues, delivering visible, medical-grade results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3 font-inter">
              <a 
                href="#quiz" 
                className="inline-flex justify-center items-center px-7 py-3.5 bg-[#10B981] hover:bg-[#0D9488] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md shadow-[#10B981]/25 active:scale-95"
              >
                Assess Your Skin
                <ChevronRight size={14} className="ml-2" />
              </a>

              <a 
                href="#booking-form" 
                className="inline-flex justify-center items-center px-7 py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-widest rounded-lg transition-all active:scale-95"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] p-2 border border-slate-100 rounded-2xl bg-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800" 
                alt="Kaya Clinic Modern Treatment Room" 
                className="rounded-xl w-full object-cover aspect-[4/3] border border-slate-200/50 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-8 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-inter">
          {[
            { value: '150,000+', label: 'Clinical Treatments' },
            { value: '99.2%', label: 'Safety Rating' },
            { value: 'Dr. Samatha', label: 'Lead MD Dermatologist' },
            { value: 'FDA', label: 'Cleared Tech Standard' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 py-1 border-r border-slate-200 last:border-0">
              <span className="text-xl lg:text-3xl font-jakarta font-extrabold text-slate-900">{stat.value}</span>
              <span className="text-[10px] lg:text-xs uppercase tracking-wider text-slate-400 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Doctor Bio Section */}
      <section id="dermatologist" className="py-16 lg:py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#10B981]/5 border border-[#10B981]/20 rounded-2xl translate-x-3 translate-y-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Samatha Nuthalapati - Lead Dermatologist" 
                className="rounded-2xl object-cover w-full max-w-[360px] aspect-[4/5] shadow-sm border border-slate-200"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 text-left font-inter">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] uppercase tracking-wider">
              <Stethoscope size={16} />
              <span>Certified Expert Consultation</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-jakarta font-extrabold text-slate-900 leading-tight">
              Dr. Samatha Nuthalapati <br />
              <span className="text-lg font-normal text-slate-400 block mt-1">MBBS, MD (DVL) — Lead Dermatologist</span>
            </h2>

            <div className="w-16 h-1 bg-[#10B981] rounded-full"></div>

            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed">
              Dr. Samatha Nuthalapati is a highly accomplished medical and cosmetic dermatologist in Banjara Hills, Hyderabad. She specializes in clinical laser systems, deep chemical peeling, and complex skin scar revisions, holding certification from premium medical institutions.
            </p>

            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed">
              Dr. Samatha oversees all clinical staff at Kaya Banjara Hills, ensuring that medical parameters are calculated dynamically for every patient's skin profile to prevent irritation and maximize overall procedure safety.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <Check size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">MD (DVL) Qualified</h4>
                  <p className="text-[10px] text-slate-400">Advanced Dermatological Certifications</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <Check size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Clinical Focus</h4>
                  <p className="text-[10px] text-slate-400">Safe, High-precision Laser Protocols</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments Selector Section */}
      <section id="services" className="py-16 lg:py-24 px-6 lg:px-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] font-inter block mb-2">
              Clinical Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-jakarta font-extrabold text-slate-900">
              Targeted Treatment Selector
            </h2>
            <div className="w-12 h-1 bg-[#10B981] mx-auto mt-3 rounded-full"></div>
            <p className="text-xs text-slate-400 font-inter mt-3">
              Click on a procedure below to explore dynamic clinical specifications and starting options.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start font-inter">
            {/* Selector tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {[
                { id: 'lhr', label: 'Laser Hair Reduction' },
                { id: 'scar', label: 'Acne Scar Treatment' },
                { id: 'peels', label: 'Chemical Peels' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full p-4 rounded-lg text-left font-bold text-xs uppercase tracking-wider transition-all border ${
                    activeTab === tab.id 
                      ? 'bg-white border-[#10B981] text-[#10B981] shadow-sm' 
                      : 'bg-transparent border-transparent text-slate-500 hover:bg-white/40'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{tab.label}</span>
                    <ChevronRight size={14} className={activeTab === tab.id ? 'text-[#10B981]' : 'text-transparent'} />
                  </div>
                </button>
              ))}
            </div>

            {/* Selector content */}
            <div className="lg:col-span-8 p-6 lg:p-8 bg-white border border-slate-100 rounded-xl shadow-sm">
              <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest">
                {treatmentsData[activeTab].tagline}
              </span>
              <h3 className="text-2xl font-jakarta font-extrabold text-slate-900 mt-2 mb-4">
                {treatmentsData[activeTab].title}
              </h3>
              <p className="text-xs lg:text-sm text-slate-500 leading-relaxed mb-6">
                {treatmentsData[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">Procedure Time</span>
                  <span className="text-xs font-bold text-slate-900">{treatmentsData[activeTab].duration}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">Typical Downtime</span>
                  <span className="text-xs font-bold text-slate-900">{treatmentsData[activeTab].downtime}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">Sessions Required</span>
                  <span className="text-xs font-bold text-slate-900">{treatmentsData[activeTab].sessions}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-left">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Scientific Protocol</h4>
                <ul className="space-y-2">
                  {treatmentsData[activeTab].features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-500">
                      <Check size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Starting Price</span>
                  <p className="text-md font-extrabold text-slate-900">{treatmentsData[activeTab].cost}</p>
                </div>
                <a 
                  href="#booking-form" 
                  onClick={() => setForm(prev => ({ ...prev, treatment: treatmentsData[activeTab].title }))}
                  className="px-6 py-2.5 bg-[#10B981] hover:bg-[#0D9488] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all"
                >
                  Book Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire Section */}
      <section id="quiz" className="py-16 lg:py-24 px-6 lg:px-16 max-w-4xl mx-auto text-center font-inter">
        <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
          Diagnostic System
        </span>
        <h2 className="text-3xl lg:text-4xl font-jakarta font-extrabold text-slate-900">
          Skin Profiling Assessment
        </h2>
        <div className="w-12 h-1 bg-[#10B981] mx-auto mt-3 rounded-full mb-8"></div>

        <div className="p-6 lg:p-10 rounded-xl bg-white border border-slate-100 shadow-sm">
          {!assessmentResult ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Progress: {currentQuestion + 1} / {questions.length}</span>
                <div className="flex gap-1.5">
                  {questions.map((_, idx) => (
                    <div key={idx} className={`w-6 h-1 rounded-full ${idx <= currentQuestion ? 'bg-[#10B981]' : 'bg-slate-100'}`}></div>
                  ))}
                </div>
              </div>

              <h3 className="text-md lg:text-lg font-bold text-slate-900 mb-6 leading-snug">
                {questions[currentQuestion].text}
              </h3>

              <div className="flex flex-col gap-3 max-w-md mx-auto">
                {questions[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(questions[currentQuestion].id, opt)}
                    className="p-3.5 rounded-lg border border-slate-200 hover:border-[#10B981] hover:bg-[#10B981]/5 transition-all text-xs font-semibold text-slate-600 text-left"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mx-auto text-[#10B981]">
                <Sparkles size={24} />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400">Identified Therapy Path</span>
                <h3 className="text-xl lg:text-2xl font-jakarta font-extrabold text-slate-900">{assessmentResult.treatmentName}</h3>
                <p className="text-xs text-slate-500 italic">{assessmentResult.tagline}</p>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto bg-slate-50 p-4 rounded-lg border border-slate-100">
                {assessmentResult.explanation}
              </p>

              <div className="flex justify-center gap-6 text-xs max-w-md mx-auto pt-2 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-[9px] text-slate-400 uppercase font-bold">Sessions</span>
                  <span className="font-bold text-slate-900">{assessmentResult.sessions}</span>
                </div>
                <div className="border-l border-slate-100 h-8"></div>
                <div>
                  <span className="block text-[9px] text-slate-400 uppercase font-bold">Downtime</span>
                  <span className="font-bold text-slate-900">{assessmentResult.downtime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <button
                  onClick={prefillBookingForm}
                  className="px-8 py-3.5 bg-[#10B981] hover:bg-[#0D9488] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md"
                >
                  Prefill Booking Form
                </button>
                <button
                  onClick={resetAssessment}
                  className="px-6 py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-widest rounded-lg transition-all"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Results Showcase (Mock Case Studies) Section */}
      <section id="studies" className="py-16 lg:py-24 px-6 lg:px-16 bg-slate-50 border-t border-slate-100 font-inter">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Clinical Logbook
            </span>
            <h2 className="text-3xl lg:text-4xl font-jakarta font-extrabold text-slate-900">
              Mock Case Studies
            </h2>
            <div className="w-12 h-1 bg-[#10B981] mx-auto mt-3 rounded-full"></div>
            <p className="text-xs text-slate-400 mt-3">
              Verifiable case reports representing skin and hair improvements monitored at Kaya Clinic Banjara Hills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Laser Hair Reduction',
                patient: '29-Year-Old Female',
                concern: 'Heavy hair growth on forearms and full legs',
                result: '98% permanent clearance, reduced ingrown bumps',
                sessions: '6 Sessions completed',
                image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Acne Scar Subcision',
                patient: '33-Year-Old Male',
                concern: 'Moderate deep rolling acne scars on cheeks',
                result: '80% improvement in facial skin plane flatness',
                sessions: '4 MNRF treatments',
                image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Chemical Glow Peels',
                patient: '24-Year-Old Female',
                concern: 'Superficial acne marks, pigmentation, and blackheads',
                result: '90% clearance of dull cells, radiant facial glow',
                sessions: '3 Glycolic peel sessions',
                image: 'https://images.unsplash.com/photo-1522337060762-d41222625470?auto=format&fit=crop&q=80&w=800'
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full object-cover aspect-[4/3] border-b border-slate-100"
                />
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-3 text-left">
                    <span className="text-[9px] uppercase font-bold text-[#10B981] tracking-widest">{study.title}</span>
                    <h3 className="text-md font-jakarta font-bold text-slate-900">{study.patient}</h3>
                    <div className="w-8 h-1 bg-[#10B981]/50 rounded-full"></div>
                    
                    <p className="text-[11px] text-slate-500">
                      <strong className="text-slate-800 font-bold">Skin Concern:</strong> {study.concern}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      <strong className="text-slate-800 font-bold">Aesthetic Result:</strong> {study.result}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase text-slate-600">
                    <span>Clinical Log</span>
                    <span className="text-[#10B981]">{study.sessions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Patient Feedback
          </span>
          <h2 className="text-3xl lg:text-4xl font-jakarta font-extrabold text-slate-900">
            Kaya Clinic Reviews
          </h2>
          <div className="w-12 h-1 bg-[#10B981] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priyanjali Sen',
              area: 'Banjara Hills',
              treatment: 'Chemical Peels',
              text: 'The chemical peeling sessions at Kaya Banjara Hills worked wonders for my stubborn acne scars and skin dullness. Dr. Samatha explained every step clearly and recommended the perfect home-care protocol.'
            },
            {
              name: 'Karthik G.',
              area: 'Jubilee Hills',
              treatment: 'Laser Hair Reduction',
              text: 'Extremely professional laser hair reduction service. Clean clinical setup, painless technology, and the staff is highly certified. I noticed major density reduction after only 3 sessions.'
            },
            {
              name: 'Meera Nair',
              area: 'Madhapur',
              treatment: 'Acne Scar Treatment',
              text: 'Very satisfied with my acne scar revision MNRF treatment. Dr. Samatha adjusted the clinical settings carefully to suit my skin. The scars are flatter and skin texture is significantly improved.'
            }
          ].map((rev, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm text-left flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#10B981]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-[9px] text-slate-400">{rev.area}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/20 text-[9px] font-bold text-[#10B981] uppercase tracking-wide">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Appointment Booking Form Section */}
      <section id="booking-form" className="py-16 lg:py-24 px-6 lg:px-16 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center font-inter">
          <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Online Booking
          </span>
          <h2 className="text-3xl lg:text-4xl font-jakarta font-extrabold text-slate-900">
            Book Clinic Appointment
          </h2>
          <div className="w-12 h-1 bg-[#10B981] mx-auto mt-3 rounded-full mb-4"></div>
          <p className="text-xs text-slate-400 max-w-md mx-auto mb-10">
            Schedule a physical consultation with Dr. Samatha Nuthalapati. Enter your details below.
          </p>

          {bookingSuccess ? (
            <div className="p-8 bg-white border-2 border-[#10B981] rounded-xl shadow-lg space-y-6 text-left max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mx-auto">
                <Check size={24} />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-jakarta font-extrabold text-slate-900 font-bold">Booking Request Submitted</h3>
                <p className="text-xs text-slate-400">Booking Reference ID: <span className="font-bold text-[#10B981]">{bookingSuccess.bookingId}</span></p>
              </div>

              <div className="space-y-2 border-y border-slate-100 py-4 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Patient Name:</span> <span className="font-bold text-slate-800">{bookingSuccess.name}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Phone Number:</span> <span className="font-bold text-slate-800">{bookingSuccess.phone}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Email Address:</span> <span className="font-bold text-slate-800">{bookingSuccess.email}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Clinical Service:</span> <span className="font-bold text-slate-800">{bookingSuccess.treatment}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Date & Slot:</span> <span className="font-bold text-slate-800">{bookingSuccess.date} ({bookingSuccess.slot})</span></div>
              </div>

              <p className="text-[10px] text-center text-slate-400 leading-relaxed">
                Our front desk coordinator will contact you at <span className="font-bold text-slate-700">{bookingSuccess.phone}</span> within 2 hours to confirm the final slot timing.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setBookingSuccess(null)}
                  className="px-6 py-2.5 bg-[#10B981] hover:bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  Book New Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="p-6 lg:p-10 bg-white border border-slate-200/60 rounded-xl shadow-sm text-left space-y-6 max-w-xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User size={14} />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. Priyanjali Sen"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-[#10B981] transition-all"
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone size={14} />
                    </div>
                    <input
                      type="tel"
                      placeholder="e.g. 9865756937"
                      value={form.phone}
                      onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-[#10B981] transition-all"
                    />
                  </div>
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail size={14} />
                    </div>
                    <input
                      type="email"
                      placeholder="patient@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-[#10B981] transition-all"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.email}</span>}
                </div>

                {/* Treatment Select */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Select Procedure</label>
                  <select
                    value={form.treatment}
                    onChange={(e) => setForm(prev => ({ ...prev, treatment: e.target.value }))}
                    className="w-full px-3 py-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#10B981] transition-all appearance-none"
                  >
                    <option>Laser Hair Reduction</option>
                    <option>Acne Scar Treatment</option>
                    <option>Chemical Peels</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Date */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Appointment Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar size={14} />
                    </div>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#10B981] transition-all"
                    />
                  </div>
                  {errors.date && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.date}</span>}
                </div>

                {/* Slot */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Preferred Slot</label>
                  <select
                    value={form.slot}
                    onChange={(e) => setForm(prev => ({ ...prev, slot: e.target.value }))}
                    className="w-full px-3 py-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#10B981] transition-all appearance-none"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 4:00 PM)</option>
                    <option>Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm(prev => ({ ...prev, consent: e.target.checked }))}
                    className="w-4 h-4 rounded border-slate-300 text-[#10B981] focus:ring-[#10B981] mt-0.5"
                  />
                  <span className="text-[10px] text-slate-400 leading-relaxed">
                    I consent to receive clinic appointment confirmation and home care tips from Kaya Clinic via SMS and WhatsApp.
                  </span>
                </label>
                {errors.consent && <span className="text-[10px] text-red-500 font-semibold block">{errors.consent}</span>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#10B981] hover:bg-[#0D9488] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Verifying Details...' : 'Request Slot Confirmation'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 9. Location/Hours Footer Section */}
      <footer className="bg-slate-50 border-t border-slate-100 py-16 px-6 lg:px-16 font-inter">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {/* Clinic Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                <Stethoscope className="text-[#10B981] w-4 h-4" />
              </div>
              <span className="font-jakarta font-extrabold text-slate-900">KAYA CLINIC</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Advanced dermatology and medical-grade skin aesthetics in Banjara Hills, Hyderabad. Powered by world-class safety protocols.
            </p>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Lead Doctor: Dr. Samatha Nuthalapati (MBBS, MD (DVL))
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-xs text-slate-500">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider font-jakarta">Clinic Address</h4>
            
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-[#10B981] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Municipal No. 6/3, Le Benaka, Opposite GIVA Silver & Gold Jewellery, Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#10B981] shrink-0" />
              <span>+91 8657569378</span>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4 text-xs text-slate-500">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider font-jakarta">Clinic Timings</h4>
            
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-[#10B981] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="flex justify-between gap-6"><span>Monday - Saturday:</span> <span className="font-bold text-slate-900">10:00 AM - 08:00 PM</span></div>
                <div className="flex justify-between gap-6"><span>Sunday:</span> <span className="font-bold text-slate-900">10:00 AM - 04:00 PM</span></div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200/60 text-[10px] text-slate-400">
              <Info size={14} className="text-[#10B981] shrink-0 mt-0.5" />
              <span>Please book in advance to secure your slot with Dr. Samatha Nuthalapati.</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 gap-4">
          <span>&copy; {new Date().getFullYear()} Kaya Clinic Banjara Hills. All Rights Reserved.</span>
          <span>Clean Medical Mint Clinical System.</span>
        </div>
      </footer>
    </div>
  );
}

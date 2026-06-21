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

export default function OlivaClinicBanjaraHillsPage() {
  // Navigation Menu state (for responsive toggle if needed, though simple anchor navigation works best)
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
      tagline: 'Permanent, painless reduction for silk-smooth skin',
      description: 'Oliva uses advanced US-FDA approved Nd:YAG and Soprano Ice lasers optimized for Indian skin tones. Our triple-wavelength technology target hair follicles at different depths, ensuring maximum efficiency with minimal discomfort.',
      duration: '45 - 90 Mins',
      downtime: 'Zero downtime (mild redness resolves in 2 hours)',
      sessions: '6 - 8 sessions recommended',
      cost: '₹4,999 onwards per session',
      features: [
        'Virtually painless cooling tip technology',
        'Customized parameters based on melanin levels',
        'Performed by certified clinical therapists under dermatologist supervision',
        'Reduces ingrown hairs and strawberry skin texture'
      ]
    },
    scar: {
      title: 'Acne Scar Treatment',
      tagline: 'Smooth out deep pits and restore uniform skin plane',
      description: 'We combine Pixel Fractional CO2 Lasures, Microneedling Radiofrequency (MNRF), and subcision to remodel deep scar tissues. Dr. Chadalavada Pragathi curates a layered protocol that triggers natural collagen production.',
      duration: '60 Mins',
      downtime: '2 - 3 days of mild flaking and redness',
      sessions: '4 - 6 sessions recommended',
      cost: '₹6,500 onwards per session',
      features: [
        'Visible improvement in deep icepick and boxcar scars',
        'Simultaneously refines large pores and skin elasticity',
        'Minimal post-inflammatory hyperpigmentation (PIH) risk',
        'Complementary PRP (Platelet Rich Plasma) for accelerated healing'
      ]
    },
    pigment: {
      title: 'Pigmentation Treatment',
      tagline: 'Eradicate melasma, sun spots, and stubborn tanning',
      description: 'Our Q-Switched Nd:YAG laser treatments target deep dermal and epidermal pigmentation safely. By shattering pigment clusters into tiny micro-particles, your body naturally eliminates them over time, revealing an even skin tone.',
      duration: '30 - 45 Mins',
      downtime: 'Zero downtime (immediate skin glow)',
      sessions: '5 - 7 sessions recommended',
      cost: '₹5,500 onwards per session',
      features: [
        'Highly targeted treatment leaving surrounding tissue unaffected',
        'Effectively reduces stubborn hormonal melasma and dark spots',
        'Promotes collagen synthesis for brighter, rejuvenated skin',
        'Includes advanced clinical peeling sessions for superficial glow'
      ]
    }
  };

  // Questionnaire Data
  const questions = [
    {
      id: 1,
      text: 'What is your primary skin or hair concern today?',
      options: [
        { label: 'Unwanted facial or body hair', value: 'hair', nextAction: 'lhr' },
        { label: 'Deep pitted acne scars or large pores', value: 'scars', nextAction: 'scar' },
        { label: 'Dark spots, melasma, or uneven skin tone', value: 'pigment', nextAction: 'pigment' },
        { label: 'General skin dullness and fine lines', value: 'dullness', nextAction: 'pigment' }
      ]
    },
    {
      id: 2,
      text: 'How does your skin react to direct sun exposure?',
      options: [
        { label: 'Burns easily, rarely tans', value: 'sensitive' },
        { label: 'Tans heavily, rarely burns', value: 'melanin-rich' },
        { label: 'Sometimes burns, sometimes tans', value: 'normal' },
        { label: 'Highly sensitive, gets red or inflamed quickly', value: 'hyper-sensitive' }
      ]
    },
    {
      id: 3,
      text: 'Have you undergone any professional laser or chemical treatments before?',
      options: [
        { label: 'Yes, with great results', value: 'prev-yes-good' },
        { label: 'Yes, but experienced irritation/redness', value: 'prev-yes-irritation' },
        { label: 'No, this would be my first clinical procedure', value: 'prev-no' }
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
      } else if (primaryConcern.nextAction === 'pigment') {
        recommendation = treatmentsData.pigment;
        treatmentKey = 'Pigmentation Treatment';
      }

      setAssessmentResult({
        treatmentName: treatmentKey,
        tagline: recommendation.tagline,
        explanation: `Based on your skin profile, our recommendation is ${recommendation.title}. Dr. Chadalavada Pragathi will customize the settings based on your skin reaction parameter (${updatedAnswers[2]?.value || 'standard'}).`,
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
      // Scroll to booking form
      const element = document.getElementById('appointment-booking');
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
      err.consent = 'You must consent to receive communication updates';
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
        bookingId: `OLV-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1200);
  };

  return (
    <div className="font-sans antialiased text-[#2C2520] bg-[#FDFBF7]">
      {/* Styles for playfair and jakarta font variables */}
      <style>{`
        .font-playfair { font-family: var(--font-playfair), serif; }
        .font-jakarta { font-family: var(--font-plus-jakarta), sans-serif; }
      `}</style>

      {/* Top bar header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EADFC9]/50 py-4 px-6 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#FAF5EB]">
            <Sparkles className="text-[#D4AF37] w-5 h-5" />
          </div>
          <div>
            <span className="font-playfair text-xl lg:text-2xl font-bold tracking-wide text-[#4A3E29]">
              OLIVA
            </span>
            <span className="block text-[7px] tracking-[0.25em] uppercase font-bold text-[#8C7652] font-jakarta">
              Skin & Hair Clinic
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider font-jakarta text-[#6E5D42]">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">Dermatologist</a>
          <a href="#treatments" className="hover:text-[#D4AF37] transition-colors">Treatments</a>
          <a href="#assessment" className="hover:text-[#D4AF37] transition-colors">Skin Quiz</a>
          <a href="#results" className="hover:text-[#D4AF37] transition-colors">Case Studies</a>
        </nav>

        <div>
          <a 
            href="tel:+918977755473" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#4A3E29] bg-[#FAF5EB] hover:bg-[#D4AF37] hover:text-white transition-all font-jakarta shadow-sm"
          >
            <Phone size={12} className="text-[#D4AF37] hover:text-white shrink-0" />
            <span>+91 8977755473</span>
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-16 overflow-hidden border-b border-[#EADFC9]/30">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#FAF5EB] opacity-60 filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#EADFC9]/20 opacity-50 filter blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] border border-[#EADFC9] text-[#8C7652] text-[10px] uppercase font-bold tracking-wider font-jakarta w-fit">
              <Award size={12} className="text-[#D4AF37]" />
              <span>Banjara Hills Premier Aesthetic Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-medium leading-[1.1] text-[#4A3E29] tracking-tight">
              Science-backed skin therapies, <br />
              <span className="italic font-normal text-[#D4AF37]">tailored for your unique tone.</span>
            </h1>

            <p className="text-sm lg:text-base text-[#6E5D42] leading-relaxed max-w-xl font-jakarta">
              Experience the pinnacle of clinical luxury in Hyderabad. Led by renowned dermatologist <strong>Dr. Chadalavada Pragathi</strong>, Oliva Clinic offers bespoke, FDA-approved laser and aesthetic procedures to reveal your skin’s inherent glow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3 font-jakarta">
              <a 
                href="#assessment" 
                className="inline-flex justify-center items-center px-7 py-3.5 bg-[#D4AF37] hover:bg-[#C29F2F] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95"
              >
                Take Free Skin Quiz
                <ChevronRight size={14} className="ml-2" />
              </a>

              <a 
                href="#appointment-booking" 
                className="inline-flex justify-center items-center px-7 py-3.5 bg-[#FAF5EB] hover:bg-[#EADFC9]/30 border border-[#D4AF37] text-[#4A3E29] font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] p-2 border border-[#EADFC9] rounded-[2.5rem] bg-[#FAF5EB]/50">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Oliva Skin & Hair Clinic Interior" 
                className="rounded-[2rem] w-full object-cover aspect-[4/3] shadow-md border border-[#EADFC9]/60"
              />
              <div className="absolute -bottom-6 -left-6 bg-white border border-[#EADFC9] p-4 rounded-2xl shadow-lg max-w-[200px] hidden sm:block">
                <p className="text-[10px] uppercase font-bold text-[#8C7652] tracking-wider font-jakarta">US-FDA Standard</p>
                <p className="text-xs font-bold text-[#4A3E29] font-playfair mt-1">100% Non-Invasive Clinical Laser Safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar Section */}
      <section className="bg-[#FAF5EB] border-y border-[#EADFC9]/40 py-8 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-jakarta">
          {[
            { value: '100,000+', label: 'Happy Clients' },
            { value: '98.7%', label: 'Clinical Satisfaction' },
            { value: 'Dr. Pragathi', label: 'Lead MD Dermatologist' },
            { value: 'US-FDA', label: 'Gold Standard Technology' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 py-2 border-r border-[#EADFC9]/30 last:border-0">
              <span className="text-xl lg:text-3xl font-playfair font-bold text-[#4A3E29]">{stat.value}</span>
              <span className="text-[10px] lg:text-xs uppercase tracking-wider text-[#8C7652] font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Doctor Bio Section */}
      <section id="about" className="py-16 lg:py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-3xl translate-x-3 translate-y-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Chadalavada Pragathi - Lead Dermatologist" 
                className="rounded-3xl object-cover w-full max-w-[360px] aspect-[4/5] shadow-lg border border-[#EADFC9]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-jakarta">
              <Stethoscope size={16} />
              <span>Meet Our Expert Dermatologist</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-[#4A3E29] leading-tight">
              Dr. Chadalavada Pragathi <br />
              <span className="text-lg font-jakarta font-medium text-[#8C7652] block mt-1">MBBS, MD (DVL) — Lead Dermatologist</span>
            </h2>

            <div className="w-16 h-0.5 bg-[#D4AF37] rounded-full"></div>

            <p className="text-xs lg:text-sm text-[#6E5D42] leading-relaxed font-jakarta">
              Dr. Chadalavada Pragathi is a board-certified dermatologist and aesthetic medicine specialist in Banjara Hills, Hyderabad. Holding prestigious medical titles, she has dedicated over a decade to resolving complex skin concerns, including stubborn hormonal pigmentation, post-acne scarring, and cosmetic skin tightening.
            </p>

            <p className="text-xs lg:text-sm text-[#6E5D42] leading-relaxed font-jakarta">
              Under her supervision, each patient undergoes a careful digital skin mapping assessment. She firmly believes in medical precision combined with a bespoke aesthetic touch—ensuring all laser parameters are precisely set for maximum safety and radiant clinical outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2 font-jakarta">
              <div className="flex items-start gap-3 p-3 bg-white border border-[#EADFC9]/50 rounded-xl">
                <Check size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#4A3E29]">Board Certified</h4>
                  <p className="text-[10px] text-[#8C7652]">MD in Dermatology, Venereology & Leprosy</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-[#EADFC9]/50 rounded-xl">
                <Check size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#4A3E29]">Aesthetic Precision</h4>
                  <p className="text-[10px] text-[#8C7652]">Specialist in FDA-approved Laser Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments Selector Section */}
      <section id="treatments" className="py-16 lg:py-24 px-6 lg:px-16 bg-[#FAF5EB]/50 border-y border-[#EADFC9]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] font-jakarta block mb-2">
              Bespoke Procedures
            </span>
            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-[#4A3E29]">
              Signature Clinical Solutions
            </h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
            <p className="text-xs text-[#8C7652] font-jakarta mt-3">
              Explore our core dermatologist-led treatments, featuring dynamic parameters matching Indian skin textures.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Treatment Selector Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-jakarta">
              {[
                { id: 'lhr', label: 'Laser Hair Reduction' },
                { id: 'scar', label: 'Acne Scar Treatment' },
                { id: 'pigment', label: 'Pigmentation Treatment' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full p-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider transition-all border ${
                    activeTab === tab.id 
                      ? 'bg-white border-[#D4AF37] text-[#4A3E29] shadow-sm' 
                      : 'bg-[#FAF5EB]/80 border-transparent text-[#8C7652] hover:bg-white/60'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{tab.label}</span>
                    <ChevronRight size={14} className={activeTab === tab.id ? 'text-[#D4AF37]' : 'text-transparent'} />
                  </div>
                </button>
              ))}
            </div>

            {/* Treatment Content Panel */}
            <div className="lg:col-span-8 p-6 lg:p-8 bg-white border border-[#EADFC9]/50 rounded-2xl shadow-sm font-jakarta">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                {treatmentsData[activeTab].tagline}
              </span>
              <h3 className="text-2xl font-playfair font-bold text-[#4A3E29] mt-2 mb-4">
                {treatmentsData[activeTab].title}
              </h3>
              <p className="text-xs lg:text-sm text-[#6E5D42] leading-relaxed mb-6">
                {treatmentsData[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 border-y border-[#EADFC9]/40 py-4">
                <div>
                  <span className="block text-[10px] text-[#8C7652] uppercase font-bold">Duration</span>
                  <span className="text-xs font-bold text-[#4A3E29]">{treatmentsData[activeTab].duration}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#8C7652] uppercase font-bold">Recovery</span>
                  <span className="text-xs font-bold text-[#4A3E29]">{treatmentsData[activeTab].downtime}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#8C7652] uppercase font-bold">Sessions</span>
                  <span className="text-xs font-bold text-[#4A3E29]">{treatmentsData[activeTab].sessions}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-[#4A3E29] uppercase tracking-wide">Key Clinical Advantages</h4>
                <ul className="space-y-2">
                  {treatmentsData[activeTab].features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#6E5D42]">
                      <Check size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-[#EADFC9]/20">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8C7652]">Clinic Pricing</span>
                  <p className="text-md font-bold text-[#4A3E29] font-playfair">{treatmentsData[activeTab].cost}</p>
                </div>
                <a 
                  href="#appointment-booking" 
                  onClick={() => setForm(prev => ({ ...prev, treatment: treatmentsData[activeTab].title }))}
                  className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C29F2F] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm"
                >
                  Consult Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire Section */}
      <section id="assessment" className="py-16 lg:py-24 px-6 lg:px-16 max-w-4xl mx-auto text-center font-jakarta">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
          Diagnostic Tool
        </span>
        <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-[#4A3E29]">
          Clinical Skin Assessment Quiz
        </h2>
        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 rounded-full mb-8"></div>

        <div className="p-6 lg:p-10 rounded-2xl bg-white border border-[#EADFC9]/60 shadow-sm">
          {!assessmentResult ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-[#8C7652] uppercase font-bold">Step {currentQuestion + 1} of {questions.length}</span>
                <div className="flex gap-1">
                  {questions.map((_, idx) => (
                    <div key={idx} className={`w-6 h-1 rounded-full ${idx <= currentQuestion ? 'bg-[#D4AF37]' : 'bg-[#EADFC9]/30'}`}></div>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#4A3E29] mb-6 leading-snug">
                {questions[currentQuestion].text}
              </h3>

              <div className="flex flex-col gap-3 max-w-md mx-auto">
                {questions[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(questions[currentQuestion].id, opt)}
                    className="p-3.5 rounded-xl border border-[#EADFC9]/50 hover:border-[#D4AF37] hover:bg-[#FAF5EB]/50 transition-all text-xs font-semibold text-[#6E5D42] text-left"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#FAF5EB] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                <Sparkles size={24} />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#8C7652]">Recommended Treatment Pathway</span>
                <h3 className="text-xl lg:text-2xl font-playfair font-bold text-[#4A3E29]">{assessmentResult.treatmentName}</h3>
                <p className="text-xs text-[#8C7652] italic">{assessmentResult.tagline}</p>
              </div>

              <p className="text-xs text-[#6E5D42] leading-relaxed max-w-lg mx-auto bg-[#FAF5EB] p-4 rounded-xl border border-[#EADFC9]/40">
                {assessmentResult.explanation}
              </p>

              <div className="flex justify-center gap-6 text-xs max-w-md mx-auto pt-2 border-y border-[#EADFC9]/30 py-4">
                <div>
                  <span className="block text-[9px] text-[#8C7652] uppercase font-bold">Sessions</span>
                  <span className="font-bold text-[#4A3E29]">{assessmentResult.sessions}</span>
                </div>
                <div className="border-l border-[#EADFC9]/40 h-8"></div>
                <div>
                  <span className="block text-[9px] text-[#8C7652] uppercase font-bold">Recovery Period</span>
                  <span className="font-bold text-[#4A3E29]">{assessmentResult.downtime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <button
                  onClick={prefillBookingForm}
                  className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#C29F2F] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
                >
                  Prefill Appointment Booking
                </button>
                <button
                  onClick={resetAssessment}
                  className="px-6 py-3.5 border border-[#EADFC9] hover:bg-[#FAF5EB] text-[#8C7652] font-bold text-xs uppercase tracking-widest rounded-xl transition-all"
                >
                  Retake Skin Test
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Results Showcase (Mock Case Studies) Section */}
      <section id="results" className="py-16 lg:py-24 px-6 lg:px-16 bg-[#FAF5EB]/50 border-t border-[#EADFC9]/30 font-jakarta">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Clinical Evidence
            </span>
            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-[#4A3E29]">
              Real Results Showcase
            </h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
            <p className="text-xs text-[#8C7652] mt-3">
              Explore documented clinic case summaries illustrating patient progress under Dr. Chadalavada Pragathi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Laser Hair Reduction',
                patient: '27-Year-Old Female',
                concern: 'Thick chin and neck hair (PCOS associated)',
                result: '95% reduction in hair density, improved skin tone and texture',
                sessions: '8 Sessions completed',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Acne Scar Remodeling',
                patient: '31-Year-Old Male',
                concern: 'Severe boxcar and rolling acne scars on cheeks',
                result: '75-80% reduction in deep scar depth, smooth skin plane',
                sessions: '5 MNRF + CO2 Laser sessions',
                image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Melasma Depigmentation',
                patient: '39-Year-Old Female',
                concern: 'Bilateral epidermal melasma on malar region',
                result: '90% clearance of dark spots, restored skin brightness',
                sessions: '6 Q-Switched Laser sessions',
                image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white border border-[#EADFC9]/60 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full object-cover aspect-[4/3] border-b border-[#EADFC9]/30"
                />
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-3 text-left">
                    <span className="text-[9px] uppercase font-bold text-[#D4AF37] tracking-widest">{study.title}</span>
                    <h3 className="text-md font-playfair font-bold text-[#4A3E29]">{study.patient}</h3>
                    <div className="w-8 h-0.5 bg-[#D4AF37]/50 rounded-full"></div>
                    
                    <p className="text-[11px] text-[#8C7652]">
                      <strong className="text-[#4A3E29] font-semibold">Prior Condition:</strong> {study.concern}
                    </p>
                    <p className="text-[11px] text-[#8C7652]">
                      <strong className="text-[#4A3E29] font-semibold">Clinical Result:</strong> {study.result}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EADFC9]/30 flex justify-between items-center text-[10px] font-bold uppercase text-[#4A3E29]">
                    <span>Clinical Log</span>
                    <span className="text-[#D4AF37]">{study.sessions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-7xl mx-auto font-jakarta">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Patient Voices
          </span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-[#4A3E29]">
            Client Testimonials
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Ananya Rao',
              area: 'Banjara Hills',
              treatment: 'Acne Scar Treatment',
              text: 'Oliva Banjara Hills has completely changed my skin texture. Dr. Pragathi was incredibly patient, mapping out my fractional lasers carefully. The scar depth reduction is unbelievable!'
            },
            {
              name: 'Vikram Reddy',
              area: 'Jubilee Hills',
              treatment: 'Laser Hair Reduction',
              text: 'Highly recommend their Laser Hair Reduction. The staff is professional, the clinic is absolutely spotless, and the gold standard Nd:YAG lasers were painless. Very happy with the results.'
            },
            {
              name: 'Shalini G.',
              area: 'Gachibowli',
              treatment: 'Pigmentation Treatment',
              text: 'My pigmentation treatment has done wonders. My stubborn melasma is almost completely gone. Dr. Pragathi explained the science clearly and monitored my recovery closely.'
            }
          ].map((rev, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EADFC9]/50 shadow-sm text-left flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-[#6E5D42] italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EADFC9]/20 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-[#4A3E29]">{rev.name}</h4>
                  <span className="text-[9px] text-[#8C7652]">{rev.area}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#FAF5EB] border border-[#EADFC9]/40 text-[9px] font-bold text-[#D4AF37] uppercase tracking-wide">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Appointment Booking Form Section */}
      <section id="appointment-booking" className="py-16 lg:py-24 px-6 lg:px-16 bg-[#FAF5EB] border-t border-[#EADFC9]/40 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center font-jakarta">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Priority Schedule
          </span>
          <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-[#4A3E29]">
            Book Your Consultation
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3 rounded-full mb-4"></div>
          <p className="text-xs text-[#8C7652] max-w-md mx-auto mb-10">
            Secure your slot with Dr. Chadalavada Pragathi. Fill out the details below and our coordinator will contact you to finalize.
          </p>

          {bookingSuccess ? (
            <div className="p-8 bg-white border-2 border-[#D4AF37] rounded-3xl shadow-lg space-y-6 text-left max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#FAF5EB] border border-green-500 flex items-center justify-center text-green-500 mx-auto">
                <Check size={24} />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-playfair font-bold text-[#4A3E29]">Booking Registered Successfully</h3>
                <p className="text-xs text-[#8C7652]">Reference ID: <span className="font-bold text-[#D4AF37]">{bookingSuccess.bookingId}</span></p>
              </div>

              <div className="space-y-2 border-y border-[#EADFC9]/50 py-4 text-xs">
                <div className="flex justify-between"><span className="text-[#8C7652]">Patient Name:</span> <span className="font-bold text-[#4A3E29]">{bookingSuccess.name}</span></div>
                <div className="flex justify-between"><span className="text-[#8C7652]">Phone Number:</span> <span className="font-bold text-[#4A3E29]">{bookingSuccess.phone}</span></div>
                <div className="flex justify-between"><span className="text-[#8C7652]">Email Address:</span> <span className="font-bold text-[#4A3E29]">{bookingSuccess.email}</span></div>
                <div className="flex justify-between"><span className="text-[#8C7652]">Clinical Procedure:</span> <span className="font-bold text-[#4A3E29]">{bookingSuccess.treatment}</span></div>
                <div className="flex justify-between"><span className="text-[#8C7652]">Preferred Date & Slot:</span> <span className="font-bold text-[#4A3E29]">{bookingSuccess.date} ({bookingSuccess.slot})</span></div>
              </div>

              <p className="text-[10px] text-center text-[#8C7652] leading-relaxed">
                Thank you for choosing Oliva Clinic. Dr. Pragathi's team will call you within 2 business hours to verify and confirm your clinic slot.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setBookingSuccess(null)}
                  className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C29F2F] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Schedule Another Visit
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="p-6 lg:p-10 bg-white border border-[#EADFC9]/50 rounded-3xl shadow-sm text-left space-y-6 max-w-xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold text-[#8C7652] uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C7652]">
                      <User size={14} />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#EADFC9]/60 bg-[#FAF5EB]/20 text-xs text-[#4A3E29] placeholder-[#8C7652]/50 outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] font-bold text-[#8C7652] uppercase tracking-wider mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C7652]">
                      <Phone size={14} />
                    </div>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={form.phone}
                      onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#EADFC9]/60 bg-[#FAF5EB]/20 text-xs text-[#4A3E29] placeholder-[#8C7652]/50 outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold text-[#8C7652] uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C7652]">
                      <Mail size={14} />
                    </div>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#EADFC9]/60 bg-[#FAF5EB]/20 text-xs text-[#4A3E29] placeholder-[#8C7652]/50 outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.email}</span>}
                </div>

                {/* Treatment Select */}
                <div>
                  <label className="block text-[10px] font-bold text-[#8C7652] uppercase tracking-wider mb-2">Treatment Required</label>
                  <select
                    value={form.treatment}
                    onChange={(e) => setForm(prev => ({ ...prev, treatment: e.target.value }))}
                    className="w-full px-3 py-3 rounded-xl border border-[#EADFC9]/60 bg-[#FAF5EB]/20 text-xs text-[#4A3E29] outline-none focus:border-[#D4AF37] transition-all appearance-none"
                  >
                    <option>Laser Hair Reduction</option>
                    <option>Acne Scar Treatment</option>
                    <option>Pigmentation Treatment</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Date */}
                <div>
                  <label className="block text-[10px] font-bold text-[#8C7652] uppercase tracking-wider mb-2">Appointment Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C7652]">
                      <Calendar size={14} />
                    </div>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#EADFC9]/60 bg-[#FAF5EB]/20 text-xs text-[#4A3E29] outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                  {errors.date && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.date}</span>}
                </div>

                {/* Slot */}
                <div>
                  <label className="block text-[10px] font-bold text-[#8C7652] uppercase tracking-wider mb-2">Preferred Slot</label>
                  <select
                    value={form.slot}
                    onChange={(e) => setForm(prev => ({ ...prev, slot: e.target.value }))}
                    className="w-full px-3 py-3 rounded-xl border border-[#EADFC9]/60 bg-[#FAF5EB]/20 text-xs text-[#4A3E29] outline-none focus:border-[#D4AF37] transition-all appearance-none"
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
                    className="w-4 h-4 rounded border-[#EADFC9] text-[#D4AF37] focus:ring-[#D4AF37] mt-0.5"
                  />
                  <span className="text-[10px] text-[#8C7652] leading-relaxed">
                    I consent to receive diagnostic reports, booking confirmations, and care follow-ups from Oliva Clinic via phone, email, and WhatsApp message.
                  </span>
                </label>
                {errors.consent && <span className="text-[10px] text-red-500 font-semibold block">{errors.consent}</span>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C29F2F] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Verifying Details...' : 'Request Slot Confirmation'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 9. Location/Hours Footer Section */}
      <footer className="bg-[#FAF5EB] border-t border-[#EADFC9]/50 py-16 px-6 lg:px-16 font-jakarta">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {/* Clinic Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center bg-white">
                <Sparkles className="text-[#D4AF37] w-4 h-4" />
              </div>
              <span className="font-playfair text-lg font-bold text-[#4A3E29]">OLIVA</span>
            </div>
            <p className="text-xs text-[#8C7652] leading-relaxed max-w-sm">
              Oliva Skin & Hair Clinic Banjara Hills provides premier dermatologist-led laser, hair, and aesthetic treatments in Hyderabad.
            </p>
            <p className="text-[10px] text-[#8C7652] uppercase font-bold tracking-wider">
              Lead Doctor: Dr. Chadalavada Pragathi (MBBS, MD (DVL))
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-xs text-[#6E5D42]">
            <h4 className="text-[10px] font-bold text-[#4A3E29] uppercase tracking-wider">Clinic Address</h4>
            
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                House No. 8-2-270/B/1, 2nd Floor, Q Mart Building, Road No. 3, Uptown Banjara, Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#D4AF37] shrink-0" />
              <span>+91 8977755473</span>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4 text-xs text-[#6E5D42]">
            <h4 className="text-[10px] font-bold text-[#4A3E29] uppercase tracking-wider">Clinic Timings</h4>
            
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="flex justify-between gap-6"><span>Monday - Saturday:</span> <span className="font-bold text-[#4A3E29]">10:00 AM - 08:00 PM</span></div>
                <div className="flex justify-between gap-6"><span>Sunday:</span> <span className="font-bold text-[#4A3E29]">11:00 AM - 05:00 PM</span></div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/50 p-3 rounded-lg border border-[#EADFC9]/40 text-[10px] text-[#8C7652]">
              <Info size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Prior appointment is highly recommended to avoid long waiting times at the clinic.</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#EADFC9]/40 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#8C7652] gap-4">
          <span>&copy; {new Date().getFullYear()} Oliva Skin & Hair Clinic Banjara Hills. All Rights Reserved.</span>
          <span>Designed with Premium Champagne Aesthetic.</span>
        </div>
      </footer>
    </div>
  );
}

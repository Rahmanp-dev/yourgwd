"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Sparkles, 
  ChevronRight, 
  Send, 
  ShieldCheck, 
  Smile, 
  User, 
  Mail, 
  Calendar, 
  Award, 
  Heart, 
  Check, 
  Sliders, 
  Info,
  ArrowRight,
  X,
  AlertCircle
} from 'lucide-react';

export default function ShayasCosmeticClinicPage() {
  // Treatments and Services Selector State
  const [selectedCategory, setSelectedCategory] = useState('laser');

  // Treatments data for Shayas Clinic
  const treatmentCategories = {
    laser: {
      name: 'Laser Hair Reduction',
      description: 'Advanced US-FDA approved laser technology for safe, permanent hair reduction across all skin types.',
      items: [
        { name: 'Full Face Laser', sessions: '6 - 8 Sessions', price: '₹9,500 - ₹14,000', detail: 'Targets upper lip, chin, cheeks, and sideburns with high precision.' },
        { name: 'Underarms Laser', sessions: '6 - 8 Sessions', price: '₹5,000 - ₹7,500', detail: 'Quick 15-minute sessions for smooth, pigmentation-free underarms.' },
        { name: 'Full Body Laser Premium', sessions: '8 - 10 Sessions', price: '₹38,000 - ₹52,000', detail: 'Comprehensive package including arms, legs, back, and torso.' }
      ]
    },
    whitening: {
      name: 'Skin Whitening & Brightening',
      description: 'Medical-grade brightening treatments designed to reduce melanin production, fix hyperpigmentation, and restore radiance.',
      items: [
        { name: 'Glutathione IV Glow Therapy', sessions: '5 - 8 Sessions', price: '₹18,000 - ₹28,000', detail: 'Antioxidant infusion to detoxify cells and promote full-body brightness.' },
        { name: 'Advanced Photo Facial', sessions: '3 - 5 Sessions', price: '₹8,500 - ₹12,000', detail: 'IPL technology targeting sun spots, redness, and dullness simultaneously.' },
        { name: 'Laser Skin Toning (Q-Switched)', sessions: '6 - 8 Sessions', price: '₹22,000 - ₹30,000', detail: 'De-pigmentation laser to break down deep melanin and improve skin texture.' }
      ]
    },
    peels: {
      name: 'Chemical Peels',
      description: 'Dermatologist-formulated peeling agents to exfoliate damaged outer layers, revealing flawless new skin.',
      items: [
        { name: 'Radiance Glycolic Peel', sessions: '4 - 6 Sessions', price: '₹4,000 - ₹6,500', detail: 'Sugarcane-derived AHA peel ideal for fine lines, dullness, and mild tanning.' },
        { name: 'Clarifying Salicylic Peel', sessions: '3 - 5 Sessions', price: '₹3,500 - ₹5,500', detail: 'BHA peel targeting deep pore blockages, acne breakouts, and oily skin.' },
        { name: 'Luxury Spanish Yellow Peel', sessions: '2 - 3 Sessions', price: '₹12,000 - ₹16,000', detail: 'Retinol-based peel with minimal downtime for dramatic texture and tone improvement.' }
      ]
    }
  };

  // Questionnaire State
  const [qAnswers, setQAnswers] = useState({
    concern: '',
    sensitivity: '',
    experience: ''
  });
  const [recommendation, setRecommendation] = useState(null);

  const handleQAnswer = (question, answer) => {
    setQAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const getQuestionnaireRecommendation = () => {
    if (!qAnswers.concern) return;

    let categoryKey = 'laser';
    let title = '';
    let description = '';

    if (qAnswers.concern === 'hair') {
      categoryKey = 'laser';
      title = 'Laser Hair Reduction Program';
      description = 'Based on your interest in hair reduction, we recommend our pain-free Laser Hair Reduction treatment. Specially calibrated for safe, permanent hair removal under Dr. Meghana\'s supervision.';
    } else if (qAnswers.concern === 'pigment') {
      categoryKey = 'whitening';
      title = 'Premium Skin Whitening & Brightening Set';
      description = 'To target uneven skin tone and pigmentation, we recommend our specialized Skin Whitening therapies, combining Glutathione infusions and Q-Switched lasers for optimal radiance.';
    } else if (qAnswers.concern === 'acne') {
      categoryKey = 'peels';
      title = 'Clarifying & Resurfacing Chemical Peels';
      description = 'For acne, clogged pores, or surface rejuvenation, our customized chemical peels (like Salicylic and Spanish Yellow Peels) are highly effective to exfoliate and clarify.';
    }

    setRecommendation({
      categoryKey,
      title,
      description
    });
  };

  const resetQuestionnaire = () => {
    setQAnswers({ concern: '', sensitivity: '', experience: '' });
    setRecommendation(null);
  };

  // Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'Laser Hair Reduction',
    doctor: 'Dr. Meghana (Lead Dermatologist)'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Please enter your full name (Adult or Child)';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters long';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit Indian mobile number';
      }
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errs.date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errs.date = 'Appointment date cannot be in the past';
      }
    }

    return errs;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        bookingId: `SHY-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
      // Reset form
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        treatment: 'Laser Hair Reduction',
        doctor: 'Dr. Meghana (Lead Dermatologist)'
      });
    }, 1200);
  };

  const scrollToBookingAndSelect = (categoryKey) => {
    let treatmentName = 'Laser Hair Reduction';
    if (categoryKey === 'whitening') treatmentName = 'Skin Whitening & Brightening';
    if (categoryKey === 'peels') treatmentName = 'Chemical Peels';

    setForm(prev => ({ ...prev, treatment: treatmentName }));
    const element = document.getElementById('appointment-booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F5F0] text-[#2C2A29] font-sans antialiased selection:bg-[#C5A880]/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Elegant Top Bar */}
      <div className="w-full bg-[#FAF9F5] border-b border-[#C5A880]/15 py-3 px-6 lg:px-12 flex justify-between items-center text-xs font-inter uppercase tracking-widest text-[#6E6A66]">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-[#C5A880]" />
          <span>Banjara Hills, Hyderabad</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+914066833447" className="flex items-center gap-2 hover:text-[#C5A880] transition-colors">
            <Phone size={12} className="text-[#C5A880]" />
            <span>+91 4066833447</span>
          </a>
        </div>
      </div>

      {/* Luxury Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#C5A880]/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-cormorant text-2xl lg:text-3xl font-medium tracking-widest text-[#2C2A29]">
              SHAYAS
            </h1>
            <span className="text-[9px] font-inter uppercase tracking-[0.4em] text-[#C5A880] font-semibold -mt-1">
              Cosmetic Clinic
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-inter text-xs uppercase tracking-wider text-[#6E6A66] font-medium">
            <a href="#philosophy" className="hover:text-[#C5A880] transition-colors">About</a>
            <a href="#selector" className="hover:text-[#C5A880] transition-colors">Treatments</a>
            <a href="#assessment" className="hover:text-[#C5A880] transition-colors">Skin Quiz</a>
            <a href="#showcase" className="hover:text-[#C5A880] transition-colors">Before & After</a>
            <a href="#testimonials" className="hover:text-[#C5A880] transition-colors">Reviews</a>
          </nav>

          <div>
            <a 
              href="#booking-section"
              className="inline-flex items-center justify-center border border-[#C5A880]/60 px-5 py-2.5 font-inter text-[11px] font-semibold uppercase tracking-widest text-[#2C2A29] hover:bg-[#C5A880] hover:text-white transition-all duration-300"
            >
              Reserve Experience
            </a>
          </div>
        </div>
      </header>

      {/* 1. Hero Section (Champagne Premium styling with delicate pastel gold/beige gradient) */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-tr from-[#EBEAE4] via-[#F5F5F0] to-[#FAF9F5]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C5A880 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 border border-[#C5A880]/30 px-3.5 py-1.5 bg-white/70 backdrop-blur-sm mb-6">
              <Sparkles size={13} className="text-[#C5A880]" />
              <span className="font-inter text-[10px] font-semibold uppercase tracking-widest text-[#6E6A66]">
                Bespoke Clinical Luxury
              </span>
            </div>
            <h2 className="font-cormorant text-4xl lg:text-6xl text-[#2C2A29] leading-[1.1] mb-6 font-light">
              Reclaim Your Skin’s <br />
              <span className="italic text-[#C5A880] font-normal">Natural Radiance</span>
            </h2>
            <p className="font-inter text-sm lg:text-base text-[#6E6A66] leading-relaxed mb-8 max-w-xl">
              Experience the pinnacle of clinical excellence at Banjara Hills. Directed by celebrity dermatologist Dr. Meghana, we offer personalized aesthetic procedures crafted to enhance and refine your unique beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#booking-section"
                className="bg-[#2C2A29] text-white hover:bg-[#C5A880] font-inter text-xs font-semibold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#2C2A29]/5"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#selector"
                className="border border-[#2C2A29]/20 hover:border-[#C5A880] bg-white/50 backdrop-blur-sm font-inter text-xs font-semibold uppercase tracking-widest px-8 py-4 text-[#2C2A29] transition-all duration-300 flex items-center justify-center"
              >
                Explore Treatments
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border border-[#C5A880]/20 translate-x-3 translate-y-3 pointer-events-none"></div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white shadow-xl shadow-[#2C2A29]/5 border border-[#C5A880]/10">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Shayas Cosmetic Clinic Luxury Ambience" 
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-white border-y border-[#C5A880]/15 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-none md:divide-x divide-[#C5A880]/15">
            <div className="text-center px-4">
              <span className="block font-cormorant text-3xl lg:text-4xl text-[#C5A880] font-medium mb-1">15+</span>
              <span className="block font-inter text-[10px] font-semibold uppercase tracking-widest text-[#6E6A66]">Years of Expertise</span>
            </div>
            <div className="text-center px-4">
              <span className="block font-cormorant text-3xl lg:text-4xl text-[#C5A880] font-medium mb-1">12k+</span>
              <span className="block font-inter text-[10px] font-semibold uppercase tracking-widest text-[#6E6A66]">Happy Patients</span>
            </div>
            <div className="text-center px-4">
              <span className="block font-cormorant text-3xl lg:text-4xl text-[#C5A880] font-medium mb-1">100%</span>
              <span className="block font-inter text-[10px] font-semibold uppercase tracking-widest text-[#6E6A66]">FDA-Approved Tech</span>
            </div>
            <div className="text-center px-4">
              <span className="block font-cormorant text-3xl lg:text-4xl text-[#C5A880] font-medium mb-1">No. 1</span>
              <span className="block font-inter text-[10px] font-semibold uppercase tracking-widest text-[#6E6A66]">Clinic in Banjara Hills</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder / Head Doctor Bio */}
      <section id="philosophy" className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 border border-[#C5A880]/15 -translate-x-3 -translate-y-3 pointer-events-none"></div>
              <div className="relative aspect-[4/5] bg-white border border-[#C5A880]/15 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Meghana - Lead Dermatologist at Shayas Cosmetic Clinic" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-3 block">
                Founding Dermatologist
              </span>
              <h3 className="font-cormorant text-3xl lg:text-4xl text-[#2C2A29] mb-6 font-light">
                Meet <span className="font-medium text-[#2C2A29]">Dr. Meghana</span>
              </h3>
              
              <div className="w-12 h-[1px] bg-[#C5A880] mb-6"></div>
              
              <div className="space-y-4 font-inter text-sm text-[#6E6A66] leading-relaxed">
                <p>
                  Dr. Meghana is a nationally renowned clinical dermatologist and aesthetic specialist with over 15 years of medical practice. She holds double board certifications and specializes in advanced non-surgical facial rejuvenation, custom lasers, and premium clinical skincare.
                </p>
                <p className="italic text-[#2C2A29]/80 font-cormorant text-lg lg:text-xl pl-4 border-l-2 border-[#C5A880]">
                  "My philosophy is rooted in skin preservation and subtle enhancement. We don't change how you look; we elevate your skin to its healthiest, most radiant biological state."
                </p>
                <p>
                  Under her expert direction, Shayas Cosmetic Clinic operates on the highest standards of safety and medical integrity, delivering customized, results-driven care in a private, luxurious oasis.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border border-[#C5A880]/10 p-4 bg-white/50">
                  <Award size={20} className="text-[#C5A880] mb-2" />
                  <span className="block font-cormorant text-base font-semibold text-[#2C2A29]">Double Board Certified</span>
                  <span className="block text-[10px] font-inter text-slate-500 uppercase tracking-wider mt-0.5">Dermatology & Venereology</span>
                </div>
                <div className="border border-[#C5A880]/10 p-4 bg-white/50">
                  <ShieldCheck size={20} className="text-[#C5A880] mb-2" />
                  <span className="block font-cormorant text-base font-semibold text-[#2C2A29]">US-FDA Approved Only</span>
                  <span className="block text-[10px] font-inter text-slate-500 uppercase tracking-wider mt-0.5">Premium Safety Standards</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Treatments & Services Selector */}
      <section id="selector" className="py-20 lg:py-28 bg-[#F5F5F0] border-t border-[#C5A880]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-3 block">
              Treatment Menu
            </span>
            <h3 className="font-cormorant text-3xl lg:text-4xl text-[#2C2A29] mb-4 font-light">
              Bespoke <span className="font-medium">Skin Services</span>
            </h3>
            <p className="font-inter text-xs lg:text-sm text-[#6E6A66]">
              Select a category below to explore curated clinical treatments, duration info, and premium pricing packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Category Select Tabs */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 border-b lg:border-b-0 border-[#C5A880]/10 pb-4 lg:pb-0">
              {Object.keys(treatmentCategories).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex-none lg:w-full text-left px-5 py-4 border transition-all duration-300 font-inter text-xs font-semibold uppercase tracking-widest whitespace-nowrap ${
                    selectedCategory === key
                      ? 'bg-[#2C2A29] text-white border-[#2C2A29] shadow-md shadow-[#2C2A29]/10'
                      : 'bg-white text-[#6E6A66] border-[#C5A880]/15 hover:border-[#C5A880] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{treatmentCategories[key].name}</span>
                    <ChevronRight size={14} className={`hidden lg:block transition-transform duration-300 ${selectedCategory === key ? 'translate-x-1' : 'opacity-40'}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Dynamic Treatment Details Display */}
            <div className="lg:col-span-8 bg-white border border-[#C5A880]/20 p-6 lg:p-10 shadow-sm relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A880]"></div>
              
              <h4 className="font-cormorant text-2xl lg:text-3xl font-medium text-[#2C2A29] mb-3">
                {treatmentCategories[selectedCategory].name}
              </h4>
              <p className="font-inter text-xs text-[#6E6A66] leading-relaxed mb-8 border-b border-[#C5A880]/10 pb-5">
                {treatmentCategories[selectedCategory].description}
              </p>

              <div className="space-y-6">
                {treatmentCategories[selectedCategory].items.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b border-dashed border-[#C5A880]/10 pb-6 last:border-0 last:pb-0 gap-4">
                    <div className="max-w-md">
                      <span className="block font-cormorant text-lg font-semibold text-[#2C2A29]">{item.name}</span>
                      <span className="block font-inter text-xs text-[#6E6A66] mt-1">{item.detail}</span>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-6 md:gap-1">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock size={12} className="text-[#C5A880]" />
                        <span className="font-inter text-[11px] uppercase tracking-wider">{item.sessions}</span>
                      </div>
                      <span className="font-inter text-sm font-semibold text-[#C5A880]">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#C5A880]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Info size={14} className="text-[#C5A880]" />
                  <span className="font-inter text-[11px] text-[#6E6A66]">Pricing depends on individual assessment.</span>
                </div>
                <button
                  onClick={() => scrollToBookingAndSelect(selectedCategory)}
                  className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#2C2A29] text-white font-inter text-[10px] font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-300 text-center"
                >
                  Book this category
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire */}
      <section id="assessment" className="py-20 lg:py-28 bg-[#FAF9F5] border-t border-[#C5A880]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-[#C5A880]/20 p-8 lg:p-12 shadow-md relative">
            <div className="absolute inset-x-0 top-0 h-[4px] bg-[#C5A880]"></div>
            
            <div className="text-center mb-10">
              <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-2 block">Interactive Guide</span>
              <h3 className="font-cormorant text-2xl lg:text-3xl text-[#2C2A29] font-medium">Bespoke Skin Assessment</h3>
              <p className="font-inter text-xs text-[#6E6A66] mt-2">Answer 3 brief questions and receive a recommended treatment pathway tailored by our clinical experts.</p>
            </div>

            {!recommendation ? (
              <div className="space-y-8">
                {/* Question 1 */}
                <div className="space-y-3">
                  <label className="block font-cormorant text-lg font-medium text-[#2C2A29]">
                    1. What is your primary dermatological or cosmetic goal?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => handleQAnswer('concern', 'hair')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.concern === 'hair'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      Permanent Hair Reduction
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('concern', 'pigment')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.concern === 'pigment'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      Fix Dullness & Skin Whitening
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('concern', 'acne')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.concern === 'acne'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      Treat Acne & Texture Peels
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-3">
                  <label className="block font-cormorant text-lg font-medium text-[#2C2A29]">
                    2. How sensitive is your facial skin?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleQAnswer('sensitivity', 'high')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.sensitivity === 'high'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      Highly Sensitive (Reddens easily, reacts to products)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('sensitivity', 'normal')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.sensitivity === 'normal'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      Normal / Tolerant (Rarely reacts or gets irritated)
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3">
                  <label className="block font-cormorant text-lg font-medium text-[#2C2A29]">
                    3. Have you undergone professional skin treatments before?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleQAnswer('experience', 'yes')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.experience === 'yes'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      Yes (Familiar with clinical protocols)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('experience', 'no')}
                      className={`text-left p-3.5 border font-inter text-xs tracking-wide transition-all ${
                        qAnswers.experience === 'no'
                          ? 'border-[#2C2A29] bg-[#FAF9F5] text-[#2C2A29] font-semibold'
                          : 'border-slate-200 hover:border-[#C5A880] text-slate-600'
                      }`}
                    >
                      No (This would be my first clinical experience)
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    disabled={!qAnswers.concern || !qAnswers.sensitivity || !qAnswers.experience}
                    onClick={getQuestionnaireRecommendation}
                    className="w-full sm:w-auto bg-[#2C2A29] disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-[#C5A880] text-white font-inter text-xs font-semibold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
                  >
                    Generate Pathway recommendation
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF9F5] border border-[#C5A880]/30 p-6 lg:p-8 space-y-6 animate-fadeIn">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-inter text-[9px] font-bold bg-[#C5A880] text-white px-2.5 py-1 uppercase tracking-widest inline-block mb-3">
                      Recommended Pathway
                    </span>
                    <h4 className="font-cormorant text-2xl font-semibold text-[#2C2A29]">
                      {recommendation.title}
                    </h4>
                  </div>
                  <button onClick={resetQuestionnaire} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={18} />
                  </button>
                </div>

                <p className="font-inter text-xs text-[#6E6A66] leading-relaxed">
                  {recommendation.description}
                </p>

                <div className="bg-white p-4 border border-[#C5A880]/15 flex items-center justify-between text-xs font-inter">
                  <span className="text-slate-500">Supervising Specialist:</span>
                  <span className="font-semibold text-[#2C2A29]">Dr. Meghana (Dermatologist)</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => scrollToBookingAndSelect(recommendation.categoryKey)}
                    className="flex-1 bg-[#2C2A29] hover:bg-[#C5A880] text-white font-inter text-xs font-semibold uppercase tracking-widest py-3.5 transition-colors text-center"
                  >
                    Confirm & Book appointment
                  </button>
                  <button
                    onClick={resetQuestionnaire}
                    className="flex-1 border border-[#2C2A29]/20 hover:border-[#2C2A29] text-[#2C2A29] font-inter text-xs font-semibold uppercase tracking-widest py-3.5 transition-colors text-center bg-white"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Results / Before & After Showcase */}
      <section id="showcase" className="py-20 lg:py-28 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-3 block">
              Proven Outcomes
            </span>
            <h3 className="font-cormorant text-3xl lg:text-4xl text-[#2C2A29] mb-4 font-light">
              Clinical <span className="font-medium">Showcase Gallery</span>
            </h3>
            <p className="font-inter text-xs lg:text-sm text-[#6E6A66]">
              Real dermatological results demonstrating enhanced tone, texture, and permanent hair clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border border-[#C5A880]/15 overflow-hidden group shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                  alt="Laser Hair Reduction Result" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#2C2A29] text-white font-inter text-[9px] uppercase tracking-widest px-2.5 py-1">
                  Laser Hair Reduction
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-inter uppercase tracking-wider text-[#C5A880] font-semibold block mb-1">Case Study 01</span>
                <h4 className="font-cormorant text-xl font-bold text-[#2C2A29] mb-2">Permanent Facial Hair Clearance</h4>
                <p className="font-inter text-xs text-[#6E6A66] leading-relaxed">
                  Smooth results achieved after 6 sessions of customized diode laser treatment, showing zero regrowth and improved skin texture.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-[#C5A880]/15 overflow-hidden group shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                  alt="Skin Whitening Result" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#2C2A29] text-white font-inter text-[9px] uppercase tracking-widest px-2.5 py-1">
                  Skin Whitening
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-inter uppercase tracking-wider text-[#C5A880] font-semibold block mb-1">Case Study 02</span>
                <h4 className="font-cormorant text-xl font-bold text-[#2C2A29] mb-2">Pigment Resurfacing & Tone Whitening</h4>
                <p className="font-inter text-xs text-[#6E6A66] leading-relaxed">
                  Deep dermal pigmentation solved using 5 sessions of Glutathione therapy and active Laser Skin Toning.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border border-[#C5A880]/15 overflow-hidden group shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
                  alt="Chemical Peels Result" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#2C2A29] text-white font-inter text-[9px] uppercase tracking-widest px-2.5 py-1">
                  Chemical Peels
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-inter uppercase tracking-wider text-[#C5A880] font-semibold block mb-1">Case Study 03</span>
                <h4 className="font-cormorant text-xl font-bold text-[#2C2A29] mb-2">Acne Resurfacing Spanish Peel</h4>
                <p className="font-inter text-xs text-[#6E6A66] leading-relaxed">
                  Marked improvement in active acne breakouts and deep skin scarring after 3 sessions of Spanish Yellow Peel.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF9F5] border-t border-[#C5A880]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-3 block">
              Patient Voices
            </span>
            <h3 className="font-cormorant text-3xl lg:text-4xl text-[#2C2A29] mb-4 font-light">
              The Shayas <span className="font-medium">Client Experience</span>
            </h3>
            <p className="font-inter text-xs lg:text-sm text-[#6E6A66]">
              Read verified testimonials from patients who transformed their skin under Dr. Meghana's care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-[#C5A880]/10 p-8 shadow-sm flex flex-col justify-between relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#C5A880] fill-[#C5A880]" />)}
              </div>
              <p className="font-cormorant text-[#2C2A29] text-lg italic leading-relaxed mb-6">
                "I visited Shayas Clinic for laser hair reduction on my face. After only 4 sessions, the hair growth has decreased by 90%. Dr. Meghana is extremely knowledgeable and patient."
              </p>
              <div>
                <span className="block font-inter text-xs font-semibold text-[#2C2A29] uppercase tracking-wider">Priya Reddy</span>
                <span className="block font-inter text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Banjara Hills, Hyderabad</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-[#C5A880]/10 p-8 shadow-sm flex flex-col justify-between relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#C5A880] fill-[#C5A880]" />)}
              </div>
              <p className="font-cormorant text-[#2C2A29] text-lg italic leading-relaxed mb-6">
                "Their Spanish Peel treatments are exceptional. My stubborn acne scars have faded significantly, and my skin feels incredibly smooth. The luxury environment at the clinic is a huge plus."
              </p>
              <div>
                <span className="block font-inter text-xs font-semibold text-[#2C2A29] uppercase tracking-wider">Anjali Rao</span>
                <span className="block font-inter text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Jubilee Hills</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-[#C5A880]/10 p-8 shadow-sm flex flex-col justify-between relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#C5A880] fill-[#C5A880]" />)}
              </div>
              <p className="font-cormorant text-[#2C2A29] text-lg italic leading-relaxed mb-6">
                "I highly recommend the skin whitening Q-Switched laser toning program. The results are visible within weeks. Dr. Meghana is by far the best dermatologist in Hyderabad."
              </p>
              <div>
                <span className="block font-inter text-xs font-semibold text-[#2C2A29] uppercase tracking-wider">Vikram Sen</span>
                <span className="block font-inter text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Gachibowli</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Appointment Booking / Enquiry Form */}
      <section id="booking-section" className="py-20 lg:py-28 bg-[#F5F5F0] border-t border-[#C5A880]/10">
        <div className="max-w-3xl mx-auto px-6">
          <div id="appointment-booking-form" className="bg-white border border-[#C5A880]/20 p-8 lg:p-12 shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#C5A880]"></div>
            
            <div className="text-center mb-10">
              <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-3 block">
                Reservations
              </span>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-medium text-[#2C2A29]">
                Request Consultation
              </h3>
              <p className="font-inter text-xs text-[#6E6A66] mt-2">
                Provide your details below. Dr. Meghana\'s assistant will call you to confirm your slot.
              </p>
            </div>

            {submittedData ? (
              <div className="border border-[#C5A880]/20 bg-[#FAF9F5] p-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-[#C5A880]/10 rounded-full flex items-center justify-center mx-auto text-[#C5A880]">
                  <Check size={28} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-cormorant text-2xl font-semibold text-[#2C2A29]">Appointment Requested</h4>
                  <p className="font-inter text-xs text-[#6E6A66] max-w-md mx-auto">
                    Thank you, <strong className="text-[#2C2A29]">{submittedData.name}</strong>. Your luxury aesthetic consult request has been registered.
                  </p>
                </div>

                <div className="py-4 px-6 bg-white border border-[#C5A880]/10 inline-block font-inter text-xs space-y-2 max-w-sm w-full mx-auto">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Reference ID:</span>
                    <strong className="text-[#C5A880] font-semibold">{submittedData.bookingId}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Treatment interest:</span>
                    <span className="text-[#2C2A29] font-medium">{submittedData.treatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Preferred Date:</span>
                    <span className="text-[#2C2A29] font-medium">{submittedData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Physician:</span>
                    <span className="text-[#2C2A29] font-medium">{submittedData.doctor}</span>
                  </div>
                </div>

                <p className="font-inter text-[10px] text-slate-500 uppercase tracking-wider">
                  Our coordinator will contact you at <strong>{submittedData.phone}</strong> within 2 hours.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="bg-[#2C2A29] hover:bg-[#C5A880] text-white font-inter text-xs font-semibold uppercase tracking-widest px-8 py-3.5 transition-colors"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-semibold uppercase tracking-widest text-[#6E6A66]">
                      Full Name (Adult / Child) *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        className={`w-full bg-[#FAF9F5] border font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#C5A880]/30 focus:border-[#C5A880]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 font-inter text-[10px] flex items-center gap-1">
                        <AlertCircle size={10} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-semibold uppercase tracking-widest text-[#6E6A66]">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full bg-[#FAF9F5] border font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#C5A880]/30 focus:border-[#C5A880]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 font-inter text-[10px] flex items-center gap-1">
                        <AlertCircle size={10} />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-semibold uppercase tracking-widest text-[#6E6A66]">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="name@domain.com"
                        className={`w-full bg-[#FAF9F5] border font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#C5A880]/30 focus:border-[#C5A880]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 font-inter text-[10px] flex items-center gap-1">
                        <AlertCircle size={10} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Date field */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-semibold uppercase tracking-widest text-[#6E6A66]">
                      Preferred Consultation Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className={`w-full bg-[#FAF9F5] border font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.date ? 'border-red-500 focus:border-red-500' : 'border-[#C5A880]/30 focus:border-[#C5A880]'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-red-500 font-inter text-[10px] flex items-center gap-1">
                        <AlertCircle size={10} />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Treatment dropdown */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-semibold uppercase tracking-widest text-[#6E6A66]">
                      Treatment Interest *
                    </label>
                    <select
                      name="treatment"
                      value={form.treatment}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF9F5] border border-[#C5A880]/30 font-inter text-xs px-4 py-3.5 outline-none focus:border-[#C5A880] appearance-none"
                    >
                      <option>Laser Hair Reduction</option>
                      <option>Skin Whitening & Brightening</option>
                      <option>Chemical Peels</option>
                    </select>
                  </div>

                  {/* Doctor dropdown */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-semibold uppercase tracking-widest text-[#6E6A66]">
                      Preferred Doctor
                    </label>
                    <select
                      name="doctor"
                      value={form.doctor}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF9F5] border border-[#C5A880]/30 font-inter text-xs px-4 py-3.5 outline-none focus:border-[#C5A880] appearance-none"
                    >
                      <option>Dr. Meghana (Lead Dermatologist)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2C2A29] hover:bg-[#C5A880] text-white font-inter text-xs font-semibold uppercase tracking-widest py-4 transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Requesting Reservation...</span>
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Submit Reservation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Clinic Location & Hours Footer */}
      <footer className="bg-white border-t border-[#C5A880]/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4 space-y-4">
            <h1 className="font-cormorant text-2xl lg:text-3xl font-medium tracking-widest text-[#2C2A29]">
              SHAYAS
            </h1>
            <span className="text-[9px] font-inter uppercase tracking-[0.4em] text-[#C5A880] font-semibold block -mt-3">
              Cosmetic Clinic
            </span>
            <p className="font-inter text-xs text-[#6E6A66] leading-relaxed max-w-sm pt-2">
              A bespoke, dermatologist-led clinical suite dedicated to skin health, luxury aesthetic therapies, and permanent hair solutions in Hyderabad.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <span className="block font-inter text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">
              Clinic Contact & Hours
            </span>
            <div className="space-y-3 font-inter text-xs text-[#6E6A66]">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Flat no-303, 'A' block, Maheshwari Tower, Road no-1, Banjara Hills, Hyderabad - 500034
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#C5A880] shrink-0" />
                <a href="tel:+914066833447" className="hover:text-[#C5A880] transition-colors">+91 4066833447</a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Monday - Saturday:</span>
                  <span className="block">10:00 AM - 8:00 PM</span>
                  <span className="block font-semibold mt-1">Sunday:</span>
                  <span className="block">Closed (By prior reservation only)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded maps placeholder */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-inter text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">
              Map & Location Finder
            </span>
            <div className="relative border border-[#C5A880]/15 w-full h-44 bg-[#FAF9F5] flex flex-col items-center justify-center p-4 text-center">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2C2A29 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
              <MapPin size={24} className="text-[#C5A880] mb-2" />
              <span className="block font-cormorant text-sm font-semibold text-[#2C2A29] mb-1">Maheshwari Tower, Road no-1</span>
              <span className="block font-inter text-[9px] text-[#6E6A66] uppercase tracking-wider max-w-[200px] mx-auto leading-normal">
                Banjara Hills, Hyderabad (Opposite GVK One Mall Metro Parking lane)
              </span>
              <a 
                href="https://maps.google.com/?q=Maheshwari+Tower,+Road+no-1,+Banjara+Hills,+Hyderabad" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-inter text-[10px] font-bold uppercase tracking-wider text-[#C5A880] hover:text-[#2C2A29] transition-colors"
              >
                <span>Open in Navigation</span>
                <ChevronRight size={10} />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-[#C5A880]/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-inter text-slate-400 uppercase tracking-widest gap-4">
          <span>© {new Date().getFullYear()} Shayas Cosmetic Clinic. All Rights Reserved.</span>
          <span className="text-[#C5A880] font-semibold">Premium Healthcare Experience</span>
        </div>
      </footer>

    </div>
  );
}

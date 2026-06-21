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

export default function JDsClinicPage() {
  // Treatments and Services Selector State
  const [selectedCategory, setSelectedCategory] = useState('dermatology');

  // Treatments data for JDs Clinic
  const treatmentCategories = {
    dermatology: {
      name: 'Aesthetic Dermatology',
      description: 'Advanced clinical treatments to restore youthful radiance, smooth skin tone, and promote long-term skin health.',
      items: [
        { name: 'Microdermabrasion Glow', sessions: '3 - 5 Sessions', price: '₹4,500 - ₹6,500', detail: 'Medical-grade physical exfoliation to buff away dead cells and target fine lines.' },
        { name: 'Hollywood Carbon Laser Facial', sessions: '2 - 4 Sessions', price: '₹7,500 - ₹11,000', detail: 'De-clogs pores, reduces sebum, and stimulates collagen production using carbon paste and laser.' },
        { name: 'Collagen Induction Therapy (Microneedling)', sessions: '4 - 6 Sessions', price: '₹9,500 - ₹14,000', detail: 'Stimulates elastin and deep collagen remodeling to treat acne scars and texture.' }
      ]
    },
    lasers: {
      name: 'Lasers & Peels',
      description: 'US-FDA approved laser systems and medically formulated organic acid peels for rapid resurfacing and pigment clearing.',
      items: [
        { name: 'Clinical Q-Switched Pigmentation Laser', sessions: '5 - 8 Sessions', price: '₹14,000 - ₹20,000', detail: 'Safely targets melasma, sun freckles, and localized hyperpigmentation.' },
        { name: 'Restorative Jessner Peel', sessions: '3 - 5 Sessions', price: '₹5,000 - ₹8,000', detail: 'Medium-depth chemical peel designed to clear acne lesions and dark marks.' },
        { name: 'Rejuvenating TCA Peel', sessions: '2 - 3 Sessions', price: '₹9,000 - ₹13,000', detail: 'Deep peel that targets photo-damaged skin and smooths stubborn scarring.' }
      ]
    },
    transplant: {
      name: 'Hair Transplant & Restoration',
      description: 'Advanced hair transplant micro-grafting techniques and hair-loss therapies to restore natural density.',
      items: [
        { name: 'FUE Hair Transplant (2500 Grafts)', sessions: '1 Day Session', price: '₹55,000 - ₹75,000', detail: 'Follicular Unit Extraction with natural-looking hair line design.' },
        { name: 'FUE Hair Transplant (4500 Grafts)', sessions: '1 - 2 Days', price: '₹95,000 - ₹130,000', detail: 'High-density graft extraction for extensive stage hair loss.' },
        { name: 'PRP Hair Density Therapy', sessions: '6 - 8 Sessions', price: '₹28,000 - ₹40,000', detail: 'Platelet-rich plasma infusion to nourish hair follicles and stop shedding.' }
      ]
    }
  };

  // Questionnaire State
  const [qAnswers, setQAnswers] = useState({
    concern: '',
    duration: '',
    previous: ''
  });
  const [recommendation, setRecommendation] = useState(null);

  const handleQAnswer = (question, value) => {
    setQAnswers(prev => ({ ...prev, [question]: value }));
  };

  const getQuestionnaireRecommendation = () => {
    if (!qAnswers.concern) return;

    let categoryKey = 'dermatology';
    let title = '';
    let description = '';

    if (qAnswers.concern === 'hair') {
      categoryKey = 'transplant';
      title = 'Clinical Hair Transplant & Density Program';
      description = 'Based on your concern regarding hair loss or density reduction, we highly recommend our FUE Hair Transplant or PRP hair therapy. Guided directly by Dr. Aparna Krishnappa.';
    } else if (qAnswers.concern === 'acne' || qAnswers.concern === 'texture') {
      categoryKey = 'lasers';
      title = 'Resurfacing Lasers & Medical Chemical Peels';
      description = 'For acne scars, active blemishes, or uneven skin texture, our medical-grade chemical peels or Q-Switched laser resurfacing are the most effective path forward.';
    } else if (qAnswers.concern === 'pigment') {
      categoryKey = 'dermatology';
      title = 'Aesthetic Dermatology & Radiant Facials';
      description = 'To address dull skin or pigmentation, we recommend our specialized Carbon Laser Facials and Collagen Induction Therapy for instant, long-lasting wellness.';
    }

    setRecommendation({
      categoryKey,
      title,
      description
    });
  };

  const resetQuestionnaire = () => {
    setQAnswers({ concern: '', duration: '', previous: '' });
    setRecommendation(null);
  };

  // Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'Aesthetic Dermatology',
    doctor: 'Dr. Aparna Krishnappa (MBBS, MD - DVL)'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full name (Adult or Child) is required';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit Indian phone number';
      }
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errs.date = 'Appointment date is required';
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
        bookingId: `JDS-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
      // Reset form
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        treatment: 'Aesthetic Dermatology',
        doctor: 'Dr. Aparna Krishnappa (MBBS, MD - DVL)'
      });
    }, 1200);
  };

  const scrollToBookingAndSelect = (categoryKey) => {
    let treatmentName = 'Aesthetic Dermatology';
    if (categoryKey === 'lasers') treatmentName = 'Lasers & Peels';
    if (categoryKey === 'transplant') treatmentName = 'Hair Transplant & Restoration';

    setForm(prev => ({ ...prev, treatment: treatmentName }));
    const element = document.getElementById('booking-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#0EA5E9]/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Top Wellness Bar */}
      <div className="w-full bg-[#F0F9FF] border-b border-[#0EA5E9]/10 py-3 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-xs font-inter text-slate-600 gap-2">
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-[#0EA5E9]" />
          <span className="font-medium">Ground Floor G3, Ashoka Capitol, Road No. 2, Banjara Hills, Hyderabad</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+919855155123" className="flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors font-semibold">
            <Phone size={13} className="text-[#0EA5E9]" />
            <span>+91 9855155123</span>
          </a>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white">
              <Smile size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-inter text-xl font-extrabold tracking-tight text-slate-900 block">
                JDs Clinic
              </span>
              <span className="block text-[9px] tracking-widest uppercase font-bold text-[#0EA5E9] -mt-1">
                Skin & Hair Wellness
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-inter text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-[#0EA5E9] transition-colors">Philosophy</a>
            <a href="#selector" className="hover:text-[#0EA5E9] transition-colors">Treatments</a>
            <a href="#assessment" className="hover:text-[#0EA5E9] transition-colors">Skin Assessment</a>
            <a href="#results" className="hover:text-[#0EA5E9] transition-colors">Results</a>
            <a href="#testimonials" className="hover:text-[#0EA5E9] transition-colors">Testimonials</a>
          </nav>

          <div>
            <a 
              href="#booking-form-section"
              className="inline-flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-5 py-2.5 font-inter text-xs font-bold rounded-full transition-all duration-300 shadow-md shadow-[#0EA5E9]/15"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* 1. Hero Section (Clean sky-blue wellness styled gradient background) */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#F0F9FF] via-white to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#E0F2FE] border border-[#0EA5E9]/20 px-3.5 py-1.5 rounded-full">
              <Sparkles size={14} className="text-[#0EA5E9]" />
              <span className="font-inter text-xs font-bold text-[#0EA5E9] uppercase tracking-wider">
                Dermatology & Hair Restoration
              </span>
            </div>
            <h2 className="font-inter text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Expert Care for <br />
              <span className="text-[#0EA5E9]">Healthy Skin & Hair</span>
            </h2>
            <p className="font-inter text-sm lg:text-base text-slate-600 leading-relaxed max-w-lg">
              Welcome to JDs Clinic in Banjara Hills. Under the clinical leadership of Dr. Aparna Krishnappa, we provide evidence-based, medically safe aesthetic treatments and FUE hair transplants customized to help you look your absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#booking-form-section"
                className="bg-[#0EA5E9] text-white hover:bg-[#0284C7] font-inter text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0EA5E9]/25"
              >
                <span>Schedule a Visit</span>
                <ArrowRight size={14} />
              </a>
              <a 
                href="#selector"
                className="bg-white border border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9] font-inter text-sm font-bold px-8 py-3.5 rounded-full text-slate-700 transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white bg-slate-50 max-w-lg mx-auto">
              <div className="aspect-[4/3] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800" 
                  alt="JD's Clinic Modern Treatment Room" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between border border-[#E0F2FE]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0F9FF] flex items-center justify-center text-[#0EA5E9]">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">ISO Certified Clinic</span>
                    <span className="block text-[10px] text-slate-500">100% Medical Grade Protocols</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#0EA5E9] bg-[#E0F2FE] px-3 py-1 rounded-full">Active</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-[#F0F9FF]/60 border-y border-[#E0F2FE] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block font-inter text-3xl font-extrabold text-[#0EA5E9]">12+ Yrs</span>
              <span className="block font-inter text-[10px] font-bold uppercase tracking-widest text-slate-500">Clinical Experience</span>
            </div>
            <div className="space-y-1">
              <span className="block font-inter text-3xl font-extrabold text-[#0EA5E9]">8,500+</span>
              <span className="block font-inter text-[10px] font-bold uppercase tracking-widest text-slate-500">Procedures Done</span>
            </div>
            <div className="space-y-1">
              <span className="block font-inter text-3xl font-extrabold text-[#0EA5E9]">2,500+</span>
              <span className="block font-inter text-[10px] font-bold uppercase tracking-widest text-slate-500">Hair Transplants</span>
            </div>
            <div className="space-y-1">
              <span className="block font-inter text-3xl font-extrabold text-[#0EA5E9]">99.6%</span>
              <span className="block font-inter text-[10px] font-bold uppercase tracking-widest text-slate-500">Patient Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder / Head Doctor Bio */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 max-w-sm mx-auto">
                <div className="aspect-[4/5] w-full bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. Aparna Krishnappa - Head Dermatologist at JDs Clinic" 
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>
                <div className="absolute bottom-4 inset-x-4 bg-white/95 p-4 rounded-xl shadow-md border border-slate-100 text-center">
                  <span className="block font-inter text-sm font-extrabold text-slate-900">Dr. Aparna Krishnappa</span>
                  <span className="block text-[10px] text-[#0EA5E9] font-bold uppercase tracking-wider mt-0.5">MBBS, MD - DVL</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
                Lead Dermatologist & Founder
              </span>
              <h3 className="font-inter text-3xl font-extrabold text-slate-900 leading-tight">
                Introducing <span className="text-[#0EA5E9]">Dr. Aparna Krishnappa</span>
              </h3>
              <div className="w-16 h-1 bg-[#0EA5E9] rounded-full"></div>
              
              <div className="space-y-4 font-inter text-sm text-slate-600 leading-relaxed">
                <p>
                  Dr. Aparna Krishnappa is a prominent dermatologist, venereologist, and hair transplant micro-surgeon in Hyderabad. With extensive academic training and over 12 years of hands-on experience, she holds double post-graduate qualifications in dermatology.
                </p>
                <p className="italic text-slate-800 font-medium pl-4 border-l-4 border-[#0EA5E9] bg-slate-50 py-3 rounded-r-lg">
                  "At JDs Clinic, we view medical aesthetics as a blend of science and art. Our core target is delivering natural density for hair transplants and achieving clear, youthful skin with zero compromise on safety."
                </p>
                <p>
                  She has successfully guided thousands of clinical hair restorations and skin resurfacing procedures, publishing scientific papers in esteemed international dermatology journals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Award className="text-[#0EA5E9] shrink-0" size={18} />
                  <span className="font-inter text-xs font-semibold text-slate-700">Member of IADVL Association</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Heart className="text-[#0EA5E9] shrink-0" size={18} />
                  <span className="font-inter text-xs font-semibold text-slate-700">Dedicated Post-Op Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Treatments & Services Selector */}
      <section id="selector" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
              Interactive Care Menu
            </span>
            <h3 className="font-inter text-3xl font-extrabold text-slate-900">
              Personalized <span className="text-[#0EA5E9]">Treatments & Pricing</span>
            </h3>
            <p className="font-inter text-xs lg:text-sm text-slate-500">
              Select a clinical pathway below to see specific sessions, pricing, and medical benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Category selection - rounded pill design */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0">
              {Object.keys(treatmentCategories).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex-none lg:w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 font-inter text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                    selectedCategory === key
                      ? 'bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/20'
                      : 'bg-white text-slate-600 border border-slate-100 hover:border-[#0EA5E9]/30 hover:bg-[#F0F9FF]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span>{treatmentCategories[key].name}</span>
                    <ChevronRight size={15} className={`hidden lg:block transition-transform duration-300 ${selectedCategory === key ? 'translate-x-1' : 'opacity-40'}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Treatment cards list */}
            <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 lg:p-10 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <h4 className="font-inter text-xl font-bold text-slate-900 mb-2">
                  {treatmentCategories[selectedCategory].name}
                </h4>
                <p className="font-inter text-xs text-slate-500 leading-relaxed">
                  {treatmentCategories[selectedCategory].description}
                </p>
              </div>

              <div className="space-y-6">
                {treatmentCategories[selectedCategory].items.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-6 last:border-0 last:pb-0 gap-4">
                    <div className="max-w-md">
                      <span className="block font-inter text-base font-bold text-slate-800">{item.name}</span>
                      <span className="block font-inter text-xs text-slate-500 mt-1">{item.detail}</span>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-6 md:gap-1">
                      <div className="flex items-center gap-1.5 text-[#0EA5E9] bg-[#F0F9FF] px-2.5 py-1 rounded-full font-inter text-[10px] font-bold uppercase">
                        <Clock size={10} />
                        <span>{item.sessions}</span>
                      </div>
                      <span className="font-inter text-sm font-extrabold text-slate-900">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Info size={14} className="text-[#0EA5E9] shrink-0" />
                  <span className="font-inter text-xs text-slate-500">Estimates are transparent. All medical tools are US-FDA approved.</span>
                </div>
                <button
                  onClick={() => scrollToBookingAndSelect(selectedCategory)}
                  className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-inter text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors duration-300 text-center shadow-md shadow-[#0EA5E9]/10"
                >
                  Book Category
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire */}
      <section id="assessment" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F0F9FF]/60 border border-[#0EA5E9]/20 rounded-3xl p-6 lg:p-10 shadow-sm relative">
            
            <div className="text-center mb-10 space-y-2">
              <span className="font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9] block">
                Interactive Assistant
              </span>
              <h3 className="font-inter text-2xl lg:text-3xl font-extrabold text-slate-900">
                Skin & Hair Self-Assessment
              </h3>
              <p className="font-inter text-xs text-slate-500 max-w-lg mx-auto">
                Select your symptoms below to let our algorithm pre-screen your clinical requirements.
              </p>
            </div>

            {!recommendation ? (
              <div className="space-y-6">
                {/* Question 1 */}
                <div className="space-y-2.5">
                  <label className="block font-inter text-xs font-bold uppercase text-slate-600">
                    1. What concern would you like to address first?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => handleQAnswer('concern', 'hair')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.concern === 'hair'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      Hair Loss & Bald Patches
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('concern', 'pigment')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.concern === 'pigment'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      Pigmentation & Dark Spots
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('concern', 'acne')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.concern === 'acne'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      Active Acne & Scar Texture
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-2.5">
                  <label className="block font-inter text-xs font-bold uppercase text-slate-600">
                    2. How long have you faced this concern?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => handleQAnswer('duration', 'recent')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.duration === 'recent'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      Less than 6 months
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('duration', 'moderate')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.duration === 'moderate'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      6 months to 2 years
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('duration', 'chronic')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.duration === 'chronic'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      More than 2 years
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-2.5">
                  <label className="block font-inter text-xs font-bold uppercase text-slate-600">
                    3. Have you consulted a dermatologist previously?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleQAnswer('previous', 'yes')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.previous === 'yes'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      Yes, but saw no results
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQAnswer('previous', 'no')}
                      className={`text-left p-3.5 rounded-xl border font-inter text-xs font-semibold tracking-wide transition-all ${
                        qAnswers.previous === 'no'
                          ? 'border-[#0EA5E9] bg-white text-[#0EA5E9] shadow-sm'
                          : 'border-slate-200 hover:border-[#0EA5E9]/30 text-slate-500 bg-white'
                      }`}
                    >
                      No, this is my first check
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    disabled={!qAnswers.concern || !qAnswers.duration || !qAnswers.previous}
                    onClick={getQuestionnaireRecommendation}
                    className="w-full sm:w-auto bg-[#0EA5E9] disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-[#0284C7] text-white font-inter text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-full transition-colors duration-300 shadow-md shadow-[#0EA5E9]/15"
                  >
                    View Recommendation
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-100 p-6 lg:p-8 rounded-2xl space-y-6 shadow-sm animate-fadeIn">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-inter text-[10px] font-bold bg-[#F0F9FF] text-[#0EA5E9] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                      Your Suggested Pathway
                    </span>
                    <h4 className="font-inter text-xl font-bold text-slate-900">
                      {recommendation.title}
                    </h4>
                  </div>
                  <button onClick={resetQuestionnaire} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={18} />
                  </button>
                </div>

                <p className="font-inter text-xs text-slate-600 leading-relaxed">
                  {recommendation.description}
                </p>

                <div className="bg-[#F0F9FF]/40 p-4 rounded-xl flex items-center justify-between text-xs font-inter border border-[#E0F2FE]">
                  <span className="text-slate-500">Supervising Surgeon:</span>
                  <span className="font-bold text-slate-800">Dr. Aparna Krishnappa</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => scrollToBookingAndSelect(recommendation.categoryKey)}
                    className="flex-1 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-inter text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-colors text-center shadow-sm"
                  >
                    Select & Book Appointment
                  </button>
                  <button
                    onClick={resetQuestionnaire}
                    className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-700 font-inter text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-colors text-center bg-white"
                  >
                    Retake Test
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Results / Before & After Showcase */}
      <section id="results" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
              Verified Results
            </span>
            <h3 className="font-inter text-3xl font-extrabold text-slate-900">
              Before & After <span className="text-[#0EA5E9]">Case Studies</span>
            </h3>
            <p className="font-inter text-xs lg:text-sm text-slate-500">
              Real clinical records showcasing dense hair regrowth and pristine skin resurfacing outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden group shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
                  alt="Hair Transplant FUE Result" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#0EA5E9] text-white font-inter text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  FUE Hair Transplant
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-inter uppercase tracking-wider text-[#0EA5E9] font-bold block">Case Study A</span>
                <h4 className="font-inter text-lg font-bold text-slate-800">Frontal Hairline Density Restoration</h4>
                <p className="font-inter text-xs text-slate-500 leading-relaxed">
                  Excellent hair density and natural forward hairline restoration photographed 9 months after single-session FUE transplant.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden group shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800" 
                  alt="Aesthetic Dermatology Result" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#0EA5E9] text-white font-inter text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Carbon Laser Facial
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-inter uppercase tracking-wider text-[#0EA5E9] font-bold block">Case Study B</span>
                <h4 className="font-inter text-lg font-bold text-slate-800">Clear Pore Glow Resurfacing</h4>
                <p className="font-inter text-xs text-slate-500 leading-relaxed">
                  Marked reduction in pore diameter and glowing skin tone achieved after 3 sessions of Carbon Laser Facial.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden group shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                  alt="Lasers & Peels Result" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#0EA5E9] text-white font-inter text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  TCA Peel Scarring
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-inter uppercase tracking-wider text-[#0EA5E9] font-bold block">Case Study C</span>
                <h4 className="font-inter text-lg font-bold text-slate-800">Acne Scars Resurfacing</h4>
                <p className="font-inter text-xs text-slate-500 leading-relaxed">
                  Smooth skin texture and deep pit scars filled after 2 sessions of specialized clinical TCA Peel treatments.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
              Patient Experiences
            </span>
            <h3 className="font-inter text-3xl font-extrabold text-slate-900">
              Trusted by <span className="text-[#0EA5E9]">Thousands in Banjara Hills</span>
            </h3>
            <p className="font-inter text-xs lg:text-sm text-slate-500">
              Verified clinical reviews from patient files under Dr. Aparna\'s supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F0F9FF]/40 border border-[#0EA5E9]/10 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="font-inter text-slate-700 text-sm italic leading-relaxed mb-6">
                "Dr. Aparna performed my hair transplant, and the density has been incredible. 8 months in, and the growth looks perfectly natural. She guided me through every recovery stage."
              </p>
              <div>
                <span className="block font-inter text-xs font-bold text-slate-900">K. Srinivas Rao</span>
                <span className="block font-inter text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Banjara Hills, Hyderabad</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F0F9FF]/40 border border-[#0EA5E9]/10 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="font-inter text-slate-700 text-sm italic leading-relaxed mb-6">
                "I visited JDs Clinic for Carbon Laser Facial to address my deep-seated blackheads and oily skin. The treatment was absolutely quick and the glow was visible the next morning."
              </p>
              <div>
                <span className="block font-inter text-xs font-bold text-slate-900">Meera Sen</span>
                <span className="block font-inter text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Somajiguda</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F0F9FF]/40 border border-[#0EA5E9]/10 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="font-inter text-slate-700 text-sm italic leading-relaxed mb-6">
                "The Jessner peels recommended by Dr. Aparna did wonders for my acne scars. She is a highly professional dermatologist who listens attentively. Best aesthetic clinic!"
              </p>
              <div>
                <span className="block font-inter text-xs font-bold text-slate-900">Dr. Rahul Mehta</span>
                <span className="block font-inter text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Jubilee Hills</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Appointment Booking / Enquiry Form */}
      <section id="booking-form-section" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-lg relative">
            
            <div className="text-center mb-10 space-y-2">
              <span className="font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9] block">
                Appointment Requests
              </span>
              <h3 className="font-inter text-2xl lg:text-3xl font-extrabold text-slate-900">
                Register Consultation Slot
              </h3>
              <p className="font-inter text-xs text-slate-500">
                Please enter your information. Our clinical coordinator will phone you to finalize your timing.
              </p>
            </div>

            {submittedData ? (
              <div className="border border-[#0EA5E9]/20 bg-[#F0F9FF]/30 p-8 rounded-2xl text-center space-y-6 animate-fadeIn">
                <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto text-[#0EA5E9]">
                  <Check size={26} className="stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-inter text-xl font-bold text-slate-900">Consultation Pre-Registered</h4>
                  <p className="font-inter text-xs text-slate-500 max-w-md mx-auto">
                    Hi, <strong className="text-slate-800">{submittedData.name}</strong>. Your wellness reservation request has been processed.
                  </p>
                </div>

                <div className="py-4 px-6 bg-white border border-slate-100 rounded-xl inline-block font-inter text-xs space-y-2.5 max-w-sm w-full mx-auto shadow-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 font-medium">Booking ID:</span>
                    <strong className="text-[#0EA5E9] font-bold">{submittedData.bookingId}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 font-medium">Interest Area:</span>
                    <span className="text-slate-800 font-semibold">{submittedData.treatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 font-medium">Preferred Date:</span>
                    <span className="text-slate-800 font-semibold">{submittedData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Dermatologist:</span>
                    <span className="text-slate-800 font-semibold">{submittedData.doctor}</span>
                  </div>
                </div>

                <p className="font-inter text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Confirmation text sent to <strong>{submittedData.phone}</strong>.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-inter text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors shadow-sm"
                >
                  Book New Visit
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-bold uppercase text-slate-500">
                      Full Name (Adult / Child) *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        className={`w-full bg-slate-50 border rounded-xl font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#0EA5E9]'
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
                    <label className="block font-inter text-xs font-bold uppercase text-slate-500">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full bg-slate-50 border rounded-xl font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#0EA5E9]'
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
                    <label className="block font-inter text-xs font-bold uppercase text-slate-500">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="name@domain.com"
                        className={`w-full bg-slate-50 border rounded-xl font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#0EA5E9]'
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
                    <label className="block font-inter text-xs font-bold uppercase text-slate-500">
                      Preferred Booking Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl font-inter text-xs px-4 py-3.5 outline-none transition-all ${
                          errors.date ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#0EA5E9]'
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
                    <label className="block font-inter text-xs font-bold uppercase text-slate-500">
                      Treatment Focus *
                    </label>
                    <select
                      name="treatment"
                      value={form.treatment}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl font-inter text-xs px-4 py-3.5 outline-none focus:border-[#0EA5E9] appearance-none"
                    >
                      <option>Aesthetic Dermatology</option>
                      <option>Lasers & Peels</option>
                      <option>Hair Transplant & Restoration</option>
                    </select>
                  </div>

                  {/* Doctor dropdown */}
                  <div className="space-y-2">
                    <label className="block font-inter text-xs font-bold uppercase text-slate-500">
                      Physician
                    </label>
                    <select
                      name="doctor"
                      value={form.doctor}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl font-inter text-xs px-4 py-3.5 outline-none focus:border-[#0EA5E9] appearance-none"
                    >
                      <option>Dr. Aparna Krishnappa (MBBS, MD - DVL)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-inter text-xs font-bold uppercase tracking-wider py-4 rounded-full transition-colors duration-300 shadow-md shadow-[#0EA5E9]/15 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving Consultation...</span>
                    ) : (
                      <>
                        <Send size={13} />
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

      {/* 9. Clinic Location & Hours Footer */}
      <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white">
                <Smile size={18} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="font-inter text-lg font-extrabold tracking-tight text-white block">
                  JDs Clinic
                </span>
                <span className="block text-[8px] tracking-widest uppercase font-bold text-[#0EA5E9] -mt-1">
                  Skin & Hair Wellness
                </span>
              </div>
            </div>
            <p className="font-inter text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Dermatologist-directed wellness suite offering FUE transplants, laser diagnostics, and medical peeling therapies in Banjara Hills, Hyderabad.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4 text-slate-300">
            <span className="block font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
              Contact Details & Hours
            </span>
            <div className="space-y-3 font-inter text-xs text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Ground Floor G3, Ashoka Capitol, Road No. 2, Banjara Hills, Hyderabad, Telangana 500034
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#0EA5E9] shrink-0" />
                <a href="tel:+919855155123" className="hover:text-white transition-colors">+91 9855155123</a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock size={15} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-semibold">Monday - Saturday:</span>
                  <span className="block">10:00 AM - 7:30 PM</span>
                  <span className="block text-slate-300 font-semibold mt-1">Sunday:</span>
                  <span className="block">Closed (Emergencies / prior transplants only)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded maps placeholder */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-inter text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
              Map & Location Finder
            </span>
            <div className="relative border border-slate-700/50 rounded-2xl w-full h-44 bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
              <MapPin size={24} className="text-[#0EA5E9] mb-2" />
              <span className="block font-inter text-sm font-bold text-white mb-1">Ashoka Capitol, Road No. 2</span>
              <span className="block font-inter text-[9px] text-slate-400 uppercase tracking-wider max-w-[200px] mx-auto leading-normal">
                Banjara Hills, Hyderabad (Near KBR Park junction)
              </span>
              <a 
                href="https://maps.google.com/?q=Ashoka+Capitol,+Road+No.+2,+Banjara+Hills,+Hyderabad" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-inter text-[10px] font-bold uppercase tracking-wider text-[#0EA5E9] hover:text-white transition-colors"
              >
                <span>Navigate on Maps</span>
                <ChevronRight size={10} />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-inter text-slate-500 uppercase tracking-widest gap-4">
          <span>© {new Date().getFullYear()} JDs Clinic. All Rights Reserved.</span>
          <span className="text-[#0EA5E9] font-bold">Science-Based Skin & Hair Restoration</span>
        </div>
      </footer>

    </div>
  );
}

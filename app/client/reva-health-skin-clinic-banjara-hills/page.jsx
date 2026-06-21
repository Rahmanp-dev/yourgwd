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
  Smile,
  Compass,
  FileText
} from 'lucide-react';

export default function RevaHealthSkinClinicPage() {
  // Mobile Nav State
  const [navOpen, setNavOpen] = useState(false);

  // Treatment Selector State
  const [selectedTreatment, setSelectedTreatment] = useState('celebrity');
  const [selectedArea, setSelectedArea] = useState('face');
  const [selectedSessions, setSelectedSessions] = useState(6);

  // Treatments Configuration
  const treatmentsConfig = {
    celebrity: {
      name: 'Celebrity Skincare & Glow',
      basePrice: 8500,
      description: 'Signature tailored treatment combining red-carpet peel, oxygen infusion, and bespoke nutrient serums to give an instant celebrity glow.',
      benefits: ['Instant skin brightness', 'Evens out skin tone', 'No downtime, perfect before events'],
      downtime: 'Zero downtime',
      pain: 'Soothing and relaxing',
      interval: '3-4 weeks gap recommended'
    },
    ultherapy: {
      name: 'Ultherapy Skin Lifting',
      basePrice: 45000,
      description: 'US FDA-approved non-invasive ultrasound therapy to lift and tighten the skin on the face, neck, chin, and brow.',
      benefits: ['Lifts sagging skin & jowls', 'Stimulates deep natural collagen', 'Single-session results lasting 1-2 years'],
      downtime: 'Minimal swelling for 24 hours',
      pain: 'Mild tingling/warmth (topical numbing applied)',
      interval: 'Once in 12-18 months'
    },
    laser: {
      name: 'Laser Rejuvenation',
      basePrice: 12000,
      description: 'High-precision Q-Switched Nd:YAG laser to resolve pigmentation, age spots, and stimulate structural skin remodeling.',
      benefits: ['Clears melasma and hyperpigmentation', 'Shrinks open pores', 'Refines rough skin texture'],
      downtime: 'Mild redness for 2-6 hours',
      pain: 'Mild snap sensation (cooling gel applied)',
      interval: '4 weeks gap between sessions'
    }
  };

  const areaMultipliers = {
    face: { name: 'Face Only', mult: 1.0 },
    'face-neck': { name: 'Face & Neck', mult: 1.35 },
    'full-face-neck-deco': { name: 'Face, Neck & Decolletage', mult: 1.65 }
  };

  const getDiscountRate = (sessions) => {
    if (sessions >= 12) return 0.25;
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

  // Skin Assessment State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [answers, setAnswers] = useState({
    concern: '',
    sensitivity: '',
    exposure: ''
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  const handleAssessmentAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (key === 'concern') {
      setAssessmentStep(2);
    } else if (key === 'sensitivity') {
      setAssessmentStep(3);
    } else if (key === 'exposure') {
      // Analyze results
      let recommended = '';
      let description = '';
      let tips = '';

      if (newAnswers.concern === 'sagging') {
        recommended = 'Ultherapy Skin Lifting';
        description = 'Your primary concern is skin laxity and definition. Ultherapy targets the deep SMAS layer of your skin to naturally lift and tighten sagging contours.';
        tips = 'Pair this with regular hydration and collagen-boosting topical peptides. Sun protection is key to maintaining results.';
      } else if (newAnswers.concern === 'pigmentation') {
        recommended = 'Laser Rejuvenation (Q-Switched)';
        description = 'For uneven tone and pigmentation, targeted Nd:YAG laser treatments will shatter melanin deposits safely without harming the surrounding tissues.';
        tips = 'Apply broad-spectrum SPF 50 every 3 hours outdoors and avoid direct sun exposure for 48 hours post-laser.';
      } else {
        recommended = 'Celebrity Skincare & Glow Therapy';
        description = 'For dullness or texture, our tailored micro-peeling and nutrient infusion treatments will restore instant radiance and glow.';
        tips = 'Drink 3L of water daily and include active Vitamin C in your night skincare routine to support cellular brightness.';
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
    setAnswers({ concern: '', sensitivity: '', exposure: '' });
    setAssessmentResult(null);
    setAssessmentStep(1);
  };

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'Celebrity Skincare & Glow',
    doctor: 'Dr. Rashmi Shetty',
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
    // Real-time validation clearance
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
      tempErrors.date = 'Preferred date is required.';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = 'Appointment date cannot be in the past.';
      }
    }

    if (!form.consent) {
      tempErrors.consent = 'You must consent to clinical communication.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const refNumber = 'REVA-' + Math.floor(100000 + Math.random() * 900000);
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
      treatment: 'Celebrity Skincare & Glow',
      doctor: 'Dr. Rashmi Shetty',
      consent: false
    });
    setBookingConfirmation(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-[#332A2B] font-sans antialiased overflow-x-hidden selection:bg-[#B76E79]/20 selection:text-[#8A4F58]">
      {/* Import Custom Font style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        body {
          font-family: 'Outfit', sans-serif;
        }
      `}} />

      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-[#FFF5F5]/90 backdrop-blur-md px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] text-[#B76E79]">
              <Sparkles className="w-6 h-6" />
            </span>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#8A4F58] block">REVA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-semibold -mt-1 block">Health & Skin</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-semibold hover:text-[#B76E79] transition-colors">Dr. Shetty</a>
            <a href="#treatments" className="text-sm font-semibold hover:text-[#B76E79] transition-colors">Treatments</a>
            <a href="#assessment" className="text-sm font-semibold hover:text-[#B76E79] transition-colors">Skin Assessment</a>
            <a href="#results" className="text-sm font-semibold hover:text-[#B76E79] transition-colors">Results</a>
            <a href="#testimonials" className="text-sm font-semibold hover:text-[#B76E79] transition-colors">Reviews</a>
            <a href="#booking-form" className="text-sm font-semibold hover:text-[#B76E79] transition-colors">Enquiry</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#booking-form" 
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#8A4F58] bg-[#FFF5F5] py-2 px-5 rounded-full shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] transition-all"
            >
              <Phone className="w-4 h-4 text-[#B76E79]" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-2 rounded-xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] text-[#B76E79]"
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {navOpen && (
          <div className="md:hidden mt-4 p-4 rounded-3xl bg-[#FFF5F5] shadow-[inset_4px_4px_8px_#ebd6d6,inset_-4px_-4px_8px_#ffffff] space-y-4">
            <a href="#about" onClick={() => setNavOpen(false)} className="block text-sm font-semibold p-2 rounded-lg hover:bg-white/50">Dr. Shetty</a>
            <a href="#treatments" onClick={() => setNavOpen(false)} className="block text-sm font-semibold p-2 rounded-lg hover:bg-white/50">Treatments</a>
            <a href="#assessment" onClick={() => setNavOpen(false)} className="block text-sm font-semibold p-2 rounded-lg hover:bg-white/50">Skin Assessment</a>
            <a href="#results" onClick={() => setNavOpen(false)} className="block text-sm font-semibold p-2 rounded-lg hover:bg-white/50">Results</a>
            <a href="#testimonials" onClick={() => setNavOpen(false)} className="block text-sm font-semibold p-2 rounded-lg hover:bg-white/50">Reviews</a>
            <a href="#booking-form" onClick={() => setNavOpen(false)} className="block text-sm font-semibold p-2 rounded-lg hover:bg-white/50">Enquiry</a>
            <a 
              href="#booking-form" 
              onClick={() => setNavOpen(false)} 
              className="flex items-center justify-center space-x-2 text-sm font-bold text-[#8A4F58] bg-[#FFF5F5] py-2 px-5 rounded-full shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] w-full"
            >
              <Phone className="w-4 h-4 text-[#B76E79]" />
              <span>Book Appointment</span>
            </a>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5F5] shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-[#B76E79] text-sm font-bold">
              <Award className="w-4 h-4" />
              <span>Celebrity Preferred Aesthetics Clinic</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#8A4F58] leading-tight tracking-tight">
              Celebrity Skincare & <span className="text-[#B76E79]">Sculpting</span> for Timeless Radiance
            </h1>
            
            <p className="text-lg text-[#5A4E50] max-w-xl">
              Experience the art of clinical beauty under the personal care of Dr. Rashmi Shetty. Unleash your skin's true brilliance with world-class non-surgical lifting and rejuvenation in Banjara Hills.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#booking-form" 
                className="bg-gradient-to-br from-[#E2A69A] to-[#B76E79] text-white font-bold rounded-full px-8 py-4 text-center shadow-[4px_4px_10px_rgba(183,110,121,0.4)] hover:shadow-[5px_5px_15px_rgba(183,110,121,0.5)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Schedule Executive Consultation
              </a>
              <a 
                href="#treatments" 
                className="inline-flex items-center justify-center space-x-2 text-[#8A4F58] bg-[#FFF5F5] font-bold rounded-full px-8 py-4 shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] transition-all duration-200"
              >
                <span>View Treatments</span>
                <ChevronRight className="w-4 h-4 text-[#B76E79]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-4 rounded-[40px] bg-[#FFF5F5] shadow-[8px_8px_16px_#ebd6d6,-8px_-8px_16px_#ffffff]">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800" 
                  alt="Premium Skin Care Treatment Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Neumorphic Floating Badges */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] flex items-center space-x-3 max-w-[200px]">
              <div className="p-2 rounded-xl bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-[#B76E79]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-[#8A4F58]">US FDA</span>
                <span className="block text-[10px] text-[#5A4E50]">Approved Devices</span>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] flex items-center space-x-3 max-w-[200px]">
              <div className="p-2 rounded-xl bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-[#B76E79]">
                <Heart className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="block font-bold text-xs text-[#8A4F58]">Artist Touch</span>
                <span className="block text-[10px] text-[#5A4E50]">Natural Contours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-8 px-6 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto p-8 rounded-3xl bg-[#FFF5F5] shadow-[inset_5px_5px_10px_#ebd6d6,inset_-5px_-5px_10px_#ffffff]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#8A4F58]">20+</span>
              <span className="block text-xs uppercase tracking-wider text-[#B76E79] font-semibold font-sans">Years of Excellence</span>
            </div>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#8A4F58]">15,000+</span>
              <span className="block text-xs uppercase tracking-wider text-[#B76E79] font-semibold font-sans">Skin Solutions</span>
            </div>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#8A4F58]">50+</span>
              <span className="block text-xs uppercase tracking-wider text-[#B76E79] font-semibold font-sans">Celebrity Clients</span>
            </div>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#8A4F58]">100%</span>
              <span className="block text-xs uppercase tracking-wider text-[#B76E79] font-semibold font-sans">Safety Record</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER BIO */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="p-4 rounded-[40px] bg-[#FFF5F5] shadow-[8px_8px_16px_#ebd6d6,-8px_-8px_16px_#ffffff]">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Rashmi Shetty Portrait"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/20 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-[#B76E79] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Lead Dermatologist</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8A4F58]">
              The Aesthetic Visionary: <span className="text-[#B76E79]">Dr. Rashmi Shetty</span>
            </h2>
            
            <div className="space-y-4 text-base text-[#5A4E50]">
              <p>
                Dr. Rashmi Shetty is an internationally renowned dermatologist, aesthetic medicine pioneer, and acclaimed author with over two decades of practice. Known for her artistic touch and precise clinical outcomes, she is the trusted skincare advisor to India's leading film stars, tech founders, and leaders.
              </p>
              <p>
                At Reva Health & Skin, she champions the philosophy of **"Graceful Enhancements"** — optimizing and tightening your natural facial structure without modifying your core identity. She leads an expert team of certified clinicians operating the industry's most advanced US FDA-approved ultrasound and laser technologies.
              </p>
              <p className="font-semibold text-[#8A4F58] italic border-l-2 border-[#B76E79] pl-4">
                "Beautiful skin is a reflection of overall health, deep cell restructuring, and strategic contour preservation."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#B76E79] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-sm text-[#8A4F58]">Expert Injector & Author</span>
                  <span className="block text-xs text-[#5A4E50]">Global speaker on aesthetic innovations.</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#B76E79] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-sm text-[#8A4F58]">Pioneered SMAS Lifting</span>
                  <span className="block text-xs text-[#5A4E50]">Specialize in high-frequency ultrasound lifts.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS & SERVICES SELECTOR */}
      <section id="treatments" className="py-20 px-6 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#B76E79] font-bold block">Interactive Estimation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8A4F58]">
              Personalized Treatment Estimator
            </h2>
            <p className="text-sm text-[#5A4E50]">
              Select a specialized clinical treatment, preferred coverage area, and package duration to review immediate cost estimates and clinical insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Control Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B76E79] font-bold mb-3">1. Select Specialized Treatment</label>
                <div className="space-y-2">
                  {Object.entries(treatmentsConfig).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTreatment(key)}
                      className={`w-full p-4 rounded-2xl flex items-center justify-between text-left transition-all duration-200 ${
                        selectedTreatment === key
                          ? 'bg-[#FFF5F5] text-[#8A4F58] shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff] border-l-4 border-[#B76E79]'
                          : 'bg-[#FFF5F5] hover:bg-white/50 text-[#5A4E50] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff]'
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-sm">{item.name}</span>
                        <span className="block text-[11px] text-[#8A4E50] mt-0.5">Base from ₹{item.basePrice.toLocaleString()} / session</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-[#B76E79] transition-transform ${selectedTreatment === key ? 'translate-x-1' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B76E79] font-bold mb-3">2. Select Coverage Area</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(areaMultipliers).map(([key, area]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition-all duration-200 ${
                        selectedArea === key
                          ? 'bg-[#FFF5F5] text-[#8A4F58] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff]'
                          : 'bg-[#FFF5F5] hover:bg-white/50 text-[#5A4E50] shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff]'
                      }`}
                    >
                      {area.name} (x{area.mult})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B76E79] font-bold mb-3">3. Package Sessions ({selectedSessions} Sessions)</label>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#5A4E50]">Single Session</span>
                  <span className="text-xs font-bold text-[#8A4F58]">
                    {selectedSessions >= 6 ? `${getDiscountRate(selectedSessions)*100}% Group Discount Applied` : 'Select for discounts'}
                  </span>
                  <span className="text-xs text-[#5A4E50]">12 Sessions Pack</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={selectedSessions}
                  onChange={(e) => setSelectedSessions(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg bg-[#ebd6d6] appearance-none cursor-pointer accent-[#B76E79] focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-[#B76E79] font-bold mt-2">
                  <span>1 session</span>
                  <span>3 sessions (-10%)</span>
                  <span>6 sessions (-20%)</span>
                  <span>12 sessions (-25%)</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#ebd6d6]/60 pb-4 gap-2">
                  <div>
                    <h3 className="font-extrabold text-lg text-[#8A4F58]">
                      {treatmentsConfig[selectedTreatment].name}
                    </h3>
                    <p className="text-xs text-[#B76E79] font-medium">{areaMultipliers[selectedArea].name} package</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-xs font-bold text-[#B76E79]">
                    {selectedSessions} Session{selectedSessions > 1 ? 's' : ''} Plan
                  </span>
                </div>

                <p className="text-xs text-[#5A4E50]">
                  {treatmentsConfig[selectedTreatment].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="block text-[11px] uppercase tracking-wider text-[#B76E79] font-bold">Key Benefits</span>
                    <ul className="space-y-1">
                      {treatmentsConfig[selectedTreatment].benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-[#5A4E50] flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-[#B76E79] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 p-4 rounded-2xl bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff]">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#5A4E50]">Expected Downtime:</span>
                      <span className="font-bold text-[#8A4F58]">{treatmentsConfig[selectedTreatment].downtime}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#5A4E50]">Comfort Level:</span>
                      <span className="font-bold text-[#8A4F58]">{treatmentsConfig[selectedTreatment].pain}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#5A4E50]">Session Frequency:</span>
                      <span className="font-bold text-[#8A4F58]">{treatmentsConfig[selectedTreatment].interval}</span>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-[#ebd6d6]/60 pt-4 space-y-2">
                  <div className="flex justify-between items-center text-xs text-[#5A4E50]">
                    <span>Rate per session:</span>
                    <span>₹{priceBreakdown.perSession.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#5A4E50]">
                    <span>Subtotal ({selectedSessions} sessions):</span>
                    <span>₹{priceBreakdown.subtotal.toLocaleString()}</span>
                  </div>
                  {priceBreakdown.discount > 0 && (
                    <div className="flex justify-between items-center text-xs text-green-600 font-semibold">
                      <span>Package Discount ({priceBreakdown.discountRate}%):</span>
                      <span>-₹{priceBreakdown.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-xs text-[#5A4E50]">
                    <span>Clinical GST (18%):</span>
                    <span>₹{priceBreakdown.gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#ebd6d6]/40 pt-2 text-base font-extrabold text-[#8A4F58]">
                    <span>Estimated Investment:</span>
                    <span>₹{priceBreakdown.total.toLocaleString()}*</span>
                  </div>
                  <span className="block text-[10px] text-right text-[#B76E79] italic font-sans">*Prices are approximate. Detailed assessment done during consultation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SKIN ASSESSMENT QUESTIONNAIRE */}
      <section id="assessment" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B76E79] font-bold block">Smart Evaluation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8A4F58]">3-Step Skin Assessment</h2>
            <p className="text-sm text-[#5A4E50] max-w-lg mx-auto">
              Take our interactive medical-grade quiz to outline your dermatological concerns and receive an instant treatment recommendation.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF5F5] shadow-[8px_8px_16px_#ebd6d6,-8px_-8px_16px_#ffffff] text-left min-h-[360px] flex flex-col justify-between">
            {assessmentStep === 1 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#ebd6d6]/60 pb-3">
                  <h3 className="font-bold text-lg text-[#8A4F58]">Step 1: Identify Skin Focus Area</h3>
                  <span className="text-xs font-semibold text-[#B76E79]">1 of 3</span>
                </div>
                <p className="text-sm text-[#5A4E50]">What is the primary aesthetic result you are looking to achieve?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'sagging')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    Tighten sagging jowls, neck, or defined jawline
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'pigmentation')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    Clear melasma, dark spots, or uneven patches
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'dullness')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    Restore glow, reduce dullness, and smooth texture
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('concern', 'finelines')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    Smooth out fine lines around eyes & forehead
                  </button>
                </div>
              </div>
            )}

            {assessmentStep === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#ebd6d6]/60 pb-3">
                  <h3 className="font-bold text-lg text-[#8A4F58]">Step 2: Skin Sensitivity Level</h3>
                  <span className="text-xs font-semibold text-[#B76E79]">2 of 3</span>
                </div>
                <p className="text-sm text-[#5A4E50]">How does your skin react to cosmetic products or physical stimuli?</p>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => handleAssessmentAnswer('sensitivity', 'high')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    **Highly Sensitive**: Flushes easily, reactive to standard creams or threading.
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('sensitivity', 'medium')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    **Normal/Balanced**: Tolerates actives well, occasional redness that subsides fast.
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('sensitivity', 'low')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    **Resilient**: Hard to irritate, adapts easily to clinical chemical peels.
                  </button>
                </div>
              </div>
            )}

            {assessmentStep === 3 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#ebd6d6]/60 pb-3">
                  <h3 className="font-bold text-lg text-[#8A4F58]">Step 3: Daily UV Exposure</h3>
                  <span className="text-xs font-semibold text-[#B76E79]">3 of 3</span>
                </div>
                <p className="text-sm text-[#5A4E50]">What is your typical exposure to direct sunlight or computer screen blue light?</p>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => handleAssessmentAnswer('exposure', 'high')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    **High**: Spend 2+ hours daily in open sun or driving.
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('exposure', 'moderate')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    **Moderate**: Average commute and screen exposure, brief walking outside.
                  </button>
                  <button 
                    onClick={() => handleAssessmentAnswer('exposure', 'low')}
                    className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-sm font-semibold text-[#8A4F58] text-left transition-all"
                  >
                    **Low**: Work mostly indoors with minimal sun, good sunscreen discipline.
                  </button>
                </div>
              </div>
            )}

            {assessmentStep === 4 && assessmentResult && (
              <div className="space-y-6 py-2">
                <div className="flex justify-between items-center border-b border-[#ebd6d6]/60 pb-3">
                  <h3 className="font-extrabold text-lg text-[#8A4F58] flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-[#B76E79]" />
                    <span>Your Recommended Care Routine</span>
                  </h3>
                  <button 
                    onClick={resetAssessment}
                    className="text-xs font-bold text-[#B76E79] hover:underline"
                  >
                    Retake Quiz
                  </button>
                </div>
                
                <div className="p-6 rounded-2xl bg-[#FFF5F5] shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff]">
                  <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold block mb-1">Recommended Treatment</span>
                  <span className="block text-xl font-extrabold text-[#8A4F58]">{assessmentResult.recommended}</span>
                  <p className="text-xs text-[#5A4E50] mt-3 leading-relaxed">
                    {assessmentResult.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border-l-4 border-yellow-500">
                  <span className="block font-bold text-xs text-[#8A4F58] mb-1">Dr. Shetty's Advice for you:</span>
                  <p className="text-xs text-[#5A4E50] italic leading-relaxed">
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
                    className="bg-[#FFF5F5] text-[#8A4F58] font-bold rounded-full px-6 py-3 shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-xs transition-all flex items-center space-x-1.5"
                  >
                    <span>Proceed to Book {assessmentResult.recommended}</span>
                    <ArrowRight className="w-4.5 h-4.5 text-[#B76E79]" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. RESULTS / BEFORE & AFTER SHOWCASE */}
      <section id="results" className="py-20 px-6 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#B76E79] font-bold block">Clinical Evidence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8A4F58]">Contour & Texture Case Studies</h2>
            <p className="text-sm text-[#5A4E50]">
              Real patient results demonstrating natural structure lifting and skin clearing under our custom-planned aesthetic pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="p-4 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-inner mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                  alt="Ultherapy contouring results"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-[#8A4F58] text-white text-[10px] font-bold px-2 py-1 rounded">3 Months Post Lift</span>
              </div>
              <div className="text-left space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#FFF5F5] shadow-[inset_1px_1px_2px_#ebd6d6,inset_-1px_-1px_2px_#ffffff] text-[10px] font-bold text-[#B76E79] uppercase">Ultherapy Jawline Lift</span>
                <h3 className="font-extrabold text-sm text-[#8A4F58]">Subtle definition & skin tightening</h3>
                <p className="text-xs text-[#5A4E50]">
                  Single session targeting the deep sub-mental layers. Restored clean definition without any surgical recovery period.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="p-4 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-inner mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                  alt="Pigmentation clearance results"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-[#8A4F58] text-white text-[10px] font-bold px-2 py-1 rounded">After 4 Sessions</span>
              </div>
              <div className="text-left space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#FFF5F5] shadow-[inset_1px_1px_2px_#ebd6d6,inset_-1px_-1px_2px_#ffffff] text-[10px] font-bold text-[#B76E79] uppercase">Laser Rejuvenation</span>
                <h3 className="font-extrabold text-sm text-[#8A4F58]">Hyperpigmentation & melasma reduction</h3>
                <p className="text-xs text-[#5A4E50]">
                  Focused Q-switched treatment. Melasma patches faded by 85%, resulting in a highly uniform, clinical skin complexion.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="p-4 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-inner mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800" 
                  alt="Celebrity glow facial outcomes"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-[#8A4F58] text-white text-[10px] font-bold px-2 py-1 rounded">Immediate Result</span>
              </div>
              <div className="text-left space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#FFF5F5] shadow-[inset_1px_1px_2px_#ebd6d6,inset_-1px_-1px_2px_#ffffff] text-[10px] font-bold text-[#B76E79] uppercase">Celebrity Glow Facial</span>
                <h3 className="font-extrabold text-sm text-[#8A4F58]">Instant cellular radiance</h3>
                <p className="text-xs text-[#5A4E50]">
                  Advanced oxygen peel and deep serum infusions completed 24 hours prior to a red-carpet event. High-impact hydration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#B76E79] font-bold block">Patient Love</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8A4F58]">Verified Clinical Reviews</h2>
            <p className="text-sm text-[#5A4E50]">
              Discover why over 15,000 clients, including high-profile personalities in Hyderabad, trust Reva Health & Skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                </div>
                <p className="text-xs text-[#5A4E50] leading-relaxed italic">
                  "Dr. Rashmi Shetty's Ultherapy treatment completely redefined my jawline without surgery! The results were subtle at first but after 3 months, my profile is completely lifted. Truly worth every rupee."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-6 border-t border-[#ebd6d6]/60 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#ebd6d6] flex items-center justify-center font-bold text-[#8A4F58]">PS</div>
                <div>
                  <span className="block font-bold text-xs text-[#8A4F58]">Priya Sharma</span>
                  <span className="block text-[10px] text-[#B76E79]">Verified Patient, Jubilee Hills</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                </div>
                <p className="text-xs text-[#5A4E50] leading-relaxed italic">
                  "The celebrity glow facial before my wedding was outstanding. The glow was completely natural and the skin felt incredibly plump and healthy. Every guest remarked on my skin. Dr. Rashmi is absolute gold."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-6 border-t border-[#ebd6d6]/60 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#ebd6d6] flex items-center justify-center font-bold text-[#8A4F58]">RM</div>
                <div>
                  <span className="block font-bold text-xs text-[#8A4F58]">Rohan Malhotra</span>
                  <span className="block text-[10px] text-[#B76E79]">Verified Patient, Gachibowli</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF5F5] shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                </div>
                <p className="text-xs text-[#5A4E50] leading-relaxed italic">
                  "I was highly skeptical about treating my melasma since it always returned. Dr. Rashmi Shetty set a customized laser schedule and strict home routine. 4 sessions in, my patches have cleared up massively."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-6 border-t border-[#ebd6d6]/60 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#ebd6d6] flex items-center justify-center font-bold text-[#8A4F58]">KR</div>
                <div>
                  <span className="block font-bold text-xs text-[#8A4F58]">Kavitha Reddy</span>
                  <span className="block text-[10px] text-[#B76E79]">Verified Patient, Banjara Hills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING / ENQUIRY FORM */}
      <section id="booking-form" className="py-20 px-6 bg-[#FFF5F5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B76E79] font-bold block">Direct Access</span>
            <h2 className="text-3xl font-extrabold text-[#8A4F58]">Executive Consultation Booking</h2>
            <p className="text-xs text-[#5A4E50]">
              Secure your personalized skincare consultation session. All submissions are processed directly by our executive clinical front desk.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF5F5] shadow-[8px_8px_16px_#ebd6d6,-8px_-8px_16px_#ffffff]">
            {bookingConfirmation ? (
              <div className="text-center space-y-6 py-6">
                <div className="w-16 h-16 rounded-full bg-[#FFF5F5] shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff] text-green-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-[#8A4F58]">Consultation Requested!</h3>
                  <p className="text-xs text-[#5A4E50]">
                    Your request has been successfully registered. Our coordinator will call to confirm your appointment slot.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFF5F5] shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff] max-w-md mx-auto text-left space-y-3">
                  <div className="flex justify-between border-b border-[#ebd6d6]/60 pb-2">
                    <span className="text-[11px] font-bold text-[#B76E79] uppercase">Reference ID</span>
                    <span className="text-xs font-bold text-[#8A4F58]">{bookingConfirmation.refNumber}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A4E50]">Patient Name:</span>
                    <span className="font-semibold text-[#8A4F58]">{bookingConfirmation.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A4E50]">Contact Phone:</span>
                    <span className="font-semibold text-[#8A4F58]">{bookingConfirmation.phone}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A4E50]">Preferred Doctor:</span>
                    <span className="font-semibold text-[#8A4F58]">{bookingConfirmation.doctor}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A4E50]">Target Treatment:</span>
                    <span className="font-semibold text-[#8A4F58]">{bookingConfirmation.treatment}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#5A4E50]">Requested Date:</span>
                    <span className="font-semibold text-[#8A4F58]">{bookingConfirmation.date}</span>
                  </div>
                </div>

                <button
                  onClick={resetBookingForm}
                  className="bg-[#FFF5F5] text-[#B76E79] font-bold rounded-full px-6 py-3 shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] text-xs transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-xs font-bold text-[#B76E79] uppercase tracking-wider">Child/Adult Patient Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#B76E79]" />
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        className="w-full bg-[#FFF5F5] rounded-xl pl-11 pr-4 py-3 shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] border-none focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-xs text-[#332A2B]"
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-red-600 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-xs font-bold text-[#B76E79] uppercase tracking-wider">Contact Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#B76E79]" />
                      <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-[#FFF5F5] rounded-xl pl-11 pr-4 py-3 shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] border-none focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-xs text-[#332A2B]"
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-600 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-bold text-[#B76E79] uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#B76E79]" />
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="patient@revahealth.com"
                        className="w-full bg-[#FFF5F5] rounded-xl pl-11 pr-4 py-3 shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] border-none focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-xs text-[#332A2B]"
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-600 font-medium">{errors.email}</p>}
                  </div>

                  {/* Date */}
                  <div className="space-y-1">
                    <label htmlFor="date" className="block text-xs font-bold text-[#B76E79] uppercase tracking-wider">Preferred Booking Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#B76E79]" />
                      <input 
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFF5F5] rounded-xl pl-11 pr-4 py-3 shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] border-none focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-xs text-[#332A2B]"
                      />
                    </div>
                    {errors.date && <p className="text-[10px] text-red-600 font-medium">{errors.date}</p>}
                  </div>

                  {/* Treatment Interest */}
                  <div className="space-y-1">
                    <label htmlFor="treatment" className="block text-xs font-bold text-[#B76E79] uppercase tracking-wider">Treatment Interest</label>
                    <div className="relative">
                      <Sliders className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#B76E79]" />
                      <select 
                        id="treatment"
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFF5F5] rounded-xl pl-11 pr-4 py-3 shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] border-none focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-xs text-[#332A2B] appearance-none"
                      >
                        <option>Celebrity Skincare & Glow</option>
                        <option>Ultherapy Skin Lifting</option>
                        <option>Laser Rejuvenation (Q-Switched)</option>
                        <option>Executive Dermatology Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Doctor Selector */}
                  <div className="space-y-1">
                    <label htmlFor="doctor" className="block text-xs font-bold text-[#B76E79] uppercase tracking-wider">Preferred Doctor</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#B76E79]" />
                      <select 
                        id="doctor"
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFF5F5] rounded-xl pl-11 pr-4 py-3 shadow-[inset_2px_2px_5px_#ebd6d6,inset_-2px_-2px_5px_#ffffff] border-none focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-xs text-[#332A2B] appearance-none"
                      >
                        <option>Dr. Rashmi Shetty</option>
                        <option>Senior Consultant Dermatologist</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1">
                  <label className="flex items-center space-x-2 cursor-pointer py-2">
                    <input 
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded bg-[#FFF5F5] border-[#ebd6d6] text-[#B76E79] focus:ring-[#B76E79] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#5A4E50]">
                      I authorize Reva Health & Skin representatives to call/message me regarding clinical schedules.
                    </span>
                  </label>
                  {errors.consent && <p className="text-[10px] text-red-600 font-medium">{errors.consent}</p>}
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-br from-[#E2A69A] to-[#B76E79] text-white font-bold rounded-full px-8 py-4 shadow-[4px_4px_10px_rgba(183,110,121,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Clinical Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Consultation Booking</span>
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
      <footer className="bg-[#FFF5F5] border-t border-[#ebd6d6]/60 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#ebd6d6]/60 pb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-[#FFF5F5] shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] text-[#B76E79]">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="font-extrabold text-lg text-[#8A4F58] block">REVA</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-semibold -mt-1 block">Health & Skin</span>
              </div>
            </div>
            
            <p className="text-xs text-[#5A4E50] max-w-sm leading-relaxed">
              Premium non-surgical medical aesthetics under Dr. Rashmi Shetty. Restructuring face, body, and confidence with natural contour preservation and clinical safety.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-[#5A4E50]">
                <Phone className="w-4 h-4 text-[#B76E79]" />
                <a href="tel:+914044544335" className="hover:text-[#B76E79] font-semibold">+91 4044544335</a>
              </div>
              <div className="flex items-start space-x-2 text-[#5A4E50]">
                <MapPin className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span className="leading-relaxed">3rd Floor, Merchant Tower, Road No. 4, Banjara Hills, Hyderabad (Above Origins)</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="text-xs font-bold text-[#8A4F58] uppercase tracking-wider border-b border-[#ebd6d6]/40 pb-2">Clinical Hours</h3>
            <ul className="space-y-2 text-xs text-[#5A4E50]">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="font-semibold">10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between text-[#B76E79]">
                <span>Sunday:</span>
                <span className="font-semibold">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Emergency Contact:</span>
                <span className="font-semibold">+91 4044544335</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h3 className="text-xs font-bold text-[#8A4F58] uppercase tracking-wider border-b border-[#ebd6d6]/40 pb-2">Clinic Location Map</h3>
            <div className="p-2 rounded-2xl bg-[#FFF5F5] shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff] aspect-video flex flex-col items-center justify-center text-center">
              <MapPin className="w-8 h-8 text-[#B76E79] mb-2" />
              <span className="block text-xs font-bold text-[#8A4F58]">Banjara Hills, Road No. 4</span>
              <span className="block text-[10px] text-[#5A4E50] mt-0.5">Above Origins, Merchant Tower</span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 inline-flex items-center space-x-1.5 text-[10px] font-bold text-[#8A4F58] px-3 py-1.5 rounded-full bg-[#FFF5F5] shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] hover:shadow-[inset_1px_1px_2px_#ebd6d6,inset_-1px_-1px_2px_#ffffff] transition-all"
              >
                <span>Open in Google Maps</span>
                <Compass className="w-3 h-3 text-[#B76E79]" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#B76E79] pt-8">
          <span>&copy; 2026 Reva Health & Skin. All rights reserved.</span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Clinical Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

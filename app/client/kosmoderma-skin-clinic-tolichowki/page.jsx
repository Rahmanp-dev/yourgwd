"use client";

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Star, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Activity, 
  Smile, 
  Users, 
  Heart,
  Plus,
  Minus,
  AlertCircle
} from 'lucide-react';

// Treatment and Estimator options
const TREATMENTS = {
  peel: { 
    id: 'peel',
    name: 'Kosmo-Glow Chemical Peel', 
    basePrice: 3500, 
    duration: '45 mins',
    description: 'Advanced organic AHA/BHA peels targeting pigmentation, acne marks, and uneven skin tone.',
    category: 'Skin Glow'
  },
  laser: { 
    id: 'laser',
    name: 'Soprano Ice Platinum LHR', 
    basePrice: 5000, 
    duration: '60 mins',
    description: 'Painless US-FDA approved triple-wavelength laser hair reduction for permanent smooth skin.',
    category: 'Laser Care'
  },
  scar: { 
    id: 'scar',
    name: 'Acne Scar Resurfacing', 
    basePrice: 6500, 
    duration: '75 mins',
    description: 'Fractional CO2 laser combined with growth factors to deeply repair and smoothen crater scars.',
    category: 'Skin Repair'
  },
  prp: { 
    id: 'prp',
    name: 'Platelet-Rich Plasma (PRP)', 
    basePrice: 7500, 
    duration: '90 mins',
    description: 'Autologous platelet injection to stimulate hair follicle growth and thick density.',
    category: 'Hair Restoration'
  },
  antiaging: { 
    id: 'antiaging',
    name: 'Kosmo Botox & Dermal Fillers', 
    basePrice: 12000, 
    duration: '45 mins',
    description: 'Premium US-FDA approved neuromodulators for wrinkle relaxation and contour sculpting.',
    category: 'Anti-Aging'
  }
};

const AREAS = {
  small: { id: 'small', name: 'Small Area (Face / Underarms)', multiplier: 1.0 },
  medium: { id: 'medium', name: 'Medium Area (Half Arms / Half Legs)', multiplier: 1.5 },
  large: { id: 'large', name: 'Large Area (Full Back / Full Body)', multiplier: 2.5 }
};

const SESSIONS_OPTIONS = [
  { value: 1, label: 'Single Session', discount: 0 },
  { value: 3, label: '3-Session Pack (10% Off)', discount: 0.10 },
  { value: 6, label: '6-Session Pack (20% Off)', discount: 0.20 }
];

export default function KosmodermaPage() {
  // Estimator State
  const [estTreatment, setEstTreatment] = useState('peel');
  const [estArea, setEstArea] = useState('small');
  const [estSessions, setEstSessions] = useState(3);
  const [estimationApplied, setEstimationApplied] = useState(false);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '11:00 AM - 01:00 PM',
    treatment: 'peel',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Services Accordion/Toggle
  const [expandedService, setExpandedService] = useState('peel');

  // Hydration protection for date picker
  const [minDateStr, setMinDateStr] = useState('');

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDateStr(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Price Calculation details
  const selectedT = TREATMENTS[estTreatment];
  const selectedA = AREAS[estArea];
  const ratePerSession = selectedT.basePrice * selectedA.multiplier;
  const rawSubtotal = ratePerSession * estSessions;
  
  const discountOption = SESSIONS_OPTIONS.find(o => o.value === estSessions) || SESSIONS_OPTIONS[0];
  const discountAmount = Math.round(rawSubtotal * discountOption.discount);
  const subtotalAfterDiscount = rawSubtotal - discountAmount;
  const gstAmount = Math.round(subtotalAfterDiscount * 0.18);
  const finalPrice = subtotalAfterDiscount + gstAmount;

  // Sync Estimator to Form
  const handleApplyEstimationToBooking = () => {
    setFormData(prev => ({
      ...prev,
      treatment: estTreatment,
      notes: `Customized Plan: ${selectedT.name} (${selectedA.name}) for ${estSessions} session(s). Estimated cost: ₹${finalPrice.toLocaleString('en-IN')}.`
    }));
    setEstimationApplied(true);
    setTimeout(() => setEstimationApplied(false), 2500);

    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Appointment date cannot be in the past';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: '11:00 AM - 01:00 PM',
      treatment: 'peel',
      notes: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="bg-[#F5EBE6] text-[#2D2320] selection:bg-[#C2593F] selection:text-[#F5EBE6]">
      {/* Clinic Alert Banner */}
      <div className="bg-[#C2593F] text-[#F5EBE6] py-2.5 px-4 text-center font-semibold border-b-4 border-[#2D2320] text-sm tracking-wider">
        <span>⚡ KOSMODERMA TOLICHOWKI EXCLUSIVE: COMPLIMENTARY ADVANCED SKIN ANALYSIS WITH ANY BOOKING ⚡</span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#F5EBE6] border-b-4 border-[#2D2320] px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-[#F59E0B] p-2 rounded-xl border-2 border-[#2D2320] shadow-[2px_2px_0px_0px_#2D2320]">
              <Sparkles className="w-6 h-6 text-[#2D2320]" />
            </div>
            <div>
              <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#2D2320]">
                Kosmoderma
              </span>
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#C2593F]">
                Skin & Hair Clinic
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 font-semibold">
            <a href="#about" className="hover:text-[#C2593F] transition-colors">About</a>
            <a href="#estimator" className="hover:text-[#C2593F] transition-colors">Estimator</a>
            <a href="#services" className="hover:text-[#C2593F] transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-[#C2593F] transition-colors">Reviews</a>
            <a href="#footer" className="hover:text-[#C2593F] transition-colors">Contact</a>
          </nav>
          <div>
            <a 
              href="tel:9988776655" 
              className="inline-flex items-center space-x-2 bg-[#F59E0B] text-[#2D2320] font-bold py-2.5 px-4 md:px-5 rounded-xl border-2 border-[#2D2320] hover:bg-[#e0900a] transition-all shadow-[3px_3px_0px_0px_#2D2320] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2D2320]"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs md:text-sm font-mono font-black">9988776655</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4 border-b-4 border-[#2D2320]">
        {/* Background Retro Grid Details */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C2593F_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#C2593F] text-[#F5EBE6] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border-2 border-[#2D2320]">
              <Sparkles className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
              <span>Dermatology Redefined</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight tracking-tight text-[#2D2320]">
              Flawless Skin & Hair, <br />
              <span className="text-[#C2593F] underline decoration-wavy decoration-[#F59E0B]">Expertly Crafted.</span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-xl text-[#5A4B46]">
              Kosmoderma Tolichowki brings elite US-FDA approved skincare, painless laser treatments, and micro-precision hair transplantation directly to your neighborhood. Led by renowned dermatologists.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              {[
                { title: '15+ Years', desc: 'Clinically Proven' },
                { title: 'FDA Tech', desc: 'Approved Lasers' },
                { title: 'Dr. Chitra', desc: 'Top Dermatologist' },
                { title: '150k+', desc: 'Happy Skin Stories' }
              ].map((hl, i) => (
                <div key={i} className="bg-[#FAF4F0] p-3 rounded-2xl border-2 border-[#2D2320] shadow-[3px_3px_0px_0px_#C2593F]">
                  <span className="block text-lg font-display font-black text-[#C2593F]">{hl.title}</span>
                  <span className="text-xs font-bold text-[#5A4B46]">{hl.desc}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#booking-section"
                className="inline-flex items-center justify-center space-x-2 bg-[#C2593F] text-[#F5EBE6] font-display font-bold text-lg py-4 px-8 rounded-2xl border-3 border-[#2D2320] hover:bg-[#ac4e37] transition-all shadow-[5px_5px_0px_0px_#2D2320] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#2D2320]"
              >
                <Calendar className="w-5 h-5 text-[#F59E0B]" />
                <span>Book Free Consult</span>
              </a>
              <a 
                href="#estimator"
                className="inline-flex items-center justify-center space-x-2 bg-[#FAF4F0] text-[#2D2320] font-display font-bold text-lg py-4 px-8 rounded-2xl border-3 border-[#2D2320] hover:bg-[#f3e3d9] transition-all shadow-[5px_5px_0px_0px_#2D2320] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#2D2320]"
              >
                <span>Calculate Cost</span>
                <ArrowRight className="w-5 h-5 text-[#C2593F]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Visual elements surrounding the hero image frame */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F59E0B] rounded-full border-2 border-[#2D2320] z-20 flex items-center justify-center shadow-[2px_2px_0px_0px_#2D2320]">
              <Heart className="w-6 h-6 text-[#2D2320] fill-[#2D2320]" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C2593F] text-[#F5EBE6] py-2 px-4 rounded-xl border-2 border-[#2D2320] z-20 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#2D2320] uppercase tracking-wide">
              📍 Tolichowki Clinic
            </div>
            
            {/* Main Hero Image Frame */}
            <div className="rounded-[2.5rem] border-4 border-[#2D2320] overflow-hidden bg-[#FAF4F0] p-4 shadow-[8px_8px_0px_0px_#C2593F] transition-transform duration-300 hover:rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Kosmoderma Doctor Consulting Patient" 
                className="w-full h-[320px] md:h-[400px] object-cover rounded-[2rem] border-2 border-[#2D2320]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Doctor Section */}
      <section id="about" className="py-16 md:py-20 px-4 max-w-7xl mx-auto border-b-4 border-[#2D2320]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border-4 border-[#2D2320] overflow-hidden shadow-[6px_6px_0px_0px_#F59E0B]">
              <img 
                src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=500&h=600" 
                alt="Dr. Chitra Anand Chief Dermatologist" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="bg-[#FAF4F0] p-5 border-t-4 border-[#2D2320]">
                <h3 className="font-display font-black text-xl text-[#2D2320]">Dr. Chitra Anand</h3>
                <p className="text-xs font-mono font-bold text-[#C2593F] uppercase tracking-wider mb-2">Founder & Chief Dermatologist (MD, DPD - Cardiff)</p>
                <p className="text-sm font-medium text-[#5A4B46]">
                  Winner of multiple global aesthetic awards, pioneering laser tech in South India for over 20 years.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#F59E0B] text-[#2D2320] px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border-2 border-[#2D2320]">
              <Smile className="w-3 h-3 text-[#2D2320]" />
              <span>Safe. Proven. Trusted.</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-[#2D2320]">
              Where Advanced Medical Science Meets Premium Aesthetic Luxury.
            </h2>
            <p className="text-lg text-[#5A4B46] leading-relaxed">
              At Kosmoderma Tolichowki, we understand that your skin and hair are as unique as your DNA. Our dermatological interventions combine clinically validated diagnostics with state-of-the-art US-FDA approved technologies to deliver results that are visible, safe, and long-lasting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { 
                  title: 'US-FDA Laser Systems', 
                  desc: 'Soprano Ice Platinum & Lutronic Spectra platforms for safe skin restoration across all Indian skin tones.' 
                },
                { 
                  title: 'Medical Grade Cleanliness', 
                  desc: 'Rigorous medical protocols, completely sterile chambers, and single-use disposable diagnostic items.' 
                },
                { 
                  title: 'Tailored Treatment Charts', 
                  desc: 'No cookie-cutter therapies. Get a fully mapped out skincare schedule with targeted dietary prescriptions.' 
                },
                { 
                  title: 'Comprehensive Post-Care', 
                  desc: 'Dedicated recovery support, including medicated recovery lotions and clinical check-ups.' 
                }
              ].map((feat, i) => (
                <div key={i} className="flex space-x-3 items-start">
                  <div className="bg-[#C2593F] p-1.5 rounded-lg border-2 border-[#2D2320] text-[#F5EBE6] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#2D2320]">{feat.title}</h4>
                    <p className="text-sm text-[#5A4B46]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-16 md:py-20 px-4 bg-[#FAF4F0] border-b-4 border-[#2D2320]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center space-x-2 bg-[#C2593F] text-[#F5EBE6] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border-2 border-[#2D2320]">
              <Activity className="w-3.5 h-3.5" />
              <span>Transparant Cost Tool</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#2D2320]">
              Treatment Budget Planner
            </h2>
            <p className="text-sm md:text-base font-medium text-[#5A4B46]">
              Estimate the cost of your therapy based on selected body regions and treatment frequency. No hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#F5EBE6] p-6 md:p-8 rounded-3xl border-4 border-[#2D2320] shadow-[6px_6px_0px_0px_#2D2320] space-y-6">
              {/* Category selector */}
              <div>
                <label className="block text-sm font-mono font-bold uppercase text-[#C2593F] mb-3">1. Select Treatment Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.values(TREATMENTS).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setEstTreatment(t.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                        estTreatment === t.id
                          ? 'bg-[#C2593F] text-[#F5EBE6] border-[#2D2320] shadow-[3px_3px_0px_0px_#2D2320]'
                          : 'bg-[#FAF4F0] text-[#2D2320] border-[#2D2320] hover:bg-[#f3e3d9]'
                      }`}
                    >
                      <div>
                        <span className={`inline-block text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-full mb-2 ${
                          estTreatment === t.id ? 'bg-[#F59E0B] text-[#2D2320]' : 'bg-[#C2593F] text-[#F5EBE6]'
                        }`}>
                          {t.category}
                        </span>
                        <span className="block font-display font-black text-sm md:text-base leading-tight">{t.name}</span>
                      </div>
                      <span className="block text-xs font-bold mt-2 opacity-80">
                        Starts at ₹{t.basePrice.toLocaleString('en-IN')} / session
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area selector */}
              <div>
                <label className="block text-sm font-mono font-bold uppercase text-[#C2593F] mb-3">2. Choose Body Area / Scale</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.values(AREAS).map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setEstArea(a.id)}
                      className={`p-3 rounded-xl border-2 transition-all text-center ${
                        estArea === a.id
                          ? 'bg-[#C2593F] text-[#F5EBE6] border-[#2D2320] shadow-[2px_2px_0px_0px_#2D2320]'
                          : 'bg-[#FAF4F0] text-[#2D2320] border-[#2D2320] hover:bg-[#f3e3d9]'
                      }`}
                    >
                      <span className="block font-display font-bold text-sm">{a.name}</span>
                      <span className="block text-xs font-mono opacity-80 mt-1">x{a.multiplier} multiplier</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Count Option */}
              <div>
                <label className="block text-sm font-mono font-bold uppercase text-[#C2593F] mb-3">3. Choose Number of Sessions</label>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  {SESSIONS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setEstSessions(opt.value)}
                      className={`flex-1 p-3 rounded-xl border-2 transition-all text-center ${
                        estSessions === opt.value
                          ? 'bg-[#F59E0B] text-[#2D2320] border-[#2D2320] shadow-[2px_2px_0px_0px_#2D2320]'
                          : 'bg-[#FAF4F0] text-[#2D2320] border-[#2D2320] hover:bg-[#f3e3d9]'
                      }`}
                    >
                      <span className="block font-display font-black text-sm">{opt.label}</span>
                      <span className="block text-xs font-mono mt-0.5">
                        {opt.value} {opt.value === 1 ? 'visit' : 'visits'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Preview Receipts Card */}
            <div className="lg:col-span-5 bg-[#FAF4F0] p-6 md:p-8 rounded-3xl border-4 border-[#2D2320] shadow-[6px_6px_0px_0px_#C2593F] flex flex-col justify-between">
              <div>
                <div className="border-b-2 border-dashed border-[#2D2320] pb-4 mb-4">
                  <span className="text-xs font-mono font-bold text-[#C2593F] uppercase tracking-wider">Estimated Receipt</span>
                  <h3 className="font-display font-black text-2xl text-[#2D2320] mt-1">Treatment Cost Summary</h3>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-[#5A4B46]">Base Session Rate</span>
                    <span className="font-bold">₹{selectedT.basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[#5A4B46]">Area Factor ({selectedA.name.split(' ')[0]})</span>
                    <span className="font-bold">x{selectedA.multiplier.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[#5A4B46]">Sessions Chosen</span>
                    <span className="font-bold">x{estSessions}</span>
                  </div>
                  <div className="flex justify-between items-start border-t border-[#2D2320] pt-2">
                    <span className="text-[#5A4B46]">Gross Treatment Subtotal</span>
                    <span className="font-bold">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between items-start text-green-700 font-bold">
                      <span>Pachage Discount (-{(discountOption.discount * 100)}%)</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-start">
                    <span className="text-[#5A4B46]">GST (18% Integrated tax)</span>
                    <span className="font-bold">₹{gstAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="border-t-4 border-double border-[#2D2320] mt-6 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-display font-black text-base text-[#2D2320] uppercase">Estimated Total</span>
                    <span className="font-display font-black text-3xl text-[#C2593F]">₹{finalPrice.toLocaleString('en-IN')}*</span>
                  </div>
                  <span className="block text-[10px] text-right font-bold text-[#5A4B46] mt-1">*Excluding dynamic clinic discounts</span>
                </div>

                <div className="bg-[#F5EBE6] p-4 rounded-xl border-2 border-[#2D2320] mt-6 flex items-start space-x-2">
                  <Clock className="w-5 h-5 text-[#C2593F] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5A4B46] leading-relaxed">
                    <strong>Note:</strong> Pricing calculations are estimates for budgeting. Final medical protocols are charted post detailed dermatologist mapping during consultation.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleApplyEstimationToBooking}
                  className={`w-full py-4 px-6 rounded-2xl border-3 border-[#2D2320] font-display font-bold text-lg text-center transition-all ${
                    estimationApplied 
                      ? 'bg-green-600 text-[#F5EBE6] shadow-[2px_2px_0px_0px_#2D2320]' 
                      : 'bg-[#C2593F] text-[#F5EBE6] hover:bg-[#ac4e37] shadow-[5px_5px_0px_0px_#2D2320] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#2D2320]'
                  }`}
                >
                  {estimationApplied ? '✓ Calculation Linked!' : 'Apply & Book appointment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-16 md:py-20 px-4 max-w-7xl mx-auto border-b-4 border-[#2D2320]">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center space-x-2 bg-[#F59E0B] text-[#2D2320] px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border-2 border-[#2D2320]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Comprehensive Clinical Care</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#2D2320]">
            Signature Skincare Platforms
          </h2>
          <p className="text-base text-[#5A4B46] font-medium">
            Explore advanced solutions targeted at resolving persistent dermatological concerns, supervised by clinically trained experts.
          </p>
        </div>

        {/* Interactive Services Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            {Object.values(TREATMENTS).map((s) => (
              <button
                key={s.id}
                onClick={() => setExpandedService(s.id)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                  expandedService === s.id
                    ? 'bg-[#C2593F] text-[#F5EBE6] border-[#2D2320] shadow-[4px_4px_0px_0px_#2D2320]'
                    : 'bg-[#FAF4F0] text-[#2D2320] border-[#2D2320] hover:bg-[#f3e3d9]'
                }`}
              >
                <div>
                  <span className="block text-[10px] font-mono font-bold opacity-75 uppercase">{s.category}</span>
                  <span className="font-display font-black text-base md:text-lg">{s.name}</span>
                </div>
                <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${expandedService === s.id ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-[#FAF4F0] p-6 md:p-8 rounded-3xl border-4 border-[#2D2320] shadow-[6px_6px_0px_0px_#C2593F]">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#2D2320] pb-4">
                <div>
                  <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#C2593F] bg-[#F5EBE6] px-3 py-1 rounded-full border border-[#2D2320] mb-2">
                    {TREATMENTS[expandedService].category}
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-[#2D2320]">
                    {TREATMENTS[expandedService].name}
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="block text-xs text-[#5A4B46] font-mono">Sessions Duration</span>
                  <span className="font-display font-bold text-lg text-[#C2593F]">{TREATMENTS[expandedService].duration}</span>
                </div>
              </div>

              <p className="text-lg text-[#5A4B46] leading-relaxed">
                {TREATMENTS[expandedService].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F5EBE6] p-5 rounded-2xl border-2 border-[#2D2320]">
                <div>
                  <h4 className="font-display font-bold text-[#C2593F] text-sm uppercase tracking-wider mb-2">Ideal Candidates:</h4>
                  <ul className="space-y-2">
                    {[
                      'Individuals seeking skin texture refinement',
                      'Targeting hormonal/cystic breakouts',
                      'Those wanting to reduce pigmentation and fine lines'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-[#5A4B46]">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#C2593F] text-sm uppercase tracking-wider mb-2">Expected Outcomes:</h4>
                  <ul className="space-y-2">
                    {[
                      'Smoother skin with high clarity',
                      'Substantial reduction in hair regrowth',
                      'Youthful elasticity and plumpness'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-[#5A4B46]">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#booking-section"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, treatment: expandedService }));
                  }}
                  className="flex-1 text-center bg-[#C2593F] text-[#F5EBE6] font-display font-bold py-3.5 px-6 rounded-xl border-2 border-[#2D2320] shadow-[3px_3px_0px_0px_#2D2320] hover:bg-[#ac4e37]"
                >
                  Book this Treatment
                </a>
                <button
                  onClick={() => {
                    setEstTreatment(expandedService);
                    const estSection = document.getElementById('estimator');
                    if (estSection) estSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 text-center bg-[#F59E0B] text-[#2D2320] font-display font-bold py-3.5 px-6 rounded-xl border-2 border-[#2D2320] shadow-[3px_3px_0px_0px_#2D2320] hover:bg-[#e0900a]"
                >
                  Estimate treatment Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Consultation Section */}
      <section id="booking-section" className="py-16 md:py-20 px-4 bg-[#FAF4F0] border-b-4 border-[#2D2320]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center space-x-2 bg-[#C2593F] text-[#F5EBE6] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border-2 border-[#2D2320]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Real-Time Scheduling</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#2D2320]">
              Book Clinic Consultation
            </h2>
            <p className="text-sm md:text-base font-medium text-[#5A4B46]">
              Secure your appointment slot. Our clinic executives will call back within 15 minutes to confirm availability.
            </p>
          </div>

          <div className="bg-[#F5EBE6] p-6 md:p-10 rounded-[2.5rem] border-4 border-[#2D2320] shadow-[8px_8px_0px_0px_#C2593F]">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex items-center justify-center bg-green-100 p-4 rounded-full border-4 border-green-600 text-green-700">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h3 className="font-display font-black text-3xl text-[#2D2320]">Consultation Scheduled!</h3>
                <p className="text-lg text-[#5A4B46] max-w-md mx-auto">
                  Thank you, <strong className="text-[#C2593F]">{formData.name}</strong>. Your appointment request has been recorded for <strong className="text-[#C2593F]">{formData.date}</strong>. A clinic manager will call you shortly at <strong className="text-[#C2593F]">{formData.phone}</strong>.
                </p>
                <div className="pt-6">
                  <button
                    onClick={resetForm}
                    className="bg-[#C2593F] text-[#F5EBE6] font-display font-bold py-3 px-8 rounded-xl border-2 border-[#2D2320] shadow-[3px_3px_0px_0px_#2D2320] hover:bg-[#ac4e37]"
                  >
                    Book another appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className={`w-full p-3.5 bg-[#FAF4F0] border-2 rounded-xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.name ? 'border-red-600 focus:border-red-600' : 'border-[#2D2320]'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="flex items-center space-x-1 text-xs text-red-600 font-bold mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full p-3.5 bg-[#FAF4F0] border-2 rounded-xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.phone ? 'border-red-600 focus:border-red-600' : 'border-[#2D2320]'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="flex items-center space-x-1 text-xs text-red-600 font-bold mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.phone}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email address */}
                  <div>
                    <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full p-3.5 bg-[#FAF4F0] border-2 rounded-xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.email ? 'border-red-600 focus:border-red-600' : 'border-[#2D2320]'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="flex items-center space-x-1 text-xs text-red-600 font-bold mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Primary Treatment / Skin Concern */}
                  <div>
                    <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Skin / Hair Concern</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full p-3.5 bg-[#FAF4F0] border-2 border-[#2D2320] rounded-xl text-base text-[#2D2320] focus:outline-none focus:border-[#C2593F]"
                    >
                      {Object.values(TREATMENTS).map((t) => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Preferred Appointment Date */}
                  <div>
                    <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Appointment Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      min={minDateStr}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FAF4F0] border-2 rounded-xl text-base text-[#2D2320] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.date ? 'border-red-600 focus:border-red-600' : 'border-[#2D2320]'
                      }`}
                    />
                    {formErrors.date && (
                      <span className="flex items-center space-x-1 text-xs text-red-600 font-bold mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.date}</span>
                      </span>
                    )}
                  </div>

                  {/* Time slot preference */}
                  <div>
                    <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Preferred Slot</label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full p-3.5 bg-[#FAF4F0] border-2 border-[#2D2320] rounded-xl text-base text-[#2D2320] focus:outline-none focus:border-[#C2593F]"
                    >
                      <option value="10:00 AM - 12:00 PM">Morning Slot (10:00 AM - 12:00 PM)</option>
                      <option value="12:00 PM - 02:00 PM">Midday Slot (12:00 PM - 02:00 PM)</option>
                      <option value="02:00 PM - 05:00 PM">Afternoon Slot (02:00 PM - 05:00 PM)</option>
                      <option value="05:00 PM - 08:00 PM">Evening Slot (05:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Optional description or notes */}
                <div>
                  <label className="block text-sm font-mono font-bold uppercase text-[#2D2320] mb-2">Special Requests / Symptoms (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your skin/hair type, concern history or copy estimated package details here..."
                    rows="3"
                    className="w-full p-3.5 bg-[#FAF4F0] border-2 border-[#2D2320] rounded-xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C2593F] text-[#F5EBE6] font-display font-bold text-lg rounded-2xl border-3 border-[#2D2320] hover:bg-[#ac4e37] transition-all shadow-[6px_6px_0px_0px_#2D2320] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#2D2320] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-t-transparent border-[#F5EBE6] rounded-full animate-spin"></span>
                        <span>Booking Appointment...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 text-[#F59E0B]" />
                        <span>Confirm Consultation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Patient Transformations / Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 px-4 max-w-7xl mx-auto border-b-4 border-[#2D2320]">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center space-x-2 bg-[#F59E0B] text-[#2D2320] px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border-2 border-[#2D2320]">
            <Users className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#2D2320]">
            Transformational Journeys
          </h2>
          <p className="text-base text-[#5A4B46] font-medium">
            Real skin and hair restorations from Tolichowki residents. See how medical precision changes lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              patient: 'Yasmin Begum',
              area: 'Tolichowki, Hyd',
              concern: 'Hormonal Acne & Deep Scars',
              text: 'The Fractional CO2 laser combined with the targeted salicylic peels did wonders. Dr. Chitra mapped out a 6-month plan. Today, my scars have reduced by 85% and I feel so confident.',
              duration: '6 Months Care',
              stars: 5
            },
            {
              patient: 'Adnan Khan',
              area: 'MD Lines, Tolichowki',
              concern: 'Androgenetic Hair Thinning',
              text: 'Was skeptical about hair restoration. Underwent 6 sessions of PRP coupled with QR678 growth factor injections. Hair fall stopped within 4 weeks and my crown area is significantly denser.',
              duration: '4 Months Treatment',
              stars: 5
            },
            {
              patient: 'Srinivas R.',
              area: 'Al-Hasnath Colony',
              concern: 'Suntan & Hyperpigmentation',
              text: 'Being in sales means high sun exposure. The Kosmo-Glow peel plus Spectra Carbon peel treatment lightened my pigmentation completely. Highly recommend the medical staff at Tolichowki!',
              duration: '3 Sessions Pack',
              stars: 5
            }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#FAF4F0] p-6 rounded-3xl border-4 border-[#2D2320] shadow-[5px_5px_0px_0px_#C2593F] flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-[#F59E0B] mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-base font-medium text-[#2D2320] italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="border-t border-[#2D2320] pt-4 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-black text-base text-[#2D2320]">{t.patient}</h4>
                  <span className="text-xs font-mono font-bold text-[#C2593F]">{t.area}</span>
                </div>
                <span className="inline-block text-[10px] font-mono font-black uppercase tracking-wider bg-[#F5EBE6] text-[#2D2320] px-2 py-1 rounded-full border border-[#2D2320]">
                  {t.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Details Footer */}
      <footer id="footer" className="bg-[#2D2320] text-[#FAF4F0] border-t-4 border-[#2D2320] pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#FAF4F0]/20 pb-12 mb-12">
          {/* Logo & About column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F59E0B] p-2 rounded-xl border-2 border-[#FAF4F0] shadow-[2px_2px_0px_0px_#FAF4F0]">
                <Sparkles className="w-6 h-6 text-[#2D2320]" />
              </div>
              <div>
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#FAF4F0]">
                  Kosmoderma
                </span>
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#F59E0B]">
                  Skin & Hair Clinic
                </span>
              </div>
            </div>
            <p className="text-sm text-[#A3928E] leading-relaxed">
              Kosmoderma Skin & Hair Clinic is one of South India's premier dermatological institutions, specializing in clinically sound aesthetic transformations.
            </p>
            <div className="pt-2 text-[#F59E0B] text-xs font-mono font-bold">
              <span>Licensed Medical Practitioner Supervised</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#F59E0B]">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-[#A3928E] font-medium">
              <li><a href="#about" className="hover:text-[#FAF4F0]">About Doctor</a></li>
              <li><a href="#estimator" className="hover:text-[#FAF4F0]">Price Estimator</a></li>
              <li><a href="#services" className="hover:text-[#FAF4F0]">Skin Services</a></li>
              <li><a href="#testimonials" className="hover:text-[#FAF4F0]">Patient Reviews</a></li>
              <li><a href="#booking-section" className="hover:text-[#FAF4F0]">Book consultation</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#F59E0B]">Clinic Details</h4>
            <ul className="space-y-3 text-sm text-[#A3928E]">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C2593F] shrink-0 mt-0.5" />
                <span>
                  1st Floor, Oasis Plaza, Beside Tolichowki Flyover, Al-Hasnath Colony, Tolichowki, Hyderabad, Telangana 500008
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C2593F]" />
                <a href="tel:9988776655" className="hover:underline text-[#FAF4F0] font-mono font-bold">9988776655</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C2593F]" />
                <a href="mailto:tolichowki@kosmoderma.com" className="hover:underline text-[#FAF4F0]">tolichowki@kosmoderma.com</a>
              </li>
            </ul>
          </div>

          {/* Hours of operation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#F59E0B]">Clinic Hours</h4>
            <div className="bg-[#3A2E2A] p-4 rounded-xl border border-[#FAF4F0]/10 text-xs md:text-sm font-mono text-[#A3928E] space-y-2">
              <div className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-[#FAF4F0]">10 AM - 8 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#FAF4F0]">11 AM - 5 PM</span>
              </div>
              <div className="pt-2 border-t border-[#FAF4F0]/10 text-center text-[10px] uppercase font-bold text-[#F59E0B]">
                Prior Appointment Recommended
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-[#A3928E] space-y-4 md:space-y-0">
          <div>
            <span>© {new Date().getFullYear()} Kosmoderma Skin & Hair Clinic. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FAF4F0]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#FAF4F0]">Terms of Treatment</a>
            <span>•</span>
            <a href="#" className="hover:text-[#FAF4F0]">Registration Attestation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

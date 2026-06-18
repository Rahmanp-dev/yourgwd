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
  Smile, 
  Users, 
  Heart,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

const SERVICES = {
  brightening: {
    id: 'brightening',
    name: 'Meso-Glow Skin Peel',
    basePrice: 2800,
    duration: '35 mins',
    category: 'Skin Brightening',
    description: 'A customized blend of mild botanicals and fruit enzymes that gently exfoliates to reveal a brighter, smoother skin texture.'
  },
  acne: {
    id: 'acne',
    name: 'Advanced Laser Acne Clear',
    basePrice: 4500,
    duration: '50 mins',
    category: 'Acne Control',
    description: 'High-precision laser target system combined with anti-bacterial serum to eliminate acne-causing bacteria and calm inflammation.'
  },
  pigment: {
    id: 'pigment',
    name: 'Q-Switched Pigment Therapy',
    basePrice: 5500,
    duration: '45 mins',
    category: 'Pigmentation',
    description: 'Targeted laser treatment that breaks down melanin clusters to treat dark spots, sun damage, and uneven patchiness.'
  },
  hair: {
    id: 'hair',
    name: 'Hair Growth Mesotherapy',
    basePrice: 4000,
    duration: '60 mins',
    category: 'Hair Care',
    description: 'Micro-infusion of vitamins, minerals, and hair-stimulating growth factors directly into the scalp for density revival.'
  },
  antiaging: {
    id: 'antiaging',
    name: 'Collagen Boost Treatment',
    basePrice: 9000,
    duration: '75 mins',
    category: 'Anti-Aging',
    description: 'Non-invasive radiofrequency therapy designed to heat deep skin layers, stimulating fresh collagen and tightening saggy zones.'
  }
};

const AREAS = {
  spot: { id: 'spot', name: 'Spot / Single Area (Face)', multiplier: 1.0 },
  half: { id: 'half', name: 'Half Body (Arms / Legs)', multiplier: 1.4 },
  full: { id: 'full', name: 'Full Region (Full Back / Body)', multiplier: 2.2 }
};

const DISCOUNTS = {
  1: 0,
  3: 0.10,
  6: 0.20
};

export default function SkinnsClinicPage() {
  // Estimator State
  const [estService, setEstService] = useState('brightening');
  const [estArea, setEstArea] = useState('spot');
  const [estSessions, setEstSessions] = useState(3);
  const [estimateApplied, setEstimateApplied] = useState(false);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '12:00 PM - 02:00 PM',
    service: 'brightening',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Active Service Tab
  const [activeServiceTab, setActiveServiceTab] = useState('brightening');

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
  const currentS = SERVICES[estService];
  const currentA = AREAS[estArea];
  const baseRate = currentS.basePrice * currentA.multiplier;
  const initialCost = baseRate * estSessions;
  
  const discountRate = DISCOUNTS[estSessions] || 0;
  const savings = Math.round(initialCost * discountRate);
  const taxableSubtotal = initialCost - savings;
  const taxAmount = Math.round(taxableSubtotal * 0.18);
  const totalCost = taxableSubtotal + taxAmount;

  // Apply Estimate to Form
  const handleApplyEstimate = () => {
    setFormData(prev => ({
      ...prev,
      service: estService,
      notes: `Applied Estimate: ${currentS.name} (${currentA.name}) for ${estSessions} session(s). Net price: ₹${totalCost.toLocaleString('en-IN')}.`
    }));
    setEstimateApplied(true);
    setTimeout(() => setEstimateApplied(false), 2500);

    const bookingSection = document.getElementById('appointment-form');
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
      timeSlot: '12:00 PM - 02:00 PM',
      service: 'brightening',
      notes: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="bg-[#F5EBE6] text-[#2D2320] selection:bg-[#C2593F] selection:text-[#F5EBE6] font-sans antialiased">
      {/* Top Banner */}
      <div className="bg-[#FAF4F0] text-[#C2593F] text-xs md:text-sm font-bold uppercase tracking-wider py-2.5 px-4 text-center border-b border-[#C2593F]/20">
        <span>✨ Leading Family Skin Clinic in Tolichowki — Focused on Compassionate Care & Science ✨</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#F5EBE6]/90 backdrop-blur-md border-b border-[#C2593F]/20 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C2593F] to-[#F59E0B] flex items-center justify-center text-white shadow-md">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#2D2320]">
                Skinns Clinic
              </span>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#C2593F]">
                Dermatology & Aesthetics
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-[#2D2320]/80">
            <a href="#about" className="hover:text-[#C2593F] transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-[#C2593F] transition-colors">Treatments</a>
            <a href="#estimator" className="hover:text-[#C2593F] transition-colors">Estimator</a>
            <a href="#testimonials" className="hover:text-[#C2593F] transition-colors">Transformations</a>
            <a href="#footer" className="hover:text-[#C2593F] transition-colors">Hours</a>
          </nav>
          <div>
            <a 
              href="tel:9866123456" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white font-bold py-2.5 px-5 rounded-full shadow-lg shadow-[#C2593F]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-xs md:text-sm font-mono tracking-tight font-black">9866123456</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden border-b border-[#C2593F]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FAF4F0] text-[#C2593F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border border-[#C2593F]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Skin Wellness Redefined</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-[#2D2320]">
              Compassionate Skincare <br />
              <span className="bg-gradient-to-r from-[#C2593F] to-[#F59E0B] bg-clip-text text-transparent">For the Whole Family.</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-[#5A4B46]/90 max-w-xl leading-relaxed">
              We specialize in clinically accurate solutions for acne, pigments, pediatric skin issues, and hair loss. Led by expert dermatologists prioritizing your health.
            </p>

            <div className="grid grid-cols-3 gap-4 py-2">
              {[
                { label: 'Clinics Led by MDs', val: '100%' },
                { label: 'FDA Safe Lasers', val: 'US-FDA' },
                { label: 'Successful Patients', val: '12k+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#FAF4F0] p-4 rounded-3xl text-center shadow-md shadow-[#C2593F]/5 border border-[#C2593F]/5">
                  <span className="block text-xl font-display font-bold text-[#C2593F]">{stat.val}</span>
                  <span className="text-[10px] md:text-xs font-semibold text-[#5A4B46]">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#appointment-form"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white font-display font-bold text-lg py-4 px-8 rounded-full shadow-lg shadow-[#C2593F]/20 hover:scale-[1.01] transition-transform"
              >
                <Calendar className="w-5 h-5 text-[#FAF4F0]" />
                <span>Book Appointment</span>
              </a>
              <a 
                href="#estimator"
                className="inline-flex items-center justify-center space-x-2 bg-[#FAF4F0] text-[#2D2320] font-display font-bold text-lg py-4 px-8 rounded-full shadow-sm hover:bg-[#FAF4F0]/80 transition-colors border border-[#C2593F]/10"
              >
                <span>Cost Estimator</span>
                <ArrowRight className="w-5 h-5 text-[#C2593F]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            {/* Claymorphic Background Shape */}
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#C2593F]/5 to-[#F59E0B]/5 blur-2xl"></div>
            
            {/* Claymorphic Image Card */}
            <div className="w-full max-w-[450px] p-5 rounded-[2.5rem] bg-[#FAF4F0] shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),_6px_6px_20px_rgba(194,89,63,0.15)] border border-[#C2593F]/5">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500&h=500" 
                alt="Clinic Treatment Skincare" 
                className="w-full h-[320px] md:h-[380px] object-cover rounded-[2rem] shadow-inner"
              />
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <span className="block text-xs font-mono font-bold text-[#C2593F]">LEAD DERMATOLOGIST</span>
                  <span className="font-display font-bold text-sm text-[#2D2320]">Dr. Syeda Nausheen</span>
                </div>
                <span className="inline-block text-[10px] font-mono font-bold bg-[#F59E0B]/10 text-[#C2593F] px-2.5 py-1 rounded-full">
                  MD - Dermatology
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy / Doctor Profile */}
      <section id="about" className="py-16 md:py-24 px-4 max-w-7xl mx-auto border-b border-[#C2593F]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="p-4 rounded-[2.5rem] bg-[#FAF4F0] shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),_6px_6px_20px_rgba(194,89,63,0.12)] border border-[#C2593F]/5">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500&h=600" 
                alt="Dr. Syeda Nausheen Profile" 
                className="w-full h-[360px] md:h-[440px] object-cover rounded-[2rem]"
              />
              <div className="p-4 pt-5 text-center">
                <span className="inline-block bg-[#C2593F]/10 text-[#C2593F] text-xs font-mono font-black px-3 py-1 rounded-full mb-1">
                  15+ Years Clinical Practice
                </span>
                <p className="text-sm font-semibold text-[#5A4B46] mt-2">
                  Specialist in Clinical Dermatology, Scalp Restoration, and Pediatric Skincare mapping.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#C2593F]/10 text-[#C2593F] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C2593F]" />
              <span>Patient First Care</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight text-[#2D2320]">
              Personalized Treatments Rooted In Compassion & Scientific Honesty.
            </h2>
            <p className="text-lg text-[#5A4B46] leading-relaxed">
              At Skinns Clinic, we focus on safe, clinical dermatology. We don't push unnecessary treatments; our commitment is to provide clear diagnosis, gentle handling, and cost-effective therapies for your family's dermatological health.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { 
                  title: 'Pediatric Dermatological Care', 
                  desc: 'Soft, safe, and specialized diagnostics for children with eczema, rash, or congenital skin marks.' 
                },
                { 
                  title: 'Advanced Follicular Repair', 
                  desc: 'Clinical-grade non-surgical hair restoration and mesotherapy mapping to reverse premature thinning.' 
                },
                { 
                  title: 'Gentle Clinical Peels', 
                  desc: 'FDA-validated natural extracts to target tough pigmentation, acne, and sun damage.' 
                },
                { 
                  title: 'Complete Honesty & Safety', 
                  desc: 'Clear upfront pricing estimates, zero hidden package fees, and comprehensive counseling.' 
                }
              ].map((p, idx) => (
                <div key={idx} className="flex space-x-3 items-start">
                  <div className="bg-[#FAF4F0] p-2 rounded-2xl shadow-sm border border-[#C2593F]/15 text-[#C2593F] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#2D2320]">{p.title}</h4>
                    <p className="text-sm text-[#5A4B46]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-[#FAF4F0] border-b border-[#C2593F]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center space-x-2 bg-[#F59E0B]/10 text-[#C2593F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C2593F]" />
              <span>Clinical Dermatology</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2D2320]">
              Dermatologist Guided Services
            </h2>
            <p className="text-sm md:text-base text-[#5A4B46]">
              Explore our core clinical skin and hair therapies designed to safely revive your natural radiance.
            </p>
          </div>

          {/* Interactive Services Tab Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector */}
            <div className="lg:col-span-4 space-y-3">
              {Object.values(SERVICES).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveServiceTab(item.id)}
                  className={`w-full text-left p-4 rounded-3xl border transition-all flex items-center justify-between ${
                    activeServiceTab === item.id
                      ? 'bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white shadow-lg shadow-[#C2593F]/20 border-transparent'
                      : 'bg-[#F5EBE6] text-[#2D2320] border-[#C2593F]/10 hover:bg-[#FAF4F0]'
                  }`}
                >
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase opacity-80">{item.category}</span>
                    <span className="font-display font-bold text-sm md:text-base">{item.name}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 shrink-0" />
                </button>
              ))}
            </div>

            {/* Right card container */}
            <div className="lg:col-span-8 p-6 md:p-8 rounded-[2.5rem] bg-[#F5EBE6] shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),_4px_4px_15px_rgba(194,89,63,0.08)] border border-[#C2593F]/10">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-[#C2593F]/20 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#C2593F] bg-[#FAF4F0] px-3 py-1 rounded-full border border-[#C2593F]/10">
                      {SERVICES[activeServiceTab].category}
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-[#2D2320] mt-2">
                      {SERVICES[activeServiceTab].name}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs">
                    <span className="block text-[#5A4B46]">Avg. Duration</span>
                    <span className="text-lg font-bold text-[#C2593F]">{SERVICES[activeServiceTab].duration}</span>
                  </div>
                </div>

                <p className="text-base md:text-lg text-[#5A4B46] leading-relaxed">
                  {SERVICES[activeServiceTab].description}
                </p>

                <div className="p-5 bg-[#FAF4F0] rounded-[1.5rem] border border-[#C2593F]/10 space-y-4">
                  <span className="block text-xs font-mono font-bold text-[#C2593F] uppercase">Clinical Process & Care</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#5A4B46]">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4.5 h-4.5 text-[#C2593F] shrink-0 mt-0.5" />
                      <span>Thorough pre-treatment diagnostic scan of epidermal health.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4.5 h-4.5 text-[#C2593F] shrink-0 mt-0.5" />
                      <span>Post-peel soothing moisturizer and specialized UV-blockers.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="#appointment-form"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: activeServiceTab }));
                    }}
                    className="flex-1 text-center bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white font-display font-bold py-3.5 px-6 rounded-full shadow-md shadow-[#C2593F]/15 hover:scale-[1.01] transition-transform"
                  >
                    Select & Book this service
                  </a>
                  <button
                    onClick={() => {
                      setEstService(activeServiceTab);
                      const estSection = document.getElementById('estimator');
                      if (estSection) estSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 text-center bg-[#FAF4F0] text-[#C2593F] font-display font-bold py-3.5 px-6 rounded-full border border-[#C2593F]/20 hover:bg-[#FAF4F0]/80"
                  >
                    View Cost Estimation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-16 md:py-24 px-4 max-w-7xl mx-auto border-b border-[#C2593F]/15">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center space-x-2 bg-[#C2593F]/10 text-[#C2593F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#C2593F]" />
            <span>Interactive Cost Calculator</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2D2320]">
            Treatment Estimator
          </h2>
          <p className="text-sm md:text-base text-[#5A4B46]">
            Understand the investment structure for your sessions package. Our clinic values pricing transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-[2.5rem] bg-[#FAF4F0] shadow-md border border-[#C2593F]/10 space-y-6">
            {/* Service select */}
            <div>
              <span className="block text-xs font-mono font-bold text-[#C2593F] uppercase mb-3">1. Select Target Service</span>
              <div className="space-y-2">
                {Object.values(SERVICES).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setEstService(s.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      estService === s.id
                        ? 'bg-[#F5EBE6] border-[#C2593F] shadow-sm'
                        : 'bg-transparent border-[#C2593F]/10 hover:bg-[#FAF4F0]/80'
                    }`}
                  >
                    <div>
                      <span className="font-display font-bold text-sm md:text-base block">{s.name}</span>
                      <span className="text-xs text-[#5A4B46] font-mono">Starts at ₹{s.basePrice} per session</span>
                    </div>
                    {estService === s.id && <div className="w-3.5 h-3.5 rounded-full bg-[#C2593F]"></div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Area select */}
            <div>
              <span className="block text-xs font-mono font-bold text-[#C2593F] uppercase mb-3">2. Select Targeted Area</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {Object.values(AREAS).map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setEstArea(a.id)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      estArea === a.id
                        ? 'bg-[#F5EBE6] border-[#C2593F] font-bold'
                        : 'bg-transparent border-[#C2593F]/10'
                    }`}
                  >
                    <span className="block text-sm text-[#2D2320]">{a.name.split(' (')[0]}</span>
                    <span className="block text-[10px] text-[#5A4B46] font-mono mt-0.5">Factor: x{a.multiplier}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sessions count */}
            <div>
              <span className="block text-xs font-mono font-bold text-[#C2593F] uppercase mb-3">3. Choose Session Volume</span>
              <div className="flex items-center justify-between bg-[#F5EBE6] p-4 rounded-2xl border border-[#C2593F]/10">
                <span className="text-sm font-bold text-[#2D2320]">Total Sessions: {estSessions}</span>
                <div className="flex items-center space-x-2">
                  {[1, 3, 6].map((sVal) => (
                    <button
                      key={sVal}
                      onClick={() => setEstSessions(sVal)}
                      className={`w-12 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
                        estSessions === sVal
                          ? 'bg-[#C2593F] text-white border-transparent'
                          : 'bg-[#FAF4F0] text-[#2D2320] border-[#C2593F]/10'
                      }`}
                    >
                      {sVal}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Receipt Output */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-[2.5rem] bg-[#FAF4F0] shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.7),_5px_5px_15px_rgba(194,89,63,0.12)] border border-[#C2593F]/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-[#C2593F]/20 pb-4">
                <span className="text-[10px] font-mono font-bold text-[#C2593F] uppercase tracking-widest block">Est. Bill Outline</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-[#2D2320] mt-1">Package Breakdown</h3>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#5A4B46]">
                <div className="flex justify-between">
                  <span>Selected Service:</span>
                  <span className="font-bold text-[#2D2320]">{currentS.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Area Multiplier:</span>
                  <span className="font-bold text-[#2D2320]">x{currentA.multiplier}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sessions:</span>
                  <span className="font-bold text-[#2D2320]">{estSessions} visit(s)</span>
                </div>
                <div className="flex justify-between border-t border-[#C2593F]/10 pt-2 text-[#2D2320]">
                  <span>Gross Cost:</span>
                  <span>₹{initialCost.toLocaleString('en-IN')}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-green-700 font-bold">
                    <span>Package Discount ({(discountRate*100)}%):</span>
                    <span>-₹{savings.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Integrated GST (18%):</span>
                  <span>₹{taxAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="border-t-2 border-double border-[#C2593F]/30 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono font-black text-[#2D2320] uppercase">Estimated Net Payable</span>
                  <span className="text-2xl font-display font-bold text-[#C2593F]">₹{totalCost.toLocaleString('en-IN')}*</span>
                </div>
                <span className="block text-[10px] text-right font-bold text-[#5A4B46] mt-1">*Excludes any in-clinic coupon codes</span>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={handleApplyEstimate}
                className={`w-full py-4 rounded-full font-display font-bold text-base transition-all ${
                  estimateApplied 
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white shadow-lg shadow-[#C2593F]/20 hover:scale-[1.01]'
                }`}
              >
                {estimateApplied ? '✓ Linked to Booking below' : 'Apply & Schedule Consultation'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment-form" className="py-16 md:py-24 px-4 bg-[#FAF4F0] border-b border-[#C2593F]/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center space-x-2 bg-[#C2593F]/10 text-[#C2593F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#C2593F]" />
              <span>Direct Scheduling</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2D2320]">
              Schedule Consultation
            </h2>
            <p className="text-sm text-[#5A4B46]">
              Please fill out the form. A patient care coordinator will call you back shortly to lock in your appointment.
            </p>
          </div>

          <div className="p-6 md:p-10 rounded-[2.5rem] bg-[#F5EBE6] shadow-lg border border-[#C2593F]/10">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex items-center justify-center bg-green-50 p-4 rounded-full border-2 border-green-600 text-green-700">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#2D2320]">Appointment Request Logged!</h3>
                <p className="text-sm md:text-base text-[#5A4B46] max-w-md mx-auto">
                  Thank you, <strong className="text-[#C2593F]">{formData.name}</strong>. Your session request for <strong className="text-[#C2593F]">{formData.date}</strong> is queued. We will call you at <strong className="text-[#C2593F]">{formData.phone}</strong> to verify the time.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white font-display font-bold py-3 px-6 rounded-full shadow-md"
                  >
                    Request Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className={`w-full p-3.5 bg-[#FAF4F0] border rounded-2xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.name ? 'border-red-600 focus:border-red-600' : 'border-[#C2593F]/25'
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
                    <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9866123456"
                      className={`w-full p-3.5 bg-[#FAF4F0] border rounded-2xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.phone ? 'border-red-600 focus:border-red-600' : 'border-[#C2593F]/25'
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
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full p-3.5 bg-[#FAF4F0] border rounded-2xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.email ? 'border-red-600 focus:border-red-600' : 'border-[#C2593F]/25'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="flex items-center space-x-1 text-xs text-red-600 font-bold mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Primary Service Target */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Primary Treatment Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3.5 bg-[#FAF4F0] border border-[#C2593F]/25 rounded-2xl text-base text-[#2D2320] focus:outline-none focus:border-[#C2593F]"
                    >
                      {Object.values(SERVICES).map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Appointment Date */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      min={minDateStr}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FAF4F0] border rounded-2xl text-base text-[#2D2320] focus:outline-none focus:border-[#C2593F] transition-colors ${
                        formErrors.date ? 'border-red-600 focus:border-red-600' : 'border-[#C2593F]/25'
                      }`}
                    />
                    {formErrors.date && (
                      <span className="flex items-center space-x-1 text-xs text-red-600 font-bold mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.date}</span>
                      </span>
                    )}
                  </div>

                  {/* Time slot */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Preferred Time Range</label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full p-3.5 bg-[#FAF4F0] border border-[#C2593F]/25 rounded-2xl text-base text-[#2D2320] focus:outline-none focus:border-[#C2593F]"
                    >
                      <option value="11:00 AM - 01:00 PM">Morning (11:00 AM - 01:00 PM)</option>
                      <option value="01:00 PM - 03:00 PM">Midday (01:00 PM - 03:00 PM)</option>
                      <option value="03:00 PM - 06:00 PM">Afternoon (03:00 PM - 06:00 PM)</option>
                      <option value="06:00 PM - 09:00 PM">Evening (06:00 PM - 09:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional details */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#2D2320] mb-2 uppercase">Symptoms / Case History Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your skin goals, allergies, or paste estimation values here..."
                    rows="3"
                    className="w-full p-3.5 bg-[#FAF4F0] border border-[#C2593F]/25 rounded-2xl text-base text-[#2D2320] placeholder-[#A3928E] focus:outline-none focus:border-[#C2593F]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#C2593F] to-[#d86145] text-white font-display font-bold text-lg rounded-full shadow-lg shadow-[#C2593F]/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                        <span>Scheduling...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 text-[#FAF4F0]" />
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Patient Transformations / Reviews */}
      <section id="testimonials" className="py-16 md:py-24 px-4 max-w-7xl mx-auto border-b border-[#C2593F]/15">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center space-x-2 bg-[#FAF4F0] text-[#C2593F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#C2593F]/10">
            <Users className="w-3.5 h-3.5 text-[#C2593F]" />
            <span>Success Reviews</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2D2320]">
            Skin Restoration Successes
          </h2>
          <p className="text-sm md:text-base text-[#5A4B46]">
            Real results experienced by people in Tolichowki. Read their honest clinical skincare feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              patient: 'Nisha Begum',
              area: 'MD Lines, Tolichowki',
              concern: 'Chronic Hormonal Eczema',
              text: 'Dr. Syeda Nausheen is incredible. She understood that my skin was inflamed. Instead of high-potency chemical creams, she advised a gentle hydration barrier mapping, mild cleansers, and safe light therapies. My rash cleared in 3 weeks.',
              stars: 5,
              date: 'May 2026'
            },
            {
              patient: 'Mohammed Feroz',
              area: 'Tolichowki X Road',
              concern: 'Patchy Hair Loss & Dandruff',
              text: 'The hair mesotherapy sessions at Skinns are very gentle and professional. The scalp felt healthier after the first two sessions. I see new hair sprouts in the thinning zones. Very reasonable prices too.',
              stars: 5,
              date: 'April 2026'
            }
          ].map((t, idx) => (
            <div key={idx} className="p-6 rounded-[2rem] bg-[#FAF4F0] shadow-sm border border-[#C2593F]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-[#F59E0B] mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-base text-[#2D2320] italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="border-t border-[#C2593F]/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm md:text-base text-[#2D2320]">{t.patient}</h4>
                  <span className="text-xs text-[#5A4B46]">{t.area}</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#C2593F] bg-[#F5EBE6] px-2.5 py-1 rounded-full">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#2D2320] text-[#FAF4F0] pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#FAF4F0]/10 pb-12 mb-12">
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C2593F] to-[#F59E0B] flex items-center justify-center text-white">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#FAF4F0]">
                  Skinns Clinic
                </span>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#F59E0B]">
                  Dermatology & Aesthetics
                </span>
              </div>
            </div>
            <p className="text-sm text-[#A3928E] leading-relaxed">
              Premium, compassionate clinical skincare for families in Hyderabad. Focused on clinical safety, doctor diagnostics, and permanent skin health.
            </p>
            <div className="text-[10px] font-mono text-[#F59E0B] font-bold">
              <span>TSMC Registered Clinic / FDA Technology Compliant</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#F59E0B]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#A3928E]">
              <li><a href="#about" className="hover:text-[#FAF4F0]">Our Doctor</a></li>
              <li><a href="#services" className="hover:text-[#FAF4F0]">Treatments</a></li>
              <li><a href="#estimator" className="hover:text-[#FAF4F0]">Price Tool</a></li>
              <li><a href="#testimonials" className="hover:text-[#FAF4F0]">Reviews</a></li>
              <li><a href="#appointment-form" className="hover:text-[#FAF4F0]">Book Visit</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#F59E0B]">Clinic Details</h4>
            <ul className="space-y-3 text-sm text-[#A3928E]">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C2593F] shrink-0 mt-0.5" />
                <span>
                  8-1-301/A, Tolichowki X Road, Near MD Lines, Tolichowki, Hyderabad, Telangana 500028
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C2593F]" />
                <a href="tel:9866123456" className="hover:underline text-[#FAF4F0] font-mono font-bold">9866123456</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C2593F]" />
                <a href="mailto:contact@skinnsclinictolichowki.com" className="hover:underline text-[#FAF4F0]">contact@skinnsclinic.com</a>
              </li>
            </ul>
          </div>

          {/* Hours of operation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#F59E0B]">Schedule</h4>
            <div className="bg-[#3A2E2A] p-4 rounded-2xl text-xs md:text-sm font-mono text-[#A3928E] space-y-2 border border-[#FAF4F0]/5">
              <div className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-[#FAF4F0]">11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-[#C2593F]">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 border-t border-[#FAF4F0]/10 text-center text-[10px] uppercase font-bold text-[#F59E0B]">
                Walk-ins Subject to Slot Openings
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-[#A3928E] space-y-4 md:space-y-0">
          <div>
            <span>© {new Date().getFullYear()} Skinns Clinic Tolichowki. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FAF4F0]">Privacy & Records</a>
            <span>•</span>
            <a href="#" className="hover:text-[#FAF4F0]">Dermatology Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

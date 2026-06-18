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
  Activity,
  ThumbsUp,
  Heart
} from 'lucide-react';

// Estimator Configurations
const TREATMENTS = [
  { id: 'laser-hair', name: 'Laser Hair Reduction (USFDA)', basePrice: 2200, icon: Sparkles },
  { id: 'acne-peel', name: 'Advanced Acne/Chemical Peel', basePrice: 1800, icon: ShieldCheck },
  { id: 'prp-hair', name: 'PRP Hair Restoration Therapy', basePrice: 4500, icon: Activity },
  { id: 'skin-bright', name: 'Skin Brightening & Rejuvenation', basePrice: 3200, icon: Award },
  { id: 'anti-hifu', name: 'Anti-Aging HIFU Treatment', basePrice: 6500, icon: Star }
];

const BODY_AREAS = [
  { id: 'face', name: 'Full Face', multiplier: 1.0 },
  { id: 'underarms', name: 'Underarms', multiplier: 0.8 },
  { id: 'arms', name: 'Full Arms', multiplier: 1.5 },
  { id: 'legs', name: 'Full Legs', multiplier: 1.8 },
  { id: 'scalp', name: 'Scalp (Hair Growth)', multiplier: 1.2 }
];

export default function DermedClinicPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estimator State
  const [selectedTx, setSelectedTx] = useState(TREATMENTS[0].id);
  const [selectedArea, setSelectedArea] = useState(BODY_AREAS[0].id);
  const [sessions, setSessions] = useState(4);
  const [estimateLocked, setEstimateLocked] = useState(false);

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'morning',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Math for Estimator
  const txObj = TREATMENTS.find(t => t.id === selectedTx) || TREATMENTS[0];
  const areaObj = BODY_AREAS.find(a => a.id === selectedArea) || BODY_AREAS[0];
  
  const baseCostPerSession = Math.round(txObj.basePrice * areaObj.multiplier);
  const rawSubtotal = baseCostPerSession * sessions;
  
  // Package Discount
  let discountPercent = 0;
  if (sessions >= 6) {
    discountPercent = 20; // 20% off for 6+ sessions
  } else if (sessions >= 3) {
    discountPercent = 10; // 10% off for 3+ sessions
  }
  
  const discountAmt = Math.round((rawSubtotal * discountPercent) / 100);
  const discountedSubtotal = rawSubtotal - discountAmt;
  const gstAmt = Math.round(discountedSubtotal * 0.18); // 18% GST
  const finalEstimate = discountedSubtotal + gstAmt;

  const handleLockEstimate = () => {
    setForm(prev => ({
      ...prev,
      notes: `LOCKED ESTIMATE: ${txObj.name} for ${areaObj.name} (${sessions} Sessions). Estimated Price: ₹${finalEstimate.toLocaleString('en-IN')} (Incl. GST)`
    }));
    setEstimateLocked(true);
    
    // Smooth scroll to consultation form
    const formSec = document.getElementById('booking-form');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Input Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errs.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errs.date = 'Date cannot be in the past';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: `DMD-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form,
        txName: txObj.name,
        areaName: areaObj.name,
        sessionsCount: sessions,
        priceEst: finalEstimate
      });
    }, 1500);
  };

  const resetForm = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: 'morning',
      notes: ''
    });
    setEstimateLocked(false);
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-[#FFF0EE] text-[#2A1A1C] selection:bg-[#B76E79]/20 font-sans antialiased relative overflow-hidden">
      
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#B76E79]/8 blur-[90px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#FFFDFD]/40 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#B76E79]/6 blur-[110px] pointer-events-none"></div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFF0EE]/80 border-b border-[#B76E79]/15">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wide text-[#B76E79]">
              Dermed
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-slate-500">
              Skin & Hair Clinic
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#expertise" className="hover:text-[#B76E79] transition-colors">Expertise</a>
            <a href="#estimator" className="hover:text-[#B76E79] transition-colors">Price Estimator</a>
            <a href="#services" className="hover:text-[#B76E79] transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-[#B76E79] transition-colors">Transformations</a>
            <a href="#booking-form" className="px-5 py-2.5 rounded-full border border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all text-xs uppercase tracking-wider font-semibold active:scale-95">
              Book Appointment
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-600 hover:text-[#B76E79] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-[#FFF0EE]/95 border-b border-[#B76E79]/10 backdrop-blur-lg px-6 py-6 absolute top-20 left-0 flex flex-col space-y-4 animate-fadeIn">
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800 hover:text-[#B76E79]">Expertise</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800 hover:text-[#B76E79]">Price Estimator</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800 hover:text-[#B76E79]">Services</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800 hover:text-[#B76E79]">Transformations</a>
            <a 
              href="#booking-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#B76E79] text-white font-semibold uppercase text-xs tracking-wider"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Header Section */}
      <section className="relative pt-12 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#FFFDFD]/80 border border-[#B76E79]/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#B76E79] w-fit shadow-sm">
            <Sparkles size={14} />
            <span>EXCELLENCE IN CLINICAL AESTHETICS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight font-extrabold">
            Reclaim Your Radiant <br />
            <span className="text-[#B76E79] relative inline-block">
              Skin & Healthy Hair
              <span className="absolute bottom-1 left-0 w-full h-1 bg-[#B76E79]/20 rounded"></span>
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Welcome to Dermed Skin & Hair Clinic in Tolichowki. Guided by premium medical standards and USFDA-approved technologies, we craft customized treatment regimes for acne, pigmentation, hair fall, and aging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#booking-form" 
              className="px-8 py-4 bg-[#B76E79] text-white rounded-full font-semibold shadow-lg shadow-[#B76E79]/20 hover:bg-[#A35D68] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center space-x-2"
            >
              <span>Schedule Free Assessment</span>
              <ChevronRight size={16} />
            </a>
            <a 
              href="#estimator" 
              className="px-8 py-4 bg-[#FFFDFD]/70 hover:bg-[#FFFDFD] text-slate-800 rounded-full font-semibold border border-[#B76E79]/30 transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>Explore Treatment Estimator</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#B76E79]/15">
            <div>
              <div className="text-2xl font-bold text-slate-900">10,000+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Happy Patients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">15+ Yrs</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Expert Doctors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">99.2%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Safety Rate</div>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual Glass Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] p-4 bg-[#FFFDFD]/60 backdrop-blur-md border border-[#B76E79]/25 shadow-xl">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Premium Skincare Experience" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFDFD]/90 backdrop-blur-md border border-[#B76E79]/20 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#FFF0EE] p-2 rounded-lg text-[#B76E79]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">USFDA Approved</h4>
                    <p className="text-xs text-slate-500">Gold-standard safety protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / About Section */}
      <section id="expertise" className="py-20 bg-[#FFFDFD]/60 backdrop-blur-md border-y border-[#B76E79]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Why Tolichowki Trusts Dermed Clinic
            </h2>
            <div className="w-16 h-1 bg-[#B76E79] mx-auto rounded"></div>
            <p className="text-slate-600">
              We combine advanced clinical science with a luxurious, calming setting to deliver dermatology solutions that truly work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-[#B76E79]" />,
                title: "Expert Dermatologists",
                desc: "Our board-certified skin and hair practitioners carry over a decade of clinical experience with global aesthetic certifications."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-[#B76E79]" />,
                title: "Advanced Laser Suite",
                desc: "Equipped with state-of-the-art Q-Switched Nd:YAG and Diode lasers, offering unmatched precision and pain-free sessions."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#B76E79]" />,
                title: "Tailored Case Sheets",
                desc: "No two skin types are alike. We run thorough digital analysis of your skin hydration and sebum to chart custom treatments."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-[#FFFDFD]/80 border border-[#B76E79]/15 shadow-sm hover:border-[#B76E79]/35 hover:shadow-md transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0EE] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1 bg-[#FFFDFD]/80 border border-[#B76E79]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#B76E79] w-fit shadow-xs">
              <span>TRANSPARENT PRICING</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Interactive <br />
              <span className="text-[#B76E79]">Treatment Estimator</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
              Plan your aesthetic journey with full clarity. Choose your treatment type, targeted body area, and session count to get a customized estimate including package discounts.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#B76E79]/10 p-1 rounded mt-1 text-[#B76E79]">
                  <Check size={14} />
                </div>
                <p className="text-sm text-slate-600"><strong className="text-slate-800">10% Off</strong> on 3 to 5 sessions package.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#B76E79]/10 p-1 rounded mt-1 text-[#B76E79]">
                  <Check size={14} />
                </div>
                <p className="text-sm text-slate-600"><strong className="text-slate-800">20% Off</strong> on 6 or more sessions package.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#B76E79]/10 p-1 rounded mt-1 text-[#B76E79]">
                  <Check size={14} />
                </div>
                <p className="text-sm text-slate-600">Estimates are transparent with no hidden consultant fees.</p>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Panel */}
          <div className="lg:col-span-7 bg-[#FFFDFD]/75 backdrop-blur-md border border-[#B76E79]/20 p-6 sm:p-8 rounded-3xl shadow-lg relative">
            <div className="absolute top-4 right-4 text-[#B76E79]/20">
              <Info size={40} />
            </div>

            <h3 className="font-serif text-xl font-bold text-slate-800 mb-6">Customize Estimate</h3>
            
            <div className="space-y-6">
              {/* Treatment Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  1. Select Clinical Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TREATMENTS.map(tx => {
                    const SelectedIcon = tx.icon;
                    return (
                      <button
                        key={tx.id}
                        type="button"
                        onClick={() => {
                          setSelectedTx(tx.id);
                          setEstimateLocked(false);
                        }}
                        className={`p-4 rounded-xl text-left border transition-all flex items-center space-x-3 ${
                          selectedTx === tx.id 
                            ? 'bg-[#B76E79]/10 border-[#B76E79] shadow-xs' 
                            : 'bg-[#FFFDFD] border-slate-200 hover:border-[#B76E79]/40'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${selectedTx === tx.id ? 'bg-[#B76E79] text-white' : 'bg-[#FFF0EE] text-[#B76E79]'}`}>
                          <SelectedIcon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">{tx.name}</div>
                          <div className="text-xs text-slate-500">From ₹{tx.basePrice}/sess</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Body Area */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  2. Targeted Body Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {BODY_AREAS.map(area => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => {
                        setSelectedArea(area.id);
                        setEstimateLocked(false);
                      }}
                      className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border ${
                        selectedArea === area.id
                          ? 'bg-[#B76E79] text-white border-[#B76E79]'
                          : 'bg-[#FFFDFD] border-slate-200 text-slate-600 hover:border-[#B76E79]/45'
                      }`}
                    >
                      {area.name} (x{area.multiplier})
                    </button>
                  ))}
                </div>
              </div>

              {/* Sessions */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    3. Number of Sessions
                  </label>
                  <span className="text-sm font-bold text-[#B76E79] bg-[#B76E79]/10 px-3 py-1 rounded-full">
                    {sessions} {sessions === 1 ? 'Session' : 'Sessions'}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="8" 
                  value={sessions}
                  onChange={(e) => {
                    setSessions(parseInt(e.target.value));
                    setEstimateLocked(false);
                  }}
                  className="w-full accent-[#B76E79] h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>1 sess</span>
                  <span>4 sess</span>
                  <span>8 sess</span>
                </div>
              </div>

              {/* Output Billing Grid */}
              <div className="p-5 rounded-2xl bg-[#FFF0EE]/50 border border-[#B76E79]/15 space-y-3">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Standard Cost ({sessions} × ₹{baseCostPerSession})</span>
                  <span>₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                
                {discountAmt > 0 && (
                  <div className="flex justify-between text-xs text-green-600 font-semibold">
                    <span>Package Discount ({discountPercent}%)</span>
                    <span>-₹{discountAmt.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs text-slate-600">
                  <span>Aesthetics GST (18%)</span>
                  <span>₹{gstAmt.toLocaleString('en-IN')}</span>
                </div>

                <div className="h-[1px] bg-[#B76E79]/20 my-2"></div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Total Est. Cost</span>
                    <span className="text-[10px] text-slate-400 font-medium">All-inclusive Estimate</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">
                    ₹{finalEstimate.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Lock Price Button */}
              <button
                type="button"
                onClick={handleLockEstimate}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-sm tracking-wider uppercase hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 shadow-md"
              >
                <Lock size={16} />
                <span>{estimateLocked ? 'Estimate Saved & Linked Below' : 'Lock Estimate & Book slot'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-[#FFFDFD]/40 backdrop-blur-md border-t border-[#B76E79]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest block">Signature Offerings</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Advanced Clinical Specialties
            </h2>
            <div className="w-16 h-1 bg-[#B76E79] mx-auto rounded"></div>
            <p className="text-slate-600">
              Explore our state-of-the-art dermatological services tailored to target skin congestion, pigmentation, hair fall, and scars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dermal Peels",
                tagline: "Salicylic & Glycolic Peels",
                price: "₹1,800",
                desc: "USFDA-approved chemical exfoliants to clear sebum, control active acne pustules, and lighten post-inflammatory dark marks.",
                time: "30-45 mins",
                recovery: "Minimal flaking"
              },
              {
                title: "Laser Resurfacing",
                tagline: "Fractional CO2 & Erbium",
                price: "₹4,500",
                desc: "Highly effective laser beams that stimulate deep collagen matrices to fill deep-set rolling acne scars and refine skin texture.",
                time: "60 mins",
                recovery: "3-4 days downtime"
              },
              {
                title: "PRP Growth Factor",
                tagline: "Autologous Platelet Concentrates",
                price: "₹5,000",
                desc: "Growth factors extracted from your own blood, infused into the scalp via mesotherapy to stimulate inactive hair follicles.",
                time: "45 mins",
                recovery: "Zero downtime"
              },
              {
                title: "Carbon Laser Peel",
                tagline: "Hollywood Laser Peel",
                price: "₹3,500",
                desc: "Liquid carbon paste applied to face and vaporized by Q-Switched laser to vacuum oil, minimize pores, and instantly brighten skin.",
                time: "40 mins",
                recovery: "Instant glow"
              },
              {
                title: "Hydra-Dermabrasion",
                tagline: "Medi-facial Glow Therapy",
                price: "₹2,500",
                desc: "A multi-step medical grade facial utilizing vortex extraction to deep clean, hydrate, and infuse skin with antioxidants.",
                time: "50 mins",
                recovery: "None"
              },
              {
                title: "HIFU Facelift",
                tagline: "High-Intensity Focused Ultrasound",
                price: "₹9,000",
                desc: "Non-surgical skin tightening targetting the SMAS muscle layer to lift sagging jaws, double chin, and boost natural collagen.",
                time: "75 mins",
                recovery: "Slight tenderness"
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-[#FFFDFD]/80 border border-[#B76E79]/15 p-6 rounded-2xl shadow-xs hover:border-[#B76E79]/35 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-800">{srv.title}</h3>
                      <span className="text-[11px] text-slate-400 block">{srv.tagline}</span>
                    </div>
                    <span className="text-sm font-bold text-[#B76E79] bg-[#B76E79]/10 px-3 py-1 rounded-full">
                      {srv.price}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <Clock size={12} className="text-[#B76E79]" />
                    <span>{srv.time}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck size={12} className="text-[#B76E79]" />
                    <span>{srv.recovery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Transformations / Testimonials */}
      <section id="testimonials" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest block">Proven Outcomes</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Real Transformations, Real Stories
          </h2>
          <div className="w-16 h-1 bg-[#B76E79] mx-auto rounded"></div>
          <p className="text-slate-600">
            Read from our patients who successfully cleared chronic skin problems and hair thinning under our clinical care.
          </p>
        </div>

        {/* Before After Cards & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Transformation 1 */}
          <div className="bg-[#FFFDFD]/80 border border-[#B76E79]/20 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Acne Treatment Before" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-slate-900/70 text-[10px] font-bold text-white uppercase tracking-wider rounded">Before Treatment</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Acne Treatment After" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#B76E79]/80 text-[10px] font-bold text-white uppercase tracking-wider rounded">After 6 Weeks</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm italic text-slate-700 leading-relaxed">
                "I suffered from grade-3 cystic acne for almost 3 years. The salicylic peels and localized blue-light therapies recommended by Dermed cleared my skin completely in just 6 sessions. Exceptional care!"
              </p>
              <div className="text-xs font-bold text-slate-800">
                — Ayesha M. <span className="font-normal text-slate-400">(Aesthetic Peel Patient)</span>
              </div>
            </div>
          </div>

          {/* Transformation 2 */}
          <div className="bg-[#FFFDFD]/80 border border-[#B76E79]/20 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="PRP Before" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-slate-900/70 text-[10px] font-bold text-white uppercase tracking-wider rounded">Before Treatment</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1552534747-27982743997b?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="PRP After" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#B76E79]/80 text-[10px] font-bold text-white uppercase tracking-wider rounded">After 4 Sessions</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm italic text-slate-700 leading-relaxed">
                "My hairline was receding rapidly. The PRP therapy combined with custom nutritional supplements triggered massive new hair growth. The density has improved dramatically. Highly recommend Dermed!"
              </p>
              <div className="text-xs font-bold text-slate-800">
                — Md. Irfan <span className="font-normal text-slate-400">(Hair PRP Patient)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Sameera Khan", tx: "Hydra-Facial", feedback: "Best clinic in Tolichowki. Very professional staff and the Hydra-facial gave me a super clean, soft, and glowing face instantly." },
            { name: "Rahul Varma", tx: "Laser Hair Reduction", feedback: "Very hygienic setting. The Diode laser is truly painless. I did 4 sessions for my beard shaping and the results are clean." },
            { name: "Zeba Sultana", tx: "Acne Scar Treatment", feedback: "Had deep rolling scars. The fractional lasers combined with subcision really worked magic. My skin is 75% smoother now." }
          ].map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#FFFDFD]/60 border border-[#B76E79]/15 shadow-xs space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800">{t.name}</span>
                <span className="text-[10px] text-[#B76E79] bg-[#B76E79]/10 px-2 py-0.5 rounded-full font-medium">{t.tx}</span>
              </div>
              <div className="flex text-amber-400 space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "{t.feedback}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Consultation Form Section */}
      <section id="booking-form" className="py-20 bg-[#FFFDFD]/60 backdrop-blur-md border-t border-[#B76E79]/15 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest block">Direct Slot Reservation</span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Schedule Your Consultation
            </h2>
            <p className="text-sm text-slate-500">
              Submit the form below, and our care coordinator will reach out within 30 minutes to confirm your premium slot.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#FFFDFD] border border-[#B76E79]/20 p-8 rounded-3xl shadow-md">
            
            {submittedData ? (
              // SUCCESS SCREEN
              <div className="text-center py-8 space-y-6 animate-scaleUp">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">Consultation Booked!</h3>
                  <p className="text-sm text-slate-500">
                    Your appointment request has been logged successfully.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFF0EE]/40 border border-[#B76E79]/15 text-left max-w-md mx-auto space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Booking ID:</span>
                    <span className="font-mono font-bold text-slate-800">{submittedData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Patient:</span>
                    <span className="font-bold text-slate-800">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Mobile Number:</span>
                    <span className="font-bold text-slate-800">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Preferred Date:</span>
                    <span className="font-bold text-slate-800">{submittedData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Time Slot:</span>
                    <span className="font-bold text-slate-800 capitalize">{submittedData.time}</span>
                  </div>
                  {submittedData.notes && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-slate-400 font-bold uppercase block mb-1">Locked Details:</span>
                      <p className="bg-[#FFFDFD] p-2 rounded border text-[11px] text-slate-600 leading-tight">
                        {submittedData.notes}
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Our doctor will review your details. For urgent alterations, call us directly at <span className="font-bold text-[#B76E79]">9849555123</span>.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all text-xs font-semibold uppercase tracking-wider"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              // INPUT FORM
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {estimateLocked && (
                  <div className="p-4 rounded-xl bg-[#B76E79]/10 border border-[#B76E79]/30 flex items-start space-x-3 text-xs text-[#B76E79]">
                    <Lock size={16} className="mt-0.5 shrink-0" />
                    <div>
                      <strong className="block font-bold">Treatment Estimate Linked!</strong>
                      <span className="leading-tight block mt-0.5">{form.notes}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <User size={14} className="text-[#B76E79]" />
                      <span>Full Name *</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sameera Khan" 
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none transition-all ${
                        errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Phone size={14} className="text-[#B76E79]" />
                      <span>Mobile Number *</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit number" 
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none transition-all ${
                        errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Mail size={14} className="text-[#B76E79]" />
                      <span>Email Address *</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com" 
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none transition-all ${
                        errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Calendar size={14} className="text-[#B76E79]" />
                      <span>Appointment Date *</span>
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      value={form.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none transition-all ${
                        errors.date ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]'
                      }`}
                    />
                    {errors.date && <p className="text-[11px] text-red-500 font-medium">{errors.date}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Time Slot */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Clock size={14} className="text-[#B76E79]" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] focus:outline-none text-sm text-slate-700"
                    >
                      <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:30 PM)</option>
                      <option value="evening">Evening (4:30 PM - 8:00 PM)</option>
                    </select>
                  </div>

                  {/* Pre-fill Details or notes */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Medical History / Custom Requests
                    </label>
                    <input 
                      type="text" 
                      name="notes"
                      value={form.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. sensitive skin, active flare-ups"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#B76E79] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#A35D68] transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#B76E79]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying Slot...</span>
                    </>
                  ) : (
                    <>
                      <span>Secure Premium Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-400 text-center leading-normal">
                  By submitting, you agree to our clinic safety protocols. Your private data is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Store Details */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-[#B76E79]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-2xl font-bold tracking-wide text-[#B76E79] block">
                Dermed Skin & Hair Clinic
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 block mt-1">
                Tolichowki's Trusted Aesthetics Destination
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing premium skincare, chemical peeling, laser hair removal, and platelet-rich plasma restoration therapies using medical-grade safety standards.
            </p>

            <div className="flex space-x-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1 text-[#B76E79]">
                <ShieldCheck size={14} />
                <span>Certified Clinic</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1 text-[#B76E79]">
                <Award size={14} />
                <span>USFDA Lasers</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Store Address & Directions</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin size={18} className="text-[#B76E79] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  2nd Floor, Royal Plaza,<br />
                  Near Pillar No. 120, Tolichowki Main Road,<br />
                  Hyderabad, Telangana - 500008
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-[#B76E79] shrink-0" />
                <span className="text-slate-300 font-bold">9849555123</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-[#B76E79] shrink-0" />
                <span className="text-slate-300">contact@dermedtolichowki.com</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Consulting Hours</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Monday - Saturday:</span>
                <span>10:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-500">
                <span>Sunday:</span>
                <span>Prior Appointment Only</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Walk-ins are subject to clinician availability. Booking slots in advance is highly recommended.
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-600">
          <p>© 2026 Dermed Skin & Hair Clinic. All rights reserved. Developed under GWD Premium Design Standards.</p>
        </div>
      </footer>

    </div>
  );
}

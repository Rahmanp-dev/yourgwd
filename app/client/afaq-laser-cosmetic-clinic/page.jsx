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
  Target,
  FileText,
  HeartHandshake
} from 'lucide-react';

// Estimator Configurations
const TREATMENTS = [
  { id: 'laser-hair', name: 'Premium Laser Hair Removal', basePrice: 2400, icon: Sparkles },
  { id: 'carbon-peel', name: 'Carbon Laser Peel (Glow)', basePrice: 3000, icon: Star },
  { id: 'hair-prp', name: 'Hair Transplant & PRP Restoration', basePrice: 5000, icon: Award },
  { id: 'skin-peel', name: 'Signature Skin Brightening Peel', basePrice: 2000, icon: ShieldCheck },
  { id: 'mnrf-scar', name: 'Microneedling RF (Acne Scar)', basePrice: 5500, icon: Target }
];

const BODY_AREAS = [
  { id: 'face', name: 'Full Face', multiplier: 1.0 },
  { id: 'underarms', name: 'Underarms', multiplier: 0.8 },
  { id: 'arms', name: 'Full Arms', multiplier: 1.5 },
  { id: 'legs', name: 'Full Legs', multiplier: 1.8 },
  { id: 'scalp', name: 'Scalp Treatment', multiplier: 1.2 }
];

export default function AfaqClinicPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estimator State
  const [selectedTx, setSelectedTx] = useState(TREATMENTS[0].id);
  const [selectedArea, setSelectedArea] = useState(BODY_AREAS[0].id);
  const [sessions, setSessions] = useState(3);
  const [estimateLocked, setEstimateLocked] = useState(false);

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'afternoon',
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
      notes: `LOCKED ESTIMATE: ${txObj.name} for ${areaObj.name} (${sessions} Sessions). Price Quote: ₹${finalEstimate.toLocaleString('en-IN')} (Incl. GST)`
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
        id: `AFAQ-${Math.floor(100000 + Math.random() * 900000)}`,
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
      time: 'afternoon',
      notes: ''
    });
    setEstimateLocked(false);
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-[#FFF0EE] text-[#2A1A1C] selection:bg-[#B76E79]/20 font-sans antialiased relative overflow-hidden">
      
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-[5%] right-[-15%] w-[400px] h-[400px] rounded-full bg-[#B76E79]/6 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[50%] left-[-15%] w-[450px] h-[450px] rounded-full bg-[#FFFDFD]/50 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#B76E79]/8 blur-[110px] pointer-events-none"></div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFF0EE]/75 border-b border-[#B76E79]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-[#B76E79] uppercase">
              Afaq Clinic
            </span>
            <span className="text-[8px] tracking-[0.35em] uppercase text-slate-500 font-bold">
              Laser & Cosmetic Center
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold">
            <a href="#about" className="hover:text-[#B76E79] transition-colors">About Us</a>
            <a href="#estimator" className="hover:text-[#B76E79] transition-colors">Estimator</a>
            <a href="#services" className="hover:text-[#B76E79] transition-colors">Treatments</a>
            <a href="#testimonials" className="hover:text-[#B76E79] transition-colors">Reviews</a>
            <a href="#booking-form" className="px-6 py-3 rounded bg-white border border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all duration-300 font-bold active:scale-95 shadow-xs">
              Direct Booking
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
          <div className="md:hidden w-full bg-[#FFF0EE]/95 border-b border-[#B76E79]/20 backdrop-blur-lg px-6 py-6 absolute top-20 left-0 flex flex-col space-y-4 animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#B76E79]">About Us</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#B76E79]">Estimator</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#B76E79]">Treatments</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#B76E79]">Reviews</a>
            <a 
              href="#booking-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded bg-[#B76E79] text-white font-bold uppercase text-xs tracking-wider"
            >
              Direct Booking
            </a>
          </div>
        )}
      </header>

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#FFFDFD]/80 border border-[#B76E79]/20 px-4 py-1.5 rounded text-xs font-bold tracking-wider text-[#B76E79] w-fit shadow-xs uppercase">
            <Target size={14} />
            <span>Futuristic Laser Systems</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight font-extrabold uppercase tracking-tight">
            Reveal Your <br />
            <span className="text-[#B76E79]">Flawless Glow</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Afaq Laser & Cosmetic Clinic is Tolichowki's premier destination for advanced laser procedures, skin rejuvenation, and hair transplantation. Explore premium results crafted under the strictest clinical safety standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#booking-form" 
              className="px-8 py-4 bg-[#B76E79] text-white rounded font-bold uppercase tracking-wider text-xs shadow-md shadow-[#B76E79]/20 hover:bg-[#A35D68] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center space-x-2"
            >
              <span>Book Priority Consultation</span>
              <ChevronRight size={14} />
            </a>
            <a 
              href="#estimator" 
              className="px-8 py-4 bg-[#FFFDFD]/70 hover:bg-[#FFFDFD] text-slate-800 rounded font-bold uppercase tracking-wider text-xs border border-[#B76E79]/30 transition-all text-center flex items-center justify-center"
            >
              <span>Interactive Price Quote</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#B76E79]/20 max-w-md">
            <div>
              <div className="text-2xl font-serif font-black text-slate-900">8,500+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Successful Cases</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-black text-slate-900">12+ Yrs</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Local Trust</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-black text-slate-900">100%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">USFDA Devices</div>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual Glass Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded bg-[#FFFDFD]/55 backdrop-blur-md border border-[#B76E79]/20 p-4 shadow-lg">
            {/* Linear border elements for futuristic style */}
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B76E79]"></div>
            <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#B76E79]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[#B76E79]"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[#B76E79]"></div>

            <div className="w-full h-full overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Afaq Cosmetic Treatment" 
                className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FFFDFD]/95 backdrop-blur-md border border-[#B76E79]/20 shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#FFF0EE] p-2 text-[#B76E79]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-900">Laser Precision</h4>
                    <p className="text-[10px] text-slate-500">Premium skincare engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Clinical Expertise */}
      <section id="about" className="py-20 bg-[#FFFDFD]/50 backdrop-blur-md border-y border-[#B76E79]/25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#B76E79] uppercase block">Elite Science</span>
            <h2 className="font-serif text-3xl font-black text-slate-900 uppercase">
              The Science of Aesthetic Perfection
            </h2>
            <div className="w-20 h-[2px] bg-[#B76E79] mx-auto"></div>
            <p className="text-slate-600 text-sm">
              At Afaq Laser & Cosmetic Clinic, we synthesize laser physics, biochemical dermal peels, and cell-regeneration biology to produce flawless skin and hair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-[#B76E79]" />,
                title: "Targeted Treatments",
                desc: "We isolate active pigmentation layers and follicular roots, delivering calculated light energy to produce permanent clearance."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-[#B76E79]" />,
                title: "Post-Op Care Protocols",
                desc: "All laser procedures include intensive post-treatment soothing steps, premium sunscreen kits, and free follow-up consults."
              },
              {
                icon: <FileText className="w-8 h-8 text-[#B76E79]" />,
                title: "USFDA Approved Equipment",
                desc: "Our high-density Diode hair removals, Carbon lasers, and MNRF machines strictly conform to international medical certifications."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-[#FFFDFD]/80 border border-[#B76E79]/20 shadow-xs hover:border-[#B76E79]/45 hover:shadow-md transition-all duration-300 relative"
              >
                {/* corner line accents */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#B76E79]/60"></div>
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#B76E79]/60"></div>

                <div className="w-12 h-12 bg-[#FFF0EE] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base font-bold uppercase text-slate-800 tracking-wider mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1 bg-[#FFFDFD]/80 border border-[#B76E79]/20 px-3 py-1 text-[10px] font-bold text-[#B76E79] w-fit shadow-xs uppercase">
              <span>Scientific Billing</span>
            </div>
            
            <h2 className="font-serif text-3xl font-black text-slate-900 leading-tight uppercase">
              Transparent <br />
              <span className="text-[#B76E79]">Treatment Estimator</span>
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              We believe in 100% price transparency. No surprise surcharges or arbitrary consulting additions. Tweak the options below to calculate your package instantly.
            </p>

            <div className="space-y-3 font-medium text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-[#B76E79]" />
                <span>3-5 Sessions Package: <strong className="text-slate-800">10% Off</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-[#B76E79]" />
                <span>6+ Sessions Package: <strong className="text-slate-800">20% Off</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-[#B76E79]" />
                <span>GST calculated transparently at 18% standard rate.</span>
              </div>
            </div>
          </div>

          {/* Calculator Grid UI */}
          <div className="lg:col-span-7 bg-[#FFFDFD]/80 backdrop-blur-md border border-[#B76E79]/20 p-6 sm:p-8 rounded shadow-lg relative">
            {/* Linear border accents */}
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-[#B76E79]"></div>
            <div className="absolute top-0 right-0 w-[1px] h-4 bg-[#B76E79]"></div>
            
            <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-slate-800 mb-6 border-b border-[#B76E79]/10 pb-2">Treatment Cost Calculator</h3>
            
            <div className="space-y-6">
              {/* Treatment Type */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Select Clinical Procedure
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TREATMENTS.map(tx => (
                    <div
                      key={tx.id}
                      onClick={() => {
                        setSelectedTx(tx.id);
                        setEstimateLocked(false);
                      }}
                      className={`p-4 rounded border cursor-pointer transition-all flex items-center justify-between ${
                        selectedTx === tx.id 
                          ? 'bg-[#B76E79]/10 border-[#B76E79]' 
                          : 'bg-[#FFFDFD] border-slate-200 hover:border-[#B76E79]/45'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-1.5 ${selectedTx === tx.id ? 'text-[#B76E79]' : 'text-slate-400'}`}>
                          {React.createElement(tx.icon, { size: 16 })}
                        </div>
                        <span className="text-xs font-bold text-slate-800">{tx.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">₹{tx.basePrice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Body Area */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Targeted Body Area
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
                      className={`px-4 py-2 border text-[10px] uppercase font-bold tracking-wider transition-all ${
                        selectedArea === area.id
                          ? 'bg-[#B76E79] text-white border-[#B76E79]'
                          : 'bg-[#FFFDFD] border-slate-200 text-slate-600 hover:border-[#B76E79]/40'
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
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Sessions Package
                  </label>
                  <span className="text-xs font-mono font-bold text-[#B76E79] bg-[#B76E79]/10 px-2 py-0.5">
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
                  className="w-full accent-[#B76E79] h-1 bg-slate-200 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-1">
                  <span>1 sess</span>
                  <span>4 sess</span>
                  <span>8 sess</span>
                </div>
              </div>

              {/* Cost Summary Box */}
              <div className="p-4 bg-[#FFF0EE]/40 border border-[#B76E79]/20 text-xs space-y-2 font-medium">
                <div className="flex justify-between text-slate-600">
                  <span>Standard Cost ({sessions} × ₹{baseCostPerSession})</span>
                  <span>₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                
                {discountAmt > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Package Discount ({discountPercent}%)</span>
                    <span>-₹{discountAmt.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600">
                  <span>Standard 18% GST</span>
                  <span>₹{gstAmt.toLocaleString('en-IN')}</span>
                </div>

                <div className="h-[1px] bg-[#B76E79]/15 my-2"></div>

                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">Total Price Quote</span>
                  <span className="text-xl font-mono font-black text-slate-900">
                    ₹{finalEstimate.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLockEstimate}
                className="w-full py-4 bg-slate-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <Lock size={14} />
                <span>{estimateLocked ? 'Estimate Linked & Locked' : 'Apply Quote & Book Slot'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-[#FFFDFD]/60 backdrop-blur-md border-t border-[#B76E79]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#B76E79] uppercase block">Scientific Menu</span>
            <h2 className="font-serif text-3xl font-black text-slate-900 uppercase">
              Clinical Procedures
            </h2>
            <div className="w-16 h-[2px] bg-[#B76E79] mx-auto"></div>
            <p className="text-slate-600 text-sm">
              We perform a variety of advanced lasers and peels under qualified dermatologists. All pricing is inclusive of aftercare kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Laser Hair Removal",
                tagline: "High-density Diode Laser",
                price: "₹2,400",
                desc: "Painless triple-wavelength laser hair reduction targeting follicles. Clinically proven safe on all South Asian skin tones.",
                time: "45 mins",
                device: "USFDA Diode"
              },
              {
                title: "Carbon Peel",
                tagline: "ND:YAG Carbon Q-Switch",
                price: "₹3,000",
                desc: "Q-Switched laser vaporizing activated carbon to extract debris, exfoliate epidermis, and trigger instant glowing skin.",
                time: "40 mins",
                device: "Q-Switched Nd:YAG"
              },
              {
                title: "Hair PRP",
                tagline: "Platelet Growth Factors",
                price: "₹5,000",
                desc: "Centrifuged platelet enrichment micro-injected into follicular gaps. Promotes hair thickness and halts alopecia.",
                time: "45 mins",
                device: "Autologous Meso"
              },
              {
                title: "Signature Brightening Peel",
                tagline: "Glycolic & Retinol Peels",
                price: "₹2,000",
                desc: "Targeted organic acid peels to peel away outer damaged skin layers, revealing brighter tone and resolving dark circles.",
                time: "30 mins",
                device: "Dermal Grade"
              },
              {
                title: "Microneedling RF",
                tagline: "Radiofrequency Collagen",
                price: "₹5,500",
                desc: "Calculated heat energy delivered via micro-pins to trigger instant elastin regeneration, repairing deep pits and acne scars.",
                time: "60 mins",
                device: "MNRF System"
              },
              {
                title: "Tattoo Removal",
                tagline: "Aesthetic Laser Pigmentation",
                price: "₹2,500",
                desc: "Laser bursts targeting ink pigments, shattering them into micro-particles absorbed by body immune cells.",
                time: "30 mins",
                device: "Q-Switched Laser"
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-[#FFFDFD]/80 border border-[#B76E79]/20 p-6 shadow-xs hover:border-[#B76E79]/45 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#B76E79]"></div>
                <div className="absolute top-0 left-0 w-[1px] h-2 bg-[#B76E79]"></div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-800">{srv.title}</h3>
                      <span className="text-[10px] text-slate-400 font-bold block">{srv.tagline}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#B76E79] bg-[#B76E79]/10 px-2 py-0.5">
                      {srv.price}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between text-[9px] text-slate-400 font-mono font-bold">
                  <span className="flex items-center space-x-1">
                    <Clock size={10} className="text-[#B76E79]" />
                    <span>{srv.time}</span>
                  </span>
                  <span>{srv.device}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Transformations / Reviews */}
      <section id="testimonials" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] tracking-[0.2em] font-bold text-[#B76E79] uppercase block">Success Files</span>
          <h2 className="font-serif text-3xl font-black text-slate-900 uppercase">
            Clinical Case Transformations
          </h2>
          <div className="w-16 h-[2px] bg-[#B76E79] mx-auto"></div>
          <p className="text-slate-600 text-sm">
            Read clinical outcome reports verified by photographic evidence (pre-authorized by consenting patients).
          </p>
        </div>

        {/* Before After Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Case 1 */}
          <div className="bg-[#FFFDFD]/80 border border-[#B76E79]/20 p-6 shadow-xs space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Afaq Patient Before" 
                  className="w-full h-full object-cover grayscale opacity-95"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/80 text-[8px] font-bold text-white uppercase tracking-wider">Baseline Case</span>
              </div>
              <div className="relative rounded overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Afaq Patient After" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#B76E79]/90 text-[8px] font-bold text-white uppercase tracking-wider">Week 8 Follow-up</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-xs italic text-slate-700 leading-relaxed">
                "Had severe pigment patches on my forehead and cheekbones. The carbon laser peeling and signature glycolic peel cleared 90% of the tan. The skin has a beautiful uniform sheen now."
              </p>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                — Farhana Begum <span className="font-normal text-slate-400 font-sans lowercase">(aesthetic laser patient)</span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-[#FFFDFD]/80 border border-[#B76E79]/20 p-6 shadow-xs space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Laser Hair Before" 
                  className="w-full h-full object-cover grayscale opacity-95"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/80 text-[8px] font-bold text-white uppercase tracking-wider">Baseline Case</span>
              </div>
              <div className="relative rounded overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Laser Hair After" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#B76E79]/90 text-[8px] font-bold text-white uppercase tracking-wider">After 5 sessions</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-xs italic text-slate-700 leading-relaxed">
                "Excellent hair reduction results. Facial hair was a major issue due to PCOS, but the diode laser treatment recommended here halted thickness and growth completely. Very professional clinic."
              </p>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                — Dr. N. Tabassum <span className="font-normal text-slate-400 font-sans lowercase">(diode laser client)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Written testimonies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { author: "Rehan Ahmed", tx: "Microneedling RF", quote: "Highly professional laser doctors. The microneedling RF significantly minimized deep acne pits. My cheeks are much smoother." },
            { author: "Sarah Fatima", tx: "Carbon Peel", quote: "Got the carbon peel done before my engagement. The glowing skin was immediate and lasted for weeks. Best laser service in Kakatiya Nagar." },
            { author: "Md. Adil Sheikh", tx: "Hair Restoration", quote: "Did 6 sessions of scalp PRP. The hair shedding stopped completely and new baby hair is visible now. Authentic clinic." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-[#FFFDFD]/60 border border-[#B76E79]/20 shadow-xs space-y-2 relative">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">{item.author}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#B76E79]/10 px-2 py-0.5">{item.tx}</span>
              </div>
              <div className="flex text-amber-400 space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Consultation Form Section */}
      <section id="booking-form" className="py-20 bg-[#FFFDFD]/50 backdrop-blur-md border-t border-[#B76E79]/25 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#B76E79] uppercase block">Direct Intake Registry</span>
            <h2 className="font-serif text-3xl font-black text-slate-900 uppercase">
              Schedule Clinic Visit
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Reserved consultation slots receive clinical priority. Fill out the validation fields below to secure your timing.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#FFFDFD] border border-[#B76E79]/25 p-8 rounded shadow-md relative">
            {/* Linear border accents */}
            <div className="absolute top-0 left-0 w-6 h-[2px] bg-[#B76E79]"></div>
            <div className="absolute top-0 left-0 w-[2px] h-6 bg-[#B76E79]"></div>

            {submittedData ? (
              // SUCCESS SCREEN
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <Check size={30} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-wider text-slate-900 font-serif">Afaq Registration Confirmed!</h3>
                  <p className="text-xs text-slate-500">
                    A call coordinator will touch base in 30 minutes.
                  </p>
                </div>

                <div className="p-6 bg-[#FFF0EE]/40 border border-[#B76E79]/20 text-left max-w-md mx-auto space-y-2 text-xs font-medium">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Appointment Reference:</span>
                    <span className="font-mono font-bold text-slate-800">{submittedData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Patient Name:</span>
                    <span className="font-bold text-slate-800">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Mobile Phone:</span>
                    <span className="font-bold text-slate-800">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Reserved Date:</span>
                    <span className="font-bold text-slate-800">{submittedData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase">Preferred Hours:</span>
                    <span className="font-bold text-slate-800 capitalize">{submittedData.time}</span>
                  </div>
                  {submittedData.notes && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-slate-400 font-bold uppercase block mb-1">Clinic Instructions:</span>
                      <p className="bg-white p-2 rounded border border-slate-100 text-[10px] text-slate-500 leading-tight">
                        {submittedData.notes}
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-[10px] text-slate-400 max-w-sm mx-auto leading-normal">
                  To reschedule, call us at <span className="font-bold text-[#B76E79]">9246881234</span>. Keep your reference ID handy.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-900 text-white hover:bg-slate-800 transition-all text-xs font-bold uppercase tracking-wider"
                >
                  Book New Slot
                </button>
              </div>
            ) : (
              // INPUT FORM
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {estimateLocked && (
                  <div className="p-4 bg-[#B76E79]/10 border border-[#B76E79]/30 flex items-start space-x-3 text-xs text-[#B76E79]">
                    <Lock size={14} className="mt-0.5 shrink-0" />
                    <div>
                      <strong className="block font-bold">Price Quote Locked:</strong>
                      <span className="leading-tight block mt-0.5">{form.notes}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <User size={12} className="text-[#B76E79]" />
                      <span>Patient Name *</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Farhana Begum" 
                      className={`w-full px-4 py-3 rounded border bg-white focus:outline-none transition-all text-xs ${
                        errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-200' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]/30'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Phone size={12} className="text-[#B76E79]" />
                      <span>Phone Number *</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number" 
                      className={`w-full px-4 py-3 rounded border bg-white focus:outline-none transition-all text-xs ${
                        errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-200' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]/30'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Mail size={12} className="text-[#B76E79]" />
                      <span>Email Address *</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="patient@domain.com" 
                      className={`w-full px-4 py-3 rounded border bg-white focus:outline-none transition-all text-xs ${
                        errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-200' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]/30'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Calendar size={12} className="text-[#B76E79]" />
                      <span>Preferred Date *</span>
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      value={form.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded border bg-white focus:outline-none transition-all text-xs ${
                        errors.date ? 'border-red-400 focus:ring-1 focus:ring-red-200' : 'border-slate-200 focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]/30'
                      }`}
                    />
                    {errors.date && <p className="text-[10px] text-red-500 font-bold">{errors.date}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Time Slot */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Clock size={12} className="text-[#B76E79]" />
                      <span>Preferred Hours</span>
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-slate-200 bg-white focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]/30 focus:outline-none text-xs text-slate-700"
                    >
                      <option value="morning">Morning Slot (10:30 AM - 1:30 PM)</option>
                      <option value="afternoon">Afternoon Slot (1:30 PM - 5:00 PM)</option>
                      <option value="evening">Evening Slot (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Remarks / Specific Scars
                    </label>
                    <input 
                      type="text" 
                      name="notes"
                      value={form.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. sensitive skin types, hyperpigmentation details"
                      className="w-full px-4 py-3 rounded border border-slate-200 bg-white focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]/30 focus:outline-none text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#B76E79] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#A35D68] transition-all disabled:opacity-75 disabled:cursor-not-allowed shadow-md shadow-[#B76E79]/20"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Locking Booking...</span>
                    </div>
                  ) : (
                    <span>Register Appointment</span>
                  )}
                </button>

                <p className="text-[9px] text-slate-400 text-center leading-normal">
                  Private Medical Intake. Data is encrypted and compliant with medical standards.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Store Details */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-[#B76E79]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-[#B76E79] uppercase block">
                Afaq Laser Clinic
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-slate-500 font-bold block mt-1">
                Aesthetic Perfection Tolichowki
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delivering medical-grade chemical peeling, Diode and ND:YAG lasers, and micro-needling treatments. Our clinical devices carry worldwide regulatory safety clearances.
            </p>

            <div className="flex space-x-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span className="flex items-center space-x-1 text-[#B76E79]">
                <ShieldCheck size={12} />
                <span>USFDA Approved</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1 text-[#B76E79]">
                <Award size={12} />
                <span>Premium Quality</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Clinic Location</h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-[#B76E79] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Afaq Tower, Opp. Pillar No. 115,<br />
                  Kakatiya Nagar Colony Cross Road,<br />
                  Tolichowki Main Road, Hyderabad - 500008
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={14} className="text-[#B76E79] shrink-0" />
                <span className="text-slate-300 font-bold font-mono">9246881234</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={14} className="text-[#B76E79] shrink-0" />
                <span className="text-slate-300 font-mono">info@afaqlaserclinic.com</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Consulting Registry</h4>
            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex justify-between border-b border-slate-900 pb-1">
                <span>Mon - Sat:</span>
                <span className="font-mono">10:30 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-1 text-slate-600">
                <span>Sunday:</span>
                <span>Prior Booking Only</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-normal">
                To guarantee zero wait times, appointments must be scheduled in advance via our direct portal or phone registry.
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-[9px] text-slate-600 font-mono uppercase tracking-wider">
          <p>© 2026 Afaq Laser & Cosmetic Clinic. All rights reserved. Created under GWD standards.</p>
        </div>
      </footer>

    </div>
  );
}

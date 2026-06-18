"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ChevronRight, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Heart,
  Award,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function Page() {
  // Treatment Estimator State
  const [treatment, setTreatment] = useState('laser');
  const [area, setArea] = useState('face');
  const [sessions, setSessions] = useState(6);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatmentInterest: 'Laser Hair Reduction',
    preferredTime: 'Morning (9 AM - 12 PM)'
  });
  
  // Validation State
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Pricing configuration for Oliva Estimator
  const treatmentPrices = {
    laser: { name: 'Laser Hair Reduction', basePrice: 5000 },
    acne: { name: 'Acne Scar Revision', basePrice: 6500 },
    brightening: { name: 'Skin Lightening & Peels', basePrice: 4000 },
    hairloss: { name: 'Hair Loss PRP Therapy', basePrice: 7500 }
  };

  const areaMultipliers = {
    underarms: { name: 'Underarms', multiplier: 0.8 },
    face: { name: 'Full Face', multiplier: 1.0 },
    arms: { name: 'Full Arms', multiplier: 1.5 },
    legs: { name: 'Full Legs', multiplier: 2.0 },
    fullbody: { name: 'Full Body', multiplier: 3.5 }
  };

  const getSessionDiscount = (num) => {
    if (num === 1) return 1.0;
    if (num === 3) return 0.90; // 10% off
    if (num === 6) return 0.80; // 20% off
    if (num === 8) return 0.75; // 25% off
    return 1.0;
  };

  const calculateEstimate = () => {
    const base = treatmentPrices[treatment].basePrice;
    const mult = areaMultipliers[area].multiplier;
    const discount = getSessionDiscount(sessions);
    const total = base * mult * sessions * discount;
    return Math.round(total).toLocaleString('en-IN');
  };

  // Form Submission Validation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    // Phone Validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp phone number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    // Email Validation (optional but if provided must be valid)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FFF5F5] text-[#2D3748] font-sans selection:bg-[#E0A899] selection:text-white min-h-screen">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 bg-[#FFF5F5]/90 backdrop-blur-md border-b border-[#E0A899]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center font-serif text-xl rounded-full bg-[#FFF0F5] border border-[#E0A899] text-[#E0A899]">
              O
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-wide block uppercase text-[#2D3748]">Oliva</span>
              <span className="text-[10px] uppercase tracking-widest block -mt-1 opacity-70 text-[#E0A899]">Skin & Hair Clinic</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#expertise" className="hover:text-[#E0A899] transition-colors">Expertise</a>
            <a href="#estimator" className="hover:text-[#E0A899] transition-colors">Treatment Estimator</a>
            <a href="#services" className="hover:text-[#E0A899] transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-[#E0A899] transition-colors">Success Stories</a>
            <a href="#book" className="px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold bg-[#E0A899] hover:bg-[#d49989] text-white rounded-full transition-all shadow-sm">
              Schedule Visit
            </a>
          </nav>

          <a href="tel:+919849551988" className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF0F5] border border-[#E0A899]/30 rounded-full text-xs font-bold text-[#E0A899]">
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F5] to-[#FFF5F5]">
        {/* Organic background waves */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C240 280 480 120 720 180C960 240 1200 320 1440 280V0H0V200Z" fill="url(#waveGrad)" />
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F5" />
                <stop offset="100%" stopColor="#FFF5F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E0A899]/30 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#E0A899] shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Premium Dermatology Clinic • Tolichowki</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2D3748] leading-[1.15]">
              Scientific skin care <br />
              <span className="text-[#E0A899] italic">tailored for you.</span>
            </h1>
            <p className="text-sm md:text-base text-[#2D3748]/80 leading-relaxed max-w-2xl font-light">
              Experience the finest US-FDA approved dermatological solutions in Hyderabad. Our team of certified expert dermatologists provides personalized plans for skin rejuvenation, laser hair reduction, and hair restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#estimator" className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-bold bg-[#E0A899] hover:bg-[#d49989] text-white rounded-full transition-all shadow-md">
                Try Treatment Estimator
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#book" className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-bold border border-[#E0A899]/40 hover:bg-[#FFF0F5] text-[#2D3748] rounded-full transition-all">
                Book Free Consult
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-3 bg-white border border-[#E0A899]/20 rounded-[2.5rem] shadow-xl max-w-sm w-full">
              <img 
                src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&q=80" 
                alt="Oliva Clinic Dermatologist consultation" 
                className="w-full h-[360px] object-cover rounded-[2rem] border border-[#FFF0F5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Expertise/About */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="p-3 bg-[#FFF0F5] border border-[#E0A899]/20 rounded-[2rem] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" 
                alt="Advanced skincare equipment" 
                className="w-full h-[320px] object-cover rounded-[1.7rem]"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E0A899] block">Clinic Legacy</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D3748]">Clinical Precision Meets Elegant Aesthetic Care</h2>
            <p className="text-sm md:text-base text-[#2D3748]/75 leading-relaxed font-light">
              At Oliva Skin & Hair Clinic, we blend state-of-the-art medical technology with highly customized aesthetic methodologies. Every treatment protocol is formulated by leading dermatologists following deep skin-type analysis. Located conveniently on Tolichowki Road, our facility delivers maximum safety and comfort.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#FFF5F5]">
              <div className="space-y-1">
                <span className="block text-3xl font-bold text-[#E0A899]">100k+</span>
                <span className="block text-[10px] uppercase tracking-wider text-[#2D3748]/60">Happy Clients Served</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl font-bold text-[#E0A899]">91%</span>
                <span className="block text-[10px] uppercase tracking-wider text-[#2D3748]/60">Satisfaction Rate</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl font-bold text-[#E0A899]">US-FDA</span>
                <span className="block text-[10px] uppercase tracking-wider text-[#2D3748]/60">Approved Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 bg-[#FFF0F5] border-y border-[#E0A899]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E0A899]">Transparent Pricing</span>
            <h2 className="text-3xl font-serif font-bold text-[#2D3748]">Interactive Treatment Estimator</h2>
            <p className="text-xs md:text-sm text-[#2D3748]/75 max-w-lg mx-auto">
              Get an instant customized valuation by selecting the desired treatment type, target area, and number of clinical sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Control Panel Card */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E0A899]/20 shadow-sm space-y-6">
              
              {/* Step 1: Treatment type */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold text-[#2D3748]/60">1. Select Skin/Hair Treatment</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(treatmentPrices).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setTreatment(key)}
                      className={`p-4 text-left rounded-2xl border transition-all flex justify-between items-center ${
                        treatment === key
                          ? 'border-[#E0A899] bg-[#FFF5F5] text-[#2D3748]'
                          : 'border-[#FFF0F5] hover:bg-[#FFF5F5]/50 text-[#2D3748]/70'
                      }`}
                    >
                      <span className="text-xs font-semibold">{item.name}</span>
                      {treatment === key && <Check className="w-4 h-4 text-[#E0A899]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Body Area */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold text-[#2D3748]/60">2. Target Area</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(areaMultipliers).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setArea(key)}
                      className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-all text-center ${
                        area === key
                          ? 'border-[#E0A899] bg-[#FFF5F5] text-[#2D3748]'
                          : 'border-[#FFF0F5] hover:bg-[#FFF5F5]/50 text-[#2D3748]/70'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Sessions */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold text-[#2D3748]/60">3. Preferred Number of Sessions</label>
                <div className="grid grid-cols-4 gap-3">
                  {[1, 3, 6, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSessions(num)}
                      className={`py-3 rounded-xl border font-bold text-xs transition-all text-center ${
                        sessions === num
                          ? 'border-[#E0A899] bg-[#FFF5F5] text-[#2D3748]'
                          : 'border-[#FFF0F5] hover:bg-[#FFF5F5]/50 text-[#2D3748]/70'
                      }`}
                    >
                      {num} {num === 1 ? 'Session' : 'Sessions'}
                    </button>
                  ))}
                </div>
                {sessions > 1 && (
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ✓ Multi-session package includes {Math.round((1 - getSessionDiscount(sessions)) * 100)}% discount.
                  </p>
                )}
              </div>
            </div>

            {/* Live Calculation Panel */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E0A899]/20 shadow-md flex flex-col justify-between">
              <div className="space-y-5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#E0A899] block">Live Estimation Summary</span>
                <h3 className="text-xl font-serif font-bold text-[#2D3748] border-b border-[#FFF5F5] pb-3">Oliva Custom Plan</h3>
                
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="opacity-70 text-[#2D3748]">Treatment:</span>
                    <span className="font-semibold text-right">{treatmentPrices[treatment].name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70 text-[#2D3748]">Target Area:</span>
                    <span className="font-semibold">{areaMultipliers[area].name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70 text-[#2D3748]">Sessions Selected:</span>
                    <span className="font-semibold">{sessions} {sessions === 1 ? 'Session' : 'Sessions'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70 text-[#2D3748]">Base Rate / Session:</span>
                    <span className="font-semibold">₹{treatmentPrices[treatment].basePrice}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#FFF5F5] mt-6 text-center space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#2D3748]/60 block">Estimated Package Price</span>
                <span className="text-3xl font-bold text-[#E0A899] block">₹{calculateEstimate()}*</span>
                <p className="text-[9px] text-[#2D3748]/50 italic -mt-2">
                  *Excludes GST. Final prices may vary based on clinical assessment.
                </p>
                <a href="#book" className="w-full block py-3.5 text-center text-xs uppercase tracking-widest font-bold bg-[#E0A899] hover:bg-[#d49989] text-white rounded-full transition-all shadow-sm">
                  Lock This Estimate Rate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E0A899]">Premium Treatments</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D3748]">Clinical Hair & Skincare Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FFF5F5] p-6 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2D3748] mb-2">Laser Hair Reduction</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed font-light mb-4">
                  Achieve smooth, hair-free skin with custom US-FDA approved laser wavelengths safe for all skin types.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF5F5] p-6 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2D3748] mb-2">Acne Scar Revision</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed font-light mb-4">
                  Smooth out deep pits and pigmentation using advanced RF Microneedling combined with medical grade skin peels.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF5F5] p-6 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2D3748] mb-2">Hair Regrowth & PRP</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed font-light mb-4">
                  Natural growth factors are concentrated and injected into target areas on the scalp to combat thinning.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFF5F5] p-6 rounded-3xl border border-[#E0A899]/15 hover:border-[#E0A899]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2D3748] mb-2">Skin Rejuvenation</h3>
                <p className="text-xs text-[#2D3748]/70 leading-relaxed font-light mb-4">
                  Restore hydration, reduce fine wrinkles, and eliminate hyperpigmentation with dermatological facials.
                </p>
              </div>
              <a href="#book" className="text-xs font-bold text-[#E0A899] inline-flex items-center gap-1 hover:underline">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Transformations / Testimonials */}
      <section id="testimonials" className="py-20 bg-[#FFF0F5] border-t border-[#E0A899]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E0A899]">Real Transformations</span>
            <h2 className="text-3xl font-serif font-bold text-[#2D3748]">What Our Patients Say</h2>
            <p className="text-xs text-[#2D3748]/60">Verified clinic outcomes from local patients in Hyderabad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E0A899]/15 shadow-sm space-y-4">
              <div className="flex gap-1 text-[#E0A899]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-[#2D3748]/80 leading-relaxed italic">
                "I had severe acne scars for years. After a six-session plan of CO2 fractional laser at Tolichowki Oliva branch, my skin is vastly smoother. Highly recommend the expert dermatologists here!"
              </p>
              <div className="border-t border-[#FFF5F5] pt-3 flex justify-between items-center">
                <div>
                  <span className="font-serif font-bold text-sm block text-[#2D3748]">Farah Fatima</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#2D3748]/55">Tolichowki, Hyderabad</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Acne Treatment</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E0A899]/15 shadow-sm space-y-4">
              <div className="flex gap-1 text-[#E0A899]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-[#2D3748]/80 leading-relaxed italic">
                "The laser hair reduction treatment is completely painless and highly professional. The staff explained the whole physics of it during consultation. The pricing is very clean and fair."
              </p>
              <div className="border-t border-[#FFF5F5] pt-3 flex justify-between items-center">
                <div>
                  <span className="font-serif font-bold text-sm block text-[#2D3748]">Nikhil Reddy</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#2D3748]/55">Gachibowli, Hyderabad</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Laser Hair</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E0A899]/15 shadow-sm space-y-4">
              <div className="flex gap-1 text-[#E0A899]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-[#2D3748]/80 leading-relaxed italic">
                "Was facing severe hair loss due to hard water issues. Opted for the Hair Growth PRP therapy. Visible improvement in density in 4 sessions. Extremely sanitary and premium clinic environment."
              </p>
              <div className="border-t border-[#FFF5F5] pt-3 flex justify-between items-center">
                <div>
                  <span className="font-serif font-bold text-sm block text-[#2D3748]">Saba Khan</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#2D3748]/55">Mehdipatnam, Hyderabad</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">PRP Therapy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="book" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E0A899] block">Reservation Desk</span>
            <h2 className="text-3xl font-serif font-bold text-[#2D3748]">Request A Certified Dermatologist Consultation</h2>
            <p className="text-xs md:text-sm text-[#2D3748]/75 leading-relaxed font-light">
              Book a clinic visit or online video consultation. Provide your mobile number and our customer experience officer will reach out within 30 minutes to lock down a convenient time slot.
            </p>
            <div className="space-y-4 pt-6 border-t border-[#FFF5F5]">
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-5 h-5 shrink-0 text-[#E0A899] opacity-80" />
                <span>2nd Floor, Oasis Plaza, Tolichowki Main Road, Hyderabad - 500008</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-5 h-5 shrink-0 text-[#E0A899] opacity-80" />
                <a href="tel:+919849551988" className="hover:underline font-semibold">+91 9849551988</a>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-5 h-5 shrink-0 text-[#E0A899] opacity-80" />
                <a href="mailto:contact@olivaclinic.com" className="hover:underline">tolichowki@olivaclinic.com</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#FFF5F5] p-8 rounded-3xl border border-[#E0A899]/20 shadow-sm relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2D3748]">Consultation Slot Requested</h3>
                  <p className="text-xs text-[#2D3748]/70 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#2D3748]">{formData.name}</span>. We've received your request for <span className="font-bold text-[#E0A899]">{formData.treatmentInterest}</span>. Our desk officer will call you at <span className="font-bold text-[#2D3748]">+91 {formData.phone}</span> in 30 minutes to confirm your slot.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', treatmentInterest: 'Laser Hair Reduction', preferredTime: 'Morning (9 AM - 12 PM)' });
                    }} 
                    className="px-6 py-2 text-xs font-bold text-[#E0A899] border border-[#E0A899]/40 hover:bg-[#FFF0F5] rounded-full transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Full Name *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Sana Khan"
                        className={`w-full p-3.5 text-xs bg-white border ${errors.name ? 'border-red-400' : 'border-[#E0A899]/20'} rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748]`} 
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">WhatsApp Phone Number *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 9849551988"
                        className={`w-full p-3.5 text-xs bg-white border ${errors.phone ? 'border-red-400' : 'border-[#E0A899]/20'} rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748]`} 
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Email Address (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. sana@gmail.com"
                      className={`w-full p-3.5 text-xs bg-white border ${errors.email ? 'border-red-400' : 'border-[#E0A899]/20'} rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748]`} 
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Treatment Interest</label>
                      <select 
                        value={formData.treatmentInterest}
                        onChange={e => setFormData({...formData, treatmentInterest: e.target.value})}
                        className="w-full p-3.5 text-xs bg-white border border-[#E0A899]/20 rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748] appearance-none"
                      >
                        <option>Laser Hair Reduction</option>
                        <option>Acne Scar Revision</option>
                        <option>Skin Lightening & Peels</option>
                        <option>Hair Loss PRP Therapy</option>
                        <option>General Dermatological Exam</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#2D3748]/60">Preferred Time Slot</label>
                      <select 
                        value={formData.preferredTime}
                        onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                        className="w-full p-3.5 text-xs bg-white border border-[#E0A899]/20 rounded-xl outline-none focus:border-[#E0A899] text-[#2D3748] appearance-none"
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 text-xs uppercase tracking-widest font-bold mt-2 bg-[#E0A899] hover:bg-[#d49989] text-white rounded-xl transition-all shadow-md">
                    Request Booking Slot
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#FFF0F5] border-t border-[#E0A899]/20 py-16 text-center text-[#2D3748]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex justify-center items-center gap-2">
            <span className="font-serif font-bold text-lg tracking-wide uppercase">Oliva Clinic</span>
            <span className="text-xs text-[#E0A899] font-bold">•</span>
            <span className="text-xs font-semibold tracking-wider text-[#2D3748]/70">Tolichowki Branch</span>
          </div>
          
          <p className="text-xs text-[#2D3748]/60 max-w-md mx-auto leading-relaxed">
            Plot No. 12, Oasis Center, Tolichowki Main Road, opposite Pillar 87, Tolichowki, Hyderabad, Telangana 500008
          </p>

          <div className="flex justify-center gap-6 text-[11px] font-bold text-[#E0A899] uppercase tracking-widest">
            <span>FDA Approved Safe Laser</span>
            <span>•</span>
            <span>Certified Dermatologists</span>
            <span>•</span>
            <span>Customized Protocols</span>
          </div>

          <p className="text-[10px] text-[#2D3748]/50 uppercase tracking-widest pt-4 border-t border-[#E0A899]/10">
            © 2026 Oliva Skin & Hair Clinic Hyderabad. All Rights Reserved. Clinical Helpline: +91 9849551988
          </p>
        </div>
      </footer>

    </div>
  );
}

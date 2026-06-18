"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Calculator, 
  Check, 
  Calendar, 
  Clock, 
  Scissors, 
  ArrowRight,
  TrendingUp,
  User,
  Heart,
  Star
} from 'lucide-react';

// Treatment prices setup
const TREATMENTS = [
  { id: 'laser-hair', name: 'Laser Hair Removal', basePrice: 2500, icon: Sparkles },
  { id: 'chemical-peel', name: 'Premium Chemical Peel', basePrice: 1800, icon: Scissors },
  { id: 'hair-transplant', name: 'Follicular Hair Transplant', basePrice: 48000, icon: Shield },
  { id: 'acne-scar', name: 'Acne Scar Resurfacing', basePrice: 4000, icon: TrendingUp },
];

const AREAS = [
  { id: 'face', name: 'Facial Area', multiplier: 1.0 },
  { id: 'underarms', name: 'Underarms', multiplier: 0.8 },
  { id: 'full-arms', name: 'Full Arms', multiplier: 1.5 },
  { id: 'full-back', name: 'Full Back', multiplier: 2.2 },
  { id: 'scalp', name: 'Full Scalp', multiplier: 1.8 },
];

const SESSIONS = [
  { count: 1, label: 'Single Trial Session', discount: 0 },
  { count: 3, label: '3-Session Premium Plan (10% Off)', discount: 0.10 },
  { count: 6, label: '6-Session Maximum Efficacy Plan (20% Off)', discount: 0.20 },
];

export default function DermaclinixPage() {
  // Treatment Estimator State
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS[0]);
  const [selectedArea, setSelectedArea] = useState(AREAS[0]);
  const [selectedSession, setSelectedSession] = useState(SESSIONS[0]);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    treatment: TREATMENTS[0].name,
    preferredDate: '',
    preferredTime: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedCode, setSubmittedCode] = useState('');

  // Calculate prices
  const baseCost = selectedTreatment.basePrice * selectedArea.multiplier;
  const rawTotal = baseCost * selectedSession.count;
  const discountAmount = rawTotal * selectedSession.discount;
  const finalPrice = Math.round(rawTotal - discountAmount);

  // Validate form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'Name must be at least 3 characters';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select a date';
    }
    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a time slot';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Success simulation
    const bookingCode = `DC-HYD-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(bookingCode);
    setIsSubmitted(true);
    setFormErrors({});
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-slate-900">
      
      {/* Top Bar Call-To-Action */}
      <div className="bg-slate-900 text-white text-[11px] tracking-[0.2em] uppercase py-2 px-4 border-b border-slate-900 flex justify-between items-center">
        <span>PREMIUM CLINICAL DERMATOLOGY</span>
        <div className="flex items-center gap-4">
          <a href="tel:9849012345" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 font-bold">
            <Phone size={10} className="text-sky-400" />
            +91 98490 12345
          </a>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-950 flex items-center justify-center text-white font-black text-sm select-none">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight leading-none uppercase">DERMACLINIX</span>
              <span className="text-[10px] tracking-[0.25em] text-sky-500 font-bold uppercase mt-0.5">HYDERABAD</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-wider text-slate-950">
            <a href="#about" className="hover:text-sky-500 transition-colors py-2 border-b-2 border-transparent hover:border-slate-950">Expertise</a>
            <a href="#estimator" className="hover:text-sky-500 transition-colors py-2 border-b-2 border-transparent hover:border-slate-950">Calculator</a>
            <a href="#services" className="hover:text-sky-500 transition-colors py-2 border-b-2 border-transparent hover:border-slate-950">Treatments</a>
            <a href="#testimonials" className="hover:text-sky-500 transition-colors py-2 border-b-2 border-transparent hover:border-slate-950">Transformations</a>
          </nav>

          <a href="#booking" className="bg-slate-950 text-white hover:bg-sky-500 transition-colors px-6 py-3 text-xs font-bold uppercase tracking-wider border border-slate-950">
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full border-b border-slate-950 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 min-h-[70vh]">
          {/* Hero Left Content */}
          <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center border-r border-slate-950">
            <div className="inline-flex items-center gap-2 border border-slate-950 px-3.5 py-1 w-fit mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-900">
              <span className="w-2 h-2 bg-sky-500 inline-block"></span>
              Tolichowki Branch, Hyderabad
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900 mb-8">
              Clinical <br />Precision.<br />
              <span className="text-sky-500">Uncompromising</span> Care.
            </h1>
            <p className="text-slate-600 text-sm max-w-lg mb-10 leading-relaxed font-medium">
              We merge cutting-edge medical lasers and certified clinical dermatologists to restore, optimize, and elevate your skin and hair vitality. Located in Paramount Colony, Tolichowki.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-slate-950 text-white hover:bg-sky-500 px-8 py-4 text-xs font-bold uppercase tracking-wider transition-colors border border-slate-950">
                Schedule Appointment
              </a>
              <a href="#estimator" className="bg-white text-slate-950 hover:bg-slate-50 px-8 py-4 text-xs font-bold uppercase tracking-wider border border-slate-950 transition-colors">
                Explore Treatment Pricing
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-950 mt-16 pt-8">
              <div>
                <span className="block text-2xl font-black text-slate-900">15k+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Successful Cases</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Board-Certified MDs</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900">4.9★</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Patient Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic Element */}
          <div className="md:col-span-5 bg-slate-50 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Elegant architectural pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern-hero" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
              </svg>
            </div>
            
            <div className="relative border border-slate-950 bg-white p-6 md:p-8 flex flex-col justify-between h-full z-10">
              <div>
                <h3 className="font-extrabold text-sm uppercase tracking-wider border-b border-slate-950 pb-3 mb-6">
                  Featured Services
                </h3>
                <div className="space-y-4">
                  {TREATMENTS.map((t, idx) => (
                    <div key={t.id} className="flex justify-between items-center text-xs font-bold uppercase border-b border-slate-100 pb-3">
                      <span className="flex items-center gap-2">
                        <span className="text-sky-500">0{idx + 1}.</span>
                        {t.name}
                      </span>
                      <ChevronRight size={14} className="text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-950 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-sky-50 text-sky-600 border border-sky-500 shrink-0">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-900">US-FDA Approved Tech</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal font-medium">
                      All clinical equipment matches highest world standards for security & precision results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / About Section */}
      <section id="about" className="py-20 border-b border-slate-950 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-500 block mb-2">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
                Medical Science meets Aesthetic Mastery
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed font-medium mb-8">
                At Dermaclinix Hyderabad, Tolichowki, we believe skin and hair care should be grounded in science, not marketing. Led by premier clinical dermatologists with decades of medical practice, we evaluate each patient’s unique physiological parameters before formulating any treatment path. Our clinical space is built to simulate a high-fashion, clean, and professional setting.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 border-t border-slate-950 pt-8 mt-4">
                <div className="border border-slate-200 p-4">
                  <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase mb-3">
                    01
                  </div>
                  <h4 className="text-xs font-extrabold uppercase mb-1.5 text-slate-900">Clinical Diagnostics</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Comprehensive microscopic skin scans and scalp analysis before any therapy begins.
                  </p>
                </div>
                <div className="border border-slate-200 p-4">
                  <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase mb-3">
                    02
                  </div>
                  <h4 className="text-xs font-extrabold uppercase mb-1.5 text-slate-900">Customized Regimen</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    No template prescriptions. Every patient gets a targeted dose plan based on exact pathology.
                  </p>
                </div>
                <div className="border border-slate-200 p-4">
                  <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase mb-3">
                    03
                  </div>
                  <h4 className="text-xs font-extrabold uppercase mb-1.5 text-slate-900">Advanced Follow-Up</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Strict digital monitoring of healing progress to tweak treatment dosages dynamically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 bg-slate-50 border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-500 block mb-2">
              COST TRANSPARENCY
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              Interactive Treatment Estimator
            </h2>
            <p className="text-slate-600 text-xs mt-2 uppercase tracking-wide font-semibold">
              Select treatment specs to calculate the transparent cost breakdown
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Control Panel */}
            <div className="lg:col-span-7 bg-white border border-slate-950 p-6 md:p-8 flex flex-col justify-between">
              
              {/* Step 1: Select Treatment */}
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-3">
                  01. Select Treatment Type
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TREATMENTS.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTreatment(t)}
                      className={`text-left p-4 border text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                        selectedTreatment.id === t.id 
                          ? 'border-slate-950 bg-slate-950 text-white' 
                          : 'border-slate-200 bg-white text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <span>{t.name}</span>
                      {selectedTreatment.id === t.id && <Check size={14} className="text-sky-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Area */}
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-3">
                  02. Select Target Body Area
                </span>
                <div className="flex flex-wrap gap-2">
                  {AREAS.map(a => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedArea(a)}
                      className={`px-4 py-2.5 border text-xs font-bold uppercase tracking-wider transition-colors ${
                        selectedArea.id === a.id 
                          ? 'border-slate-950 bg-slate-950 text-white' 
                          : 'border-slate-200 bg-white text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      {a.name} ({a.multiplier}x)
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Package */}
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-3">
                  03. Choose Session Package
                </span>
                <div className="space-y-3">
                  {SESSIONS.map(s => (
                    <button
                      key={s.count}
                      onClick={() => setSelectedSession(s)}
                      className={`w-full text-left p-4 border text-xs font-bold uppercase tracking-wider flex justify-between items-center transition-colors ${
                        selectedSession.count === s.count 
                          ? 'border-slate-950 bg-slate-950 text-white' 
                          : 'border-slate-200 bg-white text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <span>{s.label}</span>
                      {selectedSession.count === s.count && <Check size={14} className="text-sky-400" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculations Card */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-6 md:p-8 flex flex-col justify-between border border-slate-950">
              <div>
                <div className="flex items-center gap-2 text-sky-400 mb-6">
                  <Calculator size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Pricing Estimation Breakdown</span>
                </div>

                <div className="space-y-4 border-b border-slate-800 pb-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Selected Therapy</span>
                    <span>{selectedTreatment.name}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Target Area</span>
                    <span>{selectedArea.name}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Base Cost / Session</span>
                    <span>₹{selectedTreatment.basePrice}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Area Multiplier</span>
                    <span>{selectedArea.multiplier}x</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Number of Sessions</span>
                    <span>{selectedSession.count}</span>
                  </div>
                </div>

                {selectedSession.discount > 0 && (
                  <div className="py-4 border-b border-slate-800 flex justify-between text-xs font-bold uppercase tracking-wider text-green-400">
                    <span>Package Discount ({selectedSession.discount * 100}%)</span>
                    <span>-₹{Math.round(discountAmount)}</span>
                  </div>
                )}

                <div className="mt-8 flex justify-between items-baseline">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-4xl font-black text-sky-400">₹{finalPrice}</span>
                    <span className="block text-[9px] text-slate-500 uppercase font-extrabold mt-1 tracking-widest">
                      Excl. GST & taxes
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-slate-800">
                <a href="#booking" className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 py-4 text-xs font-bold uppercase tracking-widest text-center block transition-colors">
                  Lock Estimate & Book Now
                </a>
                <p className="text-[10px] text-slate-500 text-center mt-3 leading-normal font-medium uppercase tracking-wider">
                  Estimates are valid for 14 days from calculation date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 border-b border-slate-950 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-500 block mb-2">
                CLINICAL PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900">
                Premium Specialties
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-sm mt-4 md:mt-0 font-medium">
              We leverage premium clinical methodology and state-of-the-art machines for high-precision skin and hair correction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Laser Hair Removal',
                code: 'LHR-CLINIC',
                desc: 'Pain-free triple wavelength diode lasers targeting root follicles for absolute skin smoothness.',
                price: 'Starts at ₹2,500',
              },
              {
                title: 'Chemical Peeling',
                code: 'PEEL-RENEW',
                desc: 'Clinical glycolic, salicylic, and yellow peels designed to eliminate pigmentation and sun damage.',
                price: 'Starts at ₹1,800',
              },
              {
                title: 'Hair Transplant',
                code: 'FUE-TRANS',
                desc: 'High-density follicular unit extraction by certified surgeons with natural hairline design.',
                price: 'Starts at ₹48,000',
              },
              {
                title: 'Acne Scar Treatment',
                code: 'SCAR-LASER',
                desc: 'Fractional CO2 lasers and microneedling RF to rebuild subcutaneous skin layers.',
                price: 'Starts at ₹4,000',
              },
              {
                title: 'Skin Whitening & Glow',
                code: 'GLOW-GLUT',
                desc: 'IV Glutathione infusions and Q-switched lasers to reduce deep melanin deposits safely.',
                price: 'Starts at ₹5,500',
              },
              {
                title: 'Anti-Aging Injectables',
                code: 'BOTO-FILL',
                desc: 'FDA-approved neuromodulators and dermal fillers targeting dynamic wrinkles and volume loss.',
                price: 'Starts at ₹12,000',
              },
              {
                title: 'Hydra-Facial Therapy',
                code: 'HYDRA-PRO',
                desc: 'Vortex suction and nutrient infusion targeting blackheads and skin hydration deficits.',
                price: 'Starts at ₹3,500',
              },
              {
                title: 'Tattoo & Pigment Removal',
                code: 'TAT-REMOVE',
                desc: 'Picosecond lasers fragmenting deep tattoo ink particles with zero scarring risks.',
                price: 'Starts at ₹3,000',
              },
            ].map((service, index) => (
              <div key={index} className="border border-slate-950 p-6 flex flex-col justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">
                      {service.code}
                    </span>
                    <span className="text-xs text-slate-400 font-bold uppercase">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-black uppercase text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-6">{service.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase text-slate-900">{service.price}</span>
                  <a href="#booking" className="text-sky-500 hover:text-slate-900 transition-colors">
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Transformations / Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-500 block mb-2">
              PATIENT ADVOCACY
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              Clinical Transformations
            </h2>
            <p className="text-slate-600 text-xs mt-2 uppercase tracking-wide font-semibold">
              Verified clinical outcomes and feedback from Tolichowki, Hyderabad patients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Farhan Khan',
                location: 'Tolichowki, Hyd',
                concern: 'Severe Baldness',
                result: '3,200 Hair Grafts Transplanted',
                outcome: 'Outstanding density restoration. The doctor explained every detail clearly. Highly recommend their surgery unit.',
                rating: 5,
              },
              {
                name: 'Dr. Saba Begum',
                location: 'Shaikpet, Hyd',
                concern: 'Hormonal Acne & Scars',
                result: '6 Sessions CO2 Laser & Peels',
                outcome: 'As a medical professional, I appreciate their scientific and hygienic approach. Skin texture improved drastically.',
                rating: 5,
              },
              {
                name: 'Nisha Reddy',
                location: 'Mehdipatnam, Hyd',
                concern: 'Pigmentary Melasma',
                result: '3 sessions Q-Switched Laser',
                outcome: 'Very clean clinic environment. The staff is polite, and they do not oversell packages. Laser results are excellent.',
                rating: 5,
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-950 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={12} className="fill-sky-500 text-sky-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      VERIFIED CASE
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold uppercase text-slate-900 mb-1">{t.name}</h4>
                  <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-4 block">{t.location}</span>
                  
                  <div className="bg-slate-50 border-l-2 border-slate-900 p-3 mb-4 text-[11px] font-bold uppercase tracking-wider">
                    <div className="text-slate-500">Concern: <span className="text-slate-900">{t.concern}</span></div>
                    <div className="text-slate-500 mt-1">Outcome: <span className="text-sky-600">{t.result}</span></div>
                  </div>

                  <p className="text-[12px] text-slate-600 italic leading-relaxed font-medium">
                    "{t.outcome}"
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[9px] uppercase">
                    {t.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <span className="text-[10px] font-bold uppercase text-slate-500">Patient File Registry</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Consultation Form */}
      <section id="booking" className="py-20 bg-white border-b border-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-500 block mb-2">
              APPOINTMENT REGISTRY
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              Schedule Clinical Visit
            </h2>
            <p className="text-slate-600 text-xs mt-2 uppercase tracking-wide font-semibold">
              Fill the clinical request form below for priority scheduling
            </p>
          </div>

          <div className="border border-slate-950 p-6 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-sky-50 text-sky-500 border border-sky-500 flex items-center justify-center mx-auto mb-6">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-black uppercase text-slate-900 mb-2">Registry Confirmed</h3>
                <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-6">
                  Priority scheduling code generated: <span className="text-sky-500">{submittedCode}</span>
                </p>
                <p className="text-slate-500 text-xs max-w-md mx-auto mb-8 font-medium leading-relaxed">
                  We have queued your application. A clinical consultant from our Tolichowki branch will call you on <span className="text-slate-950 font-bold">{formData.phoneNumber}</span> within 15 minutes to lock your calendar slot.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      treatment: TREATMENTS[0].name,
                      preferredDate: '',
                      preferredTime: '',
                    });
                  }}
                  className="bg-slate-950 text-white hover:bg-sky-500 transition-colors px-6 py-3 text-xs font-bold uppercase tracking-wider border border-slate-950"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`w-full p-4 border text-xs font-bold uppercase tracking-widest bg-white outline-none transition-colors ${
                      formErrors.fullName ? 'border-red-500 text-red-900' : 'border-slate-950 focus:border-sky-500'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                    Contact Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="98490 12345"
                      maxLength={10}
                      className={`w-full p-4 pl-12 border text-xs font-bold uppercase tracking-widest bg-white outline-none transition-colors ${
                        formErrors.phoneNumber ? 'border-red-500 text-red-900' : 'border-slate-950 focus:border-sky-500'
                      }`}
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                      {formErrors.phoneNumber}
                    </span>
                  )}
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                    Treatment Interest *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-slate-950 text-xs font-bold uppercase tracking-widest bg-white outline-none focus:border-sky-500 cursor-pointer"
                  >
                    {TREATMENTS.map(t => (
                      <option key={t.id} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`w-full p-4 border text-xs font-bold uppercase tracking-widest bg-white outline-none transition-colors ${
                        formErrors.preferredDate ? 'border-red-500 text-red-900' : 'border-slate-950 focus:border-sky-500'
                      }`}
                    />
                    {formErrors.preferredDate && (
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                        {formErrors.preferredDate}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                      Preferred Time Slot *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full p-4 border text-xs font-bold uppercase tracking-widest bg-white outline-none transition-colors cursor-pointer ${
                        formErrors.preferredTime ? 'border-red-500 text-red-900' : 'border-slate-950 focus:border-sky-500'
                      }`}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                      <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                    </select>
                    {formErrors.preferredTime && (
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                        {formErrors.preferredTime}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-sky-500 text-white font-bold py-4 text-xs uppercase tracking-widest transition-colors border border-slate-950 mt-4"
                >
                  Submit Consultation Request
                </button>

              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Store Details */}
      <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 border-b border-slate-800 pb-12">
            
            {/* Footer Logo & Brand info */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-sky-500 flex items-center justify-center text-slate-950 font-black text-sm select-none">
                  D
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg tracking-tight uppercase leading-none">DERMACLINIX</span>
                  <span className="text-[9px] tracking-[0.25em] text-sky-400 font-bold uppercase mt-0.5">HYDERABAD</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-medium">
                High-contrast minimal medical practice dedicated to pure clinical efficiency and premium aesthetic outcomes. Board-certified clinical dermatologists only.
              </p>
            </div>

            {/* Address Details */}
            <div className="md:col-span-4 flex flex-col gap-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-[10px] text-slate-500 tracking-widest block">LOCATE BRANCH</span>
              <div className="flex gap-2">
                <MapPin size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-relaxed font-semibold">
                  Door No. 8-1-284/A/1,<br />
                  Paramount Colony Road,<br />
                  Tolichowki, Hyderabad,<br />
                  Telangana - 500008
                </span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-3 flex flex-col gap-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-[10px] text-slate-500 tracking-widest block">TELEPHONE SUPPORT</span>
              <div className="flex gap-2">
                <Phone size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <a href="tel:9849012345" className="text-slate-200 hover:text-sky-400 transition-colors text-sm font-extrabold">
                  +91 98490 12345
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block mb-1">CLINICAL HOUR REGISTRY</span>
                <span className="text-slate-300 font-semibold">MON - SAT: 10:00 AM - 08:00 PM</span>
              </div>
            </div>

          </div>

          {/* Legal / Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold uppercase text-slate-500 tracking-wider">
            <span>&copy; {new Date().getFullYear()} Dermaclinix Hyderabad, Tolichowki. All rights reserved.</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="hover:text-slate-300 cursor-pointer">Clinical Protocols</span>
              <span>•</span>
              <span className="hover:text-slate-300 cursor-pointer">Privacy Safeguards</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

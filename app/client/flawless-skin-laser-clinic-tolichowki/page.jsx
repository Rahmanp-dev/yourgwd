"use client";

import React, { useState } from 'react';
import {
  Zap,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  ArrowRight,
  Check,
  Star,
  Activity,
  Loader2,
  Clock,
  Layers,
  Fingerprint,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';

// Estimator Configurations
const TREATMENTS = {
  'laser-resurfacing': { name: 'US-FDA CO2 Fractional Laser Resurfacing', basePrice: 3500, category: 'Laser' },
  'carbon-peel': { name: 'Hollywood Carbon Peel & Laser Toning', basePrice: 2800, category: 'Glow' },
  'hair-regrowth': { name: 'Advanced Follicular Hair Regrowth & PRP', basePrice: 4800, category: 'Hair' },
  'chemical-peel': { name: 'Flawless Clarifying Multi-Acid Chemical Peel', basePrice: 2000, category: 'Skin' },
  'botox-therapy': { name: 'Precision Anti-Wrinkle Botox (Allergan)', basePrice: 7500, category: 'Aesthetics' }
};

const TARGET_AREAS = {
  'full-face': { name: 'Full Face & Forehead', factor: 1.0 },
  'jaw-neck': { name: 'Jawline & Neck', factor: 0.9 },
  'arms-hands': { name: 'Full Arms & Hands', factor: 1.6 },
  'legs-feet': { name: 'Full Legs & Feet', factor: 1.9 },
  'entire-body': { name: 'Entire Body Program', factor: 3.8 }
};

const SESSION_PACKAGES = [
  { count: 1, label: '1 Session', discount: 0 },
  { count: 3, label: '3 Sessions (10% Off)', discount: 0.10 },
  { count: 5, label: '5 Sessions (15% Off)', discount: 0.15 },
  { count: 10, label: '10 Sessions (25% Off - Ultimate Perfect)', discount: 0.25 }
];

export default function FlawlessClinicPage() {
  // Estimator State
  const [selectedTreatment, setSelectedTreatment] = useState('laser-resurfacing');
  const [selectedArea, setSelectedArea] = useState('full-face');
  const [selectedSessions, setSelectedSessions] = useState(5);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'laser-resurfacing',
    area: 'full-face',
    sessions: '5',
    date: '',
    time: 'morning',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Estimator Calculations
  const treatment = TREATMENTS[selectedTreatment];
  const area = TARGET_AREAS[selectedArea];
  const sessionPkg = SESSION_PACKAGES.find(p => p.count === selectedSessions) || SESSION_PACKAGES[2];

  const singleCost = Math.round(treatment.basePrice * area.factor);
  const totalCostBeforeDiscount = singleCost * selectedSessions;
  const discountAmount = Math.round(totalCostBeforeDiscount * sessionPkg.discount);
  const subtotal = totalCostBeforeDiscount - discountAmount;
  const tax = Math.round(subtotal * 0.18); // 18% medical service tax
  const finalPrice = subtotal + tax;

  // Sync Estimator to Booking Form
  const syncEstimatorToForm = () => {
    setFormData(prev => ({
      ...prev,
      service: selectedTreatment,
      area: selectedArea,
      sessions: selectedSessions.toString(),
      notes: `Pre-filled via Treatment Cost Estimator: ${treatment.name} for ${area.name} (${selectedSessions} sessions).`
    }));
    // Scroll to form
    const formSec = document.getElementById('consultation-form-section');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Input Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      errors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Date must be today or in the future';
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
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'laser-resurfacing',
      area: 'full-face',
      sessions: '5',
      date: '',
      time: 'morning',
      notes: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#4A154B] font-[family-name:var(--font-plus-jakarta)] selection:bg-[#4A154B]/10 selection:text-[#4A154B] antialiased">
      
      {/* Top Banner - Sharp Border */}
      <div className="bg-[#4A154B] text-[#FAF5FF] text-[10px] py-2 px-6 text-center font-bold tracking-[0.2em] uppercase border-b border-[#FAF5FF]/10">
        <span>FDA-Approved Clinical Laser Center &bull; Tolichowki &bull; Booking Line: <a href="tel:+919949334455" className="hover:text-[#A855F7] underline">+91 99493 34455</a></span>
      </div>

      {/* Navigation - Geometric & Minimalist */}
      <header className="sticky top-0 z-40 bg-[#FAF5FF] border-b border-[#4A154B]/25">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-left">
            <span className="text-2xl font-[family-name:var(--font-cinzel)] font-black tracking-[0.25em] text-[#4A154B] block">
              FLAWLESS
            </span>
            <span className="text-[8px] tracking-[0.4em] text-[#A855F7] uppercase font-black block mt-1">
              Skin & Laser Clinic
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-[#4A154B]">
            <a href="#philosophy" className="hover:text-[#A855F7] transition-all relative py-1 hover:border-b-2 hover:border-[#A855F7]">Philosophy</a>
            <a href="#estimator" className="hover:text-[#A855F7] transition-all relative py-1 hover:border-b-2 hover:border-[#A855F7]">Estimator</a>
            <a href="#treatments" className="hover:text-[#A855F7] transition-all relative py-1 hover:border-b-2 hover:border-[#A855F7]">Treatments</a>
            <a href="#transformations" className="hover:text-[#A855F7] transition-all relative py-1 hover:border-b-2 hover:border-[#A855F7]">Transformations</a>
            <a href="#location" className="hover:text-[#A855F7] transition-all relative py-1 hover:border-b-2 hover:border-[#A855F7]">Location</a>
          </nav>

          <div>
            <a 
              href="#consultation-form-section"
              className="bg-transparent border border-[#4A154B] hover:bg-[#4A154B] hover:text-[#FAF5FF] text-[#4A154B] px-6 py-3 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Consultation Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Geometric Split */}
      <section className="border-b border-[#4A154B]/20 py-16 md:py-28 px-6 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center text-left">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#4A154B]/20 px-4 py-1.5 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-[#4A154B]">
              <Zap className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>Laser & Aesthetic Rigor</span>
            </div>
            
            <h1 className="text-4xl sm:text-7xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] leading-[1.05] tracking-tight">
              Perfect Skin,<br />
              <span className="text-[#A855F7]">Engineered.</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-[#4A154B]/80 max-w-lg leading-relaxed font-light">
              We reject generalities. Flawless Skin & Laser Clinic operates on rigid, US-FDA approved medical protocols. We utilize high-power fractional CO2 systems and advanced laser wave synthesis to reconstruct dermal layers and remove imperfections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#estimator" 
                className="bg-[#4A154B] hover:bg-[#A855F7] text-white px-8 py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 text-center shadow-sm"
              >
                Cost Calculator
              </a>
              <a 
                href="tel:+919949334455" 
                className="border border-[#4A154B]/25 hover:border-[#4A154B] bg-white text-[#4A154B] px-8 py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#A855F7]" />
                <span>+91 99493 34455</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#4A154B]/10 max-w-md text-xs font-bold">
              <div>
                <span className="block text-2xl font-[family-name:var(--font-cinzel)] text-[#4A154B] font-black">9+</span>
                <span className="text-[9px] text-[#A855F7] uppercase tracking-[0.15em] mt-1 block font-black">Certified Lasers</span>
              </div>
              <div>
                <span className="block text-2xl font-[family-name:var(--font-cinzel)] text-[#4A154B] font-black">10K+</span>
                <span className="text-[9px] text-[#A855F7] uppercase tracking-[0.15em] mt-1 block font-black">Laser Procedures</span>
              </div>
              <div>
                <span className="block text-2xl font-[family-name:var(--font-cinzel)] text-[#4A154B] font-black">0%</span>
                <span className="text-[9px] text-[#A855F7] uppercase tracking-[0.15em] mt-1 block font-black">Safety Incidents</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Sharp Double Border Frame */}
            <div className="border border-[#4A154B]/30 p-3 bg-white shadow-md max-w-md mx-auto">
              <div className="border-[2px] border-[#A855F7] relative aspect-[4/5] overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#4A154B] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 z-10">
                  CLINIC REF: FSL-TOLICHOWKI
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600&h=750" 
                  alt="High Precision Laser Face Treatment" 
                  className="w-full h-full object-cover filter grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Clinic Philosophy Section - Clean Blocks */}
      <section id="philosophy" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start text-left mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-black tracking-[0.25em] text-[#A855F7] block">Precision Methodology</span>
              <h2 className="text-3xl sm:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] leading-tight">
                The Science Of Flawlessness.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm text-[#4A154B]/80 leading-relaxed font-light pt-2">
                We believe that aesthetic dermatological procedures are exact sciences. Our clinic in Tolichowki operates under sterile clinical guidelines, utilizing US-FDA approved technologies to customize the tissue recovery journey. We measure pigment depths, skin hydration, and density matrices to map each individual session.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-[#4A154B]/20">
            
            {/* Block 1 */}
            <div className="border-r border-b border-[#4A154B]/20 p-8 sm:p-12 space-y-6 text-left hover:bg-[#FAF5FF]/50 transition-colors duration-300">
              <div className="w-12 h-12 border border-[#4A154B]/30 flex items-center justify-center text-[#A855F7]">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Dermal Analytics</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Every laser treatment is preceded by a multi-spectral dermoscopic analysis to scan pigment coordinates and follicular health indices.
              </p>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#A855F7]">01 / Diagnostic Phase</div>
            </div>

            {/* Block 2 */}
            <div className="border-r border-b border-[#4A154B]/20 p-8 sm:p-12 space-y-6 text-left hover:bg-[#FAF5FF]/50 transition-colors duration-300">
              <div className="w-12 h-12 border border-[#4A154B]/30 flex items-center justify-center text-[#A855F7]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Dose Customization</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Laser energy doses, pulse durations, and chemical peel concentrations are configured exactly to the patient's individual epidermal thickness.
              </p>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#A855F7]">02 / Calibration Phase</div>
            </div>

            {/* Block 3 */}
            <div className="border-r border-b border-[#4A154B]/20 p-8 sm:p-12 space-y-6 text-left hover:bg-[#FAF5FF]/50 transition-colors duration-300">
              <div className="w-12 h-12 border border-[#4A154B]/30 flex items-center justify-center text-[#A855F7]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">FDA Sterility Code</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                We maintain an absolute sterile environment. All active laser tips, clinical micro-needles, and syringes are FDA single-use certified.
              </p>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#A855F7]">03 / Execution Phase</div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Treatment Estimator - Sharp Panel */}
      <section id="estimator" className="py-24 bg-[#FAF5FF] border-t border-[#4A154B]/10 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-stretch text-left">
            
            {/* Title & Info Side */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase font-black tracking-[0.25em] text-[#A855F7] block">PROACTIVE COST PLANNING</span>
                <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">
                  Precision Cost Estimator
                </h2>
                <p className="text-xs sm:text-sm text-[#4A154B]/70 leading-relaxed font-light">
                  Define your clinical aesthetic pathway. Toggle through our US-FDA laser services, target body locations, and package session scales.
                </p>
              </div>

              <div className="p-6 border border-[#4A154B]/20 bg-white space-y-3">
                <div className="flex items-center gap-2 text-[#A855F7] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Clinical Value Guarantee</span>
                </div>
                <p className="text-[10px] text-[#4A154B]/60 leading-relaxed">
                  All multi-session packages include complimentary post-treatment cooling lotions, cell-repair recovery sheets, and dermatologist follow-up sessions.
                </p>
              </div>
            </div>

            {/* Selector Panel */}
            <div className="lg:col-span-5 bg-white border border-[#4A154B]/20 p-8 space-y-6">
              
              {/* Treatment selector */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#4A154B]/70 block">
                  Select Clinical Treatment
                </label>
                <select 
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full p-3.5 border border-[#4A154B]/25 rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] font-bold cursor-pointer"
                >
                  {Object.entries(TREATMENTS).map(([key, val]) => (
                    <option key={key} value={key}>{val.name} (₹{val.basePrice})</option>
                  ))}
                </select>
              </div>

              {/* Area selector */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#4A154B]/70 block">
                  Select Treatment Area
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(TARGET_AREAS).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedArea(key)}
                      className={`p-3 border text-[10px] font-black uppercase tracking-wider text-center transition-all ${
                        selectedArea === key
                          ? 'border-[#4A154B] bg-[#4A154B] text-white'
                          : 'border-[#4A154B]/15 hover:border-[#A855F7]/30 bg-[#FAF5FF] text-[#4A154B]'
                      }`}
                    >
                      {val.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Packages */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#4A154B]/70 block">
                  Select Treatment Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {SESSION_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.count}
                      onClick={() => setSelectedSessions(pkg.count)}
                      className={`py-3 border text-xs font-black transition-all ${
                        selectedSessions === pkg.count
                          ? 'border-[#A855F7] bg-[#A855F7] text-white'
                          : 'border-[#4A154B]/15 hover:border-[#A855F7]/30 bg-[#FAF5FF] text-[#4A154B]'
                      }`}
                    >
                      <div>{pkg.count}</div>
                      <div className="text-[8px] opacity-85 uppercase font-medium">{pkg.count === 1 ? 'Sess.' : 'Sess.'}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculations Bill Display */}
            <div className="lg:col-span-3 border-[2px] border-[#4A154B] bg-white p-8 flex flex-col justify-between space-y-6 relative">
              <div className="absolute top-0 right-0 bg-[#A855F7] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1">
                GST REGISTERED
              </div>

              <div className="space-y-4">
                <div className="text-[9px] font-black tracking-widest uppercase text-[#A855F7]">FEE CALCULATION SHEET</div>
                <div className="space-y-1">
                  <h4 className="text-sm font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] leading-snug">{treatment.name}</h4>
                  <p className="text-[9px] text-[#4A154B]/60 font-bold uppercase tracking-wider">{area.name} &bull; {selectedSessions} Sessions</p>
                </div>

                <div className="pt-4 border-t border-[#4A154B]/10 space-y-2 text-xs font-medium">
                  <div className="flex justify-between">
                    <span className="text-[#4A154B]/70">Base Price:</span>
                    <span>₹{treatment.basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A154B]/70">Area Multiplier:</span>
                    <span>x {area.factor}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#4A154B]/5 pb-2">
                    <span className="text-[#4A154B]/70">Single Session Cost:</span>
                    <span>₹{singleCost}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#4A154B]/70">Gross Cost:</span>
                    <span>₹{totalCostBeforeDiscount}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Package Discount:</span>
                      <span>- ₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[10px] text-[#4A154B]/50">
                    <span>Clinical SGST/CGST (18%):</span>
                    <span>₹{tax}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#4A154B]/15">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#4A154B]/60">Total Cost:</span>
                  <span className="text-2xl font-[family-name:var(--font-cinzel)] font-black text-[#4A154B]">
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={syncEstimatorToForm}
                  className="w-full bg-[#4A154B] hover:bg-[#A855F7] text-white py-3 rounded-none text-[10px] font-black tracking-[0.15em] uppercase transition-all duration-300 shadow-sm"
                >
                  Sync With Booking System
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Treatments Grid - bento style */}
      <section id="treatments" className="py-24 bg-white border-y border-[#4A154B]/10 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-left space-y-4 mb-16 max-w-xl">
            <span className="text-xs uppercase font-black tracking-[0.25em] text-[#A855F7] block">CLINICAL DIRECTORY</span>
            <h2 className="text-3xl sm:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">
              Advanced Laser & Aesthetics
            </h2>
            <p className="text-xs sm:text-sm text-[#4A154B]/70 font-light">
              Explore our core catalog of clinical programs. Each procedure is calibrated, monitored, and performed inside our customized sterile treatment bays.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#4A154B]/15 text-left">
            
            {/* Item 1 */}
            <div className="p-8 border-r border-b border-[#4A154B]/15 space-y-4 hover:bg-[#FAF5FF]/40 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A855F7] block">Laser Resurfacing</span>
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">CO2 Fractional Resurfacing</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Precisely evaporates microscopic columns of damaged tissue to spark dramatic collagen remodelling. Resolves deep acne scars, rough texture, and fine lines.
              </p>
              <div className="pt-4 grid grid-cols-2 text-[9px] uppercase font-bold text-[#4A154B]/50">
                <div>Downtime: 3-5 Days</div>
                <div>Session Time: 45 Mins</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-8 border-r border-b border-[#4A154B]/15 space-y-4 hover:bg-[#FAF5FF]/40 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A855F7] block">Laser Toning</span>
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Hollywood Carbon Laser Peel</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                A layer of liquid carbon is applied to the face, binding to oils and impurities. The laser then passes over, vaporizing carbon particles to clear pores and brighten tone.
              </p>
              <div className="pt-4 grid grid-cols-2 text-[9px] uppercase font-bold text-[#4A154B]/50">
                <div>Downtime: None</div>
                <div>Session Time: 30 Mins</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-8 border-r border-b border-[#4A154B]/15 space-y-4 hover:bg-[#FAF5FF]/40 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A855F7] block">Hair Regrowth</span>
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Autologous PRP & GFC</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Advanced blood fractionation to isolate dense growth platelets. Injected back into targeted scalp segments to rescue shrinking hair follicles and reverse balding patterns.
              </p>
              <div className="pt-4 grid grid-cols-2 text-[9px] uppercase font-bold text-[#4A154B]/50">
                <div>Downtime: 2 Hours</div>
                <div>Session Time: 60 Mins</div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="p-8 border-r border-b border-[#4A154B]/15 space-y-4 hover:bg-[#FAF5FF]/40 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A855F7] block">Dermal Peels</span>
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Clarifying Multi-Acid Peels</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Medical exfoliation utilizing high-grade salicylic, glycolic, and lactic acids to regulate sebum, treat cystic acne flareups, and reduce red marks.
              </p>
              <div className="pt-4 grid grid-cols-2 text-[9px] uppercase font-bold text-[#4A154B]/50">
                <div>Downtime: 2-3 Days</div>
                <div>Session Time: 30 Mins</div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="p-8 border-r border-b border-[#4A154B]/15 space-y-4 hover:bg-[#FAF5FF]/40 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A855F7] block">Aesthetic Injectables</span>
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Precision Botox Therapy</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Micro-dose injections of US Allergan Botulinum toxin to relax overactive facial muscles. Softens forehead lines, crows feet, and lifts sagging brows.
              </p>
              <div className="pt-4 grid grid-cols-2 text-[9px] uppercase font-bold text-[#4A154B]/50">
                <div>Downtime: None</div>
                <div>Session Time: 30 Mins</div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="p-8 border-r border-b border-[#4A154B]/15 space-y-4 hover:bg-[#FAF5FF]/40 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A855F7] block">Skin Boosters</span>
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">Nucleofill Polynucleotides</h3>
              <p className="text-xs text-[#4A154B]/70 leading-relaxed font-light">
                Injectable gel composed of highly purified salmon DNA fractions. Triggers powerful fibroblast proliferation to tighten thin, sagging skin around eyes and neck.
              </p>
              <div className="pt-4 grid grid-cols-2 text-[9px] uppercase font-bold text-[#4A154B]/50">
                <div>Downtime: 24 Hours</div>
                <div>Session Time: 45 Mins</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Booking Consultation Form Section */}
      <section id="consultation-form-section" className="py-24 px-6 bg-[#FAF5FF]">
        <div className="max-w-4xl mx-auto">
          
          <div className="border border-[#4A154B]/30 bg-white grid md:grid-cols-12 rounded-none overflow-hidden shadow-sm">
            
            {/* Info Column */}
            <div className="md:col-span-5 bg-[#4A154B] text-[#FAF5FF] p-8 sm:p-10 flex flex-col justify-between text-left">
              <div className="space-y-6">
                <span className="text-[10px] font-black tracking-widest text-[#A855F7] block uppercase">REGISTRATION OFFICE</span>
                <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-cinzel)] font-bold text-white leading-tight">
                  Schedule Clinical Scan
                </h3>
                <p className="text-xs text-[#FAF5FF]/70 leading-relaxed font-light">
                  Submit your details. A medical coordinator will contact you via Phone call or WhatsApp within 60 minutes to confirm your clinic appointment window.
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-[#FAF5FF]/10 text-xs text-[#FAF5FF]/80 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A855F7]" />
                  <span>Tolichowki Main Rd, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#A855F7]" />
                  <span>+91 99493 34455</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#A855F7]" />
                  <span>flawlesstolichowki@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="md:col-span-7 p-8 sm:p-10 text-left">
              
              {formSubmitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12">
                  <div className="w-16 h-16 border-2 border-[#A855F7] flex items-center justify-center text-[#A855F7] shadow-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] uppercase tracking-wider">Request Logged</h4>
                    <p className="text-xs text-[#4A154B]/70 max-w-sm font-light">
                      Thank you <span className="font-bold text-[#4A154B]">{formData.name}</span>. We have scheduled your scan for <span className="font-bold text-[#4A154B]">{TREATMENTS[formData.service]?.name || formData.service}</span> on <span className="font-bold text-[#4A154B]">{formData.date}</span> during the {formData.time === 'morning' ? 'Morning Slot' : 'Evening Slot'}.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="border border-[#4A154B] hover:bg-[#4A154B] hover:text-[#FAF5FF] text-[#4A154B] px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    Log Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 flex justify-between">
                      <span>Patient Name *</span>
                      {formErrors.name && <span className="text-red-500 font-bold flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> {formErrors.name}</span>}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Mohammad Adnan"
                      className={`w-full p-3 border rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] ${formErrors.name ? 'border-red-400' : 'border-[#4A154B]/20'}`}
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 flex justify-between">
                        <span>Contact Phone *</span>
                        {formErrors.phone && <span className="text-red-500 font-bold flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> {formErrors.phone}</span>}
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9949334455"
                        className={`w-full p-3 border rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] ${formErrors.phone ? 'border-red-400' : 'border-[#4A154B]/20'}`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 flex justify-between">
                        <span>Email Address *</span>
                        {formErrors.email && <span className="text-red-500 font-bold flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> {formErrors.email}</span>}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. adnan@gmail.com"
                        className={`w-full p-3 border rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] ${formErrors.email ? 'border-red-400' : 'border-[#4A154B]/20'}`}
                      />
                    </div>
                  </div>

                  {/* Service & Sessions Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 block">
                        Select Treatment Program *
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-[#4A154B]/20 rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] cursor-pointer font-bold"
                      >
                        {Object.entries(TREATMENTS).map(([key, val]) => (
                          <option key={key} value={key}>{val.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 block">
                        Session Package Select *
                      </label>
                      <select 
                        name="sessions"
                        value={formData.sessions}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-[#4A154B]/20 rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] cursor-pointer font-bold"
                      >
                        <option value="1">1 Session Program</option>
                        <option value="3">3 Sessions Program</option>
                        <option value="5">5 Sessions Program</option>
                        <option value="10">10 Sessions Program</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 flex justify-between">
                        <span>Appointment Date *</span>
                        {formErrors.date && <span className="text-red-500 font-bold flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> {formErrors.date}</span>}
                      </label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] ${formErrors.date ? 'border-red-400' : 'border-[#4A154B]/20'}`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 block">
                        Clinic Time Window *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: 'morning' }))}
                          className={`p-3 border text-xs font-bold text-center transition-all ${
                            formData.time === 'morning'
                              ? 'border-[#4A154B] bg-[#4A154B] text-[#FAF5FF]'
                              : 'border-[#4A154B]/10 hover:border-[#A855F7]/30 bg-[#FAF5FF] text-[#4A154B]'
                          }`}
                        >
                          Morning (10AM - 2PM)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: 'evening' }))}
                          className={`p-3 border text-xs font-bold text-center transition-all ${
                            formData.time === 'evening'
                              ? 'border-[#4A154B] bg-[#4A154B] text-[#FAF5FF]'
                              : 'border-[#4A154B]/10 hover:border-[#A855F7]/30 bg-[#FAF5FF] text-[#4A154B]'
                          }`}
                        >
                          Evening (3PM - 8PM)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#4A154B]/70 block">
                      Aesthetic History / Medical Notes (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="List active prescriptions, scarring histories, or skin sensitivities."
                      rows="3"
                      className="w-full p-3 border border-[#4A154B]/20 rounded-none text-xs bg-[#FAF5FF] text-[#4A154B] focus:outline-none focus:border-[#A855F7] resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#4A154B] hover:bg-[#A855F7] text-white py-4 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#FAF5FF]" />
                          <span>Filing Patient Record...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>File Request For Review</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Patient Transformations / Testimonials */}
      <section id="transformations" className="py-24 bg-white border-t border-[#4A154B]/10 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-20 max-w-xl mx-auto">
            <span className="text-xs uppercase font-black tracking-[0.25em] text-[#A855F7] block">CLINICAL JOURNALS</span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B]">
              Verified Patient Progress
            </h2>
            <p className="text-xs sm:text-sm text-[#4A154B]/70 font-light">
              Read authentic feedback detailing the therapeutic progression and skin quality improvements achieved by our Tolichowki patients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Journal 1 */}
            <div className="border border-[#4A154B]/20 bg-white p-8 text-left space-y-6 flex flex-col justify-between shadow-sm relative">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#A855F7]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-sm font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] tracking-wide">
                  CO2 fractional laser is amazing for acne scars!
                </h4>
                <p className="text-xs text-[#4A154B]/80 leading-relaxed font-light">
                  I had severe boxcar scars on my cheeks from teenage acne. 4 sessions of CO2 Fractional Laser here drastically smoothed my skin. There was some redness for 3 days after each session, but the results are absolutely worth it.
                </p>
              </div>
              <div className="pt-6 border-t border-[#4A154B]/10 flex flex-col">
                <span className="font-bold text-xs text-[#4A154B]">Mohammad Ibrahim</span>
                <span className="text-[9px] text-[#A855F7] uppercase tracking-wider font-bold mt-1">
                  CO2 Laser Resurfacing &bull; Galaxy Rd
                </span>
              </div>
            </div>

            {/* Journal 2 */}
            <div className="border border-[#4A154B]/20 bg-white p-8 text-left space-y-6 flex flex-col justify-between shadow-sm relative">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#A855F7]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-sm font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] tracking-wide">
                  The Carbon Laser Peel gave me instant wedding glow!
                </h4>
                <p className="text-xs text-[#4A154B]/80 leading-relaxed font-light">
                  I booked their Hollywood Carbon Peel package just before my sister's wedding. It instantly removed all my blackheads, shrunk my pores, and left my skin with a beautiful matte glow. Highly recommended.
                </p>
              </div>
              <div className="pt-6 border-t border-[#4A154B]/10 flex flex-col">
                <span className="font-bold text-xs text-[#4A154B]">Shahnaz Begum</span>
                <span className="text-[9px] text-[#A855F7] uppercase tracking-wider font-bold mt-1">
                  Hollywood Carbon Peel &bull; MD Colony
                </span>
              </div>
            </div>

            {/* Journal 3 */}
            <div className="border border-[#4A154B]/20 bg-white p-8 text-left space-y-6 flex flex-col justify-between shadow-sm relative">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#A855F7]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-sm font-[family-name:var(--font-cinzel)] font-bold text-[#4A154B] tracking-wide">
                  My fine lines are gone and skin feels super plump!
                </h4>
                <p className="text-xs text-[#4A154B]/80 leading-relaxed font-light">
                  I completed a package of 3 Allergan Botox treatments combined with Polynucleotide boosters. The dermatologist was incredibly skilled, keeping my facial movement natural while smoothing all wrinkles.
                </p>
              </div>
              <div className="pt-6 border-t border-[#4A154B]/10 flex flex-col">
                <span className="font-bold text-xs text-[#4A154B]">Fatima Al-Jamil</span>
                <span className="text-[9px] text-[#A855F7] uppercase tracking-wider font-bold mt-1">
                  Botox & Booster &bull; Paramount Colony
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Store Details Footer */}
      <footer id="location" className="bg-[#4A154B] text-[#FAF5FF] border-t border-[#FAF5FF]/10 pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left mb-16">
          
          <div className="md:col-span-2 space-y-6">
            <span className="text-3xl font-[family-name:var(--font-cinzel)] tracking-widest text-[#FAF5FF] block">
              FLAWLESS
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#A855F7] uppercase font-black block mt-1">
              Skin & Laser Clinic
            </span>
            <p className="text-xs text-[#FAF5FF]/60 max-w-sm leading-relaxed font-light">
              Tolichowki's premier medical aesthetics facility specializing in high-powered laser resurfacing, advanced chemical peels, Botox therapy, and clinical hair restoration. Rigorous, certified, and result-oriented care.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] tracking-widest font-black uppercase text-[#A855F7]">THE CLINIC</h4>
            <div className="space-y-3 text-xs text-[#FAF5FF]/70 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                <span>
                  Suite 402, 4th Floor, Pristine Heights,<br />
                  Tolichowki Main Road, Near Galaxy Theatre,<br />
                  Tolichowki, Hyderabad,<br />
                  Telangana 500008.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A855F7]" />
                <a href="tel:+919949334455" className="hover:text-[#A855F7] transition-colors font-bold">+91 99493 34455</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A855F7]" />
                <a href="mailto:info@flawlesslaserclinic.com" className="hover:text-[#A855F7] transition-colors">info@flawlesslaserclinic.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] tracking-widest font-black uppercase text-[#A855F7]">CLINIC HOURS</h4>
            <div className="space-y-2 text-xs text-[#FAF5FF]/70 font-light">
              <p className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="font-semibold text-white">10:00 AM - 8:30 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-red-400 font-semibold italic">Closed</span>
              </p>
              <p className="flex items-start gap-2 mt-4 text-[10px] text-[#FAF5FF]/50 border-t border-[#FAF5FF]/10 pt-3">
                <Activity className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                <span>State Licensed aesthetic clinic under Telangana Health Board (Registration #HYD/MC/2018/1042).</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#FAF5FF]/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#FAF5FF]/45 font-light">
          <p>&copy; {new Date().getFullYear()} Flawless Skin & Laser Clinic. All Rights Reserved. Reg No: HYD/MC/2018/1042.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 font-medium">
            <a href="#" className="hover:text-[#FAF5FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF5FF] transition-colors">Terms of Medical Care</a>
            <a href="#" className="hover:text-[#FAF5FF] transition-colors">FDA Certifications</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

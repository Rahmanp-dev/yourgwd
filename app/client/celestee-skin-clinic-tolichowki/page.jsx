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
  Activity, 
  Smile, 
  User, 
  Mail, 
  Calendar, 
  Award, 
  Heart, 
  Check, 
  Sliders, 
  Info,
  DollarSign
} from 'lucide-react';

export default function CelesteeSkinClinic() {
  // Treatment Estimator State
  const [treatment, setTreatment] = useState('lhr');
  const [area, setArea] = useState('face');
  const [sessions, setSessions] = useState(3);
  
  // Pricing configuration
  const basePrices = {
    lhr: 4500,        // Laser Hair Reduction
    acne: 6500,       // Acne Scar Resurfacing
    brightening: 3800, // Skin Brightening & Peels
    hair: 5500        // PRP Hair Restoration
  };

  const areaMultipliers = {
    face: 1.0,
    underarms: 0.6,
    arms: 1.5,
    legs: 1.8,
    scalp: 1.2
  };

  const getDiscount = (s) => {
    if (s >= 8) return 0.25; // 25% discount for 8+ sessions
    if (s >= 6) return 0.20; // 20% discount for 6-7 sessions
    if (s >= 3) return 0.10; // 10% discount for 3-5 sessions
    return 0.0;
  };

  const calculateEstimation = () => {
    const base = basePrices[treatment] || 4000;
    const mult = areaMultipliers[area] || 1.0;
    const costPerSession = base * mult;
    const totalBeforeDiscount = costPerSession * sessions;
    const discountRate = getDiscount(sessions);
    const discountAmount = totalBeforeDiscount * discountRate;
    const totalAfterDiscount = totalBeforeDiscount - discountAmount;
    const gstAmount = totalAfterDiscount * 0.18; // 18% GST for medical aesthetic procedures
    const grandTotal = totalAfterDiscount + gstAmount;

    return {
      perSession: Math.round(costPerSession),
      subtotal: Math.round(totalBeforeDiscount),
      discount: Math.round(discountAmount),
      discountRate: discountRate * 100,
      gst: Math.round(gstAmount),
      total: Math.round(grandTotal)
    };
  };

  const estimation = calculateEstimation();

  // Consultation Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    slot: 'Morning (10:00 AM - 1:00 PM)',
    service: 'Laser Hair Reduction',
    notes: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full Name is required';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else {
      // Validate Indian phone number (10 digits, optional +91 prefix)
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (!form.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errs.date = 'Appointment Date is required';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API booking call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        bookingId: `CLS-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  // Neumorphic Styling Tokens
  const bgMain = 'bg-[#F0F4F8]';
  const textDark = 'text-[#1E293B]';
  const outsetShadow = 'shadow-[8px_8px_16px_#cbd5e0,-8px_-8px_16px_#ffffff]';
  const insetShadow = 'shadow-[inset_5px_5px_10px_#cbd5e0,inset_-5px_-5px_10px_#ffffff]';
  const buttonShadow = 'shadow-[4px_4px_8px_#cbd5e0,-4px_-4px_8px_#ffffff]';
  const activeShadow = 'active:shadow-[inset_3px_3px_6px_#cbd5e0,inset_-3px_-3px_6px_#ffffff]';

  return (
    <div className={`min-h-screen ${bgMain} ${textDark} font-sans selection:bg-cyan-200 antialiased`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F0F4F8]/95 backdrop-blur-md border-b border-white/40 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full ${outsetShadow} border border-white/60 flex items-center justify-center bg-[#F0F4F8]`}>
              <Sparkles className="text-[#06B6D4] w-6 h-6" />
            </div>
            <div>
              <span className="font-cormorant text-2xl lg:text-3xl font-bold tracking-wide text-[#1E293B]">
                CELESTEE
              </span>
              <span className="block text-[8px] tracking-[0.3em] uppercase font-bold text-slate-500">
                Skin, Laser & Hair Clinic
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider font-inter text-slate-600">
            <a href="#about" className="hover:text-[#06B6D4] transition-colors py-1">About</a>
            <a href="#estimator" className="hover:text-[#06B6D4] transition-colors py-1">Estimator</a>
            <a href="#services" className="hover:text-[#06B6D4] transition-colors py-1">Services</a>
            <a href="#testimonials" className="hover:text-[#06B6D4] transition-colors py-1">Testimonials</a>
          </div>

          <div>
            <a 
              href="#book" 
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${buttonShadow} ${activeShadow} border border-white/80 text-xs font-bold uppercase tracking-wider text-[#1E293B] hover:text-[#06B6D4] transition-all bg-[#F0F4F8]`}
            >
              <Phone size={12} className="text-[#06B6D4]" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-100/30 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#06B6D4]/10 filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Tagline Column */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${insetShadow} border border-white/50 text-[#1E293B] text-[10px] uppercase font-bold tracking-wider w-fit bg-[#F0F4F8]`}>
                <Award size={12} className="text-[#06B6D4]" />
                <span>Hyderabad's Top Dermatologist Team</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-cormorant font-medium leading-[1.08] text-[#1E293B] tracking-tight">
                Sculpting Radiance, <br />
                <span className="italic font-light text-[#06B6D4]">Restoring Confidence.</span>
              </h1>

              <p className="text-sm lg:text-base text-slate-600 leading-relaxed max-w-xl font-inter">
                Celestee Skin Clinic brings together world-class dermatological science and advanced laser technologies to Tolichowki. Under Dr. Raj Kirit's leadership, we customize treatments to honor your skin's unique integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 font-inter">
                <a 
                  href="#estimator" 
                  className={`inline-flex justify-center items-center px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#06B6D4]/25 hover:shadow-cyan-500/40 active:scale-95`}
                >
                  Estimate Procedure Cost
                  <ChevronRight size={14} className="ml-2" />
                </a>

                <a 
                  href="#book" 
                  className={`inline-flex justify-center items-center px-8 py-4 ${outsetShadow} ${activeShadow} border border-white/70 text-[#1E293B] font-bold text-xs uppercase tracking-widest rounded-xl transition-all hover:text-[#06B6D4] bg-[#F0F4F8]`}
                >
                  Consultation Details
                </a>
              </div>
            </div>

            {/* Right Neumorphic Hero Panel */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`relative w-full max-w-[420px] ${outsetShadow} p-5 rounded-[2.5rem] bg-[#F0F4F8] border border-white/80`}>
                <div className={`w-full ${insetShadow} rounded-[2rem] p-8 bg-[#F0F4F8] text-center flex flex-col space-y-6 relative overflow-hidden`}>
                  <div className="absolute top-3 right-3 text-[#06B6D4]/30">
                    <Sparkles size={40} />
                  </div>

                  <span className="text-[10px] tracking-[0.25em] font-bold text-slate-500 uppercase block font-inter">
                    Clinic Highlights
                  </span>
                  
                  <div className="space-y-5">
                    {[
                      { label: "Patient Satisfaction", val: "99.4%", desc: "Verified via patient surveys" },
                      { label: "Laser Technology", val: "FDA Approved", desc: "US-FDA standards for all skin types" },
                      { label: "Dr. Raj Kirit & Team", val: "15+ Years Exp", desc: "Premium board-certified experts" }
                    ].map((item, idx) => (
                      <div key={idx} className={`p-4 rounded-2xl ${outsetShadow} bg-[#F0F4F8] border border-white/40 text-left`}>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider font-inter">{item.label}</div>
                        <div className="text-xl font-cormorant font-bold text-[#1E293B] mt-1">{item.val}</div>
                        <div className="text-[10px] text-slate-400 font-inter mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-slate-500 italic font-cormorant leading-relaxed">
                    "Skincare is not an expense; it is a clinical investment in your lifelong wellbeing."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Clinic Expertise/About Section */}
      <section id="about" className="py-20 lg:py-28 relative border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.3em] font-inter block mb-3">
              Elite Dermatology
            </span>
            <h2 className="text-4xl lg:text-5xl font-cormorant font-medium text-[#1E293B]">
              Why Tolichowki Trusts Celestee
            </h2>
            <div className="w-16 h-1 bg-[#06B6D4] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-inter">
            <div className={`p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between`}>
              <div>
                <div className={`w-12 h-12 rounded-2xl ${insetShadow} flex items-center justify-center text-[#06B6D4] mb-6`}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">Clinical Precision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We use state-of-the-art diagnostic cameras to examine skin layers under polarized light, ensuring customized serums and precise laser settings for every patient.
                </p>
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-6 tracking-widest uppercase">Safety First</span>
            </div>

            <div className={`p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between`}>
              <div>
                <div className={`w-12 h-12 rounded-2xl ${insetShadow} flex items-center justify-center text-[#06B6D4] mb-6`}>
                  <Activity size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">Advanced US-FDA Lasers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Featuring cutting-edge Nd:YAG and Fractional CO2 lasers engineered specifically to offer highly effective results on deep Indian melanin profiles without hyperpigmentation risk.
                </p>
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-6 tracking-widest uppercase">Premium Tech</span>
            </div>

            <div className={`p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between`}>
              <div>
                <div className={`w-12 h-12 rounded-2xl ${insetShadow} flex items-center justify-center text-[#06B6D4] mb-6`}>
                  <Smile size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">Compassionate Aftercare</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Healing doesn't end in our treatment room. Every patient receives a detailed digital recovery calendar with direct messaging support to resolve queries instantly.
                </p>
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-6 tracking-widest uppercase">Complete Care</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 lg:py-28 bg-[#F0F4F8] border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.3em] font-inter block mb-3">
              Transparency
            </span>
            <h2 className="text-4xl lg:text-5xl font-cormorant font-medium text-[#1E293B]">
              Treatment Pricing Estimator
            </h2>
            <p className="text-xs text-slate-500 font-inter mt-3">
              Configure your customized dermatological package for instant, transparent pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start font-inter">
            
            {/* Estimator Configuration */}
            <div className={`lg:col-span-7 p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/70 space-y-8`}>
              
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  1. Select Clinical Procedure
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'lhr', name: 'Laser Hair Reduction', desc: 'Painless triple-wavelength LHR' },
                    { id: 'acne', name: 'Acne Scar Resurfacing', desc: 'Microneedling RF / CO2 Laser' },
                    { id: 'brightening', name: 'Skin Brightening & Peels', desc: 'Chemical peels & Glutathione boosters' },
                    { id: 'hair', name: 'PRP Hair Restoration', desc: 'High-density growth factor therapy' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTreatment(t.id)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        treatment === t.id 
                          ? `${insetShadow} border border-cyan-400/50 bg-[#F0F4F8]` 
                          : `${outsetShadow} hover:bg-slate-50 border border-transparent`
                      }`}
                    >
                      <div className="font-bold text-xs text-[#1E293B]">{t.name}</div>
                      <div className="text-[10px] text-slate-400 mt-1">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  2. Select Target Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { id: 'face', name: 'Full Face' },
                    { id: 'underarms', name: 'Underarms' },
                    { id: 'arms', name: 'Full Arms' },
                    { id: 'legs', name: 'Full Legs' },
                    { id: 'scalp', name: 'Scalp (Hair)' }
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setArea(a.id)}
                      className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all ${
                        area === a.id 
                          ? `${insetShadow} border border-cyan-400/50 bg-[#F0F4F8]` 
                          : `${outsetShadow} hover:bg-slate-50 border border-transparent`
                      }`}
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    3. Recommended Sessions
                  </label>
                  <span className={`px-3 py-1 rounded-full ${insetShadow} text-xs font-bold text-[#06B6D4]`}>
                    {sessions} {sessions === 1 ? 'Session' : 'Sessions'}
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="1" 
                  max="8" 
                  value={sessions}
                  onChange={(e) => setSessions(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-300 accent-[#06B6D4] outline-none"
                />
                
                <div className="flex justify-between text-[10px] text-slate-400 font-bold px-1 mt-2">
                  <span>1 Session</span>
                  <span>3 Sessions (10% Off)</span>
                  <span>6 Sessions (20% Off)</span>
                  <span>8 Sessions (25% Off)</span>
                </div>
              </div>

            </div>

            {/* Price Output Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/80 space-y-6`}>
                <h3 className="text-md font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-white/60">
                  Estimation Summary
                </h3>

                <div className="space-y-4 text-xs font-bold">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Rate per session:</span>
                    <span className="text-[#1E293B]">₹{estimation.perSession.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Subtotal ({sessions} sessions):</span>
                    <span className="text-[#1E293B]">₹{estimation.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {estimation.discount > 0 && (
                    <div className="flex justify-between items-center text-green-600 bg-green-50/60 p-2 rounded-lg border border-green-100">
                      <span>Package Discount ({estimation.discountRate}%):</span>
                      <span>- ₹{estimation.discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">GST (18% Medical Tax):</span>
                    <span className="text-[#1E293B]">₹{estimation.gst.toLocaleString('en-IN')}</span>
                  </div>

                  <div className={`p-4 rounded-xl ${insetShadow} bg-[#F0F4F8] flex justify-between items-center mt-6`}>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Estimated Total</div>
                      <div className="text-[9px] text-slate-400 font-normal">All taxes included</div>
                    </div>
                    <div className="text-2xl font-cormorant font-bold text-[#06B6D4]">
                      ₹{estimation.total.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#F0F4F8] p-3 rounded-xl border border-white/50 text-[10px] text-slate-400">
                  <Info size={14} className="text-[#06B6D4] shrink-0 mt-0.5" />
                  <span>Exact pricing is subject to physical skin assessment by our dermatologists. Package cost can be divided into Interest-Free EMI options at the clinic.</span>
                </div>

                <a 
                  href="#book"
                  onClick={() => {
                    const selProc = {
                      lhr: 'Laser Hair Reduction',
                      acne: 'Acne Scar Resurfacing',
                      brightening: 'Skin Brightening & Peels',
                      hair: 'PRP Hair Restoration'
                    }[treatment];
                    setForm(prev => ({
                      ...prev,
                      service: `${selProc} (${sessions} Sessions)`
                    }));
                  }}
                  className={`block w-full py-4 text-center text-xs font-bold uppercase tracking-widest text-white bg-[#06B6D4] hover:bg-[#0891B2] rounded-xl transition-all shadow-md active:scale-95`}
                >
                  Book Estimate Packages
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 lg:py-28 border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.3em] font-inter block mb-3">
              Procedures
            </span>
            <h2 className="text-4xl lg:text-5xl font-cormorant font-medium text-[#1E293B]">
              Dermatological Services
            </h2>
            <div className="w-16 h-1 bg-[#06B6D4] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 font-inter">
            {[
              {
                title: "Laser Hair Reduction",
                tech: "Triple Wavelength Soprano Ice",
                desc: "Permanent and virtually painless laser hair reduction tailored specifically for sensitive skin types, ensuring smooth skin textures without bumps.",
                bullets: ["Safe for facial/body hair", "No skin discoloration", "Pre & post soothing care"]
              },
              {
                title: "Acne & Scar Therapies",
                tech: "Fractional CO2 + Microneedling RF",
                desc: "Minimize acne scarring, deep pits, and skin irregularities. We stimulate natural collagen remodeling to restore a flat, smooth, glowing skin plane.",
                bullets: ["Reduces severe pit depth", "Improves skin elastic texture", "Minimal healing downtime"]
              },
              {
                title: "Melasma & Pigmentation",
                tech: "Q-Switched Nd:YAG Laser",
                desc: "Break down localized melanin clusters. Treat deep pigmentation, sun spots, tanning, and stubborn melasma safely without cellular heat damage.",
                bullets: ["Targeted cellular treatment", "Even-toned glow finish", "Excellent dark spot reduction"]
              },
              {
                title: "Anti-Aging Aesthetics",
                tech: "Aesthetic Botox & HA Fillers",
                desc: "Smooth expression lines, crow's feet, and volume loss with premium injectables managed by certified board dermatologists.",
                bullets: ["Natural structural results", "Instant volume replenishment", "FDA-cleared components only"]
              },
              {
                title: "PRP Hair Restoration",
                tech: "Autologous Plasma Centrifugation",
                desc: "Combat androgenetic alopecia and general thinning. We draw and isolate rich growth factor platelets to reactivate dormant hair roots.",
                bullets: ["Accelerates density growth", "Reduces active follicle fall", "Natural bio-safe treatment"]
              },
              {
                title: "Clinical Skin Peels",
                tech: "Custom Glycolic & Salicylic Peels",
                desc: "Gently exfoliate dull, dead superficial layers. Unclog congested pores and reduce minor acne flare-ups under strict medical monitoring.",
                bullets: ["Exfoliates blackheads", "Minimizes active sebum", "Quick 30-min lunch procedure"]
              }
            ].map((srv, idx) => (
              <div key={idx} className={`p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between hover:scale-[1.01] transition-transform`}>
                <div>
                  <div className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">{srv.tech}</div>
                  <h3 className="text-lg font-bold text-[#1E293B] mt-2 mb-4">{srv.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{srv.desc}</p>
                  
                  <ul className="space-y-2">
                    {srv.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                        <Check size={12} className="text-[#06B6D4] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#book"
                  onClick={() => setForm(prev => ({ ...prev, service: srv.title, notes: `Interested in: ${srv.title}` }))}
                  className={`inline-flex items-center gap-1 text-xs font-bold text-[#1E293B] hover:text-[#06B6D4] transition-colors mt-8`}
                >
                  <span>Inquire Service</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Consultation Form Section */}
      <section id="book" className="py-20 lg:py-28 bg-[#F0F4F8] border-t border-white/40">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.3em] font-inter block mb-3">
              Consultation
            </span>
            <h2 className="text-4xl lg:text-5xl font-cormorant font-medium text-[#1E293B]">
              Schedule Your Clinic Visit
            </h2>
            <p className="text-xs text-slate-500 font-inter mt-3">
              Book your private consultation with Dr. Raj Kirit's team. We will review your skincare history and curate a bespoke plan.
            </p>
          </div>

          <div className={`p-8 lg:p-12 rounded-[2.5rem] ${outsetShadow} bg-[#F0F4F8] border border-white/80 font-inter`}>
            
            {submittedData ? (
              <div className="text-center space-y-6 py-8">
                <div className={`w-16 h-16 rounded-full ${insetShadow} flex items-center justify-center text-green-500 mx-auto`}>
                  <Check size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-cormorant font-bold text-[#1E293B]">Appointment Requested!</h3>
                  <p className="text-xs text-slate-500">Your request has been registered under reference ID: <span className="font-bold text-[#06B6D4]">{submittedData.bookingId}</span></p>
                </div>

                <div className={`max-w-md mx-auto p-5 rounded-2xl ${insetShadow} text-left text-xs space-y-3 bg-[#F0F4F8]/80`}>
                  <div className="flex justify-between"><span className="text-slate-400">Patient Name:</span> <span className="font-bold text-[#1E293B]">{submittedData.name}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Contact Phone:</span> <span className="font-bold text-[#1E293B]">{submittedData.phone}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Email Address:</span> <span className="font-bold text-[#1E293B]">{submittedData.email}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Selected Procedure:</span> <span className="font-bold text-[#1E293B]">{submittedData.service}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Preferred Date & Slot:</span> <span className="font-bold text-[#1E293B]">{submittedData.date} ({submittedData.slot})</span></div>
                </div>

                <p className="text-[10px] text-slate-400 max-w-sm mx-auto">
                  A clinic representative will call you at <span className="font-bold">{submittedData.phone}</span> within 2 business hours to confirm your final slot timing.
                </p>

                <button
                  onClick={() => setSubmittedData(null)}
                  className={`mt-4 px-6 py-3 rounded-xl ${outsetShadow} ${activeShadow} text-xs font-bold uppercase tracking-wider text-[#1E293B] hover:text-[#06B6D4] bg-[#F0F4F8] transition-all`}
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={form.name}
                        onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.name && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Contact Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        placeholder="9866112233"
                        value={form.phone}
                        onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.phone && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.phone}</span>}
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        placeholder="patient@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.email && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Procedure */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Clinical Procedure
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm(prev => ({ ...prev, service: e.target.value }))}
                      className={`w-full px-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] outline-none focus:ring-1 focus:ring-cyan-300 appearance-none`}
                    >
                      <option>Laser Hair Reduction</option>
                      <option>Acne & Scar Treatment</option>
                      <option>Melasma & Pigmentation Treatment</option>
                      <option>PRP Hair Restoration</option>
                      <option>Anti-Aging Botox/Fillers</option>
                      <option>Chemical Skin Peels</option>
                    </select>
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Calendar size={16} />
                      </div>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] outline-none focus:ring-1 focus:ring-cyan-300`}
                      />
                    </div>
                    {errors.date && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.date}</span>}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={form.slot}
                      onChange={(e) => setForm(prev => ({ ...prev, slot: e.target.value }))}
                      className={`w-full px-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] outline-none focus:ring-1 focus:ring-cyan-300`}
                    >
                      <option>Morning (10:00 AM - 01:00 PM)</option>
                      <option>Afternoon (01:00 PM - 04:00 PM)</option>
                      <option>Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                  </div>

                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Skincare Concern Details (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Briefly explain your skin or hair concerns..."
                    value={form.notes}
                    onChange={(e) => setForm(prev => ({ ...prev, notes: e.target.value }))}
                    className={`w-full px-4 py-3.5 rounded-xl ${insetShadow} border-none bg-[#F0F4F8] text-xs text-[#1E293B] placeholder-slate-400 outline-none focus:ring-1 focus:ring-cyan-300`}
                  ></textarea>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-10 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#06B6D4]/25 hover:shadow-cyan-500/40 active:scale-95 disabled:opacity-50`}
                  >
                    {isSubmitting ? 'Verifying Details...' : 'Request Consultation'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Patient Transformations/Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-28 border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.3em] font-inter block mb-3">
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-cormorant font-medium text-[#1E293B]">
              Patient Transformations
            </h2>
            <div className="w-16 h-1 bg-[#06B6D4] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-inter">
            {[
              {
                name: "Ananya Sharma",
                location: "Tolichowki, Hyd",
                service: "Laser Hair Reduction",
                quote: "I was extremely skeptical about Laser Hair Reduction due to my sensitive skin. The doctors at Celestee monitored my patches carefully. Now, after 6 sessions, my skin is completely smooth. Highly recommend!",
                stars: 5,
                transformation: "Thick hair follicles reduced to smooth, clear skin plane."
              },
              {
                name: "Mirza Yusuf Ali",
                location: "Shaikpet, Hyd",
                service: "Acne Scar Resurfacing",
                quote: "Had deep pitted scars from teenage acne. The combination of Microneedling RF and Fractional CO2 at Celestee was brilliant. Scars have smoothed out by almost 80%. Worth every rupee.",
                stars: 5,
                transformation: "Grade 3 atrophic acne scars refined to normal skin profile."
              },
              {
                name: "Ayesha Fatima",
                location: "Mehdipatnam, Hyd",
                service: "PRP Hair Restoration",
                quote: "Hormonal hair fall had thinned my crown area severely. Dr. Raj Kirit recommended high-density growth factor PRP. The hair shedding stopped by the 3rd session, and new follicles are visibly shooting.",
                stars: 5,
                transformation: "Frontal crown density restoration & hair fall stabilization."
              }
            ].map((test, idx) => (
              <div key={idx} className={`p-8 rounded-3xl ${outsetShadow} bg-[#F0F4F8] border border-white/60 text-left flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#06B6D4] text-[#06B6D4]" />
                    ))}
                  </div>

                  <p className="text-xs italic text-slate-600 leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/40">
                  <div className={`p-3 rounded-xl ${insetShadow} bg-[#F0F4F8] text-[10px] text-slate-500 font-bold mb-4 flex items-center gap-2`}>
                    <Sparkles size={12} className="text-[#06B6D4]" />
                    <span>Result: {test.transformation}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs font-bold text-[#1E293B]">{test.name}</div>
                      <div className="text-[10px] text-slate-400">{test.location}</div>
                    </div>
                    <span className="text-[9px] font-bold text-[#06B6D4] uppercase tracking-wider bg-cyan-50 px-2 py-1 rounded border border-cyan-100">
                      {test.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Store Details Footer */}
      <footer className="bg-[#F0F4F8] pt-20 pb-12 border-t border-white/50 font-inter">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/40">
          
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${outsetShadow} flex items-center justify-center bg-[#F0F4F8] border border-white/60 text-[#06B6D4]`}>
                <Sparkles size={18} />
              </div>
              <span className="font-cormorant text-xl font-bold tracking-wide text-[#1E293B]">CELESTEE</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
              Board-certified dermatology, hair transplant procedures, and advanced laser systems at Hyderabad's prime aesthetic destination.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E293B]">
              Store & Address Details
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Celestee Clinic, 3rd Floor, Golden Heights, Above Karur Vysya Bank, Tolichowki Main Road, Hyderabad, Telangana 500008.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#06B6D4] shrink-0" />
                <span>+91 9866112233</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#06B6D4] shrink-0" />
                <span>info@celesteeskinclinic.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Accolades */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E293B]">
              Operating Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <div>Monday - Saturday: 10:00 AM - 08:00 PM</div>
                  <div>Sunday: 11:00 AM - 04:00 PM (By Appt Only)</div>
                </div>
              </div>
              <div className="pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                • ISO 9001:2015 Certified • NABL Lab Associated
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest gap-4">
          <div>
            © 2026 Celestee Skin, Laser & Hair Clinic. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#06B6D4]">Terms</a>
            <a href="#" className="hover:text-[#06B6D4]">Privacy Policy</a>
            <a href="#" className="hover:text-[#06B6D4]">Tolichowki Branch</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

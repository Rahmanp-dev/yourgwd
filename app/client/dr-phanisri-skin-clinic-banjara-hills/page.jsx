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
  ArrowRight,
  Heart,
  FileText,
  HelpCircle,
  Clock3,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Smile
} from 'lucide-react';

// Treatments Data
const TREATMENT_CATEGORIES = {
  'acne-scar': {
    name: 'Acne Scar Revision',
    description: 'Advanced protocols utilizing radiofrequency microneedling, subcision, and targeting deep dermal scar tissue.',
    basePrice: 10000,
    options: [
      { id: 'scar-mnrf', name: 'Microneedling RF (MNRF) Session', multiplier: 1.0, duration: '45 mins' },
      { id: 'scar-subcision', name: 'Subcision & TCA Cross Protocol', multiplier: 1.2, duration: '60 mins' },
      { id: 'scar-fractional', name: 'Fractional CO2 Laser Resurfacing', multiplier: 1.5, duration: '40 mins' }
    ]
  },
  'laser-resurfacing': {
    name: 'Laser Resurfacing',
    description: 'Precision non-ablative lasers to improve skin tone, erase pigmentation, and stimulate collagen turnover.',
    basePrice: 8500,
    options: [
      { id: 'laser-erbium', name: 'Erbium Glass Laser Resurfacing', multiplier: 1.0, duration: '45 mins' },
      { id: 'laser-ipl', name: 'Photo-Rejuvenation IPL Laser', multiplier: 0.8, duration: '30 mins' },
      { id: 'laser-carbon', name: 'Q-Switched Carbon Peel Special', multiplier: 1.2, duration: '35 mins' }
    ]
  },
  'anti-aging': {
    name: 'Anti-Aging Procedures',
    description: 'Targeted aesthetic clinical injectables and structural ultrasound tightening to lift, restore, and contour.',
    basePrice: 15000,
    options: [
      { id: 'age-wrinkle', name: 'Aesthetic Line Smoothing Injectables', multiplier: 1.0, duration: '30 mins' },
      { id: 'age-hifu', name: 'Ultrasound Deep Lift (HIFU)', multiplier: 1.8, duration: '60 mins' },
      { id: 'age-booster', name: 'Hyaluronic Skin Glow Infusion', multiplier: 1.3, duration: '45 mins' }
    ]
  }
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your main aesthetic target?",
    options: [
      { text: "Pitted scars, acne marks, or uneven skin texture", value: "acne-scar" },
      { text: "Sun damage, brown spots, or dull skin tone", value: "laser-resurfacing" },
      { text: "Saggy jawline, forehead wrinkles, or volume loss", value: "anti-aging" }
    ]
  },
  {
    id: 2,
    question: "What is your skin type profile?",
    options: [
      { text: "Sensitive skin (gets red or irritated easily)", value: "laser-resurfacing" },
      { text: "Normal or oily skin (highly resilient)", value: "acne-scar" },
      { text: "Dry or mature skin (needs moisture/firmness)", value: "anti-aging" }
    ]
  },
  {
    id: 3,
    question: "What downtime is acceptable for you?",
    options: [
      { text: "Zero. Need to wear makeup/go to work tomorrow", value: "laser-resurfacing" },
      { text: "1-2 days of pinkness or dry texture is fine", value: "acne-scar" },
      { text: "Open to clinical protocols for maximum results", value: "anti-aging" }
    ]
  }
];

export default function DrPhanisriSkinClinicPage() {
  // Mobile Navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selector Widget State
  const [selectedTx, setSelectedTx] = useState('acne-scar');
  const [selectedOpt, setSelectedOpt] = useState('scar-mnrf');
  const [sessionsCount, setSessionsCount] = useState(3);
  const [quoteLocked, setQuoteLocked] = useState(false);

  // Skin Quiz State
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Appointment Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'morning',
    treatment: 'acne-scar',
    doctor: 'Dr. Phanisri J.',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // Calculations for Treatment Estimator
  const activeTx = TREATMENT_CATEGORIES[selectedTx] || TREATMENT_CATEGORIES['acne-scar'];
  const activeOpt = activeTx.options.find(o => o.id === selectedOpt) || activeTx.options[0];
  const unitPrice = Math.round(activeTx.basePrice * activeOpt.multiplier);
  const grossSubtotal = unitPrice * sessionsCount;

  // Session Discount Rules
  let discountPercent = 0;
  if (sessionsCount >= 6) discountPercent = 18;
  else if (sessionsCount >= 4) discountPercent = 12;
  else if (sessionsCount >= 2) discountPercent = 6;

  const discountAmount = Math.round((grossSubtotal * discountPercent) / 100);
  const netSubtotal = grossSubtotal - discountAmount;
  const taxAmount = Math.round(netSubtotal * 0.18); // 18% GST
  const estimatedTotal = netSubtotal + taxAmount;

  // Handle changes in category selector
  const handleTxChange = (txId) => {
    setSelectedTx(txId);
    const defaults = TREATMENT_CATEGORIES[txId].options[0].id;
    setSelectedOpt(defaults);
    setQuoteLocked(false);
  };

  // Lock estimate and pre-fill form
  const lockEstimateAndScroll = () => {
    const formattedNotes = `LOCKED PREVIEW ESTIMATE: ${activeTx.name} (${activeOpt.name})\nSessions: ${sessionsCount}\nPrice Details: Base: ₹${grossSubtotal.toLocaleString('en-IN')}, Discount: ₹${discountAmount.toLocaleString('en-IN')}, GST: ₹${taxAmount.toLocaleString('en-IN')}\nTotal Quote: ₹${estimatedTotal.toLocaleString('en-IN')}`;
    setForm(prev => ({
      ...prev,
      treatment: selectedTx,
      notes: formattedNotes
    }));
    setQuoteLocked(true);
    
    // Scroll to booking form
    const bookingSection = document.getElementById('booking-form-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quiz Answer Handle
  const handleQuizAnswer = (value) => {
    const nextAnswers = [...quizAnswers, value];
    setQuizAnswers(nextAnswers);
    if (currentQuizStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizStep(currentQuizStep + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizStep(0);
    setQuizAnswers([]);
    setShowQuizResult(false);
  };

  const getQuizRecommendation = () => {
    const primaryConcern = quizAnswers[0] || 'acne-scar';
    
    let recommendationText = "";
    let recommendedCategory = "acne-scar";

    if (primaryConcern === "acne-scar") {
      recommendedCategory = "acne-scar";
      recommendationText = "Our Acne Scar Revision protocol (featuring RF Microneedling combined with focal Subcision) is highly recommended. It targets deep anchor scars to rebuild smooth skin from within.";
    } else if (primaryConcern === "laser-resurfacing") {
      recommendedCategory = "laser-resurfacing";
      recommendationText = "We recommend Laser Resurfacing (utilizing the advanced Erbium Glass Laser). This promotes rapid skin regeneration, clears pigmentation, and leaves a bright, smooth complexion.";
    } else {
      recommendedCategory = "anti-aging";
      recommendationText = "Our non-surgical Anti-Aging Lift (utilizing Deep HIFU and Hyaluronic glow boosters) is recommended to tighten structural layers and contour the jawline.";
    }

    return {
      category: recommendedCategory,
      text: recommendationText
    };
  };

  // Input changes with real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation checks
    if (name === 'name') {
      if (!value.trim()) {
        setFormErrors(prev => ({ ...prev, name: 'Child or Adult name is required' }));
      } else if (value.trim().length < 3) {
        setFormErrors(prev => ({ ...prev, name: 'Name must be at least 3 characters' }));
      } else {
        setFormErrors(prev => ({ ...prev, name: '' }));
      }
    }

    if (name === 'phone') {
      const cleanPhone = value.replace(/[\s-]/g, '');
      if (!value.trim()) {
        setFormErrors(prev => ({ ...prev, phone: 'Mobile number is required' }));
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        setFormErrors(prev => ({ ...prev, phone: 'Please enter a valid 10-digit mobile number' }));
      } else {
        setFormErrors(prev => ({ ...prev, phone: '' }));
      }
    }

    if (name === 'email') {
      if (!value.trim()) {
        setFormErrors(prev => ({ ...prev, email: 'Email address is required' }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setFormErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setFormErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (name === 'date') {
      if (!value) {
        setFormErrors(prev => ({ ...prev, date: 'Appointment date is required' }));
      } else {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0,0,0,0);
        if (selectedDate < today) {
          setFormErrors(prev => ({ ...prev, date: 'Appointment date cannot be in the past' }));
        } else {
          setFormErrors(prev => ({ ...prev, date: '' }));
        }
      }
    }
  };

  // Form Submit Validation
  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    const cleanPhone = form.phone.replace(/[\s-]/g, '');
    if (!form.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      errors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        errors.date = 'Appointment date cannot be in the past';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmation({
        id: `PHANISRI-${Math.floor(100000 + Math.random() * 900000)}`,
        name: form.name,
        phone: form.phone,
        email: form.email,
        date: form.date,
        timeSlot: form.timeSlot,
        treatment: TREATMENT_CATEGORIES[form.treatment]?.name || form.treatment,
        doctor: form.doctor,
        notes: form.notes
      });
    }, 1200);
  };

  const handleResetConfirmation = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: 'morning',
      treatment: 'acne-scar',
      doctor: 'Dr. Phanisri J.',
      notes: ''
    });
    setQuoteLocked(false);
    setBookingConfirmation(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#1F2937] selection:bg-[#8B5CF6]/15 font-sans relative">
      {/* Premium Orchid Top Bar Accent */}
      <div className="h-2 w-full bg-[#8B5CF6]"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FDFEFE]/90 backdrop-blur-md border-b border-[#8B5CF6]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-2xl tracking-tight text-[#8B5CF6]">
              DR. PHANISRI
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#7C3AED] font-bold -mt-1">
              Skin & Laser Clinic
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#4B5563]">
            <a href="#about" className="hover:text-[#8B5CF6] transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-[#8B5CF6] transition-colors">Treatments</a>
            <a href="#assessment" className="hover:text-[#8B5CF6] transition-colors">Skin Quiz</a>
            <a href="#results" className="hover:text-[#8B5CF6] transition-colors">Case Studies</a>
            <a href="#testimonials" className="hover:text-[#8B5CF6] transition-colors">Reviews</a>
            <a href="#booking-form-section" className="bg-[#8B5CF6] text-white px-5 py-2.5 rounded-xl hover:bg-[#7C3AED] transition-all transform hover:scale-[1.02] shadow-sm">
              Schedule Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#8B5CF6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFEFE] border-b border-[#8B5CF6]/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-[#4B5563]">Philosophy</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-[#4B5563]">Treatments</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-[#4B5563]">Skin Quiz</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-[#4B5563]">Case Studies</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-[#4B5563]">Reviews</a>
            <a 
              href="#booking-form-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#8B5CF6] text-white text-center py-3 rounded-xl font-semibold hover:bg-[#7C3AED]"
            >
              Schedule Consultation
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:py-32 bg-gradient-to-b from-[#F5F3FF] via-[#FDFEFE] to-[#F3E8FF]">
          {/* Glassmorphic Background Blur Circles */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D8B4FE]/30 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C084FC]/25 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Text Area */}
              <div className="md:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles size={14} className="text-[#8B5CF6]" /> Premium Laser & Aesthetic Center
                </div>
                <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
                  Perfecting Skin. <br />
                  <span className="text-[#8B5CF6]">Restoring Confidence.</span>
                </h1>
                <p className="font-sans text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                  Welcome to Dr. Phanisri Skin Clinic in Banjara Hills. We provide world-class clinical acne scar revision, laser skin resurfacing, and advanced anti-aging procedures tailored to your unique skin biology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="#booking-form-section" 
                    className="bg-[#8B5CF6] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#7C3AED] shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Book Appointment <ArrowRight size={18} />
                  </a>
                  <a 
                    href="#services" 
                    className="bg-white text-[#7C3AED] border border-[#8B5CF6]/20 px-8 py-4 rounded-xl font-bold text-center hover:bg-[#FAF5FF] transition-all flex items-center justify-center shadow-sm"
                  >
                    View Treatments
                  </a>
                </div>
              </div>

              {/* Graphic Frame with Glassmorphic Elements */}
              <div className="md:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-violet-100 bg-white p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                      alt="Dr. Phanisri Clinic Suite" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/30 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/85 p-4 rounded-2xl border border-white/60 shadow-lg text-left">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#8B5CF6]/15 p-2 rounded-xl text-[#8B5CF6]">
                          <Award size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#7C3AED]">Acne & Laser Care</p>
                          <p className="text-sm font-bold text-gray-900">Advanced US-FDA Devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stats Bar */}
        <section className="bg-[#8B5CF6] text-white py-10 shadow-lg relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold mb-1">12,000+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-100">Patients Treated</p>
              </div>
              <div className="border-l border-white/20 pl-4 md:pl-0 md:border-l">
                <p className="text-3xl md:text-4xl font-extrabold mb-1">15+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-100">Years Clinical Practice</p>
              </div>
              <div className="border-t border-white/20 pt-6 md:pt-0 md:border-t-0 md:border-l">
                <p className="text-3xl md:text-4xl font-extrabold mb-1">99.2%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-100">Success Rate</p>
              </div>
              <div className="border-t border-l border-white/20 pt-6 pl-4 md:pt-0 md:pl-0 md:border-t-0 md:border-l">
                <p className="text-3xl md:text-4xl font-extrabold mb-1">100%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-100">Personalized Consultations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Founder / Head Doctor Bio */}
        <section id="about" className="py-20 md:py-28 bg-[#FDFEFE]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Doctor Portrait Image */}
              <div className="md:col-span-5 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#8B5CF6] pointer-events-none"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#8B5CF6] pointer-events-none"></div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-violet-100/50 bg-white p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. Phanisri J. - Dermatologist" 
                    className="object-cover w-full h-full rounded-xl object-top"
                  />
                </div>
              </div>

              {/* Bio Details */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-2 block">
                  Founder & Head Dermatologist
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Dr. Phanisri J.
                </h2>
                <div className="w-16 h-1 bg-[#8B5CF6] mb-6"></div>
                
                <p className="font-sans italic text-lg text-[#7C3AED] mb-6 leading-relaxed">
                  "Our focus is not just treating scars; it is remodeling the dermal layer to restore smooth texture, using evidence-based, customized science."
                </p>
                
                <div className="space-y-4 font-sans text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                  <p>
                    Dr. Phanisri J. is a highly esteemed dermatologist and aesthetic laser physician based in Hyderabad. With over 15 years of dedicated practice, she specializes in advanced Acne Scar Revision, MNRF therapy, deep laser skin resurfacing, and state-of-the-art non-surgical anti-aging treatments.
                  </p>
                  <p>
                    Known for her thorough, patient-first approach, Dr. Phanisri ensures that each treatment plan is supported by detailed diagnosis. She believes in utilizing US-FDA approved technologies to deliver safe, predictable, and life-enhancing results.
                  </p>
                </div>

                {/* Badges / Credentials */}
                <div className="grid grid-cols-2 gap-4 border-t border-violet-100 pt-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#8B5CF6] shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-sm font-bold text-gray-900">MD Dermatology</p>
                      <p className="text-xs text-gray-500">KMC Hospital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#8B5CF6] shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Laser Specialist</p>
                      <p className="text-xs text-gray-500">Board Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Treatments & Services Selector */}
        <section id="services" className="py-20 md:py-28 bg-[#FAF5FF] border-y border-violet-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-2 block">
                Treatment Customizer
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Clinical Treatments & Estimates
              </h2>
              <p className="text-sm text-gray-600">
                Choose a clinical concern below, configure specific treatment options, and adjust sessions to view your custom pricing package.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Selector Side */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-violet-100/60 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Activity size={18} className="text-[#8B5CF6]" /> Configure Treatment Session
                </h3>

                {/* Step 1: Select Category */}
                <div className="mb-8">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-3">
                    1. Select Treatment Concern
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.keys(TREATMENT_CATEGORIES).map((catId) => (
                      <button
                        key={catId}
                        type="button"
                        onClick={() => handleTxChange(catId)}
                        className={`p-4 rounded-xl border text-center font-sans text-sm font-bold transition-all ${
                          selectedTx === catId
                            ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-sm'
                            : 'bg-violet-50/50 text-gray-700 border-violet-100 hover:bg-violet-100/50'
                        }`}
                      >
                        {TREATMENT_CATEGORIES[catId].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Option */}
                <div className="mb-8">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-3">
                    2. Select Treatment Option
                  </label>
                  <div className="space-y-3">
                    {activeTx.options.map((opt) => (
                      <label
                        key={opt.id}
                        onClick={() => {
                          setSelectedOpt(opt.id);
                          setQuoteLocked(false);
                        }}
                        className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedOpt === opt.id
                            ? 'bg-[#8B5CF6]/5 border-[#8B5CF6] ring-1 ring-[#8B5CF6]'
                            : 'bg-white border-violet-100 hover:bg-violet-50/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="treatment-option"
                            checked={selectedOpt === opt.id}
                            onChange={() => {}}
                            className="text-[#8B5CF6] focus:ring-[#8B5CF6] h-4 w-4"
                          />
                          <div className="text-left">
                            <p className="text-sm font-bold text-gray-900">{opt.name}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                              <Clock3 size={12} /> Expected Session: {opt.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-bold text-[#8B5CF6]">
                          ₹{(activeTx.basePrice * opt.multiplier).toLocaleString('en-IN')}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 3: Sessions */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                      3. Select Number of Sessions
                    </label>
                    <span className="text-xs font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-0.5 rounded-full">
                      {discountPercent > 0 ? `${discountPercent}% Off Package` : 'No Discount'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="8"
                      value={sessionsCount}
                      onChange={(e) => {
                        setSessionsCount(parseInt(e.target.value));
                        setQuoteLocked(false);
                      }}
                      className="w-full h-2 bg-violet-100 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
                    />
                    <span className="text-lg font-bold text-gray-900 shrink-0 w-12 text-center">
                      {sessionsCount} {sessionsCount === 1 ? 'Sess.' : 'Sess.'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] sm:text-xs text-gray-500 font-semibold text-center">
                    <p className="bg-violet-50/50 py-1.5 px-2 rounded-md">2-3 Sessions: 6% discount</p>
                    <p className="bg-violet-50/50 py-1.5 px-2 rounded-md">4-5 Sessions: 12% discount</p>
                    <p className="bg-violet-50/50 py-1.5 px-2 rounded-md">6+ Sessions: 18% discount</p>
                  </div>
                </div>
              </div>

              {/* Right Quote Summary Side */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-violet-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/5 rounded-bl-[100px] pointer-events-none"></div>
                
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] block mb-2">
                  Session Quotation
                </span>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">
                  Pricing Sheet
                </h4>
                <p className="text-xs text-gray-500 mb-6">Quote excludes post-care ointment kits</p>

                <div className="border-t border-b border-violet-100 py-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Concern Category</span>
                    <span className="text-gray-900 font-bold">{activeTx.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Treatment Selected</span>
                    <span className="text-gray-900 font-bold text-right">{activeOpt.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Sessions Count</span>
                    <span className="text-gray-900 font-bold">{sessionsCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Gross Subtotal ({sessionsCount}x)</span>
                    <span className="text-gray-900 font-bold">₹{grossSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-[#8B5CF6]">
                      <span className="font-semibold">Package Discount ({discountPercent}%)</span>
                      <span className="font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Taxation (18% GST)</span>
                    <span className="text-gray-900 font-bold">₹{taxAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-6 mb-8 flex justify-between items-baseline">
                  <span className="text-gray-900 font-bold text-base">Estimated Total</span>
                  <span className="text-3xl font-extrabold text-[#8B5CF6]">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={lockEstimateAndScroll}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    quoteLocked 
                      ? 'bg-[#059669] text-white' 
                      : 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED] hover:scale-[1.01]'
                  }`}
                >
                  {quoteLocked ? '✓ Estimate Applied Below' : 'Apply Quote & Book Consultation'}
                </button>
                <p className="text-[10px] text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
                  <Lock size={10} /> Secure pricing valid for 14 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Skin Assessment Questionnaire */}
        <section id="assessment" className="py-20 md:py-28 bg-[#FDFEFE]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-violet-100 shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#8B5CF6]"></div>

              <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-2 block">
                Diagnostic Quiz
              </span>
              <h2 className="font-sans text-3xl font-extrabold text-gray-900 mb-4">
                Clinical Skin Assessment Advisor
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10">
                Answer 3 quick questions regarding your skin goals to receive an immediate recommendation from our dermatological index.
              </p>

              {!showQuizResult ? (
                <div>
                  {/* Progress Indicator */}
                  <div className="flex justify-between items-center text-xs font-bold text-[#8B5CF6] uppercase mb-4">
                    <span>Question {currentQuizStep + 1} of {QUIZ_QUESTIONS.length}</span>
                    <span>{Math.round(((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-violet-100 h-1.5 rounded-full mb-8">
                    <div 
                      className="bg-[#8B5CF6] h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-gray-800 mb-8">
                    {QUIZ_QUESTIONS[currentQuizStep].question}
                  </h3>

                  <div className="space-y-3 max-w-lg mx-auto">
                    {QUIZ_QUESTIONS[currentQuizStep].options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleQuizAnswer(opt.value)}
                        className="w-full p-4 rounded-xl border border-violet-100 bg-[#FDFEFE] hover:bg-[#8B5CF6]/5 hover:border-[#8B5CF6] font-sans text-sm font-semibold text-gray-800 text-left transition-all flex items-center justify-between"
                      >
                        {opt.text}
                        <ChevronRight size={16} className="text-[#8B5CF6]" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <div className="bg-[#059669]/10 text-[#059669] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-gray-900 mb-3">
                    Your Personal Clinical Recommendation
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-6">
                    Category: {TREATMENT_CATEGORIES[getQuizRecommendation().category].name}
                  </p>
                  
                  <div className="bg-violet-50/30 p-6 rounded-xl border border-violet-100 text-left max-w-lg mx-auto mb-8 shadow-inner">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {getQuizRecommendation().text}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={() => {
                        handleTxChange(getQuizRecommendation().category);
                        const servicesSection = document.getElementById('services');
                        if (servicesSection) {
                          servicesSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-[#8B5CF6] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-sm hover:bg-[#7C3AED] transition-all"
                    >
                      Configure Prices
                    </button>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="bg-violet-50 text-[#7C3AED] border border-violet-100 py-3.5 px-6 rounded-xl font-bold text-sm hover:bg-[#8B5CF6]/10 transition-all"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 6: Results / Before & After Showcase */}
        <section id="results" className="py-20 md:py-28 bg-[#FAF5FF] border-t border-b border-violet-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-2 block">
                Treatment Showcase
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Proven Clinical Transformations
              </h2>
              <p className="text-sm text-gray-600">
                Mock results and case histories illustrating typical treatment outcomes under Dr. Phanisri J.'s care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Study 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-violet-100 hover:shadow-md transition-all text-left">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-150">
                  <img 
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800" 
                    alt="Acne Scar Treatment Outcome" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#8B5CF6] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Acne Scar Revision
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Severe Boxcar Scar Revision</h3>
                  <p className="text-xs text-[#8B5CF6] font-bold uppercase tracking-wider mb-3">Protocol: MNRF + Focal Subcision</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    A 24-year-old female presenting with deep boxcar acne scarring. Exhibited 80% improvement in skin flatness over 5 months.
                  </p>
                  <div className="flex justify-between border-t border-violet-50 pt-4 text-xs font-bold text-gray-500">
                    <span>Course: 5 Sessions</span>
                    <span>Satisfaction Rate: 5/5</span>
                  </div>
                </div>
              </div>

              {/* Study 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-violet-100 hover:shadow-md transition-all text-left">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-150">
                  <img 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                    alt="Erbium Laser Resurfacing Outcome" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#8B5CF6] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Laser Resurfacing
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pigment & Texture Correction</h3>
                  <p className="text-xs text-[#8B5CF6] font-bold uppercase tracking-wider mb-3">Protocol: Non-Ablative Erbium Glass</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    A 39-year-old male with chronic sun spots and rough texture. Restored high clarity and tone uniformity.
                  </p>
                  <div className="flex justify-between border-t border-violet-50 pt-4 text-xs font-bold text-gray-500">
                    <span>Course: 3 Sessions</span>
                    <span>Satisfaction Rate: 5/5</span>
                  </div>
                </div>
              </div>

              {/* Study 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-violet-100 hover:shadow-md transition-all text-left">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-150">
                  <img 
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" 
                    alt="HIFU Deep Lift Outcome" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#8B5CF6] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Anti-Aging Lift
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Jawline & Neck Contouring</h3>
                  <p className="text-xs text-[#8B5CF6] font-bold uppercase tracking-wider mb-3">Protocol: High-Intensity Ultrasound</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    A 48-year-old female with visible submental laxity and volume sag. Achieved tight, defined jawline contouring.
                  </p>
                  <div className="flex justify-between border-t border-violet-50 pt-4 text-xs font-bold text-gray-500">
                    <span>Course: 2 Sessions</span>
                    <span>Satisfaction Rate: 4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Patient Testimonials */}
        <section id="testimonials" className="py-20 md:py-28 bg-[#FDFEFE]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-2 block">
                Verified Reviews
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                What Our Patients Experience
              </h2>
              <p className="text-sm text-gray-600">
                Read direct reviews from patients who have completed aesthetic treatments at our Road No. 10 clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white p-8 rounded-2xl border border-violet-100 flex flex-col justify-between text-left shadow-sm relative hover:shadow-md transition-all">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-base font-bold text-gray-900 mb-3">"Amazing Scar Clearance!"</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    "I had deep acne craters from my teenage years that never faded. Dr. Phanisri recommended the MNRF with subcision package. The process was highly clinical, clean, and after 4 sessions, my skin texture is unbelievably smooth."
                  </p>
                </div>
                <div className="border-t border-violet-50 pt-4">
                  <p className="text-sm font-bold text-gray-900">Sneha Murthy</p>
                  <p className="text-xs text-gray-500">Hyderabad (Verified Patient)</p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-8 rounded-2xl border border-violet-100 flex flex-col justify-between text-left shadow-sm relative hover:shadow-md transition-all">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-base font-bold text-gray-900 mb-3">"State-of-the-Art Lasers"</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    "I took the Erbium Glass Resurfacing laser sessions for sun damage and dark spots. The clinical setup is stellar and Dr. Phanisri explained every setting in detail. My face is bright, pigmentation has cleared."
                  </p>
                </div>
                <div className="border-t border-violet-50 pt-4">
                  <p className="text-sm font-bold text-gray-900">Rajesh Kumar</p>
                  <p className="text-xs text-gray-500">Banjara Hills (Verified Patient)</p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-8 rounded-2xl border border-violet-100 flex flex-col justify-between text-left shadow-sm relative hover:shadow-md transition-all">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-base font-bold text-gray-900 mb-3">"Very Ethical Doctor"</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    "Dr. Phanisri is highly professional. She doesn't suggest commercial filler treatments unless actually required. She suggested the HIFU lift for my neck folds and the results are natural and firm. Very happy!"
                  </p>
                </div>
                <div className="border-t border-violet-50 pt-4">
                  <p className="text-sm font-bold text-gray-900">K. Arundhati</p>
                  <p className="text-xs text-gray-500">Kondapur (Verified Patient)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Appointment Booking / Enquiry Form */}
        <section id="booking-form-section" className="py-20 md:py-28 bg-[#FAF5FF] border-t border-violet-100 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-violet-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#8B5CF6]"></div>

              {/* Form header */}
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#8B5CF6] mb-2 block">
                  Secure Clinical Booking
                </span>
                <h2 className="font-sans text-3xl font-extrabold text-gray-900 mb-2">
                  Schedule Your Consultation
                </h2>
                <p className="text-xs text-gray-500">
                  Provide your details below to request a slot. Our desk will contact you within 2 business hours.
                </p>
              </div>

              {!bookingConfirmation ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6 text-left">
                  {/* Name field */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                      Child or Adult Full Name <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#8B5CF6] pointer-events-none">
                        <User size={16} />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDFEFE] text-sm text-gray-900 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all ${
                          formErrors.name ? 'border-[#8B5CF6] ring-1 ring-[#8B5CF6]' : 'border-violet-100'
                        }`}
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-[11px] text-[#8B5CF6] mt-1 font-semibold flex items-center gap-1">
                        <AlertCircle size={12} /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone field */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                        Mobile Number <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#8B5CF6] pointer-events-none">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDFEFE] text-sm text-gray-900 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all ${
                            formErrors.phone ? 'border-[#8B5CF6] ring-1 ring-[#8B5CF6]' : 'border-violet-100'
                          }`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-[11px] text-[#8B5CF6] mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                        Email Address <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#8B5CF6] pointer-events-none">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="name@domain.com"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDFEFE] text-sm text-gray-900 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all ${
                            formErrors.email ? 'border-[#8B5CF6] ring-1 ring-[#8B5CF6]' : 'border-violet-100'
                          }`}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-[11px] text-[#8B5CF6] mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                        Preferred Date <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#8B5CF6] pointer-events-none">
                          <Calendar size={16} />
                        </span>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDFEFE] text-sm text-gray-900 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all ${
                            formErrors.date ? 'border-[#8B5CF6] ring-1 ring-[#8B5CF6]' : 'border-violet-100'
                          }`}
                        />
                      </div>
                      {formErrors.date && (
                        <p className="text-[11px] text-[#8B5CF6] mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {formErrors.date}
                        </p>
                      )}
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={form.timeSlot}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-violet-100 bg-[#FDFEFE] text-sm text-gray-905 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all"
                      >
                        <option value="morning">Morning (9:30 AM - 12:30 PM)</option>
                        <option value="afternoon">Afternoon (1:30 PM - 4:30 PM)</option>
                        <option value="evening">Evening (5:00 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Treatment Selection */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                        Treatment Interest
                      </label>
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-violet-100 bg-[#FDFEFE] text-sm text-gray-905 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all"
                      >
                        {Object.keys(TREATMENT_CATEGORIES).map((key) => (
                          <option key={key} value={key}>
                            {TREATMENT_CATEGORIES[key].name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Doctor */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2">
                        Preferred Doctor
                      </label>
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-violet-100 bg-[#FDFEFE] text-sm text-gray-905 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all"
                        disabled
                      >
                        <option value="Dr. Phanisri J.">Dr. Phanisri J. (Dermatologist)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Live Quote Info */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-750 block mb-2 flex items-center justify-between">
                      <span>Condition details / Clinical history</span>
                      {quoteLocked && <span className="text-[#059669] text-[10px] font-bold">Estimate attached successfully</span>}
                    </label>
                    <textarea
                      name="notes"
                      rows="3"
                      value={form.notes}
                      onChange={handleInputChange}
                      placeholder="Please note down skin sensitivities, allergies, or previous treatments."
                      className="w-full px-4 py-3.5 rounded-xl border border-violet-100 bg-[#FDFEFE] text-sm text-gray-905 focus:ring-1 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy note */}
                  <div className="flex gap-2.5 items-start text-[11px] text-gray-500 leading-relaxed bg-[#FAF5FF] p-4 rounded-xl border border-violet-100/50">
                    <ShieldCheck className="text-[#8B5CF6] shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Privacy Assurance:</strong> We store all patient diagnostics securely in accordance with local healthcare laws. We will never share your contact details.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#8B5CF6] text-white rounded-xl font-bold text-center hover:bg-[#7C3AED] hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Logging consultation request...
                      </>
                    ) : (
                      'Request Appointment Slot'
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-fadeIn py-8 text-center">
                  <div className="bg-[#059669]/10 text-[#059669] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-sm text-[#059669] font-bold tracking-wide uppercase mb-6">
                    Reference ID: {bookingConfirmation.id}
                  </p>

                  <div className="bg-violet-50/50 p-6 rounded-2xl border border-violet-100 text-left max-w-md mx-auto mb-8 space-y-3 font-sans text-sm text-gray-600">
                    <div className="flex justify-between border-b border-violet-100/50 pb-2">
                      <span className="font-semibold">Patient:</span>
                      <span className="text-gray-900 font-bold">{bookingConfirmation.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-violet-100/50 pb-2">
                      <span className="font-semibold">Consultant Doctor:</span>
                      <span className="text-gray-900 font-bold">{bookingConfirmation.doctor}</span>
                    </div>
                    <div className="flex justify-between border-b border-violet-100/50 pb-2">
                      <span className="font-semibold">Treatment Interest:</span>
                      <span className="text-gray-900 font-bold">{bookingConfirmation.treatment}</span>
                    </div>
                    <div className="flex justify-between border-b border-violet-100/50 pb-2">
                      <span className="font-semibold">Date & Slot:</span>
                      <span className="text-gray-900 font-bold">{bookingConfirmation.date} ({bookingConfirmation.timeSlot})</span>
                    </div>
                    {bookingConfirmation.notes && (
                      <div className="pt-2 text-xs">
                        <p className="font-semibold mb-1">Live Estimate Logged:</p>
                        <pre className="whitespace-pre-wrap font-sans text-gray-900 bg-white/70 p-3 rounded-lg border border-violet-150 text-[11px]">
                          {bookingConfirmation.notes}
                        </pre>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 max-w-sm mx-auto mb-8 leading-relaxed">
                    Our desk officer will call you at <strong className="text-gray-900">{bookingConfirmation.phone}</strong> shortly to review clinical details and confirm your consultation time.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetConfirmation}
                    className="bg-[#8B5CF6] text-white py-3.5 px-8 rounded-xl font-bold text-sm shadow-sm hover:bg-[#7C3AED] transition-all"
                  >
                    Request Another Appointment
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 9: Clinic Location & Hours Footer */}
        <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-violet-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Column 1: Contact Details */}
              <div className="text-left">
                <span className="font-sans font-black text-2xl tracking-wider text-[#8B5CF6] block mb-6">
                  DR. PHANISRI
                </span>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Specialized clinical acne scar revision, laser resurfacing, and aesthetic anti-aging protocols. Directed by Dr. Phanisri J., Banjara Hills, Hyderabad.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#8B5CF6] shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-gray-300 leading-relaxed">
                      #8-2-601/J, Plot No. 157, Road No. 10, Banjara Hills, Hyderabad - 500034
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#8B5CF6] shrink-0" size={18} />
                    <a href="tel:+919133481234" className="text-sm text-gray-200 font-bold hover:text-[#8B5CF6] transition-colors">
                      +91 9133481234
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#8B5CF6] shrink-0" size={18} />
                    <a href="mailto:contact@drphanisriskin.com" className="text-sm text-gray-300 hover:text-[#8B5CF6] transition-colors">
                      contact@drphanisriskin.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Hours & Quick Info */}
              <div className="text-left">
                <h4 className="font-sans text-lg font-bold text-[#8B5CF6] mb-6">
                  Clinic Hours
                </h4>
                <div className="space-y-3 font-sans text-sm text-gray-300">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-white">10:00 AM - 7:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold text-white">10:00 AM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Sunday</span>
                    <span className="font-bold text-[#8B5CF6] uppercase text-xs">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <Info size={14} className="text-[#8B5CF6]" /> Pre-booking is required for clinical laser settings. Walk-ins subject to doctor availability.
                  </p>
                </div>
              </div>

              {/* Column 3: Maps Placeholder */}
              <div className="text-left">
                <h4 className="font-sans text-lg font-bold text-[#8B5CF6] mb-6">
                  Clinic Location Map
                </h4>
                <div className="w-full aspect-video rounded-xl bg-gray-900 border border-gray-800 overflow-hidden relative flex items-center justify-center p-4">
                  {/* Mock map UI */}
                  <div className="absolute inset-0 bg-violet-900/5 opacity-40"></div>
                  <div className="relative text-center z-10">
                    <MapPin className="text-[#8B5CF6] mx-auto mb-2" size={32} />
                    <p className="text-xs font-bold text-white">Road No. 10, Banjara Hills</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Plot No. 157, Near Starbucks Coffee</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[11px] bg-[#8B5CF6] text-white py-1.5 px-4 rounded-xl font-bold hover:bg-[#7C3AED] transition-colors"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-850 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
              <p>© 2026 Dr. Phanisri Skin Clinic. All rights reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#booking-form-section" className="hover:underline">Privacy Policy</a>
                <a href="#booking-form-section" className="hover:underline">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

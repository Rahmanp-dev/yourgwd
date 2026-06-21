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
  AlertCircle
} from 'lucide-react';

// Treatments Data
const TREATMENT_CATEGORIES = {
  'laser': {
    name: 'Advanced Laser Therapy',
    description: 'Precision laser protocols to address resurfacing, hyperpigmentation, scarring, and permanent hair reduction.',
    basePrice: 12000,
    options: [
      { id: 'laser-full-face', name: 'Full Face & Neck Resurfacing', multiplier: 1.0, duration: '45 mins' },
      { id: 'laser-scar-rev', name: 'Targeted Scar Revision', multiplier: 0.7, duration: '30 mins' },
      { id: 'laser-hair-red', name: 'Premium Laser Hair Reduction', multiplier: 1.5, duration: '60 mins' }
    ]
  },
  'hair': {
    name: 'Hair Restoration',
    description: 'Advanced medical trichology treatments combining follicular stimulators and energy therapies to reverse hair thinning.',
    basePrice: 7500,
    options: [
      { id: 'hair-prp-boost', name: 'PRP Follicular Boost', multiplier: 1.0, duration: '40 mins' },
      { id: 'hair-gfc-pkg', name: 'GFC (Growth Factor) Therapy', multiplier: 1.4, duration: '45 mins' },
      { id: 'hair-laser-regrow', name: 'LLLT Laser Regrowth Therapy', multiplier: 0.8, duration: '30 mins' }
    ]
  },
  'skin': {
    name: 'Skin Rejuvenation',
    description: 'Customized clinical peeling, hydration, and collagen remodeling designed for exceptional radiance and cellular turnover.',
    basePrice: 5000,
    options: [
      { id: 'skin-carbon-peel', name: 'Carbon Laser Peel (Q-Switched)', multiplier: 1.2, duration: '45 mins' },
      { id: 'skin-chemical-glow', name: 'Custom Meso-Chemical Peel', multiplier: 0.8, duration: '30 mins' },
      { id: 'skin-hydra-combo', name: 'Dermatique Hydra-Rejuvenation', multiplier: 1.5, duration: '60 mins' }
    ]
  }
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your primary skin or hair concern?",
    options: [
      { text: "Acne scars, sun spots, or uneven skin texture", value: "laser" },
      { text: "Receding hairline, hair thinning, or excessive hair fall", value: "hair" },
      { text: "Dullness, dry skin, fine lines, or lack of radiance", value: "skin" }
    ]
  },
  {
    id: 2,
    question: "What level of post-treatment downtime is acceptable to you?",
    options: [
      { text: "Zero downtime (need to attend social events immediately)", value: "skin" },
      { text: "Minimal (mild redness or peeling for 24-48 hours is fine)", value: "laser" },
      { text: "Open to premium clinical injectables/procedures for maximum results", value: "hair" }
    ]
  },
  {
    id: 3,
    question: "How would you describe your skin sensitivity?",
    options: [
      { text: "Highly sensitive (prone to redness, itching, or reactions)", value: "sensitive" },
      { text: "Normal / Combination (balanced with occasional dryness)", value: "normal" },
      { text: "Oily / Congested (prone to blackheads and breakouts)", value: "oily" }
    ]
  }
];

export default function DrRameshsDermatiquePage() {
  // Mobile Navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selector Widget State
  const [selectedTx, setSelectedTx] = useState('laser');
  const [selectedOpt, setSelectedOpt] = useState('laser-full-face');
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
    treatment: 'laser',
    doctor: 'Dr. Ramesh Vishwanath',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // Calculations for Treatment Estimator
  const activeTx = TREATMENT_CATEGORIES[selectedTx] || TREATMENT_CATEGORIES['laser'];
  const activeOpt = activeTx.options.find(o => o.id === selectedOpt) || activeTx.options[0];
  const unitPrice = Math.round(activeTx.basePrice * activeOpt.multiplier);
  const grossSubtotal = unitPrice * sessionsCount;

  // Session Discount Rules
  let discountPercent = 0;
  if (sessionsCount >= 6) discountPercent = 15;
  else if (sessionsCount >= 4) discountPercent = 10;
  else if (sessionsCount >= 2) discountPercent = 5;

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
    const primaryConcern = quizAnswers[0] || 'laser';
    const downtime = quizAnswers[1] || 'skin';
    
    let recommendationText = "";
    let recommendedCategory = "laser";

    if (primaryConcern === "laser") {
      recommendedCategory = "laser";
      recommendationText = "Advanced Laser Therapy (Q-switched or Resurfacing protocols) is highly recommended for target scar and texture rejuvenation. Our custom settings minimize recovery time while maximizing collagen stimulation.";
    } else if (primaryConcern === "hair") {
      recommendedCategory = "hair";
      recommendationText = "Our Premium Hair Restoration protocol (utilizing advanced Growth Factor GFC and PRP therapy) is recommended to target follicular strengthening and restore density.";
    } else {
      recommendedCategory = "skin";
      recommendationText = "A clinical Skin Rejuvenation package (Meso-chemical peeling combined with Hydra-Rejuvenation) is recommended to rapidly polish away cellular debris and restore hydration.";
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
        id: `DERM-${Math.floor(100000 + Math.random() * 900000)}`,
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
      treatment: 'laser',
      doctor: 'Dr. Ramesh Vishwanath',
      notes: ''
    });
    setQuoteLocked(false);
    setBookingConfirmation(null);
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0] text-[#2C2520] selection:bg-[#C05621]/15 font-sans relative">
      {/* Premium Terracotta Top Bar Accent */}
      <div className="h-2 w-full bg-[#C05621]"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FDF6F0]/90 backdrop-blur-md border-b border-[#C05621]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-2xl tracking-tight text-[#C05621]">
              DERMATIQUE
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#7C2D12] font-semibold -mt-1">
              Dr. Ramesh Vishwanath
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5A4E45]">
            <a href="#about" className="hover:text-[#C05621] transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-[#C05621] transition-colors">Treatments</a>
            <a href="#assessment" className="hover:text-[#C05621] transition-colors">Skin Quiz</a>
            <a href="#results" className="hover:text-[#C05621] transition-colors">Case Studies</a>
            <a href="#testimonials" className="hover:text-[#C05621] transition-colors">Reviews</a>
            <a href="#booking-form-section" className="bg-[#C05621] text-[#FDF6F0] px-5 py-2.5 rounded-full hover:bg-[#A04518] transition-all transform hover:scale-[1.02] shadow-sm">
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#C05621]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDF6F0] border-b border-[#C05621]/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[#5A4E45]">Philosophy</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[#5A4E45]">Treatments</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[#5A4E45]">Skin Quiz</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[#5A4E45]">Case Studies</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[#5A4E45]">Reviews</a>
            <a 
              href="#booking-form-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#C05621] text-[#FDF6F0] text-center py-3 rounded-xl font-semibold hover:bg-[#A04518]"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:py-32 bg-gradient-to-b from-[#FDF6F0] via-[#FDF6F0] to-[#F9EFE6]">
          {/* Subtle Organic Shapes */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C05621]/5 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E9D5C5]/40 rounded-full filter blur-2xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Text Info */}
              <div className="md:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C05621]/10 text-[#C05621] text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles size={14} /> Premium Cosmetic Dermatology
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C2520] tracking-tight leading-[1.1] mb-6">
                  Scientific Precision. <br />
                  <span className="text-[#C05621]">Radiant Organic Beauty.</span>
                </h1>
                <p className="font-sans text-lg text-[#5A4E45] max-w-xl leading-relaxed mb-8">
                  Welcome to Dr. Ramesh's Dermatique. Located in the heart of Banjara Hills, we combine clinical excellence with state-of-the-art laser therapies and advanced hair restoration protocols for healthy, radiant skin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="#booking-form-section" 
                    className="bg-[#C05621] text-[#FDF6F0] px-8 py-4 rounded-full font-bold text-center hover:bg-[#A04518] shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Schedule Consultation <ArrowRight size={18} />
                  </a>
                  <a 
                    href="#services" 
                    className="bg-[#F7EBE1] text-[#7C2D12] border border-[#C05621]/20 px-8 py-4 rounded-full font-bold text-center hover:bg-[#E9D5C5] transition-all flex items-center justify-center"
                  >
                    Explore Treatments
                  </a>
                </div>
              </div>

              {/* Visual Frame */}
              <div className="md:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#FDF6F0] bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" 
                    alt="Premium Skincare Consultation" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2520]/45 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FDF6F0]/95 backdrop-blur-sm p-4 rounded-2xl border border-[#C05621]/15 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#C05621]/10 p-2.5 rounded-xl text-[#C05621]">
                        <Award size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#7C2D12]">Accredited Clinic</p>
                        <p className="text-sm font-bold text-[#2C2520]">ISO 9001:2015 Certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stats Bar */}
        <section className="bg-[#C05621] text-[#FDF6F0] py-10 shadow-inner relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-black mb-1">15,000+</p>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#FDF6F0]/80">Successful Treatments</p>
              </div>
              <div className="border-l border-[#FDF6F0]/20 pl-4 md:pl-0 md:border-l-2">
                <p className="font-serif text-3xl md:text-4xl font-black mb-1">20+</p>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#FDF6F0]/80">Years Medical Practice</p>
              </div>
              <div className="border-t border-[#FDF6F0]/20 pt-6 md:pt-0 md:border-t-0 md:border-l-2">
                <p className="font-serif text-3xl md:text-4xl font-black mb-1">99.4%</p>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#FDF6F0]/80">Satisfaction Rating</p>
              </div>
              <div className="border-t border-l border-[#FDF6F0]/20 pt-6 pl-4 md:pt-0 md:pl-0 md:border-t-0 md:border-l-2">
                <p className="font-serif text-3xl md:text-4xl font-black mb-1">100%</p>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#FDF6F0]/80">FDA-Approved Tech</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Founder / Head Doctor Bio */}
        <section id="about" className="py-20 md:py-28 bg-[#FDF6F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Doctor Portrait Image */}
              <div className="md:col-span-5 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C05621] pointer-events-none"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C05621] pointer-events-none"></div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-[#C05621]/10 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. Ramesh Vishwanath - Dermatologist" 
                    className="object-cover w-full h-full object-top"
                  />
                </div>
              </div>

              {/* Bio Details */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] mb-2 block">
                  Lead Dermatologist
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2520] mb-6">
                  Dr. Ramesh Vishwanath
                </h2>
                <div className="w-16 h-1 bg-[#C05621] mb-6"></div>
                
                <p className="font-serif italic text-lg text-[#7C2D12] mb-6 leading-relaxed">
                  "Every skin type has a story, and our goal is to enhance its texture and vitality using the safest, most clinically advanced methods."
                </p>
                
                <div className="space-y-4 font-sans text-[#5A4E45] leading-relaxed mb-8">
                  <p>
                    Dr. Ramesh Vishwanath is a veteran dermatologist with over two decades of experience in treating complex skin conditions, acne scar revision, and advanced laser aesthetics. Having trained extensively in Europe and India, he is known for his signature organic-clinical approach, which pairs aggressive medical dermatology with skin barrier healing.
                  </p>
                  <p>
                    At Dermatique, Banjara Hills, Dr. Ramesh personally designs every aesthetic care plan. He believes in minimal but highly targeted interventions, focusing on restoring the natural glow and structure of the skin rather than superficial alterations.
                  </p>
                </div>

                {/* Badges / Credentials */}
                <div className="grid grid-cols-2 gap-4 border-t border-[#C05621]/15 pt-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#C05621] shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-sm font-bold text-[#2C2520]">MD Dermatology</p>
                      <p className="text-xs text-[#5A4E45]/85">Osmania Medical College</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#C05621] shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-sm font-bold text-[#2C2520]">IADVL Member</p>
                      <p className="text-xs text-[#5A4E45]/85">Indian Association of Dermatologists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Treatments & Services Selector */}
        <section id="services" className="py-20 md:py-28 bg-[#F9EFE6] border-y border-[#C05621]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] mb-2 block">
                Interactive Treatment Estimator
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2520] mb-4">
                Personalized Care Options & Quotes
              </h2>
              <p className="text-sm text-[#5A4E45]">
                Select a category, configure your treatment option, and adjust the sessions to preview your customized estimate instantly.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Selector Side */}
              <div className="lg:col-span-7 bg-[#FDF6F0] p-6 sm:p-8 rounded-3xl border border-[#C05621]/10 shadow-md">
                <h3 className="text-lg font-bold text-[#2C2520] mb-6 flex items-center gap-2">
                  <Activity size={18} className="text-[#C05621]" /> Configure Treatment Profile
                </h3>

                {/* Step 1: Select Category */}
                <div className="mb-8">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-3">
                    1. Select Treatment Category
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.keys(TREATMENT_CATEGORIES).map((catId) => (
                      <button
                        key={catId}
                        type="button"
                        onClick={() => handleTxChange(catId)}
                        className={`p-4 rounded-2xl border text-center font-serif text-sm font-bold transition-all ${
                          selectedTx === catId
                            ? 'bg-[#C05621] text-[#FDF6F0] border-[#C05621] shadow-md'
                            : 'bg-[#F9EFE6] text-[#2C2520] border-[#C05621]/10 hover:bg-[#E9D5C5]/45'
                        }`}
                      >
                        {TREATMENT_CATEGORIES[catId].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Option */}
                <div className="mb-8">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-3">
                    2. Select Treatment Protocol
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
                            ? 'bg-[#C05621]/5 border-[#C05621] ring-1 ring-[#C05621]'
                            : 'bg-[#F9EFE6]/50 border-[#C05621]/10 hover:bg-[#F9EFE6]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="treatment-option"
                            checked={selectedOpt === opt.id}
                            onChange={() => {}}
                            className="text-[#C05621] focus:ring-[#C05621] h-4 w-4"
                          />
                          <div className="text-left">
                            <p className="text-sm font-bold text-[#2C2520]">{opt.name}</p>
                            <p className="text-xs text-[#5A4E45]/85 flex items-center gap-1 mt-0.5">
                              <Clock3 size={12} /> Duration: {opt.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-serif font-black text-[#C05621]">
                          ₹{(activeTx.basePrice * opt.multiplier).toLocaleString('en-IN')}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 3: Sessions */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12]">
                      3. Select Number of Sessions
                    </label>
                    <span className="text-xs font-bold text-[#C05621] bg-[#C05621]/10 px-2.5 py-0.5 rounded-full">
                      {discountPercent > 0 ? `${discountPercent}% Pack Discount` : 'No Discount'}
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
                      className="w-full h-2 bg-[#E9D5C5] rounded-lg appearance-none cursor-pointer accent-[#C05621]"
                    />
                    <span className="font-serif text-xl font-bold text-[#2C2520] shrink-0 w-12 text-center">
                      {sessionsCount} {sessionsCount === 1 ? 'Sess.' : 'Sess.'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-[11px] text-[#5A4E45] font-semibold text-center">
                    <p className="bg-[#F9EFE6] py-1 px-2 rounded-md">2-3 Sessions: 5% off</p>
                    <p className="bg-[#F9EFE6] py-1 px-2 rounded-md">4-5 Sessions: 10% off</p>
                    <p className="bg-[#F9EFE6] py-1 px-2 rounded-md">6+ Sessions: 15% off</p>
                  </div>
                </div>
              </div>

              {/* Right Quote Summary Side */}
              <div className="lg:col-span-5 bg-[#FDF6F0] p-6 sm:p-8 rounded-3xl border border-[#C05621]/15 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C05621]/5 rounded-bl-[100px] pointer-events-none"></div>
                
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] block mb-2">
                  Live Pricing Quote
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2C2520] mb-1">
                  Summary Sheet
                </h4>
                <p className="text-xs text-[#5A4E45] mb-6">Subject to physical skin evaluation</p>

                <div className="border-t border-b border-[#C05621]/10 py-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A4E45] font-medium">Category</span>
                    <span className="text-[#2C2520] font-bold">{activeTx.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A4E45] font-medium">Protocol Selected</span>
                    <span className="text-[#2C2520] font-bold">{activeOpt.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A4E45] font-medium">Sessions Count</span>
                    <span className="text-[#2C2520] font-bold">{sessionsCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A4E45] font-medium">Standard Price ({sessionsCount}x)</span>
                    <span className="text-[#2C2520] font-bold">₹{grossSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-[#C05621]">
                      <span className="font-semibold">Package Discount ({discountPercent}%)</span>
                      <span className="font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A4E45] font-medium">Taxation (18% GST)</span>
                    <span className="text-[#2C2520] font-bold">₹{taxAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-6 mb-8 flex justify-between items-baseline">
                  <span className="text-[#2C2520] font-bold text-base">Estimated Total</span>
                  <span className="font-serif text-3xl font-black text-[#C05621]">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={lockEstimateAndScroll}
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                    quoteLocked 
                      ? 'bg-[#059669] text-white' 
                      : 'bg-[#C05621] text-[#FDF6F0] hover:bg-[#A04518] hover:scale-[1.01]'
                  }`}
                >
                  {quoteLocked ? '✓ Estimate Applied Below' : 'Apply Quote & Book Consultation'}
                </button>
                <p className="text-[10px] text-center text-[#5A4E45] mt-3 flex items-center justify-center gap-1">
                  <Lock size={10} /> Secure pricing valid for 14 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Skin Assessment Questionnaire */}
        <section id="assessment" className="py-20 md:py-28 bg-[#FDF6F0]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#F9EFE6] p-8 sm:p-12 rounded-[2rem] border border-[#C05621]/10 shadow-xl text-center">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] mb-2 block">
                Take the Quiz
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2C2520] mb-4">
                Clinical Skin & Hair Advisor
              </h2>
              <p className="text-sm text-[#5A4E45] max-w-xl mx-auto mb-10">
                Answer 3 simple diagnostic questions to see which dermatological therapy matches your concerns.
              </p>

              {!showQuizResult ? (
                <div>
                  {/* Progress Indicator */}
                  <div className="flex justify-between items-center text-xs font-bold text-[#C05621] uppercase mb-4">
                    <span>Question {currentQuizStep + 1} of {QUIZ_QUESTIONS.length}</span>
                    <span>{Math.round(((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-[#E9D5C5] h-1.5 rounded-full mb-8">
                    <div 
                      className="bg-[#C05621] h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2C2520] mb-8">
                    {QUIZ_QUESTIONS[currentQuizStep].question}
                  </h3>

                  <div className="space-y-3 max-w-lg mx-auto">
                    {QUIZ_QUESTIONS[currentQuizStep].options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleQuizAnswer(opt.value)}
                        className="w-full p-4 rounded-xl border border-[#C05621]/15 bg-[#FDF6F0] hover:bg-[#C05621]/5 hover:border-[#C05621] font-sans text-sm font-semibold text-[#2C2520] text-left transition-all flex items-center justify-between"
                      >
                        {opt.text}
                        <ChevronRight size={16} className="text-[#C05621]" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <div className="bg-[#059669]/10 text-[#059669] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C2520] mb-3">
                    Your Clinical Recommendation
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-bold text-[#C05621] mb-6">
                    Category: {TREATMENT_CATEGORIES[getQuizRecommendation().category].name}
                  </p>
                  
                  <div className="bg-[#FDF6F0] p-6 rounded-2xl border border-[#C05621]/10 text-left max-w-lg mx-auto mb-8 shadow-inner">
                    <p className="text-sm text-[#5A4E45] leading-relaxed">
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
                      className="bg-[#C05621] text-[#FDF6F0] py-3.5 px-6 rounded-full font-bold text-sm shadow-md hover:bg-[#A04518] transition-all"
                    >
                      View Recomm. Prices
                    </button>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="bg-[#F7EBE1] text-[#7C2D12] border border-[#C05621]/10 py-3.5 px-6 rounded-full font-bold text-sm hover:bg-[#E9D5C5] transition-all"
                    >
                      Restart Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 6: Results / Before & After Showcase */}
        <section id="results" className="py-20 md:py-28 bg-[#F9EFE6] border-t border-b border-[#C05621]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] mb-2 block">
                Clinical Case Studies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2520] mb-4">
                Proven Skin & Hair Results
              </h2>
              <p className="text-sm text-[#5A4E45]">
                Real outcomes achieved at our Banjara Hills clinic under the direct supervision of Dr. Ramesh Vishwanath.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Study 1 */}
              <div className="bg-[#FDF6F0] rounded-3xl overflow-hidden shadow-md border border-[#C05621]/10 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                    alt="Acne Scar Revision Case Study"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#C05621] text-[#FDF6F0] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Laser Resurfacing
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-serif text-lg font-bold text-[#2C2520] mb-2">Acne Scar Revision</h3>
                  <p className="text-xs text-[#C05621] font-bold uppercase tracking-wider mb-3">Protocol: Co2 Fractional + Subcision</p>
                  <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                    A 27-year-old male with severe cystic acne scarring. Achieved 75% scar depth reduction after 4 sessions.
                  </p>
                  <div className="flex justify-between border-t border-[#C05621]/5 pt-4 text-xs font-bold text-[#7C2D12]">
                    <span>Standard Period: 4 Months</span>
                    <span>Client Satisfaction: 5/5</span>
                  </div>
                </div>
              </div>

              {/* Study 2 */}
              <div className="bg-[#FDF6F0] rounded-3xl overflow-hidden shadow-md border border-[#C05621]/10 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                    alt="Hair Thinning Case Study"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#C05621] text-[#FDF6F0] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Hair Restoration
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-serif text-lg font-bold text-[#2C2520] mb-2">Follicular Density Restoration</h3>
                  <p className="text-xs text-[#C05621] font-bold uppercase tracking-wider mb-3">Protocol: GFC Therapy + LLLT Laser</p>
                  <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                    A 34-year-old female presenting with female pattern thinning. Regained visible hair density and strand strength.
                  </p>
                  <div className="flex justify-between border-t border-[#C05621]/5 pt-4 text-xs font-bold text-[#7C2D12]">
                    <span>Standard Period: 6 Months</span>
                    <span>Client Satisfaction: 5/5</span>
                  </div>
                </div>
              </div>

              {/* Study 3 */}
              <div className="bg-[#FDF6F0] rounded-3xl overflow-hidden shadow-md border border-[#C05621]/10 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800" 
                    alt="Skin Rejuvenation Case Study"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#C05621] text-[#FDF6F0] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Skin Rejuvenation
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-serif text-lg font-bold text-[#2C2520] mb-2">Melasma & Pigment Clearing</h3>
                  <p className="text-xs text-[#C05621] font-bold uppercase tracking-wider mb-3">Protocol: Meso-Chemical Peeling</p>
                  <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                    A 41-year-old female with persistent epidermal melasma. Achieved significant skin tone evening after 3 sessions.
                  </p>
                  <div className="flex justify-between border-t border-[#C05621]/5 pt-4 text-xs font-bold text-[#7C2D12]">
                    <span>Standard Period: 3 Months</span>
                    <span>Client Satisfaction: 4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Patient Testimonials */}
        <section id="testimonials" className="py-20 md:py-28 bg-[#FDF6F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] mb-2 block">
                Client Reviews
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2520] mb-4">
                What Our Patients Say
              </h2>
              <p className="text-sm text-[#5A4E45]">
                Verified reviews from individuals who have undergone clinical aesthetic procedures at our clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-[#F9EFE6] p-8 rounded-3xl border border-[#C05621]/10 flex flex-col justify-between text-left shadow-sm">
                <div>
                  <div className="flex gap-1 text-[#C05621] mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-serif text-base text-[#2C2520] font-bold mb-3">"Exceptional Laser Results"</p>
                  <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                    "I had severe acne scarring on my cheeks that made me self-conscious. Dr. Ramesh recommended a CO2 laser protocol. The results have been life-changing. My scars are barely noticeable now. Highly recommend!"
                  </p>
                </div>
                <div className="border-t border-[#C05621]/15 pt-4">
                  <p className="text-sm font-bold text-[#2C2520]">Priyanka Reddy</p>
                  <p className="text-xs text-[#5A4E45]/85">Hyderabad (Verified Patient)</p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-[#F9EFE6] p-8 rounded-3xl border border-[#C05621]/10 flex flex-col justify-between text-left shadow-sm">
                <div>
                  <div className="flex gap-1 text-[#C05621] mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-serif text-base text-[#2C2520] font-bold mb-3">"Professional Trichology Center"</p>
                  <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                    "After experiencing massive hair loss due to stress, I consulted Dr. Ramesh Vishwanath. The GFC treatment sessions combined with laser regrowth stimulation have helped restore my density. Excellent clinic layout and hygiene."
                  </p>
                </div>
                <div className="border-t border-[#C05621]/15 pt-4">
                  <p className="text-sm font-bold text-[#2C2520]">Anirudh K.</p>
                  <p className="text-xs text-[#5A4E45]/85">Banjara Hills (Verified Patient)</p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-[#F9EFE6] p-8 rounded-3xl border border-[#C05621]/10 flex flex-col justify-between text-left shadow-sm">
                <div>
                  <div className="flex gap-1 text-[#C05621] mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-serif text-base text-[#2C2520] font-bold mb-3">"Honest, Ethical Treatments"</p>
                  <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                    "Unlike other clinics that push unnecessary packages, Dr. Ramesh is extremely honest and direct. He suggested only three sessions of chemical peel combo for my pigmentation. My skin is radiant and healthy."
                  </p>
                </div>
                <div className="border-t border-[#C05621]/15 pt-4">
                  <p className="text-sm font-bold text-[#2C2520]">Shalini Rao</p>
                  <p className="text-xs text-[#5A4E45]/85">Secunderabad (Verified Patient)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Appointment Booking / Enquiry Form */}
        <section id="booking-form-section" className="py-20 md:py-28 bg-[#F9EFE6] border-t border-[#C05621]/15 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[#FDF6F0] p-8 sm:p-12 rounded-[2.5rem] border border-[#C05621]/20 shadow-2xl relative">
              {/* Form header */}
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#C05621] mb-2 block">
                  Secure Booking Gateway
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#2C2520] mb-2">
                  Request Appointment
                </h2>
                <p className="text-xs text-[#5A4E45]">
                  Please enter your details below. Our desk will call you within 2 hours to confirm your slot.
                </p>
              </div>

              {!bookingConfirmation ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6 text-left">
                  {/* Name field */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                      Child or Adult Full Name <span className="text-[#C05621]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#C05621]/60 pointer-events-none">
                        <User size={16} />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all ${
                          formErrors.name ? 'border-[#C05621] ring-1 ring-[#C05621]' : 'border-[#C05621]/20'
                        }`}
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-[11px] text-[#C05621] mt-1 font-semibold flex items-center gap-1">
                        <AlertCircle size={12} /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone field */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                        Mobile Number <span className="text-[#C05621]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#C05621]/60 pointer-events-none">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all ${
                            formErrors.phone ? 'border-[#C05621] ring-1 ring-[#C05621]' : 'border-[#C05621]/20'
                          }`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-[11px] text-[#C05621] mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                        Email Address <span className="text-[#C05621]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#C05621]/60 pointer-events-none">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all ${
                            formErrors.email ? 'border-[#C05621] ring-1 ring-[#C05621]' : 'border-[#C05621]/20'
                          }`}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-[11px] text-[#C05621] mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                        Preferred Date <span className="text-[#C05621]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#C05621]/60 pointer-events-none">
                          <Calendar size={16} />
                        </span>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all ${
                            formErrors.date ? 'border-[#C05621] ring-1 ring-[#C05621]' : 'border-[#C05621]/20'
                          }`}
                        />
                      </div>
                      {formErrors.date && (
                        <p className="text-[11px] text-[#C05621] mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> {formErrors.date}
                        </p>
                      )}
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={form.timeSlot}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#C05621]/20 bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all"
                      >
                        <option value="morning">Morning (9:30 AM - 12:30 PM)</option>
                        <option value="afternoon">Afternoon (1:30 PM - 4:30 PM)</option>
                        <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Treatment Selection */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                        Treatment Interest
                      </label>
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#C05621]/20 bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all"
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
                      <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2">
                        Preferred Doctor
                      </label>
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#C05621]/20 bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all"
                        disabled
                      >
                        <option value="Dr. Ramesh Vishwanath">Dr. Ramesh Vishwanath (Dermatologist)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Live Quote Info */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] block mb-2 flex items-center justify-between">
                      <span>Clinical Notes / Inquiries</span>
                      {quoteLocked && <span className="text-[#059669] text-[10px] font-bold">Live Estimate Attached</span>}
                    </label>
                    <textarea
                      name="notes"
                      rows="3"
                      value={form.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us about your skin history, allergies, or questions."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#C05621]/20 bg-[#FDF6F0] text-sm text-[#2C2520] focus:ring-1 focus:ring-[#C05621] focus:border-[#C05621] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy note */}
                  <div className="flex gap-2.5 items-start text-[11px] text-[#5A4E45] leading-relaxed bg-[#F9EFE6] p-4 rounded-xl border border-[#C05621]/5">
                    <ShieldCheck className="text-[#C05621] shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Privacy Agreement:</strong> By clicking request, you agree to share your contact details. Your health record is stored strictly confidentially in accordance with HIPAA standards.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C05621] text-[#FDF6F0] rounded-full font-bold text-center hover:bg-[#A04518] hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Verifying details...
                      </>
                    ) : (
                      'Request Doctor Appointment'
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-fadeIn py-8 text-center">
                  <div className="bg-[#059669]/10 text-[#059669] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#2C2520] mb-2">
                    Appointment Request Logged
                  </h3>
                  <p className="text-sm text-[#059669] font-bold tracking-wide uppercase mb-6">
                    Booking ID: {bookingConfirmation.id}
                  </p>

                  <div className="bg-[#F9EFE6] p-6 rounded-2xl border border-[#C05621]/15 text-left max-w-md mx-auto mb-8 space-y-3 font-sans text-sm text-[#5A4E45]">
                    <div className="flex justify-between border-b border-[#C05621]/5 pb-2">
                      <span className="font-semibold">Patient Name:</span>
                      <span className="text-[#2C2520] font-bold">{bookingConfirmation.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#C05621]/5 pb-2">
                      <span className="font-semibold">Preferred Doctor:</span>
                      <span className="text-[#2C2520] font-bold">{bookingConfirmation.doctor}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#C05621]/5 pb-2">
                      <span className="font-semibold">Treatment Interest:</span>
                      <span className="text-[#2C2520] font-bold">{bookingConfirmation.treatment}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#C05621]/5 pb-2">
                      <span className="font-semibold">Date & Slot:</span>
                      <span className="text-[#2C2520] font-bold">{bookingConfirmation.date} ({bookingConfirmation.timeSlot})</span>
                    </div>
                    {bookingConfirmation.notes && (
                      <div className="pt-2 text-xs">
                        <p className="font-semibold mb-1">Attached Notes:</p>
                        <pre className="whitespace-pre-wrap font-sans text-[#2C2520] bg-white/70 p-3 rounded-lg border border-[#C05621]/10 text-[11px]">
                          {bookingConfirmation.notes}
                        </pre>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-[#5A4E45] max-w-sm mx-auto mb-8 leading-relaxed">
                    A clinical executive will call you at <strong className="text-[#2C2520]">{bookingConfirmation.phone}</strong> within 2 hours to confirm your slot time and prepare your clinical file.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetConfirmation}
                    className="bg-[#C05621] text-[#FDF6F0] py-3.5 px-8 rounded-full font-bold text-sm shadow-md hover:bg-[#A04518] transition-all"
                  >
                    Request Another Slot
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 9: Clinic Location & Hours Footer */}
        <footer className="bg-[#2C2520] text-[#FDF6F0] pt-16 pb-12 border-t border-[#C05621]/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Column 1: Contact Details */}
              <div className="text-left">
                <span className="font-serif font-black text-2xl tracking-wider text-[#C05621] block mb-6">
                  DERMATIQUE
                </span>
                <p className="text-sm text-[#FDF6F0]/80 leading-relaxed mb-6">
                  A high-end cosmetic and clinical dermatology practice based in MLA Colony, Banjara Hills. Directed by Dr. Ramesh Vishwanath.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#C05621] shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-[#FDF6F0]/80 leading-relaxed">
                      #283, MLA Colony, Road No. 12, Above Subway Cafe, Beside Omega Hospital, Banjara Hills, Hyderabad - 500028
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#C05621] shrink-0" size={18} />
                    <a href="tel:+918500302333" className="text-sm text-[#FDF6F0]/90 font-bold hover:text-[#C05621] transition-colors">
                      +91 8500302333
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#C05621] shrink-0" size={18} />
                    <a href="mailto:info@rameshdermatique.com" className="text-sm text-[#FDF6F0]/80 hover:text-[#C05621] transition-colors">
                      info@rameshdermatique.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Hours & Quick Info */}
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-[#C05621] mb-6">
                  Clinic Hours
                </h4>
                <div className="space-y-3 font-sans text-sm text-[#FDF6F0]/80">
                  <div className="flex justify-between border-b border-[#FDF6F0]/10 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-[#FDF6F0]">9:30 AM - 7:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FDF6F0]/10 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold text-[#FDF6F0]">9:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FDF6F0]/10 pb-2">
                    <span>Sunday</span>
                    <span className="font-bold text-[#C05621] uppercase text-xs">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-[#FDF6F0]/5 border border-[#C05621]/20">
                  <p className="text-xs text-[#FDF6F0]/70 flex items-center gap-2">
                    <Info size={14} className="text-[#C05621]" /> Appointments are mandatory. Please request online or call ahead to book.
                  </p>
                </div>
              </div>

              {/* Column 3: Maps Placeholder */}
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-[#C05621] mb-6">
                  Clinic Location
                </h4>
                <div className="w-full aspect-video rounded-xl bg-[#FDF6F0]/5 border border-[#C05621]/20 overflow-hidden relative flex items-center justify-center p-4">
                  {/* Mock map UI */}
                  <div className="absolute inset-0 bg-[#FDF6F0]/5 opacity-60"></div>
                  <div className="relative text-center z-10">
                    <MapPin className="text-[#C05621] mx-auto mb-2" size={32} />
                    <p className="text-xs font-bold text-[#FDF6F0]">MLA Colony, Road No. 12</p>
                    <p className="text-[10px] text-[#FDF6F0]/65 mt-0.5">Beside Omega Hospital, Banjara Hills</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[11px] bg-[#C05621] text-[#FDF6F0] py-1.5 px-4 rounded-full font-bold hover:bg-[#A04518] transition-colors"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#FDF6F0]/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#FDF6F0]/50">
              <p>© 2026 Dr. Ramesh's Dermatique. All rights reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#booking-form-section" className="hover:underline">Privacy Policy</a>
                <a href="#booking-form-section" className="hover:underline">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

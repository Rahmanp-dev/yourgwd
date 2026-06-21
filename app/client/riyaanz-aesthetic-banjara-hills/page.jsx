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
  Activity,
  Heart,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Gem,
  Smile,
  ShieldAlert
} from 'lucide-react';

// Clinic Details
const CLINIC_NAME = "Riyaanz Aesthetic";
const DR_NAME = "Dr. Namitha";
const DR_TITLE = "Lead Cosmetologist & Aesthetic Practitioner";
const DR_QUALIFICATIONS = "BAMS, PGD (Medical Cosmetology)";
const CLINIC_PHONE = "+91 9989174576";
const CLINIC_EMAIL = "info@riyaanzaesthetic.com";
const CLINIC_ADDRESS = "Flat No. 102, 8-2-686/C/6/5, Road Number 12, Banjara Hills, Hyderabad, Telangana 500034";

// Treatments Data
const TREATMENT_CATEGORIES = [
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    tagline: 'Permanent reduction with advanced cooling lasers',
    description: 'Our high-speed laser hair reduction utilizes selective photothermolysis to disable active hair follicles. Built-in contact cooling systems ensure a safe, virtually painless experience for all Indian skin types.',
    sessions: '6 - 8 Sessions',
    priceRange: '₹2,500 - ₹9,500 per session',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Eliminates ingrown hairs and razor bumps permanently',
      'Advanced triple-wavelength technology targeting deep follicles',
      'Integrated sapphire chill-tip prevents thermal skin damage',
      'Smoother, brighter skin texture in treated areas'
    ]
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss Treatment',
    tagline: 'Non-invasive body contouring & fat reduction',
    description: 'Dermatologically supervised body sculpting using targeted ultrasound cavitation, cryo-lipocare, and vacuum drainage systems to break stubborn fat cells and speed up lymphatic elimination.',
    sessions: '8 - 12 Sessions',
    priceRange: '₹4,000 - ₹15,000 per program',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Reduces targeted inches around abdomen, thighs, and arms',
      'Non-surgical fat cell destruction with zero downtime',
      'Helps metabolize visceral fat under clinical monitoring',
      'Improves metabolic rate with custom dietary guidelines'
    ]
  },
  {
    id: 'skin-tightening',
    name: 'Skin Tightening',
    tagline: 'Frosted radiofrequency collagen restoration',
    description: 'Precision thermal energy delivered into deep structural dermis layers. The thermal response triggers dynamic collagen synthesis, giving an instant lifting effect and gradual tightening of lax areas.',
    sessions: '3 - 5 Sessions',
    priceRange: '₹6,000 - ₹18,000 per session',
    image: 'https://images.unsplash.com/photo-1614859324967-bdf461fcf7ec?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Lifts sagging cheeks and firms the submental jaw region',
      'Reduces appearance of deep nasolabial folds and fine lines',
      'Stimulates long-term natural collagen production',
      'Safe, non-invasive alternative to surgical lifting'
    ]
  }
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'goal',
    question: 'What is your primary aesthetic goal?',
    options: [
      { label: 'Get rid of unwanted hair permanently for smooth skin', value: 'laser-hair-removal' },
      { label: 'Reduce stubborn fat pockets, cellulite, or lose inches', value: 'weight-loss' },
      { label: 'Lift sagging contours and tighten loose facial skin', value: 'skin-tightening' }
    ]
  },
  {
    id: 'timeline',
    question: 'What is your preferred timeline for results?',
    options: [
      { label: 'Gradual, long-lasting reduction over 6-8 months', value: 'laser-hair-removal' },
      { label: 'Accelerated program with active lifestyle inputs', value: 'weight-loss' },
      { label: 'Visible tightening and firming within 2-3 sessions', value: 'skin-tightening' }
    ]
  },
  {
    id: 'downtime',
    question: 'How much clinical downtime can you accommodate?',
    options: [
      { label: 'Absolutely zero downtime - require instant return to routine', value: 'laser-hair-removal' },
      { label: 'Comfortable with post-treatment metabolic sessions', value: 'weight-loss' },
      { label: 'Prefer warm thermal sessions with minimal redness', value: 'skin-tightening' }
    ]
  }
];

// Testimonials Data
const TESTIMONIALS = [
  {
    name: 'Sneha Reddy',
    role: 'Fashion Designer',
    rating: 5,
    feedback: 'Riyaanz Aesthetic is my absolute favorite. The lavender theme is so relaxing, and Dr. Namitha is highly experienced. The laser hair removal results are phenomenal and completely painless.',
    date: '3 weeks ago'
  },
  {
    name: 'Karan Malhotra',
    role: 'Fitness Enthusiast',
    rating: 5,
    feedback: 'I signed up for their custom non-invasive weight loss program. Lost 3 inches off my waistline in just 8 sessions. The cavitation and vacuum drainage therapy is top class.',
    date: '2 months ago'
  },
  {
    name: 'Meera Deshmukh',
    role: 'Corporate HR',
    rating: 5,
    feedback: 'Highly recommend their RF skin tightening sessions. The glassmorphism card layouts at their clinic are reflective of their clean, modern, and tech-driven approach. Truly a premium experience!',
    date: '1 month ago'
  }
];

// Case Studies
const CASE_STUDIES = [
  {
    title: 'Precision Face Contouring',
    type: 'Skin Tightening',
    duration: '3 Sessions',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    details: 'Achieved a sharper jawline and significant reduction in loose submental chin fat.'
  },
  {
    title: 'Stubborn Abdominal Contouring',
    type: 'Weight Loss Program',
    duration: '8 Sessions',
    beforeImage: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1522337094133-f6750a029f90?auto=format&fit=crop&q=80&w=800',
    details: 'Inches reduced around the midsection with combined cavitation and fat-loss guidance.'
  }
];

export default function RiyaanzAestheticPage() {
  // Tabs Selector State
  const [activeTab, setActiveTab] = useState('laser-hair-removal');

  // Skin Assessment Questionnaire State
  const [quizIdx, setQuizIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'laser-hair-removal',
    doctor: 'Dr. Namitha',
    agreed: false
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  // Handle quiz choices
  const selectChoice = (value) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[quizIdx].id]: value };
    setAnswers(newAnswers);

    if (quizIdx < QUIZ_QUESTIONS.length - 1) {
      setQuizIdx(quizIdx + 1);
    } else {
      const primaryGoal = newAnswers['goal'];
      const matched = TREATMENT_CATEGORIES.find(c => c.id === primaryGoal) || TREATMENT_CATEGORIES[0];
      setRecommendation(matched);
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizIdx(0);
    setAnswers({});
    setQuizFinished(false);
    setRecommendation(null);
  };

  // Form input validation
  const validateField = (name, value) => {
    let err = '';
    if (name === 'name') {
      if (!value.trim()) {
        err = 'Full name is required';
      } else if (value.trim().length < 3) {
        err = 'Name must be at least 3 characters';
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        err = 'Phone number is required';
      } else if (!/^[6-9]\d{9}$/.test(value.replace(/[\s-+]/g, ''))) {
        err = 'Enter a valid 10-digit mobile number';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        err = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        err = 'Enter a valid email address';
      }
    } else if (name === 'date') {
      if (!value) {
        err = 'Date is required';
      } else {
        const today = new Date();
        today.setHours(0,0,0,0);
        const selDate = new Date(value);
        if (selDate < today) {
          err = 'Date cannot be in the past';
        }
      }
    }
    return err;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setForm(prev => ({ ...prev, [name]: val }));

    if (type !== 'checkbox') {
      const err = validateField(name, val);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach(key => {
      if (key !== 'agreed' && key !== 'doctor') {
        const err = validateField(key, form[key]);
        if (err) newErrors[key] = err;
      }
    });

    if (!form.agreed) {
      newErrors.agreed = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setBookingCode(`RY-${Math.floor(100000 + Math.random() * 900000)}`);
      }, 1200);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#FAF5FF] via-[#FDFBFF] to-[#FAF8FF] min-h-screen text-slate-800 antialiased">
      {/* Sticky Header Nav */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-violet-100 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-violet-400 flex items-center justify-center text-white shadow-md shadow-violet-200">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight block leading-none">{CLINIC_NAME}</span>
              <span className="text-[10px] text-violet-500 font-bold tracking-widest uppercase">Aesthetic Excellence</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-600 text-sm">
            <a href="#about-doctor" className="hover:text-violet-500 transition-colors">Philosophy</a>
            <a href="#treatments-selector" className="hover:text-violet-500 transition-colors">Aesthetic Selector</a>
            <a href="#assessment-quiz" className="hover:text-violet-500 transition-colors">Skin Assessment</a>
            <a href="#before-after" className="hover:text-violet-500 transition-colors">Case Studies</a>
            <a href="#patient-reviews" className="hover:text-violet-500 transition-colors">Reviews</a>
          </div>
          <div>
            <button
              onClick={scrollToForm}
              className="bg-violet-400 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-violet-150 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book consultation</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-violet-100/60 border border-violet-200 px-4 py-1.5 rounded-full text-violet-800 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-violet-500" />
                <span>Banjara Hills Cosmetology Care</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Unveil Your True <br />
                <span className="text-violet-500 bg-clip-text">Radiance</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 max-w-xl font-normal leading-relaxed">
                Experience luxury, non-surgical body contouring, hair removal, and skin rejuvenation under {DR_NAME}. Discover tailored programs designed for lasting results.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={scrollToForm}
                  className="bg-violet-400 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-violet-200 hover:shadow-violet-300 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-base"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#treatments-selector"
                  className="bg-white/70 backdrop-blur-md hover:bg-white text-slate-800 font-bold px-8 py-4 rounded-2xl border border-white/60 shadow-sm transition-all flex items-center justify-center space-x-2 text-base"
                >
                  <span>View Services</span>
                </a>
              </div>
            </div>
            {/* Right Visual (Frosted Layout) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-violet-300 rounded-3xl rotate-6 opacity-20 filter blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/70 p-2 bg-white/40 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Riyaanz Aesthetic Lounge"
                  className="w-full h-[430px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-8 bg-white/40 backdrop-blur-sm border-y border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/60 border border-white/80 rounded-2xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-500">10+ Years</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Clinical Care</div>
            </div>
            <div className="p-4 bg-white/60 border border-white/80 rounded-2xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-500">8.5k+</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Happy Clients</div>
            </div>
            <div className="p-4 bg-white/60 border border-white/80 rounded-2xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-500">98%</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Proven Efficacy</div>
            </div>
            <div className="p-4 bg-white/60 border border-white/80 rounded-2xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-500">FDA Standard</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Laser Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder / Head Doctor Bio */}
      <section id="about-doctor" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Image */}
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white/50 border border-white/60 backdrop-blur-md rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800"
                  alt={DR_NAME}
                  className="w-full h-[450px] object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Bio Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-violet-50 border border-violet-100 px-3.5 py-1 rounded-full text-violet-700 text-xs font-semibold">
                <Award className="w-4 h-4" />
                <span>Expert Medical Cosmetologist</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Natural Beauty: <span className="text-violet-500">{DR_NAME}</span>
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                {DR_QUALIFICATIONS}
              </p>
              <div className="h-[2.5px] w-16 bg-violet-400 rounded"></div>
              <p className="text-base text-slate-500 leading-relaxed font-normal">
                Dr. Namitha is a leading cosmetology specialist in Hyderabad with more than a decade of experience in medical-grade aesthetics, laser skin reductions, and non-surgical slimming therapies. Her approach balances safety profiles with artistic contouring.
              </p>
              <div className="bg-white/70 border border-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm space-y-3">
                <p className="italic text-slate-600 text-base font-normal">
                  "At Riyaanz, we believe cosmetic therapy should work in harmony with your natural features. We utilize targeted laser and thermal systems to bring out your structural best."
                </p>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">— {DR_NAME}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments & Services Selector */}
      <section id="treatments-selector" className="py-20 bg-white/30 backdrop-blur-sm border-t border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aesthetic <span className="text-violet-500">Treatments Suite</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              Browse our key cosmetic therapies. Use the tabs below to check schedules, clinical benefits, and custom prices.
            </p>
          </div>

          <div className="mt-12">
            {/* Tabs */}
            <div className="flex justify-center border-b border-violet-100/50">
              <div className="inline-flex p-1 bg-white/70 backdrop-blur-sm border border-white/85 rounded-2xl space-x-1 shadow-sm">
                {TREATMENT_CATEGORIES.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                      activeTab === category.id
                        ? 'bg-violet-400 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Panel */}
            <div className="mt-10 bg-white/80 border border-white/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-lg shadow-violet-100/40">
              {TREATMENT_CATEGORIES.filter(c => c.id === activeTab).map(category => (
                <div key={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div>
                      <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Featured Service</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{category.name}</h3>
                      <p className="text-violet-500 font-semibold text-xs mt-1 capitalize">{category.tagline}</p>
                    </div>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                      {category.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-y border-violet-100/60 py-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Treatment Frequency</span>
                        <span className="font-extrabold text-slate-800 text-sm sm:text-base">{category.sessions}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Aesthetic Price Range</span>
                        <span className="font-extrabold text-violet-500 text-sm sm:text-base">{category.priceRange}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 block">Clinic Benefits:</span>
                      {category.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                          <span className="text-slate-600 text-sm font-normal">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setForm(prev => ({ ...prev, treatment: category.id }));
                          scrollToForm();
                        }}
                        className="bg-violet-400 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm inline-flex items-center space-x-2"
                      >
                        <span>Request Custom Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60 aspect-video relative p-1.5 bg-white/40">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire */}
      <section id="assessment-quiz" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl shadow-violet-100/50 text-center space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center p-3 bg-violet-50 border border-violet-100 rounded-2xl text-violet-500 shadow-inner">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Interactive Assessment</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm font-normal">
                Answer these 3 lifestyle questions to find the most suitable aesthetic treatment for your concerns.
              </p>
            </div>

            {/* Quiz Progress */}
            {!quizFinished && (
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-violet-400 h-full transition-all duration-300"
                  style={{ width: `${((quizIdx) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            )}

            {/* Quiz Body */}
            {!quizFinished ? (
              <div className="space-y-6">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Question {quizIdx + 1} of {QUIZ_QUESTIONS.length}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{QUIZ_QUESTIONS[quizIdx].question}</h3>
                <div className="grid grid-cols-1 gap-3 max-w-lg mx-auto">
                  {QUIZ_QUESTIONS[quizIdx].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => selectChoice(opt.value)}
                      className="w-full text-left px-5 py-4 rounded-xl border border-slate-200 hover:border-violet-300 hover:bg-violet-50/30 transition-all font-semibold text-slate-700 text-sm hover:text-violet-900 flex justify-between items-center group"
                    >
                      <span>{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-w-xl mx-auto p-6 bg-violet-50/50 border border-violet-100/50 rounded-2xl">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-violet-500 uppercase tracking-widest block">Recommended Therapy</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{recommendation?.name}</h3>
                  <p className="text-slate-500 text-xs font-normal">{recommendation?.tagline}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Based on your goals and preferences, Riyaanz Aesthetic recommends the {recommendation?.name}. Dr. Namitha will customize a complete program during your private consult.
                </p>
                <div className="flex justify-center space-x-4 pt-2">
                  <button
                    onClick={resetQuiz}
                    className="px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 text-sm font-bold transition-all"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => {
                      if (recommendation) {
                        setForm(prev => ({ ...prev, treatment: recommendation.id }));
                      }
                      scrollToForm();
                    }}
                    className="px-5 py-3 rounded-xl bg-violet-400 hover:bg-violet-500 text-white text-sm font-bold shadow-md shadow-violet-150 transition-all flex items-center space-x-2"
                  >
                    <span>Proceed to Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Results / Before & After Showcase */}
      <section id="before-after" className="py-20 bg-white/45 border-t border-violet-150/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aesthetic <span className="text-violet-500">Case Studies</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              Visual transformation metrics showing outcomes after full session compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {CASE_STUDIES.map((study, index) => (
              <div key={index} className="bg-white/80 border border-white/90 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-violet-500 uppercase tracking-widest">{study.type}</span>
                    <span className="text-[10px] bg-violet-50 text-violet-600 px-3 py-1 rounded-full font-bold">{study.duration}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{study.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block text-center">Initial State</span>
                      <div className="rounded-xl overflow-hidden aspect-square border border-slate-100">
                        <img src={study.beforeImage} alt="Initial State" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-violet-400 font-bold block text-center">Outcome</span>
                      <div className="rounded-xl overflow-hidden aspect-square border border-violet-100">
                        <img src={study.afterImage} alt="Outcome" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
                    {study.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section id="patient-reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aesthetic <span className="text-violet-500">Feedback</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              Read authentic feedback from our esteemed clients in Banjara Hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="bg-white/80 border border-white/90 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    "{test.feedback}"
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{test.name}</h4>
                    <span className="text-xs text-slate-400 mt-1 block">{test.role}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{test.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Appointment Booking / Enquiry Form */}
      <section id="enquiry-booking-form" className="py-20 bg-white/20 backdrop-blur-sm border-t border-violet-100/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-white/95 p-8 sm:p-12 rounded-3xl shadow-xl shadow-violet-100/30">
            {!submitted ? (
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Schedule Consultation</h2>
                  <p className="text-slate-500 text-sm font-normal">
                    Please submit your contact info below. Our team will verify date options and contact you to lock the session.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Patient Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Adult or child name"
                          className={`w-full bg-white border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-violet-400 focus:ring-violet-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile"
                          className={`w-full bg-white border ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-violet-400 focus:ring-violet-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="name@domain.com"
                          className={`w-full bg-white border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-violet-400 focus:ring-violet-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                          className={`w-full bg-white border ${errors.date ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-violet-400 focus:ring-violet-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {errors.date && <p className="text-xs text-red-500 font-medium">{errors.date}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Treatment Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Treatment Interest</label>
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-violet-400 focus:ring focus:ring-violet-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      >
                        <option value="laser-hair-removal">Laser Hair Removal</option>
                        <option value="weight-loss">Weight Loss Treatment</option>
                        <option value="skin-tightening">Skin Tightening</option>
                      </select>
                    </div>

                    {/* Preferred Doctor */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Preferred Practitioner</label>
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-violet-400 focus:ring focus:ring-violet-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      >
                        <option value="Dr. Namitha">Dr. Namitha (Lead Cosmetologist)</option>
                        <option value="Associate Therapist">First Available Associate Cosmetologist</option>
                      </select>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="space-y-1.5 pt-2">
                    <label className="flex items-start space-x-3 text-xs text-slate-500 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={form.agreed}
                        onChange={handleInputChange}
                        className="mt-0.5 rounded border-slate-300 text-violet-500 focus:ring-violet-400 w-4 h-4"
                      />
                      <span>I agree to receive communications regarding my aesthetic request. Riyaanz Aesthetic is committed to protecting user privacy.</span>
                    </label>
                    {errors.agreed && <p className="text-xs text-red-500 font-medium">{errors.agreed}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-violet-400 hover:bg-violet-500 disabled:bg-violet-300 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
                  >
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Confirm Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              // Confirmation Card
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-500 mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Enquiry Submitted!</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-800">{form.name}</span>. Your consultation request has been successfully registered.
                  </p>
                </div>

                <div className="bg-white p-6 border border-violet-100 rounded-2xl max-w-sm mx-auto shadow-sm space-y-4">
                  <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-3">
                    <span className="text-slate-400 font-bold uppercase">Booking Reference</span>
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-xs">{bookingCode}</span>
                  </div>
                  <div className="space-y-2 text-left text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Practitioner:</span>
                      <span className="font-bold text-slate-800">{form.doctor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Date:</span>
                      <span className="font-bold text-slate-800">{form.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Treatment:</span>
                      <span className="font-bold text-slate-800 capitalize">{form.treatment.replace(/-/g, ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact Phone:</span>
                      <span className="font-bold text-slate-800">{form.phone}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  A cosmetology consultant will reach out via mobile to verify your time slot details.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      phone: '',
                      email: '',
                      date: '',
                      treatment: 'laser-hair-removal',
                      doctor: 'Dr. Namitha',
                      agreed: false
                    });
                  }}
                  className="text-violet-500 font-bold text-xs hover:text-violet-600 hover:underline"
                >
                  Schedule Another Consultation
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Clinic Location & Hours Footer */}
      <footer className="bg-white/60 border-t border-violet-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Brand */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-violet-400 flex items-center justify-center text-white">
                  <Gem className="w-5 h-5" />
                </div>
                <span className="font-bold text-base text-slate-900 tracking-tight">{CLINIC_NAME}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Dedicated to providing premium cosmetology procedures, weight loss programs, and laser treatments utilizing safety-first clinical devices.
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="font-normal">{CLINIC_ADDRESS}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="font-semibold">{CLINIC_PHONE}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="font-normal">{CLINIC_EMAIL}</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Clinic Hours</h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="font-normal">Monday – Saturday</span>
                  <span className="font-bold text-slate-800">10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="font-normal">Sunday</span>
                  <span className="font-bold text-violet-500">By Appointment</span>
                </div>
                <div className="pt-2 text-xs text-slate-400 font-normal">
                  Pre-booking is highly recommended to secure consultation times.
                </div>
              </div>
            </div>

            {/* Maps / Visual Placeholder */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Location Map</h4>
              <div className="bg-slate-200/40 rounded-2xl h-44 border border-slate-100 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(#d8ccfa_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-30"></div>
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-500 relative z-10 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 relative z-10 mt-2 block">Road Number 12, Banjara Hills</span>
                <span className="text-[10px] text-slate-400 relative z-10 block">Near Flat No. 102</span>
                <a
                  href={`https://maps.google.com/?q=8-2-686/C/6/5,+Road+Number+12,+Banjara+Hills,+Hyderabad`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 relative z-10 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-[10px] shadow-sm transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-violet-100/50 text-center text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} {CLINIC_NAME}. All Rights Reserved. Patient confidentiality maintained.
          </div>
        </div>
      </footer>
    </div>
  );
}

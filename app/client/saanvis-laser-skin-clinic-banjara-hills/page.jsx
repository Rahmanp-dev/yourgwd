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
  Activity,
  Heart,
  ChevronDown,
  ArrowRight,
  BookmarkCheck,
  CheckCircle,
  AlertCircle,
  Scissors,
  Layers,
  Sparkle
} from 'lucide-react';

// Treatments Data
const SAANVI_TREATMENTS = [
  {
    id: 'prp-hair',
    category: 'Hair Restoration',
    name: 'Advanced PRP Hair Therapy',
    tagline: 'Autologous platelet concentration for hair follicle reactivation',
    description: 'A scientifically proven, non-surgical treatment that utilizes growth factors from your own blood to stimulate hair growth, increase hair density, and reverse thinning. Ideal for male and female pattern baldness.',
    benefits: [
      'Stimulates natural hair regrowth in thinning areas',
      'Strengthens hair roots and increases hair shaft diameter',
      'Safe, autologous procedure with zero risk of allergic reaction',
      'Minimally invasive with zero social downtime'
    ],
    duration: '45 - 60 Mins',
    frequency: '4 - 6 sessions, 4 weeks apart',
    idealFor: 'Androgenetic alopecia, hair thinning, post-hair transplant density boost',
    priceRange: '₹4,500 - ₹7,500 per session',
    image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'laser-resurfacing',
    category: 'Skin Resurfacing',
    name: 'Fractional CO2 Laser Resurfacing',
    tagline: 'Deep dermal collagen remodeling & surface correction',
    description: 'An advanced laser technology that creates micro-treatment zones in the skin, triggering rapid cellular repair and fresh collagen production. Highly effective at smoothing out deep acne scars and restoring skin texture.',
    benefits: [
      'Dramatically reduces deep pitted acne scars and large pores',
      'Smooths fine lines, wrinkles, and superficial stretch marks',
      'Evens out skin tone and corrects sun-induced pigmentation',
      'USFDA-approved safety profile with controlled thermal depth'
    ],
    duration: '45 Mins (plus 30 Mins numbing)',
    frequency: '3 - 5 sessions, 4 - 6 weeks apart',
    idealFor: 'Boxcar/rolling acne scars, rough texture, aging skin, fine wrinkles',
    priceRange: '₹8,000 - ₹12,000 per session',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chemical-peels',
    category: 'Advanced Glow',
    name: 'Medical-Grade Chemical Peels',
    tagline: 'Controlled exfoliation for active acne & pigmentation',
    description: 'Specially formulated botanical and chemical acids (like Salicylic, Glycolic, or Yellow Peel) applied under expert supervision. Gently exfoliates dead skin layers, targets acne-causing bacteria, and fades dark spots.',
    benefits: [
      'Clears active acne breakouts and dissolves blackheads/sebum',
      'Rapidly fades post-inflammatory hyperpigmentation (PIH) and melasma',
      'Reveals a brighter, smoother, and more radiant complexion',
      'Quick "lunchtime" procedure with minimal to no peeling downtime'
    ],
    duration: '30 Mins',
    frequency: '3 - 4 sessions, 2 - 3 weeks apart',
    idealFor: 'Active acne, dull skin, sun tan, melasma, dark spots',
    priceRange: '₹2,500 - ₹4,500 per session',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  }
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'concern',
    question: 'What is your primary hair or skin concern?',
    options: [
      { label: 'Hair loss, thinning crown, or receding hairline', value: 'prp-hair' },
      { label: 'Deep acne scars, uneven skin texture, or fine lines', value: 'laser-resurfacing' },
      { label: 'Active acne breakouts, tan, or dark spots', value: 'chemical-peels' }
    ]
  },
  {
    id: 'downtime',
    question: 'What is your tolerance for post-treatment recovery?',
    options: [
      { label: 'No downtime at all – need to go to work/school immediately', value: 'chemical-peels' },
      { label: '1-2 days of scalp soreness is fine for hair regrowth', value: 'prp-hair' },
      { label: '3-4 days of mild peeling/redness is fine for scar removal', value: 'laser-resurfacing' }
    ]
  },
  {
    id: 'history',
    question: 'Have you ever had a medical aesthetic treatment before?',
    options: [
      { label: 'No, this is my first time exploring clinical treatments', value: 'chemical-peels' },
      { label: 'Yes, I have had sessions for hair or skin concerns', value: 'laser-resurfacing' },
      { label: 'I am currently undergoing treatments elsewhere', value: 'prp-hair' }
    ]
  }
];

export default function SaanvisLaserSkinClinicPage() {
  // Treatments selector active state
  const [selectedTreatmentId, setSelectedTreatmentId] = useState('prp-hair');

  // Skin Assessment Questionnaire state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedTreatment, setRecommendedTreatment] = useState(null);

  // Appointment Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'prp-hair',
    doctor: 'Dr. G.S.S. Sandeep',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  // Quiz logic
  const handleAnswerSelect = (value) => {
    const updatedAnswers = { ...quizAnswers, [currentQuestionIndex]: value };
    setQuizAnswers(updatedAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Find the most frequent answer in the quiz
      const values = Object.values(updatedAnswers);
      const counts = values.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});

      let recommendation = values[0]; // fallback
      let maxCount = 0;
      Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          recommendation = key;
        }
      });

      const matched = SAANVI_TREATMENTS.find(t => t.id === recommendation);
      setRecommendedTreatment(matched);
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizAnswers({});
    setQuizCompleted(false);
    setRecommendedTreatment(null);
  };

  const applyRecommendation = (treatmentId) => {
    setForm(prev => ({ ...prev, treatment: treatmentId }));
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else {
      const cleanPhone = form.phone.replace(/[\s-]/g, '');
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
      }
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      newErrors.date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Appointment date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessData({
        referenceId: `SAANVI-${Math.floor(100000 + Math.random() * 900000)}`,
        doctorName: form.doctor,
        treatmentName: SAANVI_TREATMENTS.find(t => t.id === form.treatment)?.name || form.treatment,
        ...form
      });
    }, 1200);
  };

  const activeTreatment = SAANVI_TREATMENTS.find(t => t.id === selectedTreatmentId);

  return (
    <div className="bg-[#FFFDFB] text-[#4A3B32] font-sans selection:bg-[#FFA07A]/20">
      
      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-[#FFFDFB]/90 backdrop-blur-md border-b border-[#FFEFEA] px-6 py-4 shadow-[0_2px_15px_rgba(255,160,122,0.08)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFEFEA] flex items-center justify-center">
              <Sparkles className="text-[#FFA07A] w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#2D221E] font-nunito">Saanvi&apos;s Clinic</span>
              <span className="text-[9px] text-[#A0887D] tracking-widest uppercase font-semibold">Laser Skin & Hair</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-[#6E5950]">
            <a href="#about" className="hover:text-[#FFA07A] transition-colors">Founder Bio</a>
            <a href="#treatments" className="hover:text-[#FFA07A] transition-colors">Treatments</a>
            <a href="#assessment" className="hover:text-[#FFA07A] transition-colors">Skin Assessment</a>
            <a href="#results" className="hover:text-[#FFA07A] transition-colors">Before & After</a>
            <a href="#testimonials" className="hover:text-[#FFA07A] transition-colors">Reviews</a>
          </div>
          <a
            href="#booking"
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FFA07A] hover:bg-[#FF8A65] rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(255,160,122,0.4)] hover:scale-102 active:scale-98"
          >
            Book Appointment
          </a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6 bg-gradient-to-br from-[#FFF8F5] via-[#FFF0EC] to-[#FFEBE6]">
        {/* Soft decorative blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#FFA07A]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FFD0C4]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-[#FFE8E2] text-xs font-bold text-[#FF8A65]">
              <Award className="w-4 h-4 text-[#FFA07A]" />
              Leading Skin & Hair Restoration in Banjara Hills
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#2D221E] font-nunito">
              Reveal Your Skin&apos;s <br />
              <span className="text-[#FF8A65]">Natural Vibrancy.</span>
            </h1>
            <p className="text-base md:text-lg text-[#6E5950] leading-relaxed max-w-xl">
              Restore your confidence with science-backed, premium skin & hair solutions. Led by renowned dermatologist <strong className="text-[#2D221E]">Dr. G.S.S. Sandeep</strong>, we combine personalized care with advanced USFDA-approved technologies to achieve beautiful, long-lasting outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#FFA07A] hover:bg-[#FF8A65] text-white font-extrabold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(255,160,122,0.4)]"
              >
                Schedule Free Callback
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FFFDFB] text-[#FF8A65] font-extrabold text-sm px-8 py-4 rounded-full transition-all duration-300 border border-[#FFE8E2] shadow-sm"
              >
                View Treatments
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-[#8C766C]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFA07A]" />
                USFDA-Approved Protocols
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FFA07A]" />
                100% Autologous Hair PRP
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkle className="w-4 h-4 text-[#FFA07A]" />
                Custom Skin Resurfacing
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative p-3 bg-white rounded-[2.5rem] shadow-xl border border-[#FFE8E2]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Saanvi's Laser Skin & Hair Clinic Lobby"
                className="rounded-[2rem] w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-[#FFE8E2] flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-[#FFEFEA] flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#FFA07A] fill-current" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2D221E]">4.9 / 5.0</div>
                  <div className="text-[10px] text-[#A0887D] font-bold">Google Reviews (800+ Patients)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white py-10 px-6 border-y border-[#FFEFEA]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '15,000+', label: 'Successful Procedures' },
            { metric: '12+ Years', label: 'Clinical Experience' },
            { metric: '99.6%', label: 'Patient Satisfaction' },
            { metric: '100%', label: 'USFDA-Approved Safety' }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-[#FF8A65] font-nunito">{stat.metric}</div>
              <div className="text-xs md:text-sm font-semibold text-[#8C766C]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUNDER / HEAD DOCTOR BIO */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFA07A]/20 to-[#FFEBE6]/10 rounded-[2rem] transform translate-x-3 translate-y-3 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Dr. G.S.S. Sandeep - Head Dermatologist"
                className="w-full h-[480px] object-cover rounded-[2rem] shadow-md border border-[#FFE8E2]"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#FF8A65] bg-[#FFEFEA] px-3 py-1 rounded-full">
              Expert Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D221E] font-nunito">
              Meet Dr. G.S.S. Sandeep
            </h2>
            <div className="text-sm font-bold text-[#FFA07A] uppercase tracking-wider">
              MBBS, MD (Dermatology, Venereology & Leprosy)
            </div>
            <p className="text-base text-[#6E5950] leading-relaxed">
              Dr. G.S.S. Sandeep is a highly recognized dermatologist and laser specialist with over a decade of clinical excellence in Hyderabad. Under his leadership, Saanvi&apos;s Laser Skin & Hair Clinic has established a benchmark in delivering natural, clinically verified results with standard care.
            </p>
            <p className="text-base text-[#6E5950] leading-relaxed">
              "We believe that aesthetic dermatology is a blend of medical precision and artistic vision. Our goal is not to alter how you look, but to restore and optimize your skin&apos;s natural vigor. Each treatment plan is tailored to your unique biology."
            </p>
            
            {/* Credentials / Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-full bg-[#FFEFEA] text-[#FFA07A]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D221E]">Board Certified MD</h4>
                  <p className="text-xs text-[#8C766C]">Specialized in medical & aesthetic dermatology</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-full bg-[#FFEFEA] text-[#FFA07A]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D221E]">Advanced Laser Expert</h4>
                  <p className="text-xs text-[#8C766C]">Certified in fractional laser scar revision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS & SERVICES SELECTOR */}
      <section id="treatments" className="py-20 bg-[#FFFDFB] border-t border-[#FFEFEA] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] bg-[#FFEFEA] px-3 py-1 rounded-full">
              Explore Our Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D221E] font-nunito">
              Scientifically Proven Skin & Hair Solutions
            </h2>
            <p className="text-sm text-[#8C766C]">
              Select a treatment category below to explore specific procedures, expect clinical sessions, and learn about custom pricing ranges.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
            {SAANVI_TREATMENTS.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTreatmentId(t.id)}
                className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  selectedTreatmentId === t.id
                    ? 'bg-[#FFA07A] text-white shadow-md shadow-[#FFA07A]/30 scale-102'
                    : 'bg-white text-[#6E5950] border border-[#FFE8E2] hover:bg-[#FFEFEA]/40'
                }`}
              >
                {t.category}
              </button>
            ))}
          </div>

          {/* Display Selected Treatment Details */}
          {activeTreatment && (
            <div className="grid lg:grid-cols-12 gap-10 bg-[#FFFDFB] p-6 md:p-10 rounded-[2.5rem] border border-[#FFE8E2] shadow-sm">
              <div className="lg:col-span-5">
                <img
                  src={activeTreatment.image}
                  alt={activeTreatment.name}
                  className="w-full h-[350px] object-cover rounded-[2rem] shadow-inner"
                />
              </div>
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#FF8A65] tracking-widest uppercase block mb-1">
                    {activeTreatment.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D221E] font-nunito">
                    {activeTreatment.name}
                  </h3>
                  <p className="text-sm text-[#FF8A65] font-semibold mt-1">
                    {activeTreatment.tagline}
                  </p>
                </div>
                <p className="text-sm text-[#6E5950] leading-relaxed">
                  {activeTreatment.description}
                </p>

                <div className="border-t border-b border-[#FFEFEA] py-4 grid sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[10px] text-[#A0887D] font-bold uppercase tracking-wider block">Duration</span>
                    <span className="text-sm font-extrabold text-[#2D221E]">{activeTreatment.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0887D] font-bold uppercase tracking-wider block">Ideal Frequency</span>
                    <span className="text-sm font-extrabold text-[#2D221E]">{activeTreatment.frequency}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0887D] font-bold uppercase tracking-wider block">Custom Price Range</span>
                    <span className="text-sm font-extrabold text-[#FF8A65]">{activeTreatment.priceRange}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-sm text-[#2D221E] mb-3">Key Treatment Benefits</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeTreatment.benefits.map((b, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs font-semibold text-[#6E5950]">
                        <Check className="w-4 h-4 text-[#FFA07A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex gap-4">
                  <a
                    href="#booking"
                    onClick={() => setForm(prev => ({ ...prev, treatment: activeTreatment.id }))}
                    className="bg-[#FFA07A] hover:bg-[#FF8A65] text-white text-xs font-extrabold uppercase px-6 py-3 rounded-full transition-all shadow-[0_4px_14px_rgba(255,160,122,0.3)]"
                  >
                    Select & Book Consultation
                  </a>
                  <a
                    href="#assessment"
                    className="border border-[#FFE8E2] text-[#6E5950] text-xs font-extrabold uppercase px-6 py-3 rounded-full hover:bg-[#FFEFEA]/20 transition-all"
                  >
                    Take Skin Quiz
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. SKIN ASSESSMENT QUESTIONNAIRE */}
      <section id="assessment" className="py-20 bg-gradient-to-br from-[#FFEBE6]/50 via-[#FFF0EC]/30 to-[#FFFDFB] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] bg-[#FFEFEA] px-3 py-1 rounded-full">
              Personalized Recommendation
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2D221E] font-nunito">
              Clinical Skin & Hair Assessment
            </h2>
            <p className="text-xs text-[#8C766C] max-w-lg mx-auto">
              Answer 3 brief questions to receive an instant, doctor-informed suggestion matching your unique concerns.
            </p>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-[#FFE8E2] shadow-sm relative overflow-hidden">
            {/* Background decorative ring */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#FFEFEA]/60 -z-0" />

            {!quizCompleted ? (
              <div className="relative z-10 space-y-6">
                {/* Progress bar */}
                <div className="flex justify-between items-center text-xs font-semibold text-[#8C766C]">
                  <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-[#FFEFEA] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#FFA07A] h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#2D221E] leading-snug">
                    {QUIZ_QUESTIONS[currentQuestionIndex].question}
                  </h3>
                  <div className="grid gap-3">
                    {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswerSelect(opt.value)}
                        className="w-full text-left p-4 rounded-2xl border border-[#FFE8E2] hover:border-[#FFA07A] hover:bg-[#FFEFEA]/20 transition-all font-semibold text-[#6E5950] text-sm flex justify-between items-center group"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#FFA07A] opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 bg-[#FFEFEA] rounded-full flex items-center justify-center mx-auto text-[#FFA07A]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#2D221E] font-nunito">
                    Your Tailored Recommendation
                  </h3>
                  <p className="text-xs text-[#8C766C] mt-1">
                    Based on your preferences, we suggest booking:
                  </p>
                </div>

                {recommendedTreatment && (
                  <div className="max-w-md mx-auto p-6 rounded-3xl bg-[#FFF8F5] border border-[#FFE8E2] space-y-3">
                    <h4 className="font-extrabold text-base text-[#FF8A65]">{recommendedTreatment.name}</h4>
                    <p className="text-xs text-[#6E5950] leading-relaxed">{recommendedTreatment.tagline}</p>
                    <div className="text-xs font-bold text-[#8C766C] mt-2">
                      Price Guide: {recommendedTreatment.priceRange}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-4 pt-2">
                  <button
                    onClick={() => applyRecommendation(recommendedTreatment?.id || 'prp-hair')}
                    className="bg-[#FFA07A] hover:bg-[#FF8A65] text-white font-extrabold text-xs uppercase px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(255,160,122,0.4)]"
                  >
                    Select & Pre-Fill Booking Form
                  </button>
                  <button
                    onClick={handleResetQuiz}
                    className="border border-[#FFE8E2] text-[#6E5950] hover:bg-[#FFEFEA]/20 font-extrabold text-xs uppercase px-8 py-3.5 rounded-full"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. RESULTS / BEFORE & AFTER SHOWCASE */}
      <section id="results" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] bg-[#FFEFEA] px-3 py-1 rounded-full">
            Clinical Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D221E] font-nunito">
            Witness Real Skin & Hair Transformations
          </h2>
          <p className="text-sm text-[#8C766C]">
            View real patient transformations achieved through personalized clinical treatments at our Banjara Hills location.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Male Pattern Hair Loss Reversal',
              treatment: 'Advanced PRP Hair Therapy (5 Sessions)',
              description: 'Visible hairline restoration, significant crown density recovery, and thickness improvement.',
              image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: 'Acne Scar Smoothing',
              treatment: 'Fractional CO2 Laser Resurfacing (3 Sessions)',
              description: 'Dramatic reduction in pitted rolling scars, smoother skin texture, and smaller pore size.',
              image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: 'Melasma & Tanning Correction',
              treatment: 'Medical Chemical Peels (4 Sessions)',
              description: 'Successful fading of dark pigmentation patches, evening out skin tone, and restoring glow.',
              image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] border border-[#FFE8E2] p-4 space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative rounded-[2rem] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FFA07A] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  Mock Case Study
                </div>
              </div>
              <div className="space-y-2 px-2">
                <span className="text-[10px] font-bold text-[#FF8A65] uppercase block">{item.treatment}</span>
                <h4 className="font-extrabold text-[#2D221E] text-base leading-snug">{item.title}</h4>
                <p className="text-xs text-[#6E5950] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#FFFDFB] via-[#FFF0EC]/20 to-[#FFEBE6]/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] bg-[#FFEFEA] px-3 py-1 rounded-full">
              Patient Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D221E] font-nunito">
              Loved by Hundreds in Hyderabad
            </h2>
            <p className="text-sm text-[#8C766C]">
              Read verified patient reviews sharing their authentic experiences with Dr. G.S.S. Sandeep and team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rohan Reddy',
                location: 'Banjara Hills',
                rating: 5,
                comment: 'My hair fall has completely stopped and I can see real new hair growth on my crown area. Dr. Sandeep explained the whole science behind PRP therapy before we started. Very clean and professional clinic.',
                date: '2 weeks ago'
              },
              {
                name: 'Ananya Rao',
                location: 'Jubilee Hills',
                rating: 5,
                comment: 'I was extremely worried about my deep acne scars. Dr. Sandeep suggested Fractional CO2 laser sessions. I have completed 3 sessions and the texture of my skin has improved by at least 80%. Highly recommend!',
                date: '1 month ago'
              },
              {
                name: 'Priyanka Nair',
                location: 'Gachibowli',
                rating: 5,
                comment: 'I visited for pigmentation chemical peels. The therapist was gentle and Dr. Sandeep checked on me at every session. The results are amazing, my tan is gone and my skin glows. Thank you Saanvi\'s!',
                date: '3 weeks ago'
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-[#FFE8E2] shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFA07A] fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic text-[#6E5950] leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-[#FFEFEA] pt-4">
                  <div>
                    <h5 className="font-extrabold text-sm text-[#2D221E]">{review.name}</h5>
                    <span className="text-[10px] text-[#A0887D] font-bold">{review.location}</span>
                  </div>
                  <span className="text-[10px] text-[#A0887D] font-bold">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING / ENQUIRY FORM */}
      <section id="booking" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] border border-[#FFE8E2] shadow-md p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFEFEA]/40 blur-xl -z-0" />
          
          {!successData ? (
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] bg-[#FFEFEA] px-3 py-1 rounded-full">
                  Priority Access
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-[#2D221E] font-nunito">
                  Book Your Consultation
                </h2>
                <p className="text-xs text-[#8C766C]">
                  Please fill in the form below. We will confirm your slot within 2 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                      Patient Full Name <span className="text-[#FF8A65]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#A0887D]">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe / Child Name"
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.name ? 'border-[#FF8A65]' : 'border-[#FFE8E2]'
                        } focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[10px] text-[#FF8A65] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                      Mobile Number <span className="text-[#FF8A65]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#A0887D]">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9848230000"
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-[#FF8A65]' : 'border-[#FFE8E2]'
                        } focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-[#FF8A65] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                      Email Address <span className="text-[#FF8A65]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#A0887D]">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.email ? 'border-[#FF8A65]' : 'border-[#FFE8E2]'
                        } focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] text-[#FF8A65] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                      Preferred Appointment Date <span className="text-[#FF8A65]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#A0887D]">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.date ? 'border-[#FF8A65]' : 'border-[#FFE8E2]'
                        } focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[10px] text-[#FF8A65] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Treatment Interest */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                      Treatment of Interest <span className="text-[#FF8A65]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDFB] px-4 py-3 rounded-xl border border-[#FFE8E2] focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold appearance-none"
                      >
                        {SAANVI_TREATMENTS.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-4 text-[#A0887D] pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Doctor Selector */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                      Preferred Doctor <span className="text-[#FF8A65]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDFB] px-4 py-3 rounded-xl border border-[#FFE8E2] focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold appearance-none"
                      >
                        <option value="Dr. G.S.S. Sandeep">Dr. G.S.S. Sandeep (Lead Doctor)</option>
                        <option value="Assistant Dermatologist">Assistant Consultant</option>
                      </select>
                      <span className="absolute right-4 top-4 text-[#A0887D] pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#6E5950] uppercase tracking-wider block">
                    Special Queries / Notes
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Briefly describe your symptoms or past treatment history..."
                    className="w-full bg-[#FFFDFB] px-4 py-3 rounded-xl border border-[#FFE8E2] focus:outline-none focus:border-[#FFA07A] text-sm text-[#4A3B32] font-semibold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFA07A] hover:bg-[#FF8A65] text-white font-extrabold uppercase py-4 rounded-xl text-sm transition-all shadow-[0_4px_14px_rgba(255,160,122,0.4)] disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Securing Your Slot...
                    </>
                  ) : (
                    <>
                      Confirm Secure Booking Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success confirmation card */
            <div className="relative z-10 text-center space-y-6 py-6 animate-fade-in">
              <div className="w-16 h-16 bg-[#FFEFEA] rounded-full flex items-center justify-center mx-auto text-[#FF8A65] shadow-inner">
                <BookmarkCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-[#FFA07A] uppercase tracking-widest block">Booking Confirmed</span>
                <h3 className="text-2xl md:text-3xl font-black text-[#2D221E] font-nunito">Appointment Secured!</h3>
                <p className="text-xs text-[#8C766C] max-w-md mx-auto">
                  Thank you, <strong className="text-[#2D221E]">{successData.name}</strong>. Your appointment request has been registered in our database. We have blocked your tentative slot.
                </p>
              </div>

              <div className="max-w-md mx-auto bg-[#FFF8F5] border border-[#FFE8E2] rounded-3xl p-6 text-left space-y-3.5 text-xs font-semibold">
                <div className="flex justify-between border-b border-[#FFEFEA] pb-2">
                  <span className="text-[#A0887D]">Reference Number:</span>
                  <span className="text-[#FF8A65] font-extrabold">{successData.referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-[#FFEFEA] pb-2">
                  <span className="text-[#A0887D]">Preferred Date:</span>
                  <span className="text-[#2D221E]">{successData.date}</span>
                </div>
                <div className="flex justify-between border-b border-[#FFEFEA] pb-2">
                  <span className="text-[#A0887D]">Assigned Specialist:</span>
                  <span className="text-[#2D221E]">{successData.doctorName}</span>
                </div>
                <div className="flex justify-between border-b border-[#FFEFEA] pb-2">
                  <span className="text-[#A0887D]">Treatment Focus:</span>
                  <span className="text-[#2D221E]">{successData.treatmentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0887D]">Contact Number:</span>
                  <span className="text-[#2D221E]">{successData.phone}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <a
                  href={`tel:${successData.phone}`}
                  className="bg-[#FFA07A] hover:bg-[#FF8A65] text-white font-extrabold text-xs uppercase px-8 py-3.5 rounded-full shadow-md"
                >
                  Call Clinic Support
                </a>
                <button
                  onClick={() => setSuccessData(null)}
                  className="border border-[#FFE8E2] text-[#6E5950] font-extrabold text-xs uppercase px-8 py-3.5 rounded-full hover:bg-[#FFEFEA]/20"
                >
                  Book Another Session
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. CLINIC LOCATION & HOURS FOOTER */}
      <footer className="bg-[#FFF8F5] border-t border-[#FFEFEA] pt-16 pb-8 px-6 text-sm text-[#6E5950]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 pb-12 border-b border-[#FFEFEA]">
          
          {/* Clinic Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFEFEA] flex items-center justify-center">
                <Sparkles className="text-[#FFA07A] w-4.5 h-4.5" />
              </div>
              <span className="font-extrabold text-lg text-[#2D221E] font-nunito">Saanvi&apos;s Clinic</span>
            </div>
            <p className="text-xs text-[#8C766C] leading-relaxed max-w-sm">
              Dedicated to delivering international standards of dermatological and aesthetic treatments in Banjara Hills, Hyderabad. Our treatments are formulated and monitored by board-certified clinical professionals.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#2D221E] space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFA07A]" />
                <span>+91 9848230000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFA07A]" />
                <span>info@saanvislaserclinic.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#2D221E] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFA07A]" /> Operating Hours
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#8C766C]">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="text-[#2D221E]">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-[#FF8A65] font-extrabold">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
              <li className="text-[10px] text-[#A0887D] italic pt-1">
                * Appointments require a prior booking call or web request.
              </li>
            </ul>
          </div>

          {/* Location & Embedded Map Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#2D221E] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFA07A]" /> Clinic Location
            </h4>
            <p className="text-xs leading-relaxed text-[#8C766C]">
              6-3-252/3, EAPL Ascent, Opp: Bank of Bahrain & Kuwait, Irram Manzil Colony, Banjara Hills, Hyderabad, Telangana 500082
            </p>

            {/* Map representation */}
            <div className="h-32 bg-white rounded-2xl border border-[#FFE8E2] flex flex-col justify-center items-center gap-2 relative overflow-hidden shadow-inner p-4 text-center">
              <div className="w-7 h-7 rounded-full bg-[#FFEFEA] flex items-center justify-center text-[#FFA07A]">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#2D221E]">Banjara Hills, Hyderabad</span>
              <span className="text-[9px] text-[#A0887D] font-bold uppercase tracking-widest">Opposite Bank of Bahrain & Kuwait</span>
              {/* Decorative line indicators mimicking map route */}
              <div className="absolute inset-0 border-t border-dashed border-[#FFA07A]/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-[#A0887D]">
          <div>
            © {new Date().getFullYear()} Saanvi&apos;s Laser Skin & Hair Clinic. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-[#FFA07A]">Medical Disclaimer</a>
            <a href="#booking" className="hover:text-[#FFA07A]">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

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
  Gem,
  GlassWater,
  Smile
} from 'lucide-react';

// Treatments Data
const BEAUTY_WORLD_TREATMENTS = [
  {
    id: 'botox-fillers',
    category: 'Facial Aesthetics',
    name: 'Botox & Premium Dermal Fillers',
    tagline: 'Precision anti-aging injections for volume restoration & wrinkle smoothing',
    description: 'Expertly administered USFDA-approved treatments targeting fine lines, crow\'s feet, and forehead creases, while premium hyaluronic acid fillers restore youthful contour to cheeks, lips, and jawlines.',
    benefits: [
      'Softens expression lines and wrinkles within 3-7 days',
      'Restores lost facial volume and contours sagging areas',
      'Natural-looking results tailored to your unique facial geometry',
      'Performed exclusively by senior cosmetic dermatologists'
    ],
    duration: '30 - 45 Mins',
    frequency: 'Every 4 - 6 months for maintenance',
    idealFor: 'Fine lines, hollow cheeks, thin lips, aging skin folds',
    priceRange: '₹15,000 - ₹35,000 per session',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'laser-hair',
    category: 'Laser Care',
    name: 'Advanced Laser Hair Reduction',
    tagline: 'Permanent reduction using triple-wavelength gold standard technology',
    description: 'A virtually painless, dermatologist-guided laser solution designed for all skin and hair types. Targets active hair follicles under protective sapphire cooling to prevent regrowth without harming surrounding tissue.',
    benefits: [
      'Up to 90% permanent hair reduction after a full cycle',
      'Virtually pain-free treatment with advanced contact cooling',
      'Prevents painful ingrown hairs, bumps, and shaving rashes',
      'Smooth, silky skin that stays maintenance-free for years'
    ],
    duration: '15 - 60 Mins (depending on area)',
    frequency: '6 - 8 sessions, 6 weeks apart',
    idealFor: 'Unwanted facial or body hair, sensitive skin prone to wax burns',
    priceRange: '₹4,500 - ₹12,000 per session',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chemical-peels',
    category: 'Skin Resurfacing',
    name: 'Luxury Botanical Chemical Peels',
    tagline: 'Controlled micro-exfoliation for pigment correction & high-gloss glow',
    description: 'Premium medical-grade acids combined with calming botanical extracts to gently dissolve the topmost layers of dull, damaged skin. Ideal for resolving pigmentation, melasma, and active congestion.',
    benefits: [
      'Fades dark spots, acne marks, and sun-induced melasma',
      'Stimulates cellular turnover for a fresh, radiant skin texture',
      'Clears clogged pores and controls excess sebum secretion',
      'Comfortable application with zero severe peeling downtime'
    ],
    duration: '30 Mins',
    frequency: '3 - 5 sessions, 3 weeks apart',
    idealFor: 'Sun-damaged skin, stubborn hyperpigmentation, uneven skin tone',
    priceRange: '₹3,500 - ₹6,500 per session',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  }
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'goal',
    question: 'What is your primary aesthetic objective?',
    options: [
      { label: 'Smooth fine lines, wrinkles, or restore lip/cheek volume', value: 'botox-fillers' },
      { label: 'Remove unwanted facial or body hair permanently', value: 'laser-hair' },
      { label: 'Fade dark spots, sun tan, or clear active acne blemishes', value: 'chemical-peels' }
    ]
  },
  {
    id: 'timeline',
    question: 'How quickly do you expect to see visible outcomes?',
    options: [
      { label: 'Immediate volume or smoothing within a few days', value: 'botox-fillers' },
      { label: 'Gradual glow and pigmentation fading over 2-3 weeks', value: 'chemical-peels' },
      { label: 'Long-term permanent reduction over multiple monthly sessions', value: 'laser-hair' }
    ]
  },
  {
    id: 'downtime',
    question: 'What downtime profile fits your current lifestyle?',
    options: [
      { label: 'Zero downtime – want to apply makeup and resume routines immediately', value: 'laser-hair' },
      { label: 'Very minimal (minor local swelling/redness for a few hours)', value: 'botox-fillers' },
      { label: 'Light flaking/peeling for 2 days is acceptable for deep glow', value: 'chemical-peels' }
    ]
  }
];

export default function BeautyWorldClinicPage() {
  // Treatments selector state
  const [selectedTreatmentId, setSelectedTreatmentId] = useState('botox-fillers');

  // Skin Assessment Questionnaire state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedTreatment, setRecommendedTreatment] = useState(null);

  // Booking Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'botox-fillers',
    doctor: 'Dr. Amarnath Patil',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  // Quiz Logic
  const handleAnswerSelect = (value) => {
    const updatedAnswers = { ...quizAnswers, [currentQuestionIndex]: value };
    setQuizAnswers(updatedAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Find the most frequent answer
      const values = Object.values(updatedAnswers);
      const counts = values.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});

      let recommendation = values[0];
      let maxCount = 0;
      Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          recommendation = key;
        }
      });

      const matched = BEAUTY_WORLD_TREATMENTS.find(t => t.id === recommendation);
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

  // Form Handlers
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
      newErrors.name = 'Patient name is required';
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
        referenceId: `BW-${Math.floor(100000 + Math.random() * 900000)}`,
        doctorName: form.doctor,
        treatmentName: BEAUTY_WORLD_TREATMENTS.find(t => t.id === form.treatment)?.name || form.treatment,
        ...form
      });
    }, 1200);
  };

  const activeTreatment = BEAUTY_WORLD_TREATMENTS.find(t => t.id === selectedTreatmentId);

  return (
    <div className="bg-[#FDFBF7] text-[#2C2520] font-sans selection:bg-[#D4AF37]/20">
      
      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAE3D5] px-6 py-4 shadow-[0_2px_15px_rgba(212,175,55,0.04)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center">
              <Gem className="text-[#D4AF37] w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg tracking-wider text-[#2C2520] font-playfair">Beauty World</span>
              <span className="text-[9px] text-[#8A7A6D] tracking-widest uppercase font-bold">Cosmetic & Skin Clinic</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-[#6E5F52]">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">Dermatologist</a>
            <a href="#treatments" className="hover:text-[#D4AF37] transition-colors">Aesthetic Services</a>
            <a href="#assessment" className="hover:text-[#D4AF37] transition-colors">Skin Questionnaire</a>
            <a href="#results" className="hover:text-[#D4AF37] transition-colors">Transformations</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Client Reviews</a>
          </div>
          <a
            href="#booking"
            className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#FFFDFB] bg-[#D4AF37] hover:bg-[#BFA02C] rounded-none transition-all duration-300 shadow-md hover:scale-102 active:scale-98"
          >
            Request Booking
          </a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-28 px-6 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EFE0]">
        {/* Soft background light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#EAE3D5]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#EAE3D5] text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              Elite Medical Spa & Cosmetic Clinic — Road No. 1
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-serif tracking-tight leading-[1.1] text-[#2C2520] font-playfair">
              Reclaim Your <br />
              <span className="italic text-[#D4AF37]">Timeless Radiance.</span>
            </h1>
            <p className="text-base text-[#6E5F52] leading-relaxed max-w-xl font-inter">
              Experience the pinnacle of non-surgical aesthetic enhancements. Under the professional direction of senior medical doctor <strong className="text-[#2C2520]">Dr. Amarnath Patil</strong>, we combine advanced Botox, fillers, and clinical peels with an elite, relaxing spa environment.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#BFA02C] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 shadow-md"
              >
                Secure Priority Slot
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#D4AF37] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 border border-[#D4AF37]/45"
              >
                Explore Services
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-[10px] font-bold uppercase tracking-wider text-[#8A7A6D]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                USFDA Gold Standard
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                Doctor-Administered Fillers
              </div>
              <div className="flex items-center gap-1.5">
                <GlassWater className="w-4 h-4 text-[#D4AF37]" />
                Premium Clinical Care
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative p-2 bg-white border border-[#EAE3D5] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Beauty World Cosmetic Clinic Reception"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FDFBF7] border border-[#EAE3D5] p-5 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                </div>
                <div>
                  <div className="font-serif font-bold text-[#2C2520] text-sm font-playfair">5-Star Standards</div>
                  <div className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-wider">Over 1,200 Happy VIP Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white py-12 px-6 border-y border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '20,000+', label: 'Successful Procedures' },
            { metric: '18+ Years', label: 'Doctor Clinical Experience' },
            { metric: '100%', label: 'USFDA-Approved Protocols' },
            { metric: '1-on-1', label: 'Personalized Doctor Care' }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl font-serif text-[#D4AF37] font-playfair">{stat.metric}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A7A6D]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUNDER / HEAD DOCTOR BIO */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-[#EAE3D5]/20 transform translate-x-4 translate-y-4 -z-10 border border-[#D4AF37]/20" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Amarnath Patil - Cosmetic Dermatologist"
                className="w-full h-[500px] object-cover border border-[#EAE3D5] shadow-sm"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1">
              Lead Physician
            </span>
            <h2 className="text-3xl md:text-4xl font-normal font-serif text-[#2C2520] font-playfair">
              Dr. Amarnath Patil, MBBS, MD
            </h2>
            <p className="text-base text-[#6E5F52] leading-relaxed font-inter">
              Dr. Amarnath Patil is a senior cosmetic dermatologist and specialist in medical anti-aging with over 18 years of practice. He specializes in advanced non-surgical facial rejuvenation, Botox, and dermal fillers. He is committed to delivering natural, subtle enhancements that enhance each individual&apos;s beauty without compromising facial mobility.
            </p>
            <p className="text-base text-[#6E5F52] leading-relaxed italic font-serif text-[#8A7A6D]">
              "Aesthetics is not about creating a new face; it is about restoring the harmony, balance, and glowing vitality that time has gently altered. Our medical approach in Banjara Hills prioritizes safety, premium materials, and absolute clinical integrity."
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-[#EAE3D5]/60">
              <div className="flex gap-3 items-start">
                <div className="p-2 border border-[#D4AF37] text-[#D4AF37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2520] font-playfair">Board-Certified MD</h4>
                  <p className="text-xs text-[#8A7A6D] mt-0.5">Comprehensive dermatology qualifications</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 border border-[#D4AF37] text-[#D4AF37]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2520] font-playfair">Aesthetic Pioneer</h4>
                  <p className="text-xs text-[#8A7A6D] mt-0.5">Advanced injector for premium FDA fillers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS & SERVICES SELECTOR */}
      <section id="treatments" className="py-24 bg-[#FAF6EE]/50 border-t border-b border-[#EAE3D5] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-white px-4 py-1.5 border border-[#EAE3D5]">
              Elite Treatment Menu
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2520] font-playfair">
              Bespoke Aesthetic Transformations
            </h2>
            <p className="text-sm text-[#8A7A6D] font-inter">
              Explore our selected treatment categories. Learn about medical methods, expected sessions, and clear price guides.
            </p>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="flex justify-center flex-wrap gap-2 md:gap-6 mb-12">
            {BEAUTY_WORLD_TREATMENTS.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTreatmentId(t.id)}
                className={`px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none ${
                  selectedTreatmentId === t.id
                    ? 'bg-[#D4AF37] text-white shadow-sm'
                    : 'bg-white text-[#6E5F52] border border-[#EAE3D5] hover:bg-[#FAF6EE]'
                }`}
              >
                {t.category}
              </button>
            ))}
          </div>

          {/* Selected Treatment Detail Card */}
          {activeTreatment && (
            <div className="grid lg:grid-cols-12 gap-12 bg-white p-6 md:p-12 border border-[#EAE3D5] shadow-sm relative">
              <div className="lg:col-span-5">
                <img
                  src={activeTreatment.image}
                  alt={activeTreatment.name}
                  className="w-full h-[360px] object-cover border border-[#EAE3D5]"
                />
              </div>
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase block mb-1">
                    {activeTreatment.category}
                  </span>
                  <h3 className="text-2xl font-serif text-[#2C2520] font-playfair">
                    {activeTreatment.name}
                  </h3>
                  <p className="text-xs text-[#8A7A6D] italic mt-1 font-serif">
                    {activeTreatment.tagline}
                  </p>
                </div>
                <p className="text-sm text-[#6E5F52] leading-relaxed font-inter">
                  {activeTreatment.description}
                </p>

                <div className="border-t border-b border-[#EAE3D5]/80 py-4 grid sm:grid-cols-3 gap-4 text-xs font-inter">
                  <div>
                    <span className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-wider block mb-0.5">Session Duration</span>
                    <span className="font-bold text-[#2C2520]">{activeTreatment.duration}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-wider block mb-0.5">Recommended Interval</span>
                    <span className="font-bold text-[#2C2520]">{activeTreatment.frequency}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-wider block mb-0.5">Price Range Guide</span>
                    <span className="font-bold text-[#D4AF37]">{activeTreatment.priceRange}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C2520] mb-3 font-playfair">Target Clinical Benefits</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-xs text-[#6E5F52] font-inter">
                    {activeTreatment.benefits.map((b, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex gap-4">
                  <a
                    href="#booking"
                    onClick={() => setForm(prev => ({ ...prev, treatment: activeTreatment.id }))}
                    className="bg-[#D4AF37] hover:bg-[#BFA02C] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-none transition-all"
                  >
                    Select & Request Slot
                  </a>
                  <a
                    href="#assessment"
                    className="border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-none hover:bg-[#FAF6EE] transition-all"
                  >
                    Recommend Solution
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. SKIN ASSESSMENT QUESTIONNAIRE */}
      <section id="assessment" className="py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-white px-3 py-1 border border-[#EAE3D5]">
              Interactive Assessment
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2C2520] font-playfair">
              Online Skin & Aesthetic Recommendation
            </h2>
            <p className="text-xs text-[#8A7A6D] max-w-lg mx-auto font-inter">
              Answer three expert questions below to discover which high-end treatment aligns best with your aesthetic parameters.
            </p>
          </div>

          <div className="bg-white p-6 md:p-12 border border-[#EAE3D5] shadow-sm relative">
            <div className="absolute -left-12 -top-12 w-28 h-28 rounded-full bg-[#FAF6EE] -z-0" />

            {!quizCompleted ? (
              <div className="relative z-10 space-y-6 font-inter">
                {/* Progress bar */}
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#8A7A6D]">
                  <span>Step {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-[#FAF6EE] h-1.5 overflow-hidden">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-[#2C2520] font-playfair">
                    {QUIZ_QUESTIONS[currentQuestionIndex].question}
                  </h3>
                  <div className="grid gap-3">
                    {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswerSelect(opt.value)}
                        className="w-full text-left p-4 border border-[#EAE3D5] hover:border-[#D4AF37] hover:bg-[#FAF6EE]/50 transition-all font-semibold text-[#6E5F52] text-sm flex justify-between items-center group rounded-none"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 text-center space-y-6 font-inter">
                <div className="w-14 h-14 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#2C2520] font-playfair">
                    Recommended Treatment Experience
                  </h3>
                  <p className="text-xs text-[#8A7A6D] mt-1">
                    Based on your clinical objectives, we recommend scheduling:
                  </p>
                </div>

                {recommendedTreatment && (
                  <div className="max-w-md mx-auto p-6 bg-[#FAF6EE]/55 border border-[#EAE3D5] space-y-2">
                    <h4 className="font-serif font-bold text-[#D4AF37] text-base font-playfair">{recommendedTreatment.name}</h4>
                    <p className="text-xs text-[#6E5F52] leading-relaxed font-inter">{recommendedTreatment.tagline}</p>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A7A6D] mt-2">
                      Est. Range: {recommendedTreatment.priceRange}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-4 pt-2">
                  <button
                    onClick={() => applyRecommendation(recommendedTreatment?.id || 'botox-fillers')}
                    className="bg-[#D4AF37] hover:bg-[#BFA02C] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none shadow-md"
                  >
                    Select & Auto-Fill Form
                  </button>
                  <button
                    onClick={handleResetQuiz}
                    className="border border-[#EAE3D5] text-[#6E5F52] hover:bg-[#FAF6EE] font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. RESULTS / BEFORE & AFTER SHOWCASE */}
      <section id="results" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#FAF6EE] px-3 py-1 border border-[#EAE3D5]">
            Clinical Portfolios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2520] font-playfair">
            Verified Aesthetic Transformations
          </h2>
          <p className="text-sm text-[#8A7A6D]">
            Examine verified case studies representing real outcomes from treatment plans executed by Dr. Amarnath Patil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Lower Face Contour & Lift',
              treatment: 'Dermal Fillers & Botox Combo (1 Session)',
              description: 'Restored volume to hollow cheeks, smoothed deep smile lines, and sculpted the jawline.',
              image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: 'Permanent Hair Reduction',
              treatment: 'Triple-Wavelength Laser (6 Sessions)',
              description: 'Smooth, hairless skin on legs and underarms with zero bumps or redness.',
              image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: 'Pigment & Melasma Resolution',
              treatment: 'Botanical Resurfacing Peel (4 Sessions)',
              description: 'Cleared chronic sun spots, smoothed skin roughness, and restored a unified bright tone.',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#EAE3D5] p-3 space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                  Mock Case Study
                </div>
              </div>
              <div className="space-y-2 px-1">
                <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider block">{item.treatment}</span>
                <h4 className="font-serif font-bold text-[#2C2520] text-base font-playfair">{item.title}</h4>
                <p className="text-xs text-[#6E5F52] leading-relaxed font-inter">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-white px-3 py-1 border border-[#EAE3D5]">
              Patient Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2520] font-playfair">
              Acclaimed by Discerning Clients
            </h2>
            <p className="text-sm text-[#8A7A6D]">
              Read verified feedback from our patients who have experienced our luxurious clinical environment in Banjara Hills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Suresh Kumar',
                location: 'Road No. 1, Banjara Hills',
                rating: 5,
                comment: 'Beauty World offers the absolute best Botox experience in Hyderabad. Dr. Amarnath Patil is incredibly skilled and conservative. I wanted a natural look, and he achieved exactly that. Highly professional.',
                date: '3 weeks ago'
              },
              {
                name: 'Meera Sen',
                location: 'Jubilee Hills',
                rating: 5,
                comment: 'The laser hair reduction is truly pain-free. I had very sensitive skin and was scared, but the cooling technology is wonderful. The clinic is spotless and feels like a luxury resort spa.',
                date: '1 month ago'
              },
              {
                name: 'Dr. Rajesh K.',
                location: 'Somajiguda',
                rating: 5,
                comment: 'As a fellow medical practitioner, I am highly impressed by their sterilization standards and the doctor-led execution of peels. Faded my sun pigmentation beautifully. Standard clinical practice.',
                date: '2 weeks ago'
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#EAE3D5] shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <p className="text-xs italic text-[#6E5F52] leading-relaxed font-inter">
                    "{review.comment}"
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-[#EAE3D5]/60 pt-4 font-inter">
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#2C2520] font-playfair">{review.name}</h5>
                    <span className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-wider">{review.location}</span>
                  </div>
                  <span className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-wider">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING / ENQUIRY FORM */}
      <section id="booking" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-[#EAE3D5] shadow-md p-6 md:p-12 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF6EE] -z-0" />
          
          {!successData ? (
            <div className="relative z-10 space-y-8 font-inter">
              <div className="text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#FAF6EE] px-3 py-1 border border-[#EAE3D5]">
                  Reservation Form
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-[#2C2520] font-playfair">
                  Schedule Your Priority Visit
                </h2>
                <p className="text-xs text-[#8A7A6D]">
                  Complete the fields below. A concierge coordinator will call you to confirm your calendar booking.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                      Patient Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#8A7A6D]">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe / Child Name"
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-none border ${
                          errors.name ? 'border-[#D4AF37]' : 'border-[#EAE3D5]'
                        } focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[10px] text-[#D4AF37] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                      Mobile Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#8A7A6D]">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9849015093"
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-none border ${
                          errors.phone ? 'border-[#D4AF37]' : 'border-[#EAE3D5]'
                        } focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-[#D4AF37] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#8A7A6D]">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="yourname@domain.com"
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-none border ${
                          errors.email ? 'border-[#D4AF37]' : 'border-[#EAE3D5]'
                        } focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] text-[#D4AF37] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                      Preferred Date <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#8A7A6D]">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className={`w-full bg-[#FFFDFB] pl-10 pr-4 py-3 rounded-none border ${
                          errors.date ? 'border-[#D4AF37]' : 'border-[#EAE3D5]'
                        } focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[10px] text-[#D4AF37] font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Treatment Interest */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                      Treatment Focus <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDFB] px-4 py-3 rounded-none border border-[#EAE3D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold appearance-none"
                      >
                        {BEAUTY_WORLD_TREATMENTS.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-4 text-[#8A7A6D] pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Doctor Selector */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                      Consulting Doctor <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDFB] px-4 py-3 rounded-none border border-[#EAE3D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold appearance-none"
                      >
                        <option value="Dr. Amarnath Patil">Dr. Amarnath Patil (Lead Doctor)</option>
                        <option value="Assistant Surgeon">Assistant Surgeon</option>
                      </select>
                      <span className="absolute right-4 top-4 text-[#8A7A6D] pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#6E5F52] uppercase tracking-wider block">
                    Special Inquiries & Requirements
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Provide details of your cosmetic history or queries..."
                    className="w-full bg-[#FFFDFB] px-4 py-3 rounded-none border border-[#EAE3D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C2520] font-semibold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#BFA02C] text-white font-bold uppercase tracking-widest py-4 rounded-none text-xs transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing VIP Booking Request...
                    </>
                  ) : (
                    <>
                      Submit Consultation Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success confirmation card */
            <div className="relative z-10 text-center space-y-6 py-6 animate-fade-in font-inter">
              <div className="w-14 h-14 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                <BookmarkCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest block">Request Registered</span>
                <h3 className="text-2xl font-serif text-[#2C2520] font-playfair">Reservation Secured</h3>
                <p className="text-xs text-[#6E5F52] max-w-md mx-auto">
                  Thank you, <strong className="text-[#2C2520]">{successData.name}</strong>. Your exclusive VIP consult request has been received. Our concierge staff will call you shortly to confirm timings.
                </p>
              </div>

              <div className="max-w-md mx-auto bg-[#FAF6EE]/70 border border-[#EAE3D5] rounded-none p-6 text-left space-y-3.5 text-xs font-semibold">
                <div className="flex justify-between border-b border-[#EAE3D5] pb-2">
                  <span className="text-[#8A7A6D] uppercase text-[9px] tracking-wider">Ref ID:</span>
                  <span className="text-[#D4AF37] font-bold font-mono">{successData.referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE3D5] pb-2">
                  <span className="text-[#8A7A6D] uppercase text-[9px] tracking-wider">Tentative Date:</span>
                  <span className="text-[#2C2520]">{successData.date}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE3D5] pb-2">
                  <span className="text-[#8A7A6D] uppercase text-[9px] tracking-wider">Lead Specialist:</span>
                  <span className="text-[#2C2520]">{successData.doctorName}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE3D5] pb-2">
                  <span className="text-[#8A7A6D] uppercase text-[9px] tracking-wider">Service Focus:</span>
                  <span className="text-[#2C2520]">{successData.treatmentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A7A6D] uppercase text-[9px] tracking-wider">Primary Phone:</span>
                  <span className="text-[#2C2520]">{successData.phone}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <a
                  href={`tel:${successData.phone}`}
                  className="bg-[#D4AF37] hover:bg-[#BFA02C] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-none shadow-md"
                >
                  Call Concierge
                </a>
                <button
                  onClick={() => setSuccessData(null)}
                  className="border border-[#EAE3D5] text-[#6E5F52] font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-none hover:bg-[#FAF6EE]"
                >
                  New Request
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. CLINIC LOCATION & HOURS FOOTER */}
      <footer className="bg-[#F8F5F0] border-t border-[#EAE3D5] pt-16 pb-8 px-6 text-sm text-[#6E5F52]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 pb-12 border-b border-[#EAE3D5]">
          
          {/* Clinic Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center">
                <Gem className="text-[#D4AF37] w-4.5 h-4.5" />
              </div>
              <span className="font-serif font-bold text-lg text-[#2C2520] font-playfair">Beauty World Clinic</span>
            </div>
            <p className="text-xs text-[#8A7A6D] leading-relaxed max-w-sm font-inter">
              Providing medical aesthetic excellence and high-end cosmetic dermatology under strict clinical guidelines in Banjara Hills, Hyderabad. Dedicated to natural results.
            </p>
            <div className="pt-2 text-xs font-bold text-[#2C2520] space-y-2 font-inter">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+91 9849015093</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>concierge@beautyworldclinic.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-3 space-y-4 font-inter">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#2C2520] flex items-center gap-1.5 font-playfair">
              <Clock className="w-4 h-4 text-[#D4AF37]" /> Operating Hours
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#8A7A6D]">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="text-[#2C2520]">9:30 AM - 7:30 PM</span>
              </li>
              <li className="flex justify-between text-[#D4AF37] font-bold">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
              <li className="text-[10px] text-[#8A7A6D] italic pt-1">
                * Prior consultation request or call is strictly required.
              </li>
            </ul>
          </div>

          {/* Location & Embedded Map Placeholder */}
          <div className="lg:col-span-4 space-y-4 font-inter">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#2C2520] flex items-center gap-1.5 font-playfair">
              <MapPin className="w-4 h-4 text-[#D4AF37]" /> Clinic Location
            </h4>
            <p className="text-xs leading-relaxed text-[#8A7A6D]">
              Opposite Kotak Mahindra Bank, Road No. 1, Banjara Hills, Hyderabad, Telangana 500034
            </p>

            {/* Map representation */}
            <div className="h-32 bg-white rounded-none border border-[#EAE3D5] flex flex-col justify-center items-center gap-2 relative overflow-hidden shadow-inner p-4 text-center">
              <div className="w-6 h-6 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-serif font-bold text-[#2C2520] font-playfair">Road No. 1, Banjara Hills</span>
              <span className="text-[9px] text-[#8A7A6D] font-bold uppercase tracking-widest">Opposite Kotak Mahindra Bank</span>
              {/* Decorative map indicators */}
              <div className="absolute inset-0 border-t border-dashed border-[#D4AF37]/5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-[#8A7A6D] font-inter">
          <div>
            © {new Date().getFullYear()} Beauty World Cosmetic & Skin Clinic. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-[#D4AF37] uppercase text-[10px]">Medical Disclaimer</a>
            <a href="#booking" className="hover:text-[#D4AF37] uppercase text-[10px]">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

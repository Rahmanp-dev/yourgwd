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
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

// Sri Skin Treatments Data
const SRI_TREATMENTS = [
  {
    id: 'vitiligo',
    name: 'Vitiligo Light Therapy (PUVA / NBUVB)',
    tagline: 'Targeted phototherapy for melanocyte stimulation',
    description: 'A scientifically validated phototherapy treatment that utilizes specific wavelengths of ultraviolet radiation (Narrowband UVB) to stimulate pigment-producing cells (melanocytes) in vitiligo patches. Highly effective, safe, and done under strict clinical monitoring.',
    benefits: [
      'Stimulates repigmentation in active and stable vitiligo patches',
      'Narrowband UVB avoids the need for oral psoralen medication',
      'Safe for kids and pregnant women under expert guidance',
      'Maintains stable pigment long-term with zero scarring'
    ],
    duration: '10-20 Mins',
    frequency: '2-3 sessions per week, for 3-6 months',
    idealFor: 'Segmental, focal, or generalized vitiligo depigmentation',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'qswitched',
    name: 'Q-Switched Laser Resurfacing',
    tagline: 'Precision laser fragmentation of dermal pigments',
    description: 'An advanced laser treatment targeting excess melanin deposits deep in the skin. The high-intensity laser pulse lasts only nanoseconds, breaking pigment particles into tiny fragments which are naturally cleared by the immune system.',
    benefits: [
      'Targets melasma, freckles, age spots, and birthmarks safely',
      'Improves dermal pigment without damaging surface skin layer',
      'Stimulates deep collagen remodeling for skin rejuvenation',
      'No peeling or significant downtime – resume work same day'
    ],
    duration: '30-45 Mins',
    frequency: '4-6 sessions, 3-4 weeks apart',
    idealFor: 'Stubborn hormonal melasma, post-inflammatory hyperpigmentation, tattoos',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tightening',
    name: 'Advanced Skin Tightening',
    tagline: 'Deep thermal collagen synthesis & tissue lifting',
    description: 'Utilizes high-intensity focused ultrasound (HIFU) or multi-polar radiofrequency (RF) to deliver precise thermal energy to the deep structural layers of the skin. This triggers a natural healing response, generating fresh, tight collagen fibers.',
    benefits: [
      'Lifts sagging cheeks, jowls, and refines jawline contours',
      'Smoothens loose neck skin and deep nasolabial folds',
      'Non-surgical and non-invasive alternative to surgical face-lifts',
      'Results improve continuously over 2-3 months post-session'
    ],
    duration: '50 Mins',
    frequency: '1-3 sessions per year (HIFU) or monthly maintenance (RF)',
    idealFor: 'Loose jowls, double chin, fine lines, skin laxity',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  }
];

// Sri Skin Quiz Questions
const SRI_QUIZ = [
  {
    id: 'concern',
    question: 'What is your primary skin condition concern?',
    options: [
      { label: 'Loss of pigment (white patches) on face or body', value: 'vitiligo' },
      { label: 'Stubborn dark spots, melasma, or pigmentation marks', value: 'qswitched' },
      { label: 'Sagging skin, double chin, and loose facial contours', value: 'tightening' },
      { label: 'A combination of dullness and fine lines', value: 'qswitched' }
    ]
  },
  {
    id: 'duration',
    question: 'How long have you been observing this concern?',
    options: [
      { label: 'Just recently developed (less than 6 months ago)', value: 'vitiligo' },
      { label: 'Gradually developing (6 months to 2 years)', value: 'qswitched' },
      { label: 'Long-standing concern (more than 2 years)', value: 'tightening' }
    ]
  },
  {
    id: 'skinType',
    question: 'What is your tolerance for recovery time?',
    options: [
      { label: 'Need zero downtime – return to routine immediately', value: 'vitiligo' },
      { label: 'Can tolerate mild, temporary redness for a day or two', value: 'qswitched' },
      { label: 'Prefer non-invasive sessions spread across weeks', value: 'tightening' }
    ]
  }
];

export default function SriSkinBanjaraHillsPage() {
  // Treatments Selector State
  const [selectedTxId, setSelectedTxId] = useState('vitiligo');

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizRecommendation, setQuizRecommendation] = useState(null);

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'vitiligo',
    date: '',
    time: 'morning',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Quiz Answers Handler
  const handleQuizAnswer = (value) => {
    const updatedAnswers = { ...quizAnswers, [quizIndex]: value };
    setQuizAnswers(updatedAnswers);

    if (quizIndex < SRI_QUIZ.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      // Logic: Prioritize the primary concern at index 0
      const primaryConcern = updatedAnswers[0];
      const matched = SRI_TREATMENTS.find(t => t.id === primaryConcern) || SRI_TREATMENTS[0];
      setQuizRecommendation(matched);
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizAnswers({});
    setQuizFinished(false);
    setQuizRecommendation(null);
  };

  // Booking Form Validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name.trim()) {
      tempErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      tempErrors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!form.date) {
      tempErrors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = 'Date cannot be in the past';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate elite clinical booking flow
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess({
        appointmentId: `SRI-${Math.floor(100000 + Math.random() * 900000)}`,
        doctorName: 'Dr. D. Sudha Vani (MBBS, MD)',
        ...form,
        treatmentName: SRI_TREATMENTS.find(t => t.id === form.treatment)?.name || form.treatment
      });
    }, 1200);
  };

  const activeTreatment = SRI_TREATMENTS.find(t => t.id === selectedTxId);

  return (
    <div className="min-h-screen text-[#2D2A2A] font-sans selection:bg-[#FA8072]/20 relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="absolute top-12 left-[-15%] w-[450px] h-[450px] rounded-full bg-[#FA8072]/6 filter blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FFD6C8]/15 filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#FA8072]/5 filter blur-[100px] pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-white/40 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FA8072] to-[#FF9E8B] flex items-center justify-center shadow-md">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm md:text-base tracking-wide text-slate-800">Sri Skin & Cosmetology</span>
              <span className="text-[9px] text-[#FA8072] tracking-wider uppercase font-bold">Banjara Hills</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#expert" className="hover:text-[#FA8072] transition-colors">Dr. Sudha Vani</a>
            <a href="#services" className="hover:text-[#FA8072] transition-colors">Services</a>
            <a href="#quiz" className="hover:text-[#FA8072] transition-colors">Skin Quiz</a>
            <a href="#results" className="hover:text-[#FA8072] transition-colors">Case Studies</a>
          </div>
          <a
            href="#book"
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FA8072] hover:bg-[#e0685b] rounded-full shadow-md transition-all hover:scale-98 active:scale-95"
          >
            Book Consult
          </a>
        </div>
      </nav>

      <section className="relative pt-16 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/50 shadow-sm text-xs font-bold text-[#FA8072]">
            <Award className="w-4 h-4 text-[#FA8072]" />
            25+ Years of Clinical Dermatology Trust
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Scientifically Proven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA8072] to-[#FF9E8B]">
              Dermatological Care.
            </span>
          </h1>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            Sri Skin & Cosmetology Centre in Banjara Hills is Hyderabad\'s premier destination for specialized phototherapy and laser treatments. Under the leadership of <strong className="text-slate-800 font-bold">Dr. D. Sudha Vani</strong>, we deliver targeted, evidence-based dermatological care.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#book"
              className="px-8 py-4 rounded-full bg-[#FA8072] hover:bg-[#e0685b] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#FA8072]/20 hover:shadow-[#FA8072]/35 transition-all flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm border border-white/40 text-slate-700 font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-sm"
            >
              Explore Services
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FA8072]" />
              Phototherapy Unit
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#FA8072]" />
              Q-switched Laser
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative p-3 bg-white/60 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-2xl">
            <div className="w-80 h-96 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
                alt="Phototherapy light treatment at Sri Skin Centre"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FA8072]/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#FA8072]" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-800">Dr. D. Sudha Vani</div>
                <div className="text-[10px] text-slate-500 font-medium">MBBS, MD (Dermatologist)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-t border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
            <div className="text-3xl font-black text-[#FA8072] mb-1">15,000+</div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Patients Repigmented & Treated</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
            <div className="text-3xl font-black text-[#FA8072] mb-1">25+ Years</div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Clinical Standing</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
            <div className="text-3xl font-black text-[#FA8072] mb-1">PUVA/UVB</div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Advanced Light Unit</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
            <div className="text-3xl font-black text-[#FA8072] mb-1">4.9 ★</div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Google Rating</div>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR BIO */}
      <section id="expert" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="relative p-3 bg-white/60 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-2xl">
              <div className="w-80 h-96 rounded-[2rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. D. Sudha Vani senior dermatologist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-[#FA8072] text-xs uppercase font-extrabold tracking-widest">Lead Medical Specialist</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Dr. D. Sudha Vani
            </h2>
            <div className="inline-block px-3.5 py-1.5 bg-white/90 border border-white/50 rounded-lg shadow-sm text-xs font-bold text-[#FA8072]">
              MBBS, MD (Dermatology, Venereology & Leprosy)
            </div>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Dr. D. Sudha Vani is one of Hyderabad\'s most distinguished clinical dermatologists, with a rich practice spanning more than two and a half decades in Banjara Hills. She specializes in targeted clinical phototherapy and advanced aesthetic lasers.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Known for her pioneering work in Vitiligo Light Therapy (Narrowband UVB) and skin rejuvenation, Dr. Sudha Vani is highly respected for her diagnostic accuracy and patient-centered treatment paths. She believes in treating skin disorders from their pathogenetic roots while minimizing side effects.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-[#FA8072]" />
                  Phototherapy Pioneer
                </div>
                <p className="text-[11px] text-slate-500">Equipped with state-of-the-art PUVA & NBUVB chambers.</p>
              </div>
              <div className="p-5 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-[#FA8072]" />
                  Pigment Solutions
                </div>
                <p className="text-[11px] text-slate-500">Decades of success in melasma, vitiligo, and hyperpigmentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS SELECTOR */}
      <section id="services" className="py-24 px-6 bg-white/30 backdrop-blur-sm border-t border-b border-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#FA8072] uppercase">Expert Treatments</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Clinical Specialties</h2>
            <p className="text-slate-600 text-xs md:text-sm">
              Discover our primary clinical treatments. Click to view descriptions, timelines, and targeted benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 flex flex-col gap-4">
              {SRI_TREATMENTS.map((t) => {
                const isActive = t.id === selectedTxId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTxId(t.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FA8072] to-[#FF9E8B] text-white border-transparent shadow-lg shadow-[#FA8072]/15'
                        : 'bg-white/70 backdrop-blur-sm text-slate-700 border-white/40 shadow-sm hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="font-extrabold text-sm md:text-base">{t.name}</div>
                    <div className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                      {t.tagline}
                    </div>
                  </button>
                );
              })}
            </div>

            {activeTreatment && (
              <div className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-xl grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FA8072]">Medical Treatment Profile</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeTreatment.name}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{activeTreatment.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Expected Results & Advantages:</h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {activeTreatment.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FA8072] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/50">
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Standard Session</div>
                      <div className="text-xs font-bold text-slate-700">{activeTreatment.duration}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Ideal Frequency</div>
                      <div className="text-xs font-bold text-slate-700">{activeTreatment.frequency}</div>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#book"
                      onClick={() => setForm(prev => ({ ...prev, treatment: activeTreatment.id }))}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FA8072] hover:bg-[#e0685b] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md transition-all"
                    >
                      Book Treatment
                      <ArrowRight className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-white/50 shadow-sm p-1.5 bg-white/80">
                    <img
                      src={activeTreatment.image}
                      alt={activeTreatment.name}
                      className="w-full h-44 object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFF1ED] border border-white/40 text-[11px] text-slate-600 leading-relaxed shadow-sm">
                    <strong className="text-[#FA8072] block mb-1">Clinical Indication:</strong>
                    {activeTreatment.idealFor}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 5. SKIN ASSESSMENT QUESTIONNAIRE */}
      <section id="quiz" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#FA8072] uppercase tracking-widest">Self-Discovery Tool</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Virtual Diagnosis Aid</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Answer these 3 clinical profile questions to receive an initial suggestion for the most suitable dermatology or laser treatment at our clinic.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <HelpCircle className="w-4 h-4 text-[#FA8072]" />
                Takes under 1 minute.
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/60 border border-white/40 rounded-2xl p-6 min-h-[320px] flex flex-col justify-between shadow-inner">
              {!quizFinished ? (
                <>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                      <span>STEP {quizIndex + 1} OF {SRI_QUIZ.length}</span>
                      <span className="text-[#FA8072]">{Math.round((quizIndex / SRI_QUIZ.length) * 100)}% COMPLETE</span>
                    </div>

                    <h3 className="text-base md:text-lg font-extrabold text-slate-800">
                      {SRI_QUIZ[quizIndex].question}
                    </h3>

                    <div className="flex flex-col gap-3">
                      {SRI_QUIZ[quizIndex].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizAnswer(opt.value)}
                          className="text-left w-full p-4 rounded-xl bg-white border border-slate-100 hover:border-[#FA8072] text-xs font-bold text-slate-700 shadow-sm transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-4 leading-relaxed">
                    *Disclaimer: This diagnostic aid is for educational purposes only and does not replace professional clinical advice from Dr. Sudha Vani.
                  </div>
                </>
              ) : (
                <div className="space-y-6 text-center py-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[#FA8072]/10 text-[#FA8072] rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Recommended Therapy</span>
                    <h3 className="text-xl font-black text-slate-800">{quizRecommendation?.name}</h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">{quizRecommendation?.tagline}</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-100 text-left max-w-md mx-auto shadow-sm">
                    <span className="font-extrabold text-[10px] text-[#FA8072] block mb-1">Clinical Insight:</span>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      Given your answers, the {quizRecommendation?.name} protocol is highly recommended as a starting clinical evaluation.
                    </p>
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    <button
                      onClick={handleResetQuiz}
                      className="px-4 py-2.5 bg-white border border-slate-200 text-slate-500 rounded-full text-xs font-bold hover:bg-slate-50 shadow-sm"
                    >
                      Reset Quiz
                    </button>
                    <a
                      href="#book"
                      onClick={() => {
                        if (quizRecommendation) {
                          setForm(prev => ({ ...prev, treatment: quizRecommendation.id }));
                        }
                      }}
                      className="px-5 py-2.5 bg-[#FA8072] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#e0685b] transition-all"
                    >
                      Request Session Now
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 6. RESULTS SHOWCASE */}
      <section id="results" className="py-24 px-6 bg-white/30 backdrop-blur-sm border-t border-b border-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#FA8072] uppercase">Success Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Clinical Outcomes</h2>
            <p className="text-slate-600 text-xs md:text-sm">
              Documented case profiles demonstrating successful clinical recovery and skin improvements at our Banjara Hills centre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                concern: 'Active Vitiligo Depigmentation (Focal)',
                treatment: 'Vitiligo Light Therapy (PUVA/NBUVB)',
                duration: '6 Months (48 Sessions)',
                outcome: '90% repigmentation achieved on facial patches, stable margins, and highly satisfied patient.',
                image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800'
              },
              {
                concern: 'Stubborn Dermal Melasma (Hormonal)',
                treatment: 'Q-Switched Laser Resurfacing',
                duration: '4 Months (5 Sessions)',
                outcome: 'Significant lightening of dermal pigmentation, completely cleared blemishes, and even tone.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
              },
              {
                concern: 'Mild Jowl Laxity & Loose Skin',
                treatment: 'Skin Tightening (HIFU)',
                duration: '3 Months (2 Sessions)',
                outcome: 'Noticeable elevation of cheek fat pads, sharper mandibular angles, and tighter dermal texture.',
                image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="h-44 rounded-2xl overflow-hidden shadow-inner p-1 bg-white border border-slate-100">
                  <img
                    src={study.image}
                    alt={study.concern}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-bold text-[#FA8072] uppercase tracking-wider block">Verified Study {idx + 1}</span>
                  <h3 className="text-base font-extrabold text-slate-800">{study.concern}</h3>
                  <div className="text-[11px] text-slate-500">
                    <strong>Therapy:</strong> {study.treatment}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <strong>Timeline:</strong> {study.duration}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {study.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#FA8072] uppercase">Feedback</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Patients Experience</h2>
          <p className="text-slate-600 text-xs md:text-sm">
            Read real feedback from patients who completed their treatment paths with Dr. Sudha Vani.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Rahul Verma',
              role: 'Hyderabad',
              rating: 5,
              text: 'Dr. Sudha Vani is highly experienced. My vitiligo patches had stable depigmentation for 3 years. After starting NBUVB light therapy here, I have seen almost complete recovery. Exceptional medical clinic.'
            },
            {
              name: 'Priya Naidu',
              role: 'Banjara Hills',
              rating: 5,
              text: 'The Q-switched laser treatment for my melasma worked wonders. I had tried several creams with no luck. The luxury glassmorphic card design and cozy clinic setting make visits extremely comfortable.'
            },
            {
              name: 'Dr. K. Rao',
              role: 'Secunderabad',
              rating: 5,
              text: 'As a medical professional myself, I value Dr. Sudha Vani\'s scientific approach. She does not push unnecessary cosmetic fillers. The HIFU skin tightening results are subtle, natural, and beautiful.'
            }
          ].map((rev, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FA8072] text-[#FA8072]" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FA8072]/10 text-[#FA8072] font-bold text-xs flex items-center justify-center border border-white/60">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{rev.name}</div>
                  <div className="text-[10px] text-slate-400">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING FORM */}
      <section id="book" className="py-24 px-6 bg-white/30 backdrop-blur-sm border-t border-white/40">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-12 shadow-xl">
            
            {!bookingSuccess ? (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#FA8072]/10 text-[#FA8072] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Priority Clinical Booking</h2>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Schedule your session with Dr. D. Sudha Vani. We will call back to confirm your appointment.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Patient Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#FA8072] text-xs text-slate-800"
                          placeholder="Full Name"
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5 shrink-0" />{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Mobile Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#FA8072] text-xs text-slate-800"
                          placeholder="e.g. 9849303221"
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5 shrink-0" />{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#FA8072] text-xs text-slate-800"
                          placeholder="Email address"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5 shrink-0" />{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Select Clinical Area</label>
                      <div className="relative">
                        <select
                          name="treatment"
                          value={form.treatment}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#FA8072] text-xs text-slate-700 appearance-none font-bold"
                        >
                          <option value="vitiligo">Vitiligo Light Therapy (PUVA/NBUVB)</option>
                          <option value="qswitched">Q-Switched Laser Resurfacing</option>
                          <option value="tightening">Advanced Skin Tightening</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Preferred Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#FA8072] text-xs text-slate-700"
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5 shrink-0" />{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Preferred Slot</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['morning', 'afternoon', 'evening'].map((slot) => {
                          const isSelected = form.time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, time: slot }))}
                              className={`py-3 px-1 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all border ${
                                isSelected
                                  ? 'bg-[#FA8072] text-white border-transparent shadow-sm'
                                  : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Condition History / Special Requests</label>
                    <textarea
                      name="notes"
                      rows="3"
                      value={form.notes}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#FA8072] text-xs text-slate-800"
                      placeholder="List any past dermatological details or concerns (optional)..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FA8072] hover:bg-[#e0685b] disabled:opacity-50 text-white font-extrabold text-xs py-4 rounded-full transition-all shadow-md uppercase tracking-widest"
                    >
                      {isSubmitting ? 'Registering Booking...' : 'Request Appointment'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-6 py-6">
                <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Appointment Registered</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Your request has been staged in the Sri Skin & Cosmetology Centre system. We will call you shortly to confirm the physician slot.
                  </p>
                </div>

                <div className="p-6 bg-white/90 border border-white/50 rounded-2xl text-left max-w-md mx-auto space-y-3 shadow-md">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase">STAGED ID</span>
                    <span className="text-xs font-mono font-bold text-[#FA8072]">{bookingSuccess.appointmentId}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">PATIENT NAME</span>
                      <span className="font-extrabold text-slate-800">{bookingSuccess.name}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">MOBILE NUMBER</span>
                      <span className="font-extrabold text-slate-800">{bookingSuccess.phone}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">SPECIALTY AREA</span>
                      <span className="font-extrabold text-slate-800">{bookingSuccess.treatmentName}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">DATE & TIME</span>
                      <span className="font-extrabold text-slate-800">{bookingSuccess.date} ({bookingSuccess.time})</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[9px] text-slate-400 font-extrabold block uppercase">STAGED SPECIALIST</span>
                    <span className="text-xs font-bold text-[#FA8072]">{bookingSuccess.doctorName}</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setBookingSuccess(null)}
                    className="px-6 py-3 bg-white border border-slate-200 text-slate-500 rounded-full text-xs font-bold hover:bg-slate-50 shadow-sm transition-all"
                  >
                    Register Another Booking
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 9. LOCATION/HOURS FOOTER */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-white/40 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FA8072] to-[#FF9E8B] flex items-center justify-center shadow-md">
                <Sparkles className="text-white w-4.5 h-4.5" />
              </div>
              <span className="font-extrabold text-base tracking-wide text-slate-800">Sri Skin Centre</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Providing precision dermatology, vitiligo phototherapy, and premium laser aesthetics under one roof in Road No. 12, Banjara Hills, Hyderabad.
            </p>
            <div className="text-[10px] text-slate-400 pt-2">
              © {new Date().getFullYear()} Sri Skin & Cosmetology Centre. All Rights Reserved.
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Clinic Schedule</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                <span>Monday - Saturday</span>
                <span className="font-bold text-slate-700">10:30 AM - 6:30 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                <span>Sunday</span>
                <span className="text-[#FA8072] font-bold">Closed</span>
              </div>
            </div>
            <div className="pt-1 text-[10px] text-slate-400">
              *Physician consultations are by appointment only. Emergency dermatology cases are reviewed dynamically.
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Contact Information</h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FA8072] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=First+Floor,+Kimtee+Banjara+Heights,+Opposite+Pride+Honda+Showroom,+Road+No.+12,+Banjara+Hills,+Hyderabad,+Telangana+500034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FA8072] transition-colors"
                >
                  First Floor, Kimtee Banjara Heights, Opposite Pride Honda Showroom, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FA8072]" />
                <a href="tel:+919849303221" className="hover:text-[#FA8072] transition-colors font-bold text-slate-800">
                  +91 98493 03221
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FA8072]" />
                <a href="mailto:info@sriskincentre.com" className="hover:text-[#FA8072] transition-colors">
                  info@sriskincentre.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

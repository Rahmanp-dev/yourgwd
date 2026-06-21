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
  AlertCircle
} from 'lucide-react';

// Treatments Data
const CLINICA_TREATMENTS = [
  {
    id: 'morpheus8',
    name: 'Morpheus8 RF Microneedling',
    tagline: 'Sub-dermal adipose remodeling & skin tightening',
    description: 'A revolutionary fractional skin treatment that stimulates collagen production in the underlying layers of the dermis. By targeting the deeper layers of the skin, building blocks will reorganize themselves in a natural anti-aging process.',
    benefits: [
      'Reduces deep wrinkles and fine lines significantly',
      'Remodels sub-dermal fat for a sculpted jawline',
      'Improves active acne scars and uneven skin texture',
      'Minimally invasive with very little downtime'
    ],
    duration: '60 Mins',
    frequency: '3-4 sessions, 4-6 weeks apart',
    idealFor: 'Sagging skin, deep wrinkles, acne scarring, double chin',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial Syndeo',
    tagline: 'Deep cleansing, painless extraction & rich hydration',
    description: 'An invigorating treatment that delivers long-term skin health and can be tailored to meet the specific needs of all skin types. It offers instant, noticeable results with no downtime or irritation.',
    benefits: [
      'Detoxifies and extracts dead cells and debris painlessly',
      'Infuses skin with nourishing antioxidants and hyaluronic acid',
      'Restores instant plumpness, hydration, and luminous glow',
      'Reduces hyperpigmentation and refines pore appearance'
    ],
    duration: '45 Mins',
    frequency: 'Monthly maintenance recommended',
    idealFor: 'Dullness, congested skin, dryness, wedding preparation',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'laserhair',
    name: 'USFDA-Approved Laser Hair Reduction',
    tagline: 'Triple-wavelength pain-free permanent hair reduction',
    description: 'Enjoy smooth, hair-free skin with our medical-grade triple wavelength laser system. Targets hair follicles precisely at multiple depths for effective, comfortable, and permanent hair reduction.',
    benefits: [
      'Destroys hair roots safely without damaging surrounding skin',
      'Virtually pain-free cooling sapphire tip technology',
      'Effective on fine, medium, and coarse hair types',
      'Saves time and prevents painful ingrown hair from shaving'
    ],
    duration: '15-45 Mins (Depending on area)',
    frequency: '6-8 sessions, 4-6 weeks apart',
    idealFor: 'Unwanted facial or body hair, sensitive skin prone to waxing rash',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  }
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'concern',
    question: 'What is your primary skin concern today?',
    options: [
      { label: 'Acne scarring, sagging jawline, or deep wrinkles', value: 'morpheus8' },
      { label: 'Clogged pores, dullness, and dry skin texture', value: 'hydrafacial' },
      { label: 'Unwanted facial or body hair growth', value: 'laserhair' },
      { label: 'General anti-aging maintenance & prevention', value: 'morpheus8' }
    ]
  },
  {
    id: 'skinType',
    question: 'How would you describe your skin type?',
    options: [
      { label: 'Oily, acne-prone, and congested', value: 'hydrafacial' },
      { label: 'Dry, dehydrated, or flaky', value: 'hydrafacial' },
      { label: 'Sensitive, easily reddened, or inflamed', value: 'hydrafacial' },
      { label: 'Normal / combination skin', value: 'morpheus8' }
    ]
  },
  {
    id: 'experience',
    question: 'What is your priority for down-time?',
    options: [
      { label: 'No downtime at all – need instant results for an event', value: 'hydrafacial' },
      { label: '1-2 days of mild redness is fine for permanent correction', value: 'morpheus8' },
      { label: 'Painless, gradual sessions for permanent hair reduction', value: 'laserhair' }
    ]
  }
];

export default function ClinicaDermBanjaraHillsPage() {
  // Treatments Selector State
  const [selectedTreatmentId, setSelectedTreatmentId] = useState('morpheus8');
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedTreatment, setRecommendedTreatment] = useState(null);

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'morpheus8',
    date: '',
    time: 'morning',
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
      // Calculate recommendation based on concern (highest priority) and general replies
      // Count frequency of values
      const values = Object.values(updatedAnswers);
      const counts = values.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});

      // Sort by frequency, fallback to concern value (index 0)
      let recommendation = updatedAnswers[0];
      let maxCount = 0;
      Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          recommendation = key;
        }
      });

      const matchedTreatment = CLINICA_TREATMENTS.find(t => t.id === recommendation);
      setRecommendedTreatment(matchedTreatment);
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizAnswers({});
    setQuizCompleted(false);
    setRecommendedTreatment(null);
  };

  // Form Input Handlers
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
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!form.date) {
      newErrors.date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium clinical API scheduling
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessData({
        appointmentId: `CD-${Math.floor(100000 + Math.random() * 900000)}`,
        doctorName: 'Dr. Deepthi Atmakuri (MBBS, DDVL)',
        ...form,
        treatmentName: CLINICA_TREATMENTS.find(t => t.id === form.treatment)?.name || form.treatment
      });
    }, 1200);
  };

  const activeTreatment = CLINICA_TREATMENTS.find(t => t.id === selectedTreatmentId);

  return (
    <div className="bg-[#FFF5F5] min-h-screen text-[#332222] font-sans selection:bg-[#FA8072]/20">
      
      {/* 1. HERO SECTION */}
      <nav className="sticky top-0 z-50 w-full bg-[#FFF5F5]/85 backdrop-blur-md border-b border-[#FFEAEA]/40 px-6 py-4 shadow-[0_2px_10px_rgba(235,214,214,0.3)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] flex items-center justify-center shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff]">
              <Sparkles className="text-[#FA8072] w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider uppercase text-[#332222]">Clinica Derm</span>
              <span className="text-[10px] text-slate-500 tracking-widest uppercase">Banjara Hills</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-[#FA8072] transition-colors">Doctor Bio</a>
            <a href="#treatments" className="hover:text-[#FA8072] transition-colors">Treatments</a>
            <a href="#assessment" className="hover:text-[#FA8072] transition-colors">Skin Quiz</a>
            <a href="#showcase" className="hover:text-[#FA8072] transition-colors">Case Studies</a>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FA8072] hover:bg-[#e0685b] rounded-xl transition-all shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:scale-98 active:scale-95"
          >
            Book Session
          </a>
        </div>
      </nav>

      <section className="relative pt-12 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-xs font-semibold text-[#FA8072] border border-[#FFEAEA]/20">
            <Award className="w-4 h-4 text-[#FA8072]" />
            Bespoke Medical & Aesthetic Dermatology
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Aesthetics Rooted in <br />
            <span className="text-[#FA8072]">Clinical Excellence.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
            Welcome to Clinica Derm in Banjara Hills, Hyderabad. Led by senior dermatologist <strong className="text-[#332222]">Dr. Deepthi Atmakuri</strong>, we combine state-of-the-art USFDA-approved technologies like Morpheus8 with scientific precision to restore your skin\'s natural vitality.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#FA8072] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:bg-[#e0685b] transition-all duration-300"
            >
              Request Priority Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 bg-[#FFF5F5] text-[#FA8072] font-bold text-sm px-8 py-4 rounded-2xl shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#ebd6d6,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
            >
              Explore Treatments
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FA8072]" />
              USFDA Standards
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FA8072]" />
              No Long Waiting
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-80 h-96 relative rounded-[2.5rem] bg-[#FFF5F5] p-4 shadow-[10px_10px_20px_#ebd6d6,-10px_-10px_20px_#ffffff] border border-[#FFEAEA]/40">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
              alt="Dermatology Treatment Suite at Clinica Derm"
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#FFF5F5] px-5 py-4 rounded-2xl shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] border border-[#FFEAEA]/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FA8072]/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#FA8072]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Dr. Deepthi Atmakuri</div>
                <div className="text-[10px] text-slate-500">MBBS, DDVL (Dermatologist)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-[#FFF5F5] py-10 px-6 border-t border-b border-[#FFEAEA]/40 shadow-[inset_0_4px_10px_rgba(235,214,214,0.1)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center bg-[#FFF5F5] p-5 rounded-2xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/10">
            <div className="text-3xl font-extrabold text-[#FA8072] mb-1">8,500+</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Happy Patients</div>
          </div>
          <div className="text-center bg-[#FFF5F5] p-5 rounded-2xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/10">
            <div className="text-3xl font-extrabold text-[#FA8072] mb-1">12+ Years</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Expertise</div>
          </div>
          <div className="text-center bg-[#FFF5F5] p-5 rounded-2xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/10">
            <div className="text-3xl font-extrabold text-[#FA8072] mb-1">100%</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">USFDA Laser Tech</div>
          </div>
          <div className="text-center bg-[#FFF5F5] p-5 rounded-2xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/10">
            <div className="text-3xl font-extrabold text-[#FA8072] mb-1">4.9 ★</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Google Rating</div>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR BIO */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="w-80 h-96 relative rounded-[2.5rem] bg-[#FFF5F5] p-4 shadow-[10px_10px_20px_#ebd6d6,-10px_-10px_20px_#ffffff] border border-[#FFEAEA]/40">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Deepthi Atmakuri, Dermatologist at Clinica Derm"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-[#FA8072] font-bold text-xs uppercase tracking-widest">Lead Dermatologist</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Dr. Deepthi Atmakuri
            </h2>
            <div className="inline-block px-3 py-1 bg-[#FFF5F5] rounded-lg shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-sm font-semibold text-[#FA8072]">
              MBBS, DDVL (Dermatology & Venereology)
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Dr. Deepthi Atmakuri is a highly regarded medical and cosmetic dermatologist in Banjara Hills, Hyderabad. Armed with extensive clinical training in medical trichology, laser sciences, and anti-aging therapies, she has dedicated her career to providing evidence-based, customized skincare.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Her signature approach values skin integrity and long-term health. By custom-tailoring sub-dermal microneedling, laser wavelengths, and clinical hydration, she crafts treatments that yield outstanding, naturally elegant rejuvenations.
            </p>
            
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] rounded-xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/20">
                <Check className="w-5 h-5 text-[#FA8072] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Customized Care</div>
                  <div className="text-slate-500">Every treatment starts with deep clinical skin mapping.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] rounded-xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/20">
                <Check className="w-5 h-5 text-[#FA8072] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Advanced Safety</div>
                  <div className="text-slate-500">Only USFDA-cleared medical tech and premium products used.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS SELECTOR */}
      <section id="treatments" className="py-24 px-6 bg-[#FFF5F5] border-t border-b border-[#FFEAEA]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#FA8072] uppercase">Signature Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Clinically Proven Solutions</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Select one of our primary treatments to view details, timelines, ideal frequencies, and medical benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Buttons List */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {CLINICA_TREATMENTS.map((t) => {
                const isActive = t.id === selectedTreatmentId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTreatmentId(t.id)}
                    className={`text-left p-5 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'bg-[#FA8072] text-white shadow-[inset_4px_4px_8px_#c25c50,inset_-4px_-4px_8px_#ffa494]'
                        : 'bg-[#FFF5F5] text-slate-700 shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#ebd6d6,inset_-4px_-4px_8px_#ffffff]'
                    }`}
                  >
                    <div className="font-bold text-sm md:text-base">{t.name}</div>
                    <div className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                      {t.tagline}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Treatment Detail Panel */}
            {activeTreatment && (
              <div className="lg:col-span-8 bg-[#FFF5F5] rounded-3xl p-8 shadow-[8px_8px_16px_#ebd6d6,-8px_-8px_16px_#ffffff] border border-[#FFEAEA]/30 grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FA8072]">Selected Treatment</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeTreatment.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{activeTreatment.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Medical Benefits:</h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {activeTreatment.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#FA8072] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#FFEAEA]/40">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Session Duration</div>
                      <div className="text-xs font-bold text-slate-800">{activeTreatment.duration}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Recommended Cycle</div>
                      <div className="text-xs font-bold text-slate-800">{activeTreatment.frequency}</div>
                    </div>
                  </div>
                  
                  <div>
                    <a
                      href="#booking"
                      onClick={() => setForm(prev => ({ ...prev, treatment: activeTreatment.id }))}
                      className="inline-flex items-center gap-2 bg-[#FA8072] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff] hover:bg-[#e0685b] transition-all"
                    >
                      Book {activeTreatment.name}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-[inner_3px_3px_6px_#ebd6d6,inner_-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/25 p-2 bg-[#FFF5F5]">
                    <img
                      src={activeTreatment.image}
                      alt={activeTreatment.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-[11px] text-slate-500">
                    <span className="font-bold text-[#FA8072] block mb-1">Ideal For:</span>
                    {activeTreatment.idealFor}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. SKIN ASSESSMENT QUESTIONNAIRE */}
      <section id="assessment" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#FFF5F5] rounded-3xl p-8 md:p-12 shadow-[8px_8px_16px_#ebd6d6,-8px_-8px_16px_#ffffff] border border-[#FFEAEA]/40">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#FA8072] uppercase tracking-widest">Self-Assessment</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Virtual Skin Clinic</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Take our 3-step interactive questionnaire designed by Dr. Deepthi Atmakuri to find the most suitable medical aesthetic treatment for your skin profile.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#FA8072]">
                <Activity className="w-4 h-4" />
                Tailored Results in 60 Seconds
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FFF5F5] p-6 rounded-2xl shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/20 min-h-[320px] flex flex-col justify-between">
              {!quizCompleted ? (
                <>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                      <span>QUESTION {currentQuestionIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
                      <span className="text-[#FA8072]">{Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100)}% COMPLETE</span>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold text-slate-800">
                      {QUIZ_QUESTIONS[currentQuestionIndex].question}
                    </h3>

                    <div className="flex flex-col gap-3">
                      {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(opt.value)}
                          className="text-left w-full p-4 rounded-xl bg-[#FFF5F5] text-xs font-semibold text-slate-700 shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-4">
                    *Note: This virtual assessment provides general clinical advice and is not a substitute for an in-person consultation with Dr. Deepthi Atmakuri.
                  </div>
                </>
              ) : (
                <div className="space-y-6 text-center py-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[#FA8072]/10 text-[#FA8072] rounded-full flex items-center justify-center mx-auto shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff]">
                      <BookmarkCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Your Recommendation</span>
                    <h3 className="text-xl font-bold text-slate-900">{recommendedTreatment?.name}</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">{recommendedTreatment?.tagline}</p>
                  </div>

                  <div className="p-4 bg-[#FFF5F5] rounded-xl shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] text-left max-w-md mx-auto">
                    <span className="font-bold text-[11px] text-[#FA8072] block mb-1">Why this fits your profile:</span>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      Based on your primary concern and lifestyle preferences, our {recommendedTreatment?.name} will target the core dermatological structures.
                    </p>
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    <button
                      onClick={handleResetQuiz}
                      className="px-4 py-2.5 bg-[#FFF5F5] text-slate-500 rounded-xl text-xs font-bold shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff]"
                    >
                      Retake Quiz
                    </button>
                    <a
                      href="#booking"
                      onClick={() => {
                        if (recommendedTreatment) {
                          setForm(prev => ({ ...prev, treatment: recommendedTreatment.id }));
                        }
                      }}
                      className="px-5 py-2.5 bg-[#FA8072] text-white rounded-xl text-xs font-bold shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] hover:bg-[#e0685b] transition-all"
                    >
                      Book Session Now
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 6. RESULTS SHOWCASE */}
      <section id="showcase" className="py-24 px-6 bg-[#FFF5F5] border-t border-b border-[#FFEAEA]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#FA8072] uppercase">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Clinical Transformations</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Verified clinical outcomes documenting targeted treatment plans and patient transformations at Banjara Hills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                concern: 'Severe Acne Scarring & Pitting',
                treatment: 'Morpheus8 RF Microneedling',
                duration: '3 Sessions (Over 12 Weeks)',
                outcome: '70% reduction in deep scar depth, improved elasticity, and highly refined pore structure.',
                image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
              },
              {
                concern: 'Severe Dullness & Congestion',
                treatment: 'HydraFacial Syndeo',
                duration: '1 Session (Instant Glow)',
                outcome: 'Complete extraction of blackheads, deep hydration infusion, and immediate bridal radiance.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
              },
              {
                concern: 'Ingrown Hair & Coarse Growth',
                treatment: 'Laser Hair Reduction',
                duration: '6 Sessions (6 Months)',
                outcome: '95% reduction in hair density, completely cleared ingrown bumps, and velvet smooth skin.',
                image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-[#FFF5F5] rounded-3xl p-6 shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] border border-[#FFEAEA]/30 space-y-4">
                <div className="h-44 rounded-2xl overflow-hidden bg-[#FFF5F5] shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] p-1 border border-[#FFEAEA]/20">
                  <img
                    src={study.image}
                    alt={study.concern}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider block">Case Study {idx + 1}</span>
                  <h3 className="text-base font-bold text-slate-900">{study.concern}</h3>
                  <div className="text-xs text-slate-500">
                    <strong>Treatment:</strong> {study.treatment}
                  </div>
                  <div className="text-xs text-slate-500">
                    <strong>Timeline:</strong> {study.duration}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-[#FFEAEA]/40">
                    {study.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#FA8072] uppercase">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Our Patients Say</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Read authentic reviews from patients who experienced our signature treatments at Clinica Derm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Ananya Rao',
              role: 'Hyderabad',
              rating: 5,
              text: 'Dr. Deepthi Atmakuri is exceptional. I did 3 sessions of Morpheus8 for my acne scars and the improvement is unbelievable. The clinic design is beautiful and the soft pink styling makes it feel so premium and cozy.'
            },
            {
              name: 'Dr. Vikram Reddy',
              role: 'Banjara Hills',
              rating: 5,
              text: 'Best HydraFacial Syndeo in Hyderabad. The extraction was painless and my skin felt extremely hydrated. The team is very scientific and guides you properly. Highly recommend Clinica Derm.'
            },
            {
              name: 'Sneha Gupta',
              role: 'Secunderabad',
              rating: 5,
              text: 'Did my laser hair reduction here. It is practically painless compared to what I experienced elsewhere. Very professional staff and Dr. Deepthi reviews the settings personally.'
            }
          ].map((rev, idx) => (
            <div key={idx} className="bg-[#FFF5F5] rounded-3xl p-6 shadow-[6px_6px_12px_#ebd6d6,-6px_-6px_12px_#ffffff] border border-[#FFEAEA]/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FA8072] text-[#FA8072]" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#FFEAEA]/40 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FA8072]/15 text-[#FA8072] font-bold text-xs flex items-center justify-center shadow-[inset_1px_1px_3px_#ebd6d6,inset_-1px_-1px_3px_#ffffff]">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{rev.name}</div>
                  <div className="text-[10px] text-slate-400">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING FORM */}
      <section id="booking" className="py-24 px-6 bg-[#FFF5F5] border-t border-[#FFEAEA]/40">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFF5F5] rounded-3xl p-8 md:p-12 shadow-[10px_10px_20px_#ebd6d6,-10px_-10px_20px_#ffffff] border border-[#FFEAEA]/40">
            
            {!successData ? (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#FA8072]/10 text-[#FA8072] rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff]">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Priority Booking</h2>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Book a slot with Dr. Deepthi Atmakuri. Our team will verify your selection and call back to confirm.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF5F5] border border-[#FFEAEA]/60 shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] focus:outline-none focus:ring-1 focus:ring-[#FA8072]/50 text-xs text-slate-800"
                          placeholder="Your full name"
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mobile Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF5F5] border border-[#FFEAEA]/60 shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] focus:outline-none focus:ring-1 focus:ring-[#FA8072]/50 text-xs text-slate-800"
                          placeholder="e.g. 9876543210"
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF5F5] border border-[#FFEAEA]/60 shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] focus:outline-none focus:ring-1 focus:ring-[#FA8072]/50 text-xs text-slate-800"
                          placeholder="Your email address"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Selected Treatment</label>
                      <div className="relative">
                        <select
                          name="treatment"
                          value={form.treatment}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF5F5] border border-[#FFEAEA]/60 shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] focus:outline-none focus:ring-1 focus:ring-[#FA8072]/50 text-xs text-slate-700 appearance-none"
                        >
                          <option value="morpheus8">Morpheus8 RF Microneedling</option>
                          <option value="hydrafacial">HydraFacial Syndeo</option>
                          <option value="laserhair">Laser Hair Reduction</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Appointment Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF5F5] border border-[#FFEAEA]/60 shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] focus:outline-none focus:ring-1 focus:ring-[#FA8072]/50 text-xs text-slate-700"
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Preferred Time Slot</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['morning', 'afternoon', 'evening'].map((slot) => {
                          const isSelected = form.time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, time: slot }))}
                              className={`py-3 px-1 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${
                                isSelected
                                  ? 'bg-[#FA8072] text-white shadow-[inset_2px_2px_4px_#c25c50,inset_-2px_-2px_4px_#ffa494]'
                                  : 'bg-[#FFF5F5] text-slate-500 shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff]'
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
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Medical History / Special Requests</label>
                    <textarea
                      name="notes"
                      rows="3"
                      value={form.notes}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-[#FFF5F5] border border-[#FFEAEA]/60 shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] focus:outline-none focus:ring-1 focus:ring-[#FA8072]/50 text-xs text-slate-800"
                      placeholder="List any skin medications or allergies (optional)..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FA8072] hover:bg-[#e0685b] disabled:opacity-50 text-white font-bold text-sm py-4 rounded-2xl transition-all shadow-[4px_4px_8px_#ebd6d6,-4px_-4px_8px_#ffffff] uppercase tracking-wider"
                    >
                      {isSubmitting ? 'Scheduling Appointment...' : 'Submit Appointment Request'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-6 py-6">
                <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_6px_#ebd6d6,-3px_-3px_6px_#ffffff]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Session Staged Successfully</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Your appointment request has been registered in the Clinica Derm queue. Our support desk will call you within 15 minutes to confirm.
                  </p>
                </div>

                <div className="p-6 bg-[#FFF5F5] rounded-2xl shadow-[inset_3px_3px_6px_#ebd6d6,inset_-3px_-3px_6px_#ffffff] border border-[#FFEAEA]/30 text-left max-w-md mx-auto space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-[#FFEAEA]/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">APPOINTMENT ID</span>
                    <span className="text-xs font-mono font-bold text-[#FA8072]">{successData.appointmentId}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">PATIENT NAME</span>
                      <span className="font-bold text-slate-800">{successData.name}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">MOBILE NUMBER</span>
                      <span className="font-bold text-slate-800">{successData.phone}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">TREATMENT</span>
                      <span className="font-bold text-slate-800">{successData.treatmentName}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">DATE & TIME</span>
                      <span className="font-bold text-slate-800">{successData.date} ({successData.time})</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#FFEAEA]/40">
                    <span className="text-[9px] text-slate-400 font-bold block uppercase">ASSIGNED CLINICIAN</span>
                    <span className="text-xs font-bold text-[#FA8072]">{successData.doctorName}</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSuccessData(null)}
                    className="px-6 py-3 bg-[#FFF5F5] text-slate-600 rounded-xl text-xs font-bold shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#ebd6d6,inset_-2px_-2px_4px_#ffffff] transition-all"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 9. LOCATION/HOURS FOOTER */}
      <footer className="bg-[#FFF5F5] border-t border-[#FFEAEA]/40 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] flex items-center justify-center shadow-[2px_2px_4px_#ebd6d6,-2px_-2px_4px_#ffffff]">
                <Sparkles className="text-[#FA8072] w-4 h-4" />
              </div>
              <span className="font-bold text-base tracking-wider uppercase text-slate-900">Clinica Derm</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Scientific precision meets natural aesthetic design in Road No. 12, Banjara Hills, Hyderabad. Dedicated to medical-grade dermatological treatments.
            </p>
            <div className="text-[10px] text-slate-400 pt-2">
              © {new Date().getFullYear()} Clinica Derm. All Rights Reserved.
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Clinic Hours</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-[#FFEAEA]/30">
                <span>Monday - Saturday</span>
                <span className="font-bold text-slate-800">10:00 AM - 7:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FFEAEA]/30">
                <span>Sunday</span>
                <span className="text-[#FA8072] font-bold">Closed</span>
              </div>
            </div>
            <div className="pt-2 text-[10px] text-slate-400">
              *Appointments outside these hours must be scheduled at least 48 hours in advance.
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Contact details</h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FA8072] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=2nd+Floor,+H.No:+8-2-686,+16/2,+Road+No.+12,+beside+Pepperfry,+Banjara+Hills,+Hyderabad,+Telangana+500034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FA8072] transition-colors"
                >
                  2nd Floor, H.No: 8-2-686, 16/2, Road No. 12, beside Pepperfry, Banjara Hills, Hyderabad, Telangana 500034
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FA8072]" />
                <a href="tel:+916309801421" className="hover:text-[#FA8072] transition-colors font-bold text-slate-800">
                  +91 63098 01421
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FA8072]" />
                <a href="mailto:contact@clinicaderm.in" className="hover:text-[#FA8072] transition-colors">
                  contact@clinicaderm.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

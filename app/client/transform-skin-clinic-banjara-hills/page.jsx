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
  Stethoscope,
  Smile,
  CheckSquare
} from 'lucide-react';

// Clinic Details
const CLINIC_NAME = "Transform Skin & Cosmetic Clinic";
const DR_NAME = "Dr. Madhuri T J";
const DR_TITLE = "Lead Dermatologist & Cosmetic Surgeon";
const DR_QUALIFICATIONS = "MBBS, DVL (Gandhi Medical College)";
const CLINIC_PHONE = "+91 9032799498";
const CLINIC_EMAIL = "info@transformskinclinic.in";
const CLINIC_ADDRESS = "Flora Apartment, No. 3, Near Almond House, Opposite SBH Mufakkam Jah College, Road No. 3, Banjara Hills, Hyderabad, Telangana 500034";

// Treatments Data
const TREATMENT_CATEGORIES = [
  {
    id: 'pigmentation',
    name: 'Pigmentation Treatment',
    tagline: 'Restore your natural, even-toned complexion',
    description: 'Clinical therapies designed to safely target epidermal and dermal pigmentation. We use advanced chemical peels, Q-switched lasers, and tailored depigmenting micro-infusions to break down excess melanin and brighten the skin.',
    sessions: '4 - 6 Sessions',
    priceRange: '₹3,500 - ₹8,000 per session',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Reduces stubborn melasma & post-inflammatory marks',
      'Smoothens uneven skin patches and age spots',
      'Implements safe, dermatologically approved skin-brightening agents',
      'Minimal downtime with customized home-care protocols'
    ]
  },
  {
    id: 'scar-revision',
    name: 'Laser Scar Revision',
    tagline: 'Precise resurfacing for smooth, texture-free skin',
    description: 'State-of-the-art fractional lasers and subcision techniques to reconstruct deep tissue scars. Ideal for acne indentations, post-injury marks, and surgical scars. This stimulates natural collagen production to level the skin.',
    sessions: '3 - 5 Sessions',
    priceRange: '₹5,000 - ₹12,000 per session',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Significantly reduces acne pitting and rolling scars',
      'Promotes deep collagen synthesis and remodeling',
      'Improves skin texture and tightens pores',
      'Highly controlled laser depths to prevent hyperpigmentation'
    ]
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging Therapy',
    tagline: 'Restore structural support and youthfulness',
    description: 'Advanced non-surgical facial rejuvenation utilizing medical-grade radiofrequency, collagen boosters, and minimal neuromodulators. Designed to restore lost volume, lift lax contours, and diminish fine lines.',
    sessions: '1 - 2 Sessions',
    priceRange: '₹8,000 - ₹25,000 per session',
    image: 'https://images.unsplash.com/photo-1614859324967-bdf461fcf7ec?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Softens static wrinkles and deep forehead lines',
      'Restores cheek volume and defines jawline contours',
      'Non-invasive lifting with long-term cellular rejuvenation',
      'Natural-looking results tailored to your unique structure'
    ]
  }
];

// Skin Assessment Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'primary-concern',
    question: 'What is your primary skin concern?',
    options: [
      { label: 'Dark spots, uneven patches, or pregnancy melasma', value: 'pigmentation' },
      { label: 'Deep acne scars, textured pitting, or stretch marks', value: 'scar-revision' },
      { label: 'Sagging skin, fine lines, or loss of facial volume', value: 'anti-aging' }
    ]
  },
  {
    id: 'skin-sensitivity',
    question: 'How does your skin react to new products or sun exposure?',
    options: [
      { label: 'Reddens easily, stings or feels tight (Sensitive)', value: 'pigmentation' },
      { label: 'Occasionally dry, but generally resilient (Normal)', value: 'scar-revision' },
      { label: 'Oily and prone to periodic breakouts (Acne-prone)', value: 'scar-revision' }
    ]
  },
  {
    id: 'downtime-tolerance',
    question: 'What is your preferred recovery time or clinical downtime?',
    options: [
      { label: 'Zero downtime - need to go to work immediately', value: 'pigmentation' },
      { label: '1 to 3 days of mild flaking or redness is acceptable', value: 'scar-revision' },
      { label: 'No constraint - I want the most comprehensive results', value: 'anti-aging' }
    ]
  }
];

// Testimonials Data
const TESTIMONIALS = [
  {
    name: 'Ananya Rao',
    role: 'Banjara Hills Resident',
    rating: 5,
    feedback: 'Dr. Madhuri is exceptionally patient and analytical. I consulted her for persistent melasma which had failed other treatments. Her Mint system peel and laser protocol worked wonders in just 4 sessions.',
    date: '2 weeks ago'
  },
  {
    name: 'Siddharth Reddy',
    role: 'IT Consultant',
    rating: 5,
    feedback: 'Excellent clinic environment. I went for laser scar revision. The fractional laser technology they use is top-notch, and the procedure was virtually pain-free. My skin feels significantly smoother now.',
    date: '1 month ago'
  },
  {
    name: 'Priyanka Sen',
    role: 'Entrepreneur',
    rating: 5,
    feedback: 'I had my first anti-aging treatment at Transform. Dr. Madhuri took the time to explain the collagen remodeling cycle. Very clean clinic, highly professional staff, and highly noticeable results.',
    date: '3 weeks ago'
  }
];

// Case Studies (Before & After)
const CASE_STUDIES = [
  {
    title: 'Hyperpigmentation Reduction',
    type: 'Pigmentation Treatment',
    duration: '4 Sessions',
    beforeImage: 'https://images.unsplash.com/photo-1607606327832-8ef348412006?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1522337094133-f6750a029f90?auto=format&fit=crop&q=80&w=800',
    details: 'Achieved 85% clearance of epidermal pigmentation patches and restored even skin glow.'
  },
  {
    title: 'Acne Scar Smoothing',
    type: 'Laser Scar Revision',
    duration: '5 Sessions',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    details: 'Significant improvement in deep rolling acne scars with fractional laser resurfacing.'
  }
];

export default function TransformSkinClinicPage() {
  // Treatments Selector State
  const [selectedTab, setSelectedTab] = useState('pigmentation');

  // Skin Assessment Questionnaire State
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [recommendedCategory, setRecommendedCategory] = useState(null);

  // Appointment Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'pigmentation',
    doctor: 'Dr. Madhuri T J',
    agreed: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Handle quiz selection
  const handleQuizAnswer = (value) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[quizIndex].id]: value };
    setAnswers(newAnswers);

    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      // Basic recommendation logic: match based on primary concern answers
      const primaryConcern = newAnswers['primary-concern'];
      const matched = TREATMENT_CATEGORIES.find(c => c.id === primaryConcern) || TREATMENT_CATEGORIES[0];
      setRecommendedCategory(matched);
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setAnswers({});
    setQuizComplete(false);
    setRecommendedCategory(null);
  };

  // Form input validation
  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Full name is required';
      } else if (value.trim().length < 3) {
        error = 'Name must be at least 3 characters long';
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        error = 'Mobile number is required';
      } else if (!/^[6-9]\d{9}$/.test(value.replace(/[\s-+]/g, ''))) {
        error = 'Please enter a valid 10-digit mobile number';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address';
      }
    } else if (name === 'date') {
      if (!value) {
        error = 'Appointment date is required';
      } else {
        const today = new Date();
        today.setHours(0,0,0,0);
        const selDate = new Date(value);
        if (selDate < today) {
          error = 'Appointment date cannot be in the past';
        }
      }
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));

    if (type !== 'checkbox') {
      const error = validateField(name, val);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'agreed' && key !== 'doctor') {
        const err = validateField(key, formData[key]);
        if (err) errors[key] = err;
      }
    });

    if (!formData.agreed) {
      errors.agreed = 'You must agree to the privacy terms';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setBookingRef(`TR-${Math.floor(100000 + Math.random() * 900000)}`);
      }, 1200);
    }
  };

  // Scroll helper
  const scrollToBooking = () => {
    const el = document.getElementById('appointment-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Sticky Header Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-200">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight block leading-none">{CLINIC_NAME}</span>
              <span className="text-xs text-emerald-600 font-medium tracking-wide">CLINICAL EXCELLENCE</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600 text-sm">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About the Doctor</a>
            <a href="#services" className="hover:text-emerald-600 transition-colors">Treatments</a>
            <a href="#skin-quiz" className="hover:text-emerald-600 transition-colors">Skin Assessment</a>
            <a href="#results" className="hover:text-emerald-600 transition-colors">Results</a>
            <a href="#testimonials" className="hover:text-emerald-600 transition-colors">Reviews</a>
          </div>
          <div>
            <button
              onClick={scrollToBooking}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-emerald-150 hover:shadow-emerald-250 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-emerald-25/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-100/60 border border-emerald-200/80 px-4 py-1.5 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Banjara Hills Premium Clinic</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Science-Backed Skin <br />
                <span className="text-emerald-600">Transformation</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Expert dermatological care by {DR_NAME}. Restore your confidence with customized, high-contrast, clinical therapies designed with state-of-the-art medical systems.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={scrollToBooking}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-350 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-base"
                >
                  <span>Consult Dr. Madhuri</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#services"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-8 py-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center space-x-2 text-base"
                >
                  <span>Explore Treatments</span>
                </a>
              </div>
              <div className="pt-4 flex items-center space-x-6 text-slate-500 text-xs">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>FDA Approved Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  <span>Evidence-Based Care</span>
                </div>
              </div>
            </div>
            {/* Hero Right */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-emerald-300 rounded-3xl rotate-3 opacity-20 filter blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Transform Clinic Consult Room"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">15+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">12k+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Treatments Completed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">99.4%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Satisfaction Rate</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Clinical Safety</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder / Head Doctor Bio */}
      <section id="about" className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-3xl -rotate-3 opacity-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                    alt={DR_NAME}
                    className="w-full h-[480px] object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Bio Info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-emerald-700 text-xs font-semibold">
                <Award className="w-4 h-4" />
                <span>Expert Dermatologist & Cosmetic Surgeon</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet the Founder: <span className="text-emerald-600">{DR_NAME}</span>
              </h2>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest leading-none">
                {DR_QUALIFICATIONS}
              </p>
              <div className="h-[2px] w-20 bg-emerald-500"></div>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Dr. Madhuri T J is a renowned dermatologist specializing in aesthetic dermatology, scar revision, and anti-aging therapies. With extensive training from premier medical institutes, she advocates for structured, personalized treatment programs that focus on restoring natural health and skin barrier integrity.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50 space-y-3">
                <p className="italic text-slate-600 text-base font-normal">
                  "Dermatology is not just about correcting imperfections; it is about restoring skin health at a cellular level, giving our patients the confidence they deserve."
                </p>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">— {DR_NAME}</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Osmania Medical Alumna</h4>
                    <p className="text-xs text-slate-500">Rigorous clinical education & certification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">International Tech Standards</h4>
                    <p className="text-xs text-slate-500">Equipped with latest global medical devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments & Services Selector */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Clinical <span className="text-emerald-600">Treatments & Services</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              Select a specialized category below to view details, timelines, clinical benefits, and transparent pricing.
            </p>
          </div>

          {/* Interactive Widget */}
          <div className="mt-12">
            {/* Tabs */}
            <div className="flex justify-center border-b border-slate-200">
              <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl space-x-1">
                {TREATMENT_CATEGORIES.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedTab(category.id)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                      selectedTab === category.id
                        ? 'bg-white text-emerald-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-950'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Panel */}
            <div className="mt-10 bg-slate-50/50 p-6 sm:p-10 rounded-3xl border border-slate-100">
              {TREATMENT_CATEGORIES.filter(c => c.id === selectedTab).map(category => (
                <div key={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Selected Therapy</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">{category.name}</h3>
                      <p className="text-emerald-600 font-semibold text-sm mt-1">{category.tagline}</p>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {category.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-y border-slate-200/80 py-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Expected Sessions</span>
                        <span className="font-extrabold text-slate-800 text-sm sm:text-base">{category.sessions}</span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Custom Price Range</span>
                        <span className="font-extrabold text-emerald-600 text-sm sm:text-base">{category.priceRange}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Clinical Benefits:</span>
                      {category.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-700 text-sm font-normal">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setFormData(prev => ({ ...prev, treatment: category.id }));
                          scrollToBooking();
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm inline-flex items-center space-x-2"
                      >
                        <span>Book This Treatment</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-video relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
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
      <section id="skin-quiz" className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-emerald-50/80 text-center space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-2xl text-emerald-600 shadow-inner">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Interactive Skin Assessment</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm font-normal">
                Answer these 3 clinical questions to receive an instant, dermatologically aligned treatment recommendation.
              </p>
            </div>

            {/* Quiz Progress */}
            {!quizComplete && (
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${((quizIndex) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            )}

            {/* Quiz Body */}
            {!quizComplete ? (
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{QUIZ_QUESTIONS[quizIndex].question}</h3>
                <div className="grid grid-cols-1 gap-3 max-w-lg mx-auto">
                  {QUIZ_QUESTIONS[quizIndex].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuizAnswer(opt.value)}
                      className="w-full text-left px-5 py-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all font-semibold text-slate-800 text-sm hover:text-emerald-800 flex justify-between items-center group"
                    >
                      <span>{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-w-xl mx-auto p-6 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">Your Recommendation</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{recommendedCategory?.name}</h3>
                  <p className="text-slate-600 text-sm font-normal">{recommendedCategory?.tagline}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Based on your inputs, we recommend scheduling an evaluation session for our {recommendedCategory?.name}. Dr. Madhuri will perform an in-depth dermatoscopic analysis during your visit.
                </p>
                <div className="flex justify-center space-x-4 pt-2">
                  <button
                    onClick={resetQuiz}
                    className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-white text-sm font-bold transition-all"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => {
                      if (recommendedCategory) {
                        setFormData(prev => ({ ...prev, treatment: recommendedCategory.id }));
                      }
                      scrollToBooking();
                    }}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-150 hover:shadow-emerald-250 transition-all flex items-center space-x-2"
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
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Clinical <span className="text-emerald-600">Case Studies</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              Real results showing authentic progress across multi-session dermatological treatment programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {CASE_STUDIES.map((study, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{study.type}</span>
                    <span className="text-xs bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-bold">{study.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{study.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block text-center">Before Treatment</span>
                      <div className="rounded-xl overflow-hidden aspect-square border border-slate-200">
                        <img src={study.beforeImage} alt="Before Treatment" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider text-emerald-600 font-bold block text-center">After Program</span>
                      <div className="rounded-xl overflow-hidden aspect-square border-2 border-emerald-400">
                        <img src={study.afterImage} alt="After Program" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
                    {study.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Patient <span className="text-emerald-600">Feedback</span>
            </h2>
            <p className="text-slate-500 text-sm font-normal">
              Trusted reviews from patients who experienced our clinical services in Banjara Hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50/50 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
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
      <section id="appointment-booking" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm">
            {!formSubmitted ? (
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Schedule Consultation</h2>
                  <p className="text-slate-500 text-sm font-normal">
                    Fill out the form below. Our care team will contact you within 2 business hours to finalize your slot.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Patient Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Adult or Child name"
                          className={`w-full bg-white border ${formErrors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {formErrors.name && <p className="text-xs text-red-500 font-medium">{formErrors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile"
                          className={`w-full bg-white border ${formErrors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {formErrors.phone && <p className="text-xs text-red-500 font-medium">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@domain.com"
                          className={`w-full bg-white border ${formErrors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {formErrors.email && <p className="text-xs text-red-500 font-medium">{formErrors.email}</p>}
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className={`w-full bg-white border ${formErrors.date ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-200'} rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring transition-all`}
                        />
                      </div>
                      {formErrors.date && <p className="text-xs text-red-500 font-medium">{formErrors.date}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Treatment Interest */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Treatment Interest</label>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      >
                        <option value="pigmentation">Pigmentation Treatment</option>
                        <option value="scar-revision">Laser Scar Revision</option>
                        <option value="anti-aging">Anti-Aging Therapy</option>
                      </select>
                    </div>

                    {/* Preferred Doctor */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Preferred Doctor</label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      >
                        <option value="Dr. Madhuri T J">Dr. Madhuri T J (Lead Doctor)</option>
                        <option value="General Dermatologist">First Available General Dermatologist</option>
                      </select>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="space-y-1.5 pt-2">
                    <label className="flex items-start space-x-3 text-xs text-slate-500 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleInputChange}
                        className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                      />
                      <span>I agree to receive communications regarding my health consult request. Transform Skin Clinic will protect patient confidentiality strictly under local data regulations.</span>
                    </label>
                    {formErrors.agreed && <p className="text-xs text-red-500 font-medium">{formErrors.agreed}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <CheckSquare className="w-5 h-5" />
                        <span>Confirm Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              // Confirmation Card
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Consultation Scheduled!</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Your request has been logged successfully.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-emerald-100 max-w-sm mx-auto shadow-sm space-y-4">
                  <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-3">
                    <span className="text-slate-400 font-bold uppercase">Booking Reference</span>
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{bookingRef}</span>
                  </div>
                  <div className="space-y-2 text-left text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Doctor:</span>
                      <span className="font-bold text-slate-800">{formData.doctor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Date:</span>
                      <span className="font-bold text-slate-800">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Treatment:</span>
                      <span className="font-bold text-slate-800 capitalize">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact Phone:</span>
                      <span className="font-bold text-slate-800">{formData.phone}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  A representative will reach out shortly to verify details. Please keep your reference number ready.
                </p>

                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      date: '',
                      treatment: 'pigmentation',
                      doctor: 'Dr. Madhuri T J',
                      agreed: false
                    });
                  }}
                  className="text-emerald-600 font-bold text-xs hover:text-emerald-700 hover:underline"
                >
                  Schedule Another Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Clinic Location & Hours Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Brand */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="font-bold text-base text-slate-900 tracking-tight">{CLINIC_NAME}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Dedicated to clinical safety and aesthetic excellence. We utilize advanced dermatological technology to deliver visible, sustainable skin transformations.
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-normal">{CLINIC_ADDRESS}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold">{CLINIC_PHONE}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
                  <span className="font-bold text-emerald-600">By Appointment</span>
                </div>
                <div className="pt-2 text-xs text-slate-400 font-normal">
                  Emergency dermatological services are available on call.
                </div>
              </div>
            </div>

            {/* Maps / Visual Placeholder */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Location Map</h4>
              <div className="bg-slate-200/60 rounded-2xl h-44 border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                {/* Visual map placeholder with grid/pin */}
                <div className="absolute inset-0 bg-[radial-gradient(#c5e1d4_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40"></div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 relative z-10 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 relative z-10 mt-2 block">Opposite SBH Mufakkam Jah College</span>
                <span className="text-[10px] text-slate-400 relative z-10 block">Road No. 3, Banjara Hills</span>
                <a
                  href={`https://maps.google.com/?q=Flora+Apartment,+Road+No.+3,+Banjara+Hills,+Hyderabad`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 relative z-10 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-[10px] shadow-sm transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/60 text-center text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} {CLINIC_NAME}. All Rights Reserved. Patient records protected.
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ChevronRight, 
  Star, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Check, 
  X, 
  Sliders, 
  Compass, 
  Layers, 
  BookOpen, 
  HelpCircle,
  ShieldCheck,
  Send,
  Home,
  CheckCircle
} from 'lucide-react';

export default function SahaniInteriorsPage() {
  // Navigation active state
  const [activeSection, setActiveSection] = useState('hero');

  // Portfolio tab state
  const [activeStyle, setActiveStyle] = useState('minimalist');

  // Style Quiz state
  const [quizAnswers, setQuizAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [quizResult, setQuizResult] = useState(null);

  // Design Process active step
  const [activeStep, setActiveStep] = useState(0);

  // Booking Form state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    startDate: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Mock Portfolio Data
  const stylesData = {
    minimalist: {
      name: 'Modern Minimalist',
      desc: 'Breezy layout structure with light oak wardrobes and space-efficient hidden compartments. Clean lines that elevate daily routine.',
      budget: '₹15 Lakhs - ₹35 Lakhs',
      materials: ['Light Oak Veneer', 'Tempered Fluted Glass', 'Soft Sky Melamine', 'Matte White Fittings'],
      projects: [
        { title: 'Modular Wardrobes, Gachibowli', img: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=800' },
        { title: 'Space-Saving Flat, Narsingi', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    contemporary: {
      name: 'Contemporary Wellness',
      desc: 'Infusing light pastel blues and natural wood textures to create a relaxing, coastal resort-like atmosphere inside your urban home.',
      budget: '₹20 Lakhs - ₹45 Lakhs',
      materials: ['Solid Teak Accents', 'Sky Blue Linen Fabrics', 'Crisp White Acrylics', 'Integrated Warm LED strips'],
      projects: [
        { title: 'Cozy Kitchen Renovation, Manikonda', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
        { title: 'Light & Airy Living Area, Attapur', img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    classical: {
      name: 'Luxury Classical Light',
      desc: 'A light-mode take on classical moldings, premium woodwork panels, and grand white cabinets that never feel heavy or dark.',
      budget: '₹30 Lakhs - ₹60 Lakhs',
      materials: ['Painted White Ash Wood', 'Ocean Blue Lacquered Panels', 'Satin Brass Handles', 'Polished White Marble'],
      projects: [
        { title: 'Premium Villa Kitchen, Jubilee Hills', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
        { title: 'Stately Woodwork Foyer, Banjara Hills', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800' }
      ]
    }
  };

  // Quiz Questions
  const quizQuestions = [
    {
      id: 'q1',
      question: 'What is your primary goal for the home interior?',
      options: [
        { val: 'A', text: 'Maximize every square inch with smart, multi-functional hidden storage' },
        { val: 'B', text: 'Create a therapeutic, peaceful sanctuary using light colors and woods' },
        { val: 'C', text: 'Upgrade to grand, classic white cabinetry and bespoke focal woodwork panels' }
      ]
    },
    {
      id: 'q2',
      question: 'Select your preferred color highlight combination:',
      options: [
        { val: 'A', text: 'Crisp white surfaces with light oak wood accents' },
        { val: 'B', text: 'Soft sky blue accents paired with natural textured linens' },
        { val: 'C', text: 'Ocean blue lacquer panels with elegant satin brass handles' }
      ]
    },
    {
      id: 'q3',
      question: 'Which room needs the most attention in your renovation?',
      options: [
        { val: 'A', text: 'Smart modular wardrobes and custom space-saving beds' },
        { val: 'B', text: 'Open layout living room with breezy window seating' },
        { val: 'C', text: 'A premium, high-functioning modular kitchen with solid wood shutters' }
      ]
    },
    {
      id: 'q4',
      question: 'What is your preferred budget range for the project?',
      options: [
        { val: 'A', text: 'Super efficient budget: ₹15 - ₹25 Lakhs' },
        { val: 'B', text: 'Balanced lifestyle premium: ₹25 - ₹40 Lakhs' },
        { val: 'C', text: 'High-end tailored joinery: ₹40 Lakhs +' }
      ]
    }
  ];

  const handleQuizAnswer = (qId, val) => {
    const updated = { ...quizAnswers, [qId]: val };
    setQuizAnswers(updated);

    // Calculate recommended style
    if (updated.q1 && updated.q2 && updated.q3 && updated.q4) {
      const counts = { A: 0, B: 0, C: 0 };
      Object.values(updated).forEach(v => {
        counts[v] = (counts[v] || 0) + 1;
      });

      let winner = 'minimalist';
      if (counts.B > counts.A && counts.B >= counts.C) winner = 'contemporary';
      if (counts.C > counts.A && counts.C > counts.B) winner = 'classical';

      setQuizResult(winner);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({ q1: '', q2: '', q3: '', q4: '' });
    setQuizResult(null);
  };

  // Design Process Steps
  const processSteps = [
    { title: 'Consultation', sub: 'Interactive Layout Assessment', desc: 'We review your floorplan and list storage challenges to plan for space maximization.' },
    { title: 'Concept', sub: 'Coastal Wellness Material Selection', desc: 'Sourcing light woods, pastel blue swatches, and high-performance laminates in our studio.' },
    { title: '3D Rendering', sub: 'Modular System walkthrough', desc: 'Reviewing 3D designs of customized wardrobes, modular kitchen pulls, and fold-down study tables.' },
    { title: 'Procurement', sub: 'Precision Factory Woodwork', desc: 'High-accuracy German machinery fabrication of modular cabinets to ensure zero on-site mess.' },
    { title: 'Execution', sub: 'Prompt 21-Day Turnkey Assembly', desc: 'On-site woodwork installation, hardware alignment, and layout handover.' }
  ];

  // Live validation logic
  const validateField = (name, val) => {
    let error = '';
    if (name === 'name') {
      if (!val || val.trim().length < 3) error = 'Name must be at least 3 characters.';
    }
    if (name === 'phone') {
      const cleaned = val.replace(/\D/g, '');
      if (!cleaned || cleaned.length < 10) error = 'Please enter a valid 10-digit phone number.';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val || !emailRegex.test(val)) error = 'Please enter a valid email address.';
    }
    if (name === 'projectType' && !val) {
      error = 'Please select a project type.';
    }
    if (name === 'budget' && !val) {
      error = 'Please select your budget range.';
    }
    if (name === 'startDate' && !val) {
      error = 'Please select a preferred start date.';
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));

    const err = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formState).forEach(key => {
      const err = validateField(key, formState[key]);
      if (err) errors[key] = err;
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const refNo = 'SI-' + Math.floor(100000 + Math.random() * 900000);
        setBookingSuccess(refNo);
      }, 1500);
    }
  };

  const applyQuizRecommendation = () => {
    if (quizResult) {
      const styleName = stylesData[quizResult].name;
      setFormState(prev => ({
        ...prev,
        message: `I completed the Sahani Style Quiz and matched with: ${styleName}. I would like to design my woodwork around this style.`
      }));
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full selection:bg-[#2980B9] selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-[#EBF5FB] shadow-[0_2px_15px_rgba(41,128,185,0.03)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#1F3A52]">SAHANI INTERIORS</span>
            <span className="text-[10px] uppercase tracking-widest text-[#2980B9] font-bold">Space Maximization</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1F3A52]/80">
            <a href="#hero" className="hover:text-[#2980B9] transition-colors">Home</a>
            <a href="#bio" className="hover:text-[#2980B9] transition-colors">Philosophy</a>
            <a href="#portfolio" className="hover:text-[#2980B9] transition-colors">Solutions</a>
            <a href="#quiz" className="hover:text-[#2980B9] transition-colors">Find Your Style</a>
            <a href="#process" className="hover:text-[#2980B9] transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-[#2980B9] transition-colors">Reviews</a>
          </nav>

          <a 
            href="#booking-section" 
            className="px-6 py-3 rounded-xl bg-[#2980B9] hover:bg-[#2471A3] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_12px_rgba(41,128,185,0.15)]"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] flex items-center px-6 py-12 lg:py-20 bg-gradient-to-b from-[#EBF5FB] to-[#F7FBFD] overflow-hidden">
        {/* Sky Blue Decorative Circles */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#EBF5FB] blur-[60px] -z-10"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#D4E6F1]/50 blur-[50px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#AED6F1] text-xs font-bold tracking-wider text-[#2980B9] uppercase shadow-sm">
              <Home size={14} />
              Banjara Hills, Hyderabad
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-[#1F3A52] leading-[1.1] tracking-tight">
              Intelligent Woodwork.<br />
              <span className="text-[#2980B9]">Space Maximized.</span>
            </h1>

            <p className="text-base md:text-lg text-[#1F3A52]/75 max-w-xl font-medium leading-relaxed">
              We design custom modular wardrobes, smart kitchens, and multi-functional residential woodwork that breathe light and comfort back into your home. Tailored design, premium finish, and budget transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                href="#booking-section"
                className="px-8 py-4 rounded-xl bg-[#2980B9] hover:bg-[#2471A3] active:scale-95 text-white font-bold text-sm tracking-wide text-center transition-all shadow-[0_6px_15px_rgba(41,128,185,0.2)] flex items-center justify-center gap-2"
              >
                Book 2D Space Plan <ArrowRight size={16} />
              </a>
              <a 
                href="#portfolio"
                className="px-8 py-4 rounded-xl bg-white hover:bg-[#EBF5FB] active:scale-95 text-[#1F3A52] border border-[#D4E6F1] font-bold text-sm tracking-wide text-center transition-all shadow-sm"
              >
                Browse Woodwork Gallery
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-3 rounded-3xl bg-white border border-[#EBF5FB] shadow-[0_15px_40px_rgba(41,128,185,0.06)]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EBF5FB]">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" 
                  alt="Sahani Premium Living Room Woodwork" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Feature badge */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-white border border-[#EBF5FB] shadow-lg max-w-[220px]">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#2980B9] mb-1">Renovation Special</p>
              <p className="text-xs font-semibold text-[#1F3A52]/90">21-Day Modular Wardrobe Fabrication & Setup Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="py-10 bg-white border-y border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-2">
              <span className="text-3xl md:text-4xl font-black text-[#2980B9]">450+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#1F3A52]/60 font-bold mt-2">Homes Renovated</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <span className="text-3xl md:text-4xl font-black text-[#2980B9]">12+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#1F3A52]/60 font-bold mt-2">Years of Service</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <span className="text-3xl md:text-4xl font-black text-[#2980B9]">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-[#1F3A52]/60 font-bold mt-2">German Hardware</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <span className="text-3xl md:text-4xl font-black text-[#2980B9]">₹12L+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#1F3A52]/60 font-bold mt-2">Affordable Budget Packages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Designer Bio Section */}
      <section id="bio" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-3 rounded-3xl bg-white border border-[#EBF5FB] shadow-md">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#EBF5FB]">
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" 
                    alt="Sahani Principal Woodwork Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EBF5FB] text-[10px] font-bold uppercase tracking-wider text-[#2980B9]">
                <Award size={12} /> Design Leader
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-[#1F3A52] tracking-tight">
                Principal Designer:<br />
                <span className="text-[#2980B9]">Sahani</span>
              </h2>

              <div className="space-y-4 text-sm md:text-base text-[#1F3A52]/80 leading-relaxed font-medium">
                <p>
                  Sahani believes that a small space is never a limitation, only an invitation to design smarter. With a background in precision woodwork engineering, Sahani launched this studio to deliver premium space-saving solutions for apartment families across Hyderabad.
                </p>
                <p>
                  From modular wardrobe systems with pull-out hangers to bespoke modular kitchens featuring soft-closing German hardware, Sahani’s designs merge coastal wellness color schemes with absolute structural efficiency.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBF5FB] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2980B9] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-[#1F3A52] text-sm">Space Maximization</h4>
                    <p className="text-xs text-[#1F3A52]/60 mt-0.5">Bespoke slide-out beds, hidden tables.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2980B9] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-[#1F3A52] text-sm">Residential Woodwork</h4>
                    <p className="text-xs text-[#1F3A52]/60 mt-0.5">Teak and ash wood modular wardrobes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase / Interactive Style Selector Section */}
      <section id="portfolio" className="py-16 px-6 bg-white border-y border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="px-3 py-1 rounded-lg bg-[#EBF5FB] text-[10px] font-bold uppercase tracking-wider text-[#2980B9]">
              Interactive Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1F3A52] tracking-tight">
              Bespoke <span className="text-[#2980B9]">Woodwork Solutions</span>
            </h2>
            <p className="text-xs md:text-sm text-[#1F3A52]/60 max-w-lg">
              Explore our primary interior systems. Click to compare materials, configurations, and estimated budgets.
            </p>

            {/* Dynamic Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1 rounded-xl bg-[#F7FBFD] border border-[#EBF5FB] max-w-lg mt-6">
              {Object.keys(stylesData).map((styleKey) => (
                <button
                  key={styleKey}
                  onClick={() => setActiveStyle(styleKey)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeStyle === styleKey
                      ? 'bg-[#2980B9] text-white shadow-sm'
                      : 'text-[#1F3A52]/70 hover:text-[#2980B9] hover:bg-white'
                  }`}
                >
                  {stylesData[styleKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Style details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-[#F7FBFD] border border-[#EBF5FB] shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#1F3A52] uppercase tracking-tight">
                  {stylesData[activeStyle].name}
                </h3>
                <p className="text-xs md:text-sm text-[#1F3A52]/70 leading-relaxed font-medium">
                  {stylesData[activeStyle].desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#EBF5FB]">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2980B9]">Estimated Cost</span>
                    <p className="text-lg font-black text-[#1F3A52] mt-1">{stylesData[activeStyle].budget}</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2980B9]">Materials & Finish</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {stylesData[activeStyle].materials.map((mat, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded-md bg-white border border-[#EBF5FB] text-[11px] font-semibold text-[#1F3A52]/80 shadow-xs"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stylesData[activeStyle].projects.map((proj, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#F7FBFD] p-3 border border-[#EBF5FB] shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white relative">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] uppercase font-bold text-[#2980B9] tracking-widest">Completed Project</span>
                    <h4 className="font-bold text-[#1F3A52] text-sm mt-1">{proj.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Design Style Quiz Section */}
      <section id="quiz" className="py-16 px-6">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-[#EBF5FB] p-8 md:p-10 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <span className="px-3 py-1 rounded-lg bg-[#EBF5FB] text-[10px] font-bold uppercase tracking-wider text-[#2980B9]">
              Storage Assessment
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1F3A52] tracking-tight">
              Wardrobe & Woodwork <span className="text-[#2980B9]">Quiz</span>
            </h2>
            <p className="text-xs text-[#1F3A52]/60 max-w-sm">
              Discover which modular layout system best fits your home size, budget, and design tastes.
            </p>
          </div>

          {!quizResult ? (
            <div className="space-y-8">
              {quizQuestions.map((q, qIndex) => (
                <div key={q.id} className="space-y-4">
                  <h4 className="font-bold text-[#1F3A52] text-sm md:text-base flex gap-2">
                    <span className="text-[#2980B9]">0{qIndex + 1}.</span> {q.question}
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {q.options.map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleQuizAnswer(q.id, opt.val)}
                        className={`p-3.5 rounded-xl border text-left text-xs md:text-sm font-semibold transition-all duration-200 active:scale-[0.99] ${
                          quizAnswers[q.id] === opt.val
                            ? 'bg-[#EBF5FB] border-[#2980B9] text-[#2980B9]'
                            : 'bg-white border-[#EBF5FB] text-[#1F3A52]/80 hover:bg-[#F7FBFD] hover:border-[#AED6F1]'
                        }`}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center py-4 space-y-6 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#EBF5FB] text-[#2980B9] flex items-center justify-center">
                <Compass size={28} />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#2980B9]">Recommended Woodwork Theme</span>
                <h3 className="text-xl md:text-2xl font-black text-[#1F3A52]">
                  {stylesData[quizResult]?.name}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-[#1F3A52]/70 max-w-md leading-relaxed font-medium bg-[#F7FBFD] border border-[#EBF5FB] p-5 rounded-xl">
                {stylesData[quizResult]?.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={applyQuizRecommendation}
                  className="px-5 py-3 rounded-lg bg-[#2980B9] hover:bg-[#2471A3] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
                >
                  Autofill & Pre-Book <ArrowRight size={14} />
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-5 py-3 rounded-lg bg-white hover:bg-[#F7FBFD] active:scale-95 text-[#1F3A52] border border-[#D4E6F1] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Restart Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Design Process Section */}
      <section id="process" className="py-16 px-6 bg-white border-y border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="px-3 py-1 rounded-lg bg-[#EBF5FB] text-[10px] font-bold uppercase tracking-wider text-[#2980B9]">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1F3A52] tracking-tight">
              Our <span className="text-[#2980B9]">Execution Process</span>
            </h2>
            <p className="text-xs md:text-sm text-[#1F3A52]/60 max-w-lg">
              We ensure a smooth, worry-free renovation journey using precision steps.
            </p>

            {/* Timeline selector */}
            <div className="grid grid-cols-5 gap-2 w-full max-w-2xl mt-8">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border transition-all duration-200 ${
                    activeStep === index
                      ? 'bg-[#2980B9] border-[#2980B9] text-white shadow-xs'
                      : 'bg-white border-[#EBF5FB] text-[#1F3A52]/40 hover:bg-[#EBF5FB] hover:text-[#2980B9]'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider mt-2 hidden sm:inline ${
                    activeStep === index ? 'text-[#2980B9]' : 'text-[#1F3A52]/40'
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step panel */}
          <div className="max-w-2xl mx-auto rounded-2xl bg-[#F7FBFD] border border-[#EBF5FB] p-6 shadow-xs flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-12 h-12 rounded-lg bg-[#EBF5FB] text-[#2980B9] flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#2980B9]">
                  Phase 0{activeStep + 1} — {processSteps[activeStep].title}
                </span>
                <h4 className="text-base font-bold text-[#1F3A52] mt-0.5">{processSteps[activeStep].sub}</h4>
              </div>
              <p className="text-xs text-[#1F3A52]/70 leading-relaxed font-medium">
                {processSteps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="px-3 py-1 rounded-lg bg-[#EBF5FB] text-[10px] font-bold uppercase tracking-wider text-[#2980B9]">
              Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1F3A52] tracking-tight">
              Trusted by <span className="text-[#2980B9]">Hyderabad Families</span>
            </h2>
            <p className="text-xs md:text-sm text-[#1F3A52]/60 max-w-lg">
              Read how Sahani Interiors helped families maximize their apartments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#EBF5FB] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-0.5 text-[#2980B9]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#2980B9" />)}
                </div>
                <p className="text-xs text-[#1F3A52]/80 leading-relaxed italic font-medium">
                  "We needed to maximize space in our 3BHK flat in Manikonda. Sahani designed a beautiful modular wardrobe with a hidden fold-out study desk that works perfectly. Very reasonable budget!"
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F3A52]">Sandeep & Neha Patel</p>
                <p className="text-[9px] uppercase font-bold tracking-widest text-[#2980B9] mt-0.5">3BHK Owner, Manikonda</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#EBF5FB] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-0.5 text-[#2980B9]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#2980B9" />)}
                </div>
                <p className="text-xs text-[#1F3A52]/80 leading-relaxed italic font-medium">
                  "The turnkey woodwork assembly was finished exactly in 20 days. The soft sky blue cabinets in the kitchen give our home such a fresh, breezy feeling. Highly satisfied."
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F3A52]">K. Rajesh Kumar</p>
                <p className="text-[9px] uppercase font-bold tracking-widest text-[#2980B9] mt-0.5">Appartment Owner, Attapur</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#EBF5FB] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-0.5 text-[#2980B9]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#2980B9" />)}
                </div>
                <p className="text-xs text-[#1F3A52]/80 leading-relaxed italic font-medium">
                  "Sahani is incredibly professional. They provided detailed budget estimates upfront and stayed 100% true to the cost sheet. The German sliding fittings are so smooth."
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F3A52]">Dr. Fatima Ali</p>
                <p className="text-[9px] uppercase font-bold tracking-widest text-[#2980B9] mt-0.5">Villa Owner, Gachibowli</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking / Enquiry Form Section */}
      <section id="booking-section" className="py-16 px-6 bg-[#F7FBFD] border-t border-[#EBF5FB]">
        <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-[#EBF5FB] p-6 md:p-10 shadow-sm relative">
          
          {bookingSuccess ? (
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#EBF5FB] text-[#2980B9] flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-black text-[#1F3A52]">Enquiry Registered</h3>
                <p className="text-xs text-[#1F3A52]/60">Our space planning coordinator will reach out shortly.</p>
              </div>
              
              <div className="p-3 rounded-lg bg-[#F7FBFD] border border-[#EBF5FB] inline-block">
                <span className="text-[9px] uppercase font-bold text-[#1F3A52]/60 tracking-wider">Reference Code</span>
                <p className="text-lg font-black text-[#2980B9] mt-0.5 tracking-wider">{bookingSuccess}</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setBookingSuccess(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#EBF5FB] hover:bg-[#D4E6F1] active:scale-95 text-xs font-bold text-[#2980B9] border border-[#AED6F1] uppercase tracking-wider transition-all"
                >
                  New Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="flex flex-col items-center text-center space-y-3 mb-6">
                <span className="px-3 py-1 rounded-lg bg-[#EBF5FB] text-[10px] font-bold uppercase tracking-wider text-[#2980B9]">
                  Book Plan
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-[#1F3A52] tracking-tight">
                  Start Your <span className="text-[#2980B9]">Space Layout Plan</span>
                </h2>
                <p className="text-xs text-[#1F3A52]/60 max-w-xs">
                  Fill in your details below for custom woodwork layout quotes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`p-3 rounded-lg bg-[#F7FBFD] border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 transition-all ${
                      formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-[#EBF5FB] focus:border-[#2980B9]'
                    }`}
                  />
                  {formErrors.name && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1">{formErrors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit number"
                    className={`p-3 rounded-lg bg-[#F7FBFD] border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 transition-all ${
                      formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#EBF5FB] focus:border-[#2980B9]'
                    }`}
                  />
                  {formErrors.phone && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1">{formErrors.phone}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter email ID"
                    className={`p-3 rounded-lg bg-[#F7FBFD] border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 transition-all ${
                      formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-[#EBF5FB] focus:border-[#2980B9]'
                    }`}
                  />
                  {formErrors.email && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1">{formErrors.email}</span>}
                </div>

                {/* Project Type */}
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Project Type *</label>
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleInputChange}
                    className={`p-3 rounded-lg bg-[#F7FBFD] border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 transition-all ${
                      formErrors.projectType ? 'border-red-400 focus:border-red-400' : 'border-[#EBF5FB] focus:border-[#2980B9]'
                    }`}
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential-woodwork">Residential Woodwork</option>
                    <option value="space-maximization">Space Maximization</option>
                    <option value="budget-renovation">Budget Renovation</option>
                    <option value="modular-wardrobes">Modular Wardrobes</option>
                  </select>
                  {formErrors.projectType && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1">{formErrors.projectType}</span>}
                </div>

                {/* Budget Range */}
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Budget Range *</label>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleInputChange}
                    className={`p-3 rounded-lg bg-[#F7FBFD] border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 transition-all ${
                      formErrors.budget ? 'border-red-400 focus:border-red-400' : 'border-[#EBF5FB] focus:border-[#2980B9]'
                    }`}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-15l">Under ₹15 Lakhs</option>
                    <option value="15l-30l">₹15 Lakhs - ₹30 Lakhs</option>
                    <option value="30l-50l">₹30 Lakhs - ₹50 Lakhs</option>
                    <option value="over-50l">₹50 Lakhs +</option>
                  </select>
                  {formErrors.budget && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1">{formErrors.budget}</span>}
                </div>

                {/* Start Date */}
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formState.startDate}
                    onChange={handleInputChange}
                    className={`p-3 rounded-lg bg-[#F7FBFD] border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 transition-all ${
                      formErrors.startDate ? 'border-red-400 focus:border-red-400' : 'border-[#EBF5FB] focus:border-[#2980B9]'
                    }`}
                  />
                  {formErrors.startDate && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1">{formErrors.startDate}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase font-bold tracking-wider text-[#1F3A52]/60 mb-1.5">Space Notes / Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Detail your storage requests or floorplan characteristics..."
                  className="p-3 rounded-lg bg-[#F7FBFD] border border-[#EBF5FB] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2980B9]/15 focus:border-[#2980B9] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-[#2980B9] hover:bg-[#2471A3] active:scale-[0.99] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_12px_rgba(41,128,185,0.15)] flex items-center justify-center gap-1.5"
              >
                {isSubmitting ? (
                  <>Processing Enquiry...</>
                ) : (
                  <>
                    <Send size={14} /> Submit Enquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Studio Location & Hours Footer Section */}
      <footer className="bg-white border-t border-[#EBF5FB] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xl font-bold tracking-tight text-[#1F3A52]">SAHANI INTERIORS</span>
              <p className="text-[10px] uppercase tracking-widest text-[#2980B9] font-bold mt-1">Space Maximization</p>
            </div>
            
            <p className="text-xs text-[#1F3A52]/60 leading-relaxed font-medium">
              Delivering high-accuracy factory modular cabinetry and budget renovations for premium apartment living in Hyderabad since 2014.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#1F3A52]/85">
                <MapPin size={16} className="text-[#2980B9] shrink-0" />
                <span>6-3-26/A, Prem Nagar, Banjara Hills, Hyderabad, Telangana 500034</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1F3A52]/85">
                <Phone size={16} className="text-[#2980B9] shrink-0" />
                <span>+91 99856 28557</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1F3A52]/85">
                <Mail size={16} className="text-[#2980B9] shrink-0" />
                <span>contact@sahaniinteriors.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#2980B9]">Hours</h5>
              <ul className="text-xs text-[#1F3A52]/70 space-y-2 font-semibold">
                <li>Monday - Saturday</li>
                <li className="text-[#1F3A52] font-bold">09:30 AM - 06:30 PM</li>
                <li className="pt-2">Sunday</li>
                <li className="text-red-500 font-bold">Closed</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#2980B9]">Sitemap</h5>
              <ul className="text-xs text-[#1F3A52]/70 space-y-2 font-semibold">
                <li><a href="#hero" className="hover:text-[#2980B9]">Home</a></li>
                <li><a href="#bio" className="hover:text-[#2980B9]">Philosophy</a></li>
                <li><a href="#portfolio" className="hover:text-[#2980B9]">Solutions</a></li>
                <li><a href="#quiz" className="hover:text-[#2980B9]">Storage Quiz</a></li>
                <li><a href="#process" className="hover:text-[#2980B9]">Execution Process</a></li>
              </ul>
            </div>
          </div>

          {/* Embedded Map Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#2980B9]">Map Location</h5>
            <div className="rounded-xl border border-[#EBF5FB] bg-[#F7FBFD] p-2">
              <div className="bg-[#EAECEE] h-40 rounded-lg relative flex flex-col items-center justify-center text-center p-4 border border-[#D5D8DC]">
                <MapPin size={24} className="text-[#2980B9]" />
                <span className="text-xs font-bold text-[#1F3A52] mt-2">Banjara Hills, Prem Nagar</span>
                <span className="text-[9px] uppercase tracking-wider text-[#1F3A52]/50 mt-1">6-3-26/A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#EBF5FB] text-center">
          <p className="text-[10px] text-[#1F3A52]/40 uppercase tracking-widest font-bold">
            &copy; 2026 Sahani Interiors. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Tailwind animation keyframe inject in style tag */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

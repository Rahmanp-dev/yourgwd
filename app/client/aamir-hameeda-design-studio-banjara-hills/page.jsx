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
  Send
} from 'lucide-react';

export default function AamirHameedaDesignStudioPage() {
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
      name: 'Luxury Minimalist',
      desc: 'Stripping away the superfluous to celebrate light, space, and pristine materials. A composition of quiet elegance and structural integrity.',
      budget: '₹45 Lakhs - ₹1.5 Crore',
      materials: ['Statuario Quartz', 'Frosted Low-Iron Glass', 'Brushed Champagne Gold', 'Natural White Oak'],
      projects: [
        { title: 'The Glass Pavilion, Jubilee Hills', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
        { title: 'Zen Penthouse, Road No. 10', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    chic: {
      name: 'Urban Chic Retail',
      desc: 'Bold silhouettes, conversational seating configurations, and high-impact custom lighting. Designed to attract the design-conscious urbanite.',
      budget: '₹60 Lakhs - ₹2 Crore',
      materials: ['Terrazzo Grigio', 'Fluted Violet Glass', 'Powder-Coated Violet Steel', 'Raw Bouclé Fabrics'],
      projects: [
        { title: 'Verde Boutique, Banjara Hills', img: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=800' },
        { title: 'Monochrome Café, Gachibowli', img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    contemporary: {
      name: 'Bespoke Contemporary',
      desc: 'Seamlessly blending custom furniture curation with avant-garde art. Warm, sophisticated layout made for modern multi-generational families.',
      budget: '₹80 Lakhs - ₹3 Crore',
      materials: ['Custom Silk Wool Carpets', 'Calacatta Viola Marble', 'Onyx Light Panels', 'Polished Brass Accents'],
      projects: [
        { title: 'The Curator\'s Villa, Jubilee Hills', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
        { title: 'Skyline Residence, Financial District', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' }
      ]
    }
  };

  // Quiz Questions
  const quizQuestions = [
    {
      id: 'q1',
      question: 'Which raw material palette inspires your space?',
      options: [
        { val: 'A', text: 'Clean glass panels, statuario white marble, and raw oak woodwork' },
        { val: 'B', text: 'Vibrant custom terrazzo, structural brass elements, and tactile violet bouclé' },
        { val: 'C', text: 'Polished Viola marble, deep velvet textures, and custom metal accents' }
      ]
    },
    {
      id: 'q2',
      question: 'How do you view the role of furniture in your home?',
      options: [
        { val: 'A', text: 'Recessed, built-in, and practically invisible to maximize free floor space' },
        { val: 'B', text: 'Sculptural, bold, and served as conversational ice-breakers' },
        { val: 'C', text: 'A curated mix of European collector items and bespoke local woodwork' }
      ]
    },
    {
      id: 'q3',
      question: 'What is your absolute priority for the spatial layout?',
      options: [
        { val: 'A', text: 'Pristine flow of natural light and zero clutter on any surface' },
        { val: 'B', text: 'Dramatically zoned areas with customized retail-style ambient lighting' },
        { val: 'C', text: 'An art gallery layout designed to showcase paintings and collectibles' }
      ]
    },
    {
      id: 'q4',
      question: 'Describe your perfect weekend at home in Hyderabad:',
      options: [
        { val: 'A', text: 'Reading in a quiet, sunlit corner surrounded by clean white surfaces' },
        { val: 'B', text: 'Hosting a premium cocktail mixer on a glass-cantilevered terrace' },
        { val: 'C', text: 'A slow family lunch in an elegant, art-filled formal dining room' }
      ]
    }
  ];

  const handleQuizAnswer = (qId, val) => {
    const updated = { ...quizAnswers, [qId]: val };
    setQuizAnswers(updated);

    // If all questions are answered, calculate the recommended style
    if (updated.q1 && updated.q2 && updated.q3 && updated.q4) {
      const counts = { A: 0, B: 0, C: 0 };
      Object.values(updated).forEach(v => {
        counts[v] = (counts[v] || 0) + 1;
      });

      let winner = 'minimalist';
      if (counts.B > counts.A && counts.B >= counts.C) winner = 'chic';
      if (counts.C > counts.A && counts.C > counts.B) winner = 'contemporary';

      setQuizResult(winner);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({ q1: '', q2: '', q3: '', q4: '' });
    setQuizResult(null);
  };

  // Design Process Steps
  const processSteps = [
    { title: 'Consultation', sub: 'Site Assessment & Philosophy Alignment', desc: 'We visit your site in Banjara/Jubilee Hills to study the light path, structural constraints, and align on your spatial aspiration.' },
    { title: 'Concept', sub: 'Material Board & Flow Layouts', desc: 'We present physical sample boards containing stone slices, glass samples, and textile swatches alongside optimized layouts.' },
    { title: '3D Rendering', sub: 'Hyper-realistic Spatial Visualization', desc: 'Virtual walkthroughs detailing exact light reflections, shadow paths, and custom furniture placements.' },
    { title: 'Procurement', sub: 'Bespoke Fabrication & Curation', desc: 'Sourcing premium European elements and initiating production on bespoke furniture pieces in our dedicated workshop.' },
    { title: 'Execution', sub: 'Pristine Turnkey Assembly', desc: 'On-site engineering, micro-refinements, and final styling under our strict personal supervision.' }
  ];

  // Live validation on fields
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
    
    // Clear error dynamically as user types
    const err = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formState).forEach(key => {
      const err = validateField(key, formState[key]);
      if (err) errors[key] = err;
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        const refNo = 'AH-' + Math.floor(100000 + Math.random() * 900000);
        setBookingSuccess(refNo);
      }, 1500);
    }
  };

  const applyQuizRecommendation = () => {
    if (quizResult) {
      const styleName = stylesData[quizResult].name;
      setFormState(prev => ({
        ...prev,
        message: `I completed the style quiz and matched with: ${styleName}. I would like to explore this aesthetic for my space.`
      }));
      // Smooth scroll to form
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full selection:bg-[#8E44AD] selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/40 border-b border-white/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#2C1A38]">AAMIR & HAMEEDA</span>
            <span className="text-[10px] uppercase tracking-widest text-[#8E44AD] font-bold">Design Studio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#2C1A38]/80">
            <a href="#hero" className="hover:text-[#8E44AD] transition-colors">Home</a>
            <a href="#bio" className="hover:text-[#8E44AD] transition-colors">Philosophy</a>
            <a href="#portfolio" className="hover:text-[#8E44AD] transition-colors">Works</a>
            <a href="#quiz" className="hover:text-[#8E44AD] transition-colors">Style Quiz</a>
            <a href="#process" className="hover:text-[#8E44AD] transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-[#8E44AD] transition-colors">Reviews</a>
          </nav>

          <a 
            href="#booking-section" 
            className="px-6 py-3 rounded-full bg-[#8E44AD] hover:bg-[#7D3C98] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(142,68,173,0.3)]"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center px-6 py-12 lg:py-24 overflow-hidden">
        {/* Background Decorative Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#E8DAEF] blur-[80px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#F5EEF8] blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 backdrop-blur-sm text-xs font-bold tracking-wider text-[#8E44AD] uppercase shadow-sm">
              <Sparkles size={14} />
              Banjara Hills, Hyderabad
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2C1A38] leading-[1.05] tracking-tight">
              Honest Materials.<br />
              <span className="text-[#8E44AD]">Avant-Garde</span><br />
              Minimalism.
            </h1>

            <p className="text-lg md:text-xl text-[#2C1A38]/70 max-w-xl font-medium leading-relaxed">
              We design physical narratives for spaces that demand distinction. Melding raw textures, glass, and light to craft premium residential sanctuaries and retail design benchmarks.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                href="#booking-section"
                className="px-8 py-4 rounded-full bg-[#8E44AD] hover:bg-[#7D3C98] active:scale-95 text-white font-bold text-sm tracking-wide text-center transition-all shadow-[0_10px_20px_rgba(142,68,173,0.2)] flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight size={16} />
              </a>
              <a 
                href="#portfolio"
                className="px-8 py-4 rounded-full bg-white/60 hover:bg-white/90 active:scale-95 text-[#2C1A38] border border-white/80 font-bold text-sm tracking-wide text-center transition-all shadow-sm"
              >
                View Selected Works
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Frosted Glass Frame around image */}
            <div className="p-4 rounded-[2.5rem] bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(142,68,173,0.05)]">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/40">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
                  alt="Aamir & Hameeda Avant-Garde Living Space" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-lg max-w-[200px]">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD] mb-1">Current Focus</p>
              <p className="text-xs font-semibold text-[#2C1A38]/90">Bespoke Furniture Curation & Luxury Penthouses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="py-12 bg-white/20 border-y border-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-3xl md:text-5xl font-black text-[#8E44AD]">300+</span>
              <span className="text-xs uppercase tracking-widest text-[#2C1A38]/60 font-bold mt-2">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-3xl md:text-5xl font-black text-[#8E44AD]">20+</span>
              <span className="text-xs uppercase tracking-widest text-[#2C1A38]/60 font-bold mt-2">Years of Legacy</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-3xl md:text-5xl font-black text-[#8E44AD]">15+</span>
              <span className="text-xs uppercase tracking-widest text-[#2C1A38]/60 font-bold mt-2">Design Awards</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-3xl md:text-5xl font-black text-[#8E44AD]">99%</span>
              <span className="text-xs uppercase tracking-widest text-[#2C1A38]/60 font-bold mt-2">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Designer Bio Section */}
      <section id="bio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-4 rounded-[2.5rem] bg-white/30 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/40">
                  <img 
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" 
                    alt="Aamir & Hameeda Principal Designers" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/70 text-[10px] font-bold uppercase tracking-wider text-[#8E44AD]">
                <Award size={12} /> The Creative Minds
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#2C1A38] tracking-tight leading-tight">
                Principal Designers:<br />
                <span className="text-[#8E44AD]">Aamir & Hameeda</span>
              </h2>

              <div className="space-y-4 text-base md:text-lg text-[#2C1A38]/80 leading-relaxed font-medium">
                <p>
                  For over two decades, Aamir & Hameeda have set the benchmark for luxury minimalism in India. Their signature approach strips away unnecessary ornamentation to emphasize clean geometric profiles, flow of light, and raw, honest materials.
                </p>
                <p>
                  Educated internationally and grounded by the unique cultural topography of Hyderabad, their studio designs spaces that are highly architectural, unexpected, and meticulously detailed. They believe luxury lies not in clutter, but in the precision of spacing and structural expression.
                </p>
              </div>

              <div className="pt-4 border-t border-[#8E44AD]/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#8E44AD] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-[#2C1A38] text-sm">Luxury Residences</h4>
                    <p className="text-xs text-[#2C1A38]/60 mt-0.5">Bespoke villas, spacious penthouses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#8E44AD] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-[#2C1A38] text-sm">Retail Curation</h4>
                    <p className="text-xs text-[#2C1A38]/60 mt-0.5">High-end showrooms, cafes, boutiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase / Interactive Style Selector Section */}
      <section id="portfolio" className="py-20 px-6 bg-white/30 backdrop-blur-sm border-y border-white/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-[10px] font-bold uppercase tracking-wider text-[#8E44AD] shadow-sm">
              Explore Our Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2C1A38] tracking-tight">
              Interactive <span className="text-[#8E44AD]">Aesthetic Selector</span>
            </h2>
            <p className="text-sm md:text-base text-[#2C1A38]/60 max-w-xl">
              Tap the design philosophies below to view our curated projects, structural material boards, and estimated execution parameters.
            </p>

            {/* Dynamic Tabs Selector */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white/50 border border-white/80 backdrop-blur-md max-w-lg mt-6 shadow-sm">
              {Object.keys(stylesData).map((styleKey) => (
                <button
                  key={styleKey}
                  onClick={() => setActiveStyle(styleKey)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeStyle === styleKey
                      ? 'bg-[#8E44AD] text-white shadow-md'
                      : 'text-[#2C1A38]/70 hover:text-[#8E44AD] hover:bg-white/40'
                  }`}
                >
                  {stylesData[styleKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Style Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white/40 border border-white/80 shadow-md space-y-6">
                <h3 className="text-2xl font-black text-[#2C1A38] uppercase tracking-tight">
                  {stylesData[activeStyle].name}
                </h3>
                <p className="text-sm text-[#2C1A38]/70 leading-relaxed font-medium">
                  {stylesData[activeStyle].desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#8E44AD]/10">
                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-wider text-[#8E44AD]">Execution Budget</h5>
                    <p className="text-lg font-bold text-[#2C1A38] mt-1">{stylesData[activeStyle].budget}</p>
                  </div>

                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-wider text-[#8E44AD]">Signature Materiality</h5>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {stylesData[activeStyle].materials.map((mat, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 rounded-lg bg-white/70 border border-white/95 text-[11px] font-semibold text-[#2C1A38]/80 shadow-sm"
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
                <div key={i} className="group relative rounded-3xl overflow-hidden shadow-md bg-white/40 p-3 border border-white/50 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/60 relative">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase font-bold text-[#8E44AD] tracking-widest">Featured Space</p>
                    <h4 className="font-bold text-[#2C1A38] text-base mt-1">{proj.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Design Style Quiz Section */}
      <section id="quiz" className="py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/80 p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#E8DAEF] blur-[50px] -z-10"></div>
          
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-[10px] font-bold uppercase tracking-wider text-[#8E44AD] shadow-sm">
              Style Discovery
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-[#2C1A38] tracking-tight">
              Find Your <span className="text-[#8E44AD]">Ideal Aesthetic</span>
            </h2>
            <p className="text-xs md:text-sm text-[#2C1A38]/60 max-w-md">
              Answer 4 simple questions and receive a dynamic design system recommendation optimized for your lifestyle.
            </p>
          </div>

          {!quizResult ? (
            <div className="space-y-8">
              {quizQuestions.map((q, qIndex) => (
                <div key={q.id} className="space-y-4">
                  <h4 className="font-bold text-[#2C1A38] text-sm md:text-base flex gap-2">
                    <span className="text-[#8E44AD]">0{qIndex + 1}.</span> {q.question}
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {q.options.map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleQuizAnswer(q.id, opt.val)}
                        className={`p-4 rounded-2xl border text-left text-xs md:text-sm font-semibold transition-all duration-200 active:scale-[0.99] ${
                          quizAnswers[q.id] === opt.val
                            ? 'bg-[#8E44AD]/10 border-[#8E44AD] text-[#8E44AD] shadow-sm'
                            : 'bg-white/40 border-white/60 text-[#2C1A38]/80 hover:bg-white/70 hover:border-[#8E44AD]/30'
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
            <div className="flex flex-col items-center text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#8E44AD]/10 text-[#8E44AD] flex items-center justify-center">
                <Compass size={32} />
              </div>

              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD]">Your Recommended Style</p>
                <h3 className="text-2xl md:text-3xl font-black text-[#2C1A38]">
                  {stylesData[quizResult]?.name || 'Avant-Garde Luxury'}
                </h3>
              </div>

              <p className="text-sm text-[#2C1A38]/70 max-w-md leading-relaxed font-medium bg-white/50 border border-white/60 p-6 rounded-2xl shadow-sm">
                {stylesData[quizResult]?.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={applyQuizRecommendation}
                  className="px-6 py-3 rounded-full bg-[#8E44AD] hover:bg-[#7D3C98] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  Apply to Consultation Form <ArrowRight size={14} />
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 rounded-full bg-white/60 hover:bg-white/80 active:scale-95 text-[#2C1A38] border border-white/80 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Design Process Section */}
      <section id="process" className="py-20 px-6 bg-white/30 backdrop-blur-sm border-y border-white/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-[10px] font-bold uppercase tracking-wider text-[#8E44AD] shadow-sm">
              Execution Path
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2C1A38] tracking-tight">
              Our <span className="text-[#8E44AD]">Design Journey</span>
            </h2>
            <p className="text-sm md:text-base text-[#2C1A38]/60 max-w-xl">
              From the initial concept meeting to key-handoff, our interactive step-by-step workflow ensures structural accuracy.
            </p>

            {/* Horizontal timeline steps indicator */}
            <div className="grid grid-cols-5 gap-2 w-full max-w-3xl mt-8">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-[#8E44AD] border-[#8E44AD] text-white shadow-md'
                      : 'bg-white/50 border-white/80 text-[#2C1A38]/40 hover:bg-white hover:text-[#8E44AD]'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider mt-2 hidden sm:inline transition-colors duration-300 ${
                    activeStep === index ? 'text-[#8E44AD]' : 'text-[#2C1A38]/40'
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Panel */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-white/40 border border-white/80 p-8 shadow-md flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#8E44AD]/10 text-[#8E44AD] flex items-center justify-center shrink-0">
              <Clock size={32} />
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD]">
                  Phase 0{activeStep + 1} — {processSteps[activeStep].title}
                </span>
                <h4 className="text-xl font-bold text-[#2C1A38] mt-1">{processSteps[activeStep].sub}</h4>
              </div>
              <p className="text-sm text-[#2C1A38]/70 leading-relaxed font-medium">
                {processSteps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-[10px] font-bold uppercase tracking-wider text-[#8E44AD] shadow-sm">
              Voices of Trust
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2C1A38] tracking-tight">
              Client <span className="text-[#8E44AD]">Testimonials</span>
            </h2>
            <p className="text-sm md:text-base text-[#2C1A38]/60 max-w-xl">
              Hear from premium families in Hyderabad who entrusted Aamir & Hameeda with their spatial visions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/40 border border-white/80 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#8E44AD]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#8E44AD" />)}
                </div>
                <p className="text-xs md:text-sm text-[#2C1A38]/80 leading-relaxed italic font-medium">
                  "Our penthouse in Jubilee Hills feels like an art gallery but lives like a home. The frosted glass dividers and raw travertine Aamir recommended are absolute showstoppers. Sublime craftsmanship!"
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C1A38]">Anirudh & Divya Reddy</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD] mt-1">Reddy Penthouses, Jubilee Hills</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/40 border border-white/80 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#8E44AD]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#8E44AD" />)}
                </div>
                <p className="text-xs md:text-sm text-[#2C1A38]/80 leading-relaxed italic font-medium">
                  "Aamir & Hameeda completely redefined our luxury multi-brand retail store. Their glassmorphism aesthetics drew in customers before we even formally launched. Phenomenal commercial architects."
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C1A38]">Meenakshi Rao</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD] mt-1">Founder, Velvet Thread Studio</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/40 border border-white/80 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#8E44AD]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#8E44AD" />)}
                </div>
                <p className="text-xs md:text-sm text-[#2C1A38]/80 leading-relaxed italic font-medium">
                  "Minimalism is extremely hard to build, because errors have nowhere to hide. Their turnkey execution on our Banjara Hills villa is absolutely flawless. Highly recommended."
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C1A38]">Dr. K. Srinivas</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD] mt-1">Banjara Hills Residence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking / Enquiry Form Section */}
      <section id="booking-section" className="py-20 px-6 bg-white/30 backdrop-blur-sm border-t border-white/60">
        <div className="max-w-3xl mx-auto rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/80 p-8 md:p-12 shadow-xl relative">
          
          {bookingSuccess ? (
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-[#8E44AD]/10 text-[#8E44AD] flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-[#2C1A38]">Consultation Registered</h3>
                <p className="text-sm text-[#2C1A38]/60">Thank you. Our design director will contact you within 24 hours.</p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/60 border border-white/90 inline-block">
                <span className="text-xs uppercase font-bold text-[#2C1A38]/60 tracking-wider">Confirmation Reference</span>
                <p className="text-xl font-bold text-[#8E44AD] mt-1 tracking-widest">{bookingSuccess}</p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setBookingSuccess(null)}
                  className="px-6 py-2.5 rounded-full bg-white/60 hover:bg-white/80 active:scale-95 text-xs font-bold text-[#2C1A38] border border-white/80 uppercase tracking-wider transition-all"
                >
                  New Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-[10px] font-bold uppercase tracking-wider text-[#8E44AD] shadow-sm">
                  Consultation Booking
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-[#2C1A38] tracking-tight">
                  Initiate Your <span className="text-[#8E44AD]">Design Project</span>
                </h2>
                <p className="text-xs md:text-sm text-[#2C1A38]/60 max-w-sm">
                  Schedule a private studio or site meeting. Real-time validated input ensures instant response.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`p-4 rounded-2xl bg-white/50 border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 transition-all ${
                      formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-white/80 focus:border-[#8E44AD]'
                    }`}
                  />
                  {formErrors.name && <span className="text-[10px] text-red-500 font-bold mt-1.5 ml-2">{formErrors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className={`p-4 rounded-2xl bg-white/50 border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 transition-all ${
                      formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-white/80 focus:border-[#8E44AD]'
                    }`}
                  />
                  {formErrors.phone && <span className="text-[10px] text-red-500 font-bold mt-1.5 ml-2">{formErrors.phone}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className={`p-4 rounded-2xl bg-white/50 border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 transition-all ${
                      formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-white/80 focus:border-[#8E44AD]'
                    }`}
                  />
                  {formErrors.email && <span className="text-[10px] text-red-500 font-bold mt-1.5 ml-2">{formErrors.email}</span>}
                </div>

                {/* Project Type */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleInputChange}
                    className={`p-4 rounded-2xl bg-white/50 border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 transition-all ${
                      formErrors.projectType ? 'border-red-400 focus:border-red-400' : 'border-white/80 focus:border-[#8E44AD]'
                    }`}
                  >
                    <option value="">Select Project Type</option>
                    <option value="luxury-residence">Luxury Residence</option>
                    <option value="retail">Urban Chic Retail</option>
                    <option value="hospitality">Hospitality Space</option>
                    <option value="bespoke-furniture">Bespoke Furniture Curation</option>
                  </select>
                  {formErrors.projectType && <span className="text-[10px] text-red-500 font-bold mt-1.5 ml-2">{formErrors.projectType}</span>}
                </div>

                {/* Budget Range */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Budget Range *</label>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleInputChange}
                    className={`p-4 rounded-2xl bg-white/50 border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 transition-all ${
                      formErrors.budget ? 'border-red-400 focus:border-red-400' : 'border-white/80 focus:border-[#8E44AD]'
                    }`}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-25l">Under ₹25 Lakhs</option>
                    <option value="25l-50l">₹25 Lakhs - ₹50 Lakhs</option>
                    <option value="50l-1cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="over-1cr">₹1 Crore +</option>
                  </select>
                  {formErrors.budget && <span className="text-[10px] text-red-500 font-bold mt-1.5 ml-2">{formErrors.budget}</span>}
                </div>

                {/* Start Date */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formState.startDate}
                    onChange={handleInputChange}
                    className={`p-4 rounded-2xl bg-white/50 border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 transition-all ${
                      formErrors.startDate ? 'border-red-400 focus:border-red-400' : 'border-white/80 focus:border-[#8E44AD]'
                    }`}
                  />
                  {formErrors.startDate && <span className="text-[10px] text-red-500 font-bold mt-1.5 ml-2">{formErrors.startDate}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#2C1A38]/60 mb-2">Aesthetic Notes / Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your design aspirations, preferred elements or quiz matches..."
                  className="p-4 rounded-2xl bg-white/50 border border-white/80 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#8E44AD]/20 focus:border-[#8E44AD] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-[#8E44AD] hover:bg-[#7D3C98] active:scale-[0.99] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-[0_6px_20px_rgba(142,68,173,0.25)] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Processing Request...</>
                ) : (
                  <>
                    <Send size={16} /> Request Consultation
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Studio Location & Hours Footer Section */}
      <footer className="bg-white/40 border-t border-white/60 py-16 px-6 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-2xl font-black tracking-tight text-[#2C1A38]">AAMIR & HAMEEDA</span>
              <p className="text-[10px] uppercase tracking-widest text-[#8E44AD] font-bold mt-1">Design Studio</p>
            </div>
            
            <p className="text-xs text-[#2C1A38]/60 leading-relaxed font-medium">
              Creating bespoke visual systems that define modern living in Hyderabad since 2004. Highly architectural, minimalist, and uncompromisingly honest.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#2C1A38]/85">
                <MapPin size={16} className="text-[#8E44AD] shrink-0" />
                <span>Valley View Apartments, Road No. 3, Banjara Hills, Hyderabad, Telangana 500034</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#2C1A38]/85">
                <Phone size={16} className="text-[#8E44AD] shrink-0" />
                <span>+91 70755 84993</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#2C1A38]/85">
                <Mail size={16} className="text-[#8E44AD] shrink-0" />
                <span>info@aamirhameeda.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD]">Hours</h5>
              <ul className="text-xs text-[#2C1A38]/70 space-y-2 font-semibold">
                <li>Monday - Friday</li>
                <li className="text-[#2C1A38] font-bold">10:00 AM - 07:00 PM</li>
                <li className="pt-2">Saturday</li>
                <li className="text-[#2C1A38] font-bold">10:00 AM - 04:00 PM</li>
                <li className="pt-2">Sunday</li>
                <li className="text-red-500 font-bold">Closed</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD]">Sitemap</h5>
              <ul className="text-xs text-[#2C1A38]/70 space-y-2 font-semibold">
                <li><a href="#hero" className="hover:text-[#8E44AD]">Home</a></li>
                <li><a href="#bio" className="hover:text-[#8E44AD]">Philosophy</a></li>
                <li><a href="#portfolio" className="hover:text-[#8E44AD]">Selected Works</a></li>
                <li><a href="#quiz" className="hover:text-[#8E44AD]">Style Discovery</a></li>
                <li><a href="#process" className="hover:text-[#8E44AD]">Execution Path</a></li>
              </ul>
            </div>
          </div>

          {/* Embedded Map Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#8E44AD]">Map Location</h5>
            <div className="rounded-2xl border border-white/80 overflow-hidden bg-white/40 p-2 shadow-inner">
              <div className="bg-[#EAECEE] h-40 rounded-xl relative flex flex-col items-center justify-center text-center p-4 border border-[#D5D8DC]">
                <MapPin size={24} className="text-[#8E44AD]" />
                <span className="text-xs font-bold text-[#2C1A38] mt-2">Banjara Hills, Road No. 3</span>
                <span className="text-[9px] uppercase tracking-wider text-[#2C1A38]/50 mt-1">Valley View Apartments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#8E44AD]/10 text-center">
          <p className="text-[10px] text-[#2C1A38]/40 uppercase tracking-widest font-bold">
            &copy; 2026 Aamir & Hameeda Design Studio. All Rights Reserved.
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

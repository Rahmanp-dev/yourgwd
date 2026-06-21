"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Award, 
  Clock, 
  Star, 
  Sparkles, 
  ChevronRight, 
  Send, 
  Compass, 
  Layers, 
  Check, 
  Calendar, 
  User, 
  FileText, 
  Hammer, 
  Truck, 
  Eye, 
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Lock,
  ChevronDown
} from 'lucide-react';

export default function PerceptInteriorSolutionsPage() {
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Portfolio Selector State
  const [activeStyle, setActiveStyle] = useState('modern-residential');

  // Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState('');

  // Process Steps State
  const [activeStep, setActiveStep] = useState('consultation');

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    startDate: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Portfolio Data
  const portfolioData = {
    'modern-residential': {
      title: 'The Nandi Nagar Residence',
      desc: 'A premium 3-BHK luxury apartment designed with high-contrast monochrome layouts, charcoal profiles, and custom integrated wallpaper accents in royal blue.',
      materials: ['Charcoal Profiles', 'Geometric Silk Wallpaper', 'Polished Statuario Marble'],
      budget: '₹28 Lakhs - ₹40 Lakhs',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    'office-fit-outs': {
      title: 'Hitec City Innovation Hub',
      desc: 'Ergonomic, modern open-plan office layouts featuring modular acoustic desk dividers, floating dry-erase glass board screens, and corporate branding zones.',
      materials: ['Acoustic Felt Panels', 'Powder-coated Aluminium', 'Tempered Clear Glass'],
      budget: '₹40 Lakhs - ₹75 Lakhs',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    },
    'wallpaper-decor': {
      title: 'The Luxe Accent Suite',
      desc: 'Bespoke high-end accent wall installations using textured linen and metallic thread wallpapers imported from Italy, custom cut to fit architectural recesses.',
      materials: ['Textured Linen Wallpaper', 'Metallic Brass Inlays', 'Warm Backlit LED Profiles'],
      budget: '₹4 Lakhs - ₹8 Lakhs',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    },
    'contemporary': {
      title: 'The Minimalist Loft',
      desc: 'A clean, open living space emphasizing pure whites, thin charcoal borders, high-contrast structural beams, and active royal blue styling pieces.',
      materials: ['Micro-cement Walls', 'Black Steel Structures', 'Royal Blue Velvet Chairs'],
      budget: '₹25 Lakhs - ₹35 Lakhs',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
    }
  };

  // Quiz Questions
  const quizQuestions = [
    {
      q: 'What is your primary design aesthetic preference?',
      options: [
        { label: 'Crisp pure white surfaces, thin charcoal borders, and high contrast', val: 'A' },
        { label: 'Warm sand tones, modular wood grains, and soft curves', val: 'B' },
        { label: 'Industrial raw brickwork, metal structures, and exposed pipework', val: 'C' }
      ]
    },
    {
      q: 'Which accent highlight stands out to you the most?',
      options: [
        { label: 'Sleek royal blue velvet upholstery & dark chrome details', val: 'A' },
        { label: 'Earthy terracotta pots & soft warm recessed lighting', val: 'B' },
        { label: 'Stainless steel kitchen countertops & frosted glass doors', val: 'C' }
      ]
    },
    {
      q: 'What type of wall decor matches your dream layout?',
      options: [
        { label: 'Textured geometric wallpapers with metallic gold highlights', val: 'A' },
        { label: 'Soft natural plaster coat with raw timber framing', val: 'B' },
        { label: 'Minimalist clean white paint with zero decorative additions', val: 'C' }
      ]
    }
  ];

  const handleQuizAnswer = (val) => {
    const nextAnswers = [...answers, val];
    setAnswers(nextAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate Recommendation
      const countA = nextAnswers.filter(a => a === 'A').length;
      const countB = nextAnswers.filter(a => a === 'B').length;
      
      let recommendation = '';
      if (countA >= 2) {
        recommendation = 'Clean Modern Minimalist';
      } else if (countB >= 2) {
        recommendation = 'Earthy Warm Contemporary';
      } else {
        recommendation = 'High-Contrast Industrial Loft';
      }
      setQuizResult(recommendation);
      setQuizStep(quizStep + 1);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers([]);
    setQuizResult('');
  };

  // Design Process Steps
  const processSteps = {
    consultation: {
      title: '01. Initial Consultation',
      desc: 'We conduct a precise space audit at your site in Banjara Hills or Hitec City, cataloging architectural dimensions and functionality desires.',
      timeline: '1 - 2 Days',
      deliverable: 'Space Plan Blueprint'
    },
    concept: {
      title: '02. Layout Schematics',
      desc: 'Feroz and the drafting team present 2D structural layouts, high-contrast material palettes, and premium wallpaper catalogs.',
      timeline: '5 - 7 Days',
      deliverable: 'Material Board & Layout'
    },
    '3d-rendering': {
      title: '03. Photorealistic 3D Renders',
      desc: 'Experience your modern residential or office space in high-contrast digital renderings, visualizing exact wallpaper textures and light placements.',
      timeline: '10 - 15 Days',
      deliverable: '3D Render Files'
    },
    procurement: {
      title: '04. Strict Material Sourcing',
      desc: 'We purchase premium Italian statuario marble, structural black steel framing, and imported custom wallpaper rolls directly from suppliers.',
      timeline: '10 - 20 Days',
      deliverable: 'Procurement Ledger & Schedules'
    },
    execution: {
      title: '05. High-Precision Construction',
      desc: 'Our construction crew installs thin charcoal borders, builds structural divisions, hangs bespoke wallpapers, and conducts the final styling hand-over.',
      timeline: '30 - 45 Days',
      deliverable: 'Site Handover & Warranty Checklist'
    }
  };

  // Form Validation
  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Full name is required';
      else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
    }
    if (name === 'phone') {
      if (!value.trim()) error = 'Phone number is required';
      else if (!/^\+?[0-9]{10,12}$/.test(value.replace(/[\s-]/g, ''))) error = 'Please enter a valid 10-12 digit phone number';
    }
    if (name === 'email') {
      if (!value.trim()) error = 'Email address is required';
      else if (!/\S+@\S+\.\S+/.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'projectType' && !value) {
      error = 'Please select a project type';
    }
    if (name === 'budget' && !value) {
      error = 'Please select a budget range';
    }
    if (name === 'startDate' && !value) {
      error = 'Please select a preferred start date';
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const formEl = document.getElementById('booking-section');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API Post
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        refNo: `PS-${Math.floor(100000 + Math.random() * 900000)}`,
        name: form.name
      });
      // Clear form
      setForm({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        budget: '',
        startDate: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] antialiased overflow-x-hidden font-sans border-t-8 border-[#2E86C1]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        .text-royal {
          color: #2E86C1;
        }
        .bg-royal {
          background-color: #2E86C1;
        }
        .border-royal {
          border-color: #2E86C1;
        }
        .border-charcoal {
          border-color: #2A2A2A;
        }
      `}</style>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 border-2 border-charcoal flex items-center justify-center text-charcoal font-heading font-black text-xl">
              P
            </div>
            <div>
              <span className="font-heading text-lg font-black tracking-tight text-charcoal uppercase block leading-none">Percept</span>
              <span className="text-[10px] font-sans tracking-widest uppercase text-royal font-bold">Interior Solutions</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-semibold text-xs tracking-wider uppercase text-charcoal">
            <a href="#about" className="hover:text-royal transition-colors">Philosophy</a>
            <a href="#portfolio" className="hover:text-royal transition-colors">Portfolio</a>
            <a href="#quiz" className="hover:text-royal transition-colors">Style Quiz</a>
            <a href="#process" className="hover:text-royal transition-colors">Our Process</a>
            <a href="#testimonials" className="hover:text-royal transition-colors">Reviews</a>
            <a href="#booking-section" className="px-5 py-3 border-2 border-charcoal hover:bg-charcoal hover:text-white transition-all text-xs font-bold active:scale-95">
              Book Consultation
            </a>
          </nav>

          {/* Mobile Nav Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 rounded hover:bg-zinc-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 px-4 py-6 bg-white flex flex-col gap-4 font-sans font-semibold text-xs tracking-wider uppercase">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-royal py-2 border-b border-zinc-100">Philosophy</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-royal py-2 border-b border-zinc-100">Portfolio</a>
            <a href="#quiz" onClick={() => setMobileMenuOpen(false)} className="hover:text-royal py-2 border-b border-zinc-100">Style Quiz</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-royal py-2 border-b border-zinc-100">Our Process</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-royal py-2 border-b border-zinc-100">Reviews</a>
            <a href="#booking-section" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 border-2 border-charcoal bg-charcoal text-white text-xs font-bold mt-2">
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-200 text-[10px] font-bold tracking-widest text-charcoal uppercase">
              <Sparkles size={12} className="text-royal" />
              <span>Modern Residential & Office Fit-outs</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-[#111111]">
              DEFINING SPACES <br />
              WITH <span className="text-royal">MODERN PRECISION</span>
            </h1>
            <p className="font-sans text-base text-zinc-600 max-w-2xl leading-relaxed">
              We design and construct clean, high-contrast layouts for corporate workspaces and luxury residential apartments. Principal Designer Feroz leads our Banjara Hills studio with precise engineering and sophisticated structural details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a 
                href="#booking-section" 
                className="inline-flex items-center justify-center px-8 py-4 bg-royal text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1b6ca1] active:scale-95 transition-all gap-2"
              >
                Schedule Consultation
                <ArrowRight size={14} />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-charcoal text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-zinc-100 active:scale-95 transition-all"
              >
                View Client Projects
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded border-2 border-charcoal overflow-hidden shadow-lg p-2 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" 
                alt="High contrast modern clean interior styling" 
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white border border-charcoal text-charcoal">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-royal block">Project Spotlight</span>
                <h4 className="font-heading text-md font-bold uppercase tracking-tight mt-1">Nandi Nagar Apartment, Road No. 10</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-200">
          <div className="space-y-1">
            <span className="block font-heading text-3xl font-black text-charcoal">200+</span>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Corporate & Home Projects</span>
          </div>
          <div className="space-y-1">
            <span className="block font-heading text-3xl font-black text-charcoal">15+</span>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Years Active in Hyderabad</span>
          </div>
          <div className="space-y-1">
            <span className="block font-heading text-3xl font-black text-[#2E86C1]">5</span>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Elite Design Awards</span>
          </div>
          <div className="space-y-1">
            <span className="block font-heading text-3xl font-black text-charcoal">100%</span>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* 3. Principal Designer Bio */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-charcoal p-1 rounded shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" 
                alt="Principal Designer Feroz" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute bottom-4 -right-4 px-6 py-3 border-2 border-charcoal bg-white text-center">
              <span className="block font-heading text-md font-extrabold text-charcoal">Feroz</span>
              <span className="block text-[9px] font-sans font-bold uppercase tracking-widest text-royal">Principal Designer</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-100 text-[10px] font-bold tracking-widest text-charcoal uppercase">
              <Award size={12} className="text-royal" />
              <span>Design Leadership</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] uppercase tracking-tight">
              "True luxury lies in structural discipline and high contrast."
            </h2>
            <p className="font-sans text-sm text-zinc-600 leading-relaxed">
              With a background in architecture and modular planning, Feroz has spent 15 years refining modern office fit-outs and luxury minimalist apartments across Banjara Hills and Hitec City. 
            </p>
            <p className="font-sans text-sm text-zinc-600 leading-relaxed">
              His philosophy combines clean structural lines with highly functional spatial solutions. By integrating custom textures, charcoal steel borders, and royal blue accents, Percept Interior Solutions builds spaces that feel both incredibly open and distinctively premium.
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 border-l-2 border-royal pl-4">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-charcoal">Office Ergonomics</h5>
                  <p className="text-xs text-zinc-500">Maximized airflow & soundproofing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-l-2 border-charcoal pl-4">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-charcoal">Imported Finishes</h5>
                  <p className="text-xs text-zinc-500">Vetted wallpaper & wall paneling catalogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase / Interactive Style Selector */}
      <section id="portfolio" className="py-20 bg-zinc-50 border-y border-zinc-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-royal">Design Portfolio</span>
            <h2 className="font-heading text-3xl font-extrabold uppercase text-charcoal tracking-tight">Selected Work Domains</h2>
            <p className="text-xs text-zinc-500 font-sans">
              Filter by specialty to view materials, execution budgets, and modern layouts.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 max-w-2xl mx-auto border border-zinc-200 bg-white font-sans text-xs font-bold uppercase tracking-wider">
            {[
              { id: 'modern-residential', label: 'Modern Residential' },
              { id: 'office-fit-outs', label: 'Office Fit-outs' },
              { id: 'wallpaper-decor', label: 'Wallpaper & Decor' },
              { id: 'contemporary', label: 'Contemporary Loft' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveStyle(tab.id)}
                className={`px-5 py-3 transition-all active:scale-95 ${
                  activeStyle === tab.id 
                    ? 'bg-[#2E86C1] text-white shadow-sm' 
                    : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Display Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm max-w-5xl mx-auto">
            <div className="lg:col-span-7">
              <img 
                src={portfolioData[activeStyle].image} 
                alt={portfolioData[activeStyle].title}
                className="w-full aspect-video sm:aspect-[1.8/1] object-cover border border-zinc-200"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-heading text-xl font-bold uppercase text-charcoal tracking-tight">
                {portfolioData[activeStyle].title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                {portfolioData[activeStyle].desc}
              </p>
              
              <div className="space-y-4 pt-2">
                <div>
                  <span className="block text-[9px] uppercase font-bold tracking-widest text-royal">Design Specifications</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {portfolioData[activeStyle].materials.map((m, idx) => (
                      <span key={idx} className="px-3 py-1 border border-zinc-200 text-[10px] text-charcoal font-semibold bg-zinc-50">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-[9px] uppercase font-bold tracking-widest text-royal">Project Budget Scale</span>
                  <span className="block font-heading text-lg font-extrabold text-[#2E86C1] mt-0.5">
                    {portfolioData[activeStyle].budget}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Design Style Quiz */}
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="max-w-2xl mx-auto border-2 border-charcoal p-8 sm:p-12 shadow-md relative">
          <div className="absolute -top-4 -right-4 w-10 h-10 border-2 border-charcoal bg-white text-charcoal flex items-center justify-center shadow-sm">
            <HelpCircle size={20} />
          </div>

          <div className="text-center space-y-3 mb-8">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-royal block">Style Profiler</span>
            <h2 className="font-heading text-2xl font-extrabold uppercase text-charcoal tracking-tight">Discover Your Layout Code</h2>
            <p className="text-xs text-zinc-500 font-sans">
              Answer 3 styling questions for a real-time modern recommendation from Feroz.
            </p>
          </div>

          {quizStep < quizQuestions.length ? (
            <div className="space-y-6 font-sans">
              <div className="flex justify-between items-center text-[10px] font-bold text-zinc-500">
                <span>QUESTION {quizStep + 1} OF {quizQuestions.length}</span>
                <span>{Math.round(((quizStep) / quizQuestions.length) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full bg-zinc-100 h-1 border border-zinc-200">
                <div 
                  className="bg-royal h-full transition-all duration-300"
                  style={{ width: `${((quizStep) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              <h4 className="font-heading text-lg font-bold text-charcoal uppercase tracking-tight pt-2">
                {quizQuestions[quizStep].q}
              </h4>

              <div className="flex flex-col gap-2">
                {quizQuestions[quizStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(opt.val)}
                    className="w-full text-left p-4 border border-zinc-200 hover:border-royal hover:bg-zinc-50 active:scale-[0.99] transition-all font-medium text-xs flex justify-between items-center"
                  >
                    <span>{opt.label}</span>
                    <ChevronRight size={14} className="text-zinc-400" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 font-sans animate-fade-in">
              <div className="w-12 h-12 border-2 border-royal text-royal flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-400 block">Recommended Aesthetic</span>
                <h3 className="font-heading text-xl font-bold uppercase text-charcoal tracking-tight">
                  {quizResult}
                </h3>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-sm mx-auto">
                Your selections align with high contrast layouts, royal blue focus items, and architectural wallpaper patterns. Feroz recommends scheduling an office/home blueprint review.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="#booking-section"
                  className="px-6 py-3 bg-royal text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1b6ca1] transition-all active:scale-95"
                >
                  Discuss Design Layout
                </a>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-zinc-100 transition-all active:scale-95"
                >
                  Reset Form
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Our Design Process */}
      <section id="process" className="py-20 bg-zinc-50 border-y border-zinc-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-royal">Our Workflow</span>
            <h2 className="font-heading text-3xl font-extrabold uppercase text-charcoal tracking-tight">Structured Execution</h2>
            <p className="text-xs text-zinc-500 font-sans">
              Click the phases below to review milestones and expected timeline.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-w-3xl mx-auto font-sans text-xs font-bold uppercase tracking-wider">
            {[
              { id: 'consultation', icon: User, label: 'Audit' },
              { id: 'concept', icon: Compass, label: 'Schematics' },
              { id: '3d-rendering', icon: Layers, label: '3D Renders' },
              { id: 'procurement', icon: Truck, label: 'Procure' },
              { id: 'execution', icon: Hammer, label: 'Build' }
            ].map(step => {
              const StepIcon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center gap-2 p-4 border transition-all active:scale-95 ${
                    activeStep === step.id 
                      ? 'bg-charcoal text-white border-charcoal shadow-sm' 
                      : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  <StepIcon size={18} className={activeStep === step.id ? 'text-white' : 'text-royal'} />
                  <span className="text-[10px] text-center">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="max-w-2xl mx-auto bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-sans">
            <div className="md:col-span-8 space-y-3">
              <h4 className="font-heading text-md font-bold uppercase text-charcoal tracking-tight">
                {processSteps[activeStep].title}
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {processSteps[activeStep].desc}
              </p>
            </div>
            <div className="md:col-span-4 border-l border-zinc-200 pl-6 space-y-4">
              <div>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-royal">Timeline</span>
                <span className="block font-heading text-xs font-extrabold text-charcoal">{processSteps[activeStep].timeline}</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-royal">Deliverable</span>
                <span className="block font-heading text-xs font-extrabold text-charcoal">{processSteps[activeStep].deliverable}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-royal">Client Reviews</span>
            <h2 className="font-heading text-3xl font-extrabold uppercase text-charcoal tracking-tight">Verified Feedback</h2>
            <p className="text-xs text-zinc-500 font-sans">
              Reviews from homeowners and commercial directors in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-zinc-200 p-8 shadow-sm flex flex-col justify-between space-y-6 bg-zinc-50">
              <div className="space-y-3">
                <div className="flex gap-1 text-royal">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs text-zinc-600 font-sans italic leading-relaxed">
                  "Percept Interior Solutions handled our corporate office fit-out in Hitec City. Feroz completed the project in just 40 days, within budget, and the charcoal framework borders look incredibly modern and premium."
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200">
                <h5 className="font-bold text-xs uppercase tracking-wider text-charcoal">Ritesh Deshmukh</h5>
                <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Hitec City, Hyderabad</span>
              </div>
            </div>

            <div className="border border-zinc-200 p-8 shadow-sm flex flex-col justify-between space-y-6 bg-zinc-50">
              <div className="space-y-3">
                <div className="flex gap-1 text-royal">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs text-zinc-600 font-sans italic leading-relaxed">
                  "The luxury geometric wall decor they installed in our Nandi Nagar apartment completely changed the feel of the entry hallway. Feroz has an incredible eye for high contrast minimalism."
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200">
                <h5 className="font-bold text-xs uppercase tracking-wider text-charcoal">Shalini Rao</h5>
                <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Banjara Hills, Hyderabad</span>
              </div>
            </div>

            <div className="border border-zinc-200 p-8 shadow-sm flex flex-col justify-between space-y-6 bg-zinc-50">
              <div className="space-y-3">
                <div className="flex gap-1 text-royal">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs text-zinc-600 font-sans italic leading-relaxed">
                  "Highly precise drawing drafts and quick execution. The custom modular home office layout they built fits the space perfectly. Recommended for anyone looking for modern residential design."
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200">
                <h5 className="font-bold text-xs uppercase tracking-wider text-charcoal">Abhinav K.</h5>
                <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Gachibowli, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Consultation Booking / Enquiry Form */}
      <section id="booking-section" className="py-20 bg-zinc-50 border-t border-zinc-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-charcoal text-white p-8 sm:p-10 shadow-md">
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-widest font-bold text-royal block">Project Intake</span>
              <h3 className="font-heading text-2xl font-extrabold uppercase leading-none tracking-tight">Initiate Blueprint</h3>
              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                Provide details of your residential or corporate space for a structured budget assessment with Feroz.
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center text-white">
                  <Phone size={12} />
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-zinc-500">Contact Line</span>
                  <a href="tel:+919000004706" className="font-bold hover:underline">+91 90000 04706</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center text-white">
                  <Mail size={12} />
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-zinc-500">Support Inbox</span>
                  <a href="mailto:info@perceptsolutions.in" className="font-bold hover:underline">info@perceptsolutions.in</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center text-white">
                  <MapPin size={12} />
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-zinc-500">Office Location</span>
                  <span className="font-bold block max-w-[200px]">Ground Floor, Road No. 10, Banjara Hills</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-[9px] text-zinc-500">
              <Lock size={10} />
              <span>100% Encrypted Client Data Channel</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col justify-center">
            {submittedData ? (
              <div className="text-center space-y-6 font-sans animate-fade-in py-8">
                <div className="w-12 h-12 border-2 border-royal text-royal flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-lg font-bold uppercase text-charcoal tracking-tight">Booking Authenticated!</h4>
                  <p className="text-xs text-zinc-500">
                    A designer will call you back within 2 hours at the number supplied.
                  </p>
                </div>
                <div className="p-4 border border-zinc-200 bg-zinc-50 max-w-xs mx-auto text-xs">
                  <span className="block text-zinc-400 uppercase font-bold tracking-wider text-[9px]">Receipt Reference Code</span>
                  <span className="font-mono text-base font-bold text-royal mt-1 block">{submittedData.refNo}</span>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-2.5 border border-charcoal text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 transition-all active:scale-95"
                >
                  Register New Intake
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold text-zinc-500">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Feroz Khan"
                      className={`w-full p-3 border focus:outline-none focus:bg-zinc-50 transition-all ${
                        errors.name ? 'border-red-500' : 'border-zinc-200 focus:border-royal'
                      }`}
                    />
                    {errors.name && <span className="text-[9px] font-bold text-red-500">{errors.name}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold text-zinc-500">Phone Number *</label>
                    <input 
                      type="text" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleInputChange} 
                      placeholder="e.g. +91 90000 04706"
                      className={`w-full p-3 border focus:outline-none focus:bg-zinc-50 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-zinc-200 focus:border-royal'
                      }`}
                    />
                    {errors.phone && <span className="text-[9px] font-bold text-red-500">{errors.phone}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold text-zinc-500">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleInputChange} 
                    placeholder="e.g. contact@percept.in"
                    className={`w-full p-3 border focus:outline-none focus:bg-zinc-50 transition-all ${
                      errors.email ? 'border-red-500' : 'border-zinc-200 focus:border-royal'
                    }`}
                  />
                  {errors.email && <span className="text-[9px] font-bold text-red-500">{errors.email}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1 relative">
                    <label className="block text-[10px] uppercase font-bold text-zinc-500">Project Type *</label>
                    <div className="relative">
                      <select 
                        name="projectType" 
                        value={form.projectType} 
                        onChange={handleInputChange} 
                        className={`w-full p-3 border appearance-none focus:outline-none focus:bg-zinc-50 transition-all ${
                          errors.projectType ? 'border-red-500' : 'border-zinc-200 focus:border-royal'
                        }`}
                      >
                        <option value="">Select type</option>
                        <option value="Residential">Modern Home</option>
                        <option value="Commercial">Office Fit-out</option>
                        <option value="Decor">Wallpaper/Decor</option>
                      </select>
                      <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                    </div>
                    {errors.projectType && <span className="text-[9px] font-bold text-red-500">{errors.projectType}</span>}
                  </div>

                  <div className="space-y-1 relative">
                    <label className="block text-[10px] uppercase font-bold text-zinc-500">Budget Range *</label>
                    <div className="relative">
                      <select 
                        name="budget" 
                        value={form.budget} 
                        onChange={handleInputChange} 
                        className={`w-full p-3 border appearance-none focus:outline-none focus:bg-zinc-50 transition-all ${
                          errors.budget ? 'border-red-500' : 'border-zinc-200 focus:border-royal'
                        }`}
                      >
                        <option value="">Select range</option>
                        <option value="5L-15L">₹5L - ₹15L</option>
                        <option value="15L-35L">₹15L - ₹35L</option>
                        <option value="35L-60L">₹35L - ₹60L</option>
                        <option value="60L+">₹60L+</option>
                      </select>
                      <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                    </div>
                    {errors.budget && <span className="text-[9px] font-bold text-red-500">{errors.budget}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold text-zinc-500">Start Date *</label>
                    <input 
                      type="date" 
                      name="startDate" 
                      value={form.startDate} 
                      onChange={handleInputChange} 
                      className={`w-full p-3 border focus:outline-none focus:bg-zinc-50 transition-all ${
                        errors.startDate ? 'border-red-500' : 'border-zinc-200 focus:border-royal'
                      }`}
                    />
                    {errors.startDate && <span className="text-[9px] font-bold text-red-500">{errors.startDate}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold text-zinc-500">Project Description</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleInputChange} 
                    placeholder="Provide details about rooms, wallpaper designs, or square footage..."
                    rows="3"
                    className="w-full p-3 border border-zinc-200 focus:outline-none focus:border-royal focus:bg-zinc-50 transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 bg-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a1a1a] active:scale-[0.99] disabled:opacity-55 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Validating Credentials...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Submit Specifications
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Studio Location & Hours Footer */}
      <footer className="bg-charcoal text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 font-sans text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 border-2 border-white flex items-center justify-center text-white font-heading font-black text-xl">
                P
              </div>
              <div>
                <span className="font-heading text-lg font-black tracking-tight text-white uppercase block leading-none">Percept</span>
                <span className="text-[10px] tracking-widest uppercase text-royal font-bold">Interior Solutions</span>
              </div>
            </div>
            <p className="leading-relaxed max-w-xs">
              Precise, high-contrast layouts for modern home interior styling and office fit-outs. Registered in Banjara Hills, Hyderabad.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-200">
                <Phone size={14} className="text-royal" />
                <span>+91 90000 04706</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <Mail size={14} className="text-royal" />
                <span>info@perceptsolutions.in</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">Experience Center Hours</h4>
            <div className="space-y-2 text-zinc-400">
              <div className="flex justify-between pb-1 border-b border-zinc-800">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white">09:30 AM - 07:00 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-zinc-800">
                <span>Saturday</span>
                <span className="font-semibold text-white">10:00 AM - 05:00 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-zinc-800">
                <span>Sunday</span>
                <span className="text-royal font-bold">CLOSED</span>
              </div>
            </div>
            
            <div className="pt-2">
              <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-white">Studio Address</h5>
              <p className="mt-1 leading-relaxed">
                Ground Floor, #8-2-310/1/10/1, Road No. 10, Nandi Nagar, Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">Map Coordinates</h4>
            {/* Embedded Map Placeholder */}
            <div className="relative overflow-hidden border border-zinc-800 aspect-video lg:aspect-[1.5/1] shadow-inner bg-zinc-950 flex flex-col items-center justify-center text-center p-4">
              <MapPin size={22} className="text-royal mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">Nandi Nagar Studio</span>
              <p className="text-[10px] text-zinc-500 mt-1 max-w-[200px]">
                Ground Floor, Road No. 10, Near Banjara Hills
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-3 px-4 py-1.5 border border-zinc-700 hover:bg-zinc-800 active:scale-95 text-[10px] font-bold text-white transition-all uppercase tracking-wider"
              >
                Launch Navigation
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-[10px] text-zinc-600">
          <p>© {new Date().getFullYear()} Percept Interior Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

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

export default function CaliforniaDreamworksPage() {
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Portfolio Selector State
  const [activeStyle, setActiveStyle] = useState('luxury-residential');

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
    'luxury-residential': {
      title: 'The Banjara Oasis Villa',
      desc: 'A premium 5-BHK duplex designed with custom terracotta partitions, travertine floors, and floor-to-ceiling glass paneling to harness soft natural light.',
      materials: ['Travertine Marble', 'Custom Terracotta Grills', 'Natural Walnut Veneer'],
      budget: '₹45 Lakhs - ₹60 Lakhs',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    },
    'custom-cabinetry': {
      title: 'Oak & Clay Kitchen Suite',
      desc: 'Seamless handle-less kitchen featuring premium pull-out pantry towers, modular custom oak cabinets, and a hand-polished terracotta tile backsplash.',
      materials: ['Solid White Oak', 'Handmade Terracotta Tiles', 'Quartz Countertop'],
      budget: '₹15 Lakhs - ₹22 Lakhs',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
    },
    'commercial-retail': {
      title: 'Bespoke Atelier - Jubilee Hills',
      desc: 'A high-end designer apparel showroom crafted with soft sandstone walls, arched display alcoves, and integrated glassmorphic lighting fixtures.',
      materials: ['Sandstone Texture', 'Brushed Brass Metalwork', 'Frosted Fluted Glass'],
      budget: '₹35 Lakhs - ₹50 Lakhs',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    },
    'contemporary': {
      title: 'The Skyline Penthouse',
      desc: 'A luxury sky home utilizing curved organic sofas, neutral textured plaster, and low-profile terracotta cabinetry to ground the double-height ceiling space.',
      materials: ['Bouclé Upholstery', 'Microconcrete Flooring', 'Oiled Ash Wood'],
      budget: '₹55 Lakhs - ₹75 Lakhs',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=800'
    }
  };

  // Quiz Questions
  const quizQuestions = [
    {
      q: 'Which color palette makes you feel most at ease?',
      options: [
        { label: 'Terracotta, Sandy Beige & Soft Warm Cream', val: 'A' },
        { label: 'Forest Green, Raw Oak & Matte Sand', val: 'B' },
        { label: 'Monochrome Whites, Charcoal & Royal Blue', val: 'C' }
      ]
    },
    {
      q: 'What is your absolute must-have in cabinetry design?',
      options: [
        { label: 'Exposed wood grain & hand-crafted terracotta handles', val: 'A' },
        { label: 'Minimalist integrated handle-less profiles', val: 'B' },
        { label: 'High-contrast steel frames & reeded glass windows', val: 'C' }
      ]
    },
    {
      q: 'How would you define your primary living space objective?',
      options: [
        { label: 'A cozy, organic sanctuary with plenty of natural texture', val: 'A' },
        { label: 'A clean, highly functional layout with multi-purpose zones', val: 'B' },
        { label: 'A bold, sophisticated architectural statement', val: 'C' }
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
        recommendation = 'Earthy Glassmorphic Luxury';
      } else if (countB >= 2) {
        recommendation = 'Biophilic Organic Contemporary';
      } else {
        recommendation = 'Clean Architectural Minimalist';
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
      title: '01. Personal Consultation',
      desc: 'We meet in our Banjara Hills studio or at your property to understand your space goals, timeline, design preferences, and lifestyle patterns.',
      timeline: '1 - 2 Days',
      deliverable: 'Client Requirements Brief'
    },
    concept: {
      title: '02. Conceptual Schematics',
      desc: 'Our team drafts initial layout plans, mood boards featuring earthy color palettes, and material boards displaying actual woods, stones, and glass finishes.',
      timeline: '7 - 10 Days',
      deliverable: 'Moodboard & Space Plan'
    },
    '3d-rendering': {
      title: '03. Photorealistic 3D Renders',
      desc: 'We create immersive 3D digital renderings of your home, showcasing custom cabinetry integrations, light plays, and glassmorphic card elements.',
      timeline: '14 - 21 Days',
      deliverable: '3D Renderings & Walkthrough'
    },
    procurement: {
      title: '04. Material & Furniture Procurement',
      desc: 'Leveraging our vetted global and local supply networks, we source premium sustainable timber, custom brass fixtures, and curated accent lights.',
      timeline: '15 - 30 Days',
      deliverable: 'Procurement Schedule & Order Status'
    },
    execution: {
      title: '05. Execution & Styling',
      desc: 'Our master craftsmen install custom modular cabinetry. Aliraza oversees the hand-over styling, ensuring every terracotta vase and light fixture is perfectly in place.',
      timeline: '45 - 60 Days',
      deliverable: 'Turnkey Handover & Site Care Guide'
    }
  };

  // Form Validation
  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Your full name is required';
      else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
    }
    if (name === 'phone') {
      if (!value.trim()) error = 'Your phone number is required';
      else if (!/^\+?[0-9]{10,12}$/.test(value.replace(/[\s-]/g, ''))) error = 'Please enter a valid 10-12 digit phone number';
    }
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'projectType' && !value) {
      error = 'Please select a project type';
    }
    if (name === 'budget' && !value) {
      error = 'Please select your budget range';
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
      // Scroll to the first error or booking form
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
        refNo: `CD-${Math.floor(100000 + Math.random() * 900000)}`,
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
    <div className="min-h-screen bg-[#FAF0DD] text-[#3E2723] antialiased overflow-x-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Outfit', sans-serif;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .text-terracotta {
          color: #D35400;
        }
        .bg-terracotta {
          background-color: #D35400;
        }
        .border-terracotta {
          border-color: #D35400;
        }
      `}</style>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full glass-card border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-terracotta flex items-center justify-center text-white font-heading font-bold text-xl shadow-md">
              C
            </div>
            <div>
              <span className="font-heading text-xl font-bold tracking-tight text-[#3E2723]">California</span>
              <span className="block text-[10px] font-sans tracking-widest uppercase text-terracotta font-semibold">Dreamworks</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
            <a href="#about" className="hover:text-terracotta transition-colors">Philosophy</a>
            <a href="#portfolio" className="hover:text-terracotta transition-colors">Portfolio</a>
            <a href="#quiz" className="hover:text-terracotta transition-colors">Style Quiz</a>
            <a href="#process" className="hover:text-terracotta transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-terracotta transition-colors">Client Reviews</a>
            <a href="#booking-section" className="px-5 py-2.5 rounded-full bg-terracotta text-white font-semibold hover:bg-[#b84900] active:scale-95 transition-all shadow-md">
              Book Consult
            </a>
          </nav>

          {/* Mobile Nav Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-amber-900/5 transition-colors focus:outline-none"
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
          <div className="md:hidden border-t border-amber-900/10 px-4 py-6 bg-[#FAF0DD] flex flex-col gap-4 font-sans font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta py-2 border-b border-amber-900/5">Philosophy</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta py-2 border-b border-amber-900/5">Portfolio</a>
            <a href="#quiz" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta py-2 border-b border-amber-900/5">Style Quiz</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta py-2 border-b border-amber-900/5">Process</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta py-2 border-b border-amber-900/5">Client Reviews</a>
            <a href="#booking-section" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-xl bg-terracotta text-white font-semibold shadow-md mt-2">
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/5 border border-amber-900/10 text-xs font-semibold text-terracotta">
              <Sparkles size={14} />
              <span>Luxury Residential & Cabinetry Design Studio</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#3E2723]">
              Earthy Warmth Meets <br />
              <span className="text-terracotta italic font-semibold">Glassmorphic Elegance</span>
            </h1>
            <p className="font-sans text-lg text-amber-950/80 max-w-xl leading-relaxed">
              Step into bespoke environments crafted with natural sand tones, premium modular cabinets, and luminous glass partitions. Principal designer Aliraza blends premium functional design with the warmth your family deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#booking-section" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-terracotta text-white font-semibold text-base shadow-lg shadow-amber-900/10 hover:bg-[#b84900] active:scale-95 transition-all gap-2"
              >
                Book Design Consultation
                <ArrowRight size={18} />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/50 text-[#3E2723] font-semibold text-base border border-amber-900/10 hover:bg-white/80 active:scale-95 transition-all"
              >
                View Selected Works
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#D35400]/20 to-[#FAF0DD] rounded-[2.5rem] blur-xl opacity-75"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury living room featuring earthy glassmorphism design system" 
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card border border-white/50 shadow-lg">
                <span className="text-xs uppercase font-bold tracking-widest text-terrawarm text-terracotta">Signature Project</span>
                <h4 className="font-heading text-lg font-bold text-[#3E2723] mt-1">Travertine Solitaire Villa, Banjara Hills</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-y border-amber-900/10 bg-amber-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block font-heading text-3xl sm:text-4xl font-bold text-terracotta">150+</span>
            <span className="block text-xs uppercase tracking-widest font-semibold text-amber-950/70">Projects Completed</span>
          </div>
          <div className="space-y-1">
            <span className="block font-heading text-3xl sm:text-4xl font-bold text-terracotta">12+</span>
            <span className="block text-xs uppercase tracking-widest font-semibold text-amber-950/70">Years of Experience</span>
          </div>
          <div className="space-y-1">
            <span className="block font-heading text-3xl sm:text-4xl font-bold text-terracotta">8</span>
            <span className="block text-xs uppercase tracking-widest font-semibold text-amber-950/70">Design Awards</span>
          </div>
          <div className="space-y-1">
            <span className="block font-heading text-3xl sm:text-4xl font-bold text-terracotta">100%</span>
            <span className="block text-xs uppercase tracking-widest font-semibold text-amber-950/70">Satisfied Clients</span>
          </div>
        </div>
      </section>

      {/* 3. Principal Designer Bio */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-xl border border-white/70 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-terracotta/10 rounded-[2rem] rotate-3 blur-md"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Principal Designer Aliraza" 
              className="w-full aspect-[4/5] object-cover rounded-2xl relative shadow-lg border-2 border-white"
            />
            <div className="absolute bottom-4 -right-4 px-6 py-3 rounded-xl bg-white shadow-lg border border-amber-950/5 text-center">
              <span className="block font-heading text-lg font-bold text-terracotta">Aliraza</span>
              <span className="block text-[10px] font-sans font-semibold uppercase tracking-wider text-amber-900">Principal Designer</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/5 text-xs font-semibold text-terracotta">
              <Award size={14} />
              <span>Meet The Architect</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3E2723]">
              "A premium space should speak to your soul, not copy a catalog."
            </h2>
            <p className="font-sans text-amber-950/80 leading-relaxed">
              With over a decade of design expertise in residential styling and custom luxury cabinetry across Hyderabad, Aliraza leads California Dreamworks with a singular design vision. We craft spaces that reflect harmony between human habitation and organic natural beauty.
            </p>
            <p className="font-sans text-amber-950/80 leading-relaxed">
              Our signature Earthy Glassmorphism framework marries rich, textured materials (terracotta, sandstone, oak wood) with sleek, modern frosted glass details to curate light, airy environments that promote health, productivity, and premium serenity.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center">
                  <Check size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#3E2723]">Bespoke Craftsmanship</h5>
                  <p className="text-xs text-amber-950/70">Custom-built storage in-house</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center">
                  <Check size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#3E2723]">Vetted Materiality</h5>
                  <p className="text-xs text-amber-950/70">100% sustainable European woods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase / Interactive Style Selector */}
      <section id="portfolio" className="py-20 bg-white/40 border-y border-amber-900/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-terracotta">Selected Showcase</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3E2723]">Explore Our Design Domains</h2>
            <p className="text-sm text-amber-950/80 font-sans">
              Click the styles below to explore real execution budgets, selected materials, and custom projects.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 max-w-2xl mx-auto rounded-xl bg-amber-900/5 font-sans text-sm font-semibold">
            {[
              { id: 'luxury-residential', label: 'Luxury Residential' },
              { id: 'custom-cabinetry', label: 'Custom Cabinetry' },
              { id: 'commercial-retail', label: 'Commercial Retail' },
              { id: 'contemporary', label: 'Contemporary Skyhomes' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveStyle(tab.id)}
                className={`px-5 py-3 rounded-lg transition-all active:scale-95 ${
                  activeStyle === tab.id 
                    ? 'bg-terracotta text-white shadow-md' 
                    : 'text-amber-950 hover:bg-amber-900/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Display Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto">
            <div className="lg:col-span-7">
              <img 
                src={portfolioData[activeStyle].image} 
                alt={portfolioData[activeStyle].title}
                className="w-full aspect-video sm:aspect-[1.8/1] object-cover rounded-2xl shadow-md"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-[#3E2723]">
                {portfolioData[activeStyle].title}
              </h3>
              <p className="text-sm text-amber-950/80 leading-relaxed font-sans">
                {portfolioData[activeStyle].desc}
              </p>
              
              <div className="space-y-4 pt-2">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-terracotta">Primary Materials</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {portfolioData[activeStyle].materials.map((m, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-amber-900/5 text-xs text-amber-950 font-semibold border border-amber-900/5">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-terracotta">Average Execution Budget</span>
                  <span className="block font-heading text-lg font-bold text-[#3E2723] mt-0.5">
                    {portfolioData[activeStyle].budget}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Design Style Quiz */}
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 sm:p-12 shadow-xl border border-white/70 relative">
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shadow-inner">
            <HelpCircle size={24} />
          </div>

          <div className="text-center space-y-3 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-terracotta">Interactive Configurator</span>
            <h2 className="font-heading text-3xl font-bold text-[#3E2723]">Find Your Perfect Design Fit</h2>
            <p className="text-xs text-amber-950/70 font-sans">
              Answer 3 brief questions and get a custom layout design style proposal immediately.
            </p>
          </div>

          {quizStep < quizQuestions.length ? (
            <div className="space-y-6 font-sans">
              <div className="flex justify-between items-center text-xs font-semibold text-amber-950/60">
                <span>QUESTION {quizStep + 1} OF {quizQuestions.length}</span>
                <span>{Math.round(((quizStep) / quizQuestions.length) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full bg-amber-900/10 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-terracotta h-full transition-all duration-300"
                  style={{ width: `${((quizStep) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              <h4 className="font-heading text-xl font-bold text-[#3E2723] pt-2">
                {quizQuestions[quizStep].q}
              </h4>

              <div className="flex flex-col gap-3">
                {quizQuestions[quizStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(opt.val)}
                    className="w-full text-left p-5 rounded-xl border border-amber-900/10 hover:border-terracotta/50 hover:bg-terracotta/5 active:scale-[0.99] transition-all font-medium text-sm flex justify-between items-center"
                  >
                    <span>{opt.label}</span>
                    <ChevronRight size={16} className="text-amber-900/40" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 font-sans animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={32} />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-amber-950/60">Your Custom Style Recommendation</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#3E2723]">
                  {quizResult}
                </h3>
              </div>
              <p className="text-sm text-amber-950/80 leading-relaxed max-w-md mx-auto">
                Based on your preferences, we recommend an layout combining cozy terracotta highlights with modular white oak cabinets and glassmorphic accent walls.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="#booking-section"
                  className="px-6 py-3 rounded-full bg-terracotta text-white font-semibold hover:bg-[#b84900] shadow-md transition-all active:scale-95 text-sm"
                >
                  Discuss Recommendation Now
                </a>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 rounded-full bg-white/60 text-[#3E2723] font-semibold border border-amber-900/10 hover:bg-white/90 active:scale-95 transition-all text-sm"
                >
                  Restart Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Our Design Process */}
      <section id="process" className="py-20 bg-white/40 border-y border-amber-900/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-terracotta">How We Build</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3E2723]">Step-by-Step Excellence</h2>
            <p className="text-sm text-amber-950/80 font-sans">
              Click the phases below to see exactly what we deliver during each stage of execution.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto font-sans text-sm font-semibold">
            {[
              { id: 'consultation', icon: User, label: 'Consultation' },
              { id: 'concept', icon: Compass, label: 'Concept Design' },
              { id: '3d-rendering', icon: Layers, label: '3D Renderings' },
              { id: 'procurement', icon: Truck, label: 'Procurement' },
              { id: 'execution', icon: Hammer, label: 'Execution & Styling' }
            ].map(step => {
              const StepIcon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all active:scale-95 ${
                    activeStep === step.id 
                      ? 'bg-terracotta text-white border-terracotta shadow-lg shadow-amber-900/10' 
                      : 'bg-white/50 text-[#3E2723] border-amber-900/10 hover:bg-white/80'
                  }`}
                >
                  <StepIcon size={20} className={activeStep === step.id ? 'text-white' : 'text-terracotta'} />
                  <span className="text-xs text-center">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 border border-white/60 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-sans">
            <div className="md:col-span-8 space-y-4">
              <h4 className="font-heading text-xl font-bold text-[#3E2723]">
                {processSteps[activeStep].title}
              </h4>
              <p className="text-sm text-amber-950/80 leading-relaxed">
                {processSteps[activeStep].desc}
              </p>
            </div>
            <div className="md:col-span-4 bg-amber-900/5 rounded-2xl p-5 border border-amber-900/5 space-y-4">
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-terracotta">Estimated Timeline</span>
                <span className="block font-heading text-base font-bold text-[#3E2723]">{processSteps[activeStep].timeline}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-terracotta">Milestone Output</span>
                <span className="block font-heading text-base font-bold text-[#3E2723]">{processSteps[activeStep].deliverable}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-terracotta">Client Success</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3E2723]">Stories from Hyderabad Families</h2>
            <p className="text-sm text-amber-950/80 font-sans">
              Read how we transformed empty concrete walls into warm luxury sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-terracotta">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-amber-950/80 font-sans italic leading-relaxed">
                  "Aliraza turned our 4-BHK duplex in Banjara Hills into an absolutely stunning warm sanctuary. The terracotta panels and custom sliding glass partitions are the talk of every dinner party we host."
                </p>
              </div>
              <div className="pt-4 border-t border-amber-900/5">
                <h5 className="font-bold text-sm text-[#3E2723]">Mrs. Ananya Reddy</h5>
                <span className="text-[10px] text-amber-950/60 font-medium">Banjara Hills, Hyderabad</span>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-terracotta">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-amber-950/80 font-sans italic leading-relaxed">
                  "As cooking enthusiasts, the kitchen cabinetry was our top priority. California Dreamworks designed a gorgeous modular kitchen with high-end solid white oak shutters. Absolute perfection in utility."
                </p>
              </div>
              <div className="pt-4 border-t border-amber-900/5">
                <h5 className="font-bold text-sm text-[#3E2723]">Dr. Sandeep Rao</h5>
                <span className="text-[10px] text-amber-950/60 font-medium">Gachibowli, Hyderabad</span>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-terracotta">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-amber-950/80 font-sans italic leading-relaxed">
                  "We hired them to design our designer retail showroom in Jubilee Hills. Aliraza integrated sandstone textures, organic arch layouts, and frosted glass lighting to create an exceptionally upscale boutique."
                </p>
              </div>
              <div className="pt-4 border-t border-amber-900/5">
                <h5 className="font-bold text-sm text-[#3E2723]">Pranati & Rohan Varma</h5>
                <span className="text-[10px] text-amber-950/60 font-medium">Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Consultation Booking / Enquiry Form */}
      <section id="booking-section" className="py-20 bg-amber-50/50 border-t border-amber-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-terracotta rounded-[2rem] p-8 sm:p-10 text-white shadow-xl">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-100">Contact Studio</span>
              <h3 className="font-heading text-3xl font-bold leading-tight">Start Your Design Journey</h3>
              <p className="text-xs text-amber-100 font-sans leading-relaxed">
                Fill out our form to lock in a complimentary 1-on-1 space design layout consultation with Aliraza.
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-amber-200">Call Us Direct</span>
                  <a href="tel:+919849257860" className="font-semibold hover:underline">+91 98492 57860</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-amber-200">Email Studio</span>
                  <a href="mailto:design@californiadreamworks.in" className="font-semibold hover:underline">design@californiadreamworks.in</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-amber-200">Studio Location</span>
                  <span className="font-semibold block max-w-[200px]">Inwinex Towers, Road No. 2, Banjara Hills</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/15 flex items-center gap-2 text-[10px] text-amber-100">
              <Lock size={12} />
              <span>We never share your contact details.</span>
            </div>
          </div>

          <div className="lg:col-span-7 glass-card rounded-[2rem] p-8 sm:p-10 border border-white/60 shadow-xl flex flex-col justify-center">
            {submittedData ? (
              <div className="text-center space-y-6 font-sans animate-fade-in py-8">
                <div className="w-16 h-16 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-2xl font-bold text-[#3E2723]">Consultation Reserved!</h4>
                  <p className="text-sm text-amber-950/80">
                    Thank you, <strong className="text-[#3E2723]">{submittedData.name}</strong>. Aliraza will review your information and call you within 24 hours.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-900/5 border border-amber-900/5 max-w-xs mx-auto text-xs">
                  <span className="block text-amber-950/60 uppercase font-bold">Confirmation Reference</span>
                  <span className="font-mono text-base font-bold text-terracotta mt-1 block">{submittedData.refNo}</span>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-[#3E2723] font-semibold border border-amber-900/10 hover:bg-white/90 active:scale-95 transition-all text-xs"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-amber-950/80">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Rahul Reddy"
                      className={`w-full p-3 rounded-xl border bg-white/50 focus:outline-none focus:bg-white transition-all ${
                        errors.name ? 'border-red-500' : 'border-amber-900/10 focus:border-terracotta'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] font-semibold text-red-500">{errors.name}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-amber-950/80">Phone Number *</label>
                    <input 
                      type="text" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleInputChange} 
                      placeholder="e.g. +91 98492 57860"
                      className={`w-full p-3 rounded-xl border bg-white/50 focus:outline-none focus:bg-white transition-all ${
                        errors.phone ? 'border-red-500' : 'border-amber-900/10 focus:border-terracotta'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] font-semibold text-red-500">{errors.phone}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-amber-950/80">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleInputChange} 
                    placeholder="e.g. rahul@gmail.com"
                    className={`w-full p-3 rounded-xl border bg-white/50 focus:outline-none focus:bg-white transition-all ${
                      errors.email ? 'border-red-500' : 'border-amber-900/10 focus:border-terracotta'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] font-semibold text-red-500">{errors.email}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1 relative">
                    <label className="block text-xs font-semibold text-amber-950/80">Project Type *</label>
                    <div className="relative">
                      <select 
                        name="projectType" 
                        value={form.projectType} 
                        onChange={handleInputChange} 
                        className={`w-full p-3 rounded-xl border bg-white/50 appearance-none focus:outline-none focus:bg-white transition-all ${
                          errors.projectType ? 'border-red-500' : 'border-amber-900/10 focus:border-terracotta'
                        }`}
                      >
                        <option value="">Select type</option>
                        <option value="Residential">Luxury Villa/Apt</option>
                        <option value="Cabinetry">Custom Cabinetry</option>
                        <option value="Commercial">Retail/Office</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-950/50 pointer-events-none" />
                    </div>
                    {errors.projectType && <span className="text-[10px] font-semibold text-red-500">{errors.projectType}</span>}
                  </div>

                  <div className="space-y-1 relative">
                    <label className="block text-xs font-semibold text-amber-950/80">Budget *</label>
                    <div className="relative">
                      <select 
                        name="budget" 
                        value={form.budget} 
                        onChange={handleInputChange} 
                        className={`w-full p-3 rounded-xl border bg-white/50 appearance-none focus:outline-none focus:bg-white transition-all ${
                          errors.budget ? 'border-red-500' : 'border-amber-900/10 focus:border-terracotta'
                        }`}
                      >
                        <option value="">Select range</option>
                        <option value="15L-30L">₹15L - ₹30L</option>
                        <option value="30L-50L">₹30L - ₹50L</option>
                        <option value="50L-1Cr">₹50L - ₹1Cr</option>
                        <option value="1Cr+">₹1Cr+</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-950/50 pointer-events-none" />
                    </div>
                    {errors.budget && <span className="text-[10px] font-semibold text-red-500">{errors.budget}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-amber-950/80">Start Date *</label>
                    <input 
                      type="date" 
                      name="startDate" 
                      value={form.startDate} 
                      onChange={handleInputChange} 
                      className={`w-full p-3 rounded-xl border bg-white/50 focus:outline-none focus:bg-white transition-all ${
                        errors.startDate ? 'border-red-500' : 'border-amber-900/10 focus:border-terracotta'
                      }`}
                    />
                    {errors.startDate && <span className="text-[10px] font-semibold text-red-500">{errors.startDate}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-amber-950/80">Your Message (Optional)</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleInputChange} 
                    placeholder="Tell us about your home, layout objectives, or layout preferences..."
                    rows="3"
                    className="w-full p-3 rounded-xl border border-amber-900/10 bg-white/50 focus:outline-none focus:border-terracotta focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 rounded-xl bg-terracotta text-white font-semibold hover:bg-[#b84900] active:scale-[0.99] disabled:opacity-55 transition-all flex items-center justify-center gap-2 text-base shadow-md"
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
                    <>
                      <Send size={16} />
                      Request Free Proposal
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Studio Location & Hours Footer */}
      <footer className="bg-amber-950 text-amber-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-900/20 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-terracotta flex items-center justify-center text-white font-heading font-bold text-xl">
                C
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white">California</span>
                <span className="block text-[10px] tracking-widest uppercase text-terracotta font-semibold">Dreamworks</span>
              </div>
            </div>
            <p className="text-xs text-amber-200/80 leading-relaxed max-w-sm">
              We design and construct premium living spaces that invoke warmth, utility, and timeless natural luxury. Visit our Banjara Hills experience center today.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-200">
                <Phone size={14} className="text-terracotta" />
                <span>+91 98492 57860</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Mail size={14} className="text-terracotta" />
                <span>design@californiadreamworks.in</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-white">Experience Center Hours</h4>
            <div className="space-y-2 text-xs text-amber-200/80">
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white">10:00 AM - 7:30 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Saturday</span>
                <span className="font-semibold text-white">11:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Sunday</span>
                <span className="text-terracotta font-semibold">By Appointment Only</span>
              </div>
            </div>
            
            <div className="pt-2">
              <h5 className="font-heading text-sm font-semibold text-white">Studio Address</h5>
              <p className="text-xs text-amber-200/70 mt-1 leading-relaxed">
                Inwinex Towers, Road No. 2, Opposite Rainbow Children's Hospital, Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-white">Location Map</h4>
            {/* Embedded Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-[1.5/1] shadow-inner bg-amber-900/20 flex flex-col items-center justify-center text-center p-4">
              <MapPin size={24} className="text-terracotta mb-2" />
              <span className="text-xs font-semibold text-white">Banjara Hills Experience Center</span>
              <p className="text-[10px] text-amber-200/60 mt-1 max-w-[200px]">
                Opposite Rainbow Children's Hospital, Road No. 2
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-3 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-[10px] font-semibold text-white transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-amber-200/50">
          <p>© {new Date().getFullYear()} California Dreamworks Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

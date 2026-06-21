"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  Check, 
  Sparkles, 
  ChevronRight, 
  Send, 
  User, 
  Calendar, 
  Compass, 
  BookOpen, 
  Layout, 
  Info,
  DollarSign,
  ChevronLeft,
  X
} from 'lucide-react';

export default function RaaveraInteriorDesignerPage() {
  // 1. Portfolio Style Selector state
  const [selectedStyle, setSelectedStyle] = useState('Modern Minimalist');

  const portfolioStyles = {
    'Modern Minimalist': {
      title: 'Serene Sanctuary',
      budget: '₹25L - ₹45L',
      materials: 'Warm Fluted Oak, Matte Travertine Stone, Cream Bouclé Fabrics',
      description: 'A breath of fresh air. Focusing on light, negative space, and concealed functional storage solutions.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
    },
    'Art Deco': {
      title: 'Heritage Brass & Velvet Lounge',
      budget: '₹45L - ₹75L',
      materials: 'Polished Brass Trims, Deep Emerald Velvet, Chevron Walnut Panels',
      description: 'Elegant geometric structures combined with rich, indulgent textures to make a bold personal statement.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
    },
    'Luxury Classical': {
      title: 'Imperial Arch Villa',
      budget: '₹60L - ₹1.2Cr',
      materials: 'Italian Statuario Marble, Elaborate Wall Mouldings, Gold Leaf Accents',
      description: 'Grand proportions, custom-crafted pillars, and classic European symmetry adapted for Hyderabad living.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
    },
    'Contemporary': {
      title: 'Fluid Urban Duplex',
      budget: '₹35L - ₹60L',
      materials: 'Microconcrete Floors, Tinted Glass partitions, Matte Black Fixtures',
      description: 'Experimental layouts featuring bold curved walls, smart-home lighting grids, and custom furniture pieces.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    }
  };

  // 2. Interactive Design Quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState('');

  const quizQuestions = [
    {
      question: 'Which color palette makes you feel most at ease?',
      options: [
        { label: 'Soft Neutrals, Creams & Beiges', value: 'Modern Minimalist' },
        { label: 'Rich Jewel Tones (Emerald, Sapphire)', value: 'Art Deco' },
        { label: 'Elegant Creams with Gold/Marble accents', value: 'Luxury Classical' },
        { label: 'Bold Earthy Contrasts & Clay', value: 'Contemporary' }
      ]
    },
    {
      question: 'How do you prefer your spatial flow & furniture layouts?',
      options: [
        { label: 'Completely open-plan, low profile, hidden cabinets', value: 'Modern Minimalist' },
        { label: 'Symmetrical, centered around luxury statement items', value: 'Art Deco' },
        { label: 'Formal, high back chairs, and grand archways', value: 'Luxury Classical' },
        { label: 'Flexible, modular setups with curved organic seating', value: 'Contemporary' }
      ]
    },
    {
      question: 'What texture draws your eye first?',
      options: [
        { label: 'Tactile bouclé and raw linen fabrics', value: 'Modern Minimalist' },
        { label: 'Polished metallics, high-gloss lacquer, and velvet', value: 'Art Deco' },
        { label: 'Carved natural stone, ornate moulding, and silk', value: 'Luxury Classical' },
        { label: 'Matte microcement, metal grids, and smoked glass', value: 'Contemporary' }
      ]
    }
  ];

  const handleQuizAnswer = (value) => {
    const nextAnswers = [...quizAnswers, value];
    setQuizAnswers(nextAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Find the most frequent answer
      const counts = nextAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      let bestStyle = 'Modern Minimalist';
      let maxCount = 0;
      Object.keys(counts).forEach((style) => {
        if (counts[style] > maxCount) {
          maxCount = counts[style];
          bestStyle = style;
        }
      });
      setQuizResult(bestStyle);
      setQuizStep(3); // Result step
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult('');
  };

  // 3. Design Process interactive state
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const processSteps = [
    {
      title: 'Consultation',
      subtitle: 'Understanding Your Narrative',
      description: 'We host an in-depth conversation at our Banjara Hills studio to map your spatial habits, family needs, and aesthetic preferences.'
    },
    {
      title: 'Concept',
      subtitle: 'Moodboards & Spatial Layouts',
      description: 'Our studio develops layout options and material combinations, setting a clear design signature and baseline budget.'
    },
    {
      title: '3D Rendering',
      subtitle: 'High-Fidelity Pre-Visualizations',
      description: 'We generate meticulous, light-mapped 3D visuals of your home so you can preview every fixture, finish, and shadow.'
    },
    {
      title: 'Procurement',
      subtitle: 'Sourcing Noble Materials',
      description: 'We handle quality control and order directly from premium veneer, marble, and upholstery workshops across India and Italy.'
    },
    {
      title: 'Execution',
      subtitle: 'Turnkey Handcrafted Realization',
      description: 'Our skilled craftsmen complete framing, MEP engineering, ceiling detailing, and custom installation under strict supervisor oversight.'
    }
  ];

  // 4. Consultation Booking state & validation
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Interiors',
    budgetRange: '₹30L - ₹50L',
    startDate: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const validateField = (name, val) => {
    let err = '';
    if (name === 'name' && !val.trim()) {
      err = 'Please enter your name.';
    }
    if (name === 'phone') {
      const cleanPhone = val.replace(/[\s-]/g, '');
      if (!val.trim()) {
        err = 'Please enter your phone number.';
      } else if (!/^\+?[0-9]{10,12}$/.test(cleanPhone)) {
        err = 'Please enter a valid 10-12 digit phone number.';
      }
    }
    if (name === 'email') {
      if (!val.trim()) {
        err = 'Please enter your email.';
      } else if (!/\S+@\S+\.\S+/.test(val)) {
        err = 'Please enter a valid email address.';
      }
    }
    if (name === 'startDate' && !val) {
      err = 'Please select a preferred start date.';
    }
    return err;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
    
    // Clear errors dynamically on input change
    const err = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    Object.keys(bookingForm).forEach((key) => {
      const err = validateField(key, bookingForm[key]);
      if (err) {
        errors[key] = err;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to the first error
      const firstErrField = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    // Success flow
    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(`RAV-2026-${randNum}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3E2E20] selection:bg-[#C5A880]/20 selection:text-[#3E2E20]">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DB]/40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-widest text-[#3E2E20] uppercase font-poppins">
              Raavera
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#C5A880] uppercase font-medium">
              Banjara Hills Studio
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-wider text-[#5A4F44]">
            <a href="#hero" className="hover:text-[#C5A880] transition-colors py-1">Home</a>
            <a href="#bio" className="hover:text-[#C5A880] transition-colors py-1">Philosophy</a>
            <a href="#portfolio" className="hover:text-[#C5A880] transition-colors py-1">Portfolio</a>
            <a href="#quiz" className="hover:text-[#C5A880] transition-colors py-1">Style Quiz</a>
            <a href="#process" className="hover:text-[#C5A880] transition-colors py-1">Our Process</a>
            <a href="#testimonials" className="hover:text-[#C5A880] transition-colors py-1">Testimonials</a>
          </nav>

          <a 
            href="#booking"
            className="px-5 py-2.5 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#C5A880] rounded-xl text-xs uppercase font-bold tracking-wider text-[#3E2E20] transition-all shadow-[4px_4px_10px_#eae5da,-4px_-4px_10px_#ffffff] hover:shadow-[2px_2px_5px_#eae5da,-2px_-2px_5px_#ffffff] active:scale-95 flex items-center gap-1.5"
          >
            <span>Book Visit</span>
            <ChevronRight size={14} className="text-[#C5A880]" />
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#F2ECE0] text-[#C5A880] text-xs font-semibold tracking-wider w-fit shadow-[inset_3px_3px_6px_#eae5da,inset_-3px_-3px_6px_#ffffff]">
              <Sparkles size={12} />
              <span>Premium Space Planning & Interiors</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-poppins font-semibold text-[#3E2E20] leading-tight">
              Sculpting Light, <br />
              <span className="italic font-normal text-[#C5A880]">Space & Silence</span>
            </h1>

            <p className="text-sm lg:text-base text-[#6B5E53] leading-relaxed max-w-lg">
              Welcome to Raavera. We craft bespoke residential sanctuaries using Warm Neumorphic design principles—soft curves, noble natural materials, and recessed lighting that transforms homes in Banjara Hills and beyond into peaceful, functional works of art.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#booking"
                className="px-8 py-4 bg-[#FAF8F5] text-[#3E2E20] font-poppins text-xs uppercase tracking-widest font-bold border border-[#F2ECE0] rounded-2xl shadow-[6px_6px_12px_#eae5da,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#eae5da,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 active:scale-98"
              >
                Schedule Private Consultation
              </a>
              <a 
                href="#portfolio"
                className="px-8 py-4 border border-[#C5A880]/30 hover:border-[#C5A880] text-[#C5A880] font-poppins text-xs uppercase tracking-widest font-bold rounded-2xl transition-all active:scale-98"
              >
                Explore Styles
              </a>
            </div>
          </div>

          {/* Luxury Interior Photo with Neumorphic Frame */}
          <div className="flex justify-center">
            <div className="bg-[#FAF8F5] rounded-3xl p-5 border border-[#F2ECE0] shadow-[12px_12px_24px_#eae5da,-12px_-12px_24px_#ffffff]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-[290px] sm:w-[350px] shadow-[inset_6px_6px_12px_rgba(0,0,0,0.05)]">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury beige-toned living room showing warm neumorphic plaster walls and soft upholstery" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 bg-[#FAF8F5] px-6 border-y border-[#EAE5DB]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '140+', label: 'Residential Interiors' },
            { metric: '12+', label: 'Years of Experience' },
            { metric: '8', label: 'National Awards' },
            { metric: '100%', label: 'Satisfied Families' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-[#FAF8F5] rounded-2xl p-6 text-center border border-[#F2ECE0] shadow-[5px_5px_10px_#eae5da,-5px_-5px_10px_#ffffff]"
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#C5A880] font-poppins">{stat.metric}</div>
              <div className="text-[10px] tracking-widest uppercase text-[#8E7E70] mt-1.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRINCIPAL DESIGNER BIO */}
      <section id="bio" className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-last md:order-first">
            <div className="bg-[#FAF8F5] rounded-3xl p-4 border border-[#F2ECE0] shadow-[10px_10px_20px_#eae5da,-10px_-10px_20px_#ffffff]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-[280px] sm:w-[320px]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Principal Designer Raavera standing in a bright minimalist office" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] font-poppins">The Mind Behind The Space</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#3E2E20] font-poppins">Principal Designer Raavera</h2>
            <div className="h-0.5 w-16 bg-[#C5A880] rounded"></div>
            
            <p className="text-sm lg:text-base text-[#6B5E53] leading-relaxed">
              "A home should not demand attention; it should welcome it with a quiet exhale." Raavera believes in the architecture of simplicity. Her philosophy revolves around light-filled voids, raw tactile textures, and subtle neumorphic curves that merge spatial function with spiritual peace.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#FAF8F5] border border-[#F2ECE0] shadow-[2px_2px_4px_#eae5da,-2px_-2px_4px_#ffffff] text-[#C5A880]">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#3E2E20] font-poppins">Academic Excellence</h4>
                  <p className="text-xs text-[#8E7E70] mt-0.5">B.Arch, School of Planning and Architecture | Master of Interior Architecture, Milan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#FAF8F5] border border-[#F2ECE0] shadow-[2px_2px_4px_#eae5da,-2px_-2px_4px_#ffffff] text-[#C5A880]">
                  <Compass size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#3E2E20] font-poppins">Specialized Philosophy</h4>
                  <p className="text-xs text-[#8E7E70] mt-0.5">Warm Neumorphism, Space Optimization, Flawless lighting acoustics, and Custom Bespoke Furniture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO SHOWCASE & STYLE SELECTOR */}
      <section id="portfolio" className="py-24 px-6 bg-[#FAF8F5] border-t border-[#EAE5DB]/30">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] font-poppins text-center">Bespoke Galleries</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#3E2E20] font-poppins text-center mt-2 mb-10">Bespoke Style Showcase</h2>

          {/* Style Selector Tabs with neumorphic design */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 p-2 bg-[#FAF8F5] border border-[#F2ECE0] rounded-2xl shadow-[inset_4px_4px_8px_#eae5da,inset_-4px_-4px_8px_#ffffff]">
            {Object.keys(portfolioStyles).map((styleName) => (
              <button
                key={styleName}
                onClick={() => setSelectedStyle(styleName)}
                className={`px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                  selectedStyle === styleName 
                    ? 'bg-[#FAF8F5] text-[#C5A880] shadow-[4px_4px_10px_#eae5da,-4px_-4px_10px_#ffffff] border border-[#F2ECE0]' 
                    : 'text-[#8E7E70] hover:text-[#3E2E20] border border-transparent'
                }`}
              >
                {styleName}
              </button>
            ))}
          </div>

          {/* Style Detail Card */}
          <div className="w-full max-w-5xl bg-[#FAF8F5] border border-[#F2ECE0] rounded-3xl p-8 shadow-[8px_8px_20px_#eae5da,-8px_-8px_20px_#ffffff] grid md:grid-cols-12 gap-10 items-center">
            
            {/* Gallery Image */}
            <div className="md:col-span-7 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video w-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06)] border border-[#EAE5DB]/40">
                <img 
                  src={portfolioStyles[selectedStyle].image} 
                  alt={`${selectedStyle} interior execution detail by Raavera`} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Gallery Details */}
            <div className="md:col-span-5 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#F2ECE0] text-[#C5A880] text-[10px] uppercase font-bold tracking-wider w-fit shadow-[inset_2px_2px_4px_#eae5da,inset_-2px_-2px_4px_#ffffff]">
                <Layout size={10} />
                <span>{selectedStyle}</span>
              </div>

              <h3 className="text-2xl font-semibold text-[#3E2E20] font-poppins">
                {portfolioStyles[selectedStyle].title}
              </h3>

              <p className="text-sm text-[#6B5E53] leading-relaxed">
                {portfolioStyles[selectedStyle].description}
              </p>

              <div className="space-y-3 border-t border-[#EAE5DB]/50 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#8E7E70] uppercase">Selected Materials:</span>
                  <span className="text-[#3E2E20] text-right max-w-[240px] font-medium">{portfolioStyles[selectedStyle].materials}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#8E7E70] uppercase">Average Budget:</span>
                  <span className="text-[#C5A880] font-bold">{portfolioStyles[selectedStyle].budget}</span>
                </div>
              </div>

              <a 
                href="#booking"
                onClick={() => {
                  setBookingForm(prev => ({
                    ...prev,
                    projectType: selectedStyle,
                    message: `Interested in the ${portfolioStyles[selectedStyle].title} showcase collection.`
                  }));
                }}
                className="px-6 py-3 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#C5A880] rounded-xl text-center text-xs uppercase font-bold tracking-wider text-[#3E2E20] transition-all shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#eae5da,-2px_-2px_4px_#ffffff] active:scale-95"
              >
                Inquire About This Style
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE DESIGN STYLE QUIZ */}
      <section id="quiz" className="py-24 px-6 bg-[#FAF8F5] border-t border-[#EAE5DB]/30">
        <div className="max-w-4xl mx-auto bg-[#FAF8F5] border border-[#F2ECE0] rounded-3xl p-8 sm:p-12 shadow-[12px_12px_24px_#eae5da,-12px_-12px_24px_#ffffff] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-bl-full pointer-events-none"></div>

          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] font-poppins">Discover Your Identity</span>
            <h2 className="text-3xl font-semibold text-[#3E2E20] font-poppins mt-2">Design Style Matching Quiz</h2>
            <p className="text-xs text-[#8E7E70] mt-2">Answer 3 simple layout and texture questions to find your personalized design aesthetic.</p>
          </div>

          {quizStep < 3 ? (
            <div className="flex flex-col space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-[#8E7E70] mb-2">
                <span>QUESTION {quizStep + 1} OF 3</span>
                <span className="text-[#C5A880]">{Math.round(((quizStep) / 3) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full h-2 bg-[#FAF8F5] rounded-full border border-[#F2ECE0] shadow-[inset_1px_1px_2px_#eae5da,inset_-1px_-1px_2px_#ffffff] overflow-hidden">
                <div 
                  className="h-full bg-[#C5A880] transition-all duration-500" 
                  style={{ width: `${((quizStep + 1) / 3) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <h3 className="text-base sm:text-lg font-medium text-[#3E2E20] font-poppins text-center py-2">
                {quizQuestions[quizStep].question}
              </h3>

              {/* Options */}
              <div className="grid gap-4">
                {quizQuestions[quizStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(option.value)}
                    className="w-full text-left p-5 rounded-2xl bg-[#FAF8F5] border border-[#F2ECE0] hover:border-[#C5A880] text-xs font-medium text-[#5A4F44] hover:text-[#3E2E20] transition-all duration-300 shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#eae5da,inset_-2px_-2px_4px_#ffffff] active:scale-[0.99]"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Step */
            <div className="flex flex-col items-center text-center space-y-6 py-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#F2ECE0] shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff] flex items-center justify-center text-[#C5A880]">
                <Check size={28} />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8E7E70] font-poppins">Your Recommended Style</span>
                <h3 className="text-3xl font-bold text-[#C5A880] font-poppins">{quizResult}</h3>
              </div>

              <p className="text-xs text-[#6B5E53] max-w-md leading-relaxed">
                Your answers indicate a strong preference for spaces defined by {quizResult}. This design language relies heavily on materials like {portfolioStyles[quizResult].materials} with an average build budget of {portfolioStyles[quizResult].budget}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                <button
                  onClick={() => {
                    setBookingForm(prev => ({
                      ...prev,
                      projectType: quizResult,
                      message: `Result from Style Matcher Quiz: Recommended style is ${quizResult}.`
                    }));
                    const bookingSection = document.getElementById('booking');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3.5 bg-[#FAF8F5] text-[#3E2E20] font-poppins text-xs uppercase tracking-widest font-bold border border-[#F2ECE0] rounded-xl shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#eae5da,inset_-2px_-2px_4px_#ffffff] active:scale-95 transition-all"
                >
                  Apply This Style To Booking
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3.5 border border-[#C5A880]/30 hover:border-[#C5A880] text-[#C5A880] font-poppins text-xs uppercase tracking-widest font-bold rounded-xl transition-all active:scale-95"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. OUR DESIGN PROCESS */}
      <section id="process" className="py-24 px-6 bg-[#FAF8F5] border-t border-[#EAE5DB]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] font-poppins">Our Roadmap</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#3E2E20] font-poppins mt-2">Bespoke Design Journey</h2>
            <p className="text-xs text-[#8E7E70] mt-2">A structured five-step workflow designed to take your interior dream from concept to completion.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Step Selection Buttons */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl bg-[#FAF8F5] border border-[#F2ECE0] transition-all duration-300 flex items-center gap-4 ${
                    activeProcessStep === idx
                      ? 'shadow-[6px_6px_12px_#eae5da,-6px_-6px_12px_#ffffff] border-[#C5A880]'
                      : 'shadow-[inset_2px_2px_4px_#eae5da,inset_-2px_-2px_4px_#ffffff] opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className={`text-sm font-bold font-poppins flex items-center justify-center w-8 h-8 rounded-full border border-[#F2ECE0] shadow-[2px_2px_4px_#eae5da,-2px_-2px_4px_#ffffff] ${
                    activeProcessStep === idx ? 'text-[#C5A880]' : 'text-[#8E7E70]'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#3E2E20] font-poppins">{step.title}</h4>
                    <p className="text-[10px] text-[#8E7E70] mt-0.5">{step.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] border border-[#F2ECE0] rounded-3xl p-8 sm:p-10 shadow-[10px_10px_20px_#eae5da,-10px_-10px_20px_#ffffff] min-h-[280px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#EAE5DB]/40 pb-4 mb-6">
                    <span className="text-xs font-bold text-[#C5A880] tracking-widest uppercase font-poppins">STEP 0{activeProcessStep + 1} DETAILED BREAKDOWN</span>
                    <BookOpen size={16} className="text-[#C5A880]/60" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#3E2E20] font-poppins mb-3">
                    {processSteps[activeProcessStep].subtitle}
                  </h3>

                  <p className="text-sm text-[#6B5E53] leading-relaxed">
                    {processSteps[activeProcessStep].description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-8 text-[11px] font-bold text-[#8E7E70] uppercase tracking-wider">
                  <span>Standard Timeline: 2-3 Weeks</span>
                  <span>Turnkey Verification Guaranteed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-[#FAF8F5] border-t border-[#EAE5DB]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] font-poppins">Family Stories</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#3E2E20] font-poppins mt-2">Hyderabad Client Reviews</h2>
            <p className="text-xs text-[#8E7E70] mt-2">See how we have shaped living structures for families and professionals in local estates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Raavera turned our Jubilee Hills villa into a warm, serene sanctuary. The neumorphic wall panels and brass detailing are beautiful.",
                author: "Ananya Reddy",
                project: "4BHK Luxury Villa, Road No. 10"
              },
              {
                quote: "Every corner of our home feels custom-made. Her attention to space planning made our 4BHK apartment feel twice as large.",
                author: "Dr. Srinivas Rao",
                project: "Penthouse Apartment, Film Nagar"
              },
              {
                quote: "We wanted a home that was minimalist yet warm. Raavera delivered exactly that, staying within our timeline and budget.",
                author: "The Goud Family",
                project: "Custom Home Decor, Banjara Hills"
              }
            ].map((testi, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF8F5] border border-[#F2ECE0] rounded-3xl p-8 shadow-[6px_6px_12px_#eae5da,-6px_-6px_12px_#ffffff] flex flex-col justify-between"
              >
                <p className="text-xs italic text-[#6B5E53] leading-relaxed">
                  "{testi.quote}"
                </p>
                <div className="border-t border-[#EAE5DB]/40 pt-4 mt-6">
                  <h4 className="text-xs font-bold text-[#3E2E20] font-poppins">{testi.author}</h4>
                  <p className="text-[10px] text-[#C5A880] mt-0.5 font-medium">{testi.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION BOOKING / ENQUIRY FORM */}
      <section id="booking" className="py-24 px-6 bg-[#FAF8F5] border-t border-[#EAE5DB]/30">
        <div className="max-w-3xl mx-auto bg-[#FAF8F5] border border-[#F2ECE0] rounded-3xl p-8 sm:p-12 shadow-[12px_12px_24px_#eae5da,-12px_-12px_24px_#ffffff]">
          
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] font-poppins">Consultation Suite</span>
            <h2 className="text-3xl font-semibold text-[#3E2E20] font-poppins mt-2">Book Your Studio Visit</h2>
            <p className="text-xs text-[#8E7E70] mt-2">Fill in your requirements below. Our principal designer will personally contact you.</p>
          </div>

          {submittedRef ? (
            /* Success screen with confirmation reference number */
            <div className="text-center space-y-6 py-12 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#F2ECE0] shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff] flex items-center justify-center text-[#1E8449] mx-auto">
                <Check size={28} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#3E2E20] font-poppins">Consultation Scheduled!</h3>
                <p className="text-xs text-[#8E7E70]">A confirmation has been sent to your email.</p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#F2ECE0] rounded-2xl shadow-[inset_2px_2px_4px_#eae5da,inset_-2px_-2px_4px_#ffffff] max-w-sm mx-auto">
                <span className="text-[10px] text-[#8E7E70] uppercase font-bold tracking-widest">REFERENCE NUMBER</span>
                <div className="text-xl font-bold text-[#C5A880] font-poppins mt-1">{submittedRef}</div>
              </div>

              <p className="text-xs text-[#6B5E53] leading-relaxed max-w-md mx-auto">
                Thank you for reaching out to Raavera. Our design coordinators will contact you at <strong>{bookingForm.phone}</strong> within 24 business hours to finalize your calendar slot.
              </p>

              <button
                onClick={() => {
                  setSubmittedRef('');
                  setBookingForm({
                    name: '',
                    phone: '',
                    email: '',
                    projectType: 'Residential Interiors',
                    budgetRange: '₹30L - ₹50L',
                    startDate: '',
                    message: ''
                  });
                }}
                className="px-6 py-2.5 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#C5A880] rounded-xl text-xs uppercase font-bold tracking-wider text-[#3E2E20] transition-all shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#eae5da,-2px_-2px_4px_#ffffff] active:scale-95"
              >
                Book Another Consultation
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-xs text-[#3E2E20] focus:outline-none transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff] ${
                        formErrors.name ? 'border-red-400 focus:border-red-500' : 'border-[#F2ECE0] focus:border-[#C5A880]'
                      }`}
                      placeholder="e.g. Ananya Reddy"
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1">{formErrors.name}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-xs text-[#3E2E20] focus:outline-none transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff] ${
                        formErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#F2ECE0] focus:border-[#C5A880]'
                      }`}
                      placeholder="e.g. +91 93962 22444"
                    />
                    {formErrors.phone && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-xs text-[#3E2E20] focus:outline-none transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff] ${
                        formErrors.email ? 'border-red-400 focus:border-red-500' : 'border-[#F2ECE0] focus:border-[#C5A880]'
                      }`}
                      placeholder="e.g. ananya@domain.com"
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Start Date */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Project Start Date *</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={bookingForm.startDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-xs text-[#3E2E20] focus:outline-none transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff] ${
                        formErrors.startDate ? 'border-red-400 focus:border-red-500' : 'border-[#F2ECE0] focus:border-[#C5A880]'
                      }`}
                    />
                    {formErrors.startDate && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1">{formErrors.startDate}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Project Type</label>
                  <select
                    name="projectType"
                    value={bookingForm.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#F2ECE0] text-xs text-[#3E2E20] focus:outline-none focus:border-[#C5A880] transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff]"
                  >
                    <option value="Residential Interiors">Residential Interiors</option>
                    <option value="Space Planning">Space Planning</option>
                    <option value="Custom Home Decor">Custom Home Decor</option>
                    <option value="Modern Minimalist">Modern Minimalist Suite</option>
                    <option value="Art Deco">Art Deco Lounge</option>
                    <option value="Luxury Classical">Luxury Classical Villa</option>
                    <option value="Contemporary">Contemporary Flat</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Budget Range</label>
                  <select
                    name="budgetRange"
                    value={bookingForm.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#F2ECE0] text-xs text-[#3E2E20] focus:outline-none focus:border-[#C5A880] transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff]"
                  >
                    <option value="₹15L - ₹30L">₹15L - ₹30L</option>
                    <option value="₹30L - ₹50L">₹30L - ₹50L</option>
                    <option value="₹50L - ₹80L">₹50L - ₹80L</option>
                    <option value="₹80L+">₹80L+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#8E7E70]">Tell Us About Your Space</label>
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#F2ECE0] text-xs text-[#3E2E20] focus:outline-none focus:border-[#C5A880] transition-all shadow-[inset_1.5px_1.5px_3px_#eae5da,inset_-1.5px_-1.5px_3px_#ffffff]"
                  placeholder="Tell us about the property location, size, and layout requests..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-[#FAF8F5] text-[#3E2E20] font-poppins text-xs uppercase tracking-widest font-bold border border-[#F2ECE0] shadow-[6px_6px_12px_#eae5da,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#eae5da,inset_-4px_-4px_8px_#ffffff] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Securing Calendar Slot...</span>
                ) : (
                  <>
                    <span>Confirm Consultation Booking</span>
                    <Send size={12} className="text-[#C5A880]" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </section>

      {/* 9. STUDIO LOCATION & HOURS FOOTER */}
      <footer className="bg-[#FAF8F5] border-t border-[#EAE5DB] px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          
          {/* Studio Brand and Hours */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-[#3E2E20] uppercase font-poppins">Raavera</span>
              <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase font-medium">Bespoke Residential Studio</span>
            </div>

            <p className="text-xs text-[#6B5E53] leading-relaxed max-w-sm">
              We specialize in creating premium custom interiors and furniture layouts that celebrate light, noble textures, and warm neumorphic simplicity.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-[#5A4F44]">
                <Clock size={14} className="text-[#C5A880]" />
                <span>Monday - Saturday: 10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#5A4F44]">
                <Phone size={14} className="text-[#C5A880]" />
                <span>+91 93962 22444</span>
              </div>
            </div>
          </div>

          {/* Location and Address Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3E2E20] font-poppins">Studio Location</h4>
            <div className="h-0.5 w-8 bg-[#C5A880] rounded"></div>
            
            <div className="flex items-start gap-2.5 text-xs text-[#6B5E53] leading-relaxed">
              <MapPin size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#3E2E20]">Raavera Banjara Hills</p>
                <p className="mt-0.5">Banjara Hills, Hyderabad - 500034</p>
                <p className="text-[10px] text-[#C5A880] font-medium mt-1">Landmark: Near State Bank ATM</p>
              </div>
            </div>
          </div>

          {/* Embedded Map Placeholder */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3E2E20] font-poppins">Studio Map</h4>
            <div className="h-0.5 w-8 bg-[#C5A880] rounded"></div>

            <div className="bg-[#FAF8F5] border border-[#F2ECE0] rounded-2xl p-3 shadow-[inset_2px_2px_4px_#eae5da,inset_-2px_-2px_4px_#ffffff]">
              <div className="h-32 rounded-xl bg-[#FAF8F5] border border-[#EAE5DB]/60 relative flex flex-col items-center justify-center p-4 text-center shadow-[4px_4px_8px_#eae5da,-4px_-4px_8px_#ffffff]">
                {/* SVG Map Icon representation */}
                <Compass size={28} className="text-[#C5A880] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#3E2E20] mt-2">Banjara Hills, Road No. 1</span>
                <span className="text-[9px] text-[#8E7E70] mt-0.5">Click for Directions via Google Maps</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                >
                  Map Link
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-[#EAE5DB] mt-16 pt-8 text-center text-[10px] text-[#8E7E70] font-medium tracking-wider uppercase font-poppins">
          &copy; {new Date().getFullYear()} Raavera Interior Design Studio. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

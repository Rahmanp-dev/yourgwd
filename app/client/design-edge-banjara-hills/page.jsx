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
  Layers,
  Heart,
  HelpCircle
} from 'lucide-react';

export default function DesignEdgePage() {
  // 1. Portfolio Style Selector state
  const [selectedStyle, setSelectedStyle] = useState('Biophilic Office');

  const portfolioStyles = {
    'Biophilic Office': {
      title: 'Green Canopy HQ',
      budget: '₹45L - ₹85L',
      materials: 'Preserved Moss Panels, Sustainable Bamboo Veneer, Air-Filtering Indoor Palms',
      description: 'A revolutionary office layout optimizing team productivity, oxygen levels, and creative thinking.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    'Modern Corporate': {
      title: 'Vanguard Hub',
      budget: '₹60L - ₹1.2Cr',
      materials: 'Recycled Aluminum, Smart Acoustic Felt Panels, Frosted LED Glass partitions',
      description: 'Ultra-clean grid layout designed for high-density collaboration, smart-lighting integration, and zero clutter.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
    },
    'Turnkey Luxury': {
      title: 'Adarsh Villa Residence',
      budget: '₹80L - ₹2Cr',
      materials: 'Natural Quartzite Counters, Solid Teakwood Panels, Handwoven Silk Carpets',
      description: 'High-end residential styling that handles engineering, layout optimization, and finishing details seamlessly.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    },
    'Contemporary Retail': {
      title: 'The Mint Gallery',
      budget: '₹35L - ₹70L',
      materials: 'Seamless Terrazzo Floors, Custom Brass Hanging Racks, Curved Fluted Plaster Walls',
      description: 'Interactive experiential commerce space where branding details align with high-end architectural curves.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'
    }
  };

  // 2. Interactive Design Quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState('');

  const quizQuestions = [
    {
      question: 'What is the primary target objective for your new space?',
      options: [
        { label: 'Boost team wellness, air quality, and organic freshness', value: 'Biophilic Office' },
        { label: 'Sleek, minimalist efficiency with modular layout patterns', value: 'Modern Corporate' },
        { label: 'Indulgent personal comfort, luxury hosting, and noble materials', value: 'Turnkey Luxury' },
        { label: 'Interactive customer journeys, showcase galleries, and bold branding', value: 'Contemporary Retail' }
      ]
    },
    {
      question: 'Which visual element represents your design statement?',
      options: [
        { label: 'A double-height preserved green plant feature wall', value: 'Biophilic Office' },
        { label: 'Acoustic wall patterns with recessed linear lighting', value: 'Modern Corporate' },
        { label: 'Turnkey solid wood paneling and marble kitchen islands', value: 'Turnkey Luxury' },
        { label: 'Organic circular arches and terrazzo display floors', value: 'Contemporary Retail' }
      ]
    },
    {
      question: 'What size is the space you are planning to redesign?',
      options: [
        { label: 'Mid-sized workspace (2,000 - 5,000 sq ft)', value: 'Biophilic Office' },
        { label: 'Large office floor (5,000 - 15,000 sq ft)', value: 'Modern Corporate' },
        { label: 'Bespoke home estate or villa (4,000+ sq ft)', value: 'Turnkey Luxury' },
        { label: 'Boutique store or showroom (1,000 - 3,000 sq ft)', value: 'Contemporary Retail' }
      ]
    }
  ];

  const handleQuizAnswer = (value) => {
    const nextAnswers = [...quizAnswers, value];
    setQuizAnswers(nextAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const counts = nextAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      let bestStyle = 'Biophilic Office';
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
      subtitle: 'Workspace Workspace Mapping',
      description: 'We analyze your organizational chart, growth trajectories, and lifestyle habits to determine spatial bottlenecks and lighting goals.'
    },
    {
      title: 'Concept',
      subtitle: 'Botanical Integration Maps',
      description: 'Our drafts map natural airflows, green plant walls, acoustic zone partitions, and functional walk-through zones.'
    },
    {
      title: '3D Rendering',
      subtitle: 'Virtual Walk-Throughs',
      description: 'Detailed, render-engine tours allow you to walk through your proposed office or home, assessing dimensions and finish details.'
    },
    {
      title: 'Procurement',
      subtitle: 'Sustainable Direct Sourcing',
      description: 'We order direct from verified organic fabric mills, custom furniture builders, and eco-certified material yards.'
    },
    {
      title: 'Execution',
      subtitle: 'Complete Turnkey Delivery',
      description: 'Our in-house project managers coordinate structural elements, lighting engineering, custom joinery, and plant layouts.'
    }
  ];

  // 4. Consultation Booking state & validation
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Commercial and Corporate Offices',
    budgetRange: '₹30L - ₹60L',
    startDate: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const validateField = (name, val) => {
    let err = '';
    if (name === 'name' && !val.trim()) {
      err = 'Please enter your full name.';
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
        err = 'Please enter your email address.';
      } else if (!/\S+@\S+\.\S+/.test(val)) {
        err = 'Please enter a valid email address.';
      }
    }
    if (name === 'startDate' && !val) {
      err = 'Please select a project start date.';
    }
    return err;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
    
    const err = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    Object.keys(bookingForm).forEach((key) => {
      const err = validateField(key, bookingForm[key]);
      if (err) {
        errors[key] = err;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrField = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(`DE-2026-${randNum}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#E8F8F5] text-[#1E3F20] selection:bg-[#1E8449]/20 selection:text-[#1E3F20]">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#E8F8F5]/90 backdrop-blur-md border-b border-[#D1ECE8]/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-[#1E8449] uppercase font-quicksand">
              Design Edge
            </span>
            <span className="text-[9px] tracking-widest text-[#1E3F20]/70 uppercase font-bold">
              Ram K. Mahidhar
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-[#1E3F20]/80">
            <a href="#hero" className="hover:text-[#1E8449] transition-colors py-1">Home</a>
            <a href="#bio" className="hover:text-[#1E8449] transition-colors py-1">Principal</a>
            <a href="#portfolio" className="hover:text-[#1E8449] transition-colors py-1">Gallery</a>
            <a href="#quiz" className="hover:text-[#1E8449] transition-colors py-1">Style Matcher</a>
            <a href="#process" className="hover:text-[#1E8449] transition-colors py-1">Our Process</a>
            <a href="#testimonials" className="hover:text-[#1E8449] transition-colors py-1">Reviews</a>
          </nav>

          <a 
            href="#booking"
            className="px-5 py-2.5 bg-[#1E8449] text-white hover:bg-[#155D32] rounded-full text-xs uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center gap-1.5 shadow-md shadow-[#1E8449]/20"
          >
            <span>Consult Now</span>
            <ChevronRight size={14} />
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D5F3EC] text-[#1E8449] text-xs font-bold tracking-wider w-fit">
              <Sparkles size={12} />
              <span>Turnkey Green Architecture Specialists</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-quicksand font-bold text-[#1E3F20] leading-tight">
              Bold Turnkey <br />
              <span className="text-[#1E8449]">Corporate & Luxury Spaces</span>
            </h1>

            <p className="text-sm lg:text-base text-[#2E5E30] leading-relaxed max-w-lg">
              We design and execute state-of-the-art office layouts and premium private estates that integrate botanical green walls, smart zoning acoustics, and direct turnkey project oversight in Banjara Hills, Hyderabad.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#booking"
                className="px-8 py-4 bg-[#1E8449] hover:bg-[#155D32] text-white font-quicksand text-xs uppercase tracking-widest font-bold rounded-2xl transition-all shadow-lg shadow-[#1E8449]/20 active:scale-98"
              >
                Schedule Studio Consultation
              </a>
              <a 
                href="#portfolio"
                className="px-8 py-4 bg-white border border-[#D1ECE8] text-[#1E8449] hover:bg-[#FAFDFD] font-quicksand text-xs uppercase tracking-widest font-bold rounded-2xl transition-all active:scale-98"
              >
                View Showcase Galleries
              </a>
            </div>
          </div>

          {/* Luxury Office Photo with Green Accent Frame */}
          <div className="flex justify-center">
            <div className="bg-[#D5F3EC] rounded-3xl p-4 shadow-xl border border-[#D1ECE8]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-[290px] sm:w-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Bright modern office space with green hanging plants and oak desks by Design Edge" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 bg-white px-6 border-y border-[#D1ECE8]/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '250+', label: 'Commercial & Office Designs' },
            { metric: '15+', label: 'Years of Experience' },
            { metric: '15', label: 'National Architecture Awards' },
            { metric: '98%', label: 'Turnkey Retention Rate' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-[#E8F8F5] rounded-3xl p-6 text-center border border-[#D1ECE8]/40"
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#1E8449] font-quicksand">{stat.metric}</div>
              <div className="text-[10px] tracking-widest uppercase text-[#2E5E30] mt-1.5 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRINCIPAL DESIGNER BIO */}
      <section id="bio" className="py-24 px-6 bg-[#E8F8F5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-last md:order-first">
            <div className="bg-[#D5F3EC] rounded-3xl p-4 shadow-lg border border-[#D1ECE8]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-[280px] sm:w-[320px]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Ram K. Mahidhar, Principal Designer of Design Edge" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1E8449] font-quicksand">Design Leadership</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3F20] font-quicksand">Ram K. Mahidhar</h2>
            <div className="h-1 w-16 bg-[#1E8449] rounded"></div>
            
            <p className="text-sm lg:text-base text-[#2E5E30] leading-relaxed">
              "We don't build interiors; we coordinate organic habits and architectural light." With over 15 years in turnkey execution, Ram K. Mahidhar has defined corporate office design in Hyderabad. His methodology merges strict acoustic modeling with biophilic integrations to optimize productivity and wellbeing.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white text-[#1E8449] border border-[#D1ECE8]">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#1E3F20] font-quicksand">IIA Association & Credentials</h4>
                  <p className="text-xs text-[#2E5E30] mt-0.5">B.Arch, IIT Kharagpur | Senior Associate, Indian Institute of Architects.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white text-[#1E8449] border border-[#D1ECE8]">
                  <Layers size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#1E3F20] font-quicksand">Engineering Mastery</h4>
                  <p className="text-xs text-[#2E5E30] mt-0.5">Specialized in dynamic MEP layouts, eco-certified materials, and green HVAC integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO SHOWCASE & STYLE SELECTOR */}
      <section id="portfolio" className="py-24 px-6 bg-white border-t border-[#D1ECE8]/60">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#1E8449] font-quicksand text-center">Bespoke Galleries</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3F20] font-quicksand text-center mt-2 mb-10">Bespoke Style Showcase</h2>

          {/* Style Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 p-2 bg-[#E8F8F5] rounded-full border border-[#D1ECE8]">
            {Object.keys(portfolioStyles).map((styleName) => (
              <button
                key={styleName}
                onClick={() => setSelectedStyle(styleName)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                  selectedStyle === styleName 
                    ? 'bg-[#1E8449] text-white shadow-md' 
                    : 'text-[#2E5E30] hover:text-[#1E8449]'
                }`}
              >
                {styleName}
              </button>
            ))}
          </div>

          {/* Style Detail Card */}
          <div className="w-full max-w-5xl bg-[#E8F8F5] rounded-3xl p-8 border border-[#D1ECE8] grid md:grid-cols-12 gap-10 items-center shadow-lg shadow-[#1E8449]/5">
            
            {/* Gallery Image */}
            <div className="md:col-span-7 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video w-full border border-[#D1ECE8]">
                <img 
                  src={portfolioStyles[selectedStyle].image} 
                  alt={`${selectedStyle} interior execution by Ram K. Mahidhar`} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Gallery Details */}
            <div className="md:col-span-5 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D5F3EC] text-[#1E8449] text-[10px] uppercase font-bold tracking-wider w-fit">
                <Layout size={10} />
                <span>{selectedStyle}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3F20] font-quicksand">
                {portfolioStyles[selectedStyle].title}
              </h3>

              <p className="text-sm text-[#2E5E30] leading-relaxed">
                {portfolioStyles[selectedStyle].description}
              </p>

              <div className="space-y-3 border-t border-[#D1ECE8] pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2E5E30]/70 uppercase">Core Materials:</span>
                  <span className="text-[#1E3F20] text-right max-w-[220px] font-bold">{portfolioStyles[selectedStyle].materials}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2E5E30]/70 uppercase">Project Budget:</span>
                  <span className="text-[#1E8449] font-bold">{portfolioStyles[selectedStyle].budget}</span>
                </div>
              </div>

              <a 
                href="#booking"
                onClick={() => {
                  setBookingForm(prev => ({
                    ...prev,
                    projectType: selectedStyle,
                    message: `Interested in the ${portfolioStyles[selectedStyle].title} turnkey showcase.`
                  }));
                }}
                className="px-6 py-3 bg-[#1E8449] hover:bg-[#155D32] text-white rounded-xl text-center text-xs uppercase font-bold tracking-wider transition-all active:scale-95 shadow-md shadow-[#1E8449]/10"
              >
                Inquire For Details
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE DESIGN STYLE QUIZ */}
      <section id="quiz" className="py-24 px-6 bg-[#E8F8F5] border-t border-[#D1ECE8]/60">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#D1ECE8] relative overflow-hidden shadow-lg shadow-[#1E8449]/5">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8F8F5] rounded-bl-full pointer-events-none"></div>

          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1E8449] font-quicksand">Design Matcher</span>
            <h2 className="text-3xl font-bold text-[#1E3F20] font-quicksand mt-2">Space Aesthetic Configurator</h2>
            <p className="text-xs text-[#2E5E30] mt-2">Select your parameters below to identify the ideal architectural layout for your workflow.</p>
          </div>

          {quizStep < 3 ? (
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-[#2E5E30]">
                <span>PARAMETER {quizStep + 1} OF 3</span>
                <span className="text-[#1E8449]">{Math.round(((quizStep) / 3) * 100)}% DETAILED</span>
              </div>
              <div className="w-full h-2 bg-[#E8F8F5] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#1E8449] transition-all duration-500" 
                  style={{ width: `${((quizStep + 1) / 3) * 100}%` }}
                ></div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#1E3F20] font-quicksand text-center py-2">
                {quizQuestions[quizStep].question}
              </h3>

              <div className="grid gap-4">
                {quizQuestions[quizStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(option.value)}
                    className="w-full text-left p-5 rounded-2xl bg-[#E8F8F5] border border-[#D1ECE8] hover:border-[#1E8449] text-xs font-bold text-[#2E5E30] hover:text-[#1E3F20] transition-all duration-200 active:scale-[0.99]"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-[#D5F3EC] flex items-center justify-center text-[#1E8449]">
                <Check size={28} />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#2E5E30] font-quicksand">Your Configured Layout</span>
                <h3 className="text-3xl font-bold text-[#1E8449] font-quicksand">{quizResult}</h3>
              </div>

              <p className="text-xs text-[#2E5E30] max-w-md leading-relaxed">
                Based on your team needs, we recommend the <strong>{quizResult}</strong> system. This features {portfolioStyles[quizResult].materials} with custom lighting integrations. Build estimates start around {portfolioStyles[quizResult].budget}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                <button
                  onClick={() => {
                    setBookingForm(prev => ({
                      ...prev,
                      projectType: quizResult,
                      message: `Quiz configuration match: ${quizResult}.`
                    }));
                    const bookingSection = document.getElementById('booking');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3.5 bg-[#1E8449] hover:bg-[#155D32] text-white font-quicksand text-xs uppercase tracking-widest font-bold rounded-xl active:scale-95 transition-all shadow-md"
                >
                  Apply Config To Consultation
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3.5 border border-[#D1ECE8] hover:border-[#1E8449] text-[#1E8449] font-quicksand text-xs uppercase tracking-widest font-bold rounded-xl transition-all active:scale-95"
                >
                  Configure Again
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. OUR DESIGN PROCESS */}
      <section id="process" className="py-24 px-6 bg-white border-t border-[#D1ECE8]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1E8449] font-quicksand">Execution Framework</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3F20] font-quicksand mt-2">Bespoke Turnkey Journey</h2>
            <p className="text-xs text-[#2E5E30] mt-2">Our systematic, green-certified workflow ensures precision engineering from draft to final handoff.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Step Selection Buttons */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${
                    activeProcessStep === idx
                      ? 'bg-[#E8F8F5] border-[#1E8449] shadow-md'
                      : 'bg-[#FAFDFD] border-[#D1ECE8] opacity-75 hover:opacity-100'
                  }`}
                >
                  <span className={`text-sm font-bold font-quicksand flex items-center justify-center w-8 h-8 rounded-full border ${
                    activeProcessStep === idx ? 'bg-[#1E8449] text-white' : 'bg-white text-[#2E5E30]'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#1E3F20] font-quicksand">{step.title}</h4>
                    <p className="text-[10px] text-[#2E5E30] mt-0.5 font-semibold">{step.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="lg:col-span-7">
              <div className="bg-[#E8F8F5] rounded-3xl p-8 sm:p-10 border border-[#D1ECE8] min-h-[280px] flex flex-col justify-between shadow-lg shadow-[#1E8449]/5">
                <div>
                  <div className="flex items-center justify-between border-b border-[#D1ECE8] pb-4 mb-6">
                    <span className="text-xs font-bold text-[#1E8449] tracking-widest uppercase font-quicksand">TURNKEY PROCESS DETAIL 0{activeProcessStep + 1}</span>
                    <BookOpen size={16} className="text-[#1E8449]/60" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E3F20] font-quicksand mb-3">
                    {processSteps[activeProcessStep].subtitle}
                  </h3>

                  <p className="text-sm text-[#2E5E30] leading-relaxed">
                    {processSteps[activeProcessStep].description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-8 text-[11px] font-bold text-[#2E5E30] uppercase tracking-wider">
                  <span>Guaranteed Delivery Schedules</span>
                  <span>Turnkey Certification Ensured</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-[#E8F8F5] border-t border-[#D1ECE8]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1E8449] font-quicksand">Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3F20] font-quicksand mt-2">Hyderabad Client Reviews</h2>
            <p className="text-xs text-[#2E5E30] mt-2">See how our turnkey execution has reshaped workspace metrics and private duplexes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Ram and the Design Edge team delivered our 12,000 sq ft office in Gachibowli on time. The biophilic layout has changed how our team works.",
                author: "V. K. Prasad",
                project: "CEO, TechMinds Office"
              },
              {
                quote: "Design Edge executed our luxury penthouse in Banjara Hills. Their turnkey execution meant zero stress for us.",
                author: "Madhavi Latha",
                project: "Residential Penthouse, Adarsh Villa"
              },
              {
                quote: "Their corporate design credentials saved us 20% in space optimization. True professionals.",
                author: "Rajesh Verma",
                project: "Zenith Holdings Headquarters"
              }
            ].map((testi, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 border border-[#D1ECE8] flex flex-col justify-between shadow-lg shadow-[#1E8449]/5"
              >
                <p className="text-xs italic text-[#2E5E30] leading-relaxed">
                  "{testi.quote}"
                </p>
                <div className="border-t border-[#D1ECE8] pt-4 mt-6">
                  <h4 className="text-xs font-bold text-[#1E3F20] font-quicksand">{testi.author}</h4>
                  <p className="text-[10px] text-[#1E8449] mt-0.5 font-bold">{testi.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION BOOKING / ENQUIRY FORM */}
      <section id="booking" className="py-24 px-6 bg-white border-t border-[#D1ECE8]/60">
        <div className="max-w-3xl mx-auto bg-[#E8F8F5] rounded-3xl p-8 sm:p-12 border border-[#D1ECE8] shadow-lg shadow-[#1E8449]/5">
          
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1E8449] font-quicksand">Scheduling Engine</span>
            <h2 className="text-3xl font-bold text-[#1E3F20] font-quicksand mt-2">Book Turnkey Architecture Consultation</h2>
            <p className="text-xs text-[#2E5E30] mt-2">Request an engineering assessment or design audit. Real-time validation active.</p>
          </div>

          {submittedRef ? (
            <div className="text-center space-y-6 py-12">
              <div className="w-16 h-16 rounded-full bg-[#D5F3EC] flex items-center justify-center text-[#1E8449] mx-auto">
                <Check size={28} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#1E3F20] font-quicksand">Booking Secured!</h3>
                <p className="text-xs text-[#2E5E30]">An invitation reference has been generated for your record.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#D1ECE8] max-w-sm mx-auto shadow-md">
                <span className="text-[10px] text-[#2E5E30]/70 uppercase font-bold tracking-wider">REGISTRATION REFERENCE</span>
                <div className="text-xl font-bold text-[#1E8449] font-quicksand mt-1">{submittedRef}</div>
              </div>

              <p className="text-xs text-[#2E5E30] leading-relaxed max-w-md mx-auto">
                A design coordinator is reviewing your details for the <strong>{bookingForm.projectType}</strong> project. We will contact you at <strong>{bookingForm.phone}</strong> to confirm your Banjara Hills studio slot.
              </p>

              <button
                onClick={() => {
                  setSubmittedRef('');
                  setBookingForm({
                    name: '',
                    phone: '',
                    email: '',
                    projectType: 'Commercial and Corporate Offices',
                    budgetRange: '₹30L - ₹60L',
                    startDate: '',
                    message: ''
                  });
                }}
                className="px-6 py-2.5 bg-[#1E8449] hover:bg-[#155D32] text-white rounded-xl text-xs uppercase font-bold tracking-wider transition-all active:scale-95"
              >
                Schedule Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-xs text-[#1E3F20] focus:outline-none transition-all ${
                        formErrors.name ? 'border-red-400 focus:border-red-500' : 'border-[#D1ECE8] focus:border-[#1E8449]'
                      }`}
                      placeholder="e.g. V. K. Prasad"
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.name}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-xs text-[#1E3F20] focus:outline-none transition-all ${
                        formErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#D1ECE8] focus:border-[#1E8449]'
                      }`}
                      placeholder="e.g. +91 97034 57917"
                    />
                    {formErrors.phone && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-xs text-[#1E3F20] focus:outline-none transition-all ${
                        formErrors.email ? 'border-red-400 focus:border-red-500' : 'border-[#D1ECE8] focus:border-[#1E8449]'
                      }`}
                      placeholder="e.g. prasad@techminds.com"
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Start Date */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Target Launch Date *</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={bookingForm.startDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-xs text-[#1E3F20] focus:outline-none transition-all ${
                        formErrors.startDate ? 'border-red-400 focus:border-red-500' : 'border-[#D1ECE8] focus:border-[#1E8449]'
                      }`}
                    />
                    {formErrors.startDate && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.startDate}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Scope Type</label>
                  <select
                    name="projectType"
                    value={bookingForm.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D1ECE8] text-xs text-[#1E3F20] focus:outline-none focus:border-[#1E8449] transition-all"
                  >
                    <option value="Commercial and Corporate Offices">Commercial and Corporate Offices</option>
                    <option value="Luxury Residential">Luxury Residential</option>
                    <option value="Turnkey Interiors">Turnkey Interiors</option>
                    <option value="Biophilic Office">Biophilic Office Layout</option>
                    <option value="Modern Corporate">Modern Corporate Space</option>
                    <option value="Turnkey Luxury">Turnkey Luxury Villa</option>
                    <option value="Contemporary Retail">Contemporary Retail Store</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Execution Budget</label>
                  <select
                    name="budgetRange"
                    value={bookingForm.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D1ECE8] text-xs text-[#1E3F20] focus:outline-none focus:border-[#1E8449] transition-all"
                  >
                    <option value="₹30L - ₹60L">₹30L - ₹60L</option>
                    <option value="₹60L - ₹1.2Cr">₹60L - ₹1.2Cr</option>
                    <option value="₹1.2Cr - ₹2.5Cr">₹1.2Cr - ₹2.5Cr</option>
                    <option value="₹2.5Cr+">₹2.5Cr+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#2E5E30]">Brief Spatial Outline</label>
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D1ECE8] text-xs text-[#1E3F20] focus:outline-none focus:border-[#1E8449] transition-all"
                  placeholder="Outline spatial constraints, employee count, brand guidelines..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#1E8449] hover:bg-[#155D32] text-white font-quicksand text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-[#1E8449]/10"
              >
                {isSubmitting ? (
                  <span>Saving Configuration...</span>
                ) : (
                  <>
                    <span>Confirm Consultation Request</span>
                    <Send size={12} />
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </section>

      {/* 9. STUDIO LOCATION & HOURS FOOTER */}
      <footer className="bg-white border-t border-[#D1ECE8]/60 px-6 py-16 text-[#1E3F20]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1E8449] uppercase font-quicksand">Design Edge</span>
              <span className="text-[9px] tracking-widest text-[#2E5E30] uppercase font-bold">Principal: Ram K. Mahidhar</span>
            </div>

            <p className="text-xs text-[#2E5E30] leading-relaxed max-w-sm">
              Premium turnkey interior execution and biophilic engineering. Transforming workspaces and custom residences across Hyderabad.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-[#2E5E30]">
                <Clock size={14} className="text-[#1E8449]" />
                <span>Monday - Saturday: 9:30 AM - 6:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#2E5E30]">
                <Phone size={14} className="text-[#1E8449]" />
                <span>+91 97034 57917</span>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] font-quicksand">Headquarters</h4>
            <div className="h-0.5 w-8 bg-[#1E8449] rounded"></div>
            
            <div className="flex items-start gap-2.5 text-xs text-[#2E5E30] leading-relaxed">
              <MapPin size={16} className="text-[#1E8449] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1E3F20]">Design Edge Studio</p>
                <p className="mt-0.5">Door No. 6-3-596/65, 2nd Floor, Adarsh Villa</p>
                <p>Naveen Nagar Colony, Road No. 1</p>
                <p>Banjara Hills, Hyderabad - 500034</p>
              </div>
            </div>
          </div>

          {/* Map Representation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] font-quicksand">Location Map</h4>
            <div className="h-0.5 w-8 bg-[#1E8449] rounded"></div>

            <div className="bg-[#E8F8F5] rounded-2xl p-3 border border-[#D1ECE8]">
              <div className="h-32 rounded-xl bg-white border border-[#D1ECE8] relative flex flex-col items-center justify-center p-4 text-center">
                <Compass size={28} className="text-[#1E8449] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E3F20] mt-2">Road No. 1, Banjara Hills</span>
                <span className="text-[9px] text-[#2E5E30] mt-0.5">Click for Live Directions</span>
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

        <div className="max-w-7xl mx-auto border-t border-[#D1ECE8] mt-16 pt-8 text-center text-[10px] text-[#2E5E30]/70 font-bold tracking-wider uppercase font-quicksand">
          &copy; {new Date().getFullYear()} Design Edge Architectural Studio. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

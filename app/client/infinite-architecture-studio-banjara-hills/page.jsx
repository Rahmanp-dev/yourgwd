"use client";

import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Info, 
  Star, 
  Calendar,
  Send,
  HelpCircle,
  Building,
  User,
  CheckCircle,
  Activity,
  Layers
} from 'lucide-react';

const STYLES_DATA = {
  'Modern Residential': {
    title: 'Modern Residential',
    desc: 'Grand cantilevered volumes, double-height ceilings, floor-to-ceiling glass, and seamless transitions between indoor and outdoor living spaces. Designed for energy efficiency and visual breadth.',
    budget: '₹45 Lakhs - ₹80 Lakhs',
    materials: ['Reinforced Cantilever Concrete', 'High-Performance Insulated Glass', 'Sleek Steel Frames'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'Traditional Indian': {
    title: 'Traditional Indian',
    desc: 'Courtyard-centric planning (Brahmastan) inspired by regional vernaculars. Incorporates sloped clay tile roofs, intricately carved columns, exposed brickwork, and local stone flooring.',
    budget: '₹55 Lakhs - ₹95 Lakhs',
    materials: ['Shahabad & Tandur Limestone', 'Recycled Teak Wood Columns', 'Terracotta Jali Blocks'],
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'Minimalistic': {
    title: 'Minimalistic Architecture',
    desc: 'Absolute clarity of form, white monolithic walls, hidden doorways, integrated cabinetry, and pocket courtyards. Focuses on shadow play, silence, and spatial stillness.',
    budget: '₹40 Lakhs - ₹70 Lakhs',
    materials: ['Seamless Micro-Cement Floors', 'Anodized Slim Aluminium Profiles', 'Matte White Wall Finishes'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'Contemporary': {
    title: 'Contemporary Architecture',
    desc: 'Bold asymmetrical geometries, mixed materials (stone, metal, wood), green roofing, smart-home automation, and high-efficiency lighting profiles designed for modern urban parcels.',
    budget: '₹50 Lakhs - ₹90 Lakhs',
    materials: ['Exposed Basalt Stone Cladding', 'Thermowood Louvers', 'Composite Aluminium Panels'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Consultation',
    title: 'Site Analysis & Municipal Compliance',
    desc: 'We conduct full site inspections in Banjara Hills or neighboring areas, checking soil profiles, solar paths, wind directions, and municipal setbacks to set the layout boundaries.',
    duration: '5 - 7 Days',
    deliverables: 'Solar path diagrams, zoning setbacks, site-survey reports'
  },
  {
    step: '02',
    name: 'Concept',
    title: '2D Architectural Layout Plans',
    desc: 'Our architectural design team creates preliminary floor layouts and cross-sections, mapping room volumes, structural columns, and courtyards to optimize the space flow.',
    duration: '10 - 14 Days',
    deliverables: '2D layout options, volume sketches, and tentative cost sheets'
  },
  {
    step: '03',
    name: '3D Rendering',
    title: 'Photorealistic Exterior Facades',
    desc: 'We render complete 3D models of the exterior facade, landscaping, and key interior volumes, letting you see exactly how the sunset light plays on structural concrete and glass.',
    duration: '15 - 20 Days',
    deliverables: '3D photorealistic walk-through, detailed facade renderings'
  },
  {
    step: '04',
    name: 'Procurement',
    title: 'Structural Detailing & Sourcing',
    desc: 'We compile structural steel drawings, plumbing/electrical plans, and source premium finishes (like Shahabad stone and teak wood frames) from certified eco-friendly vendors.',
    duration: '25 - 35 Days',
    deliverables: 'Good-For-Construction drawings, itemized materials schedule'
  },
  {
    step: '05',
    name: 'Execution',
    title: 'Structural Inspection & Project Handoff',
    desc: 'Our senior architects conduct regular site audits at every foundation pour, wall assembly, and roofing stage, ensuring structural precision and final handover of your home.',
    duration: '12 - 18 Months',
    deliverables: 'Completed building occupancy certificate, architectural blueprints'
  }
];

const QUIZ_QUESTIONS = [
  {
    question: 'How do you view the interaction between your home and nature?',
    options: [
      { text: 'Large window walls that let the garden visually merge inside.', value: 'Modern Residential' },
      { text: 'A central courtyard that draws cool breezes and rain inside.', value: 'Traditional Indian' },
      { text: 'Hidden pocket windows that frame specific sky views quietly.', value: 'Minimalistic' },
      { text: 'Terraced garden decks and integrated planters on the facade.', value: 'Contemporary' }
    ]
  },
  {
    question: 'Which wall material catches your eye?',
    options: [
      { text: 'Clean white walls paired with polished concrete.', value: 'Modern Residential' },
      { text: 'Exposed wire-cut terracotta bricks and stone masonry.', value: 'Traditional Indian' },
      { text: 'Seamless light-grey micro-cement surfaces.', value: 'Minimalistic' },
      { text: 'Textured natural granite tiles mixed with wood paneling.', value: 'Contemporary' }
    ]
  },
  {
    question: 'Select your preferred roofing and ceiling volume:',
    options: [
      { text: 'Double-height flat slabs with floating track lighting.', value: 'Modern Residential' },
      { text: 'Sloped clay-tiled roofs with exposed timber beams.', value: 'Traditional Indian' },
      { text: 'Clean recessed drop panels with hidden air vents.', value: 'Minimalistic' },
      { text: 'Asymmetrical sloped concrete planes with sky-lights.', value: 'Contemporary' }
    ]
  }
];

export default function InfiniteArchitectureStudioPage() {
  // Active Tab for Portfolio
  const [activeStyle, setActiveStyle] = useState('Modern Residential');

  // Process Steps
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // Design Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [recommendedStyle, setRecommendedStyle] = useState(null);

  // Consultation Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Modern Residential Villa',
    budgetRange: '₹50L - ₹80L',
    startDate: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Quiz Interaction
  const handleQuizAnswer = (value) => {
    const nextAnswers = [...quizAnswers, value];
    setQuizAnswers(nextAnswers);

    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const counts = {};
      let maxStyle = nextAnswers[0];
      let maxCount = 0;
      nextAnswers.forEach((style) => {
        counts[style] = (counts[style] || 0) + 1;
        if (counts[style] > maxCount) {
          maxCount = counts[style];
          maxStyle = style;
        }
      });
      setRecommendedStyle(maxStyle);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setRecommendedStyle(null);
  };

  const applyQuizRecommendation = () => {
    if (!recommendedStyle) return;
    setForm(prev => ({
      ...prev,
      message: `Recommended Architectural Style: ${recommendedStyle}. We are interested in building a structure matching this concept.`
    }));
    const bookingFormSection = document.getElementById('booking-section');
    if (bookingFormSection) {
      bookingFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form Validation
  const validateForm = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.startDate) {
      errs.startDate = 'Project start date is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        refNumber: `INF-ARCH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  return (
    <div className="bg-[#FDF2E9] text-[#334155] font-sans min-h-screen selection:bg-orange-200/50 antialiased overflow-x-hidden">
      
      {/* Self-contained Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
        .font-nunito-friendly { font-family: 'Nunito', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FDF2E9]/95 border-b border-orange-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-orange-400 text-white rounded-2xl flex items-center justify-center font-bold shadow-sm shadow-orange-500/20">
                <Building size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-nunito-friendly text-xl lg:text-2xl font-black text-[#1E293B] tracking-tight">
                  Infinite Architecture
                </span>
                <span className="text-[10px] tracking-widest uppercase text-orange-600/80 font-bold font-nunito-friendly mt-0.5">
                  V. Sandeep Studio
                </span>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-wider font-extrabold font-nunito-friendly text-slate-500">
              <a href="#designer-bio" className="hover:text-orange-600 transition-colors">Architect</a>
              <a href="#portfolio" className="hover:text-orange-600 transition-colors">Portfolios</a>
              <a href="#quiz" className="hover:text-orange-600 transition-colors">Style Matcher</a>
              <a href="#process" className="hover:text-orange-600 transition-colors">Our Steps</a>
              <a href="#booking-section" className="hover:text-orange-600 transition-colors">Book Consultation</a>
            </div>

            <div>
              <a 
                href="#booking-section"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white transition-all text-xs uppercase tracking-wider font-extrabold font-nunito-friendly rounded-full active:scale-95 duration-200 shadow-md shadow-orange-500/10"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <header className="relative pt-12 pb-24 lg:py-32 overflow-hidden border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Hero text */}
            <div className="lg:col-span-6 flex flex-col space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-nunito-friendly font-bold tracking-wide w-fit mx-auto lg:mx-0">
                <Sparkles size={12} className="text-orange-500" />
                <span>Joyful Architectural Spaces</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-nunito-friendly leading-tight text-[#1E293B] tracking-tight font-black">
                Spaces Built to Inspire <br />
                <span className="text-orange-500">Infinite Possibilities</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-600 font-nunito-friendly leading-relaxed max-w-lg mx-auto lg:mx-0">
                Infinite Architecture Studio crafts joyful, light-filled spaces designed for natural cooling and organic comfort. Guided by Principal Architect V. Sandeep, we design modern villas, courtyard homes, and minimalist masterpieces in Banjara Hills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-nunito-friendly">
                <a 
                  href="#booking-section"
                  className="inline-flex justify-center items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all active:scale-95 duration-200 shadow-md shadow-orange-500/20"
                >
                  Book Private Meeting
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#portfolio"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white border-2 border-orange-200 hover:border-orange-500 text-orange-600 text-xs uppercase tracking-wider font-bold rounded-full transition-all active:scale-95 duration-200"
                >
                  Explore Layouts
                </a>
              </div>
            </div>

            {/* Hero image frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] border-4 border-white p-2 bg-white shadow-xl rounded-3xl overflow-hidden">
                <div className="w-full h-full relative overflow-hidden group rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                    alt="Modern Residential Residence by Infinite Architecture Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-4 px-6 border-l-4 border-orange-400 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-widest text-orange-600 font-bold font-nunito-friendly">Featured Blueprint</p>
                    <p className="font-nunito-friendly text-sm font-black text-slate-800 mt-0.5">Banjara Hills Modern Villa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Stats Bar */}
      <section className="bg-white py-12 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { metric: '150+', label: 'Homes Crafted' },
              { metric: '14+', label: 'Years of Experience' },
              { metric: '8', label: 'Design Awards' },
              { metric: '100%', label: 'Joyful Homeowners' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-1 font-nunito-friendly">
                <span className="text-3xl lg:text-5xl text-orange-500 font-black">{stat.metric}</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-wider text-slate-400 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Principal Designer Bio */}
      <section id="designer-bio" className="py-24 border-b border-orange-100 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Bio Image */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="relative w-full max-w-sm aspect-[4/5] border-4 border-white p-2 bg-white shadow-lg rounded-3xl overflow-hidden">
                <div className="w-full h-full relative overflow-hidden bg-slate-100 rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                    alt="V. Sandeep - Principal Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 font-nunito-friendly">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Principal Architect</span>
              <h2 className="text-3xl lg:text-5xl text-slate-800 font-black tracking-tight">
                V. Sandeep
              </h2>
              <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
              
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  V. Sandeep leads Infinite Architecture Studio with an organic approach to structural layout. His architectural projects across Jubilee Hills and Banjara Hills balance traditional Indian elements like central courtyards with bold, modern concrete geometries.
                </p>
                <p className="italic text-slate-800 font-bold">
                  &ldquo;Architecture is not a static sculpture. It is the box that captures wind and sunlight. Our designs ensure spaces remain naturally cross-ventilated and cool, using local stones that ground the home to its site.&rdquo;
                </p>
                <p>
                  Sandeep holds deep specialization in Vastu-compliant layout routing, Shahabad stone floor textures, custom-built brick screens (jali walls), and double-height minimalist volumes that make urban residences feel like expansive country properties.
                </p>
              </div>

              {/* Specializations Checklist */}
              <div className="pt-4 border-t border-orange-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-800 font-extrabold">
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-orange-500" />
                  <span>Modern Residential</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-orange-500" />
                  <span>Traditional Indian</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-orange-500" />
                  <span>Minimalistic Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase / Interactive Style Selector */}
      <section id="portfolio" className="py-24 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-nunito-friendly">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Portfolio Grid</span>
            <h2 className="text-3xl lg:text-5xl text-slate-800 mt-3 font-black tracking-tight">Interactive Style Selector</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 text-xs">
            {Object.keys(STYLES_DATA).map((styleName) => (
              <button
                key={styleName}
                onClick={() => setActiveStyle(styleName)}
                className={`py-3.5 px-6 font-extrabold uppercase tracking-wider rounded-full transition-all active:scale-95 duration-200 ${
                  activeStyle === styleName
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white border-2 border-orange-100 text-slate-500 hover:border-orange-500 hover:text-orange-600'
                }`}
              >
                {styleName}
              </button>
            ))}
          </div>

          {/* Active Style Showcase */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Specifications Card */}
            <div className="lg:col-span-5 p-8 bg-white shadow-lg rounded-3xl border border-orange-50/50 space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-orange-600 font-extrabold block">Aesthetic Specs</span>
              <h3 className="text-2xl lg:text-3xl text-slate-800 font-black">{STYLES_DATA[activeStyle].title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{STYLES_DATA[activeStyle].desc}</p>
              
              <div className="space-y-4 pt-6 border-t border-orange-100 text-xs">
                <div>
                  <span className="text-slate-400 font-bold block uppercase tracking-wider mb-2">Architectural Materials</span>
                  <div className="flex flex-wrap gap-2">
                    {STYLES_DATA[activeStyle].materials.map((mat, i) => (
                      <span key={i} className="px-3.5 py-2 bg-orange-50 text-orange-700 rounded-full font-bold">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 font-bold block uppercase tracking-wider mb-1">Average Project Budget</span>
                  <span className="text-lg font-black text-slate-800">{STYLES_DATA[activeStyle].budget}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#booking-section"
                  className="w-full text-center py-4 bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all active:scale-95 duration-200 block shadow-md shadow-orange-500/10"
                >
                  Consult on this Archetype
                </a>
              </div>
            </div>

            {/* Gallery Images Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STYLES_DATA[activeStyle].images.map((imgUrl, idx) => (
                <div key={idx} className="bg-white border border-orange-50 p-2 shadow-md rounded-2xl hover:-translate-y-1 transition-transform duration-300 aspect-[3/4]">
                  <div className="w-full h-full relative overflow-hidden bg-slate-100 rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${activeStyle} gallery building photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Design Style Quiz */}
      <section id="quiz" className="py-24 border-b border-orange-100 bg-[#FFFBF7]">
        <div className="max-w-3xl mx-auto px-6 font-nunito-friendly">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Interactive Tool</span>
            <h2 className="text-3xl lg:text-4xl text-slate-800 mt-3 font-black tracking-tight">Discover Your Architecture Archetype</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="p-8 md:p-12 bg-white shadow-lg rounded-3xl border border-orange-50">
            {!recommendedStyle ? (
              <div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-slate-400 font-extrabold mb-6">
                  <span>Blueprint Diagnostic</span>
                  <span>Question {quizStep + 1} of {QUIZ_QUESTIONS.length}</span>
                </div>
                
                {/* ProgressBar */}
                <div className="w-full h-1.5 bg-orange-100 rounded-full mb-8 overflow-hidden">
                  <div 
                    className="h-full bg-orange-500 transition-all duration-300"
                    style={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question */}
                <h3 className="text-2xl text-slate-800 mb-8 font-black leading-snug">
                  {QUIZ_QUESTIONS[quizStep].question}
                </h3>

                {/* Options List */}
                <div className="flex flex-col gap-4">
                  {QUIZ_QUESTIONS[quizStep].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuizAnswer(opt.value)}
                      className="w-full text-left p-5 border-2 border-orange-100 hover:border-orange-500 bg-[#FDF2E9]/20 hover:bg-[#FDF2E9]/40 text-xs font-bold text-slate-600 hover:text-orange-700 rounded-2xl transition-all duration-200 active:scale-[0.99]"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-orange-100 border border-orange-200 text-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                  <Compass size={28} />
                </div>
                <h3 className="text-3xl text-slate-800 font-black">Your Architectural Direction</h3>
                
                <div className="bg-[#FDF2E9]/50 border-2 border-orange-100 p-6 rounded-2xl max-w-md mx-auto text-left space-y-4">
                  <div className="text-center border-b border-orange-100 pb-3">
                    <span className="text-xl font-black text-orange-600 uppercase tracking-wide">
                      {recommendedStyle}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    {STYLES_DATA[recommendedStyle].desc}
                  </p>
                  <div className="text-xs pt-2">
                    <span className="text-slate-400 font-extrabold block uppercase tracking-wider">Average Budget Layout:</span>
                    <span className="text-sm font-black text-slate-800">{STYLES_DATA[recommendedStyle].budget}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
                  <button
                    onClick={applyQuizRecommendation}
                    className="flex-1 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-extrabold rounded-full transition-all active:scale-95 duration-200 shadow-md shadow-orange-500/20"
                  >
                    Apply & Book Consult
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 py-3.5 bg-white border-2 border-orange-100 hover:border-orange-500 text-orange-600 text-xs uppercase tracking-wider font-extrabold rounded-full transition-all active:scale-95 duration-200"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Our Design Process */}
      <section id="process" className="py-24 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-nunito-friendly">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Atelier Steps</span>
            <h2 className="text-3xl lg:text-5xl text-slate-800 mt-3 font-black tracking-tight">Our Architectural Process</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 mb-12 text-center text-xs">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`py-5 px-3 border-2 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 duration-200 rounded-2xl relative ${
                  activeProcessStep === idx
                    ? 'border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'border-orange-100 bg-white text-slate-500 hover:border-orange-500'
                }`}
              >
                <span className="text-xs tracking-wider opacity-60 block font-extrabold">{step.step}</span>
                <span className="uppercase tracking-wide font-black text-[9px] lg:text-[10px] block">{step.name}</span>
                {activeProcessStep === idx && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-orange-500 hidden md:block"></div>
                )}
              </button>
            ))}
          </div>

          {/* Process Step Detail Panel */}
          <div className="bg-white p-8 md:p-12 shadow-lg rounded-3xl border border-orange-50/50">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-orange-600 font-extrabold">
                  Step {PROCESS_STEPS[activeProcessStep].step} Detailed Flow
                </span>
                <h3 className="text-2xl lg:text-3xl text-slate-800 font-black tracking-tight">
                  {PROCESS_STEPS[activeProcessStep].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {PROCESS_STEPS[activeProcessStep].desc}
                </p>
              </div>

              <div className="md:col-span-4 bg-[#FDF2E9]/40 p-6 border-2 border-orange-100 rounded-2xl space-y-4 text-xs font-semibold">
                <div>
                  <span className="text-slate-400 font-bold block uppercase tracking-wider mb-1">Expected Timeline</span>
                  <span className="text-sm font-black text-slate-800">{PROCESS_STEPS[activeProcessStep].duration}</span>
                </div>
                <div className="h-[1.5px] bg-orange-100/50"></div>
                <div>
                  <span className="text-slate-400 font-bold block uppercase tracking-wider mb-1">Key Deliverables</span>
                  <span className="text-xs text-slate-600 leading-relaxed block">{PROCESS_STEPS[activeProcessStep].deliverables}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="py-24 border-b border-orange-100 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-nunito-friendly">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl lg:text-5xl text-slate-800 mt-3 font-black tracking-tight">Hyderabad Family Reviews</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "V. Sandeep designed our modern villa in Banjara Hills. His minimalistic design maximizes light and keeps the home naturally cool. The Shahabad limestone flooring looks stunning and feels grounding.",
                patron: "Chandra Shekhar",
                locality: "Banjara Hills, Hyderabad",
                specialty: "Modern Residential Villa"
              },
              {
                quote: "The courtyard-centric design of our new home in Jubilee Hills is a daily joy. V. Sandeep integrated our traditional brick screen preferences with clean concrete lines perfectly.",
                patron: "Swathi Reddy",
                locality: "Jubilee Hills, Hyderabad",
                specialty: "Traditional Courtyard Home"
              },
              {
                quote: "Highly detailed and compliant blueprints. Sandeep managed all building regulations and helped us source teak columns and terracotta jail blocks. Outstanding aesthetic sense.",
                patron: "Vikram Naidu",
                locality: "Gachibowli, Hyderabad",
                specialty: "Bespoke Minimalist Residence"
              }
            ].map((testi, i) => (
              <div key={i} className="p-8 bg-white border border-orange-50 shadow-lg rounded-3xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={11} className="text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 italic leading-relaxed font-semibold">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-orange-100 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-orange-100 flex items-center justify-center text-xs font-black text-orange-700">
                    {testi.patron.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800">{testi.patron}</h4>
                    <div className="flex flex-col text-[10px] text-slate-400">
                      <span>{testi.locality}</span>
                      <span className="text-orange-600 font-extrabold mt-0.5">{testi.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Consultation Booking / Enquiry Form */}
      <section id="booking-section" className="py-24 border-b border-orange-100">
        <div className="max-w-3xl mx-auto px-6 font-nunito-friendly">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Connect with Us</span>
            <h2 className="text-3xl lg:text-4xl text-slate-800 mt-3 font-black tracking-tight">Book an Architecture Consultation</h2>
            <p className="text-slate-500 text-xs mt-2">Plan your residential plot with Principal Architect V. Sandeep. Choose physical or video consultations.</p>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="p-8 md:p-12 bg-white shadow-lg rounded-3xl border border-orange-50">
            {submittedData ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                  <Check size={28} />
                </div>
                <h3 className="text-2xl lg:text-3xl text-slate-800 font-black">Project Enquiry Registered</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed font-semibold">
                  Thank you, <strong className="text-slate-800">{submittedData.name}</strong>. Your project enquiry reference is generated. V. Sandeep will review your plot parameters and contact you within 3 business hours.
                </p>
                <div className="bg-[#FDF2E9]/50 border-2 border-orange-100 p-6 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-2.5 font-semibold">
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider block">Reference Reference ID:</span> <span className="font-mono font-black text-orange-600 text-sm">{submittedData.refNumber}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider block">Project Scope:</span> <span className="font-black text-slate-800">{submittedData.projectType}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider block">Preferred Start Date:</span> <span className="font-black text-slate-800">{submittedData.startDate}</span></div>
                  <div><span className="text-slate-400 font-bold uppercase tracking-wider block">Assigned Studio:</span> <span className="font-black text-slate-800">Banjara Hills Flagship, Hyderabad</span></div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white uppercase text-xs tracking-wider font-extrabold rounded-full transition-all active:scale-95 duration-200"
                >
                  Register Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-xs font-semibold">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-4 bg-[#FDF2E9]/30 border-2 ${errors.name ? 'border-red-400' : 'border-orange-100 focus:border-orange-400'} rounded-2xl focus:outline-none transition-all text-slate-800`}
                      placeholder="e.g. Anand Reddy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[11px] font-bold">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">PHONE NUMBER *</label>
                    <input
                      type="text"
                      className={`w-full p-4 bg-[#FDF2E9]/30 border-2 ${errors.phone ? 'border-red-400' : 'border-orange-100 focus:border-orange-400'} rounded-2xl focus:outline-none transition-all text-slate-800`}
                      placeholder="e.g. 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[11px] font-bold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-4 bg-[#FDF2E9]/30 border-2 ${errors.email ? 'border-red-400' : 'border-orange-100 focus:border-orange-400'} rounded-2xl focus:outline-none transition-all text-slate-800`}
                      placeholder="e.g. anand@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[11px] font-bold">{errors.email}</p>}
                  </div>

                  {/* Start Date field */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">TARGET CONSTRUCTION START *</label>
                    <input
                      type="date"
                      className={`w-full p-4 bg-[#FDF2E9]/30 border-2 ${errors.startDate ? 'border-red-400' : 'border-orange-100 focus:border-orange-400'} rounded-2xl focus:outline-none transition-all text-slate-800`}
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    />
                    {errors.startDate && <p className="text-red-500 mt-1 text-[11px] font-bold">{errors.startDate}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Type dropdown */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">ARCHITECTURAL SCOPE</label>
                    <div className="relative">
                      <select
                        className="w-full p-4 bg-[#FDF2E9]/30 border-2 border-orange-100 focus:border-orange-400 rounded-2xl focus:outline-none transition-all text-slate-800 appearance-none"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      >
                        <option value="Modern Residential Villa">Modern Residential Villa</option>
                        <option value="Traditional Indian Home">Traditional Indian Home</option>
                        <option value="Minimalist Penthouse">Minimalist Penthouse</option>
                        <option value="Commercial/Retail Design">Commercial/Retail Design</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Budget range dropdown */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">PROJECT BUDGET TARGET</label>
                    <div className="relative">
                      <select
                        className="w-full p-4 bg-[#FDF2E9]/30 border-2 border-orange-100 focus:border-orange-400 rounded-2xl focus:outline-none transition-all text-slate-800 appearance-none"
                        value={form.budgetRange}
                        onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                      >
                        <option value="₹30L - ₹50L">₹30 Lakhs - ₹50 Lakhs</option>
                        <option value="₹50L - ₹80L">₹50 Lakhs - ₹80 Lakhs</option>
                        <option value="₹80L - ₹1.5Cr">₹80 Lakhs - ₹1.5 Crore</option>
                        <option value="₹1.5Cr+">₹1.5 Crore+</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">PLOT PARAMETERS & DETAILS</label>
                  <textarea
                    rows="4"
                    className="w-full p-4 bg-[#FDF2E9]/30 border-2 border-orange-100 focus:border-orange-400 rounded-2xl focus:outline-none transition-all text-slate-800 resize-none"
                    placeholder="Provide details about plot location, size (e.g., 300 sq. yards), facing direction, or any municipal setbacks..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 bg-orange-500 hover:bg-orange-600 text-white font-nunito-friendly uppercase tracking-wider font-extrabold rounded-full transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-md shadow-orange-500/20 duration-200"
                >
                  {isSubmitting ? (
                    <span>Registering Project Blueprint...</span>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Submit Architecture Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Studio Location & Hours Footer */}
      <footer className="bg-white text-slate-600 py-20 border-t border-orange-100 font-nunito-friendly text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Studio Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-orange-400 text-white rounded-xl flex items-center justify-center font-bold">
                <Building size={16} />
              </div>
              <h3 className="text-base font-black text-slate-800">Infinite Architecture</h3>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm font-semibold">
              Designing joyful, naturally ventilated residential spaces that ground communities to the earth. Operating since 2012 in Banjara Hills, Hyderabad.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-orange-600 font-bold uppercase tracking-wider">Showroom Atelier</h3>
            <ul className="space-y-3.5 text-slate-500">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-orange-500 shrink-0 mt-0.5" />
                <span>Banjara Hills, Hyderabad, Telangana 500034</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-orange-500 shrink-0" />
                <span className="font-mono">+91 93814 40750</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-orange-500 shrink-0" />
                <span>projects@infinitestudio.in</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Map placeholder */}
          <div className="space-y-4">
            <h3 className="text-orange-600 font-bold uppercase tracking-wider">Atelier Hours</h3>
            <ul className="space-y-2 text-slate-500 mb-6">
              <li className="flex justify-between"><span>Monday – Saturday:</span> <span>09:30 AM – 6:30 PM</span></li>
              <li className="flex justify-between text-orange-600 font-extrabold"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
            
            {/* Map Placeholder */}
            <div className="w-full h-24 bg-[#FDF2E9]/40 border-2 border-orange-100 flex items-center justify-center text-slate-400 rounded-2xl">
              <div className="flex flex-col items-center gap-1.5">
                <MapPin size={16} className="text-orange-500 animate-bounce" />
                <span className="text-[10px] tracking-widest uppercase font-extrabold text-orange-400">Map: Banjara Hills, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-orange-100 text-center text-[10px] text-slate-400 tracking-[0.25em]">
          <p>© {new Date().getFullYear()} INFINITE ARCHITECTURE STUDIO. BLUEPRINT PROFILES REGISTERED UNDER MUNICIPAL BUILDING BY-LAWS.</p>
        </div>
      </footer>
    </div>
  );
}

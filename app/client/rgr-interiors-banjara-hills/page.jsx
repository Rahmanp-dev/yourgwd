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
  Volume2, 
  Calendar,
  Send,
  HelpCircle,
  FileText,
  Hammer,
  Truck,
  LayoutGrid
} from 'lucide-react';

const STYLES_DATA = {
  'Modern Minimalist': {
    title: 'Modern Minimalist',
    desc: 'Uncluttered spaces, handleless shutters, concealed lighting, and clean geometric structures. Maximizes natural light and utilizes neutral tones with black and charcoal micro-accents.',
    budget: '₹12 Lakhs - ₹20 Lakhs',
    materials: ['Saint-Gobain Fluted Glass', 'Anti-Fingerprint Matte Acrylic', 'Under-Cabinet Profile LEDs'],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'Art Deco': {
    title: 'Art Deco Luxury',
    desc: 'Bold geometrical structures, high-gloss veneer, fluted panels, brass/gold T-profile inlays, and rich velvet fabrics. Emphasizes decorative symmetry and metallic highlights.',
    budget: '₹22 Lakhs - ₹35 Lakhs',
    materials: ['High-Gloss Birdseye Maple Veneer', 'Champagne Gold T-Profiles', 'Saint-Laurent Gold Marble'],
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'Luxury Classical': {
    title: 'Luxury Classical',
    desc: 'Traditional elegance with elaborate crown mouldings, architraves, classical pillars, teak woodwork, and crystal chandeliers. Symmetrical layout planning and hand-carved detailing.',
    budget: '₹28 Lakhs - ₹45 Lakhs',
    materials: ['Burma Teak Wood Woodwork', 'Custom Plaster Crown Mouldings', 'Italian Statuario Marble'],
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'Contemporary': {
    title: 'Contemporary Luxury',
    desc: 'A fusion of organic textures, curved sofas, mixed wood grains, and state-of-the-art automation. Highly functional layouts that prioritize comfort and ambient lighting layers.',
    budget: '₹18 Lakhs - ₹30 Lakhs',
    materials: ['Smoked Oak Veneer', 'Powder-Coated Aluminium Trims', 'Sensored Cove Lighting'],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Consultation',
    title: 'Initial Workspace & Style Discovery',
    desc: 'We conduct a comprehensive assessment of your residence in Banjara Hills or surrounding areas, taking exact site measurements and mapping your functional layout requirements.',
    duration: '3 - 5 Days',
    deliverables: 'Site measurement blueprint, layout zoning options'
  },
  {
    step: '02',
    name: 'Concept',
    title: 'Mood Boards & Material Curation',
    desc: 'Our design curators build customized material boards featuring actual veneer samples, paint swatches, and lighting options to align on the visual direction and budget projections.',
    duration: '7 - 10 Days',
    deliverables: 'Visual mood boards, itemized preliminary budget estimates'
  },
  {
    step: '03',
    name: '3D Rendering',
    title: 'Photorealistic Visualizations',
    desc: 'We render every room in high definition, detailing the custom woodwork, false ceiling profiles, and kitchen workflow. You get a virtual walkthrough of your future luxury home.',
    duration: '10 - 15 Days',
    deliverables: '3D panoramic renderings, lighting plan layout'
  },
  {
    step: '04',
    name: 'Procurement',
    title: 'Factory Fabrication & Material Sourcing',
    desc: 'All bespoke modular furniture and woodwork elements are precision-machined at our factory using European machinery. This eliminates messy woodwork dust at your home.',
    duration: '20 - 30 Days',
    deliverables: 'Material procurement tracking, factory quality reports'
  },
  {
    step: '05',
    name: 'Execution',
    title: 'On-Site Installation & Handover',
    desc: 'Our skilled project managers oversee installation of false ceilings, woodwork, electrical components, and final cleaning, delivering your home with a flawless finish.',
    duration: '15 - 25 Days',
    deliverables: 'Completed residence handover, warranty certificates (10 Years)'
  }
];

const QUIZ_QUESTIONS = [
  {
    question: 'How do you prefer to experience your home layout?',
    options: [
      { text: 'Completely open, clutter-free, and highly minimal.', value: 'Modern Minimalist' },
      { text: 'Structured, symmetrical, with geometric accents.', value: 'Art Deco' },
      { text: 'Grand, decorative, with classical pillars and arches.', value: 'Luxury Classical' },
      { text: 'Comfortable, curved, with organic textures and wood.', value: 'Contemporary' }
    ]
  },
  {
    question: 'What false ceiling style speaks to your aesthetic?',
    options: [
      { text: 'Sleek frameless coves with magnetic track lighting.', value: 'Modern Minimalist' },
      { text: 'Geometric coffered ceiling panels with metallic gold lining.', value: 'Art Deco' },
      { text: 'Detailed plaster-of-Paris carvings with central crystal points.', value: 'Luxury Classical' },
      { text: 'Layered warm ambient drop coves with organic curves.', value: 'Contemporary' }
    ]
  },
  {
    question: 'Select your preferred kitchen cabinet finish:',
    options: [
      { text: 'Matte anti-fingerprint acrylic with J-pull profile handles.', value: 'Modern Minimalist' },
      { text: 'Fluted panels with brushed champagne gold inlaid pull tabs.', value: 'Art Deco' },
      { text: 'Polished solid teak frames with traditional profile glass shutters.', value: 'Luxury Classical' },
      { text: 'Warm natural wood veneer matched with grey lacquer accents.', value: 'Contemporary' }
    ]
  }
];

export default function RgrInteriorsPage() {
  // Active Tab for Portfolio
  const [activeStyle, setActiveStyle] = useState('Modern Minimalist');

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
    projectType: 'Full Home Interior',
    budgetRange: '₹20L - ₹35L',
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
      // Calculate most frequent recommendation
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
      message: `Recommended Design Style: ${recommendedStyle}. Please customize our consultation according to the ${recommendedStyle} aesthetic.`
    }));
    // Scroll to Booking Form
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        refNumber: `RGR-HYD-${Math.floor(100000 + Math.random() * 900000)}`,
        ...form
      });
    }, 1500);
  };

  return (
    <div className="bg-[#F9F9F6] text-[#2E2B2A] font-sans min-h-screen selection:bg-[#C5A880]/20 antialiased overflow-x-hidden">
      
      {/* Google Fonts Import Inside Code to guarantee correct styling in Dynamic Route */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-serif-luxury { font-family: 'Cormorant Garamond', serif; }
        .font-sans-luxury { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F9F9F6]/95 border-b border-[#E5E5D8]/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl lg:text-3xl tracking-widest uppercase text-[#8A7355] leading-none">
                RGR Interiors
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-sans-luxury mt-1.5">
                Bespoke Design Studio
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium font-sans-luxury">
              <a href="#designer-bio" className="hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all">Designer</a>
              <a href="#portfolio" className="hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all">Styles</a>
              <a href="#quiz" className="hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all">Design Quiz</a>
              <a href="#process" className="hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all">Our Process</a>
              <a href="#booking-section" className="hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all">Book Consult</a>
            </div>

            <div>
              <a 
                href="#booking-section"
                className="inline-flex items-center px-6 py-3 border border-[#8A7355] text-[#8A7355] hover:bg-[#8A7355] hover:text-white transition-all text-xs uppercase tracking-widest font-semibold font-sans-luxury active:scale-95 duration-200"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <header className="relative pt-12 pb-24 lg:py-32 overflow-hidden border-b border-[#E5E5D8]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Hero text */}
            <div className="lg:col-span-6 flex flex-col space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F4EB] border border-[#C5A880]/30 text-[#8A7355] text-xs font-sans-luxury tracking-wider w-fit mx-auto lg:mx-0">
                <Sparkles size={12} />
                <span>Platinum Premium Luxury Interiors</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-serif-luxury leading-tight text-[#3A352F] tracking-wide font-light">
                Tailored Spaces for <br />
                <span className="italic text-[#8A7355] font-normal">Exquisite Living</span>
              </h1>
              <p className="text-sm lg:text-base text-[#6E6860] font-sans-luxury leading-relaxed max-w-lg mx-auto lg:mx-0">
                At RGR Interiors & Designers, we elevate everyday living into an art form. Principal Designer Rajgopal Reddy curates bespoke woodwork, architectural false ceilings, and premium kitchens from our Banjara Hills studio to create spaces that mirror your unique personality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-sans-luxury">
                <a 
                  href="#booking-section"
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#8A7355] hover:bg-[#6D5A42] text-white text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 duration-200 shadow-md shadow-amber-900/10"
                >
                  Schedule Private Viewing
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#portfolio"
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#C5A880] hover:bg-[#F4F4EB] text-[#8A7355] text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 duration-200"
                >
                  Explore Aesthetics
                </a>
              </div>
            </div>

            {/* Hero image frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] border border-[#C5A880]/40 p-3 bg-white shadow-xl rounded-sm">
                <div className="w-full h-full relative overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                    alt="Luxury Interior Living Room by RGR Interiors"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gold watermark frame */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/40 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-3 px-5 border-l-2 border-[#8A7355]">
                    <p className="text-[10px] uppercase tracking-widest text-[#8A7355] font-semibold">Featured Project</p>
                    <p className="font-serif-luxury text-sm text-[#3A352F] mt-0.5">Banjara Hills Duplex Villa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Stats Bar */}
      <section className="bg-white py-12 border-b border-[#E5E5D8]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { metric: '350+', label: 'Luxury Handovers' },
              { metric: '18+', label: 'Years of Mastery' },
              { metric: '12', label: 'National Awards' },
              { metric: '100%', label: 'Hyderabad Curated' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="font-serif-luxury text-3xl lg:text-5xl text-[#8A7355] font-light">{stat.metric}</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-slate-500 font-sans-luxury">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Principal Designer Bio */}
      <section id="designer-bio" className="py-24 border-b border-[#E5E5D8]/50 bg-[#F4F4EB]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Bio Image */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="relative w-full max-w-sm aspect-[4/5] border border-[#E5E5D8] p-3 bg-white shadow-md">
                <div className="w-full h-full relative overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                    alt="Rajgopal Reddy - Principal Designer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent h-20"></div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="text-xs font-semibold text-[#8A7355] uppercase tracking-[0.25em] font-sans-luxury">Principal Designer</span>
              <h2 className="text-3xl lg:text-5xl font-serif-luxury text-[#3A352F] font-light leading-tight">
                Rajgopal Reddy
              </h2>
              <div className="w-16 h-[1px] bg-[#8A7355]"></div>
              
              <div className="space-y-4 font-sans-luxury text-sm text-[#6E6860] leading-relaxed">
                <p>
                  With nearly two decades of architectural interior experience, Rajgopal Reddy has established himself as a vanguard of luxury design in Hyderabad. His design philosophy centers on geometric integrity, premium material curation, and absolute utility.
                </p>
                <p className="italic">
                  &ldquo;A home should not merely contain luxury furniture. The structure itself—the wall paneling, the grain of the teak, the seamless transition of the ceiling coves—must sing a quiet, harmonious tune. We build spaces that live, breathe, and grow with their families.&rdquo;
                </p>
                <p>
                  Rajgopal specializes in custom, high-complexity woodwork, luxury integrated modular kitchens with hidden automation, and floating ceiling systems that manipulate ambient lighting to create unique emotional moods.
                </p>
              </div>

              {/* Specializations Checklist */}
              <div className="pt-4 border-t border-[#E5E5D8] grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans-luxury text-xs text-[#3A352F] font-semibold">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#8A7355]" />
                  <span>Bespoke Woodwork</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#8A7355]" />
                  <span>False Ceilings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#8A7355]" />
                  <span>Custom Kitchens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase / Interactive Style Selector */}
      <section id="portfolio" className="py-24 border-b border-[#E5E5D8]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8A7355] uppercase tracking-[0.25em] font-sans-luxury">Portfolio Curations</span>
            <h2 className="text-3xl lg:text-5xl font-serif-luxury text-[#3A352F] mt-3 font-light">Interactive Aesthetic Selector</h2>
            <div className="w-16 h-[1px] bg-[#8A7355] mx-auto mt-6"></div>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12 font-sans-luxury text-xs">
            {Object.keys(STYLES_DATA).map((styleName) => (
              <button
                key={styleName}
                onClick={() => setActiveStyle(styleName)}
                className={`py-3.5 px-6 border text-center uppercase tracking-widest font-semibold transition-all active:scale-95 duration-200 ${
                  activeStyle === styleName
                    ? 'border-[#8A7355] bg-[#8A7355] text-white shadow-sm'
                    : 'border-[#E5E5D8] bg-white text-[#6E6860] hover:border-[#8A7355] hover:text-[#8A7355]'
                }`}
              >
                {styleName}
              </button>
            ))}
          </div>

          {/* Active Style Showcase */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Specifications Card */}
            <div className="lg:col-span-5 p-8 border border-[#E5E5D8] bg-white shadow-sm rounded-sm space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-[#8A7355] font-bold block">Aesthetic Specs</span>
              <h3 className="font-serif-luxury text-2xl lg:text-3xl text-[#3A352F]">{STYLES_DATA[activeStyle].title}</h3>
              <p className="text-xs text-[#6E6860] font-sans-luxury leading-relaxed">{STYLES_DATA[activeStyle].desc}</p>
              
              <div className="space-y-4 pt-6 border-t border-[#E5E5D8] font-sans-luxury text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-2">Signature Materials</span>
                  <div className="flex flex-wrap gap-2">
                    {STYLES_DATA[activeStyle].materials.map((mat, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#F4F4EB] text-[#8A7355] border border-[#E5E5D8]/50 rounded-sm font-medium">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Execution Budget Frame</span>
                  <span className="text-base font-serif-luxury text-[#3A352F] font-bold">{STYLES_DATA[activeStyle].budget}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#booking-section"
                  className="w-full text-center py-4 bg-[#8A7355] hover:bg-[#6D5A42] text-white font-sans-luxury text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 duration-200 block shadow-sm"
                >
                  Request Quote for this Style
                </a>
              </div>
            </div>

            {/* Gallery Images Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STYLES_DATA[activeStyle].images.map((imgUrl, idx) => (
                <div key={idx} className="border border-[#E5E5D8] p-2 bg-white aspect-[3/4] shadow-sm rounded-sm hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-full h-full relative overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${activeStyle} design gallery photo`}
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
      <section id="quiz" className="py-24 border-b border-[#E5E5D8]/50 bg-[#F4F4EB]/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#8A7355] uppercase tracking-[0.25em] font-sans-luxury">Interactive Guide</span>
            <h2 className="text-3xl lg:text-4xl font-serif-luxury text-[#3A352F] mt-3 font-light">Find Your Interior Match</h2>
            <div className="w-16 h-[1px] bg-[#8A7355] mx-auto mt-6"></div>
          </div>

          <div className="p-8 md:p-12 border border-[#E5E5D8] bg-white shadow-md rounded-sm">
            {!recommendedStyle ? (
              <div className="font-sans-luxury">
                {/* Step indicator */}
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-6">
                  <span>Design Diagnostic</span>
                  <span>Question {quizStep + 1} of {QUIZ_QUESTIONS.length}</span>
                </div>
                
                {/* ProgressBar */}
                <div className="w-full h-1 bg-slate-100 rounded-full mb-8 overflow-hidden">
                  <div 
                    className="h-full bg-[#8A7355] transition-all duration-300"
                    style={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question */}
                <h3 className="font-serif-luxury text-2xl text-[#3A352F] mb-8 font-light">
                  {QUIZ_QUESTIONS[quizStep].question}
                </h3>

                {/* Options List */}
                <div className="flex flex-col gap-4">
                  {QUIZ_QUESTIONS[quizStep].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuizAnswer(opt.value)}
                      className="w-full text-left p-5 border border-[#E5E5D8] hover:border-[#8A7355] bg-[#F9F9F6]/40 hover:bg-[#F4F4EB]/20 text-xs font-medium text-[#6E6860] hover:text-[#3A352F] transition-all duration-200 active:scale-[0.99]"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 font-sans-luxury space-y-6">
                <div className="w-16 h-16 bg-[#F4F4EB] border border-[#C5A880]/30 text-[#8A7355] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Compass size={28} />
                </div>
                <h3 className="font-serif-luxury text-3xl text-[#3A352F] font-light">Your Style Archetype</h3>
                
                <div className="bg-[#F9F9F6] border border-[#E5E5D8] p-6 rounded-sm max-w-md mx-auto text-left space-y-4">
                  <div className="text-center border-b border-[#E5E5D8]/80 pb-3">
                    <span className="font-serif-luxury text-xl font-bold text-[#8A7355] uppercase tracking-wider">
                      {recommendedStyle}
                    </span>
                  </div>
                  <p className="text-xs text-[#6E6860] leading-relaxed">
                    {STYLES_DATA[recommendedStyle].desc}
                  </p>
                  <div className="text-xs pt-2">
                    <span className="text-slate-400 font-bold block uppercase tracking-wider">Recommended Budget Frame:</span>
                    <span className="font-serif-luxury text-sm font-bold text-[#3A352F]">{STYLES_DATA[recommendedStyle].budget}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
                  <button
                    onClick={applyQuizRecommendation}
                    className="flex-1 py-3.5 bg-[#8A7355] hover:bg-[#6D5A42] text-white text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 duration-200"
                  >
                    Apply & Book Consult
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 py-3.5 border border-[#C5A880] hover:bg-[#F4F4EB]/30 text-[#8A7355] text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 duration-200"
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
      <section id="process" className="py-24 border-b border-[#E5E5D8]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8A7355] uppercase tracking-[0.25em] font-sans-luxury">Workflow</span>
            <h2 className="text-3xl lg:text-5xl font-serif-luxury text-[#3A352F] mt-3 font-light">Interactive Design Process</h2>
            <div className="w-16 h-[1px] bg-[#8A7355] mx-auto mt-6"></div>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 text-center font-sans-luxury text-xs">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`py-4 px-2.5 border flex flex-col items-center justify-center gap-2 transition-all active:scale-95 duration-200 rounded-sm relative ${
                  activeProcessStep === idx
                    ? 'border-[#8A7355] bg-[#8A7355] text-white shadow-sm'
                    : 'border-[#E5E5D8] bg-white text-[#6E6860] hover:border-[#8A7355]'
                }`}
              >
                <span className="font-serif-luxury text-sm tracking-wider opacity-60 block font-semibold">{step.step}</span>
                <span className="uppercase tracking-widest font-bold font-sans-luxury text-[9px] lg:text-[10px] block">{step.name}</span>
                {activeProcessStep === idx && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#8A7355] hidden md:block"></div>
                )}
              </button>
            ))}
          </div>

          {/* Process Step Detail Panel */}
          <div className="border border-[#E5E5D8] p-8 md:p-12 bg-[#F9F9F6] shadow-sm rounded-sm font-sans-luxury">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#8A7355] font-black">
                  Step {PROCESS_STEPS[activeProcessStep].step} Detailed Flow
                </span>
                <h3 className="font-serif-luxury text-2xl lg:text-3xl text-[#3A352F] font-light">
                  {PROCESS_STEPS[activeProcessStep].title}
                </h3>
                <p className="text-xs text-[#6E6860] leading-relaxed">
                  {PROCESS_STEPS[activeProcessStep].desc}
                </p>
              </div>

              <div className="md:col-span-4 bg-white p-6 border border-[#E5E5D8] rounded-sm space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 font-bold block uppercase tracking-wider mb-1">Expected Timeline</span>
                  <span className="text-sm font-serif-luxury text-[#3A352F] font-semibold">{PROCESS_STEPS[activeProcessStep].duration}</span>
                </div>
                <div className="h-[1px] bg-slate-100"></div>
                <div>
                  <span className="text-slate-400 font-bold block uppercase tracking-wider mb-1">Key Milestone Deliverables</span>
                  <span className="text-xs text-[#6E6860] leading-relaxed block">{PROCESS_STEPS[activeProcessStep].deliverables}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="py-24 border-b border-[#E5E5D8]/50 bg-[#F4F4EB]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#8A7355] uppercase tracking-[0.25em] font-sans-luxury">Client Praise</span>
            <h2 className="text-3xl lg:text-5xl font-serif-luxury text-[#3A352F] mt-3 font-light">Hyderabad Patron Stories</h2>
            <div className="w-16 h-[1px] bg-[#8A7355] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Rajgopal Reddy transformed our duplex in Banjara Hills Road No. 3. The woodwork detailing is exceptional and the false ceiling design is incredibly sleek. His team managed the procurement with absolute transparency.",
                patron: "Ramakrishna Prasad",
                locality: "Banjara Hills, Hyderabad",
                specialty: "Custom Woodwork & False Ceilings"
              },
              {
                quote: "We commissioned RGR for our apartment in Jubilee Hills. The custom kitchen layout with modern acrylic and fluted glass partitions is a masterpiece of utility. Highly recommend their factory-finish modular approach.",
                patron: "Dr. Lakshmi Rao",
                locality: "Jubilee Hills, Hyderabad",
                specialty: "Modular Luxury Kitchen"
              },
              {
                quote: "The interactive design process and HD 3D renders gave us absolute clarity. Rajgopal Reddy matches global luxury design standards. The Smoked Oak paneling on our high-ceiling walls looks phenomenal.",
                patron: "Karan Johar Naidu",
                locality: "Gachibowli, Hyderabad",
                specialty: "Full Home Interior Curation"
              }
            ].map((testi, i) => (
              <div key={i} className="p-8 border border-[#E5E5D8] bg-white flex flex-col justify-between shadow-sm rounded-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={11} className="text-[#8A7355] fill-[#8A7355]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#6E6860] font-sans-luxury italic leading-relaxed">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3.5 font-sans-luxury">
                  <div className="w-9 h-9 rounded-full bg-[#F4F4EB] border border-[#C5A880]/30 flex items-center justify-center text-xs font-serif-luxury font-bold text-[#8A7355]">
                    {testi.patron.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#3A352F]">{testi.patron}</h4>
                    <div className="flex flex-col text-[10px] text-slate-400">
                      <span>{testi.locality}</span>
                      <span className="text-[#8A7355] font-semibold mt-0.5">{testi.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Consultation Booking / Enquiry Form */}
      <section id="booking-section" className="py-24 border-b border-[#E5E5D8]/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#8A7355] uppercase tracking-[0.25em] font-sans-luxury">Showroom & Virtual Booking</span>
            <h2 className="text-3xl lg:text-4xl font-serif-luxury text-[#3A352F] mt-3 font-light">Book a Private Design Consultation</h2>
            <p className="text-[#6E6860] text-xs font-sans-luxury mt-2">Connect directly with Principal Designer Rajgopal Reddy. Choose in-studio or virtual consulting sessions.</p>
            <div className="w-16 h-[1px] bg-[#8A7355] mx-auto mt-6"></div>
          </div>

          <div className="p-8 md:p-12 border border-[#E5E5D8] bg-[#F4F4EB]/25 shadow-md rounded-sm">
            {submittedData ? (
              <div className="text-center py-8 space-y-6 font-sans-luxury">
                <div className="w-16 h-16 bg-[#F4F4EB] border border-[#C5A880]/30 text-[#8A7355] rounded-full flex items-center justify-center mx-auto">
                  <Check size={28} />
                </div>
                <h3 className="font-serif-luxury text-2xl lg:text-3xl text-[#3A352F] font-light">Appointment Registered</h3>
                <p className="text-xs text-[#6E6860] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#3A352F]">{submittedData.name}</strong>. Your consultation record has been generated. Principal Designer Rajgopal Reddy will review your specifications and dial you within 3 business hours.
                </p>
                <div className="bg-white border border-[#E5E5D8] p-6 rounded-sm max-w-sm mx-auto text-left text-xs space-y-2.5">
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider block">Reference Booking ID:</span> <span className="font-mono font-bold text-[#8A7355] text-sm">{submittedData.refNumber}</span></div>
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider block">Service Category:</span> <span className="font-bold text-[#3A352F]">{submittedData.projectType}</span></div>
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider block">Project Start Target:</span> <span className="font-bold text-[#3A352F]">{submittedData.startDate}</span></div>
                  <div><span className="text-slate-400 font-semibold uppercase tracking-wider block">Assigned Atelier:</span> <span className="font-bold text-[#3A352F]">Banjara Hills Studio, Hyderabad</span></div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-8 py-3.5 border border-[#8A7355] text-[#8A7355] hover:bg-[#F4F4EB] uppercase text-xs tracking-widest font-semibold font-sans-luxury transition-all active:scale-95 duration-200"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 font-sans-luxury text-xs">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      className={`w-full p-4 bg-white border ${errors.name ? 'border-red-500' : 'border-[#E5E5D8] focus:border-[#8A7355]'} rounded-sm focus:outline-none transition-all text-[#3A352F]`}
                      placeholder="e.g. Rajeev Naidu"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">PHONE NUMBER *</label>
                    <input
                      type="text"
                      className={`w-full p-4 bg-white border ${errors.phone ? 'border-red-500' : 'border-[#E5E5D8] focus:border-[#8A7355]'} rounded-sm focus:outline-none transition-all text-[#3A352F]`}
                      placeholder="e.g. 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div>
                    <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className={`w-full p-4 bg-white border ${errors.email ? 'border-red-500' : 'border-[#E5E5D8] focus:border-[#8A7355]'} rounded-sm focus:outline-none transition-all text-[#3A352F]`}
                      placeholder="e.g. rajeev@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.email}</p>}
                  </div>

                  {/* Start Date field */}
                  <div>
                    <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">TARGET START DATE *</label>
                    <input
                      type="date"
                      className={`w-full p-4 bg-white border ${errors.startDate ? 'border-red-500' : 'border-[#E5E5D8] focus:border-[#8A7355]'} rounded-sm focus:outline-none transition-all text-[#3A352F]`}
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    />
                    {errors.startDate && <p className="text-red-500 mt-1 text-[11px] font-medium">{errors.startDate}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Type dropdown */}
                  <div>
                    <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">PROJECT TYPE</label>
                    <div className="relative">
                      <select
                        className="w-full p-4 bg-white border border-[#E5E5D8] focus:border-[#8A7355] rounded-sm focus:outline-none transition-all text-[#3A352F] appearance-none"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      >
                        <option value="Full Home Interior">Full Home Interior</option>
                        <option value="Custom Kitchen">Custom Kitchen</option>
                        <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                        <option value="Woodwork & Wardrobes">Woodwork & Wardrobes</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Budget range dropdown */}
                  <div>
                    <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">BUDGET RANGE</label>
                    <div className="relative">
                      <select
                        className="w-full p-4 bg-white border border-[#E5E5D8] focus:border-[#8A7355] rounded-sm focus:outline-none transition-all text-[#3A352F] appearance-none"
                        value={form.budgetRange}
                        onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                      >
                        <option value="₹10L - ₹20L">₹10 Lakhs - ₹20 Lakhs</option>
                        <option value="₹20L - ₹35L">₹20 Lakhs - ₹35 Lakhs</option>
                        <option value="₹35L - ₹50L">₹35 Lakhs - ₹50 Lakhs</option>
                        <option value="₹50L+">₹50 Lakhs+</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-[#3A352F] font-semibold uppercase tracking-wider mb-2">MESSAGE / SPACE DETAILS</label>
                  <textarea
                    rows="4"
                    className="w-full p-4 bg-white border border-[#E5E5D8] focus:border-[#8A7355] rounded-sm focus:outline-none transition-all text-[#3A352F] resize-none"
                    placeholder="Provide details about your villa or apartment room count, ceiling height preferences, or woodwork styles..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 bg-[#8A7355] hover:bg-[#6D5A42] text-white font-sans-luxury uppercase tracking-widest font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-md duration-200"
                >
                  {isSubmitting ? (
                    <span>Registering Consultation...</span>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Submit Enquiry Record</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Studio Location & Hours Footer */}
      <footer className="bg-white text-[#3A352F] py-20 border-t border-[#E5E5D8] font-sans-luxury text-xs tracking-wide">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Studio Profile */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-lg uppercase tracking-wider text-[#8A7355]">RGR Interiors & Designers</h3>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Crafting premium luxury woodwork, architectural false ceilings, and modular designer kitchens since 2008. Inspired by Nizami heritage and modern functional design.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-slate-400 font-bold uppercase tracking-widest font-sans-luxury">Atelier Address</h3>
            <ul className="space-y-3.5 text-slate-500">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#8A7355] shrink-0 mt-0.5" />
                <span>590, Arora Colony, Road No. 3, Banjara Hills, Hyderabad - 500034, Telangana</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#8A7355] shrink-0" />
                <span className="font-mono">+91 85559 63700</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#8A7355] shrink-0" />
                <span>design@rgrinteriors.com</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Map placeholder */}
          <div className="space-y-4">
            <h3 className="text-slate-400 font-bold uppercase tracking-widest font-sans-luxury">Operating Hours</h3>
            <ul className="space-y-2 text-slate-500 mb-6">
              <li className="flex justify-between"><span>Monday – Saturday:</span> <span>10:00 AM – 7:30 PM</span></li>
              <li className="flex justify-between text-[#8A7355] font-semibold"><span>Sunday:</span> <span>By Prior Appointment</span></li>
            </ul>
            
            {/* Map Placeholder */}
            <div className="w-full h-24 bg-[#F9F9F6] border border-[#E5E5D8] flex items-center justify-center text-slate-400 font-medium rounded-sm">
              <div className="flex flex-col items-center gap-1.5">
                <MapPin size={16} className="text-[#8A7355] animate-bounce" />
                <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Map: Road No. 3, Banjara Hills</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-[#E5E5D8] text-center text-[10px] text-slate-400 tracking-[0.25em]">
          <p>© {new Date().getFullYear()} RGR INTERIORS & DESIGNERS. ESTIMATES GENERATED ARE DEPICTIONS ONLY AND NOT FINAL CONTRACTUAL QUOTES.</p>
        </div>
      </footer>
    </div>
  );
}

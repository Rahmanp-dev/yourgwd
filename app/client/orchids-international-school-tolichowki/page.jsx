'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Compass, 
  ChevronRight,
  Info,
  Layers,
  GraduationCap,
  Award,
  BookOpen,
  Check
} from 'lucide-react';

export default function OrchidsPage() {
  // Pearl Timeline Navigator State
  const [activeMilestone, setActiveMilestone] = useState('2012');

  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('nursery');
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeCatering, setIncludeCatering] = useState(false);
  const [includeSports, setIncludeSports] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childDob: '',
    program: 'nursery',
    startDate: '',
    comments: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [childAge, setChildAge] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const milestones = {
    '2012': {
      year: '2012',
      title: 'The Pearl Foundation',
      desc: 'Orchids was founded in Tolichowki with a core vision to merge rigorous academic frameworks with high-end character education, setting a new benchmark for premium preschools.',
      badge: 'Establishment Year',
      detail: 'Starting with just 45 students, our focus on personal learning paths quickly gained acclaim from Tolichowki families.'
    },
    '2016': {
      year: '2016',
      title: 'Global Curriculum Accreditation',
      desc: 'Achieved international early-years accreditation. We fully integrated interactive STEM learning, digital storyboards, and multi-lingual courses into the core curriculum.',
      badge: 'Academic Milestone',
      detail: 'Our teachers underwent advanced training in Singapore and the UK to align early learning with global preschool methodologies.'
    },
    '2021': {
      year: '2021',
      title: 'Elite STEM & Sports Integration',
      desc: 'Launched our advanced robotics workshop and built an exclusive swimming facility. We introduced a physical-agility framework that blends mental logic with active swimming coaching.',
      badge: 'Holistic Milestone',
      detail: 'Every child gets a customized development chart, ensuring their motor, spatial, and cognitive milestones are actively tracked.'
    },
    '2026': {
      year: '2026',
      title: 'The Smart Pearl Campus',
      desc: 'Inaugurated our smart learning campus in Tolichowki, featuring interactive sensory projection floors, high-end children libraries, and child-safe air filtration systems.',
      badge: 'Modern Campus Launch',
      detail: 'Setting the premium gold standard for early childhood education, fully ready for tomorrow\'s leaders.'
    }
  };

  const programs = {
    playgroup: { name: 'Playgroup Elite', age: '1.5 - 2.5 Years', baseFee: 55000, desc: 'Introductory pre-sensory play and soft communication skills.' },
    nursery: { name: 'Nursery Academic', age: '2.5 - 3.5 Years', baseFee: 62000, desc: 'Early linguistic discovery, block coding principles, and social sharing.' },
    lkg: { name: 'LKG (Lower Kindergarten)', age: '3.5 - 4.5 Years', baseFee: 70000, desc: 'STEM foundation, phonics reading paths, and cooperative games.' },
    ukg: { name: 'UKG (Upper Kindergarten)', age: '4.5 - 5.5 Years', baseFee: 78000, desc: 'Advanced reading, numeracy, cognitive agility, and primary prep.' },
    daycare: { name: 'Elite Afternoon Club', age: '1.5 - 8.0 Years', baseFee: 45000, desc: 'Premium daycare with sports coaching, warm dining, and language courses.' },
    afterschool: { name: 'Creative Arts Academy', age: '3.0 - 10.0 Years', baseFee: 28000, desc: 'Extra enrichment: swimming, keyboard, advanced robotics, and chess.' }
  };

  // Fee calculation helper
  const calculateTotalFees = () => {
    const base = programs[selectedProgram].baseFee;
    const registration = 8000; // premium registration fee
    const transport = includeTransport ? 18000 : 0;
    const catering = includeCatering ? 15000 : 0;
    const sports = includeSports ? 20000 : 0;
    return {
      base,
      registration,
      transport,
      catering,
      sports,
      total: base + registration + transport + catering + sports
    };
  };

  const feeBreakdown = calculateTotalFees();

  // DOB Change and Age Calculation Handler
  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    setFormData({ ...formData, childDob: dobValue });
    
    if (!dobValue) {
      setChildAge(null);
      return;
    }

    const dob = new Date(dobValue);
    const today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
      years--;
      months += 12;
    }
    
    if (today.getDate() < dob.getDate()) {
      months--;
      if (months < 0) {
        months = 11;
        years--;
      }
    }

    if (years < 0) {
      setChildAge({ years: 0, months: 0, str: '0 months' });
      return;
    }

    let ageStr = '';
    if (years > 0) {
      ageStr += `${years} Year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (ageStr) ageStr += ' and ';
      ageStr += `${months} Month${months > 1 ? 's' : ''}`;
    }
    if (!years && !months) {
      ageStr = 'Newborn';
    }

    setChildAge({ years, months, str: ageStr });
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  // Form Validation and Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.parentName.trim()) errors.parentName = 'Parent name is required';
    if (!formData.parentEmail.trim()) {
      errors.parentEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      errors.parentEmail = 'Please enter a valid email address';
    }
    
    if (!formData.parentPhone.trim()) {
      errors.parentPhone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.parentPhone.replace(/[\s-]/g, ''))) {
      errors.parentPhone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.childName.trim()) errors.childName = 'Child name is required';
    if (!formData.childDob) errors.childDob = 'Child date of birth is required';
    if (!formData.startDate) errors.startDate = 'Expected start date is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden text-slate-800 bg-[#FDFBF7]">
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#F5E6C8]/40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1B4080] rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#F5E6C8] shadow-md">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#F5E6C8]" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99z" className="hidden" />
                <path d="M12 2L1 21h22L12 2zm0 4.19l7.73 12.81H4.27L12 6.19zM11 11h2v4h-2zm0 5h2v2h-2z" />
              </svg>
            </div>
            <div>
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight text-[#1B4080]">
                Orchids International
              </span>
              <span className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-widest -mt-0.5">
                Tolichowki Campus
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#about" className="hover:text-[#1B4080] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B4080] hover:after:w-full after:transition-all">Our Legacy</a>
            <a href="#programs" className="hover:text-[#1B4080] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B4080] hover:after:w-full after:transition-all">Academic Pathways</a>
            <a href="#gallery" className="hover:text-[#1B4080] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B4080] hover:after:w-full after:transition-all">Elite Facilities</a>
            <a href="#estimator" className="hover:text-[#1B4080] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B4080] hover:after:w-full after:transition-all">Fee Planner</a>
          </nav>

          <a 
            href="#enquiry" 
            className="bg-[#1B4080] hover:bg-[#122e60] text-white border border-[#D4AF37] px-6 py-2.5 rounded-full font-bold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
          >
            Schedule Tour
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 bg-gradient-to-b from-[#FDFBF7] via-[#F5E6C8]/20 to-[#FDFBF7]">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#F5E6C8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1B4080]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#F5E6C8]/60 border border-[#D4AF37]/30 text-[#1B4080] px-4 py-1.5 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              The Pinnacle of Academic Excellence
            </div>
            
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1B4080] leading-tight">
              Sculpting Global <br />
              <span className="text-[#D4AF37] relative inline-block italic font-normal">
                Leaders of Tomorrow
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#1B4080]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal font-[family-name:var(--font-inter)]">
              Welcome to Orchids International School Tolichowki. A luxury pearl of academic distinction, combining the rigorous world-class international curriculum with Ivy League readiness and premium sports facilities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#enquiry" 
                className="w-full sm:w-auto text-center bg-[#1B4080] hover:bg-[#122e60] text-white border border-[#D4AF37] px-8 py-4 rounded-xl font-bold shadow-xl transition-all transform hover:-translate-y-1"
              >
                Inquire for Admission
              </a>
              <a 
                href="#programs" 
                className="w-full sm:w-auto text-center bg-white text-[#1B4080] border border-[#1B4080]/30 hover:bg-[#F5E6C8]/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Our Curriculum
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="absolute inset-0 bg-[#F5E6C8]/40 rounded-[2rem] transform rotate-3 blur-sm scale-95"></div>
            <div className="relative bg-white p-5 rounded-[2rem] shadow-2xl border border-[#F5E6C8]/30">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-navy-800">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop" 
                  alt="Orchids International Smart Classroom" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b4080]/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl font-[family-name:var(--font-playfair)]">Elite Smart Classrooms</p>
                    <p className="text-xs text-slate-200 uppercase tracking-widest mt-1">Tolichowki Premier Campus</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#1B4080] p-4 rounded-xl shadow-xl border border-[#D4AF37]/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5E6C8] flex items-center justify-center text-[#1B4080] border border-[#D4AF37]/50">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Accreditation</p>
                <p className="text-sm font-bold">100% International Standard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="bg-[#1B4080] text-white py-12 px-6 border-y border-[#D4AF37]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: 'Top Ranked', label: 'International School', icon: Award },
            { metric: '25+', label: 'Premium Campuses', icon: Globe },
            { metric: '99%', label: 'Ivy League Readiness', icon: ShieldCheck },
            { metric: '8 : 1', label: 'Student-Teacher Ratio', icon: Layers }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-2 group">
                <div className="w-12 h-12 bg-white/15 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto text-[#F5E6C8] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold tracking-tight text-[#F5E6C8]">
                  {stat.metric}
                </h3>
                <p className="text-xs text-slate-300 font-semibold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. About & Philosophy / "Pearl Timeline Navigator" (Signature Section) */}
      <section id="about" className="py-20 md:py-28 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Our Legacy & Philosophy</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B4080]">
              The Pearl Milestone Journey
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Academic distinction is built over years of meticulous design. Trace the historic journey of Orchids International School in Tolichowki.
            </p>
          </div>

          {/* Pearl Timeline Navigator Component */}
          <div className="space-y-12">
            {/* Horizontal Timeline Bar */}
            <div className="relative py-8">
              {/* Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#F5E6C8] transform -translate-y-1/2 z-0"></div>
              
              <div className="flex justify-between items-center relative z-10 max-w-5xl mx-auto">
                {Object.keys(milestones).map((year) => {
                  const isActive = activeMilestone === year;
                  return (
                    <button
                      key={year}
                      onClick={() => setActiveMilestone(year)}
                      className="flex flex-col items-center group focus:outline-none"
                    >
                      <div className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        isActive 
                          ? 'bg-[#1B4080] border-[#D4AF37] scale-125 shadow-lg shadow-[#1B4080]/30' 
                          : 'bg-[#FDFBF7] border-[#F5E6C8] hover:border-[#1B4080] hover:scale-110'
                      }`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#D4AF37]' : 'bg-[#F5E6C8]'}`}></div>
                      </div>
                      <span className={`text-sm font-bold mt-3 transition-colors ${isActive ? 'text-[#1B4080] scale-110 font-extrabold' : 'text-slate-400 group-hover:text-slate-700'}`}>
                        {year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Milestone Card */}
            <div className="max-w-4xl mx-auto bg-[#FDFBF7] border border-[#F5E6C8] rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F5E6C8] text-[#1B4080] font-bold text-xs uppercase px-4 py-2 rounded-bl-xl border-l border-b border-[#D4AF37]/30">
                {milestones[activeMilestone].badge}
              </div>

              <div className="space-y-6">
                <span className="text-[#D4AF37] font-[family-name:var(--font-playfair)] text-5xl font-extrabold opacity-60 block">
                  {milestones[activeMilestone].year}
                </span>
                
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-extrabold text-[#1B4080]">
                  {milestones[activeMilestone].title}
                </h3>
                
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-normal">
                  {milestones[activeMilestone].desc}
                </p>

                <p className="text-[#1B4080] text-sm font-bold bg-[#F5E6C8]/30 border-l-4 border-[#D4AF37] p-4 rounded-r-xl">
                  {milestones[activeMilestone].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curriculum & Programs */}
      <section id="programs" className="py-20 md:py-28 px-6 bg-[#FDFBF7]/50 border-t border-[#F5E6C8]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Academic Offerings</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B4080]">
              Elite Early Childhood Pathways
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              Structured step-by-step preschool education built on active sensory learning and early intellectual preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(programs).map((key) => {
              const program = programs[key];
              return (
                <div 
                  key={key} 
                  className="bg-white border border-[#F5E6C8]/60 hover:border-[#D4AF37] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="bg-[#F5E6C8]/40 text-[#1B4080] font-bold text-xs px-3.5 py-1.5 rounded-full border border-[#D4AF37]/20 uppercase tracking-widest">
                        {program.age}
                      </span>
                      <GraduationCap className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#1B4080]">
                        {program.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {program.desc}
                      </p>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-700 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        <span>Interactive cognitive learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        <span>Premium swimming & playground access</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-widest block">Term Fee</span>
                      <span className="font-bold text-lg text-[#1B4080]">₹{program.baseFee.toLocaleString('en-IN')}</span>
                    </div>
                    <a 
                      href="#estimator" 
                      onClick={() => setSelectedProgram(key)} 
                      className="text-sm font-bold text-[#1B4080] hover:text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Fee Estimator <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Facilities Gallery */}
      <section id="gallery" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Our Premium Spaces</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B4080]">
              Tour Our Tolichowki Facilities
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              A premium, secure environment custom built for top-tier learning, physical growth, and creative self-expression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'High-Tech Classroom',
                desc: 'Integrated interactive projection systems and comfortable child-friendly seating.',
                img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop'
              },
              {
                title: 'Outdoor Active Playground',
                desc: 'Padded child-safe flooring with state-of-the-art climbing domes.',
                img: 'https://images.unsplash.com/photo-1595152203975-d14cf136a5a8?q=80&w=600&auto=format&fit=crop'
              },
              {
                title: 'Premium Kids Library',
                desc: 'A vast repository of world-class illustrated catalogs and digital stories.',
                img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop'
              },
              {
                title: 'Interactive Robotics Lab',
                desc: 'Tactile block and digital STEM kits to foster early engineering.',
                img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop'
              }
            ].map((facility, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-100 shadow-md border border-[#F5E6C8]"
              >
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b4080]/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border-2 border-transparent group-hover:border-[#D4AF37]/50 rounded-2xl m-1 transition-all duration-300">
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5E6C8]">
                    {facility.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Fee Estimator Widget */}
      <section id="estimator" className="py-20 md:py-28 px-6 bg-[#FDFBF7]/50 border-y border-[#F5E6C8]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Financial Transparency</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B4080]">
              Interactive Fee Calculator
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              Customize tuition choices, transport routes, and elite sporting plans. Real-time Term Fee statement.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#F5E6C8] shadow-sm space-y-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1B4080]">
                Select Preferences
              </h3>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                  Select Program
                </label>
                <select 
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#F5E6C8] focus:border-[#D4AF37] focus:outline-none rounded-lg p-3 font-semibold text-slate-800 transition-colors"
                >
                  {Object.keys(programs).map((key) => (
                    <option key={key} value={key}>
                      {programs[key].name} ({programs[key].age})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                  Optional Services (Per Term)
                </span>

                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-[#F5E6C8]/10 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeTransport} 
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#1B4080] border-slate-300"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#1B4080] block">Premium AC Transport</span>
                      <span className="text-xs text-slate-500 font-medium">Safe routes covering Tolichowki</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#1B4080]">+₹18,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-[#F5E6C8]/10 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeCatering} 
                      onChange={(e) => setIncludeCatering(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#1B4080] border-slate-300"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#1B4080] block">Five-Star Catering Plan</span>
                      <span className="text-xs text-slate-500 font-medium">Premium preschool diet planner</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#1B4080]">+₹15,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-[#F5E6C8]/10 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeSports} 
                      onChange={(e) => setIncludeSports(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#1B4080] border-slate-300"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#1B4080] block">Swimming & Sports Coaching</span>
                      <span className="text-xs text-slate-500 font-medium">Exclusive campus trainers</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#1B4080]">+₹20,000</span>
                </label>
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-7 bg-[#1B4080] text-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[#D4AF37]">
              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#F5E6C8]">
                    Fee Calculation Statement
                  </h3>
                  <p className="text-xs text-slate-300">
                    Breakdown statement for {programs[selectedProgram].name}
                  </p>
                </div>

                <div className="divide-y divide-[#F5E6C8]/20 border-y border-[#F5E6C8]/20 py-4 space-y-4">
                  <div className="flex justify-between text-sm pt-2">
                    <span>Base Tuition Fee</span>
                    <span className="font-bold text-[#F5E6C8]">₹{feeBreakdown.base.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-4">
                    <div className="flex items-center gap-1.5">
                      <span>Admissions & Administration</span>
                      <span className="text-[9px] bg-[#D4AF37] text-[#1B4080] font-bold px-1.5 py-0.5 rounded uppercase">One-time</span>
                    </div>
                    <span className="font-bold text-[#F5E6C8]">₹{feeBreakdown.registration.toLocaleString('en-IN')}</span>
                  </div>
                  {includeTransport && (
                    <div className="flex justify-between text-sm pt-4">
                      <span>Premium Bus Transport Add-on</span>
                      <span className="font-bold text-[#F5E6C8]">₹{feeBreakdown.transport.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {includeCatering && (
                    <div className="flex justify-between text-sm pt-4">
                      <span>Five-Star Catering Add-on</span>
                      <span className="font-bold text-[#F5E6C8]">₹{feeBreakdown.catering.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {includeSports && (
                    <div className="flex justify-between text-sm pt-4">
                      <span>Swimming & Sports Coaching Add-on</span>
                      <span className="font-bold text-[#F5E6C8]">₹{feeBreakdown.sports.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div>
                    <span className="font-bold text-base text-[#F5E6C8] block">Total Term Estimate</span>
                    <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Includes registration & first term</span>
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#F5E6C8]">
                    ₹{feeBreakdown.total.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-white/5 border border-[#D4AF37]/35 p-4 rounded-lg flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#F5E6C8] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Disclaimer: Installments option available. Orchids International School offers sibling fee deductions and special merit waiver applications. Please contact the admissions registrar for confirmation.
                  </p>
                </div>

                <a 
                  href="#enquiry" 
                  className="block text-center w-full bg-[#D4AF37] hover:bg-[#c29c2b] text-[#1B4080] p-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Schedule Tour with Selected Options
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Parent Testimonials */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Testimonials</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B4080]">
              From Tolichowki Families
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              Read real-life testimonials from local parents who trust Orchids International School.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The academic rigor at Orchids is outstanding. Phonics reading skills were developed early. My daughter absolutely loves the swimming lessons and interactive smartboards.",
                author: "Mrs. Rupa Reddy",
                role: "Parent of Keerthi (Nursery)",
                rating: 5
              },
              {
                quote: "Moving from the US, we were looking for a truly international standard of STEM education. Orchids has exceeded our academic expectations. Highly qualified teaching faculty.",
                author: "Dr. Faisal Rahman",
                role: "Parent of Yusuf (LKG)",
                rating: 5
              },
              {
                quote: "Excellent safety standards. The AC school transport, clean swimming facility, and nutritious meals are perfectly coordinated. Worth every rupee for the premium development of our child.",
                author: "Mrs. Hina Fatima",
                role: "Parent of Ayra (Playgroup)",
                rating: 5
              }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="bg-[#FDFBF7] border border-[#F5E6C8] p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-slate-700 italic text-sm leading-relaxed font-normal">
                    "{test.quote}"
                  </p>
                </div>

                <div className="border-t border-[#F5E6C8] pt-4 mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[#1B4080] text-base font-[family-name:var(--font-playfair)]">
                      {test.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold">{test.role}</p>
                  </div>
                  <span className="text-[9px] bg-[#D4AF37]/15 text-[#1B4080] border border-[#D4AF37]/35 px-2.5 py-1 rounded font-bold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Admission Enquiry Form */}
      <section id="enquiry" className="py-20 md:py-28 px-6 bg-[#FDFBF7]/50 border-t border-[#F5E6C8]/40">
        <div className="max-w-4xl mx-auto bg-white border border-[#F5E6C8] rounded-[2rem] overflow-hidden shadow-2xl">
          {formSubmitted ? (
            <div className="p-10 md:p-16 text-center space-y-6 bg-gradient-to-b from-white to-[#F5E6C8]/20">
              <div className="w-20 h-20 bg-[#1B4080] text-[#F5E6C8] border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#1B4080]">
                Private Consultation Scheduled
              </h3>
              <div className="max-w-md mx-auto bg-[#FDFBF7] p-6 rounded-xl border border-[#F5E6C8] space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Thank you <strong>{formData.parentName}</strong>. We have registered your tour slot and admission inquiry for <strong>{formData.childName}</strong> (Age: <strong>{childAge?.str}</strong>).
                </p>
                <p className="text-xs text-[#1B4080] font-bold">
                  A verification confirmation code has been generated. Our Tolichowki admissions registrar will contact you at <strong>{formData.parentPhone}</strong> and email details to <strong>{formData.parentEmail}</strong> shortly.
                </p>
              </div>
              <button 
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    parentName: '',
                    parentEmail: '',
                    parentPhone: '',
                    childName: '',
                    childDob: '',
                    program: 'nursery',
                    startDate: '',
                    comments: ''
                  });
                  setChildAge(null);
                }}
                className="bg-[#1B4080] hover:bg-[#122e60] text-white border border-[#D4AF37] px-8 py-3.5 rounded-lg font-bold transition-all"
              >
                Schedule Another Tour
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-extrabold text-[#1B4080]">
                  Private Tour & Admission Inquiry
                </h3>
                <p className="text-sm text-slate-500 max-w-lg mx-auto">
                  Fill in details below. Our admissions coordinator will arrange a private campus tour slot.
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Parent's Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`w-full bg-[#FDFBF7] border ${formErrors.parentName ? 'border-red-500' : 'border-[#F5E6C8]'} focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors`}
                  />
                  {formErrors.parentName && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.parentName}</p>
                  )}
                </div>

                {/* Child Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Child's Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    placeholder="Enter child's name"
                    className={`w-full bg-[#FDFBF7] border ${formErrors.childName ? 'border-red-500' : 'border-[#F5E6C8]'} focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors`}
                  />
                  {formErrors.childName && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.childName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Parent's Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    placeholder="parent@example.com"
                    className={`w-full bg-[#FDFBF7] border ${formErrors.parentEmail ? 'border-red-500' : 'border-[#F5E6C8]'} focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors`}
                  />
                  {formErrors.parentEmail && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.parentEmail}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Parent's Phone Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit number"
                    className={`w-full bg-[#FDFBF7] border ${formErrors.parentPhone ? 'border-red-500' : 'border-[#F5E6C8]'} focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors`}
                  />
                  {formErrors.parentPhone && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.parentPhone}</p>
                  )}
                </div>

                {/* Child DOB */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Child's Date of Birth <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="childDob"
                    value={formData.childDob}
                    onChange={handleDobChange}
                    className={`w-full bg-[#FDFBF7] border ${formErrors.childDob ? 'border-red-500' : 'border-[#F5E6C8]'} focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors`}
                  />
                  {formErrors.childDob && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.childDob}</p>
                  )}
                  {childAge && (
                    <div className="bg-[#F5E6C8]/40 border border-[#D4AF37]/30 px-3 py-1.5 rounded-lg text-xs text-[#1B4080] font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Calculated Age: {childAge.str}
                    </div>
                  )}
                </div>

                {/* Program Choice */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Select Preschool Program <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-[#FDFBF7] border border-[#F5E6C8] focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors font-semibold"
                  >
                    {Object.keys(programs).map((key) => (
                      <option key={key} value={key}>
                        {programs[key].name} ({programs[key].age})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Expected Start Date */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Expected Start Date <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className={`w-full bg-[#FDFBF7] border ${formErrors.startDate ? 'border-red-500' : 'border-[#F5E6C8]'} focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors`}
                  />
                  {formErrors.startDate && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.startDate}</p>
                  )}
                </div>

                {/* Comments / Additional Info */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-widest block">
                    Additional Information / Medical or Educational Requirements
                  </label>
                  <textarea 
                    name="comments"
                    rows="3"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Provide details on dietary limits, physical support needs or school transfer records..."
                    className="w-full bg-[#FDFBF7] border border-[#F5E6C8] focus:border-[#1B4080] focus:outline-none rounded-lg p-3.5 transition-colors"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#1B4080] hover:bg-[#122e60] text-white border border-[#D4AF37] px-10 py-4 rounded-lg font-bold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  Schedule Tour Now
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 10. Contact & Location Footer */}
      <footer className="bg-[#1B4080] text-white pt-16 pb-8 px-6 border-t border-[#D4AF37]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-[#F5E6C8]/10 pb-12 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#F5E6C8]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L1 21h22L12 2zm0 4.19l7.73 12.81H4.27L12 6.19z" />
                </svg>
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5E6C8]">
                Orchids Tolichowki
              </h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              A premium international preschool combining high academic frameworks with sports and cognitive training. Explore our custom early learning curriculum.
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-4 text-sm text-slate-300">
            <h4 className="font-[family-name:var(--font-playfair)] text-[#F5E6C8] font-bold text-base">
              Information Center
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Plot 88, Premium Heights Road, MD Lines, Tolichowki, Hyderabad, Telangana 500008</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>+91 91234 56789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>info.tolichowki@orchids.edu.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-playfair)] text-[#F5E6C8] font-bold text-base">
              Find Our Campus
            </h4>
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#F5E6C8]/10 border border-[#D4AF37]/35 flex flex-col items-center justify-center p-4 text-center group cursor-pointer">
              {/* Actual Map Iframe with zero margins/padding and full size */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5029302636254!2d78.40698187518428!3d17.399622983488825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d15220!2sTolichowki%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Orchids International School Tolichowki Location"
              ></iframe>
              {/* Overlay styling for safety fallback if iframe fails to load */}
              <div className="absolute bottom-2 left-2 bg-[#1B4080]/90 text-white text-[10px] px-2 py-1 rounded border border-[#D4AF37]/30 pointer-events-none">
                Interactive Tolichowki Map
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Orchids International School, Tolichowki Campus. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

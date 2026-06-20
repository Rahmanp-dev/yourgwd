'use client';

import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  Heart, 
  BookOpen, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Shield, 
  Compass, 
  Smile, 
  ChevronRight,
  Info,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function KangarooKidsPage() {
  // Curiosity Leaf Canopy State
  const [activeLeaf, setActiveLeaf] = useState('play');

  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('nursery');
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeMeals, setIncludeMeals] = useState(false);
  const [includeExtended, setIncludeExtended] = useState(false);

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

  const leaves = {
    play: {
      title: 'Active Play & Exploration',
      desc: 'Our play-based methodology encourages child-led discovery. Through sensory integration, physical hurdles, and interactive games, toddlers develop motor coordination and confidence.',
      quote: 'Play is the highest form of research.',
      author: 'Albert Einstein',
      color: 'bg-[#6BAA75]',
      icon: Smile
    },
    discover: {
      title: 'Nature-Centric Curiosities',
      desc: 'We use our lush green outdoor space in Tolichowki for nature walks, organic gardening, and outdoor science experiments. Children learn to care for the environment while exploring botany and physics concepts.',
      quote: 'Look deep into nature, and then you will understand everything better.',
      author: 'Albert Einstein',
      color: 'bg-[#4C8B56]',
      icon: Compass
    },
    connect: {
      title: 'Bilingual & Social Integration',
      desc: 'Nurturing empathetic communicators. Our language program integrates English, Telugu, and Urdu in creative storytelling circles, ensuring comfort and social inclusivity for every kid in Tolichowki.',
      quote: 'To have another language is to possess a second soul.',
      author: 'Charlemagne',
      color: 'bg-[#3A6B43]',
      icon: Users
    },
    create: {
      title: 'Creative Self-Expression',
      desc: 'Art, music, drama, and block construction. We provide raw, recycled, and natural materials to let kids express their inner worlds without constraints or rigid templates.',
      quote: 'Every child is an artist. The problem is how to remain an artist once we grow up.',
      author: 'Pablo Picasso',
      color: 'bg-[#2C4A3E]',
      icon: Sparkles
    }
  };

  const programs = {
    playgroup: { name: 'Playgroup', age: '1.5 - 2.5 Years', baseFee: 45000, desc: 'Introductory sensory-rich play and transition comfort.' },
    nursery: { name: 'Nursery', age: '2.5 - 3.5 Years', baseFee: 52000, desc: 'Building early language, sharing values, and creative play.' },
    lkg: { name: 'LKG (Lower Kindergarten)', age: '3.5 - 4.5 Years', baseFee: 60000, desc: 'Structured literacy, numeracy, and cooperative projects.' },
    ukg: { name: 'UKG (Upper Kindergarten)', age: '4.5 - 5.5 Years', baseFee: 65000, desc: 'Advanced cognitive readiness, logic, and primary school prep.' },
    daycare: { name: 'Premium Afternoon Daycare', age: '1.5 - 8.0 Years', baseFee: 35000, desc: 'Safe afternoon home with creative activities and nap rooms.' },
    afterschool: { name: 'After-School Enrichment', age: '3.0 - 10.0 Years', baseFee: 20000, desc: 'Hobby exploration: pottery, storytelling, and early coding.' }
  };

  // Fee calculation helper
  const calculateTotalFees = () => {
    const base = programs[selectedProgram].baseFee;
    const registration = 5000; // standard registration fee
    const transport = includeTransport ? 15000 : 0;
    const meals = includeMeals ? 12000 : 0;
    const extended = includeExtended ? 18000 : 0;
    return {
      base,
      registration,
      transport,
      meals,
      extended,
      total: base + registration + transport + meals + extended
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
    <div className="overflow-x-hidden text-slate-800 bg-[#FEFAE0]">
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#FEFAE0]/95 backdrop-blur-md border-b border-[#6BAA75]/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#2C4A3E] rounded-2xl flex items-center justify-center text-[#FEFAE0] shadow-md shadow-[#6BAA75]/20">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" className="hidden" />
                <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 01-2.8-.7l-1.46 1.46A7.93 7.93 0 0012 20c4.42 0 8-3.58 8-8h3l-4-4zM6 16l4-4H7c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0012 4c-4.42 0-8 3.58-8 8H1l4 4z" />
              </svg>
            </div>
            <div>
              <span className="font-[family-name:var(--font-merriweather)] text-xl font-bold tracking-tight text-[#2C4A3E]">
                Kangaroo Kids
              </span>
              <span className="block text-xs font-semibold text-[#6BAA75] uppercase tracking-widest -mt-1">
                Tolichowki
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#about" className="hover:text-[#6BAA75] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6BAA75] hover:after:w-full after:transition-all">Our Philosophy</a>
            <a href="#programs" className="hover:text-[#6BAA75] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6BAA75] hover:after:w-full after:transition-all">Programs</a>
            <a href="#gallery" className="hover:text-[#6BAA75] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6BAA75] hover:after:w-full after:transition-all">Campus Tour</a>
            <a href="#estimator" className="hover:text-[#6BAA75] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6BAA75] hover:after:w-full after:transition-all">Fee Guide</a>
          </nav>

          <a 
            href="#enquiry" 
            className="bg-[#E07A5F] hover:bg-[#d06a4f] text-[#FEFAE0] px-5 py-2.5 rounded-full font-bold shadow-lg shadow-[#E07A5F]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
          >
            Admissions Open
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-28 px-6 bg-gradient-to-b from-[#FEFAE0] via-[#E2ECE9] to-[#FEFAE0]">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#6BAA75]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2C4A3E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#6BAA75]/15 border border-[#6BAA75]/30 text-[#2C4A3E] px-4 py-1.5 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-[#E07A5F] animate-pulse" />
              Nurturing Nature & Curiosity in Tolichowki
            </div>
            
            <h1 className="font-[family-name:var(--font-merriweather)] text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-[#2C4A3E] leading-tight">
              Where Young Minds <br />
              <span className="text-[#6BAA75] relative inline-block">
                Blossom Naturally
                <svg className="absolute w-full h-3 -bottom-1.5 left-0 text-[#E07A5F]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At Kangaroo Kids Tolichowki, we blend world-class early childhood pedagogy with active, nature-inspired play. Our safe, sunlit gardens and loving educators support your child's natural journey of discovery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#enquiry" 
                className="w-full sm:w-auto text-center bg-[#E07A5F] hover:bg-[#d06a4f] text-[#FEFAE0] px-8 py-4 rounded-2xl font-bold shadow-xl shadow-[#E07A5F]/30 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Inquire for Admission
              </a>
              <a 
                href="#programs" 
                className="w-full sm:w-auto text-center bg-[#FEFAE0] text-[#2C4A3E] border-2 border-[#2C4A3E] hover:bg-[#6BAA75]/10 px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="absolute inset-0 bg-[#6BAA75]/20 rounded-[3rem] transform rotate-3 blur-md scale-95"></div>
            <div className="relative bg-white p-5 rounded-[2.5rem] shadow-xl border border-[#6BAA75]/10">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-emerald-800">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop" 
                  alt="Kangaroo Kids Premium Classroom" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg font-[family-name:var(--font-merriweather)]">Nature-Infused Spaces</p>
                    <p className="text-sm text-slate-200">Sunlit, open classrooms facing our Tolichowki garden</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#2C4A3E] text-[#FEFAE0] p-4 rounded-2xl shadow-lg border border-[#6BAA75]/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6BAA75] flex items-center justify-center text-[#FEFAE0]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-300 font-bold">Campus Safety</p>
                <p className="text-sm font-bold">100% CCTV & Child-Safe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="bg-[#2C4A3E] text-[#FEFAE0] py-10 px-6 border-y-4 border-[#6BAA75]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: '15+ Years', label: 'Tolichowki Legacy', icon: Award },
            { metric: '1200+', label: 'Happy Kids Enrolled', icon: Users },
            { metric: '10 : 1', label: 'Student-Teacher Ratio', icon: Layers },
            { metric: '98%', label: 'Parent Satisfaction Rate', icon: Heart }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-2 group">
                <div className="w-12 h-12 bg-[#6BAA75]/20 rounded-full flex items-center justify-center mx-auto text-[#6BAA75] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold tracking-tight text-[#FEFAE0]">
                  {stat.metric}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. About & Philosophy / "Curiosity Leaf Canopy" (Signature Section) */}
      <section id="about" className="py-20 md:py-28 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#6BAA75] font-bold text-sm uppercase tracking-widest">Our Vision</span>
            <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4A3E]">
              Nature Green Philosophy
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe early childhood shouldn't be rushed. It is a unique window of wonder. In Tolichowki, we offer a green sanctuary for kids to discover their potentials.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* The Canopy Selector */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Explore the Pillars of Kangaroo Kids</p>
              {Object.keys(leaves).map((key) => {
                const leaf = leaves[key];
                const Icon = leaf.icon;
                const isActive = activeLeaf === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveLeaf(key)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group ${
                      isActive 
                        ? 'bg-[#2C4A3E] border-[#2C4A3E] text-[#FEFAE0] shadow-lg translate-x-2' 
                        : 'bg-[#FEFAE0] border-[#6BAA75]/30 hover:border-[#6BAA75] hover:bg-[#6BAA75]/5 text-slate-800'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#6BAA75] text-[#FEFAE0]' : 'bg-[#6BAA75]/20 text-[#2C4A3E] group-hover:bg-[#6BAA75]/30'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`font-bold font-[family-name:var(--font-merriweather)] ${isActive ? 'text-[#FEFAE0]' : 'text-[#2C4A3E]'}`}>
                        {leaf.title}
                      </h4>
                      <p className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        Click to discover details
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pillar Details Container */}
            <div className="lg:col-span-7 bg-[#FEFAE0] border-2 border-[#6BAA75]/30 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6BAA75]/10 rounded-bl-full pointer-events-none"></div>
              
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2C4A3E] text-[#FEFAE0] rounded-2xl">
                  {React.createElement(leaves[activeLeaf].icon, { className: 'w-7 h-7' })}
                </div>
                
                <h3 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold text-[#2C4A3E]">
                  {leaves[activeLeaf].title}
                </h3>
                
                <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                  {leaves[activeLeaf].desc}
                </p>

                <div className="border-t border-[#6BAA75]/30 pt-6">
                  <blockquote className="italic text-[#2C4A3E] font-medium text-lg">
                    "{leaves[activeLeaf].quote}"
                  </blockquote>
                  <cite className="block text-sm text-[#6BAA75] font-bold mt-2 not-italic">
                    — {leaves[activeLeaf].author}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curriculum & Programs */}
      <section id="programs" className="py-20 md:py-28 px-6 bg-[#FEFAE0]/50 border-t border-[#6BAA75]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#6BAA75] font-bold text-sm uppercase tracking-widest">Our Programs</span>
            <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4A3E]">
              Comprehensive Learning Pathways
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every stage of early development requires distinct nurturing. Explore our structured curriculum plans tailored from playgroup to early childhood graduation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(programs).map((key) => {
              const program = programs[key];
              return (
                <div 
                  key={key} 
                  className="bg-white border border-[#6BAA75]/20 hover:border-[#6BAA75] rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="bg-[#6BAA75]/10 text-[#2C4A3E] font-bold text-xs uppercase px-3.5 py-1.5 rounded-full tracking-wider border border-[#6BAA75]/20">
                        {program.age}
                      </span>
                      <GraduationCap className="w-6 h-6 text-[#E07A5F] opacity-75 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-[family-name:var(--font-merriweather)] text-xl md:text-2xl font-bold text-[#2C4A3E]">
                        {program.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {program.desc}
                      </p>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-700 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#6BAA75] flex-shrink-0" />
                        <span>Interactive physical activity modules</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#6BAA75] flex-shrink-0" />
                        <span>Nature immersion learning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider block">Base Fee</span>
                      <span className="font-bold text-lg text-[#2C4A3E]">₹{program.baseFee.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-slate-500"> / term</span>
                    </div>
                    <a 
                      href="#estimator" 
                      onClick={() => setSelectedProgram(key)} 
                      className="text-sm font-bold text-[#E07A5F] hover:text-[#d06a4f] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Estimate Fees <ChevronRight className="w-4 h-4" />
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
            <span className="text-[#6BAA75] font-bold text-sm uppercase tracking-widest">Our Facilities</span>
            <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4A3E]">
              Step Inside Our Campus
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Designed with toddler safety and environmental learning in mind, our Tolichowki campus is a premium space for active growing minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Sunlit Reading Corner',
                desc: 'Stocked with local and global storybooks.',
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop'
              },
              {
                title: 'Safe Outdoor Playground',
                desc: 'Soft grass cover and sensory physical obstacles.',
                img: 'https://images.unsplash.com/photo-1564429138004-314dfdbff4bc?q=80&w=600&auto=format&fit=crop'
              },
              {
                title: 'Creative Art Atelier',
                desc: 'For tactile, messy clay and coloring sessions.',
                img: 'https://images.unsplash.com/photo-1464316311666-4c3e8a159932?q=80&w=600&auto=format&fit=crop'
              },
              {
                title: 'Eco Organic Garden',
                desc: 'Where children plant seeds and watch them grow.',
                img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop'
              }
            ].map((facility, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-slate-100 shadow-md border border-[#6BAA75]/10"
              >
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-[family-name:var(--font-merriweather)] text-lg font-bold">
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
      <section id="estimator" className="py-20 md:py-28 px-6 bg-[#FEFAE0]/50 border-y border-[#6BAA75]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#6BAA75] font-bold text-sm uppercase tracking-widest">Pricing Transparency</span>
            <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4A3E]">
              Interactive Fee Estimator
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              No hidden costs. Choose a preschool program and optional premium add-on amenities to calculate real-time term fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-5 bg-white p-8 rounded-[2rem] border border-[#6BAA75]/20 shadow-sm space-y-6">
              <h3 className="font-[family-name:var(--font-merriweather)] text-xl font-bold text-[#2C4A3E]">
                Select Preferences
              </h3>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Select Program
                </label>
                <select 
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-[#FEFAE0] border border-[#6BAA75]/30 focus:border-[#6BAA75] focus:outline-none rounded-xl p-3 font-semibold text-slate-800 transition-colors"
                >
                  {Object.keys(programs).map((key) => (
                    <option key={key} value={key}>
                      {programs[key].name} ({programs[key].age})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Optional Services (Per Term)
                </span>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-[#FEFAE0]/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeTransport} 
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#6BAA75] border-slate-300"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#2C4A3E] block">School Bus Transport</span>
                      <span className="text-xs text-slate-500">Tolichowki and surrounding areas</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#6BAA75]">+₹15,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-[#FEFAE0]/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeMeals} 
                      onChange={(e) => setIncludeMeals(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#6BAA75] border-slate-300"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#2C4A3E] block">Organic Meal Plan</span>
                      <span className="text-xs text-slate-500">Fresh daily lunch and snack box</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#6BAA75]">+₹12,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-[#FEFAE0]/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeExtended} 
                      onChange={(e) => setIncludeExtended(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#6BAA75] border-slate-300"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#2C4A3E] block">Extended Hour Support</span>
                      <span className="text-xs text-slate-500">Additional 2 hours daycare daily</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#6BAA75]">+₹18,000</span>
                </label>
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-7 bg-[#2C4A3E] text-[#FEFAE0] p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-[#6BAA75]/30">
              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-merriweather)] text-xl font-bold">
                    Fee Calculation Estimate
                  </h3>
                  <p className="text-xs text-slate-300">
                    Breakdown for {programs[selectedProgram].name}
                  </p>
                </div>

                <div className="divide-y divide-[#6BAA75]/40 border-y border-[#6BAA75]/40 py-4 space-y-4">
                  <div className="flex justify-between text-sm pt-2">
                    <span>Base Tuition Fee</span>
                    <span className="font-bold">₹{feeBreakdown.base.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-4">
                    <div className="flex items-center gap-1.5">
                      <span>Admission & Registration</span>
                      <span className="text-[10px] bg-[#6BAA75] text-[#FEFAE0] font-bold px-1.5 py-0.5 rounded uppercase">One-time</span>
                    </div>
                    <span className="font-bold">₹{feeBreakdown.registration.toLocaleString('en-IN')}</span>
                  </div>
                  {includeTransport && (
                    <div className="flex justify-between text-sm pt-4">
                      <span>School Bus Transport Add-on</span>
                      <span className="font-bold">₹{feeBreakdown.transport.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {includeMeals && (
                    <div className="flex justify-between text-sm pt-4">
                      <span>Organic Meal Add-on</span>
                      <span className="font-bold">₹{feeBreakdown.meals.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {includeExtended && (
                    <div className="flex justify-between text-sm pt-4">
                      <span>Extended Hour Daycare Add-on</span>
                      <span className="font-bold">₹{feeBreakdown.extended.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div>
                    <span className="font-bold text-base block">Total Term Estimate</span>
                    <span className="text-[11px] text-slate-300 font-medium">Includes first term tuition + registration</span>
                  </div>
                  <span className="font-[family-name:var(--font-merriweather)] text-3xl font-extrabold text-[#FEFAE0]">
                    ₹{feeBreakdown.total.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-[#6BAA75]/15 border border-[#6BAA75]/30 p-4 rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#6BAA75] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Note: A school term covers 4 calendar months. We offer an extra 5% sibling concession and installment payment schedules. Verify exact details with our Tolichowki coordinator.
                  </p>
                </div>

                <a 
                  href="#enquiry" 
                  className="block text-center w-full bg-[#E07A5F] hover:bg-[#d06a4f] text-[#FEFAE0] p-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Apply with Selected Options
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
            <span className="text-[#6BAA75] font-bold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4A3E]">
              What Tolichowki Parents Say
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nothing speaks better than the experience of our neighborhood families. Here is real feedback from our parents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finding a preschool with active green areas was our priority. Kangaroo Kids in Tolichowki exceeded our expectations. The sensory walks are outstanding and my child looks forward to school every day.",
                author: "Dr. Asma Fatima",
                role: "Parent of Sarah (Nursery)",
                rating: 5
              },
              {
                quote: "The child-to-teacher ratio is a lifesaver. My son received direct comfort when settling in. His speech, language fluency, and creative writing abilities improved noticeably in just six months.",
                author: "Mr. Srinivas Rao",
                role: "Parent of Ayush (LKG)",
                rating: 5
              },
              {
                quote: "Incredibly professional daycare support. As working parents in MD Lines, we are fully relaxed knowing she is eating healthy organic meals and taking naps in a clean, hygienic sanctuary.",
                author: "Mrs. Sameera Khan",
                role: "Parent of Zayd (Playgroup)",
                rating: 5
              }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="bg-[#FEFAE0]/30 border border-[#6BAA75]/20 p-8 rounded-[2rem] relative shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E07A5F] text-[#E07A5F]" />
                    ))}
                  </div>

                  <p className="text-slate-700 italic text-sm leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="border-t border-[#6BAA75]/20 pt-4 mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[#2C4A3E] text-base font-[family-name:var(--font-merriweather)]">
                      {test.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold">{test.role}</p>
                  </div>
                  <span className="text-[10px] bg-[#6BAA75]/15 text-[#2C4A3E] px-2.5 py-1 rounded font-bold uppercase">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Admission Enquiry Form */}
      <section id="enquiry" className="py-20 md:py-28 px-6 bg-[#FEFAE0]/50 border-t border-[#6BAA75]/10">
        <div className="max-w-4xl mx-auto bg-white border border-[#6BAA75]/20 rounded-[2.5rem] overflow-hidden shadow-xl">
          {formSubmitted ? (
            <div className="p-10 md:p-16 text-center space-y-6 bg-gradient-to-b from-white to-[#FEFAE0]/40">
              <div className="w-20 h-20 bg-[#6BAA75] text-[#FEFAE0] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#6BAA75]/20 animate-bounce">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="font-[family-name:var(--font-merriweather)] text-3xl font-bold text-[#2C4A3E]">
                Enquiry Registered Successfully!
              </h3>
              <div className="max-w-md mx-auto bg-[#FEFAE0] p-6 rounded-2xl border border-[#6BAA75]/20 space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Thank you <strong>{formData.parentName}</strong>! We have recorded your admission inquiry for <strong>{formData.childName}</strong> (Calculated Age: <strong>{childAge?.str}</strong>).
                </p>
                <p className="text-xs text-[#2C4A3E] font-bold">
                  A verification confirmation code has been generated. Our Tolichowki coordinator will connect with you at <strong>{formData.parentPhone}</strong> and email details to <strong>{formData.parentEmail}</strong> shortly.
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
                className="bg-[#2C4A3E] hover:bg-[#1f372e] text-[#FEFAE0] px-8 py-3.5 rounded-xl font-bold transition-all"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-2">
                <h3 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold text-[#2C4A3E]">
                  Admission Enquiry Form
                </h3>
                <p className="text-sm text-slate-500 max-w-lg mx-auto">
                  Fill in your details below to schedule a direct coordinator consultation and book a campus tour slot.
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Parent's Full Name <span className="text-[#E07A5F]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`w-full bg-[#FEFAE0]/35 border ${formErrors.parentName ? 'border-red-500' : 'border-[#6BAA75]/30'} focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors`}
                  />
                  {formErrors.parentName && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.parentName}</p>
                  )}
                </div>

                {/* Child Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Child's Full Name <span className="text-[#E07A5F]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    placeholder="Enter child's name"
                    className={`w-full bg-[#FEFAE0]/35 border ${formErrors.childName ? 'border-red-500' : 'border-[#6BAA75]/30'} focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors`}
                  />
                  {formErrors.childName && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.childName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Parent's Email Address <span className="text-[#E07A5F]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    placeholder="parent@example.com"
                    className={`w-full bg-[#FEFAE0]/35 border ${formErrors.parentEmail ? 'border-red-500' : 'border-[#6BAA75]/30'} focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors`}
                  />
                  {formErrors.parentEmail && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.parentEmail}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Parent's Phone Number <span className="text-[#E07A5F]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit number"
                    className={`w-full bg-[#FEFAE0]/35 border ${formErrors.parentPhone ? 'border-red-500' : 'border-[#6BAA75]/30'} focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors`}
                  />
                  {formErrors.parentPhone && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.parentPhone}</p>
                  )}
                </div>

                {/* Child DOB */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Child's Date of Birth <span className="text-[#E07A5F]">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="childDob"
                    value={formData.childDob}
                    onChange={handleDobChange}
                    className={`w-full bg-[#FEFAE0]/35 border ${formErrors.childDob ? 'border-red-500' : 'border-[#6BAA75]/30'} focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors`}
                  />
                  {formErrors.childDob && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.childDob}</p>
                  )}
                  {childAge && (
                    <div className="bg-[#6BAA75]/10 border border-[#6BAA75]/20 px-3 py-1.5 rounded-lg text-xs text-[#2C4A3E] font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Calculated Age: {childAge.str}
                    </div>
                  )}
                </div>

                {/* Program Choice */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Select Preschool Program <span className="text-[#E07A5F]">*</span>
                  </label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-[#FEFAE0]/35 border border-[#6BAA75]/30 focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors font-semibold"
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
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Expected Start Date <span className="text-[#E07A5F]">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className={`w-full bg-[#FEFAE0]/35 border ${formErrors.startDate ? 'border-red-500' : 'border-[#6BAA75]/30'} focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors`}
                  />
                  {formErrors.startDate && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.startDate}</p>
                  )}
                </div>

                {/* Comments / Additional Info */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Additional Comments / Child's Specific Needs
                  </label>
                  <textarea 
                    name="comments"
                    rows="3"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Tell us about your child's milestones or any dietary requirements..."
                    className="w-full bg-[#FEFAE0]/35 border border-[#6BAA75]/30 focus:border-[#6BAA75] focus:outline-none rounded-xl p-3.5 transition-colors"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#E07A5F] hover:bg-[#d06a4f] text-[#FEFAE0] px-10 py-4 rounded-xl font-bold shadow-lg shadow-[#E07A5F]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  Submit Admission Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 10. Contact & Location Footer */}
      <footer className="bg-[#2C4A3E] text-[#FEFAE0] pt-16 pb-8 px-6 border-t-4 border-[#6BAA75]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-[#6BAA75]/40 pb-12 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#6BAA75] rounded-xl flex items-center justify-center text-[#FEFAE0]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 01-2.8-.7l-1.46 1.46A7.93 7.93 0 0012 20c4.42 0 8-3.58 8-8h3l-4-4zM6 16l4-4H7c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0012 4c-4.42 0-8 3.58-8 8H1l4 4z" />
                </svg>
              </div>
              <h4 className="font-[family-name:var(--font-merriweather)] text-lg font-bold">
                Kangaroo Kids Tolichowki
              </h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We offer interactive Nature Green environments for toddlers and early nursery learning. Step inside and let your child explore the magic of childhood.
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-4 text-sm text-slate-300">
            <h4 className="font-[family-name:var(--font-merriweather)] text-[#FEFAE0] font-bold text-base">
              Quick Details
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#6BAA75] flex-shrink-0 mt-0.5" />
                <span>Plot 42, Kakatiya Hills, Opp. MD Lines, Tolichowki, Hyderabad, Telangana 500008</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#6BAA75] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#6BAA75] flex-shrink-0" />
                <span>admissions.tolichowki@kangarookids.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#6BAA75] flex-shrink-0" />
                <span>Mon - Fri: 8:30 AM - 3:30 PM | Sat: 9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-merriweather)] text-[#FEFAE0] font-bold text-base">
              Find Us
            </h4>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#6BAA75]/10 border border-[#6BAA75]/30 flex flex-col items-center justify-center p-4 text-center group cursor-pointer">
              {/* Actual Map Iframe with zero margins/padding and full size */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5029302636254!2d78.40698187518428!3d17.399622983488825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d15220!2sTolichowki%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kangaroo Kids Tolichowki Map Location"
              ></iframe>
              {/* Overlay styling for safety fallback if iframe fails to load */}
              <div className="absolute bottom-2 left-2 bg-[#2C4A3E]/90 text-white text-[10px] px-2 py-1 rounded border border-[#6BAA75]/30 pointer-events-none">
                Interactive Tolichowki Map
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Kangaroo Kids International Preschool, Tolichowki Branch. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#6BAA75] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#6BAA75] transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

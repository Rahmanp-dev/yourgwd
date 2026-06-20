"use client";

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  Users, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  Calculator,
  Info,
  Check
} from 'lucide-react';

export default function KidzeeTolichowkiPage() {
  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('Nursery');
  const [includeDaycare, setIncludeDaycare] = useState(false);
  const [includeMeals, setIncludeMeals] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);

  // Admission Enquiry Form State
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    parentEmail: '',
    parentPhone: '',
    childDob: '',
    program: 'Nursery',
    targetDate: '',
    message: ''
  });
  
  const [calculatedAge, setCalculatedAge] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fee calculation logic
  const baseFees = {
    'Playgroup': { tuition: 4800, term: 11000, books: 4800 },
    'Nursery': { tuition: 5200, term: 12000, books: 5200 },
    'LKG': { tuition: 5800, term: 13000, books: 5800 },
    'UKG': { tuition: 6200, term: 13500, books: 5800 }
  };

  const getFees = () => {
    const selected = baseFees[selectedProgram] || baseFees['Nursery'];
    const admissionFee = 9500; // One-time admission fee
    let monthlyAddons = 0;
    
    if (includeDaycare) monthlyAddons += 2200;
    if (includeMeals) monthlyAddons += 1600;
    if (includeTransport) monthlyAddons += 1400;

    const totalMonthly = selected.tuition + monthlyAddons;
    const totalTerm = selected.term + (monthlyAddons * 4); // term covers 4 months
    const totalAnnual = (selected.tuition * 10) + (selected.term * 2) + selected.books + (monthlyAddons * 10) + admissionFee;

    return {
      admissionFee,
      tuitionMonthly: selected.tuition,
      termFee: selected.term,
      booksFee: selected.books,
      addonsMonthly: monthlyAddons,
      totalMonthly,
      totalTerm,
      totalAnnual
    };
  };

  const fees = getFees();

  // Age calculation effect
  useEffect(() => {
    if (formData.childDob) {
      const birthDate = new Date(formData.childDob);
      const today = new Date();
      
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      
      if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
      }
      
      if (years >= 0) {
        setCalculatedAge({ years, months });
      } else {
        setCalculatedAge(null);
      }
    } else {
      setCalculatedAge(null);
    }
  }, [formData.childDob]);

  // Form Validation
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers

    if (!formData.parentName.trim()) {
      errors.parentName = 'Parent name is required';
    }
    
    if (!formData.childName.trim()) {
      errors.childName = 'Child name is required';
    }

    if (!formData.parentEmail.trim()) {
      errors.parentEmail = 'Email address is required';
    } else if (!emailRegex.test(formData.parentEmail)) {
      errors.parentEmail = 'Please enter a valid email address';
    }

    if (!formData.parentPhone.trim()) {
      errors.parentPhone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.parentPhone)) {
      errors.parentPhone = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.childDob) {
      errors.childDob = 'Date of birth is required';
    } else if (calculatedAge) {
      const totalMonths = (calculatedAge.years * 12) + calculatedAge.months;
      if (totalMonths < 18) {
        errors.childDob = 'Child must be at least 1.5 years old (18 months)';
      } else if (calculatedAge.years > 6) {
        errors.childDob = 'Child age must not exceed 6 years for preschool programs';
      }
    }

    if (!formData.targetDate) {
      errors.targetDate = 'Target admission date is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error on type
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen text-[#2A3B34] bg-[#ECF5F0] relative overflow-x-hidden selection:bg-[#A8E6CF] selection:text-[#1E3B30]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 px-6 py-5 bg-[#ECF5F0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-3xl px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#ECF5F0] shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#4A856D]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-wide text-teal-800">KIDZEE</span>
              <span className="text-xs block font-bold text-teal-600/80 uppercase tracking-widest leading-none">Tolichowki</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-teal-800/80">
            <a href="#about" className="hover:text-teal-900 transition-colors">Philosophy</a>
            <a href="#programs" className="hover:text-teal-900 transition-colors">Programs</a>
            <a href="#facilities" className="hover:text-teal-900 transition-colors">Facilities</a>
            <a href="#fees" className="hover:text-teal-900 transition-colors">Fee Estimator</a>
            <a href="#testimonials" className="hover:text-teal-900 transition-colors">Reviews</a>
          </nav>

          <a 
            href="#admission-form" 
            className="bg-[#A8E6CF] text-teal-900 font-extrabold px-6 py-3 rounded-2xl shadow-[4px_4px_8px_#c8dcd2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] hover:bg-[#97d8be] transition-all text-sm"
          >
            Enroll Now
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#ECF5F0] shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] text-teal-700 font-extrabold px-4 py-2.5 rounded-2xl text-xs">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Interactive Illume Pedagogy Admissions Open 2026</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-teal-950 leading-tight">
            Encouraging Self-Discovery <br className="hidden sm:inline" />
            and <span className="text-emerald-700">Holistic Play</span>
          </h1>

          <p className="text-lg text-teal-800/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
            Kidzee Tolichowki offers a clean, fresh neumorphic environment where we respect your child's learning speed. Our proprietary curriculum ensures motor, social, and emotional growth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <a 
              href="#admission-form" 
              className="w-full sm:w-auto text-center bg-[#A8E6CF] text-teal-900 font-extrabold px-8 py-4.5 rounded-2xl shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] hover:shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] hover:bg-[#97d8be] transition-all text-lg"
            >
              Start Admission
            </a>
            <a 
              href="#programs" 
              className="w-full sm:w-auto text-center bg-[#ECF5F0] text-teal-800 font-bold px-8 py-4.5 rounded-2xl shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] hover:shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] transition-all text-lg flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 text-teal-600" />
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-square rounded-[2.5rem] bg-[#ECF5F0] p-6 shadow-[10px_10px_20px_#c8dcd2,-10px_-10px_20px_#ffffff] border border-white/20">
            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-[inset_4px_4px_8px_#c8dcd2,inset_-4px_-4px_8px_#ffffff] relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                alt="Toddlers in interactive classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/20 to-transparent" />
            </div>
            {/* Neumorphic floating badge */}
            <div className="absolute -top-6 -left-6 bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-2xl p-4 flex items-center gap-3 max-w-[190px]">
              <div className="w-10 h-10 rounded-xl bg-[#ECF5F0] shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-teal-600 shrink-0">
                <Heart className="w-6 h-6 fill-current text-rose-400" />
              </div>
              <p className="text-xs font-bold text-teal-950 leading-tight">Child-Safe Play Equipment</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-2xl p-4 flex items-center gap-3 max-w-[190px]">
              <div className="w-10 h-10 rounded-xl bg-[#ECF5F0] shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-teal-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-teal-950 leading-tight">Illume Curriculum</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="relative px-6 py-14 bg-[#ECF5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '8+', label: 'Years Est. in Tolichowki', color: 'text-teal-800' },
            { metric: '950+', label: 'Enrolled Children', color: 'text-teal-800' },
            { metric: '30+', label: 'Weekly Activities', color: 'text-teal-800' },
            { metric: '99%', label: 'Parent Satisfaction', color: 'text-teal-800' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-3xl transition-transform hover:-translate-y-1 duration-300">
              <span className={`text-3xl sm:text-4xl font-extrabold block ${stat.color} mb-1.5`}>{stat.metric}</span>
              <span className="text-xs sm:text-sm font-bold text-teal-700/80 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About / Philosophy */}
      <section id="about" className="px-6 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest block">Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Where Every Child is Celebrated</h2>
          <p className="text-lg text-teal-800/80 font-semibold leading-relaxed">
            Kidzee’s Illume Pedagogy is a system designed around multiple intelligences, promoting interactive play and natural curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-rose-400" />,
              title: "Our Philosophy",
              desc: "Every child has a unique learning style. We nurture multiple intelligences through customized play setups and warm teacher guidance."
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-teal-600" />,
              title: "Illume Pedagogy",
              desc: "Our exclusive curriculum integrates sensory modules, phonics games, values training, and physical development activities."
            },
            {
              icon: <Users className="w-8 h-8 text-emerald-600" />,
              title: "Tolichowki Advantage",
              desc: "Equipped with round-the-clock CCTV, custom neumorphic activity areas, dynamic parent boards, and regular pediatric health audits."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-[2.2rem] p-8 flex flex-col justify-between hover:shadow-[inset_4px_4px_8px_#c8dcd2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#ECF5F0] shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center border border-white/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-teal-950">{item.title}</h3>
                <p className="text-teal-800/80 font-semibold leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Curriculum & Programs */}
      <section id="programs" className="px-6 py-24 bg-[#ECF5F0]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest block">Interactive Modules</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Curriculum & Age Programs</h2>
            <p className="text-lg text-teal-800/80 font-semibold leading-relaxed">
              Find the perfect early childhood track to help your child develop active speaking and logical habits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Playgroup Track", age: "1.5 – 2.5 Years", desc: "Focuses on sensory exploration, coordination, nursery music, self-feeding habits, and colorful block play sessions.", icon: <Sparkles className="w-5 h-5 text-emerald-500" /> },
              { title: "Nursery Track", age: "2.5 – 3.5 Years", desc: "Builds phonetic interest, basic number sequencing, paper folding, environmental habits, and toilet training transition.", icon: <GraduationCap className="w-5 h-5 text-teal-600" /> },
              { title: "LKG Track", age: "3.5 – 4.5 Years", desc: "Introduces sentence tracking, basic arithmetic concepts, kids yoga, drawing classes, and simple conversational dialogue patterns.", icon: <BookOpen className="w-5 h-5 text-indigo-500" /> },
              { title: "UKG Track", age: "4.5 – 5.5 Years", desc: "Focuses on reading books, vocabulary writing, basic science experiments, logic puzzles, and preparing for school admissions.", icon: <Users className="w-5 h-5 text-rose-400" /> },
              { title: "Nurturing Daycare", age: "2 – 6 Years", desc: "Supervised daycare featuring cozy bedding, hot clean foods, coloring workspaces, and safety locks for full child security.", icon: <Heart className="w-5 h-5 text-[#4A856D]" /> },
              { title: "After-school Club", age: "3 – 8 Years", desc: "Enrichment activities including clay art, keyboards, physical education, speaking circles, and puzzle solving.", icon: <Award className="w-5 h-5 text-amber-500" /> }
            ].map((program, idx) => (
              <div key={idx} className="bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-[2.2rem] p-8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="font-extrabold text-xs text-teal-800 bg-[#A8E6CF] px-3.5 py-1.5 rounded-xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]">
                      {program.age}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#ECF5F0] shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-teal-950">{program.title}</h3>
                  <p className="text-teal-800/80 font-semibold leading-relaxed text-sm">{program.desc}</p>
                </div>
                <div className="pt-6 border-t border-teal-200/20 flex items-center justify-between mt-6">
                  <span className="text-xs font-bold text-teal-600">Mon – Fri</span>
                  <a href="#fees" className="text-sm font-bold text-teal-800 flex items-center gap-1 hover:underline">
                    Fee Details
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities Gallery */}
      <section id="facilities" className="px-6 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest block">Campus Amenities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Nurturing Campus Infrastructure</h2>
          <p className="text-lg text-teal-800/80 font-semibold leading-relaxed">Modern facilities crafted under strict sanitization and safety guidelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", label: "Smart Learning Classrooms", desc: "Equipped with large monitors, modular safety chairs, and complete air ventilation." },
            { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop", label: "Interactive Toys Library", desc: "A vibrant room filled with child-proof wooden blocks, phonetic board games, and storybooks." },
            { img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=800&auto=format&fit=crop", label: "Soft Rubber Play Hub", desc: "Designed with fully padded flooring, slide units, and padded walls to prevent bumps." },
            { img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop", label: "Sensory Activity Room", desc: "Interactive coloring boards, sand blocks, and finger paint centers for motor skills development." },
            { img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop", label: "Children Dining Lounge", desc: "Hygiene-monitored dining area where kids eat fresh snacks and practice handwashing habits." },
            { img: "https://images.unsplash.com/photo-1564424224827-cd24b8915874?q=80&w=800&auto=format&fit=crop", label: "Sleeping & Resting Zones", desc: "Equipped with individual baby beds, cozy blankets, and supervised baby monitoring screens." }
          ].map((item, idx) => (
            <div key={idx} className="group bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-[2.2rem] p-5 hover:shadow-[inset_4px_4px_8px_#c8dcd2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] relative">
                <img 
                  src={item.img} 
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-teal-950/65 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center text-white">
                  <div>
                    <h4 className="font-extrabold text-lg mb-1">{item.label}</h4>
                    <p className="text-xs leading-relaxed text-teal-100/90">{item.desc}</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 font-extrabold text-lg text-teal-950 group-hover:text-teal-700 transition-colors pl-1">{item.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Fee Estimator */}
      <section id="fees" className="px-6 py-24 bg-[#ECF5F0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest block">Fee Estimator</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Neumorphic Fee Estimator</h2>
            <p className="text-lg text-teal-800/80 font-semibold leading-relaxed">
              Estimate your monthly and annual tuition rates transparently based on add-ons and selected programs.
            </p>
            <div className="bg-[#ECF5F0] shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] p-6 rounded-3xl flex gap-4 items-start border border-white/10">
              <Info className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <div className="text-sm font-semibold text-teal-800 space-y-1">
                <p className="font-extrabold text-teal-950">Registration Incentive</p>
                <p className="text-xs text-teal-700/80">Submit an online query today and save ₹2,000 on the initial school welcome uniform kit.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#ECF5F0] shadow-[10px_10px_20px_#c8dcd2,-10px_-10px_20px_#ffffff] rounded-[2.5rem] p-8 border border-white/20 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Program Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-extrabold text-teal-900">Choose Grade Program</label>
                <div className="relative">
                  <select 
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-bold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#A8E6CF] transition-all appearance-none cursor-pointer"
                  >
                    <option value="Playgroup">Playgroup (1.5 - 2.5y)</option>
                    <option value="Nursery">Nursery (2.5 - 3.5y)</option>
                    <option value="LKG">LKG (3.5 - 4.5y)</option>
                    <option value="UKG">UKG (4.5 - 5.5y)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-teal-700 w-0 h-0" />
                </div>
              </div>

              {/* Addons List */}
              <div className="space-y-3">
                <label className="block text-sm font-extrabold text-teal-900">Add-on Amenities</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={includeDaycare}
                      onChange={(e) => setIncludeDaycare(e.target.checked)}
                      className="w-5 h-5 rounded border-teal-300 text-teal-600 focus:ring-teal-500 bg-[#ECF5F0]"
                    />
                    <span className="text-sm font-bold text-teal-800 group-hover:text-teal-950">Supervised Daycare (+₹2,200/mo)</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={includeMeals}
                      onChange={(e) => setIncludeMeals(e.target.checked)}
                      className="w-5 h-5 rounded border-teal-300 text-teal-600 focus:ring-teal-500 bg-[#ECF5F0]"
                    />
                    <span className="text-sm font-bold text-teal-800 group-hover:text-teal-950">Nutritious Snack & Meals (+₹1,600/mo)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={includeTransport}
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-5 h-5 rounded border-teal-300 text-teal-600 focus:ring-teal-500 bg-[#ECF5F0]"
                    />
                    <span className="text-sm font-bold text-teal-800 group-hover:text-teal-950">Safe Cabin Transport (+₹1,400/mo)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Fee Breakdown Table */}
            <div className="border-t border-teal-200/30 pt-6 space-y-4">
              <h3 className="font-extrabold text-base text-teal-950">Estimated Fee Structure</h3>
              
              <div className="space-y-3 text-sm font-semibold text-teal-800">
                <div className="flex justify-between">
                  <span>Registration & Admission Fee (One-time)</span>
                  <span className="text-teal-950 font-extrabold">₹{fees.admissionFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Monthly Tuition</span>
                  <span className="text-teal-950 font-extrabold">₹{fees.tuitionMonthly.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Activity Term Fee (Bi-Annual)</span>
                  <span className="text-teal-950 font-extrabold">₹{fees.termFee.toLocaleString()} / term</span>
                </div>
                <div className="flex justify-between">
                  <span>Books, Worksheets & Welcome Kit</span>
                  <span className="text-teal-950 font-extrabold">₹{fees.booksFee.toLocaleString()}</span>
                </div>
                {fees.addonsMonthly > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Add-ons Cost Monthly</span>
                    <span className="font-extrabold">+₹{fees.addonsMonthly.toLocaleString()} / mo</span>
                  </div>
                )}
              </div>

              <div className="bg-[#ECF5F0] shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                <div>
                  <span className="text-xs font-bold text-teal-700/80 uppercase tracking-widest">Total Estimated First Year Cost</span>
                  <p className="text-3xl font-extrabold text-teal-900">₹{fees.totalAnnual.toLocaleString()}</p>
                </div>
                <a 
                  href="#admission-form"
                  className="bg-[#A8E6CF] text-teal-900 font-extrabold px-6 py-3.5 rounded-xl shadow-[4px_4px_8px_#c8dcd2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] hover:bg-[#97d8be] transition-all text-sm w-full sm:w-auto text-center"
                >
                  Apply For Fee Waiver
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials */}
      <section id="testimonials" className="px-6 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest block">Parental Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Trust of Tolichowki Families</h2>
          <p className="text-lg text-teal-800/80 font-semibold leading-relaxed">Hear from parents on how Kidzee Tolichowki shapes children's confidence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Mrs. Farah Naz", location: "Tolichowki Main Road", review: "The Plus Jakarta font and neat layout of their portals reflect their attention to detail. My twins joined LKG and Nursery. They love the wooden Montessori activities and outdoor sandbox. Extremely clean campus!", rating: 5 },
            { name: "Mr. Abdul Lateef", location: "Salala Colony, Tolichowki", review: "Great transportation service and security checks. The GPS tracking for the cab is wonderful, and the caretaker is very polite. The age calculator validated my son for Nursery correctly, saving us confusion.", rating: 5 },
            { name: "Mrs. Shaik Tabassum", location: "MD Lines, Tolichowki", review: "I am amazed by the Illume teaching approach. My daughter learned basic phonic sounds and spelling rules before she entered UKG. The staff is polite, cooperative, and takes security very seriously.", rating: 5 }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-[2.2rem] p-8 flex flex-col justify-between hover:shadow-[inset_4px_4px_8px_#c8dcd2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
              <div className="space-y-6">
                <div className="flex gap-1.5 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-teal-900 italic font-semibold leading-relaxed text-sm sm:text-base">"{item.review}"</p>
              </div>
              <div className="pt-6 border-t border-teal-200/20 flex items-center gap-3.5 mt-8">
                <div className="w-12 h-12 rounded-2xl bg-[#ECF5F0] shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] text-teal-800 font-extrabold flex items-center justify-center text-lg">
                  {item.name[0] + item.name.split(' ')[1]?.[0] || ''}
                </div>
                <div>
                  <span className="font-extrabold text-teal-950 block text-base leading-none">{item.name}</span>
                  <span className="text-xs font-bold text-teal-600/70 mt-1 block">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Admission Enquiry Form */}
      <section id="admission-form" className="px-6 py-24 bg-[#ECF5F0]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#ECF5F0] shadow-[10px_10px_20px_#c8dcd2,-10px_-10px_20px_#ffffff] rounded-[2.5rem] p-8 sm:p-12 border border-white/20">
            {isSubmitted ? (
              // Success Card
              <div className="text-center py-12 px-6 space-y-6">
                <div className="w-20 h-20 bg-[#ECF5F0] shadow-[inset_4px_4px_8px_#c8dcd2,inset_-4px_-4px_8px_#ffffff] rounded-full flex items-center justify-center text-emerald-600 mx-auto border border-white/10">
                  <Check className="w-12 h-12" />
                </div>
                
                <h3 className="text-3xl font-extrabold text-teal-950">Application Logged!</h3>
                <p className="text-lg text-teal-800 font-semibold max-w-xl mx-auto">
                  Thank you, <span className="text-emerald-700 font-extrabold">{formData.parentName}</span>. Your enquiry for <span className="font-extrabold text-teal-950">{formData.childName}</span> has been securely saved.
                </p>

                <div className="bg-[#ECF5F0] shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-semibold text-sm text-teal-800 border border-white/10">
                  <h4 className="font-extrabold text-teal-950 border-b border-teal-200/20 pb-2">Verification Receipt:</h4>
                  <div className="flex justify-between">
                    <span>Student Name:</span>
                    <span className="text-teal-950 font-extrabold">{formData.childName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Child Age:</span>
                    <span className="text-teal-950 font-extrabold">{calculatedAge?.years} Years, {calculatedAge?.months} Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chosen Track:</span>
                    <span className="text-teal-950 font-extrabold">{formData.program}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Primary Contact:</span>
                    <span className="text-teal-950 font-extrabold">{formData.parentPhone}</span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-teal-600">
                  A verification confirmation code has been queued for <span className="text-teal-800 font-bold">{formData.parentEmail}</span>.
                </p>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: '',
                        childName: '',
                        parentEmail: '',
                        parentPhone: '',
                        childDob: '',
                        program: 'Nursery',
                        targetDate: '',
                        message: ''
                      });
                      setCalculatedAge(null);
                    }}
                    className="bg-teal-900 text-[#ECF5F0] font-bold px-8 py-3.5 rounded-2xl shadow-[4px_4px_8px_#c8dcd2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] transition-all text-sm"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              // The Admission Form
              <div className="space-y-10">
                <div className="text-center space-y-4">
                  <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest block">Registration Form</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Admission Inquiry</h2>
                  <p className="text-base text-teal-700/80 font-semibold max-w-lg mx-auto">
                    Fill out the online application below. The form will calculate the student age and validate details.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Parent Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-teal-900">Parent Name <span className="text-rose-500">*</span></label>
                      <input 
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Farah Naz"
                        className={`w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 ${formErrors.parentName ? 'focus:ring-rose-400' : 'focus:ring-[#A8E6CF]'} transition-all`}
                      />
                      {formErrors.parentName && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.parentName}</p>}
                    </div>

                    {/* Child Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-teal-900">Child Name <span className="text-rose-500">*</span></label>
                      <input 
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ayan Lateef"
                        className={`w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 ${formErrors.childName ? 'focus:ring-rose-400' : 'focus:ring-[#A8E6CF]'} transition-all`}
                      />
                      {formErrors.childName && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.childName}</p>}
                    </div>

                    {/* Parent Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-teal-900">Email Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. farah.naz@mail.com"
                        className={`w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 ${formErrors.parentEmail ? 'focus:ring-rose-400' : 'focus:ring-[#A8E6CF]'} transition-all`}
                      />
                      {formErrors.parentEmail && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.parentEmail}</p>}
                    </div>

                    {/* Parent Phone */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-teal-900">Contact Number <span className="text-rose-500">*</span></label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 font-bold text-sm">+91</span>
                        <input 
                          type="tel"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          maxLength={10}
                          className={`w-full bg-[#ECF5F0] border-0 rounded-2xl pl-12 pr-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 ${formErrors.parentPhone ? 'focus:ring-rose-400' : 'focus:ring-[#A8E6CF]'} transition-all`}
                        />
                      </div>
                      {formErrors.parentPhone && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.parentPhone}</p>}
                    </div>

                    {/* Child DOB */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-teal-900">Student DOB <span className="text-rose-500">*</span></label>
                      <input 
                        type="date"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        className={`w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 ${formErrors.childDob ? 'focus:ring-rose-400' : 'focus:ring-[#A8E6CF]'} transition-all`}
                      />
                      {calculatedAge && (
                        <p className="text-xs font-bold text-teal-700/80 mt-1">
                          Calculated Age: <span className="text-teal-950 font-extrabold">{calculatedAge.years} Years, {calculatedAge.months} Months</span>
                        </p>
                      )}
                      {formErrors.childDob && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.childDob}</p>}
                    </div>

                    {/* Program Selected */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-teal-900">Select Track <span className="text-rose-500">*</span></label>
                      <select 
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#A8E6CF] transition-all cursor-pointer"
                      >
                        <option value="Playgroup">Playgroup (1.5 - 2.5y)</option>
                        <option value="Nursery">Nursery (2.5 - 3.5y)</option>
                        <option value="LKG">LKG (3.5 - 4.5y)</option>
                        <option value="UKG">UKG (4.5 - 5.5y)</option>
                      </select>
                    </div>

                    {/* Target Join Date */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="block text-sm font-extrabold text-teal-900">Start Enrollment Date <span className="text-rose-500">*</span></label>
                      <input 
                        type="date"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleInputChange}
                        className={`w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 ${formErrors.targetDate ? 'focus:ring-rose-400' : 'focus:ring-[#A8E6CF]'} transition-all`}
                      />
                      {formErrors.targetDate && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.targetDate}</p>}
                    </div>

                    {/* Messages */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="block text-sm font-extrabold text-teal-900">Parental Questions / Comments</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Detail any physical conditions, food allergies, or daycare requirements..."
                        rows={3}
                        className="w-full bg-[#ECF5F0] border-0 rounded-2xl px-4 py-3.5 font-semibold text-teal-900 shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#A8E6CF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-[#A8E6CF] text-teal-900 font-extrabold py-4 rounded-2xl shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] hover:shadow-[inset_3px_3px_6px_#c8dcd2,inset_-3px_-3px_6px_#ffffff] hover:bg-[#97d8be] transition-all text-lg"
                    >
                      Submit Secure Enquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Contact & Location Footer */}
      <footer className="bg-[#ECF5F0] text-teal-950 pt-20 pb-8 border-t border-teal-200/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#ECF5F0] shadow-[inset_2px_2px_4px_#c8dcd2,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-teal-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-wide text-teal-900">KIDZEE</span>
            </div>
            <p className="font-semibold text-teal-800/80 max-w-sm">
              Providing holistic pre-primary pathways in Tolichowki backed by clean environments and certified instructors.
            </p>
            <div className="space-y-3 font-bold text-sm text-teal-900">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span>Paramount Hills Road, Adjacent to MD Lines, Tolichowki, Hyderabad, 500008</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-700" />
                <span>+91 91234 56789 / 040 2300 1122</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-700" />
                <span>support@kidzeetolichowki.com</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-teal-900 font-extrabold text-lg">Daily Schedule</h3>
            <div className="space-y-4 font-bold text-sm text-teal-800/80">
              <div className="flex justify-between items-center pb-2 border-b border-teal-200/20">
                <span>Playgroup & Nursery</span>
                <span className="text-teal-950 font-black">09:00 AM – 12:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-teal-200/20">
                <span>LKG & UKG Class</span>
                <span className="text-teal-950 font-black">09:00 AM – 01:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-teal-200/20">
                <span>Supervised Daycare</span>
                <span className="text-teal-950 font-black">09:00 AM – 06:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Admissions Office</span>
                <span className="text-teal-950 font-black">09:30 AM – 03:00 PM</span>
              </div>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-teal-900 font-extrabold text-lg">Find Our Campus</h3>
            <div className="w-full h-48 bg-[#ECF5F0] shadow-[6px_6px_12px_#c8dcd2,-6px_-6px_12px_#ffffff] rounded-3xl overflow-hidden border border-white/20 relative flex flex-col items-center justify-center p-6 text-center text-xs gap-3">
              <MapPin className="w-9 h-9 text-teal-700 animate-bounce" />
              <div>
                <p className="font-bold text-teal-950 text-sm">Kidzee Tolichowki Branch</p>
                <p className="text-teal-700/80 mt-1">MD Lines Colony, Tolichowki, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-teal-200/20 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-teal-600 gap-4">
          <p>© {new Date().getFullYear()} Kidzee Tolichowki Preschool. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-900 transition-colors">Child Safety Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

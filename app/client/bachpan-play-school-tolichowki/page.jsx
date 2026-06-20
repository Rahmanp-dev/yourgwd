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

export default function BachpanPlaySchoolPage() {
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
    'Playgroup': { tuition: 4500, term: 12000, books: 5000 },
    'Nursery': { tuition: 5000, term: 13000, books: 5500 },
    'LKG': { tuition: 5500, term: 14000, books: 6000 },
    'UKG': { tuition: 6000, term: 14500, books: 6000 },
    'Daycare': { tuition: 3000, term: 8000, books: 2000 }
  };

  const getFees = () => {
    const selected = baseFees[selectedProgram] || baseFees['Nursery'];
    const admissionFee = 10000; // One-time admission fee
    let monthlyAddons = 0;
    
    if (includeDaycare) monthlyAddons += 2500;
    if (includeMeals) monthlyAddons += 1800;
    if (includeTransport) monthlyAddons += 1500;

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
    <main className="min-h-screen text-[#2D3748] bg-gradient-to-tr from-[#FFF5F5] via-[#FFFDFD] to-[#FFFBF2] relative overflow-x-hidden">
      {/* Background Frosted Glass Blobs */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-[-150px] w-[450px] h-[450px] bg-amber-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-[-100px] w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/50 shadow-md rounded-2xl px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F76E6E] flex items-center justify-center text-white shadow-lg shadow-rose-300/40">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#F76E6E]">BACHPAN</span>
              <span className="text-xs block font-bold text-gray-500 uppercase tracking-widest leading-none">Tolichowki</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-gray-600">
            <a href="#about" className="hover:text-[#F76E6E] transition-colors">Philosophy</a>
            <a href="#programs" className="hover:text-[#F76E6E] transition-colors">Programs</a>
            <a href="#facilities" className="hover:text-[#F76E6E] transition-colors">Facilities</a>
            <a href="#fees" className="hover:text-[#F76E6E] transition-colors">Fee Calculator</a>
            <a href="#testimonials" className="hover:text-[#F76E6E] transition-colors">Reviews</a>
          </nav>

          <a 
            href="#admission-form" 
            className="bg-[#F76E6E] text-white font-extrabold px-6 py-2.5 rounded-full hover:bg-[#e05656] shadow-lg shadow-rose-200 hover:scale-105 transition-all text-sm"
          >
            Enroll Now
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-[#F76E6E] font-extrabold px-4 py-2 rounded-full text-xs shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Admissions Open for Academic Year 2026 - 2027</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            Where Curious Little Minds <br className="hidden sm:inline" />
            Begin a <span className="text-[#F76E6E] relative inline-block">
              Bright Journey
              <span className="absolute bottom-1 left-0 w-full h-3 bg-rose-100 -z-10 rounded" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
            Bachpan Tolichowki offers a safe, vibrant, and glassmorphic wonderland where play meets guided learning. We foster independence, critical thinking, and social emotional intelligence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#admission-form" 
              className="w-full sm:w-auto text-center bg-[#F76E6E] text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl shadow-rose-200 hover:bg-[#e05656] hover:-translate-y-1 transition-all"
            >
              Start Admission Process
            </a>
            <a 
              href="#programs" 
              className="w-full sm:w-auto text-center bg-white/70 backdrop-blur-sm text-gray-700 font-bold px-8 py-4 rounded-full text-lg border border-gray-200 shadow-md hover:bg-white transition-all flex items-center justify-center gap-2 group"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-square rounded-[3rem] bg-white/60 p-6 shadow-2xl border border-white/80 backdrop-blur-md">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner relative">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" 
                alt="Happy preschoolers learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Playful Floating Glass Badges */}
            <div className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-bounce max-w-[180px]">
              <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center text-white shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <p className="text-xs font-black text-gray-800 leading-tight">100% Safe Environment</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl p-4 flex items-center gap-3 max-w-[190px]">
              <div className="w-10 h-10 rounded-lg bg-emerald-400 flex items-center justify-center text-white shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-xs font-black text-gray-800 leading-tight">ISO Certified Pedagogy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="relative px-6 py-12 bg-white/40 backdrop-blur-md border-y border-white/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '10+', label: 'Years of Excellence', color: 'text-rose-500' },
            { metric: '1,200+', label: 'Happy Graduates', color: 'text-amber-500' },
            { metric: '25+', label: 'Smart Class Activities', color: 'text-emerald-500' },
            { metric: '98.6%', label: 'Parent Satisfaction', color: 'text-indigo-500' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300">
              <span className={`text-3xl sm:text-4xl font-extrabold block ${stat.color} mb-1`}>{stat.metric}</span>
              <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About / Philosophy */}
      <section id="about" className="px-6 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold text-[#F76E6E] uppercase tracking-widest block">Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800">Nurturing Hearts & Developing Minds</h2>
          <p className="text-lg text-gray-600 font-semibold">
            We believe that every child is unique and deserves an environment that celebrates their individuality while encouraging holistic developmental growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-rose-500" />,
              title: "Our Mission",
              desc: "To provide an exceptional early foundation that empowers kids in Tolichowki with emotional security, values, and interactive learning tools."
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-[#F76E6E]" />,
              title: "Teaching Approach",
              desc: "A perfect blend of Montessori systems and play-way methods. We focus on cognitive growth, fine motor skills, language mastery, and social habits."
            },
            {
              icon: <Users className="w-8 h-8 text-emerald-500" />,
              title: "Why Tolichowki?",
              desc: "Centrally located with state-of-the-art facilities, double secured locks, air-conditioned smart zones, and highly experienced local educators."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center border border-white/80">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-800">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Curriculum & Programs */}
      <section id="programs" className="px-6 py-24 bg-white/30 backdrop-blur-sm border-y border-white/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold text-[#F76E6E] uppercase tracking-widest block">Age-Appropriate Learning</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800">Our Tailored Preschool Programs</h2>
            <p className="text-lg text-gray-600 font-semibold">Structured programs designed for physical, cognitive, and sensory-motor development.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Playgroup", age: "1.5 – 2.5 Years", desc: "Focuses on sensory integration, visual coordination, socialization, and initial speech development through fun play sessions.", bg: "border-rose-200/50 hover:bg-rose-50/20" },
              { title: "Nursery", age: "2.5 – 3.5 Years", desc: "Introduces structured activities, basic alphabets, numbers, tracing, nursery rhymes, and independence habits like toilet training support.", bg: "border-amber-200/50 hover:bg-amber-50/20" },
              { title: "LKG", age: "3.5 – 4.5 Years", desc: "Builds foundations in phonics, mathematics, environmental studies, art, pre-writing, and interactive conversational English.", bg: "border-emerald-200/50 hover:bg-emerald-50/20" },
              { title: "UKG", age: "4.5 – 5.5 Years", desc: "Prepares children for transition to formal primary schooling. Focuses on advanced phonics, sentence construction, and logical math.", bg: "border-indigo-200/50 hover:bg-indigo-50/20" },
              { title: "Daycare Plus", age: "2 – 6 Years", desc: "A cozy and warm after-school lounge with healthy meals, clean nap spaces, supervised outdoor games, and creative crafting times.", bg: "border-pink-200/50 hover:bg-pink-50/20" },
              { title: "After-School Clubs", age: "3 – 8 Years", desc: "Enrichment activities including kids yoga, keyboard training, drawing & clay arts, basic coding logic, and public speaking clubs.", bg: "border-teal-200/50 hover:bg-teal-50/20" }
            ].map((program, idx) => (
              <div key={idx} className={`bg-white/70 backdrop-blur-md border ${program.bg} rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between`}>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="font-extrabold text-sm text-[#F76E6E] bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full">
                      {program.age}
                    </span>
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">{program.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{program.desc}</p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-6">
                  <span className="text-xs font-bold text-gray-400">Monday – Friday</span>
                  <a href="#fees" className="text-sm font-bold text-[#F76E6E] flex items-center gap-1 hover:underline">
                    View Fee Breakdown
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
          <span className="text-xs font-extrabold text-[#F76E6E] uppercase tracking-widest block">Safe Havens</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800">Our Premium Tolichowki Campus</h2>
          <p className="text-lg text-gray-600 font-semibold">Take a peek inside our child-centered environment, custom-built to maximize learning and physical safety.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1564424224827-cd24b8915874?q=80&w=800&auto=format&fit=crop", label: "Smart Interactive Classrooms", desc: "Fitted with large touch displays, playful ergonomically sized furniture, and air conditioning." },
            { img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop", label: "Montessori Activity Hub", desc: "Filled with colorful wooden puzzle boards, sensory blocks, and fine motor coordination toys." },
            { img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop", label: "Safe Cushioned Play Zone", desc: "Designed with fully padded flooring, slide tunnels, ball pits, and safety-inspected trampolines." },
            { img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop", label: "Creative Art & Craft Lab", desc: "A creative room where children paint, mold non-toxic clay, and showcase their imagination." },
            { img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=800&auto=format&fit=crop", label: "Nursery Library Lounge", desc: "Fitted with interactive storybooks, pop-up comic volumes, and cozy bean bags for reading time." },
            { img: "https://images.unsplash.com/photo-1576489922094-2cfe89fb1733?q=80&w=800&auto=format&fit=crop", label: "Supervised Dining Zone", desc: "A clean dining space where kids learn self-feeding and table manners under warm supervision." }
          ].map((item, idx) => (
            <div key={idx} className="group relative bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner relative">
                <img 
                  src={item.img} 
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center text-white">
                  <div>
                    <h4 className="font-extrabold text-lg mb-1">{item.label}</h4>
                    <p className="text-xs leading-relaxed text-gray-200">{item.desc}</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 font-extrabold text-lg text-gray-800 group-hover:text-[#F76E6E] transition-colors pl-2">{item.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Fee Estimator */}
      <section id="fees" className="px-6 py-24 bg-white/40 backdrop-blur-md border-y border-white/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-[#F76E6E] uppercase tracking-widest block">Interactive Estimator</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800">Customize & Estimate Tuition Fees</h2>
            <p className="text-lg text-gray-600 font-semibold leading-relaxed">
              We maintain absolute fee transparency. Customize your child's program and check the instant cost breakdown below.
            </p>
            <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl flex gap-4 items-start">
              <Info className="w-6 h-6 text-[#F76E6E] shrink-0 mt-0.5" />
              <div className="text-sm font-semibold text-gray-700 space-y-1">
                <p className="font-extrabold text-gray-800">Admission Campaign Discount</p>
                <p className="text-xs text-gray-500">Submit an enquiry today and get 100% waiver on the primary registration kit (worth ₹2,500).</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-white rounded-[2.5rem] p-8 shadow-2xl space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Program Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-extrabold text-gray-700">Select Grade Program</label>
                <div className="relative">
                  <select 
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full bg-white/90 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F76E6E] transition-all appearance-none cursor-pointer"
                  >
                    <option value="Playgroup">Playgroup (Age: 1.5 - 2.5y)</option>
                    <option value="Nursery">Nursery (Age: 2.5 - 3.5y)</option>
                    <option value="LKG">LKG (Age: 3.5 - 4.5y)</option>
                    <option value="UKG">UKG (Age: 4.5 - 5.5y)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500 w-0 h-0" />
                </div>
              </div>

              {/* Addons List */}
              <div className="space-y-3">
                <label className="block text-sm font-extrabold text-gray-700">Add-on Services</label>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={includeDaycare}
                      onChange={(e) => setIncludeDaycare(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#F76E6E] focus:ring-[#F76E6E]"
                    />
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-800">Extended Daycare (+₹2,500/mo)</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={includeMeals}
                      onChange={(e) => setIncludeMeals(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#F76E6E] focus:ring-[#F76E6E]"
                    />
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-800">Hot Nutritional Meals (+₹1,800/mo)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={includeTransport}
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#F76E6E] focus:ring-[#F76E6E]"
                    />
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-800">Safe Cab Transport (+₹1,500/mo)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Fee Breakdown Table */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-extrabold text-base text-gray-800">Estimated Cost Summary</h3>
              
              <div className="space-y-2.5 text-sm font-semibold text-gray-600">
                <div className="flex justify-between">
                  <span>Admission Registration Fee (One-time)</span>
                  <span className="text-gray-800 font-extrabold">₹{fees.admissionFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Tuition ({selectedProgram})</span>
                  <span className="text-gray-800 font-extrabold">₹{fees.tuitionMonthly.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Term Activity & Event Fee (Bi-Annual)</span>
                  <span className="text-gray-800 font-extrabold">₹{fees.termFee.toLocaleString()} / term</span>
                </div>
                <div className="flex justify-between">
                  <span>Books, Worksheets & Uniform Kit (Annual)</span>
                  <span className="text-gray-800 font-extrabold">₹{fees.booksFee.toLocaleString()}</span>
                </div>
                {fees.addonsMonthly > 0 && (
                  <div className="flex justify-between text-rose-500">
                    <span>Selected Addons Monthly Cost</span>
                    <span className="font-extrabold">+₹{fees.addonsMonthly.toLocaleString()} / mo</span>
                  </div>
                )}
              </div>

              <div className="bg-[#FFF5F5] border border-rose-100 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Estimated Annual Package</span>
                  <p className="text-3xl font-black text-[#F76E6E]">₹{fees.totalAnnual.toLocaleString()}</p>
                </div>
                <a 
                  href="#admission-form"
                  className="bg-[#F76E6E] text-white font-extrabold px-6 py-3 rounded-full hover:bg-[#e05656] shadow-lg shadow-rose-200 transition-all text-sm w-full sm:w-auto text-center"
                >
                  Apply For Discount
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials */}
      <section id="testimonials" className="px-6 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold text-[#F76E6E] uppercase tracking-widest block">Words of Trust</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800">What Tolichowki Parents Say</h2>
          <p className="text-lg text-gray-600 font-semibold">Real reviews from parents who experienced our cheerful preschool curriculum.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Mrs. Sana Fatima", location: "Tolichowki, Hyderabad", review: "The cheerful glassmorphic infrastructure immediately caught my eyes, but it's the warm teaching staff that kept us in awe. My child joined Bachpan Nursery and has developed amazing speech and social confidence within months. Absolute peace of mind!", rating: 5 },
            { name: "Dr. Asif Jameel", location: "Nanal Nagar, Tolichowki", review: "I highly recommend the Daycare program. The clean nap areas, child-proof rooms, and nutritious meal plans make it ideal for working parents. The automatic age check during admission showed they follow structured guidelines.", rating: 5 },
            { name: "Mr. Imran Khan", location: "Al-Hamra Colony, Tolichowki", review: "My daughter finished UKG at Bachpan Tolichowki. The smart boards, fun reading sessions, and focus on basic math ensured she got into one of Hyderabad's top schools. We are highly satisfied with the experience.", rating: 5 }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex gap-1.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic font-semibold leading-relaxed">"{item.review}"</p>
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center gap-3.5 mt-8">
                <div className="w-12 h-12 rounded-full bg-[#F76E6E]/20 text-[#F76E6E] font-black flex items-center justify-center text-lg">
                  {item.name[0] + item.name.split(' ')[1]?.[0] || ''}
                </div>
                <div>
                  <span className="font-extrabold text-gray-800 block text-base leading-none">{item.name}</span>
                  <span className="text-xs font-bold text-gray-400">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Admission Enquiry Form */}
      <section id="admission-form" className="px-6 py-24 bg-gradient-to-tr from-[#FFF5F5]/30 to-[#FFFBF2]/50 border-t border-white/40">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md border border-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative">
            {isSubmitted ? (
              // Success Card
              <div className="text-center py-12 px-6 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-200">
                  <Check className="w-12 h-12" />
                </div>
                
                <h3 className="text-3xl font-black text-gray-800">Enquiry Submitted Successfully!</h3>
                <p className="text-lg text-gray-600 font-semibold max-w-xl mx-auto">
                  Thank you, <span className="text-[#F76E6E] font-extrabold">{formData.parentName}</span>. We have registered your interest for <span className="font-extrabold text-gray-800">{formData.childName}</span> for the {formData.program} program.
                </p>

                <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-semibold text-sm text-gray-700">
                  <h4 className="font-extrabold text-gray-800 border-b border-rose-100 pb-2">Application Details:</h4>
                  <div className="flex justify-between">
                    <span>Child Name:</span>
                    <span className="text-gray-900 font-extrabold">{formData.childName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calculated Age:</span>
                    <span className="text-gray-900 font-extrabold">{calculatedAge?.years} Years, {calculatedAge?.months} Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Program:</span>
                    <span className="text-gray-900 font-extrabold">{formData.program}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Number:</span>
                    <span className="text-gray-900 font-extrabold">{formData.parentPhone}</span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-gray-400">
                  Our admissions counselor will contact you at <span className="text-gray-600 font-bold">{formData.parentEmail}</span> within 24 hours.
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
                    className="bg-gray-800 text-white font-extrabold px-8 py-3 rounded-full hover:bg-gray-700 shadow-md transition-all text-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              // The Admission Form
              <div className="space-y-10">
                <div className="text-center space-y-4">
                  <span className="text-xs font-extrabold text-[#F76E6E] uppercase tracking-widest block">Begin Enrollment</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-800">Admission Enquiry Form</h2>
                  <p className="text-base text-gray-500 font-semibold max-w-lg mx-auto">
                    Fill out this form, and our counselor will guide you through the documents, visits, and placement rounds.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Parent Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-gray-700">Parent Name <span className="text-rose-500">*</span></label>
                      <input 
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sana Fatima"
                        className={`w-full bg-white border ${formErrors.parentName ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-[#F76E6E]'} rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.parentName && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.parentName}</p>}
                    </div>

                    {/* Child Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-gray-700">Child Name <span className="text-rose-500">*</span></label>
                      <input 
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Zayd Khan"
                        className={`w-full bg-white border ${formErrors.childName ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-[#F76E6E]'} rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.childName && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.childName}</p>}
                    </div>

                    {/* Parent Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-gray-700">Email Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. example@mail.com"
                        className={`w-full bg-white border ${formErrors.parentEmail ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-[#F76E6E]'} rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.parentEmail && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.parentEmail}</p>}
                    </div>

                    {/* Parent Phone */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-gray-700">Mobile Phone <span className="text-rose-500">*</span></label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">+91</span>
                        <input 
                          type="tel"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          maxLength={10}
                          className={`w-full bg-white border ${formErrors.parentPhone ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-[#F76E6E]'} rounded-xl pl-12 pr-4 py-3 font-semibold focus:outline-none focus:ring-2 transition-all`}
                        />
                      </div>
                      {formErrors.parentPhone && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.parentPhone}</p>}
                    </div>

                    {/* Child DOB */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-gray-700">Child's Date of Birth <span className="text-rose-500">*</span></label>
                      <input 
                        type="date"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        className={`w-full bg-white border ${formErrors.childDob ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-[#F76E6E]'} rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 transition-all`}
                      />
                      {calculatedAge && (
                        <p className="text-xs font-bold text-gray-500 mt-1">
                          Calculated Age: <span className="text-[#F76E6E]">{calculatedAge.years} Years, {calculatedAge.months} Months</span>
                        </p>
                      )}
                      {formErrors.childDob && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.childDob}</p>}
                    </div>

                    {/* Program Selected */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-gray-700">Desired Program <span className="text-rose-500">*</span></label>
                      <select 
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F76E6E] transition-all cursor-pointer"
                      >
                        <option value="Playgroup">Playgroup (1.5 - 2.5y)</option>
                        <option value="Nursery">Nursery (2.5 - 3.5y)</option>
                        <option value="LKG">LKG (3.5 - 4.5y)</option>
                        <option value="UKG">UKG (4.5 - 5.5y)</option>
                      </select>
                    </div>

                    {/* Target Join Date */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="block text-sm font-extrabold text-gray-700">Target Enrollment Date <span className="text-rose-500">*</span></label>
                      <input 
                        type="date"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleInputChange}
                        className={`w-full bg-white border ${formErrors.targetDate ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-[#F76E6E]'} rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.targetDate && <p className="text-rose-500 text-xs font-bold mt-1">{formErrors.targetDate}</p>}
                    </div>

                    {/* Messages */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="block text-sm font-extrabold text-gray-700">Questions or Parent Comments</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your child's personality, food habits, or general requirements..."
                        rows={3}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-[#F76E6E] transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-[#F76E6E] text-white font-extrabold py-4 rounded-full hover:bg-[#e05656] shadow-xl shadow-rose-200 transition-all text-lg"
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
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F76E6E] flex items-center justify-center text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">BACHPAN</span>
            </div>
            <p className="font-medium text-gray-400 max-w-sm">
              Empowering toddlers in Tolichowki with values-based education, active play areas, and ISO-tested curriculum designs.
            </p>
            <div className="space-y-3 font-semibold text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F76E6E] shrink-0 mt-0.5" />
                <span>Opposite Paramount Hills, near MD Lines, Tolichowki, Hyderabad, 500008</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F76E6E]" />
                <span>+91 98765 43210 / 040 2356 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F76E6E]" />
                <span>admissions@bachpantolichowki.edu.in</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-white font-extrabold text-lg">Hours of Operation</h3>
            <div className="space-y-4 font-semibold text-sm text-gray-400">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span>Playgroup / Nursery</span>
                <span className="text-white">09:00 AM – 12:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span>LKG / UKG</span>
                <span className="text-white">09:00 AM – 01:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span>Daycare Center</span>
                <span className="text-white">09:00 AM – 06:30 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday Office</span>
                <span className="text-white">10:00 AM – 02:00 PM</span>
              </div>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-extrabold text-lg">Find Our Campus</h3>
            <div className="w-full h-48 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 relative">
              {/* Fallback SVG Map Graphic */}
              <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center p-6 text-center text-xs gap-3">
                <MapPin className="w-10 h-10 text-[#F76E6E] animate-bounce" />
                <div>
                  <p className="font-bold text-white text-sm">Interactive Map Location</p>
                  <p className="text-gray-400 mt-1">Tolichowki Main Road, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Bachpan Play School Tolichowki. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Admission Rules</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Star, 
  Shield, 
  Award, 
  BookOpen, 
  Compass, 
  FileText, 
  Sparkles, 
  Check, 
  ChevronRight, 
  Calculator,
  Flame,
  Globe,
  Sun
} from 'lucide-react';

export default function FootprintsPage() {
  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('playgroup');
  const [daycareHours, setDaycareHours] = useState('none');
  const [includeMeals, setIncludeMeals] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    childName: '',
    childDob: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    program: 'playgroup',
    startDate: '',
    notes: ''
  });
  
  // Validation and Submission State
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedAge, setCalculatedAge] = useState('');

  // Fee Mapping (per term)
  const programFees = {
    playgroup: { name: 'Playgroup (Toddler)', tuition: 48000, adminFee: 6000 },
    nursery: { name: 'Nursery (Explorer)', tuition: 53000, adminFee: 7000 },
    lkg: { name: 'LKG (Kindergarten-I)', tuition: 58000, adminFee: 7500 },
    ukg: { name: 'UKG (Kindergarten-II)', tuition: 62000, adminFee: 7500 },
    daycare: { name: 'Full-Day Daycare only', tuition: 38000, adminFee: 4000 },
    afterschool: { name: 'After School Club', tuition: 18000, adminFee: 3000 }
  };

  // Daycare hourly add-ons
  const daycareRates = {
    none: 0,
    half: 8000,  // 4 hours daily
    full: 14000  // 8 hours daily
  };

  const currentProgram = programFees[selectedProgram] || programFees.playgroup;
  const baseTuition = currentProgram.tuition;
  const adminCharges = currentProgram.adminFee;
  
  const daycareAddonTerm = daycareRates[daycareHours] * 4;
  const transportCostTerm = includeTransport ? 4800 * 4 : 0;
  const mealsCostTerm = includeMeals ? 3800 * 4 : 0;
  
  const totalEstimatedTerm = baseTuition + adminCharges + daycareAddonTerm + transportCostTerm + mealsCostTerm;

  // Handle Age Calculation
  useEffect(() => {
    if (!formData.childDob) {
      setCalculatedAge('');
      return;
    }
    const dobDate = new Date(formData.childDob);
    const today = new Date();
    
    if (isNaN(dobDate.getTime())) {
      setCalculatedAge('');
      return;
    }

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < dobDate.getDate())) {
      years--;
      months += 12;
    }
    
    if (today.getDate() < dobDate.getDate()) {
      months--;
      if (months < 0) {
        months = 11;
        years--;
      }
    }

    if (years < 0) {
      setCalculatedAge('Invalid Date of Birth');
    } else {
      setCalculatedAge(`${years} Years, ${months} Months`);
    }
  }, [formData.childDob]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.childName.trim()) tempErrors.childName = 'Child name is required';
    if (!formData.childDob) tempErrors.childDob = 'Date of Birth is required';
    if (calculatedAge === 'Invalid Date of Birth') tempErrors.childDob = 'DOB cannot be in the future';
    
    if (!formData.parentName.trim()) tempErrors.parentName = 'Parent name is required';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.parentPhone.trim()) {
      tempErrors.parentPhone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.parentPhone)) {
      tempErrors.parentPhone = 'Enter a valid 10-digit Indian phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.parentEmail.trim()) {
      tempErrors.parentEmail = 'Email address is required';
    } else if (!emailRegex.test(formData.parentEmail)) {
      tempErrors.parentEmail = 'Enter a valid email address';
    }

    if (!formData.startDate) tempErrors.startDate = 'Start date is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="body-font text-[#3D405B] bg-[#FBF9F6]">
      
      {/* Top Banner */}
      <div className="bg-[#E07A5F] text-[#F4F1DE] py-2.5 px-4 text-center text-sm font-bold tracking-wide">
        🍁 100% Transparency Guarantee. CCTV Live Feed access for all parents at Footprints Tolichowki.
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#FBF9F6]/95 backdrop-blur-md border-b border-[#F2CC8F]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#E07A5F] flex items-center justify-center text-white shadow-md rotate-3">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="heading-font text-2xl font-bold tracking-tight text-[#3D405B]">
                Footprints
              </span>
              <span className="block text-[10px] font-extrabold text-[#E07A5F] tracking-widest uppercase">Tolichowki Play School</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-[#3D405B]/80">
            <a href="#philosophy" className="hover:text-[#E07A5F] transition-colors">Philosophy</a>
            <a href="#curriculum" className="hover:text-[#E07A5F] transition-colors">Programs</a>
            <a href="#tour" className="hover:text-[#E07A5F] transition-colors">Campus Tour</a>
            <a href="#pricing" className="hover:text-[#E07A5F] transition-colors">Fees</a>
            <a href="#reviews" className="hover:text-[#E07A5F] transition-colors">Testimonials</a>
          </nav>

          <a 
            href="#apply" 
            className="bg-[#E07A5F] text-[#F4F1DE] hover:bg-[#81B29A] transition-all font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md"
          >
            Inquire Now
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-terracotta-warmth pt-16 pb-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F2CC8F]/30 text-[#E07A5F] border border-[#F2CC8F] px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Scientifically-Designed Learning
            </div>
            
            <h1 className="heading-font text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[#3D405B] mb-6">
              A Nature-Inspired Nest for <br />
              <span className="text-[#E07A5F]">Your Little Explorers</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 font-medium mb-8 max-w-xl leading-relaxed">
              Footprints Tolichowki features an organic mud-play arena, wooden Montessori equipment, and zero plastic toys. Here, learning is tactile, structured, and warm.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#apply" 
                className="bg-[#E07A5F] text-[#F4F1DE] hover:bg-[#3D405B] transition-all font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                Schedule Tour <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#pricing" 
                className="bg-white text-[#3D405B] hover:bg-[#F4F1DE] font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider border border-slate-200 transition-all flex items-center gap-2"
              >
                Estimate Fee
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#E07A5F]/10 rounded-2xl -rotate-2 scale-[1.03] -z-10"></div>
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" 
                alt="Toddlers engaging in a sandbox classroom at Footprints" 
                className="w-full h-[320px] md:h-[380px] object-cover rounded-xl"
              />
              
              <div className="absolute -bottom-6 right-6 bg-[#81B29A] text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-teal-100 font-bold uppercase tracking-wider">Live CCTV Feed</p>
                  <p className="font-bold text-xs">Full Parent Transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footprint divider */}
      <div className="footprints-divider"></div>

      {/* 2. Stats Bar */}
      <section className="bg-white py-12 border-y border-[#F2CC8F]/20 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="text-center md:border-r border-slate-100 last:border-0">
            <div className="heading-font text-4xl font-bold text-[#E07A5F] mb-1">10+</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#3D405B]/60">Years Excellence</div>
          </div>

          <div className="text-center md:border-r border-slate-100 last:border-0">
            <div className="heading-font text-4xl font-bold text-[#81B29A] mb-1">280+</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#3D405B]/60">Kids Enrolled</div>
          </div>

          <div className="text-center md:border-r border-slate-100 last:border-0">
            <div className="heading-font text-4xl font-bold text-[#F2CC8F] text-[#D4A373] mb-1">5k+ Sq Ft</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#3D405B]/60">Nature Play Area</div>
          </div>

          <div className="text-center">
            <div className="heading-font text-4xl font-bold text-[#3D405B] mb-1">1:8</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#3D405B]/60">Caregiver Ratio</div>
          </div>

        </div>
      </section>

      {/* Footprint divider */}
      <div className="footprints-divider"></div>

      {/* 3. About / Philosophy */}
      <section id="philosophy" className="py-24 bg-[#FBF9F6] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#E07A5F] uppercase font-extrabold tracking-widest text-xs mb-2 block">Our Foundations</span>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#3D405B] mb-4">
              Rooted in Nature, Growing in Love
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              We cultivate a rich learning environment that integrates HighScope curriculum principles with cozy, organic, sand-and-wood learning laboratories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[#E07A5F]/10 text-[#E07A5F] flex items-center justify-center mb-6">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl font-bold text-[#3D405B] mb-3">Naturalist Intelligence</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Children grow micro-gardens, play with non-toxic mud, and learn seasonal patterns outdoors. This builds profound sensory-motor connectivity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[#81B29A]/10 text-[#81B29A] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl font-bold text-[#3D405B] mb-3">HighScope Framework</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                A scientific framework centered on "active participatory learning" where kids plan, execute, and review their daily developmental tasks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[#F2CC8F]/20 text-[#D4A373] flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl font-bold text-[#3D405B] mb-3">Global Health Norms</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Sourced toys are completely BPA-free, rooms are naturally ventilated, and our on-campus pediatric nurse tracks health indices weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curriculum & Programs */}
      <section id="curriculum" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#81B29A] uppercase font-extrabold tracking-widest text-xs mb-2 block">Nurturing Levels</span>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#3D405B] mb-4">
              Explore Our Core Programs
            </h2>
            <p className="text-base text-slate-600 font-medium">
              We offer curated developmental levels that scaffold early communication, numbers, physical coordination, and social-emotional confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Playgroup (Toddler)',
                age: '1.8 – 2.5 Years',
                desc: 'A gentle transition from home. Focused on tactile materials, sand play, coordination, and building emotional security.',
                features: ['Zero-plastic sandbox', 'Basic speech metrics', 'Group block building']
              },
              {
                title: 'Nursery (Explorer)',
                age: '2.5 – 3.5 Years',
                desc: 'Nurturing independence, language articulation, pre-math logic, and outdoor plant identification.',
                features: ['Micro-gardening habits', 'Phonetic sounds introduction', 'Sensory craft sessions']
              },
              {
                title: 'LKG (Kindergarten-I)',
                age: '3.5 – 4.5 Years',
                desc: 'Preparing young learners with foundational writing, reading readiness, environmental science, and structured play.',
                features: ['Tracing and pre-writing', 'Interactive story groups', 'Introduction to numbers']
              },
              {
                title: 'UKG (Kindergarten-II)',
                age: '4.5 – 5.5 Years',
                desc: 'Focuses on critical thinking, basic math operations, advanced phonics, public speaking, and primary school transitions.',
                features: ['Spelling & vocabulary', 'Basic addition concepts', 'Confidence graduation plans']
              },
              {
                title: 'Daycare Support',
                age: '1.0 – 8.0 Years',
                desc: 'Full-time support with custom nap schedules, organic meals, homework assistance, and safe social play.',
                features: ['CCTV parent live access', 'Pediatric first-aid helpers', 'Nutritious kitchen plans']
              },
              {
                title: 'After School Club',
                age: '3.0 – 12.0 Years',
                desc: 'Extracurricular avenues like basic robotics, classical clay pottery, environment science clubs, and martial arts.',
                features: ['Robotics foundation', 'Art & clay sculpting', 'Stretching & gymnastics']
              }
            ].map((prog, index) => (
              <div 
                key={index}
                className="border-2 border-slate-100 bg-[#FBF9F6]/30 p-8 rounded-2xl flex flex-col justify-between hover:border-[#F2CC8F] hover:bg-white transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="heading-font text-2xl font-bold text-[#3D405B]">{prog.title}</h3>
                  </div>
                  <span className="inline-block bg-[#F2CC8F]/30 text-[#8F6A28] text-xs font-bold px-3 py-1 rounded-md mb-6">
                    {prog.age}
                  </span>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {prog.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-[#81B29A] stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#apply" 
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#E07A5F] group-hover:text-[#3D405B] transition-colors"
                >
                  Apply For Intake <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities Gallery */}
      <section id="tour" className="py-24 bg-[#FBF9F6] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#E07A5F] uppercase font-extrabold tracking-widest text-xs mb-2 block">Visual Tour</span>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#3D405B] mb-4">
              Explore Our Naturalist Campus
            </h2>
            <p className="text-base text-slate-600 font-medium">
              We design physical spaces that minimize cognitive stress. Explore our terracotta-themed play zones in Tolichowki.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Terracotta Clay Zone',
                desc: 'Tactile modeling & pottery',
                img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Natural Sandbox Arena',
                desc: 'Safe non-toxic sand exploration',
                img: 'https://images.unsplash.com/photo-1566305977571-5666677c6e2a?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Eco Wooden Library',
                desc: 'Cognitive growth through reading',
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Micro Farm Garden',
                desc: 'Sowing seeds & understanding nature',
                img: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600'
              }
            ].map((facility, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white p-3 cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl h-56 relative mb-4">
                  <div className="absolute inset-0 bg-[#E07A5F]/5 group-hover:bg-[#E07A5F]/0 transition-colors z-10 duration-300"></div>
                  <img 
                    src={facility.img} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-1">
                  <h3 className="heading-font font-bold text-lg text-[#3D405B]">{facility.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Fee Estimator */}
      <section id="pricing" className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto bg-[#FBF9F6] p-8 md:p-12 rounded-3xl border-2 border-[#F2CC8F]/30 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Control Panel */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E07A5F]/10 text-[#E07A5F] px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Calculator className="w-3.5 h-3.5" />
                Fee Calculator
              </div>
              
              <h2 className="heading-font text-3xl font-bold text-[#3D405B] mb-4">
                Structured Fee Calculator
              </h2>
              
              <p className="text-slate-600 text-sm font-medium mb-8 leading-relaxed">
                Configure your child's age program, choose specific daycare extension blocks, and add optional lunch/transport utilities for an instant term quote.
              </p>

              {/* Program dropdown */}
              <div className="mb-6">
                <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                  1. Program Level
                </label>
                <select 
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                >
                  <option value="playgroup">Playgroup (Age: 1.8 - 2.5 yrs) - Term Fee</option>
                  <option value="nursery">Nursery (Age: 2.5 - 3.5 yrs) - Term Fee</option>
                  <option value="lkg">LKG (Age: 3.5 - 4.5 yrs) - Term Fee</option>
                  <option value="ukg">UKG (Age: 4.5 - 5.5 yrs) - Term Fee</option>
                  <option value="daycare">Daycare only - Term Fee</option>
                  <option value="afterschool">After School club - Term Fee</option>
                </select>
              </div>

              {/* Daycare extensions */}
              <div className="mb-6">
                <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                  2. Daycare Extension
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 'none', label: 'None' },
                    { val: 'half', label: 'Half Day (+4h)' },
                    { val: 'full', label: 'Full Day (+8h)' }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setDaycareHours(item.val)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        daycareHours === item.val
                          ? 'bg-[#E07A5F] border-[#E07A5F] text-white shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Utilities checkboxes */}
              <div className="space-y-3.5">
                <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-1">
                  3. Campus Facilities
                </label>

                <label className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 cursor-pointer transition-all">
                  <input 
                    type="checkbox"
                    checked={includeMeals}
                    onChange={(e) => setIncludeMeals(e.target.checked)}
                    className="w-4 h-4 rounded text-[#E07A5F] border-slate-300 focus:ring-[#E07A5F]"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#3D405B]">Fresh Organic Lunch Program</span>
                    <span className="text-[10px] text-slate-500 font-bold">+₹3,800 / month</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 cursor-pointer transition-all">
                  <input 
                    type="checkbox"
                    checked={includeTransport}
                    onChange={(e) => setIncludeTransport(e.target.checked)}
                    className="w-4 h-4 rounded text-[#E07A5F] border-slate-300 focus:ring-[#E07A5F]"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#3D405B]">GPS-Tracked Air-Conditioned Cab</span>
                    <span className="text-[10px] text-slate-500 font-bold">+₹4,800 / month</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="bg-white rounded-2xl border border-[#F2CC8F]/30 p-6 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="heading-font text-lg font-bold text-[#3D405B] border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#E07A5F]" />
                  Fee Breakdown (4-Month Term)
                </h3>

                <table className="w-full text-xs">
                  <tbody className="divide-y divide-slate-100 font-semibold text-slate-600">
                    <tr className="py-2.5">
                      <td className="py-2.5">{currentProgram.name} base fee</td>
                      <td className="py-2.5 text-right text-[#3D405B]">₹{baseTuition.toLocaleString()}</td>
                    </tr>
                    <tr className="py-2.5">
                      <td className="py-2.5">Registration & security kit</td>
                      <td className="py-2.5 text-right text-[#3D405B]">₹{adminCharges.toLocaleString()}</td>
                    </tr>
                    
                    {daycareHours !== 'none' && (
                      <tr className="py-2.5">
                        <td className="py-2.5">Daycare Extension (₹{daycareRates[daycareHours].toLocaleString()} × 4m)</td>
                        <td className="py-2.5 text-right text-[#3D405B]">₹{daycareAddonTerm.toLocaleString()}</td>
                      </tr>
                    )}
                    
                    {includeMeals && (
                      <tr className="py-2.5">
                        <td className="py-2.5">Organic Kitchen (₹3,800 × 4m)</td>
                        <td className="py-2.5 text-right text-[#3D405B]">₹{mealsCostTerm.toLocaleString()}</td>
                      </tr>
                    )}

                    {includeTransport && (
                      <tr className="py-2.5">
                        <td className="py-2.5">Smart Cab Service (₹4,800 × 4m)</td>
                        <td className="py-2.5 text-right text-[#3D405B]">₹{transportCostTerm.toLocaleString()}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-wider text-slate-500">Estimated Total Fee</span>
                    <span className="text-[10px] text-slate-400 font-bold">(Indicative billing / term)</span>
                  </div>
                  <div className="heading-font text-3xl font-bold text-[#E07A5F]">
                    ₹{totalEstimatedTerm.toLocaleString()}
                  </div>
                </div>

                <a 
                  href="#apply" 
                  className="block text-center bg-[#E07A5F] text-[#F4F1DE] hover:bg-[#3D405B] font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Submit Inquiry for {currentProgram.name}
                </a>
                <span className="block text-[10px] text-center text-slate-400 font-semibold mt-3">
                  *All fees are final upon physical document validation at Tolichowki desk.
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials */}
      <section id="reviews" className="py-24 bg-[#FBF9F6] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#81B29A] uppercase font-extrabold tracking-widest text-xs mb-2 block">Tolichowki Community</span>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#3D405B] mb-4">
              Real Reviews from Neighbors
            </h2>
            <p className="text-base text-slate-600 font-medium">
              See what families living around Tolichowki have to say about the daycare safety and organic ecosystem at Footprints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Zeenat Jahan',
                location: 'Paramount Hills, Tolichowki',
                quote: 'The live CCTV access is fantastic. I can check on my child at the sandbox during my lunch break. Highly recommend their Playgroup program!',
                stars: 5
              },
              {
                name: 'Vikram Aditya',
                location: 'Kakatiya Nagar, Tolichowki',
                quote: 'My son loves the organic meals and muddy sandpit at Footprints. The terracotta and sand aesthetics make the campus feel very natural and grounded, unlike typical plastic playgrounds.',
                stars: 5
              },
              {
                name: 'Dr. Neha Sharma',
                location: 'Nanal Nagar, Tolichowki',
                quote: 'Very scientific curriculum structure. We enrolled our daughter in LKG and we can see a major increase in her phonetics clarity and confidence. The daycare helpers are also highly certified.',
                stars: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-[#F2CC8F]">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic font-medium leading-relaxed text-sm mb-6">
                    "{review.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="heading-font font-bold text-[#3D405B]">{review.name}</h4>
                  <span className="text-xs text-slate-500 font-semibold">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Admission Enquiry Form */}
      <section id="apply" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FBF9F6] border border-[#F2CC8F]/50 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#E07A5F]/15 rounded-full blur-xl"></div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="text-center max-w-lg mx-auto mb-10">
                  <h2 className="heading-font text-3xl font-extrabold text-[#3D405B] mb-3">
                    Intake & Enrollment Enquiry
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">
                    Submit the form below for 2026 admissions. The age will be automatically validated based on date of birth.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Child's Name */}
                  <div>
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Child's Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Baby Kabir"
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.childName && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.childName}</span>
                    )}
                  </div>

                  {/* Child's DOB */}
                  <div>
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Child's Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="date" 
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                      />
                    </div>
                    {calculatedAge && (
                      <span className="text-xs text-[#E07A5F] font-bold mt-1.5 block">
                        Estimated Age: {calculatedAge}
                      </span>
                    )}
                    {errors.childDob && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.childDob}</span>
                    )}
                  </div>

                  {/* Parent's Name */}
                  <div>
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Parent / Guardian Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.parentName && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.parentName}</span>
                    )}
                  </div>

                  {/* Parent's Phone */}
                  <div>
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Phone Number (India) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="tel" 
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.parentPhone && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.parentPhone}</span>
                    )}
                  </div>

                  {/* Parent's Email */}
                  <div>
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="email" 
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. parent@example.com"
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.parentEmail && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.parentEmail}</span>
                    )}
                  </div>

                  {/* Program selection */}
                  <div>
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Target Class *
                    </label>
                    <select 
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                    >
                      <option value="playgroup">Playgroup (1.8 - 2.5 yrs)</option>
                      <option value="nursery">Nursery (2.5 - 3.5 yrs)</option>
                      <option value="lkg">LKG (3.5 - 4.5 yrs)</option>
                      <option value="ukg">UKG (4.5 - 5.5 yrs)</option>
                      <option value="daycare">Full Daycare</option>
                      <option value="afterschool">After School Activities</option>
                    </select>
                  </div>

                  {/* Start Date */}
                  <div className="md:col-span-2">
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Preferred Date of Joining *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="date" 
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.startDate && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.startDate}</span>
                    )}
                  </div>

                  {/* Additional notes */}
                  <div className="md:col-span-2">
                    <label className="block text-[#3D405B] font-bold text-xs uppercase tracking-wider mb-2">
                      Message / Special Needs (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Specify child special needs, food specifications or queries..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all"
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-[#E07A5F] text-[#F4F1DE] hover:bg-[#3D405B] transition-all font-bold px-10 py-4 rounded-xl text-xs uppercase tracking-wider shadow-md"
                  >
                    Submit Intake Form
                  </button>
                  <p className="text-[10px] text-slate-400 font-bold mt-3">
                    All admission enquiries are evaluated in accordance with Tolichowki safety regulations.
                  </p>
                </div>
              </form>
            ) : (
              // Success card
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#81B29A]/20 flex items-center justify-center mx-auto mb-6 text-[#81B29A]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="heading-font text-3xl font-bold text-[#3D405B] mb-2">
                  Enquiry Registered!
                </h3>
                <p className="text-slate-600 text-sm font-medium mb-8 max-w-md mx-auto">
                  Your reference details have been saved securely. Our counselor will contact you shortly:
                </p>

                <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 p-6 text-left mb-8 shadow-sm">
                  <table className="w-full text-xs font-semibold text-slate-600">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5">Child's Name:</td>
                        <td className="py-2.5 text-right text-[#3D405B]">{formData.childName}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5">Calculated Age:</td>
                        <td className="py-2.5 text-right text-[#3D405B]">{calculatedAge}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5">Parent's Name:</td>
                        <td className="py-2.5 text-right text-[#3D405B]">{formData.parentName}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5">Phone Number:</td>
                        <td className="py-2.5 text-right text-[#3D405B]">{formData.parentPhone}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5">Class Choice:</td>
                        <td className="py-2.5 text-right text-[#3D405B] uppercase">{formData.program}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5">Date of Intake:</td>
                        <td className="py-2.5 text-right text-[#3D405B]">{formData.startDate}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      childName: '',
                      childDob: '',
                      parentName: '',
                      parentPhone: '',
                      parentEmail: '',
                      program: 'playgroup',
                      startDate: '',
                      notes: ''
                    });
                  }}
                  className="bg-slate-100 text-slate-700 hover:bg-[#F2CC8F]/30 font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Contact & Location Footer */}
      <footer className="bg-[#3D405B] text-[#F4F1DE] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 pb-16 border-b border-slate-700">
          
          {/* Contact Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#E07A5F] flex items-center justify-center text-white rotate-3">
                <Award className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="heading-font text-xl font-bold tracking-tight text-white">
                  Footprints
                </span>
                <span className="block text-[9px] font-bold text-[#F2CC8F] tracking-widest uppercase">Tolichowki Play School</span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">
              Our Tolichowki center operates in a clean green pocket, using research-backed HighScope frameworks and non-toxic materials.
            </p>
            
            <div className="space-y-3.5 text-sm font-semibold">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E07A5F] flex-shrink-0" />
                <span className="text-slate-300">Sy No. 88, Near Paramount Hills, Tolichowki, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#81B29A] flex-shrink-0" />
                <span className="text-slate-300">+91 99887 76655</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F2CC8F] flex-shrink-0" />
                <span className="text-slate-300">tolichowki@footprintseducation.in</span>
              </div>
            </div>
          </div>

          {/* Operating hours */}
          <div>
            <h3 className="heading-font text-lg font-bold text-white mb-6">
              Class & Daycare Schedule
            </h3>
            
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span>Playgroup & Nursery</span>
                <span className="font-bold text-white">09:00 AM – 12:30 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span>LKG & UKG programs</span>
                <span className="font-bold text-white">08:30 AM – 01:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span>Daycare Extensions</span>
                <span className="font-bold text-white">08:00 AM – 06:30 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Office Working Hours</span>
                <span className="font-bold text-white">08:30 AM – 05:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Google maps placeholder */}
          <div className="flex flex-col">
            <h3 className="heading-font text-lg font-bold text-white mb-6">
              Our Location Map
            </h3>
            
            {/* Map Frame Container */}
            <div className="w-full h-48 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group">
              {/* Fallback visual maps iframe placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-[#E07A5F] mb-2 animate-bounce" />
                <p className="text-xs text-slate-300 font-bold">Paramount Hills, Tolichowki</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">Interactive Google Maps Embed Area</p>
              </div>
              
              {/* Standard maps iframe placeholder with non-functional layout */}
              <div className="w-full h-full opacity-60 group-hover:opacity-85 transition-opacity">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.579450371424!2d78.409395!3d17.398322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96df870f7cfd%3A0xe2cd2595f9c490a6!2sTolichowki%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Footprints Tolichowki"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-slate-500">
          <p>© 2026 Footprints Play School Tolichowki. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Franchised Learning Partner</p>
        </div>
      </footer>

    </div>
  );
}

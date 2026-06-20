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
  Check,
  Activity,
  Smile
} from 'lucide-react';

export default function EurokidsPage() {
  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('Nursery');
  const [needTransport, setNeedTransport] = useState(false);
  const [needMeals, setNeedMeals] = useState(false);
  const [needBooks, setNeedBooks] = useState(true);

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
    'Playgroup': { tuition: 42000, activity: 8000, admission: 12000 },
    'Nursery': { tuition: 46000, activity: 9000, admission: 12000 },
    'EuroJunior': { tuition: 52000, activity: 10000, admission: 12000 },
    'EuroSenior': { tuition: 55000, activity: 10000, admission: 12000 },
    'Daycare': { tuition: 38000, activity: 6000, admission: 8000 },
    'After-school': { tuition: 18000, activity: 4000, admission: 5000 }
  };

  const getFees = () => {
    const selected = baseFees[selectedProgram] || baseFees['Nursery'];
    let addonsTotal = 0;
    
    if (needTransport) addonsTotal += 15000;
    if (needMeals) addonsTotal += 12000;
    
    const booksPrice = needBooks ? 8000 : 0;
    const total = selected.admission + selected.tuition + selected.activity + addonsTotal + booksPrice;

    return {
      admissionFee: selected.admission,
      tuitionFee: selected.tuition,
      activityFee: selected.activity,
      booksFee: booksPrice,
      addonsFee: addonsTotal,
      totalFee: total
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-600 relative overflow-x-hidden">
      {/* Light sky blue top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#BDE0FE]/30 to-[#F8FAFC] -z-10 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#BDE0FE] rounded-xl flex items-center justify-center text-slate-800 font-extrabold shadow-sm">
              <span className="text-white font-black text-lg">EK</span>
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-800 tracking-tight block">EUROKIDS</span>
              <span className="text-[10px] block font-bold text-sky-500 uppercase tracking-widest leading-none">Tolichowki</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-500 text-sm">
            <a href="#about" className="hover:text-sky-500 transition-colors">Philosophy</a>
            <a href="#programs" className="hover:text-sky-500 transition-colors">Programs</a>
            <a href="#facilities" className="hover:text-sky-500 transition-colors">Facilities</a>
            <a href="#fees" className="hover:text-sky-500 transition-colors">Fee Calculator</a>
            <a href="#testimonials" className="hover:text-sky-500 transition-colors">Reviews</a>
          </nav>
          
          <a 
            href="#admission-form" 
            className="bg-[#BDE0FE] text-slate-800 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#a9d3fc] shadow-sm hover:shadow transition-all"
          >
            Admissions Open
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative px-6 pt-16 pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#BDE0FE]/20 border border-[#BDE0FE]/40 text-[#4a96e6] font-bold px-4 py-1.5 rounded-full text-xs shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Admissions open for early education 2026-27</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight tracking-tight">
            Nurturing Mind, Body, <br/>
            and Soul in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400">Tolichowki</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Eurokids Tolichowki provides a mindful, structured, and modern pre-school environment. We combine play-based curiosity with next-generation smart classrooms to give your child an early head start in literacy and science.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#admission-form" 
              className="w-full sm:w-auto text-center bg-sky-500 text-white font-bold px-8 py-4 rounded-full text-md shadow-md shadow-sky-200 hover:bg-sky-600 hover:-translate-y-[1px] transition-all"
            >
              Start Admission Process
            </a>
            <a 
              href="#programs" 
              className="w-full sm:w-auto text-center bg-white text-slate-600 font-bold px-8 py-4 rounded-full text-md border border-slate-200 shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 text-sky-400" />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 relative">
            <div className="absolute top-8 left-8 bg-[#BDE0FE] text-white p-3 rounded-2xl shadow-sm z-10 flex items-center gap-1.5 font-bold text-xs">
              <Award className="w-4 h-4" />
              <span>Smart Class Campus</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Eurokids Tolichowki Smart Class Learning" 
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-white border-y border-slate-100 py-10 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-1.5">
            <span className="block text-3xl font-extrabold text-slate-800">10+ Years</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Legacy in Tolichowki</span>
          </div>
          <div className="text-center space-y-1.5 border-l border-slate-100">
            <span className="block text-3xl font-extrabold text-sky-500">1500+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Happy Graduates</span>
          </div>
          <div className="text-center space-y-1.5 border-l border-slate-100">
            <span className="block text-3xl font-extrabold text-slate-800">25+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Certified Educators</span>
          </div>
          <div className="text-center space-y-1.5 border-l border-slate-100">
            <span className="block text-3xl font-extrabold text-sky-500">99%</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Satisfaction Rate</span>
          </div>
        </div>
      </section>

      {/* 3. About / Philosophy */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-500">
            About Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            EUNOIA — The Mindful Curriculum
          </h2>
          <p className="text-slate-500 font-normal leading-relaxed">
            Our proprietary Eunoia curriculum fosters cognitive stimulation, emotional maturity, and physical growth. We promote mindfulness, early scientific inquiry, and language enrichment in a quiet residential corner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-sky-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Next-Gen Education</h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              We leverage digital interactive projectors, soft play equipment, phonics audio sessions, and puzzles to develop logical skills.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-sky-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Premium Safety</h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              Eurokids Tolichowki maintains rigorous child safety measures: guards, complete CCTV feeds, finger-protection door guards, and child-safe non-toxic toys.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
              <Heart className="w-6 h-6 text-sky-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Locational Advantage</h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              Tucked inside the serene neighborhood of Tolichowki, close to prestigious colonies, ensuring zero pollution and highly comfortable school transport loops.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Curriculum & Programs */}
      <section id="programs" className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Pre-School Programs
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm">
              We provide structured programs for children from 1.5 to 10 years of age.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Playgroup",
                age: "1.5 to 2.5 Years",
                icon: Smile,
                bullets: ["Sensory and cognitive exercises", "Developing gross motor skills", "Introduction to words & song rhythm", "Basic toilet training cues"]
              },
              {
                title: "Nursery",
                age: "2.5 to 3.5 Years",
                icon: BookOpen,
                bullets: ["Early mathematical concepts", "Phonics and language exercises", "Creative art & coloring sessions", "Fostering daily independence"]
              },
              {
                title: "EuroJunior (LKG)",
                age: "3.5 to 4.5 Years",
                icon: Award,
                bullets: ["Number logic and basic writing", "Vocabulary building and spelling", "Theme study & scientific inquiry", "Active outdoor team games"]
              },
              {
                title: "EuroSenior (UKG)",
                age: "4.5 to 5.5 Years",
                icon: GraduationCap,
                bullets: ["Reading sentences & phonetics", "Complex mathematical concepts", "Basic computing & computer science", "Primary school prep drills"]
              },
              {
                title: "Daycare Care",
                age: "1.5 to 10 Years",
                icon: Heart,
                bullets: ["Comfortable clean nap spaces", "Nutritious hot lunch services", "Supervised hobby development", "Safe after-school homework help"]
              },
              {
                title: "After-school Activity",
                age: "3 to 12 Years",
                icon: Activity,
                bullets: ["Karate & self defense classes", "Western keyboard & vocal music", "Art & pottery creations", "Critical brain puzzle games"]
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-slate-800 text-lg">{program.title}</h3>
                      <span className="text-xs font-bold text-sky-500 bg-sky-50 px-2.5 py-0.5 rounded-full inline-block">{program.age}</span>
                    </div>
                    <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500">
                      <program.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {program.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#admission-form" 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, program: program.title }));
                  }}
                  className="mt-8 block w-full text-center py-2.5 rounded-full border border-slate-200 text-xs font-bold hover:bg-sky-50 hover:border-sky-200 transition-colors"
                >
                  Select Program
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities Gallery */}
      <section id="facilities" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Facilities Gallery
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm">
            Step inside our bright, air-conditioned rooms and premium play yards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AC Smart Classroom",
              desc: "Integrated smart projection panels, comfortable low-height wooden desks.",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Scientific Toy Zone",
              desc: "Stocked with logic blocks, coding puzzles, and build kits.",
              img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Safe Soft-Play Playground",
              desc: "Artificial grass, safety mats, child-safe multi-play slides.",
              img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Cozy Toddler Gym",
              desc: "Guided gymnastics blocks, mini slides, and soft ball pools.",
              img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Art & Music Hub",
              desc: "Piano keyboards, painting boards, and clay sculpting desks.",
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
            }
          ].map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-extrabold text-slate-800 text-sm">{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Fee Estimator Widget */}
      <section id="fees" className="py-20 px-6 bg-[#BDE0FE]/10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-500 block">
              Fee Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Interactive Fee Estimator
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Calculate the transparent annual budget for your child's preschooling. Custom select programs, transport requirements, and meal programs to see a detailed breakdown.
            </p>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              {/* Program selection */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Select Program</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(baseFees).map((prog) => (
                    <button
                      key={prog}
                      type="button"
                      onClick={() => setSelectedProgram(prog)}
                      className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                        selectedProgram === prog
                          ? 'bg-[#BDE0FE] border-sky-400 text-slate-850 shadow-sm'
                          : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-200'
                      }`}
                    >
                      {prog}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons checkbox */}
              <div className="space-y-3 pt-4 border-t border-slate-50">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Optional Services</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needTransport}
                      onChange={(e) => setNeedTransport(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-200 text-sky-500 focus:ring-sky-400"
                    />
                    <span className="text-xs font-semibold text-slate-650">School Bus Transport (₹15,000 / year)</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needMeals}
                      onChange={(e) => setNeedMeals(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-200 text-sky-500 focus:ring-sky-400"
                    />
                    <span className="text-xs font-semibold text-slate-650">Nutritious Lunch Program (₹12,000 / year)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needBooks}
                      onChange={(e) => setNeedBooks(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-200 text-sky-500 focus:ring-sky-400"
                    />
                    <span className="text-xs font-semibold text-slate-650">Books & Educational Kit (₹8,000)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 sm:p-8 space-y-6">
            <h3 className="text-md font-bold text-slate-800 uppercase flex items-center gap-2">
              <Calculator className="w-5 h-5 text-sky-400" />
              <span>Calculated Annual Estimate</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-450 font-bold uppercase">
                    <th className="pb-3">Component</th>
                    <th className="pb-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-slate-550 font-medium divide-y divide-slate-50">
                  <tr>
                    <td className="py-3">Registration & Admission Fee</td>
                    <td className="py-3 text-right">₹{fees.admissionFee.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-3">Tuition Fees ({selectedProgram})</td>
                    <td className="py-3 text-right">₹{fees.tuitionFee.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-3">Extracurricular Activity Fee</td>
                    <td className="py-3 text-right">₹{fees.activityFee.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-3">Eurokids Materials Kit</td>
                    <td className="py-3 text-right">₹{fees.booksFee.toLocaleString()}</td>
                  </tr>
                  {fees.addonsFee > 0 && (
                    <tr>
                      <td className="py-3">Selected Addon Facilities</td>
                      <td className="py-3 text-right">₹{fees.addonsFee.toLocaleString()}</td>
                    </tr>
                  )}
                  <tr className="font-extrabold text-slate-800 text-sm bg-slate-50 border-t border-slate-100">
                    <td className="py-4 px-3">Total Estimate</td>
                    <td className="py-4 px-3 text-right">₹{fees.totalFee.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-start gap-2.5 bg-sky-50/50 p-4 rounded-xl border border-sky-100 text-[10px] text-slate-500 font-medium leading-relaxed">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <p>
                Fees are subject to applicable terms. Installment choices are offered. Request a direct breakdown at our Tolichowki administrative office.
              </p>
            </div>

            <a 
              href="#admission-form"
              className="block w-full text-center bg-sky-500 text-white font-bold py-3.5 rounded-full shadow-md shadow-sky-100 hover:bg-sky-600 transition-colors text-xs uppercase"
            >
              Reserve Selected Program Slot
            </a>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Trusted by Tolichowki Parents
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm">
            Read real feedback shared by neighborhood families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Farhan Ahmed",
              loc: "MD Colony",
              quote: "The interactive classrooms and clean playground are excellent. My son is excited to go to school every day.",
              role: "Father of Ayaan"
            },
            {
              name: "Lubna Hashmi",
              loc: "Paramount Hills",
              quote: "Eunoia curriculum has built tremendous reading vocabulary in my child. Teachers provide great personalized care.",
              role: "Mother of Hania"
            },
            {
              name: "Karan Johar",
              loc: "Hakeempet Road",
              quote: "Highly structured daycare facility. My child gets high quality meals and learns social skills in a secure playground.",
              role: "Father of Kabir"
            },
            {
              name: "Nafees Begum",
              loc: "Tolichowki Crossroads",
              quote: "I am happy with their transport facility safety measures. CCTV surveillance and helper staff are professional.",
              role: "Mother of Mustafa"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sky-200 text-sky-200" />
                  ))}
                </div>
                <p className="text-slate-500 text-xs font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 mt-6">
                <h4 className="font-bold text-slate-800 text-xs">{item.name}</h4>
                <p className="text-[10px] text-slate-400 font-semibold">{item.role} • {item.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Admission Enquiry Form */}
      <section id="admission-form" className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/30 overflow-hidden">
          <div className="bg-sky-500 text-white p-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Admission Enquiry Form</h2>
            <p className="text-xs font-medium opacity-90 mt-1">Submit the inquiry, and our school counselor will get in touch shortly.</p>
          </div>

          <div className="p-8">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto text-sky-500">
                  <Check className="w-8 h-8 stroke-[3px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-850">Enquiry Registered!</h3>
                  <p className="text-slate-500 font-medium max-w-md mx-auto text-xs leading-relaxed">
                    Thank you, <span className="font-bold text-slate-800">{formData.parentName}</span>. Your enquiry for <span className="font-bold text-slate-800">{formData.childName}</span> (Age: {calculatedAge ? `${calculatedAge.years} Years, ${calculatedAge.months} Months` : 'N/A'}) has been successfully received.
                  </p>
                </div>
                <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-4 max-w-md mx-auto text-xs font-semibold text-slate-500">
                  Our admissions manager will call you at <span className="text-sky-500 font-bold">{formData.parentPhone}</span> to arrange a counselor meeting.
                </div>
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
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-xs uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Parent's Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g. Farhan Ahmed"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 ${formErrors.parentName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                    />
                    {formErrors.parentName && <p className="text-red-400 text-[10px] font-bold">{formErrors.parentName}</p>}
                  </div>

                  {/* Child Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Child's Full Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ayaan Ahmed"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 ${formErrors.childName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                    />
                    {formErrors.childName && <p className="text-red-400 text-[10px] font-bold">{formErrors.childName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      placeholder="parent@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 ${formErrors.parentEmail ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                    />
                    {formErrors.parentEmail && <p className="text-red-400 text-[10px] font-bold">{formErrors.parentEmail}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile Number <span className="text-red-400">*</span></label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 ${formErrors.parentPhone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                    />
                    {formErrors.parentPhone && <p className="text-red-400 text-[10px] font-bold">{formErrors.parentPhone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* DOB */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Child's Date of Birth <span className="text-red-400">*</span></label>
                    <input
                      type="date"
                      name="childDob"
                      value={formData.childDob}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 ${formErrors.childDob ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                    />
                    {calculatedAge && (
                      <div className="text-[9px] text-slate-400 font-bold bg-slate-50 p-2 rounded-xl border border-slate-100">
                        Calculated Age: {calculatedAge.years} Years, {calculatedAge.months} Months
                      </div>
                    )}
                    {formErrors.childDob && <p className="text-red-400 text-[10px] font-bold">{formErrors.childDob}</p>}
                  </div>

                  {/* Program selection */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Selected Program</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    >
                      <option value="Playgroup">Playgroup (1.5 - 2.5 yrs)</option>
                      <option value="Nursery">Nursery (2.5 - 3.5 yrs)</option>
                      <option value="EuroJunior">EuroJunior (3.5 - 4.5 yrs)</option>
                      <option value="EuroSenior">EuroSenior (4.5 - 5.5 yrs)</option>
                      <option value="Daycare">Daycare (1.5 - 10 yrs)</option>
                      <option value="After-school">After-school Activities (3 - 12 yrs)</option>
                    </select>
                  </div>

                  {/* Admission Date */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Start Date <span className="text-red-400">*</span></label>
                    <input
                      type="date"
                      name="targetDate"
                      value={formData.targetDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 ${formErrors.targetDate ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                    />
                    {formErrors.targetDate && <p className="text-red-400 text-[10px] font-bold">{formErrors.targetDate}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Details or Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter any questions or requirements here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white font-bold py-4 rounded-full text-md shadow-md shadow-sky-100 hover:bg-sky-600 transition-colors uppercase"
                >
                  Submit Admission Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Contact & Location Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-sky-400 rounded-xl flex items-center justify-center text-slate-800 font-extrabold shadow-sm">
                <span className="text-white font-black text-sm">EK</span>
              </div>
              <span className="font-extrabold text-sm uppercase tracking-wider text-sky-300">Eurokids Tolichowki</span>
            </div>
            <p className="text-slate-400 font-medium text-xs leading-relaxed max-w-sm">
              Providing premium early childhood education to families in Tolichowki. Fostering development, safety, and joy in MD Colony's quietest zone.
            </p>
            <div className="space-y-3 font-medium text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-300" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-300" />
                <span>+91 99887 76655</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-300" />
                <span>info.tolichowki@eurokids.com</span>
              </div>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-sky-300 uppercase text-xs tracking-wider">Campus Location Details</h3>
            <div className="flex items-start gap-3 text-slate-300 font-medium text-xs leading-relaxed">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p>
                Plot No. 44, Paramount Hills Colony Road,<br />
                Beside Tolichowki flyover lanes, Tolichowki,<br />
                Hyderabad, Telangana - 500008
              </p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 text-[10px] text-slate-400 font-medium leading-relaxed">
              <span className="font-bold text-sky-300 block mb-1">Landmark:</span>
              Opposite Reliance Fresh Lane, 1 minute drive from Paramount Hills entrance gate. Easy parking space available.
            </div>
          </div>

          {/* Map Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-sky-300 uppercase text-xs tracking-wider">Location Map</h3>
            <div className="w-full h-48 bg-slate-850 rounded-2xl border border-slate-800 overflow-hidden relative group">
              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-sky-400 mb-2 animate-bounce" />
                <p className="text-xs text-slate-350 font-bold">Paramount Hills, Tolichowki</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">Google Maps Interactive Area</p>
              </div>
              
              <div className="w-full h-full opacity-60 group-hover:opacity-80 transition-opacity">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.579450371424!2d78.409395!3d17.398322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96df870f7cfd%3A0xe2cd2595f9c490a6!2sTolichowki%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Eurokids Tolichowki"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} Eurokids Tolichowki. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Preschool Learning Franchise Partner</p>
        </div>
      </footer>
    </main>
  );
}

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
  Smile,
  CheckCircle
} from 'lucide-react';

export default function LittleMillenniumPage() {
  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('Nursery');
  const [transportZone, setTransportZone] = useState('none');
  const [includeMeals, setIncludeMeals] = useState(false);
  const [includeExtendedCare, setIncludeExtendedCare] = useState(false);

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

  // Fee calculation data
  const baseFees = {
    'Playgroup': { admission: 10000, tuition: 40000, books: 6000 },
    'Nursery': { admission: 10000, tuition: 45000, books: 6500 },
    'LKG': { admission: 10000, tuition: 50000, books: 7000 },
    'UKG': { admission: 10000, tuition: 52000, books: 7000 },
    'Daycare': { admission: 5000, tuition: 35000, books: 3000 },
    'After-school': { admission: 5000, tuition: 15000, books: 2000 }
  };

  const getFees = () => {
    const selected = baseFees[selectedProgram] || baseFees['Nursery'];
    let addonTotal = 0;
    
    if (transportZone === 'zoneA') addonTotal += 12000;
    if (transportZone === 'zoneB') addonTotal += 20000;
    if (includeMeals) addonTotal += 15000;
    if (includeExtendedCare) addonTotal += 25000;

    const grandTotal = selected.admission + selected.tuition + selected.books + addonTotal;

    return {
      admission: selected.admission,
      tuition: selected.tuition,
      books: selected.books,
      addons: addonTotal,
      total: grandTotal
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
    <main className="min-h-screen bg-[#FFFDF9] text-[#1E293B] relative overflow-x-hidden">
      {/* Background Geometric Decorations */}
      <div className="absolute top-20 right-[-100px] w-96 h-96 rounded-full bg-[#FFD166]/10 -z-10 pointer-events-none" />
      <div className="absolute top-[40%] left-[-100px] w-80 h-80 rotate-45 bg-[#F4845F]/10 -z-10 pointer-events-none" />
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-[3px] border-slate-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFD166] border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#0F172A]">
              <span className="font-extrabold text-2xl text-slate-900">LM</span>
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-slate-900 block">LITTLE MILLENNIUM</span>
              <span className="text-xs block font-bold text-[#F4845F] uppercase tracking-widest leading-none">Tolichowki</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 font-bold text-slate-700">
            <a href="#about" className="hover:text-[#F4845F] transition-colors">About</a>
            <a href="#programs" className="hover:text-[#F4845F] transition-colors">Programs</a>
            <a href="#facilities" className="hover:text-[#F4845F] transition-colors">Facilities</a>
            <a href="#estimator" className="hover:text-[#F4845F] transition-colors">Fee Estimator</a>
            <a href="#testimonials" className="hover:text-[#F4845F] transition-colors">Testimonials</a>
          </nav>
          
          <a 
            href="#enquiry-form" 
            className="bg-[#F4845F] text-white border-2 border-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_#0F172A] hover:shadow-[2px_2px_0px_#0F172A] transition-all"
          >
            Apply Open
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative px-6 pt-16 pb-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#FFD166]/20 border-2 border-slate-900 px-4 py-2 rounded-full text-xs font-bold text-[#e6a100] shadow-[2px_2px_0px_#0f172a]">
            <Sparkles className="w-4 h-4 text-[#F4845F]" />
            <span>Admissions Open for Academic Session 2026-2027</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Nurturing Tolichowki's <br/>
            <span className="bg-[#FFD166] px-2 py-1 rounded-md border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] inline-block">
              Young Minds
            </span>
            <br />With Play & Care
          </h1>

          <p className="text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Welcome to Little Millennium Tolichowki. Our award-winning Seven-Petal curriculum empowers child-centric early education, stimulating cognitive growth and physical capabilities in MD Colony's safest campus.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#enquiry-form" 
              className="w-full sm:w-auto text-center bg-[#F4845F] text-white font-extrabold px-8 py-4 rounded-xl border-[3px] border-slate-900 text-lg shadow-[5px_5px_0px_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0f172a] transition-all"
            >
              Start Admission Process
            </a>
            <a 
              href="#programs" 
              className="w-full sm:w-auto text-center bg-white text-slate-800 font-bold px-8 py-4 rounded-xl border-[3px] border-slate-900 text-lg shadow-[5px_5px_0px_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0f172a] transition-all flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 bg-[#FFD166] rounded-2xl border-[3px] border-slate-900 translate-x-4 translate-y-4" />
          <div className="relative bg-white rounded-2xl border-[3px] border-slate-900 overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" 
              alt="Preschool activities at Little Millennium Tolichowki" 
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white border-2 border-slate-900 px-4 py-2 rounded-lg font-bold text-xs shadow-[2px_2px_0px_#0f172a] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F4845F]" />
              <span>India's Best Play School Franchise</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-[#FFD166] border-y-[3px] border-slate-900 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
            <span className="block text-3xl sm:text-4xl font-black text-slate-900">8+ Years</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Tolichowki Presence</span>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
            <span className="block text-3xl sm:text-4xl font-black text-[#F4845F]">1200+</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Enrolled Alumni</span>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
            <span className="block text-3xl sm:text-4xl font-black text-slate-900">18+</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Creative Activities</span>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
            <span className="block text-3xl sm:text-4xl font-black text-[#F4845F]">98%</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Satisfaction Rate</span>
          </div>
        </div>
      </section>

      {/* 3. About / Philosophy Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F4845F] bg-[#F4845F]/10 px-3 py-1 rounded-full">
            Our Core Belief
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase">
            The Seven-Petal Curriculum & approach
          </h2>
          <div className="h-1.5 w-24 bg-[#FFD166] mx-auto rounded-full border border-slate-900" />
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            At Little Millennium Tolichowki, we believe in holistic child development. Our progressive, research-backed curriculum focuses on social skills, language mastery, physical agility, and cognitive development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_#0f172a] space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#FFD166] border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_#0f172a]">
              <GraduationCap className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Holistic Learning</h3>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              We teach through exploration. Kids participate in storytelling, puppet theater, basic mathematics, and logical puzzle activities daily.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_#0f172a] space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#F4845F] border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_#0f172a]">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Safe & Secure Environment</h3>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              Our campus is located in a quiet residential area of MD Colony. Equipped with 24/7 CCTV surveillance, secure gates, and child-proof furniture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_#0f172a] space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#FFD166] border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_#0f172a]">
              <Heart className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Why Tolichowki?</h3>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              Strategically situated near Tolichowki Cross Road for easy commutes. Features premium hygiene standards, large spacious classrooms, and clean sanitization loops.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Curriculum & Programs */}
      <section id="programs" className="py-20 px-6 bg-slate-50 border-y-[3px] border-slate-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase">
              Our Tailored Programs
            </h2>
            <p className="text-slate-600 font-medium max-w-xl mx-auto">
              Find the perfect early learning program matching your child's age group and learning speed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Playgroup",
                age: "1.5 to 2.5 Years",
                icon: Smile,
                color: "bg-[#FFD166]",
                bullets: ["Sensory stimulation", "Basic motor actions", "Social play loops", "Language familiarity"]
              },
              {
                title: "Nursery",
                age: "2.5 to 3.5 Years",
                icon: BookOpen,
                color: "bg-[#F4845F] text-white",
                bullets: ["Intro to numbers & alphabet", "Phonic awareness games", "Creative expression", "Self-help focus"]
              },
              {
                title: "LKG (Junior KG)",
                age: "3.5 to 4.5 Years",
                icon: Award,
                color: "bg-[#FFD166]",
                bullets: ["Early mathematical logic", "Vocal reading drills", "Theme-based inquiry", "Peer collaboration"]
              },
              {
                title: "UKG (Senior KG)",
                age: "4.5 to 5.5 Years",
                icon: GraduationCap,
                color: "bg-[#F4845F] text-white",
                bullets: ["Advanced reading skills", "Logical math concepts", "Environmental science basics", "School readiness"]
              },
              {
                title: "Daycare Program",
                age: "1.5 to 10 Years",
                icon: Heart,
                color: "bg-[#FFD166]",
                bullets: ["Safe nap zones", "Supervised meal schedule", "Guided homework time", "Creative indoor play"]
              },
              {
                title: "After-school Club",
                age: "3 to 12 Years",
                icon: Activity,
                color: "bg-[#F4845F] text-white",
                bullets: ["Western & classical dance", "Acrobatic gymnastics", "Art & Craft workshops", "Speed-rubik & chess"]
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_#0f172a] overflow-hidden flex flex-col">
                <div className={`${program.color} px-6 py-4 border-b-[3px] border-slate-900 flex justify-between items-center`}>
                  <div>
                    <h3 className="font-extrabold text-xl">{program.title}</h3>
                    <span className="text-xs font-semibold opacity-90">{program.age}</span>
                  </div>
                  <program.icon className="w-8 h-8 shrink-0" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <ul className="space-y-2">
                    {program.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#F4845F] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#enquiry-form" 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, program: program.title }));
                    }}
                    className="w-full text-center py-2.5 rounded-lg border-2 border-slate-900 font-bold text-sm bg-white hover:bg-[#FFD166] transition-colors"
                  >
                    Select Program
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities Gallery */}
      <section id="facilities" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase">
            Tolichowki Campus Facilities
          </h2>
          <div className="h-1.5 w-24 bg-[#FFD166] mx-auto rounded-full border border-slate-900" />
          <p className="text-slate-600 font-medium max-w-xl mx-auto">
            Tour our child-safe infrastructures designed to turn learning into a playful adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Interactive Classrooms",
              desc: "AC-equipped spacious rooms with kid-safe smart screens.",
              img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Safe Outdoor Play Area",
              desc: "Equipped with rubberized flooring and premium quality slides.",
              img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Indoor Activity Hub",
              desc: "Role-play toys, dollhouse corners, and puzzle library.",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Toddler Gym",
              desc: "Foam pits and balance beams supporting physical growth.",
              img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Art & Craft Studio",
              desc: "Canvas painting stations, pottery zones, and sensory art bins.",
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
            }
          ].map((facility, index) => (
            <div key={index} className="group bg-white rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_#0f172a] overflow-hidden">
              <div className="h-56 relative overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-[#FFD166]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-extrabold text-lg text-slate-900">{facility.title}</h3>
                <p className="text-slate-600 font-medium text-xs leading-relaxed">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Fee Estimator Widget */}
      <section id="estimator" className="py-20 px-6 bg-[#FFD166]/10 border-y-[3px] border-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4845F] bg-[#F4845F]/10 px-3 py-1 rounded-full">
              Interactive Fee Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase">
              Annual Fee Calculator
            </h2>
            <p className="text-slate-700 font-medium">
              We maintain 100% pricing transparency. Use our calculator tool to see the estimated annual fee structure based on program choices and custom add-ons.
            </p>
            
            <div className="space-y-4 p-6 bg-white rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_#0f172a]">
              {/* Program selection */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Select Program</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(baseFees).map((prog) => (
                    <button
                      key={prog}
                      type="button"
                      onClick={() => setSelectedProgram(prog)}
                      className={`px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all ${
                        selectedProgram === prog
                          ? 'bg-[#FFD166] border-slate-900 text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {prog}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transportation */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-sm font-bold text-slate-700">Transportation Needed</label>
                <select
                  value={transportZone}
                  onChange={(e) => setTransportZone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border-2 border-slate-900 font-medium text-xs bg-white focus:outline-none"
                >
                  <option value="none">No Transport Facility</option>
                  <option value="zoneA">Zone A (0 to 3 KM) - ₹12,000 / year</option>
                  <option value="zoneB">Zone B (3 to 6 KM) - ₹20,000 / year</option>
                </select>
              </div>

              {/* Optional services */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-sm font-bold text-slate-700">Additional Services</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeMeals}
                      onChange={(e) => setIncludeMeals(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#F4845F] focus:ring-[#F4845F]"
                    />
                    <span className="text-xs font-semibold text-slate-700">Daily Nutritious Meals (₹15,000 / year)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeExtendedCare}
                      onChange={(e) => setIncludeExtendedCare(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#F4845F] focus:ring-[#F4845F]"
                    />
                    <span className="text-xs font-semibold text-slate-700">Extended Care / Late Pickup (₹25,000 / year)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-[3px] border-slate-900 shadow-[8px_8px_0px_#0f172a] p-6 lg:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#F4845F]" />
              <span>Calculated Fee Structure</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-900 text-xs font-bold uppercase text-slate-500">
                    <th className="pb-3">Fee Component</th>
                    <th className="pb-3 text-right">Estimated Amount</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-semibold divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 text-slate-700">One-Time Admission Fee</td>
                    <td className="py-3 text-right">₹{fees.admission.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-slate-700">Annual Tuition Fee ({selectedProgram})</td>
                    <td className="py-3 text-right">₹{fees.tuition.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-slate-700">Annual Books, Kit & Materials</td>
                    <td className="py-3 text-right">₹{fees.books.toLocaleString()}</td>
                  </tr>
                  {fees.addons > 0 && (
                    <tr>
                      <td className="py-3 text-slate-700">Selected Add-on Facilities</td>
                      <td className="py-3 text-right">₹{fees.addons.toLocaleString()}</td>
                    </tr>
                  )}
                  <tr className="border-t-2 border-slate-900 font-extrabold text-sm text-slate-900 bg-slate-50">
                    <td className="py-4 px-2">Total Estimated Fee</td>
                    <td className="py-4 px-2 text-right">₹{fees.total.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-start gap-2 bg-[#FFD166]/20 p-3 rounded-lg border border-[#FFD166]">
              <Info className="w-4 h-4 text-[#F4845F] shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-600 font-bold leading-normal">
                Please note: Installment payment options are available upon request. Final fee quotes are provided after the physical campus counseling session.
              </p>
            </div>
            
            <a 
              href="#enquiry-form"
              className="block w-full text-center bg-[#FFD166] text-slate-900 font-extrabold py-3 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#0f172a] transition-all text-sm uppercase"
            >
              Secure This Rate Now
            </a>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase">
            Parent Voices in Tolichowki
          </h2>
          <div className="h-1.5 w-24 bg-[#FFD166] mx-auto rounded-full border border-slate-900" />
          <p className="text-slate-600 font-medium max-w-xl mx-auto">
            Read real stories from families who trust Little Millennium with their kids' early years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Imran Khan",
              loc: "Tolichowki",
              quote: "The progress my daughter made in Nursery is incredible. She learned reading phonics so fast. Highly recommend this school!",
              role: "Father of Sarah"
            },
            {
              name: "Ayesha Begum",
              loc: "Paramount Hills",
              quote: "Extremely clean and safe environment. The CCTV access and daily updates give me complete peace of mind while at work.",
              role: "Mother of Rayan"
            },
            {
              name: "Srinivas Rao",
              loc: "Al Hasnath Colony",
              quote: "Their Seven-Petal curriculum is brilliant. It balances structured study with high-energy physical play games seamlessly.",
              role: "Father of Abhiram"
            },
            {
              name: "Zoya Fatima",
              loc: "MD Colony",
              quote: "Daycare staff is amazing. They handle infants with so much warmth, providing timely meals and nice structured activities.",
              role: "Mother of Safa"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
                  ))}
                </div>
                <p className="text-slate-600 font-medium text-xs leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-extrabold text-sm text-slate-900">{item.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold">{item.role} • {item.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Admission Enquiry Form */}
      <section id="enquiry-form" className="py-20 px-6 bg-slate-50 border-t-[3px] border-slate-900">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-[3px] border-slate-900 shadow-[8px_8px_0px_#0f172a] overflow-hidden">
          <div className="bg-[#F4845F] text-white p-6 border-b-[3px] border-slate-900 text-center">
            <h2 className="text-2xl font-black uppercase">Admission Enquiry</h2>
            <p className="text-xs font-medium opacity-90 mt-1">Please fill the form below. We will get back to you within 24 hours.</p>
          </div>

          <div className="p-8">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#FFD166] border-[3px] border-slate-900 rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0px_#0f172a]">
                  <Check className="w-8 h-8 text-slate-900 stroke-[3px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 uppercase">Enquiry Submitted!</h3>
                  <p className="text-slate-600 font-medium max-w-md mx-auto text-sm">
                    Thank you, <span className="font-bold text-slate-900">{formData.parentName}</span>. Your enquiry for <span className="font-bold text-slate-900">{formData.childName}</span> (Age: {calculatedAge ? `${calculatedAge.years} Years, ${calculatedAge.months} Months` : 'N/A'}) has been registered.
                  </p>
                </div>
                <div className="bg-[#FFD166]/10 border-2 border-[#FFD166] rounded-xl p-4 max-w-md mx-auto text-xs font-bold text-slate-700">
                  Our admissions manager will call you at <span className="text-[#F4845F]">{formData.parentPhone}</span> to arrange a campus walkthrough.
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
                  className="bg-slate-900 text-white font-extrabold px-6 py-2.5 rounded-lg border-2 border-slate-900 hover:bg-slate-800 transition-colors text-xs uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Parent's Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g. Imran Khan"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 ${formErrors.parentName ? 'border-red-500 bg-red-50' : 'border-slate-900'}`}
                    />
                    {formErrors.parentName && <p className="text-red-500 text-xs font-bold">{formErrors.parentName}</p>}
                  </div>

                  {/* Child Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Child's Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Khan"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 ${formErrors.childName ? 'border-red-500 bg-red-50' : 'border-slate-900'}`}
                    />
                    {formErrors.childName && <p className="text-red-500 text-xs font-bold">{formErrors.childName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      placeholder="parent@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 ${formErrors.parentEmail ? 'border-red-500 bg-red-50' : 'border-slate-900'}`}
                    />
                    {formErrors.parentEmail && <p className="text-red-500 text-xs font-bold">{formErrors.parentEmail}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Contact Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 ${formErrors.parentPhone ? 'border-red-500 bg-red-50' : 'border-slate-900'}`}
                    />
                    {formErrors.parentPhone && <p className="text-red-500 text-xs font-bold">{formErrors.parentPhone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* DOB */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Child's DOB <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="childDob"
                      value={formData.childDob}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 ${formErrors.childDob ? 'border-red-500 bg-red-50' : 'border-slate-900'}`}
                    />
                    {calculatedAge && (
                      <div className="text-[10px] text-slate-500 font-extrabold bg-slate-50 p-2 rounded border border-slate-200">
                        Calculated Age: {calculatedAge.years} Years, {calculatedAge.months} Months
                      </div>
                    )}
                    {formErrors.childDob && <p className="text-red-500 text-xs font-bold">{formErrors.childDob}</p>}
                  </div>

                  {/* Program selection */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Target Program</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium bg-white focus:outline-none focus:bg-[#FFD166]/5"
                    >
                      <option value="Playgroup">Playgroup (1.5 - 2.5 yrs)</option>
                      <option value="Nursery">Nursery (2.5 - 3.5 yrs)</option>
                      <option value="LKG">LKG (3.5 - 4.5 yrs)</option>
                      <option value="UKG">UKG (4.5 - 5.5 yrs)</option>
                      <option value="Daycare">Daycare (1.5 - 10 yrs)</option>
                      <option value="After-school">After-school Activities (3 - 12 yrs)</option>
                    </select>
                  </div>

                  {/* Admission Date */}
                  <div className="space-y-1">
                    <label className="block text-xs font-extrabold uppercase text-slate-700">Preferred Start Date <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="targetDate"
                      value={formData.targetDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 ${formErrors.targetDate ? 'border-red-500 bg-red-50' : 'border-slate-900'}`}
                    />
                    {formErrors.targetDate && <p className="text-red-500 text-xs font-bold">{formErrors.targetDate}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-extrabold uppercase text-slate-700">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Tell us about your child's special needs or interests..."
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-slate-900 text-sm font-medium focus:outline-none focus:bg-[#FFD166]/5 focus:border-slate-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F4845F] text-white font-extrabold py-4 rounded-xl border-[3px] border-slate-900 text-lg shadow-[5px_5px_0px_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0f172a] transition-all uppercase"
                >
                  Submit Admission Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Contact & Location Footer */}
      <footer className="bg-slate-900 text-white border-t-4 border-slate-900 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD166] border-2 border-white rounded-lg flex items-center justify-center text-slate-900 font-extrabold shadow-[2px_2px_0px_#ffffff]">
                <span>LM</span>
              </div>
              <span className="font-extrabold text-lg uppercase tracking-wider text-[#FFD166]">Little Millennium</span>
            </div>
            <p className="text-slate-400 font-semibold text-xs leading-relaxed max-w-sm">
              Providing premium early childhood education to families in Tolichowki. Fostering development, safety, and joy in MD Colony's quietest zone.
            </p>
            <div className="space-y-3 font-semibold text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FFD166]" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFD166]" />
                <span>+91 99887 76655</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFD166]" />
                <span>info.tolichowki@littlemillennium.com</span>
              </div>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-6">
            <h3 className="font-black text-[#FFD166] uppercase text-sm tracking-wider">Tolichowki Branch Address</h3>
            <div className="flex items-start gap-3 text-slate-300 font-semibold text-xs leading-relaxed">
              <MapPin className="w-5 h-5 text-[#F4845F] shrink-0 mt-0.5" />
              <p>
                Plot No. 12, MD Colony,<br />
                Near Tolichowki Cross Road, Tolichowki,<br />
                Hyderabad, Telangana - 500008
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-[10px] text-slate-400 font-semibold">
              <span className="font-bold text-[#FFD166] block mb-1">Landmark:</span>
              Opposite Paramount Hills Entry Road, 2 minutes walk from Tolichowki Main Flyover.
            </div>
          </div>

          {/* Map Column */}
          <div className="space-y-6">
            <h3 className="font-black text-[#FFD166] uppercase text-sm tracking-wider">Campus Location</h3>
            <div className="w-full h-48 bg-slate-800 rounded-xl border-2 border-slate-700 overflow-hidden relative group">
              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-[#F4845F] mb-2 animate-bounce" />
                <p className="text-xs text-slate-300 font-bold">MD Colony, Tolichowki</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">Interactive Google Map Embed</p>
              </div>
              
              <div className="w-full h-full opacity-60 group-hover:opacity-80 transition-opacity">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.579450371424!2d78.409395!3d17.398322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96df870f7cfd%3A0xe2cd2595f9c490a6!2sTolichowki%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Little Millennium Tolichowki"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} Little Millennium Tolichowki. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Preschool Learning Franchise Partner</p>
        </div>
      </footer>
    </main>
  );
}

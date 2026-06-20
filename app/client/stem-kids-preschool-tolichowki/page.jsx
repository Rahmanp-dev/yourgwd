"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Check, 
  Star, 
  Clock, 
  Users, 
  Trophy, 
  Cpu, 
  Atom, 
  FlaskConical, 
  Layers, 
  Gamepad2, 
  AlertCircle,
  CheckCircle,
  Building,
  GraduationCap
} from 'lucide-react';

const PROGRAMS = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    ageRange: '1.5 – 2.5 Years',
    baseFee: 6500,
    icon: Layers,
    description: 'Nurturing sensory exploration and social play in a safe, tech-infused child-friendly zone.',
    highlights: ['Sensory lab activities', 'Gross motor fun zones', 'Social bonding games']
  },
  {
    id: 'nursery',
    name: 'Nursery',
    ageRange: '2.5 – 3.5 Years',
    baseFee: 7000,
    icon: Gamepad2,
    description: 'Early pre-reading, scientific inquiry, and hands-on mechanical building blocks.',
    highlights: ['Basic block coding games', 'Phonetics & language foundation', 'Nature science walks']
  },
  {
    id: 'lkg',
    name: 'LKG (Lower Kindergarten)',
    ageRange: '3.5 – 4.5 Years',
    baseFee: 7500,
    icon: Cpu,
    description: 'Introducing early arithmetic, spatial orientation, and basic drag-and-drop logic.',
    highlights: ['Lego building blocks', 'Interactive logic puzzles', 'Early bilingual speech']
  },
  {
    id: 'ukg',
    name: 'UKG (Upper Kindergarten)',
    ageRange: '4.5 – 5.5 Years',
    baseFee: 8000,
    icon: Atom,
    description: 'Transitioning to elementary sciences, structured robotic assemblies, and early reading.',
    highlights: ['Junior robotics workshop', 'Creative math lab', 'Logical storytelling']
  },
  {
    id: 'daycare',
    name: 'Tech Daycare',
    ageRange: '2.0 – 8.0 Years',
    baseFee: 5000,
    icon: Building,
    description: 'Highly secure environment with real-time digital check-ins and nutrition-focused play.',
    highlights: ['Nutritious gourmet meals', 'Secured smart monitors', 'Guided nap & craft hour']
  },
  {
    id: 'afterschool',
    name: 'After-school STEM Club',
    ageRange: '4.0 – 10.0 Years',
    baseFee: 4000,
    icon: FlaskConical,
    description: 'Immersive weekly sessions covering scratch coding, hardware building, and physics experiments.',
    highlights: ['Lego coding blocks', 'Electronics science kit', 'Mini inventions fair']
  }
];

const ADDONS = [
  { id: 'transport', name: 'Safe Smart Transport (GPS enabled)', fee: 1500 },
  { id: 'meals', name: 'Organic Hot Meals & Nutrition', fee: 2000 },
  { id: 'robotics', name: 'Advanced Robotics Lab Kit & VR Tour', fee: 1200 }
];

export default function StemKidsPage() {
  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('playgroup');
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childDob: '',
    selectedProgram: 'playgroup',
    preferredDate: '',
    message: ''
  });
  const [calculatedAge, setCalculatedAge] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Fee Addons Change
  const handleAddonToggle = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Get active program details for calculator
  const activeProg = PROGRAMS.find(p => p.id === selectedProgram) || PROGRAMS[0];
  const basePrice = activeProg.baseFee;
  const addonCost = ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((acc, curr) => acc + curr.fee, 0);
  const monthlyTotal = basePrice + addonCost;
  const termTotal = Math.round(monthlyTotal * 3 * 0.95); // 5% discount for a 3-month term

  // Handle Date of Birth Change & Auto Age Calculation
  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    setFormData(prev => ({ ...prev, childDob: dobValue }));
    
    if (!dobValue) {
      setCalculatedAge(null);
      return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();
    
    if (isNaN(birthDate.getTime())) {
      setCalculatedAge(null);
      return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    
    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthDate.getDate())) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageYears < 0) {
      setCalculatedAge({ error: 'Birth date cannot be in the future.' });
    } else {
      setCalculatedAge({ years: ageYears, months: ageMonths });
    }
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.parentName.trim()) errors.parentName = 'Parent name is required';
    
    if (!formData.parentEmail.trim()) {
      errors.parentEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
      errors.parentEmail = 'Please enter a valid email address';
    }

    if (!formData.parentPhone.trim()) {
      errors.parentPhone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.parentPhone.replace(/[^0-9]/g, ''))) {
      errors.parentPhone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.childName.trim()) errors.childName = 'Child name is required';
    if (!formData.childDob) errors.childDob = 'Child date of birth is required';
    
    if (calculatedAge) {
      if (calculatedAge.error) {
        errors.childDob = calculatedAge.error;
      } else {
        const totalMonths = calculatedAge.years * 12 + calculatedAge.months;
        if (totalMonths < 18 || totalMonths > 120) {
          errors.childDob = 'Age must be between 1.5 and 10 years old for our preschool and after-school programs.';
        }
      }
    }

    if (!formData.preferredDate) errors.preferredDate = 'Please select a preferred admission date';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  // Form Reset
  const handleReset = () => {
    setFormData({
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      childName: '',
      childDob: '',
      selectedProgram: 'playgroup',
      preferredDate: '',
      message: ''
    });
    setCalculatedAge(null);
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#7B61FF]/20 selection:text-[#7B61FF]">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#B5FF6D] p-[2px] shadow-md shadow-[#7B61FF]/10">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-bold text-lg text-[#7B61FF]">
                SK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">STEM KIDS</span>
              <span className="text-[10px] font-bold text-[#7B61FF] tracking-wider uppercase mt-1">Preschool Tolichowki</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <a href="#about" className="hover:text-[#7B61FF] transition-colors">Philosophy</a>
            <a href="#programs" className="hover:text-[#7B61FF] transition-colors">Curriculum</a>
            <a href="#facilities" className="hover:text-[#7B61FF] transition-colors">Gallery</a>
            <a href="#estimator" className="hover:text-[#7B61FF] transition-colors">Fees</a>
            <a href="#testimonials" className="hover:text-[#7B61FF] transition-colors">Reviews</a>
          </div>

          <a 
            href="#enquiry-form" 
            className="bg-gradient-to-r from-[#7B61FF] to-[#6348EE] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-[#7B61FF]/20 hover:shadow-lg hover:shadow-[#7B61FF]/30 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-6 overflow-hidden bg-[radial-gradient(#e0dbff_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#7B61FF]/10 to-transparent rounded-full filter blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-gradient-to-tr from-[#B5FF6D]/15 to-transparent rounded-full filter blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B61FF]/20 text-[#7B61FF] font-bold text-xs mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B5FF6D] animate-pulse"></span>
              Admissions Open 2026-27
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Nurturing the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] to-[#6348EE]">Innovators of Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              STEM Kids is Tolichowki’s premier tech-bright preschool. We integrate play, science, engineering, and digital thinking to unlock your child’s creative superpower.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#enquiry-form" 
                className="px-8 py-4 rounded-full bg-[#7B61FF] text-white font-bold text-base hover:bg-[#6348EE] shadow-lg shadow-[#7B61FF]/20 hover:-translate-y-0.5 transition-all text-center"
              >
                Schedule Campus Tour
              </a>
              <a 
                href="#programs" 
                className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-base hover:border-slate-300 transition-all text-center"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            {/* Visual Signature Element: A futuristic Tech Card with overlapping frames */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#B5FF6D] rounded-3xl rotate-3 scale-95 blur-sm opacity-30"></div>
              <div className="relative bg-white border-2 border-[#7B61FF]/20 rounded-3xl overflow-hidden shadow-2xl p-4">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Child interacting with robotic toys"
                  className="w-full h-72 object-cover rounded-2xl mb-4"
                />
                
                {/* STEM Terminal - Visual Signature */}
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-lime-400 border border-slate-800 shadow-inner">
                  <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <span className="text-slate-500 text-[10px] ml-2">stem-kids-kernel.js</span>
                  </div>
                  <p className="text-slate-400">// Tolichowki Early Learning Protocol</p>
                  <p className="mt-1"><span className="text-[#7B61FF]">const</span> child = <span className="text-white">{"{"}</span></p>
                  <p className="pl-4">curiosity: <span className="text-yellow-300">'maximum'</span>,</p>
                  <p className="pl-4">methodology: <span className="text-yellow-300">'hands-on-play'</span>,</p>
                  <p className="pl-4">codingSkills: <span className="text-yellow-300">'scratch-jr'</span></p>
                  <p className="text-white">{"};"}</p>
                  <p className="mt-1">child.<span className="text-[#B5FF6D]">exploreAndGrow</span>();</p>
                  <p className="text-slate-400">// Status: Ready to build the future</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white border border-[#7B61FF]/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#7B61FF]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Best STEM School</p>
                  <p className="font-extrabold text-sm text-slate-800">Hyderabad Region 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:border-r border-slate-100 last:border-none">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">5+</p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Years Est. in Tolichowki</p>
            </div>
            <div className="text-center md:border-r border-slate-100 last:border-none">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#7B61FF]">450+</p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Future Innovators</p>
            </div>
            <div className="text-center md:border-r border-slate-100 last:border-none">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">24+</p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Tech & Play Zones</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#7B61FF]">98.5%</p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Parent Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-20 md:py-28 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
              Science & Play to Shape Dynamic Young Thinkers
            </h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed">
              We believe early learning should mirror the scientific method: question, explore, test, and adapt. Our classrooms are environments where imagination meets engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#7B61FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#7B61FF] mb-6">
                <Atom className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Immersive Science</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Children perform age-appropriate physical experiments, understanding gravity, water pressure, and magnetism by hand.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#7B61FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center text-lime-700 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Robotics & Block Code</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Using wooden block programs, we construct early algorithmic paths to nurture computational logic and active troubleshooting.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#7B61FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#7B61FF] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Low Ratio Mentoring</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We maintain a 1:8 teacher-to-child ratio in Tolichowki, securing customized emotional warmth and intellectual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Programs Section */}
      <section id="programs" className="py-20 md:py-28 px-6 bg-slate-50/50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Our Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Programs Tailored for Little Explorers
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              A comprehensive educational suite built to adapt as kids grow physically, emotionally, and digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div 
                  key={prog.id} 
                  className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7B61FF]/10 to-[#7B61FF]/5 flex items-center justify-center text-[#7B61FF]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#7B61FF] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                        {prog.ageRange}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{prog.name}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{prog.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Highlights</p>
                      {prog.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                          <Check className="w-4 h-4 text-[#7B61FF] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Monthly Tuition:</span>
                    <span className="font-extrabold text-[#7B61FF] text-sm">₹{prog.baseFee.toLocaleString('en-IN')}/mo</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <section id="facilities" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Modern Campus
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Where Discovery Has Space to Breathe
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              A curated physical environment designed to trigger questions, secure physical safety, and promote teamwork.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" 
                alt="Interactive STEM Classroom"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Modern Classrooms</h4>
                <p className="text-slate-200 text-xs mt-1">Smart tech boards and ergonomics</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=600" 
                alt="Robotics & Mechanics Studio"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Robotics Lab</h4>
                <p className="text-slate-200 text-xs mt-1">Real motors, gears, and block coding</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=600" 
                alt="Indoor Adventure Play Zone"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Play Zone</h4>
                <p className="text-slate-200 text-xs mt-1">Physical agility and safety netting</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600" 
                alt="Visual & Creative Art Atelier"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Art Atelier</h4>
                <p className="text-slate-200 text-xs mt-1">Color workshops and sensory drawing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Estimator Section */}
      <section id="estimator" className="py-20 md:py-28 px-6 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Fee Estimator
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Interactive Bill Planner
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Customize tuition choices and add-ons to build your child's monthly and term billing breakdown.
            </p>
          </div>

          <div className="bg-white border-2 border-[#7B61FF]/10 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
            {/* Control Panel */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#7B61FF] rounded-full"></span>
                Select Options
              </h3>

              {/* Programs radio */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  1. Preschool / Club Program
                </label>
                <div className="space-y-2">
                  {PROGRAMS.map((p) => (
                    <label 
                      key={p.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedProgram === p.id 
                          ? 'border-[#7B61FF] bg-[#7B61FF]/5 text-slate-900 font-bold' 
                          : 'border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="est-program" 
                          value={p.id}
                          checked={selectedProgram === p.id}
                          onChange={() => setSelectedProgram(p.id)}
                          className="text-[#7B61FF] focus:ring-[#7B61FF] h-4 w-4 border-slate-300"
                        />
                        <span className="text-sm">{p.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">₹{p.baseFee}/mo</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Addons checkbox */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  2. Select Add-on Amenities
                </label>
                <div className="space-y-2">
                  {ADDONS.map((a) => (
                    <label 
                      key={a.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedAddons.includes(a.id)
                          ? 'border-[#7B61FF] bg-[#7B61FF]/5 text-slate-900 font-bold' 
                          : 'border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={selectedAddons.includes(a.id)}
                          onChange={() => handleAddonToggle(a.id)}
                          className="rounded text-[#7B61FF] focus:ring-[#7B61FF] h-4 w-4 border-slate-300"
                        />
                        <span className="text-sm">{a.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">+₹{a.fee}/mo</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculations Display */}
            <div className="p-8 bg-slate-50/80 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#B5FF6D] rounded-full"></span>
                  Billing Summary
                </h3>

                <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Selected Program ({activeProg.name})</span>
                    <span className="text-sm font-bold text-slate-900">₹{basePrice.toLocaleString('en-IN')}/mo</span>
                  </div>

                  {selectedAddons.length > 0 ? (
                    <div className="pb-3 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Selected Add-ons</p>
                      {ADDONS.filter(a => selectedAddons.includes(a.id)).map(a => (
                        <div key={a.id} className="flex justify-between items-center text-xs text-slate-600 mt-1">
                          <span>{a.name}</span>
                          <span>+₹{a.fee.toLocaleString('en-IN')}/mo</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pb-3 border-b border-slate-100 text-xs text-slate-400 italic">
                      No add-on amenities selected
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-bold text-slate-800">Monthly Total</span>
                    <span className="text-xl font-extrabold text-[#7B61FF]">₹{monthlyTotal.toLocaleString('en-IN')}/mo</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#7B61FF] to-[#6348EE] rounded-2xl p-6 text-white shadow-lg shadow-[#7B61FF]/15">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-purple-200">Term Package Price</p>
                      <p className="text-[10px] text-purple-100 mt-0.5">*Includes 3 months tuition + 5% discount</p>
                    </div>
                    <span className="text-xs font-bold bg-[#B5FF6D] text-slate-900 px-2 py-0.5 rounded-full uppercase">
                      Best Value
                    </span>
                  </div>
                  <p className="text-3xl font-extrabold mt-4">
                    ₹{termTotal.toLocaleString('en-IN')}
                    <span className="text-sm font-normal text-purple-200"> / Term</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="#enquiry-form"
                  onClick={() => setFormData(prev => ({ ...prev, selectedProgram }))}
                  className="inline-flex items-center gap-2 text-[#7B61FF] font-bold text-sm hover:text-[#6348EE] transition-colors"
                >
                  Proceed with this estimate
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Trusted by Tolichowki Parents
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Read how our next-gen learning framework shapes active curiosity in young minds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#7B61FF]/20 transition-all">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "My son’s logical abilities have improved significantly since starting STEM Kids. He builds robots with Lego blocks and talks about gravity. The teachers here are truly visionary!"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-sm">Dr. Syed Rahman</p>
                <p className="text-xs text-slate-400">Parent of Syed Jafar (LKG), Tolichowki</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#7B61FF]/20 transition-all">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "The safety protocols in STEM Kids are stellar. The check-ins, cameras, and warm environment gave me full peace of mind. Their daycare program is extremely well structured."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-sm">Fatima Begum</p>
                <p className="text-xs text-slate-400">Parent of Maryam (Nursery), MD Lines</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#7B61FF]/20 transition-all">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "I was initially skeptical of introducing robotics concepts to a 5-year-old, but the program is completely play-based and active. She looks forward to her Saturday STEM club sessions every week."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-sm">Rohit Patel</p>
                <p className="text-xs text-slate-400">Parent of Anya (UKG), Galaxy Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 md:py-28 px-6 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-[#7B61FF]/10 rounded-3xl shadow-xl p-8 sm:p-12">
            
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    Admission Form
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                    Apply for Admissions 2026-27
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    Submit the form below and our Admissions Officer will call you back within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Parent's Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 ${
                          formErrors.parentName ? 'border-red-500' : 'border-slate-200 focus:border-[#7B61FF]'
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.parentName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.parentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentEmail: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 ${
                          formErrors.parentEmail ? 'border-red-500' : 'border-slate-200 focus:border-[#7B61FF]'
                        }`}
                        placeholder="parent@email.com"
                      />
                      {formErrors.parentEmail && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.parentEmail}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentPhone: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 ${
                          formErrors.parentPhone ? 'border-red-500' : 'border-slate-200 focus:border-[#7B61FF]'
                        }`}
                        placeholder="9876543210"
                      />
                      {formErrors.parentPhone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.parentPhone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Child's Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.childName}
                        onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 ${
                          formErrors.childName ? 'border-red-500' : 'border-slate-200 focus:border-[#7B61FF]'
                        }`}
                        placeholder="Baby Doe"
                      />
                      {formErrors.childName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.childName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Child's Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date"
                        value={formData.childDob}
                        onChange={handleDobChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 ${
                          formErrors.childDob ? 'border-red-500' : 'border-slate-200 focus:border-[#7B61FF]'
                        }`}
                      />
                      {formErrors.childDob && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.childDob}
                        </p>
                      )}
                      {calculatedAge && !calculatedAge.error && (
                        <p className="text-[#7B61FF] text-xs font-bold mt-1.5 flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5" />
                          Calculated Age: {calculatedAge.years} Years, {calculatedAge.months} Months
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Program of Interest <span className="text-red-500">*</span>
                      </label>
                      <select 
                        value={formData.selectedProgram}
                        onChange={(e) => setFormData(prev => ({ ...prev, selectedProgram: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 focus:border-[#7B61FF]"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.id}>{p.name} ({p.ageRange})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Preferred Admission Date <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 ${
                        formErrors.preferredDate ? 'border-red-500' : 'border-slate-200 focus:border-[#7B61FF]'
                      }`}
                    />
                    {formErrors.preferredDate && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.preferredDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Additional Messages / Dietary Requirements
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 focus:border-[#7B61FF] h-28 resize-none"
                      placeholder="Please note any dietary preferences, physical requirements, or concerns..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#6348EE] text-white font-extrabold tracking-wide hover:shadow-lg hover:shadow-[#7B61FF]/25 hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
                  >
                    Submit Enrollment Request
                  </button>
                </form>
              </>
            ) : (
              // Success Card
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-lime-100 text-lime-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold text-slate-900">Enquiry Submitted!</h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#7B61FF]">{formData.parentName}</span>. Your enquiry for <span className="font-bold text-slate-900">{formData.childName}</span> has been securely logged.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-left text-sm max-w-md mx-auto space-y-3 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Child's Calculated Age:</span>
                    <span className="font-bold text-slate-700">{calculatedAge.years}y {calculatedAge.months}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Program:</span>
                    <span className="font-bold text-slate-700 uppercase">{formData.selectedProgram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Preferred Date:</span>
                    <span className="font-bold text-slate-700">{formData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Registered Phone:</span>
                    <span className="font-bold text-slate-700">{formData.parentPhone}</span>
                  </div>
                </div>

                <p className="text-slate-500 text-xs">
                  An email confirmation has been dispatched to {formData.parentEmail}.
                </p>

                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-500 font-bold text-xs hover:bg-slate-50 hover:text-slate-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* Contact & Location Footer Section */}
      <footer className="bg-slate-900 text-white rounded-t-[3.5rem] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#B5FF6D] p-[2px]">
                  <div className="w-full h-full bg-slate-900 rounded-[9px] flex items-center justify-center font-bold text-[#7B61FF]">
                    SK
                  </div>
                </div>
                <span className="font-extrabold text-lg tracking-tight">STEM KIDS</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering Hyderabad's youngest learners with hands-on, technological enquiry. Building tomorrow's critical problem-solvers.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B5FF6D]" />
                  <span>+91 90001 98765</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B5FF6D]" />
                  <span>tolichowki@stemkids.edu.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#B5FF6D]" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>

            {/* Column 2: Location */}
            <div className="space-y-6">
              <h3 className="font-bold text-[#B5FF6D] tracking-wide text-sm uppercase">Tolichowki Campus</h3>
              <div className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-5 h-5 text-[#B5FF6D] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  12-2-417/A, MD Lines, <br />
                  Near Galaxy Theatre Road, <br />
                  Tolichowki, Hyderabad, 500008, Telangana.
                </p>
              </div>
              <p className="text-slate-400 text-xs">
                *Centrally located in Tolichowki, with dedicated parking and a secure, gated perimeter for student drop-offs.
              </p>
            </div>

            {/* Column 3: Mock Interactive Map */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#B5FF6D] tracking-wide text-sm uppercase">Campus Map Pointer</h3>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-48 bg-slate-950">
                {/* Visual Representation of Map */}
                <div className="absolute inset-0 bg-[#1e293b] flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-[#7B61FF] animate-bounce mb-2" />
                  <p className="font-bold text-xs text-white">STEM Kids Tolichowki</p>
                  <p className="text-[10px] text-slate-400 mt-1">Galaxy Theatre Road, MD Lines</p>
                  
                  {/* Styled mock map lines */}
                  <div className="absolute top-8 left-0 w-full h-[2px] bg-slate-800 rotate-12"></div>
                  <div className="absolute top-24 left-0 w-full h-[2px] bg-slate-800 -rotate-6"></div>
                  <div className="absolute top-0 left-1/3 w-[2px] h-full bg-slate-800"></div>
                  <div className="absolute top-0 left-2/3 w-[2px] h-full bg-slate-800"></div>
                </div>
                
                {/* External link fallback button */}
                <a 
                  href="https://maps.google.com/?q=Tolichowki+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-slate-900/90 text-white border border-slate-700 hover:bg-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-850 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} STEM Kids Preschool. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#about" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

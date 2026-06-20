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
  AlertCircle,
  CheckCircle,
  BookOpen,
  Heart,
  Smile,
  Palette,
  Shield,
  Footprints,
  Baby
} from 'lucide-react';

import { Lato, Lora } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// Visual Signature Element: Custom Bear Paw motif built with Tailwind shapes
const BearPaw = ({ className = "w-6 h-6" }) => (
  <div className={`relative flex flex-col items-center justify-center shrink-0 ${className}`}>
    {/* Toes */}
    <div className="flex gap-[3px] mb-[2px]">
      <div className="w-1.5 h-1.5 bg-[#C0392B] rounded-full"></div>
      <div className="w-1.5 h-2 bg-[#C0392B] rounded-full -translate-y-[2px]"></div>
      <div className="w-1.5 h-2 bg-[#C0392B] rounded-full -translate-y-[2px]"></div>
      <div className="w-1.5 h-1.5 bg-[#C0392B] rounded-full"></div>
    </div>
    {/* Main pad */}
    <div className="w-5 h-4 bg-[#C0392B] rounded-full shadow-sm"></div>
  </div>
);

const PROGRAMS = [
  {
    id: 'playgroup',
    name: 'Toddler Playgroup',
    ageRange: '1.5 – 2.5 Years',
    baseFee: 7000,
    icon: Baby,
    description: 'Immersive exploration, bear-hug circle times, and gross motor play in a safe, warm space.',
    highlights: ['Sensory learning centers', 'Motor coordination play', 'Cozy read-aloud sessions']
  },
  {
    id: 'nursery',
    name: 'Preschool Nursery',
    ageRange: '2.5 – 3.5 Years',
    baseFee: 7500,
    icon: Smile,
    description: 'Bilingual language stimulation, nature walks, and creative craft building.',
    highlights: ['Bilingual storytelling', 'Social sharing projects', 'Fine motor coordination']
  },
  {
    id: 'lkg',
    name: 'Junior Kindergarten (LKG)',
    ageRange: '3.5 – 4.5 Years',
    baseFee: 8000,
    icon: BookOpen,
    description: 'Introducing early mathematical thoughts, writing skills, and creative paint workshops.',
    highlights: ['Canadian curriculum reading prep', 'Early math logic labs', 'Individual art studios']
  },
  {
    id: 'ukg',
    name: 'Senior Kindergarten (UKG)',
    ageRange: '4.5 – 5.5 Years',
    baseFee: 8500,
    icon: Shield,
    description: 'Advanced bilingual communication, junior science labs, and community leadership drills.',
    highlights: ['Structured reading & writing', 'Elementary science walks', 'Team building games']
  },
  {
    id: 'daycare',
    name: 'Cozy Daycare',
    ageRange: '2.0 – 8.0 Years',
    baseFee: 5500,
    icon: Heart,
    description: 'A loving secondary home with warm organic meals, secure rest suites, and guided crafts.',
    highlights: ['Freshly cooked hot meals', 'Clean rest suites', 'Post-school tutoring support']
  },
  {
    id: 'afterschool',
    name: 'Creative Club',
    ageRange: '4.0 – 10.0 Years',
    baseFee: 4500,
    icon: Palette,
    description: 'Weekly creative arts workshops covering kids music, pottery, dance, and speech.',
    highlights: ['Bilingual speech club', 'Clay modeling & crafts', 'Music & movement class']
  }
];

const ADDONS = [
  { id: 'bilingual', name: 'Canadian Bilingual Materials & Books', fee: 1000 },
  { id: 'meals', name: 'Organic Hot Lunch & Snacks Program', fee: 2200 },
  { id: 'transport', name: 'Secure School Cab Service (GPS & Attendant)', fee: 1800 }
];

export default function MapleBearPage() {
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

  // Handle Fee Addons Toggle
  const handleAddonToggle = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Active program calculations
  const activeProg = PROGRAMS.find(p => p.id === selectedProgram) || PROGRAMS[0];
  const basePrice = activeProg.baseFee;
  const addonCost = ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((acc, curr) => acc + curr.fee, 0);
  const monthlyTotal = basePrice + addonCost;
  const termTotal = Math.round(monthlyTotal * 3 * 0.95); // 3 months with 5% discount

  // DOB Change & Age Calculation
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
          errors.childDob = 'Age must be between 1.5 and 10 years old for our early learning programs.';
        }
      }
    }

    if (!formData.preferredDate) errors.preferredDate = 'Please select a preferred admission date';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Enquiry
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  // Reset Form
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
    <div className={`bg-[#FFFDF6] text-[#2C1810] selection:bg-[#C0392B]/10 selection:text-[#C0392B] ${lora.className} antialiased`}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FFFDF6]/90 backdrop-blur-md border-b border-[#2C1810]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#C0392B] flex items-center justify-center shadow-md">
              <BearPaw className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-xl tracking-tight text-[#C0392B] leading-none ${lato.className}`}>MAPLE BEAR</span>
              <span className="text-[10px] font-bold text-amber-800 tracking-wider uppercase mt-1">Canadian Preschool</span>
            </div>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 font-bold text-[#2C1810]/80 text-sm ${lato.className}`}>
            <a href="#about" className="hover:text-[#C0392B] transition-colors">About Us</a>
            <a href="#programs" className="hover:text-[#C0392B] transition-colors">Programs</a>
            <a href="#facilities" className="hover:text-[#C0392B] transition-colors">Campus</a>
            <a href="#estimator" className="hover:text-[#C0392B] transition-colors">Fees</a>
            <a href="#testimonials" className="hover:text-[#C0392B] transition-colors">Reviews</a>
          </div>

          <a 
            href="#enquiry-form" 
            className={`bg-[#C0392B] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-[#C0392B]/20 hover:bg-[#A82A1E] transition-all hover:scale-[1.02] active:scale-[0.98] ${lato.className}`}
          >
            Enroll Cub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-6 overflow-hidden bg-[radial-gradient(#F5EDE0_1.5px,transparent_1.5px)] [background-size:24px_24px]">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-100/35 to-transparent rounded-full filter blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-gradient-to-tr from-[#C0392B]/5 to-transparent rounded-full filter blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-[#C0392B]/20 text-[#C0392B] font-bold text-xs mb-6 shadow-sm ${lato.className}`}>
              <BearPaw className="w-4 h-4" />
              Admissions Open 2026-27
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-[#2C1810] ${lato.className}`}>
              Nurturing Curious Minds, <br className="hidden sm:inline" />
              <span className="text-[#C0392B]">The Canadian Way</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Maple Bear Tolichowki offers a bilingual, inquiry-driven, play-centered curriculum. Grounded in Canada's world-class early learning practices, we provide a warm home for young cubs.
            </p>
            <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 ${lato.className}`}>
              <a 
                href="#enquiry-form" 
                className="px-8 py-4 rounded-full bg-[#C0392B] text-white font-bold text-base hover:bg-[#A82A1E] shadow-lg shadow-[#C0392B]/20 transition-all text-center"
              >
                Book a Visit
              </a>
              <a 
                href="#programs" 
                className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-base hover:border-slate-355 transition-all text-center"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            {/* Visual Signature Element: Warm wooden frame layout with overlapping bear paws */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#E8DFC8] rounded-[2.5rem] rotate-2 scale-98 shadow-sm"></div>
              <div className="relative bg-[#FAF5E6] border-4 border-[#C0392B]/35 rounded-[2.5rem] overflow-hidden shadow-2xl p-5">
                <div className="relative rounded-[1.8rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" 
                    alt="Preschool children learning and playing"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 to-transparent"></div>
                </div>

                {/* Overlapping bear paw trail */}
                <div className="flex justify-between items-center mt-5 bg-white rounded-2xl p-4 border border-amber-900/10">
                  <div className="flex items-center gap-3">
                    <BearPaw className="w-8 h-8" />
                    <div>
                      <p className={`text-[10px] font-bold text-amber-800 uppercase tracking-wide ${lato.className}`}>Canadian Standard</p>
                      <p className={`font-black text-sm text-[#2C1810] ${lato.className}`}>Bilingual Inquiry Protocol</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-200"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B]"></span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white border border-[#C0392B]/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#C0392B]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-[10px] font-bold text-amber-700 uppercase tracking-wide ${lato.className}`}>Global Network</p>
                  <p className={`font-black text-xs text-[#2C1810] ${lato.className}`}>500+ Campuses Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:border-r border-slate-100 last:border-none">
              <p className={`text-3xl sm:text-4xl font-extrabold text-[#2C1810] ${lato.className}`}>8+</p>
              <p className={`text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 ${lato.className}`}>Years Est. in Tolichowki</p>
            </div>
            <div className="text-center md:border-r border-slate-100 last:border-none">
              <p className={`text-3xl sm:text-4xl font-extrabold text-[#C0392B] ${lato.className}`}>380+</p>
              <p className={`text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 ${lato.className}`}>Happy Graduates</p>
            </div>
            <div className="text-center md:border-r border-slate-100 last:border-none">
              <p className={`text-3xl sm:text-4xl font-extrabold text-[#2C1810] ${lato.className}`}>1:7</p>
              <p className={`text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 ${lato.className}`}>Teacher-to-Student Ratio</p>
            </div>
            <div className="text-center">
              <p className={`text-3xl sm:text-4xl font-extrabold text-[#C0392B] ${lato.className}`}>99.2%</p>
              <p className={`text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 ${lato.className}`}>Parent Recommendation</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-20 md:py-28 px-6 bg-[#FFFDF6] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-xs font-bold text-[#C0392B] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 ${lato.className}`}>
              Our Philosophy
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold text-[#2C1810] mt-4 leading-tight ${lato.className}`}>
              World-Class Canadian Standards for Early Exploration
            </h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed">
              We design our environments with warm woods, cozy fabrics, and organic structures, enabling children to feel emotionally secure as they initiate critical physical and language lessons.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-[#FAF5E6] border border-amber-900/10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#C0392B] mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold text-[#2C1810] mb-3 ${lato.className}`}>Bilingual Enrichment</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Nurturing native-level fluency in multiple languages by using structured daily immersion practices.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#FAF5E6] border border-amber-900/10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#C0392B] mb-6">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold text-[#2C1810] mb-3 ${lato.className}`}>Inquiry-Based Learning</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Children search for answers by active physical discovery, reinforcing internal memory and critical thinking skills.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#FAF5E6] border border-amber-900/10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#C0392B] mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold text-[#2C1810] mb-3 ${lato.className}`}>Secure Nurture Zones</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We maintain round-the-clock safety gates, CCTV monitoring, and soft interior guards throughout our Tolichowki campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Programs Section */}
      <section id="programs" className="py-20 md:py-28 px-6 bg-[#F7F2E8] border-t border-amber-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-xs font-bold text-[#C0392B] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 ${lato.className}`}>
              Curriculum Suite
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold text-[#2C1810] mt-4 ${lato.className}`}>
              Early Learning Programs
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Explore our comprehensive programs tailored for developmental milestones from toddlers to elementary age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div 
                  key={prog.id} 
                  className="bg-white border border-amber-900/10 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#C0392B]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold text-[#C0392B] bg-red-50 border border-red-100 px-3 py-1 rounded-full ${lato.className}`}>
                        {prog.ageRange}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold text-[#2C1810] mb-2 ${lato.className}`}>{prog.name}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{prog.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Highlights</p>
                      {prog.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                          <BearPaw className="w-4 h-4" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-slate-100 bg-[#FAF5E6]/40 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Monthly Fee:</span>
                    <span className={`font-black text-[#C0392B] text-sm ${lato.className}`}>₹{prog.baseFee.toLocaleString('en-IN')}/mo</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <section id="facilities" className="py-20 md:py-28 px-6 bg-[#FFFDF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-xs font-bold text-[#C0392B] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 ${lato.className}`}>
              Lush Campus
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold text-[#2C1810] mt-4 ${lato.className}`}>
              A Loving Home for Play
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              A physical preview of our nurturing spaces, classrooms, and outdoor garden in Tolichowki.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative rounded-[2rem] overflow-hidden shadow-md aspect-square bg-[#FAF5E6]">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" 
                alt="Cozy Classroom Classroom"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Cozy Classrooms</h4>
                <p className="text-amber-100 text-xs mt-1">Wooden structures and soft lights</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative rounded-[2rem] overflow-hidden shadow-md aspect-square bg-[#FAF5E6]">
              <img 
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600" 
                alt="Outdoor Nature Garden"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Lush Play Yard</h4>
                <p className="text-amber-100 text-xs mt-1">Green lawns and safety sandboxes</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative rounded-[2rem] overflow-hidden shadow-md aspect-square bg-[#FAF5E6]">
              <img 
                src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=600" 
                alt="Cozy Bear Reading Nook"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Reading Corner</h4>
                <p className="text-amber-100 text-xs mt-1">Nurturing books and beanbags</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative rounded-[2rem] overflow-hidden shadow-md aspect-square bg-[#FAF5E6]">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600" 
                alt="Art and Paint Atelier"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-white text-base">Creative Atelier</h4>
                <p className="text-amber-100 text-xs mt-1">Natural dyes and clay sculpting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Estimator Section */}
      <section id="estimator" className="py-20 md:py-28 px-6 bg-[#F7F2E8] border-y border-amber-900/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-xs font-bold text-[#C0392B] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 ${lato.className}`}>
              Estimator
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold text-[#2C1810] mt-4 ${lato.className}`}>
              Fee Calculator
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Calculate base tuition packages and add-ons to preview custom billing summaries.
            </p>
          </div>

          <div className="bg-white border border-amber-900/10 rounded-[2.5rem] shadow-xl overflow-hidden grid md:grid-cols-2">
            {/* Options Selection */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className={`font-extrabold text-[#2C1810] text-lg mb-6 flex items-center gap-2 ${lato.className}`}>
                <BearPaw className="w-5 h-5" />
                Select Options
              </h3>

              {/* Program list */}
              <div className="mb-6">
                <label className={`block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 ${lato.className}`}>
                  1. Early Learning Program
                </label>
                <div className="space-y-2">
                  {PROGRAMS.map((p) => (
                    <label 
                      key={p.id}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedProgram === p.id 
                          ? 'border-[#C0392B] bg-[#C0392B]/5 text-[#2C1810] font-bold' 
                          : 'border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="maple-program" 
                          value={p.id}
                          checked={selectedProgram === p.id}
                          onChange={() => setSelectedProgram(p.id)}
                          className="text-[#C0392B] focus:ring-[#C0392B] h-4 w-4 border-slate-350"
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
                <label className={`block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 ${lato.className}`}>
                  2. Select Add-on Programs
                </label>
                <div className="space-y-2">
                  {ADDONS.map((a) => (
                    <label 
                      key={a.id}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedAddons.includes(a.id)
                          ? 'border-[#C0392B] bg-[#C0392B]/5 text-[#2C1810] font-bold' 
                          : 'border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={selectedAddons.includes(a.id)}
                          onChange={() => handleAddonToggle(a.id)}
                          className="rounded text-[#C0392B] focus:ring-[#C0392B] h-4 w-4 border-slate-350"
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
            <div className="p-8 bg-[#FAF6EE] flex flex-col justify-between">
              <div>
                <h3 className={`font-extrabold text-[#2C1810] text-lg mb-6 flex items-center gap-2 ${lato.className}`}>
                  <BearPaw className="w-5 h-5" />
                  Billing Details
                </h3>

                <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-sm space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Base Tuition ({activeProg.name})</span>
                    <span className="text-sm font-bold text-slate-900">₹{basePrice.toLocaleString('en-IN')}/mo</span>
                  </div>

                  {selectedAddons.length > 0 ? (
                    <div className="pb-3 border-b border-slate-100">
                      <p className={`text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 ${lato.className}`}>Selected Add-ons</p>
                      {ADDONS.filter(a => selectedAddons.includes(a.id)).map(a => (
                        <div key={a.id} className="flex justify-between items-center text-xs text-slate-600 mt-1">
                          <span>{a.name}</span>
                          <span>+₹{a.fee.toLocaleString('en-IN')}/mo</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pb-3 border-b border-slate-100 text-xs text-slate-400 italic">
                      No add-on elements selected
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-bold text-slate-800">Monthly Total</span>
                    <span className={`text-xl font-black text-[#C0392B] ${lato.className}`}>₹{monthlyTotal.toLocaleString('en-IN')}/mo</span>
                  </div>
                </div>

                <div className="bg-[#C0392B] rounded-3xl p-6 text-white shadow-xl shadow-red-900/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider text-red-100 ${lato.className}`}>Term Booking Total</p>
                      <p className="text-[10px] text-red-200 mt-0.5">*Includes 3 months + 5% Term discount</p>
                    </div>
                    <span className={`text-xs font-bold bg-[#FAF6EE] text-[#C0392B] px-2 py-0.5 rounded-full uppercase ${lato.className}`}>
                      Best Value
                    </span>
                  </div>
                  <p className={`text-3xl font-black mt-4 ${lato.className}`}>
                    ₹{termTotal.toLocaleString('en-IN')}
                    <span className="text-sm font-normal text-red-200"> / Term</span>
                  </p>
                </div>
              </div>

              <div className={`mt-8 text-center ${lato.className}`}>
                <a 
                  href="#enquiry-form"
                  onClick={() => setFormData(prev => ({ ...prev, selectedProgram }))}
                  className="inline-flex items-center gap-2 text-[#C0392B] font-bold text-sm hover:text-[#A82A1E] transition-colors"
                >
                  Apply with this calculation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 px-6 bg-[#FFFDF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-xs font-bold text-[#C0392B] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 ${lato.className}`}>
              Testimonials
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold text-[#2C1810] mt-4 ${lato.className}`}>
              Reviews from Rethibowli & Tolichowki
            </h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Discover why parents trust Maple Bear to guide their child's early developmental years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-8 rounded-[2rem] border border-amber-900/10 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "The bilingual learning approach is simply amazing. My daughter has picked up both English and regional vocabulary with complete comfort. The teachers are very affectionate!"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className={`font-bold text-[#2C1810] text-sm ${lato.className}`}>Mrs. Syeda Zubaida</p>
                <p className="text-xs text-slate-400">Parent of Syeda Fatima (LKG), Tolichowki</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 rounded-[2rem] border border-amber-900/10 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "Maple Bear feels like a extension of our own home. My son absolutely loves the outdoor garden playground and sandy play area. Excellent safety gates."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className={`font-bold text-[#2C1810] text-sm ${lato.className}`}>Imran Siddiqui</p>
                <p className="text-xs text-slate-400">Parent of Yusuf (Nursery), Rethibowli</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-8 rounded-[2rem] border border-amber-900/10 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "Highly secure facilities, delicious warm food, and patient daycare staff. The transitioning support they offered to my 2-year-old was extremely warm."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className={`font-bold text-[#2C1810] text-sm ${lato.className}`}>Dr. Ananya Rao</p>
                <p className="text-xs text-slate-400">Parent of Anya (Playgroup), Tolichowki</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 md:py-28 px-6 bg-[#F7F2E8] border-t border-amber-900/10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-amber-900/10 rounded-[2.5rem] shadow-xl p-8 sm:p-12">
            
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <span className={`text-xs font-bold text-[#C0392B] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 ${lato.className}`}>
                    Enquiry Form
                  </span>
                  <h2 className={`text-3xl font-extrabold text-[#2C1810] mt-4 ${lato.className}`}>
                    Apply for Admissions 2026-27
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    Enter details below to log your cub's admissions application.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                        Parent's Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 ${
                          formErrors.parentName ? 'border-red-500' : 'border-slate-200 focus:border-[#C0392B]'
                        }`}
                        placeholder="Parent Name"
                      />
                      {formErrors.parentName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.parentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentEmail: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 ${
                          formErrors.parentEmail ? 'border-red-500' : 'border-slate-200 focus:border-[#C0392B]'
                        }`}
                        placeholder="parent@example.in"
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
                      <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentPhone: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 ${
                          formErrors.parentPhone ? 'border-red-500' : 'border-slate-200 focus:border-[#C0392B]'
                        }`}
                        placeholder="10-digit number"
                      />
                      {formErrors.parentPhone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.parentPhone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                        Child's Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.childName}
                        onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 ${
                          formErrors.childName ? 'border-red-500' : 'border-slate-200 focus:border-[#C0392B]'
                        }`}
                        placeholder="Cub's Name"
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
                      <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                        Child's Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date"
                        value={formData.childDob}
                        onChange={handleDobChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 ${
                          formErrors.childDob ? 'border-red-500' : 'border-slate-200 focus:border-[#C0392B]'
                        }`}
                      />
                      {formErrors.childDob && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.childDob}
                        </p>
                      )}
                      {calculatedAge && !calculatedAge.error && (
                        <p className="text-[#C0392B] text-xs font-bold mt-1.5 flex items-center gap-1">
                          <Footprints className="w-3.5 h-3.5" />
                          Calculated Age: {calculatedAge.years} Years, {calculatedAge.months} Months
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                        Program Dropdown <span className="text-red-500">*</span>
                      </label>
                      <select 
                        value={formData.selectedProgram}
                        onChange={(e) => setFormData(prev => ({ ...prev, selectedProgram: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 focus:border-[#C0392B]"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.id}>{p.name} ({p.ageRange})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                      Preferred Date of Admission <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 ${
                        formErrors.preferredDate ? 'border-red-500' : 'border-slate-200 focus:border-[#C0392B]'
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
                    <label className={`block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ${lato.className}`}>
                      Messages / Dietary Details
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C0392B]/10 focus:border-[#C0392B] h-28 resize-none"
                      placeholder="Please note any allergies, health conditions, or details..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className={`w-full py-4 rounded-xl bg-[#C0392B] hover:bg-[#A82A1E] text-white font-extrabold tracking-wide hover:shadow-lg transition-all ${lato.className}`}
                  >
                    Submit Enquiry Form
                  </button>
                </form>
              </>
            ) : (
              // Success Card
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-amber-100 text-[#C0392B] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h2 className={`text-3xl font-extrabold text-[#2C1810] ${lato.className}`}>Enquiry Submitted!</h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#C0392B]">{formData.parentName}</span>. Your application for <span className="font-bold text-slate-900">{formData.childName}</span> has been saved.
                  </p>
                </div>

                <div className="bg-[#FAF6EE] border border-amber-900/10 rounded-2xl p-6 text-left text-sm max-w-md mx-auto space-y-3 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Child's Age:</span>
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
                  We have sent an confirmation summary to {formData.parentEmail}.
                </p>

                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-500 font-bold text-xs hover:bg-slate-50 hover:text-slate-700 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* Contact & Location Footer Section */}
      <footer className="bg-[#2C1810] text-white rounded-t-[3.5rem] border-t border-amber-950/20">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center shadow-md">
                  <BearPaw className="w-6 h-6 text-white" />
                </div>
                <span className={`font-extrabold text-lg tracking-tight ${lato.className}`}>MAPLE BEAR</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bilingual play-centric inquiry classes. Bringing world-class Canadian preschool models to nurture independent young thinkers in Tolichowki.
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-200" />
                  <span>+91 91234 56789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-200" />
                  <span>tolichowki@maplebear.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-200" />
                  <span>Mon - Fri: 8:30 AM - 5:30 PM | Sat: 9:00 AM - 12:30 PM</span>
                </div>
              </div>
            </div>

            {/* Column 2: Location */}
            <div className="space-y-6">
              <h3 className={`font-bold text-amber-200 tracking-wide text-sm uppercase ${lato.className}`}>Tolichowki Campus</h3>
              <div className="flex items-start gap-3 text-slate-200 text-sm">
                <MapPin className="w-5 h-5 text-amber-200 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  12-2-720/1/C, Rethibowli Road, <br />
                  Beside Olive Hospital Lane, <br />
                  Tolichowki, Hyderabad, 500008, Telangana.
                </p>
              </div>
              <p className="text-slate-400 text-xs">
                *Located in Retibowli junction with close connectivity to main roads. Easy drop-off zones and round-the-clock safety attendants.
              </p>
            </div>

            {/* Column 3: Mock Interactive Map */}
            <div className="space-y-4">
              <h3 className={`font-bold text-amber-200 tracking-wide text-sm uppercase ${lato.className}`}>Campus Location</h3>
              <div className="relative rounded-[1.8rem] overflow-hidden border border-amber-900/10 h-48 bg-slate-900">
                {/* Visual Representation of Map */}
                <div className="absolute inset-0 bg-[#EFE8D8] flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-[#C0392B] animate-bounce mb-2" />
                  <p className={`font-bold text-xs text-[#2C1810] ${lato.className}`}>Maple Bear Preschool</p>
                  <p className="text-[10px] text-slate-500 mt-1">Beside Olive Hospital Road, Rethibowli</p>
                  
                  {/* Styled mock map lines */}
                  <div className="absolute top-12 left-0 w-full h-[2px] bg-amber-900/10 rotate-12"></div>
                  <div className="absolute top-20 left-0 w-full h-[2px] bg-amber-900/10 -rotate-6"></div>
                  <div className="absolute top-0 left-1/4 w-[2px] h-full bg-amber-900/10"></div>
                  <div className="absolute top-0 left-3/4 w-[2px] h-full bg-amber-900/10"></div>
                </div>
                
                {/* External link fallback button */}
                <a 
                  href="https://maps.google.com/?q=Tolichowki+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute bottom-3 right-3 bg-[#C0392B] text-white border border-[#C0392B]/10 hover:bg-[#A82A1E] px-3 py-1.5 rounded-lg text-[10px] font-bold transition-colors ${lato.className}`}
                >
                  Open Maps
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-amber-900/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <p>© {new Date().getFullYear()} Maple Bear Canadian Preschool. All rights reserved.</p>
            <div className={`flex gap-6 ${lato.className}`}>
              <a href="#about" className="hover:text-slate-200">Privacy Policy</a>
              <a href="#about" className="hover:text-slate-200">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

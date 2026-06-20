"use client";

import React, { useState, useEffect } from 'react';
import { 
  Smile, 
  Heart, 
  Sparkles, 
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
  Music, 
  Palette, 
  Check, 
  ChevronRight, 
  DollarSign, 
  Calculator,
  Compass,
  FileText
} from 'lucide-react';

export default function LittleEllyPage() {
  // Fee Estimator State
  const [selectedProgram, setSelectedProgram] = useState('playgroup');
  const [includeDaycare, setIncludeDaycare] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeMeals, setIncludeMeals] = useState(false);

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
    playgroup: { name: 'Playgroup', tuition: 45000, kit: 5000 },
    nursery: { name: 'Nursery', tuition: 50000, kit: 6000 },
    lkg: { name: 'LKG (Lower Kindergarten)', tuition: 55000, kit: 6500 },
    ukg: { name: 'UKG (Upper Kindergarten)', tuition: 60000, kit: 6500 },
    daycare: { name: 'Full-Day Daycare only', tuition: 35000, kit: 3000 },
    afterschool: { name: 'After School Programs', tuition: 15000, kit: 2000 }
  };

  const daycareCost = includeDaycare ? 12000 : 0;
  const transportCost = includeTransport ? 4500 : 0;
  const mealsCost = includeMeals ? 3500 : 0;

  const currentProgramFee = programFees[selectedProgram] || programFees.playgroup;
  const subtotalTerm = currentProgramFee.tuition + currentProgramFee.kit;
  const monthlyAddons = daycareCost + transportCost + mealsCost;
  const totalEstimatedTerm = subtotalTerm + (monthlyAddons * 4); // 4 months per term

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

  const handleCheckboxChange = (name, checked) => {
    if (name === 'daycare') setIncludeDaycare(checked);
    if (name === 'transport') setIncludeTransport(checked);
    if (name === 'meals') setIncludeMeals(checked);
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
    <div className="body-font text-slate-800">
      
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-[#C9B8FF] via-[#FFB3C6] to-[#AED9E0] text-slate-900 py-2 px-4 text-center text-sm font-semibold tracking-wide">
        🌈 Admissions Open for Academic Year 2026-27! Book a free trial class in Tolichowki.
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#C9B8FF] to-[#FFB3C6] flex items-center justify-center text-white shadow-md">
              <Smile className="w-7 h-7 stroke-[2]" />
            </div>
            <div>
              <span className="heading-font text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                Little Elly
              </span>
              <span className="block text-xs font-semibold text-purple-400 tracking-wider uppercase">Tolichowki</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <a href="#about" className="hover:text-purple-600 transition-colors">Philosophy</a>
            <a href="#programs" className="hover:text-purple-600 transition-colors">Programs</a>
            <a href="#facilities" className="hover:text-purple-600 transition-colors">Campus Tour</a>
            <a href="#fee-estimator" className="hover:text-purple-600 transition-colors">Fees</a>
            <a href="#testimonials" className="hover:text-purple-600 transition-colors">Reviews</a>
          </nav>

          <a 
            href="#enquiry" 
            className="bg-[#C9B8FF] text-[#1E1B4B] border-2 border-purple-400 hover:bg-[#FFB3C6] hover:border-pink-400 transition-all font-bold px-5 py-2.5 rounded-full text-sm shadow-[3px_3px_0px_#1E1B4B]"
          >
            Apply Now
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-pastel-gradient pt-16 pb-24 md:py-32 px-6">
        {/* Background elements */}
        <div className="absolute top-12 left-10 w-48 h-48 bg-[#C9B8FF]/20 rounded-full blur-3xl bubble-float"></div>
        <div className="absolute bottom-12 right-12 w-64 h-64 bg-[#FFB3C6]/20 rounded-full blur-3xl bubble-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-pink-200 px-4 py-1.5 rounded-full text-pink-600 font-bold text-sm tracking-wide shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Tolichowki's Premium Pastel Paradise
            </div>
            
            <h1 className="heading-font text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#1E1B4B] mb-6">
              Where Every Little Step is <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                Filled with Wonder
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium mb-8 max-w-xl leading-relaxed">
              Little Elly Tolichowki introduces a world of pastel colors, sensory playrooms, and child-safe environments where early concepts bloom naturally.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#enquiry" 
                className="bg-[#C9B8FF] text-[#1E1B4B] border-2 border-purple-400 hover:bg-[#FFB3C6] hover:border-pink-400 font-bold px-8 py-4 rounded-full text-lg shadow-[4px_4px_0px_#1E1B4B] transition-all flex items-center gap-2"
              >
                Schedule Campus Visit <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#fee-estimator" 
                className="bg-white text-slate-700 hover:bg-purple-50 font-bold px-8 py-4 rounded-full text-lg border-2 border-purple-200 hover:border-purple-300 transition-all flex items-center gap-2"
              >
                Calculate Fee
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Visual Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-3xl rotate-3 scale-[1.02] opacity-40 blur-sm"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-xl border-4 border-[#C9B8FF]">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" 
                alt="Children playing happily in a colorful learning space" 
                className="w-full h-[320px] md:h-[400px] object-cover rounded-2xl"
              />
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border-2 border-pink-200 shadow-lg rotate-[-3deg] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wide uppercase">Award-Winning</p>
                  <p className="font-extrabold text-[#1E1B4B] text-sm">Best Preschool Franchise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-white border-y border-purple-100 py-10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="text-center md:border-r border-purple-100 last:border-0 py-2">
            <div className="heading-font text-4xl md:text-5xl font-extrabold text-purple-600 mb-2">12+</div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Years Excellence</div>
          </div>

          <div className="text-center md:border-r border-purple-100 last:border-0 py-2">
            <div className="heading-font text-4xl md:text-5xl font-extrabold text-pink-500 mb-2">400+</div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Enrolled Children</div>
          </div>

          <div className="text-center md:border-r border-purple-100 last:border-0 py-2">
            <div className="heading-font text-4xl md:text-5xl font-extrabold text-[#AED9E0] text-indigo-600 mb-2">25+</div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Fun Activities</div>
          </div>

          <div className="text-center py-2">
            <div className="heading-font text-4xl md:text-5xl font-extrabold text-teal-500 mb-2">99.2%</div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Parent Satisfaction</div>
          </div>

        </div>
      </section>

      {/* 3. About / Philosophy */}
      <section id="about" className="py-24 bg-[#FAF5FF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#1E1B4B] mb-4">
              Nurturing Play, Inspiring Growth
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              At Little Elly Tolichowki, we believe children are unique individuals who learn best when they are active participants in their own playground of discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#C9B8FF]/20 text-purple-600 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 stroke-[2]" />
              </div>
              <h3 className="heading-font text-xl font-bold text-[#1E1B4B] mb-3">Child-Centric Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                Every classroom, toy selection, and activity curriculum is meticulously designed around safety, ergonomics, and infant learning milestones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FFB3C6]/20 text-pink-600 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 stroke-[2]" />
              </div>
              <h3 className="heading-font text-xl font-bold text-[#1E1B4B] mb-3">Sensory Curriculum</h3>
              <p className="text-slate-600 leading-relaxed">
                Our programs prioritize multisensory integration — blending sand play, music circles, clay building, and nature puzzles to spark intelligence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 stroke-[2]" />
              </div>
              <h3 className="heading-font text-xl font-bold text-[#1E1B4B] mb-3">Tolichowki Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Located in a calm, non-polluted lane with full CCTV surveillance, certified pediatric first-aid helpers, and clean organic cafeteria options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curriculum & Programs */}
      <section id="programs" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-purple-600 mb-2 block">Our Pathways</span>
              <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#1E1B4B]">
                Curriculum Designed for Joy
              </h2>
            </div>
            <p className="text-slate-600 font-medium md:max-w-md mt-4 md:mt-0">
              We offer curated developmental levels that scaffold early communication, numbers, physical coordination, and social-emotional confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Playgroup',
                age: '1.5 – 2.5 Years',
                color: 'bg-[#C9B8FF]/10 text-purple-700 border-purple-100 hover:border-purple-300',
                icon: <Smile className="w-6 h-6" />,
                features: ['Tactile exploration', 'Language priming', 'Basic motor control', 'Social interaction']
              },
              {
                title: 'Nursery',
                age: '2.5 – 3.5 Years',
                color: 'bg-[#FFB3C6]/10 text-pink-700 border-pink-100 hover:border-pink-300',
                icon: <Palette className="w-6 h-6" />,
                features: ['Vocabulary growth', 'Pre-writing skills', 'Creative painting', 'Rhyme and storytelling']
              },
              {
                title: 'LKG',
                age: '3.5 – 4.5 Years',
                color: 'bg-teal-50 text-teal-800 border-teal-100 hover:border-teal-300',
                icon: <BookOpen className="w-6 h-6" />,
                features: ['Phonics foundation', 'Number recognition', 'Group roleplay', 'Environment exploration']
              },
              {
                title: 'UKG',
                age: '4.5 – 5.5 Years',
                color: 'bg-indigo-50 text-indigo-800 border-indigo-100 hover:border-indigo-300',
                icon: <Award className="w-6 h-6" />,
                features: ['Elementary reading', 'Addition introduction', 'Confidence building', 'Primary school ready']
              },
              {
                title: 'Premium Daycare',
                age: '6 Months – 8 Years',
                color: 'bg-[#C9B8FF]/10 text-purple-700 border-purple-100 hover:border-purple-300',
                icon: <Clock className="w-6 h-6" />,
                features: ['Safe sleeping pods', 'Hot nutritious meals', 'Supervised nap plans', 'Afternoon play time']
              },
              {
                title: 'After School Activities',
                age: '3.0 – 12 Years',
                color: 'bg-[#FFB3C6]/10 text-pink-700 border-pink-100 hover:border-pink-300',
                icon: <Music className="w-6 h-6" />,
                features: ['Keyboard & Guitar lessons', 'Sanskrit chanting', 'Classical dance', 'Public speaking basics']
              }
            ].map((program, index) => (
              <div 
                key={index}
                className={`border-2 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group bg-white ${program.color.split(' ')[2]} ${program.color.split(' ')[3]}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${program.color.split(' ')[0]} ${program.color.split(' ')[1]}`}>
                    {program.icon}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="heading-font text-2xl font-bold text-[#1E1B4B]">{program.title}</h3>
                  </div>
                  <span className="inline-block bg-slate-100 text-slate-600 font-extrabold text-xs px-2.5 py-1 rounded-md mb-6">
                    {program.age}
                  </span>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <Check className="w-4 h-4 text-teal-500 stroke-[3] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#enquiry" 
                  className="inline-flex items-center gap-2 font-bold text-sm text-slate-800 group-hover:text-purple-600 transition-colors"
                >
                  Request Information <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities Gallery */}
      <section id="facilities" className="py-24 bg-[#FAF5FF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-purple-600 mb-2 block">Our Campus</span>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#1E1B4B] mb-4">
              Explore Our Sensory Haven
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Take a visual stroll through Little Elly Tolichowki. Bright pastel spaces specifically constructed to support young minds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Montessori Sandbox',
                desc: 'Fine motor development',
                img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Pastel Reading Nook',
                desc: 'Nurturing storytelling',
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Toddler Craft Studio',
                desc: 'Color matching and textures',
                img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Safe Outdoor Playground',
                desc: 'Cushioned physical play',
                img: 'https://images.unsplash.com/photo-1566305977571-5666677c6e2a?auto=format&fit=crop&q=80&w=600'
              }
            ].map((facility, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl shadow-sm border border-purple-100 bg-white p-3 cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl h-56 relative mb-4">
                  <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-purple-900/0 transition-colors z-10 duration-300"></div>
                  <img 
                    src={facility.img} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="px-2">
                  <h3 className="heading-font font-bold text-lg text-[#1E1B4B]">{facility.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Fee Estimator */}
      <section id="fee-estimator" className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-[#FAF5FF] via-white to-[#FFF5F7] p-8 md:p-12 rounded-3xl border-2 border-purple-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Inputs Panel */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Calculator className="w-3.5 h-3.5" />
                Fee Calculator
              </div>
              <h2 className="heading-font text-3xl font-bold text-[#1E1B4B] mb-4">
                Estimate Tuition Fees
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-8 leading-relaxed">
                Choose the program suitable for your child, select optional utilities like transportation and daily organic meals, and see a transparent fee breakdown.
              </p>

              {/* Program selection */}
              <div className="mb-6">
                <label className="block text-slate-700 font-bold text-sm mb-2.5">
                  Select Educational Program:
                </label>
                <select 
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-xl px-4 py-3 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                >
                  <option value="playgroup">Playgroup (Age: 1.5 - 2.5 yrs) - Term Fee</option>
                  <option value="nursery">Nursery (Age: 2.5 - 3.5 yrs) - Term Fee</option>
                  <option value="lkg">LKG (Age: 3.5 - 4.5 yrs) - Term Fee</option>
                  <option value="ukg">UKG (Age: 4.5 - 5.5 yrs) - Term Fee</option>
                  <option value="daycare">Daycare (Age: 6m - 8 yrs) - Term Fee</option>
                  <option value="afterschool">After School Program - Term Fee</option>
                </select>
              </div>

              {/* Add-ons checkboxes */}
              <div className="space-y-4">
                <label className="block text-slate-700 font-bold text-sm mb-1">
                  Optional Add-Ons (Billed Monthly, estimated per Term of 4 months):
                </label>
                
                <label className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-purple-100 hover:border-purple-200 cursor-pointer transition-all">
                  <input 
                    type="checkbox"
                    checked={includeDaycare}
                    onChange={(e) => handleCheckboxChange('daycare', e.target.checked)}
                    className="w-4 h-4 rounded text-purple-600 border-purple-200 focus:ring-purple-400 focus:ring-offset-0"
                  />
                  <div>
                    <span className="block text-sm font-bold text-[#1E1B4B]">Full-Day Daycare Support</span>
                    <span className="text-xs text-slate-500 font-semibold">+₹12,000 / month</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-purple-100 hover:border-purple-200 cursor-pointer transition-all">
                  <input 
                    type="checkbox"
                    checked={includeTransport}
                    onChange={(e) => handleCheckboxChange('transport', e.target.checked)}
                    className="w-4 h-4 rounded text-purple-600 border-purple-200 focus:ring-purple-400 focus:ring-offset-0"
                  />
                  <div>
                    <span className="block text-sm font-bold text-[#1E1B4B]">GPS-Tracked Safe Cab (Within Tolichowki)</span>
                    <span className="text-xs text-slate-500 font-semibold">+₹4,500 / month</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-purple-100 hover:border-purple-200 cursor-pointer transition-all">
                  <input 
                    type="checkbox"
                    checked={includeMeals}
                    onChange={(e) => handleCheckboxChange('meals', e.target.checked)}
                    className="w-4 h-4 rounded text-purple-600 border-purple-200 focus:ring-purple-400 focus:ring-offset-0"
                  />
                  <div>
                    <span className="block text-sm font-bold text-[#1E1B4B]">Dietitian-Curated Organic Meals</span>
                    <span className="text-xs text-slate-500 font-semibold">+₹3,500 / month</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="bg-white rounded-2xl border border-purple-100 p-6 flex flex-col justify-between">
              <div>
                <h3 className="heading-font text-lg font-bold text-[#1E1B4B] border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  Estimated Breakdown (Per Term)
                </h3>

                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="py-2.5">
                      <td className="py-2.5 font-medium text-slate-600">{currentProgramFee.name} Tuition</td>
                      <td className="py-2.5 text-right font-bold text-[#1E1B4B]">₹{currentProgramFee.tuition.toLocaleString()}</td>
                    </tr>
                    <tr className="py-2.5">
                      <td className="py-2.5 font-medium text-slate-600">Admission Kit & Materials</td>
                      <td className="py-2.5 text-right font-bold text-[#1E1B4B]">₹{currentProgramFee.kit.toLocaleString()}</td>
                    </tr>
                    
                    {includeDaycare && (
                      <tr className="py-2.5">
                        <td className="py-2.5 font-medium text-slate-600">Daycare (₹12,000 × 4m)</td>
                        <td className="py-2.5 text-right font-bold text-[#1E1B4B]">₹{daycareCost * 4}</td>
                      </tr>
                    )}
                    
                    {includeTransport && (
                      <tr className="py-2.5">
                        <td className="py-2.5 font-medium text-slate-600">Cab Service (₹4,500 × 4m)</td>
                        <td className="py-2.5 text-right font-bold text-[#1E1B4B]">₹{transportCost * 4}</td>
                      </tr>
                    )}

                    {includeMeals && (
                      <tr className="py-2.5">
                        <td className="py-2.5 font-medium text-slate-600">Organic Kitchen Plan (₹3,500 × 4m)</td>
                        <td className="py-2.5 text-right font-bold text-[#1E1B4B]">₹{mealsCost * 4}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 border-t border-purple-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-wider text-slate-500">Estimated Total Fee</span>
                    <span className="text-xs text-purple-400 font-semibold">(Per term of 4 months)</span>
                  </div>
                  <div className="heading-font text-3xl font-extrabold text-[#1E1B4B]">
                    ₹{totalEstimatedTerm.toLocaleString()}
                  </div>
                </div>

                <a 
                  href="#enquiry" 
                  className="block text-center bg-[#C9B8FF] text-[#1E1B4B] border-2 border-purple-400 hover:bg-[#FFB3C6] hover:border-pink-400 font-bold px-6 py-3.5 rounded-xl shadow-[3px_3px_0px_#1E1B4B] transition-all"
                >
                  Reserve Seat for {currentProgramFee.name}
                </a>
                <span className="block text-[11px] text-center text-slate-400 font-semibold mt-3">
                  *Fees are indicative and subject to changes based on documentation verification.
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials */}
      <section id="testimonials" className="py-24 bg-[#FAF5FF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-pink-600 mb-2 block">Kind Words</span>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#1E1B4B] mb-4">
              Loved by Tolichowki Parents
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Read how parents in the Tolichowki community feel about the care, learning and pastel environment we offer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Farhan Begum',
                location: 'Tolichowki Road',
                quote: 'My child was very shy before joining the Nursery class here. The teachers at Little Elly are incredibly gentle, and the soft pastel environment made them feel safe instantly.',
                stars: 5
              },
              {
                name: 'Anirudh Kumar',
                location: 'Galaxy Theatre Lane, Tolichowki',
                quote: 'The interactive fee estimator was very transparent, but what impressed me most is their organic food plan and daycare. My daughter loves the afternoon sandbox and story time!',
                stars: 5
              },
              {
                name: 'Dr. Sarah Hussain',
                location: 'Kakatiya Nagar, Tolichowki',
                quote: 'Their focus on sensory and play-based learning rather than early textbook pressure is refreshing. Highly recommend LKG for anyone looking for holistic grooming in this area.',
                stars: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic font-medium leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="heading-font font-bold text-slate-800">{review.name}</h4>
                  <span className="text-xs text-slate-500 font-semibold">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Admission Enquiry Form */}
      <section id="enquiry" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-tr from-[#FAF5FF] via-white to-[#FFF5F7] border-2 border-purple-200 rounded-3xl p-8 md:p-12 shadow-md relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C9B8FF]/20 rounded-full blur-xl"></div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="text-center max-w-lg mx-auto mb-10">
                  <h2 className="heading-font text-3xl font-extrabold text-[#1E1B4B] mb-3">
                    Start Your Child's Journey
                  </h2>
                  <p className="text-sm text-slate-600 font-medium">
                    Submit the secure enquiry form below. Our Tolichowki admissions coordinator will connect with you within 24 hours.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Child's Name */}
                  <div>
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Child's Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-purple-300" />
                      <input 
                        type="text" 
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Baby Aisha"
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.childName && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.childName}</span>
                    )}
                  </div>

                  {/* Child's DOB */}
                  <div>
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Child's Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-purple-300" />
                      <input 
                        type="date" 
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      />
                    </div>
                    {calculatedAge && (
                      <span className="text-xs text-purple-600 font-bold mt-1.5 block">
                        Age Calculated: {calculatedAge}
                      </span>
                    )}
                    {errors.childDob && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.childDob}</span>
                    )}
                  </div>

                  {/* Parent's Name */}
                  <div>
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Parent / Guardian Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-purple-300" />
                      <input 
                        type="text" 
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Farhan Khan"
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.parentName && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.parentName}</span>
                    )}
                  </div>

                  {/* Parent's Phone */}
                  <div>
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Contact Phone Number (India) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-purple-300" />
                      <input 
                        type="tel" 
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.parentPhone && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.parentPhone}</span>
                    )}
                  </div>

                  {/* Parent's Email */}
                  <div>
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Parent's Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-purple-300" />
                      <input 
                        type="email" 
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. farhan@example.com"
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.parentEmail && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.parentEmail}</span>
                    )}
                  </div>

                  {/* Program dropdown */}
                  <div>
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Program of Choice *
                    </label>
                    <select 
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-purple-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    >
                      <option value="playgroup">Playgroup (1.5 - 2.5 yrs)</option>
                      <option value="nursery">Nursery (2.5 - 3.5 yrs)</option>
                      <option value="lkg">LKG (3.5 - 4.5 yrs)</option>
                      <option value="ukg">UKG (4.5 - 5.5 yrs)</option>
                      <option value="daycare">Daycare only</option>
                      <option value="afterschool">After School Activities</option>
                    </select>
                  </div>

                  {/* Start Date */}
                  <div className="md:col-span-2">
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Preferred Date of Joining *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-purple-300" />
                      <input 
                        type="date" 
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.startDate && (
                      <span className="text-xs text-red-500 font-bold mt-1.5 block">{errors.startDate}</span>
                    )}
                  </div>

                  {/* Additional notes */}
                  <div className="md:col-span-2">
                    <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      Do you have any specific requirements? (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="e.g. food allergies, sibling details..."
                      className="w-full bg-white border border-purple-200 rounded-xl px-4 py-3 text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-[#C9B8FF] text-[#1E1B4B] border-2 border-purple-400 hover:bg-[#FFB3C6] hover:border-pink-400 font-extrabold px-10 py-4 rounded-full text-lg shadow-[4px_4px_0px_#1E1B4B] transition-all"
                  >
                    Submit Enrollment Request
                  </button>
                  <p className="text-[11px] text-slate-400 font-semibold mt-3">
                    By submitting, you agree to receive communications regarding admissions at Little Elly Tolichowki.
                  </p>
                </div>
              </form>
            ) : (
              // Success card
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-teal-50 border-4 border-teal-200 flex items-center justify-center mx-auto mb-6 text-teal-600">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>
                <h3 className="heading-font text-3xl font-bold text-[#1E1B4B] mb-2">
                  Application Submitted!
                </h3>
                <p className="text-slate-600 font-medium mb-8 max-w-md mx-auto">
                  Thank you for submitting your enquiry. Below is the reference information we received:
                </p>

                <div className="max-w-md mx-auto bg-white rounded-2xl border border-purple-100 p-6 text-left mb-8 shadow-sm">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      <tr>
                        <td className="py-2.5 font-bold">Child Name:</td>
                        <td className="py-2.5 text-right text-[#1E1B4B]">{formData.childName}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Calculated Age:</td>
                        <td className="py-2.5 text-right text-[#1E1B4B]">{calculatedAge}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Parent Name:</td>
                        <td className="py-2.5 text-right text-[#1E1B4B]">{formData.parentName}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Phone:</td>
                        <td className="py-2.5 text-right text-[#1E1B4B]">{formData.parentPhone}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Program Selected:</td>
                        <td className="py-2.5 text-right text-[#1E1B4B] uppercase">{formData.program}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Start Date:</td>
                        <td className="py-2.5 text-right text-[#1E1B4B]">{formData.startDate}</td>
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
                  className="bg-slate-100 text-slate-700 hover:bg-purple-100 hover:text-purple-700 font-bold px-8 py-3 rounded-full text-sm transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Contact & Location Footer */}
      <footer className="bg-slate-900 text-slate-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 pb-16 border-b border-slate-800">
          
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C9B8FF] to-[#FFB3C6] flex items-center justify-center text-white">
                <Smile className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="heading-font text-lg md:text-xl font-bold tracking-tight text-white">
                  Little Elly
                </span>
                <span className="block text-[10px] font-bold text-purple-400 tracking-wider uppercase">Tolichowki</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
              Our Tolichowki branch is a safe residential playground designed for curiosity and developmental milestones. Join the pastel adventure!
            </p>
            
            <div className="space-y-3.5 text-sm font-semibold">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-slate-300">Plot 42, Hakeempet Road, Near Galaxy Theatre, Tolichowki, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-slate-300">+91 91234 56789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300">tolichowki@littleelly.com</span>
              </div>
            </div>
          </div>

          {/* Operating hours */}
          <div>
            <h3 className="heading-font text-lg font-bold text-white mb-6">
              Operating Hours
            </h3>
            
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Playgroup & Nursery</span>
                <span className="font-bold text-white">09:00 AM – 12:30 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>LKG & UKG classes</span>
                <span className="font-bold text-white">08:30 AM – 01:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Full Daycare Service</span>
                <span className="font-bold text-white">08:00 AM – 06:30 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Saturday Hours</span>
                <span className="font-bold text-white">09:00 AM – 01:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Google maps placeholder */}
          <div className="flex flex-col">
            <h3 className="heading-font text-lg font-bold text-white mb-6">
              Campus Location
            </h3>
            
            {/* Map Frame Container */}
            <div className="w-full h-48 bg-slate-800 rounded-2xl border-2 border-slate-700 overflow-hidden relative group">
              {/* Fallback visual maps iframe placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-pink-400 mb-2 animate-bounce" />
                <p className="text-xs text-slate-300 font-bold">Hakeempet Road, Tolichowki</p>
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
                  title="Google Maps Location for Little Elly Tolichowki"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-slate-500">
          <p>© 2026 Little Elly Preschool Tolichowki. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Preschool Learning Franchise Partner</p>
        </div>
      </footer>

    </div>
  );
}

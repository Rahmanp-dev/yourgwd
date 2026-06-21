"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  User, 
  Heart, 
  ChevronRight, 
  Check, 
  Star, 
  AlertCircle, 
  ShieldCheck,
  Stethoscope,
  Smile,
  Activity,
  Baby
} from 'lucide-react';

export default function DrNikhatSkinBanjaraHillsPage() {
  // Treatments Selector State
  const [selectedTreatment, setSelectedTreatment] = useState('pediatric');

  // Questionnaire State
  const [qAnswers, setQAnswers] = useState({
    patientType: '',
    concern: '',
    skinSensitivity: ''
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Pediatric Dermatology',
    date: '',
    time: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false);

  // Treatments Data
  const treatments = {
    pediatric: {
      id: 'Pediatric Dermatology',
      title: 'Pediatric Dermatology',
      tagline: 'Gentle, comforting skin care for infants, toddlers, and young teens.',
      description: 'Specialized diagnostic care for pediatric skin conditions, including infant eczema, atopic dermatitis, neonatal rashes, birthmarks, and pediatric allergies. Dr. Nikhat provides a warm, friendly environment to make children feel safe.',
      duration: '30 - 45 mins',
      recovery: 'Immediate return to daily activities',
      ideal: 'Parents seeking expert care for skin rash, itching, eczema, or allergy concerns in children.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
    },
    hairloss: {
      id: 'Hair Loss Treatment (PRP)',
      title: 'Hair Loss Treatment (PRP)',
      tagline: 'Platelet-Rich Plasma (PRP) therapy to naturally revitalize hair growth.',
      description: 'Advanced autologous plasma therapy that targets hair follicles with rich growth factors. This procedure boosts scalp blood circulation, strengthens hair roots, and increases overall hair density without surgery.',
      duration: '60 mins',
      recovery: 'Zero downtime; minor soreness for 12 hours',
      ideal: 'Adults experiencing androgenetic alopecia, hair thinning, or post-stress hair shedding.',
      image: 'https://images.unsplash.com/photo-1620331702289-5484cd359604?auto=format&fit=crop&q=80&w=800'
    },
    scar: {
      id: 'Laser Scar Revision',
      title: 'Laser Scar Revision',
      tagline: 'Precision laser resurfacing to smooth acne scars, burn marks, and injury scars.',
      description: 'Using advanced fractional laser resurfacing to remove damaged outer skin layers and stimulate collagen reorganization. This non-invasive treatment works to smooth scar borders and improve skin tone.',
      duration: '45 - 60 mins',
      recovery: '3 - 5 days of redness & mild peeling',
      ideal: 'Clients looking to minimize deep acne scars, surgical scars, or post-injury pigmentation marks.',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
    }
  };

  // Questionnaire handlers
  const handleQChange = (question, answer) => {
    const updated = { ...qAnswers, [question]: answer };
    setQAnswers(updated);
    
    if (updated.patientType && updated.concern && updated.skinSensitivity) {
      let recommendation = '';
      let explanation = '';
      
      if (updated.patientType === 'Child' || updated.concern === 'Rashes & Allergies') {
        recommendation = 'Pediatric Dermatology Consultation';
        explanation = 'Dr. Nikhat specializes in gentle pediatric diagnostics. We recommend a pediatric skin care consultation to diagnose allergies or eczema in a child-friendly clinic atmosphere.';
      } else if (updated.concern === 'Hair Loss / Thinning') {
        recommendation = 'Hair Loss Treatment (PRP)';
        explanation = 'For scalp thinning or active hair fall, our non-surgical PRP/Plasma therapy is highly recommended to stimulate root growth factors.';
      } else if (updated.concern === 'Scars / Uneven Skin') {
        recommendation = 'Fractional Laser Scar Revision';
        explanation = 'To flatten scar tissue and stimulate deep collagen, our fractional laser scar resurfacing will yield progressive texturing improvements.';
      } else {
        recommendation = 'Comprehensive Dermatological Assessment';
        explanation = 'We recommend booking a diagnostic visit with Dr. Syeda Nikhat Baquer to examine your skin barriers and design a targeted skin plan.';
      }
      
      setAssessmentResult({ recommendation, explanation });
    }
  };

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!bookingForm.name.trim()) errors.name = 'Name is required';
    
    // Phone validation
    const phoneTrimmed = bookingForm.phone.trim();
    if (!phoneTrimmed) {
      errors.phone = 'Phone number is required';
    } else {
      const isIndiaPhone = /^(?:\+91|91)?[6789]\d{9}$/.test(phoneTrimmed.replace(/\s+/g, ''));
      const isSimple10Digit = /^\d{10}$/.test(phoneTrimmed);
      if (!isIndiaPhone && !isSimple10Digit) {
        errors.phone = 'Please enter a valid 10-digit Indian phone number';
      }
    }
    
    // Email validation
    if (!bookingForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingForm.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!bookingForm.date) errors.date = 'Date is required';
    if (!bookingForm.time) errors.time = 'Time slot is required';
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsBooked(true);
  };

  // Pre-select treatment helper
  const triggerBookTreatment = (treatmentName) => {
    setBookingForm(prev => ({ ...prev, treatment: treatmentName }));
    const element = document.getElementById('appointment-booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-800 font-sans relative z-10 selection:bg-rose-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-rose-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FF8A8A] flex items-center justify-center shadow-md shadow-[#FF8A8A]/20">
                <Smile className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#FF8A8A] block leading-tight">
                  DR. NIKHAT'S
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">
                  Skin Care Clinic
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-sm font-bold text-slate-600 hover:text-[#FF8A8A] transition-colors">Dr. Nikhat</a>
              <a href="#treatments" className="text-sm font-bold text-slate-600 hover:text-[#FF8A8A] transition-colors">Clinic Treatments</a>
              <a href="#assessment" className="text-sm font-bold text-slate-600 hover:text-[#FF8A8A] transition-colors">Skin Assessment</a>
              <a href="#results" className="text-sm font-bold text-slate-600 hover:text-[#FF8A8A] transition-colors">Case Reports</a>
              <a href="#testimonials" className="text-sm font-bold text-slate-600 hover:text-[#FF8A8A] transition-colors">Reviews</a>
            </div>

            <a 
              href="#appointment-booking" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-extrabold text-white bg-[#FF8A8A] hover:bg-[#FF7575] rounded-2xl shadow-lg shadow-[#FF8A8A]/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FFF5F5] via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-[#FF8A8A] text-xs font-bold uppercase tracking-wider">
                <Baby className="w-4 h-4 text-[#FF8A8A]" />
                Friendly Pediatric & Aesthetic Dermatology
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Gentle Skin Care <br />
                <span className="text-[#FF8A8A]">For the Entire Family.</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Expert dermatological care led by <strong>Dr. Syeda Nikhat Baquer</strong>. We specialize in delicate pediatric dermatology, non-surgical hair loss therapies (PRP), and precision laser scar revisions at our state-of-the-art clinic in Banjara Hills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#appointment-booking" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#FF8A8A] hover:bg-[#FF7575] rounded-2xl shadow-xl shadow-[#FF8A8A]/25 hover:shadow-[#FF8A8A]/40 transition-all hover:-translate-y-0.5"
                >
                  Book Consultation Slot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#treatments" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-xs hover:bg-slate-50 transition-all"
                >
                  Our Clinic Services
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-5 h-5 text-[#FF8A8A]" />
                  Child-Friendly Environment
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-5 h-5 text-[#FF8A8A]" />
                  Clinically Proven Therapies
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#FF8A8A] rounded-[2.5rem] rotate-3 scale-[1.02] opacity-20 blur-lg"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                  alt="Friendly Pediatric Clinic Treatment" 
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-rose-100 shadow-lg">
                  <p className="text-xs font-bold text-[#FF8A8A] uppercase tracking-widest mb-1">Our Philosophy</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">Making skin diagnostics painless, reassuring, and completely stress-free for kids and adults alike.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-[#FFF8F8] border-y border-rose-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#FF8A8A]">15k+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Cases Treated</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#FF8A8A]">14+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#FF8A8A]">4.9</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Google Star Rating</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#FF8A8A]">100%</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Safe Pediatric Ethics</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctor Bio Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Doctor Photo */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#FF8A8A] rounded-3xl rotate-2 scale-[1.02] opacity-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Syeda Nikhat Baquer" 
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">Dr. Syeda Nikhat Baquer</h3>
                  <p className="text-xs text-rose-300 font-medium">Founder & Head Dermatologist</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-[#FF8A8A] text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Senior Consultant Dermatologist
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dr. Syeda Nikhat Baquer <span className="text-lg font-semibold text-slate-500 block sm:inline sm:ml-2">(MBBS, DDVL)</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Dr. Syeda Nikhat Baquer is a highly respected consultant dermatologist with extensive clinical experience spanning more than 14 years. After obtaining her MBBS and postgraduate specialization in Dermatology, Venereology, and Leprosy (DDVL), she dedicated herself to resolving complex pediatric skin allergies, severe hair thinning patterns, and advanced post-acne scar resurfacing.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Dr. Nikhat is known for her gentle, empathetic clinical approach, making her especially sought-after for pediatric skin concerns where patient comfort and parental peace of mind are paramount.
              </p>

              {/* Bio Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mt-1 text-[#FF8A8A] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Specialized Pediatric Care</h4>
                    <p className="text-xs text-slate-500">Expert diagnosis of eczema, allergy & rashes in kids.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mt-1 text-[#FF8A8A] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">PRP Hair Loss Expertise</h4>
                    <p className="text-xs text-slate-500">Advanced cell-growth factor therapy for hair restoration.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mt-1 text-[#FF8A8A] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Laser Resurfacing Expert</h4>
                    <p className="text-xs text-slate-500">Fractional technologies for acne scar flattening.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mt-1 text-[#FF8A8A] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Empathetic Consultations</h4>
                    <p className="text-xs text-slate-500">Dedicated time for patient questions and transparent expectations.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Treatments Selector (Client Widget) */}
      <section id="treatments" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF8A8A] text-xs font-bold uppercase tracking-widest block mb-2">Treatments</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Clinical Focus Areas</h2>
            <p className="text-slate-500 mt-3 text-sm">Click on any core service below to view diagnostic protocols, recovery timelines, and ideal patient metrics.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0">
              <button 
                onClick={() => setSelectedTreatment('pediatric')}
                className={`flex-1 text-left px-6 py-5 rounded-2xl border font-bold transition-all shrink-0 ${
                  selectedTreatment === 'pediatric' 
                    ? 'bg-[#FF8A8A] border-[#FF8A8A] text-white shadow-lg shadow-[#FF8A8A]/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Pediatric Dermatology
              </button>
              <button 
                onClick={() => setSelectedTreatment('hairloss')}
                className={`flex-1 text-left px-6 py-5 rounded-2xl border font-bold transition-all shrink-0 ${
                  selectedTreatment === 'hairloss' 
                    ? 'bg-[#FF8A8A] border-[#FF8A8A] text-white shadow-lg shadow-[#FF8A8A]/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Hair Loss PRP Therapy
              </button>
              <button 
                onClick={() => setSelectedTreatment('scar')}
                className={`flex-1 text-left px-6 py-5 rounded-2xl border font-bold transition-all shrink-0 ${
                  selectedTreatment === 'scar' 
                    ? 'bg-[#FF8A8A] border-[#FF8A8A] text-white shadow-lg shadow-[#FF8A8A]/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Laser Scar Revision
              </button>
            </div>

            {/* Right details panel */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#FF8A8A] block mb-1">Service Spotlight</span>
                    <h3 className="text-2xl font-extrabold text-slate-900">{treatments[selectedTreatment].title}</h3>
                    <p className="text-[#FF8A8A] font-bold text-xs sm:text-sm mt-1">{treatments[selectedTreatment].tagline}</p>
                  </div>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{treatments[selectedTreatment].description}</p>
                  
                  {/* Treatment Specs */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold">Session Time</span>
                      <span className="text-sm font-bold text-slate-800 inline-flex items-center gap-1.5 mt-1">
                        <Clock className="w-4 h-4 text-[#FF8A8A]" />
                        {treatments[selectedTreatment].duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold">Recovery Period</span>
                      <span className="text-sm font-bold text-slate-800 inline-flex items-center gap-1.5 mt-1">
                        <Heart className="w-4 h-4 text-[#FF8A8A]" />
                        {treatments[selectedTreatment].recovery}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-400 block uppercase font-bold mb-1">Recommended for</span>
                    <p className="text-xs text-slate-600 italic bg-rose-50/50 p-3 rounded-xl border border-rose-100/50">
                      "{treatments[selectedTreatment].ideal}"
                    </p>
                  </div>

                  <button 
                    onClick={() => triggerBookTreatment(treatments[selectedTreatment].id)}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#FF8A8A] hover:bg-[#FF7575] rounded-xl transition-colors w-full sm:w-auto"
                  >
                    Select & Book Appointment
                  </button>
                </div>
                
                <div className="md:col-span-5">
                  <div className="rounded-2xl overflow-hidden h-full min-h-[220px] max-h-[320px] shadow-sm">
                    <img 
                      src={treatments[selectedTreatment].image} 
                      alt={treatments[selectedTreatment].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Skin Assessment Questionnaire */}
      <section id="assessment" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF8A8A] text-xs font-bold uppercase tracking-widest block mb-2">Quick Quiz</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Virtual Patient Assessment</h2>
            <p className="text-slate-500 mt-2 text-sm">Tell us about your concerns to identify the optimal dermatological route.</p>
          </div>

          <div className="bg-[#FFF8F8] border border-rose-100 rounded-3xl p-6 sm:p-8 space-y-8">
            {/* Q1 */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF8A8A] text-white flex items-center justify-center text-xs font-bold">1</span>
                Who is seeking treatment?
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {['Child', 'Teenager', 'Adult'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleQChange('patientType', opt)}
                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      qAnswers.patientType === opt 
                        ? 'bg-[#FF8A8A] text-white border-[#FF8A8A] shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF8A8A] text-white flex items-center justify-center text-xs font-bold">2</span>
                What is the primary concern?
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {['Rashes & Allergies', 'Hair Loss / Thinning', 'Scars / Uneven Skin'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleQChange('concern', opt)}
                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      qAnswers.concern === opt 
                        ? 'bg-[#FF8A8A] text-white border-[#FF8A8A] shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF8A8A] text-white flex items-center justify-center text-xs font-bold">3</span>
                Describe skin sensitivity:
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {['Highly Sensitive', 'Moderately Sensitive', 'Normal Skin'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleQChange('skinSensitivity', opt)}
                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      qAnswers.skinSensitivity === opt 
                        ? 'bg-[#FF8A8A] text-white border-[#FF8A8A] shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendation Result Card */}
            {assessmentResult && (
              <div className="bg-white border-2 border-[#FF8A8A] rounded-2xl p-5 sm:p-6 shadow-md animate-fade-in">
                <div className="flex items-center gap-2.5 text-[#FF8A8A] mb-2">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="font-extrabold text-xs uppercase tracking-wider">Assessment Outcome</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Recommended: {assessmentResult.recommendation}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{assessmentResult.explanation}</p>
                
                <button
                  type="button"
                  onClick={() => triggerBookTreatment(assessmentResult.recommendation)}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#FF8A8A] hover:bg-[#FF7575] rounded-xl transition-colors"
                >
                  Book Assessment Consultation
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Results Showcase (Mock Case Studies) */}
      <section id="results" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF8A8A] text-xs font-bold uppercase tracking-widest block mb-2">Transformations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Clinical Case Studies</h2>
            <p className="text-slate-500 mt-2 text-sm">Documented case profiles demonstrating skin and hair results from Dr. Nikhat's treatment programs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-rose-50">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                    alt="Pediatric Skin Check" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF8A8A] text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Pediatric Care
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Patient: Infant (9 Months)</span>
                    <span>Duration: 3 Weeks</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-lg">Infantile Eczema Resolution</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Infant presented with severe red, dry scaling eczema patches on both cheeks and limbs, causing sleep disruption.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Treatment Administered</p>
                    <p className="text-xs font-semibold text-slate-700">Gentle barrier repair program + targeted non-steroidal topical control</p>
                  </div>
                </div>
              </div>
              <div className="bg-rose-50/60 p-4 border-t border-slate-100 text-center font-bold text-xs text-[#FF8A8A]">
                Outcome: Complete skin barrier clearance
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-rose-50">
                  <img 
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800" 
                    alt="Clinical assessment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF8A8A] text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Hair Restoration
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Patient: Male (34 Yrs)</span>
                    <span>Duration: 4 Months</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-lg">Male Pattern Thinning Restored</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Androgenetic alopecia (Grade III) with diffuse vertex thinning. Patient sought non-surgical growth factor therapy.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Treatment Administered</p>
                    <p className="text-xs font-semibold text-slate-700">4 sessions of Autologous Growth Factor PRP + Hair Serums</p>
                  </div>
                </div>
              </div>
              <div className="bg-rose-50/60 p-4 border-t border-slate-100 text-center font-bold text-xs text-[#FF8A8A]">
                Outcome: Visible increase in density & thick follicles
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-rose-50">
                  <img 
                    src="https://images.unsplash.com/photo-1620331702289-5484cd359604?auto=format&fit=crop&q=80&w=800" 
                    alt="Laser scar check" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF8A8A] text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Scar Revision
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Patient: Female (24 Yrs)</span>
                    <span>Duration: 5 Months</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-lg">Fractional Acne Scar Revision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deep boxcar acne scars on cheeks and temple. Desired smoother skin texture and flatter borders.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Treatment Administered</p>
                    <p className="text-xs font-semibold text-slate-700">3 sessions of Fractional Laser resurfacing + Subcision</p>
                  </div>
                </div>
              </div>
              <div className="bg-rose-50/60 p-4 border-t border-slate-100 text-center font-bold text-xs text-[#FF8A8A]">
                Outcome: 70% flattening of scar depth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF8A8A] text-xs font-bold uppercase tracking-widest block mb-2">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What Our Patients Say</h2>
            <p className="text-slate-500 mt-2 text-sm">Read the genuine experiences of parents and aesthetic clients treated by Dr. Syeda Nikhat Baquer.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#FFF8F8] border border-rose-100 p-6 sm:p-8 rounded-3xl relative">
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                "Dr. Nikhat is incredibly gentle with babies. My 6-month-old daughter had severe skin patches due to dry eczema. Dr. Nikhat explained the triggers patiently and prescribed a very mild skin routine. Within a week, the redness vanished. High recommended for kids!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center font-bold text-[#FF8A8A] text-xs sm:text-sm uppercase">
                  HA
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Haseena A.</h4>
                  <p className="text-[10px] text-slate-400">Mother of Zoya, Banjara Hills</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FFF8F8] border border-rose-100 p-6 sm:p-8 rounded-3xl relative">
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                "I was suffering from vertex hair thinning and tried many oils without luck. Dr. Nikhat recommended PRP therapy. I completed 4 sessions and can clearly see new baby hair growth and much less hair fall. The clinic staff is very clean and expert."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center font-bold text-[#FF8A8A] text-xs sm:text-sm uppercase">
                  RS
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Rohan S.</h4>
                  <p className="text-[10px] text-slate-400">Software Engineer, Gachibowli</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FFF8F8] border border-rose-100 p-6 sm:p-8 rounded-3xl relative">
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                "I went to Dr. Nikhat's clinic for laser acne scar reduction. The results are amazing. My deep cheek scars have flattened and my face texture is so much smoother. Dr. Nikhat is very realistic and does not suggest unnecessary therapies."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center font-bold text-[#FF8A8A] text-xs sm:text-sm uppercase">
                  PN
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Pooja N.</h4>
                  <p className="text-[10px] text-slate-400">Jubilee Hills, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Appointment Booking Form */}
      <section id="appointment-booking" className="py-20 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF8A8A] text-xs font-bold uppercase tracking-widest block mb-2">Book Appointment</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Request Clinic Appointment</h2>
            <p className="text-slate-500 mt-2 text-sm font-medium">Please provide your details below to schedule your preferred date with Dr. Syeda Nikhat Baquer.</p>
          </div>

          <div className="bg-white border border-slate-100 shadow-xl rounded-[2.5rem] p-6 sm:p-10">
            {isBooked ? (
              // Success confirmation card
              <div className="text-center space-y-6 py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-800">Request Successfully Filed!</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                    Hi <strong className="text-slate-800">{bookingForm.name}</strong>, we have received your booking request. Dr. Nikhat's desk team will call you on <strong className="text-slate-800">{bookingForm.phone}</strong> to confirm your final slot timing.
                  </p>
                </div>
                
                {/* Details Summary */}
                <div className="bg-rose-50/40 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto border border-rose-100/50">
                  <div className="flex justify-between border-b border-rose-100/50 pb-2">
                    <span className="text-slate-400">Consultant</span>
                    <span className="font-bold text-slate-700">Dr. Syeda Nikhat Baquer</span>
                  </div>
                  <div className="flex justify-between border-b border-rose-100/50 pb-2">
                    <span className="text-slate-400">Core Care</span>
                    <span className="font-bold text-slate-700">{bookingForm.treatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-rose-100/50 pb-2">
                    <span className="text-slate-400">Date</span>
                    <span className="font-bold text-slate-700">{bookingForm.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Slot Request</span>
                    <span className="font-bold text-slate-700">{bookingForm.time}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsBooked(false);
                    setBookingForm({
                      name: '',
                      phone: '',
                      email: '',
                      treatment: 'Pediatric Dermatology',
                      date: '',
                      time: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-[#FF8A8A] hover:bg-[#FF7575] text-white font-bold rounded-2xl text-sm transition-colors shadow-md"
                >
                  Book New Slot
                </button>
              </div>
            ) : (
              // Booking Form
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input 
                        type="text" 
                        name="name"
                        value={bookingForm.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Haseena Begum" 
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.name 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-rose-100 focus:border-[#FF8A8A]'
                        }`}
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold text-xs">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleInputChange}
                        placeholder="94925 71972" 
                        className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.phone 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-rose-100 focus:border-[#FF8A8A]'
                        }`}
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input 
                        type="email" 
                        name="email"
                        value={bookingForm.email}
                        onChange={handleInputChange}
                        placeholder="patient@gmail.com" 
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.email 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-rose-100 focus:border-[#FF8A8A]'
                        }`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Treatment Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Preferred Clinic Care</label>
                    <select 
                      name="treatment"
                      value={bookingForm.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-[#FF8A8A]"
                    >
                      <option value="Pediatric Dermatology">Pediatric Dermatology</option>
                      <option value="Hair Loss Treatment (PRP)">Hair Loss Treatment (PRP)</option>
                      <option value="Laser Scar Revision">Laser Scar Revision</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Appointment Date *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <input 
                        type="date" 
                        name="date"
                        value={bookingForm.date}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.date 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-rose-100 focus:border-[#FF8A8A]'
                        }`}
                      />
                    </div>
                    {formErrors.date && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Time Slot Request *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Clock className="w-4 h-4" />
                      </span>
                      <select 
                        name="time"
                        value={bookingForm.time}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-[#FF8A8A] transition-all ${
                          formErrors.time 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-rose-100 focus:border-[#FF8A8A]'
                        }`}
                      >
                        <option value="">Select a Slot</option>
                        <option value="11:30 AM - 01:30 PM">Morning (11:30 AM - 01:30 PM)</option>
                        <option value="01:30 PM - 03:00 PM">Midday (01:30 PM - 03:00 PM)</option>
                        <option value="04:00 PM - 06:00 PM">Afternoon (04:00 PM - 06:00 PM)</option>
                        <option value="06:00 PM - 07:30 PM">Evening (06:00 PM - 07:30 PM)</option>
                      </select>
                    </div>
                    {formErrors.time && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Symptoms / Notes (Optional)</label>
                  <textarea 
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows="3" 
                    placeholder="Briefly describe the skin issues, patient age if child, or treatment goals..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-[#FF8A8A]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 text-base font-bold text-white bg-[#FF8A8A] hover:bg-[#FF7575] rounded-xl transition-all shadow-lg shadow-[#FF8A8A]/25 active:scale-95 animate-pulse-glow"
                >
                  Request Consultation Slot
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Location/Hours Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10">
            
            {/* Clinic Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF8A8A] flex items-center justify-center">
                  <Smile className="text-white w-5 h-5" />
                </div>
                <span className="font-extrabold text-lg text-white tracking-tight">DR. NIKHAT'S CLINIC</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                Senior consultant skin care clinic specializing in pediatric dermatology, PRP hair growth, and laser scar repair therapies in Banjara Hills, Hyderabad.
              </p>
              
              <div className="space-y-2 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#FF8A8A] shrink-0" />
                  <span>Road No. 2, Beside Birth Place Hospital, L V Prasad Eye Hospital Road, Opposite Harley Davidson Showroom, Banjara Hills, Hyderabad, Telangana 500034</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF8A8A] shrink-0" />
                  <a href="tel:+919492571972" className="hover:text-white transition-colors">+91 9492571972</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF8A8A] shrink-0" />
                  <a href="mailto:info@drnikhatskinclinic.com" className="hover:text-white transition-colors">info@drnikhatskinclinic.com</a>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-sm uppercase font-extrabold text-white tracking-wider">Opening Timings</h4>
              <div className="text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="text-white font-semibold">11:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Dr. Nikhat Consults</span>
                  <span className="text-white font-semibold">12:00 PM - 07:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-rose-400 font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-sm uppercase font-extrabold text-white tracking-wider">Directions</h4>
              
              {/* Map Canvas Mock */}
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 h-32 relative flex items-center justify-center p-4">
                <div className="text-center space-y-1 relative z-10">
                  <MapPin className="w-6 h-6 text-[#FF8A8A] mx-auto" />
                  <p className="text-white font-bold text-xs">Road No. 2, Banjara Hills</p>
                  <p className="text-[10px] text-slate-400">Beside Birth Place, Opp. Harley Davidson</p>
                </div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/3 left-0 right-0 h-1 bg-white"></div>
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-white"></div>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=Beside+Birth+Place+Hospital+Road+No+2+Banjara+Hills+Hyderabad" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-xs transition-colors border border-slate-700"
              >
                Get Directions in Google Maps
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Dr. Syeda Nikhat's Skin Care Clinic. All rights reserved. Dr. Syeda Nikhat Baquer (MBBS, DDVL). Designed for premium pediatric & family dermatology.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

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
  Scissors,
  CheckCircle
} from 'lucide-react';

export default function SikaraClinicsBanjaraHillsPage() {
  // Treatments Selector State
  const [selectedTreatment, setSelectedTreatment] = useState('laser');

  // Questionnaire State
  const [qAnswers, setQAnswers] = useState({
    concern: '',
    sunReaction: '',
    skinType: ''
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Laser Hair Reduction',
    date: '',
    time: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false);

  // Treatments Data
  const treatments = {
    laser: {
      id: 'Laser Hair Reduction',
      title: 'Laser Hair Reduction',
      tagline: 'Permanent, pain-free hair reduction using USFDA-approved technology.',
      description: 'Our advanced laser hair reduction treatments target hair follicles at the root. Safe for all skin types and body parts, providing smooth, hair-free skin over a course of recommended sessions.',
      duration: '45 - 90 mins',
      recovery: 'Zero downtime',
      ideal: 'Anyone looking for long-term reduction of facial or body hair.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
    },
    tightening: {
      id: 'Skin Tightening',
      title: 'Skin Tightening',
      tagline: 'Non-surgical collagen stimulation to lift, firm, and restore skin elasticity.',
      description: 'Utilizing state-of-the-art radiofrequency and ultrasound energy, we stimulate deep collagen production to lift saggy skin, define contours, and soften fine lines around the face and neck.',
      duration: '60 mins',
      recovery: 'Mild redness for 2-4 hours',
      ideal: 'Clients experiencing mild-to-moderate skin laxity or early signs of aging.',
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=800'
    },
    acne: {
      id: 'Acne Treatments',
      title: 'Acne Treatments',
      tagline: 'Targeted clinical therapy for active acne, sebum control, and scar prevention.',
      description: 'A multi-step medical approach combining gentle chemical peels, comedone extraction, and light therapy to eliminate acne-causing bacteria, unclog pores, and restore clear skin texture.',
      duration: '45 mins',
      recovery: '1-2 days of mild flaking',
      ideal: 'Individuals dealing with active acne breakouts, blackheads, or inflammatory skin conditions.',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
    }
  };

  // Questionnaire handlers
  const handleQChange = (question, answer) => {
    const updated = { ...qAnswers, [question]: answer };
    setQAnswers(updated);
    
    // Check if all answered to generate result
    if (updated.concern && updated.sunReaction && updated.skinType) {
      let recommendation = '';
      let explanation = '';
      
      if (updated.concern === 'Acne & Blemishes') {
        recommendation = 'Customized Acne Treatment Program';
        explanation = 'Based on your concern, we recommend our specialized Acne Treatment which combines salicylic peels and blue light therapy to clear active acne and regulate oil production.';
      } else if (updated.concern === 'Sagging Skin / Laxity') {
        recommendation = 'Non-Invasive RF Skin Tightening';
        explanation = 'To address skin laxity, our Radiofrequency Skin Tightening will stimulate deep collagen fibers to lift and firm your skin with zero recovery time.';
      } else if (updated.concern === 'Unwanted Hair') {
        recommendation = 'USFDA Laser Hair Reduction';
        explanation = 'Our triple-wavelength Laser Hair Reduction is ideal for permanent hair removal. It is safe and customized to your skin type.';
      } else {
        recommendation = 'Comprehensive Skincare Consultation';
        explanation = 'We recommend an in-person assessment with Dr. Sanky Divya to map out a tailored medical skincare routine.';
      }
      
      setAssessmentResult({ recommendation, explanation });
    }
  };

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
    // Clear error
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
    <div className="min-h-screen w-full bg-white text-slate-800 font-sans relative z-10 selection:bg-sky-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-sky-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center shadow-md shadow-sky-500/20">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-sky-600 block leading-tight">
                  SIKARA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block -mt-1">
                  CLINICS
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors">About Dr. Divya</a>
              <a href="#treatments" className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors">Treatments</a>
              <a href="#assessment" className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors">Skin Quiz</a>
              <a href="#results" className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors">Case Studies</a>
              <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors">Reviews</a>
            </div>

            <a 
              href="#appointment-booking" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-full shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-sky-50/50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/70 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky-500" />
                Premium Skin & Aesthetic Clinic in Banjara Hills
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Radiant, Healthy Skin <br />
                <span className="text-sky-500">Crafted by Experts.</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Welcome to Sikara Clinics, where clinical dermatological expertise meets state-of-the-art technology. Under the leadership of <strong>Dr. Sanky Divya</strong>, we offer highly personalized plans for laser hair reduction, skin tightening, and active acne cure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#appointment-booking" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-full shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5"
                >
                  Schedule Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#treatments" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full shadow-xs hover:bg-slate-50 transition-all"
                >
                  Explore Treatments
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-500" />
                  USFDA Approved Technology
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-500" />
                  Customized Care Plans
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-sky-300 rounded-[2.5rem] rotate-3 scale-[1.02] opacity-20 blur-lg"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800" 
                  alt="Sikara Skincare Treatment" 
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-sky-100 shadow-lg">
                  <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-1">Clinic Vibe</p>
                  <p className="text-sm font-bold text-slate-800">Advanced diagnostic equipment & relaxing hospitality designed for your ultimate comfort.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-sky-50 border-y border-sky-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">10k+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Happy Patients</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">98.4%</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">12+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">15+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">USFDA Devices</p>
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
              <div className="absolute inset-0 bg-sky-500 rounded-3xl rotate-2 scale-[1.02] opacity-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Sanky Divya" 
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">Dr. Sanky Divya</h3>
                  <p className="text-xs text-sky-300 font-medium">Chief Dermatologist & Medical Director</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Meet Our Expert Dermatologist
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dr. Sanky Divya <span className="text-lg font-semibold text-slate-500 block sm:inline sm:ml-2">(MBBS, DDVL)</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                Dr. Sanky Divya is an esteemed, board-certified dermatologist and cosmetic physician with over a decade of clinical experience. Having completed her medical training and specialization in Dermatology, Venereology, and Leprosy (DDVL) from prestigious institutions, she is dedicated to providing high-quality, scientifically-proven treatments for a wide variety of skin, hair, and aesthetic concerns.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Her clinical philosophy is rooted in customization—she believes that no two skins are the same, and therefore, every patient deserves a diagnostic approach tailored to their genetic makeup, lifestyle, and unique beauty goals.
              </p>

              {/* Bio Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-1 text-sky-600 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Specialist training in Laser aesthetics</h4>
                    <p className="text-xs text-slate-500">Expertise in advanced laser hair reduction & scars.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-1 text-sky-600 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Non-surgical anti-aging methods</h4>
                    <p className="text-xs text-slate-500">Certified practitioner of high-focused RF skin lifting.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-1 text-sky-600 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Active Member of Dermatological Bodies</h4>
                    <p className="text-xs text-slate-500">Committed to medical research and safe aesthetic ethics.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-1 text-sky-600 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Patient-Centric Transparency</h4>
                    <p className="text-xs text-slate-500">Prioritizing realistic outcomes and healthy, glowing skin.</p>
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
            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest block mb-2">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Customized Aesthetic Treatments</h2>
            <p className="text-slate-500 mt-3">Click on a treatment below to view clinical details, recovery information, and ideal candidate guidelines.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0">
              <button 
                onClick={() => setSelectedTreatment('laser')}
                className={`flex-1 text-left px-6 py-5 rounded-xl border font-bold transition-all shrink-0 ${
                  selectedTreatment === 'laser' 
                    ? 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Laser Hair Reduction
              </button>
              <button 
                onClick={() => setSelectedTreatment('tightening')}
                className={`flex-1 text-left px-6 py-5 rounded-xl border font-bold transition-all shrink-0 ${
                  selectedTreatment === 'tightening' 
                    ? 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Skin Tightening (RF)
              </button>
              <button 
                onClick={() => setSelectedTreatment('acne')}
                className={`flex-1 text-left px-6 py-5 rounded-xl border font-bold transition-all shrink-0 ${
                  selectedTreatment === 'acne' 
                    ? 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Acne Treatments
              </button>
            </div>

            {/* Right details panel */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-md">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-sky-500 block mb-1">Selected Treatment Details</span>
                    <h3 className="text-2xl font-extrabold text-slate-900">{treatments[selectedTreatment].title}</h3>
                    <p className="text-sky-600 font-medium text-sm mt-1">{treatments[selectedTreatment].tagline}</p>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">{treatments[selectedTreatment].description}</p>
                  
                  {/* Treatment Specs */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold">Treatment Time</span>
                      <span className="text-sm font-bold text-slate-800 inline-flex items-center gap-1.5 mt-1">
                        <Clock className="w-4 h-4 text-sky-500" />
                        {treatments[selectedTreatment].duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold">Recovery Period</span>
                      <span className="text-sm font-bold text-slate-800 inline-flex items-center gap-1.5 mt-1">
                        <Heart className="w-4 h-4 text-sky-500" />
                        {treatments[selectedTreatment].recovery}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-400 block uppercase font-bold mb-1">Ideal Candidate</span>
                    <p className="text-xs text-slate-600 italic bg-sky-50/50 p-3 rounded-lg border border-sky-100/50">
                      "{treatments[selectedTreatment].ideal}"
                    </p>
                  </div>

                  <button 
                    onClick={() => triggerBookTreatment(treatments[selectedTreatment].id)}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-full transition-colors w-full sm:w-auto"
                  >
                    Select & Book This Treatment
                  </button>
                </div>
                
                <div className="md:col-span-5">
                  <div className="rounded-xl overflow-hidden h-full min-h-[220px] max-h-[320px] shadow-sm relative">
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
            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest block mb-2">Self-Assessment</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Virtual Skin Assessment</h2>
            <p className="text-slate-500 mt-2">Answer three simple questions to find which skin therapy is recommended for your profile.</p>
          </div>

          <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Q1 */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs">1</span>
                What is your primary skin concern?
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {['Acne & Blemishes', 'Sagging Skin / Laxity', 'Unwanted Hair', 'Uneven Tone'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleQChange('concern', opt)}
                    className={`px-4 py-3 rounded-lg border text-xs font-bold transition-all text-center ${
                      qAnswers.concern === opt 
                        ? 'bg-sky-500 text-white border-sky-500 shadow-sm' 
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
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs">2</span>
                How does your skin react to the sun?
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {['Burns easily', 'Tans easily', 'Burns then tans', 'Rarely burns'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleQChange('sunReaction', opt)}
                    className={`px-4 py-3 rounded-lg border text-xs font-bold transition-all text-center ${
                      qAnswers.sunReaction === opt 
                        ? 'bg-sky-500 text-white border-sky-500 shadow-sm' 
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
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs">3</span>
                What is your skin type?
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {['Dry', 'Oily', 'Combination', 'Sensitive'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleQChange('skinType', opt)}
                    className={`px-4 py-3 rounded-lg border text-xs font-bold transition-all text-center ${
                      qAnswers.skinType === opt 
                        ? 'bg-sky-500 text-white border-sky-500 shadow-sm' 
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
              <div className="bg-white border-2 border-sky-300 rounded-xl p-5 sm:p-6 shadow-md animate-fade-in">
                <div className="flex items-center gap-2.5 text-sky-600 mb-2">
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <span className="font-extrabold text-sm uppercase tracking-wider">Assessment Recommendation</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Recommended: {assessmentResult.recommendation}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{assessmentResult.explanation}</p>
                
                <button
                  type="button"
                  onClick={() => triggerBookTreatment(assessmentResult.recommendation)}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-full transition-colors"
                >
                  Book Recommended Care
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
            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest block mb-2">Proof of Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Clinical Case Studies</h2>
            <p className="text-slate-500 mt-2">Authentic examples demonstrating skin transformations under our clinical programs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-sky-50">
                  <img 
                    src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800" 
                    alt="Facial Skincare Transformation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-sky-500 text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Acne Program
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Patient ID: SK-291</span>
                    <span>Duration: 4 Months</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-lg">Acne Clearance & Tone Care</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Patient struggled with persistent moderate inflammatory acne on both cheeks, causing severe post-inflammatory pigmentation.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Treatment Administered</p>
                    <p className="text-xs font-semibold text-slate-700">4 sessions of Custom Salicylic Peel + Blue Light Therapy</p>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50/60 p-4 border-t border-slate-100 text-center font-bold text-xs text-sky-600">
                Outcome: 88% Clearance of Active Lesions
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-sky-50">
                  <img 
                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800" 
                    alt="Hair Reduction Treatment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-sky-500 text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Hair Reduction
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Patient ID: SK-108</span>
                    <span>Duration: 6 Sessions</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-lg">Triple Wavelength LHR</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hirsutism-driven thick facial hair growth. Patient wanted long-term hair clearance with zero skin discoloration.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Treatment Administered</p>
                    <p className="text-xs font-semibold text-slate-700">6 sessions of USFDA Triple-Wavelength Laser</p>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50/60 p-4 border-t border-slate-100 text-center font-bold text-xs text-sky-600">
                Outcome: Permanent hair reduction in chin & neck area
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-sky-50">
                  <img 
                    src="https://images.unsplash.com/photo-1620331702289-5484cd359604?auto=format&fit=crop&q=80&w=800" 
                    alt="Skin Tightening Result" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-sky-500 text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Skin Tightening
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Patient ID: SK-077</span>
                    <span>Duration: 2 Months</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-lg">Collagen Lift & Jawline Contour</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mild sagging around cheeks and early jowls. Seeking a non-surgical contouring therapy with zero downtime.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Treatment Administered</p>
                    <p className="text-xs font-semibold text-slate-700">2 sessions of High-Frequency Radiofrequency lift</p>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50/60 p-4 border-t border-slate-100 text-center font-bold text-xs text-sky-600">
                Outcome: Visible cheek lifting & skin elasticity improvement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest block mb-2">Patient Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What Our Patients Say</h2>
            <p className="text-slate-500 mt-2">Real testimonials from individuals who completed skin treatments at our Banjara Hills clinic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-sky-50/50 border border-sky-100 p-6 sm:p-8 rounded-2xl relative">
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "I visited Sikara Clinics for my laser hair reduction. Dr. Sanky Divya is very detailed. She checked my skin type and adjusted the settings specifically for me. I am done with 5 sessions and the hair growth has almost stopped completely. Very happy!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-700 text-sm uppercase">
                  SN
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Srilekha N.</h4>
                  <p className="text-[11px] text-slate-400">Banjara Hills, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-sky-50/50 border border-sky-100 p-6 sm:p-8 rounded-2xl relative">
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "I was struggling with severe adult acne that left deep red marks. The chemical peels planned by Dr. Divya worked wonders. She is patient, clear, and explains the clinical reasons behind the steps. My face is so much clearer now."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-700 text-sm uppercase">
                  VK
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Varun K.</h4>
                  <p className="text-[11px] text-slate-400">Jubilee Hills, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-sky-50/50 border border-sky-100 p-6 sm:p-8 rounded-2xl relative">
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "My skin had started to sag slightly near the chin. I underwent the RF Skin Tightening treatment here. The clinic is extremely clean, hygienic, and they follow strict safety guidelines. The lift is natural and subtle."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-700 text-sm uppercase">
                  MP
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Madhavi P.</h4>
                  <p className="text-[11px] text-slate-400">Begumpet, Hyderabad</p>
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
            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest block mb-2">Book Slot</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Request a Skin Consultation</h2>
            <p className="text-slate-500 mt-2">Fill in the details below to request a premium slot with Dr. Sanky Divya.</p>
          </div>

          <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-6 sm:p-10">
            {isBooked ? (
              // Success confirmation card
              <div className="text-center space-y-6 py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-800">Booking Request Received!</h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{bookingForm.name}</strong>. We have registered your request. Our clinic staff will call you shortly on <strong className="text-slate-800">{bookingForm.phone}</strong> to confirm your exact time.
                  </p>
                </div>
                
                {/* Details Summary */}
                <div className="bg-slate-50 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto border border-slate-100">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-400">Dermatologist</span>
                    <span className="font-bold text-slate-700">Dr. Sanky Divya (MBBS, DDVL)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-400">Treatment</span>
                    <span className="font-bold text-slate-700">{bookingForm.treatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-400">Preferred Date</span>
                    <span className="font-bold text-slate-700">{bookingForm.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Preferred Slot</span>
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
                      treatment: 'Laser Hair Reduction',
                      date: '',
                      time: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full text-sm transition-colors shadow-md"
                >
                  Book Another Appointment
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
                        placeholder="e.g. Priyadarshini Rao" 
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.name 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-sky-100 focus:border-sky-500'
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
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number (10 digits) *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-medium text-xs">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleInputChange}
                        placeholder="81219 68111" 
                        className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.phone 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-sky-100 focus:border-sky-500'
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
                        placeholder="name@domain.com" 
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formErrors.email 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-sky-100 focus:border-sky-500'
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
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Preferred Treatment</label>
                    <select 
                      name="treatment"
                      value={bookingForm.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                    >
                      <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                      <option value="Skin Tightening">Skin Tightening</option>
                      <option value="Acne Treatments">Acne Treatments</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Preferred Date *</label>
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
                            : 'border-slate-200 focus:ring-sky-100 focus:border-sky-500'
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
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Time Slot *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Clock className="w-4 h-4" />
                      </span>
                      <select 
                        name="time"
                        value={bookingForm.time}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500 transition-all ${
                          formErrors.time 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500' 
                            : 'border-slate-200 focus:ring-sky-100 focus:border-sky-500'
                        }`}
                      >
                        <option value="">Select a Slot</option>
                        <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
                        <option value="12:00 PM - 02:00 PM">Midday (12:00 PM - 02:00 PM)</option>
                        <option value="03:00 PM - 05:00 PM">Afternoon (03:00 PM - 05:00 PM)</option>
                        <option value="05:00 PM - 07:00 PM">Evening (05:00 PM - 07:00 PM)</option>
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
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Notes or Symptoms (Optional)</label>
                  <textarea 
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows="3" 
                    placeholder="Briefly describe your concerns, medication history, or treatment goals..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 text-base font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-xl transition-all shadow-lg shadow-sky-500/25 active:scale-95"
                >
                  Send Booking Request
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
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
                  <Sparkles className="text-white w-4 h-4" />
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">SIKARA CLINICS</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                A premium, clinical dermatology and aesthetic center in Banjara Hills, Hyderabad. Dedicated to offering safe, high-efficacy laser, scar, anti-aging, and acne treatments.
              </p>
              
              <div className="space-y-2 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                  <span>1st Floor, H.No: 8-2-120/77/1 & 3, Road No. 2, Opposite KBR Park, Banjara Hills, Hyderabad, Telangana 500034</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                  <a href="tel:+918121968111" className="hover:text-white transition-colors">+91 8121968111</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                  <a href="mailto:info@sikaraclinics.com" className="hover:text-white transition-colors">info@sikaraclinics.com</a>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-sm uppercase font-extrabold text-white tracking-wider">Opening Hours</h4>
              <div className="text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Dermatologist Consultation</span>
                  <span className="text-white font-semibold">11:00 AM - 05:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-sky-400 font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Maps Mock & Quick Links */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-sm uppercase font-extrabold text-white tracking-wider">Directions</h4>
              
              {/* Map Canvas Mock */}
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 h-32 relative flex items-center justify-center p-4">
                <div className="text-center space-y-1 relative z-10">
                  <MapPin className="w-6 h-6 text-sky-500 mx-auto" />
                  <p className="text-white font-bold text-xs">Road No. 2, Banjara Hills</p>
                  <p className="text-[10px] text-slate-400">Opposite KBR National Park Entry Gate</p>
                </div>
                {/* Background design representing road lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-white"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white"></div>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=Sikara+Clinics+Banjara+Hills+Hyderabad" 
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
            <p>© {new Date().getFullYear()} Sikara Clinics. All rights reserved. Dr. Sanky Divya (MBBS, DDVL). Designed for aesthetic skincare excellence.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

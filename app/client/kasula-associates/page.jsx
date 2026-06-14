"use client";

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  FileText, 
  Briefcase, 
  Award, 
  CheckCircle, 
  Quote, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Calculator, 
  ShieldCheck, 
  HelpCircle, 
  Menu, 
  X, 
  Check, 
  ChevronDown, 
  MessageSquare,
  Sparkles,
  Users,
  Percent,
  Layers
} from 'lucide-react';

export default function KasulaAssociates() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonialTab, setActiveTestimonialTab] = useState('corporate');
  const [quizAnswers, setQuizAnswers] = useState({
    entityType: '',
    turnover: '',
    primaryNeed: ''
  });
  const [quizResult, setQuizResult] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Tax & Compliance Audit',
    message: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services list
  const services = [
    {
      id: 'corp-tax',
      icon: <Building2 className="w-6 h-6 text-[#D97753]" />,
      title: 'Corporate Tax Advisory',
      description: 'Strategic tax planning and filing structured to minimise liabilities for Private and Public Limited firms.',
      tags: ['Tax Strategy', 'Compliance', 'Audit Ready'],
      bg: 'bg-[#FAF7F2]'
    },
    {
      id: 'gst-compliance',
      icon: <Layers className="w-6 h-6 text-[#5C6E58]" />,
      title: 'GST Audit & Representation',
      description: 'Complete GST management from periodic reconciliation to representation in department audits.',
      tags: ['GST Audit', 'Filing', 'Representations'],
      bg: 'bg-[#F0F2EE]'
    },
    {
      id: 'nri-tax',
      icon: <Users className="w-6 h-6 text-[#D97753]" />,
      title: 'NRI & International Taxation',
      description: 'Expert guidance on DTAA, remittance certification (Form 15CB), and overseas assets reporting.',
      tags: ['DTAA', 'Remittances', 'FEMA Compliance'],
      bg: 'bg-[#FDF2EC]'
    },
    {
      id: 'bookkeeping',
      icon: <FileText className="w-6 h-6 text-[#5C6E58]" />,
      title: 'Bespoke Bookkeeping & MIS',
      description: 'Real-time bookkeeping and comprehensive monthly management reporting for high-growth businesses.',
      tags: ['Monthly MIS', 'Payroll', 'Accounting'],
      bg: 'bg-[#FAF7F2]'
    },
    {
      id: 'startup-valuation',
      icon: <Percent className="w-6 h-6 text-[#D97753]" />,
      title: 'Valuation & ROC Filing',
      description: 'Certified enterprise valuation, ROC compliance, and regulatory support for fundraising and mergers.',
      tags: ['ROC Advisory', 'Valuations', 'M&A'],
      bg: 'bg-[#FDF2EC]'
    },
    {
      id: 'virtual-cfo',
      icon: <Briefcase className="w-6 h-6 text-[#5C6E58]" />,
      title: 'Strategic CFO Advisory',
      description: 'Hands-on virtual CFO services for budget allocation, capital planning, and financial oversight.',
      tags: ['CFO Services', 'Budgeting', 'Fundraising Support'],
      bg: 'bg-[#F0F2EE]'
    }
  ];

  // Testimonials data
  const testimonials = {
    corporate: [
      {
        quote: "Kasula & Associates transformed our corporate audit preparation. Their deep understanding of international tax frameworks saved us significant compliance friction. A truly premium experience.",
        author: "Raghavendra Rao",
        role: "CFO, TechFlow Industries Pvt Ltd",
        location: "Gachibowli, Hyderabad"
      },
      {
        quote: "The team provides prompt GST advisory and representation services. Their strategic approach to tax restructuring is commendable and highly professional.",
        author: "Meera Deshmukh",
        role: "Managing Director, GreenRoots Organics",
        location: "Kondapur, Hyderabad"
      }
    ],
    individual: [
      {
        quote: "As an NRI, filing taxes in India was complex. Their specialists managed my DTAA evaluation and capital gains file smoothly. I highly appreciate their transparency.",
        author: "Dr. A. Srinivas",
        role: "Consultant Cardiologist",
        location: "London, UK"
      },
      {
        quote: "Excellent high-net-worth tax advisory. Their customized tax planning strategies helped me structure my investments and manage liabilities efficiently.",
        author: "K. R. Varma",
        role: "Retired Executive & Investor",
        location: "Jubilee Hills, Hyderabad"
      }
    ]
  };

  // Organic Consultation Quiz logic
  const handleQuizSelect = (field, val) => {
    const nextAnswers = { ...quizAnswers, [field]: val };
    setQuizAnswers(nextAnswers);

    // Calculate result immediately if all 3 are filled
    if (nextAnswers.entityType && nextAnswers.turnover && nextAnswers.primaryNeed) {
      evaluateQuiz(nextAnswers);
    }
  };

  const evaluateQuiz = (answers) => {
    let result = {
      primaryService: '',
      timeline: '',
      estimatedFrequency: '',
      tip: ''
    };

    if (answers.entityType === 'private-limited') {
      result.primaryService = 'Corporate Tax Advisory & GST Compliance';
      result.timeline = 'Requires monthly reconciliation and quarterly reviews.';
      result.estimatedFrequency = 'Annual Audit + Monthly Accounting';
      result.tip = 'Businesses with over ₹20L turnover need structured GST registers. We recommend setting up automated reconciliation sheets.';
    } else if (answers.entityType === 'nri') {
      result.primaryService = 'NRI International Taxation Planning';
      result.timeline = 'Best filed before July 31st each year with Form 15CA/CB support.';
      result.estimatedFrequency = 'Periodic Advisory & Annual Filing';
      result.tip = 'Capital gains from property sales in India require DTAA evaluation to avoid double taxation.';
    } else {
      result.primaryService = 'Proprietorship Tax & Bookkeeping Combo';
      result.timeline = 'Quarterly filings and annual assessment audits.';
      result.estimatedFrequency = 'Bi-annual Review';
      result.tip = 'Under Section 44AD, presumptive taxation might offer lower compliance costs if you qualify.';
    }

    setQuizResult(result);
  };

  const resetQuiz = () => {
    setQuizAnswers({ entityType: '', turnover: '', primaryNeed: '' });
    setQuizResult(null);
  };

  // Contact Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.phone || !contactForm.agreeToTerms) {
      alert("Please fill in all required fields and accept the terms.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setContactForm({
        name: '',
        email: '',
        phone: '',
        service: 'Tax & Compliance Audit',
        message: '',
        agreeToTerms: false
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-[#2C2E2A] selection:bg-[#FAF0E6] selection:text-[#D97753]">
      
      {/* Organic Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FDF2EC]/60 via-[#F3EFE9]/40 to-transparent rounded-full filter blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-[800px] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F0F2EE]/50 via-[#FAF7F2]/30 to-transparent rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EBE6DD] py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[1rem] bg-[#5C6E58] flex items-center justify-center shadow-md shadow-[#5C6E58]/20">
                <span className="text-[#FAF7F2] font-serif font-semibold text-2xl">K</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wide block leading-none">Kasula & Associates</span>
                <span className="text-[0.68rem] tracking-widest text-[#D97753] uppercase font-semibold block mt-1">Chartered Accountants</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className="text-sm font-medium text-[#5A5C59] hover:text-[#D97753] transition-colors">Services</a>
              <a href="#quiz" className="text-sm font-medium text-[#5A5C59] hover:text-[#D97753] transition-colors">Tax Assessment</a>
              <a href="#about" className="text-sm font-medium text-[#5A5C59] hover:text-[#D97753] transition-colors">Our Firm</a>
              <a href="#testimonials" className="text-sm font-medium text-[#5A5C59] hover:text-[#D97753] transition-colors">Client Voices</a>
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#5C6E58] hover:bg-[#4E5E4A] rounded-full shadow-lg shadow-[#5C6E58]/15 hover:shadow-[#5C6E58]/35 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                Request Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#5A5C59] hover:text-[#2C2E2A] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF7F2] border-b border-[#EBE6DD] shadow-lg py-6 px-6 flex flex-col space-y-4 z-40 animate-fade-in">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#5A5C59] hover:text-[#D97753]"
            >
              Services
            </a>
            <a 
              href="#quiz" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#5A5C59] hover:text-[#D97753]"
            >
              Tax Assessment
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#5A5C59] hover:text-[#D97753]"
            >
              Our Firm
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#5A5C59] hover:text-[#D97753]"
            >
              Client Voices
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-6 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#5C6E58] rounded-full"
            >
              Request Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F2EE] border border-[#DCE2D9] text-[#5C6E58] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#D97753] animate-pulse" />
                Est. 2001 • 25 Years of Integrity
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-[#2C2E2A] leading-[1.15] mb-6">
                Financial stewardship, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97753] to-[#B05B3A]">
                  bespoke to your vision.
                </span>
              </h1>
              <p className="text-lg text-[#5A5C59] mb-8 leading-relaxed max-w-xl">
                We bridge classical auditing integrity with modern, digital tax solutions. We specialize in corporate compliance, GST consulting, and high-net-worth tax advisory.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-[#FAF7F2] bg-[#5C6E58] hover:bg-[#4E5E4A] rounded-2xl shadow-xl shadow-[#5C6E58]/15 hover:shadow-[#5C6E58]/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-[#5C6E58] bg-[#FAF7F2] border border-[#DCE2D9] hover:bg-[#F0F2EE] rounded-2xl transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-[#EBE6DD] grid grid-cols-3 gap-6 text-[#5A5C59]">
                <div>
                  <span className="block text-2xl font-bold font-serif text-[#2C2E2A]">25+ Yrs</span>
                  <span className="text-xs text-[#7A7C79] uppercase tracking-wider font-semibold">Legacy</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-serif text-[#2C2E2A]">₹500Cr+</span>
                  <span className="text-xs text-[#7A7C79] uppercase tracking-wider font-semibold">Clients Asset Base</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-serif text-[#2C2E2A]">99.2%</span>
                  <span className="text-xs text-[#7A7C79] uppercase tracking-wider font-semibold">Audit Accuracy</span>
                </div>
              </div>
            </div>

            {/* Right Card / Interactive Background Element */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D97753]/10 to-[#5C6E58]/10 rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-lg"></div>
              
              {/* Organic Rounded Premium Container */}
              <div className="relative bg-[#FAF7F2] border border-[#EBE6DD] p-8 rounded-[2rem] shadow-xl shadow-[#ECE5DB]/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-bold font-serif text-[#2C2E2A]">Tax Advisory Desk</h3>
                    <p className="text-xs text-[#7A7C79]">Real-time regulatory insights</p>
                  </div>
                  <div className="w-10 h-10 bg-[#F0F2EE] rounded-xl flex items-center justify-center text-[#5C6E58]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F0F2EE] border border-[#DCE2D9]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5C6E58]">GST Compliance</span>
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#D97753] border border-[#F4DCD1] font-semibold">Critical</span>
                    </div>
                    <p className="text-xs text-[#5A5C59] leading-relaxed">
                      GST return deadlines are strict. Avoid penalty triggers under Rule 86B with regular reconciliation.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FDF2EC] border border-[#F4DCD1]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D97753]">Corporate Audit</span>
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#5C6E58] border border-[#DCE2D9] font-semibold">Strategic</span>
                    </div>
                    <p className="text-xs text-[#5A5C59] leading-relaxed">
                      Ensure your transfer pricing documentation is aligned with global OECD standards ahead of audit periods.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EBE6DD] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calculator className="w-5 h-5 text-[#5C6E58]" />
                      <span className="text-xs font-semibold text-[#2C2E2A]">Need custom planning?</span>
                    </div>
                    <a href="#quiz" className="text-xs font-bold text-[#D97753] hover:text-[#B05B3A] flex items-center gap-1">
                      Take Quiz <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#FAF7F2] border-t border-[#EBE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#D97753] uppercase tracking-widest mb-3">Our Competency</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2C2E2A] mb-4">Chartered Audit & Consultancy</h3>
            <p className="text-[#5A5C59]">We provide thorough auditing, regulatory advisory, and bespoke taxation solutions designed to build robust corporate structures.</p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div 
                key={svc.id} 
                className={`p-8 rounded-[2rem] border border-[#EBE6DD] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${svc.bg} group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#EBE6DD] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {svc.icon}
                </div>
                
                <h4 className="text-xl font-serif font-bold text-[#2C2E2A] mb-3">{svc.title}</h4>
                <p className="text-[#5A5C59] text-sm leading-relaxed mb-6">{svc.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[0.7rem] font-semibold text-[#5C6E58] bg-[#F0F2EE] px-2.5 py-1 rounded-full border border-[#DCE2D9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="#contact" 
                  className="inline-flex items-center text-xs font-bold text-[#D97753] group-hover:text-[#B05B3A] transition-colors"
                >
                  Consult on this service
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Assessment Section (Quiz) */}
      <section id="quiz" className="py-24 bg-[#F0F2EE] border-t border-b border-[#DCE2D9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EBE6DD] text-[#5C6E58] text-xs font-semibold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#D97753]" />
              Smart Match Tool
            </div>
            <h3 className="text-3xl font-serif font-extrabold text-[#2C2E2A] mb-4">Discover Your Compliance Checklist</h3>
            <p className="text-[#5A5C59] text-sm">Select options below to discover the exact filings, regulatory timelines, and recommended structures for your category.</p>
          </div>

          <div className="bg-[#FAF7F2] border border-[#EBE6DD] rounded-[2rem] p-8 md:p-10 shadow-lg shadow-[#5C6E58]/5">
            
            {/* Step 1 */}
            <div className="mb-6">
              <span className="block text-xs font-bold text-[#D97753] uppercase tracking-wider mb-3">1. Select Your Entity Type</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'private-limited', label: 'Private Limited / LLP' },
                  { id: 'nri', label: 'Non-Resident Indian (NRI)' },
                  { id: 'proprietor', label: 'Proprietorship / Startup' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuizSelect('entityType', item.id)}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold text-center transition-all ${
                      quizAnswers.entityType === item.id
                        ? 'bg-[#5C6E58] text-[#FAF7F2] border-[#5C6E58]'
                        : 'bg-white border-[#EBE6DD] hover:bg-[#F0F2EE]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-6">
              <span className="block text-xs font-bold text-[#D97753] uppercase tracking-wider mb-3">2. Estimated Annual Turnover</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'under-20L', label: 'Under ₹20 Lakhs' },
                  { id: '20L-1Cr', label: '₹20 Lakhs - ₹1 Crore' },
                  { id: 'above-1Cr', label: 'Above ₹1 Crore' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuizSelect('turnover', item.id)}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold text-center transition-all ${
                      quizAnswers.turnover === item.id
                        ? 'bg-[#5C6E58] text-[#FAF7F2] border-[#5C6E58]'
                        : 'bg-white border-[#EBE6DD] hover:bg-[#F0F2EE]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <span className="block text-xs font-bold text-[#D97753] uppercase tracking-wider mb-3">3. Primary Regulatory Need</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'tax-saving', label: 'Tax Planning & Advisory' },
                  { id: 'statutory-audit', label: 'Statutory/GST Audit' },
                  { id: 'forex-repatriation', label: 'Forex & Remittance' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuizSelect('primaryNeed', item.id)}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold text-center transition-all ${
                      quizAnswers.primaryNeed === item.id
                        ? 'bg-[#5C6E58] text-[#FAF7F2] border-[#5C6E58]'
                        : 'bg-white border-[#EBE6DD] hover:bg-[#F0F2EE]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Panel */}
            {quizResult ? (
              <div className="p-6 rounded-2xl bg-[#F0F2EE] border border-[#DCE2D9] animate-slide-up">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#5C6E58]" />
                  <h4 className="font-serif font-bold text-[#2C2E2A]">Your Customized Compliance Plan</h4>
                </div>
                
                <div className="space-y-3 mt-4 text-sm">
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#7A7C79] block">Recommended Service:</span>
                    <span className="text-[#2C2E2A] font-bold">{quizResult.primaryService}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#7A7C79] block">Filing Cycle:</span>
                    <span className="text-[#5A5C59]">{quizResult.timeline}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#7A7C79] block">Engagement Recommendation:</span>
                    <span className="text-[#5C6E58] font-bold">{quizResult.estimatedFrequency}</span>
                  </div>
                  <div className="pt-2 border-t border-[#DCE2D9] mt-2">
                    <span className="text-xs font-bold text-[#D97753] block">Expert Compliance Advisory:</span>
                    <p className="text-[#5A5C59] text-xs leading-relaxed italic mt-1">"{quizResult.tip}"</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#contact" 
                    onClick={() => {
                      setContactForm(prev => ({
                        ...prev, 
                        service: quizResult.primaryService,
                        message: `Hi, I did your compliance assessment. We are a ${quizAnswers.entityType} with ${quizAnswers.turnover} turnover, needing assistance with ${quizAnswers.primaryNeed}.`
                      }));
                    }}
                    className="inline-flex justify-center items-center px-6 py-3 bg-[#5C6E58] text-[#FAF7F2] font-semibold text-xs rounded-xl hover:bg-[#4E5E4A] transition-colors"
                  >
                    Send Report to Partner
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="px-6 py-3 bg-white border border-[#EBE6DD] text-[#5A5C59] font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Reset Assessment
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-[#7A7C79] border border-dashed border-[#EBE6DD] rounded-xl bg-white">
                Complete all 3 selections above to view your recommended compliance checklist.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Placeholder with Organic Style */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#D97753] rounded-[2rem] transform rotate-3 opacity-10"></div>
              <div className="relative bg-[#F0F2EE] border border-[#DCE2D9] rounded-[2rem] p-8 shadow-inner overflow-hidden aspect-[4/5] flex flex-col justify-between">
                
                {/* Brand watermark */}
                <div className="opacity-15 font-serif text-[6rem] font-bold text-[#5C6E58] select-none leading-none">
                  K&A
                </div>
                
                {/* Visual outline */}
                <div className="border border-[#DCE2D9]/80 rounded-[1.5rem] p-6 bg-[#FAF7F2]/90 backdrop-blur-sm shadow-sm relative z-10">
                  <h4 className="font-serif font-bold text-[#2C2E2A] text-lg">Partner Credentials</h4>
                  <ul className="space-y-3 mt-4 text-xs text-[#5A5C59]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5C6E58] shrink-0" />
                      Fellow Chartered Accountants (FCA)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5C6E58] shrink-0" />
                      ISA Certified System Auditors
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5C6E58] shrink-0" />
                      Approved Peer-Reviewed Firm Status
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#5C6E58] shrink-0" />
                      Insolvency Professionals Panelists
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About content */}
            <div className="lg:col-span-7">
              <h2 className="text-xs font-bold text-[#D97753] uppercase tracking-widest mb-3">Our Legacy</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2C2E2A] mb-6 leading-tight">
                Twenty-five years of tax integrity & trust.
              </h3>
              
              <div className="space-y-6 text-[#5A5C59] leading-relaxed text-sm">
                <p>
                  Founded by Senior Partner <strong>Mr. Kasula Srinivas, FCA</strong> in 2001, Kasula & Associates has grown into a trusted financial consulting firm. We represent both corporate enterprises and high-net-worth individuals in Hyderabad.
                </p>
                <p>
                  Under the guidance of <strong>Ms. Ananya Kasula, ACA, DISA</strong>, our managing partner, we have integrated cloud-based ledger software, digital reconciliation platforms, and secure online GST monitoring.
                </p>
                <p>
                  We are driven by a simple core values system: absolute precision, clear transparency, and proactive planning. We don't just file your returns; we establish a robust framework for corporate growth.
                </p>
              </div>

              {/* Partners info */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="p-5 rounded-2xl bg-[#FDF2EC] border border-[#F4DCD1]">
                  <h5 className="font-serif font-bold text-[#2C2E2A] text-base">Kasula Srinivas</h5>
                  <span className="text-[0.7rem] font-bold text-[#D97753] uppercase tracking-wider block mt-1">Founder & Senior Partner</span>
                  <p className="text-xs text-[#7A7C79] mt-2">Specialist in Direct Tax, Corporate Appellate Appeals, and Strategic Valuations.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F0F2EE] border border-[#DCE2D9]">
                  <h5 className="font-serif font-bold text-[#2C2E2A] text-base">Ananya Kasula</h5>
                  <span className="text-[0.7rem] font-bold text-[#5C6E58] uppercase tracking-wider block mt-1">Managing Partner</span>
                  <p className="text-xs text-[#7A7C79] mt-2">Expert in International Tax treaties, GST Audits, and Information Systems Audit.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#F0F2EE] border-t border-[#DCE2D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-[#D97753] uppercase tracking-widest mb-3">Client Endorsements</h2>
            <h3 className="text-3xl font-serif font-extrabold text-[#2C2E2A] mb-4">Trusted Across Sectors</h3>
            
            {/* Interactive Tabs */}
            <div className="inline-flex p-1.5 rounded-full bg-white border border-[#DCE2D9] mt-6">
              <button
                onClick={() => setActiveTestimonialTab('corporate')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTestimonialTab === 'corporate'
                    ? 'bg-[#5C6E58] text-[#FAF7F2]'
                    : 'text-[#5A5C59] hover:text-[#2C2E2A]'
                }`}
              >
                Corporate Advisory
              </button>
              <button
                onClick={() => setActiveTestimonialTab('individual')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTestimonialTab === 'individual'
                    ? 'bg-[#5C6E58] text-[#FAF7F2]'
                    : 'text-[#5A5C59] hover:text-[#2C2E2A]'
                }`}
              >
                Individual & HNW
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials[activeTestimonialTab].map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF7F2] border border-[#EBE6DD] rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 text-[#D97753]/15">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>
                
                <p className="text-[#2C2E2A] italic text-base leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-[#EBE6DD] mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#5C6E58] flex items-center justify-center text-[#FAF7F2] font-serif font-bold text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2C2E2A] text-sm">{t.author}</h5>
                    <p className="text-xs text-[#7A7C79]">{t.role} • <span className="text-[#5C6E58]">{t.location}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section (CTA) */}
      <section id="contact" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-[#FAF7F2] border border-[#EBE6DD] rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
            
            {/* Absolute Background Blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D97753] rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
            
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column Info */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2C2E2A] mb-6 leading-tight">
                  Initiate a <br/>
                  <span className="text-[#D97753]">discreet consultation</span>
                </h2>
                <p className="text-[#5A5C59] text-sm mb-8 leading-relaxed">
                  Provide your company details and specific regulatory requirements. Our partners will contact you directly to schedule an initial advisory review.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F0F2EE] border border-[#DCE2D9] flex items-center justify-center shrink-0 text-[#5C6E58]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#2C2E2A] font-bold text-sm">Our Registered Office</h4>
                      <p className="text-[#7A7C79] text-xs mt-1">#402, Signature Towers, Jubilee Hills, Road No. 36, Hyderabad - 500033</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FDF2EC] border border-[#F4DCD1] flex items-center justify-center shrink-0 text-[#D97753]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#2C2E2A] font-bold text-sm">Direct Office Line</h4>
                      <p className="text-[#7A7C79] text-xs mt-1">+91 (40) 2445 6789 (10:00 AM - 6:30 PM)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F0F2EE] border border-[#DCE2D9] flex items-center justify-center shrink-0 text-[#5C6E58]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#2C2E2A] font-bold text-sm">Consultation Desk</h4>
                      <p className="text-[#7A7C79] text-xs mt-1">partners@kasulaco.in</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column Custom Form */}
              <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#EBE6DD] rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-[#2C2E2A] mb-2">Request Advisory Recall</h3>
                <p className="text-[#7A7C79] text-xs mb-6">Required compliance information will help us assign the correct advisory partner.</p>
                
                {submitSuccess ? (
                  <div className="p-6 rounded-2xl bg-[#F0F2EE] border border-[#DCE2D9] text-center animate-slide-up">
                    <CheckCircle className="w-12 h-12 text-[#5C6E58] mx-auto mb-4" />
                    <h4 className="font-serif font-bold text-[#2C2E2A] text-lg mb-2">Consultation Request Received</h4>
                    <p className="text-[#5A5C59] text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us. A senior tax advisory partner from Kasula & Associates will call you within one business day.
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-6 py-2.5 bg-[#5C6E58] text-[#FAF7F2] font-semibold text-xs rounded-xl hover:bg-[#4E5E4A] transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#5C6E58] uppercase tracking-wider mb-2">Your Name *</label>
                        <input 
                          type="text" 
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="e.g. Anand Kumar" 
                          className="w-full px-4 py-3 rounded-xl border border-[#EBE6DD] bg-white text-sm focus:ring-1 focus:ring-[#5C6E58] focus:border-[#5C6E58] outline-none transition-all" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#5C6E58] uppercase tracking-wider mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="e.g. anand@techflow.in" 
                          className="w-full px-4 py-3 rounded-xl border border-[#EBE6DD] bg-white text-sm focus:ring-1 focus:ring-[#5C6E58] focus:border-[#5C6E58] outline-none transition-all" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#5C6E58] uppercase tracking-wider mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="e.g. +91 98450 12345" 
                          className="w-full px-4 py-3 rounded-xl border border-[#EBE6DD] bg-white text-sm focus:ring-1 focus:ring-[#5C6E58] focus:border-[#5C6E58] outline-none transition-all" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#5C6E58] uppercase tracking-wider mb-2">Subject Service</label>
                        <select 
                          value={contactForm.service}
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#EBE6DD] bg-white text-sm focus:ring-1 focus:ring-[#5C6E58] focus:border-[#5C6E58] outline-none transition-all text-[#5A5C59]"
                        >
                          <option value="Tax & Compliance Audit">Corporate Tax Advisory</option>
                          <option value="GST Audit & Filing">GST Audit & Representation</option>
                          <option value="NRI Taxation">NRI & International Tax</option>
                          <option value="Bookkeeping & MIS Combo">Bespoke Bookkeeping</option>
                          <option value="Valuation ROC filing">Valuation & ROC Filing</option>
                          <option value="Virtual CFO consultation">Strategic CFO Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#5C6E58] uppercase tracking-wider mb-2">Corporate Context / Message</label>
                      <textarea 
                        rows="3"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Briefly state your corporate activity, audit timeline or query..."
                        className="w-full px-4 py-3 rounded-xl border border-[#EBE6DD] bg-white text-sm focus:ring-1 focus:ring-[#5C6E58] focus:border-[#5C6E58] outline-none transition-all" 
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <input 
                        type="checkbox" 
                        id="agree" 
                        required
                        checked={contactForm.agreeToTerms}
                        onChange={(e) => setContactForm({ ...contactForm, agreeToTerms: e.target.checked })}
                        className="mt-1 border-[#EBE6DD] rounded accent-[#5C6E58]" 
                      />
                      <label htmlFor="agree" className="text-xs text-[#7A7C79] leading-relaxed cursor-pointer select-none">
                        I authorize Kasula & Associates to process this confidential inquiry. We agree to a pre-consultation conflict verification step. *
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 bg-[#5C6E58] hover:bg-[#4E5E4A] text-[#FAF7F2] font-bold text-sm rounded-xl shadow-lg shadow-[#5C6E58]/10 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 active:scale-95"
                    >
                      {isSubmitting ? 'Requesting Recall...' : 'Request Advisory Call'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF7F2] py-16 border-t border-[#EBE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5C6E58] flex items-center justify-center">
                  <span className="text-[#FAF7F2] font-serif font-semibold text-xl">K</span>
                </div>
                <span className="font-serif font-bold text-lg tracking-wide text-[#2C2E2A]">Kasula & Associates</span>
              </div>
              <p className="text-[#7A7C79] text-xs leading-relaxed max-w-sm">
                Peer-reviewed partnership of Chartered Accountants in Hyderabad. Delivering premium taxation, auditing, and corporate regulatory compliance services since 2001.
              </p>
              <div className="text-[0.7rem] text-[#5C6E58] font-bold">
                ICAI FIRM REGISTRATION NO. 012345S
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h5 className="font-serif font-bold text-[#2C2E2A] text-sm mb-4">Advisory Services</h5>
              <ul className="space-y-2.5 text-xs text-[#5A5C59]">
                <li><a href="#services" className="hover:text-[#D97753]">Corporate Income Tax</a></li>
                <li><a href="#services" className="hover:text-[#D97753]">GST Auditing Services</a></li>
                <li><a href="#services" className="hover:text-[#D97753]">NRI Investment Advisory</a></li>
                <li><a href="#services" className="hover:text-[#D97753]">Virtual CFO Models</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h5 className="font-serif font-bold text-[#2C2E2A] text-sm mb-4">Useful Portal Links</h5>
              <ul className="space-y-2.5 text-xs text-[#5A5C59]">
                <li><a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D97753]">IT Filing Portal</a></li>
                <li><a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D97753]">GST Common Portal</a></li>
                <li><a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D97753]">Ministry of Corporate Affairs</a></li>
                <li><a href="#contact" className="hover:text-[#D97753]">Pre-Consultation Forms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#EBE6DD] flex flex-col sm:flex-row justify-between items-center text-[0.7rem] text-[#7A7C79]">
            <p>
              &copy; {new Date().getFullYear()} Kasula & Associates. Chartered Accountants. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#2C2E2A]">Privacy Policy</a>
              <a href="#" className="hover:text-[#2C2E2A]">Terms of Engagement</a>
              <a href="#" className="hover:text-[#2C2E2A]">ICAI Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Shield, 
  FileText, 
  TrendingUp, 
  Award, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Lock,
  Globe
} from 'lucide-react';

export default function SPRAssociates() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('audit');
  const [activePartner, setActivePartner] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Taxation Strategy',
    message: ''
  });

  const services = {
    audit: {
      number: "01",
      title: "Audit & Assurance",
      desc: "Statutory, internal, and forensic audits that ensure robust corporate governance and absolute compliance.",
      details: [
        "Statutory & Tax Audits under Companies Act",
        "Internal & Management Audits for operational efficiency",
        "Forensic Audits and fraud detection investigations",
        "Internal Financial Control (IFC) framework implementation"
      ]
    },
    tax: {
      number: "02",
      title: "Taxation Strategy",
      desc: "Comprehensive domestic and international tax planning designed to optimize liability and handle complex regulatory filings.",
      details: [
        "Corporate & Personal Direct Tax Compliance",
        "International Taxation & Transfer Pricing documentation",
        "Double Taxation Avoidance Agreement (DTAA) consulting",
        "Representation before Income Tax Appellate Authorities"
      ]
    },
    gst: {
      number: "03",
      title: "GST Compliance & Advisory",
      desc: "End-to-end Indirect Tax consulting, structured to navigate the complex GST landscape with zero error rates.",
      details: [
        "Monthly GST returns, reconciliation & audits",
        "GST registration and structural advisory",
        "Representation during GST audits, investigations, and appeals",
        "Refund processing support for export oriented units"
      ]
    },
    corporate: {
      number: "04",
      title: "Corporate Consulting",
      desc: "Strategic advisory services covering mergers, business setups, corporate restructuring, and transaction advisory.",
      details: [
        "Company formation & ROC compliance registry",
        "Due Diligence reviews for mergers and acquisitions",
        "FEMA compliance and Foreign Direct Investment advisory",
        "Bespoke business valuations and financial modeling"
      ]
    }
  };

  const partners = [
    {
      name: "S. P. Reddy, FCA",
      role: "Senior Founder Partner",
      bio: "With over 25 years of experience in direct taxation and statutory auditing, Mr. Reddy has advised major corporate boards on tax restructuring, governance frameworks, and international taxation strategies. He is a fellow member of the ICAI.",
      specialty: "Direct Tax & Corporate Governance"
    },
    {
      name: "P. Ranganathan, ACA",
      role: "Managing Partner",
      bio: "Ranganathan specializes in GST compliance, forensic audits, and corporate law. He joined the firm in 2015 and has since pioneered our technology-driven auditing systems, bringing precision and agility to our tax practices.",
      specialty: "Indirect Tax & Forensic Audit"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white leading-relaxed antialiased">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#FBFBFB]/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <a href="#" className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider uppercase text-neutral-900">SPR & ASSOCIATES</span>
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-neutral-500 mt-1">Chartered Accountants</span>
              </a>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-10 items-center">
              <a href="#services" className="text-xs font-mono tracking-widest uppercase hover:text-neutral-500 transition-colors">Services</a>
              <a href="#about" className="text-xs font-mono tracking-widest uppercase hover:text-neutral-500 transition-colors">About Us</a>
              <a href="#testimonials" className="text-xs font-mono tracking-widest uppercase hover:text-neutral-500 transition-colors">Testimonials</a>
              <a href="#contact" className="text-xs font-mono tracking-widest uppercase hover:text-neutral-500 transition-colors">Contact</a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-neutral-900 text-xs font-mono tracking-widest uppercase bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 transition-all duration-300"
              >
                Request Audit
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-900 hover:text-neutral-500 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBFBFB] border-b border-neutral-200 px-6 py-8 space-y-6">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-widest uppercase text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-widest uppercase text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-widest uppercase text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-widest uppercase text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full text-center px-6 py-4 border border-neutral-900 text-xs font-mono tracking-widest uppercase bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 transition-all duration-300"
            >
              Request Audit
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 bg-white overflow-hidden border-b border-neutral-200">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-8 font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-950"></span>
              Bespoke Financial Architecture
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight text-neutral-950 mb-10 leading-[1.05]">
              Clarity in complexity.<br />
              Precision in compliance.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-14 leading-relaxed font-sans">
              SPR & Associates delivers elite auditing, taxation strategy, and corporate governance compliance services for enterprises, family offices, and institutions. Understated design, uncompromising rigor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-5 border border-neutral-900 text-xs font-mono tracking-widest uppercase bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 transition-all duration-300 group"
              >
                Initiate Engagement
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center px-8 py-5 border border-neutral-200 text-xs font-mono tracking-widest uppercase bg-white text-neutral-900 hover:border-neutral-900 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Numbers (Trust Metrics) */}
      <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            <div className="pt-6 lg:pt-0 lg:px-6">
              <span className="block font-serif text-4xl md:text-6xl font-bold text-neutral-950 mb-2">25+</span>
              <span className="block font-mono text-[10px] tracking-widest uppercase text-neutral-400">Years Combined Legacy</span>
            </div>
            <div className="pt-6 lg:pt-0 lg:px-6">
              <span className="block font-serif text-4xl md:text-6xl font-bold text-neutral-950 mb-2">₹12B+</span>
              <span className="block font-mono text-[10px] tracking-widest uppercase text-neutral-400">Client Asset Portfolio</span>
            </div>
            <div className="pt-6 lg:pt-0 lg:px-6">
              <span className="block font-serif text-4xl md:text-6xl font-bold text-neutral-950 mb-2">100%</span>
              <span className="block font-mono text-[10px] tracking-widest uppercase text-neutral-400">Audit Compliance Rate</span>
            </div>
            <div className="pt-6 lg:pt-0 lg:px-6">
              <span className="block font-serif text-4xl md:text-6xl font-bold text-neutral-950 mb-2">450+</span>
              <span className="block font-mono text-[10px] tracking-widest uppercase text-neutral-400">Corporate Engagements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-36 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28">
            <div className="max-w-xl">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">02 / EXPERTISE</div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
                Rigorous financial stewardship.
              </h2>
            </div>
            <p className="text-neutral-500 text-sm md:text-base max-w-sm mt-6 md:mt-0 font-sans">
              Our firm coordinates complex tax filing, auditing operations, and corporate structuring with strict analytical precision.
            </p>
          </div>

          {/* Interactive Services Tab Interface */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Tabs List */}
            <div className="lg:col-span-5 flex flex-col space-y-2">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`text-left p-6 border-l-2 transition-all duration-300 ${
                    activeTab === key 
                      ? 'border-neutral-950 bg-neutral-50 text-neutral-900' 
                      : 'border-neutral-200 hover:border-neutral-400 text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  <div className="font-mono text-xs mb-1">{services[key].number}</div>
                  <div className="font-serif text-xl font-bold">{services[key].title}</div>
                </button>
              ))}
            </div>

            {/* Tab Details */}
            <div className="lg:col-span-7 bg-[#FBFBFB] border border-neutral-200 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block font-mono text-[9px] tracking-widest uppercase text-neutral-400 mb-6">
                  {services[activeTab].number} / SERVICE DEFINITION
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950 mb-6">
                  {services[activeTab].title}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base mb-8 leading-relaxed">
                  {services[activeTab].desc}
                </p>
                <div className="h-px bg-neutral-200 w-full mb-8"></div>
                <h4 className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 mb-4">Key Operations:</h4>
                <ul className="space-y-3">
                  {services[activeTab].details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm">
                      <Check className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-xs font-mono tracking-widest uppercase text-neutral-950 hover:text-neutral-500 transition-colors group"
                >
                  Consult on this service
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us (Partners Profiles) */}
      <section id="about" className="py-24 md:py-36 bg-[#FBFBFB] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">03 / THE FIRM</div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-8">
                Partners in foresight and resilience.
              </h2>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                SPR & Associates was founded on the philosophy that tax compliance and corporate structuring should not simply be reactive checks, but strategic platforms that support long-term corporate health.
              </p>
              
              <div className="border border-neutral-200 p-8 bg-white max-w-lg">
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-3">Our Core Mandate</h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
                  We align our methodologies with the highest standards of the Institute of Chartered Accountants of India (ICAI). Integrity is not our selling point; it is our foundation.
                </p>
              </div>
            </div>

            {/* Interactive Partner Bios */}
            <div className="border border-neutral-200 bg-white p-8 md:p-12">
              <div className="flex border-b border-neutral-200 pb-6 mb-8 gap-6">
                {partners.map((partner, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePartner(index)}
                    className={`font-serif text-lg font-bold pb-2 border-b-2 transition-all duration-300 ${
                      activePartner === index 
                        ? 'border-neutral-950 text-neutral-900' 
                        : 'border-transparent text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    {partner.name.split(',')[0]}
                  </button>
                ))}
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                  {partners[activePartner].role}
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-950 mb-6">
                  {partners[activePartner].name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                  {partners[activePartner].bio}
                </p>
                <div className="grid grid-cols-2 gap-4 bg-neutral-50 p-4 border border-neutral-100">
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400">Practice Area</span>
                    <span className="block text-xs font-semibold text-neutral-900 mt-1">{partners[activePartner].specialty}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400">Credentials</span>
                    <span className="block text-xs font-semibold text-neutral-900 mt-1">FCA Fellow Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-36 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-6">04 / SATISFIED CORPORATE REVIEWS</div>
            <h2 className="font-serif text-2xl md:text-4xl italic text-neutral-900 leading-normal mb-10">
              &ldquo;The forensic audit conducted by SPR & Associates not only resolved a complex compliance bottleneck but restructure our internal audits framework. Their advisory is direct, transparent, and legally impenetrable.&rdquo;
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-neutral-900"></div>
              <div>
                <div className="font-serif text-sm font-bold text-neutral-950">Aditya K. Deshmukh</div>
                <div className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase mt-1">Managing Director, Deshmukh Logistics Pvt Ltd</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-20 pt-16 border-t border-neutral-100">
            <div>
              <p className="text-neutral-500 text-sm leading-relaxed italic mb-6">
                &ldquo;For three tax seasons, SPR has handled our corporate direct tax and transfer pricing structures. Their advice is clear and we have had zero compliance audits queries.&rdquo;
              </p>
              <div className="font-serif text-xs font-bold text-neutral-950">Meera Sen, ACA</div>
              <div className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase mt-0.5">CFO, Apex FinTech Solutions</div>
            </div>
            <div>
              <p className="text-neutral-500 text-sm leading-relaxed italic mb-6">
                &ldquo;Their advisory on company incorporation and foreign direct investment regulations was critical to our seed transition. We highly recommend their professional consultation.&rdquo;
              </p>
              <div className="font-serif text-xs font-bold text-neutral-950">Dr. Vivek Raghavan</div>
              <div className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase mt-0.5">Founder, Theranostics Health Inc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact / Callback Section */}
      <section id="contact" className="py-24 md:py-36 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">05 / ENGAGEMENT</div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-6">
                Initiate a professional consultation.
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-10">
                To retain SPR & Associates, please describe your requirements below. One of our partners will get back to you within 24 hours to schedule a confidential discussion.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-700 bg-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400">Direct Inquiries</span>
                    <a href="mailto:partner@spr-associates.com" className="text-xs font-mono text-neutral-900 hover:underline">partner@spr-associates.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-700 bg-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400">Telephone</span>
                    <a href="tel:+914023569800" className="text-xs font-mono text-neutral-900 hover:underline">+91 40 2356 9800</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-700 bg-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400">Office Location</span>
                    <span className="text-xs font-mono text-neutral-900">Level 4, Corporate Plaza, Tolichowki, Hyderabad - 500008</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 md:p-12">
              {formSubmitted ? (
                <div className="h-full flex flex-col justify-center items-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">Request Logged</h3>
                  <p className="text-neutral-500 text-sm max-w-sm">
                    Thank you. We have recorded your request. A partner will contact you directly at the provided email/phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label htmlFor="name" className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400 mb-2">Your Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-sm outline-none transition-colors"
                        placeholder="e.g. Anand Kumar"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-sm outline-none transition-colors"
                        placeholder="e.g. anand@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-sm outline-none transition-colors"
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        id="company"
                        name="company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-sm outline-none transition-colors"
                        placeholder="e.g. Zenith Labs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400 mb-2">Primary Consultation Service</label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="Statutory Audit">Statutory & Tax Audit</option>
                      <option value="Taxation Strategy">Taxation Strategy</option>
                      <option value="GST Audit">GST Audit & Compliance</option>
                      <option value="Corporate Consulting">Corporate advisory / ROC</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[9px] font-mono tracking-widest uppercase text-neutral-400 mb-2">Brief Engagement Scope</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-sm outline-none transition-colors resize-none"
                      placeholder="Specify requirements or key deadlines..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formLoading}
                    className="w-full inline-flex justify-center items-center px-8 py-5 border border-neutral-900 text-xs font-mono tracking-widest uppercase bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 disabled:opacity-50 transition-all duration-300"
                  >
                    {formLoading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 md:py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="font-serif text-lg font-bold text-white tracking-wider uppercase mb-6">SPR & ASSOCIATES</div>
              <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                Chartered Accountants and registered corporate tax consultants. ICAl registration #025684S.
              </p>
            </div>
            
            <div>
              <div className="font-mono text-[9px] tracking-widest uppercase text-neutral-500 mb-6">SERVICES</div>
              <ul className="space-y-3 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Statutory Audit</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Corporate Direct Tax</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">GST Auditing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">FEMA Compliance</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[9px] tracking-widest uppercase text-neutral-500 mb-6">FIRMS</div>
              <ul className="space-y-3 text-xs">
                <li><a href="#about" className="hover:text-white transition-colors">Partner Profiles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers (FCA/ACA)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ICAI Regulatory Disclosures</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Firms Transparency Report</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[9px] tracking-widest uppercase text-neutral-500 mb-6">REGULATORY STATEMENT</div>
              <p className="text-[10px] text-neutral-600 leading-relaxed">
                As per standard regulations of the Institute of Chartered Accountants of India (ICAI), this website is designed strictly to present representative client work previews, not as public advertisements.
              </p>
            </div>
          </div>

          <div className="h-px bg-neutral-900 w-full mb-8"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-wider text-neutral-600">
            <span>&copy; {new Date().getFullYear()} SPR & ASSOCIATES. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400 transition-colors">PRIVACY CODE</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">LEGAL STATEMENT</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

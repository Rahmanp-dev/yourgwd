"use client";

import React, { useState } from 'react';
import { 
  Calculator, 
  Percent, 
  FileSpreadsheet, 
  Briefcase, 
  Smile, 
  UserCheck, 
  PhoneCall, 
  Sparkles, 
  MapPin, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  Menu, 
  X,
  Check,
  ChevronDown
} from 'lucide-react';

export default function KPraveenKumarAssociates() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'GST Registration & Filing',
    timeSlot: 'Morning (9 AM - 12 PM)',
    urgent: false
  });

  const services = [
    {
      icon: <Calculator className="w-10 h-10" />,
      title: "Tax Filing & Advisory",
      tag: "INCOME TAX",
      bgColor: "bg-[#FEF08A]", // Light Yellow
      desc: "Stress-free income tax returns (ITR) filing for individuals, HNIs, and corporates. Fully optimized deductions, zero penalty audits, and compliance planning.",
      deliverables: ["ITR-1 to ITR-7 filing support", "Advance Tax computations", "Capital Gains tax optimization", "Scrutiny assessment representations"]
    },
    {
      icon: <Percent className="w-10 h-10" />,
      title: "GST Audit & Compliance",
      tag: "INDIRECT TAX",
      bgColor: "bg-[#FED7AA]", // Light Orange
      desc: "Complete GST registration, monthly returns filing (GSTR-1, 3B, 9), input tax credit (ITC) reconciliation, and audit management under GST laws.",
      deliverables: ["Monthly return filing & matching", "ITC reconciliation reports", "GST audits & department queries", "E-way bill management systems"]
    },
    {
      icon: <FileSpreadsheet className="w-10 h-10" />,
      title: "Bookkeeping & Payroll",
      tag: "ACCOUNTING",
      bgColor: "bg-[#BAE6FD]", // Light Blue
      desc: "Cloud-based accounting, financial statements prep (balance sheet, P&L), bank reconciliation, payroll processing, and TDS compliance.",
      deliverables: ["Monthly accounting & MIS reporting", "TDS/TCS return filing", "PF & ESI statutory compliance", "Year-end financial audits prep"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Corporate Services",
      tag: "SECRETARIAL",
      bgColor: "bg-[#FBCFE8]", // Light Pink
      desc: "New company incorporation (Pvt Ltd, LLP, OPC), ROC annual filings, secretarial compliance, partnership registrations, and business licensing.",
      deliverables: ["MCA company registration setup", "ROC annual returns filing", "LLP agreements & compliance", "Start-up MSME registration support"]
    }
  ];

  const partners = [
    {
      name: "K. Praveen Kumar, FCA",
      role: "Founder & Lead Auditor",
      details: "18+ years of expertise. Fellow Member of the ICAI. Expert in Statutory Audits, Corporate Taxation, and direct representation before tax tribunals."
    },
    {
      name: "Ritesh Sharma, ACA",
      role: "GST Specialist Partner",
      details: "8+ years in indirect taxation. Spearheads all GST audits, input tax credit optimization portfolios, and litigation advisory cases."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCallbackLoading(true);
    setTimeout(() => {
      setCallbackLoading(false);
      setCallbackSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F4F2EC] text-black font-sans selection:bg-black selection:text-[#FACC15] pb-12 antialiased">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#FACC15] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="bg-black text-white px-4 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] font-black text-xl tracking-tight hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all">
                KPK & ASSOCIATES
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="font-bold uppercase tracking-wider text-sm hover:underline hover:underline-offset-4 decoration-2 decoration-black">Services</a>
              <a href="#about" className="font-bold uppercase tracking-wider text-sm hover:underline hover:underline-offset-4 decoration-2 decoration-black">About Partners</a>
              <a href="#testimonials" className="font-bold uppercase tracking-wider text-sm hover:underline hover:underline-offset-4 decoration-2 decoration-black">Reviews</a>
              <a href="#contact" className="font-bold uppercase tracking-wider text-sm hover:underline hover:underline-offset-4 decoration-2 decoration-black">Contact</a>
              
              <a 
                href="#callback-form" 
                className="bg-[#F97316] text-black border-2 border-black font-bold uppercase text-xs tracking-wider px-5 py-3 shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#000] transition-all"
              >
                Book Call Back
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-white text-black p-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[0px_0px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-4 border-black px-6 py-6 space-y-4">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black uppercase tracking-wider text-lg border-b-2 border-black pb-2"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black uppercase tracking-wider text-lg border-b-2 border-black pb-2"
            >
              About Partners
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black uppercase tracking-wider text-lg border-b-2 border-black pb-2"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black uppercase tracking-wider text-lg border-b-2 border-black pb-2"
            >
              Contact
            </a>
            <a 
              href="#callback-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#F97316] text-black border-2 border-black font-black uppercase tracking-wider py-3 shadow-[4px_4px_0px_0px_#000]"
            >
              Book Call Back
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-28 overflow-hidden border-b-4 border-black bg-[#FED7AA]">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          {/* Brutalist polka dot pattern */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="polka-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="4" fill="black" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#polka-dots)" />
          </svg>
        </div>

        {/* Quirky Floating Shape */}
        <div className="hidden lg:block absolute right-24 top-16 w-32 h-32 bg-[#FACC15] border-4 border-black rounded-full shadow-[8px_8px_0px_0px_#000] rotate-12 flex items-center justify-center font-black text-center text-xs uppercase p-4 animate-bounce">
          ⚡ 100% Tax Compliant
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Tilted Tagline */}
            <div className="inline-block bg-[#FACC15] text-black border-2 border-black font-mono font-black text-xs uppercase px-3 py-1.5 shadow-[2px_2px_0px_0px_#000] -rotate-2 mb-8">
              ★ Premium Chartered Accountants
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black mb-8 leading-none">
              Stress-Free Taxes.<br />
              <span className="bg-black text-[#FACC15] px-2 py-1 inline-block my-2 -rotate-1">Zero Penalty</span> Audits.
            </h1>

            <p className="text-base sm:text-lg font-mono text-black mb-10 max-w-2xl border-l-4 border-black pl-4 py-2 bg-white/50">
              Tax deadlines are chaotic. We solve that. Get expert ITR filings, GST auditing, and corporate secretarial solutions with direct access to senior partners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#callback-form"
                className="inline-flex items-center justify-center bg-black text-[#FACC15] border-4 border-black font-black uppercase text-sm tracking-wider px-8 py-5 shadow-[6px_6px_0px_0px_#F97316] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#F97316] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#F97316] transition-all group"
              >
                REQUEST CALLBACK NOW
                <Sparkles className="w-5 h-5 ml-3" />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center bg-white text-black border-4 border-black font-black uppercase text-sm tracking-wider px-8 py-5 shadow-[6px_6px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] transition-all"
              >
                VIEW SERVICES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="bg-black text-white py-8 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-between items-center gap-6 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FACC15]" /> NABL & ICAI CERTIFIED
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FACC15]" /> 18+ YEARS PRACTICE
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FACC15]" /> 500+ GST CLIENTS
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FACC15]" /> ZERO LATE-FEE GUARANTEE
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F4F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <div className="inline-block bg-[#F97316] text-black border-2 border-black font-black text-xs uppercase px-2 py-1 mb-4 shadow-[2px_2px_0px_0px_#000]">
              WHAT WE DO
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              COMPREHENSIVE TAX & SECRETARIAL SERVICES
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`border-4 border-black p-6 ${service.bgColor} shadow-[6px_6px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-black text-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      {service.icon}
                    </div>
                    <span className="font-mono font-bold text-[10px] bg-black text-white px-2 py-0.5 uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4">{service.title}</h3>
                  <p className="text-sm font-semibold text-black/80 mb-6 leading-relaxed">{service.desc}</p>
                </div>
                
                <div className="border-t-2 border-black pt-4 mt-6">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2">OPERATIONAL SCOPE:</h4>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-mono font-bold">
                        <span className="text-orange-600">▪</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Feature: Deliverables Checklist Drawer */}
          <div className="mt-16 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_#000] relative">
            <div className="absolute -top-5 left-8 bg-[#FACC15] text-black border-2 border-black font-black uppercase text-xs px-4 py-1.5 shadow-[2px_2px_0px_0px_#000] rotate-1">
              Interactive Scope Viewer
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-xl font-black uppercase text-black mb-2">Select a Service to Inspect Deliverables</h3>
                <p className="text-sm font-mono text-neutral-600">Choose one of our operational fields to reveal exactly what documentation and reporting is delivered upon engagement audit cycles.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {services.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedService(idx)}
                    className={`border-2 border-black font-black uppercase text-xs px-4 py-2 shadow-[2px_2px_0px_0px_#000] transition-all ${
                      selectedService === idx ? 'bg-black text-white' : 'bg-[#FEF08A] text-black hover:bg-yellow-300'
                    }`}
                  >
                    {s.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-neutral-300 grid md:grid-cols-2 gap-6 bg-[#FBFBFB] p-4 border border-black">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-orange-600 font-black">✔ INCLUDED DOCUMENTATION</span>
                <ul className="mt-4 space-y-2">
                  {services[selectedService].deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-4 h-4 bg-green-400 border border-black flex items-center justify-center text-xs">✓</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between items-start">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">SERVICE COMMITMENT</span>
                  <p className="mt-3 text-sm font-mono text-neutral-600">All deliverables are validated by {partners[0].name.split(',')[0]} before submission to ICAI or tax departments.</p>
                </div>
                <a href="#callback-form" className="mt-6 inline-flex items-center font-black uppercase text-xs bg-[#F97316] text-black border-2 border-black px-4 py-2.5 shadow-[2px_2px_0px_0px_#000]">
                  Get Free Audit Quote <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* About Us (Partners) */}
      <section id="about" className="py-20 bg-[#FACC15] border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-black text-white border-2 border-black font-black text-xs uppercase px-2 py-1 mb-4">
                MEET THE PARTNERS
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-6">
                LED BY EXPERIENCED CHARTERED ACCOUNTANTS
              </h2>
              <p className="text-base font-mono text-black mb-8 leading-relaxed max-w-lg">
                K Praveen Kumar & Associates features a dedicated panel of legal and tax professionals centered in Tolichowki. We act with transparency, using strict tax logic to protect client balance sheets from statutory defaults.
              </p>
              
              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] max-w-md">
                <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#F97316]">OUR CORE PRINCIPLE:</span>
                <p className="text-sm font-bold text-black mt-2 leading-relaxed">
                  "We believe in proactive taxation, mapping liability quarterly rather than at year-end. This eliminates emergency compliance penalties entirely."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-black">{partner.name}</h3>
                      <span className="font-mono text-xs uppercase text-[#F97316] font-black">{partner.role}</span>
                    </div>
                    <div className="bg-[#FED7AA] border-2 border-black p-2 font-mono font-black text-xs">
                      ICAI
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-black/80 leading-relaxed">
                    {partner.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#F4F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <div className="inline-block bg-[#BAE6FD] text-black border-2 border-black font-black text-xs uppercase px-2 py-1 mb-4 shadow-[2px_2px_0px_0px_#000]">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">
              WHAT OUR CLIENTS REPORT
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Praveen and his team handled our startup registration and first-year GST audits. The documentation was bulletproof. Highly recommend their services.",
                client: "Srinivas Rao",
                designation: "CEO, Rao Agro Industries",
                color: "bg-[#BAE6FD]"
              },
              {
                quote: "Filing corporate tax was a headache until we outsourced to KPK & Associates. They optimized our TDS compliance registry and advanced tax timeline perfectly.",
                client: "Anjali Gupta",
                designation: "CFO, TechWave Solutions",
                color: "bg-[#FEF08A]"
              },
              {
                quote: "Extremely professional auditing partners. They cleared three years of pending GST audits within six weeks. Absolute lifecycle lifesavers.",
                client: "Faisal Qureshi",
                designation: "Managing Partner, Qureshi Superstructures",
                color: "bg-[#FBCFE8]"
              }
            ].map((t, idx) => (
              <div 
                key={idx} 
                className={`border-4 border-black p-8 ${t.color} shadow-[6px_6px_0px_0px_#000] rotate-${idx % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between`}
              >
                <div>
                  <span className="text-4xl font-black font-serif leading-none block mb-4">“</span>
                  <p className="text-sm font-semibold text-black/90 leading-relaxed mb-6 italic">{t.quote}</p>
                </div>
                <div>
                  <div className="w-full h-0.5 bg-black mb-4"></div>
                  <h4 className="font-black text-sm uppercase">{t.client}</h4>
                  <span className="font-mono text-xs uppercase text-black/60">{t.designation}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Contact / Callback Section */}
      <section id="contact" className="py-12 bg-[#F4F2EC]">
        <div id="callback-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 border-4 border-black bg-white shadow-[10px_10px_0px_0px_#000] overflow-hidden">
            
            {/* Contact Details Card (Orange Brutalist style) */}
            <div className="lg:col-span-5 bg-[#F97316] text-black p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-between">
              <div>
                <div className="inline-block bg-black text-white border-2 border-black font-black text-xs uppercase px-2 py-1 mb-4">
                  FAST RESPONSE
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-black mb-6">
                  SCHEDULE YOUR TAX STRATEGY SESSION
                </h2>
                <p className="text-sm font-mono text-black mb-8 leading-relaxed">
                  Fill the quick form. We will call you within 2-4 hours on working days to analyze your business tax case file. No pressure consultations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-black text-white p-2.5 border-2 border-black">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] uppercase font-black">EMAIL US:</span>
                      <a href="mailto:info@kpraveenkumar.in" className="text-sm font-black underline">info@kpraveenkumar.in</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-black text-white p-2.5 border-2 border-black">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] uppercase font-black">CALL OFFICE:</span>
                      <a href="tel:+914023567789" className="text-sm font-black underline">+91 40 2356 7789</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-black text-white p-2.5 border-2 border-black">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] uppercase font-black">OFFICE:</span>
                      <span className="text-xs font-bold block">First Floor, Aditya Heights, Tolichowki Main Road, Hyderabad - 500008</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t-2 border-black font-mono text-xs font-bold flex gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Mon-Sat: 10AM-6PM
                </div>
              </div>
            </div>

            {/* Brutalist Form */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
              {callbackSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-block bg-[#FACC15] p-6 border-4 border-black shadow-[6px_6px_0px_0px_#000] mb-6 animate-bounce">
                    <Smile className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">CALLBACK REQUEST LOGGED!</h3>
                  <p className="text-sm font-mono text-neutral-600 max-w-sm mx-auto">
                    Thanks {formData.name}! Our team will call you at {formData.phone} during your selected slot: {formData.timeSlot}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div>
                    <label htmlFor="form-name" className="block font-mono text-xs uppercase font-black mb-2">YOUR NAME *</label>
                    <input 
                      type="text" 
                      id="form-name"
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#FFFBEB] border-4 border-black p-4 text-sm font-bold placeholder-neutral-500 focus:bg-white focus:outline-none"
                      placeholder="e.g. PRAKASH REDDY"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block font-mono text-xs uppercase font-black mb-2">WHATSAPP / PHONE NUMBER *</label>
                    <input 
                      type="tel" 
                      id="form-phone"
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#FFFBEB] border-4 border-black p-4 text-sm font-bold placeholder-neutral-500 focus:bg-white focus:outline-none"
                      placeholder="e.g. +91 99887 76655"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-service" className="block font-mono text-xs uppercase font-black mb-2">REQUIRED SERVICE</label>
                      <select 
                        id="form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFBEB] border-4 border-black p-4 text-sm font-bold focus:bg-white focus:outline-none cursor-pointer"
                      >
                        <option value="ITR Filing">ITR Filing & Tax Optimization</option>
                        <option value="GST Registration & Filing">GST Filing & Advisory</option>
                        <option value="Statutory Audit Services">Statutory Auditing</option>
                        <option value="Company Incorporation">ROC Secretarial Compliance</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="form-timeslot" className="block font-mono text-xs uppercase font-black mb-2">PREFERRED CALL SLOT</label>
                      <select 
                        id="form-timeslot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFBEB] border-4 border-black p-4 text-sm font-bold focus:bg-white focus:outline-none cursor-pointer"
                      >
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 py-2">
                    <input 
                      type="checkbox" 
                      id="urgent" 
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleInputChange}
                      className="w-6 h-6 border-2 border-black accent-black cursor-pointer"
                    />
                    <label htmlFor="urgent" className="font-mono text-xs uppercase font-black cursor-pointer select-none">
                      ⚠️ My filing is urgent (Deadline in &lt; 7 days)
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={callbackLoading}
                    className="w-full bg-[#F97316] text-black border-4 border-black font-black uppercase text-sm tracking-wider py-4 shadow-[6px_6px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#000] disabled:opacity-50 transition-all"
                  >
                    {callbackLoading ? 'PROCESSING REQUEST...' : 'LOCK IN FREE CALLBACK'}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-black bg-black text-white p-8 md:p-12 shadow-[6px_6px_0px_0px_#FACC15]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="bg-[#FACC15] text-black font-black uppercase tracking-tight text-lg inline-block px-3 py-1 mb-6 border-2 border-black">
                K Praveen Kumar & Associates
              </div>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                Registered Partnership Firm of Chartered Accountants. Registered with ICAI, Firm Registration #012547S. Serving Tolichowki & Hyderabad since 2008.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#F97316] font-black mb-6">SERVICE DIRECTORY</div>
              <ul className="space-y-2 font-mono text-xs text-neutral-300">
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">Individual & Corporate ITR</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">GST Audits & GSTR Filings</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">ROC Filings & Secretarial Law</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">Internal Audits & Advisory</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#F97316] font-black mb-6">REGULATORY DISCLOSURES</div>
              <p className="font-mono text-[10px] text-neutral-400 leading-relaxed">
                This website functions exclusively as a bespoke service preview mock-up under client presentation. It does not solicit public advertisements as prohibited by the Chartered Accountants Act, 1949 and ICAI code of ethics.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
            <span>&copy; {new Date().getFullYear()} K PRAVEEN KUMAR & ASSOCIATES. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">ICAI ETHICS</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

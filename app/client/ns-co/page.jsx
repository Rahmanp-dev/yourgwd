"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Plus, 
  PhoneCall, 
  Building, 
  FileSpreadsheet, 
  Users2, 
  Calendar, 
  ClipboardCheck, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  Check,
  Terminal,
  ShieldAlert,
  Percent,
  Layers,
  FileText
} from 'lucide-react';

export default function NsCo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('corporate');
  
  // Interactive Calculator State
  const [turnover, setTurnover] = useState(50); // in Lakhs
  const [needAudit, setNeedAudit] = useState(true);
  const [nriDesk, setNriDesk] = useState(false);

  // Form State
  const [contactForm, setContactForm] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    estimatedTurnover: '50L-2Cr',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services
  const services = [
    {
      code: 'SRV-01',
      title: 'STATUTORY & INTERNAL AUDIT',
      desc: 'Rigorous corporate compliance auditing, internal system review, and risk mitigation framework planning.',
      highlight: 'Mandatory Compliance'
    },
    {
      code: 'SRV-02',
      title: 'TRANSACTION ADVISORY (M&A)',
      desc: 'Strategic due diligence, capital structural planning, and enterprise valuations during acquisitions.',
      highlight: 'Corporate Advisory'
    },
    {
      code: 'SRV-03',
      title: 'INDIRECT TAX desk (GST)',
      desc: 'Complete GST health checks, representation in show-cause litigation, and monthly input-tax optimization.',
      highlight: 'Tax Efficiency'
    },
    {
      code: 'SRV-04',
      title: 'SYSTEMS RISK & SECURITY AUDIT',
      desc: 'Expert digital environment audit under DISA guidelines to secure transactional flow and verify bookkeeping.',
      highlight: 'Information Systems'
    },
    {
      code: 'SRV-05',
      title: 'INTERNATIONAL TAXATION',
      desc: 'Cross-border transfer pricing reporting, overseas asset compliance, and DTAA tax planning.',
      highlight: 'Global Finance'
    },
    {
      code: 'SRV-06',
      title: 'STRATEGIC FUND SYNDICATION',
      desc: 'Preparation of project reports, working capital loan structures, and private equity transaction support.',
      highlight: 'Growth Capital'
    }
  ];

  // Testimonials
  const testimonials = {
    corporate: [
      {
        quote: "NS & CO IS OUR EXCLUSIVE STRATEGIC COMPLIANCE PARTNER. THEIR GEOMETRIC RIGOUR IN TAX AUDITS AND GST LITIGATION FILING HAS DEFENDED OUR INTERESTS MULTIPLE TIMES. UNCOMPROMISING PRECISION.",
        author: "VIKRAM JETHWANI",
        role: "FOUNDING PARTNER, NEXUS LOGISTICS LLP",
        firm: "HYDERABAD, INDIA"
      },
      {
        quote: "THEY DELIVER CFO ADVISORY AT AN ARCHITECTURAL LEVEL. EACH MONTHLY FINANCIAL REPORT IS DRAFTED TO PREVENT SYSTEMIC CASH LEAKAGE. HIGHLY RECOMMENDED FOR SCALE-UPS.",
        author: "KAVITHA REDDY",
        role: "FINANCE CONTROLLER, INNOVA PHARMACEUTICALS",
        firm: "TECH PARK, HYDERABAD"
      }
    ],
    growth: [
      {
        quote: "NRI TAXATION ADVISORY WAS AN ABSOLUTE CLEAR-CUT PLAN. NO OVERLAP, NO CONFUSION. COMPLETED TRANSFER OF FUNDS AND CAPITAL ACCLAIM AUDIT WITHIN 2 WEEKS.",
        author: "AMITABH SHARMA",
        role: "VP INFRASTRUCTURE, APEX SYSTEMS INC",
        firm: "SAN JOSE, USA"
      },
      {
        quote: "EXCELLENT ADVISORY ON SYSTEM AUDIT AHEAD OF OUR PRE-SERIES A FUNDING. THEIR COMPLIANCE ATTESTATION WAS INSTRUMENTAL IN SPEEDING UP INVESTOR DUE DILIGENCE.",
        author: "ROHAN NAIDU",
        role: "CO-FOUNDER & CEO, COREFLOW SAAS",
        firm: "HITEC CITY, HYDERABAD"
      }
    ]
  };

  // Estimate Fee logic
  const calculateEstimatedFee = () => {
    let baseFee = 15000;
    
    // Scale by turnover
    if (turnover <= 20) {
      baseFee = 12000;
    } else if (turnover > 20 && turnover <= 100) {
      baseFee = 12000 + (turnover - 20) * 450;
    } else if (turnover > 100 && turnover <= 500) {
      baseFee = 48000 + (turnover - 100) * 350;
    } else {
      baseFee = 188000 + (turnover - 500) * 200;
    }

    if (needAudit) baseFee += 25000;
    if (nriDesk) baseFee += 15000;

    return Math.round(baseFee).toLocaleString('en-IN');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.contactPerson || !contactForm.email || !contactForm.phone) {
      alert("Please enter Contact Name, Email, and Phone Number.");
      return;
    }

    setIsSubmitting(true);
    // Simulate endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        estimatedTurnover: '50L-2Cr',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] font-mono text-white selection:bg-[#CCFF00] selection:text-black">
      
      {/* Grid line overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141720_1px,transparent_1px),linear-gradient(to_bottom,#141720_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Sticky Header */}
      <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0B0D]/95 backdrop-blur-none border-[#CCFF00] py-4' 
          : 'bg-[#0A0B0D] border-[#181B22] py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Architectural Logo */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#CCFF00] flex items-center justify-center text-black font-extrabold text-2xl rounded-none shadow-[3px_3px_0px_0px_#FFFFFF]">
                NS
              </div>
              <div className="border-l-2 border-[#242A36] pl-4">
                <span className="font-sans font-black text-2xl tracking-tighter block leading-none text-white">NS & CO.</span>
                <span className="text-[0.6rem] tracking-widest text-[#CCFF00] uppercase font-bold block mt-1">CHARTERED ACCOUNTANTS</span>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#services" className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-[#CCFF00] transition-colors">01 / SERVICES</a>
              <a href="#estimator" className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-[#CCFF00] transition-colors">02 / CALCULATOR</a>
              <a href="#about" className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-[#CCFF00] transition-colors">03 / THE FIRM</a>
              <a href="#testimonials" className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-[#CCFF00] transition-colors">04 / CLIENT VOICES</a>
            </div>

            {/* Action */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-extrabold uppercase bg-transparent text-[#CCFF00] border-2 border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none"
              >
                CALL BACK REQUEST
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#CCFF00] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#121418] border-b-2 border-[#CCFF00] py-6 px-6 flex flex-col space-y-4 z-40">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase font-bold tracking-widest text-slate-300 hover:text-[#CCFF00]"
            >
              01 / SERVICES
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase font-bold tracking-widest text-slate-300 hover:text-[#CCFF00]"
            >
              02 / CALCULATOR
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase font-bold tracking-widest text-slate-300 hover:text-[#CCFF00]"
            >
              03 / THE FIRM
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase font-bold tracking-widest text-slate-300 hover:text-[#CCFF00]"
            >
              04 / CLIENT VOICES
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#CCFF00] text-black text-xs font-extrabold uppercase rounded-none"
            >
              CALL BACK REQUEST
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section with Diagonal & Bold Structural Grid */}
      <section className="relative pt-16 pb-28 lg:pt-28 lg:pb-40 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B22] border border-[#242A36] text-[#CCFF00] text-[0.65rem] font-bold uppercase tracking-widest mb-6">
                <Terminal className="w-3.5 h-3.5" />
                SYSTEM SYSTEMATIC COMPLIANCE // STACK-VERIFIED
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none mb-8">
                ARCHITECTING <br/>
                <span className="text-black bg-[#CCFF00] px-4 py-1.5 inline-block mt-2 transform -skew-x-6">
                  CORPORATE AUDIT
                </span> <br/>
                &amp; RISK SYSTEMS.
              </h1>
              
              <p className="text-sm text-slate-400 max-w-xl mb-10 leading-relaxed font-sans">
                NS &amp; CO provides structural corporate tax auditing, Indirect Tax (GST) litigation defence, and strategic transaction due diligence for high-growth enterprises and clinical networks.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#estimator" 
                  className="px-8 py-4 bg-[#CCFF00] text-black font-extrabold text-xs uppercase hover:bg-white transition-colors rounded-none shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]"
                >
                  FEE ESTIMATION TOOL
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-transparent text-white border-2 border-[#242A36] hover:border-[#CCFF00] font-extrabold text-xs uppercase transition-colors rounded-none"
                >
                  BOOK BRIEFING DESK
                </a>
              </div>
            </div>

            {/* Asymmetric Grid Element Box */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#CCFF00]/10 border-2 border-dashed border-[#CCFF00]/20 transform rotate-1 scale-102"></div>
              
              {/* Sharp Architectural Box */}
              <div className="relative bg-[#121418] border-2 border-[#242A36] p-8 rounded-none shadow-[8px_8px_0px_0px_#181B22]">
                <div className="flex justify-between items-center pb-4 border-b border-[#242A36] mb-6">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#CCFF00]">SYSTEM CONFIG</span>
                  <span className="text-[0.6rem] bg-[#242A36] text-slate-300 px-2 py-0.5 font-bold">ACT-2026</span>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 p-3 bg-[#0A0B0D] border-l-2 border-[#CCFF00]">
                    <span className="font-mono text-[#CCFF00] font-bold">01 /</span>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs">GST RECONCILIATION</h4>
                      <p className="text-slate-400 text-[0.7rem] mt-1 leading-relaxed">
                        Automatic audit of GSTR-2B logs against Purchase Books. Eliminates input tax credit mismatches.
                      </p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-start gap-4 p-3 bg-[#0A0B0D] border-l-2 border-white">
                    <span className="font-mono text-white font-bold">02 /</span>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs">STATUTORY CERTIFICATION</h4>
                      <p className="text-slate-400 text-[0.7rem] mt-1 leading-relaxed">
                        Chartered Accountant sign-offs for bank documentation, working capital limits, and net-worth credentials.
                      </p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-start gap-4 p-3 bg-[#0A0B0D] border-l-2 border-[#242A36]">
                    <span className="font-mono text-slate-500 font-bold">03 /</span>
                    <div>
                      <h4 className="font-bold text-slate-300 uppercase text-xs">SYSTEM INTEGRITY</h4>
                      <p className="text-slate-500 text-[0.7rem] mt-1 leading-relaxed">
                        Validation of digital accounting controls under ICAI guidance to block internal embezzlement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider Element (Premium design system detail) */}
      <div className="relative h-16 w-full bg-transparent overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16 text-[#121418]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" fill="currentColor" />
        </svg>
      </div>

      {/* Services Section with Dark Surface & Sharp Dynamic Grid */}
      <section id="services" className="py-24 bg-[#121418] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="border-l-4 border-[#CCFF00] pl-6 mb-16 max-w-3xl">
            <span className="text-xs font-bold text-[#CCFF00] tracking-widest uppercase block mb-2">SYSTEM UTILITIES // DEPLOYED CODE</span>
            <h3 className="text-3xl font-sans font-black uppercase text-white tracking-tight">
              BESPOKE COMPLIANCE &amp; TRANSACTION AUDITING
            </h3>
            <p className="text-slate-400 text-sm mt-4 font-sans leading-relaxed">
              We operate structural financial and legal frameworks that verify regulatory accuracy and guarantee balance sheet integrity.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-[#242A36]">
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="p-8 border-b border-r border-[#242A36] hover:bg-[#181B22] transition-colors group flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-extrabold text-[#CCFF00]">{svc.code}</span>
                    <span className="text-[0.6rem] px-2 py-0.5 border border-[#242A36] text-slate-400 uppercase font-bold">{svc.highlight}</span>
                  </div>
                  <h4 className="text-lg font-sans font-bold text-white uppercase mb-3 leading-tight">{svc.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">{svc.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#242A36] flex justify-between items-center">
                  <a href="#contact" className="text-xs font-extrabold text-white group-hover:text-[#CCFF00] transition-colors flex items-center gap-1.5 uppercase">
                    DEPLOY MODULE <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Divider Element */}
      <div className="relative h-16 w-full bg-transparent overflow-hidden">
        <svg className="absolute top-0 w-full h-16 text-[#121418]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 0,100" fill="currentColor" />
        </svg>
      </div>

      {/* Fee Calculator Section */}
      <section id="estimator" className="py-24 bg-[#0A0B0D] relative z-10 border-b border-[#181B22]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#CCFF00] tracking-widest uppercase block mb-3">02 / INTERACTIVE PARAMETERS</span>
            <h3 className="text-3xl font-sans font-black uppercase tracking-tight text-white">TAX &amp; ADVISORY FEE ESTIMATOR</h3>
            <p className="text-slate-400 text-xs font-sans mt-2">
              Tune parameters below to calculate estimated engagement fees and review necessary compliance elements.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#121418] border-2 border-[#242A36] p-8">
              
              {/* Parameter 1: Turnover */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4 text-xs font-extrabold uppercase">
                  <span>ANNUAL TURNOVER</span>
                  <span className="text-[#CCFF00]">₹ {turnover} LAKHS</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="1000" 
                  value={turnover} 
                  onChange={(e) => setTurnover(Number(e.target.value))}
                  className="w-full h-2 bg-[#0A0B0D] rounded-lg appearance-none cursor-pointer accent-[#CCFF00]" 
                />
                <div className="flex justify-between text-[0.6rem] text-slate-500 mt-2">
                  <span>₹5 LAKHS</span>
                  <span>₹5 CRORES</span>
                  <span>₹10 CRORES</span>
                </div>
              </div>

              {/* Parameter 2: Audit */}
              <div className="flex justify-between items-center p-4 bg-[#0A0B0D] border border-[#242A36] mb-4">
                <div>
                  <h5 className="text-xs font-bold uppercase">Statutory Audit Required</h5>
                  <p className="text-[0.65rem] text-slate-500 font-sans mt-1">If corporate turnover exceeds statutory thresholds</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNeedAudit(!needAudit)}
                  className={`w-14 h-8 flex items-center p-1 cursor-pointer transition-all duration-300 ${
                    needAudit ? 'bg-[#CCFF00]' : 'bg-[#242A36]'
                  }`}
                >
                  <div className={`bg-white w-6 h-6 shadow-md transition-transform duration-300 ${
                    needAudit ? 'translate-x-6 bg-black' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Parameter 3: NRI Desk */}
              <div className="flex justify-between items-center p-4 bg-[#0A0B0D] border border-[#242A36]">
                <div>
                  <h5 className="text-xs font-bold uppercase">Cross-Border Taxation / NRI Desk</h5>
                  <p className="text-[0.65rem] text-slate-500 font-sans mt-1">Foreign assets reporting, double tax treaties DTAA</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNriDesk(!nriDesk)}
                  className={`w-14 h-8 flex items-center p-1 cursor-pointer transition-all duration-300 ${
                    nriDesk ? 'bg-[#CCFF00]' : 'bg-[#242A36]'
                  }`}
                >
                  <div className={`bg-white w-6 h-6 shadow-md transition-transform duration-300 ${
                    nriDesk ? 'translate-x-6 bg-black' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

            {/* Results Console */}
            <div className="lg:col-span-5 bg-[#121418] border-2 border-[#CCFF00] p-8 flex flex-col justify-between">
              <div>
                <span className="text-[0.65rem] text-slate-400 uppercase tracking-widest block mb-4 border-b border-[#242A36] pb-2">// SYSTEM CALCULATION</span>
                
                <div className="text-xs uppercase space-y-4">
                  <div>
                    <span className="text-slate-500 block text-[0.6rem]">Base compliance type:</span>
                    <span className="font-extrabold text-white text-sm">
                      {turnover >= 500 ? 'LARGE CORPORATE REGULATORY DESK' : 'MID-MARKET COMPLIANCE MODULE'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[0.6rem]">Estimated audit fee:</span>
                    <span className="text-white text-2xl font-sans font-black">₹ {calculateEstimatedFee()}</span>
                    <span className="text-[0.6rem] text-slate-500 block mt-1">Estimated annual billing</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[0.6rem]">Required filings count:</span>
                    <span className="font-mono text-[#CCFF00] font-bold text-sm">
                      {needAudit ? '14 Filings / Year' : '6 Filings / Year'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    setContactForm(prev => ({
                      ...prev,
                      estimatedTurnover: turnover > 200 ? '2Cr-10Cr' : '20L-2Cr',
                      message: `Confidential Fee Estimation: ₹${calculateEstimatedFee()} based on ₹${turnover}L turnover. Audit: ${needAudit ? 'Yes' : 'No'}. NRI: ${nriDesk ? 'Yes' : 'No'}.`
                    }));
                    window.location.hash = '#contact';
                  }}
                  className="w-full py-3 bg-[#CCFF00] text-black text-center text-xs font-bold uppercase hover:bg-white transition-colors"
                >
                  LOCK ESTIMATION RATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Firm Section (About Us) */}
      <section id="about" className="py-24 bg-[#121418] relative z-10 border-b border-[#242A36]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Architectural text column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#CCFF00] tracking-widest uppercase block mb-3">03 / EXECUTIVE OVERVIEW</span>
              <h3 className="text-3xl md:text-4xl font-sans font-black uppercase text-white tracking-tight mb-8">
                GEOMETRIC TAX ACCOUNTING. SYSTEMATIC RIGOUR.
              </h3>
              
              <div className="space-y-6 text-sm text-slate-400 font-sans leading-relaxed">
                <p>
                  NS &amp; CO was established with a clear mandate: to discard unscientific, approximation-based tax practices and deploy structured audit blueprints.
                </p>
                <p>
                  Led by expert systems auditor and senior partner <strong>K. Nagesh, FCA, DISA</strong>, the firm executes balance sheet engineering, transfer pricing compliance, and representations for corporate appellate litigation before tribunals.
                </p>
                <p>
                  Our partners maintain academic and professional certifications in Information Systems Audit (DISA), FEMA advisory, and international taxation, ensuring specialized attention to complex financial structures.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#242A36]">
                <div className="p-4 bg-[#0A0B0D] border border-[#242A36]">
                  <span className="block text-xl font-bold font-sans text-white">K. NAGESH</span>
                  <span className="text-[0.6rem] text-[#CCFF00] font-bold block mt-1 uppercase">FOUNDING PARTNER, FCA</span>
                  <p className="text-[0.65rem] text-slate-500 mt-2">Direct tax, appellate representation, and FEMA desks.</p>
                </div>
                <div className="p-4 bg-[#0A0B0D] border border-[#242A36]">
                  <span className="block text-xl font-bold font-sans text-white">S. REDDY</span>
                  <span className="text-[0.6rem] text-white font-bold block mt-1 uppercase">MANAGING PARTNER, ACA</span>
                  <p className="text-[0.65rem] text-slate-500 mt-2">Indirect tax, system audits, and transfer pricing.</p>
                </div>
                <div className="p-4 bg-[#0A0B0D] border border-[#242A36]">
                  <span className="block text-xl font-bold font-sans text-white">R. N. RAO</span>
                  <span className="text-[0.6rem] text-[#CCFF00] font-bold block mt-1 uppercase">ADVISOR, SYSTEMS</span>
                  <p className="text-[0.65rem] text-slate-500 mt-2">Valuations, ROC audits, and statutory reviews.</p>
                </div>
              </div>
            </div>

            {/* Architectural diagram placeholder (using raw code outlines) */}
            <div className="lg:col-span-5 bg-[#0A0B0D] border-2 border-[#242A36] p-8 aspect-square flex flex-col justify-between relative">
              <div className="absolute top-2 right-2 text-slate-700 text-[0.55rem]">
                PLOT-REF: 099.A4
              </div>

              {/* Graphic grid layout representing structural audit */}
              <div className="w-full h-2/3 border border-[#242A36] relative flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[#CCFF00]/5 pointer-events-none"></div>
                
                {/* Structural box diagrams */}
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center text-[0.6rem] font-bold uppercase border border-[#242A36] p-2 bg-[#121418]">
                    <span>PURCHASE REGISTER</span>
                    <span className="text-[#CCFF00]">INPUT TRACK // 100%</span>
                  </div>
                  
                  <div className="h-0.5 w-full bg-[#242A36] relative flex justify-center items-center">
                    <div className="absolute w-2 h-2 bg-[#CCFF00] rounded-none"></div>
                  </div>

                  <div className="flex justify-between items-center text-[0.6rem] font-bold uppercase border border-[#242A36] p-2 bg-[#121418]">
                    <span>GSTR-2B LEDGER</span>
                    <span className="text-white">RECONCILIATION // DONE</span>
                  </div>
                </div>
              </div>

              <div className="text-xs space-y-1">
                <span className="text-slate-500 block text-[0.6rem]">SYSTEM VERIFICATION</span>
                <p className="text-white uppercase font-bold tracking-tight">ICAI COMPLIANT AUDIT METHODOLOGY</p>
                <p className="text-slate-400 text-[0.65rem] leading-relaxed">
                  Every account undergoes double-verification checks to ensure cross-ledger compatibility and minimize tax exposure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#0A0B0D] border-b border-[#181B22] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-[#CCFF00] tracking-widest uppercase block mb-3">04 / REPUTATION CREDENTIALS</span>
              <h3 className="text-3xl font-sans font-black uppercase tracking-tight text-white">ENDORSED BY CORPORATE LEADERSHIP</h3>
            </div>
            
            {/* Interactive Tab Switcher */}
            <div className="flex border border-[#242A36] p-1 bg-[#121418]">
              <button
                onClick={() => setActiveTab('corporate')}
                className={`px-4 py-2 text-[0.65rem] uppercase font-bold tracking-widest transition-all ${
                  activeTab === 'corporate'
                    ? 'bg-[#CCFF00] text-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CORPORATE CLIENTS
              </button>
              <button
                onClick={() => setActiveTab('growth')}
                className={`px-4 py-2 text-[0.65rem] uppercase font-bold tracking-widest transition-all ${
                  activeTab === 'growth'
                    ? 'bg-[#CCFF00] text-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                GROWTH COMPANIES
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials[activeTab].map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#121418] border-2 border-[#242A36] p-8 flex flex-col justify-between hover:border-[#CCFF00] transition-colors relative"
              >
                <div className="absolute top-2 right-2 text-slate-800 text-[2rem] font-sans font-black select-none">
                  0{idx+1}
                </div>
                
                <p className="text-white text-xs leading-relaxed tracking-wider mb-8 relative z-10 font-mono">
                  "{t.quote}"
                </p>

                <div className="pt-6 border-t border-[#242A36] mt-auto">
                  <h5 className="font-extrabold text-white text-xs uppercase">{t.author}</h5>
                  <p className="text-[0.65rem] text-[#CCFF00] font-bold mt-1 tracking-widest">{t.role}</p>
                  <p className="text-[0.6rem] text-slate-500 mt-0.5">{t.firm}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call Back Form Section (CTA) */}
      <section id="contact" className="py-24 bg-[#121418] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0A0B0D] border-2 border-[#242A36] p-8 md:p-16">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-5">
                <span className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest block mb-3">// ESTABLISH CHANNELS</span>
                <h3 className="text-3xl font-sans font-black uppercase text-white tracking-tight mb-6">
                  REQUEST BRIEFING CALL
                </h3>
                <p className="text-slate-400 text-xs font-sans leading-relaxed mb-8">
                  Initiate corporate auditing consultations. Please provide necessary accounting parameters below.
                </p>

                <div className="space-y-6 text-xs uppercase">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#242A36] bg-[#121418] flex items-center justify-center text-[#CCFF00]">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">Registered Address</h4>
                      <p className="text-slate-500 text-[0.65rem] mt-1 font-sans">#801, Capital Center, Hitec City Road, Madhapur, Hyderabad - 500081</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#242A36] bg-[#121418] flex items-center justify-center text-[#CCFF00]">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">Direct Line</h4>
                      <p className="text-slate-500 text-[0.65rem] mt-1 font-sans">+91 (40) 4999 1234 (Corporate Desk)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7 bg-[#121418] border border-[#242A36] p-8">
                <h4 className="text-sm font-bold uppercase text-white mb-6 border-b border-[#242A36] pb-2">INPUT PARAMETERS</h4>
                
                {submitSuccess ? (
                  <div className="p-6 bg-[#0A0B0D] border-2 border-[#CCFF00] text-center">
                    <Check className="w-12 h-12 text-[#CCFF00] mx-auto mb-4" />
                    <h5 className="font-sans font-black text-white text-base uppercase mb-2">CALLBACK REGISTERED</h5>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto font-sans">
                      Request logged on our server system. A certified audit representative will contact your desk within 12 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-6 py-3 bg-[#CCFF00] text-black text-xs font-bold uppercase hover:bg-white transition-colors"
                    >
                      SUBMIT NEW REQUEST
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Corporate Entity Name</label>
                        <input 
                          type="text"
                          value={contactForm.businessName}
                          onChange={(e) => setContactForm({ ...contactForm, businessName: e.target.value })}
                          placeholder="e.g. TECHFLOW SOLUTIONS LLP" 
                          className="w-full px-4 py-3 rounded-none border border-[#242A36] bg-[#0A0B0D] text-white text-xs focus:border-[#CCFF00] outline-none transition-colors" 
                        />
                      </div>
                      <div>
                        <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Contact Officer Name *</label>
                        <input 
                          type="text"
                          required
                          value={contactForm.contactPerson}
                          onChange={(e) => setContactForm({ ...contactForm, contactPerson: e.target.value })}
                          placeholder="e.g. S. BALAKRISHNAN" 
                          className="w-full px-4 py-3 rounded-none border border-[#242A36] bg-[#0A0B0D] text-white text-xs focus:border-[#CCFF00] outline-none transition-colors" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Contact Email *</label>
                        <input 
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="e.g. FINANCE@TECHFLOW.IN" 
                          className="w-full px-4 py-3 rounded-none border border-[#242A36] bg-[#0A0B0D] text-white text-xs focus:border-[#CCFF00] outline-none transition-colors" 
                        />
                      </div>
                      <div>
                        <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Phone Number *</label>
                        <input 
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="e.g. +91 98450 67890" 
                          className="w-full px-4 py-3 rounded-none border border-[#242A36] bg-[#0A0B0D] text-white text-xs focus:border-[#CCFF00] outline-none transition-colors" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">Annual Revenue Band</label>
                      <select 
                        value={contactForm.estimatedTurnover}
                        onChange={(e) => setContactForm({ ...contactForm, estimatedTurnover: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-[#242A36] bg-[#0A0B0D] text-white text-xs focus:border-[#CCFF00] outline-none transition-colors"
                      >
                        <option value="under-20L">UNDER ₹20 LAKHS</option>
                        <option value="50L-2Cr">₹20 LAKHS - ₹2 CRORES</option>
                        <option value="2Cr-10Cr">₹2 CRORES - ₹10 CRORES</option>
                        <option value="above-10Cr">ABOVE ₹10 CRORES</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2">System requirements / message</label>
                      <textarea 
                        rows="3"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="State any specific audit deadlines or transfer pricing requirements..."
                        className="w-full px-4 py-3 rounded-none border border-[#242A36] bg-[#0A0B0D] text-white text-xs focus:border-[#CCFF00] outline-none transition-colors" 
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#CCFF00] hover:bg-white text-black font-extrabold text-xs uppercase transition-colors"
                    >
                      {isSubmitting ? 'LOGGING REQUEST...' : 'DEPLOY SUBMIT COMPONENT'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0B0D] py-16 border-t border-[#181B22] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#CCFF00] flex items-center justify-center text-black font-bold text-xl">
                  NS
                </div>
                <span className="font-sans font-black text-xl tracking-tight text-white uppercase">NS &amp; CO.</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm font-sans">
                Corporate partnership of Chartered Accountants. Executing statutory auditing, transfer pricing reporting, indirect tax planning (GST), and strategic transactional advisory under ICAI regulation.
              </p>
              <div className="text-[0.65rem] text-[#CCFF00] font-bold">
                ICAI REGISTRATION NO: 098765N
              </div>
            </div>

            <div>
              <h5 className="font-bold text-white text-xs uppercase mb-4 tracking-widest">SYSTEM MODULES</h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#services" className="hover:text-[#CCFF00]">01 / STATUTORY AUDITING</a></li>
                <li><a href="#services" className="hover:text-[#CCFF00]">02 / M&amp;A DUE DILIGENCE</a></li>
                <li><a href="#services" className="hover:text-[#CCFF00]">03 / INDIRECT TAX DESK</a></li>
                <li><a href="#services" className="hover:text-[#CCFF00]">04 / RISK SYSTEM AUDIT</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white text-xs uppercase mb-4 tracking-widest">COMPLIANCE PORTALS</h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00]">INCOME TAX DEPT</a></li>
                <li><a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00]">GST AUDIT PORTAL</a></li>
                <li><a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00]">MCA REGISTRAR</a></li>
                <li><a href="#estimator" className="hover:text-[#CCFF00]">FEE SYSTEM CALCULATOR</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#181B22] flex flex-col sm:flex-row justify-between items-center text-[0.65rem] text-slate-500 font-sans">
            <p>
              &copy; {new Date().getFullYear()} NS &amp; CO. CHARTERED ACCOUNTANTS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0 uppercase">
              <a href="#" className="hover:text-[#CCFF00]">PRIVACY CODE</a>
              <a href="#" className="hover:text-[#CCFF00]">ENGAGEMENT PLAN</a>
              <a href="#" className="hover:text-[#CCFF00]">DISCLAIMER NOTICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

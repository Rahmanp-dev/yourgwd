"use client";

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  TrendingUp, 
  Briefcase, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Calculator, 
  Percent, 
  Award, 
  BookOpen, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Check, 
  DollarSign 
} from 'lucide-react';

export default function MohammadIbrahimCoCA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('corporate');
  const [complianceScore, setComplianceScore] = useState(null);
  const [turnover, setTurnover] = useState('0-20L');
  const [businessType, setBusinessType] = useState('proprietorship');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'GST Audit',
    message: ''
  });
  const [formError, setFormError] = useState('');

  // Active navigation highlight on scroll
  const [activeSec, setActiveSec] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSec(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateCompliance = (e) => {
    e.preventDefault();
    let score = 95;
    let recommendations = [];

    if (turnover === '20L-40L') {
      score -= 10;
      recommendations.push("GST Registration is optional but recommended if selling inter-state.");
    } else if (turnover === '40L-1.5Cr') {
      score -= 25;
      recommendations.push("Mandatory GST Registration required. Consider Composition Scheme if applicable.");
    } else if (turnover === '1.5Cr+') {
      score -= 35;
      recommendations.push("Regular GST filing required. Annual GST Audit & reconciliation necessary.");
    }

    if (businessType === 'private-limited') {
      score -= 20;
      recommendations.push("Mandatory statutory audit under Companies Act, 2013.");
      recommendations.push("Regular MCA filings (AOC-4, MGT-7) required.");
    } else if (businessType === 'partnership') {
      score -= 10;
      recommendations.push("Draft and register Partnership deed. Annual tax filing under ITR-5.");
    }

    setComplianceScore({
      score: Math.max(score, 30),
      recommendations
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitContactForm = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    // Simulate API call
    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.phone) {
        setFormError('Please fill in all required fields.');
        setFormLoading(false);
      } else {
        setFormSubmitted(true);
        setFormLoading(false);
      }
    }, 1200);
  };

  const services = {
    corporate: [
      {
        icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
        title: "Corporate Audit & Assurance",
        description: "Statutory audits, internal audits, and risk assessment audits designed to secure financial integrity and satisfy stakeholder expectations.",
        bullets: ["Statutory Audit under Companies Act", "Internal Financial Control Assessments", "Management & Operational Audits"]
      },
      {
        icon: <Shield className="w-6 h-6 text-indigo-400" />,
        title: "GST Compliance & Auditing",
        description: "End-to-end GST consulting, regular filings, input tax credit optimization, and representation before department authorities.",
        bullets: ["GST Returns Filing (GSTR-1, 3B, 9, 9C)", "ITC Reconciliation & Claim Validation", "GST Advisory & Department Audits"]
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
        title: "Corporate Tax Advisory",
        description: "Tax planning strategies tailored to minimize liability while maintaining full compliance with statutory updates.",
        bullets: ["Corporate Tax Planning & Returns", "Transfer Pricing Documentation", "Double Taxation Avoidance Agreement (DTAA)"]
      }
    ],
    growth: [
      {
        icon: <Calculator className="w-6 h-6 text-teal-400" />,
        title: "Bookkeeping & Accounting Setup",
        description: "Outsource your accounting department to specialists using futuristic cloud software with real-time financial dashboards.",
        bullets: ["Daily Ledger Maintenance", "MIS Reporting & Cashflow Statements", "Virtual CFO services"]
      },
      {
        icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
        title: "Project Financing & Advisory",
        description: "Drafting detailed project reports (DPRs), feasibility studies, and working capital optimization strategies to raise capital.",
        bullets: ["Project Reports & CM Data preparation", "Bank Loan Liaisoning & Structured Finance", "Financial Due Diligence"]
      },
      {
        icon: <Award className="w-6 h-6 text-pink-400" />,
        title: "Business Setup & ROC filings",
        description: "Company incorporation, LLPs, partnership registrations, and recurring compliance filings with the Ministry of Corporate Affairs.",
        bullets: ["Private Limited Incorporation", "LLP & Partnership Deed Drafting", "Annual ROC Return Filing (AOC-4, MGT-7)"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030612] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* Background Glowing Pastel Blobs */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-[20%] right-1/4 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[50%] left-1/3 w-[38rem] h-[38rem] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[45rem] h-[45rem] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Grid Pattern Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 w-full bg-[#030612]/75 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-lg">MI</span>
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white block leading-tight">MOHAMMAD IBRAHIM</span>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.25em] block">&amp; CO. CHARTERED ACCOUNTANTS</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About Us' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-semibold transition-colors relative py-2 ${
                    activeSec === item.id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSec === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center">
              <a 
                href="#contact" 
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg hover:border-cyan-400/50 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.06] bg-[#030612]/95 backdrop-blur-xl px-6 py-6 space-y-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About Us' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-semibold py-2 px-3 rounded-lg ${
                  activeSec === item.id 
                    ? 'text-cyan-400 bg-white/[0.03]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.01]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.06]">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Taglines */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-cyan-400 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                Tax Compliance &amp; Advisory Redefined
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Precision. Trust. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                  Financial Integrity.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                Empowering businesses with premium statutory auditing, meticulous tax compliance, and modern corporate consulting services designed to mitigate risks and accelerate growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl shadow-[0_8px_30px_rgb(6,182,212,0.25)] hover:shadow-[0_8px_35px_rgb(6,182,212,0.4)] hover:-translate-y-0.5 transition-all"
                >
                  Schedule A Free Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 rounded-xl transition-all"
                >
                  Explore Practice Areas
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/[0.08] max-w-lg">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">15+</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Years Practice</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">400+</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Corporate Clients</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">100%</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Compliance Rate</p>
                </div>
              </div>
            </div>

            {/* Interactive Compliance Estimator widget */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl transform rotate-2 scale-[1.03] blur-lg"></div>
              
              <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Compliance Planner</h3>
                    <p className="text-xs text-slate-400">Estimate compliance criteria instantly</p>
                  </div>
                </div>

                <form onSubmit={calculateCompliance} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Annual Business Turnover</label>
                    <select 
                      value={turnover}
                      onChange={(e) => setTurnover(e.target.value)}
                      className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-cyan-400/50 transition-colors"
                    >
                      <option value="0-20L">Under ₹20 Lakhs</option>
                      <option value="20L-40L">₹20 Lakhs - ₹40 Lakhs</option>
                      <option value="40L-1.5Cr">₹40 Lakhs - ₹1.5 Crore</option>
                      <option value="1.5Cr+">Over ₹1.5 Crore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Business Constitution</label>
                    <select 
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-cyan-400/50 transition-colors"
                    >
                      <option value="proprietorship">Sole Proprietorship</option>
                      <option value="partnership">Partnership Firm / LLP</option>
                      <option value="private-limited">Private Limited Company</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_4px_20px_rgba(6,182,212,0.2)]"
                  >
                    Analyze Requirements
                  </button>
                </form>

                {complianceScore && (
                  <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400 font-semibold">Estimated Filings Complexity:</span>
                      <span className="text-sm font-extrabold text-cyan-400">{complianceScore.score}% Score</span>
                    </div>
                    
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${complianceScore.score}%` }}
                      ></div>
                    </div>

                    <div className="space-y-2">
                      {complianceScore.recommendations.map((rec, i) => (
                        <div key={i} className="flex gap-2 text-xs text-slate-300 leading-relaxed">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 border-t border-white/[0.04] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Core Practice Areas</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Auditing &amp; Taxation</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Providing sophisticated financial counsel and accurate auditing practices that satisfy compliance mandates while enhancing growth.
            </p>
            
            {/* Tabs for switching categories */}
            <div className="inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/10 mt-4">
              <button 
                onClick={() => setActiveTab('corporate')} 
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'corporate' ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Corporate Compliance
              </button>
              <button 
                onClick={() => setActiveTab('growth')} 
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'growth' ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Strategic Growth &amp; Advisory
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 rounded-2xl p-8 shadow-2xl hover:shadow-[0_12px_40px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
                  {service.icon}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 border-t border-white/[0.06] pt-5">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Unsure of your compliance status?</h4>
                <p className="text-xs text-slate-400">Book a quick 15-minute diagnostic call with our tax experts.</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all flex items-center gap-2"
            >
              Get Free Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 border-t border-white/[0.04] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual Box */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 rounded-3xl transform -rotate-1 scale-[1.02] blur-md"></div>
              
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 rounded-3xl space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Firm Credentials</span>
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                
                <h4 className="text-xl font-bold text-white">Mohammad Ibrahim &amp; Co.</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Established in Hyderabad, our firm is registered under the Institute of Chartered Accountants of India (ICAI). We leverage deep analytical processes and cutting-edge software to bring transparency to corporate accounts.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h5 className="font-bold text-cyan-400 text-lg">ICAI Reg</h5>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Registered CA Firm</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h5 className="font-bold text-cyan-400 text-lg">HYD Office</h5>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Prime Location Hub</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Meet the Partners</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Delivering Financial Excellence</h3>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Founded by <strong>Mohammad Ibrahim</strong> (FCA), our firm has grown into a trusted financial consulting agency. Our approach integrates seasoned professional judgment with strict quality control.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Regulatory Expertise</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      We strictly align all statutory work with revised ICAI guidelines, ensuring compliance that withstands tax office scrutinies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Client-First Custom Portals</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      All audit reports and GST returns are uploaded to dynamic, secure portals accessible by client stakeholders instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 border-t border-white/[0.04] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Client Testimonials</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Endorsed by Top Corporates</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Discover how Hyderabad’s business owners and directors rely on our tax advising for their monthly reporting and strategic pivots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Mohammad Ibrahim & Co. CA transformed our corporate tax planning structure. Their GST audit strategies optimized our ITCs saving us over ₹15 Lakhs in leakages.",
                author: "Abdul Rahman",
                designation: "Managing Director, Peak Diagnostics Pvt Ltd"
              },
              {
                quote: "The team's representation before the income tax department was exceptionally professional. Clear, transparent documents and robust legal backup.",
                author: "Siddharth Jain",
                designation: "Founder, Zenith Construction Corp"
              },
              {
                quote: "As a technology startup, having a CA firm that understands cloud SaaS, tax withholdings, and foreign equity compliance is a competitive edge.",
                author: "Nisha Rao",
                designation: "CFO, CyberPulse Technologies"
              }
            ].map((testi, index) => (
              <div 
                key={index}
                className="bg-white/[0.01] border border-white/[0.06] hover:border-cyan-400/35 p-8 rounded-2xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-cyan-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "{testi.quote}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/[0.04]">
                  <h5 className="font-bold text-white text-sm">{testi.author}</h5>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{testi.designation}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section / Callback Form */}
      <section id="contact" className="py-24 border-t border-white/[0.04] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* CTA copy */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Consultation Desk</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Secure Your <br />
                Financial Strategy Today
              </h3>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect with our Hyderabad office for premium auditing and tax consultations. Provide your details, and a senior partner will reach out within 2 hours.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Direct Desk</h5>
                    <p className="text-sm font-semibold text-white">+91 40 4829 1083</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Secure Email</h5>
                    <p className="text-sm font-semibold text-white">consult@miassociates.ca</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Office Address</h5>
                    <p className="text-sm font-semibold text-white">Mezzanine Floor, Skyview Tower, Madhapur, Hyderabad, TS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Callback Form */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl transform -rotate-1 blur-md"></div>
              
              <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] p-8 rounded-3xl shadow-2xl">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Consultation Request Received</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Thank you for reaching out. A senior partner will contact you shortly with custom filing advisory.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submitContactForm} className="space-y-5">
                    <h4 className="font-bold text-lg text-white">Request Consultation Callback</h4>
                    
                    {formError && (
                      <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-400">
                        {formError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="e.g. Mohd Ibrahim"
                          className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-cyan-400/50 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Corporate Email *</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="e.g. user@domain.com"
                          className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-cyan-400/50 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="e.g. +91 9876543210"
                          className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-cyan-400/50 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Required Practice Area</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleFormChange}
                          className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-cyan-400/50 transition-colors"
                        >
                          <option value="GST Audit">GST Audit &amp; Reconciliation</option>
                          <option value="Statutory Audit">Statutory Corporate Audit</option>
                          <option value="Tax Litigation">Income Tax Appeal / Litigation</option>
                          <option value="ROC Filing">ROC Compliance &amp; Setup</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Compliance Requirements &amp; Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleFormChange}
                        rows="3"
                        placeholder="Briefly state your concern or tax queries..."
                        className="w-full bg-[#030612]/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-cyan-400/50 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all flex justify-center items-center gap-2"
                    >
                      {formLoading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Request Expert Callback
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] bg-[#02040a]/90 relative z-10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Branding Column */}
            <div className="col-span-2 space-y-4">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm">MI</span>
                </div>
                <div>
                  <span className="font-extrabold text-sm tracking-wider text-white block">MOHAMMAD IBRAHIM</span>
                  <span className="text-[8px] text-cyan-400 font-bold uppercase tracking-[0.2em] block">&amp; CO. CA</span>
                </div>
              </a>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                Registered CA firm providing statutory compliance audits, income tax planning, and strategic project financing services to Hyderabad's leading businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h5>
              <ul className="space-y-2.5">
                {['Home', 'Services', 'About Us', 'Testimonials'].map((link, i) => (
                  <li key={i}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance Info */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Statutory Notes</h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                ICAI Registration No: [TBD]<br />
                Partnership Firm Registration Code: [TBD]<br />
                All services comply with the standards set by the Board of Directors of ICAI.
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <span>&copy; {new Date().getFullYear()} Mohammad Ibrahim &amp; Co. CA. All rights reserved.</span>
            <span>Bespoke Design System &bull; Glassmorphism V2</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

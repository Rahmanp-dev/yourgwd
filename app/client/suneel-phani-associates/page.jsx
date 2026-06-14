"use client";

import React, { useState } from 'react';
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
  DollarSign,
  BriefcaseBusiness
} from 'lucide-react';

export default function SuneelPhaniAssociates() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const toggleServiceSelection = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter(s => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitContactForm = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

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

  const services = [
    {
      icon: <Shield className="w-6 h-6 text-slate-600" />,
      name: "GST Audit & Representation",
      desc: "Comprehensive GST audit support, GSTR reconciliations, department representation, and input tax credit analysis."
    },
    {
      icon: <Calculator className="w-6 h-6 text-slate-600" />,
      name: "Corporate Auditing & Assurance",
      desc: "Statutory audits, internal financial controls, and risk consulting under Companies Act guidelines."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-slate-600" />,
      name: "Income Tax Appeals & litigation",
      desc: "Professional representation before income tax tribunals, dispute resolutions, and structured tax planning."
    },
    {
      icon: <BriefcaseBusiness className="w-6 h-6 text-slate-600" />,
      name: "Company Incorporation & ROC",
      desc: "Fast-track business setups, Private Limited registrations, LLP deed drafts, and monthly Ministry of Corporate Affairs filings."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-slate-600" />,
      name: "Project Reports & CM Data",
      desc: "Detailed project financing reports, bank liaisoning, working capital evaluation, and feasibility assessment."
    },
    {
      icon: <FileText className="w-6 h-6 text-slate-600" />,
      name: "Cloud Bookkeeping & Payroll",
      desc: "Outsourced accounting services, ledger supervision, compliance reports, and automated salary processing."
    }
  ];

  return (
    <div className="min-h-screen bg-[#e2e8f0] text-slate-800 font-sans selection:bg-slate-300 overflow-x-hidden">
      
      {/* Sticky Neumorphic Header */}
      <header className="sticky top-0 z-50 w-full bg-[#e2e8f0] border-b border-slate-300/50 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] flex items-center justify-center shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] border border-slate-200/40">
                <span className="text-slate-700 font-extrabold text-base">SP</span>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wide text-slate-800 block leading-none">SUNEEL PHANI</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block mt-1">&amp; ASSOCIATES CA</span>
              </div>
            </a>

            {/* Links */}
            <nav className="hidden md:flex space-x-6">
              {['Services', 'About Us', 'Testimonials', 'Planner'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '')}`} 
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 rounded-lg hover:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] transition-all"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex">
              <a 
                href="#contact" 
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-[#e2e8f0] rounded-xl shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] hover:text-slate-900 transition-all"
              >
                Request Consultation
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-[#e2e8f0] flex items-center justify-center shadow-[3px_3px_6px_#cbd5e1,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] text-slate-600 hover:text-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#e2e8f0] border-t border-slate-300 mt-4 px-6 py-4 space-y-3">
            {['Services', 'About Us', 'Testimonials', 'Planner'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-600 rounded-lg hover:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff]"
              >
                {link}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 text-xs font-bold uppercase tracking-wider text-slate-700 bg-[#e2e8f0] rounded-xl shadow-[3px_3px_6px_#cbd5e1,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff]"
            >
              Request Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Taglines */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                Chartered Accountants &amp; Financial Strategists
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
                Corporate Compliance <br />
                <span className="text-slate-500 font-bold">With Uncompromising Precision.</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Providing premium statutory audit assurance, meticulous GST planning, corporate litigation support, and outsourced financial strategies designed for enterprises that value stability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 bg-[#e2e8f0] rounded-2xl shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] active:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] transition-all"
                >
                  Book Callback Request
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex justify-center items-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 bg-[#e2e8f0] rounded-2xl shadow-[inset_1px_1px_3px_rgba(0,0,0,0.05)] border border-slate-300/40 transition-all"
                >
                  Explore Practice Areas
                </a>
              </div>
            </div>

            {/* Hero Image replacement: Neumorphic Graphic Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-[2.5rem] bg-[#e2e8f0] p-8 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] border border-slate-200/60">
                <div className="space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Corporate Portal</span>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                  </div>

                  {/* Visual Stats display */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff]">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Compliance Index</span>
                      <div className="flex justify-between items-end mt-1">
                        <span className="text-2xl font-black text-slate-700">99.8%</span>
                        <span className="text-xs text-emerald-600 font-bold flex items-center">
                          +1.2% this Qtr
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff]">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Audit Cases</span>
                      <div className="flex justify-between items-end mt-1">
                        <span className="text-2xl font-black text-slate-700">142</span>
                        <span className="text-xs text-slate-500 font-semibold">100% On-Track</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center text-xs font-semibold text-slate-500 border-t border-slate-300/50">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>Updated 2 mins ago</span>
                    </div>
                    <span className="text-slate-700 uppercase tracking-widest text-[9px] font-bold">SP &amp; Co.</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">Practice Scope</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Professional Financial Services</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Providing rigorous statutory supervision, precise tax reconciliations, and tailored consulting to secure long-term capital stability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-[#e2e8f0] shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] border border-slate-200/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">{service.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>

                <a 
                  href="#contact" 
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Compliance Planner Tool */}
      <section id="planner" className="py-24 bg-[#e2e8f0] border-t border-slate-300/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Explanation Copy */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Interactive Tool</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Configure Your Service Scope</h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Click on the compliance areas below that your business requires. Our planner aggregates the selection to configure a tailored consulting package automatically.
              </p>

              <div className="space-y-4">
                {[
                  "Monthly GST Returns Filing",
                  "Statutory Audit Under Companies Act",
                  "Income Tax Return Preparation",
                  "ROC Compliance & Annual Filing",
                  "Outsourced Cloud Bookkeeping",
                  "Detailed Project Reports for Loans"
                ].map((sName) => {
                  const isSelected = selectedServices.includes(sName);
                  return (
                    <button
                      key={sName}
                      onClick={() => toggleServiceSelection(sName)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all ${
                        isSelected 
                          ? 'bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] text-slate-850'
                          : 'bg-[#e2e8f0] shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <span>{sName}</span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        isSelected 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600' 
                          : 'border-slate-350 text-transparent'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Output Box */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-[#e2e8f0] rounded-[2.5rem] p-8 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] border border-slate-200/60 space-y-6">
                <h4 className="font-extrabold text-lg text-slate-800">Configured Scope Summary</h4>

                {selectedServices.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 space-y-3">
                    <Calculator className="w-12 h-12 text-slate-300 mx-auto" />
                    <p className="text-xs font-medium uppercase tracking-wider">Select services to configure scope</p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <ul className="space-y-3">
                      {selectedServices.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-[#e2e8f0] rounded-lg shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] text-xs text-slate-700 font-semibold">
                          <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-300/50 space-y-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <div className="flex justify-between">
                        <span>Items Selected</span>
                        <span className="text-slate-800 font-black">{selectedServices.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reporting Period</span>
                        <span className="text-slate-800 font-black">Annual / Retainer</span>
                      </div>
                    </div>

                    <a 
                      href="#contact"
                      className="block text-center w-full py-4 text-xs font-bold uppercase tracking-wider text-slate-700 bg-[#e2e8f0] rounded-xl shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] transition-all mt-4"
                    >
                      Request Scope Quote
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus" className="py-24 bg-[#e2e8f0] border-t border-slate-300/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual Box */}
            <div className="relative">
              <div className="bg-[#e2e8f0] rounded-3xl p-8 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] border border-slate-200/55 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Firm Profile</span>
                  <Award className="w-5 h-5 text-slate-500" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-800">Suneel Phani &amp; Associates</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquartered in Hyderabad, our firm is registered under the Institute of Chartered Accountants of India (ICAI). We leverage rigorous methodologies to bring absolute transparency to client accounts.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] text-center">
                    <span className="font-extrabold text-slate-700 text-lg">20+ Yrs</span>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Joint Practice</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] text-center">
                    <span className="font-extrabold text-slate-700 text-lg">ICAI Regd</span>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">CA Firm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Copy */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Partnership Overview</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Meticulous Advisory Built on Principles</h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded by senior professionals <strong>Suneel</strong> (FCA) and <strong>Phani</strong> (ACA), our practice is established to deliver institutional-grade tax consultation and financial control audits.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-slate-500 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-700 text-sm">Regulatory Verification</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      All audit trails are strictly scrutinized, maintaining complete compatibility with contemporary board requirements and income tax laws.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-slate-500 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-700 text-sm">Structured Retainers</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      We offer structured retainership programs that give organizations access to monthly GST advisory, bookkeeping audits, and statutory filings seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#e2e8f0] border-t border-slate-300/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">Client Testimonials</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Endorsed by Top Corporate Houses</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Learn how commercial firms, constructors, and software providers in Hyderabad operate with confidence using our CA services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Suneel Phani & Associates provides stellar audit assurance. Their documentation standards are immaculate and have consistently saved us compliance delays.",
                author: "Mohit Reddy",
                designation: "Chief Financial Officer, Falcon Infrastructure Ltd"
              },
              {
                quote: "Meticulous work on GST reconciliation GSTR-9/9C. Their advisory team helped us resolve department audits smoothly.",
                author: "Ananya Deshpande",
                designation: "Director, Prime Software Solutions Pvt Ltd"
              },
              {
                quote: "We've trusted Suneel Phani & Associates for corporate tax filing for over a decade. Exceptionally reliable and highly structured advisory.",
                author: "K. R. Chowdary",
                designation: "Managing Partner, Deccan Builders & Developers"
              }
            ].map((testi, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#e2e8f0] shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] border border-slate-200/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-slate-600 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs italic leading-relaxed">
                    "{testi.quote}"
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-350/60">
                  <h5 className="font-bold text-slate-800 text-xs">{testi.author}</h5>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider mt-1">{testi.designation}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section / Callback Form */}
      <section id="contact" className="py-24 bg-[#e2e8f0] border-t border-slate-300/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Consultation desk</span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-800 leading-tight">
                Align Your Statutory Compliance
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with our Hyderabad practice office. Leave your details below and a senior manager will contact you with diagnostic advice.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Office Hotline</h5>
                    <p className="text-xs font-bold text-slate-700">+91 40 4930 2083</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Direct Email</h5>
                    <p className="text-xs font-bold text-slate-700">support@spassociates.ca</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-slate-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Office Location</h5>
                    <p className="text-xs font-bold text-slate-700">Level 4, Regus Centre, Gachibowli, Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neumorphic Callback Form */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg bg-[#e2e8f0] rounded-[2.5rem] p-8 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] border border-slate-200/60">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#e2e8f0] shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mx-auto text-slate-600">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">Callback Request Received</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Thank you. A CA consultant from our Gachibowli office will call you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submitContactForm} className="space-y-5">
                    <h4 className="font-extrabold text-lg text-slate-800">Request Callback</h4>

                    {formError && (
                      <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-xl text-xs font-semibold">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Suneel Kumar"
                        className="w-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] border-0 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:ring-1 focus:ring-slate-350 transition-colors"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Corporate Email *</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. director@company.com"
                          className="w-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] border-0 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:ring-1 focus:ring-slate-350 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 90000 12345"
                          className="w-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] border-0 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:ring-1 focus:ring-slate-350 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Company / Enterprise Name</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Falcon Enterprises Pvt Ltd"
                        className="w-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] border-0 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:ring-1 focus:ring-slate-350 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Special Directives / Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="State any specific audit/tax deadlines..."
                        className="w-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] border-0 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:ring-1 focus:ring-slate-350 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider text-slate-700 bg-[#e2e8f0] rounded-xl shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] hover:text-slate-900 transition-all flex justify-center items-center gap-2"
                    >
                      {formLoading ? (
                        <span className="w-5 h-5 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Submit Consultation Request
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
      <footer className="py-12 bg-[#d8e0e9] border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div className="col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#e2e8f0] flex items-center justify-center shadow-[3px_3px_6px_#cbd5e1,-3px_-3px_6px_#ffffff]">
                  <span className="text-slate-600 font-extrabold text-sm">SP</span>
                </div>
                <div>
                  <span className="font-extrabold text-sm tracking-wide text-slate-700 block">SUNEEL PHANI</span>
                  <span className="text-[8px] text-slate-550 font-bold uppercase tracking-widest block">&amp; ASSOCIATES CA</span>
                </div>
              </a>
              <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
                Registered partnership firm of Chartered Accountants serving Hyderabad's corporate houses with premier statutory auditing, tax representation, and capital structure advisory.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">Quick Links</h5>
              <ul className="space-y-2.5">
                {['Services', 'About Us', 'Testimonials', 'Planner'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-xs text-slate-500 hover:text-slate-800 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory Note */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">Statutory Notes</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                ICAI Registration ID: [TBD]<br />
                Partnership Registration: [TBD]<br />
                Subject to regulatory compliance and ICAI Code of Ethics.
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-350/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <span>&copy; {new Date().getFullYear()} Suneel Phani &amp; Associates. All rights reserved.</span>
            <span>Bespoke Design System &bull; Neumorphism V1</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

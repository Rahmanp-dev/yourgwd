"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, Shield, Coins, Briefcase, Scale, FileText, 
  Check, MapPin, Phone, Mail, Globe, Calendar, ChevronRight, 
  Menu, X, Award, ArrowUpRight, Lock, CheckCircle2
} from 'lucide-react';

export default function YTaxConsultancy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [annualProfit, setAnnualProfit] = useState(25000000); // 2.5 Cr standard
  const [currentDeductions, setCurrentDeductions] = useState('standard');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    niche: 'Corporate Restructuring',
    message: ''
  });

  // Simple premium calculation for tax optimizer
  const calculateOptimizedTax = () => {
    // Standard tax rate ~25.17% (with surcharge & cess)
    const baseRate = 0.2517;
    const standardTax = annualProfit * baseRate;
    
    // Deductions multiplier based on strategy
    let optimizedRate = 0.1750; // Standard Y Tax base optimized
    if (currentDeductions === 'aggressive') {
      optimizedRate = 0.1500; // Deep M&A restructuring rate
    } else if (currentDeductions === 'conservative') {
      optimizedRate = 0.1980;
    }
    
    const optimizedTax = annualProfit * optimizedRate;
    const savings = standardTax - optimizedTax;
    
    return {
      standard: Math.round(standardTax),
      optimized: Math.round(optimizedTax),
      savings: Math.round(savings),
      percent: Math.round((savings / standardTax) * 100)
    };
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', niche: 'Corporate Restructuring', message: '' });
    }, 4000);
  };

  const { standard, optimized, savings, percent } = calculateOptimizedTax();

  return (
    <div className="min-h-screen bg-[#080d1a] font-sans text-slate-300 selection:bg-amber-600 selection:text-white overflow-x-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-amber-600/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-slate-900/40 blur-[150px] pointer-events-none z-0" />

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080d1a]/90 border-b border-amber-600/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22 py-4">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-amber-600 to-yellow-400 p-[1px] flex items-center justify-center shadow-lg shadow-amber-600/10">
                <div className="w-full h-full bg-[#080d1a] rounded-[3px] flex items-center justify-center font-serif text-amber-500 font-bold text-2xl">
                  Y
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-amber-500 block leading-tight">
                  Y TAX CONSULTANCY
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-[0.25em] uppercase block">
                  Chartered Accountants
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex space-x-10">
              <a href="#services" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500 transition-colors">Services</a>
              <a href="#calculator" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500 transition-colors">Tax Optimizer</a>
              <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500 transition-colors">The Partners</a>
              <a href="#testimonials" className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500 transition-colors">Testimonials</a>
            </div>

            {/* Action button */}
            <div className="hidden md:flex">
              <a 
                href="#contact" 
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080d1a] bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 rounded transition-all transform active:scale-95 shadow-md shadow-amber-600/15"
              >
                Request Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 border border-amber-600/20 rounded flex items-center justify-center text-amber-500 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080d1a] border-b border-amber-600/20 px-4 pt-4 pb-6 space-y-4">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500"
            >
              Services
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500"
            >
              Tax Optimizer
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500"
            >
              The Partners
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-500"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold uppercase tracking-wider text-amber-500"
            >
              Request Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-36 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-600/20 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-6">
                <Shield size={12} />
                Elite Corporate Advisory & Tax Defense
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                Architecting <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300 font-normal">Generational Capital</span> Retention.
              </h1>
              <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                Providing high-end audit representation, corporate restructuring advice, and precise tax strategies. We protect and compound institutional and private wealth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="#contact"
                  className="inline-flex justify-center items-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#080d1a] bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 rounded transition-all shadow-lg shadow-amber-600/10 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Schedule Private Call
                </a>
                <a 
                  href="#services"
                  className="inline-flex justify-center items-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-slate-300 border border-amber-600/30 hover:border-amber-500 hover:bg-amber-600/5 rounded transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Our Methodology
                </a>
              </div>

              {/* Accolades */}
              <div className="flex items-center gap-8 border-t border-slate-900 pt-8">
                <div className="flex items-center gap-3">
                  <Award className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">25+ Years</h4>
                    <p className="text-[10px] text-slate-500">Combined Senior Advisory</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-950" />
                <div className="flex items-center gap-3">
                  <Shield className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">100% Audit</h4>
                    <p className="text-[10px] text-slate-500">Compliant Defence Record</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column / Interactive Tax Calculator */}
            <div className="relative" id="calculator">
              {/* Outer heavy luxury borders */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-yellow-500 rounded-lg transform rotate-2 scale-102 opacity-5 blur-lg"></div>
              <div className="relative bg-[#0b1429] border-2 border-amber-600/20 p-8 rounded-lg shadow-2xl">
                
                <div className="border-b border-amber-600/15 pb-6 mb-6">
                  <span className="text-amber-500 font-serif italic text-sm block mb-1">Interactive Diagnostic</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider font-serif">Corporate Profit & Tax Optimizer</h3>
                  <p className="text-xs text-slate-500">Model your approximate savings under a Y Tax Restructuring protocol.</p>
                </div>

                <div className="space-y-6">
                  {/* Profit Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase mb-2">
                      <span className="text-slate-400">Annual Corporate Profit:</span>
                      <span className="text-amber-500">{formatCurrency(annualProfit)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000000" 
                      max="100000000" 
                      step="5000000" 
                      value={annualProfit} 
                      onChange={(e) => setAnnualProfit(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600 mt-1">
                      <span>50 Lakhs</span>
                      <span>5 Crores</span>
                      <span>10 Crores</span>
                    </div>
                  </div>

                  {/* Structuring Mode */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Optimisation Strategy:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'conservative', label: 'Conservative' },
                        { id: 'standard', label: 'Recommended' },
                        { id: 'aggressive', label: 'Deep Restruct.' }
                      ].map((strat) => (
                        <button
                          key={strat.id}
                          onClick={() => setCurrentDeductions(strat.id)}
                          className={`py-2 px-1 text-[10px] font-bold uppercase tracking-wider rounded border text-center transition-all ${
                            currentDeductions === strat.id 
                            ? 'bg-amber-600/10 border-amber-500 text-amber-500' 
                            : 'bg-[#080d1a] border-slate-900 text-slate-500 hover:border-slate-800'
                          }`}
                        >
                          {strat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Output Display */}
                  <div className="bg-[#080d1a] border border-amber-600/10 p-5 rounded space-y-3">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Standard Liability:</span>
                      <span className="line-through">{formatCurrency(standard)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-300 font-bold">
                      <span>Optimised Y Tax Liability:</span>
                      <span className="text-emerald-500">{formatCurrency(optimized)}</span>
                    </div>
                    <div className="h-px bg-slate-900" />
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold uppercase text-amber-500 block">Capital Saved:</span>
                        <span className="text-[10px] text-slate-500 block">Retained for reinvestment</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-amber-500 block">{formatCurrency(savings)}</span>
                        <span className="text-xs font-bold text-emerald-500 block">+{percent}% Profit Retention</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-y border-slate-900 bg-[#070c17] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-500 font-serif italic text-sm block mb-2">Our Advisory Offerings</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wide mb-4">Elite Financial Architecture</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Rigorously structured consulting modules tailored to isolate asset liability and optimize corporate cashflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="p-6 bg-[#0b1429] border-t-2 border-amber-600/40 border-x border-b border-slate-900 rounded shadow-md hover:border-amber-500 transition-all flex flex-col justify-between h-full">
              <div>
                <Coins className="text-amber-500 mb-6" size={32} />
                <h3 className="text-lg font-serif font-bold text-white mb-3 uppercase">Corporate Auditing</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Systematic audit protocols designed to meet ROC compliance, verify internal assets, and establish absolute structural integrity.
                </p>
              </div>
              <div className="border-t border-slate-950 pt-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                <span className="text-slate-600">Audit Desk</span>
                <a href="#contact" className="text-amber-500 hover:text-amber-400 flex items-center gap-1">
                  Enquire <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-[#0b1429] border-t-2 border-amber-600/40 border-x border-b border-slate-900 rounded shadow-md hover:border-amber-500 transition-all flex flex-col justify-between h-full">
              <div>
                <TrendingUp className="text-amber-500 mb-6" size={32} />
                <h3 className="text-lg font-serif font-bold text-white mb-3 uppercase">Tax Structuring</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Deploying corporate hold-cos, offshore concessions, and strategic investment write-offs to lawfully compress tax liabilities.
                </p>
              </div>
              <div className="border-t border-slate-950 pt-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                <span className="text-slate-600">Tax Desk</span>
                <a href="#contact" className="text-amber-500 hover:text-amber-400 flex items-center gap-1">
                  Enquire <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-[#0b1429] border-t-2 border-amber-600/40 border-x border-b border-slate-900 rounded shadow-md hover:border-amber-500 transition-all flex flex-col justify-between h-full">
              <div>
                <Shield className="text-amber-500 mb-6" size={32} />
                <h3 className="text-lg font-serif font-bold text-white mb-3 uppercase">Asset Protection</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Establishing private trusts, estate allocation models, and shielding capital reserves from systemic corporate litigation risks.
                </p>
              </div>
              <div className="border-t border-slate-950 pt-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                <span className="text-slate-600">Trusts Desk</span>
                <a href="#contact" className="text-amber-500 hover:text-amber-400 flex items-center gap-1">
                  Enquire <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-6 bg-[#0b1429] border-t-2 border-amber-600/40 border-x border-b border-slate-900 rounded shadow-md hover:border-amber-500 transition-all flex flex-col justify-between h-full">
              <div>
                <Briefcase className="text-amber-500 mb-6" size={32} />
                <h3 className="text-lg font-serif font-bold text-white mb-3 uppercase">M&A Structuring</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Directing due-diligence pipelines for company buyouts, capital dilutions, corporate splits, and cross-border consolidations.
                </p>
              </div>
              <div className="border-t border-slate-950 pt-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                <span className="text-slate-600">M&A Desk</span>
                <a href="#contact" className="text-amber-500 hover:text-amber-400 flex items-center gap-1">
                  Enquire <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image/Visual Block */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-yellow-500 rounded-lg transform -rotate-1 scale-102 opacity-5 blur-md"></div>
              <div className="border-2 border-amber-600/30 p-10 bg-[#0b1429] rounded-lg">
                <div className="space-y-8">
                  <div className="border-b border-slate-900 pb-4">
                    <span className="text-amber-500 text-xs tracking-widest block uppercase font-bold">FOUNDATIONAL ETHOS</span>
                    <h3 className="text-2xl font-serif text-white uppercase mt-1">Y Tax Values</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-white uppercase">Absolute Discretion</h4>
                        <p className="text-xs text-slate-500 mt-1">Your capital architecture remains confidential. Private data silos strictly safeguarded.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-white uppercase">Preemptive Compliancy</h4>
                        <p className="text-xs text-slate-500 mt-1">We structure transactions defensively, minimizing systemic audit risk before it initiates.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-white uppercase">Strategic Advocacy</h4>
                        <p className="text-xs text-slate-500 mt-1">Representing your institutional interests with revenue courts and corporate tribunals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div>
              <span className="text-amber-500 font-serif italic text-sm block mb-3">Our Professional Pedigree</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wide mb-6">Y Tax Consultancy</h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Y Tax Consultancy is a premium financial advisory and accounting firm led by senior Fellow Chartered Accountants. We represent high-net-worth individuals, large corporations, and major real estate developers in Hyderabad and offshore zones.
              </p>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8">
                Recognizing that standard accounting approaches often leave massive sums exposed to double taxation and sub-optimal structuring, we operate a specialized advisory pipeline that designs bespoke tax plans aligned with global capital movements.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0b1429] border border-slate-900 rounded">
                  <span className="text-amber-500 text-xl font-bold font-serif block">₹500Cr+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Corporate Capital Advised</span>
                </div>
                <div className="p-4 bg-[#0b1429] border border-slate-900 rounded">
                  <span className="text-amber-500 text-xl font-bold font-serif block">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Legal Compliance Score</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 border-y border-slate-900 bg-[#070c17] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-500 font-serif italic text-sm block mb-2">Institutional Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wide mb-4">Client Endorsements</h2>
            <p className="text-slate-400 text-sm md:text-base">
              A record of trust from executive leadership boards and high-value corporate partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="p-8 bg-[#0b1429] border border-slate-900 hover:border-amber-600/30 rounded flex flex-col justify-between h-full transition-all shadow-md">
              <p className="text-slate-300 text-xs italic leading-relaxed mb-8">
                "Y Tax Consultancy restructured our cross-border holding strategy. The savings were immediate, ROC filing issues disappeared, and the advisory was executed with absolute corporate discretion."
              </p>
              <div className="flex items-center gap-3 border-t border-slate-950 pt-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif text-amber-500 text-sm font-bold">
                  K
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold font-serif uppercase">K. Raghunath</h4>
                  <span className="text-[10px] text-amber-500 font-semibold block uppercase">Managing Director, Capital Infra Group</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-[#0b1429] border border-slate-900 hover:border-amber-600/30 rounded flex flex-col justify-between h-full transition-all shadow-md">
              <p className="text-slate-300 text-xs italic leading-relaxed mb-8">
                "Their interactive financial auditing and pre-acquisition corporate restructuring advice saved us massive capital gains exposure during the merger. Truly premium advisors."
              </p>
              <div className="flex items-center gap-3 border-t border-slate-950 pt-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif text-amber-500 text-sm font-bold">
                  S
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold font-serif uppercase">S. K. Nayeem</h4>
                  <span className="text-[10px] text-amber-500 font-semibold block uppercase">CEO, Prime Tech Industries</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-[#0b1429] border border-slate-900 hover:border-amber-600/30 rounded flex flex-col justify-between h-full transition-all shadow-md">
              <p className="text-slate-300 text-xs italic leading-relaxed mb-8">
                "Our previous advisors could not resolve complex GST ITC mismatch logs for years. Y Tax resolved our refund pipeline in a single quarter of structured compliance audits."
              </p>
              <div className="flex items-center gap-3 border-t border-slate-950 pt-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif text-amber-500 text-sm font-bold">
                  M
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold font-serif uppercase">M. A. Lateef</h4>
                  <span className="text-[10px] text-amber-500 font-semibold block uppercase">Finance Director, Lateef Global Traders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section / Contact Form */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0b1429] border-2 border-amber-600/25 rounded-lg p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600" />
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-amber-500 font-serif italic text-sm block mb-2">Request Secure Engagement</span>
              <h3 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-wide mb-4">
                Initialize Consultation
              </h3>
              <p className="text-slate-400 text-xs max-w-md mx-auto">
                Fill in the details below to request a confidential audit review or tax structuring consultation.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 border border-emerald-500/20 bg-emerald-500/5 rounded text-center">
                <CheckCircle2 className="text-emerald-500 mx-auto mb-4" size={48} />
                <h4 className="text-lg font-serif text-white uppercase mb-2">Request Processed Successfully</h4>
                <p className="text-slate-400 text-xs max-w-md mx-auto">
                  A partner from Y Tax Consultancy will reach out via the secure contact details provided within 24 business hours to arrange a private meeting.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-slate-400 font-bold">Your Name / Title:</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Raghunath K." 
                      className="w-full bg-[#080d1a] border border-slate-900 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-slate-400 font-bold">Company / Entity:</label>
                    <input 
                      type="text" 
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Capital Infra Group" 
                      className="w-full bg-[#080d1a] border border-slate-900 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-slate-400 font-bold">Contact Email:</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. md@capitalinfra.com" 
                      className="w-full bg-[#080d1a] border border-slate-900 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-slate-400 font-bold">Contact Telephone:</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98480 XXXXX" 
                      className="w-full bg-[#080d1a] border border-slate-900 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-slate-400 font-bold">Consultation Subject:</label>
                  <select 
                    name="niche"
                    value={formData.niche}
                    onChange={handleInputChange}
                    className="w-full bg-[#080d1a] border border-slate-900 rounded p-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors cursor-pointer"
                  >
                    <option value="Corporate Restructuring">Corporate Tax Structuring</option>
                    <option value="Tax Audit Defence">Preemptive Audit & Compliance Defence</option>
                    <option value="Wealth Estate Protection">Wealth Protection & Private Trusts</option>
                    <option value="M&A Deal Structuring">M&A / Buyout Valuation Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-slate-400 font-bold">Brief Request Overview:</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide a high-level overview of the auditing or taxation matter..." 
                    className="w-full bg-[#080d1a] border border-slate-900 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-4">
                  <button 
                    type="submit"
                    className="px-12 py-4 text-xs font-semibold uppercase tracking-wider text-[#080d1a] bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 rounded transition-all shadow-lg shadow-amber-600/10 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Transmit Request &lt;CONFIDENTIAL&gt;
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#060a14] py-16 relative z-10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-slate-400 mb-12">
            
            {/* Logo/Branding */}
            <div className="md:col-span-1">
              <span className="text-white font-serif font-bold text-sm block tracking-widest mb-4">Y TAX CONSULTANCY</span>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                Elite Chartered Accounting and corporate finance advisors. Preserving corporate capital integrity and protecting wealth structures since 2001.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[9px] text-amber-500 uppercase tracking-widest font-bold">
                <Lock size={10} /> Secure Encryption Node
              </div>
            </div>

            {/* Office Node */}
            <div>
              <span className="text-white font-bold block mb-4 uppercase text-[10px] tracking-wider">The Secretariat</span>
              <div className="space-y-3 text-[11px] text-slate-500">
                <div className="flex gap-2">
                  <MapPin size={14} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Level 8, Elite Trade Chambers, Shaikpet Main Road, Tolichowki, Hyderabad, 500008</span>
                </div>
              </div>
            </div>

            {/* Contacts Node */}
            <div>
              <span className="text-white font-bold block mb-4 uppercase text-[10px] tracking-wider">Trunk Lines</span>
              <div className="space-y-3 text-[11px] text-slate-500">
                <div className="flex gap-2 items-center">
                  <Phone size={14} className="text-amber-500 shrink-0" />
                  <span>+91 99639 90123</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail size={14} className="text-amber-500 shrink-0" />
                  <span>advisory@ytaxconsultancy.com</span>
                </div>
              </div>
            </div>

            {/* Links Node */}
            <div>
              <span className="text-white font-bold block mb-4 uppercase text-[10px] tracking-wider">Index Links</span>
              <div className="space-y-2 text-[11px] text-slate-500 uppercase font-bold">
                <a href="#services" className="block hover:text-amber-500 transition-colors">Services Directory</a>
                <a href="#calculator" className="block hover:text-amber-500 transition-colors">Tax Optimizer</a>
                <a href="#about" className="block hover:text-amber-500 transition-colors">The Partners</a>
                <a href="#contact" className="block hover:text-amber-500 transition-colors">Private Briefing</a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600">
            <div>
              © 2026 Y TAX CONSULTANCY. ALL RIGHTS RESERVED. ICAI REGISTRATION: S-90123.
            </div>
            <div className="flex items-center gap-2 uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>SECURED INTERFACE</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

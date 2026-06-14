"use client";

import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Zap, TrendingUp, Layers, Activity, FileText, 
  CheckCircle2, Menu, X, ChevronRight, Cpu, Globe, Database, 
  Mail, Phone, MapPin, Users, Award, ArrowUpRight, Lock, Sparkles
} from 'lucide-react';

export default function SaiReddyYanalaCA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tax');
  const [terminalLog, setTerminalLog] = useState([
    'SYSTEM READY // R.E.D.D.Y. CORE v4.0.1',
    'STATUS: ENCRYPTED CONNECTION ESTABLISHED',
    'SECURE AUDIT TERMINAL: ENTER COMMAND OR SELECT DIAGNOSTIC'
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanType, setScanType] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'GST Audit',
    message: ''
  });

  // Terminal diagnostic simulator
  const runDiagnostic = (type) => {
    if (isScanning) return;
    setIsScanning(true);
    setScanType(type);
    
    const logs = {
      tax: [
        'INITIATING TAX RISK ASSESSMENT...',
        'ANALYZING INCOME STRUCTURE & DEDUCTIONS...',
        'CROSS-REFERENCING DTAA AND OFFSHORE CLAUSES...',
        'CHECKING SECTION 80 DEDUCTION INTEGRITY...',
        'COMPLIANCE SCAN COMPLETE: 0 CRITICAL THREATS DETECTED // 12 OPTIMIZATIONS AVAILABLE'
      ],
      gst: [
        'BOOTING GST RECONCILIATION PROCESSOR...',
        'DOWNLOADING GSTR-2B VS GSTR-3B DATASETS...',
        'VERIFYING ELIGIBLE INPUT TAX CREDIT (ITC)...',
        'DETECTING OUTWARD SUPPLY MISMATCHES...',
        'RECONCILIATION SCAN COMPLETE: ITC MAXIMIZED (+4.8% ELIGIBLE CREDIT IDENTIFIED)'
      ],
      corp: [
        'SCANNING CORPORATE STRUCTURE...',
        'EVALUATING DEBT-TO-EQUITY AND DILUTION RISK...',
        'CHECKING ROC REGISTER COMPLIANCE STATUS...',
        'MODELING STRATEGIC TAX CONSOLIDATION PATHS...',
        'ADVISORY COMPLETE: TAX-EFFICIENT STRUCTURE LOGGED FOR STARTUP INCUBATOR'
      ]
    };

    let step = 0;
    setTerminalLog(prev => [...prev, `\n> RUNNING DIAGNOSTIC: ${type.toUpperCase()}_SCAN`]);
    
    const interval = setInterval(() => {
      if (step < logs[type].length) {
        setTerminalLog(prev => [...prev, logs[type][step]]);
        step++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
      }
    }, 800);
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
      setFormData({ name: '', email: '', phone: '', service: 'GST Audit', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#030712] font-sans text-slate-200 selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      
      {/* Glow overlays */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-500/5 blur-[150px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/5 blur-[180px] pointer-events-none z-0" />

      {/* Cyberpunk grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#082f4912_1px,transparent_1px),linear-gradient(to_bottom,#082f4912_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,240,255,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-pink-500 opacity-60 blur group-hover:opacity-100 transition duration-300" />
                <div className="relative w-11 h-11 rounded-lg bg-slate-950 border border-cyan-400 flex items-center justify-center font-mono text-cyan-400 font-black">
                  [SR]
                </div>
              </div>
              <div>
                <span className="font-mono text-lg font-black tracking-widest text-white block leading-none">
                  SAI REDDY YANALA
                </span>
                <span className="font-mono text-xs text-pink-500 font-bold uppercase tracking-widest">
                  &lt; CHARTERED ACCOUNTANTS &gt;
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors">
                [ 01 // SERVICES ]
              </a>
              <a href="#console" className="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors">
                [ 02 // SCANNER ]
              </a>
              <a href="#about" className="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors">
                [ 03 // PARTNERS ]
              </a>
              <a href="#testimonials" className="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors">
                [ 04 // CLIENTS ]
              </a>
            </div>

            {/* CTA Nav Button */}
            <div className="hidden md:flex">
              <a 
                href="#contact" 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold font-mono text-slate-200 rounded-lg group bg-gradient-to-br from-cyan-500 to-pink-500 group-hover:from-cyan-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-transform active:scale-95"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0">
                  RUN_CONSULTATION.EXE
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 border border-cyan-500/30 rounded flex items-center justify-center text-cyan-400 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-4">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400"
            >
              [ 01 // SERVICES ]
            </a>
            <a 
              href="#console" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400"
            >
              [ 02 // SCANNER ]
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400"
            >
              [ 03 // PARTNERS ]
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400"
            >
              [ 04 // CLIENTS ]
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-pink-500 hover:text-white"
            >
              [ RUN_CONSULTATION.EXE ]
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Taglines & Left Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                SYSTEM: TAX COMPLIANCE ON-LINE // EST. 2012
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-tight font-sans">
                Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-500 drop-shadow-[0_2px_15px_rgba(6,182,212,0.3)]">Auditing & Compliance</span> for High-Growth Enterprises
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                We combine classical Chartered Accountancy rigor with technical literacy. Empowering digital-native startups, corporate structures, and tech developers with bulletproof taxation architectures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#contact"
                  className="inline-flex justify-center items-center px-8 py-4 font-mono font-bold text-xs tracking-wider uppercase text-black bg-cyan-400 hover:bg-cyan-300 rounded shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  &lt; CONNECT TERMINAL &gt;
                </a>
                <a 
                  href="#services"
                  className="inline-flex justify-center items-center px-8 py-4 font-mono font-bold text-xs tracking-wider uppercase text-cyan-400 border border-cyan-400 hover:bg-cyan-500/10 rounded transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  [ VIEW SPECIFICATIONS ]
                </a>
              </div>

              {/* Monospace Quick Data Bar */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-8 font-mono text-[11px] text-slate-500">
                <div>
                  <span className="block text-cyan-400 font-bold text-base md:text-lg">14+ YRS</span>
                  EXPERIENCE LOG
                </div>
                <div>
                  <span className="block text-pink-500 font-bold text-base md:text-lg">500+</span>
                  SYSTEM NODES (CLIENTS)
                </div>
                <div>
                  <span className="block text-white font-bold text-base md:text-lg">0%</span>
                  PENALTY THRESHOLD
                </div>
              </div>
            </div>

            {/* Simulated Interactive Console Right */}
            <div className="lg:col-span-5 relative" id="console">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-500/30 to-cyan-500/30 blur opacity-70" />
              <div className="relative rounded-lg bg-slate-950 border border-cyan-500/30 shadow-2xl overflow-hidden">
                {/* Console header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-cyan-500/20 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                    <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                    <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                    <span className="text-slate-400 font-bold ml-2">SRY_COMPLIANCE_TERMINAL.SH</span>
                  </div>
                  <Activity className="text-cyan-400 animate-pulse" size={14} />
                </div>
                
                {/* Console window */}
                <div className="p-5 font-mono text-[11px] h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/20 bg-slate-950 text-emerald-400 space-y-1">
                  {terminalLog.map((log, idx) => (
                    <div key={idx} className={log.startsWith('>') ? 'text-cyan-400 font-semibold mt-2' : log.includes('COMPLETE') || log.includes('MAXIMIZED') ? 'text-pink-400 font-semibold' : 'text-emerald-400'}>
                      {log}
                    </div>
                  ))}
                  {isScanning && (
                    <div className="flex items-center gap-2 text-cyan-400 mt-2">
                      <span className="inline-block w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></span>
                      PROCESSOR RUNNING... STAND BY...
                    </div>
                  )}
                </div>

                {/* Console controls */}
                <div className="p-4 bg-slate-950 border-t border-cyan-500/20 grid grid-cols-3 gap-2">
                  <button 
                    disabled={isScanning}
                    onClick={() => runDiagnostic('tax')}
                    className="py-2.5 px-1 bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-400 text-cyan-400 rounded font-mono text-[10px] text-center font-bold tracking-wider hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] disabled:opacity-50 transition-all"
                  >
                    TAX_RISK.EXE
                  </button>
                  <button 
                    disabled={isScanning}
                    onClick={() => runDiagnostic('gst')}
                    className="py-2.5 px-1 bg-pink-500/10 hover:bg-pink-500/25 border border-pink-500 text-pink-500 rounded font-mono text-[10px] text-center font-bold tracking-wider hover:shadow-[0_0_10px_rgba(236,72,153,0.2)] disabled:opacity-50 transition-all"
                  >
                    GST_RECON.EXE
                  </button>
                  <button 
                    disabled={isScanning}
                    onClick={() => runDiagnostic('corp')}
                    className="py-2.5 px-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 rounded font-mono text-[10px] text-center font-bold tracking-wider disabled:opacity-50 transition-all"
                  >
                    CORP_DIAG.EXE
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-y border-slate-900 bg-slate-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-3">&lt; SYSTEM CAPABILITIES &gt;</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">Our Core Auditing Suite</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Precise, high-fidelity corporate accounting protocols designed to insulate operations from compliance risk and unlock strategic fiscal leverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded bg-gradient-to-b from-cyan-500/10 to-pink-500/10 group-hover:from-cyan-400/40 group-hover:to-pink-500/40 transition duration-300" />
              <div className="relative p-6 rounded bg-[#071324]/90 border border-cyan-500/20 h-full flex flex-col justify-between hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                <div>
                  <div className="w-12 h-12 rounded bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 font-mono text-xs">
                    [01]
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-sans mb-3 flex items-center gap-2">
                    Tax Planning & Filing
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Bespoke optimization algorithms designed to legally minimize income tax liabilities, handle corporate returns, and secure transfer pricing agreements.
                  </p>
                </div>
                <div className="border-t border-slate-900 pt-4 font-mono text-[10px] text-pink-500 flex justify-between items-center">
                  <span>SYSTEM: TAX-IN-1040</span>
                  <div className="flex items-center text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    EXECUTE <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded bg-gradient-to-b from-cyan-500/10 to-pink-500/10 group-hover:from-cyan-400/40 group-hover:to-pink-500/40 transition duration-300" />
              <div className="relative p-6 rounded bg-[#071324]/90 border border-cyan-500/20 h-full flex flex-col justify-between hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                <div>
                  <div className="w-12 h-12 rounded bg-pink-950/40 border border-pink-500/30 flex items-center justify-center text-pink-500 mb-6 font-mono text-xs">
                    [02]
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-sans mb-3 flex items-center gap-2">
                    GST Audit & ITC
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Comprehensive reconciliations using automated check systems. Maximizing ITC recovery, compiling GSTR filings, and defending audit representation.
                  </p>
                </div>
                <div className="border-t border-slate-900 pt-4 font-mono text-[10px] text-pink-500 flex justify-between items-center">
                  <span>SYSTEM: GST-RECON</span>
                  <div className="flex items-center text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    EXECUTE <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded bg-gradient-to-b from-cyan-500/10 to-pink-500/10 group-hover:from-cyan-400/40 group-hover:to-pink-500/40 transition duration-300" />
              <div className="relative p-6 rounded bg-[#071324]/90 border border-cyan-500/20 h-full flex flex-col justify-between hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                <div>
                  <div className="w-12 h-12 rounded bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 font-mono text-xs">
                    [03]
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-sans mb-3 flex items-center gap-2">
                    Corporate Advisory
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Structuring holding companies, venture funding allocation schemes, cross-border M&A consulting, and rigorous due-diligence protocols.
                  </p>
                </div>
                <div className="border-t border-slate-900 pt-4 font-mono text-[10px] text-pink-500 flex justify-between items-center">
                  <span>SYSTEM: CORP-ADVISORY</span>
                  <div className="flex items-center text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    EXECUTE <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded bg-gradient-to-b from-cyan-500/10 to-pink-500/10 group-hover:from-cyan-400/40 group-hover:to-pink-500/40 transition duration-300" />
              <div className="relative p-6 rounded bg-[#071324]/90 border border-cyan-500/20 h-full flex flex-col justify-between hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                <div>
                  <div className="w-12 h-12 rounded bg-pink-950/40 border border-pink-500/30 flex items-center justify-center text-pink-500 mb-6 font-mono text-xs">
                    [04]
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-sans mb-3 flex items-center gap-2">
                    Virtual CFO
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Integrating real-time cash flow monitoring dashboards, budget allocation, automated bookkeeping, and regular board advisory briefings.
                  </p>
                </div>
                <div className="border-t border-slate-900 pt-4 font-mono text-[10px] text-pink-500 flex justify-between items-center">
                  <span>SYSTEM: CLOUD-CFO</span>
                  <div className="flex items-center text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    EXECUTE <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Info Column */}
            <div>
              <span className="font-mono text-xs text-pink-500 uppercase tracking-widest block mb-3">
                &lt; ARCHITECTS OF ACCOUNTING &gt;
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 tracking-tight">
                Sai Reddy Yanala
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Sai Reddy Yanala is a Fellow Chartered Accountant (FCA) with over 14 years of professional standing in financial engineering, corporate audits, and indirect tax optimization. We bridge the gap between traditional fiscal compliance and modern tech-driven operations.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Operating with a core ethos of mathematical precision and cryptographic compliance, our firm acts as a silent shields and accelerators for enterprise growth in India and offshore tech zones.
              </p>

              {/* Badges / Tech specs grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-3 items-start p-4 rounded bg-[#071324]/50 border border-slate-900">
                  <Shield className="text-cyan-400 shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs mb-1 font-mono">ICAI REGISTERED</h4>
                    <p className="text-slate-500 text-[10px]">Strict adherence to ethical framework standards.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 rounded bg-[#071324]/50 border border-slate-900">
                  <Award className="text-pink-500 shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs mb-1 font-mono">FCA CREDENTIALS</h4>
                    <p className="text-slate-500 text-[10px]">Highest tier accreditation from ICAI.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column / Tech Matrix */}
            <div className="relative">
              {/* Outer decorative borders representing technology brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="bg-[#050B14] border border-cyan-500/20 p-8 m-4 rounded relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-cyan-500/10 blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
                
                <div className="relative space-y-6">
                  <div className="text-center pb-6 border-b border-slate-900">
                    <span className="font-mono text-cyan-400 text-xs block mb-1">CORE PROTOCOL</span>
                    <h3 className="font-sans text-xl font-bold text-white uppercase tracking-wider">Mission Statement</h3>
                  </div>

                  <div className="space-y-4 text-xs font-mono">
                    <div className="flex gap-3 items-start">
                      <span className="text-pink-500">[✔]</span>
                      <p className="text-slate-300"><strong className="text-white uppercase">Zero-Error Compliance:</strong> Structuring accounts to naturally repel notice scenarios.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-pink-500">[✔]</span>
                      <p className="text-slate-300"><strong className="text-white uppercase">Fiscal Optimization:</strong> Proactive deduction matching and strategic reinvestment models.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-pink-500">[✔]</span>
                      <p className="text-slate-300"><strong className="text-white uppercase">Client Shielding:</strong> Serving as the interface with revenue and regulatory bodies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 border-y border-slate-900 bg-slate-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-3">&lt; SYSTEM AUDIT FEEDBACK &gt;</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">Verified Client Logs</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Decrypted reports from founders and corporate leaders who trust Sai Reddy Yanala CA with their financial telemetry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="p-6 rounded bg-[#071324]/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all">
              <div className="mb-6">
                <span className="font-mono text-[10px] text-slate-500 block mb-3">[ HASH: 88F23A // TECH STARTUP ]</span>
                <p className="text-slate-300 text-xs italic leading-relaxed">
                  "Sai Reddy Yanala CA restructured our entire tax liability model before our Series A. Their understanding of tech models, digital exports, and dynamic tax planning is completely unmatched in the CA sector."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-900 pt-4">
                <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center font-mono text-cyan-400 text-[10px] font-bold">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs font-mono">JAGDISH SHARMA</h4>
                  <span className="text-[10px] text-pink-500 block font-mono">CTO, QUANTUM CORE SOLUTIONS</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded bg-[#071324]/80 border border-slate-800 flex flex-col justify-between hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.05)] transition-all">
              <div className="mb-6">
                <span className="font-mono text-[10px] text-slate-500 block mb-3">[ HASH: 91E4CB // EXPORT SERVICES ]</span>
                <p className="text-slate-300 text-xs italic leading-relaxed">
                  "We had severe GST refund bottleneck problems for 9 months. Sai Reddy's team analyzed GSTR discrepancies within hours of establishing connection, reconciled the audit records, and recovered our refunds seamlessly."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-900 pt-4">
                <div className="w-8 h-8 rounded bg-pink-950/40 border border-pink-500/30 flex items-center justify-center font-mono text-pink-500 text-[10px] font-bold">
                  AM
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs font-mono">ASAD MIRZA</h4>
                  <span className="text-[10px] text-pink-500 block font-mono">FOUNDER, CLOUDWARE WEB SERVICES</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded bg-[#071324]/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all">
              <div className="mb-6">
                <span className="font-mono text-[10px] text-slate-500 block mb-3">[ HASH: 74B08F // RETAIL SYSTEMS ]</span>
                <p className="text-slate-300 text-xs italic leading-relaxed">
                  "Operating multiple physical locations in Tolichowki, keeping track of our cashflows and accounting compliance was complex. Sai Reddy CA unified our corporate tax structure and acts as our Virtual CFO."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-900 pt-4">
                <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center font-mono text-cyan-400 text-[10px] font-bold">
                  KR
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs font-mono">KIRAN REDDY</h4>
                  <span className="text-[10px] text-pink-500 block font-mono">DIRECTOR, REDDY PHARMACEUTICALS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section / Contact Form */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur opacity-50" />
            <div className="relative rounded-lg bg-[#050B14] border border-cyan-500/30 p-8 md:p-12 shadow-2xl">
              
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="font-mono text-xs text-pink-500 uppercase tracking-widest block mb-2">
                  [ INITIATE CONNECTION PROTOCOL ]
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                  Request Private Briefing
                </h3>
                <p className="text-slate-400 text-xs font-mono">
                  Transmit your tax requirements securely. Expected response time: &lt; 24h
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 border border-emerald-500/30 bg-emerald-500/10 rounded-lg text-center font-mono">
                  <CheckCircle2 className="text-emerald-400 mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-bold text-white mb-2 uppercase">DATA TRANSMISSION SUCCESSFUL</h4>
                  <p className="text-slate-300 text-xs max-w-md mx-auto">
                    Secure handshake initialized. Our compliance officer has queued your request and will contact you via secure terminal channels.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 uppercase font-bold tracking-wider mb-2">
                        &gt; CLIENT_NAME:
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. MIRZA TECH LTD" 
                        className="w-full bg-[#030712] border border-cyan-500/30 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 uppercase font-bold tracking-wider mb-2">
                        &gt; COMP_EMAIL:
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. INFO@MIRZATECH.NET" 
                        className="w-full bg-[#030712] border border-cyan-500/30 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 uppercase font-bold tracking-wider mb-2">
                        &gt; TELEPHONE_LINE:
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 99000 XXXXX" 
                        className="w-full bg-[#030712] border border-cyan-500/30 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 uppercase font-bold tracking-wider mb-2">
                        &gt; SYSTEM_SERVICE:
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-[#030712] border border-cyan-500/30 rounded p-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                      >
                        <option value="GST Audit">GST Audit & Reconciliation</option>
                        <option value="Corporate Tax">Corporate Tax Planning</option>
                        <option value="Advisory">Venture Advisory / Restructuring</option>
                        <option value="CFO Services">Virtual CFO Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase font-bold tracking-wider mb-2">
                      &gt; REQUIREMENTS_LOG:
                    </label>
                    <textarea 
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="ENTER TAX MATTERS / INQUIRY DETAILS HERE..." 
                      className="w-full bg-[#030712] border border-cyan-500/30 rounded p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button 
                      type="submit"
                      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-black rounded-lg group bg-gradient-to-br from-cyan-400 to-pink-500 hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                    >
                      <span className="relative px-12 py-4 transition-all ease-in duration-75 bg-cyan-400 group-hover:bg-opacity-0 rounded-md">
                        &lt; TRANSMIT_DATA &gt;
                      </span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 font-mono text-xs text-slate-400 mb-12">
            
            {/* Logo/Branding */}
            <div className="md:col-span-1">
              <span className="text-white font-black text-sm block tracking-widest mb-4">SAI REDDY YANALA</span>
              <p className="text-[10px] text-slate-500 leading-relaxed mb-4">
                Chartered Accountants and Financial Engineers. Providing military-grade compliance & tax structuring since 2012.
              </p>
              <span className="text-[9px] text-cyan-400 uppercase tracking-widest block">[ SYSTEM SECURED ]</span>
            </div>

            {/* Office Node */}
            <div>
              <span className="text-white font-bold block mb-4 uppercase text-[11px]">&lt; SYSTEM NODES &gt;</span>
              <div className="space-y-3 text-[11px]">
                <div className="flex gap-2">
                  <MapPin size={14} className="text-pink-500 shrink-0 mt-0.5" />
                  <span>Suite 302, Cyber Tower Heights, Tolichowki Main Road, Hyderabad, 500008</span>
                </div>
              </div>
            </div>

            {/* Contacts Node */}
            <div>
              <span className="text-white font-bold block mb-4 uppercase text-[11px]">&lt; TRUNK LINES &gt;</span>
              <div className="space-y-3 text-[11px]">
                <div className="flex gap-2 items-center">
                  <Phone size={14} className="text-cyan-400 shrink-0" />
                  <span>+91 99499 50123</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail size={14} className="text-cyan-400 shrink-0" />
                  <span>contact@saireddyca.com</span>
                </div>
              </div>
            </div>

            {/* Links Node */}
            <div>
              <span className="text-white font-bold block mb-4 uppercase text-[11px]">&lt; INDEX LINKS &gt;</span>
              <div className="space-y-2 text-[10px]">
                <a href="#services" className="block text-slate-500 hover:text-cyan-400 transition-colors">// SERVICES</a>
                <a href="#console" className="block text-slate-500 hover:text-cyan-400 transition-colors">// ANALYZER</a>
                <a href="#about" className="block text-slate-500 hover:text-cyan-400 transition-colors">// PARTNERS</a>
                <a href="#contact" className="block text-slate-500 hover:text-cyan-400 transition-colors">// HANDSHAKE</a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-slate-600">
            <div>
              © 2026 SAI REDDY YANALA CA. ALL RIGHTS RESERVED. CODEBASE: v4.2.0-SECURE.
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

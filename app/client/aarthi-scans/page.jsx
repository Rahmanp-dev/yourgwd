"use client";

import React, { useState } from 'react';
import { 
  Scan, 
  Dna, 
  Activity, 
  FlaskConical, 
  Microscope, 
  Cpu, 
  Clock, 
  FileCheck2, 
  MapPin, 
  Phone,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function AarthiScans() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { icon: <Scan className="w-8 h-8 text-teal-400" />, title: "3T MRI Scan", desc: "Ultra-high resolution imaging with ambient experience for maximum comfort." },
    { icon: <Activity className="w-8 h-8 text-teal-400" />, title: "128-Slice CT Scan", desc: "Low-dose radiation scanning delivering precise 3D imaging in seconds." },
    { icon: <Dna className="w-8 h-8 text-teal-400" />, title: "Genomics & Pathology", desc: "Fully automated molecular diagnostics and comprehensive blood profiling." },
    { icon: <Microscope className="w-8 h-8 text-teal-400" />, title: "Advanced Ultrasound", desc: "High-definition sonography with 4D imaging capabilities." },
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-50 selection:bg-indigo-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-900/20 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-xl">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-wider text-white leading-none">AARTHI</span>
                <span className="text-xs text-teal-400 font-semibold tracking-[0.2em] uppercase mt-1">Scans & Labs</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors tracking-wide">Services</a>
              <a href="#technology" className="text-slate-300 hover:text-white transition-colors tracking-wide">Technology</a>
              <a href="#reports" className="text-slate-300 hover:text-white transition-colors tracking-wide">Download Reports</a>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2.5 rounded-lg transition-all backdrop-blur-sm">
                Book Home Collection
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-teal-400 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            NABL & NABH Accredited
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white">
            Precision Diagnostics.<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              AI-Powered Intelligence.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl font-light leading-relaxed">
            Experience the future of healthcare at Tolichowki. We combine world-class imaging technology with artificial intelligence to deliver 100% accurate results, faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25">
              <FlaskConical className="w-5 h-5" /> Book a Test
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-md">
              <Phone className="w-5 h-5" /> Call: 040-3333-3333
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-square max-w-md lg:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 p-2 backdrop-blur-xl">
             <div className="h-full w-full rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
                  alt="MRI Machine" 
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                
                {/* Tech overlay elements */}
                <div className="absolute top-4 right-4 bg-[#020617]/80 backdrop-blur-md border border-slate-700 rounded-lg p-3 flex flex-col gap-1">
                   <div className="text-[10px] text-teal-400 font-mono">SCAN STATUS</div>
                   <div className="text-sm font-bold text-white flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> ONLINE
                   </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-[#020617]/80 backdrop-blur-md border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-indigo-400 w-8 h-8" />
                    <div>
                      <div className="text-xs text-slate-400">AI Processing</div>
                      <div className="text-white font-bold font-mono">Zero Error Rate</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 border-t border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-teal-400 text-sm font-bold tracking-widest uppercase mb-3">Our Modalities</div>
              <h2 className="text-3xl md:text-5xl font-light text-white">Comprehensive <span className="font-bold">Diagnostics</span></h2>
            </div>
            <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group">
              View All Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all hover:bg-slate-800/60 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Scan className="w-24 h-24 text-indigo-400" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center mb-6 border border-slate-800 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/40 to-teal-900/40 border border-slate-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700/50 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start md:px-8 first:px-0">
                <Clock className="w-10 h-10 text-teal-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Fast Turnaround</h4>
                <p className="text-slate-400 text-sm">Most blood test reports delivered online within 4-6 hours.</p>
              </div>
              <div className="flex flex-col items-center md:items-start md:px-8 pt-8 md:pt-0">
                <FileCheck2 className="w-10 h-10 text-teal-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Smart Reports</h4>
                <p className="text-slate-400 text-sm">AI-analyzed, color-coded interactive reports accessible via app.</p>
              </div>
              <div className="flex flex-col items-center md:items-start md:px-8 pt-8 md:pt-0">
                <Microscope className="w-10 h-10 text-teal-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Home Collection</h4>
                <p className="text-slate-400 text-sm">Safe and hygienic sample collection from your doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#020617] relative z-10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-xl">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider text-white leading-none">AARTHI</span>
                <span className="text-[10px] text-teal-400 font-semibold tracking-[0.2em] uppercase mt-1">Scans & Labs</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">India's leading network of advanced diagnostic centers, bringing precision healthcare to your neighborhood.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">MRI Scan</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">CT Scan</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blood Tests</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Health Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Patient Care</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Download Report</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Book Home Visit</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Location</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Beside Rumaan Restaurant, Tolichowki Main Rd, Hyderabad 500008</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>040-3333-3333</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Aarthi Scans and Labs. All rights reserved. <br/> ISO 9001:2015 Certified | NABL Accredited | NABH Accredited
        </div>
      </footer>
    </div>
  );
}

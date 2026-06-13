"use client";

import React, { useState } from 'react';
import { 
  HeartPulse, 
  Stethoscope, 
  Activity, 
  CalendarDays, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Baby, 
  Bone,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export default function MuslimGeneralHospital() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const departments = [
    { icon: <HeartPulse className="w-8 h-8 text-emerald-600" />, title: "Cardiology", desc: "Comprehensive heart care with state-of-the-art cath labs." },
    { icon: <Baby className="w-8 h-8 text-emerald-600" />, title: "Pediatrics", desc: "Expert pediatric care ensuring the well-being of your little ones." },
    { icon: <Bone className="w-8 h-8 text-emerald-600" />, title: "Orthopedics", desc: "Advanced joint replacement and trauma care centers." },
    { icon: <Activity className="w-8 h-8 text-emerald-600" />, title: "Neurology", desc: "Expert diagnosis and treatment for neurological disorders." },
  ];

  return (
    <div className="min-h-screen bg-[#ECFEFF] font-sans text-[#164E63] selection:bg-cyan-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <HeartPulse className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#164E63]">Muslim General Hospital</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a href="#about" className="hover:text-cyan-600 transition-colors">About Us</a>
              <a href="#departments" className="hover:text-cyan-600 transition-colors">Departments</a>
              <a href="#doctors" className="hover:text-cyan-600 transition-colors">Find a Doctor</a>
              <button className="bg-[#059669] hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-emerald-200">
                Book Appointment
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-[#164E63]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" /> 
            <span>Tolichowki's Most Trusted Healthcare</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Compassionate Care,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891B2] to-[#059669]">
              Advanced Medicine.
            </span>
          </h1>
          <p className="text-lg text-cyan-800/80 max-w-xl leading-relaxed">
            Providing world-class medical facilities right in the heart of Tolichowki. Our team of expert doctors and dedicated staff are here to ensure your health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#164E63] hover:bg-cyan-900 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-cyan-900/20">
              <CalendarDays className="w-5 h-5" /> Book an Appointment
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-cyan-50 border border-cyan-200 text-[#164E63] px-8 py-4 rounded-2xl font-bold transition-all">
              <Phone className="w-5 h-5" /> Emergency: 108
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-emerald-300 rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
              alt="Hospital Interior" 
              className="object-cover w-full h-full"
            />
            {/* Overlay card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">24/7 Expert Care</h3>
                  <p className="text-cyan-800 text-sm">Always here when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Centers of Excellence</h2>
            <p className="text-cyan-800/80">We offer a wide range of specialized medical services using the latest technology and evidence-based practices.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-[#ECFEFF] border border-cyan-100 hover:border-cyan-300 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{dept.title}</h3>
                <p className="text-cyan-800/80 text-sm mb-6 leading-relaxed">{dept.desc}</p>
                <button className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Trust Section */}
      <section className="py-20 bg-[#164E63] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Trusted by Thousands in Hyderabad</h2>
            <p className="text-cyan-100 mb-8 leading-relaxed text-lg">
              Since our establishment, Muslim General Hospital has been a beacon of hope and healing. We pride ourselves on delivering ethical, transparent, and affordable healthcare to everyone.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-emerald-400 mb-2">50k+</div>
                <div className="text-cyan-200">Happy Patients</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-emerald-400 mb-2">100+</div>
                <div className="text-cyan-200">Expert Doctors</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-emerald-400 mb-2">24/7</div>
                <div className="text-cyan-200">Emergency Care</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-emerald-400 mb-2">15+</div>
                <div className="text-cyan-200">Specialties</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=2069&auto=format&fit=crop" alt="Doctors" className="rounded-2xl object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop" alt="Surgery" className="rounded-2xl object-cover h-64 w-full mt-8" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <HeartPulse className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="font-bold text-xl text-[#164E63]">Muslim General</span>
            </div>
            <p className="text-cyan-800/80 mb-6">Providing accessible, ethical, and advanced medical care to the community of Tolichowki and beyond.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-cyan-800/80">
              <li><a href="#" className="hover:text-emerald-600">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-emerald-600">Book Appointment</a></li>
              <li><a href="#" className="hover:text-emerald-600">Health Packages</a></li>
              <li><a href="#" className="hover:text-emerald-600">Patient Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-cyan-800/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>12-3-456, Paramount Colony,<br />Tolichowki, Hyderabad 500008</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>+91 40 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-cyan-100 text-center text-cyan-800/60 text-sm">
          &copy; {new Date().getFullYear()} Muslim General Hospital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

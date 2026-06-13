import React from 'react';
import { Activity, Stethoscope, Microscope, Clock, MapPin, Phone, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function JanataDiagnosticCentre() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-sm py-2 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <span className="flex items-center"><Phone size={14} className="mr-2 text-teal-400" /> +91 40 1234 5678</span>
          <span className="flex items-center"><MapPin size={14} className="mr-2 text-teal-400" /> Tolichowki, Hyderabad</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><Clock size={14} className="mr-2 text-teal-400" /> Open 24/7 for Emergencies</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-2xl font-bold text-slate-900 tracking-tight">
                Janata<span className="text-teal-600">Diagnostics</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Services</a>
              <a href="#packages" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Health Packages</a>
              <a href="#about" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">About Us</a>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Book a Test
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-teal-50 rounded-r-full opacity-50 transform -translate-x-1/4"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 pb-24 lg:pt-32 lg:pb-40 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-semibold text-sm mb-6 shadow-sm border border-teal-200">
              <ShieldCheck size={16} className="mr-2" />
              NABL Accredited Laboratory
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Precision in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Diagnostics</span>,<br />
              Care in Results.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              State-of-the-art diagnostic centre in Tolichowki offering accurate, reliable, and timely medical testing services with a patient-first approach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center text-lg">
                Book Home Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-teal-600 text-slate-700 hover:text-teal-600 px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center text-lg">
                View Test Reports
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative z-10">
            <div className="relative rounded-2xl p-2 bg-gradient-to-br from-teal-400 to-blue-500 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Medical Laboratory" 
                className="rounded-xl w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Accurate Results</p>
                  <p className="text-lg font-bold text-slate-900">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Advanced technology and expert technicians providing comprehensive diagnostic solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pathology", icon: <Microscope className="h-8 w-8 text-white" />, desc: "Complete blood tests, clinical pathology, biochemistry, and microbiology with automated analyzers.", color: "bg-blue-600" },
              { title: "Radiology", icon: <Activity className="h-8 w-8 text-white" />, desc: "High-resolution digital X-Rays, ultrasound, and color doppler imaging for precise structural diagnosis.", color: "bg-teal-600" },
              { title: "Cardiology", icon: <Stethoscope className="h-8 w-8 text-white" />, desc: "ECG, Echo, TMT, and Holter monitoring by experienced cardiologists to assess heart health.", color: "bg-indigo-600" }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 group">
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers / Packages */}
      <div id="packages" className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Preventive Health Packages</h2>
              <p className="mt-4 text-lg text-slate-600">Comprehensive health checkups designed for different age groups and needs.</p>
            </div>
            <button className="mt-6 lg:mt-0 text-teal-600 font-semibold flex items-center hover:text-teal-700">
              View All Packages <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic Wellness", price: "1,499", tests: 45, popular: false },
              { name: "Comprehensive Care", price: "2,999", tests: 72, popular: true },
              { name: "Senior Citizen", price: "3,499", tests: 85, popular: false }
            ].map((pkg, idx) => (
              <div key={idx} className={`rounded-2xl border-2 p-8 relative flex flex-col h-full ${pkg.popular ? 'border-teal-500 shadow-lg relative' : 'border-slate-100 bg-slate-50'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">₹{pkg.price}</span>
                </div>
                <div className="flex items-center bg-teal-50 text-teal-800 py-2 px-4 rounded-lg mb-8 font-medium">
                  <Activity className="h-5 w-5 mr-2" /> Includes {pkg.tests} parameters
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Complete Blood Count (CBC)', 'Liver Function Test', 'Kidney Function Test', 'Lipid Profile', 'Thyroid Profile'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.popular ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-md' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-teal-600 hover:text-teal-600'}`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <Activity className="h-8 w-8 text-teal-400" />
                <span className="ml-2 text-2xl font-bold text-white tracking-tight">
                  Janata<span className="text-teal-400">Diagnostics</span>
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Your trusted partner for accurate and timely medical diagnostics in Tolichowki, Hyderabad.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Health Packages', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="text-slate-400 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Pathology', 'Radiology', 'Cardiology', 'Home Collection', 'Corporate Wellness'].map(link => (
                  <li key={link}><a href="#" className="text-slate-400 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Door No: 8-1-366/A, Tolichowki X Roads, Hyderabad, Telangana 500008</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>+91 40 1234 5678</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>Mon-Sun: 7:00 AM - 10:00 PM<br/>Emergency: 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Janata Diagnostic Centre. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

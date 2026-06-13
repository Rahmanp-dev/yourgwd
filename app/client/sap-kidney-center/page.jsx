"use client";
import React, { useState } from "react";
import { Figtree, Noto_Sans } from "next/font/google";
import { Activity, Droplet, HeartPulse, Stethoscope, Clock, Phone, MapPin, ChevronRight, CheckCircle2, Menu, X, Shield, Users, Award } from "lucide-react";

const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function SAPKidneyCenter() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-cyan-50 text-cyan-900 ${notoSans.className}`}>
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Droplet className="h-8 w-8 text-cyan-600" />
              <div className="ml-3">
                <span className={`block text-xl font-bold text-cyan-900 leading-none ${figtree.className}`}>SAP Kidney Center</span>
                <span className="block text-sm text-cyan-600 font-medium mt-1">Advanced Renal Care in Tolichowki</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-cyan-700 hover:text-cyan-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-cyan-700 hover:text-cyan-600 font-medium transition-colors">Our Specialists</a>
              <a href="#testimonials" className="text-cyan-700 hover:text-cyan-600 font-medium transition-colors">Patient Stories</a>
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Book Appointment
              </a>
            </div>
            <div className="flex md:hidden items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-cyan-900 hover:text-cyan-600">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-cyan-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-cyan-800 hover:bg-cyan-50 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-cyan-800 hover:bg-cyan-50 rounded-md">Our Specialists</a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-cyan-800 hover:bg-cyan-50 rounded-md">Patient Stories</a>
            <a href="#contact" className="block w-full text-center mt-4 bg-emerald-600 text-white px-6 py-3 rounded-md font-medium">Book Appointment</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600 text-white overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center space-x-2 bg-cyan-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-cyan-400/30">
              <Shield className="h-4 w-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-100">Hyderabad's Premier Nephrology Center</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${figtree.className}`}>
              World-Class Kidney Care, <br/><span className="text-cyan-200">Close to Home.</span>
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 mb-10 max-w-2xl leading-relaxed">
              At SAP Kidney Center in Tolichowki, we combine cutting-edge medical technology with compassionate care to treat all forms of kidney diseases, offering advanced dialysis and comprehensive nephrology consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center">
                Schedule Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+911234567890" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="hidden lg:block absolute right-10 bottom-10 space-y-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 transform translate-x-4">
            <div className="flex items-center space-x-4">
              <div className="bg-cyan-500/30 p-3 rounded-lg"><Users className="h-6 w-6 text-cyan-200" /></div>
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-cyan-200">Patients Treated</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-500/30 p-3 rounded-lg"><Award className="h-6 w-6 text-emerald-200" /></div>
              <div>
                <div className="text-2xl font-bold">15+ Years</div>
                <div className="text-sm text-cyan-200">Clinical Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-cyan-900 mb-4 ${figtree.className}`}>Comprehensive Renal Services</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-cyan-700">We provide a full spectrum of kidney care from early detection and management to advanced renal replacement therapies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100 hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 group">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Activity className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className={`text-2xl font-bold text-cyan-900 mb-3 ${figtree.className}`}>Advanced Hemodialysis</h3>
              <p className="text-cyan-700 mb-6 leading-relaxed">State-of-the-art dialysis machines with ultra-pure water systems ensuring safe, comfortable, and highly effective treatments in a relaxing environment.</p>
              <ul className="space-y-2">
                {['Single-use dialyzers', 'Continuous monitoring', 'Private isolation rooms'].map((item, i) => (
                  <li key={i} className="flex items-start" gap-2>
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5 mr-2" />
                    <span className="text-cyan-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100 hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 group">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <HeartPulse className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className={`text-2xl font-bold text-cyan-900 mb-3 ${figtree.className}`}>Nephrology Consultation</h3>
              <p className="text-cyan-700 mb-6 leading-relaxed">Expert diagnosis and management of acute and chronic kidney diseases, diabetic nephropathy, and hypertension-related kidney issues.</p>
              <ul className="space-y-2">
                {['Preventive care plans', 'Dietary counseling', 'BP management'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100 hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 group">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className={`text-2xl font-bold text-cyan-900 mb-3 ${figtree.className}`}>Kidney Stone Management</h3>
              <p className="text-cyan-700 mb-6 leading-relaxed">Comprehensive metabolic evaluation and non-surgical management of kidney stones to prevent recurrence and preserve kidney function.</p>
              <ul className="space-y-2">
                {['Metabolic profiling', 'Medical expulsive therapy', 'Lifestyle modification'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${figtree.className}`}>Why Choose SAP Kidney Center?</h2>
              <p className="text-cyan-100 text-lg mb-8 leading-relaxed">
                We believe that managing kidney disease shouldn't mean pausing your life. Our center is designed to provide hospital-grade clinical excellence in a warm, comfortable outpatient setting in the heart of Tolichowki.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Expert Care", desc: "Led by Senior Consultant Nephrologists" },
                  { title: "Zero Infection Rate", desc: "Strict adherence to international protocols" },
                  { title: "24/7 Support", desc: "Emergency assistance for dialysis patients" },
                  { title: "Holistic Approach", desc: "Integrated diet and lifestyle counseling" }
                ].map((feature, i) => (
                  <div key={i} className="bg-cyan-800/50 p-4 rounded-xl border border-cyan-700/50">
                    <div className="font-bold text-cyan-100 mb-1">{feature.title}</div>
                    <div className="text-sm text-cyan-300">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-emerald-400 rounded-3xl transform rotate-3 opacity-50 blur-lg"></div>
              <div className="bg-cyan-800 rounded-3xl p-8 relative border border-cyan-700 shadow-2xl">
                <div className="w-full h-64 bg-cyan-700 rounded-2xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinic Interior" className="object-cover w-full h-full opacity-80 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-cyan-900/40"></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">State-of-the-Art Facility</h4>
                    <p className="text-cyan-200 text-sm">Equipped with the latest Fresenius dialysis machines and advanced RO water plants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment & Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cyan-50 rounded-3xl overflow-hidden shadow-xl border border-cyan-100 flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="bg-cyan-800 text-white p-10 lg:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${figtree.className}`}>Contact Us</h3>
                <p className="text-cyan-200 mb-8">Reach out to schedule your consultation or dialysis session.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Clinic Address</h4>
                      <p className="text-cyan-200 text-sm mt-1">1st Floor, SAP Complex, Beside Tolichowki Flyover, Hyderabad, Telangana 500008</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Phone Number</h4>
                      <p className="text-cyan-200 text-sm mt-1">+91 98765 43210<br/>+91 40 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Working Hours</h4>
                      <p className="text-cyan-200 text-sm mt-1">Mon - Sat: 8:00 AM - 8:00 PM<br/>Sunday: Emergency Dialysis Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-10 lg:w-2/3 bg-white">
              <h3 className={`text-2xl font-bold text-cyan-900 mb-6 ${figtree.className}`}>Request an Appointment</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-cyan-800 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-cyan-50/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cyan-800 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-cyan-50/50" placeholder="+91 90000 00000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-800 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-cyan-50/50 text-cyan-900">
                    <option>General Nephrology Consultation</option>
                    <option>Book Dialysis Session</option>
                    <option>Kidney Stone Evaluation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-800 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-cyan-50/50" placeholder="Any specific concerns?"></textarea>
                </div>
                <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-950 text-cyan-300 py-12 border-t border-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Droplet className="h-6 w-6 text-emerald-400 mr-2" />
              <span className={`text-xl font-bold text-white ${figtree.className}`}>SAP Kidney Center</span>
            </div>
            <p className="text-sm max-w-xs">Dedicated to enhancing the quality of life for patients with kidney disease through expert care and compassion.</p>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} SAP Kidney Center. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

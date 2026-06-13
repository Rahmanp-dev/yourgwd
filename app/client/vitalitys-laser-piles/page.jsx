"use client";
import React, { useState } from "react";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { Activity, Zap, CheckCircle, Clock, CalendarCheck, MapPin, Phone, ShieldCheck, ArrowRight, Menu, X } from "lucide-react";

const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function VitalitysLaserPiles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 ${sourceSans.className}`}>
      {/* Top Bar for clinical look */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="h-3 w-3 mr-1"/> 24/7 Helpline: 1800-123-4567</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <span>Tolichowki Branch, Hyderabad</span>
            <span className="text-orange-400 font-medium">100% Painless Procedures</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className={`text-xl md:text-2xl font-bold text-slate-900 leading-tight ${lexend.className}`}>
                  Vitality's <span className="text-blue-600">Laser Clinic</span>
                </h1>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Advanced Proctology Center</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#treatments" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">Treatments</a>
              <a href="#why-laser" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">Why Laser?</a>
              <a href="#doctors" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">Our Surgeons</a>
              <a href="#book" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold transition-colors flex items-center shadow-md">
                <CalendarCheck className="h-4 w-4 mr-2" /> Book Appointment
              </a>
            </div>

            <div className="flex lg:hidden items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full">
            <div className="flex flex-col space-y-3">
              <a href="#treatments" className="px-3 py-2 text-slate-700 font-semibold bg-slate-50 rounded-md">Treatments</a>
              <a href="#why-laser" className="px-3 py-2 text-slate-700 font-semibold bg-slate-50 rounded-md">Why Laser?</a>
              <a href="#book" className="px-3 py-3 text-white font-semibold bg-orange-500 text-center rounded-md flex justify-center items-center">
                Book Appointment Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white relative overflow-hidden">
        {/* High-tech diagonal background element */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50 transform skew-x-[-15deg] translate-x-20 z-0 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-wide border border-blue-100">
                <Zap className="h-4 w-4 text-orange-500" />
                <span>Minimally Invasive Surgery</span>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 ${lexend.className}`}>
                Advanced Laser Treatment for <span className="text-blue-600 relative">
                  Piles & Fissures
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience freedom from pain with our FDA-approved US-Laser technology. Day-care procedure, no cuts, no stitches, and return to work in 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center">
                  Consult Free Today <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <div className="flex items-center justify-center px-6 py-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-green-500 mr-2" />
                  <span className="font-semibold text-slate-700">Insurance Accepted</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                <div>
                  <div className={`text-3xl font-bold text-slate-900 ${lexend.className}`}>30<span className="text-blue-600">min</span></div>
                  <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Procedure Time</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold text-slate-900 ${lexend.className}`}>24<span className="text-blue-600">hr</span></div>
                  <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Discharge Time</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold text-slate-900 ${lexend.className}`}>10<span className="text-blue-600">k+</span></div>
                  <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Happy Patients</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] hidden lg:block">
              {/* Doctor / Surgery image placeholder */}
              <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-10">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Surgeon" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
              
              {/* Feature popups */}
              <div className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center space-x-3 border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-orange-100 p-2 rounded-full"><Zap className="h-5 w-5 text-orange-500" /></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Diode Laser</div>
                  <div className="text-xs text-slate-500">German Technology</div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-5 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center space-x-3 border border-slate-100">
                <div className="bg-green-100 p-2 rounded-full"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">100% Painless</div>
                  <div className="text-xs text-slate-500">Zero Recurrence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section id="treatments" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 ${lexend.className}`}>Conditions We Treat</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We specialize in anorectal disorders providing permanent solutions using advanced diode laser therapy.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Condition 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">01</span>
              </div>
              <h3 className={`text-2xl font-bold text-slate-900 mb-3 ${lexend.className}`}>Piles (Hemorrhoids)</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">Grade 1 to Grade 4 hemorrhoids treated effectively. The laser energy shrinks the hemorrhoidal nodes from the inside out without damaging surrounding tissue.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Bleeding during bowel movement</li>
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Pain and discomfort</li>
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Prolapse/Lump formation</li>
              </ul>
            </div>

            {/* Condition 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Common</div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">02</span>
              </div>
              <h3 className={`text-2xl font-bold text-slate-900 mb-3 ${lexend.className}`}>Anal Fissure</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">A small tear in the lining of the anus causing severe pain. Laser Sphincterotomy provides instant relief by relaxing the muscle spasm.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Severe pain during defecation</li>
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Visible tear in skin</li>
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Burning sensation</li>
              </ul>
            </div>

            {/* Condition 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">03</span>
              </div>
              <h3 className={`text-2xl font-bold text-slate-900 mb-3 ${lexend.className}`}>Fistula</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">An infected tunnel between the skin and the anus. Our FiLaC (Fistula-tract Laser Closure) technique closes the tract without cutting sphincter muscles.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Pus/Blood discharge</li>
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Throbbing pain & swelling</li>
                <li className="flex items-center text-sm font-medium text-slate-700"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Recurrent abscesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Laser Vs Traditional */}
      <section id="why-laser" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lexend.className}`}>Laser Surgery vs Traditional Surgery</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">See why 95% of patients choose our advanced laser procedure.</p>
          </div>
          
          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-slate-900 p-4 border-b border-slate-700 text-sm font-bold uppercase tracking-wider text-center">
              <div className="text-left px-4">Feature</div>
              <div className="text-orange-400 border-l border-slate-700">Traditional Surgery</div>
              <div className="text-blue-400 border-l border-slate-700 flex items-center justify-center">
                <Zap className="h-4 w-4 mr-2" /> Our Laser Method
              </div>
            </div>
            
            {[
              { f: "Cuts & Stitches", t: "Multiple Cuts", l: "No Cuts, No Stitches" },
              { f: "Bleeding", t: "Heavy Bleeding", l: "Minimal / No Bleeding" },
              { f: "Pain Level", t: "Severe Pain (Weeks)", l: "Painless / Mild Discomfort" },
              { f: "Hospital Stay", t: "2 - 4 Days", l: "Same Day Discharge (Daycare)" },
              { f: "Recovery Time", t: "4 - 6 Weeks", l: "24 - 48 Hours" },
              { f: "Recurrence Rate", t: "High (20-30%)", l: "Negligible (<1%)" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors text-center text-sm sm:text-base">
                <div className="text-left px-4 font-semibold text-slate-300">{row.f}</div>
                <div className="text-slate-400 border-l border-slate-700">{row.t}</div>
                <div className="text-white font-bold border-l border-slate-700">{row.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section id="book" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className={`text-3xl font-bold text-slate-900 mb-3 ${lexend.className}`}>Book Your Consultation</h2>
              <p className="text-slate-600">Take the first step towards a pain-free life. Our experts at Tolichowki are here to help.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Patient Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Enter mobile number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select Condition</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Piles', 'Fissure', 'Fistula', 'Not Sure'].map((cond, i) => (
                    <label key={i} className="cursor-pointer">
                      <input type="radio" name="condition" className="peer sr-only" />
                      <div className="text-center px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 font-medium transition-all hover:bg-slate-100">
                        {cond}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                <CalendarCheck className="h-5 w-5 mr-2" /> Request Appointment
              </button>
              <p className="text-center text-xs text-slate-500 mt-4"><ShieldCheck className="inline h-4 w-4 text-green-500 mr-1"/> Your information is 100% secure and confidential.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 border-b border-slate-800 pb-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-blue-500 mr-2" />
              <span className={`text-xl font-bold text-white ${lexend.className}`}>Vitality's Laser Clinic</span>
            </div>
            <p className="text-sm">Advanced Proctology Center dedicated to providing minimally invasive, painless laser treatments for anorectal diseases.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start"><MapPin className="h-5 w-5 text-slate-500 mr-2 flex-shrink-0" /> #45, Main Road, Beside Yousufguda Checkpost, Tolichowki, Hyderabad</li>
              <li className="flex items-center"><Phone className="h-5 w-5 text-slate-500 mr-2 flex-shrink-0" /> 1800-123-4567 (Toll Free)</li>
              <li className="flex items-center"><Clock className="h-5 w-5 text-slate-500 mr-2 flex-shrink-0" /> Mon-Sun: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About the Clinic</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Patient Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Insurance Providers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm max-w-7xl mx-auto px-4 sm:px-6">
          <p>&copy; {new Date().getFullYear()} Vitality's Laser Piles Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';

export default function ThreeMDiagnostics() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-xl">3M</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                Diagnostics
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#packages" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Health Packages</a>
              <a href="#locations" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tolichowki Branch</a>
            </div>
            <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/30 transition-all active:scale-95">
              Book Home Collection
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Glassmorphism */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-75"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-150"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Now serving Tolichowki & Shaikpet
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Precision in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Every Result.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Advanced automated labs equipped with state-of-the-art technology. Get accurate reports delivered directly to your WhatsApp within 12 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
                  Book a Test
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <button className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-sm hover:bg-slate-50 transition-all">
                  Download Reports
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  NABL Accredited
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Fast Turnaround
                </div>
              </div>
            </div>

            {/* Glassmorphism Feature Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <div className="relative bg-white/60 backdrop-blur-2xl border border-white p-8 rounded-[2.5rem] shadow-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Popular Tests</h3>
                    <p className="text-sm text-slate-500">Frequently booked in Tolichowki</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Complete Blood Count (CBC)', price: '₹399', time: '6 hrs' },
                    { name: 'Thyroid Profile (T3, T4, TSH)', price: '₹499', time: '8 hrs' },
                    { name: 'Lipid Profile', price: '₹599', time: '12 hrs' },
                    { name: 'HbA1c (Glycosylated Hb)', price: '₹450', time: '6 hrs' }
                  ].map((test, idx) => (
                    <div key={idx} className="group flex items-center justify-between p-4 rounded-2xl bg-white/80 hover:bg-white border border-transparent hover:border-blue-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{test.name}</h4>
                          <span className="text-xs text-slate-500">Report in {test.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">{test.price}</div>
                        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Add +</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">50k+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Patients Served</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">1200+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Tests Available</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">30 Mins</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Home Collection</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">4.9/5</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Diagnostics</h3>
            <p className="text-slate-600">From routine blood work to specialized assays, we offer a complete spectrum of diagnostic services under one roof in Tolichowki.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pathology',
                desc: 'Fully automated biochemistry, hematology, and immunology labs ensuring zero manual error.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              },
              {
                title: 'Imaging Services',
                desc: 'Advanced digital X-Ray, 3D Ultrasound, and Doppler studies with instant reporting.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              },
              {
                title: 'Health Checkups',
                desc: 'Tailored full body health packages for every age group and lifestyle requirement.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-cyan-600 transition-colors">
                  Explore Tests
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Location Section */}
      <section id="locations" className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V0H40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 border border-blue-700/50 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-[80px] opacity-50"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Visit us in <br/>
                  <span className="text-cyan-400">Tolichowki</span>
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-md">
                  We are conveniently located opposite to the Rumaan Hotel on Tolichowki Main Road. Walk-in for any tests or book a home collection.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-blue-200 text-sm">#8-1-398/1, Main Road, Tolichowki, Hyderabad - 500008</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Call Us</h4>
                      <p className="text-blue-200 text-sm">+91 98765 43210 (24x7 Customer Support)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Home Collection</h3>
                <p className="text-slate-500 text-sm mb-6">Our phlebotomist will arrive within 30 minutes in Tolichowki and surrounding areas.</p>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-600">
                      <option>Select Test/Package</option>
                      <option>Complete Blood Count</option>
                      <option>Master Health Checkup</option>
                      <option>Diabetic Profile</option>
                      <option>Other (Will discuss on call)</option>
                    </select>
                  </div>
                  <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-extrabold text-xl tracking-tight text-white">
              3M <span className="text-blue-400">Diagnostics</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} 3M Diagnostics, Tolichowki. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

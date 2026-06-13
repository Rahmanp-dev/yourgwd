// app/client/care-medical-center/page.jsx
import React from 'react';

export default function CareMedicalCenter() {
  return (
    <div className="min-h-screen bg-[#ECFEFF] text-[#164E63] font-sans selection:bg-[#0891B2] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#A5F3FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0891B2] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#0891B2]">CARE <span className="font-light text-[#164E63]">Medical Center</span></h1>
          </div>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-[#0891B2] transition-colors">Specialties</a>
            <a href="#" className="hover:text-[#0891B2] transition-colors">Doctors</a>
            <a href="#" className="hover:text-[#0891B2] transition-colors">Patients</a>
            <a href="#" className="hover:text-[#0891B2] transition-colors">About</a>
          </nav>
          <button className="bg-[#059669] hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-emerald-200">
            Book Appointment
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#059669] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#0891B2] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              World-Class Care <br/>
              <span className="text-[#0891B2]">Right in Tolichowki</span>
            </h2>
            <p className="text-lg text-[#164E63]/80 mb-8 max-w-lg leading-relaxed">
              Experience the highest standard of multi-specialty healthcare. Our expert team is dedicated to your well-being with state-of-the-art facilities and compassionate care.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#0891B2] hover:bg-[#067A96] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-cyan-200 flex items-center gap-2">
                Find a Doctor
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#0891B2] border-2 border-[#0891B2] px-8 py-4 rounded-full font-bold text-lg transition-all">
                Our Services
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-tr from-[#0891B2] to-[#22D3EE] p-1 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital Building" className="rounded-3xl object-cover h-[500px] w-full" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-[#A5F3FC] animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <p className="font-bold text-[#164E63]">NABH Accredited</p>
                  <p className="text-sm text-gray-500">Highest quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#0891B2] font-semibold tracking-wider uppercase text-sm mb-2">Our Departments</h3>
            <h2 className="text-4xl font-bold">Centers of Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Cardiology', desc: 'Advanced heart care, angioplasty, and cardiac surgery.', icon: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z' },
              { title: 'Neurology', desc: 'Comprehensive care for brain, spine, and nerve disorders.', icon: 'M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12 7.5 2 12 2zm0 2a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm0 2v6l4 2' },
              { title: 'Orthopedics', desc: 'Joint replacements, trauma, and sports medicine.', icon: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z M14 2v6h6 M12 12v6 M9 15h6' },
            ].map((dept, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#ECFEFF] border border-[#A5F3FC] hover:shadow-2xl hover:bg-[#0891B2] transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#0891B2] group-hover:scale-110 transition-transform shadow-sm">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={dept.icon}/></svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{dept.title}</h4>
                <p className="text-[#164E63]/70 group-hover:text-white/90 transition-colors leading-relaxed">
                  {dept.desc}
                </p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0891B2] group-hover:text-white transition-colors">
                  Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#164E63] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#A5F3FC]">© 2026 CARE Medical Center, Tolichowki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

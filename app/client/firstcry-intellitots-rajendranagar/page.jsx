'use client';
import React, { useState } from 'react';

export default function FirstCryPage() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    { title: 'Intelli-C Curriculum', desc: 'Research-backed framework targeting cognitive, creative, and core skills.' },
    { title: '21st Century Skills', desc: 'Fostering communication, collaboration, critical thinking, and creativity.' },
    { title: 'Smart Facilities', desc: 'Tech-enabled learning zones and child-friendly, hygienic environments.' },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#005E9D] transform rotate-3"></div>
              <div className="w-8 h-8 rounded-lg bg-[#FFC72C] transform -rotate-6 mix-blend-multiply"></div>
              <div className="w-8 h-8 rounded-lg bg-[#FF5E00] transform rotate-6 mix-blend-multiply"></div>
            </div>
            <span className="font-[family-name:var(--font-outfit)] text-2xl font-bold tracking-tight text-[#1E293B]">
              FirstCry <span className="text-[#005E9D]">Intellitots</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-[#475569]">
            <a href="#framework" className="hover:text-[#005E9D] transition-colors">Our Framework</a>
            <a href="#facilities" className="hover:text-[#005E9D] transition-colors">Facilities</a>
            <a href="#admissions" className="hover:text-[#005E9D] transition-colors">Admissions</a>
          </div>
          <button className="bg-[#1E293B] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#005E9D] transition-colors">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-[#F1F5F9] border border-[#E2E8F0] text-[#005E9D] px-4 py-1.5 rounded-full font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse"></span>
            Admissions Open in Rajendranagar
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold leading-[1.1] text-[#1E293B] tracking-tight">
            Building smart foundations for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005E9D] to-[#FF5E00]">tomorrow's</span> innovators.
          </h1>
          <p className="text-lg md:text-xl text-[#64748B] max-w-lg leading-relaxed">
            FirstCry Intellitots brings a scientifically developed early-learning curriculum to Rajendranagar. We don't just teach; we ignite cognitive development.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#005E9D] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#004A7C] transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              Schedule a Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button className="bg-white text-[#1E293B] px-8 py-3.5 rounded-xl font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-colors">
              Explore Curriculum
            </button>
          </div>
        </div>

        {/* Bento Grid Visuals */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="space-y-4">
            <div className="bg-[#005E9D] h-3/5 rounded-3xl p-6 flex flex-col justify-end text-white shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-[family-name:var(--font-outfit)] font-bold text-2xl z-10">Smart Play</h3>
            </div>
            <div className="bg-[#FFC72C] h-2/5 rounded-3xl p-6 flex items-center justify-center text-[#1E293B] shadow-lg">
              <span className="font-bold text-4xl">IQ + EQ</span>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-[#FF5E00] h-2/5 rounded-3xl p-6 text-white shadow-lg flex items-center">
              <h3 className="font-[family-name:var(--font-outfit)] font-bold text-xl leading-tight">21st Century Skills</h3>
            </div>
            <div className="bg-[#1E293B] h-3/5 rounded-3xl p-6 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFC72C]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div>
                <div className="text-3xl font-bold font-[family-name:var(--font-outfit)]">#1</div>
                <div className="text-sm opacity-80 mt-1">Trusted Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelli-C Framework Section */}
      <section id="framework" className="bg-white py-24 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-[family-name:var(--font-outfit)] font-bold text-[#1E293B] mb-4">The Intelli-C Advantage</h2>
              <p className="text-[#64748B] mb-8">Our proprietary framework focuses on holistic development, preparing children not just for school, but for life.</p>
              
              <div className="flex flex-col gap-2">
                {features.map((feature, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`text-left px-6 py-4 rounded-xl font-medium transition-all ${activeTab === idx ? 'bg-[#F1F5F9] text-[#005E9D] shadow-sm' : 'text-[#64748B] hover:bg-[#F8FAFC]'}`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-[#E2E8F0] flex flex-col justify-center min-h-[300px]">
              <div className="inline-block px-3 py-1 bg-[#E0F2FE] text-[#005E9D] rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-max">
                Feature 0{activeTab + 1}
              </div>
              <h3 className="text-3xl font-[family-name:var(--font-outfit)] font-bold text-[#1E293B] mb-4">
                {features[activeTab].title}
              </h3>
              <p className="text-[#475569] text-lg leading-relaxed">
                {features[activeTab].desc} We believe in a structured yet highly engaging approach where play meets cognitive milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#1E293B] text-white pt-20 pb-10 border-t-4 border-[#005E9D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold mb-6">Ready to empower your child?</h2>
          <p className="text-[#94A3B8] mb-10 max-w-md mx-auto">Join the FirstCry Intellitots family in Rajendranagar and give your child the smart start they deserve.</p>
          <button className="bg-[#FFC72C] text-[#1E293B] px-8 py-4 rounded-xl font-bold hover:bg-[#F5B800] transition-colors shadow-lg">
            Enroll for 2026-2027
          </button>
          
          <div className="mt-20 pt-8 border-t border-white/10 text-[#64748B] text-sm flex justify-between items-center flex-col md:flex-row gap-4">
            <div>FirstCry Intellitots Preschool • Rajendranagar, Hyderabad</div>
            <div>© {new Date().getFullYear()} All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from 'react';
import { Building2, ArrowUpRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

export default function BDesignStudios() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#0A0A0A] text-gray-200 overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full flex justify-between items-center p-6 md:px-12 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-white/10' : 'py-8'}`}>
        <div className="flex items-center gap-3 text-white font-['Syncopate'] text-lg md:text-xl font-bold uppercase tracking-widest">
          <Building2 className="text-[#D4AF37]" size={28} />
          <span>B-Design</span>
        </div>
        <div className="hidden md:flex gap-10 font-sans text-xs tracking-[0.2em] uppercase text-gray-400">
          <a href="#expertise" className="hover:text-[#D4AF37] transition-colors">Expertise</a>
          <a href="#projects" className="hover:text-[#D4AF37] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
        <button className="bg-[#D4AF37] text-black px-6 py-3 font-sans text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors hidden md:block">
          Inquire Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-20 pt-20">
        <div className="absolute top-0 right-0 w-3/4 md:w-2/3 h-full">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="High rise glass building" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span> Shaping Skylines
          </p>
          <h1 className="text-5xl md:text-8xl font-['Playfair_Display'] font-bold text-white leading-tight mb-8">
            Monumental <br/>
            <span className="italic font-light text-gray-400">Architecture.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-sans font-light max-w-xl leading-relaxed mb-12">
            B-Design Studios specializes in high-rise residential and landmark commercial developments. We engineer the future of Kollur's urban landscape.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all flex items-center gap-3 group">
              View Portfolio <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 animate-bounce">
          <ChevronDown className="text-gray-500" size={32} />
        </div>
      </section>

      {/* Expertise Stats */}
      <section id="expertise" className="py-24 px-6 md:px-20 border-t border-white/5 bg-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/5">
          <div className="pl-0 md:pl-8 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#D4AF37] mb-2">12+</h3>
            <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
          </div>
          <div className="pl-6 md:pl-8 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#D4AF37] mb-2">45</h3>
            <p className="text-xs uppercase tracking-widest text-gray-500">High-Rise Built</p>
          </div>
          <div className="pl-6 md:pl-8 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#D4AF37] mb-2">3M</h3>
            <p className="text-xs uppercase tracking-widest text-gray-500">Sq.Ft Developed</p>
          </div>
          <div className="pl-6 md:pl-8 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#D4AF37] mb-2">18</h3>
            <p className="text-xs uppercase tracking-widest text-gray-500">Design Awards</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Our Legacy
              </p>
              <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white">Iconic Developments</h2>
            </div>
            <button className="text-xs tracking-widest uppercase border-b border-[#D4AF37] text-[#D4AF37] pb-1 hover:text-white hover:border-white transition-colors">
              See All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Project 1 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="The Apex Tower" />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10 text-xs tracking-widest uppercase text-white">
                  Commercial
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-['Playfair_Display'] text-white mb-2 group-hover:text-[#D4AF37] transition-colors">The Apex Tower</h3>
                  <p className="text-gray-500 text-sm tracking-wide">Kollur IT SEZ, Hyderabad</p>
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-[#D4AF37] transition-colors" size={28} />
              </div>
            </div>

            {/* Project 2 */}
            <div className="group md:mt-32">
              <div className="relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80" className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Lumina Residences" />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10 text-xs tracking-widest uppercase text-white">
                  Luxury Residential
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-['Playfair_Display'] text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Lumina Residences</h3>
                  <p className="text-gray-500 text-sm tracking-wide">Financial District Ext.</p>
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-[#D4AF37] transition-colors" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 md:px-20 border-t border-white/10 bg-[#050505] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none text-[300px] leading-none font-['Syncopate'] font-bold text-white">
          B.
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-white font-['Syncopate'] text-xl font-bold uppercase tracking-widest mb-8">
              <Building2 className="text-[#D4AF37]" size={32} />
              <span>B-Design</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              We design landmarks that define the prestige and ambition of tomorrow's cities. Let's discuss your next monumental project.
            </p>
            <button className="bg-[#D4AF37] text-black px-8 py-4 font-sans text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-6 text-sm tracking-wider font-light text-gray-300">
            <h4 className="text-white font-['Syncopate'] uppercase tracking-widest text-xs mb-4">Contact</h4>
            <a href="#" className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
              <Mail className="text-[#D4AF37]" size={20} /> office@bdesign.com
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
              <Phone className="text-[#D4AF37]" size={20} /> +91 40 4000 5000
            </a>
            <p className="flex items-start gap-4 text-gray-400 leading-relaxed mt-4">
              <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={20} /> 
              B-Design Tower, Level 45<br/>
              Kollur Financial Ext<br/>
              Hyderabad 502300
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-gray-600 uppercase tracking-widest font-sans relative z-10">
          <p>&copy; 2026 B-Design Studios.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
          <p className="mt-4 md:mt-0">Built by Antigravity</p>
        </div>
      </footer>
    </div>
  );
}

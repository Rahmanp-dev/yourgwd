"use client";

import React, { useEffect, useState } from 'react';

export default function SepArchitectsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen font-mono bg-[#050505] text-white selection:bg-[#ccff00] selection:text-black">
      
      {/* Custom Cursor Effect */}
      <div 
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-[#ccff00] rounded-full mix-blend-difference filter blur-[150px] opacity-20 pointer-events-none z-50 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }}
      />

      {/* Grid Overlay for Brutalist Feel */}
      <div className="fixed inset-0 pointer-events-none z-0 border-x border-[#1a1a1a] max-w-[1440px] mx-auto w-full">
        <div className="absolute top-0 bottom-0 left-1/4 border-r border-[#1a1a1a] hidden md:block" />
        <div className="absolute top-0 bottom-0 left-2/4 border-r border-[#1a1a1a] hidden md:block" />
        <div className="absolute top-0 bottom-0 left-3/4 border-r border-[#1a1a1a] hidden md:block" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-40 border-b border-[#1a1a1a] bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto flex justify-between items-stretch h-20">
          <div className="flex items-center px-6 md:px-12 border-r border-[#1a1a1a]">
            <span className="text-2xl font-bold tracking-tighter uppercase font-sans">SEP<span className="text-[#ccff00]">.</span></span>
          </div>
          <div className="hidden md:flex flex-1">
            <a href="#work" className="flex-1 flex items-center justify-center border-r border-[#1a1a1a] text-sm uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors">Work</a>
            <a href="#studio" className="flex-1 flex items-center justify-center border-r border-[#1a1a1a] text-sm uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors">Studio</a>
            <a href="#contact" className="flex-1 flex items-center justify-center text-sm uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors">Engage</a>
          </div>
          <div className="md:hidden flex items-center px-6 border-l border-[#1a1a1a]">
            <button className="text-sm uppercase tracking-widest">Menu</button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20 max-w-[1440px] mx-auto">
        
        {/* Hero */}
        <section className="min-h-[85vh] flex flex-col justify-center border-b border-[#1a1a1a] relative overflow-hidden">
          <div className="px-6 md:px-12 py-20 relative z-10">
            <h1 className="text-[clamp(4rem,10vw,12rem)] font-bold uppercase leading-[0.85] tracking-tighter font-sans mb-8">
              Structural <br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #ccff00' }}>Excellence.</span>
            </h1>
            <p className="text-[#888] max-w-xl text-lg md:text-xl font-mono border-l-2 border-[#ccff00] pl-6 uppercase tracking-wider">
              Designing the next generation of commercial mega-structures and corporate headquarters in Kollur, Hyderabad.
            </p>
          </div>
          
          <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-2/3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-t border-l border-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Commercial High-rise" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#ccff00] mix-blend-overlay opacity-20" />
          </div>
        </section>

        {/* Marquee Banner */}
        <div className="border-b border-[#1a1a1a] overflow-hidden bg-[#ccff00] text-black py-4 flex whitespace-nowrap">
          <div className="animate-marquee font-bold uppercase tracking-widest text-lg">
            INNOVATIVE WORKSPACES /// SUSTAINABLE MEGASTRUCTURES /// PARAMETRIC DESIGN /// URBAN PLANNING /// RETAIL HUBS /// 
            INNOVATIVE WORKSPACES /// SUSTAINABLE MEGASTRUCTURES /// PARAMETRIC DESIGN /// URBAN PLANNING /// RETAIL HUBS ///
          </div>
        </div>

        {/* Projects */}
        <section id="work" className="border-b border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Selected Work</h2>
              <p className="text-sm text-[#666] mb-8">[2023 - 2026]</p>
              <div className="w-12 h-1 bg-[#ccff00]" />
            </div>
            
            <div className="w-full md:w-3/4 flex flex-col">
              {/* Project 1 */}
              <div className="group border-b border-[#1a1a1a] last:border-b-0 p-6 md:p-12 hover:bg-[#111] transition-colors cursor-pointer flex flex-col md:flex-row gap-8 items-center justify-between">
                <div>
                  <div className="text-[#ccff00] text-xs font-bold mb-2 tracking-widest">01 / COMMERCIAL HQ</div>
                  <h3 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-4 group-hover:text-[#ccff00] transition-colors">Apex Tower</h3>
                  <div className="flex gap-4 text-xs text-[#666] uppercase">
                    <span className="border border-[#333] px-3 py-1 rounded-full">Kollur</span>
                    <span className="border border-[#333] px-3 py-1 rounded-full">350,000 SQFT</span>
                  </div>
                </div>
                <div className="w-full md:w-64 h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Apex Tower" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>

              {/* Project 2 */}
              <div className="group border-b border-[#1a1a1a] last:border-b-0 p-6 md:p-12 hover:bg-[#111] transition-colors cursor-pointer flex flex-col md:flex-row gap-8 items-center justify-between">
                <div>
                  <div className="text-[#ccff00] text-xs font-bold mb-2 tracking-widest">02 / RETAIL HUB</div>
                  <h3 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-4 group-hover:text-[#ccff00] transition-colors">The Nexus</h3>
                  <div className="flex gap-4 text-xs text-[#666] uppercase">
                    <span className="border border-[#333] px-3 py-1 rounded-full">Hyderabad</span>
                    <span className="border border-[#333] px-3 py-1 rounded-full">LEED PLATINUM</span>
                  </div>
                </div>
                <div className="w-full md:w-64 h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="The Nexus" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Data */}
        <section id="studio" className="flex flex-wrap border-b border-[#1a1a1a]">
          <div className="w-full md:w-1/2 p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#1a1a1a] flex flex-col justify-center bg-[#0a0a0a]">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 text-[#ccff00]">&gt; System Protocol</h2>
            <p className="text-[#ccc] text-lg leading-relaxed mb-6">
              At SEP Architects, we view buildings as dynamic machines. Our methodology integrates parametric modeling with rigorous structural logic to create spaces that perform at the highest levels of efficiency.
            </p>
            <p className="text-[#ccc] text-lg leading-relaxed">
              We reject ornamentation in favor of absolute structural clarity. Concrete, steel, and glass are pushed to their material limits.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2">
            <div className="p-6 md:p-12 border-b border-r border-[#1a1a1a] flex flex-col justify-center">
              <div className="text-5xl md:text-7xl font-sans font-bold text-[#ccff00]">42</div>
              <div className="text-sm uppercase tracking-widest mt-2 text-[#666]">Built Projects</div>
            </div>
            <div className="p-6 md:p-12 border-b border-[#1a1a1a] flex flex-col justify-center">
              <div className="text-5xl md:text-7xl font-sans font-bold text-[#ccff00]">15</div>
              <div className="text-sm uppercase tracking-widest mt-2 text-[#666]">Industry Awards</div>
            </div>
            <div className="p-6 md:p-12 border-r border-[#1a1a1a] flex flex-col justify-center">
              <div className="text-5xl md:text-7xl font-sans font-bold text-[#ccff00]">3M+</div>
              <div className="text-sm uppercase tracking-widest mt-2 text-[#666]">SqFt Delivered</div>
            </div>
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="text-5xl md:text-7xl font-sans font-bold text-[#ccff00]">01</div>
              <div className="text-sm uppercase tracking-widest mt-2 text-[#666]">Vision</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="p-6 md:p-12 bg-[#ccff00] text-black">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter mb-4">Initialize<br/>Project</h2>
              <a href="mailto:sys@separchitects.com" className="text-xl md:text-2xl font-bold uppercase border-b-4 border-black pb-1 hover:text-[#555] hover:border-[#555] transition-colors">sys@separchitects.com</a>
            </div>
            <div className="text-right">
              <p className="font-bold uppercase mb-2 text-sm">SEP Architects HQ</p>
              <p className="text-sm font-medium mb-6">Financial District, Nanakramguda<br/>Hyderabad 500032</p>
              <div className="flex gap-6 justify-end uppercase font-bold text-sm">
                <a href="#" className="hover:text-white transition-colors">LN</a>
                <a href="#" className="hover:text-white transition-colors">IG</a>
                <a href="#" className="hover:text-white transition-colors">TW</a>
              </div>
            </div>
          </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from 'react';

export default function MoriqPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#fbfaf9] text-[#2c2b29] overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#fbfaf9]/90 backdrop-blur-md py-4 border-b border-[#e5e0d8]' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest text-[#2c2b29]">MORIQ</div>
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest text-[#5c5b59]">
            <a href="#projects" className="hover:text-[#9e8b73] transition-colors duration-300">Residences</a>
            <a href="#philosophy" className="hover:text-[#9e8b73] transition-colors duration-300">Philosophy</a>
            <a href="#contact" className="hover:text-[#9e8b73] transition-colors duration-300">Contact</a>
          </div>
          <button className="md:hidden text-sm uppercase tracking-widest text-[#2c2b29]">Menu</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf9]/40 to-[#fbfaf9] mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Villa" 
            className="w-full h-full object-cover object-center opacity-90 scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] mb-8 animate-[fade-in-up_1s_ease-out]">
              Spaces that <br/>
              <span className="italic text-[#9e8b73]">breathe.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5c5b59] max-w-lg mb-12 font-light leading-relaxed animate-[fade-in-up_1s_ease-out_0.2s_both]">
              Award-winning contemporary residential architecture based in Kollur, Hyderabad. We craft homes that reflect the soul of those who live within them.
            </p>
            <button className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] animate-[fade-in-up_1s_ease-out_0.4s_both]">
              <span className="border-b border-[#2c2b29] pb-1 group-hover:border-[#9e8b73] group-hover:text-[#9e8b73] transition-colors duration-300">Discover Our Work</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:translate-x-2 transition-transform duration-300 group-hover:stroke-[#9e8b73]">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-32 bg-[#fbfaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 w-full relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#9e8b73]/20 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out" />
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="The Courtyard House" 
                className="relative z-10 w-full h-[600px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="text-xs uppercase tracking-[0.3em] text-[#9e8b73] mb-6">Featured Project 01</div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">The Courtyard House</h2>
              <p className="text-[#5c5b59] leading-loose mb-10 font-light">
                Nestled in the quiet enclaves of Kollur, this residence redefines indoor-outdoor living. By centralizing a lush courtyard, natural light permeates every corner, creating a sanctuary of calm amidst the urban chaos. The material palette—raw concrete, warm teak, and expansive glass—speaks to our philosophy of understated luxury.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12 border-t border-b border-[#e5e0d8] py-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#9e8b73] mb-2">Location</div>
                  <div className="font-serif">Kollur, Hyd</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#9e8b73] mb-2">Area</div>
                  <div className="font-serif">12,500 sqft</div>
                </div>
              </div>
              <button className="text-sm uppercase tracking-widest hover:text-[#9e8b73] transition-colors duration-300">View Gallery &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 bg-[#2c2b29] text-[#fbfaf9] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#353432] -skew-x-12 translate-x-32 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="block text-sm uppercase tracking-[0.3em] text-[#9e8b73] mb-12">Our Philosophy</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight max-w-4xl mx-auto mb-16">
            "Architecture is not just about shelter, it's about framing the environment and elevating the human spirit."
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
            <div>
              <div className="text-3xl font-serif text-[#9e8b73] mb-4">01.</div>
              <h3 className="text-xl font-serif mb-4">Contextual Design</h3>
              <p className="text-[#a8a7a5] font-light leading-relaxed text-sm">We respond to the climate, culture, and topography of Hyderabad, ensuring each home belongs exactly where it is built.</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#9e8b73] mb-4">02.</div>
              <h3 className="text-xl font-serif mb-4">Material Honesty</h3>
              <p className="text-[#a8a7a5] font-light leading-relaxed text-sm">Embracing the natural aging of materials—wood, stone, and concrete—to create spaces that grow more beautiful with time.</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#9e8b73] mb-4">03.</div>
              <h3 className="text-xl font-serif mb-4">Light as Form</h3>
              <p className="text-[#a8a7a5] font-light leading-relaxed text-sm">Natural light is our primary building material, sculpting interiors and shifting the mood of the residence throughout the day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#fbfaf9] py-24 border-t border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif mb-8">Begin your journey.</h2>
            <a href="mailto:hello@moriq.in" className="text-2xl md:text-3xl font-light hover:text-[#9e8b73] transition-colors border-b border-[#2c2b29] hover:border-[#9e8b73] pb-2">hello@moriq.in</a>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <p className="text-[#5c5b59] mb-4">MORIQ Studio</p>
            <p className="text-[#5c5b59] mb-8">Road No. 45, Jubilee Hills<br/>Kollur Extension, Hyderabad 500033</p>
            <div className="flex gap-8 md:justify-end text-sm uppercase tracking-widest text-[#2c2b29]">
              <a href="#" className="hover:text-[#9e8b73]">Instagram</a>
              <a href="#" className="hover:text-[#9e8b73]">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slow-pan {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.1) translate(-2%, 2%); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

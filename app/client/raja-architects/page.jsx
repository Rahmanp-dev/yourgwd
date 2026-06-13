"use client";
import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function RajaArchitects() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className="w-full bg-[#fbf9f6] text-[#2c2a26] font-sans selection:bg-[#d6cdc4] selection:text-[#2c2a26] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full flex justify-between items-center p-6 md:p-10 z-50 mix-blend-difference text-[#fbf9f6]">
        <div className="text-xl tracking-widest font-light uppercase">Raja.</div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest font-light uppercase">
          <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">Studio</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
        <button className="md:hidden">Menu</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20">
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09c15468?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.85]" alt="Minimal living room" />
        </div>
        <div className="relative z-10 text-center px-6 mix-blend-difference text-[#fbf9f6] max-w-4xl">
          <h1 className={`text-5xl md:text-8xl font-light tracking-tighter mb-6 transition-transform duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Spaces that <span className="italic font-serif">Breathe.</span>
          </h1>
          <p className={`text-lg md:text-2xl font-light tracking-wide transition-transform duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Crafting intentional, modern sanctuaries in Kollur, Hyderabad.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm tracking-[0.2em] uppercase text-[#8a8175] mb-6">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-light leading-snug mb-8">
              We believe in the power of <span className="italic font-serif">quiet</span> architecture.
            </h3>
            <p className="text-lg text-[#5a554f] font-light leading-relaxed mb-8">
              Every project is an exploration of light, material, and volume. At Raja Architects, we strip away the unnecessary to reveal the pure essence of a space. We specialize in residential sanctuaries and thoughtful interior spaces that foster tranquility.
            </p>
            <button className="group flex items-center gap-4 text-sm tracking-widest uppercase border-b border-[#2c2a26] pb-2">
              Discover the Studio <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="relative h-[600px] w-full">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" className="absolute top-0 right-0 w-4/5 h-4/5 object-cover" alt="Interior Details" />
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" className="absolute bottom-0 left-0 w-3/5 h-2/5 object-cover border-8 border-[#fbf9f6]" alt="Materials" />
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="work" className="py-32 bg-[#efece6] px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm tracking-[0.2em] uppercase text-[#8a8175] mb-16 text-center">Selected Works</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 h-[70vh]">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Villa 82" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-light">Villa 82, Kollur</h3>
                <span className="text-sm tracking-widest text-[#8a8175]">2025</span>
              </div>
            </div>
            
            <div className="group cursor-pointer md:mt-32">
              <div className="overflow-hidden mb-6 h-[70vh]">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="The Courtyard House" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-light">The Courtyard House</h3>
                <span className="text-sm tracking-widest text-[#8a8175]">2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-6 md:px-20 bg-[#2c2a26] text-[#fbf9f6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-8">Let's build<br/><span className="italic font-serif">together.</span></h2>
            <div className="flex items-center gap-4 text-sm tracking-widest uppercase pb-2 mb-12">
              <a href="mailto:hello@raja-architects.in" className="border-b border-[#fbf9f6] pb-1 hover:opacity-70 transition-opacity">hello@raja-architects.in</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 font-light text-sm tracking-wide">
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-[0.2em] text-[#8a8175] text-xs">Studio</span>
              <p className="flex gap-2"><MapPin size={16} /> 12th Avenue, Kollur,<br/>Hyderabad, Telangana 502300</p>
              <p className="flex gap-2"><Phone size={16} /> +91 98765 43210</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-[0.2em] text-[#8a8175] text-xs">Socials</span>
              <a href="#" className="flex gap-2 hover:opacity-70"><Instagram size={16} /> Instagram</a>
              <a href="#" className="flex gap-2 hover:opacity-70">LinkedIn</a>
              <a href="#" className="flex gap-2 hover:opacity-70">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-[#3a3834] flex flex-col md:flex-row justify-between text-xs text-[#8a8175] uppercase tracking-widest">
          <p>&copy; 2026 Raja Architects.</p>
          <p>Designed by Antigravity</p>
        </div>
      </footer>
    </div>
  );
}

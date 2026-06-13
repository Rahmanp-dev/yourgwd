import React from 'react';

export default function TaraDesignPage() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter uppercase text-white">TARA Design</div>
        <ul className="flex space-x-8 text-sm tracking-widest uppercase text-white font-medium">
          <li className="cursor-pointer hover:text-orange-500 transition-colors">Projects</li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">Expertise</li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">Studio</li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-end justify-start pb-24 px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <p className="text-orange-500 font-mono text-sm mb-6 tracking-[0.2em] uppercase">Kollur, Hyderabad</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white uppercase">
            Form <br/>Follows <br/>Function
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-xl border-l-2 border-orange-500 pl-6">
            Pioneering brutalist and minimalist architectural solutions for modern residential living.
          </p>
          <button className="mt-12 bg-white text-neutral-950 px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 ease-out flex items-center group">
            Explore Portfolio
            <svg className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-neutral-950 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 uppercase">Our <br/>Expertise</h2>
            <div className="space-y-12">
              <div className="group border-b border-neutral-800 pb-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">01 / Residential Architecture</h3>
                <p className="text-neutral-400 font-light leading-relaxed">Designing bespoke homes that merge structural integrity with aesthetic purity. We focus on raw materials and natural light.</p>
              </div>
              <div className="group border-b border-neutral-800 pb-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">02 / Minimalist Interiors</h3>
                <p className="text-neutral-400 font-light leading-relaxed">Creating spaces that breathe. Stripping away the unnecessary to reveal the essential beauty of form and function.</p>
              </div>
              <div className="group border-b border-neutral-800 pb-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">03 / Structural Innovation</h3>
                <p className="text-neutral-400 font-light leading-relaxed">Pushing the boundaries of modern engineering to achieve seemingly impossible cantilevers and floating volumes.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Minimalist Design" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Selected <br/>Works</h2>
          <a href="#" className="text-orange-500 uppercase tracking-widest text-sm font-bold hover:text-white transition-colors mt-8 md:mt-0 flex items-center">
            View All Projects
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/5] mb-6 relative">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80" alt="Villa Nova" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase">Villa Nova</h3>
            <p className="text-neutral-500 font-mono text-sm tracking-widest">Kollur / 2025</p>
          </div>
          <div className="group cursor-pointer md:mt-24">
            <div className="overflow-hidden aspect-[4/5] mb-6 relative">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="The Concrete House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase">The Concrete House</h3>
            <p className="text-neutral-500 font-mono text-sm tracking-widest">Jubilee Hills / 2024</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-24 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-neutral-800 pb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">Ready to <br/><span className="text-orange-500">Build?</span></h2>
            <p className="text-xl text-neutral-400 font-light max-w-md">Let's discuss your next architectural endeavor.</p>
          </div>
          <div className="flex flex-col justify-end md:items-end">
            <a href="mailto:hello@taradesign.com" className="text-2xl md:text-4xl font-bold hover:text-orange-500 transition-colors mb-4">hello@taradesign.com</a>
            <p className="text-neutral-500 font-mono tracking-widest text-sm">+91 98765 43210</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm font-mono uppercase tracking-widest">
          <p>&copy; 2026 Tara Design Solutions</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

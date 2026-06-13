import React from 'react';

export default function ArtsOfArchitecture() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full flex justify-between items-center p-6 md:px-12 z-50 mix-blend-difference">
        <div className="text-xl font-bold tracking-widest uppercase">Arts of Architecture</div>
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Studio</li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern home exterior" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="text-amber-500 font-medium tracking-[0.2em] mb-4 text-sm md:text-base">KOLLUR, HYDERABAD</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Modernity in <br/><span className="text-zinc-400">its purest form.</span>
          </h1>
          <button className="border border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest">
            Explore Portfolio
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">We shape spaces that shape human experiences.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Based in Kollur, Arts of Architecture focuses on reductive design. We believe that by stripping away the non-essential, we uncover the profound beauty of form, light, and material.
          </p>
          <div className="w-12 h-1 bg-amber-500"></div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" alt="Interior detail" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" alt="Material detail" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 mt-8" />
        </div>
      </section>

      {/* Featured Projects Bento Grid */}
      <section className="py-24 md:py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Works</h2>
            <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">View All Projects</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
            <div className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden bg-zinc-800">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project 1" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-amber-400 text-sm tracking-widest mb-2">RESIDENTIAL</p>
                <h3 className="text-2xl font-bold">The Glass Pavilion</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-zinc-800">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project 2" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-amber-400 text-sm tracking-widest mb-1">COMMERCIAL</p>
                <h3 className="text-xl font-bold">Nexus Workspace</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-zinc-800">
              <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project 3" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-amber-400 text-sm tracking-widest mb-1">RETAIL</p>
                <h3 className="text-xl font-bold">Aura Boutique</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Arts of Architecture. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Kollur, Hyderabad, Telangana</p>
      </footer>
    </div>
  );
}

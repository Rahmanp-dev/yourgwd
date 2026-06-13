import React from 'react';

export default function RhythmEmphasisPage() {
  return (
    <main className="w-full relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-6 py-8 z-50 flex justify-between items-center text-[#4A4238] font-sans-alt">
        <div className="text-xl font-medium tracking-wide">
          Rhythm <span className="italic text-[#8C7A6B]">&amp;</span> Emphasis
        </div>
        <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-[#C2A888] transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-[#C2A888] transition-colors duration-300">Philosophy</a>
          <a href="#" className="hover:text-[#C2A888] transition-colors duration-300">Interiors</a>
          <a href="#" className="hover:text-[#C2A888] transition-colors duration-300">Journal</a>
        </div>
        <button className="px-6 py-2 border border-[#4A4238] rounded-full text-sm uppercase tracking-wider hover:bg-[#4A4238] hover:text-[#FAF8F5] transition-all duration-300">
          Inquire
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col md:flex-row items-center pt-24 px-6 md:px-12 lg:px-24">
        <div className="w-full md:w-1/2 z-10 pr-0 md:pr-12 mt-20 md:mt-0">
          <p className="font-sans-alt uppercase tracking-[0.3em] text-[#C2A888] text-xs mb-6 font-medium">Bespoke Living Spaces</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#332D26] leading-[1.1] mb-8">
            Designing <br/>
            <span className="italic text-[#8C7A6B]">soulful</span> homes<br/>
            for modern life.
          </h1>
          <p className="font-sans-alt text-[#756A5E] max-w-md leading-relaxed font-light text-lg">
            We craft warm, organic interiors in Kollur, blending natural textures with timeless elegance to create your personal sanctuary.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative mt-12 md:mt-0">
          <div className="absolute inset-0 rounded-t-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl shadow-[#C2A888]/20">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Warm Interior Design" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E8E1D7] rounded-full -z-10 blur-xl"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F2ECE4] mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#332D26] mb-10 leading-tight">
            "We believe a home should be a reflection of its inhabitants—<span className="italic text-[#8C7A6B]">curated, comfortable, and deeply personal.</span>"
          </h2>
          <div className="w-px h-16 bg-[#C2A888] mx-auto mb-10"></div>
          <p className="font-sans-alt text-[#756A5E] leading-loose max-w-2xl mx-auto font-light">
            At Rhythm & Emphasis, our approach is rooted in the subtle balance of natural light, tactile materials, and harmonious layouts. We specialize in residential interiors that emphasize well-being and effortless luxury.
          </p>
        </div>
      </section>

      {/* Selected Works */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-20 text-center">
          <p className="font-sans-alt uppercase tracking-[0.3em] text-[#C2A888] text-xs mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#332D26]">Curated Spaces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Project 1 */}
          <div className="group">
            <div className="overflow-hidden rounded-tr-[80px] rounded-bl-[80px] mb-8 relative shadow-lg shadow-[#4A4238]/5">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                alt="The Earth House" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="flex justify-between items-end px-4">
              <div>
                <h3 className="text-2xl font-serif text-[#332D26] mb-2">The Earth House</h3>
                <p className="font-sans-alt text-[#8C7A6B] text-sm">Kollur / 2025</p>
              </div>
              <button className="w-10 h-10 rounded-full border border-[#C2A888] flex items-center justify-center text-[#C2A888] group-hover:bg-[#C2A888] group-hover:text-white transition-colors duration-300">
                &rarr;
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group mt-0 md:mt-32">
            <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] mb-8 relative shadow-lg shadow-[#4A4238]/5">
              <img 
                src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Serenity Apartment" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="flex justify-between items-end px-4">
              <div>
                <h3 className="text-2xl font-serif text-[#332D26] mb-2">Serenity Penthouse</h3>
                <p className="font-sans-alt text-[#8C7A6B] text-sm">Financial District / 2024</p>
              </div>
              <button className="w-10 h-10 rounded-full border border-[#C2A888] flex items-center justify-center text-[#C2A888] group-hover:bg-[#C2A888] group-hover:text-white transition-colors duration-300">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#332D26] text-[#E8E1D7] py-24 px-6 md:px-12 lg:px-24 rounded-t-[60px] md:rounded-t-[100px] mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-b border-[#4A4238] pb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's create your<br/><span className="italic text-[#C2A888]">dream home.</span></h2>
            <button className="px-8 py-3 bg-[#C2A888] text-white rounded-full font-sans-alt text-sm uppercase tracking-wider hover:bg-[#A88E6D] transition-colors duration-300">
              Start a Project
            </button>
          </div>
          <div className="flex gap-16 font-sans-alt text-sm text-center md:text-left font-light">
            <div className="space-y-4">
              <p className="uppercase tracking-widest text-[#8C7A6B] mb-2 font-medium">Contact</p>
              <p>hello@rhythmemphasis.com</p>
              <p>+91 98765 12345</p>
              <p>Kollur, Hyderabad</p>
            </div>
            <div className="space-y-4">
              <p className="uppercase tracking-widest text-[#8C7A6B] mb-2 font-medium">Socials</p>
              <p><a href="#" className="hover:text-[#C2A888] transition-colors">Instagram</a></p>
              <p><a href="#" className="hover:text-[#C2A888] transition-colors">Pinterest</a></p>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center font-sans-alt text-sm text-[#756A5E] font-light">
          &copy; 2026 Rhythm & Emphasis Design Studio. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default function StudioInfinitePage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 border-b border-white/10">
        <div className="text-2xl tracking-widest uppercase" style={{ fontFamily: 'var(--font-cinzel)' }}>
          Studio Infinite
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-josefin)' }}>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Projects</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Studio</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="relative h-[90vh] flex flex-col justify-center px-8 lg:px-24">
          <h1 className="text-[12vw] leading-none uppercase tracking-tighter" style={{ fontFamily: 'var(--font-cinzel)' }}>
            <span className="block opacity-50">Redefining</span>
            <span className="block text-[#D4AF37]">Luxury.</span>
          </h1>
          <p className="mt-12 text-xl max-w-xl font-light leading-relaxed text-gray-400" style={{ fontFamily: 'var(--font-josefin)' }}>
            We craft bespoke architectural masterpieces in Kollur, Hyderabad. Our designs merge opulence with brutalist minimalism, creating timeless spaces for the elite.
          </p>
          <div className="mt-16">
            <button className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-josefin)' }}>
              Explore Portfolio
            </button>
          </div>
        </section>

        {/* Featured Project */}
        <section className="px-8 lg:px-24 py-32 bg-[#0a0a0a]">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Villa Aurelia" className="w-full h-[70vh] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-josefin)' }}>Featured Masterpiece</div>
              <h2 className="text-6xl uppercase mb-8" style={{ fontFamily: 'var(--font-cinzel)' }}>Villa Aurelia</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12" style={{ fontFamily: 'var(--font-josefin)' }}>
                A bold statement in Kollur's expanding luxury corridor. Villa Aurelia blends expansive negative spaces with raw concrete and polished brass accents. Every corner is a testament to exaggerated minimalism, designed to evoke awe and serenity.
              </p>
              <a href="#" className="inline-flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'var(--font-josefin)' }}>
                <span className="uppercase tracking-widest text-sm">View Details</span>
                <span className="w-12 h-[1px] bg-current"></span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats / Impact */}
        <section className="py-32 border-t border-white/10">
          <div className="container mx-auto px-8 lg:px-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
               <div>
                 <div className="text-8xl text-[#D4AF37] mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>12+</div>
                 <div className="text-gray-400 uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-josefin)' }}>Years of Excellence</div>
               </div>
               <div>
                 <div className="text-8xl text-[#D4AF37] mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>45</div>
                 <div className="text-gray-400 uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-josefin)' }}>Villas Delivered</div>
               </div>
               <div>
                 <div className="text-8xl text-[#D4AF37] mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>3</div>
                 <div className="text-gray-400 uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-josefin)' }}>Design Awards</div>
               </div>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 lg:px-24 py-16 flex flex-col md:flex-row justify-between items-center border-t border-white/10" style={{ fontFamily: 'var(--font-josefin)' }}>
        <div className="text-xl uppercase tracking-widest" style={{ fontFamily: 'var(--font-cinzel)' }}>Studio Infinite</div>
        <div className="text-gray-500 text-sm mt-4 md:mt-0">
          &copy; 2026 Studio Infinite, Kollur, Hyderabad. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

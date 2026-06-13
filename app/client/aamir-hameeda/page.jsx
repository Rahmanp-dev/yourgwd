export default function AamirHameedaPage() {
  return (
    <div className="bg-[#F5F5F5] text-[#111111] min-h-screen selection:bg-[#2563EB] selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Navbar - Strict grid based */}
      <nav className="grid grid-cols-12 gap-4 px-6 py-6 border-b-2 border-[#111111] sticky top-0 bg-[#F5F5F5] z-50">
        <div className="col-span-12 md:col-span-3 font-black text-2xl tracking-tight uppercase">
          AAMIR &<br/>HAMEEDA
        </div>
        <div className="hidden md:flex col-span-6 gap-8 items-center font-medium text-sm">
          <a href="#" className="hover:text-[#2563EB] transition-colors">Projects</a>
          <a href="#" className="hover:text-[#2563EB] transition-colors">Practice</a>
          <a href="#" className="hover:text-[#2563EB] transition-colors">News</a>
          <a href="#" className="hover:text-[#2563EB] transition-colors">Contact</a>
        </div>
        <div className="hidden md:flex col-span-3 justify-end items-center">
          <button className="bg-[#111111] text-white px-6 py-3 text-sm font-bold hover:bg-[#2563EB] transition-colors">
            Initiate Project
          </button>
        </div>
      </nav>

      <main>
        {/* Hero - Asymmetric Grid */}
        <section className="grid grid-cols-12 gap-4 px-6 py-12 lg:py-24 border-b-2 border-[#111111]">
          <div className="col-span-12 md:col-span-8 pr-0 md:pr-12">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Shaping<br/>
              <span className="text-[#2563EB]">Commercial</span><br/>
              Futures
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end mt-8 md:mt-0">
            <p className="text-xl font-medium leading-snug border-l-4 border-[#2563EB] pl-6">
              Aamir & Hameeda specialize in high-performance commercial structures. We build retail and corporate environments in Kollur that foster innovation and drive economic momentum.
            </p>
          </div>
        </section>

        {/* Marquee or Info Strip */}
        <div className="bg-[#111111] text-white py-4 overflow-hidden border-b-2 border-[#111111]">
          <div className="flex whitespace-nowrap text-sm font-bold tracking-widest uppercase">
            <span className="px-8">Retail Spaces</span> • 
            <span className="px-8">Corporate Campuses</span> • 
            <span className="px-8">Mixed-Use Developments</span> • 
            <span className="px-8">Kollur Financial District</span> • 
            <span className="px-8">Sustainable Design</span>
          </div>
        </div>

        {/* Projects Grid - Modular layout */}
        <section className="px-6 py-24">
          <div className="flex justify-between items-end mb-12 border-b-2 border-[#111111] pb-4">
            <h2 className="text-4xl font-black uppercase tracking-tight">Selected Works</h2>
            <span className="font-bold">2024—2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-gray-300 relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Nexus Corporate Park" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#2563EB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold uppercase">Nexus Corporate Park</h3>
                  <p className="text-gray-600 font-medium mt-1">Kollur IT Hub</p>
                </div>
                <div className="bg-[#111111] text-white px-3 py-1 text-xs font-bold">2025</div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer md:mt-24">
              <div className="aspect-[4/3] overflow-hidden bg-gray-300 relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="The Atrium Retail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#2563EB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold uppercase">The Atrium Retail</h3>
                  <p className="text-gray-600 font-medium mt-1">Kollur High Street</p>
                </div>
                <div className="bg-[#111111] text-white px-3 py-1 text-xs font-bold">2024</div>
              </div>
            </div>
          </div>
        </section>

        {/* Data / Approach Section */}
        <section className="bg-[#2563EB] text-white px-6 py-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-4xl font-black uppercase tracking-tight">Our Metrics</h2>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-white pl-4">
              <div className="text-5xl font-black">1.2M</div>
              <div className="text-sm font-medium mt-2 uppercase">Sq Ft Developed</div>
            </div>
            <div className="border-l-2 border-white pl-4">
              <div className="text-5xl font-black">LEED</div>
              <div className="text-sm font-medium mt-2 uppercase">Platinum Certified</div>
            </div>
            <div className="border-l-2 border-white pl-4">
              <div className="text-5xl font-black">100%</div>
              <div className="text-sm font-medium mt-2 uppercase">On-Time Delivery</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t-2 border-[#111111] flex flex-col md:flex-row justify-between items-start md:items-center font-medium text-sm">
        <div className="uppercase tracking-widest font-black mb-4 md:mb-0">
          AAMIR & HAMEEDA<br/>
          <span className="text-gray-500 font-normal">Commercial Architecture</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#2563EB] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#2563EB] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#2563EB] transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

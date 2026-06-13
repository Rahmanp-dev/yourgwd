import React from 'react';

export default function MDeepaArchitects() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E2D] overflow-hidden">
      {/* Custom Styles for Fonts since we can't edit globals.css easily */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Header */}
      <header className="absolute top-0 w-full z-50 px-8 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3 text-[#4A7856]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z" />
          </svg>
          <span className="font-serif-custom text-xl font-semibold tracking-wide">M DEEPA</span>
        </div>
        <button className="text-[#2C3E2D] font-sans-custom tracking-widest text-sm uppercase flex items-center gap-2 hover:text-[#4A7856] transition-colors">
          <span>Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-4 h-0.5 bg-current"></span>
          </div>
        </button>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <div className="relative z-10 order-2 lg:order-1">
            <span className="font-sans-custom text-[#4A7856] tracking-[0.3em] text-sm uppercase mb-6 block font-medium">Sustainable Architecture</span>
            <h1 className="font-serif-custom text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[#1A251B] mb-8">
              Spaces that <i className="text-[#4A7856]">breathe.</i>
            </h1>
            <p className="font-sans-custom text-lg md:text-xl text-[#526B54] mb-12 max-w-md font-light leading-relaxed">
              We design organic, eco-friendly habitats in Kollur that harmonize with nature, reducing carbon footprints without compromising on elegance.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#4A7856] text-white font-sans-custom px-8 py-4 rounded-full hover:bg-[#385B41] transition-colors shadow-lg shadow-[#4A7856]/20">
                Discover Our Approach
              </button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[75vh] w-full">
            <div className="absolute inset-0 bg-[#E8F0E9] rounded-t-full rounded-b-[40px] transform rotate-3 scale-105 origin-bottom"></div>
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80" 
              alt="Sustainable home surrounded by nature" 
              className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-b-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 md:py-32 bg-white px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-custom text-4xl md:text-5xl mb-6 text-[#1A251B]">Rooted in Nature</h2>
            <p className="font-sans-custom text-[#526B54] max-w-2xl mx-auto text-lg font-light">Our core philosophy intertwines biophilic design with modern functionality, creating environments that are environmentally responsible and profoundly comforting.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Passive Cooling',
                desc: 'Utilizing natural ventilation and strategic shading to reduce reliance on artificial climate control.',
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Local Materials',
                desc: 'Sourcing ethical, low-impact materials from the Telangana region to support local economies and reduce transport emissions.',
                img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Renewable Energy',
                desc: 'Seamlessly integrating solar harvesting and rainwater recycling into the architectural aesthetic.',
                img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80'
              }
            ].map((feature, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-6 aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-[#4A7856]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <h3 className="font-serif-custom text-2xl mb-3 text-[#1A251B]">{feature.title}</h3>
                <p className="font-sans-custom text-[#526B54] font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-[#4A7856] text-[#FDFBF7] px-8 md:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <svg className="w-12 h-12 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
             <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h2 className="font-serif-custom text-3xl md:text-5xl leading-tight mb-8">
            "We do not inherit the earth from our ancestors; we borrow it from our children. Our architecture must reflect this profound responsibility."
          </h2>
          <p className="font-sans-custom font-medium tracking-widest uppercase text-sm opacity-80">— Deepa M., Principal Architect</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#FDFBF7] border-t border-[#E8F0E9] px-8 md:px-16 text-center">
         <p className="font-sans-custom text-[#526B54] text-sm">
           © {new Date().getFullYear()} M Deepa Architects. Designing a greener Kollur.
         </p>
      </footer>
    </div>
  );
}

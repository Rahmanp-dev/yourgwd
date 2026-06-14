import React from 'react';

export default function KidzeePage() {
  return (
    <main className="font-sans text-[#4A4A4A] overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 lg:px-10 bg-[#FDFBF7] relative z-20">
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10Z" fill="#F4D03F" />
            <path d="M35 45C35 45 40 55 50 55C60 55 65 45 65 45" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="35" cy="35" r="5" fill="#FFFFFF" />
            <circle cx="65" cy="35" r="5" fill="#FFFFFF" />
          </svg>
          <span className="font-black text-2xl tracking-wide text-[#E67E22]">KIDZEE</span>
          <span className="font-medium text-sm text-[#7F8C8D] hidden sm:block border-l-2 border-[#E67E22] pl-2 ml-1">Rajendranagar</span>
        </div>
        <div className="hidden md:flex gap-6 font-bold text-[#95A5A6]">
          <a href="#home" className="hover:text-[#E67E22] transition-colors">Home</a>
          <a href="#curriculum" className="hover:text-[#E67E22] transition-colors">Curriculum</a>
          <a href="#gallery" className="hover:text-[#E67E22] transition-colors">Gallery</a>
        </div>
        <a href="#contact" className="bg-[#2ECC71] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-green-200 hover:bg-[#27AE60] hover:scale-105 transition-transform inline-block">
          Join Us
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-5 lg:px-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Blob Background */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[#FEF9E7] rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-[#E8F8F5] rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4"></div>

        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 font-bold px-4 py-2 rounded-full text-sm shadow-sm border border-orange-200">
            <span>🎈</span> Now accepting enrollments
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#2C3E50] leading-[1.1]">
            Grow. <br/>
            Play. <span className="text-[#2ECC71]">Learn.</span>
          </h1>
          <p className="text-xl text-[#7F8C8D] max-w-md leading-relaxed font-medium">
            A nurturing home away from home where your child's curiosity is celebrated every single day.
          </p>
          <div className="pt-4 flex items-center gap-5">
            <button className="bg-[#E67E22] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-200 hover:bg-[#D35400] transition-colors hover:-translate-y-1">
              Admissions 2024
            </button>
            <button className="flex items-center gap-2 text-[#2C3E50] font-bold hover:text-[#E67E22] transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow text-[#2ECC71]">
                ▶
              </div>
              Watch Video
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full flex justify-center">
          {/* Organic shaped image container */}
          <div className="relative w-full aspect-square max-w-[450px] z-10 border-[12px] border-white" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}>
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" 
              alt="Kids playing and learning"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative floating elements */}
          <div className="absolute top-10 left-4 w-20 h-20 bg-[#F4D03F] rounded-full mix-blend-multiply opacity-80 animate-pulse hidden md:block"></div>
          <div className="absolute -bottom-4 right-10 w-24 h-24 bg-[#3498DB] rounded-full mix-blend-multiply opacity-80 hidden md:block"></div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-5 lg:px-10 bg-white relative z-10" style={{ borderRadius: '80px 80px 0 0', boxShadow: '0 -10px 40px rgba(0,0,0,0.03)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black text-[#2C3E50] mb-16">Why Kidzee?</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌱', title: 'Illume Pedagogy', desc: 'Our proprietary curriculum tailored to each child\'s learning style.', color: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
              { icon: '🧸', title: 'Safe Spaces', desc: 'Child-friendly infrastructure with round-the-clock security and care.', color: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200' },
              { icon: '🎨', title: 'Holistic Growth', desc: 'Focusing on motor, social, emotional, and cognitive development.', color: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
              { icon: '👩‍🏫', title: 'Expert Carers', desc: 'Trained educators who understand early childhood psychology.', color: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200' }
            ].map((feature, i) => (
              <div key={i} className={`flex flex-col items-center text-center p-8 rounded-[2.5rem] border-2 ${feature.border} hover:bg-[#FDFBF7] hover:-translate-y-2 transition-all duration-300`}>
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl mb-6 ${feature.color} shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.text}`}>{feature.title}</h3>
                <p className="text-[#7F8C8D] font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-[#ECF0F1] pt-16 pb-8 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Ready to start the journey?</h2>
          <p className="mb-10 text-xl text-[#BDC3C7]">Visit Kidzee Rajendranagar today and experience the joy of learning.</p>
          <button className="bg-[#2ECC71] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#27AE60] hover:-translate-y-1 transition-all shadow-xl shadow-green-900/50 mb-16 inline-block">
            Contact Us Today
          </button>
          <div className="border-t border-[#34495E] pt-8 text-sm text-[#7F8C8D]">
             © {new Date().getFullYear()} Kidzee Rajendranagar.
          </div>
        </div>
      </footer>
    </main>
  );
}

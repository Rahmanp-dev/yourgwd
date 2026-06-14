import React from 'react';

export default function KangarooKidsPage() {
  return (
    <main className="font-sans text-slate-800 selection:bg-teal-200">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl">K</div>
          <span className="font-extrabold text-2xl tracking-tight text-teal-600">Kangaroo Kids</span>
        </div>
        <div className="hidden md:flex gap-8 font-semibold text-slate-600">
          <a href="#about" className="hover:text-teal-500 transition-colors">About Us</a>
          <a href="#programs" className="hover:text-teal-500 transition-colors">Programs</a>
          <a href="#facilities" className="hover:text-teal-500 transition-colors">Facilities</a>
        </div>
        <a href="#admissions" className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-md shadow-red-200" style={{ backgroundColor: '#F87171' }}>
          Enroll Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 lg:px-12 overflow-hidden flex flex-col md:flex-row items-center gap-12 bg-[#FFFDF8]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="flex-1 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-bold text-sm mb-6 border border-teal-200 shadow-sm">
            Admissions Open 2024-25 🌟
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-800">
            Where learning feels like <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">magic.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Welcome to Kangaroo Kids Rajendranagar. We provide a joyful, safe, and stimulating environment that celebrates every child's unique potential.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#admissions" className="px-8 py-4 rounded-full bg-teal-500 text-white font-bold text-lg hover:bg-teal-600 shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-1">
              Book a Tour
            </a>
            <a href="#programs" className="px-8 py-4 rounded-full bg-white text-teal-600 border-2 border-teal-100 font-bold text-lg hover:border-teal-300 transition-all hover:-translate-y-1">
              Explore Programs
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative z-10 w-full max-w-lg">
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
              alt="Happy children learning"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Award Winning</p>
                <p className="font-extrabold text-slate-700">Preschool Curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Features */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-800">The Kangaroo Kids Difference</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Our proven methodology focuses on experiential learning, ensuring your child develops a lifelong love for discovery.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-amber-50 border border-amber-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-amber-200 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Creative Arts</h3>
              <p className="text-slate-600 leading-relaxed">Encouraging self-expression through painting, music, and dramatic play in our dedicated creative studios.</p>
            </div>
            
            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-teal-50 border border-teal-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-teal-200 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🧠</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Cognitive Growth</h3>
              <p className="text-slate-600 leading-relaxed">Interactive puzzles, early math concepts, and science experiments designed for little hands.</p>
            </div>
            
            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-blue-200 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🏃‍♂️</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Physical Activity</h3>
              <p className="text-slate-600 leading-relaxed">Spacious outdoor play areas and structured physical education to build gross motor skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 lg:px-12 text-center rounded-t-[3rem]">
        <h2 className="text-3xl font-extrabold mb-6">Come see the magic yourself!</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">Located in the heart of Rajendranagar, our campus is designed entirely around the needs of young learners.</p>
        <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors">
          Schedule a Visit
        </button>
        <div className="mt-12 text-slate-500 text-sm">
          © {new Date().getFullYear()} Kangaroo Kids Rajendranagar. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

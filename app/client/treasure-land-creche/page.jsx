import React from 'react';
import { Sparkles, Heart, Shield, BookOpen, Clock, Phone } from 'lucide-react';

export default function TreasureLandPage() {
  return (
    <main className="overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FFD3B6] rounded-full flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <span className="treasure-font-display text-2xl font-bold text-slate-800 tracking-tight">
            Treasure Land
          </span>
        </div>
        <button className="hidden md:block bg-white/50 backdrop-blur-md px-6 py-2 rounded-full font-bold text-slate-700 shadow-sm border border-white/60 hover:bg-white transition-all">
          Book a Tour
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#A8E6CF]/40 blob-shape blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-[#FFAAA5]/30 blob-shape-2 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-bold text-slate-600 shadow-sm border border-white/60">
              <Sparkles size={16} className="text-[#FFAAA5]" />
              Rajendranagar's Most Loved Crèche
            </div>
            <h1 className="treasure-font-display text-5xl md:text-7xl font-bold text-slate-800 leading-[1.1]">
              Where every <br/>
              <span className="text-[#FFAAA5] relative inline-block">
                little step
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#FFD3B6]/60 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="8" fill="none"/>
                </svg>
              </span>
              <br/>is a big leap.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-md leading-relaxed">
              A magical, safe, and playful environment for your child to grow, learn, and discover their unique treasures.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#FFAAA5] text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_20px_-6px_rgba(255,170,165,0.6)] hover:translate-y-[-2px] hover:shadow-[0_12px_25px_-6px_rgba(255,170,165,0.7)] transition-all duration-300">
                Enroll Now
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold shadow-sm border border-slate-100 hover:bg-slate-50 transition-all duration-300">
                Our Programs
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 w-full aspect-square md:aspect-[4/5] blob-shape overflow-hidden border-8 border-white shadow-2xl shadow-[#A8E6CF]/20">
              <img 
                src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy child painting" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-3xl shadow-xl shadow-black/5 animate-bounce" style={{animationDuration: '3s'}}>
              <Heart className="text-[#FFAAA5]" fill="#FFAAA5" size={24} />
            </div>
            <div className="absolute bottom-20 -right-8 bg-white p-4 rounded-3xl shadow-xl shadow-black/5 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <BookOpen className="text-[#A0C4FF]" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="treasure-font-display text-4xl md:text-5xl font-bold text-slate-800">
              A Home Away From Home
            </h2>
            <p className="text-slate-600 text-lg">
              We provide the highest quality care with a focus on your child's emotional, physical, and cognitive development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, color: '#A8E6CF', title: 'Safe & Secure', desc: '24/7 CCTV monitoring and strict pick-up protocols for your peace of mind.' },
              { icon: Heart, color: '#FFAAA5', title: 'Loving Staff', desc: 'Trained, certified, and compassionate caregivers who treat every child like family.' },
              { icon: Clock, color: '#FFD3B6', title: 'Flexible Hours', desc: 'Extended crèche hours designed for working parents in Rajendranagar.' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-[40px] bg-[#FDFBF7] border border-slate-100 hover:shadow-xl hover:shadow-[#A8E6CF]/10 transition-all duration-300 hover:-translate-y-2">
                <div 
                  className="w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 shadow-sm"
                  style={{ backgroundColor: feature.color + '40', color: feature.color }}
                >
                  <feature.icon size={32} />
                </div>
                <h3 className="treasure-font-display text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Bento Grid */}
      <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="treasure-font-display text-4xl md:text-5xl font-bold text-slate-800 mb-12">
            Our Care Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Infants */}
            <div className="md:col-span-2 md:row-span-2 rounded-[40px] overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Infant care" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#A0C4FF]/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="treasure-font-display text-3xl font-bold text-white mb-2">Infant Care</h3>
                <p className="text-white/90 text-lg">6 Months - 1.5 Years</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <span className="bg-white text-[#A0C4FF] px-4 py-2 rounded-full font-bold text-sm">Learn More</span>
                </div>
              </div>
            </div>
            {/* Toddlers */}
            <div className="md:col-span-2 rounded-[40px] overflow-hidden relative group bg-[#FFD3B6] p-8 flex flex-col justify-center">
              <h3 className="treasure-font-display text-3xl font-bold text-slate-800 mb-2">Toddler Playgroup</h3>
              <p className="text-slate-700 text-lg mb-6">1.5 Years - 3 Years</p>
              <p className="text-slate-600 mb-4">A structured play environment focusing on sensory development and early social skills.</p>
            </div>
            {/* Preschool */}
            <div className="rounded-[40px] overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1545607593-010375dc0b90?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Preschool" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFAAA5]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="treasure-font-display text-2xl font-bold text-white">Preschool</h3>
              </div>
            </div>
            {/* After School */}
            <div className="rounded-[40px] overflow-hidden relative group bg-[#A8E6CF] p-6 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
                <Sparkles className="text-slate-700" size={24} />
              </div>
              <div>
                <h3 className="treasure-font-display text-2xl font-bold text-slate-800 mb-1">After School</h3>
                <p className="text-slate-700">Up to 10 Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#FFAAA5] rounded-[40px] p-12 relative overflow-hidden shadow-2xl shadow-[#FFAAA5]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <h2 className="treasure-font-display text-4xl font-bold text-white mb-6 relative z-10">
              Ready to visit Treasure Land?
            </h2>
            <p className="text-white/90 text-lg mb-8 relative z-10">
              Schedule a visit to our Rajendranagar center and see the magic for yourself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-[#FFAAA5] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Book a Center Tour
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                <Phone size={20} />
                +91 98765 43210
              </button>
            </div>
          </div>
          <div className="mt-16 text-slate-400 text-sm">
            © {new Date().getFullYear()} Treasure Land Crèche & Preschool. Rajendranagar, Hyderabad.
          </div>
        </div>
      </footer>
    </main>
  );
}

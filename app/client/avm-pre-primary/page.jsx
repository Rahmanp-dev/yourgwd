import React from 'react';
import { Palette, Music, BookOpen, Star, Heart, Smile, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function AVMPrePrimaryPage() {
  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#F43F5E] flex items-center justify-center text-white font-bold text-xl blob-shape shadow-lg shadow-rose-200">
            A
          </div>
          <span className="heading-font text-2xl font-bold text-[#1E1B4B]">AVM Pre-primary</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-[#4F46E5]">
          <a href="#about" className="hover:text-[#F43F5E] transition-colors">About Us</a>
          <a href="#programs" className="hover:text-[#F43F5E] transition-colors">Programs</a>
          <a href="#gallery" className="hover:text-[#F43F5E] transition-colors">Gallery</a>
        </div>
        <button className="bg-[#FBBF24] text-[#1E1B4B] px-6 py-2 rounded-full font-bold shadow-[4px_4px_0px_#1E1B4B] hover:translate-y-1 hover:shadow-[2px_2px_0px_#1E1B4B] transition-all">
          Enroll Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-block bg-[#E0E7FF] text-[#4F46E5] px-4 py-1 rounded-full font-bold mb-6 border-2 border-[#4F46E5]">
            🌟 Welcome to Rajendranagar's Happiest Preschool
          </div>
          <h1 className="heading-font text-5xl md:text-7xl font-bold leading-tight mb-6">
            Where Learning Feels Like <span className="text-[#F43F5E]">Play!</span>
          </h1>
          <p className="text-xl text-[#3730A3] mb-8 max-w-lg font-medium">
            At AVM Pre-primary, we nurture your child's curiosity with vibrant colors, joyful music, and endless creativity.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#3B82F6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[4px_4px_0px_#1E1B4B] flex items-center gap-2 hover:translate-y-1 hover:shadow-[2px_2px_0px_#1E1B4B] transition-all">
              Join the Fun <ArrowRight size={20} />
            </button>
            <button className="bg-white text-[#1E1B4B] px-8 py-4 rounded-full font-bold text-lg border-2 border-[#1E1B4B] hover:bg-[#FEF08A] transition-colors">
              Take a Tour
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FBBF24] blob-shape -z-10 blur-xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F43F5E] blob-shape-2 -z-10 blur-xl opacity-30"></div>
          <img 
            src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=800" 
            alt="Happy kids learning" 
            className="w-full h-auto object-cover blob-shape border-8 border-white shadow-2xl"
          />
          
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl border-4 border-[#3B82F6] shadow-lg rotate-[-6deg]">
            <div className="flex gap-1 text-[#FBBF24]">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <p className="font-bold text-[#1E1B4B] mt-1">Loved by 500+ Parents</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-[#4F46E5] py-24 text-white relative">
        {/* Wavy top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.34,201.31,109.9Z" fill="#FEFCE8"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4 text-[#FBBF24]">Why Kids Love AVM!</h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">Our unique approach blends play-based learning with structured developmental activities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Palette size={32} />, title: 'Creative Arts', color: 'bg-[#F43F5E]', desc: 'Finger painting, crafts, and messy play that sparks imagination.' },
              { icon: <Music size={32} />, title: 'Music & Movement', color: 'bg-[#FBBF24]', desc: 'Daily sing-alongs and dance sessions to build motor skills.' },
              { icon: <BookOpen size={32} />, title: 'Story Time', color: 'bg-[#3B82F6]', desc: 'Immersive storytelling that builds early literacy and vocabulary.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white text-[#1E1B4B] p-8 rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform border-4 border-transparent hover:border-[#FBBF24]">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 -rotate-6`}>
                  {feature.icon}
                </div>
                <h3 className="heading-font text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wavy bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.34,201.31,109.9Z" fill="#FEFCE8"></path>
          </svg>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F43F5E] text-white rounded-full mb-6 shadow-xl animate-bounce">
          <Heart size={40} />
        </div>
        <h2 className="heading-font text-4xl font-bold mb-6">Ready to Start the Adventure?</h2>
        <p className="text-xl text-[#3730A3] mb-10 font-medium">Admissions open for the upcoming academic year. Limited seats available in our Rajendranagar campus.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md border-2 border-indigo-100 text-left">
            <Phone className="text-[#3B82F6]" />
            <div>
              <p className="text-sm text-gray-500 font-bold">Call Us</p>
              <p className="font-bold text-[#1E1B4B]">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md border-2 border-indigo-100 text-left">
            <MapPin className="text-[#F43F5E]" />
            <div>
              <p className="text-sm text-gray-500 font-bold">Visit Us</p>
              <p className="font-bold text-[#1E1B4B]">Rajendranagar, Hyd</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

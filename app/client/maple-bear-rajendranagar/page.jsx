'use client';
import React, { useState } from 'react';

export default function MapleBearPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#E31837] rounded-full flex items-center justify-center text-white font-bold font-[family-name:var(--font-fredoka)] text-xl">
            MB
          </div>
          <span className="font-[family-name:var(--font-fredoka)] text-2xl font-semibold text-[#E31837] tracking-wide">
            Maple Bear <span className="text-[#2E8B57]">Rajendranagar</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-[#8B5A2B]">
          <a href="#about" className="hover:text-[#E31837] transition-colors">Our Philosophy</a>
          <a href="#programs" className="hover:text-[#E31837] transition-colors">Programs</a>
          <a href="#admissions" className="hover:text-[#E31837] transition-colors">Admissions</a>
        </div>
        <button className="bg-[#E31837] text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-[#C2142E] transition-all transform hover:scale-105 active:scale-95">
          Enroll Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 pt-12 pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-block bg-[#FDE8E8] text-[#E31837] px-4 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase">
            Canadian Bilingual Education
          </div>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-fredoka)] leading-tight text-[#3E2723]">
            Where Learning feels like <span className="text-[#E31837] relative inline-block">Playing
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#FFB612]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>.
          </h1>
          <p className="text-xl text-[#5C4033] max-w-lg leading-relaxed">
            Welcome to Maple Bear Rajendranagar. We bring the best of Canadian early childhood education to Hyderabad, fostering curiosity, creativity, and bilingual confidence in a safe, nurturing environment.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-[#E31837] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-red-200 hover:bg-[#C2142E] transition-all transform hover:-translate-y-1">
              Book a Campus Tour
            </button>
            <button className="bg-white text-[#E31837] px-8 py-4 rounded-2xl font-bold border-2 border-[#E31837] hover:bg-[#FDE8E8] transition-colors">
              Our Curriculum
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#FFB612] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute inset-0 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -top-10 -right-10"></div>
          <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#E31837] rounded-[2.5rem] p-12 aspect-square flex flex-col items-center justify-center text-center overflow-hidden relative">
              {/* Abstract Canadian/Nature representation */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFB612] opacity-20 rounded-full -ml-20 -mb-20"></div>
              <h2 className="font-[family-name:var(--font-fredoka)] text-white text-4xl mb-4 z-10">Bilingual Immersion</h2>
              <p className="text-[#FDE8E8] text-lg font-medium z-10">Learning English and local languages naturally, just like a mother tongue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="bg-white py-24 relative overflow-hidden">
        {/* Soft wave divider top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none text-[#FDFBF7]">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-fredoka)] text-[#3E2723] mb-6">The Canadian Way</h2>
            <p className="text-xl text-[#5C4033]">Canada consistently ranks among the top countries in the world for education. We bring that globally recognized methodology right to your neighborhood in Rajendranagar.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Student Focused', desc: 'Every child is unique. Our centers are designed to be safe, stimulating, and tailored to individual learning styles.', color: 'bg-[#FDE8E8]', iconColor: 'text-[#E31837]' },
              { title: 'Learning by Doing', desc: 'Children learn best through sensory experiences, exploration, and discovery rather than rote memorization.', color: 'bg-[#E8F3EB]', iconColor: 'text-[#2E8B57]' },
              { title: 'Safe & Nurturing', desc: 'Stringent safety protocols and warm, trained educators ensure your little bear is always in good hands.', color: 'bg-[#FFF6E5]', iconColor: 'text-[#FFB612]' }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.color} p-10 rounded-[2.5rem] transition-transform hover:-translate-y-2`}>
                <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center ${feature.iconColor} font-bold text-2xl mb-6 shadow-sm`}>
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-fredoka)] text-[#3E2723] mb-4">{feature.title}</h3>
                <p className="text-[#5C4033] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E8B57] text-[#FDFBF7] py-16">
        <div className="max-w-7xl mx-auto px-8 text-center space-y-6">
          <h2 className="text-3xl font-[family-name:var(--font-fredoka)]">Maple Bear Canadian Preschool</h2>
          <p className="text-lg opacity-90 max-w-md mx-auto">Rajendranagar, Hyderabad, Telangana</p>
          <div className="pt-8 border-t border-white/20 opacity-80 text-sm">
            © {new Date().getFullYear()} Maple Bear Rajendranagar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { ArrowRight, Star, Award, MapPin, CheckCircle, GraduationCap } from 'lucide-react';

export default function LittleMillenniumPage() {
  return (
    <main className="bg-white overflow-hidden selection:bg-[#FFB703] selection:text-[#14213D]">
      {/* Top Bar */}
      <div className="bg-[#14213D] text-white text-sm py-2 px-6 justify-between items-center hidden md:flex">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={14} className="text-[#FFB703]"/> Rajendranagar Branch</span>
          <span className="flex items-center gap-1"><Star size={14} className="text-[#FFB703]"/> Admissions Open 2026-27</span>
        </div>
        <div>Call us: +91 99887 76655</div>
      </div>

      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b-[3px] border-[#14213D] bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E63946] border-2 border-[#14213D] brutal-shadow flex items-center justify-center">
            <span className="text-white font-black lm-font-display text-xl leading-none">LM</span>
          </div>
          <span className="lm-font-display text-2xl font-black text-[#14213D] uppercase tracking-wide">
            Little Millennium
          </span>
        </div>
        <div className="hidden md:flex gap-8 lm-font-display font-bold text-[#14213D]">
          <a href="#" className="hover:text-[#E63946] transition-colors">Curriculum</a>
          <a href="#" className="hover:text-[#E63946] transition-colors">Facilities</a>
          <a href="#" className="hover:text-[#E63946] transition-colors">Admissions</a>
        </div>
        <button className="bg-[#FFB703] text-[#14213D] px-6 py-2 brutal-shadow brutal-shadow-hover transition-all lm-font-display font-bold uppercase text-sm">
          Apply Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#2A9D8F] rounded-full border-[3px] border-[#14213D] -z-10 opacity-20 hidden md:block" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-[#E63946] rotate-45 border-[3px] border-[#14213D] -z-10 opacity-20 hidden md:block" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-[#E63946] text-white px-4 py-1 lm-font-display font-bold uppercase tracking-wider text-sm border-2 border-[#14213D] brutal-shadow -rotate-2">
                #1 Preschool in Rajendranagar
              </div>
              <h1 className="lm-font-display text-6xl lg:text-8xl font-black text-[#14213D] leading-[0.95] uppercase">
                Igniting <br/>
                <span className="text-[#FFB703] text-stroke">Young</span><br/>
                Minds.
              </h1>
              <p className="text-xl text-slate-700 font-medium max-w-lg border-l-4 border-[#2A9D8F] pl-4">
                Award-winning Seven-Petal curriculum designed to build a strong foundation for your child's cognitive, physical, and social development.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-[#14213D] text-white px-8 py-4 brutal-shadow brutal-shadow-hover transition-all lm-font-display font-bold uppercase text-lg flex items-center gap-2">
                  Enroll Today <ArrowRight size={20} />
                </button>
                <button className="bg-white text-[#14213D] px-8 py-4 brutal-shadow brutal-shadow-hover transition-all lm-font-display font-bold uppercase text-lg border-2 border-[#14213D]">
                  Download Brochure
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-slate-200">
                <div>
                  <div className="lm-font-display text-3xl font-black text-[#E63946]">15+</div>
                  <div className="text-sm font-bold text-slate-600 uppercase">Years Exp.</div>
                </div>
                <div>
                  <div className="lm-font-display text-3xl font-black text-[#2A9D8F]">500+</div>
                  <div className="text-sm font-bold text-slate-600 uppercase">Happy Kids</div>
                </div>
                <div>
                  <div className="lm-font-display text-3xl font-black text-[#FFB703]">10:1</div>
                  <div className="text-sm font-bold text-slate-600 uppercase">Ratio</div>
                </div>
              </div>
            </div>

            {/* Hero Images Grid */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFB703] translate-x-4 translate-y-4 border-[3px] border-[#14213D]" />
              <img 
                src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1000&auto=format&fit=crop" 
                alt="Children learning"
                className="relative z-10 w-full h-[500px] object-cover border-[3px] border-[#14213D] grayscale-[20%] contrast-125"
              />
              {/* Badge */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-[#E63946] text-white p-6 rounded-full border-[3px] border-[#14213D] w-32 h-32 flex flex-col items-center justify-center text-center transform -rotate-12 brutal-shadow">
                <Award size={32} className="mb-1" />
                <span className="lm-font-display font-black text-sm uppercase leading-tight">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y-[3px] border-[#14213D] bg-[#FFB703] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex gap-12 items-center lm-font-display font-black text-2xl text-[#14213D] uppercase">
          <span>★ Seven Petal Curriculum</span>
          <span>★ Phonics Based Reading</span>
          <span>★ Safe & Secure Campus</span>
          <span>★ Child Centric Environment</span>
          <span>★ Seven Petal Curriculum</span>
          <span>★ Phonics Based Reading</span>
        </div>
        <style dangerouslySetInnerHTML={{__html:`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}}/>
      </div>

      {/* Curriculum Section */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-[3px] border-[#14213D] pb-6">
            <div>
              <h2 className="lm-font-display text-5xl md:text-6xl font-black text-[#14213D] uppercase">Programs</h2>
              <p className="text-xl text-slate-600 font-medium mt-2">Age-appropriate learning tracks.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold text-[#E63946] hover:text-[#14213D] transition-colors uppercase tracking-wide">
              View Curriculum <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Developing Roots', age: '2 - 3 Years', color: '#2A9D8F', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop' },
              { title: 'Emerging Wings', age: '3 - 4 Years', color: '#FFB703', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop' },
              { title: 'Ready to Fly', age: '4 - 5 Years', color: '#E63946', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop' }
            ].map((prog, idx) => (
              <div key={idx} className="bg-white border-[3px] border-[#14213D] brutal-shadow group relative overflow-hidden flex flex-col">
                <div className="h-48 border-b-[3px] border-[#14213D] relative overflow-hidden bg-slate-100">
                  <img src={prog.img} className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" alt={prog.title} />
                  <div className="absolute top-4 left-4 bg-white border-2 border-[#14213D] px-3 py-1 font-bold text-sm brutal-shadow">
                    {prog.age}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="lm-font-display text-2xl font-black text-[#14213D] uppercase mb-3" style={{color: prog.color}}>
                      {prog.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-slate-700 font-medium">
                        <CheckCircle size={18} className="shrink-0 mt-0.5" style={{color: prog.color}} />
                        Motor skills development
                      </li>
                      <li className="flex items-start gap-2 text-slate-700 font-medium">
                        <CheckCircle size={18} className="shrink-0 mt-0.5" style={{color: prog.color}} />
                        Language & phonics
                      </li>
                    </ul>
                  </div>
                  <button className="w-full py-3 border-[3px] border-[#14213D] font-bold uppercase tracking-wider hover:bg-[#14213D] hover:text-white transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-[#E63946] border-y-[3px] border-[#14213D] py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <GraduationCap size={64} className="mx-auto text-white mb-6" />
          <h2 className="lm-font-display text-4xl md:text-6xl font-black text-white uppercase mb-6 drop-shadow-[4px_4px_0_#14213D]">
            Secure Their Future Today
          </h2>
          <p className="text-white text-xl font-medium mb-10 max-w-2xl mx-auto">
            Admissions for the upcoming academic year are filling fast. Give your child the Little Millennium advantage in Rajendranagar.
          </p>
          <button className="bg-[#FFB703] text-[#14213D] px-10 py-5 brutal-shadow brutal-shadow-hover transition-all lm-font-display font-black uppercase text-xl border-[3px] border-[#14213D]">
            Schedule a Campus Tour
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14213D] text-white pt-16 pb-8 px-6 border-t-[8px] border-[#2A9D8F]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white border-2 border-[#FFB703] flex items-center justify-center">
                <span className="text-[#14213D] font-black lm-font-display text-xl leading-none">LM</span>
              </div>
              <span className="lm-font-display text-2xl font-black text-white uppercase tracking-wide">
                Little Millennium
              </span>
            </div>
            <p className="text-slate-400 font-medium max-w-sm mb-6">
              Rajendranagar's premier preschool offering world-class early childhood education through our proprietary Seven-Petal curriculum.
            </p>
            <div className="flex items-start gap-3 text-slate-300 font-medium">
              <MapPin className="text-[#FFB703] shrink-0 mt-1" />
              <p>Plot No. 45, Beside Central Park,<br/>Rajendranagar, Hyderabad - 500030</p>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="lm-font-display font-black text-2xl mb-6 text-[#FFB703] uppercase">Quick Links</h3>
            <div className="flex flex-col gap-3 font-medium text-slate-300">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Our Curriculum</a>
              <a href="#" className="hover:text-white transition-colors">Photo Gallery</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-700 pt-8 text-center text-slate-500 font-medium text-sm">
          © {new Date().getFullYear()} Little Millennium Rajendranagar. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

import React from 'react';
import { Leaf, Sun, Heart, User, Book, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function EminentTinyTotsPage() {
  return (
    <div className="overflow-hidden">
      {/* Top Bar */}
      <div className="bg-[#064E3B] text-[#D1FAE5] py-2 px-6 text-sm flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={14} /> Rajendranagar, Hyderabad</span>
          <span className="flex items-center gap-1"><Phone size={14} /> +91 99887 76655</span>
        </div>
        <div className="hidden sm:block">
          Admissions open for 2026-27 | Enquire Now
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Leaf className="text-[#059669]" size={32} />
          <span className="heading-font text-2xl font-bold tracking-tight text-[#064E3B]">Eminent Tiny Tots</span>
        </div>
        <div className="hidden md:flex gap-8 text-[#064E3B] font-semibold">
          <a href="#philosophy" className="hover:text-[#059669] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#059669] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Philosophy</a>
          <a href="#environment" className="hover:text-[#059669] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#059669] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Environment</a>
          <a href="#curriculum" className="hover:text-[#059669] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#059669] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Curriculum</a>
        </div>
        <button className="bg-[#059669] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#047857] hover:shadow-lg hover:shadow-emerald-200 transition-all">
          Book a Visit
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <span className="text-[#059669] font-bold tracking-widest uppercase text-sm mb-4 block">Holistic Early Learning</span>
          <h1 className="heading-font text-5xl md:text-6xl font-normal leading-[1.1] mb-6 text-[#064E3B]">
            Cultivating <span className="text-[#059669] italic">Curiosity</span> in a Mindful Space
          </h1>
          <p className="text-lg text-[#065F46] mb-10 max-w-lg leading-relaxed font-light">
            Eminent Tiny Tots provides a peaceful, nature-inspired environment where children can grow at their own pace, fostering deep connections with the world around them.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#064E3B] text-[#F0FDF4] px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-[#022C22] transition-colors">
              Explore Our Approach <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Organic background shapes */}
          <div className="absolute top-10 right-10 w-full h-full bg-[#D1FAE5] leaf-radius -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#FEF3C7] rounded-full -z-10 blur-2xl opacity-60"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=800" 
            alt="Child engaged in organic learning" 
            className="w-full h-auto object-cover leaf-radius shadow-xl"
          />
          
          <div className="absolute bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-lg flex items-center gap-4">
            <div className="bg-[#FEF3C7] p-3 rounded-full text-[#D97706]">
              <Sun size={24} />
            </div>
            <div>
              <p className="font-bold text-[#064E3B]">Natural Light</p>
              <p className="text-sm text-[#065F46]">Airy classrooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Soft decorative blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ECFDF5] rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="heading-font text-3xl md:text-4xl font-normal text-[#064E3B] mb-6 leading-tight">
                Our Educational <br/> <span className="text-[#059669] italic">Philosophy</span>
              </h2>
              <p className="text-[#065F46] font-light leading-relaxed mb-8">
                We believe that children are natural learners. Our educators act as guides, creating an environment that sparks inquiry, encourages compassion, and builds resilience.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#059669] font-semibold hover:gap-3 transition-all">
                Read our full manifesto <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
              {[
                { icon: <Leaf size={24} />, title: 'Nature-Integrated', desc: 'Outdoor classrooms and organic gardens where children learn from the earth.' },
                { icon: <Heart size={24} />, title: 'Mindful Practices', desc: 'Daily activities that build emotional intelligence and self-regulation.' },
                { icon: <User size={24} />, title: 'Child-Led Learning', desc: 'Curriculum that adapts to the unique interests and pace of each child.' },
                { icon: <Book size={24} />, title: 'Sensory Rich', desc: 'High-quality, sustainable materials that engage all the senses.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#D1FAE5] hover:bg-[#ECFDF5] transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#059669] mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-[#064E3B] mb-2">{item.title}</h3>
                  <p className="text-[#065F46] font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple elegant CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-[#064E3B] text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14B8A6] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="heading-font text-3xl font-normal mb-6">Begin Your Child's Journey</h2>
            <p className="text-[#A7F3D0] mb-8 font-light text-lg max-w-xl mx-auto">
              We invite you to experience our tranquil environment firsthand. Schedule a visit to our Rajendranagar center.
            </p>
            <button className="bg-white text-[#064E3B] px-8 py-3.5 rounded-full font-semibold hover:bg-[#F0FDF4] transition-colors">
              Schedule a Guided Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

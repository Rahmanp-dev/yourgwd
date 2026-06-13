import React from 'react';
import { Heart, Sparkles, UserPlus, Phone, Calendar, ArrowRight, ArrowUpRight, Star } from 'lucide-react';

export default function CionCancerClinics() {
  return (
    <div className="min-h-screen bg-[#FCF8F5] font-sans text-neutral-800">
      {/* Top Banner */}
      <div className="bg-[#5D3A5D] text-white py-2 text-center text-sm font-medium">
        CION Cancer Clinics is now open in Tolichowki, Hyderabad. <a href="#book" className="underline hover:text-rose-200 ml-1">Book a consultation today.</a>
      </div>

      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-rose-500 text-white p-2 rounded-xl">
            <Heart size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#2D1B2D]">CION <span className="font-light">Clinics</span></span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-neutral-600">
          <a href="#" className="hover:text-rose-600 transition-colors">Our Approach</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Treatments</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Specialists</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Patient Stories</a>
        </div>
        <div className="flex gap-4">
          <button className="hidden sm:flex items-center justify-center font-medium text-[#5D3A5D] px-5 py-2.5 rounded-full border border-[#5D3A5D] hover:bg-[#5D3A5D] hover:text-white transition-all">
            <Phone size={18} className="mr-2" /> 1800-CION-CARE
          </button>
          <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-2.5 rounded-full shadow-lg shadow-rose-500/20 transition-all flex items-center">
            Book Appointment <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-60"></div>
          
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-[600px] border-4 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Compassionate Care" 
              className="w-full h-full object-cover"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=faces" className="w-12 h-12 rounded-full border-2 border-white" alt="Doctor" />
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=faces" className="w-12 h-12 rounded-full border-2 border-white" alt="Doctor" />
                  <img src="https://images.unsplash.com/photo-1594824467004-984cd12d9737?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=faces" className="w-12 h-12 rounded-full border-2 border-white" alt="Doctor" />
                </div>
                <div>
                  <p className="font-bold text-[#2D1B2D]">Expert Oncology Board</p>
                  <p className="text-sm text-neutral-600">Personalized care plans for every patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-800 font-medium text-sm mb-6">
            <Sparkles size={16} /> World-class Oncology Care in Tolichowki
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2D1B2D] leading-[1.1] mb-6">
            Hope meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-[#5D3A5D]">advanced care.</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-lg">
            At CION Cancer Clinics, we combine leading-edge medical treatments with deep compassion to support you at every step of your journey to recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2D1B2D] hover:bg-black text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all text-lg flex justify-center items-center">
              Find a Specialist
            </button>
            <button className="bg-white hover:bg-rose-50 text-[#2D1B2D] font-medium px-8 py-4 rounded-full border border-neutral-200 transition-all text-lg flex justify-center items-center">
              Learn About Treatments
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2D1B2D] mb-6">More than treatment. <br />It's comprehensive healing.</h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Cancer doesn't just affect the body; it impacts the mind, spirit, and family. Our multidisciplinary approach ensures that you receive holistic care tailored to your unique biological and emotional needs.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Precision Medicine", desc: "Genomic profiling to identify the most effective treatments for your specific cancer type." },
                  { title: "Compassionate Support", desc: "Dedicated patient navigators, psychological counseling, and nutritional guidance." },
                  { title: "Advanced Technology", desc: "Latest modalities in radiation and minimally invasive surgical oncology." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D1B2D] mb-2">{item.title}</h3>
                      <p className="text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Clinic Interior" className="w-full rounded-2xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Patient Care" className="w-full rounded-2xl shadow-md" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Medical Tech" className="w-full rounded-2xl shadow-md" />
                <div className="bg-[#5D3A5D] rounded-2xl p-6 text-white shadow-md flex flex-col justify-center h-48">
                  <Star className="text-amber-400 mb-3" size={32} />
                  <p className="font-medium text-lg leading-tight">"The care and empathy shown by the team gave me the strength to fight."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#2D1B2D] mb-4">Our Medical Disciplines</h2>
            <p className="text-lg text-neutral-600">Bringing together the finest minds in oncology to deliver evidence-based, multidisciplinary care under one roof.</p>
          </div>
          <button className="flex items-center gap-2 font-semibold text-rose-600 hover:text-rose-700 transition-colors">
            View all departments <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Medical Oncology", desc: "Chemotherapy, targeted therapy, and immunotherapy protocols customized for optimal outcomes." },
            { title: "Radiation Oncology", desc: "Highly precise radiation delivery minimizing damage to healthy tissues." },
            { title: "Surgical Oncology", desc: "Minimally invasive and robotic-assisted tumor removal surgeries." }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 bg-[#FCF8F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <Heart className="text-[#5D3A5D] group-hover:text-rose-600 transition-colors" size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-[#2D1B2D] mb-4">{service.title}</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">{service.desc}</p>
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[#5D3A5D] group-hover:border-[#5D3A5D] group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="bg-[#2D1B2D] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Take the first step towards recovery.</h2>
            <p className="text-xl text-white/80 mb-10">
              Our specialists at the Tolichowki center are ready to review your case and design a personalized treatment roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-4 rounded-full transition-all text-lg flex items-center justify-center">
                <Calendar className="mr-2" size={20} /> Schedule Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-sm">
                <Phone className="mr-2" size={20} /> Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-rose-500 text-white p-2 rounded-xl">
                <Heart size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#2D1B2D]">CION <span className="font-light">Clinics</span></span>
            </div>
            <div className="flex gap-6 text-sm font-medium text-neutral-600">
              <a href="#" className="hover:text-[#5D3A5D]">About Us</a>
              <a href="#" className="hover:text-[#5D3A5D]">Careers</a>
              <a href="#" className="hover:text-[#5D3A5D]">Patient Portal</a>
              <a href="#" className="hover:text-[#5D3A5D]">Contact</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 text-neutral-500 text-sm">
            <p>© {new Date().getFullYear()} CION Cancer Clinics. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Located in Tolichowki, Hyderabad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

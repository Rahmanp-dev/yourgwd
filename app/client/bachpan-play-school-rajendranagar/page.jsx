import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Heart } from 'lucide-react';

export default function BachpanPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#E32636] rounded-full flex items-center justify-center text-white font-bold text-2xl rotate-[-5deg]">B</div>
            <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center text-white font-bold text-2xl rotate-[5deg] -ml-4">P</div>
            <div className="w-12 h-12 bg-[#1E88E5] rounded-full flex items-center justify-center text-white font-bold text-2xl rotate-[-5deg] -ml-4">S</div>
            <span className="ml-2 font-black text-2xl tracking-tight text-[#E32636]">
              BACHPAN <span className="text-[#1E88E5] font-semibold text-lg">Rajendranagar</span>
            </span>
          </div>
          <a href="#admissions" className="bg-[#E32636] text-white px-6 py-2 rounded-full font-bold hover:bg-[#C61E2D] transition-transform hover:scale-105 shadow-md">
            Enroll Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#FFFDF7]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC107] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1E88E5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#E8F4FD] text-[#1E88E5] font-bold text-sm mb-6 border border-[#1E88E5]/20">
              🏆 #1 Play School in Rajendranagar
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Where <span className="text-[#E32636]">Learning</span> Meets <span className="text-[#FFC107]">Joy</span> Every Day
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-medium">
              Give your child the perfect foundation for a lifetime of success in a safe, colorful, and loving environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#admissions" className="bg-[#1E88E5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1565C0] transition-all shadow-[0_8px_20px_-6px_rgba(30,136,229,0.5)] hover:-translate-y-1">
                Book a Campus Tour
              </a>
              <a href="tel:+919876543210" className="bg-white text-[#E32636] border-2 border-[#E32636] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFF0F0] transition-all flex items-center gap-2">
                <Phone size={20} /> Call Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 z-10">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" alt="Happy child playing" className="w-full h-auto object-cover aspect-4/3" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFC107] rounded-full z-0 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#E32636] rounded-full z-20 flex items-center justify-center text-white text-3xl font-black transform -rotate-12 shadow-xl border-4 border-white">
              <div className="text-center leading-none">
                <div>15+</div>
                <div className="text-sm font-medium">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Our <span className="text-[#1E88E5]">Programs</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Age-appropriate curriculum designed to nurture curiosity and build fundamental skills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Play Group", age: "2 - 3 Years", color: "#E32636", lightBg: "#FFF0F1", icon: "🧸" },
              { title: "Nursery", age: "3 - 4 Years", color: "#FFC107", lightBg: "#FFFDE7", icon: "🎨" },
              { title: "LKG", age: "4 - 5 Years", color: "#4CAF50", lightBg: "#E8F5E9", icon: "📚" },
              { title: "UKG", age: "5 - 6 Years", color: "#1E88E5", lightBg: "#E3F2FD", icon: "🚀" }
            ].map((program, idx) => (
              <div key={idx} className="rounded-3xl p-8 border-2 transition-transform hover:-translate-y-2 cursor-pointer" style={{ borderColor: program.color, backgroundColor: program.lightBg }}>
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{program.title}</h3>
                <div className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: 'white', color: program.color }}>
                  {program.age}
                </div>
                <p className="text-gray-700 font-medium">Focused on holistic development and interactive learning.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=800&auto=format&fit=crop" alt="Classroom" className="rounded-[3rem] shadow-xl border-8 border-white" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-gray-900 mb-8">Why Parents Love <br/> <span className="text-[#E32636]">Bachpan Rajendranagar</span></h2>
              
              <div className="space-y-6">
                {[
                  { title: "Child-Centric Infrastructure", desc: "Colorful, safe, and hygienic campus designed purely for little ones.", color: "#E32636" },
                  { title: "Smart Classes", desc: "Interactive digital learning tools to make education fun and engaging.", color: "#1E88E5" },
                  { title: "Montessori Methodology", desc: "Learning through play, discovery, and hands-on activities.", color: "#4CAF50" },
                  { title: "CCTV Surveillance", desc: "100% secure campus with complete transparency for parents.", color: "#FFC107" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mt-1">
                      <CheckCircle size={28} color={feature.color} weight="fill" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFC107] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
               <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000" d="M42.7,-73.4C56.6,-66.1,69.9,-56.3,79.5,-43.3C89.1,-30.3,94.9,-15.1,95.3,0.2C95.6,15.6,90.4,31.2,80.7,43.9C71,56.6,56.8,66.4,41.9,73.1C27,79.8,11.5,83.4,-4.3,83.5C-20,83.6,-39.9,80.1,-55.1,71.2C-70.3,62.3,-80.7,48,-86.3,32.2C-91.8,16.4,-92.4,-0.8,-88.4,-16.9C-84.4,-33,-75.7,-48.1,-63,-58.5C-50.3,-68.9,-33.5,-74.6,-18.2,-76.3C-2.9,-78,14,-75.7,28.8,-71.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-3/5">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Admissions Open 2026-27</h2>
                <p className="text-xl text-gray-800 font-medium mb-8">Secure your child's future today. Limited seats available for the upcoming academic year.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-6 py-4 rounded-xl">
                    <Phone className="text-[#E32636]" />
                    <div>
                      <div className="text-sm text-gray-600 font-bold">Call for Inquiry</div>
                      <div className="text-lg font-black text-gray-900">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-6 py-4 rounded-xl">
                    <Mail className="text-[#1E88E5]" />
                    <div>
                      <div className="text-sm text-gray-600 font-bold">Email Us</div>
                      <div className="text-lg font-black text-gray-900">info@bachpanrj.com</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/5 w-full">
                <form className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Quick Inquiry</h3>
                  <input type="text" placeholder="Parent's Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#E32636] focus:ring-2 focus:ring-[#E32636]/20 font-medium" />
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#E32636] focus:ring-2 focus:ring-[#E32636]/20 font-medium" />
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#E32636] focus:ring-2 focus:ring-[#E32636]/20 font-medium text-gray-600">
                    <option>Select Program</option>
                    <option>Play Group</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                  </select>
                  <button type="button" className="w-full bg-[#E32636] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#C61E2D] transition-colors shadow-lg">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E32636] font-bold text-xl">B</div>
                <span className="font-black text-xl tracking-tight text-white">BACHPAN</span>
              </div>
              <p className="text-gray-400 font-medium">A world of joy, learning, and infinite possibilities. Nurturing the leaders of tomorrow with love and care.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#FFC107]">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Our Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#admissions" className="hover:text-white transition-colors">Admissions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#1E88E5]">Contact Info</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="shrink-0 mt-1" size={20} />
                  <span>123, School Road, Phase 1, Rajendranagar, Hyderabad, Telangana 500030</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 font-medium text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Bachpan Play School Rajendranagar. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">Made with <Heart size={14} className="text-[#E32636]" fill="#E32636" /> for kids.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Brain, Smile, Phone, MapPin } from 'lucide-react';

export default function EuroKidsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] selection:bg-[#009E4F] selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#009E4F] to-[#007A3D] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">E</div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                Euro<span className="text-[#009E4F]">Kids</span>
                <span className="ml-2 text-sm font-medium text-slate-500 hidden sm:inline-block">Rajendranagar</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#eunoia" className="hover:text-[#009E4F] transition-colors">EUNOIA</a>
              <a href="#programs" className="hover:text-[#009E4F] transition-colors">Programs</a>
              <a href="#safety" className="hover:text-[#009E4F] transition-colors">Safety</a>
            </div>
            <a href="#admissions" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-[#009E4F] hover:bg-[#008A45] shadow-sm hover:shadow-md transition-all">
              Admissions Open
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative">
        <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-[#E8F5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#FFF3E0] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-[#009E4F] text-sm font-semibold mb-6">
                <Leaf size={16} /> Welcome to Mindful Learning
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                A Right Start for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009E4F] to-[#00C853]">Bright Future.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Discover the joy of learning with EuroKids Rajendranagar. Our mindful curriculum <span className="font-semibold text-slate-800">EUNOIA</span> ensures holistic development in a safe, child-first environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#admissions" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors">
                  Apply for Admission <ArrowRight size={18} />
                </a>
                <a href="tel:+918765432109" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                  Contact Center Head
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Parent" />
                  ))}
                </div>
                <div className="text-sm font-medium text-slate-600">
                  <div className="flex items-center text-[#FF9800]">
                    {[1,2,3,4,5].map((i) => <span key={i}>★</span>)}
                  </div>
                  Trusted by 500+ local parents
                </div>
              </div>
            </div>
            
            <div className="relative lg:ml-auto w-full max-w-lg mx-auto">
              <div className="aspect-[4/5] bg-gradient-to-tr from-[#009E4F] to-[#E8F5E9] rounded-[2.5rem] p-2 shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="EuroKids Learning" className="w-full h-full object-cover rounded-[2rem]" />
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">100% Safe</div>
                    <div className="text-xs text-slate-500 font-medium">Verified Campus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Curriculum Section */}
      <section id="eunoia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#009E4F] uppercase mb-3">Our Curriculum</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Introducing EUNOIA</h3>
            <p className="text-lg text-slate-600">Mindful learning that focuses on building a foundation for life. We nurture the Mind, Body, and Soul of your child.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Mindful Learning', icon: <Brain size={28} />, desc: 'Developing cognitive abilities through scientific approaches and engaging activities.', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
              { title: 'Spaced Repetition', icon: <Leaf size={28} />, desc: 'Ensuring long-term retention of concepts by revisiting them at optimal intervals.', color: 'from-[#009E4F] to-[#007A3D]', bg: 'bg-green-50' },
              { title: 'Right Start', icon: <Smile size={28} />, desc: 'A child-first approach prioritizing emotional well-being and social skills.', color: 'from-orange-400 to-orange-500', bg: 'bg-orange-50' }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.bg} p-8 rounded-3xl transition-transform hover:-translate-y-1`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${feature.color} mb-6 shadow-md`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Map */}
      <section id="programs" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#009E4F]/20 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Learning Programs</h2>
              <p className="text-slate-400 text-lg mb-8">Tailored experiences for every developmental stage, from toddlers to confident kindergarteners.</p>
              <ul className="space-y-4">
                {['Play Group (1.8 - 3 yrs)', 'Nursery (3 - 4 yrs)', 'EuroJunior (4 - 5 yrs)', 'EuroSenior (5 - 6 yrs)'].map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-[#009E4F]"></div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-2/3">
              <img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1000&auto=format&fit=crop" alt="Kids learning" className="rounded-3xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-[3rem] p-8 md:p-12 shadow-sm border border-green-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Start Their Journey</h2>
              <p className="text-slate-600">Admissions are now open. Leave your details and our center head will connect with you.</p>
            </div>
            
            <form className="max-w-2xl mx-auto space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Parent's Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009E4F] focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009E4F] focus:border-transparent transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Child's Age</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009E4F] focus:border-transparent transition-all text-slate-700">
                  <option>Select Age</option>
                  <option>1.8 - 3 Years</option>
                  <option>3 - 4 Years</option>
                  <option>4 - 5 Years</option>
                  <option>5 - 6 Years</option>
                </select>
              </div>
              <button type="button" className="w-full bg-[#009E4F] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#008A45] shadow-md hover:shadow-lg transition-all mt-6">
                Request a Callback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#009E4F] rounded-lg flex items-center justify-center text-white font-bold text-sm">E</div>
              <span className="font-extrabold text-xl text-slate-900">EuroKids</span>
            </div>
            <div className="flex items-center gap-6 text-slate-500 font-medium text-sm">
              <span className="flex items-center gap-2"><MapPin size={16} /> Rajendranagar, Hyderabad</span>
              <span className="flex items-center gap-2"><Phone size={16} /> +91 87654 32109</span>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} EuroKids Rajendranagar. Premium Preschool Experience.
          </div>
        </div>
      </footer>
    </div>
  );
}

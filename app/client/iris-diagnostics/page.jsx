// app/client/iris-diagnostics/page.jsx
import React from 'react';

export default function IrisDiagnostics() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] font-sans overflow-x-hidden selection:bg-[#8B5CF6] selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#6366F1]/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#EC4899]/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-[#0B0F19]/60 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-xl opacity-80 blur-sm animate-pulse"></div>
                <div className="relative bg-[#0B0F19] w-10 h-10 rounded-lg flex items-center justify-center border border-white/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" strokeWidth="2"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366F1"/><stop offset="100%" stopColor="#EC4899"/></linearGradient></defs><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg>
                </div>
              </div>
              <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                IRIS<span className="font-light tracking-normal text-gray-400">DX</span>
              </span>
            </div>
            <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-gray-300">
              <a href="#" className="hover:text-white transition-colors">TESTS & SCANS</a>
              <a href="#" className="hover:text-white transition-colors">TECHNOLOGY</a>
              <a href="#" className="hover:text-white transition-colors">RESULTS</a>
            </div>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all backdrop-blur-sm">
              Patient Portal
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818CF8] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#818CF8] animate-pulse"></span>
              NEW 3T MRI SCANNER ARRIVED IN TOLICHOWKI
            </div>
            <h1 className="text-6xl lg:text-7xl font-light leading-tight">
              Precision <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
                Imaging.
              </span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
              Experience the future of diagnostics. AI-enhanced imaging, sub-millimeter accuracy, and results delivered directly to your device within hours.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-opacity shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]">
                Schedule a Scan
              </button>
              <button className="bg-[#1E293B]/50 hover:bg-[#1E293B] border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-md">
                Upload Prescription
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-2 backdrop-blur-xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MRI Machine" className="rounded-xl w-full object-cover h-[500px] opacity-80" />
              
              {/* Scanning Laser Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#EC4899] shadow-[0_0_15px_#EC4899] z-20 animate-scan"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2"><path d="M2 12h4l2-9 5 18 2-9h7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Real-time Analysis</p>
                    <p className="text-xs text-gray-400">AI Processing Active</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#818CF8] font-mono text-xl font-bold">99.9%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid (Bento Box style) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 border border-white/5 rounded-3xl p-10 hover:border-[#6366F1]/50 transition-colors group">
              <div className="flex justify-between items-start mb-16">
                <div className="w-16 h-16 rounded-2xl bg-[#6366F1]/20 flex items-center justify-center text-[#818CF8]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M12 12 2.5 2.5M12 12l9.5-9.5"/></svg>
                </div>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#6366F1] transition-colors text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
              <h3 className="text-3xl font-light mb-4">Advanced <span className="font-bold text-white">Pathology</span></h3>
              <p className="text-gray-400 max-w-md">Fully automated robotics lab providing 500+ tests with uncompromising precision and rapid turnaround times.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 border border-white/5 rounded-3xl p-10 hover:border-[#EC4899]/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#EC4899]/20 flex items-center justify-center text-[#F472B6] mb-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Molecular <br/><span className="font-bold text-white">Genetics</span></h3>
              <p className="text-gray-400 text-sm">Next-gen sequencing for personalized insights.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 border border-white/5 rounded-3xl p-10 hover:border-[#8B5CF6]/50 transition-colors group flex items-end">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Digital X-Ray</h3>
                <p className="text-gray-400 text-sm mb-6">Ultra-low dose radiation.</p>
                <a href="#" className="text-[#818CF8] text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">Book Now →</a>
              </div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-2xl font-light mb-2">Patient <span className="font-bold text-white">Portal App</span></h3>
                <p className="text-gray-400">Access your 3D scans, reports, and history instantly from your phone.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors">App Store</button>
                <button className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm border border-white/10 hover:bg-white/20 transition-colors">Google Play</button>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Scan Animation CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}} />
    </div>
  );
}

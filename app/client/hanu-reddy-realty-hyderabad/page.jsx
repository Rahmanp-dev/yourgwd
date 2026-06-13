"use client";
import React from 'react';
import { Home, Key, MapPin, Building, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RealEstatePreview() {
  return (
    <div className={`min-h-screen ${"bg-yellow-400"} font-sans overflow-hidden`}>
      {/* Navigation */}
      <nav className="p-6 md:px-12 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"}`}>
            <Building className={`${"text-black font-bold"}`} size={24} />
          </div>
          <span className={`text-xl font-bold ${"text-black font-black uppercase tracking-tighter"}`}>Hanu Reddy Realty</span>
        </div>
        <button className={`px-6 py-2.5 rounded-lg font-semibold ${"bg-rose-500 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"}`}>
          Client Portal Login
        </button>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-16 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"} ${"text-black font-bold"}`}>
            <MapPin size={16} /> Shaikpet's Premier PropTech Platform
          </div>
          <h1 className={`text-5xl md:text-7xl leading-tight ${"text-black font-black uppercase tracking-tighter"}`}>
            Modern Real Estate <br/>
            <span className={`${"text-black font-bold"}`}>Digitized.</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-lg opacity-80 ${"text-black font-black uppercase tracking-tighter"}`}>
            Welcome to the new digital home of Hanu Reddy Realty. We've integrated VR tours, smart CRM, and advanced listing management directly into your operations.
          </p>
          <div className="flex gap-4">
            <button className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 ${"bg-rose-500 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"}`}>
              View Smart Listings <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Decorative element */}
          <div className={`absolute -inset-4 rounded-[3rem] ${"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"} opacity-50 -z-10 transform rotate-3`}></div>
          
          <div className={`p-8 rounded-2xl ${"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"} space-y-4`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${"text-black font-black uppercase tracking-tighter"} bg-black/5`}>
              <Home size={24} />
            </div>
            <h3 className={`text-xl font-bold ${"text-black font-black uppercase tracking-tighter"}`}>VR Property Tours</h3>
            <p className={`${"text-black font-black uppercase tracking-tighter"} opacity-70`}>Immersive 360° walkthroughs for remote buyers.</p>
          </div>
          
          <div className={`p-8 rounded-2xl ${"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"} space-y-4 transform md:translate-y-12`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${"text-black font-black uppercase tracking-tighter"} bg-black/5`}>
              <Key size={24} />
            </div>
            <h3 className={`text-xl font-bold ${"text-black font-black uppercase tracking-tighter"}`}>Smart Contracts</h3>
            <p className={`${"text-black font-black uppercase tracking-tighter"} opacity-70`}>Digital signatures and secure cloud storage.</p>
          </div>

          <div className={`p-8 rounded-2xl ${"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"} space-y-4`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${"text-black font-black uppercase tracking-tighter"} bg-black/5`}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={`text-xl font-bold ${"text-black font-black uppercase tracking-tighter"}`}>Verified Leads</h3>
            <p className={`${"text-black font-black uppercase tracking-tighter"} opacity-70`}>Automated AI-driven buyer qualification.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

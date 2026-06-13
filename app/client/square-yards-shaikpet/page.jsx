"use client";
import React from 'react';
import { Home, Key, MapPin, Building, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RealEstatePreview() {
  return (
    <div className={`min-h-screen ${"bg-gray-900 bg-gradient-to-br from-gray-900 to-teal-900"} font-sans overflow-hidden`}>
      {/* Navigation */}
      <nav className="p-6 md:px-12 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${"bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"}`}>
            <Building className={`${"text-teal-200"}`} size={24} />
          </div>
          <span className={`text-xl font-bold ${"text-white"}`}>Square Yards Shaikpet</span>
        </div>
        <button className={`px-6 py-2.5 rounded-lg font-semibold ${"bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30 hover:scale-105 transition-all"}`}>
          Client Portal Login
        </button>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-16 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${"bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"} ${"text-teal-200"}`}>
            <MapPin size={16} /> Shaikpet's Premier PropTech Platform
          </div>
          <h1 className={`text-5xl md:text-7xl leading-tight ${"text-white"}`}>
            Modern Real Estate <br/>
            <span className={`${"text-teal-200"}`}>Digitized.</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-lg opacity-80 ${"text-white"}`}>
            Welcome to the new digital home of Square Yards Shaikpet. We've integrated VR tours, smart CRM, and advanced listing management directly into your operations.
          </p>
          <div className="flex gap-4">
            <button className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 ${"bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30 hover:scale-105 transition-all"}`}>
              View Smart Listings <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Decorative element */}
          <div className={`absolute -inset-4 rounded-[3rem] ${"bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"} opacity-50 -z-10 transform rotate-3`}></div>
          
          <div className={`p-8 rounded-2xl ${"bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"} space-y-4`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${"text-white"} bg-black/5`}>
              <Home size={24} />
            </div>
            <h3 className={`text-xl font-bold ${"text-white"}`}>VR Property Tours</h3>
            <p className={`${"text-white"} opacity-70`}>Immersive 360° walkthroughs for remote buyers.</p>
          </div>
          
          <div className={`p-8 rounded-2xl ${"bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"} space-y-4 transform md:translate-y-12`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${"text-white"} bg-black/5`}>
              <Key size={24} />
            </div>
            <h3 className={`text-xl font-bold ${"text-white"}`}>Smart Contracts</h3>
            <p className={`${"text-white"} opacity-70`}>Digital signatures and secure cloud storage.</p>
          </div>

          <div className={`p-8 rounded-2xl ${"bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"} space-y-4`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${"text-white"} bg-black/5`}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={`text-xl font-bold ${"text-white"}`}>Verified Leads</h3>
            <p className={`${"text-white"} opacity-70`}>Automated AI-driven buyer qualification.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

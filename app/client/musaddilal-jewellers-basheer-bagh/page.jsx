"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ChevronRight, 
  Star, 
  ArrowRight,
  Gem,
  Award,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function Page() {
  const [metal, setMetal] = useState('22K Gold');
  const [gem, setGem] = useState('Diamond');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Bespoke Design' });

  // Styles map for 10 styles
  const styles = {
    glassmorphism: {
      outer: "bg-[#070b19] text-[#e0e7ff] font-sans selection:bg-[#c5a880] selection:text-[#070b19]",
      heroBg: "bg-gradient-to-br from-[#0c142c] via-[#070b19] to-[#04060d]",
      navBg: "bg-[#070b19]/80 backdrop-blur-md border-b border-white/10",
      card: "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl",
      accentText: "text-[#c5a880]",
      accentBg: "bg-[#c5a880]",
      button: "bg-gradient-to-r from-[#c5a880] to-[#b3956c] text-[#070b19] font-bold rounded-lg border border-white/10 shadow-[0_4px_20px_rgba(197,168,128,0.3)] hover:scale-[1.02] transition-transform",
      input: "bg-white/5 border border-white/10 rounded-lg text-white outline-none focus:border-[#c5a880]",
      heroTitle: "font-serif tracking-tight text-white",
      logoBox: "bg-white/10 text-[#c5a880] border border-[#c5a880]/30",
      divider: "border-white/10"
    },
    heritage: {
      outer: "bg-[#fdfbf7] text-[#2c1a1a] font-serif selection:bg-[#800020] selection:text-[#fdfbf7]",
      heroBg: "bg-gradient-to-br from-[#f8f1e5] via-[#fdfbf7] to-[#f5ebd7] border-b-4 border-[#800020]",
      navBg: "bg-[#fdfbf7]/90 backdrop-blur-md border-b-2 border-[#800020]/20",
      card: "bg-white border-2 border-[#800020]/20 rounded-none shadow-md",
      accentText: "text-[#800020]",
      accentBg: "bg-[#800020]",
      button: "bg-[#800020] text-white font-bold rounded-none border-2 border-[#c5a880] hover:bg-[#600018] transition-colors",
      input: "bg-white border-2 border-[#800020]/20 rounded-none text-black outline-none focus:border-[#800020]",
      heroTitle: "font-serif tracking-wide text-[#2c1a1a] uppercase",
      logoBox: "bg-[#800020] text-white border-2 border-[#c5a880]",
      divider: "border-[#800020]/15"
    },
    minimalist: {
      outer: "bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-[#a87c53] selection:text-white",
      heroBg: "bg-[#f4f2ee]",
      navBg: "bg-[#faf9f6]/80 backdrop-blur-md border-b border-[#e5e5e0]",
      card: "bg-white border border-[#e5e5e0] rounded-none shadow-sm hover:shadow-md transition-shadow",
      accentText: "text-[#a87c53]",
      accentBg: "bg-[#a87c53]",
      button: "bg-[#1a1a1a] text-white font-bold rounded-none hover:bg-[#a87c53] transition-colors",
      input: "bg-white border border-[#d1d1ca] rounded-none text-black outline-none focus:border-[#1a1a1a]",
      heroTitle: "font-light tracking-widest text-[#1a1a1a] uppercase",
      logoBox: "bg-[#1a1a1a] text-white",
      divider: "border-[#e5e5e0]"
    },
    dark: {
      outer: "bg-[#0b0b0e] text-[#f3f4f6] font-sans selection:bg-[#e2e8f0] selection:text-black",
      heroBg: "bg-gradient-to-tr from-[#0b0b0e] via-[#121217] to-[#08080a]",
      navBg: "bg-[#0b0b0e]/95 border-b border-white/5",
      card: "bg-[#15151c] border border-white/5 rounded-2xl shadow-2xl hover:border-white/10 transition-colors",
      accentText: "text-[#e2e8f0]",
      accentBg: "bg-white",
      button: "bg-white text-black font-extrabold rounded-full hover:bg-neutral-200 transition-colors shadow-lg",
      input: "bg-[#1c1c24] border border-white/10 rounded-xl text-white outline-none focus:border-white",
      heroTitle: "font-semibold tracking-tight text-white",
      logoBox: "bg-white/10 text-white border border-white/20",
      divider: "border-white/5"
    },
    classic: {
      outer: "bg-[#f5f6f4] text-[#152420] font-sans selection:bg-[#c5a059] selection:text-white",
      heroBg: "bg-[#f0f2ef] border-b border-[#c5a059]/30",
      navBg: "bg-[#f5f6f4]/90 backdrop-blur-md border-b-2 border-[#152420]/10",
      card: "bg-white border border-[#c5a059]/20 rounded-xl shadow-sm hover:shadow-md transition-shadow",
      accentText: "text-[#c5a059]",
      accentBg: "bg-[#152420]",
      button: "bg-[#152420] text-white font-semibold rounded-lg border border-[#c5a059] hover:bg-[#0f1b18] transition-colors",
      input: "bg-white border border-[#152420]/20 rounded-lg text-black outline-none focus:border-[#152420]",
      heroTitle: "font-serif tracking-tight text-[#152420]",
      logoBox: "bg-[#152420] text-[#c5a059] border border-[#c5a059]/35",
      divider: "border-[#152420]/10"
    },
    neumorphism: {
      outer: "bg-[#e0e5ec] text-[#2d3748] font-sans selection:bg-[#4a5568] selection:text-[#e0e5ec]",
      heroBg: "bg-[#e0e5ec]",
      navBg: "bg-[#e0e5ec]/90 backdrop-blur-md border-b border-[#d1d9e6]",
      card: "bg-[#e0e5ec] rounded-3xl shadow-[9px_9px_16px_#a3b1c6,_-9px_-9px_16px_#ffffff]",
      accentText: "text-[#4a5568] font-bold",
      accentBg: "bg-[#4a5568]",
      button: "bg-[#e0e5ec] text-[#2d3748] font-bold rounded-2xl shadow-[5px_5px_10px_#a3b1c6,_-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#a3b1c6,_inset_-5px_-5px_10px_#ffffff] transition-all",
      input: "bg-[#e0e5ec] rounded-xl outline-none shadow-[inset_3px_3px_6px_#a3b1c6,_inset_-3px_-3px_6px_#ffffff] text-[#2d3748] focus:border-[#4a5568] p-4",
      heroTitle: "font-black tracking-tight text-[#2d3748] uppercase",
      logoBox: "bg-[#e0e5ec] text-[#2d3748] shadow-[3px_3px_6px_#a3b1c6,_-3px_-3px_6px_#ffffff] border border-white/40",
      divider: "border-[#d1d9e6]"
    },
    pastel: {
      outer: "bg-[#fff9f9] text-[#4a3f35] font-sans selection:bg-[#e0a899] selection:text-white",
      heroBg: "bg-gradient-to-b from-[#fff5f5] to-[#fff9f9]",
      navBg: "bg-[#fff9f9]/90 border-b border-[#fcd5ce]",
      card: "bg-white border border-[#fae1dd] rounded-3xl shadow-sm hover:shadow-md transition-shadow",
      accentText: "text-[#e0a899]",
      accentBg: "bg-[#e0a899]",
      button: "bg-[#e0a899] text-white font-bold rounded-full hover:bg-[#d49989] transition-colors shadow-sm",
      input: "bg-[#fffcfc] border border-[#fcd5ce] rounded-full text-black outline-none focus:border-[#e0a899] px-6",
      heroTitle: "font-serif italic tracking-tight text-[#4a3f35]",
      logoBox: "bg-[#fff1f0] text-[#e0a899] border border-[#fae1dd]",
      divider: "border-[#fae1dd]"
    },
    cyber: {
      outer: "bg-[#0a0a0f] text-[#a0a5b5] font-sans selection:bg-[#00f2fe] selection:text-[#0a0a0f]",
      heroBg: "bg-gradient-to-b from-[#0e0e17] to-[#0a0a0f] border-b border-[#00f2fe]/20",
      navBg: "bg-[#0a0a0f]/90 border-b border-[#00f2fe]/20",
      card: "bg-[#11111d] border-2 border-[#00f2fe]/20 rounded-none shadow-[4px_4px_0px_#00f2fe] hover:shadow-[6px_6px_0px_#00f2fe] transition-all",
      accentText: "text-[#00f2fe] font-mono",
      accentBg: "bg-[#00f2fe]",
      button: "bg-[#00f2fe] text-[#0a0a0f] font-black rounded-none shadow-[3px_3px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#fff] transition-all",
      input: "bg-[#181829] border-2 border-[#00f2fe]/30 rounded-none text-white outline-none font-mono focus:border-[#00f2fe]",
      heroTitle: "font-black tracking-tighter text-white uppercase font-mono",
      logoBox: "bg-[#0a0a0f] text-[#00f2fe] border-2 border-[#00f2fe]",
      divider: "border-[#00f2fe]/10"
    },
    organic: {
      outer: "bg-[#f4f6f0] text-[#2c3d30] font-sans selection:bg-[#7a8d7b] selection:text-white",
      heroBg: "bg-gradient-to-br from-[#e9ebd8] via-[#f4f6f0] to-[#edf0e7]",
      navBg: "bg-[#f4f6f0]/90 border-b border-[#d2d7c9]",
      card: "bg-white border border-[#d2d7c9] rounded-2xl shadow-sm hover:shadow-md transition-shadow",
      accentText: "text-[#7a8d7b]",
      accentBg: "bg-[#7a8d7b]",
      button: "bg-[#2c3d30] text-white font-bold rounded-xl hover:bg-[#7a8d7b] transition-colors",
      input: "bg-[#f9faf7] border border-[#d2d7c9] rounded-xl text-[#2c3d30] outline-none focus:border-[#2c3d30]",
      heroTitle: "font-serif tracking-normal text-[#2c3d30] font-medium",
      logoBox: "bg-[#e2e7d8] text-[#2c3d30] border border-[#d2d7c9]",
      divider: "border-[#d2d7c9]"
    },
    artdeco: {
      outer: "bg-[#0b101c] text-[#f4edd2] font-sans selection:bg-[#e0b034] selection:text-[#0b101c]",
      heroBg: "bg-gradient-to-b from-[#0f182c] to-[#0b101c] border-b-2 border-[#e0b034]/40",
      navBg: "bg-[#0b101c]/90 border-b border-[#e0b034]/30",
      card: "bg-[#111728] border-2 border-[#e0b034]/30 rounded-none shadow-xl relative",
      accentText: "text-[#e0b034] font-serif uppercase tracking-widest",
      accentBg: "bg-[#e0b034]",
      button: "bg-[#e0b034] text-[#0b101c] font-black rounded-none border border-black hover:bg-[#f2c657] transition-colors",
      input: "bg-[#182035] border border-[#e0b034]/30 rounded-none text-white outline-none focus:border-[#e0b034] p-4",
      heroTitle: "font-serif tracking-wider text-white uppercase",
      logoBox: "bg-[#0b101c] text-[#e0b034] border border-[#e0b034]",
      divider: "border-[#e0b034]/20"
    }
  };

  const current = styles['pastel'] || styles.glassmorphism;

  const calculatePrice = () => {
    let base = 75000;
    if (metal === '18K Rose Gold') base = 65000;
    else if (metal === 'Platinum') base = 95000;

    let gemCost = 120000;
    if (gem === 'Emerald') gemCost = 150000;
    else if (gem === 'Ruby') gemCost = 110000;
    else if (gem === 'Pearl') gemCost = 35000;

    return (base + gemCost).toLocaleString('en-IN');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  // 3 products customized per theme style
  const signatureProducts = [
    { title: "The Royal Nizam Necklace", desc: "A majestic choker featuring hand-woven Basra pearls and uncut diamonds.", price: "₹4,25,000", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" },
    { title: "Temple Heritage Kada", desc: "Crafted in 22K gold, embossed with ancient temple motifs and ruby carvings.", price: "₹2,80,000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" },
    { title: "Empress Solitaire Ring", desc: "Flawless VVS1 diamond set in a minimalist platinum crown band.", price: "₹1,95,000", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className={`${current.outer} min-h-screen`} style={{ minHeight: '100vh' }}>
      
      {/* Navigation */}
      <header className={`${current.navBg} sticky top-0 z-50 h-20`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center font-bold text-lg rounded-lg ${current.logoBox}`}>
              {['G', 'H', 'O', 'A', 'D'].includes('M') ? 'M' : 'J'}
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block uppercase text-white">Musaddilal Jewellers</span>
              <span className="text-[9px] uppercase tracking-widest block -mt-1 opacity-70">High-End Bridal Solitaires</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            <a href="#heritage" className="hover:opacity-80 transition-opacity">Heritage</a>
            <a href="#customizer" className="hover:opacity-80 transition-opacity">Design Studio</a>
            <a href="#collections" className="hover:opacity-80 transition-opacity">Collections</a>
            <a href="#testimonials" className="hover:opacity-80 transition-opacity">Reviews</a>
            <a href="#contact" className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-black ${current.button}`}>
              Request Consult
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative py-20 md:py-28 overflow-hidden ${current.heroBg}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Jewelry • Hyderabad</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] ${current.heroTitle}`}>
              Masterpieces <br />
              <span className={`${current.accentText}`}>crafted for</span> eternity.
            </h1>
            <p className="text-sm md:text-base opacity-85 leading-relaxed max-w-2xl font-light">
              Bespoke bridal heirlooms, Nizami pearls, and custom diamond creations handcrafted in Hyderabad. We design unique collector's items that capture the essence of royal luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#customizer" className={`inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-extrabold ${current.button}`}>
                Enter Design Studio
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#collections" className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold border border-white/20 hover:bg-white/5 transition-all">
                Browse Collections
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className={`p-4 ${current.card}`}>
              <img 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80" 
                alt="Heritage Diamond Jewelry" 
                className="w-full h-[320px] md:h-[380px] object-cover rounded-xl border border-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className={`p-3 ${current.card}`}>
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80" 
              alt="Artisanal Craftsman" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className={`text-xs uppercase tracking-widest font-black ${current.accentText}`}>Our Legacy</span>
          <h2 className="text-3xl font-extrabold tracking-tight">The Art of Pure Craftsmanship</h2>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            For generations, Musaddilal Jewellers has been synonymous with the finest jewellery in Hyderabad. From selecting rare south-sea pearls at the markets to casting gold into beautiful Nakshi patterns, our master artisans craft each piece with precision.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t `+ current.divider +` max-w-md">
            <div>
              <span className={`block text-2xl font-black ${current.accentText}`}>100%</span>
              <span className="block text-[9px] uppercase tracking-wider opacity-60">Hallmarked</span>
            </div>
            <div>
              <span className={`block text-2xl font-black ${current.accentText}`}>Hand</span>
              <span className="block text-[9px] uppercase tracking-wider opacity-60">Crafted</span>
            </div>
            <div>
              <span className={`block text-2xl font-black ${current.accentText}`}>VVS1</span>
              <span className="block text-[9px] uppercase tracking-wider opacity-60">Diamonds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Design Studio Section */}
      <section id="customizer" className={`py-20 border-y ${current.divider} bg-white/5`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className={`text-xs uppercase tracking-widest font-black ${current.accentText}`}>Interactive Studio</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Configure Your Heirlooms</h2>
            <p className="text-xs opacity-75 max-w-lg mx-auto">
              Select your preferred precious metal and gemstone config to design a custom bridal set estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Control Panel */}
            <div className={`lg:col-span-7 p-8 ${current.card} space-y-6`}>
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold opacity-60">1. Metal Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {['22K Gold', '18K Rose Gold', 'Platinum'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMetal(m)}
                      className={`py-3 text-xs font-bold rounded-lg border transition-all ${
                        metal === m
                          ? 'border-white bg-white/10 text-white font-extrabold'
                          : 'border-white/10 text-white/60 hover:bg-white/5'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-widest font-bold opacity-60">2. Gemstone Option</label>
                <div className="grid grid-cols-4 gap-3">
                  {['Diamond', 'Emerald', 'Ruby', 'Pearl'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGem(g)}
                      className={`py-3 text-xs font-bold rounded-lg border transition-all ${
                        gem === g
                          ? 'border-white bg-white/10 text-white font-extrabold'
                          : 'border-white/10 text-white/60 hover:bg-white/5'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Preview Panel */}
            <div className={`lg:col-span-5 p-8 flex flex-col justify-between min-h-[300px] ${current.card}`}>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60 block">Live Estimate</span>
                <h3 className="text-xl font-bold uppercase tracking-wide border-b pb-3 border-white/10">Bespoke Design</h3>
                <div className="space-y-2 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span className="opacity-60">Metal Base:</span>
                    <span>{metal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Selected Gem:</span>
                    <span>{gem}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center space-y-4">
                <span className="text-[10px] uppercase tracking-widest opacity-60 block">Estimated Valuation</span>
                <span className={`text-3xl font-black block ${current.accentText}`}>₹{calculatePrice()}</span>
                <a href="#contact" className={`w-full block py-3 text-center text-xs uppercase tracking-widest font-black ${current.button}`}>
                  Discuss this configuration
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection Section */}
      <section id="collections" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className={`text-xs uppercase tracking-widest font-black ${current.accentText}`}>Signature Grid</span>
          <h2 className="text-3xl font-extrabold tracking-tight">The Heritage Vault</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureProducts.map((p, idx) => (
            <div key={idx} className={`p-4 overflow-hidden ${current.card}`}>
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover rounded-xl mb-4" />
              <h3 className="font-extrabold text-base mb-1">{p.title}</h3>
              <p className="text-xs opacity-75 leading-relaxed mb-4 min-h-[32px]">{p.desc}</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-3">
                <span className={`font-black text-sm ${current.accentText}`}>{p.price}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest inline-flex items-center gap-1 opacity-70">
                  Select <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`py-20 border-t ${current.divider} bg-white/5`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className={`text-xs uppercase tracking-widest font-black ${current.accentText}`}>Client Diaries</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Customer Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`p-8 ${current.card} space-y-4`}>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs italic leading-relaxed opacity-90">
                "We requested a customized Nizam choker set from them. The interactive metal select and gem config matched our mood board perfectly. Outstanding detailing on the gold trim!"
              </p>
              <div>
                <span className="font-bold block text-sm">Sunitha Reddy</span>
                <span className="text-[10px] opacity-60">Jubilee Hills, Hyderabad</span>
              </div>
            </div>

            <div className={`p-8 ${current.card} space-y-4`}>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs italic leading-relaxed opacity-90">
                "Their pearls and kundan work have excellent quality. Highly responsive WhatsApp support and extremely transparent pricing for custom bridal sets."
              </p>
              <div>
                <span className="font-bold block text-sm">Priyanka Rao</span>
                <span className="text-[10px] opacity-60">Gachibowli, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Footer */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className={`text-xs uppercase tracking-widest font-black ${current.accentText}`}>Contact Us</span>
          <h2 className="text-3xl font-extrabold tracking-tight">Schedule Virtual Appointment</h2>
          <p className="text-xs opacity-80 leading-relaxed font-light">
            Book an exclusive viewing session at our luxury Hyderabad showroom or initiate a video consult directly with our head jewelry designers.
          </p>
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex gap-3 text-xs">
              <MapPin className="w-5 h-5 shrink-0 opacity-70" />
              <span>Basheer Bagh, Near Liberty Circle, Hyderabad - 500029</span>
            </div>
            <div className="flex gap-3 text-xs">
              <Phone className="w-5 h-5 shrink-0 opacity-70" />
              <a href={`tel:+91${'9985880900'}`} className="hover:underline">+91 9985880900</a>
            </div>
            <div className="flex gap-3 text-xs">
              <Mail className="w-5 h-5 shrink-0 opacity-70" />
              <a href={`mailto:${'info@musaddilal.com'}`} className="hover:underline">info@musaddilal.com</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className={`p-8 ${current.card}`}>
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold">Consultation Slot Booked</h3>
                <p className="text-xs opacity-75">
                  Thank you, {formData.name}. Our master jeweler will contact you at +91 {formData.phone} inside 30 minutes to finalize details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-widest opacity-60">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={`w-full p-3 text-xs bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white` } 
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-widest opacity-60">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className={`w-full p-3 text-xs bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white` } 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold tracking-widest opacity-60">Precious Metal Interest</label>
                  <select 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className={`w-full p-3 text-xs bg-[#121624] border border-white/10 rounded-lg outline-none focus:border-white` }
                  >
                    <option>Bespoke Heritage Gold Choker</option>
                    <option>Premium Solitaire Diamond Ring</option>
                    <option>Classic Nizami Pearl String</option>
                    <option>Custom Bridal Jewellery Suite</option>
                  </select>
                </div>

                <button type="submit" className={`w-full py-3 text-xs uppercase tracking-widest font-black mt-2 ${current.button}`}>
                  Request Booking Slot
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${current.divider} text-center text-[10px] uppercase tracking-widest opacity-60`}>
        © 2026 Musaddilal Jewellers Hyderabad • Secure Digital Vault • Design Studio
      </footer>

    </div>
  );
}

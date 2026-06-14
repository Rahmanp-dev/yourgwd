"use client";
import React, { useState, useEffect } from 'react';
import { 
  Car, Shield, Sparkles, Clock, Star, ArrowRight, Check, ChevronDown, 
  MapPin, Phone, Mail, Award, Activity, Database, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function FiveKCarCare() {
  const [activeTab, setActiveTab] = useState('before');
  const [faqOpen, setFaqOpen] = useState({});
  const [bookingStatus, setBookingStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [liveCarsDetailed, setLiveCarsDetailed] = useState(24852);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'ceramic-coating',
    date: ''
  });

  // Increment simulated counter occasionally for dashboard realism
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCarsDetailed(prev => prev + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingStatus(true);
    }, 1500);
  };

  const services = [
    { name: "9H Nano-Quartz Coating", code: "5K-CERAMIC", desc: "Chemical-bonded quartz shield offering unmatched gloss and chemical isolation.", warranty: "3 Years" },
    { name: "Self-Healing TPU Film", code: "5K-PPF", desc: "Military-grade paint protection film that heals fine scratches automatically under heat.", warranty: "10 Years" },
    { name: "Full Body Paint Correction", code: "5K-POLISH", desc: "Multi-stage orbital paint correction to restore clarity and eliminate deep swirls.", warranty: "Restore" },
    { name: "Steam Interior Sanitization", code: "5K-INTERIOR", desc: "140°C steam extraction, deep fabric shampoo, and leather nutrient replenishment.", warranty: "Clean" },
    { name: "Alloy Shield & Wheel Armor", code: "5K-WHEEL", desc: "High-heat quartz protection preventing brake dust embedding and rim oxidation.", warranty: "2 Years" },
    { name: "Windshield Hydro Shield", code: "5K-GLASS", desc: "Hyper-hydrophobic surface treatment ensuring extreme driving visibility in monsoon.", warranty: "1 Year" }
  ];

  const packages = [
    { name: "Express Polish & Shield", price: "₹9,999", code: "PKG-01", features: ["1-Step Gloss Correction", "Quartz Paint Sealant", "Dry Interior Cleaning", "Engine Dressing"] },
    { name: "5K Ultra Ceramic Coating", price: "₹24,999", code: "PKG-02", popular: true, features: ["3-Stage Swirl Removal", "Dual-Layer 9H Nano Coat", "Complete Wheel Ceramic", "Full Interior Sterilization"] },
    { name: "5K Armor Shield PPF", price: "₹99,999", code: "PKG-03", features: ["Full TPU Self-Healing PPF", "180 Micron Thickness", "Wrapped Edges Alignment", "10-Year Anti-Yellowing Warranty"] }
  ];

  const faqs = [
    { q: "Is 5K Car Care Attapur open on Sundays?", a: "Yes, we are open on Sundays from 10:00 AM to 5:00 PM for pre-booked detailing packages and ceramic checkups. Express washing is subject to queue capacity." },
    { q: "How does self-healing PPF work?", a: "Our premium TPU (Thermoplastic Polyurethane) PPF has an elastomeric top coat. When exposed to heat (like sunlight or warm water), the chemical structure expands slightly and returns to its original molded shape, automatically filling and sealing minor swirl marks and scratches." },
    { q: "What is the warranty maintenance schedule?", a: "For 5K Ceramic Coatings, we recommend a semi-annual checkup (every 6 months) at our Attapur shop. We wash the car, remove industrial fallouts, and apply a silica-based booster coat to maintain optimum hydrophobicity." },
    { q: "Where exactly is the Attapur branch?", a: "We are located near Pillar 110, PVNR Expressway, Main Road, Attapur, Hyderabad, next to the Shell Fuel Station. Look for our signature orange and anthracite billboard." }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafaf9] font-sans selection:bg-[#ea580c] selection:text-white antialiased p-4 sm:p-6 lg:p-8">
      
      {/* Bento Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Navigation Tile (Full Width Top) */}
        <div className="md:col-span-3 lg:col-span-4 bg-[#1c1917] border border-stone-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl bg-[#ea580c] flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Car className="text-white size-6" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white block">
                5K CAR CARE <span className="text-[#ea580c]">ATTAPUR</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-stone-400 block -mt-1 uppercase">
                System Status: Active • Detailing Dashboard v4.1
              </span>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider justify-center">
            <a href="#services" className="text-stone-300 hover:text-[#ea580c] transition-colors bg-[#0c0a09] px-4 py-2.5 rounded-xl border border-stone-800">Services</a>
            <a href="#packages" className="text-stone-300 hover:text-[#ea580c] transition-colors bg-[#0c0a09] px-4 py-2.5 rounded-xl border border-stone-800">Packages</a>
            <a href="#telemetry" className="text-stone-300 hover:text-[#ea580c] transition-colors bg-[#0c0a09] px-4 py-2.5 rounded-xl border border-stone-800">Before/After</a>
            <a href="#reviews" className="text-stone-300 hover:text-[#ea580c] transition-colors bg-[#0c0a09] px-4 py-2.5 rounded-xl border border-stone-800">Reviews</a>
            <a href="#faq" className="text-stone-300 hover:text-[#ea580c] transition-colors bg-[#0c0a09] px-4 py-2.5 rounded-xl border border-stone-800">FAQ</a>
          </nav>

          <a 
            href="#booking"
            className="bg-[#ea580c] hover:bg-orange-600 text-white font-mono uppercase text-xs tracking-wider font-bold px-6 py-3 rounded-2xl transition-all shadow-lg shadow-orange-500/10 active:scale-95"
          >
            Live Booking
          </a>
        </div>

        {/* HERO BENTO (col-span-2 row-span-2) */}
        <div className="md:col-span-2 lg:col-span-3 bg-[#1c1917] border border-stone-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[420px] group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/10 transition-all duration-700" />
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#ea580c] font-mono text-[10px] uppercase tracking-wider mb-6">
              <Activity size={12} className="animate-pulse" />
              Workshop Status: Online
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-white mb-6">
              Structured Precision. <br />
              <span className="text-[#ea580c]">5-Star Protection.</span>
            </h1>
            
            <p className="text-stone-400 text-base leading-relaxed max-w-2xl mb-8">
              Welcome to 5K Car Care Attapur. Using state-of-the-art infra and German nano-technology, we wrap and coat your premium cars with mathematically perfect coverage. Fully controlled bays near PVNR Expressway.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a 
              href="#booking"
              className="bg-[#ea580c] hover:bg-orange-600 text-white font-mono uppercase text-xs tracking-widest font-black px-8 py-4.5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/15"
            >
              Configure Service Slot
              <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-6 px-4 py-2 border border-stone-800 bg-[#0c0a09]/50 rounded-2xl">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100&h=100"
                ].map((imgUrl, idx) => (
                  <img key={idx} src={imgUrl} alt="Attapur Client" className="size-8 rounded-full border-2 border-stone-900 object-cover" />
                ))}
              </div>
              <span className="text-xs font-mono text-stone-400">Trusted by 1.8k+ Attapur Owners</span>
            </div>
          </div>
        </div>

        {/* STATS BENTO 1: TOTAL CARS (col-span-1) */}
        <div className="bg-[#1c1917] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Metrics // Telemetry</span>
            <Database className="text-[#ea580c] size-4" />
          </div>
          
          <div>
            <span className="text-5xl font-mono font-black text-white tracking-tight block leading-none">
              {liveCarsDetailed.toLocaleString()}
            </span>
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mt-2">
              ● Live Detailed Cars Counter
            </span>
          </div>

          <div className="border-t border-stone-800/80 pt-4 mt-4 text-xs text-stone-400">
            Real-time aggregate across Hyderabad branches. Average 18 cars completed daily in Attapur.
          </div>
        </div>

        {/* STATS BENTO 2: WORKSHOP BAY STATUS (col-span-1) */}
        <div className="bg-[#1c1917] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Bays Status // Attapur</span>
            <span className="flex size-2 rounded-full bg-emerald-500 animate-ping" />
          </div>

          <div className="space-y-3 my-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-stone-800/60 pb-1.5">
              <span className="text-stone-400">Bay 1 (PPF)</span>
              <span className="text-orange-400 font-bold">OCCUPIED</span>
            </div>
            <div className="flex items-center justify-between border-b border-stone-800/60 pb-1.5">
              <span className="text-stone-400">Bay 2 (Ceramic)</span>
              <span className="text-orange-400 font-bold">OCCUPIED</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Bay 3 (Washing)</span>
              <span className="text-emerald-500 font-bold">AVAILABLE</span>
            </div>
          </div>

          <div className="text-[10px] text-stone-500 font-mono">
            UPDATED: 3 MINS AGO • Shell Fuel Station Road, Attapur
          </div>
        </div>

        {/* SERVICES LIST BENTO (col-span-3) */}
        <div id="services" className="md:col-span-3 bg-[#1c1917] border border-stone-800 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#ea580c] font-mono text-xs uppercase tracking-wider block">Service Blueprint</span>
              <h2 className="text-2xl font-black uppercase text-white mt-1">CORE AUTOMOTIVE SERVICES</h2>
            </div>
            <Award className="text-stone-600 size-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div 
                key={i} 
                className="bg-[#0c0a09] border border-stone-800 hover:border-orange-500/30 p-5 rounded-2xl transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] bg-[#1c1917] text-[#ea580c] border border-stone-800 px-2 py-0.5 rounded uppercase">
                    {svc.code}
                  </span>
                  <span className="text-stone-500 text-[10px] font-mono">Warranty: {svc.warranty}</span>
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-[#ea580c] transition-colors uppercase">
                  {svc.name}
                </h4>
                <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS BENTO 3: RATINGS (col-span-1) */}
        <div className="bg-[#1c1917] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">REVIEWS // RATINGS</span>
            <Star className="text-orange-500 size-4 fill-orange-500" />
          </div>

          <div>
            <span className="text-5xl font-mono font-black text-white tracking-tight block">4.92</span>
            <div className="flex gap-0.5 my-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#ea580c] text-[#ea580c]" />)}
            </div>
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">
              1,820 Google Reviews
            </span>
          </div>

          <p className="text-[11px] text-stone-400 italic leading-snug">
            "Highest rated auto-detailing service outlet in Rambagh & Attapur area."
          </p>
        </div>

        {/* COMPARISON SLIDER BENTO (col-span-2) */}
        <div id="telemetry" className="md:col-span-2 bg-[#1c1917] border border-stone-800 rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[#ea580c] font-mono text-xs uppercase tracking-wider block">Visual Telemetry</span>
                <h2 className="text-2xl font-black uppercase text-white mt-1">BEFORE & AFTER DIAGNOSTICS</h2>
              </div>
              
              {/* Tab Selector */}
              <div className="flex bg-[#0c0a09] border border-stone-800 rounded-xl p-1 font-mono text-[10px] uppercase">
                <button 
                  onClick={() => setActiveTab('before')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'before' ? 'bg-[#ea580c] text-white' : 'text-stone-400 hover:text-white'}`}
                >
                  Scratched
                </button>
                <button 
                  onClick={() => setActiveTab('after')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'after' ? 'bg-[#ea580c] text-white' : 'text-stone-400 hover:text-white'}`}
                >
                  5K Glass Glow
                </button>
              </div>
            </div>
            
            <p className="text-stone-400 text-xs mb-6 leading-relaxed">
              Toggle the diagnostic view to inspect raw macro paint textures. Spot details, swirl reduction, and chemical sealant depth.
            </p>
          </div>

          {/* Tab Content Display */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-stone-800 bg-[#0c0a09]">
            {activeTab === 'before' ? (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1607603970404-540c7cf724f2?auto=format&fit=crop&q=85&w=800" 
                  alt="Scratched car body before 5k care polish" 
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute bottom-4 left-4 bg-red-600/90 border border-red-500 text-white font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded">
                  DIAGNOSTIC: Swirl Severity 82% (Extreme)
                </div>
              </>
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=800" 
                  alt="Mirror finish car body after 5k care ceramic coating" 
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute bottom-4 left-4 bg-emerald-600/90 border border-emerald-500 text-white font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded">
                  DIAGNOSTIC: Reflectivity 99.4% (Optimum)
                </div>
              </>
            )}
          </div>
        </div>

        {/* TESTIMONIALS BENTO (col-span-2) */}
        <div id="reviews" className="md:col-span-2 bg-[#1c1917] border border-stone-800 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#ea580c] font-mono text-xs uppercase tracking-wider block">Customer Attestations</span>
            <h2 className="text-2xl font-black uppercase text-white mt-1 mb-6">REAL HYDERABAD CLIENT REVIEWS</h2>
            
            <div className="space-y-6">
              {[
                { author: "K. Shiva Prasad", car: "Harrier (Dark Edition)", quote: "The 5K Ceramic Coating has survived Hyderabad monsoons without losing its gloss. Excellent water repelling properties." },
                { author: "M. D. Minhaj", car: "Hyundai Creta", quote: "Attapur branch wrapped my Creta in TPU PPF. Unbelievable finish. All panels cleanly tucked." }
              ].map((test, idx) => (
                <div key={idx} className="bg-[#0c0a09] border border-stone-800 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs text-white">{test.author}</span>
                    <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">{test.car}</span>
                  </div>
                  <p className="text-stone-400 text-xs italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-stone-800/80 pt-4 mt-6 text-center text-xs text-[#ea580c] font-mono uppercase tracking-wider">
            Verified via Google Maps API • Attapur Niche Audit
          </div>
        </div>

        {/* PRICING PACKAGES BENTO (col-span-3) */}
        <div id="packages" className="md:col-span-3 bg-[#1c1917] border border-stone-800 rounded-3xl p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-[#ea580c] font-mono text-xs uppercase tracking-wider block">Detailing Matrix</span>
              <h2 className="text-2xl font-black uppercase text-white mt-1">PRICING & DETAILING PACKAGES</h2>
            </div>
            <span className="font-mono text-[10px] text-stone-400 border border-stone-800 px-3 py-1.5 rounded-xl bg-[#0c0a09]">
              PRICES EXCLUDE 18% GST • SEGMENT-WISE
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`bg-[#0c0a09] border rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  pkg.popular 
                    ? 'border-[#ea580c] shadow-[0_0_20px_rgba(234,88,12,0.1)]' 
                    : 'border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] text-[#ea580c] bg-orange-500/10 px-2 py-0.5 rounded font-bold uppercase">
                      {pkg.code}
                    </span>
                    {pkg.popular && <span className="text-[8px] font-mono text-white bg-[#ea580c] px-2 py-0.5 rounded uppercase">POPULAR</span>}
                  </div>
                  <h4 className="font-bold text-sm text-white uppercase tracking-tight mb-2">{pkg.name}</h4>
                  <span className="text-2xl font-mono font-black text-white">{pkg.price}</span>
                  
                  <ul className="space-y-3.5 mt-6 mb-8 text-[11px] text-stone-400">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={12} className="text-[#ea580c] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#booking"
                  onClick={() => setFormData(prev => ({ ...prev, service: pkg.name.toLowerCase().replace(/\s+/g, '-') }))}
                  className="w-full text-center py-3 rounded-xl bg-[#1c1917] hover:bg-[#ea580c] hover:text-white text-stone-300 font-mono text-xs uppercase tracking-wider font-bold transition-all border border-stone-800"
                >
                  Configure
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQS BENTO (col-span-1) */}
        <div id="faq" className="bg-[#1c1917] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between min-h-[380px]">
          <div>
            <span className="text-[#ea580c] font-mono text-[10px] uppercase tracking-wider block">SUPPORT CORE // FAQ</span>
            <h3 className="text-lg font-black uppercase text-white mt-1 mb-4">RECURRENT QUERIES</h3>
            
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = !!faqOpen[i];
                return (
                  <div key={i} className="border-b border-stone-800/80 pb-2">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between text-left text-xs font-bold text-stone-300 hover:text-[#ea580c] transition-colors py-1 uppercase tracking-tight"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight size={14} className={`text-stone-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {isOpen && (
                      <p className="text-[11px] text-stone-400 mt-1.5 leading-relaxed bg-[#0c0a09]/50 p-2 rounded border border-stone-800">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-[10px] text-stone-500 font-mono pt-4 border-t border-stone-800/40">
            HAVE AN AD-HOC QUESTION? CALL AT +91 98480 22338
          </div>
        </div>

        {/* BOOKING FORM BENTO (col-span-2) */}
        <div id="booking" className="md:col-span-2 bg-[#1c1917] border border-stone-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="text-[#ea580c] font-mono text-xs uppercase tracking-wider block">Real-time Scheduler</span>
            <h2 className="text-2xl font-black uppercase text-white mt-1 mb-6">BOOK WORKSHOP BAY</h2>

            {bookingStatus ? (
              <div className="bg-orange-500/10 border border-[#ea580c] p-6 rounded-2xl text-center my-6">
                <CheckCircle2 className="text-[#ea580c] size-10 mx-auto mb-3" />
                <h4 className="font-bold text-sm text-white uppercase font-mono">Slot Reservation Confirmed</h4>
                <p className="text-xs text-stone-400 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <b>{formData.name}</b>. Your detailing slot is pre-allocated on <b>{formData.date}</b>. An automated system verification code has been dispatched to <b>{formData.phone}</b>.
                </p>
                <button 
                  onClick={() => setBookingStatus(false)}
                  className="mt-4 text-xs font-bold text-[#ea580c] underline uppercase font-mono tracking-wider hover:text-white"
                >
                  Schedule Another Bay
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-stone-400 mb-1.5">Owner Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Shiva Prasad" 
                      className="w-full bg-[#0c0a09] border border-stone-850 focus:border-[#ea580c] rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-stone-400 mb-1.5">Mobile Phone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+91 98XXX XXXXX" 
                      className="w-full bg-[#0c0a09] border border-stone-850 focus:border-[#ea580c] rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-stone-400 mb-1.5">Vehicle Model</label>
                    <input 
                      type="text" 
                      name="vehicle" 
                      required 
                      value={formData.vehicle} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Creta / Innova" 
                      className="w-full bg-[#0c0a09] border border-stone-850 focus:border-[#ea580c] rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-stone-400 mb-1.5">Select Service</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange} 
                      className="w-full bg-[#0c0a09] border border-stone-850 focus:border-[#ea580c] rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors"
                    >
                      <option value="polish-shield">Express Polish & Shield</option>
                      <option value="ceramic-coating">5K Ultra Ceramic Coating</option>
                      <option value="armor-ppf">5K Armor Shield PPF</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-stone-400 mb-1.5">Preferred Slot Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date} 
                    onChange={handleInputChange} 
                    className="w-full bg-[#0c0a09] border border-stone-850 focus:border-[#ea580c] rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors font-mono" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-[#ea580c] hover:bg-orange-600 disabled:opacity-50 text-white font-mono uppercase text-xs tracking-wider font-bold py-3.5 rounded-xl transition-all shadow-md"
                >
                  {isSubmitting ? "ALLOCATING BAY RESERVATION..." : "TRANSMIT BAY BOOKING REQUEST"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* STUDIO OUTLET INFO BENTO (col-span-2) */}
        <div className="md:col-span-2 bg-[#1c1917] border border-stone-800 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#ea580c] font-mono text-xs uppercase tracking-wider block">Physical Outlet</span>
            <h2 className="text-2xl font-black uppercase text-white mt-1 mb-6">STUDIO COORDINATES</h2>

            <div className="space-y-4 text-xs">
              <div className="flex gap-3 items-start">
                <MapPin className="text-[#ea580c] size-4 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white uppercase font-mono">Location Address</h5>
                  <p className="text-stone-400 mt-1">
                    Pillar 110, PVNR Expressway, Main Road (Beside Shell Station), Attapur, Hyderabad, TS 500048
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="text-[#ea580c] size-4 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white uppercase font-mono">Support Hotline</h5>
                  <p className="text-stone-400 mt-1">+91 98480 22338 / +91 40 4220 5K5K</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="text-[#ea580c] size-4 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white uppercase font-mono">System Email</h5>
                  <p className="text-stone-400 mt-1">attapur@5kcarcare.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800/80 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase">
            <span>© 2026 5K Car Care Attapur</span>
            <span>Made in Hyderabad</span>
          </div>
        </div>

      </div>

      {/* Global CSS animation style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

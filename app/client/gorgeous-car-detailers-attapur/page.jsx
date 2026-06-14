"use client";
import React, { useState } from 'react';
import { 
  Car, Shield, Sparkles, Gem, Clock, Star, ArrowRight, Check, 
  ChevronDown, MapPin, Phone, Mail, Award, Flame, ThumbsUp, Wrench, Menu, X
} from 'lucide-react';

export default function GorgeousCarDetailers() {
  const [sliderValue, setSliderValue] = useState(50);
  const [faqOpen, setFaqOpen] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    package: 'signature-gold',
    message: ''
  });

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
      setContactSubmitted(true);
    }, 1500);
  };

  const services = [
    {
      icon: <Gem className="text-amber-500 w-6 h-6" />,
      title: "Gold Class 9H Ceramic Coating",
      description: "Nanotechnology bond providing supreme hydrophobic sheeting, extreme chemical resistance, and a permanent glass-like mirror shine.",
      duration: "2 Days",
      warranty: "3 to 5 Years"
    },
    {
      icon: <Shield className="text-amber-500 w-6 h-6" />,
      title: "Self-Healing PPF (TPU)",
      description: "Premium thermoplastic polyurethane film protecting against stone chips, highway debris, key scratches, and paint oxidation.",
      duration: "4 Days",
      warranty: "10 Years"
    },
    {
      icon: <Flame className="text-amber-500 w-6 h-6" />,
      title: "Multi-Stage Paint Correction",
      description: "Precision machine compounding and polishing to eliminate 95%+ of swirl marks, deep scratches, and chemical etching.",
      duration: "1-2 Days",
      warranty: "Restoration"
    },
    {
      icon: <Sparkles className="text-amber-500 w-6 h-6" />,
      title: "Luxury Interior Preservation",
      description: "Steam sterilization, deep leather conditioning, dashboard UV blocking coat, and premium alcantara refurbishment.",
      duration: "1 Day",
      warranty: "Antibacterial"
    },
    {
      icon: <Car className="text-amber-500 w-6 h-6" />,
      title: "Alloy Wheel & Caliper Protection",
      description: "Ultra-high temperature quartz coating that repels corrosive brake dust and road salt for effortless cleaning.",
      duration: "6 Hours",
      warranty: "2 Years"
    },
    {
      icon: <Wrench className="text-amber-500 w-6 h-6" />,
      title: "Hydrophobic Glass Shield",
      description: "A durable fluorine coating that repels rainwater, eliminates windshield glare, and dramatically increases wet-weather visibility.",
      duration: "3 Hours",
      warranty: "1 Year"
    }
  ];

  const packages = [
    {
      name: "Executive Restoration",
      price: "₹14,999",
      description: "Perfect for refreshing a daily driver showing moderate swirls and scratches.",
      features: [
        "Single-stage paint correction (removes 70% swirls)",
        "Premium quartz sealant (12-month shield)",
        "Express interior deep clean & vacuum",
        "Hydrophobic glass treatment",
        "Engine bay detailing & dressing"
      ]
    },
    {
      name: "Gorgeous Signature Gold",
      price: "₹29,999",
      description: "Our most popular multi-stage restoration & ceramic shielding package.",
      popular: true,
      features: [
        "Multi-stage machine paint correction (95% swirls removed)",
        "Dual-layer 9H nano-ceramic coating (3-year warranty)",
        "Complete alloy wheel & caliper ceramic prep",
        "Deep leather steam clean & antimicrobial treatment",
        "Full hydrophobic glass shield & rubber protection"
      ]
    },
    {
      name: "Ultimate PPF Armour",
      price: "₹1,19,999",
      description: "Unparalleled physical paint armor for absolute scratch & chip immunity.",
      features: [
        "Full-body high-gloss self-healing TPU PPF (180 microns)",
        "Edge-wrapping premium precision fitment",
        "PPF hydrophobic top coat sealer",
        "10-Year manufacturer yellowing warranty",
        "Free 1st annual maintenance inspection & detail"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "My black BMW 5 Series had bad swirl marks from daily cleaning. Gorgeous Car Detailers restored it to a flawless liquid-black glass finish. The ceramic coating makes cleaning a breeze. Phenomenal work in Attapur!",
      author: "Rahul Reddy",
      car: "BMW 5 Series (Black)",
      rating: 5
    },
    {
      quote: "Got the self-healing TPU PPF done on my new Fortuner. They wrapped all edges seamlessly—you can barely tell it is on. Their attention to detail on the engine bay and trim is on another level.",
      author: "Vikram K. Rao",
      car: "Toyota Fortuner (Super White)",
      rating: 5
    },
    {
      quote: "Outstanding interior rejuvenation. The leather on my Mercedes E-Class feels like it just rolled out of the showroom, and the musty AC smell is completely gone. Gold standard service.",
      author: "Dr. Ananya Naidu",
      car: "Mercedes-Benz E-Class",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "What is the difference between PPF and Ceramic Coating?",
      a: "Paint Protection Film (PPF) is a thick, physical thermoplastic polyurethane barrier that guards against physical impacts like stone chips, key scratches, and minor scuffs. Ceramic Coating is a chemical nano-glass layer that cures over the paint, providing extreme gloss, hydrophobic water sheeting, UV block, and protection against chemical stains (bird droppings, acid rain), but it does not protect against rocks or physical keying."
    },
    {
      q: "How long does the car detailing process take?",
      a: "A standard wash or express detail takes 2-4 hours. Paint Correction + Ceramic Coating takes 2 full days to allow correct paint leveling and multi-stage coating curing. Full-body PPF installations take 4 to 5 days, as we do meticulous edge cleaning and custom wrapping for a invisible seamless finish."
    },
    {
      q: "How do I maintain my car after Ceramic Coating or PPF?",
      a: "We recommend washing your vehicle weekly using the two-bucket method with a pH-neutral shampoo. Avoid automatic wash bays with harsh nylon brushes, which will scratch the coating. Regularly rinse off bird droppings immediately, and bring the car back every 12 months for a quick inspection and booster top coat."
    },
    {
      q: "Where in Attapur are you located?",
      a: "Our state-of-the-art detailing studio is located near PVNR Expressway Pillar 115, Rambagh, Attapur, Hyderabad. We have an indoor dust-free dust-controlled bay specifically designed for optimal ceramic curing and PPF fitment."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-amber-500 selection:text-black antialiased">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-black py-2 px-4 text-center text-xs font-black tracking-widest uppercase">
        ⚡ Attapur's Premier Detailing Lounge — Experience Showroom Finish Everyday ⚡
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#030303]/90 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
              <Car className="text-black w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                GORGEOUS
              </span>
              <span className="text-[10px] tracking-[0.25em] font-medium text-slate-400 block -mt-1 uppercase">
                Car Detailers
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wider uppercase">
            <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Services</a>
            <a href="#packages" className="text-slate-300 hover:text-amber-400 transition-colors">Packages</a>
            <a href="#gallery" className="text-slate-300 hover:text-amber-400 transition-colors">Before/After</a>
            <a href="#testimonials" className="text-slate-300 hover:text-amber-400 transition-colors">Reviews</a>
            <a href="#faq" className="text-slate-300 hover:text-amber-400 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#book" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-black uppercase text-xs tracking-widest px-6 py-3 rounded-full border border-yellow-300/30 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] transition-all duration-300 hover:-translate-y-0.5"
            >
              VIP Booking
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 flex flex-col gap-6 md:hidden">
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-widest uppercase hover:text-amber-400"
          >
            Services
          </a>
          <a 
            href="#packages" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-widest uppercase hover:text-amber-400"
          >
            Packages
          </a>
          <a 
            href="#gallery" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-widest uppercase hover:text-amber-400"
          >
            Before/After
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-widest uppercase hover:text-amber-400"
          >
            Reviews
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-widest uppercase hover:text-amber-400"
          >
            FAQ
          </a>
          <a 
            href="#book" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-black uppercase tracking-widest py-4 rounded-xl mt-6"
          >
            VIP Booking
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-amber-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} className="animate-spin-slow" />
              Attapur's Elite Automotive Spa
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              GLOSS THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500 filter drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                DEFIES LIMITS.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              We don’t just clean cars; we engineer mirror-like reflections. Discover the ultimate shielding with our 9H Nano-Ceramic coatings and self-healing thermoplastic paint films in Attapur, Hyderabad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#book"
                className="inline-flex justify-center items-center px-8 py-4 text-sm font-black uppercase tracking-widest text-black bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
              >
                Schedule Appointment
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#gallery"
                className="inline-flex justify-center items-center px-8 py-4 text-sm font-black uppercase tracking-widest text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl hover:-translate-y-0.5 transition-all"
              >
                View Showcase
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800">
              <div>
                <span className="text-3xl font-black block text-amber-500">1200+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Cars Restored</span>
              </div>
              <div>
                <span className="text-3xl font-black block text-amber-500">9H</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Ceramic Hardness</span>
              </div>
              <div>
                <span className="text-3xl font-black block text-amber-500">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur-md opacity-25" />
            <div className="relative bg-[#0d0d0e] border border-amber-500/30 rounded-3xl p-3 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=800" 
                alt="Detailed Supercar Paint Protection Film" 
                className="rounded-2xl object-cover h-[450px] w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur border border-amber-500/20 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-500 uppercase font-black tracking-widest">Featured Service</p>
                  <h4 className="font-bold text-sm text-white">Full-Body TPU PPF (Matte Finish)</h4>
                </div>
                <div className="bg-amber-500 text-black text-xs font-black px-3 py-1.5 rounded uppercase tracking-widest">
                  VIP Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 border-b border-amber-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2">
              Bespoke Detailing Services
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div 
                key={i} 
                className="bg-[#0b0b0c] border border-slate-900 hover:border-amber-500/30 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-all" />
                
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
                  {svc.icon}
                </div>
                
                <h3 className="text-xl font-bold uppercase mb-3 text-white group-hover:text-amber-400 transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-800/60 pt-4">
                  <span>Time: <b>{svc.duration}</b></span>
                  <span>Warranty: <b>{svc.warranty}</b></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Before/After Gallery */}
      <section id="gallery" className="py-24 bg-neutral-950 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Gallery Info */}
            <div className="lg:col-span-2">
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Visual Proof</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 mb-6">
                THE TRANSFORMATION
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Drag the interactive mirror slider to see the difference between neglected paintwork suffering from chemical oxidation/swirl marks, and our flawless Gorgeous Signature restoration.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center text-[10px] text-red-400 font-bold mt-1">✗</div>
                  <p className="text-slate-400 text-sm"><b>Before:</b> Paint looks dull, covered in circular swirl marks, scratches, and acid rain deposits.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-amber-950/80 border border-amber-500 flex items-center justify-center text-[10px] text-amber-400 font-bold mt-1">✓</div>
                  <p className="text-slate-400 text-sm"><b>After:</b> Glass-coated deep wet reflections, protected with a self-healing optical TPU film.</p>
                </div>
              </div>
            </div>

            {/* Slider Widget */}
            <div className="lg:col-span-3">
              <div className="relative w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group select-none">
                
                {/* Before Image */}
                <img 
                  src="https://images.unsplash.com/photo-1607603970404-540c7cf724f2?auto=format&fit=crop&q=85&w=1200" 
                  alt="Swirly Car Paint Before Detailing" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-4 left-4 bg-red-950/90 backdrop-blur border border-red-500/50 text-red-200 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md z-20">
                  Swirl Marks & Dull Paint (Before)
                </div>

                {/* After Image (clipped) */}
                <div 
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=1200" 
                    alt="Glossy Car Paint After Ceramic Coating" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-950/90 backdrop-blur border border-amber-500 text-amber-200 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md z-20">
                    Gorgeous 9H Ceramic Shine (After)
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-[4px] bg-amber-500 z-20 cursor-ew-resize"
                  style={{ left: `${sliderValue}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-black border-2 border-black flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.6)] font-bold">
                    ↔
                  </div>
                </div>

                {/* Invisible input range covering the container */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderValue} 
                  onChange={(e) => setSliderValue(Number(e.target.value))} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" 
                />
              </div>
              <p className="text-center text-xs text-slate-500 mt-4">
                ← Swipe or drag the handle to inspect restoration details →
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-24 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Investment Options</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2">
              Detailing & Protection Plans
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`bg-[#0b0b0c] rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular 
                    ? 'border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] scale-105 lg:scale-105 z-10' 
                    : 'border-slate-900 hover:border-slate-800'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-yellow-300/30">
                    Most Popular Choice
                  </span>
                )}
                
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{pkg.description}</p>
                  
                  <div className="border-b border-slate-800 pb-6 mb-6">
                    <span className="text-4xl font-black text-amber-500">{pkg.price}</span>
                    <span className="text-xs text-slate-500 block mt-1">Starting Price (Segment-wise pricing applies)</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300 gap-3">
                        <Check size={16} className="text-amber-500 mt-1 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#book"
                  onClick={() => setFormData(prev => ({ ...prev, package: pkg.name.toLowerCase().replace(/\s+/g, '-') }))}
                  className={`w-full py-4 rounded-xl text-center uppercase tracking-widest text-xs font-black transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg hover:from-amber-600 hover:to-yellow-600'
                      : 'bg-slate-900 border border-slate-800 text-white hover:bg-slate-800'
                  }`}
                >
                  Select Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-neutral-950 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Customer Reviews</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2">
              TRUSTED BY CAR ENTHUSIASTS
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div 
                key={i} 
                className="bg-[#0b0b0c] border border-slate-900 p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">{test.author}</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">{test.car}</p>
                  </div>
                  <ThumbsUp size={16} className="text-amber-500/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-24 border-b border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Knowledge Base</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2">
              DETAILING FAQS
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = !!faqOpen[i];
              return (
                <div 
                  key={i} 
                  className="bg-[#0b0b0c] border border-slate-900 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white hover:text-amber-400 transition-colors uppercase tracking-wider text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-900/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking and Contact Section */}
      <section id="book" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Detailing Studio Details */}
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Visit Us</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 mb-6">
                VIP DETAIlING LOUNGE
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10">
                Book a VIP slot today. Walk-ins are subject to studio availability. For PPF and multi-stage ceramic services, we recommend reserving at least 48 hours in advance to guarantee an indoor clean-room bay.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white uppercase tracking-wider">Studio Address</h5>
                    <p className="text-slate-400 text-sm mt-1">
                      Pillar 115, PVNR Expressway, Rambagh Road, Attapur, Hyderabad, Telangana 500048
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Phone className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white uppercase tracking-wider">Hotline & WhatsApp</h5>
                    <p className="text-slate-400 text-sm mt-1">
                      +91 98480 22338 / +91 40 4220 5K5K
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Mail className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white uppercase tracking-wider">Email Inquiry</h5>
                    <p className="text-slate-400 text-sm mt-1">
                      detailing@gorgeousdetailers.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-10 p-6 rounded-2xl bg-[#0b0b0c] border border-slate-900 inline-block">
                <h6 className="font-bold text-amber-500 text-xs uppercase tracking-widest mb-3">Studio Working Hours</h6>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>Monday - Saturday: 09:00 AM - 08:00 PM</p>
                  <p>Sunday: 10:00 AM - 04:00 PM (Prior appointments only)</p>
                </div>
              </div>
            </div>

            {/* Interactive VIP Appointment Form */}
            <div className="bg-[#0b0b0c] border border-amber-500/20 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-black uppercase text-white mb-2">Request a VIP Quote</h3>
              <p className="text-slate-400 text-xs mb-8">Receive a segment-specific quote & diagnostic report for your vehicle.</p>
              
              {contactSubmitted ? (
                <div className="bg-amber-500/10 border border-amber-500 text-slate-200 p-8 rounded-2xl text-center">
                  <Award className="text-amber-500 w-12 h-12 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-xl font-black uppercase text-white mb-2">VIP Reservation Received</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'valued client'}. Our Lead Detailing Consultant will contact you on <b>{formData.phone}</b> within 15 minutes to confirm your slot and discuss paint diagnostics.
                  </p>
                  <button 
                    onClick={() => setContactSubmitted(false)}
                    className="mt-6 text-xs font-bold text-amber-500 hover:text-white underline tracking-wider uppercase"
                  >
                    Submit another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#030303] border border-slate-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-[#030303] border border-slate-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Vehicle Make & Model</label>
                      <input 
                        type="text" 
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. BMW 5 Series / Creta"
                        className="w-full bg-[#030303] border border-slate-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Preferred Protection</label>
                      <select 
                        name="package"
                        value={formData.package}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] border border-slate-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      >
                        <option value="executive-restoration">Executive Restoration (₹14,999+)</option>
                        <option value="signature-gold">Gorgeous Signature Gold (₹29,999+)</option>
                        <option value="ultimate-ppf-armour">Ultimate PPF Armour (₹1,19,999+)</option>
                        <option value="custom">Other Custom Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Special Detailing Instructions</label>
                    <textarea 
                      rows="3" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mention paint swirls, deep scuffs, leather condition, or specific concerns..."
                      className="w-full bg-[#030303] border border-slate-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 disabled:opacity-50 text-black font-black uppercase text-xs tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all"
                  >
                    {isSubmitting ? 'Securing Slot...' : 'Reserve My Detailing Session'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030303] border-t border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center">
                <Car className="text-black w-4 h-4" />
              </div>
              <span className="text-sm font-black uppercase text-white tracking-widest">
                GORGEOUS CAR DETAILERS
              </span>
            </div>
            <p className="text-xs text-slate-500">
              © 2026 Gorgeous Car Detailers Attapur. All rights reserved. Precision crafted in Hyderabad.
            </p>
          </div>
          
          <div className="flex gap-6 text-xs font-black tracking-widest text-slate-500 uppercase">
            <a href="#services" className="hover:text-amber-500">Services</a>
            <a href="#packages" className="hover:text-amber-500">Pricing</a>
            <a href="#faq" className="hover:text-amber-500">FAQ</a>
            <a href="#book" className="hover:text-amber-500">Contact</a>
          </div>
        </div>
      </footer>

      {/* Global slow animations style */}
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

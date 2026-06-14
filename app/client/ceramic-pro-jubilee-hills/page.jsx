"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Flame, 
  Zap, 
  Gauge, 
  Sliders, 
  CheckCircle, 
  HelpCircle, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  Eye,
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  RefreshCw,
  Compass
} from 'lucide-react';

// Cyberpunk / Retro-Futurism Detailing Studio Page
export default function CeramicProJubileeHills() {
  const [activeTab, setActiveTab] = useState('coating');
  const [galleryBefore, setGalleryBefore] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    service: 'Platinum Ceramic Coating',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Clear form after delay
      setBookingForm({
        name: '',
        phone: '',
        email: '',
        carModel: '',
        service: 'Platinum Ceramic Coating',
        message: ''
      });
    }, 3000);
  };

  const servicesList = [
    {
      id: 'coating',
      title: 'CYBER-SHIELD CERAMIC COATING',
      description: 'Ultra-hydrophobic nanotech formulation bonding at molecular levels. Provides chemical resistance, self-cleaning slickness, and deep holographic gloss.',
      specs: ['9H & 10H Hardness Rating', 'Hydrophobic Contact Angle > 115°', 'UV Shielding & Acid Rain Protection', 'Permanent Chemical Bond'],
      icon: Shield,
      imagePlaceholder: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'ppf',
      title: 'CARBON-ARMOUR PPF (PAINT PROTECTION FILM)',
      description: 'Military-grade self-healing thermoplastic polyurethane (TPU) protection. Thermally heals minor scratches, absorbs rock chips, and maintains showroom gloss.',
      specs: ['8 Mil Core TPU Thickness', 'Instant Heat-Activated Self-Healing', 'Non-Yellowing UV Stable Formula', 'Edge-Wrap Precision Fitting'],
      icon: Layers,
      imagePlaceholder: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'correction',
      title: 'LASER-CALIBRATED PAINT CORRECTION',
      description: 'Microscopic level paint leveling under high-intensity calibration lights. Eliminates 90-99% of swirl marks, hologram scratches, and severe clearcoat oxidation.',
      specs: ['Electronic Paint Thickness Gauging', 'Multi-Stage Micro-Abrasive Compounds', 'Dual-Action Rotary Calibration', 'Perfect Mirror-Reflection Depth'],
      icon: Sliders,
      imagePlaceholder: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'interior',
      title: 'CYBER-CABIN SANITIZE & COAT',
      description: 'High-performance interior protection. Hydrophobic shielding for leather, Alcantara conditioning, dust-repellent dashboards, and high-frequency ozone sterilization.',
      specs: ['Zero-Gloss Invisible Leather Protection', 'Alcantara Fiber Nourishment', 'Ozone Odor & Bacterial Purge', 'Spill-Resistant Textile Protection'],
      icon: Cpu,
      imagePlaceholder: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const packagesList = [
    {
      name: 'CYBER LITE COATING',
      price: '₹22,000',
      duration: '1-2 Days',
      badge: 'ENTRY ARMOR',
      warranty: '2 Year Warranty',
      features: [
        'Single Layer Ceramic Pro Coat (7H)',
        'Single Stage Paint Correction (Swirl Removal)',
        'Hydrophobic Glass Treatment (Windshield)',
        'Basic Wheel Face Detailing',
        'Complimentary 1st Maintenance Wash'
      ],
      color: 'border-cyan-500/30 text-cyan-400 glow-cyan'
    },
    {
      name: 'PRO-GLOW PLATINUM',
      price: '₹48,000',
      duration: '3 Days',
      badge: 'POPULAR ARMOR',
      warranty: '5 Year Warranty',
      features: [
        'Dual Layer Ceramic Pro Coat (9H Hardness)',
        'Dual Stage Laser Paint Correction (95% Defects Gone)',
        'Full Ceramic Glass Coating (All Windows)',
        'High-Temp Wheel Barrel & Caliper Coating',
        'Cyber Interior Textile Shielding',
        'Annual Inspection & Deep Conditioning'
      ],
      color: 'border-pink-500 text-pink-500 glow-pink bg-pink-950/10'
    },
    {
      name: 'KAVACH TPU PPF',
      price: '₹1,35,000',
      duration: '5 Days',
      badge: 'ULTIMATE SHIELD',
      warranty: '10 Year Warranty',
      features: [
        'Full Body Self-Healing TPU Film (8 Mil)',
        'Pre-Film Multi-Stage Paint Prep Correction',
        'Wrapped Invisible Edges Strategy',
        'Top-Coat Hydrophobic Ceramic Infusion',
        'Lifetime Self-Healing Performance Check',
        'Complimentary Trim & Headlight Tinting'
      ],
      color: 'border-cyan-400 text-cyan-300 glow-cyan'
    }
  ];

  const beforeAfterGallery = {
    beforeDesc: 'Swirl marks, spiderweb scratches, and faded oxidation blocking light reflections.',
    afterDesc: 'Perfect optical clarity, high-definition mirror depth, and self-healing liquid glow.',
    beforeImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop'
  };

  const faqList = [
    {
      q: 'What is the curing time for your Ceramic Coatings?',
      a: 'Initial curing takes 24 hours under our special shortwave infrared heat lamps inside our Attapur workshop. You can drive the car after 24 hours, but we advise against using high-pH detergents or shampoos for the first 7 days to allow full crystallization of the nanoparticles.'
    },
    {
      q: 'How does self-healing PPF actually work?',
      a: 'Our Carbon-Armour PPF uses a specialized elastomeric polymer top coat. When exposed to heat (either Hyderabad sun or hot water), the polymers relax back into their original smooth, un-scratched structure, completely erasing micro-swirls and surface light scratches.'
    },
    {
      q: 'Do you offer warranty verification certificates?',
      a: 'Absolutely. Every premium coating or PPF job receives a digital certificate logged directly with Ceramic Pro Hyderabad. This validates your warranty and includes a scheduled annual inspection log to ensure the coatings are functioning optimally.'
    },
    {
      q: 'Where is your detailing studio located in Hyderabad?',
      a: 'We are situated in Attapur, Hyderabad, serving clients from Jubilee Hills, Gachibowli, Banjara Hills, and surrounding tech zones. We also offer VIP flatbed concierge pickup if you do not wish to drive your supercar through traffic.'
    }
  ];

  const testimonials = [
    {
      name: 'Aditya Reddy',
      car: 'Porsche 911 GT3',
      location: 'Jubilee Hills',
      quote: 'The neon grid alignment process they use is crazy. They corrected minor scratches on my GT3 that other studios in Hyderabad said were impossible. The Platinum package makes the paint look wetter than rainwater.',
      rating: 5
    },
    {
      name: 'Rohit K.',
      car: 'BMW M5 Competition',
      location: 'Attapur',
      quote: 'Opted for the Kavach TPU PPF. Rock chips from the ORR highways used to scare me, but now they literally self-heal when parked in the sun. The edge wrapping is completely invisible.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Khan',
      car: 'Mercedes AMG GLE 53',
      location: 'Gachibowli',
      quote: 'Amazing attention to detail. The Cyber Cabin coating saved my beige nappa leather seats from coffee spills already. The customer lounge has high-speed Wi-Fi and premium espresso.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#050508] font-sans text-slate-100 selection:bg-pink-500 selection:text-white relative overflow-hidden">
      
      {/* Cyber Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>
      
      {/* Glowing Mesh Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-[#050508]/85 backdrop-blur-md border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <Shield className="w-6 h-6 text-black stroke-[2.5]" />
              </div>
              <div>
                <span className="font-black text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-pink-500 font-mono">
                  CERAMIC PRO
                </span>
                <span className="block text-[9px] text-cyan-400 font-bold uppercase tracking-[0.25em] font-mono leading-none">
                  Jubilee Hills / Attapur
                </span>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-8 font-mono text-xs font-semibold">
              <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider">01. Services</a>
              <a href="#gallery" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider">02. Lab Calibration</a>
              <a href="#packages" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider">03. Pricing</a>
              <a href="#testimonials" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider">04. Crew Feed</a>
              <a href="#faq" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider">05. Support</a>
            </nav>

            <a 
              href="#booking" 
              className="relative inline-flex items-center justify-center px-6 py-2 text-xs font-mono font-bold tracking-widest text-black bg-cyan-400 rounded-sm hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] duration-300 active:scale-95 group"
            >
              <span>SYS_INITIATE</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                CYBER DETAILED CALIBRATION STUDIO
              </div>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-none">
                <span className="text-white">SHATTER THE</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">GLOSS BARRIER.</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-mono text-xs">
                We do not just wash cars; we recalibrate their aesthetics. Employing custom 9H molecular ceramic armor and self-healing thermal TPU shields under precision light arrays. Engineered for the high-end tuner car owners of Attapur and Jubilee Hills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono text-xs">
                <a 
                  href="#booking"
                  className="flex items-center justify-center px-8 py-4 bg-pink-500 text-white font-bold tracking-widest uppercase hover:bg-pink-600 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]"
                >
                  SECURE YOUR PACKAGE
                </a>
                <a 
                  href="#services"
                  className="flex items-center justify-center px-8 py-4 bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-slate-800 transition-all font-bold tracking-widest uppercase text-cyan-400"
                >
                  ANALYZE TECH
                </a>
              </div>

              {/* Status Board */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-900 font-mono">
                <div>
                  <div className="text-2xl font-black text-cyan-400">10H</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Armor Hardness</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-pink-500">1,200+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Supercars Protected</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Calibration Quality</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Tech Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-lg blur-2xl opacity-50 z-0"></div>
              
              {/* Carbon Fiber Look Outer Border Container */}
              <div className="relative bg-[#0d0e15]/90 border border-cyan-500/30 p-6 sm:p-8 rounded-lg shadow-2xl z-10 overflow-hidden">
                {/* Tech scanline visual decoration */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 opacity-60 animate-bounce"></div>
                
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-[11px] tracking-wider font-bold">CYBER LAB REPORT</span>
                  </div>
                  <span className="text-[10px] text-pink-500 font-semibold">SECURE_ACCESS: GRANTED</span>
                </div>

                <div className="space-y-5 font-mono text-[11px] text-slate-300">
                  <div className="bg-[#050508] p-3 border border-slate-800 rounded">
                    <span className="text-cyan-400 block font-bold mb-1">STAGING DETECTED:</span>
                    <p className="text-[10px]">Hyderabad highway atmospheric damage: UV UV-A 92%, Acidic Dust particulates 78%, Swirl scratches severe.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>PAINT CALIBRATION RATIO:</span>
                      <span className="text-pink-500 font-bold">99.2%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-pink-500 h-full w-[99%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>CERAMIC LAYER CRYSTALLIZATION:</span>
                      <span className="text-cyan-400 font-bold">100% SUCCESS</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[100%]" />
                    </div>
                  </div>

                  <div className="bg-[#050508]/50 p-4 border border-pink-500/20 rounded flex items-center justify-between">
                    <div>
                      <span className="block text-white font-bold text-[10px]">CURRENT VEHICLE IN BAY:</span>
                      <span className="text-[9px] text-slate-400">PORSCHE 911 (JUBILEE HILLS)</span>
                    </div>
                    <div className="px-2.5 py-1 bg-pink-900/40 text-pink-400 border border-pink-500/30 rounded text-[9px] font-bold animate-pulse">
                      STAGE_4_CURING
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-t border-slate-900 bg-[#07070c] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-pink-500 font-mono text-xs font-bold uppercase tracking-[0.3em] block">
              [ 01. ARMOR PROTOCOLS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              ADVANCED DETAILING SPECIFICATIONS
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          </div>

          {/* Interactive Services Tab system */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 space-y-2 font-mono text-xs">
              {servicesList.map((service) => {
                const Icon = service.icon;
                const isActive = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-lg border text-left transition-all ${
                      isActive 
                        ? 'bg-[#10111a] border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                        : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <span className="font-bold uppercase tracking-wider">{service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-cyan-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display area */}
            <div className="lg:col-span-8 bg-[#0b0c13] border border-slate-900 p-6 sm:p-8 rounded-lg relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-2xl"></div>
              
              {servicesList.map((service) => {
                if (service.id !== activeTab) return null;
                const Icon = service.icon;
                return (
                  <div key={service.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-slate-900 rounded border border-cyan-500/20 text-cyan-400">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-mono tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      <span className="text-[10px] text-pink-500 font-mono font-bold px-2 py-1 bg-pink-950/20 border border-pink-500/20 rounded">
                        SYS_ACTIVE
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-2 font-mono text-[11px]">
                      {service.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-300 bg-slate-950/80 p-3 border border-slate-900 rounded hover:border-cyan-500/30 transition-all">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Image / Interactive visual placeholder */}
                    <div className="relative aspect-video w-full rounded overflow-hidden border border-slate-900">
                      <img 
                        src={service.imagePlaceholder} 
                        alt={service.title} 
                        className="object-cover w-full h-full opacity-60 filter grayscale hover:grayscale-0 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-cyan-400 flex items-center gap-2">
                        <Eye className="w-4 h-4 animate-pulse" />
                        <span>OPTICAL CALIBRATION VISUAL_BAY</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Lab Calibration / Before After Interactive Gallery */}
      <section id="gallery" className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.3em] block">
                [ 02. MIRROR SYSTEM LAB ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-none">
                PAINT REFLECTION CALIBRATION
              </h2>
              <p className="text-slate-400 font-mono text-xs leading-relaxed">
                Our electronic light tunnels reveal flaws invisible to the naked eye. Slide back and forth to see the extreme transformation from a swirl-damaged clearcoat to the glassified 10H ceramic shield finish.
              </p>
              
              {/* Interactive State Toggle Buttons */}
              <div className="flex gap-4 pt-2 font-mono text-xs">
                <button 
                  onClick={() => setGalleryBefore(true)}
                  className={`px-6 py-3 border font-bold transition-all ${
                    galleryBefore 
                      ? 'bg-slate-900 border-pink-500 text-pink-500 glow-pink' 
                      : 'border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  VIEW STAGED DEFECTS (BEFORE)
                </button>
                <button 
                  onClick={() => setGalleryBefore(false)}
                  className={`px-6 py-3 border font-bold transition-all ${
                    !galleryBefore 
                      ? 'bg-slate-900 border-cyan-400 text-cyan-400 glow-cyan' 
                      : 'border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  VIEW CRYSTALLIZED FINISH (AFTER)
                </button>
              </div>

              <div className="p-4 bg-slate-950/60 border border-slate-900 rounded font-mono text-[11px] text-slate-400">
                <span className="text-white font-bold block mb-1">OPTICAL REFLECTANCE LOGS:</span>
                {galleryBefore ? beforeAfterGallery.beforeDesc : beforeAfterGallery.afterDesc}
              </div>
            </div>

            {/* Live Interactive Graphic Display */}
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-30"></div>
              <div className="relative bg-[#0d0e15] p-2 border border-slate-800 rounded-lg overflow-hidden group">
                
                {/* Visual Canvas Display */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 rounded overflow-hidden">
                  <img 
                    src={galleryBefore ? beforeAfterGallery.beforeImage : beforeAfterGallery.afterImage} 
                    alt="Detailing State Result" 
                    className="object-cover w-full h-full transition-all duration-500" 
                  />
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                  
                  {/* Floating State Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-slate-800 rounded font-mono text-[10px] tracking-widest uppercase">
                    {galleryBefore ? (
                      <span className="text-pink-500 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
                        SWIRLED_PAINT_CLEARCOAT
                      </span>
                    ) : (
                      <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        HYDRO_GLASS_10H_ARMOUR
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1 border border-slate-900 rounded font-mono text-[9px] text-slate-400">
                    DIAGNOSTIC CALIBRATION VIEWPORT
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Packages Section */}
      <section id="packages" className="py-24 border-t border-slate-900 bg-[#07070c] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.3em] block">
              [ 03. QUANTUM PACKAGES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              DETAILING COATED PACKAGES
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative bg-[#0d0e15] border rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1.5 duration-300 ${pkg.color}`}
              >
                
                {/* Package Header */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] tracking-wider font-bold border border-current px-2.5 py-0.5 rounded">
                      {pkg.badge}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">{pkg.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black tracking-tight uppercase text-white font-mono">
                    {pkg.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-black text-white font-mono">{pkg.price}</span>
                    <span className="text-[10px] font-mono text-slate-400">/ STARTING</span>
                  </div>
                  
                  <div className="font-mono text-xs font-semibold py-1 px-3 bg-slate-950/80 rounded border border-slate-900 flex justify-between items-center text-slate-200">
                    <span>WARRANTY MATRIX</span>
                    <span className="text-cyan-400 font-bold">{pkg.warranty}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-4 my-8 font-mono text-[11px] text-slate-300 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href="#booking"
                  className="w-full text-center py-4 bg-slate-900 border border-current hover:bg-slate-800 transition-all font-mono text-xs font-bold tracking-widest uppercase text-white"
                >
                  SELECT_ARMOR
                </a>
              </div>
            ))}
          </div>

          {/* Custom disclaimer */}
          <div className="mt-10 p-5 bg-[#0d0e15] border border-slate-900 rounded font-mono text-[10px] text-slate-400 text-center max-w-4xl mx-auto">
            <span className="text-pink-500 font-bold">CALIBRATION NOTES:</span> Prices fluctuate based on car dimensions (Hatchback/Sedan vs SUV/Supercar). Multi-stage correction pricing will be finalized during initial paint thickness inspection.
          </div>

        </div>
      </section>

      {/* Testimonials Crew Feed */}
      <section id="testimonials" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-pink-500 font-mono text-xs font-bold uppercase tracking-[0.3em] block">
              [ 04. CREW AGENT FEED ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              HYDERABAD ROAD TESTED FEEDBACK
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b0c13] border border-slate-900 p-6 rounded-lg relative overflow-hidden flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
              >
                
                {/* Glowing border corner decorations */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
                
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs font-mono leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-900 font-mono">
                  <div>
                    <h4 className="text-white font-bold text-xs">{test.name}</h4>
                    <span className="text-[9px] text-cyan-400 uppercase tracking-wider">{test.car}</span>
                  </div>
                  <span className="text-[9px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-pink-500" />
                    {test.location}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 border-t border-slate-900 bg-[#07070c] relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.3em] block">
              [ 05. CORE KNOWLEDGE BASE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              FREQUENTLY CALIBRATED DATA
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-[#0d0e15] border border-slate-900 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-800"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-5 text-left font-mono text-xs font-bold tracking-wider text-white select-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-pink-500 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 shrink-0 ml-4" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 border-t border-slate-900 bg-[#050508]/50 text-slate-300 font-mono text-xs leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="booking" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left studio info */}
            <div className="lg:col-span-5 space-y-8 font-mono">
              <div className="space-y-4">
                <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.3em] block">
                  [ 06. TRANSMISSION CHANNELS ]
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                  INITIATE DETAILS
                </h2>
                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                  Have questions or want to secure your detailing calibration slot? Send your transmission parameters and our crew agents will respond within 60 minutes.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-4 p-4 bg-[#0d0e15] border border-slate-900 rounded hover:border-cyan-500/20 transition-all">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-white block font-bold">PHYSICAL SECTOR</span>
                    <span className="text-slate-400">Ring Road Junction, Attapur, Hyderabad, TS</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0d0e15] border border-slate-900 rounded hover:border-cyan-500/20 transition-all">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <div>
                    <span className="text-white block font-bold">SYSTEM TELEPHONICS</span>
                    <span className="text-slate-400">+91 98480 22338 / +91 99899 44556</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0d0e15] border border-slate-900 rounded hover:border-cyan-500/20 transition-all">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-white block font-bold">HYPERLINK INBOX</span>
                    <span className="text-slate-400">ops@ceramicpro-jubileehills.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0d0e15] border border-slate-900 rounded hover:border-cyan-500/20 transition-all">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <div>
                    <span className="text-white block font-bold">UPTIME SCHEDULE</span>
                    <span className="text-slate-400">Mon - Sun | 09:00 - 21:00 IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-[#0d0e15] border border-cyan-500/20 p-6 sm:p-8 rounded-lg relative overflow-hidden">
              {/* Scanline decoration */}
              <div className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-cyan-400 to-pink-500"></div>

              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 font-mono">
                  <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">TRANSMISSION RECEIVED</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Slot booking data processed correctly. Detailing operator agents will contact you via WhatsApp shortly to finalize custom parameters.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-cyan-400 border border-cyan-500/20 px-4 py-2 hover:border-cyan-400 transition-all mt-4"
                  >
                    RESET_PORT
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6 font-mono text-xs">
                  <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                    <span className="text-white font-bold text-sm uppercase">TRANSMIT RESERVATION PARAMETERS</span>
                    <span className="text-pink-500">SYS_PORT_7749</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-400 block font-bold">CLIENT NAME</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        placeholder="e.g. Vikram Verma" 
                        className="w-full bg-[#050508] border border-slate-800 focus:border-cyan-400 p-3.5 rounded text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 block font-bold">PHONE NUMBER</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full bg-[#050508] border border-slate-800 focus:border-cyan-400 p-3.5 rounded text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-400 block font-bold">EMAIL ADDRESS</label>
                      <input 
                        type="email" 
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                        placeholder="e.g. vikram@domain.com" 
                        className="w-full bg-[#050508] border border-slate-800 focus:border-cyan-400 p-3.5 rounded text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 block font-bold">VEHICLE BRAND & MODEL</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.carModel}
                        onChange={(e) => setBookingForm({...bookingForm, carModel: e.target.value})}
                        placeholder="e.g. Porsche 911 Carrera" 
                        className="w-full bg-[#050508] border border-slate-800 focus:border-cyan-400 p-3.5 rounded text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 block font-bold">ARMOR PROTOCOL REQUIRED</label>
                    <select 
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})}
                      className="w-full bg-[#050508] border border-slate-800 focus:border-cyan-400 p-3.5 rounded text-slate-300 outline-none transition-colors appearance-none"
                    >
                      <option>Cyber Lite Coating (2 Years)</option>
                      <option>Pro-Glow Platinum (5 Years)</option>
                      <option>Kavach TPU PPF (10 Years)</option>
                      <option>Multi-Stage Laser Paint Correction Only</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 block font-bold">ADDITIONAL SPECIFICATIONS</label>
                    <textarea 
                      rows="3"
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                      placeholder="e.g. Needs specialized wheel rim coating and caliper detailing." 
                      className="w-full bg-[#050508] border border-slate-800 focus:border-cyan-400 p-3.5 rounded text-white outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                  >
                    EXECUTE_TRANSMISSION
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#030305] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs text-slate-500">
            <div>
              <span className="text-white font-bold block mb-1">© 2026 CERAMIC PRO JUBILEE HILLS / ATTAPUR.</span>
              <span>All rights and aesthetic coordinates reserved. Powered by Sales Machine.</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#services" className="hover:text-cyan-400 transition-colors uppercase">RESOURCES</a>
              <a href="#gallery" className="hover:text-cyan-400 transition-colors uppercase">CALIBRATE</a>
              <a href="#packages" className="hover:text-cyan-400 transition-colors uppercase">ARMOR_PLANS</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Award, 
  Sliders, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  Eye,
  CheckCircle,
  Gem,
  Coffee,
  Truck,
  FileCheck2,
  Calendar
} from 'lucide-react';

// Corporate / Premium Luxury Detailing Studio Page
export default function CeramicProHyderabad() {
  const [activeServiceTab, setActiveServiceTab] = useState('ceramic');
  const [galleryState, setGalleryState] = useState('after'); // 'before' or 'after'
  const [faqOpen, setFaqOpen] = useState(null);
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleModel: '',
    package: 'Imperium Platinum Coating',
    conciergeNeeded: 'No',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setBooking({
        name: '',
        phone: '',
        email: '',
        vehicleModel: '',
        package: 'Imperium Platinum Coating',
        conciergeNeeded: 'No',
        message: ''
      });
    }, 4000);
  };

  const services = [
    {
      id: 'ceramic',
      title: 'SOVEREIGN 9H NANOCERAMIC COATING',
      description: 'The pinnacle of paint preservation. An inorganic nanostructured silica glass coating that chemically crosslinks with your car’s clear coat. Offers unmatched resistance against bird droppings, acid rain, industrial fallout, and extreme UV rays while producing a deep, three-dimensional reflective gloss.',
      benefits: [
        'Multi-layer stackable 9H hardness protection',
        'Hydrophobic water-shedding contact angle (>112°)',
        'Resistant to harsh chemicals and acidic road wash',
        'Semi-permanent protection that never washes off'
      ],
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'ppf',
      title: 'IMPERIUM COATING PPF (PAINT PROTECTION FILM)',
      description: 'Optically clear thermoplastic polyurethane (TPU) protection. Our premium film acts as a sacrificial layer shielding your paint from stone chips, road debris, and key scratches. Features an advanced elastomeric self-healing top-coat that removes minor swirls when exposed to ambient heat or sunshine.',
      benefits: [
        '8.5 Mil thick premium polyurethane film shield',
        'Instant self-healing of micro-scratches under heat',
        'Highly resistant to yellowing, stains, and cracking',
        'Pre-cut precision patterns wrapping all panel edges'
      ],
      icon: Gem,
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'correction',
      title: 'ELITE MULTI-STAGE PAINT CORRECTION',
      description: 'A meticulous restorative process that levels your clear coat to absolute perfection. Utilizing electronic paint depth meters and non-diminishing abrasive micro-compounds, we remove up to 98% of spiderweb swirls, micro-scratches, hologram marks, and clear coat oxidation to restore a true mirror reflection.',
      benefits: [
        'Digital micron-level paint depth logging',
        'Elimination of paint swirls, buffer trails, and halos',
        'Jeweling process for optical clarity and deep gloss',
        'Essential preparation phase prior to any coating'
      ],
      icon: Sliders,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'interior',
      title: 'ROYAL INTERIOR CONSERVATION',
      description: 'Meticulous interior detailing tailored to high-end leather, alcantara, and matte carbon cabin elements. We deep clean and condition all surfaces using pH-balanced interior formulas, followed by the application of hydrophobic, breathable nanomembranes that repel liquids and dye transfers.',
      benefits: [
        'Invisible spill-proof barrier for delicate leather',
        'Alcantara cleaning, conditioning, and fiber restoration',
        'Zero-gloss OEM finish protection on dashboard trims',
        'Ozone ionization for deep cabin odor elimination'
      ],
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const packages = [
    {
      name: 'SOVEREIGN GOLD',
      price: '₹28,000',
      type: 'CERAMIC COATING',
      warranty: '3 Year Warranty',
      highlight: 'RECOMMENDED ENTRY',
      perks: [
        '1 Layer of 9H Sovereign Coating on Paintwork',
        '1 Stage Premium Paint Correction (85% Defects Removed)',
        'Hydrophobic Glass Coating on Front Windshield',
        'Detailed Alloy Wheel Face Coating',
        'Complimentary 1st Maintenance Inspection'
      ]
    },
    {
      name: 'IMPERIUM PLATINUM',
      price: '₹58,000',
      type: 'CERAMIC COATING',
      warranty: '5 Year Warranty',
      highlight: 'EXECUTIVE CHOICE',
      perks: [
        '2 Layers of 9H Sovereign Coating (Base + Top)',
        '2 Stage Precision Paint Correction (98% Defects Removed)',
        'Full Glass Coating on All Windows & Sunroof',
        'High-Temp Wheel Caliper & Barrel Coating',
        'Complete Leather and Fabric Cabin Nanoprotection',
        'Annual Maintenance Cleanings for 5 Years'
      ]
    },
    {
      name: 'ROYAL EXECUTIVE PPF',
      price: '₹1,50,000',
      type: 'PAINT PROTECTION FILM',
      warranty: '10 Year Warranty',
      highlight: 'ULTIMATE SHIELD',
      perks: [
        'Full Body Premium TPU Self-Healing Film',
        'Complimentary Paint Correction Prep Treatment',
        'Ultra-Slick Ceramic Coating Overlay on PPF',
        'Invisible Edge Wrapping on All Panels',
        'Lifetime Edge-Peel Warranty Protection',
        '2 Free Annual Film Refurbishments'
      ]
    }
  ];

  const vipPerks = [
    {
      title: 'Climate-Controlled Clean Bays',
      desc: 'Our detailing lab features state-of-the-art air filtration systems to ensure a dust-free environment during critical ceramic bonding and PPF applications.',
      icon: Shield
    },
    {
      title: 'VIP Concierge Logistics',
      desc: 'We offer enclosed flatbed transport services to pick up and deliver your luxury vehicle securely from Jubilee Hills, Gachibowli, or Banjara Hills.',
      icon: Truck
    },
    {
      title: 'Executive Lounge & Workspace',
      desc: 'Enjoy premium single-origin coffee, high-speed Wi-Fi, and a comfortable workstation inside our glass-fronted customer lounge watching your car get detailed.',
      icon: Coffee
    },
    {
      title: 'Micron Paint Depth Certificates',
      desc: 'Every client receives a digital paint inspection certificate logging the clear coat micron measurements before and after our paint correction process.',
      icon: FileCheck2
    }
  ];

  const faqs = [
    {
      q: 'How does paint correction differ from a standard car polish?',
      a: 'Car polishing typically uses fillers to temporarily hide scratches. Paint correction is a permanent mechanical leveling process that removes a micro-thin layer of clear coat to permanently eliminate scratches, swirls, and etching, creating a flawless finish.'
    },
    {
      q: 'Is Ceramic Coating suitable for Hyderabad weather conditions?',
      a: 'Absolutely. Hyderabad experiences intense UV radiation and extreme heat during summers. Our premium 9H coatings contain advanced UV inhibitors that prevent oxidation, paint fading, and clear coat failure caused by sun exposure.'
    },
    {
      q: 'Can PPF be applied over Ceramic Coating?',
      a: 'PPF should always be applied directly to the prepped clear coat paint to ensure proper film adhesion. Once the film is installed, we apply a specialized hydrophobic ceramic coating over the PPF to give it slickness and water-repellent properties.'
    },
    {
      q: 'How do I maintain the coating or film after collection?',
      a: 'Avoid mechanical automatic car washes. We recommend washing your vehicle using pH-neutral shampoos and microfiber mitts. We also schedule annual maintenance washes at our Attapur studio to top up the hydrophobic performance layers.'
    }
  ];

  const reviews = [
    {
      author: 'K. S. Rao',
      title: 'Managing Director, Rao Logistics',
      vehicle: 'Mercedes S-Class 450d',
      comment: 'An outstanding experience. The level of professionalism shown by the team is exemplary. The paint depth certificates showed their attention to detail. The S-Class looks cleaner than it did in the showroom.',
      stars: 5
    },
    {
      author: 'Priya Reddy',
      title: 'Luxury Collector',
      vehicle: 'Bentley Bentayga',
      comment: 'We sent our entire fleet to their Attapur workshop for the Royal PPF. The concierge pickup was punctual, and the quality of edge-wrapping around the Bentley trim is masterfully executed. Highly recommended.',
      stars: 5
    },
    {
      author: 'Anil K. Chowdary',
      title: 'HNI Client',
      vehicle: 'Audi e-tron GT',
      comment: 'Excellent customer service. The executive lounge allowed me to hold virtual meetings while my Audi e-tron was undergoing final stage curing. The ceramic gloss is phenomenal.',
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b13] font-sans text-[#e2e8f0] selection:bg-[#c5a880] selection:text-black">
      
      {/* Upper Top Accent Border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#c5a880] via-[#eed7a1] to-[#c5a880]"></div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#070b13]/90 backdrop-blur-md border-b border-[#c5a880]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22 py-4">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-[#c5a880] to-[#b39268] flex items-center justify-center shadow-lg">
                <Gem className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-wider text-white">
                  CERAMIC PRO
                </span>
                <span className="block text-[10px] text-[#c5a880] font-bold uppercase tracking-[0.25em] font-sans leading-none mt-1">
                  HYDERABAD DETAILED
                </span>
              </div>
            </div>

            {/* Menu */}
            <nav className="hidden lg:flex space-x-10 text-xs font-semibold uppercase tracking-widest text-slate-350">
              <a href="#services" className="hover:text-[#c5a880] transition-colors">Services</a>
              <a href="#perks" className="hover:text-[#c5a880] transition-colors">VIP Privileges</a>
              <a href="#gallery" className="hover:text-[#c5a880] transition-colors">Preservation Lab</a>
              <a href="#pricing" className="hover:text-[#c5a880] transition-colors">Investment</a>
              <a href="#faq" className="hover:text-[#c5a880] transition-colors">Faq</a>
            </nav>

            {/* CTA */}
            <a 
              href="#booking"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#c5a880]/70 text-xs font-semibold tracking-wider text-white hover:text-black hover:bg-[#c5a880] hover:border-[#c5a880] transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Soft background reflections */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#c5a880] uppercase">
                <Award className="w-4 h-4" />
                <span>The Pinnacle of Paint Preservation</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light text-white leading-tight">
                Flawless Correction. <br />
                <span className="font-normal italic text-[#c5a880]">Sovereign Protection.</span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                We cater exclusively to luxury vehicle owners who demand uncompromising care. Experience bespoke multi-stage paint correction, elite 9H ceramic glass coatings, and state-of-the-art self-healing thermoplastic protection film in our climate-regulated Attapur studio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#booking"
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#c5a880] text-black font-semibold text-sm tracking-wider hover:bg-[#b39268] transition-colors"
                >
                  SECURE AN APPOINTMENT
                </a>
                <a 
                  href="#services"
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#c5a880]/40 text-white font-semibold text-sm tracking-wider hover:border-[#c5a880] hover:bg-white/5 transition-all"
                >
                  EXPLORE DETAILED SERVICES
                </a>
              </div>

              {/* Status Board */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#c5a880]/15 max-w-lg">
                <div>
                  <span className="block font-serif text-2xl font-semibold text-white">9H & 10H</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-1">Chemical Bond Rating</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-semibold text-white">100%</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-1">Dust-Free Air Bay</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-semibold text-[#c5a880]">Lifetime</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-1">Sovereign Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Graphic/Video bay visual */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#c5a880]/5 rounded-[2px] transform rotate-2 translate-x-2 translate-y-2 blur-sm"></div>
              
              <div className="relative bg-[#0F1826] border border-[#c5a880]/20 p-8 rounded-sm shadow-2xl">
                {/* Gold framing details */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#c5a880]/5 pointer-events-none"></div>

                <div className="flex justify-between items-center border-b border-[#c5a880]/15 pb-4 mb-6">
                  <span className="font-serif text-sm italic text-[#c5a880]">Studio Status</span>
                  <span className="text-[10px] bg-[#c5a880]/10 text-[#c5a880] font-bold px-2 py-0.5 rounded">ONLINE</span>
                </div>

                <div className="space-y-6 text-xs text-slate-350">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">TEMPERATURE CONTROLS</span>
                      <span>22.4°C</span>
                    </div>
                    <div className="w-full bg-[#070b13] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#c5a880] h-full w-[80%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">RELATIVE BAY HUMIDITY</span>
                      <span>45% (OPTIMAL)</span>
                    </div>
                    <div className="w-full bg-[#070b13] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[45%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">AIR FILTRATION STATUS</span>
                      <span>HEPA ACTIVE</span>
                    </div>
                    <div className="w-full bg-[#070b13] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#c5a880] h-full w-[100%]" />
                    </div>
                  </div>

                  <div className="bg-[#070b13] p-4 border border-[#c5a880]/10 rounded flex items-center justify-between mt-6">
                    <div>
                      <span className="block font-semibold text-white text-[10px]">CURRENT VEHICLE IN LAB:</span>
                      <span className="text-[9px] text-[#c5a880]">ROLLS-ROYCE GHOST</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider animate-pulse">Curing Stage</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-y border-[#c5a880]/15 bg-[#0A101C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
              PRESCRIPTION PRESERVATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              Meticulous Preservation Services
            </h2>
            <div className="h-[1px] w-20 bg-[#c5a880] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Service Selection Tabs (Left) */}
            <div className="lg:col-span-4 space-y-2">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = activeServiceTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceTab(service.id)}
                    className={`w-full flex items-center justify-between p-5 border text-left transition-all ${
                      isSelected 
                        ? 'bg-[#141d2d] border-[#c5a880] text-white shadow-md' 
                        : 'bg-transparent border-[#c5a880]/10 text-slate-450 hover:border-[#c5a880]/30 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#c5a880]' : 'text-slate-500'}`} />
                      <span className="text-xs font-semibold uppercase tracking-wider">{service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#c5a880]' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Display Detail Area (Right) */}
            <div className="lg:col-span-8 bg-[#070b13] border border-[#c5a880]/10 p-8 rounded-sm relative">
              {services.map((service) => {
                if (service.id !== activeServiceTab) return null;
                const Icon = service.icon;
                return (
                  <div key={service.id} className="space-y-6">
                    <div className="flex justify-between items-start border-b border-[#c5a880]/10 pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#0c1322] border border-[#c5a880]/20 text-[#c5a880]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#c5a880] border border-[#c5a880]/30 px-2 py-0.5 rounded uppercase font-bold">
                        ACTIVE PROTOCOL
                      </span>
                    </div>

                    <p className="text-slate-350 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 text-xs text-slate-300 p-3 bg-[#0A101C]/60 border border-[#c5a880]/10 rounded-sm">
                          <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden border border-[#c5a880]/15">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="object-cover w-full h-full opacity-70 hover:opacity-90 transition-opacity duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-[10px] text-[#c5a880] flex items-center gap-2 font-semibold tracking-wider">
                        <Eye className="w-4 h-4" />
                        <span>Preservation Lab Staging Area</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* VIP Perks / Customer Privileges (Signature Element) */}
      <section id="perks" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
              SIGNATURE ADVANTAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              VIP Customer Privilege Suite
            </h2>
            <div className="h-[1px] w-20 bg-[#c5a880] mx-auto"></div>
            <p className="text-slate-300 text-sm font-light max-w-lg mx-auto">
              Detailing goes beyond paint coatings. We provide an executive experience designed around your busy schedule and high standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipPerks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#0A101C] border border-[#c5a880]/10 p-6 rounded-sm flex flex-col justify-between hover:border-[#c5a880]/30 transition-all duration-300 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-sm bg-[#c5a880]/10 border border-[#c5a880]/20 flex items-center justify-center text-[#c5a880]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-white font-medium">
                      {perk.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Paint Preservation Lab / Before After Gallery */}
      <section id="gallery" className="py-24 border-t border-[#c5a880]/10 bg-[#060a11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Col */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
                OPTICAL VERIFICATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
                Clear Coat Defect Rectification
              </h2>
              <p className="text-slate-305 text-xs leading-relaxed">
                Swirl marks, water spots, and micro-scratches scatter light reflections, leaving the paint looking dull and oxidized. Our multi-stage paint correction levels the clear coat so light reflects perfectly, creating an outstanding mirror gloss.
              </p>

              {/* State Toggles */}
              <div className="flex gap-4 pt-2">
                <button 
                  onClick={() => setGalleryState('before')}
                  className={`px-5 py-3 text-xs font-semibold tracking-wider transition-all ${
                    galleryState === 'before'
                      ? 'bg-[#c5a880] text-black'
                      : 'border border-[#c5a880]/30 text-white hover:border-[#c5a880]'
                  }`}
                >
                  SWIRL DEFECTS (BEFORE)
                </button>
                <button 
                  onClick={() => setGalleryState('after')}
                  className={`px-5 py-3 text-xs font-semibold tracking-wider transition-all ${
                    galleryState === 'after'
                      ? 'bg-[#c5a880] text-black'
                      : 'border border-[#c5a880]/30 text-white hover:border-[#c5a880]'
                  }`}
                >
                  MIRROR COATING (AFTER)
                </button>
              </div>

              <div className="p-4 bg-[#0A101C] border border-[#c5a880]/15 text-xs text-slate-400">
                <span className="block text-white font-semibold mb-1">OPTICAL SCAN SUMMARY:</span>
                {galleryState === 'before' 
                  ? 'High scatter patterns under high-intensity calibration lamps. Paint looks faded due to spiderweb scratches and heavy clear coat oxidation.' 
                  : 'Zero light scattering. Multi-stage compound jeweling has flattened clear coat imperfections. Paint displays mirror-level reflection depth.'
                }
              </div>
            </div>

            {/* Visual Screen Col */}
            <div className="lg:col-span-7">
              <div className="relative bg-[#0d131f] p-1.5 border border-[#c5a880]/20 rounded shadow-2xl overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <img 
                    src={galleryState === 'before' 
                      ? 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop' 
                      : 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop'
                    } 
                    alt="Correction Bay Verification" 
                    className="object-cover w-full h-full"
                  />
                  
                  {/* State badge overlay */}
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-[#c5a880]/20 text-[10px] tracking-widest font-semibold uppercase">
                    {galleryState === 'before' ? (
                      <span className="text-rose-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        Clearcoat Swirls Detected
                      </span>
                    ) : (
                      <span className="text-[#c5a880] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse"></span>
                        9H Ceramic Crystallized
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1 text-[9px] text-slate-400 tracking-wider">
                    DEEP REFLECTION CALIBRATION CAMERA
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing / Investment Packages */}
      <section id="pricing" className="py-24 bg-[#0A101C] border-t border-[#c5a880]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
              INVESTMENT MATRICES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              Paint Preservation Packages
            </h2>
            <div className="h-[1px] w-20 bg-[#c5a880] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className="bg-[#070b13] border border-[#c5a880]/15 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#c5a880]/40 transition-all duration-300"
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-[#c5a880] border border-[#c5a880]/30 px-2 py-0.5 rounded font-semibold tracking-wider">
                      {pkg.highlight}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">{pkg.type}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium">
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-1 pt-2 border-b border-[#c5a880]/10 pb-4">
                    <span className="text-4xl font-serif text-white">{pkg.price}</span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">/ Starting</span>
                  </div>

                  <div className="flex justify-between items-center text-xs py-1 px-3 bg-[#0A101C] border border-[#c5a880]/5 rounded text-slate-200">
                    <span>WARRANTY PERIOD</span>
                    <span className="text-[#c5a880] font-bold">{pkg.warranty}</span>
                  </div>

                  {/* Perks list */}
                  <ul className="space-y-4 pt-4 text-xs text-slate-300">
                    {pkg.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#booking"
                  className="w-full text-center py-4 bg-[#0A101C] border border-[#c5a880]/40 hover:bg-[#c5a880] hover:text-black hover:border-[#c5a880] text-[#c5a880] transition-colors mt-8 text-xs font-semibold tracking-wider uppercase"
                >
                  ACQUIRE PACKAGE
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-[#070b13] border border-[#c5a880]/10 rounded-sm text-xs text-slate-400 text-center max-w-4xl mx-auto">
            <span className="text-[#c5a880] font-bold">Investment Guide:</span> Detailing rates vary depending on car size classifications (Compact Sedan, Executive Sedan, Luxury SUV, or Exotic Supercar). Full paint measurements are cataloged prior to work formulation.
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#070b13] border-t border-[#c5a880]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
              SATISFIED PATRONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              Client Testimonials
            </h2>
            <div className="h-[1px] w-20 bg-[#c5a880] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev, index) => (
              <div 
                key={index}
                className="bg-[#0A101C] border border-[#c5a880]/15 p-6 rounded-sm flex flex-col justify-between hover:border-[#c5a880]/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a880] text-[#c5a880]" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex justify-between items-end mt-6 pt-4 border-t border-[#c5a880]/10">
                  <div>
                    <h4 className="text-white text-xs font-semibold">{rev.author}</h4>
                    <span className="text-[10px] text-slate-400">{rev.title}</span>
                  </div>
                  <span className="text-[9px] text-[#c5a880] font-semibold bg-[#c5a880]/5 px-2 py-0.5 rounded border border-[#c5a880]/10">
                    {rev.vehicle}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-[#060a11] border-t border-[#c5a880]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
              SUPPORT MATRICES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              Frequently Asked Questions
            </h2>
            <div className="h-[1px] w-20 bg-[#c5a880] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <div 
                  key={index}
                  className="bg-[#0A101C] border border-[#c5a880]/10 rounded-sm overflow-hidden transition-colors hover:border-[#c5a880]/20"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-5 text-left text-xs font-semibold uppercase tracking-wider text-white select-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#c5a880] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#c5a880] shrink-0 ml-4" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 border-t border-[#c5a880]/10 bg-[#070b13]/50 text-slate-350 text-xs leading-relaxed font-light">
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
      <section id="booking" className="py-24 border-t border-[#c5a880]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Col Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.25em] block">
                  Preservation Request
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase">
                  Schedule Private Detailing
                </h2>
                <p className="text-slate-350 text-xs leading-relaxed max-w-md">
                  Initiate paint correction or film preservation details. Our scheduling coordinator will contact you via phone or WhatsApp to finalize parameters.
                </p>
              </div>

              <div className="space-y-4 text-xs font-light text-slate-300">
                <div className="flex items-center gap-4 p-4 bg-[#0A101C] border border-[#c5a880]/10 rounded-sm">
                  <MapPin className="w-5 h-5 text-[#c5a880]" />
                  <div>
                    <span className="text-white block font-semibold">Attapur Studio Sector</span>
                    <span>Ring Road Junction, Attapur, Hyderabad, TS</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0A101C] border border-[#c5a880]/10 rounded-sm">
                  <Phone className="w-5 h-5 text-[#c5a880]" />
                  <div>
                    <span className="text-white block font-semibold">Direct Booking Lines</span>
                    <span>+91 98480 22338 / +91 99899 44556</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0A101C] border border-[#c5a880]/10 rounded-sm">
                  <Mail className="w-5 h-5 text-[#c5a880]" />
                  <div>
                    <span className="text-white block font-semibold">Correspondence Email</span>
                    <span>ops@ceramicpro-hyderabad.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0A101C] border border-[#c5a880]/10 rounded-sm">
                  <Clock className="w-5 h-5 text-[#c5a880]" />
                  <div>
                    <span className="text-white block font-semibold">Studio Operating Hours</span>
                    <span>Mon - Sun | 09:00 - 21:00 IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-[#0A101C] border border-[#c5a880]/20 p-6 sm:p-8 rounded-sm relative">
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#c5a880]/10 border border-[#c5a880] flex items-center justify-center text-[#c5a880] shadow-lg animate-pulse">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl text-white">Request Successfully Submitted</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Thank you. Your vehicle preservation booking request has been logged. An executive detailing concierge will contact you shortly to confirm the scheduled inspection bay.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#c5a880] border border-[#c5a880]/20 px-4 py-2 hover:border-[#c5a880] transition-colors mt-4"
                  >
                    SUBMIT NEW REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6 text-xs font-light text-slate-350">
                  <div className="border-b border-[#c5a880]/10 pb-3 flex justify-between items-center">
                    <span className="text-white font-semibold text-sm font-serif">VEHICLE LOGISTICS SCHEDULE</span>
                    <span className="text-[#c5a880] text-[10px] tracking-wider uppercase font-semibold">BAY CONCIERGE</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-400 block font-semibold">OWNER NAME</label>
                      <input 
                        type="text" 
                        required
                        value={booking.name}
                        onChange={(e) => setBooking({...booking, name: e.target.value})}
                        placeholder="e.g. Vikram Verma" 
                        className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 block font-semibold">CONTACT NUMBER</label>
                      <input 
                        type="tel" 
                        required
                        value={booking.phone}
                        onChange={(e) => setBooking({...booking, phone: e.target.value})}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-400 block font-semibold">EMAIL ADDRESS</label>
                      <input 
                        type="email" 
                        required
                        value={booking.email}
                        onChange={(e) => setBooking({...booking, email: e.target.value})}
                        placeholder="e.g. vikram@domain.com" 
                        className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 block font-semibold">VEHICLE BRAND & MODEL</label>
                      <input 
                        type="text" 
                        required
                        value={booking.vehicleModel}
                        onChange={(e) => setBooking({...booking, vehicleModel: e.target.value})}
                        placeholder="e.g. Mercedes-Benz S-Class" 
                        className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-400 block font-semibold">PRESERVATION PROTOCOL</label>
                      <select 
                        value={booking.package}
                        onChange={(e) => setBooking({...booking, package: e.target.value})}
                        className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-slate-300 outline-none transition-colors appearance-none"
                      >
                        <option>Sovereign Gold (3 Year Ceramic)</option>
                        <option>Imperium Platinum (5 Year Ceramic)</option>
                        <option>Royal Executive PPF (10 Year Film)</option>
                        <option>Multi-Stage Paint Correction Only</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 block font-semibold">FLATBED PICKUP REQUIRED?</label>
                      <select 
                        value={booking.conciergeNeeded}
                        onChange={(e) => setBooking({...booking, conciergeNeeded: e.target.value})}
                        className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-slate-300 outline-none transition-colors appearance-none"
                      >
                        <option>No, I will drive to the Attapur Studio</option>
                        <option>Yes, request Enclosed Flatbed Logistics</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 block font-semibold">SPECIAL REQUISITIONS / NOTES</label>
                    <textarea 
                      rows="3"
                      value={booking.message}
                      onChange={(e) => setBooking({...booking, message: e.target.value})}
                      placeholder="e.g. Requesting leather dye transfer removal on light colored interior upholstery." 
                      className="w-full bg-[#070b13] border border-[#c5a880]/15 focus:border-[#c5a880] p-3.5 rounded-sm text-white outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#c5a880] hover:bg-[#b39268] text-black font-semibold tracking-wider uppercase transition-colors text-sm shadow-md"
                  >
                    SUBMIT RESERVATION REQUEST
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#c5a880]/15 bg-[#05080e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-light">
            <div>
              <span className="text-white font-medium block mb-1">© 2026 CERAMIC PRO HYDERABAD.</span>
              <span>All rights and vehicle configurations preserved. Developed under Sales Machine pipeline.</span>
            </div>
            
            <div className="flex gap-6 uppercase tracking-widest text-[10px]">
              <a href="#services" className="hover:text-[#c5a880] transition-colors">Protocols</a>
              <a href="#perks" className="hover:text-[#c5a880] transition-colors">VIP Perks</a>
              <a href="#pricing" className="hover:text-[#c5a880] transition-colors">Investment</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
